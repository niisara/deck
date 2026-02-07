import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

export const nerApproachesDeck: Deck = {
  id: 'ner-approaches-deck',
  name: '11 Named Entity Recognition Approaches',
  description: 'A comprehensive cheat sheet of 11 NER approaches with model type, training data needs, best use cases, pros, and cons',
  category: 'NLP',
  theme: 'night',
  cardClassName: 'glass-morphism',
  cardStyle: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&q=80)',
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
          title: 'Named Entity Recognition Approaches',
          center: true,
          content: (
            <div>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p style={{ fontSize: '2rem', marginTop: '30px' }}>
                  A comprehensive cheat sheet of 11 NER approaches with model type, training data needs, best use cases, pros, and cons
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.4} duration={0.6}>
                <div style={{ marginTop: '30px', marginBottom: '30px', fontSize: '2rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
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
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.9}>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#162d6b',
          notes: `### 1) Named Entity Recognition Approaches
Welcome everyone! Today we're going to explore one of the most fundamental tasks in Natural Language Processing: **Named Entity Recognition**, or NER for short.

#### 🎯 What is NER?
So what exactly is NER? Think of it like this: when you read a news article, your brain automatically picks out the important "things" mentioned, like people's names, company names, locations, and dates. NER is teaching computers to do the same thing automatically! It's about finding and categorizing these key pieces of information in text.

#### 🗂️ The 11 Approaches We'll Cover
We're going to walk through **11 different approaches** to solving this problem, ranging from super simple to cutting-edge. You'll see we've organized them into categories: **Rule-Based** methods where we write explicit patterns, **Dictionary** lookups where we match against known lists, **Statistical** models that learn from data, **Neural** networks that capture complex patterns, **Transformer** architectures like BERT that understand context deeply, and finally **LLMs** like GPT that can do this with almost no training data.

#### 💡 Why So Many Approaches?
You might wonder: why do we need 11 different approaches? Well, there's no one-size-fits-all solution! The right choice depends on your data, your accuracy needs, your compute budget, and how much labeled training data you have. By the end of this presentation, you'll know exactly which approach fits your specific situation.

Let's dive into the table of contents to see what we'll cover...`
        },
        {
          id: 2,
          title: 'Table of Contents',
          content: (
            <div style={{ textAlign: 'left', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.2} duration={0.6}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#162d6b',
          notes: `### 2) Table of Contents
Here's our roadmap for today. We've organized the 11 NER approaches roughly from simplest to most complex.

#### 📋 The Journey Ahead
We'll start with approaches **1 and 2**, which are **Rule-Based Pattern Matching** and **Dictionary Lookups**. These are the "no machine learning required" approaches, perfect when you have strict patterns or known entity lists.

Then we move to **classical machine learning** with approaches **3 through 5**: TF-IDF classifiers, Hidden Markov Models, and Conditional Random Fields. These were the state of the art before deep learning took over, and they're still incredibly useful in many scenarios!

Next comes the **neural network era** with approaches **6 through 8**: BiLSTM+CRF, CNN+BiLSTM, and spaCy's statistical models. These brought significant accuracy improvements by learning complex patterns automatically.

The **transformer revolution** covers approaches **9 and 10**: BERT and its variants like RoBERTa and DistilBERT. These models understand language context at a level previously impossible.

Finally, approach **11** explores **LLM-based zero-shot NER**, where models like GPT can extract entities without any task-specific training!

#### 🎯 What You'll Learn
For each approach, we'll cover the model type, how much training data you need, the best use cases, and the pros and cons. At the end, we'll have a comprehensive summary to help you pick the right tool for your job.

Let's start with the simplest approach: Rule-Based Pattern Matching...`
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
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}>
                          <strong>Model Type:</strong>
                          <MermaidPopover
                            title="Rule-Based Pattern Matching Flow"
                            diagram={`flowchart LR
    A["📄 Input Text"] --> B["🔍 Pattern Matching"]
    B --> C{"Match Found?"}
    C -->|Yes| D["✅ Entity Extracted"]
    C -->|No| E["⏭️ Next Pattern"]
    E --> B
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#ffcdd2,color:#000`}
                          />
                        </p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Deterministic rules, regexes, token patterns, heuristics.</span>
                    </div>
                    <pre style={{ marginTop: '26px', fontSize: '1.2rem' }}>{`regex: r"\\b[A-Z][a-z]+ [A-Z][a-z]+\\b"`}</pre>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>None to build; small annotated set recommended for validation.</span>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.5}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Highly structured domains (dates, IDs, emails), compliance/extraction with strict formats, low-resource settings.</span>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#183c77',
          notes: `### 3) Rule-Based Pattern Matching
Let's start with the simplest and most intuitive approach: **Rule-Based Pattern Matching**. This is where you explicitly tell the computer what patterns to look for.

#### 🔧 How It Works
Imagine you're looking for email addresses in text. You know emails follow a pattern: some characters, then an "@" symbol, then a domain name. You can write a **regular expression** (regex) that captures this pattern exactly! The same logic applies to dates, phone numbers, social security numbers, and other structured data.

\`\`\`mermaid
flowchart LR
    A["📄 Input Text"] --> B["🔍 Pattern Matching"]
    B --> C{"Match Found?"}
    C -->|Yes| D["✅ Entity Extracted"]
    C -->|No| E["⏭️ Next Pattern"]
    E --> B
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#ffcdd2,color:#000
\`\`\`

The example regex shown here matches names like "John Smith" by looking for two capitalized words in a row. Simple, right?

#### 📚 Training Data Needed
Here's the beautiful part: you need **zero training data** to build these rules! You just need to understand your domain and write patterns that capture what you're looking for. That said, having a small validation set to test your rules is highly recommended. You want to make sure your patterns aren't matching things they shouldn't!

#### 🎯 When to Use This?
This approach shines when you're dealing with **highly structured data** like dates, ID numbers, emails, or phone numbers. It's also perfect for **compliance scenarios** where you need guaranteed pattern matching, or when you're in a **low-resource setting** where you simply don't have labeled data to train ML models.

> 💡 Ask yourself: "Does my entity follow a predictable pattern?" If yes, rules might be your best friend!

Let's look at the pros and cons...`
        },
        {
          id: 4,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Transparent and Fast</li>
                      <li>No labeled data required</li>
                      <li>Easy to enforce constraints</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Brittle to variations</li>
                      <li>High maintenance</li>
                      <li>Limited recall/coverage</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#183c77',
          notes: `### 4) Rule-Based Pattern Matching - Pros and Cons
Now let's weigh the advantages and disadvantages of this approach.

#### ✅ Pros
The good stuff is really compelling! First, rules are **completely transparent**. When your rule matches something, you know exactly why. There's no "black box" mystery here. This is crucial for debugging and for domains where you need to explain your decisions, like legal or medical applications.

Second, they're incredibly **fast** at inference time. Pattern matching runs in milliseconds. And third, you need **zero labeled training data** to get started. You can have a working NER system in hours, not weeks!

Finally, rules give you **precise control**. If you need to guarantee that certain patterns are always caught, or never caught, rules let you enforce that directly.

#### ❌ Cons  
The problems become apparent when reality gets messy. Rules are **brittle to variations**. Your regex for "John Smith" won't catch "John A. Smith" or "Dr. John Smith" unless you explicitly handle those cases. Real-world text is full of variations!

**Maintenance becomes a nightmare** as your rule set grows. You'll find yourself with hundreds of patterns, each with edge cases, and they start conflicting with each other. Updating one rule might break ten others.

Finally, rules have **limited recall**. You'll catch the patterns you anticipated, but miss all the creative ways entities can appear in natural language. Names can be written so many different ways!

> 🤔 Think of it like this: rules are like a very precise but narrow flashlight. They illuminate exactly what you point them at, but miss everything else.

Next up, let's look at Dictionary/Gazetteer Lookup, which takes a different approach to handling known entities...`
        }
      ]
    },
    {
      id: 'dictionary',
      title: 'Dictionary / Gazetteer Lookup',
      slides: [
        {
          id: 5,
          title: '2) Dictionary / Gazetteer Lookup',
          icon: { name: 'duo-book' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="scaleIn" delay={0.1}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}>
                          <strong>Model Type:</strong>
                          <MermaidPopover
                            title="Dictionary Lookup Flow"
                            diagram={`flowchart LR
    A["📄 Input Text"] --> B["🔤 Tokenize"]
    B --> C["📚 Dictionary Lookup"]
    C --> D{"Found?"}
    D -->|Yes| E["✅ Return Entity + Type"]
    D -->|No| F["❓ Unknown"]
    style A fill:#4fc3f7,color:#000
    style C fill:#e1bee7,color:#000
    style E fill:#81c784,color:#000`}
                          />
                        </p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Lexicon/alias lookup with exact/fuzzy matching, optional normalization.</span>
                    </div>
                    <pre style={{ marginTop: '26px', fontSize: '1.2rem' }}>{`entity_dict.get(text.lower(), None)`}</pre>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.3}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>None; requires curated dictionaries/gazetteers; optional frequency stats for ranking.</span>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.5}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Products/catalogs, locations (GeoNames), biomedical ontologies, entity normalization tasks.</span>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 5) Dictionary / Gazetteer Lookup
Now let's look at an approach that's complementary to rules: **Dictionary or Gazetteer Lookup**. Instead of defining patterns, we maintain lists of known entities!

#### 📖 How It Works
A **gazetteer** is just a fancy word for a list of known entities. Think of it like a phone book for your domain. You have a list of all country names, or all product names in your catalog, or all drug names in a medical database. When processing text, you simply check if any words or phrases match entries in your list.

