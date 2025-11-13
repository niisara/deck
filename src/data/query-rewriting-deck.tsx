import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const queryRewritingDeck: Deck = {
  id: 'query-rewriting-deck',
  name: '21 Query Rewriting Strategies for RAG',
  description: 'Practical patterns, prompts, and examples for better retrieval',
  category: 'RAG',
  theme: 'moon',
  slides: [],
  slideGroups: [
    {
      id: 'introduction',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          title: '21 Query Rewriting Strategies for RAG',
          content: (
            <div style={{ textAlign: 'left' }}>
          <h2 style={{ marginBottom: '40px' }}>Practical patterns, prompts, and examples for better retrieval</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', marginTop: '50px' }}>
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-pen-to-square" sizeName="4x" style={{ color: '#3498db' }} />
              <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Rewrite</p>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-magnifying-glass" sizeName="4x" style={{ color: '#2ecc71' }} />
              <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Retrieve</p>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-bullseye" sizeName="4x" style={{ color: '#f39c12' }} />
              <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Precision</p>
            </div>
          </div>
          <p style={{ marginTop: '60px', fontSize: '0.9em', opacity: 0.8 }}>November 7, 2025</p>
        </div>
      ),
      backgroundColor: '#2C3E50',
      notes: 'Introduction: 21 strategies to improve RAG retrieval through query rewriting'
    },
        {
          id: 2,
          title: 'Why Query Rewriting?',
          icon: { name: 'duo-lightbulb' },
          content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.85em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            <div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e74c3c', marginBottom: '20px' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" />
                Problems It Solves
              </h3>
              <ul style={{ lineHeight: '2' }}>
                <li><strong>Vague or underspecified queries</strong><br/>
                <span style={{ fontSize: '0.9em', opacity: 0.9 }}>Users lack sufficient detail for accurate retrieval</span></li>
                <li><strong>Vocabulary/ontology mismatch</strong><br/>
                <span style={{ fontSize: '0.9em', opacity: 0.9 }}>User phrasing differs from corpus terminology</span></li>
                <li><strong>Long/complex questions</strong><br/>
                <span style={{ fontSize: '0.9em', opacity: 0.9 }}>Multi-part questions dilute key search terms</span></li>
                <li><strong>Conversational context loss</strong><br/>
                <span style={{ fontSize: '0.9em', opacity: 0.9 }}>Follow-ups lack critical prior context</span></li>
                <li><strong>Hallucinations from poor context</strong><br/>
                <span style={{ fontSize: '0.9em', opacity: 0.9 }}>Insufficient retrieval leads to incorrect answers</span></li>
              </ul>
            </div>
            <div>
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#2ecc71', marginBottom: '20px' }}>
                <SvgIcon iconName="duo-check-double" sizeName="2x" />
                Outcomes
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }}>
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
                  <strong>Fewer manual rewrites</strong>
                </div>
                <div style={{ padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', borderLeft: '4px solid #2ecc71' }}>
                  <strong>Reduced hallucinations</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#34495E',
      notes: 'Query rewriting solves vocabulary mismatch, vague queries, and context loss, improving recall and reducing hallucinations'
        },
        {
          id: 3,
          title: 'Impact on RAG Performance',
          icon: { name: 'duo-chart-line' },
          content: (
        <div style={{ maxWidth: '900px', margin: '0 auto', fontSize: '0.85em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px', marginBottom: '40px' }}>
            <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(52, 152, 219, 0.15)', borderRadius: '10px' }}>
              <SvgIcon iconName="duo-chart-line" sizeName="3x" style={{ color: '#3498db' }} />
              <h4 style={{ marginTop: '15px', color: '#3498db' }}>Recall@k</h4>
              <p style={{ fontSize: '2em', fontWeight: 'bold', margin: '10px 0' }}>15-40%</p>
              <p>Improvement in relevant document retrieval</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(155, 89, 182, 0.15)', borderRadius: '10px' }}>
              <SvgIcon iconName="duo-ranking-star" sizeName="3x" style={{ color: '#9b59b6' }} />
              <h4 style={{ marginTop: '15px', color: '#9b59b6' }}>MRR/NDCG</h4>
              <p style={{ fontSize: '2em', fontWeight: 'bold', margin: '10px 0' }}>10-25%</p>
              <p>Boost in ranking quality metrics</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(46, 204, 113, 0.15)', borderRadius: '10px' }}>
              <SvgIcon iconName="duo-anchor" sizeName="3x" style={{ color: '#2ecc71' }} />
              <h4 style={{ marginTop: '15px', color: '#2ecc71' }}>Grounded-rate</h4>
              <p style={{ fontSize: '2em', fontWeight: 'bold', margin: '10px 0' }}>20-45%</p>
              <p>More answers properly grounded in retrieved context</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(243, 156, 18, 0.15)', borderRadius: '10px' }}>
              <SvgIcon iconName="duo-award" sizeName="3x" style={{ color: '#f39c12' }} />
              <h4 style={{ marginTop: '15px', color: '#f39c12' }}>Eval pass@1</h4>
              <p style={{ fontSize: '2em', fontWeight: 'bold', margin: '10px 0' }}>15-30%</p>
              <p>Improvement in single-attempt success rate</p>
            </div>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', textAlign: 'center' }}>
            <strong>💡 Key Benefits:</strong> Improves top-k recall, reduces off-topic retrieval, boosts QA accuracy, enables domain/temporal disambiguation
          </div>
        </div>
      ),
      backgroundColor: '#2980B9',
      notes: 'Query rewriting significantly improves recall (15-40%), ranking (10-25%), grounding (20-45%), and success rates (15-30%)'
        },
        {
          id: 4,
          title: 'Implementation Workflow',
          icon: { name: 'duo-diagram-project' },
          content: (
        <div style={{ maxWidth: '950px', margin: '0 auto', fontSize: '0.75em' }}>
          <h3 style={{ marginBottom: '30px' }}>Step-by-Step Process</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
            <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', border: '2px solid #3498db' }}>
              <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#3498db', marginBottom: '10px' }}>1</div>
              <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} />
              <h4 style={{ marginTop: '10px' }}>Parse Intent & Context</h4>
              <p style={{ marginTop: '8px' }}>Extract user intent and relevant contextual information from history and profile</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '10px', border: '2px solid #9b59b6' }}>
              <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#9b59b6', marginBottom: '10px' }}>2</div>
              <SvgIcon iconName="duo-list-check" sizeName="2x" style={{ color: '#9b59b6' }} />
              <h4 style={{ marginTop: '10px' }}>Pick Rewriting Policy</h4>
              <p style={{ marginTop: '8px' }}>Select appropriate rule-based, ML-based, or agent-based approach</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '10px', border: '2px solid #2ecc71' }}>
              <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#2ecc71', marginBottom: '10px' }}>3</div>
              <SvgIcon iconName="duo-wand-magic-sparkles" sizeName="2x" style={{ color: '#2ecc71' }} />
              <h4 style={{ marginTop: '10px' }}>Transform Query</h4>
              <p style={{ marginTop: '8px' }}>Apply one or more rewriting strategies based on query type and intent</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '10px', border: '2px solid #f39c12' }}>
              <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#f39c12', marginBottom: '10px' }}>4</div>
              <SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={{ color: '#f39c12' }} />
              <h4 style={{ marginTop: '10px' }}>Retrieve</h4>
              <p style={{ marginTop: '8px' }}>Execute retrieval using hybrid search methods (sparse + dense) and reranking</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '10px', border: '2px solid #e67e22' }}>
              <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#e67e22', marginBottom: '10px' }}>5</div>
              <SvgIcon iconName="duo-clipboard-check" sizeName="2x" style={{ color: '#e67e22' }} />
              <h4 style={{ marginTop: '10px' }}>Check Coverage</h4>
              <p style={{ marginTop: '8px' }}>Evaluate retrieved content coverage; iterate if needed</p>
            </div>
            <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '10px', border: '2px solid #e74c3c' }}>
              <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#e74c3c', marginBottom: '10px' }}>6</div>
              <SvgIcon iconName="duo-chart-column" sizeName="2x" style={{ color: '#e74c3c' }} />
              <h4 style={{ marginTop: '10px' }}>Log & Adapt</h4>
              <p style={{ marginTop: '8px' }}>Capture feedback and metrics to continuously improve rewriting policy</p>
            </div>
          </div>
          <div style={{ padding: '15px', backgroundColor: 'rgba(149, 165, 166, 0.15)', borderRadius: '8px' }}>
            <strong>🛡️ Guardrails:</strong> Token/cost caps • Quality evaluation gates • Traceability for debugging • Timeout handling • Fallback mechanisms
          </div>
        </div>
      ),
      backgroundColor: '#34495E',
      notes: 'Six-step workflow: Parse intent, pick policy, transform, retrieve, check coverage, log and adapt'
        },
        {
          id: 5,
          title: '21 Strategies Overview',
          icon: { name: 'duo-list-check' },
          content: (
        <div style={{ textAlign: 'left', maxWidth: '1100px', margin: '0 auto', fontSize: '0.65em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
            <div>
              <h4 style={{ color: '#3498db', marginBottom: '10px' }}>📈 Expansion & Enhancement</h4>
              <ul style={{ lineHeight: '1.6' }}>
                <li>1. Query Expansion</li>
                <li>2. Query Reformulation</li>
                <li>5. HyDE (Hypothetical Document)</li>
                <li>6. Multi-Query Generation</li>
                <li>15. Query2Doc</li>
              </ul>
              <h4 style={{ color: '#9b59b6', marginTop: '15px', marginBottom: '10px' }}>🔍 Context & Conversation</h4>
              <ul style={{ lineHeight: '1.6' }}>
                <li>7. Context-Aware Rewriting</li>
                <li>8. Query Clarification</li>
                <li>20. Intent Classification</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#2ecc71', marginBottom: '10px' }}>🧩 Decomposition & Structure</h4>
              <ul style={{ lineHeight: '1.6' }}>
                <li>3. Query Decomposition</li>
                <li>4. Step-Back Prompting</li>
                <li>16. ITER-RETGEN</li>
                <li>17. Template-Based</li>
              </ul>
              <h4 style={{ color: '#f39c12', marginTop: '15px', marginBottom: '10px' }}>🎯 Specification & Filtering</h4>
              <ul style={{ lineHeight: '1.6' }}>
                <li>9. Query Specification</li>
                <li>18. Entity-Centric</li>
                <li>19. Temporal Rewriting</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#e67e22', marginBottom: '10px' }}>🔬 Domain & Semantic</h4>
              <ul style={{ lineHeight: '1.6' }}>
                <li>10. Semantic Bridging</li>
                <li>20. Domain-Specific</li>
              </ul>
              <h4 style={{ color: '#e74c3c', marginTop: '15px', marginBottom: '10px' }}>🔄 Adaptive & Learning</h4>
              <ul style={{ lineHeight: '1.6' }}>
                <li>21. Diverse Multi-Query</li>
                <li>22. Feedback-Based</li>
                <li>23. Prompt-Based</li>
                <li>24. Adaptive Rewriting</li>
              </ul>
            </div>
          </div>
          <p style={{ marginTop: '25px', textAlign: 'center', fontSize: '1.2em', padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px' }}>
            <strong>21 strategies</strong> organized by approach: Expansion, Context, Decomposition, Specification, Domain, and Adaptive methods
          </p>
        </div>
      ),
      backgroundColor: '#27AE60',
      notes: '21 strategies grouped into 6 categories: Expansion, Context, Decomposition, Specification, Domain, and Adaptive'
        }
      ]
    },
    {
      id: 'strategy-1',
      title: '1. Query Expansion',
      slides: [
        {
          id: 6,
          title: '1. Query Expansion',
          icon: { name: 'duo-arrows-maximize' },
          content: (
        <div style={{ textAlign: 'left', maxWidth: '950px', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ marginBottom: '20px' }}>
            <h3>Bridge vocabulary gaps, increase recall with synonyms/related terms</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gears" sizeName="1x" />
                How It Works
              </h4>
              <p>Add semantically related keywords via:</p>
              <ul style={{ fontSize: '0.95em' }}>
                <li>Thesaurus/dictionary lookups</li>
                <li>Embedding-based similarity</li>
                <li>Pseudo-relevance feedback</li>
                <li>LLM-generated related terms</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" style={{ color: '#9b59b6' }} />
                Example
              </h4>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '10px', borderRadius: '5px', fontSize: '0.9em' }}>
                <strong>Before:</strong> "flu treatment"<br/>
                <strong>After:</strong> "flu treatment" OR "influenza therapy" OR "antiviral medication" OR "oseltamivir" OR "flu remedies"
              </div>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71' }}>
                <SvgIcon iconName="duo-circle-check" sizeName="1x" />
                Pros
              </h4>
              <ul>
                <li>Simple implementation</li>
                <li>Cost-effective approach</li>
                <li>Significant recall improvement</li>
                <li>Works with existing search engines</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e74c3c', marginTop: '12px' }}>
                <SvgIcon iconName="duo-circle-xmark" sizeName="1x" />
                Cons
              </h4>
              <ul>
                <li>Can dilute precision without reranking</li>
                <li>Risk of query drift</li>
                <li>Less effective for ambiguous queries</li>
                <li>May need domain tuning</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#3498DB',
      notes: 'Query Expansion: Add synonyms and related terms via thesaurus, embeddings, or LLM to improve recall'
        }
      ]
    },
    {
      id: 'strategies-2-3',
      title: '2-3. Reformulation & Decomposition',
      slides: [
        {
          id: 7,
          title: '2-3. Reformulation & Decomposition',
          content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '15px' }}>
              <h3 style={{ color: '#9b59b6', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-pen-line" sizeName="1x" />
                2. Query Reformulation
              </h3>
              <p><strong>Goal:</strong> Make queries clearer, self-contained, and unambiguous</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Rephrase with complete info: full entity names, explicit constraints, contextual information</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Conversational follow-ups, terse/vague questions, multi-turn interactions</p>
              <div style={{ backgroundColor: 'rgba(155, 89, 182, 0.1)', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
                <strong>Before:</strong> "What about pricing?"<br/>
                <strong>After:</strong> "What is the pricing for the Pro plan of Acme API in 2024?"
              </div>
              <p style={{ marginTop: '10px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Improved precision, self-contained for caching</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Requires conversation context, risk of over-specification</p>
            </div>
            <div style={{ border: '2px solid #e67e22', borderRadius: '10px', padding: '15px' }}>
              <h3 style={{ color: '#e67e22', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-diagram-project" sizeName="1x" />
                3. Query Decomposition
              </h3>
              <p><strong>Goal:</strong> Handle multi-hop/complex questions requiring multiple pieces of information</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Split into atomic sub-questions, retrieve for each, answer independently, synthesize</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Multi-entity relationships, multi-step reasoning, compare/contrast scenarios</p>
              <div style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '10px', borderRadius: '5px', marginTop: '10px', fontSize: '0.9em' }}>
                <strong>Before:</strong> "Compare Snowflake vs BigQuery costs for 10 TB/month"<br/>
                <strong>After:</strong><br/>
                1. What is Snowflake's pricing for 10 TB/month?<br/>
                2. What is BigQuery's pricing for 10 TB/month?<br/>
                3. How do pricing structures compare?
              </div>
              <p style={{ marginTop: '10px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Better coverage, reduces hallucinations</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Multiple calls increase latency, synthesis complexity</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#8E44AD',
      notes: 'Reformulation makes queries self-contained; Decomposition breaks complex questions into sub-questions'
        }
      ]
    },
    {
      id: 'strategies-4-5',
      title: '4-5. Step-Back & HyDE',
      slides: [
        {
          id: 8,
          title: '4-5. Step-Back & HyDE',
          content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ border: '2px solid #1abc9c', borderRadius: '10px', padding: '15px' }}>
              <h3 style={{ color: '#1abc9c', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-arrow-rotate-left" sizeName="1x" />
                4. Step-Back Prompting
              </h3>
              <p><strong>Goal:</strong> Improve retrieval via abstraction and first principles thinking</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Extract underlying principles, identify broader concepts, create general retrieval query</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Specific but under-retrieving queries, reasoning-heavy topics, technical questions needing broader context</p>
              <div style={{ backgroundColor: 'rgba(26, 188, 156, 0.1)', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
                <strong>Before:</strong> "How to fix CUDA OOM with Llama 3.1 70B?"<br/>
                <strong>After:</strong> "LLM memory optimization, quantization, gradient checkpointing, batch sizing, GPU VRAM constraints"
              </div>
              <p style={{ marginTop: '10px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Robust to query wording, better generalization</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Risk of over-abstraction, may lose specificity</p>
            </div>
            <div style={{ border: '2px solid #f39c12', borderRadius: '10px', padding: '15px' }}>
              <h3 style={{ color: '#f39c12', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-file-lines" sizeName="1x" />
                5. HyDE (Hypothetical Document)
              </h3>
              <p><strong>Goal:</strong> Improve retrieval by embedding a synthetic hypothetical answer document</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> LLM generates hypothetical answer, embed it, retrieve similar real documents</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Low recall in dense retrieval, zero-shot domains, vocabulary mismatch, semantic search underperforms</p>
              <div style={{ backgroundColor: 'rgba(243, 156, 18, 0.1)', padding: '10px', borderRadius: '5px', marginTop: '10px', fontSize: '0.9em' }}>
                <strong>Before:</strong> "causal ml uplift modeling tutorial"<br/>
                <strong>After:</strong> "Uplift modeling is a machine learning technique that predicts the causal impact of a treatment on individual behavior. Unlike traditional ML models... [120-200 word pseudo-document]"
              </div>
              <p style={{ marginTop: '10px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Strong recall gains, bridges vocabulary gaps, zero-shot</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Extra token usage, pseudo-doc bias, may introduce hallucinations</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16A085',
      notes: 'Step-Back uses abstraction for broader context; HyDE generates hypothetical answer document for better semantic matching'
        }
      ]
    },
    {
      id: 'strategies-6-7',
      title: '6-7. Multi-Query & Context-Aware',
      slides: [
        {
          id: 9,
          title: '6-7. Multi-Query & Context-Aware',
          content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '15px' }}>
              <h3 style={{ color: '#3498db', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-clone" sizeName="1x" />
                6. Multi-Query Generation
              </h3>
              <p><strong>Goal:</strong> Cover diverse intents/phrases to improve recall and handle ambiguity</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Generate k diverse query variants, retrieve for each, union results, rerank</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Ambiguous queries, heterogeneous corpora, critical applications where recall matters</p>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '10px', borderRadius: '5px', marginTop: '10px', fontSize: '0.9em' }}>
                <strong>Before:</strong> "LLM eval methods"<br/>
                <strong>After:</strong><br/>
                1. "evaluation frameworks for large language models"<br/>
                2. "LLM benchmarks and testing methodologies"<br/>
                3. "automatic evaluation prompts"<br/>
                4. "human evaluation rubrics for LLM outputs"<br/>
                5. "RAG evaluation metrics and techniques"
              </div>
              <p style={{ marginTop: '10px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Robust to ambiguity, higher hit-rate, better coverage</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Increased cost/latency, requires deduplication and fusion</p>
            </div>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '15px' }}>
              <h3 style={{ color: '#9b59b6', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-comments" sizeName="1x" />
                7. Context-Aware Rewriting
              </h3>
              <p><strong>Goal:</strong> Make follow-up queries standalone by incorporating conversation context</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Inject entities from previous turns, constraints, references to prior answers, user preferences</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Conversational chatbots, multi-turn QA, session-based search, follow-ups with pronouns</p>
              <div style={{ backgroundColor: 'rgba(155, 89, 182, 0.1)', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
                <strong>Before:</strong> "And its limits?"<br/>
                <strong>After:</strong> "What are the 2024 rate limits for the Acme Pro API we discussed above?"
              </div>
              <p style={{ marginTop: '10px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Significant quality improvement in chat, reduces context waste</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Needs careful context selection, potential privacy concerns</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#2980B9',
      notes: 'Multi-Query explores diverse interpretations; Context-Aware makes follow-ups standalone with conversation history'
        }
      ]
    },
    {
      id: 'strategies-8-9',
      title: '8-9. Clarification & Specification',
      slides: [
        {
          id: 10,
          title: '8-9. Clarification & Specification',
          content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ border: '2px solid #e67e22', borderRadius: '10px', padding: '15px' }}>
              <h3 style={{ color: '#e67e22', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-question-circle" sizeName="1x" />
                8. Query Clarification
              </h3>
              <p><strong>Goal:</strong> Resolve ambiguity in user queries before retrieval</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Detect missing constraints/ambiguities, ask 1-2 targeted questions, propose defaults, reformulate</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Short/vague queries, ambiguous terms, missing constraints</p>
              <div style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '10px', borderRadius: '5px', marginTop: '10px', fontSize: '0.85em' }}>
                <strong>User:</strong> "Apple pay policy"<br/>
                <strong>System:</strong> "Do you mean Apple Inc.'s payment policies or fruit industry? For Apple Inc., which region?"<br/>
                <strong>User:</strong> "Apple Inc., United States"<br/>
                <strong>Result:</strong> "Apple Inc. digital payment policies and terms for Apple Pay service in the United States"
              </div>
              <p style={{ marginTop: '10px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Significantly improves precision, better user alignment</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Adds interaction step (latency), may frustrate users seeking quick answers</p>
            </div>
            <div style={{ border: '2px solid #e74c3c', borderRadius: '10px', padding: '15px' }}>
              <h3 style={{ color: '#e74c3c', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-filter" sizeName="1x" />
                9. Query Specification
              </h3>
              <p><strong>Goal:</strong> Add explicit constraints (time, source, locale, format) to focus retrieval</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Expand with structured filters: time range, source/domain, file type, metadata qualifiers, language</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Enterprise search, compliance, large heterogeneous collections, time-sensitive needs</p>
              <div style={{ backgroundColor: 'rgba(231, 76, 60, 0.1)', padding: '10px', borderRadius: '5px', marginTop: '10px', fontSize: '0.9em' }}>
                <strong>Before:</strong> "GDPR fines"<br/>
                <strong>After:</strong> "GDPR fines site:ec.europa.eu time:2018-2024 filetype:pdf entity:"data protection authority""
              </div>
              <p style={{ marginTop: '10px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> High precision, faster reranking, works well with BM25</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Risk of over-filtering, requires field support in search system</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#D35400',
      notes: 'Clarification asks users for disambiguation; Specification adds explicit constraints like time, source, file type'
        }
      ]
    },
    {
      id: 'strategies-10-15',
      title: '10-15. Semantic & Document Strategies',
      slides: [
        {
          id: 11,
          title: '10-15. Semantic & Document Strategies',
          content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.65em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
            <div style={{ border: '2px solid #1abc9c', borderRadius: '8px', padding: '12px' }}>
              <h4 style={{ color: '#1abc9c', marginBottom: '8px' }}>10. Semantic Bridging</h4>
              <p><strong>Goal:</strong> Map user language to domain ontology/taxonomy</p>
              <p style={{ marginTop: '6px' }}><strong>Example:</strong> "heart attack treatment" → "myocardial infarction (MI) management" OR "acute coronary syndrome therapy"</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Closes vocabulary gap, improves recall in domain searches</p>
            </div>
            <div style={{ border: '2px solid #3498db', borderRadius: '8px', padding: '12px' }}>
              <h4 style={{ color: '#3498db', marginBottom: '8px' }}>15. Query2Doc</h4>
              <p><strong>Goal:</strong> Turn query into pseudo-document reflecting likely content</p>
              <p style={{ marginTop: '6px' }}><strong>Example:</strong> "vector DB HNSW tuning" → 150-word pseudo-doc explaining HNSW parameters, tuning tradeoffs</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Strong recall, richer semantic matching with dense retrieval</p>
            </div>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '8px', padding: '12px' }}>
              <h4 style={{ color: '#9b59b6', marginBottom: '8px' }}>16. ITER-RETGEN</h4>
              <p><strong>Goal:</strong> Self-refine via iterative retrieve→generate cycles</p>
              <p style={{ marginTop: '6px' }}><strong>How:</strong> Draft identifies gaps → generate follow-up queries → retrieve → refine → repeat</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Better coverage without over-fetching, handles complex questions</p>
            </div>
            <div style={{ border: '2px solid #f39c12', borderRadius: '8px', padding: '12px' }}>
              <h4 style={{ color: '#f39c12', marginBottom: '8px' }}>17. Template-Based</h4>
              <p><strong>Goal:</strong> Standardize rewrites for recurring intents</p>
              <p style={{ marginTop: '6px' }}><strong>Example:</strong> "compare s3 vs gcs pricing" → "Compare storage pricing: AWS S3 vs Google Cloud Storage for 1–10 TB, standard tier, 2024"</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Consistent quality, fast execution, predictable behavior</p>
            </div>
            <div style={{ border: '2px solid #e67e22', borderRadius: '8px', padding: '12px' }}>
              <h4 style={{ color: '#e67e22', marginBottom: '8px' }}>18. Entity-Centric</h4>
              <p><strong>Goal:</strong> Disambiguate and ground queries to specific entities</p>
              <p style={{ marginTop: '6px' }}><strong>Example:</strong> "jaguar speed" → "Jaguar (animal:Panthera onca) top speed; exclude Jaguar (brand:automobile)"</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Significantly improves precision, solves homonym issues</p>
            </div>
            <div style={{ border: '2px solid #e74c3c', borderRadius: '8px', padding: '12px' }}>
              <h4 style={{ color: '#e74c3c', marginBottom: '8px' }}>19. Temporal Rewriting</h4>
              <p><strong>Goal:</strong> Make time references explicit and current</p>
              <p style={{ marginTop: '6px' }}><strong>Example:</strong> "latest OpenAI API quotas" → "OpenAI API rate limits as of 2025-11; changes in 2024–2025"</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Reduces stale results, improves versioned documentation specificity</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#27AE60',
      notes: 'Semantic bridging, Query2Doc, ITER-RETGEN, Template-based, Entity-centric, and Temporal strategies'
        }
      ]
    },
    {
      id: 'strategies-20-21',
      title: '20-21. Domain & Intent-Based',
      slides: [
        {
          id: 12,
          title: '20-21. Domain & Intent-Based',
          content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.72em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '15px' }}>
              <h3 style={{ color: '#3498db', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-hospital" sizeName="1x" />
                20. Domain-Specific Rewriting
              </h3>
              <p><strong>Goal:</strong> Translate lay terms to domain jargon and fields</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Map to domain terminology via specialized lexicons, field-specific filters, terminology standardization</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Legal, medical/healthcare, financial, technical engineering, scientific literature</p>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
                <strong>Before:</strong> "blood thinner side effects"<br/>
                <strong>After:</strong> "anticoagulant adverse effects: warfarin, DOACs (apixaban, rivaroxaban), hemorrhagic complications field:pharmacology"
              </div>
              <p style={{ marginTop: '10px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> High precision in specialized corpora, better matching to expert terminology</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Requires domain-specific knowledge/lexicons, harder to maintain, needs separate models per domain</p>
            </div>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '15px' }}>
              <h3 style={{ color: '#9b59b6', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-sitemap" sizeName="1x" />
                21. Intent Classification & Rewriting
              </h3>
              <p><strong>Goal:</strong> Match rewriting strategy to specific task types</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Classify query intent (lookup, compare, troubleshoot, generate), then apply specific strategy</p>
              <p style={{ marginTop: '8px' }}><strong>When:</strong> Mixed query workloads, agent-based routing, enterprise search with diverse needs</p>
              <div style={{ backgroundColor: 'rgba(155, 89, 182, 0.1)', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
                <strong>Before:</strong> "fix 500 error nginx"<br/>
                <strong>Intent:</strong> troubleshoot<br/>
                <strong>After:</strong> "Nginx 500 error troubleshooting steps for Ubuntu 22.04 - common causes, log file analysis, and configuration fixes"
              </div>
              <p style={{ marginTop: '10px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Centralized policy control, highly scalable, adapts to varied patterns</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Requires high-accuracy intent model, complex taxonomy maintenance</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#8E44AD',
      notes: 'Domain-Specific translates to expert terminology; Intent Classification routes to appropriate rewriting strategy'
        }
      ]
    },
    {
      id: 'strategies-22-24',
      title: 'Adaptive Strategies (22-24)',
      slides: [
        {
          id: 13,
          title: 'Adaptive Strategies (22-24)',
          content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.68em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
            <div style={{ border: '2px solid #e67e22', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#e67e22', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-chart-network" sizeName="1x" />
                22. Diverse Multi-Query (DMQR)
              </h4>
              <p><strong>Goal:</strong> Maximize diversity among rewrites to cover multiple facets</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Generate queries with explicit diversity constraints, apply diversity penalties, minimize overlap</p>
              <p style={{ marginTop: '8px' }}><strong>Example:</strong> "data governance framework" →</p>
              <ul style={{ fontSize: '0.9em', marginTop: '6px' }}>
                <li>1. enterprise policies and standards</li>
                <li>2. software tools implementing controls</li>
                <li>3. regulatory compliance aspects</li>
                <li>4. case studies on stewardship programs</li>
                <li>5. metrics for effectiveness</li>
                <li>6. risk management implementation</li>
              </ul>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Comprehensive coverage, better handles ambiguous queries</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Fusion/dedup cost, requires careful reranking</p>
            </div>
            <div style={{ border: '2px solid #1abc9c', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#1abc9c', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-chart-line-up" sizeName="1x" />
                23. Feedback-Based Rewriting
              </h4>
              <p><strong>Goal:</strong> Learn from user interactions (clicks, ratings, session data)</p>
              <p style={{ marginTop: '8px' }}><strong>How:</strong> Promote terms from clicked documents, suppress noise terms, apply collaborative filtering, update weights</p>
              <p style={{ marginTop: '8px' }}><strong>Example:</strong> "vector database comparison" → after analyzing clicked docs about HNSW/FAISS → "vector database comparison HNSW vs IVF FAISS Qdrant Milvus efSearch time-accuracy tradeoff"</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Improves over time, user-aligned, adapts to changing content</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Requires data pipeline, cold-start issues, privacy considerations</p>
            </div>
            <div style={{ border: '2px solid #f39c12', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#f39c12', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-wand-sparkles" sizeName="1x" />
                24. Prompt-Based & Adaptive
              </h4>
              <p><strong>Prompt-Based:</strong> Use compact, reusable prompts to standardize rewrites with minimal engineering</p>
              <p style={{ marginTop: '8px', fontSize: '0.9em' }}>Fast to deploy, highly flexible, works with any LLM</p>
              <p style={{ marginTop: '12px' }}><strong>Adaptive Rewriting:</strong> Policy model selects best strategy per query context</p>
              <p style={{ marginTop: '8px', fontSize: '0.9em' }}>Based on: query characteristics, conversation context, past performance, cost/latency budgets</p>
              <div style={{ backgroundColor: 'rgba(243, 156, 18, 0.1)', padding: '8px', borderRadius: '5px', marginTop: '10px', fontSize: '0.9em' }}>
                <strong>Adaptive Example:</strong><br/>
                Short ambiguous "apple" → Clarification<br/>
                Complex "compare MongoDB vs PostgreSQL for IoT" → Decomposition
              </div>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Balanced quality/cost, robust across diverse types</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Requires policy training, evaluation feedback loop</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#E67E22',
      notes: 'Adaptive strategies: Diverse Multi-Query for facet coverage, Feedback-Based learning, Prompt-Based simplicity, Adaptive policy selection'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 14,
          title: 'Strategy Selection Guide',
          icon: { name: 'duo-compass' },
          content: (
        <div style={{ maxWidth: '1000px', margin: '0 auto', fontSize: '0.75em' }}>
          <h3 style={{ marginBottom: '25px' }}>When to Use Each Strategy</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
            <div style={{ padding: '12px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px', borderLeft: '4px solid #3498db' }}>
              <strong>🔍 Need better recall?</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>→ Query Expansion, Multi-Query, HyDE, Query2Doc</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', borderLeft: '4px solid #9b59b6' }}>
              <strong>💬 Conversational follow-ups?</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>→ Context-Aware Rewriting, Query Reformulation</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', borderLeft: '4px solid #2ecc71' }}>
              <strong>🧩 Complex multi-part questions?</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>→ Query Decomposition, ITER-RETGEN, Step-Back</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px', borderLeft: '4px solid #f39c12' }}>
              <strong>❓ Ambiguous queries?</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>→ Query Clarification, Multi-Query, Diverse Multi-Query</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e67e22' }}>
              <strong>🎯 Need high precision?</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>→ Query Specification, Entity-Centric, Template-Based</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e74c3c' }}>
              <strong>🏥 Specialized domain?</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>→ Domain-Specific, Semantic Bridging</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'rgba(26, 188, 156, 0.1)', borderRadius: '8px', borderLeft: '4px solid #1abc9c' }}>
              <strong>⏰ Time-sensitive info?</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>→ Temporal Rewriting, Query Specification</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'rgba(149, 165, 166, 0.1)', borderRadius: '8px', borderLeft: '4px solid #95a5a6' }}>
              <strong>🔄 Production system with feedback?</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>→ Feedback-Based, Adaptive Rewriting</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'rgba(52, 73, 94, 0.1)', borderRadius: '8px', borderLeft: '4px solid #34495e' }}>
              <strong>⚡ Quick prototype?</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>→ Prompt-Based Rewriting, Query Reformulation</p>
            </div>
            <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.15)', borderRadius: '8px', borderLeft: '4px solid #8e44ad' }}>
              <strong>🔀 Mixed workloads?</strong>
              <p style={{ marginTop: '6px', fontSize: '0.95em' }}>→ Intent Classification, Adaptive Rewriting</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#34495E',
      notes: 'Decision guide: Match strategy to your specific needs - recall, precision, domain, time-sensitivity, or adaptivity'
        },
        {
          id: 15,
          title: 'Best Practices & Implementation',
          icon: { name: 'duo-clipboard-check' },
          content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginBottom: '15px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" />
                Getting Started
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>Start Simple:</strong> Begin with Query Reformulation or Expansion</li>
                <li><strong>Measure Baseline:</strong> Track Recall@k, MRR, grounding rate</li>
                <li><strong>Add Complexity:</strong> Layer strategies based on query patterns</li>
                <li><strong>A/B Test:</strong> Compare strategies on your specific data</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db', marginTop: '20px', marginBottom: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" />
                Production Guardrails
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>Token Caps:</strong> Limit LLM rewriting costs</li>
                <li><strong>Quality Gates:</strong> Evaluate rewritten query quality</li>
                <li><strong>Traceability:</strong> Log transformations for debugging</li>
                <li><strong>Fallbacks:</strong> Return to original query on failure</li>
                <li><strong>Timeouts:</strong> Handle complex rewrites gracefully</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12', marginBottom: '15px' }}>
                <SvgIcon iconName="duo-layer-group" sizeName="1x" />
                Combining Strategies
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>Serial:</strong> Context-Aware → Expansion → Specification</li>
                <li><strong>Parallel:</strong> Multi-Query + HyDE → Fusion</li>
                <li><strong>Iterative:</strong> ITER-RETGEN for complex questions</li>
                <li><strong>Conditional:</strong> Intent Classification → Strategy router</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e74c3c', marginTop: '20px', marginBottom: '15px' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="1x" />
                Common Pitfalls
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>Over-rewriting:</strong> Too many transformations dilute intent</li>
                <li><strong>Context bloat:</strong> Adding too much context degrades retrieval</li>
                <li><strong>Query drift:</strong> Rewrite strays from original intent</li>
                <li><strong>Latency creep:</strong> Multiple LLM calls slow response</li>
                <li><strong>Cost explosion:</strong> Token usage scales with strategies</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#27AE60',
      notes: 'Best practices: Start simple, measure baselines, add guardrails, combine strategies thoughtfully, avoid common pitfalls'
        },
        {
          id: 16,
          title: 'Summary: The Query Rewriting Playbook',
          icon: { name: 'duo-book-open' },
          content: (
            <div style={{ textAlign: 'left' }}>
          <h2 style={{ marginBottom: '30px' }}>21 Strategies for Better RAG Retrieval</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '1000px', margin: '0 auto', fontSize: '0.75em' }}>
            <div style={{ padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.15)', borderRadius: '10px' }}>
              <h4 style={{ color: '#3498db', marginBottom: '12px' }}>🎯 Core Strategies (1-9)</h4>
              <p style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                Expansion, Reformulation, Decomposition, Step-Back, HyDE, Multi-Query, Context-Aware, Clarification, Specification
              </p>
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Use for: Most RAG systems</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(155, 89, 182, 0.15)', borderRadius: '10px' }}>
              <h4 style={{ color: '#9b59b6', marginBottom: '12px' }}>🔬 Domain Strategies (10, 15, 18-20)</h4>
              <p style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                Semantic Bridging, Query2Doc, Entity-Centric, Temporal, Domain-Specific
              </p>
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Use for: Specialized domains</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.15)', borderRadius: '10px' }}>
              <h4 style={{ color: '#2ecc71', marginBottom: '12px' }}>🤖 Advanced Strategies (16-17, 21-24)</h4>
              <p style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
                ITER-RETGEN, Template-Based, Intent Classification, Diverse Multi-Query, Feedback-Based, Prompt-Based, Adaptive
              </p>
              <p style={{ marginTop: '10px', fontWeight: 'bold' }}>Use for: Production optimization</p>
            </div>
          </div>
          <div style={{ marginTop: '40px', padding: '25px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', maxWidth: '900px', margin: '40px auto 0' }}>
            <p style={{ fontSize: '1.1em', lineHeight: '1.8' }}>
              <strong>💡 Key Takeaway:</strong> Query rewriting is not one-size-fits-all. Start with 2-3 core strategies, measure impact on your metrics (Recall@k, MRR, grounding rate), then layer additional techniques based on your specific query patterns and domain needs.
            </p>
          </div>
          <div style={{ marginTop: '30px', textAlign: 'center', fontSize: '0.9em', opacity: 0.8 }}>
            <strong>🚀 Result:</strong> 15-40% better recall • 20-45% more grounded answers • Fewer hallucinations
          </div>
        </div>
      ),
      backgroundColor: '#2C3E50',
      notes: 'Summary: 21 strategies in 3 groups - Core for all systems, Domain for specialized needs, Advanced for production optimization'
        }
      ]
    }
  ]
};

