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
          center: true,
          title: '7 Tricks to Improve Embedding Quality',
          content: (
            <div>
              <h2>Without Changing the Model</h2>
              <p style={{ fontSize: '2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                Practical cheat sheets for preprocessing and chunking
              </p>
              <p><strong>Prepared by:</strong> Nisar A</p>
              <p><strong>Date:</strong> November 7, 2025</p>
              <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: ''
        },
        {
          id: 2,
          title: 'Overview: The 7 Techniques',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '28px 0' }}>
                  <SvgIcon iconName="duo-broom" sizeName="2x" style={{ color: '#4fc3f7' }} />
                  <span>1. Clean and Normalize Text — reduce variability and token fragmentation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '28px 0' }}>
                  <SvgIcon iconName="duo-filter" sizeName="2x" style={{ color: '#81c784' }} />
                  <span>2. Remove Boilerplate and Noise — keep only the main content</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '28px 0' }}>
                  <SvgIcon iconName="duo-scissors" sizeName="2x" style={{ color: '#ffb74d' }} />
                  <span>3. Use Semantic Chunking — split into coherent, retrievable units</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '28px 0' }}>
                  <SvgIcon iconName="duo-heading" sizeName="2x" style={{ color: '#ba68c8' }} />
                  <span>4. Add Section Titles to Chunks — add context and disambiguation</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '28px 0' }}>
                  <SvgIcon iconName="duo-eraser" sizeName="2x" style={{ color: '#f06292' }} />
                  <span>5. Apply Light Stopword Trimming — trim filler without losing meaning</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '28px 0' }}>
                  <SvgIcon iconName="duo-tags" sizeName="2x" style={{ color: '#64b5f6' }} />
                  <span>6. Add Keyphrase/Topic Tags as Metadata — enrich retrieval signals</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '28px 0' }}>
                  <SvgIcon iconName="duo-table" sizeName="2x" style={{ color: '#aed581' }} />
                  <span>7. Convert Tables to Structured Text — linearize tabular data for models</span>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: ''
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
              <div>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>Goal:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Reduce textual variability so the same concepts map to similar tokens.</span></p>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>How It Works:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Apply unicode normalization, consistent casing, whitespace and punctuation fixes to standardize input.</span></p>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>When to Use:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Mixed sources, OCR, scraped web, user-generated content, legacy docs.</span></p>
                <div>
                  <p style={{ fontSize: '2rem' }}><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Normalize Unicode (NFC/NFKC); fix mojibake</li>
                    <li>Standardize quotes/dashes; collapse whitespace; trim</li>
                    <li>Normalize bullets/lists; unify line breaks</li>
                    <li>Preserve meaningful symbols (math, code, chemical formulas)</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: ''
        },
        {
          id: 4,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>More consistent tokenization and better deduplication</li>
                  <li>Fewer artifacts from encoding/scraping</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Over-normalization can remove signals (case, emphasis)</li>
                  <li>Requires testing per language/domain</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: ''
        }
      ]
    },
    {
      id: 'remove-boilerplate',
      title: 'Remove Boilerplate and Noise',
      slides: [
        {
          id: 5,
          title: '2. Remove Boilerplate and Noise',
          icon: { name: 'duo-filter' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>Goal:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Eliminate non-content text that dilutes embeddings.</span></p>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>How It Works:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Detect and strip headers/footers, nav, ads, cookie banners, email signatures, legal footers.</span></p>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>When to Use:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Web pages, PDFs, emails, repeated templates across documents.</span></p>
                <div>
                  <p style={{ fontSize: '2rem' }}><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Parse DOM or PDF; keep main content via readability heuristics</li>
                    <li>Drop nav/aside/footer; remove ads, cookie text, A/B test fragments</li>
                    <li>Strip repeated headers/footers; remove tracking IDs</li>
                    <li>Log removals; spot-check samples</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a4d2e',
          notes: ''
        },
        {
          id: 6,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Higher signal-to-noise; smaller index size</li>
                  <li>Better retrieval precision</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Risk of deleting useful context if rules too aggressive</li>
                  <li>Needs maintenance across sources</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#1a4d2e',
          notes: ''
        }
      ]
    },
    {
      id: 'semantic-chunking',
      title: 'Use Semantic Chunking',
      slides: [
        {
          id: 7,
          title: '3. Use Semantic Chunking',
          icon: { name: 'duo-scissors' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>Goal:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Split documents into coherent units that answer a question on their own.</span></p>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>How It Works:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Use structure and similarity to set chunk boundaries and optional overlaps.</span></p>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>When to Use:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Long documents, RAG pipelines, context-window constraints.</span></p>
                <div>
                  <p style={{ fontSize: '2rem' }}><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Choose target chunk size (e.g., 200–400 tokens) and small overlap (e.g., 10–20%)</li>
                    <li>Anchor boundaries at headings, paragraphs, lists</li>
                    <li>Within sections, group paragraphs by embedding similarity/cohesion</li>
                    <li>Ensure each chunk has a single dominant topic; store source refs</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#4a4e69',
          notes: ''
        },
        {
          id: 8,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <p style={{ marginTop: '5px', marginLeft: '20px' }}>Improves recall/precision; reduces hallucinations</p>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Improves recall/precision in retrieval</li>
                  <li>Reduces context stuffing and hallucinations</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <p style={{ marginTop: '5px', marginLeft: '20px' }}>More complex pipeline; requires tuning</p>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>More complex pipeline; overlap increases storage</li>
                  <li>Requires tuning per corpus</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#4a4e69',
          notes: ''
        }
      ]
    },
    {
      id: 'section-titles',
      title: 'Add Section Titles to Chunks',
      slides: [
        {
          id: 9,
          title: '4. Add Section Titles to Chunks',
          icon: { name: 'duo-heading' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>Goal:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Provide context and disambiguation for each chunk.</span></p>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>How It Works:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Prepend/bundle the document title and heading path with the chunk text/metadata.</span></p>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>When to Use:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Hierarchical docs, manuals, APIs, research papers.</span></p>
                <div>
                  <p style={{ fontSize: '2rem' }}><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Extract breadcrumb (Doc Title &gt; H1 &gt; H2 &gt; H3)</li>
                    <li>Build a concise chunk title; prepend or store in metadata</li>
                    <li>Keep under token budget; avoid repeating long titles</li>
                    <li>Include stable section IDs/anchors</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6a4c93',
          notes: ''
        },
        {
          id: 10,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Stronger semantic cues; better filtering and ranking</li>
                  <li>Easier tracing back to source</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Extra tokens if in-text; may skew similarity if titles are very generic</li>
                  <li>Requires robust heading extraction</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#6a4c93',
          notes: ''
        }
      ]
    },
    {
      id: 'stopword-trimming',
      title: 'Apply Light Stopword Trimming',
      slides: [
        {
          id: 11,
          title: '5. Apply Light Stopword Trimming',
          icon: { name: 'duo-eraser' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>Goal:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Reduce filler tokens while preserving meaning and negation.</span></p>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>How It Works:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Remove a conservative set of high-frequency function words outside code/data.</span></p>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>When to Use:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Tight token budgets, repetitive narrative text, noisy corpora.</span></p>
                <div>
                  <p style={{ fontSize: '2rem' }}><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Start with a small, language-specific stoplist</li>
                    <li>Protect negations (not, never), numerals, dates, units, named entities</li>
                    <li>Skip trimming inside code blocks, formulas, or commands</li>
                    <li>Measure impact on retrieval metrics; keep removal light (&lt;10%)</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#851736',
          notes: ''
        },
        {
          id: 12,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Smaller, denser chunks; faster indexing</li>
                  <li>Can improve signal-to-noise</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Over-trimming harms semantics and QA</li>
                  <li>Multilingual handling adds complexity</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#851736',
          notes: ''
        }
      ]
    },
    {
      id: 'keyphrase-tags',
      title: 'Add Keyphrase / Topic Tags',
      slides: [
        {
          id: 13,
          title: '6. Add Keyphrase / Topic Tags as Metadata',
          icon: { name: 'duo-tags' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>Goal:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Enrich chunks with facetable concepts for better filtering and recall.</span></p>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>How It Works:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Extract keyphrases and map to a controlled vocabulary; store as metadata fields.</span></p>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>When to Use:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Large corpora, multi-domain search, governance/compliance filters.</span></p>
                <div>
                  <p style={{ fontSize: '2rem' }}><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Run keyphrase extraction (e.g., RAKE/YAKE/KeyBERT or noun-phrase heuristics)</li>
                    <li>Normalize (lowercase, lemmatize), dedupe, map synonyms</li>
                    <li>Attach tags (topics, entities, products, versions) to chunks</li>
                    <li>Index tags and enable filterable search</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1976d2',
          notes: ''
        },
        {
          id: 14,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Better recall/precision and navigability</li>
                  <li>Enables facets, access controls, analytics</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Extraction noise; needs QA and thresholding</li>
                  <li>Taxonomy maintenance over time</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#1976d2',
          notes: ''
        }
      ]
    },
    {
      id: 'convert-tables',
      title: 'Convert Tables to Structured Text',
      slides: [
        {
          id: 15,
          title: '7. Convert Tables to Structured Text',
          icon: { name: 'duo-table' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>Goal:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Preserve relational information in a model-friendly linear form.</span></p>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>How It Works:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Linearize rows/columns into key–value sentences or compact JSON-like strings.</span></p>
                <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>When to Use:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Specs, pricing sheets, CSVs, benchmarks, logs.</span></p>
                <div>
                  <p style={{ fontSize: '2rem' }}><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Keep header row as schema; identify primary key columns</li>
                    <li>Emit per-row sentences: "RowID=X; Column: Value (Unit)"</li>
                    <li>Verticalize wide tables; group related columns</li>
                    <li>Include summary stats (min/mean/max) when helpful; attach original CSV/JSON path as metadata</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#558b2f',
          notes: ''
        },
        {
          id: 16,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Better matching for row-level queries</li>
                  <li>Works across models without layout awareness</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Higher token count; potential loss of layout cues</li>
                  <li>Requires careful formatting for very large tables</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#558b2f',
          notes: ''
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 17,
          title: 'Summary and Next Steps',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                  <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                  Recap: The 7 Techniques
                </h3>
                <ul style={{ fontSize: '1.2rem' }} >
                  <li>1. Clean/Normalize</li>
                  <li>2. De-boilerplate</li>
                  <li>3. Semantic Chunking</li>
                  <li>4. Section Titles</li>
                  <li>5. Stopword Trimming</li>
                  <li>6. Keyphrase Tags</li>
                  <li>7. Structured Tables</li>
                </ul>

                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '25px', fontSize: '2rem' }}>
                  <SvgIcon iconName="duo-chart-line" sizeName="2x" darkModeInvert={true} />
                  What to Measure
                </h3>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Relevance metrics: nDCG/MRR@k, recall@k, hit rate</li>
                  <li>Performance metrics: latency, index size, embedding time</li>
                  <li>A/B test with your application's end-user metrics</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#1a237e',
          notes: ''
        },
        {
          id: 18,
          title: 'Implementation Playbook and Next Steps',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '25px', fontSize: '2rem' }}>
                  <SvgIcon iconName="duo-map" sizeName="2x" darkModeInvert={true} />
                  Implementation Playbook
                </h3>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Start with cleaning + de-boilerplate (biggest ROI)</li>
                  <li>Add semantic chunking + titles (improves retrieval precision)</li>
                  <li>Enrich with keyphrase tags; convert tables to structured text</li>
                  <li>Carefully test light stopword trimming (most sensitive to tuning)</li>
                </ul>

                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '25px', fontSize: '2rem' }}>
                  <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                  Next Steps
                </h3>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Build a small labeled eval set</li>
                  <li>Run ablations per trick</li>
                  <li>Choose defaults per corpus</li>
                  <li>Automate QA sampling</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#1a237e',
          notes: ''
        },
        {
          id: 19,
          title: 'Final Insight',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '2rem', fontWeight: '300' }}>
                Many embedding quality improvements come from <strong>better data preparation</strong>, not just model selection.
              </p>
              <p style={{ fontSize: '2rem', color: '#aed581' }}>
                Even small preprocessing changes can yield meaningful performance gains.
              </p>
            </div>
          ),
          backgroundColor: '#1a237e',
          notes: ''
        }
      ]
    }
  ]
};
