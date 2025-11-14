import type { RevealTheme } from '../data/types';

// Import all theme CSS files directly so Vite bundles them
import blackTheme from 'reveal.js/dist/theme/black.css?url';
import whiteTheme from 'reveal.js/dist/theme/white.css?url';
import leagueTheme from 'reveal.js/dist/theme/league.css?url';
import beigeTheme from 'reveal.js/dist/theme/beige.css?url';
import nightTheme from 'reveal.js/dist/theme/night.css?url';
import serifTheme from 'reveal.js/dist/theme/serif.css?url';
import simpleTheme from 'reveal.js/dist/theme/simple.css?url';
import solarizedTheme from 'reveal.js/dist/theme/solarized.css?url';
import moonTheme from 'reveal.js/dist/theme/moon.css?url';
import draculaTheme from 'reveal.js/dist/theme/dracula.css?url';
import skyTheme from 'reveal.js/dist/theme/sky.css?url';
import bloodTheme from 'reveal.js/dist/theme/blood.css?url';

// Theme CSS imports
const themeModules: Record<RevealTheme, string> = {
  'black': blackTheme,
  'white': whiteTheme,
  'league': leagueTheme,
  'beige': beigeTheme,
  'night': nightTheme,
  'serif': serifTheme,
  'simple': simpleTheme,
  'solarized': solarizedTheme,
  'moon': moonTheme,
  'dracula': draculaTheme,
  'sky': skyTheme,
  'blood': bloodTheme,
};

export function loadTheme(theme: RevealTheme): () => void {
  const themeId = 'reveal-theme-link';
  
  // Remove existing theme link if present
  const existingLink = document.getElementById(themeId);
  if (existingLink) {
    existingLink.remove();
  }
  
  // Create new theme link
  const link = document.createElement('link');
  link.id = themeId;
  link.rel = 'stylesheet';
  link.href = themeModules[theme];
  document.head.appendChild(link);

  // Return cleanup function
  return () => {
    const linkToRemove = document.getElementById(themeId);
    if (linkToRemove) {
      linkToRemove.remove();
    }
  };
}
