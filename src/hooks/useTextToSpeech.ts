import { useRef, useState, useCallback } from 'react';
import { sanitizeTTSText } from '../utils/sanitizeTTSText';
import { ttsCacheKey, getCachedAudio, putCachedAudio } from '../utils/ttsCache';

export type TTSStatus = 'idle' | 'loading' | 'playing' | 'error';

/** Azure OpenAI voices */
export type AzureVoice = 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer' | 'coral' | 'sage' | 'verse';

/** For ElevenLabs, the voice is selected via VITE_ELEVENLABS_VOICE_ID env var */
export type TTSVoice = AzureVoice | string;

export type TTSProvider = 'azure' | 'elevenlabs';

export interface TTSOptions {
  /** Voice to use for speech synthesis (Azure voice name or ElevenLabs voice ID) */
  voice?: TTSVoice;
  /** Instructions to guide the speech style and delivery (Azure OpenAI only) */
  instructions?: string;
}

interface UseTextToSpeechReturn {
  /** Current playback status */
  status: TTSStatus;
  /** Start speaking the given text. Stops any current playback first. */
  speak: (text: string) => Promise<void>;
  /** Stop current playback */
  stop: () => void;
  /** Error message if status === 'error' */
  error: string | null;
}

/** Determine which TTS provider to use from env */
function getTTSProvider(): TTSProvider {
  const provider = import.meta.env.VITE_TTS_PROVIDER;
  if (provider === 'elevenlabs') return 'elevenlabs';
  return 'azure'; // default
}

/** Call Azure OpenAI TTS and return audio blob */
async function fetchAzureTTS(
  text: string,
  voice: string,
  instructions: string | undefined,
  signal: AbortSignal
): Promise<Blob> {
  const apiKey = import.meta.env.VITE_AZURE_API_KEY;
  const endpoint = import.meta.env.VITE_AZURE_ENDPOINT;

  if (!apiKey || !endpoint) {
    throw new Error('Azure TTS API key or endpoint not configured.');
  }

  const requestBody: any = {
    model: 'gpt-4o-mini-tts',
    input: text,
    voice,
    response_format: 'mp3',
  };

  if (instructions) {
    requestBody.instructions = instructions;
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
    signal,
  });

  if (!response.ok) {
    const errorBody = await response.text().catch(() => '');
    throw new Error(
      `Azure TTS request failed (${response.status}): ${errorBody || response.statusText}`
    );
  }

  return response.blob();
}

/** Call ElevenLabs Text-to-Dialogue API and return audio blob */
async function fetchElevenLabsTTS(
  text: string,
  signal: AbortSignal
): Promise<Blob> {
  const apiKey = import.meta.env.VITE_ELEVENLABS_API_KEY;
  const voiceId = import.meta.env.VITE_ELEVENLABS_VOICE_ID;

  if (!apiKey) {
    throw new Error('ElevenLabs API key not configured (VITE_ELEVENLABS_API_KEY).');
  }
  if (!voiceId) {
    throw new Error('ElevenLabs voice ID not configured (VITE_ELEVENLABS_VOICE_ID). Clone your voice at elevenlabs.io and paste the voice ID.');
  }

  const response = await fetch(
    `https://api.elevenlabs.io/v1/text-to-dialogue?output_format=mp3_44100_128`,
    {
      method: 'POST',
      headers: {
        'xi-api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inputs: [
          {
            text,
            voice_id: voiceId
          }
        ],
        model_id: 'eleven_v3',
        settings: {
          stability: 0.5,
          similarity_boost: 0.8
        }
      }),
      signal,
    }
  );

  if (!response.ok) {
    const errorBody = await response.text().catch(() => '');
    throw new Error(
      `ElevenLabs TTS request failed (${response.status}): ${errorBody || response.statusText}`
    );
  }

  return response.blob();
}

/**
 * Reusable hook that calls either Azure OpenAI TTS or ElevenLabs TTS
 * based on the `VITE_TTS_PROVIDER` env var ('azure' | 'elevenlabs').
 *
 * Azure uses: `VITE_AZURE_API_KEY` and `VITE_AZURE_ENDPOINT`
 * ElevenLabs uses: `VITE_ELEVENLABS_API_KEY` and `VITE_ELEVENLABS_VOICE_ID`
 *
 * @param options - Optional configuration for voice and instructions
 */
export function useTextToSpeech(options: TTSOptions = {}): UseTextToSpeechReturn {
  const { voice = 'coral', instructions } = options;
  const [status, setStatus] = useState<TTSStatus>('idle');
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  const stop = useCallback(() => {
    // Abort any in-flight fetch
    if (abortRef.current) {
      abortRef.current.abort();
      abortRef.current = null;
    }

    // Stop & release audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;

      // Revoke the object URL to free memory
      const src = audioRef.current.src;
      if (src.startsWith('blob:')) {
        URL.revokeObjectURL(src);
      }
      audioRef.current = null;
    }

    setStatus('idle');
  }, []);

  const speak = useCallback(
    async (text: string) => {
      // Stop any existing playback first
      stop();

      // Sanitize text: remove code blocks, mermaid diagrams, HTML, LaTeX, etc.
      const cleanText = sanitizeTTSText(text);
      if (!cleanText.trim()) return;

      setStatus('loading');
      setError(null);

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const provider = getTTSProvider();
        const voiceKey = provider === 'elevenlabs'
          ? (import.meta.env.VITE_ELEVENLABS_VOICE_ID || 'default')
          : voice;
        const cacheKey = await ttsCacheKey(provider, voiceKey, cleanText);

        // 1. Try blob storage cache first
        let blob = await getCachedAudio(cacheKey, controller.signal);

        if (!blob) {
          // 2. Cache miss → generate via TTS provider
          if (provider === 'elevenlabs') {
            blob = await fetchElevenLabsTTS(cleanText, controller.signal);
          } else {
            blob = await fetchAzureTTS(cleanText, voice, instructions, controller.signal);
          }

          // 3. Store in cache (fire-and-forget)
          putCachedAudio(cacheKey, blob);
        }

        const url = URL.createObjectURL(blob);

        const audio = new Audio(url);
        audioRef.current = audio;

        audio.onended = () => {
          URL.revokeObjectURL(url);
          audioRef.current = null;
          setStatus('idle');
        };

        audio.onerror = () => {
          URL.revokeObjectURL(url);
          audioRef.current = null;
          setError('Audio playback failed.');
          setStatus('error');
        };

        await audio.play();
        setStatus('playing');
      } catch (err: any) {
        if (err.name === 'AbortError') {
          // Intentional abort – don't treat as error
          setStatus('idle');
          return;
        }
        console.error('[TTS] Error:', err);
        setError(err.message || 'Unknown TTS error');
        setStatus('error');
      }
    },
    [stop]
  );

  return { status, speak, stop, error };
}
