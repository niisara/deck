import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const hybridSearchDeck: Deck = {
  id: 'hybrid-search-deck',
  name: '11 Hybrid Search Patterns (Vector + BM25)',
  description: 'A practical cheat sheet for combining lexical and semantic search to build more powerful retrieval systems',
  category: 'RAG',
  theme: 'night',
  slides: [],
  slideGroups: [
    {
      id: 'intro',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          title: '11 Hybrid Search Patterns',
          content: (
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ marginBottom: '20px' }}>
                <SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={{ marginRight: '15px', verticalAlign: 'middle' }} darkModeInvert={true} />
                Vector + BM25
              </h2>
              <p style={{ fontSize: '1.2em', marginTop: '30px' }}>
                A practical cheat sheet for combining lexical and semantic search to build more powerful retrieval systems
              </p>
              <div style={{ marginTop: '40px', fontSize: '0.9em', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                <span>Weighted Hybrid</span>
                <span>•</span>
                <span>Two-Stage Retrieval</span>
                <span>•</span>
                <span>Term-Boosted Vector</span>
                <span>•</span>
                <span>Metadata-Filtered</span>
                <span>•</span>
                <span>Field-Aware Scoring</span>
                <span>•</span>
                <span>Query Expansion</span>
                <span>•</span>
                <span>Cross-Encoder Re-Ranking</span>
                <span>•</span>
                <span>Parent-Child Chunking</span>
                <span>•</span>
                <span>ANN + BM25</span>
                <span>•</span>
                <span>Domain Dictionaries</span>
              </div>
              <p style={{ fontSize: '0.8em', marginTop: '40px', color: '#aaa' }}>
                Your Company / Team • November 2025
              </p>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Title slide introducing 11 hybrid search patterns combining vector and BM25 approaches'
        },
        {
          id: 2,
          title: 'Hybrid Search: What and Why',
          icon: { name: 'duo-lightbulb', size: '5x' },
          content: (
            <div style={{ textAlign: 'left', fontSize: '0.9em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4fc3f7' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                    What it is
                  </h3>
                  <p>Combine lexical match (BM25) with semantic vector search for higher recall and precision.</p>
                </div>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#81c784' }}>
                    <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                    Why it works
                  </h3>
                  <ul style={{ fontSize: '0.9em', paddingLeft: '20px' }}>
                    <li>BM25 excels at exact tokens, filters, and field boosts</li>
                    <li>Vectors capture paraphrases, synonyms, and context</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffb74d' }}>
                    <SvgIcon iconName="duo-arrows-rotate" sizeName="2x" darkModeInvert={true} />
                    Common fusion methods
                  </h3>
                  <ul style={{ fontSize: '0.9em', paddingLeft: '20px' }}>
                    <li>Weighted sum (normalize then blend)</li>
                    <li>Reciprocal Rank Fusion (RRF)</li>
                    <li>Two-stage cascades (retrieve → re-rank)</li>
                    <li>Cross-encoder re-ranking</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ba68c8' }}>
                    <SvgIcon iconName="duo-star" sizeName="2x" darkModeInvert={true} />
                    Key benefits
                  </h3>
                  <ul style={{ fontSize: '0.9em', paddingLeft: '20px' }}>
                    <li>Higher precision and recall than either method alone</li>
                    <li>Handles both exact matches and semantic similarity</li>
                    <li>Adapts to different query types and content domains</li>
                    <li>Improves relevance ranking, especially for RAG systems</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Overview of hybrid search: what it is, why it works, and key benefits'
        }
      ]
    },
    {
      id: 'pattern-1',
      title: 'Weighted Hybrid Scoring',
      slides: [
        {
          id: 3,
          title: 'Pattern 1 — Weighted Hybrid Scoring',
          icon: { name: 'duo-sliders', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <p><strong>Idea / Pattern Summary:</strong> Blend BM25 and embedding similarity into one normalized score.</p>
                <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Default hybrid for most queries; balanced corpora; fast and simple deployments.</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>How it Works:</strong></p>
                  <ol style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <li>Run BM25 and vector search in parallel for top-k</li>
                    <li>Normalize scores (e.g., min-max, z-score)</li>
                    <li>Compute final = α·vector + (1−α)·BM25 or use RRF</li>
                    <li>Return top-N by final score</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Simple, tunable weighting (alpha)</li>
                      <li>Works with most engines and scales well</li>
                      <li>Deterministic and easy to explain</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Requires careful score normalization</li>
                      <li>One alpha rarely fits all queries</li>
                      <li>May surface duplicates from each list</li>
                    </ul>
                  </div>
                </div>
                <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p style={{ fontSize: '0.85em' }}><strong>Tools / Libraries:</strong> Elasticsearch (hybrid, RRF, Linear retriever), Weaviate (alpha), Qdrant (score fusion), Vespa (rank profiles), Azure AI Search (hybrid RRF), Pinecone (sparse+dense)</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: 'Pattern 1: Weighted hybrid scoring - simple and effective baseline'
        }
      ]
    },
    {
      id: 'pattern-2',
      title: 'Two-Stage Retrieval',
      slides: [
        {
          id: 4,
          title: 'Pattern 2 — Two-Stage Retrieval (BM25 → Vector Re-Rank)',
          icon: { name: 'duo-filter', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <p><strong>Idea / Pattern Summary:</strong> Recall with fast BM25, then re-rank candidates using embedding similarity.</p>
                <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Keyword-heavy domains; strong exact-match needs; large corpora where BM25 makes a great first filter.</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>How it Works:</strong></p>
                  <ol style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <li>Stage 1: BM25 retrieves top-M (e.g., 200)</li>
                    <li>Embed query (and/or docs) via bi-encoder</li>
                    <li>Score candidates by cosine/dot product</li>
                    <li>Re-rank and return top-N</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Efficient first-pass recall; uses inverted index</li>
                      <li>Good precision at low compute cost</li>
                      <li>Easy to retrofit onto existing search</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>BM25 must not miss relevant docs (query mismatch risk)</li>
                      <li>Needs embedding infra for re-rank</li>
                      <li>May require query expansion to avoid early miss</li>
                    </ul>
                  </div>
                </div>
                <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p style={{ fontSize: '0.85em' }}><strong>Tools / Libraries:</strong> Elasticsearch (query + knn rank section), Haystack (BM25Retriever → EmbeddingReranker), LlamaIndex, Qdrant + SentenceTransformers, OpenSearch hybrid + rank</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Pattern 2: Two-stage retrieval with BM25 first pass'
        }
      ]
    },
    {
      id: 'pattern-3',
      title: 'Reverse Two-Stage',
      slides: [
        {
          id: 5,
          title: 'Pattern 3 — Reverse Two-Stage (Vector → BM25 Re-Rank)',
          icon: { name: 'duo-arrows-rotate', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <p><strong>Idea / Pattern Summary:</strong> Recall with vector ANN, then re-rank by BM25 to emphasize exact terms.</p>
                <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Paraphrastic queries; vocabulary mismatch; long-tail semantics.</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>How it Works:</strong></p>
                  <ol style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <li>Stage 1: ANN retrieves top-M semantically similar chunks</li>
                    <li>Compute BM25 scores for those candidates</li>
                    <li>Re-rank by BM25 (or combine with vector)</li>
                    <li>Return top-N</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Strong semantic recall up front</li>
                      <li>BM25 re-rank improves precision and control</li>
                      <li>Good for multilingual/paraphrase-heavy content</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Requires ANN filter support or careful post-filtering</li>
                      <li>Lexical re-rank can demote valid paraphrases</li>
                      <li>Extra roundtrip/join by doc IDs</li>
                    </ul>
                  </div>
                </div>
                <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p style={{ fontSize: '0.85em' }}><strong>Tools / Libraries:</strong> Qdrant/Milvus/Pinecone (ANN) + Elasticsearch/OpenSearch (BM25), Vespa (two-phase ranking), Weaviate hybrid with sort by property</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Pattern 3: Reverse two-stage with vector first pass'
        }
      ]
    },
    {
      id: 'pattern-4',
      title: 'Term-Boosted Vector Search',
      slides: [
        {
          id: 6,
          title: 'Pattern 4 — Term-Boosted Vector Search',
          icon: { name: 'duo-gauge-high', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <p><strong>Idea / Pattern Summary:</strong> Add keyword boosts/must-haves to vector similarity to control precision.</p>
                <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Product/entity search; compliance terms; disambiguation via must-hit tokens.</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>How it Works:</strong></p>
                  <ol style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <li>Run vector similarity on query embedding</li>
                    <li>Compute lexical features: term/phrase hits, field boosts</li>
                    <li>Combine: final = α·vector + β·keyword_boost (+ must clauses)</li>
                    <li>Return top-N</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Guards against semantic drift</li>
                      <li>Enforces critical terms or phrases</li>
                      <li>Tunable blend; transparent boosts</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Feature engineering needed</li>
                      <li>Over-boosting can harm recall</li>
                      <li>More complex scoring config</li>
                    </ul>
                  </div>
                </div>
                <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p style={{ fontSize: '0.85em' }}><strong>Tools / Libraries:</strong> Elasticsearch (function_score, field boosts), Vespa (rank features, term proximity), Weaviate (alpha + property weights), Pinecone sparse+dense, SPLADE for sparse signals</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: 'Pattern 4: Term-boosted vector search for precision control'
        }
      ]
    },
    {
      id: 'pattern-5',
      title: 'Metadata-Filtered Hybrid Search',
      slides: [
        {
          id: 7,
          title: 'Pattern 5 — Metadata-Filtered Hybrid Search',
          icon: { name: 'duo-filter', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <p><strong>Idea / Pattern Summary:</strong> Apply faceted/ACL metadata filters, then run hybrid scoring within the slice.</p>
                <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Multi-tenant apps; access control; faceted navigation.</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>How it Works:</strong></p>
                  <ol style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <li>Apply boolean filters (tenant, type, time)</li>
                    <li>Execute BM25 and vector search over filtered set</li>
                    <li>Fuse results (weighted sum/RRF)</li>
                    <li>Tie-break by recency or authority</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Enforces hard constraints; safer RAG grounding</li>
                      <li>Smaller candidate set → faster and better precision</li>
                      <li>Works well with caching by filter key</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>ANN filtering support varies by engine</li>
                      <li>Narrow filters can hurt recall</li>
                      <li>More complex index/partition strategy</li>
                    </ul>
                  </div>
                </div>
                <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <p style={{ fontSize: '0.85em' }}><strong>Tools / Libraries:</strong> Qdrant, Milvus (vector + filters), Vespa (constrained ANN), Pinecone (metadata filters), Elasticsearch/OpenSearch (filter context + knn)</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Pattern 5: Metadata-filtered hybrid search for multi-tenant systems'
        }
      ]
    },
    {
      id: 'pattern-6',
      title: 'Field-Aware Hybrid Scoring',
      slides: [
        {
          id: 8,
          title: 'Pattern 6 — Field-Aware Hybrid Scoring (BM25F)',
          icon: { name: 'duo-table', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <p><strong>Idea / Pattern Summary:</strong> Weight important fields (e.g., title &gt; body) in hybrid lexical + vector scoring.</p>
                <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> News, eCommerce, QA where titles/headings matter.</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>How it Works:</strong></p>
                  <ol style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <li>Configure BM25F/field boosts (title×3, tags×2, body×1)</li>
                    <li>Optionally compute per-field embeddings or weighted pooling</li>
                    <li>Combine field scores, normalize, then fuse with vector</li>
                    <li>Return top-N</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Reflects editorial importance</li>
                      <li>Reduces noise from long bodies</li>
                      <li>Explainable scoring</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Requires tuning per index/domain</li>
                      <li>Per-field embeddings increase storage/ingest cost</li>
                      <li>Risk of overfitting to title-heavy docs</li>
                    </ul>
                  </div>
                </div>
                <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px' }}>
                  <p style={{ fontSize: '0.85em' }}><strong>Tools / Libraries:</strong> Elasticsearch/Azure Search (BM25F via boosts), Vespa (field-specific ranking), Weaviate (property weighting), OpenSearch</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Pattern 6: Field-aware hybrid scoring for structured documents'
        }
      ]
    },
    {
      id: 'pattern-7',
      title: 'Hybrid Lexical + Semantic Expansion',
      slides: [
        {
          id: 9,
          title: 'Pattern 7 — Hybrid Lexical + Semantic Expansion',
          icon: { name: 'duo-book-open', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <p><strong>Idea / Pattern Summary:</strong> Expand the query with lexical synonyms and semantic neighbors before hybrid retrieval.</p>
                <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Short queries; vocabulary mismatch; domain jargon.</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>How it Works:</strong></p>
                  <ol style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <li>Generate lexical expansions (synonyms, acronyms, stemming)</li>
                    <li>Add semantic terms via embeddings, PRF, or LLM</li>
                    <li>Build expanded BM25 query and/or multiple embeddings</li>
                    <li>Run hybrid retrieval and fuse</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Higher recall without losing precision (with weights)</li>
                      <li>Robust to synonyms and abbreviations</li>
                      <li>Domain-tunable with curated lists</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Query drift if poorly curated</li>
                      <li>Extra latency for expansion</li>
                      <li>Needs monitoring and fallbacks</li>
                    </ul>
                  </div>
                </div>
                <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px' }}>
                  <p style={{ fontSize: '0.85em' }}><strong>Tools / Libraries:</strong> Elasticsearch (synonym filters, MLT, ELSER/SPLADE), LlamaIndex/Haystack query expansion, WordNet/UMLS, LangChain transformers</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: 'Pattern 7: Query expansion for vocabulary mismatch'
        }
      ]
    },
    {
      id: 'pattern-8',
      title: 'Cross-Encoder Re-Ranking',
      slides: [
        {
          id: 10,
          title: 'Pattern 8 — Cross-Encoder Re-Ranking After Hybrid',
          icon: { name: 'duo-check-double', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <p><strong>Idea / Pattern Summary:</strong> Use a cross-encoder to re-rank a small hybrid candidate set for maximal precision.</p>
                <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Mission-critical precision; legal, medical, shopping; short final lists.</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>How it Works:</strong></p>
                  <ol style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <li>Run hybrid retrieval to get top-50/100</li>
                    <li>Score query–doc pairs with cross-encoder (e.g., bge-reranker, Cohere Rerank)</li>
                    <li>Sort by CE score; optionally blend with hybrid score</li>
                    <li>Return top-N (e.g., 10–20)</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Best-in-class relevance on hard ranking cases</li>
                      <li>Captures fine-grained interactions and negation</li>
                      <li>Works on top of any hybrid method</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Highest latency/cost; needs batching</li>
                      <li>Throughput constraints; careful caching required</li>
                      <li>Model/domain drift requires evaluation</li>
                    </ul>
                  </div>
                </div>
                <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px' }}>
                  <p style={{ fontSize: '0.85em' }}><strong>Tools / Libraries:</strong> OpenAI ReRank, Cohere Rerank, JinaAI Reranker, SentenceTransformers cross-encoders, NVIDIA NeMo, Vespa second-phase reranking, Qdrant integrations</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Pattern 8: Cross-encoder re-ranking for maximum precision'
        }
      ]
    },
    {
      id: 'pattern-9',
      title: 'Parent-Child Chunking',
      slides: [
        {
          id: 11,
          title: 'Pattern 9 — Hybrid with Parent-Child Chunking',
          icon: { name: 'duo-circle-nodes', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <p><strong>Idea / Pattern Summary:</strong> Retrieve on small child chunks (vectors), return ranked parent chunks for context.</p>
                <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Long documents; LLM context limits; avoiding orphaned snippets.</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>How it Works:</strong></p>
                  <ol style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <li>Split docs into parent sections and child chunks</li>
                    <li>Index child embeddings with parent_id in metadata</li>
                    <li>Retrieve children (hybrid), map to parents</li>
                    <li>Merge/score parents, deduplicate, return</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Better context and coherence in results</li>
                      <li>Reduces fragmentation and hallucination</li>
                      <li>Works with both BM25 and vectors</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Data modeling and join overhead</li>
                      <li>Risk of over-including irrelevant siblings</li>
                      <li>Needs careful dedup and tie-breaking</li>
                    </ul>
                  </div>
                </div>
                <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px' }}>
                  <p style={{ fontSize: '0.85em' }}><strong>Tools / Libraries:</strong> LangChain ParentDocumentRetriever, LlamaIndex, AWS Bedrock KBs, Elasticsearch parent-child/nested, Qdrant payload relations, Weaviate references</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Pattern 9: Parent-child chunking for better context'
        }
      ]
    },
    {
      id: 'pattern-10',
      title: 'ANN + BM25',
      slides: [
        {
          id: 12,
          title: 'Pattern 10 — Approximate + Exact Hybrid (ANN + BM25)',
          icon: { name: 'duo-rocket', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <p><strong>Idea / Pattern Summary:</strong> Combine fast ANN vector recall with exact BM25 ranking/fusion for scale and quality.</p>
                <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Large-scale indexes; strict latency SLOs; cost-sensitive workloads.</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>How it Works:</strong></p>
                  <ol style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <li>ANN (HNSW/IVF/DiskANN) retrieves top-M vectors</li>
                    <li>BM25 retrieves top-M lexical matches</li>
                    <li>Fuse with RRF or normalized weighted sum</li>
                    <li>Optional exact re-score on top-K</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>High throughput with strong relevance</li>
                      <li>Tunable recall–latency trade-offs</li>
                      <li>Resilient to index and query variance</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>ANN recall tuning (ef, M, nprobe) is non-trivial</li>
                      <li>Multiple indices to manage and monitor</li>
                      <li>Score normalization adds complexity</li>
                    </ul>
                  </div>
                </div>
                <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px' }}>
                  <p style={{ fontSize: '0.85em' }}><strong>Tools / Libraries:</strong> FAISS, Milvus, Qdrant, Pinecone, Elasticsearch/OpenSearch (HNSW + BM25), Vespa (ANN + second-phase ranking), Azure AI Search (RRF)</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: 'Pattern 10: ANN + BM25 for large-scale systems'
        }
      ]
    },
    {
      id: 'pattern-11',
      title: 'Domain Dictionaries/Ontologies',
      slides: [
        {
          id: 13,
          title: 'Pattern 11 — Hybrid with Domain Dictionaries/Ontologies',
          icon: { name: 'duo-book', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <p><strong>Idea / Pattern Summary:</strong> Inject domain ontologies, synonyms, and entity linking into hybrid retrieval.</p>
                <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Healthcare, legal, finance, scientific domains with specialized terminology and knowledge structures.</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>How it Works:</strong></p>
                  <ol style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <li>Recognize entities (NER) and map to ontology</li>
                    <li>Expand/normalize terms (synonyms, abbreviations, codes)</li>
                    <li>Boost key entities and relations in BM25 and vectors</li>
                    <li>Run hybrid and optionally entity-aware re-rank</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>High precision and explainability</li>
                      <li>Handles acronyms and codes (e.g., UMLS, SNOMED)</li>
                      <li>Improves recall on specialized jargon</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Ongoing curation and maintenance</li>
                      <li>Coverage gaps cause blind spots</li>
                      <li>Cross-lingual alignment can be hard</li>
                    </ul>
                  </div>
                </div>
                <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px' }}>
                  <p style={{ fontSize: '0.85em' }}><strong>Tools / Libraries:</strong> Elasticsearch synonym_graph, SKOS, Vespa knowledge features, spaCy/Stanza NER, Neo4j/Knowledge Graphs, UMLS/SNOMED/MeSH dictionaries, Haystack/LlamaIndex</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Pattern 11: Domain dictionaries for specialized domains'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 14,
          title: 'Summary and Key Takeaways',
          icon: { name: 'duo-clipboard-check', size: '5x' },
          content: (
            <div style={{ textAlign: 'left', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4fc3f7', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                    What to Remember
                  </h3>
                  <ul style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
                    <li>Start simple: Weighted fusion or RRF is a solid baseline</li>
                    <li>Cascade when needed: Two-stage or cross-encoder for precision</li>
                    <li>Control drift: Term boosts, field-aware scoring, metadata filters</li>
                    <li>Improve recall: Query expansion, vector-first recall, parent-child</li>
                    <li>Match use case: Choose pattern based on content type and query complexity</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#81c784', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-gear" sizeName="2x" darkModeInvert={true} />
                    Operational Tips
                  </h3>
                  <ul style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
                    <li>Tune alpha/weights per query type; consider dynamic tuning</li>
                    <li>Normalize scores before linear fusion; or use RRF to avoid it</li>
                    <li>Evaluate with nDCG@k, Recall@k, MRR, user CTR/zero-result rate</li>
                    <li>Watch latency/cost budgets; batch and cache aggressively</li>
                    <li>A/B test different hybrid approaches with real user traffic</li>
                  </ul>
                </div>
              </div>
              <div style={{ marginTop: '30px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffb74d', marginBottom: '15px' }}>
                  <SvgIcon iconName="duo-circle-nodes" sizeName="2x" darkModeInvert={true} />
                  Tools Recap
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', fontSize: '0.9em' }}>
                  <div>
                    <h4 style={{ color: '#ba68c8', marginBottom: '10px' }}>Vector Databases & Search Engines</h4>
                    <p>Elasticsearch/OpenSearch, Vespa, Weaviate, Qdrant, Milvus, Pinecone, Azure AI Search</p>
                  </div>
                  <div>
                    <h4 style={{ color: '#f06292', marginBottom: '10px' }}>Rerankers</h4>
                    <p>Cohere Rerank, OpenAI ReRank, Jina Reranker, SentenceTransformers</p>
                  </div>
                  <div>
                    <h4 style={{ color: '#64b5f6', marginBottom: '10px' }}>Frameworks</h4>
                    <p>LangChain, LlamaIndex, Haystack, FAISS, SPLADE</p>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '25px', padding: '20px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '8px', textAlign: 'left' }}>
                <p style={{ fontSize: '1.1em' }}>
                  <SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '10px' }} darkModeInvert={true} />
                  <strong>Remember:</strong> Hybrid search is about combining the strengths of lexical and semantic approaches. 
                  Start simple, measure everything, and iterate based on real user feedback.
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Summary slide with key takeaways, operational tips, and tools recap'
        }
      ]
    }
  ]
};
