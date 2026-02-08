import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

export const textPreprocessingDeck: Deck = {
  id: 'text-preprocessing-deck',
  name: '21 Text Preprocessing Techniques',
  description: 'From tokenization to language detection with practical cheat sheets',
  category: 'NLP',
  theme: 'moon',
  slides: [],
  slideGroups: [
    {
      id: 'introduction',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          center: true,
          title: '21 Text Preprocessing Techniques',
          content: (
            <div style={{ marginTop: '20px', color: '#fff' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2} duration={0.8}>
                <h2>From tokenization to language detection with practical cheat sheets</h2>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.5} duration={1.0}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', marginTop: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <SvgIcon iconName="duo-file-lines" sizeName="4x" style={{ color: '#e74c3c' }} />
                    <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Raw Text</p>
                  </div>
                  <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <SvgIcon iconName="duo-gears" sizeName="4x" style={{ color: '#f39c12' }} />
                    <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Preprocessing</p>
                  </div>
                  <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <SvgIcon iconName="duo-sparkles" sizeName="4x" style={{ color: '#2ecc71' }} />
                    <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Clean Data</p>
                  </div>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.8} duration={0.7}>
                <p style={{ fontSize: '2rem' }}>
                  A comprehensive guide covering 21 text preprocessing techniques in NLP/Data Science
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.1} duration={0.6}>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#14227b',
          notes: `### 1. 21 Text Preprocessing Techniques
Welcome everyone to this comprehensive presentation on text preprocessing techniques. Today we're going to explore 21 powerful methods that transform messy, raw text into clean, structured data that machine learning models can actually understand and learn from.

####  What Is Text Preprocessing?
Think of text preprocessing like preparing ingredients before cooking. Just as you wash vegetables, peel potatoes, and chop onions before making a meal, we need to clean and prepare text data before feeding it to our AI models. Raw text from the internet, documents, or social media is full of inconsistencies: extra spaces, weird punctuation, different capitalization styles, and special characters. Our job is to standardize this chaos into something uniform and useful.

####  The Journey We'll Take
We're going to follow a logical journey from start to finish. We begin with raw, unprocessed text, like a tweet or a customer review. Then we'll apply various preprocessing techniques, like removing unnecessary words, breaking text into smaller pieces, and normalizing different forms of the same word. Finally, we end up with clean, structured data that's ready for analysis or machine learning. It's like turning a rough diamond into a polished gem.

####  Why This Matters
These 21 techniques aren't just theoretical concepts. They're practical tools used every day by data scientists at companies like Google, Amazon, and Netflix to build chatbots, sentiment analyzers, spam filters, and recommendation systems. Mastering these techniques will give you the foundation to work with any text-based AI project.

Let's dive into our table of contents and see what we'll cover today.`
        },
        {
          id: 2,
          title: 'Table of Contents',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2} duration={0.8}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3498db', marginBottom: '12px' }}>
                      <SvgIcon iconName="duo-scissors" sizeName="2x" darkModeInvert={true} />
                      Basic Normalization (1-5)
                    </h4>
                    <ul style={{ fontSize: '1.2rem', color: '#3498db' }}>
                      <li>1. Tokenization</li>
                      <li>2. Lowercasing</li>
                      <li>3. Unicode Normalization</li>
                      <li>4. Whitespace Normalization</li>
                      <li>5. Punctuation Normalization</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9b59b6', marginTop: '15px', marginBottom: '12px' }}>
                      <SvgIcon iconName="duo-filter" sizeName="2x" darkModeInvert={true} />
                      Filtering & Reduction (6-7)
                    </h4>
                    <ul style={{ fontSize: '1.2rem', color: '#9b59b6' }}>
                      <li>6. Stopword Removal</li>
                      <li>7. Light Stopword Trimming</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.4} duration={0.8}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71', marginBottom: '12px' }}>
                      <SvgIcon iconName="duo-seedling" sizeName="2x" darkModeInvert={true} />
                      Morphological Analysis (8-10)
                    </h4>
                    <ul style={{ fontSize: '1.2rem', color: '#2ecc71' }}>
                      <li>8. Stemming</li>
                      <li>9. Lemmatization</li>
                      <li>10. Part-of-Speech Tagging</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f39c12', marginTop: '15px', marginBottom: '12px' }}>
                      <SvgIcon iconName="duo-layer-group" sizeName="2x" darkModeInvert={true} />
                      Feature Engineering (11-12)
                    </h4>
                    <ul style={{ fontSize: '1.2rem', color: '#f39c12' }}>
                      <li>11. N-gram Generation</li>
                      <li>12. Phrase Detection</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6} duration={0.8}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e67e22', marginBottom: '12px' }}>
                      <SvgIcon iconName="duo-wand-magic-sparkles" sizeName="2x" darkModeInvert={true} />
                      Error Correction (13-15)
                    </h4>
                    <ul style={{ fontSize: '1.2rem', color: '#e67e22' }}>
                      <li>13. Spell Correction</li>
                      <li>14. OCR Error Correction</li>
                      <li>15. Contraction Expansion</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px', marginBottom: '12px' }}>
                      <SvgIcon iconName="duo-broom" sizeName="2x" darkModeInvert={true} />
                      Cleaning & Structuring (16-21)
                    </h4>
                    <ul style={{ fontSize: '1.2rem', color: '#e74c3c' }}>
                      <li>16. Number Normalization</li>
                      <li>17. Special Character Filtering</li>
                      <li>18. Removing Boilerplate Text</li>
                      <li>19. Removing Duplicate Sentences</li>
                      <li>20. Sentence Boundary Segmentation</li>
                      <li>21. Language Detection and Filtering</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.9} duration={0.6}>
                <p style={{ textAlign: 'center', marginTop: '25px', fontSize: '1.1em', fontWeight: 'bold' }}>
                  21 techniques organized into 6 categories
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#14227b',
          notes: `### 2. Table of Contents
Here's our roadmap for today. We have 21 techniques neatly organized into six logical categories. This structure helps us understand how different techniques work together and when to use each one.

####  Basic Normalization: The Foundation
We start with techniques one through five, the basic normalization methods. These are your bread and butter techniques that you'll use in almost every project. Tokenization breaks text into words. Lowercasing makes everything consistent by converting text to lowercase. Unicode normalization handles strange characters from different languages. Whitespace normalization cleans up extra spaces. And punctuation normalization standardizes how we handle periods, commas, and other punctuation marks. Think of these as washing your hands before cooking: they're fundamental hygiene steps.

####  Filtering and Morphological Analysis
Next we have filtering techniques six and seven, where we remove unnecessary words that don't add meaning, like "the" and "is". Then techniques eight through ten cover morphological analysis, which is a fancy way of saying we break words down to their root forms. This helps our models understand that "running," "ran," and "runs" are all variations of the same basic concept.

####  Feature Engineering and Error Correction
Techniques eleven and twelve focus on feature engineering, where we create new patterns like word pairs to help models understand context better. Then techniques thirteen through fifteen handle error correction. These fix spelling mistakes, clean up errors from scanned documents, and expand contractions like "don't" into "do not".

####  Final Cleaning and Structuring
Finally, techniques sixteen through twenty-one handle the last cleaning steps. We normalize numbers, remove special characters, strip out boilerplate text that appears on every page, remove duplicate sentences, split text into proper sentences, and detect what language the text is written in. These are the finishing touches that make our data ready for machine learning.

Now let's dive into our first technique: tokenization.`
        }
      ]
    },
    {
      id: 'technique-1',
      title: '1. Tokenization',
      slides: [
        {
          id: 3,
          title: '1. Tokenization',
          icon: { name: 'duo-scissors' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2} duration={0.8}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal <MermaidPopover diagram={`graph LR
    A[Raw Text] --> B[Tokenizer]
    B --> C[Token Array]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#81c784`} />
                    </h4>
                    <p>Split text into meaningful units (tokens) such as words, subwords, or sentences.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph TD
    A[Input: Hello World!] --> B{Method?}
    B -->|Whitespace| C[Hello, World!]
    B -->|BPE| D[Hel, lo, Wor, ld, !]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#81c784
    style D fill:#81c784`} />
                    </h4>
                    <p>Rule-based (whitespace/punctuation) or model-based (BPE/WordPiece) segmentation</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>Almost always as an early step before feature extraction or modeling</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4} duration={0.8}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Steps
                    </h4>
                    <GSAPStaggerList staggerDelay={0.1} initialDelay={0.6}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Choose granularity (word/subword/sentence)</li>
                        <li>Select tokenizer appropriate for language</li>
                        <li>Configure language-specific rules</li>
                        <li>Apply tokenization</li>
                        <li>Validate token counts</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#85342c',
          notes: `### 3. Tokenization - The Foundation of Text Processing

Welcome to our first technique: tokenization. If text preprocessing were a construction project, tokenization would be laying the foundation. Everything else we build depends on this crucial first step.

#### What Is Tokenization?

Tokenization (pronounced "TOH-ken-eye-ZAY-shun") is the process of breaking text into smaller pieces called tokens. Think of it like breaking a sentence into individual words, or even breaking words into smaller chunks. Imagine you have a sentence: "Hello, world!" Tokenization would split this into separate pieces: ["Hello", ",", "world", "!"].

Why do we need this? Computers can't understand sentences as whole units. They need text broken down into discrete, manageable pieces. It's like how you can't eat an entire pizza in one bite – you need to slice it into pieces first.

#### How Tokenization Works

There are two main approaches to tokenization:

**Rule-Based Tokenization:** This is the simple approach. We split text based on spaces and punctuation. For example, "I love cats" becomes ["I", "love", "cats"]. It's fast and straightforward, but can struggle with complex cases like "don't" or "New York".

**Model-Based Tokenization:** Modern techniques like BPE (Byte Pair Encoding, pronounced "B-P-E") or WordPiece are smarter. They learn patterns from data and can split words into meaningful subwords. For example, "unhappiness" might become ["un", "happiness"]. This helps AI models handle rare words by breaking them into common pieces they've seen before.

\`\`\`mermaid
graph TD
    A["Input: The cat's fast"] --> B{Choose Method}
    B -->|Simple Split| C["[The, cat's, fast]"]
    B -->|Advanced Split| D["[The, cat, 's, fast]"]
    style A fill:#4fc3f7,stroke:#333,stroke-width:2px
    style B fill:#ffd700,stroke:#333,stroke-width:2px
    style C fill:#81c784,stroke:#333,stroke-width:2px
    style D fill:#81c784,stroke:#333,stroke-width:2px
\`\`\`

#### When to Use Tokenization

The answer is simple: almost always! Tokenization is typically your very first preprocessing step. Before you can analyze sentiment, train a chatbot, or build a search engine, you need to tokenize your text. It's the gateway that transforms raw text into something a computer can process.

#### The Process Step-by-Step

1. **Choose your granularity:** Do you want individual words, smaller subword pieces, or entire sentences as tokens? For most tasks, word-level tokenization is perfect.

2. **Select the right tokenizer:** Different languages need different tokenizers. Chinese doesn't use spaces, so you need specialized tokenizers. For English, libraries like NLTK or spaCy work great.

3. **Configure rules:** Decide how to handle punctuation, contractions, and special cases. Should "don't" be one token or two?

4. **Apply and validate:** Run your tokenizer and check the results. Make sure token counts make sense and nothing weird happened.

This foundational technique enables everything else we'll learn today. Let's look at its pros and cons next.`
        },
        {
          id: 4,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2} duration={0.8}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros <MermaidPopover diagram={`graph LR
    A[Raw Text] --> B[Tokenization]
    B --> C[ML Ready]
    B --> D[Search Ready]
    B --> E[Analysis Ready]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#81c784
    style D fill:#81c784
    style E fill:#81c784`} />
                  </h4>
                  <GSAPStaggerList staggerDelay={0.15} initialDelay={0.4}>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Enables downstream NLP tasks</li>
                      <li>Handles OOV with subwords</li>
                      <li>Standardizes input format</li>
                    </ul>
                  </GSAPStaggerList>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons <MermaidPopover diagram={`graph TD
    A[Issues] --> B[Lost Context]
    A --> C[Language Challenges]
    A --> D[Longer Sequences]
    style A fill:#ffcdd2
    style B fill:#ffcdd2
    style C fill:#ffcdd2
    style D fill:#ffcdd2`} />
                  </h4>
                  <GSAPStaggerList staggerDelay={0.15} initialDelay={0.7}>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Can lose spacing/punctuation nuance</li>
                      <li>Language/script-specific challenges</li>
                      <li>Subwords may lengthen sequences</li>
                    </ul>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#85342c',
          notes: `### 4. Tokenization - Pros and Cons

Now that we understand what tokenization is, let's talk about its strengths and weaknesses. Every preprocessing technique involves tradeoffs, and understanding these helps you make better decisions for your specific project.

#### The Advantages: Why Tokenization Is Essential

**Enables Downstream NLP Tasks:** This is the big one. Tokenization is the gateway that makes everything else possible. Want to build a sentiment analyzer? You need tokens. Training a language model? You need tokens. Building a search engine? You need tokens. Without tokenization, your text is just one long string that computers can't meaningfully process. It's like trying to build a house without first preparing the building materials.

**Handles Out-of-Vocabulary (OOV) Words with Subwords:** This is where modern tokenization really shines. Let's say your model was trained on common English words, but then it encounters "COVID-19" or "cryptocurrency" – words that didn't exist when the model was trained. Traditional word-level tokenization would mark these as "unknown." But subword tokenization (like BPE or WordPiece) breaks them into pieces: ["crypto", "currency"] or ["COVID", "-", "19"]. The model can understand these pieces even if it's never seen the full word before. It's like understanding a new compound word by recognizing its familiar parts.

**Standardizes Input Format:** Tokenization creates a consistent, predictable format for your data. Every piece of text becomes a sequence of tokens, whether you're processing tweets, news articles, or medical records. This uniformity is crucial for machine learning models, which need consistent input shapes to learn effectively.

\`\`\`mermaid
graph LR
    A[Tweet: LOL] --> T[Tokenizer]
    B[Article] --> T
    C[Email] --> T
    T --> D[Standard Token Format]
    style A fill:#4fc3f7
    style B fill:#4fc3f7
    style C fill:#4fc3f7
    style T fill:#ffd700
    style D fill:#81c784
\`\`\`

#### The Challenges: What Can Go Wrong

**Can Lose Spacing and Punctuation Nuance:** Sometimes the spaces and punctuation carry important meaning. Consider "New York" versus "New" and "York" as separate tokens – the meaning changes. Or think about ellipses... which might indicate trailing off or hesitation. Simple tokenization might strip away these subtle cues. This is especially problematic for tasks like emotion detection where punctuation patterns matter (think "really???" versus "really").

**Language and Script-Specific Challenges:** Tokenization that works beautifully for English can completely fail for other languages. Chinese, Japanese, and Korean don't use spaces between words, so you can't just split on whitespace. Thai and Khmer also write continuously without word boundaries. Arabic has complex morphology where prefixes and suffixes attach to root words. German has compound words like "Donaudampfschifffahrtsgesellschaftskapitän" (Danube steamship company captain) that need special handling. Each language requires specialized tokenizers, and building multilingual systems becomes complex.

**Subwords May Lengthen Sequences:** While subword tokenization solves the OOV problem, it comes with a cost. A single word might split into multiple subword tokens. "unbelievable" might become ["un", "believable"] or even ["un", "believ", "able"]. This makes your sequences longer, which means more computational cost and memory usage. For models with maximum sequence lengths (like BERT's 512 token limit), this can force you to truncate or lose information.

#### The Bottom Line

Despite its challenges, tokenization is non-negotiable. The pros far outweigh the cons, and it's the essential first step in almost every NLP pipeline. The key is choosing the right tokenization strategy for your specific use case and being aware of the tradeoffs. Now let's move on to our next technique: lowercasing.`
        }
      ]
    },
    {
      id: 'technique-2',
      title: '2. Lowercasing',
      slides: [
        {
          id: 5,
          title: '2. Lowercasing',
          icon: { name: 'duo-text-width' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <GSAPAnimated animation="rotateIn" delay={0.2} duration={0.9}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal <MermaidPopover diagram={`graph LR
    A["Hello WORLD"] --> B[Lowercase]
    B --> C["hello world"]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#81c784`} />
                    </h4>
                    <p>Reduce case-related variance to shrink vocabulary and improve robustness.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph TD
    A[Mixed Case Text] --> B{Method}
    B -->|.lower| C[lowercase]
    B -->|.casefold| D[case-folded]
    D --> E[Handles ß → ss]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#81c784
    style D fill:#81c784
    style E fill:#e1bee7`} />
                    </h4>
                    <p>Convert text to lowercase or Unicode casefolding for broader equivalence.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>Case-insensitive tasks (IR, topic modeling) or noisy user text.</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" delay={0.5} duration={0.8}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Steps
                    </h4>
                    <GSAPStaggerList staggerDelay={0.12} initialDelay={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Decide lower vs casefold</li>
                        <li>Define exceptions (acronyms, proper nouns)</li>
                        <li>Apply</li>
                        <li>Spot-check impact</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#197769',
          notes: `### 5. Lowercasing - Simplifying Text Variance

Lowercasing is one of the simplest yet most powerful preprocessing techniques. It's the art of making text consistent by converting everything to lowercase letters. Let me explain why this seemingly simple step matters so much.

#### What Is Lowercasing and Why Does It Matter?

Imagine you're building a search engine. A user types "Python programming" but your database contains articles about "python Programming", "PYTHON programming", and "Python PROGRAMMING". Without lowercasing, your system would treat these as four different things! That's wasteful and confusing.

Lowercasing solves this by treating "Python", "python", and "PYTHON" as the same word. It reduces your vocabulary size dramatically. Instead of having separate entries for "The", "the", and "THE", you just have "the". This makes models more efficient and helps them generalize better.

Think of it like organizing a library. Without lowercasing, you'd file "Cat", "cat", and "CAT" in different places. With lowercasing, they all go in the same spot, making everything easier to find and manage.

#### How Lowercasing Works: Two Approaches

**Simple Lowercase (.lower() in Python):** This converts all ASCII letters to lowercase. "Hello World" becomes "hello world". It's fast, simple, and works great for English. This is your go-to method for most projects.

**Unicode Casefolding (.casefold() in Python):** This is the more sophisticated cousin. It handles international characters more aggressively. For example, the German letter "ß" (called "eszett" or "sharp S") becomes "ss" when casefolded. The Greek Σ (sigma) at the end of a word versus σ in the middle both become σ. This ensures better matching across different Unicode representations.

\`\`\`mermaid
graph TD
    A["Input: HELLO, Hello, hello"] --> B[Lowercasing]
    B --> C["Output: hello, hello, hello"]
    C --> D[Vocabulary Size: 3 → 1]
    style A fill:#4fc3f7,stroke:#333,stroke-width:2px
    style B fill:#ffd700,stroke:#333,stroke-width:2px
    style C fill:#81c784,stroke:#333,stroke-width:2px
    style D fill:#e1bee7,stroke:#333,stroke-width:2px
\`\`\`

#### When Should You Use Lowercasing?

**Perfect for:** Information retrieval (search engines), topic modeling, sentiment analysis on social media, spam detection. These tasks don't care whether someone wrote "AMAZING" or "amazing" – the sentiment is the same.

**Be careful with:** Named entity recognition (NER), question answering systems, or any task where capitalization carries meaning. "Apple" (the company) versus "apple" (the fruit) is a distinction you might want to preserve. Similarly, "IT" (Information Technology) versus "it" (pronoun) are very different.

#### The Process Step-by-Step

1. **Choose your method:** For English-only projects, simple .lower() is fine. For multilingual projects, use .casefold() to handle international characters properly.

2. **Define exceptions:** Decide if you need to preserve certain acronyms (like "NASA" or "FBI") or proper nouns. You might create a whitelist of terms that should stay uppercase.

3. **Apply the transformation:** Run your lowercasing function across all your text data.

4. **Validate:** Spot-check your results. Make sure you haven't lost important information. If you're working with a dataset about "US states" versus "us" (pronoun), you might need to rethink your approach.

Remember, lowercasing is powerful but not universal. It's about finding the right balance between simplification and preserving meaning. Let's look at the pros and cons next.`
        },
        {
          id: 6,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.2} duration={0.7}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros <MermaidPopover diagram={`graph TD
    A[Benefits] --> B[Smaller Vocabulary]
    A --> C[Better Generalization]
    A --> D[Simpler Matching]
    B --> E[Less Memory]
    C --> F[Better Predictions]
    style A fill:#81c784
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784
    style E fill:#e1bee7
    style F fill:#e1bee7`} />
                  </h4>
                  <GSAPStaggerList staggerDelay={0.1} initialDelay={0.4}>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Smaller vocab</li>
                      <li>Improved generalization</li>
                      <li>Simpler matching</li>
                    </ul>
                  </GSAPStaggerList>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons <MermaidPopover diagram={`graph LR
    A[Lost Information] --> B["US vs us"]
    A --> C["Apple vs apple"]
    A --> D["WHO vs who"]
    style A fill:#ffcdd2
    style B fill:#ffcdd2
    style C fill:#ffcdd2
    style D fill:#ffcdd2`} />
                  </h4>
                  <GSAPStaggerList staggerDelay={0.1} initialDelay={0.7}>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Loses case signals (named entities, sentence starts)</li>
                      <li>Can harm tasks relying on casing</li>
                    </ul>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#197769',
          notes: `### 6. Lowercasing - Pros and Cons

Let's examine the tradeoffs of lowercasing. Like all preprocessing decisions, this one comes with clear benefits and potential drawbacks that you need to weigh for your specific use case.

#### The Advantages: Why Lowercase Everything?

**Smaller Vocabulary:** This is the most immediate benefit. Instead of treating "Cat", "cat", and "CAT" as three separate words, you have just one: "cat". In a large corpus, this can reduce your vocabulary from 100,000 unique terms to perhaps 70,000 or fewer. Why does this matter? Smaller vocabularies mean less memory usage, faster training, and models that need fewer examples to learn patterns. It's like decluttering your house – everything becomes easier to manage when you have less stuff.

**Improved Generalization:** When your model learns patterns from "happy", those same patterns automatically apply to "Happy" and "HAPPY". The model doesn't have to learn the same sentiment signals three times for three case variations. This is especially valuable when you have limited training data. If you only have a few examples of people saying "EXCITED!!!" in all caps, your model can still understand excitement when someone writes "excited" in lowercase.

\`\`\`mermaid
graph LR
    A["Training: happy → positive"] --> B[Model Learns]
    B --> C["Predicts: Happy → positive"]
    B --> D["Predicts: HAPPY → positive"]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#81c784
    style D fill:#81c784
\`\`\`

**Simpler Matching:** For search engines and information retrieval, lowercasing makes matching trivial. When a user searches for "python", they'll find documents about "Python" the programming language and "python" the snake. No complex case-insensitive regex needed – just straightforward string matching.

#### The Drawbacks: What Do We Lose?

**Loses Case Signals for Named Entities:** This is the biggest problem. Consider these examples:
- "Turkey" (the country) vs "turkey" (the bird)
- "March" (the month) vs "march" (walking in formation)
- "polish" (to make shiny) vs "Polish" (from Poland)
- "US" (United States) vs "us" (pronoun)

Capitalization often distinguishes proper nouns from common words. If you're building a named entity recognition system or a question-answering bot, losing this signal can be devastating. Imagine a chatbot that can't tell whether someone is asking about "Apple" the company or buying apples at the grocery store.

**Sentence Start Information Disappears:** Capital letters tell us where sentences begin. "The cat sat. Then it ran." becomes "the cat sat. then it ran." You've lost the clear boundary marker. For tasks like sentence segmentation or syntactic parsing, this information can be valuable.

**Can Harm Specific Tasks:** Any task that relies on capitalization patterns will suffer. For example:
- Detecting shouting or emphasis ("I am SO ANGRY" loses its intensity)
- Identifying acronyms (FBI, CIA, NASA all become unrecognizable)
- Understanding code snippets (where CamelCase matters)
- Processing formal documents where titles and headings are capitalized

#### Making the Decision

The key question is: Does your task depend on capitalization? For sentiment analysis of tweets, topic modeling of news articles, or spam detection – lowercase away! The benefits far outweigh the costs. For named entity recognition, question answering, or text generation – think carefully. You might want to preserve case or at least tag important entities before lowercasing.

A common strategy is to lowercase for some tasks and preserve case for others, or to create multiple versions of your features (one lowercased, one original) and let your model decide which is more useful. Let's move on to our next technique: Unicode normalization.`
        }
      ]
    },
    {
      id: 'technique-3',
      title: '3. Unicode Normalization',
      slides: [
        {
          id: 7,
          title: '3. Unicode Normalization',
          icon: { name: 'duo-globe' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <GSAPAnimated animation="flipCard" delay={0.3} duration={1.0}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal <MermaidPopover diagram={`graph LR
    A["é (U+00E9)"] --> N[Normalize]
    B["é (U+0065+0301)"] --> N
    N --> C["Canonical Form"]
    style A fill:#4fc3f7
    style B fill:#4fc3f7
    style N fill:#ffd700
    style C fill:#81c784`} />
                    </h4>
                    <p>Ensure canonical representation of characters to avoid duplicate forms.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph TD
    A[Text] --> B{Unicode Form}
    B -->|NFC| C[Composed]
    B -->|NFD| D[Decomposed]
    B -->|NFKC| E[Compat Composed]
    B -->|NFKD| F[Compat Decomposed]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#81c784
    style D fill:#81c784
    style E fill:#e1bee7
    style F fill:#e1bee7`} />
                    </h4>
                    <p>Apply Unicode NFC/NFD/NFKC/NFKD to compose/decompose/compatibility-normalize.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>Mixed sources, accented characters, search/dedup pipelines, cross-platform data.</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.6} duration={0.8}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Steps
                    </h4>
                    <GSAPStaggerList staggerDelay={0.13} initialDelay={0.8}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Pick form (NFC common, NFKC for compatibility)</li>
                        <li>Normalize strings</li>
                        <li>Test tricky cases (combining marks)</li>
                        <li>Log conversions</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#777719',
          notes: `### 7. Unicode Normalization - Taming Invisible Differences

Unicode normalization is one of those behind-the-scenes techniques that prevents mysterious bugs. It ensures that characters that look identical are actually treated as identical by computers. Let me explain this deceptively complex topic.

#### The Hidden Problem: Same Character, Different Bytes

Here's a mind-bending fact: The character "é" (e with an acute accent) can be represented in two completely different ways in Unicode:
1. As a single precomposed character (U+00E9)
2. As TWO characters: regular "e" (U+0065) followed by a combining acute accent (U+0301)

To your eyes, these look absolutely identical: é and é. But to a computer, they're different byte sequences! If someone searches for "café" spelled one way, they won't find "café" spelled the other way. This is a nightmare for search engines, deduplication, and text matching.

This problem exists for hundreds of characters across dozens of languages: accented letters in French and Spanish, umlauts in German, diacritics in Vietnamese, and more.

\`\`\`mermaid
graph LR
    A["User 1: café (precomposed)"] --> C[Search]
    B["User 2: café (decomposed)"] --> C
    C --> D{Without Normalization}
    D --> E[No Match! ❌]
    C --> F{With Normalization}
    F --> G[Match! ✓]
    style A fill:#4fc3f7
    style B fill:#4fc3f7
    style C fill:#ffd700
    style E fill:#ffcdd2
    style G fill:#81c784
\`\`\`

#### The Four Unicode Normalization Forms

Unicode provides four standard normalization forms. Don't worry, you'll mostly use just one or two:

**NFC (Canonical Composition):** Pronounced "N-F-C". This converts characters to their composed (single character) form. "e" + "´" becomes "é". This is the most common form and what you should use by default. It's compact and matches how most text appears naturally.

**NFD (Canonical Decomposition):** Pronounced "N-F-D". This does the opposite – breaks composed characters into base character plus combining marks. "é" becomes "e" + "´". This is useful for certain linguistic analysis tasks where you want to analyze base characters and accents separately.

**NFKC (Compatibility Composition):** Pronounced "N-F-K-C". This is more aggressive. It not only composes characters but also converts "compatible" characters to standard forms. Superscript "²" becomes regular "2", fancy ligature "ﬁ" becomes "fi". Use this when you want maximum normalization for search and matching, but be aware it can change appearance.

**NFKD (Compatibility Decomposition):** Combines NFKC's aggressive conversions with NFD's decomposition. Rarely used in practice.

#### When to Use Unicode Normalization

**Perfect for:** Any system that compares or matches text strings. Search engines, deduplication pipelines, database lookups, cross-platform applications (Windows vs Mac vs Linux handle Unicode differently). If you're accepting text from multiple sources – user input, scraped web pages, API responses – you need Unicode normalization.

**Especially important for:** Applications handling non-English text with accents and diacritics. French, Spanish, German, Polish, Vietnamese, Arabic, and dozens of other languages all use combining characters.

#### The Process Step-by-Step

1. **Choose your form:** NFC is the safe default for 90% of use cases. Use NFKC if you need aggressive normalization for search/matching and don't care about preserving exact appearance.

2. **Apply normalization:** In Python, use `unicodedata.normalize('NFC', text)`. Most languages have similar functions.

3. **Test edge cases:** Try problematic characters like "é", "ñ", "ü", emoji with modifiers (skin tones), and combining marks.

4. **Log conversions:** During initial deployment, log cases where normalization actually changed something. This helps you understand your data and catch unexpected issues.

The beauty of Unicode normalization is that once you apply it, all those invisible differences disappear, and your text matching "just works." Let's look at the pros and cons next.`
        },
        {
          id: 8,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.2} duration={0.9}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros <MermaidPopover diagram={`graph TD
    A[Benefits] --> B[Stable Comparisons]
    A --> C[No Duplicates]
    A --> D[Safer Processing]
    style A fill:#81c784
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784`} />
                  </h4>
                  <GSAPStaggerList staggerDelay={0.12} initialDelay={0.4}>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Stable comparisons</li>
                      <li>Fewer hidden duplicates</li>
                      <li>Safer tokenization</li>
                    </ul>
                  </GSAPStaggerList>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons <MermaidPopover diagram={`graph LR
    A[NFKC Risk] --> B[Changed Appearance]
    A --> C[Lost Semantics]
    style A fill:#ffcdd2
    style B fill:#ffcdd2
    style C fill:#ffcdd2`} />
                  </h4>
                  <GSAPStaggerList staggerDelay={0.12} initialDelay={0.7}>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>NFKC may alter appearance/semantics</li>
                      <li>Grapheme cluster edge cases</li>
                    </ul>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#777719',
          notes: `### 8. Unicode Normalization - Pros and Cons

Unicode normalization is a powerful tool, but like all preprocessing techniques, it comes with tradeoffs. Let's examine when it helps and when you need to be careful.

#### The Advantages: Why Normalize Unicode?

**Stable Comparisons:** This is the primary benefit. After normalization, "café" equals "café" equals "café", no matter how the accents were originally encoded. Your string comparisons become reliable and predictable. Without normalization, you'd have bizarre bugs where searches fail, duplicates aren't detected, and users get frustrated because "identical" strings don't match. This is especially critical for dictionary lookups, database queries, and user authentication (imagine login failing because a user's name with an accent was encoded differently!).

**Fewer Hidden Duplicates:** In a dataset without Unicode normalization, you might have the same word appearing dozens of times with imperceptibly different encodings. Each counts as a separate "unique" word, inflating your vocabulary size artificially. One company discovered their customer database had hundreds of duplicate entries because names with accents weren't normalized – "José Rodriguez" appeared under dozens of Unicode variants. After normalization, these all collapsed into single entries, revealing the true scale of their data.

**Safer Tokenization:** Tokenizers work more reliably when characters are in a consistent form. Some tokenizers might handle composed "é" differently than decomposed "e" + "´", leading to inconsistent behavior. Normalizing first ensures your tokenizer sees consistent input and produces consistent output.

\`\`\`mermaid
graph TD
    A[Raw Text: café, café, café] --> B[Without Normalization]
    B --> C[Vocabulary: café1, café2, café3]
    A --> D[With Normalization]
    D --> E[Vocabulary: café]
    style A fill:#4fc3f7
    style C fill:#ffcdd2
    style E fill:#81c784
\`\`\`

#### The Drawbacks: What Can Go Wrong?

**NFKC May Alter Appearance or Semantics:** The "K" in NFKC stands for "compatibility," which means it makes aggressive transformations. While this is great for matching, it can change meaning:
- Mathematical symbols: "²" (superscript 2) becomes "2" (regular 2), losing the superscript formatting
- Special typography: "ﬁ" (ligature fi) becomes "fi" (two letters), which looks different
- Special characters: "Ⅲ" (Roman numeral three) becomes "III" (three capital i's)
- Full-width vs half-width: "Ａ" (full-width A used in Japanese text) becomes "A" (regular A)

If you're processing mathematical formulas, preserving original typography, or handling mixed-language text where formatting matters, NFKC might be too aggressive. Use NFC instead for a gentler approach.

**Grapheme Cluster Edge Cases:** Some complex scripts like Devanagari (used for Hindi), Tamil, or Arabic have complicated rules about how characters combine. A "grapheme cluster" is what humans perceive as a single character, but it might be multiple Unicode codepoints. Normalization can interact in unexpected ways with these clusters. For example, emoji with skin tone modifiers (👨🏾 is actually two codepoints: person + skin tone) need careful handling.

Additionally, some very rare or archaic characters might not have normalization rules defined, leading to inconsistent behavior.

#### Making the Right Choice

For most English-heavy applications with occasional accented characters, NFC is perfect. It's safe, preserves appearance, and solves the duplication problem.

For aggressive search and matching where appearance doesn't matter (like fuzzy search, spam detection, or deduplication), NFKC gives you more power.

For specialized applications with mathematical notation, mixed scripts, or typography requirements, test carefully and consider using NFC or even skipping normalization for certain fields.

The key is understanding your data and your use case. Now let's move on to whitespace normalization.`
        }
      ]
    },
    {
      id: 'technique-4',
      title: '4. Whitespace Normalization',
      slides: [
        {
          id: 9,
          title: '4. Whitespace Normalization',
          icon: { name: 'duo-align-left' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <GSAPAnimated animation="slideInBottom" delay={0.2} duration={0.8}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal <MermaidPopover diagram={`graph LR
    A["Hello    World  "] --> B[Normalize]
    B --> C["Hello World"]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#81c784`} />
                    </h4>
                    <p>Standardize spacing to make token boundaries predictable.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph TD
    A[Messy Spacing] --> B[Collapse Spaces]
    B --> C[Normalize Newlines]
    C --> D[Trim Edges]
    D --> E[Clean Text]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#ffd700
    style D fill:#ffd700
    style E fill:#81c784`} />
                    </h4>
                    <p>Collapse multiple spaces; normalize tabs/newlines; trim leading/trailing whitespace.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>Before tokenization; after OCR; logs and scraped text.</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.5} duration={0.7}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Steps
                    </h4>
                    <GSAPStaggerList staggerDelay={0.11} initialDelay={0.7}>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Replace runs of whitespace with single space</li>
                        <li>Standardize newline to \n</li>
                        <li>Trim</li>
                        <li>Preserve intentional separators if needed</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#631710',
          notes: `### 9. Whitespace Normalization - Cleaning Invisible Chaos

Whitespace normalization deals with one of the most annoying but common problems in text processing: inconsistent and excessive spacing. It's the janitorial work of text preprocessing – not glamorous, but absolutely essential.

#### The Whitespace Problem

Real-world text is messy. Consider these examples:
- Web-scraped text: "The    quick     brown   fox" (random multiple spaces)
- OCR output: "Hello\t\t\tWorld" (tabs mixed with spaces)
- User input: "  my search query  " (leading and trailing spaces)
- Mixed line endings: "line1\r\nline2\nline3\r" (Windows vs Unix vs Mac line endings)

Without normalization, "Hello World" with one space is treated as different from "Hello  World" with two spaces. Your tokenizer might create empty tokens from runs of spaces. Comparisons fail. Users get confused.

\`\`\`mermaid
graph LR
    A["  Hello    World  \\t\\n"] --> B[Whitespace Normalize]
    B --> C["Hello World"]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#81c784
\`\`\`

#### What Is Whitespace?

Whitespace isn't just the space bar! It includes:
- Regular spaces (U+0020)
- Tabs (\\t)
- Newlines (\\n)
- Carriage returns (\\r)
- Non-breaking spaces (U+00A0, often from HTML)
- Various Unicode spaces (em space, en space, thin space, etc.)

Different sources produce different whitespace characters. HTML uses &nbsp; (non-breaking space). Word processors insert special spaces. Different operating systems use different line endings (Windows: \\r\\n, Unix/Mac: \\n, old Mac: \\r).

#### How Whitespace Normalization Works

The process has several steps:

**1. Collapse Multiple Spaces:** Replace any sequence of whitespace characters with a single space. "Hello    World" becomes "Hello World". This includes replacing tabs and newlines with spaces if you're treating text as a single line.

**2. Standardize Line Endings:** Convert all line endings (\\r\\n, \\r, \\n) to a single standard (usually \\n). This prevents cross-platform headaches.

**3. Trim Leading and Trailing Whitespace:** Remove spaces, tabs, and newlines from the beginning and end of strings. "  query  " becomes "query".

**4. Handle Special Cases:** Decide whether to preserve intentional formatting like paragraph breaks (double newlines) or indentation (for code or poetry).

#### When to Use Whitespace Normalization

**Perfect for:** 
- Before tokenization (cleans up boundaries between words)
- After OCR (optical character recognition produces messy spacing)
- Processing server logs (which have inconsistent formatting)
- Cleaning web-scraped content (HTML parsing often leaves weird spacing)
- Handling user input (users add random spaces)

**Be careful with:**
- Code (where indentation and spacing matter for syntax)
- Poetry or formatted text (where line breaks are meaningful)
- Tables (where spacing creates alignment)
- Markdown or structured formats (where spacing defines structure)

#### The Process Step-by-Step

1. **Collapse whitespace runs:** Use regex like `\\s+` → ` ` to replace any run of whitespace with a single space.

2. **Standardize newlines:** Replace `\\r\\n` and `\\r` with `\\n` for consistency.

3. **Trim:** Apply `.strip()` or similar to remove leading/trailing whitespace.

4. **Preserve intentional separators:** If paragraph breaks matter, preserve double newlines or convert them to a special token before collapsing.

This simple technique eliminates a huge class of bugs and inconsistencies. Your tokenizer will thank you! Let's look at the pros and cons.`
        },
        {
          id: 10,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.3} duration={0.9}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros <MermaidPopover diagram={`graph LR
    A[Clean Text] --> B[Better Tokens]
    A --> C[Consistent Parse]
    A --> D[Fewer Bugs]
    style A fill:#81c784
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784`} />
                  </h4>
                  <GSAPStaggerList staggerDelay={0.1} initialDelay={0.5}>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Cleaner tokens</li>
                      <li>Consistent parsing</li>
                      <li>Fewer edge cases</li>
                    </ul>
                  </GSAPStaggerList>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons <MermaidPopover diagram={`graph TD
    A[Lost Info] --> B[Table Layout]
    A --> C[Code Format]
    A --> D[Alignment]
    style A fill:#ffcdd2
    style B fill:#ffcdd2
    style C fill:#ffcdd2
    style D fill:#ffcdd2`} />
                  </h4>
                  <GSAPStaggerList staggerDelay={0.1} initialDelay={0.8}>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>May lose layout cues (tables, code)</li>
                      <li>Affects alignment-sensitive text</li>
                    </ul>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#631710',
          notes: `### 10. Whitespace Normalization - Pros and Cons

Whitespace normalization is simple but powerful. Let's examine the benefits and potential pitfalls of this essential cleaning step.

#### The Advantages: Why Normalize Whitespace?

**Cleaner Tokens:** With normalized whitespace, your tokenizer works reliably. "Hello World" always splits into exactly two tokens: "Hello" and "World". Without normalization, "Hello    World" (with extra spaces) might create empty tokens or inconsistent results depending on your tokenizer. Cleaned whitespace means predictable, clean token boundaries every time.

Think about OCR (optical character recognition) output. Scanned documents often have weird spacing: "T h e   q u i c k" or "The  quick     brown". Whitespace normalization fixes these artifacts, making the text usable for NLP tasks.

**Consistent Parsing:** When all text uses the same whitespace conventions (single spaces, consistent newlines), your entire pipeline behaves predictably. Pattern matching works. String comparisons work. Feature extraction works. Without normalization, you'd need to handle "Hello World", "Hello  World", "Hello\tWorld", and "Hello\n\nWorld" as separate cases – a maintenance nightmare.

**Fewer Edge Cases:** Trimming leading and trailing whitespace eliminates subtle bugs. Consider user input: "  search query  " versus "search query". They should be treated identically, but without trimming, they hash differently, match differently, and create duplicate entries in logs or databases. Normalization eliminates these gotchas.

\`\`\`mermaid
graph TD
    A["   messy    text   "] --> B[Normalize]
    B --> C["messy text"]
    C --> D[Clean Tokenization ✓]
    C --> E[Reliable Matching ✓]
    C --> F[Consistent Hashing ✓]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#81c784
    style D fill:#81c784
    style E fill:#81c784
    style F fill:#81c784
\`\`\`

#### The Drawbacks: What Do We Lose?

**May Lose Layout Cues for Tables and Code:** Here's where normalization can backfire. Consider ASCII art, formatted tables, or code:
```
Name        Age    City
Alice       25     NYC
Bob         30     LA
```

If you collapse all whitespace, this becomes "Name Age City Alice 25 NYC Bob 30 LA" – the alignment and structure are destroyed. The table becomes gibberish.

Similarly, Python code relies on indentation for structure:
```python
def hello():
    print("Hello")
```

Collapse the indentation and you've broken the code. It's no longer valid Python.

**Affects Alignment-Sensitive Text:** Poetry and song lyrics often use intentional spacing and line breaks for rhythm and emphasis:
```
This    is    spaced    for    effect
Not              an              accident
```

Normalizing this loses the artistic intent. Similarly, screenplays, scripts, and formatted documents use precise spacing to convey meaning beyond the words themselves.

#### Making the Decision

For most NLP tasks – sentiment analysis, topic modeling, information retrieval, spam detection – whitespace normalization is a clear win. The structure of the text doesn't matter; only the words do.

For specialized domains – code analysis, document layout analysis, poetry analysis, or any task where formatting matters – be selective. You might normalize within sentences but preserve line breaks, or skip normalization entirely.

A common approach is to normalize by default but add flags or special handling for formatted content. Detect code blocks (marked by triple backticks in Markdown, for example) and skip normalization for those sections.

The key is knowing your data and your task. For general text cleanup, whitespace normalization is essential hygiene. Now let's move to punctuation normalization.`
        }
      ]
    },
    {
      id: 'technique-5',
      title: '5. Punctuation Normalization',
      slides: [
        {
          id: 11,
          title: '5. Punctuation Normalization',
          icon: { name: 'duo-leaf' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Reduce punctuation variants and noise.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Map curly to straight quotes; unify hyphen/dash; collapse repeated punctuation; optionally strip.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Prior to tokenization/features; noisy UGC; cross-locale corpora.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Define mapping table</li>
                    <li>Substitute</li>
                    <li>Remove extraneous marks</li>
                    <li>Preserve meaningful punctuation as needed</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#226310',
          notes: ''
        },
        {
          id: 12,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Fewer token variants</li>
                  <li>Better matching</li>
                  <li>Improved sentence splitting</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Language/script-specific</li>
                  <li>May remove emotive or semantic cues</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#226310',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-6',
      title: '6. Stopword Removal',
      slides: [
        {
          id: 13,
          title: '6. Stopword Removal',
          icon: { name: 'duo-filter-circle-xmark' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Remove very frequent function words that add little topical value.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Filter tokens against a language-specific stopword list.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Bag-of-words/TF-IDF features, IR, topic modeling, keyword extraction.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Select stoplist per language/domain</li>
                    <li>Keep negations/intensifiers if needed</li>
                    <li>Filter</li>
                    <li>Review impact on metrics</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#105163',
          notes: ''
        },
        {
          id: 14,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Reduces dimensionality</li>
                  <li>Speeds training</li>
                  <li>Can improve topic signal</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Risk of meaning loss</li>
                  <li>Harms sequence/transformer setups</li>
                  <li>Domain sensitivity</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#105163',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-7',
      title: '7. Light Stopword Trimming',
      slides: [
        {
          id: 15,
          title: '7. Light Stopword Trimming',
          icon: { name: 'duo-filter' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Conservatively remove only the most generic function words while keeping nuance.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Use a minimal curated list or importance scores (e.g., TF-IDF) to trim lightly.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Sentiment, short texts, tasks sensitive to negation/modality.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Define light list</li>
                    <li>Whitelist negations/domain terms</li>
                    <li>Filter</li>
                    <li>Iterate with validation</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#631061',
          notes: ''
        },
        {
          id: 16,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Preserves meaning better than full removal</li>
                  <li>Balanced noise reduction</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Requires tuning</li>
                  <li>Residual noise may remain</li>
                  <li>Still risky for very short texts</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#631061',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-8',
      title: '8. Stemming',
      slides: [
        {
          id: 17,
          title: '8. Stemming',
          icon: { name: 'duo-seedling' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Reduce inflected words to stems to merge variants.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Heuristic algorithms (Porter, Snowball, Lancaster) strip suffixes.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>IR, topic modeling, when lexical precision is not critical.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Choose language stemmer</li>
                    <li>Apply</li>
                    <li>Sample-check for over/under-stemming</li>
                    <li>Adjust algorithm if available</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#101063',
          notes: ''
        },
        {
          id: 18,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Cuts dimensionality</li>
                  <li>Robust to inflectional variation</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Produces non-words</li>
                  <li>May conflate unrelated terms</li>
                  <li>Language-dependent rules</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#101063',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-9',
      title: '9. Lemmatization',
      slides: [
        {
          id: 19,
          title: '9. Lemmatization',
          icon: { name: 'duo-leaf' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Map tokens to dictionary base forms (lemmas).</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Morphological analysis using lexicons and POS/context.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Need precise base forms; linguistic analysis; better semantic grouping.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Tokenize</li>
                    <li>POS tag</li>
                    <li>Lemmatize with language model</li>
                    <li>Handle OOV/proper nouns separately</li>
                    <li>Validate</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#10632c',
          notes: ''
        },
        {
          id: 20,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>More accurate than stemming</li>
                  <li>Preserves meaning</li>
                  <li>Aids downstream tasks</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Slower</li>
                  <li>Requires models/resources</li>
                  <li>Errors under domain shift</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#10632c',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-10',
      title: '10. Part-of-Speech Tagging',
      slides: [
        {
          id: 21,
          title: '10. Part-of-Speech Tagging',
          icon: { name: 'duo-tags' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Assign grammatical categories (e.g., noun, verb) to tokens.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Sequence labeling via HMM/CRF/neural models trained on tagged corpora.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Before lemmatization, parsing, NER, feature engineering.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Select tagset (e.g., Universal POS)</li>
                    <li>Load model</li>
                    <li>Tokenize</li>
                    <li>Tag</li>
                    <li>Evaluate on a sample</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#631037',
          notes: ''
        },
        {
          id: 22,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Enables syntax-aware features</li>
                  <li>Improves lemmatization and parsing</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Errors propagate</li>
                  <li>Domain/language coverage varies</li>
                  <li>Ambiguous tokens</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#631037',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-11',
      title: '11. N-gram Generation',
      slides: [
        {
          id: 23,
          title: '11. N-gram Generation',
          icon: { name: 'duo-hashtag' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Capture local context by creating contiguous token sequences.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Sliding window to build bigrams/trigrams/etc.; optional weighting.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Linear models, IR, text classification, feature engineering.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Choose n values</li>
                    <li>Generate</li>
                    <li>Prune rare n-grams</li>
                    <li>Compute TF-IDF/PMI</li>
                    <li>Cap feature size</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#636310',
          notes: ''
        },
        {
          id: 24,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Encodes order</li>
                  <li>Improves predictive power over unigrams</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Feature explosion</li>
                  <li>Sparsity</li>
                  <li>Brittle to noise and rephrasing</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#636310',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-12',
      title: '12. Phrase Detection',
      slides: [
        {
          id: 25,
          title: '12. Phrase Detection',
          icon: { name: 'duo-puzzle-piece' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Treat multiword expressions as single units (e.g., "New York").</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Statistical collocation metrics (PMI, t-score) or model-based detection.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>IR, topic modeling, entity-heavy domains, prior to tokenization updates.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Compute n-gram stats</li>
                    <li>Set thresholds</li>
                    <li>Join phrases with delimiter</li>
                    <li>Iterate for higher-order phrases</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#63105a',
          notes: ''
        },
        {
          id: 26,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Better semantics</li>
                  <li>Reduces fragmentation</li>
                  <li>Improves retrieval and topics</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Threshold tuning</li>
                  <li>Domain dependence</li>
                  <li>False positives/negatives</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#63105a',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-13',
      title: '13. Spell Correction',
      slides: [
        {
          id: 27,
          title: '13. Spell Correction',
          icon: { name: 'duo-spell-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Fix misspellings to improve readability and model input quality.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Candidate generation via edit distance; ranking by frequency/context (language models).</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>User-generated content, noisy forms, query logs.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Detect errors</li>
                    <li>Generate candidates</li>
                    <li>Rank</li>
                    <li>Apply with confidence threshold</li>
                    <li>Log corrections for QA</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#633510',
          notes: ''
        },
        {
          id: 28,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Improves recall/precision</li>
                  <li>Cleaner features</li>
                  <li>Better downstream accuracy</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Overcorrection risk</li>
                  <li>Language/locale-specific</li>
                  <li>Computational overhead</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#633510',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-14',
      title: '14. OCR Error Correction',
      slides: [
        {
          id: 29,
          title: '14. OCR Error Correction',
          icon: { name: 'duo-wand-sparkles' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Correct systematic errors from optical character recognition.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Rule-based replacements, confusion matrices, dictionaries, post-OCR language models.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Scanned books, PDFs, historical documents.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Analyze error patterns</li>
                    <li>Build rules/models</li>
                    <li>Apply</li>
                    <li>Evaluate on gold samples</li>
                    <li>Iterate</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a6310',
          notes: ''
        },
        {
          id: 30,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Large quality gains on OCR text</li>
                  <li>Addresses domain-specific noise</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Corpus-specific tuning needed</li>
                  <li>Residual errors remain</li>
                  <li>Setup effort</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#1a6310',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-15',
      title: '15. Contraction Expansion',
      slides: [
        {
          id: 31,
          title: '15. Contraction Expansion',
          icon: { name: 'duo-expand' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Expand contractions (e.g., "don't" → "do not") for clarity and handling negation.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Regex + mapping dictionary; optional context-aware models.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Sentiment, rule-based parsing, tasks expecting full forms.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Define mapping incl. locale variants</li>
                    <li>Preserve casing</li>
                    <li>Expand</li>
                    <li>Handle slang and possessives carefully</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#611063',
          notes: ''
        },
        {
          id: 32,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Clearer negation and syntax</li>
                  <li>More consistent tokens</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Ambiguities (he'd = he had/would)</li>
                  <li>May alter tone</li>
                  <li>Locale-dependent</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#611063',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-16',
      title: '16. Number Normalization',
      slides: [
        {
          id: 33,
          title: '16. Number Normalization',
          icon: { name: 'duo-hashtag' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Standardize numeric expressions for comparability and reduced sparsity.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Parse numerals/words; normalize format; unit conversion; masking (e.g., "NUM").</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>De-identification, aggregation, generalization in models.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Detect numbers</li>
                    <li>choose strategy (keep, scale, mask)</li>
                    <li>handle units/currencies</li>
                    <li>format consistently</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#631010',
          notes: ''
        },
        {
          id: 34,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Improves generalization</li>
                  <li>Eases matching</li>
                  <li>Reduces vocab size</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Potential loss of precision</li>
                  <li>Unit handling is tricky</li>
                  <li>Context-sensitive</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#631010',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-17',
      title: '17. Special Character Filtering',
      slides: [
        {
          id: 35,
          title: '17. Special Character Filtering',
          icon: { name: 'duo-filter' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Control or remove emojis, symbols, control chars, and non-text artifacts.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Use Unicode categories; whitelists/blacklists; regex filters or mappings.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Formal documents, security sanitization, systems with limited character sets.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Define allowed sets</li>
                    <li>Strip/map disallowed chars</li>
                    <li>Log removals</li>
                    <li>Review edge cases (accent marks, emoji)</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#106063',
          notes: ''
        },
        {
          id: 36,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Cleaner tokens</li>
                  <li>Prevents parsing/rendering issues</li>
                  <li>Mitigates injection</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>May remove meaningful signals (emoji/emoticons)</li>
                  <li>Language-specific characters risk</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#106063',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-18',
      title: '18. Removing Boilerplate Text',
      slides: [
        {
          id: 37,
          title: '18. Removing Boilerplate Text',
          icon: { name: 'duo-broom' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Remove template-like non-content (headers, footers, nav, ads).</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>HTML/DOM parsing; text-density heuristics; boilerplate detectors (e.g., Boilerpipe, JusText).</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Web/news scraping, emails, PDFs, templated reports.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }} >
                    <li>Parse document</li>
                    <li>identify content blocks</li>
                    <li>drop low-density/repetitive regions</li>
                    <li>keep main body</li>
                    <li>validate</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#632e10',
          notes: ''
        },
        {
          id: 38,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Cleaner corpora</li>
                  <li>Better topic and summarization performance</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Risk of removing content</li>
                  <li>Site-specific maintenance</li>
                  <li>Complex layouts</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#632e10',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-19',
      title: '19. Removing Duplicate Sentences',
      slides: [
        {
          id: 39,
          title: '19. Removing Duplicate Sentences',
          icon: { name: 'duo-copy' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Eliminate exact/near-duplicate sentences to reduce bias and leakage.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Hashing for exact dupes; MinHash/LSH or embeddings + cosine for near dupes.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Dataset building, deduplication before training/evaluation.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Normalize text</li>
                    <li>Compute signatures/embeddings</li>
                    <li>Set similarity threshold</li>
                    <li>Remove</li>
                    <li>Keep canonical</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#104163',
          notes: ''
        },
        {
          id: 40,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Smaller</li>
                  <li>Cleaner datasets</li>
                  <li>Faster training</li>
                  <li>Reduces overfitting</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Computational cost</li>
                  <li>Risk of dropping legitimate repetitions</li>
                  <li>Threshold tuning</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#104163',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-20',
      title: '20. Sentence Boundary Segmentation',
      slides: [
        {
          id: 41,
          title: '20. Sentence Boundary Segmentation',
          icon: { name: 'duo-scissors' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Split text into sentences for sentence-level processing.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Rule-based with abbreviations + ML/neural models to handle edge cases.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Summarization, translation, sentiment at sentence granularity.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Choose segmenter</li>
                    <li>Configure abbreviation lists</li>
                    <li>Apply</li>
                    <li>Validate tricky cases (quotes, decimals, ellipses)</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#511063',
          notes: ''
        },
        {
          id: 42,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Enables sentence-level features</li>
                  <li>Manageable chunks</li>
                  <li>Better downstream alignment</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Noisy text and missing punctuation hurt accuracy</li>
                  <li>Multilingual challenges</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#511063',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-21',
      title: '21. Language Detection and Filtering',
      slides: [
        {
          id: 43,
          title: '21. Language Detection and Filtering',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Goal
                  </h4>
                  <p>Identify language and route/filter text accordingly.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    How It Works
                  </h4>
                  <p>Character n-grams with probabilistic classifiers (e.g., fastText, CLD3), sometimes with confidence scores.</p>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    When to Use
                  </h4>
                  <p>Multilingual corpora; language-specific pipelines or content moderation.</p>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Pick DifficultySelector</li>
                    <li>Set confidence threshold</li>
                    <li>Detect per document/sentence</li>
                    <li>Filter or route</li>
                    <li>Monitor code-switching</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#635f10',
          notes: ''
        },
        {
          id: 44,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Cleaner mono-lingual datasets</li>
                  <li>Correct model routing</li>
                  <li>Better performance</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Short texts are hard</li>
                  <li>Code-switching</li>
                  <li>Similar scripts/languages may confuse models</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#635f10',
          notes: ''
        }
      ]
    }
  ]
};

