import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

export const embeddingQualityDeck: Deck = {
  id: 'embedding-quality-deck',
  name: '7 Tricks to Improve Embedding Quality',
  description: 'Practical cheat sheets for preprocessing and chunking',
  category: 'RAG',
  theme: 'moon',
  kenBurns: true,
  backgroundImages: [
    'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&q=80',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80',
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
          title: '7 Tricks to Improve Embedding Quality',
          content: (
            <div>
              <GSAPAnimated animation="rotateIn" duration={1} delay={0}>
                <SvgIcon iconName="duo-lightbulb" sizeName="4x" darkModeInvert={true} />
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.3}>
                <h2>Without Changing the Model</h2>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '2rem' }}>
                  Practical cheat sheets for preprocessing and chunking
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.9}>
                <div>
                  <p><strong>Prepared by:</strong> Nisar A</p>
                  <p><strong>Date:</strong> November 7, 2025</p>
                  <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 7 Tricks to Improve Embedding Quality
[cheerfully] Welcome everyone! [excited] Today we're going to explore seven powerful techniques that will dramatically improve your embedding quality without changing a single line of your model code. [pause] Think about that for a moment. You don't need to retrain anything, you don't need more compute power, and you don't need expensive new models. Just smarter preprocessing.

####  The Power of Better Data Preparation
[conversational] Here's something most people miss: the quality of your embeddings depends just as much on how you prepare your data as it does on which model you choose. [storytelling] You could be using the best embedding model in the world, but if you're feeding it messy, inconsistent, or poorly structured text, you're not going to get great results. It's like having a Ferrari but filling it with low-quality fuel. The car is amazing, but it won't perform at its best.

####  What We'll Cover Today
[energetic] These seven techniques are practical, proven, and ready to use right now. [confidently] Each one comes with clear instructions on what it does, how to implement it, and when to use it. By the end of this presentation, you'll have a complete toolkit for preprocessing your text data before it goes into your embedding model. [enthusiastically] Let's start by looking at the overview of all seven techniques.`
        },
        {
          id: 2,
          title: 'Overview: The 7 Techniques',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '1.6rem' }}>
                <GSAPStaggerList stagger={0.12} duration={0.7}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '28px 0' }}>
                    <SvgIcon iconName="duo-broom" sizeName="2x" style={{ color: '#4fc3f7' }} />
                    <span>1. Clean and Normalize Text — reduce variability and token fragmentation</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '28px 0' }}>
                    <SvgIcon iconName="duo-filter" sizeName="2x" style={{ color: '#81c784' }} />
                    <span>2. Remove Boilerplate and Noise — keep only the main content</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '28px 0' }}>
                    <SvgIcon iconName="duo-scissors" sizeName="2x" style={{ color: '#ffb74d' }} />
                    <span>3. Use Semantic Chunking — split into coherent, retrievable units</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '28px 0' }}>
                    <SvgIcon iconName="duo-heading" sizeName="2x" style={{ color: '#ba68c8' }} />
                    <span>4. Add Section Titles to Chunks — add context and disambiguation</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '28px 0' }}>
                    <SvgIcon iconName="duo-eraser" sizeName="2x" style={{ color: '#f06292' }} />
                    <span>5. Apply Light Stopword Trimming — trim filler without losing meaning</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '28px 0' }}>
                    <SvgIcon iconName="duo-tags" sizeName="2x" style={{ color: '#64b5f6' }} />
                    <span>6. Add Keyphrase/Topic Tags as Metadata — enrich retrieval signals</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', margin: '28px 0' }}>
                    <SvgIcon iconName="duo-table" sizeName="2x" style={{ color: '#aed581' }} />
                    <span>7. Convert Tables to Structured Text — linearize tabular data for models</span>
                  </div>
                </GSAPStaggerList>
              </div>
            </div>
          ),
          notes: `### Overview: The 7 Techniques
[conversational] Let me give you the roadmap for our journey today. [lecture] We have seven powerful techniques, and each one targets a specific problem you'll encounter when working with text embeddings.

####  The Seven Techniques
[confidently] Starting with **technique one: clean and normalize text**. This is all about reducing variability. When you have the same concept written in ten different ways, your embedding model sees ten different things. Cleaning and normalizing fixes that problem by standardizing your text.

**Technique two: remove boilerplate and noise**. [storytelling] Think about web pages with headers, footers, cookie banners, and navigation menus. That's all noise that dilutes your embeddings. This technique strips away everything except the actual content.

**Technique three: semantic chunking**. [seriously] This is crucial for retrieval systems. You can't just split documents at arbitrary positions. You need chunks that are coherent and can answer questions on their own. This technique shows you how.

**Technique four: add section titles to chunks**. [enthusiastically] Context is everything. A chunk that says "installation is simple" doesn't tell you much. But if you prepend "Python Installation Guide: installation is simple," now you have disambiguation and context.

**Technique five: light stopword trimming**. [cautiously] Notice I said *light*. We're not aggressively removing stopwords like old-school NLP systems. We're carefully trimming filler words while preserving meaning and negation.

**Technique six: keyphrase and topic tags as metadata**. [pleased] This enriches your chunks with structured signals that improve filtering and recall. Think of it as adding facets to your search system.

**Technique seven: convert tables to structured text**. Tables are everywhere in documents, but embedding models don't understand table layouts. This technique linearizes tabular data into model-friendly text.

