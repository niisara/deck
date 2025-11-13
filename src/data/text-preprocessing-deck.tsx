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
          title: '21 Text Preprocessing Techniques',
          content: (
            <div style={{ textAlign: 'left' }}>
          <h2 style={{ marginBottom: '40px' }}>From Tokenization to Language Detection</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', marginTop: '50px' }}>
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-file-lines" sizeName="4x" style={{ color: '#e74c3c' }} />
              <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Raw Text</p>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-gears" sizeName="4x" style={{ color: '#f39c12' }} />
              <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Preprocessing</p>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-sparkles" sizeName="4x" style={{ color: '#2ecc71' }} />
              <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Clean Data</p>
            </div>
          </div>
          <p style={{ marginTop: '60px', fontSize: '1em' }}>
            A comprehensive guide covering 21 text preprocessing techniques in NLP/Data Science
          </p>
          <p style={{ marginTop: '10px', fontSize: '0.8em', opacity: 0.7 }}>November 7, 2025</p>
        </div>
      ),
      backgroundColor: '#2C3E50',
      notes: 'Introduction: 21 comprehensive text preprocessing techniques for NLP and data science'
    },
        {
          id: 2,
          title: 'Table of Contents',
          icon: { name: 'duo-list-check' },
          content: (
        <div style={{ textAlign: 'left', maxWidth: '1100px', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3498db', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-scissors" sizeName="1x" />
                Basic Normalization (1-5)
              </h4>
              <ul style={{ lineHeight: '1.6' }}>
                <li>1. Tokenization</li>
                <li>2. Lowercasing</li>
                <li>3. Unicode Normalization</li>
                <li>4. Whitespace Normalization</li>
                <li>5. Punctuation Normalization</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9b59b6', marginTop: '15px', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" />
                Filtering & Reduction (6-7)
              </h4>
              <ul style={{ lineHeight: '1.6' }}>
                <li>6. Stopword Removal</li>
                <li>7. Light Stopword Trimming</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-seedling" sizeName="1x" />
                Morphological Analysis (8-10)
              </h4>
              <ul style={{ lineHeight: '1.6' }}>
                <li>8. Stemming</li>
                <li>9. Lemmatization</li>
                <li>10. Part-of-Speech Tagging</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f39c12', marginTop: '15px', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-layer-group" sizeName="1x" />
                Feature Engineering (11-12)
              </h4>
              <ul style={{ lineHeight: '1.6' }}>
                <li>11. N-gram Generation</li>
                <li>12. Phrase Detection</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e67e22', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-wand-magic-sparkles" sizeName="1x" />
                Error Correction (13-15)
              </h4>
              <ul style={{ lineHeight: '1.6' }}>
                <li>13. Spell Correction</li>
                <li>14. OCR Error Correction</li>
                <li>15. Contraction Expansion</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-broom" sizeName="1x" />
                Cleaning & Structuring (16-21)
              </h4>
              <ul style={{ lineHeight: '1.6' }}>
                <li>16. Number Normalization</li>
                <li>17. Special Character Filtering</li>
                <li>18. Removing Boilerplate Text</li>
                <li>19. Removing Duplicate Sentences</li>
                <li>20. Sentence Boundary Segmentation</li>
                <li>21. Language Detection and Filtering</li>
              </ul>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.1em', fontWeight: 'bold' }}>
            21 techniques organized into 6 categories
          </p>
        </div>
      ),
      backgroundColor: '#34495E',
      notes: '21 techniques organized into 6 categories: Basic Normalization, Filtering, Morphological, Feature Engineering, Error Correction, and Cleaning'
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
        <div style={{ textAlign: 'left', maxWidth: '950px', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ marginBottom: '20px' }}>
            <h3>Split text into meaningful units (tokens) such as words, subwords, or sentences</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" />
                How It Works
              </h4>
              <p>Rule-based (whitespace/punctuation) or model-based (BPE/WordPiece) segmentation</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="1x" />
                Steps
              </h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Choose granularity (word/subword/sentence)</li>
                <li>Select tokenizer appropriate for language</li>
                <li>Configure language-specific rules</li>
                <li>Apply tokenization</li>
                <li>Validate token counts</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" />
                When to Use
              </h4>
              <p>Almost always as an early step before feature extraction or modeling</p>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" />
                Pros
              </h4>
              <ul>
                <li>Enables downstream NLP tasks</li>
                <li>Handles OOV with subwords</li>
                <li>Standardizes input format</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" />
                Cons
              </h4>
              <ul>
                <li>Can lose spacing/punctuation nuance</li>
                <li>Language/script-specific challenges</li>
                <li>Subwords may lengthen sequences</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#3498DB',
      notes: 'Tokenization: Foundation technique that splits text into tokens using rule-based or model-based methods'
        }
      ]
    },
    {
      id: 'techniques-2-5',
      title: 'Basic Normalization (2-5)',
      slides: [
        {
          id: 4,
          title: 'Basic Normalization (2-5)',
          icon: { name: 'duo-gears' },
          content: (
        <div style={{ textAlign: 'left', maxWidth: '1050px', margin: '0 auto', fontSize: '0.68em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '18px' }}>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#9b59b6', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-text-width" sizeName="1x" />
                2. Lowercasing
              </h4>
              <p><strong>Goal:</strong> Reduce case-related variance to shrink vocabulary</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Convert to lowercase or Unicode casefolding</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Case-insensitive tasks (IR, topic modeling) or noisy user text</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Smaller vocab, improved generalization, simpler matching</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Loses case signals (named entities, sentence starts)</p>
            </div>
            <div style={{ border: '2px solid #1abc9c', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#1abc9c', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-globe" sizeName="1x" />
                3. Unicode Normalization
              </h4>
              <p><strong>Goal:</strong> Ensure canonical representation to avoid duplicate forms</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Apply Unicode NFC/NFD/NFKC/NFKD to compose/decompose</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Mixed sources, accented characters, search/dedup pipelines</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Stable comparisons, fewer hidden duplicates, safer tokenization</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> NFKC may alter appearance/semantics, grapheme edge cases</p>
            </div>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#3498db', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-align-left" sizeName="1x" />
                4. Whitespace Normalization
              </h4>
              <p><strong>Goal:</strong> Standardize spacing to make token boundaries predictable</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Collapse multiple spaces, normalize tabs/newlines, trim</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Before tokenization, after OCR, logs and scraped text</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Cleaner tokens, consistent parsing, fewer edge cases</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> May lose layout cues (tables, code), affects alignment</p>
            </div>
            <div style={{ border: '2px solid #f39c12', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#f39c12', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-ellipsis" sizeName="1x" />
                5. Punctuation Normalization
              </h4>
              <p><strong>Goal:</strong> Reduce punctuation variants and noise</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Map curly to straight quotes, unify hyphen/dash, collapse repeated</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Prior to tokenization/features, noisy UGC, cross-locale corpora</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Fewer token variants, better matching, improved sentence splitting</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Language/script-specific, may remove emotive/semantic cues</p>
            </div>
          </div>
          <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>🔧 Basic Normalization:</strong> Foundation techniques that standardize text representation for consistent processing
          </div>
        </div>
      ),
      backgroundColor: '#8E44AD',
      notes: 'Basic normalization: Lowercasing, Unicode, Whitespace, and Punctuation normalization for consistent text'
        }
      ]
    },
    {
      id: 'techniques-6-7',
      title: '6-7. Stopword Techniques',
      slides: [
        {
          id: 5,
          title: '6-7. Stopword Techniques',
          icon: { name: 'duo-filter' },
          content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginBottom: '25px' }}>
            <SvgIcon iconName="duo-filter-circle-xmark" sizeName="3x" style={{ color: '#e74c3c' }} />
            <SvgIcon iconName="duo-filter" sizeName="3x" style={{ color: '#f39c12' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div style={{ border: '2px solid #e74c3c', borderRadius: '10px', padding: '18px' }}>
              <h3 style={{ color: '#e74c3c', marginBottom: '12px' }}>6. Stopword Removal</h3>
              <p><strong>Goal:</strong> Remove very frequent function words that add little topical value</p>
              <p style={{ marginTop: '10px' }}><strong>How:</strong> Filter tokens against a language-specific stopword list</p>
              <p style={{ marginTop: '10px' }}><strong>When:</strong> Bag-of-words/TF-IDF features, IR, topic modeling, keyword extraction</p>
              <div style={{ marginTop: '12px' }}>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Reduces dimensionality, speeds training, improves topic signal</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Risk of meaning loss, harms sequence/transformer setups, domain sensitivity</p>
              </div>
              <h4 style={{ marginTop: '12px' }}>Steps:</h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Select stoplist per language/domain</li>
                <li>Keep negations/intensifiers if needed</li>
                <li>Filter tokens</li>
                <li>Review impact on metrics</li>
              </ul>
            </div>
            <div style={{ border: '2px solid #f39c12', borderRadius: '10px', padding: '18px' }}>
              <h3 style={{ color: '#f39c12', marginBottom: '12px' }}>7. Light Stopword Trimming</h3>
              <p><strong>Goal:</strong> Conservatively remove only the most generic function words while keeping nuance</p>
              <p style={{ marginTop: '10px' }}><strong>How:</strong> Use minimal curated list or importance scores (e.g., TF-IDF) to trim lightly</p>
              <p style={{ marginTop: '10px' }}><strong>When:</strong> Sentiment analysis, short texts, tasks sensitive to negation/modality</p>
              <div style={{ marginTop: '12px' }}>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Preserves meaning better than full removal, balanced noise reduction</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Requires tuning, residual noise may remain, risky for very short texts</p>
              </div>
              <h4 style={{ marginTop: '12px' }}>Steps:</h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Define light stopword list</li>
                <li>Whitelist negations/domain terms</li>
                <li>Filter conservatively</li>
                <li>Iterate with validation</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#C0392B',
      notes: 'Stopword techniques: Full removal for dimensionality reduction, light trimming for preserving meaning'
        }
      ]
    },
    {
      id: 'techniques-8-10',
      title: 'Morphological Analysis (8-10)',
      slides: [
        {
          id: 6,
          title: 'Morphological Analysis (8-10)',
          icon: { name: 'duo-seedling' },
          content: (
        <div style={{ textAlign: 'left', maxWidth: '1050px', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '25px' }}>
            <SvgIcon iconName="duo-seedling" sizeName="3x" style={{ color: '#2ecc71' }} />
            <SvgIcon iconName="duo-leaf" sizeName="3x" style={{ color: '#27ae60' }} />
            <SvgIcon iconName="duo-tags" sizeName="3x" style={{ color: '#16a085' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }}>
            <div style={{ border: '2px solid #2ecc71', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#2ecc71', marginBottom: '10px' }}>8. Stemming</h4>
              <p><strong>Goal:</strong> Reduce inflected words to stems to merge variants</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Heuristic algorithms (Porter, Snowball, Lancaster) strip suffixes</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> IR, topic modeling, when lexical precision is not critical</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Cuts dimensionality, robust to inflectional variation</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Produces non-words, may conflate unrelated terms</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '5px' }}>
                💡 Example: running, runs, ran → run
              </p>
            </div>
            <div style={{ border: '2px solid #27ae60', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#27ae60', marginBottom: '10px' }}>9. Lemmatization</h4>
              <p><strong>Goal:</strong> Map tokens to dictionary base forms (lemmas)</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Morphological analysis using lexicons and POS/context</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Need precise base forms, linguistic analysis, better semantic grouping</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> More accurate than stemming, preserves meaning, aids downstream tasks</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Slower, requires models/resources, errors under domain shift</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(39, 174, 96, 0.1)', borderRadius: '5px' }}>
                💡 Example: better → good, was → be
              </p>
            </div>
            <div style={{ border: '2px solid #16a085', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#16a085', marginBottom: '10px' }}>10. Part-of-Speech Tagging</h4>
              <p><strong>Goal:</strong> Assign grammatical categories (noun, verb, etc.) to tokens</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Sequence labeling via HMM/CRF/neural models</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Before lemmatization, parsing, NER, feature engineering</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Enables syntax-aware features, improves lemmatization and parsing</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Errors propagate, domain/language coverage varies, ambiguous tokens</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(22, 160, 133, 0.1)', borderRadius: '5px' }}>
                💡 Example: book (noun) vs book (verb)
              </p>
            </div>
          </div>
          <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>🌱 Morphological Analysis:</strong> Stemming for speed, Lemmatization for accuracy, POS tagging for syntax
          </div>
        </div>
      ),
      backgroundColor: '#27AE60',
      notes: 'Morphological analysis: Stemming for quick reduction, Lemmatization for accurate base forms, POS tagging for grammar'
        }
      ]
    },
    {
      id: 'techniques-11-12',
      title: '11-12. Feature Engineering',
      slides: [
        {
          id: 7,
          title: '11-12. Feature Engineering',
          icon: { name: 'duo-layer-group' },
          content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div style={{ border: '2px solid #f39c12', borderRadius: '10px', padding: '18px' }}>
              <h3 style={{ color: '#f39c12', marginBottom: '12px' }}>11. N-gram Generation</h3>
              <p><strong>Goal:</strong> Capture local context by creating contiguous token sequences</p>
              <p style={{ marginTop: '10px' }}><strong>How:</strong> Sliding window to build bigrams/trigrams/etc.; optional weighting</p>
              <p style={{ marginTop: '10px' }}><strong>When:</strong> Linear models, IR, text classification, feature engineering</p>
              <div style={{ marginTop: '12px' }}>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Encodes order, improves predictive power over unigrams</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Feature explosion, sparsity, brittle to noise and rephrasing</p>
              </div>
              <h4 style={{ marginTop: '12px' }}>Steps:</h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Choose n values (2, 3, etc.)</li>
                <li>Generate n-grams</li>
                <li>Prune rare n-grams</li>
                <li>Compute TF-IDF/PMI</li>
                <li>Cap feature size</li>
              </ul>
              <p style={{ marginTop: '10px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '5px' }}>
                💡 "New York City" → bigrams: (New, York), (York, City)
              </p>
            </div>
            <div style={{ border: '2px solid #e67e22', borderRadius: '10px', padding: '18px' }}>
              <h3 style={{ color: '#e67e22', marginBottom: '12px' }}>12. Phrase Detection</h3>
              <p><strong>Goal:</strong> Treat multiword expressions as single units (e.g., "New York")</p>
              <p style={{ marginTop: '10px' }}><strong>How:</strong> Statistical collocation metrics (PMI, t-score) or model-based detection</p>
              <p style={{ marginTop: '10px' }}><strong>When:</strong> IR, topic modeling, entity-heavy domains, prior to tokenization updates</p>
              <div style={{ marginTop: '12px' }}>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Better semantics, reduces fragmentation, improves retrieval and topics</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Threshold tuning, domain dependence, false positives/negatives</p>
              </div>
              <h4 style={{ marginTop: '12px' }}>Steps:</h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Compute n-gram statistics</li>
                <li>Set thresholds (PMI/frequency)</li>
                <li>Join phrases with delimiter</li>
                <li>Iterate for higher-order phrases</li>
              </ul>
              <p style={{ marginTop: '10px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '5px' }}>
                💡 "machine learning" → "machine_learning"
              </p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#E67E22',
      notes: 'Feature engineering: N-grams capture word order, Phrase detection treats multiword expressions as units'
        }
      ]
    },
    {
      id: 'techniques-13-15',
      title: 'Error Correction (13-15)',
      slides: [
        {
          id: 8,
          title: 'Error Correction (13-15)',
          icon: { name: 'duo-wand-magic-sparkles' },
          content: (
        <div style={{ textAlign: 'left', maxWidth: '1050px', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '25px' }}>
            <SvgIcon iconName="duo-spell-check" sizeName="3x" style={{ color: '#3498db' }} />
            <SvgIcon iconName="duo-scanner" sizeName="3x" style={{ color: '#9b59b6' }} />
            <SvgIcon iconName="duo-expand" sizeName="3x" style={{ color: '#1abc9c' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }}>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#3498db', marginBottom: '10px' }}>13. Spell Correction</h4>
              <p><strong>Goal:</strong> Fix misspellings to improve readability and model input quality</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Candidate generation via edit distance, ranking by frequency/context</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> User-generated content, noisy forms, query logs</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Improves recall/precision, cleaner features, better accuracy</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Overcorrection risk, language/locale-specific, computational overhead</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '5px' }}>
                💡 "recieve" → "receive"
              </p>
            </div>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#9b59b6', marginBottom: '10px' }}>14. OCR Error Correction</h4>
              <p><strong>Goal:</strong> Correct systematic errors from optical character recognition</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Rule-based replacements, confusion matrices, dictionaries, post-OCR LMs</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Scanned books, PDFs, historical documents</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Large quality gains on OCR text, addresses domain-specific noise</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Corpus-specific tuning needed, residual errors remain, setup effort</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '5px' }}>
                💡 "0/O", "l/1", "rn/m" confusion pairs
              </p>
            </div>
            <div style={{ border: '2px solid #1abc9c', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#1abc9c', marginBottom: '10px' }}>15. Contraction Expansion</h4>
              <p><strong>Goal:</strong> Expand contractions (e.g., "don't" → "do not") for clarity</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Regex + mapping dictionary; optional context-aware models</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Sentiment analysis, rule-based parsing, tasks expecting full forms</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Clearer negation and syntax, more consistent tokens</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Ambiguities (he'd = he had/would), may alter tone, locale-dependent</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(26, 188, 156, 0.1)', borderRadius: '5px' }}>
                💡 "won't" → "will not", "I'm" → "I am"
              </p>
            </div>
          </div>
          <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>✨ Error Correction:</strong> Spell correction for UGC, OCR correction for scanned docs, Contraction expansion for clarity
          </div>
        </div>
      ),
      backgroundColor: '#2980B9',
      notes: 'Error correction: Spell correction for typos, OCR correction for scan errors, Contraction expansion for clarity'
        }
      ]
    },
    {
      id: 'techniques-16-17',
      title: '16-17. Number & Character Handling',
      slides: [
        {
          id: 9,
          title: '16-17. Number & Character Handling',
          icon: { name: 'duo-broom' },
          content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginBottom: '25px' }}>
            <SvgIcon iconName="duo-hashtag" sizeName="3x" style={{ color: '#e67e22' }} />
            <SvgIcon iconName="duo-filter" sizeName="3x" style={{ color: '#e74c3c' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div style={{ border: '2px solid #e67e22', borderRadius: '10px', padding: '18px' }}>
              <h3 style={{ color: '#e67e22', marginBottom: '12px' }}>16. Number Normalization</h3>
              <p><strong>Goal:</strong> Standardize numeric expressions for comparability and reduced sparsity</p>
              <p style={{ marginTop: '10px' }}><strong>How:</strong> Parse numerals/words; normalize format; unit conversion; masking (e.g., &lt;NUM&gt;)</p>
              <p style={{ marginTop: '10px' }}><strong>When:</strong> De-identification, aggregation, generalization in models</p>
              <div style={{ marginTop: '12px' }}>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Improves generalization, eases matching, reduces vocab size</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Potential loss of precision, unit handling is tricky, context-sensitive</p>
              </div>
              <h4 style={{ marginTop: '12px' }}>Steps:</h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Detect numbers in text</li>
                <li>Choose strategy (keep, scale, mask)</li>
                <li>Handle units/currencies</li>
                <li>Format consistently</li>
              </ul>
              <p style={{ marginTop: '10px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '5px' }}>
                💡 "5,000" → "5000" or "&lt;NUM&gt;"
              </p>
            </div>
            <div style={{ border: '2px solid #e74c3c', borderRadius: '10px', padding: '18px' }}>
              <h3 style={{ color: '#e74c3c', marginBottom: '12px' }}>17. Special Character Filtering</h3>
              <p><strong>Goal:</strong> Control or remove emojis, symbols, control chars, and non-text artifacts</p>
              <p style={{ marginTop: '10px' }}><strong>How:</strong> Use Unicode categories; whitelists/blacklists; regex filters or mappings</p>
              <p style={{ marginTop: '10px' }}><strong>When:</strong> Formal documents, security sanitization, systems with limited character sets</p>
              <div style={{ marginTop: '12px' }}>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Cleaner tokens, prevents parsing/rendering issues, mitigates injection</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> May remove meaningful signals (emoji/emoticons), language-specific character risk</p>
              </div>
              <h4 style={{ marginTop: '12px' }}>Steps:</h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Define allowed character sets</li>
                <li>Strip/map disallowed chars</li>
                <li>Log removals</li>
                <li>Review edge cases (accent marks, emoji)</li>
              </ul>
              <p style={{ marginTop: '10px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '5px' }}>
                💡 Remove: ™, ®, ©, control chars
              </p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#D35400',
      notes: 'Number normalization standardizes numerics; Special character filtering removes symbols and artifacts'
        }
      ]
    },
    {
      id: 'techniques-18-20',
      title: 'Cleaning & Structuring (18-20)',
      slides: [
        {
          id: 10,
          title: 'Cleaning & Structuring (18-20)',
          icon: { name: 'duo-broom' },
          content: (
        <div style={{ textAlign: 'left', maxWidth: '1050px', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '25px' }}>
            <SvgIcon iconName="duo-broom" sizeName="3x" style={{ color: '#1abc9c' }} />
            <SvgIcon iconName="duo-copy" sizeName="3x" style={{ color: '#9b59b6' }} />
            <SvgIcon iconName="duo-paragraph" sizeName="3x" style={{ color: '#3498db' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }}>
            <div style={{ border: '2px solid #1abc9c', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#1abc9c', marginBottom: '10px' }}>18. Removing Boilerplate Text</h4>
              <p><strong>Goal:</strong> Remove template-like non-content (headers, footers, nav, ads)</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> HTML/DOM parsing; text-density heuristics; boilerplate detectors</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Web/news scraping, emails, PDFs, templated reports</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Cleaner corpora, better topic and summarization performance</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Risk of removing content, site-specific maintenance, complex layouts</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(26, 188, 156, 0.1)', borderRadius: '5px' }}>
                💡 Tools: Boilerpipe, JusText, Trafilatura
              </p>
            </div>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#9b59b6', marginBottom: '10px' }}>19. Removing Duplicate Sentences</h4>
              <p><strong>Goal:</strong> Eliminate exact/near-duplicate sentences to reduce bias and leakage</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Hashing for exact dupes; MinHash/LSH or embeddings + cosine for near dupes</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Dataset building, deduplication before training/evaluation</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Smaller, cleaner datasets; faster training; reduces overfitting</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Computational cost, risk of dropping legitimate repetitions, threshold tuning</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '5px' }}>
                💡 Use: MD5/SHA for exact, embeddings for semantic
              </p>
            </div>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#3498db', marginBottom: '10px' }}>20. Sentence Boundary Segmentation</h4>
              <p><strong>Goal:</strong> Split text into sentences for sentence-level processing</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Rule-based with abbreviations + ML/neural models for edge cases</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Summarization, translation, sentiment at sentence granularity</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Enables sentence-level features, manageable chunks, better alignment</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Noisy text and missing punctuation hurt accuracy, multilingual challenges</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '5px' }}>
                💡 Tools: NLTK Punkt, spaCy, Stanza
              </p>
            </div>
          </div>
          <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'rgba(26, 188, 156, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>🧹 Cleaning:</strong> Remove boilerplate for cleaner corpora, deduplicate for unbiased data, segment for structure
          </div>
        </div>
      ),
      backgroundColor: '#16A085',
      notes: 'Cleaning: Remove boilerplate from web content, deduplicate sentences, segment text into sentences'
        }
      ]
    },
    {
      id: 'technique-21',
      title: '21. Language Detection and Filtering',
      slides: [
        {
          id: 11,
          title: '21. Language Detection and Filtering',
          icon: { name: 'duo-globe' },
          content: (
        <div style={{ textAlign: 'left', maxWidth: '950px', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ marginBottom: '20px' }}>
            <h3>Identify language and route/filter text accordingly</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" />
                How It Works
              </h4>
              <p>Character n-grams with probabilistic classifiers (e.g., fastText, CLD3), sometimes with confidence scores</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                <SvgIcon iconName="duo-list-ol" sizeName="1x" />
                Steps
              </h4>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Pick detector (fastText, CLD3, langdetect)</li>
                <li>Set confidence threshold</li>
                <li>Detect per document/sentence</li>
                <li>Filter or route based on language</li>
                <li>Monitor code-switching scenarios</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" />
                When to Use
              </h4>
              <p>Multilingual corpora; language-specific pipelines or content moderation</p>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" />
                Pros
              </h4>
              <ul>
                <li>Cleaner mono-lingual datasets</li>
                <li>Correct model routing</li>
                <li>Better performance with language-specific models</li>
                <li>Enables targeted preprocessing</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" />
                Cons
              </h4>
              <ul>
                <li>Short texts are hard to classify</li>
                <li>Code-switching challenges</li>
                <li>Similar scripts/languages may confuse models</li>
                <li>Requires threshold tuning</li>
              </ul>
              <div style={{ marginTop: '15px', padding: '12px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px' }}>
                <strong>💡 Example:</strong><br/>
                "Hello world" → English (0.99)<br/>
                "Bonjour le monde" → French (0.98)<br/>
                "你好世界" → Chinese (0.97)
              </div>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#2980B9',
      notes: 'Language detection: Identify and filter text by language for proper routing and mono-lingual datasets'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 12,
          title: 'Technique Selection Guide',
          icon: { name: 'duo-compass' },
          content: (
        <div style={{ maxWidth: '1000px', margin: '0 auto', fontSize: '0.72em' }}>
          <h3 style={{ marginBottom: '25px' }}>When to Use Each Technique</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
            <div style={{ padding: '12px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px', borderLeft: '4px solid #3498db' }}>
              <strong>🔤 Always Start With:</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>Tokenization → Whitespace/Unicode Normalization</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', borderLeft: '4px solid #9b59b6' }}>
              <strong>📝 For Traditional ML/IR:</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>Lowercasing, Stopword Removal, Stemming/Lemmatization, N-grams</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', borderLeft: '4px solid #2ecc71' }}>
              <strong>🤖 For Neural Models:</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>Light/No stopword removal, Keep case for NER, Skip stemming</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px', borderLeft: '4px solid #f39c12' }}>
              <strong>📊 For Topic Modeling:</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>Stopword Removal, Lemmatization, N-grams, Phrase Detection</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e67e22' }}>
              <strong>💬 For Sentiment Analysis:</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>Light Stopword Trimming (keep negations!), Contraction Expansion, Spell Correction</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e74c3c' }}>
              <strong>📄 For Document Cleaning:</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>Boilerplate Removal, Deduplication, Sentence Segmentation</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'rgba(26, 188, 156, 0.1)', borderRadius: '8px', borderLeft: '4px solid #1abc9c' }}>
              <strong>🔍 For Search/IR:</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>Stopword Removal, Stemming, Phrase Detection, Spell Correction</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'rgba(52, 73, 94, 0.1)', borderRadius: '8px', borderLeft: '4px solid #34495e' }}>
              <strong>📖 For OCR/Scanned Docs:</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>OCR Error Correction, Spell Correction, Whitespace Normalization</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'rgba(149, 165, 166, 0.1)', borderRadius: '8px', borderLeft: '4px solid #95a5a6' }}>
              <strong>🌍 For Multilingual:</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>Language Detection, Unicode Normalization, Language-specific Lemmatization</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.15)', borderRadius: '8px', borderLeft: '4px solid #8e44ad' }}>
              <strong>🎯 For Named Entity Recognition:</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>Keep Case, POS Tagging, Light/No Stopword Removal, Sentence Segmentation</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#34495E',
      notes: 'Selection guide: Match preprocessing techniques to your specific task requirements'
        },
        {
          id: 13,
          title: 'Best Practices',
          icon: { name: 'duo-clipboard-check' },
          content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginBottom: '15px' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="1x" />
                Do's
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>Start Simple:</strong> Begin with basic normalization</li>
                <li><strong>Keep Raw Copy:</strong> Always preserve original text</li>
                <li><strong>Pipeline Order:</strong> Tokenization early, cleaning before modeling</li>
                <li><strong>Language-Aware:</strong> Use appropriate tools per language</li>
                <li><strong>Task-Specific:</strong> Tailor preprocessing to your use case</li>
                <li><strong>Validate:</strong> Spot-check samples after each step</li>
                <li><strong>Log Changes:</strong> Track transformations for debugging</li>
                <li><strong>Test Impact:</strong> Measure effect on downstream metrics</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e74c3c', marginBottom: '15px' }}>
                <SvgIcon iconName="duo-ban" sizeName="1x" />
                Don'ts
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>Over-process:</strong> Don't apply every technique blindly</li>
                <li><strong>Lose Context:</strong> Be careful removing stopwords for sentiment</li>
                <li><strong>Ignore Domain:</strong> Generic stoplists may harm specialized text</li>
                <li><strong>Skip Validation:</strong> Always check processed output</li>
                <li><strong>Forget Case Needs:</strong> NER requires case information</li>
                <li><strong>Remove All Numbers:</strong> Context matters (dates, IDs, amounts)</li>
                <li><strong>Aggressive Stemming:</strong> Can conflate unrelated words</li>
                <li><strong>One-Size-Fits-All:</strong> Different tasks need different preprocessing</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '30px', padding: '20px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', textAlign: 'center' }}>
            <strong>💡 Golden Rule:</strong> Less is often more. Start minimal, add preprocessing only when it improves your target metrics.
          </div>
        </div>
      ),
      backgroundColor: '#27AE60',
      notes: 'Best practices: Start simple, keep raw copy, validate changes, tailor to task, avoid over-processing'
        },
        {
          id: 14,
          title: 'Common Pipeline Examples',
          icon: { name: 'duo-diagram-project' },
          content: (
        <div style={{ maxWidth: '950px', margin: '0 auto', fontSize: '0.75em' }}>
          <h3 style={{ marginBottom: '30px' }}>Task-Specific Preprocessing Pipelines</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', border: '2px solid #3498db' }}>
              <h4 style={{ color: '#3498db', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-magnifying-glass" sizeName="1x" />
                Information Retrieval Pipeline
              </h4>
              <p><strong>1.</strong> Tokenization → <strong>2.</strong> Lowercasing → <strong>3.</strong> Unicode Normalization → <strong>4.</strong> Stopword Removal → <strong>5.</strong> Stemming → <strong>6.</strong> N-grams → <strong>7.</strong> Phrase Detection</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '10px', border: '2px solid #2ecc71' }}>
              <h4 style={{ color: '#2ecc71', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-face-smile" sizeName="1x" />
                Sentiment Analysis Pipeline
              </h4>
              <p><strong>1.</strong> Spell Correction → <strong>2.</strong> Contraction Expansion → <strong>3.</strong> Tokenization → <strong>4.</strong> Light Stopword Trimming → <strong>5.</strong> Lemmatization → <strong>6.</strong> Special Character Filtering (keep emoji!)</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '10px', border: '2px solid #9b59b6' }}>
              <h4 style={{ color: '#9b59b6', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-tag" sizeName="1x" />
                Named Entity Recognition Pipeline
              </h4>
              <p><strong>1.</strong> Unicode Normalization → <strong>2.</strong> Whitespace Normalization → <strong>3.</strong> Tokenization → <strong>4.</strong> Sentence Segmentation → <strong>5.</strong> POS Tagging → <strong>6.</strong> Keep Case!</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '10px', border: '2px solid #f39c12' }}>
              <h4 style={{ color: '#f39c12', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-book" sizeName="1x" />
                Topic Modeling Pipeline
              </h4>
              <p><strong>1.</strong> Boilerplate Removal → <strong>2.</strong> Tokenization → <strong>3.</strong> Lowercasing → <strong>4.</strong> Stopword Removal → <strong>5.</strong> Lemmatization → <strong>6.</strong> Phrase Detection → <strong>7.</strong> N-grams</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '10px', border: '2px solid #e67e22' }}>
              <h4 style={{ color: '#e67e22', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-file-pdf" sizeName="1x" />
                OCR Document Processing Pipeline
              </h4>
              <p><strong>1.</strong> OCR Error Correction → <strong>2.</strong> Unicode Normalization → <strong>3.</strong> Whitespace Normalization → <strong>4.</strong> Spell Correction → <strong>5.</strong> Sentence Segmentation → <strong>6.</strong> Deduplication</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(26, 188, 156, 0.1)', borderRadius: '10px', border: '2px solid #1abc9c' }}>
              <h4 style={{ color: '#1abc9c', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-brain" sizeName="1x" />
                Neural NLP (Transformers) Pipeline
              </h4>
              <p><strong>1.</strong> Unicode Normalization → <strong>2.</strong> Whitespace Normalization → <strong>3.</strong> Tokenization (Subword BPE/WordPiece) → <strong>4.</strong> Minimal processing (model handles rest!)</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16A085',
      notes: 'Common pipelines for different tasks: IR, Sentiment, NER, Topic Modeling, OCR, and Neural NLP'
        },
        {
          id: 15,
          title: 'Summary: The Preprocessing Toolkit',
          icon: { name: 'duo-toolbox' },
          content: (
            <div style={{ textAlign: 'left' }}>
          <h2 style={{ marginBottom: '30px' }}>21 Techniques for Clean Text</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '1000px', margin: '0 auto', fontSize: '0.75em' }}>
            <div style={{ padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.15)', borderRadius: '10px' }}>
              <h4 style={{ color: '#3498db', marginBottom: '12px' }}>🔧 Foundational (1-5)</h4>
              <p style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                Tokenization, Lowercasing, Unicode/Whitespace/Punctuation Normalization
              </p>
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Use for: All projects</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.15)', borderRadius: '10px' }}>
              <h4 style={{ color: '#2ecc71', marginBottom: '12px' }}>🌱 Linguistic (6-10)</h4>
              <p style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                Stopwords, Stemming, Lemmatization, POS Tagging
              </p>
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Use for: Traditional ML/IR</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(243, 156, 18, 0.15)', borderRadius: '10px' }}>
              <h4 style={{ color: '#f39c12', marginBottom: '12px' }}>🔨 Feature Eng (11-12)</h4>
              <p style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                N-grams, Phrase Detection
              </p>
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Use for: Text classification</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(155, 89, 182, 0.15)', borderRadius: '10px' }}>
              <h4 style={{ color: '#9b59b6', marginBottom: '12px' }}>✨ Correction (13-15)</h4>
              <p style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                Spell, OCR, Contraction fixes
              </p>
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Use for: Noisy text</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(230, 126, 34, 0.15)', borderRadius: '10px' }}>
              <h4 style={{ color: '#e67e22', marginBottom: '12px' }}>🧹 Cleaning (16-20)</h4>
              <p style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                Number/Character handling, Boilerplate removal, Deduplication, Segmentation
              </p>
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Use for: Corpus building</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.15)', borderRadius: '10px' }}>
              <h4 style={{ color: '#3498db', marginBottom: '12px' }}>🌍 Multilingual (21)</h4>
              <p style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                Language Detection & Filtering
              </p>
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Use for: Mixed languages</p>
            </div>
          </div>
          <div style={{ marginTop: '40px', padding: '25px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '10px', maxWidth: '900px', margin: '40px auto 0' }}>
            <p style={{ fontSize: '1.1em', lineHeight: '1.8' }}>
              <strong>🎯 Key Principle:</strong> Preprocessing is not a checklist. Choose techniques based on your task, data characteristics, and target metrics. Start minimal, measure impact, and add complexity only when it helps.
            </p>
          </div>
        </div>
      ),
      backgroundColor: '#2C3E50',
      notes: 'Summary: 21 techniques in 6 groups - choose based on task, start minimal, measure impact'
        }
      ]
    }
  ]
};

