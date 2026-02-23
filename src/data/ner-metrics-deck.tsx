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
  kenBurns: true,
  backgroundImages: [
    'https://images.unsplash.com/photo-1617554658760-5d8f6882caf9?w=1920&q=80', 
  'https://images.unsplash.com/photo-1618083544322-03b922bd4fdc?w=1920&q=80', 
  'https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?w=1920&q=80', 
  ],
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
          notes: `### 7 Evaluation Metrics for NER Models
[cheerfully] Welcome everyone, I'm really glad you're here today! [energetic] Let's kick things off with something super simple.

#### 🎯 What Is NER?
[conversational] **NER** stands for **Named Entity Recognition** 👉 "en-ee-arr." [lighthearted] It's just a fancy way of saying we're teaching a computer to spot important words in a sentence. Think about when you read a news article — your brain automatically picks out names, places, and companies, right? [excited] We want computers to do the exact same thing!

[lecture] For example, take this sentence: *"Apple launched iPhone in California."* Here, **Apple** is a company, **iPhone** is a product, and **California** is a place. [confidently] NER finds these and labels them. Simple, right?

#### 🤔 The Big Question
[serious] Now here's the important part — how do we know if our computer is doing a good job at this? [excited] That's exactly what today is all about. I'll show you seven different ways to measure your NER model. Think of them as seven different "report cards" for your AI.

[conversational] > "Can anyone give me an example of an important word in a sentence?"

[enthusiastically] Ready? Let's go!`
        },
        {
          id: 2,
          title: 'How to Evaluate NER: Overview of 7 Metrics',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0em' }}>
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
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
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
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-key" sizeName="2x" darkModeInvert={true} />
                    <h4>Key Notation</h4>
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
          notes: `### How to Evaluate NER: Overview of 7 Metrics
[conversational] Before we dive into the metrics, let's learn some vocabulary. [reassuringly] Don't worry — it's easy!

#### 📖 Two Parts of Every Entity
[lecture] Every entity has two parts. First is the **span** — that's just the actual words themselves. Second is the **type** — that's the label we give it. [storytelling] For example, in the sentence *"John works at Microsoft,"* the word "John" is a span and "PERSON" is its type. "Microsoft" is another span and "ORG" is its type. [conversational] Make sense?

#### 🔑 Key Terms
[confidently] Now let's cover four important terms. Think of these like grades on a test.

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

[lecture] **TP** means True Positive — you got it right, gold star! **FP** means False Positive — you guessed, but you were wrong. [lighthearted] It's like raising your hand with the wrong answer. [conversational] **FN** means False Negative — the answer was there but you didn't see it, like forgetting to answer a question on a test. **IoU** 👉 "eye-oh-you" means Intersection over Union — it measures how much your answer overlaps with the correct one. [casually] We'll explain this in detail later.

[serious] One more thing: we use **strict exact match** by default. That means everything must be perfect — every word, every label. [playfully] No partial credit... at least not yet!

[energetic] Now let's see the seven metrics we'll cover today.`
        },
        {
          id: 3,
          title: 'Metrics Covered',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
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
          notes: `### Metrics Covered
[conversational] Here's our roadmap for today. Seven metrics, seven ways to grade your NER model. [storytelling] Think of it like school — you don't get just one grade, right? You get grades for math, English, science. Same idea here!

#### 📋 The Seven Metrics
[lecture] **Precision** asks how accurate you are when you guess. **Recall** asks how many real entities you actually found. **F1 Score** balances both of those into one number. **Exact Match Score** checks if you got absolutely everything perfect in a sentence. **Partial Match Score** gives you credit for getting close. **Entity-Level Accuracy** isolates just how good your labeling is. And **Confusion Matrix** shows you exactly where your model gets confused.

[reassuringly] Seven sounds like a lot, I know, but don't worry! [confidently] We'll go one by one with plenty of examples for each. By the end of this session, you'll be comfortable with all of them.

[conversational] > "Ready to start?"

[energetic] Let's dive into our first metric — Precision!`
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
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0em' }}>
                  <h4>What It Measures</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>Of all predicted entities, how many are correct (exact span + type)</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
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
                  </div>
                  <h4>Formula</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li><strong>TP:</strong> predicted entities with exact match to gold</li>
                    <li><strong>FP:</strong> predicted entities without a match</li>
                    <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{Precision} = \\frac{TP}{TP + FP}\\]' }} />
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Precision Example: 10 Predictions"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'14px'}}}%%
graph TB
    subgraph Pred["\ud83e\udd16 Model Found 10 Entities"]
        P1["1. Apple \u2705"]
        P2["2. iPhone \u2705"]
        P3["3. Tim Cook \u2705"]
        P4["4. California \u2705"]
        P5["5. Microsoft \u2705"]
        P6["6. Tesla \u2705"]
        P7["7. New York \u2705"]
        P8["8. Amazon \u2705"]
        P9["9. the CEO \u274c (not an entity)"]
        P10["10. very great \u274c (not an entity)"]
    end
    
    Pred --> Calc["\ud83d\udcca Calculation"]
    Calc --> TP["TP = 8 (correct)"]
    Calc --> FP["FP = 2 (wrong)"]
    TP --> Result["Precision = 8 / 10 = 80%"]
    FP --> Result
    
    style Pred fill:#e8f5e9,stroke:#4caf50,stroke-width:2px,color:#000
    style TP fill:#c8e6c9,color:#000
    style FP fill:#ffcdd2,color:#000
    style Result fill:#fff9c4,color:#000,stroke:#fbc02d,stroke-width:2px`}
                    />
                  </div>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>When false positives are costly (e.g., automated actions)</li>
                    <li>Tuning decision thresholds</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Precision (Entity-Level)
[excited] Now that we know the basics, let's learn our first metric — **Precision**!

#### 🎯 The Core Idea
[lecture] Precision asks one simple question: *"When I make a guess, how often am I right?"* [storytelling] Think about that student in class who only raises their hand when they're absolutely sure. They don't answer every question, but when they do? [impressed] They're almost always correct. That's high precision!

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

[conversational] Let me walk through an example. Your model finds 10 entities. 8 of them are correct — those are your **TP** (True Positives). 2 of them are wrong — those are your **FP** (False Positives). [lecture] Precision equals 8 divided by 10, which gives us 80%. [pleased] Not bad!

#### 🔧 When to Use This?
[serious] Precision matters most when mistakes are expensive. [storytelling] Imagine a system that sends emails automatically. If you detect the wrong name, the wrong email goes out! [concerned] Embarrassing, right? Maybe even dangerous. [confidently] High precision means *"trust me when I say it's an entity."* You might not find everything, but what you find is correct.

