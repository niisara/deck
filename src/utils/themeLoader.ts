import type { RevealTheme } from '../data/types';

// Theme CSS imports
const themeModules: Record<RevealTheme, string> = {
  'black': '/node_modules/reveal.js/dist/theme/black.css',
  'white': '/node_modules/reveal.js/dist/theme/white.css',
  'league': '/node_modules/reveal.js/dist/theme/league.css',
  'beige': '/node_modules/reveal.js/dist/theme/beige.css',
  'night': '/node_modules/reveal.js/dist/theme/night.css',
  'serif': '/node_modules/reveal.js/dist/theme/serif.css',
  'simple': '/node_modules/reveal.js/dist/theme/simple.css',
  'solarized': '/node_modules/reveal.js/dist/theme/solarized.css',
  'moon': '/node_modules/reveal.js/dist/theme/moon.css',
  'dracula': '/node_modules/reveal.js/dist/theme/dracula.css',
  'sky': '/node_modules/reveal.js/dist/theme/sky.css',
  'blood': '/node_modules/reveal.js/dist/theme/blood.css',
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
