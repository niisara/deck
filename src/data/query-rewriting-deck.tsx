import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

export const queryRewritingDeck: Deck = {
  id: 'query-rewriting-deck',
  name: '21 Query Rewriting Strategies for RAG',
  description: 'Practical patterns, prompts, and examples for better retrieval',
  category: 'RAG',
  theme: 'moon',
  kenBurns: true,
  backgroundImages: [
    'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=1920&q=80',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
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
          title: '21 Query Rewriting Strategies for RAG',
          content: (
            <div style={{ color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" duration={1} delay={0.2}>
                <h2 style={{ marginBottom: '40px' }}>Practical patterns, prompts, and examples for better retrieval</h2>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.5}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', marginTop: '30px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <SvgIcon iconName="duo-pen-to-square" sizeName="4x" style={{ color: '#3498db' }} />
                    <p style={{ marginTop: '15px', marginBottom: '0px', fontSize: '1.2rem' }}>Rewrite</p>
                  </div>
                  <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <SvgIcon iconName="duo-magnifying-glass" sizeName="4x" style={{ color: '#2ecc71' }} />
                    <p style={{ marginTop: '15px', marginBottom: '0px', fontSize: '1.2rem' }}>Retrieve</p>
                  </div>
                  <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="4x" style={{ color: '#f39c12' }} />
                    <p style={{ marginTop: '15px', marginBottom: '0px', fontSize: '1.2rem' }}>Precision</p>
                  </div>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.9}>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 21 Query Rewriting Strategies for RAG
[cheerfully] Welcome everyone! Today we're going to explore twenty-one practical query rewriting strategies that can dramatically improve your RAG 👉 'rag' systems. [conversational] RAG stands for Retrieval-Augmented Generation, and the idea is simple: before an LLM 👉 'ell-em' answers a question, it first retrieves relevant documents. [seriously] But here's the thing — if the query going into your retrieval system is vague, ambiguous, or poorly worded, the documents you get back will be low quality, and your final answer will suffer.
#### 🎯 What You'll Learn
[energetic] We'll walk through **21 battle-tested strategies** for rewriting user queries so your retrieval pipeline returns much better results. Each strategy comes with a clear explanation, a prompt template you can copy, an implementation pattern, and real-world examples showing the before-and-after.
[storytelling] Think of query rewriting as a translator sitting between the user and your search engine. The user says something messy, and the rewriter cleans it up before it ever touches the retrieval system. [confidently] Simple concept, massive impact.
[enthusiastically] Let's dive in!`
        },
        {
          id: 2,
          title: 'Why Query Rewriting?',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.2}><div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e74c3c', marginBottom: '20px' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                    Problems It Solves
                  </h3>
                  <ul style={{ lineHeight: '2' }}>
                    <li><strong>Vague or underspecified queries</strong><br />
                      <span style={{ fontSize: '1rem', opacity: 0.9 }}>Users often submit queries that lack sufficient detail for accurate retrieval</span></li>
                    <li><strong>Vocabulary/ontology mismatch</strong><br />
                      <span style={{ fontSize: '1rem', opacity: 0.9 }}>User phrasing differs from corpus terminology, creating semantic gaps</span></li>
                    <li><strong>Long/complex questions harming recall</strong><br />
                      <span style={{ fontSize: '1rem', opacity: 0.9 }}>Multi-part questions dilute key search terms, reducing retrieval effectiveness</span></li>
                    <li><strong>Conversational context loss in follow-ups</strong><br />
                      <span style={{ fontSize: '1rem', opacity: 0.9 }}>Follow-up queries lack critical context from previous conversation turns</span></li>
                    <li><strong>Hallucinations from poor context</strong><br />
                      <span style={{ fontSize: '1rem', opacity: 0.9 }}>Insufficient retrieval leads to LLM hallucinations and incorrect answers</span></li>
                  </ul>
                </div></GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.4}><div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#2ecc71', marginBottom: '20px' }}>
                    <SvgIcon iconName="duo-check-double" sizeName="2x" darkModeInvert={true} />
                    Outcomes
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '10px' }}>
                    <div style={{ padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', borderLeft: '4px solid #2ecc71' }}>
                      <strong>Higher recall in retrieval</strong>
                    </div>
                    <div style={{ padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', borderLeft: '4px solid #2ecc71' }}>
                      <strong>Better precision in results</strong>
                    </div>
                    <div style={{ padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', borderLeft: '4px solid #2ecc71' }}>
                      <strong>Stronger factual grounding</strong>
                    </div>
                    <div style={{ padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', borderLeft: '4px solid #2ecc71' }}>
                      <strong>Fewer manual rewrites by users</strong>
                    </div>
                    <div style={{ padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', borderLeft: '4px solid #2ecc71' }}>
                      <strong>Reduced hallucinations</strong>
                    </div>
                  </div>
                </div></GSAPAnimated>
              </div>
            </div>
          ),
          notes: `### Why Query Rewriting?
[conversational] So why do we even need query rewriting? [seriously] Let's look at the real problems it solves.
#### ❌ The Problems
[cautiously] Users are notoriously bad at writing good search queries. They type things like "pricing" when they mean "What is the current pricing for the Enterprise plan of Product X?" They use **vague or underspecified queries** all the time. [concerned] Then there's the **vocabulary mismatch** problem — a user might say "heart attack" but your medical corpus uses "myocardial infarction." Those are semantically identical but lexically completely different, so keyword search fails. **Long, complex questions** also hurt recall because the important terms get diluted. [disappointed] And in chat applications, **follow-up questions** like "What about its limits?" lose all context from previous turns.
#### ✅ The Outcomes
[pleased] When you apply query rewriting, you get **higher recall** — more relevant documents come back. You get **better precision** — fewer irrelevant results cluttering the context window. [enthusiastically] Your answers become **more factually grounded** because the LLM has better source material. And users stop having to manually rephrase their questions over and over.
> 🎤 Ask the audience: "Has anyone experienced a chatbot that just couldn't understand follow-up questions?"
[conversational] Let's see the actual numbers next.`
        },
        {
          id: 3,
          title: 'Impact on RAG Performance',
          icon: { name: 'duo-chart-line' },
          content: (
            <div style={{ margin: '0 auto', fontSize: '2rem', color: '#509dd1' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="fadeIn" delay={0.2}><div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px', marginBottom: '40px' }}>
                <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(52, 152, 219, 0.15)', borderRadius: '10px', color: '#3498db', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-chart-line" sizeName="3x" style={{ color: '#3498db' }} />
                    <h4 style={{ color: '#3498db' }}>Recall@k</h4>
                  </div>
                  <p style={{ fontSize: '2em', fontWeight: 'bold', margin: '10px 0' }}>15-40%</p>
                  <p style={{ margin: '0px' }}>Improvement in relevant document retrieval</p>
                </div>
                <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(155, 89, 182, 0.15)', borderRadius: '10px', color: '#9b59b6', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-ranking-star" sizeName="3x" style={{ color: '#9b59b6' }} />
                    <h4 style={{ color: '#9b59b6' }}>MRR/NDCG</h4>
                  </div>
                  <p style={{ fontSize: '2em', fontWeight: 'bold', margin: '10px 0' }}>10-25%</p>
                  <p style={{ margin: '0px' }}>Boost in ranking quality metrics</p>
                </div>
                <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(46, 204, 113, 0.15)', borderRadius: '10px', color: '#2ecc71', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-anchor" sizeName="3x" style={{ color: '#2ecc71' }} />
                    <h4 style={{ color: '#2ecc71' }}>Grounded-rate</h4>
                  </div>
                  <p style={{ fontSize: '2em', fontWeight: 'bold', margin: '10px 0' }}>20-45%</p>
                  <p style={{ margin: '0px' }}>More answers properly grounded in retrieved context</p>
                </div>
                <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(243, 156, 18, 0.15)', borderRadius: '10px', color: '#f39c12', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-award" sizeName="3x" style={{ color: '#f39c12' }} />
                    <h4 style={{ color: '#f39c12' }}>Eval pass@1</h4>
                  </div>
                  <p style={{ fontSize: '2em', fontWeight: 'bold', margin: '10px 0' }}>15-30%</p>
                  <p style={{ margin: '0px' }}>Improvement in single-attempt success rate</p>
                </div>
              </div></GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.6}><div style={{ padding: '20px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', textAlign: 'center', fontSize: '1.2rem' }}>
                <strong>💡 Key Benefits:</strong> Improves top-k recall, reduces off-topic retrieval, boosts QA accuracy, enables domain/temporal disambiguation
              </div></GSAPAnimated>
            </div>
          ),
          notes: `### Impact on RAG Performance
[excited] Now let's talk numbers, because this is where it gets exciting.
#### 📊 The Metrics
[confidently] **Recall at k** — that's the fraction of relevant documents you actually retrieve in your top-k results — sees a **15-40% improvement** with proper query rewriting. [enthusiastically] That's huge. MRR 👉 'em-ar-ar' and NDCG 👉 'en-dee-see-jee' — those are ranking quality metrics — jump by **10-25%**. The **grounded-rate**, meaning how many answers are actually backed by retrieved evidence, improves by **20-45%**. And **Eval pass at one**, the chance of getting the right answer on the first try, goes up **15-30%**.
#### 💡 Why These Numbers Matter
[storytelling] Think about it this way: if your RAG system currently answers 60% of questions correctly, a 20% improvement in grounded-rate could push that to over 70%. [firmly] That's the difference between a frustrating chatbot and a useful one. [pleased] And these gains come without changing your embedding model, your vector database, or your LLM — just by rewriting the query before it hits the retrieval system.
[conversational] Let's now look at the implementation workflow to see how this fits together.`
        },
        {
          id: 4,
          title: 'Implementation Workflow',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <h3 style={{ paddingBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Step-by-Step Process
                  <MermaidPopover
                    title="Query Rewriting Workflow"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["📋 Parse Intent"] --> B["📝 Pick Policy"]
    B --> C["✨ Transform"]
    C --> D["🔍 Retrieve"]
    D --> E["✅ Check Coverage"]
    E --> F["📊 Log & Adapt"]
    E -->|"gaps?"| C
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#3a1a5c,color:#e9d5ff,stroke:#aaaaaa,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}><div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
                <div style={{ textAlign: 'center', padding: '10px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', border: '2px solid #3498db', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#3498db' }}>
                  <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#3498db', marginBottom: '10px' }}>1</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} />
                    <h4 style={{ marginTop: '10px', color: '#3498db' }}>Parse Intent & Context</h4>
                  </div>
                  <p style={{ margin: '8px' }}>Extract user intent and relevant contextual information from history and user profile</p>
                </div>
                <div style={{ textAlign: 'center', padding: '10px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '10px', border: '2px solid #9b59b6', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#9b59b6' }}>
                  <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#9b59b6', marginBottom: '10px' }}>2</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" style={{ color: '#9b59b6' }} />
                    <h4 style={{ marginTop: '10px', color: '#9b59b6' }}>Pick Rewriting Policy</h4>
                  </div>
                  <p style={{ marginTop: '8px' }}>Select appropriate rule-based, ML-based, or agent-based approach for query transformation</p>
                </div>
                <div style={{ textAlign: 'center', padding: '10px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '10px', border: '2px solid #2ecc71', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#2ecc71' }}>
                  <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#2ecc71', marginBottom: '10px' }}>3</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-wand-magic-sparkles" sizeName="2x" style={{ color: '#2ecc71' }} />
                    <h4 style={{ marginTop: '10px', color: '#2ecc71' }}>Transform Query</h4>
                  </div>
                  <p style={{ marginTop: '8px' }}>Apply one or more rewriting strategies based on query type and identified intent</p>
                </div>
                <div style={{ textAlign: 'center', padding: '10px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '10px', border: '2px solid #f39c12', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#f39c12' }}>
                  <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#f39c12', marginBottom: '10px' }}>4</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={{ color: '#f39c12' }} />
                    <h4 style={{ marginTop: '10px', color: '#f39c12' }}>Retrieve</h4>
                  </div>
                  <p style={{ marginTop: '8px' }}>Execute retrieval using hybrid search methods (sparse + dense) and reranking</p>
                </div>
                <div style={{ textAlign: 'center', padding: '10px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '10px', border: '2px solid #e67e22', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#e67e22' }}>
                  <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#e67e22', marginBottom: '10px' }}>5</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-clipboard-check" sizeName="2x" style={{ color: '#e67e22' }} />
                    <h4 style={{ marginTop: '10px', color: '#e67e22' }}>Check Coverage</h4>
                  </div>
                  <p style={{ marginTop: '8px' }}>Evaluate retrieved content coverage; iterate if needed using Iter-RetGen approach</p>
                </div>
                <div style={{ textAlign: 'center', padding: '10px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '10px', border: '2px solid #e74c3c', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#e74c3c' }}>
                  <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#e74c3c', marginBottom: '10px' }}>6</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-chart-bar" sizeName="2x" style={{ color: '#e74c3c' }} />
                    <h4 style={{ marginTop: '10px', color: '#e74c3c' }}>Log & Adapt</h4>
                  </div>
                  <p style={{ marginTop: '8px' }}>Capture feedback and performance metrics to continuously improve rewriting policy</p>
                </div>
              </div></GSAPAnimated>
            </div>
          ),
          notes: `### Implementation Workflow
[conversational] Let me walk you through the six-step workflow for implementing query rewriting in a RAG pipeline.
#### 🔄 The Six Steps
\`\`\`mermaid
flowchart LR
    A["📋 Parse Intent"] --> B["📝 Pick Policy"]
    B --> C["✨ Transform"]
    C --> D["🔍 Retrieve"]
    D --> E["✅ Check Coverage"]
    E --> F["📊 Log & Adapt"]
    E -->|"gaps?"| C
    style A fill:#4fc3f7,color:#000
    style C fill:#ffd700,color:#000
    style D fill:#e1bee7,color:#000
    style F fill:#81c784,color:#000
\`\`\`
**Step 1: Parse Intent & Context** — Figure out what the user actually wants. Is it a lookup, a comparison, troubleshooting? Extract entities and context from history. **Step 2: Pick Rewriting Policy** — Based on the intent, choose which rewriting strategy to apply. You might use a rule-based router or an LLM-based classifier. **Step 3: Transform Query** — Apply the selected rewriting strategy. This is where the magic happens. **Step 4: Retrieve** — Send the rewritten query to your retrieval system using hybrid search. **Step 5: Check Coverage** — Evaluate whether the retrieved documents actually cover the user's question. If not, loop back and try a different rewrite. **Step 6: Log & Adapt** — Capture feedback and performance metrics so you can continuously improve your rewriting policies.
#### 🛡️ Guardrails
Don't forget the guardrails: token and cost caps so your LLM rewriting doesn't blow your budget, evaluation gates to check rewrite quality, and fallback mechanisms to the original query if all rewrites fail.
[conversational] Now let's see an overview of all 21 strategies we'll cover.`
        },
        {
          id: 5,
          title: '21 Strategies Overview',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#5bbf84' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <GSAPAnimated animation="fadeIn" delay={0.2}><div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                <div>
                  <h4 style={{ color: '#3498db', marginBottom: '10px' }}>📈 Expansion & Enhancement</h4>
                  <ul style={{ lineHeight: '1.6', color: '#3498db', marginTop: '10px' }}>
                    <li>1. Query Expansion</li>
                    <li>2. Query Reformulation</li>
                    <li>5. HyDE (Hypothetical Document)</li>
                    <li>6. Multi-Query Generation</li>
                    <li>15. Query2Doc</li>
                  </ul>
                  <h4 style={{ color: '#9b59b6', marginTop: '15px', marginBottom: '10px' }}>🔍 Context & Conversation</h4>
                  <ul style={{ lineHeight: '1.6', color: '#9b59b6', marginTop: '10px' }}>
                    <li>7. Context-Aware Rewriting</li>
                    <li>8. Query Clarification</li>
                    <li>20. Intent Classification</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#2ecc71', marginBottom: '10px' }}>🧩 Decomposition & Structure</h4>
                  <ul style={{ lineHeight: '1.6', color: '#2ecc71', marginTop: '10px' }}>
                    <li>3. Query Decomposition</li>
                    <li>4. Step-Back Prompting</li>
                    <li>16. ITER-RETGEN</li>
                    <li>17. Template-Based</li>
                  </ul>
                  <h4 style={{ color: '#f39c12', marginTop: '15px', marginBottom: '10px' }}>🎯 Specification & Filtering</h4>
                  <ul style={{ lineHeight: '1.6', color: '#f39c12', marginTop: '10px' }}>
                    <li>9. Query Specification</li>
                    <li>18. Entity-Centric</li>
                    <li>19. Temporal Rewriting</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ color: '#e67e22', marginBottom: '10px' }}>🔬 Domain & Semantic</h4>
                  <ul style={{ lineHeight: '1.6', color: '#e67e22', marginTop: '10px' }}>
                    <li>10. Semantic Bridging</li>
                    <li>20. Domain-Specific</li>
                  </ul>
                  <h4 style={{ color: '#e74c3c', marginTop: '15px', marginBottom: '10px' }}>🔄 Adaptive & Learning</h4>
                  <ul style={{ lineHeight: '1.6', color: '#e74c3c', marginTop: '10px' }}>
                    <li>21. Diverse Multi-Query</li>
                    <li>22. Feedback-Based</li>
                    <li>23. Prompt-Based</li>
                    <li>24. Adaptive Rewriting</li>
                  </ul>
                </div>
              </div></GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}><p style={{ marginTop: '25px', textAlign: 'center', fontSize: '1.2rem', padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px' }}>
                <strong>21 strategies</strong> organized by approach: Expansion, Context, Decomposition, Specification, Domain, and Adaptive methods
              </p></GSAPAnimated>
            </div>
          ),
          notes: `### 21 Strategies Overview
Here's a bird's-eye view of all twenty-one strategies organized by their approach type.
#### 📈 Expansion & Enhancement
[pleased] The first cluster includes strategies that make your queries bigger and richer. **Query Expansion** adds synonyms and related terms. **Query Reformulation** makes queries clearer and self-contained. **HyDE** 👉 'hide' generates a hypothetical answer document. **Multi-Query Generation** creates multiple search queries from one. And **Query2Doc** turns a query into a pseudo-document for better semantic matching.
#### 🔍 Context & Conversation
[lecture] These deal with chat-style interactions. **Context-Aware Rewriting** makes follow-ups standalone. **Query Clarification** asks users to disambiguate. **Intent Classification** routes queries to the right strategy.
#### 🧩 Decomposition & Structure
For complex questions: **Query Decomposition** splits them into sub-questions. **Step-Back Prompting** abstracts to higher-level concepts. **ITER-RETGEN** 👉 'iter-ret-jen' iterates between retrieval and generation. **Template-Based** uses predefined patterns.
#### 🎯 Specification & Filtering
[lecture] These narrow the search: **Query Specification** adds explicit constraints. **Entity-Centric** disambiguates entities. **Temporal Rewriting** handles time references.
#### 🔬 Domain & Semantic
**Semantic Bridging** maps lay terms to expert vocabulary. **Domain-Specific Rewriting** translates to field jargon.
#### 🔄 Adaptive & Learning
[lecture] The advanced strategies: **Diverse Multi-Query**, **Feedback-Based**, **Prompt-Based**, and **Adaptive Rewriting** that picks the best strategy automatically.
[conversational] Let's start with Strategy 1: Query Expansion.`
        }
      ]
    },
    {
      id: 'strategy-1',
      title: '1. Query Expansion',
      slides: [
        {
          id: 6,
          title: '1. Query Expansion - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Bridge vocabulary gaps, increase recall with synonyms/related terms, and improve retrieval for sparse queries</h3></GSAPAnimated>
              <h3 style={{ color: '#2ecc71', marginTop: '20px', fontSize: '2rem' }}>Benefits</h3>
              <ul>
                <li>Simple implementation</li>
                <li>Cost-effective approach</li>
                <li>Significant recall improvement</li>
                <li>Works with existing search engines</li>
              </ul>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="Query Expansion: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["🔍 Short Query\n'flu treatment'"] --> B{"Issue?"}
    B -->|"Low Recall"| C["Add Synonyms\n+ Related Terms"]
    B -->|"Rare Terms"| D["Add Domain\nVariants"]
    C --> E["✅ Expanded Query\n'flu OR influenza\ntherapy OR treatment'"]
    D --> E
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#3a1a5c,color:#e9d5ff,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#3a1a5c,color:#e9d5ff,stroke:#aaaaaa,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <p>Ideal for scenarios with:</p>
                <ul>
                  <li>Low recall performance</li>
                  <li>Sparse or short queries</li>
                  <li>Domain-specific terminology</li>
                  <li>Tail terms or rare concepts</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### Query Expansion — Overview
[conversational] Let's start with the simplest and most widely used strategy: **Query Expansion**.
#### 🎯 What Is It?
[confidently] The idea is dead simple. When a user searches for "flu treatment," your retrieval system only looks for documents containing those exact words. But what about documents that say "influenza therapy" or "antiviral medication"? Query expansion **adds synonyms and related terms** to the original query so you cast a wider net. Think of it like fishing with a bigger net — you catch more relevant fish.
#### ✅ Pros
[pleased] The good stuff: it's incredibly **simple to implement**, extremely **cost-effective** since you can use lightweight approaches, and delivers **significant recall improvement** right out of the box. It works with any existing search engine, no special infrastructure needed.
#### 🕐 When to Use This?
[reassuringly] Use query expansion when you see **low recall** in your metrics, when users submit **sparse or short queries** with just two or three words, when your corpus uses **domain-specific terminology** that users don't know, or when you're dealing with **rare concepts** that have many different names.
[conversational] Let's see how it actually works under the hood.`
        },
        {
          id: 7,
          title: '1. Query Expansion - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                How Query Expansion Works
                <MermaidPopover
                  title="Query Expansion Flow"
                  diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["📝 Original Query"] --> B["🔍 Find Synonyms"]
    B --> C["📚 Thesaurus"]
    B --> D["🧠 Embeddings"]
    B --> E["🤖 LLM"]
    C --> F["📋 Expanded Query"]
    D --> F
    E --> F
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                />
              </h3></GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}><p>Add semantically related keywords and entities through multiple approaches:</p></GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.4}><ul style={{ fontSize: '1.2rem' }}>
                <li><strong>Thesaurus/dictionary lookups</strong> - Traditional synonym expansion using linguistic databases</li>
                <li><strong>Embedding-based similarity</strong> - Use vector embeddings to find semantically similar terms</li>
                <li><strong>Pseudo-relevance feedback</strong> - Extract terms from top initial retrieval results</li>
                <li><strong>LLM-generated related terms</strong> - Use language models to generate contextually relevant expansions</li>
              </ul></GSAPAnimated>
            </div>
          ),
          notes: `### Query Expansion — How It Works
So how does query expansion actually work? There are four main approaches, and you can mix and match them.
#### 🔄 The Expansion Methods
\`\`\`mermaid
flowchart LR
    A["📝 Original Query"] --> B["🔍 Find Synonyms"]
    B --> C["📚 Thesaurus"]
    B --> D["🧠 Embeddings"]
    B --> E["🤖 LLM"]
    C --> F["📋 Expanded Query"]
    D --> F
    E --> F
    style A fill:#4fc3f7,color:#000
    style F fill:#81c784,color:#000
\`\`\`
**Thesaurus and dictionary lookups** are the old-school approach — you look up synonyms in WordNet or a domain-specific dictionary. Fast and predictable but limited. **Embedding-based similarity** uses your vector embedding model to find terms that are close in semantic space. **Pseudo-relevance feedback** is clever — you do an initial retrieval, grab the top results, extract key terms from them, and add those terms back to your query. And **LLM-generated related terms** is the most flexible — you just ask a language model "give me synonyms and related terms for this query."
[firmly] The key insight is that you're not replacing the original query — you're **appending** related terms to it, usually with OR operators so the search engine considers documents matching any of the expanded terms.
[conversational] Now let's look at the implementation.`
        },
        {
          id: 8,
          title: '1. Query Expansion - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Implementation Pattern</h3></GSAPAnimated>
              <p>Heuristic+LLM approach: extract keyphrases and synonyms; append as OR/boost terms</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1.2rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Prompt template
"""
Extract 5 synonyms and 5 related terms for the following query.
Return them as a comma-separated list without explanations.
Query: {query}
"""`}
              </pre>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1.2rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Implementation example
def expand_query(query):
    related_terms = llm.generate(prompt, query=query)
    expanded = f"{query} OR {' OR '.join(related_terms)}"
    return expanded`}
              </pre>
            </div>
          ),
          notes: `### Query Expansion — Implementation
Here's a practical implementation pattern you can use right away.
#### 💻 The Prompt Template
[lecture] The prompt is straightforward: you ask the LLM to extract five synonyms and five related terms for the query. You tell it to return them as a comma-separated list without explanations — this keeps the output clean and parseable.
#### ⚙️ The Code
[lecture] The implementation is just a few lines. You send the query to the LLM with the prompt, get back the related terms, then construct an expanded query using OR operators. So "flu treatment" becomes "flu treatment OR influenza therapy OR antiviral medication OR oseltamivir OR flu remedies OR fever reduction."
[confidently] The beauty of this approach is its simplicity. You can add it to any existing RAG pipeline with minimal changes — just insert it between the user input and the retrieval step. No model fine-tuning, no special infrastructure.
[conversational] Let's look at a concrete before-and-after example.`
        },
        {
          id: 9,
          title: '1. Query Expansion - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "flu treatment"<br />
                <strong>After:</strong> "flu treatment" OR "influenza therapy" OR "antiviral medication" OR "oseltamivir" OR "flu remedies" OR "fever reduction"
              </div>
              <h3 style={{ color: '#e74c3c', paddingTop: '30px', fontSize: '2rem', paddingBottom: '10px' }}>Considerations</h3>
              <ul>
                <li>Can dilute precision without reranking</li>
                <li>Risk of query drift</li>
                <li>Less effective for ambiguous queries</li>
                <li>May need domain tuning</li>
              </ul>
            </div>
          ),
          notes: `### Query Expansion — Example & Considerations
[conversational] Let's look at a real example.
#### 📝 Before and After
[pleased] The user types "flu treatment" — just two words. After expansion, it becomes "flu treatment OR influenza therapy OR antiviral medication OR oseltamivir OR flu remedies OR fever reduction." Now your search covers medical terminology, brand names, and common phrases. The recall improvement can be dramatic — sometimes doubling the number of relevant documents retrieved.
#### ⚠️ Watch Out For
But there are gotchas. **Precision can drop** if you add too many terms without reranking — suddenly you're pulling in documents about fever reduction for sunburns. There's **query drift** risk where expanded terms take you away from the original intent. It's **less effective for ambiguous queries** — if "apple" could mean the fruit or the company, expanding with synonyms for both just makes things worse. And you may need **domain tuning** to get the expansion terms right for specialized corpora.
[firmly] The key takeaway? Query expansion is your **first line of defense** — it's simple, cheap, and effective. But pair it with a reranker to maintain precision.
[conversational] Now let's move on to Strategy 2: Query Reformulation.`
        }
      ]
    },
    {
      id: 'strategy-2',
      title: '2. Query Reformulation',
      slides: [
        {
          id: 10,
          title: '2. Query Reformulation - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Make queries clearer, self-contained, and unambiguous to enhance retrieval precision</h3></GSAPAnimated>
              <h3 style={{ color: '#2ecc71', marginTop: '40px', fontSize: '2rem' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Improved precision in results</li>
                <li>Reduces irrelevant document hits</li>
                <li>Better response in multi-turn chats</li>
                <li>Self-contained queries for caching</li>
              </ul>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="Query Reformulation: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["💬 Vague Query\n'What about pricing?'"] --> B{"Context?"}
    B -->|"Multi-turn Chat"| C["Add Context\nfrom History"]
    B -->|"Ambiguous Ref"| D["Resolve\nPronoun/Entity"]
    C --> E["✅ Explicit Query\n'Pricing for Acme\nPro API 2024'"]
    D --> E
    style A fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#3a1a5c,color:#e9d5ff,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#3a1a5c,color:#e9d5ff,stroke:#aaaaaa,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <p>Best applied to:</p>
                <ul>
                  <li>Conversational follow-up queries</li>
                  <li>Terse or vague user questions</li>
                  <li>Multi-turn interactions</li>
                  <li>Ambiguous references to entities</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### Query Reformulation — Overview
[conversational] Strategy number two is **Query Reformulation**, and it's all about making queries clearer and self-contained.
#### 🎯 What Is It?
[confidently] While query expansion adds more terms, reformulation **rewrites the entire query** to be explicit, unambiguous, and standalone. Imagine a user in a chat saying "What about pricing?" — that's completely useless without context. Reformulation transforms it into "What is the pricing for the Pro plan of Acme API in 2024?" — now it's a query that can actually retrieve relevant documents on its own.
#### ✅ Pros
[pleased] The good stuff: you get **improved precision** because the rewritten query is specific and targeted. It **reduces irrelevant document hits** since the query now says exactly what it means. It's especially powerful for **multi-turn chat** applications where follow-up queries lose context. And reformulated queries are **self-contained**, which means they're cacheable — if another user asks the same thing, you can reuse the result.
#### 🕐 When to Use This?
[reassuringly] Use reformulation for **conversational follow-ups**, **terse or vague questions**, **multi-turn interactions**, and whenever you see **ambiguous references** to entities like "it," "they," or "that one."
[conversational] Let's see the mechanics.`
        },
        {
          id: 11,
          title: '2. Query Reformulation - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>How Query Reformulation Works</h3></GSAPAnimated>
              <p>Rephrase queries with complete information by adding:</p>
              <ul>
                <li><strong>Full entity names and identifiers</strong> - Replace pronouns and abbreviations with complete names</li>
                <li><strong>Explicit constraints and qualifiers</strong> - Add missing conditions and requirements</li>
                <li><strong>Contextual information from history</strong> - Integrate relevant context from conversation</li>
                <li><strong>Missing temporal or domain context</strong> - Clarify time periods and domain-specific details</li>
              </ul>
            </div>
          ),
          notes: `### Query Reformulation — How It Works
Here's how reformulation works in practice.
#### 🔄 The Process
[lecture] The system takes a vague or context-dependent query and adds back all the missing information. It does this by incorporating **full entity names and identifiers** — replacing "it" with "the Acme Pro API." It adds **explicit constraints and qualifiers** — turning "pricing" into "current pricing for the Enterprise tier." It pulls in **contextual information from conversation history** — so "What about limits?" becomes "What are the rate limits for the service we were discussing?" And it fills in **temporal or domain context** that the user assumed but didn't state.
[firmly] The key difference from query expansion is that reformulation doesn't just add terms — it **restructures the entire query** into a clear, complete question. It's like the difference between adding ingredients to a recipe versus rewriting the recipe from scratch.
[conversational] Let's see the implementation.`
        },
        {
          id: 12,
          title: '2. Query Reformulation - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Implementation Pattern</h3></GSAPAnimated>
              <p>Clean, self-contained rewrite that preserves original intent</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Prompt template
"""
Rewrite the user query to be explicit and standalone,
keeping the original intent unchanged. Make sure all
entities and context are clearly stated.
User Query: {query}
Conversation Context: {history}
Rewritten Query:
"""`}
              </pre>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Implementation example
def reformulate_query(query, history):
    context = summarize_conversation_history(history)
    rewritten = llm.generate(prompt, query=query,
                            history=context)
    return rewritten`}
              </pre>
            </div>
          ),
          notes: `### Query Reformulation — Implementation
[lecture] The implementation uses a simple but effective prompt pattern.
#### 💻 The Prompt
You tell the LLM: "Rewrite the user query to be explicit and standalone, keeping the original intent unchanged. Make sure all entities and context are clearly stated." Then you provide both the query and the conversation context. The LLM's job is to produce a single, clean, self-contained query.
#### ⚙️ The Code
In the implementation, you first summarize the conversation history to extract the key context, then feed both the query and that context to the LLM. The output is a single rewritten query that contains everything needed for retrieval — no pronouns, no implicit references, no ambiguity.
[firmly] This pattern is absolutely essential for any chat-based RAG system. Without it, every follow-up question is essentially unsearchable.
[conversational] Let's see a before-and-after.`
        },
        {
          id: 13,
          title: '2. Query Reformulation - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "What about pricing?"<br />
                <strong>After:</strong> "What is the pricing for the Pro plan of Acme API in 2024?"
              </div>
              <h3 style={{ color: '#e74c3c', paddingTop: '20px', fontSize: '2rem' }}>Considerations</h3>
              <ul>
                <li>Requires access to conversation context</li>
                <li>Risk of over-specification</li>
                <li>May introduce assumptions</li>
                <li>Additional latency from preprocessing</li>
              </ul>
            </div>
          ),
          notes: `### Query Reformulation — Example & Considerations
Here's a perfect example of what reformulation does.
#### 📝 Before and After
[confidently] The user asks "What about pricing?" — three words, completely ambiguous. After reformulation using the conversation context, it becomes "What is the pricing for the Pro plan of Acme API in 2024?" Now the retrieval system knows exactly what to search for.
#### ⚠️ Watch Out For
But here are the risks. You need **access to conversation context** — if your system doesn't track history, reformulation can't work. There's a **risk of over-specification** where the LLM adds constraints the user didn't intend. The LLM may **introduce assumptions** that aren't warranted. And there's **additional latency** from the preprocessing step, since you're making an extra LLM call before retrieval.
The sweet spot? Use reformulation for **every follow-up query in chat** scenarios, but keep it lightweight for first-turn queries where expansion might be enough.
[conversational] Next up is Strategy 3: Query Decomposition, which handles a completely different challenge.`
        }
      ]
    },
    {
      id: 'strategy-3',
      title: '3. Query Decomposition',
      slides: [
        {
          id: 14,
          title: '3. Query Decomposition - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Handle multi-hop/complex questions that require multiple pieces of information to answer completely</h3></GSAPAnimated>
              <h3 style={{ color: '#2ecc71', marginTop: '40px', fontSize: '2rem' }}>Benefits</h3>
              <ul>
                <li>Better coverage of complex topics</li>
                <li>Improved reasoning capabilities</li>
                <li>Each sub-question can be precisely answered</li>
                <li>Reduces hallucinations on complex queries</li>
              </ul>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="Query Decomposition: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TB
    A["🧩 Complex Query\n'Compare Snowflake vs\nBigQuery for 10TB/mo'"] --> B["Split into\nSub-Questions"]
    B --> C["Q1: Snowflake\n10TB pricing?"]
    B --> D["Q2: BigQuery\n10TB pricing?"]
    B --> E["Q3: Feature\ncomparison?"]
    C --> F["✅ Synthesized\nAnswer"]
    D --> F
    E --> F
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#3a1a5c,color:#e9d5ff,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <p>Best for questions that involve:</p>
                <ul>
                  <li>Multi-entity relationships</li>
                  <li>Multi-step reasoning</li>
                  <li>Compare/contrast scenarios</li>
                  <li>Questions requiring information from different domains</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### Query Decomposition — Overview
[conversational] Strategy 3 is **Query Decomposition**, and it tackles one of the hardest problems in retrieval: complex, multi-part questions.
#### 🎯 What Is It?
When a user asks "Compare Snowflake vs BigQuery costs for 10 TB per month," that's actually several questions rolled into one. What does Snowflake charge? What does BigQuery charge? What compute resources are needed? How do the pricing structures compare? No single retrieval pass can answer all of that well. Decomposition **breaks the big question into smaller, answerable sub-questions**, retrieves documents for each one separately, then synthesizes a comprehensive answer.
#### ✅ Pros
[pleased] The good stuff: you get **better coverage** of complex topics because each aspect gets its own focused retrieval. **Reasoning improves** because each sub-question is simpler. Each sub-question can be **precisely answered** with targeted evidence. And you **reduce hallucinations** on complex queries because the LLM has specific evidence for each part.
#### 🕐 When to Use This?
[reassuringly] Use decomposition for **multi-entity relationships**, **multi-step reasoning**, **compare-and-contrast scenarios**, and questions requiring information from **different domains or sources**.
[conversational] Let's see the workflow.`
        },
        {
          id: 15,
          title: '3. Query Decomposition - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>How Query Decomposition Works</h3></GSAPAnimated>
              <p>Breaks complex queries into simpler sub-questions through an orchestrated workflow:</p>
              <ul>
                <li><strong>Split original query into atomic sub-questions</strong> - Identify independent components of the complex question</li>
                <li><strong>Retrieve relevant passages for each sub-query</strong> - Execute separate retrieval for focused information needs</li>
                <li><strong>Answer each sub-question independently</strong> - Generate targeted responses using retrieved context</li>
                <li><strong>Synthesize final answer from individual results</strong> - Combine sub-answers into comprehensive response</li>
              </ul>
            </div>
          ),
          notes: `### Query Decomposition — How It Works
[lecture] The decomposition workflow follows a plan-retrieve-answer-combine pattern.
#### 🔄 The Four Steps
First, you **split the original query into atomic sub-questions**. These should be independent, answerable on their own, and collectively cover the full scope of the original question. Second, you **retrieve relevant passages for each sub-query** — this means running separate retrieval calls for each sub-question. Third, you **answer each sub-question independently** using its own retrieved context. Finally, you **synthesize the final answer** by combining all the sub-answers into one comprehensive response.
[firmly] The critical insight here is that you're trading **one hard retrieval** for **several easy ones**. A single complex query might fail to find any good documents, but three simple sub-queries each find exactly what they need. It's like searching for a restaurant that has great sushi, is open late, and has outdoor seating — much easier to search for each criterion separately and then find the intersection.
[conversational] Now for the implementation details.`
        },
        {
          id: 16,
          title: '3. Query Decomposition - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Implementation Pattern</h3></GSAPAnimated>
              <p>Plan → retrieve → answer → combine workflow</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Prompt template for decomposition
"""
Decompose the following question into 2-5 simpler sub-questions that, when
answered separately, will help answer the main question comprehensively.
Return a numbered list of sub-questions without additional explanation.
Main question: {query}
"""`}
              </pre>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Implementation example
def answer_with_decomposition(query):
    sub_questions = llm.generate(decompose_prompt, query=query)
    sub_answers = []
    for sq in sub_questions:
        docs = retriever.get_relevant_documents(sq)
        sub_answers.append(llm.answer(sq, docs))
    return llm.synthesize(query, sub_questions, sub_answers)`}
              </pre>
            </div>
          ),
          notes: `### Query Decomposition — Implementation
Here's how to implement decomposition in practice.
#### 💻 The Prompt
[firmly] The decomposition prompt asks the LLM to break the question into two to five simpler sub-questions. You explicitly ask for a numbered list without explanations. The key constraint is that the sub-questions, when answered separately, should collectively answer the main question comprehensively.
#### ⚙️ The Code
[pleased] The implementation loops through each sub-question, retrieves documents for it, and generates a sub-answer. Then a final synthesis step combines everything. Notice the three LLM calls: one for decomposition, one per sub-question for answering, and one for synthesis. This is more expensive than simple expansion, but the quality improvement on complex questions is substantial.
[lecture] The tradeoff is clear: **more LLM calls and higher latency** in exchange for **much better answers on complex questions**. For simple factual queries, decomposition is overkill. Save it for the hard stuff.
[conversational] Let's see an example.`
        },
        {
          id: 17,
          title: '3. Query Decomposition - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "Compare Snowflake vs BigQuery costs for 10 TB/month"<br />
                <strong>After:</strong> 1. What is Snowflake's pricing model and costs for 10 TB/month? 2. What is BigQuery's pricing model and costs for 10 TB/month? 3. What compute resources would be needed for this data volume? 4. How do the pricing structures compare for this workload?
              </div>
              <h3 style={{ color: '#e74c3c', paddingTop: '20px', fontSize: '2rem' }}>Considerations</h3>
              <ul>
                <li>Multiple retrieval calls increase latency</li>
                <li>Requires orchestration complexity</li>
                <li>Higher token usage and costs</li>
                <li>Synthesis step can introduce errors</li>
              </ul>
            </div>
          ),
          notes: `### Query Decomposition — Example & Considerations
Here's a real-world example of decomposition in action.
#### 📝 Before and After
[confidently] The user asks "Compare Snowflake vs BigQuery costs for 10 TB per month." Decomposition breaks this into four sub-questions: What is Snowflake's pricing? What is BigQuery's pricing? What compute resources are needed? And how do the structures compare? Each sub-question gets its own focused retrieval and answer, then they're combined into a comprehensive comparison.
#### ⚠️ Watch Out For
[lecture] The main concerns are: **multiple retrieval calls increase latency** — you're doing four or five searches instead of one. **Orchestration complexity** goes up since you need to manage parallel retrievals and synthesis. **Token usage and costs** are higher because of multiple LLM calls. And the **synthesis step can introduce errors** if it misrepresents or incorrectly combines the sub-answers.
> 🎤 Ask the audience: "What kinds of complex questions do your users ask that might benefit from decomposition?"
[confidently] The takeaway: decomposition is your **power tool for hard questions**. Don't use it on everything — reserve it for multi-part, compare-and-contrast, or multi-hop reasoning scenarios.
[conversational] Next, let's look at Step-Back Prompting, which takes the opposite approach — going broader instead of narrower.`
        }
      ]
    },
    {
      id: 'strategy-4',
      title: '4. Step-Back Prompting',
      slides: [
        {
          id: 18,
          title: '4. Step-Back Prompting - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Improve retrieval via abstraction and first principles thinking, allowing better information access for complex or specific queries</h3></GSAPAnimated>
              <h3 style={{ color: '#2ecc71', fontSize: '2rem' }}>Benefits</h3>
              <ul>
                <li>Robust to query wording variations</li>
                <li>Better generalization across concepts</li>
                <li>Improves coverage of relevant information</li>
                <li>Helps understand fundamental principles</li>
              </ul>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="Step-Back Prompting: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["🎯 Specific Query\n'Fix CUDA OOM with\nLlama 3.1 70B'"] --> B{"Direct\nRetrieval\nFails?"}
    B -->|"Yes"| C["Step Back\nto Principles"]
    C --> D["Abstract Query\n'LLM memory\noptimization'"]
    D --> E["✅ Broader\nContext Found"]
    B -->|"No"| F["Use as-is"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#3a1a5c,color:#e9d5ff,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <p>Best applied when:</p>
                <ul>
                  <li>Specific but under-retrieving queries</li>
                  <li>Reasoning-heavy or conceptual topics</li>
                  <li>Technical questions needing broader context</li>
                  <li>Direct retrieval with specific terms fails</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### Step-Back Prompting — Overview
[conversational] Strategy 4 is **Step-Back Prompting**, and it takes the opposite approach from decomposition — instead of breaking a query down, it zooms out.
#### 🎯 What Is It?
When a user asks "How to fix CUDA OOM with Llama 3.1 70B?" 👉 'lah-mah three-point-one', that's very specific. Step-back prompting transforms it into broader concepts like "LLM memory optimization, quantization, gradient checkpointing." The idea is that documents about the general principles of GPU memory management are more likely to exist and be helpful than documents about that exact CUDA error with that exact model.
#### ✅ Pros
[pleased] It's **robust to query wording variations** — different specific questions map to the same general concepts. It provides **better generalization** across related topics. It **improves coverage** by pulling in foundational information. And it helps users understand the **fundamental principles** behind their specific problem.
#### 🕐 When to Use This?
[reassuringly] Use step-back prompting when specific queries **under-retrieve**, for **reasoning-heavy or conceptual topics**, for **technical questions needing broader context**, and when **direct retrieval with specific terms fails** to return useful results.
[conversational] Let's see how it works.`
        },
        {
          id: 19,
          title: '4. Step-Back Prompting - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>How Step-Back Prompting Works</h3></GSAPAnimated>
              <p>Generate high-level concepts, then retrieve with that summary:</p>
              <ul>
                <li><strong>Extract underlying principles from specific query</strong> - Identify fundamental concepts behind the question</li>
                <li><strong>Identify broader concepts and frameworks</strong> - Connect to relevant theoretical foundations</li>
                <li><strong>Create a more general retrieval query</strong> - Formulate abstract query terms</li>
                <li><strong>Focus on conceptual understanding</strong> - Retrieve documents explaining core principles</li>
              </ul>
            </div>
          ),
          notes: `### Step-Back Prompting — How It Works
[lecture] The process is straightforward but powerful.
#### 🔄 The Process
You take the specific query and ask the LLM to **extract the underlying principles**. For the CUDA OOM example, the underlying principles are memory management, model parallelism, and quantization. Then you **identify broader concepts and frameworks** — what general areas of knowledge would help answer this? Next, you **create a more general retrieval query** using these abstract terms. Finally, the retrieval **focuses on conceptual understanding** rather than exact problem matching.
[storytelling] Think of it like asking a professor for help. Instead of searching "how to fix error X in library Y version Z," you step back and search for "best practices for handling resource constraints in deep learning." The professor-level documents are more likely to exist and more likely to be comprehensive.
[conversational] Now let's see the implementation.`
        },
        {
          id: 20,
          title: '4. Step-Back Prompting - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Implementation Pattern</h3></GSAPAnimated>
              <p>Step-back summary → retrieval query pattern</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Prompt template
"""
Step back: derive 3–5 high-level concepts underlying:
{query}
Then produce a concise retrieval query based on these
concepts that would help answer the original question.
"""`}
              </pre>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Implementation example
def step_back_query(original_query):
    abstract_concepts = llm.generate(
        step_back_prompt,
        query=original_query
    )
    return abstract_concepts`}
              </pre>
            </div>
          ),
          notes: `### Step-Back Prompting — Implementation
[lecture] The implementation is surprisingly simple.
#### 💻 The Prompt
[lecture] The prompt says: "Step back and derive three to five high-level concepts underlying this query, then produce a concise retrieval query based on those concepts." That's it. You're asking the LLM to think at a higher level of abstraction.
#### ⚙️ The Code
[lecture] The code is minimal — you send the original query to the LLM with the step-back prompt, and the output is a new query focused on general concepts rather than specific details. This new query then goes to your retrieval system.
[firmly] The key insight is that you're not losing the original query — in practice, you often run **both** the original specific query and the step-back query, then combine their results. This gives you both the specific documents and the conceptual foundations.
[conversational] Let's look at an example.`
        },
        {
          id: 21,
          title: '4. Step-Back Prompting - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "How to fix CUDA OOM with Llama 3.1 70B?"<br />
                <strong>After:</strong> "LLM memory optimization, quantization, gradient checkpointing, batch sizing, GPU VRAM constraints"
              </div>
              <h3 style={{ color: '#e74c3c', paddingTop: '20px', fontSize: '2rem' }}>Considerations</h3>
              <ul>
                <li>Risk of over-abstraction</li>
                <li>Needs good reranker to filter results</li>
                <li>May lose specificity for narrow queries</li>
                <li>Can introduce unwanted generality</li>
              </ul>
            </div>
          ),
          notes: `### Step-Back Prompting — Example & Considerations
[conversational] Let's see step-back in action.
#### 📝 Before and After
[cautiously] The user asks "How to fix CUDA OOM with Llama 3.1 70B?" — a very specific error with a specific model. After step-back prompting, the query becomes "LLM memory optimization, quantization, gradient checkpointing, batch sizing, GPU VRAM constraints." Now the retrieval system finds comprehensive guides on memory management techniques that absolutely apply to the original problem.
#### ⚠️ Watch Out For
[cautiously] There are real risks. **Over-abstraction** can happen — if you step back too far, you get results that are too generic to be useful. You'll **need a good reranker** to filter results because the broader query brings back more diverse documents. You may **lose specificity** for narrow, well-defined queries where the user knows exactly what they want. And the abstraction can **introduce unwanted generality** that dilutes the answer.
The rule of thumb: use step-back prompting when specific queries fail, but always combine it with the original query's results.
[conversational] Next up is Strategy 5: HyDE, which takes a completely different and fascinating approach.`
        }
      ]
    },
    {
      id: 'strategy-5',
      title: '5. HyDE (Hypothetical Document Embeddings)',
      slides: [
        {
          id: 22,
          title: '5. HyDE - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Improve retrieval quality by embedding a synthetic document that provides a hypothetical answer to the query, bridging the semantic gap</h3></GSAPAnimated>
              <h3 style={{ color: '#2ecc71', fontSize: '2rem' }}>Benefits</h3>
              <ul>
                <li>Strong recall gains in dense retrieval</li>
                <li>Works with existing embedding models</li>
                <li>No fine-tuning required</li>
                <li>Bridges vocabulary gaps effectively</li>
                <li>Zero-shot capability for new domains</li>
              </ul>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="HyDE: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["🔍 Query\n'quantum error\ncorrection'"] --> B{"Dense Retrieval\nUnderperforms?"}
    B -->|"Yes - Vocab\nMismatch"| C["Generate\nHypothetical Doc"]
    C --> D["Embed Doc\nnot Query"]
    D --> E["✅ Better\nSemantic Match"]
    B -->|"No"| F["Standard\nEmbedding"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <p>Particularly effective for:</p>
                <ul>
                  <li>Low recall in dense retrieval systems</li>
                  <li>Zero-shot domain applications</li>
                  <li>Queries with vocabulary mismatch</li>
                  <li>Complex information needs</li>
                  <li>When semantic search underperforms</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### HyDE — Overview
[conversational] Strategy 5 is **HyDE**, which stands for Hypothetical Document Embeddings, and it's one of my favorite techniques. HyDE 👉 'hide'.
#### 🎯 What Is It?
[lecture] Here's the brilliant insight behind HyDE: instead of embedding the user's query and searching for similar documents, you first ask the LLM to **generate a fake answer** to the question, then embed that fake answer and search for documents similar to it. Why? Because a document that looks like an answer is semantically much closer to actual answer documents than the original short query.
#### ✅ Pros
[pleased] The good stuff: you get **strong recall gains** in dense retrieval systems. It **works with existing embedding models** — no fine-tuning needed. It has **zero-shot capability** for new domains. And it **bridges vocabulary gaps** effectively because the hypothetical document uses the language of answers, not questions.
#### 🕐 When to Use This?
HyDE shines when you have **low recall in dense retrieval**, for **zero-shot domain applications**, when there's a **vocabulary mismatch** between queries and documents, and for **complex information needs** where a short query can't capture the semantic intent.
[conversational] Let's see the mechanics.`
        },
        {
          id: 23,
          title: '5. HyDE - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>How HyDE Works</h3></GSAPAnimated>
              <p>Instead of embedding the query directly:</p>
              <ul>
                <li><strong>LLM generates a hypothetical answer document</strong> - Create synthetic document as if answering the query</li>
                <li><strong>This synthetic document is embedded</strong> - Use embedding model to vectorize the hypothetical answer</li>
                <li><strong>Retrieval uses this embedding to find similar real documents</strong> - Search for documents semantically similar to the answer</li>
                <li><strong>Final answer generation uses the retrieved documents</strong> - LLM generates response using actual retrieved content</li>
              </ul>
            </div>
          ),
          notes: `### HyDE — How It Works
Here's the four-step process that makes HyDE work.
#### 🔄 The Four Steps
First, the **LLM generates a hypothetical answer document** — a fake but plausible answer to the user's question. It doesn't need to be factually correct, just semantically similar to what a real answer would look like. Second, this **synthetic document is embedded** using your regular embedding model. Third, **retrieval uses this embedding** to find real documents that are semantically similar to the hypothetical answer. Finally, the **actual retrieved documents** are used to generate the real answer.
[confidently] The magic is in step one. A query like "causal ML uplift modeling tutorial" is short and keyword-heavy. But the hypothetical document the LLM generates is a paragraph-long explanation using the same language patterns as actual tutorial documents. When you embed that paragraph, it naturally lands close to real tutorial content in vector space.
[conversational] Now for the code.`
        },
        {
          id: 24,
          title: '5. HyDE - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Implementation Pattern</h3></GSAPAnimated>
              <p>Generate hypothetical document → embed → retrieve</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Prompt template
"""
Write a 120-200 word passage that would likely answer the following query.
Keep a factual, informative tone. Include key terminology and concepts.
Do not include phrases like "according to" or "based on research".
Query: {query}
"""`}
              </pre>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Implementation example
def hyde_retrieval(query, top_k=5):
    # Generate hypothetical document
    pseudo_doc = llm.generate(prompt, query=query)
    # Embed the pseudo-document
    pseudo_embedding = embedder.encode(pseudo_doc)
    # Retrieve similar documents
    results = vector_db.similarity_search(
        pseudo_embedding, k=top_k)
    return results`}
              </pre>
            </div>
          ),
          notes: `### HyDE — Implementation
[lecture] The implementation is clean and modular.
#### 💻 The Prompt
You ask the LLM to "Write a 120-200 word passage that would likely answer the following query. Keep a factual, informative tone. Include key terminology and concepts." The important detail is telling it NOT to use hedging phrases like "according to" — you want it to write as if it's a confident reference document.
#### ⚙️ The Code
Three steps in code: generate the pseudo-document, embed it, then use that embedding for similarity search. The function takes the query and a top-k parameter. The pseudo-document generation is the expensive step — one LLM call. After that, embedding and retrieval are fast.
One practical tip: you can generate **multiple hypothetical documents** with different temperatures and average their embeddings. This creates a more robust search vector that covers different angles of the answer.
[conversational] Let's see a concrete example.`
        },
        {
          id: 25,
          title: '5. HyDE - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "causal ml uplift modeling tutorial"<br />
                <strong>After (Hypothetical Document):</strong>
                <ul>
                  <li>Uplift modeling is a machine learning technique that predicts the causal impact of a treatment on individual behavior. Unlike traditional ML models that predict outcomes, uplift models focus on incremental impact. The process involves collecting data with treatment and control groups, feature engineering, and model training.</li>
                  <li>Key steps include: 1) Split data into treatment/control groups, 2) Feature transformation with interaction terms, 3) Model training with algorithms like random forests or neural networks, 4) Evaluation using metrics like AUUC or Qini coefficient.</li>
                  <li>Common applications include marketing campaign optimization, personalized medicine, and customer retention strategies...</li>
                </ul>
              </div>
              <h3 style={{ color: '#e74c3c', paddingTop: '10px', fontSize: '2rem' }}>Considerations</h3>
              <ul>
                <li>Extra token usage and latency</li>
                <li>Pseudo-doc bias if poorly guided</li>
                <li>Quality depends on LLM's knowledge</li>
                <li>May introduce hallucinations</li>
                <li>Less efficient for simple queries</li>
              </ul>
            </div>
          ),
          notes: `### HyDE — Example & Considerations
Here's HyDE in action with a real example.
#### 📝 Before and After
[lecture] The user searches "causal ML uplift modeling tutorial." The LLM generates a hypothetical document about uplift modeling that describes treatment and control groups, feature engineering approaches, model training algorithms like random forests, and evaluation metrics like AUUC 👉 'ay-you-you-see' and Qini 👉 'kee-nee' coefficients. This hypothetical document, when embedded, lands right next to actual uplift modeling tutorials in vector space.
#### ⚠️ Watch Out For
[lecture] The risks are real. **Extra token usage and latency** — you're generating a full paragraph before you even start retrieval. **Pseudo-document bias** if the LLM's generated answer is skewed or incomplete. **Quality depends on the LLM's knowledge** — if the model doesn't know about the topic, the hypothetical document will be poor. It **may introduce hallucinations** if the fake answer contains incorrect information that biases retrieval. And it's **less efficient for simple queries** where direct embedding works just fine.
Use HyDE when dense retrieval underperforms. For simple keyword queries, it's overkill.
[conversational] Next up is Strategy 6: Multi-Query Generation.`
        }
      ]
    },
    {
      id: 'strategy-6',
      title: '6. Multi-Query Generation',
      slides: [
        {
          id: 26,
          title: '6. Multi-Query Generation - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Cover diverse intents/phrases to improve recall and handle query ambiguity by exploring different interpretations of user intent</h3></GSAPAnimated>
              <h3 style={{ color: '#2ecc71', marginTop: '40px', fontSize: '2rem' }}>Benefits</h3>
              <ul>
                <li>Robust to query ambiguity</li>
                <li>Higher hit-rate for relevant documents</li>
                <li>Better coverage of different aspects</li>
                <li>Handles vocabulary mismatches</li>
              </ul>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="Multi-Query Generation: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TB
    A["❓ Ambiguous Query\n'best ML framework'"] --> B["Generate\nMultiple Variants"]
    B --> C["Q1: 'top Python\nML libraries 2024'"]
    B --> D["Q2: 'PyTorch vs\nTensorFlow comparison'"]
    B --> E["Q3: 'ML frameworks\nfor production'"]
    C --> F["🔀 RRF Fusion"]
    D --> F
    E --> F
    F --> G["✅ High Recall\nResults"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style F fill:#3a1a5c,color:#e9d5ff,stroke:#aaaaaa,stroke-width:1.5px
    style G fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ marginTop: '40px', fontSize: '2rem' }}>When to Use</h3>
                <p>Best suited for:</p>
                <ul>
                  <li>Ambiguous or underspecified queries</li>
                  <li>Heterogeneous document corpora</li>
                  <li>Tasks requiring breadth of coverage</li>
                  <li>Critical applications where recall matters</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### Multi-Query Generation — Overview
[conversational] Strategy 6 is **Multi-Query Generation**, which attacks the problem from multiple angles simultaneously.
#### 🎯 What Is It?
Instead of sending one query to your retrieval system, you generate **multiple different versions** of the same query and send them all. Each version explores a different phrasing, perspective, or aspect of the user's intent. Then you combine all the results. It's like asking five different people to search for the same thing — each one will find slightly different documents.
#### ✅ Pros
[pleased] The good stuff: it's **robust to query ambiguity** because different phrasings cover different interpretations. You get a **higher hit-rate** for relevant documents since you're casting multiple nets. It provides **better coverage** of different aspects of the topic. And it naturally **handles vocabulary mismatches** because each variant uses different words.
#### 🕐 When to Use This?
[reassuringly] Best for **ambiguous or underspecified queries**, **heterogeneous document corpora** where different sections use different terminology, **tasks requiring breadth** of coverage, and **critical applications** where missing a relevant document is costly.
[conversational] Let's see the mechanism.`
        },
        {
          id: 27,
          title: '6. Multi-Query Generation - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>How Multi-Query Generation Works</h3></GSAPAnimated>
              <p>Generate multiple alternative query formulations:</p>
              <ul>
                <li><strong>Generate k diverse query variants</strong> - Create multiple formulations exploring different angles</li>
                <li><strong>Retrieve documents for each variant</strong> - Execute separate retrieval for each query version</li>
                <li><strong>Union results from all queries</strong> - Combine documents from all retrievals</li>
                <li><strong>Apply reranking to consolidate results</strong> - Score and deduplicate combined results</li>
              </ul>
            </div>
          ),
          notes: `### Multi-Query Generation — How It Works
[lecture] The workflow is straightforward but effective.
#### 🔄 The Steps
First, you **generate k diverse query variants** — typically three to five alternative phrasings that explore different angles of the user's intent. Second, you **retrieve documents for each variant** — running separate retrieval calls for each query version. Third, you **union the results** from all queries into one combined set. Finally, you **apply reranking** to score, deduplicate, and consolidate the combined results.
[firmly] The critical difference from query expansion is that each variant is a **complete, standalone query**, not just the original query with extra terms appended. This means each variant can find documents that the others would miss entirely.
[storytelling] Think of it like searching Google with five different phrasings of the same question — each search returns slightly different results, and the best answer is probably in the union of all of them.
[conversational] Now the implementation.`
        },
        {
          id: 28,
          title: '6. Multi-Query Generation - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Implementation Pattern</h3></GSAPAnimated>
              <p>Generate diverse query variants, retrieve separately, then combine results</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Prompt template
"""
Generate 5 diverse phrasings covering different
angles of this query: "{query}"
Ensure each phrasing explores a different
perspective or aspect. Return only the list
of queries, numbered 1-5, without explanations.
Avoid duplicates or minor variations.
"""`}
              </pre>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Implementation example
def multi_query_retrieve(query):
    variants = llm.generate(prompt, query=query)
    all_results = []
    for variant in variants:
        results = retriever.get_relevant_docs(variant)
        all_results.extend(results)
    return reranker.deduplicate_and_rank(all_results)`}
              </pre>
            </div>
          ),
          notes: `### Multi-Query Generation — Implementation
[lecture] The implementation involves a focused generation prompt and a result fusion step.
#### 💻 The Prompt
[lecture] The prompt asks the LLM to generate five diverse phrasings covering different angles of the query. You explicitly tell it to explore different perspectives, avoid duplicates, and skip explanations. This gives you clean, parseable output.
#### ⚙️ The Code
For each variant, you retrieve documents using your standard retrieval pipeline. Then a reranking step deduplicates and scores the combined results. The deduplication is important — you don't want the same document appearing multiple times just because two query variants found it.
A practical optimization: run the retrieval calls **in parallel**. Since each variant is independent, there's no reason to wait for one to finish before starting the next. This keeps the latency close to a single retrieval call despite running multiple queries.
[conversational] Let's see an example.`
        },
        {
          id: 29,
          title: '6. Multi-Query Generation - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "LLM eval methods"<br />
                <strong>After:</strong>
                <ul>
                  <li>"evaluation frameworks for large language models"</li>
                  <li>"LLM benchmarks and testing methodologies"</li>
                  <li>"automatic evaluation prompts for language models"</li>
                  <li>"human evaluation rubrics for LLM outputs"</li>
                  <li>"RAG evaluation metrics and techniques"</li>
                </ul>
              </div>
              <h3 style={{ color: '#e74c3c', paddingTop: '10px', fontSize: '2rem' }}>Considerations</h3>
              <ul>
                <li>Increased cost and latency</li>
                <li>Requires deduplication and fusion</li>
                <li>More complex implementation</li>
                <li>May retrieve irrelevant results</li>
              </ul>
            </div>
          ),
          notes: `### Multi-Query Generation — Example & Considerations
Here's a great example of multi-query in action.
#### 📝 Before and After
[lecture] The user searches "LLM eval methods" — short and ambiguous. Multi-query generation produces five variants: "evaluation frameworks for large language models," "LLM benchmarks and testing methodologies," "automatic evaluation prompts for language models," "human evaluation rubrics for LLM outputs," and "RAG evaluation metrics and techniques." Each variant finds documents the others would miss.
#### ⚠️ Watch Out For
[lecture] The costs are real. **Increased cost and latency** from running multiple retrievals. You need **deduplication and fusion logic** to combine results intelligently. The **implementation is more complex** with parallel retrieval and result merging. And some variants **may retrieve irrelevant results** that waste context window space.
> 🎤 Ask the audience: "How many of you are currently using just a single query for retrieval?"
[firmly] The key insight: multi-query generation is especially powerful when combined with a **good reranker** that can sort through the combined results and pick the truly relevant ones.
[conversational] Next, Strategy 7: Context-Aware Rewriting for chat applications.`
        }
      ]
    },
    {
      id: 'strategy-7',
      title: '7. Context-Aware Rewriting',
      slides: [
        {
          id: 30,
          title: '7. Context-Aware Rewriting - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Make follow-up queries standalone and self-contained by incorporating conversation context and session history</h3></GSAPAnimated>
              <h3 style={{ color: '#2ecc71', fontSize: '2rem' }}>Benefits</h3>
              <ul>
                <li>Significant quality improvement in chat</li>
                <li>Reduces context window waste</li>
                <li>Enables effective RAG on follow-ups</li>
                <li>Preserves conversation flow</li>
              </ul>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="Context-Aware Rewriting: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    subgraph History["📜 Conversation"]
        H1["User: 'Tell me about Redis'"]
        H2["Bot: 'Redis is a cache...'"]
        H3["User: 'How does it scale?'"]
    end
    History --> B["Rewrite with\nContext"]
    B --> C["✅ Standalone\n'How does Redis\nscale horizontally?'"]
    style History fill:#0d1f33,stroke:#4da6ff,stroke-width:2px,color:#e0e0e0
    style H1 fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style H2 fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style H3 fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <p>Ideal for:</p>
                <ul>
                  <li>Conversational chatbots</li>
                  <li>Multi-turn question answering</li>
                  <li>Session-based search interfaces</li>
                  <li>Follow-up questions with pronouns</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### Context-Aware Rewriting — Overview
[conversational] Strategy 7 is **Context-Aware Rewriting**, and if you're building any kind of chat-based RAG system, this is absolutely essential.
#### 🎯 What Is It?
In a conversation, users naturally use pronouns and references: "Tell me about it," "What are its limits?" "And the pricing?" These follow-up queries are meaningless without the context of what came before. Context-aware rewriting **incorporates conversation history** into the query to make it standalone and searchable.
#### ✅ Pros
[pleased] The good stuff: it provides a **significant quality improvement** in chat applications. It **reduces context window waste** because you only retrieve relevant documents instead of trying to stuff the entire conversation into the prompt. It **enables effective RAG on follow-ups**, which is where most chat-based systems struggle. And it **preserves conversation flow** so the user experience feels natural.
#### 🕐 When to Use This?
[reassuringly] This is ideal for **conversational chatbots**, **multi-turn question answering**, **session-based search interfaces**, and any scenario with **follow-up questions that use pronouns** or implicit references.
[conversational] Let's see the mechanism.`
        },
        {
          id: 31,
          title: '7. Context-Aware Rewriting - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>How Context-Aware Rewriting Works</h3></GSAPAnimated>
              <p>Inject relevant contextual elements into the query:</p>
              <ul>
                <li><strong>Entities mentioned in previous turns</strong> - Replace pronouns with specific entity references</li>
                <li><strong>Constraints established earlier</strong> - Include previously defined parameters and filters</li>
                <li><strong>References to prior answers</strong> - Connect to relevant information from conversation</li>
                <li><strong>User preferences from session</strong> - Apply ongoing user context and settings</li>
              </ul>
            </div>
          ),
          notes: `### Context-Aware Rewriting — How It Works
Here's how context-aware rewriting works in practice.
#### 🔄 The Process
[lecture] The system injects several types of contextual elements into the query. It replaces **entities mentioned in previous turns** — changing "it" to "the Acme Pro API" based on what was discussed earlier. It adds **constraints established earlier** — if the user specified "enterprise tier" three turns ago, that constraint gets included. It incorporates **references to prior answers** — connecting the follow-up to what was already discussed. And it applies **user preferences from the session** — like language preference or region.
[firmly] The key insight is that you're not rewriting the user's query into something different — you're **completing it** with the information the user assumed was already understood. It's like having a human assistant who heard the whole conversation and can fill in the gaps.
[conversational] Let's look at the code.`
        },
        {
          id: 32,
          title: '7. Context-Aware Rewriting - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Implementation Pattern</h3></GSAPAnimated>
              <p>Rewrite follow-up queries using conversation history to make them self-contained</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Prompt template
"""
Given the conversation history below, rewrite the follow-up
query as a standalone query that preserves the original intent
but includes all necessary context.
Conversation history:
{history}
Follow-up query: {query}
Standalone query:
"""`}
              </pre>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Implementation example
def context_aware_rewrite(query, history):
    conversation = format_history(history)
    standalone = llm.generate(prompt,
                            query=query,
                            history=conversation)
    return standalone`}
              </pre>
            </div>
          ),
          notes: `### Context-Aware Rewriting — Implementation
[lecture] The implementation pattern is clean and reusable.
#### 💻 The Prompt
[lecture] The prompt provides the conversation history and the follow-up query, then asks: "Rewrite the follow-up query as a standalone query that preserves the original intent but includes all necessary context." The output should be a single, self-contained query.
#### ⚙️ The Code
In code, you format the conversation history into a digestible summary, then pass both the history and the current query to the LLM. The LLM produces a standalone query that can be sent directly to retrieval. This standalone query is also great for caching — if another user asks the same resolved question, you can reuse the retrieval results.
One important consideration: **how much history to include**. Sending the entire conversation can be expensive and noisy. In practice, the last three to five turns is usually sufficient. You can also summarize older turns to save tokens.
[conversational] Let's see an example.`
        },
        {
          id: 33,
          title: '7. Context-Aware Rewriting - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "And its limits?"<br />
                <strong>After:</strong> "What are the 2024 rate limits for the Acme Pro API we discussed above?"
              </div>
              <h3 style={{ color: '#e74c3c', paddingTop: '10px', fontSize: '2rem' }}>Considerations</h3>
              <ul>
                <li>Needs careful context selection</li>
                <li>Potential privacy concerns</li>
                <li>Can overspecify in some cases</li>
                <li>Requires history tracking infrastructure</li>
              </ul>
            </div>
          ),
          notes: `### Context-Aware Rewriting — Example & Considerations
Here's a classic example.
#### 📝 Before and After
[lecture] The user's follow-up query is just three words: "And its limits?" After context-aware rewriting, it becomes "What are the 2024 rate limits for the Acme Pro API we discussed above?" The rewritten query is specific, searchable, and standalone. Without this rewriting, your retrieval system would search for "limits" and return completely irrelevant documents.
#### ⚠️ Watch Out For
Be careful with **context selection** — picking the wrong context can lead to incorrect rewrites. There are **privacy concerns** when storing and using conversation history. The system **can overspecify** in some cases, adding constraints the user didn't intend. And you need **history tracking infrastructure** to maintain and access conversation state.
[confidently] The bottom line: if you're building a chat-based RAG system, context-aware rewriting is **not optional** — it's a must-have. Without it, every follow-up question is essentially broken.
[conversational] Next, Strategy 8: Query Clarification, where we ask the user for help.`
        }
      ]
    },
    {
      id: 'strategy-8',
      title: '8. Query Clarification',
      slides: [
        {
          id: 34,
          title: '8. Query Clarification - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Resolve ambiguity in user queries before retrieval to improve precision and relevance of results</h3></GSAPAnimated>
              <h3 style={{ color: '#2ecc71', fontSize: '2rem' }}>Benefits</h3>
              <ul>
                <li>Significantly improves precision</li>
                <li>Better user alignment and satisfaction</li>
                <li>Reduces irrelevant results</li>
                <li>Educates users on query formulation</li>
              </ul>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="Query Clarification: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TB
    A["❓ Vague Query\n'Python performance'"] --> B{"Ambiguous?"}
    B -->|"Yes"| C["Ask Clarification\n'Language speed or\ncode optimization?'"]
    C --> D["User: 'code speed'"]
    D --> E["✅ Clear Query\n'Python code\nperformance tips'"]
    B -->|"No"| F["Proceed as-is"]
    style A fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style F fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <p>Ideal for scenarios with:</p>
                <ul>
                  <li>Short or vague queries</li>
                  <li>Ambiguous terms with multiple meanings</li>
                  <li>Missing contextual constraints</li>
                  <li>Domain-specific clarification needs</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### Query Clarification — Overview
[conversational] Strategy 8 is **Query Clarification**, and it's unique because it involves the user in the rewriting process.
#### 🎯 What Is It?
Instead of silently rewriting the query, the system **detects ambiguity** and asks the user to clarify before proceeding. When someone searches "Apple pay policy," do they mean Apple Inc.'s payment policies or the fruit industry's payment terms? Rather than guessing, the system asks.
#### ✅ Pros
[pleased] The good stuff: it **significantly improves precision** because you know exactly what the user wants. It creates **better user alignment** since the user feels heard. It **reduces irrelevant results** from the start. And it **educates users** on how to write better queries over time.
#### 🕐 When to Use This?
[reassuringly] Use query clarification for **short or vague queries**, **ambiguous terms with multiple meanings**, **missing contextual constraints**, and **domain-specific clarification needs** where getting it wrong would be costly.
[conversational] Let's see how it works.`
        },
        {
          id: 35,
          title: '8. Query Clarification - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>How Query Clarification Works</h3></GSAPAnimated>
              <p>The system:</p>
              <ul>
                <li><strong>Detects missing constraints or ambiguities</strong> - Analyze query for undefined terms or parameters</li>
                <li><strong>Asks 1-2 targeted clarifying questions</strong> - Present specific options to disambiguate</li>
                <li><strong>Proposes default interpretations when appropriate</strong> - Suggest common interpretations</li>
                <li><strong>Uses responses to reformulate the query</strong> - Integrate clarifications into refined query</li>
              </ul>
            </div>
          ),
          notes: `### Query Clarification — How It Works
[lecture] The system operates through a detect-ask-rewrite cycle.
#### 🔄 The Process
First, it **detects missing constraints or ambiguities** by analyzing the query for undefined terms, multiple possible interpretations, or insufficient specificity. Then it **asks one or two targeted clarifying questions** — not a list of twenty questions, just the most impactful ones. It can also **propose default interpretations** — "Did you mean X? If so, here's the answer." Finally, it **uses the responses to reformulate** the query with the clarified intent.
[firmly] The key design principle is minimizing friction. You don't want to ask five clarifying questions for every query — that would be incredibly annoying. The system should only ask when the ambiguity is significant enough to meaningfully affect results.
[conversational] Let's see the implementation.`
        },
        {
          id: 36,
          title: '8. Query Clarification - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Implementation Pattern</h3></GSAPAnimated>
              <p>Clarify→rewrite→retrieve workflow</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Prompt template for clarification
"""
Analyze the query: "{query}"
Identify the top ambiguity and ask one clarifying question.
If there are multiple possible interpretations, propose
2 options for the user to choose from.
"""`}
              </pre>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Implementation flow
def clarify_query(query):
    ambiguity = detect_ambiguity(query)
    if ambiguity.score > threshold:
        clarification = ask_user(ambiguity.question)
        return rewrite_query(query, clarification)
    return query`}
              </pre>
            </div>
          ),
          notes: `### Query Clarification — Implementation
[lecture] The implementation follows a clarify-then-rewrite pattern.
#### 💻 The Prompt
[lecture] The clarification prompt asks the LLM to analyze the query, identify the top ambiguity, and ask one clarifying question. If there are multiple interpretations, it should propose two options for the user to choose from. This keeps the interaction focused and fast.
#### ⚙️ The Code
In the implementation, you first run an ambiguity detector. If the ambiguity score is above a threshold, you ask the user a clarifying question. Once you get the answer, you rewrite the query incorporating the clarification. If the ambiguity is below the threshold, you skip clarification entirely and proceed with the original query.
[firmly] The threshold is crucial — set it too low and you'll annoy users with unnecessary questions. Set it too high and you'll miss important ambiguities.
[conversational] Let's see an example.`
        },
        {
          id: 37,
          title: '8. Query Clarification - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example - Interactive Clarification Flow</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>User Query:</strong> "Apple pay policy"<br />
                <strong>System Clarification:</strong> "Do you mean Apple Inc.'s payment policies or the fruit industry's payment policies? For Apple Inc., which region are you interested in?"<br /><br />
                <strong>User Response:</strong> "Apple Inc., United States"<br />
                <strong>Rewritten Query:</strong> "Apple Inc. digital payment policies and terms for Apple Pay service in the United States"
              </div>
              <h3 style={{ color: '#e74c3c', paddingTop: '10px', fontSize: '2rem' }}>Considerations</h3>
              <ul>
                <li>Adds interaction step (latency)</li>
                <li>Requires timeout handling</li>
                <li>May frustrate users seeking quick answers</li>
                <li>Needs careful default selection</li>
              </ul>
            </div>
          ),
          notes: `### Query Clarification — Example & Considerations
Here's query clarification in a real scenario.
#### 📝 Before and After
[lecture] The user searches "Apple pay policy." The system detects ambiguity and asks: "Do you mean Apple Inc.'s payment policies or the fruit industry's payment policies? For Apple Inc., which region?" The user responds "Apple Inc., United States." Now the system rewrites to "Apple Inc. digital payment policies and terms for Apple Pay service in the United States." Crystal clear.
#### ⚠️ Watch Out For
[concerned] The downsides: it **adds an interaction step** which increases latency and breaks the flow. You need **timeout handling** for when users don't respond. It **may frustrate users** who just want quick answers without being asked questions. And you need **careful default selection** for when users dismiss the clarification.
[confidently] The sweet spot is using clarification **selectively** — only for high-ambiguity queries where the cost of guessing wrong is high. For most queries, silent rewriting is fine.
[conversational] Next, Strategy 9: Query Specification.`
        }
      ]
    },
    {
      id: 'strategy-9',
      title: '9. Query Specification',
      slides: [
        {
          id: 38,
          title: '9. Query Specification - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Add explicit constraints (time, source, locale, format) to focus retrieval on relevant document subsets</h3></GSAPAnimated>
              <h3 style={{ color: '#2ecc71', fontSize: '2rem' }}>Benefits</h3>
              <ul>
                <li>High precision retrieval</li>
                <li>Faster reranking (smaller candidate pool)</li>
                <li>Better for enterprise/compliance use cases</li>
                <li>Supports structured data sources</li>
                <li>Combines well with BM25/keyword search</li>
              </ul>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="Query Specification: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["📋 General Query\n'security incidents'"] --> B["Add Constraints"]
    B --> C["+ date_range:\n  2024-Q4"]
    B --> D["+ source:\n  internal_audit"]
    B --> E["+ severity:\n  critical"]
    C --> F["✅ Specified Query\nFilters applied"]
    D --> F
    E --> F
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#3a1a5c,color:#e9d5ff,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <p>Best for scenarios requiring high precision:</p>
                <ul>
                  <li>Enterprise search systems</li>
                  <li>Data analytics applications</li>
                  <li>Compliance and audit searches</li>
                  <li>Large heterogeneous document collections</li>
                  <li>Time-sensitive information needs</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### Query Specification — Overview
[conversational] Strategy 9 is **Query Specification**, which adds explicit filters and constraints to narrow down retrieval.
#### 🎯 What Is It?
Query specification is about adding **structured constraints** to your query — things like time ranges, source domains, file types, and metadata filters. Instead of searching broadly, you tell the retrieval system exactly where and when to look. It's like searching with advanced operators: "GDPR fines site:ec.europa.eu time:2018-2024 filetype:pdf."
#### ✅ Pros
[pleased] The good stuff: you get **high precision retrieval** because you're filtering out noise before it even enters the results. **Faster reranking** because the candidate pool is smaller. It's **excellent for enterprise and compliance** use cases where you need results from specific sources. And it **combines well with BM25 keyword search** since many search engines support field-based filtering natively.
#### 🕐 When to Use This?
[reassuringly] Best for **enterprise search systems**, **data analytics**, **compliance and audit searches**, **large heterogeneous document collections**, and **time-sensitive information needs** where recency matters.
[conversational] Let's see the mechanics.`
        },
        {
          id: 39,
          title: '9. Query Specification - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>How Query Specification Works</h3></GSAPAnimated>
              <p>Expand queries with structured filters and fielded search terms:</p>
              <ul>
                <li><strong>Time range specifications</strong> - Constrain results to specific date ranges</li>
                <li><strong>Source/domain constraints</strong> - Limit to specific sites or domains</li>
                <li><strong>File type filters</strong> - Target specific document formats</li>
                <li><strong>Metadata qualifiers</strong> - Filter by author, department, or other metadata</li>
                <li><strong>Language/locale parameters</strong> - Specify language or regional requirements</li>
              </ul>
            </div>
          ),
          notes: `### Query Specification — How It Works
Query specification works by expanding queries with structured search operators.
#### 🔄 The Process
[firmly] The system adds several types of constraints. **Time range specifications** constrain results to specific date ranges — crucial for fast-moving fields. **Source and domain constraints** limit results to specific websites or databases. **File type filters** target PDFs, docs, or specific formats. **Metadata qualifiers** filter by author, department, or category. And **language or locale parameters** ensure results are in the right language and region.
[storytelling] Think of it like using the advanced search features of Google — most users never use them, but they're incredibly powerful for narrowing down results. Query specification automates that process.
[firmly] The key difference from other strategies is that these constraints are **structural**, not semantic. You're not changing the meaning of the query — you're adding filters that tell the retrieval system where to look.
[conversational] Let's see the implementation.`
        },
        {
          id: 40,
          title: '9. Query Specification - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Implementation Pattern</h3></GSAPAnimated>
              <p>Detect constraints → annotate query with explicit field filters</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Prompt template
"""
Add explicit constraints for time range, document type, source,
and entity to optimize retrieval for this query:
Query: {query}
Use search operators like:
- time:YYYY-YYYY for date ranges
- site:domain.com for source filtering
- filetype:xxx for document types
- entity:"Exact Name" for entity disambiguation
"""`}
              </pre>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Implementation example
def specify_query(query):
    # Extract entities and intent
    entities = extract_entities(query)
    intent = classify_intent(query)
    # Apply appropriate constraints
    constraints = generate_constraints(
        entities, intent, time_relevant=True)
    return f"{query} {constraints}"`}
              </pre>
            </div>
          ),
          notes: `### Query Specification — Implementation
[lecture] The implementation detects constraints and annotates the query.
#### 💻 The Prompt
[lecture] The prompt instructs the LLM to add explicit constraints for time range, document type, source, and entity. It provides a set of search operators like time colon YYYY-YYYY, site colon domain, filetype colon extension, and entity with quotes for disambiguation.
#### ⚙️ The Code
In the implementation, you first extract entities and classify the intent. Then you generate appropriate constraints based on the entities, intent, and whether time relevance is important. Finally, you append these constraints to the original query. The result is a highly targeted search query that leverages your search engine's filtering capabilities.
One important note: this strategy works best with search engines that support fielded search. If your retrieval system is purely vector-based, you may need to convert these constraints into metadata filters.
[conversational] Let's see an example.`
        },
        {
          id: 41,
          title: '9. Query Specification - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "GDPR fines"<br />
                <strong>After:</strong> "GDPR fines site:ec.europa.eu time:2018-2024 filetype:pdf entity:\"data protection authority\""
              </div>
              <h3 style={{ color: '#e74c3c', paddingTop: '10px', fontSize: '2rem' }}>Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Risk of over-filtering (false negatives)</li>
                <li>Requires field support in search system</li>
                <li>More complex to implement and maintain</li>
                <li>May need domain-specific constraints</li>
                <li>Less effective for unstructured sources</li>
              </ul>
            </div>
          ),
          notes: `### Query Specification — Example & Considerations
[conversational] Let's see specification in action.
#### 📝 Before and After
[lecture] The user searches "GDPR fines" — broad and could return thousands of results. After specification, it becomes "GDPR fines site:ec.europa.eu time:2018-2024 filetype:pdf entity:data protection authority." Now you're getting official EU documents about GDPR fines from the right source, time period, and document type.
#### ⚠️ Watch Out For
[lecture] The risks include **over-filtering** — adding too many constraints can result in zero results, which is worse than too many results. It **requires field support** in your search system — not all retrieval engines support these operators. The implementation is **more complex to maintain** as you need to keep constraint mappings up to date. And it's **less effective for unstructured sources** that don't have clean metadata.
[firmly] The key insight: query specification is powerful for **enterprise and structured search** but needs to be used carefully. Always have a fallback to the original query if the specified version returns nothing.
[conversational] Next, Strategy 10: Semantic Bridging.`
        }
      ]
    },
    {
      id: 'strategy-10',
      title: '10. Semantic Bridging',
      slides: [
        {
          id: 42,
          title: '10. Semantic Bridging - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Map user language to domain ontology/taxonomy, bridging the vocabulary gap between natural language queries and specialized terminology</h3></GSAPAnimated>
              <h3 style={{ color: '#2ecc71', fontSize: '2rem' }}>Benefits</h3>
              <ul>
                <li>Closes vocabulary gap between users and experts</li>
                <li>Significantly improves recall in domain searches</li>
                <li>Reduces "zero results" scenarios</li>
                <li>Works well with both sparse and dense retrieval</li>
              </ul>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="Semantic Bridging: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    subgraph User["👤 User Language"]
        A["'heart attack\nprevention'"]
    end
    subgraph Bridge["🌉 Ontology Map"]
        B["cardiac arrest\nmyocardial infarction\ncoronary artery disease"]
    end
    subgraph Docs["📚 Domain Docs"]
        C["✅ Medical Literature\nFound"]
    end
    User --> Bridge --> Docs
    style User fill:#0d1f33,stroke:#4da6ff,stroke-width:2px,color:#e0e0e0
    style Bridge fill:#0d1f33,stroke:#f5a623,stroke-width:2px,color:#e0e0e0
    style Docs fill:#0d1f33,stroke:#4da6ff,stroke-width:2px,color:#e0e0e0
    style A fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <p>Best applied for domains with:</p>
                <ul>
                  <li>Specialized jargon (medical, legal, technical)</li>
                  <li>Product/SKU catalogs and e-commerce</li>
                  <li>Academic/scientific search</li>
                  <li>Industry-specific terminology gaps</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### Semantic Bridging — Overview
[conversational] Strategy 10 is **Semantic Bridging**, and it's all about closing the vocabulary gap between users and domain experts.
#### 🎯 What Is It?
Users speak one language, domain experts speak another. A patient says "heart attack" but the medical literature says "myocardial infarction." A customer says "server keeps crashing" but the engineering docs reference "kernel panic" or "segmentation fault." Semantic bridging **maps user language to domain-specific terminology** using ontologies and taxonomies.
#### ✅ Pros
[pleased] The good stuff: it **closes the vocabulary gap** between lay users and expert documentation. It **significantly improves recall** in domain-specific searches. It **reduces zero-result scenarios** where user terms simply don't match any documents. And it **works well with both sparse and dense retrieval** systems.
#### 🕐 When to Use This?
[reassuringly] Best for domains with **specialized jargon** like medicine, law, or engineering. Also great for **product catalogs**, **academic or scientific search**, and any domain with **significant terminology gaps** between how users ask and how documents are written.
[conversational] Let's see how it works.`
        },
        {
          id: 43,
          title: '10. Semantic Bridging - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>How Semantic Bridging Works</h3></GSAPAnimated>
              <p>Expand/translate queries to canonical terms through:</p>
              <ul>
                <li><strong>Domain-specific ontology lookups</strong> - Match terms to formal taxonomies and classifications</li>
                <li><strong>Terminology mapping (layman → expert)</strong> - Translate colloquial terms to technical vocabulary</li>
                <li><strong>Synonym expansion with field expertise</strong> - Add domain-appropriate synonyms and related terms</li>
                <li><strong>Abbreviation/acronym resolution</strong> - Expand shortened forms to full terms</li>
              </ul>
            </div>
          ),
          notes: `### Semantic Bridging — How It Works
[lecture] The bridging process uses several complementary techniques.
#### 🔄 The Process
First, **domain-specific ontology lookups** match user terms to formal taxonomies. Medical ontologies like SNOMED 👉 'snoh-med' or ICD 👉 'eye-see-dee' codes can map "heart attack" to "myocardial infarction" automatically. Second, **terminology mapping** translates from layman language to expert vocabulary. Third, **synonym expansion with field expertise** adds domain-appropriate synonyms. And fourth, **abbreviation and acronym resolution** expands shortened forms to full terms — "MI" becomes "myocardial infarction."
[pleased] The key advantage over simple synonym expansion is that semantic bridging is **domain-aware**. It doesn't just find any synonym — it finds the ones that match how experts actually write and speak in that specific field.
[conversational] Let's look at the implementation.`
        },
        {
          id: 44,
          title: '10. Semantic Bridging - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Implementation Pattern</h3></GSAPAnimated>
              <p>Ontology lookup + LLM normalization approach</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Prompt template
"""
Map terms in the following query to canonical ontology labels.
For each term, provide synonyms and formal terminology from {domain} field.
Query: {query}
Domain knowledge: {ontology_context}
"""`}
              </pre>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Implementation example
def semantic_bridge(query, domain):
    ontology = fetch_domain_ontology(domain)
    mapped_terms = llm.generate(
        prompt,
        query=query,
        ontology_context=ontology.summary
    )
    return construct_enriched_query(query, mapped_terms)`}
              </pre>
            </div>
          ),
          notes: `### Semantic Bridging — Implementation
[lecture] The implementation combines ontology lookups with LLM-powered normalization.
#### 💻 The Prompt
[lecture] The prompt instructs the LLM to map terms to canonical ontology labels, providing synonyms and formal terminology from the specified domain. You feed in the domain knowledge as context so the LLM knows which terminology system to use.
#### ⚙️ The Code
[lecture] The implementation fetches the domain ontology, passes it along with the query to the LLM, and constructs an enriched query using the mapped terms. The output query includes both the original user terms and the domain-specific equivalents.
A practical tip: build and maintain a **curated mapping dictionary** for your most common user terms. This is faster and more reliable than LLM-based mapping for known terms, and you only fall back to the LLM for novel queries.
[conversational] Let's see a medical example.`
        },
        {
          id: 45,
          title: '10. Semantic Bridging - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "heart attack treatment"<br />
                <strong>After:</strong> "myocardial infarction (MI) management" OR "acute coronary syndrome therapy" OR "thrombolysis" OR "PCI" OR "cardiac revascularization"
              </div>
              <h3 style={{ color: '#e74c3c', paddingTop: '10px', fontSize: '2rem' }}>Considerations</h3>
              <ul>
                <li>Requires curated domain ontology</li>
                <li>Risk of ontology drift over time</li>
                <li>May over-expand in ambiguous cases</li>
                <li>Domain knowledge maintenance overhead</li>
              </ul>
            </div>
          ),
          notes: `### Semantic Bridging — Example & Considerations
Here's a perfect medical example.
#### 📝 Before and After
[lecture] The user searches "heart attack treatment." After semantic bridging, it becomes "myocardial infarction management OR acute coronary syndrome therapy OR thrombolysis OR PCI OR cardiac revascularization." Now the search covers all the medical terminology that doctors actually use in clinical literature.
#### ⚠️ Watch Out For
[lecture] The challenges: it **requires a curated domain ontology** which takes significant effort to build and maintain. **Ontology drift** is real — medical terminology evolves, new drugs get approved, coding systems change. It **may over-expand** in ambiguous cases where a lay term maps to multiple expert concepts. And there's ongoing **domain knowledge maintenance overhead**.
[firmly] The key insight: semantic bridging is **essential for specialized domains** but requires investment in domain-specific resources. Once you build the ontology mapping, though, the quality improvement is dramatic and sustainable.
[conversational] Next up, Strategy 11: Query2Doc.`
        }
      ]
    },
    {
      id: 'strategy-11',
      title: '11. Query2Doc',
      slides: [
        {
          id: 46,
          title: '11. Query2Doc - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Improve retrieval by turning a query into a pseudo-document that reflects likely relevant content</h3></GSAPAnimated>
              <h3 style={{ color: '#2ecc71', fontSize: '2rem' }}>Benefits</h3>
              <ul>
                <li>Strong recall improvement</li>
                <li>Richer semantic matching</li>
                <li>Works well with dense retrieval</li>
                <li>Bridges vocabulary gaps</li>
              </ul>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="Query2Doc: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["🔍 Short Query\n'transformer attention'"] --> B["Generate\nPseudo-Doc"]
    B --> C["📄 Hypothetical Answer\n'Transformer attention\nmechanisms compute...'"]
    C --> D["Embed\nFull Doc"]
    D --> E["✅ Dense Match\nwith Real Docs"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <p>Best applied when:</p>
                <ul>
                  <li>Sparse or short queries lack context</li>
                  <li>Using dense or hybrid retrieval systems</li>
                  <li>Technical domains with specific terminology</li>
                  <li>Knowledge-intensive queries</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### Query2Doc — Overview
[conversational] Strategy 11 is **Query2Doc**, which is similar to HyDE but with a different focus.
#### 🎯 What Is It?
Query2Doc turns a query into a **pseudo-document** that mimics the style and content of relevant passages in your corpus. While HyDE generates a hypothetical answer, Query2Doc generates something that looks like a document you'd find in your collection. This pseudo-document is then used for retrieval — either by embedding it or by using it to expand the query with key terms.
#### ✅ Pros
[pleased] The good stuff: you get **strong recall improvement** because the pseudo-document contains rich semantic content. It enables **richer semantic matching** since a paragraph has more signal than a few query words. It **works well with dense retrieval** systems. And it **bridges vocabulary gaps** naturally because the generated document uses document-style language.
#### 🕐 When to Use This?
[reassuringly] Best when **sparse or short queries lack context**, when using **dense or hybrid retrieval systems**, in **technical domains with specific terminology**, and for **knowledge-intensive queries** that need comprehensive matching.
[conversational] Let's see how it works.`
        },
        {
          id: 47,
          title: '11. Query2Doc - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>How Query2Doc Works</h3></GSAPAnimated>
              <p>Generate a document-style expansion of the query that:</p>
              <ul>
                <li><strong>Mimics the style and content of relevant passages</strong> - Generated text resembles actual documents</li>
                <li><strong>Contains key terms and relationships</strong> - Includes domain-specific vocabulary and connections</li>
                <li><strong>Creates a richer representation for matching</strong> - Provides more semantic signal than query alone</li>
                <li><strong>Uses LLM to generate a hypothetical answer</strong> - Leverages model knowledge to create relevant content</li>
              </ul>
            </div>
          ),
          notes: `### Query2Doc — How It Works
[lecture] The Query2Doc process generates document-style expansions.
#### 🔄 The Process
[firmly] The system generates text that **mimics the style and content of relevant passages** — not an answer to the question, but a passage that would appear alongside relevant documents. This generated text **contains key terms and relationships** specific to the domain. It **creates a richer representation** for matching because a paragraph has far more semantic signal than a three-word query. And it **uses the LLM's knowledge** to fill in domain-specific vocabulary and concepts.
[confidently] The subtle difference from HyDE is that Query2Doc focuses on generating text that looks like a **source document**, not an answer. If you're searching a medical database, Query2Doc generates text that reads like a medical paper, not a doctor's explanation to a patient.
[conversational] Let's see the implementation.`
        },
        {
          id: 48,
          title: '11. Query2Doc - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Implementation Pattern</h3></GSAPAnimated>
              <p>LLM document expansion → embed → retrieve</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Prompt template
"""
Write a 150-word pseudo-document that would appear in
relevant sources for the following query. Include key
terminology and technical concepts but stay factual.
Query: {query}
"""`}
              </pre>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '0.8rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Implementation example
def query2doc(query):
    pseudo_doc = llm.generate(prompt, query=query)
    doc_embedding = embed_model.embed(pseudo_doc)
    results = vector_db.query(doc_embedding)
    return results`}
              </pre>
            </div>
          ),
          notes: `### Query2Doc — Implementation
[lecture] The implementation follows a generate-embed-retrieve pattern.
#### 💻 The Prompt
[firmly] The prompt asks the LLM to write a 150-word pseudo-document that would appear in relevant sources for the given query. You instruct it to include key terminology and technical concepts while staying factual. The goal is generating text that would naturally appear in the same corpus you're searching.
#### ⚙️ The Code
Three steps: generate the pseudo-document, embed it using your embedding model, then query the vector database with that embedding. The result is documents that are semantically similar to what a real answer document would look like.
A practical optimization: you can concatenate the original query with the pseudo-document before embedding, giving the retrieval system both the exact user terms and the expanded semantic context.
[conversational] Let's see an example.`
        },
        {
          id: 49,
          title: '11. Query2Doc - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "vector DB HNSW tuning"<br />
                <strong>After (Pseudo-doc):</strong> "HNSW (Hierarchical Navigable Small World) is a graph-based indexing algorithm used in vector databases for approximate nearest neighbor search. Key tuning parameters include M (maximum connections per node), which controls graph connectivity; efConstruction (search width during build) affecting index quality; and efSearch (search width during query) balancing speed vs recall. Proper tuning requires understanding the tradeoff between index build time, search latency, and recall performance..."
              </div>
              <h3 style={{ color: '#e74c3c', paddingTop: '10px', fontSize: '2rem' }}>Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Token-heavy approach</li>
                <li>Risk of introducing hallucinations</li>
                <li>Latency impact from generation step</li>
                <li>Must avoid overly specific claims</li>
              </ul>
            </div>
          ),
          notes: `### Query2Doc — Example & Considerations
Here's Query2Doc in practice.
#### 📝 Before and After
[firmly] The user searches "vector DB HNSW tuning." Query2Doc generates a pseudo-document explaining HNSW 👉 'H-N-S-W' as a graph-based indexing algorithm, describing key parameters like M for maximum connections, efConstruction 👉 'ee-eff-construction' for build-time search width, and efSearch 👉 'ee-eff-search' for query-time width. This rich technical passage, when embedded, finds documents about the exact same concepts.
#### ⚠️ Watch Out For
[lecture] The concerns: it's a **token-heavy approach** since you're generating a full paragraph. There's a **risk of introducing hallucinations** if the LLM generates incorrect technical details. **Latency impact** from the generation step. And you **must avoid overly specific claims** in the pseudo-document that could bias retrieval toward incorrect information.
[firmly] The difference between Query2Doc and HyDE is subtle but important. HyDE generates an answer. Query2Doc generates a source document. In practice, both work well, and the choice often comes down to your specific use case.
[conversational] Next, Strategy 12: ITER-RETGEN, the iterative approach.`
        }
      ]
    },
    {
      id: 'strategy-12',
      title: '12. ITER-RETGEN (Iterative Retrieval-Generation)',
      slides: [
        {
          id: 50,
          title: '12. ITER-RETGEN: Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Self-refine queries via iterative retrieve→generate cycles to improve coverage and accuracy for complex questions</h3></GSAPAnimated>

              <h3 style={{ color: '#2ecc71', fontSize: '2rem' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Better coverage without over-fetching</li>
                <li>Progressive refinement of answers</li>
                <li>Handles complex multi-part questions</li>
                <li>Adapts to information gaps</li>
                <li>More comprehensive final responses</li>
              </ul>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="ITER-RETGEN: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TB
    A["❓ Hard Question\n'Compare cloud costs\nfor 3-tier app'"] --> B["Retrieve #1\n+ Draft Answer"]
    B --> C["Gaps Found?"]
    C -->|"Yes"| D["New Query\nfrom Draft"]
    D --> E["Retrieve #2\n+ Refine Answer"]
    E --> C
    C -->|"No"| F["✅ Complete\nAnswer"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style D fill:#3a1a5c,color:#e9d5ff,stroke:#aaaaaa,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <ul>
                  <li>Hard questions requiring comprehensive info</li>
                  <li>Incomplete initial context</li>
                  <li>Multi-step reasoning requirements</li>
                  <li>When single retrieval pass misses key info</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### ITER-RETGEN — Overview
[conversational] Strategy 12 is **ITER-RETGEN**, which stands for Iterative Retrieval-Generation. ITER-RETGEN 👉 'iter-ret-jen'.
#### 🎯 What Is It?
[lecture] This is the most sophisticated strategy we've seen so far. Instead of doing one retrieval pass and hoping for the best, ITER-RETGEN **alternates between retrieval and generation in multiple rounds**. It retrieves some documents, generates a draft answer, identifies what's missing, retrieves more targeted information, refines the answer, and repeats until the answer is comprehensive.
#### ✅ Pros
[pleased] The good stuff: you get **better coverage without over-fetching** because each iteration targets specific gaps. The answer **progressively improves** with each round. It **handles complex multi-part questions** naturally. It **adapts to information gaps** by identifying what's missing and searching specifically for it. And the **final responses are more comprehensive** than single-pass approaches.
#### 🕐 When to Use This?
[reassuringly] Best for **hard questions requiring comprehensive information**, **incomplete initial context**, **multi-step reasoning requirements**, and **when a single retrieval pass misses key information**.
[conversational] Let's see the workflow.`
        },
        {
          id: 51,
          title: '12. ITER-RETGEN: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Alternates between answer drafts and targeted follow-up queries</h3></GSAPAnimated>

              <ul>
                <li>Initial response identifies knowledge gaps</li>
                <li>System generates targeted follow-up queries</li>
                <li>Retrieves additional context on specific points</li>
                <li>Refines answer with new information</li>
                <li>Repeats until complete or threshold reached</li>
              </ul>
            </div>
          ),
          notes: `### ITER-RETGEN — How It Works
[lecture] The process alternates between drafting and targeted retrieval.
#### 🔄 The Iterative Loop
[lecture] The **initial response identifies knowledge gaps** — the first draft answer naturally reveals what information is missing. Then the **system generates targeted follow-up queries** specifically for those gaps. It **retrieves additional context** on the missing points. The answer is **refined with the new information**. And this **repeats until the answer is complete** or a maximum iteration count is reached.
[storytelling] Think of it like a researcher writing a paper. You write a first draft, realize you need more data on a specific point, go search for it, update the draft, realize another gap, search again, and so on until the paper is comprehensive. ITER-RETGEN automates this research loop.
[firmly] The key insight is that the **first retrieval attempt rarely gets everything right**. By iterating, you progressively fill in the gaps.
[conversational] Let's see the implementation.`
        },
        {
          id: 52,
          title: '12. ITER-RETGEN: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Prompt Template</h3></GSAPAnimated>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {`"""
Given the current answer draft and identified gaps below,
propose up to 3 follow-up retrieval queries that would
help complete or improve the answer.
Draft answer: {current_draft}
Return only the follow-up queries without explanations.
"""`}
              </pre>

              <h3 style={{ fontSize: '2rem' }}>Implementation</h3>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {`def iter_retgen(query, max_iterations=3):
  draft = generate_initial_answer(query)
  for i in range(max_iterations):
    subqueries = generate_follow_up_queries(draft)
    new_context = retrieve_documents(subqueries)
    draft = refine_answer(draft, new_context)
  return draft`}
              </pre>
            </div>
          ),
          notes: `### ITER-RETGEN — Implementation
[lecture] The implementation uses a loop with draft evaluation.
#### 💻 The Prompt
[lecture] The prompt provides the current draft answer and asks the LLM to propose up to three follow-up retrieval queries that would help complete or improve the answer. It explicitly asks for just the queries, no explanations.
#### ⚙️ The Code
[lecture] The code starts by generating an initial answer from the first retrieval pass. Then it enters a loop: generate follow-up queries from the draft, retrieve new documents using those queries, and refine the answer with the combined context. The loop runs for a configurable maximum number of iterations, typically two to three.
[firmly] The stopping criteria are important. You can stop when the LLM reports no more gaps, when the quality score stops improving, when the maximum iteration count is reached, or when the token budget is exhausted.
[conversational] Let's see an example.`
        },
        {
          id: 53,
          title: '12. ITER-RETGEN: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Start:</strong> Initial query: "What are effective LLM guardrails?"<br />
                <strong>Iter 1:</strong> Draft mentions input filtering. Follow-up: "prompt injection prevention techniques"<br />
                <strong>Iter 2:</strong> Draft adds RLHF. Follow-up: "sandboxing approaches for LLMs"<br />
                <strong>Final:</strong> Comprehensive answer covering filtering, RLHF, sandboxing, output checking and monitoring
              </div>

              <h3 style={{ color: '#e74c3c', paddingTop: '10px', fontSize: '2rem' }}>Weaknesses / Considerations</h3>
              <ul>
                <li>Orchestration complexity</li>
                <li>Increased latency</li>
                <li>Higher token/API costs</li>
                <li>Potential for retrieval drift</li>
                <li>Needs stopping criteria</li>
              </ul>
            </div>
          ),
          notes: `### ITER-RETGEN — Example & Considerations
Here's ITER-RETGEN solving a complex question.
#### 📝 Before and After
[lecture] The user asks "What are effective LLM guardrails?" The first retrieval and draft mention input filtering. The system generates a follow-up query: "prompt injection prevention techniques" and retrieves more context. The refined draft now covers filtering and RLHF 👉 'ar-ell-aitch-eff'. Another follow-up: "sandboxing approaches for LLMs." The final answer comprehensively covers filtering, RLHF, sandboxing, output checking, and monitoring — far more complete than any single-pass approach.
#### ⚠️ Watch Out For
[lecture] The challenges are significant. **Orchestration complexity** — you need to manage the iteration loop, track state, and handle edge cases. **Increased latency** — each iteration adds retrieval and generation time. **Higher token and API costs** — multiple LLM calls per query add up quickly. **Potential for retrieval drift** — follow-up queries might go off-topic. And you **need good stopping criteria** to avoid infinite loops.
[pleased] The bottom line: ITER-RETGEN is your **heavy artillery** for complex questions. Don't use it for simple queries — the overhead isn't worth it. But for hard, multi-faceted questions, it delivers dramatically better answers.
[conversational] Next, Strategy 13: Template-Based Rewriting.`
        }
      ]
    },
    {
      id: 'strategy-13',
      title: '13. Template-Based Rewriting',
      slides: [
        {
          id: 54,
          title: '13. Template-Based Rewriting: Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Standardize rewrites for recurring intents and query patterns to ensure consistency and quality</h3></GSAPAnimated>

              <h3 style={{ color: '#2ecc71', fontSize: '2rem' }}>Benefits</h3>
              <ul>
                <li>Consistent query quality</li>
                <li>Fast execution (low latency)</li>
                <li>Predictable behavior</li>
                <li>Enforces standardized formats</li>
              </ul>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="Template-Based Rewriting: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["📥 User Query\n'return my shoes'"] --> B["Classify\nIntent"]
    B --> C["Intent: RETURN\nTemplate: '{product}\nreturn policy {store}'"]
    C --> D["Fill Template\n'shoes return policy\nNikeStore'"]
    D --> E["✅ Consistent\nStructured Query"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <ul>
                  <li>Customer support & documentation QA</li>
                  <li>E-commerce product search</li>
                  <li>Specialized domain knowledge</li>
                  <li>High-volume, predictable query patterns</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### Template-Based Rewriting — Overview
[conversational] Strategy 13 is **Template-Based Rewriting**, which brings consistency and speed to query transformation.
#### 🎯 What Is It?
[storytelling] Instead of generating a new rewrite for every query, you maintain a library of **predefined templates** for common query patterns. When a user asks a comparison question, you slot their terms into a comparison template. When they ask a troubleshooting question, you use a troubleshooting template. Think of it like Mad Libs for queries — the structure is fixed, you just fill in the blanks.
#### ✅ Pros
[pleased] The good stuff: **consistent query quality** because every query of the same type gets the same structure. **Fast execution** with low latency since template filling is cheaper than full LLM generation. **Predictable behavior** that's easy to test and debug. And it **enforces standardized formats** that your retrieval system can be optimized for.
#### 🕐 When to Use This?
[reassuringly] Best for **customer support and documentation QA**, **e-commerce product search**, **specialized domain knowledge** bases, and any scenario with **high-volume, predictable query patterns**.
[conversational] Let's see how it works.`
        },
        {
          id: 55,
          title: '13. Template-Based Rewriting: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Fill predefined domain templates based on intent types</h3></GSAPAnimated>

              <ul>
                <li>Lookup templates (product, document, person)</li>
                <li>Comparison templates (A vs B by attribute)</li>
                <li>Troubleshooting templates (error + system)</li>
                <li>How-to templates (task + constraints)</li>
              </ul>
            </div>
          ),
          notes: `### Template-Based Rewriting — How It Works
[lecture] The system matches queries to predefined templates and fills in the slots.
#### 🔄 The Template Types
There are several common template types. **Lookup templates** for finding specific items: "Find information about [product] in [category]." **Comparison templates** for contrasting items: "Compare [A] vs [B] by [attribute] in [timeframe]." **Troubleshooting templates** for fixing problems: "[error] resolution for [system] on [platform]." And **how-to templates** for procedural questions: "How to [task] with [constraints]."
[confidently] The beauty is that each template type can be optimized independently. Your comparison template can include structure that your retrieval system knows how to handle efficiently, while your troubleshooting template uses different search strategies.
[conversational] Let's look at the implementation.`
        },
        {
          id: 56,
          title: '13. Template-Based Rewriting: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Prompt Template</h3></GSAPAnimated>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {`"""
Intent={intent}. Fill template with slots from: {query}.
Return final query without explanations.
Available templates:
- Compare: "Compare {product1} vs {product2} for {attribute} in {timeframe}"
- Pricing: "What is the {pricing_type} for {product} in {timeframe}"
- Troubleshoot: "{error} resolution for {system} on {platform}"
"""`}
              </pre>

              <h3 style={{ fontSize: '2rem' }}>Implementation</h3>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {`def template_rewrite(query):
  intent = classify_intent(query)
  template = select_template(intent)
  slots = extract_slots(query, intent)
  return fill_template(template, slots)`}
              </pre>
            </div>
          ),
          notes: `### Template-Based Rewriting — Implementation
[lecture] The implementation follows a classify-select-fill pattern.
#### 💻 The Prompt
[lecture] The prompt provides the intent type and available templates, then asks the LLM to fill in the appropriate template with slots from the query. This is much cheaper than generating a full rewrite from scratch because the LLM only needs to extract entities and slot them in.
#### ⚙️ The Code
[lecture] The code first classifies the intent, selects the matching template, extracts slot values from the query, and fills the template. The result is a structured, standardized query that follows a known pattern.
One practical tip: start with five to ten templates covering your most common query patterns. You can always add more later. Monitor which queries don't match any template and use those to guide new template creation.
[conversational] Let's see an example.`
        },
        {
          id: 57,
          title: '13. Template-Based Rewriting: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Before:</strong> "compare s3 vs gcs pricing"<br />
                <strong>After:</strong> "Compare storage pricing: AWS S3 vs Google Cloud Storage for 1–10 TB, standard tier, 2024"
              </div>

              <h3 style={{ color: '#e74c3c', paddingTop: '10px', fontSize: '2rem' }}>Weaknesses / Considerations</h3>
              <ul>
                <li>Rigid structure limits flexibility</li>
                <li>Requires template maintenance</li>
                <li>Struggles with novel queries</li>
                <li>Intent classification errors cascade</li>
              </ul>
            </div>
          ),
          notes: `### Template-Based Rewriting — Example & Considerations
Here's template-based rewriting in action.
#### 📝 Before and After
[lecture] The user searches "compare s3 vs gcs pricing." The system detects a comparison intent, selects the comparison template, and fills it in: "Compare storage pricing: AWS S3 vs Google Cloud Storage for 1-10 TB, standard tier, 2024." Notice how the template adds the volume range, tier, and year — information that makes the retrieval much more targeted.
#### ⚠️ Watch Out For
[concerned] The downsides: **rigid structure limits flexibility** — novel query types that don't fit any template get handled poorly. **Template maintenance** is ongoing work as new patterns emerge. The system **struggles with novel queries** that don't match existing patterns. And **intent classification errors cascade** — if you pick the wrong template, the entire rewrite is wrong.
[firmly] The key insight: template-based rewriting is perfect for **known, recurring query patterns**. Use it alongside more flexible strategies for novel queries.
[conversational] Next, Strategy 14: Entity-Centric Rewriting.`
        }
      ]
    },
    {
      id: 'strategy-14',
      title: '14. Entity-Centric Rewriting',
      slides: [
        {
          id: 58,
          title: '14. Entity-Centric Rewriting: Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Disambiguate and ground queries to specific entities, resolving ambiguity and improving retrieval precision for entity-focused questions</h3></GSAPAnimated>

              <h3 style={{ color: '#2ecc71', fontSize: '2rem' }}>Benefits</h3>
              <ul>
                <li>Significantly improves precision</li>
                <li>Enables knowledge graph integration</li>
                <li>Solves homonym/polysemy issues</li>
                <li>Can add helpful entity attributes</li>
                <li>Reduces irrelevant results</li>
              </ul>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="Entity-Centric Rewriting: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["🔍 Query\n'Apple revenue'"] --> B["Extract\nEntities"]
    B --> C{"Which Apple?"}
    C -->|"Tech Giant"| D["Apple Inc. (AAPL)\nCupertino, CA"]
    C -->|"Fruit"| E["Apple (fruit)\ncrop statistics"]
    D --> F["✅ Enriched Query\n'Apple Inc Q4 2024\nannual revenue'"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style E fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <ul>
                  <li>Knowledge graph integration</li>
                  <li>Product catalogs and search</li>
                  <li>People/places/organization queries</li>
                  <li>Ambiguous entity names</li>
                  <li>Domain-specific entity collections</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### Entity-Centric Rewriting — Overview
[conversational] Strategy 14 is **Entity-Centric Rewriting**, which focuses on identifying, disambiguating, and enriching entities in queries.
#### 🎯 What Is It?
When a user searches "jaguar speed," what do they mean? The animal? The car? The macOS version? Entity-centric rewriting uses **Named Entity Recognition** (NER 👉 'ner') and **entity linking** to figure out which entities the user is referring to, then rewrites the query with disambiguated, canonical entity names.
#### ✅ Pros
[cautiously] The good stuff: it **significantly improves precision** by eliminating entity ambiguity. It **enables knowledge graph integration** for richer queries. It **solves homonym and polysemy issues** — the same word meaning different things. It can **add helpful entity attributes** like types, categories, and relationships. And it **reduces irrelevant results** caused by entity confusion.
#### 🕐 When to Use This?
[reassuringly] Best for **knowledge graph integration**, **product catalogs**, **people, places, and organization queries**, **ambiguous entity names**, and **domain-specific entity collections**.
[conversational] Let's see the process.`
        },
        {
          id: 59,
          title: '14. Entity-Centric Rewriting: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Extract entities → link to knowledge base → enrich with attributes → reformulate query</h3></GSAPAnimated>

              <ul>
                <li>Named Entity Recognition (NER) extraction</li>
                <li>Entity linking to knowledge base IDs</li>
                <li>Entity enrichment with attributes</li>
                <li>Disambiguation with entity types</li>
              </ul>
            </div>
          ),
          notes: `### Entity-Centric Rewriting — How It Works
[lecture] The process follows an extract-link-enrich-reformulate pipeline.
#### 🔄 The Pipeline
First, **NER extraction** identifies all entities in the query — people, organizations, products, locations, technical terms. Second, **entity linking** connects each entity to a canonical ID in your knowledge base. Third, **entity enrichment** adds attributes from the knowledge base — types, categories, relationships. Finally, **disambiguation with entity types** clarifies which specific entity the user means.
[conversational] For example, "Apple" in a food context links to the fruit entity, while "Apple" in a tech context links to Apple Inc. The system uses surrounding terms and context to make this determination.
[conversational] Let's look at the implementation.`
        },
        {
          id: 60,
          title: '14. Entity-Centric Rewriting: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Prompt Template</h3></GSAPAnimated>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {`"""
Identify all entities in the following query.
For each entity:
1. Determine its type (person, organization, location, product, etc.)
2. Link to a canonical name/ID if possible
3. Add disambiguation information
Then rewrite the query with canonical entity names and types.
Query: {query}
"""`}
              </pre>

              <h3 style={{ fontSize: '2rem' }}>Implementation</h3>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {`def entity_rewrite(query):
  # Extract entities
  entities = ner_model.extract(query)
  # Link to knowledge base
  linked_entities = entity_linker.link(entities)
  # Rewrite query with disambiguated entities
  rewritten_query = query_builder.rewrite(
    query, linked_entities)
  return rewritten_query`}
              </pre>
            </div>
          ),
          notes: `### Entity-Centric Rewriting — Implementation
[lecture] The implementation combines NER with knowledge base linking.
#### 💻 The Prompt
[lecture] The prompt asks the LLM to identify all entities, determine their types, link them to canonical names or IDs, add disambiguation information, and then rewrite the query with the resolved entities.
#### ⚙️ The Code
[lecture] The code extracts entities using an NER model, links them to a knowledge base for canonical names, and then rewrites the query with the disambiguated entities. This is more infrastructure-heavy than other strategies because you need both an NER model and a knowledge base.
A practical alternative: if you don't have a full knowledge base, you can use the LLM itself for entity disambiguation by providing it with a list of known entities and their types. It's less precise but much easier to implement.
[conversational] Let's see an example.`
        },
        {
          id: 61,
          title: '14. Entity-Centric Rewriting: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Before:</strong> "jaguar speed"<br />
                <strong>After:</strong> "Jaguar (animal:Panthera onca) top speed; exclude Jaguar (brand:automobile manufacturer)"
              </div>

              <h3 style={{ color: '#e74c3c', paddingTop: '10px', fontSize: '2rem' }}>Weaknesses / Considerations</h3>
              <ul>
                <li>Requires knowledge graph/entity database</li>
                <li>Complex entity linking system needed</li>
                <li>May struggle with novel/unknown entities</li>
                <li>Risk of incorrect disambiguation</li>
                <li>Higher implementation complexity</li>
              </ul>
            </div>
          ),
          notes: `### Entity-Centric Rewriting — Example & Considerations
Here's entity-centric rewriting solving the classic ambiguity problem.
#### 📝 Before and After
[lecture] The user searches "jaguar speed." The system identifies "jaguar" as an ambiguous entity — it could be the animal Panthera onca or the automobile manufacturer. Based on context or user profile, it rewrites to "Jaguar (animal: Panthera onca) top speed; exclude Jaguar (brand: automobile manufacturer)." Now the retrieval system knows exactly which jaguar to search for.
#### ⚠️ Watch Out For
[lecture] The challenges: you **need a knowledge graph or entity database**, which is a significant infrastructure investment. The **entity linking system is complex** to build and maintain. It **struggles with novel or unknown entities** not in your knowledge base. There's **risk of incorrect disambiguation** when context is insufficient. And the overall **implementation complexity is higher** than simpler strategies.
[firmly] The key insight: entity-centric rewriting is **essential for domains with many ambiguous entities** — product catalogs, medical terminology, geographic locations. For general-purpose search, simpler strategies may suffice.
[conversational] Next, Strategy 15: Temporal Rewriting.`
        }
      ]
    },
    {
      id: 'strategy-15',
      title: '15. Temporal Rewriting',
      slides: [
        {
          id: 62,
          title: '15. Temporal Rewriting: Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Make time references explicit and current, ensuring retrieval of temporally relevant information and reducing outdated results</h3></GSAPAnimated>

              <h3 style={{ color: '#2ecc71', fontSize: '2rem' }}>Benefits</h3>
              <ul>
                <li>Reduces stale/outdated search results</li>
                <li>Significant relevance gains for time-sensitive topics</li>
                <li>Improves specificity of versioned documentation</li>
                <li>Handles implicit temporal context automatically</li>
              </ul>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="Temporal Rewriting: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["⏰ Query with\nVague Time\n'latest AI models'"] --> B["Normalize\nTemporal Refs"]
    B --> C["Resolve 'latest'\n→ 2025-Q1"]
    C --> D["Add Time Filter\ndate >= 2025-01-01"]
    D --> E["✅ Time-Aware\nQuery"]
    E --> F["📰 Recent\nDocs Retrieved"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style E fill:#3a1a5c,color:#e9d5ff,stroke:#aaaaaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <ul>
                  <li>News and current events</li>
                  <li>Product pricing and availability queries</li>
                  <li>API documentation and changelog searches</li>
                  <li>Policy and regulation updates</li>
                  <li>Documentation with versioning</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### Temporal Rewriting — Overview
[conversational] Strategy 15 is **Temporal Rewriting**, which handles one of the most common but overlooked problems in search: time.
#### 🎯 What Is It?
When a user asks for "latest OpenAI API quotas," what does "latest" mean? Today? This month? This year? Temporal rewriting **makes time references explicit** by resolving relative dates, adding date ranges, and boosting recency for time-sensitive topics.
#### ✅ Pros
[pleased] The good stuff: it **reduces stale and outdated results** — no more getting 2019 pricing when the user wants 2024 data. It provides **significant relevance gains** for time-sensitive topics. It **improves specificity** for versioned documentation — "React 18" vs "React 19" makes a huge difference. And it **handles implicit temporal context** automatically — "latest" and "current" get resolved to actual dates.
#### 🕐 When to Use This?
[reassuringly] Best for **news and current events**, **product pricing and availability**, **API documentation and changelogs**, **policy and regulation updates**, and **documentation with versioning**.
[conversational] Let's see the mechanics.`
        },
        {
          id: 63,
          title: '15. Temporal Rewriting: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Resolves and enhances temporal aspects through time normalization + recency boost</h3></GSAPAnimated>

              <ul>
                <li>Relative time normalization (e.g., "yesterday" → specific date)</li>
                <li>Adding explicit date ranges</li>
                <li>Boosting recency for time-sensitive topics</li>
                <li>Resolving ambiguous temporal references</li>
              </ul>
            </div>
          ),
          notes: `### Temporal Rewriting — How It Works
Temporal rewriting resolves and enhances time aspects through several techniques.
#### 🔄 The Process
**Relative time normalization** converts expressions like "yesterday," "last month," or "recently" into specific dates. **Adding explicit date ranges** constrains results to relevant time periods. **Recency boosting** prioritizes newer documents for topics where freshness matters. And **resolving ambiguous temporal references** clarifies what "latest" or "current" means in context.
This is surprisingly impactful. [storytelling] Consider a search for "Python best practices" — results from 2018 recommending Python 2 are actively harmful. By adding a time constraint, you ensure the user gets current, relevant information.
[conversational] Let's see the implementation.`
        },
        {
          id: 64,
          title: '15. Temporal Rewriting: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Prompt Template</h3></GSAPAnimated>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {`"""
Normalize any relative time expressions in the query below to absolute dates.
Then add an explicit date range that is most relevant to the query.
Format: original query + "from [start date] to [end date]"
Current date: 2025-11-07
Query: {query}
"""`}
              </pre>

              <h3 style={{ fontSize: '2rem' }}>Implementation</h3>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {`def temporal_rewrite(query):
  current_date = datetime.now().strftime("%Y-%m-%d")
  rewritten = llm.generate(
    template,
    query=query,
    current_date=current_date
  )
  return rewritten`}
              </pre>
            </div>
          ),
          notes: `### Temporal Rewriting — Implementation
[lecture] The implementation combines date parsing with LLM-powered time resolution.
#### 💻 The Prompt
[lecture] The prompt provides the current date and asks the LLM to normalize any relative time expressions to absolute dates, then add an explicit date range that's most relevant to the query. The output format includes the original query plus a "from start date to end date" suffix.
#### ⚙️ The Code
[lecture] The implementation is clean: get the current date, pass it along with the query to the LLM, and receive a time-normalized rewrite. The LLM handles both explicit relative terms like "last week" and implicit temporal context like "latest" or "current."
A practical tip: you can implement basic temporal rewriting with **simple regex rules** for common patterns like "today," "this year," "last quarter." Fall back to the LLM only for complex or ambiguous temporal expressions.
[conversational] Let's see an example.`
        },
        {
          id: 65,
          title: '15. Temporal Rewriting: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Before:</strong> "latest OpenAI API quotas"<br />
                <strong>After:</strong> "OpenAI API rate limits as of 2025-11; changes in 2024–2025"
              </div>

              <h3 style={{ color: '#e74c3c', paddingTop: '10px', fontSize: '2rem' }}>Weaknesses / Considerations</h3>
              <ul>
                <li>Requires fresh/updated index</li>
                <li>May miss historically relevant information</li>
                <li>Needs fine-tuning for specific domains</li>
                <li>Can over-specify time constraints</li>
              </ul>
            </div>
          ),
          notes: `### Temporal Rewriting — Example & Considerations
Here's temporal rewriting in action.
#### 📝 Before and After
[lecture] The user searches "latest OpenAI API quotas." After temporal rewriting, it becomes "OpenAI API rate limits as of 2025-11; changes in 2024-2025." Now the retrieval system knows to prioritize recent documents and focus on the specific time period that matters.
#### ⚠️ Watch Out For
[firmly] The risks: it **requires a fresh and updated index** — temporal constraints are useless if your documents don't have accurate timestamps. It **may miss historically relevant information** that provides important context. It **needs fine-tuning for specific domains** — "latest" means different things in fast-moving tech versus slow-changing legal. And it can **over-specify time constraints**, filtering out relevant documents that don't have explicit dates.
[firmly] The key insight: temporal rewriting is a **quick win** with high impact. Even basic date normalization can significantly improve result relevance. Start simple with regex-based rules and add LLM-based resolution for complex cases.
[conversational] Next, Strategy 16: Domain-Specific Rewriting.`
        }
      ]
    },
    {
      id: 'strategy-16',
      title: '16. Domain-Specific Rewriting',
      slides: [
        {
          id: 66,
          title: '16. Domain-Specific Rewriting: Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Translate lay terms to domain jargon and fields, improving retrieval precision for specialized knowledge domains</h3></GSAPAnimated>

              <h3 style={{ color: '#2ecc71', fontSize: '2rem' }}>Benefits</h3>
              <ul>
                <li>High precision in specialized corpora</li>
                <li>Better matching to expert terminology</li>
                <li>Improved semantic relevance</li>
                <li>Efficient filtering via field constraints</li>
              </ul>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="Domain-Specific Rewriting: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    subgraph Lay["👤 Lay Language"]
        A["'blood thinner side\neffects in elderly'"]
    end
    subgraph Domain["🏥 Medical Domain"]
        B["anticoagulant\nadverse effects\ngeriatric patients"]
    end
    subgraph Result["📚 Literature"]
        C["✅ Clinical Studies\nRetrieved"]
    end
    Lay --> Domain --> Result
    style Lay fill:#0d1f33,stroke:#4da6ff,stroke-width:2px,color:#e0e0e0
    style Domain fill:#0d1f33,stroke:#f5a623,stroke-width:2px,color:#e0e0e0
    style Result fill:#0d1f33,stroke:#4da6ff,stroke-width:2px,color:#e0e0e0
    style A fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <ul>
                  <li>Legal research and case law</li>
                  <li>Medical/healthcare information retrieval</li>
                  <li>Financial/investment analysis</li>
                  <li>Technical engineering documentation</li>
                  <li>Scientific literature search</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### Domain-Specific Rewriting — Overview
[conversational] Strategy 16 is **Domain-Specific Rewriting**, which is similar to semantic bridging but goes deeper into domain expertise.
#### 🎯 What Is It?
While semantic bridging maps terms to ontologies, domain-specific rewriting **fully translates** lay queries into expert-level formulations with field-specific constraints. It doesn't just replace "blood thinner" with "anticoagulant" — it adds specific drug names, complication types, and field tags.
#### ✅ Pros
[pleased] The good stuff: **high precision in specialized corpora** because queries match expert terminology exactly. **Better matching to expert terminology** that documents actually use. **Improved semantic relevance** across the board. And **efficient filtering via field constraints** that narrow the search space.
#### 🕐 When to Use This?
[reassuringly] Best for **legal research**, **medical and healthcare information**, **financial and investment analysis**, **technical engineering documentation**, and **scientific literature search**.
[conversational] Let's see how it works.`
        },
        {
          id: 67,
          title: '16. Domain-Specific Rewriting: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Maps query terms to domain-specific terminology and applies field-specific filters</h3></GSAPAnimated>

              <ul>
                <li>Specialized domain lexicons/ontologies</li>
                <li>Field-specific constraints and filters</li>
                <li>Terminology standardization</li>
                <li>Expert-guided jargon translation</li>
              </ul>
            </div>
          ),
          notes: `### Domain-Specific Rewriting — How It Works
[lecture] The system maps queries to domain terminology and applies field constraints.
#### 🔄 The Process
[lecture] The system uses **specialized domain lexicons and ontologies** — curated vocabularies for each field. It applies **field-specific constraints and filters** — like specifying "pharmacology" as the field for a drug query. It performs **terminology standardization** — ensuring consistent use of canonical terms. And it leverages **expert-guided jargon translation** — mapping lay descriptions to precise technical language.
[storytelling] Think of it like having a specialist librarian for each domain. When you walk into a medical library and ask about "blood thinners," the librarian knows to search for anticoagulants, specific drug classes, and relevant medical subfields.
[conversational] Let's see the implementation.`
        },
        {
          id: 68,
          title: '16. Domain-Specific Rewriting: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Prompt Template</h3></GSAPAnimated>
              <pre style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>
                {`"""
Rewrite the following query using domain-appropriate
terminology for {domain}. Preserve the original intent
but use precise technical terms, standard classifications,
and appropriate field constraints.
Query: {query}
Domain: {domain}
"""`}
              </pre>

              <h3 style={{ fontSize: '2rem' }}>Implementation</h3>
              <pre style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>
                {`def domain_specific_rewrite(query, domain):
  # Load domain ontology
  ontology = load_domain_ontology(domain)
  # Generate domain-specific rewrite
  rewritten = llm.generate(
    prompt_template,
    query=query,
    domain=domain
  )
  # Add field constraints
  rewritten = add_field_constraints(rewritten, domain)
  return rewritten`}
              </pre>
            </div>
          ),
          notes: `### Domain-Specific Rewriting — Implementation
[lecture] The implementation loads domain ontologies and applies them to queries.
#### 💻 The Prompt
[lecture] The prompt instructs the LLM to rewrite the query using domain-appropriate terminology, preserving the original intent but using precise technical terms, standard classifications, and field constraints.
#### ⚙️ The Code
[lecture] The code loads a domain-specific ontology, generates the domain-aware rewrite using the LLM with the ontology as context, and then adds field constraints specific to the domain. The result is a query that looks like it was written by a domain expert.
A practical consideration: you can build lightweight domain ontologies by extracting terms from your own corpus. You don't need a full medical ontology — just a mapping of the most common lay terms to expert equivalents for your specific document collection.
[conversational] Let's see an example.`
        },
        {
          id: 69,
          title: '16. Domain-Specific Rewriting: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Before:</strong> "blood thinner side effects"<br />
                <strong>After:</strong> "anticoagulant adverse effects: warfarin, DOACs (apixaban, rivaroxaban), hemorrhagic complications field:pharmacology"
              </div>

              <h3 style={{ color: '#e74c3c', paddingTop: '10px', fontSize: '2rem' }}>Weaknesses / Considerations</h3>
              <ul>
                <li>Requires domain-specific knowledge/lexicons</li>
                <li>Harder to maintain across evolving domains</li>
                <li>May over-specialize simple queries</li>
                <li>Needs separate models per domain</li>
              </ul>
            </div>
          ),
          notes: `### Domain-Specific Rewriting — Example & Considerations
Here's a medical example.
#### 📝 Before and After
[lecture] The user searches "blood thinner side effects." After domain-specific rewriting, it becomes "anticoagulant adverse effects: warfarin, DOACs 👉 'dee-oh-aks' (apixaban, rivaroxaban), hemorrhagic complications field:pharmacology." The rewrite adds specific drug names, drug classes, complication types, and a field constraint — everything a medical professional would search for.
#### ⚠️ Watch Out For
[lecture] The challenges: it **requires domain-specific knowledge and lexicons** that take effort to build. It's **harder to maintain across evolving domains** as new terminology emerges. It **may over-specialize simple queries** that don't need expert-level formulation. And it **needs separate models per domain**, which increases infrastructure complexity.
[firmly] The key insight: domain-specific rewriting delivers the **highest precision** for specialized searches. If your RAG system serves a specific vertical like legal, medical, or financial, this strategy is essential.
[conversational] Next, Strategy 17: Intent Classification and Rewriting.`
        }
      ]
    },
    {
      id: 'strategy-17',
      title: '17. Intent Classification and Rewriting',
      slides: [
        {
          id: 70,
          title: '17. Intent Classification: Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Match rewriting strategy to specific task types, improving retrieval performance by applying the most appropriate transformation for each intent</h3></GSAPAnimated>

              <h3 style={{ color: '#2ecc71', fontSize: '2rem' }}>Benefits</h3>
              <ul>
                <li>Centralized policy control</li>
                <li>Highly scalable across domains</li>
                <li>Adapts to varied query patterns</li>
                <li>Can optimize for different metrics per intent</li>
              </ul>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="Intent Classification: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TB
    A["📥 Incoming Query"] --> B["Classify Intent"]
    B --> C{"Intent Type"}
    C -->|"Factual"| D["→ Direct Lookup"]
    C -->|"Comparison"| E["→ Decompose"]
    C -->|"Temporal"| F["→ Time Rewrite"]
    C -->|"Domain"| G["→ Jargon Map"]
    D --> H["✅ Best Strategy\nApplied"]
    E --> H
    F --> H
    G --> H
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#3a1a5c,color:#e9d5ff,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style F fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style G fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style H fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <ul>
                  <li>Mixed query workloads</li>
                  <li>Systems with agent-based routing</li>
                  <li>Enterprise search with diverse needs</li>
                  <li>Multi-domain knowledge bases</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### Intent Classification — Overview
[conversational] Strategy 17 is **Intent Classification and Rewriting**, which acts as a **router** that directs queries to the most appropriate rewriting strategy.
#### 🎯 What Is It?
Instead of applying the same rewriting strategy to every query, intent classification first figures out **what kind of query it is**, then applies the strategy that works best for that type. A lookup query gets entity-centric rewriting. A comparison query gets multi-query generation. A troubleshooting query gets step-back prompting. It's like having a traffic controller for your query rewriting pipeline.
#### ✅ Pros
[pleased] The good stuff: **centralized policy control** — you manage all strategies from one place. **Highly scalable** across domains and query types. It **adapts to varied query patterns** automatically. And you can **optimize different metrics per intent** — precision for lookups, recall for comparisons.
#### 🕐 When to Use This?
[reassuringly] Best for **mixed query workloads**, **systems with agent-based routing**, **enterprise search with diverse needs**, and **multi-domain knowledge bases**.
[conversational] Let's see the routing logic.`
        },
        {
          id: 71,
          title: '17. Intent Classification: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Classify query into intent categories, then apply specific strategies</h3></GSAPAnimated>

              <ul>
                <li>Lookup → entity-centric rewriting</li>
                <li>Compare → multi-query & structured expansion</li>
                <li>Troubleshoot → step-back & domain-specific</li>
                <li>Generate → template-based rewriting</li>
              </ul>
            </div>
          ),
          notes: `### Intent Classification — How It Works
[lecture] The system classifies queries into intent categories and routes them to specific strategies.
#### 🔄 The Routing Map
**Lookup queries** go to entity-centric rewriting — "What is X?" gets entity disambiguation and enrichment. **Comparison queries** go to multi-query and structured expansion — "A vs B" gets split into parallel searches. **Troubleshooting queries** go to step-back prompting and domain-specific rewriting — error messages get abstracted to root causes. **Generation queries** go to template-based rewriting — "Write me a" gets structured templates.
[firmly] The power of this approach is that each query type gets the **optimal strategy**, rather than a one-size-fits-all approach. This is especially important in production systems where query types are diverse.
[conversational] Let's see the implementation.`
        },
        {
          id: 72,
          title: '17. Intent Classification: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Prompt Template</h3></GSAPAnimated>
              <pre style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>
                {`"""
Classify the intent of the following query into one category:
- lookup (factual information)
- compare (contrast entities)
- troubleshoot (fix problems)
- generate (create content)
Then rewrite the query to optimize for this intent type.
Return both the intent and rewritten query.
Query: {query}
"""`}
              </pre>

              <h3 style={{ fontSize: '2rem' }}>Implementation</h3>
              <pre style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>
                {`def intent_based_rewrite(query):
  # Classify intent
  intent = intent_classifier.predict(query)
  # Select strategy
  strategy = strategy_router[intent]
  # Apply strategy
  rewritten = strategy.rewrite(query)
  return rewritten`}
              </pre>
            </div>
          ),
          notes: `### Intent Classification — Implementation
[lecture] The implementation combines an intent classifier with a strategy router.
#### 💻 The Prompt
[lecture] The prompt classifies the query into one of four categories: lookup, compare, troubleshoot, or generate. It then rewrites the query optimized for that specific intent type and returns both the intent label and the rewritten query.
#### ⚙️ The Code
[lecture] The code uses an intent classifier to predict the query type, looks up the appropriate strategy from a router dictionary, and applies that strategy's rewrite method. Clean and modular — you can add new intents and strategies without changing the core logic.
A practical tip: start with a simple rule-based classifier using keyword patterns before investing in a trained model. Phrases containing "vs" or "compare" are comparison intents. Questions starting with "how to fix" are troubleshooting. You can upgrade to ML-based classification later.
[conversational] Let's see an example.`
        },
        {
          id: 73,
          title: '17. Intent Classification: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Before:</strong> "fix 500 error nginx"<br />
                <strong>After:</strong> Intent: troubleshoot → "Nginx 500 error troubleshooting steps for Ubuntu 22.04 - common causes, log file analysis, and configuration fixes"
              </div>

              <h3 style={{ color: '#e74c3c', paddingTop: '10px', fontSize: '2rem' }}>Weaknesses / Considerations</h3>
              <ul>
                <li>Requires high-accuracy intent model</li>
                <li>Complex intent taxonomy needs maintenance</li>
                <li>Multi-intent queries challenging</li>
                <li>More engineering overhead</li>
              </ul>
            </div>
          ),
          notes: `### Intent Classification — Example & Considerations
Here's intent-based routing in action.
#### 📝 Before and After
[cautiously] The user searches "fix 500 error nginx." The system classifies this as a **troubleshoot** intent. The troubleshooting strategy rewrites it to "Nginx 500 error troubleshooting steps for Ubuntu 22.04 — common causes, log file analysis, and configuration fixes." The strategy adds platform context, problem categories, and specific troubleshooting aspects that improve retrieval.
#### ⚠️ Watch Out For
[lecture] The challenges: you need a **high-accuracy intent model** because misclassification leads to the wrong strategy. The **intent taxonomy needs maintenance** as new query patterns emerge. **Multi-intent queries are challenging** — what if a query is both a comparison and a troubleshooting request? And there's **more engineering overhead** to build and maintain the routing infrastructure.
> 🎤 Ask the audience: "What types of queries do your users most commonly ask? Lookups? Comparisons? Troubleshooting?"
[firmly] The key insight: intent classification is the **glue** that connects all other strategies. Once you have it, you can pick and choose which strategies to apply to which query types.
[conversational] Next, Strategy 18: Diverse Multi-Query Rewriting.`
        }
      ]
    },
    {
      id: 'strategy-18',
      title: '18. Diverse Multi-Query Rewriting (DMQR)',
      slides: [
        {
          id: 74,
          title: '18. Diverse Multi-Query Rewriting: Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Maximize diversity among rewrites to cover multiple facets of a query, ensuring comprehensive coverage for ambiguous topics</h3></GSAPAnimated>

              <h3 style={{ color: '#2ecc71', fontSize: '2rem' }}>Benefits</h3>
              <ul>
                <li>Comprehensive coverage across facets</li>
                <li>Improves recall for complex topics</li>
                <li>Better handles ambiguous queries</li>
                <li>Surfaces different perspectives</li>
              </ul>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="Diverse Multi-Query Rewriting: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TB
    A["🌐 Broad Query\n'climate change\nimpact'"] --> B["Generate with\nDiversity Constraints"]
    B --> C["Economic\nImpact"]
    B --> D["Health\nEffects"]
    B --> E["Migration\nPatterns"]
    B --> F["Agricultural\nChanges"]
    C --> G["✅ Full Coverage\nAll Facets"]
    D --> G
    E --> G
    F --> G
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#3a1a5c,color:#e9d5ff,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style F fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style G fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <ul>
                  <li>Broad, ambiguous topics</li>
                  <li>Exploratory search needs</li>
                  <li>Multiple potential interpretations</li>
                  <li>Need for high recall across facets</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### Diverse Multi-Query Rewriting — Overview
[conversational] Strategy 18 is **Diverse Multi-Query Rewriting**, or DMQR 👉 'dee-em-queue-ar'. It's like multi-query generation on steroids.
#### 🎯 What Is It?
Regular multi-query generation creates multiple query variants, but they can end up being too similar to each other. DMQR **explicitly enforces diversity** among the generated queries, ensuring each variant covers a genuinely different facet or perspective of the user's intent. [storytelling] Think of it as sending out scouts in every direction instead of sending them all down the same path.
#### ✅ Pros
[pleased] The good stuff: **comprehensive coverage** across different facets of a topic. It **improves recall for complex topics** by exploring multiple angles. It **handles ambiguous queries** better because different interpretations all get explored. And it **surfaces different perspectives** that a single query would miss.
#### 🕐 When to Use This?
[reassuringly] Best for **broad, ambiguous topics**, **exploratory search needs**, **queries with multiple potential interpretations**, and scenarios requiring **high recall across different facets** of a subject.
[conversational] Let's see how diversity is enforced.`
        },
        {
          id: 75,
          title: '18. Diverse Multi-Query Rewriting: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Generate queries with explicit diversity constraints</h3></GSAPAnimated>

              <ul>
                <li>Produce multiple rewrites covering different angles</li>
                <li>Apply diversity penalties to minimize overlap</li>
                <li>Use controlled sampling techniques</li>
                <li>Penalize n-gram overlap between queries</li>
              </ul>
            </div>
          ),
          notes: `### Diverse Multi-Query Rewriting — How It Works
[firmly] The key differentiator is the **explicit diversity constraints**.
#### 🔄 The Process
[lecture] The system **produces multiple rewrites covering different angles** — not just paraphrases but genuinely different perspectives. It **applies diversity penalties** to minimize overlap between generated queries. It uses **controlled sampling techniques** like high-temperature generation with deduplication. And it **penalizes n-gram overlap** between queries to ensure each one brings something new to the table.
[confidently] The n-gram penalty is clever: if two generated queries share more than three consecutive words, the system penalizes or regenerates one of them. This mechanical check ensures diversity even when the LLM tends to produce similar outputs.
[conversational] Let's see the implementation.`
        },
        {
          id: 76,
          title: '18. Diverse Multi-Query Rewriting: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Prompt Template</h3></GSAPAnimated>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {`"""
Produce 6 diverse rewrites of the following query.
Each rewrite should cover a different aspect:
- Different intents/perspectives
- Different timeframes
- Different terminology/synonyms
Ensure no n-gram overlap > 3 words between rewrites.
Return as numbered list with no explanations.
Query: {query}
"""`}
              </pre>

              <h3 style={{ fontSize: '2rem' }}>Implementation</h3>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {`def generate_diverse_queries(query):
  rewrites = llm.generate(prompt, query=query)
  embeddings = get_embeddings(rewrites)
  # Calculate similarity & filter for diversity
  selected = select_diverse_subset(rewrites, embeddings)
  return selected`}
              </pre>
            </div>
          ),
          notes: `### Diverse Multi-Query Rewriting — Implementation
[lecture] The implementation generates queries with explicit diversity checks.
#### 💻 The Prompt
[lecture] The prompt asks for six diverse rewrites, each covering a different aspect: different intents, different timeframes, different terminology. It explicitly constrains n-gram overlap to no more than three words between rewrites. This structural constraint forces the LLM to think creatively about different angles.
#### ⚙️ The Code
After generating the rewrites, the code embeds them all and calculates pairwise similarity. It then selects a diverse subset by filtering out queries that are too similar to each other. The result is a set of queries that collectively cover the broadest possible range of the topic.
A practical tip: you can also use **maximal marginal relevance** (MMR 👉 'em-em-ar') selection after generating many candidates to pick the most diverse subset.
[conversational] Let's see an example.`
        },
        {
          id: 77,
          title: '18. Diverse Multi-Query Rewriting: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Before:</strong> "data governance framework"<br />
                <strong>After:</strong>
                <ul>
                  <li>1. "enterprise data governance policies and standards documentation"</li>
                  <li>2. "software tools implementing data governance controls"</li>
                  <li>3. "regulatory compliance aspects of information management"</li>
                  <li>4. "case studies on successful data stewardship programs"</li>
                  <li>5. "metrics for measuring data governance effectiveness"</li>
                  <li>6. "risk management in data governance implementation"</li>
                </ul>
              </div>

              <h3 style={{ color: '#e74c3c', paddingTop: '10px', fontSize: '2rem' }}>Weaknesses / Considerations</h3>
              <ul>
                <li>Fusion/dedup cost</li>
                <li>Requires careful reranking</li>
                <li>Higher token usage</li>
                <li>More complex implementation</li>
              </ul>
            </div>
          ),
          notes: `### Diverse Multi-Query Rewriting — Example & Considerations
Here's DMQR tackling a broad topic.
#### 📝 Before and After
[lecture] The user searches "data governance framework." DMQR generates six diverse queries covering enterprise policies, software tools, regulatory compliance, case studies, effectiveness metrics, and risk management. Each query targets a completely different facet of data governance. Together, they provide comprehensive coverage that no single query could achieve.
#### ⚠️ Watch Out For
[lecture] The costs: **fusion and deduplication cost** — combining results from six queries requires careful merging. **Careful reranking is needed** to sort through the combined results. **Higher token usage** from generating and processing multiple queries. And the **implementation is more complex** than single-query approaches.
[firmly] The key insight: DMQR is your best tool for **exploratory search** where the user's intent is broad or unclear. It casts the widest net possible while ensuring each cast covers new territory.
[conversational] Next, Strategy 19: Feedback-Based Rewriting.`
        }
      ]
    },
    {
      id: 'strategy-19',
      title: '19. Feedback-Based Rewriting',
      slides: [
        {
          id: 78,
          title: '19. Feedback-Based Rewriting: Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Learn from user interactions (clicks, ratings, session data) to intelligently refine queries based on what worked for similar users</h3></GSAPAnimated>

              <h3 style={{ color: '#2ecc71', fontSize: '2rem' }}>Benefits</h3>
              <ul>
                <li>Improves over time with usage</li>
                <li>User-aligned and personalized</li>
                <li>Adapts to changing content/trends</li>
                <li>Leverages collective intelligence</li>
              </ul>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="Feedback-Based Rewriting: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["📊 User Telemetry\nClicks + Ratings"] --> B["Extract\nSignals"]
    B --> C["What worked:\n'JavaScript async\ntutorial 2024'"]
    B --> D["What failed:\n'JS async'"]
    C --> E["Rewriting Model\nLearns Patterns"]
    D --> E
    E --> F["✅ Better\nFuture Queries"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <ul>
                  <li>Production systems with telemetry</li>
                  <li>High-volume search applications</li>
                  <li>Domain-specific search engines</li>
                  <li>Customer-facing RAG systems</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### Feedback-Based Rewriting — Overview
[conversational] Strategy 19 is **Feedback-Based Rewriting**, which learns from actual user behavior to improve queries over time.
#### 🎯 What Is It?
[lecture] This strategy uses **real user interaction data** — clicks, ratings, dwell time, session behavior — to refine how queries are rewritten. If users who search for "vector database comparison" consistently click on documents about HNSW and FAISS, the system learns to include those terms in future rewrites of similar queries. It's the **only strategy that gets smarter over time**.
#### ✅ Pros
[pleased] The good stuff: it **improves continuously** with usage — the more users interact, the better the rewrites become. It's **user-aligned and personalized** because it learns what users actually want. It **adapts to changing content and trends** automatically. And it **leverages collective intelligence** — one user's successful search helps all future users.
#### 🕐 When to Use This?
[reassuringly] Best for **production systems with telemetry**, **high-volume search applications**, **domain-specific search engines**, and **customer-facing RAG systems** with enough traffic to generate meaningful signals.
[conversational] Let's see the mechanism.`
        },
        {
          id: 79,
          title: '19. Feedback-Based Rewriting: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Uses feedback signals to improve queries</h3></GSAPAnimated>

              <ul>
                <li>Promote terms/entities from clicked documents</li>
                <li>Suppress noise terms with low engagement</li>
                <li>Apply collaborative filtering techniques</li>
                <li>Incrementally update term weights/boosts</li>
              </ul>
            </div>
          ),
          notes: `### Feedback-Based Rewriting — How It Works
[lecture] The system uses feedback signals to progressively refine queries.
#### 🔄 The Process
It **promotes terms and entities from clicked documents** — if users consistently click on documents containing "HNSW," that term gets boosted in future queries about vector databases. It **suppresses noise terms** with low engagement — terms that appear in skipped results get demoted. It applies **collaborative filtering techniques** — "users who searched for X also found Y useful." And it **incrementally updates term weights** based on ongoing feedback.
[storytelling] Think of it like Amazon's recommendation system, but for search queries. Instead of "customers who bought this also bought," it's "users who searched this found these terms useful."
[conversational] Let's look at the implementation.`
        },
        {
          id: 80,
          title: '19. Feedback-Based Rewriting: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Prompt Template</h3></GSAPAnimated>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {`"""
Given these clicked documents and user ratings:
{clicked_docs}
Original query: {original_query}
Suggest a refined query that emphasizes terms
found in positively rated documents.
Return only the refined query without explanation.
"""`}
              </pre>

              <h3 style={{ fontSize: '2rem' }}>Implementation</h3>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {`def feedback_rewrite(query, click_history):
  positive_docs = get_clicked_docs(click_history)
  shared_terms = extract_common_terms(positive_docs)
  refined_query = llm.generate(
    prompt,
    clicked_docs=positive_docs,
    original_query=query
  )
  return refined_query`}
              </pre>
            </div>
          ),
          notes: `### Feedback-Based Rewriting — Implementation
[lecture] The implementation connects user telemetry to the rewriting pipeline.
#### 💻 The Prompt
[lecture] The prompt provides the original query along with clicked documents and user ratings, then asks the LLM to suggest a refined query that emphasizes terms found in positively rated documents.
#### ⚙️ The Code
[lecture] The code retrieves the user's click history, extracts documents they engaged with positively, identifies common terms across those documents, and uses the LLM to generate a refined query. The refined query naturally incorporates the vocabulary and concepts that real users found useful.
A practical consideration: you need a **minimum volume threshold** before feedback signals are reliable. For queries with very few interactions, fall back to other strategies until you have enough data.
[conversational] Let's see an example.`
        },
        {
          id: 81,
          title: '19. Feedback-Based Rewriting: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Before:</strong> "vector database comparison"<br />
                <strong>After:</strong> "vector database comparison HNSW vs IVF FAISS Qdrant Milvus efSearch time-accuracy tradeoff"<br />
                <p style={{ marginTop: '10px' }}>User clicked on docs about HNSW/FAISS index types and specific DB implementations</p>
              </div>

              <h3 style={{ color: '#e74c3c', paddingTop: '10px', fontSize: '2rem' }}>Weaknesses / Considerations</h3>
              <ul>
                <li>Requires data pipeline/telemetry</li>
                <li>Cold-start issues for new queries</li>
                <li>Privacy considerations for feedback</li>
                <li>Can amplify popularity biases</li>
              </ul>
            </div>
          ),
          notes: `### Feedback-Based Rewriting — Example & Considerations
Here's feedback-based rewriting learning from user behavior.
#### 📝 Before and After
[lecture] The user searches "vector database comparison." The system notices that previous users who searched similar queries consistently clicked on documents about HNSW vs IVF index types, FAISS, Qdrant 👉 'queue-drant', and Milvus 👉 'mil-vus'. It rewrites to "vector database comparison HNSW vs IVF FAISS Qdrant Milvus efSearch time-accuracy tradeoff." This enriched query reflects what real users actually care about.
#### ⚠️ Watch Out For
[cautiously] The challenges: it **requires a data pipeline and telemetry** infrastructure, which is a significant investment. **Cold-start issues** mean new or rare queries have no feedback data. **Privacy considerations** arise when tracking user behavior. And it can **amplify popularity biases** — popular documents get more clicks, which generates more feedback, which makes them appear even more often.
[firmly] The key insight: feedback-based rewriting is the **long game**. It takes time to build up enough data, but once it's running, it continuously improves without manual intervention.
[conversational] Next, Strategy 20: Prompt-Based Rewriting.`
        }
      ]
    },
    {
      id: 'strategy-20',
      title: '20. Prompt-Based Rewriting',
      slides: [
        {
          id: 82,
          title: '20. Prompt-Based Rewriting: Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Use compact, reusable prompts to standardize query rewrites across different types of questions with minimal engineering effort</h3></GSAPAnimated>

              <h3 style={{ color: '#2ecc71', fontSize: '2rem' }}>Benefits</h3>
              <ul>
                <li>Fast to deploy with minimal setup</li>
                <li>Highly flexible across query types</li>
                <li>Easy to update and refine</li>
                <li>Works with any capable LLM</li>
              </ul>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="Prompt-Based Rewriting: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["📝 User Query\n'fix login bug'"] --> B["System Prompt:\n'Rewrite as specific\ntechnical question'"]
    B --> C["🤖 LLM"]
    C --> D["✅ Rewritten:\n'Debugging OAuth2\ntoken validation in\nPython FastAPI'"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#3a1a5c,color:#e9d5ff,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <ul>
                  <li>Quick wins without complex pipelines</li>
                  <li>Rapid prototyping and testing</li>
                  <li>Low engineering implementation lift</li>
                  <li>Minimal infrastructure changes</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### Prompt-Based Rewriting — Overview
[conversational] Strategy 20 is **Prompt-Based Rewriting**, and it's the **easiest strategy to deploy** — you literally just write a good prompt.
#### 🎯 What Is It?
Instead of building complex pipelines, ontologies, or feedback systems, you craft a **well-designed prompt** that instructs an LLM to rewrite any query into a retrieval-optimized format. The prompt includes rules, examples, and guidelines. It's like writing an instruction manual for a human assistant: "When you receive a query, add the main entity, temporal context, document type preference, and essential constraints."
#### ✅ Pros
[pleased] The good stuff: **fast to deploy** with virtually no infrastructure. **Highly flexible** across different query types. **Easy to update** — just edit the prompt. And it **works with any capable LLM** without fine-tuning.
#### 🕐 When to Use This?
Perfect for **quick wins without complex pipelines**, **rapid prototyping and testing**, **low engineering lift** projects, and scenarios where you want **minimal infrastructure changes**.
[conversational] Let's see how it works.`
        },
        {
          id: 83,
          title: '20. Prompt-Based Rewriting: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Utilizes well-crafted system prompts and few-shot examples</h3></GSAPAnimated>

              <ul>
                <li>Enforce consistent style and structure</li>
                <li>Include critical information fields</li>
                <li>Guide LLM to maintain specific patterns</li>
                <li>Apply guardrails against hallucination</li>
              </ul>
            </div>
          ),
          notes: `### Prompt-Based Rewriting — How It Works
[lecture] The approach uses well-crafted system prompts with few-shot examples.
#### 🔄 The Process
[firmly] The prompt **enforces consistent style and structure** across all rewrites. It **includes critical information fields** that should always be present in the rewritten query. It **guides the LLM** to maintain specific patterns and formatting. And it **applies guardrails** against hallucination by instructing the model not to add information it's unsure about.
[firmly] The few-shot examples are crucial — they show the LLM exactly what a good rewrite looks like. Include three to five examples covering different query types, and the LLM will generalize the pattern to new queries.
[conversational] Let's look at the implementation.`
        },
        {
          id: 84,
          title: '20. Prompt-Based Rewriting: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Prompt Template</h3></GSAPAnimated>
              <pre style={{ fontSize: '0.7rem', lineHeight: '1.6' }}>
                {`"""
Rewrite the following query to be explicit, self-contained,
and retrieval-optimized.
Include the following when inferable:
- Main entity or subject
- Temporal context (year, version)
- Document type preference (guide, tutorial, API)
- Essential constraints
EXAMPLES:
"nodejs security" → "Node.js security best practices 2024 with
code examples for protecting Express applications"
"pricing changes" → "Microsoft Azure pricing changes 2025 documentation
and comparison to 2024 rates"
QUERY: {query}
"""`}
              </pre>

              <h3 style={{ fontSize: '2rem' }}>Implementation</h3>
              <pre style={{ fontSize: '0.8rem', lineHeight: '1.6' }}>
                {`def prompt_based_rewrite(query, context=None):
  system_prompt = "You are a query optimization expert."
  result = llm.generate(
    system=system_prompt,
    prompt=template,
    query=query
  )
  return result`}
              </pre>
            </div>
          ),
          notes: `### Prompt-Based Rewriting — Implementation
[lecture] The implementation is refreshingly simple.
#### 💻 The Prompt
[firmly] The prompt instructs the LLM to make the query explicit, self-contained, and retrieval-optimized. It specifies what to include: main entity, temporal context, document type preference, and essential constraints. Then it provides examples showing before-and-after transformations — "nodejs security" becomes "Node.js security best practices 2024 with code examples for protecting Express applications."
#### ⚙️ The Code
[lecture] The code is minimal: set a system prompt establishing the LLM as a query optimization expert, then pass the user's query through the template. That's it. No NER models, no knowledge bases, no feedback loops — just a well-crafted prompt.
[confidently] This is why prompt-based rewriting is the **starting point** for most teams. You can have it running in production within an hour. Then gradually add more sophisticated strategies as needed.
[conversational] Let's see an example.`
        },
        {
          id: 85,
          title: '20. Prompt-Based Rewriting: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Before:</strong> "api auth"<br />
                <strong>After:</strong> "OAuth 2.0 authentication for Acme API docs 2024, guide/tutorial with implementation examples"
              </div>

              <h3 style={{ color: '#e74c3c', paddingTop: '10px', fontSize: '2rem' }}>Weaknesses / Considerations</h3>
              <ul>
                <li>Prompt drift over time</li>
                <li>Quality varies by LLM capability</li>
                <li>Less structured than rule-based systems</li>
                <li>Harder to enforce constraints</li>
              </ul>
            </div>
          ),
          notes: `### Prompt-Based Rewriting — Example & Considerations
[warmly] Here's the simplest strategy delivering real results.
#### 📝 Before and After
[warmly] The user types "api auth" — two words. After prompt-based rewriting, it becomes "OAuth 2.0 authentication for Acme API docs 2024, guide or tutorial with implementation examples." The prompt-based approach added the authentication protocol, temporal context, the company name from context, document type preferences, and specificity. All from a single prompt call.
#### ⚠️ Watch Out For
[warmly] The risks: **prompt drift over time** — as your corpus evolves, the prompt may need updating. **Quality varies by LLM capability** — a smaller model may produce worse rewrites. It's **less structured than rule-based systems**, so outputs can be unpredictable. And it's **harder to enforce strict constraints** compared to template-based approaches.
[pleased] The bottom line: prompt-based rewriting is your **MVP strategy**. Start here, measure the improvement, and then decide which of the more complex strategies to add based on where your system still struggles.
Finally, Strategy 21: Adaptive Query Rewriting — the strategy to rule them all.`
        }
      ]
    },
    {
      id: 'strategy-21',
      title: '21. Adaptive Query Rewriting',
      slides: [
        {
          id: 86,
          title: '21. Adaptive Query Rewriting: Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Choose the best rewrite strategy per query context, optimizing performance across diverse query types</h3></GSAPAnimated>

              <h3 style={{ color: '#2ecc71', fontSize: '2rem' }}>Benefits</h3>
              <ul>
                <li>Balanced quality/cost optimization</li>
                <li>Robust across diverse query types</li>
                <li>Self-improving with feedback</li>
                <li>Flexible scaling of compute resources</li>
              </ul>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                  <MermaidPopover
                    title="Adaptive Query Rewriting: When to Apply"
                    diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TB
    A["📥 Query +\nContext Signals"] --> B["Policy Model\nAssess Budget + Type"]
    B --> C{"Best\nStrategy?"}
    C -->|"Fast + Cheap"| D["→ Prompt Rewrite\n($0.001)"]
    C -->|"High Quality"| E["→ Multi-Query\n($0.01)"]
    C -->|"Complex"| F["→ Decompose\n($0.05)"]
    D --> G["✅ Optimal\nResult"]
    E --> G
    F --> G
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#3a1a5c,color:#e9d5ff,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style F fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style G fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                  />
                </div>
                <h3 style={{ fontSize: '2rem' }}>When to Use</h3>
                <ul>
                  <li>Heterogeneous query workloads</li>
                  <li>Variable cost/latency constraints</li>
                  <li>Production systems with metrics</li>
                  <li>Complex RAG pipelines with multiple strategies</li>
                </ul>
              </div>
            </div>
          ),
          notes: `### Adaptive Query Rewriting — Overview
[warmly] Our final strategy, number 21, is **Adaptive Query Rewriting** — the grand orchestrator.
#### 🎯 What Is It?
[warmly] Adaptive rewriting doesn't commit to a single strategy. Instead, it **dynamically selects the best strategy** for each query based on the query's characteristics, the conversation context, past performance, and cost constraints. It's like having an experienced engineer who knows all 20 previous strategies and picks the right one for each situation.
#### ✅ Pros
[warmly] The good stuff: **balanced quality and cost optimization** — expensive strategies are only used when they're worth it. **Robust across diverse query types** since it can handle anything. **Self-improving with feedback** as it learns which strategies work best for which queries. And **flexible scaling** — you can allocate more compute for important queries and less for simple ones.
#### 🕐 When to Use This?
[warmly] Best for **heterogeneous query workloads**, **variable cost and latency constraints**, **production systems with metrics**, and **complex RAG pipelines** that already implement multiple strategies.
Let's see how it selects strategies.`
        },
        {
          id: 87,
          title: '21. Adaptive Query Rewriting: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Uses a policy model or agent to select among strategies</h3></GSAPAnimated>

              <ul>
                <li>Query characteristics (length, ambiguity)</li>
                <li>Conversation context/history</li>
                <li>Past performance signals</li>
                <li>Cost/latency budgets</li>
              </ul>
            </div>
          ),
          notes: `### Adaptive Query Rewriting — How It Works
[warmly] The system uses a **policy model or agent** to select among available strategies.
#### 🔄 The Decision Factors
[warmly] The policy considers **query characteristics** — length, ambiguity level, entity count, complexity. It looks at **conversation context and history** — is this a follow-up? Is the topic established? It uses **past performance signals** — which strategies have worked well for similar queries? And it respects **cost and latency budgets** — if the user needs a fast response, skip the expensive strategies.
[storytelling] Think of it as a decision tree or a learned policy. Short, ambiguous queries might get sent to clarification. Long, complex queries go to decomposition. Follow-ups go to context-aware rewriting. And simple, clear queries might skip rewriting entirely to save latency.
Let's see the implementation.`
        },
        {
          id: 88,
          title: '21. Adaptive Query Rewriting: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}><h3 style={{ fontSize: '2rem' }}>Prompt Template</h3></GSAPAnimated>
              <pre style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                {`"""
Given the following query and signals:
Query: {query}
Signals:
- Length: {length_category}
- Ambiguity: {ambiguity_score}
- Context: {conversation_history}
- Past recall: {previous_recall_metrics}
1. Choose the optimal query rewriting strategy
2. Apply that strategy to rewrite the query
3. Return: [Strategy], [Rewritten Query], [Rationale]
"""`}
              </pre>

              <h3 style={{ fontSize: '2rem' }}>Implementation</h3>
              <pre style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                {`class AdaptiveQueryRewriter:
  def rewrite(self, query, state):
    signals = self.extract_signals(query, state)
    strategy = self.policy_model.select_strategy(signals)
    rewritten = self.strategies[strategy].apply(query)
    self.log_for_evaluation(query, strategy, rewritten)
    return rewritten`}
              </pre>
            </div>
          ),
          notes: `### Adaptive Query Rewriting — Implementation
[warmly] The implementation uses a policy model to route queries to strategies.
#### 💻 The Prompt
[warmly] The prompt provides the query along with signals like length category, ambiguity score, conversation history, and previous recall metrics. It asks the LLM to choose the optimal strategy, apply it, and return the strategy name, rewritten query, and rationale.
#### ⚙️ The Code
[warmly] The adaptive rewriter class extracts signals from the query and state, uses a policy model to select the best strategy, applies that strategy, and logs everything for future evaluation. The logging is critical — it's what enables the system to learn and improve over time.
A practical approach: start with a **rule-based policy** using simple heuristics, then gradually replace it with a **learned policy** trained on your logs. The rule-based version gets you 80% of the benefit with 20% of the complexity.
Let's see a final example.`
        },
        {
          id: 89,
          title: '21. Adaptive Query Rewriting: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" delay={0.2}><h3 style={{ fontSize: '2rem' }}>Example</h3></GSAPAnimated>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Query:</strong> "apple"<br />
                <strong>Policy:</strong> Ambiguous short query → Clarification Strategy<br />
                <strong>Result:</strong> "Did you mean: 1) Apple Inc. products/services, 2) apple fruit nutrition/recipes, or 3) Apple software/iOS?"<br /><br />
                <strong>Query:</strong> "compare MongoDB vs PostgreSQL for IoT data"<br />
                <strong>Policy:</strong> Complex multi-entity → Decomposition Strategy
              </div>

              <h3 style={{ color: '#e74c3c', paddingTop: '10px', fontSize: '2rem' }}>Weaknesses / Considerations</h3>
              <ul>
                <li>Requires policy training</li>
                <li>Needs evaluation feedback loop</li>
                <li>More complex orchestration</li>
                <li>Cold-start challenges</li>
              </ul>
            </div>
          ),
          notes: `### Adaptive Query Rewriting — Example & Considerations
[warmly] Let's see the adaptive approach making decisions.
#### 📝 Before and After
[warmly] First example: the query is just "apple." The policy detects an ambiguous short query and routes it to the **clarification strategy**: "Did you mean Apple Inc. products, apple fruit nutrition, or Apple software?" Second example: "compare MongoDB vs PostgreSQL for IoT data" — the policy detects a complex multi-entity comparison and routes it to the **decomposition strategy**, breaking it into focused sub-queries.
#### ⚠️ Watch Out For
[warmly] The challenges: it **requires policy training** which needs historical data about strategy performance. It **needs an evaluation feedback loop** to continuously improve the policy. The **orchestration is more complex** than any single strategy. And there are **cold-start challenges** when you don't have enough data to train the policy.
#### 🎉 Wrapping Up
[warmly] And that's all twenty-one strategies! Remember, you don't need to implement all of them. Start with **prompt-based rewriting** for a quick win. Add **context-aware rewriting** for chat. Then gradually add more strategies based on where your system struggles. The adaptive approach is the end goal — but it's built on top of the individual strategies we've covered.
> 🎤 Ask the audience: "Which strategy are you most excited to try first?"
[warmly] Thank you for your attention!`
        }
      ]
    }
  ]
};