[conversational] Now let's look at the pros and cons of Precision.`
        },
        {
          id: 5,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Precision: Gaming the Metric"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
graph TB
    subgraph Safe["🎯 'Safe' Model (Gaming)"]
        S1["Guesses 1 entity"]
        S2["Gets it right"]
        S3["Precision = 1/1 = 100% ✅"]
        S4["But missed 9 others ❌"]
        S1 --> S2 --> S3 --> S4
    end
    subgraph Good["🏆 Balanced Model"]
        G1["Guesses 10 entities"]
        G2["8 correct, 2 wrong"]
        G3["Precision = 8/10 = 80%"]
        G4["AND finds most entities ✅"]
        G1 --> G2 --> G3 --> G4
    end
    style Safe fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:#000
    style Good fill:#c8e6c9,stroke:#4caf50,stroke-width:2px,color:#000`}
                    />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                    <h4>Pros</h4>
                  </div>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>Intuitive; useful for threshold calibration</li>
                    <li>Not inflated by abundant O tokens</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <div style={{ marginBottom: '0em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                    <h4>Cons</h4>
                  </div>
                  <ul style={{ fontSize: '0.5em' }}>
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
          notes: `### Precision: Pros & Cons
[conversational] Precision sounds great, right? [cautiously] But there's a catch. Every metric has both good and bad sides, so let's be honest about both.

#### ✅ Pros
[cheerfully] The good stuff first. [enthusiastically] Precision is beautifully easy to explain — *"How often am I right when I guess?"* Anyone can understand that, even your boss! [confidently] Also, it doesn't get inflated by all the boring non-entity words. Most words in a sentence are NOT entities, and Precision only cares about your actual guesses.

#### ❌ Cons
[cautiously] Here's where it gets sneaky. [storytelling] Imagine a model that only guesses ONE entity — just the most obvious one. [surprised] It's correct! 100% precision! [skeptically] But it missed 99 other entities. Is that a good model? [emphatically] No way! [serious] This is called **"gaming the metric"** — you cheat by being too careful.

[lecture] Here's another example: your model catches "John" and "Mary" — easy names — and gets 95% precision. [disappointed] But it misses "Jean-Baptiste Colbert" because that's hard. It only catches the easy ones.

[firmly] The big lesson here is simple: **never look at Precision by itself**. Always pair it with other metrics. Always! [conversational] And that leads us naturally to the next metric, which covers what Precision misses — Recall.`
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
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ marginBottom: '0em' }}>
                  <h4>What It Measures</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>Of all gold (true) entities, how many did the model find correctly</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInBottom" delay={0.3}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
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
                  </div>
                  <h4>Formula</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li><strong>TP:</strong> exact matches (span + type)</li>
                    <li><strong>FN:</strong> gold entities without a matching prediction</li>
                    <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{Recall} = \\frac{TP}{TP + FN}\\]' }} />
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Recall Example: Treasure Hunt"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'14px'}}}%%
graph TB
    subgraph Gold["\ud83c\udfaf 10 Real Entities in Text"]
        G1["1. Apple"]
        G2["2. iPhone"]
        G3["3. Tim Cook"]
        G4["4. California"]
        G5["5. Microsoft"]
        G6["6. Tesla"]
        G7["7. New York"]
        G8["8. Amazon"]
        G9["9. IBM"]
        G10["10. Google"]
    end
    
    Gold --> Found["\ud83d\udd0d Model Found"]
    Found --> TP["TP = 8 entities found \u2705"]
    Gold --> Missed["\u274c Model Missed"]
    Missed --> FN["FN = 2 entities (IBM, Google)"]
    
    TP --> Result["Recall = 8 / 10 = 80%"]
    FN --> Result
    
    style Gold fill:#e3f2fd,stroke:#2196f3,stroke-width:2px,color:#000
    style TP fill:#c8e6c9,color:#000
    style FN fill:#ffcdd2,color:#000
    style Result fill:#fff9c4,color:#000,stroke:#fbc02d,stroke-width:2px`}
                    />
                  </div>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>When missing entities is costly (medical, legal, security)</li>
                    <li>Measuring coverage and data sufficiency</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Recall (Entity-Level)
[excited] Now that we've seen Precision, let's flip it around. Our next metric is **Recall**.

#### 🔍 The Core Idea
[lecture] Recall asks a different question: *"Of all the real entities out there, how many did I actually find?"* [playfully] Here's a fun analogy — imagine a treasure hunt! [storytelling] There are 10 treasures hidden in a room, and you search and search, finding 7 of them. Your Recall is 70%.

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

[conversational] Notice something important: maybe you also picked up some rocks by mistake. [casually] That's a Precision problem, not Recall's job. Recall only asks *"Did I find the treasures?"*

#### 📐 The Formula
[lecture] Recall equals **TP** divided by **TP plus FN**. TP is what you found correctly and FN is what you missed. [confidently] If you correctly found 8 out of 10 real entities, your Recall is 80%.

#### 🔧 When to Use This?
[seriously] Recall matters most when missing something is dangerous. [emphasizing] Medical records — you can't miss a patient's name. Legal documents — you must find every company. Security systems — you must catch every threat. [confidently] High Recall means *"I find almost everything!"* [conversational] You might make some extra guesses, but you don't miss much.

