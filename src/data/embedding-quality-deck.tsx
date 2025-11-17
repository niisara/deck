import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const embeddingQualityDeck: Deck = {
  id: 'embedding-quality-deck',
  name: '7 Tricks to Improve Embedding Quality',
  description: 'Practical cheat sheets for preprocessing and chunking',
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
          title: '7 Tricks to Improve Embedding Quality',
          content: (
            <div style={{ textAlign: 'left' }}>
              <h2>Without Changing the Model</h2>
              <p style={{ fontSize: '1.2em', marginTop: '30px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ marginRight: '15px', verticalAlign: 'middle' }} darkModeInvert={true} />
                Practical cheat sheets for preprocessing and chunking
              </p>
              <p style={{ fontSize: '0.9em', marginTop: '40px', color: '#aaa' }}>November 7, 2025</p>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Title slide introducing the 7 techniques for improving embedding quality'
        },
        {
          id: 2,
          title: 'Overview: The 7 Techniques',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '0.9em' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-broom" sizeName="2x" style={{ color: '#4fc3f7' }} />
                  <span>1. Clean and Normalize Text</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-filter" sizeName="2x" style={{ color: '#81c784' }} />
                  <span>2. Remove Boilerplate and Noise</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-scissors" sizeName="2x" style={{ color: '#ffb74d' }} />
                  <span>3. Use Semantic Chunking</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-heading" sizeName="2x" style={{ color: '#ba68c8' }} />
                  <span>4. Add Section Titles to Chunks</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-eraser" sizeName="2x" style={{ color: '#f06292' }} />
                  <span>5. Apply Light Stopword Trimming</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-tags" sizeName="2x" style={{ color: '#64b5f6' }} />
                  <span>6. Add Keyphrase/Topic Tags</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', gridColumn: '1 / -1', justifyContent: 'flex-start' }}>
                  <SvgIcon iconName="duo-table" sizeName="2x" style={{ color: '#aed581' }} />
                  <span>7. Convert Tables to Structured Text</span>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Overview of all seven techniques with visual icons'
        }
      ]
    },
    {
      id: 'clean-normalize',
      title: 'Clean and Normalize Text',
      slides: [
        {
          id: 3,
          title: '1. Clean and Normalize Text',
          icon: { name: 'duo-broom' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.85em' }}>
                <p><strong>Goal:</strong> Reduce textual variability so the same concepts map to similar tokens.</p>
                <p><strong>How It Works:</strong> Apply unicode normalization, consistent casing, whitespace and punctuation fixes to standardize input.</p>
                <p><strong>When to Use:</strong> Mixed sources, OCR, scraped web, user-generated content, legacy docs.</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <li>Normalize Unicode (NFC/NFKC); fix mojibake</li>
                    <li>Standardize quotes/dashes; collapse whitespace; trim</li>
                    <li>Normalize bullets/lists; unify line breaks</li>
                    <li>Preserve meaningful symbols (math, code, chemical formulas)</li>
                  </ul>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px', fontSize: '0.8em' }}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Pros:</strong></p>
                    <p style={{ marginTop: '5px', marginLeft: '20px' }}>More consistent tokenization, fewer artifacts</p>
                  </div>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Cons:</strong></p>
                    <p style={{ marginTop: '5px', marginLeft: '20px' }}>Over-normalization can remove signals</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: 'Technique 1: Clean and normalize text to reduce variability'
        }
      ]
    },
    {
      id: 'remove-boilerplate',
      title: 'Remove Boilerplate and Noise',
      slides: [
        {
          id: 4,
          title: '2. Remove Boilerplate and Noise',
          icon: { name: 'duo-filter' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.85em' }}>
                <p><strong>Goal:</strong> Eliminate non-content text that dilutes embeddings.</p>
                <p><strong>How It Works:</strong> Detect and strip headers/footers, nav, ads, cookie banners, email signatures, legal footers.</p>
                <p><strong>When to Use:</strong> Web pages, PDFs, emails, repeated templates across documents.</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <li>Parse DOM or PDF; keep main content via readability heuristics</li>
                    <li>Drop nav/aside/footer; remove ads, cookie text, A/B test fragments</li>
                    <li>Strip repeated headers/footers; remove tracking IDs</li>
                    <li>Log removals; spot-check samples</li>
                  </ul>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px', fontSize: '0.8em' }}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Pros:</strong></p>
                    <p style={{ marginTop: '5px', marginLeft: '20px' }}>Higher signal-to-noise; better retrieval precision</p>
                  </div>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Cons:</strong></p>
                    <p style={{ marginTop: '5px', marginLeft: '20px' }}>Risk of deleting useful context</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a4d2e',
          notes: 'Technique 2: Remove boilerplate content to improve signal quality'
        }
      ]
    },
    {
      id: 'semantic-chunking',
      title: 'Use Semantic Chunking',
      slides: [
        {
          id: 5,
          title: '3. Use Semantic Chunking',
          icon: { name: 'duo-scissors' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.85em' }}>
                <p><strong>Goal:</strong> Split documents into coherent units that answer a question on their own.</p>
                <p><strong>How It Works:</strong> Use structure and similarity to set chunk boundaries and optional overlaps.</p>
                <p><strong>When to Use:</strong> Long documents, RAG pipelines, context-window constraints.</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <li>Choose target chunk size (e.g., 200–400 tokens) and small overlap (e.g., 10–20%)</li>
                    <li>Anchor boundaries at headings, paragraphs, lists</li>
                    <li>Within sections, group paragraphs by embedding similarity/cohesion</li>
                    <li>Ensure each chunk has a single dominant topic; store source refs</li>
                  </ul>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px', fontSize: '0.8em' }}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Pros:</strong></p>
                    <p style={{ marginTop: '5px', marginLeft: '20px' }}>Improves recall/precision; reduces hallucinations</p>
                  </div>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Cons:</strong></p>
                    <p style={{ marginTop: '5px', marginLeft: '20px' }}>More complex pipeline; requires tuning</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#4a4e69',
          notes: 'Technique 3: Semantic chunking for better retrieval'
        }
      ]
    },
    {
      id: 'section-titles',
      title: 'Add Section Titles to Chunks',
      slides: [
        {
          id: 6,
          title: '4. Add Section Titles to Chunks',
          icon: { name: 'duo-heading' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.85em' }}>
                <p><strong>Goal:</strong> Provide context and disambiguation for each chunk.</p>
                <p><strong>How It Works:</strong> Prepend/bundle the document title and heading path with the chunk text/metadata.</p>
                <p><strong>When to Use:</strong> Hierarchical docs, manuals, APIs, research papers.</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <li>Extract breadcrumb (Doc Title &gt; H1 &gt; H2 &gt; H3)</li>
                    <li>Build a concise chunk title; prepend or store in metadata</li>
                    <li>Keep under token budget; avoid repeating long titles</li>
                    <li>Include stable section IDs/anchors</li>
                  </ul>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px', fontSize: '0.8em' }}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Pros:</strong></p>
                    <p style={{ marginTop: '5px', marginLeft: '20px' }}>Stronger semantic cues; easier tracing</p>
                  </div>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Cons:</strong></p>
                    <p style={{ marginTop: '5px', marginLeft: '20px' }}>Extra tokens; requires robust heading extraction</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6a4c93',
          notes: 'Technique 4: Add section titles for better context'
        }
      ]
    },
    {
      id: 'stopword-trimming',
      title: 'Apply Light Stopword Trimming',
      slides: [
        {
          id: 7,
          title: '5. Apply Light Stopword Trimming',
          icon: { name: 'duo-eraser' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.85em' }}>
                <p><strong>Goal:</strong> Reduce filler tokens while preserving meaning and negation.</p>
                <p><strong>How It Works:</strong> Remove a conservative set of high-frequency function words outside code/data.</p>
                <p><strong>When to Use:</strong> Tight token budgets, repetitive narrative text, noisy corpora.</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <li>Start with a small, language-specific stoplist</li>
                    <li>Protect negations (not, never), numerals, dates, units, named entities</li>
                    <li>Skip trimming inside code blocks, formulas, or commands</li>
                    <li>Measure impact on retrieval metrics; keep removal light (&lt;10%)</li>
                  </ul>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px', fontSize: '0.8em' }}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Pros:</strong></p>
                    <p style={{ marginTop: '5px', marginLeft: '20px' }}>Smaller, denser chunks; faster indexing</p>
                  </div>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Cons:</strong></p>
                    <p style={{ marginTop: '5px', marginLeft: '20px' }}>Over-trimming harms semantics and QA</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#c9184a',
          notes: 'Technique 5: Light stopword trimming to reduce filler'
        }
      ]
    },
    {
      id: 'keyphrase-tags',
      title: 'Add Keyphrase / Topic Tags',
      slides: [
        {
          id: 8,
          title: '6. Add Keyphrase / Topic Tags as Metadata',
          icon: { name: 'duo-tags' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.85em' }}>
                <p><strong>Goal:</strong> Enrich chunks with facetable concepts for better filtering and recall.</p>
                <p><strong>How It Works:</strong> Extract keyphrases and map to a controlled vocabulary; store as metadata fields.</p>
                <p><strong>When to Use:</strong> Large corpora, multi-domain search, governance/compliance filters.</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <li>Run keyphrase extraction (e.g., RAKE/YAKE/KeyBERT or noun-phrase heuristics)</li>
                    <li>Normalize (lowercase, lemmatize), dedupe, map synonyms</li>
                    <li>Attach tags (topics, entities, products, versions) to chunks</li>
                    <li>Index tags and enable filterable search</li>
                  </ul>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px', fontSize: '0.8em' }}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Pros:</strong></p>
                    <p style={{ marginTop: '5px', marginLeft: '20px' }}>Better recall/precision; enables facets</p>
                  </div>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Cons:</strong></p>
                    <p style={{ marginTop: '5px', marginLeft: '20px' }}>Extraction noise; taxonomy maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1976d2',
          notes: 'Technique 6: Add keyphrase and topic tags for better filtering'
        }
      ]
    },
    {
      id: 'convert-tables',
      title: 'Convert Tables to Structured Text',
      slides: [
        {
          id: 9,
          title: '7. Convert Tables to Structured Text',
          icon: { name: 'duo-table' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.85em' }}>
                <p><strong>Goal:</strong> Preserve relational information in a model-friendly linear form.</p>
                <p><strong>How It Works:</strong> Linearize rows/columns into key–value sentences or compact JSON-like strings.</p>
                <p><strong>When to Use:</strong> Specs, pricing sheets, CSVs, benchmarks, logs.</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <li>Keep header row as schema; identify primary key columns</li>
                    <li>Emit per-row sentences: "RowID=X; Column: Value (Unit)"</li>
                    <li>Verticalize wide tables; group related columns</li>
                    <li>Include summary stats (min/mean/max) when helpful; attach original CSV/JSON path</li>
                  </ul>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px', fontSize: '0.8em' }}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Pros:</strong></p>
                    <p style={{ marginTop: '5px', marginLeft: '20px' }}>Better matching for row-level queries</p>
                  </div>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Cons:</strong></p>
                    <p style={{ marginTop: '5px', marginLeft: '20px' }}>Higher token count; careful formatting needed</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#558b2f',
          notes: 'Technique 7: Convert tables to structured text for better embeddings'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 10,
          title: 'Summary and Next Steps',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.85em' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                  Recap: The 7 Techniques
                </h3>
                <p style={{ fontSize: '0.9em', lineHeight: '1.8' }}>
                  1. Clean/Normalize &nbsp;|&nbsp; 2. De-boilerplate &nbsp;|&nbsp; 3. Semantic Chunking &nbsp;|&nbsp; 4. Section Titles &nbsp;|&nbsp; 5. Stopword Trimming &nbsp;|&nbsp; 6. Keyphrase Tags &nbsp;|&nbsp; 7. Structured Tables
                </p>
                
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '25px' }}>
                  <SvgIcon iconName="duo-chart-line" sizeName="2x" darkModeInvert={true} />
                  What to Measure
                </h3>
                <ul style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                  <li>Relevance metrics: nDCG/MRR@k, recall@k, hit rate</li>
                  <li>Performance metrics: latency, index size, embedding time</li>
                  <li>A/B test with your application's end-user metrics</li>
                </ul>

                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '25px' }}>
                  <SvgIcon iconName="duo-map" sizeName="2x" darkModeInvert={true} />
                  Implementation Playbook
                </h3>
                <ul style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                  <li>Start with cleaning + de-boilerplate (biggest ROI)</li>
                  <li>Add semantic chunking + titles (improves retrieval precision)</li>
                  <li>Enrich with keyphrase tags; convert tables to structured text</li>
                  <li>Carefully test light stopword trimming (most sensitive to tuning)</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#283593',
          notes: 'Summary slide with implementation guidance'
        },
        {
          id: 11,
          title: 'Final Insight',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '0.85em' }}>
                <p style={{ fontSize: '1.3em', lineHeight: '1.8', fontWeight: '300' }}>
                  Many embedding quality improvements come from <strong>better data preparation</strong>, not just model selection.
                </p>
                <p style={{ fontSize: '1.1em', lineHeight: '1.8', marginTop: '40px', color: '#aed581' }}>
                  Even small preprocessing changes can yield meaningful performance gains.
                </p>
              </div>
              <div style={{ marginTop: '50px', display: 'flex', gap: '20px' }}>
                <SvgIcon iconName="duo-flask" sizeName="2x" darkModeInvert={true} />
                <SvgIcon iconName="duo-rocket" sizeName="2x" darkModeInvert={true} />
                <SvgIcon iconName="duo-star" sizeName="2x" darkModeInvert={true} />
              </div>
            </div>
          ),
          backgroundColor: '#1a237e',
          notes: 'Final insight - emphasizing the importance of data preparation'
        }
      ]
    }
  ]
};
