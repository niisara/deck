export type { Slide, Deck, RevealTheme } from './types';
import { demoDeck } from './demo-deck';
import { sampleDeck } from './sample-deck';
import { nerMetricsDeck } from './ner-metrics-deck';
import { embeddingQualityDeck } from './embedding-quality-deck';
import { nerTrainingDeck } from './ner-training-deck';
import { embeddingModelsDeck } from './embedding-models-deck';
import { vectorIndexingDeck } from './vector-indexing-deck';
import { metadataEnrichmentDeck } from './metadata-enrichment-deck';
import { multiStepRetrievalDeck } from './multi-step-retrieval-deck';
import { hybridSearchDeck } from './hybrid-search-deck';

export const decks = [
  demoDeck,
  sampleDeck,
  nerMetricsDeck,
  embeddingQualityDeck,
  nerTrainingDeck,
  embeddingModelsDeck,
  vectorIndexingDeck,
  metadataEnrichmentDeck,
  multiStepRetrievalDeck,
  hybridSearchDeck
];
