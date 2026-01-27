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
Hey there! Thanks for joining me today! I'm super excited to dive into this with you. We're gonna explore **eleven different ways** to build NER systems, and by the end, you'll know exactly which approach to pick for your project.

#### 🔍 Quick Refresher: What is NER?
So before we jump in, let me make sure we're all on the same page. **NER** stands for **Named Entity Recognition**. It's about teaching computers to find important things in text - things like names, places, companies, and dates.

\`\`\`mermaid
flowchart TB
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

Let me show you with an example. Take this sentence: "Apple opened a store in Tokyo." An NER system would identify that **"Apple"** is a company - an organization - and **"Tokyo"** is a location. Pretty cool, right? The system finds and labels these automatically!

#### 🎯 What We'll Cover Today
Now here's the thing - there's not just ONE way to do NER. There are actually **MANY approaches**! We've got old-school rules, dictionaries, machine learning, deep learning, and even ChatGPT-style methods. Today I'll walk you through **eleven of them**, going from the simplest to the most advanced. By the end of this session, you'll know exactly which one to pick for YOUR project. So... **let's dive in!**`
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
Here's our roadmap for today. We've got **eleven approaches** to cover, plus a comprehensive summary at the end. Let me group them for you so it's easier to follow.

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

#### 📚 The Groups Explained
The **first two approaches** are simple - no machine learning needed at all. Just rules and dictionaries. Then the **next three** use classical machine learning techniques - these were really popular before deep learning came along. After that, we have **neural networks** - these learn patterns automatically from data. Then come the **transformers** - these are the current state-of-the-art and incredibly powerful! And finally, we have **Large Language Models** - like ChatGPT!

We'll go through each one in detail. I'll explain exactly **when to use it** and more importantly, **when NOT to use it**. Ready? Let's start with the simplest approach!`
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
                      <li>Transparent and Fast</li>
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
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: `# 1️⃣ Rule-Based Pattern Matching
Alright, **approach number one!** Rule-Based Pattern Matching. This is the **simplest method** you'll ever encounter. No AI, no training, just pure rules that you write by hand!
#### 📋 What Kind of Rules?
\`\`\`mermaid
flowchart TB
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

So what kind of rules are we talking about? Simple patterns like these, or **regular expressions** if you need more power. You basically write something like: "Find anything that looks like an email address." And the computer follows your rule exactly! That regex pattern I showed says: capital letter, lowercase letters, space, capital again, lowercase again. That matches things like "Tim Cook" or "New York"!

#### 🎯 When to Use This?
This approach shines when you have **very structured data**. Think about dates in specific formats, phone numbers, email addresses, product IDs, or anything with a predictable pattern that doesn't change much.

#### ✅ Pros
Let's talk about the good stuff first. It's completely **transparent** - you know exactly what it's doing. It's **super fast** because there's no model inference. And you need **zero training data**!

#### ❌ Cons
But here's where it gets tricky:
\`\`\`mermaid
flowchart TB
    P["Pattern: [A-Z][a-z]+"] --> |✅| W1["Tim Cook"]
    P --> |❌| W2["TIM COOK"]
    P --> |❌| W3["tim cook"]
    style W1 fill:#81c784,color:#000
    style W2 fill:#ef5350,color:#000
    style W3 fill:#ef5350,color:#000
\`\`\`

It **breaks easily**! "Tim Cook" works, but "TIM COOK" in all caps? Fails. "tim cook" in lowercase? Also fails. You have to think of **EVERY possible variation**, and that's high maintenance. Think of it like a **cooking recipe** - very precise, but if you miss one ingredient or step, the whole thing falls apart!`
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
Now that we've seen rules, let's look at something similar but different. **Approach two: Dictionary Lookup**, also called "Gazetteer" lookup. What's a gazetteer, you ask? It's just a fancy word for **"a list of known things."**

#### 💡 The Idea
\`\`\`mermaid
flowchart TB
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

Here's how it works. You create a list of all cities in the world. When the computer sees "Tokyo" in some text, it checks: "Is Tokyo in my city list? Yes! So let's label it as CITY." Simple, right?

#### 🎯 When to Use This?
This approach is great for **known entities** that don't change much. Think product catalogs, country names, disease names in medical text, or any domain where you can build a comprehensive list.

#### ✅ Pros
Why it's good? You get **very high precision** for things you know about. It's **easy to update** - just add new items to the list! And it works in any language, as long as you have the dictionary for that language.

#### ❌ Cons
But here's the catch. It can't find **NEW things**. If "SpaceX" isn't in your company list, you'll miss it completely. And then there's the **ambiguity problem**:
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

What if "Apple" is in BOTH your fruit dictionary AND your company dictionary? Which one is it? **You need context to decide!** Think of it like a **phone book** - great for finding people you already know, but useless for finding strangers!`
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
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Weak context modeling</li>
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
**Now we're entering machine learning territory!** Approach three: TF-IDF plus a Classifier. This is where things start getting interesting.

