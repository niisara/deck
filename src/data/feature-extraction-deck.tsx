import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const featureExtractionDeck: Deck = {
  id: 'feature-extraction-techniques',
  name: '13 Feature Extraction Techniques',
  description: 'Cheat sheets for Traditional, Static, Contextual, and Modern Sentence Encoders',
  category: 'NLP',
  theme: 'moon',
  kenBurns: true,
  backgroundImages: [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1920&q=80',
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80',
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80',
  ],
  slides: [],
  slideGroups: [
    {
      id: 'introduction',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          center: true,
          title: '13 Feature Extraction Techniques',
          content: (
            <div>
              <div style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#1b91e0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-diagram-project" sizeName="5x" style={{ color: '#2190e0' }} darkModeInvert={true} />
                Cheat sheets for Traditional, Static, Contextual, and Modern Sentence Encoders
              </div>
              <div style={{ fontSize: '1.2rem', color: '#9b59b6', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <SvgIcon iconName="duo-cube" sizeName="3x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                  <strong>Traditional count-based methods</strong>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <SvgIcon iconName="duo-layer-group" sizeName="3x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                  <strong>Static word/document embeddings</strong>
                </div>
                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <SvgIcon iconName="duo-brain" sizeName="3x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                  <strong>Contextual token embeddings</strong>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <SvgIcon iconName="duo-rocket" sizeName="3x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                  <strong>Modern sentence encoders</strong>
                </div>
              </div>
              <GSAPAnimated animation="slideInBottom" delay={0.7}>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 13 Feature Extraction Techniques
[cheerfully] Welcome everyone! [excited] Today we're going to walk through **thirteen different feature extraction techniques** that are absolutely essential for working with text in NLP and machine learning.

#### What Are Feature Extraction Techniques?
[conversational] So what exactly is "feature extraction"? [storytelling] Think of it this way — computers don't understand words the way we do. Feature extraction is the process of converting raw text into **numbers** that a machine learning model can actually work with. It's like translating human language into "math language."

#### Why This Matters
[seriously] Without good features, even the fanciest model in the world will perform poorly. [confidently] The quality of your text representation — your features — often matters **more** than the choice of model. That's why understanding these thirteen techniques is so important.

[energetic] We'll cover everything from classic methods like **Bag of Words** 👉 "bag of words" all the way to modern sentence encoders like **GTE** 👉 "jee-tee-ee." By the end of this deck, you'll have a solid mental map of which technique to reach for in different scenarios.

[enthusiastically] Let's dive in!`
        },
        {
          id: 2,
          title: 'Overview',
          content: (
            <div style={{ fontSize: '1.6rem', lineHeight: '1.8', textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ background: 'rgba(231, 173, 82, 0.2)', padding: '1.2rem', borderRadius: '10px' }}>
                  <div style={{ color: '#e7ad52', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#e7ad52' }} darkModeInvert={true} />
                    <strong>Traditional (count-based)</strong>
                  </div>
                  <div style={{ marginBottom: '0.5rem', marginLeft: '26px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e7ad52', fontSize: '1.2rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>1</span>
                    Bag of Words (BoW)
                  </div>
                  <div style={{ marginLeft: '26px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#e7ad52', fontSize: '1.2rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>2</span>
                    TF-IDF
                  </div>
                </div>

                <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1.2rem', borderRadius: '10px', color: '#42b3ff' }}>
                  <div style={{ color: '#1b91e0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-layer-group" sizeName="2x" style={{ color: '#42b3ff' }} darkModeInvert={true} />
                    <strong>Static embeddings (word/doc level)</strong>
                  </div>
                  <div style={{ marginBottom: '0.5rem', marginLeft: '26px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>3</span>
                    Word2Vec (CBOW)
                  </div>
                  <div style={{ marginBottom: '0.5rem', marginLeft: '26px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>4</span>
                    Word2Vec (Skip-Gram)
                  </div>
                  <div style={{ marginBottom: '0.5rem', marginLeft: '26px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>5</span>
                    GloVe
                  </div>
                  <div style={{ marginBottom: '0.5rem', marginLeft: '26px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>6</span>
                    FastText
                  </div>
                  <div style={{ marginLeft: '26px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>7</span>
                    Doc2Vec
                  </div>
                </div>

                <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1.2rem', borderRadius: '10px', color: '#cf58ff' }}>
                  <div style={{ color: '#9b59b6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-brain-circuit" sizeName="xl" style={{ color: '#cf58ff' }} darkModeInvert={true} />
                    <strong>Contextual token embeddings</strong>
                  </div>
                  <div style={{ marginBottom: '0.5rem', marginLeft: '26px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>8</span>
                    ELMo
                  </div>
                  <div style={{ marginBottom: '0.5rem', marginLeft: '26px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>9</span>
                    BERT Embeddings
                  </div>
                  <div style={{ marginLeft: '26px', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.2rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>10</span>
                    Sentence-BERT (SBERT)
                  </div>
                </div>

                <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1.2rem', borderRadius: '10px' }}>
                  <div style={{ color: '#2ecc71', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-rocket" sizeName="xl" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                    <strong>Modern sentence encoders</strong>
                  </div>
                  <div style={{ marginBottom: '0.5rem', marginLeft: '26px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2ecc71', fontSize: '1.2rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>11</span>
                    Universal Sentence Encoder (USE)
                  </div>
                  <div style={{ marginBottom: '0.5rem', marginLeft: '26px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2ecc71', fontSize: '1.2rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>12</span>
                    E5 Embeddings
                  </div>
                  <div style={{ marginLeft: '26px', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#2ecc71', fontSize: '1.2rem' }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>13</span>
                    GTE Embeddings
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(231, 173, 82, 0.15)', borderRadius: '8px', textAlign: 'left', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <SvgIcon iconName="duo-info-circle" sizeName="lg" darkModeInvert={true} />
                <strong>Format per slide:</strong> Model Type • Representation Style • Best Use Case • Strengths • Weaknesses • Notes
              </div>
            </div>
          ),
          notes: `### 13 Techniques — 4 Categories
[conversational] Alright, let's get a bird's-eye view of what we're covering today. [lecture] These thirteen techniques fall into **four broad categories**, and understanding where each technique fits will help you make better choices in your projects.

#### 🏗️ Traditional Methods
[confidently] First up, we have the **Traditional** methods — **Bag of Words** 👉 "bag of words" and **TF-IDF** 👉 "tee-eff eye-dee-eff." [storytelling] These are the classics. They create **sparse** vectors — mostly zeros — and they don't understand word meaning or context at all. [reassuringly] But they're fast, simple, and sometimes that's exactly what you need.

#### 📐 Static Word Embeddings
[lecture] Next, we have **Static Word Embeddings** — **Word2Vec** 👉 "word-too-veck", **GloVe** 👉 "glove", **FastText**, and **Doc2Vec** 👉 "doc-too-veck." These create **dense** vectors where each word gets a fixed representation. [conversational] The word "bank" always gets the same vector regardless of whether you're talking about a river bank or a money bank. [cautiously] That's the limitation — no context awareness.

#### 🧠 Contextual Embeddings
[excited] Then we move into **Contextual Embeddings** — **ELMo** 👉 "EL-moh", **BERT** 👉 "burt", and **SBERT** 👉 "ess-burt." [enthusiastically] These are the game-changers. The same word gets a **different** vector depending on the sentence it appears in. [storytelling] So "bank" next to "river" gives a different vector than "bank" next to "money." [playfully] Pretty cool, right?

#### 🚀 Modern Sentence Encoders
[confidently] Finally, we have **Modern Sentence Encoders** — **USE** 👉 "Universal Sentence Encoder", **E5** 👉 "ee-five", and **GTE** 👉 "jee-tee-ee." [impressed] These are purpose-built to produce high-quality sentence-level vectors, and they dominate leaderboards like **MTEB** 👉 "em-tee-ee-bee" today.

[energetic] Let's start with the simplest technique of them all — Bag of Words!`
        }
      ]
    },
    {
      id: 'technique-1',
      title: '1) Bag of Words (BoW) — Cheat Sheet',
      slides: [
        {
          id: 3,
          title: '1) Bag of Words (BoW) — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <div style={{ background: 'rgba(231, 173, 82, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '1rem' }}>
                  <SvgIcon iconName="duo-quote-left" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                  Count-based vectorization: "The cat sat on the mat" → [1,1,1,1,2,0,...]
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                      <strong>Model Type
                        <MermaidPopover
                          title="BoW Pipeline"
                          diagram={`flowchart LR
    A["📄 Raw Text"] --> B["🔤 Tokenize"]
    B --> C["📊 Count Words"]
    C --> D["📐 Sparse Vector"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Count-based vectorization (classic IR/NLP)</div>
                  </div>
                  <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                      <strong>Representation Style</strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Sparse vector of token counts/binary; optional n-grams</div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Quick baselines, short-text classification with linear models, topic cues</div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.7}>
                <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
                    <strong>Notes</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Consider stopword removal, n-gram ranges, hashing trick to cap dimensions</div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Bag of Words (BoW) — Cheat Sheet
[energetic] Let's kick things off with **Bag of Words**, often abbreviated as **BoW** 👉 "bow" (like taking a bow).

#### 📋 What Is Bag of Words?
[storytelling] Imagine you have a sentence and you literally dump all the words into a bag — you shake it up, throw away the order, and just count how many times each word appears. [cheerfully] That's Bag of Words! It's the simplest way to turn text into numbers.

[conversational] For example, the sentence "the cat sat on the mat" becomes a vector where "the" has count 2, "cat" has count 1, "sat" has count 1, and so on. Simple, right?

#### 🏗️ How It Works
\`\`\`mermaid
flowchart LR
    A["📄 Raw Text"] --> B["🔤 Tokenize"]
    B --> C["📊 Count Words"]
    C --> D["📐 Sparse Vector"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
[lecture] You tokenize each document into words, build a vocabulary of all unique words across your corpus, and then represent each document as a count vector. [firmly] The result is a **sparse, high-dimensional** vector — sparse because most words in the vocabulary don't appear in any given document.

#### 🎯 Best Use Case
[confidently] BoW is great for **text classification baselines**, **keyword-heavy tasks**, and as a quick sanity check before trying fancier methods. [pleased] If a simple BoW model gets 90% accuracy, that tells you something important about your data.

#### ⚠️ Key Limitation
[cautiously] It creates **very large, sparse** vectors — if your vocabulary has 50,000 words, every document gets a 50,000-dimensional vector. [seriously] And it completely ignores word order: "dog bites man" and "man bites dog" look identical to BoW.

[conversational] Now let's look at what BoW does well and where it falls short...`
        },
        {
          id: 4,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="BoW: Word Order Is Lost"
                        diagram={`graph TB
    subgraph S1["Sentence 1: not good"]
        A1["not=1, good=1"]
    end
    subgraph S2["Sentence 2: good not"]
        A2["not=1, good=1"]
    end
    S1 --> R["Same BoW Vector!"]
    S2 --> R
    style S1 fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
    style S2 fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
    style R fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:#000`}
                      />
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#81c784' }}>
                        <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                        <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Simple</li>
                      <li>Interpretable</li>
                      <li>Fast to compute</li>
                      <li>Works with many classical ML models</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Ignores word order/context</li>
                      <li>High dimensionality/sparsity</li>
                      <li>Poor synonym handling</li>
                      <li>OOV sensitivity</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### BoW: Strengths and Limitations
[conversational] So we've seen what Bag of Words is — now let's be honest about where it shines and where it struggles.

#### ✅ Strengths
[pleased] The good stuff: BoW is **dead simple** to implement. [cheerfully] You can literally code it in a few lines of Python. [confidently] There's no training required — just count words and you're done. It's also **fast** — both to build and to query. [reassuringly] And for many text classification tasks, especially when you have lots of training data, it works surprisingly well as a baseline. Don't underestimate simplicity!

[lecture] Another big advantage is **interpretability**. Because each dimension corresponds to a specific word, you can easily see which words are driving predictions. [playfully] Try doing that with a 768-dimensional BERT vector!

#### ❌ Limitations
[disappointed] The problems: BoW treats every word as **completely independent** — it has no idea that "happy" and "joyful" mean similar things. [cautiously] There's also **no word order** — "not good" and "good not" are identical. This means it misses negation, sarcasm, and nuanced meaning.

[seriously] The vectors are **extremely sparse and high-dimensional**. A vocabulary of 100,000 words means 100,000 dimensions, mostly filled with zeros. This can lead to the **curse of dimensionality** — too many features relative to your training samples.

[firmly] Finally, there's **no out-of-vocabulary** 👉 "oh-oh-vee" handling. If a word wasn't in your training set, it's simply ignored.

[conversational] Now that we've covered the simplest method, let's look at a smarter version — TF-IDF, which addresses some of BoW's weaknesses.`
        }
      ]
    },
    {
      id: 'technique-2',
      title: '2) TF-IDF — Cheat Sheet',
      slides: [
        {
          id: 5,
          title: '2) TF-IDF — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ background: 'rgba(231, 173, 82, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', fontSize: '1rem' }}>
                  <SvgIcon iconName="duo-calculator" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                  <strong>Term Frequency × Inverse Document Frequency</strong>
                  <div style={{ marginTop: '0.5rem', fontFamily: 'monospace' }}>
                    TF-IDF = TF(t,d) × IDF(t)<br />
                    Where: TF(t,d) = frequency of term t in document d IDF(t) = log(N/dft)
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                      <strong>Model Type
                        <MermaidPopover
                          title="TF-IDF Pipeline"
                          diagram={`flowchart LR
    A["📄 Document"] --> B["📊 Term Frequency"]
    B --> C["✖️ IDF Weight"]
    C --> D["📐 Weighted Sparse Vector"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Count-based with global weighting</div>
                  </div>
                  <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                      <strong>Representation Style</strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Sparse vectors weighted by TF × IDF</div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="scaleIn" delay={0.5}>
                <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Keyword-driven retrieval/ranking, classic classifiers, feature selection</div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.7}>
                <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
                    <strong>Notes</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Use sublinear TF/log TF, document length normalization, n-grams, pruning min_df/max_df</div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### TF-IDF — Cheat Sheet
[enthusiastically] Now let's level up from basic word counts to something smarter — **TF-IDF** 👉 "tee-eff eye-dee-eff." It stands for **Term Frequency–Inverse Document Frequency**.

#### 📋 What Is TF-IDF?
[storytelling] Here's the big idea: not all words are equally important. [conversational] The word "the" appears in almost every document — it's not very informative. [excited] But a word like "mitochondria" appearing in a document? That's probably telling you something important about the topic!

[confidently] TF-IDF captures this intuition. It **boosts** rare, distinctive words and **penalizes** common, generic ones. [playfully] Think of it as Bag of Words with a built-in importance filter.

#### 🏗️ How It Works
\`\`\`mermaid
flowchart LR
    A["📄 Document"] --> B["📊 Term Frequency"]
    B --> C["✖️ IDF Weight"]
    C --> D["📐 Weighted Sparse Vector"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
[lecture] **TF** (Term Frequency) counts how often a word appears in a document. **IDF** (Inverse Document Frequency) measures how rare a word is across all documents. [confidently] Multiply them together and you get a score that's high for words that are **frequent in this document** but **rare overall**.

[conversational] The formula is: TF-IDF = TF × log(N / DF), where N is total documents and DF is how many documents contain the word.

#### 🎯 Best Use Case
[firmly] TF-IDF is the go-to for **information retrieval**, **search engines**, **keyword extraction**, and **document ranking**. [pleased] It's also a solid baseline for text classification — often beating raw BoW.

#### 💡 Key Insight
[confidently] Unlike BoW, TF-IDF gives you a notion of word importance. [reassuringly] It's still sparse and doesn't understand semantics, but it's a meaningful step up from raw counts.

[conversational] Let's see its strengths and limitations...`
        },
        {
          id: 6,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="TF-IDF Calculation Example"
                        diagram={`graph TB
    subgraph A["Word: machine (rare)"]
        TF1["TF = 3/50 = 0.06"]
        IDF1["IDF = log(1000/5) = 5.3"]
        TF1 --> R1["TF-IDF = 0.318"]
        IDF1 --> R1
    end
    subgraph B["Word: the (common)"]
        TF2["TF = 10/50 = 0.2"]
        IDF2["IDF = log(1000/999) = 0.001"]
        TF2 --> R2["TF-IDF = 0.0002 (penalized!)"]
        IDF2 --> R2
    end
    style A fill:#e3f2fd,stroke:#1976d2,color:#000
    style B fill:#fff9c4,stroke:#f57c00,color:#000
    style R1 fill:#c8e6c9,color:#000
    style R2 fill:#ffcdd2,color:#000`}
                      />
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#81c784' }}>
                        <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                        <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Down-weights common terms</li>
                      <li>Strong IR baseline</li>
                      <li>Interpretable</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Still sparse</li>
                      <li>No semantics/context</li>
                      <li>Length sensitivity</li>
                      <li>Needs normalization</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### TF-IDF: Strengths and Limitations
[conversational] Now that we understand TF-IDF, let's look at where it excels and where it hits a wall.

#### ✅ Strengths
[pleased] The good stuff: TF-IDF is **better than raw counts** because it automatically downweights common words like "the", "is", "and" — you don't even need a stopword list. [confidently] It's **widely supported** in libraries like scikit-learn 👉 "sigh-kit learn" — literally one line of code: \`TfidfVectorizer().fit_transform(docs)\`.

[lecture] It's also **extremely interpretable**. You can look at the top TF-IDF words in a document and immediately understand what it's about. [enthusiastically] This makes it great for **keyword extraction** and **feature analysis**. Plus, it's **fast** — even on millions of documents.

#### ❌ Limitations
[disappointed] The problems: Just like BoW, TF-IDF **ignores word order** and **doesn't understand semantics**. [cautiously] "Happy" and "joyful" are as unrelated as "happy" and "table" — there's no concept of word meaning.

[seriously] The vectors are still **sparse and high-dimensional**, though slightly more useful than raw counts. [firmly] And TF-IDF has **no context awareness** — every word gets the same weight regardless of where it appears in the sentence.

[cautiously] There's also **no OOV handling** — new words not seen during fitting are simply dropped.

#### 🔑 When to Choose TF-IDF Over BoW?
[confidently] Almost always! TF-IDF is strictly better than raw BoW for most tasks. [conversational] The only exception might be very short texts where term frequencies don't vary much.

[excited] Now let's make a big leap — from counting words to understanding word **meaning**. Enter Word2Vec!`
        }
      ]
    },
    {
      id: 'technique-3',
      title: '3) Word2Vec (CBOW) — Cheat Sheet',
      slides: [
        {
          id: 7,
          title: '3) Word2Vec (CBOW) — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <div style={{ background: 'rgba(27, 145, 224, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-diagram-project" sizeName="lg" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Continuous Bag of Words (CBOW) Architecture</strong>
                  </div>
                  <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="sm" style={{ margin: '0px' }} darkModeInvert={true} />
                    Predicts center word from surrounding context words
                  </div>
                  <div style={{ marginTop: '0.5rem', fontSize: '1rem', fontStyle: 'italic' }}>
                    Context: "the cat" + "sat" → Target: "on"
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                      <strong>Model Type
                        <MermaidPopover
                          title="CBOW Architecture"
                          diagram={`flowchart LR
    A["📝 Context Words"] --> B["🧠 Neural Net"]
    B --> C["🎯 Predict Center Word"]
    C --> D["📐 Dense 300d Vectors"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Neural static word embeddings (predict center from context)</div>
                  </div>
                  <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                      <strong>Representation Style</strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Dense word vectors (typically 100–300d)</div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.5}>
                <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Large corpora; fast training; syntactic similarity features</div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="bounceIn" delay={0.7}>
                <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
                    <strong>Notes</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Use negative sampling; window ~5; pre-trained models available</div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Word2Vec (CBOW) — Cheat Sheet
[excited] Okay, now we're entering the world of **word embeddings** — and this is where things get really exciting! [enthusiastically] Let's talk about **Word2Vec** 👉 "word-too-veck", specifically the **CBOW** 👉 "see-bow" variant, which stands for **Continuous Bag of Words**.

#### 📋 What Is Word2Vec CBOW?
[lecture] Word2Vec was a revolutionary idea from Google in 2013. [confidently] The insight is simple but powerful: **words that appear in similar contexts should have similar meanings**. [conversational] So instead of just counting words, we train a neural network to learn **dense, meaningful** vectors for each word.

[storytelling] CBOW specifically works by taking the **surrounding context words** and trying to **predict the center word**. For example, given "the cat ___ on the mat," it tries to predict "sat." [reassuringly] Through this prediction task, the model learns that words used in similar contexts get similar vectors.

#### 🏗️ How CBOW Works
\`\`\`mermaid
flowchart LR
    A["📝 Context Words"] --> B["🧠 Neural Net"]
    B --> C["🎯 Predict Center Word"]
    C --> D["📐 Dense 300d Vectors"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
[lecture] The network takes context words as input, averages their embeddings, and predicts the target word. [pleased] After training on a massive corpus, the learned weight matrix becomes your word embeddings!

#### 🎯 Best Use Case
[confidently] CBOW is great for **word similarity tasks**, **analogy detection** (like king − man + woman = queen), and as input features for downstream ML models. [reassuringly] It trains **faster** than Skip-Gram and works well when you have a lot of data.

[conversational] Let's see what's good and not so good about CBOW...`
        },
        {
          id: 8,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="bounceIn" delay={0.2}>
                  <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="CBOW: Predict Center Word from Context"
                        diagram={`graph LR
    A["The"] --> E["CBOW\nModel"]
    B["quick"] --> E
    C["fox"] --> E
    D["jumped"] --> E
    E --> F["Predicts: brown"]
    style A fill:#e3f2fd,color:#000
    style B fill:#e3f2fd,color:#000
    style C fill:#e3f2fd,color:#000
    style D fill:#e3f2fd,color:#000
    style E fill:#e1bee7,color:#000
    style F fill:#c8e6c9,color:#000`}
                      />
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#81c784' }}>
                        <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                        <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Efficient</li>
                      <li>Good for frequent words</li>
                      <li>Captures local context</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" delay={0.4}>
                  <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>One vector per word</li>
                      <li>Limited global info</li>
                      <li>OOV issues</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Word2Vec CBOW: Strengths and Limitations
[conversational] Let's evaluate CBOW honestly — what makes it a breakthrough, and where does it fall short?

#### ✅ Strengths
[pleased] The good stuff: CBOW gives you **dense, low-dimensional** vectors — typically 100 to 300 dimensions instead of the 50,000+ sparse dimensions of BoW. [confidently] This means your models train faster and generalize better.

[excited] The real magic is that CBOW captures **semantic relationships**. Words with similar meanings end up close together in vector space. [enthusiastically] "King" and "queen" are near each other. "Paris" and "France" are near each other. [playfully] You can even do **vector arithmetic** — the famous "king minus man plus woman equals queen" example.

[reassuringly] CBOW also trains **faster** than its sibling, Skip-Gram, because it predicts one word from many context words, which is computationally cheaper.

#### ❌ Limitations
[disappointed] The problems: CBOW produces **static embeddings** — each word gets **one** vector regardless of context. [cautiously] So the word "bank" has the same vector whether you're talking about a river bank or a financial bank. [seriously] This is a fundamental limitation.

[concerned] CBOW also struggles with **rare words**. Since it averages context words, frequent words dominate training, and rare words get lower-quality vectors. [firmly] It also can't handle **out-of-vocabulary words** at all — if a word wasn't in the training data, you get nothing.

[disappointed] Finally, CBOW gives you **word-level** vectors only. [cautiously] If you need a vector for a whole sentence or document, you have to average the word vectors, which loses a lot of information.

[conversational] Now let's flip the script — literally — and look at Skip-Gram, the other Word2Vec variant that works in the **opposite direction**.`
        }
      ]
    },
    {
      id: 'technique-4',
      title: '4) Word2Vec (Skip-Gram) — Cheat Sheet',
      slides: [
        {
          id: 9,
          title: '4) Word2Vec (Skip-Gram) — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ background: 'rgba(27, 145, 224, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-diagram-project" sizeName="lg" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Skip-Gram: Predict context words from a target word</strong>
                  </div>
                  <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="sm" style={{ margin: '0px' }} darkModeInvert={true} />
                    Target → Context (opposite of CBOW)
                  </div>
                  <div style={{ marginTop: '0.5rem', fontSize: '1rem', fontStyle: 'italic' }}>
                    Better for rare words and capturing semantic relationships
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                      <strong>Model Type
                        <MermaidPopover
                          title="Skip-Gram Architecture"
                          diagram={`flowchart LR
    A["🎯 Center Word"] --> B["🧠 Neural Net"]
    B --> C["📝 Predict Context"]
    C --> D["📐 Dense 300d Vectors"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Neural static word embeddings - predict context from center</div>
                  </div>
                  <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                      <strong>Representation Style</strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Dense word vectors (100–300d)</div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Semantic relations; better for rare words; analogy tasks</div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.7}>
                <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
                    <strong>Notes</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Negative sampling or hierarchical softmax; tune window and min_count</div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Word2Vec (Skip-Gram) — Cheat Sheet
[conversational] Now let's look at the other side of the Word2Vec coin — **Skip-Gram**. [lecture] While CBOW predicts the center word from context, Skip-Gram does the exact **opposite**.

#### 📋 What Is Skip-Gram?
[storytelling] Skip-Gram takes a **single center word** and tries to predict all the **surrounding context words**. [playfully] Given the word "sat," it tries to predict "the," "cat," "on," "the," "mat." It's like playing a word association game — given one word, what other words are likely to appear nearby?

[confidently] This reversal might seem like a small change, but it has important practical consequences.

#### 🏗️ How Skip-Gram Works
\`\`\`mermaid
flowchart LR
    A["🎯 Center Word"] --> B["🧠 Neural Net"]
    B --> C["📝 Predict Context"]
    C --> D["📐 Dense 300d Vectors"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
[lecture] For each word in the corpus, Skip-Gram creates multiple training pairs — one for each context word. [reassuringly] This means it sees rare words more often relative to CBOW, which averages context.

#### 🎯 Best Use Case
[confidently] Skip-Gram excels with **smaller datasets** and when you care about **rare word quality**. [conversational] It's the variant most people think of when they say "Word2Vec" because it generally produces higher-quality embeddings — just slower to train.

#### 💡 CBOW vs Skip-Gram Quick Rule
[firmly] Have a lot of data and need speed? Use **CBOW**. Want better embeddings and can wait longer? Use **Skip-Gram**.

[conversational] Let's check out the strengths and limitations...`
        },
        {
          id: 10,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="Skip-Gram: Vector Analogy Examples"
                        diagram={`graph TB
    A["king"] --> E["- man"]
    E --> F["+ woman"]
    F --> G["= queen"]
    H["Paris"] --> I["- France"]
    I --> J["+ Italy"]
    J --> K["= Rome"]
    style A fill:#4fc3f7,color:#000
    style G fill:#c8e6c9,color:#000
    style H fill:#4fc3f7,color:#000
    style K fill:#c8e6c9,color:#000`}
                      />
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#81c784' }}>
                        <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                        <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Handles rare words better</li>
                      <li>Strong semantic structure</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Slower than CBOW</li>
                      <li>Still static (no context-specific senses)</li>
                      <li>OOV issues</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Word2Vec Skip-Gram: Strengths and Limitations
[conversational] Let's break down Skip-Gram's pros and cons.

#### ✅ Strengths
[pleased] The good stuff: Skip-Gram produces **higher quality embeddings for rare words** compared to CBOW. [lecture] Because each word independently predicts multiple context words, rare words get more "attention" during training.

[enthusiastically] It captures the same beautiful **semantic properties** as CBOW — word analogies, similarity clustering, and arithmetic. [conversational] Many of the famous "king minus man plus woman equals queen" demos were actually done with Skip-Gram embeddings.

[impressed] Skip-Gram also uses a technique called **Negative Sampling** that makes training efficient even with huge vocabularies. [playfully] Instead of computing a full softmax over 100,000+ words, it only samples a few negative examples — brilliantly clever.

#### ❌ Limitations
[disappointed] The problems: Like CBOW, Skip-Gram produces **static embeddings** — no context sensitivity. [cautiously] The word "crane" (bird vs machine) always gets the same vector. [seriously] This is the Achilles' heel of all static embedding methods.

[concerned] Training is **slower than CBOW** because each center word creates multiple training examples. [firmly] With large corpora, this difference can be significant.

[disappointed] Again, **no OOV handling** — unknown words at inference time simply can't be embedded.

[cautiously] And just like CBOW, you only get **word vectors**, not sentence or document vectors. Averaging word vectors to get sentence representations loses important structural information.

#### 🔄 The Evolution Continues
[conversational] So we've seen two Word2Vec variants — both brilliant, both limited by static representations. [excited] Next up is **GloVe** 👉 "glove", which takes a fundamentally different approach: instead of prediction, it uses **global word co-occurrence statistics**.`
        }
      ]
    },
    {
      id: 'technique-5',
      title: '5) GloVe — Cheat Sheet',
      slides: [
        {
          id: 11,
          title: '5) GloVe — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ background: 'rgba(27, 145, 224, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-network-wired" sizeName="lg" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Global Vectors for Word Representation</strong>
                  </div>
                  <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-chart-network" sizeName="sm" darkModeInvert={true} />
                    Trained on word co-occurrence statistics
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                      <strong>Model Type
                        <MermaidPopover
                          title="GloVe Pipeline"
                          diagram={`flowchart LR
    A["📚 Corpus"] --> B["📊 Co-occurrence Matrix"]
    B --> C["➗ Matrix Factorization"]
    C --> D["📐 Dense 300d Vectors"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Static word embeddings trained on global co-occurrence</div>
                  </div>
                  <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                      <strong>Representation Style</strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Dense word vectors (50–300d typical)</div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.5}>
                <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Plug-and-play static embeddings; low-resource settings</div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="scaleIn" delay={0.7}>
                <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
                    <strong>Notes</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Choose domain-appropriate pretrained set (Wiki, Common Crawl)</div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### GloVe — Cheat Sheet
[conversational] Now let's look at **GloVe** 👉 "glove" — which stands for **Global Vectors for Word Representation**. [lecture] It was created at Stanford and it takes a completely different approach from Word2Vec.

#### 📋 What Makes GloVe Different?
[confidently] While Word2Vec learns by predicting words in local context windows, GloVe takes a **global** approach. [lecture] It first builds a giant **co-occurrence matrix** — a table that counts how often every pair of words appears near each other across the entire corpus. Then it factorizes this matrix to produce word vectors.

[storytelling] Think of it like this: Word2Vec is like learning a language by reading one sentence at a time. GloVe is like first reading the entire library, building statistics about word relationships, and *then* creating the vectors. [reassuringly] Both approaches capture semantic meaning, but through different paths.

#### 🏗️ How GloVe Works
\`\`\`mermaid
flowchart LR
    A["📚 Corpus"] --> B["📊 Co-occurrence Matrix"]
    B --> C["➗ Matrix Factorization"]
    C --> D["📐 Dense 300d Vectors"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
[lecture] The key insight is that the **ratio** of co-occurrence probabilities encodes meaning. [storytelling] If "ice" co-occurs with "solid" much more than "steam" does, that tells us something meaningful about these words.

#### 🎯 Best Use Case
[confidently] GloVe embeddings are excellent as **pre-trained features** for downstream NLP tasks — sentiment analysis, named entity recognition, text classification, and more. [pleased] Stanford provides pre-trained vectors on Wikipedia and Common Crawl data that you can use right out of the box.

#### 💡 Key Advantage
[reassuringly] Because GloVe uses **global** statistics, it tends to capture broader word relationships than Word2Vec, which only looks at local context windows.

[conversational] Let's see the strengths and limitations...`
        },
        {
          id: 12,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="scaleIn" delay={0.2}>
                  <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="GloVe: Global Co-occurrence Training"
                        diagram={`flowchart LR
    A["Corpus\n6B tokens"] --> B["Co-occurrence\nMatrix X"]
    B --> C["Matrix\nFactorization"]
    C --> D["Word\nVectors W"]
    D --> E["ice~cold\nsteam~hot"]
    style A fill:#4fc3f7,color:#000
    style B fill:#e3f2fd,color:#000
    style C fill:#e1bee7,color:#000
    style D fill:#c8e6c9,color:#000
    style E fill:#fff9c4,color:#000`}
                      />
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#81c784' }}>
                        <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                        <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Uses global statistics</li>
                      <li>Fast to use (pretrained sets)</li>
                      <li>Good semantic structure</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.4}>
                  <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Static (no context)</li>
                      <li>OOV limitations</li>
                      <li>Domain mismatch risk</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### GloVe: Strengths and Limitations
[conversational] Let's evaluate where GloVe shines and where it has gaps.

#### ✅ Strengths
[pleased] The good stuff: GloVe's biggest advantage is that it leverages **global corpus statistics**, which means it captures word relationships that might be missed by Word2Vec's local context windows. [lecture] If two words rarely appear in the same sentence but have similar overall co-occurrence patterns, GloVe can still figure out they're related.

[confidently] Stanford provides excellent **pre-trained vectors** — trained on 6 billion tokens from Wikipedia and Gigaword. [pleased] These are battle-tested and widely used. You just download them and you're ready to go.

[reassuringly] GloVe also tends to perform **competitively with Word2Vec** on most benchmarks, and sometimes better — especially on word analogy tasks. The training is also **efficient** because matrix factorization is a well-understood, optimizable problem.

#### ❌ Limitations
[disappointed] The problems: Like all static embeddings, GloVe produces **one vector per word** regardless of context. [cautiously] "Bank" is "bank" whether it's financial or geographical. This is the same fundamental limitation we saw with Word2Vec.

[concerned] Building the co-occurrence matrix requires **significant memory** — it grows with the square of the vocabulary size. [seriously] For very large vocabularies, this can be prohibitive.

[disappointed] There's still **no OOV handling**. If a word wasn't in the training vocabulary, you can't embed it.

[cautiously] And again, these are **word-level** embeddings only. You need to aggregate (usually average) them to get sentence or document representations, which loses important information.

[excited] Now let's meet a technique that solves the OOV problem beautifully — FastText!`
        }
      ]
    },
    {
      id: 'technique-6',
      title: '6) FastText — Cheat Sheet',
      slides: [
        {
          id: 13,
          title: '6) FastText — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="bounceIn" delay={0.1}>
                <div style={{ background: 'rgba(27, 145, 224, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-text" sizeName="lg" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Subword-enriched embeddings</strong>
                  </div>
                  <div style={{ fontSize: '1rem', marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-scissors" sizeName="sm" style={{ margin: '0px' }} darkModeInvert={true} />
                    Word: "playing" → Subwords: &lt;pla, play, layi, ayin, ying, ing&gt; → Vector: Sum of word + subword vectors
                  </div>
                  <div style={{ marginTop: '0.5rem', fontSize: '1rem', fontStyle: 'italic' }}>
                    Even unseen words can be embedded using character n-grams
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                      <strong>Model Type
                        <MermaidPopover
                          title="FastText Pipeline"
                          diagram={`flowchart LR
    A["📝 Word"] --> B["✂️ Character N-grams"]
    B --> C["📐 Sum N-gram Vectors"]
    C --> D["🎯 Word Vector"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Static word embeddings with subword n-grams</div>
                  </div>
                  <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                      <strong>Representation Style</strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Dense word vectors enriched by character n-grams</div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.5}>
                <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Morphologically rich languages, OOV handling</div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.7}>
                <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
                    <strong>Notes</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Good default for multilingual tasks, pick aligned vectors if cross-lingual</div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### FastText — Cheat Sheet
[enthusiastically] Here's a technique that elegantly solves one of the biggest problems we've been complaining about — **out-of-vocabulary words**. [excited] Meet **FastText**, created by Facebook's AI Research team, or **FAIR** 👉 "fair."

#### 📋 What Makes FastText Special?
[lecture] FastText's big innovation is that instead of treating each word as a single unit, it breaks words down into **character n-grams** 👉 "en-grams" — overlapping chunks of characters. [storytelling] The word "where" might be broken into "wh," "whe," "her," "ere," "re" plus the whole word. Each n-gram gets its own vector, and the word's vector is the **sum** of all its n-gram vectors.

[delighted] Why is this genius? [excited] Because even if you've never seen the word "unfriendliness" during training, you've probably seen n-grams like "un," "friend," "friend," "ly," "ness" — and FastText can combine those to create a reasonable vector for the new word!

#### 🏗️ How FastText Works
\`\`\`mermaid
flowchart LR
    A["📝 Word"] --> B["✂️ Character N-grams"]
    B --> C["📐 Sum N-gram Vectors"]
    C --> D["🎯 Word Vector"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
[lecture] Training works just like Skip-Gram Word2Vec, but enriched with subword information. [pleased] This means FastText inherits Word2Vec's semantic quality while adding the superpower of **OOV handling**.

#### 🎯 Best Use Case
[confidently] FastText is ideal for languages with **rich morphology** (like Turkish, Finnish, or German) where words have many forms, and for domains with lots of **typos, slang, or technical jargon** where OOV words are common.

[conversational] Let's look at the trade-offs...`
        },
        {
          id: 14,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="FastText: Subword OOV Handling"
                        diagram={`graph TB
    subgraph Known["Known Word: play"]
        W1["pla, lay, ayi, yis..."] --> C["Shared n-gram vectors"]
    end
    subgraph OOV["OOV Word: unplayed"]
        W2["un, unp, npl, pla, lay, yed"] --> C
    end
    C --> D["Word Vector"]
    style Known fill:#e3f2fd,stroke:#1976d2,color:#000
    style OOV fill:#fff9c4,stroke:#f57c00,color:#000
    style D fill:#c8e6c9,stroke:#4caf50,color:#000`}
                      />
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#81c784' }}>
                        <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                        <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Handles OOV via subwords</li>
                      <li>Better morphology</li>
                      <li>Stronger for rare/inflected forms</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Larger models</li>
                      <li>Still context-independent</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### FastText: Strengths and Limitations
[conversational] Let's assess FastText's advantages and drawbacks.

#### ✅ Strengths
[enthusiastically] The good stuff: The killer feature is **OOV handling**. [excited] Unlike Word2Vec and GloVe, FastText can generate vectors for words it has never seen before — as long as some of the character n-grams overlap with known words. [pleased] This is a massive advantage in real-world applications where you encounter typos, new slang, domain-specific terms, and morphological variants.

[delighted] FastText also handles **morphologically rich languages** beautifully. [storytelling] In German, where you can compound words into incredibly long forms like "Donaudampfschifffahrtsgesellschaftskapitän," FastText can still produce meaningful vectors because it recognizes familiar n-gram patterns within the word.

[confidently] It comes with excellent **pre-trained models** for 157 languages, making it very accessible. [pleased] Facebook released these trained on Common Crawl and Wikipedia data.

#### ❌ Limitations
[disappointed] The problems: FastText vectors are still **static** — no context sensitivity. [cautiously] The word "bank" still gets the same vector in every context.

[concerned] The subword approach means it needs to store vectors for **all character n-grams**, which increases the model size significantly compared to Word2Vec. [seriously] A typical FastText model can be several gigabytes.

[disappointed] Like Word2Vec, it produces **word-level** vectors only — you still need to aggregate them for sentence-level tasks.

[cautiously] And while OOV handling is a huge improvement, it's not perfect. Completely unrelated new words with unfamiliar character patterns may still get poor vectors.

[conversational] Now let's move to a technique that operates at the **document level** — Doc2Vec!`
        }
      ]
    },
    {
      id: 'technique-7',
      title: '7) Doc2Vec — Cheat Sheet',
      slides: [
        {
          id: 15,
          title: '7) Doc2Vec — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <div style={{ background: 'rgba(27, 145, 224, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-folder-open" sizeName="lg" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Document Vectors (Paragraph Vectors)</strong>
                  </div>
                  <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-diagram-project" sizeName="sm" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>PV-DM:</strong> Predict word from document and context words
                  </div>
                  <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-diagram-project" sizeName="sm" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>PV-DBOW:</strong> Predict words from document only
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="scaleIn" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                      <strong>Model Type
                        <MermaidPopover
                          title="Doc2Vec Pipeline"
                          diagram={`flowchart LR
    A["📄 Document ID + Context Words"] --> B["🧠 Neural Net"]
    B --> C["🎯 Predict Target Word"]
    C --> D["📐 Document Vector"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Static document/paragraph embeddings using PV-DM and PV-DBOW</div>
                  </div>
                  <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                      <strong>Representation Style</strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Dense vectors per document/paragraph</div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Small/medium datasets needing fixed document vectors without transformers</div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.7}>
                <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
                    <strong>Notes</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Tune DM vs DBOW; requires inference for unseen docs</div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Doc2Vec — Cheat Sheet
[conversational] So far, all our embedding methods have been **word-level** — they give you a vector for each word, and if you need a document vector, you have to average or sum the word vectors. [excited] **Doc2Vec** 👉 "doc-too-veck" changes that by learning vectors for entire documents directly!

#### 📋 What Is Doc2Vec?
[lecture] Doc2Vec, also called **Paragraph Vectors**, was proposed by Quoc Le and Tomas Mikolov (the same person who created Word2Vec!) in 2014. [confidently] The key idea is simple: add a **document ID** as an additional input alongside the word vectors during training. This document vector acts as a "memory" of the document's overall topic.

[storytelling] Think of it like this: each document gets a unique sticky note that the model carries around while learning words. [playfully] After training, those sticky notes become useful document representations!

#### 🏗️ How Doc2Vec Works
\`\`\`mermaid
flowchart LR
    A["📄 Document ID + Context Words"] --> B["🧠 Neural Net"]
    B --> C["🎯 Predict Target Word"]
    C --> D["📐 Document Vector"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
[lecture] There are two variants: **PV-DM** 👉 "pee-vee dee-em" (Distributed Memory, similar to CBOW) and **PV-DBOW** 👉 "pee-vee dee-bow" (Distributed Bag of Words, similar to Skip-Gram). [reassuringly] PV-DM tends to work better and is more commonly used.

#### 🎯 Best Use Case
[confidently] Doc2Vec is perfect when you need **fixed-size document representations** for tasks like **document similarity**, **clustering**, or **classification** — without manually aggregating word vectors.

[conversational] Let's explore its trade-offs...`
        },
        {
          id: 16,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="fadeIn" delay={0.2}>
                  <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="Doc2Vec: Direct Document Embeddings"
                        diagram={`graph TB
    subgraph WA["Word Averaging (naive)"]
        W1["v(I)"] --> S["mean()"]
        W2["v(love)"] --> S
        W3["v(NLP)"] --> S
        S --> V1["Loses structure"]
    end
    subgraph D2V["Doc2Vec (better)"]
        D["Doc ID"] --> M["Model"]
        W["All words"] --> M
        M --> V2["Doc Vector"]
    end
    style WA fill:#ffcdd2,stroke:#c62828,color:#000
    style D2V fill:#c8e6c9,stroke:#4caf50,color:#000
    style V1 fill:#ffcdd2,color:#000
    style V2 fill:#c8e6c9,color:#000`}
                      />
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#81c784' }}>
                        <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                        <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Unsupervised doc-level representations</li>
                      <li>Simple pipeline</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.4}>
                  <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Lags behind modern encoders</li>
                      <li>Sensitive to training setup</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Doc2Vec: Strengths and Limitations
[conversational] How does Doc2Vec stack up? Let's take an honest look.

#### ✅ Strengths
[pleased] The good stuff: The biggest win is that Doc2Vec gives you **document-level vectors directly** — no need to average word embeddings and lose information. [confidently] The document vector captures the overall **topic and theme** of the document in a single dense vector.

[reassuringly] It's **unsupervised** — you don't need labeled data to train it. [conversational] Just feed in your documents and it learns representations. This makes it great for exploratory tasks like document clustering and similarity search.

[confidently] The vectors are **fixed-size** regardless of document length, which is convenient for downstream ML models that expect uniform input dimensions.

#### ❌ Limitations
[disappointed] The problems: Doc2Vec requires **retraining** to get vectors for new documents. [cautiously] You can use the \`infer_vector\` method, but it's not as clean as just encoding a new document through a pre-trained model (like BERT can).

[concerned] The vectors are **static** — the same document always gets the same vector, and there's no context sensitivity at the word level within the document.

[seriously] Training can be **unstable** — results vary significantly based on hyperparameters like vector size, window size, number of epochs, and learning rate. [cautiously] Getting good vectors often requires careful tuning.

[disappointed] And while Doc2Vec captures topic-level information well, it may **miss fine-grained semantic nuances** that more modern approaches like SBERT or E5 capture.

#### 🔄 A Paradigm Shift Ahead
[excited] Up to now, every technique we've seen produces **static** representations — the same word or document always gets the same vector. [enthusiastically] But what if we told you there's a way to make vectors **context-dependent**? That's exactly what our next section delivers, starting with ELMo!`
        }
      ]
    },
    {
      id: 'technique-8',
      title: '8) ELMo — Cheat Sheet',
      slides: [
        {
          id: 17,
          title: '8) ELMo — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="rotateIn" delay={0.1}>
                <div style={{ background: 'rgba(155, 89, 182, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1rem', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-split" sizeName="lg" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Bidirectional Language Model Architecture</strong>
                  </div>
                  <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="sm" style={{ margin: '0px' }} darkModeInvert={true} />
                    Forward LSTM → Forward LSTM → Forward LSTM
                  </div>
                  <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="sm" style={{ margin: '0px' }} darkModeInvert={true} />
                    Backward LSTM ← Backward LSTM ← Backward LSTM
                  </div>
                  <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-layer-group" sizeName="sm" style={{ margin: '0px' }} darkModeInvert={true} />
                    Weighted Layer Combination → Contextual Embedding
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                      <strong>Model Type
                        <MermaidPopover
                          title="ELMo Architecture"
                          diagram={`flowchart TB
    A["📝 Input Sentence"] --> B["➡️ Forward LSTM"]
    A --> C["⬅️ Backward LSTM"]
    B --> D["🔀 Concatenate Layers"]
    C --> D
    D --> E["📐 Contextual Vectors"]
    style A fill:#4fc3f7,color:#000
    style E fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Contextual word embeddings using BiLSTM language models</div>
                  </div>
                  <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                      <strong>Representation Style</strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Context-sensitive token vectors; aggregate to sentence if needed</div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Token-level tasks (NER, POS), earlier-contextual baselines</div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.7}>
                <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
                    <strong>Notes</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>2-layer BiLSTM over char CNN; 1024d typical; combine layers via learned weights</div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### ELMo — Cheat Sheet
[enthusiastically] Welcome to the **contextual embeddings** era! [excited] This is where NLP took a massive leap forward. Let's meet **ELMo** 👉 "EL-moh" — which stands for **Embeddings from Language Models**.

#### 📋 What Is ELMo?
[lecture] ELMo was introduced by AllenNLP 👉 "ALLEN-en-el-pee" in 2018, and it introduced a revolutionary idea: **the same word should have different vectors depending on its context**. [playfully] Remember how we kept complaining that "bank" always gets the same vector? [delighted] ELMo fixes that!

[confidently] It uses a deep **BiLSTM** 👉 "bye-el-ess-tee-em" — that's a Bidirectional Long Short-Term Memory network — trained as a language model. [lecture] The network reads text both **forward** (left to right) and **backward** (right to left), and combines information from both directions.

#### 🏗️ How ELMo Works
\`\`\`mermaid
flowchart TB
    A["📝 Input Sentence"] --> B["➡️ Forward LSTM"]
    A --> C["⬅️ Backward LSTM"]
    B --> D["🔀 Concatenate Layers"]
    C --> D
    D --> E["📐 Contextual Vectors"]
    style A fill:#4fc3f7,color:#000
    style E fill:#81c784,color:#000
\`\`\`
[lecture] ELMo generates vectors by combining representations from **multiple layers** of the BiLSTM. [storytelling] Lower layers capture syntax (grammar), while higher layers capture semantics (meaning). [reassuringly] You can learn a weighted combination that's optimal for your specific task.

#### 🎯 Best Use Case
[confidently] ELMo was designed as a **feature extractor** — you plug its contextual vectors into your existing model as additional features to boost performance on tasks like **NER** 👉 "ner" (Named Entity Recognition), **sentiment analysis**, and **question answering**.

#### 💡 Why It Matters
[excited] ELMo was the first widely successful contextual embedding. [enthusiastically] It proved that **pre-training** a language model and then using its representations for downstream tasks is extremely effective. [impressed] This idea directly inspired BERT!

[conversational] Let's check out its strengths and limitations...`
        },
        {
          id: 18,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="ELMo: Same Word, Different Context Vectors"
                        diagram={`graph TB
    subgraph C1["river bank"]
        T1["bank"] --> V1["geography vector"]
    end
    subgraph C2["bank account"]
        T2["bank"] --> V2["finance vector"]
    end
    N["Static embeddings: always same vector"]
    style C1 fill:#e3f2fd,stroke:#1976d2,color:#000
    style C2 fill:#fff9c4,stroke:#f57c00,color:#000
    style V1 fill:#c8e6c9,color:#000
    style V2 fill:#c8e6c9,color:#000
    style N fill:#ffcdd2,stroke:#c62828,color:#000`}
                      />
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#81c784' }}>
                        <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                        <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Character-aware</li>
                      <li>Captures polysemy</li>
                      <li>Improved sequence labeling over static</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Heavier than static</li>
                      <li>Outperformed by transformers on many tasks</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### ELMo: Strengths and Limitations
[conversational] ELMo was a pioneering model — let's see what it got right and where it falls short by today's standards.

#### ✅ Strengths
[excited] The good stuff: ELMo was the **first major contextual embedding** to go mainstream. [enthusiastically] It showed the world that the same word can and should have different representations depending on context. [delighted] "Bank" next to "river" genuinely gets a different vector than "bank" next to "money." This was a huge breakthrough!

[impressed] The **multi-layer approach** is clever — you can combine layers to get features optimized for your specific task. [lecture] Syntax-heavy tasks might weight lower layers more, while semantic tasks weight higher layers.

[pleased] ELMo provides **character-level** inputs, which gives it decent **OOV handling** — unlike Word2Vec and GloVe, it can handle unseen words through character convolutions.

#### ❌ Limitations
[disappointed] The problems: ELMo uses **LSTMs**, which process text **sequentially** — one word at a time. [concerned] This makes it **slower** than transformer-based models like BERT, which can process all words in parallel.

[cautiously] The embeddings are **1024-dimensional**, which is quite large. [seriously] And because ELMo is designed as a **feature extractor** rather than a fine-tunable model, it's less flexible than BERT for task-specific adaptation.

[disappointed] Today, ELMo is considered **largely superseded** by transformer-based models. [conversational] You'll rarely see it used in new projects — but understanding it helps you appreciate why BERT was such a big deal.

#### 🔄 Enter the Transformer Era
[excited] ELMo showed us the power of contextual embeddings. [enthusiastically] The next step? Replace the LSTM with a **Transformer** architecture — and that gives us **BERT** 👉 "burt"! Let's go!`
        }
      ]
    },
    {
      id: 'technique-9',
      title: '9) BERT Embeddings — Cheat Sheet',
      slides: [
        {
          id: 19,
          title: '9) BERT Embeddings — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ background: 'rgba(155, 89, 182, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="lg" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Contextual token representations from bidirectional Transformer</strong>
                  </div>
                  <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-brackets-square" sizeName="sm" style={{ margin: '0px' }} darkModeInvert={true} />
                    Input: [CLS] I love machine learning [SEP]
                  </div>
                  <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="sm" style={{ margin: '0px' }} darkModeInvert={true} />
                    BERT Transformer Layers
                  </div>
                  <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="sm" style={{ margin: '0px' }} darkModeInvert={true} />
                    Output: Contextual vectors for each token or [CLS] for sentence
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                      <strong>Model Type
                        <MermaidPopover
                          title="BERT Architecture"
                          diagram={`flowchart LR
    A["📝 Tokens + CLS"] --> B["🤖 12-Layer Transformer"]
    B --> C["📐 768d Contextual Vectors"]
    C --> D["🎯 Fine-tune for Task"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Transformer-based contextual embeddings at token-level</div>
                  </div>
                  <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                      <strong>Representation Style</strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Contextual token vectors; sentence via [CLS] or mean pooling</div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="bounceIn" delay={0.5}>
                <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Feature extraction for downstream models; token tasks</div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.7}>
                <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
                    <strong>Notes</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>For sentence similarity prefer SBERT-style pooling/finetuning</div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### BERT Embeddings — Cheat Sheet
[enthusiastically] Here it is — the model that **changed everything** in NLP. [excited] **BERT** 👉 "burt" stands for **Bidirectional Encoder Representations from Transformers**, and it was released by Google in 2018.

#### 📋 What Makes BERT Special?
[lecture] BERT uses the **Transformer** architecture — specifically, just the encoder part — which can process all words in a sentence **simultaneously** rather than one at a time like ELMo's LSTM. [impressed] This is massively faster and captures longer-range dependencies better.

[confidently] But BERT's real innovation is its training objective: **Masked Language Modeling** 👉 "MLM." [lecture] During training, BERT randomly masks 15% of the tokens in a sentence and learns to predict them. Because it can see context from **both sides** (left and right), it builds truly bidirectional representations.

[storytelling] Think of it like a fill-in-the-blank exercise: "The [MASK] sat on the mat." [pleased] BERT learns to predict "cat" by looking at both "The" and "sat on the mat." [conversational] Other language models only look at one direction!

#### 🏗️ How BERT Works
\`\`\`mermaid
flowchart LR
    A["📝 Tokens + [CLS]"] --> B["🤖 12-Layer Transformer"]
    B --> C["📐 768d Contextual Vectors"]
    C --> D["🎯 Fine-tune for Task"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
[lecture] BERT adds a special **[CLS]** 👉 "class" token at the beginning of every input. After processing, the [CLS] token's vector is used as the sentence-level representation. [confidently] Each token gets a 768-dimensional contextual vector.

#### 🎯 Best Use Case
[firmly] BERT excels at **classification**, **NER**, **question answering**, and any task where you can **fine-tune** it on labeled data. [reassuringly] It's also commonly used to extract contextual word-level features.

#### ⚠️ Important Caveat
[cautiously] Out-of-the-box BERT **is not ideal for sentence similarity** — the [CLS] vector without fine-tuning can be worse than averaging GloVe vectors! [firmly] You need SBERT for that, which is coming up next.

[conversational] Let's see the trade-offs...`
        },
        {
          id: 20,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="bounceIn" delay={0.2}>
                  <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="BERT Fine-tuning Transfer Learning"
                        diagram={`flowchart TB
    A["Pre-trained BERT\n110M params"] --> B["Fine-tune on\ntask data"]
    B --> C1["Text Classification"]
    B --> C2["Named Entity\nRecognition"]
    B --> C3["Question\nAnswering"]
    style A fill:#e1bee7,color:#000
    style B fill:#e3f2fd,color:#000
    style C1 fill:#c8e6c9,color:#000
    style C2 fill:#c8e6c9,color:#000
    style C3 fill:#c8e6c9,color:#000`}
                      />
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#81c784' }}>
                        <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                        <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Strong contextualization</li>
                      <li>Versatile</li>
                      <li>Many pretrained variants</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" delay={0.4}>
                  <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>[CLS] not ideal for similarity out-of-the-box</li>
                      <li>Computationally heavier</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### BERT: Strengths and Limitations
[conversational] BERT is incredibly powerful, but it's not perfect for everything. Let's break it down.

#### ✅ Strengths
[excited] The good stuff: BERT produces **truly contextual embeddings** — every token's representation is influenced by every other token in the sentence. [impressed] This captures nuances like polysemy 👉 "pol-ISS-uh-mee" (words with multiple meanings), negation, and complex sentence structures.

[enthusiastically] The **fine-tuning** paradigm is game-changing. [lecture] You take a pre-trained BERT model and fine-tune it on a small labeled dataset for your specific task. [confidently] This **transfer learning** approach means you can get state-of-the-art results even with relatively little task-specific data.

[pleased] BERT comes in many variants — **BERT-base** (12 layers, 110M parameters), **BERT-large** (24 layers, 340M parameters), plus multilingual, domain-specific, and distilled versions. [reassuringly] There's a BERT for almost every need.

[impressed] The **Transformer** architecture enables **parallel processing**, making BERT much faster than ELMo's sequential LSTM approach, especially on GPUs.

#### ❌ Limitations
[disappointed] The problems: BERT has a **512-token limit** — it can't process documents longer than about 512 words. [cautiously] For long documents, you need chunking strategies, which adds complexity.

[seriously] The raw **[CLS] token is not a great sentence embedding** without fine-tuning. [disappointed] If you just extract the [CLS] vector from pre-trained BERT and use it for semantic similarity, results are often disappointing — sometimes worse than GloVe averages!

[concerned] BERT is also **computationally expensive** — inference requires significant GPU memory and time, especially for BERT-large.

[cautiously] And calculating similarity between sentence pairs requires **feeding them through the model together**, making pairwise comparison of large collections very slow.

#### 🔄 The SBERT Solution
[excited] To address BERT's sentence similarity problem, researchers created **SBERT** 👉 "ess-burt" — a model specifically designed to produce high-quality sentence embeddings. [enthusiastically] That's next!`
        }
      ]
    },
    {
      id: 'technique-10',
      title: '10) Sentence-BERT (SBERT) — Cheat Sheet',
      slides: [
        {
          id: 21,
          title: '10) Sentence-BERT (SBERT) — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ background: 'rgba(155, 89, 182, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-code-branch" sizeName="lg" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Siamese Network Architecture with Shared Weights</strong>
                  </div>
                  <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="sm" style={{ margin: '0px' }} darkModeInvert={true} />
                    Sentence A & B → Shared BERT/Transformer → Mean Pooling → Embeddings u & v
                  </div>
                  <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="sm" style={{ margin: '0px' }} darkModeInvert={true} />
                    Cosine Similarity = u·v/(||u||·||v||)
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                      <strong>Model Type
                        <MermaidPopover
                          title="SBERT Architecture"
                          diagram={`flowchart TB
    A["📝 Sentence A"] --> B["🤖 BERT Encoder"]
    C["📝 Sentence B"] --> D["🤖 BERT Encoder"]
    B --> E["📐 Vector A"]
    D --> F["📐 Vector B"]
    E --> G["🔀 Cosine Similarity"]
    F --> G
    style A fill:#4fc3f7,color:#000
    style C fill:#4fc3f7,color:#000
    style G fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Siamese/Triplet fine-tuned transformer for sentence embeddings</div>
                  </div>
                  <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                      <strong>Representation Style</strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Fixed-size sentence vectors (384–768d) via mean pooling</div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Semantic search, clustering, STS (Semantic Textual Similarity), retrieval</div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="scaleIn" delay={0.7}>
                <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
                    <strong>Notes</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Popular models: all-MiniLM-L6-v2, all-mpnet-base-v2; use cosine distance</div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Sentence-BERT (SBERT) — Cheat Sheet
[conversational] Remember that problem where BERT's [CLS] token isn't great for sentence similarity? [enthusiastically] **SBERT** 👉 "ess-burt" solves this elegantly. [lecture] SBERT stands for **Sentence-BERT**, and it was created in 2019 by Nils Reimers.

#### 📋 What Is SBERT?
[confidently] SBERT takes a pre-trained BERT model and fine-tunes it using a **Siamese network** 👉 "sigh-ah-MEEZ" architecture — that's a setup where two identical BERT copies process two sentences separately, and then a similarity function compares their outputs. [lecture] The model is trained on sentence pairs with known similarity scores.

[delighted] The result? A model that produces **standalone sentence vectors** — you encode a sentence once, get a fixed vector, and then compare it with any other sentence vector using simple **cosine similarity** 👉 "co-sign." [pleased] No need to feed sentence pairs into BERT together!

#### 🏗️ How SBERT Works
\`\`\`mermaid
flowchart TB
    A["📝 Sentence A"] --> B["🤖 BERT Encoder"]
    C["📝 Sentence B"] --> D["🤖 BERT Encoder"]
    B --> E["📐 Vector A"]
    D --> F["📐 Vector B"]
    E --> G["🔀 Cosine Similarity"]
    F --> G
    style A fill:#4fc3f7,color:#000
    style C fill:#4fc3f7,color:#000
    style G fill:#81c784,color:#000
\`\`\`
[lecture] Both sentences pass through BERT independently. Mean pooling over token embeddings produces the sentence vectors, and cosine similarity gives the final similarity score. [impressed] This is **dramatically faster** than BERT's cross-encoding approach.

#### 🎯 Best Use Case
[enthusiastically] SBERT is perfect for **semantic search**, **sentence similarity**, **clustering**, and **paraphrase detection**. [excited] It made operations like finding similar sentences in a million-document collection practical — going from 65 hours (BERT cross-encoding) to about **5 seconds**!

[conversational] Let's look at the pros and cons...`
        },
        {
          id: 22,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="SBERT: Bi-encoder vs BERT Cross-encoder"
                        diagram={`graph TB
    subgraph Slow["BERT Cross-encoder (Slow)"]
        P1["SentA + SentB"] --> M1["BERT"] --> R1["Score"]
    end
    subgraph Fast["SBERT Bi-encoder (Fast)"]
        S1["SentA"] --> M2["SBERT"] --> VA["Vec A"]
        S2["SentB"] --> M3["SBERT"] --> VB["Vec B"]
        VA --> CS["cosine_sim"]
        VB --> CS
    end
    style Slow fill:#ffcdd2,stroke:#c62828,color:#000
    style Fast fill:#c8e6c9,stroke:#4caf50,color:#000`}
                      />
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#81c784' }}>
                        <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                        <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Fast similarity via cosine</li>
                      <li>Strong sentence-level semantics</li>
                      <li>Many lightweight variants</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Domain shift can hurt</li>
                      <li>Not optimized for very long context</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### SBERT: Strengths and Limitations
[conversational] SBERT is a huge step forward for practical sentence embeddings. Let's evaluate it.

#### ✅ Strengths
[excited] The good stuff: SBERT's biggest advantage is **speed for similarity tasks**. [lecture] Because each sentence is encoded independently into a fixed vector, you can pre-compute embeddings for your entire corpus and then do instant **cosine similarity** lookups. [impressed] This is orders of magnitude faster than BERT's cross-encoding.

[pleased] The quality of SBERT's sentence embeddings is **excellent** — they capture semantic meaning, handle paraphrases well, and work great for clustering and search.

[delighted] SBERT comes with **pre-trained models** via the sentence-transformers 👉 "sentence transformers" library, which is incredibly easy to use. [playfully] Just \`model.encode("your sentence")\` and you get a high-quality embedding vector.

#### ❌ Limitations
[disappointed] The problems: SBERT still inherits BERT's **512-token limit**. [cautiously] Long documents need to be chunked, which can lose cross-chunk context.

[seriously] While SBERT is great for **semantic similarity**, it may not be optimal for **asymmetric retrieval** tasks where queries and documents are very different in length and style. [reassuringly] Newer models like E5 handle this better with query/passage prompting.

[concerned] Training requires **labeled sentence pairs** with similarity scores, which can be expensive to collect for specialized domains.

[cautiously] And while fast at inference, the model is still a full BERT transformer — relatively **heavy** compared to lighter alternatives like USE.

#### 🔄 Beyond BERT-Based Encoders
[excited] SBERT showed that we need **purpose-built sentence encoders** — not just repurposed word-level models. [enthusiastically] Next, let's look at Google's approach to sentence encoding — the **Universal Sentence Encoder**!`
        }
      ]
    },
    {
      id: 'technique-11',
      title: '11) Universal Sentence Encoder (USE) — Cheat Sheet',
      slides: [
        {
          id: 23,
          title: '11) Universal Sentence Encoder (USE) — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <div style={{ background: 'rgba(46, 204, 113, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="lg" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Google's Universal Sentence Encoder: Sentences to 512-d vectors</strong>
                  </div>
                  <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="sm" style={{ margin: '0px' }} darkModeInvert={true} />
                    Input: Sentences of any length → Encoder (Transformer or DAN Architecture) → Output: 512-dimensional fixed-length vector
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-tag" sizeName="lg" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                      <strong>Model Type
                        <MermaidPopover
                          title="USE Architecture"
                          diagram={`flowchart LR
    A["📝 Sentence"] --> B["🤖 Transformer or DAN"]
    B --> C["📐 512d Vector"]
    C --> D["🎯 Similarity / Classification"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Transformer/DAN sentence encoder from Google</div>
                  </div>
                  <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-cube" sizeName="lg" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                      <strong>Representation Style</strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>512-d sentence vectors</div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="bounceIn" delay={0.5}>
                <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="lg" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Quick plug-in for similarity, clustering, classification baselines</div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.7}>
                <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={{ color: '#3498db' }} darkModeInvert={true} />
                    <strong>Notes</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Variants: Transformer vs DAN; multilingual options exist</div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Universal Sentence Encoder (USE) — Cheat Sheet
[conversational] Google's **Universal Sentence Encoder** — or **USE** for short — takes a different approach to sentence embeddings. [lecture] Instead of fine-tuning BERT, it was designed from the **ground up** for sentence-level encoding.

#### 📋 What Is USE?
[confidently] USE was released by Google in 2018 and comes in **two variants**: one based on a Transformer architecture (higher accuracy, slower) and one based on a **DAN** 👉 "dan" (Deep Averaging Network — essentially averaging word embeddings and passing through feed-forward layers). [pleased] The DAN variant is much faster while still being surprisingly effective.

[lecture] USE produces **512-dimensional** sentence vectors that work well right out of the box for a variety of tasks — no fine-tuning needed in many cases.

#### 🏗️ How USE Works
\`\`\`mermaid
flowchart LR
    A["📝 Sentence"] --> B["🤖 Transformer or DAN"]
    B --> C["📐 512d Vector"]
    C --> D["🎯 Similarity / Classification"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
[lecture] The Transformer variant uses attention across all word pairs (accurate but slower), while the DAN variant averages word embeddings and passes them through dense layers (fast but less nuanced). [reassuringly] Both produce fixed 512-d vectors.

#### 🎯 Best Use Case
[confidently] USE is great for quick **similarity baselines**, **clustering**, and **classification** tasks. [pleased] It's particularly appealing when you want something easy to deploy — TensorFlow Hub 👉 "tensor-flow hub" makes it a one-line import. [enthusiastically] **Multilingual variants** also exist for cross-language applications.

#### 💡 Key Trade-off
[conversational] Think of USE as the "practical, easy-to-use" sentence encoder — maybe not the top of every leaderboard, but reliable, fast, and dead simple to deploy.

[conversational] Let's see the strengths and limitations...`
        },
        {
          id: 24,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="scaleIn" delay={0.2}>
                  <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="USE: Simple Sentence Encoding Pipeline"
                        diagram={`flowchart LR
    A["Sentences"] --> B["USE Encoder\n(TF Hub)"]
    B --> C["512-d Vectors"]
    C --> D["Cosine\nSimilarity"]
    D --> E["Search / QA\nResults"]
    style A fill:#4fc3f7,color:#000
    style B fill:#e1bee7,color:#000
    style C fill:#e3f2fd,color:#000
    style E fill:#c8e6c9,color:#000`}
                      />
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#81c784' }}>
                        <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                        <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Simple API</li>
                      <li>Stable baseline</li>
                      <li>Good transfer</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.4}>
                  <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Older model trails newer models on MTEB</li>
                      <li>Limited customization</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### USE: Strengths and Limitations
[conversational] Universal Sentence Encoder is a solid, practical choice. Let's weigh its pros and cons.

#### ✅ Strengths
[pleased] The good stuff: USE is **incredibly easy to use**. [playfully] You load it from TensorFlow Hub and call it on your sentences — that's it. [delighted] The API is about as simple as it gets for sentence encoding.

[confidently] It provides a **stable baseline** that works reasonably well across many tasks without any fine-tuning. [reassuringly] For quick prototyping or when you need a good-enough solution fast, USE is hard to beat.

[impressed] The **transfer learning** capabilities are solid — USE was trained on a diverse mix of supervised and unsupervised data, so it generalizes well to new domains. [pleased] And the multilingual variant supports 16+ languages.

#### ❌ Limitations
[disappointed] The problems: USE is an **older model** (2018) and trails newer models like E5 and GTE on modern benchmarks like **MTEB** 👉 "em-tee-ee-bee." [cautiously] If state-of-the-art accuracy is critical, you'll want something more recent.

[concerned] **Customization is limited** — you can use the embeddings as features, but fine-tuning USE itself isn't as straightforward as with sentence-transformers models.

[disappointed] The model is tied to **TensorFlow**, which can be inconvenient if your stack is PyTorch-based.

#### 🔄 Next-Generation Encoders
[excited] USE showed that simple, plug-in sentence encoders have a huge role to play. [enthusiastically] The next generation takes this further with more sophisticated training — starting with **E5** 👉 "ee-five" embeddings!`
        }
      ]
    },
    {
      id: 'technique-12',
      title: '12) E5 Embeddings — Cheat Sheet',
      slides: [
        {
          id: 25,
          title: '12) E5 Embeddings — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInBottom" delay={0.1}>
                <div style={{ background: 'rgba(46, 204, 113, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-globe" sizeName="lg" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Multilingual Embedding Model</strong>
                  </div>
                  <div style={{ fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="sm" style={{ margin: '0px' }} darkModeInvert={true} />
                    Supports 100+ languages: English, Spanish, Chinese, Arabic, and more
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="scaleIn" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                      <strong>Model Type
                        <MermaidPopover
                          title="E5 Pipeline"
                          diagram={`flowchart LR
    A["📝 query: + text"] --> B["🤖 Transformer Encoder"]
    B --> C["📐 768-1024d Vector"]
    C --> D["🔍 Cosine Similarity Retrieval"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Contrastively trained multilingual sentence embeddings (e.g., intfloat/multilingual-e5-large, e5-large-v2)</div>
                  </div>
                  <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                      <strong>Representation Style</strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Query/Passage embeddings; 768–1024d typical; cosine similarity</div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.5}>
                <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Semantic search, RAG, retrieval, classification features (multilingual)</div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.7}>
                <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
                    <strong>Notes</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Prefix inputs with "query:" or "passage:"; use cosine metric; batch/token limits apply</div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### E5 Embeddings — Cheat Sheet
[conversational] Now we're in the **modern era** of sentence encoders. [excited] **E5** 👉 "ee-five" stands for **EmbEddings from bidirEctional Encoder rEpresentations** — yes, the name is a bit of a stretch to get that E5 acronym! [lecture] It was developed by Microsoft Research.

#### 📋 What Makes E5 Special?
[confidently] E5's key innovation is **contrastive training** at massive scale. [lecture] It's trained on hundreds of millions of text pairs using a contrastive objective — push similar texts together in vector space and pull dissimilar texts apart. [impressed] This produces embeddings that are incredibly well-suited for **retrieval** tasks.

[lecture] E5 also introduced the concept of **query/passage prefixing**: you prepend "query:" before search queries and "passage:" before documents being searched. [reassuringly] This asymmetry helps the model understand the different roles of queries and documents in retrieval.

#### 🏗️ How E5 Works
\`\`\`mermaid
flowchart LR
    A["📝 query: + text"] --> B["🤖 Transformer Encoder"]
    B --> C["📐 768-1024d Vector"]
    C --> D["🔍 Cosine Similarity Retrieval"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
[lecture] You simply prepend the appropriate prefix, encode through the transformer, and get your embedding vector. [pleased] The model supports 100+ languages through its multilingual variant **multilingual-e5-large**.

#### 🎯 Best Use Case
[enthusiastically] E5 is excellent for **semantic search**, **RAG** 👉 "rag" (Retrieval-Augmented Generation) pipelines, **retrieval**, and **classification features** — especially in multilingual settings. [impressed] It's a top performer on the MTEB leaderboard.

#### 💡 Important Tip
[firmly] Always remember to use the correct prefix! [cautiously] Using "query:" for queries and "passage:" for documents ensures the model works as intended. Forgetting the prefix can significantly hurt performance.

[conversational] Let's see the strengths and limitations...`
        },
        {
          id: 26,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="E5: Query/Passage Prefix Convention"
                        diagram={`graph TB
    subgraph Good["Correct Usage"]
        Q["query: What is ML?"] --> QV["Query Vector"]
        P["passage: ML is..."] --> PV["Passage Vector"]
        QV --> CS["High Cosine Similarity"]
        PV --> CS
    end
    subgraph Bad["Missing Prefix"]
        Q2["What is ML?"] --> QV2["Vector"]
        P2["ML is..."] --> PV2["Vector"]
        QV2 --> CS2["Lower Similarity"]
        PV2 --> CS2
    end
    style Good fill:#c8e6c9,stroke:#4caf50,color:#000
    style Bad fill:#ffcdd2,stroke:#c62828,color:#000
    style CS fill:#c8e6c9,color:#000
    style CS2 fill:#ffcdd2,color:#000`}
                      />
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#81c784' }}>
                        <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                        <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Strong multilingual performance</li>
                      <li>Small/efficient</li>
                      <li>Robust zero-shot retrieval</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>Requires query/passage prompting consistency</li>
                      <li>Re-embedding needed when migrating</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### E5: Strengths and Limitations
[conversational] E5 is one of the top modern embedding models. Let's break down its strengths and weaknesses.

#### ✅ Strengths
[excited] The good stuff: E5 delivers **strong multilingual performance** across 100+ languages. [enthusiastically] This makes it incredibly versatile for international applications — you can encode an English query and match it against Chinese documents, for example.

[pleased] The models are relatively **small and efficient** compared to their performance. [reassuringly] The base model is quite compact while still delivering competitive quality.

[confidently] E5 excels at **zero-shot retrieval** — it works well on new domains without any fine-tuning, which is ideal for general-purpose semantic search applications.

[delighted] It's available through Hugging Face 👉 "hugging face" with easy integration via the sentence-transformers library.

#### ❌ Limitations
[disappointed] The problems: E5 requires **query/passage prompting consistency** — you must always use the right prefix, and mixing them up degrades performance significantly. [cautiously] This adds a small but important complexity to deployment.

[seriously] When migrating between embedding models, you need to **re-embed your entire corpus** — you can't mix vectors from different models. [concerned] This is true of all embedding models, but worth mentioning because E5 is often used in production RAG systems where re-embedding millions of documents is costly.

#### 🔄 One More Frontier
[excited] We've covered twelve techniques! [enthusiastically] Our final embedding model is **GTE** 👉 "jee-tee-ee" — a model that pushes context windows to **8,000 tokens** while maintaining top-tier quality. Let's check it out!`
        }
      ]
    },
    {
      id: 'technique-13',
      title: '13) GTE Embeddings — Cheat Sheet',
      slides: [
        {
          id: 27,
          title: '13) GTE Embeddings — Cheat Sheet',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="rotateIn" delay={0.1}>
                <div style={{ background: 'rgba(46, 204, 113, 0.15)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <div style={{ fontSize: '1rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-expand" sizeName="lg" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Long-context transformer architecture</strong>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#1b91e0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-tag" sizeName="2x" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                      <strong>Model Type
                        <MermaidPopover
                          title="GTE Architecture"
                          diagram={`flowchart LR
    A["📄 Long Text up to 8k tokens"] --> B["🤖 BERT + RoPE + GLU"]
    B --> C["📐 CLS-pooled 768-1024d Vector"]
    C --> D["🔍 Retrieval / Reranking"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`}
                        />
                      </strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>Long-context transformer++ sentence embeddings (BERT + RoPE + GLU), English and multilingual variants</div>
                  </div>
                  <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#9b59b6', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-cube" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                      <strong>Representation Style</strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>CLS-pooled sentence vectors, base 768d, large 1024d, context up to 8k tokens in v1.5</div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.5}>
                <div style={{ marginBottom: '1rem', background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#2ecc71', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                    <strong>Best Use Case</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Long-context retrieval/reranking, high MTEB performance within size class</div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="bounceIn" delay={0.7}>
                <div style={{ background: 'rgba(52, 152, 219, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#3498db', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
                    <strong>Notes</strong>
                  </div>
                  <div style={{ fontSize: '1.2rem' }}>Use Alibaba-NLP/gte-*-v1.5, enable unpadding/xformers for speed, cosine similarity, multilingual option: gte-Qwen1.5-7B-instruct</div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### GTE Embeddings — Cheat Sheet
[enthusiastically] Last but definitely not least — **GTE** 👉 "jee-tee-ee" stands for **General Text Embeddings**, and it was developed by Alibaba's NLP team. [impressed] It represents the cutting edge of sentence embedding technology.

#### 📋 What Makes GTE Special?
[excited] GTE's biggest innovation is its **long-context support**. [conversational] While most embedding models are limited to 512 tokens, GTE v1.5 supports up to **8,192 tokens** — that's roughly 6,000 words! [delighted] This means you can encode entire documents, long articles, or multi-page content in a single embedding vector.

[lecture] It achieves this through architectural enhancements: **RoPE** 👉 "rope" (Rotary Position Embeddings) for better position encoding and **GLU** 👉 "gloo" (Gated Linear Units) for improved feed-forward layers. [confidently] These modifications to the standard BERT architecture enable effective processing of much longer sequences.

#### 🏗️ How GTE Works
\`\`\`mermaid
flowchart LR
    A["📄 Long Text (up to 8k tokens)"] --> B["🤖 BERT + RoPE + GLU"]
    B --> C["📐 CLS-pooled 768-1024d Vector"]
    C --> D["🔍 Retrieval / Reranking"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
\`\`\`
[lecture] GTE uses CLS-token pooling to produce the final sentence/document vector. [conversational] The base model produces 768d vectors and the large model produces 1024d vectors.

#### 🎯 Best Use Case
[confidently] GTE is ideal for **long-context retrieval**, **document-level reranking**, and any application where you need to embed texts longer than 512 tokens. [pleased] It also performs exceptionally well on standard **MTEB** benchmarks within its size class.

#### 💡 Pro Tip
[reassuringly] Use the model name format **Alibaba-NLP/gte-*-v1.5** for the latest versions. [confidently] Enable **unpadding** and **xformers** 👉 "cross-formers" for faster inference. [helpfully] For multilingual needs, check out **gte-Qwen1.5-7B-instruct**.

[conversational] Let's examine the trade-offs...`
        },
        {
          id: 28,
          title: 'Strengths and Limitations',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <GSAPAnimated animation="fadeIn" delay={0.2}>
                  <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="GTE: 8k Token Context Window Advantage"
                        diagram={`graph TB
    subgraph Limits["Model Context Windows"]
        B["BERT / SBERT / E5\n512 tokens ~ 400 words"]
        E["ELMo / USE\n512 tokens ~ 400 words"]
        G["GTE\n8192 tokens ~ 6000 words"]
    end
    subgraph LongDocs["GTE Handles Long Documents"]
        D1["Legal contracts"]
        D2["Research papers"]
        D3["Long articles"]
    end
    G --> LongDocs
    style B fill:#fff9c4,color:#000
    style E fill:#fff9c4,color:#000
    style G fill:#c8e6c9,stroke:#4caf50,stroke-width:2px,color:#000
    style LongDocs fill:#e3f2fd,stroke:#1976d2,color:#000`}
                      />
                    </div>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#81c784' }}>
                        <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                        <strong style={{ fontSize: '2rem' }}>Strengths:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>SOTA within size tier</li>
                      <li>8k context support</li>
                      <li>Competitive LoCo scores</li>
                      <li>Efficient inference options</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.4}>
                  <div style={{ background: 'rgba(231, 76, 60, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ffb74d' }}>
                        <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                        <strong style={{ fontSize: '2rem' }}>Limitations:</strong></p>
                    </div>
                    <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                      <li>English-only for some checkpoints</li>
                      <li>Larger dims than tiny models</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### GTE: Strengths and Limitations
[conversational] Let's evaluate GTE — our last individual technique — and see how it measures up.

#### ✅ Strengths
[pleased] The good stuff: GTE achieves **state-of-the-art performance within its size tier** on MTEB benchmarks. [confidently] This means you're getting top-quality embeddings without needing a massive model.

[impressed] The **8,000-token context window** is the standout feature. [storytelling] Most embedding models choke on documents longer than about 400 words — GTE handles 6,000+ words gracefully. [enthusiastically] This is enormous for applications like legal document search, academic paper retrieval, and long-form content analysis.

[confidently] GTE posts **competitive LoCo scores** 👉 "lo-co" (Long Context benchmarks), proving it doesn't just accept long inputs but actually benefits from the additional context.

[pleased] It offers **efficient inference options** through unpadding and xformers, which can significantly speed up encoding in production.

#### ❌ Limitations
[cautiously] The problems: Some GTE checkpoints are **English-only**, which limits their use in multilingual scenarios. [reassuringly] The multilingual variant exists (gte-Qwen1.5-7B-instruct) but is much larger.

[conversational] The embedding dimensions (768-1024d) are **larger than some lightweight models** — if you're optimizing for storage and speed with billions of vectors, smaller dimension models might be preferable.

#### 🔄 Bringing It All Together
[warmly] And that wraps up all thirteen techniques! [impressed] From simple Bag of Words to cutting-edge GTE embeddings, we've covered an incredible range of approaches. [enthusiastically] Let's bring it all together with a summary comparison...`
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary & Comparison',
      slides: [
        {
          id: 29,
          title: 'Summary & Comparison',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5', textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.2}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{ background: 'rgba(231, 173, 82, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#e7ad52', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-table" sizeName="2x" style={{ color: '#e7ad52' }} darkModeInvert={true} />
                      <strong>Traditional</strong>
                    </div>
                    <div style={{ fontSize: '1rem' }}>
                      Sparse, interpretable, no context; best for keyword/ranking/classic ML
                    </div>
                    <ul style={{ marginLeft: '1rem', fontSize: '1rem', marginTop: '0.5rem' }}>
                      <li>BoW, TF-IDF</li>
                      <li>Context-aware: No</li>
                      <li>OOV Handling: None</li>
                    </ul>
                  </div>

                  <div style={{ background: 'rgba(27, 145, 224, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#1b91e0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-layer-group" sizeName="lg" style={{ color: '#1b91e0' }} darkModeInvert={true} />
                      <strong>Static word embeddings</strong>
                    </div>
                    <div style={{ fontSize: '1rem' }}>
                      Dense word vectors; FastText handles OOV; no context awareness
                    </div>
                    <ul style={{ marginLeft: '1rem', fontSize: '1rem', marginTop: '0.5rem' }}>
                      <li>Word2Vec, GloVe, FastText, Doc2Vec</li>
                      <li>Dimensions: 100-300d</li>
                      <li>FastText: Subword OOV handling</li>
                    </ul>
                  </div>

                  <div style={{ background: 'rgba(155, 89, 182, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#9b59b6', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-brain-circuit" sizeName="lg" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                      <strong>Contextual embeddings</strong>
                    </div>
                    <div style={{ fontSize: '1rem' }}>
                      Token-level context; BERT needs pooling/finetune for sentences
                    </div>
                    <ul style={{ marginLeft: '1rem', fontSize: '1rem', marginTop: '0.5rem' }}>
                      <li>ELMo, BERT, SBERT</li>
                      <li>Context-aware: Yes</li>
                      <li>Dimensions: 384-1024d</li>
                    </ul>
                  </div>

                  <div style={{ background: 'rgba(46, 204, 113, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ color: '#2ecc71', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-rocket" sizeName="lg" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                      <strong>Modern sentence encoders</strong>
                    </div>
                    <div style={{ fontSize: '1rem' }}>
                      Fixed-size sentence vectors; best for semantic search/clustering
                    </div>
                    <ul style={{ marginLeft: '1rem', fontSize: '1rem', marginTop: '0.5rem' }}>
                      <li>USE, E5, GTE</li>
                      <li>Dimensions: 512-1024d</li>
                      <li>GTE: 8k context window</li>
                    </ul>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.5}>
                <div style={{ background: 'rgba(52, 152, 219, 0.15)', padding: '1rem', borderRadius: '8px', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Feature Extraction Selection Guide"
                      diagram={`flowchart TB
    S["What do you need?"] --> Q1{"Context-aware?"}
    Q1 -->|No| Q2{"Document-level?"}
    Q1 -->|Yes| Q3{"Sentence similarity?"}
    Q2 -->|No| T1["BoW / TF-IDF"]
    Q2 -->|Yes| T2["Doc2Vec / FastText"]
    Q3 -->|Yes| Q4{"Long docs > 512?"}
    Q3 -->|No| T3["BERT / ELMo"]
    Q4 -->|Yes| T4["GTE"]
    Q4 -->|No| Q5{"Multilingual?"}
    Q5 -->|Yes| T5["E5"]
    Q5 -->|No| T6["SBERT / USE"]
    style S fill:#4fc3f7,color:#000
    style T1 fill:#fff9c4,color:#000
    style T2 fill:#e1bee7,color:#000
    style T3 fill:#e1bee7,color:#000
    style T4 fill:#c8e6c9,color:#000
    style T5 fill:#c8e6c9,color:#000
    style T6 fill:#c8e6c9,color:#000`}
                    />
                  </div>
                  <div style={{ color: '#3498db', marginBottom: '0.8rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-chart-line" sizeName="lg" style={{ color: '#3498db' }} darkModeInvert={true} />
                    <strong>Key Insights by Context Length</strong>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.8rem', fontSize: '0.8rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-circle" sizeName="sm" style={{ color: '#3498db' }} darkModeInvert={true} />
                      Traditional/Static: N/A
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-circle" sizeName="sm" style={{ color: '#3498db' }} darkModeInvert={true} />
                      ELMo/BERT/SBERT/USE/E5: 512 tokens
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <SvgIcon iconName="duo-star" sizeName="sm" style={{ color: '#3498db' }} darkModeInvert={true} />
                      GTE: 8192 tokens
                    </div>
                  </div>
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="bounceIn" delay={0.7}>
                <div style={{ marginTop: '1rem', padding: '1rem', background: 'rgba(231, 173, 82, 0.2)', borderRadius: '8px', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1rem' }}>
                  <SvgIcon iconName="duo-compass" sizeName="xl" style={{ color: '#e7ad52' }} darkModeInvert={true} />
                  <strong style={{ fontSize: '1rem' }}>Similarity Metric:</strong> All dense embeddings use <strong>Cosine</strong> similarity
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Summary and Comparison
[warmly] Alright, let's zoom out and see the big picture! [conversational] We've covered **thirteen feature extraction techniques** spanning four categories. Here's how to think about choosing between them.

#### 🏗️ Traditional Methods — BoW and TF-IDF
[lecture] These give you **sparse, interpretable** vectors. [firmly] No context awareness, no semantic understanding, no OOV handling. [reassuringly] But they're **fast, simple, and sometimes all you need**. [confidently] Use them for baselines, keyword-heavy tasks, and when interpretability matters more than accuracy.

#### 📐 Static Word Embeddings — Word2Vec, GloVe, FastText, Doc2Vec
[conversational] These produce **dense 100-300d word vectors** that capture semantic meaning — "king" and "queen" are close together. [pleased] FastText adds OOV handling through subword n-grams. Doc2Vec extends this to document-level vectors. [cautiously] But none of them understand **context** — every word always gets the same vector.

#### 🧠 Contextual Embeddings — ELMo, BERT, SBERT
[excited] This is where the magic happens. [storytelling] **ELMo** 👉 "EL-moh" pioneered context-dependent vectors using BiLSTMs. **BERT** 👉 "burt" replaced LSTMs with Transformers for better parallelism and performance. **SBERT** 👉 "ess-burt" adapted BERT specifically for efficient sentence comparison. [impressed] These models produce 384-1024d vectors with context awareness.

#### 🚀 Modern Sentence Encoders — USE, E5, GTE
[enthusiastically] The current frontier. [conversational] **USE** is the easy plug-in option. **E5** 👉 "ee-five" excels at multilingual retrieval with query/passage prefixing. **GTE** 👉 "jee-tee-ee" pushes context windows to 8K tokens for long documents.

#### 🔑 Quick Decision Guide
[confidently] Need a **fast baseline**? → TF-IDF. Need **word-level semantics**? → FastText (includes OOV). Need **sentence similarity**? → SBERT or E5. Need **long document encoding**? → GTE. Working **multilingual**? → E5 multilingual. Building a **RAG pipeline**? → E5 or GTE.

#### 📏 All Dense Embeddings Use Cosine Similarity
[lecture] One universal rule: once you have dense embedding vectors, use **cosine similarity** 👉 "co-sign" to measure how similar two texts are. [firmly] It's the standard metric across all these models.

[warmly] Thank you for attending! [inspiringly] I hope this comparative overview gives you a clear mental map for choosing the right feature extraction technique for your next NLP project.`
        }
      ]
    }
  ]
};