\`\`\`mermaid
flowchart LR
    A["📄 Input Text"] --> B["🔤 Tokenize"]
    B --> C["📚 Dictionary Lookup"]
    C --> D{"Found?"}
    D -->|Yes| E["✅ Return Entity + Type"]
    D -->|No| F["❓ Unknown"]
    style A fill:#4fc3f7,color:#000
    style C fill:#e1bee7,color:#000
    style E fill:#81c784,color:#000
\`\`\`

The example code shows the simplest approach: convert text to lowercase and look it up in a dictionary. More sophisticated systems use **fuzzy matching** to handle typos and variations, like matching "Mcdonalds" to "McDonald's".

#### 📚 Training Data Needed
Like rule-based approaches, you need **no training data**! But you do need a well-curated dictionary. The good news is that many high-quality gazetteers already exist: **GeoNames** for locations with millions of place names, **UMLS** for medical terms, product databases from your company, and so on.

#### 🎯 When to Use This?
Dictionaries excel when you're working with **closed or slowly-changing entity sets**. Product catalogs, location names, company names in a specific industry, drug names, or gene names are all perfect fits. They're especially powerful for **entity normalization**, where you want to map variations like "NYC", "New York", and "The Big Apple" to a canonical form.

Let's examine the tradeoffs...`
        },
        {
          id: 6,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>High precision for known entities</li>
                      <li>Easy to update lists</li>
                      <li>Multilingual-ready with the right lexicons</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Misses out-of-vocabulary/new entities</li>
                      <li>Ambiguity without context</li>
                      <li>Alias/variant management overhead</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 6) Dictionary / Gazetteer Lookup - Pros and Cons
Let's break down what works and what doesn't with dictionary-based NER.

#### ✅ Pros
The biggest advantage is **extremely high precision** for entities in your dictionary. If "Microsoft" is in your company gazetteer, every mention of "Microsoft" will be correctly tagged. No false positives from pattern matching gone wrong!

Dictionaries are also **easy to update**. New product launched? Add it to the list. Company changed its name? Update the entry. No retraining required! This makes them perfect for rapidly evolving domains.

Another underrated benefit: dictionaries are naturally **multilingual-ready**. If you have gazetteers in multiple languages, you can process text in any of those languages. Many resources like GeoNames provide place names in dozens of languages.

#### ❌ Cons
The fatal flaw is handling **new or unknown entities**. If someone mentions a brand new company that's not in your list, you'll miss it entirely. This is called the "out-of-vocabulary" or OOV problem, and it's serious in dynamic domains.

**Ambiguity** is another challenge. "Apple" could be the fruit or the company. "Paris" could be the city in France or Paris, Texas. Without context, a dictionary can't tell the difference. Some systems track which meaning is more common, but that's a crude heuristic.

Finally, managing **aliases and variants** becomes a maintenance burden. "IBM", "International Business Machines", "Big Blue" should all map to the same entity. Keeping these mappings complete and current takes ongoing effort.

> 💡 Pro tip: Combine dictionaries with ML models! Use the dictionary for high-confidence matches, and ML to catch what the dictionary misses.

