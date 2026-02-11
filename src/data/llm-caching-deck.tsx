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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>What is Cached</strong>
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
            </div>
          ),
          backgroundColor: '#2d6b1d',
          notes: ''
        },
        {
          id: 8,
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
            </div>
          ),
          backgroundColor: '#2d6b1d',
          notes: ''
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>What is Cached</strong>
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
            </div>
          ),
          backgroundColor: '#1d6b42',
          notes: ''
        },
        {
          id: 10,
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
            </div>
          ),
          backgroundColor: '#1d6b42',
          notes: ''
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>What is Cached</strong>
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
            </div>
          ),
          backgroundColor: '#1d616b',
          notes: ''
        },
        {
          id: 12,
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
            </div>
          ),
          backgroundColor: '#1d616b',
          notes: ''
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

