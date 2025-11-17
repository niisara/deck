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
          <h2 style={{ marginBottom: '40px' }}>Practical guidance, defaults, and trade-offs for high-quality retrieval</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', marginTop: '50px' }}>
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-file" sizeName="4x" style={{ color: '#3498db' }} />
              <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Document</p>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-scissors" sizeName="4x" style={{ color: '#f39c12' }} />
              <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Chunking</p>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
            <div style={{ textAlign: 'center' }}>
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
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.65em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
            <div>
              <h4 style={{ color: '#3498db', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-ruler" sizeName="1x" darkModeInvert={true} />
                Fixed/Token-based (1-3)
              </h4>
              <ul style={{ lineHeight: '1.5', fontSize: '0.95em' }}>
                <li>Fixed-Size Chunking</li>
                <li>Sliding Window Chunking</li>
                <li>Token-Aware Chunking</li>
              </ul>
              <h4 style={{ color: '#2ecc71', marginTop: '12px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-paragraph" sizeName="1x" darkModeInvert={true} />
                Sentence/Paragraph (4-6)
              </h4>
              <ul style={{ lineHeight: '1.5', fontSize: '0.95em' }}>
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
              <ul style={{ lineHeight: '1.5', fontSize: '0.95em' }}>
                <li>Structure-Aware Chunking</li>
                <li>Content-Aware Chunking</li>
                <li>Heading/Title Anchor</li>
                <li>Markdown/HTML Structure</li>
                <li>Table-Aware Chunking</li>
                <li>Code-Aware Chunking</li>
                <li>Page-Preservation</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#f39c12', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-brain" sizeName="1x" darkModeInvert={true} />
                Semantic/Adaptive (14-19)
              </h4>
              <ul style={{ lineHeight: '1.5', fontSize: '0.95em' }}>
                <li>Semantic (Embedding-Based)</li>
                <li>TextTiling</li>
                <li>Discourse/RST Chunking</li>
                <li>Graph-Based Semantic</li>
                <li>Recursive Character Splitting</li>
                <li>Adaptive Length Chunking</li>
              </ul>
              <h4 style={{ color: '#e67e22', marginTop: '12px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-wand-sparkles" sizeName="1x" darkModeInvert={true} />
                Special-Purpose (20-26)
              </h4>
              <ul style={{ lineHeight: '1.5', fontSize: '0.95em' }}>
                <li>Summarization-Based</li>
                <li>Audio/ASR Time-Based</li>
                <li>Speaker-Turn Chunking</li>
                <li>QA-Focused</li>
                <li>Caption + Context</li>
                <li>Metadata-Aware</li>
                <li>Hybrid Chunking</li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: '20px', textAlign: 'center', fontSize: '1.1em', padding: '12px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px' }}>
            <strong>Each technique includes:</strong> Pros, Cons, Best Chunk Size, Overlap Size, Computational Cost, Use Cases, Tooling Support, and Complexity Level
          </p>
        </div>
      ),
      backgroundColor: '#27AE60',
      notes: '26 techniques organized into 5 categories: Fixed/Token, Sentence/Paragraph, Structure-aware, Semantic/Adaptive, and Special-Purpose'
        }
      ]
    },
    {
      id: 'techniques-1-2',
      title: 'Fixed-Size & Sliding Window (1-2)',
      slides: [
        {
          id: 4,
          title: 'Fixed-Size & Sliding Window (1-2)',
          icon: { name: 'duo-ruler-horizontal' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '15px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-ruler-horizontal" sizeName="1x" darkModeInvert={true} />
                1. Fixed-Size Chunking
              </h3>
              <p><strong>Size:</strong> 300–1000 tokens (start with 512)</p>
              <p><strong>Overlap:</strong> 10–20% (50–150 tokens)</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Simple, predictable, fast; baseline for A/B tests</p>
              <p><strong style={{ color: '#2ecc71' }}>✓</strong> Consistent chunk sizes for embedding models</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Ignores semantics; may split sentences</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Risk of context dilution at boundaries</p>
              <p style={{ marginTop: '10px', padding: '8px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '5px', fontSize: '0.95em' }}>
                <strong>Use:</strong> Logs, FAQs, baseline RAG, uniform text<br/>
                <strong>Tools:</strong> LangChain, LlamaIndex, Haystack<br/>
                <strong>Complexity:</strong> Low (Beginner)
              </p>
            </div>
            <div style={{ border: '2px solid #1abc9c', borderRadius: '10px', padding: '15px' }}>
              <h3 style={{ color: '#1abc9c', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-window-maximize" sizeName="1x" darkModeInvert={true} />
                2. Sliding Window Chunking
              </h3>
              <p><strong>Size:</strong> 300–800 tokens per window</p>
              <p><strong>Overlap:</strong> 15–30% (1–2 sentences)</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Preserves continuity and context between chunks</p>
              <p><strong style={{ color: '#2ecc71' }}>✓</strong> Reduces information loss at boundaries</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Introduces redundancy in storage</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Increases embedding costs (same content embedded multiple times)</p>
              <p style={{ marginTop: '10px', padding: '8px', backgroundColor: 'rgba(26, 188, 156, 0.1)', borderRadius: '5px', fontSize: '0.95em' }}>
                <strong>Use:</strong> Technical specs, legal docs, academic papers<br/>
                <strong>Tools:</strong> LangChain sliding window, LlamaIndex<br/>
                <strong>Complexity:</strong> Low–Medium (Beginner)
              </p>
            </div>
          </div>
          <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>📏 Start Here:</strong> Fixed-size for baselines, Sliding window for better context preservation
          </div>
        </div>
      ),
      backgroundColor: '#3498DB',
      notes: 'Fixed-size for simplicity and predictability; Sliding window for context continuity with overlap'
        }
      ]
    },
    {
      id: 'techniques-3-4',
      title: 'Token & Sentence-Based (3-4)',
      slides: [
        {
          id: 5,
          title: 'Token & Sentence-Based (3-4)',
          icon: { name: 'duo-paragraph' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '15px' }}>
              <h3 style={{ color: '#9b59b6', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-hashtag" sizeName="1x" darkModeInvert={true} />
                3. Token-Aware Chunking
              </h3>
              <p><strong>Size:</strong> 256–1024 tokens (match embedding model)</p>
              <p><strong>Overlap:</strong> 10–20% (50–100 tokens)</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Honors tokenizer limits; predictable fit</p>
              <p><strong style={{ color: '#2ecc71' }}>✓</strong> Avoids truncation by embedding models</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> May split syntax/meaning; tokenizer variance</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Not aligned with semantic boundaries</p>
              <p style={{ marginTop: '10px', padding: '8px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '5px', fontSize: '0.95em' }}>
                <strong>Use:</strong> Production RAG, strict window budgets<br/>
                <strong>Tools:</strong> tiktoken, HuggingFace tokenizers, LangChain<br/>
                <strong>Complexity:</strong> Low (Beginner)
              </p>
            </div>
            <div style={{ border: '2px solid #e67e22', borderRadius: '10px', padding: '15px' }}>
              <h3 style={{ color: '#e67e22', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-quote-left" sizeName="1x" darkModeInvert={true} />
                4. Sentence-Level Chunking
              </h3>
              <p><strong>Size:</strong> 1–3 sentences (~50–150 tokens)</p>
              <p><strong>Overlap:</strong> Optional 1 sentence</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Coherent atomic units; good for precision</p>
              <p><strong style={{ color: '#2ecc71' }}>✓</strong> Preserves natural language boundaries</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Uneven sizes; may be too granular</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Short chunks might lack broader context</p>
              <p style={{ marginTop: '10px', padding: '8px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '5px', fontSize: '0.95em' }}>
                <strong>Use:</strong> FAQ systems, QA over short facts, snippet retrieval<br/>
                <strong>Tools:</strong> spaCy, NLTK sent_tokenize, Stanza<br/>
                <strong>Complexity:</strong> Medium (Beginner–Intermediate)
              </p>
            </div>
          </div>
          <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>🎯 Token-Aware:</strong> Best for matching model limits • <strong>Sentence-Level:</strong> Best for precise, atomic retrieval
          </div>
        </div>
      ),
      backgroundColor: '#8E44AD',
      notes: 'Token-aware for model compatibility; Sentence-level for natural atomic units with semantic boundaries'
        }
      ]
    },
    {
      id: 'techniques-5-6',
      title: 'Paragraph & Recursive (5-6)',
      slides: [
        {
          id: 6,
          title: 'Paragraph & Recursive (5-6)',
          icon: { name: 'duo-paragraph' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ border: '2px solid #2ecc71', borderRadius: '10px', padding: '15px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-paragraph" sizeName="1x" darkModeInvert={true} />
                5. Paragraph-Level Chunking
              </h3>
              <p><strong>Size:</strong> 150–400 tokens (paragraph-bound)</p>
              <p><strong>Overlap:</strong> 0–1 sentence</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Natural units; preserves local context</p>
              <p><strong style={{ color: '#2ecc71' }}>✓</strong> Respects author-defined text boundaries</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Paragraphs can be long or inconsistent</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Document formatting affects quality</p>
              <p style={{ marginTop: '10px', padding: '8px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '5px', fontSize: '0.95em' }}>
                <strong>Use:</strong> Articles, essays, blogs, reports<br/>
                <strong>Tools:</strong> Markdown/HTML splitters, simple regex<br/>
                <strong>Complexity:</strong> Low (Beginner)
              </p>
            </div>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '15px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-layer-group" sizeName="1x" darkModeInvert={true} />
                6. Recursive Character Splitting
              </h3>
              <p><strong>Size:</strong> 400–800 tokens (typical)</p>
              <p><strong>Overlap:</strong> 50–150 tokens (20%)</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Smart fallback separators (\\n\\n, \\n, space, char)</p>
              <p><strong style={{ color: '#2ecc71' }}>✓</strong> Better respects text boundaries than fixed-size</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Still rule-based; semantics not guaranteed</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Requires tuning separator hierarchy</p>
              <p style={{ marginTop: '10px', padding: '8px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '5px', fontSize: '0.95em' }}>
                <strong>Use:</strong> General-purpose baseline, mixed format docs, PDFs<br/>
                <strong>Tools:</strong> LangChain RecursiveCharacterTextSplitter<br/>
                <strong>Complexity:</strong> Low (Beginner)
              </p>
            </div>
          </div>
          <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>📄 Paragraph:</strong> Natural for well-structured docs • <strong>Recursive:</strong> Flexible fallback for mixed content
          </div>
        </div>
      ),
      backgroundColor: '#27AE60',
      notes: 'Paragraph-level for natural units; Recursive character splitting for intelligent fallback hierarchy'
        }
      ]
    },
    {
      id: 'techniques-7-9',
      title: 'Structure-Aware Techniques (7-9)',
      slides: [
        {
          id: 7,
          title: 'Structure-Aware Techniques (7-9)',
          icon: { name: 'duo-sitemap' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.68em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#9b59b6', marginBottom: '8px' }}>7. Structure-Aware</h4>
              <p><strong>Size:</strong> 300–1200 tokens (by section)</p>
              <p><strong>Overlap:</strong> Minimal across sections</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Respects headers/sections; better coherence</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Parsing can be brittle; needs well-structured docs</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '6px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '5px' }}>
                <strong>Use:</strong> Technical reports, legal docs, manuals<br/>
                <strong>Tools:</strong> Unstructured.io, Azure Document Layout<br/>
                <strong>Complexity:</strong> Medium (Intermediate)
              </p>
            </div>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#3498db', marginBottom: '8px' }}>8. Content-Aware</h4>
              <p><strong>Size:</strong> 200–800 tokens (dynamic)</p>
              <p><strong>Overlap:</strong> 0–15% based on content type</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Heuristics by content type (lists, bullets, code, tables)</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Rules require tuning; domain-specific heuristics</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '6px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '5px' }}>
                <strong>Use:</strong> Formatting-rich docs, ebooks, technical guides<br/>
                <strong>Tools:</strong> Custom heuristics, Coveo strategies<br/>
                <strong>Complexity:</strong> Medium (Intermediate)
              </p>
            </div>
            <div style={{ border: '2px solid #1abc9c', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#1abc9c', marginBottom: '8px' }}>9. Heading/Title Anchor</h4>
              <p><strong>Size:</strong> 200–1200 tokens (section-bounded)</p>
              <p><strong>Overlap:</strong> 0–5% between sections</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Strong alignment to document navigation; great for docs sites</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Requires clean headings; uneven chunk sizes</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '6px', backgroundColor: 'rgba(26, 188, 156, 0.1)', borderRadius: '5px' }}>
                <strong>Use:</strong> Wikis, developer docs, API references<br/>
                <strong>Tools:</strong> Markdown parsers, LangChain MarkdownTextSplitter<br/>
                <strong>Complexity:</strong> Low–Medium (Beginner–Intermediate)
              </p>
            </div>
          </div>
          <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>🏗️ Structure-Aware:</strong> Leverages document organization for semantically meaningful chunks
          </div>
        </div>
      ),
      backgroundColor: '#8E44AD',
      notes: 'Structure-aware techniques leverage document organization: headers, content types, and navigation structure'
        }
      ]
    },
    {
      id: 'techniques-10-13',
      title: 'Markup & Specialized Structure (10-13)',
      slides: [
        {
          id: 8,
          title: 'Markup & Specialized Structure (10-13)',
          icon: { name: 'duo-code' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.65em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
            <div style={{ border: '2px solid #f39c12', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#f39c12', marginBottom: '8px' }}>10. Markdown/HTML Structure</h4>
              <p><strong>Size:</strong> 300–800 tokens (preserve element boundaries)</p>
              <p><strong>Overlap:</strong> 0–10%</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Preserves lists, code blocks, tables, HTML/Markdown elements</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Requires well-structured source; boilerplate/noise unless filtered</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '6px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '5px' }}>
                <strong>Use:</strong> Documentation sites, web pages, wikis<br/>
                <strong>Tools:</strong> BeautifulSoup, lxml, LangChain HTML splitters
              </p>
            </div>
            <div style={{ border: '2px solid #e67e22', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#e67e22', marginBottom: '8px' }}>11. Table-Aware Chunking</h4>
              <p><strong>Size:</strong> Full table as single chunk (~250 tokens typical)</p>
              <p><strong>Overlap:</strong> Include surrounding context</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Keeps table data together; enables structured QA</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Large tables may exceed token limits; needs special handling</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '6px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '5px' }}>
                <strong>Use:</strong> Financial reports, pricing tables, data-heavy docs<br/>
                <strong>Tools:</strong> Unstructured.io, Camelot (PDF), table parsers
              </p>
            </div>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#3498db', marginBottom: '8px' }}>12. Code-Aware Chunking</h4>
              <p><strong>Size:</strong> 400 tokens or one function (include signature+docstring)</p>
              <p><strong>Overlap:</strong> Include context (imports, class definition)</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Respects functions/classes; preserves semantic units</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Long functions/classes may be too large; language-specific</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '6px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '5px' }}>
                <strong>Use:</strong> Code repos, API documentation, technical tutorials<br/>
                <strong>Tools:</strong> Tree-sitter, language AST parsers, LangChain CodeTextSplitter
              </p>
            </div>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#9b59b6', marginBottom: '8px' }}>13. Page-Preservation</h4>
              <p><strong>Size:</strong> Per page (variable)</p>
              <p><strong>Overlap:</strong> Minimal</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Maintains page references; useful for citations</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Page boundaries arbitrary; may split context</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '6px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '5px' }}>
                <strong>Use:</strong> Academic papers, legal documents, books<br/>
                <strong>Tools:</strong> PyPDF2, pdfplumber, page-aware PDF parsers
              </p>
            </div>
          </div>
          <div style={{ marginTop: '15px', padding: '10px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>🔧 Specialized Structure:</strong> Format-specific chunking for HTML, tables, code, and page-bounded content
          </div>
        </div>
      ),
      backgroundColor: '#E67E22',
      notes: 'Specialized structure techniques: Markdown/HTML, Table-aware, Code-aware, and Page-preservation'
        }
      ]
    },
    {
      id: 'techniques-14-17',
      title: 'Semantic Chunking (14-17)',
      slides: [
        {
          id: 9,
          title: 'Semantic Chunking (14-17)',
          icon: { name: 'duo-brain' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.68em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
            <div style={{ border: '2px solid #e74c3c', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#e74c3c', marginBottom: '8px' }}>14. Semantic (Embedding-Based)</h4>
              <p><strong>Size:</strong> 200–600 tokens per semantic unit</p>
              <p><strong>Overlap:</strong> 0–10% (minimal, semantic boundaries)</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Topic-coherent chunks; high retrieval precision</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Requires embeddings; adds computation cost</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '6px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '5px' }}>
                <strong>Use:</strong> Multi-topic documents, knowledge bases, product docs<br/>
                <strong>Tools:</strong> sentence-transformers, LlamaIndex SemanticSplitter<br/>
                <strong>Complexity:</strong> Medium–High (Intermediate–Advanced)
              </p>
            </div>
            <div style={{ border: '2px solid #1abc9c', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#1abc9c', marginBottom: '8px' }}>15. TextTiling</h4>
              <p><strong>Size:</strong> Variable by tile/window (200–800 tokens)</p>
              <p><strong>Overlap:</strong> None (algorithm handles transitions)</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Topic segmentation via cohesion drops; classic, explainable</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Sensitive to parameters; domain variance</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '6px', backgroundColor: 'rgba(26, 188, 156, 0.1)', borderRadius: '5px' }}>
                <strong>Use:</strong> Multi-topic documents, articles, transcripts<br/>
                <strong>Tools:</strong> NLTK implementations, custom Python<br/>
                <strong>Complexity:</strong> Medium (Intermediate)
              </p>
            </div>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#9b59b6', marginBottom: '8px' }}>16. Discourse/RST Chunking</h4>
              <p><strong>Size:</strong> Combine EDUs to ~150–400 tokens</p>
              <p><strong>Overlap:</strong> None by default (discourse boundaries)</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Uses discourse units (EDUs); high fidelity semantics</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Parsers computationally heavy; not turnkey</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '6px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '5px' }}>
                <strong>Use:</strong> Complex reasoning, academic papers, legal docs<br/>
                <strong>Tools:</strong> Research-grade RST parsers, NLTK-RST<br/>
                <strong>Complexity:</strong> High (Advanced)
              </p>
            </div>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#3498db', marginBottom: '8px' }}>17. Graph-Based Semantic</h4>
              <p><strong>Size:</strong> Variable based on graph communities</p>
              <p><strong>Overlap:</strong> None (graph partitioning)</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Uses entity/concept graphs; finds related content</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Complex implementation; high computational cost</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '6px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '5px' }}>
                <strong>Use:</strong> Knowledge graphs, research papers, interconnected docs<br/>
                <strong>Tools:</strong> Neo4j, NetworkX, custom graph algorithms<br/>
                <strong>Complexity:</strong> High (Advanced)
              </p>
            </div>
          </div>
          <div style={{ marginTop: '15px', padding: '10px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>🧠 Semantic Methods:</strong> Understanding meaning and topic boundaries for high-quality retrieval
          </div>
        </div>
      ),
      backgroundColor: '#C0392B',
      notes: 'Semantic chunking: Embedding-based, TextTiling, Discourse/RST, and Graph-based for topic-coherent chunks'
        }
      ]
    },
    {
      id: 'techniques-18-20',
      title: 'Adaptive & LLM-Based (18-20)',
      slides: [
        {
          id: 10,
          title: 'Adaptive & LLM-Based (18-20)',
          icon: { name: 'duo-wand-magic-sparkles' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
            <div style={{ border: '2px solid #f39c12', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#f39c12', marginBottom: '8px' }}>18. Windowed Sentence Grouping</h4>
              <p><strong>Size:</strong> 3–5 sentences per chunk</p>
              <p><strong>Overlap:</strong> Stride of 2 sentences</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Natural boundaries with context</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Variable token counts</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '6px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '5px' }}>
                <strong>Use:</strong> Narrative text, stories<br/>
                <strong>Tools:</strong> Custom implementations<br/>
                <strong>Complexity:</strong> Low (Beginner)
              </p>
            </div>
            <div style={{ border: '2px solid #e67e22', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#e67e22', marginBottom: '8px' }}>19. Adaptive Length Chunking</h4>
              <p><strong>Size:</strong> Dynamic based on content complexity</p>
              <p><strong>Overlap:</strong> Adaptive</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Adjusts to content density</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Complex to implement and tune</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '6px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '5px' }}>
                <strong>Use:</strong> Mixed content types<br/>
                <strong>Tools:</strong> Custom ML models<br/>
                <strong>Complexity:</strong> High (Advanced)
              </p>
            </div>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#9b59b6', marginBottom: '8px' }}>20. Summarization-Based</h4>
              <p><strong>Size:</strong> Generate compact summaries (~150 tokens)</p>
              <p><strong>Overlap:</strong> None (summaries are independent)</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Compact representation; improves retrieval efficiency</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> LLM cost; potential information loss</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '6px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '5px' }}>
                <strong>Use:</strong> Long documents, hierarchical retrieval<br/>
                <strong>Tools:</strong> GPT-4, Claude, summarization models<br/>
                <strong>Complexity:</strong> Medium–High (Intermediate–Advanced)
              </p>
            </div>
          </div>
          <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>🔄 Adaptive Methods:</strong> Dynamic chunking that adjusts to content characteristics and complexity
          </div>
        </div>
      ),
      backgroundColor: '#D35400',
      notes: 'Adaptive techniques: Windowed sentence grouping, adaptive length, and LLM-based summarization'
        }
      ]
    },
    {
      id: 'techniques-21-22',
      title: 'Audio & Multimedia (21-22)',
      slides: [
        {
          id: 11,
          title: 'Audio & Multimedia (21-22)',
          icon: { name: 'duo-video' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginBottom: '25px' }}>
            <SvgIcon iconName="duo-microphone" sizeName="3x" style={{ color: '#3498db' }} />
            <SvgIcon iconName="duo-waveform-lines" sizeName="3x" style={{ color: '#1abc9c' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '18px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '12px' }}>21. Audio/ASR Time-Based Chunking</h3>
              <p><strong>Size:</strong> 30-second windows</p>
              <p><strong>Overlap:</strong> 2-second overlap</p>
              <p style={{ marginTop: '10px' }}><strong>How:</strong> Fixed time intervals aligned with transcription timestamps</p>
              <div style={{ marginTop: '12px' }}>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Consistent time-based segments</p>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Easy to align with audio timestamps</p>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Predictable chunk sizes</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> May split sentences or phrases mid-thought</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Doesn't respect semantic boundaries</p>
              </div>
              <p style={{ marginTop: '12px', padding: '10px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '5px' }}>
                <strong>Use Cases:</strong> Podcast transcripts, meeting recordings, lectures<br/>
                <strong>Tools:</strong> Whisper timestamps, Rev.ai, AssemblyAI<br/>
                <strong>Complexity:</strong> Low–Medium (Beginner–Intermediate)
              </p>
            </div>
            <div style={{ border: '2px solid #1abc9c', borderRadius: '10px', padding: '18px' }}>
              <h3 style={{ color: '#1abc9c', marginBottom: '12px' }}>22. Speaker-Turn Chunking</h3>
              <p><strong>Size:</strong> 1–3 turns per chunk (~200 tokens typical)</p>
              <p><strong>Overlap:</strong> Optional previous turn for context</p>
              <p style={{ marginTop: '10px' }}><strong>How:</strong> Group by speaker diarization boundaries</p>
              <div style={{ marginTop: '12px' }}>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Preserves conversational context</p>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Natural dialogue boundaries</p>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Speaker attribution maintained</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Variable chunk sizes based on speaker</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Requires accurate speaker diarization</p>
              </div>
              <p style={{ marginTop: '12px', padding: '10px', backgroundColor: 'rgba(26, 188, 156, 0.1)', borderRadius: '5px' }}>
                <strong>Use Cases:</strong> Interviews, customer support calls, panel discussions<br/>
                <strong>Tools:</strong> Pyannote, AssemblyAI speaker labels<br/>
                <strong>Complexity:</strong> Medium (Intermediate)
              </p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#2980B9',
      notes: 'Audio/multimedia chunking: Time-based for consistent segments, Speaker-turn for conversational context'
        }
      ]
    },
    {
      id: 'techniques-23-26',
      title: 'Special-Purpose Techniques (23-26)',
      slides: [
        {
          id: 12,
          title: 'Special-Purpose Techniques (23-26)',
          icon: { name: 'duo-wand-sparkles' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.68em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
            <div style={{ border: '2px solid #e67e22', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#e67e22', marginBottom: '8px' }}>23. QA-Focused Chunking</h4>
              <p><strong>Size:</strong> 300 tokens around answer candidates</p>
              <p><strong>Overlap:</strong> Context-dependent</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Optimized for QA retrieval; includes question context</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Requires identifying answer locations; domain-specific</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '6px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '5px' }}>
                <strong>Use:</strong> FAQ systems, customer support, educational content<br/>
                <strong>Tools:</strong> Custom QA pipelines, SQuAD-style chunking<br/>
                <strong>Complexity:</strong> Medium–High (Intermediate–Advanced)
              </p>
            </div>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#9b59b6', marginBottom: '8px' }}>24. Caption + Context Chunking</h4>
              <p><strong>Size:</strong> 200 tokens near caption/figure</p>
              <p><strong>Overlap:</strong> Include surrounding paragraphs</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Pairs visuals with explanatory text; multimodal retrieval</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Requires image/caption detection; manual curation often needed</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '6px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '5px' }}>
                <strong>Use:</strong> Academic papers, technical manuals, visual content<br/>
                <strong>Tools:</strong> Unstructured.io, custom image extractors<br/>
                <strong>Complexity:</strong> Medium (Intermediate)
              </p>
            </div>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#3498db', marginBottom: '8px' }}>25. Metadata-Aware Chunking</h4>
              <p><strong>Size:</strong> Variable</p>
              <p><strong>Overlap:</strong> Based on metadata boundaries</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Enriches chunks with metadata; improves filtering and routing</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Requires metadata extraction; complexity increases</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '6px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '5px' }}>
                <strong>Use:</strong> Enterprise docs, versioned content, multi-author systems<br/>
                <strong>Tools:</strong> Custom metadata extractors, document management systems<br/>
                <strong>Complexity:</strong> Medium (Intermediate)
              </p>
            </div>
            <div style={{ border: '2px solid #2ecc71', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#2ecc71', marginBottom: '8px' }}>26. Hybrid Chunking</h4>
              <p><strong>Size:</strong> Combines multiple strategies</p>
              <p><strong>Overlap:</strong> Strategy-dependent</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Best of multiple approaches; adapts to content type</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Complex to implement; requires orchestration</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '6px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '5px' }}>
                <strong>Use:</strong> Mixed document collections, production RAG systems<br/>
                <strong>Tools:</strong> Custom pipelines, LlamaIndex hybrid strategies<br/>
                <strong>Complexity:</strong> High (Advanced)
              </p>
            </div>
          </div>
          <div style={{ marginTop: '15px', padding: '10px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>🎯 Special-Purpose:</strong> Task-specific and hybrid approaches for specialized use cases
          </div>
        </div>
      ),
      backgroundColor: '#16A085',
      notes: 'Special-purpose: QA-focused, Caption+Context, Metadata-aware, and Hybrid chunking for specific scenarios'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 13,
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
          id: 14,
          title: 'Selection Guide: Decision Flow',
          icon: { name: 'duo-compass' },
          content: (
        <div style={{ margin: '0 auto', fontSize: '0.75em' }}>
          <h3 style={{ marginBottom: '30px' }}>How to Choose the Right Chunking Strategy</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', border: '2px solid #3498db' }}>
              <h4 style={{ color: '#3498db', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-sitemap" sizeName="1x" darkModeInvert={true} />
                1. Is document structure reliable?
              </h4>
              <p><strong>Yes →</strong> Use structure-aware chunking (Heading-Anchor, Markdown/HTML, Structure-Aware)</p>
              <p><strong>No →</strong> Consider semantic approaches (Semantic, TextTiling)</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '10px', border: '2px solid #f39c12' }}>
              <h4 style={{ color: '#f39c12', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="1x" darkModeInvert={true} />
                2. Is latency/cost strict?
              </h4>
              <p><strong>Yes →</strong> Use simpler approaches (Fixed-Size, Token-Aware, Recursive Character)</p>
              <p><strong>No →</strong> Use advanced techniques (LLM-Based, Graph-Semantic, Discourse/RST)</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '10px', border: '2px solid #9b59b6' }}>
              <h4 style={{ color: '#9b59b6', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-layer-group" sizeName="1x" darkModeInvert={true} />
                3. Special content types?
              </h4>
              <p><strong>Code →</strong> Code-Aware chunking</p>
              <p><strong>Tables →</strong> Table-Aware chunking</p>
              <p><strong>Audio/Speech →</strong> Speaker-Turn or Time-Based chunking</p>
              <p><strong>QA Tasks →</strong> QA-Focused chunking</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '10px', border: '2px solid #2ecc71' }}>
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
      backgroundColor: '#27AE60',
      notes: 'Decision flow for selecting chunking strategy based on document structure, latency constraints, and content types'
        },
        {
          id: 15,
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

