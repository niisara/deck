export type { Slide, Deck, RevealTheme } from './types';
import { nerMetricsDeck } from './ner-metrics-deck';
import { embeddingQualityDeck } from './embedding-quality-deck';
import { nerTrainingDeck } from './ner-training-deck';
import { embeddingModelsDeck } from './embedding-models-deck';
import { vectorIndexingDeck } from './vector-indexing-deck';
import { metadataEnrichmentDeck } from './metadata-enrichment-deck';
import { multiStepRetrievalDeck } from './multi-step-retrieval-deck';
import { hybridSearchDeck } from './hybrid-search-deck';
import { nerApproachesDeck } from './ner-approaches-deck';
import { parentChildRetrievalDeck } from './parent-child-retrieval-deck';
import { productionRagDeck } from './production-rag-deck';
import { rerankingModelsDeck } from './reranking-models-deck';
import { ragLatencyDeck } from './rag-latency-deck';
import { llmCachingDeck } from './llm-caching-deck';
import { contextPackingDeck } from './context-packing-deck';
import { entityNormalizationDeck } from './entity-normalization-deck';
import { featureExtractionDeck } from './feature-extraction-deck';
import { graphRetrievalDeck } from './graph-retrieval-deck';
import { ragEvaluationMetricsDeck } from './rag-evaluation-metrics-deck';
import { sentimentAnalysisDeck } from './sentiment-analysis-deck';
import { documentPreprocessingDeck } from './document-preprocessing-deck';
import { promptEngineeringDeck } from './prompt-engineering-deck';
import { queryRewritingDeck } from './query-rewriting-deck';
import { textPreprocessingDeck } from './text-preprocessing-deck';
import { chunkingTechniquesDeck } from './chunking-techniques-deck';
import { vectorDatabasesDeck } from './vector-databases-deck';
import { deathDeck } from './death-deck';
import { guruPujaDeck } from './guru-puja-deck';

const isProd = import.meta.env.VITE_IS_PROD === 'true';

export const decks = [
  guruPujaDeck,
  deathDeck,
  nerMetricsDeck,
  embeddingQualityDeck,
  nerTrainingDeck,
  embeddingModelsDeck,
  vectorIndexingDeck,
  metadataEnrichmentDeck,
  multiStepRetrievalDeck,
  hybridSearchDeck,
  nerApproachesDeck,
  parentChildRetrievalDeck,
  productionRagDeck,
  rerankingModelsDeck,
  ragLatencyDeck,
  llmCachingDeck,
  contextPackingDeck,
  entityNormalizationDeck,
  featureExtractionDeck,
  graphRetrievalDeck,
  ragEvaluationMetricsDeck,
  sentimentAnalysisDeck,
  documentPreprocessingDeck,
  promptEngineeringDeck,
  queryRewritingDeck,
  textPreprocessingDeck,
  chunkingTechniquesDeck,
  vectorDatabasesDeck
];
