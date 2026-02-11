import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const llmCachingDeck: Deck = {
  id: 'llm-caching-patterns',
  name: '13 Caching Patterns That Save Cost in LLM Systems',
  description: 'Optimize latency and cost across RAG and chat by applying caching at input, retrieval, generation, and personalization layers',
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
          title: '13 Caching Patterns That Save Cost in LLM Systems',
          content: (
            <div>
              <GSAPAnimated animation="rotateIn" duration={1} delay={0}>
                <div style={{ fontSize: '2rem', marginBottom: '2rem', color: '#61dafb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <SvgIcon iconName="duo-microchip" sizeName="2x" style={{ marginRight: '1rem' }} darkModeInvert={true} />
                  LLM CACHING PATTERNS
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.3}>
                <div style={{ fontSize: '1.2rem', color: '#e5c07b', marginBottom: '2rem' }}>
                  Optimize latency and cost across RAG and chat by applying caching at input, retrieval, generation, and personalization layers.
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <div>
                  <p><strong>Prepared by:</strong> Nisar A</p>
                  <p><strong>Date:</strong> November 7, 2025</p>
                  <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: `### 13 Caching Patterns That Save Cost in LLM Systems
Welcome everyone! Today we're going to explore one of the most practical topics in production **LLM 👉 'el-el-em'** systems: caching patterns that can dramatically reduce both your costs and latency.

#### Why This Matters
Building **LLM systems** is expensive. Every API call costs money, and every millisecond of latency impacts user experience. But here's the good news: most applications show significant repetition in queries, retrieval operations, and even generation patterns. That's where intelligent caching comes in.

#### What We'll Cover Today
We're going to walk through **thirteen proven caching patterns** that address different layers of your LLM stack. From simple query embedding caches all the way to sophisticated partial response reconstruction, each pattern solves a specific problem and brings measurable savings.

#### The Journey Ahead
Think of caching as a layered strategy. You have the **input layer** where queries come in, the **retrieval layer** where you search your knowledge base, the **generation layer** where the model produces responses, and the **personalization layer** where you tailor outputs to individual users. Each layer has its own caching opportunities.

> Ask the audience: "How many of you are currently running LLM applications in production?"

These patterns aren't just theoretical. They're battle-tested approaches used by companies processing millions of LLM requests daily. By the end of this presentation, you'll understand exactly which patterns to apply and when.

Let's begin by understanding why caching is so critical for LLM systems.`
        },
        {
          id: 2,
          title: 'Why Caching Matters in LLM Systems',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <div style={{ color: '#e06c75', marginBottom: '1rem' }}>
                      <SvgIcon iconName="duo-chart-line" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong style={{ fontSize: '2rem' }}>Cost Drivers</strong>
                    </div>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Tokenization, embedding generation, vector search operations</li>
                      <li>Re-ranking of retrieved content</li>
                      <li>Generation tokens, prompt processing, and tool calls</li>
                    </ul>
                  </div>

                  <div>
                    <div style={{ color: '#98c379', marginBottom: '1rem' }}>
                      <SvgIcon iconName="duo-rocket" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong style={{ fontSize: '2rem' }}>What Caching Saves</strong>
                    </div>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Repeated preprocessing and tokenization steps</li>
                      <li>Redundant retrieval operations</li>
                      <li>Lower TTFT (time to first token) and tail latency</li>
                    </ul>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '1rem' }}>
                      <SvgIcon iconName="duo-network-wired" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong style={{ fontSize: '2rem' }}>
                        Caching Layers
                        <MermaidPopover
                          title="Caching Architecture Layers"
                          diagram={`flowchart TB
    A["🌐 Edge/App Cache"] --> B["📊 Vector/Index Cache"]
    B --> C["🤖 Model Runtime Cache"]
    C --> D["👤 User/Session Memory"]
    style A fill:#4fc3f7,color:#000
    style B fill:#81c784,color:#000
    style C fill:#ffd700,color:#000
    style D fill:#e1bee7,color:#000`}
                        />
                      </strong>
                    </div>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Edge/app cache for responses and templates</li>
                      <li>Vector/index cache for retrieval results</li>
                      <li>Model-runtime cache (KV/logits) for generation</li>
                      <li>User/session memory for contextual state</li>
                    </ul>
                  </div>

                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '1rem' }}>
                      <SvgIcon iconName="duo-gauge-high" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong style={{ fontSize: '2rem' }}>Key Performance Indicators</strong>
                    </div>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Cache hit rate and miss penalty cost</li>
                      <li>P95 latency improvements</li>
                      <li>Freshness SLAs for dynamic data</li>
                      <li>Storage cost vs. compute savings ratio</li>
                    </ul>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="bounceIn" delay={0.5}>
                <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong style={{ fontSize: '2rem' }}>Caching Principles:</strong>
                  </div>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Stable cache keys with version tags</li>
                    <li>Balanced TTLs and invalidation strategies</li>
                    <li>Privacy and security considerations for sensitive data</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: `### Why Caching Matters in LLM Systems
Now let's dive into why caching is absolutely critical when you're building production LLM systems.

#### The Cost Reality
Let's talk numbers first. Every time your system processes a query, you're paying for multiple expensive operations. **Tokenization** breaks down your text into tokens. **Embedding generation** converts text into high-dimensional vectors, which requires running neural networks. **Vector search** operations scan through potentially millions of vectors. Then there's **re-ranking** of retrieved content, which often involves another model call. And finally, the big one: **generation tokens** from the LLM itself, along with prompt processing and any tool calls.

Think about a typical RAG 👉 'rag' system handling ten thousand queries per day. If even thirty percent of those queries are repeated or very similar, you're literally burning money on redundant computations. That's where intelligent caching becomes your best friend.

#### What Caching Actually Saves
Caching eliminates three major bottlenecks. First, you skip **repeated preprocessing and tokenization**. These steps might seem fast, but they add up at scale. Second, you avoid **redundant retrieval operations**. Why search your vector database again when you already found the best results for this query yesterday? Third, and perhaps most importantly, caching dramatically lowers your **TTFT** 👉 'tee-tee-eff-tee', which stands for **time to first token**, and your **tail latency**. Users notice when responses are slow, and caching can turn a three-second response into a three-hundred-millisecond response.

#### The Four Caching Layers
\`\`\`mermaid
flowchart TB
    A["🌐 Edge/App Cache"] --> B["📊 Vector/Index Cache"]
    B --> C["🤖 Model Runtime Cache"]
    C --> D["👤 User/Session Memory"]
    style A fill:#4fc3f7,color:#000
    style B fill:#81c784,color:#000
    style C fill:#ffd700,color:#000
    style D fill:#e1bee7,color:#000
\`\`\`

Caching isn't one-size-fits-all. We work with **four distinct layers**. At the top, you have your **edge or application cache** that stores complete responses and templates. This is your first line of defense. Moving deeper, there's the **vector or index cache** that holds retrieval results. Then you get into the model itself with **runtime caches** like KV caches 👉 'kay-vee' and logit caches that make generation faster. Finally, at the personalization layer, you have **user and session memory** that maintains contextual state across conversations.

#### Measuring Success
How do you know if your caching strategy is working? Four key metrics tell the story. Your **cache hit rate** shows what percentage of requests are served from cache, and the **miss penalty cost** shows how expensive it is when you don't hit cache. **P95 latency** 👉 'pee ninety-five' improvements demonstrate the user experience impact. You need to balance **freshness SLAs** 👉 'service level agreements' because some data needs to be current. And finally, track your **storage cost versus compute savings ratio** to ensure caching is economically viable.

#### The Guiding Principles
Three principles govern effective caching. Use **stable cache keys with version tags** so you can invalidate when needed. Find the right balance between **TTLs** 👉 'tee-tee-els', or time-to-live values, and your invalidation strategies. And never forget **privacy and security** when you're caching sensitive data. A leaked cache entry with personal information is a disaster waiting to happen.

Now that we understand why caching matters, let's explore the first of our thirteen patterns.`
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
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>
                        What is Cached
                        <MermaidPopover
                          title="Query Embedding Cache Flow"
                          diagram={`flowchart LR
    A["📝 Query"] --> B["🔄 Normalize"]
    B --> C{"🔍 Cache?"}
    C -->|Hit| D["⚡ Return Embedding"]
    C -->|Miss| E["🤖 Generate Embedding"]
    E --> F["💾 Store in Cache"]
    F --> D
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#ffd700,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>Query embedding vectors (and normalization artifacts)</li>
                        <li>Processed vector representations of user queries</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Cache Key</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>hash(normalized_query + embedding_model + version + dim)</li>
                        <li>Includes model version to ensure embedding consistency</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-floppy-disk" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Cache Storage Location</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>Redis/KeyDB for hot cache</li>
                        <li>Optional S3/object store for cold cache</li>
                        <li>Co-located per region for lower latency</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-clock" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Expiration Strategy / TTL</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>Long TTL (7–30 days)</li>
                        <li>Version-bump invalidation</li>
                        <li>LFU/LRU eviction policy for memory management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#6b561d',
          notes: `### Pattern 1: Query Embedding Cache
Here's our first caching pattern: **Query Embedding Cache**. This is one of the most straightforward yet impactful patterns you can implement in your LLM system.

#### What Gets Cached
In this pattern, we cache **query embedding vectors and their normalization artifacts**. Think about what happens every time a user asks a question. Your system takes that text, normalizes it, and then runs it through an embedding model to convert it into a high-dimensional vector. This embedding step isn't free. It requires a forward pass through a neural network, which takes time and costs money or compute resources.

\\\`\\\`\\\`mermaid
flowchart LR
    A["📝 Query"] --> B["🔄 Normalize"]
    B --> C{"🔍 Cache?"}
    C -->|Hit| D["⚡ Return Embedding"]
    C -->|Miss| E["🤖 Generate Embedding"]
    E --> F["💾 Store in Cache"]
    F --> D
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#ffd700,color:#000
\\\`\\\`\\\`

When a query comes in, we normalize it first, then check the cache. If we get a cache hit, we instantly return the embedding without touching the embedding model. On a miss, we generate the embedding, store it in the cache, and then return it. Simple flow, massive impact.

#### The Cache Key Strategy
The cache key is critical here. We use \\\`hash(normalized_query + embedding_model + version + dim)\\\`. Notice what we're including: the normalized query text itself, obviously, but also the embedding model name, its version, and the output dimensionality. Why all this extra information? Because embeddings from different models or different versions aren't interchangeable. If you upgrade your embedding model and don't include the version in the key, you'll get cache hits with stale embeddings from the old model. That leads to subtle quality degradation that's hard to debug.

#### Storage Architecture
We store these embeddings in **Redis 👉 'red-iss' or KeyDB 👉 'key-dee-bee'** for the hot cache. These are in-memory stores that give you microsecond-level latency. For rarely-accessed embeddings, you can optionally tier down to **S3 👉 'ess-three'** or another object store. The key is co-locating your cache per region, keeping it close to your application servers to minimize network latency.

#### Time-to-Live Configuration
We use a **long TTL 👉 'tee-tee-el', typically seven to thirty days**. Embeddings are deterministic. For the same input and model version, you'll always get the same output, so they're safe to cache for extended periods. When you need to invalidate, you do a **version-bump** in your cache key rather than expiring all entries. You also want **LFU 👉 'el-eff-you' or LRU 👉 'el-are-you'** eviction policies. LFU is least frequently used, and LRU is least recently used. These ensure your cache doesn't fill up with one-time queries.

#### When This Pattern Shines
The **strengths** are compelling. You completely avoid recomputing embeddings for identical queries. If you're running a customer support chatbot, you'll see the same questions repeatedly. Your **hit rate for frequently asked questions** will be excellent, often above eighty percent. And since embeddings are deterministic, you get **consistent quality** with zero variation.

#### The Limitations
But there are trade-offs. Embeddings are **memory intensive**. A single embedding from a model like **text-embedding-3-large 👉 'text embedding three large'** can be three thousand dimensions of float32 values. That's twelve kilobytes per embedding. At scale, this adds up. You also have **strict version coupling**. Every model update requires careful cache key management. And you must be extremely careful with **text normalization and PII 👉 'pee-eye-eye'**, which is personally identifiable information. If your normalization is inconsistent, you'll get cache misses on queries that should hit. And if you cache queries containing sensitive data, you create a security risk.

Let's look at the strengths and limitations in more detail on the next slide.`
        },
        {
          id: 4,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      <strong>Strengths</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Avoids recomputing embeddings for identical queries</li>
                      <li>High hit rate for frequent/FAQ queries</li>
                      <li>Deterministic quality and consistency</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      <strong>Limitations</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Memory intensive for large embedding dimensions</li>
                      <li>Strict version coupling with embedding model</li>
                      <li>Requires careful text normalization and PII handling</li>
                    </ul>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#6b561d',
          notes: `### Strengths and Limitations
Let's take a closer look at when Query Embedding Cache works brilliantly and when you need to be cautious.

#### The Good Stuff
On the **strengths** side, the value proposition is crystal clear. You're **avoiding expensive embedding computation** for queries you've already seen. Think about the math here. If generating an embedding takes fifty milliseconds and costs you point-zero-zero-one cents, and you're processing a million queries per month with a forty percent hit rate, that's four hundred thousand avoided computations. The savings in both latency and cost add up fast.

The **hit rate for frequently asked questions** is where this really shines. In customer support, documentation search, or any domain with common queries, you'll see the same questions over and over. Your cache hit rate can easily exceed seventy to eighty percent for these workloads. And because embeddings are deterministic functions of the input, you get **perfect quality consistency**. There's zero risk of quality degradation from caching.

#### The Trade-offs
Now for the **limitations**. First, embeddings are **memory intensive**. Modern embedding models produce high-dimensional vectors. **Text-embedding-3-large 👉 'text embedding three large'**, for example, outputs three-thousand-dimensional vectors. Each dimension is a thirty-two-bit float, so that's twelve kilobytes per cached embedding. If you're caching a million embeddings, that's twelve gigabytes of memory just for the vectors themselves, not counting the cache metadata and keys.

Second, there's **strict version coupling with your embedding model**. When you update your embedding model, all your cached embeddings become incompatible. You can't mix embeddings from different model versions in your similarity searches. This means you need to carefully manage cache keys with version tags and plan for cache warming when you upgrade models.

Third, you need to handle **text normalization and PII 👉 'pee-eye-eye', or personally identifiable information, very carefully**. If your normalization is inconsistent, like sometimes lowercasing and sometimes not, or varying how you handle punctuation, you'll get cache misses on queries that should be hits. And if you're caching the actual query text as part of your cache key or value, and that text contains personal information like names, emails, or addresses, you've now stored sensitive data that might be subject to privacy regulations. You need proper data governance around your caching layer.

> Ask the audience: "How many of you are currently caching embeddings in your systems?"

With those trade-offs in mind, let's move on to Pattern 2, which caches at a different layer of the stack.`
        }
      ]
    },
    {
      id: 'pattern-2',
      title: 'Pattern 2: Retrieval Results Cache',
      slides: [
        {
          id: 5,
          title: 'Pattern 2: Retrieval Results Cache',
          icon: { name: 'duo-magnifying-glass' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>
                        What is Cached
                        <MermaidPopover
                          title="Retrieval Results Cache Flow"
                          diagram={`flowchart LR
    A["📝 Query"] --> B["🔢 Embedding"]
    B --> C{"🔍 Cache?"}
    C -->|Hit| D["⚡ Return Results"]
    C -->|Miss| E["🔎 Vector Search"]
    E --> F["💾 Store in Cache"]
    F --> D
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#ffd700,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>Top-k document IDs + scores from vector search</li>
                        <li>Optional document snippets/previews</li>
                        <li>Results from expensive retrieval operations</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Cache Key</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>hash(query_norm or quantized_embedding + index_snapshot_id + k + filters)</li>
                        <li>Includes index version to ensure result consistency</li>
                        <li>Filter parameters included to maintain result accuracy</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-floppy-disk" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Cache Storage Location</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>Redis/Memcached for fast, in-memory access</li>
                        <li>Optional edge/CDN caching for public FAQs</li>
                        <li>Regional deployment to minimize latency</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-clock" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Expiration Strategy / TTL</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>Short TTL (5–60 minutes)</li>
                        <li>Purge on index refresh or collection update</li>
                        <li>Event-driven invalidation when knowledge base changes</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#516b1d',
          notes: `### Pattern 2: Retrieval Results Cache
Now let's move up one layer in the stack to **Pattern 2: Retrieval Results Cache**. While the first pattern cached embeddings, this pattern caches the actual results from your vector search operations.

#### What Gets Cached
In this pattern, we cache **the output of vector search operations**. Specifically, we're storing the **top-k document IDs, their similarity scores, and optionally document snippets or previews**. Think about what happens when you run a semantic search query. You generate an embedding, that embedding gets compared against potentially millions of vectors in your index, you compute similarity scores, sort them, apply filters, and return the top results. This entire vector search operation is computationally expensive and time-consuming.

\\\`\\\`\\\`mermaid
flowchart LR
    A["📝 Query"] --> B["🔢 Embedding"]
    B --> C{"🔍 Cache?"}
    C -->|Hit| D["⚡ Return Results"]
    C -->|Miss| E["🔎 Vector Search"]
    E --> F["💾 Store in Cache"]
    F --> D
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#ffd700,color:#000
\\\`\\\`\\\`

Here's the flow. Query comes in, gets embedded, then we check the cache. On a **cache hit**, we instantly return the document IDs and scores without touching the vector database at all. On a **cache miss**, we perform the full vector search, store those results in the cache, and then return them. The key insight is that vector search is often one of the most expensive operations in your retrieval pipeline. By caching these results, you can skip that entire computation.

#### The Cache Key Strategy
The cache key here is more complex than the embedding cache. We use \\\`hash(normalized_query or quantized_embedding + index_snapshot_id + k + filters)\\\`. Let me break this down. You can either hash the normalized query text or a **quantized version of the embedding** to save space. The critical part is including the **index_snapshot_id 👉 'index snapshot I-D'**. This tracks the version of your vector index. Why is this essential? Because when you add new documents or update existing ones, the search results for the same query will change. Including the index version ensures you don't serve stale results from before that update.

You also include **k**, which is the number of results requested, and any **filter parameters**. If someone asks for the top five results versus the top ten, those need different cache entries. Same with filters. A query filtered to only engineering documents versus all documents should produce different cached results.

#### Storage Architecture
For storage, we use **Redis 👉 'red-iss' or Memcached 👉 'mem-cached'** for fast in-memory access. These stores give you sub-millisecond latency, which is crucial because you're trying to avoid a vector search that might take fifty to two hundred milliseconds. For **public FAQs 👉 'frequently asked questions'**, you can optionally push results to **edge caches or CDN 👉 'content delivery network'** layers, getting them even closer to your users. The key is **regional deployment**. Deploy your cache in the same region as your vector database to minimize network hops.

#### Time-to-Live Configuration
Notice the TTL 👉 'tee-tee-el' is much **shorter** here than with embeddings. We use **five to sixty minutes** typically. Why so short? Because retrieval results become stale quickly. As soon as you update your knowledge base, add new documents, or change existing ones, the cached results are potentially outdated. You also implement **event-driven invalidation**. When your knowledge base changes, you proactively purge or invalidate affected cache entries rather than waiting for TTL expiration. This keeps your results fresh while still getting cache benefits for queries that happen repeatedly within short time windows.

#### When This Pattern Shines
The **strengths** are powerful. You completely skip expensive vector search operations. Vector similarity computation across large indices is resource-intensive, especially with high-dimensional embeddings. The **latency improvements** can be dramatic. A vector search might take one hundred milliseconds or more. A cache hit takes under one millisecond. And the results themselves are **cheap to store**. Unlike embeddings, which are large vectors, you're just storing document IDs, which are typically integers or short strings, plus some floating-point scores.

#### The Limitations
But there are important **trade-offs**. First, **results become stale when your corpus changes**. Every document update, addition, or deletion potentially invalidates cached results. You need robust invalidation logic. Second, **filter-specific cache keys can explode your cache size**. If users are applying many different filter combinations, you might end up with low hit rates because each unique filter combination needs its own cache entry. Third, you get **lower hit rates on tail or uncommon queries**. If your users are asking highly diverse questions, you won't see the same queries repeatedly, reducing cache effectiveness. This pattern works best when you have repeated queries or concentrated query patterns, like customer support with common questions.

Let's dive deeper into the strengths and limitations on the next slide.`
        },
        {
          id: 6,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="bounceIn" delay={0.5}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      <strong>Strengths</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Skips expensive vector search operations</li>
                      <li>Significant latency improvements</li>
                      <li>Cheap to store compared to raw embeddings</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      <strong>Limitations</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Results become stale when corpus changes</li>
                      <li>Filter-specific cache keys can increase cache size</li>
                      <li>Lower hit rate on tail/uncommon queries</li>
                    </ul>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#516b1d',
          notes: `### Strengths and Limitations
Let's examine the Retrieval Results Cache more closely to understand when it delivers exceptional value and where you need to be careful.

#### The Performance Wins
On the **strengths** side, this is all about performance and cost optimization. You're **skipping expensive vector search operations**. Let me give you some concrete numbers. A typical vector search across a million documents with a seven-hundred-sixty-eight-dimensional embedding might take fifty to one hundred fifty milliseconds, depending on your index structure and whether you're using approximate nearest neighbor algorithms like **HNSW 👉 'H-N-S-W', which stands for hierarchical navigable small world**, or **IVF 👉 'I-V-F', which is inverted file index**. A cache hit returns those same results in under a millisecond. That's a hundred-x speedup or more.

The **latency improvements** translate directly to better user experience. In conversational AI applications, every hundred milliseconds matters. When you're targeting sub-second response times from query to final answer, cutting out a hundred-millisecond vector search is huge. It's the difference between a snappy, responsive system and one that feels sluggish.

And the storage is **incredibly cheap compared to raw embeddings**. A cached retrieval result might be ten to twenty document IDs, which are typically four or eight bytes each, plus ten to twenty float scores at four bytes each. That's maybe two hundred bytes total. Compare that to caching the full embedding vectors at twelve kilobytes or more. You can cache thousands of retrieval results in the same memory space as a hundred embeddings. This makes the pattern very cost-effective from a resource perspective.

#### The Freshness Challenge
Now for the **limitations**, and this is where things get interesting. The biggest challenge is **staleness 👉 'stay-ul-ness'**. Results become stale when your corpus changes. Imagine you're running a documentation search system. A user asks "how do I configure authentication?" and you cache the top ten results. Two hours later, your team publishes a new authentication guide that's more relevant and comprehensive than any existing docs. New users asking the same question should get this new document in their results, but if they hit the cache, they get the old results without the new guide.

This is why **event-driven invalidation** is critical. You need to listen for document additions, updates, or deletions and proactively purge affected cache entries. But implementing this correctly is non-trivial. You need to decide which cache entries are affected by a given document change. In some systems, people take a conservative approach and flush the entire cache on any corpus update. In others, they try to selectively invalidate only affected entries, which is more efficient but more complex to implement.

Second, **filter-specific cache keys can explode your cache size and fragment your hit rate**. Say you're building an internal knowledge base search. Users can filter by department, date range, document type, author, and tags. Each unique combination of filters creates a separate cache key. If users are applying diverse filter combinations, you end up with many cache entries that each get hit rarely. Your cache becomes bloated with low-value entries.

Third, you face **lower hit rates on tail or uncommon queries**. This pattern shines when you have high query repetition. Think customer support FAQs, where you see the same hundred questions over and over. Your cache hit rate might be seventy to eighty percent. But in a research assistant tool where users are asking highly specific, diverse questions, your hit rate might drop to ten or twenty percent. At that point, you're paying the memory and operational cost of the cache without getting much benefit.

#### Practical Deployment Considerations
In practice, successful deployments of this pattern often combine it with **monitoring and adaptive cache sizing**. You track your hit rate metrics and adjust your cache size and TTL 👉 'tee-tee-el' based on actual usage patterns. Some teams use **separate cache tiers** for different query types. They might have a hot cache for common queries with a thirty-minute TTL and a warm cache for less frequent queries with a five-minute TTL. This lets them optimize for different workload characteristics.

> Ask the audience: "Who here is doing RAG 👉 'rag', retrieval-augmented generation, or semantic search in production? Have you tried caching retrieval results?"

With that understanding of Pattern 2, let's look at our third caching pattern, which operates at yet another layer of the system.`
        }
      ]
    },
    {
      id: 'pattern-3',
      title: 'Pattern 3: Prompt Template Cache',
      slides: [
        {
          id: 7,
          title: 'Pattern 3: Prompt Template Cache',
          icon: { name: 'duo-file-lines' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>
                        What is Cached
                        <MermaidPopover
                          diagram={`flowchart LR
    A["📋 Template ID + Variables"] --> B{"🔍 Cache Check"}
    B -->|Hit| C["⚡ Return Rendered Prompt"]
    B -->|Miss| D["🔨 Render Template"]
    D --> E["💾 Store in Cache"]
    E --> C
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffd700,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>Rendered system/instruction templates and tokenized IDs</li>
                        <li>Pre-processed templates per model/locale</li>
                        <li>Common static prompt components</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Cache Key</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>template_id + template_version + model_id</li>
                        <li>locale + formatting_mode</li>
                        <li>Hash of all template parameters combined</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="scaleIn" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-floppy-disk" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Cache Storage Location</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>In-process memory for token IDs</li>
                        <li>Redis for cross-instance sharing</li>
                        <li>Application-level memory for high access frequency</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-clock" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Expiration Strategy / TTL</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>Very long TTL (weeks to months)</li>
                        <li>Invalidate on template update or model switch</li>
                        <li>Version-based cache invalidation triggers</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2d6b1d',
          notes: `### Pattern 3: Prompt Template Cache
Here's our third caching pattern: **Prompt Template Cache**. This pattern operates at a different layer than embeddings or retrieval results. We're caching at the prompt assembly and tokenization stage, right before sending text to the LLM.

#### What Gets Cached
In this pattern, we cache **rendered system and instruction templates along with their tokenized IDs**. Let me explain what this means in practice. Most LLM applications don't send raw, ad-hoc text to the model. You typically have structured prompt templates with placeholders for dynamic content. Something like: "You are a helpful assistant specializing in {domain}. Answer the following question: {user_question}." The static parts, like "You are a helpful assistant," remain constant across thousands of requests. The dynamic parts, like the domain and user question, change per request.

\\\`\\\`\\\`mermaid
flowchart LR
    A["📋 Template ID + Variables"] --> B{"🔍 Cache Check"}
    B -->|Hit| C["⚡ Return Rendered Prompt"]
    B -->|Miss| D["🔨 Render Template"]
    D --> E["💾 Store in Cache"]
    E --> C
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffd700,color:#000
\\\`\\\`\\\`

When a request comes in with a template ID and variables, we check the cache. On a hit, we get back the pre-rendered prompt text or, even better, the pre-tokenized token IDs ready to send to the model. On a miss, we render the template, tokenize it if needed, store it in the cache, and return it. The beauty here is that we're avoiding repetitive template rendering and tokenization operations.

We also cache **pre-processed templates per model and locale**. Different models may require different prompt formats. **GPT-4 👉 'G-P-T four'** and **Claude 👉 'Clawed'** have different instruction-following characteristics, so you might maintain separate template variants. Similarly, if you're serving a multilingual application, you have templates in English, Spanish, Japanese, et cetera. Each of these can be pre-rendered and cached separately.

Finally, we cache **common static prompt components**. Think of these as reusable building blocks. System messages, role definitions, output format instructions. These fragments appear in many different prompts. By caching them, you avoid reprocessing the same text repeatedly.

#### The Cache Key Strategy
The cache key here is comprehensive: \\\`template_id + template_version + model_id + locale + formatting_mode + hash(parameters)\\\`. Let's unpack this. The \\\`template_id\\\` identifies which template you're using. Maybe you have templates called "customer_support_greeting" or "code_review_analysis." The \\\`template_version\\\` is critical. When you update a template, you need to bust the cache. Including the version in the key ensures old cached versions don't get served after an update.

The \\\`model_id\\\` accounts for model-specific formatting. Different models have different tokenizers and different optimal prompt structures. A cached template for **GPT-4** shouldn't be used for **Claude** or **Llama 👉 'Lama', like the animal**. The \\\`locale\\\` handles internationalization. Your Spanish template shouldn't be served to English users. And \\\`formatting_mode\\\` covers things like whether you're rendering to plain text, markdown, or some other format.

Finally, you hash all the template parameters together. If your template has five placeholders for dynamic content, the hash of those five values becomes part of the key. This means identical parameter sets get cache hits, while different parameter sets get unique entries.

#### Storage Architecture
For storage, we use **in-process memory for token IDs**. Tokenized prompts are accessed on every single LLM call, so you want them in the fastest possible storage. That's your application's local memory. No network hops, no serialization overhead. Just a hash map lookup and you have your token array.

For sharing across service instances, you can use **Redis 👉 'red-iss'**. If you're running multiple instances of your application server, Redis lets them share the same cache. One instance renders and caches a template, and other instances can immediately benefit. This is especially valuable in autoscaling environments where new instances spin up frequently.

You also keep templates in **application-level memory for high-access frequency items**. Your most common templates, used on every request, stay hot in memory. Less common templates can be fetched from Redis or re-rendered on demand.

#### Time-to-Live Configuration
Notice we use a **very long TTL 👉 'tee-tee-el', weeks to months**. Templates are deterministic. For the same template version, model, locale, and parameters, you'll always get the same output. So there's no reason to expire them frequently. Instead, we **invalidate on template update or model switch**. When you deploy a new template version, you explicitly purge or version-bump the cache keys. When you upgrade your model, the model_id in the key changes naturally, so old cached entries become irrelevant.

This is **version-based cache invalidation**, not time-based. You're explicitly controlling cache lifetime based on semantic changes to your system, not arbitrary time windows.

#### When This Pattern Shines
The **strengths** are subtle but valuable. You get **faster prompt assembly and tokenization**. Template rendering involves string interpolation, validation, and potentially complex logic. Tokenization requires running your text through the model's tokenizer, which can take a few milliseconds. Caching eliminates this overhead. It's not huge, maybe five to twenty milliseconds saved per request, but it adds up at scale.

You also get **consistent outputs across service instances**. All your servers use the same cached templates, so there's no risk of discrepancies from template logic bugs or race conditions during updates.

Finally, there's **low implementation complexity**. This is one of the simpler caching patterns to implement. You're just caching strings or token arrays. No complex invalidation logic or coordination required.

#### The Limitations
But there are trade-offs. The **absolute savings per request are modest**. Unlike caching the LLM call itself, which might save hundreds of milliseconds and significant cost, caching templates saves you maybe ten milliseconds and a tiny fraction of compute cost. The value comes from applying it to millions of requests.

You face **per-model differences requiring separate caches**. Every model you support multiplies your cache size. If you support five models and three locales, that's fifteen separate cache variants for each template. This increases memory footprint and complexity.

And you need to **manage multi-locale variants**. Internationalization adds significant complexity. You need to track which template versions exist in which languages, ensure they're kept in sync, and handle fallbacks gracefully when a translation is missing.

Let's examine the strengths and limitations more closely on the next slide.`
        },
        {
          id: 8,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="fadeIn" delay={0.5}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      <strong>Strengths</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Faster prompt assembly and tokenization</li>
                      <li>Consistent outputs across service instances</li>
                      <li>Low implementation complexity</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      <strong>Limitations</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Modest absolute savings per request</li>
                      <li>Per-model differences require separate caches</li>
                      <li>Requires management of multi-locale variants</li>
                    </ul>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2d6b1d',
          notes: `### Strengths and Limitations
Let's dive deeper into the Prompt Template Cache to understand where it delivers real value and where you need to temper your expectations.

#### The Efficiency Gains
On the **strengths** side, the primary benefit is **faster prompt assembly and tokenization**. Let me give you concrete numbers to make this tangible. Template rendering typically involves string interpolation, validation checks, and potentially some conditional logic. This might take one to five milliseconds depending on template complexity. Tokenization adds another five to fifteen milliseconds depending on the tokenizer and prompt length. That's up to twenty milliseconds you're saving per request.

Now, twenty milliseconds doesn't sound like much. But let's do the math. If you're processing ten thousand requests per hour, that's two hundred thousand milliseconds saved per hour, which is over three minutes of compute time. At a million requests per day, you're saving over five hours of compute time daily. The savings accumulate. And in latency-sensitive applications where you're targeting sub-second end-to-end response times, every millisecond counts.

The second strength is **consistent outputs across service instances**. When you cache templates centrally in **Redis 👉 'red-iss'** or share them across your application instances, every server is working from the same rendered templates. This eliminates a class of bugs where different servers might render templates slightly differently due to race conditions during deployments or configuration drift. You get deterministic behavior across your entire fleet.

Third, this pattern has **low implementation complexity**. It's one of the simpler caching strategies to implement. You're caching strings or token arrays. The cache key is straightforward. There's no complex invalidation logic beyond version bumping when you update templates. You don't need to worry about staleness in the way you do with retrieval results or embeddings. Templates are deterministic, so once cached, they're valid until you explicitly change them.

#### The Reality Check
Now for the **limitations**, and this is where you need to be realistic about what this pattern can and cannot do. First, the **absolute savings per request are modest**. Unlike caching the actual LLM call, which might save you five hundred milliseconds of latency and five cents of cost, caching templates saves you maybe ten to twenty milliseconds and a fraction of a cent. The value comes from volume. This pattern makes sense when you're operating at scale, handling thousands or millions of requests. For a small application with a hundred requests per day, the engineering effort to implement template caching might not be justified.

Second, **per-model differences require separate caches**. Every model you support multiplies your cache footprint. **GPT-4 👉 'G-P-T four'**, **Claude 👉 'Clawed'**, **Llama 👉 'Lama'**, **Gemini 👉 'Gem-in-eye'**—each has different tokenizers and optimal prompt formats. Your cache needs separate entries for each model variant. If you support five models, three locales, and two formatting modes, that's thirty separate cache variants for each template. This increases memory usage and operational complexity.

#### The Internationalization Challenge
The third limitation is **managing multi-locale variants**. Internationalization adds significant complexity. You need a workflow to ensure that when you update a template in English, corresponding updates are made to Spanish, French, Japanese, and all other supported languages. You need to track which translations are up to date and which are stale. You need fallback logic for when a template doesn't exist in the requested locale.

In practice, many teams implement a **template versioning system** where each template has a version number, and each locale of that template is tracked separately. When you update the English template from version three to version four, the Spanish and French versions remain at version three until translators update them. Your system needs to handle this gracefully, either falling back to the previous version or showing a warning that translations are pending.

#### Practical Deployment Patterns
Successful deployments of this pattern often use **tiered caching**. Your most frequently used templates live in in-process memory for maximum speed. Less common templates are fetched from **Redis** or re-rendered on demand. You also implement **prewarming strategies**, where you proactively render and cache common templates during deployment rather than waiting for the first user request to trigger caching.

Some teams also use **template composition**, breaking large templates into reusable fragments. You cache these fragments independently and assemble them as needed. This reduces cache size because common fragments are stored once and reused across multiple templates.

#### When to Use This Pattern
This pattern is most valuable in **high-throughput systems where template rendering and tokenization overhead adds up**. If you're running a customer service chatbot handling thousands of conversations simultaneously, or a code generation tool serving millions of API requests, the accumulated savings justify the implementation effort.

It's less valuable in **low-volume applications or research prototypes** where you're iterating rapidly on prompts. In those cases, the caching overhead might exceed the benefits.

> Ask the audience: "How many of you are using structured prompt templates rather than ad-hoc string formatting in your LLM applications?"

With that understanding of Pattern 3, let's move on to Pattern 4, which caches at yet another critical layer: the final generated answers.`
        }
      ]
    },
    {
      id: 'pattern-4',
      title: 'Pattern 4: RAG Answer Cache',
      slides: [
        {
          id: 9,
          title: 'Pattern 4: RAG Answer Cache',
          icon: { name: 'duo-message-square' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="rotateIn" delay={0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>
                        What is Cached
                        <MermaidPopover
                          title="Semantic Cache Flow"
                          diagram={`flowchart LR
    A["📝 Query"] --> B["🔢 Embedding"]
    B --> C["🔍 Similarity Search"]
    C --> D{"📊 Above Threshold?"}
    D -->|Yes| E["⚡ Return Cached Response"]
    D -->|No| F["🤖 Generate New"]
    F --> G["💾 Store"]
    G --> E
    style A fill:#4fc3f7,color:#000
    style E fill:#81c784,color:#000
    style F fill:#ffd700,color:#000
    style D fill:#ffcdd2,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>Final LLM answer (with citations) conditioned on query</li>
                        <li>Complete generated responses including retrieved context set</li>
                        <li>Full response with source document references</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Cache Key</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>hash(query_norm + context_doc_ids/hashes)</li>
                        <li>prompt_version + model + decoding_params</li>
                        <li>Must include all context sources for consistency</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-floppy-disk" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Cache Storage Location</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>Redis for hot cache items</li>
                        <li>Durable KV/DB for high-value queries</li>
                        <li>Encrypt if sensitive data is included</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-clock" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Expiration Strategy / TTL</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>Medium TTL (1–7 days)</li>
                        <li>Event-based invalidation on any source doc change</li>
                        <li>Content-dependent staleness policies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d6b42',
          notes: `### Pattern 4: RAG Answer Cache
Welcome to Pattern 4, the **RAG Answer Cache** 👉 'rag answer cache'. This is where we cache at the highest level of abstraction: the complete generated answers from your LLM, including all citations and context. While the previous patterns cached individual components like embeddings or retrieval results, this pattern caches the final output that your users actually see.

#### What Gets Cached
In this pattern, we cache the **final LLM answer with citations, conditioned on the query**. This is the complete response that your RAG 👉 'rag' system generates after retrieving context and prompting the model. Think of it as caching the entire output of your RAG pipeline. When a user asks "What is our refund policy?" your system retrieves relevant documents from your knowledge base, constructs a prompt with that context, generates an answer from the LLM, and adds citations pointing back to source documents. All of that, the complete package, gets cached.

\\\`\\\`\\\`mermaid
flowchart LR
    A["📝 Query"] --> B["🔢 Embedding"]
    B --> C["🔍 Similarity Search"]
    C --> D{"📊 Above Threshold?"}
    D -->|Yes| E["⚡ Return Cached Response"]
    D -->|No| F["🤖 Generate New"]
    F --> G["💾 Store"]
    G --> E
    style A fill:#4fc3f7,color:#000
    style E fill:#81c784,color:#000
    style F fill:#ffd700,color:#000
    style D fill:#ffcdd2,color:#000
\\\`\\\`\\\`

The flow is elegant. A query comes in, you generate or retrieve its embedding, and perform a **similarity search** against previously cached queries. Here's where it gets interesting: instead of checking for exact matches like Pattern 1, this pattern uses **semantic similarity**. If the similarity score is above your threshold, maybe zero-point-nine on a cosine similarity scale, you return the cached response. If it's below threshold, you generate a new response, store it with its query embedding, and return it.

We're caching **complete generated responses including the retrieved context set**. This means not just the answer text, but metadata about which documents were retrieved and used. This is crucial for debugging and for cache invalidation. If document seventeen in your knowledge base gets updated, you can invalidate all cached answers that referenced it.

We also cache the **full response with source document references**. Citations are part of the value. Your users need to know where information came from, especially in domains like legal, medical, or financial services where trustworthiness is critical.

#### The Semantic Similarity Advantage
This is fundamentally different from exact-match caching. Consider two queries: "How's the weather today?" and "What's it like outside right now?" They're phrased differently, but they're semantically identical. With semantic caching, both queries would match the same cached answer because their embeddings are nearly identical in vector space. This dramatically increases your cache hit rate compared to exact-match approaches.

However, it also introduces complexity. You need to choose a **similarity threshold** carefully. Set it too high, like zero-point-nine-nine, and you'll only match near-exact duplicates, defeating the purpose. Set it too low, like zero-point-seven, and you risk serving cached answers for queries that are similar but not identical, leading to incorrect or irrelevant responses.

#### The Cache Key Strategy
The cache key here is comprehensive: \\\`hash(query_norm + context_doc_ids/hashes) + prompt_version + model + decoding_params\\\`. Let's break this down. The \\\`query_norm\\\` is your normalized query text. We normalize to handle variations in capitalization, whitespace, and punctuation. The \\\`context_doc_ids\\\` or \\\`context_doc_hashes\\\` capture which documents were retrieved and used in generating the answer. This is critical because the same query with different context should produce different answers.

The \\\`prompt_version\\\` tracks changes to your prompt template. If you update your system prompt or instruction format, you need to invalidate cached answers generated with the old prompt. The \\\`model\\\` parameter is obvious: answers from **GPT-4 👉 'G-P-T four'** shouldn't be conflated with answers from **Claude 👉 'Clawed'** or **Gemini 👉 'Gem-in-eye'**. And \\\`decoding_params\\\` includes things like temperature, top-p, and other sampling parameters. Different parameters can produce meaningfully different answers even from the same model and prompt.

Including **all context sources** in the key is non-negotiable. If you don't, you'll get cache hits when the underlying context has changed, serving stale or incorrect information.

#### Storage Architecture
For storage, we use **Redis 👉 'red-iss' for hot cache items**. Complete answers with citations can be several kilobytes each, but they're still small enough to store in memory. Redis gives you sub-millisecond access times, which is essential for maintaining low latency.

For **high-value queries** that you know will be repeated often, you can use a **durable key-value store or database** like DynamoDB 👉 'die-nam-oh-dee-bee' or PostgreSQL 👉 'post-gres'. This provides persistence beyond what in-memory stores offer. If your Redis instance crashes, you lose your cache. With a durable store, you don't.

Critical point: **encrypt if sensitive data is included**. Unlike embedding vectors, which are opaque, cached answers contain readable text. If that text includes personal information, financial data, or other sensitive content, you must encrypt it at rest. This adds overhead but is non-negotiable for compliance with regulations like **GDPR 👉 'gee-dee-pee-are'** or **HIPAA 👉 'hip-pa'**.

#### Time-to-Live Configuration
We use a **medium TTL 👉 'tee-tee-el', typically one to seven days**. This is shorter than embedding caches but longer than retrieval result caches. Why? Because answers reference specific content that may change, but they're expensive to regenerate. You want to balance freshness with cost savings.

More importantly, you implement **event-based invalidation on any source document change**. If document one-hundred-twenty in your knowledge base gets updated, you need to invalidate all cached answers that cited that document. This requires maintaining an index mapping from document IDs to cached answer keys. It's additional complexity, but it's essential for correctness.

You also need **content-dependent staleness policies**. Some answers are time-sensitive. If a user asks "What's our current promotion?" the answer might change weekly. Other answers are stable. "What's the boiling point of water?" won't change. Your caching system should understand these distinctions, either through metadata tags or heuristics.

#### When This Pattern Shines
The **strengths** are substantial. You get **large cost and latency savings** by avoiding expensive LLM inference calls. Generating an answer might cost you a few cents and take two to three seconds. Serving from cache costs fractions of a cent and takes milliseconds. At scale, this adds up to thousands or tens of thousands of dollars saved monthly.

This pattern is **ideal for FAQs and static knowledge domains**. If you're building a customer support bot for a SaaS product, many queries will be variations of the same questions: "How do I reset my password?" "What payment methods do you accept?" "Where's my order?" These questions don't change frequently, and caching their answers is extremely valuable.

You **eliminate repeated expensive inference calls**, which not only saves money but also reduces load on your LLM API provider, avoiding rate limits and improving reliability.

#### The Limitations
But there are significant trade-offs. This pattern is **brittle to small context changes**. If your retrieval system returns a slightly different set of documents, the cache key changes, and you miss the cache. Even if the final answer would have been identical, you regenerate it. This limits cache hit rates in systems with non-deterministic retrieval.

There's also **storage overhead for complete responses**. Answers with citations can be several kilobytes each. If you're caching millions of answers, that's gigabytes of storage. This is manageable but non-trivial, especially if you're encrypting everything.

Finally, **freshness guarantees are required**. Serving stale answers is worse than being slow. If your knowledge base updates frequently, you need sophisticated invalidation logic to ensure users never get outdated information. This adds operational complexity and development effort.

Let's examine these trade-offs more closely on the next slide.`
        },
        {
          id: 10,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      <strong>Strengths</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Large cost and latency savings</li>
                      <li>Ideal for FAQs and static knowledge</li>
                      <li>Eliminates repeated expensive inference calls</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      <strong>Limitations</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Brittle to small context changes</li>
                      <li>Storage overhead for complete responses</li>
                      <li>Freshness guarantees required</li>
                    </ul>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d6b42',
          notes: `### Strengths and Limitations
Let's dive deeper into when RAG Answer Cache delivers exceptional value and when you need to exercise caution.

#### The Compelling Benefits
On the **strengths** side, this pattern offers some of the most dramatic improvements you'll see in any caching strategy. The **cost and latency savings are substantial**. Think about the economics here. Generating a complete RAG 👉 'rag' answer involves multiple expensive steps: embedding the query, searching your vector database, retrieving full document content, constructing a prompt with potentially thousands of tokens, running inference through an LLM, and streaming back the response. All of that might cost you two to five cents per query and take two to four seconds.

Now compare that to a cache hit. You do a similarity search against cached query embeddings, which takes maybe twenty milliseconds, retrieve the cached answer from **Redis 👉 'red-iss'**, which takes another five milliseconds, and return it. Total cost: fractions of a cent. Total latency: under fifty milliseconds. That's a **ninety-percent latency reduction** and potentially **ninety-five-percent cost savings**. When you're handling millions of queries per month, this translates to tens of thousands of dollars saved and dramatically better user experience.

#### The Perfect Use Case
This pattern is **ideal for FAQ and static knowledge domains**. Consider a customer support chatbot for a SaaS company. The most common questions are variations on the same themes. "How do I reset my password?" might appear as "I forgot my password, what do I do?" or "Can you help me get back into my account?" Semantic caching captures all these variations. Your knowledge base articles explaining password resets don't change daily. Once you've generated a high-quality answer with proper citations, you can safely cache it for days or weeks.

Documentation search is another perfect fit. Questions like "How do I configure authentication?" or "What are the rate limits for this API?" have stable answers. The underlying documentation might update occasionally, but not constantly. Cache hit rates in these domains can exceed **sixty to seventy percent**, meaning the majority of your queries are served from cache.

#### Eliminating the Expensive Operations
You **completely eliminate repeated expensive inference calls**. This isn't just about saving money. It's also about reliability and control. Every external API call is a potential failure point. LLM providers have rate limits, occasional outages, and variable latency. By serving more queries from cache, you reduce your dependency on external services. Your application becomes more resilient to provider issues.

There's also an interesting quality benefit. Because you're caching complete answers that your LLM has already generated and that presumably passed your quality checks, users see consistent responses. There's no risk of the model having an "off day" and producing a weird or incorrect answer on a retry of the same query. You've essentially locked in the quality of your best responses.

#### The Reality Check on Limitations
Now for the **limitations**, and these are significant. First, this pattern is **brittle to small context changes**. Here's the problem: your cache key includes the retrieved context documents. If your retrieval system returns a slightly different set of documents, even if they're semantically equivalent, the cache key changes and you miss the cache. And retrieval systems can be non-deterministic. **Approximate nearest neighbor 👉 'A-N-N'** algorithms like **HNSW 👉 'H-N-S-W'** or **IVF 👉 'I-V-F'** don't guarantee identical results every time, especially if your index is being updated or if you're using probabilistic pruning for speed.

This means your actual cache hit rate might be lower than expected. You might have semantically identical queries that should hit the cache but don't because the underlying retrieval produced slightly different context. Some teams address this by using **query embeddings alone** as the cache key, ignoring context, but then you risk serving cached answers that were generated with outdated or different context.

#### The Storage Economics
The second limitation is **storage overhead for complete responses**. Let's do the math. A typical answer with citations might be one to three kilobytes of text. If you're caching a million answers, that's one to three gigabytes. Add in encryption overhead, cache metadata, and you might be looking at five gigabytes or more. For **Redis 👉 'red-iss'** running in memory, this gets expensive. AWS ElastiCache 👉 'Elastic Cache' with five gigabytes of memory costs around fifty dollars per month. That's not prohibitive, but it's not negligible either.

And if you want persistence and durability, storing in **DynamoDB 👉 'die-nam-oh-dee-bee'** or **RDS 👉 'are-dee-ess'**, you pay for storage plus read/write capacity. At scale, these costs add up. You need to ensure your cost savings from avoiding LLM calls exceed your caching infrastructure costs. Usually they do by a wide margin, but it's worth monitoring.

#### The Freshness Challenge
The third limitation is the most operationally complex: **freshness guarantees are required**. Serving a stale answer is often worse than being slow. Imagine a user asks "What's your return policy?" and your cached answer references a policy that changed last month. You've just given incorrect information, potentially causing customer frustration or even legal issues.

To handle this, you need **event-based cache invalidation**. When a document in your knowledge base gets updated, you must identify and invalidate all cached answers that referenced it. This requires maintaining a **reverse index** mapping from document IDs to cache keys. It's doable, but it adds complexity to your system architecture.

You also need **content classification** to determine appropriate TTLs 👉 'tee-tee-els'. Some queries are inherently time-sensitive. "What's today's special offer?" can't be cached for days. Others, like "What's the speed of light?" are effectively permanent. Your system needs heuristics or metadata to distinguish these cases.

#### Practical Implementation Patterns
Successful deployments often use **tiered TTLs**. Answers tagged as "policies" or "documentation" get long TTLs, maybe seven days. Answers tagged as "promotions" or "inventory" get short TTLs, maybe one day. You can also implement **popularity-based caching**, where only queries that have been asked multiple times get cached. This reduces storage for one-off queries while ensuring high-value queries benefit.

Some teams use **cache warming** strategies, proactively generating and caching answers for known frequent queries during off-peak hours. This ensures your cache is pre-populated when traffic spikes.

#### When to Use This Pattern
This pattern delivers maximum value in **high-traffic FAQ systems** where questions repeat frequently and answers are relatively stable. Customer support, product documentation, and knowledge base search are ideal domains. It's less suitable for **highly dynamic content** where the knowledge base changes constantly, or for **highly personalized queries** where every user needs a unique answer.

The cost-benefit analysis is straightforward: if your cache hit rate is above **thirty percent** and your average LLM call costs more than **one cent**, you'll almost certainly see positive ROI. Most well-implemented systems achieve **fifty to sixty percent hit rates**, making this pattern one of the most impactful in the entire caching toolkit.

> Ask the audience: "How many of you are currently caching LLM responses, and what hit rates are you seeing?"

With that deep dive into RAG Answer Cache complete, let's move on to Pattern 5, which takes a different approach to caching at the generation layer.`
        }
      ]
    },
    {
      id: 'pattern-5',
      title: 'Pattern 5: Chunk-Level Cache',
      slides: [
        {
          id: 11,
          title: 'Pattern 5: Chunk-Level Cache',
          icon: { name: 'duo-scissors' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInBottom" delay={0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>
                        What is Cached
                        <MermaidPopover
                          title="Chunk-Level Cache Flow"
                          diagram={`flowchart LR
    A["📄 Document"] --> B["✂️ Chunk"]
    B --> C{"🔍 Cache?"}
    C -->|Hit| D["⚡ Return Cached"]
    C -->|Miss| E["🤖 Process Chunk"]
    E --> F["🔢 Embed"]
    F --> G["💾 Store"]
    G --> D
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#ffd700,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>Per-chunk embeddings and tokenized text</li>
                        <li>Reranker features and metadata</li>
                        <li>Pre-processed document fragments</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Cache Key</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>doc_id + chunk_index + chunk_hash</li>
                        <li>pipeline_version (for compatibility tracking)</li>
                        <li>Optional embedding model identifier</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="bounceIn" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-floppy-disk" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Cache Storage Location</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>Object store (S3/GCS/Azure) for persistence</li>
                        <li>Metadata DB for quick reference lookup</li>
                        <li>Redis tier for hot/frequently accessed chunks</li>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-clock" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Expiration Strategy / TTL</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>No fixed TTL (content-driven expiration)</li>
                        <li>Invalidate on document update/re-index</li>
                        <li>Lazy refresh strategy for efficiency</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d616b',
          notes: `### Pattern 5: Chunk-Level Cache
Here's our fifth caching pattern: **Chunk-Level Cache**. This is a foundational pattern that operates at the document ingestion and processing layer, caching pre-processed document fragments before they even enter your retrieval pipeline.

#### What Gets Cached
In this pattern, we cache **per-chunk embeddings, tokenized text, reranker features, and metadata**. Think about what happens when you ingest documents into your RAG 👉 'rag' system. You take large documents, split them into chunks, generate embeddings for each chunk, tokenize the text, potentially compute reranker features, and extract metadata. All of this processing is expensive and time-consuming.

\\\`\\\`\\\`mermaid
flowchart LR
    A["📄 Document"] --> B["✂️ Chunk"]
    B --> C{"🔍 Cache?"}
    C -->|Hit| D["⚡ Return Cached"]
    C -->|Miss| E["🤖 Process Chunk"]
    E --> F["🔢 Embed"]
    F --> G["💾 Store"]
    G --> D
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#ffd700,color:#000
\\\`\\\`\\\`

When a document comes in for processing, we chunk it first, then check the cache for each chunk. If we get a cache hit, we instantly return the pre-processed chunk data without re-running the embedding model or tokenizer. On a miss, we process the chunk, generate the embedding, store everything in the cache, and then return it. This is particularly valuable when you're re-indexing documents or when multiple documents contain overlapping content.

#### The Cache Key Strategy
The cache key is carefully constructed: \\\`doc_id + chunk_index + chunk_hash + pipeline_version\\\`. Notice what we're tracking here. The **doc_id** identifies the source document. The **chunk_index** tells us which chunk this is within that document. The **chunk_hash** is a content hash of the actual chunk text, so if the content changes, we invalidate automatically. And **pipeline_version** ensures compatibility across processing pipeline updates. When you change your chunking strategy, embedding model, or reranking features, the pipeline version in the key changes, naturally invalidating stale cache entries.

This design is elegant because it handles both **document updates** and **pipeline evolution** automatically. If you update a document, its chunks get different hashes and miss the cache. If you upgrade your processing pipeline, the version bump causes misses. Either way, you reprocess only what's necessary.

#### Storage Architecture
We use a **multi-tier storage strategy**. The bulk of chunk data lives in **object stores** like **S3 👉 'ess-three', GCS 👉 'gee-see-ess', or Azure Blob Storage 👉 'Azh-ur'** for cost-effective persistence. These stores are cheap at scale but have higher latency, typically tens of milliseconds. Then we maintain a **metadata database** for quick lookups to check if chunks exist and retrieve their storage pointers. Finally, we keep a **Redis 👉 'red-iss' tier** for hot, frequently accessed chunks. This tiered approach balances cost and performance beautifully.

#### Time-to-Live Configuration
Interestingly, there's **no fixed TTL 👉 'tee-tee-el'** for chunk caches. Instead, we use **content-driven expiration**. Chunks are invalidated when the source document is updated or when you re-index. This is a **lazy refresh strategy**. We don't proactively expire chunks on a timer. Instead, we keep them until there's a semantic reason to invalidate. This maximizes cache efficiency because chunks from stable documents can remain cached indefinitely.

#### When This Pattern Shines
The **strengths** are substantial. You **dramatically speed up ingestion and retrieval workflows**. If you're ingesting millions of documents, and many of them contain overlapping content, like standard legal disclaimers, common API examples, or repeated documentation sections, you avoid redundant processing. Your ingestion pipeline becomes much faster.

You also enable **reproducible pipeline processing**. Because you're caching intermediate outputs, you can replay your pipeline with consistent results. This is invaluable for debugging, testing, and compliance scenarios where you need to prove exactly what processing was applied to which data.

Finally, you **significantly reduce recomputation costs**. Embedding generation is expensive. If you're using a model like **text-embedding-3-large 👉 'text embedding three large'**, and you're processing terabytes of documents, the compute costs add up fast. Caching at the chunk level cuts those costs dramatically for any documents that share content or get re-processed.

#### The Limitations
But there are real trade-offs. First, the **storage footprint at scale is substantial**. You're caching not just embeddings but also tokenized text, reranker features, and metadata for every chunk. If you have a hundred million chunks, and each cached chunk is twenty kilobytes on average, that's two terabytes of storage. This is manageable with object stores, which are cheap, but it's not trivial.

Second, you need **complex invalidation logic**. When a document updates, you must identify and invalidate all its cached chunks. When your pipeline version changes, you must handle migration carefully to avoid serving results from mixed pipeline versions. This requires sophisticated cache management code and operational discipline.

Third, you face **multi-version coexistence challenges**. During pipeline upgrades, you might have some chunks cached from the old pipeline and some from the new pipeline. Your system needs to handle this gracefully, either by versioning everything carefully or by forcing a full re-index when pipelines change. Both approaches have costs.

Let's examine these trade-offs more closely on the next slide.`
        },
        {
          id: 12,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="fadeIn" delay={0.5}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      <strong>Strengths</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Speeds up ingestion and retrieval workflows</li>
                      <li>Enables reproducible pipeline processing</li>
                      <li>Significantly reduces recomputation costs</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      <strong>Limitations</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Substantial storage footprint at scale</li>
                      <li>Complex invalidation logic required</li>
                      <li>Multi-version coexistence challenges</li>
                    </ul>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d616b',
          notes: `### Strengths and Limitations
Let's dive deeper into the Chunk-Level Cache to understand where it delivers exceptional value and where you need to be mindful of the complexities.

#### The Performance Benefits
On the **strengths** side, this pattern offers compelling efficiency gains at the ingestion layer. The first major benefit is **dramatically faster ingestion and retrieval workflows**. Let me give you concrete numbers. Imagine you're ingesting a large corpus of technical documentation where many documents share common sections, like API reference pages that all include the same authentication examples, or legal documents with standard disclaimers.

Without chunk-level caching, every document gets processed independently. You chunk it, embed every chunk, tokenize, compute reranker features—all redundant work for shared content. With chunk-level caching, the first time you process a chunk, you pay the full cost. But every subsequent occurrence of that same content, whether in the same document or across different documents, is a cache hit. You've eliminated ninety-five percent of the processing time and cost for overlapping content.

In practice, if you're ingesting a hundred thousand documents and twenty percent of the content is shared or repeated, chunk-level caching can reduce your total ingestion time from maybe ten hours down to three hours. The savings compound as your corpus grows.

#### Pipeline Reproducibility
The second strength is **enabling reproducible pipeline processing**. This is subtle but incredibly valuable, especially in regulated industries or research contexts. Because you're caching intermediate processing outputs with version tags, you can deterministically reproduce exactly what processing was applied to any piece of content. Need to debug why a particular query isn't retrieving the right documents? You can trace back to the exact cached chunk embeddings and metadata that were used. Need to prove compliance with data processing regulations? You have an audit trail of what was cached and when.

This reproducibility also simplifies testing. When you're developing new features or fixing bugs in your retrieval pipeline, you can work with cached chunks and get consistent results. You're not fighting non-deterministic behavior from re-running embeddings or tokenization with slightly different parameters.

#### The Economics of Recomputation
The third strength is **significantly reducing recomputation costs**. Embedding generation is one of the most expensive operations in RAG 👉 'rag' systems. A model like **text-embedding-3-large 👉 'text embedding three large'** processes text at a certain cost per token. If you're ingesting terabytes of documents, the cumulative compute cost can be enormous. But with chunk-level caching, you only pay that cost once per unique chunk. Re-indexing your corpus for other reasons, like updating your vector database or changing search parameters, doesn't require re-embedding. You just pull from the cache.

Let's do the math. Suppose embedding a million chunks costs you five hundred dollars in compute time. Without caching, if you re-index three times during development and testing, that's fifteen hundred dollars. With chunk-level caching, you pay five hundred dollars once, and subsequent re-indexes are nearly free from an embedding standpoint. The ROI is clear.

#### The Storage Reality Check
Now for the **limitations**, and these are significant at scale. First, the **storage footprint is substantial**. You're caching embeddings, tokenized text, reranker features, and metadata for every chunk. Let's break down the math. A typical chunk might have a three-thousand-dimensional embedding, which is twelve kilobytes. Tokenized text might add another two kilobytes. Reranker features and metadata add maybe three more kilobytes. That's roughly twenty kilobytes per cached chunk.

If you're working with a hundred million chunks, that's two terabytes of cached data. Now, object stores like **S3 👉 'ess-three'** are cheap, roughly twenty-three dollars per terabyte per month. So two terabytes costs you about forty-six dollars per month for storage alone. That's very manageable. But if you want high-performance access, and you're keeping hot chunks in **Redis 👉 'red-iss'**, memory costs are much higher, maybe five hundred dollars per terabyte per month. You need to carefully tier your storage, keeping only truly hot data in memory and everything else in object stores.

#### The Invalidation Complexity
The second limitation is **complex invalidation logic**. This is where operational complexity creeps in. When a document is updated, you need to identify and invalidate all cached chunks from that document. This requires maintaining a **reverse index** mapping document IDs to chunk cache keys. It's doable, but it's not trivial. Your cache management layer needs to be sophisticated.

You also need to handle partial updates carefully. If only one paragraph in a large document changes, ideally you'd invalidate only the affected chunks, not the entire document's cache. This requires content hashing at the chunk level, which we include in our cache key, but it also requires careful tracking of chunk boundaries. If your chunking strategy changes slightly, you might miss some invalidations.

And then there's the question of **cascade invalidation**. If chunk A was used to generate a cached retrieval result B, and A gets invalidated, should B also be invalidated? The answer depends on your freshness requirements and system architecture. Some teams implement this cascade logic, but it adds significant complexity.

#### Multi-Version Coexistence
The third limitation is **multi-version coexistence challenges**. Here's the scenario: you decide to upgrade your embedding model from version one to version two. Or you change your chunking strategy from five-hundred-token chunks to three-hundred-token chunks. What happens to your existing cache?

If you version-bump your pipeline_version in the cache key, all existing cached chunks become stale, and you effectively have an empty cache until you re-process your corpus. This means you lose all caching benefits during the transition period, which could be days or weeks for large corpora. Your ingestion slows down dramatically, and costs spike.

Alternatively, you could try to maintain **multiple pipeline versions in parallel**, allowing the old cached chunks to coexist with new ones. But this is operationally complex. Your code needs to handle both versions, you need to track which version applies to which chunks, and you risk subtle bugs where mixed versions produce inconsistent results.

#### Practical Implementation Patterns
Successful deployments often use **smart tiering and pre-warming**. You identify your most frequently accessed documents, pre-compute their chunks, and warm the cache proactively during off-peak hours. This ensures high cache hit rates even after pipeline upgrades.

You also implement **background cache refresh jobs** that gradually update cached chunks from old pipeline versions to new ones without blocking the main ingestion workflow. This amortizes the transition cost over time.

Some teams also use **chunk fingerprinting** based on semantic content rather than exact text, so that minor formatting changes to documents don't invalidate chunks unnecessarily. This increases cache hit rates but requires more sophisticated hashing logic.

#### When to Use This Pattern
This pattern is most valuable in **large-scale knowledge bases with significant content overlap**, like technical documentation, legal repositories, or academic paper collections. It's also ideal when you **frequently re-index or update your corpus** and want to avoid paying the full reprocessing cost every time.

It's less valuable in **small corpora or highly unique content** where there's minimal chunk repetition. In those cases, the caching overhead might exceed the benefits. And it's challenging in **rapidly evolving systems** where your processing pipeline changes frequently, because the invalidation and migration complexity can overwhelm your team.

> Ask the audience: "How many of you are processing documents with overlapping content, like API documentation or legal boilerplate?"

With that deep understanding of Chunk-Level Cache, let's move on to Pattern 6, which shifts our focus to the personalization layer and conversation continuity.`
        }
      ]
    },
    {
      id: 'pattern-6',
      title: 'Pattern 6: Session Conversation Cache',
      slides: [
        {
          id: 13,
          title: 'Pattern 6: Session Conversation Cache',
          icon: { name: 'duo-message-square' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>What is Cached</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
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
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Cache Key</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
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
                    <SvgIcon iconName="duo-lock" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Cache Storage Location</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Redis/KeyDB with encryption</li>
                      <li>Optional archival DB for long-lived sessions</li>
                      <li>Secure storage with encryption at rest</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-clock" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Expiration Strategy / TTL</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Sliding TTL (15–60 min active)</li>
                      <li>Archive for 7–30 days</li>
                      <li>Purge on logout/PII request</li>
                      <li>Reset on session boundaries</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d486b',
          notes: ''
        },
        {
          id: 14,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Strengths</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Maintains continuity across conversation turns</li>
                    <li>Reduces token usage via summaries</li>
                    <li>Lower time-to-first-token (TTFT) on resume</li>
                    <li>Improves user experience with context retention</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Limitations</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Privacy and security obligations</li>
                    <li>Memory growth over conversation time</li>
                    <li>Potential for poisoning and abuse risk</li>
                    <li>Requires careful PII management</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d486b',
          notes: ''
        }
      ]
    },
    {
      id: 'pattern-7',
      title: 'Pattern 7: User Profile / Preference Cache',
      slides: [
        {
          id: 15,
          title: 'Pattern 7: User Profile / Preference Cache',
          icon: { name: 'duo-user' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>What is Cached</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Compact user profile data (embeddings, preferences)</li>
                      <li>Style, tone, tools preferences, timezone settings</li>
                      <li>Domain defaults and personalization parameters</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Cache Key</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
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
                    <SvgIcon iconName="duo-shield-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Cache Storage Location</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Secure KV/DB (Redis + KMS)</li>
                      <li>DynamoDB/Firestore for persistent profiles</li>
                      <li>Encryption at rest required for sensitive data</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-clock" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Expiration Strategy / TTL</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Long TTL with sliding refresh mechanism</li>
                      <li>Invalidate on explicit profile updates</li>
                      <li>Purge after extended user inactivity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#211d6b',
          notes: ''
        },
        {
          id: 16,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Strengths</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Personalization without re-sending long profiles</li>
                    <li>Significant cost savings per request</li>
                    <li>Enables consistent user experiences across sessions</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Limitations</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Privacy/GDPR compliance concerns</li>
                    <li>Risk of stale preferences affecting responses</li>
                    <li>Cold-start issues for new users without profiles</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#211d6b',
          notes: ''
        }
      ]
    },
    {
      id: 'pattern-8',
      title: 'Pattern 8: Token-Level KV Cache',
      slides: [
        {
          id: 17,
          title: 'Pattern 8: Token-Level KV Cache',
          icon: { name: 'duo-brain-circuit' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>What is Cached</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Transformer attention K/V tensors per layer for prompt tokens</li>
                      <li>Intermediate computation results of attention mechanisms</li>
                      <li>Layer-specific key-value pairs for each processed token</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Cache Key</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
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
                    <SvgIcon iconName="duo-microchip" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Cache Storage Location</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>GPU VRAM (primary storage for fast access)</li>
                      <li>Offload to CPU RAM or NVMe when needed</li>
                      <li>Managed by PagedAttention, vLLM, or TensorRT-LLM</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-clock" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Expiration Strategy / TTL</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Lives for the duration of request/session</li>
                      <li>LRU/LFU eviction under memory pressure</li>
                      <li>Freed upon completion or context window overflow</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#5a1d6b',
          notes: ''
        },
        {
          id: 18,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Strengths</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Massive speedups in decoding (3-10x faster generation)</li>
                    <li>Reduces re-computation of attention for prompt tokens</li>
                    <li>Improves throughput and reduces inference costs</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Limitations</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>High VRAM footprint (can consume gigabytes)</li>
                    <li>Memory fragmentation/compaction challenges</li>
                    <li>Strong coupling with model version and architecture</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#5a1d6b',
          notes: ''
        }
      ]
    },
    {
      id: 'pattern-9',
      title: 'Pattern 9: Model Output Logit Cache',
      slides: [
        {
          id: 19,
          title: 'Pattern 9: Model Output Logit Cache',
          icon: { name: 'duo-chart-line' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>What is Cached</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Next-token logits/probabilities for frequent prefixes</li>
                      <li>Optional top-k most likely tokens only</li>
                      <li>Output probability distributions at the token level</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Cache Key</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
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
                    <SvgIcon iconName="duo-floppy-disk" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Cache Storage Location</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>CPU RAM or Redis for fast access</li>
                      <li>Map files for large lookup tables</li>
                      <li>Regional deployment for lower latency</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-clock" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Expiration Strategy / TTL</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Short TTL (minutes–hours)</li>
                      <li>Purge on model/quantization change</li>
                      <li>Frequency-based eviction for memory management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d54',
          notes: ''
        },
        {
          id: 20,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Strengths</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Faster TTFT for common prompts/prefixes</li>
                    <li>Useful for rescoring, safety passes, or retry scenarios</li>
                    <li>Helps maintain consistent outputs across retries</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Limitations</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Large memory footprint for many prefixes</li>
                    <li>Exact-match sensitive; limited hit rate</li>
                    <li>Privacy concerns with caching user-specific content</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d54',
          notes: ''
        }
      ]
    },
    {
      id: 'pattern-10',
      title: 'Pattern 10: Semantic Similarity Cache',
      slides: [
        {
          id: 21,
          title: 'Pattern 10: Semantic Similarity Cache',
          icon: { name: 'duo-circle-nodes' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>What is Cached</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Intent embeddings mapped to prior answers/contexts</li>
                      <li>Thresholded ANN lookup for similar queries</li>
                      <li>Similar question embeddings with confidence scores</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Cache Key</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
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
                    <SvgIcon iconName="duo-floppy-disk" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Cache Storage Location</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Vector DB (FAISS/Milvus/pgvector/RedisVL)</li>
                      <li>Spill to disk for large datasets</li>
                      <li>Distributed index for high-volume systems</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-clock" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Expiration Strategy / TTL</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>1–14 days with recency weighting</li>
                      <li>Invalidate when sources change</li>
                      <li>Progressive aging for less frequently accessed entries</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: ''
        },
        {
          id: 22,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Strengths</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Catches paraphrases and varied question forms</li>
                    <li>Higher savings compared to exact-match caches</li>
                    <li>Robust to wording variations and typos</li>
                    <li>Can work across languages with multilingual embeddings</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Limitations</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Requires careful threshold tuning</li>
                    <li>Potential for false hits/misses requiring quality monitoring</li>
                    <li>Index maintenance and optimization overhead</li>
                    <li>Explainability challenges for cache decisions</li>
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
      id: 'pattern-11',
      title: 'Pattern 11: Ranked Results Cache (Post Re-Ranker)',
      slides: [
        {
          id: 23,
          title: 'Pattern 11: Ranked Results Cache (Post Re-Ranker)',
          icon: { name: 'duo-ranking-star' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>What is Cached</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Final reranked candidate list with scores</li>
                      <li>Cross-encoder or LLM re-ranker results</li>
                      <li>Ordered document list with relevance scores</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Cache Key</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
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
                    <SvgIcon iconName="duo-floppy-disk" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Cache Storage Location</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Redis with TTL support</li>
                      <li>Region-scoped to align with retrieval services</li>
                      <li>Optional compression for large candidate lists</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-clock" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Expiration Strategy / TTL</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Short TTL (5–30 minutes)</li>
                      <li>Purge when candidate document set changes</li>
                      <li>Event-based invalidation on reranker model updates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b5c',
          notes: ''
        },
        {
          id: 24,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Strengths</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Avoids expensive re-ranking computation</li>
                    <li>Significantly lowers end-to-end latency</li>
                    <li>Reduces load on expensive cross-encoder models</li>
                    <li>Works well for high-frequency similar queries</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Limitations</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Results become stale if retrieval patterns shift</li>
                    <li>Filter explosion can lead to low cache hit rates</li>
                    <li>High sensitivity to reranker model version changes</li>
                    <li>Requires consistent candidate set between cache/live</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b5c',
          notes: ''
        }
      ]
    },
    {
      id: 'pattern-12',
      title: 'Pattern 12: Summarization Cache',
      slides: [
        {
          id: 25,
          title: 'Pattern 12: Summarization Cache',
          icon: { name: 'duo-compress' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>What is Cached</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Multi-granularity summaries (doc/section/chunk)</li>
                      <li>Conversation summaries and embeddings</li>
                      <li>Abstract representations of longer content</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Cache Key</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
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
                    <SvgIcon iconName="duo-floppy-disk" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Cache Storage Location</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Object store + metadata index (SQL/NoSQL)</li>
                      <li>Redis for hot (frequently accessed) summaries</li>
                      <li>Distributed storage for durability and scale</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-clock" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Expiration Strategy / TTL</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Long TTL (weeks to months)</li>
                      <li>Event-driven invalidation on source document updates</li>
                      <li>Periodic refresh for high-importance content</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#371d6b',
          notes: ''
        },
        {
          id: 26,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Strengths</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Reused across multiple different queries</li>
                    <li>Dramatically reduces context tokens in RAG</li>
                    <li>Speeds up answer generation with pre-processed insights</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Limitations</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Storage overhead for multiple granularity levels</li>
                    <li>Summary quality variance and potential drift over time</li>
                    <li>Requires strong governance and version tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#371d6b',
          notes: ''
        }
      ]
    },
    {
      id: 'pattern-13',
      title: 'Pattern 13: Final Answer Cache with TTL',
      slides: [
        {
          id: 27,
          title: 'Pattern 13: Final Answer Cache with TTL',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>What is Cached</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Exact query → final answer mapping</li>
                      <li>Optionally citations/links to sources</li>
                      <li>Typically using temperature=0 for consistency</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Cache Key</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
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
                    <SvgIcon iconName="duo-floppy-disk" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Cache Storage Location</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Redis for high throughput applications</li>
                      <li>CDN/edge caching for public endpoints</li>
                      <li>Encryption required for private user data</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-clock" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Expiration Strategy / TTL</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <ul>
                      <li>Minutes to days based on data volatility</li>
                      <li>Manual purge hooks for emergency hotfixes</li>
                      <li>Shorter TTL for rapidly changing information</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d5b',
          notes: ''
        },
        {
          id: 28,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Strengths</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Easiest caching pattern to implement</li>
                    <li>Huge latency win on frequently asked questions</li>
                    <li>Excellent for FAQs and common queries</li>
                    <li>Reduces overall token usage significantly</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                    <strong>Limitations</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Low hit rate on long-tail queries</li>
                    <li>Brittle to small wording differences in queries</li>
                    <li>Freshness and consistency risks over time</li>
                    <li>Requires robust invalidation mechanism</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d5b',
          notes: ''
        }
      ]
    },
    {
      id: 'summary',
      title: 'Key Takeaways',
      slides: [
        {
          id: 29,
          title: 'Key Takeaways',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6', textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(97, 218, 251, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #61dafb' }}>
                  <div style={{ color: '#61dafb', marginBottom: '0.8rem' }}>
                    <SvgIcon iconName="duo-network-wired" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Layer Your Caches Strategically</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>
                    Input (embeddings/prompts), retrieval (results/ranking), generation (KV/logits), memory (session/user), outputs (answers/summaries) — each layer has distinct benefits and implementation patterns.
                  </div>
                </div>

                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #98c379' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.8rem' }}>
                    <SvgIcon iconName="duo-key" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Nail the Cache Keys</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>
                    Include versions, model IDs, corpus snapshot IDs, filters, and decoding params in cache keys to avoid inconsistencies and ensure correct cache hits.
                  </div>
                </div>

                <div style={{ background: 'rgba(229, 192, 123, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
                  <div style={{ color: '#e5c07b', marginBottom: '0.8rem' }}>
                    <SvgIcon iconName="duo-clock" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Freshness First</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>
                    Combine TTL-based expiration with event-based invalidation on corpus or template updates to balance performance with data freshness requirements.
                  </div>
                </div>

                <div style={{ background: 'rgba(198, 120, 221, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #c678dd' }}>
                  <div style={{ color: '#c678dd', marginBottom: '0.8rem' }}>
                    <SvgIcon iconName="duo-gauge-high" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Measure Relentlessly</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>
                    Hit rate × miss cost → savings; track p95 latency improvements and staleness incidents to continuously optimize your cache strategies.
                  </div>
                </div>

                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #e06c75' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.8rem' }}>
                    <SvgIcon iconName="duo-rocket" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Start Simple, Scale Gradually</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>
                    Begin with exact-match and retrieval caches for early wins; add semantic similarity and KV/logit layers as your system matures and scale grows.
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b5c',
          notes: ''
        }
      ]
    }
  ]
};

