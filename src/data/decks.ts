export type { Slide, Deck, RevealTheme } from './types';
import { demoDeck } from './demo-deck';
import { sampleDeck } from './sample-deck';
import { nerMetricsDeck } from './ner-metrics-deck';
import { embeddingQualityDeck } from './embedding-quality-deck';
import { nerTrainingDeck } from './ner-training-deck';
import { embeddingModelsDeck } from './embedding-models-deck';

export const decks = [
  demoDeck,
  sampleDeck,
  nerMetricsDeck,
  embeddingQualityDeck,
  nerTrainingDeck,
  embeddingModelsDeck
];
