import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

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
              <h2>Retrieve → Generate → Retrieve</h2>
              <p style={{ fontSize: '1.4rem', marginTop: '30px' }}>
                <SvgIcon iconName="duo-arrows-rotate" sizeName="2x" style={{ marginRight: '15px', verticalAlign: 'middle' }} darkModeInvert={true} />
                A comprehensive guide to 9 techniques that improve retrieval augmented generation through multi-step processes
              </p>
              <p style={{ fontSize: '1.2rem' }}>
                Find the right strategy for your RAG pipeline with these detailed cheat sheets
              </p>
              <p><strong>Prepared by:</strong> Nisar A</p>
              <p><strong>Date:</strong> November 7, 2025</p>
              <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
            </div>
          ),
          backgroundColor: '#1e2f5d',
          notes: ''
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
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4fc3f7' }}>
                    <SvgIcon iconName="duo-circle-nodes" sizeName="2x" darkModeInvert={true} />
                    What It Is
                  </h3>
                  <p>Iteratively combine retrieval and generation to refine queries, evidence, and answers</p>
                </div>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#81c784' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                    Why It Matters
                  </h3>
                  <p>Improves recall, precision, and robustness for complex questions vs single-shot RAG</p>
                </div>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffb74d' }}>
                    <SvgIcon iconName="duo-clock" sizeName="2x" darkModeInvert={true} />
                    When To Use
                  </h3>
                  <p>Ambiguous queries, multi-hop reasoning, long-form answers, citation needs</p>
                </div>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ba68c8' }}>
                    <SvgIcon iconName="duo-trophy" sizeName="2x" darkModeInvert={true} />
                    What You'll Get
                  </h3>
                  <p>9 technique cheat sheets (Goal, How It Works, When to Use, Steps, Pros, Cons)</p>
                </div>
              </div>
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
            </div>
          ),
          backgroundColor: '#1e2f5d',
          notes: ''
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-arrows-rotate" sizeName="2x" style={{ color: '#4fc3f7' }} darkModeInvert={true} />
                  <span>1. Iterative Retrieve-and-Refine</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-file-lines" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} />
                  <span>2. HyDE</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-list-check" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} />
                  <span>3. Query Decomposition</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-brain" sizeName="2x" style={{ color: '#ba68c8' }} darkModeInvert={true} />
                  <span>4. Chain-of-Thought Guided</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: 'rgba(240, 98, 146, 0.2)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-arrow-left" sizeName="2x" style={{ color: '#f06292' }} darkModeInvert={true} />
                  <span>5. Step-Back Reasoning</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: 'rgba(100, 181, 246, 0.2)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-circle-nodes" sizeName="2x" style={{ color: '#64b5f6' }} darkModeInvert={true} />
                  <span>6. Multi-Hop Graph</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: 'rgba(174, 213, 129, 0.2)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-book-open" sizeName="2x" style={{ color: '#aed581' }} darkModeInvert={true} />
                  <span>7. Context-Summarize</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: 'rgba(255, 167, 38, 0.2)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-check-double" sizeName="2x" style={{ color: '#ffa726' }} darkModeInvert={true} />
                  <span>8. Answer-Conditioned</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-chart-line" sizeName="2x" style={{ color: '#ef5350' }} darkModeInvert={true} />
                  <span>9. Feedback-Based</span>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1e2f5d',
          notes: ''
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
                <p><strong>Goal:</strong> Progressively improve evidence and answer quality through multiple small retrieval-generation loops</p>
                <p><strong>How It Works:</strong> Alternate between drafting, spotting gaps, reformulating queries, and re-retrieving to refine answers</p>
                <p><strong>When to Use:</strong> Ambiguous questions, sparse corpora, long-form synthesis, exploratory Q&A</p>
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
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: ''
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
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Better coverage of complex topics</li>
                      <li>Self-correction capabilities</li>
                      <li>Adaptable to uncertainty</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                      <li>Higher latency and computational cost</li>
                      <li>Risk of query/topic drift</li>
                      <li>Compounding errors without safeguards</li>
                    </ul>
                  </div>
                </div>
                <p style={{ marginTop: '15px', fontSize: '1.2rem', fontStyle: 'italic' }}>
                  Used most often for complex questions where a single retrieval pass misses important details or context
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: ''
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
                <p><strong>Goal:</strong> Boost recall by seeding retrieval with a synthetic document representing the ideal evidence</p>
                <p><strong>How It Works:</strong> Generate a hypothetical passage from the query; embed it to retrieve similar real documents</p>
                <p><strong>When to Use:</strong> Short queries, niche domains, low-recall vector stores, lexical mismatch</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                    <li>Prompt model to write a plausible, concise hypothetical document</li>
                    <li>Embed hypothetical and run kNN retrieval</li>
                    <li>Retrieve top-k real documents; discard the hypothetical</li>
                    <li>Answer using retrieved evidence; iterate if needed</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#4b174f',
          notes: ''
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
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                    <li>Strong recall lift</li>
                      <li>Bridges vocabulary gaps</li>
                      <li>Simple to add to existing pipelines</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                    <li>Can anchor to hallucinations</li>
                      <li>May pull loosely related documents</li>
                      <li>Extra generation cost</li>
                    </ul>
                  </div>
                </div>
                <p style={{ marginTop: '15px', fontSize: '1.2rem', fontStyle: 'italic' }}>
                Particularly effective when direct keyword matching fails due to vocabulary mismatch between queries and documents
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#4b174f',
          notes: ''
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
                <p><strong>Goal:</strong> Break complex questions into sub-questions and solve step-by-step</p>
                <p><strong>How It Works:</strong> Plan sub-queries, retrieve per sub-query, then synthesize results into comprehensive answer</p>
                <p><strong>When to Use:</strong> Multi-fact or multi-source questions, procedural tasks, comprehensive reports</p>
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
              </div>
            </div>
          ),
          backgroundColor: '#172e4f',
          notes: ''
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
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                    <li>Modular approach to complex questions</li>
                      <li>Interpretable reasoning steps</li>
                      <li>Parallelizable for performance</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                    <li>Planning overhead</li>
                      <li>Error propagation across steps</li>
                      <li>Longer pipelines</li>
                    </ul>
                  </div>
                </div>
                <p style={{ marginTop: '15px', fontSize: '1.2rem', fontStyle: 'italic' }}>
                Best for multi-dimensional questions where separate aspects can be addressed individually before synthesis
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#172e4f',
          notes: ''
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
                <p><strong>Goal:</strong> Use reasoning traces to focus retrieval on facts needed at each step</p>
                <p><strong>How It Works:</strong> Generate a CoT skeleton; extract entities/relations per step; retrieve targeted snippets</p>
                <p><strong>When to Use:</strong> Reasoning-heavy tasks where targeted facts matter (analysis, calculations with context)</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                    <li>Draft a brief CoT outline (no final answer yet)</li>
                    <li>From each step, extract cues (entities, relations, formulas)</li>
                    <li>Retrieve per step; attach evidence to the step</li>
                    <li>Produce final answer using step-aligned evidence</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#174f1b',
          notes: ''
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
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                    <li>High precision</li>
                      <li>Transparent reasoning-evidence links</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                    <li>Verbose</li>
                      <li>Prompt-sensitive</li>
                      <li>May overfit to early reasoning errors</li>
                    </ul>
                  </div>
                </div>
                <p style={{ marginTop: '15px', fontSize: '1.2rem', fontStyle: 'italic' }}>
                Ideal for complex reasoning tasks that need precise evidence at each reasoning step
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#174f1b',
          notes: ''
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
                <p><strong>Goal:</strong> Generalize question to higher-level abstraction, retrieve broad context, then specialize</p>
                <p><strong>How It Works:</strong> Ask a meta-question (what is the core concept?), retrieve summaries, then drill down</p>
                <p><strong>When to Use:</strong> Overly specific/noisy queries, concept-heavy topics, when direct retrieval fails</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                    <li>Generate a step-back question capturing the core idea</li>
                    <li>Retrieve high-level overviews/definitions</li>
                    <li>Reformulate a precise follow-up query</li>
                    <li>Re-retrieve specific evidence; answer</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#17404f',
          notes: ''
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
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                    <li>Robust to noise</li>
                      <li>Reduces myopic retrieval</li>
                      <li>Good for learning tasks</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                    <li>May pull generic info</li>
                      <li>Requires careful prompting</li>
                      <li>Extra hops increase latency</li>
                    </ul>
                  </div>
                </div>
                <p style={{ marginTop: '15px', fontSize: '1.2rem', fontStyle: 'italic' }}>
                Best for questions where zooming out to understand core concepts before diving into specifics improves answer quality
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#17404f',
          notes: ''
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
                <p><strong>Goal:</strong> Follow entity/relationship paths to gather multi-hop evidence</p>
                <p><strong>How It Works:</strong> Build or infer a graph (entities/relations) and traverse hops to collect supporting docs</p>
                <p><strong>When to Use:</strong> Relational questions, cause-effect chains, linking distant facts</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                    <li>Extract seed entities/relations from query</li>
                    <li>Expand neighbors (embedding or KG) with beam search</li>
                    <li>Score paths and gather documents per hop</li>
                    <li>Consolidate evidence and answer</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#4f2e17',
          notes: ''
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
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                    <li>Structured multi-hop reasoning</li>
                      <li>Strong for relational queries</li>
                      <li>Transparent path discovery</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                    <li>Requires graph infrastructure or extraction</li>
                      <li>Tuning complexity for path relevance</li>
                      <li>Potential path explosion with many hops</li>
                    </ul>
                  </div>
                </div>
                <p style={{ marginTop: '15px', fontSize: '1.2rem', fontStyle: 'italic' }}>
                Ideal for questions requiring connection of information across multiple documents or knowledge graph nodes
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#4f2e17',
          notes: ''
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
                <p><strong>Goal:</strong> Compress evolving context to stay within window while guiding next retrieval</p>
                <p><strong>How It Works:</strong> Summarize conversation/state; use summary to query for fresh, relevant evidence</p>
                <p><strong>When to Use:</strong> Long sessions, iterative research, limited context window</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                    <li>Summarize current context (salient facts, open questions)</li>
                    <li>Extract key terms/gaps from the summary</li>
                    <li>Retrieve targeted updates/new evidence</li>
                    <li>Update summary and working answer; repeat as needed</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#3f4f17',
          notes: ''
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
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                    <li>Controls token growth</li>
                      <li>Maintains focus</li>
                      <li>Good for ongoing tasks</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                    <li>Summarization loss/bias</li>
                      <li>Summary drift</li>
                      <li>Requires careful evaluation</li>
                    </ul>
                  </div>
                </div>
                <p style={{ marginTop: '15px', fontSize: '1.2rem', fontStyle: 'italic' }}>
                Especially useful for extended conversations and research sessions where context management is essential
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#3f4f17',
          notes: ''
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
                <p><strong>Goal:</strong> Verify and complete provisional answer by retrieving evidence conditioned on its claims</p>
                <p><strong>How It Works:</strong> Draft answer → extract claims → retrieve per claim → revise and cite</p>
                <p><strong>When to Use:</strong> Fact-checking, citations, high-stakes outputs, audits</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                    <li>Generate a provisional answer</li>
                    <li>Extract atomic claims and needed citations</li>
                    <li>Retrieve evidence per claim; label support or conflict</li>
                    <li>Revise answer, add citations, or flag uncertainty</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#174f41',
          notes: ''
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
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                    <li>High precision and auditability</li>
                      <li>Good for compliance</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                    <li>Extra passes increase cost/latency</li>
                      <li>Risk of circularity if initial draft is weak</li>
                    </ul>
                  </div>
                </div>
                <p style={{ marginTop: '15px', fontSize: '1.2rem', fontStyle: 'italic' }}>
                Ideal for scenarios requiring factual accuracy, citations, and verification of information
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#174f41',
          notes: ''
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
                <p><strong>Goal:</strong> Adapt retrieval using user/model feedback signals to improve relevance over time</p>
                <p><strong>How It Works:</strong> Collect relevance feedback (explicit or implicit), update queries/weights, re-retrieve</p>
                <p><strong>When to Use:</strong> Interactive systems, personalization, cold-start or dynamic corpora</p>
                <div style={{ marginTop: '20px' }}>
                  <p><strong>Steps:</strong></p>
                  <ul style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                    <li>Run initial retrieval and present answer/snippets</li>
                    <li>Gather feedback (clicks, votes, dwell time, critiques)</li>
                    <li>Update query, weights, or reranking based on feedback</li>
                    <li>Re-retrieve and iterate; store preferences</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#2e174f',
          notes: ''
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
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Pros:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                    <li>Personalization</li>
                      <li>Continuous improvement</li>
                      <li>Data-driven tuning</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong style={{ fontSize: '2rem' }}>Cons:</strong></p>
                    <ul style={{ fontSize: '1.2rem' }}>
                    <li>Needs logging/UX</li>
                      <li>Privacy concerns</li>
                      <li>Benefits may be delayed</li>
                    </ul>
                  </div>
                </div>
                <p style={{ marginTop: '15px', fontSize: '1.2rem', fontStyle: 'italic' }}>
                Best suited for systems with user interaction where feedback can be collected and used to refine future results
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#2e174f',
          notes: ''
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
              </div>
              <div style={{ marginTop: '10px', padding: '10px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '8px', textAlign: 'left' }}>
                <p style={{ fontSize: '1rem', margin: 0 }}>
                  <SvgIcon iconName="duo-rocket" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '10px' }} darkModeInvert={true} />
                  <strong>Pro Tip:</strong> Consider combining strategies: use simple techniques for initial query understanding, 
                  then more complex ones for evidence gathering and verification
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: ''
        }
      ]
    }
  ]
};
