import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const sentimentAnalysisDeck: Deck = {
  id: 'sentiment-analysis-deck',
  name: 'Sentiment Analysis Techniques',
  description: '15 Sentiment Analysis Techniques - From Rule-Based to Transformers',
  theme: 'moon',
  slides: [
    {
      id: 1,
      title: '15 Sentiment Analysis Techniques',
      content: (
        <div>
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
      content: (
        <div style={{ textAlign: 'left', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-book" sizeName="1x" />
                Traditional & Classical ML
              </h3>
              <ul style={{ fontSize: '0.9em' }}>
                <li>1. Lexicon-Based Sentiment Scoring</li>
                <li>2. Rule-Based Classification</li>
                <li>3. BoW + Logistic Regression</li>
                <li>4. TF-IDF + SVM</li>
                <li>5. Naive Bayes</li>
              </ul>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                <SvgIcon iconName="duo-tools" sizeName="1x" />
                Modern NLP Tools
              </h3>
              <ul style={{ fontSize: '0.9em' }}>
                <li>6. VADER Sentiment Scoring</li>
                <li>7. TextBlob Polarity Scoring</li>
              </ul>
            </div>
            <div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-brain" sizeName="1x" />
                Deep Learning & Transformers
              </h3>
              <ul style={{ fontSize: '0.9em' }}>
                <li>8. LSTM-Based Classification</li>
                <li>9. BiLSTM with Attention</li>
                <li>10. CNN for Sentiment</li>
                <li>11. BERT Fine-Tuned</li>
                <li>12. RoBERTa/DistilBERT</li>
                <li>13. GPT/LLM Zero-Shot</li>
              </ul>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" />
                Advanced
              </h3>
              <ul style={{ fontSize: '0.9em' }}>
                <li>14. Aspect-Based Sentiment</li>
                <li>15. Multimodal Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#34495E',
      notes: '15 techniques organized by category from traditional to advanced'
    },
    {
      id: 3,
      title: '1. Lexicon-Based Sentiment Scoring',
      content: (
        <div style={{ textAlign: 'left', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-book-open" sizeName="2x" style={{ color: '#3498db' }} />
            <h3>Dictionary/lexicon lookup with additive scoring</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '0.85em' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" />
                Pros
              </h4>
              <ul>
                <li>Interpretable word-level contributions</li>
                <li>Fast, minimal compute</li>
                <li>No training data needed</li>
                <li>Multilingual lexicons available</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" />
                Cons
              </h4>
              <ul>
                <li>Poor context and negation handling</li>
                <li>Struggles with sarcasm</li>
                <li>Brittle to slang/domain terms</li>
                <li>Lower accuracy vs ML</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" />
                Data Requirement
              </h4>
              <p>No labels; optional domain lexicon curation</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" />
                Best Use Case
              </h4>
              <p>Low-resource, explainable baseline; predictable vocabulary domains</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ color: '#f39c12' }} />
                Notes
              </h4>
              <p>Consider enhancing with custom rules for negation and intensifiers. Domain-specific lexicons significantly improve performance.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16A085',
      notes: 'Lexicon-based: Uses dictionaries like AFINN, SentiWordNet for word-level scoring'
    },
    {
      id: 4,
      title: '2. Rule-Based Sentiment Classification',
      content: (
        <div style={{ textAlign: 'left', maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-gears" sizeName="2x" style={{ color: '#9B59B6' }} />
            <h3>Handcrafted rules + patterns over tokens/syntax</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '0.85em' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" />
                Pros
              </h4>
              <ul>
                <li>Deterministic and fully auditable</li>
                <li>Predictable latency</li>
                <li>No training data needed</li>
                <li>Direct domain expertise</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" />
                Cons
              </h4>
              <ul>
                <li>Hard to scale and maintain</li>
                <li>Limited adaptability</li>
                <li>Weak on nuance</li>
                <li>Labor-intensive to update</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" />
                Data Requirement
              </h4>
              <p>No labels, but significant rule engineering</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" />
                Best Use Case
              </h4>
              <p>Compliance/regulated settings; narrow domain heuristics</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ color: '#f39c12' }} />
                Notes
              </h4>
              <p>Use regex patterns and dependency parses. Implement comprehensive unit tests and maintain versioned rulebooks.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#8E44AD',
      notes: 'Rule-based: Pattern matching with handcrafted rules, good for compliance and regulatory environments'
    },
    {
      id: 5,
      title: 'Classical ML Approaches (3-5)',
      content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '30px' }}>
            <SvgIcon iconName="duo-chart-line" sizeName="3x" style={{ color: '#3498db' }} />
            <SvgIcon iconName="duo-table" sizeName="3x" style={{ color: '#e67e22' }} />
            <SvgIcon iconName="duo-calculator" sizeName="3x" style={{ color: '#1abc9c' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#3498db' }}>3. BoW + Logistic Regression</h4>
              <p><strong>Data:</strong> 1k-50k labeled</p>
              <p><strong>Use:</strong> Short texts/reviews</p>
              <p><strong>Pros:</strong> Fast, interpretable weights, strong baseline</p>
              <p><strong>Cons:</strong> Ignores word order, sparse features</p>
            </div>
            <div style={{ border: '2px solid #e67e22', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#e67e22' }}>4. TF-IDF + SVM</h4>
              <p><strong>Data:</strong> 5k-100k labeled</p>
              <p><strong>Use:</strong> High-dimensional sparse text</p>
              <p><strong>Pros:</strong> Strong accuracy, handles sparsity well</p>
              <p><strong>Cons:</strong> Needs calibration, less interpretable</p>
            </div>
            <div style={{ border: '2px solid #1abc9c', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#1abc9c' }}>5. Naive Bayes</h4>
              <p><strong>Data:</strong> Hundreds+ examples</p>
              <p><strong>Use:</strong> Tweets/short messages</p>
              <p><strong>Pros:</strong> Extremely fast, works with limited data</p>
              <p><strong>Cons:</strong> Independence assumption, performance ceiling</p>
            </div>
          </div>
          <div style={{ marginTop: '20px', padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px' }}>
            <strong>💡 Tip:</strong> These classical ML methods provide strong baselines with interpretability and low compute requirements
          </div>
        </div>
      ),
      backgroundColor: '#2980B9',
      notes: 'Classical ML approaches: Fast, interpretable baselines with modest data requirements'
    },
    {
      id: 6,
      title: 'Modern NLP Tools (6-7)',
      content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginBottom: '30px' }}>
            <SvgIcon iconName="duo-comments" sizeName="3x" style={{ color: '#1abc9c' }} />
            <SvgIcon iconName="duo-language" sizeName="3x" style={{ color: '#9b59b6' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '0.85em' }}>
            <div style={{ border: '2px solid #1abc9c', borderRadius: '10px', padding: '20px' }}>
              <h3 style={{ color: '#1abc9c', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-hashtag" sizeName="1x" />
                6. VADER Sentiment Scoring
              </h3>
              <p><strong>Type:</strong> Lexicon + rules for social media</p>
              <p><strong>Data:</strong> None required</p>
              <p><strong>Best for:</strong> Tweets, chats, emojis, punctuation</p>
              <div style={{ marginTop: '15px' }}>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Handles negation, boosters, emojis, ALL CAPS</p>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Outputs pos/neu/neg + compound scores</p>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Fast, lightweight, no training needed</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Domain transfer limits, sarcasm challenges</p>
              </div>
            </div>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '20px' }}>
              <h3 style={{ color: '#9b59b6', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-flask" sizeName="1x" />
                7. TextBlob Polarity Scoring
              </h3>
              <p><strong>Type:</strong> Rule/lexicon-based with polarity & subjectivity</p>
              <p><strong>Data:</strong> None required</p>
              <p><strong>Best for:</strong> Quick prototypes, educational purposes</p>
              <div style={{ marginTop: '15px' }}>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Simple, intuitive API</p>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Polarity (-1 to +1) & subjectivity (0 to 1)</p>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Includes NLP utilities (POS, NP extraction)</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Older lexicons, primarily English-centric</p>
              </div>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16A085',
      notes: 'Modern NLP tools: VADER for social media, TextBlob for quick prototyping - both require no training data'
    },
    {
      id: 7,
      title: 'Deep Learning Models (8-10)',
      content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '25px' }}>
            <SvgIcon iconName="duo-network-wired" sizeName="3x" style={{ color: '#e74c3c' }} />
            <SvgIcon iconName="duo-project-diagram" sizeName="3x" style={{ color: '#f39c12' }} />
            <SvgIcon iconName="duo-layer-group" sizeName="3x" style={{ color: '#3498db' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
            <div style={{ border: '2px solid #e74c3c', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#e74c3c' }}>8. LSTM-Based</h4>
              <p><strong>Data:</strong> 10k-100k+ labeled</p>
              <p><strong>Use:</strong> Longer texts with dependencies</p>
              <p><strong>✓</strong> Captures sequential patterns</p>
              <p><strong>✓</strong> Handles variable-length inputs</p>
              <p><strong>✗</strong> High compute, slower inference</p>
              <p style={{ fontSize: '0.9em', marginTop: '10px', opacity: 0.9 }}>
                💡 Use pretrained embeddings (GloVe/fastText)
              </p>
            </div>
            <div style={{ border: '2px solid #f39c12', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#f39c12' }}>9. BiLSTM + Attention</h4>
              <p><strong>Data:</strong> 10k-100k+ labeled</p>
              <p><strong>Use:</strong> Aspect tagging, long reviews</p>
              <p><strong>✓</strong> Bidirectional context</p>
              <p><strong>✓</strong> Interpretable attention weights</p>
              <p><strong>✗</strong> More parameters, careful tuning</p>
              <p style={{ fontSize: '0.9em', marginTop: '10px', opacity: 0.9 }}>
                💡 Visualize attention for QA/debugging
              </p>
            </div>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#3498db' }}>10. CNN for Sentiment</h4>
              <p><strong>Data:</strong> 5k-100k labeled</p>
              <p><strong>Use:</strong> Short texts, key phrase detection</p>
              <p><strong>✓</strong> Highly parallelizable</p>
              <p><strong>✓</strong> Fast inference, captures n-grams</p>
              <p><strong>✗</strong> Limited long-range context</p>
              <p style={{ fontSize: '0.9em', marginTop: '10px', opacity: 0.9 }}>
                💡 Use 3-5 filter sizes (e.g., 3/4/5)
              </p>
            </div>
          </div>
          <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>⚡ Key Takeaway:</strong> Deep learning models need substantial data but capture context better than classical ML
          </div>
        </div>
      ),
      backgroundColor: '#C0392B',
      notes: 'Deep learning: LSTM for sequences, BiLSTM+Attention for interpretability, CNN for efficient n-gram capture'
    },
    {
      id: 8,
      title: 'Transformer Models (11-13)',
      content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.72em' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-microchip" sizeName="3x" style={{ color: '#9b59b6' }} />
            <SvgIcon iconName="duo-brain-circuit" sizeName="3x" style={{ color: '#e67e22' }} />
            <SvgIcon iconName="duo-wand-magic-sparkles" sizeName="3x" style={{ color: '#3498db' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#9b59b6' }}>11. BERT Fine-Tuned</h4>
              <p><strong>Data:</strong> 2k-100k labeled</p>
              <p><strong>Use:</strong> Nuanced language, complex sentiment</p>
              <p><strong>✓</strong> High accuracy across domains</p>
              <p><strong>✓</strong> Strong transfer learning</p>
              <p><strong>✓</strong> Multilingual variants (mBERT)</p>
              <p><strong>✗</strong> Computationally expensive</p>
              <p><strong>✗</strong> Higher latency</p>
              <p style={{ marginTop: '8px', opacity: 0.9 }}>
                💡 Use DistilBERT for reduced latency
              </p>
            </div>
            <div style={{ border: '2px solid #e67e22', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#e67e22' }}>12. RoBERTa/DistilBERT</h4>
              <p><strong>Data:</strong> 2k-100k labeled</p>
              <p><strong>Use:</strong> Social media, production with latency constraints</p>
              <p><strong>✓</strong> RoBERTa often outperforms BERT</p>
              <p><strong>✓</strong> DistilBERT: 40% smaller, 60% faster</p>
              <p><strong>✓</strong> Domain-adapted checkpoints available</p>
              <p><strong>✗</strong> Still requires GPU for fine-tuning</p>
              <p><strong>✗</strong> Model drift over time</p>
              <p style={{ marginTop: '8px', opacity: 0.9 }}>
                💡 Monitor performance drift, retrain periodically
              </p>
            </div>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '12px' }}>
              <h4 style={{ color: '#3498db' }}>13. GPT/LLM Zero-Shot</h4>
              <p><strong>Data:</strong> None (zero-shot), few examples help</p>
              <p><strong>Use:</strong> Cross-domain, multilingual, long texts</p>
              <p><strong>✓</strong> Strong contextual understanding</p>
              <p><strong>✓</strong> No retraining needed</p>
              <p><strong>✓</strong> Can provide explanations</p>
              <p><strong>✗</strong> High API costs at scale</p>
              <p><strong>✗</strong> Latency issues</p>
              <p><strong>✗</strong> Nondeterministic results</p>
              <p style={{ marginTop: '8px', opacity: 0.9 }}>
                💡 Constrain outputs, cache results
              </p>
            </div>
          </div>
          <div style={{ marginTop: '15px', padding: '10px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>🚀 State-of-the-Art:</strong> Transformers provide best accuracy but consider cost/latency trade-offs
          </div>
        </div>
      ),
      backgroundColor: '#8E44AD',
      notes: 'Transformers: BERT for nuanced sentiment, RoBERTa/DistilBERT for production, GPT for zero-shot cross-domain'
    },
    {
      id: 9,
      title: 'Advanced Techniques (14-15)',
      content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginBottom: '30px' }}>
            <SvgIcon iconName="duo-bullseye-arrow" sizeName="3x" style={{ color: '#e67e22' }} />
            <SvgIcon iconName="duo-photo-video" sizeName="3x" style={{ color: '#9b59b6' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div style={{ border: '2px solid #e67e22', borderRadius: '10px', padding: '20px' }}>
              <h3 style={{ color: '#e67e22', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-crosshairs" sizeName="1x" />
                14. Aspect-Based Sentiment (ABSA)
              </h3>
              <p><strong>Type:</strong> Pipeline (AE/OE/ASC) or end-to-end with transformers/GCNs</p>
              <p><strong>Data:</strong> Aspect-annotated corpora (costly to label)</p>
              <p><strong>Use:</strong> Product/service analytics, Voice of Customer insights</p>
              <div style={{ marginTop: '12px' }}>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Fine-grained, actionable per-aspect signals</p>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Multiple sentiments in one text</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Annotation-heavy, hard domain transfer</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Complex implementation</p>
              </div>
              <p style={{ marginTop: '12px', fontSize: '0.95em', opacity: 0.9 }}>
                💡 Use domain-adapted BERT/GCN; leverage public datasets (SemEval, MAMS)
              </p>
            </div>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '20px' }}>
              <h3 style={{ color: '#9b59b6', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-video" sizeName="1x" />
                15. Multimodal Sentiment Analysis
              </h3>
              <p><strong>Type:</strong> Fusion models over text, audio, visual streams</p>
              <p><strong>Data:</strong> Synchronized multimodal data (e.g., MOSI/MOSEI)</p>
              <p><strong>Use:</strong> Calls, meetings, video reviews with sarcasm/prosody</p>
              <div style={{ marginTop: '12px' }}>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Higher accuracy via multiple channels</p>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Detects non-verbal cues (tone, facial)</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Complex data capture/synchronization</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Privacy concerns, expensive deployment</p>
              </div>
              <p style={{ marginTop: '12px', fontSize: '0.95em', opacity: 0.9 }}>
                💡 Use text transformer + wav2vec (audio) + ViT (visual) with cross-attention
              </p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#D35400',
      notes: 'Advanced: ABSA for fine-grained aspect-level insights, Multimodal for audio/video with non-verbal cues'
    },
    {
      id: 10,
      title: 'Comparison Matrix',
      content: (
        <div style={{ fontSize: '0.6em', maxWidth: '1100px', margin: '0 auto' }}>
          <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <SvgIcon iconName="duo-table-columns" sizeName="2x" />
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
      id: 11,
      title: 'Recommendations & Best Practices',
      content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.85em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db' }}>
                <SvgIcon iconName="duo-play" sizeName="1x" />
                Start with Baselines
              </h4>
              <p>Begin with VADER/TextBlob and TF-IDF+LinearSVC to establish metrics and error buckets</p>
            </div>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9b59b6' }}>
                <SvgIcon iconName="duo-arrow-trend-up" sizeName="1x" />
                Scale Up Judiciously
              </h4>
              <p>Move to BERT/RoBERTa when nuance demands it; consider DistilBERT for latency constraints</p>
            </div>
            <div style={{ border: '2px solid #e67e22', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e67e22' }}>
                <SvgIcon iconName="duo-crosshairs" sizeName="1x" />
                For Granularity
              </h4>
              <p>Use ABSA when you need actionable, aspect-level insights; plan for labeling or weak supervision</p>
            </div>
            <div style={{ border: '2px solid #1abc9c', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1abc9c' }}>
                <SvgIcon iconName="duo-video" sizeName="1x" />
                For Conversational/Video
              </h4>
              <p>Consider multimodal only when audio/visual add clear value; address privacy/compliance</p>
            </div>
            <div style={{ border: '2px solid #e74c3c', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e74c3c' }}>
                <SvgIcon iconName="duo-gear" sizeName="1x" />
                Operationalize
              </h4>
              <p>Add calibration, drift monitoring, bias checks. Define re-training cadence based on domain volatility</p>
            </div>
            <div style={{ border: '2px solid #f39c12', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12' }}>
                <SvgIcon iconName="duo-shield-halved" sizeName="1x" />
                Guardrails for LLMs
              </h4>
              <p>Constrain outputs, cache results, log prompts/responses. Establish cost/governance controls</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#27AE60',
      notes: 'Best practices: Start simple, scale judiciously, operationalize with monitoring, implement guardrails for production'
    },
    {
      id: 12,
      title: 'Implementation Roadmap',
      content: (
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
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
                <h4 style={{ margin: '0 0 8px 0' }}>Select 2-3 Candidates</h4>
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
                <h4 style={{ margin: '0 0 8px 0' }}>Run Pilot Project</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>Test performance on your domain-specific data with consistent evaluation metrics</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <div style={{ 
                backgroundColor: '#2ecc71', 
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
                <h4 style={{ margin: '0 0 8px 0' }}>Optimize & Deploy</h4>
                <p style={{ margin: 0, opacity: 0.9 }}>Fine-tune performance, establish monitoring, and implement serving infrastructure</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '50px', padding: '20px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.1em', margin: 0 }}>
              <strong>⚖️ Remember:</strong> Balance accuracy, explainability, cost, and maintenance based on your specific use case
            </p>
          </div>
        </div>
      ),
      backgroundColor: '#16A085',
      notes: 'Three-step roadmap: Select candidates, pilot test with domain data, then optimize and deploy with monitoring'
    },
    {
      id: 13,
      title: 'Thank You!',
      content: (
        <div>
          <h2 style={{ marginBottom: '40px' }}>15 Sentiment Analysis Techniques</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '40px' }}>
            <SvgIcon iconName="duo-face-smile" sizeName="4x" style={{ color: '#2ecc71' }} />
            <SvgIcon iconName="duo-heart" sizeName="4x" style={{ color: '#e74c3c' }} />
            <SvgIcon iconName="duo-star" sizeName="4x" style={{ color: '#f39c12' }} />
          </div>
          <div style={{ fontSize: '1.1em', lineHeight: '1.8' }}>
            <p>From traditional lexicon-based approaches</p>
            <p>to cutting-edge transformer models</p>
            <p>and multimodal analysis</p>
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
};