[casually] Let's look at the trade-offs next.`
        },
        {
          id: 7,
          title: 'Recall: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="flipCard" duration={0.9} delay={0.1}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Recall: Gaming the Metric"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
graph TB
    subgraph SpamFilter["📧 Spam Filter (100% Recall)"]
        SF1["Mark EVERY email as spam"]
        SF2["Recall = 100% ✅"]
        SF3["But 0% Precision ❌"]
        SF4["Real emails blocked! 💀"]
        SF1 --> SF2 --> SF3 --> SF4
    end
    subgraph Balanced["✅ Balanced Filter"]
        BF1["Mark likely spam only"]
        BF2["Recall = 80%"]
        BF3["Precision = 85%"]
        BF4["Actually useful! 🎉"]
        BF1 --> BF2 --> BF3 --> BF4
    end
    style SpamFilter fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:#000
    style Balanced fill:#c8e6c9,stroke:#4caf50,stroke-width:2px,color:#000`}
                    />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                    <h4>Pros</h4>
                  </div>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>Captures model coverage</li>
                    <li>Highlights under-detection and data gaps</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="flipCard" duration={0.9} delay={0.4}>
                <div style={{ marginBottom: '0em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                    <h4>Cons</h4>
                  </div>
                  <ul style={{ fontSize: '0.5em' }}>
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
          notes: `### Recall: Pros & Cons
[conversational] Just like Precision, Recall has its good and bad sides. Let's be honest about both.

#### ✅ Pros
[lecture] Recall measures **coverage** — *"Am I finding most of the entities?"* [seriously] For many jobs, this is super important. [cautiously] Low Recall is also a great warning sign. It tells you your model is too shy and missing too much, which might mean you need more training data.

#### ❌ Cons
[playfully] Here's another sneaky trick. [storytelling] Imagine labeling *every single word* as an entity. Every word! [surprised] Guess what? 100% Recall! [skeptically] You found everything because you said everything is an entity. [emphatically] But that's completely useless, right?

[amused] Here's a funny example: imagine a spam filter that marks EVERY email as spam. Every single one. [sarcastically] It catches 100% of spam emails — great Recall! [dismayed] But it also blocks all your real emails. [rhetorically] Would you use that filter? [firmly] No way!

[conversational] > "What would happen if your email filter did this?"

[confidently] Same lesson as before: **never look at Recall by itself**. We need balance. [excited] And that brings us perfectly to our next metric — the F1 Score!`
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
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0em' }}>
                  <h4>What It Measures</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>Balance between precision and recall (harmonic mean)</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="flipCard" duration={1} delay={0.35}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
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
                  </div>
                  <h4>Formula</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[F1 = \\frac{2 \\times (\\text{Precision} \\times \\text{Recall})}{\\text{Precision} + \\text{Recall}}\\]' }} />
                    <li>Usually micro-F1 across all entities</li>
                    <li>Macro-F1 averages per type (treats classes equally)</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.65}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="F1 Score: Comparing 3 Models"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'14px'}}}%%
graph TB
    subgraph ModelA["Model A: Too Careful"]
        A1["Precision: 90%"]
        A2["Recall: 40%"]
        A3["F1: 55%"]
        A4["❌ Playing it too safe!"]
        A1 --> A3
        A2 --> A3
        A3 --> A4
    end
    
    subgraph ModelB["Model B: Too Aggressive"]
        B1["Precision: 50%"]
        B2["Recall: 95%"]
        B3["F1: 66%"]
        B4["❌ Too many false positives!"]
        B1 --> B3
        B2 --> B3
        B3 --> B4
    end
    
    subgraph ModelC["Model C: Balanced ✨"]
        C1["Precision: 70%"]
        C2["Recall: 75%"]
        C3["F1: 72%"]
        C4["✅ Best Balance — Winner!"]
        C1 --> C3
        C2 --> C3
        C3 --> C4
    end
    
    style ModelA fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:#000
    style ModelB fill:#fff3e0,stroke:#e65100,stroke-width:2px,color:#000
    style ModelC fill:#c8e6c9,stroke:#2e7d32,stroke-width:3px,color:#000
    style A3 fill:#ffebee,color:#000
    style B3 fill:#fff8e1,color:#000
    style C3 fill:#a5d6a7,color:#000,stroke:#2e7d32,stroke-width:2px`}
                    />
                  </div>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>General-purpose single-number comparison</li>
                    <li>Model selection & leaderboard reporting</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### F1 Score (Entity-Level)
[enthusiastically] Here's the superstar metric — the **F1 Score**! [excited] This is the most popular metric in NER. You'll see it everywhere: papers, leaderboards, job interviews.

#### ⚖️ The Core Idea
[lecture] F1 combines Precision and Recall into ONE number — the best of both worlds! [conversational] Think about it: high Precision but low Recall? Too careful. High Recall but low Precision? Too wild. [confidently] F1 finds the balance.

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
[storytelling] Let me show you three models. **Model A** has 90% Precision but only 40% Recall — [disappointed] playing it too safe! **Model B** has 50% Precision and 95% Recall — [concerned] too aggressive, making mistakes everywhere. **Model C** has 70% Precision and 75% Recall — [pleased] nice balance! [excitedly] Model C wins on F1.

[lecture] The formula is F1 equals 2 times Precision times Recall, divided by Precision plus Recall. [conversational] It's called a **harmonic mean**, and it naturally penalizes models where one metric is way lower than the other. [reassuringly] Don't worry about memorizing it — just remember that F1 balances both.

#### 🔧 When to Use This?
[enthusiastically] Almost always! [energetic] Comparing models? Use F1. Reporting results? Use F1. Not sure which metric to pick? Use F1. It's your best friend in NER.