[energetic] Now let's dive into each technique in detail, starting with cleaning and normalization.`
        }
      ]
    },
    {
      id: 'clean-normalize',
      title: 'Clean and Normalize Text',
      slides: [
        {
          id: 3,
          title: '1. Clean and Normalize Text',
          icon: { name: 'duo-broom' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div>
                <GSAPAnimated animation="slideInTop" delay={0.1}>
                  <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>Goal:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Reduce textual variability so the same concepts map to similar tokens.</span></p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ marginTop: '20px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="Text Normalization Pipeline"
                        diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["📄 Raw Text"] --> B["🔤 Unicode Normalization"]
    B --> C["✂️ Whitespace & Punctuation"]
    C --> D["✨ Clean Output"]
    style A fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                      />
                    </div>
                    <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <strong>How It Works</strong>
                      <span style={{ fontSize: '1.2rem' }}>Apply unicode normalization, consistent casing, whitespace and punctuation fixes to standardize input.</span>
                    </p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>When to Use:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Mixed sources, OCR, scraped web, user-generated content, legacy docs.</span></p>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.7}>
                  <div>
                    <p style={{ fontSize: '2rem' }}><strong>Steps:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Normalize Unicode (NFC/NFKC); fix mojibake</li>
                      <li>Standardize quotes/dashes; collapse whitespace; trim</li>
                      <li>Normalize bullets/lists; unify line breaks</li>
                      <li>Preserve meaningful symbols (math, code, chemical formulas)</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Clean and Normalize Text
[lecture] Let's dive into our first technique: cleaning and normalizing text. [seriously] This is fundamental, and honestly, if you only implement one technique from this presentation, make it this one.

####  The Problem: Textual Chaos
[storytelling] Imagine you're building a search system, and users are searching for "café." But in your documents, sometimes it's written as "cafe" without the accent, sometimes it's "café" with a combining accent mark, and sometimes it's "café" with a precomposed character. [conversational] To you and me, these all look the same, but to a computer, they're three completely different strings. Your embedding model will treat them as different concepts, even though they mean exactly the same thing.

####  What Normalization Does
[confidently] The goal here is simple but powerful: **reduce textual variability so the same concepts map to similar tokens**. When you normalize text, you're essentially saying "these variations are all the same thing, treat them consistently."

####  How It Works
\`\`\`mermaid
flowchart LR
    A["📄 Raw Text"] --> B["🔤 Unicode Normalization"]
    B --> C["✂️ Whitespace & Punctuation"]
    C --> D["✨ Clean Output"]
    style A fill:#ffcdd2,color:#000
    style D fill:#81c784,color:#000
\`\`\`
[lecture] Think of this as a pipeline. Raw text comes in with all its quirks and inconsistencies. First, we apply **Unicode normalization** using standards like NFC 👉 'en-ef-see' or NFKC 👉 'en-ef-kay-see'. This handles things like combining characters and different representations of the same glyph. Then we standardize **whitespace and punctuation**—collapsing multiple spaces, standardizing quotes and dashes, trimming leading and trailing whitespace. [pleased] Finally, we get clean, consistent output.

####  The Implementation Steps
[conversational] Start with **Unicode normalization**. Use NFC or NFKC forms to handle combining characters. [cautiously] Also watch out for mojibake 👉 'moh-jee-bah-keh'—that's when text gets corrupted due to encoding issues, like seeing "âœ"" instead of a checkmark.

Next, **standardize quotes and dashes**. Convert all curly quotes to straight quotes, or vice versa—just be consistent. Replace various dash types with a single standard. Collapse multiple spaces into one. Trim whitespace from the start and end of lines.

Then **normalize bullets and lists**. Different sources use different bullet characters: •, -, *, ·. Pick one standard and convert everything to it. Same with line breaks—unify them to a single style.

[firmly] Finally, and this is crucial: **preserve meaningful symbols**. Don't normalize away mathematical notation, code snippets, or chemical formulas. Those symbols carry important semantic meaning. You need to be smart about what you normalize and what you preserve.

####  When to Use This
[confidently] This technique is essential when you're working with **mixed sources**: maybe you're pulling data from PDFs, web scrapes, user uploads, and legacy databases. Each source has its own quirks. OCR 👉 'oh-see-are' output is notorious for weird artifacts. User-generated content has inconsistent formatting. Legacy documents might use outdated character encodings. All of these scenarios scream for text normalization.

[energetic] Now let's look at the pros and cons of this technique.`
        },
        {
          id: 4,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>More consistent tokenization and better deduplication</li>
                    <li>Fewer artifacts from encoding/scraping</li>
                  </ul>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Over-normalization can remove signals (case, emphasis)</li>
                    <li>Requires testing per language/domain</li>
                  </ul>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Pros and Cons of Text Normalization
[conversational] Let's be honest about the trade-offs here. Every preprocessing technique has upsides and downsides.

####  The Good Stuff
[pleased] First, the **pros**. When you normalize text consistently, you get **more consistent tokenization**. Your embedding model isn't wasting tokens on representing "café" three different ways. Everything maps to the same tokens, which means similar concepts get similar embeddings. [delighted] Beautiful.

You also get **better deduplication**. If you have duplicate content but one version has extra whitespace or different quote styles, normalization helps you catch those duplicates. Your index stays cleaner and smaller.

And you eliminate **encoding and scraping artifacts**. No more weird characters from broken encodings. No more HTML entities that slipped through. Your data looks professional and clean.

####  The Problems
[cautiously] Now the **cons**. The biggest risk is **over-normalization**. [concerned] Sometimes case matters—"Apple" the company versus "apple" the fruit. Sometimes emphasis matters—all caps might indicate shouting or importance. If you normalize everything to lowercase and remove all special formatting, you might be throwing away useful signals.

[seriously] The other challenge is that normalization isn't one-size-fits-all. What works for English might break for German where nouns are capitalized. What works for technical docs might mess up creative writing. You need to **test per language and domain**. This adds complexity and maintenance burden to your pipeline.

[firmly] The key is finding the right balance: normalize enough to reduce noise, but preserve enough to keep meaningful signals. [energetic] Now let's move on to technique two: removing boilerplate and noise.`
        }
      ]
    },
    {
      id: 'remove-boilerplate',
      title: 'Remove Boilerplate and Noise',
      slides: [
        {
          id: 5,
          title: '2. Remove Boilerplate and Noise',
          icon: { name: 'duo-filter' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div>
                <GSAPAnimated animation="slideInTop" delay={0.1}>
                  <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>Goal:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Eliminate non-content text that dilutes embeddings.</span></p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ marginTop: '20px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="Boilerplate Removal Process"
                        diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TB
    A["📰 Document"] --> B{"🔍 Identify Content"}
    B -->|Keep| C["📝 Main Content"]
    B -->|Remove| D["🗑️ Headers/Footers/Nav"]
    C --> E["✨ Clean Document"]
    style A fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style D fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                      />
                    </div>
                    <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <strong>How It Works</strong>
                      <span style={{ fontSize: '1.2rem' }}>Detect and strip headers/footers, nav, ads, cookie banners, email signatures, legal footers.</span>
                    </p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>When to Use:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Web pages, PDFs, emails, repeated templates across documents.</span></p>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" delay={0.7} duration={1}>
                  <div>
                    <p style={{ fontSize: '2rem' }}><strong>Steps:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Parse DOM or PDF; keep main content via readability heuristics</li>
                      <li>Drop nav/aside/footer; remove ads, cookie text, A/B test fragments</li>
                      <li>Strip repeated headers/footers; remove tracking IDs</li>
                      <li>Log removals; spot-check samples</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Remove Boilerplate and Noise
[enthusiastically] Now let's talk about technique two: removing boilerplate and noise. [pleased] This is where you'll see some of the biggest quality improvements with the least effort.

####  The Signal-to-Noise Problem
[storytelling] Think about a typical web page. You've got your main article in the center, maybe five hundred words of actual content. But surrounding it? [conversational] There's a navigation menu with dozens of links, a header with the site logo and search bar, a sidebar with ads, a cookie consent banner, a footer with copyright info and social media links, and maybe some tracking pixels. [concerned] If you scrape that page and embed the whole thing, you're embedding maybe ten percent signal and ninety percent noise.

####  What This Technique Does
[confidently] The goal is laser-focused: **eliminate non-content text that dilutes embeddings**. We want to extract the pure signal—the actual article, the actual document content—and throw away everything else. [storytelling] Think of it like mining for gold: you don't keep the dirt, you extract the valuable ore and discard the rest.

####  How It Works
\`\`\`mermaid
flowchart TB
    A["📰 Document"] --> B{"🔍 Identify Content"}
    B -->|Keep| C["📝 Main Content"]
    B -->|Remove| D["🗑️ Headers/Footers/Nav"]
    C --> E["✨ Clean Document"]
    style A fill:#ffcdd2,color:#000
    style D fill:#ffcdd2,color:#000
    style E fill:#81c784,color:#000
\`\`\`
[lecture] Here's the process. You start with a full document—maybe it's a web page, a PDF, or an email. You run **content identification** using heuristics or tools like readability algorithms. These tools look at things like text density, paragraph structure, and DOM 👉 'dom' position to figure out what's actual content versus what's boilerplate. [pleased] Then you split the document: keep the main content, throw away the headers, footers, navigation, and other noise. What you end up with is a clean document that's all signal, no noise.

####  Implementation Steps
[conversational] First, **parse your document structure**. For web pages, parse the DOM. For PDFs, extract the text layout. Then apply **readability heuristics**—there are great open-source libraries for this like Mozilla's Readability or Python's newspaper3k.

Next, **explicitly drop known boilerplate elements**. Remove navigation menus, sidebars, footers. Strip out ads and A/B test content that changes between page loads. Get rid of cookie consent text—nobody needs that embedded.

Then **strip repeated patterns**. If every page in your corpus has "Copyright 2024 CompanyName" at the bottom, remove that pattern. Same with email signatures, legal disclaimers, and tracking IDs.

[seriously] Finally, **log what you're removing and spot-check**. Sometimes your heuristics will be too aggressive and remove actual content. Regular sampling ensures you're not accidentally throwing away good data.

####  When to Use This
[confidently] This technique is essential for **web pages**—they're notorious for having more boilerplate than content. It's also crucial for **PDFs** from organizations that use standard templates with headers, footers, and disclaimers on every page. **Emails** with signatures, disclaimers, and quoted reply chains. Any source with **repeated templates** where the same boilerplate appears across many documents.

[energetic] Let's look at the trade-offs.`
        },
        {
          id: 6,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Higher signal-to-noise; smaller index size</li>
                    <li>Better retrieval precision</li>
                  </ul>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Risk of deleting useful context if rules too aggressive</li>
                    <li>Needs maintenance across sources</li>
                  </ul>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Pros and Cons of Boilerplate Removal
[conversational] Let's evaluate the trade-offs for removing boilerplate and noise.

####  The Good Stuff
[pleased] The benefits here are substantial. First, you get **higher signal-to-noise ratio**. Your embeddings now represent actual content, not navigation menus and cookie banners. [enthusiastically] This translates directly to better retrieval quality. When someone searches for something, they find relevant content, not pages full of boilerplate.

You also get a **smaller index size**. If you're removing eighty percent noise from every document, your vector database is now five times smaller. That means lower storage costs, faster searches, and the ability to index more actual content with the same resources.

[delighted] And most importantly, you get **better retrieval precision**. Think about it: if every page has "About Us | Contact | Privacy Policy" in the header, those terms will show up in every embedding. Someone searching for "contact information" might match hundreds of irrelevant pages just because they all have "Contact" in the header. Remove the boilerplate, and suddenly your retrieval is much more precise.

####  The Problems
[cautiously] The main risk is being **too aggressive with your rules**. Sometimes what looks like boilerplate is actually useful context. Maybe the page title in the header provides important disambiguation. Maybe the sidebar contains related links that add value. [concerned] If your removal rules are too broad, you might delete content that should have been kept.

[seriously] The other challenge is **maintenance across sources**. Different websites have different structures. PDFs from different publishers use different templates. You need source-specific rules, and those rules need to be updated when sources change their layouts. This maintenance burden can add up, especially if you're working with hundreds of different sources.

[confidently] The key is starting conservative—remove obvious boilerplate first—then gradually refine your rules based on what you observe in your results. [energetic] Now let's move on to technique three: semantic chunking.`
        }
      ]
    },
    {
      id: 'semantic-chunking',
      title: 'Use Semantic Chunking',
      slides: [
        {
          id: 7,
          title: '3. Use Semantic Chunking',
          icon: { name: 'duo-scissors' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div>
                <GSAPAnimated animation="slideInTop" delay={0.1}>
                  <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>Goal:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Split documents into coherent units that answer a question on their own.</span></p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ marginTop: '20px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="Semantic Chunking Strategy"
                        diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TB
    A["📄 Long Document"] --> B["📐 Structure Analysis"]
    B --> C["📑 Split at Boundaries"]
    C --> D["🔗 Add Overlap"]
    D --> E["✨ Coherent Chunks"]
    style A fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                      />
                    </div>
                    <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <strong>How It Works</strong>
                      <span style={{ fontSize: '1.2rem' }}>Use structure and similarity to set chunk boundaries and optional overlaps.</span>
                    </p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>When to Use:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Long documents, RAG pipelines, context-window constraints.</span></p>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.7} duration={0.9}>
                  <div>
                    <p style={{ fontSize: '2rem' }}><strong>Steps:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Choose target chunk size (e.g., 200–400 tokens) and small overlap (e.g., 10–20%)</li>
                      <li>Anchor boundaries at headings, paragraphs, lists</li>
                      <li>Within sections, group paragraphs by embedding similarity/cohesion</li>
                      <li>Ensure each chunk has a single dominant topic; store source refs</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Use Semantic Chunking
[seriously] Technique three is semantic chunking, and this is absolutely critical if you're building any kind of retrieval system.

####  The Chunking Problem
[lecture] Here's the fundamental challenge: your documents are probably long—maybe thousands of words—but your embedding model has a limited context window, and you need each embedded unit to be a cohesive, retrievable piece of information. [concerned] If you just split documents at arbitrary positions—every five hundred characters, for example—you'll cut sentences in half, split concepts across chunks, and create fragments that don't make sense on their own.

####  What Semantic Chunking Does
[confidently] The goal is to **split documents into coherent units that can answer a question on their own**. Each chunk should be about one topic, one concept, one idea. [conversational] When someone searches for something and retrieves your chunk, they should get a complete, useful piece of information, not a fragment that needs context from other chunks to make sense.

####  How It Works
\`\`\`mermaid
flowchart TB
    A["📄 Long Document"] --> B["📐 Structure Analysis"]
    B --> C["📑 Split at Boundaries"]
    C --> D["🔗 Add Overlap"]
    D --> E["✨ Coherent Chunks"]
    style A fill:#ffcdd2,color:#000
    style E fill:#81c784,color:#000
\`\`\`
[lecture] Start with your **long document**. First, do **structure analysis**: identify headings, section breaks, paragraph boundaries. These give you natural split points. Then **split at these boundaries**—don't cut mid-sentence or mid-paragraph. Next, **add a small overlap** between chunks so that concepts that span boundaries aren't completely lost. [pleased] Finally, you get **coherent chunks** where each one is semantically complete.

####  Implementation Steps
[conversational] First, **choose your target chunk size**. Somewhere between two hundred and four hundred tokens is usually a good sweet spot. Too small and you lose context; too large and you defeat the purpose of chunking. Also decide on an **overlap percentage**—typically ten to twenty percent works well. This means the end of one chunk and the beginning of the next will share some content.

[confidently] Second, **anchor your boundaries at document structure**. Split at headings first—those are the strongest boundaries. Within sections, split at paragraph breaks. Within paragraphs, you can split at sentence boundaries if needed, but try to avoid that.

Third, **use similarity to refine your chunks**. Within a section, you might have multiple paragraphs. Group paragraphs that are semantically similar—about the same subtopic—into a single chunk. You can use lightweight embedding similarity to guide this grouping.

[firmly] Finally, **ensure single topic per chunk**. Each chunk should be dominated by one main idea. And crucially, **store source references**: keep track of which document, which section, which page each chunk came from. This lets you link back to the original source when presenting results.

####  When to Use This
[seriously] This is essential for **long documents**—anything over a couple of pages. It's absolutely required for **RAG 👉 'rag' pipelines** where you're retrieving chunks to provide context to a language model. And anytime you're dealing with **context-window constraints**—if your model can only handle five hundred tokens at a time, you need good chunking.

[energetic] Let's look at the trade-offs.`
        },
        {
          id: 8,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Improves recall/precision in retrieval</li>
                    <li>Reduces context stuffing and hallucinations</li>
                  </ul>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>More complex pipeline; overlap increases storage</li>
                    <li>Requires tuning per corpus</li>
                  </ul>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Pros and Cons of Semantic Chunking
[conversational] Let's evaluate the benefits and challenges of semantic chunking.

####  The Advantages
[enthusiastically] The improvements here are transformative. [pleased] First and foremost, you get **better recall and precision in retrieval**. When each chunk is a coherent, complete unit of information, your embedding captures a complete concept. Someone searching for information will find exactly what they need in one chunk, not fragments spread across multiple chunks.

[delighted] You also **reduce context stuffing and hallucinations**. [storytelling] Think about what happens when you retrieve poorly chunked text and feed it to a language model. You might get three sentence fragments that don't connect logically, or a chunk that starts mid-thought. The model tries to make sense of this mess and ends up hallucinating connections that don't exist. [confidently] With semantic chunking, each chunk is self-contained, so the model gets clean, coherent context.

####  The Challenges
[cautiously] The main downside is **increased pipeline complexity**. You're not just splitting on character count anymore—you're analyzing document structure, measuring semantic similarity, adding overlaps. This takes more processing time and more code to maintain.

[concerned] The **overlap increases storage costs**. If you're using twenty percent overlap, you're storing point two extra copies of your content. That adds up quickly with large corpora.

[seriously] Finally, semantic chunking **requires tuning per corpus**. The ideal chunk size for API documentation is different from the ideal size for legal contracts or scientific papers. You need to experiment and measure to find what works for your specific use case.

[confidently] Despite these challenges, semantic chunking is absolutely essential for quality RAG systems. The retrieval improvements far outweigh the added complexity. [energetic] Now let's move to technique four: adding section titles to chunks.`
        }
      ]
    },
    {
      id: 'section-titles',
      title: 'Add Section Titles to Chunks',
      slides: [
        {
          id: 9,
          title: '4. Add Section Titles to Chunks',
          icon: { name: 'duo-heading' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div>
                <GSAPAnimated animation="slideInTop" delay={0.1}>
                  <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>Goal:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Provide context and disambiguation for each chunk.</span></p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ marginTop: '20px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="Section Title Hierarchy Flow"
                        diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TB
    A["📚 Document Structure"] --> B["🔍 Extract Hierarchy"]
    B --> C["📋 Doc Title > H1 > H2 > H3"]
    C --> D["🏷️ Build Breadcrumb"]
    D --> E["📦 Prepend to Chunk"]
    E --> F["✨ Contextualized Chunk"]
    style A fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style D fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                      />
                    </div>
                    <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <strong>How It Works</strong>
                      <span style={{ fontSize: '1.2rem' }}>Prepend/bundle the document title and heading path with the chunk text/metadata.</span>
                    </p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>When to Use:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Hierarchical docs, manuals, APIs, research papers.</span></p>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.7} duration={0.9}>
                  <div>
                    <p style={{ fontSize: '2rem' }}><strong>Steps:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Extract breadcrumb (Doc Title &gt; H1 &gt; H2 &gt; H3)</li>
                      <li>Build a concise chunk title; prepend or store in metadata</li>
                      <li>Keep under token budget; avoid repeating long titles</li>
                      <li>Include stable section IDs/anchors</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Add Section Titles to Chunks
[conversational] Technique four is adding section titles to chunks, and this is one of the simplest yet most effective improvements you can make.

####  The Context Problem
[storytelling] Imagine you've chunked a long technical manual into pieces. You retrieve a chunk that says "To configure the feature, edit the configuration file and restart the service." [puzzled] This is useful information, but which feature? Which service? [concerned] Without context, this chunk could match dozens of different queries, and the user won't know if it's relevant to their specific need.

####  What This Technique Does
[confidently] The goal is to **provide context and disambiguation for each chunk**. [enthusiastically] By including the document structure—the title, the chapter, the section headings—you turn that generic chunk into something specific: "User Guide > Authentication > OAuth Configuration > To configure the feature, edit the configuration file and restart the service." [delighted] Now it's crystal clear what this chunk is about.

####  How It Works
\`\`\`mermaid
flowchart TB
    A["📚 Document Structure"] --> B["🔍 Extract Hierarchy"]
    B --> C["📋 Doc Title > H1 > H2 > H3"]
    C --> D["🏷️ Build Breadcrumb"]
    D --> E["📦 Prepend to Chunk"]
    E --> F["✨ Contextualized Chunk"]
    style A fill:#ffcdd2,color:#000
    style F fill:#81c784,color:#000
    style D fill:#4fc3f7,color:#000
\`\`\`
[lecture] Start with your **document structure**—the hierarchy of headings and sections. **Extract this hierarchy** by parsing the heading tags, whether that's HTML H1 through H6 tags, Markdown headers, or PDF outline entries. Build a **breadcrumb path**: Document Title, then H1, then H2, then H3. This gives you the full context trail from the top level down to the specific section. [conversational] **Prepend this to your chunk**—either at the beginning of the text itself or as structured metadata. [pleased] The result is a **contextualized chunk** that carries its position in the document with it.

####  Implementation Steps
[confidently] First, **extract the breadcrumb**. Walk the document structure and build a path like "API Documentation > REST API > Authentication Endpoints > POST /login". Keep this hierarchical trail.

Second, **build a concise chunk title**. You might not need the full breadcrumb for every chunk—sometimes just the last two or three levels are sufficient. Balance completeness with token efficiency.

[conversational] Third, decide whether to **prepend the title to the text** or **store it as metadata**. Prepending means it's embedded directly, which can be powerful for semantic matching. Storing as metadata keeps the chunk text clean and lets you filter or display the context separately. Often doing both works well.

[cautiously] Fourth, **keep it under your token budget**. A forty-word breadcrumb on a two-hundred-word chunk is taking up twenty percent of your space. If your titles are very long, abbreviate them or use shortened forms.

[firmly] Finally, **include stable section IDs or anchors**. This lets you link back to the exact location in the source document, which is invaluable for showing users where the information came from.

####  When to Use This
[seriously] This is essential for **hierarchical documents**—anything with chapters, sections, and subsections. **Technical manuals** where the same terminology appears in different contexts. **API documentation** where endpoint names, method names, and parameter names repeat across different services. **Research papers** with multiple sections and subsections. Anytime your corpus has structure, add that structure to your chunks.

[energetic] Let's look at the trade-offs.`
        },
        {
          id: 10,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Stronger semantic cues; better filtering and ranking</li>
                    <li>Easier tracing back to source</li>
                  </ul>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Extra tokens if in-text; may skew similarity if titles are very generic</li>
                    <li>Requires robust heading extraction</li>
                  </ul>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Pros and Cons of Adding Section Titles
[conversational] Let's examine the benefits and potential issues with adding section titles to chunks.

####  The Benefits
[pleased] The advantages here are powerful and immediate. [enthusiastically] First, you get **stronger semantic cues**. When your chunk includes "Authentication > OAuth > Configuration", your embedding model has much richer signals to work with. It understands not just that this text is about configuration, but specifically OAuth configuration within an authentication context.

[delighted] This leads directly to **better filtering and ranking**. Users can filter results by section, by chapter, by document. Your ranking algorithms have more metadata to work with, so relevant results rise to the top. A query for "OAuth configuration" will match the chunk with that exact breadcrumb much more strongly than a generic chunk about configuration.

[confidently] You also get **easier tracing back to source**. When you show results to users, you can display the full path: "Found in API Documentation > Authentication > OAuth Configuration." The user immediately understands where this information lives in your documentation hierarchy. For debugging or verification, you can jump directly to that section.

####  The Drawbacks
[cautiously] The main concern is **extra tokens in the text**. If you're prepending section titles to every chunk, you're using up part of your embedding model's context window on metadata instead of content. For very long breadcrumbs, this can be significant. The solution is either keeping titles short, storing them as metadata instead of in-text, or both.

[concerned] Another risk is **skewing similarity if titles are generic**. If every chunk starts with "Product Documentation > User Guide >", that repeated prefix might dominate the embedding. Chunks become more similar to each other than they should be. The fix is to use distinctive, specific section titles rather than generic ones, or to store generic prefixes as separate metadata fields.

[seriously] Finally, this **requires robust heading extraction**. Not all documents have clean, well-structured headings. Web pages might use CSS styling instead of semantic HTML tags. PDFs might not have outline metadata. You need good parsing logic to extract the hierarchy reliably.

[confidently] Despite these challenges, adding section titles is one of the highest-value techniques for structured documents. The disambiguation and context benefits are enormous. [energetic] Let's move to technique five: stopword trimming.`
        }
      ]
    },
    {
      id: 'stopword-trimming',
      title: 'Apply Light Stopword Trimming',
      slides: [
        {
          id: 11,
          title: '5. Apply Light Stopword Trimming',
          icon: { name: 'duo-eraser' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div>
                <GSAPAnimated animation="slideInTop" delay={0.1}>
                  <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>Goal:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Reduce filler tokens while preserving meaning and negation.</span></p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ marginTop: '20px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="Stopword Filtering Process"
                        diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TB
    A["📝 Original Text"] --> B{"🔍 Token Analysis"}
    B -->|Keep| C["💎 Content Words"]
    B -->|Remove| D["🗑️ Filler Words"]
    C --> E["✨ Dense Text"]
    D -.->|"a, the, of..."| F["⚠️ Light Removal Only"]
    style A fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style D fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style F fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px`}
                      />
                    </div>
                    <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <strong>How It Works</strong>
                      <span style={{ fontSize: '1.2rem' }}>Remove a conservative set of high-frequency function words outside code/data.</span>
                    </p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>When to Use:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Tight token budgets, repetitive narrative text, noisy corpora.</span></p>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" delay={0.7} duration={1}>
                  <div>
                    <p style={{ fontSize: '2rem' }}><strong>Steps:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Start with a small, language-specific stoplist</li>
                      <li>Protect negations (not, never), numerals, dates, units, named entities</li>
                      <li>Skip trimming inside code blocks, formulas, or commands</li>
                      <li>Measure impact on retrieval metrics; keep removal light (&lt;10%)</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Apply Light Stopword Trimming
[cautiously] Technique five is stopword trimming, and I want to emphasize the word "light" here. [seriously] This technique is powerful but requires a careful touch.

####  The Filler Token Problem
[conversational] Look at a typical English sentence: "The user can configure the system by editing the configuration file in the settings directory." [lecture] Count the content words versus the filler: "user", "configure", "system", "editing", "configuration", "file", "settings", "directory"—those are your content words. But "the", "can", "by", "the", "in", "the"—those are just grammatical glue. They're necessary for the sentence to read well, but they don't add semantic meaning. [conversational] If you're working with tight token budgets, removing some of these fillers can free up space for more content.

####  What This Technique Does
[confidently] The goal is to **reduce filler tokens while preserving meaning and negation**. [firmly] You want to remove the words that take up space without adding much information, but you absolutely must keep words that change meaning. "Not secure" and "secure" are opposites—you cannot remove "not" just because it's a common word.

####  How It Works
\`\`\`mermaid
flowchart TB
    A["📝 Original Text"] --> B{"🔍 Token Analysis"}
    B -->|Keep| C["💎 Content Words"]
    B -->|Remove| D["🗑️ Filler Words"]
    C --> E["✨ Dense Text"]
    D -.->|"a, the, of..."| F["⚠️ Light Removal Only"]
    style A fill:#ffcdd2,color:#000
    style D fill:#ffcdd2,color:#000
    style E fill:#81c784,color:#000
    style F fill:#4fc3f7,color:#000
\`\`\`
[lecture] Start with your **original text**. Run **token analysis** to identify which words are stopwords—things like "a", "the", "of", "in", "to", "for". Split your tokens: **keep content words**, **remove filler words**. [seriously] But here's the crucial part: **light removal only**. You're removing maybe five to ten percent of tokens, not fifty percent. The goal is to densify your text slightly, not to strip it bare. [pleased] The result is **denser text** that fits more semantic content in the same token budget.

####  Implementation Steps
[conversational] First, **start with a small stoplist**. [cautiously] Don't use one of those massive five-hundred-word stoplists. Use maybe twenty to thirty of the most common, least meaningful words: "the", "a", "an", "and", "or", "in", "on", "at", "to", "for". Make it **language-specific**—stopwords in English are different from stopwords in Spanish or German.

[firmly] Second, **protect important words**. Never remove **negations** like "not", "never", "no", "none". These flip meanings entirely. Never remove **numerals, dates, or units**—these are highly specific data points. Protect **named entities**: person names, company names, product names, places. These are the most important tokens for retrieval.

[seriously] Third, **skip stopword removal inside code blocks, formulas, or commands**. In code, even common words like "for" or "in" have precise syntactic meaning. In formulas, every symbol matters. Only trim stopwords from natural language prose.

[cautiously] Finally, **measure the impact**. Before and after trimming, check your retrieval metrics: precision, recall, NDCG 👉 'n-d-c-g'. If quality drops, you're removing too much. As a rule of thumb, keep your removal under ten percent of total tokens.

####  When to Use This
[conversational] Use stopword trimming when you have **tight token budgets**—maybe your embedding model has a small context window, or you're storing millions of chunks and want to reduce index size. It's useful for **repetitive narrative text** where the same filler words appear over and over. And it can help with **noisy corpora** where you've got a lot of unstructured, conversational text with lots of grammatical filler but limited content density.

[energetic] Let's look at the pros and cons.`
        },
        {
          id: 12,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Smaller, denser chunks; faster indexing</li>
                    <li>Can improve signal-to-noise</li>
                  </ul>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Over-trimming harms semantics and QA</li>
                    <li>Multilingual handling adds complexity</li>
                  </ul>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Pros and Cons of Stopword Trimming
[seriously] Let's evaluate the benefits and risks of stopword trimming, keeping in mind that this technique requires the most careful tuning.

####  The Advantages
[conversational] When done correctly, stopword trimming delivers clear benefits. [pleased] You get **smaller, denser chunks**. If you're removing ten percent of your tokens, your chunks are ten percent smaller, which means you can fit more chunks in the same storage space or fit more context in the same embedding window.

You also get **faster indexing**. Fewer tokens means less processing time when generating embeddings. If you're indexing millions of documents, this adds up to real time and cost savings.

[confidently] Most importantly, you **can improve signal-to-noise ratio**. When you remove filler words, the remaining words—the content words—get more weight in the embedding. Your embedding now represents the core concepts more strongly.

####  The Significant Risks
[cautiously] Here's where things get tricky. [concerned] **Over-trimming harms semantics and question answering**. If you remove too many words, your text stops making sense. "User configure system editing configuration file settings directory" is technically more dense, but it's also unreadable and loses nuance. [seriously] Modern embedding models are trained on natural language, not keyword soup. If you strip too much grammar, the model can't understand the text properly.

[disappointed] The effect is even worse for question answering. When you retrieve a chunk and show it to users or feed it to a language model, they need coherent, readable text. Over-trimmed text confuses both humans and models.

[firmly] **Multilingual handling adds significant complexity**. Every language has different stopwords. The stoplist for English doesn't work for French or Japanese or Arabic. You need language-specific stoplists, and you need language detection to apply the right list. If you're working with mixed-language corpora, this complexity multiplies.

####  The Bottom Line
[seriously] Stopword trimming is the highest-risk technique in our toolkit. The potential damage from over-trimming outweighs the benefits from conservative trimming. [cautiously] My recommendation: start without stopword trimming, measure your baseline quality, then experiment with very light trimming—only the most common, least meaningful words—and measure again. Only keep it if you see clear improvements. [energetic] Now let's move to technique six: keyphrase tags.`
        }
      ]
    },
    {
      id: 'keyphrase-tags',
      title: 'Add Keyphrase / Topic Tags',
      slides: [
        {
          id: 13,
          title: '6. Add Keyphrase / Topic Tags as Metadata',
          icon: { name: 'duo-tags' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div>
                <GSAPAnimated animation="slideInTop" delay={0.1}>
                  <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>Goal:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Enrich chunks with facetable concepts for better filtering and recall.</span></p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ marginTop: '20px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="Keyphrase Extraction and Tagging"
                        diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TB
    A["📝 Chunk Text"] --> B["🔍 Extract Keyphrases"]
    B --> C["🔄 Normalize & Dedupe"]
    C --> D["📚 Map to Vocabulary"]
    D --> E["🏷️ Attach as Tags"]
    E --> F["✨ Enriched Chunk"]
    style A fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style D fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                      />
                    </div>
                    <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <strong>How It Works</strong>
                      <span style={{ fontSize: '1.2rem' }}>Extract keyphrases and map to a controlled vocabulary; store as metadata fields.</span>
                    </p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>When to Use:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Large corpora, multi-domain search, governance/compliance filters.</span></p>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.7} duration={0.9}>
                  <div>
                    <p style={{ fontSize: '2rem' }}><strong>Steps:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Run keyphrase extraction (e.g., RAKE/YAKE/KeyBERT or noun-phrase heuristics)</li>
                      <li>Normalize (lowercase, lemmatize), dedupe, map synonyms</li>
                      <li>Attach tags (topics, entities, products, versions) to chunks</li>
                      <li>Index tags and enable filterable search</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Add Keyphrase and Topic Tags as Metadata
[enthusiastically] Technique six is adding keyphrase and topic tags as metadata, and this transforms your retrieval system from purely semantic to hybrid semantic-plus-structured.

####  The Discoverability Problem
[conversational] Semantic search with embeddings is powerful—it finds concepts even when the exact words don't match. [cautiously] But sometimes you need explicit, structured filters. [storytelling] Imagine you're searching a large corporate knowledge base. You want documents about "security" but only from the "infrastructure" department, only from the last quarter, and only tagged with "AWS". [seriously] Pure semantic search can't reliably enforce those constraints. You need structured metadata.

####  What This Technique Does
[confidently] The goal is to **enrich chunks with facetable concepts for better filtering and recall**. You extract the key topics, entities, products, technologies, and concepts from each chunk, normalize them into a controlled vocabulary, and attach them as metadata tags. [pleased] Now users can filter by these tags, and your search can boost results that match on both semantic similarity and tag overlap.

####  How It Works
\`\`\`mermaid
flowchart TB
    A["📝 Chunk Text"] --> B["🔍 Extract Keyphrases"]
    B --> C["🔄 Normalize & Dedupe"]
    C --> D["📚 Map to Vocabulary"]
    D --> E["🏷️ Attach as Tags"]
    E --> F["✨ Enriched Chunk"]
    style A fill:#ffcdd2,color:#000
    style F fill:#81c784,color:#000
    style D fill:#4fc3f7,color:#000
\`\`\`
[lecture] Start with your **chunk text**. Run **keyphrase extraction** using algorithms like RAKE 👉 'rake', YAKE 👉 'yake', or KeyBERT 👉 'key-bert', or use simple noun-phrase extraction heuristics. These tools identify the most important terms and phrases. Then **normalize and deduplicate**: convert to lowercase, apply lemmatization 👉 'lemma-tization' so "running" and "runs" become "run", and remove duplicates. Next, **map to a controlled vocabulary**. Maybe "machine learning", "ML", and "M-L" all map to the canonical term "machine-learning". This ensures consistency. Finally, **attach these tags as metadata** to your chunk. [delighted] Now each chunk has structured labels alongside its text. The result is an **enriched chunk** that's both semantically embedded and explicitly tagged.

####  Implementation Steps
[conversational] First, **run keyphrase extraction**. There are several excellent algorithms. **RAKE** stands for Rapid Automatic Keyword Extraction—it's fast and works well for general text. **YAKE** stands for Yet Another Keyword Extractor—it's more sophisticated and handles multiple languages. **KeyBERT** uses BERT embeddings to find keyphrases semantically similar to the document. Or you can use **noun-phrase heuristics**: extract all noun phrases using part-of-speech tagging, then rank by frequency and TF-IDF 👉 't-f-i-d-f'.

[confidently] Second, **normalize everything**. Lowercase all tags. Apply lemmatization to reduce words to their base form. Deduplicate: if the same phrase appears three times, keep it once. **Map synonyms**: create a synonym dictionary so variations of the same concept map to one canonical tag.

Third, **attach tags to chunks**. You might extract tags for topics: "authentication", "security", "compliance". For entities: "AWS", "Google Cloud", "Azure". For products: "Product-X-Version-2", "Product-Y-Version-3". For dates or versions: "2024-Q4", "Version-5.2". Store all these as structured metadata fields on each chunk.

[pleased] Finally, **index these tags and enable filterable search**. Your vector database should support metadata filtering. Users can search for "API authentication" and filter to only chunks tagged with "AWS" and "OAuth". This combines the power of semantic search with the precision of structured filters.

####  When to Use This
[seriously] This is essential for **large corpora** where users need to narrow down results. It's crucial for **multi-domain search**—if your index covers HR documents, engineering docs, sales materials, and legal contracts, tags help users filter to the right domain. It's vital for **governance and compliance filters**—maybe certain documents are tagged "confidential" or "internal-only", and your access controls use these tags to restrict visibility.

[energetic] Let's examine the trade-offs.`
        },
        {
          id: 14,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Better recall/precision and navigability</li>
                    <li>Enables facets, access controls, analytics</li>
                  </ul>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Extraction noise; needs QA and thresholding</li>
                    <li>Taxonomy maintenance over time</li>
                  </ul>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Pros and Cons of Keyphrase Tags
[conversational] Let's evaluate the benefits and challenges of adding keyphrase and topic tags to your chunks.

####  The Powerful Benefits
[enthusiastically] The advantages here are substantial and multi-dimensional. [pleased] First, you get **better recall and precision**. Semantic search alone might miss results where the terminology is unusual or ambiguous. Tags provide explicit signals: if a chunk is tagged "OAuth" and "authentication", queries containing those terms will match strongly, even if the chunk text uses different phrasing. This improves both recall—finding relevant documents—and precision—avoiding irrelevant ones.

[delighted] You also get **vastly improved navigability**. Users can explore your corpus by browsing tags: "Show me all documents tagged with AWS", "Now filter to just the ones about security", "Now just from 2024". This faceted navigation is intuitive and powerful.

[confidently] Tags **enable access controls**. You can tag chunks with sensitivity levels—"public", "internal", "confidential"—and enforce permissions at query time. Only show users the chunks they're allowed to see.

Tags also **enable analytics**. Track which topics are most searched, which products are most mentioned, which tags appear together most often. This gives you insight into how people use your knowledge base and where you might have gaps.

####  The Significant Challenges
[cautiously] The main problem is **extraction noise**. [concerned] Keyphrase extraction algorithms aren't perfect. They'll extract terms that aren't actually important, miss terms that are important, and sometimes extract nonsense like partial phrases or formatting artifacts. [seriously] You need **quality assurance and thresholding**: maybe only keep keyphrases that appear at least three times, or that score above a confidence threshold, or that match your expected vocabulary. This requires manual review and tuning.

The other major challenge is **taxonomy maintenance**. Over time, your vocabulary evolves. New products launch, old products are deprecated, terminology shifts. Your synonym mappings need updates: maybe "machine learning" becomes "AI", or a product gets renamed. Someone needs to maintain this taxonomy, merge duplicate tags, split ambiguous tags, and keep everything consistent. This ongoing maintenance can be significant work.

####  The Verdict
[confidently] Despite these challenges, keyphrase tagging is incredibly valuable for production search systems. [pleased] The combination of semantic embeddings plus structured tags gives you the best of both worlds: semantic understanding with structured precision. [seriously] Just plan for the maintenance burden. [energetic] Now let's look at our final technique: converting tables to structured text.`
        }
      ]
    },
    {
      id: 'convert-tables',
      title: 'Convert Tables to Structured Text',
      slides: [
        {
          id: 15,
          title: '7. Convert Tables to Structured Text',
          icon: { name: 'duo-table' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div>
                <GSAPAnimated animation="slideInTop" delay={0.1}>
                  <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>Goal:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Preserve relational information in a model-friendly linear form.</span></p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ marginTop: '20px', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="Table to Text Conversion"
                        diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TB
    A["📊 Table"] --> B["🔍 Parse Structure"]
    B --> C["📋 Extract Schema"]
    C --> D["🔄 Linearize Rows"]
    D --> E["✍️ Key-Value Format"]
    E --> F["✨ Structured Text"]
    style A fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style E fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                      />
                    </div>
                    <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <strong>How It Works</strong>
                      <span style={{ fontSize: '1.2rem' }}>Linearize rows/columns into key–value sentences or compact JSON-like strings.</span>
                    </p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <p style={{ fontSize: '2rem', display: 'flex', flexDirection: 'column', gap: '16px' }}><strong>When to Use:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Specs, pricing sheets, CSVs, benchmarks, logs.</span></p>
                </GSAPAnimated>
                <GSAPAnimated animation="rotateIn" delay={0.7} duration={1}>
                  <div>
                    <p style={{ fontSize: '2rem' }}><strong>Steps:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Keep header row as schema; identify primary key columns</li>
                      <li>Emit per-row sentences: "RowID=X; Column: Value (Unit)"</li>
                      <li>Verticalize wide tables; group related columns</li>
                      <li>Include summary stats (min/mean/max) when helpful; attach original CSV/JSON path as metadata</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Convert Tables to Structured Text
[enthusiastically] Our final technique is converting tables to structured text, and this is critical for making tabular data searchable and embeddable.

####  The Table Problem
[conversational] Tables are everywhere: specification sheets, pricing tables, benchmark results, log files, CSV exports, database dumps. They're incredibly information-dense and well-structured. [concerned] But here's the problem: embedding models are trained on linear text. They expect sentences and paragraphs, not rows and columns. [storytelling] If you just extract the raw text from a table—"Name Age Department Alice 32 Engineering Bob 28 Sales"—you lose all the structure. The model doesn't know which values go with which columns.

####  What This Technique Does
[confidently] The goal is to **preserve relational information in a model-friendly linear form**. We want to convert the two-dimensional table structure into one-dimensional text while keeping the relationships between headers and values explicit. [conversational] Think of it as serializing the table into a format that both machines and humans can understand.

####  How It Works
\`\`\`mermaid
flowchart TB
    A["📊 Table"] --> B["🔍 Parse Structure"]
    B --> C["📋 Extract Schema"]
    C --> D["🔄 Linearize Rows"]
    D --> E["✍️ Key-Value Format"]
    E --> F["✨ Structured Text"]
    style A fill:#ffcdd2,color:#000
    style F fill:#81c784,color:#000
    style E fill:#4fc3f7,color:#000
\`\`\`
[lecture] Start with your **table**—maybe it's HTML, a CSV file, or an Excel spreadsheet. **Parse the structure**: identify headers, rows, and cells. **Extract the schema**: the header row tells you what each column represents. Then **linearize the rows**: convert each row into a text representation. Use **key-value format**: pair each header with its corresponding value. [pleased] The result is **structured text** that preserves all the table information but in a linear, embeddable form.

####  Implementation Steps
[conversational] First, **keep the header row as your schema**. The headers are your column names: "Product", "Price", "Stock", "Category". Also **identify primary key columns**—which columns uniquely identify each row. Maybe it's "ProductID" or "Name".

[confidently] Second, **emit per-row sentences**. For each row, create a structured sentence or paragraph. For example: "ProductID equals P-123; Product: Widget-A; Price: $29.99 (USD); Stock: 150 units; Category: Electronics." This makes every relationship explicit. The embedding model can now understand that "$29.99" is the price of "Widget-A".

[conversational] Third, **verticalize wide tables**. If your table has thirty columns, a single per-row sentence becomes unwieldy. Instead, create multiple chunks per row, each covering a subset of related columns. Or **group related columns**: maybe product attributes in one chunk, pricing information in another, inventory details in a third.

Fourth, **include summary statistics when helpful**. For tables with numeric data—like benchmark results—add summary rows: "Minimum: 12ms, Mean: 45ms, Maximum: 203ms". This gives the model aggregate context.

[firmly] Finally, **attach the original CSV or JSON path as metadata**. Users might want to see the raw table, so keep a reference to the source file.

####  When to Use This
[seriously] This technique is essential for **product specifications**—tables of features, dimensions, technical specs. For **pricing sheets**—products, tiers, costs, discounts. For **CSV and log files**—any tabular data exports. For **benchmark results**—performance metrics across different configurations. For **database exports**—when you want to make structured database content searchable.

[energetic] Let's look at the pros and cons.`
        },
        {
          id: 16,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Pros
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Better matching for row-level queries</li>
                    <li>Works across models without layout awareness</li>
                  </ul>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                    <SvgIcon iconName="duo-circle-xmark" sizeName="2x" style={{ marginTop: '16px' }} darkModeInvert={true} />
                    Cons
                  </h4>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Higher token count; potential loss of layout cues</li>
                    <li>Requires careful formatting for very large tables</li>
                  </ul>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Pros and Cons of Converting Tables
[conversational] Let's evaluate the benefits and challenges of converting tables to structured text.

####  The Clear Benefits
[enthusiastically] The advantages here are significant for anyone working with tabular data. [pleased] First, you get **better matching for row-level queries**. When someone searches for "products under thirty dollars", your embedding can match the linearized row where "Price: $29.99" appears alongside "Product: Widget-A". The model understands the relationship between the price and the product because you've made it explicit in the text.

[conversational] Without this conversion, the embedding sees "Widget-A" in one cell and "$29.99" in another with no clear connection. [delighted] With conversion, the connection is obvious and embeddable.

[confidently] Second, this approach **works across models without layout awareness**. Most embedding models are pure text models—they have no concept of tables, rows, or columns. By converting to structured text, you make your tabular data compatible with any text embedding model, not just specialized multimodal models that can handle tables. This gives you flexibility and broad compatibility.

####  The Trade-offs
[cautiously] The main cost is **higher token count**. When you convert "Alice | 32 | Engineering" to "Name: Alice; Age: 32 years; Department: Engineering", you've added a lot of extra text. [concerned] Each value now includes its column label. For large tables, this multiplies your token usage significantly. More tokens means higher embedding costs and slower processing.

There's also **potential loss of layout cues**. Tables have visual structure—columns, rows, alignment—that help humans scan and understand data quickly. When you linearize to text, you lose that visual structure. [conversational] If you're showing results to users, they might prefer to see the original table rather than the linearized text. The solution is to keep both: store the linearized version for embedding and searching, but keep a reference to the original table for display.

[seriously] Finally, this technique **requires careful formatting for very large tables**. A table with a thousand rows and fifty columns can't be processed as a single chunk. You need strategies: maybe one chunk per row, maybe group related rows, maybe create summary chunks with aggregated statistics. This adds complexity to your preprocessing pipeline.

####  The Verdict
[confidently] For anyone building search over structured data—product catalogs, specification sheets, logs, benchmarks—converting tables to structured text is essential. [pleased] The retrieval improvements far outweigh the increased token costs. [cautiously] Just plan your chunking strategy carefully for large tables. [energetic] That completes our seven techniques. Let's summarize what we've learned.`
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 17,
          title: 'Summary and Next Steps',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div>
                <GSAPAnimated animation="slideInTop" delay={0.1}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" darkModeInvert={true} />
                    Recap: The 7 Techniques
                  </h3>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.3}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <GSAPStaggerList stagger={0.1} duration={0.6}>
                      <li>1. Clean/Normalize</li>
                      <li>2. De-boilerplate</li>
                      <li>3. Semantic Chunking</li>
                      <li>4. Section Titles</li>
                      <li>5. Stopword Trimming</li>
                      <li>6. Keyphrase Tags</li>
                      <li>7. Structured Tables</li>
                    </GSAPStaggerList>
                  </ul>
                </GSAPAnimated>

                <GSAPAnimated animation="slideInLeft" delay={1.2}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '25px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-chart-line" sizeName="2x" darkModeInvert={true} />
                    What to Measure
                  </h3>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={1.4}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <GSAPStaggerList stagger={0.1} duration={0.6}>
                      <li>Relevance metrics: nDCG/MRR@k, recall@k, hit rate</li>
                      <li>Performance metrics: latency, index size, embedding time</li>
                      <li>A/B test with your application's end-user metrics</li>
                    </GSAPStaggerList>
                  </ul>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Summary and Next Steps
[energetic] We've covered a lot of ground today. Let's recap the seven techniques and talk about how to measure their impact.

####  Recap: The Seven Techniques
[conversational] Let's quickly review our toolkit. [confidently] **Technique one: clean and normalize text**. Standardize your input to reduce variability—fix encodings, normalize whitespace, handle special characters consistently. This is your foundation.

**Technique two: remove boilerplate and noise**. Strip away headers, footers, navigation, ads, and all the other non-content that dilutes your embeddings. Focus on pure signal.

**Technique three: use semantic chunking**. Split documents at natural boundaries into coherent, self-contained units. Each chunk should be able to answer a question on its own.

**Technique four: add section titles to chunks**. Provide context by including the document hierarchy—the breadcrumb trail from title through headings. This disambiguates and enriches your chunks.

[cautiously] **Technique five: apply light stopword trimming**. Carefully remove the most common, least meaningful filler words. Keep it light—under ten percent removal—and always preserve negations and entities.

[pleased] **Technique six: add keyphrase and topic tags as metadata**. Extract important terms and concepts, normalize them into a controlled vocabulary, and attach them as structured metadata. This enables filtering, faceting, and hybrid search.

**Technique seven: convert tables to structured text**. Linearize tabular data into key-value format so embedding models can understand the relationships between columns and values.

####  What to Measure
[seriously] Now, how do you know if these techniques are working? You need metrics. [lecture] For **relevance**, measure things like **nDCG** 👉 'n-d-c-g'—Normalized Discounted Cumulative Gain—which evaluates ranking quality. **MRR-at-K** 👉 'M-R-R-at-K'—Mean Reciprocal Rank—which measures how high your first relevant result appears. **Recall-at-K**—how many of the relevant documents appear in your top K results. **Hit rate**—what percentage of queries return at least one relevant result.

[conversational] For **performance**, measure **latency**—how long does search take. **Index size**—how much storage are you using. **Embedding time**—how long does preprocessing and embedding take.

[firmly] But the most important measurement: **A/B test with your application's end-user metrics**. Are users clicking on results more often? Spending less time searching? Finding what they need faster? These real-world metrics matter more than any synthetic benchmark.

[energetic] Let's talk about implementation strategy.`
        },
        {
          id: 18,
          title: 'Implementation Playbook and Next Steps',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div>
                <GSAPAnimated animation="slideInTop" delay={0.1}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '25px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-map" sizeName="2x" darkModeInvert={true} />
                    Implementation Playbook
                  </h3>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.3}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <li>Start with cleaning + de-boilerplate (biggest ROI)</li>
                      <li>Add semantic chunking + titles (improves retrieval precision)</li>
                      <li>Enrich with keyphrase tags; convert tables to structured text</li>
                      <li>Carefully test light stopword trimming (most sensitive to tuning)</li>
                    </GSAPStaggerList>
                  </ul>
                </GSAPAnimated>

                <GSAPAnimated animation="slideInLeft" delay={1.2}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '25px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-list-ol" sizeName="2x" darkModeInvert={true} />
                    Next Steps
                  </h3>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={1.4}>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <GSAPStaggerList stagger={0.12} duration={0.7}>
                      <li>Build a small labeled eval set</li>
                      <li>Run ablations per trick</li>
                      <li>Choose defaults per corpus</li>
                      <li>Automate QA sampling</li>
                    </GSAPStaggerList>
                  </ul>
                </GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Implementation Playbook and Next Steps
[confidently] Let's talk about the practical path forward. How do you actually implement these techniques, and in what order?

####  Implementation Playbook
[conversational] Here's my recommended implementation order, ranked by return on investment and risk.

[enthusiastically] **Start with cleaning and de-boilerplating**. These give you the **biggest ROI** with the lowest risk. Cleaning is straightforward—normalize encodings, fix whitespace, handle special characters. De-boilerplating removes obvious noise—headers, footers, navigation. [pleased] Both techniques are hard to mess up, and the improvements are immediate and substantial.

[confidently] **Next, add semantic chunking and section titles**. Together, these dramatically **improve retrieval precision**. Semantic chunking ensures each embedded unit is coherent and self-contained. Section titles provide the context and disambiguation that makes chunks truly useful. [conversational] These techniques require more engineering—parsing structure, analyzing boundaries—but the payoff is huge.

[pleased] **Then enrich with keyphrase tags and convert tables to structured text**. These are more advanced techniques that unlock new capabilities. Keyphrase tags enable filtering, faceting, and hybrid search. Table conversion makes structured data searchable. Both require more sophisticated preprocessing—keyphrase extraction, table parsing—but they're essential for production systems with diverse data types.

[cautiously] **Finally, carefully test light stopword trimming**. This is the **most sensitive technique**. Done wrong, it can hurt quality. Done right, it provides modest gains. [seriously] Only implement this after you have solid baselines and can measure the impact carefully. Keep it light, measure constantly, and be prepared to disable it if it doesn't help.

####  Next Steps
[energetic] So you're sold on these techniques. What do you actually do tomorrow? Four concrete steps.

[confidently] **First, build a small labeled evaluation set**. You need ground truth. Collect maybe fifty to a hundred real queries from your users. For each query, manually identify which documents in your corpus are relevant. [firmly] This is your gold standard for measuring improvements. Without this, you're flying blind.

[conversational] **Second, run ablations per technique**. Ablation 👉 'ab-lay-shun' means turning features on and off systematically. Start with your baseline: no preprocessing. Measure quality. Add technique one: cleaning. Measure again. Add technique two: de-boilerplating. Measure again. This tells you exactly how much each technique contributes.

**Third, choose defaults per corpus**. [seriously] There's no one-size-fits-all configuration. The ideal chunk size for API docs is different from the ideal size for blog posts. The best stoplist for English technical writing is different from the best for conversational Spanish. Tune your parameters for your specific data.

[firmly] **Fourth, automate quality assurance sampling**. You can't manually review every chunk, but you should regularly sample random chunks and check if your preprocessing is working correctly. Are section titles attached properly? Are tables converted cleanly? Is boilerplate actually removed? Automated sampling catches issues before they impact users.

[warmly] Let's close with one final insight.`
        },
        {
          id: 19,
          title: 'Final Insight',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2} duration={1.2}>
                <p style={{ fontSize: '2rem', fontWeight: '300' }}>
                  Many embedding quality improvements come from <strong>better data preparation</strong>, not just model selection.
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={1} duration={1}>
                <p style={{ fontSize: '2rem', color: '#aed581' }}>
                  Even small preprocessing changes can yield meaningful performance gains.
                </p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Final Insight
[inspiringly] Let me leave you with one crucial insight that I want you to remember.

####  The Power of Data Preparation
[seriously] Many embedding quality improvements come from **better data preparation, not just model selection**. [conversational] Here's what I mean by that. When people want to improve their embedding quality, the first instinct is often to swap models. "Let's try this newer model with more parameters. Let's try that model that scored higher on the benchmark." [conversational] And sure, model selection matters. Better models produce better embeddings.

[firmly] But here's what people miss: if you're feeding messy, inconsistent, poorly structured data into even the best model, you're not going to get great results. [storytelling] It's like having a world-class chef but giving them spoiled ingredients. The chef can only do so much.

[enthusiastically] On the other hand, if you **clean your data, remove noise, chunk semantically, add context, and structure your information**, you transform what the model has to work with. [pleased] You're now giving that same model clean, well-organized, semantically coherent input. The model can focus on understanding meaning instead of fighting through noise.

####  Small Changes, Big Impact
[delighted] And here's the beautiful part: **even small preprocessing changes can yield meaningful performance gains**. [conversational] You don't need to implement all seven techniques perfectly. [enthusiastically] Even just cleaning and de-boilerplating—two relatively simple steps—can improve your retrieval metrics by twenty or thirty percent. Add semantic chunking and section titles, and you might see fifty percent improvement or more. [excited] These are transformative gains from preprocessing alone, without touching your model.

####  Your Next Steps
[inspiringly] So here's my challenge to you: go back to your embedding pipeline. Look at your raw data. [conversational] Is it clean? Is it structured? Are you removing boilerplate? Are your chunks coherent? [confidently] Pick one or two techniques from today's presentation—start with cleaning and de-boilerplating if you haven't done them—and implement them this week. Measure the impact. [warmly] I think you'll be surprised at how much better your results get.

[warmly] Thank you for your attention. [inspiringly] These seven techniques are your toolkit for better embeddings. Use them wisely, measure everything, and remember: [confidently] great embeddings start with great data preparation.`
        }
      ]
    }
  ]
};