#### 📊 What is TF-IDF?
\`\`\`mermaid
flowchart TB
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

Don't worry about the math behind it. The key idea is simple: TF-IDF measures **"How important is this word?"** Common words like "the" or "and" get **low scores** because they appear everywhere. But special words like "Microsoft" get **high scores** because they're distinctive and meaningful.

#### 🔄 How It Works for NER
\`\`\`mermaid
flowchart TB
    W["Words"] --> T["TF-IDF\nVectorizer"] --> N["Numbers"] --> C["Classifier\n(LogReg/SVM)"] --> P["Predictions\nPERSON/ORG/LOC"]
    style T fill:#4fc3f7,color:#000
    style C fill:#ba68c8,color:#000
    style P fill:#81c784,color:#000
\`\`\`

Here's the pipeline: **Step 1** - turn each word into numbers using TF-IDF. **Step 2** - feed those numbers to a classifier like Logistic Regression or SVM. **Step 3** - the classifier predicts: is this a PERSON? ORG? LOCATION? Or nothing special? These are old-school classifiers, but they're fast, simple, and interpretable.

#### 🎯 When to Use This?
Use this as a **quick baseline** to see how hard your problem is. It's also great when you have **limited compute** resources or need something **lightweight** that runs anywhere.

#### ✅ Pros
The good stuff: It's **very fast** to train - we're talking minutes, not hours. You can see which features matter, so it's interpretable. And it **runs on any laptop** without needing a GPU!

#### ❌ Cons
But here's the big problem: each word is predicted **independently**. There's **no context**! The words "New" and "York" are treated separately, so the model doesn't know they form a single entity "New York". Also, you need to **engineer features manually**, which takes time and expertise. This is a good starting point, but modern methods are **much better**!`
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
**Approach four: Hidden Markov Models**, or HMM for short. This is a **classic** - it's taught in every NLP course out there. If you've studied natural language processing, you've definitely encountered this one.

#### 💡 The Big Idea
What makes HMM special is that it thinks about **SEQUENCES**, not just individual words. It considers the whole sentence!
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

The model learns transition probabilities: "What tag is likely to come AFTER this tag?" So if we're in the middle of a person's name, we probably stay in the person name, not suddenly jump to a location.

#### 🌤️ Weather Analogy
\`\`\`mermaid
stateDiagram-v2
    direction LR
    Sunny --> Sunny: 70%
    Sunny --> Rainy: 30%
    Rainy --> Rainy: 60%
    Rainy --> Sunny: 40%
\`\`\`

Here's a simple analogy. If it's sunny today, it's probably sunny tomorrow too - there's momentum in weather patterns. **HMM works the same way for NER tags!** If we just started a person name with B-PERSON, we're likely to continue that person name with I-PERSON, not suddenly switch to something else.

#### 🎯 When to Use HMM?
Honestly, HMM is mostly used for **learning and education** these days. It's a great baseline to understand sequence modeling. It can also work in **very low-resource scenarios** where you have almost no training data.

#### ✅ Pros
The good stuff: It's **fast and efficient** - very quick to train and run. It naturally handles sequences. And it's **probabilistic**, meaning it gives you confidence scores, not just predictions!

#### ❌ Cons
The problems: It makes **strong independence assumptions** that often don't hold in real text. It has limited feature flexibility - you can't just throw in any features you want. And it's typically **outperformed by CRF and neural models**. HMM was state-of-the-art back in the 90s. Now we have better options, but it's still **good to know** for understanding the foundations!`
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
Now that we've seen HMM, let me introduce you to its **smarter cousin**. **Approach five: Conditional Random Fields**, or CRF! This was **THE method** before deep learning took over, and honestly, it's still used today.

#### 🔄 What's Different from HMM?
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

Here's the key difference: HMM tries to model the whole world - how words and tags are generated together. CRF is smarter - it only focuses on what we actually care about: "Given this text, what are the tags?" That's much more efficient!

