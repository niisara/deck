export type { Slide, Deck } from './types';
import { demoDeck } from './demo-deck';
import { sampleDeck } from './sample-deck';
import { nerMetricsDeck } from './ner-metrics-deck';

export const decks = [
  demoDeck,
  sampleDeck,
  nerMetricsDeck
];
