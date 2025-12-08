import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const llmCachingDeck: Deck = {
  id: 'llm-caching-patterns',
  name: '13 Caching Patterns That Save Cost in LLM Systems',
  description: 'Optimize latency and cost across RAG and chat by applying caching at input, retrieval, generation, and personalization layers',
  category: 'RAG',
  theme: 'black',
  slides: [],
  slideGroups: [
    {
      id: 'introduction',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          title: '13 Caching Patterns That Save Cost in LLM Systems',
          content: (
            <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#61dafb', display: 'flex', alignItems: 'center' }}>
            <SvgIcon iconName="duo-microchip" sizeName="2xl" style={{ marginRight: '1rem' }} darkModeInvert={true} />
            LLM CACHING PATTERNS
          </div>
          <div style={{ fontSize: '1.2rem', color: '#e5c07b', marginBottom: '2rem' }}>
            Optimize latency and cost across RAG and chat by applying caching at input, retrieval, generation, and personalization layers.
          </div>
          <div style={{ fontSize: '1rem', color: '#888' }}>
            <SvgIcon iconName="duo-calendar" sizeName="lg" style={iconStyle} darkModeInvert={true} />
            November 7, 2025
          </div>
        </div>
      ),
      notes: 'Introduction to 13 caching patterns for optimizing LLM systems'
    },
    {
      id: 2,
      title: 'Why Caching Matters in LLM Systems',
      icon: { name: 'duo-lightbulb' },
      content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ color: '#e06c75', marginBottom: '1rem' }}>
                <SvgIcon iconName="duo-chart-line" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                <strong style={{ fontSize: '1.1rem' }}>Cost Drivers</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.9rem' }}>
                <li>Tokenization, embedding generation, vector search operations</li>
                <li>Re-ranking of retrieved content</li>
                <li>Generation tokens, prompt processing, and tool calls</li>
              </ul>
            </div>
            
            <div>
              <div style={{ color: '#98c379', marginBottom: '1rem' }}>
                <SvgIcon iconName="duo-rocket" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                <strong style={{ fontSize: '1.1rem' }}>What Caching Saves</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.9rem' }}>
                <li>Repeated preprocessing and tokenization steps</li>
                <li>Redundant retrieval operations</li>
                <li>Lower TTFT (time to first token) and tail latency</li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '1rem' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="xl" style={iconStyle} darkModeInvert={true} />
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
                <SvgIcon iconName="duo-gauge-high" sizeName="xl" style={iconStyle} darkModeInvert={true} />
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Caching Principles:</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
              <li>Stable cache keys with version tags</li>
              <li>Balanced TTLs and invalidation strategies</li>
              <li>Privacy and security considerations for sensitive data</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'Overview of why caching matters: cost drivers, benefits, layers, and key principles'
        }
      ]
    },
    {
      id: 'pattern-1',
      title: 'Pattern 1: Query Embedding Cache',
      slides: [
        {
          id: 3,
          title: 'Pattern 1: Query Embedding Cache',
          icon: { name: 'duo-brain' },
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Query embedding vectors (and normalization artifacts)</li>
                  <li>Processed vector representations of user queries</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>hash(normalized_query + embedding_model + version + dim)</li>
                  <li>Includes model version to ensure embedding consistency</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Redis/KeyDB for hot cache</li>
                  <li>Optional S3/object store for cold cache</li>
                  <li>Co-located per region for lower latency</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Long TTL (7–30 days)</li>
                  <li>Version-bump invalidation</li>
                  <li>LFU/LRU eviction policy for memory management</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Avoids recomputing embeddings for identical queries</li>
                <li>High hit rate for frequent/FAQ queries</li>
                <li>Deterministic quality and consistency</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
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
        }
      ]
    },
    {
      id: 'pattern-2',
      title: 'Pattern 2: Retrieval Results Cache',
      slides: [
        {
          id: 4,
          title: 'Pattern 2: Retrieval Results Cache',
          icon: { name: 'duo-magnifying-glass' },
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Top-k document IDs + scores from vector search</li>
                  <li>Optional document snippets/previews</li>
                  <li>Results from expensive retrieval operations</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>hash(query_norm or quantized_embedding + index_snapshot_id + k + filters)</li>
                  <li>Includes index version to ensure result consistency</li>
                  <li>Filter parameters included to maintain result accuracy</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Redis/Memcached for fast, in-memory access</li>
                  <li>Optional edge/CDN caching for public FAQs</li>
                  <li>Regional deployment to minimize latency</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Short TTL (5–60 minutes)</li>
                  <li>Purge on index refresh or collection update</li>
                  <li>Event-driven invalidation when knowledge base changes</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Skips expensive vector search operations</li>
                <li>Significant latency improvements</li>
                <li>Cheap to store compared to raw embeddings</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
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
        }
      ]
    },
    {
      id: 'pattern-3',
      title: 'Pattern 3: Prompt Template Cache',
      slides: [
        {
          id: 5,
          title: 'Pattern 3: Prompt Template Cache',
          icon: { name: 'duo-file-lines' },
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Rendered system/instruction templates and tokenized IDs</li>
                  <li>Pre-processed templates per model/locale</li>
                  <li>Common static prompt components</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>template_id + template_version + model_id</li>
                  <li>locale + formatting_mode</li>
                  <li>Hash of all template parameters combined</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>In-process memory for token IDs</li>
                  <li>Redis for cross-instance sharing</li>
                  <li>Application-level memory for high access frequency</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Very long TTL (weeks to months)</li>
                  <li>Invalidate on template update or model switch</li>
                  <li>Version-based cache invalidation triggers</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Faster prompt assembly and tokenization</li>
                <li>Consistent outputs across service instances</li>
                <li>Low implementation complexity</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
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
        }
      ]
    },
    {
      id: 'pattern-4',
      title: 'Pattern 4: RAG Answer Cache',
      slides: [
        {
          id: 6,
          title: 'Pattern 4: RAG Answer Cache',
          icon: { name: 'duo-message-square' },
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Final LLM answer (with citations) conditioned on query</li>
                  <li>Complete generated responses including retrieved context set</li>
                  <li>Full response with source document references</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>hash(query_norm + context_doc_ids/hashes)</li>
                  <li>prompt_version + model + decoding_params</li>
                  <li>Must include all context sources for consistency</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Redis for hot cache items</li>
                  <li>Durable KV/DB for high-value queries</li>
                  <li>Encrypt if sensitive data is included</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Medium TTL (1–7 days)</li>
                  <li>Event-based invalidation on any source doc change</li>
                  <li>Content-dependent staleness policies</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Large cost and latency savings</li>
                <li>Ideal for FAQs and static knowledge</li>
                <li>Eliminates repeated expensive inference calls</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
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
        }
      ]
    },
    {
      id: 'pattern-5',
      title: 'Pattern 5: Chunk-Level Cache',
      slides: [
        {
          id: 7,
          title: 'Pattern 5: Chunk-Level Cache',
          icon: { name: 'duo-scissors' },
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Per-chunk embeddings and tokenized text</li>
                  <li>Reranker features and metadata</li>
                  <li>Pre-processed document fragments</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>doc_id + chunk_index + chunk_hash</li>
                  <li>pipeline_version (for compatibility tracking)</li>
                  <li>Optional embedding model identifier</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Object store (S3/GCS/Azure) for persistence</li>
                  <li>Metadata DB for quick reference lookup</li>
                  <li>Redis tier for hot/frequently accessed chunks</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>No fixed TTL (content-driven expiration)</li>
                  <li>Invalidate on document update/re-index</li>
                  <li>Lazy refresh strategy for efficiency</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Speeds up ingestion and retrieval workflows</li>
                <li>Enables reproducible pipeline processing</li>
                <li>Significantly reduces recomputation costs</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
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
        }
      ]
    },
    {
      id: 'pattern-6',
      title: 'Pattern 6: Session Conversation Cache',
      slides: [
        {
          id: 8,
          title: 'Pattern 6: Session Conversation Cache',
          icon: { name: 'duo-message-square' },
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Recent turns window in conversation</li>
                  <li>Distilled conversation summaries</li>
                  <li>Tool call results and context</li>
                  <li>Optional session KV cache offload</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>session_id + user_id + history_hash + model_id</li>
                  <li>Unique per conversation thread</li>
                  <li>Includes model ID for version consistency</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-lock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Redis/KeyDB with encryption</li>
                  <li>Optional archival DB for long-lived sessions</li>
                  <li>Secure storage with encryption at rest</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Sliding TTL (15–60 min active)</li>
                  <li>Archive for 7–30 days</li>
                  <li>Purge on logout/PII request</li>
                  <li>Reset on session boundaries</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Maintains continuity across conversation turns</li>
                <li>Reduces token usage via summaries</li>
                <li>Lower time-to-first-token (TTFT) on resume</li>
                <li>Improves user experience with context retention</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
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
        }
      ]
    },
    {
      id: 'pattern-7',
      title: 'Pattern 7: User Profile / Preference Cache',
      slides: [
        {
          id: 9,
          title: 'Pattern 7: User Profile / Preference Cache',
          icon: { name: 'duo-user' },
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Compact user profile data (embeddings, preferences)</li>
                  <li>Style, tone, tools preferences, timezone settings</li>
                  <li>Domain defaults and personalization parameters</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>user_id + profile_version + tenant_id</li>
                  <li>May include namespace or region for multi-region systems</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Secure KV/DB (Redis + KMS)</li>
                  <li>DynamoDB/Firestore for persistent profiles</li>
                  <li>Encryption at rest required for sensitive data</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Long TTL with sliding refresh mechanism</li>
                  <li>Invalidate on explicit profile updates</li>
                  <li>Purge after extended user inactivity</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Personalization without re-sending long profiles</li>
                <li>Significant cost savings per request</li>
                <li>Enables consistent user experiences across sessions</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
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
        }
      ]
    },
    {
      id: 'pattern-8',
      title: 'Pattern 8: Token-Level KV Cache',
      slides: [
        {
          id: 10,
          title: 'Pattern 8: Token-Level KV Cache',
          icon: { name: 'duo-brain-circuit' },
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Transformer attention K/V tensors per layer for prompt tokens</li>
                  <li>Intermediate computation results of attention mechanisms</li>
                  <li>Layer-specific key-value pairs for each processed token</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>request_id/session_id + prompt_token_range + model_id + shard/block_id</li>
                  <li>Tied to specific model architecture and parameter versions</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-microchip" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>GPU VRAM (primary storage for fast access)</li>
                  <li>Offload to CPU RAM or NVMe when needed</li>
                  <li>Managed by PagedAttention, vLLM, or TensorRT-LLM</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Lives for the duration of request/session</li>
                  <li>LRU/LFU eviction under memory pressure</li>
                  <li>Freed upon completion or context window overflow</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Massive speedups in decoding (3-10x faster generation)</li>
                <li>Reduces re-computation of attention for prompt tokens</li>
                <li>Improves throughput and reduces inference costs</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
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
        }
      ]
    },
    {
      id: 'pattern-9',
      title: 'Pattern 9: Model Output Logit Cache',
      slides: [
        {
          id: 11,
          title: 'Pattern 9: Model Output Logit Cache',
          icon: { name: 'duo-chart-line' },
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Next-token logits/probabilities for frequent prefixes</li>
                  <li>Optional top-k most likely tokens only</li>
                  <li>Output probability distributions at the token level</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>hash(prefix_token_ids + model_id + logits_version)</li>
                  <li>Includes decoding_bias/temperature parameters</li>
                  <li>Versioned to handle model updates</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>CPU RAM or Redis for fast access</li>
                  <li>Map files for large lookup tables</li>
                  <li>Regional deployment for lower latency</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Short TTL (minutes–hours)</li>
                  <li>Purge on model/quantization change</li>
                  <li>Frequency-based eviction for memory management</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Faster TTFT for common prompts/prefixes</li>
                <li>Useful for rescoring, safety passes, or retry scenarios</li>
                <li>Helps maintain consistent outputs across retries</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
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
        }
      ]
    },
    {
      id: 'pattern-10',
      title: 'Pattern 10: Semantic Similarity Cache',
      slides: [
        {
          id: 12,
          title: 'Pattern 10: Semantic Similarity Cache',
          icon: { name: 'duo-circle-nodes' },
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Intent embeddings mapped to prior answers/contexts</li>
                  <li>Thresholded ANN lookup for similar queries</li>
                  <li>Similar question embeddings with confidence scores</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Vector index entry (not traditional key-value)</li>
                  <li>Metadata: model_id, prompt_version, locale</li>
                  <li>Freshness score for recency weighting</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Vector DB (FAISS/Milvus/pgvector/RedisVL)</li>
                  <li>Spill to disk for large datasets</li>
                  <li>Distributed index for high-volume systems</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>1–14 days with recency weighting</li>
                  <li>Invalidate when sources change</li>
                  <li>Progressive aging for less frequently accessed entries</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Catches paraphrases and varied question forms</li>
                <li>Higher savings compared to exact-match caches</li>
                <li>Robust to wording variations and typos</li>
                <li>Can work across languages with multilingual embeddings</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
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
        }
      ]
    },
    {
      id: 'pattern-11',
      title: 'Pattern 11: Ranked Results Cache (Post Re-Ranker)',
      slides: [
        {
          id: 13,
          title: 'Pattern 11: Ranked Results Cache (Post Re-Ranker)',
          icon: { name: 'duo-ranking-star' },
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Final reranked candidate list with scores</li>
                  <li>Cross-encoder or LLM re-ranker results</li>
                  <li>Ordered document list with relevance scores</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>hash(query_norm + candidate_ids + reranker_version + topN + filters)</li>
                  <li>Includes reranker model version for consistency</li>
                  <li>Incorporates filter parameters for context-specific ranking</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Redis with TTL support</li>
                  <li>Region-scoped to align with retrieval services</li>
                  <li>Optional compression for large candidate lists</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Short TTL (5–30 minutes)</li>
                  <li>Purge when candidate document set changes</li>
                  <li>Event-based invalidation on reranker model updates</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Avoids expensive re-ranking computation</li>
                <li>Significantly lowers end-to-end latency</li>
                <li>Reduces load on expensive cross-encoder models</li>
                <li>Works well for high-frequency similar queries</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
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
        }
      ]
    },
    {
      id: 'pattern-12',
      title: 'Pattern 12: Summarization Cache',
      slides: [
        {
          id: 14,
          title: 'Pattern 12: Summarization Cache',
          icon: { name: 'duo-compress' },
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Multi-granularity summaries (doc/section/chunk)</li>
                  <li>Conversation summaries and embeddings</li>
                  <li>Abstract representations of longer content</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>doc_id + segment_id/hash + summary_prompt_version</li>
                  <li>model_id + locale</li>
                  <li>Include model version to ensure consistent summaries</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Object store + metadata index (SQL/NoSQL)</li>
                  <li>Redis for hot (frequently accessed) summaries</li>
                  <li>Distributed storage for durability and scale</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Long TTL (weeks to months)</li>
                  <li>Event-driven invalidation on source document updates</li>
                  <li>Periodic refresh for high-importance content</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Reused across multiple different queries</li>
                <li>Dramatically reduces context tokens in RAG</li>
                <li>Speeds up answer generation with pre-processed insights</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
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
        }
      ]
    },
    {
      id: 'pattern-13',
      title: 'Pattern 13: Final Answer Cache with TTL',
      slides: [
        {
          id: 15,
          title: 'Pattern 13: Final Answer Cache with TTL',
          icon: { name: 'duo-check-circle' },
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>What is Cached</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Exact query → final answer mapping</li>
                  <li>Optionally citations/links to sources</li>
                  <li>Typically using temperature=0 for consistency</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-tags" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Key</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>hash(normalized_query + language + model_id)</li>
                  <li>+ prompt_version + decoding_params</li>
                  <li>Query normalization critical for hit rate</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-floppy-disk" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Cache Storage Location</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Redis for high throughput applications</li>
                  <li>CDN/edge caching for public endpoints</li>
                  <li>Encryption required for private user data</li>
                </ul>
              </div>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Expiration Strategy / TTL</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                <ul>
                  <li>Minutes to days based on data volatility</li>
                  <li>Manual purge hooks for emergency hotfixes</li>
                  <li>Shorter TTL for rapidly changing information</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Easiest caching pattern to implement</li>
                <li>Huge latency win on frequently asked questions</li>
                <li>Excellent for FAQs and common queries</li>
                <li>Reduces overall token usage significantly</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
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
        }
      ]
    },
    {
      id: 'summary',
      title: 'Key Takeaways',
      slides: [
        {
          id: 16,
          title: 'Key Takeaways',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.6', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(97, 218, 251, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #61dafb' }}>
                  <div style={{ color: '#61dafb', marginBottom: '0.8rem', fontSize: '1rem' }}>
                    <SvgIcon iconName="duo-network-wired" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                    <strong>Layer Your Caches Strategically</strong>
                  </div>
                  <div style={{ fontSize: '0.85rem' }}>
                    Input (embeddings/prompts), retrieval (results/ranking), generation (KV/logits), memory (session/user), outputs (answers/summaries) — each layer has distinct benefits and implementation patterns.
                  </div>
                </div>

                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #98c379' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.8rem', fontSize: '1rem' }}>
                    <SvgIcon iconName="duo-key" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                    <strong>Nail the Cache Keys</strong>
                  </div>
                  <div style={{ fontSize: '0.85rem' }}>
                    Include versions, model IDs, corpus snapshot IDs, filters, and decoding params in cache keys to avoid inconsistencies and ensure correct cache hits.
                  </div>
                </div>

                <div style={{ background: 'rgba(229, 192, 123, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
                  <div style={{ color: '#e5c07b', marginBottom: '0.8rem', fontSize: '1rem' }}>
                    <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                    <strong>Freshness First</strong>
                  </div>
                  <div style={{ fontSize: '0.85rem' }}>
                    Combine TTL-based expiration with event-based invalidation on corpus or template updates to balance performance with data freshness requirements.
                  </div>
                </div>

                <div style={{ background: 'rgba(198, 120, 221, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #c678dd' }}>
                  <div style={{ color: '#c678dd', marginBottom: '0.8rem', fontSize: '1rem' }}>
                    <SvgIcon iconName="duo-gauge-high" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                    <strong>Measure Relentlessly</strong>
                  </div>
                  <div style={{ fontSize: '0.85rem' }}>
                    Hit rate × miss cost → savings; track p95 latency improvements and staleness incidents to continuously optimize your cache strategies.
                  </div>
                </div>

                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #e06c75' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.8rem', fontSize: '1rem' }}>
                    <SvgIcon iconName="duo-rocket" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                    <strong>Start Simple, Scale Gradually</strong>
                  </div>
                  <div style={{ fontSize: '0.85rem' }}>
                    Begin with exact-match and retrieval caches for early wins; add semantic similarity and KV/logit layers as your system matures and scale grows.
                  </div>
                </div>
              </div>
            </div>
      ),
      notes: 'Key takeaways: Layer caches strategically, nail cache keys, maintain freshness, measure continuously, start simple'
        }
      ]
    },
    {
      id: 'thank-you',
      title: 'Thank You',
      slides: [
        {
          id: 17,
          title: 'Thank You',
          icon: { name: 'duo-heart' },
          content: (
            <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '3rem', color: '#98c379' }}>
            Questions? Feedback?
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ fontSize: '1.2rem', color: '#e5c07b' }}>
              <SvgIcon iconName="duo-envelope" sizeName="xl" style={iconStyle} darkModeInvert={true} />
              your.email@example.com
            </div>
            <div style={{ fontSize: '1.2rem', color: '#c678dd' }}>
              <SvgIcon iconName="duo-user" sizeName="xl" style={iconStyle} darkModeInvert={true} />
              [Your Name] • [Company/Team]
            </div>
            <div style={{ fontSize: '1.2rem', color: '#61dafb' }}>
              <SvgIcon iconName="duo-link" sizeName="xl" style={iconStyle} darkModeInvert={true} />
              company-website.com
            </div>
          </div>

          <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '10px' }}>
            <div style={{ color: '#e5c07b', marginBottom: '1rem', fontSize: '1.2rem' }}>
              <SvgIcon iconName="duo-book-open" sizeName="xl" style={iconStyle} darkModeInvert={true} />
              <strong>Additional Resources</strong>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '1rem' }}>
              <div style={{ color: '#888' }}>
                <SvgIcon iconName="duo-link" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                GitHub: github.com/username/llm-caching-patterns
              </div>
              <div style={{ color: '#888' }}>
                <SvgIcon iconName="duo-book" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                Documentation: docs.example.com/llm-caching
              </div>
              <div style={{ color: '#888' }}>
                <SvgIcon iconName="duo-file-lines" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                Runbook for cache keys/TTLs: runbooks.example.com/caching
              </div>
            </div>
          </div>
        </div>
      ),
      notes: 'Thank you slide with contact information and additional resources'
        }
      ]
    }
  ]
};

