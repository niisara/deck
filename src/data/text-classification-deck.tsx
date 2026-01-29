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
          center: true,
          title: '11 Text Classification Approaches',
          content: (
            <div style={{ textAlign: 'left', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#61dafb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SvgIcon iconName="duo-tags" sizeName="2xl" style={{ marginRight: '1rem' }} darkModeInvert={true} />
                TEXT CLASSIFICATION
              </div>
              <div style={{ fontSize: '2rem', color: '#e5c07b', marginBottom: '2rem' }}>
                A Comprehensive Cheat Sheet: From Rules to LLMs
              </div>
              <p><strong>Prepared by:</strong> Nisar A</p>
              <p><strong>Date:</strong> November 7, 2025</p>
              <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
            </div>
          ),
          notes: ''
        },
        {
          id: 2,
          title: 'Table of Contents — 11 Approaches',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem 2rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ color: '#e06c75', marginBottom: '1rem', fontSize: '1.5rem' }}>
                    <SvgIcon iconName="duo-brackets-square" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Rule-Based & Traditional</strong>
                  </div>
                  <div style={{ marginLeft: '1.5rem', lineHeight: '1.8', fontSize: '1rem' }}>
                    <div><strong>1)</strong> Rule-Based Classification</div>
                    <div><strong>2)</strong> Keyword Matching</div>
                    <div><strong>3)</strong> Bag-of-Words + Logistic Regression</div>
                    <div><strong>4)</strong> TF-IDF + SVM</div>
                    <div><strong>5)</strong> Naive Bayes Classifier</div>
                    <div><strong>6)</strong> Random Forest Text Classifier</div>
                  </div>
                </div>

                <div>
                  <div style={{ color: '#c678dd', marginBottom: '1rem', fontSize: '1.5rem' }}>
                    <SvgIcon iconName="duo-brain-circuit" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Neural Networks & LLMs</strong>
                  </div>
                  <div style={{ marginLeft: '1.5rem', lineHeight: '1.8', fontSize: '1rem' }}>
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
          notes: ''
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
          icon: { name: 'duo-brackets-square' },
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e06c75' }}>
                <SvgIcon iconName="duo-brackets-square" sizeName="xl" style={{ marginRight: '0.8rem', marginBottom: '27px' }} darkModeInvert={true} />
                <strong style={{ fontSize: '1.2rem' }}>Model Type: Deterministic rule engine (regex, patterns, domain-specific logic)</strong>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{
                    color: '#d19a66', marginBottom: '0.5rem',

                  }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Training Data Needed</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    None (knowledge engineering + test set)
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    Compliance filters, routing, deterministic policies, low-volume scenarios
                  </div>
                </div>
              </div>

              <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
                <div style={{ color: '#e5c07b', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  <strong>Notes</strong>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1rem', marginBottom: 0 }}>
                  <li>Version rules in code</li>
                  <li>Add unit tests</li>
                  <li>Monitor coverage and conflicts</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#2d4a6f',
          notes: ''
        },
        {
          id: 4,
          title: 'Strengths and Limitations',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Strengths:</strong>
                  </p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Fully interpretable</li>
                  <li>Instant deployment</li>
                  <li>No labeling cost</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Brittle to language variation</li>
                  <li>High maintenance</li>
                  <li>Poor scalability</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#2d4a6f',
          notes: ''
        }
      ]
    },
    {
      id: 'keyword-matching',
      title: '2. Keyword Matching',
      slides: [
        {
          id: 5,
          title: '2. Keyword Matching',
          icon: { name: 'duo-magnifying-glass' },
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e06c75' }}>
                <SvgIcon iconName="duo-magnifying-glass" sizeName="xl" style={{ marginRight: '0.8rem', marginBottom: '27px' }} darkModeInvert={true} />
                <strong style={{ fontSize: '1.2rem' }}>Model Type: Heuristic scoring on keyword/phrase presence (with synonyms/stemming)</strong>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Training Data Needed</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    None to minimal (curate keyword lists); validation set recommended
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    Simple intent tags, FAQs, alerts where key terms are decisive
                  </div>
                </div>
              </div>

              <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
                <div style={{ color: '#e5c07b', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  <strong>Notes</strong>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1rem', marginBottom: 0 }}>
                  <li>Use stemming/lemmatization</li>
                  <li>Expand with synonyms</li>
                  <li>Weight phrases &gt; single words</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#4f0022',
          notes: ''
        },
        {
          id: 6,
          title: 'Strengths and Limitations',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Strengths:</strong>
                  </p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Fast</li>
                  <li>Easy to implement</li>
                  <li>Transparent logic</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Misses paraphrases</li>
                  <li>Sensitive to noise</li>
                  <li>Limited context understanding</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#4f0022',
          notes: ''
        }
      ]
    },
    {
      id: 'bag-of-words-lr',
      title: '3. Bag-of-Words + Logistic Regression',
      slides: [
        {
          id: 7,
          title: '3. Bag-of-Words + Logistic Regression',
          icon: { name: 'duo-chart-line' },
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e06c75' }}>
                <SvgIcon iconName="duo-chart-line" sizeName="xl" style={{ marginRight: '0.8rem', marginBottom: '27px' }} darkModeInvert={true} />
                <strong style={{ fontSize: '1.2rem' }}>Model Type: Linear classifier on sparse counts/ngrams</strong>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Training Data Needed</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    Small–medium labeled set (≥500–5k samples/class)
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    Topic tagging, spam detection, short texts
                  </div>
                </div>
              </div>

              <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
                <div style={{ color: '#e5c07b', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  <strong>Notes</strong>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1rem', marginBottom: 0 }}>
                  <li>Use n-grams (1–2/3)</li>
                  <li>Regularization (L2)</li>
                  <li>Class weighting</li>
                  <li>Stopword handling</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#618331',
          notes: ''
        },
        {
          id: 8,
          title: 'Strengths and Limitations',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Strengths:</strong>
                  </p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Strong baseline</li>
                  <li>Fast to train/infer</li>
                  <li>Interpretable coefficients</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Ignores word order/long context</li>
                  <li>Vocabulary drift</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#618331',
          notes: ''
        }
      ]
    },
    {
      id: 'tfidf-svm',
      title: '4. TF-IDF + SVM',
      slides: [
        {
          id: 9,
          title: '4. TF-IDF + SVM',
          icon: { name: 'duo-shield-check' },
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e06c75' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="xl" style={{ marginRight: '0.8rem', marginBottom: '27px' }} darkModeInvert={true} />
                <strong style={{ fontSize: '1.2rem' }}>Model Type: Linear SVM (e.g., LinearSVC) on TF-IDF features</strong>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Training Data Needed</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    Small–medium labeled set, ≥1k–10k total
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    High-dimensional sparse text; robust baseline across domains
                  </div>
                </div>
              </div>

              <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
                <div style={{ color: '#e5c07b', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  <strong>Notes</strong>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1rem', marginBottom: 0 }}>
                  <li>Prefer LinearSVC</li>
                  <li>Apply Platt/Isotonic calibration if probabilities needed</li>
                  <li>Tune C parameter</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#483183',
          notes: ''
        },
        {
          id: 10,
          title: 'Strengths and Limitations',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Strengths:</strong>
                  </p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Often top traditional performer</li>
                  <li>Margin-based</li>
                  <li>Handles sparsity well</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Probabilities need calibration</li>
                  <li>Slower on huge corpora vs LR</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#483183',
          notes: ''
        }
      ]
    },
    {
      id: 'naive-bayes',
      title: '5. Naive Bayes Classifier',
      slides: [
        {
          id: 11,
          title: '5. Naive Bayes Classifier',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e06c75' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="xl" style={{ marginRight: '0.8rem', marginBottom: '27px' }} darkModeInvert={true} />
                <strong style={{ fontSize: '1.2rem' }}>Model Type: Multinomial/Bernoulli NB on counts or TF-IDF</strong>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Training Data Needed</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    Small labeled set (≥200–1k samples/class)
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    Short texts, noisy data, low-resource setups
                  </div>
                </div>
              </div>

              <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
                <div style={{ color: '#e5c07b', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  <strong>Notes</strong>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1rem', marginBottom: 0 }}>
                  <li>Additive smoothing (alpha)</li>
                  <li>Try NB-SVM hybrid for improved accuracy</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#834b31',
          notes: ''
        },
        {
          id: 12,
          title: 'Strengths and Limitations',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Strengths:</strong>
                  </p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Extremely fast</li>
                  <li>Strong with word frequency signals</li>
                  <li>Robust with little data</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Independence assumption</li>
                  <li>Weaker on long, nuanced texts</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#834b31',
          notes: ''
        }
      ]
    },
    {
      id: 'random-forest',
      title: '6. Random Forest Text Classifier',
      slides: [
        {
          id: 13,
          title: '6. Random Forest Text Classifier',
          icon: { name: 'duo-filter' },
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#98c379' }}>
                <SvgIcon iconName="duo-filter" sizeName="xl" style={{ marginRight: '0.8rem', marginBottom: '27px' }} darkModeInvert={true} />
                <strong style={{ fontSize: '1.2rem' }}>Model Type: Ensemble of decision trees on sparse or reduced features</strong>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Training Data Needed</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    Medium labeled set, ≥5k–20k total, curated features help
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    When using engineered features (e.g., readability, metadata) with text
                  </div>
                </div>
              </div>

              <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
                <div style={{ color: '#e5c07b', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  <strong>Notes</strong>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1rem', marginBottom: 0 }}>
                  <li>Consider dimensionality reduction (hashing/chi2/PCA on dense embeddings)</li>
                  <li>Compare with gradient boosting</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#833163',
          notes: ''
        },
        {
          id: 14,
          title: 'Strengths and Limitations',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Strengths:</strong>
                  </p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Nonlinear boundaries</li>
                  <li>Robust to outliers</li>
                  <li>Feature importance</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Less effective on very high-dimensional sparse BOW</li>
                  <li>Memory-heavy</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#833163',
          notes: ''
        }
      ]
    },
    {
      id: 'cnn',
      title: '7. CNN for Text Classification',
      slides: [
        {
          id: 15,
          title: '7. CNN for Text Classification',
          icon: { name: 'duo-brain-circuit' },
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#c678dd' }}>
                <SvgIcon iconName="duo-brain-circuit" sizeName="xl" style={{ marginRight: '0.8rem', marginBottom: '27px' }} darkModeInvert={true} />
                <strong style={{ fontSize: '1.2rem' }}>Model Type: 1D Convolution over token/char embeddings + pooling</strong>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Training Data Needed</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    Medium labeled set, ≥10k+ samples or use pretrained embeddings
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    Capturing local n-gram patterns (sentiment, toxic spans)
                  </div>
                </div>
              </div>

              <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
                <div style={{ color: '#e5c07b', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  <strong>Notes</strong>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1rem', marginBottom: 0 }}>
                  <li>Use pretrained embeddings (GloVe/fastText) or subword</li>
                  <li>Kernel sizes 3–5</li>
                  <li>Global max-pooling</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#468331',
          notes: ''
        },
        {
          id: 16,
          title: 'Strengths and Limitations',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Strengths:</strong>
                  </p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Fast inference</li>
                  <li>Position-invariant phrase detection</li>
                  <li>Compact</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Limited long-range dependency modeling</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#468331',
          notes: ''
        }
      ]
    },
    {
      id: 'rnn-lstm',
      title: '8. RNN/LSTM Text Classifier',
      slides: [
        {
          id: 17,
          title: '8. RNN/LSTM Text Classifier',
          icon: { name: 'duo-circle-nodes' },
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#c678dd' }}>
                <SvgIcon iconName="duo-circle-nodes" sizeName="xl" style={{ marginRight: '0.8rem', marginBottom: '27px' }} darkModeInvert={true} />
                <strong style={{ fontSize: '1.2rem' }}>Model Type: Recurrent network (LSTM/GRU) over token sequences</strong>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Training Data Needed</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    Medium–large labeled set (≥10k–100k)
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    Sequential signals, longer documents, order-dependent cues
                  </div>
                </div>
              </div>

              <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
                <div style={{ color: '#e5c07b', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  <strong>Notes</strong>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1rem', marginBottom: 0 }}>
                  <li>Use bidirectional layers, dropout, gradient clipping</li>
                  <li>Mask padding</li>
                  <li>Consider pretrained embeddings</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#835631',
          notes: ''
        },
        {
          id: 18,
          title: 'Strengths and Limitations',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Strengths:</strong>
                  </p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Models sequence and context</li>
                  <li>Good for medium-length texts</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Slower training</li>
                  <li>Struggles with very long context vs Transformers</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#835631',
          notes: ''
        }
      ]
    },
    {
      id: 'bilstm-attention',
      title: '9. BiLSTM with Attention',
      slides: [
        {
          id: 19,
          title: '9. BiLSTM with Attention',
          icon: { name: 'duo-eye' },
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#c678dd' }}>
                <SvgIcon iconName="duo-eye" sizeName="xl" style={{ marginRight: '0.8rem', marginBottom: '27px' }} darkModeInvert={true} />
                <strong style={{ fontSize: '1.2rem' }}>Model Type: BiLSTM encoder + attention mechanism</strong>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Training Data Needed</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    Medium labeled set (≥10k–50k or transfer learning)
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    Tasks needing interpretability of key tokens/phrases
                  </div>
                </div>
              </div>

              <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
                <div style={{ color: '#e5c07b', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  <strong>Notes</strong>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1rem', marginBottom: 0 }}>
                  <li>Use additive/scaled dot attention</li>
                  <li>Visualize attention for insights</li>
                  <li>Regularize to avoid overfitting</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#318083',
          notes: ''
        },
        {
          id: 20,
          title: 'Strengths and Limitations',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Strengths:</strong>
                  </p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Highlights important spans</li>
                  <li>Better long-range aggregation than plain RNN</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Heavier than vanilla LSTM</li>
                  <li>May still lag Transformers</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#318083',
          notes: ''
        }
      ]
    },
    {
      id: 'bert',
      title: '10. BERT Fine-Tuned Classifier',
      slides: [
        {
          id: 21,
          title: '10. BERT Fine-Tuned Classifier',
          icon: { name: 'duo-brain' },
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#61dafb' }}>
                <SvgIcon iconName="duo-brain" sizeName="xl" style={{ marginRight: '0.8rem', marginBottom: '27px' }} darkModeInvert={true} />
                <strong style={{ fontSize: '1.2rem' }}>Model Type: Pretrained Transformer (e.g., BERT/RoBERTa/DeBERTa) + classification head</strong>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Training Data Needed</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    Small–medium labeled set (≥1k–20k); domain-specific pretraining helps
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    Most text classification tasks needing high accuracy
                  </div>
                </div>
              </div>

              <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
                <div style={{ color: '#e5c07b', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  <strong>Notes</strong>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1rem', marginBottom: 0 }}>
                  <li>Start with base models</li>
                  <li>Max seq length 128–256</li>
                  <li>lr ~2e-5–5e-5</li>
                  <li>Use mixed precision</li>
                  <li>Consider distillation for deployment</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#7d3183',
          notes: ''
        },
        {
          id: 22,
          title: 'Strengths and Limitations',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Strengths:</strong>
                  </p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>State-of-the-art</li>
                  <li>Strong context understanding</li>
                  <li>Transfer learning</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Heavier compute</li>
                  <li>Latency/cost at scale</li>
                  <li>Sensitive to prompt/domain shift without tuning</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#7d3183',
          notes: ''
        }
      ]
    },
    {
      id: 'llm-zero-shot',
      title: '11. Instruction / Zero-Shot LLM Classification',
      slides: [
        {
          id: 23,
          title: '11. Instruction / Zero-Shot LLM Classification',
          icon: { name: 'duo-wand-magic-sparkles' },
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.5' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', color: '#e5c07b' }}>
                <SvgIcon iconName="duo-wand-magic-sparkles" sizeName="xl" style={{ marginRight: '0.8rem', marginBottom: '27px' }} darkModeInvert={true} />
                <strong style={{ fontSize: '1.2rem' }}>Model Type: Prompted LLM (zero-/few-shot) with or without function calling</strong>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Training Data Needed</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    None to minimal (prompt engineering, optional few-shot examples)
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1rem' }}>
                    Rapid prototyping, long-tail labels, low-data or changing taxonomies
                  </div>
                </div>
              </div>

              <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
                <div style={{ color: '#e5c07b', marginBottom: '0.5rem', fontSize: '1.2rem' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  <strong>Notes</strong>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1rem', marginBottom: 0 }}>
                  <li>Use structured prompts and label definitions</li>
                  <li>Temperature ≈0–0.2</li>
                  <li>Add few-shot for reliability</li>
                  <li>Log prompts/outputs</li>
                  <li>Consider lightweight fine-tuning if stable volume</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#338331',
          notes: ''
        },
        {
          id: 24,
          title: 'Strengths and Limitations',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Strengths:</strong>
                  </p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>No training</li>
                  <li>Adaptable</li>
                  <li>Handles varied phrasing</li>
                  <li>Can explain decisions</li>
                </ul>
              </div>
              <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                <div style={{ marginBottom: '0.5rem' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d', marginBottom: '0.25rem' }} />
                    <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '1.25rem', marginBottom: 0 }}>
                  <li>Variability</li>
                  <li>Latency/cost</li>
                  <li>Privacy/compliance considerations</li>
                  <li>Label bias</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#338331',
          notes: ''
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary & Comparison',
      slides: [
        {
          id: 25,
          title: 'Summary & Comparison',
          content: (
            <div style={{ fontSize: '0.75rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ color: '#61dafb', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  <strong>Key Takeaways</strong>
                </div>
                <ul style={{ marginLeft: '1.5rem', fontSize: '1rem' }}>
                  <li><strong>Start simple:</strong> Rule-based and traditional ML (1-6) for quick wins with limited data</li>
                  <li><strong>Scale up:</strong> Neural networks (7-9) for better performance with more data</li>
                  <li><strong>Go state-of-the-art:</strong> Transformers (10-11) for maximum accuracy and flexibility</li>
                  <li><strong>Consider tradeoffs:</strong> Data needs, interpretability, latency, cost, and maintenance</li>
                </ul>
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <div style={{ color: '#98c379', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                  <SvgIcon iconName="duo-compass" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  <strong>Quick Selector</strong>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '1rem' }}>
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
                <div style={{ color: '#c678dd', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                  <SvgIcon iconName="duo-scale-balanced" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  <strong>Data Requirements Spectrum</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '8px', fontSize: '1rem' }}>
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
            </div>
          ),
          backgroundColor: '#316683',
          notes: ''
        },
        {
          id: 26,
          title: 'Strengths and Limitations',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ background: 'rgba(97, 218, 251, 0.1)', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid #61dafb' }}>
              <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-rocket" sizeName="lg" style={iconStyle} darkModeInvert={true} />
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
          ),
          backgroundColor: '#316683',
          notes: ''
        }
      ]
    }
  ]
};

