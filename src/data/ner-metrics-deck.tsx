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
          notes: `
          Hey everyone! Welcome! [pause]
I'm so glad you're here today.
Let's start super simple. [pause]
What is NER?
NER stands for Named Entity Recognition.
It's just a fancy way of saying... teaching a computer to spot important words in a sentence.
Think about when you read a news article. [pause]
Your brain automatically picks out names, places, and companies. Right?
We want computers to do the same thing!
[ask audience] Can anyone give me an example of an "important word" in a sentence?
[pause for response]
Great! Let me show you one.
[write on screen: "Apple launched iPhone in California"]
Look at this sentence. [pause]
"Apple" is a company. That's one entity.
"iPhone" is a product. That's another.
"California" is a place. That's the third.
NER finds these. NER labels them. Simple!
Now here's the big question... [pause]
How do we know if our computer is doing a good job?
That's what today is all about.
I'll show you seven ways to measure your NER model.
Seven different "report cards" for your AI.
Ready? Let's go!`        },
        {
          id: 2,
          title: 'How to Evaluate NER: Overview of 7 Metrics',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-info" sizeName="2x" darkModeInvert={true} />
                <h3>Context</h3>
              </div>
              <ul>
                <li>NER predicts entities as spans with types (e.g., PERSON, ORG)</li>
                <li>Default unless noted: entity-level, strict exact match on span + type, micro-averaged over all entities</li>
              </ul>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-key" sizeName="2x" darkModeInvert={true} />
                <h3>Key Notation</h3>
              </div>
              <ul>
                <li><strong>TP:</strong> predicted entity exactly matches a gold entity (span + type)</li>
                <li><strong>FP:</strong> predicted entity with no matching gold</li>
                <li><strong>FN:</strong> gold entity with no matching prediction</li>
                <li><strong>IoU(span):</strong> overlap tokens / union tokens</li>
              </ul>
            </div>
          ),
          backgroundColor: '#34495E',
          notes: `Before we dive in... let's learn some vocabulary. [pause]
Don't worry. It's easy.
Every entity has two parts.
[write on screen: "SPAN = the actual words"]
First is the span. That's just the words themselves.
[write on screen: "TYPE = the label"]
Second is the type. That's the label we give it.
Let me show you. [pause]
[write on screen: "John works at Microsoft"]
"John" is our span. "PERSON" is our type.
"Microsoft" is another span. "ORG" is its type.
Make sense? [ask audience]
Now... four important terms. [pause]
Think of these like grades on a test.
[write on screen: "TP = True Positive = Correct!"]
TP means True Positive. You got it right! Gold star!
[write on screen: "FP = False Positive = Wrong guess"]
FP means False Positive. You guessed... but you were wrong.
It's like raising your hand with the wrong answer.
[write on screen: "FN = False Negative = Missed it"]
FN means False Negative. The answer was there... but you didn't see it.
Like forgetting to answer a question on a test.
[write on screen: "IoU = Overlap measure"]
IoU means Intersection over Union. We'll explain this later.
For now, just know it measures "how much did you overlap?"
[pause]
One more thing. We use "strict exact match."
That means everything must be perfect. Every word. Every label.
No partial credit! [pause] At least... not yet.`
        },
        {
          id: 3,
          title: 'Metrics Covered',
          icon: { name: 'duo-list-check' },
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
          notes: `Here's our roadmap for today. [pause]
Seven metrics. Seven ways to grade your model.
Think of it like school. [pause]
You don't get just one grade, right?
You get grades for math, English, science...
Same idea here!
Let me walk you through them. [pause]
[point to list]
Number one: Precision. How accurate are you when you guess?
Number two: Recall. How many did you find?
Number three: F1 Score. The balance of both.
Number four: Exact Match. Did you get everything perfect?
Number five: Partial Match. Did you get close enough?
Number six: Entity-Level Accuracy. How good is your labeling?
Number seven: Confusion Matrix. Where exactly are you confused?
[pause]
Seven sounds like a lot, I know.
But don't worry! [pause]
We'll go one by one.
I'll give examples for each.
By the end... you'll be an expert.
[ask audience] Ready to start?
Let's go!`
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
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <h3>What It Measures</h3>
              <ul>
                <li>Of all predicted entities, how many are correct (exact span + type)</li>
              </ul>
              
              <h3>Formula</h3>
              <ul>
                <li>TP: predicted entities with a one-to-one exact match to gold</li>
                <li>FP: predicted entities without a match</li>
                <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{Precision} = \\frac{TP}{TP + FP}\\]' }} />
                <li>Typically micro-averaged across types</li>
              </ul>
              
              <h3>When to Use</h3>
              <ul>
                <li>When false positives are costly</li>
                <li>Tuning decision thresholds</li>
                <li>High-precision applications (e.g., automated actions)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#27AE60',
          notes: `Now that we know the basics... let's learn our first metric! [pause]
Precision. [pause]
Here's what Precision asks:
"When I make a guess... how often am I right?"
Let me give you an analogy. [pause]
Think about that student in class... [pause]
The one who only raises their hand when they're SURE.
They don't answer every question.
But when they do answer? They're almost always correct.
That's high precision!
[pause]
Let me show you with numbers.
[write on screen: "Model found 10 entities"]
Your model finds 10 entities.
8 are correct. That's TP. True Positives.
2 are wrong. That's FP. False Positives.
[draw formula: Precision = TP / (TP + FP)]
[write on screen: "Precision = 8 / 10 = 80%"]
So Precision equals 8 divided by 10.
That's 80%. Not bad!
[pause]
When does Precision matter most?
When mistakes are expensive! [pause]
Imagine a system that sends emails automatically.
If you detect the wrong name... wrong email goes out!
Embarrassing, right? Maybe even dangerous.
[pause]
High precision means: "Trust me when I say it's an entity."
I might not find everything... but what I find is correct.`
        },
        {
          id: 5,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                <h3>Pros</h3>
              </div>
              <ul>
                <li>Intuitive; useful for threshold calibration</li>
                <li>Not inflated by abundant O tokens</li>
              </ul>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                <h3>Cons</h3>
              </div>
              <ul>
                <li>Ignores missed entities (FN)</li>
                <li>Can be gamed by predicting fewer entities</li>
                <li>Rare-class issues can be masked by micro-averaging</li>
              </ul>
            </div>
          ),
          backgroundColor: '#16A085',
          notes: `Precision sounds great, right? [pause]
But... there's a catch.
Every metric has good parts and bad parts.
Let's look at both. [pause]
[point to Pros]
The good stuff first.
Precision is easy to explain. [pause]
"How often am I right when I guess?"
Anyone can understand that. Even your boss!
Also... it ignores boring words. [pause]
Most words in a sentence are NOT entities.
Precision only cares about your actual guesses.
[pause]
Now... the bad stuff. [pause]
Here's a sneaky trick.
[write on screen: "Trick: Only guess when 100% sure"]
Imagine a model that only guesses ONE entity.
Just the most obvious one.
It's correct! 100% precision!
[pause]
But... it missed 99 other entities.
Is that a good model? [ask audience]
No way!
[pause]
This is called "gaming the metric."
You cheat by being too careful.
[pause]
Another example. [pause]
Your model catches "John" and "Mary."
Easy names. 95% precision!
But it misses "Jean-Baptiste Colbert."
It misses all the hard ones.
[pause]
[write on screen: "RULE: Never use Precision alone!"]
Big lesson here. [pause]
Never look at Precision by itself.
Always pair it with other metrics.
Always!`
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
          icon: { name: 'duo-magnifying-glass' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <h3>What It Measures</h3>
              <ul>
                <li>Of all gold (true) entities, how many did the model find correctly</li>
              </ul>
              
              <h3>Formula</h3>
              <ul>
                <li>TP: exact matches (span + type)</li>
                <li>FN: gold entities without a matching prediction</li>
                <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{Recall} = \\frac{TP}{TP + FN}\\]' }} />
                <li>Typically micro-averaged across types</li>
              </ul>
              
              <h3>When to Use</h3>
              <ul>
                <li>When missing entities is costly</li>
                <li>Measuring coverage</li>
                <li>Evaluating early-stage models/data sufficiency</li>
              </ul>
            </div>
          ),
          backgroundColor: '#E67E22',
          notes: `Now that we've seen Precision... let's flip it around. [pause]
Next metric: Recall.
Recall asks a different question. [pause]
"Of all the real entities... how many did I find?"
Let me give you a fun picture. [pause]
Imagine a treasure hunt! [pause]
There are 10 treasures hidden in a room.
You search and search...
You find 7 of them.
[write on screen: "Found 7 out of 10"]
Your Recall is 70%.
[pause]
Notice something important. [pause]
Maybe you also picked up some rocks by mistake.
That's a Precision problem. Not Recall's job.
Recall only asks: "Did I find the treasures?"
[pause]
[draw formula: Recall = TP / (TP + FN)]
Here's the formula.
Recall equals TP divided by TP plus FN.
TP is what you found correctly.
FN is what you missed.
[write on screen: "Recall = 8 / 10 = 80%"]
[pause]
When does Recall matter most?
When missing something is dangerous! [pause]
Medical records. You can't miss a patient's name.
Legal documents. You must find every company.
Security systems. You must catch every threat.
[pause]
High Recall means: "I find almost everything!"
I might make some extra guesses... but I don't miss much.`
        },
        {
          id: 7,
          title: 'Recall: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                <h3>Pros</h3>
              </div>
              <ul>
                <li>Captures model coverage</li>
                <li>Highlights under-detection and data gaps</li>
              </ul>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                <h3>Cons</h3>
              </div>
              <ul>
                <li>Ignores false positives</li>
                <li>Can be inflated by very permissive prediction</li>
                <li>Micro-averaging can hide minority class gaps</li>
              </ul>
            </div>
          ),
          backgroundColor: '#D35400',
          notes: `Just like Precision... Recall has good and bad sides. [pause]
Let's be honest about both.
[point to Pros]
Good stuff first.
Recall measures coverage. [pause]
"Am I finding most of the entities?"
For many jobs, this is SUPER important.
[pause]
Also... low Recall is a warning sign.
It means: "Your model is too shy."
"It's missing too much."
Maybe you need more training data.
[pause]
Now the bad stuff. [pause]
Here's another sneaky trick.
[write on screen: "Trick: Label EVERYTHING as an entity"]
Imagine labeling every single word as an entity.
Every word!
Guess what? 100% Recall! [pause]
You found everything... because you said EVERYTHING is an entity.
But that's useless, right? [ask audience]
[pause]
Let me give you a funny example.
Imagine a spam filter... [pause]
...that marks EVERY email as spam.
Every single one.
[pause]
It catches 100% of spam emails! Great Recall!
But it also blocks all your real emails.
Would you use that? [ask audience]
No way!
[pause]
[write on screen: "RULE: Never use Recall alone!"]
Same lesson as before.
Never look at Recall by itself.
We need balance. [pause]
And that brings us to... F1 Score!`
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
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <h3>What It Measures</h3>
              <ul>
                <li>Balance between precision and recall (harmonic mean)</li>
              </ul>
              
              <h3>Formula</h3>
              <ul>
              <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[F1 = \\frac{2 \\times (\\text{Precision} \\times \\text{Recall})}{\\text{Precision} + \\text{Recall}}\\]' }} />
                <li>Usually micro-F1 across all entities</li>
                <li>Macro-F1 averages per type (treats classes equally)</li>
              </ul>
              
              <h3>When to Use</h3>
              <ul>
                <li>General-purpose single-number comparison</li>
                <li>Model selection</li>
                <li>Leaderboard reporting</li>
              </ul>
            </div>
          ),
          backgroundColor: '#8E44AD',
          notes: `Here's the superstar metric. [pause]
F1 Score.
This is the most popular metric in NER. [pause]
You'll see it everywhere. Papers. Leaderboards. Job interviews.
So what is F1? [pause]
It combines Precision and Recall into ONE number.
The best of both worlds!
[pause]
Think about it. [pause]
High Precision, low Recall? Too careful.
High Recall, low Precision? Too wild.
F1 finds the balance. [pause]
[write on screen: "F1 = Balance between Precision & Recall"]
Let me show you three models. [pause]
Model A: 90% Precision, 40% Recall.
Playing it too safe! [pause]
Model B: 50% Precision, 95% Recall.
Too aggressive! Making mistakes everywhere. [pause]
Model C: 70% Precision, 75% Recall.
Now we're talking! Nice balance.
[pause]
Model C wins on F1. [pause]
[draw formula: F1 = 2 × (Precision × Recall) / (Precision + Recall)]
Here's the formula.
F1 equals 2 times Precision times Recall...
...divided by Precision plus Recall.
Don't worry about memorizing it. [pause]
Just remember: F1 balances both.
[pause]
When do you use F1?
Almost always! [pause]
Comparing models? Use F1.
Reporting results? Use F1.
Not sure which metric? Use F1.
[pause]
F1 is your best friend in NER.
Remember that!`
        },
        {
          id: 9,
          title: 'F1 Score: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                <h3>Pros</h3>
              </div>
              <ul>
                <li>Balances FP and FN</li>
                <li>Widely understood</li>
                <li>Comparable across models</li>
              </ul>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                <h3>Cons</h3>
              </div>
              <ul>
                <li>Hides trade-offs between precision and recall</li>
                <li>Macro vs micro choices can change conclusions</li>
                <li>Threshold-sensitive</li>
              </ul>
            </div>
          ),
          backgroundColor: '#9B59B6',
          notes: `F1 is amazing. But... [pause]
No metric is perfect.
Let's look at the pros and cons. [pause]
[point to Pros]
Why everyone loves F1.
It balances both types of mistakes. Fair!
Everyone knows what F1 means. Easy to compare!
It's just one number. Simple!
[pause]
But here's the tricky part. [pause]
[point to Cons]
F1 can hide things.
Let me show you. [pause]
[write on screen: "Model A: 60% Precision, 90% Recall → F1 = 72%"]
[write on screen: "Model B: 90% Precision, 60% Recall → F1 = 72%"]
Same F1 score! [pause]
But Model A finds more entities with more mistakes.
Model B finds fewer entities but very accurate.
Completely different behavior! [pause]
Which is better? [ask audience]
Depends on what you need!
F1 alone doesn't tell you this.
[pause]
Another hidden problem. [pause]
[write on screen: "Overall F1: 85% ... but DISEASE: 20%"]
Your overall F1 is 85%. Looks great!
But rare entities like DISEASE? Only 20%.
The overall number hid the problem.
[pause]
[write on screen: "TIP: Always show Precision, Recall, AND F1"]
Pro tip! [pause]
Always report all three.
Precision. Recall. F1.
And show per-class numbers too.
Don't let one number fool you!`
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
          icon: { name: 'duo-check-double' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <h3>What It Measures</h3>
              <ul>
                <li>Percentage of sentences/documents where the entire set of predicted entities (spans + types) exactly equals the gold set</li>
              </ul>
              
              <h3>Formula</h3>
              <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{EM}_i = \\begin{cases} 1 & \\text{if predicted set == gold set} \\\\ 0 & \\text{otherwise} \\end{cases}\\]' }} />
              <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{Exact Match Score} = \\text{mean}_i(\\text{EM}_i)\\]' }} />
              
              <h3>When to Use</h3>
              <ul>
                <li>End-to-end reliability</li>
                <li>Downstream tasks requiring perfect extraction</li>
                <li>Quality gates for production</li>
              </ul>
            </div>
          ),
          backgroundColor: '#C0392B',
          notes: `Now that we've seen F1... let's get strict. [pause]
Very strict.
Exact Match Score. [pause]
I call this the "all or nothing" metric.
Imagine a school exam... [pause]
You only get points if EVERY answer is correct.
One mistake? Zero marks for the whole test.
[pause]
That's Exact Match! [pause]
Let me show you.
[write on screen: "Apple CEO Tim Cook visited Tesla"]
Correct answer:
Apple = ORG, Tim Cook = PERSON, Tesla = ORG
[pause]
Prediction 1: Apple ORG, Tim Cook PERSON, Tesla ORG.
Perfect! Exact Match = 1. [pause]
Prediction 2: Apple ORG, Tim Cook PERSON, Tesla LOC.
One label wrong! Exact Match = 0. [pause]
Prediction 3: Apple ORG, Tim Cook PERSON... missed Tesla.
Exact Match = 0. [pause]
Prediction 4: Apple ORG, "Tim" PERSON, "Cook" PERSON, Tesla ORG.
Wrong boundaries! Exact Match = 0.
[pause]
See how harsh this is? [ask audience]
[draw formula: Exact Match = Perfect sentences / Total sentences]
[write on screen: "73 perfect out of 100 = 73%"]
[pause]
When do you use this?
Before going live. Before production.
"Is my model ready for the real world?"
[pause]
It's harsh. But honest.
It tells you: "How often am I 100% right?"`
        },
        {
          id: 11,
          title: 'Exact Match: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                <h3>Pros</h3>
              </div>
              <ul>
                <li>Very strict; reflects true task completeness</li>
                <li>Sensitive to any error</li>
              </ul>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                <h3>Cons</h3>
              </div>
              <ul>
                <li>All-or-nothing; punishes minor boundary/label mistakes</li>
                <li>Not decomposable or diagnostic on its own</li>
              </ul>
            </div>
          ),
          backgroundColor: '#E74C3C',
          notes: `Exact Match is powerful. But brutal. [pause]
Let's see both sides.
[point to Pros]
Why it's useful.
It's 100% honest. No hiding. [pause]
In the real world... "almost right" often means "useless."
Think about a hospital system. [pause]
Would you want "mostly correct" for patient names?
No! You need perfect.
[pause]
Also... it catches EVERY error.
Big mistakes. Small mistakes. Everything.
[pause]
[point to Cons]
Now the harsh reality. [pause]
9 out of 10 correct? Score = 0.
0 out of 10 correct? Score = 0.
Same score! [pause]
Seems unfair, right? [ask audience]
[pause]
Another problem. [pause]
When you score zero... you don't know WHY.
Was it one mistake? Five mistakes?
Exact Match doesn't tell you.
[pause]
Here's a sad example. [pause]
Your model finds all the entities!
But it says "the Microsoft" instead of "Microsoft."
Just one extra word.
[write on screen: "'the Microsoft' vs 'Microsoft' = FAIL"]
Exact Match = 0%.
Even though you were so close!
[pause]
[write on screen: "TIP: Use Exact Match for production gates"]
Best practice:
Use Exact Match when deciding: "Ready for production?"
But during development? Use F1 and others too.
They're less harsh. More helpful.`
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
          icon: { name: 'duo-circle-half-stroke' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <h3>What It Measures</h3>
              <ul>
                <li>Credit for near-miss spans to reduce sensitivity to boundary noise while still checking types</li>
              </ul>
              
              <h3>How It Works</h3>
              <ul>
                <li>Span IoU = |tokens_overlap| / |tokens_union|</li>
                <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{IoU} = \\frac{|\\text{tokens}_\\text{overlap}|}{|\\text{tokens}_\\text{union}|}\\]' }} />
                <li>Define a match if IoU ≥ τ (common τ = 0.5) and types match</li>
                <li>One-to-one matching (greedy or Hungarian algorithm)</li>
                <li>Compute TP/FP/FN under this fuzzy rule and report Partial-F1</li>
              </ul>
              
              <h3>When to Use</h3>
              <ul>
                <li>Datasets with noisy boundaries</li>
                <li>Weak supervision scenarios</li>
                <li>Comparing span detectors fairly</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1ABC9C',
          notes: `Now that we've seen how strict Exact Match is... [pause]
Let's meet the forgiving cousin.
Partial Match Score. [pause]
This one says: "Close enough? You get credit!"
[pause]
It uses something called IoU.
[write on screen: "IoU = Intersection over Union"]
Don't worry. It's simpler than it sounds. [pause]
[draw formula: IoU = Overlap / Total]
Step 1: Count how many words match.
Step 2: Count total unique words in both.
Step 3: Divide.
[pause]
Let me show you. [pause]
[write on screen: "Correct: 'Tim Cook' (2 words)"]
[write on screen: "Predicted: 'Tim' (1 word)"]
Overlap = 1 word ("Tim").
Union = 2 words ("Tim" + "Cook").
[write on screen: "IoU = 1 / 2 = 50%"]
We got 50% overlap! [pause]
Now... we set a threshold.
Usually 50%. [pause]
[write on screen: "If IoU ≥ 50% → It's a match!"]
So "Tim" counts as a partial match for "Tim Cook."
[pause]
Another example. [pause]
[write on screen: "Correct: 'New York City' (3 words)"]
[write on screen: "Predicted: 'York City' (2 words)"]
Overlap = 2. Union = 3.
[write on screen: "IoU = 2 / 3 = 67%"]
That's above 50%. Match! [pause]
[pause]
When do you use Partial Match?
When your data is messy. [pause]
When boundaries are unclear.
When "close enough" is good enough.
[pause]
It's more forgiving. More practical. More real-world.`
        },
        {
          id: 13,
          title: 'Partial Match: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                <h3>Pros</h3>
              </div>
              <ul>
                <li>Rewards close spans</li>
                <li>More stable with annotation noise</li>
                <li>Tunable strictness via τ threshold</li>
              </ul>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                <h3>Cons</h3>
              </div>
              <ul>
                <li>Not standardized (choice of τ and matching algorithm matters)</li>
                <li>Can mask consistent boundary errors</li>
                <li>Less comparable across papers if definitions differ</li>
              </ul>
            </div>
          ),
          backgroundColor: '#16A085',
          notes: `Partial Match is forgiving. But... [pause]
Flexibility has trade-offs too.
[point to Pros]
The good stuff. [pause]
You get credit for being close!
"New York" instead of "New York City"?
Not a total fail anymore. Partial credit! [pause]
Also... it handles messy data better.
Different people label things differently.
Partial Match is more forgiving about that.
[pause]
And you can adjust the threshold! [pause]
[write on screen: "τ = 1.0 → Very strict (exact match)"]
[write on screen: "τ = 0.5 → Standard (50% overlap needed)"]
[write on screen: "τ = 0.3 → Very forgiving"]
You control how strict you want to be.
[pause]
[point to Cons]
Now the tricky parts. [pause]
Big problem: No standard! [pause]
Different papers use different thresholds.
Different matching methods.
You can't compare them easily!
[pause]
Another issue. [pause]
Partial Match can HIDE problems.
If your model always misses the last word...
...Partial Match might not show it.
[pause]
[write on screen: "ALWAYS document your τ value!"]
Very important! [pause]
Always write down your threshold.
Always report BOTH Exact Match and Partial Match.
So people can compare fairly.
[pause]
Pro tip: Use τ = 0.5.
That's the most common. Makes comparison easier.`
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
          icon: { name: 'duo-percent' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <h3>What It Measures</h3>
              <ul>
                <li>Accuracy of entity type classification when spans are given (gold spans)</li>
                <li>Isolates typing from detection to focus solely on classification quality</li>
              </ul>
              
              <h3>Formula</h3>
              <ul>
                <li>Use gold entity spans only; model predicts a type for each</li>
                <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{Accuracy} = \\frac{\\text{# gold entities with correct type}}{\\text{total gold entities}}\\]' }} />
                <li>Option: macro-averaged over types for class balance</li>
              </ul>
              
              <h3>When to Use</h3>
              <ul>
                <li>Pipeline analysis</li>
                <li>Diagnosing label confusions separate from span detection</li>
                <li>Ablations on classifier heads</li>
              </ul>
            </div>
          ),
          backgroundColor: '#3498DB',
          notes: `Now let's look at a different kind of metric. [pause]
Entity-Level Accuracy.
This one isolates just ONE skill: labeling! [pause]
Here's the idea. [pause]
Imagine I give you a list of entities.
I already tell you WHERE they are.
Your only job? Put the right label on them.
[pause]
[write on screen: "Given: Apple, Tim Cook"]
[write on screen: "Your job: Label them correctly"]
So it's like a fill-in-the-blank test. [pause]
The blanks are already marked for you.
You just choose: PERSON? ORG? LOC?
[pause]
Let me show you. [pause]
[write on screen: "Apple CEO Tim Cook announced..."]
I tell you: "Apple" is an entity. "Tim Cook" is an entity.
Now you label them.
Apple = ORG. Correct! ✓
Tim Cook = PERSON. Correct! ✓
[draw formula: Accuracy = Correct labels / Total entities]
[write on screen: "Accuracy = 2/2 = 100%"]
[pause]
Another example. [pause]
[write on screen: "Apple = ORG ✓, Tim Cook = ORG ✗, iPhone = PRODUCT ✓"]
2 out of 3 correct.
Accuracy = 67%.
[pause]
Why is this useful? [pause]
It tells you: "Is my labeler good?"
Separate from: "Is my finder good?"
[pause]
This is a debugging tool. [pause]
When something's broken...
This helps you figure out WHICH part is broken.
Very helpful during development!`
        },
        {
          id: 15,
          title: 'Entity-Level Accuracy: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                <h3>Pros</h3>
              </div>
              <ul>
                <li>Clear diagnostic of typing component</li>
                <li>Unaffected by detection errors</li>
                <li>Interpretable</li>
              </ul>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                <h3>Cons</h3>
              </div>
              <ul>
                <li>Not end-to-end</li>
                <li>Can overstate real-world performance</li>
                <li>Influenced by class imbalance unless macro-averaged</li>
              </ul>
            </div>
          ),
          backgroundColor: '#2980B9',
          notes: `Entity-Level Accuracy is a great detective tool. [pause]
But it has limits.
[point to Pros]
The good stuff. [pause]
It tells you EXACTLY how good your labeling is.
No guessing. Clear answer.
[pause]
It ignores finding errors. [pause]
Even if your entity-finder is terrible...
This still tells you: "Is the labeler good?"
[pause]
Very helpful for debugging! [pause]
Let me show you a detective story. [pause]
Your F1 score is 40%. Bad! [pause]
But why? Two possibilities:
[write on screen: "Problem A: Can't FIND entities"]
[write on screen: "Problem B: Can't LABEL entities"]
Check Entity-Level Accuracy. [pause]
If it's 90%? The labeler is fine! Problem is finding.
If it's 45%? The labeler is broken! Problem is labeling.
[pause]
See? It tells you WHERE to fix!
[point to Cons]
Now the downsides. [pause]
This is NOT real-world performance.
In real life... you don't get the entities handed to you.
You have to find them AND label them.
[pause]
Another trap. [pause]
[write on screen: "If 90% of entities are PERSON..."]
You could just always say PERSON.
90% accuracy! But useless model.
[pause]
[write on screen: "TIP: Use for debugging, not final score"]
Remember: this is a debugging tool.
Not your final report card.
Use F1 for the real score.`
        }
      ]
    },
    {
      id: 'confusion-matrix',
      title: 'Confusion Matrix',
      slides: [
        {
          id: 16,
          title: 'Confusion Matrix Analysis (By Entity Type)',
          icon: { name: 'duo-table-cells' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <h3>What It Measures</h3>
              <ul>
                <li>Where the model confuses types and how often</li>
                <li>Error patterns across entity classes</li>
              </ul>
              
              <h3>How It Works</h3>
              <ul>
                <li>On matched entities (exact or partial per your setting), build matrix:</li>
                <li>Rows = gold types, cols = predicted types</li>
                <li>Include counts of Missed (FN) and Spurious (FP) as margins</li>
                <li>Normalize rows to get per-class recall</li>
                <li>Derive per-class precision/recall/F1 and macro averages</li>
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
          notes: `Last metric! And it's my favorite. [pause]
Confusion Matrix.
This is the ultimate detective tool. [pause]
It shows you exactly WHERE your model gets confused.
Which mistakes. How often. Everything.
[pause]
Think of it like a detailed report card. [pause]
Not just a grade... but exactly which questions you got wrong.
[demo]
Let me draw one for you.
[draw on screen: 3x3 grid]
[write on screen: Columns = What you predicted]
[write on screen: Rows = What it actually was]
              PERSON  ORG  LOC
    PERSON      120    5    2
    ORG          8    95    3  
    LOC          1     2   108
[pause]
How do you read this? [pause]
The diagonal = correct! That's the good stuff.
120 persons predicted as PERSON. ✓
95 orgs predicted as ORG. ✓
108 locations predicted as LOC. ✓
[pause]
Off-diagonal = mistakes!
5 persons called ORG. Oops.
8 orgs called PERSON. Problem!
[pause]
Now you can see exactly what's confused. [pause]
PERSON and ORG get mixed up sometimes.
LOC is very accurate.
[pause]
Why is this amazing? [pause]
[write on screen: "It tells you WHAT to fix!"]
Confusing PERSON and ORG?
Collect more training examples!
[pause]
Missing DISEASE entities completely?
You need medical training data!
[pause]
No other metric shows you this detail.
This is your roadmap for improvement!`
        },
        {
          id: 17,
          title: 'Confusion Matrix: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                <h3>Pros</h3>
              </div>
              <ul>
                <li>Highly diagnostic for targeted improvements</li>
                <li>Reveals minority-class issues often hidden by averaging</li>
                <li>Supports data-driven schema refinement</li>
              </ul>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                <h3>Cons</h3>
              </div>
              <ul>
                <li>Not a single-number metric (harder to compare)</li>
                <li>Requires enough data per class for significance</li>
                <li>Depends on chosen matching rule (strict vs partial)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#D35400',
          notes: `Confusion Matrix is super powerful. [pause]
But it has some quirks.
[point to Pros]
The superpowers. [pause]
It shows exactly what's confused with what.
No guessing. You SEE the pattern.
[pause]
It reveals hidden problems. [pause]
Overall F1 is 80%? Looks good!
But Confusion Matrix shows: DISEASE = 0% detected.
Completely missed! Without the matrix... you'd never know.
[pause]
And it tells you what to DO about it. [pause]
[write on screen: "ORG confused with PRODUCT? → Get more examples"]
[write on screen: "PERSON and ORG mixed up? → Clearer guidelines"]
Actionable insights!
[pause]
Let me tell you a real story. [pause]
A team had 75% F1. Couldn't improve.
Looked at Confusion Matrix...
40% of FACILITY entities → labeled as LOC.
"Boston General Hospital" - place or facility?
[pause]
They fixed their labeling guidelines.
F1 jumped to 82%! [pause]
The matrix showed them exactly what to fix.
[point to Cons]
The downsides. [pause]
It's not one number. Hard to compare models.
"Which confusion pattern is better?" Depends!
[pause]
Needs enough data. [pause]
Only 5 examples of DISEASE?
The pattern won't be reliable.
[pause]
[write on screen: "TIP: Use for debugging. Use F1 for comparing."]
Best practice:
Confusion Matrix = for understanding and fixing.
F1 = for comparing and reporting.
Use both!`
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
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <h3>Guidance</h3>
              <ul style={{ fontSize: '0.9em', lineHeight: '1.7' }}>
                <li>Use micro Precision/Recall/F1 with exact matching for standard reporting</li>
                <li>Add Partial-F1 (IoU) when boundary noise is expected and document τ</li>
                <li>Track Exact Match (sentence-level) for production readiness</li>
                <li>Use Entity-Level Accuracy (on gold spans) and confusion matrices for diagnosis</li>
              </ul>
            </div>
          ),
          backgroundColor: '#27AE60',
          notes: `Alright! We've covered all seven metrics. [pause]
Let's bring it all together.
[pause]
[write on screen: "ALWAYS report: Precision, Recall, F1"]
For every project... report these three.
Precision. Recall. F1.
With exact matching. That's the standard.
[pause]
[write on screen: "Add Partial Match when boundaries are messy"]
If your data has messy boundaries?
Add Partial Match with IoU.
Set τ = 0.5.
[pause]
[write on screen: "Use Exact Match before production"]
Before going live? Check Exact Match.
"How many sentences are 100% perfect?"
[pause]
[write on screen: "Use Entity Accuracy + Confusion Matrix for debugging"]
When something's broken?
Entity-Level Accuracy tells you: finding or labeling?
Confusion Matrix tells you: which classes?
[pause]
Let me give you a weekly workflow. [pause]
[write on screen: "Week 1: Check F1 - Is it learning?"]
[write on screen: "Week 2: Check Confusion Matrix - Where does it fail?"]
[write on screen: "Week 3: Check Entity Accuracy - Finding or labeling problem?"]
[write on screen: "Week 4: Check Exact Match - Ready for production?"]
[pause]
Remember... [pause]
Metrics are TOOLS.
They help you understand your model.
They guide your decisions.
They're not just numbers to brag about!
[pause]
Use them wisely!`
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                <h3>Do's</h3>
              </div>
              <ul style={{ fontSize: '0.9em', lineHeight: '1.7' }}>
                <li>Define matching rule (strict vs partial), averaging (micro vs macro), and evaluation scope (entity vs token)</li>
                <li>Report per-class metrics alongside micro-F1 for imbalanced datasets</li>
              </ul>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                <h3>Don'ts</h3>
              </div>
              <ul style={{ fontSize: '0.9em', lineHeight: '1.7' }}>
                <li>Don't rely on token accuracy or overall accuracy including O tokens</li>
                <li>Don't compare results without aligning evaluation settings</li>
              </ul>
            </div>
          ),
          backgroundColor: '#8E44AD',
          notes: `Now some very important rules. [pause]
Do's and Don'ts.
Follow these and you'll avoid big mistakes!
[point to Do's]
Things you SHOULD do. [pause]
[write on screen: "DO: Write down your settings"]
Always document:
Exact match or partial?
Micro average or macro?
What threshold?
[pause]
Example: "We use micro-F1 with exact matching."
Now everyone knows what you did!
[pause]
[write on screen: "DO: Show per-class metrics"]
Overall F1 of 85% looks great.
But what if DISEASE is only 20%?
You need to show the breakdown!
[point to Don'ts]
Now the mistakes to avoid. [pause]
[write on screen: "DON'T: Use token accuracy!"]
This is a trap! [pause]
Imagine 1000 words. Only 50 are entities.
If you miss ALL entities...
You still get 95% accuracy!
[pause]
Because 950 non-entities were "correct."
But you found ZERO entities!
Terrible! But looks great on paper.
[pause]
[write on screen: "DON'T: Compare different settings"]
Paper A uses τ = 0.3.
Paper B uses exact match.
You CAN'T compare them!
Apples and oranges!
[pause]
Horror story time. [pause]
A team told their boss: "95% accuracy!"
Everyone celebrated.
Then they deployed it...
Actual entity F1? 40%.
Project almost got canceled.
[pause]
[write on screen: "TIP: If it looks too good, investigate!"]
Don't let this happen to you!`
        },
        {
          id: 20,
          title: 'Next Steps',
          icon: { name: 'duo-rocket' },
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
          notes: `Congratulations! [pause]
You just learned seven evaluation metrics!
That's a big deal. [pause]
But learning is step one.
Now... action time!
[pause]
[write on screen: "Action 1: Save your settings in code"]
Create a config file. [pause]
Matching type: exact or partial?
Threshold: 0.5?
Averaging: micro or macro?
Write it down. In code. [pause]
Future you will thank present you!
[pause]
[write on screen: "Action 2: Test your evaluation code"]
Write test cases! [pause]
Test exact matches.
Test partial matches.
Test wrong labels.
Test missed entities.
[pause]
Bugs in evaluation code are SILENT killers.
You won't know something's wrong...
...until it's too late.
[pause]
[write on screen: "Action 3: Automate your reports"]
Build a script that shows:
Overall F1.
Per-class breakdown.
Confusion matrix picture.
Error examples.
[pause]
Automate it! You'll run many experiments.
[pause]
[write on screen: "Action 4: Document everything"]
Every model should have:
Metrics used.
Per-class results.
Known problems.
What data you tested on.
[pause]
[pause]
And that's it! [pause]
[ask audience] Any questions?
[pause]
Thank you so much for listening!
Remember... [pause]
Good evaluation = good machine learning.
Master this, and you're ahead of most beginners.
[pause]
Good luck with your projects!
[pause]
Thank you!`
        }
      ]
    }
  ]
};
