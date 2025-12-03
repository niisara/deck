import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const sentimentAnalysisDeck: Deck = {
  id: 'sentiment-analysis-deck',
  name: 'Sentiment Analysis Techniques',
  description: '15 Sentiment Analysis Techniques - From Rule-Based to Transformers',
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
          title: '15 Sentiment Analysis Techniques',
          content: (
            <div style={{ textAlign: 'left' }}>
          <h2 style={{ marginBottom: '30px' }}>From Rule-Based Scores to Transformers and Multimodal Analysis</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginTop: '50px' }}>
            <SvgIcon iconName="duo-face-smile" sizeName="3x" style={{ color: '#2ecc71' }} />
            <SvgIcon iconName="duo-face-meh" sizeName="3x" style={{ color: '#f39c12' }} />
            <SvgIcon iconName="duo-face-frown" sizeName="3x" style={{ color: '#e74c3c' }} />
          </div>
          <p style={{ marginTop: '50px', fontSize: '1.2em' }}>A Comprehensive Cheat Sheet for NLP Practitioners</p>
          <p style={{ marginTop: '20px', fontSize: '0.8em', opacity: 0.7 }}>Date: November 7, 2025</p>
        </div>
      ),
      backgroundColor: '#2C3E50',
      notes: 'Introduction to 15 comprehensive sentiment analysis techniques covering traditional to advanced methods'
        },
        {
          id: 2,
          title: 'Table of Contents',
          icon: { name: 'duo-list-check' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-book" sizeName="2x" darkModeInvert={true} />
                Traditional/Rule-based
              </h3>
              <ul style={{ fontSize: '0.9em' }}>
                <li>1. Lexicon-Based Sentiment Scoring</li>
                <li>2. Rule-Based Sentiment Classification</li>
              </ul>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                <SvgIcon iconName="duo-brackets-square" sizeName="2x" darkModeInvert={true} />
                Classical ML
              </h3>
              <ul style={{ fontSize: '0.9em' }}>
                <li>3. BoW + Logistic Regression</li>
                <li>4. TF-IDF + SVM</li>
                <li>5. Naive Bayes Sentiment Model</li>
              </ul>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                <SvgIcon iconName="duo-toolbox" sizeName="2x" darkModeInvert={true} />
                Modern NLP Tools
              </h3>
              <ul style={{ fontSize: '0.9em' }}>
                <li>6. VADER Sentiment Scoring</li>
                <li>7. TextBlob Polarity Scoring</li>
              </ul>
            </div>
            <div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-brain" sizeName="2x" darkModeInvert={true} />
                Deep Learning
              </h3>
              <ul style={{ fontSize: '0.9em' }}>
                <li>8. LSTM-Based Classification</li>
                <li>9. BiLSTM with Attention</li>
                <li>10. CNN for Sentiment Classification</li>
              </ul>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                <SvgIcon iconName="duo-leaf" sizeName="2x" darkModeInvert={true} />
                Transformer-based
              </h3>
              <ul style={{ fontSize: '0.9em' }}>
                <li>11. BERT Fine-Tuned for Sentiment</li>
                <li>12. RoBERTa/DistilBERT Models</li>
                <li>13. GPT/LLM Zero-Shot Classification</li>
              </ul>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="2x" darkModeInvert={true} />
                Advanced
              </h3>
              <ul style={{ fontSize: '0.9em' }}>
                <li>14. Aspect-Based Sentiment Analysis</li>
                <li>15. Multimodal Sentiment Analysis</li>
              </ul>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                <SvgIcon iconName="duo-plus-large" sizeName="2x" darkModeInvert={true} />
                Additional
              </h3>
              <ul style={{ fontSize: '0.9em' }}>
                <li>Comparison Matrix</li>
                <li>Recommendations & Best Practices</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#34495E',
      notes: '15 techniques organized by category from traditional to advanced'
        }
      ]
    },
    {
      id: 'technique-1',
      title: '1. Lexicon-Based Sentiment Scoring',
      slides: [
        {
          id: 3,
          title: '1. Lexicon-Based Sentiment Scoring',
          icon: { name: 'duo-book' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SvgIcon iconName="duo-book-open" sizeName="2x" style={{ color: '#00ffcd' }} />
              <h4>Model Type</h4>
            </div>
            <p style={{ color: '#b4fff0' }}>Dictionary/lexicon lookup with additive scoring (e.g., AFINN, SentiWordNet)</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '0.85em' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul style={{ color: '#b4fff0' }}>
                <li>Interpretable results with word-level contributions</li>
                <li>Fast implementation with minimal compute requirements</li>
                <li>No training data needed</li>
                <li>Multilingual lexicons available</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul style={{ color: '#b4fff0' }}>
                <li>Poor handling of context and negation</li>
                <li>Struggles with sarcasm and idioms</li>
                <li>Brittle to slang and domain-specific terminology</li>
                <li>Lower accuracy compared to ML approaches</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" darkModeInvert={true} />
                Data Requirement
              </h4>
              <p style={{ color: '#b4fff0' }}>No labels; optional domain lexicon curation</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <p style={{ color: '#b4fff0' }}>Low-resource, explainable baseline; predictable vocabulary domains</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ color: '#f39c12' }} />
                Notes
              </h4>
              <p style={{ color: '#b4fff0' }}>Consider enhancing with custom rules for negation and intensifiers. Domain-specific lexicons can significantly improve performance for specialized vocabularies.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#0e7762',
      notes: 'Lexicon-based: Uses dictionaries like AFINN, SentiWordNet for word-level scoring'
        }
      ]
    },
    {
      id: 'technique-2',
      title: '2. Rule-Based Sentiment Classification',
      slides: [
        {
          id: 4,
          title: '2. Rule-Based Sentiment Classification',
          icon: { name: 'duo-brackets-square' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SvgIcon iconName="duo-gears" sizeName="2x" style={{ color: '#edc1ff' }} />
              <h4>Model Type</h4>
            </div>
            <p style={{ color: '#eab9ff' }}>Handcrafted rules + patterns over tokens/syntax; often layered on lexicons</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '0.85em' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul style={{ color: '#eab9ff' }}>
                <li>Deterministic and fully auditable</li>
                <li>Predictable latency for production</li>
                <li>No training data needed</li>
                <li>Can incorporate domain expertise directly</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul style={{ color: '#eab9ff' }}>
                <li>Hard to scale and maintain as rules grow</li>
                <li>Limited adaptability to new expressions</li>
                <li>Weak on nuance and contextual meaning</li>
                <li>Labor-intensive to create and update</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" darkModeInvert={true} />
                Data Requirement
              </h4>
              <p style={{ color: '#eab9ff' }}>No labels, but significant rule engineering</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <p style={{ color: '#eab9ff' }}>Compliance/regulated settings; narrow domain heuristics</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ color: '#f39c12' }} />
                Notes
              </h4>
              <p style={{ color: '#eab9ff' }}>Use regex patterns and dependency parses for complex rules. Implement comprehensive unit tests and maintain versioned rulebooks to track changes and ensure consistency.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#5e2b73',
      notes: 'Rule-based: Pattern matching with handcrafted rules, good for compliance and regulatory environments'
        }
      ]
    },
    {
      id: 'technique-3',
      title: '3. Bag-of-Words + Logistic Regression',
      slides: [
        {
          id: 5,
          title: '3. Bag-of-Words + Logistic Regression',
          icon: { name: 'duo-brain-circuit' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SvgIcon iconName="duo-gears" sizeName="2x" style={{ color: '#f76ed5' }} />
              <h4>Model Type</h4>
            </div>
            <p style={{ color: '#f76ed5' }}>Linear classifier on unigram/bigram counts</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '0.85em' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul style={{ color: '#f76ed5' }}>
                <li>Fast to train and deploy</li>
                <li>Strong baseline performance</li>
                <li>Easy regularization options</li>
                <li>Interpretable feature weights</li>
                <li>Works with smaller datasets</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul style={{ color: '#f76ed5' }}>
                <li>Ignores word order and context</li>
                <li>Limited capability for nuanced sentiment</li>
                <li>Sparse feature representation</li>
                <li>Struggles with out-of-vocabulary words</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" darkModeInvert={true} />
                Data Requirement
              </h4>
              <p style={{ color: '#f76ed5' }}>Small–moderate labeled set (~1k–50k)</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <p style={{ color: '#f76ed5' }}>Short texts/reviews; need interpretable feature weights</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ color: '#f39c12' }} />
                Notes
              </h4>
              <p style={{ color: '#f76ed5' }}>Use n-grams to capture some word order; apply class weights for imbalanced data; implement L2 regularization to prevent overfitting; validate with stratified cross-validation.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#732b61',
      notes: 'Rule-based: Pattern matching with handcrafted rules, good for compliance and regulatory environments'
        }
      ]
    },
    {
      id: 'technique-4',
      title: '4. TF-IDF + SVM Sentiment Classifier',
      slides: [
        {
          id: 6,
          title: '4. TF-IDF + SVM Sentiment Classifier',
          icon: { name: 'duo-shield-check' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SvgIcon iconName="duo-gears" sizeName="2x" style={{ color: '#63e188' }} />
              <h4>Model Type</h4>
            </div>
            <p style={{ color: '#63e188' }}>Linear SVM (e.g., LinearSVC) on TF-IDF features</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '0.85em' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul style={{ color: '#63e188' }}>
                <li>Strong accuracy for classical ML approaches</li>
                <li>Handles high-dimensional feature spaces efficiently</li>
                <li>Good with sparse text representation</li>
                <li>More robust to noise and outliers than many alternatives</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul style={{ color: '#63e188' }}>
                <li>Probability calibration needed for confidence scores</li>
                <li>Less interpretable than logistic regression</li>
                <li>Feature engineering still required</li>
                <li>Higher memory usage with large vocabularies</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" darkModeInvert={true} />
                Data Requirement
              </h4>
              <p style={{ color: '#63e188' }}>5k–100k labeled examples</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <p style={{ color: '#63e188' }}>High-dimensional sparse text; robust baseline in noisy domains</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ color: '#f39c12' }} />
                Notes
              </h4>
              <p style={{ color: '#63e188' }}>Tune C parameter for regularization strength; use Platt scaling for proper probability estimates; prune features to reduce memory footprint; consider n-gram ranges beyond unigrams.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#2b7340',
      notes: 'Rule-based: Pattern matching with handcrafted rules, good for compliance and regulatory environments'
        }
      ]
    },
    {
      id: 'technique-5',
      title: '5. Naive Bayes Sentiment Model',
      slides: [
        {
          id: 7,
          title: '5. Naive Bayes Sentiment Model',
          icon: { name: 'duo-brain-circuit' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SvgIcon iconName="duo-gears" sizeName="2x" style={{ color: '#956efb' }} />
              <h4>Model Type</h4>
            </div>
            <p style={{ color: '#956efb' }}>Multinomial Naive Bayes on counts/TF-IDF</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '0.85em' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul style={{ color: '#956efb' }}>
                <li>Extremely fast training and inference</li>
                <li>Good with sparse/noisy text</li>
                <li>Works well with limited training data</li>
                <li>Simple probabilistic approach</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul style={{ color: '#956efb' }}>
                <li>Independence assumption between words (naive)</li>
                <li>Performance ceiling vs. SVM/NN approaches</li>
                <li>Limited contextual understanding</li>
                <li>Feature engineering often needed for best results</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" darkModeInvert={true} />
                Data Requirement
              </h4>
              <p style={{ color: '#956efb' }}>Works with very small labeled sets (hundreds+)</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <p style={{ color: '#956efb' }}>Tweets/short messages; quick baselines</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ color: '#f39c12' }} />
                Notes
              </h4>
              <p style={{ color: '#956efb' }}>Try NB-SVM (log-count ratios) for stronger results; be careful with stopword removal as it can impact performance. Consider Laplace smoothing for handling zero probabilities.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#3f2b73',
      notes: 'Rule-based: Pattern matching with handcrafted rules, good for compliance and regulatory environments'
        }
      ]
    },
    {
      id: 'technique-6',
      title: '6. VADER Sentiment Scoring',
      slides: [
        {
          id: 8,
          title: '6. VADER Sentiment Scoring',
          icon: { name: 'duo-gauge-high' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SvgIcon iconName="duo-gears" sizeName="2x" style={{ color: '#ed5e5e' }} />
              <h4>Model Type</h4>
            </div>
            <p style={{ color: '#ed5e5e' }}>Lexicon + rules optimized for social media</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '0.85em' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul style={{ color: '#ed5e5e' }}>
                <li>Handles negation, boosters, emojis, ALL CAPS</li>
                <li>Outputs pos/neu/neg + compound scores</li>
                <li>Fast, lightweight implementation</li>
                <li>No training data required</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul style={{ color: '#ed5e5e' }}>
                <li>Domain transfer limits</li>
                <li>Sarcasm still challenging</li>
                <li>Less accurate than ML models on formal text</li>
                <li>Fixed lexicon (unless modified)</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" darkModeInvert={true} />
                Data Requirement
              </h4>
              <p style={{ color: '#ed5e5e' }}>None; optional domain tweaks</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <p style={{ color: '#ed5e5e' }}>Tweets, chats, emojis, punctuation emphasis</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ color: '#f39c12' }} />
                Notes
              </h4>
              <p style={{ color: '#ed5e5e' }}>Use compound thresholds (e.g., &gt;0.05 positive); can extend lexicon for niche terms. Optimized for social media with special handling for punctuation and capitalization.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#732b2b',
      notes: 'Rule-based: Pattern matching with handcrafted rules, good for compliance and regulatory environments'
        }
      ]
    },
    {
      id: 'technique-7',
      title: '7. TextBlob Polarity Scoring',
      slides: [
        {
          id: 9,
          title: '7. TextBlob Polarity Scoring',
          icon: { name: 'duo-brain-circuit' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SvgIcon iconName="duo-gears" sizeName="2x" style={{ color: '#ff4bea' }} />
              <h4>Model Type</h4>
            </div>
            <p style={{ color: '#ff4bea' }}>Rule/lexicon-based (Pattern) with polarity and subjectivity scores</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '0.85em' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul style={{ color: '#ff4bea' }}>
                <li>Simple, intuitive API with minimal setup</li>
                <li>Provides both polarity (-1 to +1) and subjectivity (0 to 1) scores</li>
                <li>Includes additional NLP utilities (POS-tagging, noun phrase extraction)</li>
                <li>Easy integration with Python data analysis workflows</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul style={{ color: '#ff4bea' }}>
                <li>Based on older lexicons (Pattern library)</li>
                <li>Primarily English-centric with limited multilingual support</li>
                <li>Slower performance than VADER in practice</li>
                <li>Limited context understanding and sarcasm detection</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" darkModeInvert={true} />
                Data Requirement
              </h4>
              <p style={{ color: '#ff4bea' }}>None</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <p style={{ color: '#ff4bea' }}>Quick prototypes; subjectivity filtering; educational purposes</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ color: '#f39c12' }} />
                Notes
              </h4>
              <p style={{ color: '#ff4bea' }}>Great for teaching/demos and quick experiments. For production systems, prefer retrainable models or VADER. Can be combined with its spelling correction to handle minor text errors.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#792d70',
      notes: 'Rule-based: Pattern matching with handcrafted rules, good for compliance and regulatory environments'
        }
      ]
    },
    {
      id: 'technique-8',
      title: '8. LSTM-Based Sentiment Classification',
      slides: [
        {
          id: 10,
          title: '8. LSTM-Based Sentiment Classification',
          icon: { name: 'duo-circle-nodes' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SvgIcon iconName="duo-gears" sizeName="2x" style={{ color: '#a665ff' }} />
              <h4>Model Type</h4>
            </div>
            <p style={{ color: '#a665ff' }}>RNN (LSTM) over token sequences + embeddings</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '0.85em' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul style={{ color: '#a665ff' }}>
                <li>Captures sequential patterns and word order</li>
                <li>Better context modeling than traditional ML</li>
                <li>Handles variable-length inputs naturally</li>
                <li>Memory cells retain long-range dependencies</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul style={{ color: '#a665ff' }}>
                <li>Training requires substantial data</li>
                <li>Higher computational cost than traditional ML</li>
                <li>Slower inference time than CNN models</li>
                <li>Outperformed by transformer architectures</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" darkModeInvert={true} />
                Data Requirement
              </h4>
              <p style={{ color: '#a665ff' }}>10k–100k+ labeled texts</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <p style={{ color: '#a665ff' }}>Longer texts with dependencies; domains lacking pretrained transformers</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ color: '#f39c12' }} />
                Notes
              </h4>
              <p style={{ color: '#a665ff' }}>Use pretrained embeddings (GloVe/fastText) to improve performance. Apply dropout and gradient clipping to prevent overfitting and training instability.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#4d2d79',
      notes: 'Rule-based: Pattern matching with handcrafted rules, good for compliance and regulatory environments'
        }
      ]
    },
    {
      id: 'technique-9',
      title: '9. BiLSTM with Attention',
      slides: [
        {
          id: 11,
          title: '9. BiLSTM with Attention',
          icon: { name: 'duo-brain-circuit' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SvgIcon iconName="duo-gears" sizeName="2x" style={{ color: '#d9d44b' }} />
              <h4>Model Type</h4>
            </div>
            <p style={{ color: '#d9d44b' }}>Bidirectional LSTM + attention mechanism</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '0.85em' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul style={{ color: '#d9d44b' }}>
                <li>Captures context from both directions</li>
                <li>Attention helps focus on most relevant parts of text</li>
                <li>Better handling of long-range dependencies</li>
                <li>Provides interpretable attention weights</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul style={{ color: '#d9d44b' }}>
                <li>More parameters than standard LSTM</li>
                <li>Careful tuning needed for optimal results</li>
                <li>Slower inference than CNN models</li>
                <li>Requires quality labeled data</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" darkModeInvert={true} />
                Data Requirement
              </h4>
              <p style={{ color: '#d9d44b' }}>10k–100k+ labeled examples</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <p style={{ color: '#d9d44b' }}>Aspect tagging and longer reviews; interpretability via attention</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ color: '#f39c12' }} />
                Notes
              </h4>
              <p style={{ color: '#d9d44b' }}>Visualize attention for QA; consider self-attention or CRF for sequence labels. Use regularization (dropout) to prevent overfitting. Pre-trained embeddings can improve results.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#79762d',
      notes: 'Rule-based: Pattern matching with handcrafted rules, good for compliance and regulatory environments'
        }
      ]
    },
    {
      id: 'technique-10',
      title: '10. CNN for Sentiment Classification',
      slides: [
        {
          id: 12,
          title: '10. CNN for Sentiment Classification',
          icon: { name: 'duo-network-wired' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SvgIcon iconName="duo-gears" sizeName="2x" style={{ color: '#4edbc7' }} />
              <h4>Model Type</h4>
            </div>
            <p style={{ color: '#4edbc7' }}>1D Text CNN (multi-filter widths + max pooling)</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '0.85em' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul style={{ color: '#4edbc7' }}>
                <li>Efficient, highly parallelizable training</li>
                <li>Strong classic deep learning baseline</li>
                <li>Excellent at capturing local patterns and n-grams</li>
                <li>Faster inference compared to RNNs/LSTMs</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul style={{ color: '#4edbc7' }}>
                <li>Limited long-range contextual understanding</li>
                <li>May miss sequential dependencies important for sentiment</li>
                <li>Often requires hybrid approaches for complex texts</li>
                <li>Static window sizes can miss important patterns</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" darkModeInvert={true} />
                Data Requirement
              </h4>
              <p style={{ color: '#4edbc7' }}>5k–100k labeled examples</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <p style={{ color: '#4edbc7' }}>Short texts; key phrase/n-gram detection</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ color: '#f39c12' }} />
                Notes
              </h4>
              <p style={{ color: '#4edbc7' }}>Combine 3–5 filter sizes (e.g., 3/4/5) to capture different n-gram patterns. Consider CNN-BiLSTM hybrid architectures for improved performance on longer texts with complex sentiment expressions.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#2d796e',
      notes: 'Rule-based: Pattern matching with handcrafted rules, good for compliance and regulatory environments'
        }
      ]
    },
    {
      id: 'technique-11',
      title: '11. BERT Fine-Tuned for Sentiment',
      slides: [
        {
          id: 13,
          title: '11. BERT Fine-Tuned for Sentiment',
          icon: { name: 'duo-brain-circuit' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SvgIcon iconName="duo-gears" sizeName="2x" style={{ color: '#ed5df9' }} />
              <h4>Model Type</h4>
            </div>
            <p style={{ color: '#ed5df9' }}>Transformer encoder fine-tuned for classification</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '0.85em' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul style={{ color: '#ed5df9' }}>
                <li>High accuracy across diverse domains</li>
                <li>Strong transfer learning from pre-trained knowledge</li>
                <li>Multilingual variants available (mBERT, XLM-R)</li>
                <li>Robust to context, negation, and complex syntax</li>
                <li>Attention visualizations provide some interpretability</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul style={{ color: '#ed5df9' }}>
                <li>Computationally expensive for training and inference</li>
                <li>Significant latency compared to classical models</li>
                <li>Requires careful deployment for production scale</li>
                <li>Limited context window (512 tokens for BERT-base)</li>
                <li>Less interpretable than simpler models</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" darkModeInvert={true} />
                Data Requirement
              </h4>
              <p style={{ color: '#ed5df9' }}>2k–100k labeled examples; few-shot learning possible with smaller datasets</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <p style={{ color: '#ed5df9' }}>Most domains with nuanced language; complex sentiment in ambiguous texts; multi-class sentiment classification</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ color: '#f39c12' }} />
                Notes
              </h4>
              <p style={{ color: '#ed5df9' }}>Consider using DistilBERT or ALBERT for reduced latency. For small datasets, freeze lower layers during fine-tuning. Always calibrate probability outputs and monitor for domain drift.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#732d79',
      notes: 'Rule-based: Pattern matching with handcrafted rules, good for compliance and regulatory environments'
        }
      ]
    },
    {
      id: 'technique-12',
      title: '12. RoBERTa / DistilBERT Sentiment Models',
      slides: [
        {
          id: 14,
          title: '12. RoBERTa / DistilBERT Sentiment Models',
          icon: { name: 'duo-gauge-high' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SvgIcon iconName="duo-gears" sizeName="2x" style={{ color: '#4fd75d' }} />
              <h4>Model Type</h4>
            </div>
            <p style={{ color: '#4fd75d' }}>RoBERTa-base/large (robust pretraining) or DistilBERT (lighter variant)</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '0.85em' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul style={{ color: '#4fd75d' }}>
                <li>RoBERTa often outperforms BERT due to improved pretraining</li>
                <li>DistilBERT reduces latency/cost (40% smaller, 60% faster)</li>
                <li>Strong pretrained models available for specific domains</li>
                <li>Good multilingual support with mBERT variants</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul style={{ color: '#4fd75d' }}>
                <li>RoBERTa is computationally heavier than BERT</li>
                <li>DistilBERT trades some accuracy (~3%) for efficiency</li>
                <li>Still requires GPU for efficient fine-tuning</li>
                <li>Model drift over time requires retraining</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" darkModeInvert={true} />
                Data Requirement
              </h4>
              <p style={{ color: '#4fd75d' }}>Similar to BERT (2k-100k labeled examples; few-shot learning possible)</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <p style={{ color: '#4fd75d' }}>Social media (e.g., cardiffnlp/twitter-roberta-base-sentiment), general reviews, production environments with latency constraints</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ color: '#f39c12' }} />
                Notes
              </h4>
              <p style={{ color: '#4fd75d' }}>Start with domain-adapted checkpoints when available. Monitor performance drift over time. Use mixed precision training for faster fine-tuning. For production, consider knowledge distillation to optimize further.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#2d7935',
      notes: 'Rule-based: Pattern matching with handcrafted rules, good for compliance and regulatory environments'
        }
      ]
    },
    {
      id: 'technique-13',
      title: '13. GPT / LLM Zero-Shot Sentiment Classification',
      slides: [
        {
          id: 15,
          title: '13. GPT / LLM Zero-Shot Sentiment Classification',
          icon: { name: 'duo-wand-magic-sparkles' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SvgIcon iconName="duo-gears" sizeName="2x" style={{ color: '#f7417d' }} />
              <h4>Model Type</h4>
            </div>
            <p style={{ color: '#f7417d' }}>Prompted LLM (zero/few-shot) via API or local models</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '0.85em' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul style={{ color: '#f7417d' }}>
                <li>Strong contextual understanding of nuanced language</li>
                <li>Works across multiple domains without retraining</li>
                <li>Can provide explanations/rationales for classifications</li>
                <li>Handles complex emotion detection beyond binary sentiment</li>
                <li>Adaptable to custom sentiment categories via prompt engineering</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul style={{ color: '#f7417d' }}>
                <li>API costs can be high at scale</li>
                <li>Latency issues for real-time applications</li>
                <li>Results can be nondeterministic (inconsistent)</li>
                <li>Potential for bias in sentiment judgments</li>
                <li>Limited control over model internals</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" darkModeInvert={true} />
                Data Requirement
              </h4>
              <p style={{ color: '#f7417d' }}>None for zero-shot; few examples improve reliability</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <p style={{ color: '#f7417d' }}>Rapid, cross-domain/multilingual, long-form texts</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ color: '#f39c12' }} />
                Notes
              </h4>
              <p style={{ color: '#f7417d' }}>Constrain outputs with structured prompts; use evaluation harness to test consistency; cache results to reduce costs; implement guardrails to monitor bias and prevent information leakage; consider few-shot examples for improved accuracy and reliability.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#792d46',
      notes: 'Rule-based: Pattern matching with handcrafted rules, good for compliance and regulatory environments'
        }
      ]
    },
    {
      id: 'technique-14',
      title: '14. Aspect-Based Sentiment Analysis (ABSA)',
      slides: [
        {
          id: 16,
          title: '14. Aspect-Based Sentiment Analysis (ABSA)',
          icon: { name: 'duo-crosshairs' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SvgIcon iconName="duo-gears" sizeName="2x" style={{ color: '#e1d23d' }} />
              <h4>Model Type</h4>
            </div>
            <p style={{ color: '#e1d23d' }}>Pipeline (AE/OE/ASC) or end-to-end (AOPE/ASTE/ASQP) with transformers/GCNs</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '0.85em' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul style={{ color: '#e1d23d' }}>
                <li>Fine-grained, actionable signals per aspect/entity</li>
                <li>Can identify multiple sentiment polarities within one text</li>
                <li>Helps prioritize improvements by aspect importance</li>
                <li>More nuanced insights than document-level sentiment</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul style={{ color: '#e1d23d' }}>
                <li>Annotation-heavy; domain transfer is hard</li>
                <li>Complex evaluation metrics across subtasks</li>
                <li>More challenging to implement than general sentiment</li>
                <li>Often requires multiple models or complex architectures</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" darkModeInvert={true} />
                Data Requirement
              </h4>
              <p style={{ color: '#e1d23d' }}>Aspect-annotated corpora; costly to label</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <p style={{ color: '#e1d23d' }}>Product/service analytics; Voice of Customer insights at feature level</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ color: '#f39c12' }} />
                Notes
              </h4>
              <p style={{ color: '#e1d23d' }}>Use domain-adapted BERT/GCN; leverage public datasets (SemEval, MAMS); consider weak supervision for reducing annotation costs; pipeline approaches are simpler but end-to-end models often perform better</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#79722d',
      notes: 'Rule-based: Pattern matching with handcrafted rules, good for compliance and regulatory environments'
        }
      ]
    },
    {
      id: 'technique-15',
      title: '15. Multimodal Sentiment Analysis (Text + Audio/Video)',
      slides: [
        {
          id: 17,
          title: '15. Multimodal Sentiment Analysis (Text + Audio/Video)',
          icon: { name: 'duo-video' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '15px', marginBottom: '20px', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <SvgIcon iconName="duo-gears" sizeName="2x" style={{ color: '#43cfdb' }} />
              <h4>Model Type</h4>
            </div>
            <p style={{ color: '#43cfdb' }}>Fusion models (early/late/hybrid; attention) over text, audio, visual streams</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '0.85em' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" darkModeInvert={true} />
                Pros
              </h4>
              <ul style={{ color: '#43cfdb' }}>
                <li>Higher accuracy by combining multiple information channels</li>
                <li>Detects non-verbal emotional cues (tone, facial expressions)</li>
                <li>Better at identifying sarcasm and subtle emotions</li>
                <li>Robust to noise in individual modalities</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" darkModeInvert={true} />
                Cons
              </h4>
              <ul style={{ color: '#43cfdb' }}>
                <li>Complex data capture and synchronization requirements</li>
                <li>Privacy and ethics concerns with video/audio processing</li>
                <li>Computationally expensive and deployment challenges</li>
                <li>Limited available training datasets</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" darkModeInvert={true} />
                Data Requirement
              </h4>
              <p style={{ color: '#43cfdb' }}>Synchronized multimodal data (e.g., MOSI/MOSEI); consent/privacy controls</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <p style={{ color: '#43cfdb' }}>Calls, meetings, video reviews; sarcasm/prosody cues</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ color: '#f39c12' }} />
                Notes
              </h4>
              <p style={{ color: '#43cfdb' }}>Encoders: text transformer, wav2vec for audio, Vision Transformer (ViT) for visual. Cross-attention mechanisms improve modality fusion. Ensure robust time alignment between modalities for accurate sentiment correlation.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#2d7379',
      notes: 'Rule-based: Pattern matching with handcrafted rules, good for compliance and regulatory environments'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 18,
          title: 'Comparison Matrix',
          content: (
        <div style={{ fontSize: '0.6em', margin: '0 auto' }}>
          <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <SvgIcon iconName="duo-table-columns" sizeName="2x" darkModeInvert={true} />
            Key Dimensions Across All 15 Techniques
          </h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)' }}>
                <th style={{ padding: '8px', border: '1px solid #555' }}>Category</th>
                <th style={{ padding: '8px', border: '1px solid #555' }}>Technique</th>
                <th style={{ padding: '8px', border: '1px solid #555' }}>Data Needs</th>
                <th style={{ padding: '8px', border: '1px solid #555' }}>Setup Cost</th>
                <th style={{ padding: '8px', border: '1px solid #555' }}>Latency</th>
                <th style={{ padding: '8px', border: '1px solid #555' }}>Accuracy</th>
                <th style={{ padding: '8px', border: '1px solid #555' }}>Explainability</th>
                <th style={{ padding: '8px', border: '1px solid #555' }}>Multilingual</th>
              </tr>
            </thead>
            <tbody>
              <tr><td style={{ padding: '6px', border: '1px solid #555' }}>Traditional</td><td style={{ padding: '6px', border: '1px solid #555' }}>1-2</td><td style={{ padding: '6px', border: '1px solid #555' }}>None</td><td style={{ padding: '6px', border: '1px solid #555' }}>Low</td><td style={{ padding: '6px', border: '1px solid #555' }}>Low</td><td style={{ padding: '6px', border: '1px solid #555' }}>Low-Med</td><td style={{ padding: '6px', border: '1px solid #555', color: '#2ecc71' }}>High</td><td style={{ padding: '6px', border: '1px solid #555' }}>Medium</td></tr>
              <tr><td style={{ padding: '6px', border: '1px solid #555' }}>Classical ML</td><td style={{ padding: '6px', border: '1px solid #555' }}>3-5</td><td style={{ padding: '6px', border: '1px solid #555' }}>Small-Med</td><td style={{ padding: '6px', border: '1px solid #555' }}>Low</td><td style={{ padding: '6px', border: '1px solid #555' }}>Low</td><td style={{ padding: '6px', border: '1px solid #555' }}>Medium</td><td style={{ padding: '6px', border: '1px solid #555', color: '#2ecc71' }}>High</td><td style={{ padding: '6px', border: '1px solid #555' }}>Medium</td></tr>
              <tr><td style={{ padding: '6px', border: '1px solid #555' }}>Modern Tools</td><td style={{ padding: '6px', border: '1px solid #555' }}>6-7</td><td style={{ padding: '6px', border: '1px solid #555' }}>None</td><td style={{ padding: '6px', border: '1px solid #555' }}>Low</td><td style={{ padding: '6px', border: '1px solid #555' }}>Low</td><td style={{ padding: '6px', border: '1px solid #555' }}>Med</td><td style={{ padding: '6px', border: '1px solid #555' }}>Medium</td><td style={{ padding: '6px', border: '1px solid #555' }}>English</td></tr>
              <tr><td style={{ padding: '6px', border: '1px solid #555' }}>Deep Learning</td><td style={{ padding: '6px', border: '1px solid #555' }}>8-10</td><td style={{ padding: '6px', border: '1px solid #555' }}>Med-High</td><td style={{ padding: '6px', border: '1px solid #555' }}>Medium</td><td style={{ padding: '6px', border: '1px solid #555' }}>Medium</td><td style={{ padding: '6px', border: '1px solid #555', color: '#f39c12' }}>Med-High</td><td style={{ padding: '6px', border: '1px solid #555' }}>Low-Med</td><td style={{ padding: '6px', border: '1px solid #555' }}>w/ Embeddings</td></tr>
              <tr><td style={{ padding: '6px', border: '1px solid #555' }}>Transformers</td><td style={{ padding: '6px', border: '1px solid #555' }}>11-13</td><td style={{ padding: '6px', border: '1px solid #555' }}>Low-Med</td><td style={{ padding: '6px', border: '1px solid #555' }}>Med-High</td><td style={{ padding: '6px', border: '1px solid #555', color: '#e74c3c' }}>High</td><td style={{ padding: '6px', border: '1px solid #555', color: '#2ecc71' }}>High</td><td style={{ padding: '6px', border: '1px solid #555' }}>Low-Med</td><td style={{ padding: '6px', border: '1px solid #555', color: '#2ecc71' }}>High</td></tr>
              <tr><td style={{ padding: '6px', border: '1px solid #555' }}>Advanced</td><td style={{ padding: '6px', border: '1px solid #555' }}>14-15</td><td style={{ padding: '6px', border: '1px solid #555', color: '#e74c3c' }}>High</td><td style={{ padding: '6px', border: '1px solid #555', color: '#e74c3c' }}>High</td><td style={{ padding: '6px', border: '1px solid #555', color: '#e74c3c' }}>High</td><td style={{ padding: '6px', border: '1px solid #555', color: '#2ecc71' }}>High</td><td style={{ padding: '6px', border: '1px solid #555' }}>Medium</td><td style={{ padding: '6px', border: '1px solid #555' }}>Variable</td></tr>
            </tbody>
          </table>
          <p style={{ marginTop: '20px', fontSize: '0.9em', textAlign: 'center' }}>
            <span style={{ color: '#2ecc71' }}>■ Low</span> &nbsp;
            <span style={{ color: '#f39c12' }}>■ Medium</span> &nbsp;
            <span style={{ color: '#e74c3c' }}>■ High</span> &nbsp;
            <span>■ Variable</span>
          </p>
        </div>
      ),
      backgroundColor: '#34495E',
      notes: 'Comprehensive comparison showing trade-offs: Traditional/Classical offer explainability, Transformers offer accuracy, Advanced offer granularity'
        },
        {
          id: 19,
          title: 'Recommendations & Best Practices',
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.85em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '15px', color: '#3498db' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="2x" style={{ color: '#3498db' }} />
                Start with Baselines
              </h4>
              <p>Begin with VADER/TextBlob and TF-IDF+LinearSVC to establish metrics and error buckets</p>
            </div>
            <div style={{ border: '2px solid #bd5ee3', borderRadius: '10px', padding: '15px', color: '#bd5ee3' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#bd5ee3' }}>
                <SvgIcon iconName="duo-scale-balanced" sizeName="2x" style={{ color: '#bd5ee3' }} />
                Scale Up Judiciously
              </h4>
              <p>Move to BERT/RoBERTa when nuance or accuracy demands it; consider DistilBERT for latency</p>
            </div>
            <div style={{ border: '2px solid #e67e22', borderRadius: '10px', padding: '15px', color: '#e67e22' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e67e22' }}>
                <SvgIcon iconName="duo-crosshairs" sizeName="2x" style={{ color: '#e67e22' }} />
                For Granularity
              </h4>
              <p>Use ABSA when you need actionable, aspect-level insights; plan for labeling or weak supervision</p>
            </div>
            <div style={{ border: '2px solid #1abc9c', borderRadius: '10px', padding: '15px', color: '#1abc9c' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1abc9c' }}>
                <SvgIcon iconName="duo-video" sizeName="2x" style={{ color: '#1abc9c' }} />
                For Conversational/Video
              </h4>
              <p>Consider multimodal only when audio/visual add clear value; address privacy/compliance</p>
            </div>
            <div style={{ border: '2px solid #e74c3c', borderRadius: '10px', padding: '15px', color: '#e74c3c' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e74c3c' }}>
                <SvgIcon iconName="duo-gear" sizeName="2x" style={{ color: '#e74c3c' }} />
                Operationalize
              </h4>
              <ul>
                <li>Add calibration, drift monitoring, bias/fairness checks</li>
                <li>Cache LLM outputs to reduce API costs</li>
                <li>Define re-training cadence based on domain volatility</li>
              </ul>
            </div>
            <div style={{ border: '2px solid #f39c12', borderRadius: '10px', padding: '15px', color: '#f39c12' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12' }}>
                <SvgIcon iconName="duo-shield-halved" sizeName="2x" style={{ color: '#f39c12' }} />
                Guardrails for LLMs
              </h4>
              <p>Constrain outputs, add validation, log prompts/responses; establish cost/governance controls</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#17733e',
      notes: 'Best practices: Start simple, scale judiciously, operationalize with monitoring, implement guardrails for production'
        },
        {
          id: 20,
          title: 'Implementation Roadmap',
          content: (
        <div style={{ margin: '0 auto', color: '#2cc3a6' }}>
          <h3 style={{ marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
            <SvgIcon iconName="duo-map" sizeName="2x" style={{ color: '#3498db' }} />
            Next Steps
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ 
                backgroundColor: '#3498db', 
                borderRadius: '50%', 
                width: '60px', 
                height: '60px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '1.5em',
                fontWeight: 'bold',
                flexShrink: 0
              }}>1</div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#2cc3a6' }}>Select 2-3 Candidates</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>Choose methods based on your domain complexity, data availability, and explainability needs</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ 
                backgroundColor: '#9b59b6', 
                borderRadius: '50%', 
                width: '60px', 
                height: '60px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '1.5em',
                fontWeight: 'bold',
                flexShrink: 0
              }}>2</div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#2cc3a6' }}>Run Pilot Project</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>Test performance on your domain-specific data with consistent evaluation metrics</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ 
                backgroundColor: '#b93838', 
                borderRadius: '50%', 
                width: '60px', 
                height: '60px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                fontSize: '1.5em',
                fontWeight: 'bold',
                flexShrink: 0
              }}>3</div>
              <div style={{ textAlign: 'left' }}>
                <h4 style={{ margin: '0 0 8px 0', color: '#2cc3a6' }}>Optimize & Deploy</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>Fine-tune performance, establish monitoring, and implement serving infrastructure</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '50px', padding: '20px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', textAlign: 'center' }}>
            <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <SvgIcon iconName="duo-scale-balanced" sizeName="4x" style={{ color: '#29bfa4' }} />
              <p style={{ fontSize: '1.5em' }}>
                <strong>Remember:</strong> Balance accuracy, explainability, cost, and maintenance based on your specific use case
              </p>
            </p>
          </div>
        </div>
      ),
      backgroundColor: '#146152',
      notes: 'Three-step roadmap: Select candidates, pilot test with domain data, then optimize and deploy with monitoring'
        }
      ]
    },
    {
      id: 'thank-you',
      title: 'Thank You!',
      slides: [
        {
          id: 21,
          title: 'Thank You!',
          content: (
            <div style={{ textAlign: 'left' }}>
          <h2 style={{ marginBottom: '40px' }}>15 Sentiment Analysis Techniques</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '40px' }}>
            <SvgIcon iconName="duo-face-smile" sizeName="4x" style={{ color: '#2ecc71' }} />
            <SvgIcon iconName="duo-heart" sizeName="4x" style={{ color: '#e74c3c' }} />
            <SvgIcon iconName="duo-star" sizeName="4x" style={{ color: '#f39c12' }} />
          </div>
          <div style={{ fontSize: '1.1em', lineHeight: '1.8' }}>
            <p>From traditional lexicon-based approaches to cutting-edge transformer models and multimodal analysis</p>
          </div>
          <div style={{ marginTop: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
            <SvgIcon iconName="duo-graduation-cap" sizeName="2x" style={{ color: '#3498db' }} />
            <p style={{ fontSize: '0.9em', opacity: 0.8 }}>Happy Sentiment Analyzing!</p>
          </div>
        </div>
      ),
      backgroundColor: '#2C3E50',
      notes: 'Conclusion slide - comprehensive overview of 15 sentiment analysis techniques from basic to advanced'
        }
      ]
    }
  ]
};

