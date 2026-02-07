/**
 * Settings store using localStorage for persistence.
 * Manages user preferences for TTS and presentation features.
 */

import { useState, useEffect } from 'react';

export interface AppSettings {
  /** Auto-play speaker notes when slide becomes active */
  autoPlayNotes: boolean;
  /** Auto-play slide content when slide becomes active */
  autoPlayContent: boolean;
  /** Voice for slide content */
  contentVoice: string;
  /** Voice for speaker notes */
  notesVoice: string;
}

const DEFAULT_SETTINGS: AppSettings = {
  autoPlayNotes: false,
  autoPlayContent: false,
  contentVoice: 'verse',
  notesVoice: 'verse',
};

const STORAGE_KEY = 'deck-app-settings';

/** Load settings from localStorage */
function loadSettings(): AppSettings {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
    }
  } catch (err) {
    console.warn('Failed to load settings:', err);
  }
  return DEFAULT_SETTINGS;
}

/** Save settings to localStorage */
function saveSettings(settings: AppSettings): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
  } catch (err) {
    console.warn('Failed to save settings:', err);
  }
}

/**
 * Hook for accessing and updating app settings.
 * Settings are persisted to localStorage automatically.
 */
export function useSettings() {
  const [settings, setSettings] = useState<AppSettings>(loadSettings);

  useEffect(() => {
    saveSettings(settings);
  }, [settings]);

  const updateSetting = <K extends keyof AppSettings>(
    key: K,
    value: AppSettings[K]
  ) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
  };

  return {
    settings,
    updateSetting,
    resetSettings,
  };
}
