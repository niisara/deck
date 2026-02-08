import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

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
          center: true,
          title: '11 Hybrid Search Patterns',
          content: (
            <div style={{ marginTop: '20px' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <h2 style={{ marginBottom: '20px', alignItems: 'center' }}>
                  <SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={{ marginRight: '15px', verticalAlign: 'middle' }} darkModeInvert={true} />
                  Vector + BM25
                </h2>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.4}>
                <p style={{ fontSize: '1.4rem', marginTop: '30px' }}>
                  A practical cheat sheet for combining lexical and semantic search to build more powerful retrieval systems
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.7}>
                <div style={{ marginTop: '20px', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}>
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
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#172e6b',
          notes: `### 11 Hybrid Search Patterns
####  Welcome
Hello everyone! Today we're diving into something really exciting – **hybrid search patterns**. If you're new to search systems, don't worry. We'll break everything down into simple concepts.
####  What This Is About
Think of search like finding a needle in a haystack. There are two main ways to search: **lexical search** (finding exact words) and **semantic search** (understanding meaning). Imagine you're looking for "car" – lexical search finds the word "car" exactly, while semantic search also finds "automobile" or "vehicle" because it understands they mean similar things.
####  Why Hybrid?
Here's the magic: **hybrid search** combines both approaches. It's like having two search assistants working together – one good at finding exact matches, the other good at understanding context. When they work together, you get the best of both worlds.
####  What We'll Cover
We're going to explore eleven different patterns – eleven different ways to mix these two search types. Some patterns are simple weighted combinations, others use clever two-stage approaches, and some use advanced techniques like cross-encoders. Each pattern solves different real-world problems.
####  Your Toolkit
By the end of this presentation, you'll have a complete toolkit of hybrid search patterns. Whether you're building a document search, a Q&A system, or a recommendation engine, you'll know exactly which pattern to reach for. Let's get started!`
        },
        {
          id: 2,
          title: 'Hybrid Search: What and Why',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '45px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4fc3f7', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                      What it is
                      <MermaidPopover
                        title="Hybrid Search Overview"
                        diagram={`flowchart LR
    A["🔍 Query"] --> B["📝 BM25\nLexical"]
    A --> C["🧠 Vector\nSemantic"]
    B --> D["🎯 Fusion"]
    C --> D
    D --> E["✨ Results"]
    style A fill:#4fc3f7,color:#000
    style D fill:#ffd700,color:#000
    style E fill:#81c784,color:#000`}
                      />
                    </h3>
                    <p>Combine lexical match (BM25) with semantic vector search for higher recall and precision.</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#81c784', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                      Why it works
                    </h3>
                    <GSAPAnimated animation="fadeIn" delay={0.3}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>BM25 excels at exact tokens, filters, and field boosts</li>
                        <li>Vectors capture paraphrases, synonyms, and context</li>
                      </ul>
                    </GSAPAnimated>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffb74d', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-arrows-rotate" sizeName="2x" darkModeInvert={true} />
                      Common fusion methods
                    </h3>
                    <GSAPAnimated animation="fadeIn" delay={0.3}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Weighted sum (normalize then blend)</li>
                        <li>Reciprocal Rank Fusion (RRF)</li>
                        <li>Two-stage cascades (retrieve → re-rank)</li>
                        <li>Cross-encoder re-ranking</li>
                      </ul>
                    </GSAPAnimated>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ba68c8', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-star" sizeName="2x" darkModeInvert={true} />
                      Key benefits
                    </h3>
                    <GSAPAnimated animation="fadeIn" delay={0.3}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Higher precision and recall than either method alone</li>
                        <li>Handles both exact matches and semantic similarity</li>
                        <li>Adapts to different query types and content domains</li>
                        <li>Improves relevance ranking, especially for RAG systems</li>
                      </ul>
                    </GSAPAnimated>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#172e6b',
          notes: `### Hybrid Search: What and Why
####  The Foundation
Let's start with the basics. **Hybrid search** is like having two different detectives working on the same case. One detective looks for exact clues – specific words and phrases. The other detective understands the meaning and context behind things. Together, they solve cases neither could solve alone.
####  How Hybrid Search Works
\`\`\`mermaid
flowchart LR
    A["🔍 Query"] --> B["📝 BM25\nLexical"]
    A --> C["🧠 Vector\nSemantic"]
    B --> D["🎯 Fusion"]
    C --> D
    D --> E["✨ Results"]
    style A fill:#4fc3f7,color:#000
    style D fill:#ffd700,color:#000
    style E fill:#81c784,color:#000
\`\`\`
When you search, your query goes to both **BM25** 👉 'bee-em-twenty-five' (lexical) and **vector** (semantic) systems. Think of BM25 as a word-matching robot – it finds documents with your exact search terms. The vector system is like a smart librarian who understands what you *mean*, not just what you *say*.
####  Why Two Methods Work Better Than One
BM25 is fantastic when you search for "iPhone 15 Pro Max" – it finds exactly that phone model. But if you search "latest Apple flagship phone," BM25 might miss it because those exact words aren't there. That's where vectors shine – they understand "latest Apple flagship" means the iPhone 15 Pro Max.
####  Fusion Methods
There are several clever ways to **combine** (we call it "fusion") these two search results. The simplest is a weighted sum – like mixing 70% BM25 with 30% vector scores. Another popular method is **RRF** 👉 'arr-arr-eff' or Reciprocal Rank Fusion, which combines rankings rather than scores.
####  The Real-World Impact
Here's why this matters: in production RAG systems (that's Retrieval Augmented Generation – think ChatGPT with your own documents), hybrid search dramatically improves accuracy. You catch both the "needle in the haystack" exact matches *and* the semantically similar content. This leads us to explore eleven specific patterns for implementing hybrid search effectively.`
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
          icon: { name: 'duo-sliders' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '45px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ fontSize: '0.8em' }}>
                  <p><strong>Idea / Pattern Summary:</strong> Blend BM25 and embedding similarity into one normalized score.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ fontSize: '0.8em' }}>
                  <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Default hybrid for most queries; balanced corpora; fast and simple deployments.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.5}>
                <div style={{ fontSize: '0.8em' }}>
                  <div style={{ marginTop: '20px' }}>
                    <p><strong>How it Works:
                      <MermaidPopover
                        title="Weighted Hybrid Flow"
                        diagram={`flowchart TB
    A["🔍 Query"] --> B["📝 BM25 Search"]
    A --> C["🧠 Vector Search"]
    B --> D["📊 Normalize Scores"]
    C --> D
    D --> E["⚖️ Weighted Blend<br/>α·vector + (1-α)·BM25"]
    E --> F["✨ Top-N Results"]
    style A fill:#4fc3f7,color:#000
    style E fill:#ffd700,color:#000
    style F fill:#81c784,color:#000`}
                      />
                    </strong></p>
                    <GSAPAnimated animation="fadeIn" delay={0.5}>
                      <ol style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                        <li>Run BM25 and vector search in parallel for top-k</li>
                        <li>Normalize scores (e.g., min-max, z-score)</li>
                        <li>Compute final = α·vector + (1−α)·BM25 or use RRF</li>
                        <li>Return top-N by final score</li>
                      </ol>
                    </GSAPAnimated>
                  </div>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.7}>
                <div style={{ fontSize: '0.8em' }}>
                  <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <p style={{ fontSize: '1rem', margin: 0 }}><strong>Tools / Libraries:</strong> Elasticsearch (hybrid, RRF, Linear retriever), Weaviate (alpha), Qdrant (score fusion), Vespa (rank profiles), Azure AI Search (hybrid RRF), Pinecone (sparse+dense)</p>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5d176b',
          notes: `### Pattern 1 — Weighted Hybrid Scoring
####  The Simplest Hybrid Pattern
Welcome to our first pattern! **Weighted Hybrid Scoring** is like mixing two ingredients in a recipe – you decide how much of each to add. Think of it as combining 70% chocolate and 30% vanilla to get your perfect ice cream flavor.
####  How It Works
\`\`\`mermaid
flowchart TB
    A["🔍 Query"] --> B["📝 BM25 Search"]
    A --> C["🧠 Vector Search"]
    B --> D["📊 Normalize Scores"]
    C --> D
    D --> E["⚖️ Weighted Blend<br/>α·vector + (1-α)·BM25"]
    E --> F["✨ Top-N Results"]
    style A fill:#4fc3f7,color:#000
    style E fill:#ffd700,color:#000
    style F fill:#81c784,color:#000
\`\`\`
Here's the magic: both BM25 and vector search run *at the same time* (in parallel). BM25 might give a document a score of 8.5, and vector search gives it 0.92. But wait – these scores are on different scales! That's why we **normalize** them first, bringing both to a 0-1 range.
####  The Alpha Parameter
The **alpha** value (written as α, pronounced "alpha") is your control knob. If α equals 0.7, you're saying "give me 70% vector search and 30% BM25." For technical queries where exact terms matter, you might use α equals 0.3 (more BM25). For conceptual queries, α equals 0.8 (more vector).
####  Real-World Tools
All major search engines support this: **Elasticsearch** has built-in RRF (Reciprocal Rank Fusion), **Weaviate** lets you set alpha directly, and **Pinecone** combines sparse and dense vectors. This is your go-to pattern for most applications.
####  Transition
This weighted approach is powerful, but every pattern has trade-offs. Let's look at when it shines and when it struggles.`
        },
        {
          id: 4,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.3}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>Simple, tunable weighting (alpha)</li>
                          <li>Works with most engines and scales well</li>
                          <li>Deterministic and easy to explain</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.3}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>Requires careful score normalization</li>
                          <li>One alpha rarely fits all queries</li>
                          <li>May surface duplicates from each list</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#5d176b',
          notes: `### Strengths and Limitations
####  The Good Stuff
Let's talk about what makes **Weighted Hybrid Scoring** awesome. First, it's **simple** – you literally just tune one number (alpha) to control the blend. There's no complex machine learning model to train, no mysterious black box. You can explain it to your team in two minutes.
####  Pros
It works with **every major search engine** out there. Whether you're using Elasticsearch, Weaviate, Qdrant, or Pinecone, they all support this pattern. It also **scales beautifully** – both searches run in parallel, so you're not adding much latency. Finally, it's **deterministic**, meaning the same query always gives the same results, which makes debugging much easier.
####  The Challenges
Now for the tricky parts. **Score normalization** can be surprisingly hard to get right. BM25 scores might range from 0 to 50, while vector similarities are between -1 and 1. You need to normalize them properly, or one will completely dominate the other.
####  Cons
The biggest challenge? **One alpha value doesn't fit all queries**. A technical query like "Python 3.11 release date" needs more BM25 weight, while "how to be happy" needs more vector weight. You might end up tuning alpha for each query type, which adds complexity.
####  The Duplicate Problem
Also watch out for **duplicates**. Since both BM25 and vector search might return the same document, you need to de-duplicate intelligently. Some engines handle this automatically, others don't.
####  Moving Forward
Despite these limitations, this pattern is your bread-and-butter hybrid approach. For about 70% of use cases, this is all you need. Now let's explore a different approach – two-stage retrieval – which solves some of these problems in a clever way.`
        }
      ]
    },
    {
      id: 'pattern-2',
      title: 'Two-Stage Retrieval',
      slides: [
        {
          id: 5,
          title: 'Pattern 2 — Two-Stage Retrieval (BM25 → Vector Re-Rank)',
          icon: { name: 'duo-filter' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '45px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <p><strong>Idea / Pattern Summary:</strong> Recall with fast BM25, then re-rank candidates using embedding similarity.</p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Keyword-heavy domains; strong exact-match needs; large corpora where BM25 makes a great first filter.</p>
                </GSAPAnimated>
                <div style={{ marginTop: '20px' }}>
                  <GSAPAnimated animation="fadeIn" delay={0.5}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <strong>How it Works:</strong>
                      <MermaidPopover
                        title="Two-Stage Retrieval Flow"
                        diagram={`flowchart TD
    A["🔍 Query"] --> B["📝 Stage 1: BM25<br/>Fast Retrieval<br/>(top 200)"]
    B --> C["🧠 Stage 2: Embed Query<br/>+ Candidates"]
    C --> D["📊 Cosine/Dot Product<br/>Scoring"]
    D --> E["🎯 Re-Rank &<br/>Return Top-N"]
    style A fill:#4fc3f7,color:#000
    style B fill:#81c784,color:#000
    style C fill:#ffd700,color:#000
    style D fill:#e1bee7,color:#000
    style E fill:#ffcdd2,color:#000`}
                      />
                    </p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInBottom" delay={0.7}>
                    <ol style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <li>Stage 1: BM25 retrieves top-M (e.g., 200)</li>
                      <li>Embed query (and/or docs) via bi-encoder</li>
                      <li>Score candidates by cosine/dot product</li>
                      <li>Re-rank and return top-N</li>
                    </ol>
                  </GSAPAnimated>
                </div>
                <GSAPAnimated animation="scaleIn" delay={1.0}>
                  <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <p style={{ fontSize: '1rem', margin: 0 }}><strong>Tools / Libraries:</strong> Elasticsearch (query + knn rank section), Haystack (BM25Retriever → EmbeddingReranker), LlamaIndex, Qdrant + SentenceTransformers, OpenSearch hybrid + rank</p>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#176b62',
          notes: `### Pattern 2 — Two-Stage Retrieval (BM25 → Vector Re-Rank)

#### Introduction to Two-Stage Retrieval

Welcome to **Pattern 2**, which introduces the concept of **two-stage retrieval**. Think of this like a talent show with two rounds: first, you quickly screen a large pool of contestants, then you carefully evaluate the finalists. That's exactly what this pattern does with search results.

#### How It Works: The Two-Stage Process

In **Stage 1**, we use **BM25** – a fast, traditional keyword-based search algorithm. BM25 is like a lightning-fast scanner that reads through millions of documents and pulls out the top 200 candidates that contain your search terms. It's incredibly efficient because it uses an **inverted index**, which is like a book's index that tells you exactly which pages contain which words.

In **Stage 2**, we get more sophisticated. We take those 200 candidates and run them through a **bi-encoder** – a neural network that understands meaning. This creates **embeddings** (numerical representations) of both your query and the candidate documents. Then we compare them using mathematical similarity (like cosine or dot product), which is like measuring how "close" two concepts are in meaning space.

#### When to Choose This Pattern

This pattern shines in **keyword-heavy domains** where exact matches matter. Imagine legal document search, medical records, or technical documentation. If someone searches for "myocardial infarction," you want documents with that exact term, but you also want to understand that "heart attack" is semantically similar. The BM25 stage ensures you don't miss exact matches, while the vector re-ranking adds semantic intelligence.

#### Practical Benefits

The beauty of this approach is **efficiency**. BM25 is computationally cheap, so it can quickly filter millions of documents down to a manageable set. Then you only need to compute expensive embeddings for those 200 candidates, not the entire corpus. It's like pre-screening resumes before conducting expensive in-person interviews.

#### Implementation Considerations

Most modern search platforms support this pattern out of the box. **Elasticsearch** has built-in support with its query and knn rank section. **Haystack** provides a clean pipeline with BM25Retriever followed by EmbeddingReranker. The pattern is easy to **retrofit** onto existing BM25-based search systems, making it a popular first step into hybrid search.

#### Limitations to Keep in Mind

The main risk is **early miss** – if BM25 doesn't retrieve a relevant document in Stage 1, the vector re-ranker never gets a chance to find it. This can happen with **vocabulary mismatch** (searching "car" when the document says "automobile") or with very short, ambiguous queries. You might need to combine this with **query expansion** techniques to ensure good initial recall.`
        },
        {
          id: 6,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>Efficient first-pass recall; uses inverted index</li>
                          <li>Good precision at low compute cost</li>
                          <li>Easy to retrofit onto existing search</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>BM25 must not miss relevant docs (query mismatch risk)</li>
                          <li>Needs embedding infra for re-rank</li>
                          <li>May require query expansion to avoid early miss</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#176b62',
          notes: `### Strengths and Limitations of Two-Stage Retrieval

#### Understanding the Trade-offs

Every search pattern has its sweet spots and pain points. Let's break down when **two-stage retrieval** works brilliantly and when you might need to be careful.

#### Strengths: Why This Pattern Works So Well

The first major strength is **efficiency**. BM25 uses an **inverted index** – think of it like the index at the back of a textbook. It can scan millions of documents in milliseconds because it already knows which documents contain which words. This makes the first stage incredibly fast and scalable.

The second strength is **cost-effectiveness**. You're only computing expensive neural **embeddings** for 200 candidates, not your entire corpus. This is like only doing detailed background checks on job candidates who passed the initial resume screening. It gives you **good precision** (relevant results) at **low compute cost**.

The third strength is **retrofitting ease**. If you already have a BM25-based search system (which most organizations do), you can add vector re-ranking as a second stage without rebuilding everything. It's a **low-risk upgrade** path.

#### Limitations: What to Watch Out For

The biggest limitation is the **early miss problem**. BM25 must include the relevant documents in its initial 200 candidates, or they're lost forever. This happens with **vocabulary mismatch** – imagine someone searches for "canine" but your document says "dog." BM25 might miss it entirely.

Another consideration is **infrastructure requirements**. You need embedding infrastructure (models, GPUs, or embedding APIs) for the re-ranking stage. This adds complexity and operational overhead compared to pure BM25.

Finally, you may need **query expansion** to improve recall. If users type short or ambiguous queries, BM25 might not catch all relevant documents. You might need to automatically expand "MI" to "myocardial infarction" in medical contexts, for example.

#### Making It Work

The key is understanding your domain. If you have **keyword-heavy content** with relatively predictable terminology, this pattern works beautifully. If you have lots of paraphrasing, synonyms, or multilingual content, you might need additional techniques like query expansion or consider Pattern 3 (reverse two-stage) instead.`
        }
      ]
    },
    {
      id: 'pattern-3',
      title: 'Reverse Two-Stage',
      slides: [
        {
          id: 7,
          title: 'Pattern 3 — Reverse Two-Stage (Vector → BM25 Re-Rank)',
          icon: { name: 'duo-arrows-rotate' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '45px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="slideInRight" delay={0.1}>
                  <p><strong>Idea / Pattern Summary:</strong> Recall with vector ANN, then re-rank by BM25 to emphasize exact terms.</p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Paraphrastic queries; vocabulary mismatch; long-tail semantics.</p>
                </GSAPAnimated>
                <div style={{ marginTop: '20px' }}>
                  <GSAPAnimated animation="fadeIn" delay={0.5}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <strong>How it Works:</strong>
                      <MermaidPopover
                        title="Reverse Two-Stage Flow"
                        diagram={`flowchart TD
    A["🔍 Query"] --> B["🧠 Stage 1: Vector ANN<br/>Semantic Retrieval<br/>(top M similar)"]
    B --> C["📝 Stage 2: Compute<br/>BM25 Scores"]
    C --> D["⚖️ Re-Rank by BM25<br/>or Combine"]
    D --> E["✨ Return Top-N<br/>Results"]
    style A fill:#4fc3f7,color:#000
    style B fill:#e1bee7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffd700,color:#000
    style E fill:#ffcdd2,color:#000`}
                      />
                    </p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="fadeIn" delay={0.5}>
                    <ol style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <li>Stage 1: ANN retrieves top-M semantically similar chunks</li>
                      <li>Compute BM25 scores for those candidates</li>
                      <li>Re-rank by BM25 (or combine with vector)</li>
                      <li>Return top-N</li>
                    </ol>
                  </GSAPAnimated>
                </div>
                <GSAPAnimated animation="scaleIn" delay={1.0}>
                  <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <p style={{ fontSize: '1rem', margin: 0 }}><strong>Tools / Libraries:</strong> Qdrant/Milvus/Pinecone (ANN) + Elasticsearch/OpenSearch (BM25), Vespa (two-phase ranking), Weaviate hybrid with sort by property</p>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#346b17',
          notes: `### Pattern 3 — Reverse Two-Stage (Vector → BM25 Re-Rank)

#### Flipping the Script

Welcome to **Pattern 3**, which is essentially Pattern 2 in reverse. Instead of starting with keywords and refining with semantics, we start with **semantic understanding** and refine with **exact term matching**. It's like casting a wide net based on meaning, then filtering for specific words.

#### How It Works: Semantics First, Keywords Second

In **Stage 1**, we use **ANN** (Approximate Nearest Neighbor) search with vector embeddings. This finds documents that are semantically similar to your query, even if they use completely different words. Think of it like finding recipes that match your taste preferences, regardless of whether they use the exact ingredient names you mentioned.

The **ANN** algorithms (like HNSW or IVF) are fast approximations that navigate through high-dimensional **embedding space** to find similar vectors. They're like taking shortcuts through a massive library by understanding the "neighborhood" of related concepts.

In **Stage 2**, we take those semantic candidates and compute their **BM25** scores. This adds a layer of keyword-based ranking that promotes documents containing the exact terms from your query. You can either use BM25 scores alone or combine them with the original vector scores for a blended ranking.

#### When This Pattern Shines

This pattern is perfect for **paraphrastic queries** – questions asked in many different ways. Imagine a customer support system where users ask "How do I reset my password?" in dozens of variations: "forgot my password," "can't log in," "password recovery," "account access issues," etc. Vector search catches all these variations in Stage 1.

It's also excellent for **vocabulary mismatch** problems. In multilingual contexts or domains with lots of synonyms (medical, legal, technical), users often search using different terminology than what's in the documents. **Semantic retrieval** solves this problem upfront.

#### The Re-Ranking Strategy

The BM25 re-ranking serves as a **precision filter**. After casting a wide semantic net, you want to promote results that actually contain the user's specific terms. This provides **control** – you can ensure that when someone searches for "organic vegetables," documents with those exact words rank higher than documents that are just generally about healthy food.

#### Architecture Considerations

This pattern typically requires **multiple systems** or a platform that supports both vector and lexical search. You might use Pinecone or Qdrant for the ANN stage, then join with Elasticsearch for BM25 scoring. Some modern platforms like **Vespa** or **Weaviate** support both stages natively with two-phase ranking.

#### Trade-offs to Consider

The main challenge is the **extra roundtrip** – you need to retrieve documents from the vector store, then compute BM25 scores, possibly requiring a join by document IDs. This adds latency and complexity.

There's also a risk that BM25 re-ranking can **demote valid paraphrases**. If a document perfectly answers the query but uses synonyms instead of exact terms, the BM25 stage might push it down in rankings. You need to tune the balance carefully.

#### Best Use Cases

This pattern works best for **conversational search**, **question answering**, and **multilingual applications** where semantic recall is paramount. It's less suitable for highly technical searches where exact terminology is critical from the start.`
        },
        {
          id: 8,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>Strong semantic recall up front</li>
                          <li>BM25 re-rank improves precision and control</li>
                          <li>Good for multilingual/paraphrase-heavy content</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>Requires ANN filter support or careful post-filtering</li>
                          <li>Lexical re-rank can demote valid paraphrases</li>
                          <li>Extra roundtrip/join by doc IDs</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#346b17',
          notes: `### Strengths and Limitations of Reverse Two-Stage

#### Understanding the Reverse Pattern

Now let's analyze the pros and cons of starting with **semantic search** and refining with **keyword matching**. This flip changes the entire character of your search system.

#### Strengths: Semantic Power from the Start

The biggest advantage is **strong semantic recall**. You're using vector embeddings right from the start, which means you catch relevant documents even when they use completely different vocabulary. This is like having a translator who understands meaning, not just words.

Think about **multilingual content** or **paraphrase-heavy domains**. A user searching "how to troubleshoot internet connectivity" will find documents about "resolving network connection problems" or "fixing WiFi issues" because the vector stage understands these are semantically related.

The **BM25 re-ranking** adds precision and control back into the mix. After casting a wide semantic net, you can promote documents that contain the user's exact terms. This gives you the **best of both worlds** – broad semantic recall with targeted lexical precision.

This pattern is particularly effective for **question-answering systems** where users ask natural language questions. The semantic stage handles the variety of question formats, while the lexical stage ensures answers containing key terms rank higher.

#### Limitations: Architectural Complexity

The first challenge is **infrastructure complexity**. You need robust ANN search with good **filter support**. Not all vector databases handle metadata filtering efficiently at scale, which can be problematic if you need to filter by user permissions, date ranges, or other constraints.

There's a risk that **lexical re-ranking can demote valid paraphrases**. Imagine a document that perfectly answers the query but uses synonyms throughout. The BM25 stage might unfairly penalize it for not containing exact terms. You need to balance the weights carefully.

The **extra roundtrip** is another consideration. You're retrieving document IDs from the vector store, then computing BM25 scores (possibly from a different system), then joining and re-ranking. This adds latency and requires careful orchestration.

#### When to Choose This Pattern

Choose reverse two-stage when **semantic recall is your primary concern**. If users struggle with vocabulary (medical patients searching with layman's terms, international users with language barriers, or domains with heavy jargon), this pattern captures more relevant documents upfront.

Avoid it when **exact terminology is critical from the start**. If you're building a legal search where "negligent" and "careless" have different legal meanings despite being semantically similar, Pattern 2 (BM25 first) might be safer.`
        }
      ]
    },
    {
      id: 'pattern-4',
      title: 'Term-Boosted Vector Search',
      slides: [
        {
          id: 9,
          title: 'Pattern 4 — Term-Boosted Vector Search',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '45px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="fadeIn" delay={0.1}>
                  <p><strong>Idea / Pattern Summary:</strong> Add keyword boosts/must-haves to vector similarity to control precision.</p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Product/entity search; compliance terms; disambiguation via must-hit tokens.</p>
                </GSAPAnimated>
                <div style={{ marginTop: '20px' }}>
                  <GSAPAnimated animation="scaleIn" delay={0.5}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <strong>How it Works:</strong>
                      <MermaidPopover
                        title="Term-Boosted Vector Search"
                        diagram={`flowchart LR
    A["🔍 Query"] --> B["🧠 Vector<br/>Similarity"]
    A --> C["📝 Lexical<br/>Features"]
    B --> D["⚡ Combine:<br/>α·vector + β·keyword"]
    C --> D
    D --> E["🎯 Top-N<br/>Results"]
    F["✅ Must-Hit<br/>Terms"] --> D
    style A fill:#4fc3f7,color:#000
    style B fill:#e1bee7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffd700,color:#000
    style E fill:#ffcdd2,color:#000
    style F fill:#81c784,color:#000`}
                      />
                    </p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.7}>
                    <ol style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <li>Run vector similarity on query embedding</li>
                      <li>Compute lexical features: term/phrase hits, field boosts</li>
                      <li>Combine: final = α·vector + β·keyword_boost (+ must clauses)</li>
                      <li>Return top-N</li>
                    </ol>
                  </GSAPAnimated>
                </div>
                <GSAPAnimated animation="fadeIn" delay={1.0}>
                  <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <p style={{ fontSize: '1rem', margin: 0 }}><strong>Tools / Libraries:</strong> Elasticsearch (function_score, field boosts), Vespa (rank features, term proximity), Weaviate (alpha + property weights), Pinecone sparse+dense, SPLADE for sparse signals</p>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#176b66',
          notes: `### Pattern 4 — Term-Boosted Vector Search

#### Introduction to Term Boosting

Welcome to **Pattern 4**, which adds **keyword intelligence** directly into vector search scoring. Think of this as adding guard rails to semantic search – you still get the power of understanding meaning, but you can enforce that certain important words must appear or should be heavily weighted.

#### How It Works: Blending Vectors with Keywords

The core idea is to run **vector similarity search** as your base, then layer on **lexical features** to adjust the scores. It's like having a base recipe (vector similarity) that you season to taste with specific ingredients (keyword matches).

First, you compute the **vector similarity** between your query embedding and document embeddings. This gives you semantic relevance scores. Then you compute **lexical features** – things like: Does the document contain the exact search terms? How many times? In which fields (title, body, tags)?

These features are combined with a **weighted formula**: final_score = α × vector_score + β × keyword_boost. The α and β parameters let you tune how much weight to give to semantics versus exact matches. You can even add **must-hit clauses** that require certain terms to be present.

#### When This Pattern Excels

This pattern is perfect for **product search** and **entity search**. Imagine an e-commerce site – if someone searches "red Nike running shoes size 10," you want semantic understanding (finding athletic footwear) but also strict matching on key attributes like brand, color, and size. The term boosts ensure Nike products rank higher than Adidas.

It's also essential for **compliance and legal terms**. In regulated industries, certain keywords must appear in documents – terms like "HIPAA compliant" or "FDA approved." You can make these **must-hit terms** that filter results before semantic ranking even happens.

**Disambiguation** is another key use case. If someone searches "apple," do they mean the fruit or the tech company? Term boosts on related words ("iPhone," "orchard," "pie") help disambiguate by giving extra weight when contextual keywords appear.

#### The Math Behind the Magic

The beauty of this pattern is its **transparency and tunability**. Unlike a black-box neural model, you can explain exactly why a document ranked high: "It scored 0.85 on semantic similarity, plus got a 0.3 boost for containing 'FDA approved' in the title."

You can implement this with **function_score** queries in Elasticsearch, **rank features** in Vespa, or **alpha parameter weighting** in Weaviate. The key is having fine-grained control over how different signals combine.

#### Feature Engineering Considerations

The challenge is **feature engineering** – you need to decide which terms or phrases deserve boosts, how much to boost them, and in which fields. This requires domain knowledge and experimentation. Too much boosting can harm recall; too little and the boosts are meaningless.

Modern tools like **SPLADE** (Sparse Lexical And Expansion) use neural networks to learn these sparse keyword signals automatically, removing some of the manual feature engineering burden.

#### Guarding Against Semantic Drift

One of the biggest benefits is **preventing semantic drift**. Pure vector search can sometimes return documents that are semantically similar but miss the mark on specifics. Term boosting keeps the search grounded in the user's actual words while still benefiting from semantic understanding.`
        },
        {
          id: 10,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>Guards against semantic drift</li>
                          <li>Enforces critical terms or phrases</li>
                          <li>Tunable blend; transparent boosts</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>Feature engineering needed</li>
                          <li>Over-boosting can harm recall</li>
                          <li>More complex scoring config</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#176b66',
          notes: `### Strengths and Limitations of Term-Boosted Vector Search

#### The Power of Controlled Semantic Search

Let's dive into why **term-boosted vector search** gives you powerful control, and where you need to be careful.

#### Strengths: Precision with Flexibility

The most important strength is **guarding against semantic drift**. Pure vector search can sometimes wander off course, returning documents that are topically related but miss the user's specific intent. Term boosting acts like an anchor, keeping results tethered to the user's actual keywords.

**Enforcing critical terms** is another huge advantage. In domains like healthcare, legal, or compliance, certain terms are non-negotiable. You can create must-hit clauses that require documents to contain "FDA approved" or "GDPR compliant" or specific medical codes. This ensures regulatory requirements are met.

The **tunable blend** gives you incredible flexibility. You can adjust the α and β weights based on query type, user preferences, or A/B testing results. Short queries might need more semantic help (higher α), while long technical queries might benefit from stronger keyword matching (higher β).

**Transparency** is underrated but valuable. With term boosting, you can explain to users or stakeholders exactly why results ranked as they did. "This product ranked #1 because it had high semantic similarity (0.82) plus a brand boost (+0.3) and color match (+0.2)." This explainability builds trust.

#### Limitations: The Engineering Tax

The main challenge is **feature engineering**. You need domain expertise to identify which terms deserve boosts, how much to boost them, whether they should be must-haves, and which fields to prioritize. This is iterative work that requires testing and refinement.

**Over-boosting is dangerous**. If you boost too aggressively, you essentially turn vector search back into pure keyword search, losing the semantic benefits. If someone searches "best wireless headphones" but you over-boost "wireless," you might miss excellent Bluetooth headphones that use different terminology.

The **scoring configuration** becomes more complex than simple vector search. You're managing multiple parameters, potentially different boost values for different query types, and field-specific weights. This complexity can make debugging and optimization more difficult.

#### Finding the Right Balance

The key is **starting simple and iterating**. Begin with modest boosts (maybe 10-20% of the vector score) and tune based on actual search quality metrics. Use A/B testing to validate that boosts improve user satisfaction, not just match your intuitions.

#### Modern Solutions

Tools like **SPLADE** represent the future of this pattern – using neural networks to learn sparse keyword signals automatically from data, rather than hand-coding them. This reduces the engineering burden while keeping the benefits of term boosting.`
        }
      ]
    },
    {
      id: 'pattern-5',
      title: 'Metadata-Filtered Hybrid Search',
      slides: [
        {
          id: 11,
          title: 'Pattern 5 — Metadata-Filtered Hybrid Search',
          icon: { name: 'duo-filter' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '45px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="slideInRight" delay={0.1}>
                  <p><strong>Idea / Pattern Summary:</strong> Apply faceted/ACL metadata filters, then run hybrid scoring within the slice.</p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Multi-tenant apps; access control; faceted navigation.</p>
                </GSAPAnimated>
                <div style={{ marginTop: '20px' }}>
                  <GSAPAnimated animation="fadeIn" delay={0.5}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <strong>How it Works:</strong>
                      <MermaidPopover
                        title="Metadata-Filtered Hybrid Search"
                        diagram={`flowchart TD
    A["🔍 Query +<br/>Filters"] --> B["🔒 Apply Metadata<br/>Filters<br/>(tenant, ACL, time)"]
    B --> C["📝 BM25 on<br/>Filtered Set"]
    B --> D["🧠 Vector Search on<br/>Filtered Set"]
    C --> E["🎯 Fusion<br/>(RRF/Weighted)"]
    D --> E
    E --> F["✨ Ranked<br/>Results"]
    style A fill:#4fc3f7,color:#000
    style B fill:#ffcdd2,color:#000
    style C fill:#81c784,color:#000
    style D fill:#e1bee7,color:#000
    style E fill:#ffd700,color:#000
    style F fill:#81c784,color:#000`}
                      />
                    </p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="fadeIn" delay={0.5}>
                    <ol style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <li>Apply boolean filters (tenant, type, time)</li>
                      <li>Execute BM25 and vector search over filtered set</li>
                      <li>Fuse results (weighted sum/RRF)</li>
                      <li>Tie-break by recency or authority</li>
                    </ol>
                  </GSAPAnimated>
                </div>
                <GSAPAnimated animation="scaleIn" delay={1.0}>
                  <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                    <p style={{ fontSize: '1rem', margin: 0 }}><strong>Tools / Libraries:</strong> Qdrant, Milvus (vector + filters), Vespa (constrained ANN), Pinecone (metadata filters), Elasticsearch/OpenSearch (filter context + knn)</p>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#17266b',
          notes: `### Pattern 5 — Metadata-Filtered Hybrid Search

#### Introduction to Filtered Search

Welcome to **Pattern 5**, which adds **security and scoping** to hybrid search. This pattern recognizes that not all documents should be searchable by all users, and sometimes you want to narrow results by categories, dates, or other attributes before even considering relevance.

#### How It Works: Filter First, Then Search

The key insight is to apply **hard filters** before running expensive relevance scoring. Think of it like a bouncer at a club – they check IDs and guest lists before people even get to the dance floor. Similarly, we check **metadata constraints** (tenant ID, access permissions, document type, date ranges) before running BM25 and vector search.

Once the filter reduces your search space (maybe from 10 million documents down to 50,000), you run **both BM25 and vector search** over that filtered subset. Then you fuse those results using RRF or weighted combination, just like Pattern 1.

The filters are **boolean** – a document either passes or doesn't. There's no gray area. If a document belongs to tenant A and the user is from tenant B, it's completely excluded. This ensures **data isolation** and **security**.

#### When This Pattern Is Essential

**Multi-tenant applications** absolutely need this pattern. In SaaS platforms where multiple organizations share the same search infrastructure, you must guarantee that Company A never sees Company B's documents. Metadata filtering provides this isolation at the database level.

**Access control** is another critical use case. In enterprise search, different users have different permissions. A document might be tagged as "confidential" or "executive-only" – metadata filters enforce these **ACL** (Access Control Lists) rules before any ranking happens.

**Faceted navigation** uses this pattern extensively. E-commerce sites let you filter by category, brand, price range, ratings, etc. Each filter narrows the search space, then hybrid scoring ranks within those constraints.

#### Performance Benefits

An underrated benefit is **performance**. Searching 50,000 filtered documents is much faster than searching 10 million. The smaller candidate set means faster vector similarity computations, faster BM25 scoring, and often better result quality because you're not competing against irrelevant documents.

**Caching** becomes more effective too. You can cache results per filter key (like tenant ID + category), which improves response times for popular filter combinations.

#### Implementation Across Platforms

Most modern search platforms support filtered hybrid search natively. **Elasticsearch** has filter context combined with knn queries. **Pinecone** and **Qdrant** support metadata filters on vector search. **Vespa** has constrained ANN that applies filters during graph traversal.

The challenge is ensuring your **ANN index** supports filtering efficiently. Some systems filter after retrieval (post-filtering), which can hurt recall if many results get filtered out. Better systems filter during retrieval (pre-filtering), but this requires careful index design.

#### Design Considerations

The key is **filter cardinality** – how many documents pass the filter. If your filter is too restrictive (only 10 documents pass), hybrid search might be overkill. If it's too broad (90% of documents pass), the filter doesn't help much. Sweet spot is filtering down to 1-10% of your corpus.

**Tie-breaking** matters when scores are close. You might sort by recency (newer documents first) or authority (documents from verified sources) as a secondary ranking signal.`
        },
        {
          id: 12,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>Enforces hard constraints; safer RAG grounding</li>
                          <li>Smaller candidate set → faster and better precision</li>
                          <li>Works well with caching by filter key</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>ANN filtering support varies by engine</li>
                          <li>Narrow filters can hurt recall</li>
                          <li>More complex index/partition strategy</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#17266b',
          notes: `### Strengths and Limitations of Metadata-Filtered Hybrid Search

#### Security and Performance Together

This pattern uniquely combines **security** with **performance optimization**. Let's explore how and where this combination works best.

#### Strengths: Hard Constraints Are a Feature

The ability to **enforce hard constraints** is the killer feature. In multi-tenant systems, data isolation isn't optional – it's a legal and security requirement. Metadata filtering provides this at the database level, before any ML models or ranking algorithms even run. This is **safer RAG grounding** because you control exactly which documents are in scope.

**Performance gains** are substantial. When you filter from 10 million documents down to 50,000, every subsequent operation is faster. Vector similarity computation scales with the number of documents, so a 200x reduction in candidate set means dramatically lower latency. BM25 scoring is also faster on smaller sets.

**Better precision** often emerges naturally. When you're competing within a narrower domain (like "all documents from 2024 in the engineering category"), relevance signals are stronger. You're not fighting against tangentially related documents from other domains.

**Caching effectiveness** multiplies. You can cache results for common filter combinations (like "tenant:CompanyA + category:support"). If 80% of queries use the same filters, cache hit rates can be very high, providing instant responses.

#### Limitations: Index Architecture Challenges

The main technical challenge is **ANN filtering support**. Not all vector databases handle filtered search efficiently. Some do **post-filtering** (retrieve 100 vectors, then filter, potentially returning only 10), which hurts recall. Better systems do **pre-filtering** (apply filter during graph traversal), but this requires sophisticated index architecture.

**Narrow filters can hurt recall** dramatically. If your filter is too restrictive and only 50 documents pass, even perfect hybrid scoring can't surface relevant documents that were excluded. This is especially problematic with time-based filters – excluding older documents might miss highly relevant historical content.

**Index and partition strategy** becomes more complex. You might need separate indexes per tenant or time period, or clever sharding strategies. This operational complexity is worth it for large multi-tenant systems but can be overkill for smaller deployments.

#### Best Practices

Design your **metadata schema** carefully upfront. Fields should be low-cardinality (tenant_id, category, year) rather than high-cardinality (user_id, exact timestamp). Low-cardinality fields filter more efficiently and cache better.

**Monitor filter effectiveness**. Track what percentage of documents pass typical filters. If filters are too broad (>50% pass) or too narrow (<0.1% pass), you might need to adjust your filtering strategy or metadata design.`
        }
      ]
    },
    {
      id: 'pattern-6',
      title: 'Field-Aware Hybrid Scoring',
      slides: [
        {
          id: 13,
          title: 'Pattern 6 — Field-Aware Hybrid Scoring (BM25F)',
          icon: { name: 'duo-table' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '45px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="fadeIn" delay={0.1}>
                  <p><strong>Idea / Pattern Summary:</strong> Weight important fields (e.g., title &gt; body) in hybrid lexical + vector scoring.</p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> News, eCommerce, QA where titles/headings matter.</p>
                </GSAPAnimated>
                <div style={{ marginTop: '20px' }}>
                  <GSAPAnimated animation="scaleIn" delay={0.5}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <strong>How it Works:</strong>
                      <MermaidPopover
                        title="Field-Aware Hybrid Scoring"
                        diagram={`flowchart TD
    A["🔍 Query"] --> B["📄 Field Boosts<br/>title×3, tags×2, body×1"]
    A --> C["🧠 Per-Field Embeddings<br/>or Weighted Pooling"]
    B --> D["⚖️ Combine &<br/>Normalize Scores"]
    C --> D
    D --> E["🎯 Fuse with<br/>Vector Scores"]
    E --> F["✨ Top-N Results"]
    style A fill:#4fc3f7,color:#000
    style B fill:#81c784,color:#000
    style C fill:#e1bee7,color:#000
    style D fill:#ffd700,color:#000
    style E fill:#ffcdd2,color:#000
    style F fill:#81c784,color:#000`}
                      />
                    </p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.7}>
                    <ol style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <li>Configure BM25F/field boosts (title×3, tags×2, body×1)</li>
                      <li>Optionally compute per-field embeddings or weighted pooling</li>
                      <li>Combine field scores, normalize, then fuse with vector</li>
                      <li>Return top-N</li>
                    </ol>
                  </GSAPAnimated>
                </div>
                <GSAPAnimated animation="fadeIn" delay={0.9}>
                  <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px' }}>
                    <p style={{ fontSize: '1rem', margin: 0 }}><strong>Tools / Libraries:</strong> Elasticsearch/Azure Search (BM25F via boosts), Vespa (field-specific ranking), Weaviate (property weighting), OpenSearch</p>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#61176b',
          notes: `### Pattern 6 — Field-Aware Hybrid Scoring (BM25F)

#### Introduction to Field-Aware Scoring

Welcome to **Pattern 6**, which acknowledges that not all text in a document is equally important. A match in the **title** is usually more significant than a match deep in the **body text**. This pattern formalizes that intuition into a scoring system.

#### How It Works: Weighting Document Fields

**BM25F** is an extension of BM25 that treats different fields separately. Think of a news article: the headline, author, abstract, and body all contain text, but they carry different weights. A keyword match in the headline is worth more than one buried in paragraph 50.

You configure **field boosts** – multipliers that increase the importance of matches in specific fields. Common patterns are title×3, tags×2, body×1. This means a title match counts three times as much as a body match. These weights reflect **editorial importance** – fields that editors work harder on (titles, abstracts) should matter more.

On the **vector side**, you can either embed the whole document (concatenating all fields) or create **per-field embeddings**. Per-field embeddings let you do **weighted pooling** – combining the title embedding with 3× weight, tags with 2×, etc. This mirrors the lexical field boosting in embedding space.

#### When This Pattern Shines

This is essential for **news and media** sites. Headlines are crafted to be descriptive and SEO-friendly. A match in a headline is a strong signal of relevance. Similarly, **abstracts and summaries** are human-curated distillations that deserve extra weight.

**E-commerce** benefits enormously. Product titles are dense with key attributes (brand, model, color, size). A match in the title "Nike Air Max 270 Men's Running Shoes Size 10 Black" is far more valuable than a random mention in a review comment.

**Question answering** and **knowledge bases** often have structured content with headings, summaries, and detailed explanations. Field-aware scoring ensures that matches in section headings (which are essentially micro-titles) rank appropriately.

#### Implementation Strategies

**Elasticsearch** makes this easy with per-field boost parameters in your query. You can specify that the title field gets a boost of 3.0, tags get 2.0, etc. **Azure Search** and **OpenSearch** have similar features built into their BM25F implementations.

For **vector scoring**, you have choices. The simplest is to concatenate fields with repetition (include the title three times) before embedding. More sophisticated is computing separate embeddings and doing weighted pooling, but this increases storage costs.

#### Scoring Transparency

A big advantage is **explainability**. You can show users exactly why a result ranked highly: "This article ranked #1 because it matched your query in the title (3× boost) and had high semantic similarity (0.87) in the abstract."

#### Tuning Considerations

The weights are **domain-specific**. News might use title×3, but scientific papers might give more weight to abstracts (abstract×3, title×2) because abstracts are more information-dense. You need to **experiment and measure** with your specific content and user behavior.

#### Balancing Act

Be careful not to **overfit to title-heavy documents**. Some documents might have verbose, keyword-stuffed titles but thin content. Field weights should reflect genuine importance, not just gaming opportunities. Monitor for this in your quality metrics.`
        },
        {
          id: 14,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>Reflects editorial importance</li>
                          <li>Reduces noise from long bodies</li>
                          <li>Explainable scoring</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>Requires tuning per index/domain</li>
                          <li>Per-field embeddings increase storage/ingest cost</li>
                          <li>Risk of overfitting to title-heavy docs</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#61176b',
          notes: `### Strengths and Limitations of Field-Aware Hybrid Scoring

#### The Power of Structural Understanding

**Field-aware scoring** acknowledges document structure, which is a powerful way to improve relevance. Let's see when it works well and when it needs care.

#### Strengths: Editorial Intent Matters

**Reflecting editorial importance** is the core strength. Content creators spend disproportionate time on titles, headings, and abstracts because these are the most important parts. Field-aware scoring respects that human curation by weighting these fields higher.

**Reducing noise from long bodies** is practical. Imagine a 10,000-word article that mentions your search term once, buried deep in the text. Without field weights, this might rank equal to a focused 500-word piece with the term in its title. Field weighting promotes the focused content appropriately.

**Explainable scoring** builds user trust. When someone asks "why did this rank first?", you can point to the title match with 3× boost. This transparency is increasingly important for regulatory compliance and user satisfaction.

#### Limitations: Configuration Complexity

**Tuning per domain** is unavoidable. Optimal field weights for news (title-heavy) differ from scientific papers (abstract-heavy) differ from e-commerce (structured attributes in title). Each domain requires experimentation and potentially A/B testing to find the right balance.

**Per-field embeddings** solve the vector side elegantly but at a cost. You're storing separate embeddings for title, abstract, and body, which can triple your storage requirements. For large corpora (millions of documents), this becomes expensive. The alternative (concatenating fields with repetition before embedding) is cheaper but cruder.

**Overfitting to title-heavy documents** is a real risk. Some content (especially auto-generated or SEO-optimized) has keyword-rich titles but thin substance. Aggressive title boosting rewards this gaming. You need quality controls and monitoring to catch this pattern.

#### Finding the Sweet Spot

Start with **conservative weights** (like title×2, not ×5) and iterate based on user feedback. Monitor for edge cases where results seem wrong due to field weighting. Consider combining field-aware scoring with other patterns (like cross-encoder re-ranking) to catch cases where field weights misfire.`
        }
      ]
    },
    {
      id: 'pattern-7',
      title: 'Hybrid Lexical + Semantic Expansion',
      slides: [
        {
          id: 15,
          title: 'Pattern 7 — Hybrid Lexical + Semantic Expansion',
          icon: { name: 'duo-book-open' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '45px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="slideInRight" delay={0.1}>
                  <p><strong>Idea / Pattern Summary:</strong> Expand the query with lexical synonyms and semantic neighbors before hybrid retrieval.</p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Short queries; vocabulary mismatch; domain jargon.</p>
                </GSAPAnimated>
                <div style={{ marginTop: '20px' }}>
                  <GSAPAnimated animation="scaleIn" delay={0.5}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <strong>How it Works:</strong>
                      <MermaidPopover
                        title="Query Expansion Flow"
                        diagram={`flowchart LR
    A["🔍 Query"] --> B["📚 Lexical<br/>Expansion<br/>(synonyms)"]
    A --> C["🧠 Semantic<br/>Expansion<br/>(PRF/LLM)"]
    B --> D["📝 Expanded<br/>BM25 Query"]
    C --> E["🎯 Multiple<br/>Embeddings"]
    D --> F["⚖️ Hybrid<br/>Fusion"]
    E --> F
    F --> G["✨ Results"]
    style A fill:#4fc3f7,color:#000
    style B fill:#81c784,color:#000
    style C fill:#e1bee7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#e1bee7,color:#000
    style F fill:#ffd700,color:#000
    style G fill:#ffcdd2,color:#000`}
                      />
                    </p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="fadeIn" delay={0.7}>
                    <ol style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <li>Generate lexical expansions (synonyms, acronyms, stemming)</li>
                      <li>Add semantic terms via embeddings, PRF, or LLM</li>
                      <li>Build expanded BM25 query and/or multiple embeddings</li>
                      <li>Run hybrid retrieval and fuse</li>
                    </ol>
                  </GSAPAnimated>
                </div>
                <GSAPAnimated animation="fadeIn" delay={0.9}>
                  <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px' }}>
                    <p style={{ fontSize: '1rem', margin: 0 }}><strong>Tools / Libraries:</strong> Elasticsearch (synonym filters, MLT, ELSER/SPLADE), LlamaIndex/Haystack query expansion, WordNet/UMLS, LangChain transformers</p>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6b1737',
          notes: `### Pattern 7 — Hybrid Lexical + Semantic Expansion

#### Introduction to Query Expansion

Welcome to **Pattern 7**, which tackles a fundamental problem: users often don't use the same words as document authors. **Query expansion** bridges this gap by automatically adding related terms to the user's search before running hybrid retrieval.

#### How It Works: Expanding in Two Dimensions

This pattern expands queries in both **lexical** and **semantic** dimensions. On the lexical side, you add **synonyms**, **acronyms**, and **stemmed variations**. If someone searches "car," you automatically include "automobile," "vehicle," "auto." In medical domains, "MI" expands to "myocardial infarction."

On the semantic side, you use **embeddings**, **pseudo-relevance feedback (PRF)**, or **LLMs** to find semantically related terms. An LLM might expand "laptop overheating" to include "thermal throttling," "CPU temperature," "cooling fan issues" – terms that are semantically related but not strict synonyms.

The expanded query then feeds into your hybrid search. The BM25 component sees the expanded term list, and the vector component might use multiple embeddings (one for each expanded concept) or a weighted average.

#### When This Pattern Excels

**Short queries** benefit most from expansion. When someone types just "diabetes medication," expansion can add "insulin," "metformin," "antidiabetic drugs," "blood sugar control" – giving the search system much more to work with.

**Vocabulary mismatch** is a classic problem that expansion solves. Patients search using layma's terms ("heart attack"), while medical documents use technical terms ("myocardial infarction"). Good expansion dictionaries bridge this gap automatically.

**Domain jargon** and **specialized terminology** require curated expansion lists. In legal search, "M&A" should expand to "mergers and acquisitions." In automotive, "EV" maps to "electric vehicle," "battery electric," etc.

#### Implementation Strategies

**Elasticsearch** has built-in synonym filters that you can populate with curated synonym lists. More advanced options like **ELSER** (Elastic Learned Sparse Encoding) use neural networks to learn term expansions automatically from your data.

**LlamaIndex** and **Haystack** provide query expansion modules that can use LLMs. You might prompt GPT-4 with "Generate 5 related search terms for: [query]" and feed those into your hybrid search.

**WordNet** and **UMLS** (for medicine) are well-established lexical databases that provide synonym and hypernym relationships. These are battle-tested for general and medical domains respectively.

#### Balancing Recall and Precision

Query expansion trades **precision for recall**. By adding more terms, you catch more relevant documents (higher recall), but you risk including marginally related documents (lower precision). The key is **weighting** – give original query terms higher weight than expanded terms.

A common pattern is original term weight=1.0, synonyms=0.7, LLM-suggested terms=0.5. This ensures exact matches still rank highest while expansions fill in gaps.

#### Managing Query Drift

**Query drift** is the biggest risk. Poor expansions can completely change the user's intent. If "python" expands to include "snake," "reptile," "Amazon rainforest," someone looking for the programming language gets garbage results.

The solution is **context-aware expansion**. Use signals like the user's previous searches, the category they're in, or co-occurring terms in their query to disambiguate. "python programming" shouldn't expand with snake terms.

#### Monitoring and Iteration

Query expansion requires ongoing **monitoring**. Track metrics like zero-result rate, click-through rate, and user satisfaction. If expansion is working, zero-result rates should drop (better recall) without harming CTR (precision stays good).

Build **fallback mechanisms**. If the expanded query produces zero results or very low-scoring results, fall back to the original query. This prevents bad expansions from ruining the user experience.`
        },
        {
          id: 16,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>Higher recall without losing precision (with weights)</li>
                          <li>Robust to synonyms and abbreviations</li>
                          <li>Domain-tunable with curated lists</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>Query drift if poorly curated</li>
                          <li>Extra latency for expansion</li>
                          <li>Needs monitoring and fallbacks</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b1737',
          notes: `### Strengths and Limitations of Query Expansion

#### The Recall Revolution

**Query expansion** is one of the most powerful techniques for improving recall. Let's examine its strengths and pitfalls.

#### Strengths: Bridging Vocabulary Gaps

**Higher recall without losing precision** is achievable if you weight expansions properly. By giving original terms weight=1.0 and expansions weight=0.5, you catch more relevant documents without drowning in noise. Documents matching original terms still rank highest.

**Robustness to synonyms and abbreviations** is transformative in specialized domains. Medical search where "CVA" (cerebrovascular accident), "stroke," "brain attack," and "cerebral infarction" all need to be connected. Legal search where "DUI," "DWI," and "drunk driving" are equivalent. Expansion handles these automatically once configured.

**Domain tunability** is powerful. You can maintain curated synonym lists specific to your industry. Automotive domain: "EV" = "electric vehicle" + "battery electric" + "BEV." Finance: "M&A" = "mergers and acquisitions" + "corporate takeovers." These domain-specific expansions are far more accurate than generic synonyms.

#### Limitations: The Drift Danger

**Query drift** is the existential threat to expansion. Poorly curated expansions change user intent. "Jaguar" expanding to "big cat," "feline," "predator" ruins searches for the car brand. Context matters enormously, and expansion without context is dangerous.

**Extra latency** adds up. If you're calling an LLM for semantic expansion, that's 100-500ms added to every query. Synonym lookups are faster but still take time. For high-volume systems, this latency multiplies cost and can degrade user experience.

**Monitoring and fallbacks are non-negotiable**. You must track expansion quality metrics constantly. Bad expansions can tank your search quality overnight if a synonym list gets corrupted or an LLM starts generating weird suggestions. Always have fallback paths to unexpanded queries.

#### Real-World Success Factors

The most successful implementations combine **curated lexical expansions** (fast, predictable, domain-tuned) with **optional semantic expansion** (LLM-powered, only for short or zero-result queries). This hybrid approach balances precision, recall, and latency.`
        }
      ]
    },
    {
      id: 'pattern-8',
      title: 'Cross-Encoder Re-Ranking',
      slides: [
        {
          id: 17,
          title: 'Pattern 8 — Cross-Encoder Re-Ranking After Hybrid',
          icon: { name: 'duo-check-double' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '45px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="fadeIn" delay={0.1}>
                  <p><strong>Idea / Pattern Summary:</strong> Use a cross-encoder to re-rank a small hybrid candidate set for maximal precision.</p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Mission-critical precision; legal, medical, shopping; short final lists.</p>
                </GSAPAnimated>
                <div style={{ marginTop: '20px' }}>
                  <GSAPAnimated animation="scaleIn" delay={0.5}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <strong>How it Works:</strong>
                      <MermaidPopover
                        title="Cross-Encoder Re-Ranking"
                        diagram={`flowchart TD
    A["🔍 Query"] --> B["⚖️ Hybrid Retrieval<br/>(Pattern 1-7)<br/>Top 50-100"]
    B --> C["🎯 Cross-Encoder<br/>Score Each<br/>Query-Doc Pair"]
    C --> D["📊 Sort by CE Score<br/>or Blend with Hybrid"]
    D --> E["✨ Top-N Final<br/>Results (10-20)"]
    style A fill:#4fc3f7,color:#000
    style B fill:#81c784,color:#000
    style C fill:#ffd700,color:#000
    style D fill:#e1bee7,color:#000
    style E fill:#ffcdd2,color:#000`}
                      />
                    </p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.7}>
                    <ol style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <li>Run hybrid retrieval to get top-50/100</li>
                      <li>Score query–doc pairs with cross-encoder (e.g., bge-reranker, Cohere Rerank)</li>
                      <li>Sort by CE score; optionally blend with hybrid score</li>
                      <li>Return top-N (e.g., 10–20)</li>
                    </ol>
                  </GSAPAnimated>
                </div>
                <GSAPAnimated animation="fadeIn" delay={0.9}>
                  <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px' }}>
                    <p style={{ fontSize: '1rem', margin: 0 }}><strong>Tools / Libraries:</strong> OpenAI ReRank, Cohere Rerank, JinaAI Reranker, SentenceTransformers cross-encoders, NVIDIA NeMo, Vespa second-phase reranking, Qdrant integrations</p>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6b5017',
          notes: `### Pattern 8 — Cross-Encoder Re-Ranking After Hybrid

#### Introduction to Cross-Encoders

Welcome to **Pattern 8**, the precision powerhouse. **Cross-encoders** are neural models specifically designed to score query-document relevance by processing them together, capturing subtle interactions that simpler models miss.

#### How It Works: Deep Relevance Scoring

First, run any hybrid retrieval pattern (Patterns 1-7) to get your top 50-100 candidates. Think of this as the semifinals – you've narrowed from millions to a manageable set that's fast to process.

Then comes the **cross-encoder** stage. Unlike bi-encoders (which embed query and document separately), cross-encoders process the query and document **together as a single input**. They see the full context of how terms interact, which lets them understand nuances like negation, conditions, and complex relationships.

For each query-document pair, the cross-encoder produces a relevance score. You sort by these scores to get your final top-N (typically 10-20 results). Some implementations blend the cross-encoder score with the original hybrid score for a safety net.

#### When This Pattern Is Essential

**Mission-critical precision** applications need cross-encoders. In **legal search**, the difference between a relevant precedent and a misleading one can cost millions. In **medical search**, precision directly impacts patient safety. In **e-commerce**, the difference between a relevant product and a near-miss affects revenue.

Cross-encoders excel at **hard ranking cases** – when the differences between candidates are subtle. Consider ranking medical papers on "COVID-19 vaccine efficacy in immunocompromised patients." A cross-encoder can understand that "reduced immune response" is critical context, while bi-encoders might just see overlapping keywords.

**Short final lists** justify the computational cost. If you're only showing 10 results to users, it's worth spending extra compute to ensure those 10 are absolutely the best. The user experience improvement far outweighs the cost.

#### Why Cross-Encoders Are Special

**Capturing interactions** is the superpower. Cross-encoders understand negation ("no evidence of," "lacks"), conditional relationships ("only if," "provided that"), and fine-grained comparisons that simpler models miss.

They handle **query-specific relevance** better. For "best budget smartphones under $300," a cross-encoder can verify both the quality signal ("best") and the price constraint ("under $300") are met, not just that the document mentions smartphones and prices.

#### Implementation Considerations

Popular services include **Cohere Rerank** and **OpenAI ReRank** APIs – simple to integrate, highly effective. Open-source options include **bge-reranker**, **JinaAI rerankers**, and **SentenceTransformers** cross-encoder models.

**Batching** is critical for performance. Score multiple query-document pairs in a single batch request to amortize the API overhead. Modern cross-encoders can handle batch sizes of 10-100 pairs efficiently.

**Caching** strategies become important. Cross-encoder scores for query-document pairs can be cached (though cache hit rates are lower than traditional search caching due to query variability).

#### Cost-Benefit Analysis

Cross-encoders are **expensive** – both in latency (10-100ms per query-document pair) and compute (requiring GPUs for acceptable performance at scale). But for high-value queries where precision matters most, the ROI is clear.

The key is **selective application**. Use cross-encoders for logged-in user searches, premium features, or high-stakes queries. Use simpler hybrid patterns for logged-out users or low-stakes browsing.`
        },
        {
          id: 18,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>Best-in-class relevance on hard ranking cases</li>
                          <li>Captures fine-grained interactions and negation</li>
                          <li>Works on top of any hybrid method</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>Highest latency/cost; needs batching</li>
                          <li>Throughput constraints; careful caching required</li>
                          <li>Model/domain drift requires evaluation</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b5017',
          notes: `### Strengths and Limitations of Cross-Encoder Re-Ranking

#### The Precision Champion

**Cross-encoders** represent the state-of-the-art in relevance scoring. But with great power comes great computational cost.

#### Strengths: Unmatched Relevance

**Best-in-class relevance** on hard cases is the primary value proposition. When results are subtle and nuanced, cross-encoders consistently outperform simpler methods. Benchmark studies show 5-15% improvements in nDCG@10 over hybrid-only approaches.

**Capturing fine-grained interactions** like negation is critical for certain domains. "No evidence of tumor growth" vs "evidence of tumor growth" – cross-encoders understand this distinction because they see query and document together. Bi-encoders might score both similarly because they share keywords.

**Works on top of any hybrid method** makes it incredibly flexible. You can add cross-encoder re-ranking to Pattern 1, 2, 3, or any other pattern. It's a precision booster that integrates anywhere in your pipeline.

#### Limitations: Cost at Scale

**Highest latency** among all patterns – processing 50 query-document pairs through a cross-encoder can take 100-500ms. For high-traffic systems, this becomes a throughput bottleneck.

**Batching and caching** are mandatory, not optional. Without aggressive batching, you can't achieve acceptable QPS (queries per second). Without caching popular queries, costs spiral.

**Model and domain drift** require ongoing evaluation. Cross-encoders trained on web search data might not transfer well to specialized domains (medical, legal). You may need domain-specific fine-tuning and continuous monitoring of quality metrics.

#### Strategic Deployment

Use cross-encoders **selectively**: for premium users, high-value searches, or when users explicitly request "best" results. Fall back to simpler hybrid patterns for bulk traffic.`
        }
      ]
    },
    {
      id: 'pattern-9',
      title: 'Parent-Child Chunking',
      slides: [
        {
          id: 19,
          title: 'Pattern 9 — Hybrid with Parent-Child Chunking',
          icon: { name: 'duo-circle-nodes' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '45px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <p><strong>Idea / Pattern Summary:</strong> Retrieve on small child chunks (vectors), return ranked parent chunks for context.</p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Long documents; LLM context limits; avoiding orphaned snippets.</p>
                </GSAPAnimated>
                <div style={{ marginTop: '20px' }}>
                  <GSAPAnimated animation="scaleIn" delay={0.5}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <strong>How it Works:</strong>
                      <MermaidPopover
                        title="Parent-Child Chunking"
                        diagram={`flowchart TD
    A["📄 Document"] --> B["✂️ Split into<br/>Parent Sections"]
    B --> C["🔪 Split Parents<br/>into Child Chunks"]
    C --> D["🧠 Index Children<br/>(with parent_id)"]
    E["🔍 Query"] --> F["⚖️ Hybrid Retrieval<br/>on Children"]
    F --> G["🔗 Map Children<br/>to Parents"]
    G --> H["📊 Score & Merge<br/>Parents"]
    H --> I["✨ Deduplicated<br/>Results"]
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#e1bee7,color:#000
    style F fill:#ffd700,color:#000
    style H fill:#ffcdd2,color:#000
    style I fill:#81c784,color:#000`}
                      />
                    </p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="fadeIn" delay={0.7}>
                    <ol style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <li>Split docs into parent sections and child chunks</li>
                      <li>Index child embeddings with parent_id in metadata</li>
                      <li>Retrieve children (hybrid), map to parents</li>
                      <li>Merge/score parents, deduplicate, return</li>
                    </ol>
                  </GSAPAnimated>
                </div>
                <GSAPAnimated animation="fadeIn" delay={0.9}>
                  <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px' }}>
                    <p style={{ fontSize: '1rem', margin: 0 }}><strong>Tools / Libraries:</strong> LangChain ParentDocumentRetriever, LlamaIndex, AWS Bedrock KBs, Elasticsearch parent-child/nested, Qdrant payload relations, Weaviate references</p>
                  </div>
                </GSAPAnimated>
              </div>
            </div>

          ),
          backgroundColor: '#406b17',
          notes: `### Pattern 9 — Hybrid with Parent-Child Chunking

#### Introduction to Hierarchical Retrieval

Welcome to **Pattern 9**, which solves a fundamental problem in RAG systems: **chunking granularity**. Small chunks are great for precise retrieval but lack context. Large chunks have context but are less precise. Parent-child chunking gives you both.

#### How It Works: Retrieve Small, Return Big

The strategy is elegant: **retrieve on small child chunks** for precision, but **return their parent chunks** for context. Imagine searching a book – you want to find the exact paragraph (child) that matches your query, but you need the full section or chapter (parent) to understand it.

First, you **split documents hierarchically**. A parent might be a full article section (500-1000 words). Each parent splits into multiple children (100-200 words each). Children are small enough for focused embeddings but linked back to their parents via metadata (parent_id).

During retrieval, you run **hybrid search on children** – the small, focused chunks. This gives you precision. Then you **map children back to parents** using the parent_id. If multiple children from the same parent match, you aggregate their scores. Finally, you **return the parent chunks**, which provide full context.

#### When This Pattern Shines

**Long documents** benefit enormously. Scientific papers, legal documents, and technical manuals are thousands of words long. Returning a full paper to answer a specific question wastes LLM context window. Parent-child lets you return just the relevant section (parent) containing the matching paragraph (child).

**LLM context limits** make this pattern practical. Modern LLMs have 4K-32K token windows. You want to pack that window with relevant context, not irrelevant text. By retrieving precise children but returning contextual parents, you maximize relevance density.

**Avoiding orphaned snippets** improves answer quality. When users see search results or when LLMs generate answers, context matters. A standalone paragraph might be ambiguous, but the full section with headings and surrounding text is clear. Parent-child provides this context automatically.

#### Implementation Strategies

**LangChain's ParentDocumentRetriever** makes this straightforward. You specify parent and child chunk sizes, and it handles the splitting, indexing, and mapping automatically.

**LlamaIndex** has similar capabilities with its hierarchical document structures. You can define parent-child relationships and it manages the retrieval logic.

For **custom implementations**, the key is metadata management. Store each child with parent_id, parent_text, and optionally sibling_order. During retrieval, group children by parent_id, aggregate scores, and return deduplicated parents.

#### Scoring Strategies

How do you score parents when multiple children match? Common strategies:
- **Max score**: Parent gets the highest child score (finds "best part")
- **Sum score**: Parent gets sum of child scores (rewards breadth)
- **Average score**: Parent gets average of child scores (balances precision)
- **Weighted**: Recent or early children might get higher weight

#### Deduplication and Tie-Breaking

Since multiple children can map to the same parent, **deduplication** is critical. When merging, you want to return each parent only once. Use parent_id as the deduplication key.

For **tie-breaking** when parents have similar scores, consider recency (newer documents first), authority (trusted sources first), or sibling coverage (how many child chunks matched).

#### Balancing Granularity

The art is choosing the right **parent and child sizes**. Too large parents and you're back to context bloat. Too small and you don't gain enough context. Common patterns:
- Parents: 500-1000 words (1-2 sections)
- Children: 100-200 words (1-2 paragraphs)

Experiment with your specific content and LLM to find the sweet spot.`
        },
        {
          id: 20,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>Better context and coherence in results</li>
                          <li>Reduces fragmentation and hallucination</li>
                          <li>Works with both BM25 and vectors</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>Data modeling and join overhead</li>
                          <li>Risk of over-including irrelevant siblings</li>
                          <li>Needs careful dedup and tie-breaking</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#406b17',
          notes: `### Strengths and Limitations of Parent-Child Chunking

#### The Context-Precision Balance

**Parent-child chunking** elegantly solves the chunking granularity problem. Let's examine when it works beautifully and when it requires careful handling.

#### Strengths: Context Without Noise

**Better context and coherence** is the primary benefit. Users see complete sections rather than orphaned paragraphs. LLMs receive contextual chunks that include headings, surrounding sentences, and structural cues. This dramatically improves answer quality and reduces confusion.

**Reducing fragmentation and hallucination** is critical for RAG systems. When LLMs receive fragmented snippets without context, they sometimes hallucinate or make incorrect inferences. Parent chunks provide the full context needed for accurate comprehension.

**Works with both BM25 and vectors** means you can apply this pattern to any hybrid search method. Whether you're using Pattern 1, 2, 3, or others, parent-child chunking layers on top cleanly.

#### Limitations: Complexity and Edge Cases

**Data modeling and join overhead** adds implementation complexity. You need to manage parent-child relationships in your database, handle joins during retrieval, and aggregate scores correctly. This is more complex than flat chunking.

**Risk of over-including irrelevant siblings** happens when one child matches strongly but its siblings (other children of the same parent) are irrelevant. You return the entire parent, which includes that irrelevant content. This wastes LLM context window.

**Careful deduplication and tie-breaking** are mandatory. If three children from one parent match, you must deduplicate and decide: return once with aggregated score, or prioritize the best child. Wrong choices hurt both precision and recall.

#### Strategic Implementation

Use parent-child chunking for **document-centric applications** (legal, medical, scientific). Avoid for **short-form content** (tweets, product titles) where there's no meaningful parent structure. Monitor context window utilization to ensure you're maximizing relevance density.`
        }
      ]
    },
    {
      id: 'pattern-10',
      title: 'ANN + BM25',
      slides: [
        {
          id: 21,
          title: 'Pattern 10 — Approximate + Exact Hybrid (ANN + BM25)',
          icon: { name: 'duo-rocket' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '45px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="fadeIn" delay={0.1}>
                  <p><strong>Idea / Pattern Summary:</strong> Combine fast ANN vector recall with exact BM25 ranking/fusion for scale and quality.</p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Large-scale indexes; strict latency SLOs; cost-sensitive workloads.</p>
                </GSAPAnimated>
                <div style={{ marginTop: '20px' }}>
                  <GSAPAnimated animation="scaleIn" delay={0.5}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <strong>How it Works:</strong>
                      <MermaidPopover
                        title="ANN + BM25 Hybrid Architecture"
                        diagram={`flowchart LR
    A["🔍 Query"] --> B["🧠 ANN<br/>(HNSW/IVF)<br/>top-M vectors"]
    A --> C["📝 BM25<br/>Inverted Index<br/>top-M lexical"]
    B --> D["⚖️ Fusion<br/>(RRF or Weighted)"]
    C --> D
    D --> E["🔄 Optional<br/>Exact Re-score"]
    E --> F["✨ Top-N<br/>Results"]
    style A fill:#4fc3f7,color:#000
    style B fill:#e1bee7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffd700,color:#000
    style E fill:#ffcdd2,color:#000
    style F fill:#81c784,color:#000`}
                      />
                    </p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.7}>
                    <ol style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <li>ANN (HNSW/IVF/DiskANN) retrieves top-M vectors</li>
                      <li>BM25 retrieves top-M lexical matches</li>
                      <li>Fuse with RRF or normalized weighted sum</li>
                      <li>Optional exact re-score on top-K</li>
                    </ol>
                  </GSAPAnimated>
                </div>
                <GSAPAnimated animation="fadeIn" delay={0.9}>
                  <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px' }}>
                    <p style={{ fontSize: '1rem', margin: 0 }}><strong>Tools / Libraries:</strong> FAISS, Milvus, Qdrant, Pinecone, Elasticsearch/OpenSearch (HNSW + BM25), Vespa (ANN + second-phase ranking), Azure AI Search (RRF)</p>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#17596b',
          notes: `### Pattern 10 — Approximate + Exact Hybrid (ANN + BM25)

#### Introduction to Scalable Hybrid Search

Welcome to **Pattern 10**, which tackles the challenge of hybrid search at massive scale. When you have millions or billions of documents, you need approximations (ANN) to keep latency reasonable while maintaining quality.

#### How It Works: Speed Meets Accuracy

The pattern combines **Approximate Nearest Neighbor (ANN)** algorithms with exact **BM25** scoring. ANN algorithms like **HNSW**, **IVF**, or **DiskANN** are designed to find nearest neighbors in high-dimensional spaces very quickly by using clever data structures and approximations.

On the vector side, instead of computing exact distances to every document (which would be prohibitively slow), ANN algorithms navigate through a graph structure (HNSW) or use clustering (IVF) to find approximate nearest neighbors in milliseconds, even across billions of vectors.

On the lexical side, **BM25** already uses inverted indexes, which are inherently efficient. BM25 retrieval scales well naturally because indexes point directly to matching documents.

Both streams retrieve their top-M candidates (say, 100 each). Then you **fuse** them using RRF or normalized weighted sum, just like Pattern 1. Optionally, you can do an **exact re-score** on the final top-K to verify quality.

#### When This Pattern Is Essential

**Large-scale indexes** absolutely require this pattern. At 10M+ documents, exact vector similarity becomes too slow for user-facing queries. ANN keeps latency under 100ms while still providing excellent relevance.

**Strict latency SLOs** benefit from ANN's predictable performance. By tuning the ANN parameters (ef, M, nprobe), you can trade recall for latency in a controlled way. Need p99 under 50ms? ANN lets you hit that target.

**Cost-sensitive workloads** leverage ANN efficiency. Computing exact similarities requires touching every vector in your index. ANN only traverses a small portion of the index, dramatically reducing CPU and memory costs at scale.

#### Understanding ANN Trade-offs

ANN algorithms have **tuneable parameters** that control the recall-latency trade-off:
- **HNSW**: ef (search depth), M (graph connectivity)
- **IVF**: nprobe (clusters to search)
- Higher values = better recall but slower search
- Lower values = faster search but may miss some relevant docs

The art is finding the **sweet spot** where you maintain 95%+ recall while hitting your latency targets.

#### Implementation Strategies

Most modern platforms provide ANN out of the box. **Elasticsearch** and **OpenSearch** use HNSW for their knn queries. **Qdrant**, **Milvus**, and **Pinecone** are built around ANN algorithms. **FAISS** is the foundational library that many systems build upon.

The key is **index configuration**. Choose your ANN algorithm based on your constraints:
- **HNSW**: Best for small-medium scales (10M-100M), excellent recall-latency trade-off
- **IVF**: Good for large scales (100M+), requires training
- **DiskANN**: Best for massive scales (1B+), operates on disk not RAM

#### Score Normalization Challenges

Combining ANN and BM25 scores requires **normalization**. ANN cosine similarities are in [0, 1], but BM25 scores are unbounded. You must normalize to a common scale before fusion. **RRF** avoids this by only using ranks, which is why it's popular.

#### Monitoring and Tuning

Track **ANN recall metrics** separately. How often does your ANN find documents that would have ranked in the top-K with exact search? Tools like FAISS provide utilities to measure this. Aim for 95%+ recall on your ANN stage to ensure overall quality doesn't suffer.`
        },
        {
          id: 22,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>High throughput with strong relevance</li>
                          <li>Tunable recall–latency trade-offs</li>
                          <li>Resilient to index and query variance</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>ANN recall tuning (ef, M, nprobe) is non-trivial</li>
                          <li>Multiple indices to manage and monitor</li>
                          <li>Score normalization adds complexity</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#17596b',
          notes: `### Strengths and Limitations of ANN + BM25 Hybrid

#### Scaling to Billions

**ANN + BM25** represents the industry-standard approach for large-scale hybrid search. Let's understand its power and challenges.

#### Strengths: Performance at Scale

**High throughput with strong relevance** is the defining characteristic. Systems using HNSW can serve thousands of queries per second across 100M+ document indexes while maintaining 95%+ recall. This combination of speed and quality is why this pattern dominates production systems.

**Tunable recall-latency trade-offs** provide operational flexibility. Need to handle a traffic spike? Lower the ANN parameters temporarily to stay within latency budgets. Have spare capacity? Increase parameters for better quality. This dynamic tunability is powerful for production systems.

**Resilient to index and query variance** means the system stays robust. ANN algorithms handle new data well (through incremental index updates) and adapt to diverse query types without manual intervention.

#### Limitations: Operational Complexity

**ANN recall tuning is non-trivial**. Parameters like ef, M, and nprobe have complex interactions. Too aggressive and you miss relevant documents. Too conservative and you blow your latency budget. Finding optimal settings requires experimentation and continuous monitoring.

**Multiple indices to manage** increases operational burden. You're running both a vector index (HNSW/IVF) and an inverted index (BM25). Each needs building, updating, monitoring, and backing up. Index corruption or data sync issues between indices can cause quality problems.

**Score normalization complexity** affects fusion quality. BM25 scores and cosine similarities live in different ranges. Naively combining them can let one dominate. Proper normalization (min-max, z-score) or using RRF adds implementation complexity and potential edge cases.

#### Production Best Practices

Start with conservative ANN settings (high ef/nprobe) and measure actual recall. Gradually relax settings while monitoring quality metrics. Use **RRF for fusion** to avoid normalization headaches. Implement comprehensive monitoring of both ANN recall and end-to-end relevance metrics.`
        }
      ]
    },
    {
      id: 'pattern-11',
      title: 'Domain Dictionaries/Ontologies',
      slides: [
        {
          id: 23,
          title: 'Pattern 11 — Hybrid with Domain Dictionaries/Ontologies',
          icon: { name: 'duo-book' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '45px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="slideInRight" delay={0.1}>
                  <p><strong>Idea / Pattern Summary:</strong> Inject domain ontologies, synonyms, and entity linking into hybrid retrieval.</p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <p style={{ marginTop: '15px' }}><strong>When to Use:</strong> Healthcare, legal, finance, scientific domains with specialized terminology and knowledge structures.</p>
                </GSAPAnimated>
                <div style={{ marginTop: '20px' }}>
                  <GSAPAnimated animation="scaleIn" delay={0.5}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <strong>How it Works:</strong>
                      <MermaidPopover
                        title="Domain Dictionary Integration"
                        diagram={`flowchart TD
    A["🔍 Query"] --> B["🏷️ NER<br/>Entity Recognition"]
    B --> C["📚 Map to<br/>Ontology/Dictionary"]
    C --> D["📝 Expand Terms<br/>(synonyms, codes)"]
    D --> E["⚡ Boost Entities<br/>in BM25 + Vector"]
    E --> F["⚖️ Hybrid<br/>Retrieval"]
    F --> G["🎯 Entity-Aware<br/>Re-Rank"]
    G --> H["✨ Results"]
    style A fill:#4fc3f7,color:#000
    style B fill:#81c784,color:#000
    style C fill:#e1bee7,color:#000
    style D fill:#ffd700,color:#000
    style F fill:#ffcdd2,color:#000
    style H fill:#81c784,color:#000`}
                      />
                    </p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="fadeIn" delay={0.7}>
                    <ol style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <li>Recognize entities (NER) and map to ontology</li>
                      <li>Expand/normalize terms (synonyms, abbreviations, codes)</li>
                      <li>Boost key entities and relations in BM25 and vectors</li>
                      <li>Run hybrid and optionally entity-aware re-rank</li>
                    </ol>
                  </GSAPAnimated>
                </div>
                <GSAPAnimated animation="fadeIn" delay={0.9}>
                  <div style={{ marginTop: '15px', padding: '10px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px' }}>
                    <p style={{ fontSize: '1rem', margin: 0 }}><strong>Tools / Libraries:</strong> Elasticsearch synonym_graph, SKOS, Vespa knowledge features, spaCy/Stanza NER, Neo4j/Knowledge Graphs, UMLS/SNOMED/MeSH dictionaries, Haystack/LlamaIndex</p>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#32176b',
          notes: `### Pattern 11 — Hybrid with Domain Dictionaries/Ontologies

#### Introduction to Knowledge-Enhanced Search

Welcome to **Pattern 11**, the most specialized pattern. This integrates **domain knowledge graphs**, **ontologies**, and **controlled vocabularies** into hybrid search, bringing structured expertise to bear on retrieval.

#### How It Works: Structured Knowledge Meets Search

The process starts with **Named Entity Recognition (NER)**. When a query comes in, you identify entities like diseases, drugs, legal terms, financial instruments, or scientific concepts. These aren't just keywords – they're structured entities with meanings.

Next, you **map entities to an ontology** or **knowledge graph**. In healthcare, "MI" maps to the UMLS concept "C0027051: Myocardial Infarction," which has relationships to synonyms ("heart attack"), related conditions, and ICD-10 codes. In legal, "M&A" maps to "Mergers and Acquisitions" with related concepts like "due diligence," "hostile takeover," etc.

Then you **expand and normalize** terms using the ontology. The query isn't just "MI" anymore – it's "myocardial infarction OR heart attack OR cardiac arrest OR ICD-10:I21." You're leveraging years of domain expert curation.

Finally, you **boost these entities** in both BM25 and vector scoring. Documents containing recognized medical codes or legal terms get extra weight. The ontology essentially injects domain expertise into your ranking function.

#### When This Pattern Is Essential

**Healthcare** relies heavily on this pattern. Medical terminology is vast (UMLS has millions of concepts), riddled with synonyms ("CVA" = "cerebrovascular accident" = "stroke"), and uses standardized codes (ICD-10, SNOMED CT, RxNorm). Without ontology integration, medical search is nearly impossible to get right.

**Legal search** benefits enormously from citation graphs and legal ontologies. Knowing that "Brown v. Board of Education" is related to "Plessy v. Ferguson" and that both involve "Equal Protection Clause" helps surface relevant precedents even when exact case names aren't mentioned.

**Finance** uses ontologies for company relationships, financial instruments, regulatory terms, and market taxonomies. Searching for "AAPL" should understand this is Apple Inc., link to its subsidiaries, and understand related financial terms.

**Scientific literature** leverages ontologies like Gene Ontology, ChEBI (chemical entities), and domain-specific taxonomies to understand relationships between concepts, genes, proteins, and compounds.

#### Implementation Strategies

**UMLS** (Unified Medical Language System) is the gold standard for healthcare. It integrates 200+ medical vocabularies and provides concept mappings, synonyms, and relationships.

**SNOMED CT** and **MeSH** provide hierarchical medical terminologies used for indexing and searching biomedical literature.

**Legal**: **Blue Book** citations, **Westlaw KeyNumbers**, and legal ontologies provide structured ways to link cases, statutes, and legal concepts.

**spaCy** and **Stanza** provide excellent NER models for various domains. You can fine-tune them on your specific terminology.

**Neo4j** and other **knowledge graphs** can store ontology relationships and provide fast lookups for entity expansion.

#### Integration Patterns

The cleanest approach is **query-time expansion**. At query time, run NER, look up entities in your ontology, expand with synonyms and codes, then run hybrid search with boosts. This keeps your index clean and ontology updates don't require re-indexing.

Alternatively, **index-time enrichment** annotates documents with entity IDs and relationships during ingestion. This makes query time faster but requires re-indexing when the ontology changes.

#### Balancing Precision and Recall

Ontologies improve both! **Precision** increases because you're matching on expert-curated concepts, not just raw strings. **Recall** increases because synonym expansion catches documents using different terminology. The key is proper **weighting** – exact matches should still rank higher than synonym expansions.

#### Maintenance Challenges

**Ongoing curation** is the biggest operational challenge. Ontologies evolve – new medical codes are added, legal precedents are overturned, scientific taxonomies are updated. You need processes to keep your ontology current.

**Coverage gaps** are inevitable. No ontology covers everything. Your system must gracefully handle entities not in the ontology by falling back to regular hybrid search.

**Cross-lingual alignment** is hard when working internationally. Medical terms in English, Spanish, and Mandarin might map to the same UMLS concept, but alignment quality varies.`
        },
        {
          id: 24,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>High precision and explainability</li>
                          <li>Handles acronyms and codes (e.g., UMLS, SNOMED)</li>
                          <li>Improves recall on specialized jargon</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.2}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                      <GSAPAnimated animation="fadeIn" delay={0.4}>
                        <ul style={{ fontSize: '1.2rem' }}>
                          <li>Ongoing curation and maintenance</li>
                          <li>Coverage gaps cause blind spots</li>
                          <li>Cross-lingual alignment can be hard</li>
                        </ul>
                      </GSAPAnimated>
                    </div>
                  </GSAPAnimated>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#32176b',
          notes: `### Strengths and Limitations of Domain Dictionary Integration

#### Expert Knowledge at Scale

**Domain dictionaries and ontologies** bring decades of expert curation to bear on search. Let's examine the power and the price.

#### Strengths: Precision Through Expertise

**High precision and explainability** define this pattern. When a document ranks highly because it contains the SNOMED code for the exact disease being searched, you can explain exactly why. Ontology-based matching is transparent and auditable – critical for regulated industries.

**Handling acronyms and codes** is where ontologies truly shine. Medical search involves hundreds of thousands of abbreviations and codes. "AMI," "MI," "ICD-10:I21," and "STEMI" all refer to types of heart attacks. Manually handling these is impossible; ontologies do it automatically with expert validation.

**Improving recall on specialized jargon** helps users find what they need even when they use layman's terms. A patient searching "heart problems" finds results tagged with "cardiovascular disease," "cardiac insufficiency," and specific ICD codes because the ontology bridges the vocabulary gap.

#### Limitations: The Curation Tax

**Ongoing curation and maintenance** is expensive. Medical ontologies like UMLS are updated quarterly. Legal precedents change constantly. Scientific taxonomies evolve. You need dedicated staff or partnerships to keep your ontologies current, or your search quality degrades over time.

**Coverage gaps cause blind spots**. No ontology is complete. Emerging diseases (remember early COVID-19), new legal theories, novel financial instruments – these might not have ontology entries yet. Your system must handle unknown entities gracefully.

**Cross-lingual alignment** multiplies complexity in global applications. Medical concepts don't always align cleanly across languages. Legal systems differ by jurisdiction. Building and maintaining multilingual ontologies requires even more specialized expertise.

#### Return on Investment

For **specialized domains with high stakes** (healthcare, legal, regulatory), the ROI is clear. Better search directly impacts patient safety, legal outcomes, and compliance. For general domains, simpler patterns might suffice. Choose based on your domain's complexity and the business value of search quality.`
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 25,
          title: 'Summary and Key Takeaways',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4fc3f7', marginBottom: '15px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                      What to Remember
                    </h3>
                    <GSAPAnimated animation="fadeIn" delay={0.3}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                        <li>Start simple: Weighted fusion or RRF is a solid baseline</li>
                        <li>Cascade when needed: Two-stage or cross-encoder for precision</li>
                        <li>Control drift: Term boosts, field-aware scoring, metadata filters</li>
                        <li>Improve recall: Query expansion, vector-first recall, parent-child</li>
                        <li>Match use case: Choose pattern based on content type and query complexity</li>
                      </ul>
                    </GSAPAnimated>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#81c784', marginBottom: '15px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-gear" sizeName="2x" darkModeInvert={true} />
                      Operational Tips
                    </h3>
                    <GSAPAnimated animation="fadeIn" delay={0.3}>
                      <ul style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                        <li>Tune alpha/weights per query type; consider dynamic tuning</li>
                        <li>Normalize scores before linear fusion; or use RRF to avoid it</li>
                        <li>Evaluate with nDCG@k, Recall@k, MRR, user CTR/zero-result rate</li>
                        <li>Watch latency/cost budgets; batch and cache aggressively</li>
                        <li>A/B test different hybrid approaches with real user traffic</li>
                      </ul>
                    </GSAPAnimated>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.7}>
                <div style={{ marginTop: '30px' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffb74d', marginBottom: '15px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-nodes" sizeName="2x" darkModeInvert={true} />
                    Tools Recap
                  </h3>
                  <GSAPAnimated animation="fadeIn" delay={0.8}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', fontSize: '1.4rem' }}>
                      <div>
                        <h4 style={{ color: '#ba68c8', marginBottom: '10px' }}>Vector Databases & Search Engines</h4>
                        <p style={{ fontSize: '1.2rem' }}>Elasticsearch/OpenSearch, Vespa, Weaviate, Qdrant, Milvus, Pinecone, Azure AI Search</p>
                      </div>
                      <div>
                        <h4 style={{ color: '#f06292', marginBottom: '10px' }}>Rerankers</h4>
                        <p style={{ fontSize: '1.2rem' }}>Cohere Rerank, OpenAI ReRank, Jina Reranker, SentenceTransformers</p>
                      </div>
                      <div>
                        <h4 style={{ color: '#64b5f6', marginBottom: '10px' }}>Frameworks</h4>
                        <p style={{ fontSize: '1.2rem' }}>LangChain, LlamaIndex, Haystack, FAISS, SPLADE</p>
                      </div>
                    </div>
                  </GSAPAnimated>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <div style={{ marginTop: '25px', padding: '10px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '8px', textAlign: 'left' }}>
                  <p style={{ fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '10px' }} darkModeInvert={true} />
                    <strong>Remember:</strong> Hybrid search is about combining the strengths of lexical and semantic approaches.
                    Start simple, measure everything, and iterate based on real user feedback.
                  </p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: `### Summary and Key Takeaways

#### Wrapping Up Our Journey

Congratulations! You've now explored **eleven powerful hybrid search patterns**. Let's consolidate what we've learned and provide you with actionable guidance for your next steps.

#### What to Remember: Core Principles

**Start simple** is the golden rule. Pattern 1 (weighted fusion or RRF) is a solid baseline that covers 80% of use cases. Don't over-engineer from day one. Get something working, measure it, then add complexity only where data shows you need it.

**Cascade when needed** for precision. If your baseline isn't precise enough, add two-stage retrieval (Patterns 2-3) or cross-encoder re-ranking (Pattern 8). These patterns add latency and complexity but dramatically improve precision for high-stakes applications.

**Control drift** with guard rails. Pure semantic search can wander off-course. Use term boosts (Pattern 4), field-aware scoring (Pattern 6), and metadata filters (Pattern 5) to keep results grounded in user intent and business requirements.

**Improve recall** when users get zero results or miss obvious documents. Query expansion (Pattern 7), vector-first recall (Pattern 3), and parent-child chunking (Pattern 9) all boost recall, catching documents that simpler patterns miss.

**Match the use case** – there's no one-size-fits-all. E-commerce needs different patterns than medical search. Long documents need different strategies than short tweets. Let your content characteristics and user behavior guide pattern selection.

#### Operational Tips: Making It Work in Production

**Tune weights per query type**. Short queries might need α=0.3 (more semantic), while long technical queries might need α=0.7 (more lexical). Consider dynamic tuning based on query classification.

**Normalize scores carefully** before linear fusion. BM25 and cosine similarity live in different ranges. Use min-max or z-score normalization, or just use RRF to avoid the problem entirely.

**Evaluate with the right metrics**. Traditional IR metrics like nDCG@k, Recall@k, and MRR tell you if rankings are good. But also track user metrics: CTR (click-through rate), time to click, zero-result rate, and satisfaction surveys. These reveal real-world performance.

**Watch latency and cost budgets**. Each pattern adds overhead. BM25 is cheap, vector search is moderate, cross-encoders are expensive. Profile your system, batch aggressively, cache popular queries, and use CDNs where possible.

**A/B test everything**. Your intuitions about what works might be wrong. Test Pattern 1 vs Pattern 2 vs Pattern 8 with real user traffic. Let data drive decisions, not assumptions.

#### Tools Recap: Your Implementation Toolkit

You have three categories of tools at your disposal:

**Vector databases and search engines** form your foundation: Elasticsearch, Weaviate, Qdrant, Milvus, Pinecone all provide hybrid search capabilities. Choose based on your scale, latency requirements, and operational preferences.

**Rerankers** add precision: Cohere Rerank and OpenAI ReRank offer turnkey solutions. SentenceTransformers and Jina provide open-source alternatives for self-hosting.

**Frameworks** accelerate development: LangChain and LlamaIndex provide high-level abstractions for RAG. Haystack offers production-ready pipelines. FAISS gives you low-level control for custom implementations.

#### The Path Forward

**Hybrid search isn't a destination; it's a journey**. You'll start with Pattern 1, measure quality, identify gaps, layer on additional patterns, iterate based on user feedback, and continuously refine. This is how the best search systems are built – incrementally, data-driven, user-focused.

**Remember the core insight**: Lexical and semantic search each have strengths. BM25 excels at exact matching and rare terms. Vector search excels at meaning and paraphrases. Hybrid search gives you both, making your search system robust across diverse queries and content types.

Start simple, measure everything, iterate based on real user feedback, and you'll build search experiences that truly serve your users. Thank you for joining this exploration of hybrid search patterns!`
        }
      ]
    }
  ]
};
