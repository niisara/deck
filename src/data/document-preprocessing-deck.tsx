import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

export const documentPreprocessingDeck: Deck = {
  id: 'document-preprocessing-deck',
  name: '17 Document Preprocessing Techniques',
  description: 'A practical cheat sheet for NLP and data processing pipelines',
  category: 'NLP',
  theme: 'moon',
  kenBurns: true,
  backgroundImages: [
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1920&q=80',
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1920&q=80',
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
          title: '17 Document Preprocessing Techniques',
          content: (
            <div style={{ color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0} duration={1}>
                <h2 style={{}}>A practical cheat sheet for NLP and data processing pipelines</h2>
              </GSAPAnimated>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', marginTop: '30px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ textAlign: 'center' }}>
                    <SvgIcon iconName="duo-file-lines" sizeName="4x" style={{ color: '#e74c3c' }} />
                    <p style={{ marginTop: '10px', fontSize: '0.8em' }}>Raw</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.5}>
                  <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
                </GSAPAnimated>
                <GSAPAnimated animation="rotateIn" delay={0.7} duration={1}>
                  <div style={{ textAlign: 'center' }}>
                    <SvgIcon iconName="duo-gears" sizeName="4x" style={{ color: '#f39c12' }} />
                    <p style={{ marginTop: '10px', fontSize: '0.8em' }}>Process</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.9}>
                  <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={1.1}>
                  <div style={{ textAlign: 'center' }}>
                    <SvgIcon iconName="duo-sparkles" sizeName="4x" style={{ color: '#2ecc71' }} />
                    <p style={{ marginTop: '10px', fontSize: '0.8em' }}>Clean</p>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="fadeIn" delay={1.3}>
                <p style={{ fontSize: '2rem', margin: '0px' }}>
                  <strong>Goal:</strong> Provide a clean, consistent pipeline for high-quality retrieval, modeling, and analytics
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.5}>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 17 Document Preprocessing Techniques
[cheerfully] Welcome everyone! [excited] Today we're diving into seventeen practical document preprocessing techniques that you absolutely need to know. Whether you're building a search engine, training a machine learning model, or just trying to make sense of messy text data, these techniques will be your best friends.

####  Why Preprocessing Matters
[conversational] Think about it this way: [storytelling] imagine you're trying to bake a cake, but your ingredients are all over the place. Some flour is clumped together, your sugar has weird lumps, and there's packaging material mixed in. [playfully] You wouldn't just throw everything into the bowl, right? You'd clean and prepare each ingredient first. [confidently] That's exactly what preprocessing does for text data. We take raw, messy documents and transform them into clean, consistent text that our models and algorithms can actually work with.

####  The Journey We're Taking
[enthusiastically] Picture this flow in your mind. [lecture] We start with **raw documents**—maybe they're scraped from websites, extracted from PDFs, or pulled from databases. These documents are full of noise, formatting issues, duplicates, and all sorts of problems. Then we apply our **processing techniques**—seventeen different tools in our toolbox—to clean, normalize, and enrich this data. [pleased] Finally, we get **clean, structured text** that's ready for high-quality retrieval, machine learning, or analytics.

