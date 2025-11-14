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
          center: true,
          title: '7 Evaluation Metrics for NER Models',
          content: (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
                <SvgIcon iconName="duo-chart-line" sizeName="4x" style={{ color: '#3498db' }} />
                <SvgIcon iconName="duo-brain" sizeName="4x" style={{ color: '#e74c3c' }} />
                <SvgIcon iconName="duo-lightbulb" sizeName="4x" style={{ color: '#f39c12' }} />
              </div>
              <h3>A concise cheat sheet for evaluating Named Entity Recognition</h3>
              <p><strong>Prepared by:</strong> Nisar A</p>
              <p><strong>Date:</strong> November 7, 2025</p>
              <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
            </div>
          ),
          backgroundColor: '#2C3E50',
          notes: `Welcome everyone! Today we're going to learn about evaluating Named Entity Recognition (NER) models.

For freshers: NER is like teaching a computer to identify important information in text - like finding person names, company names, or locations in a sentence.

Think of it this way: If I say "Apple launched a new iPhone in California", NER should identify:
- "Apple" as an Organization
- "iPhone" as a Product
- "California" as a Location

But how do we know if our NER model is doing a good job? That's what these 7 metrics help us measure. We'll learn each one step by step, starting from the basics.

Remember: Evaluating a model is just as important as building it - you can't improve what you can't measure!`
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
          notes: `Let me explain the basics before we dive into metrics.

For freshers: NER predicts "entities" - which are spans (sequences of words) with types (labels like PERSON, ORG, LOCATION).

Example: In "John works at Microsoft", we have:
- "John" (span: word 1, type: PERSON)
- "Microsoft" (span: word 4, type: ORG)

Now, the key notation you'll see everywhere:

TP (True Positive): When our model correctly predicts an entity with the right span AND right type. Like correctly identifying "Microsoft" as ORG.

FP (False Positive): When our model predicts something as an entity, but it's wrong. Like saying "works" is an ORG - that's a false alarm!

FN (False Negative): When our model misses a real entity. Like not detecting "John" as a PERSON - we missed it!

IoU (Intersection over Union): A way to measure overlap between predicted and actual spans. Don't worry, we'll see this in detail later.

By default, we use "strict exact match" - meaning both the span AND type must match perfectly. This is the most common approach.`
        },
        {
          id: 3,
          title: 'Metrics Covered',
          icon: { name: 'duo-list-check', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
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
          notes: `Here's our roadmap for today - 7 metrics that will help you evaluate NER models like a pro!

For freshers: Think of these metrics as different ways to grade your model's performance. Just like in exams you might have multiple marks for different sections, here we have multiple metrics to understand different aspects of model quality.

1. Precision: How accurate are the predictions?
2. Recall: How many entities did we find?
3. F1 Score: The balance between precision and recall
4. Exact Match: Did we get everything perfect?
5. Partial Match: Did we get close enough?
6. Entity-Level Accuracy: How good is our classification?
7. Confusion Matrix: Where does our model get confused?

Each metric tells us something different about our model. We'll go through each one with examples so you understand when and why to use them.

Don't worry if this seems like a lot - we'll break each one down into simple concepts!`
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
          icon: { name: 'duo-bullseye', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <h3>What It Measures</h3>
              <p>Of all predicted entities, how many are correct (exact span + type)</p>
              
              <h3>Formula</h3>
              <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{Precision} = \\frac{TP}{TP + FP}\\]' }} />
              
              <h3>When to Use</h3>
              <ul>
                <li>When false positives are costly</li>
                <li>High-precision applications (e.g., automated actions)</li>
                <li>Tuning decision thresholds</li>
              </ul>
            </div>
          ),
          backgroundColor: '#27AE60',
          notes: `Let's start with Precision - this is all about accuracy!

For freshers: Precision asks "When my model says something is an entity, how often is it correct?"

Think of it like a student who only answers questions they're absolutely sure about. They might not answer everything, but what they DO answer is usually correct. That's high precision!

Real-world example:
Your model identifies 10 entities in a document:
- 8 of them are correct (True Positives)
- 2 of them are wrong (False Positives)
Precision = 8/(8+2) = 0.8 or 80%

When do you care about precision?
- When false alarms are expensive (like automatically sending emails based on detected names)
- When you're building a system that takes automated actions
- When wrong predictions could cause serious problems

Formula breakdown:
Precision = TP/(TP + FP) = Correct predictions / All predictions made

Key insight: High precision means "When I say it's an entity, trust me - I'm usually right!"`
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
          notes: `Now let's be honest - Precision isn't perfect. It has strengths and weaknesses.

For freshers: Every metric has trade-offs. Understanding these helps you choose the right metric for your situation.

PROS (Good things):
1. Intuitive: Easy to understand and explain to non-technical people
2. Useful for calibration: Helps you tune your model's confidence threshold
3. Not inflated by "O" tokens: In NER, most words aren't entities (they're tagged "O" for Outside). Precision ignores these, which is good!

CONS (Watch out for these):
1. Ignores missed entities: You could have 100% precision by only predicting one entity (that you're super confident about), but you'd miss 99 others! This is called "gaming the metric"
2. Can hide problems: If you predict very few entities, your precision might look great even though your model is useless
3. Micro-averaging issues: When averaging across all entities, rare entity types might perform poorly but get hidden in the overall number

Real scenario: Imagine a model that only identifies "obvious" names like "John" and "Mary" but misses complex names like "Jean-Baptiste Colbert". It might have 95% precision but miss most entities - not very useful!

Key lesson: NEVER look at precision alone - always consider it with other metrics!`
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
          icon: { name: 'duo-magnifying-glass', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <h3>What It Measures</h3>
              <p>Of all gold (true) entities, how many did the model find correctly</p>
              
              <h3>Formula</h3>
              <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{Recall} = \\frac{TP}{TP + FN}\\]' }} />
              
              <h3>When to Use</h3>
              <ul>
                <li>When missing entities is costly</li>
                <li>Measuring coverage</li>
                <li>Evaluating early-stage models/data sufficiency</li>
              </ul>
            </div>
          ),
          backgroundColor: '#E67E22',
          notes: `Now let's talk about Recall - the opposite side of the coin!

For freshers: Recall asks "Of all the entities that actually exist, how many did my model find?"

Think of it like a treasure hunt. If there are 10 treasures hidden in a room, and you find 7 of them, your recall is 70%. It doesn't matter if you also picked up some fake treasures (that's precision) - recall only cares about how many real treasures you found.

Real-world example:
A document has 10 person names:
- Your model correctly finds 8 of them (True Positives)
- Your model misses 2 of them (False Negatives)
Recall = 8/(8+2) = 0.8 or 80%

When do you care about recall?
- When missing entities is costly (like missing a patient name in medical records)
- When you need complete coverage (extracting all company names from financial documents)
- When you're evaluating if your training data is sufficient

Formula breakdown:
Recall = TP/(TP + FN) = Found correctly / All that should exist

Key insight: High recall means "I find most of what's there - I don't miss much!"

The trade-off: You can get 100% recall by predicting EVERYTHING as an entity, but then your precision would be terrible!`
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
          notes: `Let's look at the pros and cons of Recall - it's powerful but has limitations.

For freshers: Understanding these trade-offs helps you decide when to optimize for recall versus precision.

PROS (Good things):
1. Measures coverage: Tells you if your model is finding most entities - crucial for many applications
2. Highlights under-detection: Shows if your model is too conservative (missing too much)
3. Reveals data gaps: Low recall might mean you need more training data for certain entity types

CONS (Watch out for these):
1. Ignores false positives: A model could have 100% recall by labeling every word as an entity, but it would be useless!
2. Can be inflated: If your model is too aggressive and predicts everything, recall looks great but the model is actually terrible
3. Micro-averaging hides problems: Just like precision, averaging across all entities can hide poor performance on rare entity types

Real scenario: Imagine a spam detector that marks EVERY email as spam. It would have 100% recall (catches all spam) but terrible precision (marks good emails as spam too). Not useful!

When recall matters most:
- Medical diagnosis systems (can't afford to miss diseases)
- Security applications (must catch all threats)
- Compliance/audit scenarios (need to find ALL relevant information)

Key lesson: Like precision, NEVER use recall alone. You need to balance it with precision!`
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
          icon: { name: 'duo-scale-balanced', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <h3>What It Measures</h3>
              <p>Balance between precision and recall (harmonic mean)</p>
              
              <h3>Formula</h3>
              <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[F1 = \\frac{2 \\times (\\text{Precision} \\times \\text{Recall})}{\\text{Precision} + \\text{Recall}}\\]' }} />
              
              <h3>When to Use</h3>
              <ul>
                <li>General-purpose single-number comparison</li>
                <li>Model selection</li>
                <li>Leaderboard reporting</li>
              </ul>
            </div>
          ),
          backgroundColor: '#8E44AD',
          notes: `F1 Score - the most popular metric in NER! This combines precision and recall into one number.

For freshers: F1 is the "harmonic mean" of precision and recall. Don't worry about the math term - it just means it's a special type of average that balances both metrics fairly.

Why do we need F1?
Remember: High precision + low recall = finds few but correct
High recall + low precision = finds many but with errors
F1 Score = the sweet spot between both!

Real-world example:
Model A: Precision=90%, Recall=40% (too conservative)
Model B: Precision=50%, Recall=95% (too aggressive)
Model C: Precision=70%, Recall=75% (balanced)

Model C's F1 would be highest because it balances both aspects!

Formula breakdown:
F1 = 2 × (Precision × Recall) / (Precision + Recall)

The "2×" ensures the result is between 0 and 1 (or 0% to 100%).

When to use F1:
- Model comparison: "Which model is better overall?"
- Leaderboard reporting: Standard metric everyone uses
- General-purpose evaluation: When you care about both precision and recall equally

Key insight: F1 Score is your "go-to" metric for most NER tasks. It's the industry standard for a reason - it's fair and balanced!`
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
          notes: `F1 Score is great, but it's not perfect. Let's understand when it helps and when it might mislead you.

For freshers: Even the most popular metrics have limitations. Being aware of these makes you a better ML engineer!

PROS (Why everyone uses F1):
1. Balances FP and FN: Considers both types of errors fairly
2. Widely understood: Easy to compare your model with others in papers/leaderboards
3. Single number: Convenient for reporting and tracking progress
4. Fair to both precision and recall: Can't game it by optimizing just one

CONS (Hidden dangers):
1. Hides trade-offs: Two models with same F1 might have very different precision/recall profiles
   Example: Model A (P=60%, R=90%, F1=72%) vs Model B (P=90%, R=60%, F1=72%)
   Same F1, but very different behavior! Which is better depends on your use case.

2. Micro vs Macro confusion: 
   - Micro-F1: Treats all entities equally (common entity types dominate)
   - Macro-F1: Averages per-class F1 scores (treats all classes equally)
   These can give VERY different numbers on imbalanced datasets!

3. Threshold-sensitive: Changing your model's confidence threshold changes F1 dramatically

Real scenario: Your model has F1=85% overall, but only 20% F1 on rare entity types like "DISEASE". The high F1 hides the poor performance on important rare classes!

Pro tip: Always report F1 alongside precision, recall, AND per-class metrics. Don't rely on a single number to tell the whole story!`
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
          icon: { name: 'duo-check-double', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <h3>What It Measures</h3>
              <p>Percentage of sentences/documents where the entire set of predicted entities exactly equals the gold set</p>
              
              <h3>Formula</h3>
              <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{EM}_i = \\begin{cases} 1 & \\text{if predicted set == gold set} \\\\ 0 & \\text{otherwise} \\end{cases}\\]' }} />
              <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{Exact Match Score} = \\text{mean}(\\text{EM}_i)\\]' }} />
              
              <h3>When to Use</h3>
              <ul>
                <li>End-to-end reliability</li>
                <li>Downstream tasks requiring perfect extraction</li>
                <li>Quality gates for production</li>
              </ul>
            </div>
          ),
          backgroundColor: '#C0392B',
          notes: `Exact Match Score - the strictest metric in NER! This is the "all or nothing" approach.

For freshers: Imagine taking an exam where you only get points if you get EVERY question right. One mistake = zero marks. That's Exact Match!

What does it measure?
For each sentence/document, did the model get EVERYTHING perfectly correct? Same entities, same boundaries, same labels - perfect match.

Real-world example:
Sentence: "Apple CEO Tim Cook visited Tesla."
Gold entities: [Apple:ORG, Tim Cook:PERSON, Tesla:ORG]

Prediction 1: [Apple:ORG, Tim Cook:PERSON, Tesla:ORG] → EM = 1 (Perfect!)
Prediction 2: [Apple:ORG, Tim Cook:PERSON, Tesla:LOCATION] → EM = 0 (One wrong!)
Prediction 3: [Apple:ORG, Tim Cook:PERSON] → EM = 0 (Missed Tesla!)
Prediction 4: [Apple:ORG, Tim:PERSON, Cook:PERSON, Tesla:ORG] → EM = 0 (Wrong boundaries!)

If you have 100 sentences and get 73 exactly right, Exact Match Score = 73%.

When to use Exact Match:
- Production readiness: Is your model reliable enough to deploy?
- Quality gates: Ensuring minimum reliability standards
- Downstream tasks: When later systems need perfect extraction (e.g., knowledge graphs)
- High-stakes applications: Medical, legal, financial domains

Key insight: This metric is harsh but honest. It tells you "what percentage of documents are you 100% correct on?" - crucial for production systems!`
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
          notes: `Exact Match is powerful but brutal. Let's understand its strengths and limitations.

For freshers: This "all or nothing" approach has important uses but can be too harsh for some scenarios.

PROS (When it's valuable):
1. Very strict: Reflects true task completeness - no partial credit!
2. Production-relevant: In real applications, "almost correct" often means "not useful"
3. Sensitive to any error: Catches both major and minor mistakes
4. Honest metric: Can't hide behind "good enough" - it's either perfect or it's not

Example where this matters:
Extracting contract terms for legal analysis - you NEED 100% accuracy. Missing one clause or getting one date wrong could be disastrous.

CONS (Why it can be problematic):
1. All-or-nothing punishes minor errors: Getting 9 out of 10 entities correct = same score as getting 0 out of 10 correct (both get 0!)
2. Not diagnostic: Doesn't tell you WHAT went wrong or WHERE to improve
3. Discouraging for development: During model development, this metric can seem depressingly low
4. Overly harsh for noisy data: If your gold labels have inconsistent boundaries, Exact Match will be artificially low

Real scenario: Your model correctly identifies all entities in 100 sentences, but makes tiny boundary errors (including "the" in "the Microsoft" instead of just "Microsoft"). Your Exact Match Score = 0% even though the model is 95% correct!

Best practice: Use Exact Match for production gates, but combine it with F1, Precision, Recall during development to understand progress and diagnose issues.`
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
          icon: { name: 'duo-circle-half-stroke', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <h3>What It Measures</h3>
              <p>Credit for near-miss spans to reduce sensitivity to boundary noise</p>
              
              <h3>How It Works</h3>
              <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{IoU} = \\frac{|\\text{tokens}_\\text{overlap}|}{|\\text{tokens}_\\text{union}|}\\]' }} />
              <p className="formula-left" dangerouslySetInnerHTML={{ __html: 'Define a match if \\(\\text{IoU} \\geq \\tau\\) (common \\(\\tau = 0.5\\)) and types match' }} />
              
              <h3>When to Use</h3>
              <ul>
                <li>Datasets with noisy boundaries</li>
                <li>Weak supervision scenarios</li>
                <li>Comparing span detectors fairly</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1ABC9C',
          notes: `Partial Match Score - a more forgiving approach! This gives credit for "close enough" answers.

For freshers: Remember how Exact Match was harsh? Partial Match says "if you got close to the right answer, we'll give you some credit!"

How does it work?
Uses IoU (Intersection over Union) to measure overlap between predicted and gold spans.

IoU calculation (step by step):
1. Overlap tokens: How many words match between prediction and gold?
2. Union tokens: Total unique words in both spans
3. IoU = Overlap / Union

Real-world example:
Gold entity: "Tim Cook" (2 tokens)
Prediction: "Tim" (1 token)

Overlap = 1 token ("Tim")
Union = 2 tokens ("Tim", "Cook")
IoU = 1/2 = 0.5

If we set threshold τ=0.5 (common choice), this counts as a match! We also need the types to match (both PERSON).

Another example:
Gold: "New York City" (3 tokens)
Prediction: "York City" (2 tokens)

Overlap = 2 tokens ("York", "City")
Union = 3 tokens ("New", "York", "City")
IoU = 2/3 = 0.67 → Match! (if τ ≤ 0.67)

When to use Partial Match:
- Noisy boundaries: When your training data has inconsistent annotation boundaries
- Weak supervision: When annotations might not be perfect
- Fair comparison: Reduces penalty for boundary disagreements
- Focus on detection: When finding the entity matters more than exact boundaries

Key insight: Partial Match acknowledges that boundary detection is hard and sometimes subjective. It's more practical for real-world scenarios!`
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
          notes: `Partial Match is more forgiving, but this flexibility comes with trade-offs. Let's explore both sides.

For freshers: More flexible metrics are easier to achieve but harder to standardize across different projects.

PROS (Advantages):
1. Rewards close spans: Getting "New York" instead of "New York City" isn't a complete failure
2. More stable with annotation noise: If different annotators have different boundary preferences, Partial Match is more robust
3. Tunable strictness: You can adjust τ threshold:
   - τ=1.0: Requires exact match (strictest)
   - τ=0.5: Requires 50% overlap (common)
   - τ=0.3: Very forgiving (rarely used)
4. Reflects practical use: In many applications, "approximately right" is good enough

Real scenario where this helps:
Extracting company names from news. Getting "Apple Inc" vs "Apple" both point to the same entity. Partial Match with τ=0.5 would credit both, while Exact Match would fail.

CONS (Limitations):
1. Not standardized: Different papers use different τ values and matching algorithms - hard to compare!
2. Can mask real problems: If your model consistently makes the same boundary error, Partial Match might hide it
3. Less comparable: Results depend heavily on your choice of τ
4. Potential for confusion: Need to clearly document your settings

Common pitfalls:
- Using τ=0.3 in development but τ=0.7 in production → Scores aren't comparable!
- Not documenting which matching algorithm you used
- Comparing your results to papers that used different τ values

Best practice: 
- Report both Exact Match AND Partial Match
- Clearly state your τ threshold
- Use standard values (0.5 is most common) for comparability
- Consider your application needs when choosing τ`
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
          icon: { name: 'duo-percent', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <h3>What It Measures</h3>
              <p>Accuracy of entity type classification when spans are given (gold spans)</p>
              <p>Isolates typing from detection to focus solely on classification quality</p>
              
              <h3>Formula</h3>
              <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{Accuracy} = \\frac{\\text{# gold entities with correct type}}{\\text{total gold entities}}\\]' }} />
              
              <h3>When to Use</h3>
              <ul>
                <li>Pipeline analysis</li>
                <li>Diagnosing label confusions separate from span detection</li>
                <li>Ablations on classifier heads</li>
              </ul>
            </div>
          ),
          backgroundColor: '#3498DB',
          notes: `Entity-Level Accuracy - this metric isolates one specific skill: classification!

For freshers: Imagine you're given a list of entities with their boundaries already marked, and you just need to label them correctly. That's what this metric measures!

What makes it different?
All other metrics combine two tasks:
1. Finding the entity (detection/span identification)
2. Labeling it correctly (classification)

Entity-Level Accuracy ONLY measures #2 by using gold (correct) spans!

Real-world example:
Text: "Apple CEO Tim Cook announced..."
Gold spans provided: ["Apple", "Tim Cook"]

Your job: Just label them!
Your prediction: Apple→ORG ✓, Tim Cook→PERSON ✓
Accuracy = 2/2 = 100%

Another scenario:
Gold spans: ["Apple", "Tim Cook", "iPhone"]
Your prediction: Apple→ORG ✓, Tim Cook→ORG ✗, iPhone→PRODUCT ✓
Accuracy = 2/3 = 67%

Notice: We don't care if you would have FOUND these spans on your own - that's already given!

When to use Entity-Level Accuracy:
- Pipeline analysis: Isolate your classifier's performance from your span detector
- Diagnosing label confusions: Is your model mixing up ORG vs PERSON?
- Ablation studies: Testing different classification approaches
- Component-level debugging: Which part of your model needs improvement?

Key insight: This is a DIAGNOSTIC metric. It helps you understand if your classification component is working well, separate from span detection. Very useful during development!`
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
          notes: `Entity-Level Accuracy is a great diagnostic tool, but it has important limitations. Let's understand when it's useful and when it's misleading.

For freshers: This metric is like testing one component of a car engine in isolation - useful for debugging but doesn't tell you if the whole car runs well!

PROS (Diagnostic power):
1. Clear diagnostic: Tells you EXACTLY how good your classifier is at labeling
2. Unaffected by detection errors: You can evaluate classification quality even if span detection is poor
3. Interpretable: Easy to understand - "X% of entities are labeled correctly"
4. Useful for pipelines: If you're building a two-stage system (detect, then classify), this measures stage 2

Example where this helps:
Your end-to-end F1 is only 40%. Is it because you're missing entities or mislabeling them?
- If Entity-Level Accuracy is 90%, problem is detection (not finding entities)
- If Entity-Level Accuracy is 45%, problem is classification (mislabeling found entities)

CONS (Can be misleading):
1. Not end-to-end: Doesn't reflect real-world performance where you must both detect AND classify
2. Overstates performance: Model might get 95% accuracy on given spans but only 60% F1 end-to-end
3. Affected by class imbalance: If 90% of your entities are PERSON, you could get 90% accuracy by always predicting PERSON!
4. Ignores the hard part: In practice, finding the right spans is often harder than labeling them

Real scenario:
Your model has 95% Entity-Level Accuracy but only 45% F1 Score. What does this mean?

Answer: Your classifier is excellent! But your span detector is terrible - you're missing most entities or getting wrong boundaries. Without Entity-Level Accuracy, you wouldn't know this!

Best practice: Use Entity-Level Accuracy alongside F1/Precision/Recall for complete picture. It's a diagnostic tool, not a replacement for end-to-end metrics!`
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
          icon: { name: 'duo-table-cells', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
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
          notes: `Confusion Matrix Analysis - the ultimate diagnostic tool! This shows you EXACTLY where your model gets confused.

For freshers: A confusion matrix is like a detailed report card showing which mistakes your model makes most often.

How to read it:
- Rows: True/Gold labels (what it should be)
- Columns: Predicted labels (what your model said)
- Diagonal cells: Correct predictions (good!)
- Off-diagonal cells: Mistakes (need attention!)

Example confusion matrix:
                Predicted
              PERSON  ORG  LOC
True PERSON     120    5    2   ← 5 persons mislabeled as ORG!
     ORG         8    95    3   ← 8 orgs mislabeled as PERSON!
     LOC         1    2   108   ← Pretty good at LOC!

What this tells us:
1. PERSON recognition is good (120 correct out of 127)
2. But we confuse PERSON ↔ ORG sometimes (13 mistakes between them)
3. LOC is most accurate (108/111 correct)

Advanced insights:
- Margins show Missed (FN) and Spurious (FP) counts
- Row normalization gives per-class recall
- Column normalization gives per-class precision

When to use Confusion Matrix:
- Diagnosing specific confusions: "Why do I mix up ORG and PRODUCT?"
- Guiding data collection: If GPE (geopolitical entity) is confused, collect more GPE training examples
- Schema refinement: Maybe ORG and INSTITUTION are too similar - consider merging them
- Understanding rare class behavior: See if minority classes are being ignored

Real diagnostic session:
Your F1 is 70%, but confusion matrix shows:
- PERSON, ORG, LOC: 90%+ F1 each
- DISEASE, DRUG: 20% F1 each
- Most DISEASE/DRUG are labeled as "O" (not an entity)

Action: Need more training data for medical entities!

Key insight: Confusion matrices don't give you a single score but provide actionable insights for improvement!`
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
          notes: `Confusion matrices are incredibly valuable for debugging, but they have limitations too. Let's understand when they shine and when they fall short.

For freshers: Think of confusion matrix as a detailed medical test - gives lots of info but requires expertise to interpret!

PROS (Diagnostic superpowers):
1. Highly diagnostic: Shows EXACTLY which entity types are confused with each other
2. Reveals minority-class issues: Hidden problems with rare entities become visible
   Example: Overall F1=80% looks good, but confusion matrix shows CHEMICAL entities are 0% - completely missed!
3. Supports targeted improvements: 
   - See ORG vs PRODUCT confusion? → Collect more distinctive examples
   - See everything labeled as "O"? → Model is too conservative, adjust thresholds
4. Guides schema design: If two classes are constantly confused, maybe they're too similar and should be merged

Real debugging story:
Team had 75% F1, couldn't improve. Confusion matrix revealed:
- 40% of FACILITY entities labeled as LOC
- These were things like "Boston General Hospital" - is it a place or facility?

Solution: Refined annotation guidelines to be clearer about FACILITY vs LOC distinction. F1 jumped to 82%!

CONS (Limitations):
1. Not a single-number metric: Can't easily say "Model A is better than Model B" with confusion matrices
2. Hard to compare: Each model has its own confusion pattern - which is "better" depends on your priorities
3. Requires sufficient data: Need enough examples of each class for patterns to be meaningful
   If you only have 5 examples of DISEASE, confusion matrix won't be reliable for that class
4. Depends on matching rule: Results differ between strict vs partial matching

Additional considerations:
- Large matrices (many entity types) become hard to visualize and interpret
- Need to decide: per-document, per-entity, or aggregated across dataset?
- Should you include the "O" (Outside) class? Usually no, but sometimes insightful

Best practice:
- Use confusion matrix during development for debugging
- Use F1/Precision/Recall for model comparison and leaderboards
- Generate confusion matrices per-class and look for systematic errors
- Visualize with heatmaps for easier interpretation
- Focus on off-diagonal cells - those are your improvement opportunities!`
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
          icon: { name: 'duo-clipboard-check', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
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
          notes: `Now let's put it all together! Here's your practical guide for choosing and using these metrics.

For freshers: After learning 7 different metrics, you might wonder "Which ones should I actually use?" Here's the answer!

Standard reporting (do this for every project):
1. Micro-averaged Precision, Recall, F1 with exact matching
   - Why: Industry standard, comparable across papers
   - Reports one number per metric across all entity types
   
2. Add Partial-F1 with IoU (τ=0.5) when:
   - Your data has noisy/inconsistent boundaries
   - You're working with long entity spans
   - Boundary precision isn't critical for your application

3. Track Exact Match (sentence-level) for:
   - Production readiness assessment
   - Understanding end-to-end reliability
   - Setting quality gates before deployment

4. Use Entity-Level Accuracy (on gold spans) for:
   - Debugging classification vs detection issues
   - Pipeline analysis in multi-stage systems
   - Isolating component performance

5. Generate confusion matrices for:
   - Development/debugging phase
   - Understanding systematic errors
   - Guiding data collection priorities
   - Refining annotation schemas

Real-world workflow:
Week 1: Check F1/Precision/Recall - is the model learning?
Week 2: Add confusion matrix - where is it failing?
Week 3: Use Entity-Level Accuracy - is it detection or classification?
Week 4: Track Exact Match - ready for production?

Remember: Metrics are tools for understanding, not just numbers to optimize!`
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
          notes: `Critical best practices - these are lessons learned from real projects. Following these will save you from common pitfalls!

For freshers: These "do's and don'ts" come from years of industry experience. Learn from others' mistakes!

✅ DO'S (Follow these always):

1. Define your evaluation settings clearly:
   - Matching rule: Exact or partial? If partial, what τ?
   - Averaging: Micro or macro? (Micro treats all entities equally, macro treats all classes equally)
   - Evaluation scope: Sentence-level or document-level?
   Example: "We report micro-F1 with strict exact matching at entity level"

2. Report per-class metrics for imbalanced datasets:
   Why: Micro-F1 of 85% might hide that rare classes have 20% F1
   Do: Show a table with precision/recall/F1 for each entity type
   This reveals if your model is just memorizing common classes!

3. Document everything:
   - Which evaluation script/library?
   - How do you handle partial overlaps?
   - What about nested entities?

❌ DON'TS (Avoid these mistakes):

1. Don't rely on token accuracy:
   Bad metric: "97% token accuracy"
   Why bad: Most tokens are "O" (not entities), so this is inflated!
   Example: 1000 tokens, 50 are entities. Get all non-entities right = 95% accuracy even if you found ZERO entities!

2. Don't use overall accuracy including O tokens:
   This tells you almost nothing about NER performance
   It's like measuring a spam detector's accuracy when 99.9% of emails aren't spam

3. Don't compare results without aligned settings:
   Paper A: Partial match, τ=0.3, macro-F1
   Paper B: Exact match, micro-F1
   These numbers are NOT comparable!

Real horror story:
Team reported 95% accuracy to management. Turned out it was token-level accuracy including O tokens. Actual entity F1 was 40%. Project almost got canceled when reality hit!

Pro tips:
- Use established evaluation libraries (seqeval, nereval)
- Write unit tests for your evaluation code
- Always sanity-check: Do the numbers make intuitive sense?`
        },
        {
          id: 20,
          title: 'Next Steps',
          icon: { name: 'duo-rocket', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
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
          notes: `Congratulations! You've learned all 7 metrics. Now let's turn this knowledge into action!

For freshers: Learning is just the first step - now you need to apply this in your projects. Here's your action plan:

1. Set evaluation config in code:
   Create a config file or constants for your evaluation settings:
   - MATCHING_TYPE = "exact" or "partial"
   - IOU_THRESHOLD = 0.5
   - AVERAGING = "micro"
   - METRICS = ["precision", "recall", "f1", "exact_match"]
   
   Why: Ensures consistency across experiments and makes results reproducible

2. Add unit tests for span matching:
   Test cases should cover:
   - Exact matches (should count as TP)
   - Partial overlaps (should be TP or FP depending on τ)
   - Wrong types (should be FP)
   - Missed entities (should be FN)
   
   Why: Evaluation bugs are silent killers - you'll think your model is improving when it's not!

3. Automate per-class reports:
   Script that generates:
   - Overall micro-F1
   - Per-class precision/recall/F1 table
   - Confusion matrix visualization
   - Examples of errors for each class
   
   Why: Manual analysis doesn't scale and you'll miss important patterns

4. Include evaluation metrics in model documentation:
   Every model card should have:
   - All metrics with clear definitions
   - Per-class breakdown
   - Known limitations
   - Evaluation dataset details
   
   Why: Future you (and your teammates) need to understand model performance

Next steps for learning:
- Practice implementing these metrics on sample datasets
- Read papers and understand which metrics they use and why
- Build a portfolio project showcasing proper NER evaluation

Thank you for your attention! Questions?

Remember: Good evaluation is the foundation of good machine learning. Master this and you're ahead of 80% of beginners!`
        }
      ]
    }
  ]
};
