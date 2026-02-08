import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

export const productionRagDeck: Deck = {
  id: 'production-rag-deck',
  name: '11 Production RAG Architecture Patterns',
  description: 'Proven designs for reliable, scalable Retrieval-Augmented Generation',
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
          title: '11 Production RAG Architecture Patterns',
          content: (
            <div>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <h3 style={{ fontSize: '2rem', marginTop: '30px', color: '#4fc3f7' }}>
                  Proven designs for reliable, scalable Retrieval-Augmented Generation
                </h3>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.5}>
                <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '15px 20px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '8px' }}>
                    <SvgIcon iconName="duo-magnifying-glass" sizeName="2x" darkModeInvert={true} />
                    <span>Retrieval accuracy</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '15px 20px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '8px' }}>
                    <SvgIcon iconName="duo-book-open" sizeName="2x" darkModeInvert={true} />
                    <span>Context handling</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '15px 20px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '8px' }}>
                    <SvgIcon iconName="duo-shield-check" sizeName="2x" darkModeInvert={true} />
                    <span>Answer quality</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '15px 20px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '8px' }}>
                    <SvgIcon iconName="duo-gauge-high" sizeName="2x" darkModeInvert={true} />
                    <span>Scalability</span>
                  </div>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.8}>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#3c1651',
          notes: `### 1. Title Slide - 11 Production RAG Architecture Patterns

Welcome everyone! Today we're diving deep into eleven production-ready RAG architecture patterns that will transform how you build retrieval-augmented generation systems. RAG, or Retrieval-Augmented Generation 👉 [rag], combines the power of large language models with external knowledge retrieval to create more accurate, factual, and context-aware AI applications.

#### Why This Matters
Think of RAG as giving your AI a library card. Instead of relying solely on what it memorized during training, your AI can now look up current information, company-specific knowledge, or domain expertise on demand. This presentation covers four critical dimensions: retrieval accuracy, which ensures we find the right information; context handling, which manages how we package that information; answer quality, which validates our outputs are trustworthy; and scalability, which ensures our systems work at production scale.

#### What You'll Learn Today
We'll explore eleven battle-tested patterns, from basic implementations to sophisticated multi-agent systems. Each pattern solves specific challenges you'll encounter when moving from proof-of-concept to production. Whether you're building an internal knowledge assistant, a customer support system, or a technical documentation search tool, you'll leave with practical blueprints for success. Let's begin this exciting journey into production RAG architectures!`
        },
        {
          id: 2,
          title: 'Agenda & Patterns Overview',
          content: (
            <div style={{ textAlign: 'left', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInLeft" delay={0.2}>
                <h2 style={{ marginBottom: '20px', alignItems: 'center' }}>
                  <SvgIcon iconName="duo-clipboard-list" sizeName="2x" style={{ marginRight: '10px', verticalAlign: 'middle' }} darkModeInvert={true} />
                  Exploring 11 production-ready RAG architecture patterns
                </h2>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.4}>
                <p style={{ marginBottom: '25px', fontSize: '0.95em' }}>
                  As RAG systems move from prototypes to production deployments, teams need proven architectural patterns that address common challenges:
                </p>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.7}>
                <ul>
                  <li>Retrieval accuracy and precision</li>
                  <li>Context handling and efficiency</li>
                  <li>Answer quality and hallucination mitigation</li>
                  <li>Scalability and operational reliability</li>
                </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#3c1651',
          notes: `### 2. Agenda & Patterns Overview

Let's set the stage for what we'll cover today. When companies first experiment with RAG systems, they often start with simple prototypes that work great in demos but struggle in real-world production environments. The gap between prototype and production is where most RAG projects face their biggest challenges.

#### The Four Pillars of Production RAG
First, retrieval accuracy and precision. It's not enough to just find similar documents—we need to find the RIGHT documents consistently. Second, context handling and efficiency. Token limits are real, and sending too much irrelevant context wastes money and degrades performance. Third, answer quality and hallucination mitigation 👉 [hal-oo-sin-AY-shun]. This is critical—our systems must know when they don't know something, rather than making up plausible-sounding but incorrect answers. Fourth, scalability and operational reliability. What works for ten users must work for ten thousand, with consistent latency 👉 [LAY-ten-see] and uptime.

#### What's Coming Next
In this presentation, we'll systematically explore eleven architectural patterns, each addressing specific production challenges. You'll see concrete implementation details, understand when to use each pattern, and learn how to combine them for maximum effect. Ready to transform your RAG systems from demos to dependable production services? Let's dive into our pattern catalog!`
        },
        {
          id: 3,
          title: 'Cheat sheets and Selection guidance',
          content: (
            <div style={{ textAlign: 'left', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div>
                    <h3 style={{ color: '#4fc3f7', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-star" sizeName="2x" darkModeInvert={true} />
                      Foundation Patterns
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '1.2rem' }}>
                      <div style={{ padding: '8px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>1. Basic RAG (Single Retrieve → Generate)</div>
                      <div style={{ padding: '8px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>2. RAG with Re-Ranking</div>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h3 style={{ color: '#81c784', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-magnifying-glass" sizeName="2x" darkModeInvert={true} />
                      Query Optimization Patterns
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '1.2rem' }}>
                      <div style={{ padding: '8px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>3. RAG with Query Rewriting</div>
                      <div style={{ padding: '8px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>4. RAG with Multi-Query Retrieval</div>
                      <div style={{ padding: '8px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>5. RAG with HyDE (Hypothetical Document Embeddings)</div>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div>
                    <h3 style={{ color: '#ffb74d', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-brain" sizeName="2x" darkModeInvert={true} />
                      Advanced Retrieval Patterns
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '1.2rem' }}>
                      <div style={{ padding: '8px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>6. RAG with Parent–Child Retrieval</div>
                      <div style={{ padding: '8px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>7. RAG with Graph-Based Retrieval</div>
                      <div style={{ padding: '8px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>8. RAG with External Tools / Agents</div>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <div>
                    <h3 style={{ color: '#ba68c8', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-sliders" sizeName="2x" darkModeInvert={true} />
                      Hybrid & Optimization Patterns
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '1.2rem' }}>
                      <div style={{ padding: '8px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>9. RAG + Fine-Tuned Model Hybrid</div>
                      <div style={{ padding: '8px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>10. RAG with Multi-Step Retrieval Loops</div>
                      <div style={{ padding: '8px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>11. RAG with Context Compression / Summarization</div>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.7}>
                <p style={{ fontSize: '1.2rem', marginTop: '50px', color: '#aaa' }}>Today we'll explore 11 production-tested patterns with detailed implementation cheat sheets and selection guidance.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#3c1651',
          notes: `### 3. Cheat Sheets and Selection Guidance

Here's your roadmap to the eleven patterns we'll explore. Think of these as building blocks—you can use them individually or combine them to create powerful custom architectures. Let me break down the four categories so you understand how they fit together.

#### Foundation Patterns
We start with the basics. Basic RAG is your simplest retrieve-and-generate pattern—perfect for learning and prototyping. RAG with Re-Ranking adds a critical precision layer, using specialized models to reorder retrieved documents by actual relevance. These foundations handle about seventy percent of production use cases when implemented well.

#### Query Optimization and Advanced Retrieval
Next, we address the retrieval problem from the query side. Query Rewriting transforms user questions into better search queries. Multi-Query Retrieval generates multiple search variations to cast a wider net. HyDE 👉 [HIDE] creates hypothetical answers first, then searches for documents matching those answers—surprisingly effective! The Advanced Retrieval patterns tackle complex document structures: Parent-Child handles hierarchical 👉 [high-er-AR-ki-kal] documents, Graph-Based leverages relationships between entities, and External Tools integrates real-time APIs and calculators.

#### Hybrid & Optimization Patterns
Finally, our power patterns. Fine-Tuned Model Hybrid combines RAG's flexibility with custom model training. Multi-Step Retrieval Loops implement iterative search and reasoning. Context Compression shrinks your retrieved content to fit more relevant information in limited context windows. Master these eleven patterns, and you'll handle any RAG challenge production throws at you!`
        }
      ]
    },
    {
      id: 'pattern-1',
      title: 'Basic RAG',
      slides: [
        {
          id: 4,
          title: '1) Basic RAG (Single Retrieve → Generate)',
          icon: { name: 'duo-arrow-right' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Components:<MermaidPopover diagram={`flowchart LR
    A[User Query] --> B[Embedding Model]
    B --> C[Vector DB]
    C --> D[Top-K Chunks]
    D --> E[LLM]
    E --> F[Generated Answer]
    style A fill:#4fc3f7
    style E fill:#81c784
    style F fill:#ffd700`} /></span></strong></p>
                    <GSAPStaggerList stagger={0.1} duration={0.6}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>LLM (text generation)</li>
                        <li>Embedding model (text → vectors)</li>
                        <li>Chunker/splitter (document processing)</li>
                        <li>Vector database (similarity search)</li>
                        <li>Retriever (fetch relevant chunks)</li>
                        <li>Prompt template (format instructions)</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Retrieval Strategy:</span></strong></p>
                    <p style={{ marginTop: '5px' }}>Semantic Top-K with optional hybrid lexical search:</p>
                    <GSAPStaggerList stagger={0.12} duration={0.6}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Encode query as vector embedding</li>
                        <li>Find closest K chunks by similarity</li>
                        <li>Optional BM25/keyword boost</li>
                        <li>Fixed K (typically 3-5 chunks)</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Context Packing Approach:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.6}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Simple concatenation of K chunks</li>
                        <li>Basic prompt instructions</li>
                        <li>Optional citation formatting</li>
                        <li>Static context ordering (most → least similar)</li>
                        <li>Manual token count management</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Best Fit Use Cases:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.6}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Internal knowledge bases / FAQs</li>
                        <li>Small to medium document collections</li>
                        <li>Proof of concept implementations</li>
                        <li>Narrow domain-specific assistants</li>
                        <li>Applications needing simple explanations</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#136b5e',
          notes: `### 4. Pattern 1 - Basic RAG (Single Retrieve → Generate)

Let's dive into our first pattern—Basic RAG. This is the foundation that every other pattern builds upon, so understanding it deeply is crucial. Think of Basic RAG as a simple question-answering system that looks up information before responding, just like you might search through a textbook before answering an exam question.


#### The Six Core Components
Every Basic RAG system needs six essential pieces. First, the LLM 👉 [el-el-em] or Large Language Model generates your final answers. Second, an embedding model converts text into mathematical vectors—think of these as coordinates in meaning-space. Third, a chunker splits documents into digestible pieces, typically two hundred to five hundred words each. Fourth, a vector database stores these embeddings and performs lightning-fast similarity searches. Fifth, a retriever orchestrates the search process. Sixth, prompt templates format everything nicely for the LLM.

#### How It Works
When a user asks a question, we convert that question into a vector using the same embedding model that processed our documents. Then we search the vector database for the top-K most similar chunks—usually three to five chunks work best. These chunks get concatenated 👉 [con-CAT-en-ay-ted] together with the user's question into a prompt, and the LLM generates an answer based on this retrieved context. The entire process typically takes one to three seconds, making it suitable for interactive applications. This simplicity is both Basic RAG's greatest strength and its primary limitation, which we'll explore next!`
        },
        {
          id: 5,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left', fontSize: '0.75em' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Easiest to implement and understand</li>
                        <li>Low latency (single retrieval step)</li>
                        <li>Minimal operational complexity</li>
                        <li>Works well for straightforward queries</li>
                        <li>Fast to prototype and iterate</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Rigid recall/precision tradeoffs</li>
                        <li>Brittle on vague/ambiguous queries</li>
                        <li>Limited by chunk quality/boundaries</li>
                        <li>Struggles with multi-hop reasoning</li>
                        <li>Higher hallucination risk if evidence is thin</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#136b5e',
          notes: `### 5. Basic RAG - Strengths and Limitations

Every architectural pattern has its sweet spot and its challenges. Let's be honest about where Basic RAG shines and where it struggles, so you can make informed decisions about when to use it.

#### Strengths
Basic RAG's simplicity is its superpower. You can implement a working system in an afternoon using tools like LangChain or LlamaIndex. The single retrieval step means low latency—typically under two seconds end-to-end, which feels instant to users. Operationally, you're managing just a vector database and an LLM API, making deployment and monitoring straightforward. For well-defined domains with clear queries, Basic RAG achieves eighty to ninety percent accuracy, which is excellent for many business applications. Plus, the fast iteration cycle lets you experiment quickly with different chunk sizes, embedding models, and prompt templates.

#### Limitations
However, Basic RAG has real constraints. The K parameter 👉 [kay] creates a rigid tradeoff: too few chunks and you miss relevant information, too many and you dilute the important content with noise. Vague queries like "tell me about the product" retrieve random-seeming results. Your chunk boundaries matter immensely—if you split mid-paragraph, you lose context. Multi-hop questions like "compare the pricing of option A and option B" struggle because relevant information might be in different chunks that don't get retrieved together. Finally, when retrieval returns marginally relevant content, the LLM might hallucinate rather than admit it doesn't know.

#### When to Use Basic RAG
Use Basic RAG for FAQs, internal wikis, straightforward technical documentation, and proof-of-concept projects. When queries are predictable and documents are well-structured, Basic RAG delivers excellent results with minimal complexity. For everything else, the patterns we'll explore next add the sophistication you need!`
        }
      ]
    },
    {
      id: 'pattern-2',
      title: 'RAG with Re-Ranking',
      slides: [
        {
          id: 6,
          title: '2) RAG with Re-Ranking',
          icon: { name: 'duo-list-ol' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <GSAPAnimated animation="bounceIn" delay={0.2}>
                  <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Components:<MermaidPopover diagram={`flowchart TB
    A[Query] --> B[Vector DB]
    B --> C[Top 100-300<br/>Candidates]
    C --> D[Reranker Model]
    D --> E[Top 5-10<br/>Precise Results]
    E --> F[LLM]
    style D fill:#ffd700
    style E fill:#81c784`} /></span></strong></p>
                    <GSAPStaggerList stagger={0.1} duration={0.6}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Base retriever (vector DB + embeddings)</li>
                        <li>Reranker (e.g., Cohere/Voyage/bge-reranker)</li>
                        <li>Rank fusion mechanism</li>
                        <li>Citation system with source metadata</li>
                        <li>Score threshold filters</li>
                        <li>Hybrid search options (lexical + semantic)</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Retrieval Strategy:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.6}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Retrieve broad initial set (N=100–300)</li>
                        <li>Rerank with cross-encoder model for precision</li>
                        <li>Select top M highest-scored chunks</li>
                        <li>Optional filtering by relevance threshold</li>
                        <li>Optional diversity optimization</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Context Packing Approach:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.6}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Pack top-M highest scoring passages</li>
                        <li>Include source metadata and relevance scores</li>
                        <li>Ordered by reranker score (not original retrieval)</li>
                        <li>Optionally include confidence metrics</li>
                        <li>Weighted citation based on relevance scores</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="rotateIn" delay={0.5}>
                  <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Best Fit Use Cases:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.6}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Enterprise QA with large knowledge bases</li>
                        <li>Support search requiring high precision</li>
                        <li>Applications prioritizing answer quality over latency</li>
                        <li>Technical documentation search</li>
                        <li>Cases where hallucination reduction is critical</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#714425',
          notes: `### 6. Pattern 2 - RAG with Re-Ranking

Now we level up with Re-Ranking, which solves one of Basic RAG's biggest problems: precision. Think of it like a two-stage filter—first, cast a wide net to capture many potentially relevant documents, then use a more sophisticated model to identify which ones truly matter.


#### The Two-Stage Approach
Here's how it works: instead of retrieving just five chunks like Basic RAG, we retrieve one hundred to three hundred candidates using fast vector similarity search. This ensures high recall—we probably have the right answer somewhere in that set. Then comes the magic: a reranker model, typically a cross-encoder 👉 [cross en-COH-der], scores each candidate against the query with much higher accuracy than embedding similarity alone. Cross-encoders are slower but more precise because they analyze the query and document together, not separately. Finally, we keep only the top five to ten highest-scoring chunks for the LLM.

#### Why This Works
Rerankers excel at understanding nuance 👉 [NEW-ahnss]. Where embedding models might think "bank" (financial) and "bank" (river) are similar contexts, a reranker understands the query's intent and picks the right meaning. Companies like Cohere 👉 [koh-HERE], Voyage 👉 [voy-AHDGE], and open-source projects like BGE 👉 [bee-gee-ee] provide specialized reranker models. The result? Typically fifteen to thirty percent accuracy improvement over Basic RAG, especially on ambiguous queries. The tradeoff is added latency—maybe an extra five hundred milliseconds to one second—but for applications where accuracy matters more than speed, this is absolutely worth it!`
        },
        {
          id: 7,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <GSAPAnimated animation="flipCard" delay={0.2}>
                  <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Significant precision boost over basic RAG</li>
                        <li>Effectively filters noise in large corpora</li>
                        <li>Better handling of nuanced queries</li>
                        <li>Improves answer quality with better context</li>
                        <li>Can mitigate hallucinations with higher quality retrieval</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.4}>
                  <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Extra cost/latency from reranking step</li>
                        <li>Needs quality reranker matched to domain</li>
                        <li>May require more engineering/tuning</li>
                        <li>Initial broad recall still affects ceiling performance</li>
                        <li>Increased complexity in debugging and monitoring</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#714425',
          notes: `### 7. Re-Ranking Pattern - Strengths and Limitations

Let's evaluate Re-Ranking honestly. Like any architectural decision, it comes with tradeoffs you need to understand before implementing it in production.

#### Strengths
The precision improvement is substantial and measurable. In our production deployments, we've seen fifteen to thirty-five percent accuracy gains compared to Basic RAG, especially on complex queries. Re-Ranking shines in large knowledge bases—when you have thousands or millions of documents, the initial vector search brings back many false positives, and reranking filters them brilliantly. Nuanced queries that confuse embedding models get handled correctly because cross-encoders deeply analyze query-document pairs. Better retrieval means better context for your LLM, which directly translates to higher answer quality and fewer hallucinations. Users notice the difference immediately.

#### Limitations  
However, nothing comes free. Reranking adds latency—typically five hundred milliseconds to one point five seconds depending on your reranker and the number of candidates. API-based rerankers like Cohere add cost per request, while self-hosted options require GPU infrastructure. Domain matching matters: a reranker trained on general web text might underperform on specialized medical or legal content, requiring fine-tuning. The engineering complexity increases—you're now managing two models, monitoring their performance separately, and debugging a more complex pipeline. Finally, remember that reranking can only work with what the initial retrieval found; if your vector search missed the relevant documents entirely, reranking won't magically find them.

#### When to Choose Re-Ranking
Use Re-Ranking when accuracy justifies the added complexity and cost. Enterprise knowledge management, customer support systems, legal document search, and technical documentation—these applications benefit immensely. If you're building an FAQ bot with fifty documents, stick with Basic RAG. But for serious production systems with quality requirements, Re-Ranking is your tier-one upgrade!`
        }
      ]
    },
    {
      id: 'pattern-3',
      title: 'RAG with Query Rewriting',
      slides: [
        {
          id: 8,
          title: '3) RAG with Query Rewriting',
          icon: { name: 'duo-pencil' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <GSAPAnimated animation="slideInTop" delay={0.2}>
                  <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Components:<MermaidPopover diagram={`sequenceDiagram
    User->>+Rewriter: "What's the return policy?"
    Rewriter->>+Rewriter: Analyze & Transform
    Rewriter-->>-User: "Product return procedures<br/>AND refund timelines"
    User->>VectorDB: Rewritten Query
    VectorDB-->>LLM: Better Results
    style Rewriter fill:#ffd700`} /></span></strong></p>
                    <GSAPStaggerList stagger={0.1} duration={0.6}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Rewriter LLM (canonicalize/expand/clarify)</li>
                        <li>Query router/taxonomy classifier</li>
                        <li>Domain-specific dictionaries/synonyms</li>
                        <li>Logging system for evaluation</li>
                        <li>Standard retrieval & generation components</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.3}>
                  <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Retrieval Strategy:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.6}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Transform user query before retrieval</li>
                        <li>Normalize entities, expand synonyms</li>
                        <li>"Step-back" for broad queries</li>
                        <li>Optional hybrid retrieval with lexical search</li>
                        <li>Can combine with other retrieval methods</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.4}>
                  <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Context Packing Approach:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.6}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Include original + rewritten query in prompt</li>
                        <li>Provide transparency for transformations</li>
                        <li>Similar to basic RAG otherwise</li>
                        <li>May include transformation reasoning</li>
                        <li>Optional metadata filters from query analysis</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" delay={0.5}>
                  <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Best Fit Use Cases:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.6}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Customer support/portal applications</li>
                        <li>Systems with domain-specific terminology</li>
                        <li>Public-facing interfaces with varied phrasing</li>
                        <li>Multi-lingual front-ends</li>
                        <li>Applications needing query normalization</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#391f5f',
          notes: `### 8. Pattern 3 - RAG with Query Rewriting

Now we shift focus from improving what we retrieve to improving how we search. Query Rewriting transforms messy, ambiguous user questions into precise search queries before retrieval even begins. Think of it as having a helpful librarian who clarifies what you're really looking for before searching.


#### Why Users Write Bad Queries
Let's be honest: users rarely phrase queries optimally for search systems. They might ask "How do I get my money back?" when your documentation uses the term "refund process." They write vague questions like "tell me about pricing" instead of "Compare Enterprise versus Pro plan features and costs." Query Rewriting fixes this mismatch between how users think and how your documents are structured.

#### Rewriting Strategies
There are several effective approaches. Query expansion adds synonyms and related terms—"refund" becomes "refund OR reimbursement OR money-back." Entity normalization standardizes names—"GPT-four" becomes "GPT-4." Step-back prompting transforms specific questions into broader ones first—"Why doesn't feature X work?" becomes "How does feature X work?" then retrieves from that context. You can also decompose complex multi-part questions into simpler sub-queries.

#### Implementation
Use a small, fast LLM 👉 [el-el-em] like GPT-3.5 👉 [gee-pee-tee three point five] for rewriting—no need for your most powerful model here. Include both original and rewritten queries in your logs for evaluation. The key is transparency: show users how their query was transformed so they can correct misunderstandings. Query Rewriting adds about two hundred to five hundred milliseconds of latency, but the retrieval quality improvement often justifies this cost, especially for consumer-facing applications!`
        },
        {
          id: 9,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <GSAPAnimated animation="rotateIn" delay={0.2}>
                  <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Handles ambiguity and vague questions</li>
                        <li>Improves hit rate on messy user queries</li>
                        <li>Normalizes variations in terminology</li>
                        <li>Enables domain-specific transformations</li>
                        <li>Robust to different user phrasing styles</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="rotateIn" delay={0.4}>
                  <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Possible over-constraint or intent drift</li>
                        <li>Additional latency from rewriting step</li>
                        <li>Needs careful auditing and evaluation</li>
                        <li>Can amplify biases in original query</li>
                        <li>Requires tuning rewriting strategies</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#391f5f',
          notes: `### 9. Query Rewriting - Strengths and Limitations

Query Rewriting is powerful but requires careful implementation. Let's examine when it delivers value and when it might cause problems.

#### Strengths
Query Rewriting excels at handling the messiness of real user input. When users ask vague questions like "tell me about the product," rewriting can transform this into specific facets: "product features AND pricing AND specifications." The terminology normalization is invaluable—users say "cancel subscription" but your docs say "terminate membership"—rewriting bridges this gap automatically. For domain-specific applications like medical or legal systems where precise terminology matters, rewriting ensures consistent vocabulary. It's also remarkably robust to different phrasing styles, cultural variations, and even typos when combined with spell-checking.

#### Limitations
However, rewriting can go wrong. Intent drift occurs when the rewriter misunderstands what the user actually wants—"python tips" for programming becomes "python snake care" in a general-purpose system. Over-constraining happens when you add too many specific terms, narrowing results unnecessarily. The rewriting step adds latency—typically two hundred to five hundred milliseconds, which compounds with other preprocessing. You absolutely must log and audit rewrites because they directly affect what users find. Biases in your rewriting prompts can amplify biases in user queries—"female doctor" shouldn't get rewritten to just "doctor" if gender specificity was intentional.

#### Best Practices
To use Query Rewriting effectively, start with conservative rewrites—just normalize obvious synonyms and entities. Log every rewrite for offline analysis. Show users the rewritten query when helpful for transparency. Combine with other patterns like Re-Ranking for maximum effect. Test extensively with real user queries, not synthetic examples. When done right, Query Rewriting dramatically improves the user experience by making your system understand natural language better!`
        }
      ]
    },
    {
      id: 'pattern-4',
      title: 'RAG with Multi-Query Retrieval',
      slides: [
        {
          id: 10,
          title: '4) RAG with Multi-Query Retrieval',
          icon: { name: 'duo-copy' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <MermaidPopover
                    diagram={`graph TD
    A[User Query] --> B[LLM Query Generator]
    B --> C1[Variant 1]
    B --> C2[Variant 2]
    B --> C3[Variant 3]
    C1 --> D1[Vector Search]
    C2 --> D2[Vector Search]
    C3 --> D3[Vector Search]
    D1 --> E[Reciprocal Rank Fusion]
    D2 --> E
    D3 --> E
    E --> F[Deduplication]
    F --> G[Final Context]
    G --> H[LLM Answer]`}
                    triggerText="View Multi-Query Flow"
                  />
                </div>
              </GSAPAnimated>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Components:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>LLM for query variation generation</li>
                        <li>Hybrid retrievers (embedding + keyword)</li>
                        <li>Reciprocal rank fusion algorithm</li>
                        <li>Deduplication pipeline</li>
                        <li>Multi-retrieval orchestrator</li>
                        <li>Citation/source tracking system</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Retrieval Strategy:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Generate diverse query variations (3-5)</li>
                        <li>Create facet/intent variants</li>
                        <li>Parallel retrieval for each variant</li>
                        <li>Fusion of results using RRF algorithm</li>
                        <li>Deduplicate similar chunks</li>
                        <li>Optionally weight by source credibility</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Context Packing Approach:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Deduplicate overlapping chunks</li>
                        <li>Diversify by source when possible</li>
                        <li>Include brief per-chunk rationale</li>
                        <li>Balance breadth vs. depth of coverage</li>
                        <li>Optional metadata for each source</li>
                        <li>Track which query variant retrieved each chunk</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Best Fit Use Cases:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Research-oriented queries</li>
                        <li>Multi-faceted or complex questions</li>
                        <li>Broad knowledge bases with diverse content</li>
                        <li>Educational applications</li>
                        <li>Natural language search interfaces</li>
                        <li>When recall matters more than latency</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#2f600f',
          notes: `### 10. RAG with Multi-Query Retrieval

#### Introduction to Multi-Query Retrieval

Welcome to slide 10, where we explore Multi-Query Retrieval, a powerful pattern that addresses one of RAG's biggest challenges: query ambiguity and limited recall. Think of this pattern as casting a wider net by asking the same question in multiple ways.

#### How Multi-Query Retrieval Works

The core idea is deceptively simple but remarkably effective. When a user submits a query like "How do I secure my API?", the system doesn't just search once. Instead, it uses an LLM to generate 3-5 variations of that query—perhaps "API security best practices," "Authentication methods for APIs," and "Preventing API vulnerabilities." Each variant captures a different facet or interpretation of the original question.

These query variations then execute **parallel retrieval** (👉 "pair-uh-lel ree-TREE-vul") operations against your vector database. This parallel approach is crucial because it doesn't add sequential latency—all searches happen simultaneously.

#### The Fusion Magic: RRF Algorithm

Now comes the sophisticated part: combining results. The system uses **Reciprocal Rank Fusion** (👉 "rih-SIP-ruh-kul rank FYOO-zhun"), or RRF, an algorithm that doesn't just merge results but intelligently weights them based on where documents appear across different query results. A document appearing in the top results of multiple queries gets boosted significantly.


After fusion, a **deduplication pipeline** removes similar or identical chunks. This is important because the same document might surface through multiple query variants, and you don't want to waste context window space on duplicates.

#### Components and Architecture

The architecture requires several key components working in concert. You'll need an LLM capable of generating quality query variations—this can be the same LLM you use for final answer generation or a smaller, faster model. Hybrid retrievers combine embedding-based semantic search with traditional keyword matching for better coverage.

The citation and source tracking system becomes more complex here because you need to trace which query variant retrieved each chunk. This metadata helps with debugging and transparency.

#### Context Packing Strategy

When packing context, you're balancing **breadth versus depth**. Do you include many diverse sources (breadth) or fewer sources with more complete information (depth)? Multi-query naturally leans toward breadth, so you might include a brief rationale for each chunk—explaining which query variant it satisfied.

#### Best Use Cases

This pattern shines in research-oriented applications where comprehensive answers matter more than sub-second response times. Educational platforms benefit enormously because student questions often lack precision. When your knowledge base is broad and diverse, multi-query helps surface relevant information that a single query might miss due to vocabulary mismatch or phrasing differences.

#### Transition to Next Slide

Now that we understand the power of multi-query retrieval, let's examine its strengths and limitations to understand when this added complexity is worth the investment.`
        },
        {
          id: 11,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Strong recall across diverse content</li>
                        <li>Robust to query phrasing variations</li>
                        <li>Better coverage of multi-faceted topics</li>
                        <li>Reduces dependency on perfect chunking</li>
                        <li>Mitigates vocabulary mismatch issues</li>
                        <li>Handles ambiguous queries effectively</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Increased API calls and token usage</li>
                        <li>Higher latency (multiple retrieval steps)</li>
                        <li>Potential for duplicated information</li>
                        <li>More complex fusion tuning required</li>
                        <li>Difficult to explain result rankings</li>
                        <li>Deduplication can lose important nuance</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#2f600f',
          notes: `### 11. Multi-Query Retrieval: Strengths and Limitations

#### Understanding the Tradeoffs

Every architectural pattern involves tradeoffs, and multi-query retrieval is no exception. Let's examine both sides honestly so you can make informed decisions.

#### Key Strengths

The most significant strength is **improved recall** (👉 "ree-CALL")—the ability to find relevant documents that a single query would miss. Imagine searching for "Python async patterns" versus "asynchronous programming in Python" versus "concurrent Python code examples." Different documents might match each variant better, and multi-query captures them all.

This pattern is remarkably **robust to phrasing variations**. Users rarely phrase questions optimally. A developer might ask "Why is my code slow?" when they mean "Python performance optimization techniques." Query variations help bridge these vocabulary mismatches.

For **multi-faceted topics**, this approach excels. A question like "How do I deploy a machine learning model?" touches deployment infrastructure, model serialization, API design, monitoring, and scaling. Different query variants can surface documents covering each facet.

The pattern **reduces chunking dependency**. If your chunking strategy isn't perfect (and it never is), multi-query provides a safety net by searching from multiple angles. A poorly chunked document might not surface for one query but appears for another variant.

#### Notable Limitations

The primary limitation is **cost and latency**. You're making multiple LLM calls: one to generate query variants, then multiple retrieval operations, then the final answer generation. While retrievals can run in parallel, you still pay for each one. In high-traffic systems, this can become expensive quickly.

**Token usage** increases significantly. You're not just paying for query generation and answer—you're also potentially packing more diverse chunks into your context window. Monitor your token consumption carefully.

**Fusion tuning complexity** is often underestimated. The RRF algorithm has parameters that need tuning for your specific domain. How much do you weight document rank versus frequency across queries? These choices significantly impact results but require experimentation and evaluation.

**Explainability suffers** because it's harder to explain why a document was retrieved. Did it match the original query, a variant, or multiple variants? This matters for debugging and building user trust, especially in regulated industries.

**Deduplication challenges** arise because you need to identify when two chunks are "similar enough" to be duplicates. Too aggressive and you lose important nuanced differences; too lenient and you waste context window space on redundancy.

#### Decision Framework

Use multi-query when **accuracy and coverage trump speed and cost**. Research tools, educational platforms, and knowledge management systems are ideal candidates. Avoid it for real-time applications where sub-100ms latency is critical, or when operating at massive scale where the cost multiplier becomes prohibitive.

#### Transition to HyDE

Next, we'll explore HyDE—a pattern that takes a completely different approach by searching with hypothetical answers instead of actual queries. Where multi-query asks "what are different ways to phrase my question?", HyDE asks "what would a good answer look like?" This conceptual shift opens up fascinating possibilities.`
        }
      ]
    },
    {
      id: 'pattern-5',
      title: 'RAG with HyDE',
      slides: [
        {
          id: 12,
          title: '5) RAG with HyDE (Hypothetical Document Embeddings)',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.2}>
                <div style={{ marginBottom: '30px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <MermaidPopover
                    diagram={`graph LR
    A[User Query:<br/>'How to secure JWT tokens?'] --> B[LLM: Generate<br/>Hypothetical Answer]
    B --> C[Hypothetical Doc:<br/>'JWT tokens should use...<br/>HMAC-SHA256, rotate keys...']
    C --> D[Embed Hypothetical<br/>Answer]
    D --> E[Vector Search on<br/>Real Documents]
    E --> F[Retrieve Similar<br/>Real Documents]
    F --> G[LLM: Final Answer<br/>from Real Docs]`}
                    triggerText="View HyDE Flow"
                  />
                </div>
              </GSAPAnimated>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <GSAPAnimated animation="slideInTop" delay={0.3}>
                  <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Components:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Hypothetical document generator (LLM)</li>
                        <li>Embedding model for hypo-docs</li>
                        <li>Vector database for real documents</li>
                        <li>Answer generation LLM</li>
                        <li>Optional blend with standard search</li>
                        <li>Hypo-doc quality evaluator (optional)</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.3}>
                  <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Retrieval Strategy:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Generate hypothetical answer/document from query</li>
                        <li>Embed hypothetical content (not the query)</li>
                        <li>Search by intent/answer similarity</li>
                        <li>Retrieve real documents with similar embeddings</li>
                        <li>Optional fusion with direct query search</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="rotateIn" delay={0.4}>
                  <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Context Packing Approach:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Use retrieved real documents for final context</li>
                        <li>Usually exclude hypothetical content from prompt</li>
                        <li>Include original query for transparency</li>
                        <li>Order by similarity to hypothetical document</li>
                        <li>Citation links to original sources</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" delay={0.4}>
                  <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Best Fit Use Cases:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Sparse-label domains with little training</li>
                        <li>Cold-start document collections</li>
                        <li>Web/FAQ search with varied phrasing</li>
                        <li>Technical content with jargon</li>
                        <li>Multi-lingual document retrieval</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a2d2e',
          notes: `### 12. RAG with HyDE (Hypothetical Document Embeddings)

#### The Conceptual Breakthrough

HyDE, pronounced "hide" like the word, represents a fascinating inversion of traditional retrieval logic. Instead of searching with your question, you search with what a good answer might look like. This seemingly counterintuitive approach yields remarkable results, especially in zero-shot scenarios.

#### Understanding the Problem HyDE Solves

Traditional semantic search has a fundamental mismatch problem. Queries and documents live in different linguistic spaces. A query might be "How do I prevent SQL injection?", which is a question format. But your documents contain statements like "SQL injection is prevented by using parameterized queries..." The embedding spaces for questions versus declarative statements differ significantly, reducing match quality.

HyDE bridges this gap brilliantly. It asks an LLM: "What would a good answer to this query look like?" The LLM generates a **hypothetical document** (👉 "hi-puh-THET-ih-kul DOK-yoo-ment")—a plausible answer based on its training. This hypothetical answer might be factually imperfect or even wrong, but that's okay! You're not using it as the final answer.

#### The HyDE Process Flow

Let's walk through a concrete example. User asks: "How to secure JWT tokens?" 


The LLM generates a hypothetical answer: "JWT tokens should use HMAC-SHA256 or RS256 algorithms, implement key rotation, validate all claims including expiration..." This hypothetical text is then **embedded**—converted to a vector representation.

Here's the key insight: you search your vector database using the **embedding of the hypothetical answer**, not the original query. Documents in your database that discuss JWT security best practices will have similar embeddings to this hypothetical answer because they're both in "declarative statement" format, not "question" format.

#### Why This Works Better

The embedding space alignment is superior. Both the hypothetical document and your real documents are statements of fact or instructions, using similar vocabulary and structure. The semantic similarity matching works better because you're comparing apples to apples, not questions to statements.

The LLM's prior knowledge helps formulate the hypothetical answer using domain-appropriate terminology. Even if your query uses layman's terms, the hypothetical document uses technical jargon that better matches your documentation.

#### Hybrid Approaches

Many production systems blend HyDE with traditional query search. You might retrieve 10 chunks using HyDE and 5 using direct query embedding, then merge them. This hedges against cases where the hypothetical document leads you astray.

#### Architecture Considerations

The hypothetical document generator can be a smaller, faster LLM than your answer generation model. Some systems use GPT-3.5 for hypothesis generation and GPT-4 for final answering. The hypothesis doesn't need to be perfect—it just needs to be in the right semantic neighborhood.

A **hypo-doc quality evaluator** is optional but valuable. It can assess whether the generated hypothesis seems on-topic before using it for retrieval, preventing wildly off-base searches when the LLM hallucinates.

#### Best Use Cases

HyDE excels in **cold-start scenarios** where you haven't fine-tuned embeddings on your specific domain. It leverages the LLM's broad training to bridge vocabulary gaps immediately.

For **multi-lingual retrieval**, HyDE can generate a hypothetical answer in the document language, even if the query was in another language, improving cross-lingual search.

**Technical content with jargon** benefits because the LLM translates casual queries into proper technical terminology in the hypothesis.

#### Transition to Next Slide

While HyDE offers elegant solutions to semantic search challenges, it introduces new tradeoffs. Let's examine when this pattern shines and when simpler approaches might be better.`
        },
        {
          id: 13,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <GSAPAnimated animation="flipCard" delay={0.3}>
                  <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Zero-shot retrieval performance gains</li>
                        <li>Better handling of ambiguous/short queries</li>
                        <li>Bridges vocabulary mismatch gap</li>
                        <li>Works with any existing vector DB</li>
                        <li>More natural search by predicted answer</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.5}>
                  <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Can mislead if LLM is out-of-domain</li>
                        <li>Extra latency from LLM generation step</li>
                        <li>Quality depends on hypo-doc generation</li>
                        <li>Increased API costs (additional LLM call)</li>
                        <li>May introduce bias from LLM priors</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a2d2e',
          notes: `### 13. HyDE: Strengths and Limitations

#### The Power of Zero-Shot Improvement

HyDE's greatest strength is **zero-shot performance gain**. You don't need to fine-tune embeddings, collect training data, or adjust your vector database. Simply add a hypothesis generation step, and retrieval quality often improves immediately, especially for out-of-domain queries.

The pattern **handles ambiguous or short queries** exceptionally well. A terse query like "JWT security" gets expanded into a rich hypothetical document discussing token signing, algorithm selection, key rotation, claim validation, and more. This expansion provides multiple semantic anchors for matching relevant documents.

**Vocabulary mismatch** is one of RAG's persistent challenges. Users say "cheap cloud storage" while your docs say "cost-effective object storage solutions." HyDE's LLM naturally translates colloquial language into domain terminology when generating the hypothesis, dramatically improving match quality.

The implementation **works with existing infrastructure**. No need to rebuild indexes or deploy new databases. HyDE is a retrieval-time pattern that slots into your current pipeline with minimal changes.

#### Understanding the Limitations

The most critical limitation is **domain mismatch risk**. If your LLM wasn't trained on your specific domain, the hypothetical document might use incorrect terminology or concepts. Imagine asking about a proprietary internal system—the LLM might generate a plausible-sounding but completely wrong hypothesis, leading you to irrelevant documents.

**Additional latency** is unavoidable. You're adding an entire LLM generation step before retrieval even begins. While this might only add 500-1000ms, it's sequential latency that compounds with other processing steps. For interactive applications, every millisecond counts.

**Cost implications** are straightforward but significant. Each query now requires generating a hypothetical document (consuming tokens proportional to the hypothesis length) plus your normal retrieval and answer generation costs. At scale, this can double your LLM API expenses.

**Quality dependency** creates brittleness. If your hypothesis generator produces low-quality or off-topic hypotheses, your entire retrieval pipeline suffers. Some queries might confuse the LLM, leading to vague or generic hypotheses that match poorly with your specific documents.

**Bias introduction** is subtle but important. The LLM's training biases influence the hypothetical document. If the LLM has strong priors about what answers "should" look like, it might steer retrieval away from valid but unconventional documents in your corpus.

#### Hybrid Strategy Recommendations

Many teams start with a **safety-first hybrid**: retrieve using both HyDE and traditional query embedding, then use a reranker to select the best results from the combined pool. This adds complexity but provides fallback if HyDE misfires.

Another approach is **selective HyDE**: use simple heuristics to detect when a query would benefit from HyDE (ambiguous, short, colloquial language) versus when direct query search suffices (specific, technical, uses domain terminology).

#### Evaluation is Critical

With HyDE, **rigorous evaluation** becomes non-negotiable. Create test sets with ground-truth query-document pairs and measure retrieval quality with and without HyDE. Monitor for cases where HyDE degrades rather than improves results, and implement fallback logic.

#### When to Use HyDE

Choose HyDE for **FAQ systems** where questions are phrased colloquially but documentation is formal. Deploy it in **multi-lingual scenarios** where hypothesis generation in the document language improves matching. Use it for **cold-start applications** where you can't yet fine-tune embeddings on domain data.

Avoid HyDE for **highly specialized domains** where general-purpose LLMs lack knowledge, or **latency-critical applications** where the extra generation step is unacceptable.

#### Transition to Parent-Child Retrieval

Next, we'll shift gears to address a different RAG challenge: the tension between precise matching and comprehensive context. Parent-child retrieval offers an elegant solution through hierarchical chunking.`
        }
      ]
    },
    {
      id: 'pattern-6',
      title: 'RAG with Parent–Child Retrieval',
      slides: [
        {
          id: 14,
          title: '6) RAG with Parent–Child Retrieval',
          icon: { name: 'duo-circle-nodes' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <GSAPAnimated animation="bounceIn" delay={0.3}>
                  <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Components:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Two-level chunking system (child/parent)</li>
                        <li>Hierarchical document processor</li>
                        <li>Child chunk embedding pipeline</li>
                        <li>Parent document retriever/store</li>
                        <li>Optional sibling chunk fetcher</li>
                        <li>Windowing mechanism</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Retrieval Strategy:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Index small child chunks for precise matching</li>
                        <li>Search for matching child chunks</li>
                        <li>Retrieve corresponding parent documents</li>
                        <li>Optional sibling retrieval for related context</li>
                        <li>Return parent content (not child chunks)</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Context Packing Approach:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Pack full parent spans for broader context</li>
                        <li>Optional sliding window for overlapping context</li>
                        <li>Include document structure metadata</li>
                        <li>Manage length via document windowing</li>
                        <li>Metadata-enhanced citations</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.4}>
                  <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Best Fit Use Cases:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Technical documentation and manuals</li>
                        <li>Legal and regulatory documents</li>
                        <li>Academic papers and research</li>
                        <li>Codebases and technical specs</li>
                        <li>Long-form structured content</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#3e1625',
          notes: `### 14. RAG with Parent-Child Retrieval

#### The Chunking Dilemma

Every RAG system faces a fundamental tension: small chunks enable precise matching but lack context; large chunks provide rich context but dilute match precision. Parent-child retrieval elegantly resolves this dilemma through hierarchical chunking.

#### How Parent-Child Retrieval Works

Imagine a technical document about Kubernetes networking. In parent-child retrieval, you create two levels of chunks. **Child chunks** might be single paragraphs or small sections—perhaps 100-200 tokens. These are small and semantically focused, perfect for precise matching.

**Parent chunks** are larger sections containing multiple child chunks—perhaps 800-1200 tokens. They might be entire document sections, multiple related paragraphs, or even whole chapters.

Here's the magic: you **index and search the child chunks**, but you **return the parent chunks** to the LLM. This gives you precision during retrieval and context during generation.

#### Concrete Example

Consider searching "How does Kubernetes service discovery work?" Your child chunks might include:
- Child 1: "Service discovery in Kubernetes uses DNS..."
- Child 2: "The kube-dns component provides..."
- Child 3: "Services expose endpoints through..."

Child 2 matches best. But instead of returning just that paragraph, you return its parent: a 1000-token section covering DNS, kube-dns, CoreDNS, service endpoints, and DNS caching. The LLM gets precise relevant content plus surrounding context for coherent answers.

#### Sibling and Window Strategies

Some implementations also retrieve **sibling chunks**—other children of the same parent. If Child 2 matched, you might also grab Child 1 and Child 3, even if they didn't match directly, because they're part of the same conceptual unit.

**Sliding windows** provide overlapping context. Parent chunks might overlap by 20-30%, ensuring that information at chunk boundaries isn't lost. This is especially important for documents where key information spans section boundaries.

#### Hierarchical Processing Pipeline

The **ingestion pipeline** becomes more sophisticated. You need to:
1. Parse document structure (sections, subsections)
2. Create parent chunks respecting natural boundaries
3. Split parents into child chunks
4. Maintain bidirectional references (child→parent, parent→children)
5. Embed only child chunks
6. Store parent content separately

This adds complexity but pays dividends in retrieval quality.

#### Document Structure Metadata

Including **structural metadata** enhances answer quality. Tags like "section: networking", "subsection: service discovery", "document: kubernetes-guide" help the LLM understand where information fits in the broader document context.

#### Technical Documentation Sweet Spot

This pattern **excels for technical documentation** because these documents have clear hierarchical structure (chapters, sections, subsections) and benefit from context. A code example makes more sense when you see the explanation before and after it.

**Legal documents** with nested clauses, **academic papers** with introduction-method-results structure, and **API documentation** with endpoint groupings all benefit enormously from parent-child retrieval.

#### Implementation Considerations

**Parent size tuning** is critical. Too small and you don't get enough context benefit; too large and you waste tokens on irrelevant information. Typical parent sizes range from 500-1500 tokens depending on document characteristics.

Some systems use **multi-level hierarchies**: grandparent→parent→child. This provides even more flexibility but increases complexity.

#### Storage Implications

You're essentially storing documents twice: once as embedded child chunks and again as parent content. For large corpora, this can significantly increase storage requirements. Plan accordingly.

#### Transition to Next Slide

Parent-child retrieval offers compelling benefits for structured content, but it's not free. Let's examine the tradeoffs to understand when this added complexity delivers enough value to justify the implementation effort.`
        },
        {
          id: 15,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <GSAPAnimated animation="rotateIn" delay={0.3}>
                  <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Balances precise matching with rich context</li>
                        <li>Improves answer coherence and accuracy</li>
                        <li>Reduces hallucinations with fuller context</li>
                        <li>Preserves document structure/hierarchy</li>
                        <li>Works well for nested/complex documents</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="rotateIn" delay={0.5}>
                  <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>More complex ingestion pipeline</li>
                        <li>Higher token consumption (larger contexts)</li>
                        <li>Additional storage requirements</li>
                        <li>Potential for context dilution</li>
                        <li>Requires careful parent size tuning</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#3e1625',
          notes: `### 15. Parent-Child Retrieval: Strengths and Limitations

#### The Power of Hierarchical Context

Parent-child retrieval delivers **remarkable answer quality improvements** in practice. By providing the LLM with broader context around precisely matched content, you dramatically reduce hallucinations and improve coherence. The LLM can see how concepts relate and flow naturally from surrounding content.

**Structured document preservation** is often overlooked but crucial. When you maintain parent-child relationships, you preserve the original document structure that authors carefully crafted. Section headings, introductory paragraphs, and transitional content that provide context aren't lost to chunking.

For **nested and complex documents**, this pattern is almost essential. Think of API documentation where an endpoint description includes prerequisites, parameters, request examples, response schemas, and error codes. Returning just the matched paragraph about parameters without seeing the full endpoint context produces incomplete answers.

The **precision-recall balance** is superior to fixed chunking. Small child chunks ensure you match precisely what the query asks for, while parent chunks ensure you don't lose critical context that makes the match meaningful.

#### Understanding the Costs

**Implementation complexity** is the first barrier. Your ingestion pipeline needs to understand document structure, create hierarchies, maintain bidirectional references, and handle edge cases like documents without clear structure. This is significantly more complex than naive chunking.

**Token consumption increases** because parent chunks are larger than typical fixed chunks. If you were retrieving 5 chunks of 200 tokens (1000 tokens total), you might now retrieve 3 parents of 800 tokens (2400 tokens total). At scale, this impacts both cost and latency.

**Storage doubles** or more. You're storing embedded child chunks plus full parent content. For a 100GB document corpus, you might need 200-250GB after implementing parent-child retrieval. Budget for this in your infrastructure planning.

**Context dilution risk** emerges when parent chunks are too large. Including a 2000-token parent might provide useful context, but it might also include tangential information that confuses the LLM or competes for attention with the relevant content.

**Tuning parent size** is non-trivial and document-type dependent. Legal documents might need 1500-token parents; code documentation might work best with 500-token parents. There's no universal setting, requiring experimentation and evaluation per domain.

#### When Parent-Child Shines

This pattern **excels for documentation** where structure matters and context improves comprehension. Technical manuals, developer documentation, knowledge bases with well-structured content—all benefit enormously.

**Long-form content** like academic papers, research reports, and books work well because the hierarchical structure (chapters, sections, subsections) naturally maps to parent-child relationships.

Avoid parent-child for **unstructured content** like chat logs, emails, or social media where there's no clear hierarchy. Also avoid it for **short documents** where parent chunks would encompass entire documents, eliminating the precision benefit.

#### Optimization Strategies

Consider **adaptive parent sizing**: dynamically determine parent size based on document structure rather than fixed token counts. A parent could be "the current section" regardless of length, with maximum caps.

Implement **partial parent retrieval**: analyze which portions of the parent are most relevant and trim less relevant parts before sending to the LLM, balancing context with efficiency.

Use **parent caching**: if multiple child chunks from the same parent are retrieved, include that parent only once in the context, saving tokens.

#### Transition to Graph-Based Retrieval

Where parent-child retrieval preserves hierarchical document structure, graph-based retrieval takes a fundamentally different approach: representing knowledge as entities and relationships. This enables multi-hop reasoning and relationship-centric retrieval that hierarchical structures can't provide.`
        }
      ]
    },
    {
      id: 'pattern-7',
      title: 'RAG with Graph-Based Retrieval',
      slides: [
        {
          id: 16,
          title: '7) RAG with Graph-Based Retrieval (GraphRAG)',
          icon: { name: 'duo-circle-nodes' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <MermaidPopover
                    diagram={`graph TD
    A[Query: Who funded<br/>Company X?] --> B[Entity<br/>Extraction]
    B --> C[Entity: Company X]
    C --> D[Graph Query:<br/>Cypher/SPARQL]
    D --> E[(Knowledge Graph)]
    E --> F[Investor A]
    E --> G[Investor B]
    F --> H[Vector Search:<br/>Related Docs]
    G --> H
    H --> I[Merged Context]
    I --> J[LLM Answer]
    style E fill:#4fc3f7
    style C fill:#81c784`}
                    triggerText="View GraphRAG Architecture"
                  />
                </div>
              </GSAPAnimated>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Components:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Knowledge graph (e.g., Neo4j)</li>
                        <li>Entity/relationship extraction</li>
                        <li>Vector database (semantic search)</li>
                        <li>Graph query engine (e.g., Cypher)</li>
                        <li>Text2Cypher or Cypher templates</li>
                        <li>Community detection/summarization</li>
                        <li>Path processors and result mergers</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Retrieval Strategy:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Graph-enhanced vector search</li>
                        <li>Entity linking to relevant nodes</li>
                        <li>Multi-hop traversal with depth control</li>
                        <li>Graph + vector hybrid ranking</li>
                        <li>Global/local community detection</li>
                        <li>Cypher query generation from natural language</li>
                        <li>Salient path extraction and reasoning</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" delay={0.4}>
                  <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Context Packing Approach:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Include path structure and relationships</li>
                        <li>Entity-focused contextual assembly</li>
                        <li>Incorporate community summaries</li>
                        <li>Add schema/ontology context</li>
                        <li>Include graph visualization references</li>
                        <li>Structured knowledge triples with source citation</li>
                        <li>Hierarchical context from graph structure</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.4}>
                  <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Best Fit Use Cases:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Compliance and regulatory applications</li>
                        <li>Enterprise knowledge management</li>
                        <li>Complex research analysis</li>
                        <li>Healthcare/biomedical knowledge</li>
                        <li>Financial relationship analysis</li>
                        <li>Multi-document summarization</li>
                        <li>Legal reasoning applications</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#58600f',
          notes: `### 16. RAG with Graph-Based Retrieval (GraphRAG)

#### The Relationship Revolution

GraphRAG, or Graph-Based RAG, represents a paradigm shift from document-centric to **relationship-centric** knowledge retrieval. Instead of treating documents as isolated text chunks, we model information as entities connected by explicit relationships in a knowledge graph.

#### What is a Knowledge Graph?

A **knowledge graph** (👉 "NOL-ij graf") is a structured representation where entities (people, companies, products, concepts) are nodes, and relationships (founded_by, works_for, located_in) are edges. Think of LinkedIn's professional network or Google's Knowledge Graph showing facts about entities in search results.

For example, instead of storing "Microsoft was founded by Bill Gates in 1975" as text, a knowledge graph stores:
- Node: Microsoft (Company)
- Node: Bill Gates (Person)  
- Edge: FOUNDED_BY connecting them, with property: year=1975

#### The GraphRAG Architecture


When a query arrives, GraphRAG first **extracts entities** mentioned—perhaps "Company X". It then queries the knowledge graph using languages like **Cypher** (👉 "SY-fer") for Neo4j or SPARQL for RDF graphs. These queries can traverse relationships: "Find all nodes connected to Company X by FUNDED_BY relationships."

The retrieved entities and relationships are then used to enhance or guide vector search, creating a **hybrid retrieval** strategy that leverages both structured knowledge and semantic similarity.

#### Multi-Hop Reasoning

One of GraphRAG's superpowers is **multi-hop traversal** (👉 "MUL-tee hop truh-VER-sul"). Questions like "Who are the investors in companies that employ former Google engineers?" require reasoning across multiple relationship steps:
1. Find Person nodes with WORKED_AT → Google
2. Find Company nodes with EMPLOYS → those persons  
3. Find Person/Entity nodes with INVESTED_IN → those companies

Traditional vector search struggles with this compositional reasoning; graphs handle it naturally.

#### Entity Extraction Pipeline

Building GraphRAG requires sophisticated **entity and relationship extraction**. Modern approaches use:
- Named Entity Recognition (NER) models to identify entities
- Relation Extraction models to detect relationships
- Entity linking to disambiguate (which "Apple"—fruit or company?)
- Coreference resolution to track entities across documents

This ingestion complexity is significant but pays dividends at query time.

#### Community Detection

Advanced GraphRAG implementations use **community detection** (👉 "kuh-MYOO-nih-tee dee-TEK-shun") algorithms to identify clusters of densely connected entities. Microsoft's GraphRAG paper emphasizes generating summaries of these communities, providing "global" context about topic areas alongside "local" context from specific retrieved chunks.

#### Text2Cypher: Natural Language to Graph Queries

**Text2Cypher** systems use LLMs to convert natural language queries into Cypher database queries. "Who funded Microsoft?" becomes a MATCH query selecting companies with FUNDED_BY relationships. This enables non-technical users to query complex graph structures.

However, Text2Cypher reliability remains challenging. Graph schemas can be complex, and LLMs sometimes generate syntactically valid but semantically wrong queries.

#### Context Packing with Graph Structure

When packing context, GraphRAG includes **relationship paths** explicitly: "Microsoft -[FOUNDED_BY]-> Bill Gates -[INVESTED_IN]-> OpenAI". This structured format helps LLMs understand the knowledge provenance and relationship types.

**Ontology context**—explaining what relationship types mean—helps the LLM interpret graph data correctly. Include schema information like "FUNDED_BY means a Person or Entity provided capital investment."

#### Best Use Cases

GraphRAG excels in domains with rich, explicit relationships. **Compliance and regulatory** applications tracking policy changes and their impact. **Healthcare** connecting diseases, treatments, genes, and clinical trials. **Financial analysis** mapping ownership, investments, and business relationships.

**Legal reasoning** benefits from tracking case citations, precedents, and statutory relationships. **Research analysis** connecting papers, authors, institutions, and concepts.

Avoid GraphRAG for unstructured content without clear entities/relationships, or when implementation complexity outweighs benefits.

#### Transition to Strengths and Limitations

Graph-based retrieval offers powerful capabilities but demands significant engineering investment. Let's examine when this complexity delivers sufficient value to justify the operational overhead.
        },
        {
          id: 17,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <GSAPAnimated animation="slideInBottom" delay={0.3}>
                  <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Explicit relationship understanding</li>
                        <li>Multi-hop reasoning capabilities</li>
                        <li>Explainable retrieval paths</li>
                        <li>Global context accessibility</li>
                        <li>Entity-centric knowledge integration</li>
                        <li>Structured knowledge representation</li>
                        <li>Better handling of complex questions</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInTop" delay={0.3}>
                  <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Heavy ingestion/ontology requirements</li>
                        <li>Higher complexity in maintenance</li>
                        <li>Entity extraction quality dependencies</li>
                        <li>Graph schema design challenges</li>
                        <li>Computational overhead for traversals</li>
                        <li>Text2Cypher reliability issues</li>
                        <li>Higher operational expertise needed</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#58600f',
          notes: `### 17. GraphRAG: Strengths and Limitations

#### The Power of Explicit Relationships

GraphRAG's fundamental advantage is **explicit relationship modeling**. Where vector similarity says "these documents are semantically similar," graphs say "Company A ACQUIRED Company B on 2023-05-15 for $50M." This explicit structure enables reasoning that semantic search simply cannot provide.

**Multi-hop reasoning** unlocks compositional questions. "What drugs treat diseases connected to genes affected by this mutation?" requires traversing: Mutation → Gene → Disease → Treatment. Each hop filters and focuses the search, building a logical chain of evidence.

**Explainability** reaches new levels. You can show users the exact path through the knowledge graph that led to an answer: "We found this because Entity A is connected to Entity B via relationship C, which links to Entity D through relationship E." This transparency builds trust, especially in high-stakes domains like healthcare or finance.

**Global context accessibility** through community summarization (as in Microsoft's GraphRAG) provides high-level topical overviews alongside specific facts. The system can answer both "tell me about AI ethics" (community summary) and "what ethical concerns did Paper X raise?" (specific retrieval).

**Entity-centric integration** naturally connects information across documents. All facts about "TensorFlow" aggregate regardless of which document mentioned it, providing comprehensive entity profiles impossible with isolated chunk retrieval.

#### Understanding the Heavy Costs

**Ingestion complexity** is GraphRAG's biggest barrier. You need:
- Entity extraction (NER models, linking, disambiguation)
- Relationship extraction (relation classifiers)
- Graph schema design (ontology engineering)
- Quality assurance (manual review cycles)
- Continuous updates as new information arrives

This can take months of ML engineering effort before you retrieve your first result.

**Ontology and schema design** requires domain expertise. What entities matter? What relationships exist? How should they be typed? A poorly designed schema leads to brittle queries and limited expressiveness. Yet over-engineering creates unwieldy complexity.

**Entity extraction quality** becomes a hard dependency. If your NER model misses "Apple" as a company or conflates "Apple Inc." with "Apple Records," your entire graph suffers. Garbage in, garbage out—at a structural level.

**Computational overhead** for graph traversals can be significant. A poorly optimized multi-hop query across millions of nodes can timeout. Graph databases require careful indexing, query optimization, and often more powerful hardware than vector databases.

**Text2Cypher reliability** remains an active research problem. While impressive, LLM-generated queries sometimes:
- Use non-existent relationship types
- Create infinite loops in traversals
- Misinterpret query intent
- Generate syntactically valid but semantically wrong queries

Manual query templates work reliably but limit flexibility to predefined patterns.

**Operational expertise** demands graph database knowledge (Neo4j, Neptune, TigerGraph), Cypher/SPARQL query languages, graph algorithms, and ML pipelines for entity extraction. This is a substantial team capability requirement.

#### When GraphRAG is Worth It

Deploy GraphRAG when **relationship-based reasoning is core** to your use case. Financial fraud detection (tracking money flows), drug discovery (connecting biological entities), compliance tracking (policy impact chains), and legal reasoning (case precedents) all require explicit relationship modeling.

Avoid GraphRAG for **simple FAQ or documentation** search where semantic similarity suffices. The complexity overhead isn't justified. Also avoid when your domain lacks clear entities and relationships—not all knowledge naturally fits graph structure.

#### Hybrid Approaches: The Practical Middle Ground

Many production systems use **graph + vector hybrid**: maintain both a knowledge graph for structured queries and a vector database for semantic search. Route queries intelligently: entity-relationship questions go to the graph; open-ended semantic queries go to vectors.

Some teams start with vector-only RAG, then incrementally add graph capabilities for specific query types, gradually building the graph infrastructure as value is proven.

#### The Future of GraphRAG

Tools like Microsoft's GraphRAG framework, Neo4j's LangChain integrations, and emerging libraries are reducing implementation complexity. As entity extraction and Text2Cypher mature, expect GraphRAG to become more accessible.

#### Transition to External Tools and Agents

While GraphRAG extends retrieval with structured knowledge, our next pattern—External Tools and Agents—takes a fundamentally different approach: instead of pre-indexing knowledge, it retrieves information dynamically from live systems and external APIs at query time.`
        }
      ]
    },
    {
      id: 'pattern-8',
      title: 'RAG with External Tools / Agents',
      slides: [
        {
          id: 18,
          title: '8) RAG with External Tools / Agents',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <MermaidPopover
                    diagram={`graph TD
    A[User Query] --> B[Agent Planner]
    B --> C{Select Tool}
    C -->|Need Data| D[SQL Query Tool]
    C -->|Need Search| E[Web Search Tool]
    C -->|Need Calculation| F[Python Code Tool]
    D --> G[Execute & Store Result]
    E --> G
    F --> G
    G --> H{More Tools<br/>Needed?}
    H -->|Yes| B
    H -->|No| I[RAG Retrieval]
    I --> J[LLM Final Answer]
    style B fill:#4fc3f7
    style I fill:#81c784`}
                    triggerText="View Agent Tool Flow"
                  />
                </div>
              </GSAPAnimated>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <GSAPAnimated animation="rotateIn" delay={0.3}>
                  <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Components:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Agent planner (ReAct, Plan-Execute)</li>
                        <li>Toolset (SQL, APIs, search engines, code)</li>
                        <li>External knowledge sources (databases, APIs)</li>
                        <li>Working memory/state management</li>
                        <li>Verification module/guardrails</li>
                        <li>Tool-use capable LLM</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" delay={0.3}>
                  <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Retrieval Strategy:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Tool-augmented retrieval (SQL, API calls)</li>
                        <li>Iterative planning with decomposition</li>
                        <li>Multi-tool orchestration</li>
                        <li>Verification of information accuracy</li>
                        <li>Feedback loops and self-correction</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Context Packing Approach:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Scratchpad traces for tool executions</li>
                        <li>Selective tool outputs (summarized)</li>
                        <li>Citation of retrieved information</li>
                        <li>State tracking across reasoning steps</li>
                        <li>Memory of prior interactions/steps</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Best Fit Use Cases:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Business intelligence assistants</li>
                        <li>Operations/SRE copilots</li>
                        <li>Research analysis agents</li>
                        <li>Data exploration interfaces</li>
                        <li>Complex workflow automation</li>
                        <li>System integration assistants</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#2e1e1a',
          notes: `### 18. RAG with External Tools and Agents

#### Breaking Free from Static Knowledge

Traditional RAG is fundamentally limited to pre-indexed, static knowledge. What happens when you need live data—current stock prices, real-time metrics, database queries, API calls, or computational results? **Tool-augmented RAG** with agents bridges this gap.

#### What are AI Agents with Tools?

An **AI agent** (👉 "A-I AY-jent") is an LLM-powered system that can autonomously plan actions, select and use tools, and iteratively work toward solving a task. Think of it as giving your RAG system hands—it can query databases, call APIs, execute code, search the web, and more.

#### Agent Frameworks: ReAct and Plan-Execute

**ReAct** (Reason + Act) is a popular pattern where the agent alternates between reasoning about what to do next and taking actions. For example:
1. Thought: "I need current revenue data to answer this"
2. Action: Execute SQL query on revenue database
3. Observation: Revenue = $2.5M in Q3
4. Thought: "Now I need to compare to Q2"
5. Action: Execute SQL query for Q2
6. Observation: Q2 revenue = $2.1M
7. Thought: "I have enough information to answer"
8. Final Answer: "Revenue increased 19% from Q2 to Q3..."

**Plan-Execute** separates planning from execution: first, create a multi-step plan, then execute each step sequentially, adapting the plan if needed.


#### The Tool Ecosystem

Agents can use diverse tools:
- **SQL/Database tools**: Query structured data sources
- **API tools**: Call REST APIs for real-time information
- **Search tools**: Web search, documentation search
- **Code execution**: Run Python/JavaScript for calculations
- **RAG retrieval**: Yes, RAG itself becomes a tool!
- **Custom tools**: Domain-specific integrations

Each tool has a description the agent uses to decide when to invoke it. Tool selection is critical—agents must choose the right tool for each subtask.

#### Working Memory and State Management

Unlike stateless RAG, agents maintain **working memory** (👉 "WERK-ing MEM-or-ee")—a scratchpad tracking:
- Tools used so far
- Results from each tool invocation
- Current reasoning state
- Remaining subtasks

This state enables multi-step workflows where later steps build on earlier results.

#### Verification and Guardrails

With great power comes great responsibility. Agents can make mistakes—executing wrong SQL queries, misinterpreting API responses, or entering infinite loops. Production systems need:
- **Guardrails**: Preventing dangerous operations (DELETE without WHERE clauses)
- **Verification modules**: Checking tool output sanity
- **Timeout mechanisms**: Preventing runaway executions
- **Cost limits**: Capping tool invocations per query
- **Human-in-the-loop**: Requiring approval for sensitive operations

#### Context Packing with Tool Traces

The final context includes **scratchpad traces**—showing the agent's reasoning steps and tool executions. This provides transparency but consumes significant tokens. Smart systems summarize tool outputs rather than including raw results.

For example, instead of including 1000 rows from a SQL query, summarize: "Query returned 1,000 revenue transactions totaling $2.5M across 50 customers."

#### Tool Integration Complexity

Each tool requires an integration:
- Tool description for agent selection
- Input/output schema definition
- Error handling and retry logic
- Authentication/authorization
- Rate limiting and cost controls

Maintaining this toolset is ongoing work as APIs evolve and new tools are added.

#### Best Use Cases

**Business intelligence assistants** excel with tool-augmented RAG—"What were sales in the midwest region last quarter?" requires database queries, not just document retrieval.

**Operations and SRE copilots** can check logs, query metrics systems, restart services, and retrieve runbook documentation—combining live system access with static knowledge.

**Research analysis agents** can search literature databases, fetch papers, run statistical analyses, and synthesize findings—orchestrating multiple specialized tools.

#### Transition to Limitations

Tool-augmented RAG unlocks powerful capabilities but introduces new complexity dimensions. Let's examine when this sophistication is warranted versus when simpler approaches suffice.`
        },
        {
          id: 19,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}>
                </div>
              </GSAPAnimated>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <GSAPAnimated animation="scaleIn" delay={0.3}>
                  <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Handles complex, multi-step tasks</li>
                        <li>Accesses live/external data sources</li>
                        <li>Flexible orchestration capabilities</li>
                        <li>Autonomous problem-solving</li>
                        <li>Adaptability to changing requirements</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.5}>
                  <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Increased latency (multiple tool calls)</li>
                        <li>Higher cost per interaction</li>
                        <li>Monitoring/debugging complexity</li>
                        <li>Error propagation risks</li>
                        <li>Requires robust guardrails</li>
                        <li>Tool integration maintenance</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#2e1e1a',
          notes: `### 19. External Tools/Agents: Strengths and Limitations

#### The Power of Dynamic Information Access

Tool-augmented RAG with agents delivers **unmatched flexibility** for handling diverse, complex tasks. Unlike pure RAG locked into static documents, agents can adapt to virtually any information need by selecting and orchestrating appropriate tools dynamically.

**Multi-step task handling** becomes natural. A query like "Compare our Q3 sales to competitors and explain any discrepancies" requires: querying internal databases, searching competitor reports, performing calculations, and synthesizing insights. Agents decompose this automatically.

**Live data access** transforms RAG from a historical knowledge system to a real-time intelligence platform. Stock prices, server metrics, customer counts, API status—information that changes minute-by-minute becomes accessible alongside static documentation.

**Autonomous problem-solving** means agents can recover from failures and adapt. If one API times out, try an alternative. If data is missing, search for proxy information. This resilience is impossible with rigid retrieval pipelines.

**Adaptability to changing requirements** is crucial in production. Need a new data source? Add a tool and its description—the agent automatically incorporates it into its decision-making without rewriting retrieval logic.

#### The Considerable Costs and Risks

**Latency multiplies dramatically**. Each tool invocation adds round-trip time: LLM reasoning (500ms), tool execution (200-2000ms depending on the tool), result processing (300ms). With 3-5 tool calls common in complex queries, total latency can reach 10-30 seconds—unacceptable for interactive applications.

**Cost per interaction skyrockets**. You're paying for:
- Planning LLM calls
- Tool selection reasoning
- Per-tool execution costs (API charges, compute)
- Result synthesis
- Final answer generation

A single complex query might consume 10-20× the tokens of basic RAG.

**Monitoring and debugging complexity** increases exponentially. When something goes wrong, you must trace through: which tools were selected, in what order, with what parameters, what each returned, how the agent reasoned about results. Standard logging isn't sufficient—you need specialized agent observability tools.

**Error propagation** is insidious. A SQL query with a subtle bug returns plausible but wrong data. The agent uses this to make decisions. Downstream tools execute based on faulty information. The final answer is confidently wrong with no obvious error signal.

**Guardrail requirements** are non-negotiable but challenging to implement correctly. You need to prevent:
- SQL injection in generated queries
- Destructive operations (DELETE, DROP)
- Unauthorized data access
- Runaway loops consuming resources
- Sensitive information leakage

Each requires careful design and testing.

**Tool integration maintenance** becomes a perpetual burden. APIs change, databases evolve, authentication methods update. Each tool in your ecosystem requires ongoing maintenance, version compatibility testing, and error handling updates.

#### When Tool-Augmented RAG Shines

Deploy agents when **task complexity and information needs exceed what static retrieval can provide**. Business intelligence, operations automation, and research analysis are prime candidates where the flexibility justifies the complexity.

Use agents when **combining multiple information sources** is core to answering questions. If queries routinely require joining data from databases, APIs, document stores, and computational tools, agents provide elegant orchestration.

#### When to Avoid Agents

Skip agents for **high-frequency, latency-sensitive applications**. Real-time chatbots, autocomplete systems, or anything requiring sub-second response times won't tolerate agent overhead.

Avoid agents for **simple lookup tasks**. If 90% of queries can be answered by retrieving documents, adding agent complexity is over-engineering. Start simple, add agents only when proven necessary.

Don't use agents without **proper observability infrastructure**. Flying blind with agents leads to production disasters. Invest in logging, tracing, and monitoring before deploying agent-based systems.

#### Hybrid Strategies

Many production systems use **selective agent activation**: classify incoming queries and route simple ones to standard RAG, complex ones to agents. This optimizes the latency/capability tradeoff.

Some teams implement **agent fallback**: try standard RAG first, invoke agents only when confidence is low or explicit tool indicators are detected ("show me current...","calculate...","query database...").

#### Transition to RAG + Fine-Tuned Models

While agents add dynamic flexibility, our next pattern—combining RAG with fine-tuned models—takes the opposite approach: baking domain knowledge directly into the LLM weights for improved efficiency and quality in specialized domains.`
        }
      ]
    },
    {
      id: 'pattern-9',
      title: 'RAG + Fine-Tuned Model Hybrid',
      slides: [
        {
          id: 20,
          title: '9) RAG + Fine-Tuned Model Hybrid',
          icon: { name: 'duo-brain-circuit' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}></div>
              </GSAPAnimated>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <GSAPAnimated animation="slideInTop" delay={0.3}>
                  <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Components:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Base/general LLM for retrieval</li>
                        <li>Retriever (vector store + embedding model)</li>
                        <li>Evaluator for quality control</li>
                        <li>Schema validators</li>
                        <li>Rollout controls/deployment framework</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.3}>
                  <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Retrieval Strategy:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Standard advanced retrieval approaches</li>
                        <li>Domain-optimized retrieval parameters</li>
                        <li>Tighter similarity thresholds (domain focus)</li>
                        <li>May utilize domain-specific embeddings</li>
                        <li>Can leverage domain knowledge in fine-tuning</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.4}>
                  <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Context Packing Approach:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Leaner prompts (less instruction overhead)</li>
                        <li>Schema-aware formatting instructions</li>
                        <li>Domain-specific templates</li>
                        <li>Few-shot patterns for complex structures</li>
                        <li>Potentially lower context requirements</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.6}>
                  <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Best Fit Use Cases:</span></strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>High-volume domain QA systems</li>
                        <li>Structured output generation</li>
                        <li>Regulated industries with format requirements</li>
                        <li>Domain-specific copilots</li>
                        <li>Knowledge-intensive professional services</li>
                        <li>Financial/legal/healthcare applications</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#163e3e',
          notes: `### 20. RAG + Fine-Tuned Model Hybrid

#### The Best of Both Worlds

The RAG vs. Fine-Tuning debate is a false dichotomy. **Hybrid approaches** combining RAG's dynamic knowledge access with fine-tuning's domain specialization often deliver superior results to either alone.

#### Understanding Fine-Tuning Basics

**Fine-tuning** (👉 "fine TYOO-ning") adapts a pre-trained LLM to your specific domain by training it further on domain-specific examples. Unlike RAG which supplements the model with external context, fine-tuning modifies the model's internal weights, baking knowledge directly into the neural network.

For example, fine-tuning a legal model on thousands of case summaries teaches it legal reasoning patterns, terminology, and formatting conventions. This knowledge becomes intrinsic—no context window required.

#### Why Combine RAG with Fine-Tuning?

Fine-tuned models excel at **style, format, and reasoning patterns** specific to your domain. A medical fine-tuned model naturally uses proper medical terminology, follows clinical reasoning structures, and formats notes according to standards.

But fine-tuning has limits. Models can't learn every fact—context windows are still needed for specific information. A fine-tuned legal model knows legal reasoning but still needs RAG to access specific case details or recent regulatory changes.

The hybrid approach: **fine-tune for domain expertise, RAG for factual grounding**. The model understands "how to think" about your domain; RAG provides "what to think about" for each specific query.

#### Architecture Considerations

You might fine-tune on:
- **Domain-specific instructions**: Teaching the model how to format outputs, structure reasoning, handle domain edge cases
- **Synthetic QA pairs**: Generated from your documents to teach domain knowledge patterns
- **User interaction data**: Real queries and ideal responses from your production system
- **Structured output generation**: Training on examples of desired JSON schemas, report formats, etc.

The fine-tuned model then uses RAG-retrieved context but interprets and responds using its enhanced domain capabilities.

#### Leaner Prompts and Efficiency

One major benefit is **reduced prompt overhead**. With a general LLM, you might need 500 tokens of instructions explaining domain conventions, output formats, and reasoning approaches. A fine-tuned model internalizes these, cutting your prompt to 100 tokens—saving tokens and improving consistency.

**Domain-specific templates** become simpler. The model already knows your output format preferences, requiring minimal examples rather than extensive few-shot demonstrations.

**Context requirements may decrease**. If the model has internalized common domain knowledge through fine-tuning, you might need fewer retrieved chunks for common queries, improving both cost and latency.

#### Tighter Retrieval Parameters

Fine-tuned models can work with **tighter similarity thresholds**. Because they better understand domain nuance, they can make do with fewer but higher-quality retrieved chunks, reducing noise in the context window.

**Domain-specific embeddings** pair naturally with fine-tuned models. If you've invested in fine-tuning the LLM, also fine-tune your embedding model on domain data for superior retrieval quality.

#### Best Use Cases

**High-volume domain QA** systems justify the fine-tuning investment. Customer support systems handling thousands of daily queries in a specialized domain see ROI from reduced token costs and improved answer quality.

**Structured output generation** improves dramatically. Financial report generation, medical note formatting, legal document drafting—tasks requiring consistent structure benefit from fine-tuned format adherence.

**Regulated industries** often require specific output formats, terminology, and reasoning patterns. Fine-tuning ensures compliance while RAG provides up-to-date factual grounding.

**Domain-specific copilots** for professional services (legal, medical, financial advisory) need both deep domain expertise (fine-tuning) and access to specific case/client information (RAG).

#### Implementation Challenges

**MLOps burden** increases significantly. You need:
- Training data collection and curation
- Fine-tuning infrastructure
- Model versioning and deployment
- A/B testing frameworks
- Performance monitoring
- Retraining pipelines

This requires ML engineering capabilities beyond basic RAG implementation.

**Version drift** becomes a concern. Your retrieval system evolves separately from your fine-tuned model. Ensuring they remain compatible requires coordination and testing.

#### Transition to Tradeoffs

Combining RAG with fine-tuning delivers powerful capabilities but demands substantial investment. Let's examine when this complexity translates to sufficient business value.`
        },
        {
          id: 21,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <div style={{ marginBottom: '30px' }}></div>
              </GSAPAnimated>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <GSAPAnimated animation="bounceIn" delay={0.3}>
                  <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Higher quality responses in specialized domains</li>
                        <li>Better formatting/style adherence</li>
                        <li>Lower prompt overhead at scale</li>
                        <li>Improved domain-specific reasoning</li>
                        <li>Reduced hallucinations on familiar patterns</li>
                        <li>Cost efficiency at volume (less context needed)</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" delay={0.5}>
                  <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Higher development and MLOps burden</li>
                        <li>Version drift between model and retrieval</li>
                        <li>More complex governance and evaluation</li>
                        <li>Ongoing training data collection needed</li>
                        <li>Less adaptable to new domains without retraining</li>
                        <li>More rigid response patterns</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#163e3e',
          notes: `### 21. RAG + Fine-Tuned Model: Strengths and Limitations

#### The Compounding Benefits

When RAG and fine-tuning work together, benefits compound. **Domain quality improvements** are substantial—responses use correct terminology, follow domain conventions, and demonstrate sophisticated reasoning patterns that general models lack.

**Formatting and style adherence** reaches production-grade consistency. Legal documents follow proper citation formats, medical notes use standardized terminology, financial reports match required structures—all without extensive prompt engineering.

**Prompt overhead reduction** delivers real cost savings at scale. If you're handling millions of queries monthly, reducing prompt size from 800 to 300 tokens per query saves substantial API costs while improving consistency.

**Domain-specific reasoning** quality improves measurably. A fine-tuned medical model naturally considers differential diagnoses, drug interactions, and clinical guidelines—reasoning patterns difficult to consistently achieve through prompting alone.

**Hallucination reduction** on familiar domain patterns is significant. The model has seen thousands of examples during fine-tuning and learns what "reasonable" responses look like for your domain, reducing confident fabrication.

**Long-term cost efficiency** emerges at volume. While upfront investment is high, per-query costs decrease through reduced context requirements and more efficient token usage.

#### The Substantial Burdens

**MLOps complexity** is the primary barrier. You need:
- Training data collection infrastructure
- Data quality assurance processes
- Fine-tuning compute resources
- Model versioning systems
- A/B testing frameworks
- Monitoring and drift detection
- Retraining pipelines
- Deployment orchestration

This demands dedicated ML engineering team capabilities.

**Version drift** creates ongoing challenges. Your document corpus evolves, your retrieval system improves, but your fine-tuned model is frozen at training time. Managing these moving parts requires careful coordination.

**Governance and evaluation complexity** increases. You must evaluate both retrieval quality and model generation quality, tracking how they interact. Changes to one affect the other in non-obvious ways.

**Training data collection** is perpetual work. To keep models current, you need continuous collection of high-quality query-response pairs from production, requiring human review and curation.

**Adaptability constraints** emerge. Need to support a new domain or use case? You can't just add documents—you need to retrain or fine-tune a new model, adding latency to new feature development.

**Response pattern rigidity** can be limiting. Fine-tuned models learn specific patterns and may struggle with requests outside their training distribution more than general models would.

#### When the Investment Pays Off

The break-even point typically arrives at **high query volumes** (hundreds of thousands monthly) in **well-defined domains** where quality and consistency justify the investment.

**Enterprise applications** with dedicated ML teams and long product lifecycles can amortize the upfront investment. Consumer products with viral growth might not afford the slow iteration cycles.

**Regulated industries** where compliance, auditability, and consistency are paramount often find the rigidity of fine-tuned outputs valuable rather than limiting.

#### Hybrid Strategy Evolution

Many teams follow a progression:
1. **Start with RAG-only**: Prove product-market fit
2. **Collect production data**: Gather query-response pairs from real usage
3. **Fine-tune incrementally**: Start with output formatting, expand to domain knowledge
4. **Continuous improvement**: Establish retraining cadence as data accumulates

This de-risks the investment while building toward the hybrid ideal.

#### Transition to Multi-Step Retrieval

While fine-tuning optimizes model capabilities, multi-step retrieval loops optimize the retrieval process itself—iteratively refining queries and accumulating evidence through multiple retrieval cycles to handle complex, compositional questions.`
        }
      ]
    },
    {
      id: 'pattern-10',
      title: 'RAG with Multi-Step Retrieval Loops',
      slides: [
        {
          id: 22,
          title: '10) RAG with Multi-Step Retrieval Loops',
          icon: { name: 'duo-arrows-rotate' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Components:</span></strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Iterative retriever (multi-hop)</li>
                    <li>Hypothesis generator (CoT reasoning)</li>
                    <li>Question decomposition module</li>
                    <li>Verifier (fact-checking)</li>
                    <li>Stopping criteria logic</li>
                    <li>Working memory/workspace</li>
                    <li>Evidence tracker</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Retrieval Strategy:</span></strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Self-ask/multi-hop retrieval loops</li>
                    <li>Plan-execute-refine sequences</li>
                    <li>Breadth-then-depth exploration</li>
                    <li>Chain-of-thought reasoning to formulate subqueries</li>
                    <li>Dynamic stopping based on completeness</li>
                    <li>Progressive evidence gathering</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Context Packing Approach:</span></strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Maintain working context set across turns</li>
                    <li>Prune redundant/irrelevant information</li>
                    <li>Merge complementary evidence</li>
                    <li>Track evidence chains/provenance</li>
                    <li>Keep intermediate reasoning steps</li>
                    <li>Include subquestion/answer history</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Best Fit Use Cases:</span></strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Legal reasoning and case research</li>
                    <li>Academic/scientific literature review</li>
                    <li>Investigative analysis</li>
                    <li>Multi-step troubleshooting</li>
                    <li>Complex financial/strategic analysis</li>
                    <li>Intelligence gathering/synthesis tasks</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#3e600f',
          notes: ''
        },
        {
          id: 23,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Solves compositional/multi-hop questions</li>
                    <li>Handles complex reasoning chains</li>
                    <li>Can discover unexpected relationships</li>
                    <li>Combines evidence from multiple sources</li>
                    <li>Higher accuracy on complex queries</li>
                    <li>More comprehensive answers with evidence trails</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Higher latency/cost (multiple LLM calls)</li>
                    <li>Risk of reasoning drift/hallucination chains</li>
                    <li>More complex implementation and debugging</li>
                    <li>Needs guardrails/stop conditions</li>
                    <li>Harder to evaluate intermediate steps</li>
                    <li>State management complexity</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#3e600f',
          notes: ''
        }
      ]
    },
    {
      id: 'pattern-11',
      title: 'RAG with Context Compression',
      slides: [
        {
          id: 24,
          title: '11) RAG with Context Compression / Summarization',
          icon: { name: 'duo-broom' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Components:</span></strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Contextual retrieval (contextualized embeddings)</li>
                    <li>Contextual BM25 (contextual lexical matching)</li>
                    <li>Context compressors (extractive/abstractive)</li>
                    <li>Reranker (prioritize relevance)</li>
                    <li>Chunking system with context-awareness</li>
                    <li>LLM for compression/summarization</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Retrieval Strategy:</span></strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Add context to chunks before embedding</li>
                    <li>Hybrid recall with contextual embeddings + BM25</li>
                    <li>Compress retrieved content to salient spans</li>
                    <li>Rerank passages by relevance to query</li>
                    <li>Pack 10-20 high-relevance passages</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Context Packing Approach:</span></strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Include snippets with source lines/citations</li>
                    <li>Provide concise summaries with context</li>
                    <li>Use reference markers for traceability</li>
                    <li>Prioritize high signal-to-noise ratio</li>
                    <li>Optimize token density with compressed information</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Best Fit Use Cases:</span></strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Enterprise systems with huge document collections</li>
                    <li>Long document analysis (academic papers, legal docs)</li>
                    <li>Latency or cost-sensitive applications</li>
                    <li>Cases requiring high-accuracy with evidence</li>
                    <li>Systems needing efficient token management</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#2e1a2e',
          notes: ''
        },
        {
          id: 25,
          title: 'Strengths and Limitations',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Improved retrieval accuracy (up to 67% reduction in failure)</li>
                    <li>Higher signal density in context window</li>
                    <li>Lower token usage (cost efficiency)</li>
                    <li>Better handling of long documents</li>
                    <li>More reliable answers with richer context</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Higher preprocessing complexity and cost</li>
                    <li>Potential loss of nuance in compression</li>
                    <li>Additional latency during retrieval step</li>
                    <li>Contextual embedding generation overhead</li>
                    <li>More complex deployment architecture</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#2e1a2e',
          notes: ''
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 26,
          title: 'Pattern Selection Guide & Tradeoffs',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <h3 style={{ color: '#4fc3f7', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                    Quick Pattern Selection Guide
                  </h3>
                  <ul style={{ fontSize: '1.2rem', lineHeight: '1.7', listStyle: 'none', paddingLeft: 0 }}>
                    <li><strong>Start with:</strong> Basic RAG → add Re-Ranking as corpus grows</li>
                    <li><strong>Ambiguous queries:</strong> Query Rewriting + Multi-Query</li>
                    <li><strong>Zero-shot domains:</strong> HyDE (Hypothetical Document Embeddings)</li>
                    <li><strong>Long documents:</strong> Parent-Child + Context Compression</li>
                    <li><strong>Complex relations:</strong> Graph-Based (GraphRAG)</li>
                    <li><strong>Live data needs:</strong> External Tools/Agents</li>
                    <li><strong>High volume/format:</strong> RAG + Fine-Tuned Hybrid</li>
                    <li><strong>Deep reasoning:</strong> Multi-Step Retrieval Loops</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ color: '#81c784', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-table" sizeName="2x" darkModeInvert={true} />
                    RAG Pattern Comparison Matrix
                  </h3>
                  <table style={{ fontSize: '1.2rem', width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid rgba(79, 195, 247, 0.5)' }}>
                        <th style={{ textAlign: 'left', fontWeight: 'bold', padding: '5px 0', paddingRight: '10px' }}>Pattern</th>
                        <th style={{ textAlign: 'left', fontWeight: 'bold', padding: '5px 0', paddingRight: '10px' }}>Accuracy</th>
                        <th style={{ textAlign: 'left', fontWeight: 'bold', padding: '5px 0', paddingRight: '10px' }}>Latency</th>
                        <th style={{ textAlign: 'left', fontWeight: 'bold', padding: '5px 0', paddingRight: '10px' }}>Dev</th>
                        <th style={{ textAlign: 'left', fontWeight: 'bold', padding: '5px 0' }}>Ops</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Basic RAG', acc: '★★☆', lat: '★★★', dev: '★☆☆', ops: '★☆☆' },
                        { name: 'Re-Ranking', acc: '★★★', lat: '★★☆', dev: '★★☆', ops: '★★☆' },
                        { name: 'Query Rewriting', acc: '★★★', lat: '★★☆', dev: '★★☆', ops: '★★☆' },
                        { name: 'Multi-Query', acc: '★★★', lat: '★☆☆', dev: '★★☆', ops: '★★☆' },
                        { name: 'Parent-Child', acc: '★★★', lat: '★★☆', dev: '★★☆', ops: '★★☆' },
                        { name: 'Graph-Based', acc: '★★★', lat: '★☆☆', dev: '★★★', ops: '★★★' },
                      ].map((row, i) => (
                        <tr key={i}>
                          <td style={{ padding: '3px 0', paddingRight: '10px' }}>{row.name}</td>
                          <td style={{ textAlign: 'left', padding: '3px 0', paddingRight: '10px' }}>{row.acc}</td>
                          <td style={{ textAlign: 'left', padding: '3px 0', paddingRight: '10px' }}>{row.lat}</td>
                          <td style={{ textAlign: 'left', padding: '3px 0', paddingRight: '10px' }}>{row.dev}</td>
                          <td style={{ textAlign: 'left', padding: '3px 0' }}>{row.ops}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '8px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#ffb74d', fontSize: '2rem' }}>
                  <SvgIcon iconName="duo-rocket" sizeName="2x" darkModeInvert={true} />
                  Next Steps for RAG Implementation
                </h3>
                <ul style={{ fontSize: '1.2rem', lineHeight: '1.6', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <li>Instrument evaluation metrics (relevance, hallucination rate, latency)</li>
                  <li>A/B test retrieval parameters (K, fusion methods, reranker configs)</li>
                  <li>Implement feedback loops for continuous improvement</li>
                  <li>Consider pattern hybridization for complex use cases</li>
                  <li>Monitor data and LLM model drift</li>
                  <li>Scale gradually with observability best practices</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#3e1616',
          notes: ''
        }
      ]
    }
  ]
};
