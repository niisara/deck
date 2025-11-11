import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const llmCachingDeck: Deck = {
  id: 'llm-caching-patterns',
  name: '13 Caching Patterns That Save Cost in LLM Systems',
  description: 'Optimize latency and cost across RAG and chat by applying caching at input, retrieval, generation, and personalization layers',
  theme: 'black',
  slides: [
    {
      id: 1,
      title: '13 Caching Patterns That Save Cost in LLM Systems',
      content: (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#61dafb' }}>
            <SvgIcon iconName="duo-microchip" sizeName="2xl" style={{ marginRight: '1rem' }} />
            LLM CACHING PATTERNS
          </div>
          <div style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#98c379' }}>
            13 Caching Patterns That Save Cost in LLM Systems
          </div>
          <div style={{ fontSize: '1.2rem', color: '#e5c07b', marginBottom: '2rem' }}>
            Optimize latency and cost across RAG and chat by applying caching at input, retrieval, generation, and personalization layers
          </div>
          <div style={{ fontSize: '1rem', color: '#888' }}>
            <SvgIcon iconName="duo-calendar" sizeName="lg" style={iconStyle} />
            November 7, 2025
          </div>
        </div>
      ),
      notes: 'Introduction to 13 caching patterns for optimizing LLM systems'
    },
    {
      id: 2,
      title: 'Why Caching Matters in LLM Systems',
      content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ color: '#e06c75', marginBottom: '1rem' }}>
                <SvgIcon iconName="duo-chart-line" sizeName="xl" style={iconStyle} />
                <strong style={{ fontSize: '1.1rem' }}>Cost Drivers</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.9rem' }}>
                <li>Tokenization, embedding generation, vector search operations</li>
                <li>Re-ranking of retrieved content</li>
                <li>Generation tokens, prompt processing, and tool calls</li>
                <li>Repeated preprocessing and tokenization steps</li>
                <li>Redundant retrieval operations</li>
              </ul>
            </div>
            
            <div>
              <div style={{ color: '#98c379', marginBottom: '1rem' }}>
                <SvgIcon iconName="duo-rocket" sizeName="xl" style={iconStyle} />
                <strong style={{ fontSize: '1.1rem' }}>What Caching Saves</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.9rem' }}>
                <li>Lower TTFT (time to first token)</li>
                <li>Reduced tail latency</li>
                <li>Significant cost reduction on repeated operations</li>
                <li>Improved user experience</li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '1rem' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="xl" style={iconStyle} />
                <strong style={{ fontSize: '1.1rem' }}>Caching Layers</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.9rem' }}>
                <li>Edge/app cache for responses and templates</li>
                <li>Vector/index cache for retrieval results</li>
                <li>Model-runtime cache (KV/logits) for generation</li>
                <li>User/session memory for contextual state</li>
              </ul>
            </div>

            <div>
              <div style={{ color: '#c678dd', marginBottom: '1rem' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="xl" style={iconStyle} />
                <strong style={{ fontSize: '1.1rem' }}>Key Performance Indicators</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.9rem' }}>
                <li>Cache hit rate and miss penalty cost</li>
                <li>P95 latency improvements</li>
                <li>Freshness SLAs for dynamic data</li>
                <li>Storage cost vs. compute savings ratio</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
            <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
            <strong>Caching Principles:</strong> Stable cache keys with version tags • Balanced TTLs and invalidation strategies • Privacy and security considerations for sensitive data
          </div>
        </div>
      ),
      notes: 'Overview of why caching matters: cost drivers, benefits, layers, and key principles'
    },
    {
      id: 3,
      title: 'Pattern 1: Query Embedding Cache',
      content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e06c75' }}>
            <SvgIcon iconName="duo-brain" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Cache query embedding vectors and normalization artifacts</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Query embedding vectors (and normalization artifacts) • Processed vector representations of user queries
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                hash(normalized_query + embedding_model + version + dim)
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Redis/KeyDB for hot cache • Optional S3/object store for cold cache • Co-located per region
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Long TTL (7–30 days) • Version-bump invalidation • LFU/LRU eviction
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Avoids recomputing embeddings for identical queries</li>
                <li>High hit rate for frequent/FAQ queries</li>
                <li>Deterministic quality and consistency</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Memory intensive for large embedding dimensions</li>
                <li>Strict version coupling with embedding model</li>
                <li>Requires careful text normalization and PII handling</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Query Embedding Cache: Caches embedding vectors with long TTL, high hit rate for frequent queries'
    },
    {
      id: 4,
      title: 'Pattern 2: Retrieval Results Cache',
      content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e06c75' }}>
            <SvgIcon iconName="duo-magnifying-glass" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Cache top-k document IDs and scores from vector search</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Top-k document IDs + scores • Optional document snippets/previews • Results from expensive retrieval operations
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                hash(query_norm or quantized_embedding + index_snapshot_id + k + filters)
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Redis/Memcached for fast access • Optional edge/CDN caching for public FAQs • Regional deployment
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Short TTL (5–60 minutes) • Purge on index refresh • Event-driven invalidation
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Skips expensive vector search operations</li>
                <li>Significant latency improvements</li>
                <li>Cheap to store compared to raw embeddings</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Results become stale when corpus changes</li>
                <li>Filter-specific cache keys can increase cache size</li>
                <li>Lower hit rate on tail/uncommon queries</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Retrieval Results Cache: Short TTL, skips expensive vector search, event-driven invalidation'
    },
    {
      id: 5,
      title: 'Pattern 3: Prompt Template Cache',
      content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e06c75' }}>
            <SvgIcon iconName="duo-file-lines" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Cache rendered system/instruction templates and tokenized IDs</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Rendered system/instruction templates and tokenized IDs • Pre-processed templates per model/locale • Common static prompt components
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                template_id + template_version + model_id + locale + formatting_mode
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                In-process memory for token IDs • Redis for cross-instance sharing • Application-level memory
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Very long TTL (weeks to months) • Invalidate on template update or model switch
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Faster prompt assembly and tokenization</li>
                <li>Consistent outputs across service instances</li>
                <li>Low implementation complexity</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Modest absolute savings per request</li>
                <li>Per-model differences require separate caches</li>
                <li>Requires management of multi-locale variants</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Prompt Template Cache: Very long TTL, low complexity, consistent outputs across instances'
    },
    {
      id: 6,
      title: 'Pattern 4: RAG Answer Cache',
      content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#98c379' }}>
            <SvgIcon iconName="duo-message-square" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Cache final LLM answer with citations conditioned on query</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Final LLM answer (with citations) • Complete generated responses • Full response with source document references
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                hash(query_norm + context_doc_ids/hashes) + prompt_version + model + decoding_params
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Redis for hot cache items • Durable KV/DB for high-value queries • Encrypt if sensitive data included
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Medium TTL (1–7 days) • Event-based invalidation on source doc change • Content-dependent staleness
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Large cost and latency savings</li>
                <li>Ideal for FAQs and static knowledge</li>
                <li>Eliminates repeated expensive inference calls</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Brittle to small context changes</li>
                <li>Storage overhead for complete responses</li>
                <li>Freshness guarantees required</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'RAG Answer Cache: Large cost/latency savings for FAQs, requires freshness guarantees'
    },
    {
      id: 7,
      title: 'Pattern 5: Chunk-Level Cache',
      content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e5c07b' }}>
            <SvgIcon iconName="duo-scissors" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Cache per-chunk embeddings and tokenized text</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Per-chunk embeddings and tokenized text • Reranker features and metadata • Pre-processed document fragments
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                doc_id + chunk_index + chunk_hash + pipeline_version + embedding_model_id
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Object store (S3/GCS/Azure) for persistence • Metadata DB for quick reference • Redis tier for hot chunks
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                No fixed TTL (content-driven) • Invalidate on document update/re-index • Lazy refresh strategy
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Speeds up ingestion and retrieval workflows</li>
                <li>Enables reproducible pipeline processing</li>
                <li>Significantly reduces recomputation costs</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Substantial storage footprint at scale</li>
                <li>Complex invalidation logic required</li>
                <li>Multi-version coexistence challenges</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Chunk-Level Cache: No fixed TTL, content-driven expiration, large storage footprint'
    },
    {
      id: 8,
      title: 'Pattern 6: Session Conversation Cache',
      content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#c678dd' }}>
            <SvgIcon iconName="duo-message-square" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Cache recent conversation turns and distilled summaries</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Recent turns window in conversation • Distilled conversation summaries • Tool call results and context • Optional session KV cache offload
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                session_id + user_id + history_hash + model_id
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-lock" sizeName="lg" style={iconStyle} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Redis/KeyDB with encryption • Optional archival DB for long-lived sessions • Secure storage with encryption at rest
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Sliding TTL (15–60 min active) • Archive for 7–30 days • Purge on logout/PII request
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Maintains continuity across conversation turns</li>
                <li>Reduces token usage via summaries</li>
                <li>Lower time-to-first-token (TTFT) on resume</li>
                <li>Improves user experience with context retention</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Privacy and security obligations</li>
                <li>Memory growth over conversation time</li>
                <li>Potential for poisoning and abuse risk</li>
                <li>Requires careful PII management</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Session Conversation Cache: Sliding TTL, encryption required, improves UX with context retention'
    },
    {
      id: 9,
      title: 'Pattern 7: User Profile / Preference Cache',
      content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#61dafb' }}>
            <SvgIcon iconName="duo-user" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Cache compact user profile data and preferences</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Compact user profile data (embeddings, preferences) • Style, tone, tools preferences • Domain defaults and personalization parameters
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                user_id + profile_version + tenant_id + namespace/region
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="lg" style={iconStyle} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Secure KV/DB (Redis + KMS) • DynamoDB/Firestore for persistent profiles • Encryption at rest required
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Long TTL with sliding refresh • Invalidate on explicit profile updates • Purge after extended inactivity
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Personalization without re-sending long profiles</li>
                <li>Significant cost savings per request</li>
                <li>Enables consistent user experiences across sessions</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Privacy/GDPR compliance concerns</li>
                <li>Risk of stale preferences affecting responses</li>
                <li>Cold-start issues for new users without profiles</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'User Profile Cache: Long TTL, encryption required, GDPR compliance concerns'
    },
    {
      id: 10,
      title: 'Pattern 8: Token-Level KV Cache',
      content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e06c75' }}>
            <SvgIcon iconName="duo-brain-circuit" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Cache transformer attention K/V tensors per layer</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Transformer attention K/V tensors per layer for prompt tokens • Intermediate computation results • Layer-specific key-value pairs
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                request_id/session_id + prompt_token_range + model_id + shard/block_id
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-microchip" sizeName="lg" style={iconStyle} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                GPU VRAM (primary storage) • Offload to CPU RAM or NVMe when needed • Managed by PagedAttention, vLLM, or TensorRT-LLM
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Lives for request/session duration • LRU/LFU eviction under memory pressure • Freed upon completion
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Massive speedups in decoding (3-10x faster generation)</li>
                <li>Reduces re-computation of attention for prompt tokens</li>
                <li>Improves throughput and reduces inference costs</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>High VRAM footprint (can consume gigabytes)</li>
                <li>Memory fragmentation/compaction challenges</li>
                <li>Strong coupling with model version and architecture</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Token-Level KV Cache: GPU VRAM storage, 3-10x faster generation, high memory footprint'
    },
    {
      id: 11,
      title: 'Pattern 9: Model Output Logit Cache',
      content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#98c379' }}>
            <SvgIcon iconName="duo-chart-line" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Cache next-token logits/probabilities for frequent prefixes</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Next-token logits/probabilities for frequent prefixes • Optional top-k most likely tokens only • Output probability distributions
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                hash(prefix_token_ids + model_id + logits_version) + decoding_bias/temperature
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                CPU RAM or Redis for fast access • mmap files for large lookup tables • Regional deployment
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Short TTL (minutes–hours) • Purge on model/quantization change • Frequency-based eviction
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Faster TTFT for common prompts/prefixes</li>
                <li>Useful for rescoring, safety passes, or retry scenarios</li>
                <li>Helps maintain consistent outputs across retries</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Large memory footprint for many prefixes</li>
                <li>Exact-match sensitive; limited hit rate</li>
                <li>Privacy concerns with caching user-specific content</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Model Output Logit Cache: Short TTL, faster TTFT, exact-match sensitive'
    },
    {
      id: 12,
      title: 'Pattern 10: Semantic Similarity Cache',
      content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#c678dd' }}>
            <SvgIcon iconName="duo-circle-nodes" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Cache intent embeddings mapped to prior answers/contexts</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Intent embeddings mapped to prior answers/contexts • Thresholded ANN lookup for similar queries • Similar question embeddings with confidence scores
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Vector index entry (not traditional key-value) • Metadata: model_id, prompt_version, locale • Freshness score
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Vector DB (FAISS/Milvus/pgvector/RedisVL) • Spill to disk for large datasets • Distributed index for high-volume
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                1–14 days with recency weighting • Invalidate when sources change • Progressive aging
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Catches paraphrases and varied question forms</li>
                <li>Higher savings compared to exact-match caches</li>
                <li>Robust to wording variations and typos</li>
                <li>Can work across languages with multilingual embeddings</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Requires careful threshold tuning</li>
                <li>Potential for false hits/misses requiring quality monitoring</li>
                <li>Index maintenance and optimization overhead</li>
                <li>Explainability challenges for cache decisions</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Semantic Similarity Cache: Vector DB storage, catches paraphrases, requires threshold tuning'
    },
    {
      id: 13,
      title: 'Pattern 11: Ranked Results Cache (Post Re-Ranker)',
      content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#61dafb' }}>
            <SvgIcon iconName="duo-ranking-star" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Cache final reranked candidate list with scores</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Final reranked candidate list with scores • Cross-encoder or LLM re-ranker results • Ordered document list with relevance scores
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                hash(query_norm + candidate_ids + reranker_version + topN + filters)
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Redis with TTL support • Region-scoped to align with retrieval services • Optional compression for large candidate lists
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Short TTL (5–30 minutes) • Purge when candidate document set changes • Event-based invalidation
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Avoids expensive re-ranking computation</li>
                <li>Significantly lowers end-to-end latency</li>
                <li>Reduces load on expensive cross-encoder models</li>
                <li>Works well for high-frequency similar queries</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Results become stale if retrieval patterns shift</li>
                <li>Filter explosion can lead to low cache hit rates</li>
                <li>High sensitivity to reranker model version changes</li>
                <li>Requires consistent candidate set between cache/live</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Ranked Results Cache: Short TTL, avoids expensive re-ranking, requires consistent candidate set'
    },
    {
      id: 14,
      title: 'Pattern 12: Summarization Cache',
      content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e5c07b' }}>
            <SvgIcon iconName="duo-compress" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Cache multi-granularity summaries and conversation abstracts</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Multi-granularity summaries (doc/section/chunk) • Conversation summaries and embeddings • Abstract representations of longer content
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                doc_id + segment_id/hash + summary_prompt_version + model_id + locale
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Object store + metadata index (SQL/NoSQL) • Redis for hot summaries • Distributed storage for durability
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Long TTL (weeks to months) • Event-driven invalidation on source updates • Periodic refresh
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Reused across multiple different queries</li>
                <li>Dramatically reduces context tokens in RAG</li>
                <li>Speeds up answer generation with pre-processed insights</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Storage overhead for multiple granularity levels</li>
                <li>Summary quality variance and potential drift over time</li>
                <li>Requires strong governance and version tracking</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Summarization Cache: Long TTL, reused across queries, reduces context tokens dramatically'
    },
    {
      id: 15,
      title: 'Pattern 13: Final Answer Cache with TTL',
      content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#98c379' }}>
            <SvgIcon iconName="duo-check-circle" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Cache exact query → final answer mapping</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Exact query → final answer mapping • Optionally citations/links to sources • Typically using temperature=0 for consistency
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                hash(normalized_query + language + model_id) + prompt_version + decoding_params
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Redis for high throughput applications • CDN/edge caching for public endpoints • Encryption required for private user data
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Minutes to days based on data volatility • Manual purge hooks for emergency hotfixes • Shorter TTL for rapidly changing info
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Easiest caching pattern to implement</li>
                <li>Huge latency win on frequently asked questions</li>
                <li>Excellent for FAQs and common queries</li>
                <li>Reduces overall token usage significantly</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Low hit rate on long-tail queries</li>
                <li>Brittle to small wording differences in queries</li>
                <li>Freshness and consistency risks over time</li>
                <li>Requires robust invalidation mechanism</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Final Answer Cache: Easiest to implement, huge latency win for FAQs, brittle to wording differences'
    },
    {
      id: 16,
      title: 'Key Takeaways',
      content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
          <div style={{ marginBottom: '1.5rem', textAlign: 'center', color: '#61dafb', fontSize: '1.2rem' }}>
            <SvgIcon iconName="duo-lightbulb" sizeName="2xl" style={{ marginRight: '0.8rem' }} />
            <strong>Strategic Caching for LLM Systems</strong>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(97, 218, 251, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #61dafb' }}>
              <div style={{ color: '#61dafb', marginBottom: '0.8rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="lg" style={iconStyle} />
                <strong>Layer Your Caches Strategically</strong>
              </div>
              <div style={{ fontSize: '0.85rem' }}>
                Input (embeddings/prompts), retrieval (results/ranking), generation (KV/logits), memory (session/user), outputs (answers/summaries) — each layer has distinct benefits and implementation patterns.
              </div>
            </div>

            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #98c379' }}>
              <div style={{ color: '#98c379', marginBottom: '0.8rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-key" sizeName="lg" style={iconStyle} />
                <strong>Nail the Cache Keys</strong>
              </div>
              <div style={{ fontSize: '0.85rem' }}>
                Include versions, model IDs, corpus snapshot IDs, filters, and decoding params in cache keys to avoid inconsistencies and ensure correct cache hits.
              </div>
            </div>

            <div style={{ background: 'rgba(229, 192, 123, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
              <div style={{ color: '#e5c07b', marginBottom: '0.8rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
                <strong>Freshness First</strong>
              </div>
              <div style={{ fontSize: '0.85rem' }}>
                Combine TTL-based expiration with event-based invalidation on corpus or template updates to balance performance with data freshness requirements.
              </div>
            </div>

            <div style={{ background: 'rgba(198, 120, 221, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #c678dd' }}>
              <div style={{ color: '#c678dd', marginBottom: '0.8rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="lg" style={iconStyle} />
                <strong>Measure Relentlessly</strong>
              </div>
              <div style={{ fontSize: '0.85rem' }}>
                Hit rate × miss cost → savings; track p95 latency improvements and staleness incidents to continuously optimize your cache strategies.
              </div>
            </div>

            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #e06c75' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.8rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-rocket" sizeName="lg" style={iconStyle} />
                <strong>Start Simple, Scale Gradually</strong>
              </div>
              <div style={{ fontSize: '0.85rem' }}>
                Begin with exact-match and retrieval caches for early wins; add semantic similarity and KV/logit layers as your system matures and scale grows.
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', padding: '1.2rem', background: 'rgba(97, 218, 251, 0.15)', borderRadius: '10px', textAlign: 'center' }}>
            <div style={{ color: '#61dafb', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-chart-line" sizeName="xl" style={iconStyle} />
              <strong>Impact: Caching can reduce LLM costs by 50-90% and improve latency by 3-10x</strong>
            </div>
          </div>
        </div>
      ),
      notes: 'Key takeaways: Layer caches strategically, nail cache keys, maintain freshness, measure continuously, start simple'
    },
    {
      id: 17,
      title: 'Thank You',
      content: (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#61dafb' }}>
            <SvgIcon iconName="duo-thumbs-up" sizeName="3x" style={{ marginRight: '1rem' }} />
            Thank You
          </div>
          <div style={{ fontSize: '1.5rem', marginBottom: '3rem', color: '#98c379' }}>
            Questions? Feedback?
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ fontSize: '1.2rem', color: '#e5c07b' }}>
              <SvgIcon iconName="duo-envelope" sizeName="xl" style={iconStyle} />
              your.email@example.com
            </div>
            <div style={{ fontSize: '1.2rem', color: '#c678dd' }}>
              <SvgIcon iconName="duo-user" sizeName="xl" style={iconStyle} />
              [Your Name] • [Company/Team]
            </div>
            <div style={{ fontSize: '1.2rem', color: '#61dafb' }}>
              <SvgIcon iconName="duo-link" sizeName="xl" style={iconStyle} />
              company-website.com
            </div>
          </div>

          <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '10px' }}>
            <div style={{ color: '#e5c07b', marginBottom: '1rem', fontSize: '1.2rem' }}>
              <SvgIcon iconName="duo-book-open" sizeName="xl" style={iconStyle} />
              <strong>Additional Resources</strong>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '1rem' }}>
              <div style={{ color: '#888' }}>
                <SvgIcon iconName="duo-link" sizeName="lg" style={iconStyle} />
                GitHub: github.com/username/llm-caching-patterns
              </div>
              <div style={{ color: '#888' }}>
                <SvgIcon iconName="duo-book" sizeName="lg" style={iconStyle} />
                Documentation: docs.example.com/llm-caching
              </div>
              <div style={{ color: '#888' }}>
                <SvgIcon iconName="duo-file-lines" sizeName="lg" style={iconStyle} />
                Runbook for cache keys/TTLs: runbooks.example.com/caching
              </div>
            </div>
          </div>
        </div>
      ),
      notes: 'Thank you slide with contact information and additional resources'
    }
  ]
};

