import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

export const chunkingTechniquesDeck: Deck = {
  id: 'chunking-techniques-deck',
  name: '26 Chunking Techniques & Cheat Sheet',
  description: 'Practical guidance for high-quality retrieval in RAG and NLP applications',
  category: 'RAG',
  theme: 'moon',
  slides: [],
  slideGroups: [
    {
      id: 'introduction',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          center: true,
          title: '26 Chunking Techniques & Cheat Sheet',
          content: (
            <div style={{ color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.2} duration={1.0}>
                <h2 style={{ marginBottom: '40px' }}>Practical guidance, defaults, and trade-offs for high-quality retrieval in RAG and NLP applications</h2>
              </GSAPAnimated>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', marginTop: '50px' }}>
                <GSAPAnimated animation="rotateIn" delay={0.5} duration={0.8}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <SvgIcon iconName="duo-file" sizeName="4x" style={{ color: '#3498db' }} />
                    <p style={{ marginTop: '15px', fontSize: '1.2rem' }}>Document</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.8} duration={0.6}>
                  <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
                </GSAPAnimated>
                <GSAPAnimated animation="rotateIn" delay={0.7} duration={0.8}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <SvgIcon iconName="duo-scissors" sizeName="4x" style={{ color: '#f39c12' }} />
                    <p style={{ marginTop: '15px', fontSize: '1.2rem' }}>Chunking</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={1.0} duration={0.6}>
                  <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
                </GSAPAnimated>
                <GSAPAnimated animation="rotateIn" delay={0.9} duration={0.8}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <SvgIcon iconName="duo-cubes" sizeName="4x" style={{ color: '#2ecc71' }} />
                    <p style={{ marginTop: '15px', fontSize: '1.2rem' }}>Retrievable Units</p>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="slideInBottom" delay={1.2} duration={0.7}>
                <div>
                  <p><strong>Prepared by:</strong> Nisar A</p>
                  <p><strong>Date:</strong> November 7, 2025</p>
                  <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2C3E50',
          notes: `### 1. 26 Chunking Techniques & Cheat Sheet
Welcome to this comprehensive guide on chunking techniques! Today we're diving into one of the most critical yet underappreciated topics in modern AI systems.

#### What We'll Cover
We're exploring **26 different chunking techniques** that are essential for building high-quality RAG systems and NLP applications. Think of chunking as the art of breaking down large documents into bite-sized pieces that computers can actually understand and retrieve efficiently. It's like organizing a massive library so you can find exactly the book, chapter, or even the paragraph you need in seconds.

#### The Pipeline
Look at this visual workflow on the screen. We start with a **document**, apply various **chunking strategies**, and end up with **retrievable units** that power your AI system. Each step matters because poor chunking leads to poor retrieval, which leads to poor AI responses. It's that foundational.

#### Why This Matters
Whether you're building a chatbot, a semantic search engine, or any RAG application, the quality of your chunking directly impacts the quality of your results. We'll explore practical defaults, trade-offs, and real-world use cases for each technique.

Let's begin this journey by understanding what chunking really means and why it's so crucial for modern AI systems.`
        },
        {
          id: 2,
          title: 'What is Chunking and Why It Matters',
          icon: { name: 'duo-scissors' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInTop" delay={0.1} duration={0.7}>
                <div style={{ marginBottom: '30px' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#3498db', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-book-open" sizeName="2x" darkModeInvert={true} />
                    Definition
                    <MermaidPopover
                      diagram={`graph LR
    A[Large Document] -->|Chunking| B[Chunk 1]
    A -->|Chunking| C[Chunk 2]
    A -->|Chunking| D[Chunk 3]
    B -->|Embed| E[Vector DB]
    C -->|Embed| E
    D -->|Embed| E
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784
    style E fill:#e1bee7`}
                      triggerText="View Process"
                    />
                  </h3>
                  <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                    Chunking is the process of breaking large documents into <strong>smaller, retrievable, semantically coherent units</strong> that preserve context while fitting within model constraints.
                  </p>
                </div>
              </GSAPAnimated>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <GSAPAnimated animation="slideInLeft" delay={0.3} duration={0.8}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginBottom: '12px' }}>
                      <SvgIcon iconName="duo-check-circle" sizeName="2x" darkModeInvert={true} />
                      Why It's Important
                    </h4>
                  </GSAPAnimated>
                  <GSAPStaggerList stagger={0.1} delay={0.5}>
                    <ul style={{ lineHeight: '1.8', fontSize: '1.2rem' }}>
                      <li>Fits content within model context windows</li>
                      <li>Increases retrieval precision and relevance</li>
                      <li>Reduces computational cost and latency</li>
                      <li>Combats "lost-in-the-middle" effect in LLMs</li>
                    </ul>
                  </GSAPStaggerList>
                  <GSAPAnimated animation="slideInLeft" delay={0.6} duration={0.8}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12', marginTop: '15px', marginBottom: '12px' }}>
                      <SvgIcon iconName="duo-sliders" sizeName="2x" darkModeInvert={true} />
                      Key Variables
                    </h4>
                  </GSAPAnimated>
                  <GSAPStaggerList stagger={0.12} delay={0.8}>
                    <ul style={{ lineHeight: '1.8', fontSize: '1.2rem' }}>
                      <li>Chunk size (tokens, sentences, paragraphs)</li>
                      <li>Overlap between chunks</li>
                      <li>Boundary determination (semantic vs. structural)</li>
                      <li>Content modality (text, tables, code, audio)</li>
                      <li>Metadata enrichment</li>
                    </ul>
                  </GSAPStaggerList>
                </div>
                <div>
                  <GSAPAnimated animation="slideInRight" delay={0.3} duration={0.8}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9b59b6', marginBottom: '12px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                      Desired Outcomes
                    </h4>
                  </GSAPAnimated>
                  <GSAPStaggerList stagger={0.15} delay={0.5}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '1.2rem' }}>
                      <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', borderLeft: '4px solid #9b59b6' }}>
                        <strong>Better recall/precision in retrieval</strong>
                      </div>
                      <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', borderLeft: '4px solid #9b59b6' }}>
                        <strong>More faithful grounding of LLM outputs</strong>
                      </div>
                      <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', borderLeft: '4px solid #9b59b6' }}>
                        <strong>Faster agent information loops</strong>
                      </div>
                      <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', borderLeft: '4px solid #9b59b6' }}>
                        <strong>Optimized storage and embedding costs</strong>
                      </div>
                    </div>
                  </GSAPStaggerList>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#2C3E50',
          notes: `### 2. What is Chunking and Why It Matters
Now let's define what we mean by chunking and explore why it's absolutely critical for modern AI systems.

#### The Core Definition
At its heart, **chunking** is the process of breaking large documents into smaller, retrievable, semantically coherent units. Think of it like slicing a pizza. You want each slice to be the right size, contain a good mix of toppings, and be easy to pick up and eat. Similarly, each chunk needs to be the right size for your model, contain complete thoughts or concepts, and be easy for your system to retrieve and understand.

#### Why It's Critical
First, chunking helps us **fit content within model context windows**. Most language models have limits, like 4,096 or 8,192 tokens. If you try to stuff a 50-page document into that window, you're out of luck. Second, smaller chunks **increase retrieval precision**. When someone asks a question, you want to return the exact relevant paragraph, not an entire 20-page chapter. Third, it **reduces computational costs**. Processing 500 tokens is much cheaper than processing 5,000 tokens. And finally, it **combats the "lost-in-the-middle" effect**, where LLMs struggle to pay attention to information buried in the middle of long contexts.

#### Key Variables to Consider
When you're designing your chunking strategy, you need to think about several variables. What's your **chunk size**? Are you counting tokens, sentences, or paragraphs? How much **overlap** do you want between consecutive chunks? How do you determine **boundaries**, based on semantic meaning or structural markers like headings? What type of **content** are you working with, text, tables, code, or audio? And what **metadata** should you attach to each chunk to make retrieval more effective?

#### The Ultimate Goals
All of this effort is in service of four key outcomes. We want **better recall and precision** in our retrieval systems. We want **more faithful grounding** of LLM outputs, so they don't hallucinate or make things up. We want **faster information loops** for AI agents that need to query and reason quickly. And we want to **optimize storage and embedding costs** because at scale, those expenses add up fast.

The diagram on screen shows the basic chunking pipeline. A large document flows in, gets split into chunks, and those chunks get embedded into a vector database for retrieval. Simple, right? But as we'll see, there are many ways to slice that pizza, and each approach has its own trade-offs.`
        },
        {
          id: 3,
          title: 'Overview of 26 Techniques',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#4ad786' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2} duration={0.8}>
                  <div>
                    <h4 style={{ color: '#3498db', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-ruler" sizeName="2x" darkModeInvert={true} />
                      Fixed/Token-based (1-3)
                      <MermaidPopover
                        diagram={`graph TD
    A[Text: 1000 chars] -->|Fixed Size| B[Chunk 1: 256 chars]
    A -->|Fixed Size| C[Chunk 2: 256 chars]
    A -->|Fixed Size| D[Chunk 3: 256 chars]
    A -->|Fixed Size| E[Chunk 4: 232 chars]
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784
    style E fill:#81c784`}
                        triggerText="📊"
                      />
                    </h4>
                    <GSAPStaggerList stagger={0.1} delay={0.4}>
                      <ul style={{ lineHeight: '1.5', fontSize: '1.2rem', color: '#3498db' }}>
                        <li>Fixed-Size Chunking</li>
                        <li>Sliding Window Chunking</li>
                        <li>Token-Aware Chunking</li>
                      </ul>
                    </GSAPStaggerList>
                    <h4 style={{ color: '#2ecc71', marginTop: '12px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-paragraph" sizeName="2x" darkModeInvert={true} />
                      Sentence/Paragraph-based (4-6)
                      <MermaidPopover
                        diagram={`graph TD
    A[Document] -->|Split| B[Sentence 1]
    A -->|Split| C[Sentence 2]
    A -->|Split| D[Sentence 3]
    B -->|Group| E[Chunk 1]
    C -->|Group| E
    D -->|Group| F[Chunk 2]
    style A fill:#4fc3f7
    style E fill:#81c784
    style F fill:#81c784`}
                        triggerText="📊"
                      />
                    </h4>
                    <GSAPStaggerList stagger={0.1} delay={0.6}>
                      <ul style={{ lineHeight: '1.5', fontSize: '1.2rem', color: '#2ecc71' }}>
                        <li>Sentence-Level Chunking</li>
                        <li>Paragraph-Level Chunking</li>
                        <li>Windowed Sentence Grouping</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInTop" delay={0.3} duration={0.8}>
                  <div>
                    <h4 style={{ color: '#9b59b6', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-sitemap" sizeName="2x" darkModeInvert={true} />
                      Structure-aware (7-13)
                      <MermaidPopover
                        diagram={`graph TD
    A[Document] -->|Parse| B[Section 1]
    A -->|Parse| C[Section 2]
    B -->|Extract| D[Heading + Para]
    C -->|Extract| E[Table]
    C -->|Extract| F[Code Block]
    style A fill:#4fc3f7
    style D fill:#81c784
    style E fill:#ffd700
    style F fill:#e1bee7`}
                        triggerText="📊"
                      />
                    </h4>
                    <GSAPStaggerList stagger={0.08} delay={0.5}>
                      <ul style={{ lineHeight: '1.5', fontSize: '1.2rem', color: '#9b59b6' }}>
                        <li>Structure-Aware Chunking</li>
                        <li>Content-Aware Chunking</li>
                        <li>Heading/Title Anchor Chunking</li>
                        <li>Markdown/HTML Structure Chunking</li>
                        <li>Table-Aware Chunking</li>
                        <li>Code-Aware Chunking</li>
                        <li>Page-Preservation Chunking</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4} duration={0.8}>
                  <div>
                    <h4 style={{ color: '#f39c12', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-brain" sizeName="2x" darkModeInvert={true} />
                      Semantic/Adaptive (14-19)
                      <MermaidPopover
                        diagram={`graph TD
    A[Text] -->|Embed| B[Vectors]
    B -->|Similarity| C[Find Boundaries]
    C -->|Split| D[Semantic Chunk 1]
    C -->|Split| E[Semantic Chunk 2]
    style A fill:#4fc3f7
    style B fill:#e1bee7
    style D fill:#81c784
    style E fill:#81c784`}
                        triggerText="📊"
                      />
                    </h4>
                    <GSAPStaggerList stagger={0.1} delay={0.6}>
                      <ul style={{ lineHeight: '1.5', fontSize: '1.2rem', color: '#f39c12' }}>
                        <li>Semantic Chunking (Embedding-Based)</li>
                        <li>TextTiling</li>
                        <li>Discourse/RST Chunking</li>
                        <li>Graph-Based Semantic Chunking</li>
                        <li>Recursive Character Text Splitting</li>
                        <li>Adaptive Length Chunking</li>
                      </ul>
                    </GSAPStaggerList>
                    <h4 style={{ color: '#e67e22', marginTop: '12px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-wand-sparkles" sizeName="2x" darkModeInvert={true} />
                      Special-Purpose (20-26)
                      <MermaidPopover
                        diagram={`graph LR
    A[Audio] -->|Transcribe| B[Text]
    B -->|Speaker Turns| C[Chunk by Speaker]
    D[QA Pairs] -->|Extract| E[QA Chunks]
    F[Images] -->|Caption| G[Visual Chunks]
    style A fill:#4fc3f7
    style D fill:#4fc3f7
    style F fill:#4fc3f7
    style C fill:#81c784
    style E fill:#81c784
    style G fill:#81c784`}
                        triggerText="📊"
                      />
                    </h4>
                    <GSAPStaggerList stagger={0.12} delay={0.8}>
                      <ul style={{ lineHeight: '1.5', fontSize: '1.2rem', color: '#e67e22' }}>
                        <li>Summarization-Based Chunking</li>
                        <li>Audio/ASR Time-Based Chunking</li>
                        <li>Speaker-Turn Chunking</li>
                        <li>QA-Focused Chunking</li>
                        <li>Caption + Context Chunking</li>
                        <li>Metadata-Aware Chunking</li>
                        <li>Hybrid Chunking</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="bounceIn" delay={1.0} duration={0.8}>
                <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '1.2rem', padding: '12px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px' }}>
                  <strong>Each technique includes:</strong> Pros, Cons, Best Chunk Size, Overlap Size, Computational Cost, Use Cases, Tooling Support, and Complexity Level
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2C3E50',
          notes: `### 3. Overview of 26 Techniques
Let's get the big picture! We have **26 chunking techniques** organized into five major categories. Think of this as your chunking toolkit where each tool has a specific purpose.

#### Fixed and Token-Based Techniques
The first category includes techniques 1 through 3. These are your **fixed-size, sliding window, and token-aware** methods. They're the simplest approaches, kind of like using a ruler to measure and cut. You decide on a size, maybe 256 characters or 512 tokens, and you split your text accordingly. Simple and fast, but they don't care about meaning or structure.

#### Sentence and Paragraph-Based Techniques
Next up, techniques 4 through 6 work with **sentences and paragraphs**. These methods respect linguistic boundaries. Instead of cutting mid-sentence, they split at natural points like periods or paragraph breaks. It's like cutting paper along the dotted lines instead of randomly. The result? Chunks that actually make sense when you read them.

#### Structure-Aware Techniques
The middle category, techniques 7 through 13, is where things get interesting. These are **structure-aware** methods that understand your document's organization. Got headings? Markdown formatting? HTML tags? Tables? Code blocks? These techniques know how to handle them properly. For example, if you have a section titled "Introduction" followed by three paragraphs, a structure-aware chunker keeps that heading with its content. Smart, right?

#### Semantic and Adaptive Techniques
Techniques 14 through 19 are the **semantic and adaptive** methods. These are the brainy ones that use embeddings and machine learning to understand meaning. They look at semantic similarity, discourse structure, and even graph relationships between concepts. Instead of just looking at structure, they understand context. These techniques answer questions like "Where does this topic end and the next one begin?"

#### Special-Purpose Techniques
Finally, techniques 20 through 26 are **special-purpose** methods for unique scenarios. Working with audio transcripts? There's speaker-turn chunking. Got images and captions? There's caption plus context chunking. Need to generate QA pairs? There's a technique for that too. And if no single method works, hybrid chunking lets you combine multiple approaches.

#### What You'll Learn for Each
For every single technique, we'll cover the same set of attributes. You'll learn the pros and cons, the best chunk size to use, how much overlap to apply, the computational cost, ideal use cases, which tools support it, and the complexity level. By the end, you'll know exactly which technique to reach for in any situation.

The diagrams on screen show simplified workflows for each category. Let's dive deeper into each technique, starting with the simplest approaches!`
        }
      ]
    },
    {
      id: 'strategy-1',
      title: '1. Fixed-Size Chunking',
      slides: [
        {
          id: 4,
          title: '1. Fixed-Size Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#c985ff', padding: '30px' }}>
              <GSAPAnimated animation="scaleIn" delay={0.2} duration={0.8}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#2ecc71', marginBottom: '25px' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Advantages
                  <MermaidPopover
                    diagram={`graph LR
    A[Document] -->|Split by chars| B[Chunk 1<br/>512 tokens]
    A -->|Split by chars| C[Chunk 2<br/>512 tokens]
    A -->|Split by chars| D[Chunk 3<br/>512 tokens]
    B -->|Fast & Simple| E[Vector DB]
    C -->|Fast & Simple| E
    D -->|Fast & Simple| E
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784
    style E fill:#ffd700`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
                <div><li>Simple, predictable, fast; baseline for A/B tests</li></div>
                <div><li>Consistent chunk sizes for embedding models</li></div>
                <div><li>Easy to implement and debug</li></div>
                <div><li>Predictable storage requirements</li></div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#521e7b',
          notes: `### 4. Fixed-Size Chunking - Pros
Now we dive into our first technique! Fixed-size chunking is the bread and butter of document processing, and understanding its strengths sets the foundation for everything else.

#### The Beauty of Simplicity
Fixed-size chunking is **simple, predictable, and fast**. Think of it like slicing a loaf of bread with a ruler – every slice is exactly the same width. This makes it the perfect **baseline for A/B tests** because you can compare other techniques against something consistent and reproducible. When you're starting a new RAG project, this is where you begin. Simple, right?

#### Consistency is Key
One huge advantage is **consistent chunk sizes for embedding models**. Most embedding models work best when you feed them uniform input lengths. It's like packing boxes of the same size – they stack perfectly and you know exactly how much space you need. Your embeddings become comparable and your storage requirements become predictable, which is gold for production systems.

#### Developer-Friendly
Here's what developers love: it's **easy to implement and debug**. You can write a fixed-size chunker in 10 lines of code. When something goes wrong, you can trace exactly where each chunk came from. No complex parsing, no NLP libraries, no mysterious behavior. Just count characters or tokens and split. The **predictable storage requirements** mean you can estimate costs before you even start processing documents.

This simplicity makes fixed-size chunking the go-to choice when you need something working yesterday, or when your documents are fairly uniform and don't have complex structure.`
        },
        {
          id: 5,
          title: '1. Fixed-Size Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#c985ff', padding: '30px' }}>
              <GSAPAnimated animation="slideInRight" delay={0.2} duration={0.8}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e74c3c', marginBottom: '25px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Disadvantages
                  <MermaidPopover
                    diagram={`graph TD
    A[Complete Sentence] -->|Fixed Split| B[Chunk 1:<br/>'The quick brown']
    A -->|Fixed Split| C[Chunk 2:<br/>'fox jumps over']
    B -->|Lost Context| D[Poor Retrieval]
    C -->|Broken Meaning| D
    style A fill:#4fc3f7
    style B fill:#ffcdd2
    style C fill:#ffcdd2
    style D fill:#e74c3c`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.7}>
                <div><li>Ignores semantics; may split sentences</li></div>
                <div><li>Risk of context dilution at boundaries</li></div>
                <div><li>Related information may span chunks</li></div>
                <div><li>Suboptimal for structured documents</li></div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#521e7b',
          notes: `### 5. Fixed-Size Chunking - Cons
But what about the downsides? Every technique has trade-offs, and fixed-size chunking has some significant ones you need to understand.

#### The Semantic Blindness Problem
Fixed-size chunking **ignores semantics entirely**. It's like cutting a book page with scissors at exactly 5 inches – you don't care if you're mid-word, mid-sentence, or mid-thought. The chunker just counts tokens and splits. This means you can absolutely **split sentences** right in the middle. Imagine a sentence like "The company's revenue grew by 47% in Q4 due to strong product adoption" getting split into "The company's revenue grew by 47%" and "in Q4 due to strong product adoption." Neither chunk tells the complete story!

#### Context Gets Lost at Boundaries
There's a **risk of context dilution at boundaries**. When you split mechanically, critical context that spans across your boundary line gets separated. Think of it like tearing a photograph in half – each half makes less sense without the other. In retrieval, this means you might miss the full answer because it's split across two chunks that don't rank high enough individually.

#### Related Content Gets Separated
**Related information may span chunks**. If you're documenting an API endpoint and the request format is in chunk 1 but the response format is in chunk 2, users searching for "how does this API work" might only get half the picture. This is frustrating for both the retrieval system and the end user.

#### Structure Gets Ignored
Finally, it's **suboptimal for structured documents**. If you have a document with headers, sections, bullet points, and tables, fixed-size chunking treats it like one long string. It doesn't respect that "Chapter 3: Security" should probably stay together, or that a bulleted list belongs in the same chunk.

Despite these limitations, fixed-size chunking still has its place – you just need to know when to use it and when to reach for something more sophisticated.`
        },
        {
          id: 6,
          title: '1. Fixed-Size Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#c985ff', padding: '30px' }}>
              <GSAPAnimated animation="flipCard" delay={0.3} duration={1.0}>
                <h3 style={{ color: '#2ecc71', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-ruler" sizeName="1x" />
                  Best Chunk Size
                  <MermaidPopover
                    diagram={`graph LR
    A[Token Count] -->|Too Small<br/>100 tokens| B[Lost Context]
    A -->|Sweet Spot<br/>512 tokens| C[Optimal Balance]
    A -->|Too Large<br/>2000 tokens| D[Noise & Cost]
    style A fill:#4fc3f7
    style B fill:#ffcdd2
    style C fill:#81c784
    style D fill:#ffcdd2`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.5} duration={0.7}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>300–1000 tokens (start with 512)</li>
                  <li>Varies by embedding model and content density</li>
                </ul>
              </GSAPAnimated>
              <GSAPAnimated animation="flipCard" delay={0.7} duration={1.0}>
                <h3 style={{ color: '#f39c12', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-link" sizeName="1x" />
                  Overlap Size
                  <MermaidPopover
                    diagram={`graph TD
    A[Chunk 1: tokens 0-512] -.->|Overlap 50 tokens| B[Chunk 2: tokens 462-974]
    B -.->|Overlap 50 tokens| C[Chunk 3: tokens 924-1436]
    style A fill:#81c784
    style B fill:#81c784
    style C fill:#81c784`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.9} duration={0.7}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>10–20% of chunk size (50–150 tokens)</li>
                  <li>Helps preserve context across chunk boundaries</li>
                </ul>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={1.1} duration={0.8}>
                <h3 style={{ color: '#e74c3c', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-gauge" sizeName="1x" />
                  Computational Cost
                </h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.3} duration={0.6}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                  <li>Low (implementation complexity and processing requirements)</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#521e7b',
          notes: `### 6. Fixed-Size Chunking - Configuration
Now let's talk about the practical side: how do you actually configure fixed-size chunking? These numbers matter more than you might think.

#### Finding the Sweet Spot for Chunk Size
The **best chunk size** is typically **300 to 1000 tokens**, and we recommend **starting with 512**. Why 512? It's a nice power of two that works well with most embedding models and captures enough context without becoming unwieldy. Think of it as the "Goldilocks zone" – not too small, not too large, just right for most use cases.

But here's the nuance: this **varies by embedding model and content density**. If you're using an embedding model that was trained on shorter sequences, like 256 tokens, you might want smaller chunks. If your content is very dense technical documentation, you might need larger chunks to capture complete concepts. Always check your embedding model's documentation – many are optimized for specific input lengths.

#### Overlap: The Secret Sauce
**Overlap size** is crucial and often overlooked. We recommend **10 to 20 percent of your chunk size**, which translates to about **50 to 150 tokens**. Let me explain why this matters.

Without overlap, if important information sits right at a chunk boundary, you risk splitting it awkwardly. With overlap, you create a buffer zone where adjacent chunks share some content. This **helps preserve context across chunk boundaries**. Imagine a sentence that starts at token 510 in a 512-token chunk – without overlap, it gets brutally cut off. With 50 tokens of overlap, the next chunk captures the complete sentence.

#### Computational Cost: A Key Advantage
The **computational cost is low**. You're basically just counting and splitting strings. No machine learning models, no complex NLP parsing, no heavy lifting. This means you can process millions of documents quickly and cheaply. For many applications, this alone makes fixed-size chunking attractive.

These configurations give you a solid starting point, but remember: always test with your actual data and embedding model!`
        },
        {
          id: 7,
          title: '1. Fixed-Size Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#c985ff', padding: '30px' }}>
              <GSAPAnimated animation="scaleIn" delay={0.2} duration={0.8}>
                <h3 style={{ color: '#3498db', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="1x" />
                  Use Cases / Examples
                  <MermaidPopover
                    diagram={`graph TD
    A[Fixed-Size Chunking] --> B[Server Logs]
    A --> C[FAQ Documents]
    A --> D[Uniform Content]
    A --> E[RAG Baseline]
    B --> F[Quick Search]
    C --> F
    D --> F
    E --> F
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784
    style E fill:#81c784
    style F fill:#ffd700`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.1} duration={0.6}>
                <div><li>Logs, FAQs, short documents</li></div>
                <div><li>Uniform text content</li></div>
                <div><li>Baseline RAG implementations</li></div>
                <div><li>Simple knowledge bases</li></div>
              </GSAPStaggerList>
              <GSAPAnimated animation="slideInBottom" delay={0.8} duration={0.8}>
                <h3 style={{ color: '#9b59b6', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '25px' }}>
                  <SvgIcon iconName="duo-wrench" sizeName="1x" />
                  Tooling Support
                </h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.6}>
                <div><li>LangChain Character/Token splitters</li></div>
                <div><li>LlamaIndex, Haystack</li></div>
                <div><li>Chroma, Weaviate, Pinecone</li></div>
                <div><li>Custom implementations (simple)</li></div>
              </GSAPStaggerList>
              <GSAPAnimated animation="rotateIn" delay={1.3} duration={0.9}>
                <h3 style={{ color: '#1abc9c', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '25px' }}>
                  <SvgIcon iconName="duo-graduation-cap" sizeName="1x" />
                  Complexity Level
                </h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.5} duration={0.6}>
                <p style={{ fontSize: '1.2rem' }}><strong>Beginner</strong> - Required expertise and implementation difficulty</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#521e7b',
          notes: `### 7. Fixed-Size Chunking - Use Cases & Tools
When should you actually use fixed-size chunking, and what tools make it easy? Let's get practical.

#### Perfect Use Cases
Fixed-size chunking shines for **logs, FAQs, and short documents**. Why? These types of content are typically **uniform** – log entries follow patterns, FAQ answers are roughly similar in length, and short documents don't have complex hierarchical structure. You're not losing much by splitting mechanically because there wasn't much structure to preserve in the first place.

It's also ideal for **baseline RAG implementations**. When you're starting a new project, you want something working quickly so you can iterate. Fixed-size chunking gets you there fast. You can always upgrade to more sophisticated techniques later once you've measured baseline performance.

**Simple knowledge bases** are another sweet spot. If you have a collection of straightforward articles or documentation without deep nesting or complex cross-references, fixed-size chunking often works just fine.

#### Excellent Tooling Support
The **tooling support is fantastic** because this is such a fundamental technique. **LangChain** provides Character and Token splitters that are battle-tested and easy to use. **LlamaIndex** and **Haystack** both have robust implementations. All major vector databases like **Chroma, Weaviate, and Pinecone** support or integrate with fixed-size chunking out of the box.

And here's the kicker: **custom implementations are simple**. If you don't want dependencies, you can write your own fixed-size chunker in an afternoon. It's just string slicing with some token counting. This simplicity means you're never locked into a particular framework.

#### Beginner-Friendly
The **complexity level is Beginner**. If you're new to RAG or document processing, this is where you start. You don't need to understand linguistics, document structure parsing, or semantic similarity. You just need to count and split. This low barrier to entry is why fixed-size chunking remains the most popular technique despite its limitations.

Now let's move on to our next technique, which addresses some of these semantic blindness issues by respecting sentence boundaries.`
        }
      ]
    },
    {
      id: 'strategy-2',
      title: '2. Sentence-Level Chunking',
      slides: [
        {
          id: 8,
          title: '2. Sentence-Level Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff6464', padding: '30px' }}>
              <GSAPAnimated animation="bounceIn" delay={0.3} duration={0.9}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#2ecc71', marginBottom: '25px' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Advantages
                  <MermaidPopover
                    diagram={`graph LR
    A[Paragraph] -->|Sentence Split| B[Sentence 1]
    A -->|Sentence Split| C[Sentence 2]
    A -->|Sentence Split| D[Sentence 3]
    B -->|Complete Thought| E[High Precision]
    C -->|Complete Thought| E
    D -->|Complete Thought| E
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784
    style E fill:#ffd700`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.14} duration={0.7}>
                <div><li>Coherent atomic units; good for precision</li></div>
                <div><li>Preserves natural language boundaries</li></div>
                <div><li>Avoids cutting mid-sentence</li></div>
                <div><li>Each chunk has clear semantic meaning</li></div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#651c1c',
          notes: `### 8. Sentence-Level Chunking - Pros
Let's level up our chunking game! Sentence-level chunking respects the fundamental building blocks of language, and that brings some serious advantages.

#### Coherent Atomic Units
Sentence-level chunking gives you **coherent atomic units**. Each chunk is a complete thought or idea, which is fantastic for **precision**. Think about it: when you search for "how do I reset my password," you want the exact sentence that explains the process, not half a sentence that got cut off mid-thought. Sentences are the smallest units of complete meaning in language, so chunking by sentences ensures each retrievable piece actually makes sense on its own.

#### Respecting Natural Language
This approach **preserves natural language boundaries**. Unlike fixed-size chunking that treats text as a stream of tokens, sentence-level chunking respects how humans actually write and organize thoughts. Writers deliberately end sentences at meaningful points – that's what a period means! By honoring these boundaries, you're working with the natural structure of language rather than fighting against it.

#### No More Awkward Cuts
You **avoid cutting mid-sentence**, which is a huge quality-of-life improvement for retrieval. Imagine retrieving "The API endpoint is located at https://api.exam" – that's useless! With sentence-level chunking, you get complete sentences like "The API endpoint is located at https://api.example.com/v1/users." The full information is preserved.

#### Clear Semantic Meaning
**Each chunk has clear semantic meaning**. When a user retrieves a chunk, they get a complete idea. This is especially powerful for QA systems where you want to show exact answers. A sentence like "The company was founded in 2015" is perfect – it's a complete fact that can stand alone without additional context.

This semantic integrity makes sentence-level chunking excellent for applications where precision matters more than broad context.`
        },
        {
          id: 9,
          title: '2. Sentence-Level Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff6464', padding: '30px' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.2} duration={0.8}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e74c3c', marginBottom: '25px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Disadvantages
                  <MermaidPopover
                    diagram={`graph TD
    A[Document] --> B[Short Sentence<br/>10 tokens]
    A --> C[Medium Sentence<br/>40 tokens]
    A --> D[Long Sentence<br/>120 tokens]
    B --> E[Uneven Sizes]
    C --> E
    D --> E
    E --> F[Batching Issues]
    style A fill:#4fc3f7
    style B fill:#ffcdd2
    style C fill:#ffd700
    style D fill:#ffcdd2
    style E fill:#e74c3c
    style F fill:#e74c3c`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.13} duration={0.7}>
                <div><li>Uneven sizes; may be too granular</li></div>
                <div><li>Short chunks might lack broader context</li></div>
                <div><li>Variable token counts complicate batching</li></div>
                <div><li>Requires sentence boundary detection</li></div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#651c1c',
          notes: `### 9. Sentence-Level Chunking - Cons
But sentence-level chunking isn't perfect. Let's talk about where this approach struggles.

#### The Uneven Size Problem
Sentences have **uneven sizes**. Some sentences are short: "It works." That's just two tokens! Other sentences are complex and long: "The system processes the incoming requests by first validating the authentication headers, then parsing the JSON payload, and finally executing the appropriate database queries based on the request type." That's 30+ tokens. This variability creates challenges for embedding models that work best with consistent input lengths.

The chunks **may be too granular**. A single sentence often doesn't contain enough information to be useful in isolation. For example, "See Table 3 for details" is a complete sentence, but it's meaningless without the broader context of what Table 3 shows. You end up with lots of tiny, not-very-useful chunks.

#### Context Loss
**Short chunks might lack broader context**. Imagine a technical document where one sentence says "The timeout is 30 seconds." Without the surrounding context about *what* has a 30-second timeout, this chunk is nearly useless for retrieval. Users need the full picture, not isolated facts.

#### Practical Complications
**Variable token counts complicate batching**. When you're processing thousands of chunks for embedding, having wildly different sizes makes batching inefficient. You either pad everything to the longest length (wasting compute) or use dynamic batching (adding complexity).

#### Implementation Complexity
You **need sentence boundary detection**, which sounds simple but isn't always. Consider: "Dr. Smith works at example.com. She started in Jan. 2023." Where do sentences end? After "com."? After "Jan."? You need proper NLP tools like spaCy or NLTK, which adds dependencies and processing overhead compared to simple character-based splitting.

Despite these challenges, sentence-level chunking remains valuable when precision matters more than broad context – you just need to be aware of its limitations.`
        },
        {
          id: 10,
          title: '2. Sentence-Level Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff6464', padding: '30px' }}>
              <GSAPAnimated animation="rotateIn" delay={0.2} duration={0.9}>
                <h3 style={{ color: '#2ecc71', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-ruler" sizeName="1x" />
                  Best Chunk Size
                  <MermaidPopover
                    diagram={`graph LR
    A[Chunking Strategy] -->|1 sentence| B[Very Granular<br/>~30 tokens]
    A -->|2 sentences| C[Balanced<br/>~60 tokens]
    A -->|3 sentences| D[Good Context<br/>~90 tokens]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#81c784
    style D fill:#81c784`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.5} duration={0.6}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>1–3 sentences (~50–150 tokens)</li>
                  <li>Depends on sentence complexity and domain</li>
                </ul>
              </GSAPAnimated>
              <GSAPAnimated animation="rotateIn" delay={0.8} duration={0.9}>
                <h3 style={{ color: '#f39c12', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-link" sizeName="1x" />
                  Overlap Size
                  <MermaidPopover
                    diagram={`graph LR
    A[Sentence 1 + 2] -.->|Optional overlap| B[Sentence 2 + 3]
    B -.->|Optional overlap| C[Sentence 3 + 4]
    style A fill:#81c784
    style B fill:#81c784
    style C fill:#81c784`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.1} duration={0.6}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>Optional 1 sentence</li>
                  <li>Often unnecessary as sentences form natural boundaries</li>
                </ul>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={1.4} duration={0.7}>
                <h3 style={{ color: '#e74c3c', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-gauge" sizeName="1x" />
                  Computational Cost
                </h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.6} duration={0.6}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                  <li>Medium (requires sentence segmentation processing)</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#651c1c',
          notes: `### 10. Sentence-Level Chunking - Configuration
Let's get into the specifics of configuring sentence-level chunking for optimal results.

#### Finding the Right Sentence Count
For **chunk size**, we recommend **1 to 3 sentences**, which typically translates to **50 to 150 tokens**. One sentence is very granular – great for pinpoint precision but often lacks context. Three sentences provide better context – the first might introduce a topic, the second provides the main point, and the third offers details or examples. This creates chunks that are self-contained yet informative.

The optimal number **depends on sentence complexity and domain**. In technical documentation with long, detailed sentences, even one sentence might be enough. For chatty blog posts with short, punchy sentences, you'll want to group 3-4 together to get meaningful chunks. Always look at your actual content!

#### To Overlap or Not to Overlap?
**Overlap** is **optional** with sentence-level chunking, typically **1 sentence** if you use it at all. Here's why: sentences are natural boundaries. Unlike fixed-size chunking where you might split mid-thought, sentence boundaries are clean breaks. The information in sentence 1 is complete; sentence 2 starts something new.

That said, **overlap is often unnecessary** because **sentences form natural boundaries**. If your sentences are well-written and self-contained, there's no need to duplicate content. However, if sentences heavily reference each other (like in academic writing with lots of "this shows that" and "furthermore"), a 1-sentence overlap can help preserve that connectivity.

#### Processing Requirements
The **computational cost is Medium**. You need **sentence segmentation processing**, which means running text through NLP libraries like spaCy or NLTK. This is more expensive than simple character counting but still quite fast – we're talking milliseconds per document, not seconds. The main cost is the initial setup and loading of the sentence segmentation model.

These configurations strike a balance between precision and context, making sentence-level chunking practical for real-world applications.`
        },
        {
          id: 11,
          title: '2. Sentence-Level Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff6464', padding: '30px' }}>
              <GSAPAnimated animation="slideInTop" delay={0.2} duration={0.7}>
                <h3 style={{ color: '#3498db', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="1x" />
                  Use Cases / Examples
                  <MermaidPopover
                    diagram={`graph TD
    A[Sentence Chunking] --> B[QA Systems]
    A --> C[Classification]
    A --> D[FAQ Retrieval]
    A --> E[Snippet Search]
    B --> F[Precise Answers]
    C --> F
    D --> F
    E --> F
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784
    style E fill:#81c784
    style F fill:#ffd700`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.1} duration={0.6}>
                <div><li>QA over short facts</li></div>
                <div><li>Classification tasks</li></div>
                <div><li>Snippet retrieval</li></div>
                <div><li>FAQ systems and knowledge bases</li></div>
              </GSAPStaggerList>
              <GSAPAnimated animation="slideInBottom" delay={0.9} duration={0.8}>
                <h3 style={{ color: '#9b59b6', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '25px' }}>
                  <SvgIcon iconName="duo-wrench" sizeName="1x" />
                  Tooling Support
                </h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.11} duration={0.6}>
                <div><li>spaCy sentence segmenter</li></div>
                <div><li>NLTK sent_tokenize</li></div>
                <div><li>Stanza sentence splitter</li></div>
                <div><li>syntok and other sentence tokenizers</li></div>
              </GSAPStaggerList>
              <GSAPAnimated animation="bounceIn" delay={1.4} duration={0.8}>
                <h3 style={{ color: '#1abc9c', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '25px' }}>
                  <SvgIcon iconName="duo-graduation-cap" sizeName="1x" />
                  Complexity Level
                </h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.6} duration={0.6}>
                <p style={{ fontSize: '1.2rem' }}><strong>Beginner–Intermediate</strong> - Simple concept with some NLP preprocessing</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#651c1c',
          notes: `### 11. Sentence-Level Chunking - Use Cases & Tools
When does sentence-level chunking shine, and what tools should you reach for? Let's explore the practical applications.

#### Ideal Use Cases
Sentence-level chunking is perfect for **QA over short facts**. When users ask "When was the company founded?" or "What's the return policy?", they want a specific sentence as the answer. You don't need a whole paragraph – just the one sentence that contains the fact. This is why sentence chunking dominates in fact-based QA systems.

It's also excellent for **classification tasks**. If you're building a system to categorize support tickets or classify document sentiment, individual sentences are often the right granularity. Each sentence expresses one sentiment or topic, making classification more accurate than trying to classify a big mixed chunk.

**Snippet retrieval** is another sweet spot. Think of how Google shows you the exact sentence that matches your query. That's sentence-level retrieval in action. Users see precisely the information they searched for without having to parse through paragraphs.

**FAQ systems and knowledge bases** benefit enormously. FAQs are literally questions paired with answer sentences or short answer groups. Chunking at the sentence level aligns perfectly with this natural structure.

#### Robust Tooling
The **tooling support is mature and battle-tested**. **spaCy's sentence segmenter** is incredibly fast and accurate, handling edge cases like abbreviations and decimal numbers. **NLTK's sent_tokenize** is the classic solution, well-documented and reliable. **Stanza** provides multilingual support with great accuracy. And there are specialized tools like **syntok** that focus specifically on sentence tokenization.

These tools handle the tricky stuff – distinguishing "Dr." from a sentence-ending period, dealing with quotes and parentheses, and respecting language-specific rules.

#### Skill Level Required
The **complexity level is Beginner to Intermediate**. The *concept* is simple – split by sentences. But the *implementation* requires some NLP preprocessing. You need to understand how to integrate spaCy or NLTK, handle their models, and deal with edge cases. Not rocket science, but a step up from simple string splitting.

Next, we'll look at paragraph-level chunking, which gives us even more context while still respecting natural document boundaries.`
        }
      ]
    },
    {
      id: 'strategy-3',
      title: '3. Paragraph-Level Chunking',
      slides: [
        {
          id: 12,
          title: '3. Paragraph-Level Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#68ff95', padding: '30px' }}>
              <GSAPAnimated animation="slideInBottom" delay={0.2} duration={0.8}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#2ecc71', marginBottom: '25px' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Advantages
                  <MermaidPopover
                    diagram={`graph LR
    A[Document] -->|Natural Breaks| B[Paragraph 1<br/>Complete Topic]
    A -->|Natural Breaks| C[Paragraph 2<br/>Complete Topic]
    A -->|Natural Breaks| D[Paragraph 3<br/>Complete Topic]
    B --> E[Coherent Context]
    C --> E
    D --> E
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784
    style E fill:#ffd700`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.16} duration={0.7}>
                <div><li>Natural units; preserves local context</li></div>
                <div><li>Respects author-defined text boundaries</li></div>
                <div><li>Maintains topical coherence within paragraphs</li></div>
                <div><li>Simpler implementation than semantic methods</li></div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1c6532',
          notes: `### 12. Paragraph-Level Chunking - Pros
Now we're getting into chunks with real substance! Paragraph-level chunking strikes a sweet balance between granularity and context. Let's explore why it works so well.

#### Natural Units of Thought
Paragraphs are **natural units** in writing. When an author creates a paragraph, they're deliberately grouping related sentences around a single topic or idea. This is intentional structure! By chunking at the paragraph level, you **preserve local context** – all the sentences that the author believed belonged together stay together. It's like keeping family members in the same room instead of scattering them randomly.

#### Respecting the Author's Intent
This approach **respects author-defined text boundaries**. Writers use paragraph breaks to signal "this is one cohesive thought, and now I'm moving to the next thought." That's valuable semantic information! Unlike fixed-size chunking that ignores these signals, paragraph chunking honors them. You're working with the document's natural grain instead of cutting against it.

#### Topic Coherence
Paragraphs **maintain topical coherence**. A well-written paragraph discusses one main idea with supporting details. When you retrieve that paragraph, you get the complete thought: the claim, the evidence, the examples, and the conclusion all in one chunk. This is far more useful than retrieving half a thought from one chunk and the other half from another.

For instance, a paragraph about "How to configure SSL certificates" will contain the complete mini-guide: why it matters, what you need, the steps, and common pitfalls. Everything related stays together.

#### Implementation Simplicity
Here's a bonus: it's **simpler to implement than semantic methods**. You don't need machine learning models or complex embeddings. Just split on double newlines or paragraph markers. It's almost as simple as fixed-size chunking but with much better semantic respect. You get 80% of the benefit of semantic chunking with 20% of the complexity.

This makes paragraph-level chunking the sweet spot for many real-world applications, especially when working with well-formatted documents.`
        },
        {
          id: 13,
          title: '3. Paragraph-Level Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#68ff95', padding: '30px' }}>
              <GSAPAnimated animation="flipCard" delay={0.3} duration={1.0}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e74c3c', marginBottom: '25px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Disadvantages
                  <MermaidPopover
                    diagram={`graph TD
    A[Document] --> B[Short Para<br/>50 tokens]
    A --> C[Medium Para<br/>200 tokens]
    A --> D[Long Para<br/>800 tokens]
    A --> E[No Para<br/>Breaks]
    B --> F[Uneven Quality]
    C --> F
    D --> F
    E --> F
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#81c784
    style D fill:#ffcdd2
    style E fill:#e74c3c
    style F fill:#e74c3c`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.14} duration={0.7}>
                <div><li>Paragraphs can be long or inconsistent</li></div>
                <div><li>Document formatting affects quality</li></div>
                <div><li>May create uneven chunk sizes</li></div>
                <div><li>Doesn't work well for documents without clear paragraphs</li></div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1c6532',
          notes: `### 13. Paragraph-Level Chunking - Cons
Paragraph-level chunking has some real limitations you need to be aware of. Let's be honest about where this approach falls short.

#### The Inconsistency Problem
**Paragraphs can be long or inconsistent**. Some authors write tight, focused paragraphs of 3-4 sentences. Others write sprawling paragraphs that go on for half a page, covering multiple sub-topics. In academic writing, you might see single-sentence paragraphs for emphasis. In blog posts, paragraphs might be massive walls of text. This inconsistency means your chunks will have wildly varying sizes – some might be 50 tokens, others 800 tokens. That creates the same problems we saw with sentence-level chunking, but amplified.

#### Garbage In, Garbage Out
**Document formatting affects quality** dramatically. If your source document has proper paragraph breaks, great! But if you're working with a scraped web page that never uses paragraph tags, or a PDF where the extraction merged everything into one giant block, you're in trouble. A badly formatted document might have zero paragraph breaks, or paragraph breaks in weird places that don't reflect semantic boundaries. Your chunking quality is entirely dependent on the author's formatting discipline.

#### Uneven Chunks
This approach **may create uneven chunk sizes**. A paragraph could be 3 sentences or 20 sentences. When you embed these for retrieval, the short paragraphs might lack sufficient context while the long ones might dilute key information. Your embedding model might struggle with the inconsistency. Some chunks will be dense with information; others will be sparse.

#### Structure Dependency
Here's the dealbreaker for many use cases: it **doesn't work well for documents without clear paragraphs**. What about code documentation that's structured as bullet lists? What about chat logs, which have no paragraphs at all? What about structured data like tables or JSON? Paragraph-level chunking simply doesn't apply. You need documents that follow traditional prose structure with clear paragraph delineation.

Despite these limitations, when you *do* have well-formatted prose documents, paragraph-level chunking is often the right choice – you just can't use it everywhere.`
        },
        {
          id: 14,
          title: '3. Paragraph-Level Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#68ff95', padding: '30px' }}>
              <GSAPAnimated animation="slideInRight" delay={0.2} duration={0.8}>
                <h3 style={{ color: '#2ecc71', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-ruler" sizeName="1x" />
                  Best Chunk Size
                  <MermaidPopover
                    diagram={`graph TD
    A[Paragraph Size] -->|Target Range| B[150-400 tokens]
    B --> C[Blog Posts:<br/>~200 tokens]
    B --> D[Technical Docs:<br/>~300 tokens]
    B --> E[Academic:<br/>~350 tokens]
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#ffd700
    style D fill:#ffd700
    style E fill:#ffd700`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.5} duration={0.6}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>150–400 tokens (paragraph-bound)</li>
                  <li>Size varies based on document formatting</li>
                </ul>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.8} duration={0.8}>
                <h3 style={{ color: '#f39c12', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-link" sizeName="1x" />
                  Overlap Size
                  <MermaidPopover
                    diagram={`graph LR
    A[Paragraph 1] -->|Clean Break| B[Paragraph 2]
    B -->|Clean Break| C[Paragraph 3]
    A -.->|Optional 1 sent| B
    B -.->|Optional 1 sent| C
    style A fill:#81c784
    style B fill:#81c784
    style C fill:#81c784`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.1} duration={0.6}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>0–1 sentence</li>
                  <li>Minimal overlap needed as paragraphs are natural breaks</li>
                </ul>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={1.4} duration={0.7}>
                <h3 style={{ color: '#e74c3c', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-gauge" sizeName="1x" />
                  Computational Cost
                </h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.6} duration={0.6}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                  <li>Low (simple implementation and minimal processing)</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1c6532',
          notes: `### 14. Paragraph-Level Chunking - Configuration
Let's configure paragraph-level chunking for optimal results. The settings here are more flexible than you might expect because paragraphs themselves are variable.

#### Paragraph Size Sweet Spot
For **chunk size**, we're looking at **150 to 400 tokens**, but here's the key: it's **paragraph-bound**. You're not cutting mid-paragraph to hit a token limit – you take the whole paragraph as-is. This means your actual chunk sizes will vary based on how the author wrote.

In practice, **size varies based on document formatting**. Blog posts tend toward shorter paragraphs (150-200 tokens) for readability. Technical documentation might have denser paragraphs (250-350 tokens) with lots of specific details. Academic papers often have substantial paragraphs (300-400 tokens) that develop complex arguments. You're accepting this variability as a trade-off for maintaining semantic coherence.

If a paragraph exceeds 400 tokens, you have a decision to make: split it using sentence boundaries, or accept the larger chunk. Many implementations set a maximum and fall back to sentence splitting for oversized paragraphs.

#### Minimal Overlap Requirements
**Overlap** is typically **0 to 1 sentence**. Why so minimal? Because **paragraphs are natural breaks**. When an author starts a new paragraph, they're explicitly signaling a topic shift or a new aspect of the discussion. There's usually a clean semantic boundary there, so overlap provides less value than it does with fixed-size chunking.

That said, a **1-sentence overlap** can help when paragraphs are tightly connected. For example, if paragraph 2 opens with "This approach solves that problem," having the last sentence of paragraph 1 in the overlap provides helpful context about "that problem." But it's optional – many successful implementations use zero overlap.

#### Processing Overhead
The **computational cost is Low**. You're essentially splitting on double newlines (\\n\\n) or paragraph markers in HTML/Markdown. No NLP models, no complex parsing – just string operations. It's barely more expensive than fixed-size chunking. You can process thousands of documents per second on modest hardware.

This simplicity combined with semantic awareness makes paragraph chunking a go-to choice for well-formatted documents.`
        },
        {
          id: 15,
          title: '3. Paragraph-Level Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#68ff95', padding: '30px' }}>
              <GSAPAnimated animation="rotateIn" delay={0.2} duration={0.9}>
                <h3 style={{ color: '#3498db', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="1x" />
                  Use Cases / Examples
                  <MermaidPopover
                    diagram={`graph TD
    A[Paragraph Chunking] --> B[Blog Posts]
    A --> C[Reports]
    A --> D[Articles]
    A --> E[Documentation]
    B --> F[Rich Context<br/>Retrieval]
    C --> F
    D --> F
    E --> F
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784
    style E fill:#81c784
    style F fill:#ffd700`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.11} duration={0.6}>
                <div><li>Blogs, reports, knowledge articles</li></div>
                <div><li>Well-structured documents</li></div>
                <div><li>Content with clear paragraph delineation</li></div>
                <div><li>Articles and essays</li></div>
              </GSAPStaggerList>
              <GSAPAnimated animation="slideInLeft" delay={0.9} duration={0.8}>
                <h3 style={{ color: '#9b59b6', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '25px' }}>
                  <SvgIcon iconName="duo-wrench" sizeName="1x" />
                  Tooling Support
                </h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.1} duration={0.6}>
                <div><li>Markdown/HTML splitters</li></div>
                <div><li>Regex/newline heuristics</li></div>
                <div><li>Common text processing libraries</li></div>
                <div><li>Simple string split on double newlines</li></div>
              </GSAPStaggerList>
              <GSAPAnimated animation="bounceIn" delay={1.5} duration={0.8}>
                <h3 style={{ color: '#1abc9c', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '25px' }}>
                  <SvgIcon iconName="duo-graduation-cap" sizeName="1x" />
                  Complexity Level
                </h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.7} duration={0.6}>
                <p style={{ fontSize: '1.2rem' }}><strong>Beginner</strong> - Simple implementation with minimal expertise required</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1c6532',
          notes: `### 15. Paragraph-Level Chunking - Use Cases & Tools
Where does paragraph-level chunking excel in real-world applications, and how do you implement it? Let's get practical.

#### Perfect Use Cases
Paragraph-level chunking is tailor-made for **blogs, reports, and knowledge articles**. These content types naturally organize information into paragraphs where each paragraph explores one aspect of a topic. When a user searches your blog for "how to optimize database queries," you can return the exact paragraph that explains indexing strategies, complete with context and examples.

**Well-structured documents** are ideal. Think of documentation sites, corporate reports, or product manuals where writers follow clear formatting guidelines. Each paragraph is a self-contained unit that makes sense on its own while contributing to the larger narrative. This structure aligns perfectly with paragraph-level chunking.

**Content with clear paragraph delineation** – whether it's **articles and essays** or editorial content – benefits enormously. Writers in these formats use paragraphs intentionally to guide readers through ideas. By respecting those boundaries, you preserve the author's intended information architecture.

#### Simple and Universal Tooling
The **tooling support is wonderfully simple**. Got a Markdown file? Use a **Markdown splitter** that breaks on double newlines. Working with HTML? Parse it and split on <p> tags with an **HTML splitter**. For plain text, you can use **regex or newline heuristics** – literally just text.split('\\n\\n') in many cases.

**Common text processing libraries** in every language support this. Python's built-in string methods work great. You don't need specialized NLP libraries or external services. A **simple string split on double newlines** is often sufficient for 80% of use cases. For more robust parsing, libraries like BeautifulSoup for HTML or markdown parsers provide clean paragraph extraction.

#### Beginner-Friendly
The **complexity level is Beginner**. If you can split a string, you can implement paragraph-level chunking. There's no machine learning, no model training, no complex configuration. Write 5 lines of code and you're done. This makes it perfect for MVPs, prototypes, or situations where you need something working immediately.

Next, we'll explore recursive character text splitting, which combines the simplicity of character-based chunking with smarter boundary detection.`
        }
      ]
    },
    {
      id: 'strategy-4',
      title: '4. Recursive Character Text Splitting',
      slides: [
        {
          id: 16,
          title: '4. Recursive Character Text Splitting - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#8db7ff', padding: '30px' }}>
              <GSAPAnimated animation="slideInTop" delay={0.2} duration={0.8}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#2ecc71', marginBottom: '25px' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Advantages
                  <MermaidPopover
                    diagram={`graph TD
    A[Text] -->|Try \\n\\n| B{Fits Size?}
    B -->|Yes| C[Split on \\n\\n]
    B -->|No| D[Try \\n]
    D -->|Fits?| E[Split on \\n]
    D -->|No| F[Try Space]
    F -->|Fits?| G[Split on Space]
    F -->|No| H[Char Split]
    C --> I[Smart Chunks]
    E --> I
    G --> I
    H --> I
    style A fill:#4fc3f7
    style B fill:#ffd700
    style D fill:#ffd700
    style F fill:#ffd700
    style I fill:#81c784`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.7}>
                <div><li>Smart fallback separators (\n\n, \n, space, char)</li></div>
                <div><li>Balances size vs structure preservation</li></div>
                <div><li>Better respects text boundaries than fixed-size</li></div>
                <div><li>More natural chunks than character-only splitting</li></div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1c3765',
          notes: `### 16. Recursive Character Text Splitting - Pros
Now we're getting clever! Recursive character text splitting is like fixed-size chunking with a brain. Let me explain why it's so popular.

#### Smart Fallback Strategy
The magic is in the **smart fallback separators**. The algorithm tries to split on **double newlines** (paragraphs) first. If that creates chunks too large or too small, it falls back to **single newlines** (sentence endings or line breaks). Still not right? Try **spaces** (word boundaries). As a last resort, split by **characters**. This hierarchy of separators means you're always trying to split at the most natural boundary possible for the target chunk size.

Think of it like cutting a cake: you'd prefer to cut along the frosting lines (paragraphs), but if the pieces would be too big, you cut smaller portions at natural points (sentences), and only if absolutely necessary do you cut through the middle of a decoration (mid-word).

#### The Best of Both Worlds
This approach **balances size vs structure preservation**. You get the predictability of fixed-size chunks – every chunk is roughly the same size – but with much better respect for text structure. You're not blindly counting tokens and cutting; you're looking for natural breaking points within your target size range. It's like smart rounding: you want chunks near 500 tokens, but you'll take 480 or 520 if it means splitting at a paragraph break instead of mid-sentence.

#### Structure Awareness
It **better respects text boundaries than fixed-size** chunking. When possible, it keeps paragraphs together. When paragraphs are too large, it keeps sentences together. When sentences are too large, it keeps words together. Only when absolutely necessary does it split awkwardly. This means the vast majority of your chunks will have clean, natural boundaries.

#### Natural Reading Experience
The result is **more natural chunks than character-only splitting**. When a user retrieves a chunk, it reads like an excerpt, not like random text that got chopped mid-thought. This improves both the AI's ability to understand the chunk and the end user's experience when they see the retrieved content.

Recursive splitting gives you production-ready chunking that works well across diverse content types without manual tuning.`
        },
        {
          id: 17,
          title: '4. Recursive Character Text Splitting - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#8db7ff', padding: '30px' }}>
              <GSAPAnimated animation="flipCard" delay={0.3} duration={1.0}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e74c3c', marginBottom: '25px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Disadvantages
                  <MermaidPopover
                    diagram={`graph TD
    A[Recursive Split] -->|Rule-Based| B[No Semantic<br/>Understanding]
    A -->|Separator Order| C[Tuning Needed]
    A -->|Structure Blind| D[Ignores Headers]
    B --> E[Limited Quality]
    C --> E
    D --> E
    style A fill:#4fc3f7
    style B fill:#ffcdd2
    style C fill:#ffcdd2
    style D fill:#ffcdd2
    style E fill:#e74c3c`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.16} duration={0.7}>
                <div><li>Still rule-based; semantics not guaranteed</li></div>
                <div><li>Requires tuning separator hierarchy</li></div>
                <div><li>May produce uneven chunk sizes</li></div>
                <div><li>No awareness of document structure or headings</li></div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1c3765',
          notes: `### 17. Recursive Character Text Splitting - Cons
Even with its cleverness, recursive character splitting has limitations. Let's be clear about what it *can't* do.

#### Still Just Rules
It's **still rule-based**, which means **semantics are not guaranteed**. The algorithm doesn't understand meaning. It doesn't know that "Chapter 3: Security Best Practices" should stay with the content below it. It doesn't realize that splitting between "The API returns a 200 status code" and "when the request succeeds" breaks a logical thought into two pieces. It's just looking for newlines and spaces – it has zero comprehension of what the text means.

Think of it like organizing books by size rather than by topic. Sure, you can fit them neatly on the shelf, but you might separate volumes of the same series.

#### Tuning Overhead
You need to **tune the separator hierarchy** for your specific content. The default order (\\n\\n, \\n, space, character) works well for prose, but what if you're chunking code? You might want to prioritize different separators. What if you're processing poetry where single newlines are meaningful? You'll need to adjust. This tuning isn't terribly complex, but it's not zero-effort either. Different document types may need different separator strategies.

#### Size Inconsistency
It **may produce uneven chunk sizes**. While it aims for a target size, the actual chunks can vary significantly based on where natural break points occur. If there's no paragraph break within your target range, you might get a 600-token chunk followed by a 300-token chunk. This is often acceptable, but if you need strict size consistency (like for batching embedding calls efficiently), this variability can be problematic.

#### Structure Blindness
Crucially, there's **no awareness of document structure or headings**. The splitter doesn't know that "### Installation" is a heading that signals a new section. It doesn't understand that a bulleted list should stay together. It doesn't recognize that a code block or table should remain intact. It treats everything as flat text with newlines and spaces. For documents with rich structure – technical docs with lots of headings, tables, and code – this blindness can lead to awkward splits.

Despite these limitations, recursive character splitting is often the "good enough" solution that beats simple fixed-size chunking without requiring the complexity of truly semantic approaches.`
        },
        {
          id: 18,
          title: '4. Recursive Character Text Splitting - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#8db7ff', padding: '30px' }}>
              <GSAPAnimated animation="bounceIn" delay={0.3} duration={0.9}>
                <h3 style={{ color: '#2ecc71', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-ruler" sizeName="1x" />
                  Best Chunk Size
                  <MermaidPopover
                    diagram={`graph LR
    A[Target Size] -->|Small Docs| B[400 tokens]
    A -->|Typical| C[600 tokens]
    A -->|Large Context| D[800 tokens]
    B --> E[More Chunks]
    C --> F[Balanced]
    D --> G[Fewer Chunks]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#81c784
    style D fill:#ffd700
    style F fill:#81c784`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6} duration={0.6}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>400–800 tokens (typical)</li>
                  <li>Depends on document structure and separator frequency</li>
                </ul>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.9} duration={0.9}>
                <h3 style={{ color: '#f39c12', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-link" sizeName="1x" />
                  Overlap Size
                  <MermaidPopover
                    diagram={`graph TD
    A[Chunk Size] -->|10% overlap| B[50 tokens]
    A -->|15% overlap| C[90 tokens]
    A -->|20% overlap| D[150 tokens]
    B --> E[Minimal Context]
    C --> F[Good Balance]
    D --> G[Maximum Context]
    style A fill:#4fc3f7
    style F fill:#81c784
    style B fill:#ffd700
    style G fill:#ffd700`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.2} duration={0.6}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>50–150 tokens</li>
                  <li>Higher overlap (20%) for complex content with many separators</li>
                </ul>
              </GSAPAnimated>
              <GSAPAnimated animation="rotateIn" delay={1.5} duration={0.8}>
                <h3 style={{ color: '#e74c3c', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-gauge" sizeName="1x" />
                  Computational Cost
                </h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.7} duration={0.6}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                  <li>Low (simple string operations, slightly more than fixed-size)</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1c3765',
          notes: `### 18. Recursive Character Text Splitting - Configuration
Let's configure recursive character splitting for optimal performance. The settings here are flexible but important.

#### Choosing Your Target Chunk Size
For **chunk size**, we're looking at **400 to 800 tokens** typically. This is larger than sentence or paragraph chunking because the recursive approach gives you more control – you can afford larger targets knowing the algorithm will find natural breaks within that range. Start with **600 tokens** as a reasonable default that works well for most embedding models.

The optimal size **depends on document structure and separator frequency**. If your documents have frequent paragraph breaks (like blog posts), you can use larger targets because the algorithm will find lots of breaking points. If you're working with dense technical prose that has fewer natural breaks, you might need smaller targets to ensure chunks don't grow too large. Always evaluate with your actual documents!

#### Overlap for Context Preservation
**Overlap size** should be **50 to 150 tokens**, which typically means **10 to 20 percent** of your chunk size. This is similar to fixed-size chunking, but there's a nuance: use **higher overlap around 20 percent** when working with **complex content that has many separators**. Why? Because the recursive algorithm might split at different levels (paragraph vs sentence vs word), and more overlap ensures context is preserved across these varying boundary types.

For example, with a 600-token target and 120-token overlap (20%), you ensure that information near chunk boundaries is captured in both adjacent chunks, regardless of whether you split on a paragraph or sentence boundary.

#### Processing Efficiency
The **computational cost is Low**. You're doing **simple string operations** – checking for separators and splitting. It's **slightly more than fixed-size** chunking because you're checking multiple separator types, but we're talking microseconds difference per chunk. The recursive logic adds negligible overhead. You can still process millions of documents efficiently.

These configurations give you a robust, general-purpose chunking strategy that works well across diverse document types without specialized tuning.`
        },
        {
          id: 19,
          title: '4. Recursive Character Text Splitting - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#8db7ff', padding: '30px' }}>
              <GSAPAnimated animation="scaleIn" delay={0.2} duration={0.8}>
                <h3 style={{ color: '#3498db', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="1x" />
                  Use Cases / Examples
                  <MermaidPopover
                    diagram={`graph TD
    A[Recursive Split] --> B[Mixed Docs]
    A --> C[PDF Extracts]
    A --> D[Varying Structure]
    A --> E[General Purpose]
    B --> F[Robust<br/>Chunking]
    C --> F
    D --> F
    E --> F
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784
    style E fill:#81c784
    style F fill:#ffd700`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.6}>
                <div><li>Mixed formatting documents</li></div>
                <div><li>PDFs post-extraction</li></div>
                <div><li>Text with varying structure</li></div>
                <div><li>General-purpose chunking baseline</li></div>
              </GSAPStaggerList>
              <GSAPAnimated animation="slideInRight" delay={0.9} duration={0.8}>
                <h3 style={{ color: '#9b59b6', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '25px' }}>
                  <SvgIcon iconName="duo-wrench" sizeName="1x" />
                  Tooling Support
                </h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.1} duration={0.6}>
                <div><li>LangChain RecursiveCharacterTextSplitter</li></div>
                <div><li>n8n integration nodes</li></div>
                <div><li>Snowflake SPLIT_TEXT_RECURSIVE_CHARACTER</li></div>
                <div><li>Easy to implement custom in any language</li></div>
              </GSAPStaggerList>
              <GSAPAnimated animation="rotateIn" delay={1.4} duration={0.9}>
                <h3 style={{ color: '#1abc9c', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px', marginTop: '25px' }}>
                  <SvgIcon iconName="duo-graduation-cap" sizeName="1x" />
                  Complexity Level
                </h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.6} duration={0.6}>
                <p style={{ fontSize: '1.2rem' }}><strong>Beginner</strong> - Simple to implement and use with minimal tuning</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1c3765',
          notes: `### 19. Recursive Character Text Splitting - Use Cases & Tools
When should you reach for recursive character splitting, and what makes it so popular in production systems? Let's explore.

#### The Swiss Army Knife of Chunking
Recursive character splitting excels with **mixed formatting documents**. You know those documents that have some paragraphs, some lists, some code blocks, some tables – basically a formatting free-for-all? This is where recursive splitting shines. It adapts to whatever structure it finds, trying to split intelligently regardless of formatting consistency.

It's particularly valuable for **PDFs post-extraction**. After you extract text from a PDF, the formatting is often messy. Paragraph breaks might be inconsistent, tables might be flattened into text, and you might have random line breaks where the PDF had page breaks. Recursive splitting handles this chaos gracefully by trying multiple separator strategies until it finds one that works.

**Text with varying structure** – like concatenated documents from multiple sources, scraped web content, or user-generated content – is another perfect fit. You can't predict the formatting, so you need a technique that adapts. That's recursive splitting's superpower.

It's also the recommended **general-purpose chunking baseline**. If you're unsure which technique to use, start here. It's better than fixed-size for almost all use cases, simpler than semantic approaches, and works reliably across diverse content.

#### Excellent Ecosystem Support
The **tooling support is outstanding**. **LangChain's RecursiveCharacterTextSplitter** is probably the most widely used chunking implementation in the world. It's battle-tested, well-documented, and handles edge cases beautifully. **n8n integration nodes** provide no-code access to this technique. Even **Snowflake** has built it into their database as SPLIT_TEXT_RECURSIVE_CHARACTER – that's how fundamental it is!

And if you need a custom implementation, it's **easy to implement in any language**. The recursive logic is straightforward: try separator A, if chunks are too big try separator B, and so on. You can code it from scratch in an afternoon.

#### Accessibility
The **complexity level is Beginner**. Despite the "recursive" in the name, it's conceptually simple and requires **minimal tuning**. Most implementations work great with default settings. This makes it ideal for teams that want better results than fixed-size chunking without investing in complex NLP pipelines.

Next, we'll look at structure-aware chunking, which takes document understanding to the next level by explicitly parsing document hierarchy.`
        }
      ]
    },
    {
      id: 'strategy-5',
      title: '5. Structure-Aware Chunking',
      slides: [
        {
          id: 20,
          title: '5. Structure-Aware Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#58ff64', padding: '30px' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.2} duration={0.8}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#2ecc71', marginBottom: '25px' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Advantages
                  <MermaidPopover
                    diagram={`graph TD
    A[Document] --> B[# Chapter 1]
    B --> C[## Section 1.1]
    C --> D[Content]
    B --> E[## Section 1.2]
    E --> F[Content]
    D --> G[Hierarchical<br/>Chunks]
    F --> G
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#81c784
    style E fill:#81c784
    style D fill:#81c784
    style F fill:#81c784
    style G fill:#81c784`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.17} duration={0.7}>
                <div><li>Respects headers/sections; better coherence</li></div>
                <div><li>Preserves document structure and hierarchy</li></div>
                <div><li>Keeps related content together logically</li></div>
                <div><li>Maintains semantic integrity of document sections</li></div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1c6521',
          notes: `### 20. Structure-Aware Chunking - Pros
Now we're stepping up to truly intelligent chunking! Structure-aware chunking understands that documents have hierarchy, and that changes everything.

#### Respecting Document Hierarchy
This technique **respects headers and sections**, which means **better coherence**. Think about a technical manual with "Chapter 3: Security" followed by subsections like "3.1 Authentication" and "3.2 Authorization". Structure-aware chunking understands this hierarchy! It knows that the content under "3.1 Authentication" belongs together and should be chunked as a unit. It won't randomly split halfway through the authentication section just because it hit a token limit.

This awareness dramatically improves retrieval quality. When someone searches for "how does authentication work," they get the complete authentication section, not half of authentication mixed with half of authorization.

#### Preserving Hierarchical Relationships
It **preserves document structure and hierarchy**. The chunker understands parent-child relationships. It knows that a level-2 heading belongs under a level-1 heading, and that both should stay contextually connected. Many implementations even include parent headers in child chunks as context. So a chunk about "Configuring SSL" might include "Chapter 5: Network Security → 5.2 Encryption → Configuring SSL" in its metadata or as a prefix. This context is invaluable for retrieval and for users understanding where information fits in the bigger picture.

#### Logical Content Grouping
This approach **keeps related content together logically**. Everything under "Installation Requirements" stays together. All subsections of "API Reference" are grouped appropriately. The document's logical organization – which the author carefully crafted – is preserved in your chunks. This is massive for documentation, reports, academic papers, or any content where structure conveys meaning.

#### Semantic Integrity
Most importantly, it **maintains semantic integrity of document sections**. Each section is typically about one topic or subtopic. By chunking at section boundaries, you ensure each chunk is semantically cohesive. A section on "Error Handling Best Practices" contains a complete, self-contained discussion of that topic. You're not cutting concepts in half or mixing unrelated topics.

Structure-aware chunking transforms your retrieval from "finding text" to "finding coherent information units" – that's the level of quality modern RAG systems need.`
        },
        {
          id: 21,
          title: '5. Structure-Aware Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#58ff64', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Parsing/layout extraction can be brittle</li>
                <li>Requires well-structured documents</li>
                <li>May produce uneven chunk sizes</li>
                <li>Quality depends on document formatting</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6521',
          notes: ''
        },
        {
          id: 22,
          title: '5. Structure-Aware Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#58ff64', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>300–1200 tokens (by section)</li>
                <li>Sizes vary based on document structure and heading levels</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Minimal across sections</li>
                <li>Only necessary to maintain cross-sectional references</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Medium (structure parsing and analysis requirements)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6521',
          notes: ''
        },
        {
          id: 23,
          title: '5. Structure-Aware Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#58ff64', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Manuals, whitepapers, SOWs</li>
                <li>Documentation sites</li>
                <li>Academic papers with clear sections</li>
                <li>Technical reports, legal documents</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Azure Document Layout</li>
                <li>Unstructured.io</li>
                <li>Docling</li>
                <li>LangChain HTML/MD splitters</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Intermediate</strong> - Requires structure parsing knowledge</p>
            </div>
          ),
          backgroundColor: '#1c6521',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-6',
      title: '6. Content-Aware Chunking',
      slides: [
        {
          id: 24,
          title: '6. Content-Aware Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#83ffec', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Heuristics by content type (lists, bullets, code, tables)</li>
                <li>Preserves meaning of special content elements</li>
                <li>Adapts to document formatting patterns</li>
                <li>Better chunk boundaries for mixed content</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c655a',
          notes: ''
        },
        {
          id: 25,
          title: '6. Content-Aware Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#83ffec', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Rules require tuning for different domains</li>
                <li>Domain-specific heuristics needed</li>
                <li>Harder to maintain than simpler methods</li>
                <li>May break on unusual formatting</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c655a',
          notes: ''
        },
        {
          id: 26,
          title: '6. Content-Aware Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#83ffec', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>200–800 tokens (dynamic)</li>
                <li>Varies based on content type and complexity</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>0–15% depending on content type</li>
                <li>More for complex content, less for structured elements</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Medium (implementation complexity and processing requirements)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c655a',
          notes: ''
        },
        {
          id: 27,
          title: '6. Content-Aware Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#83ffec', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Ebooks and technical guides</li>
                <li>Documentation sites and wikis</li>
                <li>Mixed content with lists/tables/code</li>
                <li>Formatting-rich documents</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Custom heuristics (often bespoke)</li>
                <li>Coveo chunking strategies</li>
                <li>Unstructured.io content extractors</li>
                <li>Rule-based custom splitters</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Intermediate</strong> - Requires expertise and domain-specific implementation</p>
            </div>
          ),
          backgroundColor: '#1c655a',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-7',
      title: '7. Semantic Chunking (Embedding-Based)',
      slides: [
        {
          id: 28,
          title: '7. Semantic Chunking (Embedding-Based) - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7b7bff', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Topic-coherent chunks; high retrieval precision</li>
                <li>Better semantic understanding and context preservation</li>
                <li>Groups similar content regardless of physical proximity</li>
                <li>Improved relevance in retrieval results</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c1c65',
          notes: ''
        },
        {
          id: 29,
          title: '7. Semantic Chunking (Embedding-Based) - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7b7bff', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Requires embeddings; adds computation cost</li>
                <li>Tuning similarity thresholds can be challenging</li>
                <li>Quality depends on embedding model choice</li>
                <li>More implementation complexity than fixed methods</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c1c65',
          notes: ''
        },
        {
          id: 30,
          title: '7. Semantic Chunking (Embedding-Based) - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7b7bff', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>200–600 tokens per semantic unit</li>
                <li>Varies based on topic cohesion and content density</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>0–10% (minimal overlap needed)</li>
                <li>Semantic boundaries reduce need for significant overlap</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Medium–High (embedding generation and similarity calculations add overhead)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c1c65',
          notes: ''
        },
        {
          id: 31,
          title: '7. Semantic Chunking (Embedding-Based) - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7b7bff', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Multi-topic documents and research papers</li>
                <li>Knowledge bases with diverse content</li>
                <li>Product documentation libraries</li>
                <li>When retrieval precision is critical</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Sentence-transformers library</li>
                <li>Pinecone examples and guides</li>
                <li>Superlinked VectorHub</li>
                <li>LlamaIndex SemanticSplitter</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Intermediate–Advanced</strong> - Requires understanding of embeddings and similarity thresholds</p>
            </div>
          ),
          backgroundColor: '#1c1c65',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-8',
      title: '8. TextTiling',
      slides: [
        {
          id: 32,
          title: '8. TextTiling - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff6eef', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Topic segmentation via cohesion drops; classic, explainable</li>
                <li>Finds natural topic boundaries in text</li>
                <li>Good for documents with distinct topic shifts</li>
                <li>Based on linguistic principles of lexical cohesion</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c5d',
          notes: ''
        },
        {
          id: 33,
          title: '8. TextTiling - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff6eef', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Sensitive to parameters; domain variance</li>
                <li>Can struggle with gradual topic transitions</li>
                <li>Requires preprocessing and tuning</li>
                <li>Performance varies with text style and genre</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c5d',
          notes: ''
        },
        {
          id: 34,
          title: '8. TextTiling - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff6eef', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Variable by tile/window (often 200–800 tokens)</li>
                <li>Based on topic boundaries, not fixed size</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>None</li>
                <li>Algorithm itself handles transitions between topics</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Medium (requires lexical cohesion calculations across text segments)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c5d',
          notes: ''
        },
        {
          id: 35,
          title: '8. TextTiling - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff6eef', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Articles, transcripts with topic shifts</li>
                <li>Academic papers, technical documentation</li>
                <li>Long-form content with distinct sections</li>
                <li>Multi-topic document segmentation</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>NLTK-style implementations</li>
                <li>Open-source repos (DeepTiling)</li>
                <li>Custom Python implementations</li>
                <li>Research-oriented NLP libraries</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Intermediate</strong> - Requires understanding of lexical cohesion and parameter tuning</p>
            </div>
          ),
          backgroundColor: '#651c5d',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-9',
      title: '9. Discourse / RST Chunking',
      slides: [
        {
          id: 36,
          title: '9. Discourse / RST Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#63ffae', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Uses discourse units (EDUs) and relations for high fidelity semantics</li>
                <li>Captures rhetorical structure and text organization</li>
                <li>Preserves argumentative flow and logical connections</li>
                <li>Excellent for long-form content comprehension</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c653f',
          notes: ''
        },
        {
          id: 37,
          title: '9. Discourse / RST Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#63ffae', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Parsers are computationally heavy</li>
                <li>Not turnkey; requires specialized knowledge</li>
                <li>Lower throughput than simpler methods</li>
                <li>Limited availability of production-ready tools</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c653f',
          notes: ''
        },
        {
          id: 38,
          title: '9. Discourse / RST Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#63ffae', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Combine Elementary Discourse Units (EDUs) to ~150–400 tokens</li>
                <li>Size based on discourse relation boundaries, not fixed counts</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>None by default (discourse boundaries are respected)</li>
                <li>Optional minimal overlap when coherence requires it</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>High (implementation complexity and heavy processing requirements)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c653f',
          notes: ''
        },
        {
          id: 39,
          title: '9. Discourse / RST Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#63ffae', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Long-form question answering</li>
                <li>Summarization grounding</li>
                <li>Academic papers and legal documents</li>
                <li>Complex reasoning over structured arguments</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Research-grade RST parsers</li>
                <li>Discourse segmentation toolkits</li>
                <li>Custom NLP pipelines</li>
                <li>Academic libraries (e.g., NLTK-RST)</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Advanced</strong> - Requires specialized expertise and implementation difficulty</p>
            </div>
          ),
          backgroundColor: '#1c653f',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-10',
      title: '10. Token-Aware Chunking',
      slides: [
        {
          id: 40,
          title: '10. Token-Aware Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#eeff82', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Honors tokenizer limits; predictable fit</li>
                <li>Avoids truncation by embedding models</li>
                <li>Matches exact token windows of models</li>
                <li>More accurate size estimation than characters</li>
              </ul>
            </div>
          ),
          backgroundColor: '#656a1c',
          notes: ''
        },
        {
          id: 41,
          title: '10. Token-Aware Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#eeff82', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>May split syntax/meaning; tokenizer variance</li>
                <li>Different models tokenize differently</li>
                <li>Requires tokenizer access</li>
                <li>Not aligned with semantic boundaries</li>
              </ul>
            </div>
          ),
          backgroundColor: '#656a1c',
          notes: ''
        },
        {
          id: 42,
          title: '10. Token-Aware Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#eeff82', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>256–1024 tokens (match embedding model)</li>
                <li>Should align with context window of target model</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>10–20% (50–100 tokens typical)</li>
                <li>Helps preserve context across token boundaries</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Low (simple implementation complexity and minimal processing)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#656a1c',
          notes: ''
        },
        {
          id: 43,
          title: '10. Token-Aware Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#eeff82', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Any embedding pipeline; strict window budgets</li>
                <li>When using specific models with token limits</li>
                <li>Cross-model compatibility</li>
                <li>Production RAG systems</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Tiktoken (OpenAI)</li>
                <li>Hugging Face tokenizers</li>
                <li>LangChain Token splitter</li>
                <li>spaCy tokenizers</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Beginner</strong> - Simple implementation with minimal expertise required</p>
            </div>
          ),
          backgroundColor: '#656a1c',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-11',
      title: '11. Heading / Title Anchor Chunking',
      slides: [
        {
          id: 44,
          title: '11. Heading / Title Anchor Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7adcff', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Strong alignment to document navigation; great for docs sites</li>
                <li>Preserves document hierarchy and structure</li>
                <li>Makes retrieval context clearer with heading metadata</li>
                <li>Natural semantic boundaries for content</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c5265',
          notes: ''
        },
        {
          id: 45,
          title: '11. Heading / Title Anchor Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7adcff', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Requires clean headings; won't work for unstructured text</li>
                <li>Uneven chunk sizes based on section length</li>
                <li>Some sections may be too large for context windows</li>
                <li>Different heading styles may cause inconsistencies</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c5265',
          notes: ''
        },
        {
          id: 46,
          title: '11. Heading / Title Anchor Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7adcff', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Section-bounded (200–1200 tokens)</li>
                <li>Varies based on document structure and heading density</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>0–5% between sections</li>
                <li>Sometimes includes parent heading for context</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Low–Medium (implementation complexity and processing requirements)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c5265',
          notes: ''
        },
        {
          id: 47,
          title: '11. Heading / Title Anchor Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7adcff', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Markdown documentation and README files</li>
                <li>API references and technical docs sites</li>
                <li>Knowledge bases with clear structure</li>
                <li>Wikis and developer documentation</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Markdown heading parsers</li>
                <li>GitHub Flavored Markdown (GFM) anchors</li>
                <li>Static site generators (Jekyll, MkDocs)</li>
                <li>LangChain's MarkdownTextSplitter</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Beginner–Intermediate</strong> - Requires basic expertise and implementation</p>
            </div>
          ),
          backgroundColor: '#1c5265',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-12',
      title: '12. Markdown / HTML Structure Chunking',
      slides: [
        {
          id: 48,
          title: '12. Markdown / HTML Structure Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ee77ff', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Preserves lists, code blocks, tables, and other HTML/Markdown elements</li>
                <li>Maintains document structure and hierarchy</li>
                <li>Rich metadata extraction from headings, tags, and attributes</li>
                <li>Natural boundaries align with content meaning</li>
              </ul>
            </div>
          ),
          backgroundColor: '#5c1c65',
          notes: ''
        },
        {
          id: 49,
          title: '12. Markdown / HTML Structure Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ee77ff', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Requires well-structured source documents</li>
                <li>Boilerplate/noise unless filtered</li>
                <li>HTML parsing can be complex/brittle</li>
                <li>Format-specific implementation needed</li>
              </ul>
            </div>
          ),
          backgroundColor: '#5c1c65',
          notes: ''
        },
        {
          id: 50,
          title: '12. Markdown / HTML Structure Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ee77ff', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Element-grouped 300–900 tokens</li>
                <li>Varies by element type (paragraph vs. section)</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>0–10% between elements or sections</li>
                <li>Often header/context overlap</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                <li>Medium (parser overhead and DOM/AST processing requirements)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#5c1c65',
          notes: ''
        },
        {
          id: 51,
          title: '12. Markdown / HTML Structure Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ee77ff', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Web pages, docs portals, blogs</li>
                <li>Markdown documentation repositories</li>
                <li>Technical blogs and wikis</li>
                <li>API documentation</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>BeautifulSoup, jsdom for HTML</li>
                <li>LangChain HTMLTextSplitter</li>
                <li>Markdown parsers (marked, remark)</li>
                <li>Documentation frameworks</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Intermediate</strong> - Requires HTML/Markdown parsing knowledge and structure handling</p>
            </div>
          ),
          backgroundColor: '#5c1c65',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-13',
      title: '13. Table-Aware Chunking',
      slides: [
        {
          id: 52,
          title: '13. Table-Aware Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ffe983', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Extracts tables intact; supports downstream parsing</li>
                <li>Preserves tabular relationships and formats</li>
                <li>Enables structured data retrieval</li>
                <li>Maintains row/column associations</li>
              </ul>
            </div>
          ),
          backgroundColor: '#65581c',
          notes: ''
        },
        {
          id: 53,
          title: '13. Table-Aware Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ffe983', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Extraction quality varies across formats</li>
                <li>Formatting loss risk during conversion</li>
                <li>Complex tables require special handling</li>
                <li>May miss context around tables</li>
              </ul>
            </div>
          ),
          backgroundColor: '#65581c',
          notes: ''
        },
        {
          id: 54,
          title: '13. Table-Aware Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ffe983', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Per table (convert to Markdown/JSON)</li>
                <li>100–500 tokens typical per table</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>0 (tables are typically self-contained units)</li>
                <li>Consider including caption or immediately adjacent text</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Table detection and extraction requires specialized processing</li>
                <li>Medium</li>
              </ul>
            </div>
          ),
          backgroundColor: '#65581c',
          notes: ''
        },
        {
          id: 55,
          title: '13. Table-Aware Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ffe983', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Financial reports with tabular data</li>
                <li>Technical specifications documents</li>
                <li>Benchmarking reports</li>
                <li>Research papers with data tables</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Camelot (for PDF tables)</li>
                <li>Tabula</li>
                <li>pdfplumber</li>
                <li>Unstructured.io</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Intermediate</strong> - Requires table detection and specialized extraction</p>
            </div>
          ),
          backgroundColor: '#65581c',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-14',
      title: '14. Code-Aware Chunking',
      slides: [
        {
          id: 56,
          title: '14. Code-Aware Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7ad0ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Split by function/class/module; preserves semantics</li>
                <li>Maintains code integrity and logical structure</li>
                <li>Keeps related declarations together</li>
                <li>Enhances retrieval relevance for code questions</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c4b65',
          notes: ''
        },
        {
          id: 57,
          title: '14. Code-Aware Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7ad0ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Language-specific tuning required</li>
                <li>Struggles with very long functions</li>
                <li>May miss cross-function relationships</li>
                <li>Parser dependency adds complexity</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c4b65',
          notes: ''
        },
        {
          id: 58,
          title: '14. Code-Aware Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7ad0ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>200–800 tokens or 50–150 LOC</li>
                <li>Function/class-based rather than fixed-size</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Include signature + docstring (20–80 tokens)</li>
                <li>Function headers/imports may need to be included</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Implementation complexity and processing requirements</li>
                <li>Medium</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c4b65',
          notes: ''
        },
        {
          id: 59,
          title: '14. Code-Aware Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7ad0ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Code search and documentation</li>
                <li>RAG on code repositories</li>
                <li>API assistants and guides</li>
                <li>Developer documentation generation</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>LangChain code splitters</li>
                <li>Tree-sitter parsers</li>
                <li>Ripgrep + heuristics</li>
                <li>Language-specific AST parsers</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Intermediate</strong> - Required expertise and implementation difficulty</p>
            </div>
          ),
          backgroundColor: '#1c4b65',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-15',
      title: '15. Windowed Sentence Grouping',
      slides: [
        {
          id: 60,
          title: '15. Windowed Sentence Grouping - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#dc8aff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Sentence-coherent with sliding stride; good balance</li>
                <li>Preserves natural language boundaries</li>
                <li>Better context preservation than fixed-size</li>
                <li>Minimizes sentence fragmentation</li>
              </ul>
            </div>
          ),
          backgroundColor: '#4f1c65',
          notes: ''
        },
        {
          id: 61,
          title: '15. Windowed Sentence Grouping - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#dc8aff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Redundancy; increases storage requirements</li>
                <li>Parameter tuning needed (window/stride size)</li>
                <li>Uneven chunk sizes based on sentence lengths</li>
                <li>Requires sentence boundary detection</li>
              </ul>
            </div>
          ),
          backgroundColor: '#4f1c65',
          notes: ''
        },
        {
          id: 62,
          title: '15. Windowed Sentence Grouping - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#dc8aff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>2–5 sentences (~100–300 tokens)</li>
                <li>Varies based on content complexity and sentence length</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>1–2 sentences</li>
                <li>Stride of 1-2 sentences between window starts</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Requires sentence detection and window management</li>
                <li>Low–Medium</li>
              </ul>
            </div>
          ),
          backgroundColor: '#4f1c65',
          notes: ''
        },
        {
          id: 63,
          title: '15. Windowed Sentence Grouping - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#dc8aff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>News articles</li>
                <li>Product guides and documentation</li>
                <li>Transcripts and conversational content</li>
                <li>Content with natural narrative flow</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>spaCy + custom grouping</li>
                <li>NLTK sentence tokenizers</li>
                <li>Custom implementations</li>
                <li>LangChain extensions and utilities</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Beginner–Intermediate</strong> - Requires sentence boundary detection and window management</p>
            </div>
          ),
          backgroundColor: '#4f1c65',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-16',
      title: '16. Adaptive Length Chunking',
      slides: [
        {
          id: 64,
          title: '16. Adaptive Length Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff8787', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Sizes adapt to complexity/density; token-efficient</li>
                <li>Better context preservation for complex content</li>
                <li>Optimizes for both quality and efficiency</li>
                <li>Can allocate resources where most needed</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c1c',
          notes: ''
        },
        {
          id: 65,
          title: '16. Adaptive Length Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff8787', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Requires good complexity metric; harder to debug</li>
                <li>Parameter tuning can be challenging</li>
                <li>More complex implementation</li>
                <li>Unpredictable storage requirements</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c1c',
          notes: ''
        },
        {
          id: 66,
          title: '16. Adaptive Length Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff8787', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>200–1000 tokens (dynamic)</li>
                <li>Complex content: smaller chunks (200-400 tokens)</li>
                <li>Simple content: larger chunks (600-1000 tokens)</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>5–20% (dynamic)</li>
                <li>Higher overlap for complex content</li>
                <li>Lower overlap for simpler sections</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Requires complexity analysis for each document section</li>
                <li>Medium–High</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c1c',
          notes: ''
        },
        {
          id: 67,
          title: '16. Adaptive Length Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff8787', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Mixed-density documents (e.g., textbooks)</li>
                <li>Technical documentation with varying complexity</li>
                <li>Documents with both narrative and technical sections</li>
                <li>Knowledge bases with heterogeneous content</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Custom heuristics (lexical density, perplexity)</li>
                <li>LangChain custom splitter implementations</li>
                <li>Text complexity analysis libraries</li>
                <li>Advanced text processing frameworks</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Advanced</strong> - Requires expertise in text analysis and complexity metrics</p>
            </div>
          ),
          backgroundColor: '#651c1c',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-17',
      title: '17. Summarization-Based Chunking',
      slides: [
        {
          id: 68,
          title: '17. Summarization-Based Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff7af6', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Adds summaries/context to chunks; boosts recall</li>
                <li>Preserves high-level document meaning</li>
                <li>Improves chunk relevance in long contexts</li>
                <li>Enables retrieval of conceptual connections</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c60',
          notes: ''
        },
        {
          id: 69,
          title: '17. Summarization-Based Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff7af6', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Expensive to generate summaries</li>
                <li>Risk of summary drift or hallucination</li>
                <li>Increases storage requirements</li>
                <li>LLM quality affects summary accuracy</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c60',
          notes: ''
        },
        {
          id: 70,
          title: '17. Summarization-Based Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff7af6', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Base 400–800 tokens + brief summary (50-150 tokens)</li>
                <li>Can be combined with other chunking methods</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>0–10% of base chunk size</li>
                <li>Summary provides cross-chunk context, reducing need for large overlaps</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Requires LLM inference for summary generation</li>
                <li>High</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c60',
          notes: ''
        },
        {
          id: 71,
          title: '17. Summarization-Based Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff7af6', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Very long documents (books, reports)</li>
                <li>Agent memory systems</li>
                <li>Knowledge distillation</li>
                <li>Multi-hop reasoning tasks</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>LLMs (OpenAI, Anthropic, DBRX)</li>
                <li>LangChain map-reduce chains</li>
                <li>LlamaIndex summarization nodes</li>
                <li>Anthropic's contextual retrieval</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Advanced</strong> - Requires LLM prompting expertise and pipeline optimization</p>
            </div>
          ),
          backgroundColor: '#651c60',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-18',
      title: '18. Graph-Based Semantic Chunking',
      slides: [
        {
          id: 72,
          title: '18. Graph-Based Semantic Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#95ff7a', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Community detection over sentence graph creates topic-pure chunks</li>
                <li>Captures complex semantic relationships between sentences</li>
                <li>Produces coherent chunks with high semantic integrity</li>
                <li>Better for multi-topic documents than simple approaches</li>
              </ul>
            </div>
          ),
          backgroundColor: '#2b651c',
          notes: ''
        },
        {
          id: 73,
          title: '18. Graph-Based Semantic Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#95ff7a', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Complex implementation requiring graph algorithms</li>
                <li>Compute-heavy with large matrices for similarity</li>
                <li>Parameter-sensitive (clustering thresholds)</li>
                <li>Results vary based on embedding quality</li>
              </ul>
            </div>
          ),
          backgroundColor: '#2b651c',
          notes: ''
        },
        {
          id: 74,
          title: '18. Graph-Based Semantic Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#95ff7a', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Variable by communities (~150–600 tokens)</li>
                <li>Determined by graph structure and topic cohesion</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>0 (typically no overlap)</li>
                <li>Communities form natural boundaries without need for overlap</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Implementation complexity and processing requirements</li>
                <li>High</li>
              </ul>
            </div>
          ),
          backgroundColor: '#2b651c',
          notes: ''
        },
        {
          id: 75,
          title: '18. Graph-Based Semantic Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#95ff7a', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Research papers with multiple topics</li>
                <li>Multi-topic reports and analyses</li>
                <li>Complex technical documentation</li>
                <li>Academic literature with dense concepts</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>sentence-transformers for embeddings</li>
                <li>NetworkX/igraph for graph algorithms</li>
                <li>Scikit-learn clustering implementations</li>
                <li>Custom research implementations</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Advanced</strong> - Required expertise and implementation difficulty</p>
            </div>
          ),
          backgroundColor: '#2b651c',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-19',
      title: '19. Audio / ASR Time-Based Chunking',
      slides: [
        {
          id: 76,
          title: '19. Audio / ASR Time-Based Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#8197ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Sync with timestamps; stream-friendly</li>
                <li>Preserves audio-to-text alignment</li>
                <li>Natural for audio/video content</li>
                <li>Enables seeking to specific audio segments</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c2965',
          notes: ''
        },
        {
          id: 77,
          title: '19. Audio / ASR Time-Based Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#8197ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Time slices may cut semantics; ASR errors propagate</li>
                <li>Variable information density in segments</li>
                <li>May need post-processing for coherence</li>
                <li>Audio quality affects chunk boundaries</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c2965',
          notes: ''
        },
        {
          id: 78,
          title: '19. Audio / ASR Time-Based Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#8197ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>15–60 seconds audio (or 150–500 tokens text)</li>
                <li>Balances completeness vs processing requirements</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>1–2 seconds (or 10–30 tokens)</li>
                <li>Helps maintain context across time-based boundaries</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>ASR processing and timestamp alignment requirements</li>
                <li>Medium</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c2965',
          notes: ''
        },
        {
          id: 79,
          title: '19. Audio / ASR Time-Based Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#8197ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Podcasts, earnings calls, lectures</li>
                <li>Meeting summarization</li>
                <li>Video content indexing</li>
                <li>Real-time speech processing</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Whisper (OpenAI)</li>
                <li>AWS Transcribe</li>
                <li>Google Speech-to-Text</li>
                <li>Pyannote (for diarization)</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Intermediate</strong> - Requires audio processing pipelines and ASR integration</p>
            </div>
          ),
          backgroundColor: '#1c2965',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-20',
      title: '20. Speaker-Turn Chunking',
      slides: [
        {
          id: 80,
          title: '20. Speaker-Turn Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff81aa', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Preserves dialog structure and conversation flow</li>
                <li>Improves speaker attribution in transcripts</li>
                <li>Maintains natural conversational segments</li>
                <li>Better context for Q&A pairs in dialogues</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c34',
          notes: ''
        },
        {
          id: 81,
          title: '20. Speaker-Turn Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff81aa', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Turn lengths vary significantly (some speakers talk more)</li>
                <li>Requires speaker diarization preprocessing</li>
                <li>Speaker detection can be error-prone</li>
                <li>May combine unrelated topics if same speaker continues</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c34',
          notes: ''
        },
        {
          id: 82,
          title: '20. Speaker-Turn Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff81aa', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Per turn or grouped 2–3 turns (~100–300 tokens)</li>
                <li>Adaptive to conversation dynamics and speaker patterns</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>0–1 turn</li>
                <li>Helps maintain context between speaker transitions</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Implementation complexity and processing requirements</li>
                <li>Medium</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c34',
          notes: ''
        },
        {
          id: 83,
          title: '20. Speaker-Turn Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff81aa', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Meeting transcripts and summaries</li>
                <li>Customer support chats and conversations</li>
                <li>Podcast and interview transcriptions</li>
                <li>Multi-speaker audio processing</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Pyannote audio diarization library</li>
                <li>AWS Transcribe with speaker diarization</li>
                <li>Whisper + diarization pipelines</li>
                <li>Google Speech-to-Text with speaker recognition</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Intermediate</strong> - Required expertise and implementation difficulty</p>
            </div>
          ),
          backgroundColor: '#651c34',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-21',
      title: '21. QA-Focused Chunking',
      slides: [
        {
          id: 84,
          title: '21. QA-Focused Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ffff6f', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Tailored to answer spans; high precision for QA</li>
                <li>Optimized for question-answer retrieval</li>
                <li>Improves relevance in QA systems</li>
                <li>Better context for specific questions</li>
              </ul>
            </div>
          ),
          backgroundColor: '#65651c',
          notes: ''
        },
        {
          id: 85,
          title: '21. QA-Focused Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ffff6f', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Needs label generation or heuristics; setup cost</li>
                <li>Requires understanding of question patterns</li>
                <li>May not generalize well to non-QA tasks</li>
                <li>More upfront work to implement properly</li>
              </ul>
            </div>
          ),
          backgroundColor: '#65651c',
          notes: ''
        },
        {
          id: 86,
          title: '21. QA-Focused Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ffff6f', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>100–400 tokens around candidate answers</li>
                <li>Sized to capture complete answer contexts</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>0–10% (minimal overlap needed)</li>
                <li>Focus on answer boundaries rather than arbitrary overlaps</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Requires additional processing to identify potential answers</li>
                <li>Medium–High</li>
              </ul>
            </div>
          ),
          backgroundColor: '#65651c',
          notes: ''
        },
        {
          id: 87,
          title: '21. QA-Focused Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ffff6f', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Knowledge bases</li>
                <li>Policy QA, FAQ systems</li>
                <li>Support documentation</li>
                <li>Information extraction from longer texts</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>LlamaIndex QuestionGenerator</li>
                <li>Rerankers (Cohere, Jina)</li>
                <li>Custom QA pipelines</li>
                <li>SentenceTransformers + question generation</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Advanced</strong> - Requires QA expertise and significant tuning</p>
            </div>
          ),
          backgroundColor: '#65651c',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-22',
      title: '22. Page-Preservation Chunking',
      slides: [
        {
          id: 88,
          title: '22. Page-Preservation Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#aa80ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Simple for PDFs; keeps page context and references</li>
                <li>Maintains original document's page structure</li>
                <li>Easy to cite and reference by page number</li>
                <li>Works well with documents that have page-based organization</li>
              </ul>
            </div>
          ),
          backgroundColor: '#341c65',
          notes: ''
        },
        {
          id: 89,
          title: '22. Page-Preservation Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#aa80ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Pages aren't semantic units; variable density</li>
                <li>May split logical content across pages</li>
                <li>Can be inefficient for dense or sparse pages</li>
                <li>References may lose context at page boundaries</li>
              </ul>
            </div>
          ),
          backgroundColor: '#341c65',
          notes: ''
        },
        {
          id: 90,
          title: '22. Page-Preservation Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#aa80ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Per page (variable tokens)</li>
                <li>Typically ranges from 300-1200 tokens depending on page density</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>0–5% between pages (optional)</li>
                <li>May include headers/footers for continuity</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Simple extraction with potential formatting challenges</li>
                <li>Low–Medium</li>
              </ul>
            </div>
          ),
          backgroundColor: '#341c65',
          notes: ''
        },
        {
          id: 91,
          title: '22. Page-Preservation Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#aa80ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Scanned documents</li>
                <li>Page-referenced citations</li>
                <li>Legal documents with page numbers</li>
                <li>Academic papers with page references</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>pdfplumber</li>
                <li>PyPDF2</li>
                <li>Unstructured.io</li>
                <li>PDF extraction libraries</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Beginner</strong> - Straightforward implementation with minimal tuning</p>
            </div>
          ),
          backgroundColor: '#341c65',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-23',
      title: '23. Caption + Context Chunking',
      slides: [
        {
          id: 92,
          title: '23. Caption + Context Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#82ff96', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Pairs figure/table captions with nearby text</li>
                <li>Boosts multimodal grounding</li>
                <li>Preserves visual-textual relationships</li>
                <li>Enhances retrieval of visual content</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6528',
          notes: ''
        },
        {
          id: 93,
          title: '23. Caption + Context Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#82ff96', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Requires reliable layout detection</li>
                <li>Struggles with complex document layouts</li>
                <li>Needs tuning of window size around captions</li>
                <li>Limited to documents with explicit figures/tables</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6528',
          notes: ''
        },
        {
          id: 94,
          title: '23. Caption + Context Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#82ff96', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>100–400 tokens near caption</li>
                <li>Include caption text plus surrounding explanatory paragraphs</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>1–2 sentences around region</li>
                <li>Enough to connect with surrounding content sections</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Requires layout analysis and figure/caption detection</li>
                <li>Medium</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6528',
          notes: ''
        },
        {
          id: 95,
          title: '23. Caption + Context Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#82ff96', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Scientific papers with figures</li>
                <li>Reports with tables and charts</li>
                <li>Technical documentation with diagrams</li>
                <li>Educational materials with illustrations</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Unstructured.io</li>
                <li>DocTR (Document Text Recognition)</li>
                <li>LayoutParser</li>
                <li>Custom PDF extractors with layout awareness</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Intermediate</strong> - Requires document structure and layout understanding</p>
            </div>
          ),
          backgroundColor: '#1c6528',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-24',
      title: '24. Metadata-Aware Chunking',
      slides: [
        {
          id: 96,
          title: '24. Metadata-Aware Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#e086ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Adds filters (section, author, date) to chunks</li>
                <li>Improves retrieval routing and precision</li>
                <li>Enables faceted search and filtering</li>
                <li>Better document provenance tracking</li>
              </ul>
            </div>
          ),
          backgroundColor: '#521c65',
          notes: ''
        },
        {
          id: 97,
          title: '24. Metadata-Aware Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#e086ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Metadata extraction requires additional effort</li>
                <li>Governance and schema management needed</li>
                <li>Increased storage requirements</li>
                <li>Quality depends on metadata accuracy</li>
              </ul>
            </div>
          ),
          backgroundColor: '#521c65',
          notes: ''
        },
        {
          id: 98,
          title: '24. Metadata-Aware Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#e086ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Inherit from base chunking method (e.g., 300–800 tokens)</li>
                <li>Metadata is orthogonal to chunk size decisions</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Same as base chunking method</li>
                <li>Metadata enhancement doesn't affect overlap strategy</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Base chunking cost plus metadata extraction overhead</li>
                <li>Medium</li>
              </ul>
            </div>
          ),
          backgroundColor: '#521c65',
          notes: ''
        },
        {
          id: 99,
          title: '24. Metadata-Aware Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#e086ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Enterprise search with facets</li>
                <li>Regulatory/compliance document retrieval</li>
                <li>Multi-domain knowledge bases</li>
                <li>Content governance requirements</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>LangChain Document schemas</li>
                <li>Weaviate with filters</li>
                <li>Azure Cognitive Search</li>
                <li>Pinecone, Chroma with metadata filtering</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Intermediate</strong> - Requires schema design and metadata extraction</p>
            </div>
          ),
          backgroundColor: '#521c65',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-25',
      title: '25. Hybrid Chunking',
      slides: [
        {
          id: 100,
          title: '25. Hybrid Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff83a2', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Best of multiple methods; adaptable by document type</li>
                <li>Can handle mixed content in heterogeneous corpora</li>
                <li>Optimizes for both context and relevance</li>
                <li>More flexible for enterprise applications</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c2e',
          notes: ''
        },
        {
          id: 101,
          title: '25. Hybrid Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff83a2', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>More moving parts; requires evals to tune</li>
                <li>Higher development and maintenance overhead</li>
                <li>Harder to debug retrieval issues</li>
                <li>Requires careful orchestration of techniques</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c2e',
          notes: ''
        },
        {
          id: 102,
          title: '25. Hybrid Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff83a2', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Varies based on component techniques</li>
                <li>E.g., structure-aware for sections + semantic refinement within sections</li>
                <li>Typically 300-800 tokens after composition</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Varies by component technique</li>
                <li>Typically 10-20% for boundary smoothing</li>
                <li>Strategic overlaps at semantic boundaries</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Depends on component techniques and pipeline complexity</li>
                <li>Variable</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c2e',
          notes: ''
        },
        {
          id: 103,
          title: '25. Hybrid Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff83a2', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Production RAG systems</li>
                <li>Heterogeneous document collections</li>
                <li>Enterprise knowledge management</li>
                <li>Multi-modal content (docs + code + tables)</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>LangChain/LlamaIndex composition</li>
                <li>Custom pipelines and orchestration</li>
                <li>MLOps frameworks with pipeline support</li>
                <li>Enterprise RAG platforms</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Intermediate–Advanced</strong> - Requires expertise in multiple chunking methods and evaluation</p>
            </div>
          ),
          backgroundColor: '#651c2e',
          notes: ''
        }
      ]
    },
    {
      id: 'strategy-26',
      title: '26. Sliding Window Chunking',
      slides: [
        {
          id: 104,
          title: '26. Sliding Window Chunking - Pros',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#78f9ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Preserves continuity and context between chunks</li>
                <li>Reduces information loss at boundaries</li>
                <li>Better semantic coherence across transitions</li>
                <li>Improves retrieval for context-dependent queries</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6265',
          notes: ''
        },
        {
          id: 105,
          title: '26. Sliding Window Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#78f9ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Introduces redundancy in storage</li>
                <li>Increases embedding costs (same content embedded multiple times)</li>
                <li>Can create duplicated results without filtering</li>
                <li>Overlap size requires tuning for optimal performance</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6265',
          notes: ''
        },
        {
          id: 106,
          title: '26. Sliding Window Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#78f9ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>300–800 tokens for each window</li>
                <li>Larger sizes for complex documents with long contextual dependencies</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>15–30% of chunk size (or 1–2 sentences)</li>
                <li>Larger overlap for documents with complex cross-references</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Slightly higher than fixed-size due to overlap management</li>
                <li>Low–Medium</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6265',
          notes: ''
        },
        {
          id: 107,
          title: '26. Sliding Window Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#78f9ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>Legal documents and contracts</li>
                <li>Academic papers and research reports</li>
                <li>Policy documents where cross-references matter</li>
                <li>Technical specifications with interdependent sections</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                <li>LangChain sliding window implementations</li>
                <li>LlamaIndex text splitters with overlap</li>
                <li>Custom token window implementations</li>
                <li>Most vector databases support overlapping chunks</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2rem' }}><strong>Beginner</strong> - Straightforward implementation with slightly more complexity than fixed-size</p>
            </div>
          ),
          backgroundColor: '#1c6265',
          notes: ''
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 108,
          title: 'Quick Reference: Default Sizing & Overlap',
          icon: { name: 'duo-table' },
          content: (
            <div style={{ margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-table" sizeName="2x" darkModeInvert={true} />
                Default Configurations
              </h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)' }}>
                    <th style={{ padding: '10px', border: '1px solid #555' }}>Technique</th>
                    <th style={{ padding: '10px', border: '1px solid #555' }}>Default Size</th>
                    <th style={{ padding: '10px', border: '1px solid #555' }}>Overlap</th>
                    <th style={{ padding: '10px', border: '1px solid #555' }}>Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Fixed/Token</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>512 tokens</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>15%</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Baselines, simple content</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Sliding Window</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>600 tokens</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>20%</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Technical docs, legal</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Sentence Grouping</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>3 sentences</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Stride 2</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Narrative text</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Paragraph</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Max 350 tokens</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>None</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Articles, blogs</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Recursive Character</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>700 tokens</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>100 tokens</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Mixed formats</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Semantic</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>400 tokens</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>0-5%</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Multi-topic documents</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>HTML/Markdown</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>500 tokens</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Preserve elements</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Documentation sites</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Code-Aware</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>400 tokens/function</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Include context</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Code repositories</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Audio Time-Based</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>30s windows</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>2s</td>
                    <td style={{ padding: '8px', border: '1px solid #555', fontSize: '1.2rem' }}>Podcasts, meetings</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ marginTop: '20px', padding: '15px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px', textAlign: 'center', fontSize: '1.2rem' }}>
                <strong>💡 Evaluation Tip:</strong> Always tune these defaults for your specific corpus. Measure retrieval precision/recall, faithfulness, latency, and cost.
              </div>
            </div>
          ),
          backgroundColor: '#104928',
          notes: ''
        },
        {
          id: 109,
          title: 'Selection Guide: Decision Flow',
          icon: { name: 'duo-compass' },
          content: (
            <div style={{ margin: '0 auto', fontSize: '2rem', color: '#13c55e' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <h3 style={{ paddingBottom: '30px' }}>How to Choose the Right Chunking Strategy</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', border: '2px solid #3498db', color: '#3498db' }}>
                  <h4 style={{ color: '#3498db', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-sitemap" sizeName="2x" darkModeInvert={true} />
                    1. Is document structure reliable?
                  </h4>
                  <p><strong>Yes →</strong> Use structure-aware chunking (Heading-Anchor, Markdown/HTML, Structure-Aware)</p>
                  <p><strong>No →</strong> Consider semantic approaches (Semantic, TextTiling)</p>
                </div>
                <div style={{ padding: '15px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '10px', border: '2px solid #f39c12', color: '#f39c12' }}>
                  <h4 style={{ color: '#f39c12', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-gauge-high" sizeName="2x" darkModeInvert={true} />
                    2. Is latency/cost strict?
                  </h4>
                  <p><strong>Yes →</strong> Use simpler approaches (Fixed-Size, Token-Aware, Recursive Character)</p>
                  <p><strong>No →</strong> Use advanced techniques (LLM-Based, Graph-Semantic, Discourse/RST)</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#104928',
          notes: ''
        },
        {
          id: 110,
          title: 'Selection Guide: Decision Flow',
          icon: { name: 'duo-compass' },
          content: (
            <div style={{ margin: '0 auto', fontSize: '2rem', color: '#13c55e' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <h3 style={{ paddingBottom: '30px' }}>How to Choose the Right Chunking Strategy</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ padding: '15px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '10px', border: '2px solid #9b59b6', color: '#9b59b6' }}>
                  <h4 style={{ color: '#9b59b6', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-layer-group" sizeName="2x" darkModeInvert={true} />
                    3. Special content types?
                  </h4>
                  <p><strong>Code →</strong> Code-Aware chunking</p>
                  <p><strong>Tables →</strong> Table-Aware chunking</p>
                  <p><strong>Audio/Speech →</strong> Speaker-Turn or Time-Based chunking</p>
                  <p><strong>QA Tasks →</strong> QA-Focused chunking</p>
                </div>
                <div style={{ padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '10px', border: '2px solid #2ecc71', color: '#2ecc71' }}>
                  <h4 style={{ color: '#2ecc71', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Common Recommendations by Document Type
                  </h4>
                  <ul style={{ lineHeight: '1.8' }}>
                    <li><strong>Documentation Sites:</strong> Heading-Anchor + Markdown Structure + Sliding Window</li>
                    <li><strong>Legal/Policy Documents:</strong> Paragraph + Sliding Window or RST</li>
                    <li><strong>Code Repositories:</strong> Code-Aware + Token-Aware</li>
                    <li><strong>Academic Papers:</strong> Structure-Aware + Semantic or Page-Preservation</li>
                    <li><strong>General Text:</strong> Start with Fixed-Size or Recursive Character + Sliding Window</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#104928',
          notes: ''
        },
        {
          id: 111,
          title: 'Best Practices & Key Takeaways',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                    Key Takeaways
                  </h4>
                  <ul style={{ lineHeight: '1.8' }}>
                    <li><strong>No one-size-fits-all:</strong> Choose based on document type and goals</li>
                    <li><strong>Start simple:</strong> Fixed-size or Token-Aware as baseline</li>
                    <li><strong>Measure impact:</strong> Test with real queries and metrics</li>
                    <li><strong>Balance trade-offs:</strong> Semantic coherence vs. efficiency</li>
                    <li><strong>Consider costs:</strong> Embedding generation and storage</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db', marginTop: '20px', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-chart-line" sizeName="2x" darkModeInvert={true} />
                    Evaluation Methods
                  </h4>
                  <ul style={{ lineHeight: '1.8' }}>
                    <li>Test with held-out queries</li>
                    <li>Use rerankers to assess quality</li>
                    <li>LLM-as-judge for faithfulness</li>
                    <li>Monitor latency and costs</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-route" sizeName="2x" darkModeInvert={true} />
                    Recommended Path
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '1.2rem' }}>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px', borderLeft: '4px solid #3498db' }}>
                      <strong>1. Begin with baseline</strong><br />
                      Fixed-Size or Token-Aware + Sliding Window
                    </div>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', borderLeft: '4px solid #9b59b6' }}>
                      <strong>2. Add sophistication</strong><br />
                      Structure-Aware or Semantic based on docs
                    </div>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', borderLeft: '4px solid #2ecc71' }}>
                      <strong>3. Consider hybrid</strong><br />
                      For complex or multi-modal collections
                    </div>
                    <div style={{ padding: '12px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px', borderLeft: '4px solid #f39c12' }}>
                      <strong>4. Continuously refine</strong><br />
                      Learn from real-world usage patterns
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '30px', padding: '20px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', textAlign: 'center', fontSize: '1.2rem' }}>
                <strong>🎯 Implementation Next Steps:</strong> Implement 3 candidate strategies → Run A/B tests → Lock in optimal defaults → Continuously optimize
              </div>
            </div>
          ),
          backgroundColor: '#104928',
          notes: ''
        }
      ]
    }
  ]
};

