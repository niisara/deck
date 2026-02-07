import React, { useCallback } from 'react';
import { useTextToSpeech, type TTSStatus } from '../hooks/useTextToSpeech';
import SvgIcon from '../lib/icons/SvgIcon';
import './SlideAudioControls.css';

interface SlideAudioControlsProps {
  /** The slide's visible content as plain text */
  slideContent: string;
  /** The speaker notes as plain text */
  notes?: string;
  /** Icon color (auto-contrasted against slide background) */
  iconColor?: string;
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
}) => {
  const contentTTS = useTextToSpeech();
  const notesTTS = useTextToSpeech();

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
