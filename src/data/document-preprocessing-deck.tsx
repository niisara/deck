import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const documentPreprocessingDeck: Deck = {
  id: 'document-preprocessing-deck',
  name: '17 Document Preprocessing Techniques',
  description: 'A practical cheat sheet for NLP and data processing pipelines',
  category: 'NLP',
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
          title: '17 Document Preprocessing Techniques',
          content: (
            <div>
              <h2 style={{}}>A practical cheat sheet for NLP and data processing pipelines</h2>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>
                <div style={{ textAlign: 'center' }}>
                  <SvgIcon iconName="duo-file-lines" sizeName="4x" style={{ color: '#e74c3c' }} />
                  <p style={{ marginTop: '10px', fontSize: '0.8em' }}>Raw</p>
                </div>
                <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
                <div style={{ textAlign: 'center' }}>
                  <SvgIcon iconName="duo-gears" sizeName="4x" style={{ color: '#f39c12' }} />
                  <p style={{ marginTop: '10px', fontSize: '0.8em' }}>Process</p>
                </div>
                <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
                <div style={{ textAlign: 'center' }}>
                  <SvgIcon iconName="duo-sparkles" sizeName="4x" style={{ color: '#2ecc71' }} />
                  <p style={{ marginTop: '10px', fontSize: '0.8em' }}>Clean</p>
                </div>
              </div>
              <p style={{ fontSize: '2rem' }}>
                <strong>Goal:</strong> Provide a clean, consistent pipeline for high-quality retrieval, modeling, and analytics
              </p>
              <p><strong>Prepared by:</strong> Nisar A</p>
              <p><strong>Date:</strong> November 7, 2025</p>
              <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
            </div>
          ),
          backgroundColor: '#6b2121',
          notes: ''
        },
        {
          id: 2,
          title: 'Table of Contents',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <p style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.6rem' }}>
                Each technique includes <strong>Goal</strong>, <strong>How It Works</strong>, <strong>When to Use</strong>, <strong>Implementation Steps</strong>, <strong>Pros</strong>, and <strong>Cons</strong>
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c' }}>
                    <SvgIcon iconName="duo-broom" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    Content Cleaning (1-5)
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>1. Remove Boilerplate Noise</li>
                    <li>2. Deduplicate Repeated Text</li>
                    <li>3. Normalize Whitespace & Formatting</li>
                    <li>4. Convert Tables to Structured Text</li>
                    <li>5. OCR Cleanup</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3498db', marginTop: '15px' }}>
                    <SvgIcon iconName="duo-scissors" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    Text Segmentation (6-8)
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>6. Sentence Boundary Detection</li>
                    <li>7. Semantic Chunking</li>
                    <li>8. Contextual Chunk Linking (Parent–Child)</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9b59b6' }}>
                    <SvgIcon iconName="duo-text" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    Text Normalization (9-11)
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>9. Text Normalization</li>
                    <li>10. Light Stopword Trimming</li>
                    <li>11. Lemmatization / Stemming</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1abc9c', marginTop: '15px' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    Metadata Enrichment (12-13)
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>12. Keyphrase Extraction</li>
                    <li>13. Entity Tagging (NER)</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f39c12' }}>
                    <SvgIcon iconName="duo-filter" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    Quality & Enhancement (14-17)
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>14. Remove Dead Chunks</li>
                    <li>15. Chunk Summary Metadata</li>
                    <li>16. Domain Dictionary / Synonym Normalization</li>
                    <li>17. Temporal Labeling / Version Tagging</li>
                  </ul>
                </div>
              </div>
              <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.1em', fontWeight: 'bold' }}>
                Total: 17 preprocessing techniques
              </p>
            </div>
          ),
          backgroundColor: '#6b2121',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-1',
      title: '1. Remove Boilerplate Noise',
      slides: [
        {
          id: 3,
          title: '1. Remove Boilerplate Noise',
          icon: { name: 'duo-broom' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ffbba0' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Strip nav bars, ads, cookie banners, headers/footers, legal boilerplate</li>
                    <li>Extract main content from noisy web pages and documents</li>
                    <li>Reduce document noise before processing/embedding</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>DOM/content-density methods (Readability, Trafilatura, Boilerpipe)</li>
                    <li>XPath/CSS selectors for targeted extraction</li>
                    <li>Heuristic text density analysis to identify main content</li>
                    <li>ML-based classification of content vs. boilerplate blocks</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Web-scraped pages with navigation, ads, footers</li>
                    <li>PDFs with repeated page headers/footers</li>
                    <li>HTML exports from content management systems</li>
                    <li>Early in the preprocessing pipeline before chunking</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Parse HTML/PDF into DOM structure</li>
                    <li>Identify main content nodes via density/layout analysis</li>
                    <li>Remove low-signal blocks (navigation, ads, etc.)</li>
                    <li>Sanitize remaining HTML tags</li>
                    <li>Preserve important structural elements (headings, links)</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#9d281c',
          notes: ''
        },
        {
          id: 4,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ffbba0' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Higher signal-to-noise ratio in document content</li>
                  <li>Fewer tokens processed in downstream tasks</li>
                  <li>Better retrieval quality with focused content</li>
                  <li>Reduces repetitive elements across multiple pages</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Risk of removing valuable content in sidebars</li>
                  <li>May require site-specific tuning for best results</li>
                  <li>Multilingual content may present edge cases</li>
                  <li>Highly dynamic sites can challenge heuristic approaches</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#9d281c',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-2',
      title: '2. Deduplicate Repeated Text',
      slides: [
        {
          id: 5,
          title: '2. Deduplicate Repeated Text',
          icon: { name: 'duo-copy' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#cc8ce7' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Remove exact, near-duplicate, and semantically redundant text to reduce bias and cost</li>
                    <li>Eliminate repetitive content that adds no value</li>
                    <li>Prevent overrepresentation of duplicated content in training data</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Exact hashing (MD5/SHA), near-dup (SimHash/MinHash+LSH)</li>
                    <li>Semantic deduplication using embedding similarity/clustering</li>
                    <li>Suffix-array algorithms to detect text overlap</li>
                    <li>Jaccard similarity for fuzzy matching of content</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Large crawls and corpus processing</li>
                    <li>Documents with revisions/changelogs</li>
                    <li>Content from mirror sources or multiple websites</li>
                    <li>Training data preparation for ML/NLP models</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Normalize text before comparison</li>
                    <li>Window text if needed for large documents</li>
                    <li>Compute signatures/hashes/embeddings</li>
                    <li>Block and compare similar items</li>
                    <li>Set appropriate similarity thresholds</li>
                    <li>Drop or flag duplicates</li>
                    <li>Log deduplication actions for auditability</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#611083',
          notes: ''
        },
        {
          id: 6,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#cc8ce7' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Smaller, more efficient corpus size</li>
                  <li>Less data leakage between train/test sets</li>
                  <li>Faster indexing and training</li>
                  <li>More balanced representation of content</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Computationally expensive at scale</li>
                  <li>Risk of false merges if thresholds too low</li>
                  <li>Requires maintenance of fingerprint database</li>
                  <li>May remove legitimate repeated content in some contexts</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#611083',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-3',
      title: '3. Normalize Whitespace & Formatting',
      slides: [
        {
          id: 7,
          title: '3. Normalize Whitespace & Formatting',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#4dadeb' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Create consistent spacing, line breaks, and punctuation</li>
                    <li>Standardize Unicode characters for stable tokenization</li>
                    <li>Eliminate inconsistencies from different sources</li>
                    <li>Prevent text processing issues from irregular formatting</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Collapse multiple spaces into single spaces</li>
                    <li>Normalize newlines (CR, LF, CRLF) to consistent format</li>
                    <li>Apply Unicode normalization (typically NFKC)</li>
                    <li>Standardize quotes, dashes, bullets, and other punctuation</li>
                    <li>Handle control characters and zero-width spaces</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Early in the ingestion pipeline</li>
                    <li>Before tokenization and vectorization</li>
                    <li>When combining text from multiple sources</li>
                    <li>Processing OCR output or scraped content</li>
                    <li>Before text comparison or deduplication</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Apply Unicode normalization (NFKC or NFD)</li>
                    <li>Replace tabs with spaces</li>
                    <li>Collapse multiple spaces to single space</li>
                    <li>Normalize line endings</li>
                    <li>Standardize quotes and punctuation</li>
                    <li>Protect special content (code blocks, lists) with markers</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#114567',
          notes: ''
        },
        {
          id: 8,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#4dadeb' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Produces cleaner, more consistent tokens</li>
                  <li>Reduces spurious differences across data sources</li>
                  <li>Improves matching and comparison operations</li>
                  <li>Makes downstream processing more reliable</li>
                  <li>Reduces edge cases in text processing pipelines</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>May break layout-sensitive text (code, poetry, tables)</li>
                  <li>Can lose intentional formatting signals if not careful</li>
                  <li>Special content needs protection with sentinel markers</li>
                  <li>Language-specific issues with certain Unicode characters</li>
                  <li>Potential information loss in specialized domains</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#114567',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-4',
      title: '4. Convert Tables into Structured Text',
      slides: [
        {
          id: 9,
          title: '4. Convert Tables into Structured Text',
          icon: { name: 'duo-table' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#50dbc0' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Make tables machine-usable for retrieval, QA, and analytics</li>
                    <li>Convert visual tabular data into structured formats</li>
                    <li>Preserve relationships between data in tables</li>
                    <li>Enable more accurate question-answering over tabular facts</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Detect tables (HTML, Camelot/Tabula for PDF)</li>
                    <li>Extract header/row structure from visual or HTML tables</li>
                    <li>Linearize as key: value pairs or structured JSON</li>
                    <li>Convert complex tables with spanning cells into normalized format</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Technical specifications presented as tables</li>
                    <li>Financial reports with tabular data</li>
                    <li>Product comparison charts</li>
                    <li>Log data or metrics embedded as tables</li>
                    <li>Any document where tables contain important facts</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Detect tables in documents via DOM or image analysis</li>
                    <li>Resolve merged/spanning cells into normalized grid</li>
                    <li>Identify and normalize headers (often in first row/column)</li>
                    <li>Output as JSON/CSV with proper structure</li>
                    <li>Attach table_id and parent section metadata</li>
                    <li>Store both raw and structured versions</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#207363',
          notes: ''
        },
        {
          id: 10,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#50dbc0' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Preserves semantic relationships between data points</li>
                  <li>Improves Q&A over tabular facts</li>
                  <li>Enables structured queries against previously visual data</li>
                  <li>Supports comparison operations across multiple tables</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Merged cells and complex layouts are difficult to process</li>
                  <li>Rotated text in tables presents extraction challenges</li>
                  <li>OCR'd tables require additional cleanup</li>
                  <li>Multi-level headers can be hard to properly represent</li>
                  <li>May lose visual formatting that conveys meaning</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#207363',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-5',
      title: '5. OCR Cleanup',
      slides: [
        {
          id: 11,
          title: '5. OCR Cleanup',
          icon: { name: 'duo-scanner-keyboard' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff6e0c' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Fix OCR noise: broken words, wrong characters, artifacts</li>
                    <li>Improve readability of text extracted from images and scans</li>
                    <li>Standardize output from different OCR engines</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Spell/LM-based correction for misrecognized text</li>
                    <li>Confusion sets resolution (0/O, l/1, rn/m)</li>
                    <li>Dehyphenation of line-break separated words</li>
                    <li>Deskew and layout normalization</li>
                    <li>Language identification for multi-lingual documents</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Scanned PDFs and document images</li>
                    <li>Faxes and low-resolution document captures</li>
                    <li>Historical documents with degraded quality</li>
                    <li>After OCR extraction, before semantic processing</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Run OCR on document images</li>
                    <li>Normalize Unicode characters and encoding</li>
                    <li>Join hyphenated words at line breaks</li>
                    <li>Apply spell checking and correction via dictionaries/LMs</li>
                    <li>Validate corrections with confidence scores</li>
                    <li>Flag uncertain corrections for human review</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#7f3f14',
          notes: ''
        },
        {
          id: 12,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff6e0c' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Better readability for humans and machines</li>
                  <li>Boosts NER/keyphrase extraction accuracy</li>
                  <li>Improves searchability of scanned content</li>
                  <li>Enables more accurate embeddings and retrieval</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Automated corrections can introduce new errors</li>
                  <li>Adds latency and computational cost</li>
                  <li>Domain-specific dictionaries needed for specialized terms</li>
                  <li>Hard to correct heavily degraded or handwritten text</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#7f3f14',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-6',
      title: '6. Sentence Boundary Detection',
      slides: [
        {
          id: 13,
          title: '6. Sentence Boundary Detection',
          icon: { name: 'duo-scissors' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#83d344' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Split text into sentences for chunking and downstream tasks</li>
                    <li>Accurate sentence detection in text with ambiguous punctuation</li>
                    <li>Handle abbreviations, quotes, and special formatting</li>
                    <li>Create meaningful text units for further processing</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Rule-based methods (Punkt algorithm)</li>
                    <li>ML models (spaCy/transformers)</li>
                    <li>Abbreviation lists and exception handling</li>
                    <li>Handles decimals, initials, and quotations</li>
                    <li>Statistical analysis of token distributions</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Before semantic chunking</li>
                    <li>Prior to summarization tasks</li>
                    <li>For alignment between texts</li>
                    <li>When working with unstructured text</li>
                    <li>Early in NLP pipelines</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Language detection for appropriate model selection</li>
                    <li>Choose rule-based or ML model based on requirements</li>
                    <li>Customize abbreviation lists for domain-specific content</li>
                    <li>Evaluate performance on representative samples</li>
                    <li>Store sentence boundaries with offset information</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#2f590e',
          notes: ''
        },
        {
          id: 14,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#83d344' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Creates cleaner chunks for embeddings</li>
                  <li>Improves retrieval precision</li>
                  <li>Enables more coherent text segmentation</li>
                  <li>Foundation for paragraph and document structure</li>
                  <li>Better context preservation for NLP tasks</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Mis-splits in legal/technical documentation</li>
                  <li>Multilingual punctuation challenges</li>
                  <li>Struggles with bulleted lists and fragmented content</li>
                  <li>Domain adaptation often required</li>
                  <li>Can break non-standard text formats</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#2f590e',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-7',
      title: '7. Semantic Chunking',
      slides: [
        {
          id: 15,
          title: '7. Semantic Chunking',
          icon: { name: 'duo-brain-circuit' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7a87ff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Create meaning-coherent chunks instead of arbitrary size splits</li>
                    <li>Prevent semantic breaks in the middle of concepts or topics</li>
                    <li>Improve retrieval quality by aligning chunk boundaries with topic shifts</li>
                    <li>Reduce context dilution across multiple topics in single chunks</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Embed sentences; merge contiguous sentences above similarity threshold</li>
                    <li>Cap by maximum tokens (e.g., 512-1024) for retrieval systems</li>
                    <li>Optional clustering (HDBSCAN) for more sophisticated similarity detection</li>
                    <li>Detect topic boundaries via embedding similarity drops between sentences</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>RAG systems where precise contextual retrieval matters</li>
                    <li>Topic retrieval applications needing coherent passages</li>
                    <li>Semantic search systems requiring well-bounded chunks</li>
                    <li>When fixed-length chunking produces poor retrieval quality</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Apply Sentence Boundary Detection (SBD) to segment text</li>
                    <li>Compute embeddings for each sentence using an appropriate model</li>
                    <li>Calculate cosine similarity between adjacent sentences</li>
                    <li>Implement greedy merge with similarity threshold (e.g., &gt;0.8)</li>
                    <li>Enforce maximum token limit per chunk</li>
                    <li>Store chunk boundaries and similarity scores in metadata</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0e1559',
          notes: ''
        },
        {
          id: 16,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7a87ff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Higher retrieval precision with semantically coherent chunks</li>
                  <li>Reduced context dilution compared to fixed-size chunking</li>
                  <li>Better preservation of logical thought boundaries</li>
                  <li>Improved question answering from contextually complete passages</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Additional computational overhead for embeddings</li>
                  <li>Quality depends heavily on embedding model selection</li>
                  <li>Can over-fragment text if thresholds are too strict</li>
                  <li>May require domain-specific tuning for optimal results</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#0e1559',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-8',
      title: '8. Contextual Chunk Linking (Parent–Child)',
      slides: [
        {
          id: 17,
          title: '8. Contextual Chunk Linking (Parent–Child)',
          icon: { name: 'duo-link' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fb6fec' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Preserve document hierarchy and cross-chunk context</li>
                    <li>Maintain relationships between sections after chunking</li>
                    <li>Enable navigation between related document fragments</li>
                    <li>Prevent information loss from isolated chunks</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Parse document headings and structural elements</li>
                    <li>Assign parent_id/child_ids to related chunks</li>
                    <li>Store full hierarchical path (H1 &gt; H2 &gt; H3)</li>
                    <li>Add previous/next links for sequential navigation</li>
                    <li>Optional sliding context window for overlapping content</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Technical manuals with nested sections</li>
                    <li>Legal documents with hierarchical structure</li>
                    <li>Product specifications with dependencies</li>
                    <li>Any content where context from parent sections matters</li>
                    <li>When building knowledge graphs from documents</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Build table of contents tree from document headings</li>
                    <li>Perform chunking while preserving structural information</li>
                    <li>Generate and link IDs between parent/child chunks</li>
                    <li>Persist relationship metadata with each chunk</li>
                    <li>Implement retrieval joins to fetch related chunks when needed</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#590e51',
          notes: ''
        },
        {
          id: 18,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fb6fec' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Reduces hallucinations by providing complete context</li>
                  <li>Enables more precisely grounded answers</li>
                  <li>Supports hierarchical navigation through content</li>
                  <li>Preserves document structure in retrieval systems</li>
                  <li>Improves response quality in RAG applications</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Requires more metadata and storage overhead</li>
                  <li>Additional join logic needed during retrieval</li>
                  <li>Edge cases with malformed or inconsistent headings</li>
                  <li>More complex to implement than simple chunking</li>
                  <li>May need custom indexing strategies</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#590e51',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-9',
      title: '9. Text Normalization',
      slides: [
        {
          id: 19,
          title: '9. Text Normalization',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#c878e9' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Standardize casing, numbers, dates, abbreviations to reduce sparsity</li>
                    <li>Create consistent text representation for improved matching</li>
                    <li>Reduce vocabulary size for efficient indexing/embedding</li>
                    <li>Handle variant forms of the same concept consistently</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Lowercasing (task-dependent; preserve named entities if needed)</li>
                    <li>Expand contractions (can't → cannot, don't → do not)</li>
                    <li>Normalize numerals and dates to standard format</li>
                    <li>Standardize units, measurements, and abbreviations</li>
                    <li>Convert Unicode characters to ASCII equivalents when appropriate</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Indexing and classical machine learning pipelines</li>
                    <li>Sometimes before embedding generation (context-dependent)</li>
                    <li>When combining multiple document sources with varied formatting</li>
                    <li>For keyword search and pattern matching applications</li>
                    <li>Always keep a raw copy of the original text alongside normalized version</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Define normalization profile based on downstream tasks</li>
                    <li>Apply case normalization rules (lowercase/preserve specific entities)</li>
                    <li>Identify and standardize dates, numbers, measurements</li>
                    <li>Create exceptions for acronyms, code blocks, proper names</li>
                    <li>Normalize spacing and punctuation</li>
                    <li>Store original text in metadata for reference/display</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#561173',
          notes: ''
        },
        {
          id: 20,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#c878e9' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>More consistent tokens for improved matching</li>
                  <li>Improved recall for information retrieval tasks</li>
                  <li>Reduced vocabulary size speeds up ML processing</li>
                  <li>Makes cross-document comparison more reliable</li>
                  <li>Helps with fuzzy matching and error tolerance</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Loss of stylistic and case-based signals</li>
                  <li>Can be risky for case-sensitive content (programming code, legal text)</li>
                  <li>May remove important distinctions in specialized domains</li>
                  <li>Difficult to define one-size-fits-all normalization rules</li>
                  <li>Potential over-normalization can harm semantic precision</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#561173',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-10',
      title: '10. Light Stopword Trimming',
      slides: [
        {
          id: 21,
          title: '10. Light Stopword Trimming',
          icon: { name: 'duo-eraser' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ffe365' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Reduce high-frequency function words while preserving meaning</li>
                    <li>Improve search precision by removing words that add little semantic value</li>
                    <li>Reduce index size and processing overhead</li>
                    <li>Focus retrieval on content words rather than structure words</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Curated stoplist of common words (a, the, is, of, etc.)</li>
                    <li>POS-aware removal that preserves important modifiers</li>
                    <li>Keeping negations/modals that change meaning</li>
                    <li>Domain exceptions (words that would be stopwords in general language but have significance in the domain)</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Classical IR (BM25), keyword indexing</li>
                    <li>Often skip for LLMs and neural retrieval methods</li>
                    <li>Feature engineering for traditional ML text classifiers</li>
                    <li>When storage/processing constraints are significant</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Start with standard language stopword list</li>
                    <li>Whitelist domain terms that might appear in general stoplists</li>
                    <li>Evaluate impact on sample queries and results</li>
                    <li>Avoid removing stopwords within code blocks/quotes</li>
                    <li>Apply conservatively, prioritizing precision over token reduction</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#736111',
          notes: ''
        },
        {
          id: 22,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ffe365' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Smaller search index size</li>
                  <li>Less noise for keyword search</li>
                  <li>Faster processing for traditional IR systems</li>
                  <li>Focuses attention on content words over function words</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Can drop meaning if too aggressive</li>
                  <li>Hurts phrase/semantic nuance preservation</li>
                  <li>May break contextual relationships between terms</li>
                  <li>Less beneficial for neural/embedding approaches</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#736111',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-11',
      title: '11. Lemmatization / Stemming',
      slides: [
        {
          id: 23,
          title: '11. Lemmatization / Stemming',
          icon: { name: 'duo-seedling' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff7777' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Collapse inflections to base forms to reduce vocabulary</li>
                    <li>Normalize word variants (running → run, studies → study)</li>
                    <li>Reduce vocabulary sparsity for more consistent processing</li>
                    <li>Handle morphological variations across languages</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Stemmers (Porter/Snowball) use rule-based suffix stripping</li>
                    <li>Lemmatizers (WordNet, spaCy) use dictionaries and POS information</li>
                    <li>POS tagging helps disambiguate words (e.g., "lying" as verb vs. adjective)</li>
                    <li>Language-specific morphological rules handle irregular forms</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Search/IR systems to improve recall for morphological variants</li>
                    <li>Classic ML text classification and clustering tasks</li>
                    <li>When vocabulary reduction is important for performance</li>
                    <li>Often unnecessary for modern embeddings/transformer models</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Tokenize text into words</li>
                    <li>Apply POS tagging if using lemmatization</li>
                    <li>Apply lemmatizer with POS information</li>
                    <li>Fallback to stemming for unknown words</li>
                    <li>Store both original and lemmatized/stemmed forms</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#731111',
          notes: ''
        },
        {
          id: 24,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff7777' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Lower vocabulary sparsity for better ML performance</li>
                  <li>Improved recall on search variants ("running" finds "run")</li>
                  <li>Particularly helpful for morphologically rich languages</li>
                  <li>Makes terms more consistent for analysis and counting</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Over-stemming can harm precision (e.g., "university" → "univers")</li>
                  <li>Lemmatization requires more computational resources</li>
                  <li>Language-specific resources needed for quality lemmatization</li>
                  <li>May lose nuance between different forms (e.g., "historic" vs. "historical")</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#731111',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-12',
      title: '12. Keyphrase Extraction',
      slides: [
        {
          id: 25,
          title: '12. Keyphrase Extraction',
          icon: { name: 'duo-tags' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#dc3afb' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Identify salient terms/phrases for tagging and retrieval</li>
                    <li>Extract key concepts and terminology from documents</li>
                    <li>Create concise representation of document content</li>
                    <li>Enable better document indexing and searchability</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Unsupervised methods (TF-IDF, RAKE, TextRank/PositionRank)</li>
                    <li>Supervised extraction using ML/NLP models</li>
                    <li>Embedding-based ranking and MMR for deduplication</li>
                    <li>Statistical and linguistic features for candidate scoring</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Document metadata and tagging</li>
                    <li>Search boosting and relevance ranking</li>
                    <li>Creating document summaries</li>
                    <li>Content recommendations and related documents</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Generate candidate phrases (noun phrases/chunks)</li>
                    <li>Score phrases using statistical/ML methods</li>
                    <li>Rank and select top keyphrases</li>
                    <li>Deduplicate semantically similar phrases</li>
                    <li>Evaluate coverage and relevance</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#560965',
          notes: ''
        },
        {
          id: 26,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#dc3afb' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Enables quick navigation and filtering</li>
                  <li>Boosts retrieval quality through better indexing</li>
                  <li>Improves document summarization</li>
                  <li>Aids content organization and discovery</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Noisy or irrelevant candidates in unstructured text</li>
                  <li>Domain adaptation and stopword lists required</li>
                  <li>May miss implicit concepts not explicitly mentioned</li>
                  <li>Quality depends on document structure and clarity</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#560965',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-13',
      title: '13. Entity Tagging (NER)',
      slides: [
        {
          id: 27,
          title: '13. Entity Tagging (NER)',
          icon: { name: 'duo-user-tag' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#50f94d' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Detect people, orgs, products, locations, and custom entities for structure</li>
                    <li>Convert unstructured text into structured, queryable data</li>
                    <li>Enable entity-based search, filtering, and analytics</li>
                    <li>Assist in compliance/PII identification and redaction</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Sequence labeling (BIO) with spaCy/transformers models</li>
                    <li>Rule-based patterns for specific entity formats</li>
                    <li>Optional entity linking to knowledge bases for disambiguation</li>
                    <li>Custom entity type recognition through additional training</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Compliance/PII detection requirements</li>
                    <li>Analytics dashboards with entity breakdowns</li>
                    <li>Knowledge graph construction from documents</li>
                    <li>Information extraction and disambiguation tasks</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Pick/base model (spaCy, BERT, etc.)</li>
                    <li>Add custom entity labels and patterns if needed</li>
                    <li>Train/fine-tune on domain-specific data if necessary</li>
                    <li>Run model and extract entity spans with their types</li>
                    <li>Store spans, types, normalized IDs as metadata</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0b6509',
          notes: ''
        },
        {
          id: 28,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#50f94d' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Turns text into structured data for analysis</li>
                  <li>Enables database-like joins and entity reasoning</li>
                  <li>Improves search precision and filtering capabilities</li>
                  <li>Creates metadata for document organization</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Domain shift hurts accuracy on specialized content</li>
                  <li>May require custom training for domain-specific entities</li>
                  <li>Long noisy text degrades performance</li>
                  <li>Entity disambiguation can be challenging</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#0b6509',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-14',
      title: '14. Remove Dead Chunks',
      slides: [
        {
          id: 29,
          title: '14. Remove Dead Chunks',
          icon: { name: 'duo-trash' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#f97c6f' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Drop low-value chunks (noise, artifacts, empty or repetitive text)</li>
                    <li>Identify and remove chunks that don't contribute meaningful information</li>
                    <li>Improve quality and relevance of document collection</li>
                    <li>Filter out junk content that could pollute search results</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Length/alpha ratio thresholds to detect empty/artifact chunks</li>
                    <li>Entropy calculations to measure information density</li>
                    <li>Stopword density analysis to find low-value text</li>
                    <li>Embedding norm/outlier checks to find anomalous content</li>
                    <li>Retrieval frequency tracking to identify unused chunks</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>After chunking process and before indexing</li>
                    <li>Before embedding or training to reduce computation</li>
                    <li>When working with mixed-quality document sources</li>
                    <li>To optimize storage and retrieval performance</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Compute quality scores for each chunk (length, entropy, embedding properties)</li>
                    <li>Set appropriate thresholds based on data analysis</li>
                    <li>Review samples to validate thresholds</li>
                    <li>Apply filters to remove low-quality chunks</li>
                    <li>Log removals for auditability and potential recovery</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#892015',
          notes: ''
        },
        {
          id: 30,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#f97c6f' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Smaller index size and reduced storage costs</li>
                  <li>Higher precision in search/retrieval results</li>
                  <li>Cost savings in embedding and computation</li>
                  <li>Better user experience with more relevant results</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Risk of removing rare but important information</li>
                  <li>Requires careful threshold tuning for each corpus</li>
                  <li>May need domain-specific quality metrics</li>
                  <li>Potential data loss if filtering is too aggressive</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#892015',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-15',
      title: '15. Chunk Summary Metadata',
      slides: [
        {
          id: 31,
          title: '15. Chunk Summary Metadata',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#cc6ff3' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Provide compact previews of chunks for ranking and UX</li>
                    <li>Enable quick semantic understanding of chunks without loading full content</li>
                    <li>Improve search result snippets and RAG relevance assessment</li>
                    <li>Facilitate faster triage of information</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Abstractive (LLM-generated) or extractive summaries of chunk content</li>
                    <li>Include keywords, entities, and section titles in metadata</li>
                    <li>Store compact representations alongside chunk embeddings</li>
                    <li>Generate summaries at different granularities (1-2 sentences)</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>RAG retrieval ranking to improve relevance assessment</li>
                    <li>Search interface for better snippet generation</li>
                    <li>Knowledge management dashboards and document previews</li>
                    <li>When users need to quickly scan large document collections</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>After chunking, process each chunk through summary generation</li>
                    <li>Generate 1-2 sentence summary capturing key points</li>
                    <li>Set token limits to ensure compactness (e.g., 50-100 tokens)</li>
                    <li>Extract and include keyphrases, entities, and other metadata</li>
                    <li>Perform quality control checks on sample summaries</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#591277',
          notes: ''
        },
        {
          id: 32,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#cc6ff3' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Better ranking and re-ranking in retrieval pipelines</li>
                  <li>Improved user experience for scanning search results</li>
                  <li>Faster information triage and navigation</li>
                  <li>Can serve as context for further document analysis</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Generation cost for abstractive summaries with LLMs</li>
                  <li>Risk of summary drift or critical information omission</li>
                  <li>Storage overhead for maintaining both full content and summaries</li>
                  <li>May require regular updates as chunks are modified</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#591277',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-16',
      title: '16. Domain Dictionary / Synonym Normalization',
      slides: [
        {
          id: 33,
          title: '16. Domain Dictionary / Synonym Normalization',
          icon: { name: 'duo-book' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#49dfc1' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Map aliases/synonyms to canonical concepts for consistency</li>
                    <li>Standardize variant terminology across different sources</li>
                    <li>Resolve acronyms, abbreviations, and industry jargon</li>
                    <li>Enable consistent search and analytics across terminology variants</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Dictionary/ontology lookups (e.g., UMLS/SNOMED for medical)</li>
                    <li>Boundary-aware replacements to preserve syntax</li>
                    <li>Fuzzy matching for detecting spelling variants</li>
                    <li>Context-aware disambiguation of ambiguous terms</li>
                    <li>Bidirectional mappings (variant → canonical form)</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Specialized domains (medical, legal, finance, technical)</li>
                    <li>Cross-source normalization for consistent analysis</li>
                    <li>Enterprise search with varying terminology</li>
                    <li>Data integration from multiple systems/vendors</li>
                    <li>Before deduplication to catch synonym duplicates</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Build/curate domain-specific dictionary or leverage existing ontologies</li>
                    <li>Disambiguate acronyms based on context</li>
                    <li>Apply term replacement with proper token boundaries</li>
                    <li>Log all replacements for auditability</li>
                    <li>Keep original text alongside normalized versions</li>
                    <li>Regularly update dictionaries as terminology evolves</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0e594a',
          notes: ''
        },
        {
          id: 34,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#49dfc1' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Higher recall in search and retrieval</li>
                  <li>Unified analytics across terminology variations</li>
                  <li>Better deduplication of conceptually identical content</li>
                  <li>More consistent document embeddings</li>
                  <li>Supports domain-specific precision in NLP tasks</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Dictionary requires ongoing maintenance and curation</li>
                  <li>Ambiguity can lead to incorrect replacements</li>
                  <li>Risk of false positives with short terms</li>
                  <li>Resource-intensive for large vocabularies</li>
                  <li>May lose stylistic/authorial nuances in word choice</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#0e594a',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-17',
      title: '17. Temporal Labeling / Version Tagging',
      slides: [
        {
          id: 35,
          title: '17. Temporal Labeling / Version Tagging',
          icon: { name: 'duo-calendar' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#5fb2e7' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Track when and which version content refers to</li>
                    <li>Manage content drift and outdated information</li>
                    <li>Enable time-aware querying and comparisons</li>
                    <li>Establish content validity periods</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Extract dates/versions from content and metadata</li>
                    <li>Normalize to standard formats (ISO 8601 for dates)</li>
                    <li>Distinguish source_date vs. content_date</li>
                    <li>Capture version identifiers (git SHAs, build numbers)</li>
                    <li>Store as structured metadata alongside content chunks</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Policy documents and legal content</li>
                    <li>Software manuals and documentation</li>
                    <li>Data catalogs and schemas</li>
                    <li>Changelogs and release notes</li>
                    <li>Historical datasets requiring temporal context</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Detect date/version patterns in text and metadata</li>
                    <li>Normalize to standard formats</li>
                    <li>Attach temporal metadata to each chunk</li>
                    <li>Define validity windows for time-bound content</li>
                    <li>Index content for time-aware retrieval</li>
                    <li>Build filtering capabilities for version/date ranges</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#113d59',
          notes: ''
        },
        {
          id: 36,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#5fb2e7' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Enables time-aware question answering</li>
                  <li>Supports document comparison across versions</li>
                  <li>Improves freshness filtering in retrieval</li>
                  <li>Reduces incorrect answers from outdated content</li>
                  <li>Facilitates audit trails and compliance</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Multiple conflicting timestamps can cause ambiguity</li>
                  <li>Date parsing errors across locales/formats</li>
                  <li>Imprecise or missing dates in source material</li>
                  <li>Requires maintenance of version history</li>
                  <li>May need complex query logic for temporal relevance</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#113d59',
          notes: ''
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 37,
          title: 'Minimal Viable Pipeline',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ margin: '0 auto', color: '#3fc779' }}>
              <h3 style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                <SvgIcon iconName="duo-diagram-project" sizeName="2x" style={{ color: '#3498db' }} />
                Example Starter Pipeline
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'rgba(231, 76, 60, 0.15)', borderRadius: '10px', minWidth: '140px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-broom" sizeName="2x" style={{ color: '#e74c3c' }} />
                  <p style={{ marginTop: '10px', fontWeight: 'bold' }}>1. Boilerplate<br />Removal</p>
                </div>
                <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#95a5a6' }} />
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'rgba(155, 89, 182, 0.15)', borderRadius: '10px', minWidth: '140px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-text-width" sizeName="2x" style={{ color: '#9b59b6' }} />
                  <p style={{ marginTop: '10px', fontWeight: 'bold' }}>2. Normalize<br />Text</p>
                </div>
                <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#95a5a6' }} />
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.15)', borderRadius: '10px', minWidth: '140px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-puzzle-piece" sizeName="2x" style={{ color: '#3498db' }} />
                  <p style={{ marginTop: '10px', fontWeight: 'bold' }}>3. Semantic<br />Chunking</p>
                </div>
                <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#95a5a6' }} />
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'rgba(231, 76, 60, 0.15)', borderRadius: '10px', minWidth: '140px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-trash-can" sizeName="2x" style={{ color: '#e74c3c' }} />
                  <p style={{ marginTop: '10px', fontWeight: 'bold' }}>4. Dead-Chunk<br />Filter</p>
                </div>
                <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#95a5a6' }} />
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.15)', borderRadius: '10px', minWidth: '140px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-tags" sizeName="2x" style={{ color: '#2ecc71' }} />
                  <p style={{ marginTop: '10px', fontWeight: 'bold' }}>5. Add<br />Metadata</p>
                </div>
                <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#95a5a6' }} />
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'rgba(243, 156, 18, 0.15)', borderRadius: '10px', minWidth: '140px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-database" sizeName="2x" style={{ color: '#f39c12' }} />
                  <p style={{ marginTop: '10px', fontWeight: 'bold' }}>6. Index</p>
                </div>
              </div>
              <div style={{ marginTop: '50px', padding: '20px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px' }}>
                <p style={{ fontSize: '1.5rem', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-book-open" sizeName="2x" darkModeInvert={true} />
                  <strong>Start with these core steps, then expand based on specific document types and use cases</strong>
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#11552e',
          notes: ''
        },
        {
          id: 38,
          title: 'Summary & Best Practices',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.85em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginBottom: '30px' }}>
                <div style={{ border: '2px solid #2ecc71', borderRadius: '10px', padding: '18px', color: '#2ecc71' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#2ecc71' }} />
                    Key Takeaways
                  </h4>
                  <ul style={{ lineHeight: '1.8' }}>
                    <li>Clean structure + semantic chunks + rich metadata drive retrieval quality and model performance</li>
                    <li>Favor conservative normalization; preserve originals; log every transformation</li>
                    <li>Different preprocessing techniques serve specific purposes - select based on use case</li>
                    <li>Building modular preprocessing pipelines enables easy adaptation and testing</li>
                  </ul>
                </div>
                <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '18px', color: '#3498db' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db' }}>
                    <SvgIcon iconName="duo-shield-check" sizeName="2x" style={{ color: '#3498db' }} />
                    Governance & QA
                  </h4>
                  <ul style={{ lineHeight: '1.8' }}>
                    <li>Log every transformation for auditability</li>
                    <li>Create sample document sets for regression testing</li>
                    <li>Implement version control for preprocessing code</li>
                    <li>Track metrics: deduplication ratio, chunk quality, precision</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#11552e',
          notes: ''
        },
        {
          id: 39,
          title: 'Next Steps',
          icon: { name: 'duo-route' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#5fb2e7' }}>
              <div>
                <div style={{ border: '2px solid #f39c12', borderRadius: '10px', padding: '18px', color: '#f39c12' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                    <div style={{ textAlign: 'center', padding: '12px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px' }}>
                      <strong>1. Select Tools</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Choose tools for each step based on document types</p>
                    </div>
                    <div style={{ textAlign: 'center', padding: '12px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px' }}>
                      <strong>2. Implement in Batches</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Add techniques iteratively with evaluation</p>
                    </div>
                    <div style={{ textAlign: 'center', padding: '12px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px' }}>
                      <strong>3. A/B Test & Monitor</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Build dashboards for preprocessing quality</p>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: '30px', textAlign: 'center', padding: '15px', backgroundColor: 'rgba(52, 73, 94, 0.2)', borderRadius: '10px' }}>
                  <p style={{ fontSize: '1.1em', fontWeight: 'bold' }}>
                    Document preprocessing is an iterative process — measure impact and refine as you go
                  </p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#11552e',
          notes: ''
        }
      ]
    }
  ]
};

