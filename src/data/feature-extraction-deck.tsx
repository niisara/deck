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
          center: true,
          title: '13 Feature Extraction Techniques',
          content: (
            <div>
          <div style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#1b91e0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <SvgIcon iconName="duo-diagram-project" sizeName="5x" style={{ color: '#2190e0' }} darkModeInvert={true} />
            Cheat sheets for Traditional, Static, Contextual, and Modern Sentence Encoders
          </div>
          <div style={{ fontSize: '1.2rem', color: '#9b59b6', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-cube" sizeName="3x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
              <strong>Traditional count-based methods</strong>
            </div>
            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-layer-group" sizeName="3x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
              <strong>Static word/document embeddings</strong>
            </div>
            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-brain" sizeName="3x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
              <strong>Contextual token embeddings</strong>
            </div>
            <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-rocket" sizeName="3x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
              <strong>Modern sentence encoders</strong>
            </div>
          </div>
          <p><strong>Prepared by:</strong> Nisar A</p>
          <p><strong>Date:</strong> November 7, 2025</p>
          <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
        </div>
      ),
      backgroundColor: '#1a5247',
      notes: ''
    },
    {
      id: 2,
      title: 'Overview',
      content: (
        <div style={{ fontSize: '2rem', lineHeight: '1.8', textAlign: 'left' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div style={{ background: 'rgba(231, 173, 82, 0.2)', padding: '1.2rem', borderRadius: '10px' }}>
              <div style={{ color: '#e7ad52', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="xl" style={{ color: '#e7ad52' }} darkModeInvert={true} />
                <strong>Traditional (count-based)</strong>
              </div>
              <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e7ad52', fontSize: '1.2rem' }}>
                <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>1</span>
                Bag of Words (BoW)
              </div>
              <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e7ad52', fontSize: '1.2rem' }}>
                <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>2</span>
                TF-IDF
              </div>
            </div>

            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1.2rem', borderRadius: '10px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-layer-group" sizeName="xl" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                <strong>Static embeddings (word/doc level)</strong>
              </div>
              <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1b91e0', fontSize: '1.2rem' }}>
                <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>3</span>
                Word2Vec (CBOW)
              </div>
              <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1b91e0', fontSize: '1.2rem' }}>
                <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>4</span>
                Word2Vec (Skip-Gram)
              </div>
              <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1b91e0', fontSize: '1.2rem' }}>
                <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>5</span>
                GloVe
              </div>
              <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1b91e0', fontSize: '1.2rem' }}>
                <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>6</span>
                FastText
              </div>
              <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#1b91e0', fontSize: '1.2rem' }}>
                <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>7</span>
                Doc2Vec
              </div>
            </div>

            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1.2rem', borderRadius: '10px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-brain-circuit" sizeName="xl" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                <strong>Contextual token embeddings</strong>
              </div>
              <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9b59b6', fontSize: '1.2rem' }}>
                <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>8</span>
                ELMo
              </div>
              <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9b59b6', fontSize: '1.2rem' }}>
                <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>9</span>
                BERT Embeddings
              </div>
              <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#9b59b6', fontSize: '1.2rem' }}>
                <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>10</span>
                Sentence-BERT (SBERT)
              </div>
            </div>

            <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1.2rem', borderRadius: '10px' }}>
              <div style={{ color: '#2ecc71', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-rocket" sizeName="xl" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                <strong>Modern sentence encoders</strong>
              </div>
              <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2ecc71', fontSize: '1.2rem' }}>
                <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>11</span>
                Universal Sentence Encoder (USE)
              </div>
              <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2ecc71', fontSize: '1.2rem' }}>
                <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>12</span>
                E5 Embeddings
              </div>
              <div style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2ecc71', fontSize: '1.2rem' }}>
                <span style={{ fontSize: '1.2em', fontWeight: 'bold' }}>13</span>
                GTE Embeddings
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(231, 173, 82, 0.15)', borderRadius: '8px', textAlign: 'left', fontSize: '1.2rem' }}>
            <SvgIcon iconName="duo-info-circle" sizeName="lg" style={iconStyle} darkModeInvert={true} />
            <strong>Format per slide:</strong> Model Type • Representation Style • Best Use Case • Strengths • Weaknesses • Notes
          </div>
        </div>
      ),
      backgroundColor: '#1a5247',
      notes: ''
        }
      ]
    },
    {
      id: 'technique-1',
      title: '1) Bag of Words (BoW) — Cheat Sheet',
      slides: [
        {
          id: 3,
          title: '1) Bag of Words (BoW) — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ background: 'rgba(231, 173, 82, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-quote-left" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                Count-based vectorization: "The cat sat on the mat" → [1,1,1,1,2,0,...]
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                    <strong>Model Type</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Count-based vectorization (classic IR/NLP)</div>
                </div>
                <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                    <strong>Representation Style</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Sparse vector of token counts/binary; optional n-grams</div>
                </div>
              </div>

              <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                  <strong>Best Use Case</strong>
                </div>
                <div style={{ fontSize: '1.2rem' }}>Quick baselines, short-text classification with linear models, topic cues</div>
              </div>

              <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
                  <strong>Notes</strong>
                </div>
                <div style={{ fontSize: '1.2rem' }}>Consider stopword removal, n-gram ranges, hashing trick to cap dimensions</div>
              </div>
            </div>
      ),
      backgroundColor: '#1a1a52',
      notes: ''
        },
        {
          id: 4,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px',  color: '#81c784' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> 
                      <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Simple</li>
                    <li>Interpretable</li>
                    <li>Fast to compute</li>
                    <li>Works with many classical ML models</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> 
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Ignores word order/context</li>
                    <li>High dimensionality/sparsity</li>
                    <li>Poor synonym handling</li>
                    <li>OOV sensitivity</li>
                  </ul>
                </div>
              </div>
            </div>
      ),
      backgroundColor: '#1a1a52',
      notes: ''
        }
      ]
    },
    {
      id: 'technique-2',
      title: '2) TF-IDF — Cheat Sheet',
      slides: [
        {
          id: 5,
          title: '2) TF-IDF — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
          <div style={{ background: 'rgba(231, 173, 82, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '1rem' }}>
            <SvgIcon iconName="duo-calculator" sizeName="lg" style={iconStyle} darkModeInvert={true} />
            <strong>Term Frequency × Inverse Document Frequency</strong>
            <div style={{ marginTop: '0.5rem', fontFamily: 'monospace' }}>
              TF-IDF = TF(t,d) × IDF(t)<br/>
              Where: TF(t,d) = frequency of term t in document d IDF(t) = log(N/dft)
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                <strong>Model Type</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Count-based with global weighting</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                <strong>Representation Style</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Sparse vectors weighted by TF × IDF</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
              <strong>Best Use Case</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Keyword-driven retrieval/ranking, classic classifiers, feature selection</div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
              <strong>Notes</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Use sublinear TF/log TF, document length normalization, n-grams, pruning min_df/max_df</div>
          </div>
        </div>
      ),
      backgroundColor: '#521a49',
      notes: ''
        },
        {
          id: 6,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px',  color: '#81c784' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> 
                      <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Down-weights common terms</li>
                    <li>Strong IR baseline</li>
                    <li>Interpretable</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> 
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Still sparse</li>
                    <li>No semantics/context</li>
                    <li>Length sensitivity</li>
                    <li>Needs normalization</li>
                  </ul>
                </div>
              </div>
            </div>
      ),
      backgroundColor: '#521a49',
      notes: ''
        }
      ]
    },
    {
      id: 'technique-3',
      title: '3) Word2Vec (CBOW) — Cheat Sheet',
      slides: [
        {
          id: 7,
          title: '3) Word2Vec (CBOW) — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
          <div style={{ background: 'rgba(27, 145, 224, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-diagram-project" sizeName="lg" darkModeInvert={true} />
              <strong>Continuous Bag of Words (CBOW) Architecture</strong>
            </div>
            <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-arrow-right" sizeName="sm" darkModeInvert={true} />
              Predicts center word from surrounding context words
            </div>
            <div style={{ marginTop: '0.5rem', fontSize: '1rem', fontStyle: 'italic' }}>
              Context: "the cat" + "sat" → Target: "on"
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                <strong>Model Type</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Neural static word embeddings (predict center from context)</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                <strong>Representation Style</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Dense word vectors (typically 100–300d)</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
              <strong>Best Use Case</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Large corpora; fast training; syntactic similarity features</div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
              <strong>Notes</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Use negative sampling; window ~5; pre-trained models available</div>
          </div>
        </div>
      ),
      backgroundColor: '#52521a',
      notes: ''
        },
        {
          id: 8,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px',  color: '#81c784' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> 
                      <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Efficient</li>
                    <li>Good for frequent words</li>
                    <li>Captures local context</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> 
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>One vector per word</li>
                    <li>Limited global info</li>
                    <li>OOV issues</li>
                  </ul>
                </div>
              </div>
            </div>
      ),
      backgroundColor: '#52521a',
      notes: ''
        }
      ]
    },
    {
      id: 'technique-4',
      title: '4) Word2Vec (Skip-Gram) — Cheat Sheet',
      slides: [
        {
          id: 9,
          title: '4) Word2Vec (Skip-Gram) — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
          <div style={{ background: 'rgba(27, 145, 224, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-diagram-project" sizeName="lg" darkModeInvert={true} />
              <strong>Skip-Gram: Predict context words from a target word</strong>
            </div>
            <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-arrow-right" sizeName="sm" darkModeInvert={true} />
              Target → Context (opposite of CBOW)
            </div>
            <div style={{ marginTop: '0.5rem', fontSize: '1rem', fontStyle: 'italic' }}>
              Better for rare words and capturing semantic relationships
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                <strong>Model Type</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Neural static word embeddings - predict context from center</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                <strong>Representation Style</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Dense word vectors (100–300d)</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
              <strong>Best Use Case</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Semantic relations; better for rare words; analogy tasks</div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
              <strong>Notes</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Negative sampling or hierarchical softmax; tune window and min_count</div>
          </div>
        </div>
      ),
      backgroundColor: '#1a5242',
      notes: ''
        },
        {
          id: 10,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px',  color: '#81c784' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> 
                      <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Handles rare words better</li>
                    <li>Strong semantic structure</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> 
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Slower than CBOW</li>
                    <li>Still static (no context-specific senses)</li>
                    <li>OOV issues</li>
                  </ul>
                </div>
              </div>
            </div>
      ),
      backgroundColor: '#1a5242',
      notes: ''
        }
      ]
    },
    {
      id: 'technique-5',
      title: '5) GloVe — Cheat Sheet',
      slides: [
        {
          id: 11,
          title: '5) GloVe — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
          <div style={{ background: 'rgba(27, 145, 224, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-network-wired" sizeName="lg" darkModeInvert={true} />
              <strong>Global Vectors for Word Representation</strong>
            </div>
            <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-chart-network" sizeName="sm" darkModeInvert={true} />
              Trained on word co-occurrence statistics
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                <strong>Model Type</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Static word embeddings trained on global co-occurrence</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                <strong>Representation Style</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Dense word vectors (50–300d typical)</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
              <strong>Best Use Case</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Plug-and-play static embeddings; low-resource settings</div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
              <strong>Notes</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Choose domain-appropriate pretrained set (Wiki, Common Crawl)</div>
          </div>
        </div>
      ),
      backgroundColor: '#521a1a',
      notes: ''
        },
        {
          id: 12,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px',  color: '#81c784' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> 
                      <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Uses global statistics</li>
                    <li>Fast to use (pretrained sets)</li>
                    <li>Good semantic structure</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> 
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Static (no context)</li>
                    <li>OOV limitations</li>
                    <li>Domain mismatch risk</li>
                  </ul>
                </div>
              </div>
            </div>
      ),
      backgroundColor: '#521a1a',
      notes: ''
        }
      ]
    },
    {
      id: 'technique-6',
      title: '6) FastText — Cheat Sheet',
      slides: [
        {
          id: 13,
          title: '6) FastText — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
          <div style={{ background: 'rgba(27, 145, 224, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-text" sizeName="lg" darkModeInvert={true} />
              <strong>Subword-enriched embeddings</strong>
            </div>
            <div style={{ fontSize: '1rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-scissors" sizeName="sm" darkModeInvert={true} />
              Word: "playing" → Subwords: &lt;pla, play, layi, ayin, ying, ing&gt; → Vector: Sum of word + subword vectors
            </div>
            <div style={{ marginTop: '0.5rem', fontSize: '1rem', fontStyle: 'italic' }}>
              Even unseen words can be embedded using character n-grams
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                <strong>Model Type</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Static word embeddings with subword n-grams</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                <strong>Representation Style</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Dense word vectors enriched by character n-grams</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
              <strong>Best Use Case</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Morphologically rich languages, OOV handling</div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
              <strong>Notes</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Good default for multilingual tasks, pick aligned vectors if cross-lingual</div>
          </div>
        </div>
      ),
      backgroundColor: '#521a4c',
      notes: ''
        },
        {
          id: 14,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px',  color: '#81c784' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> 
                      <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Handles OOV via subwords</li>
                    <li>Better morphology</li>
                    <li>Stronger for rare/inflected forms</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> 
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Larger models</li>
                    <li>Still context-independent</li>
                  </ul>
                </div>
              </div>
            </div>
      ),
      backgroundColor: '#521a4c',
      notes: ''
        }
      ]
    },
    {
      id: 'technique-7',
      title: '7) Doc2Vec — Cheat Sheet',
      slides: [
        {
          id: 15,
          title: '7) Doc2Vec — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
          <div style={{ background: 'rgba(27, 145, 224, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-folder-open" sizeName="lg" darkModeInvert={true} />
              <strong>Document Vectors (Paragraph Vectors)</strong>
            </div>
            <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-diagram-project" sizeName="sm" darkModeInvert={true} />
              <strong>PV-DM:</strong> Predict word from document and context words
            </div>
            <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-diagram-project" sizeName="sm" darkModeInvert={true} />
              <strong>PV-DBOW:</strong> Predict words from document only
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                <strong>Model Type</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Static document/paragraph embeddings using PV-DM and PV-DBOW</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                <strong>Representation Style</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Dense vectors per document/paragraph</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
              <strong>Best Use Case</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Small/medium datasets needing fixed document vectors without transformers</div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
              <strong>Notes</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Tune DM vs DBOW; requires inference for unseen docs</div>
          </div>
        </div>
      ),
      backgroundColor: '#1e521a',
      notes: ''
        },
        {
          id: 16,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px',  color: '#81c784' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> 
                      <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Unsupervised doc-level representations</li>
                    <li>Simple pipeline</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> 
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Lags behind modern encoders</li>
                    <li>Sensitive to training setup</li>
                  </ul>
                </div>
              </div>
            </div>
      ),
      backgroundColor: '#1e521a',
      notes: ''
        }
      ]
    },
    {
      id: 'technique-8',
      title: '8) ELMo — Cheat Sheet',
      slides: [
        {
          id: 17,
          title: '8) ELMo — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
          <div style={{ background: 'rgba(155, 89, 182, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-split" sizeName="lg" darkModeInvert={true} />
              <strong>Bidirectional Language Model Architecture</strong>
            </div>
            <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-arrow-right" sizeName="sm" darkModeInvert={true} />
              Forward LSTM → Forward LSTM → Forward LSTM
            </div>
            <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-arrow-right" sizeName="sm" darkModeInvert={true} />
              Backward LSTM ← Backward LSTM ← Backward LSTM
            </div>
            <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-layer-group" sizeName="sm" darkModeInvert={true} />
              Weighted Layer Combination → Contextual Embedding
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                <strong>Model Type</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Contextual word embeddings using BiLSTM language models</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                <strong>Representation Style</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Context-sensitive token vectors; aggregate to sentence if needed</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
              <strong>Best Use Case</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Token-level tasks (NER, POS), earlier-contextual baselines</div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
              <strong>Notes</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>2-layer BiLSTM over char CNN; 1024d typical; combine layers via learned weights</div>
          </div>
        </div>
      ),
      backgroundColor: '#521a51',
      notes: ''
        },
        {
          id: 18,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px',  color: '#81c784' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> 
                      <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Character-aware</li>
                    <li>Captures polysemy</li>
                    <li>Improved sequence labeling over static</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> 
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Heavier than static</li>
                    <li>Outperformed by transformers on many tasks</li>
                  </ul>
                </div>
              </div>
            </div>
      ),
      backgroundColor: '#521a51',
      notes: ''
        }
      ]
    },
    {
      id: 'technique-9',
      title: '9) BERT Embeddings — Cheat Sheet',
      slides: [
        {
          id: 19,
          title: '9) BERT Embeddings — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
          <div style={{ background: 'rgba(155, 89, 182, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-gears" sizeName="lg" darkModeInvert={true} />
              <strong>Contextual token representations from bidirectional Transformer</strong>
            </div>
            <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-brackets-square" sizeName="sm" darkModeInvert={true} />
              Input: [CLS] I love machine learning [SEP]
            </div>
            <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-arrow-right" sizeName="sm" darkModeInvert={true} />
              BERT Transformer Layers
            </div>
            <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-arrow-right" sizeName="sm" darkModeInvert={true} />
              Output: Contextual vectors for each token or [CLS] for sentence
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                <strong>Model Type</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Transformer-based contextual embeddings at token-level</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                <strong>Representation Style</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Contextual token vectors; sentence via [CLS] or mean pooling</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
              <strong>Best Use Case</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Feature extraction for downstream models; token tasks</div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
              <strong>Notes</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>For sentence similarity prefer SBERT-style pooling/finetuning</div>
          </div>
        </div>
      ),
      backgroundColor: '#523e1a',
      notes: ''
        },
        {
          id: 20,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px',  color: '#81c784' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> 
                      <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Strong contextualization</li>
                    <li>Versatile</li>
                    <li>Many pretrained variants</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> 
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>[CLS] not ideal for similarity out-of-the-box</li>
                    <li>Computationally heavier</li>
                  </ul>
                </div>
              </div>
            </div>
      ),
      backgroundColor: '#523e1a',
      notes: ''
        }
      ]
    },
    {
      id: 'technique-10',
      title: '10) Sentence-BERT (SBERT) — Cheat Sheet',
      slides: [
        {
          id: 21,
          title: '10) Sentence-BERT (SBERT) — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
          <div style={{ background: 'rgba(155, 89, 182, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-code-branch" sizeName="lg" darkModeInvert={true} />
              <strong>Siamese Network Architecture with Shared Weights</strong>
            </div>
            <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-arrow-right" sizeName="sm" darkModeInvert={true} />
              Sentence A & B → Shared BERT/Transformer → Mean Pooling → Embeddings u & v
            </div>
            <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-arrow-right" sizeName="sm" darkModeInvert={true} />
              Cosine Similarity = u·v/(||u||·||v||)
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                <strong>Model Type</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Siamese/Triplet fine-tuned transformer for sentence embeddings</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                <strong>Representation Style</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Fixed-size sentence vectors (384–768d) via mean pooling</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
              <strong>Best Use Case</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Semantic search, clustering, STS (Semantic Textual Similarity), retrieval</div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
              <strong>Notes</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Popular models: all-MiniLM-L6-v2, all-mpnet-base-v2; use cosine distance</div>
          </div>
        </div>
      ),
      backgroundColor: '#521a3a',
      notes: ''
        },
        {
          id: 22,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px',  color: '#81c784' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> 
                      <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Fast similarity via cosine</li>
                    <li>Strong sentence-level semantics</li>
                    <li>Many lightweight variants</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> 
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Domain shift can hurt</li>
                    <li>Not optimized for very long context</li>
                  </ul>
                </div>
              </div>
            </div>
      ),
      backgroundColor: '#521a3a',
      notes: ''
        }
      ]
    },
    {
      id: 'technique-11',
      title: '11) Universal Sentence Encoder (USE) — Cheat Sheet',
      slides: [
        {
          id: 23,
          title: '11) Universal Sentence Encoder (USE) — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
          <div style={{ background: 'rgba(46, 204, 113, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-gears" sizeName="lg" darkModeInvert={true} />
              <strong>Google's Universal Sentence Encoder: Sentences to 512-d vectors</strong>
            </div>
            <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-arrow-right" sizeName="sm" darkModeInvert={true} />
              Input: Sentences of any length → Encoder (Transformer or DAN Architecture) → Output: 512-dimensional fixed-length vector
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="lg" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                <strong>Model Type</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Transformer/DAN sentence encoder from Google</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="lg" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                <strong>Representation Style</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>512-d sentence vectors</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="lg" style={{ color: '#2ecc71' }} darkModeInvert={true} />
              <strong>Best Use Case</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Quick plug-in for similarity, clustering, classification baselines</div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={{ color: '#3498db' }} darkModeInvert={true} />
              <strong>Notes</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Variants: Transformer vs DAN; multilingual options exist</div>
          </div>
        </div>
      ),
      backgroundColor: '#1a4352',
      notes: ''
        },
        {
          id: 24,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px',  color: '#81c784' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> 
                      <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Simple API</li>
                    <li>Stable baseline</li>
                    <li>Good transfer</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> 
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Older model trails newer models on MTEB</li>
                    <li>Limited customization</li>
                  </ul>
                </div>
              </div>
            </div>
      ),
      backgroundColor: '#1a4352',
      notes: ''
        }
      ]
    },
    {
      id: 'technique-12',
      title: '12) E5 Embeddings — Cheat Sheet',
      slides: [
        {
          id: 25,
          title: '12) E5 Embeddings — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
          <div style={{ background: 'rgba(46, 204, 113, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-globe" sizeName="lg" darkModeInvert={true} />
              <strong>Multilingual Embedding Model</strong>
            </div>
            <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-arrow-right" sizeName="sm" darkModeInvert={true} />
              Supports 100+ languages: English, Spanish, Chinese, Arabic, and more
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                <strong>Model Type</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Contrastively trained multilingual sentence embeddings (e.g., intfloat/multilingual-e5-large, e5-large-v2)</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                <strong>Representation Style</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Query/Passage embeddings; 768–1024d typical; cosine similarity</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
              <strong>Best Use Case</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Semantic search, RAG, retrieval, classification features (multilingual)</div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
              <strong>Notes</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Prefix inputs with "query:" or "passage:"; use cosine metric; batch/token limits apply</div>
          </div>
        </div>
      ),
      backgroundColor: '#3b521a',
      notes: ''
        },
        {
          id: 26,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px',  color: '#81c784' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> 
                      <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Strong multilingual performance</li>
                    <li>Small/efficient</li>
                    <li>Robust zero-shot retrieval</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> 
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Requires query/passage prompting consistency</li>
                    <li>Re-embedding needed when migrating</li>
                  </ul>
                </div>
              </div>
            </div>
      ),
      backgroundColor: '#3b521a',
      notes: ''
        }
      ]
    },
    {
      id: 'technique-13',
      title: '13) GTE Embeddings — Cheat Sheet',
      slides: [
        {
          id: 27,
          title: '13) GTE Embeddings — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
          <div style={{ background: 'rgba(46, 204, 113, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
            <div style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-expand" sizeName="lg" darkModeInvert={true} />
              <strong>Long-context transformer architecture</strong>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                <strong>Model Type</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>Long-context transformer++ sentence embeddings (BERT + RoPE + GLU), English and multilingual variants</div>
            </div>
            <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                <strong>Representation Style</strong>
              </div>
              <div style={{ fontSize: '1.2rem' }}>CLS-pooled sentence vectors, base 768d, large 1024d, context up to 8k tokens in v1.5</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
              <strong>Best Use Case</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Long-context retrieval/reranking, high MTEB performance within size class</div>
          </div>

          <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
              <strong>Notes</strong>
            </div>
            <div style={{ fontSize: '1.2rem' }}>Use Alibaba-NLP/gte-*-v1.5, enable unpadding/xformers for speed, cosine similarity, multilingual option: gte-Qwen1.5-7B-instruct</div>
          </div>
        </div>
      ),
      backgroundColor: '#521a2f',
      notes: ''
        },
        {
          id: 28,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px',  color: '#81c784' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> 
                      <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>SOTA within size tier</li>
                    <li>8k context support</li>
                    <li>Competitive LoCo scores</li>
                    <li>Efficient inference options</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> 
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>English-only for some checkpoints</li>
                    <li>Larger dims than tiny models</li>
                  </ul>
                </div>
              </div>
            </div>
      ),
      backgroundColor: '#521a2f',
      notes: ''
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary & Comparison',
      slides: [
        {
          id: 29,
          title: 'Summary & Comparison',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(231, 173, 82, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e7ad52', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-table" sizeName="2x" style={{ color: '#e7ad52' }} darkModeInvert={true} />
                    <strong>Traditional</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>
                    Sparse, interpretable, no context; best for keyword/ranking/classic ML
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1rem', marginTop: '0.5rem' }}>
                    <li>BoW, TF-IDF</li>
                    <li>Context-aware: No</li>
                    <li>OOV Handling: None</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#1b91e0', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-layer-group" sizeName="lg" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                    <strong>Static word embeddings</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>
                    Dense word vectors; FastText handles OOV; no context awareness
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1rem', marginTop: '0.5rem' }}>
                    <li>Word2Vec, GloVe, FastText, Doc2Vec</li>
                    <li>Dimensions: 100-300d</li>
                    <li>FastText: Subword OOV handling</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#9b59b6', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-brain-circuit" sizeName="lg" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                    <strong>Contextual embeddings</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>
                    Token-level context; BERT needs pooling/finetune for sentences
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1rem', marginTop: '0.5rem' }}>
                    <li>ELMo, BERT, SBERT</li>
                    <li>Context-aware: Yes</li>
                    <li>Dimensions: 384-1024d</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#2ecc71', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-rocket" sizeName="lg" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                    <strong>Modern sentence encoders</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>
                    Fixed-size sentence vectors; best for semantic search/clustering
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1rem', marginTop: '0.5rem' }}>
                    <li>USE, E5, GTE</li>
                    <li>Dimensions: 512-1024d</li>
                    <li>GTE: 8k context window</li>
                  </ul>
                </div>
              </div>

              <div style={{ background: 'rgba(52, 152, 219, 0.15)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ color: '#3498db', marginBottom: '0.8rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <SvgIcon iconName="duo-chart-line" sizeName="lg" style={{ color: '#3498db' }} darkModeInvert={true} />
                  <strong>Key Insights by Context Length</strong>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.8rem', fontSize: '0.8rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-circle" sizeName="sm" style={{ color: '#3498db' }} darkModeInvert={true} />
                    Traditional/Static: N/A
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-circle" sizeName="sm" style={{ color: '#3498db' }} darkModeInvert={true} />
                    ELMo/BERT/SBERT/USE/E5: 512 tokens
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-star" sizeName="sm" style={{ color: '#3498db' }} darkModeInvert={true} />
                    GTE: 8192 tokens
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(231, 173, 82, 0.2)', borderRadius: '8px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-compass" sizeName="xl" style={{ color: '#e7ad52' }} darkModeInvert={true} />
                <strong style={{ fontSize: '1rem' }}>Similarity Metric:</strong> All dense embeddings use <strong>Cosine</strong> similarity
              </div>
            </div>
      ),
      notes: ''
        }
      ]
    }
  ]
};

