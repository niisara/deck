import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const ragLatencyDeck: Deck = {
  id: 'rag-latency-optimization',
  name: '11 Techniques to Reduce RAG Latency',
  description: 'Practical, production-ready optimizations for faster RAG pipelines',
  category: 'RAG',
  theme: 'black',
  slides: [
    {
      id: 1,
      title: '11 Techniques to Reduce RAG Latency',
      content: (
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#61dafb' }}>
            <SvgIcon iconName="duo-gauge-high" sizeName="2xl" style={{ marginRight: '1rem' }} />
            RAG Optimization
          </div>
          <div style={{ fontSize: '1.3rem', marginBottom: '1.5rem', color: '#98c379' }}>
            Practical, production-ready optimizations for faster RAG
          </div>
          <div style={{ fontSize: '1rem', color: '#888', marginBottom: '2rem' }}>
            <SvgIcon iconName="file-lines" sizeName="lg" style={iconStyle} />
            Technical Guide
          </div>
          <div style={{ fontSize: '1rem', lineHeight: '1.6', maxWidth: '900px', margin: '0 auto', textAlign: 'left' }}>
            How to lower end-to-end latency across <span style={{ color: '#e06c75' }}>embedding</span>, 
            <span style={{ color: '#d19a66' }}> retrieval</span>, 
            <span style={{ color: '#98c379' }}> orchestration</span>, and 
            <span style={{ color: '#61dafb' }}> generation</span> without sacrificing too much quality.
          </div>
        </div>
      ),
      notes: 'Introduction to 11 practical techniques for reducing RAG latency in production systems'
    },
    {
      id: 2,
      title: 'Overview — The 11 Techniques at a Glance',
      content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ color: '#e06c75', fontSize: '1rem', marginBottom: '0.8rem' }}>
                <SvgIcon iconName="microchip" sizeName="lg" style={iconStyle} />
                <strong>Embeddings & Chunking</strong>
              </div>
              <div style={{ marginLeft: '1.5rem' }}>
                <div><strong>1)</strong> Use Smaller Embedding Models</div>
                <div><strong>2)</strong> Reduce Chunk Size</div>
              </div>
            </div>
            <div>
              <div style={{ color: '#d19a66', fontSize: '1rem', marginBottom: '0.8rem' }}>
                <SvgIcon iconName="magnifying-glass" sizeName="lg" style={iconStyle} />
                <strong>Retrieval</strong>
              </div>
              <div style={{ marginLeft: '1.5rem' }}>
                <div><strong>3)</strong> Limit Top-K Retrieval</div>
                <div><strong>4)</strong> Use ANN Indexes (HNSW/IVF)</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ color: '#98c379', fontSize: '1rem', marginBottom: '0.8rem' }}>
                <SvgIcon iconName="database" sizeName="lg" style={iconStyle} />
                <strong>Caching</strong>
              </div>
              <div style={{ marginLeft: '1.5rem' }}>
                <div><strong>5)</strong> Cache Query Embeddings</div>
                <div><strong>6)</strong> Cache Retrieval Results</div>
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', fontSize: '1rem', marginBottom: '0.8rem' }}>
                <SvgIcon iconName="ranking-star" sizeName="lg" style={iconStyle} />
                <strong>Reranking & Compression</strong>
              </div>
              <div style={{ marginLeft: '1.5rem' }}>
                <div><strong>7)</strong> Re-rank Only Top Few</div>
                <div><strong>8)</strong> Context Compression</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <div style={{ color: '#c678dd', fontSize: '1rem', marginBottom: '0.8rem' }}>
                <SvgIcon iconName="gears" sizeName="lg" style={iconStyle} />
                <strong>Orchestration</strong>
              </div>
              <div style={{ marginLeft: '1.5rem' }}>
                <div><strong>9)</strong> Parallelize Retrieval + Re-Rank</div>
              </div>
            </div>
            <div>
              <div style={{ color: '#e5c07b', fontSize: '1rem', marginBottom: '0.8rem' }}>
                <SvgIcon iconName="wand-magic-sparkles" sizeName="lg" style={iconStyle} />
                <strong>Generation/UX & LLM Choice</strong>
              </div>
              <div style={{ marginLeft: '1.5rem' }}>
                <div><strong>10)</strong> Streaming / Partial Generation</div>
                <div><strong>11)</strong> Distilled or Smaller LLM</div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '8px', borderLeft: '4px solid #61dafb' }}>
            <strong>Key idea:</strong> Optimize the critical path and perceived latency first; then tune infrastructure. 
            Focus on different latency stages: Precompute/storage, Retrieval, Pre-LLM, and LLM/UX.
          </div>
        </div>
      ),
      notes: 'Overview of all 11 techniques organized by category: embeddings, retrieval, caching, reranking, orchestration, and generation'
    },
    {
      id: 3,
      title: '1. Use Smaller Embedding Models',
      content: (
        <div style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e06c75' }}>
            <SvgIcon iconName="microchip" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Reduce embedding latency and memory footprint</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="bullseye" sizeName="lg" style={iconStyle} />
                <strong>When to Use</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li>High query volume applications</li>
                <li>Large document corpora</li>
                <li>Frequent (re)indexing requirements</li>
                <li>Multilingual applications (if model supports it)</li>
              </ul>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="circle-check" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li>Use lower-parameter models (e.g., text-embedding-3-small, E5-small, bge-small)</li>
                <li>Optionally reduce embedding dimensions (e.g., PCA from 1536→512)</li>
                <li>Consider quantization techniques (FP16, INT8)</li>
                <li>Trade minimal recall loss for significant latency improvements</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <div style={{ fontSize: '0.85rem', marginLeft: '1rem' }}>
              <strong>1.</strong> Measure baseline: retrieval quality and latency with current model →
              <strong>2.</strong> Trial alternatives on representative query set →
              <strong>3.</strong> Optimize dimensions (e.g., 768→384) and reindex →
              <strong>4.</strong> Track recall@k and p95 latency metrics →
              <strong>5.</strong> Tune parameters to compensate for quality drop
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>Faster inference (2-10x speedup)</li>
                <li>Lower compute costs & RAM</li>
                <li>Smaller vector indexes</li>
                <li>Higher query throughput</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>Potential recall drop on nuanced queries</li>
                <li>May underperform on long-tail cases</li>
                <li>Reindexing cost when switching models</li>
                <li>Possible multilingual performance gaps</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Technique 1: Use smaller embedding models to reduce latency and memory footprint while maintaining acceptable retrieval quality'
    },
    {
      id: 4,
      title: '2. Reduce Chunk Size',
      content: (
        <div style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e06c75' }}>
            <SvgIcon iconName="scissors" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Cut retrieval time and LLM prompt tokens</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="bullseye" sizeName="lg" style={iconStyle} />
                <strong>When to Use</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li>Long documents or technical content</li>
                <li>Limited LLM context windows</li>
                <li>High per-token LLM costs</li>
                <li>Content with distinct sections or topics</li>
              </ul>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="circle-check" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li>Reduces total context window size to LLM</li>
                <li>Ensures each chunk focuses on coherent topic</li>
                <li>Creates overlap between chunks for continuity</li>
                <li>Enables more precise query-content matching</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <div style={{ fontSize: '0.85rem', marginLeft: '1rem' }}>
              <strong>1.</strong> Start with 200–400 tokens per chunk →
              <strong>2.</strong> Configure 10–20% overlap between consecutive chunks →
              <strong>3.</strong> Preserve metadata (titles/headers/document IDs) →
              <strong>4.</strong> Test recall and answer quality with sample queries →
              <strong>5.</strong> Iterate and tune based on results
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>Lower prompt size reduces token usage</li>
                <li>Improved time to first token (TTFT)</li>
                <li>Better focus for re-rankers</li>
                <li>More precise retrieval results</li>
                <li>Reduces hallucination risk</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>More chunks to store and search</li>
                <li>Risk of losing global document context</li>
                <li>Requires careful overlap tuning</li>
                <li>May split semantic units like paragraphs</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Technique 2: Reduce chunk size to improve retrieval precision and reduce LLM token usage'
    },
    {
      id: 5,
      title: '3. Limit Top-K Retrieval',
      content: (
        <div style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#d19a66' }}>
            <SvgIcon iconName="filter" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Reduce downstream processing and prompt size</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="bullseye" sizeName="lg" style={iconStyle} />
                <strong>When to Use</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li>Latency-sensitive applications (chat/voice)</li>
                <li>When using re-rankers in the pipeline</li>
                <li>Systems with strong embedding models</li>
                <li>When memory or token budget is constrained</li>
              </ul>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="circle-check" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li>Set minimal K value preserving acceptable quality</li>
                <li>Apply relevance score thresholds (e.g., cosine_similarity ≥ 0.75)</li>
                <li>Implement token budgets to cap total context size</li>
                <li>Dynamically adjust K based on score distribution</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <div style={{ fontSize: '0.85rem', marginLeft: '1rem' }}>
              <strong>1.</strong> Start conservative with K=5-8 →
              <strong>2.</strong> Track answer accuracy and latency metrics →
              <strong>3.</strong> Add score filtering (e.g., cosine_sim ≥ τ) →
              <strong>4.</strong> Set token budget to limit total context →
              <strong>5.</strong> Implement adaptive K based on score decay
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>Faster retrieval processing</li>
                <li>Smaller context prompts to LLM</li>
                <li>Lower token usage and API costs</li>
                <li>Reduced likelihood of distracting context</li>
                <li>Improved focus on most relevant content</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>Risk of missing critical context for complex queries</li>
                <li>Requires careful tuning and monitoring</li>
                <li>May underperform on edge cases or ambiguous queries</li>
                <li>Can increase hallucinations if context is insufficient</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Technique 3: Limit top-K retrieval to reduce processing overhead and focus on most relevant content'
    },
    {
      id: 6,
      title: '4. Use Approximate Nearest Neighbor Indexes',
      content: (
        <div style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#d19a66' }}>
            <SvgIcon iconName="network-wired" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Accelerate vector search at scale (HNSW / IVF)</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="bullseye" sizeName="lg" style={iconStyle} />
                <strong>When to Use</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li>Collections with 1M+ vectors</li>
                <li>Applications with strict p95 latency targets</li>
                <li>CPU-bound search environments</li>
                <li>Large-scale production RAG systems</li>
              </ul>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="circle-check" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div style={{ marginLeft: '1rem', fontSize: '0.85rem' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <strong style={{ color: '#c678dd' }}>HNSW:</strong> Multi-layer graph structure with shortcuts at higher layers
                  <div style={{ fontSize: '0.8rem', color: '#888' }}>Parameters: M (connections), efSearch, efConstruction</div>
                </div>
                <div>
                  <strong style={{ color: '#e5c07b' }}>IVF:</strong> Partitions vector space into clusters, searches only most relevant
                  <div style={{ fontSize: '0.8rem', color: '#888' }}>Parameters: nlist (clusters), nprobe (clusters to search)</div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <div style={{ fontSize: '0.85rem', marginLeft: '1rem' }}>
              <strong>HNSW:</strong> Start with M=16-32, efSearch=64-128, efConstruction=200-400<br/>
              <strong>IVF:</strong> Choose nlist ≈ sqrt(N), set nprobe to balance recall vs speed<br/>
              <strong>Memory optimization:</strong> Consider IVF+PQ for lower RAM usage<br/>
              <strong>Test with filters:</strong> Evaluate performance with attribute filters<br/>
              <strong>Benchmark:</strong> Compare accuracy and latency to find optimal configuration
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>Order-of-magnitude speedups (10-100x faster)</li>
                <li>Scalable to billions of vectors</li>
                <li>Well-supported in major vector DB platforms</li>
                <li>Configurable performance-accuracy tradeoff</li>
                <li>Enables real-time search in large datasets</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>HNSW has higher memory overhead</li>
                <li>Only approximate recall (not 100% exact matches)</li>
                <li>Requires parameter tuning and testing</li>
                <li>Filtered searches can be slower (especially with HNSW)</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Technique 4: Use ANN indexes like HNSW or IVF to dramatically speed up vector search at scale'
    },
    {
      id: 7,
      title: '5. Cache Frequent Query Embeddings',
      content: (
        <div style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#98c379' }}>
            <SvgIcon iconName="database" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Avoid recomputing embeddings for repeated queries</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="bullseye" sizeName="lg" style={iconStyle} />
                <strong>When to Use</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li>FAQs and support bots with repetitive queries</li>
                <li>Dashboard or analytics applications</li>
                <li>Systems with bursty traffic patterns</li>
                <li>Applications with predictable query patterns</li>
              </ul>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="circle-check" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li>Implement LRU+TTL cache keyed by normalized query text</li>
                <li>Store vector embeddings for frequent queries in memory</li>
                <li>Optionally implement semantic cache for similar queries</li>
                <li>For semantic caching, use nearest-neighbor lookup (similarity ≥ threshold)</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <div style={{ fontSize: '0.85rem', marginLeft: '1rem' }}>
              <strong>1.</strong> Normalize queries (lowercase, trim whitespace, redact PII) →
              <strong>2.</strong> Configure cache parameters: TTL (1-24h) and size based on traffic →
              <strong>3.</strong> Implement hit/miss tracking for monitoring →
              <strong>4.</strong> For semantic caching: Reuse embedding if cosine similarity ≥ threshold (e.g., δ ≥ 0.92) →
              <strong>5.</strong> Add versioning mechanism to invalidate cache when embedding model changes
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>Instant reuse for identical queries</li>
                <li>Drastically reduces embedding model API calls</li>
                <li>Stabilizes latency under load</li>
                <li>Improves throughput and cost efficiency</li>
                <li>Zero quality impact for exact matches</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>Risk of staleness with long TTLs</li>
                <li>Memory overhead for large cache sizes</li>
                <li>Versioning/invalidation complexity</li>
                <li>Semantic cache tuning challenges</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Technique 5: Cache query embeddings to eliminate redundant embedding model calls for frequent queries'
    },
    {
      id: 8,
      title: '6. Cache Frequent Retrieval Results',
      content: (
        <div style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#98c379' }}>
            <SvgIcon iconName="floppy-disk" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Skip vector DB operations for repeated queries</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="bullseye" sizeName="lg" style={iconStyle} />
                <strong>When to Use</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li>Mostly static document corpora</li>
                <li>Applications with frequent repeat questions (FAQs)</li>
                <li>Voice IVR/customer support systems</li>
                <li>High-traffic applications where DB is a bottleneck</li>
              </ul>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="circle-check" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li>Cache top-k document IDs and snippets using query text or embedding hash as key</li>
                <li>Implement LRU (Least Recently Used) + TTL (Time To Live) cache structure</li>
                <li>Set up cache invalidation triggers when documents are updated or added</li>
                <li>Optionally implement semantic caching for similar queries</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <div style={{ fontSize: '0.85rem', marginLeft: '1rem' }}>
              <strong>1.</strong> Create cache key using hash(query) or hash(rounded_embedding) →
              <strong>2.</strong> Store document IDs, relevance scores, and short snippets →
              <strong>3.</strong> Set appropriate TTL: 15–120 minute expiration based on update frequency →
              <strong>4.</strong> Implement invalidation: On document updates, invalidate by namespace/collection/version →
              <strong>5.</strong> Monitor hit rate and tune cache size based on metrics
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>Dramatic latency reduction (often 10-100x)</li>
                <li>Significantly fewer vector DB calls</li>
                <li>Lower operational costs</li>
                <li>More stable and predictable performance</li>
                <li>Reduced infrastructure requirements</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>Risk of serving stale results</li>
                <li>Complex invalidation logic required</li>
                <li>Cache warm-up period needed</li>
                <li>Memory overhead for storing cached results</li>
                <li>Potential cache consistency issues</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Technique 6: Cache retrieval results to eliminate expensive vector DB operations for common queries'
    },
    {
      id: 9,
      title: '7. Use Re-Ranking Only on Top Few Results',
      content: (
        <div style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#61dafb' }}>
            <SvgIcon iconName="ranking-star" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Improve precision with minimal latency overhead</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="bullseye" sizeName="lg" style={iconStyle} />
                <strong>When to Use</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li>Need quality boost beyond vector search</li>
                <li>Latency budget is tight</li>
                <li>Complex semantic matching needs</li>
                <li>Applications requiring high precision</li>
              </ul>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="circle-check" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div style={{ marginLeft: '1rem', fontSize: '0.85rem' }}>
                <strong>Two-stage retrieval process:</strong>
                <ul style={{ marginLeft: '1rem', marginTop: '0.3rem' }}>
                  <li><span style={{ color: '#d19a66' }}>Stage 1:</span> Fast ANN vector search retrieves larger set (K1=50-100)</li>
                  <li><span style={{ color: '#e5c07b' }}>Stage 2:</span> Cross-encoder reranks only subset (m=10-20)</li>
                  <li><span style={{ color: '#98c379' }}>Final:</span> Pass top n=3-8 results to LLM</li>
                </ul>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <div style={{ fontSize: '0.85rem', marginLeft: '1rem' }}>
              <strong>1.</strong> Initial retrieval: Retrieve K1=50–100 documents quickly using vector search →
              <strong>2.</strong> Subset selection: Pass only top m=10–20 candidates to reranker →
              <strong>3.</strong> Reranking: Score candidates with stronger semantic model →
              <strong>4.</strong> Efficient batching: Process reranker calls in batches for throughput →
              <strong>5.</strong> Implement safeguards: Set timeouts and fallback to first-stage results →
              <strong>6.</strong> Select final context: Pass top 3–8 reranked results to LLM
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>Higher relevance with bounded cost</li>
                <li>Stable user experience</li>
                <li>Better handling of semantic nuances</li>
                <li>Minimizes compute on expensive models</li>
                <li>Can use specialized rerankers (e.g., domain-specific)</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>Extra component to maintain</li>
                <li>Additional GPU/throughput costs</li>
                <li>Requires careful batching</li>
                <li>If first stage misses relevant docs, reranker can't recover</li>
                <li>Increased system complexity</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Technique 7: Apply expensive reranking models only to a small subset of initially retrieved results for quality-efficiency balance'
    },
    {
      id: 10,
      title: '8. Use Context Compression Before LLM Call',
      content: (
        <div style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#61dafb' }}>
            <SvgIcon iconName="compress" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Reduce tokens sent to LLM while preserving essential information</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="bullseye" sizeName="lg" style={iconStyle} />
                <strong>When to Use</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li>Applications with long retrieved chunks</li>
                <li>When using expensive LLMs</li>
                <li>Systems with strict TTFT targets</li>
                <li>High query volume production environments</li>
              </ul>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="circle-check" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li><strong>Query-focused summarization:</strong> Generate concise summaries focused on query intent</li>
                <li><strong>Salient span extraction:</strong> Identify and extract only the most relevant passages</li>
                <li><strong>Token pruning:</strong> Remove redundant information and low-relevance sections</li>
                <li><strong>Citation-preserving compression:</strong> Maintain document source references</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <div style={{ fontSize: '0.85rem', marginLeft: '1rem' }}>
              <strong>1.</strong> Compress retrieved documents into concise passages (keep citations/IDs) →
              <strong>2.</strong> Set token budget: Cap final context (e.g., 800–1500 tokens) with safety margin →
              <strong>3.</strong> Monitor information loss: Log dropped tokens and content for quality assurance →
              <strong>4.</strong> Implement fallback: Use larger context window for low confidence or complex queries →
              <strong>5.</strong> Fine-tune compression ratio: Balance between context size and information preservation
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>Faster generation (reduced TTFT)</li>
                <li>Lower LLM inference costs</li>
                <li>Improved focus by removing distracting content</li>
                <li>Fits more context in limited windows</li>
                <li>Enhances response quality with relevant-only content</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>Risk of dropping critical details</li>
                <li>Adds extra model call to the pipeline</li>
                <li>May reduce answer completeness</li>
                <li>Requires careful tuning and monitoring</li>
                <li>Additional latency from compression step</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Technique 8: Apply intelligent context compression to reduce prompt size without losing critical information'
    },
    {
      id: 11,
      title: '9. Parallelize Retrieval + Re-Rank',
      content: (
        <div style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#c678dd' }}>
            <SvgIcon iconName="gears" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Shorten the critical path via concurrency</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="bullseye" sizeName="lg" style={iconStyle} />
                <strong>When to Use</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li>Applications with heterogeneous data sources</li>
                <li>Systems with significant network I/O wait times</li>
                <li>RAG pipelines with high p95 latency variance</li>
                <li>Multi-source search requirements</li>
              </ul>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="circle-check" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li>Issue retrieval requests to multiple sources simultaneously</li>
                <li>Stream retrieved chunks into reranker as they arrive</li>
                <li>Implement pipeline parallelism for each stage</li>
                <li>Set timeouts to prevent slow sources from blocking pipeline</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <div style={{ fontSize: '0.85rem', marginLeft: '1rem' }}>
              <strong>1.</strong> Configure async retrievals: Set up concurrent API calls with Promise.all() or async/await →
              <strong>2.</strong> Implement timeouts: Set per-source deadlines (e.g., 200-500ms) and circuit breakers →
              <strong>3.</strong> Stream processing: Batch reranker scoring as chunks arrive; don't wait for all sources →
              <strong>4.</strong> Early termination: Cut processing when top scores stabilize or quality threshold reached →
              <strong>5.</strong> Add telemetry: Track per-stage timings and implement backpressure controls
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>Significant wall-clock time reduction</li>
                <li>Resilience to slow or failing data sources</li>
                <li>Better utilization of compute resources</li>
                <li>Improved perceived user response time</li>
                <li>Ability to integrate multiple search strategies</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>Increased implementation complexity</li>
                <li>Potential resource contention issues</li>
                <li>Non-deterministic result ordering</li>
                <li>Harder to debug and maintain</li>
                <li>May require more sophisticated error handling</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Technique 9: Use concurrency and parallelization to reduce overall RAG pipeline latency'
    },
    {
      id: 12,
      title: '10. Use Streaming / Partial Generation',
      content: (
        <div style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e5c07b' }}>
            <SvgIcon iconName="stream" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Reduce perceived latency (time-to-first-token)</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="bullseye" sizeName="lg" style={iconStyle} />
                <strong>When to Use</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li>Chat/agent applications with conversational UIs</li>
                <li>Live voice assistants and call centers</li>
                <li>Customer support applications</li>
                <li>Any system where perceived responsiveness is critical</li>
              </ul>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="circle-check" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li>Use Server-Sent Events (SSE) or WebSockets to stream tokens</li>
                <li>Progressively render UI elements as tokens arrive</li>
                <li>For voice applications, buffer complete sentences before TTS</li>
                <li>Allow users to interrupt generation early</li>
                <li>Handle structured outputs (JSON/XML) with special streaming approaches</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <div style={{ fontSize: '0.85rem', marginLeft: '1rem' }}>
              <strong>1.</strong> Enable streaming API: Configure LLM provider's streaming endpoint (stream=True) →
              <strong>2.</strong> Set performance targets: Establish first-token SLA (e.g., &lt;300ms) and token heartbeat rate →
              <strong>3.</strong> Implement chunk flushing: Process in batches (20-40 tokens) for efficient network usage →
              <strong>4.</strong> Handle TTS integration: Buffer complete sentences for streaming audio synthesis →
              <strong>5.</strong> Manage structured outputs: Use speculative/partial JSON strategies for parseable incremental responses
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>Dramatically improves perceived responsiveness</li>
                <li>Allows users to interrupt generation to save cost</li>
                <li>Reduces wait frustration for end-users</li>
                <li>Masks backend processing variance</li>
                <li>Enables earlier TTS processing for voice applications</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>More complex client/server implementation</li>
                <li>Harder post-processing for partial structured outputs</li>
                <li>Requires retry/guardrail handling for interrupted content</li>
                <li>Can complicate analytics and logging pipelines</li>
                <li>Needs connection management for reliable delivery</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Technique 10: Stream LLM responses incrementally to dramatically improve perceived responsiveness'
    },
    {
      id: 13,
      title: '11. Use Distilled or Smaller LLM for RAG Answering',
      content: (
        <div style={{ fontSize: '0.8rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e5c07b' }}>
            <SvgIcon iconName="wand-magic-sparkles" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Lower TTFT and total generation time with acceptable accuracy</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="bullseye" sizeName="lg" style={iconStyle} />
                <strong>When to Use</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li>Latency-critical tasks (real-time chat/voice)</li>
                <li>Straightforward Q&A applications</li>
                <li>High throughput requirements</li>
                <li>Production apps with strict SLAs</li>
              </ul>
            </div>
            <div>
              <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="circle-check" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
                <li>Use Small Language Models (SLMs) like Gemini Flash 8B, Claude Haiku, Mistral 7B, Llama 3.1 8B</li>
                <li>Apply quantization techniques (INT8/INT4) for additional speedup</li>
                <li>Implement context caching for frequent queries</li>
                <li>Balance smaller model limitations with stronger retrieval</li>
                <li>Consider domain-specific fine-tuned small models</li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="list-ol" sizeName="lg" style={iconStyle} />
              <strong>Steps</strong>
            </div>
            <div style={{ fontSize: '0.85rem', marginLeft: '1rem' }}>
              <strong>1.</strong> Benchmark performance: Compare small vs large models on your task set; establish accuracy floor →
              <strong>2.</strong> Apply quantization: Test INT8/INT4 quantization if supported →
              <strong>3.</strong> Optimize parameters: Reduce max_tokens and temperature for faster, more deterministic outputs →
              <strong>4.</strong> Enhance retrieval: Strengthen retrieval and reranking to compensate for smaller model →
              <strong>5.</strong> Implement guardrails: Add quality monitors and fallback to larger models for complex queries
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#98c379', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>Significantly faster response times (3-10x)</li>
                <li>Much lower compute costs per query</li>
                <li>Higher throughput for busy applications</li>
                <li>Reduced infrastructure requirements</li>
                <li>Better UX through reduced latency</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ color: '#e06c75', marginBottom: '0.3rem' }}>
                <SvgIcon iconName="triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginBottom: 0 }}>
                <li>Potential loss of reasoning capabilities</li>
                <li>Reduced accuracy on complex edge cases</li>
                <li>More sensitive to prompt engineering</li>
                <li>Smaller context windows in many SLMs</li>
                <li>May require more validation and testing</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      notes: 'Technique 11: Replace large LLMs with smaller, distilled models to reduce latency while maintaining acceptable quality'
    },
    {
      id: 14,
      title: 'Summary and Comparison',
      content: (
        <div style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#61dafb', fontSize: '1rem', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Key Takeaways</strong>
            </div>
            <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
              <li><strong>Fix perceived latency first</strong> (Streaming), then critical-path bottlenecks (Retrieval, LLM)</li>
              <li><strong>Cache aggressively</strong> where correctness isn't impacted; invalidate reliably</li>
              <li><strong>Two-stage retrieval</strong> with light reranking often yields best quality-speed tradeoff</li>
              <li><strong>Measure and optimize</strong> across all RAG stages: indexing, retrieval, orchestration, and generation</li>
            </ul>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#98c379', fontSize: '1rem', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="compass" sizeName="lg" style={iconStyle} />
              <strong>Quick Chooser</strong>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ background: 'rgba(97, 218, 251, 0.1)', padding: '0.7rem', borderRadius: '6px' }}>
                <strong style={{ color: '#61dafb' }}>Immediate UX improvement:</strong>
                <div style={{ marginTop: '0.3rem' }}>→ <strong>10</strong> Streaming / Partial Generation</div>
              </div>
              <div style={{ background: 'rgba(209, 154, 102, 0.1)', padding: '0.7rem', borderRadius: '6px' }}>
                <strong style={{ color: '#d19a66' }}>Retrieval-bound system:</strong>
                <div style={{ marginTop: '0.3rem' }}>→ <strong>3</strong> Limit Top-K, <strong>4</strong> HNSW/IVF, <strong>2</strong> Smaller chunks</div>
              </div>
              <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.7rem', borderRadius: '6px' }}>
                <strong style={{ color: '#e06c75' }}>Compute-bound system:</strong>
                <div style={{ marginTop: '0.3rem' }}>→ <strong>1</strong> Smaller embeddings, <strong>11</strong> Smaller LLM</div>
              </div>
              <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.7rem', borderRadius: '6px' }}>
                <strong style={{ color: '#98c379' }}>Cost optimization:</strong>
                <div style={{ marginTop: '0.3rem' }}>→ <strong>5, 6</strong> Caching, <strong>8</strong> Compression</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#c678dd', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="scale-balanced" sizeName="lg" style={iconStyle} />
                <strong>Speed vs Recall</strong>
              </div>
              <div style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }}>
                <div><strong>1</strong> Smaller Embedding Models</div>
                <div><strong>2</strong> Reduce Chunk Size</div>
                <div><strong>3</strong> Limit Top-K Retrieval</div>
                <div><strong>4</strong> ANN Indexes</div>
                <div><strong>8</strong> Context Compression</div>
              </div>
            </div>
            <div>
              <div style={{ color: '#e5c07b', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="balance-scale" sizeName="lg" style={iconStyle} />
                <strong>Quality vs Cost</strong>
              </div>
              <div style={{ fontSize: '0.8rem', marginLeft: '0.5rem' }}>
                <div><strong>7</strong> Re-Ranking (↑quality, ↑compute)</div>
                <div><strong>8</strong> Context Compression (↓tokens, risk of lost context)</div>
                <div><strong>11</strong> Smaller LLM (↓latency, potential ↓reasoning)</div>
              </div>
            </div>
          </div>

          <div style={{ background: 'rgba(97, 218, 251, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #61dafb' }}>
            <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="flag-checkered" sizeName="lg" style={iconStyle} />
              <strong>Next Steps</strong>
            </div>
            <ol style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
              <li>Establish baseline metrics (TTFT, p95 latency, recall@k, cost/query)</li>
              <li>Introduce 2-3 techniques that address your bottlenecks first</li>
              <li>A/B test changes to measure impact on both speed and answer quality</li>
              <li>Monitor and iterate: RAG optimization is continuous improvement</li>
            </ol>
          </div>
        </div>
      ),
      notes: 'Summary with key takeaways, quick chooser for common scenarios, and tradeoff comparison'
    }
  ]
};

