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
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '20px', fontSize: '32px' }}>
                  <SvgIcon iconName="duo-circle-nodes" sizeName="2x" darkModeInvert={true} />
                  For Reliable Grounded Generation
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '24px', marginBottom: '40px', maxWidth: '900px', margin: '0 auto 40px auto', lineHeight: '1.6' }}>
                  A concise, comparable cheat-sheet of 11 retrieval patterns that attach parent context to child chunks to reduce hallucination and improve answer correctness
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.8}>
                <div style={{ display: 'flex', gap: '30px', alignItems: 'center', justifyContent: 'center', marginBottom: '40px', flexWrap: 'wrap' }}>
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
                <p style={{ fontSize: '20px', marginBottom: '30px' }}>
                  For ML engineers, data engineers, applied researchers
                </p>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </GSAPAnimated>
            </div>
          ),
          backgroundImage: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80',
          notes: `### Parent–Child Retrieval Designs for RAG
Welcome to this comprehensive guide on parent-child retrieval patterns for RAG systems!

#### 🎯 What This Deck Covers
We'll explore 11 different design patterns that help attach parent context to child chunks. This is crucial because:
- **Reduces Hallucination**: By providing governing context, the LLM has better grounding
- **Improves Correctness**: Answers are more accurate when they have the right context
- **Better Context**: Fine-grained evidence combined with broader context gives complete picture

#### 👥 Target Audience
This deck is designed for:
- ML Engineers building RAG systems
- Data Engineers working on document processing pipelines
- Applied Researchers exploring retrieval architectures

Let's dive into the patterns!`
        },
        {
          id: 2,
          title: 'What You\'ll Learn',
          icon: { name: 'duo-graduation-cap' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPStaggerList stagger={0.2} duration={0.6}>
                <div style={{ fontSize: '1em', marginBottom: '20px' }}>
                  <ul style={{ lineHeight: '1.8' }}>
                    <li><strong>11 actionable patterns</strong> for parent-child retrieval in RAG systems</li>
                  </ul>
                </div>
                <div style={{ fontSize: '1em', marginBottom: '20px' }}>
                  <ul style={{ lineHeight: '1.8' }}>
                    <li><strong>Cheat-sheet structure</strong> per pattern: Goal, How It Works, When to Use, Data Structure, Implementation, Pros & Cons</li>
                  </ul>
                </div>
                <div style={{ fontSize: '1em', marginBottom: '20px' }}>
                  <ul style={{ lineHeight: '1.8' }}>
                    <li><strong>Selection guide</strong> to choose the right pattern for your use case</li>
                  </ul>
                </div>
                <div style={{ fontSize: '1em', marginBottom: '20px' }}>
                  <ul style={{ lineHeight: '1.8' }}>
                    <li><strong>Implementation tips</strong> for production deployments</li>
                  </ul>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### What You'll Learn
Let me give you a quick roadmap of what we'll cover today.

#### 📚 The Structure
We're going to walk through **11 actionable patterns** for implementing parent-child retrieval. Each pattern is presented in a consistent cheat-sheet format:
- **Goal / What It Solves**: The problem this pattern addresses
- **How It Works**: The mechanism behind the pattern
- **When to Use**: Ideal scenarios for this pattern
- **Data Structure Needed**: What you need to store
- **Implementation Workflow**: Step-by-step guide
- **Pros & Cons**: Trade-offs to consider

At the end, you'll get a **selection guide** and **implementation tips** for production.`
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
                    <div style={{ padding: '12px 15px', background: 'rgba(79, 195, 247, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#4fc3f7', minWidth: '28px' }}>1</span>
                      <span style={{ fontSize: '0.85em' }}>Parent-Child Chunking</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#81c784', minWidth: '28px' }}>2</span>
                      <span style={{ fontSize: '0.85em' }}>Section-Header Anchored Retrieval</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#ffb74d', minWidth: '28px' }}>3</span>
                      <span style={{ fontSize: '0.85em' }}>Outline-Based Tree Retrieval</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(186, 104, 200, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#ba68c8', minWidth: '28px' }}>4</span>
                      <span style={{ fontSize: '0.85em' }}>Top-k Parent Expansion</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(240, 98, 146, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#f06292', minWidth: '28px' }}>5</span>
                      <span style={{ fontSize: '0.85em' }}>Sibling-Aware Retrieval</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(100, 181, 246, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#64b5f6', minWidth: '28px' }}>6</span>
                      <span style={{ fontSize: '0.85em' }}>Windowed Retrieval</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(174, 213, 129, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#aed581', minWidth: '28px' }}>7</span>
                      <span style={{ fontSize: '0.85em' }}>Semantic Hierarchy Retrieval</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(255, 167, 38, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#ffa726', minWidth: '28px' }}>8</span>
                      <span style={{ fontSize: '0.85em' }}>Dynamic Context Folding</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(239, 83, 80, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#ef5350', minWidth: '28px' }}>9</span>
                      <span style={{ fontSize: '0.85em' }}>Hybrid Parent-Child + BM25</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(149, 117, 205, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#9575cd', minWidth: '28px' }}>10</span>
                      <span style={{ fontSize: '0.85em' }}>Parent Re-Ranking (Cross-Encoder)</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(102, 187, 106, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#66bb6a', minWidth: '28px' }}>11</span>
                      <span style={{ fontSize: '0.85em' }}>Graph / KG Parent Retrieval</span>
                    </div>
                    <div style={{ padding: '12px 15px', background: 'rgba(79, 195, 247, 0.25)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px', gridColumn: 'span 2' }}>
                      <SvgIcon iconName="duo-trophy" sizeName="1x" style={{ color: '#ffd700' }} darkModeInvert={true} />
                      <span style={{ fontWeight: 'bold', fontSize: '0.9em' }}>Summary & Selection Guide</span>
                    </div>
                  </div>
                ]}
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Table of contents showing all 11 parent-child retrieval patterns'
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
                  <h4>
                    <MermaidPopover
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
                    Goal / What It Solves
                  </h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Reduces hallucination by always pairing fine-grained evidence (child) with its governing section (parent)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Index children for recall; upon retrieval, attach their parent section using parent_id metadata</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Policies, legal docs, SOPs, manuals where section context defines constraints</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: `### Pattern 1 - Parent–Child Chunking (Hierarchical Retrieval)
Welcome to our first retrieval pattern! This is the foundational approach to parent-child retrieval, and it's where most teams start when building RAG 👉 'rag' systems with hierarchical context.

####  The Goal
The main goal here is to **reduce hallucination** by ensuring that whenever we retrieve a fine-grained piece of evidence, which we call the child chunk, we also include its governing section, the parent. Think of it like this: when you quote a sentence from a legal document, you need to know which section it came from to understand the constraints and rules that apply. This pairing of child and parent provides the necessary context for accurate, grounded answers that don't make things up.

####  How It Works
Let's walk through the process. First, you parse your documents into a hierarchy, breaking them down into their natural structure. Then you create small child chunks, typically between two hundred and four hundred tokens, which are perfect for precise retrieval. At the same time, you store the parent sections, which are larger at eight hundred to fifteen hundred tokens, along with metadata that links children to their parents. When a query comes in, you retrieve the matching child chunks, and then you automatically attach their parent sections to provide that critical governing context.

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

This flowchart shows how documents flow through the parser, splitting into parent sections and child chunks, with children going into the vector index for retrieval.

####  When to Use This
This pattern works best for structured documents where section context defines constraints and rules. We're talking about policies, legal documents, SOPs 👉 'ess-oh-pees', standard operating procedures, technical manuals, and compliance documentation. Anywhere that a piece of text needs its governing section to be properly understood, this pattern shines.

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
                  <h4>Data Structure Needed</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Child chunks with embeddings; parent sections</li>
                    <li><em>Fields: child_id, parent_id, parent_title, level, order</em></li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>Implementation Workflow</h4>
                  <ol style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
                      <li>Strong grounding with minimal complexity</li>
                      <li>Easy to implement; good correctness</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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
Now let's dive into the practical implementation details and the trade-offs you'll encounter when deploying this pattern in production.

####  Data Structure Needed
You'll need to design your data structure to support this hierarchical relationship. Each child chunk needs a unique identifier, called the child underscore ID, which you'll use for retrieval. Then you need a parent underscore ID field that references which parent section this child belongs to. It's also helpful to store the parent underscore title for display and debugging purposes. Don't forget the level field, which tracks how deep in the hierarchy this chunk sits, and an order field to maintain the sequence of chunks within their parent section. These fields work together to reconstruct the full context when needed.

####  Implementation Workflow
Let's walk through the implementation steps. First, you parse the document to build a tree structure that captures the natural hierarchy. Then you chunk it into children at two hundred to four hundred tokens, which is small enough for precise matching, and parents at eight hundred to fifteen hundred tokens, which provides sufficient context. Here's the key efficiency trick: you only embed the children, not the parents, because you're searching against children and then just attaching parents afterward. When a query comes in, you retrieve your top-k children from the vector index, then you attach their parents using the metadata, and finally you deduplicate any parents that appear multiple times. Simple and effective.

####  Pros
The good stuff: This pattern is **simple to implement** without requiring complex infrastructure. You get **strong grounding** without adding architectural complexity, and it provides a **good baseline correctness** that's hard to beat for structured documents. Most teams can get this running in a few days.

####  Cons
The problems: You'll need **larger context windows** because you're sending both child and parent text to the language model, which can hit token limits quickly. If your document parsing is noisy or makes mistakes, you risk **attaching the wrong parent** to a child, which can actually make things worse by providing misleading context. Also, this pattern doesn't naturally capture **cross-section relationships** where information spans multiple parents or siblings.

With those trade-offs in mind, let's move on to our second pattern, which takes a different approach to anchoring context.`
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
                  <h4>
                    <MermaidPopover
                      title="Section-Header Anchoring Flow"
                      diagram={`flowchart LR
    A["📄 Chunk"] --> B["🏷️ Nearest Header"]
    B --> C["🍞 Breadcrumb Path"]
    C --> D["📝 Header + Path + Chunk"]
    style B fill:#81c784,color:#000
    style D fill:#4fc3f7,color:#000`}
                    />
                    Goal / What It Solves
                  </h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Reduces misinterpretation by anchoring chunks to their nearest header and breadcrumb path</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Always include header/title + short abstract with the retrieved chunk</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Docs with clear headings: wikis, product guides, knowledge bases</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Pattern 2 - Section-Header Anchored Retrieval
This pattern is lightweight but effective for well-structured documents.

#### 🎯 The Goal
Reduce misinterpretation by always providing the header context. A chunk that says "the maximum limit is 500" means very different things under "API Rate Limits" vs "User Account Limits".

#### ⚙️ How It Works
During parsing, capture:
- The nearest header for each chunk
- The full breadcrumb path (H1 > H2 > H3)
- Optionally, a 1-2 sentence abstract

On retrieval, prepend this context to the chunk.

#### 🕐 When to Use This?
Perfect for documents with clear heading structures like wikis, product documentation, and knowledge bases.`
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
                  <h4>Data Structure Needed</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>header_text, header_path (e.g., H1 &gt; H2 &gt; H3), header_offset</li>
                    <li>Optional: header summary (1-2 sentences)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>Implementation Workflow</h4>
                  <ol style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
                      <li>Very low overhead</li>
                      <li>Boosts grounding and interpretability</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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

#### 📊 Data Structure
Store with each chunk:
- **header_text**: The actual header text
- **header_path**: Full breadcrumb (e.g., "Installation > Windows > Prerequisites")
- **header_offset**: Position in document for ordering

#### ✅ Pros
- Minimal implementation overhead
- Great for interpretability (users see the path)
- Very efficient in terms of tokens

#### ⚠️ Cons
- Doesn't work well with sparse headings
- Misleading headers can hurt quality
- Not suitable for unstructured text like transcripts`
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
                  <h4>
                    <MermaidPopover
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
                    Goal / What It Solves
                  </h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Preserves narrative hierarchy by retrieving the path from root → ... → leaf</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Maintain explicit outline tree; child retrieval triggers inclusion of ancestors (path context)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Long PDFs, textbooks, design docs, standards with deep nesting</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: `### Pattern 3 - Outline-Based Tree Retrieval
This pattern is ideal for deeply nested documents where full path context matters.

#### 🎯 The Goal
Preserve the **narrative hierarchy** by including the entire path from root to the matched leaf. This ensures no contextual constraints are missed.

#### ⚙️ How It Works
Build an explicit tree structure from your document outline. When a child chunk matches, traverse upward and include all ancestor nodes in the context.

#### 🕐 When to Use This?
Perfect for:
- Long PDFs with multiple nesting levels
- Textbooks with chapters > sections > subsections
- Technical standards documents
- Design documentation with hierarchical structure`
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
                  <h4>Data Structure Needed</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Node tree (node_id, parent_id, level, order)</li>
                    <li>Embeddings at child and optionally at each node</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>Implementation Workflow</h4>
                  <ol style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
                      <li>Excellent structural grounding</li>
                      <li>Coherent multi-level context</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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

#### 📊 Data Structure
Build a proper tree:
- **node_id**: Unique identifier
- **parent_id**: Link to parent node
- **level**: Depth in tree
- **order**: Sequence among siblings

#### ✅ Pros
- Provides complete structural context
- Very coherent answers for complex queries
- Great for multi-hop reasoning

#### ⚠️ Cons
- Can consume many tokens on deep trees
- Requires careful preprocessing
- Tree maintenance overhead`
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
                  <h4>Goal / What It Solves</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Mitigates ambiguity by attaching multiple plausible parents (immediate + higher levels)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>For each retrieved child, climb levels and add up to k parents (e.g., section, chapter)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Deeply nested docs; content where constraints appear at multiple levels</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: `### Pattern 4 - Top-k Parent Expansion
When one parent isn't enough, expand to multiple levels.

#### 🎯 The Goal
Sometimes constraints exist at multiple levels. A clause might be modified by the section, chapter, AND document preamble. This pattern captures all relevant governing context.

#### ⚙️ How It Works
For each retrieved child:
1. Climb up the hierarchy
2. Add up to k parent levels
3. Score-weight by level importance
4. Respect token budget

#### 🕐 When to Use This?
Ideal for deeply nested documents where constraints cascade from multiple levels.`
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
                  <h4>Data Structure Needed</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>parent_id chain with level_depth</li>
                    <li>Per-level score weighting</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>Implementation Workflow</h4>
                  <ol style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
                      <li>High recall of governing context</li>
                      <li>Robust to mis-leveling</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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

#### 📊 Data Structure
Store:
- **parent_id chain**: Full ancestry
- **level_depth**: For budget allocation
- **level_weight**: Scoring priors

#### ✅ Pros
- Captures cascading constraints
- Resilient to hierarchy mistakes
- High context recall

#### ⚠️ Cons
- Token-heavy
- Risk of including irrelevant parents
- Requires careful budget management`
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
                  <h4>
                    <MermaidPopover
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
                    Goal / What It Solves
                  </h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Maintains coherence across adjacent steps/paragraphs. Reduces out-of-context answers</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Retrieve neighboring siblings (prev/next within same parent) around the hit chunk</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Procedures, checklists, code blocks, numbered lists</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Pattern 5 - Sibling-Aware Retrieval
For sequential content, neighbors matter as much as parents.

#### 🎯 The Goal
Maintain **coherence across adjacent content**. Step 3 in a procedure makes little sense without Steps 2 and 4. This pattern includes neighboring siblings for complete context.

#### ⚙️ How It Works
When a chunk matches:
1. Look up its siblings (same parent)
2. Include N chunks before and after
3. Respect section boundaries
4. Merge overlapping spans

#### 🕐 When to Use This?
Perfect for:
- Step-by-step procedures
- Checklists
- Code documentation
- Numbered lists`
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
                  <h4>Data Structure Needed</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>prev_id, next_id, sibling_order</li>
                    <li>section_boundary markers</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>Implementation Workflow</h4>
                  <ol style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
                      <li>Better continuity</li>
                      <li>Improves answers requiring sequence context</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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

#### 📊 Data Structure
Store sibling relationships:
- **prev_id / next_id**: Direct links
- **sibling_order**: Position in sequence
- **section_boundary**: Know when to stop

#### ✅ Pros
- Great for sequential content
- Natural reading flow
- Catches prerequisite context

#### ⚠️ Cons
- Irrelevant neighbors add noise
- More latency (extra lookups)
- Larger context windows`
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
                  <h4>Goal / What It Solves</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Captures local context beyond chunk edges without full parent overhead</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Expand the retrieved chunk by a fixed token/character window before and after</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Linear prose, transcripts, articles with weak headings</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: `### Pattern 6 - Windowed Retrieval
The simplest form of context expansion - just grab more text around the match.

#### 🎯 The Goal
Capture **local context** without the complexity of tree structures. Sometimes you just need a bit more text on either side.

#### ⚙️ How It Works
Store character/token offsets for each chunk. On retrieval:
1. Get the matched chunk's offsets
2. Expand by W tokens/characters in each direction
3. Fetch the expanded window
4. Handle overlaps

#### 🕐 When to Use This?
Ideal for:
- Linear prose without clear structure
- Meeting transcripts
- Articles with weak or no headings
- When you need simplicity`
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
                  <h4>Data Structure Needed</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Character/token offsets per chunk</li>
                    <li>Document-wide text offsets</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>Implementation Workflow</h4>
                  <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
                    <li>Chunk with offsets; on retrieval, compute window [start−W, end+W]; fetch and merge</li>
                  </ul>
                </div>
                <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} style={{ color: '#81c784' }} />
                      <h4 style={{ margin: 0 }}>Pros</h4>
                    </div>
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
                      <li>Simple; effective for linear text</li>
                      <li>Low structural requirements</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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

#### 📊 Data Structure
Simple offset tracking:
- **start_offset / end_offset**: Per chunk
- **document_id**: For multi-doc support

#### ✅ Pros
- Extremely simple to implement
- Works without any structure
- Predictable token usage

#### ⚠️ Cons
- No semantic awareness
- May cross section boundaries inappropriately
- Overlap handling can be tricky`
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
                  <h4>
                    <MermaidPopover
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
                    Goal / What It Solves
                  </h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Reduces hallucination by grouping evidence under topic-level parents (taxonomy/clusters)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Map chunks to taxonomy nodes or clusters; retrieve topic parent summary plus child hits</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Knowledge bases, FAQs, multi-product docs; content with synonym-rich topics</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: `### Pattern 7 - Semantic Hierarchy Retrieval
When document structure doesn't reflect semantic structure, build your own hierarchy.

#### 🎯 The Goal
Group chunks by **semantic topic** rather than document structure. This helps when related content is scattered across different documents.

#### ⚙️ How It Works
1. Build a taxonomy or run clustering on your chunks
2. Generate topic summaries for each cluster
3. On retrieval, include the topic context along with matched chunks

#### 🕐 When to Use This?
Great for:
- Knowledge bases with distributed topics
- FAQ collections
- Multi-product documentation
- Content with many synonyms/variants`
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
                  <h4>Data Structure Needed</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>topic_id, parent_topic_id; cluster centroids</li>
                    <li>Topic summaries; group embeddings</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>Implementation Workflow</h4>
                  <ol style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
                      <li>Strong semantic grounding</li>
                      <li>Resilient to phrasing variance</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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

#### 📊 Data Structure
Build semantic structure:
- **topic_id / parent_topic_id**: Taxonomy tree
- **cluster_centroid**: For similarity
- **topic_summary**: Generated context

#### ✅ Pros
- Works across document boundaries
- Handles synonyms well
- Topic-coherent answers

#### ⚠️ Cons
- Taxonomy requires maintenance
- Clustering mistakes propagate
- Additional preprocessing pipeline`
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
                  <h4>Goal / What It Solves</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Fits long parents into tight budgets while keeping detailed child evidence</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Attach compressed/summarized parents + full child; adapt compression by budget</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Long sections, limited context windows, cost-sensitive deployments</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Pattern 8 - Dynamic Context Folding
Smart compression to fit more context in limited token budgets.

#### 🎯 The Goal
When parents are too long for your budget, **compress them intelligently** rather than truncating. Keep the child at full detail while summarizing the parent.

#### ⚙️ How It Works
1. Precompute multiple compression levels for parents
2. At retrieval time, select compression level based on budget
3. Combine: full child + compressed parent

#### 🕐 When to Use This?
Essential for:
- Long parent sections
- Limited context window models
- Cost-sensitive deployments
- High-throughput systems`
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
                  <h4>Data Structure Needed</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Parent summaries at multiple compression ratios</li>
                    <li>Keyphrases; salience scores</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>Implementation Workflow</h4>
                  <ol style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
                      <li>Balanced precision/recall</li>
                      <li>Efficient use of tokens</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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

#### 📊 Data Structure
Store compression variants:
- **summary_30pct / summary_50pct / summary_70pct**: Different compression levels
- **keyphrases**: Important terms to preserve
- **salience_scores**: For prioritization

#### ✅ Pros
- Maximizes information per token
- Flexible to different budgets
- Good cost/quality trade-off

#### ⚠️ Cons
- Risk of losing critical info in compression
- Requires summarization pipeline
- QA needed on summary quality`
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
                  <h4>
                    <MermaidPopover
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
                    Goal / What It Solves
                  </h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Increases precision by lexically verifying semantic hits to reduce hallucinations</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Dense retrieve child; attach parent; re-score/verify parent with BM25/keyword constraints</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Compliance, legal, specs where exact terms/numbers matter</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: `### Pattern 9 - Hybrid Parent-Child + BM25 Verification
Combine semantic and lexical matching for maximum precision.

#### 🎯 The Goal
**Increase precision** by verifying that semantic matches actually contain the relevant keywords. Critical when exact terms matter.

#### ⚙️ How It Works
1. Dense retrieval for children (semantic)
2. Attach parent sections
3. BM25 scoring on parent text
4. Filter/rank based on lexical match

#### 🕐 When to Use This?
Essential for:
- Compliance documents
- Legal text analysis
- Technical specifications
- Any domain where exact terms/numbers matter`
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
                  <h4>Data Structure Needed</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Dense index for children; sparse (BM25) index for parents</li>
                    <li>Term dictionaries</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                {[
                  <div key="workflow" style={{ marginBottom: '1em' }}>
                    <h4>Implementation Workflow</h4>
                    <ol style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
                      <li>Strong precision on entities/dates/numbers</li>
                      <li>Robust to embedding misses</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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

#### 📊 Data Structure
Dual indexing:
- **Dense index**: For semantic child retrieval
- **BM25/sparse index**: For parent verification
- **Term dictionaries**: For important keywords

#### ✅ Pros
- Catches exact term matches
- High precision on specific entities
- Compensates for embedding weaknesses

#### ⚠️ Cons
- Two indices to maintain
- Latency overhead
- Threshold tuning required`
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
                  <h4>Goal / What It Solves</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Selects the most relevant section root to ground the answer using deep relevance scoring</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Map retrieved children to candidate parents; cross-encode (query, parent) pairs; keep top-m parents</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Very long documents with multiple plausible parent sections</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: `### Pattern 10 - Parent Re-Ranking using Cross-Encoder
When bi-encoder retrieval isn't precise enough, use a cross-encoder.

#### 🎯 The Goal
Select the **most relevant parent** among multiple candidates using deep relevance scoring.

#### ⚙️ How It Works
1. Dense retrieve children
2. Collect unique parent sections
3. Cross-encode each (query, parent) pair
4. Keep top-m parents by cross-encoder score

#### 🕐 When to Use This?
Best for:
- Very long documents
- Multiple plausible parent sections
- High-stakes applications requiring precision`
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
                  <h4>Data Structure Needed</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Parent passages, child→parent mapping</li>
                    <li>Cross-encoder model/artifacts</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>Implementation Workflow</h4>
                  <ol style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
                      <li>High-quality grounding</li>
                      <li>Reduces irrelevant parents</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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

#### 📊 Data Structure
Requires:
- **Parent passages**: Full text for cross-encoding
- **child→parent mapping**: For candidate collection
- **Cross-encoder model**: E.g., ms-marco-MiniLM

#### ✅ Pros
- Best-in-class relevance scoring
- Eliminates poor parent matches
- High confidence grounding

#### ⚠️ Cons
- Expensive: O(n) model inference
- Latency impact
- Model serving complexity`
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
                  <h4>
                    <MermaidPopover
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
                    Goal / What It Solves
                  </h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Disambiguates context via explicit relations and multi-hop traversal</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>Convert sections/entities to nodes; retrieve nodes; traverse edges to parent/related nodes</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.75em' }}>
                    <li>SOP dependencies, API interlinks, scientific corpora, cross-doc references</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Pattern 11 - Graph / Knowledge-Node Parent Retrieval
The most powerful pattern for complex document relationships.

#### 🎯 The Goal
Use **explicit relationships** and **multi-hop traversal** to provide rich, interconnected context.

#### ⚙️ How It Works
1. Model documents as a graph (nodes = sections/entities)
2. Define edge types (parent_of, cites, prerequisite_of, etc.)
3. On retrieval, traverse edges to gather related context
4. Support multi-hop reasoning

#### 🕐 When to Use This?
Essential for:
- SOPs with dependencies
- API documentation with interlinks
- Scientific papers with citations
- Cross-document reference systems`
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
                  <h4>Data Structure Needed</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Graph DB (e.g., Neo4j); nodes: section, entity</li>
                    <li>Edges: parent_of, cites, prerequisite_of; node/edge embeddings</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.5}>
                <div style={{ marginBottom: '1em' }}>
                  <h4>Implementation Workflow</h4>
                  <ol style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
                      <li>Interpretable grounding via explicit relations</li>
                      <li>Supports multi-hop reasoning; cross-doc integration</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} style={{ color: '#ffb74d' }} />
                      <h4 style={{ margin: 0 }}>Cons</h4>
                    </div>
                    <ul style={{ fontSize: '0.7em', lineHeight: '1.6' }}>
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

#### 📊 Data Structure
Full graph infrastructure:
- **Graph DB**: Neo4j, Neptune, or similar
- **Node types**: Section, Entity, Concept
- **Edge types**: parent_of, cites, prerequisite_of, related_to
- **Embeddings**: On nodes and optionally edges

#### ✅ Pros
- Most expressive relationship modeling
- Enables multi-hop reasoning
- Works across documents
- Highly interpretable

#### ⚠️ Cons
- Highest implementation complexity
- Graph maintenance overhead
- Query planning can be complex
- Traversal latency considerations`
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
                <div style={{ marginBottom: '1em', padding: '15px', background: 'rgba(79, 195, 247, 0.15)', borderRadius: '10px' }}>
                  <ul style={{ fontSize: '0.8em', lineHeight: '1.8', margin: 0 }}>
                    <li>Parent–child retrieval patterns <strong>reduce hallucination</strong> by restoring governing context around fine-grained evidence</li>
                  </ul>
                </div>
                <div style={{ marginBottom: '1em', padding: '15px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '10px' }}>
                  <ul style={{ fontSize: '0.8em', lineHeight: '1.8', margin: 0 }}>
                    <li>Choose patterns based on <strong>structure depth</strong>, <strong>token budget</strong>, and <strong>precision needs</strong></li>
                  </ul>
                </div>
                <div style={{ marginBottom: '1em', padding: '15px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '10px' }}>
                  <ul style={{ fontSize: '0.8em', lineHeight: '1.8', margin: 0 }}>
                    <li>All methods balance the trade-off between <strong>context completeness</strong> and <strong>token efficiency</strong></li>
                  </ul>
                </div>
                <div style={{ marginBottom: '1em', padding: '15px', background: 'rgba(186, 104, 200, 0.15)', borderRadius: '10px' }}>
                  <ul style={{ fontSize: '0.8em', lineHeight: '1.8', margin: 0 }}>
                    <li>Consider <strong>combining multiple patterns</strong> for complex document structures</li>
                  </ul>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: `### Key Takeaways
Let's summarize what we've learned about parent-child retrieval patterns.

#### 🎯 Core Insight
All 11 patterns share a common goal: **reduce hallucination** by providing governing context. The difference is HOW they do it.

#### 📊 Selection Criteria
Choose based on:
- How structured is your content?
- What's your token budget?
- How critical is precision?

#### ⚖️ The Universal Trade-off
Every pattern balances context completeness against token efficiency. More context = better grounding but higher cost.

#### 🔀 Combination Strategy
Real-world systems often combine patterns. For example: Parent-Child Chunking + BM25 Verification + Dynamic Folding.`
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
                <div style={{ marginBottom: '0.8em', padding: '12px 15px', background: 'rgba(79, 195, 247, 0.15)', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.75em', margin: 0 }}><strong style={{ color: '#4fc3f7' }}>Strong structure + long sections:</strong> Parent–Child Chunking, Outline-Based Tree</p>
                </div>
                <div style={{ marginBottom: '0.8em', padding: '12px 15px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.75em', margin: 0 }}><strong style={{ color: '#81c784' }}>Tight token budget:</strong> Dynamic Context Folding</p>
                </div>
                <div style={{ marginBottom: '0.8em', padding: '12px 15px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.75em', margin: 0 }}><strong style={{ color: '#ffb74d' }}>Need precision on terms:</strong> Hybrid with BM25; Cross-Encoder re-ranking</p>
                </div>
                <div style={{ marginBottom: '0.8em', padding: '12px 15px', background: 'rgba(186, 104, 200, 0.15)', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.75em', margin: 0 }}><strong style={{ color: '#ba68c8' }}>Sequential content:</strong> Sibling-Aware or Windowed Retrieval</p>
                </div>
                <div style={{ marginBottom: '0.8em', padding: '12px 15px', background: 'rgba(240, 98, 146, 0.15)', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.75em', margin: 0 }}><strong style={{ color: '#f06292' }}>Topic-heavy KBs:</strong> Semantic Hierarchy Retrieval</p>
                </div>
                <div style={{ marginBottom: '0.8em', padding: '12px 15px', background: 'rgba(100, 181, 246, 0.15)', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.75em', margin: 0 }}><strong style={{ color: '#64b5f6' }}>Complex interlinks:</strong> Graph / Knowledge-Node approach</p>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: `### Selection Guide
Here's a quick reference for choosing the right pattern.

#### 📋 By Use Case
- **Structured documents**: Start with Parent-Child Chunking or Outline-Based Tree
- **Limited context window**: Use Dynamic Context Folding
- **Exact term matching**: Add BM25 Verification or Cross-Encoder
- **Procedural content**: Sibling-Aware or Windowed
- **Knowledge bases**: Semantic Hierarchy
- **Complex relationships**: Graph-based approach`
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
                  <p style={{ fontSize: '1.6rem', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SvgIcon iconName="duo-database" sizeName="2x" style={{ marginRight: '8px' }} darkModeInvert={true} />
                    <span>Store explicit parent_id, path, and offsets</span>
                  </p>
                </div>
                <div style={{ padding: '15px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px' }}>
                  <p style={{ fontSize: '1.6rem', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SvgIcon iconName="duo-filter" sizeName="2x" style={{ marginRight: '8px' }} darkModeInvert={true} />
                    <span>Deduplicate parents to avoid redundancy</span>
                  </p>
                </div>
                <div style={{ padding: '15px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '8px' }}>
                  <p style={{ fontSize: '1.6rem', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SvgIcon iconName="duo-gauge" sizeName="2x" style={{ marginRight: '8px' }} darkModeInvert={true} />
                    <span>Enforce token budgets based on LLM limits</span>
                  </p>
                </div>
                <div style={{ padding: '15px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '8px' }}>
                  <p style={{ fontSize: '1.6rem', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SvgIcon iconName="duo-chart-line" sizeName="2x" style={{ marginRight: '8px' }} darkModeInvert={true} />
                    <span>Log which pattern fired for observability</span>
                  </p>
                </div>
                <div style={{ padding: '15px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '8px' }}>
                  <p style={{ fontSize: '1.6rem', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SvgIcon iconName="duo-layer-group" sizeName="2x" style={{ marginRight: '8px' }} darkModeInvert={true} />
                    <span>Consider progressive loading: essential first</span>
                  </p>
                </div>
                <div style={{ padding: '15px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '8px' }}>
                  <p style={{ fontSize: '1.6rem', margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <SvgIcon iconName="duo-sliders" sizeName="2x" style={{ marginRight: '8px' }} darkModeInvert={true} />
                    <span>Test retrieval quality with diverse queries</span>
                  </p>
                </div>
              </div>
              <GSAPAnimated animation="fadeIn" delay={1}>
                <div style={{ marginTop: '25px', padding: '20px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '12px' }}>
                  <p style={{ fontSize: '2rem', margin: 0, display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <SvgIcon iconName="duo-shield-check" sizeName="4x" darkModeInvert={true} />
                    <span><strong>Remember:</strong> Parent-child patterns are essential for reducing hallucination and improving answer correctness in RAG systems. Choose wisely based on your document structure and requirements.</span>
                  </p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Implementation Tips
Practical advice for production deployments.

#### 🔧 Infrastructure
- Store metadata explicitly (parent_id, path, offsets)
- Build deduplication into your pipeline
- Implement token budget enforcement

#### 📊 Observability
- Log which patterns are used
- Track retrieval quality metrics
- Monitor context sizes

#### 🚀 Optimization
- Progressive loading for cost efficiency
- Test with diverse query types
- Consider hybrid approaches

#### 🎯 Final Thought
These patterns are your toolkit for building reliable RAG systems. Start simple, measure, and add complexity only when needed.`
        }
      ]
    }
  ]
};
