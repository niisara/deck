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
          title: '9 Custom NER Training Tips',
          content: (
            <div style={{ textAlign: 'left' }}>
              <h2>for Domain-Specific Use Cases</h2>
              <p style={{ fontSize: '1.2em', marginTop: '30px' }}>
                <SvgIcon iconName="duo-brain" sizeName="2x" style={{ marginRight: '15px', verticalAlign: 'middle' }} darkModeInvert={true} />
                Cheat sheets for practical, high-accuracy NER in specialized domains
              </p>
              <div style={{ display: 'flex', gap: '30px', marginTop: '50px', fontSize: '0.9em' }}>
                <div>
                  <p><strong>Presenter:</strong> [Your Name]</p>
                </div>
                <div>
                  <p><strong>Date:</strong> November 7, 2025</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1e3a5f',
          notes: 'Title slide introducing the 9 NER training tips'
        },
        {
          id: 2,
          title: 'What You\'ll Learn',
          icon: { name: 'duo-graduation-cap' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ maxWidth: '900px', fontSize: '1em' }}>
                <ul style={{ lineHeight: '2' }}>
                  <li><strong>9 actionable tips</strong> for building domain-specific NER models</li>
                  <li><strong>Cheat-sheet structure</strong> per tip: Goal, How It Works, When to Use, Steps, Pros, Cons</li>
                  <li><strong>Summary and next steps</strong> for implementation</li>
                </ul>
              </div>
              <div style={{ display: 'flex', gap: '25px', marginTop: '50px' }}>
                <SvgIcon iconName="duo-book-open" sizeName="2x" darkModeInvert={true} />
                <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                <SvgIcon iconName="duo-rocket" sizeName="2x" darkModeInvert={true} />
              </div>
            </div>
          ),
          backgroundColor: '#2d4a6f',
          notes: 'Overview of what the audience will learn'
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
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <p><strong>Goal:</strong> Boost recall and speed up labeling with authoritative entity lists.</p>
                <p><strong>How It Works:</strong> Use curated gazetteers/ontologies (names, codes, aliases) to pre-tag text, add features, or generate weak labels.</p>
                <p><strong>When to Use:</strong> Limited labeled data, high domain jargon, recall-critical tasks.</p>
                <div style={{ marginTop: '15px' }}>
                  <p><strong>Steps:</strong></p>
                  <ol style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                    <li>Aggregate sources (docs, catalogs, codes, ontologies)</li>
                    <li>Normalize (casefold, stemming/lemmatization, canonical forms, aliases)</li>
                    <li>Deduplicate, type each entry, track versions</li>
                    <li>Integrate as pre-annotations, matchers, or distant supervision</li>
                    <li>Evaluate precision/recall; add disambiguation and stoplists</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '15px', fontSize: '0.75em' }}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong> Rapid recall gains; accelerates annotation; domain control</p>
                  </div>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong> Maintenance overhead; ambiguity can raise false positives</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a3a52',
          notes: 'Tip 1: Building domain-specific entity dictionaries for better recall'
        }
      ]
    },
    {
      id: 'tip-2',
      title: 'Tip 2: Create High-Quality Annotated Training Data',
      slides: [
        {
          id: 4,
          title: 'Tip 2: Create High-Quality Annotated Training Data',
          icon: { name: 'duo-pen-to-square' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <p><strong>Goal:</strong> Provide reliable supervision for entity types and boundaries.</p>
                <p><strong>How It Works:</strong> Expert human annotations with QA, double-labeling, and adjudication form a gold standard.</p>
                <p><strong>When to Use:</strong> New domain/schema; training from scratch or fine-tuning.</p>
                <div style={{ marginTop: '15px' }}>
                  <p><strong>Steps:</strong></p>
                  <ol style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                    <li>Define entity schema with examples and counter-examples</li>
                    <li>Sample a representative corpus (sources, time ranges, formats)</li>
                    <li>Train annotators; run calibration rounds</li>
                    <li>Double-annotate 10–20%; adjudicate; measure IAA (F1/Kappa)</li>
                    <li>Split gold/dev/test; document decisions</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '15px', fontSize: '0.75em' }}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong> Higher model ceiling; trustworthy eval; reusable assets</p>
                  </div>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong> Costly; time-consuming; requires expert availability</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#2d5016',
          notes: 'Tip 2: Creating high-quality annotated data with expert labeling'
        }
      ]
    },
    {
      id: 'tip-3',
      title: 'Tip 3: Use Consistent Annotation Guidelines',
      slides: [
        {
          id: 5,
          title: 'Tip 3: Use Consistent Annotation Guidelines',
          icon: { name: 'duo-clipboard-list' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <p><strong>Goal:</strong> Reduce label noise and ensure reproducibility across annotators.</p>
                <p><strong>How It Works:</strong> A clear style guide defines boundaries, inclusion/exclusion, and tie-breakers with examples.</p>
                <p><strong>When to Use:</strong> Multiple annotators, long projects, or outsourced labeling.</p>
                <div style={{ marginTop: '15px' }}>
                  <p><strong>Steps:</strong></p>
                  <ol style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                    <li>Write rules for boundaries (titles, punctuation, units, hyphens)</li>
                    <li>Specify entity linking rules and overlapping entities policy</li>
                    <li>Add tricky-case examples and decision trees</li>
                    <li>Maintain a changelog; communicate updates</li>
                    <li>Audit samples weekly; monitor IAA</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '15px', fontSize: '0.75em' }}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong> Higher agreement; faster labeling; fewer reworks</p>
                  </div>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong> Upfront effort; may seem rigid; needs maintenance</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#4a4e69',
          notes: 'Tip 3: Consistent annotation guidelines for reproducibility'
        }
      ]
    },
    {
      id: 'tip-4',
      title: 'Tip 4: Label Data with Real Domain Context',
      slides: [
        {
          id: 6,
          title: 'Tip 4: Label Data with Real Domain Context',
          icon: { name: 'duo-file-lines' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <p><strong>Goal:</strong> Ensure models generalize to production text and edge cases.</p>
                <p><strong>How It Works:</strong> Use in-the-wild data with real noise, formats, and abbreviations; supplement with synthetic.</p>
                <p><strong>When to Use:</strong> Messy sources (EHRs, logs, contracts), unique jargon, compliance contexts.</p>
                <div style={{ marginTop: '15px' }}>
                  <p><strong>Steps:</strong></p>
                  <ol style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                    <li>Source data ethically; de-identify as needed</li>
                    <li>Stratify by source, time, author style, and difficulty</li>
                    <li>Complement with targeted synthetic to balance classes</li>
                    <li>Track domain shift; refresh samples periodically</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '15px', fontSize: '0.75em' }}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong> Robust performance; captures rare patterns; reflects production</p>
                  </div>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong> Access/privacy constraints; harder, slower annotation</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6a4c93',
          notes: 'Tip 4: Using real domain context instead of synthetic-only data'
        }
      ]
    },
    {
      id: 'tip-5',
      title: 'Tip 5: Fine-Tune Pretrained Transformer Models',
      slides: [
        {
          id: 7,
          title: 'Tip 5: Fine-Tune Pretrained Transformer Models',
          icon: { name: 'duo-brain-circuit' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <p><strong>Goal:</strong> Achieve strong accuracy with less labeled data via transfer learning.</p>
                <p><strong>How It Works:</strong> Add a token-classification head (optionally CRF) on a pretrained encoder and fine-tune on your labels.</p>
                <p><strong>When to Use:</strong> Limited data, complex language, multilingual, or domain-adapted models available.</p>
                <div style={{ marginTop: '15px' }}>
                  <p><strong>Steps:</strong></p>
                  <ol style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                    <li>Choose base (e.g., BERT/RoBERTa + domain variants)</li>
                    <li>Tokenize; align labels to wordpieces; handle sub-token tags</li>
                    <li>Set hyperparams (lr, batch size, weight decay, early stopping)</li>
                    <li>Use class weighting or focal loss for imbalance</li>
                    <li>Validate; consider PEFT/LoRA for efficiency; export for serving</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '15px', fontSize: '0.75em' }}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong> Strong baselines; faster convergence; reusable</p>
                  </div>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong> Compute/latency costs; risk of overfitting</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#c9184a',
          notes: 'Tip 5: Fine-tuning pretrained transformer models for NER'
        }
      ]
    },
    {
      id: 'tip-6',
      title: 'Tip 6: Use Data Augmentation for Rare Entities',
      slides: [
        {
          id: 8,
          title: 'Tip 6: Use Data Augmentation for Rare Entities',
          icon: { name: 'duo-copy' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <p><strong>Goal:</strong> Improve recall for low-frequency classes and long-tail entities.</p>
                <p><strong>How It Works:</strong> Generate realistic variants via synonym/alias swaps, back-translation, masked-LM infill, and pattern templates.</p>
                <p><strong>When to Use:</strong> Class imbalance; few-shot entities; costly labeling.</p>
                <div style={{ marginTop: '15px' }}>
                  <p><strong>Steps:</strong></p>
                  <ol style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                    <li>Identify rare classes via label distribution</li>
                    <li>Define safe ops that preserve meaning and boundaries</li>
                    <li>Generate candidates; human-review a sample</li>
                    <li>Mix 10–30% augmented with real data; monitor metrics</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '15px', fontSize: '0.75em' }}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong> Better coverage; cheaper than new labels</p>
                  </div>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong> Artifacts can mislead model; unrealistic text; boundary drift risk</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1976d2',
          notes: 'Tip 6: Data augmentation techniques for rare entities'
        }
      ]
    },
    {
      id: 'tip-7',
      title: 'Tip 7: Add Negative Examples to Reduce False Positives',
      slides: [
        {
          id: 9,
          title: 'Tip 7: Add Negative Examples to Reduce False Positives',
          icon: { name: 'duo-shield-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <p><strong>Goal:</strong> Increase precision by teaching the model what is not an entity.</p>
                <p><strong>How It Works:</strong> Include near-miss spans and ambiguous terms labeled as O; mine hard negatives from model errors.</p>
                <p><strong>When to Use:</strong> High false-positive rates; ambiguous terminology; rule-assisted pre-annotations.</p>
                <div style={{ marginTop: '15px' }}>
                  <p><strong>Steps:</strong></p>
                  <ol style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                    <li>Log false positives from dev/prod</li>
                    <li>Mine hard negatives and add to training with weights</li>
                    <li>Create stoplists and context rules (e.g., titles vs names)</li>
                    <li>Rebalance batches; track PR curves and thresholds</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '15px', fontSize: '0.75em' }}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong> Precision gains; better disambiguation</p>
                  </div>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong> May reduce recall; needs ongoing curation</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#558b2f',
          notes: 'Tip 7: Using negative examples to reduce false positives'
        }
      ]
    },
    {
      id: 'tip-8',
      title: 'Tip 8: Use Entity Boundary Correction Rules',
      slides: [
        {
          id: 10,
          title: 'Tip 8: Use Entity Boundary Correction Rules',
          icon: { name: 'duo-brackets-square' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <p><strong>Goal:</strong> Fix systematic boundary errors without retraining.</p>
                <p><strong>How It Works:</strong> Apply deterministic post-processing (regex/heuristics) or decoding constraints to trim/expand spans.</p>
                <p><strong>When to Use:</strong> Consistent punctuation/units/brackets issues; hyphenated terms; titles.</p>
                <div style={{ marginTop: '15px' }}>
                  <p><strong>Steps:</strong></p>
                  <ol style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                    <li>Analyze error patterns by entity and token type</li>
                    <li>Write rules (e.g., include units, exclude trailing punctuation, merge hyphenated tokens)</li>
                    <li>Insert a post-processing step in the pipeline; add unit tests</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '15px', fontSize: '0.75em' }}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong> Quick wins; transparent; easy to revert</p>
                  </div>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong> Brittle; domain/language-specific; maintenance needed</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#e65100',
          notes: 'Tip 8: Entity boundary correction rules for post-processing'
        }
      ]
    },
    {
      id: 'tip-9',
      title: 'Tip 9: Perform Iterative Error Analysis and Retraining',
      slides: [
        {
          id: 11,
          title: 'Tip 9: Perform Iterative Error Analysis and Retraining',
          icon: { name: 'duo-chart-line' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <p><strong>Goal:</strong> Drive continuous improvement aligned with business impact.</p>
                <p><strong>How It Works:</strong> Bucket errors, collect targeted new data, retrain, and re-evaluate on stable benchmarks.</p>
                <p><strong>When to Use:</strong> After baseline; after data/model changes; ongoing operations.</p>
                <div style={{ marginTop: '15px' }}>
                  <p><strong>Steps:</strong></p>
                  <ol style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                    <li>Build slice metrics and confusion matrices</li>
                    <li>Create error taxonomy (boundary, type, context, OOV)</li>
                    <li>Prioritize by impact; collect/label new examples</li>
                    <li>Retrain; A/B test; monitor drift and regression</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '40px', marginTop: '15px', fontSize: '0.75em' }}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong> Compounding gains; focused data spend; robust models</p>
                  </div>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong> Requires sustained effort; risk of overfitting to test</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#7b1fa2',
          notes: 'Tip 9: Iterative error analysis and retraining for continuous improvement'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 12,
          title: 'Summary and Next Steps',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
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

                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                  <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                  Next Steps
                </h3>
                <ol style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                  <li>Draft schema and guidelines</li>
                  <li>Build v1 dictionary and sample real data</li>
                  <li>Fine-tune a baseline model; set eval harness</li>
                  <li>Start error log; plan augmentation and negatives</li>
                </ol>
              </div>
            </div>
          ),
          backgroundColor: '#283593',
          notes: 'Summary with key takeaways, metrics, and next steps'
        },
        {
          id: 13,
          title: 'Risks & Mitigations',
          icon: { name: 'duo-triangle-exclamation' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ maxWidth: '800px', fontSize: '0.95em' }}>
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
              <div style={{ marginTop: '50px', display: 'flex', gap: '20px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="2x" style={{ color: '#4caf50' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-check-double" sizeName="2x" style={{ color: '#4caf50' }} darkModeInvert={true} />
              </div>
            </div>
          ),
          backgroundColor: '#1a237e',
          notes: 'Common risks and their mitigations'
        }
      ]
    }
  ]
};
