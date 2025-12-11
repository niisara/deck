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
          title: '1. Fixed-Size Chunking',
          icon: { name: 'duo-wand-sparkles' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#c985ff' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Simple, predictable, fast; baseline for A/B tests</li>
                <li>Consistent chunk sizes for embedding models</li>
                <li>Easy to implement and debug</li>
                <li>Predictable storage requirements</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Ignores semantics; may split sentences</li>
                <li>Risk of context dilution at boundaries</li>
                <li>Related information may span chunks</li>
                <li>Suboptimal for structured documents</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>300–1000 tokens (start with 512)</li>
                <li>Varies by embedding model and content density</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>10–20% of chunk size (50–150 tokens)</li>
                <li>Helps preserve context across chunk boundaries</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Implementation complexity and processing requirements</li>
                <li>Low</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Logs, FAQs, short documents</li>
                <li>Uniform text content</li>
                <li>Baseline RAG implementations</li>
                <li>Simple knowledge bases</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>Logs, FAQs, short documentLangChain Character/Token splitters</li>
                <li>LlamaIndex, Haystack</li>
                <li>Chroma, Weaviate, Pinecone</li>
                <li>Custom implementations (simple)</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Required expertise and implementation difficulty</li>
                <li>Beginner</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#521e7b',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-2',
      title: '2. Sentence-Level Chunking',
      slides: [
        {
          id: 5,
          title: '2. Sentence-Level Chunking',
          icon: { name: 'duo-paragraph' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#ff6464' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Coherent atomic units; good for precision</li>
                <li>Preserves natural language boundaries</li>
                <li>Avoids cutting mid-sentence</li>
                <li>Each chunk has clear semantic meaning</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Uneven sizes; may be too granular</li>
                <li>Short chunks might lack broader context</li>
                <li>Variable token counts complicate batching</li>
                <li>Requires sentence boundary detection</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>1–3 sentences (~50–150 tokens)</li>
                <li>Depends on sentence complexity and domain</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>Optional 1 sentence</li>
                <li>Often unnecessary as sentences form natural boundaries</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Requires sentence segmentation processing</li>
                <li>Medium</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>QA over short facts</li>
                <li>Classification tasks</li>
                <li>Snippet retrieval</li>
                <li>FAQ systems and knowledge bases</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>spaCy sentence segmenter</li>
                <li>NLTK sent_tokenize</li>
                <li>Stanza sentence splitter</li>
                <li>syntok and other sentence tokenizers</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Simple concept with some NLP preprocessing</li>
                <li>Beginner–Intermediate</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#651c1c',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-3',
      title: '3. Paragraph-Level Chunking',
      slides: [
        {
          id: 6,
          title: '3. Paragraph-Level Chunking',
          icon: { name: 'duo-layer-group' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#68ff95' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Natural units; preserves local context</li>
                <li>Respects author-defined text boundaries</li>
                <li>Maintains topical coherence within paragraphs</li>
                <li>Simpler implementation than semantic methods</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Paragraphs can be long or inconsistent</li>
                <li>Document formatting affects quality</li>
                <li>May create uneven chunk sizes</li>
                <li>Doesn't work well for documents without clear paragraphs</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>150–400 tokens (paragraph-bound)</li>
                <li>Size varies based on document formatting</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>0–1 sentence</li>
                <li>Minimal overlap needed as paragraphs are natural breaks</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Implementation complexity and processing requirements</li>
                <li>Low</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Blogs, reports, knowledge articles</li>
                <li>Well-structured documents</li>
                <li>Content with clear paragraph delineation</li>
                <li>Articles and essays</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>Markdown/HTML splitters</li>
                <li>Regex/newline heuristics</li>
                <li>Common text processing libraries</li>
                <li>Simple string split on double newlines</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Required expertise and implementation difficulty</li>
                <li>Beginner</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1c6532',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-4',
      title: '4. Recursive Character Text Splitting',
      slides: [
        {
          id: 7,
          title: '4. Recursive Character Text Splitting',
          icon: { name: 'duo-brain-circuit' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#8db7ff' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Smart fallback separators (\n\n, \n, space, char)</li>
                <li>Balances size vs structure preservation</li>
                <li>Better respects text boundaries than fixed-size</li>
                <li>More natural chunks than character-only splitting</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Still rule-based; semantics not guaranteed</li>
                <li>Requires tuning separator hierarchy</li>
                <li>May produce uneven chunk sizes</li>
                <li>No awareness of document structure or headings</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>400–800 tokens (typical)</li>
                <li>Depends on document structure and separator frequency</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>50–150 tokens</li>
                <li>Higher overlap (20%) for complex content with many separators</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Simple string operations, slightly more than fixed-size</li>
                <li>Low</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Mixed formatting documents</li>
                <li>PDFs post-extraction</li>
                <li>Text with varying structure</li>
                <li>General-purpose chunking baseline</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>LangChain RecursiveCharacterTextSplitter</li>
                <li>n8n integration nodes</li>
                <li>Snowflake SPLIT_TEXT_RECURSIVE_CHARACTER</li>
                <li>Easy to implement custom in any language</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Simple to implement and use, with minimal tuning required</li>
                <li>Beginner</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1c3765',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-5',
      title: '5. Structure-Aware Chunking',
      slides: [
        {
          id: 8,
          title: '5. Structure-Aware Chunking',
          icon: { name: 'duo-sitemap' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#58ff64' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Respects headers/sections; better coherence</li>
                <li>Preserves document structure and hierarchy</li>
                <li>Keeps related content together logically</li>
                <li>Maintains semantic integrity of document sections</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Parsing/layout extraction can be brittle</li>
                <li>Requires well-structured documents</li>
                <li>May produce uneven chunk sizes</li>
                <li>Quality depends on document formatting</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>300–1200 tokens (by section)</li>
                <li>Sizes vary based on document structure and heading levels</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>Minimal across sections</li>
                <li>Only necessary to maintain cross-sectional references</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Structure parsing and analysis requirements</li>
                <li>Medium</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Manuals, whitepapers, SOWs</li>
                <li>Documentation sites</li>
                <li>Academic papers with clear sections</li>
                <li>Technical reports, legal documents</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>Azure Document Layout</li>
                <li>Unstructured.io</li>
                <li>Docling</li>
                <li>LangChain HTML/MD splitters</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Requires structure parsing knowledge</li>
                <li>Intermediate</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1c6521',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-6',
      title: '6. Content-Aware Chunking',
      slides: [
        {
          id: 9,
          title: '6. Content-Aware Chunking',
          icon: { name: 'duo-brain-circuit' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#83ffec' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Heuristics by content type (lists, bullets, code, tables)</li>
                <li>Preserves meaning of special content elements</li>
                <li>Adapts to document formatting patterns</li>
                <li>Better chunk boundaries for mixed content</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Rules require tuning for different domains</li>
                <li>Domain-specific heuristics needed</li>
                <li>Harder to maintain than simpler methods</li>
                <li>May break on unusual formatting</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>200–800 tokens (dynamic)</li>
                <li>Varies based on content type and complexity</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>0–15% depending on content type</li>
                <li>More for complex content, less for structured elements</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Implementation complexity and processing requirements</li>
                <li>Medium</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Ebooks and technical guides</li>
                <li>Documentation sites and wikis</li>
                <li>Mixed content with lists/tables/code</li>
                <li>Formatting-rich documents</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>Custom heuristics (often bespoke)</li>
                <li>Coveo chunking strategies</li>
                <li>Unstructured.io content extractors</li>
                <li>Rule-based custom splitters</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Required expertise and implementation difficulty</li>
                <li>Intermediate</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1c655a',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-7',
      title: '7. Semantic Chunking (Embedding-Based)',
      slides: [
        {
          id: 10,
          title: '7. Semantic Chunking (Embedding-Based)',
          icon: { name: 'duo-wand-sparkles' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#7b7bff' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Topic-coherent chunks; high retrieval precision</li>
                <li>Better semantic understanding and context preservation</li>
                <li>Groups similar content regardless of physical proximity</li>
                <li>Improved relevance in retrieval results</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Requires embeddings; adds computation cost</li>
                <li>Tuning similarity thresholds can be challenging</li>
                <li>Quality depends on embedding model choice</li>
                <li>More implementation complexity than fixed methods</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>200–600 tokens per semantic unit</li>
                <li>Varies based on topic cohesion and content density</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>0–10% (minimal overlap needed)</li>
                <li>Semantic boundaries reduce need for significant overlap</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Embedding generation and similarity calculations add overhead</li>
                <li>Medium–High</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Multi-topic documents and research papers</li>
                <li>Knowledge bases with diverse content</li>
                <li>Product documentation libraries</li>
                <li>When retrieval precision is critical</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>Sentence-transformers library</li>
                <li>Pinecone examples and guides</li>
                <li>Superlinked VectorHub</li>
                <li>LlamaIndex SemanticSplitter</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Requires understanding of embeddings and similarity thresholds</li>
                <li>Intermediate–Advanced</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1c1c65',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-8',
      title: '8. TextTiling',
      slides: [
        {
          id: 11,
          title: '8. TextTiling',
          icon: { name: 'duo-gauge-high' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#ff6eef' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Topic segmentation via cohesion drops; classic, explainable</li>
                <li>Finds natural topic boundaries in text</li>
                <li>Good for documents with distinct topic shifts</li>
                <li>Based on linguistic principles of lexical cohesion</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Sensitive to parameters; domain variance</li>
                <li>Can struggle with gradual topic transitions</li>
                <li>Requires preprocessing and tuning</li>
                <li>Performance varies with text style and genre</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>Variable by tile/window (often 200–800 tokens)</li>
                <li>Based on topic boundaries, not fixed size</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>None</li>
                <li>Algorithm itself handles transitions between topics</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Requires lexical cohesion calculations across text segments</li>
                <li>Medium</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Articles, transcripts with topic shifts</li>
                <li>Academic papers, technical documentation</li>
                <li>Long-form content with distinct sections</li>
                <li>Multi-topic document segmentation</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>NLTK-style implementations</li>
                <li>Open-source repos (DeepTiling)</li>
                <li>Custom Python implementations</li>
                <li>Research-oriented NLP libraries</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Requires understanding of lexical cohesion and parameter tuning</li>
                <li>Intermediate</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#651c5d',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-9',
      title: '9. Discourse / RST Chunking',
      slides: [
        {
          id: 12,
          title: '9. Discourse / RST Chunking',
          icon: { name: 'duo-brain-circuit' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#63ffae' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Uses discourse units (EDUs) and relations for high fidelity semantics</li>
                <li>Captures rhetorical structure and text organization</li>
                <li>Preserves argumentative flow and logical connections</li>
                <li>Excellent for long-form content comprehension</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Parsers are computationally heavy</li>
                <li>Not turnkey; requires specialized knowledge</li>
                <li>Lower throughput than simpler methods</li>
                <li>Limited availability of production-ready tools</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>Combine Elementary Discourse Units (EDUs) to ~150–400 tokens</li>
                <li>Size based on discourse relation boundaries, not fixed counts</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>None by default (discourse boundaries are respected)</li>
                <li>Optional minimal overlap when coherence requires it</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Implementation complexity and processing requirements</li>
                <li>High</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Long-form question answering</li>
                <li>Summarization grounding</li>
                <li>Academic papers and legal documents</li>
                <li>Complex reasoning over structured arguments</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>Research-grade RST parsers</li>
                <li>Discourse segmentation toolkits</li>
                <li>Custom NLP pipelines</li>
                <li>Academic libraries (e.g., NLTK-RST)</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Required expertise and implementation difficulty</li>
                <li>Advanced</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1c653f',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-10',
      title: '10. Token-Aware Chunking',
      slides: [
        {
          id: 13,
          title: '10. Token-Aware Chunking',
          icon: { name: 'duo-code' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#eeff82' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Honors tokenizer limits; predictable fit</li>
                <li>Avoids truncation by embedding models</li>
                <li>Matches exact token windows of models</li>
                <li>More accurate size estimation than characters</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>May split syntax/meaning; tokenizer variance</li>
                <li>Different models tokenize differently</li>
                <li>Requires tokenizer access</li>
                <li>Not aligned with semantic boundaries</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>256–1024 tokens (match embedding model)</li>
                <li>Should align with context window of target model</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>10–20% (50–100 tokens typical)</li>
                <li>Helps preserve context across token boundaries</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Implementation complexity and processing requirements</li>
                <li>Low</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Any embedding pipeline; strict window budgets</li>
                <li>When using specific models with token limits</li>
                <li>Cross-model compatibility</li>
                <li>Production RAG systems</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>Tiktoken (OpenAI)</li>
                <li>Hugging Face tokenizers</li>
                <li>LangChain Token splitter</li>
                <li>spaCy tokenizers</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Required expertise and implementation difficulty</li>
                <li>Beginner</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#5b651c',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-11',
      title: '11. Heading / Title Anchor Chunking',
      slides: [
        {
          id: 14,
          title: '11. Heading / Title Anchor Chunking',
          icon: { name: 'duo-heading' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#7adcff' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Strong alignment to document navigation; great for docs sites</li>
                <li>Preserves document hierarchy and structure</li>
                <li>Makes retrieval context clearer with heading metadata</li>
                <li>Natural semantic boundaries for content</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Requires clean headings; won't work for unstructured text</li>
                <li>Uneven chunk sizes based on section length</li>
                <li>Some sections may be too large for context windows</li>
                <li>Different heading styles may cause inconsistencies</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>Section-bounded (200–1200 tokens)</li>
                <li>Varies based on document structure and heading density</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>0–5% between sections</li>
                <li>Sometimes includes parent heading for context</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Implementation complexity and processing requirements</li>
                <li>Low–Medium</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Markdown documentation and README files</li>
                <li>API references and technical docs sites</li>
                <li>Knowledge bases with clear structure</li>
                <li>Wikis and developer documentation</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>Markdown heading parsers</li>
                <li>GitHub Flavored Markdown (GFM) anchors</li>
                <li>Static site generators (Jekyll, MkDocs)</li>
                <li>LangChain's MarkdownTextSplitter</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Required expertise and implementation difficulty</li>
                <li>Beginner–Intermediate</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1c5265',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-12',
      title: '12. Markdown / HTML Structure Chunking',
      slides: [
        {
          id: 15,
          title: '12. Markdown / HTML Structure Chunking',
          icon: { name: 'duo-code' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#ee77ff' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Preserves lists, code blocks, tables, and other HTML/Markdown elements</li>
                <li>Maintains document structure and hierarchy</li>
                <li>Rich metadata extraction from headings, tags, and attributes</li>
                <li>Natural boundaries align with content meaning</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Requires well-structured source documents</li>
                <li>Boilerplate/noise unless filtered</li>
                <li>HTML parsing can be complex/brittle</li>
                <li>Format-specific implementation needed</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>Element-grouped 300–900 tokens</li>
                <li>Varies by element type (paragraph vs. section)</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>0–10% between elements or sections</li>
                <li>Often header/context overlap</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Parser overhead and DOM/AST processing requirements</li>
                <li>Medium</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Web pages, docs portals, blogs</li>
                <li>Markdown documentation repositories</li>
                <li>Technical blogs and wikis</li>
                <li>API documentation</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>BeautifulSoup, jsdom for HTML</li>
                <li>LangChain HTMLTextSplitter</li>
                <li>Markdown parsers (marked, remark)</li>
                <li>Documentation frameworks</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Requires HTML/Markdown parsing knowledge and structure handling</li>
                <li>Intermediate</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#5c1c65',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-13',
      title: '13. Table-Aware Chunking',
      slides: [
        {
          id: 16,
          title: '13. Table-Aware Chunking',
          icon: { name: 'duo-table' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#ffe983' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Extracts tables intact; supports downstream parsing</li>
                <li>Preserves tabular relationships and formats</li>
                <li>Enables structured data retrieval</li>
                <li>Maintains row/column associations</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Extraction quality varies across formats</li>
                <li>Formatting loss risk during conversion</li>
                <li>Complex tables require special handling</li>
                <li>May miss context around tables</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>Per table (convert to Markdown/JSON)</li>
                <li>100–500 tokens typical per table</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>0 (tables are typically self-contained units)</li>
                <li>Consider including caption or immediately adjacent text</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Table detection and extraction requires specialized processing</li>
                <li>Medium</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Financial reports with tabular data</li>
                <li>Technical specifications documents</li>
                <li>Benchmarking reports</li>
                <li>Research papers with data tables</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>Camelot (for PDF tables)</li>
                <li>Tabula</li>
                <li>pdfplumber</li>
                <li>Unstructured.io</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Requires table detection and specialized extraction</li>
                <li>Intermediate</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#65581c',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-14',
      title: '14. Code-Aware Chunking',
      slides: [
        {
          id: 17,
          title: '14. Code-Aware Chunking',
          icon: { name: 'duo-code' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#7ad0ff' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Split by function/class/module; preserves semantics</li>
                <li>Maintains code integrity and logical structure</li>
                <li>Keeps related declarations together</li>
                <li>Enhances retrieval relevance for code questions</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Language-specific tuning required</li>
                <li>Struggles with very long functions</li>
                <li>May miss cross-function relationships</li>
                <li>Parser dependency adds complexity</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>200–800 tokens or 50–150 LOC</li>
                <li>Function/class-based rather than fixed-size</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>Include signature + docstring (20–80 tokens)</li>
                <li>Function headers/imports may need to be included</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Implementation complexity and processing requirements</li>
                <li>Medium</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Code search and documentation</li>
                <li>RAG on code repositories</li>
                <li>API assistants and guides</li>
                <li>Developer documentation generation</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>LangChain code splitters</li>
                <li>Tree-sitter parsers</li>
                <li>Ripgrep + heuristics</li>
                <li>Language-specific AST parsers</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Required expertise and implementation difficulty</li>
                <li>Intermediate</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1c4b65',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-15',
      title: '15. Windowed Sentence Grouping',
      slides: [
        {
          id: 18,
          title: '15. Windowed Sentence Grouping',
          icon: { name: 'duo-paragraph' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#dc8aff' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Sentence-coherent with sliding stride; good balance</li>
                <li>Preserves natural language boundaries</li>
                <li>Better context preservation than fixed-size</li>
                <li>Minimizes sentence fragmentation</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Redundancy; increases storage requirements</li>
                <li>Parameter tuning needed (window/stride size)</li>
                <li>Uneven chunk sizes based on sentence lengths</li>
                <li>Requires sentence boundary detection</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>2–5 sentences (~100–300 tokens)</li>
                <li>Varies based on content complexity and sentence length</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>1–2 sentences</li>
                <li>Stride of 1-2 sentences between window starts</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Requires sentence detection and window management</li>
                <li>Low–Medium</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>News articles</li>
                <li>Product guides and documentation</li>
                <li>Transcripts and conversational content</li>
                <li>Content with natural narrative flow</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>spaCy + custom grouping</li>
                <li>NLTK sentence tokenizers</li>
                <li>Custom implementations</li>
                <li>LangChain extensions and utilities</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Requires sentence boundary detection and window management</li>
                <li>Beginner–Intermediate</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#4f1c65',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-16',
      title: '16. Adaptive Length Chunking',
      slides: [
        {
          id: 19,
          title: '16. Adaptive Length Chunking',
          icon: { name: 'duo-gauge-high' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#ff8787' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Sizes adapt to complexity/density; token-efficient</li>
                <li>Better context preservation for complex content</li>
                <li>Optimizes for both quality and efficiency</li>
                <li>Can allocate resources where most needed</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Requires good complexity metric; harder to debug</li>
                <li>Parameter tuning can be challenging</li>
                <li>More complex implementation</li>
                <li>Unpredictable storage requirements</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>200–1000 tokens (dynamic)</li>
                <li>Complex content: smaller chunks (200-400 tokens)</li>
                <li>Simple content: larger chunks (600-1000 tokens)</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>5–20% (dynamic)</li>
                <li>Higher overlap for complex content</li>
                <li>Lower overlap for simpler sections</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Requires complexity analysis for each document section</li>
                <li>Medium–High</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Mixed-density documents (e.g., textbooks)</li>
                <li>Technical documentation with varying complexity</li>
                <li>Documents with both narrative and technical sections</li>
                <li>Knowledge bases with heterogeneous content</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>Custom heuristics (lexical density, perplexity)</li>
                <li>LangChain custom splitter implementations</li>
                <li>Text complexity analysis libraries</li>
                <li>Advanced text processing frameworks</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Requires expertise in text analysis and complexity metrics</li>
                <li>Advanced</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#651c1c',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-17',
      title: '17. Summarization-Based Chunking',
      slides: [
        {
          id: 20,
          title: '17. Summarization-Based Chunking',
          icon: { name: 'duo-brain-circuit' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#ff7af6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Adds summaries/context to chunks; boosts recall</li>
                <li>Preserves high-level document meaning</li>
                <li>Improves chunk relevance in long contexts</li>
                <li>Enables retrieval of conceptual connections</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Expensive to generate summaries</li>
                <li>Risk of summary drift or hallucination</li>
                <li>Increases storage requirements</li>
                <li>LLM quality affects summary accuracy</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>Base 400–800 tokens + brief summary (50-150 tokens)</li>
                <li>Can be combined with other chunking methods</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>0–10% of base chunk size</li>
                <li>Summary provides cross-chunk context, reducing need for large overlaps</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Requires LLM inference for summary generation</li>
                <li>High</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Very long documents (books, reports)</li>
                <li>Agent memory systems</li>
                <li>Knowledge distillation</li>
                <li>Multi-hop reasoning tasks</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>LLMs (OpenAI, Anthropic, DBRX)</li>
                <li>LangChain map-reduce chains</li>
                <li>LlamaIndex summarization nodes</li>
                <li>Anthropic's contextual retrieval</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Requires LLM prompting expertise and pipeline optimization</li>
                <li>Advanced</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#651c60',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-18',
      title: '18. Graph-Based Semantic Chunking',
      slides: [
        {
          id: 21,
          title: '18. Graph-Based Semantic Chunking',
          icon: { name: 'duo-circle-nodes' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#95ff7a' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Community detection over sentence graph creates topic-pure chunks</li>
                <li>Captures complex semantic relationships between sentences</li>
                <li>Produces coherent chunks with high semantic integrity</li>
                <li>Better for multi-topic documents than simple approaches</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Complex implementation requiring graph algorithms</li>
                <li>Compute-heavy with large matrices for similarity</li>
                <li>Parameter-sensitive (clustering thresholds)</li>
                <li>Results vary based on embedding quality</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>Variable by communities (~150–600 tokens)</li>
                <li>Determined by graph structure and topic cohesion</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>0 (typically no overlap)</li>
                <li>Communities form natural boundaries without need for overlap</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Implementation complexity and processing requirements</li>
                <li>High</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Research papers with multiple topics</li>
                <li>Multi-topic reports and analyses</li>
                <li>Complex technical documentation</li>
                <li>Academic literature with dense concepts</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>sentence-transformers for embeddings</li>
                <li>NetworkX/igraph for graph algorithms</li>
                <li>Scikit-learn clustering implementations</li>
                <li>Custom research implementations</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Required expertise and implementation difficulty</li>
                <li>Advanced</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#2b651c',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-19',
      title: '19. Audio / ASR Time-Based Chunking',
      slides: [
        {
          id: 22,
          title: '19. Audio / ASR Time-Based Chunking',
          icon: { name: 'duo-microphone' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#8197ff' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Sync with timestamps; stream-friendly</li>
                <li>Preserves audio-to-text alignment</li>
                <li>Natural for audio/video content</li>
                <li>Enables seeking to specific audio segments</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Time slices may cut semantics; ASR errors propagate</li>
                <li>Variable information density in segments</li>
                <li>May need post-processing for coherence</li>
                <li>Audio quality affects chunk boundaries</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>15–60 seconds audio (or 150–500 tokens text)</li>
                <li>Balances completeness vs processing requirements</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>1–2 seconds (or 10–30 tokens)</li>
                <li>Helps maintain context across time-based boundaries</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>ASR processing and timestamp alignment requirements</li>
                <li>Medium</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Podcasts, earnings calls, lectures</li>
                <li>Meeting summarization</li>
                <li>Video content indexing</li>
                <li>Real-time speech processing</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>Whisper (OpenAI)</li>
                <li>AWS Transcribe</li>
                <li>Google Speech-to-Text</li>
                <li>Pyannote (for diarization)</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Requires audio processing pipelines and ASR integration</li>
                <li>Intermediate</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1c2965',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-20',
      title: '20. Speaker-Turn Chunking',
      slides: [
        {
          id: 23,
          title: '20. Speaker-Turn Chunking',
          icon: { name: 'duo-rocket' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#ff81aa' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Preserves dialog structure and conversation flow</li>
                <li>Improves speaker attribution in transcripts</li>
                <li>Maintains natural conversational segments</li>
                <li>Better context for Q&A pairs in dialogues</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Turn lengths vary significantly (some speakers talk more)</li>
                <li>Requires speaker diarization preprocessing</li>
                <li>Speaker detection can be error-prone</li>
                <li>May combine unrelated topics if same speaker continues</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>Per turn or grouped 2–3 turns (~100–300 tokens)</li>
                <li>Adaptive to conversation dynamics and speaker patterns</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>0–1 turn</li>
                <li>Helps maintain context between speaker transitions</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Implementation complexity and processing requirements</li>
                <li>Medium</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Meeting transcripts and summaries</li>
                <li>Customer support chats and conversations</li>
                <li>Podcast and interview transcriptions</li>
                <li>Multi-speaker audio processing</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>Pyannote audio diarization library</li>
                <li>AWS Transcribe with speaker diarization</li>
                <li>Whisper + diarization pipelines</li>
                <li>Google Speech-to-Text with speaker recognition</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Required expertise and implementation difficulty</li>
                <li>Intermediate</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#651c34',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-21',
      title: '21. QA-Focused Chunking',
      slides: [
        {
          id: 24,
          title: '21. QA-Focused Chunking',
          icon: { name: 'duo-eraser' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#ffff6f' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Tailored to answer spans; high precision for QA</li>
                <li>Optimized for question-answer retrieval</li>
                <li>Improves relevance in QA systems</li>
                <li>Better context for specific questions</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Needs label generation or heuristics; setup cost</li>
                <li>Requires understanding of question patterns</li>
                <li>May not generalize well to non-QA tasks</li>
                <li>More upfront work to implement properly</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>100–400 tokens around candidate answers</li>
                <li>Sized to capture complete answer contexts</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>0–10% (minimal overlap needed)</li>
                <li>Focus on answer boundaries rather than arbitrary overlaps</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Requires additional processing to identify potential answers</li>
                <li>Medium–High</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Knowledge bases</li>
                <li>Policy QA, FAQ systems</li>
                <li>Support documentation</li>
                <li>Information extraction from longer texts</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>LlamaIndex QuestionGenerator</li>
                <li>Rerankers (Cohere, Jina)</li>
                <li>Custom QA pipelines</li>
                <li>SentenceTransformers + question generation</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Requires QA expertise and significant tuning</li>
                <li>Advanced</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#65651c',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-22',
      title: '22. Page-Preservation Chunking',
      slides: [
        {
          id: 25,
          title: '22. Page-Preservation Chunking',
          icon: { name: 'duo-star' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#aa80ff' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Simple for PDFs; keeps page context and references</li>
                <li>Maintains original document's page structure</li>
                <li>Easy to cite and reference by page number</li>
                <li>Works well with documents that have page-based organization</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Pages aren't semantic units; variable density</li>
                <li>May split logical content across pages</li>
                <li>Can be inefficient for dense or sparse pages</li>
                <li>References may lose context at page boundaries</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>Per page (variable tokens)</li>
                <li>Typically ranges from 300-1200 tokens depending on page density</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>0–5% between pages (optional)</li>
                <li>May include headers/footers for continuity</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Simple extraction with potential formatting challenges</li>
                <li>Low–Medium</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Scanned documents</li>
                <li>Page-referenced citations</li>
                <li>Legal documents with page numbers</li>
                <li>Academic papers with page references</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>pdfplumber</li>
                <li>PyPDF2</li>
                <li>Unstructured.io</li>
                <li>PDF extraction libraries</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Straightforward implementation with minimal tuning</li>
                <li>Beginner</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#341c65',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-23',
      title: '23. Caption + Context Chunking',
      slides: [
        {
          id: 26,
          title: '23. Caption + Context Chunking',
          icon: { name: 'duo-compress' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#82ff96' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Pairs figure/table captions with nearby text</li>
                <li>Boosts multimodal grounding</li>
                <li>Preserves visual-textual relationships</li>
                <li>Enhances retrieval of visual content</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Requires reliable layout detection</li>
                <li>Struggles with complex document layouts</li>
                <li>Needs tuning of window size around captions</li>
                <li>Limited to documents with explicit figures/tables</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>100–400 tokens near caption</li>
                <li>Include caption text plus surrounding explanatory paragraphs</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>1–2 sentences around region</li>
                <li>Enough to connect with surrounding content sections</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Requires layout analysis and figure/caption detection</li>
                <li>Medium</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Scientific papers with figures</li>
                <li>Reports with tables and charts</li>
                <li>Technical documentation with diagrams</li>
                <li>Educational materials with illustrations</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>Unstructured.io</li>
                <li>DocTR (Document Text Recognition)</li>
                <li>LayoutParser</li>
                <li>Custom PDF extractors with layout awareness</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Requires document structure and layout understanding</li>
                <li>Intermediate</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1c6528',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-24',
      title: '24. Metadata-Aware Chunking',
      slides: [
        {
          id: 27,
          title: '24. Metadata-Aware Chunking',
          icon: { name: 'duo-tags' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#e086ff' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Adds filters (section, author, date) to chunks</li>
                <li>Improves retrieval routing and precision</li>
                <li>Enables faceted search and filtering</li>
                <li>Better document provenance tracking</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Metadata extraction requires additional effort</li>
                <li>Governance and schema management needed</li>
                <li>Increased storage requirements</li>
                <li>Quality depends on metadata accuracy</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>Inherit from base chunking method (e.g., 300–800 tokens)</li>
                <li>Metadata is orthogonal to chunk size decisions</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>Same as base chunking method</li>
                <li>Metadata enhancement doesn't affect overlap strategy</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Base chunking cost plus metadata extraction overhead</li>
                <li>Medium</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Enterprise search with facets</li>
                <li>Regulatory/compliance document retrieval</li>
                <li>Multi-domain knowledge bases</li>
                <li>Content governance requirements</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>LangChain Document schemas</li>
                <li>Weaviate with filters</li>
                <li>Azure Cognitive Search</li>
                <li>Pinecone, Chroma with metadata filtering</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Requires schema design and metadata extraction</li>
                <li>Intermediate</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#521c65',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-25',
      title: '25. Hybrid Chunking',
      slides: [
        {
          id: 28,
          title: '25. Hybrid Chunking',
          icon: { name: 'duo-compass' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#ff83a2' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Best of multiple methods; adaptable by document type</li>
                <li>Can handle mixed content in heterogeneous corpora</li>
                <li>Optimizes for both context and relevance</li>
                <li>More flexible for enterprise applications</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>More moving parts; requires evals to tune</li>
                <li>Higher development and maintenance overhead</li>
                <li>Harder to debug retrieval issues</li>
                <li>Requires careful orchestration of techniques</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>Varies based on component techniques</li>
                <li>E.g., structure-aware for sections + semantic refinement within sections</li>
                <li>Typically 300-800 tokens after composition</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>Varies by component technique</li>
                <li>Typically 10-20% for boundary smoothing</li>
                <li>Strategic overlaps at semantic boundaries</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Depends on component techniques and pipeline complexity</li>
                <li>Variable</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Production RAG systems</li>
                <li>Heterogeneous document collections</li>
                <li>Enterprise knowledge management</li>
                <li>Multi-modal content (docs + code + tables)</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>LangChain/LlamaIndex composition</li>
                <li>Custom pipelines and orchestration</li>
                <li>MLOps frameworks with pipeline support</li>
                <li>Enterprise RAG platforms</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Requires expertise in multiple chunking methods and evaluation</li>
                <li>Intermediate–Advanced</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#651c2e',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategy-26',
      title: '26. Sliding Window Chunking',
      slides: [
        {
          id: 29,
          title: '26. Sliding Window Chunking',
          icon: { name: 'duo-table' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em', color: '#78f9ff' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul>
                <li>Preserves continuity and context between chunks</li>
                <li>Reduces information loss at boundaries</li>
                <li>Better semantic coherence across transitions</li>
                <li>Improves retrieval for context-dependent queries</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul>
                <li>Introduces redundancy in storage</li>
                <li>Increases embedding costs (same content embedded multiple times)</li>
                <li>Can create duplicated results without filtering</li>
                <li>Overlap size requires tuning for optimal performance</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" darkModeInvert={true} />
                Best Chunk Size
              </h4>
              <ul>
                <li>300–800 tokens for each window</li>
                <li>Larger sizes for complex documents with long contextual dependencies</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                Overlap Size
              </h4>
              <ul>
                <li>15–30% of chunk size (or 1–2 sentences)</li>
                <li>Larger overlap for documents with complex cross-references</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" darkModeInvert={true} />
                Computational Cost
              </h4>
              <ul>
                <li>Slightly higher than fixed-size due to overlap management</li>
                <li>Low–Medium</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="1x" darkModeInvert={true} />
                Use Cases / Examples
              </h4>
              <ul>
                <li>Legal documents and contracts</li>
                <li>Academic papers and research reports</li>
                <li>Policy documents where cross-references matter</li>
                <li>Technical specifications with interdependent sections</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-network-wired" sizeName="1x" darkModeInvert={true} />
                Tooling Support
              </h4>
              <ul>
                <li>LangChain sliding window implementations</li>
                <li>LlamaIndex text splitters with overlap</li>
                <li>Custom token window implementations</li>
                <li>Most vector databases support overlapping chunks</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="1x" darkModeInvert={true} />
                Complexity Level
              </h4>
              <ul>
                <li>Straightforward implementation with slightly more complexity than fixed-size</li>
                <li>Beginner</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1c6265',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 30,
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
          id: 31,
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
          id: 32,
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

