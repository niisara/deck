import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

export const nerMetricsDeck: Deck = {
  id: 'ner-metrics',
  name: '7 Evaluation Metrics for NER Models',
  description: 'A concise cheat sheet for evaluating Named Entity Recognition',
  category: 'NLP',
  theme: 'night',
  cardClassName: 'glass-morphism',
  cardStyle: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
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
              <GSAPAnimated animation="rotateIn" duration={1} delay={0}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '30px' }}>
                  <SvgIcon iconName="duo-chart-line" sizeName="4x" style={{ color: '#3498db' }} />
                  <SvgIcon iconName="duo-brain" sizeName="4x" style={{ color: '#e74c3c' }} />
                  <SvgIcon iconName="duo-lightbulb" sizeName="4x" style={{ color: '#f39c12' }} />
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.4}>
                <h3>A concise cheat sheet for evaluating Named Entity Recognition</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.8}>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2C3E50',
          notes: `### 1 — 7 Evaluation Metrics for NER Models
Welcome everyone, I'm really glad you're here today! Let's kick things off with something super simple.

#### 🎯 What Is NER?
**NER** stands for **Named Entity Recognition** 👉 "en-ee-arr." It's just a fancy way of saying we're teaching a computer to spot important words in a sentence. Think about when you read a news article — your brain automatically picks out names, places, and companies, right? We want computers to do the exact same thing!

For example, take this sentence: *"Apple launched iPhone in California."* Here, **Apple** is a company, **iPhone** is a product, and **California** is a place. NER finds these and labels them. Simple, right?

#### 🤔 The Big Question
Now here's the important part — how do we know if our computer is doing a good job at this? That's exactly what today is all about. I'll show you seven different ways to measure your NER model. Think of them as seven different "report cards" for your AI.

> Ask the audience: "Can anyone give me an example of an important word in a sentence?"

Ready? Let's go!`
        },
        {
          id: 2,
          title: 'How to Evaluate NER: Overview of 7 Metrics',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-circle-info" sizeName="2x" darkModeInvert={true} />
                    <h3>Context</h3>
                  </div>
                  <ul>
                    <li>NER predicts entities as spans with types (e.g., PERSON, ORG)</li>
                    <li>Default unless noted: entity-level, strict exact match on span + type, micro-averaged over all entities</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-key" sizeName="2x" darkModeInvert={true} />
                    <h4>
                      Key Notation
                      <MermaidPopover
                        title="NER Entity Structure"
                        diagram={`flowchart LR
    A["📝 Sentence"] --> B["🔍 NER Model"]
    B --> C["👤 PERSON"]
    B --> D["🏢 ORG"]
    B --> E["📍 LOC"]
    style A fill:#4fc3f7,color:#000
    style B fill:#e1bee7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#81c784,color:#000
    style E fill:#81c784,color:#000`}
                      />
                    </h4>
                  </div>
                  <ul>
                    <li><strong>TP:</strong> predicted entity exactly matches a gold entity (span + type)</li>
                    <li><strong>FP:</strong> predicted entity with no matching gold</li>
                    <li><strong>FN:</strong> gold entity with no matching prediction</li>
                    <li><strong>IoU(span):</strong> overlap tokens / union tokens</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#34495E',
          notes: `### 2 — How to Evaluate NER: Overview of 7 Metrics
Before we dive into the metrics, let's learn some vocabulary. Don't worry — it's easy!

#### 📖 Two Parts of Every Entity
Every entity has two parts. First is the **span** — that's just the actual words themselves. Second is the **type** — that's the label we give it. For example, in the sentence *"John works at Microsoft,"* the word "John" is a span and "PERSON" is its type. "Microsoft" is another span and "ORG" is its type. Make sense?

#### 🔑 Key Terms
Now let's cover four important terms. Think of these like grades on a test.

\`\`\`mermaid
flowchart LR
    A["📝 Sentence"] --> B["🔍 NER Model"]
    B --> C["👤 PERSON"]
    B --> D["🏢 ORG"]
    B --> E["📍 LOC"]
    style A fill:#4fc3f7,color:#000
    style B fill:#e1bee7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#81c784,color:#000
    style E fill:#81c784,color:#000
\`\`\`

**TP** means True Positive — you got it right, gold star! **FP** means False Positive — you guessed, but you were wrong. It's like raising your hand with the wrong answer. **FN** means False Negative — the answer was there but you didn't see it, like forgetting to answer a question on a test. **IoU** 👉 "eye-oh-you" means Intersection over Union — it measures how much your answer overlaps with the correct one. We'll explain this in detail later.

One more thing: we use **strict exact match** by default. That means everything must be perfect — every word, every label. No partial credit... at least not yet!

Now let's see the seven metrics we'll cover today.`
        },
        {
          id: 3,
          title: 'Metrics Covered',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <h4>Our Roadmap</h4>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
                <div style={{ fontSize: '0.95em', padding: '0.3em 0' }}>1. <strong>Precision</strong> — How accurate are your guesses?</div>
                <div style={{ fontSize: '0.95em', padding: '0.3em 0' }}>2. <strong>Recall</strong> — How many did you find?</div>
                <div style={{ fontSize: '0.95em', padding: '0.3em 0' }}>3. <strong>F1 Score</strong> — The balance of both</div>
                <div style={{ fontSize: '0.95em', padding: '0.3em 0' }}>4. <strong>Exact Match Score</strong> — Did you get everything perfect?</div>
                <div style={{ fontSize: '0.95em', padding: '0.3em 0' }}>5. <strong>Partial Match Score</strong> — Did you get close enough?</div>
                <div style={{ fontSize: '0.95em', padding: '0.3em 0' }}>6. <strong>Entity-Level Accuracy</strong> — How good is your labeling?</div>
                <div style={{ fontSize: '0.95em', padding: '0.3em 0' }}>7. <strong>Confusion Matrix</strong> — Where exactly are you confused?</div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#2980B9',
          notes: `### 3 — Metrics Covered
Here's our roadmap for today. Seven metrics, seven ways to grade your NER model. Think of it like school — you don't get just one grade, right? You get grades for math, English, science. Same idea here!

#### 📋 The Seven Metrics
**Precision** asks how accurate you are when you guess. **Recall** asks how many real entities you actually found. **F1 Score** balances both of those into one number. **Exact Match Score** checks if you got absolutely everything perfect in a sentence. **Partial Match Score** gives you credit for getting close. **Entity-Level Accuracy** isolates just how good your labeling is. And **Confusion Matrix** shows you exactly where your model gets confused.

Seven sounds like a lot, I know, but don't worry! We'll go one by one with plenty of examples for each. By the end of this session, you'll be comfortable with all of them.

> Ask the audience: "Ready to start?"

Let's dive into our first metric — Precision!`
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
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What It Measures</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Of all predicted entities, how many are correct (exact span + type)</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>
                    Formula
                    <MermaidPopover
                      title="Precision Calculation"
                      diagram={`flowchart TB
    A["🤖 Model Predictions"] --> B{"Correct?"}
    B -->|Yes| C["✅ TP = 8"]
    B -->|No| D["❌ FP = 2"]
    C --> E["📊 Precision = 8/10 = 80%"]
    D --> E
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffcdd2,color:#000
    style E fill:#ffd700,color:#000`}
                    />
                  </h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li><strong>TP:</strong> predicted entities with exact match to gold</li>
                    <li><strong>FP:</strong> predicted entities without a match</li>
                    <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{Precision} = \\frac{TP}{TP + FP}\\]' }} />
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>When false positives are costly (e.g., automated actions)</li>
                    <li>Tuning decision thresholds</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#27AE60',
          notes: `### 4 — Precision (Entity-Level)
Now that we know the basics, let's learn our first metric — **Precision**!

#### 🎯 The Core Idea
Precision asks one simple question: *"When I make a guess, how often am I right?"* Think about that student in class who only raises their hand when they're absolutely sure. They don't answer every question, but when they do? They're almost always correct. That's high precision!

#### 📐 The Formula
\`\`\`mermaid
flowchart TB
    A["🤖 Model Predictions"] --> B{"Correct?"}
    B -->|Yes| C["✅ TP = 8"]
    B -->|No| D["❌ FP = 2"]
    C --> E["📊 Precision = 8/10 = 80%"]
    D --> E
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffcdd2,color:#000
    style E fill:#ffd700,color:#000
\`\`\`

Let me walk through an example. Your model finds 10 entities. 8 of them are correct — those are your **TP** (True Positives). 2 of them are wrong — those are your **FP** (False Positives). Precision equals 8 divided by 10, which gives us 80%. Not bad!

#### 🔧 When to Use This?
Precision matters most when mistakes are expensive. Imagine a system that sends emails automatically. If you detect the wrong name, the wrong email goes out! Embarrassing, right? Maybe even dangerous. High precision means *"trust me when I say it's an entity."* You might not find everything, but what you find is correct.

Now let's look at the pros and cons of Precision.`
        },
        {
          id: 5,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                    <h4>Pros</h4>
                  </div>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Intuitive; useful for threshold calibration</li>
                    <li>Not inflated by abundant O tokens</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                    <h4>Cons</h4>
                  </div>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Ignores missed entities (FN)</li>
                    <li>Can be gamed by predicting fewer entities</li>
                    <li>Rare-class issues can be masked by micro-averaging</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="bounceIn" delay={0.7}>
                <div style={{ background: 'rgba(231,76,60,0.15)', padding: '0.5em 0.8em', borderRadius: '8px', fontSize: '0.75em' }}>
                  <strong>⚠️ Rule:</strong> Never use Precision alone — always pair it with other metrics!
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#16A085',
          notes: `### 5 — Precision: Pros & Cons
Precision sounds great, right? But there's a catch. Every metric has both good and bad sides, so let's be honest about both.

#### ✅ Pros
The good stuff first. Precision is beautifully easy to explain — *"How often am I right when I guess?"* Anyone can understand that, even your boss! Also, it doesn't get inflated by all the boring non-entity words. Most words in a sentence are NOT entities, and Precision only cares about your actual guesses.

#### ❌ Cons
Here's where it gets sneaky. Imagine a model that only guesses ONE entity — just the most obvious one. It's correct! 100% precision! But it missed 99 other entities. Is that a good model? No way! This is called **"gaming the metric"** — you cheat by being too careful.

Here's another example: your model catches "John" and "Mary" — easy names — and gets 95% precision. But it misses "Jean-Baptiste Colbert" because that's hard. It only catches the easy ones.

The big lesson here is simple: **never look at Precision by itself**. Always pair it with other metrics. Always! And that leads us naturally to the next metric, which covers what Precision misses — Recall.`
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
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What It Measures</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Of all gold (true) entities, how many did the model find correctly</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInBottom" delay={0.3}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>
                    Formula
                    <MermaidPopover
                      title="Recall Calculation"
                      diagram={`flowchart TB
    A["📋 Gold Entities = 10"] --> B{"Found?"}
    B -->|Yes| C["✅ TP = 8"]
    B -->|No| D["❌ FN = 2"]
    C --> E["📊 Recall = 8/10 = 80%"]
    D --> E
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffcdd2,color:#000
    style E fill:#ffd700,color:#000`}
                    />
                  </h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li><strong>TP:</strong> exact matches (span + type)</li>
                    <li><strong>FN:</strong> gold entities without a matching prediction</li>
                    <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{Recall} = \\frac{TP}{TP + FN}\\]' }} />
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>When missing entities is costly (medical, legal, security)</li>
                    <li>Measuring coverage and data sufficiency</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#E67E22',
          notes: `### 6 — Recall (Entity-Level)
Now that we've seen Precision, let's flip it around. Our next metric is **Recall**.

#### 🔍 The Core Idea
Recall asks a different question: *"Of all the real entities out there, how many did I actually find?"* Here's a fun analogy — imagine a treasure hunt! There are 10 treasures hidden in a room, and you search and search, finding 7 of them. Your Recall is 70%.

\`\`\`mermaid
flowchart TB
    A["📋 Gold Entities = 10"] --> B{"Found?"}
    B -->|Yes| C["✅ TP = 8"]
    B -->|No| D["❌ FN = 2"]
    C --> E["📊 Recall = 8/10 = 80%"]
    D --> E
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffcdd2,color:#000
    style E fill:#ffd700,color:#000
\`\`\`

Notice something important: maybe you also picked up some rocks by mistake. That's a Precision problem, not Recall's job. Recall only asks *"Did I find the treasures?"*

#### 📐 The Formula
Recall equals **TP** divided by **TP plus FN**. TP is what you found correctly and FN is what you missed. If you correctly found 8 out of 10 real entities, your Recall is 80%.

#### 🔧 When to Use This?
Recall matters most when missing something is dangerous. Medical records — you can't miss a patient's name. Legal documents — you must find every company. Security systems — you must catch every threat. High Recall means *"I find almost everything!"* You might make some extra guesses, but you don't miss much.

Let's look at the trade-offs next.`
        },
        {
          id: 7,
          title: 'Recall: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="flipCard" duration={0.9} delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                    <h4>Pros</h4>
                  </div>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Captures model coverage</li>
                    <li>Highlights under-detection and data gaps</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="flipCard" duration={0.9} delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                    <h4>Cons</h4>
                  </div>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Ignores false positives</li>
                    <li>Can be inflated by very permissive prediction</li>
                    <li>Micro-averaging can hide minority class gaps</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="bounceIn" delay={0.8}>
                <div style={{ background: 'rgba(231,76,60,0.15)', padding: '0.5em 0.8em', borderRadius: '8px', fontSize: '0.75em' }}>
                  <strong>⚠️ Rule:</strong> Never use Recall alone — we need balance!
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#D35400',
          notes: `### 7 — Recall: Pros & Cons
Just like Precision, Recall has its good and bad sides. Let's be honest about both.

#### ✅ Pros
Recall measures **coverage** — *"Am I finding most of the entities?"* For many jobs, this is super important. Low Recall is also a great warning sign. It tells you your model is too shy and missing too much, which might mean you need more training data.

#### ❌ Cons
Here's another sneaky trick. Imagine labeling *every single word* as an entity. Every word! Guess what? 100% Recall! You found everything because you said everything is an entity. But that's completely useless, right?

Here's a funny example: imagine a spam filter that marks EVERY email as spam. Every single one. It catches 100% of spam emails — great Recall! But it also blocks all your real emails. Would you use that filter? No way!

> Ask the audience: "What would happen if your email filter did this?"

Same lesson as before: **never look at Recall by itself**. We need balance. And that brings us perfectly to our next metric — the F1 Score!`
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
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What It Measures</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Balance between precision and recall (harmonic mean)</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="flipCard" duration={1} delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>
                    Formula
                    <MermaidPopover
                      title="F1 Score — Finding the Balance"
                      diagram={`flowchart LR
    A["🎯 Precision"] --> C["⚖️ F1 Score"]
    B["🔍 Recall"] --> C
    C --> D["📊 Best of Both"]
    style A fill:#81c784,color:#000
    style B fill:#4fc3f7,color:#000
    style C fill:#ffd700,color:#000
    style D fill:#e1bee7,color:#000`}
                    />
                  </h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[F1 = \\frac{2 \\times (\\text{Precision} \\times \\text{Recall})}{\\text{Precision} + \\text{Recall}}\\]' }} />
                    <li>Usually micro-F1 across all entities</li>
                    <li>Macro-F1 averages per type (treats classes equally)</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.65}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>General-purpose single-number comparison</li>
                    <li>Model selection & leaderboard reporting</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#8E44AD',
          notes: `### 8 — F1 Score (Entity-Level)
Here's the superstar metric — the **F1 Score**! This is the most popular metric in NER. You'll see it everywhere: papers, leaderboards, job interviews.

#### ⚖️ The Core Idea
F1 combines Precision and Recall into ONE number — the best of both worlds! Think about it: high Precision but low Recall? Too careful. High Recall but low Precision? Too wild. F1 finds the balance.

\`\`\`mermaid
flowchart LR
    A["🎯 Precision"] --> C["⚖️ F1 Score"]
    B["🔍 Recall"] --> C
    C --> D["📊 Best of Both"]
    style A fill:#81c784,color:#000
    style B fill:#4fc3f7,color:#000
    style C fill:#ffd700,color:#000
    style D fill:#e1bee7,color:#000
\`\`\`

#### 📐 Three Models Compared
Let me show you three models. **Model A** has 90% Precision but only 40% Recall — playing it too safe! **Model B** has 50% Precision and 95% Recall — too aggressive, making mistakes everywhere. **Model C** has 70% Precision and 75% Recall — nice balance! Model C wins on F1.

The formula is F1 equals 2 times Precision times Recall, divided by Precision plus Recall. It's called a **harmonic mean**, and it naturally penalizes models where one metric is way lower than the other. Don't worry about memorizing it — just remember that F1 balances both.

#### 🔧 When to Use This?
Almost always! Comparing models? Use F1. Reporting results? Use F1. Not sure which metric to pick? Use F1. It's your best friend in NER.

But even F1 isn't perfect — let's look at the trade-offs.`
        },
        {
          id: 9,
          title: 'F1 Score: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInRight" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                    <h4>Pros</h4>
                  </div>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Balances FP and FN errors</li>
                    <li>Widely understood and comparable</li>
                    <li>Single number for quick comparison</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                    <h4>Cons</h4>
                  </div>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Hides trade-offs between precision and recall</li>
                    <li>Macro vs micro choices can change conclusions</li>
                    <li>Can mask poor performance on rare entity types</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="scaleIn" delay={0.7}>
                <div style={{ background: 'rgba(142,68,173,0.15)', padding: '0.5em 0.8em', borderRadius: '8px', fontSize: '0.75em' }}>
                  <strong>💡 Tip:</strong> Always report Precision, Recall, AND F1 — plus per-class numbers!
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#9B59B6',
          notes: `### 9 — F1 Score: Pros & Cons
F1 is amazing, but no metric is perfect. Let's look at the trade-offs.

#### ✅ Pros
Why does everyone love F1? It balances both types of mistakes, which is fair. Everyone knows what F1 means, so it's easy to compare across papers and models. And it's just one number — simple!

#### ❌ Cons
Here's the tricky part: F1 can hide things. Consider this: **Model A** has 60% Precision and 90% Recall, giving an F1 of 72%. **Model B** has 90% Precision and 60% Recall — also an F1 of 72%! Same F1 score, but completely different behavior. Model A finds more entities with more mistakes, while Model B finds fewer but is very accurate. Which is better? Depends on what you need! F1 alone doesn't tell you this.

There's another hidden problem. Your overall F1 is 85% — looks great! But rare entities like **DISEASE** might only have 20% F1. The overall number hid the problem because common entity types like PERSON dominated the score.

The pro tip here is to **always report all three**: Precision, Recall, and F1. And show per-class numbers too. Don't let one number fool you!

Now let's move to a much stricter metric — Exact Match.`
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
              <GSAPAnimated animation="rotateIn" duration={1} delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What It Measures</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Percentage of sentences where predicted entity set exactly equals gold set</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInTop" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>
                    Formula
                    <MermaidPopover
                      title="Exact Match — All or Nothing"
                      diagram={`flowchart TB
    A["📄 Sentence"] --> B{"All Entities\nPerfect?"}
    B -->|"✅ Yes"| C["Score = 1"]
    B -->|"❌ No"| D["Score = 0"]
    C --> E["📊 EM = Perfect / Total"]
    D --> E
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffcdd2,color:#000
    style E fill:#ffd700,color:#000`}
                    />
                  </h4>
                  <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{EM}_i = \\begin{cases} 1 & \\text{if predicted set == gold set} \\\\ 0 & \\text{otherwise} \\end{cases}\\]' }} />
                  <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{Exact Match Score} = \\text{mean}_i(\\text{EM}_i)\\]' }} />
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.7}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>End-to-end reliability & quality gates for production</li>
                    <li>Downstream tasks requiring perfect extraction</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#C0392B',
          notes: `### 10 — Exact Match Score (Sentence-Level)
Now that we've seen F1, let's get *really* strict. This is the **Exact Match Score**, and I call it the "all or nothing" metric.

#### 💯 The Core Idea
Imagine a school exam where you only get points if EVERY answer is correct. One mistake? Zero marks for the whole test. That's Exact Match!

\`\`\`mermaid
flowchart TB
    A["📄 Sentence"] --> B{"All Entities\nPerfect?"}
    B -->|"✅ Yes"| C["Score = 1"]
    B -->|"❌ No"| D["Score = 0"]
    C --> E["📊 EM = Perfect / Total"]
    D --> E
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffcdd2,color:#000
    style E fill:#ffd700,color:#000
\`\`\`

#### 📐 Example Walkthrough
Take the sentence *"Apple CEO Tim Cook visited Tesla."* The correct answer is Apple = ORG, Tim Cook = PERSON, Tesla = ORG.

**Prediction 1:** Apple ORG, Tim Cook PERSON, Tesla ORG — perfect! Exact Match = 1.
**Prediction 2:** Apple ORG, Tim Cook PERSON, Tesla LOC — one label wrong! Exact Match = 0.
**Prediction 3:** Apple ORG, Tim Cook PERSON, missed Tesla — Exact Match = 0.
**Prediction 4:** Apple ORG, "Tim" PERSON, "Cook" PERSON, Tesla ORG — wrong boundaries! Exact Match = 0.

See how harsh this is? If you got 73 perfect sentences out of 100, your Exact Match Score is 73%.

#### 🔧 When to Use This?
Before going live. Before production. "Is my model ready for the real world?" It's harsh, but honest.

Let's see the trade-offs.`
        },
        {
          id: 11,
          title: 'Exact Match: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInBottom" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                    <h4>Pros</h4>
                  </div>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Very strict; reflects true task completeness</li>
                    <li>Sensitive to any error — catches everything</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="scaleIn" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                    <h4>Cons</h4>
                  </div>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>All-or-nothing; punishes minor boundary/label mistakes</li>
                    <li>Not diagnostic — doesn't tell you <em>what</em> went wrong</li>
                    <li>9/10 correct and 0/10 correct both score zero</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.7}>
                <div style={{ background: 'rgba(192,57,43,0.15)', padding: '0.5em 0.8em', borderRadius: '8px', fontSize: '0.75em' }}>
                  <strong>💡 Tip:</strong> Use Exact Match for production gates, but F1 during development!
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#E74C3C',
          notes: `### 11 — Exact Match: Pros & Cons
Exact Match is powerful, but it can be brutal. Let's see both sides.

#### ✅ Pros
It's 100% honest — no hiding. In the real world, "almost right" often means "useless." Think about a hospital system — would you want "mostly correct" for patient names? No! You need perfect. Exact Match also catches every type of error: big mistakes, small mistakes, everything.

#### ❌ Cons
Here's the harsh reality. You get 9 out of 10 entities correct? Score = 0. You get 0 out of 10 correct? Also score = 0. Same score! Seems unfair, right?

Another problem is that when you score zero, you don't know *why*. Was it one mistake? Five mistakes? Exact Match doesn't tell you. Here's a sad example: your model finds all the entities, but it says *"the Microsoft"* instead of *"Microsoft."* Just one extra word. Exact Match = 0. Even though you were so close!

> Ask the audience: "Does this seem fair?"

Best practice: use Exact Match when deciding *"Ready for production?"* But during development, use F1 and others too — they're less harsh and more helpful for improving your model.

Now let's meet the forgiving cousin of Exact Match — Partial Match!`
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
              <GSAPAnimated animation="bounceIn" duration={0.9} delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What It Measures</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Credit for near-miss spans; reduces sensitivity to boundary noise</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>
                    How It Works
                    <MermaidPopover
                      title="IoU Partial Match Process"
                      diagram={`flowchart TB
    A["📋 Gold: 'Tim Cook'"] --> C["🔀 Compare"]
    B["🤖 Pred: 'Tim'"] --> C
    C --> D["📐 IoU = 1/2 = 50%"]
    D --> E{"IoU ≥ τ?"}
    E -->|"✅ Yes"| F["Match!"]
    E -->|"❌ No"| G["No Match"]
    style A fill:#4fc3f7,color:#000
    style B fill:#e1bee7,color:#000
    style D fill:#ffd700,color:#000
    style F fill:#81c784,color:#000
    style G fill:#ffcdd2,color:#000`}
                    />
                  </h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li><strong>IoU</strong> = |tokens overlap| / |tokens union|</li>
                    <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{IoU} = \\frac{|\\text{tokens}_\\text{overlap}|}{|\\text{tokens}_\\text{union}|}\\]' }} />
                    <li>Match if IoU ≥ τ (tau) and types match (common τ = 0.5)</li>
                    <li>Compute TP/FP/FN under this fuzzy rule → Partial-F1</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.6}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Noisy boundaries, weak supervision, fair span comparisons</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1ABC9C',
          notes: `### 12 — Partial Match Score (IoU-Based)
Now that we've seen how strict Exact Match is, let's meet the forgiving cousin — **Partial Match Score**. This one says *"close enough? You get credit!"*

#### 🧮 How IoU Works
It uses something called **IoU** 👉 "eye-oh-you," which stands for **Intersection over Union**. Don't worry, it's simpler than it sounds.

\`\`\`mermaid
flowchart TB
    A["📋 Gold: 'Tim Cook'"] --> C["🔀 Compare"]
    B["🤖 Pred: 'Tim'"] --> C
    C --> D["📐 IoU = 1/2 = 50%"]
    D --> E{"IoU ≥ τ?"}
    E -->|"✅ Yes"| F["Match!"]
    E -->|"❌ No"| G["No Match"]
    style A fill:#4fc3f7,color:#000
    style B fill:#e1bee7,color:#000
    style D fill:#ffd700,color:#000
    style F fill:#81c784,color:#000
    style G fill:#ffcdd2,color:#000
\`\`\`

Step 1: count how many words match between your prediction and the gold answer. Step 2: count total unique words in both. Step 3: divide. That's your IoU!

#### 📐 Example Walkthrough
The correct entity is "Tim Cook" (2 words), and your model predicts just "Tim" (1 word). Overlap is 1 word, union is 2 words. IoU = 1/2 = 50%. We set a threshold **τ** 👉 "tau" — usually 0.5. Since 50% meets our threshold, "Tim" counts as a partial match for "Tim Cook."

Another example: correct is "New York City" (3 words), predicted is "York City" (2 words). Overlap = 2, Union = 3. IoU = 67% — that's above 50%, so it's a match!

#### 🔧 When to Use This?
When your data is messy, boundaries are unclear, or "close enough" is genuinely good enough. It's more forgiving, more practical, more real-world.

Let's look at the trade-offs.`
        },
        {
          id: 13,
          title: 'Partial Match: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                    <h4>Pros</h4>
                  </div>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Rewards close spans — partial credit!</li>
                    <li>More stable with annotation noise</li>
                    <li>Tunable strictness via τ (tau) threshold</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                    <h4>Cons</h4>
                  </div>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Not standardized — choice of τ and matching algorithm matters</li>
                    <li>Can mask consistent boundary errors</li>
                    <li>Less comparable across papers if definitions differ</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="scaleIn" delay={0.6}>
                <div style={{ background: 'rgba(26,188,156,0.15)', padding: '0.5em 0.8em', borderRadius: '8px', fontSize: '0.75em' }}>
                  <strong>💡 Tip:</strong> Always document your τ value. Use τ = 0.5 as the standard default.
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#16A085',
          notes: `### 13 — Partial Match: Pros & Cons
Partial Match is forgiving, but flexibility comes with trade-offs.

#### ✅ Pros
The good stuff: you get credit for being close! "New York" instead of "New York City"? Not a total fail anymore — partial credit! It also handles messy data better, since different annotators often label boundaries differently. Partial Match is more forgiving about that. Plus, you can adjust the threshold! **τ** 👉 "tau" = 1.0 is very strict (basically exact match), τ = 0.5 is the standard (50% overlap needed), and τ = 0.3 is very forgiving. You control how strict you want to be.

#### ❌ Cons
The big problem is that **there's no standard**. Different papers use different thresholds and different matching methods. You can't compare them easily! Another issue is that Partial Match can hide problems. If your model always misses the last word of an entity, Partial Match might not show it because the IoU is still above threshold.

The most important advice: **always document your τ value!** Always write down your threshold, and always report BOTH Exact Match and Partial Match so people can compare fairly. The most common choice is τ = 0.5, which makes comparison easier across papers.

Now let's look at a very different kind of metric — Entity-Level Accuracy.`
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
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What It Measures</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Accuracy of type classification when spans are given (gold spans)</li>
                    <li>Isolates typing from detection — focuses solely on labeling quality</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="flipCard" duration={1} delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>
                    Formula
                    <MermaidPopover
                      title="Entity-Level Accuracy — Labeling Test"
                      diagram={`flowchart LR
    A["📋 Gold Spans\nAlready Given"] --> B["🏷️ Label Each\nPERSON? ORG? LOC?"]
    B --> C{"Correct Label?"}
    C -->|"✅"| D["Right!"]
    C -->|"❌"| E["Wrong!"]
    D --> F["📊 Accuracy = Right / Total"]
    E --> F
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#ffcdd2,color:#000
    style F fill:#ffd700,color:#000`}
                    />
                  </h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{Accuracy} = \\frac{\\text{# gold entities with correct type}}{\\text{total gold entities}}\\]' }} />
                    <li>Option: macro-averaged over types for class balance</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInBottom" delay={0.65}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Pipeline analysis & diagnosing label confusions</li>
                    <li>Ablations on classifier heads</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#3498DB',
          notes: `### 14 — Entity-Level Accuracy
Now let's look at a very different kind of metric — **Entity-Level Accuracy**. This one isolates just ONE skill: labeling!

#### 🏷️ The Core Idea
Imagine I give you a list of entities and I already tell you WHERE they are. Your only job? Put the right label on them. It's like a fill-in-the-blank test where the blanks are already marked for you. You just choose: PERSON? ORG? LOC?

\`\`\`mermaid
flowchart LR
    A["📋 Gold Spans\nAlready Given"] --> B["🏷️ Label Each\nPERSON? ORG? LOC?"]
    B --> C{"Correct Label?"}
    C -->|"✅"| D["Right!"]
    C -->|"❌"| E["Wrong!"]
    D --> F["📊 Accuracy = Right / Total"]
    E --> F
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#ffcdd2,color:#000
    style F fill:#ffd700,color:#000
\`\`\`

#### 📐 Example Walkthrough
Take *"Apple CEO Tim Cook announced..."* — I tell you "Apple" is an entity and "Tim Cook" is an entity. Now you label them. Apple = ORG — correct! Tim Cook = PERSON — correct! Accuracy = 2/2 = 100%.

Another example: Apple = ORG (correct), Tim Cook = ORG (wrong — should be PERSON), iPhone = PRODUCT (correct). That's 2 out of 3 correct, so Accuracy = 67%.

#### 🔧 Why Is This Useful?
It tells you *"Is my labeler good?"* separately from *"Is my finder good?"* This is a powerful debugging tool. When something's broken, this metric helps you figure out WHICH part is broken. Very helpful during development!

Let's check the trade-offs.`
        },
        {
          id: 15,
          title: 'Entity-Level Accuracy: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                    <h4>Pros</h4>
                  </div>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Clear diagnostic of typing component</li>
                    <li>Unaffected by detection errors</li>
                    <li>Highly interpretable for debugging</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                    <h4>Cons</h4>
                  </div>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Not end-to-end — doesn't reflect real-world performance</li>
                    <li>Can overstate performance</li>
                    <li>Influenced by class imbalance unless macro-averaged</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="bounceIn" delay={0.7}>
                <div style={{ background: 'rgba(52,152,219,0.15)', padding: '0.5em 0.8em', borderRadius: '8px', fontSize: '0.75em' }}>
                  <strong>🔍 Tip:</strong> Use for debugging, not as your final score. Use F1 for the real report card!
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2980B9',
          notes: `### 15 — Entity-Level Accuracy: Pros & Cons
Entity-Level Accuracy is a great detective tool, but it has its limits.

#### ✅ Pros
It tells you EXACTLY how good your labeling is — no guessing, clear answer. It's unaffected by entity-finding errors, so even if your entity-finder is terrible, this still tells you whether the labeler is good.

Here's a detective story to illustrate. Your F1 score is 40% — bad! But *why*? Two possibilities: either it can't FIND entities or it can't LABEL entities. Check Entity-Level Accuracy. If it's 90%, the labeler is fine and the problem is finding. If it's 45%, the labeler is broken and the problem is labeling. See? It tells you WHERE to fix!

#### ❌ Cons
This is NOT real-world performance. In real life, you don't get entities handed to you — you have to find them AND label them. There's also a sneaky trap: if 90% of your entities are PERSON, a model could just always say PERSON and get 90% accuracy. Technically high accuracy, but a completely useless model!

Remember: **this is a debugging tool**, not your final report card. Use F1 for the real score.

Now let's meet my personal favorite — the Confusion Matrix!`
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
              <GSAPAnimated animation="rotateIn" duration={1} delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What It Measures</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Where the model confuses types and how often</li>
                    <li>Error patterns across entity classes</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="scaleIn" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>
                    How It Works
                    <MermaidPopover
                      title="Confusion Matrix Structure"
                      diagram={`flowchart TB
    A["🏷️ Gold Labels\n(Rows)"] --> C["📊 Matrix Grid"]
    B["🤖 Predicted Labels\n(Columns)"] --> C
    C --> D["✅ Diagonal = Correct"]
    C --> E["❌ Off-diagonal = Confused"]
    D --> F["🎯 Action: Celebrate!"]
    E --> G["🔧 Action: Fix These!"]
    style A fill:#4fc3f7,color:#000
    style B fill:#e1bee7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#ffcdd2,color:#000
    style F fill:#81c784,color:#000
    style G fill:#ffd700,color:#000`}
                    />
                  </h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Rows = gold types, Columns = predicted types</li>
                    <li>Diagonal = correct, Off-diagonal = mistakes</li>
                    <li>Include FN (missed) and FP (spurious) as margins</li>
                    <li>Normalize rows for per-class recall</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInBottom" delay={0.7}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Diagnosing confusions, guiding data collection, schema refinement</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#E67E22',
          notes: `### 16 — Confusion Matrix Analysis (By Entity Type)
Last metric, and it's my personal favorite — the **Confusion Matrix**! This is the ultimate detective tool. It shows you exactly WHERE your model gets confused: which mistakes, how often, everything.

#### 🔬 How It Works
Think of it like a detailed report card — not just a grade, but exactly which questions you got wrong.

\`\`\`mermaid
flowchart TB
    A["🏷️ Gold Labels\n(Rows)"] --> C["📊 Matrix Grid"]
    B["🤖 Predicted Labels\n(Columns)"] --> C
    C --> D["✅ Diagonal = Correct"]
    C --> E["❌ Off-diagonal = Confused"]
    D --> F["🎯 Action: Celebrate!"]
    E --> G["🔧 Action: Fix These!"]
    style A fill:#4fc3f7,color:#000
    style B fill:#e1bee7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#ffcdd2,color:#000
    style F fill:#81c784,color:#000
    style G fill:#ffd700,color:#000
\`\`\`

Let me draw one for you mentally: rows are what it *actually* was, and columns are what you *predicted*. The diagonal contains the correct predictions — 120 persons predicted as PERSON, 95 orgs predicted as ORG, 108 locations predicted as LOC. Those are the wins!

The off-diagonal cells are the mistakes: 5 persons called ORG, 8 orgs called PERSON. Now you can see exactly what's getting confused. PERSON and ORG get mixed up sometimes, but LOC is very accurate.

#### 🎯 Why Is This Amazing?
It tells you WHAT to fix! Confusing PERSON and ORG? Collect more training examples that distinguish them. Missing DISEASE entities completely? You need medical training data. No other metric shows you this level of detail — this is your roadmap for improvement!

Let's see the trade-offs.`
        },
        {
          id: 17,
          title: 'Confusion Matrix: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="bounceIn" duration={0.9} delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                    <h4>Pros</h4>
                  </div>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Highly diagnostic for targeted improvements</li>
                    <li>Reveals minority-class issues hidden by averaging</li>
                    <li>Supports data-driven schema refinement</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                    <h4>Cons</h4>
                  </div>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Not a single-number metric — harder to compare models</li>
                    <li>Requires enough data per class for significance</li>
                    <li>Depends on chosen matching rule (strict vs partial)</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.7}>
                <div style={{ background: 'rgba(230,126,34,0.15)', padding: '0.5em 0.8em', borderRadius: '8px', fontSize: '0.75em' }}>
                  <strong>💡 Best Practice:</strong> Confusion Matrix for understanding and fixing. F1 for comparing and reporting.
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#D35400',
          notes: `### 17 — Confusion Matrix: Pros & Cons
The Confusion Matrix is super powerful, but it has some quirks.

#### ✅ Pros
It shows exactly what's confused with what — no guessing, you SEE the pattern. It reveals hidden problems that averages conceal. Your overall F1 is 80%? Looks good! But the Confusion Matrix shows DISEASE = 0% detected. Completely missed! Without the matrix, you'd never know.

And best of all, it tells you what to DO about it. ORG confused with PRODUCT? Get more examples. PERSON and ORG mixed up? Write clearer guidelines.

Let me tell you a real story. A team had 75% F1 and couldn't improve no matter what they tried. They looked at the Confusion Matrix and found that 40% of FACILITY entities were being labeled as LOC. *"Boston General Hospital"* — is that a place or a facility? They fixed their labeling guidelines, and F1 jumped to 82%! The matrix showed them exactly what to fix.

#### ❌ Cons
It's not one number, so it's hard to compare models directly. "Which confusion pattern is better?" — that depends on your use case. It also needs enough data per class. Only 5 examples of DISEASE? The pattern won't be reliable.

The best practice is clear: use Confusion Matrix for understanding and fixing, use F1 for comparing and reporting. Use both!

Now let's wrap everything up with our summary.`
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
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <h4>
                  Metric Selection Guide
                  <MermaidPopover
                    title="When to Use Each Metric"
                    diagram={`flowchart TB
    A["🚀 Start Here"] --> B{"What do you need?"}
    B -->|"Standard Report"| C["📊 Precision + Recall + F1"]
    B -->|"Production Gate"| D["💯 Exact Match"]
    B -->|"Messy Data"| E["🔀 Partial Match\nτ = 0.5"]
    B -->|"Debug Model"| F["🔍 Entity Accuracy\n+ Confusion Matrix"]
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffd700,color:#000
    style E fill:#e1bee7,color:#000
    style F fill:#ffcdd2,color:#000`}
                  />
                </h4>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.6}>
                <div style={{ fontSize: '0.75em', padding: '0.2em 0' }}>📊 Use <strong>micro Precision/Recall/F1</strong> with exact matching for standard reporting</div>
                <div style={{ fontSize: '0.75em', padding: '0.2em 0' }}>🔀 Add <strong>Partial-F1</strong> (IoU) when boundary noise is expected — document τ</div>
                <div style={{ fontSize: '0.75em', padding: '0.2em 0' }}>💯 Track <strong>Exact Match</strong> (sentence-level) for production readiness</div>
                <div style={{ fontSize: '0.75em', padding: '0.2em 0' }}>🔍 Use <strong>Entity Accuracy + Confusion Matrix</strong> for diagnosis</div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#27AE60',
          notes: `### 18 — Summary and Key Takeaways
Alright! We've covered all seven metrics. Let's bring it all together with a clear guide on when to use each one.

#### 📋 Metric Selection Guide
\`\`\`mermaid
flowchart TB
    A["🚀 Start Here"] --> B{"What do you need?"}
    B -->|"Standard Report"| C["📊 Precision + Recall + F1"]
    B -->|"Production Gate"| D["💯 Exact Match"]
    B -->|"Messy Data"| E["🔀 Partial Match\nτ = 0.5"]
    B -->|"Debug Model"| F["🔍 Entity Accuracy\n+ Confusion Matrix"]
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffd700,color:#000
    style E fill:#e1bee7,color:#000
    style F fill:#ffcdd2,color:#000
\`\`\`

For **every project**, report these three: Precision, Recall, and F1 with exact matching. That's the standard. If your data has **messy boundaries**, add Partial Match with IoU and set τ 👉 "tau" = 0.5. Before **going live**, check Exact Match — "How many sentences are 100% perfect?" When **something's broken**, Entity-Level Accuracy tells you whether it's a finding or labeling problem, and Confusion Matrix tells you which classes are causing trouble.

#### 📅 A Weekly Debugging Workflow
Here's a practical workflow: **Week 1** — check F1 to see if the model is learning. **Week 2** — check the Confusion Matrix to see where it fails. **Week 3** — check Entity Accuracy to diagnose finding vs labeling problems. **Week 4** — check Exact Match to see if it's production-ready.

Remember, metrics are TOOLS. They help you understand your model and guide your decisions — they're not just numbers to brag about! Use them wisely.

Let's move on to the Do's and Don'ts.`
        },
        {
          id: 19,
          title: "Do's and Don'ts",
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#27AE60' }} />
                    <h4>Do's</h4>
                  </div>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Define matching rule (strict vs partial), averaging (micro vs macro), and scope</li>
                    <li>Report per-class metrics alongside micro-F1 for imbalanced datasets</li>
                    <li>Document evaluation settings in your code</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ color: '#E74C3C' }} />
                    <h4>Don'ts</h4>
                  </div>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Don't rely on token accuracy or overall accuracy including O tokens</li>
                    <li>Don't compare results without aligning evaluation settings</li>
                    <li>Don't celebrate "95% accuracy" without checking entity-level F1</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="bounceIn" delay={0.7}>
                <div style={{ background: 'rgba(231,76,60,0.15)', padding: '0.5em 0.8em', borderRadius: '8px', fontSize: '0.75em' }}>
                  <strong>⚠️ Horror Story:</strong> A team reported "95% accuracy" — deployed it — actual entity F1 was 40%!
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#8E44AD',
          notes: `### 19 — Do's and Don'ts
Now some very important rules. Follow these and you'll avoid big mistakes that trip up even experienced teams!

#### ✅ Do's
First, **always document your evaluation settings**. Are you using exact match or partial? Micro average or macro? What threshold? Write it down clearly, like: *"We use micro-F1 with exact matching."* Now everyone knows what you did!

Second, **always show per-class metrics**. An overall F1 of 85% looks great, but what if DISEASE is only 20%? You need to show the breakdown so problems are visible.

#### ❌ Don'ts
The biggest trap: **don't use token accuracy!** Here's why. Imagine 1000 words, and only 50 are entities. If you miss ALL entities, you still get 95% accuracy because 950 non-entities were "correct." But you found ZERO entities! Terrible, yet it looks great on paper.

Also, **don't compare results without aligning evaluation settings**. Paper A uses τ 👉 "tau" = 0.3, Paper B uses exact match — you simply can't compare them. Apples and oranges!

Let me tell you a horror story. A team told their boss *"95% accuracy!"* Everyone celebrated. Then they deployed it. Actual entity F1? 40%. The project almost got canceled. They were using token-level accuracy including all those boring O tokens. The number looked too good because it was the wrong metric.

> Ask the audience: "If a metric looks too good to be true, what should you do?"

Investigate! Always investigate!

Let's finish with our action items.`
        },
        {
          id: 20,
          title: 'Next Steps',
          icon: { name: 'duo-rocket' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" duration={1} delay={0.1}>
                <h4>Action Items</h4>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.7}>
                <div style={{ fontSize: '0.8em', padding: '0.3em 0' }}>1. <strong>Set evaluation config</strong> — matching type, threshold, averaging</div>
                <div style={{ fontSize: '0.8em', padding: '0.3em 0' }}>2. <strong>Add unit tests</strong> — test exact, partial, wrong labels, misses</div>
                <div style={{ fontSize: '0.8em', padding: '0.3em 0' }}>3. <strong>Automate reports</strong> — F1, per-class breakdown, confusion matrix</div>
                <div style={{ fontSize: '0.8em', padding: '0.3em 0' }}>4. <strong>Document everything</strong> — metrics, results, known issues, test data</div>
              </GSAPStaggerList>

              <GSAPAnimated animation="bounceIn" duration={1} delay={0.9}>
                <div style={{ marginTop: '30px', textAlign: 'center' }}>
                  <p style={{ fontSize: '1.2em' }}><strong>Thank you!</strong></p>
                  <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2C3E50',
          notes: `### 20 — Next Steps
Congratulations! You just learned seven evaluation metrics for NER — that's a big deal! But learning is step one. Now it's action time!

#### 🛠️ Action 1: Save Your Settings in Code
Create a configuration file. Matching type: exact or partial? Threshold: 0.5? Averaging: micro or macro? Write it down in code. Future you will thank present you!

#### 🧪 Action 2: Test Your Evaluation Code
Write test cases! Test exact matches, partial matches, wrong labels, and missed entities. Bugs in evaluation code are **silent killers** — you won't know something's wrong until it's too late.

#### 📊 Action 3: Automate Your Reports
Build a script that shows overall F1, per-class breakdown, confusion matrix visualization, and error examples. Automate it! You'll run many experiments and manual reporting gets old very fast.

#### 📝 Action 4: Document Everything
Every model should have clearly documented metrics used, per-class results, known problems, and what data you tested on. This isn't just good practice — it's professional.

> Ask the audience: "Any questions?"

Thank you so much for listening! Remember: **good evaluation equals good machine learning**. Master this, and you're ahead of most beginners. Good luck with your projects!`
        }
      ]
    }
  ]
};