[cautiously] But even F1 isn't perfect — let's look at the trade-offs.`
        },
        {
          id: 9,
          title: 'F1 Score: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInRight" delay={0.1}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="F1 Trap: Same Score, Different Models"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
graph TB
    subgraph ModelA["Model A: Finds Many"]
        A1["Precision: 60%"]
        A2["Recall: 90%"]
        A3["F1: 72%"]
        A4["More finds, more mistakes"]
        A1 --> A3
        A2 --> A3
        A3 --> A4
    end
    subgraph ModelB["Model B: Very Careful"]
        B1["Precision: 90%"]
        B2["Recall: 60%"]
        B3["F1: 72%"]
        B4["Fewer finds, very accurate"]
        B1 --> B3
        B2 --> B3
        B3 --> B4
    end
    ModelA -.- Same["⚠️ Same F1 = 72%\nBut completely different behavior!"]
    ModelB -.- Same
    style ModelA fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
    style ModelB fill:#e8f5e9,stroke:#388e3c,stroke-width:2px,color:#000
    style Same fill:#fff9c4,stroke:#f57c00,stroke-width:2px,color:#000`}
                    />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                    <h4>Pros</h4>
                  </div>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>Balances FP and FN errors</li>
                    <li>Widely understood and comparable</li>
                    <li>Single number for quick comparison</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.4}>
                <div style={{ marginBottom: '0em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                    <h4>Cons</h4>
                  </div>
                  <ul style={{ fontSize: '0.5em' }}>
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
          notes: `### F1 Score: Pros & Cons
[conversational] F1 is amazing, but no metric is perfect. Let's look at the trade-offs.

#### ✅ Pros
[enthusiastically] Why does everyone love F1? [lecture] It balances both types of mistakes, which is fair. Everyone knows what F1 means, so it's easy to compare across papers and models. [pleased] And it's just one number — simple!

#### ❌ Cons
[cautiously] Here's the tricky part: F1 can hide things. [storytelling] Consider this: **Model A** has 60% Precision and 90% Recall, giving an F1 of 72%. **Model B** has 90% Precision and 60% Recall — [surprised] also an F1 of 72%! Same F1 score, but completely different behavior. [thoughtfully] Model A finds more entities with more mistakes, while Model B finds fewer but is very accurate. [rhetorically] Which is better? [serious] Depends on what you need! F1 alone doesn't tell you this.

[concerned] There's another hidden problem. [storytelling] Your overall F1 is 85% — [sarcastically] looks great! [worried] But rare entities like **DISEASE** might only have 20% F1. The overall number hid the problem because common entity types like PERSON dominated the score.

[firmly] The pro tip here is to **always report all three**: Precision, Recall, and F1. [seriously] And show per-class numbers too. Don't let one number fool you!

[energetic] Now let's move to a much stricter metric — Exact Match.`
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
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="rotateIn" duration={1} delay={0.1}>
                <div style={{ marginBottom: '0em' }}>
                  <h4>What It Measures</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>Percentage of sentences where predicted entity set exactly equals gold set</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInTop" delay={0.4}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
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
                  </div>
                  <h4>Formula</h4>
                  <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{EM}_i = \\begin{cases} 1 & \\text{if predicted set == gold set} \\\\ 0 & \\text{otherwise} \\end{cases}\\]' }} />
                  <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{Exact Match Score} = \\text{mean}_i(\\text{EM}_i)\\]' }} />
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.7}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Exact Match Example: 4 Predictions"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'14px'}}}%%
graph TB
    subgraph Truth["🎯 Ground Truth"]
        GT["Apple=ORG | Tim Cook=PERSON | Tesla=ORG"]
    end
    
    subgraph P1["Prediction 1: ✅ EM = 1"]
        P1E["Apple=ORG | Tim Cook=PERSON | Tesla=ORG"]
        P1R["✅ Perfect Match!"]
    end
    
    subgraph P2["Prediction 2: ❌ EM = 0"]
        P2E["Apple=ORG | Tim Cook=PERSON | Tesla=LOC"]
        P2R["❌ Wrong Label (LOC vs ORG)"]
    end
    
    subgraph P3["Prediction 3: ❌ EM = 0"]
        P3E["Apple=ORG | Tim Cook=PERSON | ø"]
        P3R["❌ Missing Entity (Tesla)"]
    end
    
    subgraph P4["Prediction 4: ❌ EM = 0"]
        P4E["Apple=ORG | Tim=PERSON | Cook=PERSON | Tesla=ORG"]
        P4R["❌ Wrong Boundaries (split name)"]
    end
    
    Truth --> P1
    Truth --> P2
    Truth --> P3
    Truth --> P4
    
    style Truth fill:#e3f2fd,stroke:#1976d2,stroke-width:3px,color:#000
    style P1 fill:#c8e6c9,stroke:#388e3c,stroke-width:2px,color:#000
    style P2 fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:#000
    style P3 fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:#000
    style P4 fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:#000
    style GT fill:#fff,color:#000
    style P1E fill:#fff,color:#000
    style P2E fill:#fff,color:#000
    style P3E fill:#fff,color:#000
    style P4E fill:#fff,color:#000`}
                    />
                  </div>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>End-to-end reliability & quality gates for production</li>
                    <li>Downstream tasks requiring perfect extraction</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Exact Match Score (Sentence-Level)
[seriously] Now that we've seen F1, let's get *really* strict. [dramatically] This is the **Exact Match Score**, and I call it the "all or nothing" metric.

#### 💯 The Core Idea
[storytelling] Imagine a school exam where you only get points if EVERY answer is correct. [disappointed] One mistake? Zero marks for the whole test. [firmly] That's Exact Match!

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
[lecture] Take the sentence *"Apple CEO Tim Cook visited Tesla."* The correct answer is Apple = ORG, Tim Cook = PERSON, Tesla = ORG.

[conversational] **Prediction 1:** Apple ORG, Tim Cook PERSON, Tesla ORG — [delighted] perfect! Exact Match = 1.
**Prediction 2:** Apple ORG, Tim Cook PERSON, Tesla LOC — [disappointed] one label wrong! Exact Match = 0.
**Prediction 3:** Apple ORG, Tim Cook PERSON, missed Tesla — Exact Match = 0.
**Prediction 4:** Apple ORG, "Tim" PERSON, "Cook" PERSON, Tesla ORG — [frustrated] wrong boundaries! Exact Match = 0.

[emphatically] See how harsh this is? [lecture] If you got 73 perfect sentences out of 100, your Exact Match Score is 73%.

#### 🔧 When to Use This?
[seriously] Before going live. Before production. [rhetorically] "Is my model ready for the real world?" [firmly] It's harsh, but honest.

[conversational] Let's see the trade-offs.`
        },
        {
          id: 11,
          title: 'Exact Match: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInBottom" delay={0.1}>
                <div style={{ marginBottom: '0em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                    <h4>Pros</h4>
                  </div>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>Very strict; reflects true task completeness</li>
                    <li>Sensitive to any error — catches everything</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="scaleIn" delay={0.4}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Exact Match: All-or-Nothing Problem"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
graph TB
    subgraph Bad["❌ 0 Correct Out of 10"]
        B1["Predicted: 'the Microsoft'"]
        B2["Gold: 'Microsoft'"]
        B3["EM = 0"]
        B1 --> B3
        B2 --> B3
    end
    subgraph Close["😔 9 Correct Out of 10"]
        C1["9 perfect entities"]
        C2["1 wrong boundary"]
        C3["EM = 0"]
        C1 --> C3
        C2 --> C3
    end
    Bad -.- Same["⚠️ Both score ZERO\nEM can't distinguish them!"]
    Close -.- Same
    style Bad fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:#000
    style Close fill:#fff3e0,stroke:#e65100,stroke-width:2px,color:#000
    style Same fill:#fff9c4,stroke:#f57c00,stroke-width:2px,color:#000`}
                    />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                    <h4>Cons</h4>
                  </div>
                  <ul style={{ fontSize: '0.5em' }}>
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
          notes: `### Exact Match: Pros & Cons
[conversational] Exact Match is powerful, but it can be brutal. Let's see both sides.

#### ✅ Pros
[firmly] It's 100% honest — no hiding. [seriously] In the real world, "almost right" often means "useless." [storytelling] Think about a hospital system — [rhetorically] would you want "mostly correct" for patient names? [emphatically] No! You need perfect. [confidently] Exact Match also catches every type of error: big mistakes, small mistakes, everything.

#### ❌ Cons
[disappointed] Here's the harsh reality. [storytelling] You get 9 out of 10 entities correct? Score = 0. You get 0 out of 10 correct? [frustrated] Also score = 0. Same score! [exasperated] Seems unfair, right?

[cautiously] Another problem is that when you score zero, you don't know *why*. [puzzled] Was it one mistake? Five mistakes? [disappointed] Exact Match doesn't tell you. [sadly] Here's a sad example: your model finds all the entities, but it says *"the Microsoft"* instead of *"Microsoft."* [sighing] Just one extra word. Exact Match = 0. Even though you were so close!

[conversational] > "Does this seem fair?"

[lecture] Best practice: use Exact Match when deciding *"Ready for production?"* [reassuringly] But during development, use F1 and others too — they're less harsh and more helpful for improving your model.

[excited] Now let's meet the forgiving cousin of Exact Match — Partial Match!`
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
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="bounceIn" duration={0.9} delay={0.1}>
                <div style={{ marginBottom: '0em' }}>
                  <h4>What It Measures</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>Credit for near-miss spans; reduces sensitivity to boundary noise</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.35}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
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
                  </div>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li><strong>IoU</strong> = |tokens overlap| / |tokens union|</li>
                    <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{IoU} = \\frac{|\\text{tokens}_\\text{overlap}|}{|\\text{tokens}_\\text{union}|}\\]' }} />
                    <li>Match if IoU ≥ τ (tau) and types match (common τ = 0.5)</li>
                    <li>Compute TP/FP/FN under this fuzzy rule → Partial-F1</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.6}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="IoU Examples: Partial Match Scoring"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
