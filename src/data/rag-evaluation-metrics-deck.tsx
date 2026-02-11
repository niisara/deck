import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const ragEvaluationMetricsDeck: Deck = {
  id: 'rag-evaluation-metrics',
  name: '13 Underused RAG Evaluation Metrics',
  description: 'A comprehensive cheat-sheet for measuring and improving retrieval quality, answer faithfulness, and system efficiency in Retrieval-Augmented Generation systems',
  category: 'RAG',
  theme: 'sky',
  slides: [],
  slideGroups: [
    {
      id: 'introduction',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          center: true,
          title: '13 Underused RAG Evaluation Metrics',
          content: (
            <div>
              <GSAPAnimated animation="scaleIn" duration={1} delay={0}>
                <div style={{ fontSize: '1.5rem', marginBottom: '30px', color: '#0ea5e9' }}>
                  <SvgIcon iconName="duo-clipboard-list" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                  A comprehensive cheat-sheet for measuring and improving retrieval quality, answer faithfulness, and system efficiency in Retrieval-Augmented Generation systems
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.4}>
                <div style={{ fontSize: '1.2rem', color: '#10b981', lineHeight: '2' }}>
                  <GSAPStaggerList stagger={0.15} duration={0.7} delay={0.6}>
                    <div>
                      <SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Retrieval Metrics</strong> — Metrics 1-4
                    </div>
                    <div>
                      <SvgIcon iconName="duo-file-lines" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Context Quality</strong> — Metric 5
                    </div>
                    <div>
                      <SvgIcon iconName="duo-message" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Answer Quality</strong> — Metrics 6-10
                    </div>
                    <div>
                      <SvgIcon iconName="duo-gauge-high" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Efficiency Metrics</strong> — Metrics 11-13
                    </div>
                  </GSAPStaggerList>
                  <GSAPAnimated animation="slideInBottom" delay={1.2}>
                    <p><strong>Prepared by:</strong> Nisar A</p>
                    <p><strong>Date:</strong> November 7, 2025</p>
                    <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
                  </GSAPAnimated>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#231f6f',
          notes: `### 13 Underused RAG Evaluation Metrics
Welcome everyone! Today we're diving into something crucial but often overlooked in the world of RAG systems—evaluation metrics. If you're building a Retrieval-Augmented Generation 👉 'RAG' system, you've probably wondered: "Is my system actually working well? How do I know if my retrieval is good enough? Is my AI making things up?"

####  Why This Matters
Think of RAG systems like this: they're basically AI assistants that look up information before answering your questions, kind of like how you might search through your notes before taking an exam. But here's the thing—if your retrieval system is bringing back the wrong notes, or if your AI is hallucinating facts that aren't in those notes, you're in trouble. That's where evaluation metrics come in.

####  What We'll Cover
We're going to explore **thirteen powerful metrics** that most teams don't use, but absolutely should. These metrics are organized into four logical categories that mirror how a RAG system actually works. First, we'll look at **Retrieval Metrics** (metrics one through four)—these tell us if we're finding the right documents. Then **Context Quality** (metric five)—is what we found actually useful? Next, **Answer Quality** (metrics six through ten)—is the AI generating good, truthful responses? And finally, **Efficiency Metrics** (metrics eleven through thirteen)—is our system fast and cost-effective?

####  Who This Is For
This presentation is perfect for beginners and freshers getting into RAG systems. Don't worry if you're new to this—I'll explain everything in simple terms with real examples. By the end, you'll have a comprehensive cheat-sheet for measuring and improving your RAG systems.

Let's get started by understanding what a RAG system actually looks like!`
        },
        {
          id: 2,
          title: 'RAG System Overview',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '30px' }}>
                  <h4>
                    RAG System Flow
                    <MermaidPopover
                      title="RAG Pipeline"
                      diagram={`flowchart LR
    A["❓ User Query"] --> B["🔍 Retrieval<br/>(Metrics 1-4)"]
    B --> C["📋 Context Quality<br/>(Metric 5)"]
    C --> D["🤖 LLM Generation<br/>(Metrics 6-10)"]
    D --> E["✅ Answer"]
    B -.-> F["⚡ Efficiency<br/>(Metrics 11-13)"]
    C -.-> F
    D -.-> F
    style A fill:#4fc3f7,color:#000
    style B fill:#3b82f6,color:#fff
    style C fill:#0ea5e9,color:#fff
    style D fill:#10b981,color:#fff
    style E fill:#81c784,color:#000
    style F fill:#8b5cf6,color:#fff`}
                    />
                  </h4>
                </div>
              </GSAPAnimated>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.3}>
                  <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1.5rem', borderRadius: '10px' }}>
                    <div style={{ color: '#3b82f6', marginBottom: '1rem' }}>
                      <SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Retrieval Quality Metrics (1-4)</strong>
                    </div>
                    <ul style={{ marginLeft: '1.5rem', fontSize: '1.2rem' }}>
                      <li>Retrieval Recall@K: Coverage of relevant information</li>
                      <li>Retrieval Precision@K: Relevance of retrieved chunks</li>
                      <li>Hit Rate: At least one relevant document in top-K</li>
                      <li>Context Overlap Score: Answer content present in retrieval</li>
                    </ul>
                  </div>
                </GSAPAnimated>

                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1.5rem', borderRadius: '10px' }}>
                    <div style={{ color: '#0ea5e9', marginBottom: '1rem' }}>
                      <SvgIcon iconName="duo-file-lines" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Context Quality Metric (5)</strong>
                    </div>
                    <ul style={{ marginLeft: '1.5rem', fontSize: '1.2rem' }}>
                      <li>Context Relevance Score: LLM-judged relevance of context to query</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.5}>
                  <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1.5rem', borderRadius: '10px' }}>
                    <div style={{ color: '#10b981', marginBottom: '1rem' }}>
                      <SvgIcon iconName="duo-message" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Answer Quality Metrics (6-10)</strong>
                    </div>
                    <ul style={{ marginLeft: '1.5rem', fontSize: '1.2rem' }}>
                      <li>Hallucination Rate: Frequency of unsupported claims</li>
                      <li>Grounded Answer Score: Correct citation of retrieved facts</li>
                      <li>Faithfulness Score: Answer follows from context</li>
                      <li>Answer Completeness: Addresses all parts of query</li>
                      <li>Answer Specificity: Avoids vague responses</li>
                    </ul>
                  </div>
                </GSAPAnimated>

                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <div style={{ background: 'rgba(139, 92, 246, 0.15)', padding: '1.5rem', borderRadius: '10px' }}>
                    <div style={{ color: '#8b5cf6', marginBottom: '1rem' }}>
                      <SvgIcon iconName="duo-gauge-high" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Efficiency Metrics (11-13)</strong>
                    </div>
                    <ul style={{ marginLeft: '1.5rem', fontSize: '1.2rem' }}>
                      <li>Noise Density: Irrelevant token percentage</li>
                      <li>Context Compression Efficiency: Information density in prompt</li>
                      <li>Latency-Cost Tradeoff Score: Efficiency under constraints</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>

              <GSAPAnimated animation="bounceIn" delay={0.7}>
                <div style={{ marginTop: '2rem', textAlign: 'left', fontStyle: 'italic', fontSize: '1.6rem' }}>
                  <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                  Goal: Diagnose failures precisely (missed retrieval vs. ungrounded reasoning vs. inefficient context)
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#231f6f',
          notes: `### RAG System Overview
Now that we understand why evaluation matters, let's see how a RAG system actually works and where each metric fits in.

####  The RAG Pipeline
Think of a RAG system like a research assistant working through a clear pipeline. When you ask a question, it first **searches** for relevant documents (that's the retrieval stage, measured by metrics one through four), then it **evaluates** whether those documents are actually useful (context quality, metric five), and finally it **writes** an answer based on what it found (generation, metrics six through ten). Throughout this whole process, we also care about **efficiency**—is it fast and cost-effective? That's what metrics eleven through thirteen address.

####  The Four Categories
Our thirteen metrics map perfectly to this pipeline. **Retrieval Quality Metrics** (one through four) tell us if we're finding the right documents in the first place. Are we getting good coverage? Are the documents actually relevant? **Context Quality** (metric five) is like a quality check—an LLM 👉 'ell-em-em' or Large Language Model evaluates whether the retrieved content is genuinely useful for answering the query. **Answer Quality Metrics** (six through ten) focus on the final output—is the AI being truthful, complete, and specific? And **Efficiency Metrics** (eleven through thirteen) ensure we're not wasting tokens or money on irrelevant content.

####  Why This Structure?
This organization helps you **diagnose problems precisely**. If your answers are bad, is it because you're retrieving the wrong documents? Or maybe you're retrieving the right documents but the LLM is ignoring them? Or perhaps the context is too noisy and inefficient? Each category answers a different diagnostic question, making it much easier to fix issues when they arise.

Let's dive into the first category—**Retrieval Quality Metrics**—starting with Retrieval Recall at K.`
        }
      ]
    },
    {
      id: 'metric-1',
      title: '1. Retrieval Recall@K',
      slides: [
        {
          id: 3,
          title: '1. Retrieval Recall@K — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <h3>Definition</h3>
                <p>Measures how many relevant documents were successfully retrieved in the top-K results, indicating retrieval coverage completeness.</p>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
                <GSAPStaggerList stagger={0.15} delay={0.5}>
                  <li>Reduces omission-driven hallucinations where the LLM fills knowledge gaps</li>
                  <li>Improves answer completeness by ensuring all relevant information is available</li>
                  <li>Critical for complex queries requiring multiple evidence pieces</li>
                </GSAPStaggerList>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInBottom" delay={0.7}>
                <p>When tuning embedding models and chunking strategies, to detect missing evidence causing answer omissions, when adjusting top-K parameter settings, and to identify cases where relevant documents are missed.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#231f6f',
          notes: `### Retrieval Recall@K — Overview
Alright, let's dive into our first metric! This is Retrieval Recall at K 👉 'recall at kay', and it's one of the most fundamental metrics you need to understand.

####  What Is Retrieval Recall@K?
Think of Recall at K like this: imagine you're a librarian, and a student asks you to find all the books about climate change. There are ten relevant books in the library, but you only bring back seven of them. Your recall would be seven out of ten, or seventy percent. In RAG systems, Retrieval Recall at K measures how many of the relevant documents you actually managed to retrieve in your top-K results. The "K" just means the number of documents you're looking at—maybe your top five, top ten, or top twenty results.

####  Why Does This Matter?
Here's the critical insight: if your retrieval system misses important documents, your LLM has no choice but to either ignore parts of the question or, worse, make things up to fill the gaps. This is called "omission-driven hallucination," and it's a huge problem in RAG systems. High recall means you're giving your LLM all the puzzle pieces it needs to construct a complete, accurate answer.

####  When to Use This
You should pay special attention to Recall at K when you're tuning your embedding models—these are the neural networks that convert text into mathematical vectors for similarity search. It's also crucial when you're adjusting your chunking strategies, meaning how you break up your documents into smaller pieces. If you notice your system giving incomplete answers or hallucinating to fill knowledge gaps, low recall is often the culprit.

####  The Good Stuff
The beauty of high recall is that it directly reduces hallucinations and improves answer completeness. For complex queries that require pulling together information from multiple sources, high recall is absolutely critical. You can't answer a multi-faceted question if you only retrieve one or two of the five relevant documents.

####  The Problems
The main challenge with recall is that it requires ground truth labels—you need to know in advance which documents are actually relevant, and creating these labels can be expensive and time-consuming. Also, recall by itself doesn't tell you about quality—you could retrieve all the relevant documents but also retrieve a ton of junk. Finally, optimizing purely for recall might push you to retrieve too many documents, increasing noise and costs.

Now let's see how this metric actually works under the hood!`
        },
        {
          id: 4,
          title: '1. Retrieval Recall@K — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <GSAPAnimated animation="rotateIn" delay={0.1}>
                <h3>How It Works
                  <MermaidPopover
                    title="Recall@K Calculation Process"
                    diagram={`flowchart TD
    A[Start: Query + Corpus] --> B[Identify ALL Relevant Docs<br/>in Corpus]
    B --> C[Run Retrieval System<br/>Get Top-K Results]
    C --> D[Count Overlap:<br/>Relevant ∩ TopK]
    D --> E[Divide by Total<br/>Relevant Docs]
    E --> F[Recall@K Score]
    
    style A fill:#4fc3f7,color:#000
    style B fill:#3b82f6,color:#fff
    style C fill:#0ea5e9,color:#fff
    style D fill:#10b981,color:#fff
    style E fill:#fbbf24,color:#000
    style F fill:#81c784,color:#000`}
                  />
                </h3>
                <p>Retrieval Recall@K measures the proportion of all relevant documents that appear in the top-K results. It answers: "Of all relevant documents, how many did we retrieve?"</p>
              </GSAPAnimated>

              <GSAPAnimated animation="scaleIn" delay={0.3}>
                <h3>Formula</h3>
                <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                  {`Recall@K = |Rel ∩ TopK| / |Rel|`}
                </pre>
                <p>Where |Rel ∩ TopK| is the number of relevant documents in the top-K results, and |Rel| is the total number of relevant documents in the corpus.</p>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <h3>Target Values</h3>
                <GSAPStaggerList stagger={0.15} delay={0.7}>
                  <li>≥0.80 for carefully curated question-answer sets</li>
                  <li>≥0.60 for broad open-domain queries</li>
                  <li>Higher values critical for comprehensive information needs</li>
                </GSAPStaggerList>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#231f6f',
          notes: `### Retrieval Recall@K — How It Works
Now let's break down the mechanics of how we actually calculate this metric. Don't worry if math isn't your strong suit—this is simpler than it looks!

####  The Core Question
Recall at K answers one fundamental question: "Of all the relevant documents that exist in our database, what percentage did we successfully retrieve in our top-K results?" It's all about coverage—are we catching everything we should be catching?

####  The Formula Explained
The formula is Recall at K equals the absolute value of Rel intersection TopK, divided by the absolute value of Rel. Let me translate that into English. "Rel" means all the relevant documents in your entire corpus—think of this as the complete set of documents that should be retrieved for a given query. "TopK" means the top-K results your retrieval system actually returned. The "intersection" symbol just means "documents that appear in both sets"—so we're counting how many relevant documents made it into your top-K results. Then we divide by the total number of relevant documents to get a percentage.

####  A Visual Example
Imagine your corpus has exactly ten documents about climate change that are relevant to the query. Your retrieval system returns the top five results, and three of those five are from the relevant set. Your Recall at five would be three divided by ten, which equals zero point three or thirty percent. That's pretty low—you missed seven relevant documents!

####  Target Benchmarks
So what's a good score? For carefully curated question-answer sets where you've hand-labeled everything, you should aim for at least zero point eight or eighty percent recall. For broad, open-domain queries where relevance is fuzzier, sixty percent or higher is acceptable. The key insight is that for comprehensive information needs—like answering "What are all the symptoms of disease X?"—you really need high recall. Missing even a few relevant documents can lead to incomplete or misleading answers.

####  Why These Targets?
These benchmarks come from years of information retrieval research and practical experience. Below sixty percent recall, you're missing so much relevant information that your LLM is forced to fill gaps, leading to hallucinations. Above eighty percent, you've captured most of what matters, and the cost of chasing that last twenty percent often isn't worth it.

Next, let's see this in action with a concrete example!`
        },
        {
          id: 5,
          title: '1. Retrieval Recall@K — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <GSAPAnimated animation="bounceIn" delay={0.1}>
                <h3>Example
                  <MermaidPopover
                    title="Recall@K Example Visualization"
                    diagram={`graph TD
    A[Query: Side effects of medication X?] --> B[Corpus Analysis]
    B --> C[Total Relevant Docs: 4]
    C --> D1[Doc A: Primary side effects]
    C --> D2[Doc B: Rare side effects]
    C --> D3[Doc C: Drug interactions]
    C --> D4[Doc D: Long-term effects]
    
    A --> E[Retrieval System]
    E --> F[Top-5 Results]
    F --> G1[✅ Doc A]
    F --> G2[✅ Doc B]
    F --> G3[❌ Doc Z - irrelevant]
    F --> G4[✅ Doc C]
    F --> G5[❌ Doc Y - irrelevant]
    
    G1 --> H[Retrieved: 3/4]
    G2 --> H
    G4 --> H
    
    H --> I[Recall@5 = 3/4 = 0.75]
    
    style A fill:#4fc3f7,color:#000
    style I fill:#81c784,color:#000
    style G1 fill:#10b981,color:#fff
    style G2 fill:#10b981,color:#fff
    style G4 fill:#10b981,color:#fff
    style G3 fill:#ef4444,color:#fff
    style G5 fill:#ef4444,color:#fff`}
                  />
                </h3>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <p><strong>Query:</strong> "What are the side effects of medication X?"</p>
                <p>Corpus has 4 relevant documents discussing side effects</p>
                <p>Top-5 retrieval returns 3 of those relevant documents</p>
                <p><strong>Recall@5 = 3/4 = 0.75</strong></p>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <h3>How to Calculate</h3>
                <p>First, identify all relevant documents in your corpus for the query. Then run your retrieval system to get the top-K results. Count how many of the relevant documents appear in those top-K results. Finally, divide that count by the total number of relevant documents to get your Recall@K score.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#231f6f',
          notes: `### Retrieval Recall@K — Implementation
Let's walk through a concrete example to really solidify your understanding of how Recall at K works in practice.

####  The Scenario
Imagine you're building a medical information RAG system, and a user asks, "What are the side effects of medication X?" Now, you've done your homework and labeled your corpus, and you know there are exactly four documents in your database that discuss side effects of this medication. Let's call them Document A (covering primary side effects), Document B (rare side effects), Document C (drug interactions), and Document D (long-term effects).

####  What Happens During Retrieval
You run your retrieval system with K equals five, meaning you ask for the top five most relevant documents. Your system returns five results: Document A, Document B, Document Z (which turns out to be about a totally different medication), Document C, and Document Y (which is about dietary recommendations, not side effects). So out of your top five results, three are from the set of relevant documents, and two are noise.

####  The Calculation
Now we calculate Recall at five. We have three relevant documents in our top-K results (A, B, and C), and the total number of relevant documents in the corpus is four. Three divided by four equals zero point seventy-five, or seventy-five percent. Notice that Document D about long-term effects was completely missed—it didn't make it into the top five at all. This means if the LLM only has access to these top five documents, it has no information about long-term effects and might either skip that aspect or hallucinate something to fill the gap.

####  Step-by-Step Process
Here's how you'd implement this in practice. First, before you even start retrieval, you need ground truth labels identifying which documents are relevant for each query. This is usually done through human annotation or using a reference dataset. Second, run your retrieval system as normal, fetching the top-K results. Third, count how many of those top-K results are in your set of relevant documents—this is just set intersection. Finally, divide that count by the total number of relevant documents to get your score. Most RAG frameworks have built-in evaluation tools that can automate this process.

####  What This Tells You
A score of seventy-five percent isn't terrible, but it means you're missing twenty-five percent of relevant information. In a medical context, that missing twenty-five percent could be critical. This low recall would be a red flag that you need to tune your embedding model, adjust your chunking strategy, or increase your K parameter to retrieve more documents.

Now let's talk about when Recall at K is most useful and what its limitations are!`
        },
        {
          id: 6,
          title: '1. Retrieval Recall@K — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <h3 style={{ color: '#2ecc71' }}>Impact on RAG
                  <MermaidPopover
                    title="Impact of High vs Low Recall"
                    diagram={`graph LR
    A[Low Recall<br/>Missing Docs] --> B[Incomplete Context]
    B --> C[LLM Fills Gaps]
    C --> D[❌ Hallucinations<br/>❌ Omissions]
    
    E[High Recall<br/>Complete Coverage] --> F[Rich Context]
    F --> G[LLM Has All Info]
    G --> H[✅ Accurate Answers<br/>✅ Completeness]
    
    style A fill:#ef4444,color:#fff
    style D fill:#ef4444,color:#fff
    style E fill:#10b981,color:#fff
    style H fill:#10b981,color:#fff`}
                  />
                </h3>
                <GSAPStaggerList stagger={0.15} delay={0.3}>
                  <li>Higher recall reduces omission-driven hallucinations where the LLM fills knowledge gaps</li>
                  <li>Improves answer completeness by ensuring all relevant information is available</li>
                  <li>Critical for complex queries requiring multiple evidence pieces</li>
                </GSAPStaggerList>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInBottom" delay={0.5}>
                <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
                <GSAPStaggerList stagger={0.15} delay={0.7}>
                  <li>Requires ground truth relevance labels, which can be expensive to obtain</li>
                  <li>Does not account for the quality or precision of retrieved documents</li>
                  <li>May incentivize retrieving too many documents, increasing noise</li>
                  <li>Difficult to optimize when relevant documents are poorly embedded or chunked</li>
                </GSAPStaggerList>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#231f6f',
          notes: `### Retrieval Recall@K — Considerations
We've covered what Recall at K is and how to calculate it. Now let's talk about the bigger picture—when should you use it, and what are its limitations?

####  The Positive Impact on RAG Systems
High recall has a profound impact on your RAG system's quality. When you have high recall, you're giving your LLM all the relevant information it needs, which directly translates to better, more complete answers. Think of it like preparing for an exam—if you bring all your relevant notes, you can answer comprehensively. If you forget half your notes, you're going to struggle and might guess at answers. The same principle applies here. High recall is especially critical for complex queries that need information from multiple sources. For example, if someone asks "Compare the efficacy of treatments A, B, and C for condition X," you need to retrieve documents about all three treatments. Missing even one means your comparison is incomplete.

####  When to Use This Metric
You should actively monitor Recall at K in several scenarios. First, when you're tuning your embedding models—these are the neural networks that convert text into vectors for similarity search. If you switch from one embedding model to another and your recall drops, that's a red flag. Second, when you're experimenting with chunking strategies—how you break up documents matters a lot. If your chunks are too small or too large, recall can suffer. Third, if users are complaining about incomplete answers or if you notice the LLM hallucinating to fill knowledge gaps, check your recall first. It's often the root cause.

####  The Good Stuff
The benefits are clear: reduced hallucinations, improved completeness, and more trustworthy answers. Recall at K gives you a direct line of sight into whether your retrieval system is doing its job. It's also relatively straightforward to interpret—a score of seventy percent means you're getting seventy percent of what you should be getting. No complex statistics needed.

####  The Problems
But Recall at K isn't perfect. The biggest challenge is that it requires ground truth labels. Someone has to manually identify which documents are relevant for each query, and this is expensive and time-consuming. For large-scale systems, this can be prohibitive. Second, recall doesn't tell you about precision—you could have perfect recall but also retrieve tons of irrelevant documents, overwhelming your LLM with noise. Third, optimizing purely for recall can be dangerous. You might end up retrieving way too many documents just to chase a perfect score, which increases costs, latency, and context window usage. Finally, if your documents are poorly embedded or chunked to begin with, improving recall can be nearly impossible without fixing those underlying issues first.

####  A Balanced Approach
The key is to use Recall at K as one metric among many. Don't optimize for recall alone—balance it with precision, efficiency, and answer quality. Think of it as a diagnostic tool: low recall tells you that retrieval is missing important documents, but it doesn't tell you how to fix it or whether fixing it will actually improve your end-to-end system performance.

Alright, let's move on to our second metric—Retrieval Precision at K!`
        }
      ]
    },
    {
      id: 'metric-2',
      title: '2. Retrieval Precision@K',
      slides: [
        {
          id: 7,
          title: '2. Retrieval Precision@K — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <h3>Definition</h3>
                <p>Measures how relevant the top-K retrieved chunks are (relevance purity). Evaluates the accuracy and quality of the retrieval system's results.</p>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
                <GSAPStaggerList stagger={0.12} delay={0.5}>
                  <li>Improves grounding by focusing LLM on relevant information</li>
                  <li>Reduces irrelevant context that can distract the LLM</li>
                  <li>Lowers hallucination risk by minimizing exposure to tangential information</li>
                  <li>Particularly important for smaller models with limited context processing ability</li>
                </GSAPStaggerList>
              </GSAPAnimated>

              <GSAPAnimated animation="bounceIn" delay={0.7}>
                <p>When working with tight context budgets (token limits), to reduce context pollution and hallucination risk, when fine-tuning reranking models, and when evaluating retrieval quality for concise responses.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1f616f',
          notes: `### Retrieval Precision@K — Overview
Moving on from Recall, let's talk about its complementary twin—Retrieval Precision at K. While recall asks "Did we find everything?", precision asks "Is what we found actually good?"

####  What Is Retrieval Precision@K?
Think of precision like quality control in manufacturing. If you're building a car and you order a hundred parts, precision tells you what percentage of those hundred parts are actually usable versus defective. In RAG systems, Precision at K measures the relevance purity of your retrieved documents. Out of the K documents you retrieved, how many are actually relevant to the query? If you retrieve ten documents but only seven are relevant, your precision is seventy percent.

####  Why This Matters
Here's the key difference from recall: recall cares about completeness, but precision cares about cleanliness. Low precision means you're polluting your LLM's context with irrelevant junk. Imagine trying to study for an exam while someone keeps handing you random notes from completely different subjects—that's what low precision does to your LLM. The model gets distracted by tangential information, which can lead to hallucinations or off-topic answers.

####  When to Use This
Precision becomes critical in several scenarios. First, when you're working with tight token budgets—if your context window is limited, you can't afford to waste tokens on irrelevant documents. Second, if you're using smaller language models with limited context processing ability, high precision helps them focus on what matters. Third, when you're fine-tuning reranking models—these are secondary models that reorder your initial retrieval results to improve relevance. Precision tells you how well your reranker is working.

####  The Good Stuff
High precision means your LLM gets clean, focused context. This directly improves grounding—the LLM sticks to the facts in the retrieved documents instead of wandering off into speculation. It reduces hallucination risk because the model isn't exposed to confusing or tangential information. And it's especially important for smaller models that struggle to filter out noise on their own.

####  The Problems
But here's the catch: there's often a trade-off between precision and recall. You can achieve perfect precision by only retrieving one document that you're absolutely certain is relevant, but then your recall will be terrible. Also, like recall, precision requires ground truth labels—someone has to judge whether each document is relevant or not. And precision doesn't account for redundancy. If you retrieve ten documents that all say the exact same thing, you'd have perfect precision, but you're wasting context on repetition.

Let's dive into how precision is calculated!`
        },
        {
          id: 8,
          title: '2. Retrieval Precision@K — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <h3>How It Works
                  <MermaidPopover
                    title="Precision@K vs Recall@K"
                    diagram={`graph LR
    A[Top-K Retrieved] --> B{Evaluate Each}
    B --> C[Relevant Docs<br/>in TopK]
    B --> D[Irrelevant Docs<br/>in TopK]
    
    C --> E[Precision@K:<br/>Relevant / K]
    
    F[All Relevant Docs<br/>in Corpus] --> G[Recall@K:<br/>Retrieved / Total]
    C --> G
    
    style A fill:#4fc3f7,color:#000
    style C fill:#10b981,color:#fff
    style D fill:#ef4444,color:#fff
    style E fill:#fbbf24,color:#000
    style F fill:#8b5cf6,color:#fff
    style G fill:#fbbf24,color:#000`}
                  />
                </h3>
                <p>Retrieval Precision@K measures the proportion of retrieved documents that are actually relevant. It answers: "Of the K documents we retrieved, how many are relevant?"</p>
              </GSAPAnimated>

              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <h3>Formula</h3>
                <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                  {`Precision@K = |Rel ∩ TopK| / K`}
                </pre>
                <p>Where |Rel ∩ TopK| is the number of relevant documents in the top-K results, and K is the total number of retrieved documents being evaluated.</p>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.5}>
                <h3>Target Values</h3>
                <GSAPStaggerList stagger={0.15} delay={0.7}>
                  <li>≥0.70 typical for general RAG applications</li>
                  <li>≥0.85 for systems with small context windows</li>
                  <li>Higher values critical when LLM context capacity is limited</li>
                </GSAPStaggerList>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1f616f',
          notes: `### Retrieval Precision@K — How It Works
Let's break down the calculation for Precision at K and understand how it differs from recall.

####  The Core Question
Precision at K answers: "Of the K documents I retrieved, what percentage are actually relevant?" Notice how this is fundamentally different from recall. Recall asks "How much did I find of everything?" while precision asks "How clean is what I found?"

####  The Formula Explained
The formula is Precision at K equals the absolute value of Rel intersection TopK, divided by K. Let me unpack this. The numerator—Rel intersection TopK—is the number of relevant documents in your top-K results. This is the same numerator we used for recall! But here's the key difference: the denominator. For precision, we divide by K, the number of documents we actually retrieved. For recall, we divided by the total number of relevant documents in the entire corpus. This distinction is crucial.

####  The Difference in Practice
Let's say you retrieve five documents, three of which are relevant. Your precision is three divided by five, which equals zero point six or sixty percent. But what if there are twenty relevant documents total in your corpus? Your recall would be three divided by twenty, which is only fifteen percent. Same retrieval result, but very different scores! This illustrates the trade-off: you can have high precision with low recall (you're picky but you miss stuff), or high recall with low precision (you cast a wide net but catch a lot of junk).

####  Target Benchmarks
For general RAG applications, aim for precision of at least seventy percent. This means at least seven out of every ten retrieved documents should be relevant. For systems with small context windows—maybe you're using a model with only four thousand tokens of context—you need higher precision, at least eighty-five percent. Every wasted token hurts when space is tight. The target also depends on your domain: in medical or legal applications where accuracy is critical, you might want ninety percent or higher precision.

####  Why These Targets?
These benchmarks balance practicality with quality. Below seventy percent precision, you're wasting too much of your context window on noise, which confuses the LLM and increases hallucination risk. Above ninety percent, you're probably being too conservative, missing out on potentially useful documents to maintain that ultra-high bar. The sweet spot for most applications is between seventy-five and eighty-five percent.

Now let's see a concrete example!`
        },
        {
          id: 9,
          title: '2. Retrieval Precision@K — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <GSAPAnimated animation="rotateIn" delay={0.1}>
                <h3>Example
                  <MermaidPopover
                    title="Precision@K Example"
                    diagram={`graph TD
    A[Query: Reset password?] --> B[Retrieval: Top-5]
    B --> C1[✅ Doc 1: Password reset guide]
    B --> C2[✅ Doc 2: Step-by-step reset]
    B --> C3[❌ Doc 3: Login page info]
    B --> C4[✅ Doc 4: Security tips for reset]
    B --> C5[✅ Doc 5: Common reset errors]
    
    C1 --> D[Relevant: 4]
    C2 --> D
    C4 --> D
    C5 --> D
    
    C3 --> E[Irrelevant: 1]
    
    D --> F[Precision@5 = 4/5 = 0.80]
    
    style A fill:#4fc3f7,color:#000
    style C1 fill:#10b981,color:#fff
    style C2 fill:#10b981,color:#fff
    style C4 fill:#10b981,color:#fff
    style C5 fill:#10b981,color:#fff
    style C3 fill:#ef4444,color:#fff
    style F fill:#81c784,color:#000`}
                  />
                </h3>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <p><strong>Query:</strong> "How to reset account password?"</p>
                <p>Top-5 retrieved documents: 4 relevant password reset guides, 1 irrelevant login page doc</p>
                <p><strong>Precision@5 = 4/5 = 0.80</strong></p>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <h3>How to Calculate</h3>
                <p>Run your retrieval system to get the top-K results. For each retrieved document, label it as relevant or irrelevant to the query. Count the number of relevant documents and divide by K (the total number of documents retrieved).</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1f616f',
          notes: `### Retrieval Precision@K — Implementation
Let's walk through a practical example to see how Precision at K works in a real scenario.

####  The Scenario
Imagine you're building a customer support RAG system for a software company. A user submits the query, "How to reset account password?" Your retrieval system is configured to return the top five most relevant documents. After running the retrieval, you get back five documents: a comprehensive password reset guide, a step-by-step reset tutorial, an article about the login page structure, a guide on security tips for password resets, and a troubleshooting document about common reset errors.

####  Labeling for Relevance
Now comes the key step: you need to evaluate each of these five documents for relevance to the query. The password reset guide? Clearly relevant—it directly answers the question. The step-by-step tutorial? Also relevant. The login page article? This one's tricky—it mentions passwords, but it's really about how the login interface works, not about resetting passwords. This is irrelevant noise. The security tips guide? Relevant—it helps users reset passwords safely. The troubleshooting document? Relevant—it addresses problems users might encounter during resets. So we have four relevant documents and one irrelevant one.

####  The Calculation
Precision at five equals four divided by five, which equals zero point eight or eighty percent. This is pretty good! It means that eighty percent of what we retrieved is actually useful, and only twenty percent is noise. The LLM will have to sift through that one irrelevant document, but the signal-to-noise ratio is still healthy.

####  Implementation Steps
Here's how you'd implement this in your system. First, run your retrieval to get the top-K results—in this case, top five. Second, for each document, apply a relevance judgment. This can be done manually by human annotators, or you can use an LLM-as-a-judge approach where another model evaluates relevance. Third, count the number of relevant documents. Fourth, divide by K to get your precision score. Most RAG evaluation frameworks automate steps three and four.

####  What This Tells You
A precision of eighty percent tells you that your retrieval is reasonably clean, but there's room for improvement. That irrelevant document about the login page suggests your embedding model might be conflating "login" with "password reset" due to shared vocabulary. You might improve precision by using a reranker—a secondary model that reorders results based on deeper semantic understanding. Or you could adjust your chunking strategy to make documents more semantically distinct.

Let's look at when precision is most important and what its limitations are!`
        },
        {
          id: 10,
          title: '2. Retrieval Precision@K — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <h3 style={{ color: '#2ecc71' }}>Impact on RAG
                  <MermaidPopover
                    title="Precision-Recall Trade-off"
                    diagram={`graph TD
    A[Conservative Retrieval<br/>High Threshold] --> B[High Precision<br/>Clean Results]
    B --> C[Low Recall<br/>Missing Docs]
    C --> D[Incomplete Answers]
    
    E[Aggressive Retrieval<br/>Low Threshold] --> F[High Recall<br/>Complete Coverage]
    F --> G[Low Precision<br/>Noisy Results]
    G --> H[Distracted LLM]
    
    I[Balanced Approach] --> J[Moderate Precision<br/>& Recall]
    J --> K[Best Overall Quality]
    
    style A fill:#fbbf24,color:#000
    style E fill:#ef4444,color:#fff
    style I fill:#10b981,color:#fff
    style K fill:#81c784,color:#000`}
                  />
                </h3>
                <GSAPStaggerList stagger={0.12} delay={0.3}>
                  <li>Higher precision improves grounding by focusing LLM on relevant information</li>
                  <li>Reduces irrelevant context that can distract the LLM</li>
                  <li>Lowers hallucination risk by minimizing exposure to tangential information</li>
                  <li>Particularly important for smaller models with limited context processing ability</li>
                </GSAPStaggerList>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInBottom" delay={0.5}>
                <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
                <GSAPStaggerList stagger={0.12} delay={0.7}>
                  <li>High precision can come at the cost of lower recall (missing relevant documents)</li>
                  <li>Requires ground truth relevance judgments</li>
                  <li>May be too conservative for complex queries requiring diverse perspectives</li>
                  <li>Doesn't account for redundancy — multiple similar documents may inflate precision</li>
                </GSAPStaggerList>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1f616f',
          notes: `### Retrieval Precision@K — Considerations
Now let's discuss the strategic implications of precision—when to optimize for it and what trade-offs you're making.

####  The Positive Impact on RAG Systems
High precision is like having a well-organized library where every book on the shelf is exactly what you need. When your LLM receives high-precision context, it can ground its answers in clean, relevant information without getting distracted by noise. This is especially powerful for smaller language models—say, models with seven billion parameters or fewer—that don't have the capacity to intelligently filter out irrelevant information on their own. High precision also directly reduces hallucination risk because the model isn't exposed to tangential information that might confuse it or lead it astray.

####  When to Use This Metric
You should prioritize precision in several key scenarios. First, when you're operating under tight token budgets. If your context window is limited to four thousand tokens, you can't afford to waste a single token on irrelevant documents. Every document must count. Second, when you're using smaller or less capable models that struggle with noisy context. Third, when you're evaluating or fine-tuning reranking models—these secondary models that reorder your initial retrieval results. Precision tells you if your reranker is successfully filtering out noise. Fourth, when your application requires concise, focused responses rather than comprehensive exploration of a topic.

####  The Good Stuff
High precision makes your RAG system more reliable and efficient. Your LLM spends less time processing irrelevant information, which means faster responses and lower costs. The answers tend to be more focused and less prone to wandering off topic. For production systems, high precision is often more important than high recall because it's better to give a focused, accurate answer based on a few highly relevant documents than to give a confused or hallucinated answer based on a mix of relevant and irrelevant documents.

####  The Problems
But precision comes with significant trade-offs. The most fundamental is the precision-recall trade-off: if you only retrieve documents you're absolutely certain are relevant, your precision will be high, but you'll miss a lot of relevant documents, making your recall low. This is a classic dilemma in information retrieval. Second, like recall, precision requires ground truth judgments—someone has to label what's relevant and what's not. Third, high precision can be too conservative for complex queries that benefit from diverse perspectives. Sometimes exposure to tangentially related information actually helps the LLM synthesize a better answer. Fourth, precision doesn't account for redundancy. If you retrieve ten documents that all say the exact same thing, your precision might be perfect, but you're wasting context on repetition instead of diversity.

####  Finding the Balance
The key is to not optimize for precision in isolation. Monitor both precision and recall together, and understand that different use cases require different balances. For factual question answering where you need focused, accurate responses, lean toward higher precision. For open-ended research queries where you want comprehensive coverage, lean toward higher recall. Most importantly, always evaluate the end-to-end impact on answer quality—sometimes a bit more noise is worth it if it means capturing critical information.

Next up, let's talk about Hit Rate—a simpler but equally important metric!`
        }
      ]
    },
    {
      id: 'metric-3',
      title: '3. Hit Rate',
      slides: [
        {
          id: 11,
          title: '3. Hit Rate — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <h3>Definition</h3>
                <p>Fraction of queries where at least one relevant item appears in top-K results (minimum success criterion).</p>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
                <GSAPStaggerList stagger={0.15} delay={0.5}>
                  <li>Ensures the generator sees at least one relevant "anchor" for grounding</li>
                  <li>Stabilizes answer quality by preventing complete retrieval failures</li>
                  <li>Low hit rate signals need for synthetic data or knowledge base expansion</li>
                  <li>Critical baseline before optimizing for more nuanced metrics</li>
                </GSAPStaggerList>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInBottom" delay={0.7}>
                <p>As a production guardrail to ensure some support is present, when designing fallback strategies for low-relevance cases, for quick health checks of retrieval systems, and to evaluate base retrieval success before precision-focused tuning.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1f6f28',
          notes: `### Hit Rate — Overview
Welcome to our third metric: Hit Rate! This is often called the "minimum success criterion" for retrieval systems, and you'll see why in just a moment.

####  What Is Hit Rate?
Think of Hit Rate as a yes-or-no question: "Did we find at least one good document?" That's it. It's beautifully simple. If your system retrieves ten documents for a query and even just one of them is relevant, that counts as a hit. If all ten are irrelevant, that's a miss. Hit Rate tells you the fraction of your queries where you managed to retrieve at least something useful in your top-K 👉 'top kay' results.

####  Why This Matters for RAG
Here's the thing: if your retrieval system completely whiffs and returns zero relevant documents, your LLM is flying blind. It has nothing to ground its response in, so you're almost guaranteed to get a hallucinated or "I don't know" response. Hit Rate ensures that your generator has at least one anchor point, one piece of relevant evidence to build from. It's the bare minimum for stable answer quality.

####  When to Use This
Hit Rate is your go-to metric for production guardrails—you want to make sure that at least some relevant information makes it through for every query. It's perfect for quick health checks of your retrieval system, like a smoke test. Use it when designing fallback strategies for cases where retrieval struggles. And importantly, establish a good baseline Hit Rate before you start optimizing for more sophisticated metrics like precision or MRR 👉 'M R R'.

####  Pros
The good stuff: Hit Rate prevents catastrophic retrieval failures where you get absolutely nothing useful. It's a critical early warning signal—if your Hit Rate is low, you know immediately that you need to expand your knowledge base, generate synthetic training data, or fundamentally rethink your retrieval approach. It's also incredibly easy to understand and compute.

####  Cons
The problems: Hit Rate is a very coarse metric. It treats "found one marginally relevant document" the same as "found ten highly relevant documents." It doesn't care about quality, it doesn't care about ranking position, and it won't help you with fine-grained optimization. Once you've got a decent Hit Rate, you need other metrics to actually improve your system.

Let's see how this binary success metric actually works!`
        },
        {
          id: 12,
          title: '3. Hit Rate — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <GSAPAnimated animation="rotateIn" delay={0.1}>
                <h3>How It Works
                  <MermaidPopover
                    title="Hit Rate Binary Evaluation"
                    diagram={`flowchart TD
    A[Start: Query + Corpus] --> B[Run Retrieval System<br/>Get Top-K Results]
    B --> C{At Least 1<br/>Relevant Doc?}
    C -->|Yes| D[Hit = 1 ✓]
    C -->|No| E[Miss = 0 ✗]
    D --> F[Sum All Hits]
    E --> F
    F --> G[Divide by Total<br/>Number of Queries]
    G --> H[Hit Rate Score]
    
    style A fill:#4fc3f7,color:#000
    style B fill:#3b82f6,color:#fff
    style C fill:#8b5cf6,color:#fff
    style D fill:#10b981,color:#fff
    style E fill:#ef4444,color:#fff
    style F fill:#0ea5e9,color:#fff
    style G fill:#fbbf24,color:#000
    style H fill:#81c784,color:#000`}
                  />
                </h3>
                <p>Hit Rate measures the fraction of queries where at least one relevant document appears in the top-K results. It's a binary success metric: did we retrieve anything useful?</p>
              </GSAPAnimated>

              <GSAPAnimated animation="scaleIn" delay={0.3}>
                <h3>Formula</h3>
                <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                  {`HitRate@K = (1/N) Σ 1[|Rel ∩ TopK| ≥ 1]`}
                </pre>
                <p>Where N is the total number of queries, and the indicator function returns 1 if at least one relevant document appears in top-K, 0 otherwise. Sum over all queries.</p>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <h3>Target Values</h3>
                <GSAPStaggerList stagger={0.15} delay={0.7}>
                  <li>≥0.95 for FAQs or narrow/specialized corpora</li>
                  <li>≥0.80 for broad or diverse document collections</li>
                  <li>Lower values indicate need for embedding model or chunking improvements</li>
                </GSAPStaggerList>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1f6f28',
          notes: `### Hit Rate — How It Works
Now let's break down the mechanics of how Hit Rate is actually calculated. Don't worry, it's refreshingly simple compared to some other metrics!

####  The Binary Decision
Here's how it works: For each query in your test set, you run your retrieval system and get back your top-K results—maybe the top five or top ten documents. Then you ask one simple question: "Is at least one of these documents relevant?" If yes, you record a hit, which is a one. If no, you record a miss, which is a zero. That's the binary part—there's no middle ground, no partial credit.

####  The Calculation
Once you've done this for all your queries, you sum up all the hits—all those ones—and divide by the total number of queries. That gives you your Hit Rate. The formula you see here uses an indicator function, which is just a fancy mathematical way of saying "this returns one if the condition is true, zero otherwise." The condition is whether the intersection of relevant documents and your top-K results is greater than or equal to one.

####  What the Numbers Mean
So what should you aim for? If you're working with FAQs 👉 'frequently asked questions' or a highly specialized corpus where queries are well-matched to your content, you want a Hit Rate of at least ninety-five percent. For broader or more diverse document collections where queries might be more varied, aim for at least eighty percent. If you're seeing lower values, that's a red flag—you probably need to improve your embedding model or rethink your chunking strategy.

####  The Indicator Function
That indicator function in the formula is doing something clever: it checks if the size of the intersection between relevant documents and your top-K is at least one. The intersection symbol means "what's in both sets," and if that intersection has at least one document, boom, you get a hit. Otherwise, you get a miss.

####  Why Binary Works
The beauty of this binary approach is that it's incredibly robust and easy to compute. You don't need to worry about edge cases or complex scoring—either you found something or you didn't. This makes Hit Rate a fantastic early-stage diagnostic metric.

Now let's look at a concrete example to make this crystal clear!`
        },
        {
          id: 13,
          title: '3. Hit Rate — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <GSAPAnimated animation="bounceIn" delay={0.1}>
                <h3>Example</h3>
                <p>Test set: 100 user queries against product documentation</p>
                <p>Result: 92 queries have at least one relevant document in top-10 results</p>
                <p><strong>Hit Rate@10 = 92/100 = 0.92</strong></p>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInTop" delay={0.4}>
                <h3>How to Calculate</h3>
                <p>For each query in your test set, run retrieval to get the top-K results. Check if at least one of those K documents is relevant. If yes, count it as a hit (1), otherwise count it as a miss (0). Sum all the hits and divide by the total number of queries.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1f6f28',
          notes: `### Hit Rate — Implementation
Let's walk through a concrete example so you can see exactly how this works in practice.

####  The Scenario
Imagine you're running a RAG system for a software company's product documentation. You've put together a test set of one hundred real user queries—questions that actual customers asked your support team. Now you want to know: how often does your retrieval system find at least one useful document for these queries? Let's find out.

####  Running the Test
You take each of those one hundred queries and run them through your retrieval system, asking for the top-ten results each time. That's your top-K—K equals ten. Now comes the simple but crucial part: for each query, you manually check or use a pre-labeled dataset to determine whether at least one of those ten documents is actually relevant to the question.

####  The Results
In this example, you find that ninety-two of your one hundred queries successfully retrieved at least one relevant document. That means eight queries completely missed—they got ten results, but none of them were actually helpful. So your Hit Rate at ten is ninety-two divided by one hundred, which equals zero point ninety-two, or ninety-two percent.

####  Interpreting This Result
Is ninety-two percent good? For product documentation with well-defined queries, it's decent but not great. Those eight misses represent eight cases where a customer would get a completely hallucinated or unhelpful answer because the retrieval system failed to find any grounding information. You'd probably want to dig into those eight failures, understand why they missed, and improve your system to catch them.

####  Step-by-Step Process
Let me repeat the calculation process because it's so simple yet powerful: First, for each query, run retrieval and get your top-K results. Second, check if at least one of those K documents is relevant—this gives you a one for hit or zero for miss. Third, sum up all those ones and zeros. Fourth, divide by the total number of queries. That's your Hit Rate. No complex math, no weighting schemes, just a straightforward success-or-failure count.

####  Practical Tips
When you're implementing this yourself, make sure you're consistent about what "relevant" means. Are you checking if the document contains the answer? If it's on the right topic? If it would help a human answer the question? Define this clearly up front, because consistency in your relevance judgments is what makes this metric meaningful.

Now let's talk about the broader impact and some important limitations you need to be aware of!`
        },
        {
          id: 14,
          title: '3. Hit Rate — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <h3 style={{ color: '#2ecc71' }}>Impact on RAG
                  <MermaidPopover
                    title="Hit Rate Impact on RAG Pipeline"
                    diagram={`flowchart LR
    A["❓ Query"] --> B["🔍 Retrieval"]
    B -->|Hit Rate ≥0.8| C["✅ At Least 1<br/>Relevant Doc"]
    B -->|Hit Rate <0.8| D["❌ Zero<br/>Relevant Docs"]
    C --> E["🤖 LLM:<br/>Grounded Answer"]
    D --> F["🤖 LLM:<br/>Hallucination Risk"]
    E --> G["✓ Quality Output"]
    F --> H["✗ Poor Output"]
    
    style A fill:#4fc3f7,color:#000
    style B fill:#3b82f6,color:#fff
    style C fill:#10b981,color:#fff
    style D fill:#ef4444,color:#fff
    style E fill:#81c784,color:#000
    style F fill:#fbbf24,color:#000
    style G fill:#10b981,color:#fff
    style H fill:#ef4444,color:#fff`}
                  />
                </h3>
                <GSAPStaggerList stagger={0.15} delay={0.3}>
                  <li>Ensures the generator sees at least one relevant "anchor" for grounding</li>
                  <li>Stabilizes answer quality by preventing complete retrieval failures</li>
                  <li>Low hit rate signals need for synthetic data or knowledge base expansion</li>
                  <li>Critical baseline before optimizing for more nuanced metrics</li>
                </GSAPStaggerList>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
                <GSAPStaggerList stagger={0.15} delay={0.7}>
                  <li>Binary metric doesn't capture how many relevant documents were retrieved</li>
                  <li>Can be misleadingly high if only marginally relevant documents are retrieved</li>
                  <li>Doesn't account for quality or ranking position of the hit</li>
                  <li>May not be sensitive enough for fine-grained optimization</li>
                </GSAPStaggerList>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1f6f28',
          notes: `### Hit Rate — Considerations
Let's wrap up Hit Rate by talking about its real-world impact on your RAG system and the important limitations you need to keep in mind.

####  Impact on RAG Systems
The primary impact of Hit Rate is that it ensures your LLM has at least one anchor point for grounding its responses. Think of it like this: if you're writing an essay and you have zero sources, you're just making stuff up. But if you have even one good source, you can at least build something factual around it. High Hit Rate stabilizes answer quality by preventing those catastrophic cases where retrieval completely fails and the LLM has nothing to work with.

####  Early Warning System
A low Hit Rate is one of the clearest signals that something is fundamentally wrong with your retrieval setup. It might mean your knowledge base doesn't actually contain the information users are asking about—in which case you need to expand it or generate synthetic data to fill the gaps. Or it could mean your embedding model is mismatched to your domain, your chunking strategy is breaking up important information in weird ways, or your queries need preprocessing. Whatever the cause, fix Hit Rate first before you worry about precision or ranking quality.

####  Why It's a Baseline Metric
Hit Rate is what we call a baseline metric because it measures the absolute minimum requirement: did we get anything useful at all? It's like checking if a car engine starts before you worry about fuel efficiency or acceleration. You need a solid Hit Rate foundation before it makes sense to optimize for more nuanced metrics like MRR 👉 'M R R' or NDCG 👉 'N D C G'.

####  The Binary Nature Problem
Now, here's the big limitation: Hit Rate is binary, which means it treats all hits equally. Imagine two scenarios. In scenario A, you retrieve ten documents and exactly one of them is marginally relevant—maybe it mentions the topic but doesn't really help answer the question. In scenario B, you retrieve ten documents and eight of them are highly relevant, perfectly answering different aspects of the query. Both scenarios get the exact same Hit Rate of one hundred percent! The metric can't tell them apart.

####  Missing the Quality Picture
Hit Rate also doesn't care about where in your results the relevant document appears. Finding one relevant document in position one is treated the same as finding it in position ten, even though the first scenario is obviously better for your RAG system. And it doesn't capture the quality or relevance strength of the documents you found—a perfectly matching document counts the same as one that's barely on-topic.

####  When Hit Rate Isn't Enough
Once you've achieved a decent Hit Rate—say, above eighty or ninety percent—it stops being a useful optimization target. At that point, you're hitting something relevant for most queries, and you need finer-grained metrics to actually improve your system. You need to know things like: are you retrieving enough relevant documents? Are the most relevant ones ranked highly? Are you also retrieving a lot of irrelevant junk? Hit Rate can't answer any of those questions.

####  The Right Tool for the Job
The key takeaway is this: Hit Rate is a fantastic health check and a critical baseline, but it's not a silver bullet. Use it to ensure your retrieval system is working at a fundamental level, then graduate to more sophisticated metrics for optimization. Think of it as the first line of defense, not your only line of defense.

And that's Hit Rate! Simple, powerful, but with important limitations that you need to understand to use it effectively.`
        }
      ]
    },
    {
      id: 'metric-4',
      title: '4. Context Overlap Score',
      slides: [
        {
          id: 15,
          title: '4. Context Overlap Score — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <GSAPAnimated animation="slideInTop" duration={0.8} delay={0.1}>
                <h3>Definition</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <p>Measures how much of the needed answer content is present in retrieved context, indicating answer coverage and retrieval completeness.</p>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInLeft" delay={0.5}>
                <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.2} duration={0.6} delay={0.7}>
                <div><li>Higher overlap boosts faithfulness and completeness by ensuring necessary evidence is retrieved</li></div>
                <div><li>Reduces need for LLM to "fill gaps" with potentially incorrect information</li></div>
                <div><li>Identifies specific content gaps in knowledge bases</li></div>
              </GSAPStaggerList>

              <GSAPAnimated animation="bounceIn" delay={1.5}>
                <p>When working with reference answers, to validate retrieval sufficiency beyond Recall@K, for testing whether all required information is available, and when evaluating complex queries requiring multiple evidence pieces.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#646f1f',
          notes: `### Context Overlap Score — Overview
Welcome to our fourth metric, the Context Overlap Score. This one's all about making sure your retrieval system is actually grabbing everything you need.

#### What It Measures
Context Overlap Score 👉 pronounced CON-text OVER-lap measures how much of your needed answer content is actually present in the retrieved context. Think of it like checking if all the ingredients for your recipe are on the counter before you start cooking. It indicates both answer coverage, meaning can you build a complete answer, and retrieval completeness, meaning did your system fetch everything necessary.

#### Why This Matters
When overlap is high, three great things happen. First, it boosts faithfulness and completeness because all the necessary evidence is right there for the model to use. Second, it reduces the need for the LLM to fill gaps with potentially incorrect information, which is where hallucinations 👉 pronounced hal-loo-sin-AY-shuns often come from. Third, it helps you identify specific content gaps in your knowledge bases, showing you exactly where your documentation or data is missing key information.

#### When to Use This
Use Context Overlap Score when working with reference answers, since you need to know what facts should be in the answer. It's perfect for validating retrieval sufficiency beyond just Recall at K. Use it for testing whether all required information is available, especially when evaluating complex queries that need multiple pieces of evidence from different parts of your knowledge base.

#### Pros
The good stuff: This metric gives you concrete, actionable insights about what's missing from your retrieval. It directly measures whether your RAG system has the raw materials it needs to construct accurate answers. Unlike vaguer quality metrics, overlap scores point you to specific content problems you can fix.

#### Cons
The problems: This requires reference answers, which can be expensive to create at scale. You're essentially building a test dataset with ground truth answers. It's also sensitive to how you decompose facts, meaning your granularity choices affect the scores. It doesn't tell you whether the LLM actually uses the available context. And it may not capture semantic equivalence 👉 pronounced seh-MAN-tik ee-KWIV-uh-lence if using simple token-based matching.

Let's dive into how this actually works in practice.`
        },
        {
          id: 16,
          title: '4. Context Overlap Score — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <GSAPAnimated animation="rotateIn" duration={0.9} delay={0.1}>
                <h3>How It Works</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <p>Context Overlap Score evaluates how much of the expected answer information is present in the retrieved context. It can be calculated using token overlap, fact coverage, or semantic similarity.</p>
              </GSAPAnimated>

              <GSAPAnimated animation="scaleIn" delay={0.7}>
                <div>
                  <h3>Formula</h3>
                  <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                    {`Overlap = |Answer facts in context| / |Answer facts|`}
                  </pre>
                  <p>Alternatively: Token/phrase F1 score between reference answer and context, or semantic similarity between expected answer elements and retrieved chunks.</p>
                  <MermaidPopover
                    diagram={`graph TD
    A[Reference Answer] -->|Extract Facts| B[Fact Set: F1, F2, F3, F4, F5]
    C[Retrieved Context] -->|Check Presence| D{Which Facts Present?}
    B --> D
    D -->|Found| E[F1, F2, F3, F4]
    D -->|Missing| F[F5]
    E --> G[Overlap = 4/5 = 0.80]
    F -.->|Gap Identified| H[Update Knowledge Base]
    
    style A fill:#3b82f6
    style C fill:#3b82f6
    style E fill:#22c55e
    style F fill:#ef4444
    style G fill:#eab308`}
                    title="Context Overlap Score Calculation"
                  />
                </div>
              </GSAPAnimated>

              <GSAPAnimated animation="slideInBottom" delay={1.1}>
                <h3>Target Values</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} duration={0.6} delay={1.3}>
                <div><li>≥0.70 for general use cases</li></div>
                <div><li>≥0.85 for high-stakes applications</li></div>
                <div><li>Context window size often limits feasible target values</li></div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#646f1f',
          notes: `### Context Overlap Score — How It Works
Now let's break down the mechanics of how Context Overlap Score actually works.

#### The Calculation Process
Context Overlap Score evaluates how much of the expected answer information is present in your retrieved context. There are several ways to calculate this. You can use token overlap, where you match individual words or tokens. You can use fact coverage, where you break answers into atomic facts and check which ones appear. Or you can use semantic similarity 👉 pronounced seh-MAN-tik sim-ih-LAR-ih-tee, where embeddings measure if the meaning is present even if the exact wording differs.

#### The Basic Formula
The simplest formula is: Overlap equals the absolute value of answer facts found in context, divided by the absolute value of total answer facts. So if your reference answer needs five facts and your context contains four of them, you get four divided by five, which is point eight zero or eighty percent. Alternatively, you can compute a token or phrase F1 score between the reference answer and the context, which balances precision and recall. Or you can use semantic similarity between expected answer elements and the retrieved chunks.

#### Understanding Target Values
For general use cases, aim for point seven zero or seventy percent or higher. This means at least seventy percent of the needed facts are present. For high-stakes applications like medical or legal, target point eight five or eighty-five percent or higher. Keep in mind that context window size often limits what's feasible. If your model only accepts four thousand tokens, you might not be able to include everything, so adjust expectations accordingly.

#### Visualization Insight
Click the diagram icon to see how facts flow from the reference answer through the checking process to identify what's found versus what's missing. This visual makes it clear how gaps are identified and can guide improvements to your knowledge base.

#### When to Use Which Method
Use token overlap for quick approximations. Use fact coverage when you have structured test data with labeled facts. Use semantic similarity when you need to catch paraphrased content or when exact matching is too strict for your domain.

Let's look at a concrete example to make this real.`
        },
        {
          id: 17,
          title: '4. Context Overlap Score — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <h3>Example</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <p><strong>Query:</strong> "What are the eligibility requirements for program X?"</p>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.2} duration={0.6} delay={0.5}>
                <div><p>Reference answer requires 5 key facts about eligibility</p></div>
                <div><p>Retrieved context contains only 4 of these facts</p></div>
                <div><p><strong>Context Overlap Score = 4/5 = 0.80</strong></p></div>
              </GSAPStaggerList>

              <GSAPAnimated animation="bounceIn" delay={1.3}>
                <MermaidPopover
                  diagram={`sequenceDiagram
    participant Q as Query
    participant R as Reference Answer
    participant C as Context
    participant E as Evaluator
    
    Q->>R: Define Expected Facts
    Note over R: Fact 1: Age ≥ 18<br/>Fact 2: Resident<br/>Fact 3: Income < X<br/>Fact 4: No Prior Enrollment<br/>Fact 5: Valid ID
    Q->>C: Retrieve Context
    Note over C: Found: Facts 1,2,3,4<br/>Missing: Fact 5
    R->>E: Expected Facts (5)
    C->>E: Present Facts (4)
    E->>E: Calculate 4/5
    E-->>Q: Score: 0.80
    
    style Q fill:#3b82f6
    style R fill:#8b5cf6
    style C fill:#3b82f6
    style E fill:#eab308`}
                  title="Context Overlap Calculation Flow"
                />
              </GSAPAnimated>

              <GSAPAnimated animation="slideInRight" delay={1.6}>
                <h3>How to Calculate</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={1.9}>
                <p>Start with a reference answer for the query. Break it down into atomic facts or key information elements. Then check the retrieved context to see which of those facts are present. Count the facts found in context and divide by the total number of facts needed.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#646f1f',
          notes: `### Context Overlap Score — Implementation
Let's walk through a real implementation example to see how this works in practice.

#### The Example Scenario
Imagine a query asking "What are the eligibility requirements for program X?" Your reference answer, which you've created as ground truth, requires five key facts about eligibility. Maybe these are: age must be eighteen or older, must be a resident, income below a certain threshold, no prior enrollment, and valid identification required. When your retrieval system fetches context, it only contains four of these five facts. The fifth fact about valid ID is missing. So your Context Overlap Score is four divided by five, which equals point eight zero or eighty percent.

#### Understanding What This Tells You
This eighty percent score tells you that your retrieval is pretty good but not perfect. The user would get most of the answer, but they'd miss one critical eligibility requirement. In a real application, this could lead to someone applying who isn't eligible, wasting their time and creating frustration. The metric points you directly to the problem: your knowledge base or chunking strategy isn't surfacing the ID requirement.

#### The Step-by-Step Process
Click the diagram icon to visualize the flow. You start with the query, define expected facts from your reference answer, retrieve context from your system, then have an evaluator check which facts are present. The evaluator counts present facts, divides by total expected, and returns the score. This sequence makes it clear where information gets lost.

#### How to Calculate in Practice
Here's your implementation checklist. First, start with a reference answer for the query. This is your gold standard. Second, break it down into atomic facts or key information elements. Be consistent about granularity. Third, check the retrieved context to see which of those facts are present. You can do this with exact matching, fuzzy matching, or semantic similarity. Fourth, count the facts found in context and divide by the total number of facts needed. That's your overlap score.

#### Practical Tips
When breaking down answers into facts, aim for atomic statements that can't be subdivided further. "Age must be eighteen or older" is one fact. Don't split it into "age" and "eighteen" as separate facts. Use consistent decomposition rules across your evaluation set. Document your approach so other team members follow the same pattern. This consistency is crucial for reliable metrics.

Now let's talk about the broader implications and limitations.`
        },
        {
          id: 18,
          title: '4. Context Overlap Score — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.18} duration={0.7} delay={0.3}>
                <div><li>Higher overlap boosts faithfulness and completeness by ensuring necessary evidence is retrieved</li></div>
                <div><li>Reduces need for LLM to "fill gaps" with potentially incorrect information</li></div>
                <div><li>Identifies specific content gaps in knowledge bases</li></div>
              </GSAPStaggerList>

              <GSAPAnimated animation="rotateIn" delay={1.2}>
                <MermaidPopover
                  diagram={`graph LR
    A[Context Overlap Score] --> B[High ≥0.85]
    A --> C[Medium 0.70-0.84]
    A --> D[Low <0.70]
    
    B --> E[✓ Complete Answers]
    B --> F[✓ High Faithfulness]
    B --> G[✓ Low Hallucination]
    
    C --> H[⚠ Partial Gaps]
    C --> I[⚠ May Need LLM Inference]
    
    D --> J[✗ Major Gaps]
    D --> K[✗ High Risk]
    D --> L[✗ Poor Answer Quality]
    
    style B fill:#22c55e
    style C fill:#eab308
    style D fill:#ef4444
    style E fill:#22c55e
    style F fill:#22c55e
    style G fill:#22c55e
    style J fill:#ef4444
    style K fill:#ef4444
    style L fill:#ef4444`}
                  title="How Overlap Scores Affect RAG Quality"
                />
              </GSAPAnimated>

              <GSAPAnimated animation="slideInBottom" delay={1.5}>
                <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.2} duration={0.6} delay={1.7}>
                <div><li>Requires reference answers, which can be expensive to create at scale</li></div>
                <div><li>Sensitive to how facts are decomposed (granularity varies)</li></div>
                <div><li>Doesn't measure whether the LLM actually uses the available context</li></div>
                <div><li>May not capture semantic equivalence if using token-based matching</li></div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#646f1f',
          notes: `### Context Overlap Score — Considerations
Let's wrap up Context Overlap Score by examining its impact on your RAG system and understanding its limitations.

#### Impact on RAG Performance
When you have high context overlap, three powerful benefits emerge. First, it boosts faithfulness and completeness by ensuring all necessary evidence is retrieved. The LLM doesn't have to guess or make logical leaps. Second, it reduces the need for the LLM to fill gaps with potentially incorrect information. When all facts are present, there's nothing to hallucinate. Third, it identifies specific content gaps in your knowledge bases, giving you a roadmap for documentation improvements.

#### Understanding the Impact Levels
Click the diagram icon to visualize how different overlap scores affect your system. High scores, eighty-five percent or above, give you complete answers, high faithfulness, and low hallucination risk. Medium scores, between seventy and eighty-four percent, indicate partial gaps where the LLM may need to make some inferences, which introduces moderate risk. Low scores, below seventy percent, signal major gaps, high risk, and poor answer quality. These ranges help you triage which queries need attention first.

#### When to Use This Metric
Context Overlap Score is ideal when you have or can create reference answers. It's perfect for evaluating complex queries that require multiple pieces of evidence. Use it to validate that your chunking strategy and retrieval parameters are actually surfacing the content you need. It's also valuable for A/B testing different retrieval configurations to see which one captures more of the necessary facts.

#### Pros Summary
The good stuff: This metric provides concrete, actionable feedback. It tells you exactly what's missing, not just that something is wrong. It directly measures the raw materials available for answer generation. Unlike vague quality scores, it gives you specific facts to track down and fix. It's relatively objective once you've defined your fact decomposition rules.

#### Cons and Limitations
The problems: First, it requires reference answers, which are expensive to create at scale. Building a test set with hundreds of queries and decomposed facts takes significant time and expertise. Second, it's sensitive to how facts are decomposed. Different annotators might split facts differently, affecting consistency. Third, it doesn't measure whether the LLM actually uses the available context. Perfect overlap doesn't guarantee the model reads and incorporates everything. Fourth, it may not capture semantic equivalence if using token-based matching. Paraphrased content might be marked as missing even when the meaning is there.

#### Practical Recommendations
Start with a small but diverse set of reference queries covering your main use cases. Document your fact decomposition guidelines clearly. Consider using semantic similarity rather than exact matching to catch paraphrases. Monitor both overlap and final answer quality to ensure high overlap translates to better outputs. Use this metric alongside faithfulness and answer relevance for a complete picture.

That wraps up Context Overlap Score. Next, we'll move to Context Relevance Score, which evaluates quality rather than coverage.`
        }
      ]
    },
    {
      id: 'metric-5',
      title: '5. Context Relevance Score (LLM-Scored)',
      slides: [
        {
          id: 19,
          title: '5. Context Relevance Score — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>LLM-as-judge score of how relevant the retrieved chunks are to the query, measuring the quality of retrieval context alignment to user information needs.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Improves precision by identifying and removing irrelevant context</li>
                <li>Reduces hallucinations caused by misleading information</li>
                <li>Enables continuous monitoring without reference answers</li>
                <li>Helps identify specific queries with poor retrieval performance</li>
              </ul>

              <p>When ground truth relevance labels are unavailable, for online monitoring of production RAG systems, during A/B testing of retrieval approaches, and to evaluate quality without human annotation effort.</p>
            </div>
          ),
          backgroundColor: '#1f656f',
          notes: ''
        },
        {
          id: 20,
          title: '5. Context Relevance Score — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>An LLM judge evaluates each retrieved chunk for its relevance to the query on a 0-1 scale. The scores are then averaged across all chunks to produce an overall context relevance score.</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`Context Relevance = mean(score_i)
where score_i ∈ [0,1] for each chunk`}
              </pre>
              <p>Have an LLM judge each chunk's relevance to the query on a 0-1 scale. Optional: Weight by chunk length for more accurate representation. Compute mean across all retrieved chunks.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>≥0.70 considered good performance</li>
                <li>≥0.80 indicates strong retrieval alignment</li>
                <li>Scores &lt;0.50 often signal problematic retrieval</li>
                <li>Thresholds may vary by domain complexity</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f656f',
          notes: ''
        },
        {
          id: 21,
          title: '5. Context Relevance Score — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p><strong>Query:</strong> "How do I reset my account password?"</p>
              <p>LLM relevance scores for 3 retrieved chunks:</p>
              <ul style={{ marginTop: '14px' }}>
                <li>Chunk 1 (password reset): 0.9</li>
                <li>Chunk 2 (account security): 0.8</li>
                <li>Chunk 3 (billing info): 0.3</li>
              </ul>
              <p><strong>Context Relevance = (0.9 + 0.8 + 0.3) / 3 = 0.67</strong></p>

              <h3>How to Calculate</h3>
              <p>For each chunk in the retrieved context, prompt an LLM judge to rate its relevance to the query on a 0-1 scale. Collect all the scores and compute the average. This gives you an automated quality assessment without requiring manual labels.</p>
            </div>
          ),
          backgroundColor: '#1f656f',
          notes: ''
        },
        {
          id: 22,
          title: '5. Context Relevance Score — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Improves precision by identifying and removing irrelevant context</li>
                <li>Reduces hallucinations caused by misleading information</li>
                <li>Enables continuous monitoring without reference answers</li>
                <li>Helps identify specific queries with poor retrieval performance</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>LLM judge quality and consistency can vary across models</li>
                <li>Adds latency and cost for evaluation (requires additional LLM calls)</li>
                <li>May not align perfectly with human judgment</li>
                <li>Requires careful prompt engineering to get reliable scores</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f656f',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-6',
      title: '6. Hallucination Rate',
      slides: [
        {
          id: 23,
          title: '6. Hallucination Rate — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Measures the frequency of unsupported or invented claims in generated answers that cannot be traced back to the retrieved context.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Lower hallucination rates directly increase trust in the system</li>
                <li>Reduces misinformation risk and potential legal/reputation damage</li>
                <li>Critical for safety-sensitive domains where incorrect information can cause harm</li>
                <li>Enables reliable citation of source materials</li>
              </ul>

              <p>As a primary generation quality guardrail, during regression testing before deployment, for continuous production monitoring, and when safety and accuracy are mission-critical.</p>
            </div>
          ),
          backgroundColor: '#6f1f6d',
          notes: ''
        },
        {
          id: 24,
          title: '6. Hallucination Rate — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Hallucination Rate measures the proportion of claims in the answer that lack supporting evidence in the retrieved context. It's the inverse of faithfulness.</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`HallucinationRate = 1 - Faithfulness
= (# unsupported claims) / (# total claims)`}
              </pre>
              <p>Extract all factual claims from the answer. Check each claim against the retrieved context. Count claims without supporting evidence. Implementation options: HHEM-2.1-Open model or LLM judge.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>&lt;5% for high-stakes applications (medical, legal, financial)</li>
                <li>&lt;10-15% for general-purpose applications</li>
                <li>Zero tolerance for critical facts in regulated domains</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6f1f6d',
          notes: ''
        },
        {
          id: 25,
          title: '6. Hallucination Rate — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p>Answer contains 12 factual claims</p>
              <p>Context supports 10 claims</p>
              <p>Context doesn't support 2 claims (invented details)</p>
              <p><strong>Hallucination Rate = 2/12 = 16.7% (exceeds target)</strong></p>

              <h3>How to Calculate</h3>
              <p>Parse the generated answer into individual factual claims. For each claim, check whether it can be verified against the retrieved context. Count the number of unsupported claims and divide by the total number of claims. Use automated tools like HHEM-2.1-Open or an LLM judge for scaling.</p>
            </div>
          ),
          backgroundColor: '#6f1f6d',
          notes: ''
        },
        {
          id: 26,
          title: '6. Hallucination Rate — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Lower hallucination rates directly increase trust in the system</li>
                <li>Reduces misinformation risk and potential legal/reputation damage</li>
                <li>Critical for safety-sensitive domains where incorrect information can cause harm</li>
                <li>Enables reliable citation of source materials</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Claim extraction can be challenging and inconsistent</li>
                <li>Not all unsupported claims are harmful — some may be reasonable inferences</li>
                <li>Detection quality depends on the evaluation method used</li>
                <li>May penalize valid general knowledge not in the specific context</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6f1f6d',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-7',
      title: '7. Grounded Answer Score',
      slides: [
        {
          id: 27,
          title: '7. Grounded Answer Score — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Measures whether answer cites retrieved facts correctly (especially in citation-enabled RAG systems that provide sources for their claims).</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Encourages precise evidence use with traceable citations</li>
                <li>Improves user trust by making information verifiable</li>
                <li>Enables better debugging of hallucination sources</li>
                <li>Supports regulatory compliance with evidence requirements</li>
              </ul>

              <p>For systems that expose citations or links to sources, legal, medical, or financial applications requiring auditability, compliance-focused applications that need traceable evidence, and when building user interfaces that highlight source evidence.</p>
            </div>
          ),
          backgroundColor: '#6f1f32',
          notes: ''
        },
        {
          id: 28,
          title: '7. Grounded Answer Score — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Grounded Answer Score evaluates whether claims in the answer correctly cite the supporting evidence from retrieved context. It combines factual accuracy with citation accuracy.</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`GAS = (# claims with correct citation-supported spans) / (# total claims)`}
              </pre>
              <p>Process: Identify each claim in the generated answer. For each claim with a citation, verify the cited span supports the claim. Count correctly supported claims and divide by total claims.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>≥0.90 for general applications</li>
                <li>≥0.95 for strict domains (legal, medical, financial)</li>
                <li>Lower scores indicate inaccurate citation or attribution issues</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6f1f32',
          notes: ''
        },
        {
          id: 29,
          title: '7. Grounded Answer Score — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p><strong>Answer:</strong> "The medication has three primary side effects[1]. It may cause drowsiness[2], headaches[3], and in rare cases, dizziness[4]."</p>
              <ul style={{ marginTop: '14px' }}>
                <li>10 total claims in the answer</li>
                <li>9 claims correctly cited (1 citation doesn't support its claim)</li>
              </ul>
              <p><strong>GAS = 9/10 = 0.90</strong></p>

              <h3>How to Calculate</h3>
              <p>Extract all claims from the answer along with their citations. For each cited claim, verify that the referenced source actually supports it. Count the correctly cited claims and divide by total claims. This requires both extraction and verification steps.</p>
            </div>
          ),
          backgroundColor: '#6f1f32',
          notes: ''
        },
        {
          id: 30,
          title: '7. Grounded Answer Score — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Encourages precise evidence use with traceable citations</li>
                <li>Improves user trust by making information verifiable</li>
                <li>Enables better debugging of hallucination sources</li>
                <li>Supports regulatory compliance with evidence requirements</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Only applicable to systems that generate citations</li>
                <li>Requires more complex evaluation infrastructure</li>
                <li>Citation format and granularity can vary widely</li>
                <li>May penalize citations to partially supporting evidence</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6f1f32',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-8',
      title: '8. Faithfulness Score',
      slides: [
        {
          id: 31,
          title: '8. Faithfulness Score — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Checks whether claims in the generated answer are fully supported by the retrieved context, ensuring factual consistency between response and evidence.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Higher faithfulness directly reduces hallucinations</li>
                <li>Improves factual accuracy and system trustworthiness</li>
                <li>Essential for detecting prompt/context misalignments</li>
                <li>Foundation for implementing safety guardrails</li>
              </ul>

              <p>Core hallucination control metric for all RAG systems, pre-deployment quality assurance checks, continuous monitoring in production, and when legal or compliance risks exist from incorrect information.</p>
            </div>
          ),
          backgroundColor: '#4c1f6f',
          notes: ''
        },
        {
          id: 32,
          title: '8. Faithfulness Score — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Faithfulness Score measures what proportion of claims in the answer can be verified against the retrieved context. It's the complement of hallucination rate.</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`Faithfulness = (# supported claims) / (# total claims)`}
              </pre>
              <p>Implementation: Extract individual claims from the generated answer. Check each claim against retrieved context. Frameworks like RAGAS or HHEM-2.1-Open automate this.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>≥0.80 for general-purpose RAG applications</li>
                <li>≥0.90 for high-stakes domains (medical, legal, finance)</li>
                <li>Consider sampling confidence intervals when evaluating</li>
              </ul>
            </div>
          ),
          backgroundColor: '#4c1f6f',
          notes: ''
        },
        {
          id: 33,
          title: '8. Faithfulness Score — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p><strong>Context:</strong> "Our return policy allows returns within 30 days with receipt. Damaged items cannot be returned."</p>
              <p><strong>Answer:</strong> "You can return items within 30 days if you have the receipt. Damaged items aren't eligible. All returns receive store credit."</p>
              <p>Claims: 3 total (30-day policy, receipt required, store credit)</p>
              <p>Supported claims: 2 (last claim not supported)</p>
              <p><strong>Faithfulness = 2/3 = 0.67</strong></p>

              <h3>How to Calculate</h3>
              <p>Break the answer into atomic claims. For each claim, check if it can be verified from the retrieved context. Count supported claims and divide by total claims. Use tools like RAGAS or HHEM-2.1-Open for automation.</p>
            </div>
          ),
          backgroundColor: '#4c1f6f',
          notes: ''
        },
        {
          id: 34,
          title: '8. Faithfulness Score — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Higher faithfulness directly reduces hallucinations</li>
                <li>Improves factual accuracy and system trustworthiness</li>
                <li>Essential for detecting prompt/context misalignments</li>
                <li>Foundation for implementing safety guardrails</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Claim extraction quality varies across evaluation methods</li>
                <li>May penalize valid reasoning or inference from context</li>
                <li>Context may not contain all necessary background information</li>
                <li>Evaluation can be computationally expensive at scale</li>
              </ul>
            </div>
          ),
          backgroundColor: '#4c1f6f',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-9',
      title: '9. Answer Completeness',
      slides: [
        {
          id: 35,
          title: '9. Answer Completeness — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Measures whether the answer addresses all required parts of the query, especially for multi-part or complex questions.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Improves user satisfaction by addressing all query aspects</li>
                <li>Reduces follow-up queries and conversation turns</li>
                <li>When combined with faithfulness, ensures comprehensive and accurate responses</li>
                <li>Essential for establishing trust in expert domains</li>
              </ul>

              <p>For multi-part questions with explicit sub-questions, enterprise support where complete responses are critical, analytics answers that must address multiple aspects, and when assessing response quality beyond mere factuality.</p>
            </div>
          ),
          backgroundColor: '#1f446f',
          notes: ''
        },
        {
          id: 36,
          title: '9. Answer Completeness — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Answer Completeness assesses whether all parts of a multi-faceted query are addressed in the response. It measures coverage of required sub-answers.</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`Completeness = (# required sub-answers present) / (# required)`}
              </pre>
              <p>Where required sub-answers are the parts of the query that need addressing. Can use reference decomposition or LLM judge checklist to identify parts.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>≥0.85 typical for general applications</li>
                <li>≥0.95 for high-stakes domains (medical, legal, finance)</li>
                <li>Balance with other metrics like faithfulness and relevance</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f446f',
          notes: ''
        },
        {
          id: 37,
          title: '9. Answer Completeness — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p><strong>Query:</strong> "What's the price, warranty length, and return policy for this product?"</p>
              <p><strong>Answer:</strong> "The product costs $199 and comes with a 2-year warranty."</p>
              <p>Analysis: The answer addresses 2 of 3 required parts (missing return policy)</p>
              <p><strong>Completeness = 2/3 = 0.67</strong></p>

              <h3>How to Calculate</h3>
              <p>Parse the query to identify all sub-questions or required information elements. Check the answer to see which elements are addressed. Count the addressed elements and divide by the total required elements.</p>
            </div>
          ),
          backgroundColor: '#1f446f',
          notes: ''
        },
        {
          id: 38,
          title: '9. Answer Completeness — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Improves user satisfaction by addressing all query aspects</li>
                <li>Reduces follow-up queries and conversation turns</li>
                <li>When combined with faithfulness, ensures comprehensive and accurate responses</li>
                <li>Essential for establishing trust in expert domains</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Subjective determination of what constitutes "complete"</li>
                <li>May encourage verbose answers that include unnecessary information</li>
                <li>Difficult to apply to open-ended or exploratory queries</li>
                <li>Can conflict with brevity goals in some applications</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f446f',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-10',
      title: '10. Answer Specificity',
      slides: [
        {
          id: 39,
          title: '10. Answer Specificity — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Evaluates whether responses avoid vague or generic phrasing, instead providing concrete, actionable details that are specific to the query context.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Drives more useful, actionable outputs without sacrificing factuality</li>
                <li>Encourages models to fully utilize context details instead of generic responses</li>
                <li>Improves user satisfaction with concrete information</li>
                <li>Reduces follow-up questions seeking clarification</li>
              </ul>

              <p>For product guidance where detailed steps matter, procedural or technical FAQs, analytics and data summary use cases, and when users need actionable rather than abstract advice.</p>
            </div>
          ),
          backgroundColor: '#1f6f21',
          notes: ''
        },
        {
          id: 40,
          title: '10. Answer Specificity — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Answer Specificity measures the level of detail and concreteness in responses. It can be assessed using LLM judges or by measuring information density.</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`Option 1: LLM-judged specificity score [0-1]
Option 2: Info-density = (# named entities + numbers) / answer tokens`}
              </pre>
              <p>Approaches: LLM judge evaluates specificity based on detail level and concreteness. Info density measures content-to-token ratio (normalized to [0-1]). Entity recognition counts named objects, dates, quantities, etc.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>≥0.60 with faithfulness gate in place</li>
                <li>≥0.70 for domain-tuned systems</li>
                <li>Balance with brevity goals - overly specific responses can be verbose</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f6f21',
          notes: ''
        },
        {
          id: 41,
          title: '10. Answer Specificity — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p><strong>Query:</strong> "How do I troubleshoot connection issues?"</p>
              <p><strong>Low Specificity:</strong> "Try checking your connection settings and restart if needed."</p>
              <p><strong>High Specificity:</strong> "Open Settings &gt; Network &gt; WiFi, toggle WiFi off for 10 seconds, then reconnect to your 5GHz network. If error code E-4019 persists, update router firmware to v2.5+"</p>

              <h3>How to Calculate</h3>
              <p>Use an LLM judge to score the answer's specificity on a 0-1 scale based on concrete details, specific values, and actionable steps. Alternatively, calculate information density by counting named entities, numbers, and technical terms relative to total tokens.</p>
            </div>
          ),
          backgroundColor: '#1f6f21',
          notes: ''
        },
        {
          id: 42,
          title: '10. Answer Specificity — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Drives more useful, actionable outputs without sacrificing factuality</li>
                <li>Encourages models to fully utilize context details instead of generic responses</li>
                <li>Improves user satisfaction with concrete information</li>
                <li>Reduces follow-up questions seeking clarification</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Can conflict with brevity and conciseness goals</li>
                <li>May not be appropriate for all query types (some need general answers)</li>
                <li>High specificity can reduce answer generalizability</li>
                <li>Risks over-fitting to context details that may not be relevant</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f6f21',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-11',
      title: '11. Noise Density',
      slides: [
        {
          id: 43,
          title: '11. Noise Density — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Measures the percentage of irrelevant tokens in retrieved context (context pollution) that contribute to prompt inefficiency.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Reduces distraction for the LLM by removing irrelevant context</li>
                <li>Lowers token costs and latency by minimizing context size</li>
                <li>Improves grounding probability by focusing LLM attention on relevant information</li>
                <li>Enables more efficient use of limited context windows</li>
              </ul>

              <p>When working with long-context models, during retrieval and reranking system tuning, for optimizing cost and latency control, and when refining chunk sizes and boundaries.</p>
            </div>
          ),
          backgroundColor: '#6f4a1f',
          notes: ''
        },
        {
          id: 44,
          title: '11. Noise Density — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Noise Density quantifies the proportion of tokens in the retrieved context that don't contribute to answering the query. Lower is better.</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`NoiseDensity = (Irrelevant tokens in context) / (Total context tokens)`}
              </pre>
              <p>Approaches: Per-chunk relevance × chunk length, token-level labeling via LLM or embedding relevance, or manual evaluation of token necessity.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>&lt;30% for short context windows</li>
                <li>&lt;20% for long context systems</li>
                <li>Lower is better - aim to minimize irrelevant content</li>
                <li>High-performing systems may achieve &lt;15% for targeted domains</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6f4a1f',
          notes: ''
        },
        {
          id: 45,
          title: '11. Noise Density — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p>Retrieved context: 3,000 tokens total</p>
              <p>Irrelevant tokens: 800 tokens (tangential information)</p>
              <p><strong>Noise Density = 800/3,000 = 26.7%</strong></p>
              <p><em>This indicates moderate noise that could be improved through better retrieval or reranking.</em></p>

              <h3>How to Calculate</h3>
              <p>Evaluate each chunk or section in the retrieved context for relevance. Multiply relevance scores by chunk token counts. Sum irrelevant tokens and divide by total context tokens. Use LLM judges or embedding similarity for automated assessment.</p>
            </div>
          ),
          backgroundColor: '#6f4a1f',
          notes: ''
        },
        {
          id: 46,
          title: '11. Noise Density — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Reduces distraction for the LLM by removing irrelevant context</li>
                <li>Lowers token costs and latency by minimizing context size</li>
                <li>Improves grounding probability by focusing LLM attention on relevant information</li>
                <li>Enables more efficient use of limited context windows</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Determining "irrelevance" can be subjective or context-dependent</li>
                <li>Some context may seem irrelevant but provide useful background</li>
                <li>Fine-grained token-level evaluation is computationally expensive</li>
                <li>Over-optimization can lead to losing important nuance</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6f4a1f',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-12',
      title: '12. Context Compression Efficiency',
      slides: [
        {
          id: 47,
          title: '12. Context Compression Efficiency — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>How compactly key information is expressed in the prompt while preserving coverage of essential information for answer generation.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Maintains answer accuracy while significantly lowering token usage</li>
                <li>Reduces inference latency through smaller context windows</li>
                <li>Lowers operational costs for token-priced LLM APIs</li>
                <li>Enables more complex RAG architectures within the same context budget</li>
              </ul>

              <p>When implementing context summarization/condensation, during reranker pruning optimization, for prompt engineering to reduce token usage, and when optimizing context-window usage in tight budget scenarios.</p>
            </div>
          ),
          backgroundColor: '#466f1f',
          notes: ''
        },
        {
          id: 48,
          title: '12. Context Compression Efficiency — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Context Compression Efficiency measures how well information density is optimized in the prompt. It evaluates information coverage per token used.</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`CCE = Coverage_τ / Tokens
- OR -
Compute MinimalTokens achieving Coverage ≥ τ`}
              </pre>
              <p>Where Coverage_τ is contextual recall at threshold τ, and Tokens is the token count used in context.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Seek higher CCE vs. baseline</li>
                <li>Typically aim for ≥20–40% token reduction at same coverage level</li>
                <li>Compare different compression approaches against each other</li>
              </ul>
            </div>
          ),
          backgroundColor: '#466f1f',
          notes: ''
        },
        {
          id: 49,
          title: '12. Context Compression Efficiency — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p><strong>Baseline:</strong> 85% coverage achieved with 2,000 tokens</p>
              <p><strong>Optimized:</strong> Same 85% coverage with only 1,200 tokens</p>
              <p><strong>Result: CCE improves by ~67% (compression ratio 1.67:1)</strong></p>
              <p><strong>Impact:</strong> 40% token reduction without sacrificing information</p>

              <h3>How to Calculate</h3>
              <p>Measure the coverage metric (e.g., answer quality) with baseline context. Apply compression techniques (summarization, pruning, reranking). Measure coverage again with compressed context. Compare tokens used at equivalent coverage levels.</p>
            </div>
          ),
          backgroundColor: '#466f1f',
          notes: ''
        },
        {
          id: 50,
          title: '12. Context Compression Efficiency — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Maintains answer accuracy while significantly lowering token usage</li>
                <li>Reduces inference latency through smaller context windows</li>
                <li>Lowers operational costs for token-priced LLM APIs</li>
                <li>Enables more complex RAG architectures within the same context budget</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Compression can remove subtle but important details</li>
                <li>Requires careful validation that coverage is truly maintained</li>
                <li>Summarization/compression adds processing overhead and latency</li>
                <li>May not be beneficial for already-concise contexts</li>
              </ul>
            </div>
          ),
          backgroundColor: '#466f1f',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-13',
      title: '13. Latency-Cost Tradeoff Score',
      slides: [
        {
          id: 51,
          title: '13. Latency-Cost Tradeoff Score — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Overall efficiency of the RAG pipeline under latency and budget constraints, balancing performance with resource utilization.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Balances user experience responsiveness with operational costs</li>
                <li>Enables sustainable scaling of RAG systems to more users</li>
                <li>Provides framework for data-driven infrastructure decisions</li>
                <li>Helps identify optimization opportunities in the pipeline</li>
              </ul>

              <p>When selecting LLM/embedding models or rerankers, for tuning top-K retrieval parameters, optimizing batching and caching strategies, during deployment sizing and scaling decisions, and for comparing system configurations under budget constraints.</p>
            </div>
          ),
          backgroundColor: '#1f696f',
          notes: ''
        },
        {
          id: 52,
          title: '13. Latency-Cost Tradeoff Score — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Latency-Cost Tradeoff Score measures how efficiently the system operates within specified latency and cost budgets, with a configurable weight parameter.</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`LCTS = 1 − [α·(p50 latency/latency budget) + (1−α)·(token cost/cost budget)]`}
              </pre>
              <p>Where α is a weight parameter (0-1) for latency vs. cost importance, p50 latency is the median response time, and the result is clipped to range [0,1].</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>≥0.70 is generally acceptable</li>
                <li>≥0.85 indicates strong performance</li>
                <li>Adjust thresholds based on specific application requirements</li>
                <li>Higher-priority applications may require stricter thresholds</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f696f',
          notes: ''
        },
        {
          id: 53,
          title: '13. Latency-Cost Tradeoff Score — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p><strong>Given:</strong></p>
              <ul style={{ marginTop: '14px' }}>
                <li>α = 0.6 (latency slightly more important than cost)</li>
                <li>Latency use: 70% of budget (0.7)</li>
                <li>Cost use: 50% of budget (0.5)</li>
              </ul>
              <p><strong>LCTS = 1 − [0.6·0.7 + 0.4·0.5]</strong></p>
              <p><strong>LCTS = 1 − [0.42 + 0.20] = 0.38</strong></p>
              <p><em>This indicates suboptimal performance that needs optimization.</em></p>

              <h3>How to Calculate</h3>
              <p>Measure p50 latency and token costs in production. Compare against your budget constraints. Apply the formula with your chosen α weight. Use the score to compare configurations or track optimization progress.</p>
            </div>
          ),
          backgroundColor: '#1f696f',
          notes: ''
        },
        {
          id: 54,
          title: '13. Latency-Cost Tradeoff Score — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Balances user experience responsiveness with operational costs</li>
                <li>Enables sustainable scaling of RAG systems to more users</li>
                <li>Provides framework for data-driven infrastructure decisions</li>
                <li>Helps identify optimization opportunities in the pipeline</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Weight parameter (α) selection can be subjective</li>
                <li>Budget constraints may change over time</li>
                <li>Doesn't directly measure answer quality</li>
                <li>May not capture all relevant cost factors (storage, compute, etc.)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f696f',
          notes: ''
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary & Next Steps',
      slides: [
        {
          id: 55,
          title: 'Summary & Next Steps',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.8', textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1.5rem', borderRadius: '10px' }}>
                  <div style={{ color: '#3b82f6', marginBottom: '1rem' }}>
                    <SvgIcon iconName="duo-chart-line" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Key Takeaways</strong>
                  </div>
                  <ul style={{ marginLeft: '1.5rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>
                      <strong>Retrieval metrics</strong> (1-4) diagnose missed evidence
                    </li>
                    <li>
                      <strong>Context quality</strong> (5) evaluates relevance alignment
                    </li>
                    <li>
                      <strong>Answer quality</strong> (6-10) measures faithfulness & completeness
                    </li>
                    <li>
                      <strong>Efficiency metrics</strong> (11-13) optimize cost & latency
                    </li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1.5rem', borderRadius: '10px' }}>
                  <div style={{ color: '#10b981', marginBottom: '1rem' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Best Practices</strong>
                  </div>
                  <ul style={{ marginLeft: '1.5rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>
                      Use multiple metrics together for full picture
                    </li>
                    <li>
                      Start with retrieval & faithfulness baselines
                    </li>
                    <li>
                      Continuously monitor in production
                    </li>
                    <li>
                      Balance quality with efficiency constraints
                    </li>
                  </ul>
                </div>
              </div>

              <div style={{ background: 'rgba(139, 92, 246, 0.15)', padding: '1.5rem', borderRadius: '10px', marginBottom: '1.5rem' }}>
                <div style={{ color: '#8b5cf6', marginBottom: '1rem' }}>
                  <SvgIcon iconName="duo-rocket" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                  <strong>Implementation Roadmap</strong>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', fontSize: '1.2rem' }}>
                  <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      Phase 1: Foundation
                    </div>
                    <div>Implement Recall@K, Precision@K, and Faithfulness Score</div>
                  </div>
                  <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      Phase 2: Quality
                    </div>
                    <div>Add Context Relevance, Answer Completeness, and Hallucination Rate</div>
                  </div>
                  <div style={{ background: 'rgba(245, 158, 11, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      Phase 3: Optimization
                    </div>
                    <div>Track Noise Density, Context Compression, and Latency-Cost Tradeoff</div>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.5rem', background: 'rgba(245, 158, 11, 0.15)', borderRadius: '10px', textAlign: 'left', fontSize: '1.2rem' }}>
                <SvgIcon iconName="duo-circle-info" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                <strong>Remember:</strong> No single metric tells the full story. Use combinations to diagnose root causes: missed retrieval vs. ungrounded reasoning vs. inefficient context.
              </div>
            </div>
          ),
          backgroundColor: '#1f696f',
          notes: ''
        }
      ]
    }
  ]
};