####  Our Goal Today
[warmly] By the end of this presentation, you'll have a complete cheat sheet of preprocessing techniques. [confidently] Each one comes with a clear goal, step-by-step instructions, and guidance on when to use it. You'll know exactly which techniques to apply for your specific use case. [energetic] Let's get started by looking at what we'll cover.`
        },
        {
          id: 2,
          title: 'Table of Contents',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <p style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.6rem' }}>
                  Each technique includes <strong>Goal</strong>, <strong>How It Works</strong>, <strong>When to Use</strong>, <strong>Implementation Steps</strong>, <strong>Pros</strong>, and <strong>Cons</strong>
                </p>
              </GSAPAnimated>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c' }}>
                      <SvgIcon iconName="duo-broom" sizeName="2x" style={{ margin: '0px 0px 4px' }} darkModeInvert={true} />
                      Content Cleaning (1-5)
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>1. Remove Boilerplate Noise</li>
                      <li>2. Deduplicate Repeated Text</li>
                      <li>3. Normalize Whitespace & Formatting</li>
                      <li>4. Convert Tables to Structured Text</li>
                      <li>5. OCR Cleanup</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3498db', marginTop: '15px' }}>
                      <SvgIcon iconName="duo-scissors" sizeName="2x" style={{ margin: '0px 0px 4px' }} darkModeInvert={true} />
                      Text Segmentation (6-8)
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>6. Sentence Boundary Detection</li>
                      <li>7. Semantic Chunking</li>
                      <li>8. Contextual Chunk Linking (Parent–Child)</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.5} duration={0.8}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9b59b6' }}>
                      <SvgIcon iconName="duo-text" sizeName="2x" style={{ margin: '0px 0px 4px' }} darkModeInvert={true} />
                      Text Normalization (9-11)
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>9. Text Normalization</li>
                      <li>10. Light Stopword Trimming</li>
                      <li>11. Lemmatization / Stemming</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1abc9c', marginTop: '15px' }}>
                      <SvgIcon iconName="duo-tags" sizeName="2x" style={{ margin: '0px 0px 4px' }} darkModeInvert={true} />
                      Metadata Enrichment (12-13)
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>12. Keyphrase Extraction</li>
                      <li>13. Entity Tagging (NER)</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.7}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f39c12' }}>
                      <SvgIcon iconName="duo-filter" sizeName="2x" style={{ margin: '0px 0px 4px' }} darkModeInvert={true} />
                      Quality & Enhancement (14-17)
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>14. Remove Dead Chunks</li>
                      <li>15. Chunk Summary Metadata</li>
                      <li>16. Domain Dictionary / Synonym Normalization</li>
                      <li>17. Temporal Labeling / Version Tagging</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="bounceIn" delay={0.9} duration={1}>
                <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.1em', fontWeight: 'bold' }}>
                  Total: 17 preprocessing techniques
                </p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Table of Contents
[conversational] Let's take a bird's-eye view of all seventeen techniques we'll be covering today. [confidently] I've organized them into four logical categories to make them easier to understand and remember.

####  Four Major Categories
[lecture] We're breaking these techniques down into four groups. First, **Content Cleaning**—techniques one through five—where we remove noise and fix basic formatting issues. Next, **Text Segmentation**—techniques six through eight—where we break documents into meaningful chunks. Then **Text Normalization**—techniques nine through eleven—where we standardize the text format. [pleased] Finally, **Metadata Enrichment and Quality Enhancement**—techniques twelve through seventeen—where we add valuable information and remove low-quality content.

####  Content Cleaning (Techniques 1-5)
[energetic] Let's start with the basics. Technique one: **Remove Boilerplate Noise**. [conversational] This is all about getting rid of headers, footers, navigation menus, and copyright notices that add no value. Technique two: **Deduplicate Repeated Text**. [playfully] Ever scraped a website and found the same paragraph appearing three times? We'll fix that. Technique three: **Normalize Whitespace and Formatting**. Multiple spaces, weird line breaks, inconsistent indentation—all gone. Technique four: **Convert Tables into Structured Text**. Tables are great for humans but terrible for most text algorithms, so we transform them into readable sentences. [confidently] And technique five: **OCR Cleanup**, which fixes those annoying errors that come from scanning physical documents.

####  Text Segmentation (Techniques 6-8)
[lecture] Moving on to segmentation. Technique six: **Sentence Boundary Detection**. [conversational] This helps us identify where sentences actually end, which is trickier than you might think—think about abbreviations like "Dr." or "Inc." Technique seven: **Semantic Chunking**, where we intelligently split documents based on meaning rather than arbitrary character counts. [confidently] And technique eight: **Contextual Chunk Linking**, also known as parent-child relationships, which helps us maintain context when we split documents.

####  Text Normalization & Metadata Enrichment
[lecture] The next group includes technique nine through thirteen. We've got **Text Normalization** for consistent formatting, **Light Stopword Trimming** to remove filler words carefully, and **Lemmatization and Stemming** to reduce words to their root forms. [enthusiastically] Then we add value with **Keyphrase Extraction** to identify the most important terms, and **Entity Tagging** through NER 👉 'en-ee-are' or Named Entity Recognition to identify people, places, organizations, and dates.

####  Quality & Enhancement (Techniques 14-17)
[confidently] Finally, our last four techniques focus on quality control and enhancement. **Remove Dead Chunks** eliminates content with zero information value. **Chunk Summary Metadata** adds AI-generated summaries to help with retrieval. **Domain Dictionary** normalizes industry-specific jargon and synonyms. [pleased] And **Temporal Labeling** tracks when information was created or last updated.

####  Comprehensive Coverage
[warmly] Each of these seventeen techniques comes with six components: the goal, how it works, when to use it, implementation steps, pros, and cons. You'll walk away with everything you need to actually implement these in your projects. [excited] Now let's dive into our first technique!`
        }
      ]
    },
    {
      id: 'technique-1',
      title: '1. Remove Boilerplate Noise',
      slides: [
        {
          id: 3,
          title: '1. Remove Boilerplate Noise',
          icon: { name: 'duo-broom' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                      Goal / Problem It Solves
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Strip nav bars, ads, cookie banners, headers/footers, legal boilerplate</li>
                      <li>Extract main content from noisy web pages and documents</li>
                      <li>Reduce document noise before processing/embedding</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                      How It Works
                      <MermaidPopover
                        title="Boilerplate Removal Process"
                        diagram={`flowchart LR
    A["📄 Raw HTML/PDF"] --> B["🔍 Parse DOM Structure"]
    B --> C["📊 Content Density Analysis"]
    C --> D["🎯 Identify Main Content"]
    D --> E["🧹 Remove Low-Signal Blocks"]
    E --> F["✅ Clean Content"]
    style A fill:#4fc3f7,color:#000
    style F fill:#81c784,color:#000`}
                      />
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>DOM/content-density methods (Readability, Trafilatura, Boilerpipe)</li>
                      <li>XPath/CSS selectors for targeted extraction</li>
                      <li>Heuristic text density analysis to identify main content</li>
                      <li>ML-based classification of content vs. boilerplate blocks</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                      When to Use
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Web-scraped pages with navigation, ads, footers</li>
                      <li>PDFs with repeated page headers/footers</li>
                      <li>HTML exports from content management systems</li>
                      <li>Early in the preprocessing pipeline before chunking</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                      Implementation Steps
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Parse HTML/PDF into DOM structure</li>
                      <li>Identify main content nodes via density/layout analysis</li>
                      <li>Remove low-signal blocks (navigation, ads, etc.)</li>
                      <li>Sanitize remaining HTML tags</li>
                      <li>Preserve important structural elements (headings, links)</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Remove Boilerplate Noise

#### The Core Problem
[conversational] When you scrape content from the web or extract text from documents, you rarely get just the content you care about. [disappointed] Instead, you get everything: navigation menus, cookie consent banners, advertisements, repeated headers and footers, legal disclaimers, and all sorts of clutter. [storytelling] Think of it like trying to read a newspaper article, but the article is buried under layers of ads, subscription prompts, and navigation links. [seriously] This noise doesn't just waste space, it actively degrades your RAG system's performance by diluting the meaningful content with irrelevant information.

#### What This Technique Accomplishes
[confidently] Remove Boilerplate Noise is your first line of defense against content pollution. The goal is simple: strip away everything that isn't core content and keep only what matters. We're talking about eliminating navigation bars, advertisements, cookie banners, page headers and footers, and legal boilerplate text. [pleased] The result is clean, focused content that's ready for embedding and retrieval. This dramatically improves the signal-to-noise ratio in your document collection, which means better search results and more relevant context for your language model.

#### How It Works
[lecture] Let me walk you through the mechanics of boilerplate removal. There are several proven approaches, and most production systems combine multiple techniques for best results.

\`\`\`mermaid
flowchart LR
    A["📄 Raw HTML/PDF"] --> B["🔍 Parse DOM Structure"]
    B --> C["📊 Content Density Analysis"]
    C --> D["🎯 Identify Main Content"]
    D --> E["🧹 Remove Low-Signal Blocks"]
    E --> F["✅ Clean Content"]
    style A fill:#4fc3f7,color:#000
    style F fill:#81c784,color:#000
\`\`\`

[conversational] First, you have DOM-based methods and content-density algorithms. Tools like Readability, Trafilatura 👉 (traf-ih-LAH-chu-rah), and Boilerpipe 👉 (BOY-ler-pipe) analyze the structure of web pages to identify where the main content lives. They look at things like text density, the number of links versus regular text, paragraph length, and structural patterns. [confidently] The idea is that real content tends to have longer paragraphs, fewer links, and sits in specific parts of the page structure.

[lecture] Second, you can use XPath 👉 (EX-path) or CSS selectors for targeted extraction when you know the page structure. If you're scraping from a consistent source, you can write rules that say "the main content is always in this div with this class name, and ignore everything else." This is incredibly efficient but requires you to maintain those rules if the website changes.

Third, there's heuristic 👉 (hyoo-RIS-tik) text density analysis. This approach examines the ratio of text to HTML tags, looks for repeated patterns, and identifies blocks that appear across multiple pages. Navigation menus and footers tend to be nearly identical across pages, so they stand out as candidates for removal.

[confidently] Finally, more sophisticated systems use machine learning-based classification. These models are trained to distinguish between content blocks and boilerplate blocks by learning patterns from thousands of labeled examples. They can handle edge cases that rule-based systems miss.

#### When to Use This Technique
[firmly] You should deploy boilerplate removal early in your preprocessing pipeline, ideally right after you fetch the raw content and before you do any chunking or embedding. [conversational] It's essential when working with web-scraped pages that have navigation elements, advertisements, and footers. It's equally valuable for PDFs with repeated page headers and footers, especially academic papers or reports where every page has the same header information. HTML exports from content management systems often include tons of metadata and structural markup that you don't need. [pleased] By cleaning this up front, you reduce the size of your document store and improve retrieval quality across the board.

#### Practical Implementation Steps
[lecture] Here's how you implement this in practice. Start by parsing your HTML or PDF into a DOM structure so you can analyze the document's hierarchy and relationships between elements. Next, run your content density analysis or apply your extraction rules to identify the main content nodes. This might involve scoring each section based on text density, link density, and structural position. Then remove the low-signal blocks like navigation, ads, sidebars, and footers. [cautiously] After removal, sanitize any remaining HTML tags, but be careful to preserve important structural elements like headings, which provide valuable context, and links, which might be references or citations you want to keep. [confidently] The output should be clean text with just enough structure to maintain readability and context.

#### Looking Ahead
[conversational] With boilerplate removed, your content is cleaner, but we're not done yet. Next, we'll examine the specific pros and cons of this technique and when you might need to adjust your approach based on your use case.`
        },
        {
          id: 4,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                    Pros
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Higher signal-to-noise ratio in document content</li>
                    <li>Fewer tokens processed in downstream tasks</li>
                    <li>Better retrieval quality with focused content</li>
                    <li>Reduces repetitive elements across multiple pages</li>
                  </ul>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                    Cons
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Risk of removing valuable content in sidebars</li>
                    <li>May require site-specific tuning for best results</li>
                    <li>Multilingual content may present edge cases</li>
                    <li>Highly dynamic sites can challenge heuristic approaches</li>
                  </ul>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Pros and Cons - Remove Boilerplate Noise
[conversational] Now that we understand how boilerplate removal works, let's examine the benefits and potential pitfalls of this technique. [seriously] Like any preprocessing method, it's not a silver bullet—you need to understand both sides to use it effectively.

####  Pros
[pleased] Let's start with the advantages. First, you get a **higher signal-to-noise ratio** in your document content. [storytelling] Think about a typical news article on a website—maybe only thirty percent of the page is the actual article, while the rest is navigation menus, ads, related links, and footer information. [confidently] By removing all that noise, you're left with pure, valuable content that your models can actually learn from. Second, you'll process **fewer tokens in downstream tasks**, which directly translates to cost savings and faster processing. [conversational] If you're sending text to an embedding model or a language model, you're often paying per token or per character. [playfully] Why waste money processing "Copyright 2024, All Rights Reserved" a thousand times? [enthusiastically] Third, you achieve **better retrieval quality** because your search results aren't cluttered with matches from boilerplate text. When someone searches for "privacy policy," they want actual policy documents, not every page that happens to have a privacy link in the footer. [pleased] Finally, this technique **reduces repetitive elements across multiple pages**. If you crawl a hundred pages from the same website, you don't want the same navigation menu appearing in all hundred documents—that would create massive bias in your dataset.

####  Cons
[cautiously] Now let's talk about the challenges. The biggest risk is **removing valuable content from sidebars**. [concerned] Sometimes what looks like a sidebar might actually contain important related information, glossary terms, or key definitions that provide crucial context. You need to be careful not to throw out the baby with the bathwater. [conversational] Second, this technique often **requires site-specific tuning**. A heuristic that works perfectly for news websites might fail on documentation sites or e-commerce pages. You might need to adjust your content-density thresholds or train custom classifiers for different types of sites. Third, **multilingual content presents edge cases**. Languages that use different character sets, read right-to-left, or have different text density characteristics can confuse algorithms trained primarily on English content. [disappointed] And finally, **highly dynamic sites challenge heuristic approaches**. Modern single-page applications, infinite-scroll layouts, and JavaScript-rendered content can make it extremely difficult to distinguish content from chrome using traditional DOM-based methods.

[firmly] The key takeaway here is to always validate your boilerplate removal on a sample of your data before processing your entire corpus. [energetic] Let's move on to technique two: deduplicating repeated text.`
        }
      ]
    },
    {
      id: 'technique-2',
      title: '2. Deduplicate Repeated Text',
      slides: [
        {
          id: 5,
          title: '2. Deduplicate Repeated Text',
          icon: { name: 'duo-copy' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                      Goal / Problem It Solves
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Remove exact, near-duplicate, and semantically redundant text to reduce bias and cost</li>
                      <li>Eliminate repetitive content that adds no value</li>
                      <li>Prevent overrepresentation of duplicated content in training data</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                      How It Works
                      <MermaidPopover
                        title="Deduplication Process"
                        diagram={`flowchart LR
    A["📄 Text Corpus"] --> B["Compute Hashes"]
    B --> C["Exact Match?"]
    C -->|Yes| D["Group Together"]
    C -->|No| E["Fuzzy Similarity"]
    E -->|High| D
    E -->|Low| F["Keep Separate"]
    D --> G["Keep 1 Representative"]
    G --> H["✅ Deduplicated Corpus"]
    F --> H
    style A fill:#4fc3f7,color:#000
    style H fill:#81c784,color:#000
    style D fill:#fff59d,color:#000`}
                      />
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Exact hashing (MD5/SHA), near-dup (SimHash/MinHash+LSH)</li>
                      <li>Semantic deduplication using embedding similarity/clustering</li>
                      <li>Suffix-array algorithms to detect text overlap</li>
                      <li>Jaccard similarity for fuzzy matching of content</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                      When to Use
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Large crawls and corpus processing</li>
                      <li>Documents with revisions/changelogs</li>
                      <li>Content from mirror sources or multiple websites</li>
                      <li>Training data preparation for ML/NLP models</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                      Implementation Steps
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Normalize text before comparison</li>
                      <li>Window text if needed for large documents</li>
                      <li>Compute signatures/hashes/embeddings</li>
                      <li>Block and compare similar items</li>
                      <li>Set appropriate similarity thresholds</li>
                      <li>Drop or flag duplicates</li>
                      <li>Log deduplication actions for auditability</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### 5. Technique 2 - Deduplicate Repeated Text

#### Introduction
[energetic] Welcome to technique two: deduplicating repeated text. [conversational] This is one of those problems you don't realize you have until you scrape a bunch of web pages or process a large document corpus and discover the same paragraph showing up fifty times. Let's talk about why this matters and how to handle it.

#### The Goal
[confidently] Our primary goal here is to eliminate exact or near-duplicate paragraphs and chunks from our document collection. [lecture] When you're crawling websites, downloading PDFs, or aggregating content from multiple sources, you inevitably end up with redundant sections. The same boilerplate text appears everywhere, or the same article gets republished on multiple pages. [concerned] If we don't remove these duplicates, we run into a serious problem: retrieval bias. Your search system will keep returning the same content over and over, and your language model will think certain information is way more important than it actually is just because it saw it repeated twenty times.

#### How It Works
[lecture] Let me walk you through the main approaches for deduplication. The simplest method is hash-based dedup 👉 "dee-doop". You compute a hash like MD5 or SHA for each paragraph or chunk. If two pieces of text have the same hash, they're exact duplicates, and you keep just one copy. [conversational] But what about near-duplicates—text that's almost the same but not quite? For that, we use fuzzy matching with similarity thresholds. You can calculate Jaccard 👉 "ZHAH-card" similarity between word sets, or use edit distance to measure how many changes it takes to transform one text into another. Set a threshold like ninety percent similarity, and anything above that gets flagged as a duplicate. For really large collections, computing pairwise similarity gets expensive fast, so we use techniques like MinHash 👉 "min-hash" and LSH 👉 "L-S-H", which stands for locality sensitive hashing. [confidently] These let you detect near-duplicates at scale without comparing every document to every other document. You can apply this at different levels of granularity—paragraph-level is common, but sentence-level works too depending on your use case.

\`\`\`mermaid
flowchart LR
    A["📄 Text Corpus"] --> B["Compute Hashes"]
    B --> C["Exact Match?"]
    C -->|Yes| D["Group Together"]
    C -->|No| E["Fuzzy Similarity"]
    E -->|High| D
    E -->|Low| F["Keep Separate"]
    D --> G["Keep 1 Representative"]
    G --> H["✅ Deduplicated Corpus"]
    F --> H
    style A fill:#4fc3f7,color:#000
    style H fill:#81c784,color:#000
    style D fill:#fff59d,color:#000
\`\`\`

#### When to Use
[lecture] You should reach for deduplication after web scraping or PDF extraction, when you know you're dealing with messy, real-world data. It's essential when you have large corpora where duplication would inflate your index size—both in terms of storage costs and search performance. [seriously] And it's critical when retrieval over the same passages would bias your model. [storytelling] Imagine you're building a question-answering system and the same incorrect fact appears in ten different documents because they all copied from the same source. Your model will be very confident in that wrong answer. [confidently] Deduplication prevents this.

#### Implementation
[lecture] Here's the practical workflow. First, compute text hashes or embeddings for each chunk. If you're doing exact dedup, a cryptographic hash is fine. For near-duplicates, you might use MinHash signatures or even embedding vectors. Next, group by hash or cluster by similarity. Documents with identical hashes go in one bucket; for fuzzy matching, you cluster based on your similarity threshold. Then keep one representative per group—usually the longest version or the highest quality one. [conversational] Finally, remove or mark duplicates. Some systems physically delete them; others just flag them so they don't get retrieved but you can still audit what was removed. Now let's look at the trade-offs on the next slide.`
        },
        {
          id: 6,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                    Pros
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Smaller, more efficient corpus size</li>
                    <li>Less data leakage between train/test sets</li>
                    <li>Faster indexing and training</li>
                    <li>More balanced representation of content</li>
                  </ul>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                    Cons
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Computationally expensive at scale</li>
                    <li>Risk of false merges if thresholds too low</li>
                    <li>Requires maintenance of fingerprint database</li>
                    <li>May remove legitimate repeated content in some contexts</li>
                  </ul>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### 6. Deduplication - Pros and Cons

#### The Benefits
[pleased] Let's start with the positives, and there are several strong ones. First, deduplication reduces index bloat significantly. [conversational] If twenty percent of your corpus is duplicates, you just saved twenty percent on storage and indexing costs. Second, it prevents overweighting duplicates. Your retrieval system won't keep returning the same information over and over, which makes for much better user experience and more accurate model behavior. [confidently] Third, you get faster search and lower costs. A smaller index means faster queries and less compute. And fourth, you get more diverse retrieval results. [enthusiastically] When you query for something, you'll see a variety of sources and perspectives instead of the same paragraph dressed up in different formatting.

#### The Drawbacks
[cautiously] But deduplication isn't without risks. The biggest concern is removing legitimate repeated information. [conversational] Sometimes the same fact appears in multiple documents because it's genuinely important or because each document is using it in a different context. [concerned] If you deduplicate too aggressively, you might remove content that should have stayed. Second, fuzzy thresholds require tuning. There's no universal "right" similarity threshold for near-duplicate detection. [lecture] Ninety percent might be too strict for some corpora and too loose for others. You'll need to experiment and validate on your specific data. Third, high-volume dedup can be compute-intensive. Running pairwise comparisons or even MinHash over millions of documents takes time and resources. [cautiously] And finally, you may lose context if paragraphs differ slightly. Maybe one version has an extra sentence with important clarification or a critical date. If you treat them as duplicates and keep only one, you've lost that nuance.

#### Transition
[confidently] Despite these challenges, deduplication is a must-have for most production systems. The benefits far outweigh the risks if you tune your thresholds carefully. [energetic] Now let's move on to technique three: normalizing whitespace and formatting, which handles another common source of inconsistency in text data.`
        }
      ]
    },
    {
      id: 'technique-3',
      title: '3. Normalize Whitespace & Formatting',
      slides: [
        {
          id: 7,
          title: '3. Normalize Whitespace & Formatting',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                      Goal / Problem It Solves
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Create consistent spacing, line breaks, and punctuation</li>
                      <li>Standardize Unicode characters for stable tokenization</li>
                      <li>Eliminate inconsistencies from different sources</li>
                      <li>Prevent text processing issues from irregular formatting</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                      How It Works
                      <MermaidPopover
                        title="Whitespace Normalization"
                        diagram={`flowchart LR
    A["📄 Raw Text"] --> B["Collapse Whitespace"]
    B --> C["Normalize Line Endings"]
    C --> D["Unicode Normalization"]
    D --> E["Strip Zero-Width Chars"]
    E --> F["Trim Edges"]
    F --> G["✅ Clean Text"]
    style A fill:#4fc3f7,color:#000
    style G fill:#81c784,color:#000
    style D fill:#fff59d,color:#000`}
                      />
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Collapse multiple spaces into single spaces</li>
                      <li>Normalize newlines (CR, LF, CRLF) to consistent format</li>
                      <li>Apply Unicode normalization (typically NFKC)</li>
                      <li>Standardize quotes, dashes, bullets, and other punctuation</li>
                      <li>Handle control characters and zero-width spaces</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                      When to Use
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Early in the ingestion pipeline</li>
                      <li>Before tokenization and vectorization</li>
                      <li>When combining text from multiple sources</li>
                      <li>Processing OCR output or scraped content</li>
                      <li>Before text comparison or deduplication</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                      Implementation Steps
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Apply Unicode normalization (NFKC or NFD)</li>
                      <li>Replace tabs with spaces</li>
                      <li>Collapse multiple spaces to single space</li>
                      <li>Normalize line endings</li>
                      <li>Standardize quotes and punctuation</li>
                      <li>Protect special content (code blocks, lists) with markers</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### 7. Technique 3 - Normalize Whitespace & Formatting

#### Introduction
[conversational] Our third preprocessing technique is normalizing whitespace and formatting. [playfully] This might sound trivial compared to deduplication or boilerplate removal, but [seriously] inconsistent whitespace is one of the most common sources of subtle bugs in text processing pipelines. Let's see why this matters.

#### The Goal
[confidently] The goal here is to collapse multiple spaces, tabs, and line breaks into single spaces. We want to unify line endings—some systems use CRLF 👉 "C-R-L-F", which is carriage return plus line feed, while others use just LF. We need to strip leading and trailing whitespace from paragraphs and ensure a consistent text representation across all our documents. [lecture] When text comes from PDFs, web pages, Word documents, and plain text files, each source has its own quirks. Normalization eliminates those quirks so downstream components don't have to deal with them.

#### How It Works
[lecture] The most common approach is regex-based 👉 "REH-jex-based" whitespace normalization. You use a regular expression to match any sequence of whitespace characters—spaces, tabs, newlines—and replace it with a single space. Next, you apply Unicode 👉 "YOO-nih-code" normalization. There are different forms: NFC 👉 "N-F-C", which stands for Normalization Form Canonical Composition, and NFKC 👉 "N-F-K-C", which adds compatibility decomposition. [confidently] These ensure that characters that look the same are actually represented the same way in memory. You also remove zero-width characters, which are invisible but can break text matching. [conversational] And you strip or replace special formatting characters—things like soft hyphens or non-breaking spaces that might have been inserted by word processors.

\`\`\`mermaid
flowchart LR
    A["📄 Raw Text"] --> B["Collapse Whitespace"]
    B --> C["Normalize Line Endings"]
    C --> D["Unicode Normalization"]
    D --> E["Strip Zero-Width Chars"]
    E --> F["Trim Edges"]
    F --> G["✅ Clean Text"]
    style A fill:#4fc3f7,color:#000
    style G fill:#81c784,color:#000
    style D fill:#fff59d,color:#000
\`\`\`

#### When to Use
[lecture] You should apply whitespace normalization after boilerplate removal and before tokenization or embedding. It's one of those early-stage steps that makes everything else easier. [conversational] It's especially important when text comes from varied sources—web pages with HTML whitespace, PDFs with column breaks, Word documents with formatting codes. [confidently] Running this early in your pipeline ensures consistency across all documents. Most practitioners treat this as a standard first step.

#### Implementation
[lecture] The implementation is straightforward. First, apply a regex to collapse any sequence of whitespace characters—backslash-s-plus in regex notation—to a single space. Second, normalize line endings by converting all CRLF and CR sequences to just LF, or whatever standard you choose. Third, apply Unicode normalization using your language's built-in library. Python has unicodedata 👉 "unicode-data", for example. [conversational] Fourth, trim leading and trailing whitespace from the entire text or from each paragraph. And optionally, replace tabs with spaces if your downstream system prefers spaces. This usually takes just a few lines of code. Let's look at the trade-offs.`
        },
        {
          id: 8,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                    Pros
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Produces cleaner, more consistent tokens</li>
                    <li>Reduces spurious differences across data sources</li>
                    <li>Improves matching and comparison operations</li>
                    <li>Makes downstream processing more reliable</li>
                    <li>Reduces edge cases in text processing pipelines</li>
                  </ul>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                    Cons
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>May break layout-sensitive text (code, poetry, tables)</li>
                    <li>Can lose intentional formatting signals if not careful</li>
                    <li>Special content needs protection with sentinel markers</li>
                    <li>Language-specific issues with certain Unicode characters</li>
                    <li>Potential information loss in specialized domains</li>
                  </ul>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### 8. Whitespace Normalization - Pros and Cons

#### The Benefits
[pleased] Whitespace normalization has several compelling advantages. First and foremost, you get clean, uniform text for all downstream tasks. [conversational] Whether you're tokenizing, embedding, or feeding text into a language model, consistent formatting means fewer surprises. [confidently] Second, it prevents tokenization inconsistencies. Some tokenizers treat multiple spaces differently than single spaces, and that variance can lead to different token IDs for what should be identical text. Third, it reduces token count slightly. By collapsing redundant whitespace, you're removing meaningless characters, which means fewer tokens and lower API costs if you're using a paid service. [enthusiastically] Fourth, it makes text comparison and matching much easier. If you're doing exact string matching or computing similarity, you don't want two identical sentences to differ just because one has two spaces after a period. [pleased] And finally, this has minimal implementation complexity. It's regex and standard library functions—no fancy models or external dependencies required.

#### The Drawbacks
[cautiously] But there are some risks to be aware of. First, you may lose intentional formatting. [concerned] If your documents include code blocks, poetry, or ASCII art, aggressive whitespace normalization can destroy the structure that makes them meaningful. [storytelling] A Python code block with incorrect indentation won't run. A poem with careful line breaks loses its artistic formatting. [lecture] Second, over-normalization can remove semantic cues. In some cases, multiple line breaks indicate a section boundary, and collapsing them to a single space loses that signal. Third, different languages have different whitespace conventions. [conversational] Chinese and Japanese, for example, don't always use spaces between words the way English does. Applying English-centric normalization can cause problems. [cautiously] Fourth, normalization can obscure the original document structure. If you're trying to preserve the exact layout of a document for legal or archival purposes, normalization might not be appropriate. And finally, there's a small risk of making text less readable if you strip out all formatting indiscriminately. Context matters.

#### Transition
[confidently] On balance, whitespace normalization is a low-risk, high-reward technique for most use cases. Just be mindful of your document types and preserve formatting where it matters. [energetic] Next up is technique four: converting tables into structured text, which addresses one of the trickiest challenges in document preprocessing.`
        }
      ]
    },
    {
      id: 'technique-4',
      title: '4. Convert Tables into Structured Text',
      slides: [
        {
          id: 9,
          title: '4. Convert Tables into Structured Text',
          icon: { name: 'duo-table' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                      Goal / Problem It Solves
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Make tables machine-usable for retrieval, QA, and analytics</li>
                      <li>Convert visual tabular data into structured formats</li>
                      <li>Preserve relationships between data in tables</li>
                      <li>Enable more accurate question-answering over tabular facts</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                      How It Works
                      <MermaidPopover
                        title="Table Conversion Process"
                        diagram={`flowchart LR
    A["📊 Table"] --> B["Parse Structure"]
    B --> C["Extract Headers & Rows"]
    C --> D["Apply Templates"]
    D --> E["Add Context"]
    E --> F["Validate"]
    F --> G["📄 Natural Language"]
    style A fill:#4fc3f7,color:#000
    style G fill:#81c784,color:#000
    style D fill:#fff59d,color:#000`}
                      />
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Detect tables (HTML, Camelot/Tabula for PDF)</li>
                      <li>Extract header/row structure from visual or HTML tables</li>
                      <li>Linearize as key: value pairs or structured JSON</li>
                      <li>Convert complex tables with spanning cells into normalized format</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                      When to Use
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Technical specifications presented as tables</li>
                      <li>Financial reports with tabular data</li>
                      <li>Product comparison charts</li>
                      <li>Log data or metrics embedded as tables</li>
                      <li>Any document where tables contain important facts</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                      Implementation Steps
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Detect tables in documents via DOM or image analysis</li>
                      <li>Resolve merged/spanning cells into normalized grid</li>
                      <li>Identify and normalize headers (often in first row/column)</li>
                      <li>Output as JSON/CSV with proper structure</li>
                      <li>Attach table_id and parent section metadata</li>
                      <li>Store both raw and structured versions</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### 9. Technique 4 - Convert Tables into Structured Text

#### Introduction
[energetic] Technique four is all about tables. [conversational] If you've ever tried to feed a table into a language model or search for information locked in a spreadsheet, you know the problem: [storytelling] tables are structured, but language models work best with natural language. Let's talk about how to bridge that gap.

#### The Goal
[confidently] Our goal is to transform tabular data into natural language sentences that language models can understand. We want to enable LLMs to comprehend table contents without needing special table-parsing modules. [lecture] We need to preserve the relationships encoded in rows and columns—the fact that this value corresponds to that header for this particular row. And we want to make table data searchable, so users can ask questions like "what was the revenue in Q2?" and get an answer even though that information was buried in a table.

#### How It Works
[lecture] Here's the general process. First, you parse the table structure—whether it's HTML, markdown, or extracted from a PDF—into a row-column format. You identify headers and data cells. Then you convert each row into sentence templates. [conversational] A simple template might be: "For [row label], [column header] is [cell value]." [storytelling] So if you have a table of quarterly revenue, you might generate: "For Q1, revenue is five million dollars. For Q1, expenses are three million dollars." And so on for each cell. [lecture] Optionally, you add table context like the caption or a descriptive header to give readers context about what the table represents. For more sophisticated conversion, you can use an LLM to generate fluent descriptions instead of rigid templates. You'd pass the table structure to a language model and ask it to write natural language that captures the data.

\`\`\`mermaid
flowchart LR
    A["📊 Table"] --> B["Parse Structure"]
    B --> C["Extract Headers & Rows"]
    C --> D["Apply Templates"]
    D --> E["Add Context"]
    E --> F["Validate"]
    F --> G["📄 Natural Language"]
    style A fill:#4fc3f7,color:#000
    style G fill:#81c784,color:#000
    style D fill:#fff59d,color:#000
\`\`\`

#### When to Use
[lecture] You should convert tables when you're working with documents that have data tables—financial reports, academic papers, research summaries, government documents. [confidently] It's especially valuable when tables contain key facts for question-answering. If a user is going to ask "what's the average response time?", you need that table data in a searchable format. [conversational] Run this conversion before chunking, because tables often span multiple chunks, and splitting a table mid-row breaks the structure. [pleased] And it improves embedding quality for tabular content. Embeddings of natural language sentences are much more semantically meaningful than embeddings of raw table markup.

#### Implementation
[lecture] Here's the step-by-step workflow. First, identify and extract tables from your documents. You might use HTML table tags, markdown table syntax, or a PDF table extraction library. Second, parse headers and data cells into a structured format—basically a two-dimensional array or a list of dictionaries. Third, generate natural language for each row. Loop through the rows and apply your template or call your LLM to produce sentences. [conversational] Fourth, add table title or caption as context. If the table has a caption saying "Quarterly Financial Results," prepend that to the generated text so readers know what they're looking at. [cautiously] Fifth, validate that the output makes sense. Sometimes table extraction goes wrong—merged cells, nested tables, formatting gone haywire. Spot-check a few examples. [confidently] Finally, insert the generated text back into the document flow where the table was. Now let's examine the pros and cons.`
        },
        {
          id: 10,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                    Pros
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Preserves semantic relationships between data points</li>
                    <li>Improves Q&A over tabular facts</li>
                    <li>Enables structured queries against previously visual data</li>
                    <li>Supports comparison operations across multiple tables</li>
                  </ul>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                    Cons
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Merged cells and complex layouts are difficult to process</li>
                    <li>Rotated text in tables presents extraction challenges</li>
                    <li>OCR'd tables require additional cleanup</li>
                    <li>Multi-level headers can be hard to properly represent</li>
                    <li>May lose visual formatting that conveys meaning</li>
                  </ul>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### 10. Table Conversion - Pros and Cons

#### The Benefits
[pleased] Table conversion offers some powerful advantages. First, it makes tables LLM-friendly. Language models can now process table data just like any other text, without needing specialized architectures or plugins. [enthusiastically] Second, it dramatically improves semantic search over tabular data. [storytelling] Instead of searching for "Q2 revenue" and getting no results because the table just has numbers in cells, you search and get "For Q2, revenue is eight million dollars," which matches your query. [confidently] Third, it preserves relationships explicitly. The connection between row, column, and value is stated in words, so there's no ambiguity. Fourth, it enables better chunking and retrieval. [lecture] When you chunk the document, each chunk now contains complete, coherent information instead of partial table fragments. [pleased] And fifth, it enables question-answering over numerical data. Users can ask "which quarter had the highest revenue?" and your system can actually answer because the data is in natural language.

#### The Drawbacks
[cautiously] But table conversion comes with trade-offs. The biggest issue is verbosity—tables convert into a lot of text. [concerned] A ten-row, five-column table becomes fifty sentences, which increases your document size significantly. That means higher storage costs, longer context windows, and more tokens to process. [conversational] Second, template sentences can be repetitive and stilted. [playfully] Reading "For row one, column A is value. For row one, column B is value..." gets monotonous fast. [cautiously] Third, complex tables are hard to convert. Tables with merged cells, nested headers, or multi-level hierarchies don't fit simple templates. You'll need sophisticated parsing logic or manual intervention. [lecture] Fourth, generating good natural language requires domain knowledge. A generic template works for simple tables, but domain-specific tables—medical data, financial statements—benefit from tailored templates that use the right terminology. [disappointed] And finally, some table structure is lost. If the two-dimensional layout itself conveys meaning—like a correlation matrix or a calendar—flattening it to sentences loses that spatial information.

#### Transition
[confidently] Table conversion is a powerful technique when applied thoughtfully. It unlocks a huge amount of information that would otherwise be inaccessible to language models. Just be prepared for the verbosity and invest in good templates. [energetic] Now let's move to our final technique in this section: OCR cleanup, which tackles the challenge of working with scanned documents.`
        }
      ]
    },
    {
      id: 'technique-5',
      title: '5. OCR Cleanup',
      slides: [
        {
          id: 11,
          title: '5. OCR Cleanup',
          icon: { name: 'duo-scanner-keyboard' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                      Goal / Problem It Solves
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Fix OCR noise: broken words, wrong characters, artifacts</li>
                      <li>Improve readability of text extracted from images and scans</li>
                      <li>Standardize output from different OCR engines</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                      How It Works
                      <MermaidPopover
                        title="OCR Cleanup Process"
                        diagram={`flowchart LR
    A["📷 Scanned Image"] --> B["Run OCR"]
    B --> C["Dictionary Check"]
    C --> D["Spell Correction"]
    D --> E["Context Repair"]
    E --> F["Pattern Matching"]
    F --> G["Validate"]
    G --> H["✅ Clean Text"]
    style A fill:#4fc3f7,color:#000
    style H fill:#81c784,color:#000
    style E fill:#fff59d,color:#000`}
                      />
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Spell/LM-based correction for misrecognized text</li>
                      <li>Confusion sets resolution (0/O, l/1, rn/m)</li>
                      <li>Dehyphenation of line-break separated words</li>
                      <li>Deskew and layout normalization</li>
                      <li>Language identification for multi-lingual documents</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                      When to Use
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Scanned PDFs and document images</li>
                      <li>Faxes and low-resolution document captures</li>
                      <li>Historical documents with degraded quality</li>
                      <li>After OCR extraction, before semantic processing</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                      Implementation Steps
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Run OCR on document images</li>
                      <li>Normalize Unicode characters and encoding</li>
                      <li>Join hyphenated words at line breaks</li>
                      <li>Apply spell checking and correction via dictionaries/LMs</li>
                      <li>Validate corrections with confidence scores</li>
                      <li>Flag uncertain corrections for human review</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### 11. Technique 5 - OCR Cleanup

#### Introduction
[energetic] Technique five is OCR cleanup. [lecture] OCR 👉 "O-C-R", or optical character recognition, is the process of converting images of text—scanned documents, photos of pages—into machine-readable text. [disappointed] But OCR is rarely perfect. It makes mistakes, and those mistakes propagate through your entire pipeline if you don't fix them. [conversational] Let's talk about how to clean up OCR output.

#### The Goal
[confidently] Our goal is to fix common OCR errors, which typically fall into a few categories: character substitution—like confusing the number one with the letter lowercase L, or zero with uppercase O. We need to fix spacing issues where words get merged together or split apart incorrectly. [lecture] We want to correct artifacts like "r-n" being read as "m" because the letters are close together. And we need to validate and repair word boundaries so that "the quick brown" doesn't become "thequick bro wn".

#### How It Works
[lecture] There are several complementary approaches to OCR cleanup. First, dictionary lookup and spelling correction. After OCR runs, you check each word against a dictionary. If it's not found, you use edit distance or phonetic algorithms to find the closest real word and suggest a correction. Second, ML-based error detection using character-level models. You can train a sequence model to recognize common OCR error patterns and predict corrections. [confidently] Third, context-aware fixes using language models. Feed the OCR output to a language model and ask it to correct errors based on context. The model can figure out that "the c@t" should be "the cat" because "cat" makes sense after "the." [conversational] Fourth, pattern matching for common OCR errors. You can hard-code rules like "replace rn with m where appropriate" or "if a word has zero as the first letter, try replacing with O." And fifth, heuristics for merged or split words. Look for suspiciously long words and try splitting them, or look for single-letter words that might belong to neighbors.

\`\`\`mermaid
flowchart LR
    A["📷 Scanned Image"] --> B["Run OCR"]
    B --> C["Dictionary Check"]
    C --> D["Spell Correction"]
    D --> E["Context Repair"]
    E --> F["Pattern Matching"]
    F --> G["Validate"]
    G --> H["✅ Clean Text"]
    style A fill:#4fc3f7,color:#000
    style H fill:#81c784,color:#000
    style E fill:#fff59d,color:#000
\`\`\`

#### When to Use
[lecture] You need OCR cleanup whenever you're working with scanned documents—PDFs that are images rather than text, photographs of book pages, digitized archives. [seriously] It's essential for legacy digitized archives where the scanning was done years ago with inferior technology. It's critical when you know you're dealing with low-quality OCR output—blurry scans, old typewritten pages, faded documents. [conversational] And it's common in domains like academic research with historical papers or legal work with old contracts that were scanned long ago.

#### Implementation
[lecture] Here's a practical workflow. First, run OCR using a tool like Tesseract 👉 "TESS-er-act", which is open source, or a cloud API like Google Vision or Azure Computer Vision, which tend to be more accurate. Second, apply dictionary-based spellcheck. Use a library like PySpellChecker in Python or Hunspell. Third, use a language model for context-aware repair. You can pass sentences to GPT or Claude and ask for corrections, or use a specialized model trained on OCR error correction. [conversational] Fourth, fix common substitutions with regex or lookup tables. Replace patterns like "l" at the start of a sentence with "I", or "0" in the middle of words with "O." Fifth, validate word boundaries using word frequency lists. [cautiously] If you see a word that doesn't exist but splitting it gives you two real words, split it. And finally, review sample output manually. OCR cleanup is never perfect, so spot-checking is important. Let's look at the pros and cons.`
        },
        {
          id: 12,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                    Pros
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Better readability for humans and machines</li>
                    <li>Boosts NER/keyphrase extraction accuracy</li>
                    <li>Improves searchability of scanned content</li>
                    <li>Enables more accurate embeddings and retrieval</li>
                  </ul>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                    Cons
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Automated corrections can introduce new errors</li>
                    <li>Adds latency and computational cost</li>
                    <li>Domain-specific dictionaries needed for specialized terms</li>
                    <li>Hard to correct heavily degraded or handwritten text</li>
                  </ul>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### 12. OCR Cleanup - Pros and Cons

#### The Benefits
[pleased] OCR cleanup delivers significant value. First, it dramatically improves text quality. Documents that were barely usable become readable and processable. [enthusiastically] Second, it enables use of previously unusable scans. Archives, historical documents, old research papers—suddenly they're accessible to search and analysis. [confidently] Third, you get better search and retrieval. Clean text indexes better, embeds better, and retrieves more accurately. Fourth, it reduces downstream error propagation. [storytelling] If you feed messy OCR output into a language model, the model gets confused and makes mistakes. [pleased] Clean it up first, and everything downstream works better. And fifth, there are many open-source tools available. Tesseract, OCRmyPDF, and various language model integrations mean you don't have to build everything from scratch.

#### The Drawbacks
[cautiously] But OCR cleanup is not a magic bullet. First, it's imperfect—some errors will always remain. [disappointed] OCR technology has improved, but it's still not flawless, especially with poor-quality scans. [concerned] Second, you can introduce new errors via overcorrection. Your spell checker might "fix" a correct technical term or proper noun into a common word, creating a different kind of error. [lecture] Third, you need language-specific dictionaries and models. English OCR cleanup tools don't work for French or Chinese. You need resources for each language you support. Fourth, it's compute-intensive for large volumes. Running OCR plus multiple correction passes over thousands of pages takes time and resources. [cautiously] Fifth, manual review is often still required. For high-stakes applications like legal documents, you can't fully trust automated cleanup. [disappointed] And finally, some scans are just too poor quality. If the original image is severely degraded, no amount of cleanup will salvage it. You might need to rescan or accept that the document is lost.

#### Conclusion
[confidently] Despite these limitations, OCR cleanup is essential when working with scanned content. It's the difference between having a pile of unusable images and having a searchable, analyzable text corpus. [pleased] With that, we've covered five core document preprocessing techniques—from boilerplate removal through OCR cleanup. Each addresses a specific challenge in preparing real-world documents for RAG and language model applications. [energetic] Now let's move on to the next set of techniques focusing on text segmentation.`
        }
      ]
    },
    {
      id: 'technique-6',
      title: '6. Sentence Boundary Detection',
      slides: [
        {
          id: 13,
          title: '6. Sentence Boundary Detection',
          icon: { name: 'duo-scissors' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                      Goal / Problem It Solves
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Split text into sentences for chunking and downstream tasks</li>
                      <li>Accurate sentence detection in text with ambiguous punctuation</li>
                      <li>Handle abbreviations, quotes, and special formatting</li>
                      <li>Create meaningful text units for further processing</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                      How It Works
                      <MermaidPopover
                        title="Sentence Boundary Detection Flow"
                        diagram={`graph TD
    A[Raw Text] --> B[Rule-Based Regex]
    B --> C{Abbreviation?}
    C -->|Yes| D[Check Dictionary]
    C -->|No| E[Mark Boundary]
    D --> F{False Split?}
    F -->|Yes| G[Continue Sentence]
    F -->|No| E
    E --> H[ML Model Validation]
    H --> I{Context Check}
    I --> J[Final Boundaries]
    style A fill:#e1f5ff
    style J fill:#d4edda`}
                      />
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Rule-based methods (Punkt algorithm)</li>
                      <li>ML models (spaCy/transformers)</li>
                      <li>Abbreviation lists and exception handling</li>
                      <li>Handles decimals, initials, and quotations</li>
                      <li>Statistical analysis of token distributions</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                      When to Use
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Before semantic chunking</li>
                      <li>Prior to summarization tasks</li>
                      <li>For alignment between texts</li>
                      <li>When working with unstructured text</li>
                      <li>Early in NLP pipelines</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                      Implementation Steps
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Language detection for appropriate model selection</li>
                      <li>Choose rule-based or ML model based on requirements</li>
                      <li>Customize abbreviation lists for domain-specific content</li>
                      <li>Evaluate performance on representative samples</li>
                      <li>Store sentence boundaries with offset information</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `#### Introduction
[energetic] Welcome to technique six, sentence boundary detection. [conversational] This might sound simple at first, but [lecture] accurately identifying where one sentence ends and another begins is actually a sophisticated challenge in document preprocessing. The goal here is to handle all those tricky edge cases that make sentence splitting harder than it seems.
#### The Challenge
[lecture] When you're processing text, you need to know where sentences start and stop. [playfully] But it's not as simple as just splitting on periods. [conversational] What about abbreviations like "Dr." or "Inc."? What about ellipses? What about quotes that end with punctuation? [concerned] These edge cases can trip up naive approaches and cause your downstream processing to fail.
#### Core Goals
[confidently] Our primary goal is to accurately identify sentence boundaries even in the presence of abbreviations, ellipses, and punctuation edge cases. We want to enable sentence-level processing and analysis, which is crucial for many natural language processing tasks. [lecture] Whether you're doing named entity recognition 👉 wreck-uh-gnish-un or semantic chunking, you need clean sentence boundaries to work with.
#### How It Works
[lecture] Let me walk you through how modern sentence boundary detection actually works. The first approach uses rule-based regex 👉 red-jex patterns to identify periods, question marks, and exclamation points. But that's just the starting point. [confidently] More sophisticated systems use machine learning models trained specifically on sentence boundaries. Tools like spaCy 👉 SPAY-see and NLTK 👉 N-L-T-K have pre-trained models that understand the nuances of sentence structure.
[conversational] These systems also maintain abbreviation dictionaries to avoid false splits. [storytelling] If you see "Dr. Smith went to the store," you don't want to split after "Dr." because that's not actually a sentence boundary. The system checks against known abbreviations before making a decision.
[lecture] Context-aware detection handles quotes and parentheses intelligently. If a sentence ends inside quotes, the system knows to include the closing quote as part of that sentence, not the start of a new one.
#### When To Use This
[lecture] Sentence boundary detection should happen before semantic chunking or named entity recognition. Any time you need sentence-level granularity for your analysis, you need this technique first. [confidently] It's essential when you're extracting individual facts or statements from documents, and it's critical when building sentence embeddings for semantic search.
#### Implementation Approach
[lecture] Here's how to implement this in practice. First, load a sentence tokenizer from a library like spaCy or NLTK. Apply it to your paragraphs, but don't just trust it blindly. [conversational] Handle edge cases with abbreviation lists specific to your domain. Medical documents might have different abbreviations than legal documents, right?
[cautiously] Validate the results on sample data from your actual corpus. Look for false positives and false negatives. If you're working in a specialized domain with unusual punctuation patterns, you might need to train a domain-specific model using your own annotated data.
#### Transition
[conversational] Now, sentence boundary detection has some important tradeoffs we need to discuss. Let's look at the pros and cons on the next slide.`
        },
        {
          id: 14,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                      Pros
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Creates cleaner chunks for embeddings</li>
                      <li>Improves retrieval precision</li>
                      <li>Enables more coherent text segmentation</li>
                      <li>Foundation for paragraph and document structure</li>
                      <li>Better context preservation for NLP tasks</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                      Cons
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Mis-splits in legal/technical documentation</li>
                      <li>Multilingual punctuation challenges</li>
                      <li>Struggles with bulleted lists and fragmented content</li>
                      <li>Domain adaptation often required</li>
                      <li>Can break non-standard text formats</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `#### The Benefits
[pleased] Let's start with why sentence boundary detection is so valuable. First, it enables fine-grained analysis of your text. You can process documents at the sentence level, which gives you much more precision than working with entire paragraphs or pages.
[confidently] Second, it improves chunking quality dramatically. When you chunk documents later in your pipeline, having clean sentence boundaries means your chunks break at natural points. You never split in the middle of a thought or statement.
[enthusiastically] Third, it leads to better fact extraction. If you're trying to pull specific facts from documents, working at the sentence level is usually the right granularity. Each sentence typically expresses one main idea or fact.
[pleased] Finally, it works across languages with the right model. Most major NLP libraries have sentence boundary detection for dozens of languages, so this technique scales internationally.
#### The Challenges
[cautiously] But there are some downsides to be aware of. Abbreviations and edge cases require significant tuning. [conversational] Out-of-the-box models work well for general text, but specialized domains often have unique abbreviation patterns that cause problems. [concerned] You'll need to build custom abbreviation lists and test thoroughly.
[lecture] Domain-specific punctuation patterns need custom rules. Scientific papers use periods differently than social media posts. Legal documents have citation formats that can confuse sentence detectors. You might need to write custom rules for your specific use case.
[cautiously] Performance can be slow on very large texts, especially if you're using ML-based models. If you're processing millions of documents, the computational cost adds up.
[seriously] Most importantly, errors propagate to downstream tasks. If you incorrectly split a sentence, that error affects everything that comes after it. [concerned] Chunking will create bad chunks. Named entity recognition might miss entities that span the incorrect boundary. The quality of your sentence detection directly impacts the quality of everything else in your pipeline.
#### Transition to Next Technique
[confidently] Despite these challenges, sentence boundary detection is a foundational technique that most preprocessing pipelines need. [energetic] Now let's move on to technique seven, semantic chunking, which takes document splitting to a whole new level by considering meaning, not just structure.`
        }
      ]
    },
    {
      id: 'technique-7',
      title: '7. Semantic Chunking',
      slides: [
        {
          id: 15,
          title: '7. Semantic Chunking',
          icon: { name: 'duo-brain-circuit' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                      Goal / Problem It Solves
                    </h4>
                    <ul style={{ fontSize: '1.1rem' }}>
                      <li>Create meaning-coherent chunks instead of arbitrary size splits</li>
                      <li>Prevent semantic breaks in the middle of concepts or topics</li>
                      <li>Improve retrieval quality by aligning chunk boundaries with topic shifts</li>
                      <li>Reduce context dilution across multiple topics in single chunks</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                      How It Works
                      <MermaidPopover
                        title="Semantic Chunking Process"
                        diagram={`graph TD
    A[Document Sentences] --> B[Generate Embeddings]
    B --> C[Sliding Window]
    C --> D[Calculate Similarity]
    D --> E{Similarity Drop?}
    E -->|Yes| F[Mark Boundary]
    E -->|No| G[Continue Window]
    F --> H[Create Chunk]
    G --> C
    H --> I{More Text?}
    I -->|Yes| C
    I -->|No| J[Final Chunks]
    style A fill:#e1f5ff
    style J fill:#d4edda`}
                      />
                    </h4>
                    <ul style={{ fontSize: '1.1rem' }}>
                      <li>Embed sentences; merge contiguous sentences above similarity threshold</li>
                      <li>Cap by maximum tokens (e.g., 512-1024) for retrieval systems</li>
                      <li>Optional clustering (HDBSCAN) for more sophisticated similarity detection</li>
                      <li>Detect topic boundaries via embedding similarity drops between sentences</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                      When to Use
                    </h4>
                    <ul style={{ fontSize: '1.1rem' }}>
                      <li>RAG systems where precise contextual retrieval matters</li>
                      <li>Topic retrieval applications needing coherent passages</li>
                      <li>Semantic search systems requiring well-bounded chunks</li>
                      <li>When fixed-length chunking produces poor retrieval quality</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                      Implementation Steps
                    </h4>
                    <ul style={{ fontSize: '1.1rem' }}>
                      <li>Apply Sentence Boundary Detection (SBD) to segment text</li>
                      <li>Compute embeddings for each sentence using an appropriate model</li>
                      <li>Calculate cosine similarity between adjacent sentences</li>
                      <li>Implement greedy merge with similarity threshold (e.g., &gt;0.8)</li>
                      <li>Enforce maximum token limit per chunk</li>
                      <li>Store chunk boundaries and similarity scores in metadata</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `#### Introduction
[energetic] Welcome to technique seven, semantic chunking. [conversational] This is where we move beyond simple fixed-size chunks and start thinking about the actual meaning and topic flow of your documents. [confidently] Semantic chunking is one of the most powerful techniques for improving retrieval quality in RAG 👉 rag systems.
#### The Core Problem
[lecture] Fixed-size chunking is simple, but it has a fatal flaw: it doesn't care about meaning. [disappointed] You might split right in the middle of an important concept or argument, breaking the coherence that makes text understandable. [pleased] Semantic chunking solves this by finding natural topic boundaries.
#### Core Goals
[confidently] Our goals with semantic chunking are to split documents into meaningful semantic units that preserve topic coherence within each chunk. We want to avoid splitting mid-concept or mid-argument, keeping related ideas together. [lecture] And we want to optimize chunk size for both retrieval accuracy and context window constraints.
#### How It Works
[lecture] Let me show you how semantic chunking actually identifies these topic boundaries. The most common approach uses embedding-based similarity to detect topic shifts. You compute embeddings for each sentence or paragraph, then use a sliding window to analyze semantic coherence between adjacent segments. [confidently] When the similarity drops below a threshold, that indicates a topic boundary.
[conversational] Another approach is the TextTiling algorithm, which was specifically designed for topic segmentation. It analyzes lexical cohesion 👉 ko-HEE-zhun patterns to find where topics change.
[lecture] More recently, LLM-based chunking has emerged. You can prompt a language model to identify natural boundaries in the text, and it will understand context in ways that similarity scores alone cannot capture.
#### When To Use This
[lecture] Semantic chunking shines with long documents that cover multiple topics. If you have technical papers, reports, or articles that shift between different subjects, semantic chunking keeps each topic together.
[conversational] Use this when fixed-size chunking breaks coherence and hurts your retrieval quality. [storytelling] If users are getting incomplete or confusing results from your RAG system, semantic chunking often fixes the problem.
[enthusiastically] It's essential for improving RAG retrieval accuracy because semantically coherent chunks are more likely to match user queries. The chunk contains a complete thought or topic, not half of one topic and half of another.
[confidently] Apply this before indexing for vector search. Your vector database will contain more meaningful, self-contained chunks that work better for similarity search.
#### Implementation Approach
[lecture] Here's how to implement semantic chunking step by step. First, compute embeddings for your sentences or paragraphs using your chosen embedding model. Then calculate similarity between adjacent segments using cosine similarity or another distance metric.
[conversational] Identify semantic boundaries by looking for places where similarity drops significantly. A common approach is to find local minima in the similarity graph—those valleys indicate topic transitions.
[confidently] Create chunks that respect these boundaries, making sure each chunk is semantically coherent. [cautiously] Finally, validate chunk quality manually on a sample of your documents. Read through the chunks and see if they make sense as standalone units. If not, tune your similarity threshold.
#### Transition
[conversational] Semantic chunking is extremely powerful, but it comes with tradeoffs. Let's examine the pros and cons next.`
        },
        {
          id: 16,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                      Pros
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Higher retrieval precision with semantically coherent chunks</li>
                      <li>Reduced context dilution compared to fixed-size chunking</li>
                      <li>Better preservation of logical thought boundaries</li>
                      <li>Improved question answering from contextually complete passages</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                      Cons
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Additional computational overhead for embeddings</li>
                      <li>Quality depends heavily on embedding model selection</li>
                      <li>Can over-fragment text if thresholds are too strict</li>
                      <li>May require domain-specific tuning for optimal results</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `#### The Benefits
[pleased] Semantic chunking delivers some major advantages for retrieval systems. First and most importantly, it provides better retrieval relevance. [enthusiastically] When a user searches for information, they get chunks that contain complete, coherent topics rather than fragmented pieces. This dramatically improves the user experience.
[confidently] Second, it preserves context within chunks. Each chunk is self-contained and makes sense on its own. You don't need to retrieve adjacent chunks just to understand what's being discussed.
[pleased] Third, it reduces cross-chunk dependencies. With fixed-size chunking, you often have concepts that span multiple chunks, creating dependencies. Semantic chunking minimizes this by keeping related concepts together.
[delighted] Finally, it creates a more natural reading experience. When your RAG system returns chunks to users or includes them in context, semantically coherent chunks read like natural excerpts from the document, not arbitrary cutoffs.
#### The Challenges
[cautiously] But semantic chunking does come with some significant costs. First, it's computationally expensive because you need to compute embeddings for every sentence or paragraph in your document. [concerned] For large document collections, this can be a substantial processing burden.
[lecture] Second, you need to select an embedding model, and that choice matters. Different embedding models will identify different boundaries. You need to test which model works best for your domain and use case.
[conversational] Third, semantic chunking may produce variable chunk sizes. Some topics are discussed briefly, creating small chunks. Others span many paragraphs, creating large chunks. [cautiously] This variability can be challenging for systems that expect consistent chunk sizes, and it might cause some chunks to exceed your context window limits.
[disappointed] Finally, it's hard to tune similarity thresholds. What threshold marks a topic boundary? Too high, and you get too many small chunks. Too low, and you miss important boundaries. [lecture] You need to experiment and validate on real data to find the right balance.
#### Transition to Next Technique
[confidently] Despite these challenges, semantic chunking is often worth the investment for production RAG systems. [energetic] Now let's move to technique eight, contextual chunk linking, which addresses one of the key limitations we just discussed: what happens when you need information from outside the chunk boundaries?`
        }
      ]
    },
    {
      id: 'technique-8',
      title: '8. Contextual Chunk Linking (Parent–Child)',
      slides: [
        {
          id: 17,
          title: '8. Contextual Chunk Linking (Parent–Child)',
          icon: { name: 'duo-link' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                      Goal / Problem It Solves
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Preserve document hierarchy and cross-chunk context</li>
                      <li>Maintain relationships between sections after chunking</li>
                      <li>Enable navigation between related document fragments</li>
                      <li>Prevent information loss from isolated chunks</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                      How It Works
                      <MermaidPopover
                        title="Parent-Child Chunking Workflow"
                        diagram={`graph TD
    A[Full Document] --> B[Identify Structure]
    B --> C[Create Parent Chunks]
    C --> D[Section Headers]
    C --> E[Introductions]
    B --> F[Create Child Chunks]
    F --> G[Detailed Paragraphs]
    F --> H[Subsections]
    D --> I[Store Parent Metadata]
    E --> I
    G --> J[Link to Parent ID]
    H --> J
    I --> K[Vector Store]
    J --> K
    K --> L[Retrieve Child]
    L --> M[Include Parent Context]
    style A fill:#e1f5ff
    style M fill:#d4edda`}
                      />
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Parse document headings and structural elements</li>
                      <li>Assign parent_id/child_ids to related chunks</li>
                      <li>Store full hierarchical path (H1 &gt; H2 &gt; H3)</li>
                      <li>Add previous/next links for sequential navigation</li>
                      <li>Optional sliding context window for overlapping content</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                      When to Use
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Technical manuals with nested sections</li>
                      <li>Legal documents with hierarchical structure</li>
                      <li>Product specifications with dependencies</li>
                      <li>Any content where context from parent sections matters</li>
                      <li>When building knowledge graphs from documents</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                      Implementation Steps
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Build table of contents tree from document headings</li>
                      <li>Perform chunking while preserving structural information</li>
                      <li>Generate and link IDs between parent/child chunks</li>
                      <li>Persist relationship metadata with each chunk</li>
                      <li>Implement retrieval joins to fetch related chunks when needed</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `#### Introduction
[energetic] Welcome to technique eight, contextual chunk linking, also known as parent-child chunking. [lecture] This technique recognizes a fundamental problem: sometimes the chunk you retrieve doesn't have enough context on its own. [confidently] By maintaining relationships between chunks at different hierarchical levels, we can preserve the bigger picture while still retrieving precisely.
#### The Core Problem
[storytelling] Imagine you retrieve a chunk that says "This optimization reduced latency by forty percent." That's great, but which optimization? What was the baseline? [concerned] Without the parent context—maybe a section header or introductory paragraph—the information is incomplete or even misleading.
#### Core Goals
[confidently] Our goals with contextual chunk linking are to maintain context across chunk boundaries and link child chunks to their parent context. We want to enable hierarchical retrieval where you can retrieve a specific detail but include its broader context. [lecture] And we want to preserve document structure in our chunked data so that structural relationships aren't lost.
#### How It Works
[lecture] Let me walk you through the parent-child linking approach. First, you chunk the document hierarchically. Create parent chunks from high-level sections, introductions, or major headings. Then create child chunks from the detailed paragraphs and subsections within each parent.
[conversational] Store parent-child relationships in metadata. Each child chunk has a field pointing to its parent chunk ID. [confidently] At retrieval time, you retrieve the child chunks that match the query, but you include the parent context along with them. This gives you both precision and context.
[lecture] An alternative approach is to use overlapping chunks where each chunk includes content from the previous and next chunks. This creates a sliding window of context.
#### When To Use This
[lecture] Parent-child chunking is essential for long technical documents with clear hierarchy—think research papers, technical manuals, or regulatory documents. [conversational] Anytime chunk context alone is insufficient to understand the information, this technique helps.
[confidently] It's crucial for multi-hop reasoning scenarios 👉 seh-NAIR-ee-ohs where answering a question requires combining information from different hierarchical levels. [pleased] And it consistently improves answer accuracy in question-answering systems by providing the context needed to interpret retrieved information correctly.
#### Implementation Approach
[lecture] Here's how to implement this practically. First, parse your document structure, identifying headings, sections, and hierarchical relationships. [conversational] Most documents have some structure, whether it's explicitly marked with heading tags or implicit in the formatting.
[lecture] Create parent chunks from high-level sections—these might be entire sections with their headings. Then create child chunks with more detailed content—individual paragraphs or subsections.
[confidently] Store the parent chunk ID with each child chunk in your metadata. At retrieval time, when you fetch a child chunk, also fetch its parent and include both in the context window. [conversational] You might optionally add sliding window overlap as an additional technique to ensure continuity.
#### Transition
[conversational] Parent-child chunking is powerful, but it introduces complexity and cost. Let's examine the tradeoffs on the next slide.`
        },
        {
          id: 18,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                      Pros
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Reduces hallucinations by providing complete context</li>
                      <li>Enables more precisely grounded answers</li>
                      <li>Supports hierarchical navigation through content</li>
                      <li>Preserves document structure in retrieval systems</li>
                      <li>Improves response quality in RAG applications</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                      Cons
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Requires more metadata and storage overhead</li>
                      <li>Additional join logic needed during retrieval</li>
                      <li>Edge cases with malformed or inconsistent headings</li>
                      <li>More complex to implement than simple chunking</li>
                      <li>May need custom indexing strategies</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `#### The Benefits
[pleased] Parent-child chunking offers several compelling advantages. First, it maintains document structure in your chunked data. You don't lose the hierarchical relationships that authors carefully created to organize their ideas.
[enthusiastically] Second, it improves answer accuracy significantly. When your system can provide both the specific detail and its broader context, users get more complete and accurate answers. [lecture] This is especially important for technical or complex domains where context is crucial.
[confidently] Third, it enables multi-level retrieval. You can retrieve at the child level for precision—finding exactly the relevant paragraph—but include the parent level for context. This gives you the best of both worlds.
[pleased] Finally, it reduces context loss. Even if the specific chunk doesn't mention important background information, the parent chunk fills in those gaps.
#### The Challenges
[cautiously] However, there are some real costs to consider. First, parent-child chunking increases storage requirements because you're storing redundant context. [concerned] The parent information might appear in multiple child chunks' metadata, and if you're including full parent text with each child, that's a lot of duplication.
[lecture] Second, it requires more complex retrieval logic. Your retrieval system can't just fetch a chunk and return it. It needs to follow the parent reference, fetch that chunk, and intelligently combine them. This adds latency and complexity to your system.
[cautiously] Third, if you're including parent context with every child chunk, you'll have higher token usage. In systems with per-token pricing or context window limits, this cost adds up quickly. [concerned] You might blow through your context window with just a few chunks if each one includes its full parent.
[disappointed] Finally, this technique requires proper document structure parsing. If your documents don't have clear structure, or if your parser fails to identify it correctly, the parent-child relationships will be meaningless or even harmful. You need robust structure extraction to make this work.
#### Transition to Next Technique
[confidently] Despite these costs, parent-child chunking is increasingly common in production RAG systems because the accuracy improvements often justify the additional complexity. [energetic] Now let's move to technique nine, text normalization, which is a more traditional preprocessing technique that's still useful in specific scenarios.`
        }
      ]
    },
    {
      id: 'technique-9',
      title: '9. Text Normalization',
      slides: [
        {
          id: 19,
          title: '9. Text Normalization',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                      Goal / Problem It Solves
                    </h4>
                    <ul style={{ fontSize: '1.1rem' }}>
                      <li>Standardize casing, numbers, dates, abbreviations to reduce sparsity</li>
                      <li>Create consistent text representation for improved matching</li>
                      <li>Reduce vocabulary size for efficient indexing/embedding</li>
                      <li>Handle variant forms of the same concept consistently</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                      How It Works
                      <MermaidPopover
                        title="Text Normalization Pipeline"
                        diagram={`graph TD
    A[Raw Text] --> B[Lowercase Conversion]
    B --> C[Unicode Normalization]
    C --> D{NFKC or NFKD?}
    D --> E[Accent Removal]
    E --> F[Contraction Expansion]
    F --> G[Lookup Dictionary]
    G --> H[Number Standardization]
    H --> I{Preserve Entities?}
    I -->|Yes| J[Entity Protection]
    I -->|No| K[Full Normalization]
    J --> L[Normalized Text]
    K --> L
    style A fill:#e1f5ff
    style L fill:#d4edda`}
                      />
                    </h4>
                    <ul style={{ fontSize: '1.1rem' }}>
                      <li>Lowercasing (task-dependent; preserve named entities if needed)</li>
                      <li>Expand contractions (can't → cannot, don't → do not)</li>
                      <li>Normalize numerals and dates to standard format</li>
                      <li>Standardize units, measurements, and abbreviations</li>
                      <li>Convert Unicode characters to ASCII equivalents when appropriate</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                      When to Use
                    </h4>
                    <ul style={{ fontSize: '1.1rem' }}>
                      <li>Indexing and classical machine learning pipelines</li>
                      <li>Sometimes before embedding generation (context-dependent)</li>
                      <li>When combining multiple document sources with varied formatting</li>
                      <li>For keyword search and pattern matching applications</li>
                      <li>Always keep a raw copy of the original text alongside normalized version</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                      Implementation Steps
                    </h4>
                    <ul style={{ fontSize: '1.1rem' }}>
                      <li>Define normalization profile based on downstream tasks</li>
                      <li>Apply case normalization rules (lowercase/preserve specific entities)</li>
                      <li>Identify and standardize dates, numbers, measurements</li>
                      <li>Create exceptions for acronyms, code blocks, proper names</li>
                      <li>Normalize spacing and punctuation</li>
                      <li>Store original text in metadata for reference/display</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `#### Introduction
[energetic] Welcome to technique nine, text normalization. [lecture] This is a classic preprocessing technique that converts text to a canonical form. [conversational] While it's less critical for modern transformer-based systems, it still has important use cases in production pipelines.
#### The Core Concept
[confidently] Text normalization is all about consistency. [conversational] Should "café" and "cafe" be treated as the same word? What about "can't" versus "cannot"? [lecture] Text normalization makes these decisions systematically, converting varied text into a standardized form.
#### Core Goals
[confidently] Our goals with text normalization are to convert text to a canonical form, standardize casing, accents, and ligatures 👉 LIG-uh-churs, expand contractions and abbreviations, and make text consistent for matching and comparison operations.
#### How It Works
[lecture] Let me show you the text normalization pipeline. The first step is lowercase conversion—converting everything to lowercase for case-insensitive matching. Then comes Unicode normalization using standards like NFKC 👉 N-F-K-C or NFKD 👉 N-F-K-D. [conversational] These standards handle cases where the same character can be represented in multiple ways in Unicode.
[lecture] Next, you might remove accents or diacritics 👉 dy-uh-KRIT-iks. "Café" becomes "cafe," "naïve" becomes "naive." This helps with matching across different input conventions.
Contraction expansion converts "can't" to "cannot," "won't" to "will not," and so on. This is done using lookup dictionaries of common contractions.
[conversational] You might also standardize numbers and dates. Convert "1st," "first," and the numeral one to a consistent form.
#### When To Use This
[lecture] Text normalization is most useful before keyword matching or search in traditional systems. If you're using BM25 👉 B-M-twenty-five or similar algorithms, normalization helps reduce spurious mismatches.
[conversational] Use it when case-sensitivity causes issues. If users search for "python" but your documents have "Python," normalization ensures they match.
[lecture] It's helpful for processing user queries where users might type in various forms—with or without accents, with contractions, and so on.
[cautiously] However, note that this is primarily for traditional NLP systems, not transformer-based embeddings. Modern embedding models handle these variations naturally, so normalization is often unnecessary and can even be harmful.
#### Implementation Approach
[lecture] Here's how to implement text normalization. First, apply lowercase transformation to your text. Then normalize Unicode characters using Python's unicodedata library or similar tools.
[conversational] Expand common contractions using a lookup dictionary. You can find standard contraction lists for English and other languages. [cautiously] Remove or standardize accents—though be careful, as accents can distinguish words in some languages.
[lecture] Optionally normalize numbers and dates for consistency. And here's a critical point: preserve entities if needed. [storytelling] You might want to protect named entities from normalization so that "US" doesn't become "us" and lose its meaning as United States.
#### Transition
[conversational] Text normalization is straightforward but has important limitations in modern NLP. Let's examine the pros and cons.`
        },
        {
          id: 20,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                      Pros
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>More consistent tokens for improved matching</li>
                      <li>Improved recall for information retrieval tasks</li>
                      <li>Reduced vocabulary size speeds up ML processing</li>
                      <li>Makes cross-document comparison more reliable</li>
                      <li>Helps with fuzzy matching and error tolerance</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                      Cons
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Loss of stylistic and case-based signals</li>
                      <li>Can be risky for case-sensitive content (programming code, legal text)</li>
                      <li>May remove important distinctions in specialized domains</li>
                      <li>Difficult to define one-size-fits-all normalization rules</li>
                      <li>Potential over-normalization can harm semantic precision</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `#### The Benefits
[pleased] Text normalization offers several clear benefits, especially for traditional systems. First, it improves matching consistency. [conversational] When you search for "cafe," you'll match "café" and "Café" and "CAFE"—all the variations users might type or authors might write.
[confidently] Second, it reduces vocabulary size in your system. Instead of treating "café," "cafe," and "Cafe" as three different words, you treat them as one. This reduces sparsity in traditional models and makes your system more efficient.
[pleased] Third, it simplifies comparison operations. If you're doing exact string matching, deduplication, or similar tasks, normalization makes these operations more reliable.
Finally, it works well for keyword search in traditional systems. [lecture] TF-IDF 👉 T-F-I-D-F and BM25 benefit significantly from normalization because they rely on exact term matching.
#### The Challenges
[cautiously] But text normalization has some serious downsides in modern systems. First, it loses semantic information. [storytelling] Casing often carries meaning—"Apple" the company versus "apple" the fruit. Formatting can indicate emphasis or special meaning. [disappointed] When you normalize everything away, you lose these signals.
[concerned] Second, it can confuse entities in problematic ways. "US" the country becomes "us" the pronoun. "WHO" the World Health Organization becomes "who" the question word. This can introduce errors rather than fixing them.
[cautiously] Third, it's overly aggressive for modern embeddings. [lecture] Transformer models like BERT 👉 BURT or embedding models based on them handle these variations naturally through their training. They know that "café" and "cafe" are related without explicit normalization. [disappointed] Normalizing text before sending it to these models might actually reduce their effectiveness.
[conversational] Finally, text normalization may reduce search precision. By conflating different forms, you might match things that shouldn't match. The increase in recall comes at the cost of precision.
#### Transition to Next Technique
[confidently] Text normalization is a legacy technique that's still useful for specific scenarios, but think carefully before applying it to modern embedding-based systems. [energetic] Now let's move to our final technique, light stopword trimming, which has a similar story—useful in specific contexts but often unnecessary for modern approaches.`
        }
      ]
    },
    {
      id: 'technique-10',
      title: '10. Light Stopword Trimming',
      slides: [
        {
          id: 21,
          title: '10. Light Stopword Trimming',
          icon: { name: 'duo-eraser' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                      Goal / Problem It Solves
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Reduce high-frequency function words while preserving meaning</li>
                      <li>Improve search precision by removing words that add little semantic value</li>
                      <li>Reduce index size and processing overhead</li>
                      <li>Focus retrieval on content words rather than structure words</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                      How It Works
                      <MermaidPopover
                        title="Stopword Trimming Process"
                        diagram={`graph TD
    A[Input Text] --> B[Tokenize]
    B --> C[Load Stopword List]
    C --> D{Check Each Token}
    D --> E{Is Stopword?}
    E -->|Yes| F{Important Context?}
    E -->|No| G[Keep Token]
    F -->|Yes| G
    F -->|No| H[Remove Token]
    G --> I[Filtered Tokens]
    H --> I
    I --> J{Validate Phrases}
    J --> K[Domain Check]
    K --> L[Final Text]
    style A fill:#e1f5ff
    style L fill:#d4edda`}
                      />
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Curated stoplist of common words (a, the, is, of, etc.)</li>
                      <li>POS-aware removal that preserves important modifiers</li>
                      <li>Keeping negations/modals that change meaning</li>
                      <li>Domain exceptions (words that would be stopwords in general language but have significance in the domain)</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                      When to Use
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Classical IR (BM25), keyword indexing</li>
                      <li>Often skip for LLMs and neural retrieval methods</li>
                      <li>Feature engineering for traditional ML text classifiers</li>
                      <li>When storage/processing constraints are significant</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                      Implementation Steps
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Start with standard language stopword list</li>
                      <li>Whitelist domain terms that might appear in general stoplists</li>
                      <li>Evaluate impact on sample queries and results</li>
                      <li>Avoid removing stopwords within code blocks/quotes</li>
                      <li>Apply conservatively, prioritizing precision over token reduction</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `#### Introduction
[lecture] And finally, we've reached technique ten, light stopword trimming. [conversational] This is our last document preprocessing technique, and it's another traditional approach that you need to use carefully in modern systems. [confidently] The key word here is "light"—aggressive stopword removal is almost never the right choice anymore.
#### The Core Concept
[lecture] Stopwords are extremely common words like "the," "is," "at," "which," and "on." These words appear so frequently that in traditional information retrieval, they were considered noise that diluted the signal from more meaningful content words. [conversational] The idea was to remove them to focus on the terms that really matter.
#### Core Goals
[confidently] Our goals with light stopword trimming are to remove extremely common words that add noise in traditional systems, reduce dimensionality for traditional models, and focus on content-bearing terms. [cautiously] But—and this is crucial—we want to be careful not to remove semantic value. Hence "light" trimming, not aggressive removal.
#### How It Works
[lecture] Let me show you how modern stopword trimming works. The process starts with predefined stopword lists from libraries like NLTK or spaCy. These lists contain the most common function words in each language. You filter out only the highest-frequency function words—words that carry little semantic content on their own.
[conversational] Modern approaches use context-aware removal. Instead of blindly removing all stopwords, they preserve them in important phrases. [storytelling] The phrase "to be or not to be" would be destroyed by aggressive stopword removal, but light trimming recognizes this is a meaningful phrase and leaves it intact.
[lecture] You can also create domain-specific stopword lists. In medical documents, certain common medical terms might be so ubiquitous that they're not useful for distinguishing documents. But these wouldn't be on a general stopword list.
#### When To Use This
[confidently] Stopword trimming is appropriate for traditional keyword search systems using inverted indexes. It's useful with TF-IDF or BM25 retrieval where high-frequency function words can dominate the scores.
[conversational] Use it when token limits are tight and you need to compress text. Removing stopwords can reduce text length by twenty to thirty percent in some cases.
[cautiously] But—and this is critical—this is NOT recommended for transformer embeddings. [lecture] Modern embedding models are trained with stopwords included, and they use these words to understand syntax and context. [disappointed] Removing stopwords before embedding can actually hurt performance.
#### Implementation Approach
[lecture] Here's how to implement light stopword trimming safely. First, load a stopword list for your language from a library like NLTK or spaCy. Filter out stopwords from your text, but—and this is important—keep stopwords in important contexts.
[conversational] How do you know what's important? Check for known phrases, idioms, and expressions. "in the end," "on behalf of," "by the way"—these contain stopwords but carry specific meanings. Preserve them.
[confidently] Validate your approach on domain-specific phrases. Does your domain have technical phrases that contain stopwords? Make sure you're not breaking those.
[cautiously] Most importantly, measure the impact on retrieval quality. A/B test with and without stopword trimming. [sigh] In many modern systems, you'll find that stopword trimming doesn't help and might actually hurt.
#### Transition
[conversational] Stopword trimming is the most controversial technique in modern preprocessing. Let's look at when it helps and when it hurts.`
        },
        {
          id: 22,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                      Pros
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Smaller search index size</li>
                      <li>Less noise for keyword search</li>
                      <li>Faster processing for traditional IR systems</li>
                      <li>Focuses attention on content words over function words</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                      Cons
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Can drop meaning if too aggressive</li>
                      <li>Hurts phrase/semantic nuance preservation</li>
                      <li>May break contextual relationships between terms</li>
                      <li>Less beneficial for neural/embedding approaches</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `#### The Benefits
[pleased] Let's start with the scenarios where stopword trimming actually provides value. [confidently] First, it reduces noise in keyword systems. If you're using a traditional inverted index, stopwords can inflate document scores without adding meaningful information. Removing them focuses the system on distinctive terms.
[conversational] Second, it lowers storage and processing requirements. Stopwords can be twenty to thirty percent of your text. Removing them means smaller indexes, faster search, and lower storage costs.
[pleased] Third, it focuses on meaningful terms. Your index contains only the words that actually distinguish one document from another, which can improve precision in some traditional systems.
[confidently] Finally, it speeds up traditional search. Fewer terms to index, fewer terms to query, faster retrieval. For high-throughput systems using traditional algorithms, this can matter.
#### The Challenges
[cautiously] But stopword trimming has significant downsides that limit its usefulness. [disappointed] First, it can remove semantic value. Stop words aren't just grammatical filler—they contribute to meaning. [storytelling] The difference between "not good" and "good" is just one stopword, but the meanings are opposite.
[lecture] Second, modern embeddings don't need this. Transformer-based models and modern embedding models understand the role of function words. They know how to weight them appropriately. [sigh] Removing stopwords before embedding removes information that these models can use.
[cautiously] Third, context-dependent removal is tricky to get right. What's a meaningless stopword in one context might be crucial in another. Building rules to handle all these cases is difficult and error-prone.
[conversational] Finally, language-specific lists are required. You need different stopword lists for every language you support. And those lists need to be maintained and updated. The multilingual overhead can be significant.
#### Closing Thoughts
[confidently] In modern systems, especially those using transformer-based embeddings, stopword trimming is rarely necessary and often counterproductive. [cautiously] Use it only in traditional keyword systems where you've measured a clear benefit. [pleased] For everything else, let your embeddings handle the words as they are.
[warmly] And that brings us to the end of these ten preprocessing techniques. [confidently] We've covered critical methods from sentence boundary detection through semantic chunking to these traditional but still occasionally useful methods like normalization and stopword trimming. [lecture] The key is knowing which techniques to apply for your specific use case and architecture.`
        }
      ]
    },
    {
      id: 'technique-11',
      title: '11. Lemmatization / Stemming',
      slides: [
        {
          id: 23,
          title: '11. Lemmatization / Stemming',
          icon: { name: 'duo-seedling' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                      Goal / Problem It Solves
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Collapse inflections to base forms to reduce vocabulary</li>
                      <li>Normalize word variants (running → run, studies → study)</li>
                      <li>Reduce vocabulary sparsity for more consistent processing</li>
                      <li>Handle morphological variations across languages</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                      How It Works
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Stemmers (Porter/Snowball) use rule-based suffix stripping</li>
                      <li>Lemmatizers (WordNet, spaCy) use dictionaries and POS information</li>
                      <li>POS tagging helps disambiguate words (e.g., "lying" as verb vs. adjective)</li>
                      <li>Language-specific morphological rules handle irregular forms</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="Stemming vs Lemmatization: Word Normalization"
                        diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    subgraph Input["Input Word Forms"]
        W1["🏃 running"]
        W2["📚 studies"]
        W3["🧠 better"]
    end
    subgraph Stem["Stemming (Porter) — fast, crude"]
        S1["run"]
        S2["studi ❌"]
        S3["better"]
    end
    subgraph Lemma["Lemmatization (WordNet) — accurate"]
        L1["run"]
        L2["study ✅"]
        L3["good ✅"]
    end
    W1 --> S1 & L1
    W2 --> S2 & L2
    W3 --> S3 & L3
    style Input fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
    style Stem fill:#fff9c4,stroke:#f57c00,stroke-width:2px,color:#000
    style Lemma fill:#c8e6c9,stroke:#4caf50,stroke-width:2px,color:#000`}
                      />
                    </div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                      When to Use
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Search/IR systems to improve recall for morphological variants</li>
                      <li>Classic ML text classification and clustering tasks</li>
                      <li>When vocabulary reduction is important for performance</li>
                      <li>Often unnecessary for modern embeddings/transformer models</li>
                    </ul>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                      Implementation Steps
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Tokenize text into words</li>
                      <li>Apply POS tagging if using lemmatization</li>
                      <li>Apply lemmatizer with POS information</li>
                      <li>Fallback to stemming for unknown words</li>
                      <li>Store both original and lemmatized/stemmed forms</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `#### Introduction
[energetic] Welcome to technique eleven, lemmatization and stemming. [lecture] These are classic text normalization techniques that reduce words to their base or root forms. [conversational] While less critical for modern transformer models, they still have specific use cases in traditional NLP pipelines.
#### The Core Concept
[conversational] Words appear in many forms—"run," "running," "runs," "ran." For many tasks, you want to treat these as the same concept. [confidently] Stemming and lemmatization solve this by reducing variants to a common form.
#### Stemming vs Lemmatization
[lecture] Stemming is aggressive and rule-based. [conversational] The Porter Stemmer 👉 POR-ter might turn "running" into "run" but [amused] also "university" into "univers"—which isn't a real word. [playfully] It's fast but crude. [lecture] Lemmatization is smarter—it uses dictionaries and part-of-speech information to find the actual dictionary form. "Running" becomes "run," but "better" becomes "good" because that's the lemma. [conversational] It's more accurate but computationally expensive.
#### When To Use This
[confidently] These techniques shine in traditional search systems where you want "searching" to match "search." They're useful for text classification and clustering with traditional ML models. [cautiously] But here's the key insight: modern transformer models and embeddings don't need this. They're trained to understand that "running" and "run" are related. [disappointed] Lemmatizing before embedding might actually hurt performance.
#### Transition
[conversational] Lemmatization and stemming are foundational NLP techniques, but they come with tradeoffs. Let's explore the pros and cons next.`
        },
        {
          id: 24,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                      Pros
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Lower vocabulary sparsity for better ML performance</li>
                      <li>Improved recall on search variants ("running" finds "run")</li>
                      <li>Particularly helpful for morphologically rich languages</li>
                      <li>Makes terms more consistent for analysis and counting</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                      Cons
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Over-stemming can harm precision (e.g., "university" → "univers")</li>
                      <li>Lemmatization requires more computational resources</li>
                      <li>Language-specific resources needed for quality lemmatization</li>
                      <li>May lose nuance between different forms (e.g., "historic" vs. "historical")</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `#### The Benefits
[pleased] Lemmatization and stemming provide clear benefits for traditional systems. [confidently] First, they reduce vocabulary sparsity—instead of "run," "running," "runs," and "ran" being four separate tokens, they become one. This helps traditional ML models learn better. [enthusiastically] Second, search recall improves dramatically. Users searching for "run" will find documents containing "running." [lecture] Third, this is especially valuable for morphologically rich languages like German or Finnish where words have many inflected forms. [pleased] Finally, it makes term counting and analysis more consistent.
#### The Challenges
[cautiously] But there are significant downsides. [disappointed] Over-stemming creates nonsense words and can conflate unrelated terms. [storytelling] "university" and "universal" both stem to "univers," but they're different concepts. [lecture] Lemmatization avoids this but requires much more computation and language-specific resources. [conversational] You lose grammatical nuance—past tense versus present tense might matter for understanding temporal relationships. [concerned] Most critically, modern transformer models don't benefit from this preprocessing. BERT 👉 BURT and similar models understand morphological relationships natively. [disappointed] Preprocessing might actually degrade performance.
#### Transition to Next Technique
[conversational] Lemmatization and stemming are legacy techniques valuable for specific traditional systems. [energetic] Now let's move to technique twelve, keyphrase extraction, which helps identify the most important terms and concepts in your documents.`
        }
      ]
    },
    {
      id: 'technique-12',
      title: '12. Keyphrase Extraction',
      slides: [
        {
          id: 25,
          title: '12. Keyphrase Extraction',
          icon: { name: 'duo-tags' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Identify salient terms/phrases for tagging and retrieval</li>
                    <li>Extract key concepts and terminology from documents</li>
                    <li>Create concise representation of document content</li>
                    <li>Enable better document indexing and searchability</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Unsupervised methods (TF-IDF, RAKE, TextRank/PositionRank)</li>
                    <li>Supervised extraction using ML/NLP models</li>
                    <li>Embedding-based ranking and MMR for deduplication</li>
                    <li>Statistical and linguistic features for candidate scoring</li>
                  </ul>
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Keyphrase Extraction Pipeline"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    Doc["📄 Document Text"] --> Cand["Candidate Phrases\n(noun chunks / n-grams)"]
    Cand --> Score{"Scoring Methods"}
    Score -->|TF-IDF| S1["🔢 Statistical Score"]
    Score -->|TextRank| S2["🕸️ Graph Score"]
    Score -->|Embeddings| S3["🧠 Semantic Score"]
    S1 & S2 & S3 --> Rank["📊 Ranked Candidates"]
    Rank --> MMR["MMR Deduplication"]
    MMR --> Out["🏷️ Top Keyphrases\n(metadata tags)"]
    style Doc fill:#4fc3f7,color:#000
    style Rank fill:#e1bee7,color:#000
    style Out fill:#81c784,color:#000`}
                    />
                  </div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Document metadata and tagging</li>
                    <li>Search boosting and relevance ranking</li>
                    <li>Creating document summaries</li>
                    <li>Content recommendations and related documents</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Generate candidate phrases (noun phrases/chunks)</li>
                    <li>Score phrases using statistical/ML methods</li>
                    <li>Rank and select top keyphrases</li>
                    <li>Deduplicate semantically similar phrases</li>
                    <li>Evaluate coverage and relevance</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          notes: `#### Introduction
[energetic] Keyphrase extraction identifies the most important terms and phrases in your documents. [confidently] These keyphrases serve as tags, metadata, and navigation aids that improve discoverability and organization.
#### Core Approach
[lecture] Methods range from statistical like TF-IDF and RAKE 👉 RAYK to graph-based like TextRank, to modern embedding approaches. [conversational] The goal is to identify phrases that best represent the document's content and distinguish it from others. [pleased] These become searchable tags and enable faceted filtering.
#### Use Cases and Benefits
[enthusiastically] Keyphrase extraction creates rich metadata for search interfaces, enables topic-based navigation, and improves content recommendations. [confidently] It's fully automatable and works across languages with appropriate tools.
#### Challenges
[cautiously] Quality varies significantly by document type and domain. [conversational] Technical papers have clear keyphrases; conversational text is harder. Tuning is required to balance precision and recall. [disappointed] The keyphrases extracted are only as good as the algorithm and the document structure.
#### Transition
[conversational] Keyphrase extraction adds valuable metadata, but results require validation. Let's look at the tradeoffs.`
        },
        {
          id: 26,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                      Pros
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Enables quick navigation and filtering</li>
                      <li>Boosts retrieval quality through better indexing</li>
                      <li>Improves document summarization</li>
                      <li>Aids content organization and discovery</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                      Cons
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Noisy or irrelevant candidates in unstructured text</li>
                      <li>Domain adaptation and stopword lists required</li>
                      <li>May miss implicit concepts not explicitly mentioned</li>
                      <li>Quality depends on document structure and clarity</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `#### The Benefits
[pleased] Keyphrase extraction enables powerful navigation and filtering in large document collections. [enthusiastically] Users can quickly find relevant content by browsing or filtering by keyphrases. [confidently] It improves retrieval precision by providing additional signals beyond full-text search. [conversational] Document summarization becomes easier when you have the key concepts identified. [pleased] Overall content discovery and organization significantly improve.
#### The Challenges
[cautiously] However, quality is inconsistent. [disappointed] Unstructured conversational text produces noisy candidates. [lecture] Domain-specific terminology might require custom stopword lists and glossaries. [concerned] Implicit concepts that aren't explicitly mentioned will be missed. [conversational] Document structure and writing clarity directly impact extraction quality—clear technical writing works best.
#### Transition to Next Technique
[confidently] Keyphrase extraction adds valuable structure to unstructured text. [energetic] Now let's move to technique thirteen, entity tagging, which goes deeper by identifying specific people, organizations, locations, and domain entities in your documents.`
        }
      ]
    },
    {
      id: 'technique-13',
      title: '13. Entity Tagging (NER)',
      slides: [
        {
          id: 27,
          title: '13. Entity Tagging (NER)',
          icon: { name: 'duo-user-tag' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Detect people, orgs, products, locations, and custom entities for structure</li>
                    <li>Convert unstructured text into structured, queryable data</li>
                    <li>Enable entity-based search, filtering, and analytics</li>
                    <li>Assist in compliance/PII identification and redaction</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Sequence labeling (BIO) with spaCy/transformers models</li>
                    <li>Rule-based patterns for specific entity formats</li>
                    <li>Optional entity linking to knowledge bases for disambiguation</li>
                    <li>Custom entity type recognition through additional training</li>
                  </ul>
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="NER: Text → Tagged Entities"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
graph TB
    Text["📝 'Tim Cook leads Apple in Cupertino'"] --> NER["NER Model\n(spaCy / BERT)"]
    subgraph Entities["Tagged Entities"]
        P["👤 Tim Cook → PERSON"]
        O["🏢 Apple → ORG"]
        L["📍 Cupertino → LOC"]
    end
    NER --> Entities
    Entities --> Meta["💾 Structured Metadata\n{text, type, start, end}"]
    style Text fill:#4fc3f7,color:#000
    style NER fill:#e1bee7,color:#000
    style Entities fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
    style Meta fill:#81c784,color:#000`}
                    />
                  </div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Compliance/PII detection requirements</li>
                    <li>Analytics dashboards with entity breakdowns</li>
                    <li>Knowledge graph construction from documents</li>
                    <li>Information extraction and disambiguation tasks</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Pick/base model (spaCy, BERT, etc.)</li>
                    <li>Add custom entity labels and patterns if needed</li>
                    <li>Train/fine-tune on domain-specific data if necessary</li>
                    <li>Run model and extract entity spans with their types</li>
                    <li>Store spans, types, normalized IDs as metadata</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          notes: `#### Introduction
[confidently] Named Entity Recognition, or NER 👉 N-E-R, identifies and tags specific entities in text—people, organizations, locations, dates, products, and domain-specific entities. [enthusiastically] This transforms unstructured text into structured, queryable data that enables powerful entity-based search and analytics.
#### The Power of Entity Tagging
[pleased] Entity tagging enables entity-based search where users can filter by specific people, organizations, or locations. [lecture] It's essential for compliance and PII detection, identifying sensitive information that needs redaction or protection. [conversational] It also enables knowledge graph construction, linking entities and their relationships across documents. [confidently] The structured data created from entities can power analytics dashboards showing entity distributions and trends.
#### Implementation
[lecture] Modern NER uses transformer models like BERT fine-tuned for sequence labeling, or libraries like spaCy with pre-trained models. [conversational] Rule-based patterns can supplement ML models for specific formats like phone numbers or product codes. [cautiously] Domain-specific entities often require fine-tuning the model on labeled examples from your domain.
#### Challenges
[concerned] The main challenges are domain adaptation—out-of-the-box models work well for common entities but struggle with specialized domains. [conversational] Entity disambiguation is tricky when the same name refers to different entities. [disappointed] Long, noisy documents degrade accuracy. [cautiously] Custom training requires labeled data, which is expensive to create.
#### Transition
[conversational] Entity tagging is powerful but requires investment in model selection and tuning. Let's examine the tradeoffs.`
        },
        {
          id: 28,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                      Pros
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Turns text into structured data for analysis</li>
                      <li>Enables database-like joins and entity reasoning</li>
                      <li>Improves search precision and filtering capabilities</li>
                      <li>Creates metadata for document organization</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                      <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                      Cons
                    </h4>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Domain shift hurts accuracy on specialized content</li>
                      <li>May require custom training for domain-specific entities</li>
                      <li>Long noisy text degrades performance</li>
                      <li>Entity disambiguation can be challenging</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `#### The Benefits
[pleased] Entity tagging transforms unstructured text into structured, queryable data. [enthusiastically] You can run entity-based queries like "show me all documents mentioning Apple the company, not apple the fruit." [conversational] Database-like joins become possible—find all documents where person X works at organization Y. [confidently] Search precision improves dramatically with entity filtering. [pleased] The metadata created enables sophisticated document organization and discovery.
#### The Challenges
[concerned] Domain adaptation is the biggest challenge—models trained on news articles struggle with medical records or legal contracts. [cautiously] Custom entity types require labeled training data and fine-tuning effort. [disappointed] Long, noisy documents with poor formatting degrade performance. [conversational] Entity disambiguation remains hard—is "Washington" the person, city, or state? [cautiously] False positives and negatives require threshold tuning and validation.
#### Transition to Next Technique
[confidently] Entity tagging adds powerful structure but requires domain-specific effort. [energetic] Now let's move to technique fourteen, removing dead chunks, which cleans up low-value content that survived earlier preprocessing stages.`
        }
      ]
    },
    {
      id: 'technique-14',
      title: '14. Remove Dead Chunks',
      slides: [
        {
          id: 29,
          title: '14. Remove Dead Chunks',
          icon: { name: 'duo-trash' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Drop low-value chunks (noise, artifacts, empty or repetitive text)</li>
                    <li>Identify and remove chunks that don't contribute meaningful information</li>
                    <li>Improve quality and relevance of document collection</li>
                    <li>Filter out junk content that could pollute search results</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Length/alpha ratio thresholds to detect empty/artifact chunks</li>
                    <li>Entropy calculations to measure information density</li>
                    <li>Stopword density analysis to find low-value text</li>
                    <li>Embedding norm/outlier checks to find anomalous content</li>
                    <li>Retrieval frequency tracking to identify unused chunks</li>
                  </ul>
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Dead Chunk Detection: Quality Scoring Flow"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    Chunk["📦 Chunk"] --> Q1{"Length ≥ 50\nchars?"}
    Q1 -->|No| D1["🗑️ Too Short"]
    Q1 -->|Yes| Q2{"Alpha Ratio\n≥ 50%?"}
    Q2 -->|No| D2["🗑️ Artifacts /\nSymbols"]
    Q2 -->|Yes| Q3{"Entropy\n≥ 2.5 bits?"}
    Q3 -->|No| D3["🗑️ Low Info\nDensity"]
    Q3 -->|Yes| Keep["✅ Keep &\nIndex"]
    style Chunk fill:#4fc3f7,color:#000
    style Keep fill:#c8e6c9,stroke:#4caf50,stroke-width:2px,color:#000
    style D1 fill:#ffcdd2,stroke:#c62828,color:#000
    style D2 fill:#ffcdd2,stroke:#c62828,color:#000
    style D3 fill:#ffcdd2,stroke:#c62828,color:#000`}
                    />
                  </div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>After chunking process and before indexing</li>
                    <li>Before embedding or training to reduce computation</li>
                    <li>When working with mixed-quality document sources</li>
                    <li>To optimize storage and retrieval performance</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Compute quality scores for each chunk (length, entropy, embedding properties)</li>
                    <li>Set appropriate thresholds based on data analysis</li>
                    <li>Review samples to validate thresholds</li>
                    <li>Apply filters to remove low-quality chunks</li>
                    <li>Log removals for auditability and potential recovery</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          notes: `
#### Introduction to Dead Chunks & Quality Filtering

[energetic] Welcome to Technique 14: Dead Chunks and Quality Filtering. [concerned] This is about managing one of the most frustrating challenges in production RAG systems—garbage in, garbage out. [lecture] No matter how sophisticated your embedding model or retrieval algorithm is, if you're indexing low-quality or useless chunks, they'll pollute your search results and waste compute resources. [confidently] This technique focuses on proactively identifying and removing "dead chunks"—content that adds no value and may even degrade system performance.

[playfully] Think of this as Marie Kondo-ing your document index. [amused] Not every chunk sparks joy—or information. [conversational] Some chunks are just headers with no content, navigation fragments from web scraping, boilerplate legal text repeated across documents, or the result of poor PDF parsing that left you with gibberish. [confidently] Quality filtering is about systematically detecting and removing these issues before they make it into your index.

#### What Are Dead Chunks?

[lecture] Dead chunks come in many varieties, and understanding them helps you design better filters. [conversational] **Header-only chunks** might contain just "Chapter 5: Introduction" with no actual content. **Navigation artifacts** from web scraping might be "Home | Products | Contact Us" repeated across pages. [disappointed] **Parsing artifacts** could be random character sequences like "Œ\`Ñ¢" from OCR errors or encoding issues. **Boilerplate repetition** includes disclaimers, footers, or copyright notices repeated verbatim across documents.

👉 Pronunciation: **boilerplate** = BOY-ler-plate (standard repeated text); **gibberish** = JIB-er-ish (nonsensical text)

[lecture] There are also **empty or near-empty chunks** that passed through chunking because they technically met minimum length requirements but contain only whitespace or stopwords. [conversational] And finally, **retrieval-orphan chunks**—content that users never retrieve despite being indexed, suggesting it's not useful or not discoverable through search.

#### Quality Detection Methods

[lecture] Let's explore practical techniques for identifying low-quality chunks. [confidently] **Length and alpha ratio thresholds** are the simplest—if a chunk is under 20 characters or has less than 50% alphabetic characters, it's probably not useful content. This catches fragments, navigation elements, and parsing errors.

[lecture] **Entropy calculations** measure information density. [conversational] Entropy is essentially how "random" or "informative" text is. Repeated boilerplate has very low entropy because it's predictable. You can calculate character-level or word-level entropy and flag chunks that fall below a threshold, indicating repetitive or formulaic text.

👉 Pronunciation: **entropy** = EN-truh-pee (measure of randomness/information content)

[lecture] **Stopword density analysis** checks what percentage of a chunk consists of common words like "the," "and," "is." [storytelling] If 80% of your chunk is stopwords, it's probably not carrying much semantic weight. [conversational] **Embedding norm and outlier checks** leverage your embedding model—chunks with anomalously low vector norms or those that cluster far from other content might be outliers worth reviewing.

[lecture] Finally, **retrieval frequency tracking** in production systems can identify chunks that are never retrieved. [conversational] If a chunk has been indexed for months but never appears in any search results, it's a candidate for removal. This is post-deployment quality assessment.

#### When to Use Quality Filtering

[confidently] Apply quality filtering **after chunking but before indexing**. This is your last line of defense before content enters your vector database. [lecture] It's especially critical **before embedding or training**, because generating embeddings for millions of dead chunks wastes GPU time and storage. [cautiously] If you're working with **mixed-quality document sources**—scraped websites, user-uploaded PDFs, legacy documents—quality filtering becomes essential.

[pleased] This technique is also valuable when **optimizing storage and retrieval performance**. Smaller indexes mean faster search, lower costs, and better precision. [confidently] Every dead chunk you remove is one less false positive in search results.

#### Implementation Steps

[lecture] Start by **computing quality scores** for each chunk across multiple dimensions: minimum length (e.g., 50 characters), alpha ratio (e.g., >50% alphabetic), entropy (e.g., >2.5 bits per word), stopword density (e.g., <70%), and embedding properties if available. [conversational] These scores help you identify problematic chunks programmatically.

[cautiously] Next, **set appropriate thresholds** based on your data. Don't just pick arbitrary numbers—analyze a sample of your corpus to understand the distribution of these metrics. [conversational] What's the typical length of a meaningful chunk in your domain? What's normal entropy for technical documentation vs. conversational text?

👉 [confidently] **Review samples** manually. Retrieve chunks flagged by your filters and inspect them. Are you catching actual garbage, or are you accidentally filtering useful content? [cautiously] This validation step prevents overly aggressive filtering that could remove rare but valuable information.

[lecture] Once validated, **apply the filters** to remove low-quality chunks from your pipeline. [confidently] Critically, **log all removals** for auditability. Store rejected chunks separately (at least temporarily) so you can review them later if you discover your filters were too strict. [conversational] This logging also helps you understand what types of problems are most common in your data.

#### Benefits: Cleaner, Leaner Indexes

[pleased] The benefits are significant. [enthusiastically] **Smaller index sizes** mean reduced storage costs—potentially cutting your vector database bill by 20-40% if you're dealing with noisy sources. [confidently] **Higher precision in search results** occurs because you've removed noise that might have matched queries spuriously. [pleased] **Cost savings** extend to embedding generation, indexing, and retrieval compute. And perhaps most importantly, **better user experience**—users get more relevant results and aren't frustrated by garbage showing up in their answers.

#### Challenges: The Filtering Dilemma

[cautiously] The main challenge is the **risk of removing rare but important information**. [conversational] Medical case reports, edge cases, or unique technical scenarios might have characteristics (low frequency, unusual vocabulary) that trigger your quality filters. [storytelling] You don't want to throw out the baby with the bathwater.

[lecture] **Threshold tuning** is non-trivial and **domain-specific**. Scientific papers have different length distributions than social media posts. Legal documents have different entropy profiles than user manuals. [cautiously] You need to calibrate filters for each corpus type or content category.

[conversational] **Domain-specific quality metrics** may be required. A chunk that looks like garbage in general text might be perfectly valid code, mathematical notation, or chemical formulas. [concerned] And there's always the danger of being **too aggressive**—overfitting your filters to known problems and inadvertently removing content that doesn't conform to your expectations but is actually valuable.

#### Transition to Technique 15

[pleased] Now that we've removed the dead weight from our index, let's enhance what remains. [energetic] Our next technique, Chunk Summary Metadata, focuses on generating compact, informative previews of each chunk. [conversational] These summaries help with ranking, result presentation, and providing quick context without loading full chunk content. Let's see how to create and leverage these metadata summaries effectively.
          `
        },
        {
          id: 30,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Smaller index size and reduced storage costs</li>
                  <li>Higher precision in search/retrieval results</li>
                  <li>Cost savings in embedding and computation</li>
                  <li>Better user experience with more relevant results</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Risk of removing rare but important information</li>
                  <li>Requires careful threshold tuning for each corpus</li>
                  <li>May need domain-specific quality metrics</li>
                  <li>Potential data loss if filtering is too aggressive</li>
                </ul>
              </div>
            </div>
          ),
          notes: `
#### Balancing Precision and Recall in Quality Filtering

[lecture] Let's discuss the trade-offs when implementing dead chunk detection and quality filtering. [pleased] On the **benefits side**, the advantages are compelling. You achieve **smaller index sizes** which directly translate to reduced storage costs. [conversational] If you're paying for cloud storage or a managed vector database by the gigabyte, filtering out 30% of low-quality chunks can significantly lower your bills. [confidently] This is especially impactful at scale—enterprise document collections with millions of chunks.

[enthusiastically] **Higher precision** is perhaps the most important benefit. [conversational] When users search for information, they don't want to wade through garbage results. Every dead chunk you remove is one less false positive cluttering their search results. [pleased] This improves the signal-to-noise ratio and makes your RAG system more trustworthy. Users get answers faster and with greater confidence.

[lecture] There are also substantial **cost savings in computation**. Generating embeddings for millions of chunks isn't free—it requires GPU time or API calls to embedding services. [confidently] Filtering chunks before embedding can reduce these costs by 20-40%. [conversational] The same applies to indexing and retrieval—smaller indexes mean faster searches and lower latency.

[pleased] Finally, the **user experience improves dramatically**. Users notice when a system consistently returns relevant, high-quality results versus when it surfaces fragments, headers, or boilerplate. [confidently] Quality filtering is one of those behind-the-scenes techniques that makes your system feel more polished and professional.

#### The Challenges and Risks

[cautiously] Now for the **challenges**. The biggest risk is **removing rare but important information**. [conversational] Edge cases, specialized terminology, or unique scenarios might have characteristics that look like low-quality content to your filters. [storytelling] A medical case report describing an extremely rare condition might have low retrieval frequency, but it could be critically important when that specific condition is mentioned in a query. [concerned] You need sophisticated logic to avoid discarding these diamonds in the rough.

[lecture] **Threshold tuning is corpus-specific** and requires careful analysis. [conversational] What works for web-scraped content won't work for structured legal documents. Scientific papers have different length distributions than customer support tickets. [cautiously] You can't just copy-paste filter parameters from one project to another—you need to calibrate based on your specific data characteristics.

[lecture] Some domains require **domain-specific quality metrics**. [storytelling] A chunk of Python code might have very low alphabetic character ratio (lots of symbols like {}, [], =) but is perfectly valid and valuable. [conversational] Mathematical formulas, chemical structures, or tabular data might also trigger generic quality filters despite being high-quality content in their context.

[concerned] The danger of **aggressive filtering** is real. [disappointed] If you remove too much, you might inadvertently introduce blind spots in your knowledge base. [storytelling] A user might ask about a scenario you actually have documentation for, but you filtered it out because it had an unusual profile. [cautiously] This creates frustrating "I know we have content on this" moments where the system can't find what exists.

#### Best Practices for Safe Filtering

[confidently] The key is to be conservative initially, then iterate. [lecture] Start with obvious filters (minimum length, encoding errors) and gradually add more sophisticated quality checks. [conversational] Always maintain logs of removed chunks and periodically review them to catch filtering mistakes. [cautiously] Consider implementing a "soft delete" where chunks are marked as low-quality but not immediately purged, giving you time to validate before permanent removal.

#### Transition

[pleased] We've now cleaned up our content by removing dead chunks and low-quality noise. [energetic] Next, we'll flip the script and focus on enhancing our remaining high-quality chunks. [conversational] Technique 15, Chunk Summary Metadata, is about generating compact, informative summaries that improve ranking, result presentation, and user navigation. Let's explore how to create these valuable metadata layers.
          `
        }
      ]
    },
    {
      id: 'technique-15',
      title: '15. Chunk Summary Metadata',
      slides: [
        {
          id: 31,
          title: '15. Chunk Summary Metadata',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Provide compact previews of chunks for ranking and UX</li>
                    <li>Enable quick semantic understanding of chunks without loading full content</li>
                    <li>Improve search result snippets and RAG relevance assessment</li>
                    <li>Facilitate faster triage of information</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Abstractive (LLM-generated) or extractive summaries of chunk content</li>
                    <li>Include keywords, entities, and section titles in metadata</li>
                    <li>Store compact representations alongside chunk embeddings</li>
                    <li>Generate summaries at different granularities (1-2 sentences)</li>
                  </ul>
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Chunk Summary Metadata Generation"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    Chunk["📄 Full Chunk\n(500 tokens)"] --> A{"Method?"}
    A -->|LLM call| B["📝 Abstractive\n'This covers B-tree indexing...'"]
    A -->|TextRank| C["📑 Extractive\nTop sentences"]
    B & C --> Store
    subgraph Store["💾 Stored Metadata"]
        S1["summary: text (50-100 tokens)"]
        S2["keyphrases: list"]
        S3["entities: list"]
    end
    Store --> Rank["⚡ Fast Re-ranking\n(no full chunk read)"]
    style Chunk fill:#4fc3f7,color:#000
    style B fill:#e1bee7,color:#000
    style C fill:#fff9c4,color:#000
    style Store fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
    style Rank fill:#81c784,color:#000`}
                    />
                  </div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>RAG retrieval ranking to improve relevance assessment</li>
                    <li>Search interface for better snippet generation</li>
                    <li>Knowledge management dashboards and document previews</li>
                    <li>When users need to quickly scan large document collections</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>After chunking, process each chunk through summary generation</li>
                    <li>Generate 1-2 sentence summary capturing key points</li>
                    <li>Set token limits to ensure compactness (e.g., 50-100 tokens)</li>
                    <li>Extract and include keyphrases, entities, and other metadata</li>
                    <li>Perform quality control checks on sample summaries</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          notes: `
#### Introduction to Chunk Summary Metadata

[energetic] Welcome to Technique 15: Chunk Summary Metadata. [lecture] After you've chunked your documents and filtered out dead chunks, you have a collection of high-quality pieces of content. [cautiously] But there's a problem—to determine which chunks are most relevant to a query, systems typically rely solely on embedding similarity or keyword overlap. [conversational] That works reasonably well, but it's not always enough. [enthusiastically] What if you could provide compact, human-readable previews of each chunk that help both machines and humans quickly understand what the chunk contains? [confidently] That's exactly what chunk summary metadata does.

[playfully] Think of summaries as the "nutrition labels" for your chunks. [storytelling] Just as you can quickly scan a nutrition label to understand a food product without eating it, summaries let you understand a chunk's content without reading the entire thing. [pleased] This has profound implications for ranking, user interface design, and RAG system performance.

#### The Problem: Slow Triage and Opaque Relevance

[lecture] In production RAG systems, you often retrieve 10-50 candidate chunks for a given query, then need to re-rank them or select the top-k to send to your LLM. [disappointed] Without summaries, you're relying purely on embedding distance or sparse retrieval scores—numeric values that don't always capture semantic relevance accurately. [cautiously] Your re-ranker or LLM must read full chunks to assess relevance, which is slow and expensive.

[conversational] From a user experience perspective, when you present search results, showing full chunk text is overwhelming. Users want to quickly scan results to find what they need. [disappointed] Without compact summaries, they're faced with walls of text. [lecture] This is especially problematic in exploratory search or knowledge management dashboards where users are browsing large document collections.

👉 Pronunciation: **triage** = TREE-ahj (quickly sorting and prioritizing items)

#### How Chunk Summary Metadata Works

[lecture] The concept is straightforward: for each chunk, generate a compact summary (typically 1-3 sentences or 50-150 tokens) that captures the key points, topics, entities, or themes. [confidently] Store this summary as metadata alongside the chunk in your vector database. When retrieval happens, you can use these summaries for faster relevance assessment, better ranking, and cleaner UI presentation.

[lecture] There are two main approaches: **abstractive summaries** and **extractive summaries**. Abstractive summaries use LLMs to generate concise paraphrases—the model reads the chunk and writes a new summary in its own words. [conversational] This creates more coherent, human-readable summaries but costs API calls or compute. Extractive summaries select the most representative sentences directly from the chunk—this is cheaper but might not flow as naturally.

[lecture] Beyond prose summaries, you can include **keyphrases, entities, and section titles** as structured metadata. [conversational] For instance: a summary might be "This section describes the advantages of B-tree indexing in relational databases," with keyphrases: ["B-tree", "indexing", "relational databases"] and entities: ["SQL", "PostgreSQL"]. [pleased] This structured data supports faceted search and filtering.

#### When to Use Summary Metadata

[pleased] This technique shines in **RAG retrieval ranking**. [lecture] After your initial vector search retrieves 50 candidates, you can use summaries to quickly re-rank them. Pass summaries (not full chunks) to a lightweight re-ranker or prompt an LLM with: "Do these summaries relate to the query?" [confidently] This is much faster than processing full content.

[conversational] In **search interfaces**, summaries serve as snippets—those short previews you see in Google search results. Users can scan them quickly to decide which results to click. [pleased] This improves usability and reduces cognitive load.

[lecture] For **knowledge management dashboards**, summaries help users navigate document collections. [conversational] If you're building a system where users browse categories, documents, or topics, summary metadata gives them context at a glance without loading full content.

[confidently] Finally, use this technique **when users need to triage large result sets**. If a query returns 100 relevant chunks, users can't read all of them. [pleased] Summaries let them quickly filter down to the most promising candidates.

#### Implementation Steps

[lecture] First, **after chunking**, process each chunk through a summary generation step. [conversational] If using abstractive summarization, call an LLM with a prompt like: "Summarize the key point of this text in 1-2 sentences." If using extractive methods, apply techniques like TextRank or sentence scoring to select the most representative sentences.

[confidently] Set **token limits** to ensure compactness—aim for 50-100 tokens for summaries. This keeps them fast to process and display. [playfully] You don't want summaries that are almost as long as the original chunk.

[lecture] In addition to prose summaries, **extract keyphrases and entities**. You can use TF-IDF, RAKE, or NER models to identify important terms and concepts. [conversational] Store these as structured fields in your metadata: summary (text), keyphrases (list), entities (list), section_title (if available).

[cautiously] **Quality control** is important—sample a few hundred generated summaries and review them. Are they accurate? Do they capture the essence of the chunks? [disappointed] If your LLM is hallucinating or your extractive method is picking poor sentences, adjust your approach before processing the full corpus.

[confidently] Finally, ensure your vector database schema supports these metadata fields and that your retrieval pipeline can access them efficiently. You'll want to query both embeddings and summaries without performance bottlenecks.

#### Benefits: Faster, Better, Cleaner

[pleased] The benefits are multi-dimensional. [confidently] **Better ranking** happens because re-rankers can assess relevance more quickly using summaries instead of full content. This speeds up the pipeline and improves top-k accuracy. [enthusiastically] **Improved user experience** comes from clear, scannable result previews—users spend less time reading and more time finding what they need.

[pleased] **Faster information triage** is a huge win in exploratory workflows. Analysts, researchers, or support staff can skim summaries to navigate large datasets efficiently. [conversational] And summaries can serve as **context for further analysis**—you might use summary text as input to downstream NLP tasks like categorization or sentiment analysis.

#### Challenges: Cost and Drift

[cautiously] The main challenge is **generation cost**. Abstractive summaries require LLM calls for potentially millions of chunks—this adds up quickly in API costs or compute time. [conversational] Extractive methods are cheaper but may miss nuance. You need to balance quality and cost.

[concerned] There's also the risk of **summary drift**—the summary might omit critical information or introduce subtle inaccuracies. [disappointed] If a user clicks a result based on a summary and finds the chunk doesn't actually contain what they expected, trust erodes. [cautiously] Validation and quality checks are essential.

[conversational] **Storage overhead** is another consideration—summaries add 50-150 tokens per chunk, multiplied by millions of chunks. While small relative to embedding vectors, it's not negligible. [lecture] And as chunks are updated or edited, **summaries need regeneration**, adding maintenance overhead.

#### Transition to Technique 16

[pleased] We've now added rich metadata to our chunks, making them more discoverable and understandable. [energetic] Next, we tackle another metadata challenge: terminology consistency. [conversational] Our documents might refer to the same concept using different terms, acronyms, or synonyms. [confidently] Technique 16, Domain Dictionary and Synonym Normalization, ensures that variant terminology maps to canonical concepts for consistent search and analytics. Let's explore how to build and apply these normalizations effectively.
          `
        },
        {
          id: 32,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Better ranking and re-ranking in retrieval pipelines</li>
                  <li>Improved user experience for scanning search results</li>
                  <li>Faster information triage and navigation</li>
                  <li>Can serve as context for further document analysis</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Generation cost for abstractive summaries with LLMs</li>
                  <li>Risk of summary drift or critical information omission</li>
                  <li>Storage overhead for maintaining both full content and summaries</li>
                  <li>May require regular updates as chunks are modified</li>
                </ul>
              </div>
            </div>
          ),
          notes: `
#### Weighing the Costs and Benefits of Summary Metadata

[lecture] Let's dive into the trade-offs of implementing chunk summary metadata. [pleased] Starting with the **benefits**, the impact on **retrieval ranking and re-ranking** is substantial. [conversational] By providing compact summaries, you enable faster relevance assessment without loading full chunk content. [lecture] This is especially valuable in hybrid retrieval pipelines where you might retrieve 100 candidates and need to quickly narrow down to the top 10 before passing them to an LLM. [confidently] Summaries let you make those judgments efficiently.

[enthus iastically] **User experience** improvements are immediately visible. [conversational] When users see search results with clear, concise summaries instead of truncated text fragments, they can navigate more confidently. [storytelling] This is the difference between showing "Introduction Machine learning is a subset of artificial intelligence that..." (truncated mid-sentence) versus "This section introduces machine learning fundamentals and applications in healthcare." [pleased] The latter is purposefully crafted for clarity and information scent.

👉 Pronunciation: **scent** = sent (information scent: clues that help users predict content relevance)

[pleased] **Faster information triage** becomes possible across all user types. [conversational] Researchers scanning hundreds of papers, support engineers looking for troubleshooting guides, or analysts exploring datasets all benefit from quick content previews. Instead of opening and reading full documents, they can skim summaries to zero in on what they need.

[lecture] Summaries can also **serve as context for downstream analysis**. [conversational] You might use summary text for clustering similar documents, feeding into recommendation engines, or generating category labels. [confidently] The compact, semantic-rich nature of summaries makes them valuable intermediate representations.

#### The Challenges of Summary Generation

[cautiously] Now for the **challenges**. The most immediate concern is **generation cost** for abstractive summaries. [lecture] If you're processing a million chunks and calling an LLM API for each one, costs add up fast. [conversational] Even at $0.001 per request, that's $1,000—and larger summaries or more sophisticated models multiply the cost. [cautiously] This makes batch processing and cost optimization critical. You might need to use cheaper models, batch API calls, or fall back to extractive methods for less critical content.

[concerned] **Summary drift** is a subtle but real risk. [lecture] Abstractive summaries are generated by models that might paraphrase slightly incorrectly, omit edge cases, or introduce terminology not present in the original. [disappointed] Users might click a result expecting specific information based on the summary, only to find it's not quite what was implied. [cautiously] This creates friction and reduces trust. Regular validation and spot-checking help mitigate this risk.

[conversational] **Storage overhead** might seem small per-chunk, but at scale it adds up. [lecture] If each chunk is 500 tokens and the summary is 100 tokens, you're adding 20% to your raw content storage. Multiply by millions of chunks and factor in indexing overhead, and this becomes a meaningful infrastructure consideration. [conversational] However, compared to embedding vectors (which are often 768-2048 dimensions of floats), summary text is still relatively lightweight.

[lecture] Finally, **summaries need updates when content changes**. If you regenerate or edit chunks in your pipeline, summaries become stale. [cautiously] You need processes to detect changed content and regenerate summaries accordingly. This adds complexity to your content management and versioning workflows.

#### Best Practices for Summary Metadata

[confidently] To maximize benefits and minimize challenges, start with **hybrid approaches**: use extractive summarization (cheap, fast) for initial implementation, then selectively apply abstractive summarization to high-traffic or high-value content. [conversational] Monitor which chunks are frequently retrieved and prioritize summary quality for those.

[lecture] Implement **quality gates**: after generating summaries, run automated checks for length, coherence, and keyword presence. Sample and review summaries regularly. [confidently] Cache summaries alongside chunks to avoid regenerating them unnecessarily. [cautiously] And most importantly, instrument your system to track whether summaries actually improve ranking and user satisfaction—don't just assume they do.

#### Transition to Technique 16

[pleased] We've enhanced our chunks with metadata summaries, making them more discoverable and understandable. [conversational] But there's another layer of consistency we need to address: terminology. [lecture] Documents from different sources, authors, or time periods might refer to the same concept using different words. [storytelling] "Machine learning" vs. "ML", "database" vs. "DB", "natural language processing" vs. "NLP"—these synonyms and acronyms create fragmentation in search and analytics. [confidently] Technique 16, Domain Dictionary and Synonym Normalization, tackles this challenge head-on by mapping variants to canonical forms. Let's explore how to build and maintain these critical mappings.
          `
        }
      ]
    },
    {
      id: 'technique-16',
      title: '16. Domain Dictionary / Synonym Normalization',
      slides: [
        {
          id: 33,
          title: '16. Domain Dictionary / Synonym Normalization',
          icon: { name: 'duo-book' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Map aliases/synonyms to canonical concepts for consistency</li>
                    <li>Standardize variant terminology across different sources</li>
                    <li>Resolve acronyms, abbreviations, and industry jargon</li>
                    <li>Enable consistent search and analytics across terminology variants</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Dictionary/ontology lookups (e.g., UMLS/SNOMED for medical)</li>
                    <li>Boundary-aware replacements to preserve syntax</li>
                    <li>Fuzzy matching for detecting spelling variants</li>
                    <li>Context-aware disambiguation of ambiguous terms</li>
                    <li>Bidirectional mappings (variant → canonical form)</li>
                  </ul>
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Synonym Normalization: Variants → Canonical"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart LR
    V1["💬 heart attack"]
    V2["💬 MI"]
    V3["💬 acute coronary\nevent"]
    V4["💬 myocardial\ninfarction"]
    Dict["📖 Domain Dictionary\n(UMLS / Custom)"]
    Canon["✅ Canonical:\nmyocardial infarction"]
    V1 --> Dict
    V2 --> Dict
    V3 --> Dict
    V4 --> Dict
    Dict --> Canon
    Canon --> Index["🔍 Consistent\nSearch & Analytics"]
    style V1 fill:#fff9c4,color:#000
    style V2 fill:#fff9c4,color:#000
    style V3 fill:#fff9c4,color:#000
    style V4 fill:#fff9c4,color:#000
    style Dict fill:#e1bee7,color:#000
    style Canon fill:#c8e6c9,stroke:#4caf50,stroke-width:2px,color:#000
    style Index fill:#81c784,color:#000`}
                    />
                  </div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Specialized domains (medical, legal, finance, technical)</li>
                    <li>Cross-source normalization for consistent analysis</li>
                    <li>Enterprise search with varying terminology</li>
                    <li>Data integration from multiple systems/vendors</li>
                    <li>Before deduplication to catch synonym duplicates</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Build/curate domain-specific dictionary or leverage existing ontologies</li>
                    <li>Disambiguate acronyms based on context</li>
                    <li>Apply term replacement with proper token boundaries</li>
                    <li>Log all replacements for auditability</li>
                    <li>Keep original text alongside normalized versions</li>
                    <li>Regularly update dictionaries as terminology evolves</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          notes: `
#### Introduction to Domain Dictionary & Synonym Normalization

[cheerfully] Welcome to Technique 16: Domain Dictionary and Synonym Normalization. [conversational] Here's the problem: language is inherently variable. The same concept can be expressed in dozens of ways—full names, acronyms, abbreviations, synonyms, and jargon. [storytelling] In medical text, you might see "myocardial infarction," "MI," "heart attack," or "acute coronary event." In tech documentation, "database" and "DB," "machine learning" and "ML," "application programming interface" and "API."

[concerned] This variability fragments your search and analytics. If a user searches for "heart attack" but your documents say "myocardial infarction," you miss relevant results—unless your embeddings are sophisticated enough to bridge that gap. Even with good embeddings, inconsistent terminology makes it harder to aggregate statistics, detect trends, or build structured knowledge graphs.

[pleased] Synonym normalization solves this by mapping all variants to a **canonical form**—a standardized term that represents the concept. Every time you see "MI," "heart attack," or "acute coronary event," you normalize it to "myocardial infarction" (or whichever term you choose as canonical). This creates consistency across your entire corpus, improving search recall, deduplication, and analytics.

#### The Challenge of Terminology Fragmentation

[lecture] Terminology fragmentation happens for many reasons. **Acronyms** are a huge source—"NLP" for "natural language processing," "RAG" for "retrieval-augmented generation." Authors might use the acronym after the first mention or exclusively. [conversational] **Synonyms** abound in specialized domains: "physician" vs. "doctor," "automobile" vs. "car." **Spelling variants** like "organise" vs. "organize" create splits. **Jargon evolution** means older documents might use outdated terms now replaced by modern equivalents.

[cautiously] Cross-organizational data integration amplifies this problem. Company A calls it a "customer," Company B calls it a "client." One system logs "failed transactions," another logs "rejected payments." If you're building an enterprise search or RAG system across multiple data silos, terminology normalization becomes critical for consistent results.

👉 Pronunciation: **canonical** = kuh-NON-ih-kuhl (standard, authoritative form)

#### How Domain Dictionary Normalization Works

[lecture] The core mechanism is a **lookup dictionary or ontology** that maps variants to canonical terms. For specialized domains, you can leverage existing resources: medical texts use UMLS (Unified Medical Language System) or SNOMED CT, legal domains have controlled vocabularies, and finance has standardized taxonomies. [confidently] These ontologies contain thousands or millions of term mappings curated by experts.

For custom domains or enterprise-specific terminology, you build your own dictionary. This involves identifying common variants through corpus analysis, consulting domain experts, and continuously updating as new terms emerge.

[lecture] The normalization process uses **boundary-aware replacements** to preserve syntax. You don't want to replace "cat" in "category" when you meant to normalize "CAT scan." Use word boundaries and context-aware matching to ensure you're replacing the right instances.

**Fuzzy matching** helps detect spelling variants and typos. [storytelling] If your dictionary has "machine learning" but the document says "machien learning" (typo), Levenshtein distance or similar algorithms can catch it and normalize.

[cautiously] For **ambiguous terms**, context-aware disambiguation is essential. "MS" could mean "multiple sclerosis" or "Microsoft." You need contextual clues (surrounding words, document type) to choose the correct canonical form. This often requires lightweight NLP models or rules.

[confidently] Finally, maintain **bidirectional mappings**: variant → canonical and canonical → list of variants. This supports both normalization (variant → canonical) and query expansion (user searches canonical, find documents with any variant).

👉 Pronunciation: **Levenshtein** = LEV-en-shtine (edit distance algorithm)

#### When to Use Synonym Normalization

[lecture] This technique is essential in **specialized domains** where terminology is precise and standardized: medical, legal, finance, technical documentation. These fields have established ontologies and a clear need for consistency.

Use it for **cross-source normalization** when integrating data from multiple systems, vendors, or organizations. Each source might have its own terminology, and normalization creates a unified view.

[confidently] **Enterprise search systems** benefit immensely. Employees search using their own vocabulary, but documents were written by different teams with different conventions. Normalization bridges these gaps, improving search recall.

Apply normalization **before deduplication** to catch synonym duplicates. [storytelling] Two documents might be identical except one uses "NLP" and the other uses "natural language processing." Without normalization, they look different.

And in **data integration workflows**, normalization is foundational. ETL pipelines, data warehouses, and master data management systems all rely on consistent terminology to merge and analyze data correctly.

#### Implementation Steps

[lecture] Start by **building or sourcing a domain-specific dictionary**. If possible, leverage existing ontologies (UMLS, SNOMED, industry-specific glossaries). For custom domains, conduct corpus analysis to identify high-frequency variants and consult domain experts to establish canonical forms.

For **acronym or abbreviation disambiguation**, use context. [storytelling] If the document mentions "heart disease" nearby, "MI" probably means "myocardial infarction." If it mentions "software" and "Windows," "MS" likely means "Microsoft." Implement rules or lightweight models to make these contextual decisions.

[lecture] Apply **term replacement** carefully using proper tokenization and word boundaries. Use regex patterns like \\bMI\\b to match "MI" as a standalone word, not inside "FAMILY" or "ADMIT."

**Log all replacements** for auditability and debugging. Store logs that record: original term → normalized term, chunk ID, and timestamp. This transparency helps you identify incorrect normalizations and refine your dictionary over time.

[confidently] Critically, **keep original text alongside normalized versions** in your system. Store both the raw text and the normalized text as separate fields. This allows users to see the original phrasing and gives you a fallback if normalization causes issues.

Finally, **regularly update your dictionary**. Language evolves—new acronyms, new terms, deprecated jargon. Schedule periodic reviews, monitor which terms are frequently appearing without mappings, and maintain versioned dictionaries so you can roll back if needed.

#### Benefits: Unified Search and Analytics

[pleased] The benefits are substantial. **Higher recall in search** because queries match more variants. A user searching "heart attack" retrieves documents about "myocardial infarction." **Unified analytics** across terminology variations—you can aggregate counts, trends, and insights without splitting by synonym.

[delighted] **Better deduplication** catches conceptually identical content that differs only in word choice. **More consistent embeddings** because the same concept is always represented with the same term, reducing noise in your embedding space. And **domain-specific precision** in NLP tasks like entity extraction, classification, and question answering.

#### Challenges: Maintenance and Ambiguity

[cautiously] The main challenge is **dictionary maintenance**. Terminology isn't static—new acronyms, new products, new concepts emerge constantly. You need processes to identify gaps and update mappings. This requires ongoing effort and domain expertise.

[concerned] **Ambiguity creates risks**. Incorrect replacements due to ambiguous terms can introduce errors. "Apple" the fruit vs. "Apple" the company. "Java" the island vs. "Java" the programming language. Context-aware disambiguation mitigates this but adds complexity.

**False positives with short terms** are common. A two-letter acronym like "AI" or "ML" might match unintended patterns. Careful boundary detection and context checking are essential.

[sigh] **Scaling to large vocabularies** is resource-intensive. If your dictionary has hundreds of thousands of terms, lookups and replacements can become slow. You need efficient data structures (tries, hash maps) and possibly caching.

Finally, **stylistic and authorial nuances** can be lost. Different authors might deliberately choose specific terms for tone or precision. Aggressive normalization flattens these distinctions, which might matter in literary analysis or preserving author voice.

#### Transition to Technique 17

[conversational] We've now standardized our terminology, creating consistency across our corpus. [lecture] There's one more critical dimension we need to address: time. Documents evolve, policies change, software gets updated, and content references specific versions or time periods. [confidently] Our final technique, Temporal Labeling and Version Tagging, ensures we can track and query content across time and version dimensions. Let's explore how to implement effective temporal metadata.
          `
        },
        {
          id: 34,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Higher recall in search and retrieval</li>
                  <li>Unified analytics across terminology variations</li>
                  <li>Better deduplication of conceptually identical content</li>
                  <li>More consistent document embeddings</li>
                  <li>Supports domain-specific precision in NLP tasks</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Dictionary requires ongoing maintenance and curation</li>
                  <li>Ambiguity can lead to incorrect replacements</li>
                  <li>Risk of false positives with short terms</li>
                  <li>Resource-intensive for large vocabularies</li>
                  <li>May lose stylistic/authorial nuances in word choice</li>
                </ul>
              </div>
            </div>
          ),
          notes: `
#### Evaluating Domain Dictionary Trade-Offs

[lecture] Let's examine the benefits and challenges of domain dictionary and synonym normalization. [pleased] Starting with the **benefits**, the most immediate impact is **higher recall in search and retrieval**. When a user searches for "heart attack," they automatically retrieve documents about "myocardial infarction," "MI," and "acute coronary event." [delighted] This dramatically improves search effectiveness without requiring users to know all possible terminology variants. It's like having a universal translator for your domain's language.

[enthusiastically] **Unified analytics** becomes possible across terminology variations. [storytelling] Imagine trying to analyze how often a concept appears in your corpus when it's referred to by a dozen different names. Without normalization, you'd undercount dramatically or need to manually aggregate across all variants. [confidently] Normalization solves this by ensuring every instance maps to the same canonical term, enabling accurate trend analysis, frequency counts, and statistical modeling.

[pleased] **Better deduplication** emerges because you can detect conceptually identical content that differs only in word choice. Two documents might describe the exact same procedure using different terminology—normalization reveals they're duplicates. **More consistent document embeddings** result because the same concept is always represented with the same term, reducing noise and improving clustering.

Finally, you achieve **domain-specific precision** in NLP tasks. Entity extraction, classification, and question answering all benefit from consistent terminology. Models trained on normalized text generalize better because they're not confused by synonym variations.

#### The Challenges of Maintenance and Ambiguity

[cautiously] Now for the **challenges**. The biggest ongoing burden is **dictionary maintenance and curation**. [concerned] Terminology evolves constantly—new products, new acronyms, new research findings introduce new terms. [storytelling] "COVID-19" didn't exist before 2020. "Large language model" wasn't mainstream terminology five years ago. Your dictionary needs regular updates to stay current, requiring domain expertise and dedicated resources.

[concerned] **Ambiguity is the nemesis of normalization**. Polysemous terms—words with multiple meanings—create risks. "Engagement" could mean user interaction metrics or a business agreement. "Trunk" could refer to a tree, a car, or an elephant. [sigh] Context-aware disambiguation helps, but it's complex to implement correctly and can still make mistakes. One wrong normalization can introduce confusing errors in your results.

👉 Pronunciation: **polysemous** = puh-LIS-uh-mus (having multiple meanings)

[disappointed] **False positives with short terms** are common and frustrating. Two-letter acronyms like "AI," "ML," "IT," or "HR" might match unintended substrings or patterns. Careful word boundary detection and context checking are essential, but they add processing overhead.

[cautiously] **Resource intensity** becomes apparent at scale. If your dictionary contains hundreds of thousands of mappings and you're processing millions of documents, lookups and replacements can become computationally expensive. You need efficient data structures (tries, hash maps, caching) to maintain performance.

Finally, there's the subtle **loss of stylistic and authorial nuances**. Different authors might choose specific terms deliberately for tone, precision, or stylistic effect. Aggressive normalization can flatten these distinctions. In literary analysis, legal interpretation, or preserving author voice, this might be unacceptable. You need to balance consistency with preserving important variations.

#### Best Practices for Sustainable Normalization

[confidently] To maximize benefits while managing challenges, adopt a **phased approach**. Start with high-confidence, high-frequency terms where mappings are unambiguous (common acronyms, established synonyms). Gradually expand to more complex cases as you build confidence and tooling.

[lecture] Implement **version control for your dictionary**. Track changes, maintain changelog, and support rollback if a dictionary update introduces errors. Use **automated monitoring** to detect when new unknown terms appear frequently—these are candidates for dictionary expansion.

Maintain **transparency** by logging all normalizations and providing user interfaces where analysts can see both original and normalized text. This builds trust and helps identify errors. [confidently] And critically, involve **domain experts** in dictionary curation—they catch nuances and ambiguities that automated analysis misses.

#### Transition to Technique 17

[conversational] We've now achieved terminology consistency across our corpus through systematic normalization. [lecture] There's one final dimension we need to address: time. Documents reference specific dates, versions, and time periods. Policies change, software updates, and information becomes outdated. [confidently] Our last technique, Temporal Labeling and Version Tagging, ensures we can track content across time and version dimensions, enabling time-aware queries and avoiding outdated information in our RAG responses. Let's explore how to capture and leverage temporal metadata.
          `
        }
      ]
    },
    {
      id: 'technique-17',
      title: '17. Temporal Labeling / Version Tagging',
      slides: [
        {
          id: 35,
          title: '17. Temporal Labeling / Version Tagging',
          icon: { name: 'duo-calendar' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" darkModeInvert={true} />
                    Goal / Problem It Solves
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Track when and which version content refers to</li>
                    <li>Manage content drift and outdated information</li>
                    <li>Enable time-aware querying and comparisons</li>
                    <li>Establish content validity periods</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" darkModeInvert={true} />
                    How It Works
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Extract dates/versions from content and metadata</li>
                    <li>Normalize to standard formats (ISO 8601 for dates)</li>
                    <li>Distinguish source_date vs. content_date</li>
                    <li>Capture version identifiers (git SHAs, build numbers)</li>
                    <li>Store as structured metadata alongside content chunks</li>
                  </ul>
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Temporal Labeling: Document → Time Metadata"
                      diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    Doc["📄 Document\n'Updated Jan 2024\nAPI v2.3.1'"] --> Parse["Date & Version\nExtraction"]
    Parse --> Norm["Normalize to ISO 8601"]
    subgraph Meta["📋 Structured Metadata"]
        D1["source_date: 2024-01-15"]
        D2["content_date: 2024-01-01"]
        D3["version: v2.3.1"]
        D4["valid_until: 2025-01-01"]
    end
    Norm --> Meta
    Meta --> Filter["⏰ Time-Aware Retrieval\n(freshness filtering)"]
    style Doc fill:#4fc3f7,color:#000
    style Meta fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
    style Filter fill:#81c784,color:#000`}
                    />
                  </div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" darkModeInvert={true} />
                    When to Use
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Policy documents and legal content</li>
                    <li>Software manuals and documentation</li>
                    <li>Data catalogs and schemas</li>
                    <li>Changelogs and release notes</li>
                    <li>Historical datasets requiring temporal context</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Implementation Steps
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Detect date/version patterns in text and metadata</li>
                    <li>Normalize to standard formats</li>
                    <li>Attach temporal metadata to each chunk</li>
                    <li>Define validity windows for time-bound content</li>
                    <li>Index content for time-aware retrieval</li>
                    <li>Build filtering capabilities for version/date ranges</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          notes: `
#### Introduction to Temporal Labeling & Version Tagging

[cheerfully] Welcome to Technique 17: Temporal Labeling and Version Tagging, our final preprocessing technique. [conversational] Here's the challenge: documents exist in time. They reference specific dates, refer to particular software versions, describe policies that expire, and contain information that becomes outdated. [concerned] If your RAG system retrieves a document about "Python 2.7 best practices" when a user asks about current Python development, that's not just unhelpful—it's potentially harmful.

[lecture] Temporal metadata answers critical questions: **When was this content created? What version does it refer to? Is this information still current?** Without temporal context, you can't filter for freshness, compare across versions, or understand content evolution. [confidently] This technique is about systematically capturing and structuring time-related and version-related metadata so your system can provide time-aware answers.

#### The Problem: Temporal Confusion and Outdated Content

[lecture] Temporal confusion manifests in several ways. [concerned] **Outdated information** is the most obvious—a medical guideline from 2010 might contradict current best practices. A software tutorial written for an old version might include deprecated features. [cautiously] **Conflicting information across versions** arises when you have multiple versions of a policy or document indexed simultaneously, and users don't know which is current.

[conversational] **Historical queries** can't be answered correctly without temporal metadata. [storytelling] A user might ask, "What was the company's vacation policy in 2019?" If you only have the current 2024 policy, you can't help. Or they might need to understand how a feature worked in version 3.0 of your product—without version tagging, you can't disambiguate.

[cautiously] **Content drift and staleness** happen over time. Documents that were accurate when written become less relevant or incorrect as circumstances change. Without tracking when content was created or last validated, you have no systematic way to identify and flag stale information.

#### How Temporal Labeling Works

[lecture] The implementation involves extracting and normalizing time-related metadata from both content and document properties. Start by identifying **date mentions in the text itself**—publication dates, effective dates, expiration dates, or dates mentioned in examples. Use date parsing libraries that handle various formats: "Jan 5, 2024," "2024-01-05," "5th January 2024."

[confidently] Normalize all dates to **standard formats** like ISO 8601 (YYYY-MM-DD) for consistency. This prevents ambiguity—"01/02/2024" could be January 2 or February 1 depending on locale. ISO 8601 eliminates this confusion.

👉 Pronunciation: **ISO** = EYE-so (International Organization for Standardization)

[lecture] Distinguish between different temporal attributes: **source_date** (when the document was created/published), **content_date** (what time period the content describes), **last_modified_date**, and **expiration_date** (if applicable). These serve different purposes and should be tracked separately.

For **version identifiers**, capture whatever versioning scheme your content uses: semantic versioning (v2.3.1), git commit SHAs, build numbers, or version labels ("2024 Edition"). Store these as structured metadata alongside temporal information.

**Validity windows** define when content is active or relevant. [storytelling] A policy might be effective from 2022-01-01 to 2024-12-31. Storing these windows enables time-range queries: "Show me policies active in March 2023."

[confidently] Finally, store all this as **structured metadata** in your vector database or search index: chunk_id, source_date, content_date_start, content_date_end, version, last_modified, validity_window. Index these fields to enable fast temporal filtering.

#### When to Use Temporal Labeling

[lecture] This technique is essential for **policy documents and legal content** where effective dates, amendment dates, and expiration dates are legally significant. [cautiously] Presenting outdated policy is not just unhelpful—it could have compliance implications.

[confidently] **Software manuals and documentation** benefit immensely. Users need to know which version of your product the documentation describes. Being able to filter docs by version ("show me v2.0 docs") or retrieve historical documentation ("how did authentication work in v1.5?") is invaluable.

**Data catalogs and schemas** require temporal tracking to understand schema evolution, deprecated fields, and database migrations. Knowing when a table was created, when columns were added, and which schemas are current is critical for data governance.

**Changelogs and release notes** are inherently temporal—they describe changes over time. Proper temporal metadata enables chronological browsing, version comparisons, and understanding feature evolution.

Any **historical dataset** requiring temporal context benefits. Archive systems, compliance systems, research databases—all need to preserve and query temporal information accurately.

#### Implementation Steps

[lecture] Start by **detecting date and version patterns** in both text content and metadata. Use regex patterns for common date formats, NER models trained to recognize temporal expressions, and metadata parsing for fields like created_date, modified_date, or version numbers in file properties.

**Normalize to standard formats** systematically. Convert all dates to ISO 8601, standardize version numbers, and ensure consistency across your corpus. This makes temporal queries reliable.

**Attach temporal metadata to each chunk** during preprocessing. Store source_date, content_dates, version, and validity windows as structured fields. [storytelling] If a chunk mentions "as of January 2023," capture that as content_date.

[lecture] **Define validity windows** for time-bound content. Work with content owners to understand how long information remains accurate. Some content is evergreen, some has explicit expiration dates, and some gradually becomes stale.

[confidently] **Index content for time-aware retrieval**. Your vector database or search engine should support filtering by date ranges and version tags. Users should be able to query: "Give me documents published after 2023-01-01" or "only show v2.0 documentation."

Finally, **build filtering capabilities** into your retrieval and RAG pipeline. When generating answers, prioritize recent content or explicitly note when information comes from an older version. This prevents users from acting on outdated information.

#### Benefits: Time-Aware Intelligence

[pleased] The benefits are transformative. **Time-aware question answering** becomes possible—you can answer both current and historical questions accurately. **Version comparison** lets users understand how content has changed—"What changed between v1.0 and v2.0?" **Freshness filtering** in retrieval ensures users get current information by default while still having access to historical context when needed.

[confidently] Most importantly, you **reduce incorrect answers from outdated content**. This is a trust issue—users lose confidence in systems that surface obsolete information. Temporal metadata solves this. [pleased] And for regulated industries, **audit trails and compliance** benefit from timestamped, versioned content that proves what information was available at what time.

#### Challenges: Ambiguity and Complexity

[cautiously] The challenges revolve around ambiguity and complexity. **Multiple conflicting timestamps** can appear in a single document—created date, published date, last modified date, content reference dates. [concerned] Which is the "true" temporal indicator? You need clear logic to prioritize.

**Date parsing errors** are inevitable when dealing with multiple locales, formats, and ambiguous patterns. "03/04/2023"—is that March 4 or April 3? Your parsing must handle these gracefully, possibly requiring locale hints or conservative fallbacks (reject ambiguous dates).

[disappointed] **Imprecise or missing dates** frustrate automated extraction. Documents might say "recently" or "last year" without specific dates. Legacy content might lack metadata entirely. [sigh] You need strategies for handling incomplete temporal information—perhaps inferring from surrounding context or marking as "unknown date."

[cautiously] **Version history maintenance** requires infrastructure. You need to decide: do you index all versions of a document simultaneously, or only the current version with historical versions archived? Both approaches have trade-offs for storage, retrieval complexity, and user experience.

Finally, **complex query logic** for temporal relevance might be required. [storytelling] A user asking about "current best practices" needs an implicit freshness filter. A user asking "how we did things in 2020" needs historical retrieval. Your system must interpret temporal intent correctly, which adds complexity to query processing.

#### Transition to Summary

[conversational] With temporal labeling and version tagging, we've completed our tour of 17 document preprocessing techniques. [confidently] We've covered everything from basic text cleaning to sophisticated metadata enrichment. Each technique addresses specific challenges in making content more searchable, structured, and semantically rich. [enthusiastically] Now let's step back and synthesize these techniques into a practical, minimal viable pipeline that you can implement and iterate on in production. Let's move to our summary and action plan.
          `
        },
        {
          id: 36,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                  <SvgIcon iconName="duo-circle-check" sizeName="2x" darkModeInvert={true} />
                  Pros
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Enables time-aware question answering</li>
                  <li>Supports document comparison across versions</li>
                  <li>Improves freshness filtering in retrieval</li>
                  <li>Reduces incorrect answers from outdated content</li>
                  <li>Facilitates audit trails and compliance</li>
                </ul>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                  <SvgIcon iconName="duo-circle-xmark" sizeName="2x" darkModeInvert={true} />
                  Cons
                </h4>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Multiple conflicting timestamps can cause ambiguity</li>
                  <li>Date parsing errors across locales/formats</li>
                  <li>Imprecise or missing dates in source material</li>
                  <li>Requires maintenance of version history</li>
                  <li>May need complex query logic for temporal relevance</li>
                </ul>
              </div>
            </div>
          ),
          notes: `
#### Evaluating Temporal Metadata Benefits and Challenges

[lecture] Let's discuss the trade-offs of implementing temporal labeling and version tagging. [pleased] Starting with the **benefits**, the most transformative is **enabling time-aware question answering**. Your RAG system can now answer questions like "What was our refund policy in 2020?" or "Show me documentation for version 1.5 of the API." [delighted] This temporal intelligence dramatically expands your system's capabilities beyond just searching current content.

[enthusiastically] **Document comparison across versions** becomes straightforward. [storytelling] Users can ask, "What changed between our 2023 and 2024 employee handbook?" and your system can retrieve both versions, highlight differences, and explain changes. This is invaluable for understanding content evolution, tracking policy updates, or understanding software changes.

[confidently] **Freshness filtering in retrieval** improves answer quality by prioritizing recent content. When a user asks a general question without temporal qualifiers, your system can apply default freshness biasing—newer content ranks higher. This reduces the risk of surfacing outdated information that might mislead users.

[concerned] Perhaps most critically, temporal metadata **reduces incorrect answers from outdated content**. [storytelling] Imagine a medical AI suggesting a treatment protocol that was valid in 2010 but contraindicated by 2024 research. Or a financial AI citing tax rules from five years ago. [confidently] Temporal filtering prevents these dangerous errors.

[pleased] For organizations operating under regulations, **audit trails and compliance** are enhanced. You can prove exactly what information was available at what time, satisfying regulatory requirements for record-keeping. Legal discovery, compliance audits, and governance reviews all benefit from timestamped, versioned content.

#### The Complexity of Temporal Implementation

[cautiously] Now for the **challenges**. [concerned] **Multiple conflicting timestamps** create ambiguity—a document might have a creation date (2020-01-01), last modified date (2023-06-15), publication date (2023-07-01), and reference dates within the content ("as of 2022..."). Which timestamp represents the document's temporal relevance? You need clear logic to prioritize, and different use cases might require different timestamp fields.

👉 Your system must be smart enough to distinguish: when content was created (source_date), when it was about (content_date), and when it was last validated (last_modified_date).

[disappointed] **Date parsing errors across locales and formats** are inevitable and frustrating. [storytelling] The American "12/01/2024" means December 1st, but in most of the world it means January 12th. Dates written as "March 5, 2024," "5 March 2024," "2024-03-05," or "05/03/24" all need parsing, and any ambiguous format risks misinterpretation. [sigh] Robust parsing libraries and format normalization are essential, but they add complexity.

[concerned] **Imprecise or missing dates in source material** are common in legacy content, informal documents, or user-generated content. A document might say "recently" or "last quarter" without specific dates. Old scanned documents might lack digital metadata entirely. [cautiously] You need strategies for handling these gaps—perhaps inferring dates from surrounding context, file system timestamps, or marking as "date unknown" and treating carefully in retrieval.

**Version history maintenance** introduces storage and indexing questions. Do you index all historical versions simultaneously, or only keep the current version in your primary index with historical versions archived separately? Simultaneous indexing makes historical queries easy but multiplies storage and can confuse users with multiple versions in results. Archiving historical versions saves space but makes historical queries complex.

Finally, **complex query logic for temporal relevance** might be required. [storytelling] Users rarely ask explicitly temporal questions—most queries lack date qualifiers. Your system must infer temporal intent: "best practices" implies current content, "historical analysis" implies comprehensive temporal coverage, "how we used to do X" implies historical content. This inference adds complexity to your query processing pipeline.

#### Best Practices for Temporal Metadata

[confidently] To succeed with temporal labeling, start by **standardizing on ISO 8601 date formats** everywhere—YYYY-MM-DD for dates, YYYY-MM-DDTHH:MM:SSZ for timestamps. This eliminates locale ambiguity. [lecture] Maintain **separate fields** for different temporal attributes (source_date, content_date_start, content_date_end, version, last_validated). Don't try to squeeze everything into one "date" field.

Implement **default freshness biasing** in retrieval but allow users to override it. For most queries, prioritize recent content. For historical or versioned queries, disable or reverse the bias. [confidently] Provide **UI indicators** showing users when content is from an older version or potentially outdated—transparency builds trust.

Maintain **version control** infrastructure—whether that's git, content management systems, or custom versioning. Track changes, enable comparison, and preserve history. [pleased] And critically, implement **periodic content review** processes where subject matter experts validate whether content is still accurate, triggering updates or archival as needed.

#### Final Thoughts: Time is a First-Class Dimension

[enthusiastically] Treating time as a first-class dimension in your document pipeline—not an afterthought—transforms your system from a static knowledge base into a dynamic, time-aware intelligence platform. [confidently] Users trust systems that account for temporal context and avoid outdated information. This final technique completes our preprocessing framework.

#### Transition to Summary

[conversational] We've now covered all 17 document preprocessing techniques, from basic text cleaning to sophisticated temporal metadata. [confidently] Each technique contributes to making your content more searchable, structured, and ready for embedding and indexing. [enthusiastically] Now it's time to synthesize this knowledge into an actionable plan. Our summary will present a minimal viable pipeline you can implement immediately, then iterate and expand. Let's distil these techniques into a practical roadmap.
          `
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 37,
          title: 'Minimal Viable Pipeline',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ margin: '0 auto', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <h3 style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                <SvgIcon iconName="duo-diagram-project" sizeName="2x" style={{ color: '#3498db' }} />
                Example Starter Pipeline
              </h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '30px' }}>
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'rgba(231, 76, 60, 0.15)', borderRadius: '10px', minWidth: '140px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-broom" sizeName="2x" style={{ color: '#e74c3c' }} />
                  <p style={{ marginTop: '10px', fontWeight: 'bold' }}>1. Boilerplate<br />Removal</p>
                </div>
                <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#95a5a6' }} />
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'rgba(155, 89, 182, 0.15)', borderRadius: '10px', minWidth: '140px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-text-width" sizeName="2x" style={{ color: '#9b59b6' }} />
                  <p style={{ marginTop: '10px', fontWeight: 'bold' }}>2. Normalize<br />Text</p>
                </div>
                <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#95a5a6' }} />
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.15)', borderRadius: '10px', minWidth: '140px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-puzzle-piece" sizeName="2x" style={{ color: '#3498db' }} />
                  <p style={{ marginTop: '10px', fontWeight: 'bold' }}>3. Semantic<br />Chunking</p>
                </div>
                <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#95a5a6' }} />
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'rgba(231, 76, 60, 0.15)', borderRadius: '10px', minWidth: '140px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-trash-can" sizeName="2x" style={{ color: '#e74c3c' }} />
                  <p style={{ marginTop: '10px', fontWeight: 'bold' }}>4. Dead-Chunk<br />Filter</p>
                </div>
                <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#95a5a6' }} />
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.15)', borderRadius: '10px', minWidth: '140px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-tags" sizeName="2x" style={{ color: '#2ecc71' }} />
                  <p style={{ marginTop: '10px', fontWeight: 'bold' }}>5. Add<br />Metadata</p>
                </div>
                <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#95a5a6' }} />
                <div style={{ textAlign: 'center', padding: '15px', backgroundColor: 'rgba(243, 156, 18, 0.15)', borderRadius: '10px', minWidth: '140px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-database" sizeName="2x" style={{ color: '#f39c12' }} />
                  <p style={{ marginTop: '10px', fontWeight: 'bold' }}>6. Index</p>
                </div>
              </div>
              <div style={{ marginTop: '50px', padding: '20px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px' }}>
                <p style={{ fontSize: '1.5rem', marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-book-open" sizeName="2x" darkModeInvert={true} />
                  <strong>Start with these core steps, then expand based on specific document types and use cases</strong>
                </p>
              </div>
            </div>
          ),
          notes: `#### Introduction
[cheerfully] Now that we've covered all seventeen preprocessing techniques, let's talk about building a minimal viable pipeline. [conversational] You don't need to implement everything at once—start with core essentials and expand based on your specific needs.
#### The Starter Pipeline
[lecture] A good starting point includes: First, boilerplate removal to clean structural noise. Second, simple text normalization for consistency. Third, semantic chunking to create meaningful units. Fourth, dead chunk filtering to remove low-value content. Fifth, add basic metadata like keyphrases or entities. [confidently] Finally, index everything for retrieval. This covers the essential steps while remaining manageable.
#### Iteration and Expansion
[conversational] Start simple, measure results, then add complexity where it provides clear value. [storytelling] Not every technique applies to every use case. Technical documentation might need table extraction; social media content might not. Scanned documents need OCR cleanup; born-digital content doesn't. [confidently] Let your data and retrieval metrics guide which techniques to adopt.
#### Best Practices
[lecture] Always preserve the original text alongside processed versions. Log every transformation for debugging and auditability. Build modularly so you can swap components easily. [confidently] Test on representative samples before processing your entire corpus. Measure retrieval quality before and after each technique to validate improvements.`
        },
        {
          id: 38,
          title: 'Summary & Best Practices',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.85em' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginBottom: '30px' }}>
                <div style={{ border: '2px solid #2ecc71', borderRadius: '10px', padding: '18px', color: '#2ecc71' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#2ecc71' }} />
                    Key Takeaways
                  </h4>
                  <ul style={{ lineHeight: '1.8' }}>
                    <li>Clean structure + semantic chunks + rich metadata drive retrieval quality and model performance</li>
                    <li>Favor conservative normalization; preserve originals; log every transformation</li>
                    <li>Different preprocessing techniques serve specific purposes - select based on use case</li>
                    <li>Building modular preprocessing pipelines enables easy adaptation and testing</li>
                  </ul>
                </div>
                <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '18px', color: '#3498db' }}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db' }}>
                    <SvgIcon iconName="duo-shield-check" sizeName="2x" style={{ color: '#3498db' }} />
                    Governance & QA
                  </h4>
                  <ul style={{ lineHeight: '1.8' }}>
                    <li>Log every transformation for auditability</li>
                    <li>Create sample document sets for regression testing</li>
                    <li>Implement version control for preprocessing code</li>
                    <li>Track metrics: deduplication ratio, chunk quality, precision</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          notes: `#### Key Principles
[confidently] The most important principles: Clean document structure, semantically coherent chunks, and rich metadata are the foundation of high-quality retrieval. [cautiously] Favor conservative preprocessing—aggressive normalization often hurts more than it helps. [lecture] Always preserve original text alongside processed versions for debugging and display. Log every transformation so you can trace problems back to their source.
#### Technique Selection
[conversational] Different techniques solve different problems. Don't apply all seventeen blindly—understand which apply to your documents and use case. [storytelling] Scanned PDFs need OCR cleanup; clean HTML doesn't. Technical documentation benefits from table extraction; prose doesn't. [confidently] Let your data guide technique selection.
#### Modularity and Testing
[lecture] Build preprocessing pipelines modularly so you can swap components and test variations. Create representative test sets spanning your document types. Measure retrieval metrics before and after each technique to validate improvements. [confidently] Track quality metrics like deduplication ratios, chunk coherence scores, and entity extraction accuracy.
#### Governance
[lecture] Implement proper governance from the start. Version control your preprocessing code. Document decisions and parameter choices. Create regression test suites that catch quality degradation. Track metrics over time to detect drift as your document collection evolves.`
        },
        {
          id: 39,
          title: 'Next Steps',
          icon: { name: 'duo-route' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#5fb2e7' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ border: '2px solid #f39c12', borderRadius: '10px', padding: '18px', color: '#f39c12' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                    <div style={{ textAlign: 'center', padding: '12px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px' }}>
                      <strong>1. Select Tools</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Choose tools for each step based on document types</p>
                    </div>
                    <div style={{ textAlign: 'center', padding: '12px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px' }}>
                      <strong>2. Implement in Batches</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Add techniques iteratively with evaluation</p>
                    </div>
                    <div style={{ textAlign: 'center', padding: '12px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px' }}>
                      <strong>3. A/B Test & Monitor</strong>
                      <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Build dashboards for preprocessing quality</p>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: '30px', textAlign: 'center', padding: '15px', backgroundColor: 'rgba(52, 73, 94, 0.2)', borderRadius: '10px' }}>
                  <p style={{ fontSize: '1.1em', fontWeight: 'bold' }}>
                    Document preprocessing is an iterative process — measure impact and refine as you go
                  </p>
                </div>
              </div>
            </div>
          ),
          notes: `#### Your Action Plan
[enthusiastically] Here's what to do next. [lecture] First, assess your current document collection—what types, formats, and quality issues do you have? Second, identify your biggest pain points—is it poor retrieval quality, noisy content, or missing metadata? [confidently] Third, start with a minimal pipeline—just the essential techniques that address your top issues. Fourth, measure baseline metrics so you can track improvement. Fifth, iterate and refine based on results and user feedback.
#### Continued Learning
[conversational] Dive deeper into specific techniques that matter most for your use case. [lecture] Study the tools and libraries available—spaCy for NLP, LangChain for RAG pipelines, various embedding models. Join communities and read case studies from organizations solving similar problems. [enthusiastically] Experiment with different approaches on your test sets. Stay current as the field evolves rapidly.
#### Final Thoughts
[warmly] Document preprocessing is foundational to successful RAG and NLP systems. [confidently] The techniques we've covered provide a comprehensive toolkit, but remember—start simple, measure results, and add complexity only where it provides clear value. [pleased] Quality preprocessing makes everything downstream work better. [cheerfully] Thank you for your attention, and good luck building amazing NLP and RAG systems!`
        }
      ]
    }
  ]
};

