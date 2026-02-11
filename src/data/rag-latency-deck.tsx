import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
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
              <GSAPAnimated animation="slideInTop" delay={0.1}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <div style={{ color: '#61dafb' }}>
                  <strong>Goal</strong>
                </div>
              </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.4}>
              <div style={{ padding: '2rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '12px', borderLeft: '6px solid #61dafb' }}>
                <p style={{ margin: 0 }}>
                  Reduce embedding latency and memory footprint while maintaining acceptable retrieval quality.
                </p>
              </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: `### 3. Use Smaller Embedding Models — Goal
Let's start with our first technique — using **smaller embedding models**. The goal here is straightforward: reduce the time it takes to convert text into numerical vectors, while keeping your retrieval quality acceptable.

#### 🎯 What's the Goal?
When you embed a query or a document, you're running it through a neural network. Bigger models like OpenAI's text-embedding-ada-002 👉 'text embedding ada oh-oh-two' produce great embeddings, but they're slow. Smaller models can give you 2x to 10x (two x to ten x) speedups with only a minor drop in recall.

#### 💡 Think of It This Way
Imagine you have two translators. One is a world-class expert who takes five minutes per page. The other is a skilled professional who takes thirty seconds per page and gets ninety-five percent of the nuances right. For most practical purposes, the faster translator is the better choice.

This technique is particularly powerful because embedding happens on **every single query** your system processes, so even small speedups multiply quickly. Let's see when you'd want to use this...`
        },
        {
          id: 4,
          title: '1. Use Smaller Embedding Models - When to Use',
          icon: { name: 'duo-microchip' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
              <div style={{ color: '#61dafb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                <strong>When to Use</strong>
              </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.7}>
              <ul>
                <li>High query volume applications</li>
                <li>Large document corpora</li>
                <li>Frequent (re)indexing requirements</li>
                <li>Multilingual applications (if model supports it)</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: `### 4. Use Smaller Embedding Models — When to Use
So when should you reach for a smaller embedding model? There are four main scenarios where this technique really shines.

#### 📊 High Query Volume
If your application handles thousands or millions of queries per day, every millisecond saved on embedding adds up. A model that's 5x (five x) faster means you can handle 5x more queries with the same hardware.

#### 📚 Large Document Corpora
When you're indexing millions of documents, the embedding step can take hours or even days with a large model. Switching to a smaller model can cut that time dramatically — think going from a twelve-hour indexing job to just two hours.

#### 🔄 Frequent Re-indexing
If your data changes often and you need to re-embed documents regularly, faster models save both time and compute costs. This is especially important for applications like news aggregation or product catalogs that update constantly.

#### 🌍 Multilingual Applications
Some smaller models like multilingual E5-small 👉 'ee-five small' handle multiple languages efficiently without needing separate models for each language.

Now let's look at how this actually works under the hood...`
        },
        {
          id: 5,
          title: '1. Use Smaller Embedding Models - How It Works',
          icon: { name: 'duo-microchip' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
              <div style={{ color: '#98c379', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <strong>
                  How It Works
                  <MermaidPopover
                    title="Embedding Model Comparison"
                    diagram={`flowchart LR
    A["📝 Text Input"] --> B["🤖 Large Model\\n1536 dims"]
    A --> C["⚡ Small Model\\n384 dims"]
    B --> D["🐢 Slow\\n~50ms"]
    C --> E["🚀 Fast\\n~5ms"]
    style A fill:#4fc3f7,color:#000
    style D fill:#ffcdd2,color:#000
    style E fill:#81c784,color:#000`}
                  />
                </strong>
              </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
              <p style={{ marginBottom: '1.5rem' }}>Replace large embedding models with smaller, more efficient alternatives that offer comparable semantic understanding with reduced computation:</p>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
              <ul>
                <li>Use lower-parameter models (e.g., text-embedding-3-small, E5-small, bge-small)</li>
                <li>Optionally reduce embedding dimensions (e.g., PCA from 1536→512)</li>
                <li>Consider quantization techniques (FP16, INT8)</li>
                <li>Trade minimal recall loss for significant latency improvements</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: `### 5. Use Smaller Embedding Models — How It Works
Here's the mechanics of how smaller embedding models speed things up. It's actually quite intuitive once you understand what's happening under the hood.

#### ⚙️ How It Works
The core idea is to replace large embedding models with smaller, more efficient alternatives. Think of models like text-embedding-3-small 👉 'text embedding three small', E5-small, or bge-small 👉 'bee-gee-ee small'. These models have fewer parameters, which means less computation per embedding.

\`\`\`mermaid
flowchart LR
    A["📝 Text Input"] --> B["🤖 Large Model\\n1536 dims"]
    A --> C["⚡ Small Model\\n384 dims"]
    B --> D["🐢 Slow\\n~50ms"]
    C --> E["🚀 Fast\\n~5ms"]
    style A fill:#4fc3f7,color:#000
    style D fill:#ffcdd2,color:#000
    style E fill:#81c784,color:#000
\`\`\`

#### 🔢 Dimension Reduction
You can also reduce embedding dimensions using techniques like PCA 👉 'pee-see-ay'. For example, going from 1536 dimensions down to 512 dimensions reduces storage by 3x (three x) and speeds up similarity search significantly. Quantization 👉 'KWON-tih-ZAY-shun' techniques like FP16 👉 'eff-pee sixteen' or INT8 👉 'int eight' further compress the vectors.

#### ⚖️ The Trade-off
You're trading a small amount of recall quality for big latency gains. In most real-world applications, the quality drop is barely noticeable — maybe two to three percent — but the speed improvement can be dramatic. Let's walk through the implementation steps...`
        },
        {
          id: 6,
          title: '1. Use Smaller Embedding Models - Steps',
          icon: { name: 'duo-microchip' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
              <div style={{ color: '#d19a66', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                <strong>Steps</strong>
              </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
              <ul>
                <li>Benchmark baseline: Measure retrieval quality and latency with current model</li>
                <li>Trial alternatives: Evaluate smaller models on representative query set</li>
                <li>Optimize dimensions: If needed, reduce vector dimensions (e.g., 768→384) and reindex</li>
                <li>Measure performance: Track recall@k and p95 latency metrics</li>
                <li>Tune parameters: Adjust retrieval settings to compensate for any quality drop</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: `### 6. Use Smaller Embedding Models — Steps
Let's walk through the practical steps to switch to a smaller embedding model. This is a systematic process that helps you make the transition safely.

#### 📋 Step-by-Step Guide
**Step one: Benchmark your baseline.** Before changing anything, measure your current retrieval quality using metrics like recall@k 👉 'recall at k' and your p95 latency 👉 'pee ninety-five latency'. This gives you a reference point to compare against.

**Step two: Trial alternatives.** Pick two or three smaller models and evaluate them on a representative set of queries. Look at both quality metrics and speed. Models like E5-small or bge-small are great starting points.

**Step three: Optimize dimensions.** If the quality is close but you want even more speed, try reducing vector dimensions. Going from 768 to 384 dimensions can give you another 2x (two x) speedup on similarity search with minimal quality loss.

**Step four: Measure performance.** Run your full evaluation suite. Track both recall@k and latency percentiles. Make sure the quality drop is within your acceptable threshold — typically less than five percent.

**Step five: Tune parameters.** If you notice quality drops, try adjusting retrieval settings like increasing top-k slightly or adding a reranking step to compensate. Now let's look at the trade-offs...`
        },
        {
          id: 7,
          title: '1. Use Smaller Embedding Models - Pros and Cons',
          icon: { name: 'duo-microchip' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
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
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
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
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: `### 7. Use Smaller Embedding Models — Pros and Cons
Let's weigh the advantages and disadvantages of using smaller embedding models. This will help you decide if this technique is right for your use case.

#### ✅ Pros
The good stuff: You get **2x to 10x (two x to ten x) faster inference**, which is huge when you're processing millions of queries. Your **compute costs drop significantly** because smaller models need less GPU power. Your **vector indexes shrink**, which means less storage and faster search. **RAM requirements go down**, letting you handle more concurrent requests. And your overall **query throughput increases**, meaning you can serve more users with the same infrastructure.

#### ❌ Cons
The problems: There's a **potential recall drop on nuanced queries** — very subtle semantic differences might be missed by smaller models. You **may underperform on long-tail cases** where rare vocabulary or domain-specific jargon is involved. There's a **reindexing cost** when switching models — you need to re-embed all your documents, which can be expensive for large corpora. And there might be **multilingual performance gaps** if the smaller model wasn't trained on enough data in your target languages.

#### ⚖️ The Verdict
For most production use cases, the speed gains far outweigh the minor quality trade-offs. Start with a smaller model and only move to a larger one if you can measure a meaningful quality difference on your specific data. Now let's move to our second technique — reducing chunk size...`
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
              <GSAPAnimated animation="scaleIn" delay={0.1}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <div style={{ color: '#61dafb' }}>
                  <strong>Goal</strong>
                </div>
              </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.4}>
              <div style={{ padding: '2rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '12px', borderLeft: '6px solid #61dafb' }}>
                <p style={{ margin: 0 }}>
                  Cut retrieval time and LLM prompt tokens while maintaining or improving retrieval quality.
                </p>
              </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#6b1d4d',
          notes: `### 8. Reduce Chunk Size — Goal
On to our second technique — reducing chunk size. This one might seem simple, but it's surprisingly impactful. The goal is to make your chunks smaller so that embedding, retrieval, and LLM processing all get faster.

#### 🎯 What's the Goal?
When you split documents into chunks for your RAG pipeline, the size of those chunks affects everything downstream. Smaller chunks mean faster embedding, more precise retrieval, and less token usage when generating answers.

#### 💡 The Analogy
Think of it like organizing a library. If each "book" on the shelf is actually a fifty-page chapter, it's hard to find the exact paragraph you need. But if each "book" is just a single page or paragraph, you can quickly grab exactly the information you're looking for — no fluff, no wasted time.

The key insight is that most of the content in a large chunk is irrelevant to any given query. By making chunks smaller, you reduce noise and speed up the entire pipeline. Let's see when this is most effective...`
        },
        {
          id: 9,
          title: '2. Reduce Chunk Size - When to Use',
          icon: { name: 'duo-scissors' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInRight" delay={0.1}>
              <div style={{ color: '#61dafb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <strong>When to Use</strong>
              </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.7}>
              <ul>
                <li>Long documents or technical content</li>
                <li>Limited LLM context windows</li>
                <li>High per-token LLM costs</li>
                <li>Content with distinct sections or topics</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#6b1d4d',
          notes: `### 9. Reduce Chunk Size — When to Use
When should you consider reducing your chunk size? Here are the key scenarios where smaller chunks make the biggest difference.

#### 📝 Dense, Factual Content
If your documents contain lots of specific facts, definitions, or data points packed closely together, smaller chunks help isolate each fact. Think technical documentation, legal contracts, or medical records.

#### 🎯 Precision-Critical Applications
When your users need exact answers rather than general summaries, smaller chunks reduce the noise. For example, a customer support bot answering "what's the return policy for electronics?" doesn't need the entire policy document — just the relevant paragraph.

#### 💰 Token Cost Optimization
Since LLMs charge per token, sending smaller, more relevant chunks means lower costs per query. If you're processing thousands of queries daily, this adds up to significant savings.

#### ⚡ Low-Latency Requirements
Every token sent to the LLM adds to generation time. Smaller chunks mean fewer tokens, which means faster responses. For real-time applications, this can be the difference between an acceptable and an unacceptable user experience.

Let's see how chunk size reduction actually works in practice...`
        },
        {
          id: 10,
          title: '2. Reduce Chunk Size - How It Works',
          icon: { name: 'duo-scissors' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
              <div style={{ color: '#98c379', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <strong>
                  How It Works
                  <MermaidPopover
                    title="Chunk Size Impact"
                    diagram={`flowchart TB
    A["📄 Document"] --> B["✂️ Large Chunks\\n512 tokens"]
    A --> C["✂️ Small Chunks\\n128 tokens"]
    B --> D["🐢 More tokens\\nto LLM"]
    C --> E["🚀 Fewer tokens\\nto LLM"]
    style A fill:#4fc3f7,color:#000
    style D fill:#ffcdd2,color:#000
    style E fill:#81c784,color:#000`}
                  />
                </strong>
              </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
              <p style={{ marginBottom: '1.5rem' }}>Split documents into smaller, overlapping chunks so retrieval finds more specific, relevant context and the LLM processes fewer tokens:</p>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
              <ul>
                <li>Reduces the total context window size passed to the LLM</li>
                <li>Ensures each chunk focuses on a coherent topic or concept</li>
                <li>Creates overlap between chunks to maintain contextual continuity</li>
                <li>Enables more precise matching between query and relevant content</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#6b1d4d',
          notes: `### 10. Reduce Chunk Size — How It Works
Let's understand the mechanics of chunk size reduction and why it speeds things up at every stage of the pipeline.

#### ⚙️ The Mechanism
\`\`\`mermaid
flowchart TB
    A["📄 Document"] --> B["✂️ Large Chunks\\n512 tokens"]
    A --> C["✂️ Small Chunks\\n128 tokens"]
    B --> D["🐢 More tokens\\nto LLM"]
    C --> E["🚀 Fewer tokens\\nto LLM"]
    style A fill:#4fc3f7,color:#000
    style D fill:#ffcdd2,color:#000
    style E fill:#81c784,color:#000
\`\`\`
When you split a document into smaller chunks — say 128 tokens instead of 512 — three things happen. First, each chunk embeds faster because there are fewer tokens to process. Second, retrieval becomes more precise because each chunk contains a more focused topic. Third, the LLM processes fewer irrelevant tokens, speeding up generation.

#### 📏 Finding the Sweet Spot
The trick is finding the right balance. Go too small — like 50 tokens — and you lose context. Go too large — like 1000 tokens — and you include too much noise. Most teams find the sweet spot between 100 and 256 tokens, depending on their content type.

#### 🔗 Overlap Strategy
Use chunk overlap — typically 10 to 20 percent — to ensure you don't cut important sentences in half. This small redundancy prevents information loss at chunk boundaries. Now let's look at the implementation steps...`
        },
        {
          id: 11,
          title: '2. Reduce Chunk Size - Steps',
          icon: { name: 'duo-scissors' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="bounceIn" delay={0.1}>
              <div style={{ color: '#d19a66', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                <strong>Steps</strong>
              </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
              <ul>
                <li>Set initial chunk size: Start with 200–400 tokens per chunk</li>
                <li>Configure overlap: Use 10–20% overlap between consecutive chunks</li>
                <li>Preserve metadata: Include titles/headers/document IDs for grounding</li>
                <li>Evaluate performance: Test recall and answer quality with sample queries</li>
                <li>Iterate and tune: Adjust chunk size and overlap based on results</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#6b1d4d',
          notes: `### 11. Reduce Chunk Size — Steps
Here's a practical guide to reducing your chunk size effectively. Follow these steps to find your optimal configuration.

#### 📋 Implementation Steps
**Step one: Analyze your current chunks.** Look at your existing chunk sizes and measure how much of each chunk is actually relevant to typical queries. If most of the content is noise, smaller chunks will help.

**Step two: Experiment with sizes.** Try chunking at 128, 200, and 256 tokens. For each size, run your evaluation queries and measure both retrieval quality and latency.

**Step three: Add semantic boundaries.** Don't just split at token counts — use paragraph breaks, section headers, or sentence boundaries. This preserves meaning within each chunk. Libraries like LangChain 👉 'lang-chain' have built-in splitters for this.

**Step four: Configure overlap.** Set chunk overlap to about 10-20% of your chunk size. For a 200-token chunk, that's 20-40 tokens of overlap. This ensures continuity between adjacent chunks.

**Step five: Reindex and evaluate.** Re-embed all your documents with the new chunk size and run your full evaluation suite. Compare recall@k, latency, and token costs against your baseline.

Time to see the trade-offs of this approach...`
        },
        {
          id: 12,
          title: '2. Reduce Chunk Size - Pros and Cons',
          icon: { name: 'duo-scissors' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
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
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
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
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d4d',
          notes: `### 12. Reduce Chunk Size — Pros and Cons
Let's evaluate the trade-offs of reducing chunk size. Understanding these helps you make informed decisions for your specific use case.

#### ✅ Pros
The good stuff: You get **more precise retrieval** because each chunk focuses on a single topic, reducing noise. **Lower token costs** since you're sending fewer irrelevant tokens to the LLM. **Faster generation** because the LLM processes less input. **Better relevance scores** in your vector search because the embeddings represent more focused content. And **easier debugging** — when something goes wrong, it's easier to trace issues in smaller chunks.

#### ❌ Cons
The problems: You **may lose context** if chunks are too small, making it harder for the LLM to understand the full picture. You get **more chunks to index**, which increases storage requirements and indexing time. There's a risk of **splitting related information** across chunks, which can lead to incomplete answers. And you need to **reindex everything** when you change chunk sizes, which can be time-consuming for large document collections.

#### 💡 Pro Tip
Start with 200 tokens and adjust from there based on your content type. Technical documentation often works better with smaller chunks around 128 tokens, while narrative content may need larger chunks around 300 tokens. Up next, let's talk about limiting top-K retrieval...`
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
              <GSAPAnimated animation="rotateIn" delay={0.1}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <div style={{ color: '#61dafb' }}>
                  <strong>Goal</strong>
                </div>
              </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.4}>
              <div style={{ padding: '2rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '12px', borderLeft: '6px solid #61dafb' }}>
                <p style={{ margin: 0 }}>
                  Reduce downstream processing and prompt size by retrieving only the most relevant content.
                </p>
              </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#571d6b',
          notes: `### 13. Limit Top-K Retrieval — Goal
Now let's look at technique number three — limiting Top-K retrieval. This is one of the simplest yet most effective optimizations you can make to your RAG pipeline.

#### 🎯 What's the Goal?
Top-K 👉 'top kay' refers to how many results your vector search returns. If you're fetching the top 20 most similar chunks when you only really need the top 3, you're wasting time on retrieval, reranking, and sending unnecessary tokens to the LLM.

#### 💡 The Analogy
Imagine you're searching Google for a recipe. You don't read all 10 million results — you look at the first 3 or 4 and pick the best one. The same principle applies here. Most of the relevant information is in the top few results, and the rest is just noise that slows everything down.

The beauty of this technique is that it costs nothing to implement and often improves both speed AND quality. Let's see when to apply it...`
        },
        {
          id: 14,
          title: '3. Limit Top-K Retrieval - When to Use',
          icon: { name: 'duo-filter' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInRight" delay={0.1}>
              <div style={{ color: '#61dafb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <strong>When to Use</strong>
              </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.7}>
              <ul>
                <li>Latency-sensitive applications (chat/voice)</li>
                <li>When using re-rankers in the pipeline</li>
                <li>Systems with strong embedding models</li>
                <li>When memory or token budget is constrained</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#571d6b',
          notes: `### 14. Limit Top-K Retrieval — When to Use
When should you limit your Top-K? Here are the scenarios where cutting down retrieval results makes the biggest impact.

#### ⚡ High-Latency Pipelines
If your pipeline is slow and you're currently fetching 10 or more results, try cutting to 3-5. Each additional result adds latency at every downstream step — reranking, token processing, and generation.

#### 🎯 Well-Indexed Collections
When your embeddings are high quality and your data is well-organized, the top 3-5 results are usually sufficient. The tenth-best result rarely adds meaningful information.

#### 💰 Cost-Sensitive Applications
Every token sent to the LLM costs money. If you're fetching 10 chunks at 200 tokens each, that's 2,000 tokens of context. Cutting to 3 chunks saves you 1,400 tokens per query — that's a 70% reduction in context token costs.

#### 🔄 Simple Question-Answering
For straightforward factual questions like "What is the return policy?" or "When was the company founded?", the answer is almost always in the top 1-2 results. Fetching more is wasteful.

Let's see the mechanics of how this optimization works...`
        },
        {
          id: 15,
          title: '3. Limit Top-K Retrieval - How It Works',
          icon: { name: 'duo-filter' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
              <div style={{ color: '#98c379', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <strong>
                  How It Works
                  <MermaidPopover
                    title="Top-K Retrieval Flow"
                    diagram={`flowchart LR
    A["🔍 Query"] --> B["📊 Vector Search"]
    B --> C["Top-20 Results"]
    B --> D["Top-3 Results"]
    C --> E["🐢 Slow Processing"]
    D --> F["🚀 Fast Processing"]
    style A fill:#4fc3f7,color:#000
    style E fill:#ffcdd2,color:#000
    style F fill:#81c784,color:#000`}
                  />
                </strong>
              </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
              <p style={{ marginBottom: '1.5rem' }}>Retrieve only the minimal number of documents (K) that maintains answer quality while reducing processing overhead:</p>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
              <ul>
                <li>Set a minimal K value that preserves acceptable result quality</li>
                <li>Apply relevance score thresholds to filter low-quality matches (e.g., cosine_similarity ≥ 0.75)</li>
                <li>Implement token budgets to cap total context size</li>
                <li>Dynamically adjust K based on score distribution or query complexity</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#571d6b',
          notes: `### 15. Limit Top-K Retrieval — How It Works
Let's understand why reducing Top-K has such a dramatic effect on latency. It's not just about the retrieval step — it cascades through the entire pipeline.

#### ⚙️ The Cascade Effect
\`\`\`mermaid
flowchart LR
    A["🔍 Query"] --> B["📊 Vector Search"]
    B --> C["Top-20 Results"]
    B --> D["Top-3 Results"]
    C --> E["🐢 Slow Processing"]
    D --> F["🚀 Fast Processing"]
    style A fill:#4fc3f7,color:#000
    style E fill:#ffcdd2,color:#000
    style F fill:#81c784,color:#000
\`\`\`
When you fetch Top-20 instead of Top-3, every downstream step gets slower. The reranker has to score 20 items instead of 3. The context window fills up with 20 chunks instead of 3. The LLM has to process all that extra text. It's a multiplier effect.

#### 📉 Diminishing Returns
Research shows that retrieval quality follows a curve of diminishing returns. The first result captures maybe 60% of the relevant information. The second adds another 20%. The third adds 10%. By the time you get to result 10, you're adding less than 1% of useful information but significantly increasing processing time.

#### 🎛️ Dynamic Top-K
Advanced systems use **dynamic Top-K** — adjusting the number of results based on query complexity. Simple factual queries might use Top-1, while complex analytical questions might use Top-5. Here are the steps to implement this...`
        },
        {
          id: 16,
          title: '3. Limit Top-K Retrieval - Steps',
          icon: { name: 'duo-filter' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
              <div style={{ color: '#d19a66', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                <strong>Steps</strong>
              </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
              <ul>
                <li>Start conservative: Begin with K=5-8 for most applications</li>
                <li>Measure quality: Track answer accuracy and latency metrics</li>
                <li>Add score filtering: Implement cutoff threshold (e.g., cosine_sim ≥ τ) to filter irrelevant results</li>
                <li>Set token budget: Limit total context tokens sent to LLM</li>
                <li>Implement adaptive K: Dynamically adjust based on score decay between top results</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#571d6b',
          notes: `### 16. Limit Top-K Retrieval — Steps
Here's how to systematically optimize your Top-K setting. It's a simple process, but doing it methodically ensures you don't sacrifice quality.

#### 📋 Implementation Steps
**Step one: Profile current usage.** Check what Top-K value you're currently using. Many frameworks default to 10 or 20, which is often excessive. Log how many results actually get used in your final answers.

**Step two: Analyze result relevance.** For a sample of queries, look at the relevance scores of each returned chunk. If results 5 through 20 consistently have low similarity scores, they're adding noise, not value.

**Step three: A/B test reduced values.** Try Top-3, Top-5, and your current value side by side. Measure answer quality using your evaluation metrics and compare latency at each setting.

**Step four: Implement with a safety margin.** Set your Top-K to the lowest value that maintains acceptable quality, plus one extra as a buffer. So if Top-3 works well, use Top-4 as your production setting.

**Step five: Monitor in production.** Track answer quality metrics continuously. If you notice degradation on certain query types, consider implementing dynamic Top-K based on query classification.

Now let's look at the trade-offs of this approach...`
        },
        {
          id: 17,
          title: '3. Limit Top-K Retrieval - Pros and Cons',
          icon: { name: 'duo-filter' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
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
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
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
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#571d6b',
          notes: `### 17. Limit Top-K Retrieval — Pros and Cons
Let's weigh the benefits and risks of limiting Top-K retrieval. Spoiler alert: this technique has an excellent benefit-to-risk ratio.

#### ✅ Pros
The good stuff: **Zero implementation cost** — it's literally changing a single parameter. **Immediate latency reduction** across retrieval, reranking, and generation steps. **Lower token costs** because you're sending less context to the LLM. **Often improves quality** because you're removing noisy, low-relevance results that can confuse the LLM. And it **reduces the chance of contradictory information** in your context window.

#### ❌ Cons
The problems: **Risk of missing relevant information** if important data happens to be in lower-ranked results. **Multi-topic queries suffer** — questions that span multiple topics might need more results to cover all aspects. **Inconsistent vector quality** can mean relevant results sometimes appear lower in the rankings. And **some query types need more context** — comparison questions or summarization tasks benefit from seeing more documents.

#### 🎯 Bottom Line
This is the single easiest optimization you can make. Start by cutting your current Top-K in half and measure the impact. Most teams find they can go from Top-10 to Top-3 with no quality loss and a significant speed improvement. Moving on to technique four — approximate nearest neighbor indexes...`
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
              <GSAPAnimated animation="flipCard" delay={0.1}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <div style={{ color: '#61dafb' }}>
                  <strong>Goal</strong>
                </div>
              </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.5}>
              <div style={{ padding: '2rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '12px', borderLeft: '6px solid #61dafb' }}>
                <p style={{ margin: 0 }}>
                  Accelerate vector search at scale without sacrificing too much accuracy.
                </p>
              </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#281d6b',
          notes: `### 18. Use Approximate Nearest Neighbor Indexes — Goal
Technique number four takes us deeper into the retrieval layer — using **Approximate Nearest Neighbor** indexes, or ANN 👉 'ann' indexes for short. This is where things get really interesting from a computer science perspective.

#### 🎯 What's the Goal?
When you search a vector database, the naive approach is to compare your query vector against every single stored vector. This is called **exact nearest neighbor** search, and it's incredibly slow for large datasets. ANN indexes trade a tiny bit of accuracy for massive speed improvements — we're talking 100x to 1000x (one hundred x to one thousand x) faster searches.

#### 💡 Think of It This Way
Imagine you're looking for a book in a library. The exact search approach would be reading every single book to find the most similar one. An ANN index is like having a smart catalog system that organizes books by topic, author, and style — so you can jump directly to the right shelf and compare just a few books instead of millions.

Two popular ANN algorithms are HNSW 👉 'H-N-S-W' and IVF 👉 'eye-vee-eff'. Let's explore when to use them...`
        },
        {
          id: 19,
          title: '4. Use ANN Indexes - When to Use',
          icon: { name: 'duo-network-wired' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
              <div style={{ color: '#61dafb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <strong>When to Use</strong>
              </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.7}>
              <ul>
                <li>Collections with 1M+ vectors</li>
                <li>Applications with strict p95 latency targets</li>
                <li>CPU-bound search environments</li>
                <li>Large-scale production RAG systems</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#281d6b',
          notes: `### 19. Use ANN Indexes — When to Use
When should you invest in setting up ANN indexes? Here are the scenarios where they make the biggest difference.

#### 📊 Large Vector Collections
If you have more than 100,000 vectors, exact search starts becoming a bottleneck. At a million vectors, it's practically unusable for real-time applications. ANN indexes make sub-millisecond search possible even at billions of vectors.

#### ⚡ Low-Latency Requirements
When your SLA 👉 'ess-ell-ay' requires responses under 100 milliseconds, you simply can't afford to do brute-force vector comparison. ANN indexes bring search time down from seconds to single-digit milliseconds.

#### 🔄 High Query Throughput
If you're handling hundreds or thousands of queries per second, ANN indexes reduce the CPU load per query, letting you serve more users with the same hardware.

#### 💰 Cost Optimization at Scale
At large scale, the compute savings from ANN indexes can be substantial. You might need ten servers for exact search but only one for ANN search with the same performance.

Most production vector databases like Pinecone 👉 'pine-cone', Weaviate 👉 'WEE-vee-ayt', and Milvus 👉 'MIL-vus' support ANN indexes out of the box. Let's see how they work...`
        },
        {
          id: 20,
          title: '4. Use ANN Indexes - How It Works',
          icon: { name: 'duo-network-wired' },
          content: (
            <div style={{ fontSize: '1.8rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInRight" delay={0.1}>
              <div style={{ color: '#98c379', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <strong>
                  How It Works
                  <MermaidPopover
                    title="ANN Index Search"
                    diagram={`flowchart TB
    A["🔍 Query Vector"] --> B["📂 HNSW Graph"]
    A --> C["📂 IVF Clusters"]
    B --> D["Navigate layers\\n→ nearest neighbors"]
    C --> E["Search nearest\\nclusters only"]
    D --> F["✅ ~95-99% accurate\\n⚡ 100x faster"]
    E --> F
    style A fill:#4fc3f7,color:#000
    style F fill:#81c784,color:#000`}
                  />
                </strong>
              </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
              <p style={{ marginBottom: '1rem' }}>Two popular approaches for approximate nearest neighbor search:</p>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
              <ul>
                <li><strong>HNSW (Hierarchical Navigable Small World):</strong> Uses multi-layer graph structure with "shortcuts" at higher layers for efficient navigation. Parameters to tune include M (max connections), efSearch (search quality), and efConstruction (index quality).</li>
                <li><strong>IVF (Inverted File):</strong> Partitions vector space into nlist clusters, searches only nprobe most relevant clusters. Can be combined with PQ (Product Quantization) to reduce memory.</li>
              </ul>
              </GSAPStaggerList>
              <p>Both methods trade exact results for approximate ones that are "good enough" for most cases, drastically improving search speed.</p>
            </div>
          ),
          backgroundColor: '#281d6b',
          notes: `### 20. Use ANN Indexes — How It Works
Let's understand how ANN indexes achieve such dramatic speedups. There are two main approaches you'll encounter in production.

#### ⚙️ HNSW — Hierarchical Navigable Small World
\`\`\`mermaid
flowchart TB
    A["🔍 Query Vector"] --> B["📂 HNSW Graph"]
    A --> C["📂 IVF Clusters"]
    B --> D["Navigate layers\\n→ nearest neighbors"]
    C --> E["Search nearest\\nclusters only"]
    D --> F["✅ ~95-99% accurate\\n⚡ 100x faster"]
    E --> F
    style A fill:#4fc3f7,color:#000
    style F fill:#81c784,color:#000
\`\`\`
HNSW 👉 'H-N-S-W' builds a multi-layer graph where each layer connects vectors to their approximate neighbors. When searching, you start at the top layer with few connections and "zoom in" through lower layers with more connections. It's like using Google Maps — you start at the country level and zoom down to the street level. The result is typically 95-99% accurate with 100x faster search.

#### 📊 IVF — Inverted File Index
IVF 👉 'eye-vee-eff' divides your vectors into clusters using k-means 👉 'kay means'. When searching, instead of scanning all vectors, you only search the nearest clusters. It's like dividing a library into sections — you only search the relevant section instead of the whole building.

#### ⚖️ The Accuracy Trade-off
You might miss the absolute best match occasionally, but you'll almost always find results that are 95-99% as good, in a fraction of the time. For most RAG applications, this is a very worthwhile trade-off. Here are the implementation steps...`
        },
        {
          id: 21,
          title: '4. Use ANN Indexes - Steps',
          icon: { name: 'duo-network-wired' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="bounceIn" delay={0.1}>
              <div style={{ color: '#d19a66', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                <strong>Steps</strong>
              </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
              <ul>
                <li>For HNSW: Start with M=16-32, efSearch=64-128, efConstruction=200-400</li>
                <li>For IVF: Choose nlist ≈ sqrt(N) where N is collection size, set nprobe to balance recall vs speed</li>
                <li>Memory optimization: Consider IVF+PQ for lower RAM usage if memory is constrained</li>
                <li>Test with filters: Evaluate performance with attribute filters as they can impact latency</li>
                <li>Benchmark: Compare accuracy and latency across parameter settings to find optimal configuration</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#281d6b',
          notes: `### 21. Use ANN Indexes — Steps
Here's how to set up ANN indexes in your vector database. The good news is most modern vector databases handle the heavy lifting for you.

#### 📋 Implementation Steps
**Step one: Choose your algorithm.** HNSW is the most popular choice for RAG applications because it offers the best balance of speed, accuracy, and memory usage. IVF is better when you have very large datasets and memory constraints.

**Step two: Configure parameters.** For HNSW, the key parameters are **M** (number of connections per layer, typically 16-64) and **ef_construction** 👉 'ee-eff construction' (build-time quality, typically 100-200). Higher values mean better accuracy but slower index building and more memory.

**Step three: Build the index.** Most vector databases like Pinecone, Qdrant 👉 'kew-drant', or Weaviate build HNSW indexes automatically. For custom setups, libraries like FAISS 👉 'face' from Meta make it straightforward.

**Step four: Tune search parameters.** The **ef_search** parameter controls the accuracy-speed trade-off at query time. Start with ef_search equal to Top-K times 2 and adjust based on your quality requirements.

**Step five: Benchmark.** Compare exact search versus ANN search on your data. Measure recall@k to ensure the accuracy loss is acceptable, and celebrate the latency improvement.

Let's weigh the pros and cons...`
        },
        {
          id: 22,
          title: '4. Use ANN Indexes - Pros and Cons',
          icon: { name: 'duo-network-wired' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
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
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
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
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#281d6b',
          notes: `### 22. Use ANN Indexes — Pros and Cons
Let's evaluate when ANN indexes are worth the setup effort and when you might want to stick with exact search.

#### ✅ Pros
The good stuff: **Massive speedups** — we're talking 100x to 1000x faster search compared to brute force. **Scales to billions of vectors** without proportional increase in search time. **Supported natively** by most production vector databases, so there's minimal implementation effort. **Low accuracy loss** — typically 95-99% recall compared to exact search. And **reduced compute costs** because each query uses far less CPU time.

#### ❌ Cons
The problems: **Additional memory overhead** — HNSW indexes can use 1.5-2x more memory than the raw vectors. **Index build time** can be significant for large datasets — hours for hundreds of millions of vectors. **Parameter tuning required** — you need to find the right balance of M, ef_construction, and ef_search for your data. **Not ideal for small datasets** — if you have fewer than 10,000 vectors, exact search is already fast enough. And **index updates can be expensive** — adding or removing vectors may require partial or full index rebuilds.

#### 🎯 The Verdict
If you have more than 100,000 vectors and need low-latency search, ANN indexes are a no-brainer. The setup effort is minimal with modern vector databases, and the performance gains are enormous. Next up, we'll explore caching strategies, starting with caching query embeddings...`
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
              <GSAPAnimated animation="slideInTop" delay={0.1}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <div style={{ color: '#61dafb' }}>
                  <strong>Goal</strong>
                </div>
              </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.4}>
              <div style={{ padding: '2rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '12px', borderLeft: '6px solid #61dafb' }}>
                <p style={{ margin: 0 }}>
                  Avoid recomputing embeddings for repeated queries, significantly reducing embedding model latency and API costs.
                </p>
              </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d416b',
          notes: `### 23. Cache Query Embeddings — Goal
Welcome to the caching section! Technique five is about caching query embeddings. This is one of the most underutilized optimizations in RAG pipelines, and it can eliminate a significant portion of your latency.

#### 🎯 What's the Goal?
Every time a user asks a question, your system converts that query into a vector using an embedding model. This embedding step typically takes 10-50 milliseconds. If the same or similar question has been asked before, why compute the embedding again? That's the idea behind caching query embeddings.

#### 💡 Think of It This Way
Imagine a receptionist at a hotel. The first time someone asks "Where's the pool?", the receptionist looks it up on the map. But after the hundredth guest asks the same question, the receptionist just answers from memory — no need to check the map again. That's exactly what embedding caching does.

#### 📊 The Impact
In many production systems, a large percentage of queries are repeats or near-duplicates. If 30% of your queries hit the cache, you eliminate the embedding step for almost a third of all requests. Let's see when this technique is most valuable...`
        },
        {
          id: 24,
          title: '5. Cache Query Embeddings - When to Use',
          icon: { name: 'duo-database' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
              <div style={{ color: '#61dafb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                <strong>When to Use</strong>
              </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.7}>
              <ul>
                <li>FAQs and support bots with repetitive queries</li>
                <li>Dashboard or analytics applications</li>
                <li>Systems with bursty traffic patterns</li>
                <li>Applications with predictable query patterns</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1d416b',
          notes: `### 24. Cache Query Embeddings — When to Use
When should you implement query embedding caching? Here are the key indicators that this technique will give you big wins.

#### 🔄 Repetitive Query Patterns
If your users tend to ask similar questions — like in a customer support bot or FAQ system — caching shines. Even if the exact wording differs slightly, you can use fuzzy matching to find cached embeddings for similar queries.

#### ⚡ Latency-Sensitive Applications
When every millisecond counts, eliminating the 10-50ms embedding step makes a noticeable difference. For real-time chat applications or voice assistants, this can be the difference between a natural and an awkward conversation pace.

#### 💰 Cost Reduction Priority
If you're using a paid embedding API like OpenAI's, each embedding call costs money. Caching eliminates API calls for repeated queries, directly reducing your operational costs.

#### 📊 High Query Volume
The more queries you process, the more likely you are to see repeats. At scale — say 10,000+ queries per day — the cache hit rate increases and the savings compound.

> 🎤 Ask the audience: "What percentage of queries in your systems do you think are duplicates?"

Let's look at how embedding caching actually works...`
        },
        {
          id: 25,
          title: '5. Cache Query Embeddings - How It Works',
          icon: { name: 'duo-database' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInRight" delay={0.1}>
              <div style={{ color: '#98c379', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <strong>
                  How It Works
                  <MermaidPopover
                    title="Embedding Cache Flow"
                    diagram={`flowchart TB
    A["📝 User Query"] --> B{"🔍 Cache\\nLookup"}
    B -->|Hit| C["⚡ Return\\nCached Vector"]
    B -->|Miss| D["🤖 Compute\\nEmbedding"]
    D --> E["💾 Store in Cache"]
    E --> C
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffd700,color:#000`}
                  />
                </strong>
              </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
              <p style={{ marginBottom: '1.5rem' }}>Store and reuse embeddings for previously seen queries to bypass the embedding model:</p>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
              <ul>
                <li>Implement LRU+TTL cache keyed by normalized query text</li>
                <li>Store vector embeddings for frequent queries in memory or distributed cache</li>
                <li>Optionally implement semantic cache to match similar but non-identical queries</li>
                <li>For semantic caching, use nearest-neighbor lookup of query embeddings with a similarity threshold</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1d416b',
          notes: `### 25. Cache Query Embeddings — How It Works
Let's dive into the mechanics of embedding caching. It's a classic cache pattern adapted for vector operations.

#### ⚙️ The Cache Flow
\`\`\`mermaid
flowchart TB
    A["📝 User Query"] --> B{"🔍 Cache\\nLookup"}
    B -->|Hit| C["⚡ Return\\nCached Vector"]
    B -->|Miss| D["🤖 Compute\\nEmbedding"]
    D --> E["💾 Store in Cache"]
    E --> C
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffd700,color:#000
\`\`\`
The flow is straightforward. When a query comes in, you first check if you've seen it before. If it's a cache hit, you return the stored embedding vector immediately — no API call needed. If it's a cache miss, you compute the embedding normally, store it in the cache, and return it.

#### 🔑 Cache Key Strategies
You can cache by exact string match — fast and simple. Or you can use **normalized queries** — lowercasing, removing punctuation, and trimming whitespace — to increase hit rates. Advanced systems use **semantic hashing** to match queries that mean the same thing but are worded differently.

#### 🗄️ Storage Options
Use Redis 👉 'RED-iss' or Memcached 👉 'MEM-cached' for in-memory caching with TTL 👉 'tee-tee-ell' (time-to-live) expiration. For persistent caching, a simple key-value store works great. The cache size is usually small since embedding vectors are only a few kilobytes each.

Here's how to implement it step by step...`
        },
        {
          id: 26,
          title: '5. Cache Query Embeddings - Steps',
          icon: { name: 'duo-database' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
              <div style={{ color: '#d19a66', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                <strong>Steps</strong>
              </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
              <ul>
                <li>Normalize queries: Lowercase, trim whitespace, redact PII, standardize format</li>
                <li>Configure cache parameters: Set TTL (1-24h) and size based on traffic patterns</li>
                <li>Implement hit/miss tracking: Monitor cache performance metrics</li>
                <li>For semantic caching: Reuse embedding if cosine similarity ≥ threshold (e.g., δ ≥ 0.92)</li>
                <li>Add versioning mechanism: Invalidate cache when embedding model changes</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1d416b',
          notes: `### 26. Cache Query Embeddings — Steps
Let's walk through the implementation process for query embedding caching. This is one of the easiest optimizations to set up.

#### 📋 Implementation Steps
**Step one: Set up a cache store.** Redis is the most popular choice for this. It gives you in-memory speed with optional persistence. Set a TTL of 24-48 hours for most use cases — long enough to catch repeat queries but short enough to stay fresh.

**Step two: Define your cache key.** Start simple with the exact query text as the key. Normalize it by lowercasing and stripping extra whitespace. This alone catches most duplicate queries.

**Step three: Implement the cache-aside pattern.** Before calling your embedding API, check the cache. On a miss, compute the embedding, store it in the cache, and return it. On a hit, return the cached vector directly.

**Step four: Add monitoring.** Track your cache hit rate. If it's below 10%, your queries are too diverse for basic caching and you might want semantic matching. If it's above 30%, you're getting excellent savings.

**Step five: Tune cache size and TTL.** Monitor memory usage and adjust your cache size. A typical setup with 100,000 cached embeddings at 3KB 👉 'three kilobytes' each uses only about 300MB of Redis memory. That's very affordable for the speed gains.

Let's evaluate the trade-offs...`
        },
        {
          id: 27,
          title: '5. Cache Query Embeddings - Pros and Cons',
          icon: { name: 'duo-database' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
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
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
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
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1d416b',
          notes: `### 27. Cache Query Embeddings — Pros and Cons
Let's look at the advantages and disadvantages of caching query embeddings.

#### ✅ Pros
The good stuff: **Eliminates embedding latency** for repeated queries — going from 50ms to sub-millisecond. **Reduces API costs** significantly if you're using paid embedding services. **Simple to implement** — it's just a key-value cache lookup before your embedding call. **No quality impact** — cached embeddings are identical to freshly computed ones. And **scales beautifully** — the more queries you process, the higher your hit rate tends to be.

#### ❌ Cons
The problems: **Additional infrastructure** — you need to run and maintain a Redis or similar cache service. **Memory usage** — storing thousands of embedding vectors requires dedicated RAM. **Cache invalidation** complexity if you change embedding models — all cached vectors become invalid. **Cold start problem** — a fresh cache has zero hits, so you don't see benefits until it warms up. And **limited benefit for diverse queries** — if every query is unique, your hit rate will be close to zero.

#### 💡 Pro Tip
Start with a simple exact-match cache and measure your hit rate. If it's above 15%, the investment is already paying off. You can always add semantic matching later to increase hits further. Now let's move to technique six — caching retrieval results...`
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
              <GSAPAnimated animation="bounceIn" delay={0.1}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <div style={{ color: '#61dafb' }}>
                  <strong>Goal</strong>
                </div>
              </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.5}>
              <div style={{ padding: '2rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '12px', borderLeft: '6px solid #61dafb' }}>
                <p style={{ margin: 0 }}>
                  Skip vector DB operations for repeated queries, eliminating expensive similarity search operations.
                </p>
              </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d6b63',
          notes: `### 28. Cache Retrieval Results — Goal
Technique six takes caching one step further — instead of just caching the query embedding, we cache the **entire retrieval result**. This can eliminate both the embedding AND the vector search step in one shot.

#### 🎯 What's the Goal?
The goal is to skip the vector database search entirely for queries you've seen before. If someone asks "What's the return policy?" and you already know the top-3 chunks that answer this question, why search the database again? Just return the cached results directly.

#### 💡 Think of It This Way
Going back to our hotel receptionist analogy — caching embeddings is like memorizing the room number. But caching retrieval results is like memorizing the complete answer: "The pool is on the third floor, open from 6 AM to 10 PM, towels are provided." No lookup needed at all.

#### ⚡ The Latency Impact
Vector search typically takes 5-50 milliseconds depending on your index size and configuration. By caching the full retrieval results, you eliminate this entire step, often cutting 30-60% of your pre-LLM latency. Let's see when this is most effective...`
        },
        {
          id: 29,
          title: '6. Cache Retrieval Results - When to Use',
          icon: { name: 'duo-floppy-disk' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInRight" delay={0.1}>
              <div style={{ color: '#61dafb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                <strong>When to Use</strong>
              </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.7}>
              <ul>
                <li>Mostly static document corpora</li>
                <li>Applications with frequent repeat questions (FAQs)</li>
                <li>Voice IVR/customer support systems</li>
                <li>High-traffic applications where DB is a bottleneck</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1d6b63',
          notes: `### 29. Cache Retrieval Results — When to Use
When should you cache retrieval results? This technique is most powerful in specific scenarios.

#### 🔄 Stable Document Collections
If your underlying documents don't change frequently, cached retrieval results stay valid for a long time. Think reference documentation, policy documents, or knowledge bases that update weekly or monthly rather than hourly.

#### 📊 High Query Repetition
Customer support bots, FAQ systems, and internal knowledge assistants often see the same questions repeatedly. If 40% of queries are repeats, caching retrieval results eliminates the search step for nearly half your traffic.

#### ⚡ Strict Latency Budgets
When your end-to-end latency budget is under 500 milliseconds and the vector search alone takes 50ms, saving that 50ms by caching can be critical. Every millisecond counts in real-time applications.

#### 💰 Expensive Vector Search
Some vector databases charge per query or have limited throughput. Caching reduces the load on your vector database, lowering costs and freeing up capacity for cache-miss queries.

Let's understand the mechanics of retrieval result caching...`
        },
        {
          id: 30,
          title: '6. Cache Retrieval Results - How It Works',
          icon: { name: 'duo-floppy-disk' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
              <div style={{ color: '#98c379', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <strong>
                  How It Works
                  <MermaidPopover
                    title="Retrieval Cache Flow"
                    diagram={`flowchart TB
    A["📝 Query"] --> B{"🔍 Result\\nCache?"}
    B -->|Hit| C["⚡ Cached\\nChunks"]
    B -->|Miss| D["🔢 Embed"]
    D --> E["🔍 Vector\\nSearch"]
    E --> F["💾 Cache\\nResults"]
    F --> C
    C --> G["🤖 LLM"]
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style G fill:#e1bee7,color:#000`}
                  />
                </strong>
              </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
              <p style={{ marginBottom: '1.5rem' }}>Store and reuse search results for queries that have been previously processed:</p>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
              <ul>
                <li>Cache top-k document IDs and snippets using query text or embedding hash as key</li>
                <li>Implement LRU (Least Recently Used) + TTL (Time To Live) cache structure</li>
                <li>Set up cache invalidation triggers when documents are updated or added</li>
                <li>Optionally implement semantic caching: reuse results for semantically similar queries</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1d6b63',
          notes: `### 30. Cache Retrieval Results — How It Works
Let's see how retrieval result caching works and how it differs from embedding caching.

#### ⚙️ The Cache Flow
\`\`\`mermaid
flowchart TB
    A["📝 Query"] --> B{"🔍 Result\\nCache?"}
    B -->|Hit| C["⚡ Cached\\nChunks"]
    B -->|Miss| D["🔢 Embed"]
    D --> E["🔍 Vector\\nSearch"]
    E --> F["💾 Cache\\nResults"]
    F --> C
    C --> G["🤖 LLM"]
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style G fill:#e1bee7,color:#000
\`\`\`
The flow works like this: when a query comes in, you first check if you have cached results for it. On a cache hit, you skip both the embedding and the vector search steps entirely and go straight to the LLM with your cached chunks. On a cache miss, you proceed normally — embed, search, cache the results, then send to the LLM.

#### 🔑 Cache Invalidation
The tricky part is knowing when to invalidate cached results. If your documents change, cached results might be stale. Common strategies include TTL-based expiration 👉 'tee-tee-ell', version-based invalidation when documents update, and event-driven invalidation when specific documents are modified.

#### 📦 What to Cache
Cache the retrieved chunk IDs, their text content, and their relevance scores. This gives you everything you need to skip the search step while still being able to apply downstream processing like reranking.

Here are the practical implementation steps...`
        },
        {
          id: 31,
          title: '6. Cache Retrieval Results - Steps',
          icon: { name: 'duo-floppy-disk' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="rotateIn" delay={0.1}>
              <div style={{ color: '#d19a66', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                <strong>Steps</strong>
              </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
              <ul>
                <li>Create cache key: Use hash(query) or hash(rounded_embedding) as lookup key</li>
                <li>Store rich results: Cache document IDs, relevance scores, and short snippets</li>
                <li>Set appropriate TTL: Configure 15–120 minute expiration based on update frequency</li>
                <li>Implement invalidation: On document updates, invalidate by namespace/collection/version</li>
                <li>Monitor hit rate: Track and tune cache size based on hit/miss metrics</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1d6b63',
          notes: `### 31. Cache Retrieval Results — Steps
Here's how to implement retrieval result caching in your RAG pipeline. It builds on the same infrastructure as embedding caching.

#### 📋 Implementation Steps
**Step one: Define your cache key strategy.** Use normalized query text as the key, similar to embedding caching. Consider adding a version prefix that changes when your document collection updates, so stale results get automatically invalidated.

**Step two: Choose your storage.** Redis works great here too. Store the full retrieval results — chunk IDs, text content, and scores — as JSON values. Set TTL based on how often your documents change.

**Step three: Implement the cache-aside pattern.** Check the cache before starting the embedding step. On a hit, skip embedding AND vector search. On a miss, proceed normally and cache the results after retrieval.

**Step four: Handle cache invalidation.** Set up a mechanism to invalidate cached results when documents are updated. A simple approach is to change the cache key prefix whenever your document index is updated.

**Step five: Monitor staleness.** Track how often cached results diverge from fresh results. If your data changes frequently, shorter TTLs prevent serving outdated information. Aim for a staleness rate below 5%.

Now let's examine the trade-offs...`
        },
        {
          id: 32,
          title: '6. Cache Retrieval Results - Pros and Cons',
          icon: { name: 'duo-floppy-disk' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
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
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
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
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b63',
          notes: `### 32. Cache Retrieval Results — Pros and Cons
Let's weigh the benefits and challenges of caching retrieval results.

#### ✅ Pros
The good stuff: **Eliminates both embedding and search latency** for cached queries — the biggest time savings of any single caching technique. **Reduces vector database load**, which can lower infrastructure costs. **Consistent response times** for cached queries, improving user experience predictability. **Works well with embedding caching** — you can layer both for maximum benefit. And **simple cache-aside pattern** makes implementation straightforward.

#### ❌ Cons
The problems: **Stale results risk** — if documents change between cache writes and reads, users may get outdated information. **Cache invalidation complexity** — knowing exactly when to invalidate which cached results is a hard problem. **Higher memory usage** than embedding caching because you're storing full text chunks, not just vectors. **Cold start is worse** — a cold cache means zero benefit until queries start repeating. And **not suitable for rapidly changing data** — if your documents update every few minutes, caching provides little value.

#### 🎯 Best Practice
Combine embedding caching (technique 5) with retrieval caching (technique 6) for maximum impact. Use embedding caching for all queries, and add retrieval caching for stable document collections. Together, they can eliminate 50-80% of your pre-LLM latency. Now let's move into reranking optimization — technique seven...`
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
              <GSAPAnimated animation="flipCard" delay={0.1}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <div style={{ color: '#61dafb' }}>
                  <strong>Goal</strong>
                </div>
              </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.4}>
              <div style={{ padding: '2rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '12px', borderLeft: '6px solid #61dafb' }}>
                <p style={{ margin: 0 }}>
                  Improve precision with minimal latency overhead by applying high-quality but slower ranking only to a small subset of retrieved results.
                </p>
              </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d6b29',
          notes: `### 33. Re-Ranking — Goal
Now we're entering the **reranking and compression** section with technique seven — optimizing your re-ranker. Wait, you might ask, didn't we say we want to reduce latency? Isn't adding a reranker ADDING a step? Great question! The trick is to re-rank only a few results, not all of them.

#### 🎯 What's the Goal?
The goal is to use a lightweight re-ranker on just your top few retrieved results — say the top 3 to 5 — instead of reranking a large set. This gives you better precision without the latency penalty of scoring dozens of candidates.

#### 💡 The Analogy
Think of it like hiring. You don't deeply interview all 500 applicants. You screen resumes first to get a shortlist of 5-10 candidates, then do thorough interviews with just those few. The screening is fast and rough, the interviews are slow and precise. Same principle: fast retrieval gets you candidates, lightweight reranking picks the winners.

This approach actually REDUCES overall latency because better-ranked results mean less noise for the LLM, which generates faster responses. Let's see when to use it...`
        },
        {
          id: 34,
          title: '7. Re-Ranking - When to Use',
          icon: { name: 'duo-ranking-star' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
              <div style={{ color: '#61dafb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                <strong>When to Use</strong>
              </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.7}>
              <ul>
                <li>Need quality boost beyond vector search</li>
                <li>Latency budget is tight</li>
                <li>Complex semantic matching needs</li>
                <li>Applications requiring high precision</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1d6b29',
          notes: `### 34. Re-Ranking — When to Use
When should you add a lightweight reranker to your pipeline? Here are the key scenarios.

#### 🎯 Quality-Critical Applications
If your RAG system needs to provide highly accurate answers — like in medical, legal, or financial contexts — a reranker significantly improves the precision of your top results. The few milliseconds it adds are well worth the quality gain.

#### 📊 When Vector Search Isn't Precise Enough
Vector similarity search is good at finding semantically related content, but it sometimes ranks results poorly. A cross-encoder reranker understands the actual relationship between the query and each result, giving much better ordering.

#### ⚡ After Limiting Top-K
This pairs beautifully with technique three. First, retrieve the top-5 with vector search, then rerank those 5 to get the best 3. The total latency is still less than retrieving top-20 without reranking.

#### 🔄 Multi-Stage Retrieval
In systems where you first do a broad retrieval and then narrow down, reranking is the natural narrowing step. It's the standard pattern in search engines and works equally well for RAG.

Let's see how lightweight reranking works under the hood...`
        },
        {
          id: 35,
          title: '7. Re-Ranking - How It Works',
          icon: { name: 'duo-ranking-star' },
          content: (
            <div style={{ fontSize: '1.8rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInRight" delay={0.1}>
              <div style={{ color: '#98c379', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <strong>
                  How It Works
                  <MermaidPopover
                    title="Re-Ranking Pipeline"
                    diagram={`flowchart LR
    A["🔍 Query"] --> B["📊 Vector\\nSearch"]
    B --> C["Top-5\\nResults"]
    C --> D["🏆 Cross-Encoder\\nReranker"]
    D --> E["Top-3\\nBest Results"]
    E --> F["🤖 LLM"]
    style A fill:#4fc3f7,color:#000
    style D fill:#ffd700,color:#000
    style F fill:#81c784,color:#000`}
                  />
                </strong>
              </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
              <p style={{ marginBottom: '1.5rem' }}>Two-stage retrieval process that combines speed and quality:</p>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
              <ul>
                <li>First stage: Fast ANN vector search retrieves larger set (K1) of candidates</li>
                <li>Second stage: Cross-encoder or reranker model evaluates only a subset (m) of those candidates</li>
                <li>Only the top m ≪ K1 candidates go through reranking (e.g., 10-20 out of 50-100)</li>
                <li>Final top n results (3-8) with highest reranker scores get passed to LLM</li>
                <li>Reranker models (like cross-encoders) analyze query-document pairs directly for better matching</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1d6b29',
          notes: `### 35. Re-Ranking — How It Works
Let's understand the mechanics of efficient re-ranking and why it improves both quality and speed.

#### ⚙️ The Reranking Pipeline
\`\`\`mermaid
flowchart LR
    A["🔍 Query"] --> B["📊 Vector\\nSearch"]
    B --> C["Top-5\\nResults"]
    C --> D["🏆 Cross-Encoder\\nReranker"]
    D --> E["Top-3\\nBest Results"]
    E --> F["🤖 LLM"]
    style A fill:#4fc3f7,color:#000
    style D fill:#ffd700,color:#000
    style F fill:#81c784,color:#000
\`\`\`
Here's the key insight: vector search uses **bi-encoders** 👉 'by-en-COH-ders' that encode the query and documents separately and compare their vectors. This is fast but approximate. **Cross-encoders** 👉 'cross-en-COH-ders' process the query and document together, which is much more accurate but slower. By only running the cross-encoder on your top 3-5 results, you get the best of both worlds.

#### 🏎️ Lightweight Rerankers
Models like **MiniLM** 👉 'mini-ell-em' or **TinyBERT** 👉 'tiny-burt' can rerank 5 results in just 5-10 milliseconds on a GPU. That's a tiny latency cost for a significant quality boost. Cohere 👉 'co-HERE' also offers a fast reranking API.

#### 📈 The Net Effect
Even though reranking adds a step, the improved result quality means less noise in the LLM context, which often results in faster and shorter LLM responses. So the net latency can actually decrease! Here are the implementation steps...`
        },
        {
          id: 36,
          title: '7. Re-Ranking - Steps',
          icon: { name: 'duo-ranking-star' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
              <div style={{ color: '#d19a66', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                <strong>Steps</strong>
              </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
              <ul>
                <li>Initial retrieval: Retrieve K1=50–100 documents quickly using vector search</li>
                <li>Subset selection: Pass only top m=10–20 candidates to reranker</li>
                <li>Reranking: Score candidates with stronger semantic model</li>
                <li>Efficient batching: Process reranker calls in batches for throughput</li>
                <li>Implement safeguards: Set timeouts and fallback to first-stage results</li>
                <li>Select final context: Pass top 3–8 reranked results to LLM</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1d6b29',
          notes: `### 36. Re-Ranking — Steps
Here's how to add efficient reranking to your RAG pipeline without hurting latency.

#### 📋 Implementation Steps
**Step one: Choose a lightweight reranker.** Start with a small cross-encoder model like **ms-marco-MiniLM-L-6** 👉 'em-ess marco mini-ell-em ell six'. It's tiny, fast, and surprisingly effective. Alternatively, use Cohere's Rerank API for a managed solution.

**Step two: Limit the candidate set.** Only rerank your top-5 to top-10 results from vector search. Reranking more than 10 results usually doesn't improve quality but does add latency. The sweet spot for most applications is top-5.

**Step three: Implement scoring.** Pass each (query, document) pair through the cross-encoder. It outputs a relevance score between 0 and 1. Sort by this score and take the top-3 for your LLM context.

**Step four: Benchmark the added latency.** Measure the time the reranker adds. If it's under 20 milliseconds for your candidate set, it's a clear win. If it's over 50ms, consider a smaller model or reducing the candidate set.

**Step five: Evaluate quality improvement.** Compare answer quality with and without reranking. Track metrics like answer correctness, relevance, and faithfulness. The quality improvement should justify the small latency cost.

Let's look at the trade-offs...`
        },
        {
          id: 37,
          title: '7. Re-Ranking - Pros and Cons',
          icon: { name: 'duo-ranking-star' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
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
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
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
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b29',
          notes: `### 37. Re-Ranking — Pros and Cons
Let's evaluate the advantages and disadvantages of adding a lightweight reranker.

#### ✅ Pros
The good stuff: **Significantly better result precision** — cross-encoders understand query-document relevance much better than vector similarity alone. **Small latency cost** when reranking only top-5 results — typically 5-15 milliseconds. **Net latency reduction** is possible because better results mean less noise for the LLM. **Works with any vector search** — you can add reranking to any existing pipeline without changing your embedding or indexing. And **proven technique** — this is standard practice in production search engines.

#### ❌ Cons
The problems: **Adds a processing step** that requires GPU or CPU resources. **Model hosting overhead** — you need to serve the reranking model somewhere, which adds infrastructure complexity. **Latency scales with candidate count** — reranking 20 results takes 4x longer than reranking 5. **Potential single point of failure** if the reranker service goes down. And **diminishing returns** — if your vector search is already very precise, reranking adds latency without much quality gain.

#### 🎯 The Verdict
For most production RAG systems, adding a lightweight reranker on top-5 results is one of the highest-ROI optimizations. The quality improvement often outweighs the small latency cost, and in many cases, the net effect is actually faster responses. Now let's move to technique eight — context compression...`
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
              <GSAPAnimated animation="rotateIn" delay={0.1}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                <div style={{ color: '#61dafb' }}>
                  <strong>Goal</strong>
                </div>
              </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.5}>
              <div style={{ padding: '2rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '12px', borderLeft: '6px solid #61dafb' }}>
                <p style={{ margin: 0 }}>
                  Reduce tokens sent to the LLM, lowering Time to First Token (TTFT) and cost while preserving essential information.
                </p>
              </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#4a6b1d',
          notes: `### 38. Context Compression — Goal
Technique eight is **context compression** — a powerful way to reduce the amount of text you send to the LLM. This directly speeds up generation and lowers costs.

#### 🎯 What's the Goal?
Even after selecting the best chunks, there's often a lot of irrelevant text within those chunks. Context compression extracts or summarizes only the parts that are relevant to the query, dramatically reducing token count without losing important information.

#### 💡 Think of It This Way
Imagine you're studying for an exam and you have a 300-page textbook. Instead of reading the whole thing, you use a highlighter to mark only the key sentences. That's what context compression does — it highlights only the relevant parts of your retrieved chunks and discards the rest.

#### 📊 The Impact
In practice, context compression can reduce your context size by 50-80% while preserving all the relevant information. This means the LLM processes fewer tokens, generates faster responses, and costs less per query. Let's see when this technique is most valuable...`
        },
        {
          id: 39,
          title: '8. Context Compression - When to Use',
          icon: { name: 'duo-compress' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInRight" delay={0.1}>
              <div style={{ color: '#61dafb', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                <strong>When to Use</strong>
              </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.7}>
              <ul>
                <li>Applications with long retrieved chunks</li>
                <li>When using expensive LLMs</li>
                <li>Systems with strict TTFT targets</li>
                <li>High query volume production environments</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#4a6b1d',
          notes: `### 39. Context Compression — When to Use
When should you add context compression to your pipeline? Here are the key indicators.

#### 📏 Large Chunks
If your chunks are 300+ tokens and contain mixed content — some relevant, some not — compression helps isolate the useful parts. This is common when chunking at paragraph or section level.

#### 💰 High Token Costs
If you're using expensive LLMs like GPT-4 👉 'gee-pee-tee four', every token counts. Compressing your context from 2,000 tokens to 500 tokens means a 75% cost reduction per query on the context portion.

#### ⚡ Generation Latency Priority
LLM generation time scales roughly linearly with input token count. If you can cut input tokens by 60%, you can expect a roughly 40-50% reduction in generation time. For applications where the LLM step is the bottleneck, this is huge.

#### 📊 Multiple Retrieved Chunks
When you need to include information from multiple chunks — say 5-10 — compression helps fit more relevant information within the context window without hitting token limits.

Let's dive into how context compression actually works...`
        },
        {
          id: 40,
          title: '8. Context Compression - How It Works',
          icon: { name: 'duo-compress' },
          content: (
            <div style={{ fontSize: '1.8rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
              <div style={{ color: '#98c379', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <strong>
                  How It Works
                  <MermaidPopover
                    title="Context Compression Pipeline"
                    diagram={`flowchart TB
    A["📄 Retrieved\\nChunks"] --> B["✂️ Compression"]
    B --> C["📝 Extractive\\n(keep key sentences)"]
    B --> D["📝 Abstractive\\n(summarize)"]
    C --> E["⚡ Compact\\nContext"]
    D --> E
    E --> F["🤖 LLM"]
    style A fill:#4fc3f7,color:#000
    style E fill:#ffd700,color:#000
    style F fill:#81c784,color:#000`}
                  />
                </strong>
              </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
              <p style={{ marginBottom: '1.5rem' }}>Apply intelligent reduction techniques to minimize prompt size without losing critical context:</p>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
              <ul>
                <li>Query-focused summarization: Generate concise summaries of retrieved documents focused on query intent</li>
                <li>Salient span extraction: Identify and extract only the most relevant passages from each document</li>
                <li>Token pruning: Remove redundant information, repetitive content, and low-relevance sections</li>
                <li>Citation-preserving compression: Maintain document source references while reducing content size</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#4a6b1d',
          notes: `### 40. Context Compression — How It Works
Let's explore the two main approaches to context compression and how they reduce your token count.

#### ⚙️ Two Approaches
\`\`\`mermaid
flowchart TB
    A["📄 Retrieved\\nChunks"] --> B["✂️ Compression"]
    B --> C["📝 Extractive\\n(keep key sentences)"]
    B --> D["📝 Abstractive\\n(summarize)"]
    C --> E["⚡ Compact\\nContext"]
    D --> E
    E --> F["🤖 LLM"]
    style A fill:#4fc3f7,color:#000
    style E fill:#ffd700,color:#000
    style F fill:#81c784,color:#000
\`\`\`

**Extractive compression** keeps only the sentences that are relevant to the query. It's like highlighting a textbook — you don't change the words, you just skip the irrelevant parts. This is fast and preserves exact wording, which is important for factual accuracy.

**Abstractive compression** uses a small model to summarize the retrieved chunks into a shorter, focused passage. This can achieve higher compression ratios but risks introducing inaccuracies through paraphrasing.

#### 🔧 LangChain's LLMChainExtractor
Tools like LangChain's **LLMChainExtractor** 👉 'ell-ell-em chain extractor' or **ContextualCompressionRetriever** make this easy to implement. They use a smaller, cheaper LLM to extract relevant sentences before sending them to your main LLM.

#### ⚖️ The Compression Ratio
Aim for a 50-70% compression ratio. Going too aggressive — say 90% — risks losing important context. The sweet spot is removing filler text while keeping all factually relevant content. Here are the steps to implement it...`
        },
        {
          id: 41,
          title: '8. Context Compression - Steps',
          icon: { name: 'duo-compress' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="bounceIn" delay={0.1}>
              <div style={{ color: '#d19a66', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                <strong>Steps</strong>
              </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
              <ul>
                <li>Compress retrieved documents: Transform N retrieved docs into concise passages (keep citations/IDs)</li>
                <li>Set token budget: Cap final context (e.g., 800–1500 tokens) with safety margin for LLM response</li>
                <li>Monitor information loss: Log dropped tokens and content for quality assurance</li>
                <li>Implement fallback: Use larger context window for low confidence or complex queries</li>
                <li>Fine-tune compression ratio: Balance between context size and information preservation</li>
              </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#4a6b1d',
          notes: `### 41. Context Compression — Steps
Here's how to implement context compression in your RAG pipeline.

#### 📋 Implementation Steps
**Step one: Analyze your context.** Look at the chunks currently being sent to your LLM. Highlight the sentences that actually contribute to the answer. If more than 40% is irrelevant filler, compression will help significantly.

**Step two: Choose your approach.** For factual accuracy, start with extractive compression — it's simpler and preserves exact wording. For maximum compression, try abstractive summarization with a small model like Flan-T5 👉 'flan tee five'.

**Step three: Implement the compressor.** If using LangChain, the **ContextualCompressionRetriever** wraps your existing retriever and adds compression automatically. For custom implementations, use a lightweight model to score sentence relevance.

**Step four: Set compression targets.** Define your target compression ratio based on your latency and cost goals. A 50% reduction in tokens typically translates to a 30-40% reduction in LLM generation time.

**Step five: Validate output quality.** Compare answers with and without compression on your evaluation set. Ensure that compressed contexts still produce accurate, complete answers. Watch for cases where compression removes critical qualifying information.

Let's look at the trade-offs of context compression...`
        },
        {
          id: 42,
          title: '8. Context Compression - Pros and Cons',
          icon: { name: 'duo-compress' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
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
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
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
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#4a6b1d',
          notes: `### 42. Context Compression — Pros and Cons
Let's evaluate when context compression is worth adding to your pipeline.

#### ✅ Pros
The good stuff: **Faster LLM generation** because fewer input tokens mean faster processing. **Lower token costs** — a 60% compression means 60% savings on the context portion of your LLM bill. **Better answer quality** in some cases because the LLM sees less noise and more relevant information. **Fits more information** in limited context windows — you can effectively use more chunks without hitting token limits. And **works with any LLM** — compression happens before the LLM step, so it's model-agnostic.

#### ❌ Cons
The problems: **Adds processing time** — the compression step itself takes 50-200 milliseconds depending on the approach. **Risk of information loss** if the compressor removes something important. **Additional model to maintain** — extractive compression needs a model for sentence scoring. **Abstractive compression can hallucinate** — the summarization model might add information that wasn't in the original text. And **complexity** — it's another component in your pipeline that needs monitoring and maintenance.

#### ⚖️ When It's Worth It
Context compression is most valuable when your LLM is the bottleneck — specifically when generation time dominates your overall latency. If your LLM step takes 2+ seconds and your pre-LLM pipeline is already fast, compression can cut that LLM time significantly. Next up, technique nine — parallelizing retrieval...`
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

