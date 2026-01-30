import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const textPreprocessingDeck: Deck = {
  id: 'text-preprocessing-deck',
  name: '21 Text Preprocessing Techniques',
  description: 'From tokenization to language detection with practical cheat sheets',
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
          title: '21 Text Preprocessing Techniques',
          content: (
            <div>
              <h2>From tokenization to language detection with practical cheat sheets</h2>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <SvgIcon iconName="duo-file-lines" sizeName="4x" style={{ color: '#e74c3c' }} />
                  <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Raw Text</p>
                </div>
                <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <SvgIcon iconName="duo-gears" sizeName="4x" style={{ color: '#f39c12' }} />
                  <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Preprocessing</p>
                </div>
                <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <SvgIcon iconName="duo-sparkles" sizeName="4x" style={{ color: '#2ecc71' }} />
                  <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Clean Data</p>
                </div>
              </div>
              <p style={{ fontSize: '2rem' }}>
                A comprehensive guide covering 21 text preprocessing techniques in NLP/Data Science
              </p>
              <p><strong>Prepared by:</strong> Nisar A</p>
              <p><strong>Date:</strong> November 7, 2025</p>
              <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
            </div>
          ),
          backgroundColor: '#14227b',
          notes: ''
        },
        {
          id: 2,
          title: 'Table of Contents',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3498db', marginBottom: '12px' }}>
                    <SvgIcon iconName="duo-scissors" sizeName="2x" darkModeInvert={true} />
                    Basic Normalization (1-5)
                  </h4>
                  <ul style={{ fontSize: '1.2rem', color: '#3498db' }}>
                    <li>1. Tokenization</li>
                    <li>2. Lowercasing</li>
                    <li>3. Unicode Normalization</li>
                    <li>4. Whitespace Normalization</li>
                    <li>5. Punctuation Normalization</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9b59b6', marginTop: '15px', marginBottom: '12px' }}>
                    <SvgIcon iconName="duo-filter" sizeName="2x" darkModeInvert={true} />
                    Filtering & Reduction (6-7)
                  </h4>
                  <ul style={{ fontSize: '1.2rem', color: '#9b59b6' }}>
                    <li>6. Stopword Removal</li>
                    <li>7. Light Stopword Trimming</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71', marginBottom: '12px' }}>
                    <SvgIcon iconName="duo-seedling" sizeName="2x" darkModeInvert={true} />
                    Morphological Analysis (8-10)
                  </h4>
                  <ul style={{ fontSize: '1.2rem', color: '#2ecc71' }}>
                    <li>8. Stemming</li>
                    <li>9. Lemmatization</li>
                    <li>10. Part-of-Speech Tagging</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f39c12', marginTop: '15px', marginBottom: '12px' }}>
                    <SvgIcon iconName="duo-layer-group" sizeName="2x" darkModeInvert={true} />
                    Feature Engineering (11-12)
                  </h4>
                  <ul style={{ fontSize: '1.2rem', color: '#f39c12' }}>
                    <li>11. N-gram Generation</li>
                    <li>12. Phrase Detection</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e67e22', marginBottom: '12px' }}>
                    <SvgIcon iconName="duo-wand-magic-sparkles" sizeName="2x" darkModeInvert={true} />
                    Error Correction (13-15)
                  </h4>
                  <ul style={{ fontSize: '1.2rem', color: '#e67e22' }}>
                    <li>13. Spell Correction</li>
                    <li>14. OCR Error Correction</li>
                    <li>15. Contraction Expansion</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px', marginBottom: '12px' }}>
                    <SvgIcon iconName="duo-broom" sizeName="2x" darkModeInvert={true} />
                    Cleaning & Structuring (16-21)
                  </h4>
                  <ul style={{ fontSize: '1.2rem', color: '#e74c3c' }}>
                    <li>16. Number Normalization</li>
                    <li>17. Special Character Filtering</li>
                    <li>18. Removing Boilerplate Text</li>
                    <li>19. Removing Duplicate Sentences</li>
                    <li>20. Sentence Boundary Segmentation</li>
                    <li>21. Language Detection and Filtering</li>
                  </ul>
                </div>
              </div>
              <p style={{ textAlign: 'center', marginTop: '25px', fontSize: '1.1em', fontWeight: 'bold' }}>
                21 techniques organized into 6 categories
              </p>
            </div>
          ),
          backgroundColor: '#14227b',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-1',
      title: '1. Tokenization',
      slides: [
        {
          id: 3,
          title: '1. Tokenization',
          icon: { name: 'duo-scissors' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ffbba0' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Split text into meaningful units (tokens) such as words, subwords, or sentences.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Rule-based (whitespace/punctuation) or model-based (BPE/WordPiece) segmentation</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Almost always as an early step before feature extraction or modeling</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Choose granularity (word/subword/sentence)</li>
                    <li>Select tokenizer appropriate for language</li>
                    <li>Configure language-specific rules</li>
                    <li>Apply tokenization</li>
                    <li>Validate token counts</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#85342c',
          notes: ''
        },
        {
          id: 4,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ffbba0' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Enables downstream NLP tasks</li>
                  <li>Handles OOV with subwords</li>
                  <li>Standardizes input format</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Can lose spacing/punctuation nuance</li>
                  <li>Language/script-specific challenges</li>
                  <li>Subwords may lengthen sequences</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#85342c',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-2',
      title: '2. Lowercasing',
      slides: [
        {
          id: 5,
          title: '2. Lowercasing',
          icon: { name: 'duo-text-width' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#29dfc4' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Reduce case-related variance to shrink vocabulary and improve robustness.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Convert text to lowercase or Unicode casefolding for broader equivalence.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Case-insensitive tasks (IR, topic modeling) or noisy user text.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Decide lower vs casefold</li>
                    <li>Define exceptions (acronyms, proper nouns)</li>
                    <li>Apply</li>
                    <li>Spot-check impact</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#197769',
          notes: ''
        },
        {
          id: 6,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#29dfc4' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Smaller vocab</li>
                  <li>Improved generalization</li>
                  <li>Simpler matching</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Loses case signals (named entities, sentence starts)</li>
                  <li>Can harm tasks relying on casing</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#197769',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-3',
      title: '3. Unicode Normalization',
      slides: [
        {
          id: 7,
          title: '3. Unicode Normalization',
          icon: { name: 'duo-globe' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#f9f931' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Ensure canonical representation of characters to avoid duplicate forms.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Apply Unicode NFC/NFD/NFKC/NFKD to compose/decompose/compatibility-normalize.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Mixed sources, accented characters, search/dedup pipelines, cross-platform data.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Pick form (NFC common, NFKC for compatibility)</li>
                    <li>Normalize strings</li>
                    <li>Test tricky cases (combining marks)</li>
                    <li>Log conversions</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#777719',
          notes: ''
        },
        {
          id: 8,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#f9f931' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Stable comparisons</li>
                  <li>Fewer hidden duplicates</li>
                  <li>Safer tokenization</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>NFKC may alter appearance/semantics</li>
                  <li>Grapheme cluster edge cases</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#777719',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-4',
      title: '4. Whitespace Normalization',
      slides: [
        {
          id: 9,
          title: '4. Whitespace Normalization',
          icon: { name: 'duo-align-left' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff5242' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Standardize spacing to make token boundaries predictable.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Collapse multiple spaces; normalize tabs/newlines; trim leading/trailing whitespace.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Before tokenization; after OCR; logs and scraped text.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Replace runs of whitespace with single space</li>
                    <li>Standardize newline to \n</li>
                    <li>Trim</li>
                    <li>Preserve intentional separators if needed</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#631710',
          notes: ''
        },
        {
          id: 10,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff5242' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Cleaner tokens</li>
                  <li>Consistent parsing</li>
                  <li>Fewer edge cases</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>May lose layout cues (tables, code)</li>
                  <li>Affects alignment-sensitive text</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#631710',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-5',
      title: '5. Punctuation Normalization',
      slides: [
        {
          id: 11,
          title: '5. Punctuation Normalization',
          icon: { name: 'duo-leaf' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#60ed38' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Reduce punctuation variants and noise.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Map curly to straight quotes; unify hyphen/dash; collapse repeated punctuation; optionally strip.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Prior to tokenization/features; noisy UGC; cross-locale corpora.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Define mapping table</li>
                    <li>Substitute</li>
                    <li>Remove extraneous marks</li>
                    <li>Preserve meaningful punctuation as needed</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#226310',
          notes: ''
        },
        {
          id: 12,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#60ed38' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Fewer token variants</li>
                  <li>Better matching</li>
                  <li>Improved sentence splitting</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Language/script-specific</li>
                  <li>May remove emotive or semantic cues</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#226310',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-6',
      title: '6. Stopword Removal',
      slides: [
        {
          id: 13,
          title: '6. Stopword Removal',
          icon: { name: 'duo-filter-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#30c7f1' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Remove very frequent function words that add little topical value.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Filter tokens against a language-specific stopword list.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Bag-of-words/TF-IDF features, IR, topic modeling, keyword extraction.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Select stoplist per language/domain</li>
                    <li>Keep negations/intensifiers if needed</li>
                    <li>Filter</li>
                    <li>Review impact on metrics</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#105163',
          notes: ''
        },
        {
          id: 14,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#30c7f1' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Reduces dimensionality</li>
                  <li>Speeds training</li>
                  <li>Can improve topic signal</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Risk of meaning loss</li>
                  <li>Harms sequence/transformer setups</li>
                  <li>Domain sensitivity</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#105163',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-7',
      title: '7. Light Stopword Trimming',
      slides: [
        {
          id: 15,
          title: '7. Light Stopword Trimming',
          icon: { name: 'duo-filter' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#eb35e7' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Conservatively remove only the most generic function words while keeping nuance.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Use a minimal curated list or importance scores (e.g., TF-IDF) to trim lightly.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Sentiment, short texts, tasks sensitive to negation/modality.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Define light list</li>
                    <li>Whitelist negations/domain terms</li>
                    <li>Filter</li>
                    <li>Iterate with validation</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#631061',
          notes: ''
        },
        {
          id: 16,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#eb35e7' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Preserves meaning better than full removal</li>
                  <li>Balanced noise reduction</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Requires tuning</li>
                  <li>Residual noise may remain</li>
                  <li>Still risky for very short texts</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#631061',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-8',
      title: '8. Stemming',
      slides: [
        {
          id: 17,
          title: '8. Stemming',
          icon: { name: 'duo-seedling' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7777ff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Reduce inflected words to stems to merge variants.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Heuristic algorithms (Porter, Snowball, Lancaster) strip suffixes.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>IR, topic modeling, when lexical precision is not critical.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Choose language stemmer</li>
                    <li>Apply</li>
                    <li>Sample-check for over/under-stemming</li>
                    <li>Adjust algorithm if available</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#101063',
          notes: ''
        },
        {
          id: 18,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#7777ff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Cuts dimensionality</li>
                  <li>Robust to inflectional variation</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Produces non-words</li>
                  <li>May conflate unrelated terms</li>
                  <li>Language-dependent rules</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#101063',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-9',
      title: '9. Lemmatization',
      slides: [
        {
          id: 19,
          title: '9. Lemmatization',
          icon: { name: 'duo-leaf' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#5ff792' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Map tokens to dictionary base forms (lemmas).</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Morphological analysis using lexicons and POS/context.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Need precise base forms; linguistic analysis; better semantic grouping.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Tokenize</li>
                    <li>POS tag</li>
                    <li>Lemmatize with language model</li>
                    <li>Handle OOV/proper nouns separately</li>
                    <li>Validate</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#10632c',
          notes: ''
        },
        {
          id: 20,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#5ff792' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>More accurate than stemming</li>
                  <li>Preserves meaning</li>
                  <li>Aids downstream tasks</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Slower</li>
                  <li>Requires models/resources</li>
                  <li>Errors under domain shift</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#10632c',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-10',
      title: '10. Part-of-Speech Tagging',
      slides: [
        {
          id: 21,
          title: '10. Part-of-Speech Tagging',
          icon: { name: 'duo-tags' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff59a7' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Assign grammatical categories (e.g., noun, verb) to tokens.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Sequence labeling via HMM/CRF/neural models trained on tagged corpora.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Before lemmatization, parsing, NER, feature engineering.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Select tagset (e.g., Universal POS)</li>
                    <li>Load model</li>
                    <li>Tokenize</li>
                    <li>Tag</li>
                    <li>Evaluate on a sample</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#631037',
          notes: ''
        },
        {
          id: 22,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff59a7' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Enables syntax-aware features</li>
                  <li>Improves lemmatization and parsing</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Errors propagate</li>
                  <li>Domain/language coverage varies</li>
                  <li>Ambiguous tokens</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#631037',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-11',
      title: '11. N-gram Generation',
      slides: [
        {
          id: 23,
          title: '11. N-gram Generation',
          icon: { name: 'duo-hashtag' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#f7f732' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Capture local context by creating contiguous token sequences.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Sliding window to build bigrams/trigrams/etc.; optional weighting.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Linear models, IR, text classification, feature engineering.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Choose n values</li>
                    <li>Generate</li>
                    <li>Prune rare n-grams</li>
                    <li>Compute TF-IDF/PMI</li>
                    <li>Cap feature size</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#636310',
          notes: ''
        },
        {
          id: 24,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#f7f732' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Encodes order</li>
                  <li>Improves predictive power over unigrams</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Feature explosion</li>
                  <li>Sparsity</li>
                  <li>Brittle to noise and rephrasing</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#636310',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-12',
      title: '12. Phrase Detection',
      slides: [
        {
          id: 25,
          title: '12. Phrase Detection',
          icon: { name: 'duo-puzzle-piece' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#f537e1' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Treat multiword expressions as single units (e.g., "New York").</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Statistical collocation metrics (PMI, t-score) or model-based detection.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>IR, topic modeling, entity-heavy domains, prior to tokenization updates.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Compute n-gram stats</li>
                    <li>Set thresholds</li>
                    <li>Join phrases with delimiter</li>
                    <li>Iterate for higher-order phrases</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#63105a',
          notes: ''
        },
        {
          id: 26,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#f537e1' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Better semantics</li>
                  <li>Reduces fragmentation</li>
                  <li>Improves retrieval and topics</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Threshold tuning</li>
                  <li>Domain dependence</li>
                  <li>False positives/negatives</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#63105a',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-13',
      title: '13. Spell Correction',
      slides: [
        {
          id: 27,
          title: '13. Spell Correction',
          icon: { name: 'duo-spell-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff9b4a' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Fix misspellings to improve readability and model input quality.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Candidate generation via edit distance; ranking by frequency/context (language models).</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>User-generated content, noisy forms, query logs.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Detect errors</li>
                    <li>Generate candidates</li>
                    <li>Rank</li>
                    <li>Apply with confidence threshold</li>
                    <li>Log corrections for QA</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#633510',
          notes: ''
        },
        {
          id: 28,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff9b4a' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Improves recall/precision</li>
                  <li>Cleaner features</li>
                  <li>Better downstream accuracy</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Overcorrection risk</li>
                  <li>Language/locale-specific</li>
                  <li>Computational overhead</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#633510',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-14',
      title: '14. OCR Error Correction',
      slides: [
        {
          id: 29,
          title: '14. OCR Error Correction',
          icon: { name: 'duo-wand-sparkles' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#4dfb35' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Correct systematic errors from optical character recognition.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Rule-based replacements, confusion matrices, dictionaries, post-OCR language models.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Scanned books, PDFs, historical documents.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Analyze error patterns</li>
                    <li>Build rules/models</li>
                    <li>Apply</li>
                    <li>Evaluate on gold samples</li>
                    <li>Iterate</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a6310',
          notes: ''
        },
        {
          id: 30,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#4dfb35' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Large quality gains on OCR text</li>
                  <li>Addresses domain-specific noise</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Corpus-specific tuning needed</li>
                  <li>Residual errors remain</li>
                  <li>Setup effort</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#1a6310',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-15',
      title: '15. Contraction Expansion',
      slides: [
        {
          id: 31,
          title: '15. Contraction Expansion',
          icon: { name: 'duo-expand' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fb56ff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Expand contractions (e.g., "don't" → "do not") for clarity and handling negation.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Regex + mapping dictionary; optional context-aware models.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Sentiment, rule-based parsing, tasks expecting full forms.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Define mapping incl. locale variants</li>
                    <li>Preserve casing</li>
                    <li>Expand</li>
                    <li>Handle slang and possessives carefully</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#611063',
          notes: ''
        },
        {
          id: 32,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fb56ff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Clearer negation and syntax</li>
                  <li>More consistent tokens</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Ambiguities (he'd = he had/would)</li>
                  <li>May alter tone</li>
                  <li>Locale-dependent</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#611063',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-16',
      title: '16. Number Normalization',
      slides: [
        {
          id: 33,
          title: '16. Number Normalization',
          icon: { name: 'duo-hashtag' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff5353' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Standardize numeric expressions for comparability and reduced sparsity.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Parse numerals/words; normalize format; unit conversion; masking (e.g., "NUM").</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>De-identification, aggregation, generalization in models.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Detect numbers</li>
                    <li>choose strategy (keep, scale, mask)</li>
                    <li>handle units/currencies</li>
                    <li>format consistently</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#631010',
          notes: ''
        },
        {
          id: 34,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#ff5353' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Improves generalization</li>
                  <li>Eases matching</li>
                  <li>Reduces vocab size</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Potential loss of precision</li>
                  <li>Unit handling is tricky</li>
                  <li>Context-sensitive</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#631010',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-17',
      title: '17. Special Character Filtering',
      slides: [
        {
          id: 35,
          title: '17. Special Character Filtering',
          icon: { name: 'duo-filter' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#4fe6eb' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Control or remove emojis, symbols, control chars, and non-text artifacts.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Use Unicode categories; whitelists/blacklists; regex filters or mappings.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Formal documents, security sanitization, systems with limited character sets.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Define allowed sets</li>
                    <li>Strip/map disallowed chars</li>
                    <li>Log removals</li>
                    <li>Review edge cases (accent marks, emoji)</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#106063',
          notes: ''
        },
        {
          id: 36,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#4fe6eb' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Cleaner tokens</li>
                  <li>Prevents parsing/rendering issues</li>
                  <li>Mitigates injection</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>May remove meaningful signals (emoji/emoticons)</li>
                  <li>Language-specific characters risk</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#106063',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-18',
      title: '18. Removing Boilerplate Text',
      slides: [
        {
          id: 37,
          title: '18. Removing Boilerplate Text',
          icon: { name: 'duo-broom' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#e5854e' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Remove template-like non-content (headers, footers, nav, ads).</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>HTML/DOM parsing; text-density heuristics; boilerplate detectors (e.g., Boilerpipe, JusText).</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Web/news scraping, emails, PDFs, templated reports.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }} >
                    <li>Parse document</li>
                    <li>identify content blocks</li>
                    <li>drop low-density/repetitive regions</li>
                    <li>keep main body</li>
                    <li>validate</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#632e10',
          notes: ''
        },
        {
          id: 38,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#e5854e' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Cleaner corpora</li>
                  <li>Better topic and summarization performance</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Risk of removing content</li>
                  <li>Site-specific maintenance</li>
                  <li>Complex layouts</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#632e10',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-19',
      title: '19. Removing Duplicate Sentences',
      slides: [
        {
          id: 39,
          title: '19. Removing Duplicate Sentences',
          icon: { name: 'duo-copy' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#47b3ff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Eliminate exact/near-duplicate sentences to reduce bias and leakage.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Hashing for exact dupes; MinHash/LSH or embeddings + cosine for near dupes.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Dataset building, deduplication before training/evaluation.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Normalize text</li>
                    <li>Compute signatures/embeddings</li>
                    <li>Set similarity threshold</li>
                    <li>Remove</li>
                    <li>Keep canonical</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#104163',
          notes: ''
        },
        {
          id: 40,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#47b3ff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Smaller</li>
                  <li>Cleaner datasets</li>
                  <li>Faster training</li>
                  <li>Reduces overfitting</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Computational cost</li>
                  <li>Risk of dropping legitimate repetitions</li>
                  <li>Threshold tuning</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#104163',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-20',
      title: '20. Sentence Boundary Segmentation',
      slides: [
        {
          id: 41,
          title: '20. Sentence Boundary Segmentation',
          icon: { name: 'duo-scissors' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#d756fb' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Split text into sentences for sentence-level processing.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Rule-based with abbreviations + ML/neural models to handle edge cases.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Summarization, translation, sentiment at sentence granularity.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Choose segmenter</li>
                    <li>Configure abbreviation lists</li>
                    <li>Apply</li>
                    <li>Validate tricky cases (quotes, decimals, ellipses)</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#511063',
          notes: ''
        },
        {
          id: 42,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#d756fb' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Enables sentence-level features</li>
                  <li>Manageable chunks</li>
                  <li>Better downstream alignment</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Noisy text and missing punctuation hurt accuracy</li>
                  <li>Multilingual challenges</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#511063',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-21',
      title: '21. Language Detection and Filtering',
      slides: [
        {
          id: 43,
          title: '21. Language Detection and Filtering',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#f7ef4f' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Identify language and route/filter text accordingly.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Character n-grams with probabilistic classifiers (e.g., fastText, CLD3), sometimes with confidence scores.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Multilingual corpora; language-specific pipelines or content moderation.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Pick DifficultySelector</li>
                    <li>Set confidence threshold</li>
                    <li>Detect per document/sentence</li>
                    <li>Filter or route</li>
                    <li>Monitor code-switching</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#635f10',
          notes: ''
        },
        {
          id: 44,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#f7ef4f' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Cleaner mono-lingual datasets</li>
                  <li>Correct model routing</li>
                  <li>Better performance</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Short texts are hard</li>
                  <li>Code-switching</li>
                  <li>Similar scripts/languages may confuse models</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#635f10',
          notes: ''
        }
      ]
    }
  ]
};

