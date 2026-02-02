import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const nerApproachesDeck: Deck = {
  id: 'ner-approaches-deck',
  name: '11 Named Entity Recognition Approaches',
  description: 'A comprehensive cheat sheet of 11 NER approaches with model type, training data needs, best use cases, pros, and cons',
  category: 'NLP',
  theme: 'night',
  slides: [],
  slideGroups: [
    {
      id: 'intro',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          title: 'Named Entity Recognition Approaches',
          center: true,
          content: (
            <div>
              <p style={{ fontSize: '2rem', marginTop: '30px' }}>
                A comprehensive cheat sheet of 11 NER approaches with model type, training data needs, best use cases, pros, and cons
              </p>
              <div style={{ marginTop: '30px', marginBottom: '30px', fontSize: '2rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                  <div>Rule-Based</div>
                </div>
                <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-book" sizeName="2x" darkModeInvert={true} />
                  <div>Dictionary</div>
                </div>
                <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-chart-line" sizeName="2x" darkModeInvert={true} />
                  <div>Statistical</div>
                </div>
                <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-brain" sizeName="2x" darkModeInvert={true} />
                  <div>Neural</div>
                </div>
                <div style={{ padding: '10px', background: 'rgba(240, 98, 146, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-brain-circuit" sizeName="2x" darkModeInvert={true} />
                  <div>Transformer</div>
                </div>
                <div style={{ padding: '10px', background: 'rgba(100, 181, 246, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                  <div>LLMs</div>
                </div>
              </div>
              <p><strong>Prepared by:</strong> Nisar A</p>
              <p><strong>Date:</strong> November 7, 2025</p>
              <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
            </div>
          ),
          backgroundColor: '#162d6b',
          notes: ``
        },
        {
          id: 2,
          title: 'Table of Contents',
          content: (
            <div style={{ textAlign: 'left', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#4fc3f7' }}>1</span>
                  <span>Rule-Based Pattern Matching</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#81c784' }}>2</span>
                  <span>Dictionary / Gazetteer Lookup</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#ffb74d' }}>3</span>
                  <span>TF-IDF + Classifier-Based NER</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#ba68c8' }}>4</span>
                  <span>Hidden Markov Model (HMM) NER</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#f06292' }}>5</span>
                  <span>Conditional Random Fields (CRF) NER</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#64b5f6' }}>6</span>
                  <span>BiLSTM + CRF</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#aed581' }}>7</span>
                  <span>CNN + BiLSTM NER</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#ffa726' }}>8</span>
                  <span>spaCy Statistical NER</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#ef5350' }}>9</span>
                  <span>BERT Fine-Tuned for NER</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#9575cd' }}>10</span>
                  <span>RoBERTa / DistilBERT NER Models</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#66bb6a' }}>11</span>
                  <span>LLM / Zero-Shot NER</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.15)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px', gridColumn: 'span 2' }}>
                  <SvgIcon iconName="duo-trophy" sizeName="1x" style={{ color: '#ffd700' }} darkModeInvert={true} />
                  <span style={{ fontWeight: 'bold' }}>Summary & Comparison</span>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#162d6b',
          notes: ``
        }
      ]
    },
    {
      id: 'rule-based',
      title: 'Rule-Based Pattern Matching',
      slides: [
        {
          id: 3,
          title: '1) Rule-Based Pattern Matching',
          icon: { name: 'duo-list-check' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                    <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Model Type:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Deterministic rules, regexes, token patterns, heuristics.</span>
                  </div>
                  <pre style={{ marginTop: '26px', fontSize: '1.2rem' }}>{`regex: r"\\b[A-Z][a-z]+ [A-Z][a-z]+\\b"`}</pre>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex',flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                    <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>None to build; small annotated set recommended for validation.</span>
                  </div>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex',flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                    <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Highly structured domains (dates, IDs, emails), compliance/extraction with strict formats, low-resource settings.</span>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#183c77',
          notes: ``
        },
        {
          id: 4,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                    <strong>Pros:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>Transparent and Fast</li>
                      <li>No labeled data required</li>
                      <li>Easy to enforce constraints</li>
                  </ul>
                </div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                    <strong>Cons:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>Brittle to variations</li>
                      <li>High maintenance</li>
                      <li>Limited recall/coverage</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#183c77',
          notes: ''
        }
      ]
    },
    {
      id: 'dictionary',
      title: 'Dictionary / Gazetteer Lookup',
      slides: [
        {
          id: 5,
          title: '2) Dictionary / Gazetteer Lookup',
          icon: { name: 'duo-book' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Model Type:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Lexicon/alias lookup with exact/fuzzy matching, optional normalization.</span>
                  </div>
                  <pre style={{ marginTop: '26px', fontSize: '1.2rem' }}>{`entity_dict.get(text.lower(), None)`}</pre>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>None; requires curated dictionaries/gazetteers; optional frequency stats for ranking.</span>
                  </div>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Products/catalogs, locations (GeoNames), biomedical ontologies, entity normalization tasks.</span>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: ``
        },
        {
          id: 6,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                    <strong>Pros:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>High precision for known entities</li>
                      <li>Easy to update lists</li>
                      <li>Multilingual-ready with the right lexicons</li>
                  </ul>
                </div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                    <strong>Cons:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>Misses out-of-vocabulary/new entities</li>
                      <li>Ambiguity without context</li>
                      <li>Alias/variant management overhead</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: ''
        }
      ]
    },
    {
      id: 'tfidf-classifier',
      title: 'TF-IDF + Classifier-Based NER',
      slides: [
        {
          id: 5,
          title: '3) TF-IDF + Classifier-Based NER',
          icon: { name: 'duo-chart-line' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                    <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Model Type:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Feature-based ML (TF-IDF/BoW, char n-grams, window features) + classifier (LogReg/SVM/Perceptron) at token/span level.</span>
                  </div>
                  <pre style={{ marginTop: '26px', fontSize: '1.2rem' }}>{`X = tfidf_vectorizer.transform(tokens); y_pred = classifier.predict(X)`}</pre>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                    <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Labeled tokens/spans (thousands–tens of thousands); optional pre-chunking.</span>
                  </div>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                    <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Lightweight baselines, domains with strong lexical cues, constrained schemas.</span>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6d1e1e',
          notes: ``
        },
        {
          id: 6,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                    <strong>Pros:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>Fast to train</li>
                      <li>Interpretable features</li>
                      <li>Low compute requirements</li>
                  </ul>
                </div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                    <strong>Cons:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>Weak context modeling</li>
                      <li>No explicit label dependencies</li>
                      <li>Requires feature engineering</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6d1e1e',
          notes: ''
        }
      ]
    },
    {
      id: 'hmm',
      title: 'Hidden Markov Model (HMM) NER',
      slides: [
        {
          id: 7,
          title: '4) Hidden Markov Model (HMM) NER',
          icon: { name: 'duo-arrows-rotate' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Model Type:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Generative sequence model with transition/emission probabilities; Viterbi decoding.</span>
                  </div>
                  <pre style={{ marginTop: '26px', fontSize: '1.2rem' }}>{`P(tag_i|tag_{i-1}) × P(word_i|tag_i)`}</pre>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Labeled sequences preferred; can leverage semi-supervised counts and lexicons.</span>
                  </div>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Educational baseline, low-resource scenarios, when probabilistic interpretability is desired.</span>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#2b6d1e',
          notes: ``
        },
        {
          id: 8,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                    <strong>Pros:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>Efficient decoding</li>
                      <li>Handles sequence structure</li>
                      <li>Probabilistic treatment of uncertainty</li>
                  </ul>
                </div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                    <strong>Cons:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>Strong independence assumptions</li>
                      <li>Limited feature flexibility</li>
                      <li>Typically outperformed by CRF/neural models</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#2b6d1e',
          notes: ''
        }
      ]
    },
    {
      id: 'crf',
      title: 'Conditional Random Fields (CRF) NER',
      slides: [
        {
          id: 9,
          title: '5) Conditional Random Fields (CRF) NER',
          icon: { name: 'duo-circle-nodes' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Model Type:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Discriminative sequence model over hand-crafted features; BIO/IOB tagging.</span>
                  </div>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`CRF(features=[word.lower(), word[-3:], word.isupper(), prev_word, next_word])`}</pre>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Labeled sequences (5k–100k sentences) + feature templates (orthographic, lexicon, context).</span>
                  </div>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Strong non-neural baseline, small/medium data, domains with informative surface features.</span>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1e496d',
          notes: ``
        },
        {
          id: 10,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                    <strong>Pros:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>Captures label dependencies</li>
                      <li>Robust</li>
                      <li>Well-understood</li>
                  </ul>
                </div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                    <strong>Cons:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>Heavy feature engineering</li>
                      <li>Limited long-range context</li>
                      <li>Weaker domain transfer vs. pretrained transformers</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1e496d',
          notes: ''
        }
      ]
    },
    {
      id: 'bilstm-crf',
      title: 'BiLSTM + CRF',
      slides: [
        {
          id: 11,
          title: '6) BiLSTM + CRF',
          icon: { name: 'duo-brain' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Model Type:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Neural sequence tagger: embeddings + BiLSTM encoder + CRF decoder.</span>
                  </div>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`BiLSTM(embed) → CRF(tag_sequence)`}</pre>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Labeled sequences (10k–100k sentences); benefits from pretrained word/subword embeddings.</span>
                  </div>
                </div>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>General-purpose NER with moderate data; multilingual and domain setups without massive compute.</span>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#4a1e6d',
          notes: ``
        },
        {
          id: 12,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                    <strong>Pros:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>Learns features automatically</li>
                      <li>Context-aware</li>
                      <li>Leverages pretrained embeddings</li>
                  </ul>
                </div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                    <strong>Cons:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>Needs GPU for training</li>
                      <li>Complex hyperparameter tuning</li>
                      <li>OOV handling depends on char/subword modeling</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#4a1e6d',
          notes: ''
        }
      ]
    },
    {
      id: 'cnn-bilstm',
      title: 'CNN + BiLSTM NER',
      slides: [
        {
          id: 13,
          title: '7) CNN + BiLSTM NER',
          icon: { name: 'duo-filter' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Model Type:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Character-level CNN (or LSTM) for subword features + word embeddings + BiLSTM (+ CRF/softmax).</span>
                  </div>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`char_cnn + word_emb → BiLSTM → CRF/softmax`}</pre>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Labeled sequences (10k–100k); character and word vocabularies.</span>
                  </div>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Morphologically rich languages, noisy text (typos, social media), OOV-heavy domains.</span>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6d571e',
          notes: ``
        },
        {
          id: 14,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                    <strong>Pros:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>Captures morphology/spelling</li>
                      <li>Improves robustness to OOV/variants</li>
                      <li>Strong non-transformer baseline</li>
                  </ul>
                </div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                    <strong>Cons:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>More components/hyperparameters</li>
                      <li>Increased training complexity</li>
                      <li>Slower than plain BiLSTM</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6d571e',
          notes: ''
        }
      ]
    },
    {
      id: 'spacy',
      title: 'spaCy Statistical NER',
      slides: [
        {
          id: 10,
          title: '8) spaCy Statistical NER',
          icon: { name: 'duo-rocket' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Model Type:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Production-ready pipeline (transition-based CNN or transformer backends) with beam search; rule+ML integration.</span>
                  </div>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`nlp = spacy.load("en_core_web_sm")`}</pre>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>None to use pretrained; domain customization with labeled examples; config-driven training in spaCy v3.</span>
                  </div>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Rapid deployment, practical pipelines combining rules, gazetteers, and statistical NER.</span>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1e6d5e',
          notes: ``
        },
        {
          id: 14,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                    <strong>Pros:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>Fast inference</li>
                      <li>Easy to train/tune/deploy</li>
                      <li>Strong tooling</li>
                  </ul>
                </div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                    <strong>Cons:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>Quality depends on pretrained model/domain fit</li>
                      <li>Custom labels need data</li>
                      <li>Limited transparency into pretrained errors</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1e6d5e',
          notes: ''
        }
      ]
    },
    {
      id: 'bert',
      title: 'BERT Fine-Tuned for NER',
      slides: [
        {
          id: 15,
          title: '9) BERT Fine-Tuned for NER',
          icon: { name: 'duo-brain-circuit' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Model Type:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Transformer encoder (BERT) with token classification head (softmax) ± CRF layer.</span>
                  </div>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`BertForTokenClassification(num_labels=9)`}</pre>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Labeled BIO/IOB sequences (5k–50k sentences) leveraging large-scale pretraining.</span>
                  </div>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>High-accuracy NER, domain adaptation via domain-specific BERT (e.g., BioBERT, FinBERT).</span>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6d1e52',
          notes: ``
        },
        {
          id: 16,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                    <strong>Pros:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>Strong context modeling</li>
                      <li>Performs well with moderate data</li>
                      <li>Pre-trained language knowledge</li>
                  </ul>
                </div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                    <strong>Cons:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>Compute/latency heavy</li>
                      <li>Subword alignment adds complexity</li>
                      <li>Privacy/compliance considerations</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6d1e52',
          notes: ''
        }
      ]
    },
    {
      id: 'roberta-distilbert',
      title: 'RoBERTa / DistilBERT NER Models',
      slides: [
        {
          id: 17,
          title: '10) RoBERTa / DistilBERT NER Models',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Model Type:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Transformer variants; RoBERTa (accuracy-optimized), DistilBERT (compressed for speed) with token classification.</span>
                  </div>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`from transformers import AutoTokenizer, AutoModelForTokenClassification`}</pre>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Same as BERT; fine-tune on labeled NER data; distillation handled in pretraining of DistilBERT.</span>
                  </div>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Balancing accuracy and latency; edge/real-time constraints; production cost optimization.</span>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6d4c1e',
          notes: ``
        },
        {
          id: 18,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                    <strong>Pros:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>Strong context modeling</li>
                      <li>Performs well with moderate data</li>
                      <li>Pre-trained language knowledge</li>
                  </ul>
                </div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                    <strong>Cons:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>Compute/latency heavy</li>
                      <li>Subword alignment adds complexity</li>
                      <li>Privacy/compliance considerations</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6d4c1e',
          notes: ''
        }
      ]
    },
    {
      id: 'llm-zeroshot',
      title: 'LLM / Zero-Shot NER',
      slides: [
        {
          id: 19,
          title: '11) LLM / Zero-Shot NER',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Model Type:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Large instruction-tuned LMs prompted for extraction (zero-/few-shot) or lightly fine-tuned (PEFT/LoRA).</span>
                  </div>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`prompt: "Extract person and organization names from this text: {text}"`}</pre>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>None for zero-shot; few-shot examples in prompt; optional small labeled set for prompt-tuning.</span>
                  </div>
                </div>
                <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                      <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                    </div>
                    <span style={{ fontSize: '1.2rem' }}>Rapid prototyping, new schemas, low-data domains, complex instructions, multilingual scenarios.</span>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#3b1e6d',
          notes: ``
        },
        {
          id: 20,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                    <strong>Pros:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>No labeled data needed</li>
                      <li>Flexible schemas</li>
                      <li>Can reason and follow instructions</li>
                  </ul>
                </div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                    <strong>Cons:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                  <li>Hallucinations/inconsistency</li>
                      <li>Privacy/regulatory concerns</li>
                      <li>Higher cost/latency</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#3b1e6d',
          notes: ''
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 21,
          title: 'Summary & Comparison',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <p style={{ fontSize: '2rem', marginBottom: '30px' }}>
                A complete overview of NER approach selection, data requirements, performance characteristics, and deployment considerations
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div style={{ padding: '20px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <SvgIcon iconName="duo-map" sizeName="2x" darkModeInvert={true} />
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '2rem' }}>Quick Selection Guide</div>
                    <div style={{ fontSize: '1.2rem', marginTop: '10px' }}>Match approach to your needs</div>
                  </div>
                </div>
                <div style={{ padding: '20px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '2rem' }}>Data Needs Spectrum</div>
                    <div style={{ fontSize: '1.2rem', marginTop: '10px' }}>Training data requirements</div>
                  </div>
                </div>
                <div style={{ padding: '20px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <SvgIcon iconName="duo-clock" sizeName="2x" darkModeInvert={true} />
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '2rem' }}>Compute & Latency</div>
                    <div style={{ fontSize: '1.2rem', marginTop: '10px' }}>Inference speed comparison</div>
                  </div>
                </div>
                <div style={{ padding: '20px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <SvgIcon iconName="duo-rocket" sizeName="2x" darkModeInvert={true} />
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '2rem' }}>Maintenance & Deployment</div>
                    <div style={{ fontSize: '1.2rem', marginTop: '10px' }}>Ongoing operational needs</div>
                  </div>
                </div>
                <div style={{ padding: '20px', background: 'rgba(100, 181, 246, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px', gridColumn: 'span 2' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '2rem' }}>Deployment Tips</div>
                  </div>
                </div>
              </div>
              
            </div>
          ),
          backgroundColor: '#471d6f',
          notes: ``
        },
        {
          id: 22,
          title: 'Quick Selection Guide',
              content: (
                <div style={{ textAlign: 'left' }}>
                  <div style={{ marginBottom: '30px' }}>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                    <SvgIcon iconName="duo-map" sizeName="3x" darkModeInvert={true} />
                    <div>
                      <p style={{ fontSize: '2rem' }}>Choose the right NER approach for your use case</p>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '2rem' }}>
                    <div style={{ padding: '15px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '8px', borderLeft: '4px solid #4fc3f7' }}>
                      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>🚫 No training data, strict formats</div>
                      <div style={{ color: '#4fc3f7' }}>→ Rule-Based, Gazetteer</div>
                    </div>
                    <div style={{ padding: '15px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '8px', borderLeft: '4px solid #81c784' }}>
                      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>📊 Small data, stable schemas</div>
                      <div style={{ color: '#81c784' }}>→ CRF, spaCy</div>
                    </div>
                    <div style={{ padding: '15px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '8px', borderLeft: '4px solid #ffb74d' }}>
                      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>📈 Moderate data, need accuracy</div>
                      <div style={{ color: '#ffb74d' }}>→ BiLSTM+CRF, CNN+BiLSTM</div>
                    </div>
                    <div style={{ padding: '15px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '8px', borderLeft: '4px solid #ba68c8' }}>
                      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>🏆 Best possible accuracy</div>
                      <div style={{ color: '#ba68c8' }}>→ BERT, RoBERTa</div>
                    </div>
                    <div style={{ padding: '15px', background: 'rgba(240, 98, 146, 0.2)', borderRadius: '8px', borderLeft: '4px solid #f06292' }}>
                      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>⚡ Low latency / edge deployment</div>
                      <div style={{ color: '#f06292' }}>→ DistilBERT, optimized spaCy</div>
                    </div>
                    <div style={{ padding: '15px', background: 'rgba(100, 181, 246, 0.2)', borderRadius: '8px', borderLeft: '4px solid #64b5f6' }}>
                      <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>🆕 New schema / zero data</div>
                      <div style={{ color: '#64b5f6' }}>→ LLM Zero-/Few-Shot</div>
                    </div>
                  </div>
                  <div style={{ marginTop: '25px', padding: '15px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', fontSize: '1.2rem' }}>
                    <strong>💡 Pro Tip:</strong> Start simple! Try rules or dictionaries first, then move to ML if needed.
                  </div>
                </div>
              ),
              backgroundColor: '#471d6f',
              notes: ``
        },
        {
          id: 23,
          title: 'Data Needs Spectrum',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <SvgIcon iconName="duo-graduation-cap" sizeName="3x" darkModeInvert={true} />
                <div>
                  <p style={{ fontSize: '2rem' }}>How much training data does each approach need?</p>
                </div>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ width: '400px', fontWeight: 'bold' }}>Rule-Based / Gazetteer</div>
                    <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg, #4fc3f7 1%, rgba(79, 195, 247, 0.1) 1%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px', border: '1px solid rgba(79, 195, 247, 0.3)' }}>
                      <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.2rem' }}>0 labeled examples</span>
                      <span style={{ fontSize: '1.2rem' }}>
                    ✓ Just write patterns and dictionaries by hand
                  </span>
                    </div>
                  </div>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ width: '400px', fontWeight: 'bold' }}>CRF / HMM</div>
                    <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg, #81c784 20%, rgba(129, 199, 132, 0.1) 20%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px', border: '1px solid rgba(129, 199, 132, 0.3)' }}>
                      <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.2rem' }}>1,000 - 5,000</span>
                      <span style={{ fontSize: '1.2rem' }}>
                    ✓ Good for simple, stable entity schemas
                  </span>
                    </div>
                  </div>
                  
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ width: '400px', fontWeight: 'bold' }}>Transformers (BERT)</div>
                    <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg, #ba68c8 35%, rgba(186, 104, 200, 0.1) 35%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px', border: '1px solid rgba(186, 104, 200, 0.3)' }}>
                      <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.2rem' }}>3,000 - 30,000</span>
                      <span style={{ fontSize: '1.2rem' }}>
                    ✓ Pre-trained, so needs less data than BiLSTM
                  </span>
                    </div>
                  </div>
                  
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ width: '400px', fontWeight: 'bold' }}>BiLSTM models</div>
                    <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg,rgb(129, 88, 25) 60%, rgba(255, 183, 77, 0.1) 60%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px', border: '1px solid rgba(255, 183, 77, 0.3)' }}>
                      <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.2rem' }}>5,000 - 50,000</span>
                      <span style={{ fontSize: '1.2rem' }}>
                    ✓ Trained from scratch, needs more examples
                  </span>
                    </div>
                  </div>
                  
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ width: '400px', fontWeight: 'bold' }}>Zero-shot LLMs</div>
                    <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg, #f06292 2%, rgba(240, 98, 146, 0.1) 2%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px', border: '1px solid rgba(240, 98, 146, 0.3)' }}>
                      <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.2rem' }}>0 - 10 in prompt</span>
                      <span style={{ fontSize: '1.2rem' }}>
                    ✓ Few-shot examples given directly in the prompt
                  </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginTop: '25px' }}>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '8px', borderLeft: '3px solid #81c784' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '5px', fontSize: '2rem' }}>✅ Quality {'>'} Quantity</div>
                  <div style={{ fontSize: '1.2rem' }}>Clean, consistent labels beat larger noisy datasets</div>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '8px', borderLeft: '3px solid #ffb74d' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '5px', fontSize: '2rem' }}>🔄 Active Learning</div>
                  <div style={{ fontSize: '1.2rem' }}>Start small, label strategically, iterate</div>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '8px', borderLeft: '3px solid #ba68c8' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '5px', fontSize: '2rem' }}>📊 Balance Mix</div>
                  <div style={{ fontSize: '1.2rem' }}>Diverse examples across all entity types</div>
                </div>
              </div>
            </div>
          ),
              backgroundColor: '#471d6f',
              notes: ``
            },
            {
          id: 24,
              title: 'Compute & Latency',
              content: (
                <div style={{ textAlign: 'left' }}>
                  <div style={{ marginBottom: '30px' }}>
                  </div>
                  <div style={{ fontSize: '2rem' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                      <thead>
                        <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.3)' }}>
                          <th style={{ textAlign: 'left', padding: '10px', width: '35%' }}>Approach</th>
                          <th style={{ textAlign: 'left', padding: '10px', width: '25%' }}>Latency</th>
                          <th style={{ textAlign: 'left', padding: '10px', width: '20%' }}>GPU Required</th>
                          <th style={{ textAlign: 'left', padding: '10px', width: '20%' }}>Memory</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '1.2rem' }}>
                          <td style={{ padding: '10px' }}>Rule-Based / Gazetteer</td>
                          <td style={{ padding: '10px', color: '#4fc3f7', fontWeight: 'bold' }}>&lt;1ms ⚡</td>
                          <td style={{ padding: '10px' }}>No</td>
                          <td style={{ padding: '10px' }}>~10MB</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '1.2rem' }}>
                          <td style={{ padding: '10px' }}>CRF / HMM</td>
                          <td style={{ padding: '10px', color: '#81c784', fontWeight: 'bold' }}>5-10ms</td>
                          <td style={{ padding: '10px' }}>No</td>
                          <td style={{ padding: '10px' }}>~50MB</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '1.2rem' }}>
                          <td style={{ padding: '10px' }}>BiLSTM + CRF</td>
                          <td style={{ padding: '10px', color: '#ffb74d', fontWeight: 'bold' }}>20-50ms</td>
                          <td style={{ padding: '10px' }}>Helpful</td>
                          <td style={{ padding: '10px' }}>~200MB</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '1.2rem' }}>
                          <td style={{ padding: '10px' }}>DistilBERT</td>
                          <td style={{ padding: '10px', color: '#ba68c8', fontWeight: 'bold' }}>20-100ms</td>
                          <td style={{ padding: '10px' }}>Recommended</td>
                          <td style={{ padding: '10px' }}>~250MB</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '1.2rem' }}>
                          <td style={{ padding: '10px' }}>BERT / RoBERTa</td>
                          <td style={{ padding: '10px', color: '#f06292', fontWeight: 'bold' }}>50-200ms</td>
                          <td style={{ padding: '10px' }}>Required</td>
                          <td style={{ padding: '10px' }}>~450MB</td>
                        </tr>
                        <tr style={{ fontSize: '1.2rem' }}>
                          <td style={{ padding: '10px' }}>LLMs (GPT-4, etc.)</td>
                          <td style={{ padding: '10px', color: '#ef5350', fontWeight: 'bold' }}>500ms - 5s+ 🐢</td>
                          <td style={{ padding: '10px' }}>API / Large GPU</td>
                          <td style={{ padding: '10px' }}>~GB+ / API</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '8px', fontSize: '1.2rem' }}>
                    <strong>⚡ Optimization Tips:</strong> Use ONNX runtime, model quantization, and batching to reduce latency by 2-5x
                  </div>
                </div>
              ),
              backgroundColor: '#471d6f',
              notes: ``
            },
            {
          id: 25,
              title: 'Maintenance & Deployment',
              content: (
                <div style={{ textAlign: 'left' }}>
                  <div style={{ marginBottom: '30px' }}>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                    <SvgIcon iconName="duo-rocket" sizeName="3x" darkModeInvert={true} />
                    <div>
                      <p style={{ fontSize: '2rem' }}>Ongoing operational requirements</p>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '2rem' }}>
                    <div style={{ padding: '20px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '10px' }}>
                      <h4 style={{ color: '#4fc3f7', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>📋</span> Rules & Gazetteers
                      </h4>
                      <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                        <li>Frequent manual updates</li>
                        <li>Domain expert involvement</li>
                        <li>Version control for patterns</li>
                        <li>Easy to debug & explain</li>
                      </ul>
                    </div>
                    <div style={{ padding: '20px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '10px' }}>
                      <h4 style={{ color: '#81c784', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>📊</span> Classical ML (CRF/HMM)
                      </h4>
                      <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                        <li>Periodic retraining (monthly/quarterly)</li>
                        <li>Feature pipeline maintenance</li>
                        <li>Model versioning</li>
                        <li>A/B testing frameworks</li>
                      </ul>
                    </div>
                    <div style={{ padding: '20px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '10px' }}>
                      <h4 style={{ color: '#ba68c8', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>🧠</span> Transformers
                      </h4>
                      <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                        <li>Retrain on domain shifts</li>
                        <li>GPU infrastructure costs</li>
                        <li>Model registry & serving</li>
                        <li>Monitoring for drift</li>
                      </ul>
                    </div>
                    <div style={{ padding: '20px', background: 'rgba(240, 98, 146, 0.2)', borderRadius: '10px' }}>
                      <h4 style={{ color: '#f06292', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>🤖</span> LLMs
                      </h4>
                      <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                        <li>Prompt versioning & testing</li>
                        <li>Output parsing & validation</li>
                        <li>Rate limiting & cost control</li>
                        <li>Guardrails for edge cases</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ),
              backgroundColor: '#471d6f',
              notes: ``
            },
            {
          id: 26,
              title: 'Deployment Tips',
              content: (
                <div style={{ textAlign: 'left' }}>
                  <div style={{ marginBottom: '30px' }}>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '2rem' }}>
                    <div style={{ padding: '18px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontSize: '1.5em' }}>🔗</span>
                      <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Combine Methods</div>
                        <div style={{ fontSize: '1.2rem' }}>Rules + ML hybrid outperforms either alone. Use rules for known patterns, ML for fuzzy matching.</div>
                      </div>
                    </div>
                    <div style={{ padding: '18px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontSize: '1.5em' }}>🔄</span>
                      <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Add Entity Linking</div>
                        <div style={{ fontSize: '1.2rem' }}>Normalize entities to canonical forms. Link to knowledge bases (Wikidata, internal DBs).</div>
                      </div>
                    </div>
                    <div style={{ padding: '18px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontSize: '1.5em' }}>📈</span>
                      <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Monitor for Drift</div>
                        <div style={{ fontSize: '1.2rem' }}>Text evolves! Track prediction confidence, flag low-confidence outputs for review.</div>
                      </div>
                    </div>
                    <div style={{ padding: '18px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontSize: '1.5em' }}>🔒</span>
                      <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Privacy Compliance</div>
                        <div style={{ fontSize: '1.2rem' }}>PII detection needs special handling. Consider on-premise for sensitive data.</div>
                      </div>
                    </div>
                    <div style={{ padding: '18px', background: 'rgba(240, 98, 146, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontSize: '1.5em' }}>⚡</span>
                      <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Quantize for Edge</div>
                        <div style={{ fontSize: '1.2rem' }}>INT8 quantization cuts size 4x with minimal accuracy loss. Essential for mobile/edge.</div>
                      </div>
                    </div>
                    <div style={{ padding: '18px', background: 'rgba(100, 181, 246, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontSize: '1.5em' }}>🧪</span>
                      <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Test Extensively</div>
                        <div style={{ fontSize: '1.2rem' }}>Build diverse test sets. Include edge cases, adversarial examples, and domain-specific text.</div>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: '25px', padding: '15px', background: 'rgba(100, 181, 246, 0.3)', borderRadius: '8px', textAlign: 'center', fontSize: '1.2rem' }}>
                    <strong>🎯 Remember:</strong> The best NER system is the one that works reliably in YOUR production environment!
                  </div>
                </div>
              ),
              backgroundColor: '#471d6f',
              notes: ``
        }
      ]
    }
  ]
};