Now let's venture into machine learning territory with TF-IDF classifiers...`
        }
      ]
    },
    {
      id: 'tfidf-classifier',
      title: 'TF-IDF + Classifier-Based NER',
      slides: [
        {
          id: 31,
          title: '3) TF-IDF + Classifier-Based NER',
          icon: { name: 'duo-chart-line' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="fadeIn" delay={0.1}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}>
                          <strong>Model Type:</strong>
                          <MermaidPopover
                            title="TF-IDF Classification Pipeline"
                            diagram={`flowchart LR
    A["📄 Tokens"] --> B["📊 TF-IDF Features"]
    B --> C["🎯 Classifier"]
    C --> D["🏷️ Entity Label"]
    style A fill:#4fc3f7,color:#000
    style B fill:#ffb74d,color:#000
    style C fill:#ba68c8,color:#000
    style D fill:#81c784,color:#000`}
                          />
                        </p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Feature-based ML (TF-IDF/BoW, char n-grams, window features) + classifier (LogReg/SVM/Perceptron) at token/span level.</span>
                    </div>
                    <pre style={{ marginTop: '26px', fontSize: '1.2rem' }}>{`X = tfidf_vectorizer.transform(tokens); y_pred = classifier.predict(X)`}</pre>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Labeled tokens/spans (thousands–tens of thousands); optional pre-chunking.</span>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Lightweight baselines, domains with strong lexical cues, constrained schemas.</span>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6d1e1e',
          notes: `### 7) TF-IDF + Classifier-Based NER
Welcome to our first true machine learning approach! We're moving from hand-crafted rules to **learned patterns**.

#### 🔧 How It Works
The idea is beautifully simple. First, we convert each token (word) into a **numerical feature vector** using TF-IDF. TF-IDF stands for "Term Frequency - Inverse Document Frequency" and it basically measures how important a word is. Common words get low scores, rare distinctive words get high scores.

\`\`\`mermaid
flowchart LR
    A["📄 Tokens"] --> B["📊 TF-IDF Features"]
    B --> C["🎯 Classifier"]
    C --> D["🏷️ Entity Label"]
    style A fill:#4fc3f7,color:#000
    style B fill:#ffb74d,color:#000
    style C fill:#ba68c8,color:#000
    style D fill:#81c784,color:#000
\`\`\`

We also add **contextual features** like the words before and after, character n-grams (to capture prefixes and suffixes), and whether the word is capitalized. Then we train a simple classifier, like Logistic Regression or SVM, to predict the entity label for each token.

Think of it like teaching a student: "Words that look like THIS and appear in THESE contexts tend to be person names."

#### 📚 Training Data Needed
Now here's the catch: we need labeled data. Typically you'll want **thousands to tens of thousands** of labeled tokens. Each token in your training sentences needs to be tagged with its entity type: "John" is B-PERSON, "Smith" is I-PERSON, "works" is O (outside any entity), and so on.

#### 🎯 When to Use This?
This approach works great as a **quick baseline** to see if ML can help your problem. It's also effective when your entities have **strong lexical cues**, meaning the words themselves are distinctive. Think product codes, technical terms, or domain-specific jargon.

Let's look at the tradeoffs...`
        },
        {
          id: 32,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="bounceIn" delay={0.1}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Fast to train</li>
                      <li>Interpretable features</li>
                      <li>Low compute requirements</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" delay={0.4}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Weak context modeling</li>
                      <li>No explicit label dependencies</li>
                      <li>Requires feature engineering</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6d1e1e',
          notes: `### 8) TF-IDF + Classifier-Based NER - Pros and Cons
Let's evaluate this approach honestly.

#### ✅ Pros
Speed is a major advantage. Training a TF-IDF + classifier model takes **minutes, not hours**. You can iterate quickly, try different feature sets, and get results fast. This makes it perfect for prototyping and experimentation.

The features are **interpretable**. You can look at which words or n-grams most influence the prediction. "Oh, words ending in '-tion' are often tagged as events." This transparency helps you understand and debug your model.

Compute requirements are **minimal**. You can train and run these models on a laptop CPU. No GPU needed! This matters for deployment in resource-constrained environments or when you need to process massive text volumes cheaply.

#### ❌ Cons
The fundamental weakness is **limited context understanding**. Each token is classified somewhat independently, using only a small window of surrounding words. The model can't understand that "Apple" at the start of a tech article probably means the company, not the fruit.

There's **no explicit modeling of label dependencies**. NER has structure: if "New" is labeled as B-LOCATION, "York" should probably be I-LOCATION, not start a new entity. TF-IDF classifiers treat each prediction independently and can produce impossible sequences.

Finally, you need significant **feature engineering** to get good results. Choosing the right n-gram ranges, window sizes, and auxiliary features takes expertise and experimentation.

> 💡 This is a great starting point, but most production systems need something more sophisticated.

Next, let's explore Hidden Markov Models, which address the label dependency problem...`
        }
      ]
    },
    {
      id: 'hmm',
      title: 'Hidden Markov Model (HMM) NER',
      slides: [
        {
          id: 7,
          title: '4) Hidden Markov Model (HMM) NER',
          icon: { name: 'duo-arrows-rotate' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="rotateIn" delay={0.1} duration={0.8}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}>
                          <strong>Model Type:</strong>
                          <MermaidPopover
                            title="HMM State Transitions"
                            diagram={`flowchart LR
    subgraph Hidden["Hidden States (Tags)"]
        S1["B-PER"] --> S2["I-PER"]
        S2 --> S3["O"]
        S3 --> S4["B-ORG"]
    end
    subgraph Observed["Observed (Words)"]
        W1["John"] -.-> S1
        W2["Smith"] -.-> S2
        W3["works"] -.-> S3
        W4["at"] -.-> S3
    end
    style S1 fill:#ba68c8,color:#fff
    style S2 fill:#ba68c8,color:#fff
    style S4 fill:#4fc3f7,color:#000`}
                          />
                        </p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Generative sequence model with transition/emission probabilities; Viterbi decoding.</span>
                    </div>
                    <pre style={{ marginTop: '26px', fontSize: '1.2rem' }}>{`P(tag_i|tag_{i-1}) × P(word_i|tag_i)`}</pre>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.4}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Labeled sequences preferred; can leverage semi-supervised counts and lexicons.</span>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.6}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Educational baseline, low-resource scenarios, when probabilistic interpretability is desired.</span>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#2b6d1e',
          notes: `### 9) Hidden Markov Model (HMM) NER
Now we get to one of the most elegant ideas in NLP: **Hidden Markov Models**. This is where we start thinking about NER as a **sequence labeling** problem.

#### 🔧 How It Works
The key insight is that entity labels have structure. If you see "B-PERSON" (beginning of a person name), the next label is likely "I-PERSON" (inside a person name), not "B-LOCATION". HMMs capture this with two types of probabilities.

\`\`\`mermaid
flowchart LR
    subgraph Hidden["Hidden States (Tags)"]
        S1["B-PER"] --> S2["I-PER"]
        S2 --> S3["O"]
        S3 --> S4["B-ORG"]
    end
    subgraph Observed["Observed (Words)"]
        W1["John"] -.-> S1
        W2["Smith"] -.-> S2
        W3["works"] -.-> S3
        W4["at"] -.-> S3
    end
    style S1 fill:#ba68c8,color:#fff
    style S2 fill:#ba68c8,color:#fff
    style S4 fill:#4fc3f7,color:#000
\`\`\`

**Transition probabilities** tell us: given the current tag, what's the probability of the next tag? And **emission probabilities** tell us: given a tag, what's the probability of seeing a particular word?

The formula shows it: the probability of a tag depends on the previous tag (transition), and the probability of a word depends on its tag (emission). We use the **Viterbi** 👉 'vih-TER-bee' **algorithm** to find the most likely sequence of tags efficiently.

#### 📚 Training Data Needed
HMMs learn from labeled sequences. You count how often "B-PERSON" is followed by "I-PERSON" to get transition probabilities, and how often "John" appears with the PERSON tag to get emission probabilities. With clever tricks, you can also use unlabeled data to improve the word probabilities!

#### 🎯 When to Use This?
HMMs are fantastic for **education** because they're mathematically elegant and help you understand sequence modeling. They're also useful in **low-resource scenarios** where you need interpretable probabilities. But honestly, in production, CRFs usually outperform them.

Let's examine the tradeoffs...`
        },
        {
          id: 8,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Efficient decoding</li>
                      <li>Handles sequence structure</li>
                      <li>Probabilistic treatment of uncertainty</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Strong independence assumptions</li>
                      <li>Limited feature flexibility</li>
                      <li>Typically outperformed by CRF/neural models</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#2b6d1e',
          notes: `### 10) Hidden Markov Model (HMM) NER - Pros and Cons
HMMs have beautiful theoretical foundations, but also significant limitations in practice.

#### ✅ Pros
The Viterbi algorithm gives us **efficient decoding**. Finding the best tag sequence takes linear time in the sequence length. Even for long documents, inference is fast!

HMMs properly **model sequence structure**. The transition probabilities ensure we produce valid tag sequences. No more "I-PERSON" appearing without a preceding "B-PERSON".

The **probabilistic framework** is also valuable. We get actual probabilities, not just predictions. This lets us quantify uncertainty: "I'm 90% confident this is a person name, but there's a 10% chance it's an organization."

#### ❌ Cons
The fundamental problem is the **independence assumptions**. HMMs assume each word depends only on its tag, not on surrounding words. But "Bank" after "Central" is probably an organization, while "Bank" after "River" is probably a location! HMMs can't use this context.

**Feature flexibility is limited**. In an HMM, a word's probability depends only on its tag. You can't easily incorporate features like "is this word capitalized?" or "what's the previous word?" without complex extensions.

In practice, **CRFs and neural models outperform HMMs** on almost every NER benchmark. HMMs are now primarily of educational and historical interest, though they can still work in very constrained scenarios.

> 💡 Think of HMMs as the "training wheels" of sequence models. They teach you the concepts before moving to more powerful methods.

Speaking of which, let's look at CRFs, which address many of HMM's limitations...`
        }
      ]
    },
    {
      id: 'crf',
      title: 'Conditional Random Fields (CRF) NER',
      slides: [
        {
          id: 9,
          title: '5) Conditional Random Fields (CRF) NER',
          icon: { name: 'duo-circle-nodes' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="slideInTop" delay={0.1}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}>
                          <strong>Model Type:</strong>
                          <MermaidPopover
                            title="CRF Feature Flow"
                            diagram={`flowchart TB
    A["📄 Input Sentence"] --> B["🔤 Feature Extraction"]
    B --> C["word.lower()"]
    B --> D["word[-3:] suffix"]
    B --> E["is_upper?"]
    B --> F["prev/next word"]
    C --> G["🎯 CRF Model"]
    D --> G
    E --> G
    F --> G
    G --> H["🏷️ BIO Tag Sequence"]
    style A fill:#4fc3f7,color:#000
    style G fill:#f06292,color:#000
    style H fill:#81c784,color:#000`}
                          />
                        </p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Discriminative sequence model over hand-crafted features; BIO/IOB tagging.</span>
                    </div>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`CRF(features=[word.lower(), word[-3:], word.isupper(), prev_word, next_word])`}</pre>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Labeled sequences (5k–100k sentences) + feature templates (orthographic, lexicon, context).</span>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Strong non-neural baseline, small/medium data, domains with informative surface features.</span>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1e496d',
          notes: `### 11) Conditional Random Fields (CRF) NER
Here comes the workhorse of classical NER: **Conditional Random Fields**. CRFs were state-of-the-art before deep learning and are still incredibly useful today!

#### 🔧 How It Works
Unlike HMMs which model the joint probability of words and tags, CRFs model the **conditional probability** of tags given words. This might sound like a subtle difference, but it's hugely important!

\`\`\`mermaid
flowchart TB
    A["📄 Input Sentence"] --> B["🔤 Feature Extraction"]
    B --> C["word.lower()"]
    B --> D["word[-3:] suffix"]
    B --> E["is_upper?"]
    B --> F["prev/next word"]
    C --> G["🎯 CRF Model"]
    D --> G
    E --> G
    F --> G
    G --> H["🏷️ BIO Tag Sequence"]
    style A fill:#4fc3f7,color:#000
    style G fill:#f06292,color:#000
    style H fill:#81c784,color:#000
\`\`\`

The magic is in the **features**. You can throw in anything you want: the lowercase word, the last 3 characters (suffix), whether it's capitalized, the previous word, the next word, whether it's in a gazetteer. CRFs will learn which features are predictive for which tags!

The model learns feature weights that say things like: "If the word is capitalized AND the previous word is 'Mr.' AND the suffix is '-son', then B-PERSON is very likely."

#### 📚 Training Data Needed
CRFs need labeled sequences, typically **5,000 to 100,000 sentences** depending on your domain complexity. You also need to design good **feature templates**. This is where domain expertise comes in handy.

#### 🎯 When to Use This?
CRFs are perfect when you have **small to medium amounts of data** and your entities have **clear surface patterns**. They're fast, interpretable, and robust. Many production systems still use CRFs, especially combined with neural features.

Let's look at the tradeoffs...`
        },
        {
          id: 10,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="flipCard" delay={0.1}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Captures label dependencies</li>
                      <li>Robust</li>
                      <li>Well-understood</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.4}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Heavy feature engineering</li>
                      <li>Limited long-range context</li>
                      <li>Weaker domain transfer vs. pretrained transformers</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1e496d',
          notes: `### 12) Conditional Random Fields (CRF) NER - Pros and Cons
CRFs hit a sweet spot between simplicity and power. Let's evaluate them honestly.

#### ✅ Pros
CRFs properly **capture label dependencies**. The model learns transition patterns: "B-PERSON" should be followed by "I-PERSON" or "O", not "I-LOCATION". This produces valid, coherent entity spans.

They're remarkably **robust**. CRFs don't easily overfit, they train reliably, and they give consistent results. Decades of research have made the algorithms rock-solid.

The field has **well-understood best practices**. There's extensive literature on feature engineering, regularization, and optimization for CRFs. You're not flying blind.

#### ❌ Cons
The elephant in the room is **feature engineering**. You need to manually design features that capture the patterns in your data. This requires domain expertise and lots of experimentation. It's time-consuming and error-prone.

CRFs have **limited long-range context**. Typically you only look at a window of 2-3 words. If understanding an entity requires looking at the entire paragraph, CRFs struggle.

Finally, **domain transfer is weak**. A CRF trained on news articles won't work well on medical texts without retraining. Compare this to transformers that can transfer knowledge across domains much more effectively.

> 💡 CRFs are like experienced craftsmen: reliable, understandable, but requiring skilled setup. Transformers are more like versatile robots: powerful out of the box, but less transparent.

Now let's enter the neural network era with BiLSTM + CRF...`
        }
      ]
    },
    {
      id: 'bilstm-crf',
      title: 'BiLSTM + CRF',
      slides: [
        {
          id: 11,
          title: '6) BiLSTM + CRF',
          icon: { name: 'duo-brain' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="scaleIn" delay={0.1}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}>
                          <strong>Model Type:</strong>
                          <MermaidPopover
                            title="BiLSTM + CRF Architecture"
                            diagram={`flowchart TB
    A["📄 Words"] --> B["📊 Embeddings"]
    B --> C["⬅️ Forward LSTM"]
    B --> D["➡️ Backward LSTM"]
    C --> E["🔗 Concat"]
    D --> E
    E --> F["🎯 CRF Layer"]
    F --> G["🏷️ Entity Tags"]
    style A fill:#4fc3f7,color:#000
    style B fill:#e1bee7,color:#000
    style E fill:#ffb74d,color:#000
    style F fill:#ba68c8,color:#000
    style G fill:#81c784,color:#000`}
                          />
                        </p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Neural sequence tagger: embeddings + BiLSTM encoder + CRF decoder.</span>
                    </div>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`BiLSTM(embed) → CRF(tag_sequence)`}</pre>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Labeled sequences (10k–100k sentences); benefits from pretrained word/subword embeddings.</span>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>General-purpose NER with moderate data; multilingual and domain setups without massive compute.</span>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#4a1e6d',
          notes: `### 13) BiLSTM + CRF
Welcome to the neural network era of NER! **BiLSTM + CRF** combines the best of both worlds: neural networks that learn features automatically, plus CRFs that ensure valid output sequences.

#### 🔧 How It Works
This architecture is elegant in its simplicity. First, each word is converted into a dense **embedding** vector, often using pretrained word vectors like **GloVe** 👉 'gluv' or **FastText**. These embeddings capture semantic similarity, so "dog" and "cat" have similar representations.

\`\`\`mermaid
flowchart TB
    A["📄 Words"] --> B["📊 Embeddings"]
    B --> C["⬅️ Forward LSTM"]
    B --> D["➡️ Backward LSTM"]
    C --> E["🔗 Concat"]
    D --> E
    E --> F["🎯 CRF Layer"]
    F --> G["🏷️ Entity Tags"]
    style A fill:#4fc3f7,color:#000
    style B fill:#e1bee7,color:#000
    style E fill:#ffb74d,color:#000
    style F fill:#ba68c8,color:#000
    style G fill:#81c784,color:#000
\`\`\`

Then comes the **BiLSTM** (Bidirectional Long Short-Term Memory). One LSTM reads the sentence left-to-right, another reads right-to-left. At each position, we concatenate both directions to get a representation that captures the full sentence context!

Finally, the **CRF layer** on top takes these contextual representations and finds the best tag sequence, respecting label constraints. It's like having the neural network generate smart features, then letting the CRF make the final structured decision.

#### 📚 Training Data Needed
You'll typically want **10,000 to 100,000 labeled sentences**. The good news is that pretrained embeddings inject a lot of language knowledge, so you need less data than training from scratch.

#### 🎯 When to Use This?
BiLSTM+CRF is your go-to when you have **moderate amounts of data** and want solid results without massive compute. It works well across languages and domains.

Let's examine the tradeoffs...`
        },
        {
          id: 12,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Learns features automatically</li>
                      <li>Context-aware</li>
                      <li>Leverages pretrained embeddings</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Needs GPU for training</li>
                      <li>Complex hyperparameter tuning</li>
                      <li>OOV handling depends on char/subword modeling</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#4a1e6d',
          notes: `### 14) BiLSTM + CRF - Pros and Cons
BiLSTM+CRF was a game-changer when it arrived. Let's see why it worked so well, and what its limitations are.

#### ✅ Pros
The biggest win is **automatic feature learning**. No more hand-crafting features! The neural network learns what's important from the data. Capitalizations, word shapes, surrounding context, it discovers all of this on its own.

The bidirectional architecture makes the model **deeply context-aware**. When tagging "Bank", the model sees both "Central" before it and "of America" after it. This context is crucial for disambiguation!

Using **pretrained embeddings** gives you a massive head start. Words like "Microsoft" and "Google" will have similar embeddings even if "Google" never appeared in your training data. This semantic knowledge transfers from huge text corpora.

#### ❌ Cons
Training requires a **GPU**. While not as demanding as transformers, BiLSTM training on CPU is painfully slow. Plan for GPU infrastructure or cloud compute costs.

There's significant **hyperparameter tuning** involved. LSTM hidden size, number of layers, dropout rates, learning rate schedules. Getting these right takes experimentation, though good defaults exist.

**Out-of-vocabulary (OOV) words** are tricky. If a word wasn't in your training data or pretrained embeddings, you're in trouble. This is why adding character-level CNNs became popular. Speaking of which, that's our next topic!

> 💡 BiLSTM+CRF is like a reliable sedan: not the flashiest, but gets the job done well for most situations.

Let's look at how adding character-level CNNs improves robustness...`
        }
      ]
    },
    {
      id: 'cnn-bilstm',
      title: 'CNN + BiLSTM NER',
      slides: [
        {
          id: 13,
          title: '7) CNN + BiLSTM NER',
          icon: { name: 'duo-filter' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="slideInTop" delay={0.1}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}>
                          <strong>Model Type:</strong>
                          <MermaidPopover
                            title="CNN + BiLSTM Architecture"
                            diagram={`flowchart LR
    subgraph Char["Character CNN"]
        C1["M"] --> CNN["🔲 Conv"]
        C2["i"] --> CNN
        C3["c"] --> CNN
        C4["r"] --> CNN
        C5["o"] --> CNN
        CNN --> CP["📊 Pool"]
    end
    CP --> CONCAT["🔗"]
    WE["📚 Word Embed"] --> CONCAT
    CONCAT --> BILSTM["🧠 BiLSTM"]
    BILSTM --> CRF["🎯 CRF"]
    CRF --> OUT["🏷️ Tags"]
    style CP fill:#aed581,color:#000
    style BILSTM fill:#ba68c8,color:#000
    style OUT fill:#81c784,color:#000`}
                          />
                        </p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Character-level CNN (or LSTM) for subword features + word embeddings + BiLSTM (+ CRF/softmax).</span>
                    </div>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`char_cnn + word_emb → BiLSTM → CRF/softmax`}</pre>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Labeled sequences (10k–100k); character and word vocabularies.</span>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Morphologically rich languages, noisy text (typos, social media), OOV-heavy domains.</span>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6d571e',
          notes: `### 15) CNN + BiLSTM NER
Now we add another powerful ingredient to our neural NER: **character-level CNNs**. This addresses one of BiLSTM's biggest weaknesses: handling unknown words!

#### 🔧 How It Works
The insight is that even if you've never seen the word "Microsft" (a typo), you can tell it's similar to "Microsoft" by looking at the characters! CNNs are excellent at capturing these patterns.

\`\`\`mermaid
flowchart LR
    subgraph Char["Character CNN"]
        C1["M"] --> CNN["🔲 Conv"]
        C2["i"] --> CNN
        C3["c"] --> CNN
        C4["r"] --> CNN
        C5["o"] --> CNN
        CNN --> CP["📊 Pool"]
    end
    CP --> CONCAT["🔗"]
    WE["📚 Word Embed"] --> CONCAT
    CONCAT --> BILSTM["🧠 BiLSTM"]
    BILSTM --> CRF["🎯 CRF"]
    CRF --> OUT["🏷️ Tags"]
    style CP fill:#aed581,color:#000
    style BILSTM fill:#ba68c8,color:#000
    style OUT fill:#81c784,color:#000
\`\`\`

For each word, we run a small CNN over its characters. This CNN learns to recognize meaningful patterns: "-tion" endings suggest nouns, "un-" prefixes suggest negation, capital letters suggest names. The output is a fixed-size character embedding.

We then **concatenate** this character embedding with the word embedding. Now each token has two sources of information: what the word means (from pretrained embeddings) and what it looks like (from the character CNN). This combined representation feeds into the BiLSTM.

#### 📚 Training Data Needed
Similar to BiLSTM+CRF: **10,000 to 100,000 labeled sentences**. The character CNN adds some parameters, but not dramatically more data requirements.

#### 🎯 When to Use This?
Character CNNs are crucial for **morphologically rich languages** like German, Finnish, or Turkish where word forms carry significant information. They're also essential for **noisy text** like social media, typos, or OCR errors. If your domain has lots of novel words (technical terms, brand names), character modeling helps!

Let's look at the tradeoffs...`
        },
        {
          id: 14,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="bounceIn" delay={0.1}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Captures morphology/spelling</li>
                      <li>Improves robustness to OOV/variants</li>
                      <li>Strong non-transformer baseline</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" delay={0.4}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>More components/hyperparameters</li>
                      <li>Increased training complexity</li>
                      <li>Slower than plain BiLSTM</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6d571e',
          notes: `### 16) CNN + BiLSTM NER - Pros and Cons
Adding character CNNs brings significant benefits but also complexity. Let's evaluate.

#### ✅ Pros
The model now **captures morphology and spelling patterns**. Suffixes like "-berg" (suggesting German names) or prefixes like "bio-" (suggesting scientific terms) become learnable signals. This is information that word-level models completely miss!

**OOV robustness improves dramatically**. Misspellings, new words, rare names all get reasonable representations because they share character patterns with known words. "Amazn" still looks like "Amazon" at the character level!

This architecture was the **strongest non-transformer baseline** for several years. Before BERT, CNN+BiLSTM+CRF was state-of-the-art on many NER benchmarks. It remains competitive when you can't afford transformer-scale compute.

#### ❌ Cons
The model is **more complex** with more components to configure. CNN filter sizes, number of filters, how to combine character and word embeddings, all these are hyperparameters that need tuning.

**Training is more complex** because you're backpropagating through more layers. Gradient flow through the character CNN, through concatenation, through the BiLSTM, through the CRF. More things can go wrong.

**Inference is slower** than plain BiLSTM because you need to run the character CNN for every word. For very long documents or real-time applications, this overhead matters.

> 💡 Think of it as BiLSTM with "spelling glasses." It sees more detail but processing takes more time.

Now let's look at spaCy, which packages these ideas into a production-ready tool...`
        }
      ]
    },
    {
      id: 'spacy',
      title: 'spaCy Statistical NER',
      slides: [
        {
          id: 33,
          title: '8) spaCy Statistical NER',
          icon: { name: 'duo-rocket' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="rotateIn" delay={0.1} duration={0.9}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}>
                          <strong>Model Type:</strong>
                          <MermaidPopover
                            title="spaCy NER Pipeline"
                            diagram={`flowchart LR
    A["📄 Text"] --> B["🔤 Tokenizer"]
    B --> C["📊 Tagger"]
    C --> D["🏷️ NER"]
    D --> E["🔗 Entity Linker"]
    E --> F["✅ Doc Object"]
    style A fill:#4fc3f7,color:#000
    style D fill:#ffa726,color:#000
    style F fill:#81c784,color:#000`}
                          />
                        </p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Production-ready pipeline (transition-based CNN or transformer backends) with beam search; rule+ML integration.</span>
                    </div>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`nlp = spacy.load("en_core_web_sm")`}</pre>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>None to use pretrained; domain customization with labeled examples; config-driven training in spaCy v3.</span>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Rapid deployment, practical pipelines combining rules, gazetteers, and statistical NER.</span>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1e6d5e',
          notes: `### 17) spaCy Statistical NER
Now let's talk about a tool that changed how practitioners do NER: **spaCy** 👉 'spay-see'. It's a production-ready library that packages best practices into an easy-to-use framework.

#### 🔧 How It Works
spaCy provides **pretrained pipelines** that you can use out of the box. One line of code loads a model trained on millions of words, and you're ready to extract entities!

\`\`\`mermaid
flowchart LR
    A["📄 Text"] --> B["🔤 Tokenizer"]
    B --> C["📊 Tagger"]
    C --> D["🏷️ NER"]
    D --> E["🔗 Entity Linker"]
    E --> F["✅ Doc Object"]
    style A fill:#4fc3f7,color:#000
    style D fill:#ffa726,color:#000
    style F fill:#81c784,color:#000
\`\`\`

Under the hood, spaCy uses transition-based neural networks, similar to what we discussed, but heavily optimized for speed. In v3, you can also use transformer backends for higher accuracy.

The magic is in the **pipeline architecture**. NER sits alongside tokenization, POS tagging, dependency parsing, and more. These components share information and work together. You can also add custom components, like rule-based matchers or gazetteers, that run alongside the statistical model.

#### 📚 Training Data Needed
To use pretrained models: **zero data required**! Just install and go. For custom domains, you can fine-tune with your own labeled examples using spaCy's config-driven training system.

#### 🎯 When to Use This?
spaCy is perfect for **rapid deployment**. When you need NER working in production by tomorrow, spaCy delivers. It's also great for **hybrid systems** where you combine ML with rules and dictionaries.

Let's look at the tradeoffs...`
        },
        {
          id: 34,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Fast inference</li>
                      <li>Easy to train/tune/deploy</li>
                      <li>Strong tooling</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Quality depends on pretrained model/domain fit</li>
                      <li>Custom labels need data</li>
                      <li>Limited transparency into pretrained errors</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1e6d5e',
          notes: `### 18) spaCy Statistical NER - Pros and Cons
spaCy has become the go-to tool for practical NER. Let's understand why, and its limitations.

#### ✅ Pros
**Inference is blazing fast**. spaCy's transition-based architecture was designed for speed. You can process thousands of documents per second on a single CPU. This matters for production workloads!

The **developer experience is excellent**. Training, evaluation, packaging, deployment. spaCy provides tools for the entire lifecycle. The v3 config system makes experiments reproducible and hyperparameters explicit.

The **tooling ecosystem is strong**. Prodigy for annotation, spacy-transformers for BERT backends, displaCy for visualization, spacy-llm for LLM integration. The community has built solutions for most needs.

#### ❌ Cons
**Quality depends heavily on domain fit**. The pretrained models work great on news-like text. But medical records, legal documents, or social media? You'll need customization.

If you need **custom entity types**, you need labeled data. Want to extract product codes or internal project names? The pretrained model doesn't know about those.

**Understanding pretrained model errors** is hard. When the model makes a mistake, it's not obvious why. The model is a black box trained on data you didn't see.

> 💡 spaCy is like a well-engineered car: it gets you where you need to go reliably, but customizing the engine requires expertise.

Now we enter the transformer era with BERT fine-tuning...`
        }
      ]
    },
    {
      id: 'bert',
      title: 'BERT Fine-Tuned for NER',
      slides: [
        {
          id: 15,
          title: '9) BERT Fine-Tuned for NER',
          icon: { name: 'duo-brain-circuit' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="scaleIn" delay={0.1} duration={0.8}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}>
                          <strong>Model Type:</strong>
                          <MermaidPopover
                            title="BERT Token Classification"
                            diagram={`flowchart TB
    A["📄 Tokens"] --> B["🔤 Subword Tokenizer"]
    B --> C["🧠 BERT Encoder"]
    C --> D["12 Transformer Layers"]
    D --> E["🎯 Classification Head"]
    E --> F["🏷️ BIO Tags per Token"]
    style A fill:#4fc3f7,color:#000
    style C fill:#ef5350,color:#fff
    style D fill:#ba68c8,color:#fff
    style F fill:#81c784,color:#000`}
                          />
                        </p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Transformer encoder (BERT) with token classification head (softmax) ± CRF layer.</span>
                    </div>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`BertForTokenClassification(num_labels=9)`}</pre>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Labeled BIO/IOB sequences (5k–50k sentences) leveraging large-scale pretraining.</span>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>High-accuracy NER, domain adaptation via domain-specific BERT (e.g., BioBERT, FinBERT).</span>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6d1e52',
          notes: `### 19) BERT Fine-Tuned for NER
Welcome to the transformer revolution! **BERT** 👉 'burt' (Bidirectional Encoder Representations from Transformers) changed everything in NLP, including NER.

#### 🔧 How It Works
BERT is pretrained on massive text corpora to understand language deeply. It uses **self-attention** to relate every word to every other word in the sentence. Unlike LSTMs that process sequentially, BERT sees the entire context at once!

\`\`\`mermaid
flowchart TB
    A["📄 Tokens"] --> B["🔤 Subword Tokenizer"]
    B --> C["🧠 BERT Encoder"]
    C --> D["12 Transformer Layers"]
    D --> E["🎯 Classification Head"]
    E --> F["🏷️ BIO Tags per Token"]
    style A fill:#4fc3f7,color:#000
    style C fill:#ef5350,color:#fff
    style D fill:#ba68c8,color:#fff
    style F fill:#81c784,color:#000
\`\`\`

For NER, we add a simple **classification head** on top of BERT. Each token gets a hidden representation from BERT, and the classification head predicts the entity label. During fine-tuning, both the head and BERT itself are updated to optimize for your NER task.

One subtlety: BERT uses **subword tokenization**. "Microsoft" might become "Micro" + "##soft". You need to align predictions back to the original words, typically by using the first subword's prediction.

#### 📚 Training Data Needed
The amazing thing: because BERT already knows so much about language, you need less task-specific data! Typically **5,000 to 50,000 labeled sentences** is enough for strong results.

#### 🎯 When to Use This?
BERT is your go-to for **maximum accuracy**. Domain-specific variants like **BioBERT** (biomedical) or **FinBERT** (finance) give even better results in specialized domains.

Let's examine the tradeoffs...`
        },
        {
          id: 16,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="flipCard" delay={0.1}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Strong context modeling</li>
                      <li>Performs well with moderate data</li>
                      <li>Pre-trained language knowledge</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.4}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Compute/latency heavy</li>
                      <li>Subword alignment adds complexity</li>
                      <li>Privacy/compliance considerations</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6d1e52',
          notes: `### 20) BERT Fine-Tuned for NER - Pros and Cons
BERT delivers impressive results but comes with real costs. Let's evaluate.

#### ✅ Pros
**Context modeling is exceptional**. BERT understands that "Apple" in "Apple released a new iPhone" is a company, while "Apple" in "I ate a delicious apple" is a fruit. This disambiguation ability is unprecedented in pre-BERT models.

**Moderate data yields strong results**. Transfer learning from pretraining means your 10,000 labeled sentences leverage knowledge from billions of words. You get more bang for your labeling buck.

BERT brings **vast pretrained knowledge**. It knows about grammar, semantics, world knowledge, and common sense. This background knowledge helps with rare entities and unusual phrasings.

#### ❌ Cons
**Compute and latency are significant**. BERT-base has 110 million parameters. Training requires GPUs. Inference at scale requires infrastructure. Budget accordingly!

**Subword tokenization adds complexity**. Your neat word-level labels need to be mapped to subword tokens and back. Edge cases arise with unusual tokenization. Libraries help, but it's another thing to get right.

**Privacy and compliance matter**. BERT was trained on internet text. In some domains (healthcare, finance), regulators want to know what data touched your model. Using public BERT might raise questions.

> 💡 Think of BERT as the "premium sedan" of NER. Superior performance, but higher cost and maintenance.

Let's look at BERT variants that optimize different tradeoffs...`
        }
      ]
    },
    {
      id: 'roberta-distilbert',
      title: 'RoBERTa / DistilBERT NER Models',
      slides: [
        {
          id: 17,
          title: '10) RoBERTa / DistilBERT NER Models',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="fadeIn" delay={0.1} duration={0.8}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}>
                          <strong>Model Type:</strong>
                          <MermaidPopover
                            title="RoBERTa vs DistilBERT"
                            diagram={`flowchart TB
    subgraph RoBERTa["🎯 RoBERTa"]
        R1["More Training Data"]
        R2["Longer Training"]
        R3["Dynamic Masking"]
        R1 --> R4["Higher Accuracy"]
    end
    subgraph DistilBERT["⚡ DistilBERT"]
        D1["Knowledge Distillation"]
        D2["6 Layers vs 12"]
        D3["40% Smaller"]
        D1 --> D4["2x Faster"]
    end
    style R4 fill:#81c784,color:#000
    style D4 fill:#4fc3f7,color:#000`}
                          />
                        </p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Transformer variants; RoBERTa (accuracy-optimized), DistilBERT (compressed for speed) with token classification.</span>
                    </div>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`from transformers import AutoTokenizer, AutoModelForTokenClassification`}</pre>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Same as BERT; fine-tune on labeled NER data; distillation handled in pretraining of DistilBERT.</span>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Balancing accuracy and latency; edge/real-time constraints; production cost optimization.</span>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6d4c1e',
          notes: `### 21) RoBERTa / DistilBERT NER Models
BERT was a breakthrough, but researchers quickly found ways to improve it! Let's explore two popular variants that make different tradeoffs.

#### 🔧 RoBERTa: Robustly Optimized BERT
Facebook's **RoBERTa** 👉 'roh-BER-tuh' asked: "What if we just trained BERT better?" They used more data (10x more!), trained longer, removed the Next Sentence Prediction task, and used dynamic masking.

\`\`\`mermaid
flowchart TB
    subgraph RoBERTa["🎯 RoBERTa"]
        R1["More Training Data"]
        R2["Longer Training"]
        R3["Dynamic Masking"]
        R1 --> R4["Higher Accuracy"]
    end
    subgraph DistilBERT["⚡ DistilBERT"]
        D1["Knowledge Distillation"]
        D2["6 Layers vs 12"]
        D3["40% Smaller"]
        D1 --> D4["2x Faster"]
    end
    style R4 fill:#81c784,color:#000
    style D4 fill:#4fc3f7,color:#000
\`\`\`

The result? Consistent improvements over BERT across NLP tasks, including NER. If you want maximum accuracy and have the compute budget, RoBERTa is often the better choice.

#### ⚡ DistilBERT: Knowledge Distillation
Hugging Face's **DistilBERT** 👉 'DISS-till-burt' asked the opposite question: "Can we get BERT-like performance with a smaller model?" They used **knowledge distillation** where a smaller "student" model learns to mimic the larger "teacher."

DistilBERT has only 6 layers instead of 12, making it **40% smaller** and **60% faster**. Yet it retains about 97% of BERT's performance! This makes it ideal for production deployments where latency matters.

#### 📚 Training Data Needed
Same as BERT: **5,000 to 50,000 labeled sentences**. The distillation magic happened during pretraining, not during your fine-tuning.

#### 🎯 When to Use Which?
Choose **RoBERTa** when accuracy is paramount and you have GPU resources. Choose **DistilBERT** for edge devices, real-time applications, or when you're paying per API call.

Let's compare the tradeoffs...`
        },
        {
          id: 18,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="scaleIn" delay={0.1}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Strong context modeling</li>
                      <li>Performs well with moderate data</li>
                      <li>Pre-trained language knowledge</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.3}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Compute/latency heavy</li>
                      <li>Subword alignment adds complexity</li>
                      <li>Privacy/compliance considerations</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#6d4c1e',
          notes: `### 22) RoBERTa / DistilBERT - Pros and Cons
These variants share BERT's architecture, so pros and cons are similar, with key differences.

#### ✅ Pros
**Context modeling remains excellent**. Both models inherit BERT's bidirectional attention. They understand context deeply, disambiguating entities effectively.

**Moderate data still works**. Transfer learning means your task-specific data goes further. 10,000 sentences can achieve strong results because the model brings pretrained knowledge.

**Pretrained language knowledge** helps with rare entities, unusual phrasings, and domain terminology. Even if you're fine-tuning on legal documents, the model already understands basic English!

#### ❌ Cons
**Compute and latency remain challenges**. RoBERTa is actually heavier than BERT! DistilBERT helps but still needs more resources than non-transformer approaches.

**Subword tokenization complexity persists**. Both models use similar tokenization schemes. You still need to handle alignment between subwords and your word-level labels.

**Privacy and compliance considerations** apply equally. Both models were pretrained on internet text. If data provenance matters in your domain, this requires attention.

#### 🎯 Key Differences
| Aspect | RoBERTa | DistilBERT |
|--------|---------|------------|
| Accuracy | Higher | ~97% of BERT |
| Speed | Same as BERT | 2x faster |
| Size | Same as BERT | 40% smaller |
| Best For | Maximum quality | Production/edge |

> 💡 Think of RoBERTa as the "race car" and DistilBERT as the "efficient hybrid." Same family, different priorities!

Now let's explore the cutting edge: LLM-based zero-shot NER...`
        }
      ]
    },
    {
      id: 'llm-zeroshot',
      title: 'LLM / Zero-Shot NER',
      slides: [
        {
          id: 19,
          title: '11) LLM / Zero-Shot NER',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="bounceIn" delay={0.1} duration={0.8}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-code" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}>
                          <strong>Model Type:</strong>
                          <MermaidPopover
                            title="LLM Zero-Shot NER"
                            diagram={`flowchart LR
    A["📄 Text + Prompt"] --> B["🤖 LLM"]
    B --> C["📝 Generated Output"]
    C --> D["🔍 Parse Entities"]
    D --> E["🏷️ Structured Results"]
    style A fill:#4fc3f7,color:#000
    style B fill:#ba68c8,color:#fff
    style C fill:#ffb74d,color:#000
    style E fill:#81c784,color:#000`}
                          />
                        </p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Large instruction-tuned LMs prompted for extraction (zero-/few-shot) or lightly fine-tuned (PEFT/LoRA).</span>
                    </div>
                    <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>{`prompt: "Extract person and organization names from this text: {text}"`}</pre>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Training Data Needed:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>None for zero-shot; few-shot examples in prompt; optional small labeled set for prompt-tuning.</span>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <div style={{ marginBottom: '30px', padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                        <p style={{ display: 'flex', alignItems: 'center', fontSize: '2rem' }}><strong>Best Use Case:</strong></p>
                      </div>
                      <span style={{ fontSize: '1.2rem' }}>Rapid prototyping, new schemas, low-data domains, complex instructions, multilingual scenarios.</span>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#3b1e6d',
          notes: `### 23) LLM / Zero-Shot NER
Welcome to the future of NER! Large Language Models like GPT-4, Claude, or Llama can extract entities **without any training data at all**. Just describe what you want!

#### 🔧 How It Works
Instead of training a model, you write a **prompt** that instructs the LLM to extract entities. The model uses its vast knowledge from pretraining to understand your instructions and identify relevant entities.

\`\`\`mermaid
flowchart LR
    A["📄 Text + Prompt"] --> B["🤖 LLM"]
    B --> C["📝 Generated Output"]
    C --> D["🔍 Parse Entities"]
    D --> E["🏷️ Structured Results"]
    style A fill:#4fc3f7,color:#000
    style B fill:#ba68c8,color:#fff
    style C fill:#ffb74d,color:#000
    style E fill:#81c784,color:#000
\`\`\`

A typical prompt might be: *"Extract all person names, organizations, and locations from the following text. Return the results as JSON with entity_type and entity_text fields."*

For **few-shot** learning, you add examples in the prompt: "Here's an example: 'John works at Google' → [{'type': 'PERSON', 'text': 'John'}, {'type': 'ORG', 'text': 'Google'}]". The LLM learns the pattern and applies it to new text!

#### 📚 Training Data Needed
**Zero for basic use!** That's the magic. For better results, you can add examples in the prompt (few-shot) or do lightweight fine-tuning with techniques like **LoRA** 👉 'LOR-uh' or prompt-tuning.

#### 🎯 When to Use This?
Perfect for **rapid prototyping**, when you're exploring a new domain and don't have labeled data yet. Also great for **complex schemas** that would be hard to define in traditional NER, or **multilingual** scenarios where you'd otherwise need multiple models.

Let's look at the tradeoffs...`
        },
        {
          id: 20,
          title: 'Pros and Cons',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="rotateIn" delay={0.1}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>No labeled data needed</li>
                      <li>Flexible schemas</li>
                      <li>Can reason and follow instructions</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="rotateIn" delay={0.4}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Hallucinations/inconsistency</li>
                      <li>Privacy/regulatory concerns</li>
                      <li>Higher cost/latency</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#3b1e6d',
          notes: `### 24) LLM / Zero-Shot NER - Pros and Cons
LLM-based NER is revolutionary but comes with important caveats. Let's be honest about the tradeoffs.

#### ✅ Pros
**No labeled data needed** is transformative. Traditional NER requires thousands of annotated examples. With LLMs, you can start extracting entities in minutes just by writing a good prompt!

**Schema flexibility** is unprecedented. Want to extract "potential risks," "competitive advantages," or "sentiment indicators"? Just describe them! Traditional NER would require defining a new label set and collecting training data.

LLMs can **reason and follow complex instructions**. "Extract the CEO's name only if they're mentioned in the context of a business decision" is perfectly valid. Try encoding that in a traditional NER model!

#### ❌ Cons
**Hallucinations are a real risk**. LLMs sometimes invent entities that aren't in the text, or misidentify entity boundaries. Consistency varies between runs. Always validate outputs!

**Privacy and regulatory concerns** are significant. Sending data to external API endpoints might violate compliance requirements. On-premise LLMs help but require significant infrastructure.

**Cost and latency** are substantially higher. A BERT model runs in milliseconds on a CPU. LLM API calls take seconds and cost money per token. For high-volume production, this matters!

> 💡 Think of LLM NER as "hiring a brilliant consultant": amazing flexibility and capability, but expensive, sometimes unreliable, and you need to supervise the work.

Now let's summarize everything we've learned to help you choose the right approach!`
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 21,
          title: 'Summary & Comparison',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <p style={{ fontSize: '2rem', marginBottom: '30px' }}>
                  A complete overview of NER approach selection, data requirements, performance characteristics, and deployment considerations
                </p>
              </GSAPAnimated>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ padding: '20px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <SvgIcon iconName="duo-map" sizeName="2x" darkModeInvert={true} />
                    <div>
                      <div style={{ fontWeight: 'bold', fontSize: '2rem' }}>Quick Selection Guide</div>
                      <div style={{ fontSize: '1.2rem', marginTop: '10px' }}>Match approach to your needs</div>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ padding: '20px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                    <div>
                      <div style={{ fontWeight: 'bold', fontSize: '2rem' }}>Data Needs Spectrum</div>
                      <div style={{ fontSize: '1.2rem', marginTop: '10px' }}>Training data requirements</div>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ padding: '20px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <SvgIcon iconName="duo-clock" sizeName="2x" darkModeInvert={true} />
                    <div>
                      <div style={{ fontWeight: 'bold', fontSize: '2rem' }}>Compute & Latency</div>
                      <div style={{ fontSize: '1.2rem', marginTop: '10px' }}>Inference speed comparison</div>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <div style={{ padding: '20px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <SvgIcon iconName="duo-rocket" sizeName="2x" darkModeInvert={true} />
                    <div>
                      <div style={{ fontWeight: 'bold', fontSize: '2rem' }}>Maintenance & Deployment</div>
                      <div style={{ fontSize: '1.2rem', marginTop: '10px' }}>Ongoing operational needs</div>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.6}>
                  <div style={{ padding: '20px', background: 'rgba(100, 181, 246, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '15px', gridColumn: 'span 2' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                    <div>
                      <div style={{ fontWeight: 'bold', fontSize: '2rem' }}>Deployment Tips</div>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>

            </div>
          ),
          backgroundColor: '#471d6f',
          notes: `### 25) Summary & Comparison - Overview
Congratulations! You've made it through all 11 NER approaches. Now let's bring it all together so you can make informed decisions for your projects.

#### 📋 What We'll Cover
In these summary slides, we'll consolidate everything into actionable guidance:

**Quick Selection Guide** helps you match your situation to the right approach. Have no data? Need maximum accuracy? Constrained on latency? We've got recommendations.

**Data Needs Spectrum** visualizes how much training data each approach requires. From zero (rules, LLMs) to tens of thousands (BiLSTM trained from scratch).

**Compute & Latency** compares inference speed and hardware requirements. Critical for production planning and cost estimation.

**Maintenance & Deployment** covers the ongoing operational burden. All models need attention, but the work differs dramatically.

**Deployment Tips** shares battle-tested advice from real production systems.

> 💡 Keep these summary slides as a reference guide! They capture the essence of choosing and deploying NER systems.

Let's start with the quick selection guide...`
        },
        {
          id: 22,
          title: 'Quick Selection Guide',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                  <SvgIcon iconName="duo-map" sizeName="3x" darkModeInvert={true} />
                  <div>
                    <p style={{ fontSize: '2rem' }}>Choose the right NER approach for your use case</p>
                  </div>
                </div>
              </GSAPAnimated>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', fontSize: '2rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ padding: '15px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '8px', borderLeft: '4px solid #4fc3f7' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>🚫 No training data, strict formats</div>
                    <div style={{ color: '#4fc3f7' }}>→ Rule-Based, Gazetteer</div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ padding: '15px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '8px', borderLeft: '4px solid #81c784' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>📊 Small data, stable schemas</div>
                    <div style={{ color: '#81c784' }}>→ CRF, spaCy</div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.35}>
                  <div style={{ padding: '15px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '8px', borderLeft: '4px solid #ffb74d' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>📈 Moderate data, need accuracy</div>
                    <div style={{ color: '#ffb74d' }}>→ BiLSTM+CRF, CNN+BiLSTM</div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.35}>
                  <div style={{ padding: '15px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '8px', borderLeft: '4px solid #ba68c8' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>🏆 Best possible accuracy</div>
                    <div style={{ color: '#ba68c8' }}>→ BERT, RoBERTa</div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.5}>
                  <div style={{ padding: '15px', background: 'rgba(240, 98, 146, 0.2)', borderRadius: '8px', borderLeft: '4px solid #f06292' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>⚡ Low latency / edge deployment</div>
                    <div style={{ color: '#f06292' }}>→ DistilBERT, optimized spaCy</div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <div style={{ padding: '15px', background: 'rgba(100, 181, 246, 0.2)', borderRadius: '8px', borderLeft: '4px solid #64b5f6' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>🆕 New schema / zero data</div>
                    <div style={{ color: '#64b5f6' }}>→ LLM Zero-/Few-Shot</div>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="bounceIn" delay={0.7}>
                <div style={{ marginTop: '25px', padding: '15px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', fontSize: '1.2rem' }}>
                  <strong>💡 Pro Tip:</strong> Start simple! Try rules or dictionaries first, then move to ML if needed.
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#471d6f',
          notes: `### 26) Quick Selection Guide
This is your decision tree for choosing an NER approach. Match your situation to the right technology!

#### 🎯 Decision Framework

**No training data + strict formats?** Use **Rule-Based or Gazetteer** approaches. When you know exactly what you're looking for (phone numbers, product codes, known entity lists), rules are unbeatable. Fast, predictable, zero ML needed.

**Small data + stable schemas?** Try **CRF or spaCy**. With 1,000-5,000 labeled examples and a well-defined entity set, these approaches deliver solid results without heavy compute requirements.

**Moderate data + accuracy focus?** Consider **BiLSTM+CRF or CNN+BiLSTM**. These neural approaches squeeze more performance from 5,000-50,000 examples, especially for complex entity types.

**Best possible accuracy + resources available?** Go with **BERT or RoBERTa**. When quality is paramount and you have GPU infrastructure, transformers deliver state-of-the-art results.

**Low latency / edge deployment?** Use **DistilBERT or optimized spaCy**. These compressed models balance accuracy with inference speed for production requirements.

**New schema / zero data?** Start with **LLM Zero-/Few-Shot**. When you're exploring or lack training data, LLMs get you started immediately.

#### 💡 The Golden Rule
**Start simple!** Many teams jump to transformers when regex would suffice. Try the simplest approach first, then escalate if needed.

Next, let's look at data requirements in detail...`
        },
        {
          id: 23,
          title: 'Data Needs Spectrum',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                  <SvgIcon iconName="duo-graduation-cap" sizeName="3x" darkModeInvert={true} />
                  <div>
                    <p style={{ fontSize: '2rem' }}>How much training data does each approach need?</p>
                  </div>
                </div>
              </GSAPAnimated>
              <div style={{ fontSize: '2rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ marginBottom: '25px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                      <div style={{ width: '400px', fontWeight: 'bold' }}>Rule-Based / Gazetteer</div>
                      <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg, #4fc3f7 1%, rgba(79, 195, 247, 0.1) 1%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px', border: '1px solid rgba(79, 195, 247, 0.3)' }}>
                        <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.2rem' }}>0 labeled examples</span>
                        <span style={{ fontSize: '1.2rem' }}>
                          ✓ Just write patterns and dictionaries by hand
                        </span>
                      </div>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ marginBottom: '25px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                      <div style={{ width: '400px', fontWeight: 'bold' }}>CRF / HMM</div>
                      <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg, #81c784 20%, rgba(129, 199, 132, 0.1) 20%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px', border: '1px solid rgba(129, 199, 132, 0.3)' }}>
                        <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.2rem' }}>1,000 - 5,000</span>
                        <span style={{ fontSize: '1.2rem' }}>
                          ✓ Good for simple, stable entity schemas
                        </span>
                      </div>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ marginBottom: '25px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                      <div style={{ width: '400px', fontWeight: 'bold' }}>Transformers (BERT)</div>
                      <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg, #ba68c8 35%, rgba(186, 104, 200, 0.1) 35%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px', border: '1px solid rgba(186, 104, 200, 0.3)' }}>
                        <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.2rem' }}>3,000 - 30,000</span>
                        <span style={{ fontSize: '1.2rem' }}>
                          ✓ Pre-trained, so needs less data than BiLSTM
                        </span>
                      </div>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.5}>
                  <div style={{ marginBottom: '25px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                      <div style={{ width: '400px', fontWeight: 'bold' }}>BiLSTM models</div>
                      <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg,rgb(129, 88, 25) 60%, rgba(255, 183, 77, 0.1) 60%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px', border: '1px solid rgba(255, 183, 77, 0.3)' }}>
                        <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.2rem' }}>5,000 - 50,000</span>
                        <span style={{ fontSize: '1.2rem' }}>
                          ✓ Trained from scratch, needs more examples
                        </span>
                      </div>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.6}>
                  <div style={{ marginBottom: '25px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                      <div style={{ width: '400px', fontWeight: 'bold' }}>Zero-shot LLMs</div>
                      <div style={{ flex: 1, height: '35px', background: 'linear-gradient(90deg, #f06292 2%, rgba(240, 98, 146, 0.1) 2%)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: '12px', paddingRight: '12px', border: '1px solid rgba(240, 98, 146, 0.3)' }}>
                        <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '1.2rem' }}>0 - 10 in prompt</span>
                        <span style={{ fontSize: '1.2rem' }}>
                          ✓ Few-shot examples given directly in the prompt
                        </span>
                      </div>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.8}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginTop: '25px' }}>
                  <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '8px', borderLeft: '3px solid #81c784' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '5px', fontSize: '2rem' }}>✅ Quality {'>'} Quantity</div>
                    <div style={{ fontSize: '1.2rem' }}>Clean, consistent labels beat larger noisy datasets</div>
                  </div>
                  <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '8px', borderLeft: '3px solid #ffb74d' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '5px', fontSize: '2rem' }}>🔄 Active Learning</div>
                    <div style={{ fontSize: '1.2rem' }}>Start small, label strategically, iterate</div>
                  </div>
                  <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '8px', borderLeft: '3px solid #ba68c8' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '5px', fontSize: '2rem' }}>📊 Balance Mix</div>
                    <div style={{ fontSize: '1.2rem' }}>Diverse examples across all entity types</div>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#471d6f',
          notes: `### 27) Data Needs Spectrum
This visualization helps you understand how much labeled data you need for each approach. The bar lengths represent relative data requirements.

#### 📊 The Spectrum Explained

**Rule-Based / Gazetteer: 0 examples**
You need zero labeled training data! You write patterns and populate dictionaries manually. The "data" is your domain knowledge encoded as rules.

**CRF / HMM: 1,000 - 5,000 sentences**
Classical ML needs modest amounts. With careful annotation of a thousand sentences, you can train a useful CRF. Five thousand gives you a solid model for many domains.

**Transformers (BERT): 3,000 - 30,000 sentences**
Wait, transformers need LESS data than BiLSTMs? Yes! Transfer learning from pretraining means BERT already knows language. Your task-specific data just teaches it your entity schema.

**BiLSTM models: 5,000 - 50,000 sentences**
Neural networks trained from scratch are data-hungry. Without pretraining, you need more examples to learn both language understanding AND your specific task.

**Zero-shot LLMs: 0 - 10 in prompt**
Back to minimal data! LLMs work with zero examples (zero-shot) or just a handful of examples in the prompt (few-shot). The data is in the prompt, not a training set.

#### 💡 Key Insights
**Quality beats quantity**. 1,000 carefully labeled examples outperform 10,000 noisy ones. Invest in annotation quality.

**Active learning** is your friend. Don't label randomly! Use the model to find uncertain examples, label those, and iterate.

**Balance your entity mix**. If 90% of your training data is PERSON entities, the model will struggle with ORGANIZATION. Ensure representation across all types.

Now let's talk compute and latency...`
        },
        {
          id: 24,
          title: 'Compute & Latency',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <div style={{ fontSize: '2rem' }}>
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
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '1.2rem' }}>
                        <td style={{ padding: '10px' }}>Rule-Based / Gazetteer</td>
                        <td style={{ padding: '10px', color: '#4fc3f7', fontWeight: 'bold' }}>&lt;1ms ⚡</td>
                        <td style={{ padding: '10px' }}>No</td>
                        <td style={{ padding: '10px' }}>~10MB</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '1.2rem' }}>
                        <td style={{ padding: '10px' }}>CRF / HMM</td>
                        <td style={{ padding: '10px', color: '#81c784', fontWeight: 'bold' }}>5-10ms</td>
                        <td style={{ padding: '10px' }}>No</td>
                        <td style={{ padding: '10px' }}>~50MB</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '1.2rem' }}>
                        <td style={{ padding: '10px' }}>BiLSTM + CRF</td>
                        <td style={{ padding: '10px', color: '#ffb74d', fontWeight: 'bold' }}>20-50ms</td>
                        <td style={{ padding: '10px' }}>Helpful</td>
                        <td style={{ padding: '10px' }}>~200MB</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '1.2rem' }}>
                        <td style={{ padding: '10px' }}>DistilBERT</td>
                        <td style={{ padding: '10px', color: '#ba68c8', fontWeight: 'bold' }}>20-100ms</td>
                        <td style={{ padding: '10px' }}>Recommended</td>
                        <td style={{ padding: '10px' }}>~250MB</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', fontSize: '1.2rem' }}>
                        <td style={{ padding: '10px' }}>BERT / RoBERTa</td>
                        <td style={{ padding: '10px', color: '#f06292', fontWeight: 'bold' }}>50-200ms</td>
                        <td style={{ padding: '10px' }}>Required</td>
                        <td style={{ padding: '10px' }}>~450MB</td>
                      </tr>
                      <tr style={{ fontSize: '1.2rem' }}>
                        <td style={{ padding: '10px' }}>LLMs (GPT-4, etc.)</td>
                        <td style={{ padding: '10px', color: '#ef5350', fontWeight: 'bold' }}>500ms - 5s+ 🐢</td>
                        <td style={{ padding: '10px' }}>API / Large GPU</td>
                        <td style={{ padding: '10px' }}>~GB+ / API</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.5}>
                <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '8px', fontSize: '1.2rem' }}>
                  <strong>⚡ Optimization Tips:</strong> Use ONNX runtime, model quantization, and batching to reduce latency by 2-5x
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#471d6f',
          notes: `### 28) Compute & Latency
This table is critical for production planning. Latency requirements often determine which approaches are feasible.

#### ⚡ Speed Comparison

**Rule-Based / Gazetteer: <1ms**
Blazingly fast! Pattern matching is essentially string operations. Perfect for high-throughput pipelines where every millisecond counts.

**CRF / HMM: 5-10ms**
Still very fast on CPU. The Viterbi algorithm is efficient. For most applications, this latency is imperceptible to users.

**BiLSTM + CRF: 20-50ms**
Now we're entering territory where batching helps. GPU acceleration is helpful but not required. Good for batch processing.

**DistilBERT: 20-100ms**
The compressed transformer is surprisingly fast! Can run on CPU for low-volume use, but GPU helps for production scale.

**BERT / RoBERTa: 50-200ms**
Full transformers need GPUs for production. CPU inference is possible but slow. Plan your infrastructure accordingly.

**LLMs: 500ms - 5s+**
The slowest by far! API latency, token generation, network overhead. Only suitable for low-volume or async workloads.

#### 🛠️ Optimization Strategies
**ONNX Runtime** can speed up PyTorch models by 2-3x through graph optimization and kernel fusion.

**Quantization** (INT8 instead of FP32) reduces memory and speeds up computation with minimal accuracy loss.

**Batching** amortizes overhead across multiple inputs, crucial for high-throughput scenarios.

Let's discuss ongoing maintenance requirements...`
        },
        {
          id: 25,
          title: 'Maintenance & Deployment',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px' }}>
                  <SvgIcon iconName="duo-rocket" sizeName="3x" darkModeInvert={true} />
                  <div>
                    <p style={{ fontSize: '2rem' }}>Ongoing operational requirements</p>
                  </div>
                </div>
              </GSAPAnimated>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: '2rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ padding: '20px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '10px' }}>
                    <h4 style={{ color: '#4fc3f7', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span>📋</span> Rules & Gazetteers
                    </h4>
                    <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                      <li>Frequent manual updates</li>
                      <li>Domain expert involvement</li>
                      <li>Version control for patterns</li>
                      <li>Easy to debug & explain</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.2}>
                  <div style={{ padding: '20px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '10px' }}>
                    <h4 style={{ color: '#81c784', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span>📊</span> Classical ML (CRF/HMM)
                    </h4>
                    <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                      <li>Periodic retraining (monthly/quarterly)</li>
                      <li>Feature pipeline maintenance</li>
                      <li>Model versioning</li>
                      <li>A/B testing frameworks</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ padding: '20px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '10px' }}>
                    <h4 style={{ color: '#ba68c8', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span>🧠</span> Transformers
                    </h4>
                    <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                      <li>Retrain on domain shifts</li>
                      <li>GPU infrastructure costs</li>
                      <li>Model registry & serving</li>
                      <li>Monitoring for drift</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <div style={{ padding: '20px', background: 'rgba(240, 98, 146, 0.2)', borderRadius: '10px' }}>
                    <h4 style={{ color: '#f06292', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span>🤖</span> LLMs
                    </h4>
                    <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                      <li>Prompt versioning & testing</li>
                      <li>Output parsing & validation</li>
                      <li>Rate limiting & cost control</li>
                      <li>Guardrails for edge cases</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#471d6f',
          notes: `### 29) Maintenance & Deployment
Production NER isn't "set and forget." Each approach brings different operational burdens.

#### 📋 Rules & Gazetteers
The maintenance is **manual but transparent**. When new patterns emerge or entities change, you update the rules. Domain experts can directly edit dictionaries. Git tracks all changes. When something goes wrong, you can trace exactly why.

The downside? It's **labor-intensive**. Someone needs to monitor for gaps and update accordingly. For rapidly evolving domains, this becomes a full-time job.

#### 📊 Classical ML (CRF/HMM)
Expect **periodic retraining**. As your domain evolves, the model's accuracy degrades. Monthly or quarterly retraining keeps performance up.

You need to maintain the **feature extraction pipeline**. Changes in tokenization, new feature ideas, dependency updates. All need testing and validation.

#### 🧠 Transformers
**Domain shifts** require attention. A model trained on formal text may struggle when your users start using slang. Monitor performance and retrain as needed.

**Infrastructure costs** are ongoing. GPU servers, model serving platforms, storage for large models. Budget for this before committing.

#### 🤖 LLMs
**Prompt engineering is iterative**. Your carefully crafted prompts might break with API updates. Version control prompts and test regularly.

**Output parsing** needs robust handling. LLMs don't always follow your exact format. Build validation and fallback logic.

**Cost control** matters at scale. Token costs add up fast. Implement caching, rate limiting, and usage monitoring.

Finally, let's cover deployment best practices...`
        },
        {
          id: 26,
          title: 'Deployment Tips',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', fontSize: '2rem' }}>
                <GSAPAnimated animation="flipCard" delay={0.1}>
                  <div style={{ padding: '18px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontSize: '1.5em' }}>🔗</span>
                    <div>
                      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Combine Methods</div>
                      <div style={{ fontSize: '1.2rem' }}>Rules + ML hybrid outperforms either alone. Use rules for known patterns, ML for fuzzy matching.</div>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.2}>
                  <div style={{ padding: '18px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontSize: '1.5em' }}>🔄</span>
                    <div>
                      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Add Entity Linking</div>
                      <div style={{ fontSize: '1.2rem' }}>Normalize entities to canonical forms. Link to knowledge bases (Wikidata, internal DBs).</div>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.3}>
                  <div style={{ padding: '18px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontSize: '1.5em' }}>📈</span>
                    <div>
                      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Monitor for Drift</div>
                      <div style={{ fontSize: '1.2rem' }}>Text evolves! Track prediction confidence, flag low-confidence outputs for review.</div>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.4}>
                  <div style={{ padding: '18px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontSize: '1.5em' }}>🔒</span>
                    <div>
                      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Privacy Compliance</div>
                      <div style={{ fontSize: '1.2rem' }}>PII detection needs special handling. Consider on-premise for sensitive data.</div>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.5}>
                  <div style={{ padding: '18px', background: 'rgba(240, 98, 146, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontSize: '1.5em' }}>⚡</span>
                    <div>
                      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Quantize for Edge</div>
                      <div style={{ fontSize: '1.2rem' }}>INT8 quantization cuts size 4x with minimal accuracy loss. Essential for mobile/edge.</div>
                    </div>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.6}>
                  <div style={{ padding: '18px', background: 'rgba(100, 181, 246, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ fontSize: '1.5em' }}>🧪</span>
                    <div>
                      <div style={{ fontWeight: 'bold', marginBottom: '5px' }}>Test Extensively</div>
                      <div style={{ fontSize: '1.2rem' }}>Build diverse test sets. Include edge cases, adversarial examples, and domain-specific text.</div>
                    </div>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="bounceIn" delay={0.8}>
                <div style={{ marginTop: '25px', padding: '15px', background: 'rgba(100, 181, 246, 0.3)', borderRadius: '8px', textAlign: 'center', fontSize: '1.2rem' }}>
                  <strong>🎯 Remember:</strong> The best NER system is the one that works reliably in YOUR production environment!
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#471d6f',
          notes: `### 30) Deployment Tips
Let's close with battle-tested advice for production NER systems. These tips come from real-world experience.

#### 🔗 Combine Methods
Don't pick just one approach! The best production systems use **hybrid architectures**. Rules catch known patterns with 100% precision. ML handles the fuzzy, variable cases. Together, they're stronger than either alone.

For example: use regex for phone numbers, a dictionary for known company names, and BERT for everything else. The rule-based matches can also provide training signal for the ML model!

#### 🔄 Add Entity Linking
NER gives you mentions; **entity linking** gives you meaning. "Apple" might appear 50 times as different surface forms (Apple Inc., Apple Computer, AAPL). Entity linking normalizes these to a single canonical entry.

Connect to knowledge bases like Wikidata for public entities, or your internal database for domain-specific ones. This enables downstream analytics and knowledge graph construction.

#### 📈 Monitor for Drift
Language evolves constantly! New products, changing terminology, emerging slang. Your model's accuracy will **degrade over time**. Track prediction confidence scores. Flag low-confidence outputs for human review. Build feedback loops to catch errors.

#### 🔒 Privacy Compliance
NER often extracts **sensitive information**: names, addresses, medical conditions. Understand your regulatory environment (GDPR, HIPAA, etc.). Consider on-premise deployment for maximum control. Implement data minimization and retention policies.

#### ⚡ Quantize for Edge
If deploying to mobile or edge devices, **INT8 quantization** is essential. It reduces model size by 4x with typically <1% accuracy loss. Combined with ONNX runtime, you can run transformer models on smartphones!

#### 🧪 Test Extensively
Build comprehensive test suites. Include **edge cases** (unusual names, mixed languages), **adversarial examples** (attempts to confuse the model), and **domain-specific text** (your actual production data).

> 🎯 **Final Thought**: The best NER system isn't the most sophisticated—it's the one that works reliably in YOUR production environment!

Thank you for joining this journey through NER approaches!`
        }
      ]
    }
  ]
};
