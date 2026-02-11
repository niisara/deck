import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated } from '../components/GSAPAnimated';

export const multiStepRetrievalDeck: Deck = {
  id: 'multi-step-retrieval-deck',
  name: '9 Multi-Step Retrieval Strategies',
  description: 'Retrieve → Generate → Retrieve - A comprehensive guide to techniques that improve RAG through multi-step processes',
  category: 'RAG',
  theme: 'night',
  slides: [],
  slideGroups: [
    {
      id: 'intro',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          center: true,
          title: 'Multi-Step Retrieval Strategies',
          content: (
            <div style={{ marginTop: '20px', color: '#fff' }}>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <h2>Retrieve → Generate → Retrieve</h2>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.5}>
                <p style={{ fontSize: '1.4rem', marginTop: '30px' }}>
                  <SvgIcon iconName="duo-arrows-rotate" sizeName="2x" style={{ marginRight: '15px', verticalAlign: 'middle' }} darkModeInvert={true} />
                  A comprehensive guide to 9 techniques that improve retrieval augmented generation through multi-step processes
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.8}>
                <p style={{ fontSize: '1.2rem' }}>
                  Find the right strategy for your RAG pipeline with these detailed cheat sheets
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={1.0}>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1e2f5d',
          notes: `### Multi-Step Retrieval Strategies

#### Welcome and Introduction

[cheerfully] Welcome everyone to this comprehensive guide on multi-step retrieval strategies for retrieval augmented generation, or RAG systems. [energetic] Today we're going to explore nine powerful techniques that go beyond simple single-shot retrieval to dramatically improve the quality and accuracy of your RAG applications.

#### What We Mean by Multi-Step Retrieval

[conversational] When we talk about multi-step retrieval, we're referring to an iterative approach where we don't just retrieve documents once and call it done. Instead, we retrieve information, generate insights or queries from what we found, and then retrieve again. This "retrieve, generate, retrieve" pattern allows our systems to refine their understanding and gather more relevant information with each iteration.

[storytelling] Think of it like having a conversation with a research librarian. You don't just ask one question and walk away with the first book they hand you. Instead, you ask a question, they bring you some materials, you look through them and ask a more refined question based on what you learned, and they bring you even better materials. Multi-step retrieval works the same way.

#### Why This Matters

[confidently] These techniques are especially valuable when dealing with complex questions that require deep understanding, questions that span multiple topics, or situations where you need to cite your sources accurately. They help us build RAG systems that are more robust, more accurate, and better able to handle the real-world complexity of information retrieval.

#### What You'll Learn Today

[excited] We'll cover nine distinct strategies, each with its own strengths and ideal use cases. For each technique, you'll get a complete cheat sheet covering its goal, how it works, when to use it, implementation steps, and the pros and cons you need to consider.

[enthusiastically] Let's dive in and explore how these strategies can transform your RAG applications.`
        },
        {
          id: 2,
          title: 'Overview: Why Multi-Step Retrieval?',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4fc3f7' }}>
                      <SvgIcon iconName="duo-circle-nodes" sizeName="2x" darkModeInvert={true} />
                      What It Is
                    </h3>
                    <p>Iteratively combine retrieval and generation to refine queries, evidence, and answers</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#81c784' }}>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                      Why It Matters
                    </h3>
                    <p>Improves recall, precision, and robustness for complex questions vs single-shot RAG</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffb74d' }}>
                      <SvgIcon iconName="duo-clock" sizeName="2x" darkModeInvert={true} />
                      When To Use
                    </h3>
                    <p>Ambiguous queries, multi-hop reasoning, long-form answers, citation needs</p>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.5}>
                  <div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ba68c8' }}>
                      <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                      What You'll Get
                    </h3>
                    <p>9 technique cheat sheets (Goal, How It Works, When to Use, Steps, Pros, Cons)</p>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.7}>
                <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f06292' }}>
                    <SvgIcon iconName="duo-gear" sizeName="2x" darkModeInvert={true} />
                    Implementation Tips
                  </h3>
                  <p>Set stop conditions, cache embeddings, log traces, evaluate with faithfulness + coverage</p>
                  <p style={{ marginTop: '10px' }}>
                    Each strategy offers different trade-offs in precision, recall, latency, and implementation complexity
                  </p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1e2f5d',
          notes: `### Overview: Why Multi-Step Retrieval?

#### The Core Concept

[lecture] Let's start by understanding what multi-step retrieval really means. [conversational] At its heart, it's about iteratively combining retrieval and generation to continuously refine our understanding. Instead of asking a question once and accepting whatever documents we get back, we use the initial results to generate better queries, gather more evidence, and produce more accurate answers.

\`\`\`mermaid
graph LR
    A[User Query] --> B[Initial Retrieval]
    B --> C[Generate Insights]
    C --> D[Refined Retrieval]
    D --> E[Better Results]
    style A fill:#4fc3f7
    style E fill:#81c784
\`\`\`

#### Why Single-Shot RAG Falls Short

[cautiously] Traditional single-shot RAG systems retrieve documents once and generate an answer. This works fine for simple, well-formed questions. But when questions are ambiguous, require reasoning across multiple pieces of information, or need deep understanding of context, single-shot approaches struggle. [disappointed] They can miss crucial information, retrieve irrelevant documents, or fail to connect the dots between related concepts.

#### The Power of Iteration

[pleased] Multi-step retrieval solves these problems through iteration. It improves recall by finding documents that weren't obvious from the initial query. It improves precision by using intermediate results to focus on what's truly relevant. And it improves robustness by allowing the system to adapt and refine its approach based on what it's learning.

#### When You Need These Techniques

[confidently] You should reach for multi-step retrieval when dealing with ambiguous queries that could mean different things, multi-hop reasoning questions that require connecting information from multiple sources, long-form answers that need comprehensive coverage, or any situation where you need to provide accurate citations for your claims.

#### What's Coming Next

[energetic] In the following slides, you'll get detailed cheat sheets for nine different multi-step strategies. Each one offers a different approach to solving the retrieval problem, with its own strengths and ideal use cases. The key is understanding the trade-offs between precision, recall, latency, and implementation complexity so you can choose the right tool for your specific needs.

Let's look at all nine strategies in our next slide.`
        },
        {
          id: 3,
          title: 'The 9 Strategies',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', fontSize: '1.2rem' }}>
                <GSAPAnimated animation="scaleIn" delay={0.1}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '8px' }}>
                    <SvgIcon iconName="duo-arrows-rotate" sizeName="2x" style={{ color: '#4fc3f7' }} darkModeInvert={true} />
                    <span>1. Iterative Retrieve-and-Refine</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.2}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '8px' }}>
                    <SvgIcon iconName="duo-file-lines" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} />
                    <span>2. HyDE</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.3}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '8px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} />
                    <span>3. Query Decomposition</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.4}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '8px' }}>
                    <SvgIcon iconName="duo-brain" sizeName="2x" style={{ color: '#ba68c8' }} darkModeInvert={true} />
                    <span>4. Chain-of-Thought Guided</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.5}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: 'rgba(240, 98, 146, 0.2)', borderRadius: '8px' }}>
                    <SvgIcon iconName="duo-arrow-left" sizeName="2x" style={{ color: '#f06292' }} darkModeInvert={true} />
                    <span>5. Step-Back Reasoning</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.6}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: 'rgba(100, 181, 246, 0.2)', borderRadius: '8px' }}>
                    <SvgIcon iconName="duo-circle-nodes" sizeName="2x" style={{ color: '#64b5f6' }} darkModeInvert={true} />
                    <span>6. Multi-Hop Graph</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.7}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: 'rgba(174, 213, 129, 0.2)', borderRadius: '8px' }}>
                    <SvgIcon iconName="duo-book-open" sizeName="2x" style={{ color: '#aed581' }} darkModeInvert={true} />
                    <span>7. Context-Summarize</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.8}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: 'rgba(255, 167, 38, 0.2)', borderRadius: '8px' }}>
                    <SvgIcon iconName="duo-check-double" sizeName="2x" style={{ color: '#ffa726' }} darkModeInvert={true} />
                    <span>8. Answer-Conditioned</span>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.9}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '8px' }}>
                    <SvgIcon iconName="duo-chart-line" sizeName="2x" style={{ color: '#ef5350' }} darkModeInvert={true} />
                    <span>9. Feedback-Based</span>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1e2f5d',
          notes: `### The 9 Strategies

#### Overview of Our Journey

[enthusiastically] Now let's take a look at the nine multi-step retrieval strategies we'll be exploring in depth today. [conversational] Each of these techniques represents a different approach to solving the fundamental challenge of improving retrieval through iteration. They range from simple refinement loops to sophisticated graph traversal and feedback mechanisms.

#### The Complete Toolkit

[lecture] First, we have Iterative Retrieve-and-Refine, which progressively improves results through cycles of retrieval and generation. Next is HyDE, which is pronounced just like the word "hide", and it creates hypothetical documents to improve semantic matching. Third is Query Decomposition, which breaks complex questions into simpler sub-queries that can be answered independently.

Fourth, we have Chain-of-Thought Guided Retrieval, which uses step-by-step reasoning to focus each retrieval step. Fifth is Step-Back Reasoning, which starts with broader context before diving into specifics. Sixth is Multi-Hop Graph Traversal, which follows relationships between entities across your knowledge base.

Seventh is Context-Summarize-and-Retrieve, which condenses information progressively to avoid context overflow. Eighth is Answer-Conditioned Re-Retrieval, which uses initial answers to find missing or contradictory evidence. And finally, ninth is Feedback-Based Retrieval Loop, which uses quality metrics to automatically improve future retrievals.

#### Choosing Your Strategy

[reassuringly] Each of these strategies has its own sweet spot. Some are better for exploratory questions, others excel at precision tasks, and some are specifically designed for multi-hop reasoning or long-form content generation. As we go through each one, pay attention to the "when to use" guidance, because matching the right strategy to your use case is crucial for success.

#### What's Next

[confidently] We'll now dive into each strategy one by one, starting with Iterative Retrieve-and-Refine. For each technique, you'll see a detailed breakdown of its goal, how it works, when to use it, the implementation steps, and the pros and cons you need to consider.

Let's begin with our first strategy.`
        }
      ]
    },
    {
      id: 'iterative-retrieve',
      title: 'Iterative Retrieve-and-Refine',
      slides: [
        {
          id: 4,
          title: '1. Iterative Retrieve-and-Refine',
          icon: { name: 'duo-arrows-rotate' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <p><strong>Goal:</strong> Progressively improve evidence and answer quality through multiple small retrieval-generation loops</p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <p><strong>How It Works:</strong> Alternate between drafting, spotting gaps, reformulating queries, and re-retrieving to refine answers</p>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.6}>
                  <p><strong>When to Use:</strong> Ambiguous questions, sparse corpora, long-form synthesis, exploratory Q&A</p>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.8}>
                  <div style={{ marginTop: '20px' }}>
                    <p><strong>Steps:</strong></p>
                    <ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <li>Initial retrieval on the user query</li>
                      <li>Draft partial answer + list uncertainties/gaps</li>
                      <li>Reformulate queries targeting gaps</li>
                      <li>Re-retrieve and integrate evidence</li>
                      <li>Repeat until stop criteria (confidence, citations, token budget)</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 1. Iterative Retrieve-and-Refine

#### The Foundation Strategy

[lecture] Our first multi-step strategy is Iterative Retrieve-and-Refine, and it's one of the most intuitive approaches to improving retrieval quality. [conversational] The core idea is simple yet powerful: instead of trying to get everything right in one shot, we progressively improve our evidence and answer through multiple small cycles of retrieval and generation.

#### How It Works in Practice

[confidently] Here's how the process flows. First, we do an initial retrieval based on the user's original question. Then, we draft a partial answer using whatever evidence we found, but crucially, we also identify what's uncertain or missing from our answer. Next, we reformulate new queries that specifically target those gaps in our knowledge. We retrieve again with these refined queries and integrate the new evidence into our answer. Finally, we repeat this cycle until we hit our stop criteria, which might be reaching a confidence threshold, having enough citations, or hitting our token budget.

\`\`\`mermaid
graph TD
    A[User Query] --> B[Initial Retrieval]
    B --> C[Draft Partial Answer]
    C --> D[Identify Gaps]
    D --> E[Reformulate Queries]
    E --> F[Re-retrieve]
    F --> G{Stop Criteria?}
    G -->|No| C
    G -->|Yes| H[Final Answer]
    style A fill:#4fc3f7
    style H fill:#81c784
\`\`\`

#### When This Strategy Shines

[reassuringly] This technique is especially valuable for ambiguous questions where the initial query might be interpreted multiple ways. It works well with sparse corpora where you need multiple attempts to gather enough evidence. It's excellent for long-form synthesis where you're building a comprehensive answer piece by piece. And it's perfect for exploratory question and answer sessions where the user themselves might not know exactly what they're looking for at first.

#### The Key Advantages

[pleased] The beauty of this approach is threefold. First, you get better coverage of complex topics because each iteration can explore a different angle. Second, the system has built-in self-correction capabilities because each iteration can fix mistakes or fill gaps from previous rounds. And third, it's naturally adaptable to uncertainty because the system explicitly tracks what it doesn't know and goes looking for it.

#### Important Considerations

[cautiously] However, there are trade-offs to consider. This approach has higher latency and computational cost because you're doing multiple retrieval and generation cycles. There's also a risk of query drift or topic drift, where successive iterations stray from the original question. And without proper safeguards, errors from early iterations can compound in later ones, leading you further off track.

[conversational] Despite these challenges, Iterative Retrieve-and-Refine is most often used for complex questions where a single retrieval pass just misses too many important details or doesn't capture the full context needed for a quality answer. Now let's look at the detailed pros and cons on the next slide.`
        },
        {
          id: 5,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.3}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Pros:</strong></p>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Better coverage of complex topics</li>
                        <li>Self-correction capabilities</li>
                        <li>Adaptable to uncertainty</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.5}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Cons:</strong></p>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Higher latency and computational cost</li>
                        <li>Risk of query/topic drift</li>
                        <li>Compounding errors without safeguards</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                </div>
                <GSAPAnimated animation="fadeIn" delay={0.8}>
                  <p style={{ marginTop: '15px', fontSize: '1.2rem', fontStyle: 'italic' }}>
                    Used most often for complex questions where a single retrieval pass misses important details or context
                  </p>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Iterative Retrieve-and-Refine: Pros and Cons

