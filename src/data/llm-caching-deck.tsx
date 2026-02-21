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
                <div style={{ fontSize: '2rem', marginBottom: '1rem', color: '#61dafb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <SvgIcon iconName="duo-microchip" sizeName="2x" style={{ marginRight: '1rem' }} darkModeInvert={true} />
                  LLM CACHING PATTERNS
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.3}>
                <div style={{ fontSize: '1.2rem', color: '#e5c07b', marginBottom: '1rem' }}>
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
[cheerfully] Welcome everyone! [excited] Today we're going to explore one of the most practical topics in production **LLM 👉 'el-el-em'** systems: caching patterns that can dramatically reduce both your costs and latency.

#### Why This Matters
[conversational] Building **LLM systems** is expensive. Every API call costs money, and every millisecond of latency impacts user experience. [pleased] But here's the good news: most applications show significant repetition in queries, retrieval operations, and even generation patterns. [confidently] That's where intelligent caching comes in.

#### What We'll Cover Today
[energetic] We're going to walk through **thirteen proven caching patterns** that address different layers of your LLM stack. From simple query embedding caches all the way to sophisticated partial response reconstruction, each pattern solves a specific problem and brings measurable savings.

#### The Journey Ahead
[storytelling] Think of caching as a layered strategy. You have the **input layer** where queries come in, the **retrieval layer** where you search your knowledge base, the **generation layer** where the model produces responses, and the **personalization layer** where you tailor outputs to individual users. Each layer has its own caching opportunities.

> Ask the audience: [warmly] "How many of you are currently running LLM applications in production?"

[confidently] These patterns aren't just theoretical. They're battle-tested approaches used by companies processing millions of LLM requests daily. By the end of this presentation, you'll understand exactly which patterns to apply and when.

[inspiringly] Let's begin by understanding why caching is so critical for LLM systems.`
        },
        {
          id: 2,
          title: 'Why Caching Matters in LLM Systems',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#e06c75', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-chart-line" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                      <strong style={{ fontSize: '2rem' }}>Cost Drivers</strong>
                    </div>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Tokenization, embedding generation, vector search operations</li>
                      <li>Re-ranking of retrieved content</li>
                      <li>Generation tokens, prompt processing, and tool calls</li>
                    </ul>
                  </div>

                  <div>
                    <div style={{ color: '#98c379', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-rocket" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
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
                    <div style={{ color: '#61dafb', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-network-wired" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
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
                    <div style={{ color: '#c678dd', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-gauge-high" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
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
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
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
[conversational] Now let's dive into why caching is absolutely critical when you're building production LLM systems.

#### The Cost Reality
[seriously] Let's talk numbers first. Every time your system processes a query, you're paying for multiple expensive operations. [lecture] **Tokenization** breaks down your text into tokens. **Embedding generation** converts text into high-dimensional vectors, which requires running neural networks. **Vector search** operations scan through potentially millions of vectors. Then there's **re-ranking** of retrieved content, which often involves another model call. And finally, the big one: **generation tokens** from the LLM itself, along with prompt processing and any tool calls.

[concerned] Think about a typical RAG 👉 'rag' system handling ten thousand queries per day. If even thirty percent of those queries are repeated or very similar, you're literally burning money on redundant computations. [pleased] That's where intelligent caching becomes your best friend.

#### What Caching Actually Saves
[confidently] Caching eliminates three major bottlenecks. First, you skip **repeated preprocessing and tokenization**. These steps might seem fast, but they add up at scale. Second, you avoid **redundant retrieval operations**. [storytelling] Why search your vector database again when you already found the best results for this query yesterday? [excited] Third, and perhaps most importantly, caching dramatically lowers your **TTFT** 👉 'tee-tee-eff-tee', which stands for **time to first token**, and your **tail latency**. Users notice when responses are slow, and caching can turn a three-second response into a three-hundred-millisecond response.

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

[lecture] Caching isn't one-size-fits-all. We work with **four distinct layers**. At the top, you have your **edge or application cache** that stores complete responses and templates. This is your first line of defense. Moving deeper, there's the **vector or index cache** that holds retrieval results. [conversational] Then you get into the model itself with **runtime caches** like KV caches 👉 'kay-vee' and logit caches that make generation faster. Finally, at the personalization layer, you have **user and session memory** that maintains contextual state across conversations.

#### Measuring Success
How do you know if your caching strategy is working? [confidently] Four key metrics tell the story. Your **cache hit rate** shows what percentage of requests are served from cache, and the **miss penalty cost** shows how expensive it is when you don't hit cache. **P95 latency** 👉 'pee ninety-five' improvements demonstrate the user experience impact. You need to balance **freshness SLAs** 👉 'service level agreements' because some data needs to be current. And finally, track your **storage cost versus compute savings ratio** to ensure caching is economically viable.

#### The Guiding Principles
[seriously] Three principles govern effective caching. Use **stable cache keys with version tags** so you can invalidate when needed. Find the right balance between **TTLs** 👉 'tee-tee-els', or time-to-live values, and your invalidation strategies. [firmly] And never forget **privacy and security** when you're caching sensitive data. A leaked cache entry with personal information is a disaster waiting to happen.

[inspiringly] Now that we understand why caching matters, let's explore the first of our thirteen patterns.`
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
              <div style={{ marginBottom: '20px' }}></div>
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
[confidently] Here's our first caching pattern: **Query Embedding Cache**. [pleased] This is one of the most straightforward yet impactful patterns you can implement in your LLM system.

#### What Gets Cached
[lecture] In this pattern, we cache **query embedding vectors and their normalization artifacts**. [conversational] Think about what happens every time a user asks a question. Your system takes that text, normalizes it, and then runs it through an embedding model to convert it into a high-dimensional vector. [seriously] This embedding step isn't free. It requires a forward pass through a neural network, which takes time and costs money or compute resources.

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

[conversational] When a query comes in, we normalize it first, then check the cache. [pleased] If we get a cache hit, we instantly return the embedding without touching the embedding model. On a miss, we generate the embedding, store it in the cache, and then return it. [confidently] Simple flow, massive impact.

#### The Cache Key Strategy
[seriously] The cache key is critical here. We use \\\`hash(normalized_query + embedding_model + version + dim)\\\`. Notice what we're including: the normalized query text itself, obviously, but also the embedding model name, its version, and the output dimensionality. [cautiously] Why all this extra information? Because embeddings from different models or different versions aren't interchangeable. If you upgrade your embedding model and don't include the version in the key, you'll get cache hits with stale embeddings from the old model. [concerned] That leads to subtle quality degradation that's hard to debug.

#### Storage Architecture
[lecture] We store these embeddings in **Redis 👉 'red-iss' or KeyDB 👉 'key-dee-bee'** for the hot cache. These are in-memory stores that give you microsecond-level latency. For rarely-accessed embeddings, you can optionally tier down to **S3 👉 'ess-three'** or another object store. [confidently] The key is co-locating your cache per region, keeping it close to your application servers to minimize network latency.

#### Time-to-Live Configuration
We use a **long TTL 👉 'tee-tee-el', typically seven to thirty days**. [reassuringly] Embeddings are deterministic. For the same input and model version, you'll always get the same output, so they're safe to cache for extended periods. When you need to invalidate, you do a **version-bump** in your cache key rather than expiring all entries. You also want **LFU 👉 'el-eff-you' or LRU 👉 'el-are-you'** eviction policies. LFU is least frequently used, and LRU is least recently used. [conversational] These ensure your cache doesn't fill up with one-time queries.

#### When This Pattern Shines
[pleased] The **strengths** are compelling. You completely avoid recomputing embeddings for identical queries. [storytelling] If you're running a customer support chatbot, you'll see the same questions repeatedly. [enthusiastically] Your **hit rate for frequently asked questions** will be excellent, often above eighty percent. And since embeddings are deterministic, you get **consistent quality** with zero variation.

#### The Limitations
[cautiously] But there are trade-offs. Embeddings are **memory intensive**. A single embedding from a model like **text-embedding-3-large 👉 'text embedding three large'** can be three thousand dimensions of float32 values. [seriously] That's twelve kilobytes per embedding. At scale, this adds up. You also have **strict version coupling**. Every model update requires careful cache key management. [firmly] And you must be extremely careful with **text normalization and PII 👉 'pee-eye-eye'**, which is personally identifiable information. If your normalization is inconsistent, you'll get cache misses on queries that should hit. And if you cache queries containing sensitive data, you create a security risk.

[conversational] Let's look at the strengths and limitations in more detail on the next slide.`
        },
        {
          id: 4,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
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
[conversational] Let's take a closer look at when Query Embedding Cache works brilliantly and when you need to be cautious.

#### The Good Stuff
[pleased] On the **strengths** side, the value proposition is crystal clear. You're **avoiding expensive embedding computation** for queries you've already seen. [storytelling] Think about the math here. If generating an embedding takes fifty milliseconds and costs you point-zero-zero-one cents, and you're processing a million queries per month with a forty percent hit rate, that's four hundred thousand avoided computations. [enthusiastically] The savings in both latency and cost add up fast.

[excited] The **hit rate for frequently asked questions** is where this really shines. In customer support, documentation search, or any domain with common queries, you'll see the same questions over and over. Your cache hit rate can easily exceed seventy to eighty percent for these workloads. [confidently] And because embeddings are deterministic functions of the input, you get **perfect quality consistency**. There's zero risk of quality degradation from caching.

#### The Trade-offs
[cautiously] Now for the **limitations**. First, embeddings are **memory intensive**. [lecture] Modern embedding models produce high-dimensional vectors. **Text-embedding-3-large 👉 'text embedding three large'**, for example, outputs three-thousand-dimensional vectors. Each dimension is a thirty-two-bit float, so that's twelve kilobytes per cached embedding. [seriously] If you're caching a million embeddings, that's twelve gigabytes of memory just for the vectors themselves, not counting the cache metadata and keys.

[concerned] Second, there's **strict version coupling with your embedding model**. When you update your embedding model, all your cached embeddings become incompatible. You can't mix embeddings from different model versions in your similarity searches. This means you need to carefully manage cache keys with version tags and plan for cache warming when you upgrade models.

[firmly] Third, you need to handle **text normalization and PII 👉 'pee-eye-eye', or personally identifiable information, very carefully**. If your normalization is inconsistent, like sometimes lowercasing and sometimes not, or varying how you handle punctuation, you'll get cache misses on queries that should be hits. [seriously] And if you're caching the actual query text as part of your cache key or value, and that text contains personal information like names, emails, or addresses, you've now stored sensitive data that might be subject to privacy regulations. You need proper data governance around your caching layer.

> Ask the audience: [warmly] "How many of you are currently caching embeddings in your systems?"

[inspiringly] With those trade-offs in mind, let's move on to Pattern 2, which caches at a different layer of the stack.`
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
              <div style={{ marginBottom: '20px' }}></div>
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
[confidently] Now let's move up one layer in the stack to **Pattern 2: Retrieval Results Cache**. [conversational] While the first pattern cached embeddings, this pattern caches the actual results from your vector search operations.

#### What Gets Cached
[lecture] In this pattern, we cache **the output of vector search operations**. Specifically, we're storing the **top-k document IDs, their similarity scores, and optionally document snippets or previews**. [storytelling] Think about what happens when you run a semantic search query. You generate an embedding, that embedding gets compared against potentially millions of vectors in your index, you compute similarity scores, sort them, apply filters, and return the top results. [seriously] This entire vector search operation is computationally expensive and time-consuming.

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

[conversational] Here's the flow. Query comes in, gets embedded, then we check the cache. [pleased] On a **cache hit**, we instantly return the document IDs and scores without touching the vector database at all. On a **cache miss**, we perform the full vector search, store those results in the cache, and then return them. [confidently] The key insight is that vector search is often one of the most expensive operations in your retrieval pipeline. By caching these results, you can skip that entire computation.

#### The Cache Key Strategy
[seriously] The cache key here is more complex than the embedding cache. We use \\\`hash(normalized_query or quantized_embedding + index_snapshot_id + k + filters)\\\`. Let me break this down. [lecture] You can either hash the normalized query text or a **quantized version of the embedding** to save space. [firmly] The critical part is including the **index_snapshot_id 👉 'index snapshot I-D'**. This tracks the version of your vector index. Why is this essential? [cautiously] Because when you add new documents or update existing ones, the search results for the same query will change. Including the index version ensures you don't serve stale results from before that update.

You also include **k**, which is the number of results requested, and any **filter parameters**. [storytelling] If someone asks for the top five results versus the top ten, those need different cache entries. Same with filters. A query filtered to only engineering documents versus all documents should produce different cached results.

#### Storage Architecture
[lecture] For storage, we use **Redis 👉 'red-iss' or Memcached 👉 'mem-cached'** for fast in-memory access. These stores give you sub-millisecond latency, which is crucial because you're trying to avoid a vector search that might take fifty to two hundred milliseconds. [conversational] For **public FAQs 👉 'frequently asked questions'**, you can optionally push results to **edge caches or CDN 👉 'content delivery network'** layers, getting them even closer to your users. [confidently] The key is **regional deployment**. Deploy your cache in the same region as your vector database to minimize network hops.

#### Time-to-Live Configuration
[cautiously] Notice the TTL 👉 'tee-tee-el' is much **shorter** here than with embeddings. We use **five to sixty minutes** typically. Why so short? [concerned] Because retrieval results become stale quickly. As soon as you update your knowledge base, add new documents, or change existing ones, the cached results are potentially outdated. [lecture] You also implement **event-driven invalidation**. When your knowledge base changes, you proactively purge or invalidate affected cache entries rather than waiting for TTL expiration. This keeps your results fresh while still getting cache benefits for queries that happen repeatedly within short time windows.

#### When This Pattern Shines
[pleased] The **strengths** are powerful. You completely skip expensive vector search operations. [seriously] Vector similarity computation across large indices is resource-intensive, especially with high-dimensional embeddings. [excited] The **latency improvements** can be dramatic. A vector search might take one hundred milliseconds or more. A cache hit takes under one millisecond. [confidently] And the results themselves are **cheap to store**. Unlike embeddings, which are large vectors, you're just storing document IDs, which are typically integers or short strings, plus some floating-point scores.

#### The Limitations
[cautiously] But there are important **trade-offs**. [concerned] First, **results become stale when your corpus changes**. Every document update, addition, or deletion potentially invalidates cached results. You need robust invalidation logic. [disappointed] Second, **filter-specific cache keys can explode your cache size**. If users are applying many different filter combinations, you might end up with low hit rates because each unique filter combination needs its own cache entry. Third, you get **lower hit rates on tail or uncommon queries**. If your users are asking highly diverse questions, you won't see the same queries repeatedly, reducing cache effectiveness. [reassuringly] This pattern works best when you have repeated queries or concentrated query patterns, like customer support with common questions.

[conversational] Let's dive deeper into the strengths and limitations on the next slide.`
        },
        {
          id: 6,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
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
[conversational] Let's examine the Retrieval Results Cache more closely to understand when it delivers exceptional value and where you need to be careful.

#### The Performance Wins
[pleased] On the **strengths** side, this is all about performance and cost optimization. You're **skipping expensive vector search operations**. [lecture] Let me give you some concrete numbers. A typical vector search across a million documents with a seven-hundred-sixty-eight-dimensional embedding might take fifty to one hundred fifty milliseconds, depending on your index structure and whether you're using approximate nearest neighbor algorithms like **HNSW 👉 'H-N-S-W', which stands for hierarchical navigable small world**, or **IVF 👉 'I-V-F', which is inverted file index**. [excited] A cache hit returns those same results in under a millisecond. That's a hundred-x speedup or more.

[enthusiastically] The **latency improvements** translate directly to better user experience. In conversational AI applications, every hundred milliseconds matters. [storytelling] When you're targeting sub-second response times from query to final answer, cutting out a hundred-millisecond vector search is huge. It's the difference between a snappy, responsive system and one that feels sluggish.

[pleased] And the storage is **incredibly cheap compared to raw embeddings**. A cached retrieval result might be ten to twenty document IDs, which are typically four or eight bytes each, plus ten to twenty float scores at four bytes each. That's maybe two hundred bytes total. [confidently] Compare that to caching the full embedding vectors at twelve kilobytes or more. You can cache thousands of retrieval results in the same memory space as a hundred embeddings. This makes the pattern very cost-effective from a resource perspective.

#### The Freshness Challenge
[cautiously] Now for the **limitations**, and this is where things get interesting. [concerned] The biggest challenge is **staleness 👉 'stay-ul-ness'**. Results become stale when your corpus changes. [storytelling] Imagine you're running a documentation search system. A user asks "how do I configure authentication?" and you cache the top ten results. Two hours later, your team publishes a new authentication guide that's more relevant and comprehensive than any existing docs. [disappointed] New users asking the same question should get this new document in their results, but if they hit the cache, they get the old results without the new guide.

[seriously] This is why **event-driven invalidation** is critical. You need to listen for document additions, updates, or deletions and proactively purge affected cache entries. [cautiously] But implementing this correctly is non-trivial. You need to decide which cache entries are affected by a given document change. In some systems, people take a conservative approach and flush the entire cache on any corpus update. In others, they try to selectively invalidate only affected entries, which is more efficient but more complex to implement.

[concerned] Second, **filter-specific cache keys can explode your cache size and fragment your hit rate**. [lecture] Say you're building an internal knowledge base search. Users can filter by department, date range, document type, author, and tags. Each unique combination of filters creates a separate cache key. [disappointed] If users are applying diverse filter combinations, you end up with many cache entries that each get hit rarely. Your cache becomes bloated with low-value entries.

[cautiously] Third, you face **lower hit rates on tail or uncommon queries**. [conversational] This pattern shines when you have high query repetition. Think customer support FAQs, where you see the same hundred questions over and over. Your cache hit rate might be seventy to eighty percent. But in a research assistant tool where users are asking highly specific, diverse questions, your hit rate might drop to ten or twenty percent. [disappointed] At that point, you're paying the memory and operational cost of the cache without getting much benefit.

#### Practical Deployment Considerations
[confidently] In practice, successful deployments of this pattern often combine it with **monitoring and adaptive cache sizing**. You track your hit rate metrics and adjust your cache size and TTL 👉 'tee-tee-el' based on actual usage patterns. [lecture] Some teams use **separate cache tiers** for different query types. They might have a hot cache for common queries with a thirty-minute TTL and a warm cache for less frequent queries with a five-minute TTL. [reassuringly] This lets them optimize for different workload characteristics.

> Ask the audience: [warmly] "Who here is doing RAG 👉 'rag', retrieval-augmented generation, or semantic search in production? Have you tried caching retrieval results?"

[inspiringly] With that understanding of Pattern 2, let's look at our third caching pattern, which operates at yet another layer of the system.`
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
              <div style={{ marginBottom: '20px' }}></div>
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
[confidently] Here's our third caching pattern: **Prompt Template Cache**. [conversational] This pattern operates at a different layer than embeddings or retrieval results. We're caching at the prompt assembly and tokenization stage, right before sending text to the LLM.

#### What Gets Cached
[lecture] In this pattern, we cache **rendered system and instruction templates along with their tokenized IDs**. Let me explain what this means in practice. [conversational] Most LLM applications don't send raw, ad-hoc text to the model. You typically have structured prompt templates with placeholders for dynamic content. [storytelling] Something like: "You are a helpful assistant specializing in {domain}. Answer the following question: {user_question}." The static parts, like "You are a helpful assistant," remain constant across thousands of requests. The dynamic parts, like the domain and user question, change per request.

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

[conversational] When a request comes in with a template ID and variables, we check the cache. [pleased] On a hit, we get back the pre-rendered prompt text or, even better, the pre-tokenized token IDs ready to send to the model. On a miss, we render the template, tokenize it if needed, store it in the cache, and return it. [confidently] The beauty here is that we're avoiding repetitive template rendering and tokenization operations.

[lecture] We also cache **pre-processed templates per model and locale**. Different models may require different prompt formats. **GPT-4 👉 'G-P-T four'** and **Claude 👉 'Clawed'** have different instruction-following characteristics, so you might maintain separate template variants. [conversational] Similarly, if you're serving a multilingual application, you have templates in English, Spanish, Japanese, et cetera. Each of these can be pre-rendered and cached separately.

[reassuringly] Finally, we cache **common static prompt components**. Think of these as reusable building blocks. System messages, role definitions, output format instructions. These fragments appear in many different prompts. By caching them, you avoid reprocessing the same text repeatedly.

#### The Cache Key Strategy
[seriously] The cache key here is comprehensive: \\\`template_id + template_version + model_id + locale + formatting_mode + hash(parameters)\\\`. Let's unpack this. [lecture] The \\\`template_id\\\` identifies which template you're using. Maybe you have templates called "customer_support_greeting" or "code_review_analysis." [firmly] The \\\`template_version\\\` is critical. When you update a template, you need to bust the cache. Including the version in the key ensures old cached versions don't get served after an update.

The \\\`model_id\\\` accounts for model-specific formatting. [cautiously] Different models have different tokenizers and different optimal prompt structures. A cached template for **GPT-4** shouldn't be used for **Claude** or **Llama 👉 'Lama', like the animal**. [conversational] The \\\`locale\\\` handles internationalization. Your Spanish template shouldn't be served to English users. And \\\`formatting_mode\\\` covers things like whether you're rendering to plain text, markdown, or some other format.

Finally, you hash all the template parameters together. [lecture] If your template has five placeholders for dynamic content, the hash of those five values becomes part of the key. This means identical parameter sets get cache hits, while different parameter sets get unique entries.

#### Storage Architecture
[confidently] For storage, we use **in-process memory for token IDs**. Tokenized prompts are accessed on every single LLM call, so you want them in the fastest possible storage. That's your application's local memory. [pleased] No network hops, no serialization overhead. Just a hash map lookup and you have your token array.

[conversational] For sharing across service instances, you can use **Redis 👉 'red-iss'**. If you're running multiple instances of your application server, Redis lets them share the same cache. [enthusiastically] One instance renders and caches a template, and other instances can immediately benefit. This is especially valuable in autoscaling environments where new instances spin up frequently.

You also keep templates in **application-level memory for high-access frequency items**. [lecture] Your most common templates, used on every request, stay hot in memory. Less common templates can be fetched from Redis or re-rendered on demand.

#### Time-to-Live Configuration
[conversational] Notice we use a **very long TTL 👉 'tee-tee-el', weeks to months**. [reassuringly] Templates are deterministic. For the same template version, model, locale, and parameters, you'll always get the same output. So there's no reason to expire them frequently. [lecture] Instead, we **invalidate on template update or model switch**. When you deploy a new template version, you explicitly purge or version-bump the cache keys. When you upgrade your model, the model_id in the key changes naturally, so old cached entries become irrelevant.

[confidently] This is **version-based cache invalidation**, not time-based. You're explicitly controlling cache lifetime based on semantic changes to your system, not arbitrary time windows.

#### When This Pattern Shines
[pleased] The **strengths** are subtle but valuable. You get **faster prompt assembly and tokenization**. [lecture] Template rendering involves string interpolation, validation, and potentially complex logic. Tokenization requires running your text through the model's tokenizer, which can take a few milliseconds. [confidently] Caching eliminates this overhead. It's not huge, maybe five to twenty milliseconds saved per request, but it adds up at scale.

[pleased] You also get **consistent outputs across service instances**. All your servers use the same cached templates, so there's no risk of discrepancies from template logic bugs or race conditions during updates.

[reassuringly] Finally, there's **low implementation complexity**. This is one of the simpler caching patterns to implement. You're just caching strings or token arrays. No complex invalidation logic or coordination required.

#### The Limitations
[cautiously] But there are trade-offs. [disappointed] The **absolute savings per request are modest**. Unlike caching the LLM call itself, which might save hundreds of milliseconds and significant cost, caching templates saves you maybe ten milliseconds and a tiny fraction of compute cost. [conversational] The value comes from applying it to millions of requests.

[concerned] You face **per-model differences requiring separate caches**. Every model you support multiplies your cache size. If you support five models and three locales, that's fifteen separate cache variants for each template. This increases memory footprint and complexity.

[seriously] And you need to **manage multi-locale variants**. Internationalization adds significant complexity. You need to track which template versions exist in which languages, ensure they're kept in sync, and handle fallbacks gracefully when a translation is missing.

[conversational] Let's examine the strengths and limitations more closely on the next slide.`
        },
        {
          id: 8,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
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
[conversational] Let's dive deeper into the Prompt Template Cache to understand where it delivers real value and where you need to temper your expectations.

#### The Efficiency Gains
[pleased] On the **strengths** side, the primary benefit is **faster prompt assembly and tokenization**. [lecture] Let me give you concrete numbers to make this tangible. Template rendering typically involves string interpolation, validation checks, and potentially some conditional logic. This might take one to five milliseconds depending on template complexity. Tokenization adds another five to fifteen milliseconds depending on the tokenizer and prompt length. [confidently] That's up to twenty milliseconds you're saving per request.

[storytelling] Now, twenty milliseconds doesn't sound like much. But let's do the math. If you're processing ten thousand requests per hour, that's two hundred thousand milliseconds saved per hour, which is over three minutes of compute time. [enthusiastically] At a million requests per day, you're saving over five hours of compute time daily. The savings accumulate. [seriously] And in latency-sensitive applications where you're targeting sub-second end-to-end response times, every millisecond counts.

[pleased] The second strength is **consistent outputs across service instances**. When you cache templates centrally in **Redis 👉 'red-iss'** or share them across your application instances, every server is working from the same rendered templates. [confidently] This eliminates a class of bugs where different servers might render templates slightly differently due to race conditions during deployments or configuration drift. You get deterministic behavior across your entire fleet.

[reassuringly] Third, this pattern has **low implementation complexity**. It's one of the simpler caching strategies to implement. You're caching strings or token arrays. The cache key is straightforward. There's no complex invalidation logic beyond version bumping when you update templates. You don't need to worry about staleness in the way you do with retrieval results or embeddings. Templates are deterministic, so once cached, they're valid until you explicitly change them.

#### The Reality Check
[cautiously] Now for the **limitations**, and this is where you need to be realistic about what this pattern can and cannot do. [disappointed] First, the **absolute savings per request are modest**. Unlike caching the actual LLM call, which might save you five hundred milliseconds of latency and five cents of cost, caching templates saves you maybe ten to twenty milliseconds and a fraction of a cent. [conversational] The value comes from volume. This pattern makes sense when you're operating at scale, handling thousands or millions of requests. For a small application with a hundred requests per day, the engineering effort to implement template caching might not be justified.

[concerned] Second, **per-model differences require separate caches**. [lecture] Every model you support multiplies your cache footprint. **GPT-4 👉 'G-P-T four'**, **Claude 👉 'Clawed'**, **Llama 👉 'Lama'**, **Gemini 👉 'Gem-in-eye'**—each has different tokenizers and optimal prompt formats. [seriously] Your cache needs separate entries for each model variant. If you support five models, three locales, and two formatting modes, that's thirty separate cache variants for each template. This increases memory usage and operational complexity.

#### The Internationalization Challenge
[cautiously] The third limitation is **managing multi-locale variants**. [concerned] Internationalization adds significant complexity. You need a workflow to ensure that when you update a template in English, corresponding updates are made to Spanish, French, Japanese, and all other supported languages. You need to track which translations are up to date and which are stale. You need fallback logic for when a template doesn't exist in the requested locale.

[lecture] In practice, many teams implement a **template versioning system** where each template has a version number, and each locale of that template is tracked separately. When you update the English template from version three to version four, the Spanish and French versions remain at version three until translators update them. [cautiously] Your system needs to handle this gracefully, either falling back to the previous version or showing a warning that translations are pending.

#### Practical Deployment Patterns
[confidently] Successful deployments of this pattern often use **tiered caching**. Your most frequently used templates live in in-process memory for maximum speed. Less common templates are fetched from **Redis** or re-rendered on demand. [conversational] You also implement **prewarming strategies**, where you proactively render and cache common templates during deployment rather than waiting for the first user request to trigger caching.

[pleased] Some teams also use **template composition**, breaking large templates into reusable fragments. You cache these fragments independently and assemble them as needed. This reduces cache size because common fragments are stored once and reused across multiple templates.

#### When to Use This Pattern
[confidently] This pattern is most valuable in **high-throughput systems where template rendering and tokenization overhead adds up**. [storytelling] If you're running a customer service chatbot handling thousands of conversations simultaneously, or a code generation tool serving millions of API requests, the accumulated savings justify the implementation effort.

[conversational] It's less valuable in **low-volume applications or research prototypes** where you're iterating rapidly on prompts. In those cases, the caching overhead might exceed the benefits.

> Ask the audience: [warmly] "How many of you are using structured prompt templates rather than ad-hoc string formatting in your LLM applications?"

[inspiringly] With that understanding of Pattern 3, let's move on to Pattern 4, which caches at yet another critical layer: the final generated answers.`
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
              <div style={{ marginBottom: '20px' }}></div>
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
[cheerfully] Welcome to Pattern 4, the **RAG Answer Cache** 👉 'rag answer cache'. [excited] This is where we cache at the highest level of abstraction: the complete generated answers from your LLM, including all citations and context. [conversational] While the previous patterns cached individual components like embeddings or retrieval results, this pattern caches the final output that your users actually see.

#### What Gets Cached
[lecture] In this pattern, we cache the **final LLM answer with citations, conditioned on the query**. This is the complete response that your RAG 👉 'rag' system generates after retrieving context and prompting the model. [storytelling] Think of it as caching the entire output of your RAG pipeline. When a user asks "What is our refund policy?" your system retrieves relevant documents from your knowledge base, constructs a prompt with that context, generates an answer from the LLM, and adds citations pointing back to source documents. [confidently] All of that, the complete package, gets cached.

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

[conversational] The flow is elegant. A query comes in, you generate or retrieve its embedding, and perform a **similarity search** against previously cached queries. [excited] Here's where it gets interesting: instead of checking for exact matches like Pattern 1, this pattern uses **semantic similarity**. [lecture] If the similarity score is above your threshold, maybe zero-point-nine on a cosine similarity scale, you return the cached response. If it's below threshold, you generate a new response, store it with its query embedding, and return it.

We're caching **complete generated responses including the retrieved context set**. [seriously] This means not just the answer text, but metadata about which documents were retrieved and used. This is crucial for debugging and for cache invalidation. [storytelling] If document seventeen in your knowledge base gets updated, you can invalidate all cached answers that referenced it.

[confidently] We also cache the **full response with source document references**. Citations are part of the value. [firmly] Your users need to know where information came from, especially in domains like legal, medical, or financial services where trustworthiness is critical.

#### The Semantic Similarity Advantage
[enthusiastically] This is fundamentally different from exact-match caching. [storytelling] Consider two queries: "How's the weather today?" and "What's it like outside right now?" They're phrased differently, but they're semantically identical. [pleased] With semantic caching, both queries would match the same cached answer because their embeddings are nearly identical in vector space. This dramatically increases your cache hit rate compared to exact-match approaches.

[cautiously] However, it also introduces complexity. You need to choose a **similarity threshold** carefully. [concerned] Set it too high, like zero-point-nine-nine, and you'll only match near-exact duplicates, defeating the purpose. Set it too low, like zero-point-seven, and you risk serving cached answers for queries that are similar but not identical, leading to incorrect or irrelevant responses.

#### The Cache Key Strategy
[lecture] The cache key here is comprehensive: \\\`hash(query_norm + context_doc_ids/hashes) + prompt_version + model + decoding_params\\\`. Let's break this down. The \\\`query_norm\\\` is your normalized query text. We normalize to handle variations in capitalization, whitespace, and punctuation. [seriously] The \\\`context_doc_ids\\\` or \\\`context_doc_hashes\\\` capture which documents were retrieved and used in generating the answer. This is critical because the same query with different context should produce different answers.

[conversational] The \\\`prompt_version\\\` tracks changes to your prompt template. If you update your system prompt or instruction format, you need to invalidate cached answers generated with the old prompt. [lecture] The \\\`model\\\` parameter is obvious: answers from **GPT-4 👉 'G-P-T four'** shouldn't be conflated with answers from **Claude 👉 'Clawed'** or **Gemini 👉 'Gem-in-eye'**. And \\\`decoding_params\\\` includes things like temperature, top-p, and other sampling parameters. Different parameters can produce meaningfully different answers even from the same model and prompt.

[firmly] Including **all context sources** in the key is non-negotiable. If you don't, you'll get cache hits when the underlying context has changed, serving stale or incorrect information.

#### Storage Architecture
[lecture] For storage, we use **Redis 👉 'red-iss' for hot cache items**. Complete answers with citations can be several kilobytes each, but they're still small enough to store in memory. [confidently] Redis gives you sub-millisecond access times, which is essential for maintaining low latency.

[conversational] For **high-value queries** that you know will be repeated often, you can use a **durable key-value store or database** like DynamoDB 👉 'die-nam-oh-dee-bee' or PostgreSQL 👉 'post-gres'. [reassuringly] This provides persistence beyond what in-memory stores offer. If your Redis instance crashes, you lose your cache. With a durable store, you don't.

[firmly] Critical point: **encrypt if sensitive data is included**. [seriously] Unlike embedding vectors, which are opaque, cached answers contain readable text. If that text includes personal information, financial data, or other sensitive content, you must encrypt it at rest. This adds overhead but is non-negotiable for compliance with regulations like **GDPR 👉 'gee-dee-pee-are'** or **HIPAA 👉 'hip-pa'**.

#### Time-to-Live Configuration
[lecture] We use a **medium TTL 👉 'tee-tee-el', typically one to seven days**. This is shorter than embedding caches but longer than retrieval result caches. [conversational] Why? Because answers reference specific content that may change, but they're expensive to regenerate. You want to balance freshness with cost savings.

[seriously] More importantly, you implement **event-based invalidation on any source document change**. If document one-hundred-twenty in your knowledge base gets updated, you need to invalidate all cached answers that cited that document. [cautiously] This requires maintaining an index mapping from document IDs to cached answer keys. It's additional complexity, but it's essential for correctness.

[lecture] You also need **content-dependent staleness policies**. Some answers are time-sensitive. [storytelling] If a user asks "What's our current promotion?" the answer might change weekly. Other answers are stable. "What's the boiling point of water?" won't change. [conversational] Your caching system should understand these distinctions, either through metadata tags or heuristics.

#### When This Pattern Shines
[pleased] The **strengths** are substantial. [excited] You get **large cost and latency savings** by avoiding expensive LLM inference calls. [lecture] Generating an answer might cost you a few cents and take two to three seconds. Serving from cache costs fractions of a cent and takes milliseconds. [enthusiastically] At scale, this adds up to thousands or tens of thousands of dollars saved monthly.

[pleased] This pattern is **ideal for FAQs and static knowledge domains**. [storytelling] If you're building a customer support bot for a SaaS product, many queries will be variations of the same questions: "How do I reset my password?" "What payment methods do you accept?" "Where's my order?" [confidently] These questions don't change frequently, and caching their answers is extremely valuable.

You **eliminate repeated expensive inference calls**, which not only saves money but also reduces load on your LLM API provider, avoiding rate limits and improving reliability.

#### The Limitations
[cautiously] But there are significant trade-offs. [concerned] This pattern is **brittle to small context changes**. If your retrieval system returns a slightly different set of documents, the cache key changes, and you miss the cache. [disappointed] Even if the final answer would have been identical, you regenerate it. This limits cache hit rates in systems with non-deterministic retrieval.

[seriously] There's also **storage overhead for complete responses**. Answers with citations can be several kilobytes each. If you're caching millions of answers, that's gigabytes of storage. This is manageable but non-trivial, especially if you're encrypting everything.

[firmly] Finally, **freshness guarantees are required**. Serving stale answers is worse than being slow. [concerned] If your knowledge base updates frequently, you need sophisticated invalidation logic to ensure users never get outdated information. This adds operational complexity and development effort.

[conversational] Let's examine these trade-offs more closely on the next slide.`
        },
        {
          id: 10,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
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
[conversational] Let's dive deeper into when RAG Answer Cache delivers exceptional value and when you need to exercise caution.

#### The Compelling Benefits
[pleased] On the **strengths** side, this pattern offers some of the most dramatic improvements you'll see in any caching strategy. [excited] The **cost and latency savings are substantial**. [lecture] Think about the economics here. Generating a complete RAG 👉 'rag' answer involves multiple expensive steps: embedding the query, searching your vector database, retrieving full document content, constructing a prompt with potentially thousands of tokens, running inference through an LLM, and streaming back the response. [seriously] All of that might cost you two to five cents per query and take two to four seconds.

[storytelling] Now compare that to a cache hit. You do a similarity search against cached query embeddings, which takes maybe twenty milliseconds, retrieve the cached answer from **Redis 👉 'red-iss'**, which takes another five milliseconds, and return it. [enthusiastically] Total cost: fractions of a cent. Total latency: under fifty milliseconds. That's a **ninety-percent latency reduction** and potentially **ninety-five-percent cost savings**. When you're handling millions of queries per month, this translates to tens of thousands of dollars saved and dramatically better user experience.

#### The Perfect Use Case
[pleased] This pattern is **ideal for FAQ and static knowledge domains**. [storytelling] Consider a customer support chatbot for a SaaS company. The most common questions are variations on the same themes. "How do I reset my password?" might appear as "I forgot my password, what do I do?" or "Can you help me get back into my account?" [confidently] Semantic caching captures all these variations. Your knowledge base articles explaining password resets don't change daily. Once you've generated a high-quality answer with proper citations, you can safely cache it for days or weeks.

[conversational] Documentation search is another perfect fit. Questions like "How do I configure authentication?" or "What are the rate limits for this API?" have stable answers. [lecture] The underlying documentation might update occasionally, but not constantly. [enthusiastically] Cache hit rates in these domains can exceed **sixty to seventy percent**, meaning the majority of your queries are served from cache.

#### Eliminating the Expensive Operations
[pleased] You **completely eliminate repeated expensive inference calls**. [seriously] This isn't just about saving money. It's also about reliability and control. [cautiously] Every external API call is a potential failure point. LLM providers have rate limits, occasional outages, and variable latency. [confidently] By serving more queries from cache, you reduce your dependency on external services. Your application becomes more resilient to provider issues.

[conversational] There's also an interesting quality benefit. [reassuringly] Because you're caching complete answers that your LLM has already generated and that presumably passed your quality checks, users see consistent responses. There's no risk of the model having an "off day" and producing a weird or incorrect answer on a retry of the same query. You've essentially locked in the quality of your best responses.

#### The Reality Check on Limitations
[cautiously] Now for the **limitations**, and these are significant. [concerned] First, this pattern is **brittle to small context changes**. Here's the problem: your cache key includes the retrieved context documents. [disappointed] If your retrieval system returns a slightly different set of documents, even if they're semantically equivalent, the cache key changes and you miss the cache. [lecture] And retrieval systems can be non-deterministic. **Approximate nearest neighbor 👉 'A-N-N'** algorithms like **HNSW 👉 'H-N-S-W'** or **IVF 👉 'I-V-F'** don't guarantee identical results every time, especially if your index is being updated or if you're using probabilistic pruning for speed.

[disappointed] This means your actual cache hit rate might be lower than expected. [conversational] You might have semantically identical queries that should hit the cache but don't because the underlying retrieval produced slightly different context. [cautiously] Some teams address this by using **query embeddings alone** as the cache key, ignoring context, but then you risk serving cached answers that were generated with outdated or different context.

#### The Storage Economics
[seriously] The second limitation is **storage overhead for complete responses**. [lecture] Let's do the math. A typical answer with citations might be one to three kilobytes of text. If you're caching a million answers, that's one to three gigabytes. [conversational] Add in encryption overhead, cache metadata, and you might be looking at five gigabytes or more. For **Redis 👉 'red-iss'** running in memory, this gets expensive. AWS ElastiCache 👉 'Elastic Cache' with five gigabytes of memory costs around fifty dollars per month. That's not prohibitive, but it's not negligible either.

[cautiously] And if you want persistence and durability, storing in **DynamoDB 👉 'die-nam-oh-dee-bee'** or **RDS 👉 'are-dee-ess'**, you pay for storage plus read/write capacity. [seriously] At scale, these costs add up. You need to ensure your cost savings from avoiding LLM calls exceed your caching infrastructure costs. [reassuringly] Usually they do by a wide margin, but it's worth monitoring.

#### The Freshness Challenge
[firmly] The third limitation is the most operationally complex: **freshness guarantees are required**. [seriously] Serving a stale answer is often worse than being slow. [cautiously] Imagine a user asks "What's your return policy?" and your cached answer references a policy that changed last month. [concerned] You've just given incorrect information, potentially causing customer frustration or even legal issues.

[lecture] To handle this, you need **event-based cache invalidation**. When a document in your knowledge base gets updated, you must identify and invalidate all cached answers that referenced it. This requires maintaining a **reverse index** mapping from document IDs to cache keys. [conversational] It's doable, but it adds complexity to your system architecture.

You also need **content classification** to determine appropriate TTLs 👉 'tee-tee-els'. [storytelling] Some queries are inherently time-sensitive. "What's today's special offer?" can't be cached for days. Others, like "What's the speed of light?" are effectively permanent. [seriously] Your system needs heuristics or metadata to distinguish these cases.

#### Practical Implementation Patterns
[confidently] Successful deployments often use **tiered TTLs**. Answers tagged as "policies" or "documentation" get long TTLs, maybe seven days. Answers tagged as "promotions" or "inventory" get short TTLs, maybe one day. [conversational] You can also implement **popularity-based caching**, where only queries that have been asked multiple times get cached. This reduces storage for one-off queries while ensuring high-value queries benefit.

[reassuringly] Some teams use **cache warming** strategies, proactively generating and caching answers for known frequent queries during off-peak hours. This ensures your cache is pre-populated when traffic spikes.

#### When to Use This Pattern
[confidently] This pattern delivers maximum value in **high-traffic FAQ systems** where questions repeat frequently and answers are relatively stable. [conversational] Customer support, product documentation, and knowledge base search are ideal domains. [cautiously] It's less suitable for **highly dynamic content** where the knowledge base changes constantly, or for **highly personalized queries** where every user needs a unique answer.

[lecture] The cost-benefit analysis is straightforward: if your cache hit rate is above **thirty percent** and your average LLM call costs more than **one cent**, you'll almost certainly see positive ROI. [pleased] Most well-implemented systems achieve **fifty to sixty percent hit rates**, making this pattern one of the most impactful in the entire caching toolkit.

> Ask the audience: [warmly] "How many of you are currently caching LLM responses, and what hit rates are you seeing?"

[inspiringly] With that deep dive into RAG Answer Cache complete, let's move on to Pattern 5, which takes a different approach to caching at the generation layer.`
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
              <div style={{ marginBottom: '20px' }}></div>
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
[lecture] Here's our fifth caching pattern: **Chunk-Level Cache**. This is a foundational pattern that operates at the document ingestion and processing layer, caching pre-processed document fragments before they even enter your retrieval pipeline.

#### What Gets Cached
[conversational] In this pattern, we cache **per-chunk embeddings, tokenized text, reranker features, and metadata**. Think about what happens when you ingest documents into your RAG 👉 'rag' system. You take large documents, split them into chunks, generate embeddings for each chunk, tokenize the text, potentially compute reranker features, and extract metadata. All of this processing is expensive and time-consuming.

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
[confidently] The cache key is carefully constructed: \\\`doc_id + chunk_index + chunk_hash + pipeline_version\\\`. Notice what we're tracking here. The **doc_id** identifies the source document. The **chunk_index** tells us which chunk this is within that document. The **chunk_hash** is a content hash of the actual chunk text, so if the content changes, we invalidate automatically. And **pipeline_version** ensures compatibility across processing pipeline updates. When you change your chunking strategy, embedding model, or reranking features, the pipeline version in the key changes, naturally invalidating stale cache entries.

This design is elegant because it handles both **document updates** and **pipeline evolution** automatically. If you update a document, its chunks get different hashes and miss the cache. If you upgrade your processing pipeline, the version bump causes misses. Either way, you reprocess only what's necessary.

#### Storage Architecture
We use a **multi-tier storage strategy**. The bulk of chunk data lives in **object stores** like **S3 👉 'ess-three', GCS 👉 'gee-see-ess', or Azure Blob Storage 👉 'Azh-ur'** for cost-effective persistence. These stores are cheap at scale but have higher latency, typically tens of milliseconds. Then we maintain a **metadata database** for quick lookups to check if chunks exist and retrieve their storage pointers. Finally, we keep a **Redis 👉 'red-iss' tier** for hot, frequently accessed chunks. This tiered approach balances cost and performance beautifully.

#### Time-to-Live Configuration
Interestingly, there's **no fixed TTL 👉 'tee-tee-el'** for chunk caches. Instead, we use **content-driven expiration**. Chunks are invalidated when the source document is updated or when you re-index. This is a **lazy refresh strategy**. We don't proactively expire chunks on a timer. Instead, we keep them until there's a semantic reason to invalidate. This maximizes cache efficiency because chunks from stable documents can remain cached indefinitely.

#### When This Pattern Shines
[pleased] The **strengths** are substantial. You **dramatically speed up ingestion and retrieval workflows**. If you're ingesting millions of documents, and many of them contain overlapping content, like standard legal disclaimers, common API examples, or repeated documentation sections, you avoid redundant processing. Your ingestion pipeline becomes much faster.

You also enable **reproducible pipeline processing**. Because you're caching intermediate outputs, you can replay your pipeline with consistent results. This is invaluable for debugging, testing, and compliance scenarios where you need to prove exactly what processing was applied to which data.

Finally, you **significantly reduce recomputation costs**. Embedding generation is expensive. If you're using a model like **text-embedding-3-large 👉 'text embedding three large'**, and you're processing terabytes of documents, the compute costs add up fast. Caching at the chunk level cuts those costs dramatically for any documents that share content or get re-processed.

#### The Limitations
[cautiously] But there are real trade-offs. First, the **storage footprint at scale is substantial**. You're caching not just embeddings but also tokenized text, reranker features, and metadata for every chunk. If you have a hundred million chunks, and each cached chunk is twenty kilobytes on average, that's two terabytes of storage. This is manageable with object stores, which are cheap, but it's not trivial.

Second, you need **complex invalidation logic**. When a document updates, you must identify and invalidate all its cached chunks. When your pipeline version changes, you must handle migration carefully to avoid serving results from mixed pipeline versions. This requires sophisticated cache management code and operational discipline.

Third, you face **multi-version coexistence challenges**. During pipeline upgrades, you might have some chunks cached from the old pipeline and some from the new pipeline. Your system needs to handle this gracefully, either by versioning everything carefully or by forcing a full re-index when pipelines change. Both approaches have costs.

Let's examine these trade-offs more closely on the next slide.`
        },
        {
          id: 12,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
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
[conversational] Let's dive deeper into the Chunk-Level Cache to understand where it delivers exceptional value and where you need to be mindful of the complexities.

#### The Performance Benefits
[enthusiastically] On the **strengths** side, this pattern offers compelling efficiency gains at the ingestion layer. The first major benefit is **dramatically faster ingestion and retrieval workflows**. Let me give you concrete numbers. Imagine you're ingesting a large corpus of technical documentation where many documents share common sections, like API reference pages that all include the same authentication examples, or legal documents with standard disclaimers.

Without chunk-level caching, every document gets processed independently. You chunk it, embed every chunk, tokenize, compute reranker features—all redundant work for shared content. With chunk-level caching, the first time you process a chunk, you pay the full cost. But every subsequent occurrence of that same content, whether in the same document or across different documents, is a cache hit. You've eliminated ninety-five percent of the processing time and cost for overlapping content.

In practice, if you're ingesting a hundred thousand documents and twenty percent of the content is shared or repeated, chunk-level caching can reduce your total ingestion time from maybe ten hours down to three hours. The savings compound as your corpus grows.

#### Pipeline Reproducibility
[confidently] The second strength is **enabling reproducible pipeline processing**. This is subtle but incredibly valuable, especially in regulated industries or research contexts. Because you're caching intermediate processing outputs with version tags, you can deterministically reproduce exactly what processing was applied to any piece of content. Need to debug why a particular query isn't retrieving the right documents? You can trace back to the exact cached chunk embeddings and metadata that were used. Need to prove compliance with data processing regulations? You have an audit trail of what was cached and when.

This reproducibility also simplifies testing. When you're developing new features or fixing bugs in your retrieval pipeline, you can work with cached chunks and get consistent results. You're not fighting non-deterministic behavior from re-running embeddings or tokenization with slightly different parameters.

#### The Economics of Recomputation
The third strength is **significantly reducing recomputation costs**. Embedding generation is one of the most expensive operations in RAG 👉 'rag' systems. A model like **text-embedding-3-large 👉 'text embedding three large'** processes text at a certain cost per token. If you're ingesting terabytes of documents, the cumulative compute cost can be enormous. But with chunk-level caching, you only pay that cost once per unique chunk. Re-indexing your corpus for other reasons, like updating your vector database or changing search parameters, doesn't require re-embedding. You just pull from the cache.

Let's do the math. Suppose embedding a million chunks costs you five hundred dollars in compute time. Without caching, if you re-index three times during development and testing, that's fifteen hundred dollars. With chunk-level caching, you pay five hundred dollars once, and subsequent re-indexes are nearly free from an embedding standpoint. The ROI is clear.

#### The Storage Reality Check
[firmly] Now for the **limitations**, and these are significant at scale. First, the **storage footprint is substantial**. You're caching embeddings, tokenized text, reranker features, and metadata for every chunk. Let's break down the math. A typical chunk might have a three-thousand-dimensional embedding, which is twelve kilobytes. Tokenized text might add another two kilobytes. Reranker features and metadata add maybe three more kilobytes. That's roughly twenty kilobytes per cached chunk.

If you're working with a hundred million chunks, that's two terabytes of cached data. Now, object stores like **S3 👉 'ess-three'** are cheap, roughly twenty-three dollars per terabyte per month. So two terabytes costs you about forty-six dollars per month for storage alone. That's very manageable. But if you want high-performance access, and you're keeping hot chunks in **Redis 👉 'red-iss'**, memory costs are much higher, maybe five hundred dollars per terabyte per month. You need to carefully tier your storage, keeping only truly hot data in memory and everything else in object stores.

#### The Invalidation Complexity
[concerned] The second limitation is **complex invalidation logic**. This is where operational complexity creeps in. When a document is updated, you need to identify and invalidate all cached chunks from that document. This requires maintaining a **reverse index** mapping document IDs to chunk cache keys. It's doable, but it's not trivial. Your cache management layer needs to be sophisticated.

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
[lecture] This pattern is most valuable in **large-scale knowledge bases with significant content overlap**, like technical documentation, legal repositories, or academic paper collections. It's also ideal when you **frequently re-index or update your corpus** and want to avoid paying the full reprocessing cost every time.

It's less valuable in **small corpora or highly unique content** where there's minimal chunk repetition. In those cases, the caching overhead might exceed the benefits. And it's challenging in **rapidly evolving systems** where your processing pipeline changes frequently, because the invalidation and migration complexity can overwhelm your team.

> [warmly] Ask the audience: "How many of you are processing documents with overlapping content, like API documentation or legal boilerplate?"

[conversational] With that deep understanding of Chunk-Level Cache, let's move on to Pattern 6, which shifts our focus to the personalization layer and conversation continuity.`
        }
      ]
    },
    {
      id: 'pattern-6',
      title: 'Pattern 6: Token-Level KV Cache',
      slides: [
        {
          id: 13,
          title: 'Pattern 6: Token-Level KV Cache',
          icon: { name: 'duo-brain-circuit' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>
                        What is Cached
                        <MermaidPopover
                          title="KV Cache Flow in Transformer"
                          diagram={`flowchart TB
    A["📝 Prompt Tokens"] --> B["🔄 Transformer Layer 1"]
    B --> C["💾 Store K,V Vectors L1"]
    C --> D["🔄 Transformer Layer 2"]
    D --> E["💾 Store K,V Vectors L2"]
    E --> F["🔄 ... More Layers"]
    F --> G["🤖 Generation Phase"]
    G --> H["♻️ Reuse K,V for Next Tokens"]
    H --> G
    style A fill:#4fc3f7,color:#000
    style G fill:#81c784,color:#000
    style C fill:#ffd700,color:#000
    style E fill:#ffd700,color:#000`}
                        />
                      </strong>
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
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5a1d6b',
          notes: `### Pattern 6: Token-Level KV Cache
[excited] Welcome to Pattern 6, the **Token-Level KV Cache** 👉 'kay-vee cache'. This is one of the most fundamental and powerful caching patterns in modern LLM 👉 'el-el-em' inference. [lecture] Unlike the previous patterns that operated at the application level, caching queries or embeddings or retrieval results, this pattern operates deep inside the model itself, at the transformer layer level.

#### What Gets Cached
[conversational] In this pattern, we cache **transformer attention key and value tensors per layer for prompt tokens**. Let me break down what that means. When a transformer model like **GPT 👉 'gee-pee-tee'** or **Llama 👉 'lah-mah'** processes text, it uses self-attention mechanisms in every layer. For each token in the input, the model computes three vectors: a query vector, a key vector, and a value vector. These are the famous **Q 👉 'cue', K 👉 'kay', and V 👉 'vee'** in the attention formula.

\\\`\\\`\\\`mermaid
flowchart TB
    A["📝 Prompt Tokens"] --> B["🔄 Transformer Layer 1"]
    B --> C["💾 Store K,V Vectors L1"]
    C --> D["🔄 Transformer Layer 2"]
    D --> E["💾 Store K,V Vectors L2"]
    E --> F["🔄 ... More Layers"]
    F --> G["🤖 Generation Phase"]
    G --> H["♻️ Reuse K,V for Next Tokens"]
    H --> G
    style A fill:#4fc3f7,color:#000
    style G fill:#81c784,color:#000
    style C fill:#ffd700,color:#000
    style E fill:#ffd700,color:#000
\\\`\\\`\\\`

Here's the key insight: when you're generating text auto-regressively, token by token, the query changes with each new token, but the keys and values for all the previous tokens remain constant. They never change. So instead of recomputing the K and V vectors for the entire prompt at every generation step, which would be incredibly wasteful, we cache them. We compute them once during the initial **prompt processing phase** and then reuse them throughout the **generation phase**.

We're caching **intermediate computation results of attention mechanisms** and **layer-specific key-value pairs for each processed token**. In a model with thirty-two layers, like **Llama-2-7B 👉 'lah-mah two seven bee'**, you have thirty-two sets of K and V tensors per token. For a two-thousand-token prompt, that's sixty-four thousand cached vectors. Each vector might be forty-ninety-six dimensions, so we're talking about substantial memory usage, but the computational savings are massive.

#### The Performance Impact
[enthusiastically] This is not a minor optimization. **KV caching** is the difference between usable and unusable latency in LLM generation. Without KV caching, the **TTFT 👉 'tee-tee-eff-tee', or time to first token**, grows quadratically with prompt length because you're recomputing attention over all previous tokens at every step. A two-thousand-token prompt might take ten seconds to start generating. With KV caching, you compute once and generate immediately. TTFT drops to under a second. The speedup is typically **three to ten times faster generation**, sometimes more.

#### The Cache Key Strategy
[lecture] The cache key is technical but critical: \\\`request_id/session_id + prompt_token_range + model_id + shard/block_id\\\`. Let's unpack this. The **request_id** or **session_id** identifies which generation request or conversation session this cache belongs to. The **prompt_token_range** specifies which portion of the input these cached K/V tensors correspond to. This is important for prefix caching, where you might cache a common system prompt across multiple requests.

The **model_id** is essential because K/V tensors are specific to the model architecture. Tensors from **GPT-4 👉 'gee-pee-tee four'** are incompatible with **Claude 👉 'clawed'**. Even different versions of the same model, like **Llama-2-7B 👉 'lah-mah two seven bee'** versus **Llama-3-8B 👉 'lah-mah three eight bee'**, have different architectures and require separate caches.

The **shard or block_id** is relevant in distributed inference systems where a single large model is sharded across multiple GPUs or nodes. Each shard maintains its own portion of the KV cache. This key structure ensures we never mix up cached tensors from different contexts or models.

#### Storage Architecture
[confidently] Where do these tensors live? In **GPU VRAM 👉 'vee-ram', which is the primary storage for fast access**. This is critical. KV tensors need to be immediately accessible to the GPU during generation. Storing them in system RAM or on disk would introduce latency that defeats the entire purpose. Modern GPUs have tens of gigabytes of VRAM, and a significant portion is dedicated to KV caching.

However, VRAM is expensive and limited. For long contexts or high concurrency scenarios, you can **offload to CPU RAM 👉 'cpu ram' or NVMe 👉 'en-vee-em-ee' when needed**. Systems like **PagedAttention** in **vLLM 👉 'vee-el-el-em'** manage this intelligently, keeping hot KV blocks in VRAM and evicting cold blocks to CPU memory. When needed, they're paged back in. It's like virtual memory for attention caches.

Modern inference frameworks like **vLLM 👉 'vee-el-el-em', TensorRT-LLM 👉 'tensor-are-tee el-el-em', or Text Generation Inference 👉 'tee-gee-eye'** handle KV cache management automatically. They implement sophisticated algorithms like **PagedAttention** that eliminate memory fragmentation and maximize GPU utilization. As a developer, you typically don't manage KV caches directly at this level. The framework does it for you. But understanding what's happening under the hood is essential for optimizing your inference costs and latency.

#### Time-to-Live Configuration
The KV cache **lives for the duration of the request or session**. For a single-turn question-answer interaction, the cache exists from when you start processing the prompt until generation completes. For a multi-turn conversation, the cache can persist across turns, accumulating K/V tensors for the entire conversation history. This is why long conversations eventually hit context limits: you're accumulating cached tensors that consume VRAM.

Under memory pressure, the system uses **LRU 👉 'el-are-you', or least recently used, or LFU 👉 'el-eff-you', or least frequently used, eviction policies**. If the GPU is running low on VRAM and a new request comes in, older or less-used KV caches get evicted. This is automatic and transparent. The request that got evicted will need to recompute its KV cache if it generates more tokens, but it ensures the system remains responsive under load.

The cache is **freed upon completion or when the context window overflows**. If you hit the model's maximum context length, typically two thousand to a hundred and twenty-eight thousand tokens depending on the model, old tokens and their cached K/V tensors are discarded to make room for new tokens. This is a sliding window approach.

#### The Critical Trade-Off
[pleased] The brilliance of KV caching is that it trades memory for computation. You're storing large tensors to avoid recomputing them. This trade-off is almost always favorable because modern GPUs have abundant VRAM and memory bandwidth, but compute is still relatively expensive. However, for extremely long contexts or high concurrency, memory becomes the bottleneck. This is why advanced techniques like **PagedAttention, FlashAttention 👉 'flash attention', and quantized KV caching** exist: they reduce the memory footprint while maintaining the computational benefits.

Let's look at the strengths and limitations on the next slide.`
        },
        {
          id: 14,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5a1d6b',
          notes: `### Strengths and Limitations of Token-Level KV Cache
[conversational] Now let's examine where **Token-Level KV 👉 'kay-vee' Cache** delivers exceptional performance and where you need to manage its challenges carefully.

#### The Performance Revolution
[enthusiastically] On the **strengths** side, this pattern is transformational. The first and most dramatic benefit is **massive speedups in decoding, typically three to ten times faster generation**. Let me put this in concrete terms. Without KV caching, generating a one-hundred-token response from a two-thousand-token prompt on a model like **Llama-2-13B 👉 'lah-mah two thirteen bee'** might take thirty seconds. With KV caching, that drops to three to five seconds. The difference is night and day for user experience.

Why such a dramatic speedup? Because we're **reducing re-computation of attention for prompt tokens**. Self-attention is the most computationally expensive part of transformer inference. For each new token you generate, without KV caching, you'd compute attention over the entire prompt plus all previously generated tokens. That's quadratic complexity. If your prompt is two thousand tokens and you've generated fifty tokens, you're computing attention over two thousand and fifty tokens at every step. With KV caching, you only compute attention for the new token against cached K and V vectors. The complexity goes from quadratic to linear. That's the fundamental algorithmic win.

#### The Economics of Inference
[pleased] The second strength is that this **improves throughput and reduces inference costs**. Higher throughput means you can serve more requests per GPU. If each request completes three times faster, you can handle roughly three times as many requests with the same hardware. This directly translates to lower per-request costs. For a company running millions of inference requests daily, KV caching can save hundreds of thousands of dollars in compute costs annually.

There's also a latency benefit beyond just generation speed. Lower latency means better user experience, which translates to higher engagement and conversion rates. In customer-facing applications, every hundred milliseconds of latency matters. KV caching keeps your **TTFT 👉 'tee-tee-eff-tee'** and **time-per-token** low enough that users perceive the system as responsive and intelligent.

This isn't optional. In modern LLM inference, KV caching is **table stakes**. Every production inference system, whether you're using **OpenAI 👉 'open-a-eye', Anthropic 👉 'ann-thro-pic', Hugging Face TGI 👉 'hugging face tee-gee-eye', vLLM 👉 'vee-el-el-em', or TensorRT-LLM 👉 'tensor-are-tee el-el-em'**, implements KV caching. It's the foundation that makes auto-regressive generation practical.

#### The Memory Pressure Challenge
[cautiously] Now for the **limitations**, and the primary one is **high VRAM 👉 'vee-ram' footprint that can consume gigabytes**. Let's do the math to understand the scale. Consider **Llama-2-7B 👉 'lah-mah two seven bee'** with thirty-two layers, a hidden dimension of forty ninety-six, and thirty-two attention heads. For each token, each layer stores a key vector and value vector, each of dimension forty ninety-six. In FP16 👉 'eff-pee sixteen', that's two bytes per number, so eight kilobytes per token per layer, times thirty-two layers, equals roughly two hundred and fifty-six kilobytes per token.

For a context of eight thousand tokens, that's roughly two gigabytes of KV cache. An **A100 👉 'a one hundred' GPU** with eighty gigabytes of VRAM can hold maybe twenty to thirty concurrent contexts of that size, depending on what else is in memory. If you're running a high-traffic service with hundreds of concurrent users, VRAM becomes the bottleneck. You can't load more requests even though your GPU compute is underutilized.

This is why techniques like **PagedAttention** were developed. PagedAttention breaks the KV cache into fixed-size blocks and manages them like virtual memory pages. It eliminates fragmentation and allows oversubscription by paging blocks to CPU memory when needed. This increases effective capacity but adds complexity. You're trading memory management overhead for higher concurrency.

Quantization helps too. Storing K and V vectors in INT8 👉 'int eight' or FP8 👉 'eff-pee eight' instead of FP16 👉 'eff-pee sixteen' cuts memory usage in half or more, with minimal quality loss. But it requires specialized kernels and isn't universally supported yet.

#### Memory Fragmentation and Compaction
[concerned] The second limitation is **memory fragmentation and compaction challenges**. When you have many concurrent requests of varying lengths, you end up with a **fragmented memory space**. Imagine you've allocated a block for a two-thousand-token context, but that request completes after generating only five hundred tokens. You have fifteen hundred tokens worth of wasted space. When the next request comes in with a different context size, it might not fit in that exact slot. You get fragmentation, just like in traditional memory management.

Systems like **vLLM 👉 'vee-el-el-em'** solve this with **memory compaction** and **paged attention**. They dynamically allocate and deallocate KV cache blocks as needed. But this adds runtime overhead and complexity. You need sophisticated memory management algorithms and careful engineering to make it efficient. This is not trivial to implement from scratch.

#### The Architecture Coupling Problem
[firmly] The third limitation is **strong coupling with model version and architecture**. KV cache tensors are tied to a specific model's layer count, hidden dimensions, and attention head configuration. If you upgrade from **Llama-2-7B 👉 'lah-mah two seven bee'** to **Llama-3-8B 👉 'lah-mah three eight bee'**, all cached K/V tensors become invalid. You can't reuse them. This means model upgrades require flushing all KV caches, which can cause a temporary spike in latency as new caches are populated.

It also means you can't share KV caches across different models. If you're running multiple model variants, A/B testing different architectures, or serving different model sizes based on request complexity, each model needs its own isolated KV cache pool. This multiplies your memory requirements and operational complexity.

Furthermore, if you're doing **continuous batching**, where you dynamically batch together requests as they arrive, you need to manage KV caches for each request independently. They can't interfere with each other. This requires careful indexing and isolation, which adds overhead.

#### Advanced Optimizations
[confidently] Despite these challenges, KV caching is so valuable that enormous engineering effort has gone into optimizing it. Techniques like **FlashAttention 👉 'flash attention'** fuse attention operations and reduce memory traffic. **Multi-query attention 👉 'em-cue-a'** and **grouped-query attention 👉 'gee-cue-a'** reduce the number of K/V heads, cutting cache size. **Prefix caching** shares KV cache blocks across requests with common prompts, like system instructions. All of these build on the fundamental KV caching pattern we're discussing.

The takeaway is that KV caching is essential but not free. You're trading memory for compute, and in production systems, memory management becomes a first-class concern. Understanding this trade-off helps you architect your inference infrastructure correctly.

Let's move on to the next pattern, where we'll see another model-level caching technique that complements KV caching.`
        }
      ]
    },
    {
      id: 'pattern-7',
      title: 'Pattern 7: Logit Cache',
      slides: [
        {
          id: 15,
          title: 'Pattern 7: Logit Cache',
          icon: { name: 'duo-chart-line' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="bounceIn" delay={0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>
                        What is Cached
                        <MermaidPopover
                          title="Logit Cache Flow"
                          diagram={`flowchart LR
    A["📝 Input Tokens"] --> B["🔄 Forward Pass"]
    B --> C["💾 Store Logits"]
    C --> D["🎲 Sampling"]
    D --> E["✨ Next Token"]
    E --> F["🔁 Reuse Prefix Logits"]
    F -.->|For Similar Inputs| B
    style A fill:#4fc3f7,color:#000
    style E fill:#81c784,color:#000
    style B fill:#ffd700,color:#000
    style C fill:#ffd700,color:#000
    style F fill:#ffd700,color:#000`}
                        />
                      </strong>
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
              </GSAPAnimated>

              <GSAPAnimated animation="slideInTop" delay={0.3}>
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#211d6b',
          notes: `### Pattern 7: Logit Cache
[lecture] Welcome to Pattern 7: **Logit Cache**, also known as **Model Output Logit Cache**. This is a sophisticated model-level caching pattern that stores the probability distributions that come out of your language model before token sampling happens.

#### What Exactly Are Logits?
[conversational] Let's start with fundamentals. When a language model processes a sequence of tokens, the final layer outputs a vector of **logits** 👉 'loj-its'. These are raw, unnormalized scores for every token in the vocabulary. A typical model vocabulary has thirty thousand to one hundred thousand tokens, so we're talking about vectors with tens of thousands of dimensions. These logits get converted into probabilities through a **softmax** function, and then your sampling strategy picks the next token based on those probabilities.

Here's the key insight: computing those logits is expensive. It requires a full forward pass through the entire neural network. But if you've seen a particular prefix before, those logits will be identical every time, assuming the same model and parameters. That's the opportunity.

#### What Gets Cached
[confidently] In **Logit Cache**, we're caching **next-token logits and probabilities for frequent prefixes**. Think about common prompt templates. If your system starts every customer support query with the same system prompt, maybe five hundred tokens long, the logits for the next token after that prefix are always the same. Why recompute them millions of times? Cache them once.

\\\`\\\`\\\`mermaid
flowchart LR
    A["📝 Input Tokens"] --> B["🔄 Forward Pass"]
    B --> C["💾 Store Logits"]
    C --> D["🎲 Sampling"]
    D --> E["✨ Next Token"]
    E --> F["🔁 Reuse Prefix Logits"]
    F -.->|For Similar Inputs| B
    style A fill:#4fc3f7,color:#000
    style E fill:#81c784,color:#000
    style B fill:#ffd700,color:#000
    style C fill:#ffd700,color:#000
    style F fill:#ffd700,color:#000
\\\`\\\`\\\`

Practically speaking, you can cache the **full logit vectors** if memory allows, or you can cache only the **top-k most likely tokens** to save space. For a vocabulary of fifty thousand tokens, storing full float32 logits per prefix costs about two hundred kilobytes. That adds up quickly. But storing just the top one hundred tokens with their probabilities reduces this to a few kilobytes, and often that's sufficient because you're typically sampling from the top candidates anyway.

You also capture the **output probability distributions at the token level**. This is useful not just for generation but also for tasks like **rescoring multiple candidates** or implementing **safety filters** that check probability distributions for unwanted patterns.

#### The Cache Key Strategy
[lecture] The cache key is critical here. You're hashing the **prefix token IDs** plus the **model ID** and a **logits version**. Why version? Because if you change the model, even slightly, all your cached logits are invalid. Imagine you fine-tune your model or switch to a quantized version. The logits will differ. Your cache key must reflect that.

You also need to include **decoding bias and temperature parameters**. If your application sometimes uses temperature zero-point-seven and sometimes one-point-zero, those produce different probability distributions even for the same logits. So either include temperature in the key, or always cache at a fixed temperature and apply temperature scaling on the fly when retrieving.

Some systems also incorporate **sampling strategy metadata** like top-p or top-k settings, though this is less common because those filters can be applied post-cache.

#### Where Do You Store This?
Logit cache typically lives in **CPU RAM or Redis** for fast access. These are moderately large data structures. If you're caching logits for ten thousand common prefixes, and each entry is two hundred kilobytes, that's two gigabytes of memory. **Redis 👉 'red-iss'** handles this well, especially with **LRU** 👉 'el-are-you' eviction to keep only the hottest entries in memory.

For very large deployments, some teams use **memory-mapped files** for huge lookup tables. This lets the operating system manage paging between RAM and SSD, giving you effectively unlimited storage but with slower access for cold entries. Regional deployment is important too. You want your logit cache close to your inference servers to minimize network latency.

#### Expiration and Invalidation
Logit cache has a **short TTL**, typically minutes to hours. Why? Because this cache is tied to a specific model snapshot. If you deploy a new model version, all cached logits are immediately stale. You need to **purge the entire cache on model or quantization changes**. This requires coordination between your deployment pipeline and your cache infrastructure.

You also use **frequency-based eviction**. Not all prefixes are equally common. Track cache hit rates per entry and evict the least frequently used ones when memory pressure builds up. This keeps your cache focused on the highest-value prefixes.

#### The Model-Level Cache Concept
[conversational] This is a **model-level cache**, meaning it operates inside or immediately adjacent to the inference layer. Unlike application-level caches that store final responses, logit cache stores intermediate computational artifacts. It's transparent to the rest of your application. Your inference server checks the cache before running the forward pass, and if it finds a hit, it skips straight to sampling. From the application's perspective, nothing changes except the latency drops dramatically.

This pattern is particularly powerful when combined with other caching strategies. You might have a **KV cache** 👉 'kay-vee cache' for within-generation token reuse and a **logit cache** for across-generation prefix reuse. They complement each other beautifully.

#### Real-World Scenarios
[pleased] Where does logit cache shine? Think about **template-heavy applications**. Customer support bots, code generation systems, and structured output generators often use fixed prompt templates. The first few hundred tokens are identical across millions of requests. Caching those logits can reduce **time-to-first-token by fifty to eighty percent** for those requests.

Another scenario is **retry and rescoring**. Sometimes you generate multiple candidate completions and then pick the best one. If the prefix is the same across all candidates, you only compute the logits once and sample multiple times. This speeds up beam search and other multi-candidate generation strategies significantly.

**Safety filtering** is another use case. Some systems run content moderation by checking the probability distributions for harmful tokens. If you're checking the same prompts repeatedly, caching the logits lets you run safety checks with near-zero overhead.

#### The Economic Consideration
Logit cache trades memory for compute. You're spending RAM to avoid GPU cycles. The economics depend on your infrastructure. If GPU time is your bottleneck and you have spare RAM, this trade is hugely favorable. If you're already memory-constrained, adding a multi-gigabyte logit cache might not be feasible.

At scale, though, the savings can be substantial. A single forward pass through a seven-billion-parameter model might take fifty milliseconds on a high-end GPU. If thirty percent of your prompts share common prefixes, you're saving fifteen milliseconds per request on average. For a service handling one million requests per day, that translates to massive GPU hour savings.

Let's explore the trade-offs in more detail on the next slide.`
        },
        {
          id: 16,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="fadeIn" delay={0.5}>
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#211d6b',
          notes: `### Strengths and Limitations
[conversational] Let's carefully examine the strengths and limitations of **Logit Cache** to understand when this pattern delivers exceptional value and when you need to be cautious.

#### The Compelling Advantages
[pleased] On the **strengths** side, logit cache offers some unique benefits that other caching patterns can't match. First and foremost, you get **faster time-to-first-token for common prompts and prefixes**. This is a big deal for user experience. When your system uses standardized prompt templates, the first token generation can be dramatically faster. Instead of waiting fifty to one hundred milliseconds for the model to process the prefix and compute logits, you retrieve cached logits in single-digit milliseconds and immediately start sampling.

The impact compounds in **high-throughput scenarios**. If you're serving thousands of requests per second and thirty to forty percent share common prefixes, you're effectively multiplying your inference capacity. The same GPU fleet can handle more requests because prefix processing is nearly free for cache hits.

#### Rescoring and Multi-Candidate Generation
[enthusiastically] Logit cache is **particularly useful for rescoring, safety passes, and retry scenarios**. Imagine you're implementing a content moderation system that needs to check multiple completion candidates. You generate the prefix logits once, then sample five different continuations. Without logit cache, you'd compute the prefix five times. With logit cache, you compute it once and sample five times. That's an eighty-percent reduction in compute for the prefix portion.

The same principle applies to **beam search** and other multi-candidate strategies. In machine translation or code generation, you might explore multiple paths. Logit cache ensures that shared prefixes don't get recomputed, making these algorithms much more efficient.

**Retry scenarios** also benefit immensely. Sometimes your system needs to regenerate a response because the first attempt failed a safety check or didn't meet quality criteria. If you're retrying the same prefix, logit cache means your retry is almost instant for that initial portion. This improves reliability without increasing latency proportionally.

#### Output Consistency Benefits
An underappreciated benefit is that logit cache **helps maintain consistent outputs across retries**. When you cache logits, you're locking in the probability distributions. If you sample multiple times from the same cached logits, the variability comes purely from your sampling strategy, not from subtle differences in float-point computation or quantization noise. This makes your system's behavior more predictable and reproducible, which is valuable for debugging and quality assurance.

Some teams use logit cache specifically for **A-B testing**. You can cache logits from your production model and then test new sampling strategies or decoding algorithms without rerunning expensive inference. This accelerates experimentation significantly.

#### The Practical Constraints
[firmly] Now let's talk about the **limitations**, because they're significant. The most obvious one is the **large memory footprint for many prefixes**. Logits are not small. For a model with a fifty-thousand-token vocabulary, a single set of logits is two hundred kilobytes in float32. If you're caching ten thousand prefixes, that's two gigabytes. Scale up to a million prefixes, and you're talking about two hundred gigabytes, which is way beyond what you can store in RAM economically.

Even with top-k pruning where you only store the top one hundred tokens per prefix, you still need several gigabytes for tens of thousands of entries. This creates a memory-cost trade-off. You need to carefully monitor which prefixes get cached and use **aggressive eviction policies** to keep only the hottest entries.

#### The Exact-Match Problem
[cautiously] The second major limitation is that logit cache is **exact-match sensitive**, leading to a **limited hit rate**. Unlike semantic caching where you can match similar queries, logit cache requires the token sequence to be identical. Even a single token difference invalidates the cache. This is fundamental to how transformers work. The attention mechanism depends on the exact sequence of tokens, so you can't reuse logits from a slightly different prefix.

In practice, this means your cache hit rate depends entirely on how much repetition exists in your workload. If you're using the same system prompts across all requests, great. But if every user query is unique, logit cache provides zero value. You need to **measure prefix repetition** in your actual traffic before investing in this pattern.

Some systems try to work around this with **prefix tree** data structures that let you cache logits for partial matches, but this adds significant complexity and is only useful if your prompts have hierarchical structure.

#### Privacy and Security Considerations
[seriously] The third limitation involves **privacy concerns with caching user-specific content**. If your prompts contain **PII** 👉 'pee-eye-eye', or personally identifiable information, caching those logits creates a security risk. Imagine you cache logits for a prompt that includes a user's email address or account details. If your cache is compromised, an attacker could reverse-engineer the cached data to extract sensitive information.

This is less of an issue if you only cache system prompts that contain no user data. But if you're caching arbitrary user queries, you need **strict access controls**, encryption at rest, and potentially **data anonymization**. Some regulated industries may prohibit this type of caching entirely due to compliance requirements like **GDPR** 👉 'gee-dee-pee-are' or **HIPAA** 👉 'hip-ah'.

You also need to consider **multi-tenancy**. If you're serving multiple customers or organizations, you must ensure cache isolation. One tenant's cached logits should never be accessible to another tenant. This requires careful cache key design and infrastructure segmentation.

#### Model Update Challenges
Logit cache creates operational challenges during **model updates**. When you deploy a new model version, every single cached entry becomes invalid. You must **purge the entire cache**, which means temporarily losing all the performance benefits until the cache warms up again. For a high-traffic service, this can cause a noticeable spike in latency and compute load right after deployment.

Some teams address this with **dual caching**, maintaining separate caches for the old and new model versions during a transition period. But this doubles memory requirements temporarily and adds complexity to your deployment process.

#### When to Use Logit Cache
[lecture] This pattern is most effective in **template-driven systems** with high query volume. Customer support chatbots with standardized greeting prompts, code generation tools with common imports and boilerplate, and enterprise assistants with multi-hundred-token system prompts all benefit enormously.

It's less suitable for **highly dynamic, user-specific queries** where every prompt is unique, or for small-scale systems where the complexity of managing logit cache outweighs the benefits.

The economics are straightforward: if your GPU cost per hour is high, your prefix repetition rate is above thirty percent, and you have spare RAM, logit cache likely pays for itself quickly. Run an analysis on your actual traffic patterns to determine hit rate potential before implementing.

#### Complementary Patterns
Logit cache works beautifully with other patterns. Combine it with **KV cache** 👉 'kay-vee cache' for maximum efficiency. KV cache handles within-request token reuse during generation, while logit cache handles across-request prefix reuse. Together, they create a comprehensive model-level caching strategy.

You can also layer logit cache beneath **semantic similarity cache**. The semantic cache matches similar queries at the application level, while logit cache optimizes exact prefix matches at the inference level. They operate at different abstraction layers and complement each other perfectly.

> [warmly] Ask the audience: "How many of you are currently using prompt templates in your applications, and what's your typical prefix length?"

[conversational] With this deep understanding of logit cache complete, let's move on to the next pattern, which takes us in a different direction at the retrieval layer.`
        }
      ]
    },
    {
      id: 'pattern-8',
      title: 'Pattern 8: Template Cache',
      slides: [
        {
          id: 17,
          title: 'Pattern 8: Template Cache',
          icon: { name: 'duo-file-lines' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>
                        What is Cached
                        <MermaidPopover
                          title="Template Cache Flow"
                          diagram={`flowchart LR
    A["📄 Template + Variables"] --> B{"🔍 Check Cache"}
    B -->|Hit| C["⚡ Return Formatted Output"]
    B -->|Miss| D["🤖 Format Template"]
    D --> E["💾 Store"]
    E --> C
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffd700,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>Rendered templates with substituted variables</li>
                        <li>Formatted output strings (emails, reports, notifications)</li>
                        <li>Pre-processed template results for common scenarios</li>
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
                        <li>hash(template_id + variable_values + template_version)</li>
                        <li>Includes normalization of variable order</li>
                        <li>Optional locale/language identifier for i18n</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="rotateIn" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-floppy-disk" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Cache Storage Location</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>Redis/Memcached for hot template results</li>
                        <li>CDN edge cache for public-facing templates</li>
                        <li>Application-level in-memory cache for frequently used templates</li>
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
                        <li>Medium TTL (1-24 hours) based on data volatility</li>
                        <li>Invalidate on template version updates</li>
                        <li>LRU eviction for variable combinations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5a1d6b',
          notes: `### Pattern 8: Template Cache
[confident] Here's our eighth caching pattern: **Template Cache**. This pattern operates at the output rendering layer, caching fully formatted templates after variable substitution. [conversational] It's particularly valuable when you have templates with limited variable combinations that get rendered repeatedly.

#### What Gets Cached
[lecture] In this pattern, we cache **rendered templates with substituted variables, formatted output strings, and pre-processed template results**. Think about applications that send emails, generate reports, or display notifications. You have a template, like "Hello {{name}}, your order {{order_id}} has been shipped", and you substitute variables to create the final output. Even though template rendering is relatively fast compared to LLM inference, it adds up when you're processing thousands or millions of requests.

\\\`\\\`\\\`mermaid
flowchart LR
    A["📄 Template + Variables"] --> B{"🔍 Check Cache"}
    B -->|Hit| C["⚡ Return Formatted Output"]
    B -->|Miss| D["🤖 Format Template"]
    D --> E["💾 Store"]
    E --> C
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffd700,color:#000
\\\`\\\`\\\`

When a template rendering request comes in with specific variables, we check the cache first. If we've rendered this exact combination before, we return it immediately. On a cache miss, we format the template, store the result, and return it. This is especially powerful for templates with enumerated or limited variable spaces.

#### The Cache Key Strategy
The cache key is \\\`hash(template_id + variable_values + template_version)\\\`. We include the template identifier, the actual variable values, and the template version. Notice we're hashing the variable values, not just their presence. This means \\\`name=John, order_id=123\\\` creates a different cache key than \\\`name=Jane, order_id=123\\\`. We also normalize variable order, so \\\`name=John, order_id=123\\\` and \\\`order_id=123, name=John\\\` produce the same key. For internationalized applications, you might include a locale or language identifier in the key.

#### Storage Architecture
We store rendered templates in **Redis 👉 'red-iss' or Memcached 👉 'mem-cash-dee'** for hot cache. These provide fast access for frequently rendered templates. For public-facing content like marketing emails or notification templates, you can push results to a **CDN 👉 'see-dee-en', or content delivery network, edge cache**. This puts the rendered output geographically close to end users. You might also use an **application-level in-memory cache** for the most frequently used templates, avoiding even the network hop to Redis.

#### Time-to-Live Configuration
We use a **medium TTL 👉 'tee-tee-el', typically one to twenty-four hours**, depending on how volatile your data is. If your templates reference data that changes frequently, use shorter TTLs. You also want to **invalidate on template version updates**. When you modify a template, bump the version number in your cache keys to ensure old cached results aren't served. For eviction, use **LRU 👉 'el-are-you', or least recently used** policy. This naturally ages out template results for uncommon variable combinations.

#### When This Pattern Shines
[pleased] The **strengths** are significant. You eliminate redundant template rendering work, which matters at scale. Templates with limited variable cardinality, like status notifications with five possible states or confirmation emails with standard fields, hit the cache frequently. You also reduce CPU load on your application servers, freeing resources for other processing. And cached templates provide **consistent formatting and faster response times**.

#### The Limitations
[cautiously] But there are considerations. If your variable space is **highly dimensional or unbounded**, your cache hit rate will be poor. For example, templates with user-generated content, timestamps, or unique identifiers in every request won't benefit much. You also have **memory overhead** for storing rendered strings. Large templates like HTML emails can be several kilobytes each. And you need careful **cache invalidation** when template logic changes, not just content. If you update conditional logic in your template engine, you must invalidate all cached results for that template.

#### Practical Examples
[conversational] Think about real-world scenarios. **Email templates** for order confirmations, password resets, or welcome messages. These have fixed structures with a handful of variables. **Report templates** for dashboards, analytics summaries, or status reports. If you're generating the same report structure for different users or time ranges, caching the rendered output saves compute. **Notification templates** for push notifications, SMS messages, or in-app alerts. These often have limited message types and variable sets, making them perfect candidates for template caching.

Let's look at the strengths and limitations in more detail on the next slide.`
        },
        {
          id: 18,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      <strong>Strengths</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Eliminates redundant template rendering work</li>
                      <li>High hit rate for limited variable cardinality</li>
                      <li>Reduces CPU load on application servers</li>
                      <li>Provides consistent formatting and faster responses</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      <strong>Limitations</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Poor hit rate with highly dimensional variable spaces</li>
                      <li>Memory overhead for storing rendered strings</li>
                      <li>Requires careful cache invalidation on template changes</li>
                      <li>Not effective for user-generated or unique content</li>
                    </ul>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5a1d6b',
          notes: `### Strengths and Limitations
[conversational] Let's take a closer look at when Template Cache delivers real value and when you need to be cautious.

#### The Good Stuff
[pleased] On the **strengths** side, the value proposition is straightforward. You're **eliminating redundant template rendering work** that would otherwise consume CPU cycles on every request. Even though template rendering is much faster than LLM inference, at scale these microseconds and milliseconds add up. If you're processing a hundred thousand email notifications per hour, avoiding re-rendering for common scenarios saves significant compute resources.

The **hit rate for templates with limited variable cardinality** is excellent. Think about status notifications. You might have five possible states: pending, processing, completed, failed, and cancelled. If you're using ten standard variables like user name, timestamp, and identifiers, your total combination space is manageable. Your cache hit rate can easily reach sixty to eighty percent for these workloads.

You also **reduce CPU load on your application servers**, which is valuable. Template rendering isn't the most expensive operation, but it's not free either. Complex templates with conditional logic, loops, or nested structures can be compute-intensive. By caching the results, you free up CPU for other tasks like business logic processing or API calls.

And you get **consistent formatting and faster response times**. Once a template is rendered and cached, every subsequent request gets exactly the same output in microseconds. There's no risk of formatting variations or template engine bugs creating inconsistent outputs. Your users experience lower latency, especially for frequently accessed templates.

#### The Trade-offs
[cautiously] Now for the **limitations**. First, if your variable space is **highly dimensional or unbounded**, this pattern doesn't work well. Imagine a template that includes a user-generated message, a timestamp with second precision, and a unique transaction ID in every request. Your cache will never hit because every combination is unique. In these scenarios, template caching provides no benefit and just wastes memory.

Second, there's **memory overhead for storing rendered strings**. Rendered templates, especially HTML emails or formatted reports, can be several kilobytes to tens of kilobytes each. If you're caching millions of unique combinations, the memory footprint becomes substantial. At some point, the cost of cache storage exceeds the benefit of avoiding template rendering.

Third, you need **careful cache invalidation when template logic changes**. It's not just about updating the template content. If you change conditional logic, add new template helpers, or modify how variables are processed, you must invalidate all cached results for that template. Failing to do this means users might see old formatting or incorrect logic, even though the template source has been updated.

Fourth, this pattern is **not effective for templates with user-generated or highly unique content**. If your template includes long-form text, markdown rendering, or dynamic content that varies significantly between requests, your cache hit rate will be very low. You end up storing results that get used once and then evicted, providing no performance benefit.

#### Real-World Application
[confidently] The sweet spot for Template Cache is **transactional emails, standard notifications, and fixed-format reports**. Order confirmations, shipping notifications, password reset emails, these are perfect candidates. You have a small set of templates with limited variables that get rendered thousands or millions of times. The cache hit rate is high, the memory footprint is manageable, and the performance improvement is measurable.

> [warmly] Ask the audience: "How many of you are rendering templates at high volume in your applications?"

[conversational] For scenarios with unbounded variable spaces or highly dynamic content, skip this pattern and focus on optimizing your template engine instead. Now let's move on to Pattern 9, which operates at a completely different layer of the stack.`
        }
      ]
    },
    {
      id: 'pattern-9',
      title: 'Pattern 9: Tool Call Cache',
      slides: [
        {
          id: 19,
          title: 'Pattern 9: Tool Call Cache',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="slideInRight" delay={0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>
                        What is Cached
                        <MermaidPopover
                          title="Tool Call Cache Flow"
                          diagram={`flowchart LR
    A["🔧 Tool Name + Arguments"] --> B{"🔍 Check Cache"}
    B -->|Hit| C["⚡ Return Cached Result"]
    B -->|Miss| D["🤖 Execute Tool"]
    D --> E["💾 Store Result"]
    E --> F["📤 Return"]
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffd700,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>Tool execution results (API responses, DB queries, calculations)</li>
                        <li>Function call outputs for deterministic tools</li>
                        <li>Metadata: execution time, success/error status</li>
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
                        <li>hash(tool_name + serialized_arguments + version)</li>
                        <li>Includes argument normalization and ordering</li>
                        <li>Tool version tag for schema changes</li>
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
                        <li>Redis/Memcached for fast lookup</li>
                        <li>DynamoDB/PostgreSQL for persistent storage</li>
                        <li>In-memory cache for frequently called tools</li>
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
                        <li>Variable TTL based on tool type (seconds to days)</li>
                        <li>Invalidate on tool schema/version changes</li>
                        <li>Context-aware expiration for data freshness</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#6b1d54',
          notes: `### Pattern 9: Tool Call Cache
[pleased] This is our ninth caching pattern: **Tool Call Cache**. This pattern operates at the tool execution layer, caching the results of external function calls and tool invocations. [enthusiastically] When your LLM agents need to call APIs, query databases, or perform calculations, tool call caching can dramatically reduce latency and cost.

#### What Gets Cached
[conversational] In this pattern, we cache **tool execution results**. These are the outputs from **API responses**, **database queries**, and **calculations** performed by your tools. When a language model decides to call a tool, like searching a knowledge base, fetching weather data, or calculating a complex formula, the result of that execution is what we store. We also cache **function call outputs for deterministic tools**, meaning tools that always return the same result for the same inputs. And we include **metadata** like execution time and success or error status, which helps with debugging and monitoring.

\\\`\\\`\\\`mermaid
flowchart LR
    A["🔧 Tool Name + Arguments"] --> B{"🔍 Check Cache"}
    B -->|Hit| C["⚡ Return Cached Result"]
    B -->|Miss| D["🤖 Execute Tool"]
    D --> E["💾 Store Result"]
    E --> F["📤 Return"]
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffd700,color:#000
\\\`\\\`\\\`

The flow is straightforward. When your agent decides to call a tool with specific arguments, we first check if we've cached that exact combination. On a cache hit, we return the stored result immediately, skipping the actual tool execution. On a miss, we execute the tool, store the result with a timestamp, and return it. This is especially powerful for expensive operations like API calls that have rate limits or cost money per invocation.

#### The Cache Key Strategy
[lecture] The cache key is \\\`hash(tool_name + serialized_arguments + version)\\\`. We combine the tool name, like \\\`get_weather\\\` or \\\`search_database\\\`, with the serialized arguments. Crucially, we **normalize argument ordering**, so \\\`get_weather(city="Seattle", units="metric")\\\` and \\\`get_weather(units="metric", city="Seattle")\\\` produce the same cache key. We also include a **tool version tag**, which is vital. If you change a tool's implementation or schema, you bump the version, and all previous cached results are naturally invalidated because they're keyed to the old version.

#### Storage Architecture
For storage, we use **Redis 👉 'red-iss' or Memcached 👉 'mem-cash-dee'** for fast lookup of frequently called tools. These in-memory stores provide sub-millisecond access times. For persistent storage of longer-lived results, we use **DynamoDB 👉 'die-namo-dee-bee' or PostgreSQL 👉 'post-gres'**. This gives us durability for tool results that should live beyond application restarts. And for the absolute hottest tools, ones called thousands of times per minute, we maintain an **in-memory application cache** to avoid even the network hop to Redis.

#### Time-to-Live Configuration
TTL 👉 'tee-tee-el' configuration is **variable based on tool type**. This is important because different tools have different freshness requirements. A tool that fetches stock prices might have a TTL 👉 'tee-tee-el' of thirty seconds, because stock prices change constantly. A tool that queries historical data or calculates mathematical constants might have a TTL of days or even weeks. We **invalidate on tool schema or version changes**, forcing re-execution when the tool's behavior changes. And we implement **context-aware expiration** for data freshness. If the underlying data source signals that data has changed, we can proactively invalidate cached results even before TTL expires.

#### When This Pattern Shines
[confidently] The **strengths** are compelling. First, you **dramatically reduce API costs and rate limit pressure**. If you're calling an external API that costs ten cents per request, and you can cache fifty percent of calls, you've just cut your API bill in half. Second, you **speed up agent response times**. Tool execution can be slow, especially for network calls or complex database queries. Cached results return in milliseconds instead of seconds. Third, you **enable offline or degraded mode operation**. If an external API goes down, you can still serve cached results to maintain partial functionality. And fourth, you **reduce load on downstream systems**. If you're querying your own database, caching tool results means fewer queries hitting your production database.

#### The Limitations
[cautiously] But there are real challenges. First, **stale data is a serious concern for non-deterministic or frequently changing tools**. If you cache a weather forecast and serve it six hours later, users get outdated information. You need careful TTL 👉 'tee-tee-el' management and potentially push-based invalidation from data sources. Second, there's **memory overhead for storing large tool outputs**. If your tool returns megabytes of data, like a large dataset or a rendered image, caching becomes expensive. You might need to cache only metadata or references. Third, **argument serialization complexity** can bite you. If your tool accepts complex objects or nested data structures, you need to serialize them consistently. Two semantically identical arguments that serialize differently will miss the cache. And fourth, **privacy and security concerns** are paramount. If your tools handle user-specific data, you must ensure cache keys are properly scoped to prevent data leakage between users.

Let's dive deeper into the trade-offs on the next slide.`
        },
        {
          id: 20,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="slideInBottom" delay={0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      <strong>Strengths</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Dramatically reduces API costs and rate limit pressure</li>
                      <li>Speeds up agent response times significantly</li>
                      <li>Enables offline or degraded mode operation</li>
                      <li>Reduces load on downstream systems</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      <strong>Limitations</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Stale data concerns for non-deterministic tools</li>
                      <li>Memory overhead for large tool outputs</li>
                      <li>Argument serialization complexity</li>
                      <li>Privacy and security concerns for user-specific data</li>
                    </ul>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#6b1d54',
          notes: `### Strengths and Limitations
[conversational] Let's examine the Tool Call Cache pattern more deeply to understand when it delivers exceptional value and where you need to navigate carefully.

#### The Economic Advantage
[pleased] On the **strengths** side, the most immediate benefit is **dramatically reducing API costs and rate limit pressure**. Let me give you a concrete example. Imagine you're building an agent that helps users book flights. One of your tools calls a flight search API that costs fifteen cents per request and has a rate limit of one hundred requests per minute. Without caching, if ten users all search for flights from Seattle to New York on the same day, you make ten separate API calls costing a dollar fifty.

With tool call caching, the first user's search executes the API call, and the result gets cached for, say, fifteen minutes. The next nine users get instant results from cache. You've reduced ten API calls to one, saving a dollar thirty-five. More importantly, you've reduced your rate limit consumption from ten requests to one. At scale, if you're processing ten thousand tool calls per hour, and you achieve a sixty percent cache hit rate, you're saving six thousand API calls per hour. That's real money and operational headroom.

#### The Performance Win
[enthusiastically] The second major strength is **speeding up agent response times significantly**. Tool execution is often the slowest part of agent workflows. A database query might take two hundred milliseconds. An external API call might take five hundred milliseconds or more, especially if you're dealing with third-party services that have variable latency. Cached tool results return in single-digit milliseconds from Redis 👉 'red-iss' or instantaneously from in-memory cache.

This compounds when agents make multiple tool calls in sequence. If your agent needs to call three tools to answer a question, and each tool call takes three hundred milliseconds, that's nine hundred milliseconds total. With caching, if all three are cache hits, you're looking at maybe five milliseconds total. The user perceives this as nearly instant versus a noticeable delay. In conversational AI, where users expect snappy responses, this latency reduction is transformative.

#### Resilience and Reliability
The third strength is **enabling offline or degraded mode operation**. This is subtle but incredibly valuable for production systems. When an external API goes down, and they all do eventually, your agent can still function by serving cached results. Yes, the data might be slightly stale, but it's better than complete failure. You can also implement graceful degradation where you serve cached results with a warning: "This data is from our cache and may not reflect the latest information."

I've seen systems where tool call caching turned what would have been a total outage into a minor user experience degradation. The monitoring team got alerted that the API was down, but users continued to get responses. By the time the API came back online, most users hadn't even noticed the problem. That's the kind of resilience that earns trust with your users.

#### Protecting Your Infrastructure
The fourth strength is **reducing load on downstream systems**. If your tools query your own production database, every tool call is a query hitting your database. At scale, this can be significant. Imagine you have a tool that fetches user profile information. Without caching, every agent conversation that needs that user's profile hits the database. With caching, you fetch it once per user per TTL 👉 'tee-tee-el' period. If you have ten thousand active users and a one-hour TTL, you're looking at ten thousand database queries over an hour instead of potentially hundreds of thousands if each user has multiple conversations.

This doesn't just save database resources. It also reduces the risk of cascading failures. If your agent system suddenly gets a traffic spike, tool call caching prevents that spike from overwhelming your database or external APIs. You're essentially using the cache as a buffer that smooths out traffic patterns.

#### The Freshness Challenge
[cautiously] Now for the **limitations**, and these are real. First and most important is the **stale data concern for non-deterministic or frequently changing tools**. Not all tools are cacheable. A tool that returns the current time should never be cached. A tool that checks stock prices needs very short TTLs. A tool that queries real-time inventory needs careful invalidation logic.

The challenge is that LLMs 👉 'el-el-ems' don't understand staleness. If you cache a weather forecast and serve it twelve hours later, the LLM will confidently present that stale data as current information. Users will make decisions based on outdated weather. This is dangerous. You need to be disciplined about **identifying which tools are safe to cache** and setting appropriate TTLs. As a rule of thumb, deterministic tools like calculators, formatters, or reference lookups are excellent candidates. Non-deterministic tools like live data queries need short TTLs or no caching at all.

#### The Storage Math
[concerned] The second limitation is **memory overhead for large tool outputs**. Some tools return small results: a number, a boolean, a short string. These are cheap to cache. But some tools return large payloads: entire documents, lists of hundreds of items, serialized objects with nested data. If your tool returns fifty kilobytes of data, and you're caching a million tool results, that's fifty gigabytes of cache storage.

Redis 👉 'red-iss' pricing for fifty gigabytes can be substantial, maybe two hundred dollars per month depending on your hosting provider. You need to weigh that cost against the savings from avoiding tool execution. Sometimes it's more economical to cache only metadata or to cache compressed versions of results. Other times, you selectively cache only the smallest or most frequently called tool results and let the larger ones always execute fresh.

#### Serialization Complexity
The third limitation is **argument serialization complexity**. This is a technical challenge that bites you in subtle ways. Imagine a tool that accepts a list of tags. Is \\\`["python", "javascript"]\\\` the same as \\\`["javascript", "python"]\\\`? Semantically, maybe yes. But if you serialize them naively, they produce different cache keys, so you get cache misses even though the tool would return identical results.

You need to implement **argument normalization**. Sort lists, canonicalize JSON structures, handle floating-point precision carefully, and deal with null versus undefined versus missing fields. This adds complexity to your caching layer. Get it wrong, and you either get cache misses for semantically identical calls, or worse, you get cache hits for semantically different calls, returning incorrect results.

Some teams handle this by defining a strict serialization protocol for each tool, specifying exactly how arguments should be normalized before hashing. This works but requires discipline and documentation. Others use content-based hashing where you hash the semantic meaning, not the exact representation. Both approaches have trade-offs.

#### Privacy and Security
[seriously] The fourth limitation is **privacy and security concerns for user-specific data**. If your tool fetches user profile information, account balances, or any personal data, caching becomes fraught with risk. You must ensure that cache keys are properly scoped to prevent user A from accidentally seeing user B's data due to a cache collision or key collision.

This typically means including a user identifier in the cache key: \\\`hash(tool_name + arguments + user_id + version)\\\`. But this reduces cache hit rates because results are no longer shared across users. You also need to think about data retention policies. If a user deletes their account, do you have a process to purge all cached tool results associated with that user? What about GDPR 👉 'gee-dee-pee-are' right-to-erasure requests?

And then there's the question of what to cache. Should you cache social security numbers, payment tokens, or health information? Often the answer is no, even if caching would be technically beneficial. The security risk outweighs the performance gain. You end up with a policy where certain tool types are never cached, period.

#### Best Practices for Implementation
Successful Tool Call Cache implementations follow a few patterns. First, **classify your tools by cacheability**. Create tiers: always cacheable for deterministic tools, conditionally cacheable for tools with appropriate TTLs, and never cacheable for sensitive or real-time tools. Document this taxonomy and enforce it in your caching layer.

Second, implement **cache observability**. Track cache hit rates per tool, average TTL 👉 'tee-tee-el' until expiration, and the cost savings from avoided API calls. This data helps you tune TTLs and identify which tools benefit most from caching. You might discover that eighty percent of your savings come from twenty percent of your tools, guiding you to optimize those specifically.

Third, use **cache warming strategies** for predictable workloads. If you know that certain tools get called frequently at the start of every user session, pre-populate the cache during off-peak hours. This ensures high cache hit rates when users arrive.

Fourth, consider **partial caching** for tools with mixed deterministic and non-deterministic components. For example, a tool that fetches user data and does expensive calculations might cache the calculated result but always fetch fresh user data. You're caching the computation, not the data.

#### When to Use This Pattern
[lecture] Tool Call Cache is most valuable in **agent systems with high tool call volume and significant call repetition**. If your agents are answering similar questions across many users, like customer support bots or documentation helpers, tool call patterns converge. Caching becomes very effective.

It's also ideal for **expensive or rate-limited external APIs**. If you're paying per API call or dealing with strict rate limits, caching is often your only option to scale economically. And it's valuable for **tools with stable, slowly changing data**, like reference databases, configuration lookups, or historical data queries.

It's less valuable in **highly personalized, unique tool calls** where every request has different arguments. If your agents are generating unique queries for every user, cache hit rates will be low. It's also challenging in **real-time systems** where staleness is unacceptable. If users demand up-to-the-second accuracy, you can't cache, or you need extremely short TTLs that reduce the benefit.

> [warmly] Ask the audience: "How many of you are building agents that make repeated external API calls or database queries?"

[conversational] With that comprehensive understanding of Tool Call Cache, let's move to Pattern 10, which shifts our focus to the personalization layer and conversation continuity.`
        }
      ]
    },
    {
      id: 'pattern-10',
      title: 'Pattern 10: Session Memory',
      slides: [
        {
          id: 21,
          title: 'Pattern 10: Session Memory',
          icon: { name: 'duo-circle-nodes' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>
                        What is Cached
                        <MermaidPopover
                          title="Session Memory Flow"
                          diagram={`flowchart LR
    A["📝 User Message"] --> B["🔑 Session ID"]
    B --> C["📂 Load Context + History"]
    C --> D["⚙️ Process"]
    D --> E["🔄 Update Session"]
    E --> F["💾 Store"]
    style A fill:#4fc3f7,color:#000
    style F fill:#81c784,color:#000
    style D fill:#ffd700,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <ul>
                        <li>Conversation history and message sequences</li>
                        <li>User preferences, personalization data, and context</li>
                        <li>Session state including active workflows and partial completions</li>
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
                        <li>session_id or user_id + conversation_id</li>
                        <li>Namespaced per application domain or tenant</li>
                        <li>Includes version tag for session schema changes</li>
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
                        <li>Redis/Memcached for active sessions</li>
                        <li>PostgreSQL/DynamoDB for persistent storage</li>
                        <li>Tiered storage with hot/warm/cold layers</li>
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
                        <li>Active sessions: 30 minutes to 24 hours</li>
                        <li>Archived conversations: 30-90 days</li>
                        <li>Sliding window expiration on user activity</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: `### Pattern 10: Session Memory
[warm] Welcome to Pattern 10, the **Session Memory** pattern. [storytelling] This is where we shift from caching computational artifacts like embeddings or retrieval results to caching the conversational and personalization context that makes your LLM 👉 'el-el-em' application feel continuous and personalized across multiple interactions.

#### What Gets Cached
[conversational] In this pattern, we cache **conversation history and message sequences**. Think about a typical chatbot interaction. When a user says "Tell me more about that," the system needs to know what "that" refers to. The entire conversation history, the back-and-forth exchanges between the user and the assistant, needs to be readily available. We're storing complete message sequences with timestamps, roles like user or assistant or system, and the full content of each message.

\\\`\\\`\\\`mermaid
flowchart LR
    A["📝 User Message"] --> B["🔑 Session ID"]
    B --> C["📂 Load Context + History"]
    C --> D["⚙️ Process"]
    D --> E["🔄 Update Session"]
    E --> F["💾 Store"]
    style A fill:#4fc3f7,color:#000
    style F fill:#81c784,color:#000
    style D fill:#ffd700,color:#000
\\\`\\\`\\\`

When a message comes in, we use the session ID to load the existing context and history. The system processes the new message with full awareness of what came before. After generating a response, we update the session state and store it back. This creates the illusion of memory and continuity.

We're also caching **user preferences, personalization data, and context**. This includes things like the user's preferred language, their communication style, whether they want technical details or simplified explanations, their timezone, their role or job function. Any information that personalizes the interaction without being sensitive enough to require special handling.

And we cache **session state including active workflows and partial completions**. If a user is in the middle of a multi-step process, like filling out a form or debugging an issue, that state needs to persist across messages. If they ask a side question, then say "okay, back to what we were doing," the system needs to know exactly where they left off.

#### The Performance Impact
[pleased] Session memory is absolutely critical for user experience. Without it, every message feels like starting over. The user has to re-establish context every single time. It's frustrating and breaks the flow of conversation. With session memory, interactions feel natural. The system remembers who the user is, what they've been talking about, and where they're trying to go. The hit on performance is minimal because we're just loading structured data, not running models.

#### The Cache Key Strategy
The cache key is straightforward: \\\`session_id or user_id + conversation_id\\\`. The **session_id** uniquely identifies this particular conversation thread. Some systems use a combination of **user_id** and **conversation_id** to allow users to maintain multiple parallel conversations. You also want to **namespace per application domain or tenant** if you're running a multi-tenant system. User one-two-three's session in Tenant A should never collide with user one-two-three's session in Tenant B.

And you **include a version tag for session schema changes**. As your application evolves, the structure of what you store in sessions will change. Maybe you add new fields for new features. The version tag ensures you can migrate or handle legacy sessions gracefully without breaking active conversations.

#### Storage Architecture and Tiering
For **active sessions**, we use **Redis 👉 'red-iss' or Memcached 👉 'mem-cached'**. These in-memory stores give you sub-millisecond access times. When a message comes in, you can load the full session state instantly. For **persistent storage**, especially for archived conversations, we drop down to **PostgreSQL 👉 'post-gres-cue-el' or DynamoDB 👉 'die-nam-oh-dee-bee'**. These provide durability and allow you to query historical conversations for analytics or auditing.

The best practice is **tiered storage with hot, warm, and cold layers**. Hot is your active sessions in Redis. Warm is recently ended sessions that you keep in a database with fast SSD storage. Cold is archived conversations older than thirty or ninety days that you move to cheaper, slower storage like S3 👉 'ess-three' or Glacier.

#### Time-to-Live Configuration
For **active sessions**, you typically use **thirty minutes to twenty-four hours**. If a user stops responding, their session expires after that period. This keeps your hot storage from filling up with abandoned sessions. For **archived conversations**, you might keep them for **thirty to ninety days** depending on your retention policy and compliance requirements.

And you use **sliding window expiration on user activity**. Every time the user sends a message, you reset the TTL 👉 'tee-tee-el'. This means an active conversation never expires mid-discussion, but once the user goes quiet, the timer starts counting down.

#### When This Pattern Shines
[confidently] Session memory is essential for **multi-turn conversations** where context accumulates. Customer support bots, coding assistants, personal assistants, anything where the conversation builds over multiple exchanges. It's critical for **personalization** where you're tailoring responses based on user preferences or history. And it's valuable for **workflow continuity**, like debugging sessions, form filling, or guided troubleshooting.

#### The Limitations
[cautiously] The main limitation is **storage growth**. Conversations can get long. A debugging session might have fifty or a hundred messages. If each message is a few hundred tokens, and you're storing thousands of sessions, that adds up. You need a strategy for truncating or summarizing old conversation history to fit within context windows and storage constraints.

You also have **privacy and compliance concerns**. Session data often contains personally identifiable information 👉 'pee-eye-eye'. You need to handle it carefully, ensure proper encryption at rest and in transit, and comply with regulations like GDPR 👉 'gee-dee-pee-are' or HIPAA 👉 'hip-ah'. And you need to provide mechanisms for users to delete their data if they request it.

> [warmly] Ask the audience: "How many of you are building conversational agents that need to remember context across multiple turns?"

[conversational] With that understanding of Session Memory, let's look at the strengths and limitations in more detail.`
        },
        {
          id: 22,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      <strong>Strengths</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Enables natural multi-turn conversations with context continuity</li>
                      <li>Personalizes responses based on user history and preferences</li>
                      <li>Maintains workflow state across interruptions</li>
                      <li>Fast access for active sessions with tiered storage</li>
                    </ul>
                  </div>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '12px' }} darkModeInvert={true} />
                      <strong>Limitations</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Storage grows linearly with conversation length</li>
                      <li>Privacy and compliance concerns with PII storage</li>
                      <li>Context window limitations require truncation strategies</li>
                      <li>Data retention and deletion mechanisms needed</li>
                    </ul>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: `### Strengths and Limitations
[storytelling] Let's dive deeper into when Session Memory is your best friend and when you need to be cautious about its implementation.

#### The Good Stuff
[pleased] On the **strengths** side, Session Memory is transformative for user experience. The first and most obvious benefit is that it **enables natural multi-turn conversations with context continuity**. Users can ask follow-up questions, refer back to earlier points in the conversation, and build complex discussions over time. They can say things like "what about the alternative you mentioned earlier?" and the system knows exactly what they're talking about. This is the difference between a chatbot that feels like a stateless form and one that feels like talking to a knowledgeable assistant.

Second, it **personalizes responses based on user history and preferences**. If a user always prefers concise answers, you remember that. If they're a developer who wants code examples, you adapt. If they're in a particular timezone or speak a specific language, you tailor the experience. This personalization creates a much more satisfying and efficient interaction. Users don't have to repeatedly specify their preferences.

Third, it **maintains workflow state across interruptions**. Real conversations are messy. Users jump around, ask side questions, get distracted. If you're helping a user debug their code and they suddenly ask "hey, what's the weather like?", you need to answer that but also remember you were in the middle of debugging. When they say "okay, back to the bug," you pick up exactly where you left off. This robustness to interruptions is critical for complex tasks.

And fourth, you get **fast access for active sessions with tiered storage**. The sessions users are actively engaged with live in Redis 👉 'red-iss' or another in-memory store, giving you sub-millisecond retrieval times. Older sessions get tiered to cheaper, slower storage. This lets you balance performance and cost effectively.

#### The Trade-offs
[seriously] Now for the **limitations**. First, **storage grows linearly with conversation length**. Every message adds to the session. A long debugging conversation, a complex customer support interaction, or a day-long coding session can result in hundreds of messages. At some point, you need to decide what to keep and what to truncate or summarize. This is especially important if you're passing the full history to the LLM 👉 'el-el-em' as part of the prompt. Models have context window limits. GPT-4 👉 'gee-pee-tee four' might support a hundred and twenty-eight thousand tokens, but you still can't store infinite history.

Second, there are **privacy and compliance concerns with PII 👉 'pee-eye-eye' storage**. Conversations often contain personal information. User names, email addresses, account numbers, health information, financial details. You're storing all of this in your session cache. That means you need encryption at rest, encryption in transit, access controls, audit logging, and the ability to comply with regulations like GDPR 👉 'gee-dee-pee-are', which gives users the right to request deletion of their data, or HIPAA 👉 'hip-ah' in healthcare contexts.

Third, **context window limitations require truncation strategies**. As conversations grow, you'll exceed the model's context window. You need a strategy for what to keep. Do you truncate the oldest messages? Do you summarize the conversation history periodically? Do you keep only the most recent N messages plus an initial summary? Each approach has trade-offs. Truncation loses information. Summarization adds latency and cost. You need to choose carefully based on your use case.

And fourth, you need **data retention and deletion mechanisms**. You can't keep sessions forever. They'll fill up your storage, and many users won't want their conversations stored indefinitely. You need clear retention policies, TTLs 👉 'tee-tee-els' that match your use case, and mechanisms to purge old data. And you need to handle user-initiated deletions, which might happen asynchronously if the data has been tiered to cold storage.

#### Best Practices
[confidently] Despite these limitations, the benefits are huge. The best practice is to implement Session Memory with a **clear data lifecycle**. Active sessions in hot storage, recent sessions in warm storage, archived sessions in cold storage, and automated purging based on TTL. Use **compression for long conversations** to save storage space. Implement **PII detection and redaction** where appropriate. And provide users with **transparency and control** over their data.

> [warmly] Ask the audience: "How do you currently handle conversation history in your applications? Are you storing it, or starting fresh each time?"

[conversational] With that comprehensive understanding of Session Memory, let's move on to Pattern 11, which shifts our focus back to retrieval optimization with a different angle.`
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
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-tags" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>
                        What is Cached
                        <MermaidPopover
                          title="Ranked Results Cache Flow"
                          diagram={`flowchart LR
    A["📝 Query"] --> B["🔍 Initial Retrieval"]
    B --> C["📋 Candidate List"]
    C --> D{"🔍 Cache?"}
    D -->|Hit| E["⚡ Return Ranked Results"]
    D -->|Miss| F["🤖 Re-Ranker Model"]
    F --> G["💾 Store Rankings"]
    G --> E
    style A fill:#4fc3f7,color:#000
    style E fill:#81c784,color:#000
    style F fill:#ffd700,color:#000`}
                        />
                      </strong>
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
              </GSAPAnimated>

              <GSAPAnimated animation="rotateIn" delay={0.3}>
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d6b5c',
          notes: `### Pattern 11: Ranked Results Cache (Post Re-Ranker)
[confident] Let's examine **Pattern 11: Ranked Results Cache**, which addresses one of the most expensive operations in modern RAG systems: re-ranking.

#### The Re-Ranking Problem
[lecture] In a typical RAG pipeline, you first do a fast but approximate retrieval using vector similarity search. This gives you maybe a hundred or two hundred candidate documents. But vector search alone isn't always accurate enough for the final ranking. The semantic similarity scores from bi-encoder models like **text-embedding-ada-002 👉 'text embedding ada zero zero two'** or **all-MiniLM 👉 'all mini-el-em'** are directionally correct but not precise enough for selecting the top five or ten documents to include in your context.

That's where re-ranking comes in. You take those candidates and run them through a more sophisticated model, usually a **cross-encoder** or even a small **LLM 👉 'el-el-em'** like **GPT-3.5 👉 'gee-pee-tee three point five'** or **Llama-3-8B 👉 'lah-mah three eight bee'**, that scores each candidate's relevance to the query with much higher accuracy. The problem? Re-ranking is expensive. A cross-encoder requires a forward pass for each query-document pair. If you have a hundred candidates, that's a hundred forward passes. This can take several hundred milliseconds and consumes significant compute resources.

\\\`\\\`\\\`mermaid
flowchart LR
    A["📝 Query"] --> B["🔍 Initial Retrieval"]
    B --> C["📋 Candidate List"]
    C --> D{"🔍 Cache?"}
    D -->|Hit| E["⚡ Return Ranked Results"]
    D -->|Miss| F["🤖 Re-Ranker Model"]
    F --> G["💾 Store Rankings"]
    G --> E
    style A fill:#4fc3f7,color:#000
    style E fill:#81c784,color:#000
    style F fill:#ffd700,color:#000
\\\`\\\`\\\`

When a query comes in, we perform the initial retrieval, which gives us a candidate list. Before re-ranking, we check the cache. If we have a hit, we return the pre-computed ranked results immediately, skipping the expensive re-ranker entirely. On a miss, we run the re-ranker, store those rankings in the cache, and then return them. The key insight is that for similar or identical queries, the ranked order of candidates is often very similar or identical.

#### What Gets Cached
[conversational] We're caching the **final reranked candidate list with their relevance scores**. This is the output of your **cross-encoder or LLM re-ranker**. Each cache entry contains an ordered list of document IDs along with their computed relevance scores. Typically, you're storing the top ten to fifty results. You don't need to store all hundred candidates, just the ones that might actually be used in context.

The cache value is relatively compact. If each document ID is a sixteen-byte UUID and each score is an eight-byte float, storing fifty results is about one point two kilobytes per cache entry. Very manageable. You might also store snippet metadata or a hash of the actual document content to detect staleness, but the core value is the ranked list of IDs and scores.

#### The Cache Key Strategy
[lecture] The cache key is sophisticated: \\\`hash(query_norm + candidate_ids + reranker_version + topN + filters)\\\`. Let's break this down. The **query_norm** is your normalized query text. This handles query variations, so "what is python?" and "What is Python?" hit the same cache entry. The **candidate_ids** are critical and often overlooked. The same query might retrieve different candidates if your vector index has been updated. Including a representation of the candidate set ensures you're only getting cache hits when the underlying candidates match.

The **reranker_version** is essential because re-ranker models, like any models, evolve. If you upgrade your cross-encoder from version one to version two, the scores and rankings might change. You need to invalidate old cache entries or version your keys to prevent serving stale rankings. The **topN** parameter specifies how many results you want returned. If one request asks for top five and another asks for top ten, they should hit different cache entries. Finally, **filters** capture any context-specific constraints, like filtering by document date, category, or user permissions. Different filters produce different rankings, so they must be part of the key.

#### Storage Architecture
We store these in **Redis 👉 'red-iss' with TTL 👉 'tee-tee-el' support**. Redis is ideal because it's fast, supports automatic expiration, and handles complex data structures well. You can store the ranked list as a sorted set or a simple JSON blob, depending on your needs. The cache is **region-scoped to align with your retrieval services**. If you have retrieval pipelines in multiple regions, each region has its own cache instance to minimize latency. You don't want a US request waiting for a cache lookup in Europe.

For **large candidate lists**, you can apply **optional compression**. If you're storing fifty document IDs with metadata and scores, and the IDs are UUIDs, compression can reduce the payload by thirty to fifty percent. This is especially valuable if you're caching thousands or millions of queries and memory cost is a concern.

#### Time-to-Live Configuration
The TTL is **short, typically five to thirty minutes**. Why so short? Because re-ranking results are dependent on the underlying candidate set. If your document index changes, if documents are added, updated, or deleted, the rankings become stale. A short TTL ensures you don't serve outdated results for too long. For systems with high update frequencies, you might go as low as five minutes. For more static document sets, thirty minutes or even an hour might be acceptable.

You also implement **purging when the candidate document set changes**. If you update or delete a document that was in the candidate list, you invalidate any cache entries that reference it. This is event-based invalidation. It's more complex to implement but ensures you never serve results with missing or stale documents. Similarly, you use **event-based invalidation on re-ranker model updates**. When you deploy a new version of your re-ranker, you flush all cached rankings to ensure consistency.

#### The Critical Trade-Off
[cautiously] The primary trade-off here is **freshness versus cost**. Re-ranking is expensive, so caching it saves significant compute and latency. But cached rankings can become stale quickly in dynamic systems. You're betting that the benefit of avoiding re-ranking outweighs the risk of serving slightly outdated results. For systems where accuracy is paramount, this trade-off might not be acceptable. For systems where speed and cost matter more than absolute precision, it's a huge win.

Another consideration is **cache key explosion**. If your re-ranker uses many filters or if candidate sets vary widely, you might end up with very low hit rates. Each unique combination of query, candidates, and filters creates a separate cache entry. If you're not careful, you spend more on cache storage and lookup overhead than you save on re-ranking. This is where analyzing your query patterns and candidate distributions is essential.

Let's examine the strengths and limitations on the next slide.`
        },
        {
          id: 24,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="bounceIn" delay={0.5}>
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d6b5c',
          notes: `### Strengths and Limitations of Ranked Results Cache
[conversational] Now let's examine where the **Ranked Results Cache** delivers exceptional value and where you need to manage its challenges carefully.

#### The Performance Revolution
[enthusiastically] On the **strengths** side, the primary benefit is that you're **avoiding expensive re-ranking computation**. Re-ranking is one of the most costly operations in modern RAG systems. A cross-encoder like **ms-marco-MiniLM 👉 'em-ess marco mini-el-em'** or **bge-reranker 👉 'bee-gee-ee reranker'** requires a full forward pass for each query-document pair. If you have a hundred candidates, that's a hundred individual computations. Even on a GPU, this can take two hundred to five hundred milliseconds. LLM-based re-rankers, which are becoming popular, are even more expensive. Running **GPT-3.5 👉 'gee-pee-tee three point five'** or **Claude 👉 'clawed'** to score relevance can take a second or more and costs real money per API call.

By caching the re-ranked results, you bypass this entire expense for repeat queries. The cache hit is effectively free, just a Redis lookup that takes a millisecond or two. For applications with high query repetition, like customer support FAQs, product search, or documentation lookup, you can achieve hit rates of fifty to seventy percent or more. The cost savings compound quickly. If re-ranking costs you point-zero-one cents per query and you're processing a million queries per month with a sixty percent hit rate, that's six thousand dollars saved monthly just from this one caching layer.

#### Latency and Throughput Benefits
[pleased] The second strength is that this pattern **significantly lowers end-to-end latency**. Users don't wait for re-ranking. They get results immediately from the cache. This can shave three hundred to eight hundred milliseconds off your total response time. In user-facing applications, especially search and chat interfaces, every hundred milliseconds matters. Studies show that each hundred-millisecond increase in latency reduces user engagement. By caching re-ranked results, you're keeping your **P95 👉 'pee ninety-five'** and **P99 👉 'pee ninety-nine'** latencies low, which translates to better user experience and higher satisfaction scores.

The third strength is that you're **reducing load on expensive cross-encoder models**. Cross-encoders are often run on GPUs, which are resource-constrained and expensive. By serving cached results, you reduce the number of re-ranking requests hitting your GPU infrastructure. This increases your effective throughput. A single GPU that might handle fifty re-ranking requests per second without caching could effectively serve several hundred requests per second with a good cache hit rate. This means you need fewer GPUs, lower operational costs, and better resource utilization.

#### When This Pattern Shines
[confidently] This pattern **works exceptionally well for high-frequency similar queries**. If your users are repeatedly asking variations of the same questions, the cache hit rate will be excellent. Think about customer support: "How do I reset my password?" appears in dozens of forms. If your normalization is good, all those variations hit the same cache entry. E-commerce search is similar. Queries like "best laptops under a thousand dollars" and "top laptops under one thousand dollars" should ideally normalize to the same cache key and return identical rankings.

#### The Staleness Challenge
[cautiously] Now for the **limitations**, and the primary one is that **results become stale if retrieval patterns shift**. If your document collection is dynamic, if you're constantly adding, updating, or removing documents, the cached rankings can quickly become outdated. A document that was ranked number three yesterday might have been updated and should now be number one. Or a highly-ranked document might have been deleted entirely. Serving stale rankings is worse than serving slower but fresh results, because it degrades the user experience and trust in your system.

This is why the **TTL 👉 'tee-tee-el'** is critical. You need to balance freshness with performance. A five-minute TTL means you're never more than five minutes stale, but it also means lower cache hit rates because entries expire quickly. A thirty-minute TTL improves hit rates but increases the risk of staleness. The right choice depends on your document update frequency and your tolerance for outdated results.

#### Filter Explosion Problem
[concerned] The second limitation is **filter explosion leading to low cache hit rates**. If your re-ranker supports many filter combinations, like filtering by date, category, user permissions, language, region, and content type, you end up with a combinatorial explosion of cache keys. Each unique combination creates a separate cache entry. If you have ten boolean filters, that's potentially one thousand and twenty-four different cache keys for the same base query. Your effective hit rate plummets because each user's specific filter combination is unique.

This is a fundamental challenge with parameterized caching. You can mitigate it by identifying the most common filter combinations and only caching those, or by caching at a coarser granularity, like caching re-ranked results without filters and then applying filters post-cache. But these approaches add complexity and might not always be feasible depending on how your re-ranker integrates filters.

#### Version Sensitivity
[firmly] The third limitation is **high sensitivity to reranker model version changes**. When you update your re-ranker, whether you're fine-tuning it, upgrading to a new version, or switching to a different model entirely, all cached results become invalid. The new model produces different scores and potentially different rankings. You must flush the entire cache or carefully version your keys to ensure you don't serve results from the old model.

This creates an operational burden. Every model deployment requires cache invalidation and a warm-up period where hit rates are low as the cache repopulates. For teams that iterate frequently on their re-rankers, this constant invalidation can significantly reduce the effectiveness of caching. You need robust versioning strategies and potentially shadow testing to validate that new models perform better before cutting over.

#### Candidate Set Consistency
The fourth limitation is that you **require a consistent candidate set between cache and live evaluation**. The cached rankings are tied to a specific set of candidate documents. If your retrieval step returns a different candidate set for the same query, because your vector index was updated or your retrieval logic changed, the cached rankings become meaningless or incorrect. You might be ranking documents that no longer exist or missing new, highly-relevant documents.

This coupling between retrieval and re-ranking caches adds architectural complexity. You need mechanisms to detect when the candidate set has changed and invalidate affected cache entries. This often requires tracking document versions or index snapshots and including those in your cache keys, which further increases key complexity and reduces hit rates.

#### The Engineering Investment
[lecture] Implementing this pattern effectively requires significant engineering. You need robust key generation that captures all relevant parameters, sophisticated invalidation logic for document updates and model changes, monitoring to track hit rates and staleness metrics, and potentially A/B testing infrastructure to measure the quality impact of caching versus live re-ranking. This isn't a trivial "add Redis and you're done" scenario.

[confidently] But for systems where re-ranking is a major cost and latency driver, and where query patterns have sufficient repetition, the investment pays off handsomely. You're trading engineering complexity for significant cost savings and performance improvements.

[conversational] With Pattern 11 complete, let's move on to Pattern 12, which focuses on caching at a different granularity.`
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
            <div style={{ fontSize: '2rem', lineHeight: '1.5', position: 'relative' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="Summarization Cache Flow"
                  diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    A["📄 Source Document"] --> B{"📦 Cached Summary?"}
    B -->|"Hit"| C["⚡ Return Summary"]
    B -->|"Miss"| D["🤖 LLM Summarization"]
    D --> E["💾 Cache: doc_id + version"]
    E --> C

    subgraph Levels["Multi-Granularity Summaries"]
        L1["📚 Doc-Level"]
        L2["📑 Section-Level"]
        L3["📋 Chunk-Level"]
    end

    C --> Levels

    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffd700,color:#000
    style E fill:#e1bee7,color:#000
    style Levels fill:#f5f5f5,stroke:#1976d2,stroke-width:2px,color:#000`}
                />
              </div>
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
          notes: `### Pattern 12: Summarization Cache
[confident] Here's Pattern 12, the **Summarization Cache**. [lecture] This pattern operates at a different granularity than we've seen so far. Instead of caching raw text or embeddings, we're caching pre-generated summaries of documents at multiple levels: document-level, section-level, and chunk-level summaries.

[conversational] This is particularly powerful for RAG systems that need to process long documents. [pleased] Rather than re-summarizing the same content repeatedly, you cache these summaries and their embeddings, dramatically reducing the context size you need to send to your LLM.

[lecture] The cache key includes the document ID, segment ID, summary prompt version, model ID, and locale. [seriously] Version tracking is critical here because summary quality can drift over time as models evolve.

[confidently] Storage uses object stores plus metadata indexes, with Redis for hot summaries. [conversational] TTLs are long - weeks to months - with event-driven invalidation when source documents update.

[inspiringly] Let's look at the strengths and limitations on the next slide.`
        },
        {
          id: 26,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
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
          notes: `### Strengths and Limitations
[pleased] The **strengths** of Summarization Cache are compelling. [excited] Summaries can be reused across multiple different queries, dramatically reducing context tokens in RAG systems. [enthusiastically] This speeds up answer generation with pre-processed insights, and reduces costs significantly.

[cautiously] But there are **limitations** to consider. [concerned] First, there's storage overhead for multiple granularity levels. You're maintaining document, section, and chunk summaries, which multiplies your storage needs. [disappointed] Second, summary quality can variance and potentially drift over time as source content or models change. [firmly] Third, this requires strong governance and version tracking to ensure summaries remain accurate and up-to-date.

[conversational] The key is balancing the benefits of reduced context size against the complexity of managing multi-level summaries.

[inspiringly] Now let's move to our final pattern, Pattern 13, which brings us back to the simplest and often most effective caching approach.`
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
            <div style={{ fontSize: '2rem', lineHeight: '1.5', position: 'relative' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="Final Answer Cache: Query → TTL Flow"
                  diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    A["📝 User Query"] --> B["🔤 Normalize Query"]
    B --> C["🔑 hash(query + lang + model_id)"]
    C --> D{"📦 Cache Hit?"}
    D -->|"Hit"| E["⚡ Return Cached Answer"]
    D -->|"Miss"| F["🤖 LLM Generation (temp=0)"]
    F --> G["💾 Store with TTL (mins → days)"]
    G --> E

    style A fill:#4fc3f7,color:#000
    style E fill:#81c784,color:#000
    style F fill:#ffd700,color:#000
    style G fill:#e1bee7,color:#000`}
                />
              </div>
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
          notes: `### Pattern 13: Final Answer Cache with TTL
[cheerfully] And here we are at Pattern 13, the **Final Answer Cache with TTL**! [pleased] This is the simplest and most straightforward caching pattern - exact query to final answer mapping.

[lecture] What gets cached? The exact query maps to the final answer, typically using temperature equals zero for consistency. [conversational] You can optionally include citations and links to sources.

[seriously] The cache key is comprehensive: hash of normalized query plus language, model ID, prompt version, and decoding parameters. [cautiously] Query normalization is absolutely critical for hit rate.

[confident] Storage is simple: Redis for high throughput applications, or CDN and edge caching for public endpoints. [firmly] Encryption is required for private user data.

[lecture] TTLs range from minutes to days based on data volatility. [seriously] You need manual purge hooks for emergency hotfixes, and shorter TTLs for rapidly changing information.

[conversational] Let's examine the strengths and limitations on the next slide.`
        },
        {
          id: 28,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
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
          notes: `### Strengths and Limitations
[pleased] The **strengths** of Final Answer Cache are fantastic. [excited] This is the easiest caching pattern to implement! [enthusiastically] You get a huge latency win on frequently asked questions, it's excellent for FAQs and common queries, and it reduces overall token usage significantly.

[cautiously] But the **limitations** are real. [disappointed] You'll see low hit rates on long-tail queries - those unique questions that don't repeat. [concerned] The cache is brittle to small wording differences in queries. "How do I reset my password?" versus "Help me reset my password" might miss the cache despite being the same intent. [seriously] There are freshness and consistency risks over time, and you need a robust invalidation mechanism.

[conversational] The key insight is that this pattern works brilliantly for common queries but struggles with diversity. [confidently] If your application has concentrated query patterns - like customer support FAQs - this is one of your most valuable patterns. [cautiously] If queries are highly diverse and unique, you'll see lower returns.

[inspiringly] Now that we've covered all thirteen patterns, let's summarize the key takeaways to help you apply these in your own systems.`
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
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(97, 218, 251, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #61dafb' }}>
                  <div style={{ color: '#61dafb' }}>
                    <SvgIcon iconName="duo-network-wired" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Layer Your Caches Strategically</strong>
                  </div>
                  <div style={{ fontSize: '1rem' }}>
                    Input (embeddings/prompts), retrieval (results/ranking), generation (KV/logits), memory (session/user), outputs (answers/summaries) — each layer has distinct benefits and implementation patterns.
                  </div>
                </div>

                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #98c379' }}>
                  <div style={{ color: '#98c379' }}>
                    <SvgIcon iconName="duo-key" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Nail the Cache Keys</strong>
                  </div>
                  <div style={{ fontSize: '1rem' }}>
                    Include versions, model IDs, corpus snapshot IDs, filters, and decoding params in cache keys to avoid inconsistencies and ensure correct cache hits.
                  </div>
                </div>

                <div style={{ background: 'rgba(229, 192, 123, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
                  <div style={{ color: '#e5c07b' }}>
                    <SvgIcon iconName="duo-clock" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Freshness First</strong>
                  </div>
                  <div style={{ fontSize: '1rem' }}>
                    Combine TTL-based expiration with event-based invalidation on corpus or template updates to balance performance with data freshness requirements.
                  </div>
                </div>

                <div style={{ background: 'rgba(198, 120, 221, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #c678dd' }}>
                  <div style={{ color: '#c678dd' }}>
                    <SvgIcon iconName="duo-gauge-high" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Measure Relentlessly</strong>
                  </div>
                  <div style={{ fontSize: '1rem' }}>
                    Hit rate × miss cost → savings; track p95 latency improvements and staleness incidents to continuously optimize your cache strategies.
                  </div>
                </div>

                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #e06c75' }}>
                  <div style={{ color: '#e06c75' }}>
                    <SvgIcon iconName="duo-rocket" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Start Simple, Scale Gradually</strong>
                  </div>
                  <div style={{ fontSize: '1rem' }}>
                    Begin with exact-match and retrieval caches for early wins; add semantic similarity and KV/logit layers as your system matures and scale grows.
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b5c',
          notes: `### Key Takeaways
[warmly] We've covered a lot of ground today! [inspiringly] Let's crystallize the key takeaways from these thirteen caching patterns.

[confidently] First: **Layer your caches strategically**. [lecture] Input layer with embeddings and prompts, retrieval layer with results and ranking, generation layer with KV and logits, memory layer with session and user data, and output layer with answers and summaries. [pleased] Each layer has distinct benefits and implementation patterns.

[firmly] Second: **Nail the cache keys**. [seriously] Include versions, model IDs, corpus snapshot IDs, filters, and decoding parameters in your cache keys to avoid inconsistencies and ensure correct cache hits. This is non-negotiable for correctness.

[cautiously] Third: **Freshness first**. [lecture] Combine TTL-based expiration with event-based invalidation on corpus or template updates. [conversational] Balance performance with data freshness requirements - stale data is often worse than slow responses.

[enthusiastically] Fourth: **Measure relentlessly**. [lecture] Hit rate times miss cost equals savings. [confidently] Track P95 latency improvements and staleness incidents to continuously optimize your cache strategies.

[reassuringly] Finally: **Start simple, scale gradually**. [conversational] Begin with exact-match and retrieval caches for early wins. [pleased] Add semantic similarity and KV/logit layers as your system matures and scale grows.

[inspiringly] Thank you all for your attention! [warmly] I hope these patterns help you build more cost-effective and performant LLM systems. [cheerfully] Feel free to reach out if you have questions!`
        }
      ]
    }
  ]
};

