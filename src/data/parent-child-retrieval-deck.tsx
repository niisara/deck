import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

export const parentChildRetrievalDeck: Deck = {
  id: 'parent-child-retrieval-deck',
  name: '11 Parent–Child Retrieval Design Patterns',
  description: 'A concise, comparable cheat-sheet of 11 retrieval patterns that attach parent context to child chunks to reduce hallucination and improve answer correctness',
  category: 'RAG',
  theme: 'night',
  cardClassName: 'glass-morphism',
  cardStyle: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  slides: [],
  slideGroups: [
    {
      id: 'intro',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          center: true,
          title: 'Parent–Child Retrieval Designs for RAG',
          content: (
            <div style={{ color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" duration={1} delay={0.2}>
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', paddingBottom: '20px', fontSize: '32px', margin: '0px' }}>
                  <SvgIcon iconName="duo-circle-nodes" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                  For Reliable Grounded Generation
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '20px', marginBottom: '20px', maxWidth: '900px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
                  A concise, comparable cheat-sheet of 11 retrieval patterns that attach parent context to child chunks to reduce hallucination and improve answer correctness
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.8}>
                <div style={{ display: 'flex', gap: '30px', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 20px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '12px' }}>
                    <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                    <span style={{ fontSize: '18px' }}>Reduces Hallucination</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 20px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '12px' }}>
                    <SvgIcon iconName="duo-check-double" sizeName="1x" darkModeInvert={true} />
                    <span style={{ fontSize: '18px' }}>Improves Correctness</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 20px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '12px' }}>
                    <SvgIcon iconName="duo-book-open" sizeName="1x" darkModeInvert={true} />
                    <span style={{ fontSize: '18px' }}>Better Context</span>
                  </div>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1}>
                <p style={{ fontSize: '20px', marginBottom: '20px' }}>
                  For ML engineers, data engineers, applied researchers
                </p>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </GSAPAnimated>
            </div>
          ),
          backgroundImage: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1920&q=80',
          notes: `### Parent–Child Retrieval Designs for RAG

[energetic] Welcome to this comprehensive guide on parent-child retrieval patterns for RAG 👉 'rag' systems! [excited] Today we're diving into eleven powerful design patterns that can dramatically improve your retrieval-augmented generation pipelines by solving one of the most common problems in production RAG 👉 'rag' systems: providing the right amount of context at the right time.

#### 🎯 What This Deck Covers

[conversational] We'll explore eleven different design patterns that help you attach parent context to child chunks, and this is absolutely crucial for building reliable systems. When you search through documents, you often find a small relevant chunk, but that chunk by itself lacks the surrounding context needed for accurate generation. [confidently] These patterns solve that problem by systematically connecting fine-grained search results with their broader governing context. This approach reduces hallucination because the LLM 👉 'ell-ell-em' has better grounding in the actual source material. It improves correctness because answers are drawn from complete context rather than isolated snippets. And it gives you better overall context because you're combining fine-grained evidence with the broader narrative that makes it meaningful.

#### 👥 Target Audience

[warmly] This deck is specifically designed for machine learning engineers who are building RAG 👉 'rag' systems in production, data engineers who are working on document processing and chunking pipelines, and applied researchers who are exploring novel retrieval architectures. If you're working on any system that retrieves information to ground language model generation, these patterns will give you concrete approaches you can implement immediately.

[enthusiastically] Let's dive into the patterns and discover which ones will work best for your use case!`
        },
        {
          id: 2,
          title: 'What You\'ll Learn',
          icon: { name: 'duo-graduation-cap' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <GSAPStaggerList stagger={0.2} duration={0.6}>
                <div style={{ fontSize: '2rem' }}>
                  <ul style={{ lineHeight: '1.8' }}>
                    <li><strong>11 actionable patterns</strong> for parent-child retrieval in RAG systems</li>
                  </ul>
                </div>
                <div style={{ fontSize: '2rem' }}>
                  <ul style={{ lineHeight: '1.8' }}>
                    <li><strong>Cheat-sheet structure</strong> per pattern: Goal, How It Works, When to Use, Data Structure, Implementation, Pros & Cons</li>
                  </ul>
                </div>
                <div style={{ fontSize: '2rem' }}>
                  <ul style={{ lineHeight: '1.8' }}>
                    <li><strong>Selection guide</strong> to choose the right pattern for your use case</li>
                  </ul>
                </div>
                <div style={{ fontSize: '2rem' }}>
                  <ul style={{ lineHeight: '1.8' }}>
                    <li><strong>Implementation tips</strong> for production deployments</li>
                  </ul>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### What You'll Learn

[conversational] Let me give you a quick roadmap of what we'll cover today so you know exactly what to expect from this presentation.

#### 📚 The Structure

[lecture] We're going to walk through eleven actionable patterns for implementing parent-child retrieval in your RAG 👉 'rag' systems. [confidently] Each pattern is presented in a consistent cheat-sheet format that makes it easy to compare and contrast different approaches. For every pattern, you'll see the goal and what problem it solves, giving you immediate clarity on when you might need this pattern. We'll explain exactly how it works under the hood, so you understand the mechanism. You'll learn when to use it with specific scenarios where this pattern shines. We'll show you what data structure you need to support the pattern in your storage layer. You'll get a step-by-step implementation workflow that you can follow to build it yourself. And critically, we'll discuss the pros and cons so you understand the trade-offs you're making.

#### 🎯 What You'll Walk Away With

[pleased] By the end of this deck, you'll have eleven patterns in your toolkit, a clear selection guide to help you choose the right pattern for your specific use case, and practical implementation tips that will help you deploy these patterns in production systems. [inspiringly] This isn't just theory, it's a practical playbook you can use immediately.`
        },
        {
          id: 3,
          title: 'Table of Contents',
          icon: { name: 'duo-clipboard-list' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPStaggerList stagger={0.1} duration={0.4}>
                {[
                  <div key="grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                    <div style={{ padding: '12px 15px', background: 'rgba(79, 195, 247, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#4fc3f7', minWidth: '28px' }}>1</span>
                      <span style={{ fontSize: '1.2rem' }}>Parent-Child Chunking</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#81c784', minWidth: '28px' }}>2</span>
                      <span style={{ fontSize: '1.2rem' }}>Section-Header Anchored Retrieval</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ffb74d', minWidth: '28px' }}>3</span>
                      <span style={{ fontSize: '1.2rem' }}>Outline-Based Tree Retrieval</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(186, 104, 200, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ba68c8', minWidth: '28px' }}>4</span>
                      <span style={{ fontSize: '1.2rem' }}>Top-k Parent Expansion</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(240, 98, 146, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#f06292', minWidth: '28px' }}>5</span>
                      <span style={{ fontSize: '1.2rem' }}>Sibling-Aware Retrieval</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(100, 181, 246, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#64b5f6', minWidth: '28px' }}>6</span>
                      <span style={{ fontSize: '1.2rem' }}>Windowed Retrieval</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(174, 213, 129, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#aed581', minWidth: '28px' }}>7</span>
                      <span style={{ fontSize: '1.2rem' }}>Semantic Hierarchy Retrieval</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(255, 167, 38, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ffa726', minWidth: '28px' }}>8</span>
                      <span style={{ fontSize: '1.2rem' }}>Dynamic Context Folding</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(239, 83, 80, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#ef5350', minWidth: '28px' }}>9</span>
                      <span style={{ fontSize: '1.2rem' }}>Hybrid Parent-Child + BM25</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(149, 117, 205, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#9575cd', minWidth: '28px' }}>10</span>
                      <span style={{ fontSize: '1.2rem' }}>Parent Re-Ranking (Cross-Encoder)</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(102, 187, 106, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#66bb6a', minWidth: '28px' }}>11</span>
                      <span style={{ fontSize: '1.2rem' }}>Graph / KG Parent Retrieval</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(79, 195, 247, 0.25)', borderRadius: '8px', display: 'flex', alignItems: 'center', gridColumn: 'span 2' }}>
                      <SvgIcon iconName="duo-trophy" sizeName="1x" style={{ color: '#ffd700' }} darkModeInvert={true} />
                      <span style={{ fontWeight: 'bold', fontSize: '1.2rem', marginLeft: '10px' }}>Summary & Selection Guide</span>
                    </div>
                  </div>
                ]}
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: `### Table of Contents

[cheerfully] Here's your roadmap through all eleven patterns we'll explore today. [conversational] You can see we've organized them in a logical progression, starting with simpler foundational patterns and building up to more sophisticated approaches.

#### 🗺️ The Journey Ahead

[lecture] We'll start with pattern one, parent-child chunking, which is the foundational pattern that many others build upon. Then we'll move to section-header anchored retrieval, which uses document structure to provide context. Pattern three introduces outline-based tree retrieval for hierarchically structured documents. Pattern four covers top-k parent expansion, where you retrieve multiple parent contexts. Pattern five brings in sibling-aware retrieval to include neighboring chunks. We'll explore windowed retrieval in pattern six for sliding context windows. Pattern seven introduces semantic hierarchy retrieval using topic clustering. Pattern eight shows dynamic context folding for adaptive context sizing. Pattern nine combines dense retrieval with BM25 👉 'bee-em-twenty-five' for hybrid approaches. Pattern ten covers parent re-ranking using cross-encoders for quality scoring. And finally, pattern eleven explores graph and knowledge graph parent retrieval for richly connected documents.

#### 🎯 Plus a Summary

[warmly] After walking through all eleven patterns, we'll wrap up with a comprehensive summary and selection guide to help you choose the right pattern or combination of patterns for your specific use case. Each pattern has its strengths, and understanding when to use which approach is just as important as understanding how they work.`
        }
      ]
    },
    {
      id: 'pattern-1',
      title: 'Parent–Child Chunking',
      slides: [
        {
          id: 4,
          title: '1) Parent–Child Chunking (Hierarchical Retrieval)',
          icon: { name: 'duo-circle-nodes' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>
                    Goal / What It Solves <MermaidPopover
                      title="Parent-Child Chunking Flow"
                      diagram={`flowchart LR
    A["📄 Document"] --> B["🔪 Parser"]
    B --> C["👨‍👩‍👧 Parent Sections"]
    B --> D["👶 Child Chunks"]
    D --> E["🔍 Vector Index"]
    E --> F["📥 Retrieve Children"]
    F --> G["🔗 Attach Parents"]
    style C fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
    style G fill:#ffb74d,color:#000`}
                    />
                  </h4>
                  <ul>
                    <li>Reduces hallucination by always pairing fine-grained evidence (child) with its governing section (parent)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>How It Works</h4>
                  <ul>
                    <li>Index children for recall; upon retrieval, attach their parent section using parent_id metadata</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Policy/Legal Doc: Child + Parent Context"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart LR
    A["📜 Policy Doc"] --> B["§ Section A\n(parent)"]
    B --> C["clause 1\n(child)"]
    C --> D["🔍 Query match"]
    D --> E["📋 Child + Parent\ncontext sent to LLM"]
    style B fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style E fill:#ffd700,color:#000`}
                    />
                  </div>
                  <h4 style={{ fontSize: '2rem' }}>When to Use</h4>
                  <ul>
                    <li>Policies, legal docs, SOPs, manuals where section context defines constraints</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: `### Pattern 1 - Parent–Child Chunking (Hierarchical Retrieval)
[excited] Welcome to our first retrieval pattern! [conversational] This is the foundational approach to parent-child retrieval, and it's where most teams start when building RAG 👉 'rag' systems with hierarchical context.

####  The Goal
[confidently] The main goal here is to **reduce hallucination** by ensuring that whenever we retrieve a fine-grained piece of evidence, which we call the child chunk, we also include its governing section, the parent. [storytelling] Think of it like this: when you quote a sentence from a legal document, you need to know which section it came from to understand the constraints and rules that apply. This pairing of child and parent provides the necessary context for accurate, grounded answers that don't make things up.

####  How It Works
[lecture] Let's walk through the process. First, you parse your documents into a hierarchy, breaking them down into their natural structure. Then you create small child chunks, typically between two hundred and four hundred tokens, which are perfect for precise retrieval. At the same time, you store the parent sections, which are larger at eight hundred to fifteen hundred tokens, along with metadata that links children to their parents. When a query comes in, you retrieve the matching child chunks, and then you automatically attach their parent sections to provide that critical governing context.

\`\`\`mermaid
flowchart LR
    A["📄 Document"] --> B["🔪 Parser"]
    B --> C["👨‍👩‍👧 Parent Sections"]
    B --> D["👶 Child Chunks"]
    D --> E["🔍 Vector Index"]
    E --> F["📥 Retrieve Children"]
    F --> G["🔗 Attach Parents"]
    style C fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
    style G fill:#ffb74d,color:#000
\`\`\`

[conversational] This flowchart shows how documents flow through the parser, splitting into parent sections and child chunks, with children going into the vector index for retrieval.

####  When to Use This
[confidently] This pattern works best for structured documents where section context defines constraints and rules. We're talking about policies, legal documents, SOPs 👉 'ess-oh-pees', standard operating procedures, technical manuals, and compliance documentation. Anywhere that a piece of text needs its governing section to be properly understood, this pattern shines.

Now let's look at the implementation details and trade-offs for this pattern.`
        },
        {
          id: 5,
          title: 'Implementation & Trade-offs',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Data Structure Needed</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Child chunks with embeddings; parent sections</li>
                    <li><em>Fields: child_id, parent_id, parent_title, level, order</em></li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Implementation Workflow</h4>
                  <ol style={{ marginTop: '10px' }}>
                    <li>Parse document into a tree; chunk children (200–400 tokens) and parents (800–1500)</li>
                    <li>Embed children; store parent metadata and text</li>
                    <li>Query → retrieve top-k children → attach parents → deduplicate parents</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} style={{ color: '#81c784' }} />
                      <h4 style={{ margin: 0 }}>Pros</h4>
                    </div>
                    <ul>
                      <li>Strong grounding with minimal complexity</li>
                      <li>Easy to implement; good correctness</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul>
                      <li>Larger context windows needed</li>
                      <li>Risk of attaching loosely relevant parent if parsing is noisy</li>
                    </ul>
                  </div>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: `### Pattern 1 - Implementation & Trade-offs
[lecture] Now let's dive into the practical implementation details and the trade-offs you'll encounter when deploying this pattern in production.

####  Data Structure Needed
[conversational] You'll need to design your data structure to support this hierarchical relationship. Each child chunk needs a unique identifier, called the child underscore ID, which you'll use for retrieval. Then you need a parent underscore ID field that references which parent section this child belongs to. It's also helpful to store the parent underscore title for display and debugging purposes. Don't forget the level field, which tracks how deep in the hierarchy this chunk sits, and an order field to maintain the sequence of chunks within their parent section. These fields work together to reconstruct the full context when needed.

####  Implementation Workflow
[confidently] Let's walk through the implementation steps. First, you parse the document to build a tree structure that captures the natural hierarchy. Then you chunk it into children at two hundred to four hundred tokens, which is small enough for precise matching, and parents at eight hundred to fifteen hundred tokens, which provides sufficient context. Here's the key efficiency trick: you only embed the children, not the parents, because you're searching against children and then just attaching parents afterward. When a query comes in, you retrieve your top-k children from the vector index, then you attach their parents using the metadata, and finally you deduplicate any parents that appear multiple times. Simple and effective.

####  Pros
[pleased] The good stuff: This pattern is **simple to implement** without requiring complex infrastructure. You get **strong grounding** without adding architectural complexity, and it provides a **good baseline correctness** that's hard to beat for structured documents. Most teams can get this running in a few days.

####  Cons
[cautiously] The problems: You'll need **larger context windows** because you're sending both child and parent text to the language model, which can hit token limits quickly. If your document parsing is noisy or makes mistakes, you risk **attaching the wrong parent** to a child, which can actually make things worse by providing misleading context. Also, this pattern doesn't naturally capture **cross-section relationships** where information spans multiple parents or siblings.

[conversational] With those trade-offs in mind, let's move on to our second pattern, which takes a different approach to anchoring context.`
        }
      ]
    },
    {
      id: 'pattern-2',
      title: 'Section-Header Anchored Retrieval',
      slides: [
        {
          id: 6,
          title: '2) Section-Header Anchored Retrieval',
          icon: { name: 'duo-heading' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>
                    Goal / What It Solves <MermaidPopover
                      title="Section-Header Anchoring Flow"
                      diagram={`flowchart LR
    A["📄 Chunk"] --> B["🏷️ Nearest Header"]
    B --> C["🍞 Breadcrumb Path"]
    C --> D["📝 Header + Path + Chunk"]
    style B fill:#81c784,color:#000
    style D fill:#4fc3f7,color:#000`}
                    />
                  </h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Reduces misinterpretation by anchoring chunks to their nearest header and breadcrumb path</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>How It Works</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Always include header/title + short abstract with the retrieved chunk</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Wiki/Product Guide: Header-Anchored Chunk"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart LR
    A["📖 Wiki Article"] --> B["## Installation"]
    B --> C["### Windows"]
    C --> D["'run setup.exe'\n(chunk)"]
    D --> E["Context:\nInstallation > Windows > chunk"]
    style B fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#ffd700,color:#000`}
                    />
                  </div>
                  <h4 style={{ fontSize: '2rem' }}>When to Use</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Docs with clear headings: wikis, product guides, knowledge bases</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Pattern 2 - Section-Header Anchored Retrieval

[conversational] Now let's look at our second pattern, which is lightweight but remarkably effective for well-structured documents. [pleased] This is one of those patterns that gives you a lot of value for relatively little implementation complexity.

#### 🎯 The Goal

[lecture] The goal here is to reduce misinterpretation by always providing header context alongside your retrieved chunks. [storytelling] Think about a chunk that says "the maximum limit is five hundred." That statement means completely different things depending on whether it appears under the header "API 👉 'ay-pee-eye' Rate Limits" versus "User Account Limits" versus "Database Connection Pool Size." [cautiously] Without that header context, the language model might make completely incorrect assumptions about what limit we're talking about.

#### 📊 Visual Flow

[conversational] Let me show you how this pattern works visually:

\`\`\`mermaid
flowchart LR
    A["📄 Chunk"] --> B["🏷️ Nearest Header"]
    B --> C["🍞 Breadcrumb Path"]
    C --> D["📝 Header + Path + Chunk"]
    style B fill:#81c784,color:#000
    style D fill:#4fc3f7,color:#000
\`\`\`

This diagram shows the flow from a raw chunk to finding its nearest header, building the breadcrumb path through the document hierarchy, and finally combining everything together for retrieval.

#### ⚙️ How It Works

[lecture] During your parsing phase, you need to capture three key pieces of information for each chunk. First, identify the nearest header for that chunk, which is usually the last heading that appeared before the chunk in the document. Second, capture the full breadcrumb path showing the hierarchical structure, like "Installation" followed by "Windows" followed by "Prerequisites." Third, optionally capture a one to two sentence abstract or summary of that section. Then on retrieval, you simply prepend this header context to the chunk before sending it to the language model.

#### 🕐 When to Use This?

[confidently] This pattern is perfect for documents with clear heading structures. Think wikis where every section has a title, product documentation that's well organized with headings and subheadings, technical knowledge bases with structured articles, and any content where the headings actually provide meaningful context about what follows.`
        },
        {
          id: 7,
          title: 'Implementation & Trade-offs',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Data Structure Needed</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>header_text, header_path (e.g., H1 &gt; H2 &gt; H3), header_offset</li>
                    <li>Optional: header summary (1-2 sentences)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Implementation Workflow</h4>
                  <ol style={{ marginTop: '10px' }}>
                    <li>During parsing, capture nearest header and path for each chunk</li>
                    <li>Retrieval attaches header + path + optional 1–2 sentence abstract</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} style={{ color: '#81c784' }} />
                      <h4 style={{ margin: 0 }}>Pros</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>Very low overhead</li>
                      <li>Boosts grounding and interpretability</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>Weak when headings are sparse or misleading</li>
                      <li>Limited for highly unstructured text</li>
                    </ul>
                  </div>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Pattern 2 - Implementation & Trade-offs

[conversational] Let's talk about how to actually implement this pattern and what trade-offs you're making when you choose it.

#### 📊 Data Structure Needed

[lecture] For your storage layer, you need to store several pieces of metadata with each chunk. You'll need the header text itself, which is the actual text of the heading. You'll need the header path, which is the full breadcrumb showing the hierarchy, something like "Installation" followed by "Windows" followed by "Prerequisites." Store the header offset, which is the position in the original document, so you can maintain proper ordering. And optionally, you might want to store a header summary, which is a one to two sentence abstract of that section that can provide even more context.

#### 🔧 Implementation Workflow

[confidently] The implementation is refreshingly straightforward. During your parsing phase, as you process each chunk, you identify and capture the nearest header and its full path through the document structure. Then at retrieval time, when a chunk is selected as relevant, you simply attach the header, the path, and optionally that one to two sentence abstract before passing everything to the language model. It's a simple augmentation step that happens right before generation.

#### ✅ Pros

[pleased] This pattern has some really compelling advantages. The implementation overhead is very low because you're just capturing metadata during parsing and prepending it during retrieval. It's fantastic for interpretability because users can actually see the path, which helps them understand where information came from. And it's very efficient in terms of tokens because headers are typically short, so you're not adding massive amounts of text to your context.

#### ⚠️ Cons

[cautiously] However, there are limitations you need to be aware of. This pattern doesn't work well when headings are sparse or poorly written. If your document has huge sections with only occasional headings, you're not getting much value. If the headings are misleading or vague, like just "Overview" or "Details," they might actually hurt quality rather than help. [disappointed] And critically, this pattern is not suitable for highly unstructured text like conversation transcripts, chat logs, or free-form notes where there simply aren't meaningful headings to anchor to.

[conversational] Now that we understand header-based anchoring, let's move to a more sophisticated tree-based approach in pattern three.`
        }
      ]
    },
    {
      id: 'pattern-3',
      title: 'Outline-Based Tree Retrieval',
      slides: [
        {
          id: 8,
          title: '3) Outline-Based Tree Retrieval',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>
                    Goal / What It Solves <MermaidPopover
                      title="Outline-Based Tree Flow"
                      diagram={`flowchart TD
    A["🌳 Root"] --> B["📑 Chapter 1"]
    A --> C["📑 Chapter 2"]
    B --> D["📄 Section 1.1"]
    B --> E["📄 Section 1.2"]
    D --> F["👶 Chunk"]
    F --> G["🔍 Query Match"]
    G --> H["⬆️ Include Ancestors"]
    style F fill:#81c784,color:#000
    style H fill:#4fc3f7,color:#000`}
                    />
                  </h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Preserves narrative hierarchy by retrieving the path from root → ... → leaf</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>How It Works</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Maintain explicit outline tree; child retrieval triggers inclusion of ancestors (path context)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Textbook: Full Ancestor Path on Match"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TD
    A["📚 Textbook"] --> B["Ch.2 Algorithms"]
    B --> C["§2.3 Sorting"]
    C --> D["§2.3.1 Quicksort\n(leaf chunk)"]
    D --> E["Query Match →\ninclude Ch.2 + §2.3 ancestors"]
    style A fill:#e3f2fd,color:#000
    style D fill:#81c784,color:#000
    style E fill:#ffd700,color:#000`}
                    />
                  </div>
                  <h4 style={{ fontSize: '2rem' }}>When to Use</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Long PDFs, textbooks, design docs, standards with deep nesting</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: `### Pattern 3 - Outline-Based Tree Retrieval

[conversational] Pattern three takes us into tree-based structures, and this is ideal for deeply nested documents where preserving the full path context really matters.

#### 🎯 The Goal

[lecture] The goal here is to preserve the complete narrative hierarchy by including the entire path from the document root all the way down to the matched leaf chunk. This ensures that no contextual constraints are missed. [storytelling] Imagine you're retrieving a specific requirement from a technical standard. That requirement might be constrained by its section, which is constrained by its chapter, which is constrained by the document scope. [confidently] By including all ancestors, you get the complete context chain.

#### 📊 Visual Flow

Here's how the tree traversal works:

\`\`\`mermaid
flowchart TD
    A["🌳 Root"] --> B["📑 Chapter 1"]
    A --> C["📑 Chapter 2"]
    B --> D["📄 Section 1.1"]
    B --> E["📄 Section 1.2"]
    D --> F["👶 Chunk"]
    F --> G["🔍 Query Match"]
    G --> H["⬆️ Include Ancestors"]
    style F fill:#81c784,color:#000
    style H fill:#4fc3f7,color:#000
\`\`\`

[conversational] This diagram shows how when a leaf chunk matches your query, you don't just return that chunk. Instead, you traverse upward through the tree, including all ancestor nodes from the root down to provide complete hierarchical context.

#### ⚙️ How It Works

[lecture] You build an explicit tree structure from your document outline during the preprocessing phase. Each node in the tree represents a section or subsection of your document, and leaf nodes contain the actual content chunks. When a child chunk matches your query, you traverse upward through the tree and include all ancestor nodes in the context you send to the language model. This gives you the full narrative path that governs that chunk.

#### 🕐 When to Use This?

[confidently] This pattern is perfect for several types of documents. Long PDFs with multiple nesting levels really benefit from this approach. Textbooks with chapters that contain sections that contain subsections are ideal candidates. Technical standards documents where requirements inherit constraints from higher levels work beautifully with this pattern. And any design documentation with deep hierarchical structure will see improvements with outline-based tree retrieval.`
        },
        {
          id: 9,
          title: 'Implementation & Trade-offs',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Data Structure Needed</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Node tree (node_id, parent_id, level, order)</li>
                    <li>Embeddings at child and optionally at each node</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Implementation Workflow</h4>
                  <ol style={{ marginTop: '10px' }}>
                    <li>Build outline; embed leaves (and optionally internal nodes)</li>
                    <li>Query → retrieve leaves → include ancestors to root; budget tokens; deduplicate</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} style={{ color: '#81c784' }} />
                      <h4 style={{ margin: 0 }}>Pros</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>Excellent structural grounding</li>
                      <li>Coherent multi-level context</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>Token overhead from path</li>
                      <li>Heavier preprocessing to build/maintain tree</li>
                    </ul>
                  </div>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: `### Pattern 3 - Implementation & Trade-offs

[conversational] Now let's talk about actually building this tree-based system and the trade-offs you'll encounter.

#### 📊 Data Structure Needed

[lecture] You need to build a proper tree structure in your storage layer. Each node needs a unique node ID that you can reference. Store the parent ID to link each node to its parent, creating the tree structure. Include the level or depth in the tree, so you know how far from the root each node sits. And maintain an order field that captures the sequence among siblings, so you can preserve the original document ordering. You'll embed the leaf nodes and optionally embed internal nodes as well if you want to support queries that match section summaries directly.

#### 🔧 Implementation Workflow

[confidently] First, during preprocessing, you build the outline tree by parsing your document structure. You embed the leaf chunks and optionally embed the internal nodes. Then at query time, you retrieve matching leaves using vector similarity search. For each matching leaf, you traverse upward and include all ancestors from that leaf to the root. [cautiously] You need to budget your tokens carefully because deep trees can create long paths. And finally, you deduplicate any parent nodes that appear in multiple paths to avoid repetition.

#### ✅ Pros

[pleased] This pattern provides excellent structural grounding. The language model gets complete context about where information sits in the document hierarchy. You get very coherent answers for complex queries because the full narrative path is preserved. And this pattern is fantastic for multi-hop reasoning where the answer requires understanding relationships across different levels of the hierarchy.

#### ⚠️ Cons

[concerned] The main challenge is token consumption. Deep trees can include many ancestor nodes, and each ancestor adds tokens to your context. You need careful preprocessing to build and maintain the tree structure, which adds implementation complexity. And there's ongoing tree maintenance overhead if your documents change frequently, because you need to rebuild or update the tree structure to reflect those changes.

[conversational] With tree-based retrieval covered, let's explore pattern four, which expands multiple parent levels for even richer context.`
        }
      ]
    },
    {
      id: 'pattern-4',
      title: 'Top-k Parent Expansion',
      slides: [
        {
          id: 10,
          title: '4) Top-k Parent Expansion',
          icon: { name: 'duo-arrow-up-right-from-square' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>
                    Goal / What It Solves <MermaidPopover
                      title="Top-k Parent Expansion"
                      diagram={`flowchart TB
    A["👶 Child Chunk"] --> B["⬆️ Level 1 Parent"]
    A --> C["⬆️⬆️ Level 2 Grandparent"]
    A --> D["⬆️⬆️⬆️ Level 3 Great-Grandparent"]
    B --> E["📦 Combined Context"]
    C --> E
    D --> E
    style A fill:#81c784,color:#000
    style E fill:#4fc3f7,color:#000
    style B fill:#ffb74d,color:#000
    style C fill:#ffb74d,color:#000
    style D fill:#ffb74d,color:#000`}
                    />
                  </h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Mitigates ambiguity by attaching multiple plausible parents (immediate + higher levels)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>How It Works</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>For each retrieved child, climb levels and add up to k parents (e.g., section, chapter)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Standards Doc: Multi-Level Constraint Chain"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    A["🏢 ISO Standard"] --> B["Part I (L1)"]
    B --> C["Chapter 3 (L2)"]
    C --> D["§3.2 Rule (L3)"]
    D --> E["clause (child)"]
    E --> F["All 3 parent levels\nincluded in context"]
    style B fill:#ffb74d,color:#000
    style C fill:#ffb74d,color:#000
    style D fill:#ffb74d,color:#000
    style E fill:#81c784,color:#000
    style F fill:#ffd700,color:#000`}
                    />
                  </div>
                  <h4 style={{ fontSize: '2rem' }}>When to Use</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Deeply nested docs; content where constraints appear at multiple levels</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: `### Pattern 4 - Top-k Parent Expansion

[conversational] When one parent level isn't enough to capture all the governing context, pattern four shows you how to expand to multiple levels in the hierarchy.

#### 🎯 The Goal

[lecture] Sometimes constraints and context exist at multiple levels of your document hierarchy. [storytelling] A specific clause might be modified by its immediate section, but also by the chapter that section sits in, and even by the document preamble or scope statement at the very top. [confidently] This pattern captures all that relevant governing context by including multiple parent levels, ensuring you don't miss any cascading constraints.

#### 📊 Visual Flow

Here's how this multi-level parent expansion works:

\`\`\`mermaid
flowchart TB
    A["👶 Child Chunk"] --> B["⬆️ Level 1 Parent"]
    A --> C["⬆️⬆️ Level 2 Grandparent"]
    A --> D["⬆️⬆️⬆️ Level 3 Great-Grandparent"]
    B --> E["📦 Combined Context"]
    C --> E
    D --> E
    style A fill:#81c784,color:#000
    style E fill:#4fc3f7,color:#000
    style B fill:#ffb74d,color:#000
    style C fill:#ffb74d,color:#000
    style D fill:#ffb74d,color:#000
\`\`\`

[conversational] This diagram shows how a single child chunk connects to multiple parent levels, with all levels combining into the final context package.

#### ⚙️ How It Works

[lecture] For each retrieved child chunk, you climb up the hierarchy and add up to k parent levels to your context. So you might include the immediate parent section, the grandparent chapter, and the great-grandparent document scope. You can score-weight these parents by their level importance, giving more weight to closer parents. [cautiously] And critically, you need to respect your token budget to avoid overwhelming the language model with too much context.

#### 🕐 When to Use This?

[confidently] This pattern is ideal for deeply nested documents where constraints cascade from multiple levels. Think legal documents where a clause is qualified by section notes, chapter exceptions, and document-wide definitions. Or technical specifications where requirements inherit conditions from multiple hierarchical levels. Anywhere you have rich nesting with meaningful context at each level, top-k parent expansion can help.`
        },
        {
          id: 11,
          title: 'Implementation & Trade-offs',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Data Structure Needed</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>parent_id chain with level_depth</li>
                    <li>Per-level score weighting</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Implementation Workflow</h4>
                  <ol style={{ marginTop: '10px' }}>
                    <li>Retrieve children → for each, add parents up to k levels using a token budget heuristic</li>
                    <li>Score-combine child relevance with parent-level priors; deduplicate</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} style={{ color: '#81c784' }} />
                      <h4 style={{ margin: 0 }}>Pros</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>High recall of governing context</li>
                      <li>Robust to mis-leveling</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>More tokens consumed</li>
                      <li>Can introduce noise; needs careful budget control</li>
                    </ul>
                  </div>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: `### Pattern 4 - Implementation & Trade-offs

[conversational] Let's discuss how to implement multi-level parent expansion and what trade-offs you're accepting with this approach.

#### 📊 Data Structure Needed

[lecture] Your storage needs to track the full ancestry chain. Store the parent ID chain showing the complete path from each node up to the root. Include the level depth for each node so you can allocate your token budget intelligently, perhaps limiting how many levels you include based on available tokens. And maintain level weights, which are scoring priors that let you weight closer parents more heavily than distant ones when combining context.

#### 🔧 Implementation Workflow

[confidently] At retrieval time, you first retrieve your child chunks using standard vector search. Then for each child, you add parents up to k levels, using a token budget heuristic to decide how many levels you can afford. You score-combine the child's relevance score with your parent-level priors, so you can rank results considering both how well the child matched and how important its parents are. Finally, deduplicate any parents that appear in multiple expansion paths to avoid sending the same parent text multiple times.

#### ✅ Pros

[pleased] This pattern gives you high recall of governing context because you're including multiple levels of hierarchy. It's robust to mis-leveling in your document structure, because even if you got the immediate parent wrong, you're also including grandparents and great-grandparents. And you get high context recall, meaning you're unlikely to miss important qualifying information that constrains how to interpret the child chunk.

#### ⚠️ Cons

[cautiously] The primary downside is this pattern is token-heavy. Multiple parent levels mean you're sending a lot of text to your language model. [concerned] There's a risk of including irrelevant parents, especially at higher levels that might be too general to be helpful. And you need careful budget management to avoid either hitting token limits or wasting tokens on low-value parent text. Balancing completeness with efficiency is the key challenge here.

[conversational] Now let's shift from vertical hierarchy to horizontal relationships with pattern five.`
        }
      ]
    },
    {
      id: 'pattern-5',
      title: 'Sibling-Aware Retrieval',
      slides: [
        {
          id: 12,
          title: '5) Sibling-Aware Retrieval',
          icon: { name: 'duo-arrows-rotate' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>
                    Goal / What It Solves <MermaidPopover
                      title="Sibling-Aware Retrieval Flow"
                      diagram={`flowchart LR
    A["⬅️ Prev Sibling"] --> B["🎯 Hit Chunk"]
    B --> C["➡️ Next Sibling"]
    D["👨‍👩‍👧 Parent"] --> A
    D --> B
    D --> C
    style B fill:#81c784,color:#000
    style A fill:#4fc3f7,color:#000
    style C fill:#4fc3f7,color:#000`}
                    />
                  </h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Maintains coherence across adjacent steps/paragraphs. Reduces out-of-context answers</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>How It Works</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Retrieve neighboring siblings (prev/next within same parent) around the hit chunk</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Procedure: Sibling Steps for Sequential Context"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart LR
    A["Step 1:\nInstall"] --> B["Step 2:\nConfigure"]
    B --> C["Step 3: Test\n🎯 query match"]
    C --> D["Step 4:\nDeploy"]
    B --> E["Context: Steps 2+3+4\nreturned together"]
    style C fill:#81c784,color:#000
    style B fill:#4fc3f7,color:#000
    style D fill:#4fc3f7,color:#000
    style E fill:#ffd700,color:#000`}
                    />
                  </div>
                  <h4 style={{ fontSize: '2rem' }}>When to Use</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Procedures, checklists, code blocks, numbered lists</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Pattern 5 - Sibling-Aware Retrieval

[conversational] For sequential content, neighboring chunks matter just as much as parent context. [excited] Pattern five addresses this by including sibling chunks around your matched result.

#### 🎯 The Goal

[confidently] The goal is to maintain coherence across adjacent content in your documents. [storytelling] Think about step three in a procedure. It makes very little sense without understanding step two that came before and step four that comes after. A checklist item depends on understanding its neighbors. [lecture] This pattern includes neighboring siblings to provide complete sequential context around your matched chunk.

#### 📊 Visual Flow

Here's how sibling-aware retrieval connects related chunks:

\`\`\`mermaid
flowchart LR
    A["⬅️ Prev Sibling"] --> B["🎯 Hit Chunk"]
    B --> C["➡️ Next Sibling"]
    D["👨‍👩‍👧 Parent"] --> A
    D --> B
    D --> C
    style B fill:#81c784,color:#000
    style A fill:#4fc3f7,color:#000
    style C fill:#4fc3f7,color:#000
\`\`\`

[conversational] This diagram shows that when you match a chunk, you don't just include its parent. You also include the previous sibling and next sibling chunks that share the same parent, giving you the full sequential flow.

#### ⚙️ How It Works

[lecture] When a chunk matches your query, you look up its siblings, which are other chunks that share the same parent. You include N chunks before and after the matched chunk. [cautiously] You need to respect section boundaries so you don't accidentally pull in siblings from a completely different section. And you merge any overlapping spans if multiple matched chunks have overlapping sibling sets.

#### 🕐 When to Use This?

[confidently] This pattern is perfect for step-by-step procedures where each step builds on previous ones. It works great for checklists where items are related sequentially. Code documentation that walks through a process benefits from this approach. And numbered lists where the sequence matters are ideal candidates for sibling-aware retrieval.`
        },
        {
          id: 13,
          title: 'Implementation & Trade-offs',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Data Structure Needed</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>prev_id, next_id, sibling_order</li>
                    <li>section_boundary markers</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Implementation Workflow</h4>
                  <ol style={{ marginTop: '10px' }}>
                    <li>On child hit, add N siblings before/after up to boundary or token limit</li>
                    <li>Merge and deduplicate overlapping spans</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} style={{ color: '#81c784' }} />
                      <h4 style={{ margin: 0 }}>Pros</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>Better continuity</li>
                      <li>Improves answers requiring sequence context</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>May pull irrelevant neighbors</li>
                      <li>Increases latency and context size</li>
                    </ul>
                  </div>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Pattern 5 - Implementation & Trade-offs

[lecture] Let's look at how to implement sibling-aware retrieval and what trade-offs come with this horizontal context expansion.

#### 📊 Data Structure Needed

[conversational] You need to store sibling relationships explicitly in your data structure. Maintain previous ID and next ID fields that create direct links between adjacent chunks. Include a sibling order field that captures the position in the sequence, so you know which chunks come before and after. And store section boundary markers so you know when to stop traversing siblings, preventing you from accidentally including chunks from completely different sections.

#### 🔧 Implementation Workflow

[confidently] When you get a child chunk hit from your retrieval, you add N siblings before and after that chunk, going up to either a section boundary or your token limit, whichever comes first. Then you merge and deduplicate any overlapping spans. [conversational] This can happen when multiple retrieved chunks are close to each other and have overlapping sibling sets. You want to avoid sending duplicate text to your language model.

#### ✅ Pros

[pleased] This pattern provides much better continuity in your retrieved context. You're not just getting isolated chunks, you're getting the natural flow of content. It dramatically improves answers that require sequence context, like understanding multi-step processes or following an argument that builds across paragraphs. And it catches prerequisite context that might appear in the chunk right before your match.

#### ⚠️ Cons

[cautiously] The main risk is that you may pull irrelevant neighbors. Not all adjacent chunks are actually related to the query. [disappointed] This pattern assumes sequential relevance, which isn't always true. It increases latency because you need extra lookups to fetch sibling chunks. And it increases context size, using more tokens than just returning the matched chunk alone. [conversational] You're making a bet that the extra tokens spent on siblings will improve answer quality enough to justify the cost.

Having explored sibling relationships, let's look at pattern six, which takes a simpler approach to expanding context with sliding windows.`
        }
      ]
    },
    {
      id: 'pattern-6',
      title: 'Windowed Retrieval',
      slides: [
        {
          id: 14,
          title: '6) Windowed Retrieval (Sliding Context Windows)',
          icon: { name: 'duo-window-maximize' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>
                    Goal / What It Solves <MermaidPopover
                      title="Windowed Retrieval Flow"
                      diagram={`flowchart LR
    A["📍 Matched Chunk"] --> B["⬅️ Window Before"]
    A --> C["➡️ Window After"]
    B --> D["📦 Expanded Context"]
    A --> D
    C --> D
    style A fill:#81c784,color:#000
    style D fill:#4fc3f7,color:#000
    style B fill:#ffb74d,color:#000
    style C fill:#ffb74d,color:#000`}
                    />
                  </h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Captures local context beyond chunk edges without full parent overhead</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>How It Works</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Expand the retrieved chunk by a fixed token/character window before and after</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Transcript: Sliding Window Expansion"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart LR
    A["... prior\ntext ..."] --> B["[−W tokens\nwindow]"]
    B --> C["📍 matched\nchunk"]
    C --> D["[+W tokens\nwindow]"]
    D --> E["... later\ntext ..."]
    B --> F["Expanded context\nreturned"]
    C --> F
    D --> F
    style C fill:#81c784,color:#000
    style B fill:#4fc3f7,color:#000
    style D fill:#4fc3f7,color:#000
    style F fill:#ffd700,color:#000`}
                    />
                  </div>
                  <h4 style={{ fontSize: '2rem' }}>When to Use</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Linear prose, transcripts, articles with weak headings</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: `### Pattern 6 - Windowed Retrieval

[playful] Pattern six is the simplest form of context expansion. You just grab more text around your match using a sliding window approach.

#### 🎯 The Goal

[conversational] The goal is to capture local context beyond chunk edges without the complexity or overhead of building tree structures or tracking parent-child relationships. [lighthearted] Sometimes you just need a bit more text on either side of your matched chunk to provide adequate context, and a simple window expansion gives you that without any fancy data structures.

#### 📊 Visual Flow

Here's how windowed retrieval expands your context:

\`\`\`mermaid
flowchart LR
    A["📍 Matched Chunk"] --> B["⬅️ Window Before"]
    A --> C["➡️ Window After"]
    B --> D["📦 Expanded Context"]
    A --> D
    C --> D
    style A fill:#81c784,color:#000
    style D fill:#4fc3f7,color:#000
    style B fill:#ffb74d,color:#000
    style C fill:#ffb74d,color:#000
\`\`\`

[conversational] This diagram shows how a matched chunk expands symmetrically to include windows before and after, combining all three pieces into the final expanded context.

#### ⚙️ How It Works

[lecture] You store character or token offsets for each chunk in your index. Then on retrieval, you get the matched chunk's start and end offsets. You expand by W tokens or characters in each direction, so if your chunk is at positions one thousand to fifteen hundred, and W is two hundred, you expand to positions eight hundred to seventeen hundred. Then you fetch that expanded window from your document store and handle any overlaps if multiple chunks have overlapping windows.

#### 🕐 When to Use This?

[confidently] This pattern is ideal for linear prose without clear hierarchical structure. Meeting transcripts where there aren't meaningful section breaks work well with windowed retrieval. Articles with weak or nonexistent headings benefit from this approach. [pleased] And whenever you need simplicity and don't want to invest in building elaborate parent-child structures, windowed retrieval gives you a quick win with minimal implementation complexity.`
        },
        {
          id: 15,
          title: 'Implementation & Trade-offs',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Data Structure Needed</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Character/token offsets per chunk</li>
                    <li>Document-wide text offsets</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Implementation Workflow</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Chunk with offsets; on retrieval, compute window [start−W, end+W]; fetch and merge</li>
                  </ul>
                </div>
                <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} style={{ color: '#81c784' }} />
                      <h4 style={{ margin: 0 }}>Pros</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>Simple; effective for linear text</li>
                      <li>Low structural requirements</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>Overlap duplication</li>
                      <li>No awareness of section boundaries</li>
                    </ul>
                  </div>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: `### Pattern 6 - Implementation & Trade-offs

[conversational] Let's discuss the implementation details and trade-offs for windowed retrieval, which is refreshingly simple compared to our previous patterns.

#### 📊 Data Structure Needed

[pleased] Your data structure requirements are minimal. You just need start offset and end offset for each chunk, tracking where it sits in the original document. Store a document ID if you're supporting multiple documents, so you know which document to fetch the expanded window from. [lighthearted] That's really all you need, no parent IDs, no sibling links, no tree structures.

#### 🔧 Implementation Workflow

[lecture] During chunking, you record the character or token offsets for each chunk as you create it. Then on retrieval, when you match a chunk, you compute an expanded window by subtracting W from the start position and adding W to the end position. You fetch that expanded text range from your document store and merge any overlapping windows if you have multiple nearby matches. [conversational] It's a straightforward offset-based expansion.

#### ✅ Pros

[enthusiastically] The beauty of this pattern is its extreme simplicity. Implementation is easy and you can add it to an existing system quickly. It works without any document structure at all, so you don't need headings or sections or hierarchy. And token usage is predictable because you're always expanding by exactly W tokens on each side, making it easy to budget your context window.

#### ⚠️ Cons

[cautiously] However, the simplicity comes with limitations. There's no semantic awareness, so you might be including irrelevant text that just happens to be nearby. [disappointed] You may cross section boundaries inappropriately, pulling in text from a completely different topic that happens to be adjacent in the document. And overlap handling can get tricky when multiple matches are close together, requiring careful deduplication logic.

Now let's move to pattern seven, which builds semantic rather than structural hierarchies.`
        }
      ]
    },
    {
      id: 'pattern-7',
      title: 'Semantic Hierarchy Retrieval',
      slides: [
        {
          id: 16,
          title: '7) Semantic Hierarchy Retrieval',
          icon: { name: 'duo-sitemap' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>
                    Goal / What It Solves <MermaidPopover
                      title="Semantic Hierarchy Flow"
                      diagram={`flowchart TD
    A["🏷️ Topic Cluster"] --> B["📄 Chunk 1"]
    A --> C["📄 Chunk 2"]
    A --> D["📄 Chunk 3"]
    E["🔍 Query"] --> F["Match Chunk 2"]
    F --> G["Include Topic Summary"]
    style A fill:#ba68c8,color:#fff
    style F fill:#81c784,color:#000
    style G fill:#4fc3f7,color:#000`}
                    />
                  </h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Reduces hallucination by grouping evidence under topic-level parents (taxonomy/clusters)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>How It Works</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Map chunks to taxonomy nodes or clusters; retrieve topic parent summary plus child hits</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Knowledge Base: Topic Cluster Groups Scattered Content"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TD
    A["🏷️ Topic: Authentication"]
    A --> B["Article A\n(doc 1)"]
    A --> C["FAQ entry\n(doc 2)"]
    A --> D["Guide §4\n(doc 3)"]
    C --> E["Query match →\ninclude topic summary"]
    style A fill:#ba68c8,color:#fff
    style C fill:#81c784,color:#000
    style E fill:#ffd700,color:#000`}
                    />
                  </div>
                  <h4 style={{ fontSize: '2rem' }}>When to Use</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Knowledge bases, FAQs, multi-product docs; content with synonym-rich topics</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: `### Pattern 7 - Semantic Hierarchy Retrieval

[excited] When your document structure doesn't reflect the actual semantic structure of your content, pattern seven lets you build your own hierarchy based on meaning rather than formatting.

#### 🎯 The Goal

[confidently] The goal is to group chunks by semantic topic rather than by document structure. [storytelling] This helps tremendously when related content is scattered across different documents or different sections. Instead of being constrained by how the author organized the document, you create a semantic organization that reflects actual topical relationships.

#### 📊 Visual Flow

Here's how semantic clustering connects content:

\`\`\`mermaid
flowchart TD
    A["🏷️ Topic Cluster"] --> B["📄 Chunk 1"]
    A --> C["📄 Chunk 2"]
    A --> D["📄 Chunk 3"]
    E["🔍 Query"] --> F["Match Chunk 2"]
    F --> G["Include Topic Summary"]
    style A fill:#ba68c8,color:#fff
    style F fill:#81c784,color:#000
    style G fill:#4fc3f7,color:#000
\`\`\`

[conversational] This diagram shows chunks grouped under a topic cluster regardless of their original document structure. When you match a chunk, you include its topic cluster summary to provide semantic context.

#### ⚙️ How It Works

[lecture] First, you build a taxonomy or run clustering on your chunks to identify semantic groups. This could be manual taxonomy creation, k-means clustering, or hierarchical clustering of your embeddings. Then you generate topic summaries for each cluster, creating a concise description of what that topic is about. [confidently] Finally, on retrieval, when you match a chunk, you include its topic context along with the matched content, giving the language model both the specific evidence and the broader topic framing.

#### 🕐 When to Use This?

[pleased] This pattern is great for knowledge bases where related information is distributed across many documents. FAQ 👉 'eff-ay-queue' collections benefit because questions about the same topic might be scattered throughout your database. Multi-product documentation works well because you can group by feature or concept rather than by product manual. And any content with many synonyms or variants benefits because semantic clustering can group content that uses different words to describe the same concept.`
        },
        {
          id: 17,
          title: 'Implementation & Trade-offs',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Data Structure Needed</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>topic_id, parent_topic_id; cluster centroids</li>
                    <li>Topic summaries; group embeddings</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Implementation Workflow</h4>
                  <ol style={{ marginTop: '10px' }}>
                    <li>Build/align taxonomy or perform clustering; compute group embeddings and summaries</li>
                    <li>Query → retrieve children and their topic parents; include top exemplars</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} style={{ color: '#81c784' }} />
                      <h4 style={{ margin: 0 }}>Pros</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>Strong semantic grounding</li>
                      <li>Resilient to phrasing variance</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>Taxonomy drift/maintenance</li>
                      <li>Clustering errors propagate to retrieval</li>
                    </ul>
                  </div>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: `### Pattern 7 - Implementation & Trade-offs

[lecture] Let's explore how to implement semantic hierarchy retrieval and what challenges you'll face maintaining semantic structures.

#### 📊 Data Structure Needed

[conversational] You need to build a semantic structure alongside your documents. Store a topic ID for each topic cluster and a parent topic ID if you're building hierarchical taxonomies. Maintain cluster centroids in your embedding space so you can measure similarity to topics. Generate and store topic summaries that describe what each cluster is about. And compute group embeddings that represent the average or centroid of all chunks in that topic.

#### 🔧 Implementation Workflow

[confidently] First, you build or align a taxonomy for your content, or perform clustering like k-means or HDBSCAN 👉 'h-d-b-scan' on your embeddings. You compute group embeddings and generate summaries for each cluster, perhaps using an LLM 👉 'ell-ell-em' to create concise topic descriptions. Then at query time, you retrieve children chunks that match, and their topic parents, providing both the specific evidence and the topic-level context. [conversational] You can also include top exemplars from the cluster to show representative examples.

#### ✅ Pros

[pleased] This pattern provides strong semantic grounding because context comes from topical meaning rather than arbitrary document structure. It's resilient to phrasing variance, so queries using different words than your documents can still match the right semantic cluster. And you get topic-coherent answers because related information is grouped together even if it came from different sources.

#### ⚠️ Cons

[cautiously] The major challenge is taxonomy drift and maintenance. As your content evolves, your topic structure needs to evolve with it. [disappointed] Clustering errors propagate to retrieval, so if your clustering algorithm puts a chunk in the wrong topic, that mistake affects every retrieval involving that chunk. And you need an additional preprocessing pipeline to build and maintain the semantic structure, adding complexity to your system.

With semantic structures covered, let's look at pattern eight, which compresses context to fit tight budgets.`
        }
      ]
    },
    {
      id: 'pattern-8',
      title: 'Dynamic Context Folding',
      slides: [
        {
          id: 18,
          title: '8) Dynamic Context Folding',
          icon: { name: 'duo-compress' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>
                    Goal / What It Solves <MermaidPopover
                      title="Dynamic Context Folding"
                      diagram={`flowchart TD
    A["📄 Full Parent Section"] --> B["🗜️ Compression Engine"]
    B --> C["📦 30% Summary"]
    B --> D["📦 50% Summary"]
    B --> E["📦 70% Summary"]
    F["👶 Child Chunk"] --> G["⚖️ Budget Check"]
    C --> G
    D --> G
    E --> G
    G --> H["✅ Optimized Context"]
    style A fill:#ffb74d,color:#000
    style F fill:#81c784,color:#000
    style H fill:#4fc3f7,color:#000`}
                    />
                  </h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Fits long parents into tight budgets while keeping detailed child evidence</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>How It Works</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Attach compressed/summarized parents + full child; adapt compression by budget</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Budget-Adaptive Compression: Fit Long Sections"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart LR
    A["📄 Section\n2000 tokens"] --> B{"Budget\ncheck"}
    B -->|"500 tok\navailable"| C["30% summary\n= 600 tok ✅"]
    B -->|"1500 tok\navailable"| D["70% summary\n= 1400 tok ✅"]
    C --> E["child + summary\nsent to LLM"]
    D --> E
    style A fill:#ffb74d,color:#000
    style C fill:#81c784,color:#000
    style D fill:#c8e6c9,color:#000
    style E fill:#ffd700,color:#000`}
                    />
                  </div>
                  <h4 style={{ fontSize: '2rem' }}>When to Use</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Long sections, limited context windows, cost-sensitive deployments</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Pattern 8 - Dynamic Context Folding

[excited] Pattern eight introduces smart compression to help you fit more context into limited token budgets without losing critical information.

#### 🎯 The Goal

[conversational] When parent sections are too long for your available token budget, the goal is to compress them intelligently rather than just truncating or omitting them entirely. [confidently] You want to keep the child chunk at full detail since that's your primary evidence, while summarizing the parent to provide governing context without consuming too many tokens.

#### 📊 Visual Flow

Here's how dynamic context folding works:

\`\`\`mermaid
flowchart TD
    A["📄 Full Parent Section"] --> B["🗜️ Compression Engine"]
    B --> C["📦 30% Summary"]
    B --> D["📦 50% Summary"]
    B --> E["📦 70% Summary"]
    F["👶 Child Chunk"] --> G["⚖️ Budget Check"]
    C --> G
    D --> G
    E --> G
    G --> H["✅ Optimized Context"]
    style A fill:#ffb74d,color:#000
    style F fill:#81c784,color:#000
    style H fill:#4fc3f7,color:#000
\`\`\`

[conversational] This diagram shows how a full parent section gets compressed at multiple levels, then the appropriate summary is selected based on token budget and combined with the full child chunk.

#### ⚙️ How It Works

[lecture] You precompute multiple compression levels for your parent sections during preprocessing. You might create a thirty percent summary, a fifty percent summary, and a seventy percent summary for each parent. [confidently] Then at retrieval time, you select the appropriate compression level based on your available token budget. If you have lots of budget, use the seventy percent version. If budget is tight, use the thirty percent version. Finally, you combine the full detailed child chunk with your compressed parent to create a context that's both specific and grounded.

#### 🕐 When to Use This?

[seriously] This pattern is essential when you have long parent sections that would consume too many tokens in their full form. It's critical for limited context window models where every token counts. Cost-sensitive deployments benefit because you're reducing the number of tokens sent to expensive language models. And high-throughput systems use this pattern to process more queries in the same amount of time by using fewer tokens per query.`
        },
        {
          id: 19,
          title: 'Implementation & Trade-offs',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Data Structure Needed</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Parent summaries at multiple compression ratios</li>
                    <li>Keyphrases; salience scores</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Implementation Workflow</h4>
                  <ol style={{ marginTop: '10px' }}>
                    <li>Precompute 30–70% parent compressions; store pointers</li>
                    <li>Retrieval picks compression level by token budget; attach full child + compressed parent</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} style={{ color: '#81c784' }} />
                      <h4 style={{ margin: 0 }}>Pros</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>Balanced precision/recall</li>
                      <li>Efficient use of tokens</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>Summarization can lose critical details</li>
                      <li>Preprocessing overhead; needs QA</li>
                    </ul>
                  </div>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Pattern 8 - Implementation & Trade-offs

[lecture] Let's discuss how to implement dynamic compression and the quality trade-offs involved in summarization.

#### 📊 Data Structure Needed

[conversational] You need to store multiple compression variants for each parent section. Create and store summaries at different compression ratios, like summary at thirty percent, summary at fifty percent, and summary at seventy percent of the original length. Extract and store keyphrases that are particularly important to preserve across all compression levels. And maintain salience scores for different parts of the parent so you can prioritize what to keep when compressing.

#### 🔧 Implementation Workflow

[confidently] During preprocessing, you precompute summaries at different compression levels for each parent, maybe thirty percent, fifty percent, and seventy percent of the original length. Store pointers to each compression variant. [conversational] Then at retrieval time, you pick the compression level based on your available token budget. If you have two hundred tokens available and the full parent is five hundred tokens, maybe you use the forty percent compression. Finally, you attach the full child chunk plus the compressed parent in your context window.

#### ✅ Pros

[pleased] This pattern provides excellent balanced precision and recall. You're keeping detailed evidence in the child while still providing governing context from the parent. It's very efficient in your use of tokens because you're adapting the amount of parent text to your available budget. And it offers a good cost to quality trade-off, letting you control how much you spend on each query while maintaining answer quality.

#### ⚠️ Cons

[cautiously] The primary risk is that summarization can lose critical details. [concerned] A nuance in the parent that's essential for correctly interpreting the child might get compressed away. You need significant preprocessing overhead to generate and store multiple compression variants for every parent. And quality assurance is essential because you need to validate that your summaries actually preserve the important information and don't introduce errors or change meaning.

Now let's explore pattern nine, which combines semantic and lexical matching for maximum precision.`
        }
      ]
    },
    {
      id: 'pattern-9',
      title: 'Hybrid Parent-Child + BM25',
      slides: [
        {
          id: 20,
          title: '9) Hybrid Parent-Child + BM25 Verification',
          icon: { name: 'duo-shield-check' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>
                    Goal / What It Solves <MermaidPopover
                      title="Hybrid BM25 Verification Flow"
                      diagram={`flowchart LR
    A["🔍 Query"] --> B["🧠 Dense Retrieve"]
    B --> C["👶 Children"]
    C --> D["🔗 Attach Parents"]
    D --> E["📊 BM25 Verify"]
    E --> F["✅ Verified Results"]
    style B fill:#4fc3f7,color:#000
    style E fill:#81c784,color:#000
    style F fill:#ffd700,color:#000`}
                    />
                  </h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Increases precision by lexically verifying semantic hits to reduce hallucinations</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>How It Works</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Dense retrieve child; attach parent; re-score/verify parent with BM25/keyword constraints</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Compliance: BM25 Verifies Exact Term Presence"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart LR
    A["⚖️ Legal Query:\n'Section 4.2.1'"] --> B["Semantic\nmatch"]
    B --> C["Parent text"]
    C --> D{"BM25 check:\n'4.2.1' present?"}
    D -->|"✓ Yes"| E["✅ Verified hit\nreturned"]
    D -->|"✗ No"| F["❌ Filtered\nout"]
    style E fill:#81c784,color:#000
    style F fill:#ffcdd2,color:#000
    style D fill:#e3f2fd,color:#000`}
                    />
                  </div>
                  <h4 style={{ fontSize: '2rem' }}>When to Use</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Compliance, legal, specs where exact terms/numbers matter</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: `### Pattern 9 - Hybrid Parent-Child + BM25 Verification

[excited] Pattern nine combines the power of semantic and lexical matching to achieve maximum precision in your retrievals.

#### 🎯 The Goal

[seriously] The goal is to increase precision by verifying that your semantic matches actually contain the relevant keywords and exact terms. [confidently] This is absolutely critical when exact terminology matters, like in compliance documents where specific regulatory language is required, or technical specifications where precise version numbers or part identifiers are essential.

#### 📊 Visual Flow

Here's how hybrid verification works:

\`\`\`mermaid
flowchart LR
    A["🔍 Query"] --> B["🧠 Dense Retrieve"]
    B --> C["👶 Children"]
    C --> D["🔗 Attach Parents"]
    D --> E["📊 BM25 Verify"]
    E --> F["✅ Verified Results"]
    style B fill:#4fc3f7,color:#000
    style E fill:#81c784,color:#000
    style F fill:#ffd700,color:#000
\`\`\`

[conversational] This diagram shows the two-stage process: first use dense semantic retrieval to find relevant children, attach their parents, then use BM25 👉 'bee-em-twenty-five' to verify that the parents actually contain the key terms you're looking for.

#### ⚙️ How It Works

[lecture] First, you use dense retrieval on your children to get semantic matches using embeddings. Then you attach the parent sections to those matched children. Next, you apply BM25 👉 'bee-em-twenty-five' scoring on the parent text to check for lexical matches of important terms. [confidently] Finally, you filter or rank your results based on the lexical match score, keeping only results where the parent actually contains the key terms or meets your BM25 👉 'bee-em-twenty-five' threshold.

#### 🕐 When to Use This?

[seriously] This pattern is essential for compliance documents where specific regulatory language must be present. Legal text analysis requires exact terms and phrases to be matched. Technical specifications need precise part numbers, version identifiers, and technical terminology. Any domain where exact terms, numbers, or specific phrasing matters is a great candidate for hybrid verification.`
        },
        {
          id: 21,
          title: 'Implementation & Trade-offs',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Data Structure Needed</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Dense index for children; sparse (BM25) index for parents</li>
                    <li>Term dictionaries</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                {[
                  <div key="workflow" style={{ marginBottom: '1em' }}>
                    <h4 style={{ fontSize: '2rem' }}>Implementation Workflow</h4>
                    <ol style={{ marginTop: '10px' }}>
                      <li>Dense child retrieval</li>
                      <li>Attach parent sections</li>
                      <li>BM25 score against parent; threshold/gate; optional hybrid union/intersection</li>
                    </ol>
                  </div>
                ]}
                <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} style={{ color: '#81c784' }} />
                      <h4 style={{ margin: 0 }}>Pros</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>Strong precision on entities/dates/numbers</li>
                      <li>Robust to embedding misses</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>Added latency and infra</li>
                      <li>Threshold tuning; dual-index maintenance</li>
                    </ul>
                  </div>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: `### Pattern 9 - Implementation & Trade-offs

[lecture] Let's explore the implementation of dual-index hybrid retrieval and the infrastructure complexity it introduces.

#### 📊 Data Structure Needed

[conversational] You need dual indexing to support this pattern. Maintain a dense index with embeddings for semantic child retrieval. Also maintain a BM25 👉 'bee-em-twenty-five' or sparse index specifically for parent verification using lexical matching. And keep term dictionaries for important keywords that must be matched, like regulatory terms, technical identifiers, or entity names.

#### 🔧 Implementation Workflow

[confidently] Your retrieval happens in stages. First, perform dense child retrieval using vector similarity to find semantically relevant chunks. Second, attach the parent sections to those matched children. Third, apply BM25 👉 'bee-em-twenty-five' scoring against the parent text to check for lexical matches. [lecture] Set a threshold to gate results, keeping only those where the parent scores above your BM25 👉 'bee-em-twenty-five' threshold. [conversational] Optionally, you can use hybrid union or intersection strategies, combining results from both semantic and lexical retrieval for even better coverage.

#### ✅ Pros

[pleased] This pattern provides strong precision on entities, dates, and numbers because BM25 👉 'bee-em-twenty-five' catches exact matches that embeddings might miss. It's robust to embedding misses, so when your semantic model fails to recognize an important term, the lexical index saves you. And it compensates for embedding weaknesses like poor handling of rare terms, acronyms, or newly introduced vocabulary.

#### ⚠️ Cons

[cautiously] The infrastructure becomes more complex because you need two indices to maintain, both the dense vector index and the BM25 👉 'bee-em-twenty-five' sparse index. [disappointed] There's added latency from running two retrieval stages and scoring twice. Threshold tuning is required to balance precision and recall, and finding the right threshold takes experimentation. And maintaining dual indices means double the storage and double the indexing pipeline complexity.

Now let's look at pattern ten, which uses cross-encoders for even more precise parent selection.`
        }
      ]
    },
    {
      id: 'pattern-10',
      title: 'Parent Re-Ranking (Cross-Encoder)',
      slides: [
        {
          id: 22,
          title: '10) Parent Re-Ranking using Cross-Encoder',
          icon: { name: 'duo-ranking-star' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>
                    Goal / What It Solves <MermaidPopover
                      title="Cross-Encoder Re-ranking Flow"
                      diagram={`flowchart LR
    A["🔍 Dense Retrieval"] --> B["👶 Children"]
    B --> C["📋 Collect Parents"]
    C --> D["🤝 Cross-Encoder"]
    E["❓ Query"] --> D
    D --> F["📊 Relevance Scores"]
    F --> G["🏆 Top-m Parents"]
    style B fill:#81c784,color:#000
    style G fill:#4fc3f7,color:#000
    style D fill:#ffb74d,color:#000`}
                    />
                  </h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Selects the most relevant section root to ground the answer using deep relevance scoring</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>How It Works</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Map retrieved children to candidate parents; cross-encode (query, parent) pairs; keep top-m parents</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Long Doc: Cross-Encoder Selects Best Parent"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    A["50-section\ndocument"] --> B["Dense: 8 children\nmatched"]
    B --> C["Collect unique parents"]
    C --> D["Cross-encoder scores\neach (query, parent)"]
    D --> E["§7: 0.92 ✅"]
    D --> F["§23: 0.89 ✅"]
    D --> G["§12: 0.45 ❌"]
    E --> H["Top-2 parents\nselected"]
    F --> H
    style E fill:#81c784,color:#000
    style F fill:#81c784,color:#000
    style G fill:#ffcdd2,color:#000
    style H fill:#ffd700,color:#000`}
                    />
                  </div>
                  <h4 style={{ fontSize: '2rem' }}>When to Use</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Very long documents with multiple plausible parent sections</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: `### Pattern 10 - Parent Re-Ranking using Cross-Encoder

[excited] When bi-encoder retrieval isn't giving you the precision you need, pattern ten brings in cross-encoders for much more accurate parent selection.

#### 🎯 The Goal

[confidently] The goal is to select the most relevant parent among multiple candidates using deep relevance scoring. [lecture] Bi-encoders encode queries and documents independently, which is fast but sometimes imprecise. Cross-encoders jointly encode the query and document together, allowing much richer interaction between them, resulting in higher quality relevance scores.

#### 📊 Visual Flow

Here's how cross-encoder re-ranking enhances parent selection:

\`\`\`mermaid
flowchart LR
    A["🔍 Dense Retrieval"] --> B["👶 Children"]
    B --> C["📋 Collect Parents"]
    C --> D["🤝 Cross-Encoder"]
    E["❓ Query"] --> D
    D --> F["📊 Relevance Scores"]
    F --> G["🏆 Top-m Parents"]
    style B fill:#81c784,color:#000
    style G fill:#4fc3f7,color:#000
    style D fill:#ffb74d,color:#000
\`\`\`

[conversational] This diagram shows how retrieved children lead to candidate parents, which are then precisely scored by the cross-encoder against the query to select only the most relevant ones.

#### ⚙️ How It Works

[lecture] First, you use dense retrieval to get your children chunks as usual. Then you collect all the unique parent sections from those children, since multiple children might share the same parent. [confidently] Next, you cross-encode each query and parent pair, running your cross-encoder model on every combination to get precise relevance scores. Finally, you keep only the top-m parents by cross-encoder score, ensuring you're attaching only the most relevant governing context.

#### 🕐 When to Use This?

[seriously] This pattern is best for very long documents where there are many potential parent sections and you need to carefully select which ones to include. It's ideal when you have multiple plausible parent sections and simple bi-encoder scoring isn't discriminating enough. And it's essential for high-stakes applications requiring maximum precision, like medical question answering or legal research, where the cost of including an irrelevant parent section is very high.`
        },
        {
          id: 23,
          title: 'Implementation & Trade-offs',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Data Structure Needed</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Parent passages, child→parent mapping</li>
                    <li>Cross-encoder model/artifacts</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Implementation Workflow</h4>
                  <ol style={{ marginTop: '10px' }}>
                    <li>Dense retrieve children → collect unique parents</li>
                    <li>Cross-encoder re-rank parents → select top-m → attach top parents + their best children</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} style={{ color: '#81c784' }} />
                      <h4 style={{ margin: 0 }}>Pros</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>High-quality grounding</li>
                      <li>Reduces irrelevant parents</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>Compute-heavy (O(n) model calls)</li>
                      <li>Model updates/serving complexity</li>
                    </ul>
                  </div>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: `### Pattern 10 - Implementation & Trade-offs

[lecture] Let's explore how to implement cross-encoder re-ranking and why the computational cost is significant.

#### 📊 Data Structure Needed

[conversational] You need to store parent passages in their full text form because cross-encoders need complete context to score accurately. Maintain your child to parent mapping so you can collect candidate parents from retrieved children. And you need a cross-encoder model and its artifacts, like models from the MS 👉 'em-ess' MARCO 👉 'mar-co' family such as MS 👉 'em-ess' MARCO 👉 'mar-co' MiniLM 👉 'mini-ell-em', which are specifically trained for relevance scoring.

#### 🔧 Implementation Workflow

[confidently] Your workflow has two stages. First, perform dense retrieval on children using your bi-encoder, then collect all unique parents from those children since you might have multiple children from the same parent. [lecture] Second, run your cross-encoder to re-rank the parents. For each query and parent pair, run the cross-encoder to get a precise relevance score. Select the top-m parents by score, maybe keeping just the top three or top five. Finally, attach those top parents along with their best matching children to your context.

#### ✅ Pros

[pleased] This pattern gives you best-in-class relevance scoring because cross-encoders can model the interaction between query and document much more precisely than bi-encoders. It eliminates poor parent matches that might have made it through bi-encoder retrieval. And you get high confidence grounding because you know the parents you're including are truly relevant to the query based on deep semantic understanding.

#### ⚠️ Cons

[cautiously] The major downside is computational expense. [concerned] Cross-encoders have O 👉 'oh' of n complexity in terms of model inference, meaning you run the model once for every candidate parent. This creates significant latency impact, especially if you have many candidate parents. And there's model serving complexity because you need infrastructure to serve cross-encoder models in production, managing model updates, versioning, and ensuring low latency at scale.

Now let's explore our final pattern, which uses graph structures for rich relational context.`
        }
      ]
    },
    {
      id: 'pattern-11',
      title: 'Graph / KG Parent Retrieval',
      slides: [
        {
          id: 24,
          title: '11) Graph / Knowledge-Node Parent Retrieval',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>
                    Goal / What It Solves <MermaidPopover
                      title="Graph-Based Retrieval Flow"
                      diagram={`flowchart TD
    A["📄 Section Node"] -->|parent_of| B["📄 Subsection"]
    B -->|cites| C["📚 Reference"]
    B -->|prerequisite| D["📄 Other Section"]
    E["🔍 Query"] --> F["Match Node B"]
    F --> G["Traverse Edges"]
    G --> H["Compile Context"]
    style F fill:#81c784,color:#000
    style G fill:#ba68c8,color:#fff
    style H fill:#4fc3f7,color:#000`}
                    />
                  </h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Disambiguates context via explicit relations and multi-hop traversal</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>How It Works</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Convert sections/entities to nodes; retrieve nodes; traverse edges to parent/related nodes</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="API Docs: Graph Traversal Across Interlinked Nodes"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TD
    A["🔧 createUser()"] -->|"calls"| B["validateInput()"]
    A -->|"depends on"| C["AuthService"]
    B -->|"cites"| D["§3.2 Validation\nRules"]
    E["Query: createUser\nauth"] --> F["Match A → traverse\nedges → B, C, D"]
    style A fill:#81c784,color:#000
    style F fill:#ffd700,color:#000
    style B fill:#e1bee7,color:#000
    style C fill:#e1bee7,color:#000
    style D fill:#e3f2fd,color:#000`}
                    />
                  </div>
                  <h4 style={{ fontSize: '2rem' }}>When to Use</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>SOP dependencies, API interlinks, scientific corpora, cross-doc references</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Pattern 11 - Graph / Knowledge-Node Parent Retrieval

[enthusiastically] Our final pattern is also the most powerful one for modeling complex document relationships. [excited] Pattern eleven uses graph structures to represent and navigate rich interconnections.

#### 🎯 The Goal

[confidently] The goal is to use explicit relationships and multi-hop traversal to provide rich, interconnected context that goes beyond simple parent-child hierarchies. [storytelling] Instead of just going up a tree, you can traverse any type of relationship: citations, prerequisites, related concepts, cross-references, and more.

#### 📊 Visual Flow

Here's how graph-based retrieval works:

\`\`\`mermaid
flowchart TD
    A["📄 Section Node"] -->|parent_of| B["📄 Subsection"]
    B -->|cites| C["📚 Reference"]
    B -->|prerequisite| D["📄 Other Section"]
    E["🔍 Query"] --> F["Match Node B"]
    F --> G["Traverse Edges"]
    G --> H["Compile Context"]
    style F fill:#81c784,color:#000
    style G fill:#ba68c8,color:#fff
    style H fill:#4fc3f7,color:#000
\`\`\`

[conversational] This diagram shows how when you match a node in your graph, you can traverse different types of edges to gather related context. You might follow parent edges, citation edges, prerequisite edges, or any other relationship type you've encoded.

#### ⚙️ How It Works

[lecture] First, you model your documents as a graph where nodes represent sections, entities, or concepts. You define different edge types like parent of, cites, prerequisite of, related to, and any other relationships that exist in your domain. [confidently] Then on retrieval, when you match a node, you traverse edges to gather all related context. This supports multi-hop reasoning where you might go two or three hops away from the matched node to find relevant governing or supporting context.

#### 🕐 When to Use This?

[seriously] This pattern is essential for SOPs 👉 'ess-oh-pees' or standard operating procedures with dependencies where one procedure requires completing others first. [pleased] API 👉 'ay-pee-eye' documentation with interlinks benefits enormously because methods depend on each other and reference shared concepts. Scientific papers with citations are a classic use case where understanding one paper requires understanding what it cites and what cites it. And any cross-document reference system where information spans multiple documents with explicit links between them is perfect for graph-based retrieval.`
        },
        {
          id: 25,
          title: 'Implementation & Trade-offs',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Data Structure Needed</h4>
                  <ul style={{ marginTop: '10px' }}>
                    <li>Graph DB (e.g., Neo4j); nodes: section, entity</li>
                    <li>Edges: parent_of, cites, prerequisite_of; node/edge embeddings</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4 style={{ fontSize: '2rem' }}>Implementation Workflow</h4>
                  <ol style={{ marginTop: '10px' }}>
                    <li>Build graph from structure and links; index nodes/edges</li>
                    <li>Query → retrieve nodes (dense/sparse) → k-hop expand to parents/anchors → compile context</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} style={{ color: '#81c784' }} />
                      <h4 style={{ margin: 0 }}>Pros</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>Interpretable grounding via explicit relations</li>
                      <li>Supports multi-hop reasoning; cross-doc integration</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ marginTop: '10px' }}>
                      <li>Higher complexity; graph maintenance</li>
                      <li>Query planning costs; traversal latency</li>
                    </ul>
                  </div>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Pattern 11 - Implementation & Trade-offs

[lecture] Let's explore the implementation of graph-based retrieval and why it's the most complex but also most expressive pattern we've covered.

#### 📊 Data Structure Needed

[conversational] You need full graph infrastructure to support this pattern. Use a graph database like Neo4j 👉 'nee-oh-four-jay', Neptune 👉 'nep-tune', or a similar system. [lecture] Define your node types, which might include sections, entities, and concepts. Create edge types that capture different relationships: parent of for hierarchy, cites for references, prerequisite of for dependencies, and related to for semantic connections. And store embeddings on your nodes and optionally on edges as well if you want to search by relationship semantics.

#### 🔧 Implementation Workflow

[confidently] During preprocessing, you build your graph from document structure and explicit links. You parse documents to create nodes and extract relationships to create edges. Index both nodes and edges so you can search them efficiently. [lecture] Then at query time, you retrieve matching nodes using either dense semantic search on node embeddings or sparse keyword search on node text. From those matched nodes, you perform k-hop expansion to parents and other anchor nodes, traversing edges according to your retrieval strategy. Finally, you compile the context from all the gathered nodes, presenting both the matched content and its relational context.

#### ✅ Pros

[enthusiastically] This pattern provides the most expressive relationship modeling of all our patterns. You can represent any type of connection your domain requires. [pleased] It enables genuine multi-hop reasoning where answers require combining information from multiple related nodes. It works seamlessly across documents because edges can connect nodes from different sources. And it's highly interpretable because you can show users exactly which relationships were followed to gather context.

#### ⚠️ Cons

[cautiously] The downside is this pattern has the highest implementation complexity. [concerned] Building and maintaining a graph database is non-trivial infrastructure. There's significant graph maintenance overhead as documents change and relationships evolve. Query planning can become complex when you're deciding which edges to traverse and how many hops to go. And traversal latency can be a concern, especially for deep multi-hop queries that touch many nodes.

[warmly] That completes our tour of all eleven patterns! Now let's wrap up with key takeaways and selection guidance.`
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 26,
          title: 'Key Takeaways',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '10px', padding: '15px', background: 'rgba(79, 195, 247, 0.15)', borderRadius: '10px' }}>
                  <ul>
                    <li>Parent–child retrieval patterns <strong>reduce hallucination</strong> by restoring governing context around fine-grained evidence</li>
                  </ul>
                </div>
                <div style={{ marginBottom: '10px', padding: '15px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '10px' }}>
                  <ul>
                    <li>Choose patterns based on <strong>structure depth</strong>, <strong>token budget</strong>, and <strong>precision needs</strong></li>
                  </ul>
                </div>
                <div style={{ marginBottom: '10px', padding: '15px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '10px' }}>
                  <ul>
                    <li>All methods balance the trade-off between <strong>context completeness</strong> and <strong>token efficiency</strong></li>
                  </ul>
                </div>
                <div style={{ marginBottom: '10px', padding: '15px', background: 'rgba(186, 104, 200, 0.15)', borderRadius: '10px' }}>
                  <ul>
                    <li>Consider <strong>combining multiple patterns</strong> for complex document structures</li>
                  </ul>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: `### Key Takeaways

[conversational] Let's take a step back and summarize what we've learned about parent-child retrieval patterns across this entire presentation.

#### 🎯 Core Insight

[confidently] All eleven patterns we've explored share a common fundamental goal, which is to reduce hallucination by providing governing context around fine-grained evidence. [lecture] When you retrieve a small chunk that matches a query, that chunk by itself often lacks the context needed for the language model to generate an accurate, grounded response. These patterns solve that problem by systematically attaching relevant parent or related context. [conversational] The key difference between the patterns is how they do it, whether through structural hierarchy, semantic clustering, lexical verification, or graph traversal.

#### 📊 Selection Criteria

[lecture] When you're choosing which pattern to use, you need to consider three main factors. [confidently] First, how structured is your content? If you have well-defined sections and subsections, patterns like parent-child chunking and outline-based trees work beautifully. If your content is more fluid, you might need windowed retrieval or semantic hierarchies. [conversational] Second, what's your token budget? If you're working with limited context windows or trying to control costs, dynamic context folding becomes essential. If you have more budget available, you can afford richer context from tree traversal or graph expansion. [seriously] Third, how critical is precision? For high-stakes domains like compliance or legal, you'll want hybrid approaches with BM25 👉 'bee-em-twenty-five' verification or cross-encoder re-ranking.

#### ⚖️ The Universal Trade-off

[thoughtfully] Every single pattern we've discussed balances the same fundamental trade-off: context completeness versus token efficiency. [lecture] More context gives you better grounding and more accurate answers, but it comes at higher cost in terms of tokens consumed, latency introduced, and computational resources required. [inspiringly] The art of building production RAG 👉 'rag' systems is finding the right point on this spectrum for your specific use case.

#### 🔀 Combination Strategy

[pleased] In real-world production systems, you'll often combine multiple patterns rather than using just one. [storytelling] For example, you might use parent-child chunking as your base structure, add BM25 👉 'bee-em-twenty-five' verification to ensure precision on key terms, and apply dynamic folding to keep within your token budget. [warmly] The patterns are composable building blocks, not mutually exclusive choices.`
        },
        {
          id: 27,
          title: 'Selection Guide',
          icon: { name: 'duo-map' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPStaggerList stagger={0.1} duration={0.4}>
                <div style={{ marginBottom: '12px', padding: '12px 15px', background: 'rgba(79, 195, 247, 0.15)', borderRadius: '8px' }}>
                  <p style={{ margin: 0 }}><strong style={{ color: '#4fc3f7' }}>Strong structure + long sections:</strong> Parent–Child Chunking, Outline-Based Tree</p>
                </div>
                <div style={{ marginBottom: '12px', padding: '12px 15px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '8px' }}>
                  <p style={{ margin: 0 }}><strong style={{ color: '#81c784' }}>Tight token budget:</strong> Dynamic Context Folding</p>
                </div>
                <div style={{ marginBottom: '12px', padding: '12px 15px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '8px' }}>
                  <p style={{ margin: 0 }}><strong style={{ color: '#ffb74d' }}>Need precision on terms:</strong> Hybrid with BM25; Cross-Encoder re-ranking</p>
                </div>
                <div style={{ marginBottom: '12px', padding: '12px 15px', background: 'rgba(186, 104, 200, 0.15)', borderRadius: '8px' }}>
                  <p style={{ margin: 0 }}><strong style={{ color: '#ba68c8' }}>Sequential content:</strong> Sibling-Aware or Windowed Retrieval</p>
                </div>
                <div style={{ marginBottom: '12px', padding: '12px 15px', background: 'rgba(240, 98, 146, 0.15)', borderRadius: '8px' }}>
                  <p style={{ margin: 0 }}><strong style={{ color: '#f06292' }}>Topic-heavy KBs:</strong> Semantic Hierarchy Retrieval</p>
                </div>
                <div style={{ marginBottom: '12px', padding: '12px 15px', background: 'rgba(100, 181, 246, 0.15)', borderRadius: '8px' }}>
                  <p style={{ margin: 0 }}><strong style={{ color: '#64b5f6' }}>Complex interlinks:</strong> Graph / Knowledge-Node approach</p>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: `### Selection Guide

[conversational] Here's a practical quick reference guide to help you choose the right pattern or patterns for your specific situation.

#### 📋 By Use Case and Document Characteristics

[lecture] If you have strong document structure with long sections that need governing context, start with parent-child chunking or outline-based tree retrieval. These patterns leverage your existing structure to provide hierarchical context. [conversational] If you're working with a tight token budget and need to maximize information density, dynamic context folding is your friend. It lets you include parent context while staying within strict token limits. [seriously] When you need high precision on exact terms, numbers, or specific entities, add BM25 👉 'bee-em-twenty-five' verification or cross-encoder re-ranking to your pipeline. These patterns ensure that semantic matches are backed by lexical evidence.

[confidently] For sequential content like procedures, checklists, or step-by-step guides, sibling-aware retrieval or windowed retrieval will give you the continuity you need. They capture the flow of adjacent content. [pleased] If you have topic-heavy knowledge bases where related content is scattered across documents, semantic hierarchy retrieval groups content by meaning rather than structure. And when you're dealing with complex interlinks, dependencies, or cross-document references, the graph or knowledge-node approach gives you the most expressive relationship modeling.

#### 🎯 Start Simple, Add Complexity Strategically

[warmly] The best advice is to start with a simpler pattern that matches your document structure, measure its impact on your answer quality and hallucination rate, and only add complexity when you've identified specific failure modes that a more sophisticated pattern would address. [inspiringly] Don't over-engineer from day one.`
        },
        {
          id: 28,
          title: 'Implementation Tips',
          icon: { name: 'duo-rocket' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '15px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '8px' }}>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SvgIcon iconName="duo-database" sizeName="2x" style={{ marginRight: '8px' }} darkModeInvert={true} />
                    <span>Store explicit parent_id, path, and offsets</span>
                  </p>
                </div>
                <div style={{ padding: '15px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px' }}>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SvgIcon iconName="duo-filter" sizeName="2x" style={{ marginRight: '8px' }} darkModeInvert={true} />
                    <span>Deduplicate parents to avoid redundancy</span>
                  </p>
                </div>
                <div style={{ padding: '15px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '8px' }}>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SvgIcon iconName="duo-gauge" sizeName="2x" style={{ marginRight: '8px' }} darkModeInvert={true} />
                    <span>Enforce token budgets based on LLM limits</span>
                  </p>
                </div>
                <div style={{ padding: '15px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '8px' }}>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SvgIcon iconName="duo-chart-line" sizeName="2x" style={{ marginRight: '8px' }} darkModeInvert={true} />
                    <span>Log which pattern fired for observability</span>
                  </p>
                </div>
                <div style={{ padding: '15px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '8px' }}>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SvgIcon iconName="duo-layer-group" sizeName="2x" style={{ marginRight: '8px' }} darkModeInvert={true} />
                    <span>Consider progressive loading: essential first</span>
                  </p>
                </div>
                <div style={{ padding: '15px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '8px' }}>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SvgIcon iconName="duo-sliders" sizeName="2x" style={{ marginRight: '8px' }} darkModeInvert={true} />
                    <span>Test retrieval quality with diverse queries</span>
                  </p>
                </div>
              </div>
              <GSAPAnimated animation="fadeIn" delay={1}>
                <div style={{ marginTop: '25px', padding: '20px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '12px' }}>
                  <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <SvgIcon iconName="duo-shield-check" sizeName="4x" darkModeInvert={true} />
                    <span><strong>Remember:</strong> Parent-child patterns are essential for reducing hallucination and improving answer correctness in RAG systems. Choose wisely based on your document structure and requirements.</span>
                  </p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Implementation Tips

[conversational] Let's wrap up with practical advice for actually deploying these patterns in production systems.

#### 🔧 Infrastructure Foundations

[lecture] At the infrastructure level, make sure you're storing metadata explicitly from the start. Every chunk needs its parent ID, its path through the document hierarchy, and character or token offsets. [confidently] Build deduplication into your retrieval pipeline because when you expand to parents or siblings, you'll often encounter the same parent text multiple times, and you want to avoid sending duplicate context to your language model. [seriously] Implement token budget enforcement that respects your LLM 👉 'ell-ell-em' limits, ensuring you never exceed the context window and that you're allocating tokens strategically between children and parents.

#### 📊 Observability and Monitoring

[conversational] For observability, log which patterns fired for each query so you can debug issues and understand usage patterns. Track retrieval quality metrics like answer correctness, hallucination rate, and user satisfaction. Monitor your context sizes to understand token consumption and identify opportunities for optimization.

#### 🚀 Optimization Strategies

[pleased] Consider progressive loading where you load essential context first and expand only if needed, which can significantly reduce average costs. [confidently] Test your retrieval with diverse query types, not just happy path examples, to ensure robustness. And seriously consider hybrid approaches that combine the strengths of multiple patterns rather than relying on a single technique.

#### 🎯 Final Thought

[inspiringly] These eleven patterns are your comprehensive toolkit for building reliable RAG 👉 'rag' systems that ground generation in real evidence. [warmly] Start simple with basic parent-child chunking, measure your results carefully, and add complexity only when you've identified specific problems that more sophisticated patterns would solve. [confidently] The goal isn't to use the most complex pattern, it's to use the right pattern for your data and your use case. [enthusiastically] With these patterns in your toolkit, you're well equipped to build production RAG 👉 'rag' systems that deliver accurate, grounded, and trustworthy answers.`
        }
      ]
    }
  ]
};
