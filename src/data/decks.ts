export type { Slide, Deck, RevealTheme } from './types';
export { deckRegistry, type DeckMeta } from './deckRegistry';

// `decks` re-exports the registry array so existing imports keep working.
// Each entry contains only lightweight metadata — deck content is loaded
// on demand via the `load()` function when a user navigates to the deck.
export { deckRegistry as decks } from './deckRegistry';
