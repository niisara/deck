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
            <div style={{ color: '#fff' }}>
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
                <p style={{ fontSize: '2rem', margin: '0px' }}>
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
[cheerfully] Welcome everyone to this comprehensive presentation on text preprocessing techniques. [excited] Today we're going to explore 21 powerful methods that transform messy, raw text into clean, structured data that machine learning models can actually understand and learn from.

####  What Is Text Preprocessing?
[conversational] Think of text preprocessing like preparing ingredients before cooking. [storytelling] Just as you wash vegetables, peel potatoes, and chop onions before making a meal, we need to clean and prepare text data before feeding it to our AI models. Raw text from the internet, documents, or social media is full of inconsistencies: extra spaces, weird punctuation, different capitalization styles, and special characters. [confidently] Our job is to standardize this chaos into something uniform and useful.

####  The Journey We'll Take
[lecture] We're going to follow a logical journey from start to finish. We begin with raw, unprocessed text, like a tweet or a customer review. Then we'll apply various preprocessing techniques, like removing unnecessary words, breaking text into smaller pieces, and normalizing different forms of the same word. [pleased] Finally, we end up with clean, structured data that's ready for analysis or machine learning. [playfully] It's like turning a rough diamond into a polished gem.

####  Why This Matters
[enthusiastically] These 21 techniques aren't just theoretical concepts. [confidently] They're practical tools used every day by data scientists at companies like Google, Amazon, and Netflix to build chatbots, sentiment analyzers, spam filters, and recommendation systems. Mastering these techniques will give you the foundation to work with any text-based AI project.

[energetic] Let's dive into our table of contents and see what we'll cover today.`
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
                      <SvgIcon iconName="duo-scissors" sizeName="2x" style={{ margin: '0px 0px 4px' }} darkModeInvert={true} />
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
                      <SvgIcon iconName="duo-filter" sizeName="2x" style={{ margin: '0px 0px 4px' }} darkModeInvert={true} />
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
                      <SvgIcon iconName="duo-seedling" sizeName="2x" style={{ margin: '0px 0px 4px' }} darkModeInvert={true} />
                      Morphological Analysis (8-10)
                    </h4>
                    <ul style={{ fontSize: '1.2rem', color: '#2ecc71' }}>
                      <li>8. Stemming</li>
                      <li>9. Lemmatization</li>
                      <li>10. Part-of-Speech Tagging</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f39c12', marginTop: '15px', marginBottom: '12px' }}>
                      <SvgIcon iconName="duo-layer-group" sizeName="2x" style={{ margin: '0px 0px 4px' }} darkModeInvert={true} />
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
                      <SvgIcon iconName="duo-wand-magic-sparkles" sizeName="2x" style={{ margin: '0px 0px 4px' }} darkModeInvert={true} />
                      Error Correction (13-15)
                    </h4>
                    <ul style={{ fontSize: '1.2rem', color: '#e67e22' }}>
                      <li>13. Spell Correction</li>
                      <li>14. OCR Error Correction</li>
                      <li>15. Contraction Expansion</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '15px', marginBottom: '12px' }}>
                      <SvgIcon iconName="duo-broom" sizeName="2x" style={{ margin: '0px 0px 4px' }} darkModeInvert={true} />
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
                <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.1em', fontWeight: 'bold' }}>
                  21 techniques organized into 6 categories
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#14227b',
          notes: `### 2. Table of Contents
[lecture] Here's our roadmap for today. We have 21 techniques neatly organized into six logical categories. [conversational] This structure helps us understand how different techniques work together and when to use each one.

####  Basic Normalization: The Foundation
[confidently] We start with techniques one through five, the basic normalization methods. These are your bread and butter techniques that you'll use in almost every project. [lecture] Tokenization breaks text into words. Lowercasing makes everything consistent by converting text to lowercase. Unicode normalization handles strange characters from different languages. Whitespace normalization cleans up extra spaces. And punctuation normalization standardizes how we handle periods, commas, and other punctuation marks. [playfully] Think of these as washing your hands before cooking: they're fundamental hygiene steps.

####  Filtering and Morphological Analysis
[lecture] Next we have filtering techniques six and seven, where we remove unnecessary words that don't add meaning, like "the" and "is". Then techniques eight through ten cover morphological analysis, which is a fancy way of saying we break words down to their root forms. [conversational] This helps our models understand that "running," "ran," and "runs" are all variations of the same basic concept.

####  Feature Engineering and Error Correction
[lecture] Techniques eleven and twelve focus on feature engineering, where we create new patterns like word pairs to help models understand context better. Then techniques thirteen through fifteen handle error correction. [conversational] These fix spelling mistakes, clean up errors from scanned documents, and expand contractions like "don't" into "do not".

####  Final Cleaning and Structuring
[lecture] Finally, techniques sixteen through twenty-one handle the last cleaning steps. We normalize numbers, remove special characters, strip out boilerplate text that appears on every page, remove duplicate sentences, split text into proper sentences, and detect what language the text is written in. [pleased] These are the finishing touches that make our data ready for machine learning.

