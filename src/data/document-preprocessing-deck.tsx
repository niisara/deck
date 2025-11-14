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
          title: '17 Document Preprocessing Techniques',
          content: (
            <div style={{ textAlign: 'left' }}>
          <h2 style={{ marginBottom: '40px' }}>A practical cheat sheet for NLP and data processing pipelines</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', marginTop: '50px' }}>
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
          <p style={{ marginTop: '60px', fontSize: '1.1em' }}>
            <strong>Goal:</strong> Provide a clean, consistent pipeline for high-quality retrieval, modeling, and analytics
          </p>
        </div>
      ),
      backgroundColor: '#2C3E50',
      notes: 'Introduction: Raw data transformation through processing to clean output'
    },
    {
          id: 2,
          title: 'Table of Contents',
          icon: { name: 'duo-list-check', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em' }}>
          <p style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.2em' }}>
            Each technique includes <strong>Goal</strong>, <strong>How It Works</strong>, <strong>When to Use</strong>, <strong>Pros</strong>, and <strong>Cons</strong>
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c' }}>
                <SvgIcon iconName="duo-broom" sizeName="1x" />
                Content Cleaning (1-5)
              </h4>
              <ul style={{ lineHeight: '1.6' }}>
                <li>1. Remove Boilerplate Noise</li>
                <li>2. Deduplicate Repeated Text</li>
                <li>3. Normalize Whitespace & Formatting</li>
                <li>4. Convert Tables to Structured Text</li>
                <li>5. OCR Cleanup</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3498db', marginTop: '15px' }}>
                <SvgIcon iconName="duo-scissors" sizeName="1x" />
                Text Segmentation (6-8)
              </h4>
              <ul style={{ lineHeight: '1.6' }}>
                <li>6. Sentence Boundary Detection</li>
                <li>7. Semantic Chunking</li>
                <li>8. Contextual Chunk Linking</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9b59b6' }}>
                <SvgIcon iconName="duo-text" sizeName="1x" />
                Text Normalization (9-11)
              </h4>
              <ul style={{ lineHeight: '1.6' }}>
                <li>9. Text Normalization</li>
                <li>10. Light Stopword Trimming</li>
                <li>11. Lemmatization / Stemming</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1abc9c', marginTop: '15px' }}>
                <SvgIcon iconName="duo-tags" sizeName="1x" />
                Metadata Enrichment (12-13)
              </h4>
              <ul style={{ lineHeight: '1.6' }}>
                <li>12. Keyphrase Extraction</li>
                <li>13. Entity Tagging (NER)</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f39c12' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" />
                Quality & Enhancement (14-17)
              </h4>
              <ul style={{ lineHeight: '1.6' }}>
                <li>14. Remove Dead Chunks</li>
                <li>15. Chunk Summary Metadata</li>
                <li>16. Domain Dictionary / Synonyms</li>
                <li>17. Temporal Labeling / Versioning</li>
              </ul>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.1em', fontWeight: 'bold' }}>
            Total: 17 preprocessing techniques
          </p>
        </div>
      ),
      backgroundColor: '#34495E',
      notes: '17 techniques organized into 5 categories: Content Cleaning, Text Segmentation, Normalization, Metadata Enrichment, and Quality Enhancement'
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
          icon: { name: 'duo-broom', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-broom" sizeName="2x" style={{ color: '#e74c3c' }} />
            <h3>Extract main content from noisy web pages and documents</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" style={{ color: '#3498db' }} />
                Goal
              </h4>
              <ul>
                <li>Strip nav bars, ads, cookie banners, headers/footers</li>
                <li>Reduce document noise before processing/embedding</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" />
                How It Works
              </h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>DOM/content-density methods (Readability, Trafilatura)</li>
                <li>XPath/CSS selectors for targeted extraction</li>
                <li>Heuristic text density analysis</li>
                <li>ML-based classification of content vs. boilerplate</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" />
                When to Use
              </h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Web-scraped pages with navigation/ads</li>
                <li>PDFs with repeated headers/footers</li>
                <li>Early in preprocessing pipeline before chunking</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" />
                Pros
              </h4>
              <ul>
                <li>Higher signal-to-noise ratio</li>
                <li>Fewer tokens in downstream tasks</li>
                <li>Better retrieval quality</li>
                <li>Reduces repetitive elements</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" />
                Cons
              </h4>
              <ul>
                <li>Risk of removing valuable sidebar content</li>
                <li>May require site-specific tuning</li>
                <li>Multilingual edge cases</li>
                <li>Dynamic sites challenge heuristics</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#C0392B',
      notes: 'Remove boilerplate: Extract main content from noisy HTML/PDF, strip navigation, ads, headers/footers'
        }
      ]
    },
    {
      id: 'technique-2',
      title: '2. Deduplicate Repeated Text',
      slides: [
        {
          id: 4,
          title: '2. Deduplicate Repeated Text',
          icon: { name: 'duo-copy', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-copy" sizeName="2x" style={{ color: '#9b59b6' }} />
            <h3>Remove exact, near-duplicate, and semantically redundant text</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" style={{ color: '#3498db' }} />
                Goal
              </h4>
              <ul>
                <li>Reduce bias and cost from repetitive content</li>
                <li>Prevent overrepresentation in training data</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" />
                How It Works
              </h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Exact hashing (MD5/SHA)</li>
                <li>Near-dup (SimHash/MinHash+LSH)</li>
                <li>Semantic deduplication via embeddings</li>
                <li>Suffix-array algorithms for overlap detection</li>
                <li>Jaccard similarity for fuzzy matching</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" />
                When to Use
              </h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Documents with revisions/changelogs</li>
                <li>Content from mirror sources</li>
                <li>Training data preparation for ML models</li>
                <li>Large crawls and corpus processing</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" />
                Pros
              </h4>
              <ul>
                <li>Smaller, more efficient corpus</li>
                <li>Less data leakage between train/test</li>
                <li>Faster indexing and training</li>
                <li>More balanced content representation</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" />
                Cons
              </h4>
              <ul>
                <li>Computationally expensive at scale</li>
                <li>Risk of false merges with low thresholds</li>
                <li>Requires fingerprint database maintenance</li>
                <li>May remove legitimate repeated content</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#8E44AD',
      notes: 'Deduplication: Remove exact and near-duplicate text using hashing, LSH, and semantic similarity'
        }
      ]
    },
    {
      id: 'technique-3',
      title: '3. Normalize Whitespace & Formatting',
      slides: [
        {
          id: 5,
          title: '3. Normalize Whitespace & Formatting',
          icon: { name: 'duo-gears', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-align-left" sizeName="2x" style={{ color: '#3498db' }} />
            <h3>Create consistent spacing, line breaks, and punctuation</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" style={{ color: '#3498db' }} />
                Goal
              </h4>
              <ul>
                <li>Standardize Unicode characters for stable tokenization</li>
                <li>Eliminate inconsistencies from different sources</li>
                <li>Prevent text processing issues from irregular formatting</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" />
                How It Works
              </h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Collapse multiple spaces into single spaces</li>
                <li>Normalize newlines (CR, LF, CRLF)</li>
                <li>Apply Unicode normalization (NFKC)</li>
                <li>Standardize quotes, dashes, bullets</li>
                <li>Handle control characters and zero-width spaces</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" />
                Pros
              </h4>
              <ul>
                <li>Cleaner, more consistent tokens</li>
                <li>Reduces spurious differences across sources</li>
                <li>Improves matching and comparison</li>
                <li>Makes downstream processing reliable</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" />
                Cons
              </h4>
              <ul>
                <li>May break layout-sensitive text (code, poetry, tables)</li>
                <li>Can lose intentional formatting signals</li>
                <li>Special content needs protection with markers</li>
                <li>Potential information loss in specialized domains</li>
              </ul>
              <p style={{ marginTop: '12px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '5px' }}>
                <strong>💡 Tip:</strong> Apply early in pipeline, before tokenization
              </p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#2980B9',
      notes: 'Whitespace normalization: Standardize spacing, line breaks, Unicode, and punctuation for consistent tokenization'
        }
      ]
    },
    {
      id: 'technique-4',
      title: '4. Convert Tables to Structured Text',
      slides: [
        {
          id: 6,
          title: '4. Convert Tables to Structured Text',
          icon: { name: 'duo-table', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-table" sizeName="2x" style={{ color: '#1abc9c' }} />
            <h3>Make tables machine-usable for retrieval, QA, and analytics</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" />
                How It Works
              </h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Detect tables (HTML, Camelot/Tabula for PDF)</li>
                <li>Extract header/row structure</li>
                <li>Linearize as key:value pairs or JSON</li>
                <li>Normalize complex tables with spanning cells</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" />
                When to Use
              </h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Financial reports with tabular data</li>
                <li>Product comparison charts</li>
                <li>Technical specifications</li>
                <li>Any document where tables contain key facts</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" />
                Pros
              </h4>
              <ul>
                <li>Preserves semantic relationships</li>
                <li>Improves Q&A over tabular facts</li>
                <li>Enables structured queries</li>
                <li>Supports comparison operations</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" />
                Cons
              </h4>
              <ul>
                <li>Merged cells are difficult to process</li>
                <li>Rotated text presents extraction challenges</li>
                <li>OCR'd tables require additional cleanup</li>
                <li>Multi-level headers hard to represent</li>
                <li>May lose visual formatting meaning</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16A085',
      notes: 'Table conversion: Transform visual tabular data into structured JSON/CSV for better retrieval and QA'
        }
      ]
    },
    {
      id: 'technique-5',
      title: '5. OCR Cleanup',
      slides: [
        {
          id: 7,
          title: '5. OCR Cleanup',
          icon: { name: 'duo-scanner', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-scanner" sizeName="2x" style={{ color: '#e67e22' }} />
            <h3>Fix OCR noise: broken words, wrong characters, artifacts</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" />
                How It Works
              </h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Spell/LM-based correction for misrecognized text</li>
                <li>Confusion sets resolution (0/O, l/1, rn/m)</li>
                <li>Dehyphenation of line-break separated words</li>
                <li>Deskew and layout normalization</li>
                <li>Language identification for multi-lingual docs</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" />
                When to Use
              </h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Scanned PDFs and document images</li>
                <li>Faxes and low-resolution captures</li>
                <li>Historical documents with degraded quality</li>
                <li>After OCR extraction, before semantic processing</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" />
                Pros
              </h4>
              <ul>
                <li>Better readability for humans and machines</li>
                <li>Boosts NER/keyphrase extraction accuracy</li>
                <li>Improves searchability of scanned content</li>
                <li>Enables more accurate embeddings</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" />
                Cons
              </h4>
              <ul>
                <li>Automated corrections can introduce new errors</li>
                <li>Adds latency and computational cost</li>
                <li>Domain-specific dictionaries needed</li>
                <li>Hard to correct heavily degraded text</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#D35400',
      notes: 'OCR cleanup: Fix common OCR errors using spell-checking, confusion sets, dehyphenation, and language models'
        }
      ]
    },
    {
      id: 'techniques-6-8',
      title: 'Text Segmentation (6-8)',
      slides: [
        {
          id: 8,
          title: 'Text Segmentation (6-8)',
          icon: { name: 'duo-scissors', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.72em' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '25px' }}>
            <SvgIcon iconName="duo-scissors" sizeName="3x" style={{ color: '#3498db' }} />
            <SvgIcon iconName="duo-puzzle-piece" sizeName="3x" style={{ color: '#9b59b6' }} />
            <SvgIcon iconName="duo-link" sizeName="3x" style={{ color: '#1abc9c' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }}>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#3498db', marginBottom: '10px' }}>6. Sentence Boundary Detection</h4>
              <p><strong>Goal:</strong> Split text into sentences for chunking</p>
              <p><strong>How:</strong> Rule-based (Punkt) or ML models (spaCy)</p>
              <p><strong>✓</strong> Creates cleaner chunks, improves retrieval precision</p>
              <p><strong>✗</strong> Mis-splits in legal/technical docs, multilingual challenges</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', opacity: 0.9 }}>
                💡 Handle abbreviations, quotes, decimals
              </p>
            </div>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#9b59b6', marginBottom: '10px' }}>7. Semantic Chunking</h4>
              <p><strong>Goal:</strong> Create meaning-coherent chunks vs. arbitrary splits</p>
              <p><strong>How:</strong> Embed sentences, merge above similarity threshold</p>
              <p><strong>✓</strong> Higher retrieval precision, preserves logical boundaries</p>
              <p><strong>✗</strong> Computational overhead, needs threshold tuning</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', opacity: 0.9 }}>
                💡 Cap at 512-1024 tokens for retrieval systems
              </p>
            </div>
            <div style={{ border: '2px solid #1abc9c', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#1abc9c', marginBottom: '10px' }}>8. Contextual Chunk Linking</h4>
              <p><strong>Goal:</strong> Preserve document hierarchy and cross-chunk context</p>
              <p><strong>How:</strong> Assign parent_id/child_ids, store hierarchical path</p>
              <p><strong>✓</strong> Reduces hallucinations, enables hierarchical navigation</p>
              <p><strong>✗</strong> More metadata overhead, additional join logic needed</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', opacity: 0.9 }}>
                💡 Essential for technical manuals and legal docs
              </p>
            </div>
          </div>
          <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>⚡ Key Insight:</strong> Proper segmentation is foundational for high-quality RAG and semantic search
          </div>
        </div>
      ),
      backgroundColor: '#2C3E50',
      notes: 'Text segmentation: Sentence detection, semantic chunking, and contextual linking for better retrieval'
        }
      ]
    },
    {
      id: 'technique-9',
      title: '9. Text Normalization',
      slides: [
        {
          id: 9,
          title: '9. Text Normalization',
          icon: { name: 'duo-gears', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-text-width" sizeName="2x" style={{ color: '#9b59b6' }} />
            <h3>Standardize casing, numbers, dates, abbreviations to reduce sparsity</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" />
                How It Works
              </h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Lowercasing (task-dependent; preserve NEs)</li>
                <li>Expand contractions (can't → cannot)</li>
                <li>Normalize numerals and dates to standard format</li>
                <li>Standardize units, measurements, abbreviations</li>
                <li>Convert Unicode to ASCII equivalents when appropriate</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" />
                When to Use
              </h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Indexing and classical ML pipelines</li>
                <li>Combining multiple document sources</li>
                <li>Keyword search and pattern matching</li>
                <li><strong>Always keep raw copy alongside!</strong></li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" />
                Pros
              </h4>
              <ul>
                <li>More consistent tokens for improved matching</li>
                <li>Improved recall for information retrieval</li>
                <li>Reduced vocabulary size speeds up ML</li>
                <li>Makes cross-document comparison reliable</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" />
                Cons
              </h4>
              <ul>
                <li>Loss of stylistic and case-based signals</li>
                <li>Risky for case-sensitive content (code, legal)</li>
                <li>May remove important distinctions</li>
                <li>Difficult to define universal rules</li>
                <li>Potential over-normalization harms precision</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#8E44AD',
      notes: 'Text normalization: Standardize casing, contractions, numbers, dates to reduce vocabulary sparsity'
        }
      ]
    },
    {
      id: 'techniques-10-11',
      title: '10-11. Stopwords & Lemmatization',
      slides: [
        {
          id: 10,
          title: '10-11. Stopwords & Lemmatization',
          icon: { name: 'duo-filter', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginBottom: '25px' }}>
            <SvgIcon iconName="duo-filter-circle-xmark" sizeName="3x" style={{ color: '#e74c3c' }} />
            <SvgIcon iconName="duo-seedling" sizeName="3x" style={{ color: '#2ecc71' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div style={{ border: '2px solid #e74c3c', borderRadius: '10px', padding: '18px' }}>
              <h3 style={{ color: '#e74c3c', marginBottom: '12px' }}>10. Light Stopword Trimming</h3>
              <p><strong>Goal:</strong> Reduce high-frequency function words while preserving meaning</p>
              <p style={{ marginTop: '10px' }}><strong>How:</strong> Curated stoplist (a, the, is, of), POS-aware removal, keep negations/modals</p>
              <div style={{ marginTop: '12px' }}>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Smaller index, less noise, faster processing</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Can drop meaning if too aggressive, breaks phrases</p>
              </div>
              <p style={{ marginTop: '10px', fontSize: '0.95em' }}>
                <strong>When:</strong> Classical IR (BM25), keyword indexing; often skip for LLMs
              </p>
              <p style={{ marginTop: '10px', padding: '8px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '5px' }}>
                💡 Apply conservatively, whitelist domain terms
              </p>
            </div>
            <div style={{ border: '2px solid #2ecc71', borderRadius: '10px', padding: '18px' }}>
              <h3 style={{ color: '#2ecc71', marginBottom: '12px' }}>11. Lemmatization / Stemming</h3>
              <p><strong>Goal:</strong> Collapse inflections to base forms (running → run)</p>
              <p style={{ marginTop: '10px' }}><strong>How:</strong> Stemmers (Porter/Snowball) use rules; Lemmatizers (WordNet, spaCy) use dictionaries + POS</p>
              <div style={{ marginTop: '12px' }}>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Lower sparsity, improved recall on variants</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Over-stemming harms precision, needs more compute</p>
              </div>
              <p style={{ marginTop: '10px', fontSize: '0.95em' }}>
                <strong>When:</strong> Search/IR systems, classic ML; often unnecessary for transformers
              </p>
              <p style={{ marginTop: '10px', padding: '8px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '5px' }}>
                💡 Store both original and lemmatized forms
              </p>
            </div>
          </div>
          <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'rgba(149, 165, 166, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>⚖️ Balance:</strong> These techniques help classical ML/IR but are often skipped for modern neural approaches
          </div>
        </div>
      ),
      backgroundColor: '#27AE60',
      notes: 'Stopwords & Lemmatization: Reduce vocabulary for classical ML/IR, but often unnecessary for modern transformers'
        }
      ]
    },
    {
      id: 'techniques-12-13',
      title: '12-13. Keyphrase & Entity Extraction',
      slides: [
        {
          id: 11,
          title: '12-13. Keyphrase & Entity Extraction',
          icon: { name: 'duo-tags', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginBottom: '25px' }}>
            <SvgIcon iconName="duo-key" sizeName="3x" style={{ color: '#f39c12' }} />
            <SvgIcon iconName="duo-tag" sizeName="3x" style={{ color: '#3498db' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div style={{ border: '2px solid #f39c12', borderRadius: '10px', padding: '18px' }}>
              <h3 style={{ color: '#f39c12', marginBottom: '12px' }}>12. Keyphrase Extraction</h3>
              <p><strong>Goal:</strong> Identify salient terms/phrases for tagging and retrieval</p>
              <p style={{ marginTop: '10px' }}><strong>How:</strong> Unsupervised (TF-IDF, RAKE, TextRank) or supervised ML, embedding-based ranking + MMR</p>
              <div style={{ marginTop: '12px' }}>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Quick navigation, boosts retrieval quality, improves summarization</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Noisy candidates, domain adaptation needed, may miss implicit concepts</p>
              </div>
              <p style={{ marginTop: '10px', fontSize: '0.95em' }}>
                <strong>When:</strong> Document metadata/tagging, search boosting, content recommendations
              </p>
              <p style={{ marginTop: '10px', padding: '8px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '5px' }}>
                💡 Generate candidates from noun phrases, score and rank
              </p>
            </div>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '18px' }}>
              <h3 style={{ color: '#3498db', marginBottom: '12px' }}>13. Entity Tagging (NER)</h3>
              <p><strong>Goal:</strong> Detect people, orgs, products, locations, and custom entities</p>
              <p style={{ marginTop: '10px' }}><strong>How:</strong> Sequence labeling (BIO) with spaCy/transformers, rule-based patterns, optional entity linking</p>
              <div style={{ marginTop: '12px' }}>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Turns text into structured data, enables entity reasoning, improves filtering</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Domain shift hurts accuracy, may need custom training, disambiguation challenges</p>
              </div>
              <p style={{ marginTop: '10px', fontSize: '0.95em' }}>
                <strong>When:</strong> Compliance/PII detection, analytics dashboards, knowledge graph construction
              </p>
              <p style={{ marginTop: '10px', padding: '8px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '5px' }}>
                💡 Fine-tune on domain data for best results
              </p>
            </div>
          </div>
          <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'rgba(52, 73, 94, 0.2)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>🏷️ Metadata Enrichment:</strong> Keyphrases and entities add structured metadata for better search and analytics
          </div>
        </div>
      ),
      backgroundColor: '#34495E',
      notes: 'Metadata enrichment: Keyphrase extraction for tagging, NER for structured entity data'
        }
      ]
    },
    {
      id: 'technique-14',
      title: '14. Remove Dead Chunks',
      slides: [
        {
          id: 12,
          title: '14. Remove Dead Chunks',
          icon: { name: 'duo-trash', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-trash-can" sizeName="2x" style={{ color: '#e74c3c' }} />
            <h3>Drop low-value chunks (noise, artifacts, empty or repetitive text)</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" style={{ color: '#3498db' }} />
                Goal
              </h4>
              <ul>
                <li>Identify and remove chunks that don't contribute meaningful information</li>
                <li>Improve quality and relevance of document collection</li>
                <li>Filter out junk content that could pollute search results</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" />
                How It Works
              </h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Length/alpha ratio thresholds for empty/artifact chunks</li>
                <li>Entropy calculations for information density</li>
                <li>Stopword density analysis for low-value text</li>
                <li>Embedding norm/outlier checks for anomalies</li>
                <li>Retrieval frequency tracking for unused chunks</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" />
                Pros
              </h4>
              <ul>
                <li>Smaller index size and reduced storage costs</li>
                <li>Higher precision in search/retrieval</li>
                <li>Cost savings in embedding computation</li>
                <li>Better user experience with relevant results</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" />
                Cons
              </h4>
              <ul>
                <li>Risk of removing rare but important information</li>
                <li>Requires careful threshold tuning</li>
                <li>May need domain-specific quality metrics</li>
                <li>Potential data loss if too aggressive</li>
              </ul>
              <p style={{ marginTop: '12px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '5px' }}>
                <strong>💡 Best Practice:</strong> Log removals for auditability and potential recovery
              </p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#C0392B',
      notes: 'Remove dead chunks: Filter low-quality chunks using entropy, length, stopword density, and embedding metrics'
        }
      ]
    },
    {
      id: 'technique-15',
      title: '15. Chunk Summary Metadata',
      slides: [
        {
          id: 13,
          title: '15. Chunk Summary Metadata',
          icon: { name: 'duo-note-sticky', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-file-contract" sizeName="2x" style={{ color: '#9b59b6' }} />
            <h3>Provide compact previews of chunks for ranking and UX</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" style={{ color: '#3498db' }} />
                Goal
              </h4>
              <ul>
                <li>Enable quick semantic understanding of chunks</li>
                <li>Improve search result snippets and RAG relevance</li>
                <li>Facilitate faster triage of information</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" />
                How It Works
              </h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Abstractive (LLM) or extractive summaries</li>
                <li>Include keywords, entities, section titles</li>
                <li>Store compact representations with embeddings</li>
                <li>Generate summaries at different granularities (1-2 sentences)</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" />
                Pros
              </h4>
              <ul>
                <li>Better ranking and re-ranking in retrieval</li>
                <li>Improved UX for scanning search results</li>
                <li>Faster information triage and navigation</li>
                <li>Can serve as context for further analysis</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" />
                Cons
              </h4>
              <ul>
                <li>Generation cost for abstractive summaries</li>
                <li>Risk of summary drift or information omission</li>
                <li>Storage overhead for both content and summaries</li>
                <li>May require regular updates as chunks change</li>
              </ul>
              <p style={{ marginTop: '12px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '5px' }}>
                <strong>💡 Tip:</strong> Set token limits (50-100) to ensure compactness
              </p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#8E44AD',
      notes: 'Chunk summaries: Generate 1-2 sentence previews for better ranking, snippets, and user experience in RAG'
        }
      ]
    },
    {
      id: 'technique-16',
      title: '16. Domain Dictionary / Synonym Normalization',
      slides: [
        {
          id: 14,
          title: '16. Domain Dictionary / Synonym Normalization',
          icon: { name: 'duo-book', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-book-bookmark" sizeName="2x" style={{ color: '#1abc9c' }} />
            <h3>Map aliases/synonyms to canonical concepts for consistency</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" style={{ color: '#3498db' }} />
                Goal
              </h4>
              <ul>
                <li>Standardize variant terminology across sources</li>
                <li>Resolve acronyms, abbreviations, industry jargon</li>
                <li>Enable consistent search and analytics</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" />
                How It Works
              </h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Dictionary/ontology lookups (e.g., UMLS/SNOMED)</li>
                <li>Boundary-aware replacements to preserve syntax</li>
                <li>Fuzzy matching for spelling variants</li>
                <li>Context-aware disambiguation of ambiguous terms</li>
                <li>Bidirectional mappings (variant → canonical)</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" />
                Pros
              </h4>
              <ul>
                <li>Higher recall in search and retrieval</li>
                <li>Unified analytics across terminology variations</li>
                <li>Better deduplication of conceptually identical content</li>
                <li>More consistent document embeddings</li>
                <li>Supports domain-specific precision</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" />
                Cons
              </h4>
              <ul>
                <li>Dictionary requires ongoing maintenance</li>
                <li>Ambiguity can lead to incorrect replacements</li>
                <li>Risk of false positives with short terms</li>
                <li>Resource-intensive for large vocabularies</li>
                <li>May lose stylistic/authorial nuances</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16A085',
      notes: 'Domain dictionary: Normalize synonyms, acronyms, and variant terminology to canonical forms for consistency'
        }
      ]
    },
    {
      id: 'technique-17',
      title: '17. Temporal Labeling / Version Tagging',
      slides: [
        {
          id: 15,
          title: '17. Temporal Labeling / Version Tagging',
          icon: { name: 'duo-calendar', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-clock" sizeName="2x" style={{ color: '#3498db' }} />
            <h3>Track when and which version content refers to</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" style={{ color: '#3498db' }} />
                Goal
              </h4>
              <ul>
                <li>Manage content drift and outdated information</li>
                <li>Enable time-aware querying and comparisons</li>
                <li>Establish content validity periods</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" />
                How It Works
              </h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Extract dates/versions from content and metadata</li>
                <li>Normalize to standard formats (ISO 8601)</li>
                <li>Distinguish source_date vs. content_date</li>
                <li>Capture version identifiers (git SHAs, build numbers)</li>
                <li>Store as structured metadata alongside chunks</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" />
                Pros
              </h4>
              <ul>
                <li>Enables time-aware question answering</li>
                <li>Supports document comparison across versions</li>
                <li>Improves freshness filtering in retrieval</li>
                <li>Reduces incorrect answers from outdated content</li>
                <li>Facilitates audit trails and compliance</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" />
                Cons
              </h4>
              <ul>
                <li>Multiple conflicting timestamps can cause ambiguity</li>
                <li>Date parsing errors across locales/formats</li>
                <li>Imprecise or missing dates in source material</li>
                <li>Requires maintenance of version history</li>
                <li>May need complex query logic for temporal relevance</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#2980B9',
      notes: 'Temporal labeling: Track dates, versions, and validity periods for time-aware retrieval and compliance'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 16,
          title: 'Minimal Viable Pipeline',
          icon: { name: 'duo-diagram-project', size: '5x' },
          content: (
        <div style={{ margin: '0 auto' }}>
          <h3 style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
            <SvgIcon iconName="duo-diagram-project" sizeName="2x" style={{ color: '#3498db' }} />
            Example Starter Pipeline
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'rgba(231, 76, 60, 0.15)', borderRadius: '10px', minWidth: '140px' }}>
              <SvgIcon iconName="duo-broom" sizeName="2x" style={{ color: '#e74c3c' }} />
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>1. Boilerplate<br/>Removal</p>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#95a5a6' }} />
            <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'rgba(155, 89, 182, 0.15)', borderRadius: '10px', minWidth: '140px' }}>
              <SvgIcon iconName="duo-text-width" sizeName="2x" style={{ color: '#9b59b6' }} />
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>2. Normalize<br/>Text</p>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#95a5a6' }} />
            <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.15)', borderRadius: '10px', minWidth: '140px' }}>
              <SvgIcon iconName="duo-puzzle-piece" sizeName="2x" style={{ color: '#3498db' }} />
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>3. Semantic<br/>Chunking</p>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#95a5a6' }} />
            <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'rgba(231, 76, 60, 0.15)', borderRadius: '10px', minWidth: '140px' }}>
              <SvgIcon iconName="duo-trash-can" sizeName="2x" style={{ color: '#e74c3c' }} />
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>4. Dead-Chunk<br/>Filter</p>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#95a5a6' }} />
            <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.15)', borderRadius: '10px', minWidth: '140px' }}>
              <SvgIcon iconName="duo-tags" sizeName="2x" style={{ color: '#2ecc71' }} />
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>5. Add<br/>Metadata</p>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#95a5a6' }} />
            <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'rgba(243, 156, 18, 0.15)', borderRadius: '10px', minWidth: '140px' }}>
              <SvgIcon iconName="duo-database" sizeName="2x" style={{ color: '#f39c12' }} />
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>6. Index</p>
            </div>
          </div>
          <div style={{ marginTop: '50px', padding: '20px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px' }}>
            <p style={{ fontSize: '1em', marginBottom: '10px' }}>
              <strong>📋 Start with these core steps, then expand based on specific document types and use cases</strong>
            </p>
          </div>
        </div>
      ),
      backgroundColor: '#27AE60',
      notes: 'Minimal viable pipeline: Start with 6 core steps, iterate and add techniques based on results'
        },
        {
          id: 17,
          title: 'Summary & Best Practices',
          icon: { name: 'duo-clipboard-check', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.85em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginBottom: '30px' }}>
            <div style={{ border: '2px solid #2ecc71', borderRadius: '10px', padding: '18px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" />
                Key Takeaways
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li>Clean structure + semantic chunks + rich metadata = quality retrieval</li>
                <li>Favor conservative normalization; preserve originals</li>
                <li>Different techniques serve specific purposes - select based on use case</li>
                <li>Building modular pipelines enables easy adaptation</li>
              </ul>
            </div>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '18px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" />
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
          <div style={{ border: '2px solid #f39c12', borderRadius: '10px', padding: '18px' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12', marginBottom: '15px' }}>
              <SvgIcon iconName="duo-route" sizeName="1x" />
              Next Steps
            </h4>
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
              🔄 Document preprocessing is an iterative process — measure impact and refine as you go
            </p>
          </div>
        </div>
      ),
      backgroundColor: '#34495E',
      notes: 'Summary: Clean structure drives quality, favor conservative normalization, log transformations, iterate based on metrics'
        }
      ]
    }
  ]
};

