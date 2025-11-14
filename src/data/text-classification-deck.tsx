import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const textClassificationDeck: Deck = {
  id: 'text-classification-approaches',
  name: '11 Text Classification Approaches',
  description: 'A comprehensive guide: From Rules to LLMs',
  category: 'NLP',
  theme: 'black',
  slides: [],
  slideGroups: [
    {
      id: 'introduction',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          title: '11 Text Classification Approaches',
          content: (
            <div style={{ textAlign: 'left' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#61dafb' }}>
            <SvgIcon iconName="duo-tags" sizeName="2xl" style={{ marginRight: '1rem' }} />
            TEXT CLASSIFICATION
          </div>
          <div style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#98c379' }}>
            11 Text Classification Approaches
          </div>
          <div style={{ fontSize: '1.2rem', color: '#e5c07b', marginBottom: '2rem' }}>
            A Comprehensive Cheat Sheet: From Rules to LLMs
          </div>
          <div style={{ fontSize: '1rem', color: '#888' }}>
            <SvgIcon iconName="duo-calendar" sizeName="lg" style={iconStyle} />
            November 7, 2025
          </div>
        </div>
      ),
      notes: 'Introduction to 11 text classification approaches ranging from traditional rule-based systems to modern LLMs'
    },
    {
      id: 2,
      title: 'Table of Contents — 11 Approaches',
      icon: { name: 'duo-list-check', size: '5x' },
      content: (
        <div style={{ fontSize: '0.9rem', lineHeight: '1.6', textAlign: 'left' }}>
          <div style={{ marginBottom: '2rem', textAlign: 'left', color: '#61dafb' }}>
            <SvgIcon iconName="duo-list-ol" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>11 Text Classification Approaches</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem 2rem', marginBottom: '1.5rem' }}>
            <div>
              <div style={{ color: '#e06c75', marginBottom: '1rem' }}>
                <SvgIcon iconName="duo-brackets-square" sizeName="lg" style={iconStyle} />
                <strong>Rule-Based & Traditional</strong>
              </div>
              <div style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                <div><strong>1)</strong> Rule-Based Classification</div>
                <div><strong>2)</strong> Keyword Matching</div>
                <div><strong>3)</strong> Bag-of-Words + Logistic Regression</div>
                <div><strong>4)</strong> TF-IDF + SVM</div>
                <div><strong>5)</strong> Naive Bayes Classifier</div>
                <div><strong>6)</strong> Random Forest Text Classifier</div>
              </div>
            </div>
            
            <div>
              <div style={{ color: '#c678dd', marginBottom: '1rem' }}>
                <SvgIcon iconName="duo-brain-circuit" sizeName="lg" style={iconStyle} />
                <strong>Neural Networks & LLMs</strong>
              </div>
              <div style={{ marginLeft: '1.5rem', lineHeight: '1.8' }}>
                <div><strong>7)</strong> CNN for Text Classification</div>
                <div><strong>8)</strong> RNN / LSTM Text Classifier</div>
                <div><strong>9)</strong> BiLSTM with Attention</div>
                <div><strong>10)</strong> BERT Fine-Tuned Classifier</div>
                <div><strong>11)</strong> Instruction / Zero-Shot LLM Classification</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '8px', borderLeft: '4px solid #61dafb' }}>
            <strong>Key insight:</strong> Progress from simple, interpretable rules to powerful, context-aware models. 
            Choose based on data availability, interpretability needs, and performance requirements.
          </div>
        </div>
      ),
      notes: 'Overview of all 11 approaches organized by category: traditional rule-based methods vs neural network approaches'
        }
      ]
    },
    {
      id: 'rule-based',
      title: '1. Rule-Based Classification',
      slides: [
        {
          id: 3,
          title: '1. Rule-Based Classification',
          icon: { name: 'duo-brackets-square', size: '5x' },
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e06c75' }}>
            <SvgIcon iconName="duo-brackets-square" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Deterministic rule engine (regex, patterns, domain-specific logic)</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-graduation-cap" sizeName="lg" style={iconStyle} />
                <strong>Training Data Needed</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                None (knowledge engineering + test set)
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Best Use Case</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Compliance filters, routing, deterministic policies, low-volume scenarios
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Fully interpretable</li>
                <li>Instant deployment</li>
                <li>No labeling cost</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Brittle to language variation</li>
                <li>High maintenance</li>
                <li>Poor scalability</li>
              </ul>
            </div>
          </div>

          <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
              <li>Version rules in code</li>
              <li>Add unit tests</li>
              <li>Monitor coverage and conflicts</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'Rule-Based Classification: No training needed, fully interpretable, but brittle and hard to maintain at scale'
        }
      ]
    },
    {
      id: 'keyword-matching',
      title: '2. Keyword Matching',
      slides: [
        {
          id: 4,
          title: '2. Keyword Matching',
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e06c75' }}>
            <SvgIcon iconName="duo-magnifying-glass" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Heuristic scoring on keyword/phrase presence (with synonyms/stemming)</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-graduation-cap" sizeName="lg" style={iconStyle} />
                <strong>Training Data Needed</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                None to minimal (curate keyword lists); validation set recommended
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Best Use Case</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Simple intent tags, FAQs, alerts where key terms are decisive
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Fast</li>
                <li>Easy to implement</li>
                <li>Transparent logic</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Misses paraphrases</li>
                <li>Sensitive to noise</li>
                <li>Limited context understanding</li>
              </ul>
            </div>
          </div>

          <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
              <li>Use stemming/lemmatization</li>
              <li>Expand with synonyms</li>
              <li>Weight phrases &gt; single words</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'Keyword Matching: Fast and transparent, but misses paraphrases and context'
        }
      ]
    },
    {
      id: 'bag-of-words-lr',
      title: '3. Bag-of-Words + Logistic Regression',
      slides: [
        {
          id: 5,
          title: '3. Bag-of-Words + Logistic Regression',
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e06c75' }}>
            <SvgIcon iconName="duo-chart-line" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Linear classifier on sparse counts/ngrams</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-graduation-cap" sizeName="lg" style={iconStyle} />
                <strong>Training Data Needed</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Small–medium labeled set (≥500–5k samples/class)
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Best Use Case</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Topic tagging, spam detection, short texts
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Strong baseline</li>
                <li>Fast to train/infer</li>
                <li>Interpretable coefficients</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Ignores word order/long context</li>
                <li>Vocabulary drift</li>
              </ul>
            </div>
          </div>

          <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
              <li>Use n-grams (1–2/3)</li>
              <li>Regularization (L2)</li>
              <li>Class weighting</li>
              <li>Stopword handling</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'Bag-of-Words + Logistic Regression: Strong baseline, fast and interpretable, but ignores word order'
        }
      ]
    },
    {
      id: 'tfidf-svm',
      title: '4. TF-IDF + SVM',
      slides: [
        {
          id: 6,
          title: '4. TF-IDF + SVM',
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e06c75' }}>
            <SvgIcon iconName="duo-shield-check" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Linear SVM (e.g., LinearSVC) on TF-IDF features</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-graduation-cap" sizeName="lg" style={iconStyle} />
                <strong>Training Data Needed</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Small–medium labeled set, ≥1k–10k total
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Best Use Case</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                High-dimensional sparse text; robust baseline across domains
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Often top traditional performer</li>
                <li>Margin-based</li>
                <li>Handles sparsity well</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Probabilities need calibration</li>
                <li>Slower on huge corpora vs LR</li>
              </ul>
            </div>
          </div>

          <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
              <li>Prefer LinearSVC</li>
              <li>Apply Platt/Isotonic calibration if probabilities needed</li>
              <li>Tune C parameter</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'TF-IDF + SVM: Top traditional performer, handles sparsity well, robust across domains'
        }
      ]
    },
    {
      id: 'naive-bayes',
      title: '5. Naive Bayes Classifier',
      slides: [
        {
          id: 7,
          title: '5. Naive Bayes Classifier',
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e06c75' }}>
            <SvgIcon iconName="duo-gauge-high" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Multinomial/Bernoulli NB on counts or TF-IDF</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-graduation-cap" sizeName="lg" style={iconStyle} />
                <strong>Training Data Needed</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Small labeled set (≥200–1k samples/class)
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Best Use Case</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Short texts, noisy data, low-resource setups
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Extremely fast</li>
                <li>Strong with word frequency signals</li>
                <li>Robust with little data</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Independence assumption</li>
                <li>Weaker on long, nuanced texts</li>
              </ul>
            </div>
          </div>

          <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
              <li>Additive smoothing (alpha)</li>
              <li>Try NB-SVM hybrid for improved accuracy</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'Naive Bayes: Extremely fast, works well with limited data, but makes independence assumption'
        }
      ]
    },
    {
      id: 'random-forest',
      title: '6. Random Forest Text Classifier',
      slides: [
        {
          id: 8,
          title: '6. Random Forest Text Classifier',
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#98c379' }}>
            <SvgIcon iconName="duo-filter" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Ensemble of decision trees on sparse or reduced features</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-graduation-cap" sizeName="lg" style={iconStyle} />
                <strong>Training Data Needed</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Medium labeled set, ≥5k–20k total, curated features help
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Best Use Case</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                When using engineered features (e.g., readability, metadata) with text
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Nonlinear boundaries</li>
                <li>Robust to outliers</li>
                <li>Feature importance</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Less effective on very high-dimensional sparse BOW</li>
                <li>Memory-heavy</li>
              </ul>
            </div>
          </div>

          <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
              <li>Consider dimensionality reduction (hashing/chi2/PCA on dense embeddings)</li>
              <li>Compare with gradient boosting</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'Random Forest: Great for engineered features, provides feature importance, but memory-heavy'
        }
      ]
    },
    {
      id: 'cnn',
      title: '7. CNN for Text Classification',
      slides: [
        {
          id: 9,
          title: '7. CNN for Text Classification',
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#c678dd' }}>
            <SvgIcon iconName="duo-brain-circuit" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>1D Convolution over token/char embeddings + pooling</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-graduation-cap" sizeName="lg" style={iconStyle} />
                <strong>Training Data Needed</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Medium labeled set, ≥10k+ samples or use pretrained embeddings
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Best Use Case</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Capturing local n-gram patterns (sentiment, toxic spans)
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Fast inference</li>
                <li>Position-invariant phrase detection</li>
                <li>Compact</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Limited long-range dependency modeling</li>
              </ul>
            </div>
          </div>

          <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
              <li>Use pretrained embeddings (GloVe/fastText) or subword</li>
              <li>Kernel sizes 3–5</li>
              <li>Global max-pooling</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'CNN for Text: Fast inference, good at capturing local patterns, but struggles with long-range dependencies'
        }
      ]
    },
    {
      id: 'rnn-lstm',
      title: '8. RNN/LSTM Text Classifier',
      slides: [
        {
          id: 10,
          title: '8. RNN/LSTM Text Classifier',
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#c678dd' }}>
            <SvgIcon iconName="duo-circle-nodes" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Recurrent network (LSTM/GRU) over token sequences</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-graduation-cap" sizeName="lg" style={iconStyle} />
                <strong>Training Data Needed</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Medium–large labeled set (≥10k–100k)
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Best Use Case</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Sequential signals, longer documents, order-dependent cues
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Models sequence and context</li>
                <li>Good for medium-length texts</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Slower training</li>
                <li>Struggles with very long context vs Transformers</li>
              </ul>
            </div>
          </div>

          <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
              <li>Use bidirectional layers, dropout, gradient clipping</li>
              <li>Mask padding</li>
              <li>Consider pretrained embeddings</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'RNN/LSTM: Models sequence and context well, good for medium-length texts, but slower than CNNs'
        }
      ]
    },
    {
      id: 'bilstm-attention',
      title: '9. BiLSTM with Attention',
      slides: [
        {
          id: 11,
          title: '9. BiLSTM with Attention',
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#c678dd' }}>
            <SvgIcon iconName="duo-eye" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>BiLSTM encoder + attention mechanism</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-graduation-cap" sizeName="lg" style={iconStyle} />
                <strong>Training Data Needed</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Medium labeled set (≥10k–50k or transfer learning)
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Best Use Case</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Tasks needing interpretability of key tokens/phrases
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Highlights important spans</li>
                <li>Better long-range aggregation than plain RNN</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Heavier than vanilla LSTM</li>
                <li>May still lag Transformers</li>
              </ul>
            </div>
          </div>

          <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
              <li>Use additive/scaled dot attention</li>
              <li>Visualize attention for insights</li>
              <li>Regularize to avoid overfitting</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'BiLSTM with Attention: Highlights important tokens/phrases, better interpretability, but heavier than plain LSTM'
        }
      ]
    },
    {
      id: 'bert',
      title: '10. BERT Fine-Tuned Classifier',
      slides: [
        {
          id: 12,
          title: '10. BERT Fine-Tuned Classifier',
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#61dafb' }}>
            <SvgIcon iconName="duo-brain" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Pretrained Transformer (e.g., BERT/RoBERTa/DeBERTa) + classification head</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-graduation-cap" sizeName="lg" style={iconStyle} />
                <strong>Training Data Needed</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Small–medium labeled set (≥1k–20k); domain-specific pretraining helps
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Best Use Case</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Most text classification tasks needing high accuracy
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>State-of-the-art</li>
                <li>Strong context understanding</li>
                <li>Transfer learning</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Heavier compute</li>
                <li>Latency/cost at scale</li>
                <li>Sensitive to prompt/domain shift without tuning</li>
              </ul>
            </div>
          </div>

          <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
              <li>Start with base models</li>
              <li>Max seq length 128–256</li>
              <li>lr ~2e-5–5e-5</li>
              <li>Use mixed precision</li>
              <li>Consider distillation for deployment</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'BERT Fine-Tuned: State-of-the-art accuracy with strong context understanding, but heavier compute requirements'
        }
      ]
    },
    {
      id: 'llm-zero-shot',
      title: '11. Instruction / Zero-Shot LLM Classification',
      slides: [
        {
          id: 13,
          title: '11. Instruction / Zero-Shot LLM Classification',
          content: (
        <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e5c07b' }}>
            <SvgIcon iconName="duo-wand-magic-sparkles" sizeName="xl" style={{ marginRight: '0.8rem' }} />
            <strong style={{ fontSize: '1.2rem' }}>Prompted LLM (zero-/few-shot) with or without function calling</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div>
              <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-graduation-cap" sizeName="lg" style={iconStyle} />
                <strong>Training Data Needed</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                None to minimal (prompt engineering, optional few-shot examples)
              </div>
            </div>
            <div>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Best Use Case</strong>
              </div>
              <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '0.9rem' }}>
                Rapid prototyping, long-tail labels, low-data or changing taxonomies
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>No training</li>
                <li>Adaptable</li>
                <li>Handles varied phrasing</li>
                <li>Can explain decisions</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
                <li>Variability</li>
                <li>Latency/cost</li>
                <li>Privacy/compliance considerations</li>
                <li>Label bias</li>
              </ul>
            </div>
          </div>

          <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
            <div style={{ color: '#e5c07b', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
              <li>Use structured prompts and label definitions</li>
              <li>Temperature ≈0–0.2</li>
              <li>Add few-shot for reliability</li>
              <li>Log prompts/outputs</li>
              <li>Consider lightweight fine-tuning if stable volume</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'LLM Zero-Shot: No training needed, highly adaptable, but has variability and cost considerations'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary & Comparison',
      slides: [
        {
          id: 14,
          title: 'Summary & Comparison',
          content: (
        <div style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#61dafb', fontSize: '1rem', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Key Takeaways</strong>
            </div>
            <ul style={{ marginLeft: '1.5rem', fontSize: '0.85rem' }}>
              <li><strong>Start simple:</strong> Rule-based and traditional ML (1-6) for quick wins with limited data</li>
              <li><strong>Scale up:</strong> Neural networks (7-9) for better performance with more data</li>
              <li><strong>Go state-of-the-art:</strong> Transformers (10-11) for maximum accuracy and flexibility</li>
              <li><strong>Consider tradeoffs:</strong> Data needs, interpretability, latency, cost, and maintenance</li>
            </ul>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#98c379', fontSize: '1rem', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-compass" sizeName="lg" style={iconStyle} />
              <strong>Quick Selector</strong>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.7rem', borderRadius: '6px' }}>
                <strong style={{ color: '#e06c75' }}>Limited/No labeled data:</strong>
                <div style={{ marginTop: '0.3rem' }}>→ <strong>1, 2, 11</strong> (Rules, Keywords, Zero-shot LLM)</div>
              </div>
              <div style={{ background: 'rgba(209, 154, 102, 0.1)', padding: '0.7rem', borderRadius: '6px' }}>
                <strong style={{ color: '#d19a66' }}>Small dataset (500-5k):</strong>
                <div style={{ marginTop: '0.3rem' }}>→ <strong>3, 5</strong> (Bag-of-Words + LR, Naive Bayes)</div>
              </div>
              <div style={{ background: 'rgba(97, 218, 251, 0.1)', padding: '0.7rem', borderRadius: '6px' }}>
                <strong style={{ color: '#61dafb' }}>Medium dataset (5k-100k):</strong>
                <div style={{ marginTop: '0.3rem' }}>→ <strong>4, 6, 7, 8</strong> (SVM, RF, CNN, LSTM)</div>
              </div>
              <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.7rem', borderRadius: '6px' }}>
                <strong style={{ color: '#98c379' }}>Need max accuracy:</strong>
                <div style={{ marginTop: '0.3rem' }}>→ <strong>10</strong> (BERT fine-tuned)</div>
              </div>
              <div style={{ background: 'rgba(198, 120, 221, 0.1)', padding: '0.7rem', borderRadius: '6px' }}>
                <strong style={{ color: '#c678dd' }}>Need interpretability:</strong>
                <div style={{ marginTop: '0.3rem' }}>→ <strong>1, 2, 3, 9</strong> (Rules, Keywords, LR, BiLSTM+Attention)</div>
              </div>
              <div style={{ background: 'rgba(229, 192, 123, 0.1)', padding: '0.7rem', borderRadius: '6px' }}>
                <strong style={{ color: '#e5c07b' }}>Fast inference critical:</strong>
                <div style={{ marginTop: '0.3rem' }}>→ <strong>2, 3, 5, 7</strong> (Keywords, LR, NB, CNN)</div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ color: '#c678dd', fontSize: '1rem', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-scale-balanced" sizeName="lg" style={iconStyle} />
              <strong>Data Requirements Spectrum</strong>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '8px' }}>
              <div style={{ flex: 1, textAlign: 'center', borderRight: '2px solid rgba(198, 120, 221, 0.3)', padding: '0 0.5rem' }}>
                <div style={{ fontWeight: 'bold', color: '#e06c75', marginBottom: '0.3rem' }}>No Data</div>
                <div style={{ fontSize: '0.8rem' }}>1, 2, 11</div>
              </div>
              <div style={{ flex: 1, textAlign: 'center', borderRight: '2px solid rgba(198, 120, 221, 0.3)', padding: '0 0.5rem' }}>
                <div style={{ fontWeight: 'bold', color: '#d19a66', marginBottom: '0.3rem' }}>Small (100s-5k)</div>
                <div style={{ fontSize: '0.8rem' }}>3, 5</div>
              </div>
              <div style={{ flex: 1, textAlign: 'center', borderRight: '2px solid rgba(198, 120, 221, 0.3)', padding: '0 0.5rem' }}>
                <div style={{ fontWeight: 'bold', color: '#e5c07b', marginBottom: '0.3rem' }}>Medium (5k-100k)</div>
                <div style={{ fontSize: '0.8rem' }}>4, 6, 7, 8, 9</div>
              </div>
              <div style={{ flex: 1, textAlign: 'center', padding: '0 0.5rem' }}>
                <div style={{ fontWeight: 'bold', color: '#98c379', marginBottom: '0.3rem' }}>Small-Med (1k+)</div>
                <div style={{ fontSize: '0.8rem' }}>10</div>
              </div>
            </div>
          </div>

          <div style={{ background: 'rgba(97, 218, 251, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #61dafb' }}>
            <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-rocket" sizeName="lg" style={iconStyle} />
              <strong>Recommended Approach</strong>
            </div>
            <ol style={{ marginLeft: '1.2rem', fontSize: '0.85rem', marginBottom: 0 }}>
              <li>Start with simple baseline (keywords or bag-of-words)</li>
              <li>Collect labeled data and establish metrics</li>
              <li>Try traditional ML (SVM/NB) if data is limited</li>
              <li>Scale to neural networks (CNN/LSTM) with more data</li>
              <li>Fine-tune BERT for production if accuracy is critical</li>
              <li>Use LLMs for rapid prototyping or changing requirements</li>
            </ol>
          </div>
        </div>
      ),
      notes: 'Summary with key takeaways, quick selector guide, data requirements spectrum, and recommended approach'
        }
      ]
    }
  ]
};

