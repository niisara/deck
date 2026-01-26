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
                Prepared by: Genspark AI Slides • Date: 2025-11-07
              </p>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `Hey everyone! Welcome! [pause]

Today we're going to explore something really cool.

Eleven different ways to build NER systems!

[pause]

Quick refresher. What is NER? [pause]

NER stands for Named Entity Recognition.

It's teaching computers to find important things in text.

Names. Places. Companies. Dates.

[write on screen: "Apple opened a store in Tokyo"]

In this sentence... [pause]

"Apple" is a company.

"Tokyo" is a location.

NER finds and labels these automatically!

[pause]

Now... there's not just ONE way to do NER.

There are MANY approaches! [pause]

Old-school rules. Dictionaries. Machine learning. Deep learning. Even ChatGPT!

Today I'll show you eleven of them.

From simplest to most advanced.

[pause]

By the end... you'll know which one to pick for YOUR project.

Let's dive in!`
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
          notes: `Here's our roadmap. [pause]

Eleven approaches. Plus a summary at the end.

[point to the list]

Let me group them for you. [pause]

[write on screen: "Simple: Rules, Dictionary"]

First two are simple. No machine learning needed.

[write on screen: "Classical ML: TF-IDF, HMM, CRF"]

Next three use classical machine learning.

These were popular before deep learning.

[write on screen: "Neural: BiLSTM, CNN+BiLSTM, spaCy"]

Then we have neural networks.

These learn patterns automatically.

[write on screen: "Transformers: BERT, RoBERTa, DistilBERT"]

Next... the transformers. [pause]

These are the current state-of-the-art.

Very powerful!

[write on screen: "LLMs: Zero-shot NER"]

And finally... Large Language Models.

Like ChatGPT!

[pause]

We'll go through each one.

I'll explain when to use it.

And when NOT to use it.

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
          notes: `Approach number one! [pause]

Rule-Based Pattern Matching.

This is the simplest method. [pause]

No AI. No training. Just rules!

[pause]

What kind of rules? [pause]

[write on screen: "If word starts with capital letter → might be a name"]

Simple patterns like this.

Or regular expressions. [pause]

[write on screen: "Email pattern: xxx@xxx.com"]

You write: "Find anything that looks like an email."

The computer follows your rule exactly.

[pause]

Let me show you a regex example. [pause]

[write on screen: "[A-Z][a-z]+ [A-Z][a-z]+"]

This pattern says: Capital letter, lowercase letters, space, capital, lowercase.

That matches "Tim Cook" or "New York"!

[pause]

When should you use this? [pause]

When you have very structured data.

Dates. Phone numbers. Email addresses. IDs.

Things with predictable formats!

[pause]

[point to Pros]

The good stuff:

It's transparent. You know exactly what it does.

It's fast. Super fast.

No training data needed!

[point to Cons]

The problems:

It breaks easily. [pause]

"Tim Cook" works. But "TIM COOK" fails.

You have to think of EVERY variation.

High maintenance!

[pause]

Think of it like a recipe. [pause]

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
          notes: `Now that we've seen rules... let's try something similar. [pause]

Approach two: Dictionary Lookup.

Also called "Gazetteer" lookup. [pause]

What's a gazetteer? [pause]

Just a fancy word for "a list of known things."

[pause]

Here's the idea. [pause]

[write on screen: "Dictionary of cities: Tokyo, Paris, London..."]

You create a list of all cities.

When the computer sees "Tokyo" in text...

It checks: "Is Tokyo in my city list? Yes! → Label it CITY."

[pause]

Simple, right? [ask audience]

[pause]

This is great for known entities. [pause]

Product catalogs. Country names. Disease names.

Things that don't change much.

[pause]

[point to Pros]

Why it's good:

Very high precision for known things.

Easy to update. Just add to the list!

Works in any language... if you have the dictionary.

[point to Cons]

The problems:

It can't find NEW things. [pause]

If "SpaceX" isn't in your list... you miss it.

Also... ambiguity! [pause]

[write on screen: "Apple → fruit or company?"]

"Apple" is in your fruit dictionary AND your company dictionary.

Which one is it? You need context!

[pause]

Think of it like a phone book. [pause]

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
          notes: `Now we're entering machine learning territory! [pause]

