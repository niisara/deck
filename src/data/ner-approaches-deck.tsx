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
                Prepared by: Nisar A • Date: 2026-Jan-1
              </p>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `# 👋 Welcome!

Hey there! Thanks for joining me today!

Super excited to dive into this with you.
We're gonna explore **eleven different ways** to build NER systems!

---

#### 🔍 Quick Refresher: What is NER?

**NER** stands for **Named Entity Recognition**.
It's teaching computers to find important things in text.
Names. Places. Companies. Dates.

\`\`\`mermaid
flowchart LR
    subgraph Input["📝 Input Text"]
        T["Apple opened a store in Tokyo"]
    end
    subgraph NER["🔍 NER Process"]
        T --> A["Apple"]
        T --> S["opened a store in"]
        T --> K["Tokyo"]
    end
    subgraph Output["🏷️ Labeled Entities"]
        A --> |ORG| O1["🏢 Apple"]
        S --> |O| O2["---"]
        K --> |LOC| O3["📍 Tokyo"]
    end
    style O1 fill:#4fc3f7,color:#000
    style O3 fill:#81c784,color:#000
\`\`\`

In this sentence...
- **"Apple"** is a company.
- **"Tokyo"** is a location.

NER finds and labels these automatically!

---

## 🎯 What We'll Cover

Now... there's not just ONE way to do NER.
There are **MANY approaches**!

Old-school rules. Dictionaries. Machine learning. Deep learning. Even ChatGPT!

Today I'll show you **eleven of them**.
From simplest to most advanced.

By the end... you'll know which one to pick for YOUR project.

**Let's dive in!**`
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
          notes: `# 📋 Roadmap

Here's our roadmap.
**Eleven approaches.** Plus a summary at the end.

Let me group them for you.

\`\`\`mermaid
flowchart TB
    subgraph Simple["📋 Simple - No ML"]
        R["1. Rules"]
        D["2. Dictionary"]
    end
    subgraph Classical["📊 Classical ML"]
        TF["3. TF-IDF"]
        HMM["4. HMM"]
        CRF["5. CRF"]
    end
    subgraph Neural["🧠 Neural Networks"]
        BI["6. BiLSTM"]
        CNN["7. CNN+BiLSTM"]
        SP["8. spaCy"]
    end
    subgraph Trans["🤖 Transformers"]
        BERT["9. BERT"]
        ROB["10. RoBERTa/DistilBERT"]
    end
    subgraph LLM["💡 LLMs"]
        ZS["11. Zero-shot"]
    end
    Simple --> Classical --> Neural --> Trans --> LLM
    style Simple fill:#4fc3f7,color:#000
    style Classical fill:#ffb74d,color:#000
    style Neural fill:#ba68c8,color:#000
    style Trans fill:#f06292,color:#000
    style LLM fill:#81c784,color:#000
\`\`\`

---

## 📚 The Groups

**First two** are simple. No machine learning needed.

**Next three** use classical machine learning.
These were popular before deep learning.

**Then we have neural networks.**
These learn patterns automatically.

**Next... the transformers.**
These are the current state-of-the-art. Very powerful!

**And finally... Large Language Models.**
Like ChatGPT!

---

We'll go through each one.
I'll explain **when to use it** and **when NOT to use it**.

Ready? Let's start with the simplest approach!`
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
          notes: `# 1️⃣ Rule-Based Pattern Matching

**Approach number one!**

Rule-Based Pattern Matching.
This is the **simplest method**.

No AI. No training. Just rules!

---

## 📋 What Kind of Rules?

\`\`\`mermaid
flowchart LR
    subgraph Rules["📋 Pattern Rules"]
        R1["Capital Letter → Name?"]
        R2["xxx@xxx.com → Email"]
        R3["[A-Z][a-z]+ [A-Z][a-z]+"]
    end
    subgraph Match["✅ Matches"]
        M1["Tim Cook"]
        M2["user@email.com"]
        M3["New York"]
    end
    R1 --> M1
    R2 --> M2
    R3 --> M3
    style Rules fill:#4fc3f7,color:#000
    style Match fill:#81c784,color:#000
\`\`\`

Simple patterns like this. Or **regular expressions**.

You write: *"Find anything that looks like an email."*
The computer follows your rule exactly.

The regex pattern says: Capital letter, lowercase letters, space, capital, lowercase.
That matches "Tim Cook" or "New York"!

---

## 🎯 When to Use This?

When you have **very structured data**:
- Dates
- Phone numbers
- Email addresses
- IDs
- Things with predictable formats!

---

### ✅ Pros

The good stuff:
- It's **transparent**. You know exactly what it does.
- It's **fast**. Super fast.
- **No training data** needed!

### ❌ Cons

The problems:
- It **breaks easily**.

\`\`\`mermaid
flowchart LR
    P["Pattern: [A-Z][a-z]+"] --> |✅| W1["Tim Cook"]
    P --> |❌| W2["TIM COOK"]
    P --> |❌| W3["tim cook"]
    style W1 fill:#81c784,color:#000
    style W2 fill:#ef5350,color:#000
    style W3 fill:#ef5350,color:#000
\`\`\`

"Tim Cook" works. But "TIM COOK" fails.
You have to think of **EVERY variation**.
High maintenance!

---

Think of it like a **recipe**.
Very precise. But if you miss one ingredient... it fails!`
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
          notes: `# 2️⃣ Dictionary / Gazetteer Lookup

Now that we've seen rules... let's try something similar.

**Approach two: Dictionary Lookup.**
Also called "Gazetteer" lookup.

What's a gazetteer?
Just a fancy word for **"a list of known things."**

---

## 💡 The Idea

\`\`\`mermaid
flowchart LR
    subgraph Dict["📚 City Dictionary"]
        D1["Tokyo"]
        D2["Paris"]
        D3["London"]
        D4["..."]
    end
    subgraph Process["🔍 Lookup"]
        T["Text: 'Visit Tokyo'"] --> Q{"Tokyo in list?"}
        Q --> |"Yes ✅"| L["Label: CITY"]
    end
    Dict --> Q
    style Dict fill:#81c784,color:#000
    style L fill:#4fc3f7,color:#000
\`\`\`

You create a list of all cities.
When the computer sees "Tokyo" in text...
It checks: *"Is Tokyo in my city list? Yes! → Label it CITY."*

> 🎤 Simple, right?

---

## 🎯 When to Use This?

This is great for **known entities**:
- Product catalogs
- Country names
- Disease names
- Things that don't change much

---

### ✅ Pros

Why it's good:
- Very **high precision** for known things.
- **Easy to update**. Just add to the list!
- Works in any language... if you have the dictionary.

### ❌ Cons

The problems:
- It can't find **NEW things**.
  - If "SpaceX" isn't in your list... you miss it.
- **Ambiguity!**

\`\`\`mermaid
flowchart TB
    A["'Apple' in text"] --> F{"Which dictionary?"}
    F --> |"Fruit Dict"| FR["🍎 Fruit"]
    F --> |"Company Dict"| CO["🏢 Company"]
    F --> |"???"| Q["❓ Need Context!"]
    style FR fill:#81c784,color:#000
    style CO fill:#4fc3f7,color:#000
    style Q fill:#ffb74d,color:#000
\`\`\`

"Apple" is in your fruit dictionary AND your company dictionary.
Which one is it? **You need context!**

---

Think of it like a **phone book**.
Great for finding people you know.
Useless for finding strangers!`
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
          notes: `# 3️⃣ TF-IDF + Classifier-Based NER

**Now we're entering machine learning territory!**

Approach three: TF-IDF plus a Classifier.

---

## 📊 What is TF-IDF?

\`\`\`mermaid
flowchart LR
    subgraph TFIDF["📊 TF-IDF"]
        TF["Term Frequency"] 
        IDF["Inverse Doc Frequency"]
        TF --- X["×"] --- IDF
    end
    subgraph Score["📈 Word Importance"]
        S1["'the' → 0.01 (low)"]
        S2["'Microsoft' → 0.89 (high)"]
    end
    TFIDF --> Score
    style S1 fill:#ef5350,color:#fff
    style S2 fill:#81c784,color:#000
\`\`\`

Don't worry about the math.

It just means: **"How important is this word?"**
- Common words like "the" get **low scores**.
- Special words like "Microsoft" get **high scores**.

---

## 🔄 How It Works for NER

\`\`\`mermaid
flowchart LR
    W["Words"] --> T["TF-IDF\nVectorizer"] --> N["Numbers"] --> C["Classifier\n(LogReg/SVM)"] --> P["Predictions\nPERSON/ORG/LOC"]
    style T fill:#4fc3f7,color:#000
    style C fill:#ba68c8,color:#000
    style P fill:#81c784,color:#000
\`\`\`

**Step 1:** Turn each word into numbers using TF-IDF.
**Step 2:** Feed those numbers to a classifier.
**Step 3:** The classifier predicts: PERSON? ORG? LOCATION? NONE?

These are old-school classifiers.
Fast. Simple. Interpretable.

---

## 🎯 When to Use This?

- As a **quick baseline**.
- When you have **limited compute**.
- When you need something **lightweight**.

---

### ✅ Pros

The good stuff:
- **Very fast** to train.
- You can see which features matter.
- **Runs on any laptop!**

### ❌ Cons

The problems:
- Each word is predicted **independently**.
- **No context!**
- "New" and "York" are separate. The model doesn't know they're one entity.
- Also... you need to **engineer features manually**.

---

This is a good starting point.
But modern methods are **much better!**`
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
          notes: `# 4️⃣ Hidden Markov Model (HMM) NER

**Approach four: Hidden Markov Models.**
HMM for short.

This is a **classic!** Taught in every NLP course.

---

## 💡 The Big Idea

HMM thinks about **SEQUENCES**.
Not just one word... but the whole sentence!

\`\`\`mermaid
stateDiagram-v2
    [*] --> O: Start
    O --> O: 85%
    O --> B_PER: 10%
    O --> B_LOC: 5%
    B_PER --> I_PER: 80%
    B_PER --> O: 20%
    I_PER --> I_PER: 60%
    I_PER --> O: 40%
    B_LOC --> I_LOC: 75%
    B_LOC --> O: 25%
    I_LOC --> O: 100%
\`\`\`

It models: *"What tag is likely AFTER this tag?"*

---

## 🌤️ Weather Analogy

\`\`\`mermaid
stateDiagram-v2
    direction LR
    Sunny --> Sunny: 70%
    Sunny --> Rainy: 30%
    Rainy --> Rainy: 60%
    Rainy --> Sunny: 40%
\`\`\`

If it's sunny today... probably sunny tomorrow too.

**HMM works the same way for tags!**
If we start a person name (B-PERSON)... probably still in a person name (I-PERSON)!

---

## 🎯 When to Use HMM?

- Mostly for **learning!** It's a great educational baseline.
- **Low-resource scenarios** where you have very little data.

---

### ✅ Pros

The good stuff:
- **Fast and efficient.**
- Handles sequences naturally.
- **Probabilistic.** Gives you confidence scores!

### ❌ Cons

The problems:
- Makes **strong assumptions**.
- "Each word only depends on its tag."
- That's too simple for real text!
- Limited features. Can't use modern tricks.

---

HMM was state-of-the-art in the 90s.
Now we have better options. **But good to know!**`
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
          notes: `# 5️⃣ Conditional Random Fields (CRF) NER

Now that we've seen HMM... here's its **smarter cousin**.

**Approach five: Conditional Random Fields.**
CRF!

This was **THE method** before deep learning.

---

## 🔄 What's Different from HMM?

\`\`\`mermaid
flowchart TB
    subgraph HMM["🔮 HMM - Generative"]
        H1["Models P(words, tags)"]
        H2["Models everything"]
        H3["Strong assumptions"]
    end
    subgraph CRF["🎯 CRF - Discriminative"]
        C1["Models P(tags | words)"]
        C2["Focuses on the task"]
        C3["Rich features"]
    end
    HMM ---|"vs"| CRF
    style HMM fill:#ffb74d,color:#000
    style CRF fill:#81c784,color:#000
\`\`\`

- HMM tries to model the whole world.
- CRF only focuses on: *"Given this text, what are the tags?"*

That's more efficient!

---

## 🏆 The Big Win

You can add **LOTS of features!**

\`\`\`mermaid
flowchart LR
    subgraph Features["🔧 CRF Features"]
        F1["word.lower()"]
        F2["word.isupper()"]
        F3["word[-3:] suffix"]
        F4["prev_word"]
        F5["next_word"]
        F6["word_shape"]
    end
    subgraph Example["📝 'Microsoft'"]
        E1["microsoft"]
        E2["False"]
        E3["oft"]
        E4["from"]
        E5["announced"]
        E6["Xxxxx"]
    end
    F1 --> E1
    F2 --> E2
    F3 --> E3
    F4 --> E4
    F5 --> E5
    F6 --> E6
    style Features fill:#ba68c8,color:#000
    style Example fill:#4fc3f7,color:#000
\`\`\`

- Is the word capitalized?
- Does it end in "-tion"?
- What's the word before it?

**CRF uses all of this!**

---

## 🎯 When to Use CRF?

- When you have **small to medium data**.
- When you want a **solid non-neural baseline**.
- When **interpretability** matters!

---

### ✅ Pros

The good stuff:
- Captures **label dependencies**.
- "B-PERSON should be followed by I-PERSON, not B-ORG."
- Very **stable and well-understood**.

### ❌ Cons

The problems:
- You have to **engineer features manually**.
- Takes time and expertise!
- Also... **limited context**. Can't see the whole document.

---

CRF is **still used today!**
Often combined with neural networks.
We'll see that next!`
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
          notes: `# 6️⃣ BiLSTM + CRF

**Now we're entering the neural network era!**

Approach six: BiLSTM plus CRF.

This was the **breakthrough architecture**.
It dominated NER from around 2015 to 2018!

---

## 🧠 What is BiLSTM?

\`\`\`mermaid
flowchart TB
    subgraph Input["📝 Input Sentence"]
        W1["Tim"] --- W2["Cook"] --- W3["works"] --- W4["at"] --- W5["Apple"]
    end
    subgraph BiLSTM["🧠 BiLSTM = Bidirectional LSTM"]
        direction LR
        subgraph Forward["→ Forward"]
            F1[" "] --> F2[" "] --> F3[" "] --> F4[" "] --> F5[" "]
        end
        subgraph Backward["← Backward"]
            B5[" "] --> B4[" "] --> B3[" "] --> B2[" "] --> B1[" "]
        end
    end
    Input --> BiLSTM
    style Forward fill:#4fc3f7,color:#000
    style Backward fill:#f06292,color:#000
\`\`\`

Let me break that down.

**LSTM** is a neural network that remembers sequences.
**"Bi"** means bidirectional. It reads left-to-right AND right-to-left!

So it knows what comes **BEFORE** and **AFTER** each word.

---

## 🤝 Why Add CRF on Top?

BiLSTM predicts each word independently.
CRF makes sure the sequence **makes sense**.

\`\`\`mermaid
flowchart LR
    subgraph BiLSTM["BiLSTM Output"]
        P1["O"]
        P2["B-PER"]
        P3["I-ORG ❌"]
    end
    subgraph CRF["CRF Correction"]
        C1["O"]
        C2["B-PER"]
        C3["I-PER ✅"]
    end
    BiLSTM --> |"CRF fixes"| CRF
    style P3 fill:#ef5350,color:#fff
    style C3 fill:#81c784,color:#000
\`\`\`

CRF says: *"Wait, I-ORG can't follow B-PER. Let me fix that."*

**Best of both worlds!**

---

## 🎯 When to Use This?

- General-purpose NER with **moderate data**.
- When you don't have huge compute budgets.
- **Multilingual scenarios!**

---

### ✅ Pros

- Learns features **automatically!** No manual engineering.
- Good accuracy with reasonable compute.

### ❌ Cons

- Needs **GPU for training**.
- Needs more data than CRF alone.

---

This was the **gold standard**... until transformers arrived!`
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
          notes: `# 7️⃣ CNN + BiLSTM NER

**Approach seven: CNN plus BiLSTM.**
This adds one more ingredient to the recipe!

---

## 🔤 What's a CNN?

\`\`\`mermaid
flowchart TB
    subgraph CharCNN["🔤 Character CNN"]
        C["M-i-c-r-o-s-o-f-t"]
        C --> Conv["Convolution Filters"]
        Conv --> P["Patterns: '-soft', 'Micro-'"]
    end
    subgraph WordEmb["📝 Word Embedding"]
        W["Microsoft"]
    end
    subgraph Combined["🧠 BiLSTM"]
        B["Combined Features"]
    end
    CharCNN --> Combined
    WordEmb --> Combined
    style CharCNN fill:#f06292,color:#000
    style WordEmb fill:#4fc3f7,color:#000
    style Combined fill:#ba68c8,color:#000
\`\`\`

CNNs are great at finding patterns in small windows.
Here... we use them on **CHARACTERS**.

The CNN looks at character patterns.
It learns: *"Words ending in -soft might be companies."*

---

## 💡 Why Does This Help?

**Out-of-vocabulary words!**

\`\`\`mermaid
flowchart LR
    subgraph Typo["❓ Unknown Word"]
        T["Microsift"]
    end
    subgraph CharCNN["🔤 Char CNN"]
        P["Sees: 'Micro-' + '-sift'\nSimilar to 'Microsoft'!"]
    end
    subgraph Result["✅ Still Works!"]
        R["→ ORG"]
    end
    Typo --> CharCNN --> Result
    style Typo fill:#ffb74d,color:#000
    style Result fill:#81c784,color:#000
\`\`\`

BiLSTM alone might not know "Microsift."
But the character CNN sees it looks like "Microsoft."

**Handles typos! Handles rare words! Handles morphology!**

---

## 🎯 When to Use This?

- **Noisy text.** Social media. User-generated content.
- **Languages with rich morphology.** German. Turkish. Finnish.
- **Domains with lots of new/rare words.**

---

### ✅ Pros

- **Robust** to typos and variants.
- Captures **spelling patterns**.
- Strong non-transformer baseline!

### ❌ Cons

- More **complex to tune**.
- **Slower** than plain BiLSTM.
- Still not as good as transformers.

---

This was the **peak of pre-transformer NER!**`
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
          notes: `# 8️⃣ spaCy Statistical NER

**Approach eight: spaCy!**
This is the **practical engineer's choice**.

---

## 🚀 What is spaCy?

\`\`\`mermaid
flowchart LR
    subgraph spaCy["🚀 spaCy Pipeline"]
        direction TB
        T["Tokenizer"] --> P["POS Tagger"] --> N["NER"] --> D["Dep Parser"]
    end
    I["Input Text"] --> spaCy --> O["Doc Object"]
    style spaCy fill:#4fc3f7,color:#000
\`\`\`

It's a Python library for NLP.
**Fast. Production-ready. Well-documented.**

---

### 🎬 Demo

Let me show you how easy it is.

\`\`\`mermaid
flowchart LR
    subgraph Code["🐍 Python Code"]
        L1["nlp = spacy.load('en_core_web_sm')"]
        L2["doc = nlp('Apple is in California')"]
        L3["for ent in doc.ents: print(...)"]
    end
    subgraph Output["📤 Result"]
        O1["Apple → ORG 🏢"]
        O2["California → GPE 📍"]
    end
    Code --> Output
    style O1 fill:#4fc3f7,color:#000
    style O2 fill:#81c784,color:#000
\`\`\`

**Three lines of code!**
You get: Apple → ORG, California → GPE

Done!

---

## 🔧 Under the Hood

spaCy uses neural networks.
- Transition-based parsing with CNNs.
- Or you can use **transformer backends!**

---

## 🎯 When to Use spaCy?

- **Rapid prototyping.** Quick deployment.
- When you need a working pipeline **NOW**.
- **Production systems** that need speed!

---

### ✅ Pros

- **Incredibly fast** inference.
- Easy to customize and extend.
- **Great documentation** and community!

### ❌ Cons

- Accuracy depends on **domain fit**.
- Custom entities need training data.
- Black box for pretrained models.

---

If you're building a product... **start with spaCy!**`
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
          notes: `# 9️⃣ BERT Fine-Tuned for NER

**Now we enter the transformer era!**

Approach nine: BERT fine-tuned for NER.

**This changed everything.**
BERT came out in 2018 and broke all the records!

---

## 🤖 What is BERT?

\`\`\`mermaid
flowchart TB
    subgraph BERT["🤖 BERT = Bidirectional Encoder Representations from Transformers"]
        direction LR
        PT["Pre-trained on:\nWikipedia + Books"] --> E["Language\nUnderstanding"]
    end
    style BERT fill:#f06292,color:#000
\`\`\`

It's a neural network pretrained on **MASSIVE text**.
Wikipedia. Books. The entire internet!
It learns the patterns of language.

---

## 🏗️ How Do We Use It for NER?

\`\`\`mermaid
flowchart LR
    subgraph Architecture["🏗️ BERT for NER"]
        I["Input Tokens"] --> B["BERT\nEncoder"] --> H["Classification\nHead"] --> O["B-PER, I-PER,\nB-ORG, O..."]
    end
    style B fill:#ba68c8,color:#000
    style H fill:#4fc3f7,color:#000
\`\`\`

We add a simple layer on top.
For each word: predict PERSON, ORG, LOC, or NONE.
Then we **"fine-tune"** on our NER data!

---

## ✨ Why Is This So Powerful?

BERT understands **CONTEXT deeply**.

\`\`\`mermaid
flowchart TB
    A["Apple"] --> Q{"Context?"}
    Q --> |"I ate an Apple"| F["🍎 Fruit"]
    Q --> |"I bought Apple stock"| C["🏢 Company"]
    style F fill:#81c784,color:#000
    style C fill:#4fc3f7,color:#000
\`\`\`

BERT sees the whole sentence.
- "I ate an Apple" → fruit.
- "I bought Apple stock" → company.

**Magic!**

---

## 🎯 When to Use BERT?

- When you need **high accuracy**.
- When you have **5K-50K labeled examples**.
- Domain-specific BERT exists too! BioBERT. FinBERT. LegalBERT.

---

### ✅ Pros

- **State-of-the-art** accuracy.
- Strong **context understanding**.
- **Transfers well** to new domains!

### ❌ Cons

- **Compute-heavy.** Needs GPU.
- **Slower inference** than classical methods.
- Subword alignment can be tricky.

---

This is the **current gold standard!**`
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
          notes: `# 🔟 RoBERTa / DistilBERT NER Models

**Approach ten: RoBERTa and DistilBERT.**
These are BERT's **optimized cousins!**

---

## 🏆 RoBERTa

\`\`\`mermaid
flowchart LR
    subgraph RoBERTa["🏆 RoBERTa = Robustly Optimized BERT"]
        R1["Same architecture"]
        R2["More training data"]
        R3["Better hyperparameters"]
        R4["→ Higher accuracy!"]
    end
    style RoBERTa fill:#ba68c8,color:#000
\`\`\`

Same architecture as BERT.
But trained **BETTER**. More data. Longer. Smarter tricks.

Result? **Even higher accuracy!**

---

## ⚡ DistilBERT

\`\`\`mermaid
flowchart TB
    subgraph Distil["⚡ DistilBERT = Distilled BERT"]
        D1["40% fewer parameters"]
        D2["60% faster"]
        D3["97% of BERT accuracy"]
    end
    subgraph KD["🎓 Knowledge Distillation"]
        Big["Big BERT\n(Teacher)"] --> |"teaches"| Small["DistilBERT\n(Student)"]
    end
    style Distil fill:#4fc3f7,color:#000
    style Big fill:#f06292,color:#000
    style Small fill:#81c784,color:#000
\`\`\`

This one is **SMALLER**.
- 40% fewer parameters.
- 60% faster!
- But keeps **97% of BERT's accuracy**.

**How?** Knowledge distillation.
The big model "teaches" the small model.
The small model learns to mimic the big one!

---

## 🎯 When to Use Which?

\`\`\`mermaid
flowchart LR
    Q{"What do you need?"}
    Q --> |"Best accuracy"| R["🏆 RoBERTa"]
    Q --> |"Speed/Edge"| D["⚡ DistilBERT"]
    style R fill:#ba68c8,color:#000
    style D fill:#4fc3f7,color:#000
\`\`\`

- **RoBERTa** for research. Maximum quality.
- **DistilBERT** for production. Real-time systems. Mobile. Edge.

---

### ✅ Pros

- **RoBERTa:** best accuracy.
- **DistilBERT:** great speed-accuracy tradeoff.
- Both well-supported in **HuggingFace!**

### ❌ Cons

- Still need **GPUs for training**.
- DistilBERT slightly less accurate.
- May need **quantization** for edge.

---

These are your **production transformers!**`
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
          notes: `# 11 Large Language Models — Zero-Shot NER

And finally... **the newest approach!**

Approach eleven: *Large Language Models*.

**Zero-shot NER!**

---

## What is Zero-Shot?

\`\`\`mermaid
flowchart LR
    subgraph ZeroShot["🎯 Zero-Shot = No Training!"]
        N["No labeled data"]
        N --> J["Just prompting"]
    end
    style ZeroShot fill:#81c784,color:#000
\`\`\`

You don't train anything.

You just **ASK** the model to do NER!

---

## How It Works

\`\`\`mermaid
flowchart TB
    subgraph Prompt["💬 Your Prompt"]
        P["Extract person and org names from:\n'Tim Cook announced the new iPhone at Apple Park'"]
    end
    subgraph LLM["🤖 LLM (GPT-4, etc.)"]
        L["Processing..."]
    end
    subgraph Response["📤 Output"]
        R1["Person: Tim Cook"]
        R2["Org: Apple"]
    end
    Prompt --> LLM --> Response
    style Prompt fill:#4fc3f7,color:#000
    style LLM fill:#ba68c8,color:#000
    style Response fill:#81c784,color:#000
\`\`\`

You give it a prompt like this.

The LLM reads it and responds with the entities.

*Just like chatting with ChatGPT!*

---

## The Power of LLMs

This is **incredibly powerful**:
- **New entity types?** Just describe them in the prompt
- **New language?** Many LLMs are multilingual
- **Complex instructions?** LLMs can follow them!

---

> 🎤 **Sounds perfect, right?**

---

But... there are problems.

### ❌ Cons
- **Hallucinations** — Sometimes it makes things up
- **Expensive** — API calls cost money. High latency
- **Privacy concerns** — You're sending data to an API
- **Output parsing** — The format might vary

---

## When to Use LLMs for NER?

- Rapid prototyping — testing ideas fast
- When you have **NO training data**
- Complex, changing schemas

---

### ✅ Pros
- No labeled data needed!
- Flexible — can handle new entity types easily
- Can reason and follow complex instructions

---

*This is the future... but use with caution!*`
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
            <div style={{ textAlign: 'left' }}>
              <p style={{ fontSize: '1.1em', marginBottom: '30px' }}>
                A complete overview of NER approach selection, data requirements, performance characteristics, and deployment considerations
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div style={{ padding: '20px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <SvgIcon iconName="duo-map" sizeName="2x" darkModeInvert={true} />
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Quick Selection Guide</div>
                    <div style={{ fontSize: '0.85em', opacity: 0.8 }}>Match approach to your needs</div>
                  </div>
                </div>
                <div style={{ padding: '20px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Data Needs Spectrum</div>
                    <div style={{ fontSize: '0.85em', opacity: 0.8 }}>Training data requirements</div>
                  </div>
                </div>
                <div style={{ padding: '20px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <SvgIcon iconName="duo-clock" sizeName="2x" darkModeInvert={true} />
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Compute & Latency</div>
                    <div style={{ fontSize: '0.85em', opacity: 0.8 }}>Inference speed comparison</div>
                  </div>
                </div>
                <div style={{ padding: '20px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <SvgIcon iconName="duo-rocket" sizeName="2x" darkModeInvert={true} />
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Maintenance & Deployment</div>
                    <div style={{ fontSize: '0.85em', opacity: 0.8 }}>Ongoing operational needs</div>
                  </div>
                </div>
                <div style={{ padding: '20px', background: 'rgba(100, 181, 246, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px', gridColumn: 'span 2' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                  <div>
                    <div style={{ fontWeight: 'bold', fontSize: '1.1em' }}>Deployment Tips</div>
                    <div style={{ fontSize: '0.85em', opacity: 0.8 }}>Best practices for production</div>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '0.85em', marginTop: '30px', textAlign: 'center', opacity: 0.7 }}>
                Press ↓ to explore each topic in detail
              </p>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: `# Summary Overview

Alright! We've covered **all eleven approaches**.

Now let's put it all together!

---

## This Summary Section Covers 5 Key Areas:

### 1. Quick Selection Guide
How to pick the right approach for your situation

### 2. Data Needs Spectrum
How much training data each approach requires

### 3. Compute & Latency
How fast each approach runs in production

### 4. Maintenance & Deployment
What ongoing work each approach needs

### 5. Deployment Tips
Best practices for putting NER into production

---

**Let's dive into each one!**

*Press down arrow to explore.*`
        },
        {
          id: 15,
          title: 'Quick Selection Guide',
              content: (
                <div style={{ textAlign: 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                    <SvgIcon iconName="duo-map" sizeName="3x" darkModeInvert={true} />
                    <div>
                      <h2 style={{ margin: 0, color: '#4fc3f7' }}>Quick Selection Guide</h2>
                      <p style={{ margin: 0, opacity: 0.8 }}>Choose the right NER approach for your use case</p>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '0.85em' }}>
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
                  <div style={{ marginTop: '25px', padding: '15px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', fontSize: '0.9em' }}>
                    <strong>💡 Pro Tip:</strong> Start simple! Try rules or dictionaries first, then move to ML if needed.
                  </div>
                </div>
              ),
              backgroundColor: '#16213e',
              notes: `# Quick Selection Guide

Here's your decision guide!

Let's go through each scenario.

---

## Scenario-Based Selection

### 🚫 No training data and strict formats?
→ Use **Rule-Based** or **Gazetteer** approaches

*Perfect for extracting IDs, dates, emails*

---

### 📊 Small data and stable entity types?
→ **CRF** or **spaCy** work great

*Efficient and reliable*

---

### 📈 Moderate data and need accuracy?
→ **BiLSTM+CRF** or **CNN+BiLSTM**

*These deep learning models shine here*

---

### 🏆 Need the absolute best accuracy?
→ Go with **BERT** or **RoBERTa**

*State-of-the-art transformers*

---

### ⚡ Deploying to edge or need low latency?
→ **DistilBERT** or optimized **spaCy**

*Fast enough for real-time*

---

### 🆕 New entity types with no data?
→ **LLM Zero-shot** or **Few-shot**!

*Just describe what you want*

---

> 💡 **Remember... start simple!**
> 
> You can always upgrade later.`
        },
        {
          id: 16,
          title: 'Data Needs Spectrum',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <SvgIcon iconName="duo-graduation-cap" sizeName="3x" darkModeInvert={true} />
                <div>
                  <h2 style={{ margin: 0, color: '#81c784' }}>Data Needs Spectrum</h2>
                  <p style={{ margin: 0, opacity: 0.8 }}>How much training data does each approach need?</p>
                </div>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ width: '200px', fontWeight: 'bold', fontSize: '1.05em' }}>Rule-Based / Gazetteer</div>
                    <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg, #4fc3f7 1%, rgba(79, 195, 247, 0.1) 1%)', borderRadius: '6px', display: 'flex', alignItems: 'center', paddingLeft: '12px', border: '1px solid rgba(79, 195, 247, 0.3)' }}>
                      <span style={{ color: '#4fc3f7', fontWeight: 'bold', fontSize: '1.05em' }}>0 labeled examples</span>
                    </div>
                  </div>
                  <div style={{ paddingLeft: '212px', fontSize: '0.9em', opacity: 0.7, marginBottom: '3px' }}>
                    ✓ Just write patterns and dictionaries by hand
                  </div>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ width: '200px', fontWeight: 'bold', fontSize: '1.05em' }}>CRF / HMM</div>
                    <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg, #81c784 20%, rgba(129, 199, 132, 0.1) 20%)', borderRadius: '6px', display: 'flex', alignItems: 'center', paddingLeft: '12px', border: '1px solid rgba(129, 199, 132, 0.3)' }}>
                      <span style={{ color: '#81c784', fontWeight: 'bold', fontSize: '1.05em' }}>1,000 - 5,000</span>
                    </div>
                  </div>
                  <div style={{ paddingLeft: '212px', fontSize: '0.9em', opacity: 0.7, marginBottom: '3px' }}>
                    ✓ Good for simple, stable entity schemas
                  </div>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ width: '200px', fontWeight: 'bold', fontSize: '1.05em' }}>Transformers (BERT)</div>
                    <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg, #ba68c8 35%, rgba(186, 104, 200, 0.1) 35%)', borderRadius: '6px', display: 'flex', alignItems: 'center', paddingLeft: '12px', border: '1px solid rgba(186, 104, 200, 0.3)' }}>
                      <span style={{ color: '#ba68c8', fontWeight: 'bold', fontSize: '1.05em' }}>3,000 - 30,000</span>
                    </div>
                  </div>
                  <div style={{ paddingLeft: '212px', fontSize: '0.9em', opacity: 0.7, marginBottom: '3px' }}>
                    ✓ Pre-trained, so needs less data than BiLSTM
                  </div>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ width: '200px', fontWeight: 'bold', fontSize: '1.05em' }}>BiLSTM models</div>
                    <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg, #ffb74d 60%, rgba(255, 183, 77, 0.1) 60%)', borderRadius: '6px', display: 'flex', alignItems: 'center', paddingLeft: '12px', border: '1px solid rgba(255, 183, 77, 0.3)' }}>
                      <span style={{ color: '#ffb74d', fontWeight: 'bold', fontSize: '1.05em' }}>5,000 - 50,000</span>
                    </div>
                  </div>
                  <div style={{ paddingLeft: '212px', fontSize: '0.9em', opacity: 0.7, marginBottom: '3px' }}>
                    ✓ Trained from scratch, needs more examples
                  </div>
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ width: '200px', fontWeight: 'bold', fontSize: '1.05em' }}>Zero-shot LLMs</div>
                    <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg, #f06292 2%, rgba(240, 98, 146, 0.1) 2%)', borderRadius: '6px', display: 'flex', alignItems: 'center', paddingLeft: '12px', border: '1px solid rgba(240, 98, 146, 0.3)' }}>
                      <span style={{ color: '#f06292', fontWeight: 'bold', fontSize: '1.05em' }}>0 - 10 in prompt</span>
                    </div>
                  </div>
                  <div style={{ paddingLeft: '212px', fontSize: '0.9em', opacity: 0.7, marginBottom: '3px' }}>
                    ✓ Few-shot examples given directly in the prompt
                  </div>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginTop: '25px' }}>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '8px', borderLeft: '3px solid #81c784' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '5px', fontSize: '0.9em' }}>✅ Quality {'>'} Quantity</div>
                  <div style={{ fontSize: '0.85em', lineHeight: '1.4' }}>Clean, consistent labels beat larger noisy datasets</div>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '8px', borderLeft: '3px solid #ffb74d' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '5px', fontSize: '0.9em' }}>🔄 Active Learning</div>
                  <div style={{ fontSize: '0.85em', lineHeight: '1.4' }}>Start small, label strategically, iterate</div>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '8px', borderLeft: '3px solid #ba68c8' }}>
                  <div style={{ fontWeight: 'bold', marginBottom: '5px', fontSize: '0.9em' }}>📊 Balance Mix</div>
                  <div style={{ fontSize: '0.85em', lineHeight: '1.4' }}>Diverse examples across all entity types</div>
                </div>
              </div>
            </div>
          ),
              backgroundColor: '#16213e',
              notes: `# Data Needs Spectrum

Let's talk about data requirements!

*This is often the biggest factor in choosing an approach.*

---

## Training Data by Approach

### Rule-Based and Gazetteer
**Zero** training examples needed!

You just write rules or build dictionaries.

---

### CRF and HMM models
Need about **1,000 to 5,000** labeled examples

*That's manageable for most teams*

---

### Transformers (BERT)
Typically **3,000 to 30,000** examples

But they're pre-trained, so less than you'd think!

---

### BiLSTM models
These are hungry! **5,000 to 50,000** examples

*No pre-training to help here*

---

### Zero-shot LLMs
Amazing! Just **0 to 10** examples in the prompt

*The model already knows language*

---

## Two Important Tips

### ✅ Quality beats quantity
Clean labels matter more than volume

### 🔄 Use active learning!
Start small, label what the model struggles with

*Iterate and improve*`
            },
            {
          id: 17,
              title: 'Compute & Latency',
              content: (
                <div style={{ textAlign: 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                    <SvgIcon iconName="duo-clock" sizeName="3x" darkModeInvert={true} />
                    <div>
                      <h2 style={{ margin: 0, color: '#ffb74d' }}>Compute & Latency</h2>
                      <p style={{ margin: 0, opacity: 0.8 }}>Inference time comparison (100 tokens)</p>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.85em' }}>
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
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <td style={{ padding: '10px' }}>Rule-Based / Gazetteer</td>
                          <td style={{ padding: '10px', color: '#4fc3f7', fontWeight: 'bold' }}>&lt;1ms ⚡</td>
                          <td style={{ padding: '10px' }}>No</td>
                          <td style={{ padding: '10px' }}>~10MB</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <td style={{ padding: '10px' }}>CRF / HMM</td>
                          <td style={{ padding: '10px', color: '#81c784', fontWeight: 'bold' }}>5-10ms</td>
                          <td style={{ padding: '10px' }}>No</td>
                          <td style={{ padding: '10px' }}>~50MB</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <td style={{ padding: '10px' }}>BiLSTM + CRF</td>
                          <td style={{ padding: '10px', color: '#ffb74d', fontWeight: 'bold' }}>20-50ms</td>
                          <td style={{ padding: '10px' }}>Helpful</td>
                          <td style={{ padding: '10px' }}>~200MB</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <td style={{ padding: '10px' }}>DistilBERT</td>
                          <td style={{ padding: '10px', color: '#ba68c8', fontWeight: 'bold' }}>20-100ms</td>
                          <td style={{ padding: '10px' }}>Recommended</td>
                          <td style={{ padding: '10px' }}>~250MB</td>
                        </tr>
                        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <td style={{ padding: '10px' }}>BERT / RoBERTa</td>
                          <td style={{ padding: '10px', color: '#f06292', fontWeight: 'bold' }}>50-200ms</td>
                          <td style={{ padding: '10px' }}>Required</td>
                          <td style={{ padding: '10px' }}>~450MB</td>
                        </tr>
                        <tr>
                          <td style={{ padding: '10px' }}>LLMs (GPT-4, etc.)</td>
                          <td style={{ padding: '10px', color: '#ef5350', fontWeight: 'bold' }}>500ms - 5s+ 🐢</td>
                          <td style={{ padding: '10px' }}>API / Large GPU</td>
                          <td style={{ padding: '10px' }}>~GB+ / API</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '8px', fontSize: '0.9em' }}>
                    <strong>⚡ Optimization Tips:</strong> Use ONNX runtime, model quantization, and batching to reduce latency by 2-5x
                  </div>
                </div>
              ),
              backgroundColor: '#16213e',
              notes: `# Compute & Latency

**Speed matters in production!**

Let's compare inference times.

---

## Latency Comparison

### Rule-Based and Gazetteer ⚡
**Under 1 millisecond!** Lightning fast.

No GPU needed. Tiny memory footprint.

---

### CRF and HMM
**5 to 10 milliseconds** — still very fast

CPU only. About 50 megabytes.

---

### BiLSTM+CRF
**20 to 50 milliseconds**

GPU helps but not required.

---

### DistilBERT
**20 to 100 milliseconds**

Good balance of speed and accuracy. GPU recommended.

---

### Full BERT or RoBERTa
**50 to 200 milliseconds**

GPU really needed here.

---

### LLMs (GPT-4) 🐢
**500 milliseconds to 5 seconds!**

Network latency adds up.

---

## ⚡ Optimization Tips

Want to speed things up?

- Use **ONNX runtime**
- **Quantize** your models
- **Batch** your requests

*Can get 2 to 5x faster!*`
            },
            {
          id: 18,
              title: 'Maintenance & Deployment',
              content: (
                <div style={{ textAlign: 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                    <SvgIcon iconName="duo-rocket" sizeName="3x" darkModeInvert={true} />
                    <div>
                      <h2 style={{ margin: 0, color: '#ba68c8' }}>Maintenance & Deployment</h2>
                      <p style={{ margin: 0, opacity: 0.8 }}>Ongoing operational requirements</p>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '0.85em' }}>
                    <div style={{ padding: '20px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '10px' }}>
                      <h4 style={{ color: '#4fc3f7', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>📋</span> Rules & Gazetteers
                      </h4>
                      <ul style={{ lineHeight: '1.8', paddingLeft: '20px', margin: 0 }}>
                        <li>Frequent manual updates</li>
                        <li>Domain expert involvement</li>
                        <li>Version control for patterns</li>
                        <li>Easy to debug & explain</li>
                      </ul>
                    </div>
                    <div style={{ padding: '20px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '10px' }}>
                      <h4 style={{ color: '#81c784', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>📊</span> Classical ML (CRF/HMM)
                      </h4>
                      <ul style={{ lineHeight: '1.8', paddingLeft: '20px', margin: 0 }}>
                        <li>Periodic retraining (monthly/quarterly)</li>
                        <li>Feature pipeline maintenance</li>
                        <li>Model versioning</li>
                        <li>A/B testing frameworks</li>
                      </ul>
                    </div>
                    <div style={{ padding: '20px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '10px' }}>
                      <h4 style={{ color: '#ba68c8', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>🧠</span> Transformers
                      </h4>
                      <ul style={{ lineHeight: '1.8', paddingLeft: '20px', margin: 0 }}>
                        <li>Retrain on domain shifts</li>
                        <li>GPU infrastructure costs</li>
                        <li>Model registry & serving</li>
                        <li>Monitoring for drift</li>
                      </ul>
                    </div>
                    <div style={{ padding: '20px', background: 'rgba(240, 98, 146, 0.2)', borderRadius: '10px' }}>
                      <h4 style={{ color: '#f06292', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <span>🤖</span> LLMs
                      </h4>
                      <ul style={{ lineHeight: '1.8', paddingLeft: '20px', margin: 0 }}>
                        <li>Prompt versioning & testing</li>
                        <li>Output parsing & validation</li>
                        <li>Rate limiting & cost control</li>
                        <li>Guardrails for edge cases</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ),
              backgroundColor: '#16213e',
              notes: `# Maintenance & Deployment

**Deployment is just the beginning!**

Each approach has different maintenance needs.

---

## 📋 Rules and Gazetteers

- Need **frequent manual updates**
- When new entities appear, you add them
- ✅ Good news: *easy to debug and explain!*

---

## 📊 Classical ML (CRF)

- Periodic retraining — monthly or quarterly
- Maintain your **feature pipelines**
- Set up proper **model versioning**

---

## 🧠 Transformers

- Retrain when **domain shifts**
- Budget for **GPU infrastructure**
- Set up model registry and serving
- **Monitor for data drift!**

---

## 🤖 LLMs

- Version control your **prompts!**
- Build robust **output parsing**
- Watch your **API costs**
- Add **guardrails** for weird edge cases

---

## Bottom Line

> Simpler models = simpler maintenance
> 
> *But sometimes complexity is worth it!*`
            },
            {
          id: 19,
              title: 'Deployment Tips',
              content: (
                <div style={{ textAlign: 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="3x" darkModeInvert={true} />
                    <div>
                      <h2 style={{ margin: 0, color: '#64b5f6' }}>Deployment Tips</h2>
                      <p style={{ margin: 0, opacity: 0.8 }}>Best practices for production NER</p>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '0.85em' }}>
                    <div style={{ padding: '18px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontSize: '1.5em' }}>🔗</span>
                      <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Combine Methods</div>
                        <div style={{ opacity: 0.9 }}>Rules + ML hybrid outperforms either alone. Use rules for known patterns, ML for fuzzy matching.</div>
                      </div>
                    </div>
                    <div style={{ padding: '18px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontSize: '1.5em' }}>🔄</span>
                      <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Add Entity Linking</div>
                        <div style={{ opacity: 0.9 }}>Normalize entities to canonical forms. Link to knowledge bases (Wikidata, internal DBs).</div>
                      </div>
                    </div>
                    <div style={{ padding: '18px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontSize: '1.5em' }}>📈</span>
                      <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Monitor for Drift</div>
                        <div style={{ opacity: 0.9 }}>Text evolves! Track prediction confidence, flag low-confidence outputs for review.</div>
                      </div>
                    </div>
                    <div style={{ padding: '18px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontSize: '1.5em' }}>🔒</span>
                      <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Privacy Compliance</div>
                        <div style={{ opacity: 0.9 }}>PII detection needs special handling. Consider on-premise for sensitive data.</div>
                      </div>
                    </div>
                    <div style={{ padding: '18px', background: 'rgba(240, 98, 146, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontSize: '1.5em' }}>⚡</span>
                      <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Quantize for Edge</div>
                        <div style={{ opacity: 0.9 }}>INT8 quantization cuts size 4x with minimal accuracy loss. Essential for mobile/edge.</div>
                      </div>
                    </div>
                    <div style={{ padding: '18px', background: 'rgba(100, 181, 246, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <span style={{ fontSize: '1.5em' }}>🧪</span>
                      <div>
                        <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Test Extensively</div>
                        <div style={{ opacity: 0.9 }}>Build diverse test sets. Include edge cases, adversarial examples, and domain-specific text.</div>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginTop: '25px', padding: '15px', background: 'rgba(100, 181, 246, 0.3)', borderRadius: '8px', textAlign: 'center', fontSize: '1em' }}>
                    <strong>🎯 Remember:</strong> The best NER system is the one that works reliably in YOUR production environment!
                  </div>
                </div>
              ),
              backgroundColor: '#16213e',
              notes: `# Deployment Tips

**Final tips for production!**

*These come from real-world experience.*

---

## 🔗 Tip 1: Combine Methods!

**Hybrid approaches win.**

- Rules catch known patterns *perfectly*
- ML handles the fuzzy stuff

*Together? Better than either alone.*

---

## 🔄 Tip 2: Add Entity Linking!

Don't just find entities... **normalize them!**

"NYC" and "New York City" should map to same ID.

*Link to knowledge bases when possible.*

---

## 📈 Tip 3: Monitor for Drift!

Language changes. Your model doesn't.

- Track **prediction confidence**
- Flag uncertain outputs for **human review**

---

## 🔒 Tip 4: Privacy Compliance!

**PII detection is serious business.**

GDPR, HIPAA, CCPA...

*Consider on-premise for sensitive data.*

---

## ⚡ Tip 5: Quantize for Edge!

**INT8 quantization is magic.**

4x smaller, almost same accuracy.

*Essential for mobile and edge devices.*

---

## 🧪 Tip 6: Test Extensively!

- Build **diverse test sets**
- Include weird **edge cases**
- Test **adversarial examples**

---

# 🎉 And that's a wrap!

You now know everything about NER approaches.

**Go build something amazing!**

*Any questions?*`
        }
      ]
    }
  ]
};
