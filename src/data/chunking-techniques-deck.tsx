import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

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
          title: '26 Chunking Techniques & Cheat Sheet',
          content: (
            <div style={{ textAlign: 'left' }}>
          <h2 style={{ marginBottom: '40px' }}>Practical guidance, defaults, and trade-offs for high-quality retrieval in RAG and NLP applications</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', marginTop: '50px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <SvgIcon iconName="duo-file" sizeName="4x" style={{ color: '#3498db' }} />
              <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Document</p>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <SvgIcon iconName="duo-scissors" sizeName="4x" style={{ color: '#f39c12' }} />
              <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Chunking</p>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <SvgIcon iconName="duo-cubes" sizeName="4x" style={{ color: '#2ecc71' }} />
              <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Retrievable Units</p>
            </div>
          </div>
          <p style={{ marginTop: '60px', fontSize: '0.9em', opacity: 0.8 }}>
            Technical Documentation • November 6, 2025
          </p>
        </div>
      ),
      backgroundColor: '#2C3E50',
      notes: 'Introduction: 26 comprehensive chunking techniques for RAG and NLP applications'
    },
        {
          id: 2,
          title: 'What is Chunking and Why It Matters',
          icon: { name: 'duo-scissors' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#3498db', marginBottom: '15px' }}>
              <SvgIcon iconName="duo-book-open" sizeName="1x" darkModeInvert={true} />
              Definition
            </h3>
            <p style={{ fontSize: '1.1em', lineHeight: '1.6' }}>
              Chunking is the process of breaking large documents into <strong>smaller, retrievable, semantically coherent units</strong> that preserve context while fitting within model constraints.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-check-circle" sizeName="1x" darkModeInvert={true} />
                Why It's Important
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li>Fits content within model context windows</li>
                <li>Increases retrieval precision and relevance</li>
                <li>Reduces computational cost and latency</li>
                <li>Combats "lost-in-the-middle" effect in LLMs</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12', marginTop: '15px', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-sliders" sizeName="1x" darkModeInvert={true} />
                Key Variables
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li>Chunk size (tokens, sentences, paragraphs)</li>
                <li>Overlap between chunks</li>
                <li>Boundary determination (semantic vs. structural)</li>
                <li>Content modality (text, tables, code, audio)</li>
                <li>Metadata enrichment</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9b59b6', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Desired Outcomes
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
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
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#34495E',
      notes: 'Chunking definition, importance, key variables, and desired outcomes for RAG systems'
        },
        {
          id: 3,
          title: 'Overview of 26 Techniques',
          icon: { name: 'duo-list-check' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.65em', color: '#4ad786' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
            <div>
              <h4 style={{ color: '#3498db', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ruler" sizeName="1x" darkModeInvert={true} />
                Fixed/Token-based (1-3)
              </h4>
              <ul style={{ lineHeight: '1.5', fontSize: '0.95em', color: '#3498db' }}>
                <li>Fixed-Size Chunking</li>
                <li>Sliding Window Chunking</li>
                <li>Token-Aware Chunking</li>
              </ul>
              <h4 style={{ color: '#2ecc71', marginTop: '12px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-paragraph" sizeName="1x" darkModeInvert={true} />
                Sentence/Paragraph-based (4-6)
              </h4>
              <ul style={{ lineHeight: '1.5', fontSize: '0.95em', color: '#2ecc71' }}>
                <li>Sentence-Level Chunking</li>
                <li>Paragraph-Level Chunking</li>
                <li>Windowed Sentence Grouping</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#9b59b6', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-sitemap" sizeName="1x" darkModeInvert={true} />
                Structure-aware (7-13)
              </h4>
              <ul style={{ lineHeight: '1.5', fontSize: '0.95em', color: '#9b59b6' }}>
                <li>Structure-Aware Chunking</li>
                <li>Content-Aware Chunking</li>
                <li>Heading/Title Anchor Chunking</li>
                <li>Markdown/HTML Structure Chunking</li>
                <li>Table-Aware Chunking</li>
                <li>Code-Aware Chunking</li>
                <li>Page-Preservation Chunking</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#f39c12', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-brain" sizeName="1x" darkModeInvert={true} />
                Semantic/Adaptive (14-19)
              </h4>
              <ul style={{ lineHeight: '1.5', fontSize: '0.95em', color: '#f39c12' }}>
                <li>Semantic Chunking (Embedding-Based)</li>
                <li>TextTiling</li>
                <li>Discourse/RST Chunking</li>
                <li>Graph-Based Semantic Chunking</li>
                <li>Recursive Character Text Splitting</li>
                <li>Adaptive Length Chunking</li>
              </ul>
              <h4 style={{ color: '#e67e22', marginTop: '12px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-wand-sparkles" sizeName="1x" darkModeInvert={true} />
                Special-Purpose (20-26)
              </h4>
              <ul style={{ lineHeight: '1.5', fontSize: '0.95em', color: '#e67e22' }}>
                <li>Summarization-Based Chunking</li>
                <li>Audio/ASR Time-Based Chunking</li>
                <li>Speaker-Turn Chunking</li>
                <li>QA-Focused Chunking</li>
                <li>Caption + Context Chunking</li>
                <li>Metadata-Aware Chunking</li>
                <li>Hybrid Chunking</li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '1.1em', padding: '12px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px' }}>
            <strong>Each technique includes:</strong> Pros, Cons, Best Chunk Size, Overlap Size, Computational Cost, Use Cases, Tooling Support, and Complexity Level
          </p>
        </div>
      ),
      backgroundColor: '#11512c',
      notes: '26 techniques organized into 5 categories: Fixed/Token, Sentence/Paragraph, Structure-aware, Semantic/Adaptive, and Special-Purpose'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#c985ff', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Simple, predictable, fast; baseline for A/B tests</li>
                <li>Consistent chunk sizes for embedding models</li>
                <li>Easy to implement and debug</li>
                <li>Predictable storage requirements</li>
              </ul>
            </div>
          ),
          backgroundColor: '#521e7b',
          notes: 'Fixed-Size Chunking Pros: Simple, predictable, fast baseline with consistent chunk sizes'
        },
        {
          id: 5,
          title: '1. Fixed-Size Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#c985ff', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Ignores semantics; may split sentences</li>
                <li>Risk of context dilution at boundaries</li>
                <li>Related information may span chunks</li>
                <li>Suboptimal for structured documents</li>
              </ul>
            </div>
          ),
          backgroundColor: '#521e7b',
          notes: 'Fixed-Size Chunking Cons: Ignores semantics, may split sentences, context dilution'
        },
        {
          id: 6,
          title: '1. Fixed-Size Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#c985ff', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>300–1000 tokens (start with 512)</li>
                <li>Varies by embedding model and content density</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>10–20% of chunk size (50–150 tokens)</li>
                <li>Helps preserve context across chunk boundaries</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em' }}>
                <li>Low (implementation complexity and processing requirements)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#521e7b',
          notes: 'Fixed-Size Chunking Config: 300-1000 tokens, 10-20% overlap, low computational cost'
        },
        {
          id: 7,
          title: '1. Fixed-Size Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#c985ff', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Logs, FAQs, short documents</li>
                <li>Uniform text content</li>
                <li>Baseline RAG implementations</li>
                <li>Simple knowledge bases</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>LangChain Character/Token splitters</li>
                <li>LlamaIndex, Haystack</li>
                <li>Chroma, Weaviate, Pinecone</li>
                <li>Custom implementations (simple)</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Beginner</strong> - Required expertise and implementation difficulty</p>
            </div>
          ),
          backgroundColor: '#521e7b',
          notes: 'Fixed-Size Chunking: For logs/FAQs, beginner-level, LangChain/LlamaIndex support'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff6464', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Coherent atomic units; good for precision</li>
                <li>Preserves natural language boundaries</li>
                <li>Avoids cutting mid-sentence</li>
                <li>Each chunk has clear semantic meaning</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c1c',
          notes: 'Sentence-Level Chunking Pros: Coherent atomic units, preserves natural boundaries'
        },
        {
          id: 9,
          title: '2. Sentence-Level Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff6464', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Uneven sizes; may be too granular</li>
                <li>Short chunks might lack broader context</li>
                <li>Variable token counts complicate batching</li>
                <li>Requires sentence boundary detection</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c1c',
          notes: 'Sentence-Level Chunking Cons: Uneven sizes, may be too granular, lacks context'
        },
        {
          id: 10,
          title: '2. Sentence-Level Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff6464', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>1–3 sentences (~50–150 tokens)</li>
                <li>Depends on sentence complexity and domain</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Optional 1 sentence</li>
                <li>Often unnecessary as sentences form natural boundaries</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em' }}>
                <li>Medium (requires sentence segmentation processing)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c1c',
          notes: 'Sentence-Level Config: 1-3 sentences, optional 1 sentence overlap, medium cost'
        },
        {
          id: 11,
          title: '2. Sentence-Level Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff6464', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>QA over short facts</li>
                <li>Classification tasks</li>
                <li>Snippet retrieval</li>
                <li>FAQ systems and knowledge bases</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>spaCy sentence segmenter</li>
                <li>NLTK sent_tokenize</li>
                <li>Stanza sentence splitter</li>
                <li>syntok and other sentence tokenizers</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Beginner–Intermediate</strong> - Simple concept with some NLP preprocessing</p>
            </div>
          ),
          backgroundColor: '#651c1c',
          notes: 'Sentence-Level: For QA/FAQs, beginner-intermediate, spaCy/NLTK support'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#68ff95', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Natural units; preserves local context</li>
                <li>Respects author-defined text boundaries</li>
                <li>Maintains topical coherence within paragraphs</li>
                <li>Simpler implementation than semantic methods</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6532',
          notes: 'Paragraph-Level Chunking Pros: Natural units, preserves context, respects boundaries'
        },
        {
          id: 13,
          title: '3. Paragraph-Level Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#68ff95', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Paragraphs can be long or inconsistent</li>
                <li>Document formatting affects quality</li>
                <li>May create uneven chunk sizes</li>
                <li>Doesn't work well for documents without clear paragraphs</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6532',
          notes: 'Paragraph-Level Chunking Cons: Inconsistent sizes, formatting dependent'
        },
        {
          id: 14,
          title: '3. Paragraph-Level Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#68ff95', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>150–400 tokens (paragraph-bound)</li>
                <li>Size varies based on document formatting</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>0–1 sentence</li>
                <li>Minimal overlap needed as paragraphs are natural breaks</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em' }}>
                <li>Low (simple implementation and minimal processing)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6532',
          notes: 'Paragraph-Level Config: 150-400 tokens, 0-1 sentence overlap, low cost'
        },
        {
          id: 15,
          title: '3. Paragraph-Level Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#68ff95', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Blogs, reports, knowledge articles</li>
                <li>Well-structured documents</li>
                <li>Content with clear paragraph delineation</li>
                <li>Articles and essays</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Markdown/HTML splitters</li>
                <li>Regex/newline heuristics</li>
                <li>Common text processing libraries</li>
                <li>Simple string split on double newlines</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Beginner</strong> - Simple implementation with minimal expertise required</p>
            </div>
          ),
          backgroundColor: '#1c6532',
          notes: 'Paragraph-Level: For blogs/articles, beginner level, simple string split'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#8db7ff', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Smart fallback separators (\n\n, \n, space, char)</li>
                <li>Balances size vs structure preservation</li>
                <li>Better respects text boundaries than fixed-size</li>
                <li>More natural chunks than character-only splitting</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c3765',
          notes: 'Recursive Character Splitting Pros: Smart separators, balances size and structure'
        },
        {
          id: 17,
          title: '4. Recursive Character Text Splitting - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#8db7ff', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Still rule-based; semantics not guaranteed</li>
                <li>Requires tuning separator hierarchy</li>
                <li>May produce uneven chunk sizes</li>
                <li>No awareness of document structure or headings</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c3765',
          notes: 'Recursive Character Splitting Cons: Rule-based, requires tuning, no document awareness'
        },
        {
          id: 18,
          title: '4. Recursive Character Text Splitting - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#8db7ff', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>400–800 tokens (typical)</li>
                <li>Depends on document structure and separator frequency</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>50–150 tokens</li>
                <li>Higher overlap (20%) for complex content with many separators</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em' }}>
                <li>Low (simple string operations, slightly more than fixed-size)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c3765',
          notes: 'Recursive Character Config: 400-800 tokens, 50-150 overlap, low cost'
        },
        {
          id: 19,
          title: '4. Recursive Character Text Splitting - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#8db7ff', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Mixed formatting documents</li>
                <li>PDFs post-extraction</li>
                <li>Text with varying structure</li>
                <li>General-purpose chunking baseline</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>LangChain RecursiveCharacterTextSplitter</li>
                <li>n8n integration nodes</li>
                <li>Snowflake SPLIT_TEXT_RECURSIVE_CHARACTER</li>
                <li>Easy to implement custom in any language</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Beginner</strong> - Simple to implement and use with minimal tuning</p>
            </div>
          ),
          backgroundColor: '#1c3765',
          notes: 'Recursive Character: For PDFs/mixed docs, beginner level, LangChain support'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#58ff64', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Respects headers/sections; better coherence</li>
                <li>Preserves document structure and hierarchy</li>
                <li>Keeps related content together logically</li>
                <li>Maintains semantic integrity of document sections</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6521',
          notes: 'Structure-Aware Chunking Pros: Respects structure, preserves hierarchy'
        },
        {
          id: 21,
          title: '5. Structure-Aware Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#58ff64', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Parsing/layout extraction can be brittle</li>
                <li>Requires well-structured documents</li>
                <li>May produce uneven chunk sizes</li>
                <li>Quality depends on document formatting</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6521',
          notes: 'Structure-Aware Chunking Cons: Brittle parsing, requires well-structured docs'
        },
        {
          id: 22,
          title: '5. Structure-Aware Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#58ff64', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>300–1200 tokens (by section)</li>
                <li>Sizes vary based on document structure and heading levels</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Minimal across sections</li>
                <li>Only necessary to maintain cross-sectional references</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em' }}>
                <li>Medium (structure parsing and analysis requirements)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6521',
          notes: 'Structure-Aware Config: 300-1200 tokens by section, minimal overlap, medium cost'
        },
        {
          id: 23,
          title: '5. Structure-Aware Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#58ff64', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Manuals, whitepapers, SOWs</li>
                <li>Documentation sites</li>
                <li>Academic papers with clear sections</li>
                <li>Technical reports, legal documents</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Azure Document Layout</li>
                <li>Unstructured.io</li>
                <li>Docling</li>
                <li>LangChain HTML/MD splitters</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Intermediate</strong> - Requires structure parsing knowledge</p>
            </div>
          ),
          backgroundColor: '#1c6521',
          notes: 'Structure-Aware: For manuals/whitepapers, intermediate level, Azure/Unstructured.io'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#83ffec', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Heuristics by content type (lists, bullets, code, tables)</li>
                <li>Preserves meaning of special content elements</li>
                <li>Adapts to document formatting patterns</li>
                <li>Better chunk boundaries for mixed content</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c655a',
          notes: 'Content-Aware Chunking Pros: Content-type heuristics, preserves special elements'
        },
        {
          id: 25,
          title: '6. Content-Aware Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#83ffec', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Rules require tuning for different domains</li>
                <li>Domain-specific heuristics needed</li>
                <li>Harder to maintain than simpler methods</li>
                <li>May break on unusual formatting</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c655a',
          notes: 'Content-Aware Chunking Cons: Requires tuning, domain-specific, harder maintenance'
        },
        {
          id: 26,
          title: '6. Content-Aware Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#83ffec', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>200–800 tokens (dynamic)</li>
                <li>Varies based on content type and complexity</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>0–15% depending on content type</li>
                <li>More for complex content, less for structured elements</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em' }}>
                <li>Medium (implementation complexity and processing requirements)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c655a',
          notes: 'Content-Aware Config: 200-800 tokens dynamic, 0-15% overlap, medium cost'
        },
        {
          id: 27,
          title: '6. Content-Aware Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#83ffec', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Ebooks and technical guides</li>
                <li>Documentation sites and wikis</li>
                <li>Mixed content with lists/tables/code</li>
                <li>Formatting-rich documents</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Custom heuristics (often bespoke)</li>
                <li>Coveo chunking strategies</li>
                <li>Unstructured.io content extractors</li>
                <li>Rule-based custom splitters</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Intermediate</strong> - Requires expertise and domain-specific implementation</p>
            </div>
          ),
          backgroundColor: '#1c655a',
          notes: 'Content-Aware: For ebooks/wikis, intermediate level, custom heuristics'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#7b7bff', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Topic-coherent chunks; high retrieval precision</li>
                <li>Better semantic understanding and context preservation</li>
                <li>Groups similar content regardless of physical proximity</li>
                <li>Improved relevance in retrieval results</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c1c65',
          notes: 'Semantic Chunking Pros: Topic-coherent, high precision, better understanding'
        },
        {
          id: 29,
          title: '7. Semantic Chunking (Embedding-Based) - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#7b7bff', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Requires embeddings; adds computation cost</li>
                <li>Tuning similarity thresholds can be challenging</li>
                <li>Quality depends on embedding model choice</li>
                <li>More implementation complexity than fixed methods</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c1c65',
          notes: 'Semantic Chunking Cons: Requires embeddings, tuning challenges, complex'
        },
        {
          id: 30,
          title: '7. Semantic Chunking (Embedding-Based) - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#7b7bff', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>200–600 tokens per semantic unit</li>
                <li>Varies based on topic cohesion and content density</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>0–10% (minimal overlap needed)</li>
                <li>Semantic boundaries reduce need for significant overlap</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em' }}>
                <li>Medium–High (embedding generation and similarity calculations add overhead)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c1c65',
          notes: 'Semantic Config: 200-600 tokens, 0-10% overlap, medium-high cost'
        },
        {
          id: 31,
          title: '7. Semantic Chunking (Embedding-Based) - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#7b7bff', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Multi-topic documents and research papers</li>
                <li>Knowledge bases with diverse content</li>
                <li>Product documentation libraries</li>
                <li>When retrieval precision is critical</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Sentence-transformers library</li>
                <li>Pinecone examples and guides</li>
                <li>Superlinked VectorHub</li>
                <li>LlamaIndex SemanticSplitter</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Intermediate–Advanced</strong> - Requires understanding of embeddings and similarity thresholds</p>
            </div>
          ),
          backgroundColor: '#1c1c65',
          notes: 'Semantic: For research/knowledge bases, intermediate-advanced, LlamaIndex support'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff6eef', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Topic segmentation via cohesion drops; classic, explainable</li>
                <li>Finds natural topic boundaries in text</li>
                <li>Good for documents with distinct topic shifts</li>
                <li>Based on linguistic principles of lexical cohesion</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c5d',
          notes: 'TextTiling Pros: Topic segmentation, finds natural boundaries, explainable'
        },
        {
          id: 33,
          title: '8. TextTiling - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff6eef', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Sensitive to parameters; domain variance</li>
                <li>Can struggle with gradual topic transitions</li>
                <li>Requires preprocessing and tuning</li>
                <li>Performance varies with text style and genre</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c5d',
          notes: 'TextTiling Cons: Parameter sensitive, struggles with gradual transitions, needs tuning'
        },
        {
          id: 34,
          title: '8. TextTiling - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff6eef', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Variable by tile/window (often 200–800 tokens)</li>
                <li>Based on topic boundaries, not fixed size</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>None</li>
                <li>Algorithm itself handles transitions between topics</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em' }}>
                <li>Medium (requires lexical cohesion calculations across text segments)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c5d',
          notes: 'TextTiling Config: 200-800 tokens variable by tile, no overlap, medium cost'
        },
        {
          id: 35,
          title: '8. TextTiling - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff6eef', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Articles, transcripts with topic shifts</li>
                <li>Academic papers, technical documentation</li>
                <li>Long-form content with distinct sections</li>
                <li>Multi-topic document segmentation</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>NLTK-style implementations</li>
                <li>Open-source repos (DeepTiling)</li>
                <li>Custom Python implementations</li>
                <li>Research-oriented NLP libraries</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Intermediate</strong> - Requires understanding of lexical cohesion and parameter tuning</p>
            </div>
          ),
          backgroundColor: '#651c5d',
          notes: 'TextTiling: For articles/transcripts, intermediate level, NLTK implementations'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#63ffae', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Uses discourse units (EDUs) and relations for high fidelity semantics</li>
                <li>Captures rhetorical structure and text organization</li>
                <li>Preserves argumentative flow and logical connections</li>
                <li>Excellent for long-form content comprehension</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c653f',
          notes: 'Discourse/RST Pros: Uses EDUs, captures rhetorical structure, preserves flow'
        },
        {
          id: 37,
          title: '9. Discourse / RST Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#63ffae', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Parsers are computationally heavy</li>
                <li>Not turnkey; requires specialized knowledge</li>
                <li>Lower throughput than simpler methods</li>
                <li>Limited availability of production-ready tools</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c653f',
          notes: 'Discourse/RST Cons: Computationally heavy, not turnkey, requires expertise'
        },
        {
          id: 38,
          title: '9. Discourse / RST Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#63ffae', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Combine Elementary Discourse Units (EDUs) to ~150–400 tokens</li>
                <li>Size based on discourse relation boundaries, not fixed counts</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>None by default (discourse boundaries are respected)</li>
                <li>Optional minimal overlap when coherence requires it</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em' }}>
                <li>High (implementation complexity and heavy processing requirements)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c653f',
          notes: 'Discourse/RST Config: 150-400 tokens by EDUs, none by default overlap, high cost'
        },
        {
          id: 39,
          title: '9. Discourse / RST Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#63ffae', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Long-form question answering</li>
                <li>Summarization grounding</li>
                <li>Academic papers and legal documents</li>
                <li>Complex reasoning over structured arguments</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Research-grade RST parsers</li>
                <li>Discourse segmentation toolkits</li>
                <li>Custom NLP pipelines</li>
                <li>Academic libraries (e.g., NLTK-RST)</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Advanced</strong> - Requires specialized expertise and implementation difficulty</p>
            </div>
          ),
          backgroundColor: '#1c653f',
          notes: 'Discourse/RST: For QA/legal docs, advanced level, research-grade parsers'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#eeff82', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Honors tokenizer limits; predictable fit</li>
                <li>Avoids truncation by embedding models</li>
                <li>Matches exact token windows of models</li>
                <li>More accurate size estimation than characters</li>
              </ul>
            </div>
          ),
          backgroundColor: '#656a1c',
          notes: 'Token-Aware Pros: Honors tokenizer limits, predictable fit, avoids truncation'
        },
        {
          id: 41,
          title: '10. Token-Aware Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#eeff82', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>May split syntax/meaning; tokenizer variance</li>
                <li>Different models tokenize differently</li>
                <li>Requires tokenizer access</li>
                <li>Not aligned with semantic boundaries</li>
              </ul>
            </div>
          ),
          backgroundColor: '#656a1c',
          notes: 'Token-Aware Cons: May split meaning, tokenizer variance, not semantic'
        },
        {
          id: 42,
          title: '10. Token-Aware Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#eeff82', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>256–1024 tokens (match embedding model)</li>
                <li>Should align with context window of target model</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>10–20% (50–100 tokens typical)</li>
                <li>Helps preserve context across token boundaries</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em' }}>
                <li>Low (simple implementation complexity and minimal processing)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#656a1c',
          notes: 'Token-Aware Config: 256-1024 tokens, 10-20% overlap, low cost'
        },
        {
          id: 43,
          title: '10. Token-Aware Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#eeff82', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Any embedding pipeline; strict window budgets</li>
                <li>When using specific models with token limits</li>
                <li>Cross-model compatibility</li>
                <li>Production RAG systems</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Tiktoken (OpenAI)</li>
                <li>Hugging Face tokenizers</li>
                <li>LangChain Token splitter</li>
                <li>spaCy tokenizers</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Beginner</strong> - Simple implementation with minimal expertise required</p>
            </div>
          ),
          backgroundColor: '#656a1c',
          notes: 'Token-Aware: For RAG systems, beginner level, Tiktoken/HuggingFace support'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#7adcff', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Strong alignment to document navigation; great for docs sites</li>
                <li>Preserves document hierarchy and structure</li>
                <li>Makes retrieval context clearer with heading metadata</li>
                <li>Natural semantic boundaries for content</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c5265',
          notes: 'Heading/Title Anchor Pros: Great for docs sites, preserves hierarchy, clear context'
        },
        {
          id: 45,
          title: '11. Heading / Title Anchor Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#7adcff', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Requires clean headings; won't work for unstructured text</li>
                <li>Uneven chunk sizes based on section length</li>
                <li>Some sections may be too large for context windows</li>
                <li>Different heading styles may cause inconsistencies</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c5265',
          notes: 'Heading/Title Anchor Cons: Requires clean headings, uneven sizes, may be too large'
        },
        {
          id: 46,
          title: '11. Heading / Title Anchor Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#7adcff', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Section-bounded (200–1200 tokens)</li>
                <li>Varies based on document structure and heading density</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>0–5% between sections</li>
                <li>Sometimes includes parent heading for context</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em' }}>
                <li>Low–Medium (implementation complexity and processing requirements)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c5265',
          notes: 'Heading/Title Anchor Config: 200-1200 tokens section-bounded, 0-5% overlap, low-medium cost'
        },
        {
          id: 47,
          title: '11. Heading / Title Anchor Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#7adcff', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Markdown documentation and README files</li>
                <li>API references and technical docs sites</li>
                <li>Knowledge bases with clear structure</li>
                <li>Wikis and developer documentation</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Markdown heading parsers</li>
                <li>GitHub Flavored Markdown (GFM) anchors</li>
                <li>Static site generators (Jekyll, MkDocs)</li>
                <li>LangChain's MarkdownTextSplitter</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Beginner–Intermediate</strong> - Requires basic expertise and implementation</p>
            </div>
          ),
          backgroundColor: '#1c5265',
          notes: 'Heading/Title Anchor: For API docs/wikis, beginner-intermediate, Markdown parsers'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ee77ff', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Preserves lists, code blocks, tables, and other HTML/Markdown elements</li>
                <li>Maintains document structure and hierarchy</li>
                <li>Rich metadata extraction from headings, tags, and attributes</li>
                <li>Natural boundaries align with content meaning</li>
              </ul>
            </div>
          ),
          backgroundColor: '#5c1c65',
          notes: 'Markdown/HTML Pros: Preserves elements, maintains structure, rich metadata'
        },
        {
          id: 49,
          title: '12. Markdown / HTML Structure Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ee77ff', padding: '30px' }}>
              <ul style={{ lineHeight: '2', fontSize: '1.2em' }}>
                <li>Requires well-structured source documents</li>
                <li>Boilerplate/noise unless filtered</li>
                <li>HTML parsing can be complex/brittle</li>
                <li>Format-specific implementation needed</li>
              </ul>
            </div>
          ),
          backgroundColor: '#5c1c65',
          notes: 'Markdown/HTML Cons: Needs well-structured docs, parsing complexity, format-specific'
        },
        {
          id: 50,
          title: '12. Markdown / HTML Structure Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ee77ff', padding: '30px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Element-grouped 300–900 tokens</li>
                <li>Varies by element type (paragraph vs. section)</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>0–10% between elements or sections</li>
                <li>Often header/context overlap</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em' }}>
                <li>Medium (parser overhead and DOM/AST processing requirements)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#5c1c65',
          notes: 'Markdown/HTML Config: 300-900 tokens element-grouped, 0-10% overlap, medium cost'
        },
        {
          id: 51,
          title: '12. Markdown / HTML Structure Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ee77ff', padding: '30px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Web pages, docs portals, blogs</li>
                <li>Markdown documentation repositories</li>
                <li>Technical blogs and wikis</li>
                <li>API documentation</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ lineHeight: '2', fontSize: '1.1em', marginBottom: '30px' }}>
                <li>BeautifulSoup, jsdom for HTML</li>
                <li>LangChain HTMLTextSplitter</li>
                <li>Markdown parsers (marked, remark)</li>
                <li>Documentation frameworks</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Intermediate</strong> - Requires HTML/Markdown parsing knowledge and structure handling</p>
            </div>
          ),
          backgroundColor: '#5c1c65',
          notes: 'Markdown/HTML: For web pages/blogs, intermediate level, BeautifulSoup/LangChain'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ffe983', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Extracts tables intact; supports downstream parsing</li>
                <li>Preserves tabular relationships and formats</li>
                <li>Enables structured data retrieval</li>
                <li>Maintains row/column associations</li>
              </ul>
            </div>
          ),
          backgroundColor: '#65581c',
          notes: 'Table-Aware Pros: Extracts tables intact, preserves tabular relationships'
        },
        {
          id: 53,
          title: '13. Table-Aware Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ffe983', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Extraction quality varies across formats</li>
                <li>Formatting loss risk during conversion</li>
                <li>Complex tables require special handling</li>
                <li>May miss context around tables</li>
              </ul>
            </div>
          ),
          backgroundColor: '#65581c',
          notes: 'Table-Aware Cons: Quality varies, complex tables need special handling'
        },
        {
          id: 54,
          title: '13. Table-Aware Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ffe983', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Per table (convert to Markdown/JSON)</li>
                <li>100–500 tokens typical per table</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>0 (tables are typically self-contained units)</li>
                <li>Consider including caption or immediately adjacent text</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.1em' }}>
                <li>Table detection and extraction requires specialized processing</li>
                <li>Medium</li>
              </ul>
            </div>
          ),
          backgroundColor: '#65581c',
          notes: 'Table-Aware Config: Per table 100-500 tokens, 0 overlap, medium cost'
        },
        {
          id: 55,
          title: '13. Table-Aware Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ffe983', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Financial reports with tabular data</li>
                <li>Technical specifications documents</li>
                <li>Benchmarking reports</li>
                <li>Research papers with data tables</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Camelot (for PDF tables)</li>
                <li>Tabula</li>
                <li>pdfplumber</li>
                <li>Unstructured.io</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Intermediate</strong> - Requires table detection and specialized extraction</p>
            </div>
          ),
          backgroundColor: '#65581c',
          notes: 'Table-Aware: For financial reports, intermediate level, Camelot/Tabula support'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#7ad0ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Split by function/class/module; preserves semantics</li>
                <li>Maintains code integrity and logical structure</li>
                <li>Keeps related declarations together</li>
                <li>Enhances retrieval relevance for code questions</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c4b65',
          notes: 'Code-Aware Pros: Preserves semantics, maintains code integrity'
        },
        {
          id: 57,
          title: '14. Code-Aware Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#7ad0ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Language-specific tuning required</li>
                <li>Struggles with very long functions</li>
                <li>May miss cross-function relationships</li>
                <li>Parser dependency adds complexity</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c4b65',
          notes: 'Code-Aware Cons: Language-specific tuning, struggles with long functions'
        },
        {
          id: 58,
          title: '14. Code-Aware Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#7ad0ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>200–800 tokens or 50–150 LOC</li>
                <li>Function/class-based rather than fixed-size</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Include signature + docstring (20–80 tokens)</li>
                <li>Function headers/imports may need to be included</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.1em' }}>
                <li>Implementation complexity and processing requirements</li>
                <li>Medium</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c4b65',
          notes: 'Code-Aware Config: 200-800 tokens/50-150 LOC, signature overlap, medium cost'
        },
        {
          id: 59,
          title: '14. Code-Aware Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#7ad0ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Code search and documentation</li>
                <li>RAG on code repositories</li>
                <li>API assistants and guides</li>
                <li>Developer documentation generation</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>LangChain code splitters</li>
                <li>Tree-sitter parsers</li>
                <li>Ripgrep + heuristics</li>
                <li>Language-specific AST parsers</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Intermediate</strong> - Required expertise and implementation difficulty</p>
            </div>
          ),
          backgroundColor: '#1c4b65',
          notes: 'Code-Aware: For code repos, intermediate level, LangChain/Tree-sitter support'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#dc8aff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Sentence-coherent with sliding stride; good balance</li>
                <li>Preserves natural language boundaries</li>
                <li>Better context preservation than fixed-size</li>
                <li>Minimizes sentence fragmentation</li>
              </ul>
            </div>
          ),
          backgroundColor: '#4f1c65',
          notes: 'Windowed Sentence Pros: Good balance, preserves natural boundaries'
        },
        {
          id: 61,
          title: '15. Windowed Sentence Grouping - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#dc8aff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Redundancy; increases storage requirements</li>
                <li>Parameter tuning needed (window/stride size)</li>
                <li>Uneven chunk sizes based on sentence lengths</li>
                <li>Requires sentence boundary detection</li>
              </ul>
            </div>
          ),
          backgroundColor: '#4f1c65',
          notes: 'Windowed Sentence Cons: Redundancy, parameter tuning needed'
        },
        {
          id: 62,
          title: '15. Windowed Sentence Grouping - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#dc8aff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>2–5 sentences (~100–300 tokens)</li>
                <li>Varies based on content complexity and sentence length</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>1–2 sentences</li>
                <li>Stride of 1-2 sentences between window starts</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.1em' }}>
                <li>Requires sentence detection and window management</li>
                <li>Low–Medium</li>
              </ul>
            </div>
          ),
          backgroundColor: '#4f1c65',
          notes: 'Windowed Sentence Config: 2-5 sentences, 1-2 sentence overlap, low-medium cost'
        },
        {
          id: 63,
          title: '15. Windowed Sentence Grouping - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#dc8aff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>News articles</li>
                <li>Product guides and documentation</li>
                <li>Transcripts and conversational content</li>
                <li>Content with natural narrative flow</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>spaCy + custom grouping</li>
                <li>NLTK sentence tokenizers</li>
                <li>Custom implementations</li>
                <li>LangChain extensions and utilities</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Beginner–Intermediate</strong> - Requires sentence boundary detection and window management</p>
            </div>
          ),
          backgroundColor: '#4f1c65',
          notes: 'Windowed Sentence: For news/transcripts, beginner-intermediate, spaCy/NLTK support'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff8787', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Sizes adapt to complexity/density; token-efficient</li>
                <li>Better context preservation for complex content</li>
                <li>Optimizes for both quality and efficiency</li>
                <li>Can allocate resources where most needed</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c1c',
          notes: 'Adaptive Length Pros: Adapts to complexity, token-efficient'
        },
        {
          id: 65,
          title: '16. Adaptive Length Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff8787', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Requires good complexity metric; harder to debug</li>
                <li>Parameter tuning can be challenging</li>
                <li>More complex implementation</li>
                <li>Unpredictable storage requirements</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c1c',
          notes: 'Adaptive Length Cons: Requires complexity metric, harder to debug'
        },
        {
          id: 66,
          title: '16. Adaptive Length Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff8787', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>200–1000 tokens (dynamic)</li>
                <li>Complex content: smaller chunks (200-400 tokens)</li>
                <li>Simple content: larger chunks (600-1000 tokens)</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>5–20% (dynamic)</li>
                <li>Higher overlap for complex content</li>
                <li>Lower overlap for simpler sections</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.1em' }}>
                <li>Requires complexity analysis for each document section</li>
                <li>Medium–High</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c1c',
          notes: 'Adaptive Length Config: 200-1000 tokens dynamic, 5-20% overlap, medium-high cost'
        },
        {
          id: 67,
          title: '16. Adaptive Length Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff8787', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Mixed-density documents (e.g., textbooks)</li>
                <li>Technical documentation with varying complexity</li>
                <li>Documents with both narrative and technical sections</li>
                <li>Knowledge bases with heterogeneous content</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Custom heuristics (lexical density, perplexity)</li>
                <li>LangChain custom splitter implementations</li>
                <li>Text complexity analysis libraries</li>
                <li>Advanced text processing frameworks</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Advanced</strong> - Requires expertise in text analysis and complexity metrics</p>
            </div>
          ),
          backgroundColor: '#651c1c',
          notes: 'Adaptive Length: For textbooks/mixed docs, advanced level, custom heuristics'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff7af6', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Adds summaries/context to chunks; boosts recall</li>
                <li>Preserves high-level document meaning</li>
                <li>Improves chunk relevance in long contexts</li>
                <li>Enables retrieval of conceptual connections</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c60',
          notes: 'Summarization-Based Pros: Boosts recall, preserves high-level meaning'
        },
        {
          id: 69,
          title: '17. Summarization-Based Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff7af6', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Expensive to generate summaries</li>
                <li>Risk of summary drift or hallucination</li>
                <li>Increases storage requirements</li>
                <li>LLM quality affects summary accuracy</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c60',
          notes: 'Summarization-Based Cons: Expensive, risk of hallucination'
        },
        {
          id: 70,
          title: '17. Summarization-Based Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff7af6', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Base 400–800 tokens + brief summary (50-150 tokens)</li>
                <li>Can be combined with other chunking methods</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>0–10% of base chunk size</li>
                <li>Summary provides cross-chunk context, reducing need for large overlaps</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.1em' }}>
                <li>Requires LLM inference for summary generation</li>
                <li>High</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c60',
          notes: 'Summarization-Based Config: 400-800 tokens + summary, 0-10% overlap, high cost'
        },
        {
          id: 71,
          title: '17. Summarization-Based Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff7af6', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Very long documents (books, reports)</li>
                <li>Agent memory systems</li>
                <li>Knowledge distillation</li>
                <li>Multi-hop reasoning tasks</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>LLMs (OpenAI, Anthropic, DBRX)</li>
                <li>LangChain map-reduce chains</li>
                <li>LlamaIndex summarization nodes</li>
                <li>Anthropic's contextual retrieval</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Advanced</strong> - Requires LLM prompting expertise and pipeline optimization</p>
            </div>
          ),
          backgroundColor: '#651c60',
          notes: 'Summarization-Based: For long docs/books, advanced, LLM-based tools'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#95ff7a', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Community detection over sentence graph creates topic-pure chunks</li>
                <li>Captures complex semantic relationships between sentences</li>
                <li>Produces coherent chunks with high semantic integrity</li>
                <li>Better for multi-topic documents than simple approaches</li>
              </ul>
            </div>
          ),
          backgroundColor: '#2b651c',
          notes: 'Graph-Based Pros: Creates topic-pure chunks, high semantic integrity'
        },
        {
          id: 73,
          title: '18. Graph-Based Semantic Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#95ff7a', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Complex implementation requiring graph algorithms</li>
                <li>Compute-heavy with large matrices for similarity</li>
                <li>Parameter-sensitive (clustering thresholds)</li>
                <li>Results vary based on embedding quality</li>
              </ul>
            </div>
          ),
          backgroundColor: '#2b651c',
          notes: 'Graph-Based Cons: Complex implementation, compute-heavy'
        },
        {
          id: 74,
          title: '18. Graph-Based Semantic Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#95ff7a', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Variable by communities (~150–600 tokens)</li>
                <li>Determined by graph structure and topic cohesion</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>0 (typically no overlap)</li>
                <li>Communities form natural boundaries without need for overlap</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.1em' }}>
                <li>Implementation complexity and processing requirements</li>
                <li>High</li>
              </ul>
            </div>
          ),
          backgroundColor: '#2b651c',
          notes: 'Graph-Based Config: 150-600 tokens by communities, 0 overlap, high cost'
        },
        {
          id: 75,
          title: '18. Graph-Based Semantic Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#95ff7a', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Research papers with multiple topics</li>
                <li>Multi-topic reports and analyses</li>
                <li>Complex technical documentation</li>
                <li>Academic literature with dense concepts</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>sentence-transformers for embeddings</li>
                <li>NetworkX/igraph for graph algorithms</li>
                <li>Scikit-learn clustering implementations</li>
                <li>Custom research implementations</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Advanced</strong> - Required expertise and implementation difficulty</p>
            </div>
          ),
          backgroundColor: '#2b651c',
          notes: 'Graph-Based: For research papers, advanced, sentence-transformers/NetworkX'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#8197ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Sync with timestamps; stream-friendly</li>
                <li>Preserves audio-to-text alignment</li>
                <li>Natural for audio/video content</li>
                <li>Enables seeking to specific audio segments</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c2965',
          notes: 'Audio/ASR Pros: Timestamp sync, preserves alignment'
        },
        {
          id: 77,
          title: '19. Audio / ASR Time-Based Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#8197ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Time slices may cut semantics; ASR errors propagate</li>
                <li>Variable information density in segments</li>
                <li>May need post-processing for coherence</li>
                <li>Audio quality affects chunk boundaries</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c2965',
          notes: 'Audio/ASR Cons: May cut semantics, ASR errors propagate'
        },
        {
          id: 78,
          title: '19. Audio / ASR Time-Based Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#8197ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>15–60 seconds audio (or 150–500 tokens text)</li>
                <li>Balances completeness vs processing requirements</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>1–2 seconds (or 10–30 tokens)</li>
                <li>Helps maintain context across time-based boundaries</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.1em' }}>
                <li>ASR processing and timestamp alignment requirements</li>
                <li>Medium</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c2965',
          notes: 'Audio/ASR Config: 15-60s audio, 1-2s overlap, medium cost'
        },
        {
          id: 79,
          title: '19. Audio / ASR Time-Based Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#8197ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Podcasts, earnings calls, lectures</li>
                <li>Meeting summarization</li>
                <li>Video content indexing</li>
                <li>Real-time speech processing</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Whisper (OpenAI)</li>
                <li>AWS Transcribe</li>
                <li>Google Speech-to-Text</li>
                <li>Pyannote (for diarization)</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Intermediate</strong> - Requires audio processing pipelines and ASR integration</p>
            </div>
          ),
          backgroundColor: '#1c2965',
          notes: 'Audio/ASR: For podcasts/meetings, intermediate, Whisper/AWS Transcribe'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff81aa', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Preserves dialog structure and conversation flow</li>
                <li>Improves speaker attribution in transcripts</li>
                <li>Maintains natural conversational segments</li>
                <li>Better context for Q&A pairs in dialogues</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c34',
          notes: 'Speaker-Turn Pros: Preserves dialog structure, maintains conversation flow'
        },
        {
          id: 81,
          title: '20. Speaker-Turn Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff81aa', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Turn lengths vary significantly (some speakers talk more)</li>
                <li>Requires speaker diarization preprocessing</li>
                <li>Speaker detection can be error-prone</li>
                <li>May combine unrelated topics if same speaker continues</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c34',
          notes: 'Speaker-Turn Cons: Variable lengths, requires diarization'
        },
        {
          id: 82,
          title: '20. Speaker-Turn Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff81aa', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Per turn or grouped 2–3 turns (~100–300 tokens)</li>
                <li>Adaptive to conversation dynamics and speaker patterns</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>0–1 turn</li>
                <li>Helps maintain context between speaker transitions</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.1em' }}>
                <li>Implementation complexity and processing requirements</li>
                <li>Medium</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c34',
          notes: 'Speaker-Turn Config: 1-3 turns, 0-1 turn overlap, medium cost'
        },
        {
          id: 83,
          title: '20. Speaker-Turn Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff81aa', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Meeting transcripts and summaries</li>
                <li>Customer support chats and conversations</li>
                <li>Podcast and interview transcriptions</li>
                <li>Multi-speaker audio processing</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Pyannote audio diarization library</li>
                <li>AWS Transcribe with speaker diarization</li>
                <li>Whisper + diarization pipelines</li>
                <li>Google Speech-to-Text with speaker recognition</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Intermediate</strong> - Required expertise and implementation difficulty</p>
            </div>
          ),
          backgroundColor: '#651c34',
          notes: 'Speaker-Turn: For meetings/chats, intermediate, Pyannote/AWS Transcribe'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ffff6f', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Tailored to answer spans; high precision for QA</li>
                <li>Optimized for question-answer retrieval</li>
                <li>Improves relevance in QA systems</li>
                <li>Better context for specific questions</li>
              </ul>
            </div>
          ),
          backgroundColor: '#65651c',
          notes: 'QA-Focused Pros: High precision for QA, optimized for Q&A retrieval'
        },
        {
          id: 85,
          title: '21. QA-Focused Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ffff6f', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Needs label generation or heuristics; setup cost</li>
                <li>Requires understanding of question patterns</li>
                <li>May not generalize well to non-QA tasks</li>
                <li>More upfront work to implement properly</li>
              </ul>
            </div>
          ),
          backgroundColor: '#65651c',
          notes: 'QA-Focused Cons: Setup cost, may not generalize to non-QA'
        },
        {
          id: 86,
          title: '21. QA-Focused Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ffff6f', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>100–400 tokens around candidate answers</li>
                <li>Sized to capture complete answer contexts</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>0–10% (minimal overlap needed)</li>
                <li>Focus on answer boundaries rather than arbitrary overlaps</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.1em' }}>
                <li>Requires additional processing to identify potential answers</li>
                <li>Medium–High</li>
              </ul>
            </div>
          ),
          backgroundColor: '#65651c',
          notes: 'QA-Focused Config: 100-400 tokens, 0-10% overlap, medium-high cost'
        },
        {
          id: 87,
          title: '21. QA-Focused Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ffff6f', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Knowledge bases</li>
                <li>Policy QA, FAQ systems</li>
                <li>Support documentation</li>
                <li>Information extraction from longer texts</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>LlamaIndex QuestionGenerator</li>
                <li>Rerankers (Cohere, Jina)</li>
                <li>Custom QA pipelines</li>
                <li>SentenceTransformers + question generation</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Advanced</strong> - Requires QA expertise and significant tuning</p>
            </div>
          ),
          backgroundColor: '#65651c',
          notes: 'QA-Focused: For FAQs/knowledge bases, advanced, LlamaIndex/Rerankers'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#aa80ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Simple for PDFs; keeps page context and references</li>
                <li>Maintains original document's page structure</li>
                <li>Easy to cite and reference by page number</li>
                <li>Works well with documents that have page-based organization</li>
              </ul>
            </div>
          ),
          backgroundColor: '#341c65',
          notes: 'Page-Preservation Pros: Simple for PDFs, maintains page structure'
        },
        {
          id: 89,
          title: '22. Page-Preservation Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#aa80ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Pages aren't semantic units; variable density</li>
                <li>May split logical content across pages</li>
                <li>Can be inefficient for dense or sparse pages</li>
                <li>References may lose context at page boundaries</li>
              </ul>
            </div>
          ),
          backgroundColor: '#341c65',
          notes: 'Page-Preservation Cons: Not semantic, variable density'
        },
        {
          id: 90,
          title: '22. Page-Preservation Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#aa80ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Per page (variable tokens)</li>
                <li>Typically ranges from 300-1200 tokens depending on page density</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>0–5% between pages (optional)</li>
                <li>May include headers/footers for continuity</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.1em' }}>
                <li>Simple extraction with potential formatting challenges</li>
                <li>Low–Medium</li>
              </ul>
            </div>
          ),
          backgroundColor: '#341c65',
          notes: 'Page-Preservation Config: Per page 300-1200 tokens, 0-5% overlap, low-medium cost'
        },
        {
          id: 91,
          title: '22. Page-Preservation Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#aa80ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Scanned documents</li>
                <li>Page-referenced citations</li>
                <li>Legal documents with page numbers</li>
                <li>Academic papers with page references</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>pdfplumber</li>
                <li>PyPDF2</li>
                <li>Unstructured.io</li>
                <li>PDF extraction libraries</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Beginner</strong> - Straightforward implementation with minimal tuning</p>
            </div>
          ),
          backgroundColor: '#341c65',
          notes: 'Page-Preservation: For scanned/legal docs, beginner, pdfplumber/PyPDF2'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#82ff96', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Pairs figure/table captions with nearby text</li>
                <li>Boosts multimodal grounding</li>
                <li>Preserves visual-textual relationships</li>
                <li>Enhances retrieval of visual content</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6528',
          notes: 'Caption+Context Pros: Pairs captions with text, boosts multimodal grounding'
        },
        {
          id: 93,
          title: '23. Caption + Context Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#82ff96', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Requires reliable layout detection</li>
                <li>Struggles with complex document layouts</li>
                <li>Needs tuning of window size around captions</li>
                <li>Limited to documents with explicit figures/tables</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6528',
          notes: 'Caption+Context Cons: Requires layout detection, complex layouts challenging'
        },
        {
          id: 94,
          title: '23. Caption + Context Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#82ff96', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>100–400 tokens near caption</li>
                <li>Include caption text plus surrounding explanatory paragraphs</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>1–2 sentences around region</li>
                <li>Enough to connect with surrounding content sections</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.1em' }}>
                <li>Requires layout analysis and figure/caption detection</li>
                <li>Medium</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6528',
          notes: 'Caption+Context Config: 100-400 tokens, 1-2 sentence overlap, medium cost'
        },
        {
          id: 95,
          title: '23. Caption + Context Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#82ff96', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Scientific papers with figures</li>
                <li>Reports with tables and charts</li>
                <li>Technical documentation with diagrams</li>
                <li>Educational materials with illustrations</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Unstructured.io</li>
                <li>DocTR (Document Text Recognition)</li>
                <li>LayoutParser</li>
                <li>Custom PDF extractors with layout awareness</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Intermediate</strong> - Requires document structure and layout understanding</p>
            </div>
          ),
          backgroundColor: '#1c6528',
          notes: 'Caption+Context: For scientific papers, intermediate, Unstructured.io/LayoutParser'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#e086ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Adds filters (section, author, date) to chunks</li>
                <li>Improves retrieval routing and precision</li>
                <li>Enables faceted search and filtering</li>
                <li>Better document provenance tracking</li>
              </ul>
            </div>
          ),
          backgroundColor: '#521c65',
          notes: 'Metadata-Aware Pros: Adds filters, improves routing and precision'
        },
        {
          id: 97,
          title: '24. Metadata-Aware Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#e086ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Metadata extraction requires additional effort</li>
                <li>Governance and schema management needed</li>
                <li>Increased storage requirements</li>
                <li>Quality depends on metadata accuracy</li>
              </ul>
            </div>
          ),
          backgroundColor: '#521c65',
          notes: 'Metadata-Aware Cons: Extraction effort, schema management needed'
        },
        {
          id: 98,
          title: '24. Metadata-Aware Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#e086ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Inherit from base chunking method (e.g., 300–800 tokens)</li>
                <li>Metadata is orthogonal to chunk size decisions</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Same as base chunking method</li>
                <li>Metadata enhancement doesn't affect overlap strategy</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.1em' }}>
                <li>Base chunking cost plus metadata extraction overhead</li>
                <li>Medium</li>
              </ul>
            </div>
          ),
          backgroundColor: '#521c65',
          notes: 'Metadata-Aware Config: 300-800 tokens inherit, same overlap, medium cost'
        },
        {
          id: 99,
          title: '24. Metadata-Aware Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#e086ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Enterprise search with facets</li>
                <li>Regulatory/compliance document retrieval</li>
                <li>Multi-domain knowledge bases</li>
                <li>Content governance requirements</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>LangChain Document schemas</li>
                <li>Weaviate with filters</li>
                <li>Azure Cognitive Search</li>
                <li>Pinecone, Chroma with metadata filtering</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Intermediate</strong> - Requires schema design and metadata extraction</p>
            </div>
          ),
          backgroundColor: '#521c65',
          notes: 'Metadata-Aware: For enterprise search, intermediate, LangChain/Weaviate'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff83a2', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Best of multiple methods; adaptable by document type</li>
                <li>Can handle mixed content in heterogeneous corpora</li>
                <li>Optimizes for both context and relevance</li>
                <li>More flexible for enterprise applications</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c2e',
          notes: 'Hybrid Pros: Best of multiple methods, adaptable by document type'
        },
        {
          id: 101,
          title: '25. Hybrid Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff83a2', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>More moving parts; requires evals to tune</li>
                <li>Higher development and maintenance overhead</li>
                <li>Harder to debug retrieval issues</li>
                <li>Requires careful orchestration of techniques</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c2e',
          notes: 'Hybrid Cons: More moving parts, higher maintenance overhead'
        },
        {
          id: 102,
          title: '25. Hybrid Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff83a2', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Varies based on component techniques</li>
                <li>E.g., structure-aware for sections + semantic refinement within sections</li>
                <li>Typically 300-800 tokens after composition</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Varies by component technique</li>
                <li>Typically 10-20% for boundary smoothing</li>
                <li>Strategic overlaps at semantic boundaries</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.1em' }}>
                <li>Depends on component techniques and pipeline complexity</li>
                <li>Variable</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651c2e',
          notes: 'Hybrid Config: 300-800 tokens varies, 10-20% overlap, variable cost'
        },
        {
          id: 103,
          title: '25. Hybrid Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ff83a2', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Production RAG systems</li>
                <li>Heterogeneous document collections</li>
                <li>Enterprise knowledge management</li>
                <li>Multi-modal content (docs + code + tables)</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>LangChain/LlamaIndex composition</li>
                <li>Custom pipelines and orchestration</li>
                <li>MLOps frameworks with pipeline support</li>
                <li>Enterprise RAG platforms</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Intermediate–Advanced</strong> - Requires expertise in multiple chunking methods and evaluation</p>
            </div>
          ),
          backgroundColor: '#651c2e',
          notes: 'Hybrid: For production RAG, intermediate-advanced, LangChain/LlamaIndex'
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
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#78f9ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Preserves continuity and context between chunks</li>
                <li>Reduces information loss at boundaries</li>
                <li>Better semantic coherence across transitions</li>
                <li>Improves retrieval for context-dependent queries</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6265',
          notes: 'Sliding Window Pros: Preserves continuity, reduces boundary loss'
        },
        {
          id: 105,
          title: '26. Sliding Window Chunking - Cons',
          icon: { name: 'duo-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#78f9ff', padding: '30px', lineHeight: '2' }}>
              <ul style={{ fontSize: '1.2em' }}>
                <li>Introduces redundancy in storage</li>
                <li>Increases embedding costs (same content embedded multiple times)</li>
                <li>Can create duplicated results without filtering</li>
                <li>Overlap size requires tuning for optimal performance</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6265',
          notes: 'Sliding Window Cons: Redundancy, increased embedding costs'
        },
        {
          id: 106,
          title: '26. Sliding Window Chunking - Configuration',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#78f9ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '20px' }}>Best Chunk Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>300–800 tokens for each window</li>
                <li>Larger sizes for complex documents with long contextual dependencies</li>
              </ul>
              <h3 style={{ color: '#f39c12', marginBottom: '20px' }}>Overlap Size</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>15–30% of chunk size (or 1–2 sentences)</li>
                <li>Larger overlap for documents with complex cross-references</li>
              </ul>
              <h3 style={{ color: '#e74c3c', marginBottom: '20px' }}>Computational Cost</h3>
              <ul style={{ fontSize: '1.1em' }}>
                <li>Slightly higher than fixed-size due to overlap management</li>
                <li>Low–Medium</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c6265',
          notes: 'Sliding Window Config: 300-800 tokens, 15-30% overlap, low-medium cost'
        },
        {
          id: 107,
          title: '26. Sliding Window Chunking - Use Cases & Tools',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#78f9ff', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#3498db', marginBottom: '20px' }}>Use Cases / Examples</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>Legal documents and contracts</li>
                <li>Academic papers and research reports</li>
                <li>Policy documents where cross-references matter</li>
                <li>Technical specifications with interdependent sections</li>
              </ul>
              <h3 style={{ color: '#9b59b6', marginBottom: '20px' }}>Tooling Support</h3>
              <ul style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                <li>LangChain sliding window implementations</li>
                <li>LlamaIndex text splitters with overlap</li>
                <li>Custom token window implementations</li>
                <li>Most vector databases support overlapping chunks</li>
              </ul>
              <h3 style={{ color: '#1abc9c', marginBottom: '20px' }}>Complexity Level</h3>
              <p style={{ fontSize: '1.2em' }}><strong>Beginner</strong> - Straightforward implementation with slightly more complexity than fixed-size</p>
            </div>
          ),
          backgroundColor: '#1c6265',
          notes: 'Sliding Window: For legal/policy docs, beginner, LangChain/LlamaIndex'
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
        <div style={{ margin: '0 auto', fontSize: '0.7em' }}>
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
                <td style={{ padding: '8px', border: '1px solid #555' }}>Fixed/Token</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>512 tokens</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>15%</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Baselines, simple content</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Sliding Window</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>600 tokens</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>20%</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Technical docs, legal</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Sentence Grouping</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>3 sentences</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Stride 2</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Narrative text</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Paragraph</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Max 350 tokens</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>None</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Articles, blogs</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Recursive Character</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>700 tokens</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>100 tokens</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Mixed formats</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Semantic</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>400 tokens</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>0-5%</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Multi-topic documents</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', border: '1px solid #555' }}>HTML/Markdown</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>500 tokens</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Preserve elements</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Documentation sites</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Code-Aware</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>400 tokens/function</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Include context</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Code repositories</td>
              </tr>
              <tr>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Audio Time-Based</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>30s windows</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>2s</td>
                <td style={{ padding: '8px', border: '1px solid #555' }}>Podcasts, meetings</td>
              </tr>
            </tbody>
          </table>
          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>💡 Evaluation Tip:</strong> Always tune these defaults for your specific corpus. Measure retrieval precision/recall, faithfulness, latency, and cost.
          </div>
        </div>
      ),
      backgroundColor: '#34495E',
      notes: 'Default sizing and overlap recommendations for each major chunking technique'
        },
        {
          id: 109,
          title: 'Selection Guide: Decision Flow',
          icon: { name: 'duo-compass' },
          content: (
        <div style={{ margin: '0 auto', fontSize: '0.75em', color: '#13c55e' }}>
          <h3 style={{ marginBottom: '30px' }}>How to Choose the Right Chunking Strategy</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', border: '2px solid #3498db', color: '#3498db' }}>
              <h4 style={{ color: '#3498db', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-sitemap" sizeName="1x" darkModeInvert={true} />
                1. Is document structure reliable?
              </h4>
              <p><strong>Yes →</strong> Use structure-aware chunking (Heading-Anchor, Markdown/HTML, Structure-Aware)</p>
              <p><strong>No →</strong> Consider semantic approaches (Semantic, TextTiling)</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '10px', border: '2px solid #f39c12', color: '#f39c12' }}>
              <h4 style={{ color: '#f39c12', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="1x" darkModeInvert={true} />
                2. Is latency/cost strict?
              </h4>
              <p><strong>Yes →</strong> Use simpler approaches (Fixed-Size, Token-Aware, Recursive Character)</p>
              <p><strong>No →</strong> Use advanced techniques (LLM-Based, Graph-Semantic, Discourse/RST)</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '10px', border: '2px solid #9b59b6', color: '#9b59b6' }}>
              <h4 style={{ color: '#9b59b6', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-layer-group" sizeName="1x" darkModeInvert={true} />
                3. Special content types?
              </h4>
              <p><strong>Code →</strong> Code-Aware chunking</p>
              <p><strong>Tables →</strong> Table-Aware chunking</p>
              <p><strong>Audio/Speech →</strong> Speaker-Turn or Time-Based chunking</p>
              <p><strong>QA Tasks →</strong> QA-Focused chunking</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '10px', border: '2px solid #2ecc71', color: '#2ecc71' }}>
              <h4 style={{ color: '#2ecc71', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
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
      notes: 'Decision flow for selecting chunking strategy based on document structure, latency constraints, and content types'
        },
        {
          id: 110,
          title: 'Best Practices & Key Takeaways',
          icon: { name: 'duo-clipboard-check' },
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginBottom: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" darkModeInvert={true} />
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
                <SvgIcon iconName="duo-chart-line" sizeName="1x" darkModeInvert={true} />
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
                <SvgIcon iconName="duo-route" sizeName="1x" darkModeInvert={true} />
                Recommended Path
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div style={{ padding: '12px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px', borderLeft: '4px solid #3498db' }}>
                  <strong>1. Begin with baseline</strong><br/>
                  Fixed-Size or Token-Aware + Sliding Window
                </div>
                <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', borderLeft: '4px solid #9b59b6' }}>
                  <strong>2. Add sophistication</strong><br/>
                  Structure-Aware or Semantic based on docs
                </div>
                <div style={{ padding: '12px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', borderLeft: '4px solid #2ecc71' }}>
                  <strong>3. Consider hybrid</strong><br/>
                  For complex or multi-modal collections
                </div>
                <div style={{ padding: '12px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px', borderLeft: '4px solid #f39c12' }}>
                  <strong>4. Continuously refine</strong><br/>
                  Learn from real-world usage patterns
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '30px', padding: '20px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', textAlign: 'center' }}>
            <strong>🎯 Implementation Next Steps:</strong> Implement 3 candidate strategies → Run A/B tests → Lock in optimal defaults → Continuously optimize
          </div>
        </div>
      ),
      backgroundColor: '#2C3E50',
      notes: 'Best practices: Start simple, measure impact, balance trade-offs, follow recommended path, continuously refine'
        }
      ]
    }
  ]
};

