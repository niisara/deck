import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { AnimatedEmoji } from '../components/AnimatedEmoji';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import mermaid from 'mermaid';

const MermaidPopover = ({ diagram, title }: { diagram: string; title?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [renderedSvg, setRenderedSvg] = useState<string>('');
  const mermaidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && diagram) {
      const renderDiagram = async () => {
        try {
          mermaid.initialize({
            startOnLoad: false,
            theme: 'dark',
            securityLevel: 'loose',
          });
          const id = `mermaid-${Date.now()}`;
          const { svg } = await mermaid.render(id, diagram);
          setRenderedSvg(svg);
        } catch (error) {
          console.error('Error rendering Mermaid diagram:', error);
          setRenderedSvg('<p style="color: #ff6b6b;">Error rendering diagram</p>');
        }
      };
      renderDiagram();
    }
  }, [isOpen, diagram]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const modal = isOpen ? (
    <div
      onClick={handleClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2147483647, // Maximum z-index value
        padding: '20px',
        margin: 0,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: '#1e1e1e',
          borderRadius: '8px',
          padding: '24px',
          maxWidth: '900px',
          maxHeight: '85vh',
          overflow: 'auto',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.7)',
          position: 'relative',
        }}
      >
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '32px',
            height: '32px',
            padding: 0,
            backgroundColor: '#ff5252',
            color: '#fff',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
          aria-label="Close"
        >
          ×
        </button>
        {title && (
          <h3 style={{ marginTop: 0, marginBottom: '20px', marginRight: '40px', color: '#fff' }}>
            {title}
          </h3>
        )}
        <div
          ref={mermaidRef}
          style={{
            backgroundColor: '#2d2d2d',
            padding: '20px',
            borderRadius: '4px',
            overflow: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '200px',
          }}
          dangerouslySetInnerHTML={{ __html: renderedSvg }}
        />
        <button
          onClick={handleClose}
          style={{
            marginTop: '20px',
            padding: '12px 24px',
            backgroundColor: '#4fc3f7',
            color: '#000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
            fontSize: '14px',
            width: '100%',
          }}
        >
          Close
        </button>
      </div>
    </div>
  ) : null;

  return (
    <>
      <span
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(true);
        }}
        style={{
          marginLeft: '8px',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          verticalAlign: 'middle',
          opacity: 0.7,
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
      >
        <SvgIcon iconName="duo-diagram-project" sizeName="sm" />
      </span>
      {modal && createPortal(modal, document.body)}
    </>
  );
};

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
          center: true,
          title: '9 Custom NER Training Tips for Domain-Specific Use Cases',
          content: (
            <div>
              <GSAPAnimated animation="scaleIn" duration={1} delay={0.2}>
                <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '30px', fontSize: '36px' }}>
                  <SvgIcon iconName="duo-brain" sizeName="2x" darkModeInvert={true} />
                  Cheat sheets for practical, high-accuracy NER in specialized domains
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.8}>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </GSAPAnimated>
            </div>
          ),
          backgroundImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
          notes: `### 9 Custom NER Training Tips for Domain-Specific Use Cases
Welcome everyone! Today we're going to explore something really exciting in the world of Natural Language Processing, or NLP. We'll be talking about **Named Entity Recognition**, commonly called NER.
#### 🎯 What is NER?
Before we dive in, let me explain what NER actually means. Imagine you're reading a news article and you want a computer to automatically highlight all the names of people, companies, locations, and dates mentioned in that text. That's exactly what NER does! It's like giving a computer a highlighter and teaching it which words are "special" or "important" in a particular way.
For example, in the sentence "Apple announced a new iPhone in India", a NER system would identify "Apple" as a company, "iPhone" as a product, and "India" as a location. Pretty cool, right?
#### 🏥 Why "Domain-Specific"?
Now, here's the catch. The NER systems you might find online are trained on general text like news articles. But what if you're working in healthcare and need to identify drug names? Or in legal documents where you need to find contract clauses? That's where **domain-specific** NER comes in. We need to customize these systems to understand the special vocabulary and patterns in your specific field.
Think of it like this: a general doctor knows a lot about medicine, but if you have a heart problem, you'd want to see a cardiologist who *specializes* in hearts. Similarly, we want NER models that specialize in our domain.
Over the next few slides, I'll share 9 practical tips that will help you build high-accuracy NER systems for your specific use cases. Let's get started!`
        },
        {
          id: 2,
          title: 'What You\'ll Learn',
          icon: { name: 'duo-graduation-cap' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPStaggerList stagger={0.2} duration={0.6}>
                <div style={{ fontSize: '1em' }}>
                  <ul style={{ lineHeight: '' }}>
                    <li><strong>9 actionable tips</strong> for building domain-specific NER models</li>
                  </ul>
                </div>
                <div style={{ fontSize: '1em' }}>
                  <ul style={{ lineHeight: '' }}>
                    <li><strong>Cheat-sheet structure</strong> per tip: Goal, How It Works, When to Use, Steps, Pros, Cons</li>
                  </ul>
                </div>
                <div style={{ fontSize: '1em' }}>
                  <ul style={{ lineHeight: '' }}>
                    <li><strong>Summary and next steps</strong> for implementation</li>
                  </ul>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#2d4a6f',
          notes: `### What You'll Learn
Let me give you a quick roadmap of what we'll cover today so you know exactly what to expect.
#### 📚 The Structure
We're going to walk through **9 actionable tips** for building domain-specific NER models. These aren't just theoretical concepts; they're practical techniques that you can start using right away in your projects.
For each tip, I'll use a consistent **cheat-sheet format** to make it easy to follow along and refer back later. Each tip will cover:
- **Goal**
- **How It Works**
- **When to Use**
- **Steps**
- **Pros and Cons**
At the end, we'll wrap up with a **summary and concrete next steps** so you can go from learning to doing.
`
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
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Goal</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Boost recall and speed up labeling with authoritative entity lists.</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>
                    How It Works
                    <MermaidPopover
                      title="Entity Dictionary Flow"
                      diagram={`flowchart LR
    A["📋 Entity List"] --> B["🔍 Pattern Matcher"]
    B --> C["📄 Raw Text"]
    C --> D["✨ Pre-tagged Text"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`}
                    />
                  </h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Use curated gazetteers/ontologies (names, codes, aliases) to pre-tag text, add features, or generate weak labels.</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Limited labeled data, high domain jargon, recall-critical tasks.</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a3a52',
          notes: `### Tip 1 - Build a Domain-Specific Entity Dictionary
Our first tip is all about building a **domain-specific entity dictionary**. This might sound technical, but it's actually a very intuitive concept.
#### 📖 What's an Entity Dictionary?
Think of an entity dictionary like a master list or a phone book for your domain. If you're working in healthcare, this might be a list of all drug names, disease names, and medical procedures. If you're in finance, it could be company names, stock tickers, and financial terms.
This list is sometimes called a **gazetteer** (fancy word, I know!) or an **ontology** if it also includes relationships between terms.
#### 🎯 The Goal
The main goal here is to **boost recall**, which means finding more of the entities we care about, and to **speed up the labeling process**. If you already have a list of known entities, you can automatically pre-tag them in your text before human reviewers even look at it!
#### ⚙️ How It Works
\`\`\`mermaid
flowchart LR
    A["📋 Entity List"] --> B["🔍 Pattern Matcher"]
    B --> C["📄 Raw Text"]
    C --> D["✨ Pre-tagged Text"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
You take your curated list, run it through a pattern matcher, and it highlights all occurrences in your text automatically. Simple, right?
#### 🕐 When to Use This?
This approach works best when you have **limited labeled data** to start with, when your domain has lots of **specialized jargon** that general NER models won't recognize, or when missing entities (low recall) is your biggest problem.
Let's look at the specific steps next.`
        },
        {
          id: 4,
          title: 'Steps',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPStaggerList stagger={0.15} duration={0.6}>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }}>
                    <li>Aggregate sources (docs, catalogs, codes, ontologies)</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={2}>
                    <li>Normalize (casefold, stemming/lemmatization, canonical forms, aliases)</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={3}>
                    <li>Deduplicate, type each entry, track versions</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={4}>
                    <li>Integrate as pre-annotations, matchers, or distant supervision</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={5}>
                    <li>Evaluate precision/recall; add disambiguation and stoplists</li>
                  </ol>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1a3a52',
          notes: `### Tip 1 - Steps
Now let's walk through the practical steps to build your entity dictionary.
#### Step 1: Aggregate Your Sources
Start by gathering entity names from everywhere you can find them. This might include internal documents, product catalogs, medical coding systems like ICD-10 or SNOMED, or industry-standard ontologies. Cast a wide net here!
#### Step 2: Normalize Everything
This is crucial. The word "COVID-19" might appear as "Covid-19", "covid19", "SARS-CoV-2", or even "coronavirus" in your text. You need to **normalize** these variations so your matcher can find them all. This includes making everything lowercase (called casefolding), handling different word forms (stemming), and tracking all the aliases or synonyms for each entity.
#### Step 3: Deduplicate and Organize
Clean up your list by removing duplicates, assign each entry to an entity type (like DRUG, DISEASE, PERSON), and importantly, **track versions**. Your dictionary will evolve over time, and you want to know which version was used for which dataset.
#### Step 4: Integrate Into Your Pipeline
Now put it to work! You can use your dictionary to automatically pre-annotate text before human review, as features fed into your ML model, or for **distant supervision** where matches automatically become training labels (though be careful with this one; it can be noisy).
#### Step 5: Evaluate and Refine
Finally, measure how well it's working. Are you getting too many false matches (low precision)? Add a **stoplist** of terms to ignore. Are some entities too ambiguous? Add disambiguation rules.
Now let's look at the trade-offs of this approach.`
        },
        {
          id: 5,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                  <h4>Pros</h4>
                </div>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Rapid recall gains</li>
                  <li>Accelerates annotation</li>
                  <li>Domain control</li>
                </ul>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                  <h4>Cons</h4>
                </div>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Maintenance overhead</li>
                  <li>Ambiguity can raise false positives</li>
                  <li>May miss contextual variants</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a3a52',
          notes: `### Tip 1 - Pros & Cons
Let's be honest about the trade-offs with entity dictionaries.
#### ✅ Pros
The good stuff: First, you get **rapid recall gains**. If a drug name is in your dictionary, you'll catch it every time it appears. Second, it **accelerates your annotation process** dramatically. Instead of annotators searching through text for entities, they're just reviewing and correcting pre-highlighted suggestions. Third, you maintain **domain control**; you decide exactly what should and shouldn't be recognized.
#### ⚠️ Cons
The problems: **Maintenance overhead** is real. New drugs get approved, companies get renamed, and your dictionary needs constant updates. **Ambiguity causes false positives**. The word "Apple" could be a fruit or a company; the word "Mercury" could be a planet, a car brand, or a chemical element. Your dictionary can't tell the difference without context. Finally, dictionaries **miss contextual variants**. If someone misspells a drug name or uses an abbreviation you haven't seen, the dictionary won't catch it.
#### 💡 Real-World Example
Imagine you're building a NER system for financial news. Your dictionary has "Apple" as a company. But the sentence "She bought an apple from the store" will get incorrectly tagged. That's why dictionaries are often a *starting point*, not the complete solution.
> 💭 Think about it: What entities in your domain might have this ambiguity problem?
Ready for Tip 2? Let's talk about creating high-quality training data, which is where the real magic happens.`
        }
      ]
    },
    {
      id: 'tip-2',
      title: 'Tip 2: Create High-Quality Annotated Training Data',
      slides: [
        {
          id: 6,
          title: 'Tip 2: Create High-Quality Annotated Training Data',
          icon: { name: 'duo-pen-to-square' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Goal</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Provide reliable supervision for entity types and boundaries.</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Expert human annotations with QA, double-labeling, and adjudication form a gold standard.</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>New domain/schema; training from scratch or fine-tuning.</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2d5016',
          notes: `### Tip 2 - Create High-Quality Annotated Training Data
Now we're getting to something fundamental. If Tip 1 was about building a helpful shortcut, Tip 2 is about creating the **gold standard** that your model will learn from.
#### 🎯 The Goal
We want to provide **reliable supervision** for our model. This means teaching it exactly what each entity type looks like, where entities start and end (the boundaries), and how to distinguish between similar-looking things.
Think of it like teaching a child to read. You can't just hand them a book; you need to sit with them, point to words, and patiently explain "this is an 'A', this is a 'B'." That's what annotation is for machine learning.
#### ⚙️ How It Works
High-quality annotated data comes from **human experts** who carefully label text. But here's the key: it's not just one person labeling. We use quality assurance processes like **double-labeling** (two people label the same text) and **adjudication** (a third person resolves disagreements). This creates what we call a **gold standard** dataset.
\`\`\`mermaid
flowchart TB
    A["📄 Raw Text"] --> B["👤 Annotator 1"]
    A --> C["👤 Annotator 2"]
    B --> D["⚖️ Adjudicator"]
    C --> D
    D --> E["🏆 Gold Standard"]
    style E fill:#ffd700,color:#000
\`\`\`
#### 🕐 When to Use This?
You need high-quality annotation when you're starting fresh in a new domain, when you have a new entity schema, or when you're training or fine-tuning a model from scratch. Basically, whenever you need your model to *really* understand your data.
Let's look at how to actually do this.`
        },
        {
          id: 7,
          title: 'Steps',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPStaggerList stagger={0.15} duration={0.6}>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }}>
                    <li>Define entity schema with examples and counter-examples</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={2}>
                    <li>Sample a representative corpus (sources, time ranges, formats)</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={3}>
                    <li>Train annotators; run calibration rounds</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={4}>
                    <li>Double-annotate 10–20%; adjudicate; measure IAA (F1/Kappa)</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={5}>
                    <li>Split gold/dev/test; document decisions</li>
                  </ol>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#2d5016',
          notes: `### Tip 2 - Steps
Let me walk you through how to create a solid annotation pipeline.
#### Step 1: Define Your Entity Schema
Before anyone starts labeling, you need a crystal-clear **schema**. This is your rulebook that defines what each entity type means, with examples and **counter-examples** (things that look like entities but aren't). For instance: "'Aspirin' is a DRUG, but 'aspirin therapy' as a concept is NOT a DRUG."
#### Step 2: Sample a Representative Corpus
Don't just grab random documents. Make sure your sample includes variety: different sources, different time periods, different writing styles, different levels of difficulty. If your model only sees easy examples during training, it will struggle with hard ones later.
#### Step 3: Train Your Annotators
Never assume annotators will just "figure it out." Run **calibration rounds** where everyone labels the same text, then compare notes. This reveals misunderstandings early. Keep refining until everyone interprets the guidelines consistently.
#### Step 4: Double-Annotate and Measure Agreement
Have two people independently label 10-20% of your data. Then measure **Inter-Annotator Agreement (IAA)** using metrics like F1 or Cohen's Kappa. If agreement is low, your guidelines probably need work. An IAA F1 above 0.8 is typically considered good.
#### Step 5: Split and Document
Finally, split your gold data into training, development (dev), and test sets. The test set is sacred; never train on it! Document every decision you made so future team members understand the dataset.
Now let's honestly assess the trade-offs.`
        },
        {
          id: 8,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                  <h4>Pros</h4>
                </div>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Higher model ceiling</li>
                  <li>Trustworthy eval</li>
                  <li>Reusable assets</li>
                </ul>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                  <h4>Cons</h4>
                </div>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Costly</li>
                  <li>Time-consuming</li>
                  <li>Requires expert availability</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#2d5016',
          notes: `### Tip 2 - Pros & Cons
Let's weigh the benefits against the costs of high-quality annotation.
#### ✅ Pros
The good stuff: With quality data, you get a **higher model ceiling**. Your model can only be as good as its training data, so better data means a better possible model. You also get **trustworthy evaluation**. If your test set is noisy, you can't trust your metrics; are you improving the model or just fitting to annotation errors? Finally, annotated data is a **reusable asset**. You can use it to train new model architectures, benchmark different approaches, or fine-tune other models.
#### ⚠️ Cons
The problems: Good annotation is **costly**. Expert annotators don't come cheap, and the process takes time. It's also **time-consuming**; depending on complexity, an annotator might only label a few hundred examples per hour. And you need **expert availability**. For medical or legal NER, you might need actual doctors or lawyers, and their time is precious and expensive.
#### 💰 A Cost-Benefit Perspective
Here's a useful way to think about it: cheap, low-quality labels lead to a model that makes mistakes. Those mistakes cost money to fix downstream, whether through manual review, customer complaints, or missed insights. Investing upfront in quality often saves money long-term.
> 🤔 Question to consider: In your domain, what would be the cost of a missed entity versus a false positive? This helps you decide how much to invest in annotation quality.
Speaking of quality, our next tip is about keeping that quality *consistent* across your whole team.`
        }
      ]
    },
    {
      id: 'tip-3',
      title: 'Tip 3: Use Consistent Annotation Guidelines',
      slides: [
        {
          id: 9,
          title: 'Tip 3: Use Consistent Annotation Guidelines',
          icon: { name: 'duo-clipboard-list' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Goal</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Reduce label noise and ensure reproducibility across annotators.</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>A clear style guide defines boundaries, inclusion/exclusion, and tie-breakers with examples.</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Multiple annotators, long projects, or outsourced labeling.</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#4a4e69',
          notes: `### Tip 3 - Use Consistent Annotation Guidelines
Now, Tip 2 was about *having* good data. Tip 3 is about *keeping* it good, especially when multiple people are involved.
#### 🎯 The Goal
We want to **reduce label noise** and ensure **reproducibility**. Label noise is when the same text gets labeled differently by different people, or even by the same person on different days! This noise directly hurts your model because it's learning from inconsistent examples.
#### 📖 A Real Problem
Imagine you're labeling "Dr. Sarah Chen" in a medical document. Should you include "Dr."? Is "Sarah" a separate FIRST_NAME entity or part of the full PERSON entity? Should you label just "Chen" or the whole thing? Without clear guidelines, different annotators will make different choices. And that inconsistency becomes noise in your training data.
#### ⚙️ How It Works
The solution is a **style guide** or **annotation guidelines document** that explicitly answers these edge cases. It defines:
- Where entities start and end (boundaries)
- What to include vs. exclude
- How to handle tie-breaker situations
- Lots of worked examples
Think of it like a grammar rulebook, but for labeling entities.
#### 🕐 When to Use This?
This becomes critical when you have **multiple annotators**, when projects run for a **long time** (months or years), or when you're **outsourcing** labeling to contractors who aren't domain experts. Basically, anytime there's a risk of inconsistency.
Let's see what goes into good guidelines.`
        },
        {
          id: 10,
          title: 'Steps',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPStaggerList stagger={0.15} duration={0.6}>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }}>
                    <li>Write rules for boundaries (titles, punctuation, units, hyphens)</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={2}>
                    <li>Specify entity linking rules and overlapping entities policy</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={3}>
                    <li>Add tricky-case examples and decision trees</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={4}>
                    <li>Maintain a changelog; communicate updates</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={5}>
                    <li>Audit samples weekly; monitor IAA</li>
                  </ol>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#4a4e69',
          notes: `### Tip 3 - Steps
Here's how to create and maintain effective annotation guidelines.
#### Step 1: Write Boundary Rules
This is often where disagreements happen. Explicitly state: Do you include titles like "Dr." or "Mr."? Do you include trailing punctuation? How do you handle units like "500 mg"? Is it "500" (DOSAGE) + "mg" (UNIT) or one combined entity? What about hyphenated terms like "COVID-19-related"?
Write it down. Every. Single. Rule.
#### Step 2: Specify Entity Linking and Overlaps
Sometimes the same span could be multiple entity types. "Apple CEO Tim Cook" could have "Apple" (ORG), "CEO" (TITLE), and "Tim Cook" (PERSON). What if "Apple CEO" is also a meaningful unit? Your guidelines should specify how to handle these overlapping or nested entities.
#### Step 3: Add Tricky-Case Examples
Include a section of **hard examples** with the correct labeling and an explanation of *why*. Maybe even create decision trees: "If X, then label as Y; otherwise, check Z." These become invaluable references for annotators facing edge cases.
#### Step 4: Version and Communicate
Your guidelines will evolve. Maintain a **changelog** so everyone knows what changed and when. Send updates to all annotators and verify they've understood the changes.
#### Step 5: Audit and Monitor
Don't set and forget. **Audit samples weekly** to catch drift. Keep measuring IAA (Inter-Annotator Agreement). If it drops, investigate why and update the guidelines if needed.
What are the trade-offs here?`
        },
        {
          id: 11,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                  <h4>Pros</h4>
                </div>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Higher agreement</li>
                  <li>Faster labeling</li>
                  <li>Fewer reworks</li>
                </ul>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                  <h4>Cons</h4>
                </div>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Upfront effort</li>
                  <li>May seem rigid</li>
                  <li>Needs maintenance</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#4a4e69',
          notes: `### Tip 3 - Pros & Cons
Let's look at both sides of maintaining strict guidelines.
#### ✅ Pros
The good stuff: You'll see **higher agreement** between annotators, which directly translates to cleaner training data. **Faster labeling** follows because annotators spend less time wondering "what should I do here?" and more time actually labeling. And you'll have **fewer reworks** since clear rules prevent mistakes that would need to be fixed later.
#### ⚠️ Cons
The problems: There's significant **upfront effort** required. Writing good guidelines takes time; you need to anticipate edge cases before you've seen them all. Some team members may find detailed rules **rigid** or frustrating, especially if they're domain experts who feel they "know better." And guidelines **need maintenance**. As you encounter new situations, you'll need to update and re-communicate the rules.
#### 🎯 Finding the Balance
Here's the thing: you want guidelines to be detailed enough to handle real ambiguity, but not so restrictive that annotators can't use common sense. The best approach is often to start with core rules, then add specifics as edge cases arise in practice.
> 💡 Pro tip: Keep a running "FAQ" section in your guidelines. When annotators ask questions, add the answer to the FAQ for everyone's benefit.
Now that we've covered *how* to annotate, let's talk about *what* data to annotate. Hint: not all data is created equal!`
        }
      ]
    },
    {
      id: 'tip-4',
      title: 'Tip 4: Label Data with Real Domain Context (Not Synthetic Only)',
      slides: [
        {
          id: 12,
          title: 'Tip 4: Label Data with Real Domain Context (Not Synthetic Only)',
          icon: { name: 'duo-file-lines' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Goal</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Ensure models generalize to production text and edge cases.</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Use in-the-wild data with real noise, formats, and abbreviations; supplement with synthetic.</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Messy sources (EHRs, logs, contracts), unique jargon, compliance contexts.</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#3e2c57',
          notes: `### Tip 4 - Label Data with Real Domain Context
This tip addresses a common mistake that even experienced teams make.
#### 🎯 The Goal
We want our models to **generalize to production text** and handle **edge cases**. A model trained on clean, synthetic examples often fails spectacularly when it encounters messy real-world data.
#### 📖 The Synthetic Data Trap
Here's what often happens: to save time, teams generate synthetic training data. "John Smith works at Microsoft" becomes a template, and you generate thousands of variations by swapping names and companies. Easy, right?
But production data looks nothing like this. Real text has typos: "Jhon Smth works at Microsft". It has abbreviations: "JS @ MSFT". It has weird formatting, slang, and context that synthetic generators never produce. When your model sees this messiness for the first time in production, it panics.
#### ⚙️ How It Works
The solution is to use **in-the-wild data** as much as possible. Real clinical notes. Actual customer emails. Genuine legal contracts. These documents have all the noise, quirks, and abbreviations your model will encounter in production.
You can still *supplement* with synthetic data to fill gaps, especially for rare entities. But the foundation should be real.
#### 🕐 When to Use This?
This is especially important when your sources are messy (Electronic Health Records, system logs, contracts with varying formats), when your domain has **unique jargon** or abbreviations, or when **compliance** matters and you need to handle real patterns.
How do we do this practically?`
        },
        {
          id: 13,
          title: 'Steps',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPStaggerList stagger={0.15} duration={0.6}>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }}>
                    <li>Source data ethically; de-identify as needed</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={2}>
                    <li>Stratify by source, time, author style, and difficulty</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={3}>
                    <li>Complement with targeted synthetic to balance classes</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={4}>
                    <li>Track domain shift; refresh samples periodically</li>
                  </ol>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#3e2c57',
          notes: `### Tip 4 - Steps
Let me walk you through how to work with real-world data responsibly.
#### Step 1: Source Data Ethically
This is critical. Real data often contains sensitive information. If you're in healthcare, there are HIPAA regulations. In finance, there are PII concerns. Always **de-identify** data as needed: replace real patient names with fake ones, mask credit card numbers, etc. And make sure you have proper approvals to use the data for ML training.
#### Step 2: Stratify Your Sample
Don't just grab the first 1000 documents you find. Ensure your sample includes variety across:
- Different **sources** (emails vs. reports vs. forms)
- Different **time periods** (language evolves)
- Different **author styles** (formal vs. casual)
- Different **difficulty levels** (easy and hard cases)
This stratification ensures your model sees the full range of what it will encounter.
#### Step 3: Complement with Targeted Synthetic Data
Once you have your real data foundation, identify gaps. Do you have very few examples of a rare entity type? Generate some synthetic examples to balance things out. But remember: synthetic data *fills gaps*; it shouldn't be the majority.
#### Step 4: Track Domain Shift
Real-world language changes over time. New products launch, new terminology emerges, writing styles evolve. **Refresh your samples periodically** to ensure your training data stays current with production.
Let's look at the trade-offs.`
        },
        {
          id: 14,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                  <h4>Pros</h4>
                </div>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Robust performance</li>
                  <li>Captures rare patterns</li>
                  <li>Better reflects production environments</li>
                </ul>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                  <h4>Cons</h4>
                </div>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Access/privacy constraints</li>
                  <li>Harder, slower annotation</li>
                  <li>May require legal/compliance review</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#3e2c57',
          notes: `### Tip 4 - Pros & Cons
Using real data comes with significant benefits and some challenges.
#### ✅ Pros
The good stuff: You get **robust performance** because your model learns from the same messy patterns it will see in production. It **captures rare patterns** that synthetic generators would never think to create. And it **better reflects production environments**, reducing the gap between training and deployment.
#### ⚠️ Cons
The problems: **Access and privacy constraints** are real. Getting approval to use real data can take months of legal review. Real data is often **harder and slower to annotate** because it's messier; annotators have to deal with ambiguity, poor formatting, and incomplete information. And depending on your industry, you **may require legal/compliance review** before using any real data.
#### 💡 A Practical Approach
Here's what works well: Start with whatever real data you *can* access. Even a small amount of real data mixed with synthetic is better than pure synthetic. Then, as your project matures and proves value, invest in getting access to more real data.
\`\`\`mermaid
flowchart LR
    A["🎭 Synthetic Data"] --> C["🎯 Mixed Training Set"]
    B["📋 Real Data"] --> C
    C --> D["🚀 Robust Model"]
    style B fill:#81c784,color:#000
    style D fill:#4fc3f7,color:#000
\`\`\`
> 🤔 Ask yourself: What percentage of your current training data comes from real sources? If it's less than 50%, that's a red flag.
Now let's talk about something exciting: using pretrained models to give you a massive head start!`
        }
      ]
    },
    {
      id: 'tip-5',
      title: 'Tip 5: Fine-Tune Pretrained Transformer Models',
      slides: [
        {
          id: 15,
          title: 'Tip 5: Fine-Tune Pretrained Transformer Models',
          icon: { name: 'duo-brain-circuit' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Goal</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Achieve strong accuracy with less labeled data via transfer learning.</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Add a token-classification head (optionally CRF) on a pretrained encoder and fine-tune on your labels.</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Limited data, complex language, multilingual, or domain-adapted models available.</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#770022',
          notes: `### Tip 5 - Fine-Tune Pretrained Transformer Models
Alright, this tip is where modern NLP really shines. If you've heard of BERT, GPT, or transformers in general, this is where that technology comes into play.
#### 🎯 The Goal
We want to achieve **strong accuracy with less labeled data** by leveraging **transfer learning**. Instead of training a model from scratch (which requires millions of examples), we start with a model that already understands language and just teach it our specific task.
#### 📖 The Analogy
Think of it like hiring someone who already speaks English fluently and teaching them medical terminology. You don't have to teach them grammar, vocabulary, or sentence structure; they already know all that. You just teach them the new stuff specific to medicine. That's *much* faster than teaching a baby from scratch!
#### ⚙️ How It Works
Pretrained models like BERT, RoBERTa, or domain-specific variants (BioBERT for medical, FinBERT for finance) have learned from billions of words. They understand language deeply. We add a **token-classification head** on top (a simple layer that predicts entity labels) and fine-tune the whole thing on our labeled data.
\`\`\`mermaid
flowchart TB
    A["🧠 Pretrained BERT"] --> B["➕ Token Classification Head"]
    B --> C["📚 Fine-tune on Your Data"]
    C --> D["🎯 Domain NER Model"]
    style A fill:#e1bee7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
#### 🕐 When to Use This?
This is your go-to approach when you have **limited labeled data** (hundreds to thousands of examples, not millions), **complex language patterns**, **multilingual requirements**, or when a **domain-adapted pretrained model** exists for your field.`
        },
        {
          id: 16,
          title: 'Steps',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPStaggerList stagger={0.15} duration={0.6}>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }}>
                    <li>Choose base (e.g., BERT/RoBERTa + domain variants)</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={2}>
                    <li>Tokenize; align labels to wordpieces; handle sub-token tags</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={3}>
                    <li>Set hyperparams (lr, batch size, weight decay, early stopping)</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={4}>
                    <li>Use class weighting or focal loss for imbalance</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={5}>
                    <li>Validate; consider PEFT/LoRA for efficiency; export for serving</li>
                  </ol>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#770022',
          notes: `### Tip 5 - Steps
Let's walk through the technical process of fine-tuning.
#### Step 1: Choose Your Base Model
Start by selecting a pretrained model. For general English, BERT or RoBERTa work well. For specialized domains, look for domain-adapted models: BioBERT or PubMedBERT for biomedical, FinBERT for financial, LegalBERT for legal text. These models were pretrained on domain-specific text and will give you a head start.
#### Step 2: Handle Tokenization Carefully
Transformers use subword tokenization, which can split words into pieces. The word "COVID-19" might become ["CO", "##VID", "-", "19"]. You need to **align your entity labels to these wordpieces**. Typically, only the first subword gets the B- (beginning) tag, and subsequent subwords get I- (inside) or are ignored. This is a common source of bugs, so pay attention!
#### Step 3: Set Hyperparameters
Key settings include: **learning rate** (usually 2e-5 to 5e-5 for fine-tuning), **batch size** (8-32 depending on your GPU), **weight decay** for regularization, and **early stopping** to prevent overfitting. Start with published defaults and tune from there.
#### Step 4: Handle Class Imbalance
Some entity types are rare. Use **class weighting** to give rare classes more importance, or try **focal loss** which automatically focuses on hard examples. Don't let common entities dominate your gradients.
#### Step 5: Validate and Optimize
Track performance on your dev set. Consider **PEFT/LoRA** techniques if you need to train efficiently with limited compute. When you're happy, export your model for serving.
What are the trade-offs?`
        },
        {
          id: 17,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                  <h4>Pros</h4>
                </div>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Strong baselines</li>
                  <li>Faster convergence</li>
                  <li>Reusable</li>
                </ul>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                  <h4>Cons</h4>
                </div>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Compute/latency costs</li>
                  <li>Risk of overfitting/forgetting</li>
                  <li>Careful tuning needed</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#770022',
          notes: `### Tip 5 - Pros & Cons
Let's honestly assess transformer fine-tuning.
#### ✅ Pros
The good stuff: You get **strong baselines** out of the box. Even with a few hundred labeled examples, fine-tuned BERT often outperforms traditional CRF models trained on thousands. **Faster convergence** means you need fewer epochs and less data to reach good performance. And these models are **reusable**; once trained, you can apply them anywhere or continue improving them.
#### ⚠️ Cons
The problems: **Compute and latency costs** are real. Transformers are big and slow compared to simpler models. A BERT model might have 110 million parameters, and inference can take tens of milliseconds per example. There's also a **risk of overfitting or catastrophic forgetting** if you're not careful. The model might forget its general language understanding while learning your specific task. And **careful tuning is needed**; learning rate, batch size, and training duration all matter a lot.
#### 💡 Practical Tips
Start with the smallest model that works for your task. DistilBERT is 60% smaller and 60% faster than BERT, with only minor accuracy loss. Use mixed-precision training (FP16) to speed things up and reduce memory usage. And always monitor your dev set performance to catch overfitting early.
> 🚀 Fun fact: A well-tuned fine-tuned BERT with 500 labeled examples often beats a traditional CRF model with 10,000 examples. That's the power of transfer learning!
Our next tip addresses a common problem: what do you do when some entity types rarely appear in your data?`
        }
      ]
    },
    {
      id: 'tip-6',
      title: 'Tip 6: Use Data Augmentation for Rare Entities',
      slides: [
        {
          id: 18,
          title: 'Tip 6: Use Data Augmentation for Rare Entities',
          icon: { name: 'duo-copy' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Goal</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Improve recall for low-frequency classes and long-tail entities.</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Generate realistic variants via synonym/alias swaps, back-translation, masked-LM infill, and pattern templates.</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Class imbalance; few-shot entities; costly labeling.</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#10508f',
          notes: `### Tip 6 - Use Data Augmentation for Rare Entities
Now we tackle one of the trickiest problems in NER: the **long tail** of rare entity types.
#### 🎯 The Goal
We want to **improve recall for low-frequency classes** and handle **long-tail entities**. In most datasets, some entity types appear thousands of times, while others might appear only a few dozen times. Models tend to get good at the common ones and terrible at the rare ones.
#### 📖 The Imbalance Problem
Imagine you're building a NER system for a pharmaceutical company. You have 10,000 examples of common drug names like "Aspirin" and "Ibuprofen" but only 50 examples of a newly approved cancer drug. Your model learns "Aspirin" perfectly but has never seen enough of the rare drug to recognize it reliably.
#### ⚙️ How It Works
**Data augmentation** artificially creates more training examples for rare entities. Techniques include:
- **Synonym/alias swaps**: Replace "heart attack" with "myocardial infarction"
- **Back-translation**: Translate to French and back to English for paraphrasing
- **Masked-LM infill**: Use BERT to generate alternative surrounding contexts
- **Pattern templates**: "Patient was diagnosed with [DISEASE]" → fill in rare diseases
\`\`\`mermaid
flowchart LR
    A["📉 50 Rare Examples"] --> B["✨ Augmentation"]
    B --> C["📈 500 Augmented Examples"]
    C --> D["🎯 Balanced Training"]
    style A fill:#ffcdd2,color:#000
    style C fill:#c8e6c9,color:#000
\`\`\`
#### 🕐 When to Use This?
Use augmentation when you have **class imbalance**, when certain entities are **few-shot** (appearing rarely), or when additional labeling is **too costly**.`
        },
        {
          id: 19,
          title: 'Steps',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPStaggerList stagger={0.15} duration={0.6}>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }}>
                    <li>Identify rare classes via label distribution</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={2}>
                    <li>Define safe ops that preserve meaning and boundaries</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={3}>
                    <li>Generate candidates; human-review a sample</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={4}>
                    <li>Mix 10–30% augmented with real data; monitor metrics</li>
                  </ol>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#10508f',
          notes: `### Tip 6 - Steps
Here's how to implement data augmentation safely.
#### Step 1: Identify Rare Classes
Start by analyzing your **label distribution**. Plot a histogram of entity counts by type. Which entities have fewer than 100 examples? 50? 20? These are your candidates for augmentation.
#### Step 2: Define Safe Operations
Not all augmentations are safe for NER. If you replace a word with a synonym, you need to make sure:
- The meaning is preserved ("car" → "automobile" is fine; "car" → "vehicle" might be too broad)
- The entity boundaries are preserved (don't accidentally create partial entities)
- The new text is grammatically correct and realistic
Document which operations are allowed for which entity types.
#### Step 3: Generate and Review
Generate augmented candidates, but don't blindly trust them. **Human-review a sample** to ensure quality. Are the augmented examples realistic? Do they preserve entity boundaries? Are there any weird artifacts?
#### Step 4: Mix Carefully and Monitor
A good rule of thumb: keep augmented data to **10-30% of your total training set**. Too much augmented data can hurt if the augmentations introduce artifacts. Monitor your metrics closely. If performance on real data drops, you may be over-augmenting.
> ⚠️ Warning: Augmentation can introduce subtle biases. If all your augmented examples use the same template, the model might overfit to that pattern. Variety is key!
Let's see the trade-offs.`
        },
        {
          id: 20,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                  <h4>Pros</h4>
                </div>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Better coverage</li>
                  <li>Cheaper than new labels</li>
                </ul>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                  <h4>Cons</h4>
                </div>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Artifacts can mislead model</li>
                  <li>Unrealistic text</li>
                  <li>Boundary drift risk</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#10508f',
          notes: `### Tip 6 - Pros & Cons
Let's weigh the benefits and risks of augmentation.
#### ✅ Pros
The good stuff: You get **better coverage** of rare entity types without waiting months to collect more real examples. It's **cheaper than labeling new data** since you're generating examples programmatically. And when done right, it can significantly boost recall for underrepresented classes.
#### ⚠️ Cons
The problems: **Artifacts can mislead the model**. If your back-translation consistently produces certain phrasings, the model might learn these quirks instead of the actual entity patterns. Augmented text can be **unrealistic**, and models might not generalize from fake-sounding examples to real ones. And there's a **boundary drift risk** where augmentation accidentally shifts entity boundaries (e.g., adding words that shouldn't be part of the entity).
#### 💡 Quality Over Quantity
Here's the key insight: a few hundred high-quality augmented examples beat thousands of low-quality ones. Always prioritize quality. Review your augmented data carefully. If something looks off, it will confuse your model.
\`\`\`mermaid
flowchart TB
    A["🎲 Raw Augmentation"] --> B{"✅ Quality Check"}
    B -->|Pass| C["📚 Training Data"]
    B -->|Fail| D["🗑️ Discard"]
    style C fill:#81c784,color:#000
    style D fill:#ef9a9a,color:#000
\`\`\`
> 🤔 Question: In your domain, which entity types would benefit most from augmentation?
Now let's flip the script. We've been talking about finding more entities. What about finding *fewer* false ones?`
        }
      ]
    },
    {
      id: 'tip-7',
      title: 'Tip 7: Add Negative Examples to Reduce False Positives',
      slides: [
        {
          id: 21,
          title: 'Tip 7: Add Negative Examples to Reduce False Positives',
          icon: { name: 'duo-shield-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Goal</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Increase precision by teaching the model what is not an entity.</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Include near-miss spans and ambiguous terms labeled as O; mine hard negatives from model errors.</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>High false-positive rates; ambiguous terminology; rule-assisted pre-annotations.</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#304f1a',
          notes: `### Tip 7 - Add Negative Examples to Reduce False Positives
Time to address precision. We've been focused on finding more entities (recall), but sometimes the bigger problem is finding *too many* fake entities (false positives).
#### 🎯 The Goal
We want to **increase precision** by teaching the model what is *not* an entity. This is about saying "no" correctly.
#### 📖 The False Positive Problem
Remember our dictionary example with "Apple"? Your model might be tagging every occurrence of "Apple" as a company, even in "I ate an apple for lunch." Or in healthcare, it might tag "cold" as a disease even when someone says "cold water." These are false positives, and they erode trust in your system.
#### ⚙️ How It Works
The solution is to explicitly include **negative examples** in your training data. These are spans that *look like* entities but aren't. By labeling them as "O" (outside/not an entity) and training on them, the model learns to be more careful.
The best negatives are **hard negatives**: examples that the model currently gets wrong. Mine these from your model's errors!
\`\`\`mermaid
flowchart TB
    A["🤖 Model Predictions"] --> B["❌ Find False Positives"]
    B --> C["📝 Add as Negative Examples"]
    C --> D["🔄 Retrain"]
    D --> E["🎯 Higher Precision"]
    style E fill:#81c784,color:#000
\`\`\`
#### 🕐 When to Use This?
Apply this when you have **high false-positive rates**, when your domain has **ambiguous terminology**, or when you're using **rule-assisted pre-annotations** that tend to be overly aggressive.`
        },
        {
          id: 22,
          title: 'Steps',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPStaggerList stagger={0.15} duration={0.6}>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }}>
                    <li>Log false positives from dev/prod</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={2}>
                    <li>Mine hard negatives and add to training with weights</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={3}>
                    <li>Create stoplists and context rules (e.g., titles vs names)</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={4}>
                    <li>Rebalance batches; track PR curves and thresholds</li>
                  </ol>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#304f1a',
          notes: `### Tip 7 - Steps
Here's how to systematically add negative examples.
#### Step 1: Log False Positives
Set up logging in your dev and production environments to capture what the model is incorrectly tagging as entities. Don't just look at aggregate metrics; actually look at the specific mistakes. You might be surprised at the patterns you find.
#### Step 2: Mine Hard Negatives
**Hard negatives** are the most valuable. These are spans that the model confidently (and wrongly) predicts as entities. Extract these from your error logs. You can also programmatically generate candidates: find all matches of common words in your entity dictionary that appear in contexts where they're clearly not entities.
#### Step 3: Create Stoplists and Context Rules
Build a **stoplist** of terms that look like entities but usually aren't. For example, "General" as a military rank vs. "general" as an adjective. Create rules that use context: "Dr." followed by a name is likely PERSON, but "Dr." in "Dr Pepper" is not.
#### Step 4: Rebalance and Monitor
When you add negatives, make sure to **rebalance your training batches** so the model still sees enough positive examples. Too many negatives can bias the model toward never predicting anything! Track **Precision-Recall curves** and adjust your confidence thresholds accordingly.
> 💡 Pro tip: Keep a "confusables list" of pairs: terms that look similar but should be labeled differently. Review this list periodically.
Let's look at the trade-offs.`
        },
        {
          id: 23,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                  <h4>Pros</h4>
                </div>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Precision gains</li>
                  <li>Better disambiguation</li>
                </ul>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                  <h4>Cons</h4>
                </div>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>May reduce recall</li>
                  <li>Needs ongoing curation</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#304f1a',
          notes: `### Tip 7 - Pros & Cons
Let's assess the negative examples approach.
#### ✅ Pros
The good stuff: You get clear **precision gains** by teaching the model to be more selective. **Better disambiguation** comes naturally; the model learns the contextual cues that distinguish "Apple the company" from "apple the fruit." And you're directly addressing your model's actual weaknesses by learning from its mistakes.
#### ⚠️ Cons
The problems: Adding too many negatives **may reduce recall**. If the model becomes too cautious, it might start missing real entities that have any ambiguity. It's a precision-recall trade-off, and you need to find the right balance. Also, negative mining **needs ongoing curation**; as your model improves and the world changes, the confusing cases will shift, and you'll need to update your negative examples.
#### ⚖️ The Precision-Recall Trade-off
\`\`\`mermaid
flowchart LR
    A["⬆️ More Negatives"] --> B["⬆️ Precision"]
    A --> C["⬇️ Recall Risk"]
    style B fill:#81c784,color:#000
    style C fill:#ffcdd2,color:#000
\`\`\`
The key is to monitor both metrics together. Don't optimize precision at the expense of recall unless your business case specifically calls for it (e.g., legal contracts where false positives are very costly).
> 🎯 Remember: The goal isn't to maximize either precision or recall, but to find the right balance for your use case.
Now let's talk about a quick win that doesn't require retraining at all: boundary correction rules!`
        }
      ]
    },
    {
      id: 'tip-8',
      title: 'Tip 8: Use Entity Boundary Correction Rules',
      slides: [
        {
          id: 24,
          title: 'Tip 8: Use Entity Boundary Correction Rules',
          icon: { name: 'duo-brackets-square' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Goal</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Fix systematic boundary errors without retraining.</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Apply deterministic post-processing (regex/heuristics) or decoding constraints to trim/expand spans.</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Consistent punctuation/units/brackets issues; hyphenated terms; titles.</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#7b2b00',
          notes: `### Tip 8 - Use Entity Boundary Correction Rules
Sometimes your model gets the entity *almost* right, but the boundaries are slightly off. This tip is about fixing those systematic errors without retraining.
#### 🎯 The Goal
We want to **fix systematic boundary errors** quickly and cheaply, without going through the whole retraining cycle.
#### 📖 The Boundary Problem
Here's a common issue: your model predicts "500" as a DOSAGE, but the actual entity should be "500 mg". Or it predicts "Dr. Smith" as PERSON, but you want just "Smith" (without the title). Or it predicts "COVID" when it should predict "COVID-19". These are boundary errors, and they often follow predictable patterns.
#### ⚙️ How It Works
Instead of retraining (which is slow and might cause other regressions), we add a **post-processing step** after model prediction. This step applies deterministic rules: regex patterns, heuristics, or decoding constraints that trim or expand entity spans based on what we know about our domain.
\`\`\`mermaid
flowchart LR
    A["🤖 Model Output"] --> B["⚙️ Boundary Rules"]
    B --> C["✨ Corrected Entities"]
    style A fill:#ffcc80,color:#000
    style C fill:#81c784,color:#000
\`\`\`
For example: "If DOSAGE entity is followed by a unit (mg, ml, g), expand the boundary to include the unit."
#### 🕐 When to Use This?
This works great for **consistent patterns** like punctuation issues, unit handling, brackets/parentheses, hyphenated terms, or title prefixes. It's a quick fix while you work on longer-term solutions.`
        },
        {
          id: 25,
          title: 'Steps',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPStaggerList stagger={0.15} duration={0.6}>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }}>
                    <li>Analyze error patterns by entity and token type</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={2}>
                    <li>Write rules (e.g., include units, exclude trailing punctuation, merge hyphenated tokens)</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={3}>
                    <li>Insert a post-processing step in the pipeline; add unit tests</li>
                  </ol>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#7b2b00',
          notes: `### Tip 8 - Steps
Here's how to implement boundary correction rules.
#### Step 1: Analyze Error Patterns
First, systematically study your model's boundary mistakes. Look at false positives and false negatives, but specifically focus on cases where the entity is *partially* correct. Group these by:
- Entity type (are DRUG boundaries worse than PERSON boundaries?)
- Token type (punctuation, numbers, units, prefixes, suffixes)
- Context (beginning of sentence, after certain words)
This analysis will reveal the patterns you need to fix.
#### Step 2: Write Targeted Rules
Now write specific rules for each pattern. Examples:
- **Include units**: If DOSAGE is followed by mg/ml/g within 1 token, expand
- **Exclude punctuation**: Trim trailing periods, commas, or colons from entities
- **Merge hyphens**: If entity ends before a hyphen and continues after, merge them ("COVID" + "-19" → "COVID-19")
- **Handle titles**: Trim "Dr.", "Mr.", "Ms." from PERSON entities if that's your convention
Be specific and test each rule thoroughly.
#### Step 3: Insert Post-Processing and Test
Add your rules as a **post-processing step** in your inference pipeline, right after model prediction and before returning results. This makes it easy to enable/disable rules independently.
Crucially, add **unit tests** for your rules. Write test cases that verify each rule works as expected and doesn't break edge cases. Rules can interact in surprising ways!
What are the trade-offs?`
        },
        {
          id: 26,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                  <h4>Pros</h4>
                </div>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Quick wins</li>
                  <li>Transparent</li>
                  <li>Easy to revert</li>
                </ul>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                  <h4>Cons</h4>
                </div>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Brittle</li>
                  <li>Domain/language-specific</li>
                  <li>Maintenance needed</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#7b2b00',
          notes: `### Tip 8 - Pros & Cons
Let's weigh the benefits and risks of rule-based post-processing.
#### ✅ Pros
The good stuff: **Quick wins** are the biggest advantage. You can fix a known pattern in hours instead of days of retraining. Rules are **transparent**; you know exactly what they do, making debugging easy. And they're **easy to revert** if something goes wrong; just comment out the rule.
#### ⚠️ Cons
The problems: Rules are **brittle**. They only catch exactly what you specify, and edge cases can slip through. A rule that works perfectly in English might fail in other languages or even different English dialects. They're also **domain/language-specific**; rules for medical text won't work for financial text. And **maintenance is needed** because as your data evolves, rules that once helped might start causing problems.
#### 🎯 Use Wisely
Think of boundary rules as **band-aids**, not cures. They're great for quick fixes and for handling truly deterministic patterns. But if you find yourself writing dozens of rules, that's a sign you should invest in better training data or model improvements instead.
\`\`\`mermaid
flowchart TB
    A{"Error Pattern?"} -->|"Systematic & Deterministic"| B["✅ Use Rule"]
    A -->|"Complex & Variable"| C["🔄 Retrain Model"]
    style B fill:#81c784,color:#000
    style C fill:#4fc3f7,color:#000
\`\`\`
> 💡 Pro tip: Keep a log of all your rules and why you added them. This becomes invaluable documentation for your team.
Now for our final tip: the meta-strategy that ties everything together: iterative error analysis!`
        }
      ]
    },
    {
      id: 'tip-9',
      title: 'Tip 9: Perform Iterative Error Analysis and Retraining',
      slides: [
        {
          id: 27,
          title: 'Tip 9: Perform Iterative Error Analysis and Retraining',
          icon: { name: 'duo-chart-line' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Goal</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Drive continuous improvement aligned with business impact.</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>Bucket errors, collect targeted new data, retrain, and re-evaluate on stable benchmarks.</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>When to Use</h4>
                  <ul style={{ fontSize: '0.7em' }}>
                    <li>After baseline; after data/model changes; ongoing operations.</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#7b1fa2',
          notes: `### Tip 9 - Perform Iterative Error Analysis and Retraining
Our final tip is perhaps the most important one, because it's the strategy that makes all the other tips work together over time.
#### 🎯 The Goal
We want to drive **continuous improvement aligned with business impact**. NER isn't a one-time project; it's an ongoing process of getting better and better.
#### 📖 The Iterative Mindset
Here's the reality: your first model will have problems. That's okay! What matters is how systematically you identify and fix those problems. The best NER systems aren't built in one shot; they're refined through many cycles of error analysis and targeted improvement.
Think of it like training for a marathon. You don't just run once and you're done. You run, analyze what went wrong (knees hurt? out of breath?), adjust your training, and run again. Each cycle you get better.
#### ⚙️ How It Works
The cycle is: **Deploy → Monitor → Analyze Errors → Collect Targeted Data → Retrain → Evaluate → Deploy**
\`\`\`mermaid
flowchart TB
    A["🚀 Deploy"] --> B["📊 Monitor"]
    B --> C["🔍 Analyze Errors"]
    C --> D["📝 Collect Data"]
    D --> E["🔄 Retrain"]
    E --> F["✅ Evaluate"]
    F --> A
    style A fill:#4fc3f7,color:#000
    style F fill:#81c784,color:#000
\`\`\`
#### 🕐 When to Use This?
Always! But especially after establishing a baseline, after any significant data or model changes, and as part of **ongoing operations** for production systems.`
        },
        {
          id: 28,
          title: 'Steps',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPStaggerList stagger={0.15} duration={0.6}>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }}>
                    <li>Build slice metrics and confusion matrices</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={2}>
                    <li>Create error taxonomy (boundary, type, context, OOV)</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={3}>
                    <li>Prioritize by impact; collect/label new examples</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.7em', lineHeight: '1.5' }}>
                  <ol style={{ fontSize: '1em' }} start={4}>
                    <li>Retrain; A/B test; monitor drift and regression</li>
                  </ol>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#7b1fa2',
          notes: `### Tip 9 - Steps
Here's how to set up an effective error analysis and retraining cycle.
#### Step 1: Build Slice Metrics and Confusion Matrices
Don't just look at overall F1 score. Break down performance by **slices**: by entity type, by document source, by text length, by time period. Build **confusion matrices** to see which entity types get confused with each other. This reveals where your model is weak.
#### Step 2: Create an Error Taxonomy
Categorize your errors systematically:
- **Boundary errors**: Entity partially correct
- **Type errors**: Right span, wrong label
- **Context errors**: Model missed contextual cues
- **OOV errors**: Out-of-vocabulary terms the model hasn't seen
This taxonomy helps you prioritize fixes. If 80% of errors are boundary issues, focus there first.
#### Step 3: Prioritize by Business Impact
Not all errors are equal. A missed drug-drug interaction is more serious than a misspelled product name. Work with stakeholders to understand which errors matter most, then prioritize your data collection and improvement efforts accordingly.
#### Step 4: Collect, Retrain, and Validate
**Collect targeted examples** for your highest-priority error categories. Don't just grab random data; be strategic. Retrain your model with the new data. Use **A/B testing** to compare the new model against the old one on real traffic. And monitor for **regression**: did fixing one thing break something else?
> 🔄 Remember: This is a cycle, not a one-time activity. Set up regular cadences (weekly error reviews, monthly retraining) to keep improving.
Let's look at the trade-offs.`
        },
        {
          id: 29,
          title: 'Precision: Pros & Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-thumbs-up" sizeName="2x" darkModeInvert={true} />
                  <h4>Pros</h4>
                </div>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Compounding gains</li>
                  <li>Focused data spend</li>
                  <li>Robust models</li>
                </ul>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                  <h4>Cons</h4>
                </div>
                <ul style={{ fontSize: '0.7em' }}>
                  <li>Requires sustained effort</li>
                  <li>Risk of overfitting to test</li>
                  <li>Ops overhead</li>
                </ul>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#7b1fa2',
          notes: `### Tip 9 - Pros & Cons
Let's honestly assess the iterative improvement approach.
#### ✅ Pros
The good stuff: You get **compounding gains**. Each improvement cycle builds on the last, and over time, these small improvements add up to dramatic progress. Your resources are **focused** on the highest-impact problems rather than scattered randomly. And your models become **robust** because you're specifically addressing weaknesses rather than hoping they go away.
#### ⚠️ Cons
The problems: It **requires sustained effort**. This isn't a set-it-and-forget-it approach; you need dedicated time and people for ongoing analysis and improvement. There's a **risk of overfitting to your test set** if you're not careful; if you keep optimizing for the same test data, you might overfit to its quirks. Rotate your test sets periodically. And there's **ops overhead**: setting up monitoring, logging, dashboards, and A/B testing infrastructure takes real engineering effort.
#### 📈 The Long View
\`\`\`mermaid
flowchart LR
    A["📅 Month 1"] -->|"F1: 0.75"| B["📅 Month 3"]
    B -->|"F1: 0.82"| C["📅 Month 6"]
    C -->|"F1: 0.88"| D["📅 Month 12"]
    D -->|"F1: 0.92"| E["🏆 Year 2"]
    style E fill:#ffd700,color:#000
\`\`\`
Teams that commit to iterative improvement typically see steady gains over months and years. It's not glamorous, but it works.
> 💡 Key insight: The best NER systems aren't the ones with the cleverest models; they're the ones with the most disciplined improvement processes.
Now let's bring it all together with a summary!`
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 30,
          title: 'Summary',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="fadeIn" delay={0.1}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                    Key Takeaways
                  </h3>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.15} duration={0.6}>
                  <div style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                    <ul style={{ fontSize: '1em' }}>
                      <li>Mix domain dictionaries, real-context data, and strong pretrained models</li>
                    </ul>
                  </div>
                  <div style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                    <ul style={{ fontSize: '1em' }}>
                      <li>Enforce consistent guidelines; invest in gold data and IAA</li>
                    </ul>
                  </div>
                  <div style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                    <ul style={{ fontSize: '1em' }}>
                      <li>Control precision/recall via negatives and boundary rules</li>
                    </ul>
                  </div>
                  <div style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                    <ul style={{ fontSize: '1em' }}>
                      <li>Improve iteratively with error analysis and targeted retraining</li>
                    </ul>
                  </div>
                </GSAPStaggerList>

                <GSAPAnimated animation="fadeIn" delay={0.8}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                    <SvgIcon iconName="duo-gauge-high" sizeName="2x" darkModeInvert={true} />
                    Metrics to Monitor
                  </h3>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.15} duration={0.6}>
                  <div style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                    <ul style={{ fontSize: '1em' }}>
                      <li>Precision/Recall/F1 per entity</li>
                    </ul>
                  </div>
                  <div style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                    <ul style={{ fontSize: '1em' }}>
                      <li>Boundary accuracy</li>
                    </ul>
                  </div>
                  <div style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                    <ul style={{ fontSize: '1em' }}>
                      <li>Slice metrics (document types, entity frequencies)</li>
                    </ul>
                  </div>
                  <div style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                    <ul style={{ fontSize: '1em' }}>
                      <li>Inference latency</li>
                    </ul>
                  </div>
                </GSAPStaggerList>
              </div>
            </div>
          ),
          backgroundColor: '#283593',
          notes: `### Summary
Alright, let's bring together everything we've learned! We've covered 9 tips for building high-accuracy domain-specific NER systems.
#### 💡 Key Takeaways
First, **mix multiple strategies**. Domain dictionaries give you quick recall wins, real-context data ensures generalization, and pretrained transformers give you a powerful foundation. These approaches work best together, not in isolation.
Second, **invest in quality infrastructure**. Enforce consistent annotation guidelines, invest in gold-standard data, and measure Inter-Annotator Agreement. Quality data is the foundation everything else builds on.
Third, **actively manage precision and recall**. Use negative examples to reduce false positives when precision matters, and use augmentation to boost recall for rare entities. Know which metric matters more for your use case and optimize accordingly.
Fourth, **commit to continuous improvement**. Error analysis and targeted retraining create compounding gains over time. The best systems are built through many iteration cycles, not a single heroic effort.
#### 📊 Metrics to Monitor
Keep an eye on these key metrics:
- **Precision/Recall/F1** broken down by entity type
- **Boundary accuracy** (are you getting the full entity?)
- **Slice metrics** across document types and entity frequencies
- **Inference latency** (speed matters in production)
Track these over time to see your progress.
Ready for concrete next steps?`
        },
        {
          id: 31,
          title: 'Next Steps',
          icon: { name: 'duo-list-ol' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPStaggerList stagger={0.2} duration={0.6}>
                <div style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                  <ol style={{ fontSize: '1em' }}>
                    <li>Draft schema and guidelines</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                  <ol style={{ fontSize: '1em' }} start={2}>
                    <li>Build v1 dictionary and sample real data</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                  <ol style={{ fontSize: '1em' }} start={3}>
                    <li>Fine-tune a baseline model; set eval harness</li>
                  </ol>
                </div>
                <div style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                  <ol style={{ fontSize: '1em' }} start={4}>
                    <li>Start error log; plan augmentation and negatives</li>
                  </ol>
                </div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#283593',
          notes: `### Next Steps
Here's a practical roadmap for getting started with your own domain-specific NER project.
#### Step 1: Draft Schema and Guidelines
Before you touch any data, clearly define your entity types. What are you trying to find? Write a draft of your annotation guidelines with examples. Share it with stakeholders and domain experts for feedback. This upfront clarity prevents painful rework later.
#### Step 2: Build v1 Dictionary and Sample Real Data
Start building your entity dictionary from available sources. At the same time, gather a sample of real data from production sources. Even a small sample of 100-200 documents can reveal important patterns and help you refine your schema.
#### Step 3: Fine-tune a Baseline Model
Pick a pretrained model appropriate for your domain and fine-tune it on your initial annotated data. Set up an **evaluation harness** with proper train/dev/test splits. This baseline gives you something concrete to improve from.
#### Step 4: Start Error Log and Plan Improvements
From day one, start logging errors you observe. As patterns emerge, plan targeted improvements: augmentation for rare classes, negative examples for false positive patterns, boundary rules for systematic issues.
\`\`\`mermaid
flowchart LR
    A["📝 Schema"] --> B["📖 Dictionary"]
    B --> C["🤖 Baseline"]
    C --> D["📊 Error Log"]
    D --> E["🔄 Iterate"]
    style A fill:#e1bee7,color:#000
    style E fill:#81c784,color:#000
\`\`\`
> 🚀 You don't need to do everything at once. Start small, measure, and improve iteratively.
Finally, let's talk about risks to watch out for.`
        },
        {
          id: 32,
          title: 'Risks & Mitigations',
          icon: { name: 'duo-triangle-exclamation' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '0.95em' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ marginBottom: '25px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-lock" sizeName="2x" style={{ color: '#e91e63' }} darkModeInvert={true} />
                      <strong>Data access/privacy</strong> → de-identification, approvals
                    </p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div style={{ marginBottom: '25px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-arrow-trend-down" sizeName="2x" style={{ color: '#ff5722' }} darkModeInvert={true} />
                      <strong>Model drift</strong> → scheduled refresh, monitoring, versioning
                    </p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.6}>
                  <div style={{ marginBottom: '25px' }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <SvgIcon iconName="duo-battery-quarter" sizeName="2x" style={{ color: '#ffc107' }} darkModeInvert={true} />
                      <strong>Resource constraints</strong> → prioritize entity types, phase rollouts
                    </p>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#283593',
          notes: `### Risks & Mitigations
Let's wrap up by talking about the real-world risks you'll face and how to handle them.
#### 🔒 Data Access and Privacy
This is often the biggest blocker. You need real data, but that data might contain sensitive information. The mitigation is **de-identification**: systematically remove or replace names, addresses, medical records, financial details. Work with your legal and compliance teams early to get data access approvals. Don't leave this for the last minute!
#### 📉 Model Drift
Language changes, your domain evolves, and what was accurate last year might not work today. New products launch, new terminology emerges, and writing styles shift. The mitigation is **scheduled refresh**: set up regular retraining cadences (monthly or quarterly), monitor performance over time, and maintain version control so you can roll back if needed.
#### ⚡ Resource Constraints
You might not have unlimited compute, unlimited annotators, or unlimited time. The reality is that most teams have to make trade-offs. The mitigation is **prioritization**: focus on the entity types that matter most to your business first. Phase your rollouts instead of trying to cover everything at once. Start with high-value, high-frequency entities and expand from there.
\`\`\`mermaid
flowchart TB
    A["⚠️ Risk"] --> B["🔍 Identify Early"]
    B --> C["📋 Plan Mitigation"]
    C --> D["✅ Execute"]
    style D fill:#81c784,color:#000
\`\`\`
#### 🎉 Final Thoughts
Building domain-specific NER is a journey, not a destination. You'll face challenges, but with these 9 tips and a commitment to iterative improvement, you'll build systems that deliver real value.
> 🙏 Thank you for your attention! I hope these tips help you build amazing NER systems. Any questions?
Good luck with your NER projects!`
        }
      ]
    }
  ]
};