Approach three: TF-IDF plus a Classifier.

[pause]

What is TF-IDF? [pause]

[write on screen: "TF-IDF = Term Frequency × Inverse Document Frequency"]

Don't worry about the math. [pause]

It just means: "How important is this word?"

Common words like "the" get low scores.

Special words like "Microsoft" get high scores.

[pause]

Here's how it works for NER. [pause]

Step 1: Turn each word into numbers using TF-IDF.

Step 2: Feed those numbers to a classifier.

Step 3: The classifier predicts: PERSON? ORG? LOCATION? NONE?

[pause]

[write on screen: "Classifier examples: Logistic Regression, SVM"]

These are old-school classifiers.

Fast. Simple. Interpretable.

[pause]

When should you use this? [pause]

As a quick baseline. [pause]

When you have limited compute.

When you need something lightweight.

[pause]

[point to Pros]

The good stuff:

Very fast to train.

You can see which features matter.

Runs on any laptop!

[point to Cons]

The problems:

Each word is predicted independently. [pause]

No context! [pause]

"New" and "York" are separate. The model doesn't know they're one entity.

Also... you need to engineer features manually.

[pause]

This is a good starting point.

But modern methods are much better!`
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
          notes: `Approach four: Hidden Markov Models. [pause]

HMM for short.

This is a classic! Taught in every NLP course. [pause]

[pause]

What's the big idea? [pause]

HMM thinks about SEQUENCES. [pause]

Not just one word... but the whole sentence!

[write on screen: "Word → Tag → Next Tag → Next Word"]

It models: "What tag is likely AFTER this tag?"

[pause]

Let me give you an analogy. [pause]

Weather prediction! [pause]

[write on screen: "Sunny → 70% stays Sunny, 30% becomes Rainy"]

If it's sunny today... probably sunny tomorrow too.

HMM works the same way for tags!

[write on screen: "B-PERSON → 80% followed by I-PERSON"]

If we start a person name... probably still in a person name!

[pause]

When to use HMM? [pause]

Mostly for learning! It's a great educational baseline.

Low-resource scenarios where you have very little data.

[pause]

[point to Pros]

The good stuff:

Fast and efficient.

Handles sequences naturally.

Probabilistic. Gives you confidence scores!

[point to Cons]

The problems:

Makes strong assumptions. [pause]

"Each word only depends on its tag."

That's too simple for real text!

Limited features. Can't use modern tricks.

[pause]

HMM was state-of-the-art in the 90s.

Now we have better options. But good to know!`
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
          notes: `Now that we've seen HMM... here's its smarter cousin. [pause]

Approach five: Conditional Random Fields.

CRF! [pause]

This was THE method before deep learning. [pause]

[pause]

What's different from HMM? [pause]

[write on screen: "HMM: Generative (models everything)"]
[write on screen: "CRF: Discriminative (focuses on the task)"]

HMM tries to model the whole world.

CRF only focuses on: "Given this text, what are the tags?"

That's more efficient!

[pause]

The big win? [pause]

You can add LOTS of features! [pause]

[write on screen: "Features: word shape, prefix, suffix, neighbors..."]

Is the word capitalized?

Does it end in "-tion"?

What's the word before it?

CRF uses all of this!

[pause]

When to use CRF? [pause]

When you have small to medium data.

When you want a solid non-neural baseline.

When interpretability matters!

[pause]

[point to Pros]

The good stuff:

Captures label dependencies. [pause]

"B-PERSON should be followed by I-PERSON, not B-ORG."

Very stable and well-understood.

[point to Cons]

The problems:

You have to engineer features manually. [pause]

Takes time and expertise!

Also... limited context. Can't see the whole document.

[pause]

