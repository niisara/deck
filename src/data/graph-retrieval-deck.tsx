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
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Prioritize stronger, more meaningful relationships.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Trust-aware ranking</li>
                <li>Interpretable via weights</li>
              </ul>

              <p>Heterogeneous graphs with rich edge metadata; trust/scoring matters.</p>
            </div>
          ),
          backgroundColor: '#5b1e1e',
          notes: ''
        },
        {
          id: 8,
          title: '2. Edge-Weighted Retrieval - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Use edge weights (e.g., citations, co-occurrence, confidence) to rank candidate nodes.</p>

              <h3>Data Requirements</h3>
              <p>Edge weights/types, node embeddings (optional), normalization scheme.</p>

              <h3>Pattern</h3>
              <pre style={{ lineHeight: '1.5' }}>
                {`A -(weight 0.9)→ B; A -(0.3)→ C ⇒ pick B.`}
              </pre>
            </div>
          ),
          backgroundColor: '#5b1e1e',
          notes: ''
        },
        {
          id: 9,
          title: '2. Edge-Weighted Retrieval - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Implementation Steps</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Identify seed nodes from query</li>
                <li>Score neighbors by edge weight (and decay by hop)</li>
                <li>Rank and select top-k nodes</li>
              </ul>

              <h3>Example Use Case</h3>
              <p>Citation networks where papers with higher citation counts or co-citations are more relevant, or knowledge graphs where relationship confidence scores help prioritize the most reliable connections.</p>
            </div>
          ),
          backgroundColor: '#5b1e1e',
          notes: ''
        },
        {
          id: 10,
          title: '2. Edge-Weighted Retrieval - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Benefits & Impact</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Trust-aware ranking</li>
                <li>Interpretable via weights</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Requires good edge weighting</li>
                <li>Can bias to popular nodes</li>
              </ul>
            </div>
          ),
          backgroundColor: '#5b1e1e',
          notes: ''
        }
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
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Adds immediate context (definitions, examples, references).</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Simple</li>
                <li>Contextual</li>
                <li>Low-latency</li>
              </ul>

              <p>Need local context around a concept (API, ontology, doc sections).</p>
            </div>
          ),
          backgroundColor: '#5b451e',
          notes: ''
        },
        {
          id: 12,
          title: '3. Neighborhood Expansion - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Retrieve seed node plus its 1-hop neighbors with filters.</p>

              <h3>Data Requirements</h3>
              <p>Adjacency lists, node/edge types, optional neighbor caps per type.</p>

              <h3>Pattern</h3>
              <pre style={{ lineHeight: '1.5' }}>
                {`A → {B, C, D}`}
              </pre>
            </div>
          ),
          backgroundColor: '#5b451e',
          notes: ''
        },
        {
          id: 13,
          title: '3. Neighborhood Expansion - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '1em', padding: '30px', lineHeight: '2' }}>
              <h3>Implementation Steps</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Find top seed node(s)</li>
                <li>Expand 1-hop with type filters (e.g., definition, example, reference)</li>
                <li>Deduplicate and cap per type</li>
              </ul>

              <h3>Example Use Case</h3>
              <p>API documentation where retrieving a function node also returns related parameters, return types, and usage examples, providing complete context in one retrieval step.</p>
            </div>
          ),
          backgroundColor: '#5b451e',
          notes: ''
        },
        {
          id: 14,
          title: '3. Neighborhood Expansion - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Benefits & Impact</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Simple</li>
                <li>Contextual</li>
                <li>Low-latency</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Can introduce noise</li>
                <li>Misses longer reasoning paths</li>
              </ul>
            </div>
          ),
          backgroundColor: '#5b451e',
          notes: ''
        }
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
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Multi-hop reasoning and evidence chains.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Supports reasoning</li>
                <li>Traceable evidence</li>
              </ul>

              <p>Why/how questions, causal chains, compliance dependencies.</p>
            </div>
          ),
          backgroundColor: '#555b1e',
          notes: ''
        },
        {
          id: 16,
          title: '4. Path-Based Retrieval - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Search for high-relevance paths connecting seed(s) to target concepts.</p>

              <h3>Data Requirements</h3>
              <p>Edge types, path constraints, path scoring (length, weights, semantics).</p>

              <h3>Pattern</h3>
              <pre style={{ lineHeight: '1.5' }}>
                {`A → B → C`}
              </pre>
            </div>
          ),
          backgroundColor: '#555b1e',
          notes: ''
        },
        {
          id: 17,
          title: '4. Path-Based Retrieval - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Implementation Steps</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Seed from query (embedding/BM25/entity)</li>
                <li>Enumerate constrained paths up to L hops</li>
                <li>Score paths; return best path(s) and attached chunks</li>
              </ul>

              <h3>Example Use Case</h3>
              <p>Regulatory compliance questions requiring evidence chains: A regulation requires B, which references C, which defines D. The complete path provides the reasoning trail.</p>
            </div>
          ),
          backgroundColor: '#555b1e',
          notes: ''
        },
        {
          id: 18,
          title: '4. Path-Based Retrieval - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Benefits & Impact</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Supports reasoning</li>
                <li>Traceable evidence</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>More expensive</li>
                <li>Path explosion without constraints</li>
              </ul>
            </div>
          ),
          backgroundColor: '#555b1e',
          notes: ''
        }
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

