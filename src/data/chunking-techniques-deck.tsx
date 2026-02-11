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
              <GSAPStaggerList stagger={0.12} animation="slideInLeft">
                <li>Parsing/layout extraction can be brittle</li>
                <li>Requires well-structured documents</li>
                <li>May produce uneven chunk sizes</li>
                <li>Quality depends on document formatting</li>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1c6521',
          notes: `### 21. Structure-Aware Chunking - Cons
Every technique has trade-offs, and structure-aware chunking is no exception. Let's explore where this approach can run into trouble.

#### Parsing Challenges
The biggest challenge with structure-aware chunking is that **parsing and layout extraction can be brittle**. Think of it like trying to read a book where the formatting is inconsistent, some chapters have headings and some don't, or the table of contents doesn't match the actual content. Your parsing tools might work perfectly on one document but fail miserably on another. When the structure isn't clean, the parser struggles to identify boundaries correctly.

#### Document Quality Dependencies
This technique **requires well-structured documents** to shine. If you're working with PDFs that were scanned from paper, documents with inconsistent heading styles, or content that was poorly formatted to begin with, you're going to have a bad time. It's like trying to organize a messy closet when half the items don't have labels. The technique assumes your input already follows some organizational logic.

#### Size Variability
Structure-aware chunking **may produce uneven chunk sizes** because it respects the natural boundaries of your document structure. One section might be 100 tokens while another is 1,500 tokens. This isn't always bad, but it can cause problems if you have strict size requirements for your embedding model or retrieval system. Some chunks might be too small to be meaningful, while others exceed your context window.

#### Formatting Dependence
Ultimately, the **quality depends heavily on document formatting**. Well-formatted documents with clear hierarchies produce excellent results. Poorly formatted documents? Not so much. You're essentially at the mercy of whoever created the original document.

Understanding these limitations helps you decide when this technique is worth the effort and when a simpler approach might be more reliable.`
        },
        {
          id: 22,
          title: '5. Structure-Aware Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#58ff64', padding: '30px' }}>
              <GSAPAnimated animation="slideInRight" delay={0.1} duration={0.7}>
                <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.1} delay={0.3}>
                <li>300–1200 tokens (by section)</li>
                <li>Sizes vary based on document structure and heading levels</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="slideInRight" delay={0.5} duration={0.7}>
                <h3 style={{ color: '#f39c12', marginBottom: '20px', marginTop: '30px' }}>Overlap Size</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.1} delay={0.7}>
                <li>Minimal across sections</li>
                <li>Only necessary to maintain cross-sectional references</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="slideInRight" delay={0.9} duration={0.7}>
                <h3 style={{ color: '#e74c3c', marginBottom: '20px', marginTop: '30px' }}>Computational Cost</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.1} delay={1.0}>
                <li>Medium (structure parsing and analysis requirements)</li>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1c6521',
          notes: `### 22. Structure-Aware Chunking - Configuration
Now let's get practical and talk numbers. How do you actually configure structure-aware chunking for real-world use?

#### Best Chunk Size
For structure-aware chunking, aim for **300 to 1200 tokens per section**. Notice that's quite a range! That's because this technique respects the natural boundaries of your document structure. A subsection might be 300 tokens, while a major section could be 1200 tokens. Think of it like organizing a book, some chapters are naturally shorter than others. The **sizes vary based on document structure and heading levels**. If you're working with deeply nested headings (H1, H2, H3, H4), you might chunk at the H3 level to keep sizes manageable. For flatter documents, chunking at H2 might be perfect.

#### Overlap Configuration
Structure-aware chunking uses **minimal overlap across sections**, and that's actually a strength! Since you're breaking at natural semantic boundaries (like section headings), you don't need much overlap to preserve context. You **only need overlap to maintain cross-sectional references**, like when one section refers to concepts from a previous section. Think of it like chapters in a book, each chapter is self-contained, but occasionally one chapter references another.

#### Computational Requirements  
The **computational cost is medium** because you need **structure parsing and analysis**. You're not just counting characters or tokens, you're actually analyzing the document to identify headings, sections, and hierarchies. It's more work than fixed-size chunking but less expensive than semantic embedding-based approaches. Think of it as a middle ground between simple and sophisticated.

These configurations give you a solid starting point, but remember to tune based on your specific documents and retrieval needs.`
        },
        {
          id: 23,
          title: '5. Structure-Aware Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#58ff64', padding: '30px' }}>
              <GSAPAnimated animation="bounceIn" delay={0.1} duration={0.8}>
                <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} delay={0.3}>
                <li>Manuals, whitepapers, SOWs</li>
                <li>Documentation sites</li>
                <li>Academic papers with clear sections</li>
                <li>Technical reports, legal documents</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="bounceIn" delay={0.6} duration={0.8}>
                <h3 style={{ color: '#9b59b6', marginBottom: '20px', marginTop: '30px' }}>Tooling Support</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} delay={0.8}>
                <li>Azure Document Layout</li>
                <li>Unstructured.io</li>
                <li>Docling</li>
                <li>LangChain HTML/MD splitters</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="scaleIn" delay={1.1} duration={0.7}>
                <h3 style={{ color: '#1abc9c', marginBottom: '20px', marginTop: '30px' }}>Complexity Level</h3>
                <p style={{ fontSize: '1.2rem' }}><strong>Intermediate</strong> - Requires structure parsing knowledge</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1c6521',
          notes: `### 23. Structure-Aware Chunking - Use Cases & Tools
Let's explore where structure-aware chunking really shines and what tools can help you implement it effectively.

#### Perfect Use Cases
Structure-aware chunking is ideal for **manuals, whitepapers, and SOWs** (Statements of Work) because these documents are typically well-structured with clear sections, headings, and hierarchies. Think of a user manual with chapters like "Getting Started," "Installation," and "Troubleshooting." Each section is naturally self-contained and meaningful. **Documentation sites** are another perfect fit, websites built with tools like ReadTheDocs or GitBook already have a clear structure that this technique can leverage beautifully. **Academic papers with clear sections** like Abstract, Introduction, Methodology, Results, and Conclusion are ideal candidates. The structure is standardized and semantic. Finally, **technical reports and legal documents** often have numbered sections and subsections that map perfectly to this chunking strategy.

#### Available Tools
You're not building this from scratch! **Azure Document Layout** provides powerful APIs for extracting structure from PDFs and documents. **Unstructured.io** is a fantastic open-source library that handles structure extraction across many formats. **Docling** is another great tool specialized for document understanding and structure parsing. And if you're working with HTML or Markdown, **LangChain's HTML and Markdown splitters** have built-in support for structure-aware chunking with minimal configuration. These tools handle the heavy lifting of parsing and boundary detection.

#### Complexity Assessment
This is an **intermediate-level technique** that **requires structure parsing knowledge**. You need to understand document formats, heading hierarchies, and how to configure parsers. It's not as simple as "split every 500 characters," but it's also not as complex as building custom NLP models. Most developers can learn this with a few days of practice.

Structure-aware chunking is powerful when your documents cooperate. Use it when structure exists and matters!`
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
              <GSAPStaggerList stagger={0.18} animation="slideInRight">
                <li>Heuristics by content type (lists, bullets, code, tables)</li>
                <li>Preserves meaning of special content elements</li>
                <li>Adapts to document formatting patterns</li>
                <li>Better chunk boundaries for mixed content</li>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1c655a',
          notes: `### 24. Content-Aware Chunking - Pros
Welcome to content-aware chunking, a sophisticated approach that understands *what* type of content it's dealing with, not just *where* to split. Let's explore why this technique is so powerful.

#### Intelligent Content Recognition
Content-aware chunking uses **heuristics based on content type**, recognizing whether you're dealing with lists, bullets, code blocks, tables, or regular prose. Think of it like a smart librarian who doesn't just organize books by size, but by genre and topic. If you have a Python code block, this technique knows to keep it together as one unit rather than splitting it mid-function. If you have a table, it keeps the entire table intact so the data relationships remain meaningful.

#### Semantic Preservation
The key advantage is that it **preserves the meaning of special content elements**. A bulleted list makes sense as a complete unit. A code example needs to stay together to be understandable. A table's rows and columns form a cohesive whole. Regular character-based or token-based chunking would happily split these elements in arbitrary places, destroying their meaning. Content-aware chunking respects the semantics of your content.

#### Adaptive Intelligence
It **adapts to document formatting patterns** automatically. If your document alternates between prose paragraphs, code blocks, and tables, this technique adjusts the chunking strategy on the fly based on what it encounters. It's like having a smart assistant who changes their approach based on what they're organizing.

#### Mixed Content Excellence
For documents with **mixed content**, this technique produces **better chunk boundaries** than one-size-fits-all approaches. Each chunk is more likely to be semantically complete and meaningful because the chunker understands the content structure.

This intelligence comes at a cost, but for documents with rich formatting, it's often worth it!`
        },
        {
          id: 25,
          title: '6. Content-Aware Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#83ffec', padding: '30px' }}>
              <GSAPStaggerList stagger={0.16} animation="fadeIn" delay={0.2}>
                <li>Rules require tuning for different domains</li>
                <li>Domain-specific heuristics needed</li>
                <li>Harder to maintain than simpler methods</li>
                <li>May break on unusual formatting</li>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1c655a',
          notes: `### 25. Content-Aware Chunking - Cons
While content-aware chunking is intelligent, that intelligence comes with practical challenges. Let's be honest about where this technique struggles.

#### Domain-Specific Tuning
The **rules require tuning for different domains**, and this is a significant maintenance burden. What works for technical documentation might not work for legal contracts. What works for scientific papers might fail spectacularly on marketing materials. You can't just set it and forget it. Each new document type or domain may require you to adjust the heuristics, recognition patterns, and boundary rules. It's like having a sophisticated tool that needs constant calibration.

#### Heuristic Development
You need **domain-specific heuristics**, which means understanding your content deeply before you can chunk it effectively. How do you recognize a code block versus a formatted quote? How do you identify a table that should stay together versus a list that can be split? These rules don't write themselves, you need domain expertise to craft them.

#### Maintenance Overhead
This approach is **harder to maintain than simpler methods** like fixed-size or sentence-based chunking. Every time your document formats change, you might need to update your content recognition rules. New content types require new heuristics. It's an ongoing engineering investment rather than a one-time setup.

#### Edge Case Fragility
The system **may break on unusual formatting** that doesn't match your heuristics. Encounter a document with a weird mix of Markdown and HTML? Tables nested inside lists? Code blocks with unusual delimiters? Your carefully crafted rules might fail in unexpected ways. Simple, right? Not always!

These challenges don't make content-aware chunking bad, they just mean you need to weigh the benefits against the ongoing maintenance costs.`
        },
        {
          id: 26,
          title: '6. Content-Aware Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#83ffec', padding: '30px' }}>
              <GSAPAnimated animation="rotateIn" delay={0.1} duration={0.9}>
                <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} delay={0.3}>
                <li>200–800 tokens (dynamic)</li>
                <li>Varies based on content type and complexity</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="rotateIn" delay={0.5} duration={0.9}>
                <h3 style={{ color: '#f39c12', marginBottom: '20px', marginTop: '30px' }}>Overlap Size</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} delay={0.7}>
                <li>0–15% depending on content type</li>
                <li>More for complex content, less for structured elements</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="rotateIn" delay={0.9} duration={0.9}>
                <h3 style={{ color: '#e74c3c', marginBottom: '20px', marginTop: '30px' }}>Computational Cost</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} delay={1.0}>
                <li>Medium (implementation complexity and processing requirements)</li>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1c655a',
          notes: `### 26. Content-Aware Chunking - Configuration
Let's talk numbers and practical settings. How do you configure content-aware chunking for production use?

#### Dynamic Chunk Sizing
Aim for **200 to 800 tokens, but expect this to be dynamic**. Unlike fixed-size chunking where every chunk is exactly 512 tokens, content-aware chunking produces variable sizes. A code block might be 150 tokens, a prose paragraph might be 400 tokens, and a complex table with explanation might be 750 tokens. The **size varies based on content type and complexity**. Think of it like packing boxes, you adjust the box size to fit the item, not vice versa. This variability is a feature, not a bug, because it preserves semantic completeness.

#### Context-Sensitive Overlap
Use **0 to 15% overlap depending on content type**. This is where content-awareness really shines! For **complex content** like interrelated paragraphs or sequential explanations, use **more overlap** (maybe 10-15%) to preserve context across chunks. For **structured elements** like code blocks, tables, or bulleted lists, use **less overlap** (0-5%) because these elements are self-contained. A code function doesn't need overlap with the next function. A table is complete on its own. But narrative text benefits from context bridges.

#### Computational Investment
Expect a **medium computational cost** due to **implementation complexity and processing requirements**. You're running content detection heuristics, pattern matching, and adaptive logic for every piece of content. It's more expensive than "split every N tokens" but less expensive than generating embeddings for semantic chunking. The processing happens once during ingestion, so this cost is typically acceptable for production systems.

These configurations give you flexibility while preserving content integrity. Adjust based on your specific needs!`
        },
        {
          id: 27,
          title: '6. Content-Aware Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#83ffec', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <GSAPStaggerList stagger={0.14} delay={0.3}>
                <li>Ebooks and technical guides</li>
                <li>Documentation sites and wikis</li>
                <li>Mixed content with lists/tables/code</li>
                <li>Formatting-rich documents</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="flipCard" delay={0.6} duration={1.0}>
                <h3 style={{ color: '#9b59b6', marginBottom: '20px', marginTop: '30px' }}>Tooling Support</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.14} delay={0.8}>
                <li>Custom heuristics (often bespoke)</li>
                <li>Coveo chunking strategies</li>
                <li>Unstructured.io content extractors</li>
                <li>Rule-based custom splitters</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="scaleIn" delay={1.0} duration={0.8}>
                <h3 style={{ color: '#1abc9c', marginBottom: '20px', marginTop: '30px' }}>Complexity Level</h3>
                <p style={{ fontSize: '1.2rem' }}><strong>Intermediate</strong> - Requires expertise and domain-specific implementation</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1c655a',
          notes: `### 27. Content-Aware Chunking - Use Cases & Tools
Now let's see where content-aware chunking really earns its keep, and what tools can help you implement it without building everything from scratch.

#### Ideal Applications
Content-aware chunking shines for **ebooks and technical guides** where you have a mix of narrative prose, code examples, diagrams, and tables all in one document. Think of an O'Reilly book on Python programming, it has explanatory text, code blocks, output examples, and tables comparing features. Each content type needs different handling. **Documentation sites and wikis** are another sweet spot, they typically have prose sections, API examples, configuration snippets, and structured data that benefit from content-aware boundaries. Any document with **mixed content including lists, tables, and code** is a prime candidate. And **formatting-rich documents** where the formatting carries semantic meaning (like Markdown with various elements) work beautifully with this approach.

#### Implementation Tools
Here's where it gets interesting, much of this is **custom heuristics that are often bespoke** to your specific needs. You'll write rules like "keep code blocks together" or "don't split tables." But you're not completely on your own! **Coveo** provides chunking strategies with content-awareness built in. **Unstructured.io** has excellent content extractors that understand different element types. And you can build **rule-based custom splitters** using pattern matching and content detection logic. The tooling landscape here is more fragmented than simple methods, but the flexibility is worth it.

#### Skill Requirements
This is an **intermediate-level technique** that **requires expertise and domain-specific implementation** skills. You need to understand your document formats deeply, write effective heuristics, and test thoroughly across your content types. Expect a learning curve, but the results justify the investment for content-rich applications.

Content-aware chunking is your go-to when content diversity demands intelligent handling!`
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
              <GSAPStaggerList stagger={0.2} animation="slideInBottom">
                <li>Topic-coherent chunks; high retrieval precision</li>
                <li>Better semantic understanding and context preservation</li>
                <li>Groups similar content regardless of physical proximity</li>
                <li>Improved relevance in retrieval results</li>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1c1c65',
          notes: `### 28. Semantic Chunking (Embedding-Based) - Pros
Now we're entering advanced territory! Semantic chunking uses embeddings to understand meaning, not just structure. This is where AI meets chunking strategy.

#### Topic Coherence and Precision
Semantic chunking creates **topic-coherent chunks** that result in **high retrieval precision**. Instead of breaking text at arbitrary character counts or sentence boundaries, this technique uses embedding models to identify where topics actually change. Think of it like a smart reader who can tell when the conversation shifts from discussing databases to discussing APIs, even if there's no heading to mark the transition. This leads to chunks that are semantically complete and topically focused, which dramatically improves retrieval quality.

#### Semantic Intelligence
It provides **better semantic understanding and context preservation** than any technique we've discussed so far. When you embed sentences or paragraphs, you're capturing their *meaning* in vector space. Sentences about the same topic cluster together, even if they use different words. This is huge! You can group content about "machine learning model training" even if some parts say "neural network optimization" and others say "teaching algorithms."

#### Physical Independence
Semantic chunking **groups similar content regardless of physical proximity** in the document. If page 5 and page 47 discuss the same concept, semantic chunking recognizes that relationship. This is especially powerful for documents where related concepts are scattered throughout.

#### Retrieval Excellence
The end result is **improved relevance in retrieval results**. When users query your system, they get chunks that are semantically aligned with their question, not just keyword matches. This is the gold standard for RAG applications.

The intelligence comes at a cost, but for many applications, it's absolutely worth it!`
        },
        {
          id: 29,
          title: '7. Semantic Chunking (Embedding-Based) - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7b7bff', padding: '30px' }}>
              <GSAPStaggerList stagger={0.17} animation="slideInTop" delay={0.2}>
                <li>Requires embeddings; adds computation cost</li>
                <li>Tuning similarity thresholds can be challenging</li>
                <li>Quality depends on embedding model choice</li>
                <li>More implementation complexity than fixed methods</li>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1c1c65',
          notes: `### 29. Semantic Chunking (Embedding-Based) - Cons
With great power comes great complexity. Let's talk about the real challenges you'll face with semantic chunking.

#### Computational Requirements
This technique **requires embeddings**, which **adds significant computation cost**. You're not just splitting text, you're running every sentence or paragraph through an embedding model to generate vector representations. For a large document corpus, this can mean thousands or millions of embedding calls. That's real money if you're using commercial APIs, or real infrastructure if you're self-hosting models. The compute happens during the chunking phase, before you even start your retrieval pipeline.

#### Threshold Tuning Challenges
**Tuning similarity thresholds can be challenging** and often requires experimentation. How similar do two sentences need to be before you group them into the same chunk? Set the threshold too high, and you get tiny chunks that lack context. Set it too low, and you get massive chunks that include multiple unrelated topics. There's no universal magic number, it varies by document type, embedding model, and your specific use case. Expect to iterate!

#### Model Dependency
The **quality depends heavily on your embedding model choice**. Use a weak or generic embedding model, and you get poor topic detection. Use a domain-specific model, and you might get great results on one content type but poor results on another. Different models have different strengths, some excel at code, others at legal text, others at conversational content. Your chunking quality is fundamentally limited by your model's semantic understanding.

#### Complexity Overhead
This has **more implementation complexity than fixed methods** by an order of magnitude. You need to manage embedding model deployment, handle batching for efficiency, tune similarity thresholds, and debug semantic grouping issues. It's not plug-and-play.

These challenges don't disqualify semantic chunking, but they do mean you should use it deliberately, not casually!`
        },
        {
          id: 30,
          title: '7. Semantic Chunking (Embedding-Based) - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7b7bff', padding: '30px' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1} duration={0.8}>
                <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.11} delay={0.3}>
                <li>200–600 tokens per semantic unit</li>
                <li>Varies based on topic cohesion and content density</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="slideInLeft" delay={0.5} duration={0.8}>
                <h3 style={{ color: '#f39c12', marginBottom: '20px', marginTop: '30px' }}>Overlap Size</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.11} delay={0.7}>
                <li>0–10% (minimal overlap needed)</li>
                <li>Semantic boundaries reduce need for significant overlap</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="slideInLeft" delay={0.9} duration={0.8}>
                <h3 style={{ color: '#e74c3c', marginBottom: '20px', marginTop: '30px' }}>Computational Cost</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.11} delay={1.0}>
                <li>Medium–High (embedding generation and similarity calculations add overhead)</li>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1c1c65',
          notes: `### 30. Semantic Chunking (Embedding-Based) - Configuration
Let's get practical about configuring semantic chunking for production systems. The numbers matter here!

#### Semantic Unit Sizing
Target **200 to 600 tokens per semantic unit**, which is typically smaller than structure-based chunks. Why? Because semantic chunking creates naturally cohesive units based on meaning, not structure. A semantic unit might be a single concept explained across multiple sentences, or a subsection discussing one specific point. The **size varies based on topic cohesion and content density**. Dense technical content might produce smaller chunks (200-300 tokens) where each concept is tightly packed. Narrative or explanatory content might produce larger chunks (400-600 tokens) where ideas flow more loosely. Let the semantics guide the size, not arbitrary limits.

#### Minimal Overlap Strategy
Use **0 to 10% overlap**, which is **minimal compared to fixed-size methods**. Here's why this works: **semantic boundaries naturally reduce the need for significant overlap**. When you break at topic transitions, the adjacent chunks are about different things, so overlap doesn't add much value. It's like chapters in a book, Chapter 2 doesn't need to repeat the ending of Chapter 1 because they're about different topics. You might use some overlap (5-10%) if your topics are closely related and build on each other sequentially, but often 0% works just fine.

#### Performance Considerations
Expect **medium to high computational cost** due to **embedding generation and similarity calculations**. Every sentence or small paragraph needs to be embedded, which means multiple API calls or model inferences. Then you need to compute similarity between embeddings to find topic boundaries. This is significantly more expensive than simple text manipulation. Budget accordingly, both in terms of infrastructure and latency. The good news is this happens once during ingestion, not during every query.

These configurations balance quality with computational reality. Tune based on your retrieval metrics!`
        },
        {
          id: 31,
          title: '7. Semantic Chunking (Embedding-Based) - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7b7bff', padding: '30px' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1} duration={0.9}>
                <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.13} delay={0.3}>
                <li>Multi-topic documents and research papers</li>
                <li>Knowledge bases with diverse content</li>
                <li>Product documentation libraries</li>
                <li>When retrieval precision is critical</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="scaleIn" delay={0.6} duration={0.9}>
                <h3 style={{ color: '#9b59b6', marginBottom: '20px', marginTop: '30px' }}>Tooling Support</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.13} delay={0.8}>
                <li>Sentence-transformers library</li>
                <li>Pinecone examples and guides</li>
                <li>Superlinked VectorHub</li>
                <li>LlamaIndex SemanticSplitter</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="bounceIn" delay={1.0} duration={0.8}>
                <h3 style={{ color: '#1abc9c', marginBottom: '20px', marginTop: '30px' }}>Complexity Level</h3>
                <p style={{ fontSize: '1.2rem' }}><strong>Intermediate–Advanced</strong> - Requires understanding of embeddings and similarity thresholds</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1c1c65',
          notes: `### 31. Semantic Chunking (Embedding-Based) - Use Cases & Tools
When should you invest in semantic chunking, and what tools make it easier? Let's explore the sweet spots and practical implementation paths.

#### Prime Use Cases
Semantic chunking excels with **multi-topic documents and research papers** where topics shift subtly without clear structural markers. Think of a research paper that discusses methodology, then pivots to related work, then discusses results, all without always having explicit section headers. **Knowledge bases with diverse content** are another perfect fit, when you have articles about completely different topics all mixed together, semantic chunking groups related concepts correctly. **Product documentation libraries** benefit enormously because users ask semantic questions like "how do I authenticate?" and you need chunks that capture complete authentication-related concepts, even if they span multiple pages. Use this technique **when retrieval precision is absolutely critical** and the computational cost is justified by business value.

#### Production-Ready Tools
You're in luck, excellent tools exist! **Sentence-transformers library** provides state-of-the-art embedding models specifically designed for semantic similarity. It's open-source and battle-tested. **Pinecone** offers examples and guides for semantic chunking as part of their vector database ecosystem. **Superlinked VectorHub** has excellent resources and implementations for semantic chunking patterns. And **LlamaIndex SemanticSplitter** provides a turnkey solution if you're already in the LlamaIndex ecosystem. These tools handle much of the complexity for you.

#### Skill Level
This is **intermediate to advanced** territory, requiring **understanding of embeddings and similarity thresholds**. You need to grasp vector spaces, cosine similarity, and how different embedding models behave. You'll need to experiment with thresholds and evaluate results quantitatively. It's not beginner-friendly, but it's learnable with effort.

Semantic chunking is the premium option for applications where retrieval quality directly impacts user value!`
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
              <GSAPStaggerList stagger={0.19} animation="slideInRight" delay={0.1}>
                <li>Topic segmentation via cohesion drops; classic, explainable</li>
                <li>Finds natural topic boundaries in text</li>
                <li>Good for documents with distinct topic shifts</li>
                <li>Based on linguistic principles of lexical cohesion</li>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#651c5d',
          notes: `### 32. TextTiling - Pros
TextTiling is a classic algorithm from computational linguistics that's stood the test of time. Let's explore why this technique remains relevant decades after its invention.

#### Explainable Topic Segmentation
TextTiling uses **topic segmentation via cohesion drops**, and it's **classic and explainable**. Unlike black-box neural approaches, you can actually understand *why* TextTiling chose a particular boundary. It measures lexical cohesion (how related the words are) between text blocks, and when cohesion drops significantly, that's a topic boundary. Think of it like watching the conversation at a dinner party, when everyone stops talking about vacation plans and starts discussing politics, there's a clear shift. TextTiling detects those shifts mathematically by analyzing word repetition and semantic relatedness patterns.

#### Natural Boundary Detection
It **finds natural topic boundaries in text** without requiring explicit markers like headings or section breaks. The algorithm analyzes the text itself to identify where topics change. This is powerful for unstructured content like transcripts, articles, or books where the author didn't provide clear structural cues. The boundaries emerge from the content itself.

#### Topic Shift Excellence
TextTiling is particularly **good for documents with distinct topic shifts**. If your content has clear topical organization but poor structural markers, this is ideal. Think of a news article that discusses multiple related but distinct topics, or a transcript of a presentation that covers several themes sequentially.

#### Linguistic Foundation
It's **based on linguistic principles of lexical cohesion**, which means it has decades of research backing its approach. This isn't someone's random heuristic, it's grounded in understanding how human language actually works. Lexical cohesion theory tells us that related ideas tend to use related vocabulary, and TextTiling leverages that insight elegantly.

This is a sophisticated yet understandable approach that bridges classic NLP with modern chunking needs!`
        },
        {
          id: 33,
          title: '8. TextTiling - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff6eef', padding: '30px' }}>
              <GSAPStaggerList stagger={0.15} animation="fadeIn" delay={0.3}>
                <li>Sensitive to parameters; domain variance</li>
                <li>Can struggle with gradual topic transitions</li>
                <li>Requires preprocessing and tuning</li>
                <li>Performance varies with text style and genre</li>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#651c5d',
          notes: `### 33. TextTiling - Cons
TextTiling is powerful but finicky. Let's be realistic about where this classic algorithm shows its age and limitations.

#### Parameter Sensitivity
TextTiling is **sensitive to parameters** and shows **domain variance** that can be frustrating. You need to configure window sizes, smoothing factors, and threshold values, and these settings that work beautifully for news articles might fail completely for technical documentation. It's like trying to tune a musical instrument, getting it just right requires patience and experimentation. Different text genres have different cohesion patterns, so one-size-fits-all configurations rarely work well.

#### Gradual Transition Struggles
The algorithm **can struggle with gradual topic transitions** where ideas shift slowly rather than abruptly. If a document gradually moves from discussing database design principles to specific SQL optimization techniques, TextTiling might miss the transition because there's no sharp cohesion drop. It's designed to detect valleys between hills, not gentle slopes. This makes it less effective for flowing narrative content where topics blend seamlessly.

#### Configuration Overhead
It **requires preprocessing and tuning** before it works well. You can't just point it at text and expect great results. You need to tokenize properly, potentially remove stopwords, configure the window parameters, and tune the sensitivity. This upfront work is an investment that might not be worth it for simple use cases.

#### Style Dependence
**Performance varies significantly with text style and genre**. Academic papers, news articles, transcripts, and technical docs all have different cohesion patterns. What works for one genre often needs retuning for another. This lack of generalization can be a maintenance burden if you're processing diverse content types.

TextTiling is powerful but demands respect and careful tuning to deliver its best results!`
        },
        {
          id: 34,
          title: '8. TextTiling - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff6eef', padding: '30px' }}>
              <GSAPAnimated animation="bounceIn" delay={0.1} duration={1.0}>
                <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.14} delay={0.3}>
                <li>Variable by tile/window (often 200–800 tokens)</li>
                <li>Based on topic boundaries, not fixed size</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="bounceIn" delay={0.5} duration={1.0}>
                <h3 style={{ color: '#f39c12', marginBottom: '20px', marginTop: '30px' }}>Overlap Size</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.14} delay={0.7}>
                <li>None</li>
                <li>Algorithm itself handles transitions between topics</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="bounceIn" delay={0.9} duration={1.0}>
                <h3 style={{ color: '#e74c3c', marginBottom: '20px', marginTop: '30px' }}>Computational Cost</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.14} delay={1.0}>
                <li>Medium (requires lexical cohesion calculations across text segments)</li>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#651c5d',
          notes: `### 34. TextTiling - Configuration
Let's talk about the practical settings for TextTiling. This algorithm is unique because it's *driven by content*, not by arbitrary size limits.

#### Dynamic Size by Topic
The chunk size is **variable by tile or window**, typically ranging from **200 to 800 tokens**, but the key insight is that it's **based on topic boundaries, not fixed size**. You don't tell TextTiling "make 500-token chunks." Instead, you configure window parameters and let the algorithm find natural boundaries. One topic might be expressed in 250 tokens while another needs 700. This variability is a feature! It means each chunk is topically coherent rather than artificially truncated. Think of it like cutting a cake along the layer lines rather than with a ruler.

#### Zero Overlap Strategy
TextTiling uses **no overlap** between chunks, and here's why that's okay: the **algorithm itself handles transitions between topics** by detecting the cohesion valleys. When you break at a natural topic boundary, the concepts on either side are distinct enough that overlap doesn't add value. It's like chapters in a textbook, Chapter 3 about databases doesn't need to repeat the end of Chapter 2 about data structures because they're different topics. The boundary is clean. If you need context preservation, consider post-processing to add minimal overlap, but the algorithm doesn't include it natively.

#### Processing Requirements
Expect **medium computational cost** because it **requires lexical cohesion calculations across text segments**. For each potential boundary point, the algorithm computes similarity scores between adjacent text blocks, looking for cohesion drops. This involves tokenization, vocabulary analysis, and similarity calculations across sliding windows. It's more expensive than simple splitting but much less expensive than embedding-based approaches. The math is tractable and deterministic.

TextTiling's configurations reflect its linguistic foundation, prioritize semantic boundaries over arbitrary size limits!`
        },
        {
          id: 35,
          title: '8. TextTiling - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff6eef', padding: '30px' }}>
              <GSAPAnimated animation="rotateIn" delay={0.1} duration={0.9}>
                <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.16} delay={0.3}>
                <li>Articles, transcripts with topic shifts</li>
                <li>Academic papers, technical documentation</li>
                <li>Long-form content with distinct sections</li>
                <li>Multi-topic document segmentation</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="rotateIn" delay={0.6} duration={0.9}>
                <h3 style={{ color: '#9b59b6', marginBottom: '20px', marginTop: '30px' }}>Tooling Support</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.16} delay={0.8}>
                <li>NLTK-style implementations</li>
                <li>Open-source repos (DeepTiling)</li>
                <li>Custom Python implementations</li>
                <li>Research-oriented NLP libraries</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="flipCard" delay={1.0} duration={0.9}>
                <h3 style={{ color: '#1abc9c', marginBottom: '20px', marginTop: '30px' }}>Complexity Level</h3>
                <p style={{ fontSize: '1.2rem' }}><strong>Intermediate</strong> - Requires understanding of lexical cohesion and parameter tuning</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#651c5d',
          notes: `### 35. TextTiling - Use Cases & Tools
Where does TextTiling shine, and how can you actually implement it? Let's explore the practical landscape.

#### Ideal Scenarios
TextTiling excels with **articles and transcripts that have topic shifts**. Think of a podcast transcript that moves from discussing one guest's background to their current work to future plans, distinct topics but no structural markers. **Academic papers and technical documentation** work well because they tend to have clear topical organization even when section headers are missing or inconsistent. **Long-form content with distinct sections** is perfect, like a blog post discussing three different case studies sequentially. And for **multi-topic document segmentation** where you need to identify where topics change without relying on formatting, TextTiling is a solid choice.

#### Implementation Resources
The tooling landscape for TextTiling is more academic than commercial. **NLTK-style implementations** exist in various NLP libraries, giving you ready-to-use versions of the classic algorithm. **Open-source repositories like DeepTiling** provide modernized implementations with better defaults. Many teams end up with **custom Python implementations** because the algorithm is well-documented and not overly complex to code from scratch. You'll find it in **research-oriented NLP libraries** rather than production-focused commercial tools. This means you might need to package it yourself for production use.

#### Skill Requirements
This is an **intermediate-level technique** requiring **understanding of lexical cohesion and parameter tuning**. You need to grasp the linguistic concepts behind cohesion analysis and be comfortable experimenting with window sizes, smoothing parameters, and thresholds. It's not plug-and-play, but it's also not rocket science. With some NLP background and willingness to iterate, most developers can make it work effectively.

TextTiling bridges classic computational linguistics with modern chunking needs beautifully!`
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
              <GSAPStaggerList stagger={0.17} animation="slideInLeft" delay={0.2}>
                <li>Uses discourse units (EDUs) and relations for high fidelity semantics</li>
                <li>Captures rhetorical structure and text organization</li>
                <li>Preserves argumentative flow and logical connections</li>
                <li>Excellent for long-form content comprehension</li>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1c653f',
          notes: `### 36. Discourse / RST Chunking - Pros
Now we're entering the cutting edge of linguistic analysis! Discourse and RST (Rhetorical Structure Theory) chunking represents the most sophisticated understanding of how text is organized. Let's explore why this is so powerful.

#### Deep Semantic Understanding
This approach **uses discourse units (EDUs, or Elementary Discourse Units) and relations for high fidelity semantics**. An EDU is roughly a clause, the smallest unit that expresses a complete idea. RST analysis identifies how these EDUs relate to each other through rhetorical relations like "elaboration," "contrast," "cause-effect," or "evidence." This is like understanding not just what sentences say, but *how* they work together to build arguments and narratives. You're capturing the author's communicative strategy, not just the words.

#### Rhetorical Structure Capture
It **captures rhetorical structure and text organization** at a level that no other chunking technique approaches. You understand which parts of the text are claims versus support, which are background versus new information, which are main points versus details. Think of it like understanding the skeleton of an argument, not just the flesh. This structural understanding enables much more intelligent retrieval because you can match queries to the right *type* of content.

#### Argumentative Coherence
RST chunking **preserves argumentative flow and logical connections** between ideas. If sentence A provides evidence for claim B, and claim B supports conclusion C, RST captures those relationships. When you chunk at discourse boundaries, you keep complete argumentative units together. This is invaluable for question answering and reasoning tasks where understanding the logical structure matters.

#### Long-Form Excellence
It's **excellent for long-form content comprehension** where understanding the overall structure is as important as understanding individual parts. Research papers, legal briefs, technical proposals, they all benefit from discourse-aware chunking.

This is the most linguistically sophisticated chunking approach available!`
        },
        {
          id: 37,
          title: '9. Discourse / RST Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#63ffae', padding: '30px' }}>
              <GSAPStaggerList stagger={0.18} animation="slideInRight" delay={0.3}>
                <li>Parsers are computationally heavy</li>
                <li>Not turnkey; requires specialized knowledge</li>
                <li>Lower throughput than simpler methods</li>
                <li>Limited availability of production-ready tools</li>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1c653f',
          notes: `### 37. Discourse / RST Chunking - Cons
The sophistication of RST chunking comes with serious practical challenges. This is not an approach for the faint of heart or tight deadlines!

#### Computational Intensity
**Parsers are computationally heavy**, and that's an understatement. RST parsing requires analyzing syntactic structure, identifying EDU boundaries, determining rhetorical relations between all EDU pairs, and building a complete discourse tree. This is orders of magnitude more expensive than any technique we've discussed. We're talking seconds per document, not milliseconds. For large corpora, the processing time can be prohibitive unless you have serious compute resources.

#### Expertise Barrier
This is **not turnkey and requires specialized knowledge**. You can't just pip install a package and start chunking. You need to understand RST theory, how discourse parsers work, how to interpret their output, and how to tune them for your domain. The learning curve is steep. Most NLP engineers haven't worked with RST, and the pool of expertise is limited. This can be a blocker for teams without deep NLP experience.

#### Performance Trade-offs
Expect **lower throughput than simpler methods** by several orders of magnitude. Fixed-size chunking processes documents in milliseconds. RST parsing might take 10-30 seconds per document. If you're processing millions of documents, this matters enormously. The throughput difference can make or break the feasibility of using this approach at scale.

#### Tooling Scarcity
There's **limited availability of production-ready tools**. Most RST parsers are research-grade implementations, not production-hardened services. They might crash on edge cases, lack proper error handling, or require specific input formats. You'll likely need to do significant engineering to productionize them.

RST chunking delivers unmatched linguistic sophistication, but the practical barriers are substantial!`
        },
        {
          id: 38,
          title: '9. Discourse / RST Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#63ffae', padding: '30px' }}>
              <GSAPAnimated animation="flipCard" delay={0.1} duration={1.1}>
                <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.13} delay={0.4}>
                <li>Combine Elementary Discourse Units (EDUs) to ~150–400 tokens</li>
                <li>Size based on discourse relation boundaries, not fixed counts</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="flipCard" delay={0.6} duration={1.1}>
                <h3 style={{ color: '#f39c12', marginBottom: '20px', marginTop: '30px' }}>Overlap Size</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.13} delay={0.8}>
                <li>None by default (discourse boundaries are respected)</li>
                <li>Optional minimal overlap when coherence requires it</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="flipCard" delay={1.0} duration={1.1}>
                <h3 style={{ color: '#e74c3c', marginBottom: '20px', marginTop: '30px' }}>Computational Cost</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.13} delay={1.1}>
                <li>High (implementation complexity and heavy processing requirements)</li>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1c653f',
          notes: `### 38. Discourse / RST Chunking - Configuration
How do you actually configure RST chunking? The settings here reflect its unique linguistic foundation.

#### EDU-Based Sizing
You **combine Elementary Discourse Units (EDUs) to reach approximately 150 to 400 tokens** per chunk. An individual EDU might be just 5-15 tokens (a single clause), so you're grouping multiple EDUs together based on their rhetorical relationships. If three EDUs form a complete argumentative unit (claim + evidence + elaboration), you keep them together even if the total is only 180 tokens. The **size is based on discourse relation boundaries, not fixed counts**. You're respecting the natural rhetorical structure of the text. Think of it like chapters in a book, they vary in length but each is a complete narrative unit.

#### Boundary-Respecting Overlap
Use **no overlap by default** because **discourse boundaries are naturally respected**. When you break at a discourse boundary (the end of a complete argumentative unit), the next chunk starts a new rhetorical structure. There's a clean conceptual break, so overlap doesn't add value. However, you might use **optional minimal overlap when coherence requires it**, such as when one discourse unit explicitly references the previous one. But this is the exception, not the rule. The discourse structure itself provides the context.

#### Heavy Processing
Expect **high computational cost** due to **implementation complexity and heavy processing requirements**. RST parsing involves syntactic analysis, EDU segmentation, relation classification between all EDU pairs, and tree construction. This is the most expensive chunking approach by far. Plan for seconds-per-document processing times and significant CPU/memory requirements. This is research-grade computational linguistics in production!

These configurations reflect RST's unique approach, linguistic structure trumps arbitrary sizing!`
        },
        {
          id: 39,
          title: '9. Discourse / RST Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#63ffae', padding: '30px' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1} duration={1.0}>
                <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} delay={0.3}>
                <li>Long-form question answering</li>
                <li>Summarization grounding</li>
                <li>Academic papers and legal documents</li>
                <li>Complex reasoning over structured arguments</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="scaleIn" delay={0.6} duration={1.0}>
                <h3 style={{ color: '#9b59b6', marginBottom: '20px', marginTop: '30px' }}>Tooling Support</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} delay={0.8}>
                <li>Research-grade RST parsers</li>
                <li>Discourse segmentation toolkits</li>
                <li>Custom NLP pipelines</li>
                <li>Academic libraries (e.g., NLTK-RST)</li>
              </GSAPStaggerList>
              <GSAPAnimated animation="rotateIn" delay={1.0} duration={0.9}>
                <h3 style={{ color: '#1abc9c', marginBottom: '20px', marginTop: '30px' }}>Complexity Level</h3>
                <p style={{ fontSize: '1.2rem' }}><strong>Advanced</strong> - Requires specialized expertise and implementation difficulty</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1c653f',
          notes: `### 39. Discourse / RST Chunking - Use Cases & Tools
When is the computational and intellectual investment in RST chunking actually worthwhile? Let's identify the high-value scenarios.

#### Premium Applications
RST chunking excels at **long-form question answering** where understanding argumentative structure helps select the right evidence chunks. If someone asks "What evidence supports the authors' main claim?" RST helps you identify claim-evidence relationships. **Summarization grounding** is another killer app, when generating summaries, knowing which EDUs are main points versus supporting details is invaluable. **Academic papers and legal documents** are natural fits because they have explicit rhetorical structure, introductions support claims, methodology sections elaborate on procedures, and conclusions synthesize arguments. Finally, **complex reasoning over structured arguments** where you need to understand logical relationships, not just keyword matches, benefits enormously from discourse-aware chunking.

#### Implementation Landscape
The tooling is academic-grade, expect challenges. **Research-grade RST parsers** like DPLP or neural discourse parsers exist but require significant setup. **Discourse segmentation toolkits** provide EDU boundary detection as a first step. Most production use requires **custom NLP pipelines** that you build and maintain yourself. **Academic libraries like NLTK-RST** provide foundations but aren't production-ready. You'll need serious NLP engineering to deploy this.

#### Expert-Level Technique
This is an **advanced technique** requiring **specialized expertise and significant implementation difficulty**. You need deep understanding of RST theory, experience with discourse parsing, and strong NLP engineering skills. This is not a weekend project! Expect weeks or months to get it working well. Only pursue this if the value justifies the investment.

RST chunking is the pinnacle of linguistic sophistication, use it when nothing else will suffice!`
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
              <GSAPStaggerList stagger={0.16} animation="slideInBottom" delay={0.2}>
                <li>Honors tokenizer limits; predictable fit</li>
                <li>Avoids truncation by embedding models</li>
                <li>Matches exact token windows of models</li>
                <li>More accurate size estimation than characters</li>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#656a1c',
          notes: `### 40. Token-Aware Chunking - Pros
Let's shift gears to a more practical, engineering-focused approach. Token-aware chunking addresses a real problem: making sure your chunks actually fit in your models' context windows!

#### Tokenizer Alignment
Token-aware chunking **honors tokenizer limits** and provides **predictable fit** for your models. This is huge! Instead of guessing "is 500 characters about 128 tokens?" you *know* exactly how many tokens each chunk contains because you're using the actual tokenizer. Different models tokenize differently, "GPT" in GPT-3.5's tokenizer might be one token, while in another tokenizer it's three. Token-aware chunking eliminates this uncertainty by using the same tokenizer that your embedding model uses.

#### Truncation Prevention
It **avoids truncation by embedding models**, which is a silent killer of quality. Many embedding models have hard limits like 512 tokens. If you send 600 tokens, they silently truncate the last 88 tokens, losing information and degrading retrieval quality. You might not even notice this is happening! Token-aware chunking ensures every chunk fits perfectly within the model's window, no truncation, no loss.

#### Exact Window Matching
It **matches the exact token windows of models** you're using. If your embedding model performs best with 256-token inputs, you can chunk at exactly 256 tokens. If your retrieval model has a 1024-token limit, you can chunk at 1024. This precision ensures you're using your models optimally, not leaving capacity unused or exceeding limits.

#### Accuracy Over Characters
It provides **more accurate size estimation than character-based methods**. A character count might suggest your chunk is small enough, but after tokenization it exceeds limits. Token-aware chunking measures what actually matters: tokens, not characters or words.

This is engineering pragmatism at its finest, solving real production problems!`
        },
        {
          id: 41,
          title: '10. Token-Aware Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#eeff82', padding: '30px' }}>
              <GSAPStaggerList stagger={0.12} delay={0.2}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                  <li>May split syntax/meaning; tokenizer variance</li>
                  <li>Different models tokenize differently</li>
                  <li>Requires tokenizer access</li>
                  <li>Not aligned with semantic boundaries</li>
                </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#656a1c',
          notes: `### 41. Token-Aware Chunking - Cons
Now let's talk about the downsides of token-aware chunking, because like everything in engineering, there are trade-offs.
#### The Splitting Problem
The biggest issue is that **tokens don't care about meaning**. Think about it this way, tokenizers are like scissors that cut based on character patterns, not ideas. They might split right in the middle of a variable name or a sentence, breaking the semantic flow. It's like cutting a book based on word count instead of chapter endings. You might end up with half a sentence in one chunk and the other half in another.
#### Model Variance
Here's something that surprises many people: **different models tokenize differently**. OpenAI's GPT-4 uses a different tokenizer than Claude or LLaMA. What counts as 512 tokens in one model might be 600 in another! This means if you switch embedding models down the road, your carefully calibrated chunk sizes might suddenly become inefficient.
#### Dependencies
You also **need access to the tokenizer** itself, which adds a dependency to your pipeline. Some tokenizers require API calls, others need libraries installed. It's not a huge barrier, but it's one more thing to manage and one more potential failure point.
#### Semantic Misalignment
Finally, token boundaries **ignore semantic structure**. They don't understand that a paragraph is ending or that a new topic is starting. They just count tokens. So while you get predictable sizes, you lose that natural flow that comes from respecting the actual meaning and structure of the text.
This is why token-aware chunking works best when combined with other strategies that can add back some semantic awareness.`
        },
        {
          id: 42,
          title: '10. Token-Aware Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#eeff82', padding: '30px' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.15} duration={0.7}>
                <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.1} delay={0.3}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>256–1024 tokens (match embedding model)</li>
                  <li>Should align with context window of target model</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="slideInLeft" delay={0.5} duration={0.7}>
                <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.1} delay={0.7}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>10–20% (50–100 tokens typical)</li>
                  <li>Helps preserve context across token boundaries</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="slideInLeft" delay={0.9} duration={0.7}>
                <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.05} duration={0.6}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                  <li>Low (simple implementation complexity and minimal processing)</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#656a1c',
          notes: `### 42. Token-Aware Chunking - Configuration
Let's get practical and talk about the recommended settings for token-aware chunking. These are battle-tested defaults from production systems.
#### Best Chunk Size
For chunk size, the sweet spot is **256 to 1024 tokens**. Now, this isn't arbitrary. The key principle here is to **match your embedding model's context window**. If you're using OpenAI's text-embedding-ada-002, that's 8192 tokens, but you typically want chunks smaller than the full window. Around 512 tokens is a common choice because it's large enough to capture meaningful context but small enough to stay focused.
Think of it like Goldilocks: too small and you lose context, too big and you dilute the signal with noise. The exact number depends on your use case. Technical documentation might work better with larger chunks like 800-1024 tokens, while conversational content might prefer 256-512.
#### Overlap Size  
For overlap, aim for **10 to 20 percent**, which typically translates to **50 to 100 tokens**. This overlap acts as a safety net. When you cut text into chunks, important context might sit right at the boundary. The overlap ensures that boundary information appears in both neighboring chunks, so you don't lose critical connections.
#### Computational Cost
The beauty of token-aware chunking is its **low computational cost**. You're basically just counting tokens and slicing text. No heavy NLP processing, no machine learning models running. It's fast, predictable, and scales well even to massive document collections.
These configurations give you a solid starting point that works for most RAG applications right out of the box.`
        },
        {
          id: 43,
          title: '10. Token-Aware Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#eeff82', padding: '30px' }}>
              <GSAPAnimated animation="bounceIn" delay={0.1} duration={0.8}>
                <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.08} delay={0.35}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>Any embedding pipeline; strict window budgets</li>
                  <li>When using specific models with token limits</li>
                  <li>Cross-model compatibility</li>
                  <li>Production RAG systems</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="bounceIn" delay={0.6} duration={0.8}>
                <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.08} delay={0.85}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>Tiktoken (OpenAI)</li>
                  <li>Hugging Face tokenizers</li>
                  <li>LangChain Token splitter</li>
                  <li>spaCy tokenizers</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="scaleIn" delay={1.1} duration={0.7}>
                <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
                <p style={{ fontSize: '1.2rem' }}><strong>Beginner</strong> - Simple implementation with minimal expertise required</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#656a1c',
          notes: `### 43. Token-Aware Chunking - Use Cases & Tools
Now let's explore where token-aware chunking really shines and the tools that make it easy to implement.
#### Use Cases
Token-aware chunking is incredibly versatile. It works for **any embedding pipeline** where you need predictable chunk sizes. This makes it perfect for production RAG systems where you have **strict token budgets** or context window limits. Think of scenarios like OpenAI's embeddings where you pay per token, or when you're constrained by model input limits.
It's also your go-to choice for **cross-model compatibility**. If you might switch between different LLMs or embedding models, token-aware chunking gives you a consistent baseline. You're not tied to any particular model's quirks or behaviors.
#### Tooling Support
The ecosystem for token-aware chunking is mature and well-supported. Let's walk through your options. **Tiktoken** is OpenAI's official tokenizer library. It's fast, written in Rust under the hood, and gives you exact token counts for GPT models. If you're using OpenAI embeddings, this is your best friend.
**Hugging Face tokenizers** cover pretty much every other model out there. They support BERT 👉 'burt', RoBERTa, and hundreds of other models. The library is battle-tested and highly optimized.
**LangChain** provides a TokenTextSplitter that handles the splitting logic for you. It integrates seamlessly with their broader RAG framework, so you're not reinventing the wheel.
Even **spaCy** 👉 'spay-see' includes tokenizers, though they're more focused on linguistic tokenization rather than model-specific tokens.
#### Complexity Level
This is rated as **Beginner** level, and for good reason. You don't need deep NLP expertise or complex algorithms. It's basically counting and slicing, which makes it a perfect starting point for anyone new to RAG systems.
This is your foundational technique that you'll use again and again across different projects.`
        },
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
              <GSAPStaggerList stagger={0.15} delay={0.2}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                  <li>Strong alignment to document navigation; great for docs sites</li>
                  <li>Preserves document hierarchy and structure</li>
                  <li>Makes retrieval context clearer with heading metadata</li>
                  <li>Natural semantic boundaries for content</li>
                </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1c5265',
          notes: `### 44. Heading / Title Anchor Chunking - Pros
Moving on to technique number 11, heading-based chunking. This is one of my favorite approaches for structured documents because it respects the author's original intent.
#### Document Navigation Alignment
The biggest advantage here is **strong alignment to how documents are naturally organized**. When an author writes a technical document or README, they deliberately create sections with headings. These headings mark topic boundaries, create logical groupings, and guide the reader through the content. By chunking on headings, you're essentially saying "I trust the author knew what they were doing." This makes it **perfect for documentation sites**, API references, and any content where structure matters.
#### Hierarchy Preservation
Heading-based chunking **preserves the document hierarchy**. You maintain that tree structure from H1 down to H2 and H3 sections. This means when someone searches for information, you can return not just the relevant chunk but also its position in the document's logical structure. Think of it like breadcrumbs: "Installation Guide > Prerequisites > Python Setup." That context is gold for understanding.
#### Enhanced Retrieval Context
Every chunk comes with **built-in metadata** from the heading itself. You know exactly what topic each chunk covers because the heading tells you! This makes filtering and ranking much more precise during retrieval. You're not guessing about relevance; the structure makes it explicit.
#### Semantic Boundaries
Headings naturally mark **semantic boundaries**. When an author starts a new section, they're signaling a topic shift. By respecting these boundaries, your chunks are inherently more coherent and topically focused than arbitrary splits would be.
This approach works beautifully when your documents have clear, consistent heading structures.`
        },
        {
          id: 45,
          title: '11. Heading / Title Anchor Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7adcff', padding: '30px' }}>
              <GSAPStaggerList stagger={0.1} delay={0.25}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                  <li>Requires clean headings; won't work for unstructured text</li>
                  <li>Uneven chunk sizes based on section length</li>
                  <li>Some sections may be too large for context windows</li>
                  <li>Different heading styles may cause inconsistencies</li>
                </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1c5265',
          notes: `### 45. Heading / Title Anchor Chunking - Cons
Of course, heading-based chunking isn't perfect. Let's talk about when it breaks down and what challenges you'll face.
#### Clean Structure Requirement
The fundamental limitation is that you **need clean, consistent headings**. If your documents are free-flowing prose without clear structure, like novels or stream-of-consciousness writing, this approach simply won't work. You can't chunk on headings that don't exist! Even worse is inconsistent heading usage, where one author uses H2 for major sections and another uses H3. Your chunking strategy falls apart.
#### Uneven Chunk Sizes
Here's a practical problem: **sections vary wildly in length**. Your "Introduction" might be 50 words while your "Implementation Details" section runs 2000 words. This creates chunks that range from tiny to massive, which makes embedding and retrieval less predictable. Some chunks might not have enough context, while others have way too much.
#### Context Window Overflow
Related to the size issue, **some sections might exceed your model's context window**. If someone writes a comprehensive 3000-token section under a single heading, and your embedding model maxes out at 512 tokens, you've got a problem. You'd need to sub-chunk that section, which adds complexity.
#### Heading Style Inconsistencies
Different authors and different documents use **different heading conventions**. Markdown headings are clean, but HTML might mix heading levels with CSS classes. Some documents use ALL CAPS for headings, others use title case. These variations require preprocessing and normalization, which adds friction to your pipeline.
Despite these challenges, for well-structured documentation, the benefits usually outweigh the drawbacks.`
        },
        {
          id: 46,
          title: '11. Heading / Title Anchor Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7adcff', padding: '30px' }}>
              <GSAPAnimated animation="slideInRight" delay={0.1} duration={0.8}>
                <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>
                  Best Chunk Size
                  <MermaidPopover
                    diagram={`graph TD
    A[Document] --> B[H1: Introduction<br/>200 tokens]
    A --> C[H1: Setup<br/>400 tokens]
    A --> D[H1: Usage<br/>1200 tokens]
    C --> E[H2: Prerequisites<br/>150 tokens]
    C --> F[H2: Installation<br/>250 tokens]
    D --> G[H2: Basic<br/>600 tokens]
    D --> H[H2: Advanced<br/>600 tokens]
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#ffd700
    style E fill:#e1bee7
    style F fill:#e1bee7
    style G fill:#e1bee7
    style H fill:#e1bee7`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.08} delay={0.35}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>Section-bounded (200–1200 tokens)</li>
                  <li>Varies based on document structure and heading density</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="slideInRight" delay={0.55} duration={0.8}>
                <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.08} delay={0.7}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>0–5% between sections</li>
                  <li>Sometimes includes parent heading for context</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="slideInRight" delay={0.9} duration={0.8}>
                <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.05} duration={0.6}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                  <li>Low–Medium (implementation complexity and processing requirements)</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1c5265',
          notes: `### 46. Heading / Title Anchor Chunking - Configuration
Let's dial in the practical settings for heading-based chunking so you can implement this effectively.
#### Best Chunk Size
Unlike fixed-size chunking, heading-based chunks are **section-bounded**, meaning the chunk size is determined by your document structure rather than an arbitrary number. In practice, sections typically range from **200 to 1200 tokens**. That's quite a range, right? A short "Overview" section might be 200 tokens, while a detailed "API Reference" section could hit 1200 tokens or more.
The key insight is that **heading density** affects your chunk sizes. Documents with many subsections create smaller, more focused chunks. Documents with sparse headings create larger, more comprehensive chunks. Think of a GitHub README with tons of H2 and H3 sections versus a blog post with just a few main headings.
```mermaid
graph TD
    A[Document] --> B[H1: Introduction<br/>200 tokens]
    A --> C[H1: Setup<br/>400 tokens]
    A --> D[H1: Usage<br/>1200 tokens]
    C --> E[H2: Prerequisites<br/>150 tokens]
    C --> F[H2: Installation<br/>250 tokens]
    D --> G[H2: Basic<br/>600 tokens]
    D --> H[H2: Advanced<br/>600 tokens]
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#ffd700
    style E fill:#e1bee7
    style F fill:#e1bee7
    style G fill:#e1bee7
    style H fill:#e1bee7