graph TB
    subgraph Ex1["Example 1: Tim Cook"]
        E1G["\u2705 Gold: 'Tim Cook' (2 tokens)"]
        E1P["\ud83e\udd16 Pred: 'Tim' (1 token)"]
        E1O["Overlap = 1 | Union = 2"]
        E1R["IoU = 1/2 = 50%"]
        E1M["\u2705 Match! (IoU \u2265 0.5)"]
        E1G --> E1O
        E1P --> E1O
        E1O --> E1R
        E1R --> E1M
    end
    
    subgraph Ex2["Example 2: New York City"]
        E2G["\u2705 Gold: 'New York City' (3 tokens)"]
        E2P["\ud83e\udd16 Pred: 'York City' (2 tokens)"]
        E2O["Overlap = 2 | Union = 3"]
        E2R["IoU = 2/3 = 67%"]
        E2M["\u2705 Match! (IoU \u2265 0.5)"]
        E2G --> E2O
        E2P --> E2O
        E2O --> E2R
        E2R --> E2M
    end
    
    style Ex1 fill:#e8f5e9,stroke:#4caf50,stroke-width:2px,color:#000
    style Ex2 fill:#e3f2fd,stroke:#2196f3,stroke-width:2px,color:#000
    style E1G fill:#fff,color:#000
    style E1P fill:#fff,color:#000
    style E2G fill:#fff,color:#000
    style E2P fill:#fff,color:#000
    style E1M fill:#c8e6c9,color:#000
    style E2M fill:#c8e6c9,color:#000`}
                    />
                  </div>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>Noisy boundaries, weak supervision, fair span comparisons</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Partial Match Score (IoU-Based)
[excited] Now that we've seen how strict Exact Match is, let's meet the forgiving cousin — **Partial Match Score**. [playfully] This one says *"close enough? You get credit!"*

#### 🧮 How IoU Works
[lecture] It uses something called **IoU** 👉 "eye-oh-you," which stands for **Intersection over Union**. [reassuringly] Don't worry, it's simpler than it sounds.

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

[conversational] Step 1: count how many words match between your prediction and the gold answer. Step 2: count total unique words in both. Step 3: divide. [cheerfully] That's your IoU!

#### 📐 Example Walkthrough
[lecture] The correct entity is "Tim Cook" (2 words), and your model predicts just "Tim" (1 word). Overlap is 1 word, union is 2 words. IoU = 1/2 = 50%. [conversational] We set a threshold **τ** 👉 "tau" — usually 0.5. [pleased] Since 50% meets our threshold, "Tim" counts as a partial match for "Tim Cook."

[enthusiastically] Another example: correct is "New York City" (3 words), predicted is "York City" (2 words). Overlap = 2, Union = 3. IoU = 67% — [happily] that's above 50%, so it's a match!

#### 🔧 When to Use This?
[conversational] When your data is messy, boundaries are unclear, or "close enough" is genuinely good enough. [confidently] It's more forgiving, more practical, more real-world.

