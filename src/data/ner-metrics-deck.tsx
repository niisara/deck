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
          Hello everyone! Welcome to today's session. I'm really excited to walk you through this important topic with you.

          This is a raw, unedited conversation—no cuts, no filters.
“We’re keeping this episode real: raw and unedited.

So, let's start with the basics. What is NER, or Named Entity Recognition? Think of it as teaching a computer to spot important pieces of information in text. Just like how you can identify names, companies, or places when you read, we want computers to do the same thing.

Let me give you a quick example. If I say: "Apple launched a new iPhone in California" - what are the important entities here? Well, Apple is a company, an organization. iPhone is a product. And California is a location. That's what NER does - it finds and labels these entities.

Now here's the big question: How do we know if our NER model is doing a good job? That's exactly what we're going to cover today. I'm going to show you seven different metrics - seven different ways to evaluate your NER models.

And here's something really important to remember: Evaluating a model is just as crucial as building it. You can't improve what you can't measure, right? So let's dive in and learn these metrics step by step.`
        },
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
          notes: `Alright, before we jump into the metrics, let me make sure we're all on the same page about some fundamental concepts.

So when we talk about NER, we're dealing with entities. These entities have two parts: first, the span - that's the actual words or sequence of words. And second, the type - that's the label we give it, like PERSON, ORGANIZATION, or LOCATION.

Let me show you with an example. Take the sentence: "John works at Microsoft." Here we have two entities. "John" - that's our first entity, it's a PERSON. And "Microsoft" - that's an ORGANIZATION. Simple enough, right?

Now, I need to introduce you to some terminology that you'll hear constantly in this field.

First, TP - True Positive. This is when our model gets it right. It finds an entity, gets the words right, and labels it correctly. Like correctly identifying "Microsoft" as an organization.

Second, FP - False Positive. This is a false alarm. Our model thinks something is an entity when it's not. Imagine if the model said "works" is an organization - that would be completely wrong!

Third, FN - False Negative. This is when we miss something. There's a real entity there, but our model doesn't catch it. Like if we completely missed "John" as a person.

And finally, IoU - Intersection over Union. This measures how much overlap there is between what we predicted and what's actually correct. Don't worry about this too much right now - we'll come back to it in detail later.

One more thing: by default, we use what's called "strict exact match." That means both the span and the type must be perfect. Most researchers use this approach, so it's the standard.`
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
          notes: `Okay, let's talk about our roadmap for today. I'm going to teach you seven different metrics. Think of these as seven different lenses through which you can look at your model's performance.

You know how in school, you don't just get one overall grade? You get grades for different subjects, different assignments? It's the same idea here. Each metric tells us something unique about how well our model is performing.

So here's what we're covering:

First, Precision - this tells us: how accurate are our predictions?

Second, Recall - this answers: how many entities did we actually find?

Third, F1 Score - this is the sweet spot, the balance between precision and recall.

Fourth, Exact Match Score - this asks: did we get absolutely everything perfect?

Fifth, Partial Match Score - a more forgiving metric that asks: did we get close enough?

Sixth, Entity-Level Accuracy - this focuses on: how good is our classification?

And seventh, Confusion Matrix Analysis - this reveals: where exactly does our model get confused?

