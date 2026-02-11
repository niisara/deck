import React, { useCallback, useEffect, useRef } from 'react';
import { useTextToSpeech, type TTSStatus, type TTSVoice } from '../hooks/useTextToSpeech';
import SvgIcon from '../lib/icons/SvgIcon';
import './SlideAudioControls.css';

interface SlideAudioControlsProps {
  /** The slide's visible content as plain text */
  slideContent: string;
  /** The speaker notes as plain text */
  notes?: string;
  /** Icon color (auto-contrasted against slide background) */
  iconColor?: string;
  /** Voice configuration for slide content */
  contentVoice?: TTSVoice;
  /** Instructions for slide content speech style */
  contentInstructions?: string;
  /** Voice configuration for speaker notes */
  notesVoice?: TTSVoice;
  /** Instructions for speaker notes speech style */
  notesInstructions?: string;
  /** Auto-play slide content when slide changes */
  autoPlayContent?: boolean;
  /** Auto-play speaker notes when slide changes */
  autoPlayNotes?: boolean;
  /** Control visibility of audio buttons (speaker notes always visible) */
  showControls?: boolean;
}

/** Small status indicator dot */
const StatusDot: React.FC<{ status: TTSStatus }> = ({ status }) => {
  if (status === 'idle') return null;

  const colorMap: Record<TTSStatus, string> = {
    idle: 'transparent',
    loading: '#f39c12',
    playing: '#2ecc71',
    error: '#e74c3c',
  };

  return (
    <span
      className="tts-status-dot"
      style={{ backgroundColor: colorMap[status] }}
    />
  );
};

/**
 * Two-button audio control overlay for a slide.
 *
 * - 🔊 button: reads the slide content aloud
 * - 📝 button: reads the speaker notes aloud
 *
 * Uses the `useTextToSpeech` hook under the hood.
 */