[enthusiastically] Now let's dive into our first technique: tokenization.`
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
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Choose granularity (word/subword/sentence)</li>
                      <li>Select tokenizer appropriate for language</li>
                      <li>Configure language-specific rules</li>
                      <li>Apply tokenization</li>
                      <li>Validate token counts</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#85342c',
          notes: `### 3. Tokenization - The Foundation of Text Processing

[enthusiastically] Welcome to our first technique: tokenization. [lecture] If text preprocessing were a construction project, tokenization would be laying the foundation. Everything else we build depends on this crucial first step.

#### What Is Tokenization?

[conversational] Tokenization (pronounced "TOH-ken-eye-ZAY-shun") is the process of breaking text into smaller pieces called tokens. [storytelling] Think of it like breaking a sentence into individual words, or even breaking words into smaller chunks. Imagine you have a sentence: "Hello, world!" Tokenization would split this into separate pieces: ["Hello", ",", "world", "!"].

[lecture] Why do we need this? Computers can't understand sentences as whole units. They need text broken down into discrete, manageable pieces. [playfully] It's like how you can't eat an entire pizza in one bite – you need to slice it into pieces first.

#### How Tokenization Works

[lecture] There are two main approaches to tokenization:

**Rule-Based Tokenization:** [conversational] This is the simple approach. We split text based on spaces and punctuation. For example, "I love cats" becomes ["I", "love", "cats"]. It's fast and straightforward, but [cautiously] can struggle with complex cases like "don't" or "New York".

**Model-Based Tokenization:** [lecture] Modern techniques like BPE (Byte Pair Encoding, pronounced "B-P-E") or WordPiece are smarter. They learn patterns from data and can split words into meaningful subwords. For example, "unhappiness" might become ["un", "happiness"]. [pleased] This helps AI models handle rare words by breaking them into common pieces they've seen before.

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

[confidently] The answer is simple: almost always! Tokenization is typically your very first preprocessing step. [lecture] Before you can analyze sentiment, train a chatbot, or build a search engine, you need to tokenize your text. It's the gateway that transforms raw text into something a computer can process.

#### The Process Step-by-Step

[lecture] 1. **Choose your granularity:** Do you want individual words, smaller subword pieces, or entire sentences as tokens? For most tasks, word-level tokenization is perfect.

2. **Select the right tokenizer:** Different languages need different tokenizers. [cautiously] Chinese doesn't use spaces, so you need specialized tokenizers. [conversational] For English, libraries like NLTK or spaCy work great.

3. **Configure rules:** Decide how to handle punctuation, contractions, and special cases. Should "don't" be one token or two?

4. **Apply and validate:** Run your tokenizer and check the results. Make sure token counts make sense and nothing weird happened.

[confidently] This foundational technique enables everything else we'll learn today. Let's look at its pros and cons next.`
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
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Enables downstream NLP tasks</li>
                    <li>Handles OOV with subwords</li>
                    <li>Standardizes input format</li>
                  </ul>
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
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Can lose spacing/punctuation nuance</li>
                    <li>Language/script-specific challenges</li>
                    <li>Subwords may lengthen sequences</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#85342c',
          notes: `### 4. Tokenization - Pros and Cons

[lecture] Now that we understand what tokenization is, let's talk about its strengths and weaknesses. [conversational] Every preprocessing technique involves tradeoffs, and understanding these helps you make better decisions for your specific project.

#### The Advantages: Why Tokenization Is Essential

[confidently] **Enables Downstream NLP Tasks:** This is the big one. Tokenization is the gateway that makes everything else possible. [lecture] Want to build a sentiment analyzer? You need tokens. Training a language model? You need tokens. Building a search engine? You need tokens. Without tokenization, your text is just one long string that computers can't meaningfully process. [storytelling] It's like trying to build a house without first preparing the building materials.

[pleased] **Handles Out-of-Vocabulary (OOV) Words with Subwords:** This is where modern tokenization really shines. [storytelling] Let's say your model was trained on common English words, but then it encounters "COVID-19" or "cryptocurrency" – words that didn't exist when the model was trained. Traditional word-level tokenization would mark these as "unknown." [delighted] But subword tokenization (like BPE or WordPiece) breaks them into pieces: ["crypto", "currency"] or ["COVID", "-", "19"]. The model can understand these pieces even if it's never seen the full word before. [playfully] It's like understanding a new compound word by recognizing its familiar parts.

[lecture] **Standardizes Input Format:** Tokenization creates a consistent, predictable format for your data. Whether you're processing tweets, news articles, or medical records, every piece of text becomes a sequence of tokens. [confidently] This uniformity is crucial for machine learning models, which need consistent input shapes to learn effectively.

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

[cautiously] **Can Lose Spacing and Punctuation Nuance:** Sometimes the spaces and punctuation carry important meaning. [conversational] Consider "New York" versus "New" and "York" as separate tokens – the meaning changes. Or think about ellipses... which might indicate trailing off or hesitation. [disappointed] Simple tokenization might strip away these subtle cues. This is especially problematic for tasks like emotion detection where punctuation patterns matter (think "really???" versus "really").

[concerned] **Language and Script-Specific Challenges:** Tokenization that works beautifully for English can completely fail for other languages. [lecture] Chinese, Japanese, and Korean don't use spaces between words, so you can't just split on whitespace. Thai and Khmer also write continuously without word boundaries. Arabic has complex morphology where prefixes and suffixes attach to root words. German has compound words like "Donaudampfschifffahrtsgesellschaftskapitän" (Danube steamship company captain) that need special handling. [sigh] Each language requires specialized tokenizers, and building multilingual systems becomes complex.

[cautiously] **Subwords May Lengthen Sequences:** While subword tokenization solves the OOV problem, it comes with a cost. [lecture] A single word might split into multiple subword tokens. "unbelievable" might become ["un", "believable"] or even ["un", "believ", "able"]. This makes your sequences longer, which means more computational cost and memory usage. [concerned] For models with maximum sequence lengths (like BERT's 512 token limit), this can force you to truncate or lose information.

#### The Bottom Line

[confidently] Despite its challenges, tokenization is non-negotiable. The pros far outweigh the cons, and it's the essential first step in almost every NLP pipeline. [conversational] The key is choosing the right tokenization strategy for your specific use case and being aware of the tradeoffs. [enthusiastically] Now let's move on to our next technique: lowercasing.`
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
    D --> E[Handles ß  to  ss]
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
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Decide lower vs casefold</li>
                      <li>Define exceptions (acronyms, proper nouns)</li>
                      <li>Apply</li>
                      <li>Spot-check impact</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#197769',
          notes: `### 5. Lowercasing - Simplifying Text Variance

[lecture] Lowercasing is one of the simplest yet most powerful preprocessing techniques. It's the art of making text consistent by converting everything to lowercase letters. [conversational] Let me explain why this seemingly simple step matters so much.

#### What Is Lowercasing and Why Does It Matter?

[storytelling] Imagine you're building a search engine. A user types "Python programming" but your database contains articles about "python Programming", "PYTHON programming", and "Python PROGRAMMING". [disappointed] Without lowercasing, your system would treat these as four different things! That's wasteful and confusing.

[pleased] Lowercasing solves this by treating "Python", "python", and "PYTHON" as the same word. It reduces your vocabulary size dramatically. [lecture] Instead of having separate entries for "The", "the", and "THE", you just have "the". This makes models more efficient and helps them generalize better.

[playfully] Think of it like organizing a library. Without lowercasing, you'd file "Cat", "cat", and "CAT" in different places. With lowercasing, they all go in the same spot, making everything easier to find and manage.

#### How Lowercasing Works: Two Approaches

[lecture] **Simple Lowercase (.lower() in Python):** This converts all ASCII letters to lowercase. "Hello World" becomes "hello world". It's fast, simple, and works great for English. [confidently] This is your go-to method for most projects.

**Unicode Casefolding (.casefold() in Python):** [lecture] This is the more sophisticated cousin. It handles international characters more aggressively. For example, the German letter "ß" (called "eszett" or "sharp S") becomes "ss" when casefolded. The Greek Σ (sigma) at the end of a word versus σ in the middle both become σ. [pleased] This ensures better matching across different Unicode representations.

\`\`\`mermaid
graph TD
    A["Input: HELLO, Hello, hello"] --> B[Lowercasing]
    B --> C["Output: hello, hello, hello"]
    C --> D[Vocabulary Size: 3  to  1]
    style A fill:#4fc3f7,stroke:#333,stroke-width:2px
    style B fill:#ffd700,stroke:#333,stroke-width:2px
    style C fill:#81c784,stroke:#333,stroke-width:2px
    style D fill:#e1bee7,stroke:#333,stroke-width:2px
\`\`\`

#### When Should You Use Lowercasing?

[confidently] **Perfect for:** Information retrieval (search engines), topic modeling, sentiment analysis on social media, spam detection. [conversational] These tasks don't care whether someone wrote "AMAZING" or "amazing" – the sentiment is the same.

[cautiously] **Be careful with:** Named entity recognition (NER), question answering systems, or any task where capitalization carries meaning. [storytelling] "Apple" (the company) versus "apple" (the fruit) is a distinction you might want to preserve. Similarly, "IT" (Information Technology) versus "it" (pronoun) are very different.

#### The Process Step-by-Step

[lecture] 1. **Choose your method:** For English-only projects, simple .lower() is fine. For multilingual projects, use .casefold() to handle international characters properly.

2. **Define exceptions:** Decide if you need to preserve certain acronyms (like "NASA" or "FBI") or proper nouns. You might create a whitelist of terms that should stay uppercase.

3. **Apply the transformation:** Run your lowercasing function across all your text data.

4. **Validate:** [conversational] Spot-check your results. Make sure you haven't lost important information. [cautiously] If you're working with a dataset about "US states" versus "us" (pronoun), you might need to rethink your approach.

[lecture] Remember, lowercasing is powerful but not universal. It's about finding the right balance between simplification and preserving meaning. Let's look at the pros and cons next.`
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
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Smaller vocab</li>
                    <li>Improved generalization</li>
                    <li>Simpler matching</li>
                  </ul>
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
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Loses case signals (named entities, sentence starts)</li>
                    <li>Can harm tasks relying on casing</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#197769',
          notes: `### 6. Lowercasing - Pros and Cons

[lecture] Let's examine the tradeoffs of lowercasing. [conversational] Like all preprocessing decisions, this one comes with clear benefits and potential drawbacks that you need to weigh for your specific use case.

#### The Advantages: Why Lowercase Everything?

[pleased] **Smaller Vocabulary:** This is the most immediate benefit. [lecture] Instead of treating "Cat", "cat", and "CAT" as three separate words, you have just one: "cat". In a large corpus, this can reduce your vocabulary from 100,000 unique terms to perhaps 70,000 or fewer. Why does this matter? [confidently] Smaller vocabularies mean less memory usage, faster training, and models that need fewer examples to learn patterns. [playfully] It's like decluttering your house – everything becomes easier to manage when you have less stuff.

[pleased] **Improved Generalization:** When your model learns patterns from "happy", those same patterns automatically apply to "Happy" and "HAPPY". [lecture] The model doesn't have to learn the same sentiment signals three times for three case variations. [delighted] This is especially valuable when you have limited training data. If you only have a few examples of people saying "EXCITED!!!" in all caps, your model can still understand excitement when someone writes "excited" in lowercase.

\`\`\`mermaid
graph LR
    A["Training: happy  to  positive"] --> B[Model Learns]
    B --> C["Predicts: Happy  to  positive"]
    B --> D["Predicts: HAPPY  to  positive"]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#81c784
    style D fill:#81c784
\`\`\`

[confidently] **Simpler Matching:** For search engines and information retrieval, lowercasing makes matching trivial. [conversational] When a user searches for "python", they'll find documents about "Python" the programming language and "python" the snake. No complex case-insensitive regex needed – just straightforward string matching.

#### The Drawbacks: What Do We Lose?

[concerned] **Loses Case Signals for Named Entities:** This is the biggest problem. [lecture] Consider these examples:
- "Turkey" (the country) vs "turkey" (the bird)
- "March" (the month) vs "march" (walking in formation)
- "polish" (to make shiny) vs "Polish" (from Poland)
- "US" (United States) vs "us" (pronoun)

[disappointed] Capitalization often distinguishes proper nouns from common words. [cautiously] If you're building a named entity recognition system or a question-answering bot, losing this signal can be devastating. [storytelling] Imagine a chatbot that can't tell whether someone is asking about "Apple" the company or buying apples at the grocery store.

[concerned] **Sentence Start Information Disappears:** Capital letters tell us where sentences begin. "The cat sat. Then it ran." becomes "the cat sat. then it ran." [sigh] You've lost the clear boundary marker. [lecture] For tasks like sentence segmentation or syntactic parsing, this information can be valuable.

[cautiously] **Can Harm Specific Tasks:** Any task that relies on capitalization patterns will suffer. [lecture] For example:
- Detecting shouting or emphasis ("I am SO ANGRY" loses its intensity)
- Identifying acronyms (FBI, CIA, NASA all become unrecognizable)
- Understanding code snippets (where CamelCase matters)
- Processing formal documents where titles and headings are capitalized

#### Making the Decision

[conversational] The key question is: Does your task depend on capitalization? [confidently] For sentiment analysis of tweets, topic modeling of news articles, or spam detection – lowercase away! The benefits far outweigh the costs. [cautiously] For named entity recognition, question answering, or text generation – think carefully. You might want to preserve case or at least tag important entities before lowercasing.

[lecture] A common strategy is to lowercase for some tasks and preserve case for others, or to create multiple versions of your features (one lowercased, one original) and let your model decide which is more useful. [enthusiastically] Let's move on to our next technique: Unicode normalization.`
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
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Pick form (NFC common, NFKC for compatibility)</li>
                      <li>Normalize strings</li>
                      <li>Test tricky cases (combining marks)</li>
                      <li>Log conversions</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#777719',
          notes: `### 7. Unicode Normalization - Taming Invisible Differences

[lecture] Unicode normalization is one of those behind-the-scenes techniques that prevents mysterious bugs. [confidently] It ensures that characters that look identical are actually treated as identical by computers. Let me explain this deceptively complex topic.

#### The Hidden Problem: Same Character, Different Bytes

[conversational] Here's a mind-bending fact: [storytelling] The character "é" (e with an acute accent) can be represented in two completely different ways in Unicode:
1. As a single precomposed character (U+00E9)
2. As TWO characters: regular "e" (U+0065) followed by a combining acute accent (U+0301)

[amused] To your eyes, these look absolutely identical: é and é. [disappointed] But to a computer, they're different byte sequences! [concerned] If someone searches for "café" spelled one way, they won't find "café" spelled the other way. This is a nightmare for search engines, deduplication, and text matching.

[lecture] This problem exists for hundreds of characters across dozens of languages: accented letters in French and Spanish, umlauts in German, diacritics in Vietnamese, and more.

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

[lecture] Unicode provides four standard normalization forms. [conversational] Don't worry, you'll mostly use just one or two:

[confidently] **NFC (Canonical Composition):** Pronounced "N-F-C". This converts characters to their composed (single character) form. "e" + "´" becomes "é". [pleased] This is the most common form and what you should use by default. It's compact and matches how most text appears naturally.

[lecture] **NFD (Canonical Decomposition):** Pronounced "N-F-D". This does the opposite – breaks composed characters into base character plus combining marks. "é" becomes "e" + "´". This is useful for certain linguistic analysis tasks where you want to analyze base characters and accents separately.

[lecture] **NFKC (Compatibility Composition):** Pronounced "N-F-K-C". This is more aggressive. It not only composes characters but also converts "compatible" characters to standard forms. [storytelling] Superscript "²" becomes regular "2", fancy ligature "ﬁ" becomes "fi". [cautiously] Use this when you want maximum normalization for search and matching, but be aware it can change appearance.

**NFKD (Compatibility Decomposition):** [conversational] Combines NFKC's aggressive conversions with NFD's decomposition. Rarely used in practice.

#### When to Use Unicode Normalization

[confidently] **Perfect for:** Any system that compares or matches text strings. [lecture] Search engines, deduplication pipelines, database lookups, cross-platform applications (Windows vs Mac vs Linux handle Unicode differently). [conversational] If you're accepting text from multiple sources – user input, scraped web pages, API responses – you need Unicode normalization.

[lecture] **Especially important for:** Applications handling non-English text with accents and diacritics. French, Spanish, German, Polish, Vietnamese, Arabic, and dozens of other languages all use combining characters.

#### The Process Step-by-Step

[confidently] 1. **Choose your form:** NFC is the safe default for 90% of use cases. [cautiously] Use NFKC if you need aggressive normalization for search/matching and don't care about preserving exact appearance.

[lecture] 2. **Apply normalization:** In Python, use \`unicodedata.normalize('NFC', text)\`. Most languages have similar functions.

3. **Test edge cases:** Try problematic characters like "é", "ñ", "ü", emoji with modifiers (skin tones), and combining marks.

4. **Log conversions:** [conversational] During initial deployment, log cases where normalization actually changed something. This helps you understand your data and catch unexpected issues.

[pleased] The beauty of Unicode normalization is that once you apply it, all those invisible differences disappear, and your text matching "just works." Let's look at the pros and cons next.`
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
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Stable comparisons</li>
                    <li>Fewer hidden duplicates</li>
                    <li>Safer tokenization</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons <MermaidPopover diagram={`graph LR
    A[NFKC Risk] --> B[Changed Appearance]
    A --> C[Lost Semantics]
    style A fill:#ffcdd2
    style B fill:#ffcdd2
    style C fill:#ffcdd2`} />
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>NFKC may alter appearance/semantics</li>
                    <li>Grapheme cluster edge cases</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#777719',
          notes: `### 8. Unicode Normalization - Pros and Cons

[lecture] Unicode normalization is a powerful tool, but like all preprocessing techniques, it comes with tradeoffs. Let's examine when it helps and when you need to be careful.

#### The Advantages: Why Normalize Unicode?

[pleased] **Stable Comparisons:** This is the primary benefit. [confidently] After normalization, "café" equals "café" equals "café", no matter how the accents were originally encoded. Your string comparisons become reliable and predictable. [disappointed] Without normalization, you'd have bizarre bugs where searches fail, duplicates aren't detected, and users get frustrated because "identical" strings don't match. [lecture] This is especially critical for dictionary lookups, database queries, and user authentication [storytelling] (imagine login failing because a user's name with an accent was encoded differently!).

[delighted] **Fewer Hidden Duplicates:** In a dataset without Unicode normalization, you might have the same word appearing dozens of times with imperceptibly different encodings. [disappointed] Each counts as a separate "unique" word, inflating your vocabulary size artificially. [storytelling] One company discovered their customer database had hundreds of duplicate entries because names with accents weren't normalized – "José Rodriguez" appeared under dozens of Unicode variants. [pleased] After normalization, these all collapsed into single entries, revealing the true scale of their data.

[confidently] **Safer Tokenization:** Tokenizers work more reliably when characters are in a consistent form. [cautiously] Some tokenizers might handle composed "é" differently than decomposed "e" + "´", leading to inconsistent behavior. [pleased] Normalizing first ensures your tokenizer sees consistent input and produces consistent output.

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

[cautiously] **NFKC May Alter Appearance or Semantics:** The "K" in NFKC stands for "compatibility," which means it makes aggressive transformations. [concerned] While this is great for matching, it can change meaning:
[lecture] - Mathematical symbols: "²" (superscript 2) becomes "2" (regular 2), losing the superscript formatting
- Special typography: "ﬁ" (ligature fi) becomes "fi" (two letters), which looks different
- Special characters: "Ⅲ" (Roman numeral three) becomes "III" (three capital i's)
- Full-width vs half-width: "Ａ" (full-width A used in Japanese text) becomes "A" (regular A)

[cautiously] If you're processing mathematical formulas, preserving original typography, or handling mixed-language text where formatting matters, NFKC might be too aggressive. [conversational] Use NFC instead for a gentler approach.

[concerned] **Grapheme Cluster Edge Cases:** Some complex scripts like Devanagari (used for Hindi), Tamil, or Arabic have complicated rules about how characters combine. [lecture] A "grapheme cluster" is what humans perceive as a single character, but it might be multiple Unicode codepoints. [cautiously] Normalization can interact in unexpected ways with these clusters. [storytelling] For example, emoji with skin tone modifiers (👨🏾 is actually two codepoints: person + skin tone) need careful handling.

[sigh] Additionally, some very rare or archaic characters might not have normalization rules defined, leading to inconsistent behavior.

#### Making the Right Choice

[confidently] For most English-heavy applications with occasional accented characters, NFC is perfect. It's safe, preserves appearance, and solves the duplication problem.

[pleased] For aggressive search and matching where appearance doesn't matter (like fuzzy search, spam detection, or deduplication), NFKC gives you more power.

[cautiously] For specialized applications with mathematical notation, mixed scripts, or typography requirements, test carefully and consider using NFC or even skipping normalization for certain fields.

[lecture] The key is understanding your data and your use case. [enthusiastically] Now let's move on to whitespace normalization.`
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
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Replace runs of whitespace with single space</li>
                      <li>Standardize newline to \n</li>
                      <li>Trim</li>
                      <li>Preserve intentional separators if needed</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#631710',
          notes: `### 9. Whitespace Normalization - Cleaning Invisible Chaos

[lecture] Whitespace normalization deals with one of the most annoying but common problems in text processing: inconsistent and excessive spacing. [playfully] It's the janitorial work of text preprocessing – not glamorous, but absolutely essential.

#### The Whitespace Problem

[conversational] Real-world text is messy. Consider these examples:
[lecture] - Web-scraped text: "The    quick     brown   fox" (random multiple spaces)
- OCR output: "Hello\t\t\tWorld" (tabs mixed with spaces)
- User input: "  my search query  " (leading and trailing spaces)
- Mixed line endings: "line1\r\nline2\nline3\r" (Windows vs Unix vs Mac line endings)

[disappointed] Without normalization, "Hello World" with one space is treated as different from "Hello  World" with two spaces. [concerned] Your tokenizer might create empty tokens from runs of spaces. Comparisons fail. Users get confused.

\`\`\`mermaid
graph LR
    A["  Hello    World  \\t\\n"] --> B[Whitespace Normalize]
    B --> C["Hello World"]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#81c784
\`\`\`

#### What Is Whitespace?

[lecture] Whitespace isn't just the space bar! It includes:
- Regular spaces (U+0020)
- Tabs (\\t)
- Newlines (\\n)
- Carriage returns (\\r)
- Non-breaking spaces (U+00A0, often from HTML)
- Various Unicode spaces (em space, en space, thin space, etc.)

[conversational] Different sources produce different whitespace characters. HTML uses &nbsp; (non-breaking space). Word processors insert special spaces. Different operating systems use different line endings (Windows: \\r\\n, Unix/Mac: \\n, old Mac: \\r).

#### How Whitespace Normalization Works

[lecture] The process has several steps:

**1. Collapse Multiple Spaces:** [conversational] Replace any sequence of whitespace characters with a single space. "Hello    World" becomes "Hello World". This includes replacing tabs and newlines with spaces if you're treating text as a single line.

[lecture] **2. Standardize Line Endings:** Convert all line endings (\\r\\n, \\r, \\n) to a single standard (usually \\n). [pleased] This prevents cross-platform headaches.

**3. Trim Leading and Trailing Whitespace:** Remove spaces, tabs, and newlines from the beginning and end of strings. "  query  " becomes "query".

**4. Handle Special Cases:** [conversational] Decide whether to preserve intentional formatting like paragraph breaks (double newlines) or indentation (for code or poetry).

#### When to Use Whitespace Normalization

[confidently] **Perfect for:** 
[lecture] - Before tokenization (cleans up boundaries between words)
- After OCR (optical character recognition produces messy spacing)
- Processing server logs (which have inconsistent formatting)
- Cleaning web-scraped content (HTML parsing often leaves weird spacing)
- Handling user input (users add random spaces)

[cautiously] **Be careful with:**
- Code (where indentation and spacing matter for syntax)
- Poetry or formatted text (where line breaks are meaningful)
- Tables (where spacing creates alignment)
- Markdown or structured formats (where spacing defines structure)

#### The Process Step-by-Step

[lecture] 1. **Collapse whitespace runs:** Use regex like \`\\s+\`  to  \` \` to replace any run of whitespace with a single space.

2. **Standardize newlines:** Replace \`\\r\\n\` and \`\\r\` with \`\\n\` for consistency.

3. **Trim:** Apply \`.strip()\` or similar to remove leading/trailing whitespace.

4. **Preserve intentional separators:** [conversational] If paragraph breaks matter, preserve double newlines or convert them to a special token before collapsing.

[pleased] This simple technique eliminates a huge class of bugs and inconsistencies. Your tokenizer will thank you! Let's look at the pros and cons.`
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
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Cleaner tokens</li>
                    <li>Consistent parsing</li>
                    <li>Fewer edge cases</li>
                  </ul>
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
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>May lose layout cues (tables, code)</li>
                    <li>Affects alignment-sensitive text</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#631710',
          notes: `### 10. Whitespace Normalization - Pros and Cons

[lecture] Whitespace normalization is simple but powerful. Let's examine the benefits and potential pitfalls of this essential cleaning step.

#### The Advantages: Why Normalize Whitespace?

[pleased] **Cleaner Tokens:** With normalized whitespace, your tokenizer works reliably. [confidently] "Hello World" always splits into exactly two tokens: "Hello" and "World". [disappointed] Without normalization, "Hello    World" (with extra spaces) might create empty tokens or inconsistent results depending on your tokenizer. [pleased] Cleaned whitespace means predictable, clean token boundaries every time.

[storytelling] Think about OCR (optical character recognition) output. Scanned documents often have weird spacing: "T h e   q u i c k" or "The  quick     brown". [delighted] Whitespace normalization fixes these artifacts, making the text usable for NLP tasks.

[confidently] **Consistent Parsing:** When all text uses the same whitespace conventions (single spaces, consistent newlines), your entire pipeline behaves predictably. [pleased] Pattern matching works. String comparisons work. Feature extraction works. [disappointed] Without normalization, you'd need to handle "Hello World", "Hello  World", "Hello\tWorld", and "Hello\n\nWorld" as separate cases – [sigh] a maintenance nightmare.

[pleased] **Fewer Edge Cases:** Trimming leading and trailing whitespace eliminates subtle bugs. [storytelling] Consider user input: "  search query  " versus "search query". They should be treated identically, but [concerned] without trimming, they hash differently, match differently, and create duplicate entries in logs or databases. [delighted] Normalization eliminates these gotchas.

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

[concerned] **May Lose Layout Cues for Tables and Code:** Here's where normalization can backfire. [cautiously] Consider ASCII art, formatted tables, or code:
\`\`\`
Name        Age    City
Alice       25     NYC
Bob         30     LA
\`\`\`

[disappointed] If you collapse all whitespace, this becomes "Name Age City Alice 25 NYC Bob 30 LA" – the alignment and structure are destroyed. The table becomes gibberish.

[conversational] Similarly, Python code relies on indentation for structure:
\`\`\`python
def hello():
    print("Hello")
\`\`\`

[concerned] Collapse the indentation and you've broken the code. It's no longer valid Python.

[cautiously] **Affects Alignment-Sensitive Text:** Poetry and song lyrics often use intentional spacing and line breaks for rhythm and emphasis:
\`\`\`
This    is    spaced    for    effect
Not              an              accident
\`\`\`

[disappointed] Normalizing this loses the artistic intent. [lecture] Similarly, screenplays, scripts, and formatted documents use precise spacing to convey meaning beyond the words themselves.

#### Making the Decision

[confidently] For most NLP tasks – sentiment analysis, topic modeling, information retrieval, spam detection – whitespace normalization is a clear win. The structure of the text doesn't matter; only the words do.

[cautiously] For specialized domains – code analysis, document layout analysis, poetry analysis, or any task where formatting matters – be selective. [conversational] You might normalize within sentences but preserve line breaks, or skip normalization entirely.

[lecture] A common approach is to normalize by default but add flags or special handling for formatted content. [conversational] Detect code blocks (marked by triple backticks in Markdown, for example) and skip normalization for those sections.

[confidently] The key is knowing your data and your task. For general text cleanup, whitespace normalization is essential hygiene. [enthusiastically] Now let's move to punctuation normalization.`
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
                <GSAPAnimated animation="slideInLeft" delay={0.2} duration={0.8}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal <MermaidPopover diagram={`graph LR
    A[""'--..."] --> B[Normalize]
    B --> C["Standard Punctuation"]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#81c784`} />
                    </h4>
                    <p>Reduce punctuation variants and noise.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph TD
    A[Smart Quotes] --> B[Map to Straight]
    C[Multiple Dashes] --> D[Unify Hyphens]
    E[Repeated!!!] --> F[Collapse]
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#4fc3f7
    style D fill:#81c784
    style E fill:#4fc3f7
    style F fill:#81c784`} />
                    </h4>
                    <p>Map curly to straight quotes; unify hyphen/dash; collapse repeated punctuation; optionally strip.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>Prior to tokenization/features; noisy UGC; cross-locale corpora.</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5} duration={0.8}>
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
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#226310',
          notes: `### 11. Punctuation Normalization - Taming the Chaos

[lecture] Punctuation normalization standardizes the wild variety of punctuation marks that appear in real-world text. [conversational] It's about making "curly" quotes, em-dashes, ellipses, and other variants behave consistently.

#### The Punctuation Problem

[conversational] Real text has countless punctuation variants:
[lecture] - Quotes: "curly", 'curly', "straight", 'straight', „German", «French»
- Dashes/hyphens: - (hyphen), – (en-dash), — (em-dash), ― (horizontal bar)
- Ellipses: ... (three periods), … (single ellipsis character)
- Repeated: "Really???", "No way!!!", "Wait........"

[disappointed] These variants look similar to humans but are completely different characters to computers. [concerned] "hello" with curly quotes doesn't match "hello" with straight quotes. Your vocabulary explodes with unnecessary duplicates.

\`\`\`mermaid
graph TD
    A["I said 'hello'"] --> N[Normalize]
    B["I said "hello""] --> N
    C["I said ''hello''"] --> N
    N --> D["I said 'hello'"]
    style A fill:#4fc3f7
    style B fill:#4fc3f7
    style C fill:#4fc3f7
    style N fill:#ffd700
    style D fill:#81c784
\`\`\`

#### How Punctuation Normalization Works

[lecture] **Map Quote Variants to Standard:** Convert all quote types (curly, angular, double/single) to a standard form. Usually straight single (') and double (") quotes. [pleased] This ensures "quoted" text matches regardless of the source.

**Unify Hyphens and Dashes:** [conversational] Convert all dash variants (en-dash, em-dash, minus sign) to a standard hyphen (-). "Self-esteem", "self–esteem", and "self—esteem" all become "self-esteem".

**Collapse Repeated Punctuation:** [lecture] "Amazing!!!" becomes "Amazing!" or "Amazing". [conversational] Repeated exclamation marks and question marks usually don't add meaning for most NLP tasks [cautiously] (though they might for emotion detection).

**Optionally Remove Entirely:** [lecture] Some pipelines strip all punctuation except sentence-ending periods. "Hello, world!" becomes "Hello world". [cautiously] This reduces noise but loses some information.

#### When to Use Punctuation Normalization

[confidently] **Perfect for:** User-generated content (social media, reviews, forums), cross-platform text (Mac uses different quotes than Windows), multilingual corpora (different languages have different quotation conventions), any noisy text source.

[cautiously] **Be careful with:** Code (where quotes and punctuation have syntax meaning), sentiment analysis if you want to preserve emphasis ("good" vs "good!!!"), named entities with punctuation ("Yahoo!" the company, "Jeopardy!" the show).

#### The Process

[lecture] 1. **Define mapping table:** Create a dictionary mapping variants to standard forms. Example: {'"': '"', '"': '"', ''': "'", ''': "'"}

2. **Apply substitutions:** Run through your text, replacing each variant with its standard form.

3. **Optionally collapse repeated:** Use regex to replace sequences like "!+" with single "!".

4. **Preserve meaningful punctuation:** [conversational] Keep punctuation that's part of names, abbreviations (Ph.D., U.S.A.), or critical to meaning.

Let's look at the tradeoffs next.`
        },
        {
          id: 12,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="rotateIn" delay={0.2} duration={1.0}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros <MermaidPopover diagram={`graph LR
    A[Normalized] --> B[Consistent Tokens]
    A --> C[Better Matching]
    A --> D[Clean Splits]
    style A fill:#81c784
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784`} />
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Fewer token variants</li>
                    <li>Better matching</li>
                    <li>Improved sentence splitting</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons <MermaidPopover diagram={`graph TD
    A[Risks] --> B[Language Issues]
    A --> C[Lost Emotion]
    style A fill:#ffcdd2
    style B fill:#ffcdd2
    style C fill:#ffcdd2`} />
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Language/script-specific</li>
                    <li>May remove emotive or semantic cues</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#226310',
          notes: `### 12. Punctuation Normalization - Pros and Cons

[lecture] Punctuation normalization is powerful for standardization, but it comes with tradeoffs depending on your use case.

#### The Advantages

[pleased] **Fewer Token Variants:** This is the primary benefit. [lecture] Instead of having "hello", "hello!", "hello!!", "hello!!!" as separate tokens, you have just one or two variants. Your vocabulary shrinks dramatically. [storytelling] Consider social media text where users love emphasis: "OMG!!!", "WOW!!!!!", "Amazing!!". [delighted] After normalization, these patterns become consistent, and your model doesn't waste capacity learning that different numbers of exclamation marks mean roughly the same thing.

[confidently] **Better Matching:** When you normalize punctuation, search and comparison work better. [conversational] A user searching for "don't" will find "don't", "don't", and "don't" (all different quote types). [disappointed] Without normalization, these would be treated as completely different strings. [pleased] This is crucial for information retrieval, duplicate detection, and any matching task.

[lecture] **Improved Sentence Splitting:** Sentence boundary detection algorithms often rely on periods, exclamation marks, and question marks. [conversational] When you have weird Unicode variants of these (like "¿" upside-down question mark at sentence start in Spanish, or "。" Japanese period), [pleased] normalization helps standardize them so your sentence splitter works consistently.

\`\`\`mermaid
graph LR
    A["Amazing!!! vs Amazing!!"] --> B[Normalize]
    B --> C["Amazing!"]
    C --> D[Single Token ✓]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#81c784
    style D fill:#81c784
\`\`\`

#### The Drawbacks

[cautiously] **Language and Script-Specific:** Different languages use different punctuation conventions. [lecture] Spanish uses inverted question/exclamation marks (¿¡). Arabic uses mirrored question marks (؟). Chinese uses different parentheses (（）) and periods (。). [concerned] If you normalize too aggressively, you might break language-specific conventions. [storytelling] For example, converting Arabic question marks to Western ones could confuse right-to-left text rendering.

[sigh] Additionally, some scripts don't use spaces at all and rely on punctuation as the only word boundaries. Aggressive punctuation stripping would destroy the text structure entirely.

[concerned] **May Remove Emotive or Semantic Cues:** Here's where it gets interesting. [lecture] Punctuation often carries emotional intensity or emphasis:
- "okay" (neutral) vs "okay..." (hesitant/disappointed)
- "Really" (question) vs "Really?" (surprised question) vs "Really?!" (shocked)
- "STOP" vs "STOP!" vs "STOP!!!" (escalating urgency)

[disappointed] For sentiment analysis or emotion detection, collapsing or removing these cues loses valuable signal. [conversational] The difference between "I love this movie" and "I love this movie!!!" is subtle but real – the second expresses more enthusiasm.

[storytelling] Similarly, some brands and products use punctuation as part of their identity: "Yahoo!", "Jeopardy!", "Eat Mor Chikin" (Chick-fil-A). [concerned] Stripping punctuation would make these harder to recognize as entities.

#### Making the Decision

[confidently] For traditional NLP tasks (topic modeling, document classification, machine translation), punctuation normalization is generally beneficial. The reduction in vocabulary size and improvement in matching outweigh the loss of subtle signals.

[cautiously] For fine-grained tasks (emotion detection, sarcasm detection, author profiling), consider preserving punctuation patterns or at least flagging them before normalization. [conversational] You might normalize quotes and dashes but preserve repeated exclamation marks as features.

[lecture] A hybrid approach works well: normalize quotes and dashes (which rarely carry meaning) but preserve question marks, exclamation marks, and ellipses (which often do carry meaning). [conversational] Test on your specific data to find the right balance. [enthusiastically] Now let's move to stopword removal.`
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
                  <GSAPAnimated animation="slideInLeft" delay={0.2} duration={0.8}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal <MermaidPopover diagram={`graph LR
    A[Raw Tokens] --> B{Filter}
    B --> C[Content Words]
    B --> D[Stopwords]
    style A fill:#4fc3f7
    style C fill:#81c784
    style D fill:#ffcdd2`} />
                    </h4>
                    <p>Remove very frequent function words that add little topical value.</p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInLeft" delay={0.4} duration={0.8}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph TD
    A[Token Stream] --> B[Load Stopword List]
    B --> C{Token in list?}
    C -->|Yes| D[Remove]
    C -->|No| E[Keep]
    style A fill:#4fc3f7
    style E fill:#81c784
    style D fill:#ffcdd2`} />
                    </h4>
                    <p>Filter tokens against a language-specific stopword list.</p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInLeft" delay={0.6} duration={0.8}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>Bag-of-words/TF-IDF features, IR, topic modeling, keyword extraction.</p>
                  </GSAPAnimated>
                </div>
                <div>
                  <GSAPAnimated animation="slideInRight" delay={0.3} duration={0.8}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Steps
                    </h4>
                  </GSAPAnimated>
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
          notes: `### 13. Stopword Removal

[cheerfully] Welcome to our discussion on stopword removal, one of the most fundamental and widely-used text preprocessing techniques in natural language processing. [lecture] Think of stopwords as the "filler words" of language—words like "the," "is," "at," "which," and "on" that appear constantly but often don't contribute much to the core meaning of a sentence.

#### What Are Stopwords?

[confidently] Stopwords are extremely common function words that appear with high frequency across documents but typically carry little semantic weight for tasks like information retrieval or topic modeling. [storytelling] For example, if you're trying to determine whether a document is about "machine learning," the words "machine" and "learning" are crucial, but words like "the," "is," "a," "to" add minimal value to that determination.

\`\`\`mermaid
graph LR
    A["the quick brown fox"] --> B[Stopword Filter]
    B --> C["quick brown fox"]
    style A fill:#4fc3f7
    style C fill:#81c784
    style B fill:#ffd700
\`\`\`

#### Why Remove Stopwords?

[lecture] There are several compelling reasons to remove stopwords. [pleased] First, they dramatically reduce dimensionality—in a typical English text corpus, stopwords can constitute 40-50% of all tokens! By removing them, you shrink your vocabulary size, which means faster training times and lower memory requirements for your models. [delighted] Second, removing stopwords can actually improve the signal-to-noise ratio for certain tasks. [conversational] In topic modeling, for instance, having fewer high-frequency but low-information words allows the meaningful content words to shine through more clearly.

#### How Stopword Removal Works

[lecture] The process is conceptually simple: maintain a list of stopwords for your target language (English, Spanish, French, etc.), then filter out any tokens that match entries in that list. [conversational] Libraries like NLTK, spaCy, and scikit-learn provide pre-built stopword lists for many languages. [lecture] The typical workflow looks like this:

1. **Select a stopword list**: Choose a pre-built list or curate your own based on your domain
2. **Consider domain-specific needs**: [cautiously] In sentiment analysis, words like "not," "but," and "very" are critical and should NOT be removed
3. **Apply the filter**: Iterate through your tokens and exclude matches
4. **Validate the impact**: [conversational] Always spot-check to ensure you haven't accidentally removed important terms

#### When to Use Stopword Removal

[confidently] Stopword removal shines in bag-of-words scenarios where word order doesn't matter and you're focused on content words. [pleased] It's excellent for:
[lecture] - TF-IDF vectorization
- Information retrieval systems
- Topic modeling (LDA, NMF)
- Keyword extraction
- Document clustering based on content

#### When NOT to Use It

[cautiously] However, be cautious! Don't remove stopwords when working with:
[lecture] - Modern transformer models (BERT, GPT) that learn from full context
- Sentiment analysis where negations matter ("not good" vs "good")
- Question answering systems
- Machine translation
- Any sequence-to-sequence task

#### Technical Considerations

[lecture] Different stopword lists can vary significantly in size. NLTK's English stopword list contains about 180 words, while some minimal lists might have only 30-50 core function words. [conversational] Your choice depends on your use case—aggressive removal for dimensionality reduction, conservative removal when meaning preservation is critical.

[cautiously] Remember: stopword removal is a lossy operation. Once you remove these words, you can't get them back. [confidently] Always keep your original text and make stopword removal a configurable step in your pipeline so you can experiment with different approaches.`
        },
        {
          id: 14,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="bounceIn" delay={0.2} duration={0.9}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros <MermaidPopover diagram={`graph TD
    A[Stopword Removal] --> B[Reduced Dimensions]
    A --> C[Faster Training]
    A --> D[Better Topic Signal]
    style A fill:#ffd700
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784`} />
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.15} duration={0.6}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Reduces dimensionality</li>
                    <li>Speeds training</li>
                    <li>Can improve topic signal</li>
                  </ul>
                </GSAPStaggerList>
                <GSAPAnimated animation="bounceIn" delay={0.9} duration={0.9}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons <MermaidPopover diagram={`graph TD
    A[Stopword Removal] --> B[Meaning Loss]
    A --> C[Breaks Sequences]
    A --> D[Domain Issues]
    style A fill:#ffd700
    style B fill:#ffcdd2
    style C fill:#ffcdd2
    style D fill:#ffcdd2`} />
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.15} duration={0.6}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Risk of meaning loss</li>
                    <li>Harms sequence/transformer setups</li>
                    <li>Domain sensitivity</li>
                  </ul>
                </GSAPStaggerList>
              </div>
            </div>
          ),
          backgroundColor: '#105163',
          notes: `### 14. Stopword Removal: Pros and Cons

[lecture] Now let's dive deeper into the tradeoffs of stopword removal. [conversational] Like most preprocessing techniques, it's not universally beneficial—you need to understand when it helps and when it hurts.

#### The Pros: Why Stopword Removal Works

[pleased] **1. Dramatic Dimensionality Reduction**

This is perhaps the biggest advantage. [lecture] In English text, common stopwords like "the," "is," "at," "which," "a," "an," "to," "in" can make up 40-50% of all tokens in a document. [delighted] When you're building a vocabulary for bag-of-words or TF-IDF features, removing these words cuts your feature space nearly in half. [conversational] For a corpus with 50,000 unique words, removing 500 stopwords might seem trivial, but those 500 words appear in nearly every document, dominating your feature counts.

[pleased] **2. Significant Speed Improvements**

Smaller vocabularies mean faster model training. [lecture] If you're using a sparse matrix representation for TF-IDF, fewer columns means less memory and faster matrix operations. [confidently] For algorithms like Naive Bayes, Logistic Regression, or SVM on text data, training time can be reduced by 30-40% just by removing stopwords. [storytelling] In production systems processing millions of documents, this translates to real cost savings.

[delighted] **3. Enhanced Topic Signal**

Here's where it gets interesting: [lecture] for unsupervised tasks like topic modeling with Latent Dirichlet Allocation (LDA), removing stopwords can dramatically improve interpretability. [disappointed] Imagine a topic where the top words are "the," "is," "of," "to," "and"—that's useless! [pleased] By removing stopwords, you surface the actual content-bearing words: "neural," "network," "training," "gradient," "optimization." The topics become much more coherent and meaningful.

\`\`\`mermaid
graph LR
    A[With Stopwords] --> B["Topic: the, of, is, neural, to"]
    C[Without Stopwords] --> D["Topic: neural, network, training, gradient"]
    style A fill:#ffcdd2
    style C fill:#81c784
    style B fill:#ffcdd2
    style D fill:#81c784
\`\`\`

#### The Cons: When Stopword Removal Backfires

[concerned] **1. Risk of Meaning Loss**

This is critical: [cautiously] stopwords aren't always meaningless! [lecture] Consider these examples:
- "not good" vs "good" (negation matters!)
- "very important" vs "important" (intensification matters!)
- "to be or not to be" becomes "be not be" (grammatical structure lost)

[disappointed] In sentiment analysis, removing "not" is catastrophic. The phrase "not satisfied" has the opposite meaning of "satisfied," but [sigh] with stopword removal, they become identical. [conversational] Modern sentiment analyzers often use custom stopword lists that explicitly preserve negations like "not," "no," "never," "neither."

[concerned] **2. Breaks Modern Deep Learning Approaches**

Here's a crucial point for contemporary NLP: [cautiously] transformer models like BERT, GPT, and RoBERTa do NOT benefit from stopword removal—in fact, it hurts them! [lecture] These models learn rich contextual representations where every word contributes to understanding. They've learned that "the" before a noun signals definiteness, that "is" indicates present tense, that "not" negates. [disappointed] Removing these words strips away crucial context.

[concerned] **3. Domain Sensitivity Problems**

Stopword lists are typically derived from general text corpora. [cautiously] But what's a stopword in general English might be meaningful in your domain. [lecture] For example:
- In medical text, "or" might refer to "operating room"
- In legal text, "will" is a crucial document type
- In recipe text, "to" appears in measurements ("add 2 to 3 cups")

[sigh] If you blindly apply a standard stopword list, you might accidentally remove domain-important terms.

#### Making the Right Choice

[lecture] The decision to use stopword removal should be task-driven:
[confidently] - **Use it for**: Classical ML on text (SVM, Naive Bayes), TF-IDF, topic modeling, keyword extraction, document clustering
[cautiously] - **Skip it for**: Neural sequence models, sentiment analysis (unless using custom lists), named entity recognition, machine translation, question answering

[conversational] A good rule of thumb: if your model treats text as an ordered sequence and learns from context, don't remove stopwords. If your model treats text as a bag of words, stopword removal will likely help.`
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
                  <GSAPAnimated animation="rotateIn" delay={0.2} duration={0.8}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal <MermaidPopover diagram={`graph LR
    A[All Tokens] --> B[Light Filter]
    B --> C[Keep Most Words]
    B --> D[Remove Only Generic]
    style A fill:#4fc3f7
    style C fill:#81c784
    style D fill:#ffcdd2
    style B fill:#ffd700`} />
                    </h4>
                    <p>Conservatively remove only the most generic function words while keeping nuance.</p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="rotateIn" delay={0.4} duration={0.8}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph TD
    A[Tokens] --> B{Check Minimal List}
    B -->|Generic| C[Remove]
    B -->|Important| D[Keep]
    D --> E[Preserve negations]
    D --> F[Preserve intensifiers]
    style A fill:#4fc3f7
    style D fill:#81c784
    style E fill:#e1bee7
    style F fill:#e1bee7`} />
                    </h4>
                    <p>Use a minimal curated list or importance scores (e.g., TF-IDF) to trim lightly.</p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="rotateIn" delay={0.6} duration={0.8}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>Sentiment, short texts, tasks sensitive to negation/modality.</p>
                  </GSAPAnimated>
                </div>
                <div>
                  <GSAPAnimated animation="slideInRight" delay={0.3} duration={0.8}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Steps
                    </h4>
                  </GSAPAnimated>
                  <GSAPStaggerList stagger={0.18} duration={0.7}>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Define light list</li>
                      <li>Whitelist negations/domain terms</li>
                      <li>Filter</li>
                      <li>Iterate with validation</li>
                    </ul>
                  </GSAPStaggerList>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#631061',
          notes: `### 15. Light Stopword Trimming

[lecture] Light stopword trimming represents a more nuanced, careful approach to stopword removal. [playfully] Think of it as "stopword removal lite"—you get some of the benefits of dimensionality reduction without the harsh downsides of aggressive removal.

#### The Middle Ground Philosophy

[conversational] Traditional stopword removal takes a sledgehammer approach: remove all words in a predefined list, which might contain 150-200 words. [confidently] Light stopword trimming is more like using a scalpel: you carefully remove only the most obviously meaningless words—perhaps just 20-50 ultra-generic function words like "the," "a," "an," "this," "that."

[lecture] The key insight is that not all stopwords are created equal. There's a spectrum from "definitely useless" to "sometimes important":
- **Always useless**: "the," "a," "an" (articles rarely carry meaning)
- **Usually useless**: "is," "was," "been" (auxiliaries are often redundant)
- **Sometimes critical**: "not," "never," "no" (negations are semantic goldmines)
- **Context-dependent**: "very," "much," "more" (intensifiers matter in sentiment)

\`\`\`mermaid
graph LR
    A[Full Stopword List] --> B[Aggressive: 150+ words]
    A --> C[Light: 20-50 words]
    B --> D[High Risk]
    C --> E[Balanced Approach]
    style B fill:#ffcdd2
    style C fill:#81c784
    style D fill:#ffcdd2
    style E fill:#81c784
\`\`\`

#### How Light Stopword Trimming Works

[lecture] There are two main approaches to implementing light stopword trimming:

**Approach 1: Curated Minimal List**
[conversational] Manually create a short list of truly generic words. A typical minimal English list might include:
[lecture] - Articles: "a," "an," "the"
- Common pronouns: "it," "this," "that"
- Basic prepositions: "of," "in," "for"
- Ultra-common verbs: "is," "was," "be"

[conversational] Notice what's NOT in this list: no negations ("not," "no"), no intensifiers ("very," "extremely"), no modals ("could," "should"), no conjunctions ("but," "although").

[lecture] **Approach 2: Statistical Filtering**
Use TF-IDF or document frequency to identify words that appear in almost every document but with very low TF-IDF scores. [confidently] These are the true "noise" words. You might set a rule like: "Remove words that appear in >95% of documents but have average TF-IDF < 0.01."

#### When to Use Light Stopword Trimming

[pleased] This technique shines in scenarios where aggressive stopword removal is too risky:

[confidently] **Sentiment Analysis**: [lecture] Phrases like "not good," "very bad," "not very happy" all contain potential stopwords, but [disappointed] removing them destroys the sentiment. [pleased] Light trimming removes "the" and "a" while preserving "not" and "very."

**Short Texts**: [conversational] In tweets, reviews, or messages, you might only have 10-20 tokens. [cautiously] Aggressive stopword removal could cut that in half, leaving very little signal. [pleased] Light trimming removes minimal redundancy while keeping most content.

[lecture] **Nuanced Tasks**: Question classification, intent detection, and sarcasm detection all rely on subtle linguistic cues. [conversational] Words like "but," "although," "really," and "just" carry important pragmatic meaning that shouldn't be discarded.

**Domain-Specific Analysis**: [cautiously] If you're working with specialized text (medical, legal, scientific), you want to be conservative about what you remove since domain terminology might overlap with common stopwords.

#### Implementation Strategy

[lecture] Here's a practical workflow:

1. **Start with a minimal list**: Begin with just articles and maybe 10-15 obvious function words
2. **Create a whitelist**: Explicitly protect negations, intensifiers, and domain terms
3. **Apply and evaluate**: Run your pipeline with light trimming and compare metrics
4. **Iterate**: [conversational] Gradually add words to your removal list if validation performance improves

[confidently] The key is validation-driven tuning. Don't guess—let your development set metrics guide your stopword list.

#### Technical Considerations

[lecture] Light stopword trimming requires more manual curation than full stopword removal, but [pleased] the effort pays off. [conversational] You can also create task-specific light stopword lists:
- Sentiment-safe list: removes only articles and ultra-generic prepositions
- Topic-modeling-focused list: slightly larger, removes more function words
- NER-safe list: preserves everything that might be part of entity names

[playfully] Pro tip: Version control your stopword lists! [conversational] As you refine them based on validation results, you want to track what worked and what didn't.`
        },
        {
          id: 16,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="flipCard" delay={0.2} duration={1.0}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros <MermaidPopover diagram={`graph TD
    A[Light Trimming] --> B[Preserves Meaning]
    A --> C[Reduces Noise]
    A --> D[Safe for Sentiment]
    style A fill:#ffd700
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784`} />
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.2} duration={0.7}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Preserves meaning better than full removal</li>
                    <li>Balanced noise reduction</li>
                  </ul>
                </GSAPStaggerList>
                <GSAPAnimated animation="flipCard" delay={0.9} duration={1.0}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons <MermaidPopover diagram={`graph TD
    A[Light Trimming] --> B[Needs Tuning]
    A --> C[Some Noise Remains]
    A --> D[Short Text Risk]
    style A fill:#ffd700
    style B fill:#ffcdd2
    style C fill:#ffcdd2
    style D fill:#ffcdd2`} />
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.2} duration={0.7}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Requires tuning</li>
                    <li>Residual noise may remain</li>
                    <li>Still risky for very short texts</li>
                  </ul>
                </GSAPStaggerList>
              </div>
            </div>
          ),
          backgroundColor: '#631061',
          notes: `### 16. Light Stopword Trimming: Pros and Cons

[lecture] Let's examine the tradeoffs of light stopword trimming and understand when this middle-ground approach is the right choice for your NLP pipeline.

#### The Pros: Why Light Trimming Works Well

[pleased] **1. Preserves Meaning Better Than Full Removal**

[confidently] This is the headline benefit. By keeping negations, intensifiers, and modals, you maintain crucial semantic information. [conversational] Consider these examples:

- "The movie was not very good"  to  Light trim  to  "movie not very good" [pleased] (meaning preserved)
- "The movie was not very good"  to  Aggressive trim  to  "movie good" [disappointed] (meaning reversed!)

[lecture] Light trimming keeps the sentiment-critical words "not" and "very" while removing the semantically empty "the" and "was." [delighted] For sentiment analysis, this can be the difference between 60% accuracy and 85% accuracy.

**2. Balanced Noise Reduction**

[conversational] You still get dimensionality benefits, just more modest ones. [lecture] Instead of cutting vocabulary by 40-50%, you might cut it by 10-15%. But here's the key: [confidently] that 10-15% is the MOST noisy, least informative portion. You're removing the words that appear in literally every document ("the," "a," "an") while keeping words that provide more signal.

[storytelling] Think of it like filtering water: aggressive stopword removal is like filtering out everything except large rocks, while light trimming is like filtering out only large debris while keeping minerals and nutrients. [pleased] You still get cleaner water, but without stripping out all the good stuff.

\`\`\`mermaid
graph LR
    A[Vocabulary: 10000 words] --> B[Aggressive: -4000 words]
    A --> C[Light: -1000 words]
    B --> D[Risk: Lost meaning]
    C --> E[Safe: Meaning preserved]
    style B fill:#ffcdd2
    style C fill:#81c784
    style D fill:#ffcdd2
    style E fill:#81c784
\`\`\`

**3. Safer for Nuanced Tasks**

[confidently] Light trimming gives you a safety margin for tasks where linguistic nuance matters. [lecture] In sarcasm detection, for example, words like "really," "just," and "oh" are critical discourse markers. In question classification, words like "can," "would," "should" distinguish different question types. [pleased] Light trimming is unlikely to remove these mid-frequency function words, preserving the subtle signals your model needs.

#### The Cons: Tradeoffs and Limitations

[cautiously] **1. Requires Careful Tuning**

[conversational] Unlike aggressive stopword removal where you just load a pre-built list, light trimming demands thoughtful curation. [lecture] You need to:
- Define what counts as "minimal" for your use case
- Create and maintain domain-specific whitelists
- Validate each addition to your stopword list
- Potentially maintain multiple light lists for different tasks

[sigh] This is extra work. [conversational] For quick prototyping or when working with well-understood, standard tasks, this overhead might not be worth it—you might prefer the simplicity of either full removal or no removal at all.

**2. Residual Noise May Remain**

[cautiously] Since you're only removing 10-15% of vocabulary, you still have plenty of high-frequency, low-information words cluttering your feature space. [lecture] Words like "be," "have," "do," "which," "these" appear constantly but often add little semantic value. [disappointed] If dimensionality reduction is your primary goal, light trimming might not cut deep enough to give you the speed and memory benefits you need.

[conversational] For very large corpora (millions of documents), the difference between 50,000 features and 45,000 features is negligible. You might need to be more aggressive to see real performance gains.

**3. Still Risky for Very Short Texts**

[concerned] Even light trimming can be problematic when you're working with extremely short texts. [storytelling] Consider a 5-word tweet: "The product is not good." Light trimming might reduce this to 4 words: "product is not good." You've removed 20% of the text! [cautiously] For texts with fewer than 15-20 words, even removing articles can noticeably impact the information density.

[conversational] In extreme cases (hashtags, search queries, chat messages), you might want to skip stopword removal entirely, regardless of how light your list is.

#### Decision Framework

[lecture] Here's how to decide between full removal, light trimming, and no removal:

**Choose Light Trimming When:**
- Working with sentiment, emotion, or opinion analysis
- Processing short-to-medium texts (reviews, tweets, comments)
- Your model is sensitive to negation and intensification
- You want some dimensionality reduction without high risk

**Choose Aggressive Removal When:**
- Using bag-of-words or TF-IDF with classical ML
- Dimensionality and speed are critical concerns
- Working with topic modeling (LDA, NMF)
- Your corpus is large and performance is a bottleneck

**Choose No Removal When:**
- Using transformer models (BERT, GPT, RoBERTa)
- Working with sequence-to-sequence tasks
- Texts are already very short (< 10 words)
- Order and context are paramount

[confidently] The bottom line: light stopword trimming is the "Goldilocks" approach—not too aggressive, not too conservative, but just right for tasks that need both efficiency and meaning preservation.`
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
                  <GSAPAnimated animation="scaleIn" delay={0.2} duration={0.9}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal <MermaidPopover diagram={`graph LR
    A[running] --> B[run]
    C[runs] --> B
    D[runner] --> B
    E[ran] --> B
    style A fill:#4fc3f7
    style C fill:#4fc3f7
    style D fill:#4fc3f7
    style E fill:#4fc3f7
    style B fill:#81c784`} />
                    </h4>
                    <p>Reduce inflected words to stems to merge variants.</p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="scaleIn" delay={0.4} duration={0.9}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph TD
    A[Word] --> B{Apply Rules}
    B --> C[Strip -ing]
    B --> D[Strip -ed]
    B --> E[Strip -s]
    C --> F[Stem]
    D --> F
    E --> F
    style A fill:#4fc3f7
    style F fill:#81c784
    style B fill:#ffd700`} />
                    </h4>
                    <p>Heuristic algorithms (Porter, Snowball, Lancaster) strip suffixes.</p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="scaleIn" delay={0.6} duration={0.9}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>IR, topic modeling, when lexical precision is not critical.</p>
                  </GSAPAnimated>
                </div>
                <div>
                  <GSAPAnimated animation="slideInRight" delay={0.3} duration={0.8}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Steps
                    </h4>
                  </GSAPAnimated>
                  <GSAPStaggerList stagger={0.2} duration={0.6}>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Choose language stemmer</li>
                      <li>Apply</li>
                      <li>Sample-check for over/under-stemming</li>
                      <li>Adjust algorithm if available</li>
                    </ul>
                  </GSAPStaggerList>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#101063',
          notes: `### 17. Stemming

[lecture] Stemming is one of the oldest and most widely-used text normalization techniques in NLP. [conversational] It's all about reducing words to their root form—or at least an approximation of it—so that different inflections of the same word are treated as equivalent.

#### What Is Stemming?

[lecture] Stemming is the process of removing affixes (prefixes and suffixes) from words to produce a base form called a "stem." [confidently] The goal is to merge grammatical variants that share the same core meaning. [conversational] For example:
- "running," "runs," "ran"  to  "run"
- "happier," "happiest," "happiness"  to  "happi"
- "organization," "organizational," "organize"  to  "organ"

[amused] Notice something in those examples? The stems aren't always real words! [conversational] "Happi" and "organ" aren't valid English words, but that's okay—stemming is about creating consistent representations, not linguistically correct ones.

\`\`\`mermaid
graph TD
    A[connecting] --> E[connect]
    B[connected] --> E
    C[connection] --> E
    D[connects] --> E
    style A fill:#4fc3f7
    style B fill:#4fc3f7
    style C fill:#4fc3f7
    style D fill:#4fc3f7
    style E fill:#81c784
\`\`\`

#### How Stemming Works

[lecture] Stemming algorithms are rule-based and heuristic. [conversational] They don't understand language; they just apply a series of suffix-stripping rules. The most popular stemming algorithms are:

[confidently] **Porter Stemmer (1980)**: The classic algorithm with about 60 rules applied in phases. It's conservative and produces readable stems. [conversational] Example: "ponies"  to  "poni", "universities"  to  "univers"

[pleased] **Snowball Stemmer**: An improved version of Porter, with better handling of English and support for many other languages (French, German, Spanish, etc.). [confidently] It's the default choice for most modern applications.

[cautiously] **Lancaster Stemmer**: A more aggressive algorithm that strips more aggressively. [disappointed] It produces shorter stems but risks over-stemming (conflating unrelated words). [conversational] Example: "maximum"  to  "maxim", "presumably"  to  "presum"

[lecture] The algorithm works in stages:
1. **Remove plurals**: "cats"  to  "cat", "ponies"  to  "poni"
2. **Handle past tense**: "walked"  to  "walk", "running"  to  "run"
3. **Deal with derivational suffixes**: "happiness"  to  "happi", "organization"  to  "organ"

#### When to Use Stemming

[confidently] Stemming is most effective in information retrieval and document clustering scenarios:

[pleased] **Information Retrieval**: If a user searches for "running shoes," you want to also match documents containing "run," "runs," "ran," or "runner shoes." [lecture] Stemming ensures that morphological variants don't fragment your search results.

**Topic Modeling**: In LDA or other topic models, you want "organize," "organization," and "organized" to be counted as the same concept rather than splitting them into separate features.

**Text Classification**: For bag-of-words models with large vocabularies, stemming reduces dimensionality by merging related forms, which can improve generalization.

**Keyword Extraction**: When identifying important terms in a document, stemming prevents keyword lists from being cluttered with multiple forms of the same concept.

#### Pronunciation Guide

[conversational] - **Stemming**: STEM-ing (like the stem of a plant)
- **Porter**: POR-ter (named after Martin Porter)
- **Lemmatization**: lem-uh-tuh-ZAY-shun (we'll cover this next—it's different!)

#### Technical Considerations

[confidently] Stemming is fast and simple—that's its biggest advantage. [lecture] It requires no linguistic resources, no dictionaries, no part-of-speech tagging. It's deterministic and reproducible. However, it has limitations:

[cautiously] **Over-stemming**: Conflating words with different meanings. [disappointed] Example: "university" and "universal" both stem to "univers" but have different meanings.

**Under-stemming**: Failing to merge related words. [conversational] Example: "alumnus," "alumni," "alumna" might not all stem to the same form.

**Language-specific**: Each language needs its own stemmer. [concerned] Applying an English stemmer to Spanish text will fail spectacularly.

**Non-word stems**: The output is often not a real word, which makes debugging and interpretation harder.

[pleased] Despite these limitations, stemming has been used successfully in countless NLP applications for decades. [conversational] It's simple, fast, and surprisingly effective for many tasks where perfect linguistic correctness isn't required.

#### Practical Tips

[lecture] Always inspect a sample of your stemmed output! [conversational] Look for cases where stemming is doing something unexpected. Some common issues:
- Proper nouns getting stemmed (you might want to protect these)
- Domain-specific terms being over-stemmed
- Morphologically rich languages suffering more than English

[conversational] For modern deep learning, stemming is less commonly used—transformers can learn morphological relationships on their own. [confidently] But for classical ML and information retrieval, stemming remains a valuable preprocessing step.`
        },
        {
          id: 18,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInTop" delay={0.2} duration={0.8}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros <MermaidPopover diagram={`graph LR
    A[Stemming] --> B[Smaller Vocabulary]
    A --> C[Handles Inflections]
    style A fill:#ffd700
    style B fill:#81c784
    style C fill:#81c784`} />
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.18} duration={0.6}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Cuts dimensionality</li>
                    <li>Robust to inflectional variation</li>
                  </ul>
                </GSAPStaggerList>
                <GSAPAnimated animation="slideInBottom" delay={0.8} duration={0.8}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons <MermaidPopover diagram={`graph TD
    A[Stemming] --> B[Non-words: happi]
    A --> C[Over-stemming: univers]
    A --> D[Under-stemming: alumni]
    style A fill:#ffd700
    style B fill:#ffcdd2
    style C fill:#ffcdd2
    style D fill:#ffcdd2`} />
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.18} duration={0.6}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Produces non-words</li>
                    <li>May conflate unrelated terms</li>
                    <li>Language-dependent rules</li>
                  </ul>
                </GSAPStaggerList>
              </div>
            </div>
          ),
          backgroundColor: '#101063',
          notes: `### 18. Stemming: Pros and Cons

[lecture] Let's dig into the tradeoffs of stemming. [conversational] Like many preprocessing techniques, stemming is neither universally good nor universally bad—it depends entirely on your task and priorities.

#### The Pros: Why Stemming Is Still Widely Used

[pleased] **1. Dramatic Dimensionality Reduction**

[confidently] Stemming can cut vocabulary size by 20-40% in inflection-rich languages like English, and even more in morphologically complex languages like Finnish or Turkish. [lecture] Consider a corpus where you have:
- "organize" (50 occurrences)
- "organizes" (30 occurrences)
- "organized" (80 occurrences)
- "organizing" (40 occurrences)
- "organization" (100 occurrences)

[delighted] Without stemming, these are 5 separate features. With stemming, they all become "organ" with 300 total occurrences. [pleased] This consolidation reduces sparsity and creates stronger statistical signals.

[lecture] For a realistic corpus with 50,000 unique words, stemming might reduce it to 35,000 unique stems. That's 15,000 fewer features to store, process, and model. [confidently] In a TF-IDF matrix for 100,000 documents, that's 1.5 billion fewer cells in your sparse matrix!

**2. Robust to Inflectional Variation**

[pleased] Stemming makes your system more forgiving of grammatical variation. [confidently] This is especially valuable in:

[lecture] **Search engines**: Users don't want to worry about singular vs. plural. Searching "books" should match "book," searching "running" should match "run."

**Document matching**: If one document says "companies organized" and another says "company organization," stemming helps recognize these as discussing the same concept.

**Cross-document consistency**: Different authors use different word forms. Stemming normalizes these variations, making patterns more apparent.

\`\`\`mermaid
graph TD
    A[Query: running shoes] --> B[Stem: run shoe]
    C[Doc 1: runs smoothly] --> D[Stem: run smooth]
    E[Doc 2: shoe runner] --> F[Stem: shoe run]
    B --> G[Match!]
    D --> G
    F --> G
    style G fill:#81c784
\`\`\`

**3. Speed and Simplicity**

[delighted] Stemming is blazingly fast. [lecture] It's pure algorithmic rule application with no lookups, no models, no external resources. You can stem millions of words per second on a laptop. [confidently] This makes it ideal for real-time systems, large-scale batch processing, and resource-constrained environments.

#### The Cons: Where Stemming Falls Short

[cautiously] **1. Produces Non-Words That Hurt Interpretability**

[disappointed] When you inspect your processed data, you see stems like "happi," "univers," "organ" (from "organization"), "beauti" (from "beautiful"). [concerned] This makes debugging harder and can confuse stakeholders looking at your results.

[storytelling] Imagine showing a topic model where the top words are: "comput," "algorith," "oper," "programm." [conversational] A domain expert might struggle to interpret these mangled stems compared to proper words like "computer," "algorithm," "operation," "programming."

**2. Over-Stemming: Conflating Unrelated Words**

[concerned] This is the most serious problem. [disappointed] Over-stemming occurs when the algorithm strips too aggressively, merging words with different meanings:

- "university" and "universal"  to  both become "univers"
- "stock" and "stocks" and "stockings"  to  all become "stock"
- "police" and "policy"  to  both become "polic" (in Lancaster stemmer)

[disappointed] These false conflations introduce noise and can degrade model performance. [concerned] In a sentiment classifier, conflating "organization" (neutral) with "organ" (which might appear in medical contexts) could create confusing signals.

**3. Under-Stemming: Missing Related Words**

[cautiously] Sometimes stemming isn't aggressive enough, failing to merge words that should be equivalent:

- "best" and "good" stay separate (irregular comparative)
- "alumni," "alumnus," "alumna" remain distinct
- "feet" and "foot" aren't merged (irregular plural)

[lecture] These morphological irregularities are common in English and other languages. [sigh] Rule-based stemming can't handle them without extensive exception lists.

**4. Language-Dependent Rules Create Maintenance Burden**

[concerned] Each language needs its own stemmer. [lecture] If you're building a multilingual system, you need:
- English: Porter/Snowball
- Spanish: Spanish Snowball
- French: French Snowball
- Arabic: Arabic-specific stemmer
- And so on...

[sigh] Each stemmer has its own quirks and failure modes. [conversational] You can't just "apply stemming"—you need language detection first, then the appropriate stemmer for each language.

#### Real-World Decision Making

[confidently] **Use Stemming When:**
- Building information retrieval systems (search engines, document matching)
- Vocabulary size is a serious concern (memory, speed constraints)
- Using classical ML with sparse features (Naive Bayes, SVM, logistic regression)
- Perfect linguistic correctness isn't required
- Working with morphologically rich languages

[cautiously] **Avoid Stemming When:**
- Using neural networks or transformers (they learn morphology automatically)
- Interpretability is critical (stakeholders need to understand output)
- Working with short texts where over-stemming can cause significant information loss
- Your task is sensitive to semantic precision (named entity recognition, question answering)

[conversational] **Consider Lemmatization Instead When:**
- You need real words in your output
- Accuracy matters more than speed
- You have access to language models and computational resources

[confidently] The bottom line: stemming is a fast, simple, effective technique for reducing vocabulary and normalizing inflectional variants, but it trades linguistic correctness for speed and simplicity. [conversational] For many applications, that's an excellent tradeoff. For others, lemmatization or no normalization might be better choices.`
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
                  <GSAPAnimated animation="fadeIn" delay={0.2} duration={0.9}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal <MermaidPopover diagram={`graph LR
    A[better] --> B[good]
    C[running] --> D[run]
    E[was] --> F[be]
    G[feet] --> H[foot]
    style A fill:#4fc3f7
    style C fill:#4fc3f7
    style E fill:#4fc3f7
    style G fill:#4fc3f7
    style B fill:#81c784
    style D fill:#81c784
    style F fill:#81c784
    style H fill:#81c784`} />
                    </h4>
                    <p>Map tokens to dictionary base forms (lemmas).</p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="fadeIn" delay={0.4} duration={0.9}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph TD
    A[Word + POS] --> B[Morphological Analysis]
    B --> C[Dictionary Lookup]
    C --> D[Lemma]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#e1bee7
    style D fill:#81c784`} />
                    </h4>
                    <p>Morphological analysis using lexicons and POS/context.</p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="fadeIn" delay={0.6} duration={0.9}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>Need precise base forms; linguistic analysis; better semantic grouping.</p>
                  </GSAPAnimated>
                </div>
                <div>
                  <GSAPAnimated animation="slideInRight" delay={0.3} duration={0.8}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Steps
                    </h4>
                  </GSAPAnimated>
                  <GSAPStaggerList stagger={0.16} duration={0.6}>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Tokenize</li>
                      <li>POS tag</li>
                      <li>Lemmatize with language model</li>
                      <li>Handle OOV/proper nouns separately</li>
                      <li>Validate</li>
                    </ul>
                  </GSAPStaggerList>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#10632c',
          notes: `### 19. Lemmatization

[lecture] Lemmatization is the sophisticated cousin of stemming—it reduces words to their base forms, but unlike stemming, it produces actual dictionary words and respects linguistic structure. [pleased] Let's explore why lemmatization is often worth the extra computational cost.

#### What Is Lemmatization?

[conversational] Lemmatization (pronounced "lem-uh-tuh-ZAY-shun") transforms words to their canonical dictionary form, called a "lemma" (pronounced "LEM-uh"). [lecture] Unlike stemming which uses crude suffix-stripping rules, lemmatization performs proper morphological analysis using dictionaries and grammatical context.

[pleased] Examples of lemmatization:
- "running," "runs," "ran"  to  "run" (infinitive form)
- "better," "best"  to  "good" (base adjective)
- "am," "is," "are," "was," "were," "been"  to  "be" (base verb)
- "feet"  to  "foot" (singular noun)
- "cacti"  to  "cactus" (singular form)

[delighted] Notice that these are all real, valid English words—no "happi" or "univers" nonsense!

\`\`\`mermaid
graph TD
    A["Word: better"] --> B[POS: Adjective]
    B --> C[Morphological Analysis]
    C --> D["Dictionary: good"]
    D --> E["Lemma: good"]
    style A fill:#4fc3f7
    style E fill:#81c784
    style C fill:#ffd700
\`\`\`

#### How Lemmatization Works

[lecture] Lemmatization is a two-stage process that requires linguistic knowledge:

[confidently] **Stage 1: Part-of-Speech (POS) Tagging**
[conversational] The same word can have different lemmas depending on its grammatical role:
- "meeting" as a noun  to  "meeting" (the lemma is the same)
- "meeting" as a verb  to  "meet" (reduce to infinitive)

[lecture] So first, you need to determine: Is this word a noun, verb, adjective, or adverb? [conversational] This requires POS tagging, which we'll discuss in detail in a later slide.

**Stage 2: Morphological Analysis and Dictionary Lookup**
[lecture] Using the word and its POS tag, lemmatization:
1. Consults a morphological lexicon (dictionary of word forms)
2. Applies language-specific transformation rules
3. Returns the canonical dictionary entry

[pleased] Modern lemmatizers like spaCy's use trained models that combine rule-based morphology with statistical learning. [confidently] They've been trained on large annotated corpora to handle irregular forms, exceptions, and ambiguous cases.

#### Popular Lemmatization Tools

[lecture] **WordNet Lemmatizer (NLTK)**: Uses the WordNet lexical database. [conversational] Fast but requires explicit POS tags and sometimes produces unexpected results for words not in WordNet.

[confidently] **spaCy Lemmatizer**: State-of-the-art lemmatization integrated with POS tagging. [pleased] Handles context well and supports many languages. This is the gold standard for modern NLP pipelines.

**Stanford CoreNLP**: Excellent accuracy, especially for English. Includes lemmatization as part of a full linguistic annotation pipeline.

#### When to Use Lemmatization

[pleased] Lemmatization shines when linguistic accuracy matters:

**Linguistic Analysis**: If you're studying language patterns, grammatical structures, or conducting corpus linguistics research, you need real words, not stems.

[confidently] **Semantic Tasks**: When building semantic similarity systems, knowledge graphs, or ontologies, accurate lemmas help create better concept mappings. [storytelling] "Good" and "better" are semantically related, and lemmatization captures that relationship correctly.

**Feature Engineering for ML**: For tasks like text classification where interpretability matters, having features named "run," "good," "organize" is much clearer than "run," "good," "organ."

[pleased] **Preprocessing for Word Embeddings**: If you're training Word2Vec or GloVe, lemmatization can improve the quality of embeddings by consolidating inflectional variants without introducing non-words.

**Search and Information Retrieval**: Like stemming, lemmatization helps match queries to documents, but with better precision because it doesn't over-conflate unrelated words.

#### Technical Workflow

[conversational] Here's a typical lemmatization pipeline:

\`\`\`python
import spacy

# Load language model with lemmatizer
nlp = spacy.load("en_core_web_sm")

# Process text
doc = nlp("The cats were running quickly")

# Extract lemmas
lemmas = [token.lemma_ for token in doc]
# Result: ["the", "cat", "be", "run", "quickly"]
\`\`\`

[pleased] Notice how:
- "cats"  to  "cat" (plural to singular)
- "were"  to  "be" (past tense to infinitive)
- "running"  to  "run" (progressive to base form)

#### Lemmatization vs. Stemming: The Key Differences

[lecture] | Aspect | Stemming | Lemmatization |
|--------|----------|---------------|
| Output | Stems (may be non-words) | Lemmas (dictionary words) |
| Method | Rule-based suffix stripping | Morphological analysis + dictionary |
| Speed | Very fast | Slower (needs POS tagging) |
| Accuracy | Can over/under-stem | More accurate |
| Resources | None needed | Needs lexicon and models |
| Handles irregulars | No | Yes |

#### Handling Special Cases

[cautiously] **Out-of-Vocabulary (OOV) Words**: New words, slang, typos, and domain-specific jargon might not be in the lemmatizer's dictionary. [conversational] Most lemmatizers will return the original word unchanged.

**Proper Nouns**: Names, places, brands should typically NOT be lemmatized. [pleased] Most modern lemmatizers recognize proper nouns via POS tagging and leave them alone.

**Domain-Specific Terms**: Medical, legal, and scientific texts contain specialized morphology. [cautiously] You might need domain-adapted lemmatizers or custom rules.

#### Performance Considerations

[concerned] Lemmatization is significantly slower than stemming because it requires:
1. POS tagging (neural network inference)
2. Dictionary lookups
3. Morphological rule application

[storytelling] For 1 million words, stemming might take 1-2 seconds, while lemmatization might take 30-60 seconds with spaCy. [concerned] If you're processing billions of documents, this difference matters!

[confidently] However, the accuracy improvement is often worth it. [pleased] And with modern hardware and efficient implementations, lemmatization is fast enough for most real-world applications.`
        },
        {
          id: 20,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="bounceIn" delay={0.2} duration={1.0}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros <MermaidPopover diagram={`graph TD
    A[Lemmatization] --> B[Real Words]
    A --> C[High Accuracy]
    A --> D[Handles Irregulars]
    style A fill:#ffd700
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784`} />
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.18} duration={0.7}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>More accurate than stemming</li>
                    <li>Preserves meaning</li>
                    <li>Aids downstream tasks</li>
                  </ul>
                </GSAPStaggerList>
                <GSAPAnimated animation="bounceIn" delay={0.9} duration={1.0}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons <MermaidPopover diagram={`graph TD
    A[Lemmatization] --> B[Slower Processing]
    A --> C[Needs Resources]
    A --> D[Domain Shift Errors]
    style A fill:#ffd700
    style B fill:#ffcdd2
    style C fill:#ffcdd2
    style D fill:#ffcdd2`} />
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.18} duration={0.7}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Slower</li>
                    <li>Requires models/resources</li>
                    <li>Errors under domain shift</li>
                  </ul>
                </GSAPStaggerList>
              </div>
            </div>
          ),
          backgroundColor: '#10632c',
          notes: `### 20. Lemmatization: Pros and Cons

[lecture] Now let's examine the tradeoffs of lemmatization compared to stemming and other normalization approaches. [confidently] Understanding when to pay the computational cost for higher accuracy is crucial for effective NLP pipeline design.

#### The Pros: Why Lemmatization Is Worth the Extra Cost

[pleased] **1. Significantly More Accurate Than Stemming**

[confidently] Lemmatization produces linguistically correct base forms, avoiding the conflation errors that plague stemming. [lecture] Let's look at concrete comparisons:

**Stemming errors that lemmatization fixes:**
- "university" and "universal"  to  Stemmer: both become "univers" [disappointed] (WRONG) | Lemmatizer: "university" and "universal" remain distinct [pleased] (CORRECT)
- "organization"  to  Stemmer: "organ" [concerned] (misleading) | Lemmatizer: "organization" or "organize" [confidently] (correct and meaningful)
- "news"  to  Stemmer: "new" [disappointed] (changes meaning!) | Lemmatizer: "news" [pleased] (correctly preserved as distinct from "new")

**Irregular forms handled correctly:**
- "better"  to  Stemmer: "better" (unchanged) | Lemmatizer: "good" [delighted] (correct base form)
- "feet"  to  Stemmer: "feet" (unchanged) | Lemmatizer: "foot" (singular form)
- "was," "were," "been"  to  Stemmer: varies | Lemmatizer: all become "be"

[delighted] This accuracy difference can translate to 5-15% improvement in downstream task performance for tasks that depend on precise semantic grouping.

\`\`\`mermaid
graph LR
    A[university, universal] --> B[Stemmer: univers]
    A --> C[Lemmatizer: kept separate]
    B --> D[Confusion]
    C --> E[Clarity]
    style B fill:#ffcdd2
    style C fill:#81c784
    style D fill:#ffcdd2
    style E fill:#81c784
\`\`\`

**2. Preserves Semantic Meaning**

[pleased] Because lemmatization produces real dictionary words, your processed text remains interpretable. [confidently] This has several benefits:

[lecture] **Debugging**: When you inspect your processed tokens, you see "organize," "run," "good" instead of "organ," "run," "good." [pleased] You can immediately understand what the original words were.

**Feature Interpretation**: In a machine learning model, if the most important feature is "good," you know it represents "good," "better," "best," etc. [conversational] If the feature is "organ," does it mean "organ" (body part) or "organization" (entity)? [disappointed] Ambiguity creates problems.

[delighted] **Stakeholder Communication**: When presenting results to non-technical stakeholders, showing them feature importance scores with real words ("compete," "innovative," "growth") is much more effective than showing stems ("compet," "innov," "grow").

**3. Aids Downstream Tasks**

[confidently] Many NLP tasks benefit from accurate lemmatization:

**Named Entity Recognition (NER)**: Lemmatization helps identify entity patterns without over-normalizing. [storytelling] "United States" stays intact, but "running companies" becomes "run company," making it easier to recognize "company" as an entity type.

[pleased] **Semantic Search**: When building search systems with semantic understanding, accurate lemmas improve embedding quality and retrieval precision. [lecture] Word embeddings trained on lemmatized text often have better semantic properties.

**Knowledge Graph Construction**: Extracting relationships like "X organizes Y" works better with "organize" as the base form rather than "organ" from stemming.

**Question Answering**: Matching questions to answers requires precise semantic alignment. [storytelling] "Who organized the event?" should match "Event was organized by..." [confidently] Lemmatization handles this better than stemming.

#### The Cons: Where Lemmatization Falls Short

[cautiously] **1. Significantly Slower Processing**

[concerned] This is the biggest downside. Lemmatization requires:
- **POS tagging**: Running a sequence labeling model (typically a BiLSTM or transformer) over the text
- **Dictionary lookups**: Searching morphological databases
- **Rule application**: Applying language-specific transformation rules

[lecture] Benchmark on 1 million English words:
- **Stemming**: ~1-2 seconds
- **Lemmatization (spaCy)**: ~30-60 seconds
- **Lemmatization (Stanford CoreNLP)**: ~90-120 seconds

[concerned] That's 30-60x slower than stemming! [storytelling] For batch processing of large corpora, this can be the difference between hours and days.

**2. Requires External Models and Resources**

[cautiously] Lemmatization isn't self-contained. You need:
- Trained language models (50-500 MB per language)
- Morphological lexicons
- POS tagging models
- GPU acceleration for reasonable speed on large corpora

[sigh] This creates dependencies and deployment challenges. [conversational] You can't just "pip install" a simple library—you need to download models, manage versions, and ensure compatibility.

[lecture] For stemming, you just need a few hundred lines of pure Python code. For lemmatization, you need spaCy, Stanford CoreNLP, or similar heavyweight libraries.

**3. Errors Under Domain Shift**

[cautiously] Lemmatizers are trained on general corpora (news, web text, literature). [concerned] When applied to specialized domains, they make mistakes:

[disappointed] **Medical text**: "presents" in "patient presents with fever" might be lemmatized to "present" (correct) or "presentation" (incorrect depending on the tagger's confidence).

[cautiously] **Legal text**: "parties" could mean "party" (social event) or "party" (legal entity). Context determines the correct lemma, but the model might choose incorrectly.

**Social media**: Slang, misspellings, and creative language break lemmatizers. [storytelling] "gonna" might not lemmatize to "go," "wanna" might not become "want."

**Scientific text**: Domain-specific terminology might not be in the training data, leading to incorrect lemmatization or no lemmatization at all.

#### When to Choose Lemmatization Over Stemming

[confidently] Use lemmatization when:
- **Accuracy > Speed**: You need precise normalization and can afford the computational cost
- **Interpretability matters**: Stakeholders need to understand your features
- **Downstream tasks are sensitive**: NER, semantic search, knowledge graphs benefit from accuracy
- **You're working with irregular morphology**: Languages with lots of irregular forms (English, French) benefit more from lemmatization

[conversational] Use stemming when:
- **Speed is critical**: Real-time systems, large-scale batch processing
- **Good enough is good enough**: Information retrieval where approximate matching is acceptable
- **Resources are limited**: Edge devices, mobile apps, resource-constrained environments
- **Simple preprocessing is preferred**: Minimal dependencies, easy deployment

Use neither when:
- **Using transformers**: BERT, GPT, RoBERTa learn morphology automatically
- **Vocabulary is already small**: Short, controlled vocabularies don't need normalization
- **Inflectional variation is minimal**: Some languages (Chinese, Vietnamese) have little inflection

#### Practical Recommendation

[confidently] For most modern NLP projects with adequate computational resources, lemmatization is the better choice. [pleased] The accuracy gains outweigh the speed penalty, especially as hardware improves and libraries become more efficient. [cautiously] However, always profile your pipeline—if lemmatization is your bottleneck and you're not seeing accuracy improvements, switch to stemming or skip normalization entirely.

[conversational] A hybrid approach is also viable: use stemming for initial experiments and exploration, then switch to lemmatization for production or final models where accuracy matters most.`
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
                  <GSAPAnimated animation="slideInLeft" delay={0.2} duration={0.8}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal <MermaidPopover diagram={`graph LR
    A[I] --> B[PRON]
    C[love] --> D[VERB]
    E[fast] --> F[ADJ]
    G[cars] --> H[NOUN]
    style A fill:#4fc3f7
    style C fill:#4fc3f7
    style E fill:#4fc3f7
    style G fill:#4fc3f7
    style B fill:#81c784
    style D fill:#e1bee7
    style F fill:#ffd700
    style H fill:#81c784`} />
                    </h4>
                    <p>Assign grammatical categories (e.g., noun, verb) to tokens.</p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInLeft" delay={0.4} duration={0.8}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph TD
    A[Sentence] --> B[Context Analysis]
    B --> C[HMM/CRF/Neural Model]
    C --> D[POS Tags]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#e1bee7
    style D fill:#81c784`} />
                    </h4>
                    <p>Sequence labeling via HMM/CRF/neural models trained on tagged corpora.</p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInLeft" delay={0.6} duration={0.8}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>Before lemmatization, parsing, NER, feature engineering.</p>
                  </GSAPAnimated>
                </div>
                <div>
                  <GSAPAnimated animation="slideInRight" delay={0.3} duration={0.8}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Steps
                    </h4>
                  </GSAPAnimated>
                  <GSAPStaggerList stagger={0.16} duration={0.6}>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Select tagset (e.g., Universal POS)</li>
                      <li>Load model</li>
                      <li>Tokenize</li>
                      <li>Tag</li>
                      <li>Evaluate on a sample</li>
                    </ul>
                  </GSAPStaggerList>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#631037',
          notes: `### 21. Part-of-Speech Tagging

[lecture] Part-of-speech tagging, commonly abbreviated as POS tagging (pronounced "P-O-S tagging" or sometimes "pause tagging"), is a fundamental NLP task that assigns grammatical categories to words. [conversational] It's like giving each word a label describing its grammatical role in a sentence.

#### What Is Part-of-Speech Tagging?

[lecture] POS tagging identifies whether a word is a noun, verb, adjective, adverb, pronoun, preposition, and so on. [storytelling] For example, in the sentence "They refuse to permit us to obtain the refuse permit," POS tagging would label:

- "They"  to  PRONOUN
- "refuse" (first occurrence)  to  VERB
- "to"  to  PARTICLE (or TO in some tagsets)
- "permit" (first occurrence)  to  VERB
- "us"  to  PRONOUN
- "to"  to  PARTICLE
- "obtain"  to  VERB
- "the"  to  DETERMINER
- "refuse" (second occurrence)  to  NOUN [pleased] (different meaning!)
- "permit" (second occurrence)  to  NOUN [delighted] (different meaning!)

[amused] Notice how "refuse" and "permit" are verbs in one context but nouns in another. [confidently] POS tagging resolves this ambiguity using context.

\`\`\`mermaid
graph TD
    A["Time flies like an arrow"] --> B[Time: NOUN]
    A --> C[flies: VERB]
    A --> D[like: ADP]
    A --> E[an: DET]
    A --> F[arrow: NOUN]
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#e1bee7
    style D fill:#ffd700
    style F fill:#81c784
\`\`\`

#### Why POS Tagging Matters

[lecture] POS tagging is rarely an end goal—it's usually a preprocessing step that enables other NLP tasks:

[confidently] **1. Lemmatization**: As we discussed earlier, accurate lemmatization requires knowing a word's POS. [conversational] The lemma of "meeting" depends on whether it's a noun (lemma: "meeting") or verb (lemma: "meet").

**2. Named Entity Recognition (NER)**: NER systems use POS tags as features. [pleased] Proper nouns (tagged as PROPN) are likely to be entities. [storytelling] Patterns like "PROPN PROPN" might indicate person names ("Barack Obama") or organizations ("Google Inc").

**3. Syntactic Parsing**: Building parse trees requires knowing which words are nouns, verbs, etc. [confidently] POS tags are the foundation of syntactic analysis.

**4. Information Extraction**: Extracting relationships often relies on POS patterns. [lecture] For example, finding "NOUN VERB NOUN" patterns can identify subject-verb-object relationships.

**5. Feature Engineering**: For text classification, you might create features like "ratio of adjectives to nouns" or "number of modal verbs." [pleased] POS tags enable these syntactic features.

#### How POS Tagging Works

[lecture] Modern POS tagging is treated as a sequence labeling problem. [confidently] The algorithm considers the entire sentence context, not just individual words:

**Traditional Approaches:**
- **Hidden Markov Models (HMMs)**: Model the probability of tag sequences and word emissions
- **Conditional Random Fields (CRFs)**: Discriminative models that consider rich features

[confidently] **Modern Approaches:**
- **BiLSTM + CRF**: Bidirectional LSTMs capture context from both directions
- **Transformers**: BERT-based taggers achieve 97-98% accuracy on English

[lecture] The key insight is that context matters. [storytelling] Consider "bank":
- "I need to deposit money at the bank"  to  NOUN
- "Don't bank on it happening"  to  VERB

[pleased] The surrounding words ("deposit," "money," "at") vs. ("on," "it") signal the correct POS tag.

#### Common POS Tagsets

[lecture] Different tagsets exist with varying granularity:

[confidently] **Universal POS Tags (17 tags)**: A simplified, cross-lingual standard
- NOUN, VERB, ADJ, ADV, PRON, DET, ADP (preposition), NUM, CONJ, PART, etc.
- [pleased] Easy to understand, works across languages

[lecture] **Penn Treebank Tags (45 tags)**: Fine-grained English tagset
- NN (singular noun), NNS (plural noun), NNP (proper singular noun), NNPS (proper plural noun)
- VB (base verb), VBD (past tense), VBG (gerund), VBN (past participle), VBP (present), VBZ (3rd person present)
- [conversational] More detailed but English-specific

**Brown Corpus Tags (87 tags)**: Very detailed, including morphological information
- [cautiously] Useful for linguistic research but overkill for most NLP applications

#### When to Use POS Tagging

[confidently] POS tagging is essential when:
- **Performing lemmatization**: Most lemmatizers require or benefit from POS information
- **Building linguistic features**: Syntax-aware features for classification
- **Doing syntactic analysis**: Parsing, chunking, dependency analysis
- **Filtering by word class**: E.g., extracting only nouns and adjectives for topic modeling
- **Disambiguating word senses**: Context-dependent meaning resolution

#### Technical Workflow

Here's a typical POS tagging pipeline using spaCy:

\`\`\`python
import spacy

# Load model with POS tagger
nlp = spacy.load("en_core_web_sm")

# Process sentence
doc = nlp("Apple is looking at buying U.K. startup for $1 billion")

# Extract POS tags
for token in doc:
    print(f"{token.text}: {token.pos_}")

# Output:
# Apple: PROPN (proper noun)
# is: AUX (auxiliary verb)
# looking: VERB
# at: ADP (preposition)
# buying: VERB
# U.K.: PROPN
# startup: NOUN
# for: ADP
# $: SYM (symbol)
# 1: NUM (number)
# billion: NUM
\`\`\`

#### Pronunciation Guide

- **POS**: P-O-S (say each letter) or "pause"
- **Corpus**: KOR-puss (plural: corpora, KOR-por-uh)
- **Tagset**: TAG-set
- **Ambiguity**: am-big-YOO-ih-tee

#### Accuracy and Limitations

[confidently] State-of-the-art POS taggers achieve 97-98% accuracy on standard English benchmarks. [cautiously] However, accuracy drops on:
- **Out-of-domain text**: Social media, technical jargon, creative writing
- **Ambiguous cases**: "He will run" (will: AUX or NOUN?)
- **Unknown words**: New slang, misspellings, rare terms
- **Code-switching**: Multilingual text mixing languages

[concerned] Even 2-3% error might seem small, but in a 1000-word document, that's 20-30 incorrect tags. [disappointed] These errors can propagate to downstream tasks.

#### Evaluation and Validation

[lecture] Always spot-check your POS tags! [conversational] Look at a sample of tagged text and verify:
- Are proper nouns correctly identified?
- Are ambiguous words tagged correctly in context?
- Are domain-specific terms handled well?
- Do you see patterns of errors?

[cautiously] If you notice systematic errors, you might need:
- A domain-adapted POS tagger
- A more sophisticated model
- Custom rules for your specific vocabulary

[confidently] POS tagging is a foundational tool in the NLP toolkit. [conversational] While it's largely been commoditized by tools like spaCy and Stanford CoreNLP, understanding how it works and when to use it remains essential for building robust NLP pipelines.`
        },
        {
          id: 22,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="rotateIn" delay={0.2} duration={0.9}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros <MermaidPopover diagram={`graph TD
    A[POS Tagging] --> B[Syntax Awareness]
    A --> C[Better Lemmatization]
    A --> D[Rich Features]
    style A fill:#ffd700
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784`} />
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.2} duration={0.7}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Enables syntax-aware features</li>
                    <li>Improves lemmatization and parsing</li>
                  </ul>
                </GSAPStaggerList>
                <GSAPAnimated animation="rotateIn" delay={0.9} duration={0.9}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons <MermaidPopover diagram={`graph TD
    A[POS Tagging] --> B[Error Propagation]
    A --> C[Domain Variance]
    A --> D[Ambiguity Issues]
    style A fill:#ffd700
    style B fill:#ffcdd2
    style C fill:#ffcdd2
    style D fill:#ffcdd2`} />
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.2} duration={0.7}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Errors propagate</li>
                    <li>Domain/language coverage varies</li>
                    <li>Ambiguous tokens</li>
                  </ul>
                </GSAPStaggerList>
              </div>
            </div>
          ),
          backgroundColor: '#631037',
          notes: `### 22. Part-of-Speech Tagging: Pros and Cons

[lecture] POS tagging is a double-edged sword—it enables sophisticated linguistic analysis but also introduces potential failure points. [cautiously] Let's examine both sides carefully.

#### The Pros: Why POS Tagging Is Essential

[pleased] **1. Enables Syntax-Aware Features**

[confidently] POS tags unlock a wealth of linguistic features that go beyond simple word counts. [lecture] You can create features like:

**Syntactic patterns**: Count sequences like "ADJ NOUN" (descriptive phrases), "VERB ADV" (modified actions), "MODAL VERB" (possibility/obligation expressions). [pleased] These patterns can be powerful features for text classification.

[lecture] **Grammatical complexity metrics**: 
- Ratio of adjectives to nouns (descriptive density)
- Ratio of verbs to nouns (action vs. entity focus)
- Presence of modal verbs ("could," "should," "might") indicating uncertainty
- Frequency of passive voice constructions

[storytelling] **Style indicators**: Different writing styles have different POS distributions. [lecture] Academic writing has more nouns and prepositions, narrative writing has more verbs and adverbs, persuasive writing has more adjectives and modal verbs.

\`\`\`mermaid
graph TD
    A[POS Tags] --> B[Syntactic Features]
    A --> C[Style Metrics]
    A --> D[Pattern Detection]
    B --> E[Better Classification]
    C --> E
    D --> E
    style A fill:#ffd700
    style E fill:#81c784
\`\`\`

[storytelling] For example, in sentiment analysis, you might discover that the ratio of adjectives in a review correlates with sentiment intensity—highly positive or negative reviews use more descriptive language.

**2. Dramatically Improves Lemmatization and Parsing**

[lecture] We've mentioned this before, but it bears repeating: [confidently] accurate POS tags are crucial for accurate lemmatization. [concerned] Without POS information:
- "meeting"  to  lemmatizer might guess wrong (is it a noun or verb?)
- "saw"  to  could be "see" (verb) or "saw" (noun, the tool)
- "lead"  to  could be "lead" (verb, to guide) or "lead" (noun, the metal)

[pleased] With POS tags, these ambiguities disappear. [confidently] The lemmatizer knows exactly how to handle each word based on its grammatical role.

[lecture] Similarly, syntactic parsing (building parse trees that show sentence structure) is nearly impossible without POS tags. [conversational] Parsers need to know which words are verbs (the structural anchors) and which are nouns (the arguments) to build accurate trees.

**3. Enables Advanced NLP Pipelines**

[pleased] POS tagging is often a gateway to more sophisticated analysis:

**Dependency parsing**: Identifies grammatical relationships between words (e.g., "dog" is the subject of "ran"). [lecture] Requires POS tags as input.

**Semantic role labeling**: Identifies "who did what to whom" in sentences. Built on top of POS tagging and parsing.

[confidently] **Coreference resolution**: Determining that "he," "John," and "the CEO" refer to the same person. [lecture] Uses POS patterns to identify candidate mentions.

**Information extraction**: Extracting structured data from text (e.g., "Company X acquired Company Y for $Z") relies on POS patterns to identify key entities and relationships.

#### The Cons: Limitations and Failure Modes

[cautiously] **1. Errors Propagate to Downstream Tasks**

[concerned] This is the most critical issue. [disappointed] POS tagging errors compound in multi-stage pipelines:

[storytelling] **Cascade failure example:**
1. POS tagger incorrectly tags "lead" as NOUN instead of VERB
2. Lemmatizer uses the wrong POS, producing "lead" (metal) instead of "lead" (guide)
3. NER system looking for VERB + NOUN patterns misses "lead company" as a potential organization
4. Information extraction fails to capture the relationship

[concerned] Even with 97% accuracy, in a 1000-word document you have ~30 incorrect tags. [disappointed] If 10 of those are on critical words (main verbs, key entities), downstream tasks suffer significantly.

\`\`\`mermaid
graph LR
    A[POS Error] --> B[Lemmatization Error]
    B --> C[NER Error]
    C --> D[Extraction Failure]
    style A fill:#ffcdd2
    style B fill:#ffcdd2
    style C fill:#ffcdd2
    style D fill:#ffcdd2
\`\`\`

[cautiously] **2. Domain and Language Coverage Varies Dramatically**

POS taggers are typically trained on news text, literature, or web text. Performance degrades on specialized domains:

**Social Media**: "That's so extra" or "He's flexing" use non-standard vocabulary. "Extra" as an adjective meaning "excessive" and "flexing" as slang for "showing off" might be mistagged.

**Technical Jargon**: "We need to Docker this service" uses "Docker" as a verb (to containerize), but it might be tagged as a proper noun because the tagger has never seen it used this way.

**Medical Text**: "Patient presents with acute symptoms" uses domain-specific verb sense (presents = exhibits). A general tagger might struggle with this.

**Legal Text**: "Plaintiff alleges" uses formal legal language that might differ from the tagger's training data.

Cross-linguistic challenges are even more severe. Taggers trained on one language don't transfer to another. Even within a language family (Romance languages), you need separate taggers for Spanish, French, Italian, etc.

**3. Fundamental Ambiguity Is Irreducible**

Some cases are genuinely ambiguous even with full context:

**Noun-Adjective ambiguity**: "The rich are getting richer"  to  Is "rich" a noun (the wealthy people) or an adjective used as a noun?

**Verb-Noun ambiguity**: "Let's book the flight" vs. "I'm reading a book"  to  Context helps, but edge cases remain challenging.

**Proper noun vs. common noun**: "Apple announced new products"  to  Is "Apple" a fruit or a company? Context usually clarifies, but domain shift can confuse taggers.

**Particle vs. preposition**: "Turn on the light"  to  Is "on" a particle (part of phrasal verb "turn on") or a preposition? Linguists disagree!

Even human annotators disagree on POS tags 2-3% of the time, establishing a ceiling on automated accuracy.

#### When POS Tagging Adds Value vs. When It Doesn't

**High Value Scenarios:**
- Lemmatization for ambiguous words
- Feature engineering for classical ML models
- Linguistic analysis and corpus studies
- Building syntactic/semantic parsers
- Rule-based information extraction

**Low Value Scenarios:**
- Modern transformer models (BERT, GPT already learn syntax implicitly)
- Simple bag-of-words applications where syntax doesn't matter
- Very short texts where POS tags add little information
- Real-time systems where tagging latency is prohibitive
- Domains with poor tagger accuracy where errors outweigh benefits

#### Practical Recommendations

**Always validate POS tagging on your domain**: Don't assume 97% accuracy on news text transfers to your medical/legal/social media corpus. Sample-check 100-200 tagged sentences from your data.

**Consider the full pipeline cost**: POS tagging isn't free. It adds latency and complexity. If downstream tasks don't meaningfully benefit, skip it.

**Use POS-aware lemmatization**: If you're lemmatizing anyway, the POS tagging cost is already paid. Might as well extract POS features too.

**Retrain or fine-tune for critical applications**: If POS accuracy is essential and you have annotated data, fine-tune a tagger on your domain. Even 1000-2000 tagged sentences can meaningfully improve performance.

**Ensemble or combine approaches**: For ambiguous cases, consider using multiple taggers and taking a majority vote, or using confidence scores to identify uncertain tags.

The bottom line: POS tagging is a powerful tool that enables advanced NLP, but it's not a silver bullet. Use it judiciously where linguistic structure matters, validate its accuracy on your data, and be aware of error propagation in multi-stage pipelines.`
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
                  <GSAPAnimated animation="bounceIn" delay={0.2} duration={0.9}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal <MermaidPopover diagram={`graph TD
    A["I love NLP"] --> B["Unigrams: I, love, NLP"]
    A --> C["Bigrams: I love, love NLP"]
    A --> D["Trigrams: I love NLP"]
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#e1bee7
    style D fill:#ffd700`} />
                    </h4>
                    <p>Capture local context by creating contiguous token sequences.</p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="bounceIn" delay={0.4} duration={0.9}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph LR
    A[Tokens] --> B[Sliding Window]
    B --> C[Generate n-grams]
    C --> D[Prune/Weight]
    style A fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#e1bee7
    style D fill:#81c784`} />
                    </h4>
                    <p>Sliding window to build bigrams/trigrams/etc.; optional weighting.</p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="bounceIn" delay={0.6} duration={0.9}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>Linear models, IR, text classification, feature engineering.</p>
                  </GSAPAnimated>
                </div>
                <div>
                  <GSAPAnimated animation="slideInRight" delay={0.3} duration={0.8}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Steps
                    </h4>
                  </GSAPAnimated>
                  <GSAPStaggerList stagger={0.18} duration={0.6}>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Choose n values (e.g., 2 for bigrams, 3 for trigrams)</li>
                      <li>Generate</li>
                      <li>Prune rare n-grams</li>
                      <li>Compute TF-IDF/PMI</li>
                      <li>Cap feature size</li>
                    </ul>
                  </GSAPStaggerList>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#636310',
          notes: `### 23. N-gram Generation

[lecture] N-gram generation is a classic technique for capturing local word order and context in text. [pleased] While it might seem simple, n-grams have powered countless successful NLP applications and remain relevant even in the deep learning era.

#### What Are N-grams?

[conversational] An n-gram (pronounced "N-gram") is a contiguous sequence of n items from text—typically words, but sometimes characters. [lecture] The "n" specifies how many items:

- **Unigrams (n=1)**: Individual words: "I," "love," "natural," "language," "processing"
- **Bigrams (n=2)**: Word pairs: "I love," "love natural," "natural language," "language processing"
- **Trigrams (n=3)**: Three-word sequences: "I love natural," "love natural language," "natural language processing"
- **4-grams, 5-grams, etc.**: Longer sequences [cautiously] (less common due to sparsity)

[conversational] Consider the sentence: "The quick brown fox jumps"

\`\`\`mermaid
graph TD
    A["The quick brown fox jumps"] --> B[Unigrams: The, quick, brown, fox, jumps]
    A --> C["Bigrams: The quick, quick brown, brown fox, fox jumps"]
    A --> D["Trigrams: The quick brown, quick brown fox, brown fox jumps"]
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#e1bee7
    style D fill:#ffd700
\`\`\`

#### Why N-grams Matter

[pleased] **Capturing Word Order**: Bag-of-words models lose all word order information. [storytelling] "Dog bites man" and "Man bites dog" are identical in bag-of-words, but bigrams distinguish them: "dog bites" vs. "man bites."

[confidently] **Capturing Context**: In sentiment analysis, "not good" has opposite meaning from "good." [disappointed] Unigrams see "not" and "good" separately, but the bigram "not good" captures the negative sentiment.

[pleased] **Capturing Phrases**: Multi-word expressions like "New York," "machine learning," "ice cream" should be treated as single units. [confidently] Bigrams preserve these meaningful phrases.

**Improving Predictive Power**: N-grams add contextual features that improve model performance. [delighted] For text classification, adding bigrams to unigrams often improves accuracy by 5-10%.

#### How N-gram Generation Works

The process is straightforward but creates combinatorial explosion:

**Step 1: Tokenize**
Split text into tokens: ["I", "love", "machine", "learning"]

**Step 2: Slide Window**
For bigrams (n=2), slide a 2-word window:
- Position 0-1: "I love"
- Position 1-2: "love machine"
- Position 2-3: "machine learning"

For trigrams (n=3), slide a 3-word window, and so on.

**Step 3: Count and Weight**
Count frequency of each n-gram across your corpus. Optionally compute TF-IDF weights to identify distinctive n-grams.

**Step 4: Prune**
Remove rare n-grams (appear in < 2-3 documents) to reduce sparsity and noise.

#### The Feature Explosion Problem

Here's where it gets tricky. If your vocabulary has 10,000 words:
- Unigrams: 10,000 features
- Bigrams: potentially 100,000,000 combinations (10k × 10k)
- Trigrams: potentially 1,000,000,000,000 combinations

In practice, most combinations never occur (language is structured, not random). A real corpus might have:
- 50,000 unique unigrams
- 500,000 unique bigrams (not 2.5 billion!)
- 1,000,000 unique trigrams

But that's still a massive feature space! This is why pruning is essential.

\`\`\`mermaid
graph TD
    A[10K Vocabulary] --> B[10K Unigrams]
    A --> C[500K Bigrams]
    A --> D[1M Trigrams]
    D --> E[Extreme Sparsity]
    style D fill:#ffcdd2
    style E fill:#ffcdd2
\`\`\`

#### Common N-gram Strategies

**1. Unigrams + Bigrams**
Most common approach. Captures individual words and immediate context without exploding feature space too much.

**2. Character N-grams**
Instead of word n-grams, use character sequences: "hello"  to  char trigrams: "hel," "ell," "llo." Useful for capturing morphology and handling typos.

**3. Skip-grams**
Allow gaps: "not * good" matches "not very good," "not really good," etc. More flexible but even sparser.

**4. TF-IDF Weighted N-grams**
Don't just count n-grams; weight them by TF-IDF to emphasize distinctive ones. "machine learning" in ML papers has high TF-IDF; "the and" has low TF-IDF.

**5. Pointwise Mutual Information (PMI)**
Identify n-grams where words co-occur more than expected by chance. "ice cream" has high PMI because "ice" and "cream" appear together far more often than random.

#### When to Use N-grams

N-grams shine in specific scenarios:

**Classical ML Text Classification**: Naive Bayes, SVM, Logistic Regression benefit greatly from bigram and trigram features.

**Information Retrieval**: Search engines use n-grams to match multi-word queries and handle phrase searches.

**Spam Detection**: Spam has distinctive phrase patterns. "Click here," "limited offer," "act now" are telltale bigrams.

**Language Modeling**: Traditional n-gram language models (before neural networks) predict next word based on previous n-1 words.

**Text Generation**: Markov chain text generators use n-grams to produce coherent-sounding text.

**Feature Engineering**: For any task where word order matters but you're using linear models, n-grams bridge the gap.

#### When NOT to Use N-grams

**Transformer Models**: BERT, GPT, etc. learn contextual representations automatically. Adding n-grams provides no benefit and increases computational cost.

**Very Sparse Data**: If you only have a few hundred documents, most bigrams and trigrams appear once. Pruning removes too much, leaving little signal.

**Long-Range Dependencies**: N-grams only capture local context (2-5 words). For dependencies spanning 10+ words, n-grams fail.

**Memory-Constrained Environments**: Storing millions of n-grams requires significant memory. Mobile or edge devices might struggle.

#### Practical Implementation Tips

**Choose n wisely**: Bigrams almost always help. Trigrams sometimes help. 4-grams rarely help unless you have massive data.

**Prune aggressively**: Remove n-grams appearing in < 2-3 documents. This cuts 80-90% of n-grams with minimal information loss.

**Set a max features limit**: Cap total features at 50k-100k by keeping only the most frequent or highest TF-IDF n-grams.

**Consider character n-grams for noisy text**: Social media, OCR text, multilingual text with inconsistent tokenization benefit from character-level n-grams.

**Combine with other features**: N-grams work best alongside unigrams, not as a replacement. Use unigrams + bigrams together.

#### Example: Sentiment Analysis

Without bigrams: "not" (neutral), "good" (positive)  to  Model is confused
With bigrams: "not good" (negative)  to  Model correctly identifies negative sentiment

Without bigrams: "not" (neutral), "bad" (negative)  to  Model says negative
With bigrams: "not bad" (positive/neutral)  to  Model correctly identifies the negation

This is why bigrams consistently improve sentiment classification by 5-10% accuracy over unigrams alone.

N-grams are a simple, interpretable, and effective way to capture local context in text. While they've been partially superseded by neural methods for some tasks, they remain a staple of classical NLP and continue to be useful in many practical applications.`
        },
        {
          id: 24,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.2} duration={0.8}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros <MermaidPopover diagram={`graph LR
    A[N-grams] --> B[Word Order]
    A --> C[Context Capture]
    style A fill:#ffd700
    style B fill:#81c784
    style C fill:#81c784`} />
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.2} duration={0.7}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Encodes order</li>
                    <li>Improves predictive power over unigrams</li>
                  </ul>
                </GSAPStaggerList>
                <GSAPAnimated animation="slideInRight" delay={0.8} duration={0.8}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons <MermaidPopover diagram={`graph TD
    A[N-grams] --> B["10K words  to  500K bigrams"]
    A --> C[Sparse Features]
    A --> D[Brittle Matching]
    style A fill:#ffd700
    style B fill:#ffcdd2
    style C fill:#ffcdd2
    style D fill:#ffcdd2`} />
                  </h4>
                </GSAPAnimated>
                <GSAPStaggerList stagger={0.2} duration={0.7}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Feature explosion</li>
                    <li>Sparsity</li>
                    <li>Brittle to noise and rephrasing</li>
                  </ul>
                </GSAPStaggerList>
              </div>
            </div>
          ),
          backgroundColor: '#636310',
          notes: `### 24. N-gram Generation: Pros and Cons

[lecture] N-grams have been a cornerstone of NLP for decades, but like all techniques, they come with significant tradeoffs. [confidently] Let's examine both the strengths that made them so successful and the limitations that have led to their decline in some areas.

#### The Pros: Why N-grams Remain Valuable

[pleased] **1. Encodes Local Word Order**

[confidently] This is the killer feature of n-grams. [disappointed] Bag-of-words models treat "dog bites man" and "man bites dog" identically, but these sentences have opposite meanings! [delighted] N-grams preserve the crucial distinction:

- **Unigrams only**: {dog: 1, bites: 1, man: 1}  to  identical for both sentences
- **With bigrams**: "dog bites man" includes "dog bites" and "bites man"; "man bites dog" includes "man bites" and "bites dog"  to  distinguishable!

This encoding of local order is essential for many NLP tasks. In sentiment analysis, "not bad" and "bad not" are distinguished. In question classification, "how do" (question) vs. "do how" (incorrect) are distinguished.

\`\`\`mermaid
graph TD
    A["dog bites man"] --> B["Bigrams: dog bites, bites man"]
    C["man bites dog"] --> D["Bigrams: man bites, bites dog"]
    B -.Different!.-> D
    style B fill:#81c784
    style D fill:#e1bee7
\`\`\`

**2. Dramatically Improves Predictive Power**

Empirical results consistently show that adding bigrams to unigrams improves performance:

**Sentiment classification**: Unigrams alone might achieve 80% accuracy. Adding bigrams often pushes this to 85-87%. Adding trigrams might squeeze out another 1-2%.

**Topic classification**: For classifying news articles into categories (sports, politics, technology), bigrams capture domain-specific phrases like "machine learning," "foreign policy," "home run" that are much more informative than isolated words.

**Spam detection**: Spam patterns are often phrasal: "limited offer," "act now," "click here," "million dollars." Bigrams detect these patterns far more effectively than unigrams.

**Named entity recognition (with classical ML)**: Person names often follow patterns like "PROPN PROPN" (e.g., "Barack Obama"). Location names might be "PROPN PROPN City" (e.g., "New York City"). Bigrams and trigrams capture these patterns.

The improvement from adding bigrams is one of the most consistent findings in classical NLP—it's rare to see a case where they don't help at least a little.

**3. Interpretability and Debuggability**

When your model makes a decision, you can inspect which n-grams were most influential. If a spam classifier flags an email, you might see that "click here," "free money," and "act now" were the decisive features. This explainability is valuable for:
- **Model debugging**: Understanding failures
- **Regulatory compliance**: Explaining automated decisions
- **User trust**: Showing why content was classified a certain way

Unlike neural embeddings which are opaque high-dimensional vectors, n-grams are human-readable features you can directly examine.

#### The Cons: Significant Limitations

**1. Catastrophic Feature Explosion**

This is the most serious problem. Feature spaces grow exponentially with n:

**Example corpus with 10,000 unique words:**
- Unigrams: 10,000 features
- Bigrams: Theoretically 100 million (10k × 10k), practically ~500,000 unique bigrams
- Trigrams: Theoretically 1 trillion, practically ~2-3 million unique trigrams

Even with pruning, you end up with hundreds of thousands to millions of features. This causes:
- **Memory explosion**: Storing sparse matrices becomes challenging
- **Computational cost**: Training time increases dramatically
- **Overfitting risk**: More features than training examples leads to overfitting

In practice, you must aggressively prune (keeping only n-grams appearing 2+ times, or top 50k by frequency), but this pruning discards potentially useful rare n-grams.

\`\`\`mermaid
graph TD
    A[10K words] --> B[10K unigrams]
    A --> C[500K bigrams]
    A --> D[2M trigrams]
    C --> E[Memory Issues]
    D --> F[Computational Bottleneck]
    style C fill:#ffcdd2
    style D fill:#ffcdd2
    style E fill:#ffcdd2
    style F fill:#ffcdd2
\`\`\`

**2. Extreme Sparsity**

Most n-grams appear very rarely. In a corpus of 10,000 documents:
- Common bigrams like "of the," "in the," "to be" appear in thousands of documents
- Most bigrams appear in < 5 documents
- Many bigrams (perhaps 50-60%) appear exactly once

This sparsity creates statistical estimation problems. When a bigram appears only once or twice, you can't reliably estimate its importance or discriminative power. The signal-to-noise ratio is terrible.

Sparse features also mean sparse training data per feature. If you have 500,000 bigram features but only 10,000 training examples, each feature has on average 0.02 training examples! This makes learning difficult and prone to overfitting.

**3. Brittleness to Noise and Rephrasing**

N-grams require exact matching. Small variations break the match:

**Synonyms**: "machine learning" vs. "ML" vs. "automated learning"  to  three different bigrams despite identical meaning

**Word order variation**: "very good" vs. "really good" vs. "quite good"  to  different bigrams with similar sentiment

**Typos/errors**: "machien learning" vs. "machine learning"  to  no match

**Morphological variants**: "machine learns" vs. "machine learned" vs. "machine learning"  to  all different

This brittleness means n-grams fragment the signal across multiple similar but distinct features, reducing the statistical power for each variant.

**Paraphrasing completely breaks n-grams:**
- "The company acquired the startup"  to  bigrams: "company acquired," "acquired the," "the startup"
- "The startup was acquired by the company"  to  bigrams: "startup was," "was acquired," "acquired by," "by the," "the company"
- Zero n-gram overlap despite identical core meaning!

**4. No Long-Range Dependencies**

N-grams capture only local context (2-5 words). For understanding:
- Coreference: "John loves Mary. He bought her flowers."  to  "he" refers to John 3+ words back
- Document theme: Overall topic spans the entire document
- Negation scope: "I don't think it's a good idea"  to  negation affects "good" 5 words away

N-grams simply cannot model these longer-range dependencies. This limits their effectiveness for tasks requiring deeper understanding.

#### Why Neural Methods Have Superseded N-grams in Many Areas

Modern neural approaches (word embeddings, transformers) address many of n-gram limitations:

**Embeddings**: Dense vectors of 100-300 dimensions instead of sparse vectors of 500k dimensions
**Semantic similarity**: "good" and "great" have similar embeddings; "machine learning" and "ML" are close in embedding space
**Context awareness**: Transformers capture long-range dependencies beyond local n-word windows
**Generalization**: Similar words produce similar representations, reducing brittleness

However, n-grams aren't dead! They still excel in:
- **Classical ML pipelines**: Fast, simple, interpretable
- **Low-data regimes**: When you have < 1000 training examples, n-grams might outperform neural methods that need more data
- **Hybrid approaches**: Some systems use n-grams alongside neural features

#### Practical Decision Framework

**Use N-grams When:**
- Using classical ML (Naive Bayes, SVM, Logistic Regression)
- Need fast training and inference
- Require interpretability and explainability
- Have limited training data (hundreds to low thousands of examples)
- Working with well-defined, narrow domains

**Avoid N-grams When:**
- Using neural networks or transformers (they learn better representations)
- Facing severe memory/computational constraints
- Need robustness to paraphrasing and variation
- Working with very small documents (< 50 words) where n-gram sparsity is extreme

**Consider Hybrid When:**
- You want best of both worlds: use n-grams as features alongside embeddings
- Building ensemble systems where diversity of feature types helps

The bottom line: N-grams are a powerful, interpretable way to capture local context and word order, but they suffer from feature explosion, sparsity, and brittleness. For many modern applications, neural methods provide better performance, but n-grams remain relevant for classical ML, interpretability-critical applications, and low-data scenarios.`
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
                  <GSAPAnimated animation="flipCard" delay={0.2} duration={1.0}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal <MermaidPopover diagram={`graph LR
    A["New York City"] --> B["New_York_City"]
    C["machine learning"] --> D["machine_learning"]
    E["ice cream"] --> F["ice_cream"]
    style A fill:#4fc3f7
    style C fill:#4fc3f7
    style E fill:#4fc3f7
    style B fill:#81c784
    style D fill:#81c784
    style F fill:#81c784`} />
                    </h4>
                    <p>Treat multiword expressions as single units (e.g., "New York").</p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="flipCard" delay={0.4} duration={1.0}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph TD
    A[Compute PMI/T-score] --> B[Set Threshold]
    B --> C[Join High-Score Pairs]
    C --> D[Iterate for Longer]
    style A fill:#ffd700
    style B fill:#e1bee7
    style C fill:#81c784
    style D fill:#81c784`} />
                    </h4>
                    <p>Statistical collocation metrics (PMI, t-score) or model-based detection.</p>
                  </GSAPAnimated>
                  <GSAPAnimated animation="flipCard" delay={0.6} duration={1.0}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>IR, topic modeling, entity-heavy domains, prior to tokenization updates.</p>
                  </GSAPAnimated>
                </div>
                <div>
                  <GSAPAnimated animation="slideInRight" delay={0.3} duration={0.8}>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Steps
                    </h4>
                  </GSAPAnimated>
                  <GSAPStaggerList stagger={0.18} duration={0.6}>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Compute n-gram stats</li>
                      <li>Set thresholds</li>
                      <li>Join phrases with delimiter</li>
                      <li>Iterate for higher-order phrases</li>
                    </ul>
                  </GSAPStaggerList>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#63105a',
          notes: `### 25. Phrase Detection

[lecture] Phrase detection, also called collocation detection or multiword expression (MWE) identification, is the process of identifying word sequences that function as single semantic units. [conversational] Instead of treating "New York" as two separate words, we recognize it as a single conceptual unit referring to a specific place.

#### What Is Phrase Detection?

[lecture] Some word combinations are more than the sum of their parts. [confidently] These are called collocations or multiword expressions:

**Named Entities**: "New York City," "Barack Obama," "United Nations," "Eiffel Tower"
**Compound Nouns**: "machine learning," "data science," "customer service," "coffee shop"
**Idiomatic Expressions**: "kick the bucket," "break a leg," "piece of cake"
**Technical Terms**: "random forest," "neural network," "TCP/IP protocol"
**Common Phrases**: "ice cream," "hot dog," "living room," "parking lot"

These phrases should be treated as single tokens because:
1. **Semantic coherence**: "White House" doesn't mean a house that is white; it's the President's residence
2. **Distributional distinctiveness**: "New York" appears together far more often than random chance would predict
3. **Syntactic fixedness**: You can't say "York New" or insert words between them
4. **Domain importance**: "Machine learning" is a field, not just any machine that learns

\`\`\`mermaid
graph TD
    A["I live in New York City"] --> B["Before: I, live, in, New, York, City"]
    A --> C["After: I, live, in, New_York_City"]
    style B fill:#ffcdd2
    style C fill:#81c784
\`\`\`

#### Why Phrase Detection Matters

**1. Improved Semantic Representation**
When "New" and "York" are separate tokens, your model might associate "New" with "new car," "new product," etc., and "York" with... almost nothing (it's rarely used without "New"). By joining them into "New_York," you create a coherent semantic unit that can be properly represented in your model.

**2. Better Topic Modeling**
Topic models like LDA discover word co-occurrence patterns. If you want topics about cities, you want "New_York," "Los_Angeles," "San_Francisco" to emerge as top words, not "New," "Los," "San" separately (which are meaningless).

**3. Enhanced Information Retrieval**
When someone searches for "machine learning," they're looking for content about the field of ML, not any machine that learns. Phrase detection ensures queries match documents precisely.

**4. Reduced Feature Fragmentation**
Without phrase detection, "machine learning" creates features for "machine" and "learning" separately. These words also appear in unrelated contexts ("washing machine," "learning Spanish"), diluting their signal. Joining them into "machine_learning" creates a focused, domain-specific feature.

#### How Phrase Detection Works

There are two main approaches: statistical and model-based.

**Statistical Approach: Pointwise Mutual Information (PMI)**

PMI measures how much more likely two words appear together versus independently:

PMI(word1, word2) = log [ P(word1, word2) / (P(word1) × P(word2)) ]

- **High PMI**: Words appear together much more than chance (e.g., "machine learning," PMI ≈ 8-10)
- **Low PMI**: Words appear together at random rates (e.g., "the learning," PMI ≈ 0-2)

You set a threshold (e.g., PMI > 5) and join word pairs exceeding it.

\`\`\`mermaid
graph LR
    A["Candidate: machine learning"] --> B[Count frequency]
    B --> C["P(machine, learning) = 0.002"]
    B --> D["P(machine) = 0.01"]
    B --> E["P(learning) = 0.015"]
    C --> F["PMI = log(0.002 / 0.00015) = 2.73"]
    D --> F
    E --> F
    F --> G[High PMI  to  Join!]
    style G fill:#81c784
\`\`\`

**Statistical Approach: T-Score**

T-score considers both association strength and frequency. It's more robust than PMI for common phrases:

t-score = [P(word1, word2) - P(word1) × P(word2)] / sqrt(P(word1, word2))

T-score prevents rare coincidental co-occurrences from getting high scores (a problem with PMI).

**Model-Based Approach**

Train a classifier to predict whether a bigram is a phrase:
- **Features**: PMI, frequency, POS tags, syntactic patterns
- **Labels**: Human-annotated phrase/non-phrase
- **Prediction**: Apply trained model to new bigrams

Libraries like spaCy use hybrid approaches combining statistics and learned patterns.

#### Iterative Phrase Detection

Once you've detected 2-word phrases, you can iterate to find longer phrases:

**Iteration 1**: Detect 2-word phrases
- "machine learning"  to  "machine_learning"
- "natural language"  to  "natural_language"

**Iteration 2**: Detect 3-word phrases from modified corpus
- "natural_language processing"  to  "natural_language_processing"

**Iteration 3**: Continue for even longer phrases
- "artificial_neural_network_architecture"

Each iteration compounds phrases found in previous iterations.

#### When to Use Phrase Detection

**Information Retrieval Systems**: Essential for accurate search. Users search for phrases, not just individual words.

**Topic Modeling**: Dramatically improves interpretability. Topics about "machine_learning," "deep_learning," "neural_networks" are much clearer than topics with "machine," "deep," "neural" scattered across multiple topics.

**Entity-Heavy Domains**: Medical texts ("coronary artery disease"), legal texts ("breach of contract"), scientific texts ("polymerase chain reaction") are full of technical phrases.

**Feature Engineering**: Before building TF-IDF or bag-of-words features, detect phrases to create semantically coherent features.

**Document Clustering**: Phrases provide more discriminative features than individual words. Documents about "New_York" cluster more accurately than documents with separate "New" and "York" tokens.

#### Common Pitfalls and Solutions

**Problem: Over-detection**
Statistical methods might identify non-phrases that happen to co-occur frequently in your specific corpus. "The following" might have high PMI in technical writing but isn't a meaningful phrase.

**Solution**: Use POS tag filters (e.g., require NOUN+NOUN or ADJ+NOUN patterns), set minimum frequency thresholds, manually review top detected phrases.

**Problem: Domain-specific phrases missed**
General-purpose detectors might miss domain-specific terminology that's rare in general corpora but important in your domain.

**Solution**: Curate domain-specific phrase lists, combine statistical detection with domain dictionaries, use domain-adapted models.

**Problem: Ambiguous phrases**
"Big Apple" could mean New York City or just a large apple, depending on context. Phrase detection typically doesn't handle such ambiguity.

**Solution**: Use context-aware models (neural approaches), accept some ambiguity as inevitable, manually curate critical ambiguous cases.

#### Practical Implementation

Using gensim's Phrases model (a popular Python implementation):

\`\`\`python
from gensim.models import Phrases
from gensim.models.phrases import Phraser

# Train phrase detector on sentences
sentences = [["machine", "learning", "is", "awesome"],
             ["deep", "learning", "uses", "neural", "networks"],
             ["machine", "learning", "and", "deep", "learning"]]

# Detect bigrams
bigram = Phrases(sentences, min_count=1, threshold=1)
bigram_phraser = Phraser(bigram)

# Apply to new sentences
result = bigram_phraser[["machine", "learning", "is", "great"]]
# Output: ['machine_learning', 'is', 'great']
\`\`\`

#### Performance Considerations

Phrase detection is relatively fast—it requires:
1. **N-gram counting**: Linear in corpus size
2. **PMI/t-score computation**: O(vocab_size²) but well-optimized
3. **Threshold application**: Linear in n-gram count

For 1 million documents, phrase detection typically takes minutes to hours depending on vocabulary size and corpus complexity. It's a one-time preprocessing cost that pays dividends in downstream task performance.

#### Evaluation

How do you know if phrase detection is working well?

**Intrinsic Evaluation**: Sample detected phrases and manually assess whether they're meaningful units. A good detector should:
- Catch most named entities and compound nouns
- Avoid nonsensical combinations
- Balance precision (detected phrases are real) and recall (real phrases are detected)

**Extrinsic Evaluation**: Measure downstream task performance with and without phrase detection. Does topic modeling produce more coherent topics? Does classification accuracy improve? Does search relevance increase?

#### Alternative: Using Pre-trained Models

Instead of statistical phrase detection, you can use:
- **Named Entity Recognition**: Detects entities like people, places, organizations
- **Noun Phrase Chunking**: Identifies syntactic noun phrases
- **Pre-segmented text**: Some domains (biomedical, legal) have standardized terminology lists

These approaches are more accurate but require more resources (trained models, domain knowledge).

#### The Bottom Line

Phrase detection is a powerful preprocessing step that transforms word sequences into semantic units. It improves representation quality, enhances interpretability, and boosts downstream task performance. While modern embeddings and transformers can partially compensate by learning phrase-like representations, explicit phrase detection remains valuable for classical NLP approaches, topic modeling, and information retrieval systems. The computational cost is modest, and the semantic improvements are often substantial—making it a high-value preprocessing technique for many NLP applications.`
        },
        {
          id: 26,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2} duration={0.8}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros <MermaidPopover diagram={`graph LR
    A[Phrase Detection] --> B[Better Semantics]
    A --> C[Reduces Fragmentation]
    A --> D[Improves Retrieval]
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784`} />
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Better semantics</li>
                    <li>Reduces fragmentation</li>
                    <li>Improves retrieval and topics</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons <MermaidPopover diagram={`graph LR
    A[Challenges] --> B[Threshold Tuning]
    A --> C[Domain Dependence]
    A --> D[False Matches]
    style A fill:#ffcdd2
    style B fill:#ffcdd2
    style C fill:#ffcdd2
    style D fill:#ffcdd2`} />
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Threshold tuning</li>
                    <li>Domain dependence</li>
                    <li>False positives/negatives</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#63105a',
          notes: `### 26. Phrase Detection - Pros and Cons

#### The Benefits of Phrase Detection
[pleased] Phrase detection brings powerful advantages to text preprocessing. [confidently] First, it dramatically improves semantics by recognizing that "New York City" is a single semantic unit, not three separate words. [lecture] This means your model doesn't waste capacity treating "New," "York," and "City" as independent features that happen to co-occur. [pleased] Second, it reduces vocabulary fragmentation. [conversational] Instead of having "machine," "learning," and "machine learning" as three separate features, you consolidate the bigram into one meaningful unit. [delighted] Third, it significantly improves retrieval and topic modeling. [storytelling] When users search for "ice cream," phrase detection ensures they match documents about the frozen dessert, not random documents containing both "ice" and "cream" separately.

[conversational] Think of phrase detection like recognizing compound words in German. [storytelling] "Schadenfreude" is one concept, not "Schaden" (damage) plus "Freude" (joy) independently. [pleased] Phrase detection does this for English multi-word expressions.

#### The Challenges to Consider
[cautiously] However, phrase detection has three notable challenges. [concerned] The biggest is threshold tuning. [disappointed] Set your PMI or frequency threshold too high, and you miss legitimate phrases like "ice cream" or "global warming." [concerned] Set it too low, and you incorrectly merge random co-occurrences like "the of" or "is a" that just happen to appear together. [conversational] Finding that sweet spot requires experimentation with your specific corpus.

[cautiously] Second, phrase detection is highly domain-dependent. [storytelling] A threshold that works perfectly for news articles might fail miserably for social media where writing is informal and fragmented. [lecture] Medical texts have different phrase patterns than legal documents. [disappointed] Finally, false positives and false negatives are inevitable. [concerned] You might incorrectly merge "New York" when the text means "new York newspaper" (two separate concepts), or you might fail to merge "Los Angeles" because it appears less frequently in your corpus.

[confidently] The key is understanding these trade-offs and validating your phrase detection with sample inspection. [lecture] Always review the top phrases it detects to ensure they make semantic sense. [pleased] In most applications, the semantic improvements outweigh the occasional errors, making phrase detection a valuable preprocessing step.`
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
                <GSAPAnimated animation="slideInLeft" delay={0.2} duration={0.9}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal
                    </h4>
                    <p>Fix misspellings to improve readability and model input quality.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph TD
    A[Misspelled Word] --> B[Generate Candidates]
    B --> C[Edit Distance 1-2]
    B --> D[Phonetic Similarity]
    C --> E[Rank by Frequency]
    D --> E
    E --> F[Context Check]
    F --> G[Best Correction]
    style A fill:#4fc3f7
    style G fill:#81c784`} />
                    </h4>
                    <p>Candidate generation via edit distance; ranking by frequency/context (language models).</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>User-generated content, noisy forms, query logs.</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4} duration={0.9}>
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
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#633510',
          notes: `### 27. Spell Correction

#### What Is Spell Correction?
[lecture] Spell correction is the process of automatically fixing typos and misspellings in text. [storytelling] Think about how many times you've typed "teh" instead of "the" or "recieve" instead of "receive." [conversational] Humans make these mistakes constantly, especially in informal settings like social media, text messages, or quick form submissions. [disappointed] While we can easily understand the intended meaning, machine learning models can't. [concerned] To them, "teh" is a completely different word from "the," and this confusion degrades model performance. [confidently] Spell correction bridges this gap.

#### How Spell Correction Works
[lecture] The magic of spell correction happens in three stages. [confidently] First, we detect that a word is likely misspelled by checking it against a dictionary. [conversational] If "recieve" isn't in our dictionary, it's probably wrong. [lecture] Second, we generate candidate corrections using edit distance, which measures how many single-character changes (insertions, deletions, substitutions) are needed to transform one word into another. [conversational] For "recieve," candidates within 1-2 edits might include "receive," "relieve," and "reprieve." [lecture] Third, we rank these candidates by frequency—how often does each word appear in normal text? [pleased] "Receive" is far more common than "reprieve," so it wins.

[confidently] Modern spell correctors go even further by using language models that consider context. [storytelling] If the sentence is "I didn't recieve the package," the model knows we're probably talking about receiving something, not relieving stress. [delighted] This context-aware approach dramatically reduces overcorrection errors.

#### When to Use Spell Correction
[pleased] Spell correction shines in three scenarios. [lecture] First, user-generated content like social media posts, product reviews, or forum discussions, where typos are rampant. [conversational] Second, noisy form data where users rush through input fields. [lecture] Third, search query logs where users expect the system to understand "iphone charegr" means "iPhone charger." [delighted] In these contexts, spell correction can boost downstream accuracy by 10-30%.

[cautiously] However, be cautious in domains with specialized vocabulary. [disappointed] In medical texts, "Ca" (calcium) shouldn't be corrected to "can." [concerned] In code, variable names like "usr" are intentional, not typos.`
        },
        {
          id: 28,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.2} duration={0.9}>
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
                    Cons <MermaidPopover diagram={`graph LR
    A[Risks] --> B[Overcorrection]
    A --> C[Language Specific]
    A --> D[Computation Cost]
    B --> E["desert → dessert"]
    C --> F["café → cafe?"]
    style A fill:#ffcdd2
    style B fill:#ffcdd2
    style C fill:#ffcdd2
    style D fill:#ffcdd2`} />
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Overcorrection risk</li>
                    <li>Language/locale-specific</li>
                    <li>Computational overhead</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#633510',
          notes: `### 28. Spell Correction - Pros and Cons

#### The Power of Spell Correction
[pleased] Spell correction delivers three major benefits to your NLP pipeline. [confidently] First, it improves both recall and precision in downstream tasks. [storytelling] For example, in sentiment analysis, correcting "I lovvve this productt!" to "I love this product!" ensures the sentiment model properly recognizes the positive emotion. [pleased] Second, it produces cleaner features for machine learning. [lecture] Instead of your model learning separate representations for "beautiful," "beautifull," and "beutiful," it learns one strong representation for the correctly spelled word. [delighted] Third, studies show spell correction can boost downstream accuracy by 5-15% in tasks like classification, search, and question answering.

[conversational] Think of spell correction as noise reduction for your data. [storytelling] Just as cleaning static from an audio recording makes music clearer, fixing spelling errors makes text patterns more recognizable to models.

#### The Pitfalls to Avoid
[cautiously] However, spell correction comes with significant risks. [concerned] The biggest danger is overcorrection, where the system incorrectly "fixes" words that were already correct. [disappointed] For example, correcting "desert" to "dessert" in "the Sahara desert" completely changes the meaning. [concerned] This is especially problematic with proper nouns, domain-specific terminology, and creative spellings. [storytelling] A medical spell checker might incorrectly change "Ca" (calcium) to "can," or a social media analyzer might ruin intentional slang like "gr8" or "luv."

[cautiously] Second, spell correction is heavily language and locale-specific. [disappointed] A dictionary tuned for American English will incorrectly flag British spellings like "colour" and "honour." [concerned] Third, there's computational overhead. [conversational] Running sophisticated language models for context-aware correction can be slow, especially on large datasets.

[confidently] The solution? [lecture] Always use confidence thresholds—only correct words when you're 95%+ confident. [conversational] Log all corrections for human review. [cautiously] And test thoroughly on your specific domain before deployment.`
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
                <GSAPAnimated animation="flipCard" delay={0.2} duration={1.0}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal
                    </h4>
                    <p>Correct systematic errors from optical character recognition.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph TD
    A[Scanned Image] --> B[OCR Engine]
    B --> C[Raw Text with Errors]
    C --> D["rn → m"]
    C --> E["l → I"]
    C --> F["0 → O"]
    D --> G[Confusion Matrix]
    E --> G
    F --> G
    G --> H[Corrected Text]
    style A fill:#4fc3f7
    style C fill:#ffcdd2
    style H fill:#81c784`} />
                    </h4>
                    <p>Rule-based replacements, confusion matrices, dictionaries, post-OCR language models.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>Scanned books, PDFs, historical documents.</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" delay={0.5} duration={1.0}>
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
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a6310',
          notes: `### 29. OCR Error Correction

#### Understanding OCR Errors
[lecture] OCR (optical character recognition) is the technology that converts images of text—like scanned documents, photos of signs, or PDFs—into digital text. [conversational] While modern OCR engines are impressive, they're far from perfect. [concerned] They make systematic, predictable errors based on visual similarities. [disappointed] The letters "rn" often get read as "m" because they look identical when squished together. Lowercase "L" becomes uppercase "I." The number "0" becomes the letter "O." [cautiously] Old or degraded documents are especially problematic, where faded ink, creases, or coffee stains create additional confusion.

[lecture] These aren't random typos like human misspellings. [confidently] They're systematic patterns based on visual ambiguity. [pleased] That's both the curse and the blessing of OCR errors—they're consistent enough that we can predict and correct them.

#### How OCR Error Correction Works
[confidently] OCR error correction leverages these systematic patterns. [lecture] First, we analyze our OCR output to identify common mistakes. [storytelling] We might discover that "m" frequently appears in nonsensical positions (like "mning" instead of "mining") while "rn" would make sense ("mining"). [lecture] We build a confusion matrix—a lookup table of likely character substitutions: "rn↔m," "l↔I," "0↔O," etc.

[confidently] Second, we apply rule-based replacements combined with dictionary validation. [storytelling] If "moming" isn't a real word but "morning" is, and we know "rn→m" is a common OCR error, we correct it. [pleased] For more sophisticated correction, we use post-OCR language models that understand context. [lecture] If the sentence is "The company's moming report," the model knows "morning report" is far more likely than "moming report" based on linguistic patterns.

#### When This Technique Matters
[pleased] OCR error correction is essential for three domains. [lecture] First, digitizing scanned books, especially older ones where print quality has degraded. [conversational] Second, processing business documents like contracts, invoices, or forms that were scanned rather than born-digital. [lecture] Third, working with historical archives where documents are decades or centuries old.

[delighted] The quality gains can be dramatic—reducing error rates from 10-20% down to 1-2% in well-tuned systems.`
        },
        {
          id: 30,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="rotateIn" delay={0.2} duration={1.0}>
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a6310',
          notes: `### 30. OCR Error Correction - Pros and Cons

#### Massive Quality Improvements
[delighted] OCR error correction delivers two game-changing benefits. [pleased] First, it can produce large quality gains specifically on OCR-generated text. [excited] We're talking about error rate reductions from 15% down to 2-3%, which transforms unusable text into highly reliable data. [storytelling] Imagine trying to search a database of scanned historical newspapers where 1 in 7 words is wrong—it would be nearly impossible to find relevant articles. [delighted] After OCR correction, that same database becomes searchable and analyzable.

[pleased] Second, it addresses domain-specific noise patterns that general spell checkers miss. [lecture] Medical documents might confuse "mg" with "rng," legal documents might mangle case numbers, and old typewritten text might consistently misread certain fonts. [confidently] By building correction models tailored to your specific document types, you handle these specialized errors that off-the-shelf tools can't touch.

#### The Investment Required
[cautiously] However, OCR error correction has three significant drawbacks. [concerned] First, it requires corpus-specific tuning. [disappointed] The confusion matrix that works perfectly for 19th-century newspapers will fail on modern receipts. [sigh] You need to analyze your specific OCR output, identify your unique error patterns, and build custom rules. [conversational] This isn't plug-and-play.

[cautiously] Second, residual errors always remain. [disappointed] Even the best OCR correction can't fix everything. [concerned] If the original scan was too degraded, or if the OCR engine completely hallucinated text, no amount of correction will recover the original meaning. [conversational] You might go from 15% error to 2%, but that final 2% can be stubborn.

[conversational] Third, there's significant setup effort. [lecture] You need gold-standard samples (manually corrected text), tools for pattern analysis, and an iterative refinement process. [cautiously] For small projects, this overhead might not be worth it. [confidently] For large-scale document digitization projects, it's absolutely essential.`
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
                <GSAPAnimated animation="slideInTop" delay={0.2} duration={0.9}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal
                    </h4>
                    <p>Expand contractions (e.g., "don't"  to  "do not") for clarity and handling negation.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph LR
    A["don't"] --> B[Regex Match]
    B --> C[Dictionary Lookup]
    C --> D["do not"]
    E["can't"] --> F[Regex Match]
    F --> G[Dictionary Lookup]
    G --> H["can not / cannot"]
    style A fill:#4fc3f7
    style E fill:#4fc3f7
    style D fill:#81c784
    style H fill:#81c784`} />
                    </h4>
                    <p>Regex + mapping dictionary; optional context-aware models.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>Sentiment, rule-based parsing, tasks expecting full forms.</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.4} duration={0.9}>
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
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#611063',
          notes: `### 31. Contraction Expansion

#### Why Expand Contractions?
[conversational] Contractions are shortened word combinations like "don't," "can't," "I'm," and "you're." [lecture] While perfectly natural in spoken and informal written English, they create challenges for text processing. [seriously] The biggest issue is negation handling. "Don't" contains the crucial word "not," but if your model treats "don't" as a single opaque token, it might miss the negation entirely. [storytelling] In sentiment analysis, "I don't like this movie" has the opposite meaning of "I like this movie," but that tiny "n't" makes all the difference.

[confidently] Expanding contractions makes negation explicit and consistent. It transforms "don't," "doesn't," "didn't," "won't," and "can't" into forms containing the word "not," which downstream models can more easily recognize and process. [pleased] It also reduces vocabulary size by consolidating variants—you don't need separate entries for "don't" and "do not."

#### How Contraction Expansion Works
[lecture] The implementation is straightforward but requires attention to detail. [instructively] First, we build a mapping dictionary containing common contractions and their expansions: "don't" → "do not," "can't" → "cannot," "I'm" → "I am," etc. [conversational] We need to include locale variants—British English has "shan't" (shall not) and "mayn't" (may not) that Americans rarely use.

[carefully] Second, we use regex patterns to match contractions while preserving casing. "Don't" should become "Do not," not "do not." [seriously] We need to handle apostrophes carefully, distinguishing between contractions ("it's" = "it is") and possessives ("John's car"—no expansion needed).

[thoughtfully] Third, we deal with ambiguity. "He'd" could mean "he had" or "he would." [conversational] Context matters: "He'd gone home" vs. "He'd like pizza." [lecture] Advanced systems use language models to disambiguate, but simple rule-based approaches work 90% of the time by analyzing the following word.

#### When Contraction Expansion Helps
[instructively] This technique is most valuable in three scenarios. First, sentiment analysis where negation is critical. Second, rule-based parsing systems that expect standardized grammatical forms. Third, formal text processing where you want consistent, expanded forms for readability or regulatory compliance.`
        },
        {
          id: 32,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2} duration={0.8}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros <MermaidPopover diagram={`graph TD
    A[Contraction Expansion] --> B[Clearer Negation]
    A --> C[Consistent Tokens]
    B --> D["don't → do not"]
    C --> E[Smaller Vocabulary]
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#81c784`} />
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#611063',
          notes: `### 32. Contraction Expansion - Pros and Cons

#### The Clear Benefits
[confidently] Contraction expansion offers two primary advantages. [instructively] First, it provides clearer negation and syntax. When you transform "don't," "won't," and "can't" into "do not," "will not," and "cannot," you make the negation explicit and impossible to miss. [storytelling] This is crucial for sentiment analysis—imagine a review saying "This phone isn't worth it" versus "This phone is not worth it." [pleased] The expanded form is unambiguous. [conversational] Similarly, expanding "I'm going" to "I am going" makes the subject-verb relationship crystal clear for parsers.

[enthusiastically] Second, expansion creates more consistent tokens across your corpus. [lecture] Instead of having separate vocabulary entries for "isn't," "ain't," and "is not" (which all express the same relationship), you consolidate to "is not." [pleased] This reduces vocabulary size and strengthens the signal for "not" as a negation marker. Your model learns one strong pattern instead of three weak ones.

#### The Trade-offs to Consider
[seriously] However, contraction expansion comes with three notable challenges. [thoughtfully] First, ambiguity is unavoidable. "He'd" could mean "he had" or "he would," and simple dictionary lookup can't tell the difference. [conversational] "He'd gone" (had) versus "He'd like" (would) require different expansions. [lecture] You either need context-aware models or accept some errors.

[carefully] Second, expansion may alter tone and formality. [conversational] Contractions signal informal, conversational writing. Expanding them makes text feel more formal and stiff. [storytelling] If you're analyzing social media where tone matters ("I'm SO not happy!" feels different from "I am SO not happy!"), expansion might lose important stylistic information.

[instructively] Third, this technique is locale-dependent. [lecture] British English uses contractions like "shan't" and "mustn't" more than American English. You need region-specific dictionaries, or you'll miss common patterns. [confidently] Despite these challenges, for most NLP tasks focused on meaning rather than style, the benefits outweigh the costs.`
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
                <GSAPAnimated animation="rotateIn" delay={0.2} duration={1.0}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal
                    </h4>
                    <p>Standardize numeric expressions for comparability and reduced sparsity.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph TD
    A["123,456"] --> B[Parse Format]
    C["123.456"] --> B
    D["one hundred"] --> B
    B --> E[Normalize]
    E --> F[NUM or 123456]
    G["$50"] --> H[Unit Detection]
    H --> I[50 USD]
    style A fill:#4fc3f7
    style C fill:#4fc3f7
    style D fill:#4fc3f7
    style F fill:#81c784
    style I fill:#81c784`} />
                    </h4>
                    <p>Parse numerals/words; normalize format; unit conversion; masking (e.g., "NUM").</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>De-identification, aggregation, generalization in models.</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.5} duration={1.0}>
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
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#631010',
          notes: `### 33. Number Normalization

#### The Challenge of Numeric Diversity
[conversational] Numbers appear in text in countless formats, creating massive vocabulary bloat and comparison challenges. [storytelling] Consider these equivalent expressions: "5000," "5,000," "5K," "five thousand," and "5 grand." [lecture] To a human, these all mean the same thing, but to a machine learning model, they're five completely different tokens. [seriously] This fragmentation weakens the model's ability to learn patterns around quantities.

[conversational] Similarly, currencies and units create chaos: "$100," "100 dollars," "100 USD," "€85," "£75"—all different prices for approximately the same thing, but represented inconsistently. [confidently] Number normalization solves this by standardizing how numbers appear in your text.

#### Normalization Strategies
[instructively] There are three main approaches to number normalization, each serving different purposes. [lecture] First, masking replaces all numbers with a placeholder token like "NUM." [conversational] "I have 5 cats" becomes "I have NUM cats." [enthusiastically] This is perfect for privacy (removing identifying information like ages or phone numbers) and for tasks where the specific value doesn't matter—you care that there's a quantity, not what it is.

[instructively] Second, standardizing converts different representations into one consistent format. [conversational] "5K" and "five thousand" both become "5000." [pleased] You keep the numeric value but eliminate format variations. This helps with aggregation and comparison—you can now find all documents mentioning quantities around 5000.

[lecture] Third, unit conversion standardizes measurements to common units. [conversational] "5 feet" becomes "1.52 meters," "$100" becomes "100 USD," "2 hours" becomes "120 minutes." [thoughtfully] This enables cross-unit comparison, though it requires maintaining conversion tables and handling ambiguities (does "oz" mean ounces or fluid ounces?).

#### When Number Normalization Matters
[confidently] This technique is essential in three contexts. [instructively] First, privacy and de-identification where you need to remove specific numbers (ages, SSNs, account numbers) while preserving text structure. Second, aggregation and analysis where you want to group documents by numeric ranges. Third, model generalization where you want the model to learn patterns about quantities without memorizing specific numbers.`
        },
        {
          id: 34,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2} duration={1.0}>
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
                    Cons <MermaidPopover diagram={`graph LR
    A[Challenges] --> B[Loss of Precision]
    A --> C[Unit Complexity]
    A --> D[Context Sensitivity]
    B --> E["$99.99 → $100?"]
    C --> F["2.5L vs 2.5lb"]
    style A fill:#ffcdd2
    style B fill:#ffcdd2
    style C fill:#ffcdd2
    style D fill:#ffcdd2`} />
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Potential loss of precision</li>
                    <li>Unit handling is tricky</li>
                    <li>Context-sensitive</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#631010',
          notes: `### 34. Number Normalization - Pros and Cons

#### The Power of Standardization
[enthusiastically] Number normalization delivers three significant benefits. [lecture] First, it improves model generalization. [storytelling] Instead of learning separate patterns for "5 dollars," "$5," "five bucks," and "5 USD," the model learns one unified pattern. [pleased] This means when it encounters a new context with "10 euros," it can leverage what it learned from dollar amounts. [confidently] The model focuses on the semantic relationships rather than memorizing specific numeric formats.

[instructively] Second, it eases matching and retrieval. [storytelling] If a user searches for documents mentioning "around 5000 employees," you want to match documents saying "5K employees," "five thousand workers," and "5,000 staff." [pleased] Number normalization makes this trivial—after normalization, they're all "5000." [enthusiastically] Third, vocabulary size drops dramatically. [lecture] Instead of having separate tokens for every possible number from 0 to infinity, plus all their format variations, you might just have one "NUM" token or a manageable set of standardized numeric representations.

#### The Complications to Navigate
[seriously] However, number normalization introduces three challenges. [carefully] First, there's potential loss of precision that matters in some contexts. [conversational] Rounding "$99.99" to "$100" might be fine for topic modeling but terrible for financial analysis. Converting "2.54 cm" to "1 inch" loses the precision of the original measurement. [thoughtfully] You need to decide how much precision to preserve based on your application.

[instructively] Second, unit handling is genuinely tricky. [conversational] Is "oz" ounces (weight) or fluid ounces (volume)? Does "2.5L" mean 2.5 liters or 2.5 pounds? [lecture] Context clues help ("2.5L of water" vs "2.5lb of beef"), but ambiguity is common. Building robust unit parsers requires extensive testing.

[seriously] Third, number normalization is highly context-sensitive. [conversational] In finance, dates like "Q3 2023" shouldn't be normalized. In chemistry, formulas like "H2O" shouldn't have their numbers masked. [lecture] Phone numbers, zip codes, and model numbers have special meaning. [carefully] You need careful rules about when to normalize and when to preserve the original form.`
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
                <GSAPAnimated animation="slideInLeft" delay={0.2} duration={0.8}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal
                    </h4>
                    <p>Control or remove emojis, symbols, control chars, and non-text artifacts.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph TD
    A[Raw Text] --> B{Unicode Category}
    B --> C[Letters] 
    B --> D[Emojis]
    B --> E[Control Chars]
    B --> F[Symbols]
    C --> G[Keep]
    D --> H[Whitelist/Blacklist]
    E --> I[Remove]
    F --> H
    H --> G
    style A fill:#4fc3f7
    style G fill:#81c784
    style I fill:#ffcdd2`} />
                    </h4>
                    <p>Use Unicode categories; whitelists/blacklists; regex filters or mappings.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>Formal documents, security sanitization, systems with limited character sets.</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4} duration={0.8}>
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
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#106063',
          notes: `### 35. Special Character Filtering

#### The Wild West of Text Data
[conversational] Modern text is full of special characters beyond standard letters and numbers. [enthusiastically] Social media posts contain emojis (😊, 🔥, 💯), symbols (★, ♥, →), and emoticons (:-), :P). [lecture] Web-scraped content includes HTML artifacts (&amp;, &nbsp;), control characters (tabs, newlines, zero-width spaces), and Unicode oddities (combining diacritics, right-to-left markers). [seriously] While some of these characters carry meaning, many are just noise that confuses models and breaks pipelines.

[confidently] Special character filtering gives you control over which characters to keep, remove, or replace. [thoughtfully] The key is making intentional decisions about what's signal versus noise for your specific application.

#### Filtering Strategies
[instructively] There are three main approaches to character filtering. [lecture] First, whitelist filtering keeps only explicitly allowed characters. [conversational] For example, keeping only ASCII letters, digits, and basic punctuation: [a-zA-Z0-9.,!?]. [confidently] This is aggressive but guarantees compatibility—perfect for systems that can't handle Unicode or need strict security controls. [seriously] However, it destroys foreign language text, emojis, and special symbols that might be meaningful.

[instructively] Second, blacklist filtering removes explicitly banned characters while keeping everything else. [conversational] You might remove control characters (\\x00-\\x1F), invisible Unicode (zero-width spaces), and specific problematic symbols. [lecture] This is less destructive but requires knowing what to ban. [thoughtfully] Third, category-based filtering uses Unicode character categories. You can keep all letters (\\p{L}), numbers (\\p{N}), and punctuation (\\p{P}) while removing symbols (\\p{S}), emojis, and control characters (\\p{C}). This works across languages while removing non-textual elements.

[conversational] Modern NLP increasingly preserves emojis because they carry strong sentiment and meaning. [storytelling] Removing 😠 from "This makes me 😠" loses crucial information. [carefully] Context matters.

#### When to Filter Aggressively
[instructively] Character filtering is essential in three scenarios. [lecture] First, formal document processing (legal, medical, financial) where you want clean, standardized text without decorative elements. Second, security sanitization where you need to prevent injection attacks or remove potentially malicious characters. Third, legacy systems with limited character encoding support (ASCII-only databases, old file formats).`
        },
        {
          id: 36,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="flipCard" delay={0.3} duration={1.0}>
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#106063',
          notes: `### 36. Special Character Filtering - Pros and Cons

#### The Benefits of Clean Text
[confidently] Special character filtering provides three key advantages. [lecture] First, it produces cleaner, more consistent tokens. [conversational] Instead of having variants like "hello★," "hello♥," and "hello—" treated as different words, you get just "hello." [pleased] This reduces vocabulary size and strengthens the signal around core words. [enthusiastically] Your model spends its capacity learning meaningful language patterns rather than memorizing decorative character combinations.

[instructively] Second, it prevents parsing and rendering issues. [seriously] Control characters and invisible Unicode can break tokenizers, crash regex engines, or cause display glitches. [confidently] Removing these problematic characters makes your pipeline more robust and predictable. [conversational] You won't encounter mysterious bugs where text looks empty but contains hidden zero-width characters.

[lecture] Third, character filtering mitigates security injection attacks. [seriously] Malicious users sometimes embed special Unicode characters to bypass filters, confuse parsers, or exploit rendering bugs. [confidently] By restricting to known-safe characters, you reduce your attack surface. [instructively] This is especially important for user-generated content that will be displayed on websites or processed by security-sensitive systems.

#### The Risk of Over-Filtering
[carefully] However, aggressive character filtering has two major downsides. [thoughtfully] First, you may remove meaningful signals, especially emojis and emoticons. [storytelling] In social media analysis, the difference between "Good morning" and "Good morning 😊" is substantial—the emoji completely changes the tone. [enthusiastically] Emoticons like :-) and :-( are sentiment gold. [lecture] Modern sentiment analyzers actually train on emojis because they're such reliable sentiment indicators. [seriously] Removing them throws away valuable data.

[seriously] Second, there's serious risk with language-specific characters. [lecture] If you whitelist only ASCII characters, you'll destroy all foreign language text. [conversational] French accents (é, è, à), German umlauts (ä, ö, ü), Spanish ñ, and Scandinavian characters (å, ø) are essential parts of those languages, not "special characters." [storytelling] Removing them turns "naïve" into "nave" and "façade" into "faade"—completely different words or nonsense. [carefully] Always consider your international user base before aggressive filtering.`
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
                <GSAPAnimated animation="bounceIn" delay={0.2} duration={1.0}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal
                    </h4>
                    <p>Remove template-like non-content (headers, footers, nav, ads).</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph TD
    A[Web Page] --> B[Parse HTML/DOM]
    B --> C[Header]
    B --> D[Navigation]
    B --> E[Main Content]
    B --> F[Sidebar Ads]
    B --> G[Footer]
    C --> H[Remove]
    D --> H
    F --> H
    G --> H
    E --> I[Keep]
    style A fill:#4fc3f7
    style E fill:#81c784
    style I fill:#81c784
    style H fill:#ffcdd2`} />
                    </h4>
                    <p>HTML/DOM parsing; text-density heuristics; boilerplate detectors (e.g., Boilerpipe, JusText).</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>Web/news scraping, emails, PDFs, templated reports.</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5} duration={0.9}>
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
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#632e10',
          notes: `### 37. Removing Boilerplate Text

#### The Boilerplate Problem
[conversational] When you scrape web pages, extract text from PDFs, or process emails, you get a lot more than just the core content. [lecture] You get navigation menus ("Home | About | Contact Us"), copyright footers ("© 2024 All Rights Reserved"), cookie disclaimers, advertisement blocks, social media sharing buttons ("Follow us on Twitter!"), and email signatures. [instructively] This is boilerplate—repetitive, template-like text that appears on many pages but contains little unique information.

[seriously] For content analysis, this boilerplate is pure noise. [storytelling] Imagine trying to analyze news articles, but every article includes "Breaking News | Latest Headlines | Subscribe Now" at the top. [conversational] Your topic models will think every article is about subscribing, and your word frequencies will be dominated by navigation terms rather than actual content. [confidently] Boilerplate removal extracts the meat and discards the wrapper.

#### Detection Techniques
[instructively] Boilerplate removal uses several clever techniques. [lecture] First, HTML/DOM parsing identifies structural elements. [conversational] HTML tags like &lt;nav&gt;, &lt;header&gt;, &lt;footer&gt;, &lt;aside&gt;, and class names like "advertisement," "sidebar," or "social-share" are strong signals of boilerplate. [pleased] By analyzing the DOM tree, we can identify and remove these sections before extracting text.

[instructively] Second, text-density heuristics measure how much actual text versus links and formatting exists in each block. [lecture] The main article has high text density—lots of words, few links. Navigation and footers have low text density—lots of short links, little prose. [conversational] Tools like Boilerpipe and JusText use these metrics to score each block and keep only high-density regions.

[thoughtfully] Third, pattern detection identifies repetitive text. [conversational] If "Sign up for our newsletter" appears at the bottom of 1000 scraped pages, it's boilerplate. If a specific copyright notice repeats, it's boilerplate. [confidently] By analyzing text repetition across your corpus, you can build custom boilerplate filters.

#### Critical Applications
[instructively] This technique is indispensable for three use cases. [lecture] First, web and news scraping where you're building text corpora from crawled content. Second, email processing where signatures, disclaimers, and threading artifacts pollute message bodies. Third, PDF and document extraction from templated reports with headers, footers, and repeated sections.`
        },
        {
          id: 38,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.2} duration={0.9}>
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
                    Cons <MermaidPopover diagram={`graph LR
    A[Risks] --> B[Remove Real Content]
    A --> C[Site-Specific Rules]
    A --> D[Complex Layouts]
    B --> E[Caption in sidebar?]
    C --> F[Maintenance burden]
    style A fill:#ffcdd2
    style B fill:#ffcdd2
    style C fill:#ffcdd2
    style D fill:#ffcdd2`} />
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Risk of removing content</li>
                    <li>Site-specific maintenance</li>
                    <li>Complex layouts</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#632e10',
          notes: `### 38. Removing Boilerplate Text - Pros and Cons

#### Dramatic Quality Improvements
[enthusiastically] Boilerplate removal delivers two massive benefits. [confidently] First, you get much cleaner corpora. [lecture] Instead of collections contaminated with "Click here," "Terms of Service," and "Copyright 2024," you have pure content that reflects actual documents. [pleased] This dramatically improves any corpus-level analysis. [conversational] Word frequencies become meaningful—the most common words are actually about your domain, not navigation terms. Co-occurrence statistics reflect real semantic relationships, not template accidents.

[enthusiastically] Second, boilerplate removal produces substantially better topic modeling and summarization performance. [lecture] Topic models like LDA can actually discover genuine themes instead of creating a "boilerplate topic" that clusters all documents together. [conversational] Summarization systems extract sentences from the actual article content rather than accidentally including "Subscribe to our newsletter" as a key point. [pleased] The improvement can be transformative—going from unusable outputs to highly relevant results.

[storytelling] Think of it like clearing away packaging to get to the product. [conversational] You wouldn't analyze Amazon packaging patterns to understand what people buy. Similarly, you shouldn't analyze template text to understand document content.

#### The Challenges of Accuracy
[carefully] However, boilerplate removal has three significant challenges. [seriously] First, there's genuine risk of removing actual content. [conversational] Some legitimate article text might appear in sidebars, be formatted like ads, or use the same CSS classes as navigation. [thoughtfully] Imagine a news article about social media that discusses "Follow us on Twitter"—is that boilerplate or content? [lecture] Image captions often appear in sidebar divs that look like boilerplate. Over-aggressive removal loses information.

[instructively] Second, you need site-specific maintenance. [conversational] Websites have wildly different HTML structures. Your rules for removing boilerplate from NYTimes.com might fail completely on a WordPress blog or a PDF converted to HTML. [lecture] Building robust, general-purpose boilerplate detectors requires constant testing and refinement across diverse sources.

[seriously] Third, complex or non-standard layouts confuse heuristics. [conversational] Single-page applications with dynamically loaded content, mobile-optimized pages, or creative web designs might not follow expected patterns. [carefully] Always validate your boilerplate removal on sample documents before processing your entire corpus.`
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
                <GSAPAnimated animation="rotateIn" delay={0.2} duration={1.0}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal
                    </h4>
                    <p>Eliminate exact/near-duplicate sentences to reduce bias and leakage.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph TD
    A[Sentence 1] --> B[Normalize]
    C[Sentence 2] --> D[Normalize]
    B --> E[Hash/Embed]
    D --> F[Hash/Embed]
    E --> G{Similarity > 0.95?}
    F --> G
    G -->|Yes| H[Remove Duplicate]
    G -->|No| I[Keep Both]
    style A fill:#4fc3f7
    style C fill:#4fc3f7
    style H fill:#ffcdd2
    style I fill:#81c784`} />
                    </h4>
                    <p>Hashing for exact dupes; MinHash/LSH or embeddings + cosine for near dupes.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>Dataset building, deduplication before training/evaluation.</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.5} duration={0.9}>
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
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#104163',
          notes: `### 39. Removing Duplicate Sentences

#### Why Duplicates Are Dangerous
[seriously] Duplicate sentences in your dataset create three serious problems. [instructively] First, they introduce bias. [storytelling] If the sentence "The product was excellent" appears 100 times and "The product was terrible" appears only once, your sentiment model will be biased toward positive sentiment—not because that reflects reality, but because of arbitrary duplication. [lecture] Second, duplicates cause data leakage. If identical sentences appear in both your training and test sets, you'll get artificially inflated performance metrics. Your model memorizes rather than generalizes. [conversational] Third, duplicates waste computational resources. Why train on the same sentence 50 times when once is enough?

[conversational] Duplication happens naturally in web scraping (quoted text, retweets, copy-paste journalism), document collections (repeated disclaimers, template sections), and multi-source aggregation. [confidently] Deduplication is essential hygiene for quality datasets.

#### Detection Methods
[instructively] There are two levels of duplicate detection. [lecture] For exact duplicates, we normalize the text (lowercase, strip punctuation, trim whitespace) and compute a hash. Any sentences with the same hash are identical. [pleased] This is fast and perfect for catching copy-paste duplication.

[instructively] For near-duplicates, we need approximate matching. [lecture] MinHash and LSH (locality-sensitive hashing) create signatures that similar sentences share, allowing efficient pairwise comparison even on millions of sentences. [conversational] Alternatively, we can compute sentence embeddings using models like Sentence-BERT and measure cosine similarity. [thoughtfully] If two sentences have similarity above 0.95 (a common threshold), they're essentially duplicates even if they differ by a word or two: "The cat sat on the mat" vs. "The cat sits on the mat."

[carefully] The key decision is setting the similarity threshold. [conversational] Too strict (0.99+) and you miss near-duplicates. Too loose (0.85) and you remove legitimately similar but different sentences. [instructively] The sweet spot is usually 0.92-0.97, but you should validate on your specific data.

#### Essential for Dataset Quality
[confidently] Deduplication is critical in three scenarios. [lecture] First, dataset building from web scrapes or social media where repetition is rampant. Second, before training machine learning models to prevent memorization and ensure fair evaluation. Third, in production systems where you're aggregating content from multiple sources and want to show users unique information.`
        },
        {
          id: 40,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2} duration={0.8}>
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#104163',
          notes: `### 40. Removing Duplicate Sentences - Pros and Cons

#### Massive Dataset Benefits
[enthusiastically] Deduplication provides four major advantages. [pleased] First, you get smaller, more manageable datasets. [conversational] Removing even 20-30% duplication can dramatically reduce storage costs and processing time. A 1TB corpus might shrink to 700GB after deduplication—that's real money saved on cloud storage and compute. [lecture] Second, you get cleaner datasets that better represent the actual distribution of language patterns. [instructively] Instead of having artificial repetition skew your statistics, you see what's genuinely common versus what's just copied around.

[pleased] Third, training becomes significantly faster. [conversational] Less data means fewer epochs to achieve the same coverage of unique examples. You might cut training time by 25-40% while maintaining or even improving model quality. [confidently] Fourth, deduplication reduces overfitting. [lecture] When your model sees diverse, unique examples rather than the same sentence repeated endlessly, it learns generalizable patterns instead of memorizing specific instances. Your test set performance becomes more reliable because there's no leakage from training data duplication.

#### The Trade-offs
[carefully] However, deduplication has three notable challenges. [seriously] First, there's computational cost, especially for near-duplicate detection. [conversational] Computing pairwise similarity for millions of sentences is expensive. [lecture] Even with efficient algorithms like MinHash/LSH, processing large corpora can take hours or days. You need to build this into your data preparation pipeline and budget accordingly.

[thoughtfully] Second, there's genuine risk of dropping legitimate repetitions. [conversational] Sometimes sentences naturally repeat for good reasons. News articles about the same event legitimately quote the same official statement. Scientific papers in the same field use standard methodological descriptions. Legal documents have repeated boilerplate that's actually meaningful in context. [carefully] Over-aggressive deduplication might remove these legitimate patterns.

[instructively] Third, threshold tuning is delicate. [conversational] Set it too strict, and you only catch exact duplicates, missing near-duplicates that waste space. [seriously] Set it too loose, and you accidentally merge sentences that are similar but semantically different: "The drug is safe" vs. "The drug is unsafe" might have high similarity if you're only looking at character overlap. [carefully] Always validate your threshold choice on labeled sample data.`
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
                <GSAPAnimated animation="slideInTop" delay={0.2} duration={0.9}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal
                    </h4>
                    <p>Split text into sentences for sentence-level processing.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph TD
    A[Dr. Smith arrived.] --> B{Period after Dr.?}
    B -->|Abbreviation| C[Don't Split]
    A --> D{Period after arrived?}
    D -->|Sentence End| E[Split Here]
    F["It costs $5.99."] --> G{Period after 99?}
    G -->|Sentence End| H[Split Here]
    style A fill:#4fc3f7
    style F fill:#4fc3f7
    style E fill:#81c784
    style H fill:#81c784`} />
                    </h4>
                    <p>Rule-based with abbreviations + ML/neural models to handle edge cases.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>Summarization, translation, sentiment at sentence granularity.</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="flipCard" delay={0.5} duration={1.0}>
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
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#511063',
          notes: `### 41. Sentence Boundary Segmentation

#### The Deceptively Difficult Task
[conversational] Sentence boundary detection sounds simple: split text whenever you see a period, question mark, or exclamation point. [storytelling] But English makes this surprisingly difficult. [lecture] Consider "Dr. Smith arrived at 5:00 P.M. and said he'd paid $5.99." [thoughtfully] Where are the sentence boundaries? [conversational] Not after "Dr." (that's an abbreviation). Not after "P.M." (also an abbreviation). Not after "$5.99" (that's a decimal). [instructively] Only after the final period is this actually a sentence boundary.

[conversational] Add quotes, ellipses (...), multiple punctuation (!?), and inconsistent capitalization, and you have a genuinely hard problem. [seriously] Many NLP tasks need accurate sentence splitting—you can't do summarization, translation, or sentiment analysis on incoherent text chunks. [confidently] Getting boundaries right is foundational.

#### Detection Approaches
[instructively] There are three main approaches to sentence segmentation. [lecture] First, rule-based systems use regular expressions combined with abbreviation lists. [conversational] They know "Dr.," "Mr.," "Inc.," "Ph.D.," and thousands of other abbreviations don't end sentences. [thoughtfully] They look ahead: if the next word is capitalized and the current sentence seems complete, split. If the next word is lowercase or the current context looks like an abbreviation, don't split. [pleased] These rules work surprisingly well—achieving 95%+ accuracy on clean text.

[instructively] Second, machine learning models (traditional) train classifiers on features around each period: previous word, next word, capitalization patterns, POS tags. [lecture] They learn subtle patterns that rules miss. [conversational] Third, neural models like those in spaCy use deep learning to consider broader context and handle ambiguous cases: "The U.S. is large. It has 50 states." vs. "He joined the U.S. Army and served proudly."

[thoughtfully] The tricky cases? [conversational] Quoted speech ("He said, 'Hello.' She smiled."), decimal numbers, URLs (www.example.com), ellipses indicating hesitation or omission, and missing punctuation in informal text (tweets, messages).

#### Essential for Document Processing
[confidently] Sentence segmentation is mandatory in three contexts. [lecture] First, summarization systems that extract or generate summaries need sentence-level granularity to produce coherent outputs. Second, translation systems translate sentence by sentence to maintain context boundaries. Third, any sentiment or classification task operating at sentence level rather than document level.`
        },
        {
          id: 42,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2} duration={1.0}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros <MermaidPopover diagram={`graph LR
    A[Benefits] --> B[Sentence-Level Features]
    A --> C[Manageable Chunks]
    A --> D[Better Alignment]
    B --> E[Translation]
    C --> F[Summarization]
    D --> G[Analysis]
    style A fill:#81c784
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784`} />
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#511063',
          notes: `### 42. Sentence Boundary Segmentation - Pros and Cons

#### Unlocking Sentence-Level Processing
[enthusiastically] Sentence segmentation provides three critical benefits. [instructively] First, it enables sentence-level features and analysis. [lecture] Many NLP tasks naturally operate on sentences: extracting the most important sentence for summarization, translating one sentence at a time to maintain coherence, analyzing sentiment per sentence to track tone changes throughout a document, or identifying which sentences contain specific entities or relationships. [seriously] Without accurate sentence boundaries, these tasks become impossible or severely degraded.

[instructively] Second, it creates manageable chunks for processing. [conversational] Documents can be thousands of words, but most NLP models work best on shorter inputs. [pleased] Sentences provide natural, semantically coherent units that fit model constraints while preserving meaning. A 5,000-word article becomes 200 processable sentences. [lecture] Third, sentence segmentation provides better downstream alignment. When you align translations, compare document versions, or track information flow, sentence-level alignment is far more accurate than arbitrary character-based chunking.

[storytelling] Think of sentences as the natural atomic units of written communication. [conversational] Just as chemistry breaks matter into molecules, NLP breaks text into sentences to understand structure and meaning.

#### The Accuracy Challenges
[carefully] However, sentence segmentation faces two significant challenges. [seriously] First, noisy text with missing or inconsistent punctuation devastates accuracy. [conversational] Social media posts, text messages, and informal writing often lack proper punctuation: "hey how are you I'm doing great thanks for asking btw did you see that movie." [thoughtfully] Where are the sentence boundaries? There are none marked. [lecture] The segmenter must guess based on capitalization, length, or grammar—all unreliable in informal text. Even with punctuation, typos and autocorrect errors create confusion.

[instructively] Second, multilingual challenges are substantial. [lecture] Different languages have different sentence boundary conventions. Japanese and Chinese use different punctuation marks (。). Many languages don't capitalize the first word of sentences. Some languages write right-to-left or use non-Latin scripts. [seriously] A segmenter trained on English will fail completely on Thai or Arabic. [conversational] You need language-specific models or universal neural models trained on diverse multilingual data. [carefully] Even then, code-switching (mixing languages in one text) creates edge cases that confuse systems.`
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
                <GSAPAnimated animation="scaleIn" delay={0.2} duration={1.0}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Goal
                    </h4>
                    <p>Identify language and route/filter text accordingly.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      How It Works <MermaidPopover diagram={`graph TD
    A[Mixed Text] --> B[Character n-grams]
    B --> C[Frequency Analysis]
    C --> D{Language Classifier}
    D --> E[English - 0.85]
    D --> F[Spanish - 0.10]
    D --> G[French - 0.05]
    E --> H[Route to EN Pipeline]
    style A fill:#4fc3f7
    style E fill:#81c784
    style H fill:#81c784`} />
                    </h4>
                    <p>Character n-grams with probabilistic classifiers (e.g., fastText, CLD3), sometimes with confidence scores.</p>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      When to Use
                    </h4>
                    <p>Multilingual corpora; language-specific pipelines or content moderation.</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="rotateIn" delay={0.5} duration={1.0}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                      Steps
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Pick detector (fastText, CLD3)</li>
                      <li>Set confidence threshold</li>
                      <li>Detect per document/sentence</li>
                      <li>Filter or route</li>
                      <li>Monitor code-switching</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#635f10',
          notes: `### 43. Language Detection and Filtering

#### The Multilingual Reality
[conversational] The internet is multilingual, and so is your data. [lecture] Web scrapes, social media streams, customer support tickets, and user-generated content contain dozens or hundreds of languages mixed together. [instructively] If you're building an English-only NLP system, you need to filter out non-English text. If you're building multilingual systems, you need to route each document to the appropriate language-specific pipeline. [confidently] Language detection makes this possible.

[seriously] The challenge is identifying language from potentially short, noisy text without relying on metadata. [conversational] A tweet might be 15 words. An Instagram comment might be 5 words. [instructively] You need fast, accurate language detection that works on minimal input.

#### Detection Technology
[lecture] Language detection works by analyzing character patterns that are distinctive to each language. [enthusiastically] The key insight is that different languages use different character combinations (n-grams). [conversational] English frequently uses "th," "ing," "ed," "tion." Spanish loves "ción," "ía," "ar," "que." German has "sch," "ung," "ich," "en." Japanese uses hiragana, katakana, and kanji. [pleased] These patterns are highly discriminative.

[instructively] Modern detectors like fastText and CLD3 (Compact Language Detector 3) use character n-grams (2-5 characters) as features for probabilistic classifiers. [lecture] They've been trained on millions of documents in 100+ languages. [conversational] Given input text, they compute n-gram frequencies and predict the most likely language along with a confidence score: "English: 0.95," "Spanish: 0.03," "French: 0.02."

[enthusiastically] The beauty of character-based detection is that it works even when you don't understand the language. [lecture] You're not looking for specific words; you're looking for statistical patterns in character usage. [confidently] This makes it robust, fast, and language-agnostic.

#### Critical Applications
[instructively] Language detection is essential in three scenarios. [lecture] First, building clean monolingual corpora from multilingual sources. If you're training an English sentiment analyzer, you need to filter out Spanish, French, and Chinese documents. [conversational] Second, routing in production systems. When a customer support ticket arrives, detect its language and route it to agents who speak that language or to language-specific processing pipelines. Third, content moderation where you need to apply language-specific rules or models.`
        },
        {
          id: 44,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.2} duration={0.9}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros <MermaidPopover diagram={`graph TD
    A[Language Detection] --> B[Clean Datasets]
    A --> C[Correct Routing]
    A --> D[Better Performance]
    B --> E[Monolingual Corpora]
    C --> F[Right Model/Agent]
    D --> G[Optimized Processing]
    style A fill:#4fc3f7
    style B fill:#81c784
    style C fill:#81c784
    style D fill:#81c784`} />
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#635f10',
          notes: `### 44. Language Detection and Filtering - Pros and Cons

#### Building Better Systems
[enthusiastically] Language detection provides three powerful benefits. [instructively] First, it enables building cleaner monolingual datasets. [lecture] When you scrape the web or aggregate content from multiple sources, you inevitably get linguistic contamination. [conversational] An English corpus might contain 5-10% non-English documents that slipped through. [confidently] Language detection filters these out, ensuring your English sentiment analyzer trains on actual English, not a mix of languages that will confuse the model and degrade performance.

[instructively] Second, it enables correct model routing in production. [lecture] Modern NLP systems use language-specific models because one model can't perform equally well across all languages. [conversational] When a user query or document arrives, language detection routes it to the appropriate model: English queries go to the English Q&A system, Spanish queries go to the Spanish system, etc. [pleased] This ensures optimal performance for each language rather than compromising with a mediocre multilingual model.

[enthusiastically] Third, overall system performance improves dramatically. [lecture] Language-specific processing (stemming, stopword removal, named entity recognition) works far better when you know the language. [seriously] Trying to apply English NLP tools to German text produces garbage. [confidently] Language detection makes the entire pipeline more accurate and reliable.

#### The Edge Cases and Limitations
[carefully] However, language detection faces three significant challenges. [seriously] First, short texts are genuinely difficult. [conversational] A 5-word Instagram comment or 10-word SMS message doesn't provide enough character n-gram evidence for confident detection. [thoughtfully] The detector might see "el" and guess Spanish, but "el" also appears in English words like "element." [instructively] Short texts require higher confidence thresholds and often remain ambiguous.

[instructively] Second, code-switching—where people mix languages within a single text—breaks traditional detectors. [storytelling] "I'm going to la playa today with mis amigos" mixes English and Spanish. [conversational] Most detectors will pick the dominant language, but you're losing important information about the bilingual nature of the text. [lecture] Modern systems need segment-level detection, not just document-level.

[carefully] Third, similar scripts and closely related languages confuse models. [conversational] Indonesian and Malay are nearly identical. Serbian and Croatian are mutually intelligible. Norwegian, Swedish, and Danish share huge vocabularies. Czech and Slovak are very similar. [seriously] Detectors often struggle with these cases, requiring specialized models or accepting some classification errors. [warmly] Always validate detection quality on your specific language pairs.`
        }
      ]
    }
  ]
};