Now, I know seven metrics might sound like a lot. But don't worry! We're going to take our time with each one. I'll give you examples, show you when to use them, and by the end, you'll understand exactly why we need all seven. Ready? Let's go!`
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
          notes: `Alright, let's dive into our first metric: Precision. This one's all about accuracy.

So, here's the question precision answers: When my model says something is an entity, how often is it actually correct?

Let me give you an analogy. Think about that student in your class who only raises their hand when they're absolutely, one hundred percent sure they know the answer. They might not participate in every question, but when they do answer, they're usually right. That student has high precision!

Now let's look at a real example. Say your model identifies ten entities in a document. Eight of them are correct - these are your true positives. But two of them are wrong - these are false positives, false alarms. So your precision is eight divided by ten, which gives you point eight, or eighty percent.

Now, when should you really care about precision? Well, think about situations where false alarms are costly. Imagine you're building a system that automatically sends emails based on detected names. If you make a mistake, you could send an email to the wrong person! Or think about any system that takes automated actions based on your predictions. In these cases, wrong predictions can cause real problems, so precision becomes super important.

The formula is straightforward: Precision equals TP divided by TP plus FP. In other words, it's your correct predictions divided by all the predictions you made.

The key insight here: High precision means when your model says "this is an entity," you can trust it. It's usually right!`
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
          notes: `Now, let's be completely honest here. Precision is useful, but it's not perfect. Like every metric, it has its strengths and its weaknesses. And understanding these trade-offs? That's what separates beginners from experienced practitioners.

So let's start with the good stuff - the pros.

First, it's intuitive. You can explain precision to anyone, even non-technical stakeholders. "It's how often we're right when we make a prediction." Simple.

Second, it's useful for calibration. When you're tuning your model, adjusting confidence thresholds, precision helps guide those decisions.

Third, it's not inflated by what we call "O" tokens. See, in NER, most words aren't entities at all - they're just regular words. Precision focuses only on the predictions we actually make, which is good!

But now, let me warn you about the cons. These are the gotchas.

First big problem: precision completely ignores missed entities. Think about this: I could build a model that only predicts one entity - the one it's absolutely sure about. I'd have one hundred percent precision! But I'd miss ninety-nine other entities. Is that a good model? Of course not! This is what we call "gaming the metric."

Second issue: precision can hide serious problems. If your model is very conservative and barely predicts anything, precision might look fantastic even though the model is practically useless.

Third: micro-averaging can mask issues with rare entity types. They might be performing terribly, but they get lost in the overall numbers.

Here's a real scenario: imagine a model that only catches obvious names like "John" or "Mary," but completely misses complex names like "Jean-Baptiste Colbert." It might show ninety-five percent precision, but it's missing most entities!

So here's the key lesson: Never, ever look at precision alone. Always pair it with other metrics. That's crucial!`
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
          notes: `Now let's talk about Recall - this is the flip side of precision.

So recall asks a different question: Of all the entities that actually exist in the text, how many did my model successfully find?

Let me give you a fun analogy. Imagine you're on a treasure hunt. There are ten treasures hidden in a room. You search around and you find seven of them. Your recall is seventy percent. Notice something important here: it doesn't matter if you also picked up some fake treasures along the way - that's precision's problem. Recall only cares about one thing: how many of the real treasures did you find?

Let's look at a concrete example. Say a document has ten person names. Your model correctly finds eight of them - those are true positives. But it misses two of them - those are false negatives. So your recall is eight divided by ten, which is point eight, or eighty percent.

Now when should you really care about recall? Let me give you some scenarios.

Think about medical records. If you miss a patient name, that could be a serious problem. Or imagine you're extracting all company names from financial documents for compliance purposes. You need complete coverage - missing entities could mean legal issues.

Recall is also crucial when you're evaluating whether your training data is sufficient. Low recall might indicate you need more training examples.

The formula: Recall equals TP divided by TP plus FN. That's "what you found correctly" divided by "everything that should exist."

The key insight: High recall means "I find most of what's there. I don't miss much!"

But here's the trade-off, and this is important: You could get one hundred percent recall by just predicting everything as an entity. But then your precision would be terrible! So we need balance.`
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
          notes: `Okay, just like we did with precision, let's be honest about recall's strengths and weaknesses.

Let's start with the pros.

First, recall measures coverage. It tells you: is your model finding most of the entities? For many applications, this is absolutely critical.

Second, it highlights under-detection. If your recall is low, it's a clear signal that your model is being too conservative, too cautious. It's missing too much.

Third, it reveals data gaps. Low recall on certain entity types? That's often a sign you need more training data for those specific categories.

Now for the cons, and these are important to understand.

First major issue: recall completely ignores false positives. Here's an extreme example: I could build a model that labels every single word as an entity. Boom! One hundred percent recall! But would that model be useful? Absolutely not!

Second problem: recall can be artificially inflated. If your model is too aggressive and over-predicts, recall will look fantastic, but the model is actually terrible in practice.

Third issue: just like precision, micro-averaging can hide problems. Poor performance on rare entity types gets buried in the overall average.

Let me give you a great analogy. Imagine a spam detector that marks every single email as spam. It would have one hundred percent recall - it catches all the spam! But it would have terrible precision because it's also marking all your legitimate emails as spam. Would you use that spam detector? No way!

So when does recall matter most? Medical diagnosis systems - you cannot afford to miss diseases. Security applications - you must catch all threats. Compliance and audit scenarios - you need to find all relevant information. In these cases, missing something is worse than having a few false alarms.

But here's the key lesson, and I really want to emphasize this: just like precision, never use recall alone. You need the full picture!`
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
          notes: `Now we come to the F1 Score - and this is probably the most popular metric in NER. This is what you'll see in most research papers, most leaderboards.

So what is F1? It combines precision and recall into a single number. Technically, it's the harmonic mean of precision and recall. Now, don't let the fancy math term intimidate you - it's just a special type of average that balances both metrics fairly.

So why do we need F1? Well, think about what we've learned so far. High precision with low recall means you're finding few entities, but the ones you find are correct. High recall with low precision means you're finding many entities, but making lots of errors. F1 Score? That's the sweet spot between both!

Let me show you with an example. Imagine three models:

Model A: ninety percent precision, forty percent recall. Too conservative, right? It's playing it too safe.

Model B: fifty percent precision, ninety-five percent recall. Too aggressive! It's finding everything but making lots of mistakes.

Model C: seventy percent precision, seventy-five percent recall. Now we're talking! This is balanced.

Model C would have the highest F1 score because it balances both aspects.

The formula is: F1 equals two times precision times recall, divided by precision plus recall. That "two times" part ensures the result stays between zero and one, or zero to one hundred percent.

When should you use F1? Well, pretty much always! Use it for model comparison - "which model is better overall?" Use it for leaderboard reporting - it's what everyone else uses, so you can compare your results. Use it for general-purpose evaluation when you care about both precision and recall equally.

Here's the key insight: F1 Score is your go-to metric for most NER tasks. It's the industry standard for a reason - it's fair, it's balanced, and it's widely understood!`
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
          notes: `F1 Score is fantastic, but let me tell you something important: it's not perfect. No metric is. So let's talk about when F1 really shines and when it might actually mislead you.

First, the pros - why everyone loves F1.

Number one: it balances false positives and false negatives. It treats both types of errors fairly, which is usually what you want.

Number two: it's widely understood. When you publish a paper or share results with colleagues, everyone knows what F1 means. You can directly compare your work with others.

Number three: it's a single number. Super convenient for tracking progress, for reporting to stakeholders, for comparing models.

Number four: it's fair to both precision and recall. You can't game it by just optimizing one aspect.

But now, let me warn you about the hidden dangers - the cons.

First big issue: F1 hides trade-offs. Two models could have the exact same F1 score but behave completely differently! Let me give you an example: Model A has sixty percent precision and ninety percent recall - F1 of seventy-two. Model B has ninety percent precision and sixty percent recall - also F1 of seventy-two. Same F1! But which is better? Well, that depends entirely on your use case! The F1 score doesn't tell you this crucial difference.

Second issue: the micro versus macro confusion. This is huge. Micro-F1 treats all entities equally, so common entity types dominate the score. Macro-F1 averages per-class F1 scores, treating all classes equally. These can give you very different numbers, especially on imbalanced datasets!

Third issue: threshold sensitivity. Change your model's confidence threshold, and your F1 changes dramatically.

Let me give you a real scenario. Your model shows eighty-five percent F1 overall. Looks great, right? But when you dig deeper, you discover it only has twenty percent F1 on rare but important entity types like "DISEASE." The high overall F1 was hiding this critical problem!

So here's my pro tip: always report F1 alongside precision, recall, and per-class metrics. Don't let a single number tell the whole story. That's how you avoid getting fooled!`
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
          notes: `Alright, now let's talk about Exact Match Score. This is the strictest, most unforgiving metric in NER. I call it the "all or nothing" approach.

Imagine taking an exam where you only get points if you get every single question right. One mistake, just one, and you get zero marks for the entire exam. That's Exact Match!

So what does it measure? For each sentence or document, did the model get absolutely everything perfectly correct? Same entities, same boundaries, same labels. Perfect match. Anything less than perfect? Zero score.

Let me walk you through some examples. Say we have this sentence: "Apple CEO Tim Cook visited Tesla."

The gold standard says these are the entities: Apple as an organization, Tim Cook as a person, and Tesla as an organization.

Now, prediction one: Apple organization, Tim Cook person, Tesla organization. Perfect! Exact Match equals one.

Prediction two: Apple organization, Tim Cook person, but Tesla as a location instead of organization. One label wrong! Exact Match equals zero.

Prediction three: Apple organization, Tim Cook person, but we completely missed Tesla. Exact Match? Zero.

Prediction four: We got the labels right but split "Tim Cook" into "Tim" as a person and "Cook" as a person. Wrong boundaries! Exact Match? Zero.

See how strict this is? If you process one hundred sentences and get seventy-three exactly right, your Exact Match Score is seventy-three percent.

So when do you use this harsh metric? Well, when you're checking production readiness. Is your model reliable enough to deploy? When you need quality gates - ensuring minimum reliability standards. When downstream systems need perfect extraction, like when you're building knowledge graphs. In high-stakes domains like medical, legal, or financial applications.

Here's the key insight: this metric is harsh, but it's honest. It tells you "what percentage of documents am I one hundred percent correct on?" And that's crucial information for production systems!`
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
          notes: `Exact Match is powerful, but it's also brutal. So let's talk about when this strictness is valuable and when it might be too harsh.

First, the pros - when this metric really matters.

Number one: it's very strict. It reflects true task completeness. There's no partial credit here. It's either perfect or it's not.

Number two: it's production-relevant. In real-world applications, "almost correct" often means "not useful at all." Think about it - would you want a medical system that gets most things right?

Number three: it's sensitive to any error. It catches both major mistakes and minor ones. Nothing escapes.

Number four: it's honest. You can't hide behind "good enough." It forces you to face reality.

Let me give you an example where this really matters. Imagine you're extracting contract terms for legal analysis. You need one hundred percent accuracy. Missing one clause? Getting one date wrong? That could be absolutely disastrous!

But now let's talk about the cons - why this metric can be problematic.

The all-or-nothing nature punishes minor errors harshly. Here's what I mean: getting nine out of ten entities correct gives you the same score as getting zero out of ten correct. Both get zero! That seems unfair, doesn't it?

Second problem: it's not diagnostic. When you get a zero, it doesn't tell you what went wrong or where to improve. You just know something was wrong.

Third issue: it can be discouraging during development. When you're building a model, this metric can seem depressingly low even when you're making good progress.

Fourth problem: it's overly harsh for noisy data. If your gold labels have inconsistent boundaries - which is common in real datasets - Exact Match will be artificially low.

Let me give you a real scenario. Your model correctly identifies all entities in one hundred sentences. Great, right? But it makes tiny boundary errors. Like including the word "the" in "the Microsoft" instead of just "Microsoft." Your Exact Match Score? Zero percent! Even though the model is ninety-five percent correct!

So here's the best practice: use Exact Match for production gates, for making deployment decisions. But during development, combine it with F1, precision, and recall to understand your progress and diagnose issues. That's the smart way to use this metric!`
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
          notes: `Now let's look at Partial Match Score - this is a much more forgiving approach. This one says: "if you got close to the right answer, we'll give you some credit!"

Remember how harsh Exact Match was? Partial Match is the opposite. It acknowledges that sometimes "close enough" is actually good enough.

So how does it work? It uses something called IoU - Intersection over Union - to measure overlap between your predicted span and the gold standard span.

Let me break down the IoU calculation step by step, because this is important.

Step one: count the overlap tokens. How many words match between your prediction and the gold standard?

Step two: count the union tokens. That's the total number of unique words in both spans combined.

Step three: divide overlap by union. That's your IoU!

Okay, let me show you with a real example. The gold entity is "Tim Cook" - that's two tokens. Your model predicts just "Tim" - that's one token.

So, overlap equals one token, the word "Tim." Union equals two tokens - "Tim" and "Cook." IoU equals one divided by two, which is point five, or fifty percent.

Now, if we set our threshold tau at point five - which is the most common choice - this counts as a match! We also need the types to match, so both need to be labeled as PERSON.

Let me give you another example. Gold standard: "New York City" - three tokens. Your prediction: "York City" - two tokens.

Overlap: two tokens, "York" and "City." Union: three tokens - "New," "York," "City." IoU equals two divided by three, which is point six seven. If your threshold tau is point five or lower, that's a match!

So when should you use Partial Match? When your training data has noisy boundaries - inconsistent annotations. When you're using weak supervision and annotations might not be perfect. When you want fair comparison between models, reducing the penalty for boundary disagreements. When finding the entity matters more than getting exact boundaries.

Here's the key insight: Partial Match acknowledges that boundary detection is hard and sometimes subjective. It's more practical for real-world scenarios where perfect boundaries might not even be clearly defined!`
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
          notes: `Partial Match is more forgiving and flexible, but that flexibility comes with its own trade-offs. Let's explore both sides.

First, let's talk about the advantages - the pros.

Number one: it rewards close spans. Getting "New York" instead of "New York City"? That's not treated as a complete failure anymore. You get some credit!

Number two: it's more stable with annotation noise. If different annotators have different preferences for boundaries - which happens all the time in real projects - Partial Match is more robust. It doesn't penalize these inconsistencies as harshly.

Number three: tunable strictness. You can adjust your tau threshold to fit your needs. Tau equals one point zero? That's exact match, super strict. Tau equals point five? That's the common middle ground, requires fifty percent overlap. Tau equals point three? Very forgiving. You have control!

Number four: it reflects practical use. In many real applications, "approximately right" is actually good enough to be useful.

Let me give you a scenario where this really helps. You're extracting company names from news articles. Sometimes you get "Apple Inc" and sometimes you get "Apple." Both clearly refer to the same entity, right? Partial Match with tau point five would credit both, while Exact Match would fail one of them.

But now, the cons - the limitations you need to be aware of.

First major issue: it's not standardized. Different research papers use different tau values, different matching algorithms. This makes comparison really hard!

Second problem: it can mask real problems. If your model consistently makes the same boundary error - maybe it always misses the last word - Partial Match might hide this systematic issue.

Third: less comparable across studies. Your results depend heavily on your choice of tau. A paper using tau point three versus tau point seven? Those results aren't comparable!

Fourth: potential for confusion. You need to clearly document all your settings, or people won't know how to interpret your numbers.

Let me warn you about common pitfalls. Using tau equals point three during development but tau equals point seven in production? Now your scores aren't comparable! Not documenting which matching algorithm you used? That's a problem! Comparing your results to papers that used different tau values? That's misleading!

So here's the best practice: report both Exact Match and Partial Match. Clearly state your tau threshold - write it down, document it. Use standard values, point five is most common, for comparability with other work. And consider your application needs when choosing tau. Don't just pick a number randomly!`
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
          notes: `Now let's talk about Entity-Level Accuracy. This metric isolates one very specific skill: classification!

So here's the idea. Imagine someone gives you a list of entities with their boundaries already marked. Your only job? Label them correctly. That's what this metric measures!

Here's what makes it different from everything else we've talked about. All the other metrics combine two tasks: number one, finding the entity - that's detection or span identification. And number two, labeling it correctly - that's classification.

Entity-Level Accuracy only measures task number two. It uses gold spans - the correct boundaries are given to you.

Let me walk you through an example. Here's our text: "Apple CEO Tim Cook announced something..."

Now, the gold spans are provided to you. They tell you: okay, "Apple" is one entity, and "Tim Cook" is another entity. Your job is just to label them!

Your prediction: Apple is an organization. Correct! Tim Cook is a person. Correct! Accuracy equals two out of two, which is one hundred percent!

Another scenario. Gold spans: "Apple," "Tim Cook," and "iPhone." Your prediction: Apple is an organization - correct! Tim Cook is an organization - wrong! Should be person. iPhone is a product - correct! Accuracy equals two out of three, which is sixty-seven percent.

Notice something important here: we don't care whether you would have found these spans on your own. That's already given to you! We're only measuring classification.

So when do you use Entity-Level Accuracy? For pipeline analysis - isolating your classifier's performance from your span detector. For diagnosing label confusions - is your model mixing up organization versus person? For ablation studies - testing different classification approaches. For component-level debugging - which part of your model needs improvement?

Here's the key insight: this is a diagnostic metric. It helps you understand if your classification component is working well, separate from span detection. It's incredibly useful during development when you're trying to figure out where the problems are!`
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
          notes: `Entity-Level Accuracy is a great diagnostic tool, but it has important limitations. Let's understand when it's useful and when it might mislead you.

First, let's talk about its diagnostic power - the pros.

Number one: it's a clear diagnostic. It tells you exactly how good your classifier is at labeling. No ambiguity.

Number two: it's unaffected by detection errors. You can evaluate classification quality even if your span detection is terrible. That's powerful for debugging!

Number three: it's interpretable. Super easy to understand. "X percent of entities are labeled correctly." Anyone can grasp that.

Number four: it's useful for pipelines. If you're building a two-stage system - first detect, then classify - this measures stage two in isolation.

Let me give you an example where this really helps. Say your end-to-end F1 is only forty percent. That's bad, but why? Is it because you're missing entities, or because you're mislabeling them?

Well, check Entity-Level Accuracy. If it's ninety percent, the problem is detection. You're not finding the entities. But if Entity-Level Accuracy is also forty-five percent, the problem is classification. You're finding entities but mislabeling them! See how diagnostic that is?

Now let's talk about the cons - why this metric can be misleading.

First issue: it's not end-to-end. It doesn't reflect real-world performance where you must both detect and classify entities.

Second: it can overstate performance. Your model might get ninety-five percent accuracy on given spans, but only sixty percent F1 end-to-end. That's a huge gap!

Third: it's affected by class imbalance. If ninety percent of your entities are labeled PERSON, you could get ninety percent accuracy by always predicting PERSON! That's not a good model, but the accuracy looks great!

Fourth: it ignores the hard part. In practice, finding the right spans is often much harder than labeling them once you've found them.

Let me give you a real scenario. Your model has ninety-five percent Entity-Level Accuracy but only forty-five percent F1 Score. What does this tell you?

It means your classifier is excellent! Really good at labeling. But your span detector is terrible. You're missing most entities or getting wrong boundaries. Without Entity-Level Accuracy, you wouldn't know this! You might waste time trying to improve your classifier when the real problem is your detector.

So here's the best practice: use Entity-Level Accuracy alongside F1, precision, and recall for the complete picture. It's a diagnostic tool, not a replacement for end-to-end metrics. Use it to understand where your problems are, then use the other metrics to measure overall performance!`
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
          notes: `Now we come to the Confusion Matrix Analysis - and this is the ultimate diagnostic tool! This shows you exactly where your model gets confused.

So think of a confusion matrix as a detailed report card. It shows you which specific mistakes your model makes most often.

How do you read it? Let me explain. Rows represent the true labels, the gold standard - what it should be. Columns represent the predicted labels - what your model actually said. The diagonal cells? Those are correct predictions. That's the good stuff! The off-diagonal cells? Those are mistakes. That's where you need to focus your attention.

Let me show you an example confusion matrix. Across the top we have predicted labels: PERSON, ORG, LOC. Down the side we have the true labels: PERSON, ORG, LOC.

True PERSON row: one hundred twenty predicted as PERSON - correct! Five predicted as ORG - that's an error! Two predicted as LOC - another error! So we're mislabeling five persons as organizations.

True ORG row: eight predicted as PERSON, ninety-five predicted as ORG correctly, three predicted as LOC. So we're mislabeling eight organizations as persons!

True LOC row: one predicted as PERSON, two predicted as ORG, one hundred eight predicted correctly as LOC. Pretty good at locations!

So what does this tell us? First, PERSON recognition is good - one hundred twenty correct out of one hundred twenty-seven total. Second, we're confusing PERSON and ORG sometimes - thirteen mistakes between them. Third, LOC is our most accurate category - one hundred eight out of one hundred eleven correct.

Now, more advanced insights. The margins can show missed entities - false negatives - and spurious predictions - false positives. Row normalization gives you per-class recall. Column normalization gives you per-class precision.

When should you use Confusion Matrix? For diagnosing specific confusions - "why do I mix up ORG and PRODUCT?" For guiding data collection - if GPE is confused with LOC, collect more GPE training examples. For schema refinement - maybe ORG and INSTITUTION are too similar, consider merging them. For understanding rare class behavior - see if minority classes are being ignored by your model.

Let me walk you through a real diagnostic session. Your F1 is seventy percent. But the confusion matrix reveals something interesting. PERSON, ORG, and LOC each have over ninety percent F1. But DISEASE and DRUG? Only twenty percent F1 each! And most DISEASE and DRUG entities are being labeled as "O" - not an entity at all!

What's the action? You need more training data for medical entities! The confusion matrix told you exactly where the problem is.

Here's the key insight: confusion matrices don't give you a single score to brag about, but they provide actionable insights for improvement. They tell you what to fix and how to fix it!`
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
          notes: `Confusion matrices are incredibly valuable for debugging, but they have their limitations too. Let's understand when they shine and when they fall short.

First, let's talk about their diagnostic superpowers - the pros.

Number one: highly diagnostic. This shows you exactly which entity types get confused with each other. No guessing, you see the actual confusion patterns!

Number two: reveals minority-class issues. Problems with rare entities that are hidden in overall metrics? They become visible in the confusion matrix!

Let me give you an example. Overall F1 of eighty percent looks pretty good, right? But the confusion matrix shows CHEMICAL entities are at zero percent - completely missed! Without the matrix, you wouldn't see this!

Number three: supports targeted improvements. You see ORG versus PRODUCT confusion? Go collect more distinctive examples. You see everything labeled as "O"? Your model is too conservative - adjust those thresholds!

Number four: guides schema design. If two classes are constantly confused with each other, maybe they're too similar. Maybe they should be merged into one class!

Let me tell you a real debugging story. A team had seventy-five percent F1 and couldn't improve no matter what they tried. Then they looked at the confusion matrix. It revealed that forty percent of FACILITY entities were being labeled as LOC - locations! Things like "Boston General Hospital" - is that a place or a facility? The confusion matrix showed the pattern.

Their solution? They refined their annotation guidelines to be much clearer about FACILITY versus LOC distinction. After that, their F1 jumped to eighty-two percent! The confusion matrix showed them exactly what to fix.

Now let's talk about the limitations - the cons.

First: it's not a single-number metric. You can't easily say "Model A is better than Model B" using confusion matrices. They're complex to compare.

Second: each model has its own confusion pattern. Which pattern is "better"? Well, that depends entirely on your priorities and your application.

Third: it requires sufficient data. You need enough examples of each class for the patterns to be meaningful and statistically reliable. If you only have five examples of DISEASE, the confusion matrix won't be reliable for that class.

Fourth: it depends on your matching rule. The results differ significantly between strict matching and partial matching.

Some additional considerations to keep in mind. Large matrices with many entity types become really hard to visualize and interpret. You need to decide: are you analyzing per-document, per-entity, or aggregated across your entire dataset? Should you include the "O" class - the outside class? Usually no, but sometimes it gives you insights.

So here's the best practice. Use confusion matrices during development for debugging. They're invaluable for understanding what's wrong. Use F1, precision, and recall for model comparison and leaderboards - those single numbers are easier to compare. Generate per-class confusion matrices and look for systematic errors - those patterns tell you what to fix. Visualize them with heatmaps for easier interpretation - color coding makes patterns jump out. And focus on those off-diagonal cells - those are your improvement opportunities! That's where the action items are!`
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
          notes: `Alright, let's put everything together! After learning all seven metrics, you might be wondering: which ones should I actually use in my projects? Let me give you a practical guide.

For standard reporting - and you should do this for every single project - start with micro-averaged Precision, Recall, and F1 with exact matching. Why? Because it's the industry standard. It's what everyone uses. Your results will be comparable across research papers and other projects. This gives you one number per metric across all entity types.

Now, when should you add Partial-F1 with IoU? When your data has noisy or inconsistent boundaries. When you're working with long entity spans. When boundary precision isn't critical for your application. In these cases, set tau to point five - that's the standard.

Next, track Exact Match at the sentence level. When? For production readiness assessment. For understanding end-to-end reliability. For setting quality gates before you deploy to production. This tells you: what percentage of sentences am I getting completely perfect?

Use Entity-Level Accuracy on gold spans for debugging. When you need to separate classification issues from detection issues. For pipeline analysis in multi-stage systems. For isolating component performance. This is your diagnostic tool!

And generate confusion matrices during development and debugging. For understanding systematic errors. For guiding your data collection priorities. For refining your annotation schemas. This shows you exactly where to focus your improvement efforts!

Let me walk you through a real-world workflow, week by week.

Week one: Check F1, precision, and recall. Basic question: is the model even learning? Are the numbers improving?

Week two: Add the confusion matrix. Now you're asking: where exactly is it failing? What patterns do I see?

Week three: Use Entity-Level Accuracy. Is the problem detection or classification? Where should I focus my efforts?

Week four: Track Exact Match. Final question: is this ready for production? What's my sentence-level accuracy?

And remember this crucial point: metrics are tools for understanding your model. They're not just numbers to optimize blindly. Use them to gain insights, to guide your decisions, to understand what's working and what isn't. That's the real value!`
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
          notes: `Now let me share some critical best practices with you. These are lessons learned from real projects, from years of industry experience. Following these will save you from so many common pitfalls!

Let's start with the do's - what you should always do.

First: Define your evaluation settings clearly. You must document your matching rule. Is it exact or partial? If it's partial, what's your tau value? Document your averaging method. Is it micro or macro? Remember, micro treats all entities equally, macro treats all classes equally. Document your evaluation scope. Is it sentence-level or document-level?

For example, you might write: "We report micro-F1 with strict exact matching at entity level." That's clear, that's unambiguous. Anyone reading your work knows exactly what you did.

Second: Report per-class metrics for imbalanced datasets. This is crucial! Why? Because micro-F1 of eighty-five percent might hide the fact that rare classes have only twenty percent F1. Show a table with precision, recall, and F1 for each entity type. This reveals if your model is just memorizing the common classes and ignoring the rare ones!

Third: Document everything. Which evaluation script or library did you use? How do you handle partial overlaps? What about nested entities - entities within entities? Write it all down. Future you will thank present you!

Now let's talk about the don'ts - mistakes you must avoid.

First: Don't rely on token accuracy. This is a terrible metric for NER! Let me show you why. Say you have one thousand tokens and fifty are entities. If you get all the non-entities right but miss every single entity, you still get ninety-five percent accuracy! You found zero entities but the metric looks great. That's completely misleading!

Second: Don't use overall accuracy including "O" tokens. The "O" means "outside" - not an entity. Most words in any text aren't entities! So this metric tells you almost nothing about NER performance. It's like measuring a spam detector's accuracy when ninety-nine point nine percent of emails aren't spam. The numbers are meaningless!

Third: Don't compare results without aligned settings. If Paper A uses partial match with tau point three and macro-F1, and Paper B uses exact match with micro-F1, those numbers are not comparable! You can't say one model is better than another when you're measuring completely different things!

Let me tell you a horror story. A team reported ninety-five percent accuracy to their management. Everyone was excited! Turned out, it was token-level accuracy including O tokens. The actual entity F1? Forty percent! When reality hit during deployment, the project almost got canceled. Don't let this happen to you!

So here are my pro tips. Use established evaluation libraries like seqeval or nereval. Don't reinvent the wheel. Write unit tests for your evaluation code. Bugs in evaluation are silent killers! And always sanity-check your numbers. Do they make intuitive sense? If something looks too good to be true, investigate. There might be a bug or a misunderstanding. Trust your instincts!`
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
          notes: `Congratulations everyone! You've learned all seven metrics. That's a huge accomplishment! But learning is just the first step. Now we need to turn this knowledge into action. Let me give you a clear action plan.

Action item number one: Set evaluation config in code. Create a config file or constants for your evaluation settings. Define MATCHING_TYPE - is it "exact" or "partial"? If partial, set IOU_THRESHOLD - commonly point five. Set your AVERAGING method - "micro" or "macro." List your METRICS - precision, recall, F1, exact match, whatever you're using.

Why is this important? It ensures consistency across all your experiments. It makes your results reproducible. When you come back to this project in six months, you'll know exactly what settings you used. When a colleague wants to reproduce your work, they can!

Action item number two: Add unit tests for span matching. Your test cases should cover multiple scenarios. Exact matches that should count as true positives. Partial overlaps that should be true positive or false positive depending on your tau threshold. Wrong types that should be false positives. Missed entities that should be false negatives.

Why unit tests? Because evaluation bugs are silent killers! You'll think your model is improving when it's actually not. Or worse, you'll think it's getting worse when it's actually improving. Bad evaluation code has destroyed more projects than I can count. Don't let it happen to you!

Action item number three: Automate per-class reports. Write a script that generates several things automatically. Overall micro-F1 for quick reference. A per-class table showing precision, recall, and F1 for every entity type. A confusion matrix visualization so you can see patterns at a glance. And examples of errors for each class so you understand what's going wrong!

Why automate? Manual analysis doesn't scale. When you're running fifty experiments, you can't manually analyze each one. You'll miss important patterns. Automation catches everything!

Action item number four: Include evaluation metrics in model documentation. Every model card, every model description should have several things. All your metrics with clear definitions - no ambiguity! Per-class breakdown - don't hide behind overall numbers! Known limitations - be honest about where the model struggles! Evaluation dataset details - what data did you test on? This is crucial for reproducibility!

Why document? Because future you needs to understand model performance. Your teammates need to know what to expect. Your users or clients need realistic expectations. Good documentation prevents so many problems down the line!

Now, for your next steps in learning. Practice implementing these metrics on sample datasets. Get your hands dirty! Read research papers and understand which metrics they use and why. Notice the patterns. Build a portfolio project showcasing proper NER evaluation. Show employers you know this stuff!

Thank you all so much for your attention! I hope this was helpful. Do you have any questions? I'm happy to clarify anything!

And remember this final point: Good evaluation is the foundation of good machine learning. Master evaluation, and you're already ahead of eighty percent of beginners. This knowledge will serve you throughout your entire career! Good luck with your projects!`
        }
      ]
    }
  ]
};