#### Weighing the Trade-offs

[lecture] Let's take a closer look at the strengths and weaknesses of Iterative Retrieve-and-Refine so you can make informed decisions about when to use this strategy.

#### The Advantages

[pleased] On the positive side, this approach gives you better coverage of complex topics. Because you're making multiple passes, you can explore different facets of a question and build a more comprehensive understanding. The self-correction capabilities are particularly valuable. If your first retrieval misses the mark or brings back partially relevant documents, subsequent iterations can course-correct and fill in what was missing.

[confidently] The adaptability to uncertainty is another major strength. Traditional single-shot systems have to guess what's relevant and hope they got it right. With iterative refinement, the system can explicitly acknowledge what it doesn't know and go looking specifically for that missing information. This makes it much more robust when dealing with ambiguous or underspecified queries.

#### The Challenges

[cautiously] However, these benefits come with costs. [concerned] The most obvious is higher latency and computational expense. Every iteration means another round of embedding generation, vector search, and language model inference. If you're running three or four iterations, that's three or four times the cost compared to single-shot retrieval.

There's also a risk of query drift or topic drift. As you reformulate queries based on intermediate results, you might gradually stray from what the user actually wanted to know. Each reformulation is an opportunity to misinterpret or over-focus on one aspect at the expense of others.

[seriously] Finally, without proper safeguards, errors can compound. If your first iteration retrieves somewhat irrelevant documents and you build your gap analysis on that shaky foundation, subsequent iterations might dig you deeper into the wrong rabbit hole rather than correcting course.

#### The Bottom Line

[reassuringly] Despite these challenges, Iterative Retrieve-and-Refine remains one of the most powerful techniques for complex questions where a single retrieval pass simply isn't enough. The key is implementing good stop criteria, monitoring for drift, and building in quality checks at each iteration.