const SlideAudioControls: React.FC<SlideAudioControlsProps> = ({
  slideContent,
  notes,
  iconColor = '#ffffff',
  contentVoice = 'verse',
  contentInstructions = `Voice: Laid-back, mellow, and effortlessly cool, like a surfer who's never in a rush. Tone: Relaxed and reassuring, keeping things light and chill. Speech Mannerisms: Use casual, friendly phrasing with surfer slang like dude, gnarly, and boom to keep the conversation chill. Pronunciation: Soft and drawn-out, with slightly stretched vowels and a naturally wavy rhythm in speech. Tempo: Slow and easygoing, with a natural flow that never feels rushed, creating a calming effect.`,
  notesVoice = 'verse',
  notesInstructions = `Voice: Laid-back, mellow, and effortlessly cool, like a surfer who's never in a rush. Tone: Relaxed and reassuring, keeping things light even when discussing complex details. Speech Mannerisms: Use casual, friendly phrasing with surfer slang like dude, gnarly, and boom to keep things chill. Pronunciation: Soft and drawn-out, with slightly stretched vowels and a naturally wavy rhythm. Tempo: Slow and easygoing, with a natural flow that creates a calming, informative vibe.`,
  autoPlayContent = false,
  autoPlayNotes = false,
  showControls = true,
}) => {
  const contentTTS = useTextToSpeech({
    voice: contentVoice,
    instructions: contentInstructions,
  });
  const notesTTS = useTextToSpeech({
    voice: notesVoice,
    instructions: notesInstructions,
  });

  // Track the previous slide content to detect changes
  const prevSlideContentRef = useRef<string>('');

  // Auto-play on slide change
  useEffect(() => {
    // Only trigger if slide content has actually changed (new slide)
    if (slideContent && slideContent !== prevSlideContentRef.current) {
      prevSlideContentRef.current = slideContent;

      // Prioritize: if both are enabled, play notes first, then content
      // (in practice, only one should be enabled at a time)
      if (autoPlayNotes && notes) {
        notesTTS.speak(notes);
      } else if (autoPlayContent) {
        contentTTS.speak(slideContent);
      }
    }
  }, [slideContent, notes, autoPlayContent, autoPlayNotes, contentTTS, notesTTS]);

  // Core toggle logic for notes TTS (shared by click handler and keyboard shortcut)
  const toggleNotes = useCallback(() => {
    if (notesTTS.status === 'playing' || notesTTS.status === 'loading') {
      notesTTS.stop();
    } else {
      contentTTS.stop();
      notesTTS.speak(notes || '');
    }
  }, [contentTTS, notesTTS, notes]);

  const handleContentClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (contentTTS.status === 'playing' || contentTTS.status === 'loading') {
        contentTTS.stop();
      } else {
        // Stop the other channel if playing
        notesTTS.stop();
        contentTTS.speak(slideContent);
      }
    },
    [contentTTS, notesTTS, slideContent]
  );

  const handleNotesClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      toggleNotes();
    },
    [toggleNotes]
  );

  const handleRegenerateContent = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      // Stop both channels
      contentTTS.stop();
      notesTTS.stop();
      // Regenerate and save to blob storage
      contentTTS.regenerate(slideContent);
    },
    [contentTTS, notesTTS, slideContent]
  );

  const handleRegenerateNotes = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      // Stop both channels
      contentTTS.stop();
      notesTTS.stop();
      // Regenerate and save to blob storage
      notesTTS.regenerate(notes || '');
    },
    [contentTTS, notesTTS, notes]
  );

  // Ref to detect if this instance is on the currently active slide
  const controlRef = useRef<HTMLDivElement>(null);

  // Global Alt+T shortcut to trigger notes playback (only for the active slide)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && e.key.toLowerCase() === 't') {
        // Only respond if this control belongs to the currently visible slide
        const section = controlRef.current?.closest('section');
        if (!section || !section.classList.contains('present')) return;

        e.preventDefault();
        e.stopPropagation();
        toggleNotes();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [toggleNotes]);

  // Check if we're in development mode
  const isDev = import.meta.env.VITE_IS_PROD === 'false' || !import.meta.env.VITE_IS_PROD;

  return (
    <>
      {/* Development-only: TTS Regeneration Controls */}
      {isDev && (
        <div className="slide-audio-controls slide-audio-controls-dev">
          {showControls && (
            <button
              className={`slide-audio-btn ${contentTTS.status === 'loading' ? 'active' : ''}`}
              onClick={handleRegenerateContent}
              title="Regenerate slide content TTS and save to cache"
              aria-label="Regenerate slide content TTS"
              disabled={contentTTS.status === 'loading'}
            >
              <SvgIcon
                iconName="duo-rotate-right"
                sizeName="lg"
                style={{ color: iconColor }}
              />
              <StatusDot status={contentTTS.status} />
            </button>
          )}

          {notes && showControls && (
            <button
              className={`slide-audio-btn ${notesTTS.status === 'loading' ? 'active' : ''}`}
              onClick={handleRegenerateNotes}
              title="Regenerate speaker notes TTS and save to cache"
              aria-label="Regenerate speaker notes TTS"
              disabled={notesTTS.status === 'loading'}
            >
              <SvgIcon
                iconName="duo-arrows-rotate"
                sizeName="lg"
                style={{ color: iconColor }}
              />
              <StatusDot status={notesTTS.status} />
            </button>
          )}
        </div>
      )}

      {/* Regular playback controls */}
      <div className="slide-audio-controls" ref={controlRef}>
        {/* Read slide content - only shown when showControls is true */}
        {showControls && (
          <button
            className={`slide-audio-btn ${contentTTS.status !== 'idle' ? 'active' : ''}`}
            onClick={handleContentClick}
            title={
              contentTTS.status === 'playing'
                ? 'Stop reading slide'
                : contentTTS.status === 'loading'
                ? 'Loading…'
                : 'Read slide content'
            }
            aria-label="Read slide content"
          >
            <SvgIcon
              iconName="duo-volume-high"
              sizeName="lg"
              style={{ color: iconColor }}
            />
            <StatusDot status={contentTTS.status} />
          </button>
        )}

        {/* Read speaker notes - always shown */}
        {notes && (
          <button
            className={`slide-audio-btn ${notesTTS.status !== 'idle' ? 'active' : ''}`}
            onClick={handleNotesClick}
            title={
              notesTTS.status === 'playing'
                ? 'Stop reading notes'
                : notesTTS.status === 'loading'
                ? 'Loading…'
                : 'Read speaker notes'
            }
            aria-label="Read speaker notes"
          >
            <SvgIcon
              iconName="duo-note-sticky"
              sizeName="lg"
              style={{ color: iconColor }}
            />
            <StatusDot status={notesTTS.status} />
          </button>
        )}
      </div>
    </>
  );
};

export default SlideAudioControls;