[casually] Let's look at the trade-offs.`
        },
        {
          id: 13,
          title: 'Partial Match: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Partial Match: τ Threshold Comparison"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
graph TB
    subgraph Span["🔍 Span: 'New York City' (3 tokens)"]
        Pred["🤖 Pred: 'New York' (2 tokens)"]
        Calc["Overlap=2, Union=3, IoU=67%"]
        Pred --> Calc
    end
    Calc --> T1{"τ = 0.3?"}
    Calc --> T2{"τ = 0.5?"}
    Calc --> T3{"τ = 0.8?"}
    T1 -->|"67% ≥ 30%"| M1["✅ Match"]
    T2 -->|"67% ≥ 50%"| M2["✅ Match"]
    T3 -->|"67% < 80%"| M3["❌ No Match"]
    style Span fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
    style M1 fill:#c8e6c9,color:#000
    style M2 fill:#c8e6c9,color:#000
    style M3 fill:#ffcdd2,color:#000`}
                    />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                    <h4>Pros</h4>
                  </div>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>Rewards close spans — partial credit!</li>
                    <li>More stable with annotation noise</li>
                    <li>Tunable strictness via τ (tau) threshold</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                    <h4>Cons</h4>
                  </div>
                  <ul style={{ fontSize: '0.5em' }}>
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
          notes: `### Partial Match: Pros & Cons
[conversational] Partial Match is forgiving, but flexibility comes with trade-offs.

#### ✅ Pros
[cheerfully] The good stuff: you get credit for being close! [enthusiastically] "New York" instead of "New York City"? Not a total fail anymore — partial credit! [pleased] It also handles messy data better, since different annotators often label boundaries differently. Partial Match is more forgiving about that. [conversational] Plus, you can adjust the threshold! [lecture] **τ** 👉 "tau" = 1.0 is very strict (basically exact match), τ = 0.5 is the standard (50% overlap needed), and τ = 0.3 is very forgiving. [confidently] You control how strict you want to be.

#### ❌ Cons
[cautiously] The big problem is that **there's no standard**. [concerned] Different papers use different thresholds and different matching methods. You can't compare them easily! [worried] Another issue is that Partial Match can hide problems. [storytelling] If your model always misses the last word of an entity, Partial Match might not show it because the IoU is still above threshold.

[firmly] The most important advice: **always document your τ value!** [seriously] Always write down your threshold, and always report BOTH Exact Match and Partial Match so people can compare fairly. [conversational] The most common choice is τ = 0.5, which makes comparison easier across papers.

[excited] Now let's look at a very different kind of metric — Entity-Level Accuracy.`
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
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0em' }}>
                  <h4>What It Measures</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>Accuracy of type classification when spans are given (gold spans)</li>
                    <li>Isolates typing from detection — focuses solely on labeling quality</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="flipCard" duration={1} delay={0.35}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
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
                  </div>
                  <h4>Formula</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{Accuracy} = \\frac{\\text{# gold entities with correct type}}{\\text{total gold entities}}\\]' }} />
                    <li>Option: macro-averaged over types for class balance</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInBottom" delay={0.65}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Entity-Level Accuracy Examples"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
graph TB
    subgraph Ex1["Example 1: Perfect Score"]
        E1T["\ud83d\udccb Given Spans: 'Apple', 'Tim Cook'"]
        E1L1["\ud83c\udff7\ufe0f Apple \u2192 ORG \u2705"]
        E1L2["\ud83c\udff7\ufe0f Tim Cook \u2192 PERSON \u2705"]
        E1R["\ud83d\udcca Accuracy = 2/2 = 100%"]
        E1T --> E1L1
        E1T --> E1L2
        E1L1 --> E1R
        E1L2 --> E1R
    end
    
    subgraph Ex2["Example 2: One Error"]
        E2T["\ud83d\udccb Given: 'Apple', 'Tim Cook', 'iPhone'"]
        E2L1["\ud83c\udff7\ufe0f Apple \u2192 ORG \u2705"]
        E2L2["\ud83c\udff7\ufe0f Tim Cook \u2192 ORG \u274c (should be PERSON)"]
        E2L3["\ud83c\udff7\ufe0f iPhone \u2192 PRODUCT \u2705"]
        E2R["\ud83d\udcca Accuracy = 2/3 = 67%"]
        E2T --> E2L1
        E2T --> E2L2
        E2T --> E2L3
        E2L1 --> E2R
        E2L2 --> E2R
        E2L3 --> E2R
    end
    
    style Ex1 fill:#e8f5e9,stroke:#4caf50,stroke-width:2px,color:#000
    style Ex2 fill:#fff3e0,stroke:#ff9800,stroke-width:2px,color:#000
    style E1T fill:#fff,color:#000
    style E2T fill:#fff,color:#000
    style E1R fill:#c8e6c9,color:#000
    style E2R fill:#ffe0b2,color:#000`}
                    />
                  </div>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>Pipeline analysis & diagnosing label confusions</li>
                    <li>Ablations on classifier heads</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Entity-Level Accuracy
[excited] Now let's look at a very different kind of metric — **Entity-Level Accuracy**. [conversational] This one isolates just ONE skill: labeling!

#### 🏷️ The Core Idea
[storytelling] Imagine I give you a list of entities and I already tell you WHERE they are. Your only job? [casually] Put the right label on them. [playfully] It's like a fill-in-the-blank test where the blanks are already marked for you. [conversational] You just choose: PERSON? ORG? LOC?

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
[lecture] Take *"Apple CEO Tim Cook announced..."* — I tell you "Apple" is an entity and "Tim Cook" is an entity. Now you label them. [pleased] Apple = ORG — correct! Tim Cook = PERSON — correct! [delighted] Accuracy = 2/2 = 100%.

[conversational] Another example: Apple = ORG (correct), Tim Cook = ORG [disappointed] (wrong — should be PERSON), iPhone = PRODUCT (correct). [lecture] That's 2 out of 3 correct, so Accuracy = 67%.

#### 🔧 Why Is This Useful?
[enthusiastically] It tells you *"Is my labeler good?"* separately from *"Is my finder good?"* [excitedly] This is a powerful debugging tool. When something's broken, this metric helps you figure out WHICH part is broken. Very helpful during development!

[casually] Let's check the trade-offs.`
        },
        {
          id: 15,
          title: 'Entity-Level Accuracy: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Entity Accuracy: Diagnostic Detective"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    Start["🔍 F1 = 40% — Something is Wrong!"]
    Start --> Check{"Check Entity\nLevel Accuracy"}
    Check -->|"Accuracy = 90%"| FindProblem["❌ Finding Problem\n(Model can't detect spans)"]
    Check -->|"Accuracy = 45%"| LabelProblem["❌ Labeling Problem\n(Wrong types assigned)"]
    FindProblem --> FixFind["🔧 Fix: More detection\ntraining data"]
    LabelProblem --> FixLabel["🔧 Fix: Better label\nguidelines"]
    style Start fill:#ffcdd2,color:#000
    style FindProblem fill:#fff3e0,color:#000
    style LabelProblem fill:#fff3e0,color:#000
    style FixFind fill:#c8e6c9,color:#000
    style FixLabel fill:#c8e6c9,color:#000`}
                    />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                    <h4>Pros</h4>
                  </div>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>Clear diagnostic of typing component</li>
                    <li>Unaffected by detection errors</li>
                    <li>Highly interpretable for debugging</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <div style={{ marginBottom: '0em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                    <h4>Cons</h4>
                  </div>
                  <ul style={{ fontSize: '0.5em' }}>
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
          notes: `### Entity-Level Accuracy: Pros & Cons
[conversational] Entity-Level Accuracy is a great detective tool, but it has its limits.

#### ✅ Pros
[confidently] It tells you EXACTLY how good your labeling is — no guessing, clear answer. [pleased] It's unaffected by entity-finding errors, so even if your entity-finder is terrible, this still tells you whether the labeler is good.

[excited] Here's a detective story to illustrate. [concerned] Your F1 score is 40% — bad! [puzzled] But *why*? [thoughtfully] Two possibilities: either it can't FIND entities or it can't LABEL entities. [conversational] Check Entity-Level Accuracy. [pleased] If it's 90%, the labeler is fine and the problem is finding. [worried] If it's 45%, the labeler is broken and the problem is labeling. [enthusiastically] See? It tells you WHERE to fix!

#### ❌ Cons
[seriously] This is NOT real-world performance. [lecture] In real life, you don't get entities handed to you — you have to find them AND label them. [cautiously] There's also a sneaky trap: if 90% of your entities are PERSON, a model could just always say PERSON and get 90% accuracy. [sarcastically] Technically high accuracy, but a completely useless model!

[firmly] Remember: **this is a debugging tool**, not your final report card. Use F1 for the real score.

[excited] Now let's meet my personal favorite — the Confusion Matrix!`
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
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="rotateIn" duration={1} delay={0.1}>
                <div style={{ marginBottom: '0em' }}>
                  <h4>What It Measures</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>Where the model confuses types and how often</li>
                    <li>Error patterns across entity classes</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="scaleIn" delay={0.4}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
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
                  </div>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>Rows = gold types, Columns = predicted types</li>
                    <li>Diagonal = correct, Off-diagonal = mistakes</li>
                    <li>Include FN (missed) and FP (spurious) as margins</li>
                    <li>Normalize rows for per-class recall</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInBottom" delay={0.7}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Confusion Matrix Example"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
graph TB
    subgraph Matrix["Confusion Matrix (Gold vs Predicted)"]
        direction TB
        Header["       | PERSON | ORG | LOC |"]
        Row1["PERSON |  120   |  5  |  0  |"]
        Row2["ORG    |   8    | 95  |  2  |"]
        Row3["LOC    |   1    |  1  | 108 |"]
    end
    
    subgraph Analysis["Key Insights"]
        I1["✅ PERSON: 96% correct (120/125)"]
        I2["✅ LOC: 98% correct (108/110)"]
        I3["⚠️ ORG: 90% correct (95/105)"]
        I4["❌ Main Confusion: PERSON ↔️ ORG"]
        I5["🔧 Action: More PERSON/ORG training data"]
    end
    
    Matrix --> Analysis
    
    style Matrix fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
    style Analysis fill:#fff9c4,stroke:#f57c00,stroke-width:2px,color:#000
    style Header fill:#bbdefb,color:#000
    style Row1 fill:#fff,color:#000
    style Row2 fill:#fff,color:#000
    style Row3 fill:#fff,color:#000
    style I4 fill:#ffccbc,color:#000`}
                    />
                  </div>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>Diagnosing confusions, guiding data collection, schema refinement</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Confusion Matrix Analysis (By Entity Type)
[enthusiastically] Last metric, and it's my personal favorite — the **Confusion Matrix**! [excited] This is the ultimate detective tool. It shows you exactly WHERE your model gets confused: which mistakes, how often, everything.

#### 🔬 How It Works
[storytelling] Think of it like a detailed report card — not just a grade, but exactly which questions you got wrong.

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

[lecture] Let me draw one for you mentally: rows are what it *actually* was, and columns are what you *predicted*. [conversational] The diagonal contains the correct predictions — [pleased] 120 persons predicted as PERSON, 95 orgs predicted as ORG, 108 locations predicted as LOC. Those are the wins!

[serious] The off-diagonal cells are the mistakes: [disappointed] 5 persons called ORG, 8 orgs called PERSON. [thoughtfully] Now you can see exactly what's getting confused. PERSON and ORG get mixed up sometimes, but LOC is very accurate.

#### 🎯 Why Is This Amazing?
[enthusiastically] It tells you WHAT to fix! [excited] Confusing PERSON and ORG? Collect more training examples that distinguish them. Missing DISEASE entities completely? You need medical training data. [confidently] No other metric shows you this level of detail — this is your roadmap for improvement!

[casually] Let's see the trade-offs.`
        },
        {
          id: 17,
          title: 'Confusion Matrix: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="bounceIn" duration={0.9} delay={0.1}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Confusion Matrix: Real Story — F1 75% → 82%"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
graph TB
    subgraph Problem["🔍 Confusion Matrix Revealed"]
        P1["'Boston General Hospital'"]
        P2["Gold: FACILITY"]
        P3["Predicted: LOC (40% of cases!)"]
        P1 --> P2
        P1 --> P3
    end
    subgraph Fix["🔧 The Fix"]
        F1["Updated labeling guidelines"]
        F2["Added FACILITY examples"]
        F3["Retrained model"]
        F1 --> F2 --> F3
    end
    subgraph Result["📊 Result"]
        R1["Before: F1 = 75%"]
        R2["After: F1 = 82% 🎉"]
        R1 --> R2
    end
    Problem --> Fix --> Result
    style Problem fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:#000
    style Fix fill:#fff9c4,stroke:#f57c00,stroke-width:2px,color:#000
    style Result fill:#c8e6c9,stroke:#4caf50,stroke-width:2px,color:#000`}
                    />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                    <h4>Pros</h4>
                  </div>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>Highly diagnostic for targeted improvements</li>
                    <li>Reveals minority-class issues hidden by averaging</li>
                    <li>Supports data-driven schema refinement</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <div style={{ marginBottom: '0em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                    <h4>Cons</h4>
                  </div>
                  <ul style={{ fontSize: '0.5em' }}>
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
          notes: `### Confusion Matrix: Pros & Cons
[conversational] The Confusion Matrix is super powerful, but it has some quirks.

#### ✅ Pros
[enthusiastically] It shows exactly what's confused with what — no guessing, you SEE the pattern. [excited] It reveals hidden problems that averages conceal. [sarcastically] Your overall F1 is 80%? Looks good! [concerned] But the Confusion Matrix shows DISEASE = 0% detected. [shocked] Completely missed! [seriously] Without the matrix, you'd never know.

[conversational] And best of all, it tells you what to DO about it. [lecture] ORG confused with PRODUCT? Get more examples. PERSON and ORG mixed up? Write clearer guidelines.

[storytelling] Let me tell you a real story. [conversational] A team had 75% F1 and couldn't improve no matter what they tried. They looked at the Confusion Matrix and found that 40% of FACILITY entities were being labeled as LOC. [puzzled] *"Boston General Hospital"* — is that a place or a facility? [pleased] They fixed their labeling guidelines, and F1 jumped to 82%! [excitedly] The matrix showed them exactly what to fix.

#### ❌ Cons
[cautiously] It's not one number, so it's hard to compare models directly. [thoughtfully] "Which confusion pattern is better?" — that depends on your use case. [seriously] It also needs enough data per class. [concerned] Only 5 examples of DISEASE? The pattern won't be reliable.

[firmly] The best practice is clear: use Confusion Matrix for understanding and fixing, use F1 for comparing and reporting. [confidently] Use both!

[excited] Now let's wrap everything up with our summary.`
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
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
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
                  </div>
                  <h4>Metric Selection Guide</h4>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.6}>
                <div style={{ fontSize: '0.75em', padding: '0.2em 0' }}>📊 Use <strong>micro Precision/Recall/F1</strong> with exact matching for standard reporting</div>
                <div style={{ fontSize: '0.75em', padding: '0.2em 0' }}>🔀 Add <strong>Partial-F1</strong> (IoU) when boundary noise is expected — document τ</div>
                <div style={{ fontSize: '0.75em', padding: '0.2em 0' }}>💯 Track <strong>Exact Match</strong> (sentence-level) for production readiness</div>
                <div style={{ fontSize: '0.75em', padding: '0.2em 0' }}>🔍 Use <strong>Entity Accuracy + Confusion Matrix</strong> for diagnosis</div>
              </GSAPStaggerList>
            </div>
          ),
          notes: `### Summary and Key Takeaways
[pleased] Alright! [cheerfully] We've covered all seven metrics. Let's bring it all together with a clear guide on when to use each one.

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

[lecture] For **every project**, report these three: Precision, Recall, and F1 with exact matching. That's the standard. [conversational] If your data has **messy boundaries**, add Partial Match with IoU and set τ 👉 "tau" = 0.5. [seriously] Before **going live**, check Exact Match — "How many sentences are 100% perfect?" [thoughtfully] When **something's broken**, Entity-Level Accuracy tells you whether it's a finding or labeling problem, and Confusion Matrix tells you which classes are causing trouble.

#### 📅 A Weekly Debugging Workflow
[conversational] Here's a practical workflow: [lecture] **Week 1** — check F1 to see if the model is learning. **Week 2** — check the Confusion Matrix to see where it fails. **Week 3** — check Entity Accuracy to diagnose finding vs labeling problems. **Week 4** — check Exact Match to see if it's production-ready.

[seriously] Remember, metrics are TOOLS. [firmly] They help you understand your model and guide your decisions — they're not just numbers to brag about! [confidently] Use them wisely.

[energetic] Let's move on to the Do's and Don'ts.`
        },
        {
          id: 19,
          title: "Do's and Don'ts",
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0em' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#27AE60' }} />
                    <h4>Do's</h4>
                  </div>
                  <ul style={{ fontSize: '0.5em' }}>
                    <li>Define matching rule (strict vs partial), averaging (micro vs macro), and scope</li>
                    <li>Report per-class metrics alongside micro-F1 for imbalanced datasets</li>
                    <li>Document evaluation settings in your code</li>
                  </ul>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Horror Story: 95% Accuracy vs 40% Entity F1"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
graph TB
    subgraph Sentence["📝 1000-Word Sentence"]
        W["950 non-entity tokens (O)"]
        E["50 entity tokens"]
    end
    subgraph WrongMetric["❌ Token Accuracy (WRONG)"]
        WM1["Model misses ALL entities"]
        WM2["950/1000 = 95% 'accuracy'"]
        WM3["Deployed! 😱"]
        WM1 --> WM2 --> WM3
    end
    subgraph RightMetric["✅ Entity F1 (CORRECT)"]
        RM1["0 entities found correctly"]
        RM2["F1 = 0% — Model is broken!"]
        RM3["Do NOT deploy! 🛑"]
        RM1 --> RM2 --> RM3
    end
    Sentence --> WrongMetric
    Sentence --> RightMetric
    style WrongMetric fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:#000
    style RightMetric fill:#c8e6c9,stroke:#4caf50,stroke-width:2px,color:#000`}
                    />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ color: '#E74C3C' }} />
                    <h4>Don'ts</h4>
                  </div>
                  <ul style={{ fontSize: '0.5em' }}>
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
          notes: `### Do's and Don'ts
[seriously] Now some very important rules. [firmly] Follow these and you'll avoid big mistakes that trip up even experienced teams!

#### ✅ Do's
[lecture] First, **always document your evaluation settings**. [conversational] Are you using exact match or partial? Micro average or macro? What threshold? [emphasizing] Write it down clearly, like: *"We use micro-F1 with exact matching."* Now everyone knows what you did!

[seriously] Second, **always show per-class metrics**. [cautiously] An overall F1 of 85% looks great, but what if DISEASE is only 20%? [firmly] You need to show the breakdown so problems are visible.

#### ❌ Don'ts
[emphatically] The biggest trap: **don't use token accuracy!** [seriously] Here's why. [storytelling] Imagine 1000 words, and only 50 are entities. [shocked] If you miss ALL entities, you still get 95% accuracy because 950 non-entities were "correct." [disappointed] But you found ZERO entities! [frustrated] Terrible, yet it looks great on paper.

[cautiously] Also, **don't compare results without aligning evaluation settings**. [lecture] Paper A uses τ 👉 "tau" = 0.3, Paper B uses exact match — [firmly] you simply can't compare them. Apples and oranges!

[seriously] Let me tell you a horror story. [storytelling] A team told their boss *"95% accuracy!"* [cheerfully] Everyone celebrated. [dramatically] Then they deployed it. [shocked] Actual entity F1? 40%. [dismayed] The project almost got canceled. [disappointed] They were using token-level accuracy including all those boring O tokens. The number looked too good because it was the wrong metric.

[conversational] > "If a metric looks too good to be true, what should you do?"

[firmly] Investigate! Always investigate!

[energetic] Let's finish with our action items.`
        },
        {
          id: 20,
          title: 'Next Steps',
          icon: { name: 'duo-rocket' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="scaleIn" duration={1} delay={0.1}>
                <div style={{ marginBottom: '0em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="NER Evaluation Workflow"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart LR
    A["⚙️ Set Eval Config\n(matching, τ, averaging)"] --> B["🧪 Add Unit Tests\n(exact, partial, errors)"]
    B --> C["📊 Automate Reports\n(F1 + per-class + matrix)"]
    C --> D["📝 Document\n(metrics, results, issues)"]
    style A fill:#4fc3f7,color:#000
    style B fill:#e1bee7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffd700,color:#000`}
                    />
                  </div>
                  <h4>Action Items</h4>
                </div>
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
          notes: `### Next Steps
[delighted] Congratulations! [excited] You just learned seven evaluation metrics for NER — that's a big deal! [seriously] But learning is step one. [energetic] Now it's action time!

#### 🛠️ Action 1: Save Your Settings in Code
[lecture] Create a configuration file. [conversational] Matching type: exact or partial? Threshold: 0.5? Averaging: micro or macro? [firmly] Write it down in code. [playfully] Future you will thank present you!

#### 🧪 Action 2: Test Your Evaluation Code
[seriously] Write test cases! [lecture] Test exact matches, partial matches, wrong labels, and missed entities. [cautiously] Bugs in evaluation code are **silent killers** — [worried] you won't know something's wrong until it's too late.

#### 📊 Action 3: Automate Your Reports
[conversational] Build a script that shows overall F1, per-class breakdown, confusion matrix visualization, and error examples. [firmly] Automate it! [weary] You'll run many experiments and manual reporting gets old very fast.

#### 📝 Action 4: Document Everything
[seriously] Every model should have clearly documented metrics used, per-class results, known problems, and what data you tested on. [confidently] This isn't just good practice — it's professional.

[conversational] > "Any questions?"

[warmly] Thank you so much for listening! [inspiringly] Remember: **good evaluation equals good machine learning**. [confidently] Master this, and you're ahead of most beginners. [cheerfully] Good luck with your projects!`
        }
      ]
    }
  ]
};