With that understanding of our first strategy, let's move on to our second technique: HyDE, which takes a completely different approach to improving retrieval quality.`
        }
      ]
    },
    {
      id: 'hyde',
      title: 'HyDE',
      slides: [
        {
          id: 6,
          title: '2. HyDE (Hypothetical Document Generation)',
          icon: { name: 'duo-file-lines' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="bounceIn" delay={0.2}>
                  <p><strong>Goal:</strong> Boost recall by seeding retrieval with a synthetic document representing the ideal evidence</p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <p><strong>How It Works:</strong> Generate a hypothetical passage from the query; embed it to retrieve similar real documents</p>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.6}>
                  <p><strong>When to Use:</strong> Short queries, niche domains, low-recall vector stores, lexical mismatch</p>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.8}>
                  <div style={{ marginTop: '20px' }}>
                    <p><strong>Steps:</strong></p>
                    <ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <li>Prompt model to write a plausible, concise hypothetical document</li>
                      <li>Embed hypothetical and run kNN retrieval</li>
                      <li>Retrieve top-k real documents; discard the hypothetical</li>
                      <li>Answer using retrieved evidence; iterate if needed</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#4b174f',
          notes: `### 2. HyDE (Hypothetical Document Generation)

#### Pronunciation and Concept

[conversational] Our second strategy is HyDE, which stands for Hypothetical Document Embeddings, and is pronounced just like the word "hide". [lecture] This technique takes a completely different approach from iterative refinement. Instead of refining queries, HyDE creates a synthetic ideal answer and uses that to find real documents.

#### The Core Insight

[excited] The genius of HyDE lies in recognizing a fundamental problem with query-based retrieval. When you embed a short query like "What causes inflation?", that embedding might not be very similar to the embeddings of comprehensive documents that actually answer the question. [storytelling] There's a semantic gap between how questions are phrased and how answers are written.

[confidently] HyDE solves this by generating a hypothetical document that represents what an ideal answer might look like. Instead of searching with your query, you search with this synthetic answer. Since it's written in the same style as your corpus documents, it's much more likely to match relevant content in embedding space.

\`\`\`mermaid
graph LR
    A[User Query] --> B[Generate Hypothetical Document]
    B --> C[Embed Synthetic Doc]
    C --> D[Retrieve Similar Real Docs]
    D --> E[Generate Final Answer]
    style A fill:#4fc3f7
    style E fill:#81c784
\`\`\`

#### When to Reach for HyDE

[reassuringly] This technique shines in several specific scenarios. It's excellent for short queries where there isn't much semantic content to embed. It works wonderfully in niche domains where vocabulary matters and you need to bridge the gap between how users ask questions and how experts write documentation. It's valuable when your vector store has low recall, meaning relevant documents exist but aren't being surfaced. And it's perfect for situations with lexical mismatch, where users and documents use completely different words to describe the same concepts.

#### Implementation Details

[pleased] The implementation is beautifully simple. You prompt your language model to write a plausible, concise hypothetical document that would answer the query. You then embed this hypothetical passage and run your standard k-nearest-neighbor retrieval against your vector store. You retrieve your top documents and immediately discard the hypothetical, it was just a bridge to better retrieval. Finally, you answer using the retrieved real evidence, and you can iterate if needed.

#### Looking at the Trade-offs

The pros are compelling. HyDE provides a strong recall lift, meaning you find more relevant documents that you would have missed otherwise. It effectively bridges vocabulary gaps between how users phrase questions and how documents are written. And it's simple to add to existing pipelines, you're just inserting one generation step before retrieval.

[cautiously] However, there are important cons. The hypothetical document can anchor your retrieval to hallucinations. If the model generates plausible-sounding but incorrect information, you might retrieve documents that support those errors rather than the truth. The technique may also pull in loosely related documents that match the hypothetical's style but miss the actual question's intent. And of course, there's the extra generation cost of creating that hypothetical document for every query.

Let's look at these trade-offs in more detail on the next slide.`
        },
        {
          id: 7,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.3}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Pros:</strong></p>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Strong recall lift</li>
                        <li>Bridges vocabulary gaps</li>
                        <li>Simple to add to existing pipelines</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.5}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Cons:</strong></p>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Can anchor to hallucinations</li>
                        <li>May pull loosely related documents</li>
                        <li>Extra generation cost</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                </div>
                <GSAPAnimated animation="fadeIn" delay={0.8}>
                  <p style={{ marginTop: '15px', fontSize: '1.2rem', fontStyle: 'italic' }}>
                    Particularly effective when direct keyword matching fails due to vocabulary mismatch between queries and documents
                  </p>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#4b174f',
          notes: `### HyDE: Pros and Cons

#### The Hallucination Paradox

[conversational] Let's dig deeper into the trade-offs of HyDE, because this technique has a fascinating paradox at its heart. [storytelling] It intentionally uses what we normally consider a bug, hallucination, as a feature to improve retrieval.

#### The Compelling Advantages

[enthusiastically] The strong recall lift is HyDE's primary selling point. By embedding a full hypothetical answer rather than a sparse query, you dramatically increase your chances of matching relevant documents in vector space. Documents that would have been ranked too low with query-based search suddenly surface because they're semantically similar to your hypothetical.

[pleased] The vocabulary gap bridging is equally powerful. [storytelling] Imagine a user asking "Why is my code slow?" while your documentation talks about "performance optimization" and "computational complexity". A direct query embedding might miss these documents entirely, but a hypothetical answer that naturally uses technical terminology will find them.

The simplicity is refreshing. You don't need to restructure your retrieval pipeline or retrain models. You just add one language model call before your existing embedding and retrieval steps. This makes HyDE one of the easiest multi-step techniques to experiment with.

#### The Meaningful Risks

[seriously] However, the hallucination anchoring risk is real and must be managed. If your language model generates a confident but incorrect hypothetical, you'll retrieve documents that align with that misinformation. This is especially dangerous in domains where accuracy is critical, like healthcare or legal applications.

[cautiously] The loosely related document problem occurs because the hypothetical might emphasize aspects of a question that aren't actually what the user cares about. You might get documents that match the style and topic of your hypothetical while missing the user's actual information need.

The extra generation cost is straightforward but worth considering. You're adding a full language model inference before every retrieval, which increases both latency and computational expense.

#### When HyDE Really Shines

[confidently] Despite these risks, HyDE is particularly effective when direct keyword matching fails due to vocabulary mismatch between queries and documents. If your users speak one language and your documentation speaks another, metaphorically speaking, HyDE can be a game changer for recall.

Now let's move on to our third strategy, Query Decomposition, which takes yet another approach by breaking complex questions into simpler pieces.`
        }
      ]
    },
    {
      id: 'query-decomposition',
      title: 'Query Decomposition',
      slides: [
        {
          id: 8,
          title: '3. Query Decomposition + Sequential Retrieval',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <p><strong>Goal:</strong> Break complex questions into sub-questions and solve step-by-step</p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <p><strong>How It Works:</strong> Plan sub-queries, retrieve per sub-query, then synthesize results into comprehensive answer</p>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.6}>
                  <p><strong>When to Use:</strong> Multi-fact or multi-source questions, procedural tasks, comprehensive reports</p>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.8}>
                  <div style={{ marginTop: '20px' }}>
                    <p><strong>Steps:</strong></p>
                    <ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <li>Parse the question and propose sub-questions</li>
                      <li>Retrieve evidence for each sub-question</li>
                      <li>Answer sub-questions independently</li>
                      <li>Synthesize a final answer with citations</li>
                      <li>Validate consistency; re-retrieve if conflicts</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#172e4f',
          notes: `### 3. Query Decomposition + Sequential Retrieval

#### The Divide and Conquer Approach

[conversational] Our third strategy is Query Decomposition plus Sequential Retrieval, and it embodies the classic computer science principle of divide and conquer. [confidently] Instead of trying to answer a complex question all at once, we break it down into simpler sub-questions that can be tackled independently.

#### How It Works

[lecture] The process follows a clear structure. First, we parse the user's question and propose a set of sub-questions that together cover all aspects of the original query. Then, we retrieve evidence for each sub-question separately. Next, we answer each sub-question independently using its dedicated evidence. After that, we synthesize a final comprehensive answer that brings together all the sub-answers with proper citations. Finally, we validate consistency across the sub-answers and re-retrieve if we find conflicts or contradictions.

\`\`\`mermaid
graph TD
    A[Complex Query] --> B[Decompose into Sub-Questions]
    B --> C[Sub-Q1]
    B --> D[Sub-Q2]
    B --> E[Sub-Q3]
    C --> F[Retrieve for Q1]
    D --> G[Retrieve for Q2]
    E --> H[Retrieve for Q3]
    F --> I[Answer Q1]
    G --> J[Answer Q2]
    H --> K[Answer Q3]
    I --> L[Synthesize Final Answer]
    J --> L
    K --> L
    style A fill:#4fc3f7
    style L fill:#81c784
\`\`\`

#### When This Strategy Excels

[enthusiastically] Query Decomposition shines in several scenarios. [pleased] It's perfect for multi-fact questions that require information from different sources or domains. It works excellently for procedural tasks where you need to gather information in a logical sequence. And it's ideal for generating comprehensive reports where you need to cover multiple aspects of a topic systematically.

[storytelling] For example, if someone asks "How do I deploy a machine learning model to production and monitor its performance?", you might decompose this into sub-questions about deployment infrastructure, model serialization, API design, monitoring tools, and performance metrics. [confidently] Each can be researched independently before synthesis.

#### The Key Advantages

[conversational] The modular approach to complex questions makes this technique powerful and flexible. Each sub-question can be handled by the most appropriate retrieval strategy or even routed to different knowledge bases. [warmly] The interpretable reasoning steps are valuable for debugging and user trust. Users can see exactly which sub-questions were asked and how they were answered. [excited] The parallelizability is a major performance benefit. Since sub-questions are independent, you can retrieve and answer them in parallel, dramatically reducing latency compared to sequential multi-step approaches.

#### Important Considerations

[cautiously] However, there's planning overhead involved. Decomposing questions effectively requires careful prompting and sometimes multiple attempts to get the right granularity. [seriously] Error propagation is a real concern. If one sub-question is misunderstood or poorly answered, it can poison the final synthesis. And the longer pipelines mean more places where things can go wrong and more complexity to monitor and debug.

[conversational] Let's examine these trade-offs more closely on the next slide.`
        },
        {
          id: 9,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.3}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Pros:</strong></p>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Modular approach to complex questions</li>
                        <li>Interpretable reasoning steps</li>
                        <li>Parallelizable for performance</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.5}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Cons:</strong></p>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Planning overhead</li>
                        <li>Error propagation across steps</li>
                        <li>Longer pipelines</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                </div>
                <GSAPAnimated animation="fadeIn" delay={0.8}>
                  <p style={{ marginTop: '15px', fontSize: '1.2rem', fontStyle: 'italic' }}>
                    Best for multi-dimensional questions where separate aspects can be addressed individually before synthesis
                  </p>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#172e4f',
          notes: `### Query Decomposition: Pros and Cons

#### Balancing Modularity and Complexity

[conversational] Query Decomposition offers a compelling balance between managing complexity and maintaining performance, [cautiously] but it requires careful implementation to realize its full potential.

#### The Powerful Advantages

[confidently] The modular approach is perhaps the biggest strength. By breaking questions into independent sub-questions, you gain tremendous flexibility. Each sub-question can be routed to the most appropriate knowledge source, use different retrieval strategies, or even leverage specialized models. [pleased] This modularity makes the system much easier to understand, debug, and improve over time.

[warmly] The interpretable reasoning steps are invaluable for building user trust and debugging issues. When users can see exactly which sub-questions were generated and how each was answered, they can better understand and validate the final synthesis. This transparency also makes it much easier for developers to identify where things went wrong when answers are incorrect.

[enthusiastically] The parallelizability is a major performance win. Since sub-questions are independent by design, you can process them in parallel. [storytelling] If you have three sub-questions and each retrieval takes two seconds, you're looking at two seconds total instead of six seconds if done sequentially. [excited] This can dramatically reduce user-perceived latency.

#### The Real Challenges

[seriously] However, the planning overhead shouldn't be underestimated. [concerned] Decomposing questions effectively is actually quite difficult. You need to find the right granularity, not too broad that sub-questions are still complex, and not too fine-grained that you end up with dozens of trivial queries. This often requires careful prompt engineering and sometimes multiple rounds of refinement.

[cautiously] Error propagation is a serious concern. If your decomposition misunderstands the original question or creates sub-questions that don't actually cover all necessary aspects, everything downstream will be affected. [disappointed] Similarly, if one sub-answer is incorrect, it can contaminate the final synthesis in subtle ways that are hard to detect.

[firmly] The longer pipelines mean more components, more potential failure points, and more complexity to monitor. You need good logging and observability to track how questions are being decomposed and how sub-answers are being synthesized.

#### The Sweet Spot

[conversational] Despite these challenges, Query Decomposition is best for multi-dimensional questions where separate aspects can be addressed individually before synthesis. [confidently] When you have questions that naturally break into distinct components, this strategy can be incredibly effective.

Now let's move on to Chain-of-Thought Guided Retrieval, which takes a similar but subtly different approach to structured reasoning.`
        }
      ]
    },
    {
      id: 'cot-guided',
      title: 'Chain-of-Thought Guided',
      slides: [
        {
          id: 10,
          title: '4. Chain-of-Thought Guided Retrieval',
          icon: { name: 'duo-brain' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="rotateIn" delay={0.2}>
                  <p><strong>Goal:</strong> Use reasoning traces to focus retrieval on facts needed at each step</p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <p><strong>How It Works:</strong> Generate a CoT skeleton; extract entities/relations per step; retrieve targeted snippets</p>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.6}>
                  <p><strong>When to Use:</strong> Reasoning-heavy tasks where targeted facts matter (analysis, calculations with context)</p>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.8}>
                  <div style={{ marginTop: '20px' }}>
                    <p><strong>Steps:</strong></p>
                    <ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <li>Draft a brief CoT outline (no final answer yet)</li>
                      <li>From each step, extract cues (entities, relations, formulas)</li>
                      <li>Retrieve per step; attach evidence to the step</li>
                      <li>Produce final answer using step-aligned evidence</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#174f1b',
          notes: `### 4. Chain-of-Thought Guided Retrieval

#### Introduction to CoT 👉 'see-oh-tee'

[conversational] Our fourth strategy is Chain-of-Thought Guided Retrieval. [lecture] Chain-of-Thought, often abbreviated as CoT and pronounced "see-oh-tee", is a technique where we break down reasoning into explicit steps. [confidently] This strategy combines that structured reasoning with targeted retrieval at each step.

#### The Core Approach

[conversational] The goal here is to use reasoning traces to focus retrieval on exactly the facts needed at each step of your thinking process. [storytelling] Instead of retrieving all evidence upfront or iterating blindly, you first sketch out how you would reason about the problem, then retrieve precisely what each reasoning step requires.

[lecture] Here's how it flows. First, you generate a Chain-of-Thought skeleton, which is basically an outline of the reasoning steps without actually completing them or providing the final answer. Then, from each step in that outline, you extract cues like entities, relations, or formulas that indicate what facts you'll need. Next, you retrieve evidence targeted to each specific step and attach that evidence directly to the corresponding reasoning step. Finally, you produce your final answer using this step-aligned evidence.

\`\`\`mermaid
graph TD
    A[Question] --> B[Generate CoT Skeleton]
    B --> C[Step 1: Extract Cues]
    B --> D[Step 2: Extract Cues]
    B --> E[Step 3: Extract Cues]
    C --> F[Retrieve for Step 1]
    D --> G[Retrieve for Step 2]
    E --> H[Retrieve for Step 3]
    F --> I[Final Answer with Evidence]
    G --> I
    H --> I
    style A fill:#4fc3f7
    style I fill:#81c784
\`\`\`

#### When to Use This Strategy

[conversational] Chain-of-Thought Guided Retrieval shines in reasoning-heavy tasks where targeted facts matter at specific points in your logic. [storytelling] Think analysis tasks where you need to evaluate evidence step by step, or calculations that require contextual facts at particular stages of the computation. [confidently] It's particularly valuable when you know the general structure of reasoning required but need to pull in specific evidence along the way.

#### The Key Advantages

[pleased] This approach delivers high precision because you're retrieving exactly what each reasoning step needs rather than casting a wide net. [enthusiastically] The transparent reasoning-evidence links are incredibly valuable. Users and developers can see exactly which evidence supported which reasoning step, making the system highly interpretable and debuggable. [confidently] This tight coupling between reasoning and evidence also helps prevent the kind of drift that can occur in other multi-step approaches.

#### The Trade-offs

[cautiously] However, the technique can be verbose. Generating a full Chain-of-Thought outline before even retrieving evidence adds overhead. [concerned] It's also quite prompt-sensitive. The quality of your CoT skeleton depends heavily on how you prompt the model, and small changes in prompting can lead to very different reasoning structures. [seriously] Finally, there's a risk of overfitting to early reasoning errors. If your initial CoT skeleton is flawed, all subsequent retrieval will be guided by that flawed reasoning, potentially leading you down the wrong path.

[conversational] Let's look at these pros and cons in more detail.`
        },
        {
          id: 11,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.3}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Pros:</strong></p>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>High precision</li>
                        <li>Transparent reasoning-evidence links</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.5}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Cons:</strong></p>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Verbose</li>
                        <li>Prompt-sensitive</li>
                        <li>May overfit to early reasoning errors</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                </div>
                <GSAPAnimated animation="fadeIn" delay={0.8}>
                  <p style={{ marginTop: '15px', fontSize: '1.2rem', fontStyle: 'italic' }}>
                    Ideal for complex reasoning tasks that need precise evidence at each reasoning step
                  </p>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#174f1b',
          notes: `### Chain-of-Thought Guided Retrieval: Pros and Cons

#### Precision Versus Complexity

[conversational] Chain-of-Thought Guided Retrieval offers a fascinating trade-off between precision and system complexity. Let's explore when this trade-off makes sense.

#### The Compelling Strengths

[confidently] High precision is the star feature here. By generating a reasoning skeleton first and then retrieving targeted evidence for each step, you avoid the problem of retrieving too much irrelevant information or missing crucial facts that only matter at specific reasoning stages. [pleased] You're essentially creating a custom retrieval plan for each query based on how you need to think about it.

[enthusiastically] The transparent reasoning-evidence links make this technique particularly valuable in domains where explainability matters. [seriously] In healthcare, legal, or financial applications, stakeholders often need to understand not just the final answer but exactly how each piece of evidence contributed to each step of reasoning. [warmly] With Chain-of-Thought guided retrieval, you get this transparency built in. Each reasoning step has its associated evidence clearly marked, making auditing and verification straightforward.

#### The Real Challenges

[cautiously] However, verbosity is a significant practical concern. [concerned] You're generating a Chain-of-Thought outline, then extracting cues from it, then retrieving for each step, then generating the final answer. That's a lot of tokens and a lot of latency. [disappointed] In production systems where you're paying per token and users expect quick responses, this overhead adds up quickly.

[seriously] The prompt-sensitivity issue is equally important. The entire technique hinges on generating a good Chain-of-Thought skeleton up front. [cautiously] If your prompt doesn't elicit the right reasoning structure, or if the model makes assumptions that lead it down the wrong path early on, everything downstream suffers. [firmly] This makes the technique fragile to prompt variations and requires careful prompt engineering.

[seriously] The risk of overfitting to early reasoning errors is perhaps the most subtle but serious challenge. Once you've committed to a particular reasoning structure in your skeleton, all subsequent retrieval and reasoning follows that structure. [disappointed] If the initial skeleton misunderstands the question or chooses a flawed approach, you're locked into that approach. Unlike iterative refinement strategies that can course-correct, Chain-of-Thought guided retrieval is committed from the start.

#### The Right Use Cases

[conversational] Despite these challenges, this technique is ideal for complex reasoning tasks that need precise evidence at each reasoning step. [confidently] If you're building systems for technical analysis, multi-step problem solving, or any domain where reasoning structure is predictable but evidence needs are specific, Chain-of-Thought guided retrieval can be extremely effective.

Now let's move to our fifth strategy, Step-Back Reasoning, which takes a different approach by starting broad before getting specific.`
        }
      ]
    },
    {
      id: 'step-back',
      title: 'Step-Back Reasoning',
      slides: [
        {
          id: 12,
          title: '5. Step-Back Reasoning Retrieval',
          icon: { name: 'duo-arrow-left' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="slideInBottom" delay={0.2}>
                  <p><strong>Goal:</strong> Generalize question to higher-level abstraction, retrieve broad context, then specialize</p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInTop" delay={0.4}>
                  <p><strong>How It Works:</strong> Ask a meta-question (what is the core concept?), retrieve summaries, then drill down</p>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.6}>
                  <p><strong>When to Use:</strong> Overly specific/noisy queries, concept-heavy topics, when direct retrieval fails</p>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.8}>
                  <div style={{ marginTop: '20px' }}>
                    <p><strong>Steps:</strong></p>
                    <ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <li>Generate a step-back question capturing the core idea</li>
                      <li>Retrieve high-level overviews/definitions</li>
                      <li>Reformulate a precise follow-up query</li>
                      <li>Re-retrieve specific evidence; answer</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#17404f',
          notes: `### 5. Step-Back Reasoning Retrieval

#### The Zoom-Out-Then-Zoom-In Strategy

[conversational] Our fifth strategy is Step-Back Reasoning Retrieval, and it embodies a principle that's familiar from everyday problem-solving: [storytelling] sometimes you need to step back and understand the bigger picture before diving into details.

#### How It Works

[lecture] The goal is to generalize the user's question to a higher-level abstraction, retrieve broad contextual information first, and then specialize back down to the specific query. [confidently] This two-stage approach helps avoid the tunnel vision that can occur when you dive straight into specific retrieval.

[conversational] Here's the process. First, you generate a step-back question that captures the core concept or principle underlying the user's specific query. Then, you retrieve high-level overviews, definitions, or summaries related to that broader concept. Next, armed with this contextual understanding, you reformulate a more precise follow-up query. Finally, you re-retrieve specific evidence and generate your answer.

\`\`\`mermaid
graph TD
    A[Specific Query] --> B[Generate Step-Back Question]
    B --> C[Retrieve High-Level Context]
    C --> D[Reformulate Precise Query]
    D --> E[Retrieve Specific Evidence]
    E --> F[Final Answer]
    style A fill:#4fc3f7
    style F fill:#81c784
\`\`\`

#### When This Strategy Shines

[enthusiastically] Step-Back Reasoning is particularly valuable for overly specific or noisy queries where direct retrieval gets bogged down in details. [pleased] It works excellently for concept-heavy topics where understanding principles is crucial before tackling specifics. And it's perfect for situations when direct retrieval fails, because stepping back can reveal alternative entry points into your knowledge base.

[storytelling] For example, if someone asks "Why does my React app re-render when I use useState in a callback?", a step-back question might be "How does React's rendering cycle work?" [warmly] Retrieving general information about React rendering first provides context that makes the specific answer much clearer.

#### The Key Benefits

[confidently] This approach is robust to noise because the step-back question naturally filters out irrelevant specifics. It reduces myopic retrieval where you get stuck in a narrow interpretation of the query. [pleased] And it's particularly good for learning tasks where understanding foundational concepts is as important as answering the immediate question.

[conversational] Let's look at the full trade-off picture on the next slide.`
        },
        {
          id: 13,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.3}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Pros:</strong></p>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Robust to noise</li>
                        <li>Reduces myopic retrieval</li>
                        <li>Good for learning tasks</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.5}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Cons:</strong></p>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>May pull generic info</li>
                        <li>Requires careful prompting</li>
                        <li>Extra hops increase latency</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                </div>
                <GSAPAnimated animation="fadeIn" delay={0.8}>
                  <p style={{ marginTop: '15px', fontSize: '1.2rem', fontStyle: 'italic' }}>
                    Best for questions where zooming out to understand core concepts before diving into specifics improves answer quality
                  </p>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#17404f',
          notes: `### Step-Back Reasoning: Pros and Cons

#### The Abstraction Trade-off

[conversational] Step-Back Reasoning presents an interesting trade-off between breadth and precision. Let's examine when this trade-off is worth making.

#### The Strong Advantages

[confidently] Robustness to noise is a major strength. [pleased] When users ask questions loaded with specific details that might confuse retrieval, stepping back to the core concept cuts through that noise. [storytelling] You're essentially using abstraction as a filter, focusing on what really matters conceptually rather than getting distracted by surface-level specifics.

[enthusiastically] Reducing myopic retrieval is equally valuable. Direct retrieval can sometimes lock onto one narrow interpretation of a question and miss relevant information that uses different terminology or approaches the topic from a different angle. [warmly] By retrieving broad context first, you give yourself multiple entry points and perspectives before narrowing down.

[pleased] The approach is particularly good for learning tasks because it naturally provides educational context. When users are trying to understand something, they often benefit from seeing the bigger picture before diving into specifics. Step-back reasoning delivers this automatically.

#### The Important Limitations

[cautiously] However, the technique may pull in generic information that doesn't directly answer the question. [concerned] There's a risk of spending tokens and latency on high-level overviews that the user already understands or doesn't actually need. This makes the technique less suitable when users have deep domain knowledge and are asking very specific questions.

[seriously] Careful prompting is required to generate good step-back questions. If your step-back question is too broad, you'll retrieve information that's too general to be useful. If it's not broad enough, you haven't really stepped back at all. [cautiously] Finding the right level of abstraction requires prompt engineering and often domain-specific guidance.

[disappointed] The extra hops definitely increase latency. You're adding a full retrieval cycle before your main retrieval, which doubles your retrieval latency at minimum. [firmly] For applications where sub-second response times matter, this overhead can be prohibitive.

#### The Sweet Spot

[conversational] This strategy is best for questions where zooming out to understand core concepts before diving into specifics genuinely improves answer quality. [confidently] Educational applications, exploratory research, and complex technical topics where foundational understanding matters are all excellent use cases.

Now let's move to our sixth strategy, Multi-Hop Graph Traversal, which takes a completely different approach by following relationships between entities.`
        }
      ]
    },
    {
      id: 'multi-hop-graph',
      title: 'Multi-Hop Graph',
      slides: [
        {
          id: 14,
          title: '6. Multi-Hop Graph Traversal Retrieval',
          icon: { name: 'duo-circle-nodes' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="bounceIn" delay={0.2}>
                  <p><strong>Goal:</strong> Follow entity/relationship paths to gather multi-hop evidence</p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <p><strong>How It Works:</strong> Build or infer a graph (entities/relations) and traverse hops to collect supporting docs</p>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.6}>
                  <p><strong>When to Use:</strong> Relational questions, cause-effect chains, linking distant facts</p>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.8}>
                  <div style={{ marginTop: '20px' }}>
                    <p><strong>Steps:</strong></p>
                    <ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <li>Extract seed entities/relations from query</li>
                      <li>Expand neighbors (embedding or KG) with beam search</li>
                      <li>Score paths and gather documents per hop</li>
                      <li>Consolidate evidence and answer</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#4f2e17',
          notes: `### 6. Multi-Hop Graph Traversal Retrieval

#### Following the Connection Thread

[conversational] Our sixth strategy is Multi-Hop Graph Traversal Retrieval, and it's perfect for questions that require connecting multiple pieces of information across relationships. [storytelling] Instead of treating your knowledge base as a flat collection of documents, this approach views it as a network of connected entities and relationships.

#### The Core Mechanism

[lecture] The goal is to follow entity and relationship paths to gather multi-hop evidence. [confidently] You start with seed entities from the query, then traverse the graph by following relationships, collecting relevant documents at each hop until you've gathered enough connected evidence to answer the question.

[conversational] The process works like this. First, you extract seed entities and relations from the user's query. Then, you expand to neighboring entities using either embedding similarity or an explicit knowledge graph, often employing beam search to manage the explosion of possible paths. Next, you score different paths based on relevance and gather documents associated with entities at each hop. Finally, you consolidate all this multi-hop evidence and generate your answer.

\`\`\`mermaid
graph LR
    A[Entity A] --> B[Relationship] --> C[Entity B]
    C --> D[Relationship] --> E[Entity C]
    A -.->|Hop 1| C
    C -.->|Hop 2| E
    style A fill:#4fc3f7
    style E fill:#81c784
\`\`\`

#### When to Use This Strategy

[enthusiastically] Multi-Hop Graph Traversal excels for relational questions like "How is Person A connected to Company B?" [pleased] It's ideal for cause-effect chains where you need to trace how one event leads to another through intermediary steps. And it's perfect for linking distant facts that aren't obviously connected in a single document but can be linked through a chain of relationships.

[confidently] The key insight is that many real-world questions can't be answered from a single document or even a set of independent documents. [firmly] They require assembling information from multiple sources connected by relationships.

[conversational] Let's examine the trade-offs on the next slide.`
        },
        {
          id: 15,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.3}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Pros:</strong></p>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Structured multi-hop reasoning</li>
                        <li>Strong for relational queries</li>
                        <li>Transparent path discovery</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.5}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Cons:</strong></p>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Requires graph infrastructure or extraction</li>
                        <li>Tuning complexity for path relevance</li>
                        <li>Potential path explosion with many hops</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                </div>
                <GSAPAnimated animation="fadeIn" delay={0.8}>
                  <p style={{ marginTop: '15px', fontSize: '1.2rem', fontStyle: 'italic' }}>
                    Ideal for questions requiring connection of information across multiple documents or knowledge graph nodes
                  </p>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#4f2e17',
          notes: `### Multi-Hop Graph Traversal: Pros and Cons

#### Graph-Based Reasoning Trade-offs

[conversational] Multi-Hop Graph Traversal offers unique capabilities but comes with infrastructure requirements that other strategies don't have. [seriously] Let's examine when this investment pays off.

#### The Powerful Strengths

[confidently] Structured multi-hop reasoning is the defining strength of this approach. Unlike free-form iteration or decomposition, graph traversal follows explicit relationships, which provides a clear logical path from your starting entities to your answer. [pleased] This structure makes the reasoning process much more principled and reproducible.

[enthusiastically] The strength for relational queries is unmatched by other strategies. [storytelling] Questions like "What companies did this person work for before joining their current role?" or "How is climate change affecting agricultural yields in coastal regions?" naturally map to graph traversal patterns. [warmly] You're not fighting against your representation; you're working with it.

[pleased] Transparent path discovery is incredibly valuable for explanation and debugging. You can show users exactly which entities and relationships were traversed to reach the answer. [confidently] This makes the system's reasoning visible and verifiable in a way that purely vector-based approaches can't match.

#### The Significant Challenges

[cautiously] However, requiring graph infrastructure or extraction is a major barrier to adoption. [seriously] You need either an explicitly maintained knowledge graph, which is expensive to build and maintain, or reliable entity and relation extraction from unstructured text, which is technically challenging and error-prone. [firmly] This infrastructure requirement makes Multi-Hop Graph Traversal one of the heavier-weight strategies to implement.

[concerned] Tuning complexity for path relevance is another real challenge. Not all paths through a graph are equally relevant to a question. [puzzled] You need good scoring functions to distinguish useful paths from noise, and these often require domain-specific tuning. Beam search helps manage this but introduces its own hyperparameters to tune.

[disappointed] Potential path explosion with many hops is a serious scalability concern. [cautiously] In a dense graph, the number of possible paths grows exponentially with each hop. Even with beam search pruning, you can quickly end up exploring hundreds or thousands of paths, making the approach impractical for deep multi-hop queries without careful engineering.

#### The Right Applications

[conversational] This strategy is ideal for questions requiring connection of information across multiple documents or knowledge graph nodes. [confidently] If your domain is naturally relational, like social networks, organizational hierarchies, supply chains, or citation networks, Multi-Hop Graph Traversal can be transformative.

Now let's move to our seventh strategy, Context-Summarize-and-Retrieve, which tackles a different problem: managing context length in long retrieval sessions.`
        }
      ]
    },
    {
      id: 'context-summarize',
      title: 'Context-Summarize',
      slides: [
        {
          id: 16,
          title: '7. Context-Summarize-and-Retrieve',
          icon: { name: 'duo-book-open' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="slideInTop" delay={0.2}>
                  <p><strong>Goal:</strong> Compress evolving context to stay within window while guiding next retrieval</p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInBottom" delay={0.4}>
                  <p><strong>How It Works:</strong> Summarize conversation/state; use summary to query for fresh, relevant evidence</p>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.6}>
                  <p><strong>When to Use:</strong> Long sessions, iterative research, limited context window</p>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.8}>
                  <div style={{ marginTop: '20px' }}>
                    <p><strong>Steps:</strong></p>
                    <ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <li>Summarize current context (salient facts, open questions)</li>
                      <li>Extract key terms/gaps from the summary</li>
                      <li>Retrieve targeted updates/new evidence</li>
                      <li>Update summary and working answer; repeat as needed</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#3f4f17',
          notes: `### 7. Context-Summarize-and-Retrieve

#### Managing Context Windows Intelligently

[conversational] Our seventh strategy is Context-Summarize-and-Retrieve, and it addresses a practical problem that becomes critical in extended retrieval sessions: [seriously] context window limits. [concerned] As you accumulate evidence and reasoning across multiple retrieval steps, you can quickly hit token limits. [confidently] This strategy manages that through intelligent summarization.

#### The Core Approach

[lecture] The goal is to compress your evolving context to stay within your window limits while still guiding your next retrieval effectively. [conversational] You maintain a rolling summary of your conversation state and use that compressed representation to query for fresh, relevant evidence.

Here's the flow. First, you summarize your current context, capturing salient facts and open questions while discarding less relevant details. Then, you extract key terms and gaps from that summary to guide your next retrieval. Next, you retrieve targeted updates and new evidence based on the summary. Finally, you update your summary and working answer, then repeat as needed.

\`\`\`mermaid
graph TD
    A[Initial Context] --> B[Summarize]
    B --> C[Extract Key Terms]
    C --> D[Retrieve New Evidence]
    D --> E[Update Summary]
    E --> F{More Needed?}
    F -->|Yes| B
    F -->|No| G[Final Answer]
    style A fill:#4fc3f7
    style G fill:#81c784
\`\`\`

#### When This Strategy Shines

[enthusiastically] This technique is essential for long sessions where you're building understanding over many turns. [pleased] It's perfect for iterative research where you're exploring a topic progressively. [firmly] And it's crucial when you're working with limited context windows and can't afford to keep all historical evidence in context.

#### The Key Advantages

[confidently] Controls token growth is the primary benefit. [concerned] Without summarization, multi-step retrieval can quickly balloon to tens of thousands of tokens. [pleased] Summarization keeps you within practical limits. It also maintains focus by discarding irrelevant details that accumulated during exploration. [warmly] And it's particularly good for ongoing tasks like extended research sessions or multi-turn conversations.

[conversational] Let's examine the trade-offs on the next slide.`
        },
        {
          id: 17,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.3}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Pros:</strong></p>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Controls token growth</li>
                        <li>Maintains focus</li>
                        <li>Good for ongoing tasks</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.5}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Cons:</strong></p>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Summarization loss/bias</li>
                        <li>Summary drift</li>
                        <li>Requires careful evaluation</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                </div>
                <GSAPAnimated animation="fadeIn" delay={0.8}>
                  <p style={{ marginTop: '15px', fontSize: '1.2rem', fontStyle: 'italic' }}>
                    Especially useful for extended conversations and research sessions where context management is essential
                  </p>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#3f4f17',
          notes: `### Context-Summarize-and-Retrieve: Pros and Cons

#### The Compression Trade-off

[conversational] Context-Summarize-and-Retrieve presents a fundamental trade-off: [confidently] you gain token efficiency [cautiously] but risk losing information through compression. Let's explore when this trade-off makes sense.

#### The Practical Advantages

[firmly] Controlling token growth is essential for production systems. [lecture] Language models have hard context limits, and even with long-context models, processing very long contexts is slow and expensive. [pleased] Summarization lets you maintain bounded context size regardless of how many retrieval iterations you perform.

[warmly] Maintaining focus is an underappreciated benefit. [storytelling] In long retrieval sessions, you accumulate not just useful evidence but also tangential information explored along the way. [confidently] Summarization acts as a filter, keeping your attention on what matters and discarding distractions. [pleased] This actually improves answer quality in many cases, not despite the information loss but because of it.

[conversational] Being good for ongoing tasks makes this technique valuable for applications like research assistants, extended technical support sessions, or any scenario where user interaction spans multiple queries and retrievals over time.

#### The Real Risks

[seriously] However, summarization loss and bias are inevitable. [cautiously] When you compress information, you lose details. [puzzled] The question is whether you lose important details or just noise. Summarization models also have biases about what's important, and these biases might not align with what your retrieval task actually needs.

[concerned] Summary drift is a more subtle problem. As you repeatedly summarize summaries across many iterations, errors and omissions compound. [storytelling] Like a game of telephone, what you end up with after many rounds can drift significantly from your original context. [disappointed] This makes the technique less suitable for tasks requiring perfect information retention.

[firmly] Requiring careful evaluation is crucial. You need to actively monitor whether your summarization is preserving the right information. This means tracking metrics like answer quality, citation accuracy, and whether important evidence is being inadvertently discarded.

#### The Sweet Spot

[conversational] This strategy is especially useful for extended conversations and research sessions where context management is essential. [confidently] If you're building applications for long-form research, iterative problem-solving, or conversational agents, Context-Summarize-and-Retrieve is often necessary.

Now let's look at our eighth strategy, Answer-Conditioned Re-Retrieval, which uses an initial answer to guide fact-checking and verification.`
        }
      ]
    },
    {
      id: 'answer-conditioned',
      title: 'Answer-Conditioned',
      slides: [
        {
          id: 18,
          title: '8. Answer-Conditioned Re-Retrieval',
          icon: { name: 'duo-check-double' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="rotateIn" delay={0.2}>
                  <p><strong>Goal:</strong> Verify and complete provisional answer by retrieving evidence conditioned on its claims</p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <p><strong>How It Works:</strong> Draft answer → extract claims → retrieve per claim → revise and cite</p>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.6}>
                  <p><strong>When to Use:</strong> Fact-checking, citations, high-stakes outputs, audits</p>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.8}>
                  <div style={{ marginTop: '20px' }}>
                    <p><strong>Steps:</strong></p>
                    <ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <li>Generate a provisional answer</li>
                      <li>Extract atomic claims and needed citations</li>
                      <li>Retrieve evidence per claim; label support or conflict</li>
                      <li>Revise answer, add citations, or flag uncertainty</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#174f41',
          notes: `### 8. Answer-Conditioned Re-Retrieval

#### Verification Through Reverse Engineering

[conversational] Our eighth strategy is Answer-Conditioned Re-Retrieval, [excited] and it flips the typical retrieval flow on its head. [storytelling] Instead of retrieving first and answering second, you generate a provisional answer first, then retrieve evidence to verify and support each claim in that answer.

#### The Core Philosophy

[lecture] The goal is to verify and complete a provisional answer by retrieving evidence conditioned on its specific claims. [confidently] This is particularly powerful for fact-checking and citation-heavy applications where you need to ensure every claim is properly supported.

[pleased] The workflow is elegant. First, you generate a provisional answer using whatever context you have, which might be limited initial retrieval or even zero-shot generation. Then, you extract atomic claims from that answer, breaking it down into individual factual statements. Next, you retrieve evidence for each specific claim and label whether that evidence supports, contradicts, or is neutral to the claim. Finally, you revise the answer based on what you found, adding proper citations for supported claims, revising contradicted claims, or flagging uncertainty where evidence is lacking.

\`\`\`mermaid
graph TD
    A[Generate Provisional Answer] --> B[Extract Claims]
    B --> C[Claim 1]
    B --> D[Claim 2]
    B --> E[Claim 3]
    C --> F[Retrieve Evidence]
    D --> G[Retrieve Evidence]
    E --> H[Retrieve Evidence]
    F --> I[Verify & Revise]
    G --> I
    H --> I
    style A fill:#4fc3f7
    style I fill:#81c784
\`\`\`

#### When This Strategy Excels

[enthusiastically] Answer-Conditioned Re-Retrieval is ideal for fact-checking applications where accuracy is paramount. [pleased] It's perfect for citation-heavy outputs like academic or professional writing. [firmly] It's essential for high-stakes domains like healthcare, legal, or financial advice where every claim needs substantiation. [confidently] And it's valuable for auditing AI-generated content to verify its factual accuracy.

#### The Key Benefits

[confidently] This approach provides systematic verification of every claim rather than hoping your initial retrieval was comprehensive. [pleased] It enables precise citation, with each claim linked to specific supporting evidence. [warmly] And it naturally flags uncertain claims where evidence is insufficient, which is valuable for building trustworthy systems.

[conversational] Let's look at the full picture on the next slide.`
        },
        {
          id: 19,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.3}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Pros:</strong></p>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>High precision and auditability</li>
                        <li>Good for compliance</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.5}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Cons:</strong></p>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Extra passes increase cost/latency</li>
                        <li>Risk of circularity if initial draft is weak</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                </div>
                <GSAPAnimated animation="fadeIn" delay={0.8}>
                  <p style={{ marginTop: '15px', fontSize: '1.2rem', fontStyle: 'italic' }}>
                    Ideal for scenarios requiring factual accuracy, citations, and verification of information
                  </p>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#174f41',
          notes: `### Answer-Conditioned Re-Retrieval: Pros and Cons

#### Verification Versus Efficiency

[conversational] Answer-Conditioned Re-Retrieval offers maximum verification [cautiously] but at a cost. Let's examine when this investment is worthwhile.

#### The Compelling Strengths

[confidently] High precision and auditability are the defining features. By explicitly retrieving evidence for each claim and marking support or conflict, you create a fully auditable trail from claims to evidence. [enthusiastically] This level of transparency is unmatched by other strategies. [warmly] Every stakeholder can see exactly which evidence supports which claim and whether any claims lack proper support.

[firmly] Being good for compliance is crucial in regulated industries. [seriously] Healthcare, legal, financial services, and other high-stakes domains often have strict requirements for substantiating claims with evidence. [confidently] Answer-Conditioned Re-Retrieval provides a systematic framework for meeting these requirements. [pleased] You're not just hoping you retrieved relevant evidence; you're explicitly validating each claim.

#### The Significant Costs

[cautiously] However, extra passes definitely increase cost and latency. [concerned] You're generating a provisional answer, extracting claims, retrieving evidence for each claim, and then revising the answer. That's multiple language model calls and multiple retrieval operations. [disappointed] For applications where sub-second response times are expected, this overhead can be prohibitive.

[seriously] The risk of circularity if the initial draft is weak is a subtle but important concern. [cautiously] If your provisional answer contains hallucinations or misconceptions, retrieving evidence conditioned on those flawed claims might reinforce errors rather than correct them. [puzzled] You might retrieve documents that superficially match the flawed claims without actually supporting them. [firmly] This makes the quality of your provisional answer generation crucial.

#### The Right Applications

[conversational] This strategy is ideal for scenarios requiring factual accuracy, citations, and verification of information. [confidently] Academic research, professional reports, medical information systems, legal research tools, and any application where stakeholders need to verify claims are all excellent use cases.

Now let's move to our final strategy, Feedback-Based Retrieval Loop, which uses quality signals to continuously improve retrieval.`
        }
      ]
    },
    {
      id: 'feedback-based',
      title: 'Feedback-Based',
      slides: [
        {
          id: 20,
          title: '9. Feedback-Based Retrieval Loop',
          icon: { name: 'duo-chart-line' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <GSAPAnimated animation="bounceIn" delay={0.2}>
                  <p><strong>Goal:</strong> Adapt retrieval using user/model feedback signals to improve relevance over time</p>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInLeft" delay={0.4}>
                  <p><strong>How It Works:</strong> Collect relevance feedback (explicit or implicit), update queries/weights, re-retrieve</p>
                </GSAPAnimated>
                <GSAPAnimated animation="fadeIn" delay={0.6}>
                  <p><strong>When to Use:</strong> Interactive systems, personalization, cold-start or dynamic corpora</p>
                </GSAPAnimated>
                <GSAPAnimated animation="scaleIn" delay={0.8}>
                  <div style={{ marginTop: '20px' }}>
                    <p><strong>Steps:</strong></p>
                    <ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                      <li>Run initial retrieval and present answer/snippets</li>
                      <li>Gather feedback (clicks, votes, dwell time, critiques)</li>
                      <li>Update query, weights, or reranking based on feedback</li>
                      <li>Re-retrieve and iterate; store preferences</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#2e174f',
          notes: `### 9. Feedback-Based Retrieval Loop

#### Learning from User Signals

[conversational] Our ninth and final strategy is Feedback-Based Retrieval Loop, [excited] and it's unique among our techniques because it explicitly learns from user behavior to improve retrieval over time. [storytelling] Instead of treating each query as independent, it uses feedback signals to adapt and personalize the retrieval process.

#### The Core Mechanism

[lecture] The goal is to adapt retrieval using user or model feedback signals to improve relevance over time. [confidently] You collect signals about what users found helpful, use those signals to update your retrieval strategy, and continuously improve based on accumulated feedback.

[conversational] The workflow is straightforward. First, you run initial retrieval and present answers or snippets to the user. Then, you gather feedback, which can be explicit like thumbs up or down, or implicit like click-through rates, dwell time, or which parts of the answer the user copies. Next, you update your query formulation, ranking weights, or reranking models based on that feedback. Finally, you re-retrieve with the updated strategy and iterate, storing user preferences for future queries.

\`\`\`mermaid
graph LR
    A[Initial Retrieval] --> B[Present Results]
    B --> C[Collect Feedback]
    C --> D[Update Strategy]
    D --> E[Re-retrieve]
    E --> F{Satisfied?}
    F -->|No| B
    F -->|Yes| G[Store Preferences]
    style A fill:#4fc3f7
    style G fill:#81c784
\`\`\`

#### When This Strategy Excels

[enthusiastically] Feedback-Based Retrieval is ideal for interactive systems where users can provide signals. [pleased] It's perfect for personalization, learning individual user preferences and tailoring results accordingly. [confidently] It's valuable for cold-start situations where you don't have much information about user intent, and it's excellent for dynamic corpora where document relevance changes over time.

#### The Key Benefits

[warmly] Personalization is a major advantage. Different users care about different things, and feedback lets you adapt to individual preferences. [excited] Continuous improvement means your system gets better over time rather than remaining static. [confidently] And data-driven tuning based on real user behavior is more reliable than guessing about what users want.

[conversational] Let's examine the complete picture on the next slide.`
        },
        {
          id: 21,
          title: 'Pros and Cons',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                  <GSAPAnimated animation="slideInLeft" delay={0.3}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Pros:</strong></p>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Personalization</li>
                        <li>Continuous improvement</li>
                        <li>Data-driven tuning</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                  <GSAPAnimated animation="slideInRight" delay={0.5}>
                    <div style={{ flex: 1 }}>
                      <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Cons:</strong></p>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Needs logging/UX</li>
                        <li>Privacy concerns</li>
                        <li>Benefits may be delayed</li>
                      </ul>
                    </div>
                  </GSAPAnimated>
                </div>
                <GSAPAnimated animation="fadeIn" delay={0.8}>
                  <p style={{ marginTop: '15px', fontSize: '1.2rem', fontStyle: 'italic' }}>
                    Best suited for systems with user interaction where feedback can be collected and used to refine future results
                  </p>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#2e174f',
          notes: `### Feedback-Based Retrieval Loop: Pros and Cons

#### Learning Systems Trade-offs

[conversational] Feedback-Based Retrieval Loop represents a shift from static to dynamic retrieval systems. [confidently] Let's examine what this shift entails.

#### The Valuable Benefits

[enthusiastically] Personalization is transformative for user experience. [storytelling] Instead of giving everyone the same results, you can tailor retrieval to individual preferences, expertise levels, and usage patterns. A beginner and an expert asking the same question might get results at appropriate levels of detail based on their historical feedback.

[pleased] Continuous improvement means your system doesn't stagnate. [warmly] Every user interaction is an opportunity to learn and get better. [excited] Over weeks and months, the system becomes increasingly attuned to what works and what doesn't, improving results for everyone.

[confidently] Data-driven tuning is more reliable than intuition. Instead of guessing about ranking weights or which retrieval strategies work best, you let real user behavior guide your decisions. [pleased] This empirical approach often surfaces insights that manual tuning would miss.

#### The Implementation Challenges

[cautiously] However, needing logging and user experience infrastructure is non-trivial. [concerned] You need to instrument your system to capture feedback signals, build interfaces for explicit feedback if you're using it, and create pipelines to process and apply that feedback. [firmly] This is engineering overhead that other strategies don't require.

[seriously] Privacy concerns are serious and growing. Storing user behavior and preferences raises questions about data protection, user consent, and potential misuse. [cautiously] You need robust privacy safeguards and clear policies about how feedback data is used.

[disappointed] Benefits may be delayed is a practical challenge. Unlike other strategies that improve results immediately, feedback-based approaches need time to accumulate signal before they show significant improvement. [puzzled] This makes them harder to justify in the short term.

#### The Right Applications

[conversational] This strategy is best suited for systems with user interaction where feedback can be collected and used to refine future results. [confidently] Search engines, recommendation systems, conversational agents, and any application with repeat users are prime candidates.

Now let's bring everything together with our summary and decision guide.`
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 22,
          title: 'Summary and How to Choose',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ textAlign: 'left', fontSize: '2rem' }}>
              <div style={{ marginBottom: '25px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}>
                  <div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4fc3f7', marginBottom: '15px' }}>
                      <SvgIcon iconName="duo-map" sizeName="2x" darkModeInvert={true} />
                      Quick Chooser
                    </h3>
                    <ul style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                      <li><strong>Need recall boost with minimal changes:</strong> HyDE</li>
                      <li><strong>Ambiguous or exploratory:</strong> Iterative Retrieve-and-Refine</li>
                      <li><strong>Multi-fact tasks:</strong> Query Decomposition</li>
                      <li><strong>Reasoning with targeted facts:</strong> CoT-Guided Retrieval</li>
                      <li><strong>Concept-heavy or noisy queries:</strong> Step-Back Retrieval</li>
                      <li><strong>Relational/multi-hop facts:</strong> Graph Traversal</li>
                      <li><strong>Long sessions/window limits:</strong> Context-Summarize-and-Retrieve</li>
                      <li><strong>Citations/fact-checking:</strong> Answer-Conditioned Re-Retrieval</li>
                      <li><strong>Personalization:</strong> Feedback Loop</li>
                    </ul>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}>
                  <div>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ef5350', marginBottom: '15px' }}>
                      <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                      Common Pitfalls
                    </h3>
                    <ul style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                      <li><strong>Drift:</strong> Query reformulation moving away from original intent</li>
                      <li><strong>Hallucination anchoring:</strong> Initial errors propagating through pipeline</li>
                      <li><strong>Path explosion:</strong> Too many branches in multi-hop retrieval</li>
                      <li><strong>Latency budgets:</strong> Multiple retrieval rounds adding excessive delay</li>
                    </ul>
                    <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#81c784', marginBottom: '15px', marginTop: '20px' }}>
                      <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                      Implementation Tips
                    </h3>
                    <ul style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                      <li>Define clear stop criteria for iterative approaches</li>
                      <li>Cache embeddings/results between iterations</li>
                      <li>Log traces for evaluation and debugging</li>
                      <li>Measure faithfulness + coverage + latency metrics</li>
                      <li>Start simple, add complexity only when needed</li>
                    </ul>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.7}>
                <div style={{ marginTop: '10px', padding: '10px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '8px', textAlign: 'left' }}>
                  <p style={{ fontSize: '1rem', margin: 0 }}>
                    <SvgIcon iconName="duo-rocket" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '10px' }} darkModeInvert={true} />
                    <strong>Pro Tip:</strong> Consider combining strategies: use simple techniques for initial query understanding,
                    then more complex ones for evidence gathering and verification
                  </p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Summary and How to Choose

#### Bringing It All Together

[warmly] We've covered nine distinct multi-step retrieval strategies, each with its own strengths, weaknesses, and ideal use cases. [confidently] Now let's bring everything together with practical guidance on choosing the right strategy for your needs.

#### The Quick Chooser Guide

[conversational] When you need a recall boost with minimal changes to your existing system, reach for HyDE. [pleased] It's simple to implement and effective for vocabulary mismatch problems.

For ambiguous or exploratory queries where you're not sure what direction the question will take, use Iterative Retrieve-and-Refine. Its adaptive nature handles uncertainty well.

[lecture] Multi-fact tasks that require gathering information from different domains or sources call for Query Decomposition, which lets you tackle each aspect independently.

When you need reasoning with targeted facts at specific steps, Chain-of-Thought Guided Retrieval provides the structured approach you need.

[conversational] Concept-heavy or noisy queries benefit from Step-Back Retrieval, which zooms out to understand principles before diving into specifics.

Relational or multi-hop facts that connect across documents naturally map to Graph Traversal approaches.

[firmly] Long sessions or context window limits require Context-Summarize-and-Retrieve to manage bounded memory effectively.

[confidently] Citations and fact-checking needs are perfectly suited to Answer-Conditioned Re-Retrieval's systematic verification approach.

[pleased] And personalization requirements point you toward Feedback Loop strategies that learn from user behavior.

#### Common Pitfalls to Avoid

[cautiously] Watch out for drift, where query reformulation gradually moves away from the user's original intent. [concerned] This is especially common in iterative approaches without proper anchoring.

[seriously] Beware of hallucination anchoring, where initial errors propagate through your pipeline and get reinforced rather than corrected.

[firmly] Manage path explosion in multi-hop retrieval by using beam search and aggressive pruning of unlikely paths.

[cautiously] Respect latency budgets. [disappointed] Multiple retrieval rounds add up quickly, and users won't wait forever. [confidently] Cache aggressively and consider asynchronous processing.

#### Implementation Best Practices

[lecture] Always define clear stop criteria for iterative approaches. Don't let loops run indefinitely or until arbitrary iteration counts.

Cache embeddings and results between iterations. Re-embedding the same text multiple times is wasteful.

[firmly] Log comprehensive traces for evaluation and debugging. Multi-step systems are complex, and you need visibility into what's happening at each stage.

Measure faithfulness, coverage, and latency metrics. Don't optimize for one at the expense of the others.

[confidently] Start simple and add complexity only when needed. Many problems can be solved with simpler strategies, and added complexity brings added failure modes.

#### The Pro Tip

[enthusiastically] Consider combining strategies. [storytelling] Use simple techniques like HyDE for initial query understanding to boost recall, then apply more complex approaches like Answer-Conditioned Re-Retrieval for evidence gathering and verification. [warmly] The strategies in this guide aren't mutually exclusive; they're tools in your toolkit that can be composed for maximum effectiveness.

[inspiringly] Thank you for joining me on this journey through multi-step retrieval strategies. [confidently] Armed with these techniques and decision criteria, you're ready to build more sophisticated, accurate, and robust RAG applications. [warmly] Happy building!`
        }
      ]
    }
  ]
};
