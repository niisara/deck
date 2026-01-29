import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const nerTrainingDeck: Deck = {
  id: 'ner-training-deck',
  name: '9 Custom NER Training Tips',
  description: 'Cheat sheets for practical, high-accuracy NER in specialized domains',
  category: 'NLP',
  theme: 'moon',
  slides: [],
  slideGroups: [
    {
      id: 'intro',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          center: true,
          title: '9 Custom NER Training Tips',
          content: (
            <div>
              <h4>for Domain-Specific Use Cases</h4>
              <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '30px', fontSize: '36px' }}>
                <SvgIcon iconName="duo-brain" sizeName="2x" darkModeInvert={true} />
                Cheat sheets for practical, high-accuracy NER in specialized domains
              </p>
              <p><strong>Prepared by:</strong> Nisar A</p>
              <p><strong>Date:</strong> November 7, 2025</p>
              <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
            </div>
          ),
          backgroundColor: '#1e3a5f',
          notes: ''
        },
        {
          id: 2,
          title: 'What You\'ll Learn',
          icon: { name: 'duo-graduation-cap' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '1em' }}>
                <ul style={{ lineHeight: '2' }}>
                  <li><strong>9 actionable tips</strong> for building domain-specific NER models</li>
                  <li><strong>Cheat-sheet structure</strong> per tip: Goal, How It Works, When to Use, Steps, Pros, Cons</li>
                  <li><strong>Summary and next steps</strong> for implementation</li>
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
      id: 'tip-1',
      title: 'Tip 1: Build a Domain-Specific Entity Dictionary',
      slides: [
        {
          id: 3,
          title: 'Tip 1: Build a Domain-Specific Entity Dictionary',
          icon: { name: 'duo-book' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>Goal</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Boost recall and speed up labeling with authoritative entity lists.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>How It Works</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Use curated gazetteers/ontologies (names, codes, aliases) to pre-tag text, add features, or generate weak labels.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>When to Use</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Limited labeled data, high domain jargon, recall-critical tasks.</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#1a3a52',
          notes: ''
        },
        {
          id: 4,
          title: 'Steps',
          content: (
            <div style={{ textAlign: 'left' }}>
              <ol style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                <li>Aggregate sources (docs, catalogs, codes, ontologies)</li>
                <li>Normalize (casefold, stemming/lemmatization, canonical forms, aliases)</li>
                <li>Deduplicate, type each entry, track versions</li>
                <li>Integrate as pre-annotations, matchers, or distant supervision</li>
                <li>Evaluate precision/recall; add disambiguation and stoplists</li>
              </ol>
            </div>
          ),
          backgroundColor: '#1a3a52',
          notes: ``
        },
        {
          id: 5,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                <h4>Pros</h4>
              </div>
              <ul style={{ fontSize: '0.7em' }}>
                <li>Rapid recall gains</li>
                <li>Accelerates annotation</li>
                <li>Domain control</li>
              </ul>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                <h4>Cons</h4>
              </div>
              <ul style={{ fontSize: '0.7em' }}>
                <li>Maintenance overhead</li>
                <li>Ambiguity can raise false positives</li>
                <li>May miss contextual variants</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1a3a52',
          notes: ``
        }
      ]
    },
    {
      id: 'tip-2',
      title: 'Tip 2: Create High-Quality Annotated Training Data',
      slides: [
        {
          id: 6,
          title: 'Tip 2: Create High-Quality Annotated Training Data',
          icon: { name: 'duo-pen-to-square' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>Goal</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Provide reliable supervision for entity types and boundaries.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>How It Works</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Expert human annotations with QA, double-labeling, and adjudication form a gold standard.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>When to Use</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>New domain/schema; training from scratch or fine-tuning.</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#2d5016',
          notes: ''
        },
        {
          id: 7,
          title: 'Steps',
          content: (
            <div style={{ textAlign: 'left' }}>
              <ol style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                <li>Define entity schema with examples and counter-examples</li>
                <li>Sample a representative corpus (sources, time ranges, formats)</li>
                <li>Train annotators; run calibration rounds</li>
                <li>Double-annotate 10–20%; adjudicate; measure IAA (F1/Kappa)</li>
                <li>Split gold/dev/test; document decisions</li>
              </ol>
            </div>
          ),
          backgroundColor: '#2d5016',
          notes: ``
        },
        {
          id: 8,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                <h4>Pros</h4>
              </div>
              <ul style={{ fontSize: '0.7em' }}>
                <li>Higher model ceiling</li>
                <li>Trustworthy eval</li>
                <li>Reusable assets</li>
              </ul>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                <h4>Cons</h4>
              </div>
              <ul style={{ fontSize: '0.7em' }}>
                <li>Costly</li>
                <li>Time-consuming</li>
                <li>Requires expert availability</li>
              </ul>
            </div>
          ),
          backgroundColor: '#2d5016',
          notes: ``
        }
      ]
    },
    {
      id: 'tip-3',
      title: 'Tip 3: Use Consistent Annotation Guidelines',
      slides: [
        {
          id: 9,
          title: 'Tip 3: Use Consistent Annotation Guidelines',
          icon: { name: 'duo-clipboard-list' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>Goal</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Reduce label noise and ensure reproducibility across annotators.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>How It Works</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>A clear style guide defines boundaries, inclusion/exclusion, and tie-breakers with examples.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>When to Use</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Multiple annotators, long projects, or outsourced labeling.</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#4a4e69',
          notes: ''
        },
        {
          id: 10,
          title: 'Steps',
          content: (
            <div style={{ textAlign: 'left' }}>
              <ol style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                <li>Write rules for boundaries (titles, punctuation, units, hyphens)</li>
                <li>Specify entity linking rules and overlapping entities policy</li>
                <li>Add tricky-case examples and decision trees</li>
                <li>Maintain a changelog; communicate updates</li>
                <li>Audit samples weekly; monitor IAA</li>
              </ol>
            </div>
          ),
          backgroundColor: '#4a4e69',
          notes: ``
        },
        {
          id: 11,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                <h4>Pros</h4>
              </div>
              <ul style={{ fontSize: '0.7em' }}>
                <li>Higher agreement</li>
                <li>Faster labeling</li>
                <li>Fewer reworks</li>
              </ul>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                <h4>Cons</h4>
              </div>
              <ul style={{ fontSize: '0.7em' }}>
                <li>Upfront effort</li>
                <li>May seem rigid</li>
                <li>Needs maintenance</li>
              </ul>
            </div>
          ),
          backgroundColor: '#4a4e69',
          notes: ``
        }
      ]
    },
    {
      id: 'tip-4',
      title: 'Tip 4: Label Data with Real Domain Context (Not Synthetic Only)',
      slides: [
        {
          id: 12,
          title: 'Tip 4: Label Data with Real Domain Context (Not Synthetic Only)',
          icon: { name: 'duo-file-lines' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>Goal</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Ensure models generalize to production text and edge cases.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>How It Works</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Use in-the-wild data with real noise, formats, and abbreviations; supplement with synthetic.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>When to Use</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Messy sources (EHRs, logs, contracts), unique jargon, compliance contexts.</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#3e2c57',
          notes: ''
        },
        {
          id: 13,
          title: 'Steps',
          content: (
            <div style={{ textAlign: 'left' }}>
              <ol style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                <li>Source data ethically; de-identify as needed</li>
                <li>Stratify by source, time, author style, and difficulty</li>
                <li>Complement with targeted synthetic to balance classes</li>
                <li>Track domain shift; refresh samples periodically</li>
              </ol>
            </div>
          ),
          backgroundColor: '#3e2c57',
          notes: ``
        },
        {
          id: 14,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                <h4>Pros</h4>
              </div>
              <ul style={{ fontSize: '0.7em' }}>
                <li>Robust performance</li>
                <li>Captures rare patterns</li>
                <li>Better reflects production environments</li>
              </ul>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                <h4>Cons</h4>
              </div>
              <ul style={{ fontSize: '0.7em' }}>
                <li>Access/privacy constraints</li>
                <li>Harder, slower annotation</li>
                <li>May require legal/compliance review</li>
              </ul>
            </div>
          ),
          backgroundColor: '#3e2c57',
          notes: ``
        }
      ]
    },
    {
      id: 'tip-5',
      title: 'Tip 5: Fine-Tune Pretrained Transformer Models',
      slides: [
        {
          id: 15,
          title: 'Tip 5: Fine-Tune Pretrained Transformer Models',
          icon: { name: 'duo-brain-circuit' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>Goal</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Achieve strong accuracy with less labeled data via transfer learning.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>How It Works</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Add a token-classification head (optionally CRF) on a pretrained encoder and fine-tune on your labels.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>When to Use</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Limited data, complex language, multilingual, or domain-adapted models available.</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#770022',
          notes: ''
        },
        {
          id: 16,
          title: 'Steps',
          content: (
            <div style={{ textAlign: 'left' }}>
              <ol style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                <li>Choose base (e.g., BERT/RoBERTa + domain variants)</li>
                <li>Tokenize; align labels to wordpieces; handle sub-token tags</li>
                <li>Set hyperparams (lr, batch size, weight decay, early stopping)</li>
                <li>Use class weighting or focal loss for imbalance</li>
                <li>Validate; consider PEFT/LoRA for efficiency; export for serving</li>
              </ol>
            </div>
          ),
          backgroundColor: '#770022',
          notes: ``
        },
        {
          id: 17,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                <h4>Pros</h4>
              </div>
              <ul style={{ fontSize: '0.7em' }}>
                <li>Strong baselines</li>
                <li>Faster convergence</li>
                <li>Reusable</li>
              </ul>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                <h4>Cons</h4>
              </div>
              <ul style={{ fontSize: '0.7em' }}>
                <li>Compute/latency costs</li>
                <li>Risk of overfitting/forgetting</li>
                <li>Careful tuning needed</li>
              </ul>
            </div>
          ),
          backgroundColor: '#770022',
          notes: ``
        }
      ]
    },
    {
      id: 'tip-6',
      title: 'Tip 6: Use Data Augmentation for Rare Entities',
      slides: [
        {
          id: 18,
          title: 'Tip 6: Use Data Augmentation for Rare Entities',
          icon: { name: 'duo-copy' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>Goal</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Improve recall for low-frequency classes and long-tail entities.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>How It Works</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Generate realistic variants via synonym/alias swaps, back-translation, masked-LM infill, and pattern templates.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>When to Use</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Class imbalance; few-shot entities; costly labeling.</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#10508f',
          notes: ''
        },
        {
          id: 19,
          title: 'Steps',
          content: (
            <div style={{ textAlign: 'left' }}>
              <ol style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                <li>Identify rare classes via label distribution</li>
                <li>Define safe ops that preserve meaning and boundaries</li>
                <li>Generate candidates; human-review a sample</li>
                <li>Mix 10–30% augmented with real data; monitor metrics</li>
              </ol>
            </div>
          ),
          backgroundColor: '#10508f',
          notes: ``
        },
        {
          id: 20,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                <h4>Pros</h4>
              </div>
              <ul style={{ fontSize: '0.7em' }}>
                <li>Better coverage</li>
                <li>Cheaper than new labels</li>
              </ul>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                <h4>Cons</h4>
              </div>
              <ul style={{ fontSize: '0.7em' }}>
                <li>Artifacts can mislead model</li>
                <li>Unrealistic text</li>
                <li>Boundary drift risk</li>
              </ul>
            </div>
          ),
          backgroundColor: '#10508f',
          notes: ``
        }
      ]
    },
    {
      id: 'tip-7',
      title: 'Tip 7: Add Negative Examples to Reduce False Positives',
      slides: [
        {
          id: 21,
          title: 'Tip 7: Add Negative Examples to Reduce False Positives',
          icon: { name: 'duo-shield-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>Goal</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Increase precision by teaching the model what is not an entity.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>How It Works</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Include near-miss spans and ambiguous terms labeled as O; mine hard negatives from model errors.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>When to Use</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>High false-positive rates; ambiguous terminology; rule-assisted pre-annotations.</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#304f1a',
          notes: ''
        },
        {
          id: 22,
          title: 'Steps',
          content: (
            <div style={{ textAlign: 'left' }}>
              <ol style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                <li>Log false positives from dev/prod</li>
                <li>Mine hard negatives and add to training with weights</li>
                <li>Create stoplists and context rules (e.g., titles vs names)</li>
                <li>Rebalance batches; track PR curves and thresholds</li>
              </ol>
            </div>
          ),
          backgroundColor: '#304f1a',
          notes: ``
        },
        {
          id: 23,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                <h4>Pros</h4>
              </div>
              <ul style={{ fontSize: '0.7em' }}>
                <li>Precision gains</li>
                <li>Better disambiguation</li>
              </ul>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                <h4>Cons</h4>
              </div>
              <ul style={{ fontSize: '0.7em' }}>
                <li>May reduce recall</li>
                <li>Needs ongoing curation</li>
              </ul>
            </div>
          ),
          backgroundColor: '#304f1a',
          notes: ``
        }
      ]
    },
    {
      id: 'tip-8',
      title: 'Tip 8: Use Entity Boundary Correction Rules',
      slides: [
        {
          id: 24,
          title: 'Tip 8: Use Entity Boundary Correction Rules',
          icon: { name: 'duo-brackets-square' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>Goal</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Fix systematic boundary errors without retraining.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>How It Works</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Apply deterministic post-processing (regex/heuristics) or decoding constraints to trim/expand spans.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>When to Use</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Consistent punctuation/units/brackets issues; hyphenated terms; titles.</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#7b2b00',
          notes: ''
        },
        {
          id: 25,
          title: 'Steps',
          content: (
            <div style={{ textAlign: 'left' }}>
              <ol style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                <li>Analyze error patterns by entity and token type</li>
                <li>Write rules (e.g., include units, exclude trailing punctuation, merge hyphenated tokens)</li>
                <li>Insert a post-processing step in the pipeline; add unit tests</li>
              </ol>
            </div>
          ),
          backgroundColor: '#7b2b00',
          notes: ``
        },
        {
          id: 26,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                <h4>Pros</h4>
              </div>
              <ul style={{ fontSize: '0.7em' }}>
                <li>Quick wins</li>
                <li>Transparent</li>
                <li>Easy to revert</li>
              </ul>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                <h4>Cons</h4>
              </div>
              <ul style={{ fontSize: '0.7em' }}>
                <li>Brittle</li>
                <li>Domain/language-specific</li>
                <li>Maintenance needed</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b2b00',
          notes: ``
        }
      ]
    },
    {
      id: 'tip-9',
      title: 'Tip 9: Perform Iterative Error Analysis and Retraining',
      slides: [
        {
          id: 27,
          title: 'Tip 9: Perform Iterative Error Analysis and Retraining',
          icon: { name: 'duo-chart-line' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>Goal</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Drive continuous improvement aligned with business impact.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>How It Works</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Bucket errors, collect targeted new data, retrain, and re-evaluate on stable benchmarks.</li>
                </ul>
              </div>
              <div style={{ marginBottom: '0.7em' }}>
                <h4>When to Use</h4>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>After baseline; after data/model changes; ongoing operations.</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#7b1fa2',
          notes: ''
        },
        {
          id: 28,
          title: 'Steps',
          content: (
            <div style={{ textAlign: 'left' }}>
              <ol style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                <li>Build slice metrics and confusion matrices</li>
                <li>Create error taxonomy (boundary, type, context, OOV)</li>
                <li>Prioritize by impact; collect/label new examples</li>
                <li>Retrain; A/B test; monitor drift and regression</li>
              </ol>
            </div>
          ),
          backgroundColor: '#7b1fa2',
          notes: ``
        },
        {
          id: 29,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                <h4>Pros</h4>
              </div>
              <ul style={{ fontSize: '0.7em' }}>
                <li>Compounding gains</li>
                <li>Focused data spend</li>
                <li>Robust models</li>
              </ul>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                <h4>Cons</h4>
              </div>
              <ul style={{ fontSize: '0.7em' }}>
                <li>Requires sustained effort</li>
                <li>Risk of overfitting to test</li>
                <li>Ops overhead</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b1fa2',
          notes: ``
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 30,
          title: 'Summary',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                  Key Takeaways
                </h3>
                <ul style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                  <li>Mix domain dictionaries, real-context data, and strong pretrained models</li>
                  <li>Enforce consistent guidelines; invest in gold data and IAA</li>
                  <li>Control precision/recall via negatives and boundary rules</li>
                  <li>Improve iteratively with error analysis and targeted retraining</li>
                </ul>

                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                  <SvgIcon iconName="duo-gauge-high" sizeName="2x" darkModeInvert={true} />
                  Metrics to Monitor
                </h3>
                <ul style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                  <li>Precision/Recall/F1 per entity</li>
                  <li>Boundary accuracy</li>
                  <li>Slice metrics (document types, entity frequencies)</li>
                  <li>Inference latency</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#283593',
          notes: ''
        },
        {
          id: 31,
          title: 'Next Steps',
          icon: { name: 'duo-list-ol' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <ol style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                <li>Draft schema and guidelines</li>
                <li>Build v1 dictionary and sample real data</li>
                <li>Fine-tune a baseline model; set eval harness</li>
                <li>Start error log; plan augmentation and negatives</li>
              </ol>
            </div>
          ),
          backgroundColor: '#283593',
          notes: ''
        },
        {
          id: 32,
          title: 'Risks & Mitigations',
          icon: { name: 'duo-triangle-exclamation' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '0.95em' }}>
                <div style={{ marginBottom: '25px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-lock" sizeName="2x" style={{ color: '#e91e63' }} darkModeInvert={true} />
                    <strong>Data access/privacy</strong> → de-identification, approvals
                  </p>
                </div>
                <div style={{ marginBottom: '25px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-arrow-trend-down" sizeName="2x" style={{ color: '#ff5722' }} darkModeInvert={true} />
                    <strong>Model drift</strong> → scheduled refresh, monitoring, versioning
                  </p>
                </div>
                <div style={{ marginBottom: '25px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-battery-quarter" sizeName="2x" style={{ color: '#ffc107' }} darkModeInvert={true} />
                    <strong>Resource constraints</strong> → prioritize entity types, phase rollouts
                  </p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#283593',
          notes: ''
        }
      ]
    }
  ]
};