```
#### Overlap Size
For overlap, you typically want **0 to 5 percent**, which is minimal. Why so low? Because headings already provide natural boundaries. However, there's a clever trick: you can **include the parent heading** with each sub-section chunk. This gives context without bloating storage. For example, if you have "Installation > Linux Setup", you'd include the "Installation" heading with the "Linux Setup" content.
#### Computational Cost
The implementation sits at **Low to Medium** complexity. You need a heading parser, which adds a bit more logic than simple character splitting, but it's still straightforward. Markdown is particularly easy since headings follow a clear pattern with hash marks.
This configuration gives you semantically meaningful chunks that align with how humans naturally structure information.`
        },
        {
          id: 47,
          title: '11. Heading / Title Anchor Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7adcff', padding: '30px' }}>
              <GSAPAnimated animation="rotateIn" delay={0.1} duration={0.9}>
                <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} delay={0.35}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>Markdown documentation and README files</li>
                  <li>API references and technical docs sites</li>
                  <li>Knowledge bases with clear structure</li>
                  <li>Wikis and developer documentation</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="rotateIn" delay={0.6} duration={0.9}>
                <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} delay={0.85}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>Markdown heading parsers</li>
                  <li>GitHub Flavored Markdown (GFM) anchors</li>
                  <li>Static site generators (Jekyll, MkDocs)</li>
                  <li>LangChain's MarkdownTextSplitter</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="scaleIn" delay={1.1} duration={0.7}>
                <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
                <p style={{ fontSize: '1.2rem' }}><strong>Beginner–Intermediate</strong> - Requires basic expertise and implementation</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1c5265',
          notes: `### 47. Heading / Title Anchor Chunking - Use Cases & Tools
Now let's explore the ideal scenarios for heading-based chunking and the tooling ecosystem that supports it.
#### Use Cases
This technique absolutely shines for **Markdown documentation and README files**. Think about every GitHub repo you've seen, they all have structured READMEs with clear headings. By chunking on those headings, you preserve the logical flow that the maintainers carefully crafted.
**API references and technical docs sites** are another perfect fit. These documents are inherently hierarchical, with sections for endpoints, parameters, examples, and error codes. Each section is a natural chunk that contains everything you need to know about one specific aspect.
**Knowledge bases** with clear structure benefit immensely. If you're building a corporate knowledge system or a help center, the articles likely already have headings that organize the content logically. Why fight that structure? Embrace it!
**Wikis and developer documentation** follow similar patterns. Whether it's a company wiki or open-source docs, the heading structure provides built-in navigation and organization.
#### Tooling Support
The tools here are mature and widely available. **Markdown heading parsers** are plentiful in every programming language. Simple regex or dedicated libraries can extract heading hierarchies in milliseconds.
**GitHub Flavored Markdown**, or GFM, includes automatic anchor generation for headings. This means you can even create deep links to specific chunks in your original documents, which is fantastic for user experience.
**Static site generators** like Jekyll and MkDocs are built around heading-based navigation. They already parse and organize content by headings, so integrating chunking into these workflows is natural.
**LangChain's MarkdownTextSplitter** provides ready-made functionality specifically for this use case. It handles the parsing, respects heading boundaries, and even lets you customize how it handles different heading levels.
#### Complexity Level
This sits at **Beginner to Intermediate**. If you're comfortable with basic text parsing, you can implement this. The challenge comes from handling edge cases and different markdown flavors, but nothing insurmountable.
This is one of those techniques where the structure does most of the work for you.`
        },
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
              <GSAPStaggerList stagger={0.18} delay={0.15}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                  <li>Preserves lists, code blocks, tables, and other HTML/Markdown elements</li>
                  <li>Maintains document structure and hierarchy</li>
                  <li>Rich metadata extraction from headings, tags, and attributes</li>
                  <li>Natural boundaries align with content meaning</li>
                </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#5c1c65',
          notes: `### 48. Markdown / HTML Structure Chunking - Pros
Let's dive into technique 12, which takes the heading-based approach and supercharges it by considering the full structural markup of documents.
#### Element Preservation
The magic here is that you **preserve special elements intact**. Think about code blocks, tables, bullet lists, numbered lists, and blockquotes. These aren't just text; they have semantic meaning tied to their formatting. A code block split in half becomes useless. A table with missing rows loses its data integrity. By chunking based on HTML or Markdown structure, you keep these elements whole and meaningful.
#### Structure and Hierarchy
Just like heading-based chunking, you **maintain the document's hierarchical organization**, but now you're also respecting inline structure. Paragraphs stay together, list items remain grouped, and nested elements maintain their relationships. It's like preserving the DOM tree or Markdown AST 👉 'abstract syntax tree' of your content.
#### Rich Metadata
Here's where it gets really powerful: **metadata extraction from the markup itself**. HTML elements have classes, IDs, and data attributes. Markdown has syntax that indicates emphasis, links, and image captions. All of this becomes metadata you can use during retrieval. Want to prioritize chunks with code examples? Easy, just check for code block elements. Need chunks with specific CSS classes? You've got that information.
#### Meaningful Boundaries
The structure provides **natural semantic boundaries**. A paragraph element is a complete thought. A list is a complete enumeration. A section with a heading is a complete topic. By chunking along these structural lines, you get semantically coherent units without having to guess where meaning starts and stops.
This approach is perfect when your documents are already well-marked up and you want to leverage that investment in structure.`
        },
        {
          id: 49,
          title: '12. Markdown / HTML Structure Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ee77ff', padding: '30px' }}>
              <GSAPStaggerList stagger={0.14} delay={0.2}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem' }}>
                  <li>Requires well-structured source documents</li>
                  <li>Boilerplate/noise unless filtered</li>
                  <li>HTML parsing can be complex/brittle</li>
                  <li>Format-specific implementation needed</li>
                </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#5c1c65',
          notes: `### 49. Markdown / HTML Structure Chunking - Cons
Now let's be real about the challenges you'll face with structure-based chunking.
#### Structure Dependency
The fundamental requirement is **well-structured source documents**. If your HTML is malformed with unclosed tags, missing elements, or inconsistent nesting, parsers will struggle or produce garbage. Similarly, if your Markdown doesn't follow consistent conventions, you'll get unreliable results. You're at the mercy of the document quality, which in the real world can be quite variable.
#### Boilerplate and Noise
Web pages especially are full of **boilerplate content**: navigation bars, footers, sidebars, cookie banners, ads. All of this gets parsed along with your actual content unless you explicitly filter it out. This means you need preprocessing logic to identify and remove noise, which adds complexity. Without filtering, you'd be embedding and retrieving chunks about "Click here to accept cookies!" which wastes resources and pollutes your search results.
#### Parsing Complexity
**HTML parsing can be brittle**. Real-world HTML is messy, browser-specific, and often relies on JavaScript to render properly. You might use BeautifulSoup or similar tools, but they have to make assumptions about malformed markup. Edge cases abound, and each one requires handling. Markdown is simpler but still has variations like GitHub Flavored Markdown, CommonMark, and custom extensions.
#### Format-Specific Implementation
You need **separate implementations for different formats**. Your HTML parser won't work for Markdown, and vice versa. If you're dealing with multiple document types, you need a chunking pipeline that can route to the appropriate parser. This multiplies maintenance burden and testing surface area.
Despite these challenges, the payoff in chunk quality often justifies the extra engineering effort.`
        },
        {
          id: 50,
          title: '12. Markdown / HTML Structure Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ee77ff', padding: '30px' }}>
              <GSAPAnimated animation="flipCard" delay={0.1} duration={1.0}>
                <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>
                  Best Chunk Size
                  <MermaidPopover
                    diagram={`graph LR
    A[HTML Page] --> B[Section: 600 tokens]
    A --> C[Div: 300 tokens]
    A --> D[Article: 700 tokens]
    B --> E[Paragraph: 150 tokens]
    B --> F[Code Block: 200 tokens]
    C --> G[List: 100 tokens]
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784
    style E fill:#e1bee7
    style F fill:#ffd700
    style G fill:#e1bee7`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.09} delay={0.4}>
                <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>Element-grouped 300–900 tokens</li>
                  <li>Varies by element type (paragraph vs. section)</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="flipCard" delay={0.65} duration={1.0}>
                <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.09} delay={0.9}>
                <ul style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>0–10% between elements or sections</li>
                  <li>Often header/context overlap</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="fadeIn" delay={1.1} duration={0.7}>
                <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Medium (parser overhead and DOM/AST processing requirements)</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5c1c65',
          notes: `### 50. Markdown / HTML Structure Chunking - Configuration
Let's get into the practical configuration for structure-based chunking to help you implement this effectively.
#### Best Chunk Size
Chunks are **element-grouped**, typically ranging from **300 to 900 tokens**. What does element-grouped mean? Instead of counting characters or tokens arbitrarily, you're grouping based on structural elements. A single paragraph might be 150 tokens, perfect for one chunk. A section element containing multiple paragraphs might be 600 tokens, still a great chunk. A complex article with code examples could hit 900 tokens.
The key is that **element type determines size**. Small elements like paragraphs and list items create small chunks. Larger container elements like sections and articles create bigger chunks. You might configure your chunker to combine small adjacent elements like multiple paragraphs until you reach a minimum size, or to split large elements that exceed a maximum threshold.
```mermaid
graph LR
    A[HTML Page] --> B[Section: 600 tokens]
    A --> C[Div: 300 tokens]
    A --> D[Article: 700 tokens]
    B --> E[Paragraph: 150 tokens]
    B --> F[Code Block: 200 tokens]
    C --> G[List: 100 tokens]
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784
    style E fill:#e1bee7
    style F fill:#ffd700
    style G fill:#e1bee7
