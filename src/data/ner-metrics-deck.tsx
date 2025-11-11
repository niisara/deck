import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const nerMetricsDeck: Deck = {
  id: 'ner-metrics',
  name: '7 Evaluation Metrics for NER Models',
  description: 'A concise cheat sheet for evaluating Named Entity Recognition',
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
          title: '7 Evaluation Metrics for NER Models',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '30px' }}>
                <SvgIcon iconName="duo-chart-line" sizeName="4x" style={{ color: '#3498db' }} />
                <SvgIcon iconName="duo-brain" sizeName="4x" style={{ color: '#e74c3c' }} />
                <SvgIcon iconName="duo-lightbulb" sizeName="4x" style={{ color: '#f39c12' }} />
              </div>
              <h3>A concise cheat sheet for evaluating Named Entity Recognition</h3>
              <p><strong>Prepared by:</strong> Nisar Ansari</p>
              <p><strong>Date:</strong> November 7, 2025</p>
              <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
            </div>
          ),
          backgroundColor: '#2C3E50',
          notes: 'Introduction slide for NER evaluation metrics'
        },
        {
          id: 2,
          title: 'How to Evaluate NER: Overview',
          content: `
            <div style="text-align: left;">
              <h3>Context</h3>
              <p>NER predicts entities as spans with types (e.g., PERSON, ORG)</p>
              <p><small>Default: entity-level, strict exact match on span + type, micro-averaged</small></p>
              
              <h3>Key Notation</h3>
              <ul>
                <li><strong>TP:</strong> predicted entity exactly matches a gold entity (span + type)</li>
                <li><strong>FP:</strong> predicted entity with no matching gold</li>
                <li><strong>FN:</strong> gold entity with no matching prediction</li>
                <li><strong>IoU(span):</strong> overlap tokens / union tokens</li>
              </ul>
            </div>
          `,
          backgroundColor: '#34495E',
          notes: 'Overview of NER evaluation context and key notation'
        },
        {
          id: 3,
          title: 'Metrics Covered',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                <SvgIcon iconName="duo-list-check" sizeName="3x" style={{ color: '#3498db' }} />
              </div>
              <ol style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
                <li>Precision</li>
                <li>Recall</li>
                <li>F1 Score</li>
                <li>Exact Match Score</li>
                <li>Partial Match Score</li>
                <li>Entity-Level Accuracy</li>
                <li>Confusion Matrix Analysis</li>
              </ol>
            </div>
          ),
          backgroundColor: '#2980B9',
          notes: 'List of all seven metrics covered in this presentation'
        }
      ]
    },
    {
      id: 'precision',
      title: 'Precision',
      slides: [
        {
          id: 4,
          title: 'Precision (Entity-Level)',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="3x" style={{ color: '#27AE60' }} />
              </div>
              <h3>What It Measures</h3>
              <p>Of all predicted entities, how many are correct (exact span + type)</p>
              
              <h3>Formula</h3>
              <p dangerouslySetInnerHTML={{ __html: '\\[\\text{Precision} = \\frac{TP}{TP + FP}\\]' }} />
              
              <h3>When to Use</h3>
              <ul>
                <li>When false positives are costly</li>
                <li>High-precision applications (e.g., automated actions)</li>
                <li>Tuning decision thresholds</li>
              </ul>
            </div>
          ),
          backgroundColor: '#27AE60',
          notes: 'Precision measures correctness of predictions. Useful when you want to avoid false positives.'
        },
        {
          id: 5,
          title: 'Precision: Pros & Cons',
          content: `
            <div style="text-align: left;">
              <h3>✅ Pros</h3>
              <ul>
                <li>Intuitive; useful for threshold calibration</li>
                <li>Not inflated by abundant O tokens</li>
              </ul>
              
              <h3>⚠️ Cons</h3>
              <ul>
                <li>Ignores missed entities (FN)</li>
                <li>Can be gamed by predicting fewer entities</li>
                <li>Rare-class issues can be masked by micro-averaging</li>
              </ul>
            </div>
          `,
          backgroundColor: '#16A085',
          notes: 'Important trade-offs to consider when using precision alone'
        }
      ]
    },
    {
      id: 'recall',
      title: 'Recall',
      slides: [
        {
          id: 6,
          title: 'Recall (Entity-Level)',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-magnifying-glass" sizeName="3x" style={{ color: '#E67E22' }} />
              </div>
              <h3>What It Measures</h3>
              <p>Of all gold (true) entities, how many did the model find correctly</p>
              
              <h3>Formula</h3>
              <p dangerouslySetInnerHTML={{ __html: '\\[\\text{Recall} = \\frac{TP}{TP + FN}\\]' }} />
              
              <h3>When to Use</h3>
              <ul>
                <li>When missing entities is costly</li>
                <li>Measuring coverage</li>
                <li>Evaluating early-stage models/data sufficiency</li>
              </ul>
            </div>
          ),
          backgroundColor: '#E67E22',
          notes: 'Recall measures coverage - how many true entities were found'
        },
        {
          id: 7,
          title: 'Recall: Pros & Cons',
          content: `
            <div style="text-align: left;">
              <h3>✅ Pros</h3>
              <ul>
                <li>Captures model coverage</li>
                <li>Highlights under-detection and data gaps</li>
              </ul>
              
              <h3>⚠️ Cons</h3>
              <ul>
                <li>Ignores false positives</li>
                <li>Can be inflated by very permissive prediction</li>
                <li>Micro-averaging can hide minority class gaps</li>
              </ul>
            </div>
          `,
          backgroundColor: '#D35400',
          notes: 'Recall trade-offs - good for coverage but ignores false alarms'
        }
      ]
    },
    {
      id: 'f1',
      title: 'F1 Score',
      slides: [
        {
          id: 8,
          title: 'F1 Score (Entity-Level)',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-scale-balanced" sizeName="3x" style={{ color: '#8E44AD' }} />
              </div>
              <h3>What It Measures</h3>
              <p>Balance between precision and recall (harmonic mean)</p>
              
              <h3>Formula</h3>
              <p dangerouslySetInnerHTML={{ __html: '\\[F1 = \\frac{2 \\times (\\text{Precision} \\times \\text{Recall})}{\\text{Precision} + \\text{Recall}}\\]' }} />
              
              <h3>When to Use</h3>
              <ul>
                <li>General-purpose single-number comparison</li>
                <li>Model selection</li>
                <li>Leaderboard reporting</li>
              </ul>
            </div>
          ),
          backgroundColor: '#8E44AD',
          notes: 'F1 score is the most commonly reported metric - balances precision and recall'
        },
        {
          id: 9,
          title: 'F1 Score: Pros & Cons',
          content: `
            <div style="text-align: left;">
              <h3>✅ Pros</h3>
              <ul>
                <li>Balances FP and FN</li>
                <li>Widely understood</li>
                <li>Comparable across models</li>
              </ul>
              
              <h3>⚠️ Cons</h3>
              <ul>
                <li>Hides trade-offs between precision and recall</li>
                <li>Macro vs micro choices can change conclusions</li>
                <li>Threshold-sensitive</li>
              </ul>
            </div>
          `,
          backgroundColor: '#9B59B6',
          notes: 'F1 is standard but can hide important details about model behavior'
        }
      ]
    },
    {
      id: 'exact-match',
      title: 'Exact Match',
      slides: [
        {
          id: 10,
          title: 'Exact Match Score (Sentence-Level)',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-check-double" sizeName="3x" style={{ color: '#C0392B' }} />
              </div>
              <h3>What It Measures</h3>
              <p>Percentage of sentences/documents where the entire set of predicted entities exactly equals the gold set</p>
              
              <h3>Formula</h3>
              <p dangerouslySetInnerHTML={{ __html: '\\[\\text{EM}_i = \\begin{cases} 1 & \\text{if predicted set == gold set} \\\\ 0 & \\text{otherwise} \\end{cases}\\]' }} />
              <p dangerouslySetInnerHTML={{ __html: '\\[\\text{Exact Match Score} = \\text{mean}(\\text{EM}_i)\\]' }} />
              
              <h3>When to Use</h3>
              <ul>
                <li>End-to-end reliability</li>
                <li>Downstream tasks requiring perfect extraction</li>
                <li>Quality gates for production</li>
              </ul>
            </div>
          ),
          backgroundColor: '#C0392B',
          notes: 'Very strict metric - useful for production quality gates'
        },
        {
          id: 11,
          title: 'Exact Match: Pros & Cons',
          content: `
            <div style="text-align: left;">
              <h3>✅ Pros</h3>
              <ul>
                <li>Very strict; reflects true task completeness</li>
                <li>Sensitive to any error</li>
              </ul>
              
              <h3>⚠️ Cons</h3>
              <ul>
                <li>All-or-nothing; punishes minor boundary/label mistakes</li>
                <li>Not decomposable or diagnostic on its own</li>
              </ul>
            </div>
          `,
          backgroundColor: '#E74C3C',
          notes: 'Exact match is very demanding - one mistake means zero credit'
        }
      ]
    },
    {
      id: 'partial-match',
      title: 'Partial Match',
      slides: [
        {
          id: 12,
          title: 'Partial Match Score (IoU-Based)',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-circle-half-stroke" sizeName="3x" style={{ color: '#1ABC9C' }} />
              </div>
              <h3>What It Measures</h3>
              <p>Credit for near-miss spans to reduce sensitivity to boundary noise</p>
              
              <h3>How It Works</h3>
              <p dangerouslySetInnerHTML={{ __html: '\\[\\text{IoU} = \\frac{|\\text{tokens}_\\text{overlap}|}{|\\text{tokens}_\\text{union}|}\\]' }} />
              <p dangerouslySetInnerHTML={{ __html: 'Define a match if \\(\\text{IoU} \\geq \\tau\\) (common \\(\\tau = 0.5\\)) and types match' }} />
              
              <h3>When to Use</h3>
              <ul>
                <li>Datasets with noisy boundaries</li>
                <li>Weak supervision scenarios</li>
                <li>Comparing span detectors fairly</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1ABC9C',
          notes: 'Partial match allows for fuzzy matching - more forgiving of boundary errors'
        },
        {
          id: 13,
          title: 'Partial Match: Pros & Cons',
          content: `
            <div style="text-align: left;">
              <h3>✅ Pros</h3>
              <ul>
                <li>Rewards close spans</li>
                <li>More stable with annotation noise</li>
                <li>Tunable strictness via \\(\\tau\\) threshold</li>
              </ul>
              
              <h3>⚠️ Cons</h3>
              <ul>
                <li>Not standardized (choice of \\(\\tau\\) and matching algorithm matters)</li>
                <li>Can mask consistent boundary errors</li>
                <li>Less comparable across papers if definitions differ</li>
              </ul>
            </div>
          `,
          backgroundColor: '#16A085',
          notes: 'Partial match adds flexibility but requires careful configuration'
        }
      ]
    },
    {
      id: 'entity-accuracy',
      title: 'Entity-Level Accuracy',
      slides: [
        {
          id: 14,
          title: 'Entity-Level Accuracy',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-percent" sizeName="3x" style={{ color: '#3498DB' }} />
              </div>
              <h3>What It Measures</h3>
              <p>Accuracy of entity type classification when spans are given (gold spans)</p>
              <p>Isolates typing from detection to focus solely on classification quality</p>
              
              <h3>Formula</h3>
              <p dangerouslySetInnerHTML={{ __html: '\\[\\text{Accuracy} = \\frac{\\text{# gold entities with correct type}}{\\text{total gold entities}}\\]' }} />
              
              <h3>When to Use</h3>
              <ul>
                <li>Pipeline analysis</li>
                <li>Diagnosing label confusions separate from span detection</li>
                <li>Ablations on classifier heads</li>
              </ul>
            </div>
          ),
          backgroundColor: '#3498DB',
          notes: 'Entity-level accuracy isolates classification from detection'
        },
        {
          id: 15,
          title: 'Entity-Level Accuracy: Pros & Cons',
          content: `
            <div style="text-align: left;">
              <h3>✅ Pros</h3>
              <ul>
                <li>Clear diagnostic of typing component</li>
                <li>Unaffected by detection errors</li>
                <li>Interpretable</li>
              </ul>
              
              <h3>⚠️ Cons</h3>
              <ul>
                <li>Not end-to-end</li>
                <li>Can overstate real-world performance</li>
                <li>Influenced by class imbalance unless macro-averaged</li>
              </ul>
            </div>
          `,
          backgroundColor: '#2980B9',
          notes: 'Good for diagnosis but not for end-to-end evaluation'
        }
      ]
    },
    {
      id: 'confusion-matrix',
      title: 'Confusion Matrix',
      slides: [
        {
          id: 16,
          title: 'Confusion Matrix Analysis',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-table-cells" sizeName="3x" style={{ color: '#E67E22' }} />
              </div>
              <h3>What It Measures</h3>
              <p>Where the model confuses types and how often</p>
              
              <h3>How It Works</h3>
              <ul>
                <li>Rows = gold types, cols = predicted types</li>
                <li>Include counts of Missed (FN) and Spurious (FP) as margins</li>
                <li>Normalize rows to get per-class recall</li>
                <li>Derive per-class precision/recall/F1</li>
              </ul>
              
              <h3>When to Use</h3>
              <ul>
                <li>Diagnosing confusions (e.g., ORG vs PRODUCT)</li>
                <li>Guiding data collection for underperforming classes</li>
                <li>Label schema fixes and refinement</li>
              </ul>
            </div>
          ),
          backgroundColor: '#E67E22',
          notes: 'Confusion matrix provides detailed diagnostic information'
        },
        {
          id: 17,
          title: 'Confusion Matrix: Pros & Cons',
          content: `
            <div style="text-align: left;">
              <h3>✅ Pros</h3>
              <ul>
                <li>Highly diagnostic for targeted improvements</li>
                <li>Reveals minority-class issues often hidden by averaging</li>
                <li>Supports data-driven schema refinement</li>
              </ul>
              
              <h3>⚠️ Cons</h3>
              <ul>
                <li>Not a single-number metric (harder to compare)</li>
                <li>Requires enough data per class for significance</li>
                <li>Depends on chosen matching rule (strict vs partial)</li>
              </ul>
            </div>
          `,
          backgroundColor: '#D35400',
          notes: 'Confusion matrix is diagnostic tool, not a comparison metric'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 18,
          title: 'Summary and Key Takeaways',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-clipboard-check" sizeName="3x" style={{ color: '#27AE60' }} />
              </div>
              <h3>Guidance</h3>
              <ul style={{ fontSize: '0.9em', lineHeight: '1.7' }}>
                <li>Use micro Precision/Recall/F1 with exact matching for standard reporting</li>
                <li>Add Partial-F1 (IoU) when boundary noise is expected</li>
                <li>Track Exact Match (sentence-level) for production readiness</li>
                <li>Use Entity-Level Accuracy (on gold spans) and confusion matrices for diagnosis</li>
              </ul>
            </div>
          ),
          backgroundColor: '#27AE60',
          notes: 'Best practices for choosing and combining metrics'
        },
        {
          id: 19,
          title: "Do's and Don'ts",
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '30px', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="3x" style={{ color: '#27AE60' }} />
                <SvgIcon iconName="duo-circle-xmark" sizeName="3x" style={{ color: '#E74C3C' }} />
              </div>
              <h3>✅ Do's</h3>
              <ul style={{ fontSize: '0.9em', lineHeight: '1.7' }}>
                <li>Define matching rule (strict vs partial), averaging (micro vs macro), and evaluation scope</li>
                <li>Report per-class metrics alongside micro-F1 for imbalanced datasets</li>
              </ul>
              
              <h3>❌ Don'ts</h3>
              <ul style={{ fontSize: '0.9em', lineHeight: '1.7' }}>
                <li>Don't rely on token accuracy or overall accuracy including O tokens</li>
                <li>Don't compare results without aligning evaluation settings</li>
              </ul>
            </div>
          ),
          backgroundColor: '#8E44AD',
          notes: 'Critical do\'s and don\'ts for NER evaluation'
        },
        {
          id: 20,
          title: 'Next Steps',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="3x" style={{ color: '#3498db' }} />
              </div>
              <h3>Action Items</h3>
              <ul style={{ fontSize: '0.9em', lineHeight: '1.7' }}>
                <li>Set evaluation config in code</li>
                <li>Add unit tests for span matching</li>
                <li>Automate per-class reports</li>
                <li>Include evaluation metrics in model documentation</li>
              </ul>
              
              <div style={{ marginTop: '40px' }}>
                <p style={{ fontSize: '1.2em' }}><strong>Thank you!</strong></p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </div>
            </div>
          ),
          backgroundColor: '#2C3E50',
          notes: 'Conclusion slide with actionable next steps'
        }
      ]
    }
  ]
};
