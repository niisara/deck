import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const featureExtractionDeck: Deck = {
  id: 'feature-extraction-techniques',
  name: '13 Feature Extraction Techniques',
  description: 'Cheat sheets for Traditional, Static, Contextual, and Modern Sentence Encoders',
  category: 'NLP',
  theme: 'night',
  slides: [],
  slideGroups: [
    {
      id: 'introduction',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          title: '13 Feature Extraction Techniques',
          content: (
            <div style={{ textAlign: 'left', padding: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '2rem', color: '#e7ad52' }}>
            <SvgIcon iconName="duo-wand-magic-sparkles" sizeName="2xl" style={{ marginRight: '1rem' }} />
            13 Feature Extraction Techniques
          </div>
          <div style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#1b91e0' }}>
            <SvgIcon iconName="duo-diagram-project" sizeName="xl" style={iconStyle} />
            Cheat sheets for Traditional, Static, Contextual, and Modern Sentence Encoders
          </div>
          <div style={{ fontSize: '1.2rem', color: '#9b59b6', marginTop: '3rem', lineHeight: '2' }}>
            <div style={{ marginBottom: '1rem' }}>
              <SvgIcon iconName="duo-cube" sizeName="lg" style={iconStyle} />
              <strong>Traditional count-based methods</strong>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <SvgIcon iconName="duo-layer-group" sizeName="lg" style={iconStyle} />
              <strong>Static word/document embeddings</strong>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <SvgIcon iconName="duo-brain" sizeName="lg" style={iconStyle} />
              <strong>Contextual token embeddings</strong>
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <SvgIcon iconName="duo-rocket" sizeName="lg" style={iconStyle} />
              <strong>Modern sentence encoders</strong>
            </div>
          </div>
        </div>
      ),
      notes: 'Title slide introducing the 13 feature extraction techniques'
    },
    {
      id: 2,
      title: 'Overview',
      content: (
        <div style={{ fontSize: '0.95rem', lineHeight: '1.8', textAlign: 'left' }}>
          <div style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '2rem', color: '#e7ad52' }}>
            <SvgIcon iconName="duo-sitemap" sizeName="2xl" style={iconStyle} />
            <strong>Overview</strong>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(231, 173, 82, 0.2)', padding: '1.2rem', borderRadius: '10px' }}>
              <div style={{ color: '#e7ad52', marginBottom: '1rem', fontSize: '1.2rem' }}>
                <SvgIcon iconName="duo-table" sizeName="xl" style={iconStyle} />
                <strong>Traditional (count-based)</strong>
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-1" sizeName="sm" style={iconStyle} />
                Bag of Words (BoW)
              </div>
              <div>
                <SvgIcon iconName="duo-2" sizeName="sm" style={iconStyle} />
                TF-IDF
              </div>
            </div>

            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1.2rem', borderRadius: '10px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '1rem', fontSize: '1.2rem' }}>
                <SvgIcon iconName="duo-layer-group" sizeName="xl" style={iconStyle} />
                <strong>Static embeddings (word/doc level)</strong>
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-3" sizeName="sm" style={iconStyle} />
                Word2Vec (CBOW)
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-4" sizeName="sm" style={iconStyle} />
                Word2Vec (Skip-Gram)
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-5" sizeName="sm" style={iconStyle} />
                GloVe
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-6" sizeName="sm" style={iconStyle} />
                FastText
              </div>
              <div>
                <SvgIcon iconName="duo-7" sizeName="sm" style={iconStyle} />
                Doc2Vec
              </div>
            </div>

            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1.2rem', borderRadius: '10px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '1rem', fontSize: '1.2rem' }}>
                <SvgIcon iconName="duo-brain-circuit" sizeName="xl" style={iconStyle} />
                <strong>Contextual embeddings</strong>
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-8" sizeName="sm" style={iconStyle} />
                ELMo
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-9" sizeName="sm" style={iconStyle} />
                BERT Embeddings
              </div>
              <div>
                <SvgIcon iconName="duo-wand-magic-sparkles" sizeName="sm" style={iconStyle} />
                Sentence-BERT (SBERT)
              </div>
            </div>

            <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1.2rem', borderRadius: '10px' }}>
              <div style={{ color: '#2ecc71', marginBottom: '1rem', fontSize: '1.2rem' }}>
                <SvgIcon iconName="duo-rocket" sizeName="xl" style={iconStyle} />
                <strong>Modern sentence encoders</strong>
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-atom" sizeName="sm" style={iconStyle} />
                Universal Sentence Encoder (USE)
              </div>
              <div style={{ marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-bolt" sizeName="sm" style={iconStyle} />
                E5 Embeddings
              </div>
              <div>
                <SvgIcon iconName="duo-star" sizeName="sm" style={iconStyle} />
                GTE Embeddings
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(231, 173, 82, 0.15)', borderRadius: '8px', textAlign: 'left' }}>
            <SvgIcon iconName="duo-info-circle" sizeName="lg" style={iconStyle} />
            <strong>Format per slide:</strong> Model Type • Representation Style • Best Use Case • Strengths • Weaknesses • Notes
          </div>
        </div>
      ),
      notes: 'Overview of all 13 techniques organized by category'
        }
      ]
    },
    {
      id: 'technique-1',
      title: '1) Bag of Words (BoW)',
      slides: [
        {
          id: 3,
          title: '1) Bag of Words (BoW)',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#e7ad52' }}>
                <SvgIcon iconName="duo-bag-shopping" sizeName="2xl" style={iconStyle} />
                <strong>1) Bag of Words (BoW)</strong>
              </div>
              
              <div style={{ background: 'rgba(231, 173, 82, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.95rem' }}>
                <SvgIcon iconName="duo-quote-left" sizeName="lg" style={iconStyle} />
                Count-based vectorization: "The cat sat on the mat" → [1,1,1,1,2,0,...]
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#1b91e0', marginBottom: '0.5rem', fontSize: '1rem' }}>
                    <SvgIcon iconName="duo-tag" sizeName="lg" style={iconStyle} />
                    <strong>Model Type</strong>
                  </div>
                  <div>Count-based vectorization (classic IR/NLP)</div>
                </div>
                <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#9b59b6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                    <SvgIcon iconName="duo-cube" sizeName="lg" style={iconStyle} />
                    <strong>Representation Style</strong>
                  </div>
                  <div>Sparse vector of token counts/binary; optional n-grams</div>
                </div>
              </div>

              <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ color: '#2ecc71', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                  <strong>Best Use Case</strong>
                </div>
                <div>Quick baselines, short-text classification with linear models, topic cues</div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                    <li>Simple</li>
                    <li>Interpretable</li>
                    <li>Fast to compute</li>
                    <li>Works with many classical ML models</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                    <li>Ignores word order/context</li>
                    <li>High dimensionality/sparsity</li>
                    <li>Poor synonym handling</li>
                    <li>OOV sensitivity</li>
                  </ul>
                </div>
              </div>

              <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ color: '#3498db', marginBottom: '0.5rem' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
                  <strong>Notes</strong>
                </div>
                <div>Consider stopword removal, n-gram ranges, hashing trick to cap dimensions</div>
              </div>
            </div>
      ),
      notes: 'Bag of Words - traditional count-based approach'
        }
      ]
    },
    {
      id: 'technique-2',
      title: '2) TF-IDF',
      slides: [
        {
          id: 4,
          title: '2) TF-IDF',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#e7ad52' }}>
            <SvgIcon iconName="duo-scale-balanced" sizeName="2xl" style={iconStyle} />
            <strong>2) TF-IDF</strong>
          </div>
          
          <div style={{ background: 'rgba(231, 173, 82, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '0.9rem' }}>
            <SvgIcon iconName="duo-calculator" sizeName="lg" style={iconStyle} />
            <strong>Term Frequency × Inverse Document Frequency</strong>
            <div style={{ marginTop: '0.5rem', fontFamily: 'monospace' }}>
              TF-IDF = TF(t,d) × IDF(t)<br/>
              Where: IDF(t) = log(N/df<sub>t</sub>)
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="lg" style={iconStyle} />
                <strong>Model Type</strong>
              </div>
              <div>Count-based with global weighting</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="lg" style={iconStyle} />
                <strong>Representation Style</strong>
              </div>
              <div>Sparse vectors weighted by TF × IDF</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
              <strong>Best Use Case</strong>
            </div>
            <div>Keyword-driven retrieval/ranking, classic classifiers, feature selection</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#2ecc71', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Down-weights common terms</li>
                <li>Strong IR baseline</li>
                <li>Interpretable</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#e74c3c', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Still sparse</li>
                <li>No semantics/context</li>
                <li>Length sensitivity</li>
                <li>Needs normalization</li>
              </ul>
            </div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <div>Use sublinear TF/log TF, document length normalization, n-grams, pruning min_df/max_df</div>
          </div>
        </div>
      ),
      notes: 'TF-IDF - weighted count-based representation'
        }
      ]
    },
    {
      id: 'technique-3',
      title: '3) Word2Vec (CBOW)',
      slides: [
        {
          id: 5,
          title: '3) Word2Vec (CBOW)',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1b91e0' }}>
            <SvgIcon iconName="duo-arrows-to-circle" sizeName="2xl" style={iconStyle} />
            <strong>3) Word2Vec (CBOW)</strong>
          </div>
          
          <div style={{ background: 'rgba(27, 145, 224, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-diagram-project" sizeName="lg" style={iconStyle} />
              <strong>Continuous Bag of Words (CBOW) Architecture</strong>
            </div>
            <div style={{ fontSize: '0.9rem' }}>
              <SvgIcon iconName="duo-arrow-right" sizeName="sm" style={iconStyle} />
              Predicts center word from surrounding context words
            </div>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontStyle: 'italic' }}>
              Context: "the cat" + "sat" → Target: "on"
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="lg" style={iconStyle} />
                <strong>Model Type</strong>
              </div>
              <div>Neural static word embeddings (predict center from context)</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="lg" style={iconStyle} />
                <strong>Representation Style</strong>
              </div>
              <div>Dense word vectors (typically 100–300d)</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
              <strong>Best Use Case</strong>
            </div>
            <div>Large corpora; fast training; syntactic similarity features</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#2ecc71', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Efficient</li>
                <li>Good for frequent words</li>
                <li>Captures local context</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#e74c3c', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>One vector per word</li>
                <li>Limited global info</li>
                <li>OOV issues</li>
              </ul>
            </div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <div>Use negative sampling; window ~5; pre-trained models available</div>
          </div>
        </div>
      ),
      notes: 'Word2Vec CBOW - predict center word from context'
        }
      ]
    },
    {
      id: 'technique-4',
      title: '4) Word2Vec (Skip-Gram)',
      slides: [
        {
          id: 6,
          title: '4) Word2Vec (Skip-Gram)',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1b91e0' }}>
            <SvgIcon iconName="duo-arrows-from-circle" sizeName="2xl" style={iconStyle} />
            <strong>4) Word2Vec (Skip-Gram)</strong>
          </div>
          
          <div style={{ background: 'rgba(27, 145, 224, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-diagram-project" sizeName="lg" style={iconStyle} />
              <strong>Skip-Gram: Predict context words from a target word</strong>
            </div>
            <div style={{ fontSize: '0.9rem' }}>
              <SvgIcon iconName="duo-arrow-right" sizeName="sm" style={iconStyle} />
              Target → Context (opposite of CBOW)
            </div>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontStyle: 'italic' }}>
              Better for rare words and capturing semantic relationships
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="lg" style={iconStyle} />
                <strong>Model Type</strong>
              </div>
              <div>Neural static word embeddings - predict context from center</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="lg" style={iconStyle} />
                <strong>Representation Style</strong>
              </div>
              <div>Dense word vectors (100–300d)</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
              <strong>Best Use Case</strong>
            </div>
            <div>Semantic relations; better for rare words; analogy tasks</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#2ecc71', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Handles rare words better</li>
                <li>Strong semantic structure</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#e74c3c', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Slower than CBOW</li>
                <li>Still static (no context-specific senses)</li>
                <li>OOV issues</li>
              </ul>
            </div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <div>Negative sampling or hierarchical softmax; tune window and min_count</div>
          </div>
        </div>
      ),
      notes: 'Word2Vec Skip-Gram - predict context from center word'
        }
      ]
    },
    {
      id: 'technique-5',
      title: '5) GloVe',
      slides: [
        {
          id: 7,
          title: '5) GloVe',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1b91e0' }}>
            <SvgIcon iconName="duo-globe" sizeName="2xl" style={iconStyle} />
            <strong>5) GloVe</strong>
          </div>
          
          <div style={{ background: 'rgba(27, 145, 224, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-network-wired" sizeName="lg" style={iconStyle} />
              <strong>Global Vectors for Word Representation</strong>
            </div>
            <div style={{ fontSize: '0.9rem' }}>
              <SvgIcon iconName="duo-chart-network" sizeName="sm" style={iconStyle} />
              Trained on word co-occurrence statistics
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="lg" style={iconStyle} />
                <strong>Model Type</strong>
              </div>
              <div>Static word embeddings trained on global co-occurrence</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="lg" style={iconStyle} />
                <strong>Representation Style</strong>
              </div>
              <div>Dense word vectors (50–300d typical)</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
              <strong>Best Use Case</strong>
            </div>
            <div>Plug-and-play static embeddings; low-resource settings</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#2ecc71', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Uses global statistics</li>
                <li>Fast to use (pretrained sets)</li>
                <li>Good semantic structure</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#e74c3c', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Static (no context)</li>
                <li>OOV limitations</li>
                <li>Domain mismatch risk</li>
              </ul>
            </div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <div>Choose domain-appropriate pretrained set (Wiki, Common Crawl)</div>
          </div>
        </div>
      ),
      notes: 'GloVe - global vectors using co-occurrence statistics'
        }
      ]
    },
    {
      id: 'technique-6',
      title: '6) FastText',
      slides: [
        {
          id: 8,
          title: '6) FastText',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1b91e0' }}>
            <SvgIcon iconName="duo-bolt-lightning" sizeName="2xl" style={iconStyle} />
            <strong>6) FastText</strong>
          </div>
          
          <div style={{ background: 'rgba(27, 145, 224, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-text" sizeName="lg" style={iconStyle} />
              <strong>Subword-enriched embeddings</strong>
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <SvgIcon iconName="duo-scissors" sizeName="sm" style={iconStyle} />
              Word: "playing" → Subwords: &lt;pla, play, layi, ayin, ying, ing&gt;
            </div>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontStyle: 'italic' }}>
              Even unseen words can be embedded using character n-grams
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="lg" style={iconStyle} />
                <strong>Model Type</strong>
              </div>
              <div>Static word embeddings with subword n-grams</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="lg" style={iconStyle} />
                <strong>Representation Style</strong>
              </div>
              <div>Dense word vectors enriched by character n-grams</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
              <strong>Best Use Case</strong>
            </div>
            <div>Morphologically rich languages, OOV handling</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#2ecc71', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Handles OOV via subwords</li>
                <li>Better morphology</li>
                <li>Stronger for rare/inflected forms</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#e74c3c', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Larger models</li>
                <li>Still context-independent</li>
              </ul>
            </div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <div>Good default for multilingual tasks, pick aligned vectors if cross-lingual</div>
          </div>
        </div>
      ),
      notes: 'FastText - subword embeddings for OOV handling'
        }
      ]
    },
    {
      id: 'technique-7',
      title: '7) Doc2Vec',
      slides: [
        {
          id: 9,
          title: '7) Doc2Vec',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#1b91e0' }}>
            <SvgIcon iconName="duo-file-lines" sizeName="2xl" style={iconStyle} />
            <strong>7) Doc2Vec</strong>
          </div>
          
          <div style={{ background: 'rgba(27, 145, 224, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-folder-open" sizeName="lg" style={iconStyle} />
              <strong>Document Vectors (Paragraph Vectors)</strong>
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <SvgIcon iconName="duo-diagram-project" sizeName="sm" style={iconStyle} />
              <strong>PV-DM:</strong> Predict word from document and context words
            </div>
            <div style={{ fontSize: '0.85rem' }}>
              <SvgIcon iconName="duo-diagram-project" sizeName="sm" style={iconStyle} />
              <strong>PV-DBOW:</strong> Predict words from document only
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="lg" style={iconStyle} />
                <strong>Model Type</strong>
              </div>
              <div>Static document/paragraph embeddings using PV-DM and PV-DBOW</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="lg" style={iconStyle} />
                <strong>Representation Style</strong>
              </div>
              <div>Dense vectors per document/paragraph</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
              <strong>Best Use Case</strong>
            </div>
            <div>Small/medium datasets needing fixed document vectors without transformers</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#2ecc71', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Unsupervised doc-level representations</li>
                <li>Simple pipeline</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#e74c3c', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Lags behind modern encoders</li>
                <li>Sensitive to training setup</li>
              </ul>
            </div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <div>Tune DM vs DBOW; requires inference for unseen docs</div>
          </div>
        </div>
      ),
      notes: 'Doc2Vec - document-level embeddings'
        }
      ]
    },
    {
      id: 'technique-8',
      title: '8) ELMo',
      slides: [
        {
          id: 10,
          title: '8) ELMo',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#9b59b6' }}>
            <SvgIcon iconName="duo-brain" sizeName="2xl" style={iconStyle} />
            <strong>8) ELMo</strong>
          </div>
          
          <div style={{ background: 'rgba(155, 89, 182, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-arrows-split-up-and-left" sizeName="lg" style={iconStyle} />
              <strong>Bidirectional Language Model Architecture</strong>
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <SvgIcon iconName="duo-arrow-right" sizeName="sm" style={iconStyle} />
              Forward LSTM → + Backward LSTM ← over Character CNN
            </div>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
              <SvgIcon iconName="duo-layer-group" sizeName="sm" style={iconStyle} />
              Weighted Layer Combination → Contextual Embedding
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="lg" style={iconStyle} />
                <strong>Model Type</strong>
              </div>
              <div>Contextual word embeddings using BiLSTM language models</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="lg" style={iconStyle} />
                <strong>Representation Style</strong>
              </div>
              <div>Context-sensitive token vectors; aggregate to sentence if needed</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
              <strong>Best Use Case</strong>
            </div>
            <div>Token-level tasks (NER, POS), earlier-contextual baselines</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#2ecc71', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Character-aware</li>
                <li>Captures polysemy</li>
                <li>Improved sequence labeling over static</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#e74c3c', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Heavier than static</li>
                <li>Outperformed by transformers on many tasks</li>
              </ul>
            </div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <div>2-layer BiLSTM over char CNN; 1024d typical; combine layers via learned weights</div>
          </div>
        </div>
      ),
      notes: 'ELMo - contextual embeddings with BiLSTM'
        }
      ]
    },
    {
      id: 'technique-9',
      title: '9) BERT Embeddings',
      slides: [
        {
          id: 11,
          title: '9) BERT Embeddings',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#9b59b6' }}>
            <SvgIcon iconName="duo-brain-circuit" sizeName="2xl" style={iconStyle} />
            <strong>9) BERT Embeddings</strong>
          </div>
          
          <div style={{ background: 'rgba(155, 89, 182, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-grid" sizeName="lg" style={iconStyle} />
              <strong>Contextual token representations from bidirectional Transformer</strong>
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <SvgIcon iconName="duo-brackets-square" sizeName="sm" style={iconStyle} />
              Input: [CLS] I love machine learning [SEP]
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.3rem' }}>
              <SvgIcon iconName="duo-arrow-down" sizeName="sm" style={iconStyle} />
              BERT Transformer Layers
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.3rem' }}>
              <SvgIcon iconName="duo-arrow-down" sizeName="sm" style={iconStyle} />
              Output: Contextual vectors for each token or [CLS] for sentence
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="lg" style={iconStyle} />
                <strong>Model Type</strong>
              </div>
              <div>Transformer-based contextual embeddings at token-level</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="lg" style={iconStyle} />
                <strong>Representation Style</strong>
              </div>
              <div>Contextual token vectors; sentence via [CLS] or mean pooling</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
              <strong>Best Use Case</strong>
            </div>
            <div>Feature extraction for downstream models; token tasks</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#2ecc71', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Strong contextualization</li>
                <li>Versatile</li>
                <li>Many pretrained variants</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#e74c3c', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>[CLS] not ideal for similarity out-of-the-box</li>
                <li>Computationally heavier</li>
              </ul>
            </div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <div>For sentence similarity prefer SBERT-style pooling/finetuning</div>
          </div>
        </div>
      ),
      notes: 'BERT Embeddings - transformer-based contextual representations'
        }
      ]
    },
    {
      id: 'technique-10',
      title: '10) Sentence-BERT (SBERT)',
      slides: [
        {
          id: 12,
          title: '10) Sentence-BERT (SBERT)',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#9b59b6' }}>
            <SvgIcon iconName="duo-code-compare" sizeName="2xl" style={iconStyle} />
            <strong>10) Sentence-BERT (SBERT)</strong>
          </div>
          
          <div style={{ background: 'rgba(155, 89, 182, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-code-branch" sizeName="lg" style={iconStyle} />
              <strong>Siamese Network Architecture with Shared Weights</strong>
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <SvgIcon iconName="duo-arrows-left-right" sizeName="sm" style={iconStyle} />
              Sentence A & B → Shared BERT/Transformer → Mean Pooling → Embeddings u & v
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.3rem' }}>
              <SvgIcon iconName="duo-calculator" sizeName="sm" style={iconStyle} />
              Cosine Similarity = u·v/(||u||·||v||)
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="lg" style={iconStyle} />
                <strong>Model Type</strong>
              </div>
              <div>Siamese/Triplet fine-tuned transformer for sentence embeddings</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="lg" style={iconStyle} />
                <strong>Representation Style</strong>
              </div>
              <div>Fixed-size sentence vectors (384–768d) via mean pooling</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
              <strong>Best Use Case</strong>
            </div>
            <div>Semantic search, clustering, STS (Semantic Textual Similarity), retrieval</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#2ecc71', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Fast similarity via cosine</li>
                <li>Strong sentence-level semantics</li>
                <li>Many lightweight variants</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#e74c3c', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Domain shift can hurt</li>
                <li>Not optimized for very long context</li>
              </ul>
            </div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <div>Popular models: all-MiniLM-L6-v2, all-mpnet-base-v2; use cosine distance</div>
          </div>
        </div>
      ),
      notes: 'SBERT - siamese network for sentence embeddings'
        }
      ]
    },
    {
      id: 'technique-11',
      title: '11) Universal Sentence Encoder (USE)',
      slides: [
        {
          id: 13,
          title: '11) Universal Sentence Encoder (USE)',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2ecc71' }}>
            <SvgIcon iconName="duo-atom" sizeName="2xl" style={iconStyle} />
            <strong>11) Universal Sentence Encoder (USE)</strong>
          </div>
          
          <div style={{ background: 'rgba(46, 204, 113, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-google" sizeName="lg" style={iconStyle} />
              <strong>Google's Universal Sentence Encoder: Sentences to 512-d vectors</strong>
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <SvgIcon iconName="duo-arrow-right" sizeName="sm" style={iconStyle} />
              Input: Sentences of any length → Encoder (Transformer or DAN) → Output: 512-d fixed vector
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="lg" style={iconStyle} />
                <strong>Model Type</strong>
              </div>
              <div>Transformer/DAN sentence encoder from Google</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="lg" style={iconStyle} />
                <strong>Representation Style</strong>
              </div>
              <div>512-d sentence vectors</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
              <strong>Best Use Case</strong>
            </div>
            <div>Quick plug-in for similarity, clustering, classification baselines</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#2ecc71', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Simple API</li>
                <li>Stable baseline</li>
                <li>Good transfer</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#e74c3c', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Older model trails newer models on MTEB</li>
                <li>Limited customization</li>
              </ul>
            </div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <div>Variants: Transformer vs DAN; multilingual options exist</div>
          </div>
        </div>
      ),
      notes: 'Universal Sentence Encoder - Google\'s sentence embedding model'
        }
      ]
    },
    {
      id: 'technique-12',
      title: '12) E5 Embeddings',
      slides: [
        {
          id: 14,
          title: '12) E5 Embeddings',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2ecc71' }}>
            <SvgIcon iconName="duo-bolt" sizeName="2xl" style={iconStyle} />
            <strong>12) E5 Embeddings</strong>
          </div>
          
          <div style={{ background: 'rgba(46, 204, 113, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-language" sizeName="lg" style={iconStyle} />
              <strong>Multilingual Embedding Model</strong>
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <SvgIcon iconName="duo-message-question" sizeName="sm" style={iconStyle} />
              Query: "query: what is machine learning?"
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.3rem' }}>
              <SvgIcon iconName="duo-file-lines" sizeName="sm" style={iconStyle} />
              Passage: "passage: Machine learning is..."
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <SvgIcon iconName="duo-globe" sizeName="sm" style={iconStyle} />
              Supports 100+ languages: English, Spanish, Chinese, Arabic, and more
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="lg" style={iconStyle} />
                <strong>Model Type</strong>
              </div>
              <div>Contrastively trained multilingual sentence embeddings (e.g., intfloat/multilingual-e5-large, e5-large-v2)</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="lg" style={iconStyle} />
                <strong>Representation Style</strong>
              </div>
              <div>Query/Passage embeddings; 768–1024d typical; cosine similarity</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
              <strong>Best Use Case</strong>
            </div>
            <div>Semantic search, RAG, retrieval, classification features (multilingual)</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#2ecc71', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Strong multilingual performance</li>
                <li>Small/efficient</li>
                <li>Robust zero-shot retrieval</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#e74c3c', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>Requires query/passage prompting consistency</li>
                <li>Re-embedding needed when migrating</li>
              </ul>
            </div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <div>Prefix inputs with "query:" or "passage:"; use cosine metric; batch/token limits apply</div>
          </div>
        </div>
      ),
      notes: 'E5 Embeddings - multilingual contrastive embeddings'
        }
      ]
    },
    {
      id: 'technique-13',
      title: '13) GTE Embeddings',
      slides: [
        {
          id: 15,
          title: '13) GTE Embeddings',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2ecc71' }}>
            <SvgIcon iconName="duo-star" sizeName="2xl" style={iconStyle} />
            <strong>13) GTE Embeddings</strong>
          </div>
          
          <div style={{ background: 'rgba(46, 204, 113, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-expand" sizeName="lg" style={iconStyle} />
              <strong>Long-context transformer++ architecture</strong>
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.5rem' }}>
              <SvgIcon iconName="duo-layer-group" sizeName="sm" style={iconStyle} />
              BERT Transformer Base + RoPE Positional Encoding + GLU Activation
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.3rem' }}>
              <SvgIcon iconName="duo-window-maximize" sizeName="sm" style={iconStyle} />
              Context Window: up to 8k tokens
            </div>
            <div style={{ fontSize: '0.85rem', marginTop: '0.3rem' }}>
              <SvgIcon iconName="duo-cube" sizeName="sm" style={iconStyle} />
              Base: 768d, Large: 1024d
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="lg" style={iconStyle} />
                <strong>Model Type</strong>
              </div>
              <div>Long-context transformer++ sentence embeddings (BERT + RoPE + GLU), English and multilingual variants</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="lg" style={iconStyle} />
                <strong>Representation Style</strong>
              </div>
              <div>CLS-pooled sentence vectors, base 768d, large 1024d, context up to 8k tokens in v1.5</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
              <strong>Best Use Case</strong>
            </div>
            <div>Long-context retrieval/reranking, high MTEB performance within size class</div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#2ecc71', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Strengths</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>SOTA within size tier</li>
                <li>8k context support</li>
                <li>Competitive LoCo scores</li>
                <li>Efficient inference options</li>
              </ul>
            </div>
            <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#e74c3c', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Weaknesses</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li>English-only for some checkpoints</li>
                <li>Larger dims than tiny models</li>
              </ul>
            </div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} />
              <strong>Notes</strong>
            </div>
            <div>Use Alibaba-NLP/gte-*-v1.5, enable unpadding/xformers for speed, cosine similarity, multilingual option: gte-Qwen1.5-7B-instruct</div>
          </div>
        </div>
      ),
      notes: 'GTE Embeddings - long-context SOTA embeddings'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary & Comparison',
      slides: [
        {
          id: 16,
          title: 'Summary & Comparison',
          content: (
            <div style={{ fontSize: '0.8rem', lineHeight: '1.5', textAlign: 'left' }}>
              <div style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '1.5rem', color: '#e7ad52' }}>
                <SvgIcon iconName="duo-table-list" sizeName="2xl" style={iconStyle} />
                <strong>Summary & Comparison</strong>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(231, 173, 82, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e7ad52', marginBottom: '0.8rem', fontSize: '1rem' }}>
                    <SvgIcon iconName="duo-table" sizeName="lg" style={iconStyle} />
                    <strong>Traditional</strong>
                  </div>
                  <div style={{ fontSize: '0.85rem' }}>
                    Sparse, interpretable, no context; best for keyword/ranking/classic ML
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                    <li>BoW, TF-IDF</li>
                    <li>Context-aware: No</li>
                    <li>OOV Handling: None</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#1b91e0', marginBottom: '0.8rem', fontSize: '1rem' }}>
                    <SvgIcon iconName="duo-layer-group" sizeName="lg" style={iconStyle} />
                    <strong>Static word embeddings</strong>
                  </div>
                  <div style={{ fontSize: '0.85rem' }}>
                    Dense word vectors; FastText handles OOV; no context awareness
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                    <li>Word2Vec, GloVe, FastText, Doc2Vec</li>
                    <li>Dimensions: 100-300d</li>
                    <li>FastText: Subword OOV handling</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#9b59b6', marginBottom: '0.8rem', fontSize: '1rem' }}>
                    <SvgIcon iconName="duo-brain-circuit" sizeName="lg" style={iconStyle} />
                    <strong>Contextual embeddings</strong>
                  </div>
                  <div style={{ fontSize: '0.85rem' }}>
                    Token-level context; BERT needs pooling/finetune for sentences
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                    <li>ELMo, BERT, SBERT</li>
                    <li>Context-aware: Yes</li>
                    <li>Dimensions: 384-1024d</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#2ecc71', marginBottom: '0.8rem', fontSize: '1rem' }}>
                    <SvgIcon iconName="duo-rocket" sizeName="lg" style={iconStyle} />
                    <strong>Modern sentence encoders</strong>
                  </div>
                  <div style={{ fontSize: '0.85rem' }}>
                    Fixed-size sentence vectors; best for semantic search/clustering
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                    <li>USE, E5, GTE</li>
                    <li>Dimensions: 512-1024d</li>
                    <li>GTE: 8k context window</li>
                  </ul>
                </div>
              </div>

              <div style={{ background: 'rgba(52, 152, 219, 0.15)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ color: '#3498db', marginBottom: '0.8rem', fontSize: '1rem' }}>
                  <SvgIcon iconName="duo-chart-line" sizeName="lg" style={iconStyle} />
                  <strong>Key Insights by Context Length</strong>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.8rem', fontSize: '0.8rem' }}>
                  <div>
                    <SvgIcon iconName="duo-circle" sizeName="sm" style={iconStyle} />
                    Traditional/Static: N/A
                  </div>
                  <div>
                    <SvgIcon iconName="duo-circle" sizeName="sm" style={iconStyle} />
                    ELMo/BERT/SBERT/USE/E5: 512 tokens
                  </div>
                  <div>
                    <SvgIcon iconName="duo-star" sizeName="sm" style={iconStyle} />
                    GTE: 8192 tokens
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(231, 173, 82, 0.2)', borderRadius: '8px', textAlign: 'left' }}>
                <SvgIcon iconName="duo-compass" sizeName="xl" style={iconStyle} />
                <strong style={{ fontSize: '1rem' }}>Similarity Metric:</strong> All dense embeddings use <strong>Cosine</strong> similarity
              </div>
            </div>
      ),
      notes: 'Summary comparing all 13 techniques by category and characteristics'
        }
      ]
    }
  ]
};