```
#### Overlap Size
Overlap is typically **0 to 10 percent** between structural elements. Since elements already have natural boundaries, you don't need as much overlap as with arbitrary splitting. However, a common pattern is to include **header or context information** with each chunk. For example, include the parent section's heading with each sub-element's content. This gives context without literal text duplication.
#### Computational Cost
The cost is **Medium** due to **parser overhead**. You need to parse HTML into a DOM 👉 'document object model' or Markdown into an AST 👉 'abstract syntax tree'. This parsing takes time and memory, especially for large documents. However, parsers are well-optimized and this overhead is usually acceptable for the quality improvement you gain.
This configuration leverages document structure to create semantically rich, meaningful chunks.`
        },
        {
          id: 51,
          title: '12. Markdown / HTML Structure Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ee77ff', padding: '30px' }}>
              <GSAPAnimated animation="slideInBottom" delay={0.15} duration={0.8}>
                <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.1} delay={0.35}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>Web pages, docs portals, blogs</li>
                  <li>Markdown documentation repositories</li>
                  <li>Technical blogs and wikis</li>
                  <li>API documentation</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="slideInBottom" delay={0.6} duration={0.8}>
                <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.1} delay={0.8}>
                <ul style={{ lineHeight: '2', fontSize: '1.2rem', marginBottom: '30px' }}>
                  <li>BeautifulSoup, jsdom for HTML</li>
                  <li>LangChain HTMLTextSplitter</li>
                  <li>Markdown parsers (marked, remark)</li>
                  <li>Documentation frameworks</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="scaleIn" delay={1.05} duration={0.7}>
                <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
                <p style={{ fontSize: '1.2rem' }}><strong>Intermediate</strong> - Requires HTML/Markdown parsing knowledge and structure handling</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#5c1c65',
          notes: `### 51. Markdown / HTML Structure Chunking - Use Cases & Tools
Let's explore where structure-based chunking excels and the tools that make implementation practical.
#### Use Cases
This approach is perfect for **web pages, documentation portals, and blogs**. Any content published to the web typically has HTML structure, and leveraging that structure during chunking preserves the author's formatting intentions. Think of Medium articles, company blogs, or news sites where headings, lists, and code blocks carry important meaning.
**Markdown documentation repositories** are another sweet spot. Open-source projects, technical writing platforms, and knowledge bases often use Markdown with consistent structural conventions. By parsing the Markdown AST, you maintain lists, code fences, and heading hierarchies.
**Technical blogs and wikis** benefit immensely because they mix narrative content with code snippets, tables, and structured lists. Keeping these elements intact makes the retrieved chunks far more useful than splitting them arbitrarily would.
**API documentation** sites often have consistent HTML templates with specific classes for endpoints, parameters, and response formats. Structure-based chunking lets you identify and extract these patterns reliably.
#### Tooling Support
The tooling ecosystem is mature. **BeautifulSoup** for Python and **jsdom** for JavaScript are the industry standards for HTML parsing. They handle malformed HTML gracefully and provide intuitive APIs for navigating the DOM tree.
**LangChain's HTMLTextSplitter** wraps these parsers and provides chunking logic out of the box. It handles common patterns like splitting on heading tags while preserving element boundaries.
For Markdown, parsers like **marked** and **remark** convert Markdown into structured ASTs that you can traverse programmatically. This makes it straightforward to identify sections, code blocks, and other elements.
**Documentation frameworks** like MkDocs, Docusaurus, and Sphinx already parse structure for rendering, and you can tap into their parsing logic for chunking purposes.
#### Complexity Level
This sits at **Intermediate** complexity. You need to understand HTML/Markdown parsing, handle edge cases in real-world documents, and potentially filter out noise. It's more involved than simple text splitting but not as complex as semantic or graph-based approaches.
The investment in parsing pays dividends in chunk quality and retrieval accuracy.`
        },
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
              <GSAPStaggerList stagger={0.16} delay={0.2}>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Extracts tables intact; supports downstream parsing</li>
                  <li>Preserves tabular relationships and formats</li>
                  <li>Enables structured data retrieval</li>
                  <li>Maintains row/column associations</li>
                </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#65581c',
          notes: `### 52. Table-Aware Chunking - Pros
Moving to technique 13, table-aware chunking. This is a specialized approach that's critical when your documents contain structured data in tables.
#### Intact Table Extraction
The primary benefit is **extracting tables as complete units**. Tables are fundamentally different from narrative text. They have rows, columns, headers, and cell relationships that define their meaning. Split a table across multiple chunks and you lose the ability to understand those relationships. Table-aware chunking recognizes tables as atomic units and keeps them together, which means downstream systems can actually parse and query the data meaningfully.
#### Relationship Preservation
Tables encode **relationships between data points**. Each row might represent an entity, each column an attribute. The intersection of row and column has specific meaning. Think of a pricing table: Product A costs X dollars and has Y features. Break that table apart and you might retrieve the price without the product name, which is useless. By preserving the full table structure, you maintain these critical associations.
#### Structured Data Retrieval
When users ask questions about data, they often need **structured answers**. "What's the performance benchmark for Model X?" If that data lives in a table, you want to retrieve the entire table or at least the relevant rows and columns together. Table-aware chunking enables this by giving you retrievable units that contain queryable structure.
#### Row and Column Integrity
The approach **maintains the integrity of rows and columns**. Headers stay with their data. Related cells remain grouped. This is essential for any kind of data analysis or comparison task. You can even convert tables to more queryable formats like JSON or SQL during chunking, making them even more useful for retrieval.
This technique is non-negotiable when working with data-heavy documents like reports and specifications.`
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