CRF is still used today! [pause]

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
          notes: `Now we're entering the neural network era! [pause]

Approach six: BiLSTM plus CRF.

[pause]

This was the breakthrough architecture. [pause]

It dominated NER from around 2015 to 2018!

[pause]

What is BiLSTM? [pause]

[write on screen: "BiLSTM = Bidirectional Long Short-Term Memory"]

Let me break that down. [pause]

LSTM is a neural network that remembers sequences.

"Bi" means bidirectional. It reads left-to-right AND right-to-left!

[draw on screen: arrows going both directions through a sentence]

So it knows what comes BEFORE and AFTER each word.

[pause]

Why add CRF on top? [pause]

BiLSTM predicts each word independently.

CRF makes sure the sequence makes sense. [pause]

[write on screen: "BiLSTM says O, B-PER, I-ORG ← CRF fixes this!"]

CRF says: "Wait, I-ORG can't follow B-PER. Let me fix that."

Best of both worlds!

[pause]

When to use this? [pause]

General-purpose NER with moderate data.

When you don't have huge compute budgets.

Multilingual scenarios!

[pause]

[point to Pros]

Learns features automatically! No manual engineering.

Good accuracy with reasonable compute.

[point to Cons]

Needs GPU for training.

Needs more data than CRF alone.

[pause]

This was the gold standard... until transformers arrived!`
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
          notes: `Approach seven: CNN plus BiLSTM. [pause]

This adds one more ingredient to the recipe!

[pause]

What's a CNN? [pause]

[write on screen: "CNN = Convolutional Neural Network"]

CNNs are great at finding patterns in small windows.

Here... we use them on CHARACTERS. [pause]

[write on screen: "M-i-c-r-o-s-o-f-t → character patterns"]

The CNN looks at character patterns.

It learns: "Words ending in -soft might be companies."

[pause]

Why does this help? [pause]

Out-of-vocabulary words! [pause]

[write on screen: "New word: 'Microsift' (typo)"]

BiLSTM alone might not know "Microsift."

But the character CNN sees it looks like "Microsoft."

Handles typos! Handles rare words! Handles morphology!

[pause]

When to use this? [pause]

Noisy text. Social media. User-generated content.

Languages with rich morphology. German. Turkish. Finnish.

Domains with lots of new/rare words.

[pause]

[point to Pros]

Robust to typos and variants.

Captures spelling patterns.

Strong non-transformer baseline!

[point to Cons]

More complex to tune.

Slower than plain BiLSTM.

Still not as good as transformers.

[pause]

This was the peak of pre-transformer NER!`
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
          notes: `Approach eight: spaCy! [pause]

This is the practical engineer's choice. [pause]

[pause]

What is spaCy? [pause]

[write on screen: "spaCy = Industrial-strength NLP library"]

It's a Python library for NLP.

Fast. Production-ready. Well-documented.

[pause]

[demo]

Let me show you how easy it is. [pause]

[write on screen: "nlp = spacy.load('en_core_web_sm')"]
[write on screen: "doc = nlp('Apple is in California')"]
[write on screen: "for ent in doc.ents: print(ent.text, ent.label_)"]

Three lines of code! [pause]

You get: Apple → ORG, California → GPE

Done!

[pause]

Under the hood? [pause]

spaCy uses neural networks.

Transition-based parsing with CNNs.

Or you can use transformer backends!

[pause]

When to use spaCy? [pause]

Rapid prototyping. Quick deployment.

When you need a working pipeline NOW.

Production systems that need speed!

[pause]

[point to Pros]

Incredibly fast inference.

Easy to customize and extend.

Great documentation and community!

[point to Cons]

Accuracy depends on domain fit.

Custom entities need training data.

Black box for pretrained models.

[pause]

If you're building a product... start with spaCy!`
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
          notes: `Now we enter the transformer era! [pause]

Approach nine: BERT fine-tuned for NER.

[pause]

This changed everything. [pause]

BERT came out in 2018 and broke all the records!

[pause]

What is BERT? [pause]

[write on screen: "BERT = Bidirectional Encoder Representations from Transformers"]

It's a neural network pretrained on MASSIVE text.

Wikipedia. Books. The entire internet!

It learns the patterns of language.

[pause]

How do we use it for NER? [pause]

[write on screen: "BERT → Token Classification Head"]

We add a simple layer on top.

For each word: predict PERSON, ORG, LOC, or NONE.

Then we "fine-tune" on our NER data!

[pause]

Why is this so powerful? [pause]

BERT understands CONTEXT deeply. [pause]

[write on screen: "Apple: fruit or company?"]

BERT sees the whole sentence.

"I ate an Apple" → fruit.

"I bought Apple stock" → company.

Magic!

[pause]

When to use BERT? [pause]

When you need high accuracy.

When you have 5K-50K labeled examples.

Domain-specific BERT exists too! BioBERT. FinBERT. LegalBERT.

[pause]

[point to Pros]

State-of-the-art accuracy.

Strong context understanding.

Transfers well to new domains!

[point to Cons]

Compute-heavy. Needs GPU.

Slower inference than classical methods.

Subword alignment can be tricky.

[pause]

This is the current gold standard!`
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
          notes: `Approach ten: RoBERTa and DistilBERT. [pause]

These are BERT's optimized cousins!

[pause]

Let's start with RoBERTa. [pause]

[write on screen: "RoBERTa = Robustly Optimized BERT"]

Same architecture as BERT.

But trained BETTER. More data. Longer. Smarter tricks.

Result? Even higher accuracy!

[pause]

Now DistilBERT. [pause]

[write on screen: "DistilBERT = Distilled BERT"]

This one is SMALLER. [pause]

40% fewer parameters.

60% faster!

But keeps 97% of BERT's accuracy.

[pause]

How? Knowledge distillation. [pause]

The big model "teaches" the small model.

The small model learns to mimic the big one!

[pause]

When to use which? [pause]

[write on screen: "Need best accuracy? → RoBERTa"]
[write on screen: "Need speed/edge deployment? → DistilBERT"]

RoBERTa for research. Maximum quality.

DistilBERT for production. Real-time systems. Mobile. Edge.

[pause]

[point to Pros]

RoBERTa: best accuracy.

DistilBERT: great speed-accuracy tradeoff.

Both well-supported in HuggingFace!

[point to Cons]

Still need GPUs for training.

DistilBERT slightly less accurate.

May need quantization for edge.

[pause]

These are your production transformers!`
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
          notes: `And finally... the newest approach! [pause]

Approach eleven: Large Language Models.

Zero-shot NER! [pause]

[pause]

What does zero-shot mean? [pause]

[write on screen: "Zero-shot = No training data!"]

You don't train anything.

You just ASK the model to do NER!

[pause]

[write on screen: "Prompt: Extract person and org names from: ..."]

You give it a prompt like this.

The LLM reads it and responds with the entities.

Just like chatting with ChatGPT!

[pause]

This is incredibly powerful. [pause]

New entity types? Just describe them in the prompt.

New language? Many LLMs are multilingual.

Complex instructions? LLMs can follow them!

[pause]

[ask audience] Sounds perfect, right?

[pause]

But... there are problems. [pause]

[point to Cons]

Hallucinations. Sometimes it makes things up.

Expensive. API calls cost money. High latency.

Privacy concerns. You're sending data to an API.

Output parsing. The format might vary.

[pause]

When to use LLMs for NER? [pause]

Rapid prototyping. Testing ideas fast.

When you have NO training data.

Complex, changing schemas.

[pause]

[point to Pros]

No labeled data needed!

Flexible. Can handle new entity types easily.

Can reason and follow complex instructions.

[pause]

This is the future... but use with caution!`
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
            <div style={{ textAlign: 'left', fontSize: '0.7em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4fc3f7', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-map" sizeName="2x" darkModeInvert={true} />
                    Quick Selection Guide
                  </h3>
                  <ul style={{ fontSize: '0.95em', lineHeight: '1.8', listStyle: 'none', paddingLeft: 0 }}>
                    <li><strong>No data, strict formats:</strong> Rule-Based, Gazetteer</li>
                    <li><strong>Small data, stable schemas:</strong> CRF, spaCy</li>
                    <li><strong>Moderate data, accuracy:</strong> BiLSTM+CRF, CNN+BiLSTM</li>
                    <li><strong>Best accuracy:</strong> BERT/RoBERTa</li>
                    <li><strong>Low latency/edge:</strong> DistilBERT, optimized spaCy</li>
                    <li><strong>New schema/zero data:</strong> LLM Zero-/Few-Shot</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#81c784', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="2x" darkModeInvert={true} />
                    Data Needs Spectrum
                  </h3>
                  <div style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <p><strong>Training examples needed:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Rule-Based, Gazetteer: <span style={{ color: '#4fc3f7' }}>0 examples</span></li>
                      <li>CRF/HMM: <span style={{ color: '#81c784' }}>1,000-5,000 examples</span></li>
                      <li>BiLSTM models: <span style={{ color: '#ffb74d' }}>5,000-50,000 examples</span></li>
                      <li>Transformers: <span style={{ color: '#ba68c8' }}>3,000-30,000 examples</span></li>
                      <li>Zero-shot LLMs: <span style={{ color: '#f06292' }}>0-10 examples in prompt</span></li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffb74d', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-clock" sizeName="2x" darkModeInvert={true} />
                    Compute & Latency
                  </h3>
                  <div style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <p><strong>Inference time (100 tokens):</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Rule-Based/Gazetteer: <span style={{ color: '#4fc3f7' }}>&lt;1ms</span></li>
                      <li>CRF/HMM: <span style={{ color: '#81c784' }}>~5-10ms</span></li>
                      <li>BiLSTM+CRF: <span style={{ color: '#ffb74d' }}>~20-50ms</span></li>
                      <li>DistilBERT: <span style={{ color: '#ba68c8' }}>~20-100ms</span></li>
                      <li>BERT/RoBERTa: <span style={{ color: '#f06292' }}>~50-200ms</span></li>
                      <li>LLMs: <span style={{ color: '#ef5350' }}>500ms-5s+</span></li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ba68c8', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-rocket" sizeName="2x" darkModeInvert={true} />
                    Maintenance & Deployment
                  </h3>
                  <div style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                    <p><strong>Maintenance:</strong></p>
                    <ul style={{ fontSize: '0.9em' }}>
                      <li>Rules/Gazetteers: frequent manual updates</li>
                      <li>Classical ML: periodic retraining</li>
                      <li>Transformers: retrain/fine-tune when domain shifts</li>
                      <li>LLMs: prompt monitoring, guardrails, parsing</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '25px', padding: '15px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '8px' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="1x" darkModeInvert={true} />
                  Deployment Tips
                </h4>
                <ul style={{ fontSize: '0.9em', lineHeight: '1.6', marginBottom: 0 }}>
                  <li>Combine methods (rules+ML) for better results</li>
                  <li>Add normalization/entity linking step</li>
                  <li>Monitor for concept drift</li>
                  <li>Consider privacy compliance for PII</li>
                  <li>Quantize models when possible for edge</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: `Alright! We've covered all eleven approaches. [pause]

Let's put it all together!

[pause]

[write on screen: "Decision tree for NER"]

Here's how to choose. [pause]

Question 1: Do you have training data? [pause]

No data? → Rules, Dictionary, or Zero-shot LLM.

[pause]

Question 2: How much data? [pause]

Small data (1K-5K)? → CRF or spaCy.

Medium data (5K-50K)? → BiLSTM+CRF or BERT.

Large data (50K+)? → Go full transformer!

[pause]

Question 3: What about speed? [pause]

[write on screen: "Speed ranking"]

Fastest: Rules, Dictionary. Under 1ms.

Fast: CRF, spaCy. 5-20ms.

Medium: BiLSTM, DistilBERT. 20-100ms.

Slow: BERT, RoBERTa. 50-200ms.

Slowest: LLMs. Seconds!

[pause]

[point to Quick Selection Guide]

Let me summarize. [pause]

Strict formats? → Rules.

Known entities? → Dictionary.

Small data, need accuracy? → CRF.

General purpose? → spaCy or BiLSTM.

Best accuracy? → BERT or RoBERTa.

No data, need flexibility? → LLM.

[pause]

[point to Deployment Tips]

Final tips! [pause]

Combine methods! Rules + ML works great.

Add entity linking for normalization.

Monitor for drift. Text changes over time.

Think about privacy. Especially for PII!

[pause]

And that's it! [pause]

You now know eleven ways to do NER.

[ask audience] Any questions?

[pause]

Thank you so much!

Good luck with your NER projects!`
        }
      ]
    }
  ]
};
