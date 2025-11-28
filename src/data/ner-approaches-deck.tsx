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
          content: (
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '1.1em', marginTop: '30px' }}>
                A comprehensive cheat sheet of 11 NER approaches with model type, training data needs, best use cases, pros, and cons
              </p>
              <div style={{ marginTop: '40px', fontSize: '0.85em', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
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
              <p style={{ fontSize: '0.8em', marginTop: '40px', color: '#aaa' }}>
                Prepared by: Genspark AI Slides • Date: 2025-11-07
              </p>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Title slide introducing 11 NER approaches across different model types'
        },
        {
          id: 2,
          title: 'Table of Contents',
          content: (
            <div style={{ textAlign: 'left', fontSize: '0.85em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
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
          backgroundColor: '#16213e',
          notes: 'Table of contents showing all 11 NER approaches plus summary'
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
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Model Type:</strong> Deterministic rules, regexes, token patterns, heuristics.</p>
                  </div>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`regex: r"\\b[A-Z][a-z]+ [A-Z][a-z]+\\b"`}</pre>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Training Data Needed:</strong> None to build; small annotated set recommended for validation.</p>
                  </div>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Best Use Case:</strong> Highly structured domains (dates, IDs, emails), compliance/extraction with strict formats, low-resource settings.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Transparent</li>
                      <li>Fast</li>
                      <li>Consistent</li>
                      <li>No labeled data required</li>
                      <li>Easy to enforce constraints</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Brittle to variations</li>
                      <li>High maintenance</li>
                      <li>Limited recall/coverage</li>
                      <li>Poor generalization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: 'Approach 1: Rule-based pattern matching using regexes and heuristics'
        }
      ]
    },
    {
      id: 'dictionary',
      title: 'Dictionary / Gazetteer Lookup',
      slides: [
        {
          id: 4,
          title: '2) Dictionary / Gazetteer Lookup',
          icon: { name: 'duo-book' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Model Type:</strong> Lexicon/alias lookup with exact/fuzzy matching, optional normalization.</p>
                  </div>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`entity_dict.get(text.lower(), None)`}</pre>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Training Data Needed:</strong> None; requires curated dictionaries/gazetteers; optional frequency stats for ranking.</p>
                  </div>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Best Use Case:</strong> Products/catalogs, locations (GeoNames), biomedical ontologies, entity normalization tasks.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Simple</li>
                      <li>High precision for known entities</li>
                      <li>Easy to update lists</li>
                      <li>Multilingual-ready with the right lexicons</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Misses out-of-vocabulary/new entities</li>
                      <li>Ambiguity without context</li>
                      <li>Alias/variant management overhead</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Approach 2: Dictionary and gazetteer lookup for known entities'
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
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Model Type:</strong> Feature-based ML (TF-IDF/BoW, char n-grams, window features) + classifier (LogReg/SVM/Perceptron) at token/span level.</p>
                  </div>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`X = tfidf_vectorizer.transform(tokens); y_pred = classifier.predict(X)`}</pre>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Training Data Needed:</strong> Labeled tokens/spans (thousands–tens of thousands); optional pre-chunking.</p>
                  </div>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Best Use Case:</strong> Lightweight baselines, domains with strong lexical cues, constrained schemas.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Fast to train</li>
                      <li>Interpretable features</li>
                      <li>Low compute requirements</li>
                      <li>Minimal memory usage</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Weak context modeling</li>
                      <li>Lower accuracy than sequence models</li>
                      <li>No explicit label dependencies</li>
                      <li>Requires feature engineering</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Approach 3: TF-IDF based classifier approach with traditional ML'
        }
      ]
    },
    {
      id: 'hmm',
      title: 'Hidden Markov Model (HMM) NER',
      slides: [
        {
          id: 6,
          title: '4) Hidden Markov Model (HMM) NER',
          icon: { name: 'duo-arrows-rotate' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Model Type:</strong> Generative sequence model with transition/emission probabilities; Viterbi decoding.</p>
                  </div>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`P(tag_i|tag_{i-1}) × P(word_i|tag_i)`}</pre>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Training Data Needed:</strong> Labeled sequences preferred; can leverage semi-supervised counts and lexicons.</p>
                  </div>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Best Use Case:</strong> Educational baseline, low-resource scenarios, when probabilistic interpretability is desired.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Efficient decoding</li>
                      <li>Handles sequence structure</li>
                      <li>Probabilistic treatment of uncertainty</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Strong independence assumptions</li>
                      <li>Limited feature flexibility</li>
                      <li>Typically outperformed by CRF/neural models</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: 'Approach 4: Hidden Markov Model for sequence tagging'
        }
      ]
    },
    {
      id: 'crf',
      title: 'Conditional Random Fields (CRF) NER',
      slides: [
        {
          id: 7,
          title: '5) Conditional Random Fields (CRF) NER',
          icon: { name: 'duo-circle-nodes' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Model Type:</strong> Discriminative sequence model over hand-crafted features; BIO/IOB tagging.</p>
                  </div>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`CRF(features=[word.lower(), word[-3:], word.isupper(), prev_word, next_word])`}</pre>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Training Data Needed:</strong> Labeled sequences (5k–100k sentences) + feature templates (orthographic, lexicon, context).</p>
                  </div>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Best Use Case:</strong> Strong non-neural baseline, small/medium data, domains with informative surface features.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Captures label dependencies</li>
                      <li>Robust</li>
                      <li>Well-understood</li>
                      <li>Stable</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Heavy feature engineering</li>
                      <li>Limited long-range context</li>
                      <li>Weaker domain transfer vs. pretrained transformers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Approach 5: CRF for discriminative sequence labeling'
        }
      ]
    },
    {
      id: 'bilstm-crf',
      title: 'BiLSTM + CRF',
      slides: [
        {
          id: 8,
          title: '6) BiLSTM + CRF',
          icon: { name: 'duo-brain' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Model Type:</strong> Neural sequence tagger: embeddings + BiLSTM encoder + CRF decoder.</p>
                  </div>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`BiLSTM(embed) → CRF(tag_sequence)`}</pre>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Training Data Needed:</strong> Labeled sequences (10k–100k sentences); benefits from pretrained word/subword embeddings.</p>
                  </div>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Best Use Case:</strong> General-purpose NER with moderate data; multilingual and domain setups without massive compute.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Learns features automatically</li>
                      <li>Context-aware</li>
                      <li>Strong accuracy with reasonable compute</li>
                      <li>Leverages pretrained embeddings</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Needs GPU for training</li>
                      <li>Complex hyperparameter tuning</li>
                      <li>Data-hungry vs. rules/CRF</li>
                      <li>OOV handling depends on char/subword modeling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Approach 6: BiLSTM + CRF neural sequence tagger'
        }
      ]
    },
    {
      id: 'cnn-bilstm',
      title: 'CNN + BiLSTM NER',
      slides: [
        {
          id: 9,
          title: '7) CNN + BiLSTM NER',
          icon: { name: 'duo-filter' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Model Type:</strong> Character-level CNN (or LSTM) for subword features + word embeddings + BiLSTM (+ CRF/softmax).</p>
                  </div>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`char_cnn + word_emb → BiLSTM → CRF/softmax`}</pre>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Training Data Needed:</strong> Labeled sequences (10k–100k); character and word vocabularies.</p>
                  </div>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Best Use Case:</strong> Morphologically rich languages, noisy text (typos, social media), OOV-heavy domains.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Captures morphology/spelling</li>
                      <li>Improves robustness to OOV/variants</li>
                      <li>Strong non-transformer baseline</li>
                      <li>Better at handling character variations</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>More components/hyperparameters</li>
                      <li>Increased training complexity</li>
                      <li>Slower than plain BiLSTM</li>
                      <li>Usually below transformer SOTA accuracy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: 'Approach 7: CNN + BiLSTM for character-aware NER'
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
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Model Type:</strong> Production-ready pipeline (transition-based CNN or transformer backends) with beam search; rule+ML integration.</p>
                  </div>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`nlp = spacy.load("en_core_web_sm")`}</pre>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Training Data Needed:</strong> None to use pretrained; domain customization with labeled examples; config-driven training in spaCy v3.</p>
                  </div>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Best Use Case:</strong> Rapid deployment, practical pipelines combining rules, gazetteers, and statistical NER.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Fast inference</li>
                      <li>Easy to train/tune/deploy</li>
                      <li>Strong tooling</li>
                      <li>Multilingual models out-of-the-box</li>
                      <li>Rule integration capability</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Quality depends on pretrained model/domain fit</li>
                      <li>Custom labels need data</li>
                      <li>Limited transparency into pretrained errors</li>
                      <li>Model size vs. accuracy tradeoffs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Approach 8: spaCy production-ready NER pipeline'
        }
      ]
    },
    {
      id: 'bert',
      title: 'BERT Fine-Tuned for NER',
      slides: [
        {
          id: 11,
          title: '9) BERT Fine-Tuned for NER',
          icon: { name: 'duo-brain-circuit' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Model Type:</strong> Transformer encoder (BERT) with token classification head (softmax) ± CRF layer.</p>
                  </div>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`BertForTokenClassification(num_labels=9)`}</pre>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Training Data Needed:</strong> Labeled BIO/IOB sequences (5k–50k sentences) leveraging large-scale pretraining.</p>
                  </div>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Best Use Case:</strong> High-accuracy NER, domain adaptation via domain-specific BERT (e.g., BioBERT, FinBERT).</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Strong context modeling</li>
                      <li>Performs well with moderate data</li>
                      <li>Transferable and robust</li>
                      <li>Pre-trained language knowledge</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Compute/latency heavy</li>
                      <li>Subword alignment adds complexity</li>
                      <li>Privacy/compliance considerations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Approach 9: BERT fine-tuned for high-accuracy NER'
        }
      ]
    },
    {
      id: 'roberta-distilbert',
      title: 'RoBERTa / DistilBERT NER Models',
      slides: [
        {
          id: 12,
          title: '10) RoBERTa / DistilBERT NER Models',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Model Type:</strong> Transformer variants; RoBERTa (accuracy-optimized), DistilBERT (compressed for speed) with token classification.</p>
                  </div>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`from transformers import AutoTokenizer, AutoModelForTokenClassification`}</pre>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Training Data Needed:</strong> Same as BERT; fine-tune on labeled NER data; distillation handled in pretraining of DistilBERT.</p>
                  </div>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Best Use Case:</strong> Balancing accuracy and latency; edge/real-time constraints; production cost optimization.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>RoBERTa often outperforms BERT</li>
                      <li>DistilBERT is smaller/faster</li>
                      <li>Good accuracy retention</li>
                      <li>Better suited for production</li>
                      <li>Optimized training techniques</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>DistilBERT has slightly lower accuracy</li>
                      <li>Still benefits from GPUs</li>
                      <li>Requires careful tuning</li>
                      <li>Quantization may be required</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: 'Approach 10: RoBERTa/DistilBERT for optimized performance'
        }
      ]
    },
    {
      id: 'llm-zeroshot',
      title: 'LLM / Zero-Shot NER',
      slides: [
        {
          id: 13,
          title: '11) LLM / Zero-Shot NER',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Model Type:</strong> Large instruction-tuned LMs prompted for extraction (zero-/few-shot) or lightly fine-tuned (PEFT/LoRA).</p>
                  </div>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`prompt: "Extract person and organization names from this text: {text}"`}</pre>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Training Data Needed:</strong> None for zero-shot; few-shot examples in prompt; optional small labeled set for prompt-tuning.</p>
                  </div>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                    <p><strong>Best Use Case:</strong> Rapid prototyping, new schemas, low-data domains, complex instructions, multilingual scenarios.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', marginTop: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>No labeled data needed</li>
                      <li>Flexible schemas</li>
                      <li>Can reason and follow instructions</li>
                      <li>Fast iteration</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Hallucinations/inconsistency</li>
                      <li>Privacy/regulatory concerns</li>
                      <li>Higher cost/latency</li>
                      <li>Output parsing needed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Approach 11: LLM zero-shot NER for rapid prototyping'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 14,
          title: 'Summary & Comparison',
          content: (
            <div style={{ textAlign: 'left', fontSize: '0.7em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4fc3f7', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-map" sizeName="2x" darkModeInvert={true} />
                    Quick Selection Guide
                  </h3>
                  <ul style={{ fontSize: '0.95em', lineHeight: '1.8', listStyle: 'none', paddingLeft: 0 }}>
                    <li><strong>No data, strict formats:</strong> Rule-Based, Gazetteer</li>
                    <li><strong>Small data, stable schemas:</strong> CRF, spaCy</li>
                    <li><strong>Moderate data, accuracy:</strong> BiLSTM+CRF, CNN+BiLSTM</li>
                    <li><strong>Best accuracy:</strong> BERT/RoBERTa</li>
                    <li><strong>Low latency/edge:</strong> DistilBERT, optimized spaCy</li>
                    <li><strong>New schema/zero data:</strong> LLM Zero-/Few-Shot</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#81c784', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                    Data Needs Spectrum
                  </h3>
                  <div style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <p><strong>Training examples needed:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Rule-Based, Gazetteer: <span style={{ color: '#4fc3f7' }}>0 examples</span></li>
                      <li>CRF/HMM: <span style={{ color: '#81c784' }}>1,000-5,000 examples</span></li>
                      <li>BiLSTM models: <span style={{ color: '#ffb74d' }}>5,000-50,000 examples</span></li>
                      <li>Transformers: <span style={{ color: '#ba68c8' }}>3,000-30,000 examples</span></li>
                      <li>Zero-shot LLMs: <span style={{ color: '#f06292' }}>0-10 examples in prompt</span></li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffb74d', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-clock" sizeName="2x" darkModeInvert={true} />
                    Compute & Latency
                  </h3>
                  <div style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <p><strong>Inference time (100 tokens):</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Rule-Based/Gazetteer: <span style={{ color: '#4fc3f7' }}>&lt;1ms</span></li>
                      <li>CRF/HMM: <span style={{ color: '#81c784' }}>~5-10ms</span></li>
                      <li>BiLSTM+CRF: <span style={{ color: '#ffb74d' }}>~20-50ms</span></li>
                      <li>DistilBERT: <span style={{ color: '#ba68c8' }}>~20-100ms</span></li>
                      <li>BERT/RoBERTa: <span style={{ color: '#f06292' }}>~50-200ms</span></li>
                      <li>LLMs: <span style={{ color: '#ef5350' }}>500ms-5s+</span></li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ba68c8', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-rocket" sizeName="2x" darkModeInvert={true} />
                    Maintenance & Deployment
                  </h3>
                  <div style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <p><strong>Maintenance:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Rules/Gazetteers: frequent manual updates</li>
                      <li>Classical ML: periodic retraining</li>
                      <li>Transformers: retrain/fine-tune when domain shifts</li>
                      <li>LLMs: prompt monitoring, guardrails, parsing</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '25px', padding: '15px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '8px' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="1x" darkModeInvert={true} />
                  Deployment Tips
                </h4>
                <ul style={{ fontSize: '0.9em', lineHeight: '1.6', marginBottom: 0 }}>
                  <li>Combine methods (rules+ML) for better results</li>
                  <li>Add normalization/entity linking step</li>
                  <li>Monitor for concept drift</li>
                  <li>Consider privacy compliance for PII</li>
                  <li>Quantize models when possible for edge</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Summary and comparison of all 11 NER approaches with selection guide'
        }
      ]
    }
  ]
};
