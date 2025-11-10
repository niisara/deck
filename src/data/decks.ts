export type { Slide, Deck, RevealTheme } from './types';
import { demoDeck } from './demo-deck';
import { sampleDeck } from './sample-deck';
import { nerMetricsDeck } from './ner-metrics-deck';
import { embeddingQualityDeck } from './embedding-quality-deck';

export const decks = [
  demoDeck,
  sampleDeck,
  nerMetricsDeck,
  embeddingQualityDeck
];
