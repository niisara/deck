import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const ragLatencyDeck: Deck = {
  id: 'rag-latency-optimization',
  name: '11 Techniques to Reduce RAG Latency',
  description: 'Practical, production-ready optimizations for faster RAG pipelines',
  category: 'RAG',
  theme: 'black',
  cardClassName: 'glass-morphism',
  cardStyle: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  slides: [],
  slideGroups: [
    {
      id: 'introduction',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          center: true,
          title: '11 Techniques to Reduce RAG Latency',
          content: (
            <div>
              <GSAPAnimated animation="rotateIn" duration={1} delay={0}>
                <div style={{ fontSize: '2rem', color: '#61dafb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <SvgIcon iconName="duo-gauge-high" sizeName="2x" style={{ marginRight: '1rem' }} darkModeInvert={true} />
                  RAG Optimization
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.3}>
                <div style={{ fontSize: '2rem', color: '#98c379' }}>
                  Practical, production-ready optimizations for faster RAG
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <div style={{ fontSize: '1.2rem' }}>
                  <SvgIcon iconName="duo-stream" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                  Technical Guide
                </div>
                <div style={{ fontSize: '1.2rem' }}>
                  How to lower end-to-end latency across <span style={{ color: '#e06c75' }}>embedding</span>,
                  <span style={{ color: '#d19a66' }}> retrieval</span>,
                  <span style={{ color: '#98c379' }}> orchestration</span>, and
                  <span style={{ color: '#61dafb' }}> generation</span> without sacrificing too much quality.
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.8}>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d5a6b',
          notes: `### 1. 11 Techniques to Reduce RAG Latency
Welcome everyone! Today we're going to tackle one of the most critical challenges in production RAG systems — **latency** 👉 'LAY-ten-see'. If you've ever built a RAG pipeline and wondered why it takes so long to return answers, this presentation is for you.

#### 🎯 What We'll Cover
We'll walk through **eleven practical techniques** that you can apply right away to speed up your RAG 👉 'rag' pipelines. These aren't just theoretical ideas — they're battle-tested optimizations used in real production systems. We'll cover four key areas: **embedding and chunking**, **retrieval**, **caching**, and **generation/UX** optimizations.

#### 💡 Why Latency Matters
Think of it this way — if your RAG system takes five seconds to answer a question, users will get frustrated and stop using it. But if you can get that down to under one second, it feels almost magical. The techniques we'll cover today can collectively reduce your end-to-end latency by 50-90% depending on your setup.

> 🎤 Ask the audience: "How many of you have worked with RAG systems before?"

Let's dive in and see how we can make your RAG pipelines lightning fast!`
        },
        {
          id: 2,
          title: 'Overview — The 11 Techniques at a Glance',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
                <MermaidPopover
                  title="RAG Pipeline Stages"
                  diagram={`flowchart LR
    A["📝 Query"] --> B["🔢 Embed"]
    B --> C["🔍 Retrieve"]
    C --> D["📊 Rerank"]
    D --> E["🤖 Generate"]
    style A fill:#4fc3f7,color:#000
    style B fill:#e1bee7,color:#000
    style C fill:#ffd700,color:#000
    style D fill:#ffcdd2,color:#000
    style E fill:#81c784,color:#000`}
                />
              </div>
              <GSAPAnimated animation="slideInLeft" delay={0.2}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <div style={{ color: '#e06c75', fontSize: '2rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-microchip" sizeName="2x" darkModeInvert={true} />
                      <strong>Embeddings & Chunking</strong>
                    </div>
                    <div style={{ marginLeft: '10px', fontSize: '1.2rem' }}>
                      <div><strong>1)</strong> Use Smaller Embedding Models</div>
                      <div><strong>2)</strong> Reduce Chunk Size</div>
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#d19a66', fontSize: '2rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-filter" sizeName="2x" darkModeInvert={true} />
                      <strong>Retrieval</strong>
                    </div>
                    <div style={{ marginLeft: '10px', fontSize: '1.2rem' }}>
                      <div><strong>3)</strong> Limit Top-K Retrieval</div>
                      <div><strong>4)</strong> Use ANN Indexes (HNSW/IVF)</div>
                    </div>
                  </div>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <div style={{ color: '#98c379', fontSize: '2rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-database" sizeName="2x" darkModeInvert={true} />
                      <strong>Caching</strong>
                    </div>
                    <div style={{ marginLeft: '10px', fontSize: '1.2rem' }}>
                      <div><strong>5)</strong> Cache Query Embeddings</div>
                      <div><strong>6)</strong> Cache Retrieval Results</div>
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#61dafb', fontSize: '2rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-ranking-star" sizeName="2x" darkModeInvert={true} />
                      <strong>Reranking & Compression</strong>
                    </div>
                    <div style={{ marginLeft: '10px', fontSize: '1.2rem' }}>
                      <div><strong>7)</strong> Re-rank Only Top Few</div>
                      <div><strong>8)</strong> Context Compression</div>
                    </div>
                  </div>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.6}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <div style={{ color: '#c678dd', fontSize: '2rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                      <strong>Orchestration</strong>
                    </div>
                    <div style={{ marginLeft: '10px', fontSize: '1.2rem' }}>
                      <div><strong>9)</strong> Parallelize Retrieval + Re-Rank</div>
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#e5c07b', fontSize: '2rem', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-wand-magic-sparkles" sizeName="2x" darkModeInvert={true} />
                      <strong>Generation/UX & LLM Choice</strong>
                    </div>
                    <div style={{ marginLeft: '10px', fontSize: '1.2rem' }}>
                      <div><strong>10)</strong> Streaming / Partial Generation</div>
                      <div><strong>11)</strong> Distilled or Smaller LLM</div>
                    </div>
                  </div>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.8}>
                <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '8px', borderLeft: '4px solid #61dafb', fontSize: '1.2rem' }}>
                  <strong>Key idea:</strong> Optimize the critical path and perceived latency first; then tune infrastructure. Focus on different latency stages: Precompute/storage, Retrieval, Pre-LLM, and LLM/UX to comprehensively reduce end-to-end latency.
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d5a6b',
          notes: `### 2. Overview — The 11 Techniques at a Glance
Here's your roadmap for today. We've organized the eleven techniques into five categories, each targeting a different part of the RAG pipeline.

#### 🔧 The Categories
First up, **Embeddings & Chunking** — techniques one and two focus on making your data preparation faster. Then **Retrieval** — techniques three and four speed up how you search through your vector store. **Caching** in techniques five and six is all about avoiding redundant work. **Reranking & Compression** in seven and eight reduce the amount of data your LLM 👉 'ell-ell-em' needs to process. And finally, **Orchestration and Generation/UX** in techniques nine through eleven optimize the overall pipeline flow.

#### 📊 The Pipeline Flow
\`\`\`mermaid
flowchart LR
    A["📝 Query"] --> B["🔢 Embed"]
    B --> C["🔍 Retrieve"]
    C --> D["📊 Rerank"]
    D --> E["🤖 Generate"]
    style A fill:#4fc3f7,color:#000
    style B fill:#e1bee7,color:#000
    style C fill:#ffd700,color:#000
    style D fill:#ffcdd2,color:#000
    style E fill:#81c784,color:#000
\`\`\`
Each technique targets one or more of these stages. The key insight is that you don't need to apply all eleven — pick the ones that address your biggest bottleneck first.

#### 🎯 Key Takeaway
The key idea here is simple: **optimize the critical path and perceived latency first**, then tune infrastructure. Focus on different latency stages to comprehensively reduce end-to-end latency. Now let's dive into each technique, starting with smaller embedding models...`
        }
      ]
    },
    {
      id: 'the-11-techniques',
      title: 'The 11 Techniques',
      slides: [
        {
          id: 3,
          title: '1. Use Smaller Embedding Models - Goal',
          icon: { name: 'duo-microchip' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '40px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <div style={{ color: '#61dafb' }}>
                  <strong>Goal</strong>
                </div>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '12px', borderLeft: '6px solid #61dafb' }}>
                <p style={{ margin: 0 }}>
                  Reduce embedding latency and memory footprint while maintaining acceptable retrieval quality.
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: ''
        },
        {
          id: 4,
          title: '1. Use Smaller Embedding Models - When to Use',
          icon: { name: 'duo-microchip' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#61dafb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                <strong>When to Use</strong>
              </div>
              <ul>
                <li>High query volume applications</li>
                <li>Large document corpora</li>
                <li>Frequent (re)indexing requirements</li>
                <li>Multilingual applications (if model supports it)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: ''
        },
        {
          id: 5,
          title: '1. Use Smaller Embedding Models - How It Works',
          icon: { name: 'duo-microchip' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#98c379', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <p style={{ marginBottom: '1.5rem' }}>Replace large embedding models with smaller, more efficient alternatives that offer comparable semantic understanding with reduced computation:</p>
              <ul>
                <li>Use lower-parameter models (e.g., text-embedding-3-small, E5-small, bge-small)</li>
                <li>Optionally reduce embedding dimensions (e.g., PCA from 1536→512)</li>
                <li>Consider quantization techniques (FP16, INT8)</li>
                <li>Trade minimal recall loss for significant latency improvements</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: ''
        },
        {
          id: 6,
          title: '1. Use Smaller Embedding Models - Steps',
          icon: { name: 'duo-microchip' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#d19a66', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                <strong>Steps</strong>
              </div>
              <ul>
                <li>Benchmark baseline: Measure retrieval quality and latency with current model</li>
                <li>Trial alternatives: Evaluate smaller models on representative query set</li>
                <li>Optimize dimensions: If needed, reduce vector dimensions (e.g., 768→384) and reindex</li>
                <li>Measure performance: Track recall@k and p95 latency metrics</li>
                <li>Tune parameters: Adjust retrieval settings to compensate for any quality drop</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: ''
        },
        {
          id: 7,
          title: '1. Use Smaller Embedding Models - Pros and Cons',
          icon: { name: 'duo-microchip' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Faster inference (2-10x speedup)</li>
                    <li>Lower compute costs & RAM</li>
                    <li>Smaller vector indexes</li>
                    <li>Reduced RAM requirements</li>
                    <li>Higher query throughput</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Potential recall drop on nuanced queries</li>
                    <li>May underperform on long-tail cases</li>
                    <li>Reindexing cost when switching models</li>
                    <li>Possible multilingual performance gaps</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: ''
        }
      ]
    },
    {
      id: 'the-11-techniques',
      title: 'The 11 Techniques',
      slides: [
        {
          id: 8,
          title: '2. Reduce Chunk Size - Goal',
          icon: { name: 'duo-scissors' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '40px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <div style={{ color: '#61dafb' }}>
                  <strong>Goal</strong>
                </div>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '12px', borderLeft: '6px solid #61dafb' }}>
                <p style={{ margin: 0 }}>
                  Cut retrieval time and LLM prompt tokens while maintaining or improving retrieval quality.
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d4d',
          notes: ''
        },
        {
          id: 9,
          title: '2. Reduce Chunk Size - When to Use',
          icon: { name: 'duo-scissors' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#61dafb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <strong>When to Use</strong>
              </div>
              <ul>
                <li>Long documents or technical content</li>
                <li>Limited LLM context windows</li>
                <li>High per-token LLM costs</li>
                <li>Content with distinct sections or topics</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6b1d4d',
          notes: ''
        },
        {
          id: 10,
          title: '2. Reduce Chunk Size - How It Works',
          icon: { name: 'duo-scissors' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#98c379', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <p style={{ marginBottom: '1.5rem' }}>Split documents into smaller, overlapping chunks so retrieval finds more specific, relevant context and the LLM processes fewer tokens:</p>
              <ul>
                <li>Reduces the total context window size passed to the LLM</li>
                <li>Ensures each chunk focuses on a coherent topic or concept</li>
                <li>Creates overlap between chunks to maintain contextual continuity</li>
                <li>Enables more precise matching between query and relevant content</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6b1d4d',
          notes: ''
        },
        {
          id: 11,
          title: '2. Reduce Chunk Size - Steps',
          icon: { name: 'duo-scissors' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#d19a66', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                <strong>Steps</strong>
              </div>
              <ul>
                <li>Set initial chunk size: Start with 200–400 tokens per chunk</li>
                <li>Configure overlap: Use 10–20% overlap between consecutive chunks</li>
                <li>Preserve metadata: Include titles/headers/document IDs for grounding</li>
                <li>Evaluate performance: Test recall and answer quality with sample queries</li>
                <li>Iterate and tune: Adjust chunk size and overlap based on results</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6b1d4d',
          notes: ''
        },
        {
          id: 12,
          title: '2. Reduce Chunk Size - Pros and Cons',
          icon: { name: 'duo-scissors' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Lower prompt size reduces token usage</li>
                    <li>Improved time to first token (TTFT)</li>
                    <li>Better focus for re-rankers</li>
                    <li>More precise retrieval results</li>
                    <li>Reduces hallucination risk</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>More chunks to store and search</li>
                    <li>Risk of losing global document context</li>
                    <li>Requires careful overlap tuning</li>
                    <li>May split semantic units like paragraphs</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d4d',
          notes: ''
        }
      ]
    },
    {
      id: 'the-11-techniques',
      title: 'The 11 Techniques',
      slides: [
        {
          id: 13,
          title: '3. Limit Top-K Retrieval - Goal',
          icon: { name: 'duo-filter' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '40px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <div style={{ color: '#61dafb' }}>
                  <strong>Goal</strong>
                </div>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '12px', borderLeft: '6px solid #61dafb' }}>
                <p style={{ margin: 0 }}>
                  Reduce downstream processing and prompt size by retrieving only the most relevant content.
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#571d6b',
          notes: ''
        },
        {
          id: 14,
          title: '3. Limit Top-K Retrieval - When to Use',
          icon: { name: 'duo-filter' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#61dafb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <strong>When to Use</strong>
              </div>
              <ul>
                <li>Latency-sensitive applications (chat/voice)</li>
                <li>When using re-rankers in the pipeline</li>
                <li>Systems with strong embedding models</li>
                <li>When memory or token budget is constrained</li>
              </ul>
            </div>
          ),
          backgroundColor: '#571d6b',
          notes: ''
        },
        {
          id: 15,
          title: '3. Limit Top-K Retrieval - How It Works',
          icon: { name: 'duo-filter' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#98c379', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <p style={{ marginBottom: '1.5rem' }}>Retrieve only the minimal number of documents (K) that maintains answer quality while reducing processing overhead:</p>
              <ul>
                <li>Set a minimal K value that preserves acceptable result quality</li>
                <li>Apply relevance score thresholds to filter low-quality matches (e.g., cosine_similarity ≥ 0.75)</li>
                <li>Implement token budgets to cap total context size</li>
                <li>Dynamically adjust K based on score distribution or query complexity</li>
              </ul>
            </div>
          ),
          backgroundColor: '#571d6b',
          notes: ''
        },
        {
          id: 16,
          title: '3. Limit Top-K Retrieval - Steps',
          icon: { name: 'duo-filter' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#d19a66', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                <strong>Steps</strong>
              </div>
              <ul>
                <li>Start conservative: Begin with K=5-8 for most applications</li>
                <li>Measure quality: Track answer accuracy and latency metrics</li>
                <li>Add score filtering: Implement cutoff threshold (e.g., cosine_sim ≥ τ) to filter irrelevant results</li>
                <li>Set token budget: Limit total context tokens sent to LLM</li>
                <li>Implement adaptive K: Dynamically adjust based on score decay between top results</li>
              </ul>
            </div>
          ),
          backgroundColor: '#571d6b',
          notes: ''
        },
        {
          id: 17,
          title: '3. Limit Top-K Retrieval - Pros and Cons',
          icon: { name: 'duo-filter' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Faster retrieval processing</li>
                    <li>Smaller context prompts to LLM</li>
                    <li>Lower token usage and API costs</li>
                    <li>Reduced likelihood of distracting context</li>
                    <li>Improved focus on most relevant content</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Risk of missing critical context for complex queries</li>
                    <li>Requires careful tuning and monitoring</li>
                    <li>May underperform on edge cases or ambiguous queries</li>
                    <li>Can increase hallucinations if context is insufficient</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#571d6b',
          notes: ''
        }
      ]
    },
    {
      id: 'the-11-techniques',
      title: 'The 11 Techniques',
      slides: [
        {
          id: 18,
          title: '4. Use Approximate Nearest Neighbor Indexes - Goal',
          icon: { name: 'duo-network-wired' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '40px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <div style={{ color: '#61dafb' }}>
                  <strong>Goal</strong>
                </div>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '12px', borderLeft: '6px solid #61dafb' }}>
                <p style={{ margin: 0 }}>
                  Accelerate vector search at scale without sacrificing too much accuracy.
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#281d6b',
          notes: ''
        },
        {
          id: 19,
          title: '4. Use ANN Indexes - When to Use',
          icon: { name: 'duo-network-wired' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#61dafb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <strong>When to Use</strong>
              </div>
              <ul>
                <li>Collections with 1M+ vectors</li>
                <li>Applications with strict p95 latency targets</li>
                <li>CPU-bound search environments</li>
                <li>Large-scale production RAG systems</li>
              </ul>
            </div>
          ),
          backgroundColor: '#281d6b',
          notes: ''
        },
        {
          id: 20,
          title: '4. Use ANN Indexes - How It Works',
          icon: { name: 'duo-network-wired' },
          content: (
            <div style={{ fontSize: '1.8rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#98c379', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <p style={{ marginBottom: '1rem' }}>Two popular approaches for approximate nearest neighbor search:</p>
              <ul>
                <li><strong>HNSW (Hierarchical Navigable Small World):</strong> Uses multi-layer graph structure with "shortcuts" at higher layers for efficient navigation. Parameters to tune include M (max connections), efSearch (search quality), and efConstruction (index quality).</li>
                <li><strong>IVF (Inverted File):</strong> Partitions vector space into nlist clusters, searches only nprobe most relevant clusters. Can be combined with PQ (Product Quantization) to reduce memory.</li>
              </ul>
              <p>Both methods trade exact results for approximate ones that are "good enough" for most cases, drastically improving search speed.</p>
            </div>
          ),
          backgroundColor: '#281d6b',
          notes: ''
        },
        {
          id: 21,
          title: '4. Use ANN Indexes - Steps',
          icon: { name: 'duo-network-wired' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#d19a66', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                <strong>Steps</strong>
              </div>
              <ul>
                <li>For HNSW: Start with M=16-32, efSearch=64-128, efConstruction=200-400</li>
                <li>For IVF: Choose nlist ≈ sqrt(N) where N is collection size, set nprobe to balance recall vs speed</li>
                <li>Memory optimization: Consider IVF+PQ for lower RAM usage if memory is constrained</li>
                <li>Test with filters: Evaluate performance with attribute filters as they can impact latency</li>
                <li>Benchmark: Compare accuracy and latency across parameter settings to find optimal configuration</li>
              </ul>
            </div>
          ),
          backgroundColor: '#281d6b',
          notes: ''
        },
        {
          id: 22,
          title: '4. Use ANN Indexes - Pros and Cons',
          icon: { name: 'duo-network-wired' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Order-of-magnitude speedups (10-100x faster)</li>
                    <li>Scalable to billions of vectors</li>
                    <li>Well-supported in major vector DB platforms</li>
                    <li>Configurable performance-accuracy tradeoff</li>
                    <li>Enables real-time search in large datasets</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>HNSW has higher memory overhead</li>
                    <li>Only approximate recall (not 100% exact matches)</li>
                    <li>Requires parameter tuning and testing</li>
                    <li>Filtered searches can be slower (especially with HNSW)</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#281d6b',
          notes: ''
        }
      ]
    },
    {
      id: 'the-11-techniques',
      title: 'The 11 Techniques',
      slides: [
        {
          id: 23,
          title: '5. Cache Query Embeddings - Goal',
          icon: { name: 'duo-database' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '40px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <div style={{ color: '#61dafb' }}>
                  <strong>Goal</strong>
                </div>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '12px', borderLeft: '6px solid #61dafb' }}>
                <p style={{ margin: 0 }}>
                  Avoid recomputing embeddings for repeated queries, significantly reducing embedding model latency and API costs.
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#1d416b',
          notes: ''
        },
        {
          id: 24,
          title: '5. Cache Query Embeddings - When to Use',
          icon: { name: 'duo-database' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#61dafb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                <strong>When to Use</strong>
              </div>
              <ul>
                <li>FAQs and support bots with repetitive queries</li>
                <li>Dashboard or analytics applications</li>
                <li>Systems with bursty traffic patterns</li>
                <li>Applications with predictable query patterns</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1d416b',
          notes: ''
        },
        {
          id: 25,
          title: '5. Cache Query Embeddings - How It Works',
          icon: { name: 'duo-database' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#98c379', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <p style={{ marginBottom: '1.5rem' }}>Store and reuse embeddings for previously seen queries to bypass the embedding model:</p>
              <ul>
                <li>Implement LRU+TTL cache keyed by normalized query text</li>
                <li>Store vector embeddings for frequent queries in memory or distributed cache</li>
                <li>Optionally implement semantic cache to match similar but non-identical queries</li>
                <li>For semantic caching, use nearest-neighbor lookup of query embeddings with a similarity threshold</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1d416b',
          notes: ''
        },
        {
          id: 26,
          title: '5. Cache Query Embeddings - Steps',
          icon: { name: 'duo-database' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#d19a66', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                <strong>Steps</strong>
              </div>
              <ul>
                <li>Normalize queries: Lowercase, trim whitespace, redact PII, standardize format</li>
                <li>Configure cache parameters: Set TTL (1-24h) and size based on traffic patterns</li>
                <li>Implement hit/miss tracking: Monitor cache performance metrics</li>
                <li>For semantic caching: Reuse embedding if cosine similarity ≥ threshold (e.g., δ ≥ 0.92)</li>
                <li>Add versioning mechanism: Invalidate cache when embedding model changes</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1d416b',
          notes: ''
        },
        {
          id: 27,
          title: '5. Cache Query Embeddings - Pros and Cons',
          icon: { name: 'duo-database' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Instant reuse for identical queries</li>
                    <li>Drastically reduces embedding model API calls</li>
                    <li>Stabilizes latency under load</li>
                    <li>Improves throughput and cost efficiency</li>
                    <li>Zero quality impact for exact matches</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Risk of staleness with long TTLs</li>
                    <li>Memory overhead for large cache sizes</li>
                    <li>Versioning/invalidation complexity</li>
                    <li>Semantic cache tuning challenges</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d416b',
          notes: ''
        }
      ]
    },
    {
      id: 'the-11-techniques',
      title: 'The 11 Techniques',
      slides: [
        {
          id: 28,
          title: '6. Cache Retrieval Results - Goal',
          icon: { name: 'duo-floppy-disk' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '40px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <div style={{ color: '#61dafb' }}>
                  <strong>Goal</strong>
                </div>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '12px', borderLeft: '6px solid #61dafb' }}>
                <p style={{ margin: 0 }}>
                  Skip vector DB operations for repeated queries, eliminating expensive similarity search operations.
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b63',
          notes: ''
        },
        {
          id: 29,
          title: '6. Cache Retrieval Results - When to Use',
          icon: { name: 'duo-floppy-disk' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#61dafb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                <strong>When to Use</strong>
              </div>
              <ul>
                <li>Mostly static document corpora</li>
                <li>Applications with frequent repeat questions (FAQs)</li>
                <li>Voice IVR/customer support systems</li>
                <li>High-traffic applications where DB is a bottleneck</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1d6b63',
          notes: ''
        },
        {
          id: 30,
          title: '6. Cache Retrieval Results - How It Works',
          icon: { name: 'duo-floppy-disk' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#98c379', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <p style={{ marginBottom: '1.5rem' }}>Store and reuse search results for queries that have been previously processed:</p>
              <ul>
                <li>Cache top-k document IDs and snippets using query text or embedding hash as key</li>
                <li>Implement LRU (Least Recently Used) + TTL (Time To Live) cache structure</li>
                <li>Set up cache invalidation triggers when documents are updated or added</li>
                <li>Optionally implement semantic caching: reuse results for semantically similar queries</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1d6b63',
          notes: ''
        },
        {
          id: 31,
          title: '6. Cache Retrieval Results - Steps',
          icon: { name: 'duo-floppy-disk' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#d19a66', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                <strong>Steps</strong>
              </div>
              <ul>
                <li>Create cache key: Use hash(query) or hash(rounded_embedding) as lookup key</li>
                <li>Store rich results: Cache document IDs, relevance scores, and short snippets</li>
                <li>Set appropriate TTL: Configure 15–120 minute expiration based on update frequency</li>
                <li>Implement invalidation: On document updates, invalidate by namespace/collection/version</li>
                <li>Monitor hit rate: Track and tune cache size based on hit/miss metrics</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1d6b63',
          notes: ''
        },
        {
          id: 32,
          title: '6. Cache Retrieval Results - Pros and Cons',
          icon: { name: 'duo-floppy-disk' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Dramatic latency reduction (often 10-100x)</li>
                    <li>Significantly fewer vector DB calls</li>
                    <li>Lower operational costs</li>
                    <li>More stable and predictable performance</li>
                    <li>Reduced infrastructure requirements</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
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
          backgroundColor: '#1d6b63',
          notes: ''
        }
      ]
    },
    {
      id: 'the-11-techniques',
      title: 'The 11 Techniques',
      slides: [
        {
          id: 33,
          title: '7. Re-Ranking - Goal',
          icon: { name: 'duo-ranking-star' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '40px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <div style={{ color: '#61dafb' }}>
                  <strong>Goal</strong>
                </div>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '12px', borderLeft: '6px solid #61dafb' }}>
                <p style={{ margin: 0 }}>
                  Improve precision with minimal latency overhead by applying high-quality but slower ranking only to a small subset of retrieved results.
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b29',
          notes: ''
        },
        {
          id: 34,
          title: '7. Re-Ranking - When to Use',
          icon: { name: 'duo-ranking-star' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#61dafb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                <strong>When to Use</strong>
              </div>
              <ul>
                <li>Need quality boost beyond vector search</li>
                <li>Latency budget is tight</li>
                <li>Complex semantic matching needs</li>
                <li>Applications requiring high precision</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1d6b29',
          notes: ''
        },
        {
          id: 35,
          title: '7. Re-Ranking - How It Works',
          icon: { name: 'duo-ranking-star' },
          content: (
            <div style={{ fontSize: '1.8rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#98c379', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <p style={{ marginBottom: '1.5rem' }}>Two-stage retrieval process that combines speed and quality:</p>
              <ul>
                <li>First stage: Fast ANN vector search retrieves larger set (K1) of candidates</li>
                <li>Second stage: Cross-encoder or reranker model evaluates only a subset (m) of those candidates</li>
                <li>Only the top m ≪ K1 candidates go through reranking (e.g., 10-20 out of 50-100)</li>
                <li>Final top n results (3-8) with highest reranker scores get passed to LLM</li>
                <li>Reranker models (like cross-encoders) analyze query-document pairs directly for better matching</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1d6b29',
          notes: ''
        },
        {
          id: 36,
          title: '7. Re-Ranking - Steps',
          icon: { name: 'duo-ranking-star' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#d19a66', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                <strong>Steps</strong>
              </div>
              <ul>
                <li>Initial retrieval: Retrieve K1=50–100 documents quickly using vector search</li>
                <li>Subset selection: Pass only top m=10–20 candidates to reranker</li>
                <li>Reranking: Score candidates with stronger semantic model</li>
                <li>Efficient batching: Process reranker calls in batches for throughput</li>
                <li>Implement safeguards: Set timeouts and fallback to first-stage results</li>
                <li>Select final context: Pass top 3–8 reranked results to LLM</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1d6b29',
          notes: ''
        },
        {
          id: 37,
          title: '7. Re-Ranking - Pros and Cons',
          icon: { name: 'duo-ranking-star' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Higher relevance with bounded cost</li>
                    <li>Stable user experience</li>
                    <li>Better handling of semantic nuances</li>
                    <li>Minimizes compute on expensive models</li>
                    <li>Can use specialized rerankers (e.g., domain-specific)</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
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
          backgroundColor: '#1d6b29',
          notes: ''
        }
      ]
    },
    {
      id: 'the-11-techniques',
      title: 'The 11 Techniques',
      slides: [
        {
          id: 38,
          title: '8. Context Compression - Goal',
          icon: { name: 'duo-compress' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '40px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <div style={{ color: '#61dafb' }}>
                  <strong>Goal</strong>
                </div>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '12px', borderLeft: '6px solid #61dafb' }}>
                <p style={{ margin: 0 }}>
                  Reduce tokens sent to the LLM, lowering Time to First Token (TTFT) and cost while preserving essential information.
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#4a6b1d',
          notes: ''
        },
        {
          id: 39,
          title: '8. Context Compression - When to Use',
          icon: { name: 'duo-compress' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#61dafb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                <strong>When to Use</strong>
              </div>
              <ul>
                <li>Applications with long retrieved chunks</li>
                <li>When using expensive LLMs</li>
                <li>Systems with strict TTFT targets</li>
                <li>High query volume production environments</li>
              </ul>
            </div>
          ),
          backgroundColor: '#4a6b1d',
          notes: ''
        },
        {
          id: 40,
          title: '8. Context Compression - How It Works',
          icon: { name: 'duo-compress' },
          content: (
            <div style={{ fontSize: '1.8rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#98c379', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <p style={{ marginBottom: '1.5rem' }}>Apply intelligent reduction techniques to minimize prompt size without losing critical context:</p>
              <ul>
                <li>Query-focused summarization: Generate concise summaries of retrieved documents focused on query intent</li>
                <li>Salient span extraction: Identify and extract only the most relevant passages from each document</li>
                <li>Token pruning: Remove redundant information, repetitive content, and low-relevance sections</li>
                <li>Citation-preserving compression: Maintain document source references while reducing content size</li>
              </ul>
            </div>
          ),
          backgroundColor: '#4a6b1d',
          notes: ''
        },
        {
          id: 41,
          title: '8. Context Compression - Steps',
          icon: { name: 'duo-compress' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#d19a66', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                <strong>Steps</strong>
              </div>
              <ul>
                <li>Compress retrieved documents: Transform N retrieved docs into concise passages (keep citations/IDs)</li>
                <li>Set token budget: Cap final context (e.g., 800–1500 tokens) with safety margin for LLM response</li>
                <li>Monitor information loss: Log dropped tokens and content for quality assurance</li>
                <li>Implement fallback: Use larger context window for low confidence or complex queries</li>
                <li>Fine-tune compression ratio: Balance between context size and information preservation</li>
              </ul>
            </div>
          ),
          backgroundColor: '#4a6b1d',
          notes: ''
        },
        {
          id: 42,
          title: '8. Context Compression - Pros and Cons',
          icon: { name: 'duo-compress' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Faster generation (reduced TTFT)</li>
                    <li>Lower LLM inference costs</li>
                    <li>Improved focus by removing distracting content</li>
                    <li>Fits more context in limited windows</li>
                    <li>Enhances response quality with relevant-only content</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
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
          backgroundColor: '#4a6b1d',
          notes: ''
        }
      ]
    },
    {
      id: 'the-11-techniques',
      title: 'The 11 Techniques',
      slides: [
        {
          id: 43,
          title: '9. Parallelize Retrieval - Goal',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '40px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <div style={{ color: '#61dafb' }}>
                  <strong>Goal</strong>
                </div>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '12px', borderLeft: '6px solid #61dafb' }}>
                <p style={{ margin: 0 }}>
                  Shorten the critical path via concurrency and parallelization to reduce overall RAG latency.
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#6b641d',
          notes: ''
        },
        {
          id: 44,
          title: '9. Parallelize Retrieval - When to Use',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#61dafb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                <strong>When to Use</strong>
              </div>
              <ul>
                <li>Applications with heterogeneous data sources</li>
                <li>Systems with significant network I/O wait times</li>
                <li>RAG pipelines with high p95 latency variance</li>
                <li>Multi-source search requirements</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6b641d',
          notes: ''
        },
        {
          id: 45,
          title: '9. Parallelize Retrieval - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.8rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#98c379', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <p style={{ marginBottom: '1.5rem' }}>Execute multiple search operations concurrently and process results as they arrive:</p>
              <ul>
                <li>Issue retrieval requests to multiple sources simultaneously (vector DB, keyword search, APIs)</li>
                <li>Stream retrieved chunks into reranker as they arrive rather than waiting for all retrievals to complete</li>
                <li>Implement pipeline parallelism where each stage begins processing partial results from previous stage</li>
                <li>Set timeouts to prevent slow sources from blocking the entire pipeline</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6b641d',
          notes: ''
        },
        {
          id: 46,
          title: '9. Parallelize Retrieval - Steps',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#d19a66', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                <strong>Steps</strong>
              </div>
              <ul>
                <li>Configure async retrievals: Set up concurrent API calls with Promise.all() or async/await patterns</li>
                <li>Implement timeouts: Set per-source deadlines (e.g., 200-500ms) and circuit breakers</li>
                <li>Stream processing: Batch reranker scoring as chunks arrive; don't wait for all sources</li>
                <li>Early termination: Cut processing when top scores stabilize or quality threshold reached</li>
                <li>Add telemetry: Track per-stage timings and implement backpressure controls</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6b641d',
          notes: ''
        },
        {
          id: 47,
          title: '9. Parallelize Retrieval - Pros and Cons',
          icon: { name: 'duo-gears' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Significant wall-clock time reduction</li>
                    <li>Resilience to slow or failing data sources</li>
                    <li>Better utilization of compute resources</li>
                    <li>Improved perceived user response time</li>
                    <li>Ability to integrate multiple search strategies</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
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
          backgroundColor: '#6b641d',
          notes: ''
        }
      ]
    },
    {
      id: 'the-11-techniques',
      title: 'The 11 Techniques',
      slides: [
        {
          id: 48,
          title: '10. Streaming - Goal',
          icon: { name: 'duo-stream' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '40px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <div style={{ color: '#61dafb' }}>
                  <strong>Goal</strong>
                </div>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '12px', borderLeft: '6px solid #61dafb' }}>
                <p style={{ margin: 0 }}>
                  Reduce perceived latency (time-to-first-token) and enable early text-to-speech conversion for better user experience.
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#6b471d',
          notes: ''
        },
        {
          id: 49,
          title: '10. Streaming - When to Use',
          icon: { name: 'duo-stream' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#61dafb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                <strong>When to Use</strong>
              </div>
              <ul>
                <li>Chat/agent applications with conversational UIs</li>
                <li>Live voice assistants and call centers</li>
                <li>Customer support applications</li>
                <li>Any system where perceived responsiveness is critical</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6b471d',
          notes: ''
        },
        {
          id: 50,
          title: '10. Streaming - How It Works',
          icon: { name: 'duo-stream' },
          content: (
            <div style={{ fontSize: '1.8rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#98c379', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <p style={{ marginBottom: '1.5rem' }}>Rather than waiting for the complete LLM response, stream tokens incrementally as they're generated:</p>
              <ul>
                <li>Use Server-Sent Events (SSE) or WebSockets to stream tokens from server to client</li>
                <li>Progressively render UI elements as tokens arrive, creating typing-like effect</li>
                <li>For voice applications, buffer complete sentences before TTS conversion</li>
                <li>Allow users to interrupt generation early when they have enough information</li>
                <li>Handle structured outputs (JSON/XML) with special streaming approaches</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6b471d',
          notes: ''
        },
        {
          id: 51,
          title: '10. Streaming - Steps',
          icon: { name: 'duo-stream' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#d19a66', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                <strong>Steps</strong>
              </div>
              <ul>
                <li>Enable streaming API: Configure LLM provider's streaming endpoint (stream=True)</li>
                <li>Set performance targets: Establish first-token SLA (e.g., &lt;300ms) and token heartbeat rate</li>
                <li>Implement chunk flushing: Process in batches (20-40 tokens) for efficient network usage</li>
                <li>Handle TTS integration: Buffer complete sentences for streaming audio synthesis</li>
                <li>Manage structured outputs: Use speculative/partial JSON strategies for parseable incremental responses</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6b471d',
          notes: ''
        },
        {
          id: 52,
          title: '10. Streaming - Pros and Cons',
          icon: { name: 'duo-stream' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Dramatically improves perceived responsiveness</li>
                    <li>Allows users to interrupt generation to save cost</li>
                    <li>Reduces wait frustration for end-users</li>
                    <li>Masks backend processing variance</li>
                    <li>Enables earlier TTS processing for voice applications</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
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
          backgroundColor: '#6b471d',
          notes: ''
        }
      ]
    },
    {
      id: 'the-11-techniques',
      title: 'The 11 Techniques',
      slides: [
        {
          id: 53,
          title: '11. Smaller LLM - Goal',
          icon: { name: 'duo-wand-magic-sparkles' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '40px' }}></div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <div style={{ color: '#61dafb' }}>
                  <strong>Goal</strong>
                </div>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '12px', borderLeft: '6px solid #61dafb' }}>
                <p style={{ margin: 0 }}>
                  Lower TTFT (Time To First Token) and total generation time with acceptable accuracy for RAG applications.
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: ''
        },
        {
          id: 54,
          title: '11. Smaller LLM - When to Use',
          icon: { name: 'duo-wand-magic-sparkles' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#61dafb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                <strong>When to Use</strong>
              </div>
              <ul>
                <li>Latency-critical tasks (real-time chat/voice)</li>
                <li>Straightforward Q&A applications</li>
                <li>High throughput requirements</li>
                <li>Production apps with strict SLAs</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: ''
        },
        {
          id: 55,
          title: '11. Smaller LLM - How It Works',
          icon: { name: 'duo-wand-magic-sparkles' },
          content: (
            <div style={{ fontSize: '1.8rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#98c379', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <strong>How It Works</strong>
              </div>
              <p style={{ marginBottom: '1.5rem' }}>Replace large models with smaller but efficient alternatives while maintaining acceptable quality:</p>
              <ul>
                <li>Use Small Language Models (SLMs) like Gemini Flash 8B, Claude Haiku, Mistral 7B, Llama 3.1 8B</li>
                <li>Apply quantization techniques (INT8/INT4) for additional speedup</li>
                <li>Implement context caching for frequent queries</li>
                <li>Balance smaller model limitations with stronger retrieval and reranking</li>
                <li>Consider domain-specific fine-tuned small models for specialized tasks</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: ''
        },
        {
          id: 56,
          title: '11. Smaller LLM - Steps',
          icon: { name: 'duo-wand-magic-sparkles' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ color: '#d19a66', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                <strong>Steps</strong>
              </div>
              <ul>
                <li>Benchmark performance: Compare small vs large models on your task set; establish accuracy floor</li>
                <li>Apply quantization: Test INT8/INT4 quantization if supported by your infrastructure</li>
                <li>Optimize parameters: Reduce max_tokens and temperature for faster, more deterministic outputs</li>
                <li>Enhance retrieval: Strengthen retrieval and reranking to compensate for smaller model</li>
                <li>Implement guardrails: Add quality monitors and fallback to larger models for complex queries</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: ''
        },
        {
          id: 57,
          title: '11. Smaller LLM - Pros and Cons',
          icon: { name: 'duo-wand-magic-sparkles' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Significantly faster response times (3-10x)</li>
                    <li>Much lower compute costs per query</li>
                    <li>Higher throughput for busy applications</li>
                    <li>Reduced infrastructure requirements</li>
                    <li>Better UX through reduced latency</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
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
          backgroundColor: '#6b1d1d',
          notes: ''
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 58,
          title: 'Key Takeaways',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '40px' }}></div>
              <div style={{ color: '#61dafb', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                <strong>Key Takeaways</strong>
              </div>
              <ul>
                <li style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ color: '#61dafb' }}>Fix perceived latency first</strong> (Streaming), then critical-path bottlenecks (Retrieval, LLM)
                </li>
                <li style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ color: '#98c379' }}>Cache aggressively</strong> where correctness isn't impacted; invalidate reliably
                </li>
                <li style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ color: '#d19a66' }}>Two-stage retrieval</strong> with light reranking often yields best quality-speed tradeoff
                </li>
                <li style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ color: '#e06c75' }}>Measure and optimize</strong> across all RAG stages: indexing, retrieval, orchestration, and generation
                </li>
              </ul>
            </div>
          ),
          backgroundColor: '#1d6b1f',
          notes: ''
        },
        {
          id: 59,
          title: 'Quick Chooser - Which Techniques to Start With?',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '40px' }}></div>
              <div style={{ color: '#98c379', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-compass" sizeName="2x" darkModeInvert={true} />
                <strong>Quick Chooser</strong>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ background: 'rgba(97, 218, 251, 0.1)', padding: '1.5rem', borderRadius: '10px', borderLeft: '5px solid #61dafb' }}>
                  <strong style={{ color: '#61dafb', fontSize: '1.8rem', display: 'block', marginBottom: '0.8rem' }}>Immediate UX improvement:</strong>
                  <div style={{ fontSize: '1.5rem' }}>→ <strong>10</strong> Streaming / Partial Generation</div>
                </div>
                <div style={{ background: 'rgba(209, 154, 102, 0.1)', padding: '1.5rem', borderRadius: '10px', borderLeft: '5px solid #d19a66' }}>
                  <strong style={{ color: '#d19a66', fontSize: '1.8rem', display: 'block', marginBottom: '0.8rem' }}>Retrieval-bound system:</strong>
                  <div style={{ fontSize: '1.5rem' }}>→ <strong>3</strong> Limit Top-K, <strong>4</strong> HNSW/IVF, <strong>2</strong> Smaller chunks</div>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '1.5rem', borderRadius: '10px', borderLeft: '5px solid #e06c75' }}>
                  <strong style={{ color: '#e06c75', fontSize: '1.8rem', display: 'block', marginBottom: '0.8rem' }}>Compute-bound system:</strong>
                  <div style={{ fontSize: '1.5rem' }}>→ <strong>1</strong> Smaller embeddings, <strong>11</strong> Smaller LLM</div>
                </div>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '1.5rem', borderRadius: '10px', borderLeft: '5px solid #98c379' }}>
                  <strong style={{ color: '#98c379', fontSize: '1.8rem', display: 'block', marginBottom: '0.8rem' }}>Cost optimization:</strong>
                  <div style={{ fontSize: '1.5rem' }}>→ <strong>5, 6</strong> Caching, <strong>8</strong> Compression</div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b1f',
          notes: ''
        },
        {
          id: 60,
          title: 'Speed vs Recall Tradeoffs',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '40px' }}></div>
              <div style={{ color: '#c678dd', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-scale-balanced" sizeName="2x" darkModeInvert={true} />
                <strong>Speed vs Recall</strong>
              </div>
              <p style={{ fontSize: '1.8rem', marginBottom: '1.5rem' }}>These techniques involve balance between speed and retrieval accuracy:</p>
              <ul>
                <li><strong>1.</strong> Smaller Embedding Models - Faster encoding, slight recall drop</li>
                <li><strong>2.</strong> Reduce Chunk Size - More precise matches, more chunks to search</li>
                <li><strong>3.</strong> Limit Top-K Retrieval - Fewer candidates, faster processing</li>
                <li><strong>4.</strong> ANN Indexes - 10-100x speedup, ~95-99% recall</li>
                <li><strong>8.</strong> Context Compression - Reduced tokens, possible info loss</li>
              </ul>
              <div style={{ marginTop: '2rem', padding: '1rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '8px', fontSize: '1.2rem' }}>
                <strong>💡 Tip:</strong> Start with ANN indexes for immediate gains with minimal quality impact
              </div>
            </div>
          ),
          backgroundColor: '#1d6b1f',
          notes: ''
        },
        {
          id: 61,
          title: 'Quality vs Cost Tradeoffs',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '40px' }}></div>
              <div style={{ color: '#e5c07b', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-coins" sizeName="2x" darkModeInvert={true} />
                <strong>Quality vs Cost</strong>
              </div>
              <p>These techniques balance answer quality against operational costs:</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '1.2rem', borderRadius: '8px' }}>
                  <strong style={{ color: '#98c379', display: 'block', marginBottom: '0.8rem' }}>Quality Enhancers</strong>
                  <ul style={{ marginLeft: '1.2rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>7.</strong> Re-Ranking (↑quality, ↑compute)</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>9.</strong> Parallelization (↑speed, ↑complexity)</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '1.2rem', borderRadius: '8px' }}>
                  <strong style={{ color: '#e06c75', display: 'block', marginBottom: '0.8rem' }}>Cost Reducers</strong>
                  <ul style={{ marginLeft: '1.2rem' }}>
                    <li style={{ marginBottom: '0.5rem' }}><strong>5, 6.</strong> Caching (↓cost, cache complexity)</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>8.</strong> Compression (↓tokens, info loss risk)</li>
                    <li style={{ marginBottom: '0.5rem' }}><strong>11.</strong> Smaller LLM (↓latency, ↓reasoning)</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', fontSize: '1.2rem' }}>
                <strong>💡 Tip:</strong> Combine caching (#5, #6) with streaming (#10) for best cost-performance balance
              </div>
            </div>
          ),
          backgroundColor: '#1d6b1f',
          notes: ''
        },
        {
          id: 62,
          title: 'Next Steps - Your RAG Optimization Roadmap',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '40px' }}></div>
              <div style={{ color: '#61dafb', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-clipboard-check" sizeName="2x" darkModeInvert={true} />
                <strong>Next Steps</strong>
              </div>
              <ol style={{ marginLeft: '2rem', fontSize: '1.2rem' }}>
                <li style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ color: '#61dafb' }}>Establish baseline metrics</strong>
                  <div style={{ fontSize: '1.2rem', marginTop: '0.5rem', marginLeft: '1rem' }}>
                    • TTFT (Time To First Token)<br />
                    • p95 latency<br />
                    • recall@k<br />
                    • cost/query
                  </div>
                </li>
                <li style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ color: '#98c379' }}>Introduce 2-3 techniques</strong> that address your bottlenecks first
                </li>
                <li style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ color: '#d19a66' }}>A/B test changes</strong> to measure impact on both speed and answer quality
                </li>
                <li style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ color: '#e06c75' }}>Monitor and iterate:</strong> RAG optimization is continuous improvement
                </li>
              </ol>
              <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'rgba(97, 218, 251, 0.15)', borderRadius: '10px', borderLeft: '6px solid #61dafb', fontSize: '1.2rem', textAlign: 'center' }}>
                <strong>Remember:</strong> Start with quick wins (Streaming, Caching) before complex optimizations
              </div>
            </div>
          ),
          backgroundColor: '#1d6b1f',
          notes: ''
        }
      ]
    }
  ]
};

