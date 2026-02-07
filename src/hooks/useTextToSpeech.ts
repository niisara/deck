import { useRef, useState, useCallback } from 'react';

export type TTSStatus = 'idle' | 'loading' | 'playing' | 'error';

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

/**
 * Reusable hook that calls Azure OpenAI TTS (gpt-4o-mini-tts)
 * and plays the resulting audio through the browser.
 *
 * Uses the `VITE_AZURE_API_KEY` and `VITE_AZURE_ENDPOINT` env vars.
 */
export function useTextToSpeech(): UseTextToSpeechReturn {
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

      if (!text.trim()) return;

      const apiKey = import.meta.env.VITE_AZURE_API_KEY;
      const endpoint = import.meta.env.VITE_AZURE_ENDPOINT;

      if (!apiKey || !endpoint) {
        setError('TTS API key or endpoint not configured.');
        setStatus('error');
        return;
      }

      setStatus('loading');
      setError(null);

      const controller = new AbortController();
      abortRef.current = controller;

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'api-key': apiKey,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini-tts',
            input: text,
            voice: 'coral',
            response_format: 'mp3',
          }),
          signal: controller.signal,
        });

        if (!response.ok) {
          const errorBody = await response.text().catch(() => '');
          throw new Error(
            `TTS request failed (${response.status}): ${errorBody || response.statusText}`
          );
        }

        const blob = await response.blob();
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
