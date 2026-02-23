import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const contextPackingDeck: Deck = {
  id: 'context-packing-techniques',
  name: '13 Context Packing Techniques',
  description: 'RAG and LLM-ready strategies to maximize answer quality within token limits',
  category: 'RAG',
  theme: 'black',
  cardStyle: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#ffffff',
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
          backgroundImage: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
          title: '13 Context Packing Techniques',
          content: (
            <div>
              <GSAPAnimated animation="rotateIn" delay={0}>
                <div style={{ fontSize: '2rem', color: '#e5c07b', marginBottom: '1rem' }}>
                  RAG and LLM-ready strategies to maximize answer quality within token limits
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.2}>
                <div style={{ fontSize: '1.2rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                    When and how to pack context for retrieval-augmented generation
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                    Practical workflows for 13 techniques with examples
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-scale-balanced" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                    Trade-offs, risks, and implementation tips
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-users-group" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Audience:</strong> ML engineers, data/knowledge engineers, LLM application builders
                  </div>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.5}>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: `### 13 Context Packing Techniques
[excited] [cheerfully] Welcome everyone! Today we're diving into **13 Context Packing Techniques** — practical strategies to help you get the *best possible answers* from your **RAG** 👉 'rag' (Retrieval-Augmented Generation) pipelines.
#### Why does this matter?
[conversational] Think of it like packing a suitcase — you have *limited space* (token budget), and you want to fit the most *useful* items (context). [cautiously] Pack poorly, and your LLM gives bad answers. [confidently] Pack smartly, and you get *precise*, *grounded* responses.
> [playfully] Quick poll: How many of you have hit a token limit and had your prompt truncated? [enthusiastically] That's exactly what we're solving today.
[energetic] We'll cover **when** to use each technique, **how** it works, and the **trade-offs** involved. Let's jump in!`
        },
        {
          id: 2,
          title: 'Overview / Table of Contents',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6', textAlign: 'left' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="slideInTop">
                <div style={{ marginBottom: '0.5rem' }}></div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <div style={{ color: '#e06c75', marginBottom: '0.8rem' }}>
                      <SvgIcon iconName="duo-scissors" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Chunking & Windowing</strong>
                    </div>
                    <div style={{ marginLeft: '1.5rem', lineHeight: '1.8', fontSize: '1.2rem' }}>
                      <div><strong>1)</strong> Semantic Chunking</div>
                      <div><strong>2)</strong> Dynamic Sliding Window</div>
                      <div><strong>3)</strong> Parent–Child Context Packing</div>
                    </div>
                  </div>

                  <div>
                    <div style={{ color: '#98c379', marginBottom: '0.8rem' }}>
                      <SvgIcon iconName="duo-compress" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Summarization & Compression</strong>
                    </div>
                    <div style={{ marginLeft: '1.5rem', lineHeight: '1.8', fontSize: '1.2rem' }}>
                      <div><strong>4)</strong> Context Summarization Before Packing</div>
                      <div><strong>5)</strong> Hybrid Local + Global Summaries</div>
                      <div><strong>7)</strong> Passage Compression (LLM Shortening)</div>
                    </div>
                  </div>

                  <div>
                    <div style={{ color: '#61dafb', marginBottom: '0.8rem' }}>
                      <SvgIcon iconName="duo-ranking-star" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Relevance & Optimization</strong>
                    </div>
                    <div style={{ marginLeft: '1.5rem', lineHeight: '1.8', fontSize: '1.2rem' }}>
                      <div><strong>6)</strong> Relevance Weighted Packing</div>
                      <div><strong>11)</strong> Token-Budget Aware Packing</div>
                      <div><strong>12)</strong> Adaptive k Retrieval (Variable Cutoff)</div>
                    </div>
                  </div>

                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.8rem' }}>
                      <SvgIcon iconName="duo-table" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Structure & Deduplication</strong>
                    </div>
                    <div style={{ marginLeft: '1.5rem', lineHeight: '1.8', fontSize: '1.2rem' }}>
                      <div><strong>8)</strong> Answer-conditioned Retrieval / Packing</div>
                      <div><strong>9)</strong> Table / Structured Context Packing</div>
                      <div><strong>10)</strong> Semantic Deduplication</div>
                      <div><strong>13)</strong> Chain-of-Context Packing (CoC)</div>
                    </div>
                  </div>
                </div>
              </GSAPStaggerList>

              <GSAPAnimated animation="fadeIn" delay={0.8}>
                <div style={{ marginTop: '1.5rem', padding: '10px', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b', fontSize: '1.2rem' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                  <strong>Key insight:</strong> Combine multiple techniques to balance answer quality, token efficiency, and inference speed.
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: `### Overview / Table of Contents
[confidently] Here's our roadmap for the session. We've organized the 13 techniques into **four categories**:
#### 🔴 Chunking & Windowing
[lecture] These are your *foundation* techniques — how you **break up** documents before anything else. Semantic Chunking, Dynamic Sliding Window, and Parent–Child Packing.
#### 🟢 Summarization & Compression
These techniques **shrink** content — Context Summarization, Hybrid Local+Global, and Passage Compression.
#### 🔵 Relevance & Optimization
These **prioritize** what goes into context — Relevance Weighted, Token-Budget Aware, and Adaptive k Retrieval.
#### 🟣 Structure & Deduplication
These **reshape and clean** context — Answer-conditioned, Table/Structured, Semantic Dedup, and Chain-of-Context.
> [conversational] Notice: The numbering isn't sequential within categories — that's intentional. We ordered by *learning progression*.
[inspiringly] **Key insight:** The best systems *combine* multiple techniques. Let's start with the first one!`
        }
      ]
    },
    {
      id: 'technique-1',
      title: '1) Semantic Chunking',
      slides: [
        {
          id: 3,
          title: '1) Semantic Chunking',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Goal / What It Solves</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Preserve meaning boundaries and reduce mid-sentence cuts and retrieval noise
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Semantic Chunking Flow" diagram={`flowchart LR
    A["📄 Raw Document"] --> B["🔍 Detect Boundaries"]
    B --> C["✂️ Semantic Chunks"]
    C --> D["📦 Index & Store"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`} />
                    </div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>How It Works</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Segment by semantics: headings, paragraphs, discourse markers, code blocks, lists
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Semantic Chunking: When to Use" diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    subgraph Good["✅ Great Fit"]
        A["📘 Manual with headings"]
        B["📋 Policy doc with sections"]
        C["💻 Code docs with fence blocks"]
    end
    subgraph Bad["❌ Poor Fit"]
        D["💬 Free-form chat logs"]
    end
    style Good fill:#c8e6c9,stroke:#4caf50,stroke-width:2px,color:#000
    style Bad fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:#000`} />
                    </div>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>When to Use</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Manuals, policies, code docs, FAQs with clear structure
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Example (Before → After)</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <div><strong>Before:</strong> Fixed 512 tokens split mid-sentence</div>
                      <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> Chunks aligned to sections and code blocks</div>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6b351d',
          notes: `### 1) Semantic Chunking
[confidently] Let's start with **Semantic Chunking** — the *foundation* of good context packing.
#### 🎯 Goal
[lecture] The goal is to **preserve meaning boundaries**. [storytelling] Imagine reading a book where someone ripped pages in the middle of sentences — [disappointed] that's what fixed-size chunking does. [pleased] *Semantic chunking* cuts at natural boundaries instead.
#### ⚙️ How It Works
[conversational] We segment documents by **semantics** — headings, paragraphs, discourse markers, code blocks, and lists.
\`\`\`mermaid
flowchart LR
    A["📄 Raw Document"] --> B["�� Detect Boundaries"]
    B --> C["✂️ Semantic Chunks"]
    C --> D["📦 Index & Store"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
The document flows through boundary detection, gets split into meaningful chunks, then gets indexed.
#### 📅 When to Use
Perfect for **manuals**, **policies**, **code docs**, and **FAQs** — anything with *clear structural markers*.
#### 📝 Example
[cautiously] **Before:** A fixed 512-token window splits mid-sentence, losing meaning.
[pleased] **After:** Chunks align to sections and code blocks — each chunk is self-contained.
> [quizzically] Think about your own documents — where do the natural "breaks" occur?
Let's look at how to implement this...`
        },
        {
          id: 4,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="slideInTop">
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <GSAPStaggerList stagger={0.15} delay={0.3}>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>1. Parse document structure</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>2. Detect semantic units (headers, sections, code fences)</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>3. Enforce soft min/max token limits per chunk</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>4. Attach metadata and index</div>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#6b351d',
          notes: `### Implementation Steps — Semantic Chunking
[lecture] Here's how you'd actually *build* semantic chunking:
#### Step 1: Parse document structure
Use an HTML/Markdown parser to identify headings, lists, code fences, and paragraph breaks.
#### Step 2: Detect semantic units
Group content under each heading or structural marker as a single *semantic unit*.
#### Step 3: Enforce soft min/max token limits
Set a soft minimum (e.g., 100 tokens) and maximum (e.g., 800 tokens). If a unit is too small, merge with neighbors. If too large, split at sub-boundaries.
#### Step 4: Attach metadata and index
Tag each chunk with source, section title, and position. Index into your vector store.
> [warmly] Pro tip: Start with heading-based splitting — it's the easiest win and covers 80% of cases.
Now let's weigh the trade-offs...`
        },
        {
          id: 5,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Higher precision</li>
                      <li>Fewer cross-chunk dependencies</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Variable chunk sizes complicate packing and caching</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6b351d',
          notes: `### Pros & Cons — Semantic Chunking
#### ✅ Pros
[pleased] - **Higher precision**: Each chunk contains a *complete* thought, so retrieval is more accurate
- **Fewer cross-chunk dependencies**: Less need to fetch neighboring chunks for context
#### ❌ Cons
[cautiously] - **Variable chunk sizes**: Chunks vary in length, which complicates token budget planning and caching strategies
> [conversational] Ask yourself: Is your content well-structured enough for semantic chunking? If yes, start here.
[confidently] Next up: what if chunks *still* lose context at boundaries? That's where **Dynamic Sliding Window** comes in...`
        }
      ]
    },
    {
      id: 'technique-2',
      title: '2) Dynamic Sliding Window',
      slides: [
        {
          id: 6,
          title: '2) Dynamic Sliding Window',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Goal / What It Solves</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Maintain continuity across chunk boundaries
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Dynamic Sliding Window Flow" diagram={`flowchart LR
    A["📄 Retrieved Chunk"] --> B["⬅️ Prev Window"]
    A --> C["➡️ Next Window"]
    B --> D["🔗 Merged Context"]
    C --> D
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`} />
                    </div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>How It Works</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Attach previous/next neighbor windows around retrieved chunks
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Sliding Window: Cross-Boundary Context" diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart LR
    subgraph Isolated["❌ Without Window"]
        C3["Step 3 chunk\n(missing context)"]
    end
    subgraph Window["✅ With ±1 Window"]
        C2["Step 2"] --> C3W["Step 3"] --> C4["Step 4"]
    end
    style Isolated fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:#000
    style Window fill:#c8e6c9,stroke:#4caf50,stroke-width:2px,color:#000`} />
                    </div>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>When to Use</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Narratives, procedures, legal texts, research papers
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Example (Before → After)</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <div><strong>Before:</strong> Step 3 lacks Step 2 context</div>
                      <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> Include Step 2 + Step 3 chunks for continuity</div>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6b521d',
          notes: `### 2) Dynamic Sliding Window
[enthusiastically] Now let's tackle **Dynamic Sliding Window** — solving the problem of *lost context at boundaries*.
#### 🎯 Goal
[lecture] **Maintain continuity** across chunk boundaries. [conversational] Even with semantic chunking, sometimes the answer *spans* two chunks.
#### ⚙️ How It Works
When you retrieve a chunk, you also grab its **neighbors** — the previous and next chunks — creating a *sliding window* of context.
\`\`\`mermaid
flowchart LR
    A["📄 Retrieved Chunk"] --> B["⬅️ Prev Window"]
    A --> C["➡️ Next Window"]
    B --> D["🔗 Merged Context"]
    C --> D
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
Think of it like reading a paragraph — you need the sentence before and after to fully understand it.
#### 📅 When to Use
Great for **narratives**, **procedures**, **legal texts**, and **research papers** where ideas flow across boundaries.
#### 📝 Example
[disappointed] **Before:** Step 3 of a procedure is retrieved, but Step 2 (which defines key terms) is missing.
[pleased] **After:** Include Step 2 + Step 3 together for complete understanding.
> [playfully] Have you ever retrieved a chunk that referenced "the above" or "as mentioned" with no context? [amused] That's this problem.
Let's see how to implement it...`
        },
        {
          id: 7,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="slideInTop">
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <GSAPStaggerList stagger={0.15} delay={0.3}>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>1. Choose window size and stride</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>2. On retrieval, include ±N neighbors</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>3. Deduplicate overlaps and respect token budget</div>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#6b521d',
          notes: `### Implementation Steps — Dynamic Sliding Window
[lecture] #### Step 1: Choose window size and stride
Decide how many neighbor chunks to include (e.g., ±1 or ±2). The *stride* is how much chunks overlap during indexing.
#### Step 2: On retrieval, include ±N neighbors
When a chunk scores high, automatically fetch its adjacent chunks from the index.
#### Step 3: Deduplicate overlaps and respect token budget
If multiple retrieved chunks share neighbors, merge and deduplicate. Always check total tokens.
> [warmly] Pro tip: Start with ±1 neighbor — it adds context without blowing up your token budget.
Let's look at the trade-offs...`
        },
        {
          id: 8,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Better coreference and flow</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Token overhead; higher redundancy</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6b521d',
          notes: `### Pros & Cons — Dynamic Sliding Window
#### ✅ Pros
[pleased] - **Better coreference and flow**: Pronouns and references resolve correctly when surrounding context is included
#### ❌ Cons
[cautiously] - **Token overhead**: Including neighbors increases token usage — sometimes significantly with large windows
- **Higher redundancy**: Overlapping windows may include the same text multiple times
> [conversational] Consider: How much does your content rely on cross-chunk references? The more it does, the more valuable this technique.
[excited] Next: What if we add *hierarchical* context instead of just neighbors? Enter **Parent–Child Context Packing**...`
        }
      ]
    },
    {
      id: 'technique-3',
      title: '3) Parent–Child Context Packing',
      slides: [
        {
          id: 9,
          title: '3) Parent–Child Context Packing',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Goal / What It Solves</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Disambiguate details with hierarchical context
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Parent–Child Packing Flow" diagram={`flowchart TD
    A["📖 Document"] --> B["📑 Section"]
    B --> C["📝 Paragraph"]
    C --> D["🔗 Child + Parent Summary"]
    B --> D
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`} />
                    </div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>How It Works</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Pack child chunk plus parent (section/chapter) summary
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Parent-Child: Hierarchy Example" diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    Doc["📖 API Docs"] --> Auth["📑 Authentication"]
    Auth --> EP["📝 POST /users"]
    EP --> P["Pack: EP + Auth summary"]
    style Doc fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
    style P fill:#c8e6c9,stroke:#4caf50,stroke-width:2px,color:#000`} />
                    </div>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>When to Use</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Structured docs, API references, code repos
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Example (Before → After)</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <div><strong>Before:</strong> API method chunk without auth context</div>
                      <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> Method chunk + parent "Authentication" summary</div>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#556b1d',
          notes: `### 3) Parent–Child Context Packing
[enthusiastically] Let's explore **Parent–Child Context Packing** — adding *hierarchical context* to disambiguate details.
#### 🎯 Goal
[lecture] **Disambiguate details** with hierarchical context. [conversational] Sometimes a chunk makes no sense without knowing *which section* it belongs to.
#### ⚙️ How It Works
Pack the **child chunk** (the specific detail) plus its **parent summary** (section or chapter overview).
\`\`\`mermaid
flowchart TD
    A["📖 Document"] --> B["📑 Section"]
    B --> C["📝 Paragraph"]
    C --> D["🔗 Child + Parent Summary"]
    B --> D
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
Think of it like a table of contents — the child is a paragraph, the parent is the section heading plus a brief summary.
#### 📅 When to Use
Ideal for **structured docs**, **API references**, and **code repos** where hierarchy matters.
#### 📝 Example
[disappointed] **Before:** An API method chunk about \`POST /users\` has no auth context — the LLM hallucinates auth steps.
[pleased] **After:** Method chunk + parent "Authentication" section summary = grounded answer.
> [playfully] How many of your documents have a natural hierarchy? [enthusiastically] Most technical docs do!
Let's see the implementation...`
        },
        {
          id: 10,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="slideInTop">
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <GSAPStaggerList stagger={0.15} delay={0.3}>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>1. Build TOC tree (doc → section → paragraph)</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>2. Precompute parent summaries</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>3. On child retrieval, attach parent summary (+ optional sibling cues)</div>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#556b1d',
          notes: `### Implementation Steps — Parent–Child Context Packing
[lecture] #### Step 1: Build TOC tree (doc → section → paragraph)
Parse your documents into a hierarchy — document, sections, subsections, paragraphs.
#### Step 2: Precompute parent summaries
Generate or extract a short summary for each section/chapter. Cache these for reuse.
#### Step 3: On child retrieval, attach parent summary
When a paragraph chunk is retrieved, prepend its parent section summary. Optionally include sibling cues (e.g., "This section also covers X, Y").
> [warmly] Pro tip: Store the parent-child relationships in your metadata — it makes retrieval-time packing trivial.
Let's discuss the trade-offs...`
        },
        {
          id: 11,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Reduces hallucinations</li>
                      <li>Improves grounding</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Requires preprocessing</li>
                      <li>Summaries can drift stale</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#556b1d',
          notes: `### Pros & Cons — Parent–Child Context Packing
#### ✅ Pros
[pleased] - **Reduces hallucinations**: The LLM has broader context, so it's less likely to make up information
- **Improves grounding**: Answers are tied to specific sections, making citations easier
#### ❌ Cons
[cautiously] - **Requires preprocessing**: You need to build and maintain the document tree structure
- **Summaries can drift stale**: If the document changes, parent summaries may become outdated
> [conversational] Think about it: Is the upfront preprocessing cost worth the reduction in hallucinations? [confidently] For most production systems, *yes*.
[enthusiastically] Next: What if your content is just *too long*? Let's look at **Context Summarization**...`
        }
      ]
    },
    {
      id: 'technique-4',
      title: '4) Context Summarization Before Packing',
      slides: [
        {
          id: 12,
          title: '4) Context Summarization Before Packing',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Goal / What It Solves</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Fit long sections within tight budgets
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Context Summarization Flow" diagram={`flowchart LR
    A["📄 Long Source"] --> B["🤖 Summarizer"]
    B --> C["📝 Compact Summary"]
    C --> D["📦 Pack into Context"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`} />
                    </div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>How It Works</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Pre-summarize verbose sources (extractive/abstractive) before packing
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Summarization: Token Savings" diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart LR
    A["📄 Policy: 2000 tokens"] --> B["🤖 Summarize"]
    B --> C["📝 Summary: 150 tokens"]
    C --> D["💰 Save 1850 tokens!"]
    style A fill:#ffcdd2,color:#000
    style C fill:#c8e6c9,color:#000
    style D fill:#ffd700,color:#000`} />
                    </div>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>When to Use</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Policies, reports, multi-document answers
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Example (Before → After)</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <div><strong>Before:</strong> 2k-token policy chunk</div>
                      <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> 150-token summary capturing key rules/dates</div>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b1f',
          notes: `### 4) Context Summarization Before Packing
[confidently] Now we're entering **summarization territory**. [lecture] **Context Summarization Before Packing** is about fitting *long content* into *tight budgets*.
#### 🎯 Goal
**Fit long sections within tight token budgets** by summarizing before packing.
#### ⚙️ How It Works
Pre-summarize verbose sources using **extractive** (pull key sentences) or **abstractive** (rewrite) summarization *before* packing into context.
\`\`\`mermaid
flowchart LR
    A["📄 Long Source"] --> B["🤖 Summarizer"]
    B --> C["📝 Compact Summary"]
    C --> D["📦 Pack into Context"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
Think of it like reading a book review instead of the whole book — you get the key points faster.
#### 📅 When to Use
Essential for **policies**, **reports**, and **multi-document answers** where sources are verbose.
#### 📝 Example
[disappointed] **Before:** A 2,000-token policy chunk eats half your context budget.
[pleased] **After:** A 150-token summary captures the key rules and dates — leaving room for other evidence.
> [quizzically] How much of your retrieved content is actually *relevant* to the answer? [confidently] Summarization keeps only what matters.
Let's implement it...`
        },
        {
          id: 13,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="slideInTop">
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <GSAPStaggerList stagger={0.15} delay={0.3}>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>1. Select long candidates</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>2. Summarize with rules/LLM; cap length</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>3. Validate and cache summaries for reuse</div>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d6b1f',
          notes: `### Implementation Steps — Context Summarization
[lecture] #### Step 1: Select long candidates
Identify chunks exceeding a length threshold (e.g., >500 tokens).
#### Step 2: Summarize with rules/LLM; cap length
Use rule-based extractive methods or an LLM to produce summaries. Set a target length cap (e.g., 150 tokens).
#### Step 3: Validate and cache summaries for reuse
Check that summaries preserve key facts (dates, numbers, entities). Cache them so you don't re-summarize on every query.
> [warmly] Pro tip: Use extractive summarization for factual content (numbers, dates) and abstractive for narrative content.
Let's look at the trade-offs...`
        },
        {
          id: 14,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Higher density</li>
                      <li>Faster inference</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Summarization loss or bias</li>
                      <li>Extra compute cost</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b1f',
          notes: `### Pros & Cons — Context Summarization
#### ✅ Pros
[pleased] - **Higher density**: More information per token — you fit more evidence into the same budget
- **Faster inference**: Shorter prompts mean faster LLM responses and lower cost
#### ❌ Cons
[cautiously] - **Summarization loss or bias**: Key details may be dropped, or the summary may introduce bias
- **Extra compute cost**: Running summarization models adds latency and cost to your pipeline
> [conversational] Key question: Can you afford to lose some detail for better coverage? If your answers need *exact quotes*, summarization may not be ideal.
[excited] Next: What if you need *both* the big picture AND specific details? That's **Hybrid Local + Global Summaries**...`
        }
      ]
    },
    {
      id: 'technique-5',
      title: '5) Hybrid Local + Global Summaries',
      slides: [
        {
          id: 15,
          title: '5) Hybrid Local + Global Summaries',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Goal / What It Solves</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Preserve big picture while keeping crucial details
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Hybrid Local+Global Flow" diagram={`flowchart LR
    A["📄 Document"] --> B["🌍 Global Summary"]
    A --> C["🔍 Local Snippets"]
    B --> D["📦 Combined Context"]
    C --> D
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`} />
                    </div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>How It Works</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Combine a short global summary with top local snippets
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Hybrid: Query Type Matching" diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    Q["❓ Tell me about refund policy\nand the specific deadline"]
    Q --> G["🌍 Global Summary\n(80 tokens)"]
    Q --> L["🔍 Local: deadline clause\n(60 tokens)"]
    G --> R["📦 Combined Answer"]
    L --> R
    style Q fill:#e3f2fd,color:#000
    style R fill:#c8e6c9,color:#000`} />
                    </div>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>When to Use</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Mixed queries (overall + specific details)
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Example (Before → After)</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <div><strong>Before:</strong> Only local snippets → missing context</div>
                      <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> 80-token global + 2–3 local quotes</div>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b4d',
          notes: `### 5) Hybrid Local + Global Summaries
[enthusiastically] **Hybrid Local + Global Summaries** gives you the best of both worlds — *big picture* context AND *specific details*.
#### 🎯 Goal
[lecture] **Preserve the big picture** while keeping crucial details accessible.
#### ⚙️ How It Works
Combine a short **global summary** (document-level overview) with the top **local snippets** (specific passages).
\`\`\`mermaid
flowchart LR
    A["📄 Document"] --> B["🌍 Global Summary"]
    A --> C["🔍 Local Snippets"]
    B --> D["📦 Combined Context"]
    C --> D
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
Think of it like a news article — the headline (global) tells you the story, and the quotes (local) give you the evidence.
#### 📅 When to Use
Perfect for **mixed queries** that need both an overall understanding AND specific details.
#### 📝 Example
[disappointed] **Before:** Only local snippets are packed — the LLM misses the broader context and gives a narrow answer.
[pleased] **After:** An 80-token global summary + 2–3 local quotes = comprehensive, grounded response.
> [conversational] Think about search queries like "Tell me about the refund policy and the specific deadline" — you need both levels.
Let's implement this...`
        },
        {
          id: 16,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="slideInTop">
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <GSAPStaggerList stagger={0.15} delay={0.3}>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>1. Compute document-level global summary</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>2. Retrieve local passages</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>3. Pack [Global] first, then [Local extracts] with citations</div>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d6b4d',
          notes: `### Implementation Steps — Hybrid Local + Global
[lecture] #### Step 1: Compute document-level global summary
Generate a concise summary of the entire document (or corpus section). This captures themes, key topics, and scope.
#### Step 2: Retrieve local passages
Use standard vector retrieval to find the most relevant specific passages.
#### Step 3: Pack [Global] first, then [Local extracts] with citations
Structure the context as: [Global Summary] followed by [Local Extract 1], [Local Extract 2], etc. Add source citations to each local extract.
> [warmly] Pro tip: Label sections clearly — e.g., "[Overview]" and "[Detail 1]" — so the LLM knows which is which.
Let's discuss the trade-offs...`
        },
        {
          id: 17,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Balanced coverage and precision</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Prep overhead</li>
                      <li>Potential contradictions to reconcile</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b4d',
          notes: `### Pros & Cons — Hybrid Local + Global
#### ✅ Pros
[pleased] - **Balanced coverage and precision**: The global summary provides context, local snippets provide evidence
#### ❌ Cons
[cautiously] - **Prep overhead**: You need to generate and maintain global summaries for each document
- **Potential contradictions**: The global summary and local details might sometimes conflict — you need reconciliation logic
> [inspiringly] Consider: For customer-facing RAG systems, this technique is often a *game-changer* because users ask both broad and specific questions.
[confidently] Next: Let's talk about **prioritizing** which chunks make the cut — **Relevance Weighted Packing**...`
        }
      ]
    },
    {
      id: 'technique-6',
      title: '6) Relevance Weighted Packing',
      slides: [
        {
          id: 18,
          title: '6) Relevance Weighted Packing',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Goal / What It Solves</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Maximize utility by prioritizing high-relevance chunks
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Relevance Weighted Packing Flow" diagram={`flowchart LR
    A["📄 Candidates"] --> B["⚖️ Score & Rank"]
    B --> C["🏆 Top Chunks"]
    C --> D["📦 Budget-Fit Pack"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`} />
                    </div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>How It Works</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Rank by score; pack highest first within budget
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Relevance Weighted: Ranking Example" diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    subgraph Ranked["Scored Chunks (Budget: 4k tokens)"]
        R1["Chunk A: score 0.95 ✅ pack"]
        R2["Chunk B: score 0.88 ✅ pack"]
        R3["Chunk C: score 0.71 ✅ pack"]
        R4["Chunk D: score 0.42 ❌ skip"]
    end
    style Ranked fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
    style R1 fill:#c8e6c9,color:#000
    style R2 fill:#c8e6c9,color:#000
    style R3 fill:#c8e6c9,color:#000
    style R4 fill:#ffcdd2,color:#000`} />
                    </div>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>When to Use</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Tight budgets; noisy corpora
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Example (Before → After)</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <div><strong>Before:</strong> Arbitrary top-k</div>
                      <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> Highest-scoring, diverse set fits budget</div>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1d5d6b',
          notes: `### 6) Relevance Weighted Packing
[confidently] **Relevance Weighted Packing** is about *prioritization* — making sure the *best* chunks get packed first.
#### 🎯 Goal
[lecture] **Maximize utility** by prioritizing high-relevance chunks within your token budget.
#### ⚙️ How It Works
Rank all candidate chunks by a **relevance score**, then **pack the highest-scoring** ones first until the budget is filled.
\`\`\`mermaid
flowchart LR
    A["📄 Candidates"] --> B["⚖️ Score & Rank"]
    B --> C["🏆 Top Chunks"]
    C --> D["📦 Budget-Fit Pack"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
Think of it like a talent show — the best performers go on stage first, and when time runs out, the rest wait.
#### 📅 When to Use
Essential when you have **tight token budgets** or **noisy corpora** with lots of low-quality content.
#### 📝 Example
[disappointed] **Before:** Arbitrary top-k retrieval — some low-relevance chunks waste valuable tokens.
[pleased] **After:** Highest-scoring, diverse set of chunks fills the budget efficiently.
> [quizzically] How do you currently decide which chunks make the cut? [seriously] If it's just "top 5," you're leaving quality on the table.
Let's implement this...`
        },
        {
          id: 19,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="slideInTop">
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <GSAPStaggerList stagger={0.15} delay={0.3}>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>1. Score by similarity + recency + source quality</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>2. Optional MMR/diversity</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>3. Greedy pack until budget filled</div>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d5d6b',
          notes: `### Implementation Steps — Relevance Weighted Packing
[lecture] #### Step 1: Score by similarity + recency + source quality
Combine multiple signals: vector similarity score, document freshness, and source authority/quality rating.
#### Step 2: Optional MMR/diversity
Apply **Maximal Marginal Relevance** 👉 'M-M-R' to ensure diversity — avoid packing 5 chunks that all say the same thing.
#### Step 3: Greedy pack until budget filled
Iterate through ranked chunks, adding each if it fits the remaining token budget. Stop when full.
> [warmly] Pro tip: Weight recency higher for rapidly changing domains (news, support tickets) and similarity higher for static knowledge bases.
Let's look at the trade-offs...`
        },
        {
          id: 20,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Better hit rate</li>
                      <li>Fewer irrelevant tokens</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Can exclude necessary low-scoring context</li>
                      <li>Bias risk</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1d5d6b',
          notes: `### Pros & Cons — Relevance Weighted Packing
#### ✅ Pros
[pleased] - **Better hit rate**: More of your context window contains *useful* information
- **Fewer irrelevant tokens**: Noisy, off-topic chunks get filtered out
#### ❌ Cons
[cautiously] - **Can exclude necessary low-scoring context**: Sometimes a chunk with a low similarity score contains crucial background info
- **Bias risk**: If your scoring favors certain sources, you may systematically miss others
> [seriously] Key insight: Relevance scoring is only as good as your embedding model and scoring function. Invest time in tuning these.
[enthusiastically] Next up: What if chunks are just *too long*? Let's **compress** them with **Passage Compression**...`
        }
      ]
    },
    {
      id: 'technique-7',
      title: '7) Passage Compression (LLM Shortening)',
      slides: [
        {
          id: 21,
          title: '7) Passage Compression (LLM Shortening)',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Goal / What It Solves</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Shrink verbose passages while retaining facts
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Passage Compression Flow" diagram={`flowchart LR
    A["📄 Verbose Passage"] --> B["🤖 LLM Compressor"]
    B --> C["📝 Concise Bullets"]
    C --> D["📦 Pack More Evidence"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`} />
                    </div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>How It Works</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      LLM rewrites chunks into concise bullets with entities/numbers preserved
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Compression: Before vs After" diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart LR
    subgraph Before["Before: 300 tokens"]
        P["Long paragraph with\npreamble, filler,\nand repetition..."]
    end
    subgraph After["After: 80 tokens (73% less)"]
        B1["• Key fact 1"]
        B2["• Key date: Jan 15"]
        B3["• Amount: $500"]
    end
    Before --> After
    style Before fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:#000
    style After fill:#c8e6c9,stroke:#4caf50,stroke-width:2px,color:#000`} />
                    </div>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>When to Use</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Support chats, logs, verbose prose
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Example (Before → After)</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <div><strong>Before:</strong> 300-token paragraph</div>
                      <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> 80-token bullet list with key facts</div>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1d366b',
          notes: `### 7) Passage Compression (LLM Shortening)
**Passage Compression** �� also called *LLM Shortening* — is about using an LLM to *shrink* verbose passages while keeping the facts.
#### 🎯 Goal
**Shrink verbose passages** while retaining essential facts, entities, and numbers.
#### ⚙️ How It Works
An LLM **rewrites** retrieved chunks into concise bullets, preserving entities, numbers, and key claims.
\`\`\`mermaid
flowchart LR
    A["📄 Verbose Passage"] --> B["🤖 LLM Compressor"]
    B --> C["📝 Concise Bullets"]
    C --> D["📦 Pack More Evidence"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
Think of it like an editor condensing a long article into bullet points — same facts, fewer words.
#### 📅 When to Use
Great for **support chats**, **logs**, and **verbose prose** where most words are filler.
#### 📝 Example
[disappointed] **Before:** A 300-token paragraph with lots of preamble and repetition.
[excited] **After:** An 80-token bullet list with just the key facts — 73% compression!
> [enthusiastically] Imagine fitting 4x more evidence into the same context window. That's the power of compression.
Let's see how to build this...`
        },
        {
          id: 22,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="slideInTop">
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <GSAPStaggerList stagger={0.15} delay={0.3}>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>1. Define compression prompt/constraints</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>2. Compress retrieved chunks; keep citations/IDs</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>3. Enforce length caps; cache results</div>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d366b',
          notes: `### Implementation Steps — Passage Compression
[lecture] #### Step 1: Define compression prompt/constraints
Create a prompt template: "Compress the following passage into concise bullets. Preserve all dates, numbers, entity names, and causal relationships."
#### Step 2: Compress retrieved chunks; keep citations/IDs
Run the compressor on each retrieved chunk. Maintain a mapping from compressed text back to the original source for citation.
#### Step 3: Enforce length caps; cache results
Set a maximum length per compressed chunk. Cache compressed versions so you don't reprocess the same chunk repeatedly.
> [warmly] Pro tip: Test compression quality by comparing LLM answers using original vs. compressed context — if answers degrade, dial back compression.
Let's look at the trade-offs...`
        },
        {
          id: 23,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Fit more evidence</li>
                      <li>Faster inference</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Information loss</li>
                      <li>Extra LLM cost/latency</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1d366b',
          notes: `### Pros & Cons — Passage Compression
#### ✅ Pros
[pleased] - **Fit more evidence**: Dramatically increase the amount of evidence in your context window
- **Faster inference**: Shorter prompts = faster and cheaper LLM responses
#### ❌ Cons
[cautiously] - **Information loss**: The compressor might drop subtle but important details
- **Extra LLM cost/latency**: Running a compression step adds time and cost to each query
> [conversational] Balance check: If your RAG system is latency-sensitive, consider pre-compressing at index time rather than query time.
[excited] Next: What if you could be *smarter* about what to retrieve based on the *type* of answer needed? That's **Answer-conditioned Retrieval**...`
        }
      ]
    },
    {
      id: 'technique-8',
      title: '8) Answer-conditioned Retrieval / Packing',
      slides: [
        {
          id: 24,
          title: '8) Answer-conditioned Retrieval / Packing',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Goal / What It Solves</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Include only fields relevant to the answer type
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Answer-conditioned Retrieval Flow" diagram={`flowchart LR
    A["❓ Query"] --> B["🏷️ Classify Type"]
    B --> C["📋 Filter Fields"]
    C --> D["📦 Targeted Context"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`} />
                    </div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>How It Works</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Predict answer schema (boolean/date/code/etc.) and filter context accordingly
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Answer-conditioned: Query Type Routing" diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    Q["❓ Query"] --> C{"Classify Type"}
    C -->|Date query| D["📅 Extract date fields"]
    C -->|Code query| Co["💻 Extract code blocks"]
    C -->|Boolean query| B["✅ Extract yes/no clauses"]
    D --> R["📦 Targeted Context"]
    Co --> R
    B --> R
    style Q fill:#e3f2fd,color:#000
    style R fill:#c8e6c9,color:#000`} />
                    </div>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>When to Use</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Forms, finance, SLAs, code Q&A
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Example (Before → After)</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <div><strong>Before:</strong> Full policy text for "refund deadline"</div>
                      <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> Only date clauses and policy table fields</div>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1d206b',
          notes: `### 8) Answer-conditioned Retrieval / Packing
[confidently] **Answer-conditioned Retrieval** flips the script — instead of just matching the *question*, we consider the *type of answer* we need.
#### 🎯 Goal
[lecture] **Include only fields relevant to the answer type** — don't waste tokens on irrelevant content.
#### ⚙️ How It Works
First, **predict the answer schema** (is it a date? a boolean? a code snippet?), then **filter context** to include only relevant fields.
\`\`\`mermaid
flowchart LR
    A["❓ Query"] --> B["🏷️ Classify Type"]
    B --> C["📋 Filter Fields"]
    C --> D["📦 Targeted Context"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
Think of it like a doctor ordering specific tests based on symptoms — you don't run *every* test, just the relevant ones.
#### 📅 When to Use
Best for **forms**, **finance**, **SLAs**, and **code Q&A** where answers have predictable shapes.
#### 📝 Example
[disappointed] **Before:** The full policy text is packed for a "refund deadline" question — most of it is irrelevant.
[pleased] **After:** Only date clauses and policy table fields are packed — laser-focused context.
> [playfully] How often do your users ask questions with predictable answer formats? If often, this technique is gold.
Let's implement this...`
        },
        {
          id: 25,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="slideInTop">
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <GSAPStaggerList stagger={0.15} delay={0.3}>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>1. Classify query → answer type</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>2. Map to fields/templates</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>3. Retrieve and pack only relevant fields</div>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d206b',
          notes: `### Implementation Steps — Answer-conditioned Retrieval
[lecture] #### Step 1: Classify query → answer type
Build a classifier (rule-based or ML) that predicts: boolean, date, number, code, list, explanation, etc.
#### Step 2: Map to fields/templates
Create templates for each answer type — e.g., for "date" queries, extract date fields, effective periods, and deadlines.
#### Step 3: Retrieve and pack only relevant fields
Use the template to filter which fields/columns/sections to include in the context window.
> [warmly] Pro tip: Start with a simple rule-based classifier (keyword matching) and upgrade to ML as your query volume grows.
Let's see the trade-offs...`
        },
        {
          id: 26,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Efficient and accurate</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Misclassification risk</li>
                      <li>Needs schema mapping</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1d206b',
          notes: `### Pros & Cons — Answer-conditioned Retrieval
#### ✅ Pros
[pleased] - **Efficient and accurate**: Only relevant fields are packed — no wasted tokens, higher answer precision
#### ❌ Cons
[cautiously] - **Misclassification risk**: If the query type is classified wrong, you'll pack the wrong fields entirely
- **Needs schema mapping**: You have to build and maintain answer-type templates for each domain
> [conversational] Consider: This technique works best in *structured domains* where answers follow predictable patterns. For open-ended Q&A, it's less useful.
[enthusiastically] Next: Let's **structure** our context for maximum density — **Table / Structured Context Packing**...`
        }
      ]
    },
    {
      id: 'technique-9',
      title: '9) Table / Structured Context Packing',
      slides: [
        {
          id: 27,
          title: '9) Table / Structured Context Packing',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Goal / What It Solves</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Increase information density via structure
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Structured Context Packing Flow" diagram={`flowchart LR
    A["📄 Raw Text"] --> B["🔍 Extract Fields"]
    B --> C["📊 Structured Rows"]
    C --> D["📦 Dense Context"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`} />
                    </div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>How It Works</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Convert passages into compact bullets, key-value rows, or mini-tables
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Structured Packing: Density Example" diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart LR
    subgraph Prose["Prose: 200 tokens"]
        T["The product supports up to\n100 users with 50GB storage\nand 1000 API calls per minute"]
    end
    subgraph Struct["Structured: 40 tokens"]
        S1["Max Users: 100"]
        S2["Storage: 50GB"]
        S3["API Rate: 1k/min"]
    end
    Prose --> Struct
    style Prose fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:#000
    style Struct fill:#c8e6c9,stroke:#4caf50,stroke-width:2px,color:#000`} />
                    </div>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>When to Use</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Specs, product catalogs, schedules, APIs
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Example (Before → After)</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <div><strong>Before:</strong> Long feature paragraphs</div>
                      <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> Field-value list for features and limits</div>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#331d6b',
          notes: `### 9) Table / Structured Context Packing
[confidently] **Table / Structured Context Packing** is about *reformatting* your context for maximum information density.
#### 🎯 Goal
[lecture] **Increase information density** by converting prose into structured formats.
#### ⚙️ How It Works
Convert verbose passages into **compact bullets**, **key-value rows**, or **mini-tables** that pack more info per token.
\`\`\`mermaid
flowchart LR
    A["📄 Raw Text"] --> B["🔍 Extract Fields"]
    B --> C["📊 Structured Rows"]
    C --> D["📦 Dense Context"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
Think of it like converting a long email into a spreadsheet — same data, much more scannable.
#### 📅 When to Use
Ideal for **specs**, **product catalogs**, **schedules**, and **APIs** — anywhere data has repeating fields.
#### 📝 Example
[disappointed] **Before:** Long paragraphs describing product features, specs, and limits.
[pleased] **After:** A clean field-value list: "Max Users: 100 | Storage: 50GB | API Rate: 1000/min"
> [quizzically] How much of your content could be restructured as key-value pairs? You'd be surprised!
Let's see how to implement this...`
        },
        {
          id: 28,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="slideInTop">
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <GSAPStaggerList stagger={0.15} delay={0.3}>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>1. Extract entities/fields</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>2. Normalize units and names</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>3. Pack as structured rows with provenance</div>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#331d6b',
          notes: `### Implementation Steps — Structured Context Packing
[lecture] #### Step 1: Extract entities/fields
Use NER (Named Entity Recognition) or regex to identify key fields like names, dates, quantities, and categories.
#### Step 2: Normalize units and names
Standardize formats — e.g., "10 GB" vs "10240 MB" → choose one consistent representation.
#### Step 3: Pack as structured rows with provenance
Format as key-value pairs or mini-tables. Always include source references so the LLM can cite.
> [warmly] Pro tip: LLMs are *very* good at reading structured formats like JSON, Markdown tables, or YAML — use them!
Let's look at the trade-offs...`
        },
        {
          id: 29,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>High density</li>
                      <li>Consistent formatting</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Conversion effort</li>
                      <li>Nuance may be lost</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#331d6b',
          notes: `### Pros & Cons — Structured Context Packing
#### ✅ Pros
[pleased] - **High density**: Pack significantly more information per token than prose
- **Consistent formatting**: LLMs parse structured data more reliably than unstructured text
#### ❌ Cons
[cautiously] - **Conversion effort**: Transforming prose to structured format requires NLP pipelines or manual rules
- **Nuance may be lost**: Prose carries tone, caveats, and qualifications that structured formats may drop
> [conversational] Key question: Is your content *already* semi-structured (e.g., product specs, API docs)? If so, this is an easy win.
[enthusiastically] Next: What about *duplicate* content wasting your token budget? Enter **Semantic Deduplication**...`
        }
      ]
    },
    {
      id: 'technique-10',
      title: '10) Semantic Deduplication',
      slides: [
        {
          id: 30,
          title: '10) Semantic Deduplication',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Goal / What It Solves</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Remove overlapping/near-duplicate chunks before packing
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Semantic Deduplication Flow" diagram={`flowchart LR
    A["📄 Duplicate Chunks"] --> B["🔍 Similarity Check"]
    B --> C["🗑️ Remove Duplicates"]
    C --> D["📦 Clean Context"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`} />
                    </div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>How It Works</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Cluster or similarity-threshold to drop duplicates
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Deduplication: 3 Sources → 1 Chunk" diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    subgraph Dupes["3 Near-Identical Chunks"]
        D1["Source A: 'Refund in 30 days'"]
        D2["Source B: 'Refund within 30 days'"]
        D3["Source C: 'Returns in 30 days'"]
    end
    Dupes --> Keep["✅ Keep best: Source A\n(cite all 3)"]
    style Dupes fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:#000
    style Keep fill:#c8e6c9,stroke:#4caf50,stroke-width:2px,color:#000`} />
                    </div>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>When to Use</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Scraped web, versioned docs, mirrored content
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Example (Before → After)</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <div><strong>Before:</strong> Same paragraph from 3 sources</div>
                      <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> Single representative with citations to all</div>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#691d6b',
          notes: `### 10) Semantic Deduplication
[confidently] **Semantic Deduplication** 👉 'semantic dee-dup' — is about removing *redundant* chunks that say the same thing.
#### 🎯 Goal
[lecture] **Remove overlapping or near-duplicate chunks** before packing to save tokens.
#### ⚙️ How It Works
Use **clustering** or **similarity thresholds** to detect and drop duplicate chunks, keeping only the best representative.
\`\`\`mermaid
flowchart LR
    A["📄 Duplicate Chunks"] --> B["🔍 Similarity Check"]
    B --> C["🗑️ Remove Duplicates"]
    C --> D["📦 Clean Context"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
Think of it like cleaning your photo library — delete the duplicates, keep the best version.
#### 📅 When to Use
Essential for **scraped web content**, **versioned docs**, and **mirrored content** where duplicates are common.
#### 📝 Example
[disappointed] **Before:** The same paragraph appears from 3 different sources, wasting 2/3 of your token budget on repeats.
[pleased] **After:** A single representative chunk with citations to all three sources.
> [seriously] How much of your corpus is duplicated? In web-scraped data, it can be *over 30%*.
Let's implement this...`
        },
        {
          id: 31,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="slideInTop">
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <GSAPStaggerList stagger={0.15} delay={0.3}>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>1. Embed chunks; compute similarities</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>2. Cluster or use MinHash/Jaccard</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>3. Keep highest quality/most recent representative</div>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#691d6b',
          notes: `### Implementation Steps — Semantic Deduplication
[lecture] #### Step 1: Embed chunks; compute similarities
Generate embeddings for all chunks and compute pairwise cosine similarity scores.
#### Step 2: Cluster or use MinHash/Jaccard
Group similar chunks using clustering algorithms, or use **MinHash** 👉 'min-hash' / **Jaccard similarity** for faster approximate dedup on large corpora.
#### Step 3: Keep highest quality/most recent representative
From each cluster, keep the chunk with the best quality signal (freshness, source authority, completeness).
> [warmly] Pro tip: Set your similarity threshold conservatively (e.g., 0.9+) to avoid accidentally merging chunks that look similar but have important differences.
Let's see the trade-offs...`
        },
        {
          id: 32,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Saves tokens</li>
                      <li>Reduces noise</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Might drop subtle differences</li>
                      <li>Extra compute</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#691d6b',
          notes: `### Pros & Cons — Semantic Deduplication
#### ✅ Pros
[pleased] - **Saves tokens**: Eliminate redundant content and fit more *unique* information
- **Reduces noise**: Less repetition means the LLM focuses on *distinct* evidence
#### ❌ Cons
[cautiously] - **Might drop subtle differences**: Two chunks that seem similar might have important nuances
- **Extra compute**: Pairwise similarity computation can be expensive for large corpora
> [conversational] Consider: For production systems, run dedup at *index time* (not query time) to avoid latency overhead.
[confidently] Next: Let's talk about the *meta-technique* — **Token-Budget Aware Packing**...`
        }
      ]
    },
    {
      id: 'technique-11',
      title: '11) Token-Budget Aware Packing',
      slides: [
        {
          id: 33,
          title: '11) Token-Budget Aware Packing',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Goal / What It Solves</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Guarantee fits within model context window
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Token-Budget Aware Packing Flow" diagram={`flowchart LR
    A["📄 Ranked Chunks"] --> B["📏 Token Counter"]
    B --> C{"Fits Budget?"}
    C -->|Yes| D["📦 Add to Context"]
    C -->|No| E["🗜️ Compress/Skip"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`} />
                    </div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>How It Works</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Track tokens and greedily pack; compress or skip when over budget
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Token Budget: Packing Loop" diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    B["Budget: 4000 tokens"]
    B --> C1["Chunk 1: 800t → add ✅\n(used: 800)"]
    C1 --> C2["Chunk 2: 600t → add ✅\n(used: 1400)"]
    C2 --> C3["Chunk 3: 900t → add ✅\n(used: 2300)"]
    C3 --> C4["Chunk 4: 2000t → compress!\n→ 400t ✅ (used: 2700)"]
    C4 --> Done["✅ Done: 2700/4000 tokens"]
    style B fill:#e3f2fd,color:#000
    style Done fill:#c8e6c9,color:#000`} />
                    </div>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>When to Use</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Any limited context; multi-source retrieval
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Example (Before → After)</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <div><strong>Before:</strong> Prompt truncation at runtime</div>
                      <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> 4 chunks + 2 compressed fit within 4k tokens</div>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d3b',
          notes: `### 11) Token-Budget Aware Packing
[confidently] **Token-Budget Aware Packing** is the *meta-technique* — it guarantees everything fits within your model's context window.
#### 🎯 Goal
[lecture] **Guarantee** that packed context fits within the model's context window — no truncation, no surprises.
#### ⚙️ How It Works
**Track tokens** as you pack, and **greedily add** chunks. When over budget, **compress** or **skip**.
\`\`\`mermaid
flowchart LR
    A["📄 Ranked Chunks"] --> B["📏 Token Counter"]
    B --> C{"Fits Budget?"}
    C -->|Yes| D["📦 Add to Context"]
    C -->|No| E["🗜️ Compress/Skip"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
Think of it like packing a suitcase with a weight limit — you check each item before adding it, and if it's too heavy, you either compress it or leave it out.
#### 📅 When to Use
**Every RAG system** should have this. It's especially critical for **multi-source retrieval** with variable chunk sizes.
#### 📝 Example
[disappointed] **Before:** Prompt gets truncated at runtime because nobody tracked total tokens.
[pleased] **After:** 4 chunks + 2 compressed chunks fit neatly within a 4k-token budget.
> [playfully] Raise your hand if you've been bitten by unexpected truncation. [seriously] This technique prevents that.
Let's implement this...`
        },
        {
          id: 34,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="slideInTop">
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <GSAPStaggerList stagger={0.15} delay={0.3}>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>1. Set budget and headroom for system/prompt/answer</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>2. Iterate ranked candidates; add if fits</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>3. Fallback: compress or skip</div>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#6b1d3b',
          notes: `### Implementation Steps — Token-Budget Aware Packing
[lecture] #### Step 1: Set budget and headroom
Reserve space for the system prompt, user query, and expected answer length. Your *packing budget* is what's left.
#### Step 2: Iterate ranked candidates; add if fits
Walk through your ranked chunks. For each, count tokens and add it if there's room.
#### Step 3: Fallback: compress or skip
If a high-value chunk doesn't fit, try compressing it (Technique 7). If it *still* doesn't fit, skip it.
> [warmly] Pro tip: Always reserve at least 20% of your context for the answer — otherwise the LLM has no room to "think."
Let's see the trade-offs...`
        },
        {
          id: 35,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Predictable behavior</li>
                      <li>Avoids truncation</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Greedy may be suboptimal</li>
                      <li>Added logic</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d3b',
          notes: `### Pros & Cons — Token-Budget Aware Packing
#### ✅ Pros
[pleased] - **Predictable behavior**: You *know* the context will fit — no runtime surprises
- **Avoids truncation**: Critical information is never silently cut off
#### ❌ Cons
[cautiously] - **Greedy may be suboptimal**: Packing the first chunk that fits might not be the globally optimal selection
- **Added logic**: More code to maintain in your pipeline — token counting, budget tracking, fallback logic
> [seriously] Key insight: This isn't optional — it's *essential*. Every production RAG system needs token-budget awareness.
[enthusiastically] Next: What if you could *adjust* how many chunks you retrieve based on query complexity? That's **Adaptive k**...`
        }
      ]
    },
    {
      id: 'technique-12',
      title: '12) Adaptive k Retrieval (Variable Cutoff)',
      slides: [
        {
          id: 36,
          title: '12) Adaptive k Retrieval (Variable Cutoff)',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Goal / What It Solves</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Use fewer or more chunks depending on query complexity
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Adaptive k Retrieval Flow" diagram={`flowchart LR
    A["❓ Query"] --> B["📊 Estimate Complexity"]
    B --> C["🔢 Adjust k"]
    C --> D["📦 Retrieve k Chunks"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`} />
                    </div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>How It Works</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Estimate complexity and adjust k; stop when marginal gain is low
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Adaptive k: Query Complexity" diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    subgraph Specific["Specific: 'Error code 404 in module X'"]
        S["Score distribution: steep drop\n→ k=2 chunks"]
    end
    subgraph Broad["Broad: 'What is the refund policy?'"]
        Br["Score distribution: flat\n→ k=8 chunks"]
    end
    style Specific fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
    style Broad fill:#fff9c4,stroke:#f57c00,stroke-width:2px,color:#000`} />
                    </div>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>When to Use</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Ambiguous vs highly specific queries
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Example (Before → After)</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <div><strong>Before:</strong> Fixed k=5 for all queries</div>
                      <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> k=2 for exact error; k=8 for policy overview</div>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: `### 12) Adaptive k Retrieval (Variable Cutoff)
[enthusiastically] **Adaptive k Retrieval** 👉 'adaptive-K' — dynamically adjusts *how many* chunks you retrieve based on query complexity.
#### 🎯 Goal
[lecture] **Use fewer or more chunks** depending on query complexity — don't use a one-size-fits-all approach.
#### ⚙️ How It Works
**Estimate query complexity** and adjust k (the number of retrieved chunks). Stop when adding more chunks gives diminishing returns.
\`\`\`mermaid
flowchart LR
    A["❓ Query"] --> B["📊 Estimate Complexity"]
    B --> C["🔢 Adjust k"]
    C --> D["📦 Retrieve k Chunks"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
Think of it like studying for an exam — easy questions need one page of notes, hard questions need the whole textbook.
#### 📅 When to Use
Best when you handle a **mix of query types** — from simple factoid lookups to complex multi-hop questions.
#### 📝 Example
[disappointed] **Before:** Fixed k=5 for every query — overkill for simple questions, insufficient for complex ones.
[pleased] **After:** k=2 for an exact error message match; k=8 for a broad policy overview.
> [quizzically] What's your current k value? [seriously] If it's hardcoded, you're leaving performance on the table.
Let's see how to implement this...`
        },
        {
          id: 37,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="slideInTop">
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <GSAPStaggerList stagger={0.15} delay={0.3}>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>1. Measure entropy/score distribution</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>2. Map to k (e.g., small k for exact error strings, larger k for broad topics)</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>3. Rerank and pack</div>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: `### Implementation Steps — Adaptive k Retrieval
[lecture] #### Step 1: Measure entropy/score distribution
Look at the retrieval score distribution — a steep drop means the query is specific (low k). A flat distribution means the query is broad (high k).
#### Step 2: Map to k
Use thresholds or a learned function to map score distributions to k values. E.g., entropy < 0.3 → k=2, entropy > 0.7 → k=8.
#### Step 3: Rerank and pack
After retrieving k chunks, rerank them (optionally with a cross-encoder) and pack using your token budget.
> [warmly] Pro tip: Log your k values and corresponding answer quality scores to build a dataset for tuning the mapping function.
Let's look at the trade-offs...`
        },
        {
          id: 38,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Efficient</li>
                      <li>Better recall when needed</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Requires tuning</li>
                      <li>Misestimation risk</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: `### Pros & Cons — Adaptive k Retrieval
#### ✅ Pros
[pleased] - **Efficient**: Doesn't waste tokens on unnecessary chunks for simple queries
- **Better recall when needed**: Complex queries get more evidence, improving answer quality
#### ❌ Cons
[cautiously] - **Requires tuning**: The complexity-to-k mapping needs calibration for your specific domain
- **Misestimation risk**: If complexity estimation is wrong, you'll retrieve too few or too many chunks
> [conversational] Consider: Start with a simple heuristic (score distribution shape) and refine with user feedback over time.
[excited] And now, our final technique — the most sophisticated one: **Chain-of-Context Packing**...`
        }
      ]
    },
    {
      id: 'technique-13',
      title: '13) Chain-of-Context Packing (CoC)',
      slides: [
        {
          id: 39,
          title: '13) Chain-of-Context Packing (CoC)',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div>
                    <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Goal / What It Solves</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Order context to match reasoning flow
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="Chain-of-Context Packing Flow" diagram={`flowchart LR
    A["❓ Query"] --> B["📋 Plan Steps"]
    B --> C["🔍 Group Evidence"]
    C --> D["📦 Ordered Context"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`} />
                    </div>
                    <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>How It Works</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Arrange evidence as steps: definitions → constraints → evidence → counterpoints
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover title="CoC: Reasoning Chain Order" diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    Q["❓ Is this refund valid?"]
    Q --> S1["Step 1: 📜 Refund Policy (definition)"]
    S1 --> S2["Step 2: 📅 Purchase Date (constraint)"]
    S2 --> S3["Step 3: 🧾 Receipt Evidence (fact)"]
    S3 --> S4["Step 4: ⚠️ Exception Clause (caveat)"]
    S4 --> A["✅ Grounded Answer"]
    style Q fill:#e3f2fd,color:#000
    style A fill:#c8e6c9,color:#000`} />
                    </div>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>When to Use</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      Multi-hop QA, legal/medical reasoning, root-cause analysis
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div>
                    <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Example (Before → After)</strong>
                    </div>
                    <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                      <div><strong>Before:</strong> Mixed, distracting context order</div>
                      <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> Law → precedents → case facts → exceptions</div>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1d3d6b',
          notes: `### 13) Chain-of-Context Packing (CoC)
[enthusiastically] Our final technique — **Chain-of-Context Packing** 👉 'CoC' — is the most *sophisticated*. It *orders* context to match the LLM's reasoning flow.
#### 🎯 Goal
[lecture] **Order context to match reasoning flow** — present evidence in the order the LLM needs to think through the problem.
#### ⚙️ How It Works
Arrange evidence as **reasoning steps**: definitions → constraints → evidence → counterpoints, matching how the LLM would naturally reason.
\`\`\`mermaid
flowchart LR
    A["❓ Query"] --> B["📋 Plan Steps"]
    B --> C["🔍 Group Evidence"]
    C --> D["📦 Ordered Context"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
Think of it like building a legal argument — you start with the law, then precedents, then case facts, then exceptions.
#### 📅 When to Use
Essential for **multi-hop QA**, **legal/medical reasoning**, and **root-cause analysis** — anywhere the *order* of evidence matters.
#### 📝 Example
[disappointed] **Before:** Mixed, distracting context order — the LLM jumps between unrelated facts.
[pleased] **After:** Law → precedents → case facts → exceptions — the LLM follows a clear reasoning path.
> [seriously] Have you ever noticed that *reordering* the same context changes the LLM's answer? [confidently] That's why CoC matters.
Let's see the implementation...`
        },
        {
          id: 40,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="slideInTop">
                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                    <GSAPStaggerList stagger={0.15} delay={0.3}>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>1. Draft reasoning steps from the query</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>2. Group retrieved chunks per step</div>
                      <div style={{ fontSize: '1.2rem', padding: '0.3rem 0' }}>3. Pack in step order with labels and citations</div>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d3d6b',
          notes: `### Implementation Steps — Chain-of-Context Packing
[lecture] #### Step 1: Draft reasoning steps from the query
Analyze the query to identify the logical steps needed to answer it. E.g., "Is this refund valid?" → check policy, check date, check exceptions.
#### Step 2: Group retrieved chunks per step
Assign each retrieved chunk to a reasoning step based on its content.
#### Step 3: Pack in step order with labels and citations
Order the context following the reasoning steps. Add labels like "[Step 1: Policy]", "[Step 2: Date Check]" so the LLM can follow along.
> [warmly] Pro tip: For complex queries, use an LLM to generate the reasoning plan — it's faster and more accurate than hand-coding rules.
Let's discuss the final trade-offs...`
        },
        {
          id: 41,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0}>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Pros</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Better chain-of-thought alignment</li>
                      <li>Clearer answers</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                      <strong>Cons</strong>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Overhead to plan</li>
                      <li>Needs accurate step mapping</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1d3d6b',
          notes: `### Pros & Cons — Chain-of-Context Packing
#### ✅ Pros
[pleased] - **Better chain-of-thought alignment**: The LLM's reasoning follows a clear path, producing more coherent answers
- **Clearer answers**: Users get well-structured, step-by-step explanations
#### ❌ Cons
[cautiously] - **Overhead to plan**: Generating a reasoning plan adds latency and complexity
- **Needs accurate step mapping**: If chunks are assigned to the wrong reasoning step, the LLM may get confused
> [inspiringly] Final thought: CoC is the *capstone* technique. Start with simpler techniques and add CoC when your queries demand complex reasoning.
Let's wrap up with our summary and best practices...`
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary / Best Practices',
      slides: [
        {
          id: 42,
          title: 'Summary / Best Practices',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6', textAlign: 'left' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="scaleIn">
                <div>
                  <div style={{ color: '#98c379' }}>
                    <SvgIcon iconName="duo-check-circle" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Key Takeaways</strong>
                  </div>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.2} delay={0.3}>
                <div style={{ background: 'rgba(97, 218, 251, 0.1)', padding: '0.8rem', borderRadius: '8px', borderLeft: '4px solid #61dafb', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Combine techniques</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>
                    Semantic chunking + dedup + relevance packing as a strong baseline
                  </div>
                </div>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px', borderLeft: '4px solid #98c379', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-gauge-high" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Track token budget</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>
                    Always monitor and enforce token limits; compress selectively
                  </div>
                </div>
                <div style={{ background: 'rgba(229, 192, 123, 0.1)', padding: '0.8rem', borderRadius: '8px', borderLeft: '4px solid #e5c07b', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-circle-nodes" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Add hierarchy</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>
                    Parent summaries and global + local blends improve context quality
                  </div>
                </div>
                <div style={{ background: 'rgba(198, 120, 221, 0.1)', padding: '0.8rem', borderRadius: '8px', borderLeft: '4px solid #c678dd' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-link" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Optimize order</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>
                    Order context for reasoning flow when questions are complex
                  </div>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1d6b38',
          notes: `### Summary / Best Practices
Let's bring it all together. After 13 techniques, here are the **four key takeaways**:
#### 🔧 Combine techniques
Don't use just one — **Semantic Chunking + Dedup + Relevance Packing** is a strong *baseline* that works for most systems.
#### 📊 Track token budget
*Always* monitor and enforce token limits. **Token-Budget Aware Packing** (Technique 11) should be in every pipeline.
#### 🏗️ Add hierarchy
**Parent summaries** and **global + local blends** improve context quality dramatically, especially for structured documents.
#### 🔗 Optimize order
For complex reasoning tasks, **ordering context** for reasoning flow (CoC) can make the difference between a good and great answer.
> Remember: The best RAG systems use 3-5 of these techniques together. Start simple, measure, iterate.
Let's close with practical implementation tips...`
        },
        {
          id: 43,
          title: 'Implementation Tips',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6', textAlign: 'left' }}>
              <div style={{ marginBottom: '20px' }}></div>
              <GSAPAnimated animation="bounceIn">
                <div>
                  <div style={{ color: '#e5c07b' }}>
                    <SvgIcon iconName="duo-clipboard-list" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Implementation Tips</strong>
                  </div>
                  <ul style={{ marginLeft: '1.5rem', fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <li>Cache summaries/compressions; log provenance per chunk</li>
                    <li>Measure with answer-grounding and citation metrics</li>
                    <li>Start simple (k, relevance) → iterate with adaptive and CoC</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.5}>
                <div>
                  <div style={{ color: '#61dafb' }}>
                    <SvgIcon iconName="duo-rocket" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Next Steps</strong>
                  </div>
                  <div style={{ background: 'rgba(97, 218, 251, 0.15)', padding: '1rem', borderRadius: '8px' }}>
                    <ol style={{ marginLeft: '1.5rem', fontSize: '1.2rem', marginBottom: 0, lineHeight: '1.8' }}>
                      <li>Pilot on one corpus; A/B two packing variants</li>
                      <li>Instrument latency, cost, and answer quality</li>
                    </ol>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d6b38',
          notes: `### Implementation Tips & Next Steps
[lecture] Here's your action plan for taking these techniques into production:
#### 💡 Implementation Tips
[conversational] - **Cache everything** — summaries, compressions, dedup results. Don't recompute on every query.
- **Measure with answer-grounding and citation metrics** — track whether answers actually use the packed context.
- **Start simple** — begin with fixed k and relevance scoring, then iterate with adaptive k and CoC.
#### 🚀 Next Steps
[enthusiastically] 1. **Pilot on one corpus** — pick your messiest data source and A/B test two packing variants
2. **Instrument everything** — track latency, cost, and answer quality for each technique
> [warmly] [inspiringly] Thank you! Questions? Remember: context packing is a *journey*, not a destination. Start with one technique today and build from there.
**Prepared by:** Nisar A | **niisar.com**`
        }
      ]
    }
  ]
};
