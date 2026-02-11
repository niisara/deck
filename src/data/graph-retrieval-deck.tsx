import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const graphRetrievalDeck: Deck = {
  id: 'graph-based-retrieval-techniques',
  name: '13 Graph-Based Retrieval Techniques',
  description: 'A practical cheat-sheet for precision, reasoning, and reliable context',
  category: 'RAG',
  theme: 'sky',
  cardClassName: 'glass-morphism',
  cardStyle: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80)',
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
          title: '13 Graph-Based Retrieval Techniques',
          content: (
            <div>
              <GSAPAnimated animation="rotateIn" duration={1.2}>
                <div style={{ fontSize: '1.5rem', color: '#0ea5e9' }}>
                  <SvgIcon iconName="duo-diagram-project" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  A practical cheat-sheet for precision, reasoning, and reliable context
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" duration={0.8} delay={0.3}>
                <div style={{ fontSize: '1.2rem', color: '#10b981', lineHeight: '2' }}>
                  <div>
                    <SvgIcon iconName="duo-users-group" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Audience:</strong> RAG 👉 'rag' engineers, search engineers, data scientists
                  </div>
                  <div>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>What you'll get:</strong> 13 techniques, when to use them, simple steps, pros/cons
                  </div>
                  <div>
                    <SvgIcon iconName="duo-circle-info" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Note:</strong> Simple visuals only (no complex diagrams)
                  </div>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" duration={0.8} delay={0.6}>
                <div>
                  <p><strong>Prepared by:</strong> Nisar A</p>
                  <p><strong>Date:</strong> November 7, 2025</p>
                  <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#291e5b',
          notes: `### 13 Graph-Based Retrieval Techniques

Welcome everyone! Today we're diving into an exciting and increasingly important area in modern information retrieval: **graph-based retrieval techniques**. If you're working with RAG 👉 'rag' systems, building search engines, or trying to improve how your applications find and connect information, this presentation is your practical guide.

#### What Are Graph-Based Retrieval Techniques?
Traditional search relies on finding individual documents that match your query. But what if you want to understand **relationships** between concepts? What if you need to trace **connections** between entities? That's where graph-based retrieval shines. Instead of treating documents as isolated islands, we organize information as a **network of interconnected nodes** where relationships matter just as much as the content itself.

#### Who Is This For?
This deck is designed for **RAG engineers** building retrieval-augmented generation systems, **search engineers** improving information discovery, and **data scientists** working with knowledge graphs. Whether you're a complete beginner or have some experience, we'll break down thirteen powerful techniques in simple, practical terms.

#### What You'll Learn
By the end of this presentation, you'll have a comprehensive **cheat-sheet** covering thirteen distinct graph-based retrieval techniques. For each technique, we'll explore **when to use it**, **how it works**, **implementation steps**, and the **pros and cons** you need to consider. This isn't just theory; it's practical knowledge you can apply immediately.

#### Our Approach
We're keeping things **simple and visual**. No overwhelming complexity, no intimidating mathematical formulas. Just clear explanations, straightforward diagrams, and real-world guidance. Think of this as your friendly companion guide to navigating the world of graph-based retrieval.

Let's get started with an overview of all thirteen techniques!`
        },
        {
          id: 2,
          title: 'Overview: 13 Techniques at a Glance',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
                <h4>
                  Technique Categories
                  <MermaidPopover
                    title="Graph Retrieval Technique Landscape"
                    diagram={`graph TB
    A[13 Graph Retrieval<br/>Techniques] --> B[Basic Retrieval<br/>1-3]
    A --> C[Path & Community<br/>4-6]
    A --> D[Hybrid Methods<br/>7-8]
    A --> E[Advanced Techniques<br/>9-13]
    
    B --> B1[Node-Level]
    B --> B2[Edge-Weighted]
    B --> B3[Neighborhood]
    
    C --> C1[Path-Based]
    C --> C2[Community/Cluster]
    C --> C3[Hierarchical]
    
    D --> D1[Graph + Vector]
    D --> D2[Graph + BM25 👉 'bee-em-twenty-five']
    
    E --> E1[Semantic Traversal]
    E --> E2[Walk Ranking]
    E --> E3[Query Graph]
    E --> E4[Path Stitching]
    E --> E5[LLM 👉 'el-el-em' Guided]
    
    style A fill:#ffd700,color:#000
    style B fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#e1bee7,color:#000
    style E fill:#ffb74d,color:#000`}
                  />
                </h4>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPStaggerList stagger={0.08} duration={0.6}>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>1</span>
                    <strong>Node-Level Retrieval</strong> — Retrieve individual concept/entity nodes
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>2</span>
                    <strong>Edge-Weighted Retrieval</strong> — Rank nodes by relationship strength
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>3</span>
                    <strong>Neighborhood Expansion</strong> — Node plus directly connected neighbors
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>4</span>
                    <strong>Path-Based Retrieval</strong> — Sequences of connected nodes (multi-hop)
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>5</span>
                    <strong>Community/Cluster Retrieval</strong> — Densely related node groups (topics)
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>6</span>
                    <strong>Hierarchical Graph Retrieval</strong> — Parent → subtopic → leaf chunks
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>7</span>
                    <strong>Graph + Dense Vector Hybrid</strong> — Combine embeddings with connectivity
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>8</span>
                    <strong>Graph + BM25 👉 'bee-em-twenty-five' Hybrid</strong> — Validate with keyword BM25
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>9</span>
                    <strong>Semantic Graph Traversal</strong> — Follow edges via similarity thresholds
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>10</span>
                    <strong>Graph Walk-Based Ranking</strong> — PageRank/Personalized PageRank ranking
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>11</span>
                    <strong>Query Graph Construction</strong> — Build a mini-graph from the query
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>12</span>
                    <strong>Context Path Stitching</strong> — Stitch paths into coherent context
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>13</span>
                    <strong>LLM 👉 'el-el-em' Guided Graph Expansion</strong> — Adaptive traversal via LLM
                  </div>
                </GSAPStaggerList>
              </div>
            </div>
          ),
          backgroundColor: '#291e5b',
          notes: `### Overview: 13 Techniques at a Glance

Let's take a bird's eye view of all thirteen techniques we'll be covering today. This roadmap will help you understand how these techniques relate to each other and when you might choose one over another.

#### The Four Categories
The thirteen techniques naturally fall into **four categories** based on their complexity and use cases. Think of this as a progression from simple to sophisticated. First, we have **basic retrieval techniques** (techniques 1-3) that focus on finding and using individual nodes and their immediate connections. These are your starting point, the foundation upon which everything else builds.

Next come **path and community techniques** (techniques 4-6) that explore relationships beyond immediate neighbors. These let you trace connections across multiple hops and identify clusters of related information. Then we have **hybrid methods** (techniques 7-8) that combine graph structures with other retrieval approaches like vector embeddings and keyword search. Finally, the **advanced techniques** (techniques 9-13) bring in sophisticated concepts like semantic traversal, ranking algorithms, and even LLM 👉 'el-el-em' guidance.

#### Basic Building Blocks (Techniques 1-3)
Let's start with the fundamentals. **Node-Level Retrieval** is the simplest approach: find the specific nodes (entities or concepts) that match your query. Think of it like finding specific pages in a book by their titles. **Edge-Weighted Retrieval** adds sophistication by considering how **strong** the relationships are between nodes. Some connections are more important than others, right? Finally, **Neighborhood Expansion** says "don't just give me the node, give me its immediate neighbors too." It's like saying "I want to know about Paris, but also show me information about France, the Eiffel Tower, and French cuisine."

#### Path & Community Techniques (Techniques 4-6)
Moving beyond single nodes, **Path-Based Retrieval** traces sequences of connections. Imagine asking "How is vitamin D connected to bone health?" The answer might involve a path through calcium absorption and mineral metabolism. **Community/Cluster Retrieval** identifies densely connected groups of related concepts, perfect when you want everything about a topic. **Hierarchical Graph Retrieval** organizes information in parent-child relationships, moving from broad topics to specific details.

#### Hybrid & Advanced Methods (Techniques 7-13)
The remaining techniques combine graphs with other technologies or add sophisticated logic. The **hybrid methods** merge graph connectivity with vector similarity or keyword matching, giving you the best of multiple worlds. The **advanced techniques** include semantic traversal (following edges based on meaning), walk-based ranking (like Google's PageRank for your knowledge graph), query graph construction, path stitching for coherent context, and LLM-guided expansion where AI dynamically explores the graph.

#### What's Next?
We'll explore each technique in depth, covering exactly how it works, when to use it, implementation details, and the trade-offs involved. Ready to dive into technique number one?`
        }
      ]
    },
    {
      id: 'technique-1',
      title: '1. Node-Level Retrieval',
      slides: [
        {
          id: 3,
          title: '1. Node-Level Retrieval - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <h3>Definition</h3>
                <p>Precise entity/topic lookup; reduces noise and hallucination.</p>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>High precision</li>
                  <li>Simple</li>
                  <li>Fast</li>
                </ul>
              </GSAPAnimated>

              <GSAPAnimated animation="bounceIn" delay={0.5}>
                <p><strong>Best For:</strong> FAQs, glossaries, entity-centric KBs 👉 'kay-bees', short queries.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5b1e51',
          notes: `### 1. Node-Level Retrieval - Overview

Welcome to our first technique: **Node-Level Retrieval**. This is the foundational building block of graph-based retrieval, and it's beautifully simple yet incredibly powerful when used in the right situations.

#### What Is Node-Level Retrieval?
Think of your knowledge graph as a massive library where every book has a precise location and label. Node-Level Retrieval is like walking directly to the shelf and picking the exact book you need based on its title or subject label. Each **node** in your graph represents a specific entity or concept, maybe "Python Programming" or "Marie Curie" or "Machine Learning." When someone asks a question, you find the node that best matches their query and return the information attached to that node.

#### The Goal: Precision and Speed
The primary goal here is **high precision** with minimal noise. In traditional document retrieval, you might get dozens of partially relevant results that mention your topic. With node-level retrieval, you're going straight to the source. If someone asks "What is photosynthesis?" you return the node labeled "Photosynthesis" and its associated content. No ambiguity, no wading through tangentially related documents. This also dramatically **reduces hallucination** in AI systems because you're providing focused, authoritative information.

#### Benefits That Matter
First, it's **simple** to implement and understand. You're essentially doing entity linking or label matching. Second, it's **fast** because you're looking up specific nodes rather than scoring thousands of documents. Third, it delivers **high precision** which is critical for applications where accuracy matters more than broad coverage.

#### When to Use This
Node-Level Retrieval shines in specific scenarios. **FAQ systems** where users ask direct questions like "What's your return policy?" **Glossaries and dictionaries** where you want exact definitions. **Entity-centric knowledge bases** like company wikis, product catalogs, or reference databases. It works best with **short, specific queries** rather than complex, multi-part questions.

Now let's see exactly how this technique works under the hood!`
        },
        {
          id: 4,
          title: '1. Node-Level Retrieval - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3>
                    How It Works
                    <MermaidPopover
                      title="Node-Level Retrieval Flow"
                      diagram={`flowchart LR
    A["🔍 Query:<br/>Python"] --> B["📊 Match Node:<br/>Similarity Score"]
    B --> C["🎯 Node:<br/>Python Programming"]
    C --> D["📄 Return:<br/>Node Content"]
    
    style A fill:#4fc3f7,color:#000
    style B fill:#ffb74d,color:#000
    style C fill:#ffd700,color:#000
    style D fill:#81c784,color:#000`}
                    />
                  </h3>
                  <p>Map query to best-matching node via titles/aliases/embeddings; return node's attached content.</p>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3>Data Requirements</h3>
                  <p>Node metadata (title, aliases), text chunks, node embeddings, optional entity linker.</p>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.5}>
                <h3>Pattern</h3>
                <pre style={{ lineHeight: '1.5', backgroundColor: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '5px' }}>
                  {`Query: "Python"  →  Node: "Python Programming"  →  Content`}
                </pre>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5b1e51',
          notes: `### 1. Node-Level Retrieval - How It Works

Let's break down the mechanics of Node-Level Retrieval step by step. Understanding the process will help you implement this technique effectively and troubleshoot when things don't work as expected.

#### The Matching Process
Here's the core workflow: when a query comes in, you need to **find the node that best represents what the user is asking about**. This involves several matching strategies working together. First, you check for **exact title matches**. If someone asks about "Python" and you have a node titled "Python Programming," that's a strong candidate. Second, you use **aliases and synonyms**. Maybe your Python node also has aliases like "Python language" or "Python development." Third, and most powerfully, you use **embedding similarity**. You've pre-computed embeddings for each node's title and description, so you can find semantically similar nodes even when the words don't match exactly.

```mermaid
flowchart LR
    A["🔍 Query:<br/>Python"] --> B["📊 Match Node:<br/>Similarity Score"]
    B --> C["🎯 Node:<br/>Python Programming"]
    C --> D["📄 Return:<br/>Node Content"]
    
    style A fill:#4fc3f7,color:#000
    style B fill:#ffb74d,color:#000
    style C fill:#ffd700,color:#000
    style D fill:#81c784,color:#000
```

The system calculates a **combined score** from exact matching and semantic similarity, ranks all candidate nodes, and selects the top match.

#### What Data Do You Need?
To implement node-level retrieval, you need several pieces of infrastructure. Each node must have **metadata** including its title, any aliases or alternative names, and a description. You need the actual **text content** associated with each node, whether that's a definition, explanation, or related document chunks. You should have **pre-computed embeddings** for each node so you can perform fast similarity searches. Optionally, an **entity linker** or named entity recognition system can help identify entities in the query automatically.

#### The Simple Pattern
At its core, the pattern is straightforward: **Query → Match Node → Return Content**. Someone asks about concept A, you find the node representing A, you return A's information. This direct mapping is what makes the technique so fast and precise.

Now let's look at the practical implementation steps!`
        },
        {
          id: 5,
          title: '1. Node-Level Retrieval - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <h3>Implementation Steps</h3>
                <GSAPStaggerList stagger={0.15} duration={0.6}>
                  <div style={{ marginTop: '14px', marginBottom: '10px' }}>
                    <strong>1.</strong> Embed query and search node index (title+embedding)
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>2.</strong> Rank by combined exact match + embedding similarity
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>3.</strong> Return top-k nodes and their attached chunks
                  </div>
                </GSAPStaggerList>
              </GSAPAnimated>

              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <h3>Example Use Case</h3>
                <p>Looking up specific entity definitions in a glossary or knowledge base where precise matches are needed, such as retrieving the definition of "GraphRAG 👉 'graf-rag'" from a technical documentation system.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5b1e51',
          notes: `### 1. Node-Level Retrieval - Implementation

Let's get practical. How do you actually build and deploy a node-level retrieval system? We'll walk through the implementation steps and look at a real-world example.

#### Step 1: Index Your Nodes
First, you need to prepare your node index. For each node in your graph, create an **embedding** of its title and description using your chosen embedding model, maybe something like OpenAI's text-embedding-3-small or an open-source model like BGE 👉 'bee-jee-ee'. Store these embeddings in a vector database or search index alongside the node metadata. Make sure to include any **aliases** or alternative names for the node. For example, your "Machine Learning" node might have aliases like "ML 👉 'em-el'," "Statistical Learning," and "Automated Learning."

#### Step 2: Query Processing and Ranking
When a query arrives, **embed the query** using the same embedding model you used for the nodes. This consistency is critical for accurate similarity calculations. Then search your node index using a combination of strategies. Check for **exact matches** on titles and aliases, which should get the highest weight. Calculate **cosine similarity** between the query embedding and node embeddings. Combine these scores with a weighted formula, maybe 60% embedding similarity and 40% exact match bonus. **Rank** all candidate nodes by this combined score.

#### Step 3: Return Results
Select the **top k nodes**, typically the top 1-5 depending on your application. For each selected node, retrieve its **attached content chunks**. These might be definitions, explanations, related paragraphs, or linked documents. Return this content to your downstream system, whether that's an LLM 👉 'el-el-em' generating an answer or a user interface displaying results.

#### Real-World Example
Imagine you're building a technical documentation assistant. A user types "What is GraphRAG 👉 'graf-rag'?" Your system embeds this query, searches the node index, and finds the node titled "GraphRAG" with a very high similarity score. This node has attached content explaining that GraphRAG is a retrieval-augmented generation technique that uses knowledge graphs. Your system returns this precise definition, and the LLM uses it to generate a helpful, accurate response. The user gets exactly what they needed, quickly and without irrelevant information.

#### Implementation Tips
Use a **vector database** like Pinecone, Weaviate, or Chroma for efficient similarity search at scale. Implement **caching** for frequently accessed nodes to reduce latency. Consider a **fallback strategy**: if no node scores above a confidence threshold, fall back to traditional document search. **Monitor** which queries fail to match nodes well; this feedback helps you identify missing entities or poor alias coverage.

Now let's consider the trade-offs and limitations of this approach!`
        },
        {
          id: 6,
          title: '1. Node-Level Retrieval - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <h3 style={{ color: '#2ecc71' }}>✅ Benefits & Impact</h3>
                <ul style={{ marginTop: '14px', fontSize: '1.3rem' }}>
                  <li>High precision</li>
                  <li>Simple to implement</li>
                  <li>Fast query performance</li>
                </ul>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <h3 style={{ color: '#e74c3c' }}>⚠️ Limitations & Considerations</h3>
                <ul style={{ marginTop: '14px', fontSize: '1.3rem' }}>
                  <li>May miss context or relationships</li>
                  <li>Brittle for long, multi-hop queries</li>
                  <li>Requires good node coverage</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5b1e51',
          notes: `### 1. Node-Level Retrieval - Considerations

Every technique has strengths and weaknesses. Let's be honest about what Node-Level Retrieval does well and where it struggles. This understanding helps you choose the right technique for each situation.

#### Benefits: Why This Works
**High precision** is the standout benefit. When you need exact, authoritative information about a specific entity or concept, node-level retrieval delivers. There's no ambiguity, no mixing of multiple topics. You asked about Python, you got Python. This precision is particularly valuable for **reducing hallucination** in LLM 👉 'el-el-em' systems because you're providing focused, verified information rather than a mishmash of tangentially related content.

The technique is **simple to implement** compared to more complex graph traversal methods. You're essentially doing similarity search with some exact matching logic. Most developers can get a basic version working in a day or two. It's also **fast** at query time. You're looking up a small number of nodes rather than traversing large portions of the graph or scoring thousands of documents. This speed makes it suitable for real-time applications.

#### Limitations: Where It Falls Short
The biggest limitation is **missing context and relationships**. Node-level retrieval treats each node as isolated. If understanding the answer requires connecting multiple concepts or following a chain of reasoning, this technique won't help. For example, if someone asks "How does vitamin D affect bone health?" the answer might require linking vitamin D to calcium absorption to bone mineralization. A single node can't capture that relationship chain.

It's **brittle for complex queries**. When users ask long, multi-part questions or queries that require multi-hop reasoning, node-level retrieval often fails to provide complete answers. It works best for simple, entity-focused questions.

Another consideration is **node coverage**. Your system is only as good as your knowledge graph. If you don't have a node for the entity being queried, you're stuck. This means you need **comprehensive entity extraction** and graph construction upfront, which can be time-consuming for large, diverse content sets.

#### When to Move Beyond This Technique
If you find users asking questions that require understanding relationships between entities, it's time to explore **Neighborhood Expansion** or **Path-Based Retrieval**. If precision isn't your main concern but you need broader context, consider **Community Retrieval**. If you want to combine the precision of nodes with the flexibility of semantic search, look at the **Hybrid techniques** we'll cover later.

Ready to explore our next technique? Let's look at Edge-Weighted Retrieval!`
        }
      ]
    },
    {
      id: 'technique-2',
      title: '2. Edge-Weighted Retrieval',
      slides: [
        {
          id: 7,
          title: '2. Edge-Weighted Retrieval - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInRight" delay={0.1}>
                <h3>Definition</h3>
                <p>Prioritize stronger, more meaningful relationships using edge weights like citation counts, confidence scores, or co-occurrence frequencies.</p>
              </GSAPAnimated>

              <GSAPAnimated animation="bounceIn" delay={0.3}>
                <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Trust-aware ranking based on relationship strength</li>
                  <li>Interpretable results via explicit weights</li>
                  <li>Nuanced prioritization of connections</li>
                </ul>
              </GSAPAnimated>

              <GSAPAnimated animation="scaleIn" delay={0.5}>
                <p><strong>Best For:</strong> Heterogeneous graphs with rich edge metadata; citation networks, knowledge graphs with confidence scores, social graphs where trust/scoring matters.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5b1e1e',
          notes: `### 2. Edge-Weighted Retrieval - Overview

Welcome to our second technique: **Edge-Weighted Retrieval**. While node-level retrieval focuses on finding the right entities, edge-weighted retrieval adds a crucial dimension: understanding that **not all relationships are created equal**.

#### What Is Edge-Weighted Retrieval?
Imagine you're researching a scientific topic and you have a knowledge graph connecting papers, concepts, and authors. Some connections are strong—a paper cited 500 times versus one cited twice. Some relationships have high confidence—extracted with 95% certainty versus 60%. Edge-weighted retrieval uses these **relationship strengths** as signals for ranking and prioritization. It's like knowing not just who your friends are, but how close each friendship is.

#### The Core Concept: Relationship Strength Matters
In many real-world graphs, edges carry **metadata** that indicates importance, trust, frequency, or confidence. Citation counts, co-occurrence frequencies, manual annotations, confidence scores from extraction systems, temporal recency, user ratings—all of these can become edge weights. Edge-weighted retrieval leverages this metadata to make smarter decisions about which nodes to retrieve and in what order.

#### Goals: Trust and Interpretability
The primary goal is **trust-aware ranking**. Instead of treating all connected nodes equally, you prioritize based on evidence of relationship strength. This is particularly valuable when dealing with noisy or uncertain data. If your knowledge graph was automatically extracted, some edges might be confident while others are speculative guesses. Edge weights let you favor the confident connections.

Another key benefit is **interpretability**. When your system returns results ranked by edge weight, you can explain **why** a particular node was prioritized. "This paper was ranked first because it has 847 citations from related work" is much more convincing than "the algorithm scored it highly." This transparency builds user trust and helps with debugging.

#### When to Use This Technique
Edge-weighted retrieval shines in several scenarios. **Citation networks** where paper importance can be measured by citation counts or impact factors. **Knowledge graphs** built from extraction pipelines that provide confidence scores for each extracted relationship. **Social networks** where connection strength varies (close friends versus distant acquaintances). **Temporal graphs** where relationship recency matters. **Heterogeneous graphs** with multiple edge types where different relationships have different importance levels.

#### Use Cases That Benefit
Think about a **literature review assistant**. You want papers that are not just relevant but **highly cited and influential**. Edge weights representing citation counts help surface the seminal works. Or consider a **product recommendation system** where edges represent "frequently bought together." Higher co-purchase frequencies should rank products higher. In a **compliance knowledge graph**, regulatory requirements connected with high-confidence edges should be prioritized over uncertain interpretations.

Now let's see exactly how this technique works in practice!`
        },
        {
          id: 8,
          title: '2. Edge-Weighted Retrieval - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3>
                    How It Works
                    <MermaidPopover
                      title="Edge-Weighted Retrieval Process"
                      diagram={`flowchart TD
    A["🔍 Query:<br/>Machine Learning"] --> B["📊 Find Seed Node:<br/>ML 👉 'em-el' Concept"]
    B --> C["🔗 Get Connected Nodes<br/>with Edge Weights"]
    C --> D["📈 Score Neighbors:<br/>weight × relevance"]
    D --> E1["⭐ Node B<br/>weight=0.9"]
    D --> E2["🌟 Node C<br/>weight=0.7"]
    D --> E3["💫 Node D<br/>weight=0.3"]
    E1 --> F["🎯 Rank by Score<br/>Return Top-k"]
    E2 --> F
    E3 --> F
    
    style A fill:#4fc3f7,color:#000
    style B fill:#ffb74d,color:#000
    style C fill:#81c784,color:#000
    style D fill:#e1bee7,color:#000
    style E1 fill:#ffd700,color:#000
    style E2 fill:#ffeb3b,color:#000
    style E3 fill:#fff176,color:#000
    style F fill:#81c784,color:#000`}
                    />
                  </h3>
                  <p>Find seed nodes from query, then score and rank neighbors by edge weights (citations, confidence, co-occurrence). Apply decay for multi-hop traversal.</p>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3>Data Requirements</h3>
                  <p>Edge weights (numeric or categorical), edge types, normalization scheme (min-max, softmax), optional: hop decay factors, node embeddings.</p>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.5}>
                <h3>Pattern</h3>
                <pre style={{ lineHeight: '1.5', backgroundColor: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '5px' }}>
                  {`Node A -(weight 0.9)→ Node B
Node A -(weight 0.3)→ Node C
⇒ Rank B higher than C`}
                </pre>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5b1e1e',
          notes: `### 2. Edge-Weighted Retrieval - How It Works

Let's break down the mechanics of edge-weighted retrieval. Understanding each step will help you implement this technique effectively and troubleshoot edge cases.

#### The Weighted Ranking Process
The workflow starts similarly to node-level retrieval but adds sophistication through edge metadata. First, you **identify seed nodes** from the query using embedding similarity or exact matching. Let's say the query is "Machine Learning applications in healthcare." You find the seed node "Machine Learning."

Next comes the key difference: instead of treating all neighbors equally, you **retrieve connected nodes along with their edge weights**. Maybe "Neural Networks" has an edge weight of 0.9 (strong relationship), "Healthcare AI 👉 'ay-eye'" has 0.85, "Data Science" has 0.7, and "Statistics" has 0.3. These weights might represent co-occurrence frequency, confidence scores from an extraction system, or manually assigned importance.

```mermaid
flowchart TD
    A["🔍 Query:<br/>Machine Learning"] --> B["📊 Find Seed Node:<br/>ML Concept"]
    B --> C["🔗 Get Connected Nodes<br/>with Edge Weights"]
    C --> D["📈 Score Neighbors:<br/>weight × relevance"]
    D --> E1["⭐ Node B<br/>weight=0.9"]
    D --> E2["🌟 Node C<br/>weight=0.7"]
    D --> E3["💫 Node D<br/>weight=0.3"]
    E1 --> F["🎯 Rank by Score<br/>Return Top-k"]
    E2 --> F
    E3 --> F
```

#### Scoring and Ranking
Now you **compute a combined score** for each neighbor. This typically involves multiplying the edge weight by a relevance score. The relevance score might come from embedding similarity between the neighbor's content and the query. So if "Neural Networks" has edge weight 0.9 and query relevance 0.8, its combined score is 0.72. You **rank all neighbors** by this combined score and select the top k.

#### Multi-Hop Considerations
If you're traversing multiple hops, apply **decay factors**. A 2-hop neighbor shouldn't score as highly as a 1-hop neighbor with the same edge weight. Common approaches include multiplying weights along the path (0.9 × 0.8 = 0.72 for a two-edge path) or using exponential decay based on distance.

#### Edge Weight Normalization
Different edge types might use different scales. Citation counts range from 0 to thousands, confidence scores from 0 to 1. You need **normalization** to make them comparable. Common strategies include **min-max scaling** (map to 0-1 range), **softmax** (convert to probability distribution), or **z-score normalization** (standardize by mean and standard deviation). Choose based on your weight distribution and whether you want to preserve relative differences or create more uniform distributions.

#### Data Requirements in Detail
You need **edge weights** stored as numeric values or categorical labels that can be converted to scores. Store **edge types** if different relationship types should be weighted differently (e.g., "cites" vs. "mentions"). Define your **normalization scheme** consistently across all edge types. Optionally, maintain **hop decay factors** if you plan multi-hop traversal. **Node embeddings** remain useful for calculating the relevance component of your combined score.

Let's look at practical implementation steps!`
        },
        {
          id: 9,
          title: '2. Edge-Weighted Retrieval - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <h3>Implementation Steps</h3>
                <GSAPStaggerList stagger={0.15} duration={0.6}>
                  <div style={{ marginTop: '14px', marginBottom: '10px' }}>
                    <strong>1.</strong> Identify seed nodes from query (embedding match or entity linking)
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>2.</strong> Retrieve neighbors with edge weights; compute combined score = weight × relevance
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>3.</strong> Apply normalization and optional hop decay
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>4.</strong> Rank by combined score and return top-k nodes with content
                  </div>
                </GSAPStaggerList>
              </GSAPAnimated>

              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <h3>Example Use Case</h3>
                <p>Citation networks where highly-cited papers (edge weight = citation count) are prioritized, or knowledge graphs where relationship confidence scores (0.95 vs 0.60) help surface the most reliable connections for medical diagnosis systems.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5b1e1e',
          notes: `### 2. Edge-Weighted Retrieval - Implementation

Now let's get hands-on with implementing edge-weighted retrieval. We'll walk through each step with practical guidance and examples.

#### Step 1: Seed Node Identification
Start by finding your seed nodes just like in node-level retrieval. **Embed the query** using your chosen model. **Search your node index** using cosine similarity or exact matching on titles and aliases. For the query "machine learning techniques," you might identify the seed node "Machine Learning" with high confidence. Store these seed node IDs for the next step.

#### Step 2: Neighbor Retrieval with Weights
This is where edge-weighted retrieval diverges from simpler techniques. Query your graph database to **retrieve all neighbors** of the seed nodes along with their edge weights. Most graph databases support this natively—in Cypher for Neo4j 👉 'nee-oh-for-jay', you'd write something like `MATCH (seed)-[r]->(neighbor) RETURN neighbor, r.weight`. Store each neighbor with its edge weight and edge type.

Now **compute combined scores**. For each neighbor, calculate: `combined_score = edge_weight × query_relevance`. The query relevance comes from embedding similarity between the query and the neighbor's content. So if a neighbor has edge_weight=0.9 and its content embedding has 0.75 cosine similarity to the query, the combined score is 0.675.

#### Step 3: Normalization and Decay
Before ranking, **normalize edge weights** if they're on different scales. If some edges use citation counts (0-1000) and others use confidence (0-1), apply min-max scaling to bring them to a common range. For **multi-hop scenarios**, apply decay. A simple approach: multiply by 0.7 for each additional hop. So a 1-hop edge with weight 0.9 stays 0.9, but a 2-hop path with weights 0.9 and 0.8 becomes 0.9 × 0.8 × 0.7 = 0.504.

#### Step 4: Ranking and Return
**Sort all neighbors** by their combined score in descending order. Select the **top k results**, typically k=3 to 10 depending on your application. For each selected node, **retrieve its attached content**—definitions, paragraphs, document chunks—and return this to your downstream system. Include the edge weights and scores in your response for transparency and debugging.

#### Real-World Example: Academic Research Assistant
Imagine building a literature review tool. A researcher asks "What are the key papers on transformer architectures?" Your system identifies "Transformer Models" as the seed node. It retrieves connected papers with edge weights representing citation counts: "Attention Is All You Need" (weight=15,000), "BERT 👉 'bert'" (weight=12,500), "GPT 👉 'jee-pee-tee' Architecture" (weight=8,000), and several others with lower counts.

You normalize these citation counts to a 0-1 scale. You compute query relevance by comparing each paper's abstract embedding to the query. "Attention Is All You Need" scores 0.95 on relevance, giving it a combined score of 0.95 × 1.0 = 0.95. Papers are ranked by combined score, and the top 5 are returned. The researcher gets the most influential, relevant papers first—exactly what they need.

#### Implementation Tips
Use **database indexes** on edge weight fields for faster retrieval. **Cache** normalized weights if your graph structure is stable. Implement **A/B testing** to tune your combination formula and decay factors. **Log** edge weights and scores for each query to identify patterns where the ranking fails. Consider **different combination strategies**: multiplicative (weight × relevance), additive (α×weight + β×relevance), or learned weights if you have ground truth ranking data.

Now let's examine the benefits and limitations of this approach!`
        },
        {
          id: 10,
          title: '2. Edge-Weighted Retrieval - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <h3 style={{ color: '#2ecc71' }}>✅ Benefits & Impact</h3>
                <ul style={{ marginTop: '14px', fontSize: '1.3rem' }}>
                  <li>Nuanced ranking based on relationship strength</li>
                  <li>Trust-aware retrieval with interpretable scores</li>
                  <li>Better handling of noisy or uncertain edges</li>
                  <li>Transparent explanations for ranking decisions</li>
                </ul>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <h3 style={{ color: '#e74c3c' }}>⚠️ Limitations & Considerations</h3>
                <ul style={{ marginTop: '14px', fontSize: '1.3rem' }}>
                  <li>Requires high-quality edge metadata</li>
                  <li>Can bias toward popular nodes (rich-get-richer)</li>
                  <li>Needs careful normalization across edge types</li>
                  <li>Complex scoring logic increases implementation cost</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5b1e1e',
          notes: `### 2. Edge-Weighted Retrieval - Considerations

Every retrieval technique involves trade-offs. Let's discuss what edge-weighted retrieval does exceptionally well and where you need to be cautious.

#### Benefits: The Power of Weighted Relationships
**Nuanced ranking** is the headline benefit. Unlike simple node retrieval or unweighted traversal, edge-weighted retrieval understands that relationships have different strengths. This leads to **more accurate results** in domains where relationship quality varies significantly. In citation networks, highly-cited papers are prioritized. In knowledge graphs, high-confidence extractions outrank uncertain ones. In social networks, strong ties matter more than weak ones.

**Trust-aware retrieval** becomes possible. When your graph contains uncertain or noisy edges—common in automatically constructed knowledge graphs—edge weights let you favor reliable information. A medical knowledge graph might have edges extracted from peer-reviewed journals (high weight) and unverified online sources (low weight). Edge weighting ensures you surface trusted information first.

**Interpretability** is another major win. When you return results, you can **explain the ranking**: "This node ranked first because its edge weight is 0.95, indicating high confidence" or "This paper has 5,000 citations, placing it in the top 1%." This transparency builds user trust and helps with debugging. You can identify when weights aren't aligned with user expectations and adjust your weighting scheme.

The technique also **handles noise better** than unweighted approaches. In large, automatically constructed graphs, many edges might be spurious or low-quality. Edge weights let you focus on the signal and ignore the noise. This is critical for maintaining precision at scale.

#### Limitations: What to Watch For
The most significant challenge is **dependency on edge metadata quality**. Edge-weighted retrieval is only as good as your weights. If your weights are poorly calibrated, random, or systematically biased, your results will be too. This means you need **robust edge weight computation** or curation, which adds cost and complexity. For citation networks, citation counts are readily available. But for knowledge graphs, computing good confidence scores requires sophisticated extraction and validation systems.

**Popularity bias** is a real concern, sometimes called the "rich-get-richer" problem. High-weight edges often correlate with popularity. In citation networks, famous papers get more citations, which gives them higher weights, which makes them more discoverable, which leads to more citations. This creates a **feedback loop** that can overshadow newer or niche but highly relevant work. You need strategies to counteract this: temporal decay (older papers weighted down), diversity boosting (ensure variety in results), or separate tracks for emerging work.

**Normalization complexity** increases as your graph grows. With multiple edge types, varied weight scales, and heterogeneous relationships, keeping everything calibrated is challenging. You need to **monitor weight distributions** and adjust normalization schemes over time. Edge weights can drift as your graph evolves—what was a rare high-weight edge might become common, changing its relative importance.

The **implementation is more complex** than simpler techniques. You need edge weight storage, retrieval logic that includes weights, normalization pipelines, scoring functions, and potentially multi-hop decay mechanisms. This increases development time and introduces more potential failure points. Testing becomes harder because you need to validate not just whether correct nodes are retrieved but whether the **ranking** is appropriate.

#### When to Choose Edge-Weighted Retrieval
Use this technique when **relationship strength is a meaningful signal** in your domain. Citation networks, confidence-scored knowledge graphs, social networks with connection strength, temporal graphs where recency matters—all are excellent candidates. **Avoid** it when edges are homogeneous and all relationships have equal importance, or when you lack reliable edge weights.

#### When to Combine or Upgrade
Edge-weighted retrieval works well **in combination with other techniques**. You might use edge weights during **neighborhood expansion** to prioritize which neighbors to include. Or combine it with **path-based retrieval**, weighting entire paths by the minimum or average edge weight. Later, we'll see **hybrid techniques** that merge edge weights with vector similarity or keyword scores, giving you even more powerful ranking capabilities.

Ready to explore our next technique? Let's dive into Neighborhood Expansion!`
        },
      ]
    },
    {
      id: 'technique-3',
      title: '3. Neighborhood Expansion',
      slides: [
        {
          id: 11,
          title: '3. Neighborhood Expansion - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', textAlign: 'left' }}>
              <GSAPAnimated animation="bounceIn" delay={0.1}>
                <h3>Definition</h3>
                <p>Expand from a central node to include its immediate neighbors, providing richer context including definitions, examples, and related references.</p>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Simple implementation with immediate context</li>
                  <li>Contextual richness beyond isolated nodes</li>
                  <li>Low-latency 1-hop queries</li>
                </ul>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <p><strong>Best For:</strong> API documentation, ontologies, structured documents where you need local context around a concept—parameters, return types, examples, and related entities in one retrieval.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5b451e',
          notes: `### 3. Neighborhood Expansion - Overview

Welcome to **Neighborhood Expansion**, our third graph-based retrieval technique. If node-level retrieval is about precision and edge-weighted retrieval adds ranking sophistication, neighborhood expansion is about **context richness**.

#### What Is Neighborhood Expansion?
Think back to our node-level retrieval example. When someone asks "What is Python?" you return the Python node and its content. That's precise, but often **incomplete**. Users might need to know about Python's key libraries, its relationship to other programming languages, common use cases, or learning resources. Neighborhood expansion solves this by saying: "Don't just give me the node, give me **the node plus its immediate neighbors**." It's like asking for a book and getting the entire shelf section around it.

#### The 1-Hop Context Window
Neighborhood expansion typically focuses on **1-hop neighbors**—nodes directly connected to your seed node. If "Python" is connected to "NumPy 👉 'num-pie'," "Pandas," "Data Science," "Web Development," and "Django 👉 'jang-oh'," you retrieve all of them in a single query. This **1-hop context** provides a comprehensive picture without the complexity of multi-hop traversal.

#### Goals: Context Without Complexity
The primary goal is **contextual richness**. Users often need surrounding information to fully understand a concept. In API documentation, knowing about a function isn't enough—you need its parameters, return types, exceptions, and usage examples. In knowledge graphs, understanding an entity requires knowing its relationships, properties, and connected concepts. Neighborhood expansion delivers this context efficiently.

Another goal is **simplicity**. Unlike path-based retrieval or community detection, neighborhood expansion is straightforward: find a node, get its neighbors, done. This simplicity translates to **low latency**. Most graph databases can execute 1-hop queries extremely fast, making this suitable for real-time applications.

#### Benefits That Matter
**Richer responses** improve user experience significantly. Instead of multiple back-and-forth queries, users get comprehensive information upfront. In a technical support chatbot, asking about an error code might return the error definition plus common causes, solutions, and related error codes—all in one response.

**Low implementation complexity** means you can deploy this quickly. If you already have node-level retrieval working, adding neighborhood expansion is a small step. You're just extending your graph query to include adjacent nodes.

**Fast query performance** is maintained because you're limiting expansion to 1 hop. Unlike deep traversal that might explore thousands of nodes, 1-hop queries are predictable and fast, typically under 100ms even for well-connected nodes.

#### When to Use Neighborhood Expansion
This technique shines in **structured documentation systems**. API documentation where functions have parameter nodes, return type nodes, and example nodes. Product catalogs where items have category nodes, specification nodes, and related product nodes. Ontologies and taxonomies where concepts have is-a relationships, part-of relationships, and attribute nodes.

It's perfect for **exploratory queries** where users are learning about a topic and need context. Medical knowledge bases where a disease node connects to symptom nodes, treatment nodes, and related condition nodes. Educational systems where a concept connects to prerequisite concepts, example problems, and further reading.

#### Scenario: API Documentation Assistant
Imagine a developer asks "How do I use the authenticate function?" Node-level retrieval returns the function definition. Neighborhood expansion returns the definition **plus** parameter nodes (username, password, token), return type node (AuthResult), exception nodes (InvalidCredentials, NetworkError), and usage example nodes. The developer gets everything needed to use the function successfully in one query.

Now let's see exactly how this technique works!`
        },
        {
          id: 12,
          title: '3. Neighborhood Expansion - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3>
                    How It Works
                    <MermaidPopover
                      title="Neighborhood Expansion Process"
                      diagram={`flowchart TD
    A["🔍 Query:<br/>Python Function"] --> B["🎯 Seed Node:<br/>authenticate()"]
    B --> C["🔗 1-Hop Expansion"]
    C --> D1["📋 Parameters"]
    C --> D2["📤 Return Type"]
    C --> D3["⚠️ Exceptions"]
    C --> D4["📝 Examples"]
    C --> D5["🔗 Related Functions"]
    D1 --> E["📦 Aggregate Context"]
    D2 --> E
    D3 --> E
    D4 --> E
    D5 --> E
    E --> F["✅ Return Enriched Result"]
    
    style A fill:#4fc3f7,color:#000
    style B fill:#ffd700,color:#000
    style C fill:#ffb74d,color:#000
    style D1 fill:#81c784,color:#000
    style D2 fill:#81c784,color:#000
    style D3 fill:#81c784,color:#000
    style D4 fill:#81c784,color:#000
    style D5 fill:#81c784,color:#000
    style E fill:#e1bee7,color:#000
    style F fill:#4fc3f7,color:#000`}
                    />
                  </h3>
                  <p>Find seed node, expand to immediate neighbors using BFS 👉 'bee-eff-ess' or DFS 👉 'dee-eff-ess' traversal (1-hop), apply type filters and relevance filters, then aggregate and return.</p>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3>Data Requirements</h3>
                  <p>Adjacency lists for fast neighbor lookup, node and edge types for filtering, optional neighbor caps per type (e.g., max 5 examples), relevance scoring for pruning low-value neighbors.</p>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="scaleIn" delay={0.5}>
                <h3>Pattern</h3>
                <pre style={{ lineHeight: '1.5', backgroundColor: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '5px' }}>
                  {`Central Node A → Expand to {B, C, D, E}
Return A + context from neighbors`}
                </pre>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5b451e',
          notes: `### 3. Neighborhood Expansion - How It Works

Let's explore the mechanics of neighborhood expansion. Understanding the process will help you implement it effectively and optimize for your specific use cases.

#### The Expansion Process
Neighborhood expansion follows a clear workflow. First, **identify the seed node** just like in node-level retrieval. Use embedding similarity or exact matching to find the central node that best represents the query. For "Python authentication," you might find the seed node "authenticate() function."

Next comes the expansion step: **retrieve all 1-hop neighbors**. This is a standard graph traversal operation. In graph databases, it's typically a single query. In Neo4j, you might write: `MATCH (seed {id: 'authenticate'})-[r]-(neighbor) RETURN neighbor, r, labels(neighbor)`. This gives you all directly connected nodes along with their relationship types and node types.

```mermaid
flowchart TD
    A["🔍 Query:<br/>Python Function"] --> B["🎯 Seed Node:<br/>authenticate()"]
    B --> C["🔗 1-Hop Expansion"]
    C --> D1["📋 Parameters"]
    C --> D2["📤 Return Type"]
    C --> D3["⚠️ Exceptions"]
    C --> D4["📝 Examples"]
    C --> D5["🔗 Related Functions"]
    D1 --> E["📦 Aggregate Context"]
    D2 --> E
    D3 --> E
    D4 --> E
    D5 --> E
    E --> F["✅ Return Enriched Result"]
```

#### Filtering and Pruning
Raw neighbor retrieval might return too many nodes. You need **filtering strategies** to keep results manageable and relevant. **Type-based filtering** is common: if you only want parameter and return type nodes, filter by node type. **Edge-type filtering** lets you include specific relationships: "has_parameter," "returns," "throws," but exclude "mentioned_in" or "similar_to."

**Relevance filtering** prunes low-value neighbors. You might compute relevance scores based on query similarity and exclude neighbors below a threshold. If the query mentions "authentication errors," you prioritize exception nodes related to authentication over unrelated ones.

**Capacity limits** prevent overwhelming users with information. Set **caps per neighbor type**: maximum 5 parameters, 3 examples, 2 related functions. This keeps context rich but focused.

#### Traversal Strategy: BFS vs DFS
For 1-hop expansion, **BFS 👉 'bee-eff-ess'** (Breadth-First Search) and **DFS 👉 'dee-eff-ess'** (Depth-First Search) are equivalent—you're not going deep anyway. But understanding traversal matters if you extend to 1.5-hop or selective 2-hop scenarios. BFS explores all immediate neighbors before going deeper, ensuring you get comprehensive 1-hop coverage. DFS goes deep on one branch before exploring others, useful if you want to follow specific relationship chains selectively.

Most implementations use **BFS for neighborhood expansion** because it naturally aligns with the "get all immediate context" goal. You pop the seed node, expand to all neighbors, apply filters, and you're done.

#### Aggregation and Return
Once you have filtered neighbors, **aggregate their content** with the seed node. You might structure the response as: seed node content at the top, followed by grouped neighbor content (Parameters section, Return Types section, Examples section). This structured format helps downstream systems (LLMs or user interfaces) present information clearly.

**Deduplication** is important if neighbors might be reached through multiple relationship types. If a "related function" node is also returned as an "example" node, you want to include it only once.

#### Data Requirements in Detail
**Adjacency lists** or efficient neighbor lookup structures are essential. Graph databases provide this natively. If using a different storage system, precompute and index adjacency for fast retrieval. **Node types and edge types** should be stored as metadata on every node and relationship, enabling type-based filtering. **Neighbor caps** can be configuration values or learned from user behavior. **Relevance scoring infrastructure** (embedding similarities, weights) helps prioritize which neighbors to include when you hit capacity limits.

Let's look at implementation steps and real-world examples!`
        },
        {
          id: 13,
          title: '3. Neighborhood Expansion - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', textAlign: 'left' }}>
              <GSAPAnimated animation="bounceIn" delay={0.1}>
                <h3>Implementation Steps</h3>
                <GSAPStaggerList stagger={0.15} duration={0.6}>
                  <div style={{ marginTop: '14px', marginBottom: '10px' }}>
                    <strong>1.</strong> Find top seed node(s) via embedding or entity matching
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>2.</strong> Execute 1-hop graph query with edge/node type filters
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>3.</strong> Apply relevance filtering and per-type capacity caps (e.g., max 5 examples)
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>4.</strong> Deduplicate neighbors and aggregate with seed content
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>5.</strong> Structure and return enriched context
                  </div>
                </GSAPStaggerList>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.6}>
                <h3>Example Use Case</h3>
                <p>API documentation system where retrieving the "authenticate()" function node automatically expands to include parameter nodes (username, password, token), return type node (AuthResult), exception nodes (InvalidCredentials, NetworkError), and usage example nodes—providing complete context in a single retrieval operation.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5b451e',
          notes: `### 3. Neighborhood Expansion - Implementation

Time to get practical. Let's walk through implementing neighborhood expansion with concrete steps, code patterns, and real-world examples.

#### Step 1: Seed Node Discovery
Start with your standard seed node identification. **Embed the query** and **search your node index** for the best matching node. For a query like "Python logging configuration," you might find the seed node "logging.config" with high similarity. Store the seed node ID and its content for later aggregation.

#### Step 2: 1-Hop Neighbor Retrieval
Execute your **graph traversal query**. The exact syntax depends on your graph database. In **Neo4j**, you'd write: `MATCH (seed {id: $seedId})-[r]-(neighbor) WHERE type(r) IN $allowedRelationships RETURN neighbor, type(r), labels(neighbor)`. This retrieves all neighbors connected via specified relationship types.

In **property graph databases**, you can filter directly in the query. In **RDF 👉 'are-dee-eff' triple stores**, you'd query for all triples where the seed is subject or object. In **Python with NetworkX 👉 'network-ex'**, you'd use `G.neighbors(seed_node)`. Retrieve not just node IDs but also **node content, types, and relationship metadata**.

#### Step 3: Filtering and Capacity Management
Now apply your filters. **Type filtering** first: if you only want certain node types (Parameter, ReturnType, Example), filter the neighbor list. **Edge-type filtering**: include "has_parameter" and "returns" relationships but exclude "mentioned_in." Compute **relevance scores** for each neighbor by comparing its content embedding to the query. Sort neighbors by relevance within each type category.

Apply **capacity caps** per type. If you have 20 example nodes but only want the top 5, select the 5 with highest relevance scores. This keeps your context window manageable. Typical caps: 5-10 for list-type neighbors (parameters, examples), 1-3 for singular relationships (return type, parent category).

#### Step 4: Deduplication
Check for **duplicate neighbors** that might appear through multiple relationship paths. Use node IDs to identify duplicates. When duplicates occur, either keep the one with the highest relevance score or merge their relationship information (e.g., "connected via has_parameter AND appears_in_example").

#### Step 5: Aggregation and Structuring
**Aggregate** the seed node content with neighbor content. A good structure: 
```
{
  "seed": {seed_node_content},
  "parameters": [param_node_1, param_node_2, ...],
  "return_type": return_node,
  "exceptions": [exception_node_1, exception_node_2],
  "examples": [example_node_1, example_node_2, ...],
  "related": [related_node_1, related_node_2]
}
```

This structured format makes it easy for downstream systems to use the context appropriately. An LLM can prioritize the seed content and reference neighbor content as supporting detail. A UI can display sections clearly.

#### Real-World Example: Medical Knowledge Base
Imagine a medical assistant system. A doctor asks "What are the treatments for Type 2 Diabetes?" Your system identifies "Type 2 Diabetes" as the seed node. Neighborhood expansion retrieves:
- **Treatment nodes**: Metformin, Insulin therapy, Lifestyle modification
- **Symptom nodes**: Increased thirst, Frequent urination, Fatigue
- **Related condition nodes**: Prediabetes, Type 1 Diabetes, Metabolic Syndrome
- **Risk factor nodes**: Obesity, Sedentary lifestyle, Family history
- **Diagnostic criteria nodes**: HbA1c 👉 'H-b-A-one-C' levels, Fasting glucose

The doctor receives comprehensive context: the condition definition plus all immediately relevant clinical information. They can make informed decisions without multiple queries.

#### Implementation Tips and Optimizations
**Precompute adjacency lists** for frequently accessed nodes. If certain nodes (popular API functions, common medical conditions) are queried often, cache their 1-hop neighborhoods. **Use database indexes** on node types and edge types for fast filtering. Implement **query batching**: if you have multiple seed nodes, retrieve all their neighborhoods in a single database query. **Monitor expansion sizes**: if some nodes have hundreds of neighbors, consider tighter capacity caps or smarter filtering. **A/B test** different capacity limits to find the sweet spot between comprehensive context and information overload.

Now let's consider the benefits and limitations!`
        },
        {
          id: 14,
          title: '3. Neighborhood Expansion - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <h3 style={{ color: '#2ecc71' }}>✅ Benefits & Impact</h3>
                <ul style={{ marginTop: '14px', fontSize: '1.3rem' }}>
                  <li>Rich contextual information in single retrieval</li>
                  <li>Simple implementation with low complexity</li>
                  <li>Fast, low-latency 1-hop queries</li>
                  <li>Better user experience with comprehensive answers</li>
                </ul>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInBottom" delay={0.4}>
                <h3 style={{ color: '#e74c3c' }}>⚠️ Limitations & Considerations</h3>
                <ul style={{ marginTop: '14px', fontSize: '1.3rem' }}>
                  <li>Can introduce noise from irrelevant neighbors</li>
                  <li>Misses longer reasoning chains beyond 1-hop</li>
                  <li>Requires careful filtering to manage context size</li>
                  <li>May retrieve too much or too little context</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5b451e',
          notes: `### 3. Neighborhood Expansion - Considerations

Let's discuss the strengths and weaknesses of neighborhood expansion. Understanding these trade-offs helps you decide when this technique is the right choice and when you need something more sophisticated.

#### Benefits: Context-Rich Retrieval Made Simple
**Rich contextual information** is the standout benefit. Users get comprehensive answers in a **single retrieval operation** instead of requiring multiple back-and-forth queries. This dramatically improves user experience. In technical documentation, developers get functions with their parameters, return types, exceptions, and examples all at once. In knowledge bases, users get entities with their properties, relationships, and related concepts immediately.

**Implementation simplicity** makes this technique accessible. If you have node-level retrieval working, adding neighborhood expansion is straightforward—you're just extending the graph query by one hop. No complex algorithms, no sophisticated ranking models, no multi-hop path finding. Just: find seed, get neighbors, filter, return. This simplicity means **faster development** and **easier debugging**.

**Query performance** remains excellent because you're limited to 1-hop traversal. Even nodes with dozens of neighbors can be retrieved in **milliseconds** with proper database indexing. Compare this to multi-hop traversal that might explore thousands of nodes—1-hop expansion is predictable and fast, making it suitable for **real-time applications** like chatbots and interactive search.

**Better answers** result from the contextual richness. LLMs can generate more accurate, complete responses when given surrounding context. Instead of answering based solely on a node definition, they can reference examples, explain parameters, mention related concepts, and provide nuanced explanations. This reduces hallucination and improves answer quality.

#### Limitations: When Context Becomes Clutter
The biggest challenge is **noise from irrelevant neighbors**. Not all neighbors are equally valuable for every query. A function might be connected to dozens of related functions, but only a few are relevant to the user's specific question. Without careful filtering, you might overwhelm users (and LLM context windows) with marginally useful information. **Filtering strategies are critical** but can be tricky to get right. Too aggressive, and you miss important context. Too lenient, and you introduce noise.

**Missing longer reasoning chains** is an inherent limitation of 1-hop expansion. If understanding requires connecting multiple concepts across 2-3 hops, neighborhood expansion won't capture it. For example, "How does vitamin D affect bone health?" might require: vitamin D → calcium absorption → bone mineralization → bone density. A 1-hop expansion from "vitamin D" won't reach "bone density." You'd need **path-based retrieval** or **multi-hop traversal** for that.

**Context size management** becomes tricky for highly connected nodes. Popular entities might have hundreds of neighbors. Even with capacity caps, deciding which neighbors to include is challenging. Do you prioritize by relevance? By neighbor type? By edge weight? Each strategy has trade-offs. **Popular nodes** (hub nodes in your graph) require more aggressive filtering than sparse nodes.

**Balancing comprehensiveness and focus** is an ongoing challenge. Users want enough context to understand fully but not so much that they're overwhelmed. This balance varies by domain, query type, and user expertise. A domain expert might want minimal context, while a novice needs extensive explanation. **Personalization** can help but adds complexity.

#### When Neighborhood Expansion Shines
Use this technique when **local context is sufficient** to answer queries. API documentation, product specifications, concept definitions with related terms, entity profiles with immediate properties and relationships—all are excellent use cases. It works best when your **graph structure is well-designed** with meaningful relationship types and appropriate granularity.

#### When to Move Beyond This Technique
If users ask questions requiring **multi-hop reasoning** ("What's the connection between X and Y?"), you need **path-based retrieval**. If queries are broad and exploratory ("Tell me everything about machine learning"), consider **community/cluster retrieval**. If you need to rank neighbors by importance beyond simple relevance, combine with **edge-weighted retrieval**. If you need to handle both graph structure and semantic similarity, look at the **hybrid techniques** coming later.

#### Combining Techniques
Neighborhood expansion works well **in combination with other techniques**. Use **edge-weighted retrieval** to rank neighbors by importance. Apply **semantic filtering** to ensure neighbors are query-relevant. Extend selectively to **1.5-hop** for specific relationship types (e.g., always include examples of examples). Combine with **path-based retrieval** for queries that need both local context and reasoning chains.

Ready for our next technique? Let's explore Path-Based Retrieval and multi-hop reasoning!`
        },
      ]
    },
    {
      id: 'technique-4',
      title: '4. Path-Based Retrieval',
      slides: [
        {
          id: 15,
          title: '4. Path-Based Retrieval - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <h3>Definition</h3>
                <p>Multi-hop reasoning through sequences of connected nodes, enabling discovery of relationships and evidence chains across multiple steps in the graph.</p>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInTop" delay={0.3}>
                <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Supports complex reasoning and inference chains</li>
                  <li>Provides traceable evidence paths</li>
                  <li>Discovers indirect connections between concepts</li>
                </ul>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.5}>
                <p><strong>Best For:</strong> Why/how questions, causal chains, compliance dependencies, research queries requiring multi-step reasoning like "How does X influence Y?" or "What's the regulatory path from A to D?"</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#555b1e',
          notes: `### 4. Path-Based Retrieval - Overview

Welcome to **Path-Based Retrieval**, our fourth technique and the first that truly embraces **multi-hop reasoning**. While previous techniques focused on individual nodes or immediate neighbors, path-based retrieval explores how concepts connect across multiple steps.

#### What Is Path-Based Retrieval?
Imagine someone asks "How does vitamin D affect bone health?" The answer isn't a direct connection—it's a **chain of relationships**: vitamin D → enhances calcium absorption → calcium → strengthens bone mineralization → bone mineralization → increases bone density → bone density → improves bone health. That's a **4-hop path** connecting the query concepts. Path-based retrieval finds and returns these meaningful sequences of connections, enabling your system to explain **how** and **why** things are related.

#### The Power of Multi-Hop Reasoning
Many real-world questions require understanding **indirect relationships**. In knowledge graphs, two concepts might not be directly connected, but there's a meaningful path between them. Path-based retrieval discovers these paths, turning implicit knowledge into explicit reasoning chains. It's like asking "How am I connected to this person?" on LinkedIn 👉 'linked-in' and finding "You → colleague → college friend → this person."

#### Goals: Reasoning and Evidence
The primary goal is **supporting complex reasoning**. Questions like "Why does this regulation require that practice?" or "What's the connection between these two research findings?" or "How does this component affect system performance?" all benefit from path-based retrieval. The paths themselves become **reasoning chains** that LLMs can verbalize into coherent explanations.

Another critical goal is **traceable evidence**. When your system claims "A affects B," path-based retrieval provides the **evidence chain**: "A influences C, which regulates D, which determines B." This traceability is essential for high-stakes domains like healthcare, legal compliance, and scientific research. Users can verify the reasoning, understand the logic, and trust the conclusions.

#### Benefits That Matter
**Explainable reasoning** becomes possible. Instead of black-box predictions, you have **interpretable paths** showing exactly how conclusions were reached. In medical diagnosis, a path from symptoms through physiological mechanisms to conditions provides doctors with reasoning they can verify against their expertise.

**Discovery of indirect connections** expands what your system can answer. Many interesting insights exist in indirect relationships. Path-based retrieval surfaces these connections automatically, enabling discovery that wouldn't be possible with single-node or neighborhood-only approaches.

**Rich context for LLMs** improves answer quality. When you provide paths rather than isolated nodes, LLMs can generate responses that explain relationships, describe processes, and connect concepts coherently. "A leads to B because C happens, which triggers D" is much better than "A and B are related."

#### When to Use Path-Based Retrieval
This technique shines for **explanatory queries** that ask "why," "how," or "what's the connection." It's perfect for **causal reasoning**: understanding cause-and-effect chains in scientific domains, medical diagnosis, system troubleshooting. **Compliance and regulatory domains** where requirements reference other requirements in complex dependency chains. **Research and discovery** where finding connections between disparate concepts leads to insights.

#### Use Cases That Benefit
**Medical knowledge bases**: "Why does this medication help with that condition?" The path traces: medication → inhibits enzyme X → reduces inflammation → alleviates symptoms of condition.

**Regulatory compliance**: "What regulations require this security control?" The path shows: Control → mandated by Standard A → referenced in Regulation B → required for Industry C.

**Scientific literature**: "How are these two research areas connected?" The path reveals: Topic A → influenced by Paper X → cites Study Y → foundational to Topic B.

**Troubleshooting systems**: "Why is this component failing?" The path explains: Component → depends on Service → requires Configuration → broken by recent Update.

Now let's see exactly how path-based retrieval works!`
        },
        {
          id: 16,
          title: '4. Path-Based Retrieval - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInRight" delay={0.1}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3>
                    How It Works
                    <MermaidPopover
                      title="Path-Based Retrieval Process"
                      diagram={`flowchart LR
    A["🔍 Query:<br/>Vitamin D → Bone Health"] --> B["🎯 Find Endpoints:<br/>Start & Target Nodes"]
    B --> C["🛤️ Pathfinding:<br/>BFS 👉 'bee-eff-ess'/Dijkstra"]
    C --> D1["Path 1:<br/>A→B→C→D"]
    C --> D2["Path 2:<br/>A→E→F→D"]
    C --> D3["Path 3:<br/>A→G→D"]
    D1 --> E["📊 Score Paths:<br/>length + weights + semantics"]
    D2 --> E
    D3 --> E
    E --> F["🏆 Rank Paths"]
    F --> G["✅ Return Best Paths<br/>with Evidence"]
    
    style A fill:#4fc3f7,color:#000
    style B fill:#ffb74d,color:#000
    style C fill:#81c784,color:#000
    style D1 fill:#e1bee7,color:#000
    style D2 fill:#e1bee7,color:#000
    style D3 fill:#e1bee7,color:#000
    style E fill:#fff176,color:#000
    style F fill:#ffd700,color:#000
    style G fill:#81c784,color:#000`}
                    />
                  </h3>
                  <p>Identify start and target nodes from query, use pathfinding algorithms (BFS, Dijkstra, A-star) to enumerate candidate paths up to max hops, score paths by length, edge weights, and semantic relevance.</p>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="bounceIn" delay={0.3}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3>Data Requirements</h3>
                  <p>Edge types and weights, path constraints (max length, allowed edge types), path scoring function (balancing length vs. weight vs. semantics), efficient graph traversal indexes.</p>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.5}>
                <h3>Pattern</h3>
                <pre style={{ lineHeight: '1.5', backgroundColor: 'rgba(0,0,0,0.3)', padding: '10px', borderRadius: '5px' }}>
                  {`Node A → Node B → Node C → Node D
Multi-hop reasoning chain`}
                </pre>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#555b1e',
          notes: `### 4. Path-Based Retrieval - How It Works

Let's dive into the mechanics of path-based retrieval. This is more complex than previous techniques, but understanding the process will help you implement it effectively.

#### The Path Discovery Process
Path-based retrieval starts by **identifying endpoints**. Unlike node-level retrieval where you find a single node, here you need to identify **source and target concepts** from the query. For "How does vitamin D affect bone health?" you extract two endpoints: "vitamin D" (source) and "bone health" (target). You find the nodes in your graph that best represent these concepts using embedding similarity or entity linking.

Next comes **pathfinding**—discovering sequences of edges that connect source to target. This is classic graph traversal. Common algorithms include **BFS 👉 'bee-eff-ess'** (Breadth-First Search) which explores all paths systematically, **Dijkstra's algorithm** which finds shortest weighted paths, or **A-star** which uses heuristics to guide search efficiently.

```mermaid
flowchart LR
    A["🔍 Query:<br/>Vitamin D → Bone Health"] --> B["🎯 Find Endpoints:<br/>Start & Target Nodes"]
    B --> C["🛤️ Pathfinding:<br/>BFS/Dijkstra"]
    C --> D1["Path 1:<br/>A→B→C→D"]
    C --> D2["Path 2:<br/>A→E→F→D"]
    C --> D3["Path 3:<br/>A→G→D"]
    D1 --> E["📊 Score Paths:<br/>length + weights + semantics"]
    D2 --> E
    D3 --> E
    E --> F["🏆 Rank Paths"]
    F --> G["✅ Return Best Paths<br/>with Evidence"]
```

#### Path Constraints and Pruning
Without constraints, pathfinding can explode combinatorially. A node with 10 neighbors at each hop means 10^3 = 1,000 possible 3-hop paths. You need **constraints** to keep search tractable. **Maximum path length** (e.g., max 4 hops) limits how far you explore. **Edge type constraints** specify which relationship types are allowed; in a medical graph, you might allow "treats," "causes," "prevents" but exclude "mentioned_in." **Semantic constraints** use embedding similarity to prune paths where intermediate nodes are semantically unrelated to the query.

**Early stopping** helps performance. If you've found 10 high-quality paths, stop searching. If current paths are much lower quality than the best path found, abandon that search branch.

#### Path Scoring and Ranking
Once you have candidate paths, **score them** to identify the best ones. Scoring typically combines multiple factors. **Path length**: shorter paths are often better (fewer inference steps), but not always—sometimes a longer path is more informative. **Edge weights**: if your edges have weights (confidence, strength), sum or multiply along the path. **Semantic relevance**: compute how well each intermediate node relates to the query. **Path coherence**: do the relationships form a logical chain?

A common scoring formula: `score = α×(1/length) + β×(avg_edge_weight) + γ×(semantic_relevance)` where α, β, γ are weights you tune. Higher scores indicate better paths. **Rank all candidate paths** by score and select the top k, typically k=1-5.

#### Data Requirements in Detail
You need **edge types** stored on every relationship, enabling type-based path constraints. **Edge weights** (if available) inform path scoring. Define **path constraints** as configuration: maximum length (3-5 hops common), allowed/forbidden edge types, minimum edge weight thresholds. Implement an **efficient scoring function** that balances the factors mentioned above. Maintain **graph indexes** that accelerate traversal; most graph databases provide this, but for large-scale systems, consider specialized path-finding indexes or bidirectional search.

#### Pathfinding Algorithms Deep Dive
**BFS** explores all paths of length 1, then length 2, then length 3, etc. It's exhaustive and guarantees finding all paths up to your length limit, but can be slow for large graphs. **Dijkstra's algorithm** finds the shortest weighted path efficiently by exploring paths in order of increasing weight. It's faster than BFS but only returns one path. **A-star** adds a heuristic (e.g., embedding similarity to target) to guide search toward promising paths, dramatically reducing exploration for large graphs. **Bidirectional search** starts from both source and target, meeting in the middle, cutting search space significantly.

Choose based on your needs: BFS for comprehensive path discovery, Dijkstra for single best path, A-star for large graphs, bidirectional for performance.

Let's look at implementation steps!`
        },
        {
          id: 17,
          title: '4. Path-Based Retrieval - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <h3>Implementation Steps</h3>
                <GSAPStaggerList stagger={0.15} duration={0.6}>
                  <div style={{ marginTop: '14px', marginBottom: '10px' }}>
                    <strong>1.</strong> Extract source and target concepts from query (entity linking or embedding)
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>2.</strong> Find corresponding seed nodes in graph for each concept
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>3.</strong> Run pathfinding algorithm (BFS 👉 'bee-eff-ess', Dijkstra, A-star) with constraints (max L hops, edge types)
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>4.</strong> Score candidate paths: length + edge weights + semantic relevance
                  </div>
                  <div style={{ marginBottom: '10px' }}>
                    <strong>5.</strong> Rank paths and return best k paths with node content and relationship types
                  </div>
                </GSAPStaggerList>
              </GSAPAnimated>

              <GSAPAnimated animation="scaleIn" delay={0.6}>
                <h3>Example Use Case</h3>
                <p>Regulatory compliance questions: "What regulations require SSL 👉 'es-es-el' encryption?" Path traces: SSL Encryption → mandated by PCI 👉 'pee-see-eye' DSS 👉 'dee-es-es' Standard → referenced in Federal Regulation → required for Healthcare. The complete path provides the evidence chain for compliance officers.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#555b1e',
          notes: `### 4. Path-Based Retrieval - Implementation

Time to implement path-based retrieval. We'll walk through practical steps, code patterns, and real-world examples to help you build this powerful technique.

#### Step 1: Concept Extraction
Start by **analyzing the query** to identify source and target concepts. For "How does vitamin D affect bone health?" you need to extract "vitamin D" and "bone health" as key concepts. Use **named entity recognition** or **embedding-based span extraction** to identify these phrases. Alternatively, for simpler queries, use keyword extraction or dependency parsing to find the main concepts.

#### Step 2: Node Mapping
Map extracted concepts to **nodes in your graph**. For each concept, query your node index to find the best matching node. Use embedding similarity: embed "vitamin D" and find the node with the highest cosine similarity, likely "Vitamin D" or "Cholecalciferol." Do the same for "bone health," mapping to a node like "Bone Health" or "Skeletal Health." If multiple nodes match well (e.g., "vitamin D2" and "vitamin D3"), consider each as a potential source and explore paths from all of them.

#### Step 3: Pathfinding Execution
Now run your **pathfinding algorithm**. Let's say you choose **BFS** for comprehensive path discovery up to 4 hops. Initialize a queue with the source node and a path object tracking visited nodes. For each node, expand to neighbors, checking your **constraints**: is the path length under the limit? Is the edge type allowed? Is the intermediate node semantically relevant enough? If a neighbor is the target node, you've found a complete path—add it to your results. Continue until you've explored all possibilities within constraints or hit a maximum number of paths.

**Example BFS pseudocode**:
```
queue = [(source_node, [source_node])]
found_paths = []
while queue and len(found_paths) < max_paths:
    current_node, path = queue.pop(0)
    if len(path) >= max_length:
        continue
    for neighbor, edge in current_node.neighbors:
        if edge.type not in allowed_edge_types:
            continue
        new_path = path + [neighbor]
        if neighbor == target_node:
            found_paths.append(new_path)
        else:
            queue.append((neighbor, new_path))
return found_paths
```

For **weighted paths**, use **Dijkstra's algorithm** to find the highest-weighted (or lowest-cost) path. For **large graphs**, use **A-star** with a heuristic like embedding similarity to the target, dramatically reducing nodes explored.

#### Step 4: Path Scoring
For each discovered path, **compute a score**. Combine multiple factors with learned or tuned weights. Here's a common approach:

**Length score**: `1 / path_length` (shorter is better, usually)
**Weight score**: `average_edge_weight` or `min_edge_weight` along the path
**Semantic score**: Average similarity between each intermediate node's embedding and the query embedding

**Combined score**: `score = 0.3×length_score + 0.4×weight_score + 0.3×semantic_score`

Tune these weights based on your domain. In some cases, longer paths are more informative (comprehensive explanations). In others, shorter paths are better (direct evidence).

#### Step 5: Ranking and Return
**Sort paths** by score in descending order. Select the **top k paths**, typically k=1-5. For each path, retrieve **node content** for every node along the path and **relationship types** for every edge. Structure the output to show the path clearly:

```
Path 1 (score: 0.87):
  Vitamin D -[enhances]→ Calcium Absorption -[increases]→ Bone Mineralization -[improves]→ Bone Health
  
  Details:
  - Vitamin D: [content]
  - Calcium Absorption: [content]
  - Bone Mineralization: [content]
  - Bone Health: [content]
```

This structured format helps LLMs generate clear explanations: "Vitamin D enhances calcium absorption, which increases bone mineralization, ultimately improving bone health."

#### Real-World Example: Compliance Knowledge Graph
Imagine a compliance system. A legal team asks: "Why do we need multi-factor authentication?" Your system extracts "multi-factor authentication" (source) and "requirement" (target). Pathfinding discovers several paths:

**Path 1** (score 0.91):
Multi-Factor Authentication → mandated by → NIST 👉 'nist' SP 800-63B → referenced by → SOC 2 Type II → required for → Enterprise Customers

**Path 2** (score 0.85):
Multi-Factor Authentication → required by → PCI DSS 3.2.1 → applies to → Payment Processing → necessary for → E-commerce Platform

**Path 3** (score 0.78):
Multi-Factor Authentication → recommended by → OWASP 👉 'oh-wasp' Guidelines → adopted in → Security Policy → enforced for → All Systems

The system returns these ranked paths. An LLM generates: "Multi-factor authentication is required for multiple reasons. Primarily, it's mandated by NIST SP 800-63B, which is referenced by SOC 2 Type II compliance necessary for enterprise customers. Additionally, PCI DSS 3.2.1 requires it for payment processing, critical for our e-commerce platform."

The compliance team now has **traceable evidence** with specific standard references and clear reasoning chains.

#### Implementation Tips
**Cache frequent paths** between common concept pairs. **Precompute paths** for anticipated queries if your graph is relatively static. **Implement timeout mechanisms** to prevent pathfinding from running too long on complex queries. **Log path quality metrics** to tune your scoring function. Use **graph database native pathfinding** (Neo4j's shortestPath, Dijkstra implementations) when possible—they're highly optimized. For very large graphs, consider **approximate pathfinding** or **landmark-based methods** that trade some accuracy for significant speed improvements.

Now let's examine the benefits and limitations!`
        },
        {
          id: 18,
          title: '4. Path-Based Retrieval - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', textAlign: 'left' }}>
              <GSAPAnimated animation="bounceIn" delay={0.1}>
                <h3 style={{ color: '#2ecc71' }}>✅ Benefits & Impact</h3>
                <ul style={{ marginTop: '14px', fontSize: '1.3rem' }}>
                  <li>Enables multi-hop reasoning and inference</li>
                  <li>Provides traceable evidence chains</li>
                  <li>Discovers indirect connections and insights</li>
                  <li>Supports explainable AI with clear reasoning paths</li>
                </ul>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInTop" delay={0.4}>
                <h3 style={{ color: '#e74c3c' }}>⚠️ Limitations & Considerations</h3>
                <ul style={{ marginTop: '14px', fontSize: '1.3rem' }}>
                  <li>Computationally expensive for large graphs</li>
                  <li>Path explosion without proper constraints</li>
                  <li>Requires careful scoring to rank paths meaningfully</li>
                  <li>May surface spurious or irrelevant paths</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#555b1e',
          notes: `### 4. Path-Based Retrieval - Considerations

Path-based retrieval is powerful but comes with significant trade-offs. Let's honestly assess its strengths and weaknesses so you can make informed decisions about when to use this technique.

#### Benefits: The Power of Multi-Hop Reasoning
**Multi-hop reasoning** is the transformative benefit. Questions that previous techniques couldn't answer become possible. "How does X influence Y?" "What's the connection between A and B?" "Why does this regulation require that control?" Path-based retrieval finds the **chains of inference** needed to answer these questions. This unlocks entirely new use cases—causal reasoning, indirect relationship discovery, complex explanatory queries.

**Traceable evidence chains** provide transparency and trust. In high-stakes domains, being able to show **exactly how** a conclusion was reached is critical. Medical professionals can verify reasoning paths against their knowledge. Compliance officers can cite specific regulatory chains. Researchers can validate connections with references at each step. This **explainability** is increasingly important as AI systems are deployed in sensitive areas.

**Discovery of indirect connections** enables insights that wouldn't emerge from direct queries. Researchers might discover unexpected connections between fields. Analysts might find hidden dependencies in complex systems. Recommendation systems might suggest non-obvious but valuable products or content. Path-based retrieval **surfaces these hidden relationships** automatically.

**Better LLM prompts** result from providing reasoning chains. Instead of isolated facts, you give the LLM a **narrative structure**: "A leads to B, which causes C, resulting in D." This structured context helps LLMs generate more coherent, accurate, and convincing explanations. Answer quality improves significantly for complex queries.

#### Limitations: Computational Cost and Complexity
**Computational expense** is the biggest challenge. Pathfinding in large graphs is **inherently expensive**. A node with 20 neighbors, explored to 3 hops, means potentially 20^3 = 8,000 paths to consider. Even with constraints and pruning, you might evaluate hundreds or thousands of paths per query. This translates to **higher latency** (seconds instead of milliseconds) and **greater computational cost** than simpler techniques.

**Path explosion** happens quickly without careful constraints. In dense graphs, the number of possible paths grows exponentially with path length. You **must** implement aggressive constraints: maximum path length (typically 3-4 hops), edge type restrictions, semantic filtering, early stopping. Even then, some queries might trigger massive path exploration. You need **timeout mechanisms** and **fallback strategies** for when pathfinding takes too long.

**Scoring complexity** increases dramatically. With multiple paths, how do you rank them? Length matters, but so do edge weights, semantic relevance, path coherence, and domain-specific factors. The **scoring function** often requires significant tuning and domain expertise. What works for citation networks doesn't work for medical knowledge graphs or compliance systems. Expect to **iterate and refine** your scoring approach based on user feedback and evaluation metrics.

**Spurious paths** are a real problem. Not every path that exists in your graph is meaningful. Some paths might be technically valid but semantically nonsensical: A mentions B, B mentioned in C, C tangentially related to D. Without good **path quality filtering**, you'll surface noise alongside signal. This requires **semantic validation** at each hop and **coherence checking** across the entire path.

#### Performance Considerations
**Query latency** can be problematic for real-time applications. If users expect sub-second responses, path-based retrieval might not meet that expectation, especially for complex queries. Consider **asynchronous processing** where you return quick preliminary results and then enrich with paths. Or use **path caching** for common query patterns, precomputing paths between frequently queried concept pairs.

**Scalability** becomes challenging with graph size. A graph with millions of nodes and edges can make pathfinding prohibitively slow. You need **optimizations**: bidirectional search (start from both ends), A-star with good heuristics, path indexes for common patterns, or graph partitioning to reduce search space. For very large graphs, consider **approximate pathfinding** that trades completeness for speed.

#### When to Use Path-Based Retrieval
Use this technique when **reasoning chains matter**. Explanatory queries (why, how), causal inference, regulatory/compliance traceability, research connection discovery, troubleshooting and root cause analysis—all benefit enormously. Use it when **query frequency is moderate** and you can accept higher latency. Use it when your **graph is well-structured** with meaningful edge types and not too dense.

#### When to Avoid or Modify
**Avoid** path-based retrieval for simple lookup queries where node-level retrieval suffices. Avoid it for **real-time, high-frequency** applications unless you have aggressive caching and optimization. Avoid it for **extremely large, dense graphs** without significant infrastructure investment in optimization. **Modify** the approach by limiting path length aggressively (2-3 hops max), using approximate pathfinding, or precomputing paths for common query patterns.

#### Combining with Other Techniques
Path-based retrieval **complements** other techniques beautifully. Use it alongside **node-level retrieval**: return the direct node plus reasoning paths to related concepts. Combine with **neighborhood expansion**: for each node in the path, include its immediate context. Apply **edge-weighted retrieval** within pathfinding to prioritize high-weight edges. Use it selectively: detect when a query needs reasoning (presence of "why," "how," causal keywords) and only then invoke path-based retrieval, falling back to faster techniques otherwise.

#### The Bottom Line
Path-based retrieval is a **powerful but expensive** technique. It enables capabilities impossible with simpler methods but requires careful implementation, optimization, and constraint management. Use it strategically for queries that truly benefit from multi-hop reasoning, and combine it with faster techniques for comprehensive coverage.

Ready to continue? We've covered four foundational techniques. The remaining nine build on these foundations with increasing sophistication!`
        },
      ]
    },
    {
      id: 'technique-5',
      title: '5. Community / Cluster Retrieval',
      slides: [
        {
          id: 19,
          title: '5. Community / Cluster Retrieval - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Thematic coverage and diversity within a topic.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Broad coverage</li>
                <li>Reduces narrow bias</li>
              </ul>

              <p>Broad queries, topic exploration, overviews.</p>
            </div>
          ),
          backgroundColor: '#335b1e',
          notes: ''
        },
        {
          id: 20,
          title: '5. Community / Cluster Retrieval - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Detect communities (Louvain/Leiden/semantic clusters) and retrieve top nodes from a cluster.</p>

              <h3>Data Requirements</h3>
              <p>Cluster labels, membership scores, intra-cluster rankings.</p>

              <h3>Pattern</h3>
              <pre style={{ lineHeight: '1.5' }}>
                {`Cluster X contains {A, B, C} ⇒ return all three.`}
              </pre>
            </div>
          ),
          backgroundColor: '#335b1e',
          notes: ''
        },
        {
          id: 21,
          title: '5. Community / Cluster Retrieval - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Implementation Steps</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Map query to best cluster(s)</li>
                <li>Select top-k nodes within cluster by centrality/similarity</li>
                <li>Aggregate chunks for summary</li>
              </ul>

              <h3>Example Use Case</h3>
              <p>Topic exploration where a user asks about "machine learning" and the system returns diverse nodes from the ML cluster: supervised learning, neural networks, and model evaluation, providing comprehensive topic coverage.</p>
            </div>
          ),
          backgroundColor: '#335b1e',
          notes: ''
        },
        {
          id: 22,
          title: '5. Community / Cluster Retrieval - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '1em', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Benefits & Impact</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Broad coverage</li>
                <li>Reduces narrow bias</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Lower precision</li>
                <li>Depends on clustering quality</li>
              </ul>
            </div>
          ),
          backgroundColor: '#335b1e',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-6',
      title: '6. Hierarchical Graph Retrieval',
      slides: [
        {
          id: 23,
          title: '6. Hierarchical Graph Retrieval - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Navigates taxonomies; right granularity (parent→child).</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Granularity control</li>
                <li>Structured summaries</li>
              </ul>

              <p>Docs with sections, product catalogs, ontologies.</p>
            </div>
          ),
          backgroundColor: '#1e5b5a',
          notes: ''
        },
        {
          id: 24,
          title: '6. Hierarchical Graph Retrieval - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Traverse up/down hierarchy to match query specificity.</p>

              <h3>Data Requirements</h3>
              <p>Parent-child edges, level metadata, leaf chunks.</p>

              <h3>Pattern</h3>
              <pre style={{ lineHeight: '1.5' }}>
                {`Parent A → Subtopic B → Leaf C.`}
              </pre>
            </div>
          ),
          backgroundColor: '#1e5b5a',
          notes: ''
        },
        {
          id: 25,
          title: '6. Hierarchical Graph Retrieval - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Implementation Steps</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Classify query specificity (parent vs child)</li>
                <li>Select nodes at target level</li>
                <li>Expand to children or roll-up to parent as needed</li>
              </ul>

              <h3>Example Use Case</h3>
              <p>Product catalog navigation where a general query retrieves category-level information, while specific queries drill down to individual product specifications, automatically adjusting retrieval depth.</p>
            </div>
          ),
          backgroundColor: '#1e5b5a',
          notes: ''
        },
        {
          id: 26,
          title: '6. Hierarchical Graph Retrieval - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Benefits & Impact</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Granularity control</li>
                <li>Structured summaries</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Requires clean hierarchy</li>
                <li>Cross-links complicate</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e5b5a',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-7',
      title: '7. Graph + Dense Vector Hybrid Retrieval',
      slides: [
        {
          id: 27,
          title: '7. Graph + Dense Vector Hybrid - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Combine semantic match with structural relevance.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Better precision/recall balance</li>
              </ul>

              <p>Ambiguous queries; noisy graphs; heterogeneous data.</p>
            </div>
          ),
          backgroundColor: '#1e3a5b',
          notes: ''
        },
        {
          id: 28,
          title: '7. Graph + Dense Vector Hybrid - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Blend embedding similarity with graph features (degree, proximity, edge weights).</p>

              <h3>Data Requirements</h3>
              <p>Node embeddings, edge features, fusion/scoring formula.</p>

              <h3>Pattern</h3>
              <pre style={{ lineHeight: '1.5' }}>
                {`A (query) ~ B (0.83 sim); B near C ⇒ {B, C}`}
              </pre>
            </div>
          ),
          backgroundColor: '#1e3a5b',
          notes: ''
        },
        {
          id: 29,
          title: '7. Graph + Dense Vector Hybrid - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Implementation Steps</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Retrieve by embeddings (top-k)</li>
                <li>Re-rank using graph scores (e.g., proximity to seeds)</li>
                <li>Return top results after fusion</li>
              </ul>

              <h3>Example Use Case</h3>
              <p>Customer support where semantically similar questions are boosted if they're connected to the same product category or frequently co-occur in resolved tickets, combining semantic and structural signals.</p>
            </div>
          ),
          backgroundColor: '#1e3a5b',
          notes: ''
        },
        {
          id: 30,
          title: '7. Graph + Dense Vector Hybrid - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Benefits & Impact</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Better precision/recall balance</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Tuning fusion weights is non-trivial</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e3a5b',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-8',
      title: '8. Graph + BM25 Hybrid',
      slides: [
        {
          id: 31,
          title: '8. Graph + BM25 Hybrid - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Keyword grounding and lexical precision.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Reduces semantically-close-but-wrong picks</li>
              </ul>

              <p>Technical terms, exact codes, sparse text.</p>
            </div>
          ),
          backgroundColor: '#321e5b',
          notes: ''
        },
        {
          id: 32,
          title: '8. Graph + BM25 Hybrid - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Cross-validate dense/graph candidates using BM25; or intersect/union strategies.</p>

              <h3>Data Requirements</h3>
              <p>Inverted index, BM25 scores, graph/embedding candidates.</p>

              <h3>Pattern</h3>
              <pre style={{ lineHeight: '1.5' }}>
                {`A (dense) → {B, C}; BM25 keeps B.`}
              </pre>
            </div>
          ),
          backgroundColor: '#321e5b',
          notes: ''
        },
        {
          id: 33,
          title: '8. Graph + BM25 Hybrid - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Implementation Steps</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Get candidates from graph/dense</li>
                <li>Score with BM25 on node/chunk text</li>
                <li>Re-rank or filter by BM25 thresholds</li>
              </ul>

              <h3>Example Use Case</h3>
              <p>Legal or medical search where exact terminology matters: graph retrieval suggests related concepts, but BM25 ensures only documents containing the exact legal statute or medical code are returned.</p>
            </div>
          ),
          backgroundColor: '#321e5b',
          notes: ''
        },
        {
          id: 34,
          title: '8. Graph + BM25 Hybrid - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Benefits & Impact</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Reduces semantically-close-but-wrong picks</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Misses paraphrases</li>
                <li>Two retrieval systems to maintain</li>
              </ul>
            </div>
          ),
          backgroundColor: '#321e5b',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-9',
      title: '9. Semantic Graph Traversal',
      slides: [
        {
          id: 35,
          title: '9. Semantic Graph Traversal - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Adaptive follow of semantically strong links.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Precision during traversal</li>
              </ul>

              <p>Noisy graphs; need to avoid drift while exploring.</p>
            </div>
          ),
          backgroundColor: '#511e5b',
          notes: ''
        },
        {
          id: 36,
          title: '9. Semantic Graph Traversal - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Move along edges only if node/edge similarity crosses a threshold.</p>

              <h3>Data Requirements</h3>
              <p>Node/edge embeddings, similarity thresholds, stop criteria.</p>

              <h3>Pattern</h3>
              <pre style={{ lineHeight: '1.5' }}>
                {`A → B (0.82) → C (0.79) ; skip D (0.45).`}
              </pre>
            </div>
          ),
          backgroundColor: '#511e5b',
          notes: ''
        },
        {
          id: 37,
          title: '9. Semantic Graph Traversal - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Implementation Steps</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Seed nodes from query</li>
                <li>For each neighbor, compute semantic score</li>
                <li>Expand only if score ≥ τ; stop at budget</li>
              </ul>

              <h3>Example Use Case</h3>
              <p>Knowledge graph exploration where the system only follows highly relevant connections, avoiding topic drift when researching interconnected but distinct subjects like "quantum computing" and "classical algorithms".</p>
            </div>
          ),
          backgroundColor: '#511e5b',
          notes: ''
        },
        {
          id: 38,
          title: '9. Semantic Graph Traversal - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Benefits & Impact</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Precision during traversal</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Threshold tuning</li>
                <li>May miss useful weak links</li>
              </ul>
            </div>
          ),
          backgroundColor: '#511e5b',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-10',
      title: '10. Graph Walk-Based Ranking (PageRank/Personalized)',
      slides: [
        {
          id: 39,
          title: '10. Graph Walk-Based Ranking - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Identify authoritative/central nodes for a query.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Global signal</li>
                <li>Robust to noise</li>
              </ul>

              <p>Citation graphs, knowledge graphs, when centrality implies usefulness.</p>
            </div>
          ),
          backgroundColor: '#1e455b',
          notes: ''
        },
        {
          id: 40,
          title: '10. Graph Walk-Based Ranking - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Random walk with restart from seed set; rank by stationary probabilities.</p>

              <h3>Data Requirements</h3>
              <p>Transition matrix, restart set, damping, edge weights.</p>

              <h3>Pattern</h3>
              <pre style={{ lineHeight: '1.5' }}>
                {`Restart at A; steady-state ranks B > C > D.`}
              </pre>
            </div>
          ),
          backgroundColor: '#1e455b',
          notes: ''
        },
        {
          id: 41,
          title: '10. Graph Walk-Based Ranking - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Implementation Steps</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Select seed nodes from query</li>
                <li>Run PPR with damping α</li>
                <li>Return top nodes by score</li>
              </ul>

              <h3>Example Use Case</h3>
              <p>Academic paper recommendations where PageRank identifies influential papers in a citation network, or finding authoritative knowledge base articles by analyzing which nodes are most frequently referenced.</p>
            </div>
          ),
          backgroundColor: '#1e455b',
          notes: ''
        },
        {
          id: 42,
          title: '10. Graph Walk-Based Ranking - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Benefits & Impact</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Global signal</li>
                <li>Robust to noise</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Compute cost</li>
                <li>Sensitive to seed choice</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e455b',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-11',
      title: '11. Query Graph Construction',
      slides: [
        {
          id: 43,
          title: '11. Query Graph Construction - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Structured intent capture; precise matching.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Highly precise</li>
                <li>Explainable matches</li>
              </ul>

              <p>Complex relational queries, compliance, troubleshooting.</p>
            </div>
          ),
          backgroundColor: '#381e5b',
          notes: ''
        },
        {
          id: 44,
          title: '11. Query Graph Construction - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Parse query into entities/relations; build mini-graph; match against KB.</p>

              <h3>Data Requirements</h3>
              <p>NER/RE models, schema, subgraph matching algo.</p>

              <h3>Pattern</h3>
              <pre style={{ lineHeight: '1.5' }}>
                {`A relates_to B via r1, B connects_to C via r2.`}
              </pre>
            </div>
          ),
          backgroundColor: '#381e5b',
          notes: ''
        },
        {
          id: 45,
          title: '11. Query Graph Construction - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '1em', padding: '30px', lineHeight: '2' }}>
              <h3>Implementation Steps</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Extract entities/relations from query</li>
                <li>Build query graph; define constraints</li>
                <li>Run subgraph or pattern match; retrieve matched nodes/edges</li>
              </ul>

              <h3>Example Use Case</h3>
              <p>IT troubleshooting where a query like "database connection errors in production" is parsed into entities (database, production) and relations (connection_to, deployed_in), then matched against infrastructure graphs.</p>
            </div>
          ),
          backgroundColor: '#381e5b',
          notes: ''
        },
        {
          id: 46,
          title: '11. Query Graph Construction - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Benefits & Impact</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Highly precise</li>
                <li>Explainable matches</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Extraction errors</li>
                <li>Setup complexity</li>
              </ul>
            </div>
          ),
          backgroundColor: '#381e5b',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-12',
      title: '12. Context Path Stitching',
      slides: [
        {
          id: 47,
          title: '12. Context Path Stitching - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Converts disjoint paths into readable context.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Coherent context</li>
                <li>Reduces hallucinations</li>
              </ul>

              <p>Long-form answers; evidence synthesis.</p>
            </div>
          ),
          backgroundColor: '#5b1e40',
          notes: ''
        },
        {
          id: 48,
          title: '12. Context Path Stitching - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Order and merge path snippets; deduplicate; add bridging sentences.</p>

              <h3>Data Requirements</h3>
              <p>Path lists, node texts, summarizer/ordering heuristic.</p>

              <h3>Pattern</h3>
              <pre style={{ lineHeight: '1.5' }}>
                {`Path A→B→C ⇒ stitched narrative: A then B therefore C.`}
              </pre>
            </div>
          ),
          backgroundColor: '#5b1e40',
          notes: ''
        },
        {
          id: 49,
          title: '12. Context Path Stitching - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Implementation Steps</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Select top path(s) from retrieval</li>
                <li>Merge node snippets by path order</li>
                <li>Summarize and add transitions</li>
              </ul>

              <h3>Example Use Case</h3>
              <p>Research synthesis where multiple evidence paths need to be woven into a coherent narrative, such as connecting findings from different studies into a comprehensive literature review.</p>
            </div>
          ),
          backgroundColor: '#5b1e40',
          notes: ''
        },
        {
          id: 50,
          title: '12. Context Path Stitching - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Benefits & Impact</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Coherent context</li>
                <li>Reduces hallucinations</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Extra latency</li>
                <li>Needs good summarization</li>
              </ul>
            </div>
          ),
          backgroundColor: '#5b1e40',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-13',
      title: '13. LLM-Guided Graph Expansion',
      slides: [
        {
          id: 51,
          title: '13. LLM-Guided Graph Expansion - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Adaptive exploration under a token/latency budget.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Flexible</li>
                <li>Focuses on promising areas</li>
              </ul>

              <p>Open-ended queries; large graphs; interactive Q&A.</p>
            </div>
          ),
          backgroundColor: '#1e5b5a',
          notes: ''
        },
        {
          id: 52,
          title: '13. LLM-Guided Graph Expansion - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>LLM chooses next nodes/edges to expand based on current context and uncertainty.</p>

              <h3>Data Requirements</h3>
              <p>Node summaries, expansion API, budget policy, feedback signals.</p>

              <h3>Pattern</h3>
              <pre style={{ lineHeight: '1.5' }}>
                {`Start at A; LLM selects B and C; next expands C→D.`}
              </pre>
            </div>
          ),
          backgroundColor: '#1e5b5a',
          notes: ''
        },
        {
          id: 53,
          title: '13. LLM-Guided Graph Expansion - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Implementation Steps</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Retrieve initial seeds and brief summaries</li>
                <li>Ask LLM to propose expansions with rationale</li>
                <li>Expand top suggestions; iterate until budget met</li>
              </ul>

              <h3>Example Use Case</h3>
              <p>Interactive research assistant where the LLM dynamically explores promising branches of a knowledge graph based on the evolving conversation, adapting to user interests and question complexity.</p>
            </div>
          ),
          backgroundColor: '#1e5b5a',
          notes: ''
        },
        {
          id: 54,
          title: '13. LLM-Guided Graph Expansion - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Benefits & Impact</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Flexible</li>
                <li>Focuses on promising areas</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Costly</li>
                <li>Needs guardrails for drift</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e5b5a',
          notes: ''
        }
      ]
    },
    {
      id: 'summary',
      title: 'Putting It Together: Patterns',
      slides: [
        {
          id: 55,
          title: 'Putting It Together: Patterns',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.7', textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '10px' }}>
                  <div style={{ color: '#3b82f6', marginBottom: '0.8rem' }}>
                    <SvgIcon iconName="duo-layer-group" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Common Combos</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Hybrid:</strong> Dense + Graph (7) + BM25 (8)
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      <strong>Reasoning:</strong> Path (4) + Stitching (12) + PPR (10)
                    </li>
                    <li>
                      <SvgIcon iconName="duo-chart-network" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                      <strong>Coverage:</strong> Cluster (5) + Hierarchical (6) + Neighborhood (3)
                    </li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '10px' }}>
                  <div style={{ color: '#10b981', marginBottom: '0.8rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Operational Tips</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                      Cap neighbors per type; cache frequent seeds
                    </li>
                    <li style={{ marginBottom: '0.5rem' }}>
                      Log edge decisions; tune thresholds offline
                    </li>
                    <li>
                      Measure utility via answer F1 and citation hit-rate
                    </li>
                  </ul>
                </div>
              </div>

              <div style={{ background: 'rgba(139, 92, 246, 0.15)', padding: '1.2rem', borderRadius: '10px' }}>
                <div style={{ color: '#8b5cf6', marginBottom: '0.8rem' }}>
                  <SvgIcon iconName="duo-rocket" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                  <strong>Next Steps</strong>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', fontSize: '1.2rem' }}>
                  <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '0.8rem', borderRadius: '8px' }}>
                    <SvgIcon iconName="duo-1" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                    Pick 2–3 techniques to pilot
                  </div>
                  <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '0.8rem', borderRadius: '8px' }}>
                    <SvgIcon iconName="duo-2" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                    Establish metrics and budgets (latency, tokens)
                  </div>
                  <div style={{ background: 'rgba(239, 68, 68, 0.2)', padding: '0.8rem', borderRadius: '8px' }}>
                    <SvgIcon iconName="duo-3" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                    Add safety rails for LLM-guided expansion
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(245, 158, 11, 0.15)', borderRadius: '10px', textAlign: 'left', fontSize: '1.2rem' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                <strong>Remember:</strong> Start simple, measure impact, and iterate based on your specific use case and constraints.
              </div>
            </div>
          ),
          backgroundColor: '#5b1e1e',
          notes: ''
        }
      ]
    }
  ]
};