#### 🏆 The Big Win: Rich Features
\`\`\`mermaid
flowchart TB
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

You can add **LOTS of features**! Is the word capitalized? Does it end in "-tion"? What's the word before it? What's the word after it? What's the shape of the word? **CRF uses all of this information!**

#### 🎯 When to Use CRF?
Use CRF when you have **small to medium-sized datasets**. It's perfect when you want a **solid non-neural baseline** that's well understood. And it's great when **interpretability matters** - you can see exactly which features drive the predictions.

#### ✅ Pros
CRF captures **label dependencies** beautifully. It knows that B-PERSON should be followed by I-PERSON, not suddenly B-ORG. It's **very stable and well-understood** with decades of research behind it.

#### ❌ Cons
The downside? You have to **engineer features manually**, which takes time and domain expertise. It also has **limited context** - it can't see the whole document, just local windows. And compared to modern pretrained transformers, **domain transfer is weaker**. But here's the thing - CRF is **still used today**, often combined with neural networks. We'll see that in the next approach!`
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
                      <li>Leverages pretrained embeddings</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Needs GPU for training</li>
                      <li>Complex hyperparameter tuning</li>
                      <li>OOV handling depends on char/subword modeling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: `# 6️⃣ BiLSTM + CRF
**Now we're entering the neural network era!** Approach six: BiLSTM plus CRF. This was the **breakthrough architecture** that dominated NER from around 2015 to 2018, and it's still a solid choice today.

#### 🧠 What is BiLSTM?
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

Let me break that down for you. **LSTM** stands for Long Short-Term Memory - it's a neural network that can remember sequences. The **"Bi"** means bidirectional, which means it reads the text left-to-right AND right-to-left! So for every word, it knows what comes **BEFORE** it and what comes **AFTER** it. That's powerful context!

#### 🤝 Why Add CRF on Top?
\`\`\`mermaid
flowchart TB
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

Here's the clever part. BiLSTM predicts each word somewhat independently, but sometimes it makes mistakes. The CRF layer on top makes sure the sequence **makes sense**. It says things like: "Wait, I-ORG can't follow B-PER - that's an invalid transition. Let me fix that to I-PER." It's the **best of both worlds**!

#### 🎯 When to Use This?
Use BiLSTM+CRF for general-purpose NER when you have **moderate amounts of data**. It's great when you don't have huge compute budgets but still want good accuracy. And it works really well for **multilingual scenarios**!

#### ✅ Pros
The big win: it **learns features automatically**! No more manual feature engineering. It's context-aware and gives strong accuracy with reasonable compute.

#### ❌ Cons
The downsides: you **need a GPU for training**, which not everyone has access to. It needs more data than CRF alone, and hyperparameter tuning can be tricky. This was the **gold standard** for several years, until transformers arrived and changed everything!`
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
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>More components/hyperparameters</li>
                      <li>Increased training complexity</li>
                      <li>Slower than plain BiLSTM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: `# 7️⃣ CNN + BiLSTM NER
**Approach seven: CNN plus BiLSTM.** This adds one more clever ingredient to the BiLSTM recipe we just saw!

#### 🔤 What's a CNN?
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

CNN stands for Convolutional Neural Network, and they're amazing at finding patterns in small windows. In this architecture, we use CNNs on **CHARACTERS**. The CNN looks at character patterns within words and learns things like: "Words ending in -soft might be company names" or "Words starting with Mc- might be person names."

#### 💡 Why Does This Help?
\`\`\`mermaid
flowchart TB
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

The big win is handling **out-of-vocabulary words**! A BiLSTM alone might not recognize "Microsift" - it's not in any dictionary. But the character CNN sees it looks very similar to "Microsoft"! It **handles typos**, it handles **rare words**, and it handles **morphology** in languages like German where words can be very long and compound.

#### 🎯 When to Use This?
Use CNN+BiLSTM when dealing with **noisy text** like social media or user-generated content. It's also great for **languages with rich morphology** like German or Turkish. And it shines in **domains with lots of new or rare words** that wouldn't be in standard vocabularies.

#### ✅ Pros
It's **robust to typos** and spelling variants. It captures **spelling patterns** automatically. And it was the strongest non-transformer baseline for years!

#### ❌ Cons
On the downside, it's **more complex to tune** with all those hyperparameters. It's **slower** than plain BiLSTM because of the extra CNN layer. And honestly, it's **still not as good as transformers**. This was the **peak of pre-transformer NER** - after this came BERT and changed everything!`
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
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Quality depends on pretrained model/domain fit</li>
                      <li>Custom labels need data</li>
                      <li>Limited transparency into pretrained errors</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `# 8️⃣ spaCy Statistical NER
**Approach eight: spaCy!** This is the **practical engineer's choice** - the library that just works out of the box.

#### 🚀 What is spaCy?
\`\`\`mermaid
flowchart TB
    subgraph spaCy["🚀 spaCy Pipeline"]
        direction TB
        T["Tokenizer"] --> P["POS Tagger"] --> N["NER"] --> D["Dep Parser"]
    end
    I["Input Text"] --> spaCy --> O["Doc Object"]
    style spaCy fill:#4fc3f7,color:#000
\`\`\`

spaCy is a Python library for NLP that's **fast, production-ready, and incredibly well-documented**. It gives you a complete pipeline - tokenization, part-of-speech tagging, NER, dependency parsing - all in one package. It's what you use when you need to ship something that actually works.

#### 🎬 Demo: How Easy Is It?
\`\`\`mermaid
flowchart TB
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

Let me show you how easy this is. Three lines of code - that's it! You load the model, process your text, and you get Apple labeled as ORG and California labeled as GPE. Done! You can start extracting entities in literally 30 seconds.

#### 🔧 Under the Hood
What's actually running? spaCy uses neural networks internally - transition-based parsing with CNNs by default. But here's the cool part: you can also plug in **transformer backends** for even better accuracy when you need it!

#### 🎯 When to Use spaCy?
Use spaCy for **rapid prototyping** when you need something working quickly. It's perfect when you need a working pipeline **RIGHT NOW** with no fuss. And it's great for **production systems** that need speed - spaCy is seriously optimized for performance.

#### ✅ Pros
The inference is **incredibly fast** - it's one of the fastest NLP libraries out there. It's easy to customize and extend with your own components. And the **documentation and community** are outstanding - you'll always find answers.

#### ❌ Cons
The accuracy depends heavily on **domain fit** - if your text is very different from what it was trained on, results may vary. Custom entity types need training data to add. And the pretrained models are somewhat of a black box when things go wrong. If you're building a product... **start with spaCy!** You can always upgrade later.`
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
**Now we enter the transformer era!** Approach nine: BERT fine-tuned for NER. **This changed everything.** BERT came out in 2018 and absolutely broke all the records. It was a paradigm shift in NLP.

