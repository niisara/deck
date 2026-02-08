import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

export const embeddingModelsDeck: Deck = {
  id: 'embedding-models-deck',
  name: '9 Embedding Models Cheat Sheet',
  description: 'Quick-reference for RAG, semantic search, clustering, and more',
  category: 'RAG',
  theme: 'night',
  cardClassName: 'glass-morphism',
  cardStyle: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
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
          center: true,
          title: '9 Embedding Models Cheat Sheet',
          content: (
            <div style={{ marginTop: '18px' }}>
              <GSAPAnimated animation="rotateIn" duration={1.2}>
                <SvgIcon iconName="duo-microchip" sizeName="5x" style={{ color: '#ffd700', marginBottom: '20px' }} darkModeInvert={true} />
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" duration={0.8} delay={0.3}>
                <h2>Quick-reference for RAG 👉 'rag', semantic search, clustering, and more</h2>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" duration={0.6} delay={0.6}>
                <p style={{ fontSize: '2.2rem', marginTop: '18px' }}>2025 Edition - A comprehensive guide to modern embedding models</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" duration={0.8} delay={0.9}>
                <div>
                  <p><strong>Prepared by:</strong> Nisar A</p>
                  <p><strong>Date:</strong> November 7, 2025</p>
                  <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#7b377d',
          notes: `### 9 Embedding Models Cheat Sheet

Welcome everyone! Today we're diving into one of the most critical technologies powering modern AI applications: embedding models. If you've heard buzzwords like RAG 👉 'rag', semantic search, or vector databases but aren't quite sure how they all fit together, you're in the right place.

#### What Are We Covering?
This presentation is your comprehensive cheat sheet for nine of the most powerful embedding models available in 2025. Think of embeddings as a way to teach computers to understand meaning, not just match keywords. When you search for "best laptop for students," you want results about affordable, durable computers, not just pages that contain those exact words. That's what embeddings enable.

#### Why This Matters
Whether you're building a chatbot that needs to find relevant documents, creating a recommendation system, or just trying to understand why everyone's talking about vector databases, embeddings are the foundation. We'll explore models from OpenAI, Microsoft, Alibaba, and leading research institutions. Each has unique strengths: some are incredibly cost-effective, others excel at accuracy, and some are perfect for specialized domains.

#### What You'll Learn
By the end of this deck, you'll know exactly which model to choose for your use case, understand the trade-offs between cost and performance, and have practical guidance on implementation details like chunk sizes and similarity metrics. We'll cover proprietary cloud APIs and open-source models you can run yourself.

Let's get started with an overview of the model families we'll be exploring!`
        },
        {
          id: 2,
          title: 'Model Families Overview',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
                <h4>
                  <MermaidPopover
                    diagram={`graph TB
    A[Embedding Model Landscape] --> B[Cloud APIs]
    A --> C[Open Source]
    B --> D[OpenAI<br/>text-embedding-3]
    C --> E[BGE 👉 'bee-jee-ee'<br/>BAAI 👉 'bye']
    C --> F[E5<br/>Microsoft]
    C --> G[Instructor<br/>HKU NLP]
    C --> H[GTE 👉 'jee-tee-ee'<br/>Alibaba]
    
    style A fill:#ffd700
    style B fill:#4fc3f7
    style C fill:#81c784
    style D fill:#4fc3f7
    style E fill:#81c784
    style F fill:#81c784
    style G fill:#81c784
    style H fill:#81c784`}
                    title="Model Families Landscape"
                  />
                </h4>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px', fontSize: '0.9em' }}>
                <GSAPStaggerList stagger={0.15}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', backgroundColor: 'rgba(79, 195, 247, 0.1)', borderRadius: '10px' }}>
                    <SvgIcon iconName="duo-cloud" sizeName="2x" style={{ color: '#4fc3f7' }} darkModeInvert={true} />
                    <div>
                      <strong>OpenAI</strong>
                      <div style={{ fontSize: '1.4rem' }}>text-embedding-3-small/large</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '10px' }}>
                    <SvgIcon iconName="duo-code-branch" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} />
                    <div>
                      <strong>BGE 👉 'bee-jee-ee' (BAAI 👉 'bye')</strong>
                      <div style={{ fontSize: '1.4rem' }}>Base/Large EN v1.5</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', backgroundColor: 'rgba(255, 183, 77, 0.1)', borderRadius: '10px' }}>
                    <SvgIcon iconName="duo-building" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} />
                    <div>
                      <strong>E5 (Microsoft)</strong>
                      <div style={{ fontSize: '1.4rem' }}>Base/Large</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', backgroundColor: 'rgba(186, 104, 200, 0.1)', borderRadius: '10px' }}>
                    <SvgIcon iconName="duo-graduation-cap" sizeName="2x" style={{ color: '#ba68c8' }} darkModeInvert={true} />
                    <div>
                      <strong>Instructor (HKU NLP)</strong>
                      <div style={{ fontSize: '1.4rem' }}>Instructor-XL</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', backgroundColor: 'rgba(240, 98, 146, 0.1)', borderRadius: '10px', gridColumn: '1 / -1' }}>
                    <SvgIcon iconName="duo-shop" sizeName="2x" style={{ color: '#f06292' }} darkModeInvert={true} />
                    <div>
                      <strong>GTE 👉 'jee-tee-ee' (Alibaba)</strong>
                      <div style={{ fontSize: '1.4rem' }}>Base/Large</div>
                    </div>
                  </div>
                </GSAPStaggerList>
              </div>
              <GSAPAnimated animation="fadeIn" duration={0.8} delay={1.2}>
                <div style={{ marginTop: '40px', fontSize: '2rem' }}>
                  <p><SvgIcon iconName="duo-info-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '8px' }} darkModeInvert={true} />
                    Each model includes: Type, Best Use Case, Strengths, Weaknesses, Typical Chunk Size, and Notes</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#7b377d',
          notes: `### Model Families Overview

Now let's map out the embedding model landscape. We're covering five distinct model families, and understanding their heritage helps you make better choices.

#### The Two Categories
First, there's a fundamental split in the embedding world. On one side, you have **cloud API services** like OpenAI's models. You send text to their servers, get embeddings back, and pay per token. Super convenient, professionally maintained, but you're dependent on their infrastructure. On the other side, you have **open-source models** that you can download and run on your own hardware. These give you complete control and privacy, but require more technical setup.

#### OpenAI: The Premium Option
OpenAI offers text-embedding-3-small and text-embedding-3-large. Think of these as the iPhone of embeddings: polished, reliable, and battle-tested by thousands of companies. They're proprietary, so you can't peek under the hood, but they consistently deliver excellent results. If you need something that just works and budget isn't your primary concern, OpenAI is a safe bet.

#### The Open Source Powerhouses
Then we have the open-source champions. BGE 👉 'bee-jee-ee', developed by BAAI 👉 'bye' in China, has become incredibly popular for its strong performance and active development. Microsoft's E5 models bring enterprise-grade quality with excellent documentation. Instructor from Hong Kong University innovates with instruction-based embeddings, letting you customize behavior with natural language. Finally, Alibaba's GTE 👉 'jee-tee-ee' models excel at multilingual tasks.

#### What We'll Cover for Each
For every model, we'll examine six key aspects: the technical architecture, ideal use cases, strengths that make it shine, weaknesses to watch out for, recommended chunk sizes for your documents, and practical implementation notes. This structured approach helps you compare apples to apples.

Ready to dive deep into each family? Let's start with OpenAI's cost-effective small model!`
        }
      ]
    },
    {
      id: 'openai-small',
      title: 'OpenAI Small Model',
      slides: [
        {
          id: 3,
          title: 'OpenAI text-embedding-3-small',
          icon: { name: 'duo-cloud' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
                <h4>
                  <MermaidPopover
                    diagram={`graph LR
    A[Your Text] --> B[OpenAI API]
    B --> C[text-embedding-3-small]
    C --> D[1536-dim Vector]
    D --> E[Vector Database]
    
    style A fill:#4fc3f7
    style B fill:#4fc3f7
    style C fill:#ffd700
    style D fill:#81c784
    style E fill:#81c784`}
                    title="OpenAI Embedding Flow"
                  />
                </h4>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.1}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#4fc3f7' }}>Model Type:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Proprietary embedding model (bi-encoder), 1536-dim vectors via API</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" duration={0.7} delay={0.3}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#81c784' }}>Best Use Case:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Cost-efficient large-scale retrieval, clustering, classification, anomaly detection</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.5}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong>
                    <span style={{ fontSize: '1.2rem' }}>400–800 tokens (can go higher; practical chunking for RAG 👉 'rag' efficiency)</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" duration={0.8} delay={0.7}>
                  <div style={{ padding: '15px', backgroundColor: 'rgba(79, 195, 247, 0.1)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                      <strong>Notes:</strong>
                    </div>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Successor to ada-002 👉 'ay-duh zero-zero-two' with improved quality</li>
                      <li>Use cosine similarity with normalized vectors</li>
                      <li>Great for high-volume indexing where budget matters</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#365383',
          notes: `### OpenAI text-embedding-3-small

Let's start with OpenAI's budget-friendly champion: text-embedding-3-small. This is often the first embedding model developers encounter, and for good reason.

#### What Is It?
This is a **proprietary bi-encoder model** that converts your text into 1536-dimensional vectors. Think of a bi-encoder as a one-way encoder: text goes in, vector comes out. You call the API with your text, OpenAI's servers process it, and you get back a list of 1536 numbers that represent the semantic meaning. These vectors are like fingerprints for your text, capturing what it means rather than just what words it contains.

#### Perfect For Budget-Conscious Projects
The sweet spot for this model is **large-scale applications where cost matters**. At just two cents per million tokens, you can embed entire Wikipedia and still have change left over. It excels at retrieval tasks like finding relevant documents, clustering similar items together, classifying content into categories, and even detecting anomalies in data. If you're building a customer support chatbot that searches through thousands of help articles, or a recommendation engine that needs to process millions of products, this model delivers solid quality without breaking the bank.

#### Technical Details Matter
For chunking, aim for **400 to 800 tokens per chunk**. That's roughly 300 to 600 words. You can go larger if needed, but smaller chunks often give better retrieval precision. Always use **cosine similarity** to compare vectors, and normalize them first for consistent results. This model replaces the older ada-002 👉 'ay-duh zero-zero-two' and delivers noticeably better quality at the same price point.

#### The API Advantage
Because it's cloud-based, you get automatic updates, professional maintenance, and excellent uptime. No servers to manage, no model files to download. Just simple API calls with libraries available in every major programming language.

Now, what are the trade-offs? Let's look at strengths and weaknesses!`
        },
        {
          id: 4,
          title: 'Strengths and Weaknesses',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="slideInLeft" duration={0.8} delay={0.1}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Very low cost ($0.02 per 1M tokens)</li>
                      <li>Good quality vs price</li>
                      <li>Stable API & tooling</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" duration={0.8} delay={0.4}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Weaknesses:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Vendor lock-in</li>
                      <li>Data residency/compliance considerations</li>
                      <li>Requires API access</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#365383',
          notes: `### Strengths and Weaknesses

Every model has trade-offs, and text-embedding-3-small is no exception. Let's be honest about what works and what doesn't.

#### ✅ Pros
The good stuff: **Cost is king here**. At two cents per million tokens, this is one of the most affordable ways to embed text at scale. Compare that to running your own infrastructure with GPUs, electricity, and maintenance costs. The **quality-to-price ratio** is exceptional, consistently delivering results that punch above its weight class. You also get a **stable, battle-tested API** with excellent documentation, official SDKs in every major language, and a massive community. If something breaks, Stack Overflow and Discord are full of people who've solved that problem already.

#### ⚠️ Cons
The problems: **Vendor lock-in is real**. You're dependent on OpenAI's infrastructure, pricing decisions, and terms of service. If they raise prices or change policies, you're along for the ride. There are also **data residency and compliance concerns**. Your text leaves your servers and travels to OpenAI's data centers. For many use cases this is fine, but if you're handling medical records, financial data, or operating in jurisdictions with strict data sovereignty laws, this could be a deal-breaker. Finally, you **need internet connectivity and API access**. No API key, no embeddings. Working offline? This won't work. Building something in an air-gapped environment? Look elsewhere.

#### The Bottom Line
This model shines when you need proven quality at minimal cost and can accept cloud dependencies. It's perfect for startups, side projects, and any scenario where running your own infrastructure isn't worth the complexity. But if you need complete control, offline operation, or must keep data on-premises, you'll want one of the open-source alternatives we'll cover next.

Ready to see OpenAI's premium option? Let's explore text-embedding-3-large!`
        }
      ]
    },
    {
      id: 'openai-large',
      title: 'OpenAI Large Model',
      slides: [
        {
          id: 5,
          title: 'OpenAI text-embedding-3-large',
          icon: { name: 'duo-cloud' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
                <h4>
                  <MermaidPopover
                    diagram={`graph LR
    A[Your Text] --> B[OpenAI API]
    B --> C[text-embedding-3-large]
    C --> D[3072-dim Vector]
    D --> E[High-Precision Search]
    
    style A fill:#4fc3f7
    style B fill:#4fc3f7
    style C fill:#ffd700
    style D fill:#81c784
    style E fill:#81c784`}
                    title="OpenAI Large Model Flow"
                  />
                </h4>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <GSAPAnimated animation="slideInRight" duration={0.7} delay={0.1}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#4fc3f7' }}>Model Type:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Proprietary embedding model (bi-encoder), 3072-dim vectors via API</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.3}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#81c784' }}>Best Use Case:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Highest-quality retrieval/semantic search, multilingual scenarios, sensitive ranking</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" duration={0.7} delay={0.5}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong>
                    <span style={{ fontSize: '1.2rem' }}>400–800 tokens (can handle larger; tune for latency/cost)</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" duration={1.0} delay={0.7}>
                  <div style={{ padding: '15px', backgroundColor: '#954d4d', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                      <strong>Notes:</strong>
                    </div>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Choose when accuracy is paramount and budget allows</li>
                      <li>Normalize embeddings; cosine similarity recommended</li>
                      <li>Pair with reranking for best end-to-end RAG 👉 'rag'</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#833636',
          notes: `### OpenAI text-embedding-3-large

Now for the flagship model: text-embedding-3-large. This is where OpenAI brings its A-game for quality.

#### The Premium Option
This model outputs **3072-dimensional vectors**, exactly double the dimensions of the small model. More dimensions means more capacity to capture nuanced semantic relationships. Think of it like upgrading from a standard-definition photo to 4K: the extra detail reveals subtleties you'd miss otherwise. This isn't just bigger for the sake of being bigger; the additional dimensions translate directly into better accuracy on challenging retrieval tasks.

#### When Accuracy Matters Most
Use this model when **quality is non-negotiable**. Legal document search where missing a key precedent could cost a case? Medical research retrieval where accuracy saves lives? Multilingual customer support where subtle cultural nuances matter? This is your model. It consistently ranks at the top of benchmarks like MTEB 👉 'em-teb' and excels at **multilingual scenarios** where you're mixing English, Spanish, Chinese, and Arabic in the same corpus. The model handles cross-lingual retrieval beautifully, finding relevant French documents when you query in English.

#### Implementation Best Practices
Stick to the same **400 to 800 token chunks** as the small model. Always normalize your embeddings and use cosine similarity for comparisons. Here's a pro tip: pair this with a **reranker** for maximum RAG 👉 'rag' performance. Use the large model for initial retrieval to cast a wide net, then apply a cross-encoder reranker to the top candidates. This two-stage approach balances quality and speed.

#### The Cost Factor
At thirteen cents per million tokens, this costs 6.5 times more than the small model. For a ten-million-token corpus, that's about thirteen hundred dollars versus two hundred. Not pocket change, but often worth it for production applications where accuracy directly impacts revenue or user satisfaction.

What are the trade-offs? Let's evaluate strengths and weaknesses!`
        },
        {
          id: 6,
          title: 'Strengths and Weaknesses',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="slideInRight" duration={0.8} delay={0.1}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Top-tier accuracy across many tasks</li>
                      <li>Robust multilingual support</li>
                      <li>Strong ecosystem</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" duration={0.8} delay={0.4}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Weaknesses:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Higher cost ($0.13 per 1M tokens) vs small</li>
                      <li>API dependency</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#833636',
          notes: `### Strengths and Weaknesses

The large model brings premium quality, but at what cost? Let's break down the decision.

#### ✅ Pros
The good stuff: **Top-tier accuracy** is the headline feature. This model consistently outperforms nearly everything else on standardized benchmarks. When you need the best possible retrieval quality, this delivers. The **multilingual support is exceptional**, handling dozens of languages with grace. Query in English, find relevant documents in Japanese. Search in Spanish, retrieve German technical manuals. It just works. The **ecosystem is mature and robust**, with extensive documentation, active community support, and integrations with every major vector database and RAG 👉 'rag' framework. Tools like LangChain and LlamaIndex have first-class support built in.

#### ⚠️ Cons
The problems: **Cost is significantly higher**. At thirteen cents per million tokens, you're paying 6.5 times more than the small model. For high-volume applications processing millions of documents, this multiplies quickly. Budget accordingly or be prepared for sticker shock when the invoice arrives. Like its smaller sibling, there's also **API dependency** with all the same implications: vendor lock-in, data residency concerns, and requirements for internet connectivity. If those were concerns for the small model, they apply equally here.

#### Making the Choice
The decision between small and large often comes down to this: run the small model first, measure your retrieval quality, and only upgrade to large if you're hitting quality ceilings. Many applications find the small model perfectly adequate. But when you're building something mission-critical where retrieval accuracy directly impacts business outcomes or user safety, the large model's superior performance justifies the higher price tag.

Now let's pivot to open-source territory with BGE 👉 'bee-jee-ee', one of the most popular self-hosted options!`
        }
      ]
    },
    {
      id: 'bge-base',
      title: 'BGE Base Model',
      slides: [
        {
          id: 7,
          title: 'BGE Base (bge-base-en-v1.5)',
          icon: { name: 'duo-code-branch' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
                <h4>
                  <MermaidPopover
                    diagram={`graph TB
    A[Document] --> B[BGE 👉 'bee-jee-ee' Base Encoder]
    B --> C[768-dim Embedding]
    C --> D[Vector Store]
    E[Query] --> B
    D --> F[Top-K Retrieval]
    F --> G[BGE Reranker]
    G --> H[Final Results]
    
    style A fill:#4fc3f7
    style E fill:#4fc3f7
    style B fill:#ffd700
    style C fill:#81c784
    style G fill:#ffd700
    style H fill:#81c784`}
                    title="BGE Retrieval Pipeline"
                  />
                </h4>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.1}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#4fc3f7' }}>Model Type:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Open-source bi-encoder, 768-dim, max sequence length ~512 tokens</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" duration={0.7} delay={0.3}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#81c784' }}>Best Use Case:</strong>
                    <span style={{ fontSize: '1.2rem' }}>General-purpose English retrieval, semantic similarity on a budget</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.5}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong>
                    <span style={{ fontSize: '1.2rem' }}>200–400 tokens (to avoid truncation and keep latency low)</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" duration={0.8} delay={0.7}>
                  <div style={{ padding: '15px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                      <strong>Notes:</strong>
                    </div>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>v1.5 improves similarity distribution; instructions optional for queries</li>
                      <li>Normalize embeddings for cosine similarity</li>
                      <li>For best results in RAG 👉 'rag': retrieve top-K with BGE 👉 'bee-jee-ee', rerank with bge-reranker-large</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#838036',
          notes: `### BGE 👉 'bee-jee-ee' Base

Welcome to the open-source world! BGE 👉 'bee-jee-ee' from BAAI 👉 'bye', the Beijing Academy of Artificial Intelligence, is one of the most popular self-hosted embedding models.

#### What Makes BGE Special?
BGE stands for "Beijing General Embedding," and it's completely **open-source**. You download the model weights, run it on your own hardware, and never send your data to external servers. The base version produces **768-dimensional vectors** and can handle up to 512 tokens of input. For comparison, that's about 380 words, roughly a substantial paragraph.

#### Perfect for Self-Hosting
This model shines when you want **general-purpose English retrieval without cloud dependencies**. Building an internal knowledge base for your company? Processing sensitive documents that can't leave your network? BGE Base delivers solid quality while giving you complete control. It's lighter weight than the large version, so it runs comfortably on modest GPU hardware or even CPU inference for smaller-scale applications.

#### The v1.5 Improvement
The **v1.5 iteration** brings significant quality improvements, particularly in how it distributes similarity scores. Earlier versions sometimes clustered scores too tightly, making it hard to distinguish between truly relevant and merely related documents. Version 1.5 spreads scores more naturally, giving you better ranking signals.

#### Chunk Sizes and Best Practices
Stick to **200 to 400 tokens per chunk** to avoid truncation at that 512-token limit. The model literally cuts off anything beyond that boundary, losing information. Always **normalize your embeddings** before storing them and use cosine similarity for comparisons. Here's the pro move: use BGE 👉 'bee-jee-ee' Base for initial retrieval to quickly find your top candidates, then apply **bge-reranker-large** to precisely rank those finalists. This two-stage approach balances speed and accuracy beautifully.

What are the strengths and weaknesses? Let's break it down!`
        },
        {
          id: 8,
          title: 'Strengths and Weaknesses',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="slideInLeft" duration={0.8} delay={0.1}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Strong MTEB 👉 'em-teb' scores for size</li>
                      <li>Easy to self-host</li>
                      <li>Broad community support</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" duration={0.8} delay={0.4}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Weaknesses:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>512-token limit (truncation risk on long docs)</li>
                      <li>May need reranker for precision</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#838036',
          notes: `### Strengths and Weaknesses

BGE 👉 'bee-jee-ee' Base offers compelling advantages for self-hosting, but you need to understand its limitations.

#### ✅ Pros
The good stuff: **MTEB 👉 'em-teb' benchmark scores are excellent** relative to the model's size. MTEB 👉 'em-teb', the Massive Text Embedding Benchmark, tests models across dozens of tasks like retrieval, classification, and clustering. BGE 👉 'bee-jee-ee' Base punches above its weight, delivering quality that rivals much larger models. It's **incredibly easy to self-host**, with straightforward integration into Hugging Face Transformers, sentence-transformers, and major vector databases like Weaviate and Qdrant. The **community support is exceptional**, with extensive documentation, tutorials in multiple languages, and active forums where problems get solved quickly.

#### ⚠️ Cons
The problems: That **512-token hard limit** is the major constraint. Long documents require chunking, and if you miscalculate, the model silently truncates excess tokens, potentially losing crucial information. Technical papers, legal contracts, and detailed reports often exceed this limit in a single chunk, requiring careful strategy. Additionally, for **precision-critical applications**, BGE 👉 'bee-jee-ee' Base alone might not suffice. The base model casts a wide net effectively, but for truly accurate ranking of top results, you'll want to add a reranker. That's not necessarily a weakness, more of a reality: retrieval and ranking are different tasks that benefit from specialized models.

#### The Self-Hosting Trade-Off
Running your own inference means managing infrastructure, keeping models updated, and handling load scaling. But for many organizations, especially in regulated industries or with privacy-sensitive data, this trade-off is absolutely worth it. You're in complete control.

Ready for more power? Let's explore BGE 👉 'bee-jee-ee' Large, which brings higher quality at the cost of more compute!`
        }
      ]
    },
    {
      id: 'bge-large',
      title: 'BGE Large Model',
      slides: [
        {
          id: 9,
          title: 'BGE Large (bge-large-en-v1.5)',
          icon: { name: 'duo-code-branch' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
                <h4>
                  <MermaidPopover 
                    diagram={`graph LR
    A[Query] --> B[BGE-Large<br/>1024-dim]
    C[Document] --> B
    B --> D[Normalized<br/>Embeddings]
    D --> E[Cosine<br/>Similarity]
    style B fill:#4fc3f7,stroke:#333,stroke-width:2px
    style D fill:#81c784,stroke:#333,stroke-width:2px
    style E fill:#ffd700,stroke:#333,stroke-width:2px`}
                    title="BGE Large Architecture"
                  />
                </h4>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <GSAPAnimated animation="slideInLeft" duration={0.8} delay={0.1}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#4fc3f7' }}>Model Type:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Open-source bi-encoder, 1024-dim, max sequence length ~512 tokens</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" duration={0.8} delay={0.3}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#81c784' }}>Best Use Case:</strong>
                    <span style={{ fontSize: '1.2rem' }}>High-quality open-source retrieval and semantic search without vendor lock-in</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" duration={0.9} delay={0.5}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong>
                    <span style={{ fontSize: '1.2rem' }}>200–400 tokens</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" duration={1.0} delay={0.7}>
                  <div style={{ padding: '15px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                      <strong>Notes:</strong>
                    </div>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Use normalize_embeddings=True for cosine</li>
                      <li>Add query instruction only if it empirically helps (v1.5 often fine without)</li>
                      <li>Combine with bge-reranker for accuracy-critical ranking</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#835536',
          notes: `### BGE Large Model Overview

Welcome to the BGE 👉 'bee-jee-ee' Large model, developed by BAAI 👉 'bye', which stands for the Beijing Academy of Artificial Intelligence. This is one of the most popular open-source embedding models available today, and for good reason. BGE 👉 'bee-jee-ee' Large produces 1024-dimensional vectors, giving you rich semantic representations that consistently rank at the top of the MTEB 👉 'em-teb' leaderboard among open-source options.

#### Model Specifications

This model is a bi-encoder architecture, meaning it encodes queries and documents independently before comparing them. It handles up to 512 tokens per input, which is standard for BERT-based models. The model size is approximately 1.3 gigabytes, so you'll need adequate memory when deploying it. For typical retrieval tasks, chunk your documents between 200 and 400 tokens to stay well within the limit while maintaining semantic coherence.

#### Best Practices

Always set normalize_embeddings equals True when generating embeddings. This ensures all vectors have unit length, making cosine similarity calculations both accurate and efficient. Unlike some other models, BGE 👉 'bee-jee-ee' version 1.5 doesn't strictly require query prefixes, though you can experiment with adding them if your specific use case benefits. For production systems where accuracy is critical, pair BGE 👉 'bee-jee-ee' Large with the BGE 👉 'bee-jee-ee' reranker to refine your top-k results.

This model excels when you need state-of-the-art performance without vendor lock-in, making it ideal for self-hosted RAG 👉 'rag' pipelines and semantic search applications.`
        },
        {
          id: 10,
          title: 'Strengths and Weaknesses',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="slideInTop" duration={0.7} delay={0.2}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>SOTA-level performance on MTEB/C-MTEB among open-source embedders</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" duration={0.7} delay={0.5}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Weaknesses:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>512-token cap</li>
                      <li>Larger model requires more memory/compute than base</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#835536',
          notes: `### BGE Large Strengths and Weaknesses

Let's examine the trade-offs when choosing BGE 👉 'bee-jee-ee' Large for your embedding needs.

#### ✅ Pros

The primary strength of BGE 👉 'bee-jee-ee' Large is its state-of-the-art performance. On the MTEB 👉 'em-teb' benchmark, which is the gold standard for evaluating embedding models, BGE 👉 'bee-jee-ee' Large consistently ranks among the top open-source models. It also excels on C-MTEB 👉 'see-em-teb', the Chinese variant of the benchmark, making it a solid choice for cross-lingual applications. You're getting near-commercial quality without paying API fees or sending your data to third-party services. The model's 1024 dimensions provide rich semantic representations that capture nuanced meanings, and it works exceptionally well out of the box without complex preprocessing requirements.

#### ⚠️ Cons

On the downside, BGE 👉 'bee-jee-ee' Large inherits the 512-token context window limitation from its BERT backbone. This means you need to carefully chunk longer documents, and you can't embed entire articles or papers in one pass. The model is also significantly larger than base variants, requiring approximately 1.3 gigabytes of memory at inference time. This translates to higher compute costs and longer inference times compared to smaller models. If you're running on CPU or limited GPU resources, you'll notice the performance impact. For high-throughput applications, you may need to batch carefully or consider smaller alternatives.

The next slide will introduce E5 👉 'ee-five' Base, another strong contender in the open-source space.`
        }
      ]
    },
    {
      id: 'e5-base',
      title: 'E5 Base Model',
      slides: [
        {
          id: 11,
          title: 'E5 Base',
          icon: { name: 'duo-building' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
                <h4>
                  <MermaidPopover 
                    diagram={`graph TB
    A["query: search query"] --> B[E5-Base<br/>768-dim]
    C["passage: document"] --> B
    B --> D[Embeddings]
    D --> E[Cosine<br/>Similarity]
    style A fill:#4fc3f7,stroke:#333,stroke-width:2px
    style C fill:#4fc3f7,stroke:#333,stroke-width:2px
    style B fill:#81c784,stroke:#333,stroke-width:2px
    style E fill:#ffd700,stroke:#333,stroke-width:2px`}
                    title="E5 Base with Prefix Architecture"
                  />
                </h4>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <GSAPAnimated animation="bounceIn" duration={0.9} delay={0.1}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#4fc3f7' }}>Model Type:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Open-source bi-encoder, 768-dim, max sequence length ~512 tokens</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" duration={0.8} delay={0.3}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#81c784' }}>Best Use Case:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Retrieval and STS with explicit query/document formatting; multilingual (multilingual-e5-base)</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" duration={1.0} delay={0.5}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong>
                    <span style={{ fontSize: '1.2rem' }}>200–400 tokens</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" duration={0.8} delay={0.7}>
                  <div style={{ padding: '15px', backgroundColor: 'rgba(255, 183, 77, 0.1)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                      <strong>Notes:</strong>
                    </div>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Variants: e5-base-v2 (English), multilingual-e5-base (multilingual)</li>
                      <li>Train/finetune uses low temperature; expect high cosine values; rely on relative ranking</li>
                      <li>Always prepend the proper prefix to avoid performance drops</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#36833f',
          notes: `### E5 Base Model Overview

Moving to the E5 👉 'ee-five' family, developed by Microsoft Research. The name E5 👉 'ee-five' stands for "EmbEddings from bidirEctional Encoder rEpresentations," and this model brings a unique approach to embedding generation through its prefix-based system.

#### Model Characteristics

E5 👉 'ee-five' Base produces 768-dimensional embeddings, which is slightly smaller than BGE 👉 'bee-jee-ee' Large but still quite rich for most applications. The key distinguishing feature is that E5 👉 'ee-five' requires you to prepend specific prefixes to your text. For queries, you add "query: " and for documents you add "passage: ". This explicit formatting was built into the model during training and is crucial for achieving optimal performance. Skip the prefixes and you'll see significant degradation in retrieval quality.

#### Multilingual Capabilities

One of E5 👉 'ee-five' Base's strongest selling points is the multilingual-e5-base variant, which supports approximately 100 languages. This makes it excellent for cross-lingual retrieval tasks where you might have queries in one language and documents in another. The model was trained using contrastive learning with a low temperature parameter, which means you'll typically see higher cosine similarity scores across the board. Focus on the relative ranking rather than absolute threshold values.

#### Use Cases

E5 👉 'ee-five' Base excels in semantic textual similarity tasks, often abbreviated as STS 👉 'ess-tee-ess', and general retrieval scenarios. It's particularly strong in zero-shot settings where you haven't fine-tuned on your specific domain, making it a reliable choice for rapid prototyping and production deployments.`
        },
        {
          id: 12,
          title: 'Strengths and Weaknesses',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="rotateIn" duration={0.8} delay={0.2}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Strong zero-shot performance</li>
                      <li>Multilingual option supports ~100 languages</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" duration={0.9} delay={0.5}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Weaknesses:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Requires prefixes ("query:", "passage:") for best results</li>
                      <li>512-token cap</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#36833f',
          notes: `### E5 Base Strengths and Weaknesses

Let's break down what makes E5 👉 'ee-five' Base a compelling choice and where it has limitations.

#### ✅ Pros

E5 👉 'ee-five' Base shines in zero-shot scenarios, meaning you can deploy it immediately without fine-tuning on your specific dataset and still get excellent results. This is particularly valuable when you're building a proof of concept or working in a domain where labeled training data is scarce. The multilingual variant is a game-changer for international applications, supporting approximately 100 languages with relatively consistent quality across them. You can build a single retrieval system that handles English, Spanish, Chinese, Arabic, and dozens of other languages without maintaining separate models. The model also benefits from Microsoft's extensive research backing, with regular updates and strong community support.

#### ⚠️ Cons

The most significant limitation is the prefix requirement. You must prepend "query: " to all search queries and "passage: " to all documents. Forget this step or apply it inconsistently, and your retrieval accuracy will plummet. This adds complexity to your codebase and is an easy mistake to make, especially when onboarding new team members. The 512-token context window remains a limitation, inherited from the BERT architecture. For applications requiring longer context or documents that don't chunk naturally, this can be problematic. Additionally, while the multilingual variant is impressive, it does sacrifice some accuracy compared to English-only models on English-language tasks.

Coming up next, we'll look at E5 👉 'ee-five' Large, which builds upon these foundations with increased capacity.`
        }
      ]
    },
    {
      id: 'e5-large',
      title: 'E5 Large Model',
      slides: [
        {
          id: 13,
          title: 'E5 Large',
          icon: { name: 'duo-building' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
                <h4>
                  <MermaidPopover 
                    diagram={`graph LR
    A["query: text"] --> B[E5-Large<br/>1024-dim]
    C["passage: doc"] --> B
    B --> D[Normalized<br/>Vectors]
    D --> E[Ranking]
    E --> F[Optional<br/>Reranker]
    style B fill:#4fc3f7,stroke:#333,stroke-width:3px
    style D fill:#81c784,stroke:#333,stroke-width:2px
    style F fill:#e1bee7,stroke:#333,stroke-width:2px`}
                    title="E5 Large Pipeline"
                  />
                </h4>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <GSAPAnimated animation="slideInRight" duration={0.7} delay={0.1}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#4fc3f7' }}>Model Type:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Open-source bi-encoder, 1024-dim, max sequence length ~512 tokens</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.3}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#81c784' }}>Best Use Case:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Higher-accuracy retrieval with E5 formatting, multilingual available (multilingual-e5-large)</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" duration={0.9} delay={0.5}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong>
                    <span style={{ fontSize: '1.2rem' }}>200–400 tokens</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" duration={1.0} delay={0.7}>
                  <div style={{ padding: '15px', backgroundColor: 'rgba(255, 183, 77, 0.1)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                      <strong>Notes:</strong>
                    </div>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Use "query:" and "passage:" consistently (even for non-English)</li>
                      <li>Normalize embeddings; use cosine similarity</li>
                      <li>Consider reranking for mission-critical relevance</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#365283',
          notes: `### E5 Large Model Overview

Now we move to E5 👉 'ee-five' Large, which represents the high-capacity version of Microsoft's E5 👉 'ee-five' family. This model scales up from 768 to 1024 dimensions, providing more expressive embeddings while maintaining the same prefix-based approach.

#### Architecture and Capacity

E5 👉 'ee-five' Large generates 1024-dimensional vectors, matching the dimensionality of BGE 👉 'bee-jee-ee' Large. This increased capacity allows the model to capture more nuanced semantic relationships, which translates to better performance on complex retrieval tasks. The model still requires the "query: " and "passage: " prefixes we discussed earlier, and this requirement applies even when using the multilingual variant. Don't skip the prefixes thinking they're optional, they're essential for the model to activate the correct internal representations learned during training.

#### Performance on Benchmarks

E5 👉 'ee-five' Large consistently delivers strong results on BEIR 👉 'beer', which is a diverse benchmark testing retrieval across multiple domains and tasks. It also performs well on MTEB 👉 'em-teb', often ranking just behind BGE 👉 'bee-jee-ee' Large but ahead of most other open-source options. The multilingual variant maintains impressive quality across languages, though as expected, there's a slight performance trade-off compared to the English-only version.

#### Deployment Recommendations

Always normalize your embeddings and use cosine similarity for comparison. For production systems where retrieval quality is mission-critical, such as medical information systems or legal document search, consider adding a reranker as a second stage. The bi-encoder retrieves candidates quickly, and the reranker refines the top results with cross-attention for maximum accuracy.`
        },
        {
          id: 14,
          title: 'Strengths and Weaknesses',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="scaleIn" duration={0.8} delay={0.2}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Improved performance over base</li>
                      <li>Strong BEIR/MTEB results</li>
                      <li>Multilingual variants</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" duration={0.8} delay={0.5}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Weaknesses:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Heavier than base</li>
                      <li>strict prefixing</li>
                      <li>512-token cap</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#365283',
          notes: `### E5 Large Strengths and Weaknesses

Let's evaluate the trade-offs when choosing E5 👉 'ee-five' Large for your embedding infrastructure.

#### ✅ Pros

E5 👉 'ee-five' Large delivers measurably better performance than E5 👉 'ee-five' Base, which is exactly what you'd expect from the increased model capacity. On BEIR 👉 'beer', a heterogeneous benchmark spanning question answering, fact checking, and various retrieval tasks, E5 👉 'ee-five' Large ranks among the top open-source options. Its MTEB 👉 'em-teb' scores are similarly impressive, making it a reliable choice for production retrieval systems. The multilingual variants deserve special mention, they allow you to build unified search systems across language boundaries without maintaining separate infrastructure for each locale. This is incredibly valuable for global applications where users might search in their native language while accessing content in various languages.

#### ⚠️ Cons

The model's size is a double-edged sword. While it enables better performance, it also means higher memory requirements and slower inference times compared to base models. You'll need approximately 1.3 gigabytes of memory, and depending on your hardware, inference latency can become noticeable under load. The strict prefixing requirement remains, you cannot be flexible here. Using "query: " and "passage: " consistently is non-negotiable for optimal results, and this adds operational complexity. The 512-token limit persists, requiring thoughtful document chunking strategies. For very long documents, you might need to implement chunk aggregation techniques to maintain context.

Next, we'll explore Instructor XL 👉 'ex-el', a model with a completely different approach to embeddings.`
        }
      ]
    },
    {
      id: 'instructor',
      title: 'Instructor',
      slides: [
        {
          id: 15,
          title: 'Instructor XL (hkunlp/instructor-xl)',
          icon: { name: 'duo-graduation-cap' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
                <h4>
                  <MermaidPopover 
                    diagram={`graph TB
    A["Instruction:<br/>Represent for retrieval"] --> B[Instructor-XL<br/>768-dim]
    C[Text Content] --> B
    B --> D[Task-Aware<br/>Embeddings]
    D --> E[Domain-Specific<br/>Similarity]
    style A fill:#e1bee7,stroke:#333,stroke-width:3px
    style B fill:#4fc3f7,stroke:#333,stroke-width:2px
    style D fill:#81c784,stroke:#333,stroke-width:2px`}
                    title="Instructor XL Architecture"
                  />
                </h4>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <GSAPAnimated animation="rotateIn" duration={1.0} delay={0.1}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#4fc3f7' }}>Model Type:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Instruction-finetuned bi-encoder, ~768-dim, max sequence length ~512 tokens</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" duration={0.8} delay={0.3}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#81c784' }}>Best Use Case:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Task/domain-specific embeddings via natural-language instructions (classification, retrieval, clustering)</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" duration={0.9} delay={0.5}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong>
                    <span style={{ fontSize: '1.2rem' }}>200–400 tokens</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" duration={1.1} delay={0.7}>
                  <div style={{ padding: '15px', backgroundColor: 'rgba(186, 104, 200, 0.1)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                      <strong>Notes:</strong>
                    </div>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Input format: [[instruction, text]]; keep instructions stable across corpora</li>
                      <li>Normalize embeddings; cosine similarity</li>
                      <li>Great for specialized domains when generic embedders underperform</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#7d3683',
          notes: `### Instructor XL Model Overview

Now we encounter a fundamentally different approach with Instructor XL 👉 'ex-el', developed by researchers at the University of Hong Kong. This model introduces instruction-following capabilities to the embedding space, allowing you to dynamically control the behavior of your embeddings through natural language instructions.

#### The Instruction Paradigm

Unlike BGE 👉 'bee-jee-ee' or E5 👉 'ee-five' which use fixed prefixes, Instructor XL 👉 'ex-el' accepts arbitrary natural language instructions that guide how the text should be embedded. For example, you might use "Represent the scientific paper for retrieval" when embedding research articles, or "Represent the customer review for sentiment analysis" when working with product feedback. The model was trained to interpret these instructions and adjust its internal representations accordingly, effectively giving you multiple specialized embedders in one model.

#### Use Cases and Applications

This flexibility makes Instructor XL 👉 'ex-el' particularly valuable in specialized domains where generic embeddings struggle. Medical literature, legal documents, and technical specifications often have domain-specific semantics that general-purpose models miss. With Instructor, you can provide context about your domain directly in the instruction, helping the model focus on what matters. The model supports retrieval, classification, and clustering tasks, making it a versatile choice for multi-task systems.

#### Implementation Considerations

The input format is a nested list structure: instruction first, then the text content. Maintain consistent instructions across your entire corpus for optimal results. Changing instructions midstream can introduce inconsistencies in your embedding space. Always normalize the resulting embeddings and use cosine similarity for comparisons.`
        },
        {
          id: 16,
          title: 'Strengths and Weaknesses',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="slideInTop" duration={0.8} delay={0.2}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Task-aware vectors without finetuning</li>
                      <li>Flexible prompts tailor embeddings to objectives</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" duration={0.8} delay={0.5}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Weaknesses:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Requires crafting consistent instructions</li>
                      <li>Heavier and slower than base models</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#7d3683',
          notes: `### Instructor XL Strengths and Weaknesses

Let's evaluate when Instructor XL 👉 'ex-el' is the right choice and when you might want to look elsewhere.

#### ✅ Pros

The primary advantage of Instructor XL 👉 'ex-el' is its ability to generate task-aware embeddings without requiring expensive fine-tuning. Traditional approaches would require you to collect labeled data, fine-tune a model, and potentially maintain multiple specialized models for different tasks. With Instructor, you simply change the instruction string. This makes it incredibly agile for prototyping and production systems with multiple use cases. The flexible prompt system means you can experiment with different framings of your task until you find what works best. For instance, you might try "Represent for scientific search" versus "Represent the biomedical concept" and empirically determine which yields better results for your corpus. This flexibility is particularly valuable in rapidly evolving domains where requirements change frequently.

#### ⚠️ Cons

The instruction requirement is both a strength and a weakness. Crafting effective instructions requires experimentation and domain expertise. Poor instructions can lead to suboptimal embeddings, and it's not always obvious what makes a good instruction. You'll need to test different phrasings and measure retrieval quality. The model is also computationally heavier than base-size alternatives. It's built on a large transformer backbone, resulting in slower inference times and higher memory consumption. For latency-sensitive applications with tight SLA requirements, this overhead may be problematic. Additionally, maintaining consistent instructions across your entire pipeline requires careful engineering. A mismatch between query and document instructions can degrade performance significantly.

Coming up, we'll explore the GTE 👉 'jee-tee-ee' family, starting with GTE 👉 'jee-tee-ee' Base.`
        }
      ]
    },
    {
      id: 'gte-base',
      title: 'GTE Base Model',
      slides: [
        {
          id: 17,
          title: 'GTE Base (thenlper/gte-base)',
          icon: { name: 'duo-shop' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
                <h4>
                  <MermaidPopover 
                    diagram={`graph LR
    A[Query] --> B[GTE-Base<br/>768-dim]
    C[Documents] --> B
    B --> D[Normalized<br/>Embeddings]
    D --> E[Cosine<br/>Similarity]
    E --> F[Reranker<br/>Optional]
    style B fill:#4fc3f7,stroke:#333,stroke-width:2px
    style D fill:#81c784,stroke:#333,stroke-width:2px
    style F fill:#ffcdd2,stroke:#333,stroke-width:2px`}
                    title="GTE Base RAG Pipeline"
                  />
                </h4>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <GSAPAnimated animation="fadeIn" duration={0.9} delay={0.1}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#4fc3f7' }}>Model Type:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Open-source bi-encoder, 768-dim, max sequence length ~512 tokens</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" duration={0.7} delay={0.3}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#81c784' }}>Best Use Case:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Efficient English retrieval/STS with strong all-around performance</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" duration={0.8} delay={0.5}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong>
                    <span style={{ fontSize: '1.2rem' }}>200–400 tokens</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="bounceIn" duration={1.0} delay={0.7}>
                  <div style={{ padding: '15px', backgroundColor: 'rgba(240, 98, 146, 0.1)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                      <strong>Notes:</strong>
                    </div>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Normalize for cosine similarity</li>
                      <li>Good default for self-hosted RAG when resources are limited</li>
                      <li>Use reranking for tighter precision on top-K</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#367d83',
          notes: `### GTE Base Model Overview

Let's explore GTE 👉 'jee-tee-ee' Base, which stands for General Text Embeddings. Developed by Alibaba DAMO Academy and maintained by the thenlper organization, this model offers a pragmatic balance between performance and efficiency.

#### Model Characteristics

GTE 👉 'jee-tee-ee' Base generates 768-dimensional embeddings using a BERT-based architecture. What sets it apart from E5 👉 'ee-five' is its simplicity: no special prefixes required, no complex instruction formats, just straightforward text-to-embedding conversion. This makes integration easier and reduces the chance of configuration errors in production. The model supports up to 512 tokens per input, following the standard BERT limitation, so plan your chunking strategy accordingly. Aim for 200 to 400 token chunks to leave headroom and maintain semantic coherence.

#### Performance Profile

On MTEB 👉 'em-teb' benchmarks, GTE 👉 'jee-tee-ee' Base delivers competitive performance that punches above its weight class. While it may not top the leaderboards like BGE 👉 'bee-jee-ee' Large, it offers excellent value for compute. The model is particularly strong on English-language tasks and has been widely adopted in production RAG 👉 'rag' systems. Its lightweight nature means faster inference times and lower memory requirements compared to large variants, making it ideal when you're running on CPU or need to handle high throughput on modest hardware.

#### Best Practices

Always normalize embeddings before computing cosine similarity. This is a universal best practice but particularly important for GTE 👉 'jee-tee-ee' models. For applications requiring high precision on the final retrieved results, consider adding a reranker stage. The bi-encoder retrieves candidates efficiently, then the reranker refines the top-K results for maximum accuracy.`
        },
        {
          id: 18,
          title: 'Strengths and Weaknesses',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="fadeIn" duration={0.8} delay={0.2}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Competitive MTEB performance</li>
                      <li>Lightweight and fast</li>
                      <li>Easy to deploy</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" duration={0.8} delay={0.5}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Weaknesses:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>English-focused</li>
                      <li>512-token cap</li>
                      <li>May trail BGE-large on some retrieval tasks</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#367d83',
          notes: `### GTE Base Strengths and Weaknesses

Let's assess the advantages and trade-offs of choosing GTE 👉 'jee-tee-ee' Base for your embedding infrastructure.

#### ✅ Pros

GTE 👉 'jee-tee-ee' Base offers competitive MTEB 👉 'em-teb' performance that makes it a strong contender in the base-size category. It consistently ranks well across diverse tasks including retrieval, classification, and clustering. The model's lightweight footprint is a major advantage for resource-constrained environments. With only 768 dimensions and an efficient architecture, it runs quickly on CPU, makes frugal use of memory, and scales well under high query loads. Deployment is straightforward with no special prefix requirements or instruction formats to configure. This simplicity reduces integration complexity and minimizes the surface area for bugs. The model enjoys broad support across vector database platforms and embedding libraries, so you won't face compatibility issues. For teams building their first self-hosted RAG 👉 'rag' system or operating under tight budget constraints, GTE 👉 'jee-tee-ee' Base is an excellent starting point.

#### ⚠️ Cons

The model is primarily trained and optimized for English text. While it may handle other languages to some degree, don't expect strong performance on non-English corpora. If you need multilingual support, look to E5 👉 'ee-five' or BGE 👉 'bee-jee-ee' variants instead. The 512-token context limit persists, requiring thoughtful document chunking. On certain retrieval benchmarks, particularly those emphasizing nuanced semantic matching, GTE 👉 'jee-tee-ee' Base trails behind BGE 👉 'bee-jee-ee' Large. This performance gap may matter for high-stakes applications where retrieval quality directly impacts outcomes. However, for many practical applications, the difference is negligible especially when combined with proper reranking.

Next, we'll examine GTE 👉 'jee-tee-ee' Large, which scales up this architecture.`
        }
      ]
    },
    {
      id: 'gte-large',
      title: 'GTE Large Model',
      slides: [
        {
          id: 19,
          title: 'GTE Large (thenlper/gte-large)',
          icon: { name: 'duo-shop' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
                <h4>
                  <MermaidPopover 
                    diagram={`graph TB
    A[Input Text] --> B[GTE-Large<br/>1024-dim]
    B --> C[Rich Semantic<br/>Embeddings]
    C --> D[Vector DB]
    D --> E[High-Quality<br/>Search Results]
    style B fill:#4fc3f7,stroke:#333,stroke-width:3px
    style C fill:#81c784,stroke:#333,stroke-width:2px
    style E fill:#ffd700,stroke:#333,stroke-width:2px`}
                    title="GTE Large Deployment"
                  />
                </h4>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.1}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#4fc3f7' }}>Model Type:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Open-source bi-encoder, 1024-dim, max sequence length ~512 tokens</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" duration={0.7} delay={0.3}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#81c784' }}>Best Use Case:</strong>
                    <span style={{ fontSize: '1.2rem' }}>Higher-quality English retrieval and semantic similarity with moderate compute</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="rotateIn" duration={0.9} delay={0.5}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                    <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong>
                    <span style={{ fontSize: '1.2rem' }}>200–400 tokens</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" duration={1.0} delay={0.7}>
                  <div style={{ padding: '15px', backgroundColor: 'rgba(240, 98, 146, 0.1)', borderRadius: '8px' }}>
                    <div>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                      <strong>Notes:</strong>
                    </div>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Normalize embeddings; cosine similarity</li>
                      <li>Solid open-source alternative when you want quality close to BGE-large without vendor ties</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#468336',
          notes: `### GTE Large Model Overview

GTE 👉 'jee-tee-ee' Large represents the scaled-up version of the GTE 👉 'jee-tee-ee' family, offering increased capacity for applications that demand higher retrieval quality.

#### Architecture and Performance

Moving from 768 to 1024 dimensions, GTE 👉 'jee-tee-ee' Large provides richer semantic representations that capture more nuanced meanings and relationships. This increased dimensionality comes with a larger model size and higher computational requirements, but the performance gains justify the cost for many applications. On MTEB 👉 'em-teb' benchmarks, GTE 👉 'jee-tee-ee' Large achieves scores that place it firmly in the high-quality tier of open-source embeddings. While it may not quite match BGE 👉 'bee-jee-ee' Large on every task, it's competitive enough that the difference is often negligible in production scenarios.

#### Why Choose GTE Large

GTE 👉 'jee-tee-ee' Large shines when you need strong retrieval quality without vendor dependencies or API costs. If you're building a system where data privacy requires self-hosting, or where latency requirements demand local inference, or where operational costs favor one-time compute over per-query API fees, GTE 👉 'jee-tee-ee' Large is an excellent choice. The model maintains the same simplicity as GTE 👉 'jee-tee-ee' Base with no special prefix or instruction requirements. This makes it easy to swap in as an upgrade path when your base model isn't quite meeting your quality bar.

#### Integration and Support

The model enjoys wide support across vector database platforms including Pinecone, Weaviate, Qdrant, and Milvus. Most embedding libraries like SentenceTransformers and LangChain provide first-class support. Always normalize your embeddings before storage and use cosine similarity for retrieval. This ensures consistent behavior and optimal performance across your entire pipeline.`
        },
        {
          id: 20,
          title: 'Strengths and Weaknesses',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <GSAPAnimated animation="bounceIn" duration={0.9} delay={0.2}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                      <strong>Strengths:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Strong MTEB scores</li>
                      <li>Efficient for its quality</li>
                      <li>Widely supported in vector DBs</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" duration={0.9} delay={0.5}>
                  <div>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                      <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                      <strong>Weaknesses:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>English-only</li>
                      <li>512-token cap</li>
                      <li>May need reranker for best precision</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#468336',
          notes: `### GTE Large Strengths and Weaknesses

Let's evaluate the benefits and limitations of GTE 👉 'jee-tee-ee' Large to help you make an informed decision.

#### ✅ Pros

GTE 👉 'jee-tee-ee' Large delivers strong MTEB 👉 'em-teb' scores across the board, positioning it as a high-quality option in the open-source landscape. Its retrieval performance is robust, handling diverse query types and document domains with consistent accuracy. The model strikes an excellent balance between quality and efficiency. While it's larger than base models, it's still relatively efficient compared to cutting-edge commercial options, making it practical for production deployment on standard GPU infrastructure. Wide ecosystem support is another major advantage. Every major vector database and embedding framework supports GTE 👉 'jee-tee-ee' models out of the box, so you won't encounter compatibility issues or need custom integration code. The active community and regular maintenance from Alibaba DAMO Academy provide confidence in long-term viability.

#### ⚠️ Cons

The model is trained primarily on English data and optimized for English-language tasks. If your application requires multilingual support, you'll need to look elsewhere, perhaps to the E5 👉 'ee-five' multilingual variants or commercial options like OpenAI's text-embedding-3-large. The 512-token context window remains a constraint that requires careful document chunking. For applications with naturally long documents like legal contracts or research papers, you'll need aggregation strategies to maintain coherence across chunks. While GTE 👉 'jee-tee-ee' Large performs well, for absolute maximum precision you may want to add a reranking stage. The bi-encoder retrieves candidates quickly, but cross-encoder rerankers can further refine the top results for critical applications.

Now let's move to our comparison and selection guide to help you choose the right model.`
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 21,
          title: 'Model Selection Guide',
          icon: { name: 'duo-compass' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
                <h4>
                  <MermaidPopover 
                    diagram={`graph TD
    A[Start] --> B{Budget?}
    B -->|Limited| C[OpenAI Small<br/>or BGE Base]
    B -->|Flexible| D{Accuracy?}
    D -->|Top Tier| E[OpenAI Large<br/>or BGE Large]
    D -->|Good Enough| F{Multilingual?}
    F -->|Yes| G[E5 Multilingual]
    F -->|No| H{Self-Host?}
    H -->|Yes| I[BGE/GTE/E5]
    H -->|No| J[OpenAI]
    style A fill:#4fc3f7,stroke:#333,stroke-width:2px
    style E fill:#81c784,stroke:#333,stroke-width:2px
    style G fill:#e1bee7,stroke:#333,stroke-width:2px
    style I fill:#ffd700,stroke:#333,stroke-width:2px`}
                    title="Model Selection Decision Tree"
                  />
                </h4>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <GSAPAnimated animation="fadeIn" duration={0.6} delay={0.1}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-map-location" sizeName="2x" darkModeInvert={true} />
                    How to Choose Your Embedding Model
                  </h3>
                </GSAPAnimated>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.3}>
                    <div style={{ padding: '15px', backgroundColor: 'rgba(79, 195, 247, 0.1)', borderRadius: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <SvgIcon iconName="duo-coins" sizeName="2x" style={{ color: '#ffd54f' }} darkModeInvert={true} />
                        <strong>Budget-Conscious?</strong>
                      </div>
                      <p>→ OpenAI text-embedding-3-small or BGE Base</p>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="slideInRight" duration={0.7} delay={0.4}>
                    <div style={{ padding: '15px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <SvgIcon iconName="duo-trophy" sizeName="2x" style={{ color: '#ffd54f' }} darkModeInvert={true} />
                        <strong>Need Top Accuracy?</strong>
                      </div>
                      <p>→ OpenAI text-embedding-3-large or BGE Large</p>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="bounceIn" duration={0.8} delay={0.5}>
                    <div style={{ padding: '15px', backgroundColor: 'rgba(255, 183, 77, 0.1)', borderRadius: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <SvgIcon iconName="duo-globe" sizeName="2x" style={{ color: '#64b5f6' }} darkModeInvert={true} />
                        <strong>Multilingual Support?</strong>
                      </div>
                      <p>→ E5 multilingual variants or OpenAI 3-large</p>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="scaleIn" duration={0.8} delay={0.6}>
                    <div style={{ padding: '15px', backgroundColor: 'rgba(186, 104, 200, 0.1)', borderRadius: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <SvgIcon iconName="duo-server" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} />
                        <strong>Self-Hosted Required?</strong>
                      </div>
                      <p>→ BGE, E5, or GTE models</p>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="rotateIn" duration={0.9} delay={0.7}>
                    <div style={{ padding: '15px', backgroundColor: 'rgba(240, 98, 146, 0.1)', borderRadius: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <SvgIcon iconName="duo-graduation-cap" sizeName="2x" style={{ color: '#ba68c8' }} darkModeInvert={true} />
                        <strong>Specialized Domain?</strong>
                      </div>
                      <p>→ Instructor XL with custom instructions</p>
                    </div>
                  </GSAPAnimated>

                  <GSAPAnimated animation="fadeIn" duration={1.0} delay={0.8}>
                    <div style={{ padding: '15px', backgroundColor: 'rgba(100, 181, 246, 0.1)', borderRadius: '8px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <SvgIcon iconName="duo-gauge" sizeName="2x" style={{ color: '#4fc3f7' }} darkModeInvert={true} />
                        <strong>Limited Resources?</strong>
                      </div>
                      <p>→ GTE Base or BGE Base</p>
                    </div>
                  </GSAPAnimated>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#4c3683',
          notes: `### Model Selection Guide

We've covered nine different embedding models across multiple families. Now let's distill this information into a practical decision framework to help you choose the right model for your specific needs.

#### Budget Considerations

If cost is a primary concern, start with OpenAI text-embedding-3-small or BGE 👉 'bee-jee-ee' Base. OpenAI's small model offers excellent performance per dollar spent with simple API integration, making it perfect for startups and proof-of-concept projects. BGE 👉 'bee-jee-ee' Base is ideal if you can self-host, eliminating per-query costs entirely. Both deliver solid retrieval quality that satisfies most use cases without breaking the bank.

#### Accuracy Requirements

For applications where retrieval quality directly impacts outcomes, such as medical information systems, legal research, or customer support, prioritize accuracy over cost. OpenAI text-embedding-3-large delivers best-in-class performance with minimal integration effort. If you prefer self-hosting, BGE 👉 'bee-jee-ee' Large matches commercial quality while keeping your data in-house. Both options consistently top the MTEB 👉 'em-teb' leaderboards.

#### Multilingual and Specialized Needs

Need to support multiple languages? The multilingual E5 👉 'ee-five' variants handle approximately 100 languages with consistent quality, perfect for international applications. For specialized domains like medical, legal, or technical content where generic embedders struggle, Instructor XL 👉 'ex-el' allows you to guide the model with natural language instructions tailored to your domain. For resource-constrained environments running on CPU or limited memory, GTE 👉 'jee-tee-ee' Base or BGE 👉 'bee-jee-ee' Base offer the best performance-to-resource ratio.

The key is matching your constraints and requirements to model capabilities, not just chasing leaderboard numbers.`
        },
        {
          id: 22,
          title: 'Pro Tips',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
                <h4>
                  <MermaidPopover 
                    diagram={`graph LR
    A[Text] --> B[Chunk<br/>200-400 tokens]
    B --> C[Embed]
    C --> D[Normalize]
    D --> E[Vector DB]
    E --> F[Retrieve Top-K]
    F --> G[Rerank<br/>Optional]
    G --> H[Final Results]
    style C fill:#4fc3f7,stroke:#333,stroke-width:2px
    style D fill:#81c784,stroke:#333,stroke-width:2px
    style G fill:#e1bee7,stroke:#333,stroke-width:2px
    style H fill:#ffd700,stroke:#333,stroke-width:2px`}
                    title="Best Practices Pipeline"
                  />
                </h4>
              </div>
              <GSAPAnimated animation="slideInTop" duration={0.8} delay={0.2}>
                <div style={{ padding: '20px', backgroundColor: 'rgba(129, 199, 132, 0.15)', borderRadius: '8px', marginTop: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-circle-info" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} />
                    <strong style={{ fontSize: '1.1em' }}>Pro Tips</strong>
                  </div>
                  <GSAPAnimated animation="fadeIn" duration={0.6} delay={0.5}>
                    <ul style={{ lineHeight: '1.8', marginLeft: '20px' }}>
                      <li>Always normalize embeddings and use cosine similarity</li>
                      <li>For best RAG results: combine retrieval with reranking</li>
                      <li>Most open-source models have 512-token limit → chunk at 200–400 tokens</li>
                      <li>Test with your specific use case and data distribution</li>
                    </ul>
                  </GSAPAnimated>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#4c3683',
          notes: `### Best Practices and Pro Tips

Let's conclude with essential best practices that apply across all embedding models. These tips will help you achieve optimal results regardless of which model you choose.

#### Normalization and Similarity

Always normalize your embeddings to unit length before storing them in your vector database. This ensures cosine similarity calculations are both mathematically correct and computationally efficient. Cosine similarity is the standard metric for comparing embeddings because it measures angular distance rather than magnitude, which aligns with how embedding models are trained. Most libraries handle normalization automatically, but verify this in your pipeline to avoid subtle bugs that degrade retrieval quality.

#### Retrieval-Reranking Pipeline

For production RAG 👉 'rag' systems where accuracy matters, implement a two-stage pipeline. First, use your embedding model as a bi-encoder to retrieve a candidate set of perhaps 50 to 100 documents quickly. Then, apply a cross-encoder reranker like BGE 👉 'bee-jee-ee' reranker or Cohere rerank to refine the top-k results. This hybrid approach balances speed with accuracy, the bi-encoder handles the heavy lifting of searching millions of documents, while the reranker applies more sophisticated cross-attention to the final candidates.

#### Chunking Strategy

Most open-source models inherit BERT's 512-token context limit. Chunk your documents at 200 to 400 tokens to leave headroom for safety and maintain semantic coherence. Avoid breaking in the middle of sentences or paragraphs. Consider overlapping chunks by 50 to 100 tokens to preserve context at boundaries. Experiment with different chunking strategies on your specific corpus, as the optimal approach varies by domain and document structure.

#### Empirical Validation

Benchmarks provide guidance, but your specific use case may differ from MTEB 👉 'em-teb' or BEIR 👉 'beer' tasks. Always test models on your actual data with your actual queries. Build evaluation sets that reflect real user behavior and measure retrieval metrics like precision at k, recall at k, and normalized discounted cumulative gain. This empirical approach often reveals surprises where a smaller model outperforms a larger one on your specific distribution.`
        }
      ]
    }
  ]
};
