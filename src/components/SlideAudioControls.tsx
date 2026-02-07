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
      if (notesTTS.status === 'playing' || notesTTS.status === 'loading') {
        notesTTS.stop();
      } else {
        // Stop the other channel if playing
        contentTTS.stop();
        notesTTS.speak(notes || '');
      }
    },
    [contentTTS, notesTTS, notes]
  );

  return (
    <div className="slide-audio-controls">
      {/* Read slide content */}
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

      {/* Read speaker notes */}
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
  );
};

export default SlideAudioControls;