#### 🤖 What is BERT?
\`\`\`mermaid
flowchart TB
    subgraph BERT["🤖 BERT = Bidirectional Encoder Representations from Transformers"]
        direction LR
        PT["Pre-trained on:\nWikipedia + Books"] --> E["Language\nUnderstanding"]
    end
    style BERT fill:#f06292,color:#000
\`\`\`

BERT is a neural network that was pretrained on **MASSIVE amounts of text** - we're talking Wikipedia, books, the entire internet! Through this pretraining, it learns the deep patterns and structure of language. It knows how words relate to each other, what contexts they appear in, and so much more.

#### 🏗️ How Do We Use It for NER?
\`\`\`mermaid
flowchart TB
    subgraph Architecture["🏗️ BERT for NER"]
        I["Input Tokens"] --> B["BERT\nEncoder"] --> H["Classification\nHead"] --> O["B-PER, I-PER,\nB-ORG, O..."]
    end
    style B fill:#ba68c8,color:#000
    style H fill:#4fc3f7,color:#000
\`\`\`

Here's the beautiful part - we just add a simple classification layer on top of BERT. For each word, it predicts: is this a PERSON, ORG, LOCATION, or nothing? Then we **"fine-tune"** the whole thing on our NER training data. The pretrained knowledge transfers over!

#### ✨ Why Is This So Powerful?
\`\`\`mermaid
flowchart TB
    A["Apple"] --> Q{"Context?"}
    Q --> |"I ate an Apple"| F["🍎 Fruit"]
    Q --> |"I bought Apple stock"| C["🏢 Company"]
    style F fill:#81c784,color:#000
    style C fill:#4fc3f7,color:#000
\`\`\`

BERT understands **CONTEXT deeply** because it sees the whole sentence at once. When it sees "Apple," it looks at the surrounding words. "I ate an Apple" → clearly fruit. "I bought Apple stock" → clearly the company. **Pure magic!**

#### 🎯 When to Use BERT?
Use BERT when you need the **highest accuracy** possible. It works great with **5K to 50K labeled examples**. And there are domain-specific versions too: BioBERT for biomedical text, FinBERT for financial text, LegalBERT for legal documents - pick the one that matches your domain!

#### ✅ Pros
BERT gives you **state-of-the-art accuracy** - it's the best you can get. It has incredibly strong **context understanding**. And it **transfers well** to new domains, even with limited training data!

#### ❌ Cons
The downsides: it's **compute-heavy** and really needs a GPU to run efficiently. **Inference is slower** than classical methods - we're talking 10-100x slower. And dealing with subword tokenization can be tricky when aligning predictions back to words. But this is the **current gold standard** for NER accuracy!`
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
                      <li>Better suited for production</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>DistilBERT has slightly lower accuracy</li>
                      <li>Still benefits from GPUs</li>
                      <li>Requires careful tuning</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: `# 🔟 RoBERTa / DistilBERT NER Models
**Approach ten: RoBERTa and DistilBERT.** These are BERT's **optimized cousins** - same family, but each tuned for different goals!

#### 🏆 RoBERTa: The Accuracy Champion
\`\`\`mermaid
flowchart TB
    subgraph RoBERTa["🏆 RoBERTa = Robustly Optimized BERT"]
        R1["Same architecture"]
        R2["More training data"]
        R3["Better hyperparameters"]
        R4["→ Higher accuracy!"]
    end
    style RoBERTa fill:#ba68c8,color:#000
\`\`\`

RoBERTa uses the same architecture as BERT, but it was trained **BETTER**. The researchers used more training data, trained for longer, and applied smarter optimization tricks. The result? **Even higher accuracy** than BERT on most benchmarks! If you want the absolute best quality, RoBERTa is your choice.

#### ⚡ DistilBERT: The Speed Demon
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

DistilBERT is a **smaller, faster** version. It has 40% fewer parameters and runs 60% faster than BERT. But here's the amazing part - it still keeps **97% of BERT's accuracy**! How is this possible? Through a technique called **knowledge distillation**. The big BERT model acts as a "teacher" and trains the smaller DistilBERT "student" to mimic its behavior. The student learns to produce similar outputs, even with fewer parameters!

#### 🎯 When to Use Which?
\`\`\`mermaid
flowchart TB
    Q{"What do you need?"}
    Q --> |"Best accuracy"| R["🏆 RoBERTa"]
    Q --> |"Speed/Edge"| D["⚡ DistilBERT"]
    style R fill:#ba68c8,color:#000
    style D fill:#4fc3f7,color:#000
\`\`\`

Simple decision: use **RoBERTa** when you're doing research or when maximum quality is critical - accuracy is king. Use **DistilBERT** for production systems where latency matters, for real-time applications, for mobile apps, or for edge deployment. Both are excellent choices!

#### ✅ Pros
**RoBERTa** gives you the best accuracy in the transformer family. **DistilBERT** offers a fantastic speed-accuracy tradeoff. And both are extremely well-supported in the **HuggingFace ecosystem** - you can get started in minutes!

#### ❌ Cons
You still **need GPUs for training** these models. DistilBERT is slightly less accurate than full BERT, which might matter for some use cases. And for edge deployment, you may need to apply additional **quantization** to get the latency down. These are your **production-ready transformers** - pick the one that fits your constraints!`
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
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Hallucinations/inconsistency</li>
                      <li>Privacy/regulatory concerns</li>
                      <li>Higher cost/latency</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `# 11 Large Language Models — Zero-Shot NER
And finally... **the newest approach!** Approach eleven: Large Language Models with **Zero-shot NER**! This is the cutting edge of what's possible today.

#### 🎯 What is Zero-Shot?
\`\`\`mermaid
flowchart TB
    subgraph ZeroShot["🎯 Zero-Shot = No Training!"]
        N["No labeled data"]
        N --> J["Just prompting"]
    end
    style ZeroShot fill:#81c784,color:#000
\`\`\`

Here's the amazing part - you don't train anything at all. You just **ASK** the model to do NER for you! Zero training examples, zero labeled data, zero fine-tuning. Just a well-written prompt and you're extracting entities.

#### 💬 How It Works
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

You give the LLM a prompt that describes what you want. The LLM reads it, understands your request, and responds with the extracted entities. It's just like chatting with ChatGPT! You describe the entity types you want, maybe give an example or two, and it does the extraction.

#### ✨ The Power of LLMs
This is **incredibly powerful** for several reasons. Need a new entity type you've never seen before? Just describe it in the prompt - no retraining! Working with a new language? Many LLMs are multilingual out of the box. Have complex or nuanced instructions? LLMs can follow them in ways traditional models can't.

> 🎤 Sounds perfect, right? But there are some important tradeoffs...

#### ❌ Cons
First, **hallucinations** - sometimes the model makes things up that aren't there. Second, it's **expensive** - API calls cost money and latency is high. Third, there are **privacy concerns** - you're sending your data to an external API. And fourth, **output parsing** can be tricky because the format might vary between calls.

#### 🎯 When to Use LLMs for NER?
Use LLMs for **rapid prototyping** when you're testing ideas quickly. They're perfect when you have **NO training data** at all. And they shine with **complex, changing schemas** where you need flexibility.

#### ✅ Pros
The upsides: **No labeled data** needed - just start prompting! It's incredibly **flexible** and can handle new entity types easily. And it can **reason and follow complex instructions** that would be impossible with traditional models.

This is the future of NER... but **use with caution!** For production systems with high volume, you'll probably want a dedicated model.`
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
              <p style={{ fontSize: '1em', marginBottom: '30px' }}>
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
                  </div>
                </div>
              </div>
              
            </div>
          ),
          backgroundColor: '#16213e',
          notes: `# Summary Overview
Alright! We've covered **all eleven approaches** - from simple rules all the way to GPT-style LLMs. Now let's put it all together and give you a practical guide for choosing the right approach.

#### 📋 This Summary Section Covers 5 Key Areas:
**First: Quick Selection Guide** - I'll give you a simple decision tree for picking the right approach based on your situation. What constraints do you have? What resources? We'll match those to the best approach.
**Second: Data Needs Spectrum** - A breakdown of how much training data each approach requires. This is often the biggest factor in your decision, so we'll cover it in detail.
**Third: Compute & Latency** - How fast each approach runs in production. If you're building a real-time system, latency matters a lot, so we'll compare all the options.
**Fourth: Maintenance & Deployment** - What ongoing work does each approach need? Models don't just run themselves - there's maintenance involved, and it varies a lot by approach.
**And Fifth: Deployment Tips** - Best practices for putting NER into production based on hard-won experience from real systems.

Let's dive into each one! Press the down arrow to explore the sub-slides.`
        },
        {
          id: 15,
          title: 'Quick Selection Guide',
              content: (
                <div style={{ textAlign: 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                    <SvgIcon iconName="duo-map" sizeName="3x" darkModeInvert={true} />
                    <div>
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
Here's your decision guide - this is the slide you'll want to come back to when choosing an approach. Let's go through each scenario step by step.

#### 🚫 No training data and strict formats?
If you have no labeled data and your entities follow strict formats, go with **Rule-Based** or **Gazetteer** approaches. These are perfect for extracting things like product IDs, email addresses, dates in specific formats, or anything with a predictable pattern. No training required, just pattern matching.

#### 📊 Have small data and stable entity types?
If you have a small labeled dataset, maybe a few thousand examples, and your entity types aren't changing much, then **CRF** or **spaCy** work great. They're efficient, reliable, and you don't need a GPU to run them. Very practical choice for many production systems.

#### 📈 Got moderate data and need good accuracy?
With moderate data - think 10,000 to 50,000 examples - you can train deep learning models like **BiLSTM+CRF** or **CNN+BiLSTM**. These learn features automatically and handle complex patterns well. They really shine in this data range.

#### 🏆 Need the absolute best accuracy?
If accuracy is your top priority and you have enough data, go with **BERT** or **RoBERTa**. These are state-of-the-art transformers that understand context deeply. They're the current gold standard for NER accuracy.

#### ⚡ Deploying to edge or need low latency?
For edge deployment, mobile apps, or real-time systems where latency matters, choose **DistilBERT** or optimized **spaCy**. DistilBERT gives you 97% of BERT's accuracy at 60% faster speed. That's often the right tradeoff.

#### 🆕 New entity types with no data?
If you have a brand new entity type and zero training data, try **LLM Zero-shot** or **Few-shot** approaches! Just describe what you want in natural language and the LLM will extract it.

> 💡 **Pro tip: Always start simple!** You can always upgrade to more complex models later. Many production systems run on CRF or spaCy because they're fast and good enough.`
        },
        {
          id: 16,
          title: 'Data Needs Spectrum',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                <SvgIcon iconName="duo-graduation-cap" sizeName="3x" darkModeInvert={true} />
                <div>
                  <p style={{ margin: 0, opacity: 0.8 }}>How much training data does each approach need?</p>
                </div>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ width: '400px', fontWeight: 'bold', fontSize: '1.05em' }}>Rule-Based / Gazetteer</div>
                    <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg, #4fc3f7 1%, rgba(79, 195, 247, 0.1) 1%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px', border: '1px solid rgba(79, 195, 247, 0.3)' }}>
                      <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.05em' }}>0 labeled examples</span>
                      <span style={{ fontSize: '0.85em', opacity: 0.7 }}>
                    ✓ Just write patterns and dictionaries by hand
                  </span>
                    </div>
                  </div>
                  
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ width: '400px', fontWeight: 'bold', fontSize: '1.05em' }}>CRF / HMM</div>
                    <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg, #81c784 20%, rgba(129, 199, 132, 0.1) 20%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px', border: '1px solid rgba(129, 199, 132, 0.3)' }}>
                      <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.05em' }}>1,000 - 5,000</span>
                      <span style={{ fontSize: '0.85em', opacity: 0.7 }}>
                    ✓ Good for simple, stable entity schemas
                  </span>
                    </div>
                  </div>
                  
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ width: '400px', fontWeight: 'bold', fontSize: '1.05em' }}>Transformers (BERT)</div>
                    <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg, #ba68c8 35%, rgba(186, 104, 200, 0.1) 35%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px', border: '1px solid rgba(186, 104, 200, 0.3)' }}>
                      <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.05em' }}>3,000 - 30,000</span>
                      <span style={{ fontSize: '0.85em', opacity: 0.7 }}>
                    ✓ Pre-trained, so needs less data than BiLSTM
                  </span>
                    </div>
                  </div>
                  
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ width: '400px', fontWeight: 'bold', fontSize: '1.05em' }}>BiLSTM models</div>
                    <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg, #ffb74d 60%, rgba(255, 183, 77, 0.1) 60%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px', border: '1px solid rgba(255, 183, 77, 0.3)' }}>
                      <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.05em' }}>5,000 - 50,000</span>
                      <span style={{ fontSize: '0.85em', opacity: 0.7 }}>
                    ✓ Trained from scratch, needs more examples
                  </span>
                    </div>
                  </div>
                  
                </div>

                <div style={{ marginBottom: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                    <div style={{ width: '400px', fontWeight: 'bold', fontSize: '1.05em' }}>Zero-shot LLMs</div>
                    <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg, #f06292 2%, rgba(240, 98, 146, 0.1) 2%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px', border: '1px solid rgba(240, 98, 146, 0.3)' }}>
                      <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.05em' }}>0 - 10 in prompt</span>
                      <span style={{ fontSize: '0.85em', opacity: 0.7 }}>
                    ✓ Few-shot examples given directly in the prompt
                  </span>
                    </div>
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
Let's talk about data requirements, because this is often the **biggest factor** in choosing an approach. If you don't have labeled data, many options are simply off the table. So let me walk you through what each approach needs.

#### Rule-Based and Gazetteer
**Zero** training examples needed! You don't train anything - you just write rules or build dictionaries by hand. This is why these approaches are so attractive when you're starting from scratch or working in a domain where labeling is expensive.

#### CRF and HMM Models
These classical models need about **1,000 to 5,000** labeled examples. That's actually quite manageable for most teams - you could label that in a few weeks with a small team. And the nice thing is they're quite data-efficient, so you get decent results even at the lower end.

#### Transformers like BERT
Typically need **3,000 to 30,000** examples. Now, here's an important nuance - because BERT is pre-trained on massive text, it already understands language structure. So it needs less NER-specific data than you might expect. The pre-training does a lot of the heavy lifting.

#### BiLSTM Models
These are hungry - they need **5,000 to 50,000** examples. Why more than BERT? Because BiLSTM doesn't have pre-training. It's learning everything from scratch on your data, so it needs more examples to learn both language patterns and NER patterns.

#### Zero-shot LLMs
This is amazing - just **0 to 10** examples right in the prompt! The LLM already knows language deeply from its massive pre-training. You just describe what you want, maybe show a couple examples, and it works. Game-changer for rapid prototyping!

#### 🎯 Two Critical Tips
**Quality beats quantity every time.** Clean, consistent labels matter more than having huge volumes of noisy data. Spend time on your annotation guidelines.
**Use active learning!** Start with a small labeled set, train a model, look at what it struggles with, and label those examples specifically. This gets you the best bang for your labeling buck.`
            },
            {
          id: 17,
              title: 'Compute & Latency',
              content: (
                <div style={{ textAlign: 'left' }}>
                  
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
**Speed matters in production!** If you're building a real-time system, latency can make or break the user experience. Let me walk you through the latency comparison for each approach.

#### Rule-Based and Gazetteer ⚡
**Under 1 millisecond** - lightning fast! These run instantly because it's just pattern matching and dictionary lookups. No GPU needed, tiny memory footprint around 10 megabytes. If you need the absolute fastest option, this is it.

#### CRF and HMM
**5 to 10 milliseconds** - still very fast! You can run these on CPU only, no GPU required, and they only take about 50 megabytes of memory. Very practical for most production systems where you need good speed without special hardware.

#### BiLSTM+CRF
**20 to 50 milliseconds** - getting slower but still reasonable. A GPU helps speed things up but isn't strictly required. You can run this on CPU if you batch your requests smartly. Memory usage is around 200 megabytes.

#### DistilBERT
**20 to 100 milliseconds** - this is where we enter transformer territory. DistilBERT offers a good balance of speed and accuracy. A GPU is recommended here - you can run on CPU but it'll be on the slower end of that range. About 250 megabytes of memory.

#### Full BERT or RoBERTa
**50 to 200 milliseconds** - the full transformer experience. You really want a GPU here for practical latency. Without a GPU, you might be looking at seconds per request, which isn't great for real-time applications. Memory footprint around 450 megabytes.

#### LLMs like GPT-4 🐢
**500 milliseconds to 5 seconds or more!** This is the slowest option by far. You're making API calls over the network, there's queue time, inference time, and network round-trip. Great for prototyping, but be careful about production volume.

#### ⚡ Optimization Tips
Want to speed things up? Here are three powerful techniques. First, use **ONNX runtime** - it can give you 2x speedup over native PyTorch. Second, **quantize your models** - INT8 quantization can cut latency in half with minimal accuracy loss. Third, **batch your requests** when possible - processing 10 texts at once is often faster than 10 individual calls. Combined, these can give you 2 to 5x faster inference!`
            },
            {
          id: 18,
              title: 'Maintenance & Deployment',
              content: (
                <div style={{ textAlign: 'left' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                    <SvgIcon iconName="duo-rocket" sizeName="3x" darkModeInvert={true} />
                    <div>
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
**Deployment is just the beginning!** Once your model is in production, the real work starts. Each approach has very different maintenance needs, so let me break this down for you.

#### 📋 Rules and Gazetteers
Rules need **frequent manual updates**. When new entities appear in your domain - new companies, new products, new terminology - someone has to add them to your rules. This means you need ongoing involvement from domain experts who understand the patterns. The good news? It's **easy to debug and explain**! When something goes wrong, you can point to exactly which rule caused it and fix it directly. Version control your patterns just like code.

#### 📊 Classical ML (CRF and HMM)
These need **periodic retraining** - typically monthly or quarterly depending on how fast your domain changes. You'll need to maintain your **feature pipelines** - if you're using external resources like gazetteers or word embeddings, those need updates too. Set up proper **model versioning** so you can roll back if a new model performs worse. And consider A/B testing frameworks to compare model versions in production.

#### 🧠 Transformers
Transformers need **retraining when your domain shifts** significantly. The model that worked great last year might struggle with this year's data if the language patterns have changed. You need to **budget for GPU infrastructure** - either cloud GPUs or on-premise hardware, and that's a significant cost. Set up a proper model registry and model serving infrastructure. Most importantly, **monitor for data drift** - track your model's confidence scores and error rates over time.

#### 🤖 LLMs
With LLMs, your prompts are your code, so **version control your prompts** carefully! Build robust **output parsing** because the format can vary - LLMs don't always return exactly what you asked for. **Watch your API costs** closely - at scale, LLM API calls can get expensive fast. And add **guardrails** for weird edge cases where the model might hallucinate or produce unexpected outputs.

#### 📌 Bottom Line
Here's the key insight: **simpler models mean simpler maintenance.** A CRF running on CPU is much easier to maintain than a transformer cluster. But sometimes the accuracy improvement is worth the operational complexity. Make this tradeoff consciously based on your team's capacity and the business requirements.`
            },
            {
          id: 19,
              title: 'Deployment Tips',
              content: (
                <div style={{ textAlign: 'left' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '0.64em' }}>
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
**Final tips for production!** These come from real-world experience building NER systems at scale. Let me share six battle-tested lessons.

#### 🔗 Tip 1: Combine Methods!
**Hybrid approaches win.** The best production NER systems I've seen combine multiple approaches. Use rules to catch known patterns perfectly - things like specific product codes, date formats, or well-defined entities. Then use ML to handle the fuzzy stuff where patterns aren't so clear. Together they perform better than either alone. Rules give you precision on known cases, ML gives you coverage on unknown cases.

#### 🔄 Tip 2: Add Entity Linking!
Don't just find entities - **normalize them!** The same entity can appear in many forms. "NYC", "New York City", "New York, NY", "The Big Apple" - these should all map to the same canonical entity ID. This is called entity linking, and it's incredibly valuable for downstream applications. Link to knowledge bases like Wikidata when possible, or build your own internal entity database.

#### 📈 Tip 3: Monitor for Drift!
Language changes over time, but your model stays frozen. New terms emerge, usage patterns shift, new entities appear. **Track your prediction confidence** over time - if average confidence is dropping, your model might be drifting. Flag uncertain outputs for **human review** so you can catch problems early and collect data for retraining.

#### 🔒 Tip 4: Privacy Compliance!
**PII detection is serious business.** If you're extracting person names, locations, or other personally identifiable information, you're touching GDPR, HIPAA, CCPA, and other privacy regulations. Make sure you understand the compliance requirements in your domain. For sensitive data, consider **on-premise deployment** rather than cloud APIs to keep data within your security perimeter.

#### ⚡ Tip 5: Quantize for Edge!
**INT8 quantization is magic** for edge deployment. You can often get 4x smaller model size with almost the same accuracy - we're talking 1-2% accuracy drop for 4x speedup. This is essential for mobile apps, edge devices, or any scenario with limited compute. Modern frameworks like ONNX and TensorRT make this easy.

#### 🧪 Tip 6: Test Extensively!
Build **diverse test sets** that cover all your entity types and use cases. Don't just test on clean data - include weird **edge cases** like text with typos, unusual formatting, or multilingual content. Test **adversarial examples** where entities are intentionally confusing. Your test set should be harder than production data.

# 🎉 And that's a wrap!
You now know everything about NER approaches - from simple rules to cutting-edge LLMs. You know when to use each one, what data you need, how fast they run, and how to maintain them. **Go build something amazing!** Any questions?`
        }
      ]
    }
  ]
};
