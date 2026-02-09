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
          center: true,
          title: '21 Query Rewriting Strategies for RAG',
          content: (
            <div style={{ color: '#fff' }}>
              <h2 style={{ marginBottom: '40px' }}>Practical patterns, prompts, and examples for better retrieval</h2>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '30px', marginTop: '50px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <SvgIcon iconName="duo-pen-to-square" sizeName="4x" style={{ color: '#3498db' }} />
                  <p style={{ marginTop: '15px', fontSize: '1.2rem' }}>Rewrite</p>
                </div>
                <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <SvgIcon iconName="duo-magnifying-glass" sizeName="4x" style={{ color: '#2ecc71' }} />
                  <p style={{ marginTop: '15px', fontSize: '1.2rem' }}>Retrieve</p>
                </div>
                <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <SvgIcon iconName="duo-bullseye" sizeName="4x" style={{ color: '#f39c12' }} />
                  <p style={{ marginTop: '15px', fontSize: '1.2rem' }}>Precision</p>
                </div>
              </div>
              <p><strong>Prepared by:</strong> Nisar A</p>
              <p><strong>Date:</strong> November 7, 2025</p>
              <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
            </div>
          ),
          backgroundColor: '#2C3E50',
          notes: ''
        },
        {
          id: 2,
          title: 'Why Query Rewriting?',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e74c3c', marginBottom: '20px' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                    Problems It Solves
                  </h3>
                  <ul style={{ lineHeight: '2' }}>
                    <li><strong>Vague or underspecified queries</strong><br />
                      <span style={{ fontSize: '1.2rem', opacity: 0.9 }}>Users often submit queries that lack sufficient detail for accurate retrieval</span></li>
                    <li><strong>Vocabulary/ontology mismatch</strong><br />
                      <span style={{ fontSize: '1.2rem', opacity: 0.9 }}>User phrasing differs from corpus terminology, creating semantic gaps</span></li>
                    <li><strong>Long/complex questions harming recall</strong><br />
                      <span style={{ fontSize: '1.2rem', opacity: 0.9 }}>Multi-part questions dilute key search terms, reducing retrieval effectiveness</span></li>
                    <li><strong>Conversational context loss in follow-ups</strong><br />
                      <span style={{ fontSize: '1.2rem', opacity: 0.9 }}>Follow-up queries lack critical context from previous conversation turns</span></li>
                    <li><strong>Hallucinations from poor context</strong><br />
                      <span style={{ fontSize: '1.2rem', opacity: 0.9 }}>Insufficient retrieval leads to LLM hallucinations and incorrect answers</span></li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#2ecc71', marginBottom: '20px' }}>
                    <SvgIcon iconName="duo-check-double" sizeName="2x" darkModeInvert={true} />
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
                      <strong>Fewer manual rewrites by users</strong>
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
          notes: ''
        },
        {
          id: 3,
          title: 'Impact on RAG Performance',
          icon: { name: 'duo-chart-line' },
          content: (
            <div style={{ margin: '0 auto', fontSize: '2rem', color: '#509dd1' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px', marginBottom: '40px' }}>
                <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(52, 152, 219, 0.15)', borderRadius: '10px', color: '#3498db', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-chart-line" sizeName="3x" style={{ color: '#3498db' }} />
                    <h4 style={{ color: '#3498db' }}>Recall@k</h4>
                  </div>
                  <p style={{ fontSize: '2em', fontWeight: 'bold', margin: '10px 0' }}>15-40%</p>
                  <p>Improvement in relevant document retrieval</p>
                </div>
                <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(155, 89, 182, 0.15)', borderRadius: '10px', color: '#9b59b6', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-ranking-star" sizeName="3x" style={{ color: '#9b59b6' }} />
                    <h4 style={{ color: '#9b59b6' }}>MRR/NDCG</h4>
                  </div>
                  <p style={{ fontSize: '2em', fontWeight: 'bold', margin: '10px 0' }}>10-25%</p>
                  <p>Boost in ranking quality metrics</p>
                </div>
                <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(46, 204, 113, 0.15)', borderRadius: '10px', color: '#2ecc71', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-anchor" sizeName="3x" style={{ color: '#2ecc71' }} />
                    <h4 style={{ color: '#2ecc71' }}>Grounded-rate</h4>
                  </div>
                  <p style={{ fontSize: '2em', fontWeight: 'bold', margin: '10px 0' }}>20-45%</p>
                  <p>More answers properly grounded in retrieved context</p>
                </div>
                <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(243, 156, 18, 0.15)', borderRadius: '10px', color: '#f39c12', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-award" sizeName="3x" style={{ color: '#f39c12' }} />
                    <h4 style={{ color: '#f39c12' }}>Eval pass@1</h4>
                  </div>
                  <p style={{ fontSize: '2em', fontWeight: 'bold', margin: '10px 0' }}>15-30%</p>
                  <p>Improvement in single-attempt success rate</p>
                </div>
              </div>
              <div style={{ padding: '20px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', textAlign: 'center' }}>
                <strong>💡 Key Benefits:</strong> Improves top-k recall, reduces off-topic retrieval, boosts QA accuracy, enables domain/temporal disambiguation
              </div>
            </div>
          ),
          backgroundColor: '#16496b',
          notes: ''
        },
        {
          id: 4,
          title: 'Implementation Workflow',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <h3 style={{ paddingBottom: '30px' }}>Step-by-Step Process</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '30px' }}>
                <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', border: '2px solid #3498db', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#3498db' }}>
                  <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#3498db', marginBottom: '10px' }}>1</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#3498db' }} />
                    <h4 style={{ marginTop: '10px', color: '#3498db' }}>Parse Intent & Context</h4>
                  </div>
                  <p style={{ marginTop: '8px' }}>Extract user intent and relevant contextual information from history and user profile</p>
                </div>
                <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '10px', border: '2px solid #9b59b6', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#9b59b6' }}>
                  <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#9b59b6', marginBottom: '10px' }}>2</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-list-check" sizeName="2x" style={{ color: '#9b59b6' }} />
                    <h4 style={{ marginTop: '10px', color: '#9b59b6' }}>Pick Rewriting Policy</h4>
                  </div>
                  <p style={{ marginTop: '8px' }}>Select appropriate rule-based, ML-based, or agent-based approach for query transformation</p>
                </div>
                <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '10px', border: '2px solid #2ecc71', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#2ecc71' }}>
                  <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#2ecc71', marginBottom: '10px' }}>3</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-wand-magic-sparkles" sizeName="2x" style={{ color: '#2ecc71' }} />
                    <h4 style={{ marginTop: '10px', color: '#2ecc71' }}>Transform Query</h4>
                  </div>
                  <p style={{ marginTop: '8px' }}>Apply one or more rewriting strategies based on query type and identified intent</p>
                </div>
                <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '10px', border: '2px solid #f39c12', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#f39c12' }}>
                  <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#f39c12', marginBottom: '10px' }}>4</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={{ color: '#f39c12' }} />
                    <h4 style={{ marginTop: '10px', color: '#f39c12' }}>Retrieve</h4>
                  </div>
                  <p style={{ marginTop: '8px' }}>Execute retrieval using hybrid search methods (sparse + dense) and reranking</p>
                </div>
                <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '10px', border: '2px solid #e67e22', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#e67e22' }}>
                  <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#e67e22', marginBottom: '10px' }}>5</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-clipboard-check" sizeName="2x" style={{ color: '#e67e22' }} />
                    <h4 style={{ marginTop: '10px', color: '#e67e22' }}>Check Coverage</h4>
                  </div>
                  <p style={{ marginTop: '8px' }}>Evaluate retrieved content coverage; iterate if needed using Iter-RetGen approach</p>
                </div>
                <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '10px', border: '2px solid #e74c3c', display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#e74c3c' }}>
                  <div style={{ fontSize: '2em', fontWeight: 'bold', color: '#e74c3c', marginBottom: '10px' }}>6</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-chart-column" sizeName="2x" style={{ color: '#e74c3c' }} />
                    <h4 style={{ marginTop: '10px', color: '#e74c3c' }}>Log & Adapt</h4>
                  </div>
                  <p style={{ marginTop: '8px' }}>Capture feedback and performance metrics to continuously improve rewriting policy</p>
                </div>
              </div>
              <div style={{ padding: '15px', backgroundColor: 'rgba(149, 165, 166, 0.15)', borderRadius: '8px', fontSize: '1.2rem' }}>
                <strong>🛡️ Guardrails:</strong> Token/cost caps for LLM rewriting operations • Evaluation gates for rewritten query quality • Traceability of transformations for debugging • Timeout handling for complex rewrites • Fallback mechanisms to original query
              </div>
            </div>
          ),
          backgroundColor: '#34495E',
          notes: ''
        },
        {
          id: 5,
          title: '21 Strategies Overview',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#5bbf84' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
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
              </div>
              <p style={{ marginTop: '25px', textAlign: 'center', fontSize: '1.2rem', padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px' }}>
                <strong>21 strategies</strong> organized by approach: Expansion, Context, Decomposition, Specification, Domain, and Adaptive methods
              </p>
            </div>
          ),
          backgroundColor: '#194f2f',
          notes: ''
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
              <h3>Bridge vocabulary gaps, increase recall with synonyms/related terms, and improve retrieval for sparse queries</h3>
              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                <li>Simple implementation</li>
                <li>Cost-effective approach</li>
                <li>Significant recall improvement</li>
                <li>Works with existing search engines</li>
              </ul>
              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <p>Ideal for scenarios with:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                <li>Low recall performance</li>
                <li>Sparse or short queries</li>
                <li>Domain-specific terminology</li>
                <li>Tail terms or rare concepts</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e557b',
          notes: ''
        },
        {
          id: 7,
          title: '1. Query Expansion - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How Query Expansion Works</h3>
              <p>Add semantically related keywords and entities through multiple approaches:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li><strong>Thesaurus/dictionary lookups</strong> - Traditional synonym expansion using linguistic databases</li>
                <li><strong>Embedding-based similarity</strong> - Use vector embeddings to find semantically similar terms</li>
                <li><strong>Pseudo-relevance feedback</strong> - Extract terms from top initial retrieval results</li>
                <li><strong>LLM-generated related terms</strong> - Use language models to generate contextually relevant expansions</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e557b',
          notes: ''
        },
        {
          id: 8,
          title: '1. Query Expansion - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Implementation Pattern</h3>
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
          backgroundColor: '#1e557b',
          notes: ''
        },
        {
          id: 9,
          title: '1. Query Expansion - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "flu treatment"<br />
                <strong>After:</strong> "flu treatment" OR "influenza therapy" OR "antiviral medication" OR "oseltamivir" OR "flu remedies" OR "fever reduction"
              </div>
              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                <li>Can dilute precision without reranking</li>
                <li>Risk of query drift</li>
                <li>Less effective for ambiguous queries</li>
                <li>May need domain tuning</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e557b',
          notes: ''
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
              <h3>Make queries clearer, self-contained, and unambiguous to enhance retrieval precision</h3>
              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Improved precision in results</li>
                <li>Reduces irrelevant document hits</li>
                <li>Better response in multi-turn chats</li>
                <li>Self-contained queries for caching</li>
              </ul>
              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <p>Best applied to:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Conversational follow-up queries</li>
                <li>Terse or vague user questions</li>
                <li>Multi-turn interactions</li>
                <li>Ambiguous references to entities</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6c1e7b',
          notes: ''
        },
        {
          id: 11,
          title: '2. Query Reformulation - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How Query Reformulation Works</h3>
              <p>Rephrase queries with complete information by adding:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li><strong>Full entity names and identifiers</strong> - Replace pronouns and abbreviations with complete names</li>
                <li><strong>Explicit constraints and qualifiers</strong> - Add missing conditions and requirements</li>
                <li><strong>Contextual information from history</strong> - Integrate relevant context from conversation</li>
                <li><strong>Missing temporal or domain context</strong> - Clarify time periods and domain-specific details</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6c1e7b',
          notes: ''
        },
        {
          id: 12,
          title: '2. Query Reformulation - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Implementation Pattern</h3>
              <p>Clean, self-contained rewrite that preserves original intent</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1.2rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
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
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1.2rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Implementation example
def reformulate_query(query, history):
    context = summarize_conversation_history(history)
    rewritten = llm.generate(prompt, query=query,
                            history=context)
    return rewritten`}
              </pre>
            </div>
          ),
          backgroundColor: '#6c1e7b',
          notes: ''
        },
        {
          id: 13,
          title: '2. Query Reformulation - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "What about pricing?"<br />
                <strong>After:</strong> "What is the pricing for the Pro plan of Acme API in 2024?"
              </div>
              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                <li>Requires access to conversation context</li>
                <li>Risk of over-specification</li>
                <li>May introduce assumptions</li>
                <li>Additional latency from preprocessing</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6c1e7b',
          notes: ''
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
              <h3>Handle multi-hop/complex questions that require multiple pieces of information to answer completely</h3>
              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                <li>Better coverage of complex topics</li>
                <li>Improved reasoning capabilities</li>
                <li>Each sub-question can be precisely answered</li>
                <li>Reduces hallucinations on complex queries</li>
              </ul>
              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <p>Best for questions that involve:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                <li>Multi-entity relationships</li>
                <li>Multi-step reasoning</li>
                <li>Compare/contrast scenarios</li>
                <li>Questions requiring information from different domains</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e6b7b',
          notes: ''
        },
        {
          id: 15,
          title: '3. Query Decomposition - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How Query Decomposition Works</h3>
              <p>Breaks complex queries into simpler sub-questions through an orchestrated workflow:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li><strong>Split original query into atomic sub-questions</strong> - Identify independent components of the complex question</li>
                <li><strong>Retrieve relevant passages for each sub-query</strong> - Execute separate retrieval for focused information needs</li>
                <li><strong>Answer each sub-question independently</strong> - Generate targeted responses using retrieved context</li>
                <li><strong>Synthesize final answer from individual results</strong> - Combine sub-answers into comprehensive response</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e6b7b',
          notes: ''
        },
        {
          id: 16,
          title: '3. Query Decomposition - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Implementation Pattern</h3>
              <p>Plan → retrieve → answer → combine workflow</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1.2rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Prompt template for decomposition
"""
Decompose the following question into 2-5 simpler sub-questions that, when
answered separately, will help answer the main question comprehensively.
Return a numbered list of sub-questions without additional explanation.
Main question: {query}
"""`}
              </pre>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1.2rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
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
          backgroundColor: '#1e6b7b',
          notes: ''
        },
        {
          id: 17,
          title: '3. Query Decomposition - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "Compare Snowflake vs BigQuery costs for 10 TB/month"<br />
                <strong>After:</strong> 1. What is Snowflake's pricing model and costs for 10 TB/month? 2. What is BigQuery's pricing model and costs for 10 TB/month? 3. What compute resources would be needed for this data volume? 4. How do the pricing structures compare for this workload?
              </div>
              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                <li>Multiple retrieval calls increase latency</li>
                <li>Requires orchestration complexity</li>
                <li>Higher token usage and costs</li>
                <li>Synthesis step can introduce errors</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e6b7b',
          notes: ''
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
              <h3>Improve retrieval via abstraction and first principles thinking, allowing better information access for complex or specific queries</h3>
              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                <li>Robust to query wording variations</li>
                <li>Better generalization across concepts</li>
                <li>Improves coverage of relevant information</li>
                <li>Helps understand fundamental principles</li>
              </ul>
              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <p>Best applied when:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                <li>Specific but under-retrieving queries</li>
                <li>Reasoning-heavy or conceptual topics</li>
                <li>Technical questions needing broader context</li>
                <li>Direct retrieval with specific terms fails</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b5d1e',
          notes: ''
        },
        {
          id: 19,
          title: '4. Step-Back Prompting - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How Step-Back Prompting Works</h3>
              <p>Generate high-level concepts, then retrieve with that summary:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li><strong>Extract underlying principles from specific query</strong> - Identify fundamental concepts behind the question</li>
                <li><strong>Identify broader concepts and frameworks</strong> - Connect to relevant theoretical foundations</li>
                <li><strong>Create a more general retrieval query</strong> - Formulate abstract query terms</li>
                <li><strong>Focus on conceptual understanding</strong> - Retrieve documents explaining core principles</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b5d1e',
          notes: ''
        },
        {
          id: 20,
          title: '4. Step-Back Prompting - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Implementation Pattern</h3>
              <p>Step-back summary → retrieval query pattern</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1.2rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Prompt template
"""
Step back: derive 3–5 high-level concepts underlying:
{query}
Then produce a concise retrieval query based on these
concepts that would help answer the original question.
"""`}
              </pre>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1.2rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
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
          backgroundColor: '#7b5d1e',
          notes: ''
        },
        {
          id: 21,
          title: '4. Step-Back Prompting - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "How to fix CUDA OOM with Llama 3.1 70B?"<br />
                <strong>After:</strong> "LLM memory optimization, quantization, gradient checkpointing, batch sizing, GPU VRAM constraints"
              </div>
              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                <li>Risk of over-abstraction</li>
                <li>Needs good reranker to filter results</li>
                <li>May lose specificity for narrow queries</li>
                <li>Can introduce unwanted generality</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b5d1e',
          notes: ''
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
              <h3>Improve retrieval quality by embedding a synthetic document that provides a hypothetical answer to the query, bridging the semantic gap</h3>
              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                <li>Strong recall gains in dense retrieval</li>
                <li>Works with existing embedding models</li>
                <li>No fine-tuning required</li>
                <li>Bridges vocabulary gaps effectively</li>
                <li>Zero-shot capability for new domains</li>
              </ul>
              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <p>Particularly effective for:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                <li>Low recall in dense retrieval systems</li>
                <li>Zero-shot domain applications</li>
                <li>Queries with vocabulary mismatch</li>
                <li>Complex information needs</li>
                <li>When semantic search underperforms</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e7b28',
          notes: ''
        },
        {
          id: 23,
          title: '5. HyDE - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How HyDE Works</h3>
              <p>Instead of embedding the query directly:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li><strong>LLM generates a hypothetical answer document</strong> - Create synthetic document as if answering the query</li>
                <li><strong>This synthetic document is embedded</strong> - Use embedding model to vectorize the hypothetical answer</li>
                <li><strong>Retrieval uses this embedding to find similar real documents</strong> - Search for documents semantically similar to the answer</li>
                <li><strong>Final answer generation uses the retrieved documents</strong> - LLM generates response using actual retrieved content</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e7b28',
          notes: ''
        },
        {
          id: 24,
          title: '5. HyDE - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Implementation Pattern</h3>
              <p>Generate hypothetical document → embed → retrieve</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1.2rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Prompt template
"""
Write a 120-200 word passage that would likely answer the following query.
Keep a factual, informative tone. Include key terminology and concepts.
Do not include phrases like "according to" or "based on research".
Query: {query}
"""`}
              </pre>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1.2rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
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
          backgroundColor: '#1e7b28',
          notes: ''
        },
        {
          id: 25,
          title: '5. HyDE - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "causal ml uplift modeling tutorial"<br />
                <strong>After (Hypothetical Document):</strong>
                <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                  <li>Uplift modeling is a machine learning technique that predicts the causal impact of a treatment on individual behavior. Unlike traditional ML models that predict outcomes, uplift models focus on incremental impact. The process involves collecting data with treatment and control groups, feature engineering, and model training.</li>
                  <li>Key steps include: 1) Split data into treatment/control groups, 2) Feature transformation with interaction terms, 3) Model training with algorithms like random forests or neural networks, 4) Evaluation using metrics like AUUC or Qini coefficient.</li>
                  <li>Common applications include marketing campaign optimization, personalized medicine, and customer retention strategies...</li>
                </ul>
              </div>
              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                <li>Extra token usage and latency</li>
                <li>Pseudo-doc bias if poorly guided</li>
                <li>Quality depends on LLM's knowledge</li>
                <li>May introduce hallucinations</li>
                <li>Less efficient for simple queries</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e7b28',
          notes: ''
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
              <h3>Cover diverse intents/phrases to improve recall and handle query ambiguity by exploring different interpretations of user intent</h3>
              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Robust to query ambiguity</li>
                <li>Higher hit-rate for relevant documents</li>
                <li>Better coverage of different aspects</li>
                <li>Handles vocabulary mismatches</li>
              </ul>
              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <p>Best suited for:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Ambiguous or underspecified queries</li>
                <li>Heterogeneous document corpora</li>
                <li>Tasks requiring breadth of coverage</li>
                <li>Critical applications where recall matters</li>
              </ul>
            </div>
          ),
          backgroundColor: '#465e7b',
          notes: ''
        },
        {
          id: 27,
          title: '6. Multi-Query Generation - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How Multi-Query Generation Works</h3>
              <p>Generate multiple alternative query formulations:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li><strong>Generate k diverse query variants</strong> - Create multiple formulations exploring different angles</li>
                <li><strong>Retrieve documents for each variant</strong> - Execute separate retrieval for each query version</li>
                <li><strong>Union results from all queries</strong> - Combine documents from all retrievals</li>
                <li><strong>Apply reranking to consolidate results</strong> - Score and deduplicate combined results</li>
              </ul>
            </div>
          ),
          backgroundColor: '#465e7b',
          notes: ''
        },
        {
          id: 28,
          title: '6. Multi-Query Generation - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Implementation Pattern</h3>
              <p>Generate diverse query variants, retrieve separately, then combine results</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1.2rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
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
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1.2rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
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
          backgroundColor: '#465e7b',
          notes: ''
        },
        {
          id: 29,
          title: '6. Multi-Query Generation - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "LLM eval methods"<br />
                <strong>After:</strong>
                <ul style={{ marginTop: '10px', fontSize: '1.2rem' }}>
                  <li>"evaluation frameworks for large language models"</li>
                  <li>"LLM benchmarks and testing methodologies"</li>
                  <li>"automatic evaluation prompts for language models"</li>
                  <li>"human evaluation rubrics for LLM outputs"</li>
                  <li>"RAG evaluation metrics and techniques"</li>
                </ul>
              </div>
              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Increased cost and latency</li>
                <li>Requires deduplication and fusion</li>
                <li>More complex implementation</li>
                <li>May retrieve irrelevant results</li>
              </ul>
            </div>
          ),
          backgroundColor: '#465e7b',
          notes: ''
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
              <h3>Make follow-up queries standalone and self-contained by incorporating conversation context and session history</h3>
              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Significant quality improvement in chat</li>
                <li>Reduces context window waste</li>
                <li>Enables effective RAG on follow-ups</li>
                <li>Preserves conversation flow</li>
              </ul>
              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <p>Ideal for:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Conversational chatbots</li>
                <li>Multi-turn question answering</li>
                <li>Session-based search interfaces</li>
                <li>Follow-up questions with pronouns</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b2e1e',
          notes: ''
        },
        {
          id: 31,
          title: '7. Context-Aware Rewriting - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How Context-Aware Rewriting Works</h3>
              <p>Inject relevant contextual elements into the query:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li><strong>Entities mentioned in previous turns</strong> - Replace pronouns with specific entity references</li>
                <li><strong>Constraints established earlier</strong> - Include previously defined parameters and filters</li>
                <li><strong>References to prior answers</strong> - Connect to relevant information from conversation</li>
                <li><strong>User preferences from session</strong> - Apply ongoing user context and settings</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b2e1e',
          notes: ''
        },
        {
          id: 32,
          title: '7. Context-Aware Rewriting - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Implementation Pattern</h3>
              <p>Rewrite follow-up queries using conversation history to make them self-contained</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1.2rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
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
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1.2rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
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
          backgroundColor: '#7b2e1e',
          notes: ''
        },
        {
          id: 33,
          title: '7. Context-Aware Rewriting - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "And its limits?"<br />
                <strong>After:</strong> "What are the 2024 rate limits for the Acme Pro API we discussed above?"
              </div>
              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Needs careful context selection</li>
                <li>Potential privacy concerns</li>
                <li>Can overspecify in some cases</li>
                <li>Requires history tracking infrastructure</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b2e1e',
          notes: ''
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
              <h3>Resolve ambiguity in user queries before retrieval to improve precision and relevance of results</h3>
              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Significantly improves precision</li>
                <li>Better user alignment and satisfaction</li>
                <li>Reduces irrelevant results</li>
                <li>Educates users on query formulation</li>
              </ul>
              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <p>Ideal for scenarios with:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Short or vague queries</li>
                <li>Ambiguous terms with multiple meanings</li>
                <li>Missing contextual constraints</li>
                <li>Domain-specific clarification needs</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e7b20',
          notes: ''
        },
        {
          id: 35,
          title: '8. Query Clarification - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How Query Clarification Works</h3>
              <p>The system:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li><strong>Detects missing constraints or ambiguities</strong> - Analyze query for undefined terms or parameters</li>
                <li><strong>Asks 1-2 targeted clarifying questions</strong> - Present specific options to disambiguate</li>
                <li><strong>Proposes default interpretations when appropriate</strong> - Suggest common interpretations</li>
                <li><strong>Uses responses to reformulate the query</strong> - Integrate clarifications into refined query</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e7b20',
          notes: ''
        },
        {
          id: 36,
          title: '8. Query Clarification - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Implementation Pattern</h3>
              <p>Clarify→rewrite→retrieve workflow</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1.2rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Prompt template for clarification
"""
Analyze the query: "{query}"
Identify the top ambiguity and ask one clarifying question.
If there are multiple possible interpretations, propose
2 options for the user to choose from.
"""`}
              </pre>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1.2rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
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
          backgroundColor: '#1e7b20',
          notes: ''
        },
        {
          id: 37,
          title: '8. Query Clarification - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example - Interactive Clarification Flow</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>User Query:</strong> "Apple pay policy"<br />
                <strong>System Clarification:</strong> "Do you mean Apple Inc.'s payment policies or the fruit industry's payment policies? For Apple Inc., which region are you interested in?"<br /><br />
                <strong>User Response:</strong> "Apple Inc., United States"<br />
                <strong>Rewritten Query:</strong> "Apple Inc. digital payment policies and terms for Apple Pay service in the United States"
              </div>
              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Adds interaction step (latency)</li>
                <li>Requires timeout handling</li>
                <li>May frustrate users seeking quick answers</li>
                <li>Needs careful default selection</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e7b20',
          notes: ''
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
              <h3>Add explicit constraints (time, source, locale, format) to focus retrieval on relevant document subsets</h3>
              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>High precision retrieval</li>
                <li>Faster reranking (smaller candidate pool)</li>
                <li>Better for enterprise/compliance use cases</li>
                <li>Supports structured data sources</li>
                <li>Combines well with BM25/keyword search</li>
              </ul>
              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <p>Best for scenarios requiring high precision:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Enterprise search systems</li>
                <li>Data analytics applications</li>
                <li>Compliance and audit searches</li>
                <li>Large heterogeneous document collections</li>
                <li>Time-sensitive information needs</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b1e75',
          notes: ''
        },
        {
          id: 39,
          title: '9. Query Specification - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How Query Specification Works</h3>
              <p>Expand queries with structured filters and fielded search terms:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li><strong>Time range specifications</strong> - Constrain results to specific date ranges</li>
                <li><strong>Source/domain constraints</strong> - Limit to specific sites or domains</li>
                <li><strong>File type filters</strong> - Target specific document formats</li>
                <li><strong>Metadata qualifiers</strong> - Filter by author, department, or other metadata</li>
                <li><strong>Language/locale parameters</strong> - Specify language or regional requirements</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b1e75',
          notes: ''
        },
        {
          id: 40,
          title: '9. Query Specification - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Implementation Pattern</h3>
              <p>Detect constraints → annotate query with explicit field filters</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
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
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
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
          backgroundColor: '#7b1e75',
          notes: ''
        },
        {
          id: 41,
          title: '9. Query Specification - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "GDPR fines"<br />
                <strong>After:</strong> "GDPR fines site:ec.europa.eu time:2018-2024 filetype:pdf entity:\"data protection authority\""
              </div>
              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Risk of over-filtering (false negatives)</li>
                <li>Requires field support in search system</li>
                <li>More complex to implement and maintain</li>
                <li>May need domain-specific constraints</li>
                <li>Less effective for unstructured sources</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b1e75',
          notes: ''
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
              <h3>Map user language to domain ontology/taxonomy, bridging the vocabulary gap between natural language queries and specialized terminology</h3>
              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Closes vocabulary gap between users and experts</li>
                <li>Significantly improves recall in domain searches</li>
                <li>Reduces "zero results" scenarios</li>
                <li>Works well with both sparse and dense retrieval</li>
              </ul>
              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <p>Best applied for domains with:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Specialized jargon (medical, legal, technical)</li>
                <li>Product/SKU catalogs and e-commerce</li>
                <li>Academic/scientific search</li>
                <li>Industry-specific terminology gaps</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b6a1e',
          notes: ''
        },
        {
          id: 43,
          title: '10. Semantic Bridging - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How Semantic Bridging Works</h3>
              <p>Expand/translate queries to canonical terms through:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li><strong>Domain-specific ontology lookups</strong> - Match terms to formal taxonomies and classifications</li>
                <li><strong>Terminology mapping (layman → expert)</strong> - Translate colloquial terms to technical vocabulary</li>
                <li><strong>Synonym expansion with field expertise</strong> - Add domain-appropriate synonyms and related terms</li>
                <li><strong>Abbreviation/acronym resolution</strong> - Expand shortened forms to full terms</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b6a1e',
          notes: ''
        },
        {
          id: 44,
          title: '10. Semantic Bridging - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Implementation Pattern</h3>
              <p>Ontology lookup + LLM normalization approach</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Prompt template
"""
Map terms in the following query to canonical ontology labels.
For each term, provide synonyms and formal terminology from {domain} field.
Query: {query}
Domain knowledge: {ontology_context}
"""`}
              </pre>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
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
          backgroundColor: '#7b6a1e',
          notes: ''
        },
        {
          id: 45,
          title: '10. Semantic Bridging - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "heart attack treatment"<br />
                <strong>After:</strong> "myocardial infarction (MI) management" OR "acute coronary syndrome therapy" OR "thrombolysis" OR "PCI" OR "cardiac revascularization"
              </div>
              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Requires curated domain ontology</li>
                <li>Risk of ontology drift over time</li>
                <li>May over-expand in ambiguous cases</li>
                <li>Domain knowledge maintenance overhead</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b6a1e',
          notes: ''
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
              <h3>Improve retrieval by turning a query into a pseudo-document that reflects likely relevant content</h3>
              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Strong recall improvement</li>
                <li>Richer semantic matching</li>
                <li>Works well with dense retrieval</li>
                <li>Bridges vocabulary gaps</li>
              </ul>
              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <p>Best applied when:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Sparse or short queries lack context</li>
                <li>Using dense or hybrid retrieval systems</li>
                <li>Technical domains with specific terminology</li>
                <li>Knowledge-intensive queries</li>
              </ul>
            </div>
          ),
          backgroundColor: '#4e1e7b',
          notes: ''
        },
        {
          id: 47,
          title: '11. Query2Doc - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How Query2Doc Works</h3>
              <p>Generate a document-style expansion of the query that:</p>
              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li><strong>Mimics the style and content of relevant passages</strong> - Generated text resembles actual documents</li>
                <li><strong>Contains key terms and relationships</strong> - Includes domain-specific vocabulary and connections</li>
                <li><strong>Creates a richer representation for matching</strong> - Provides more semantic signal than query alone</li>
                <li><strong>Uses LLM to generate a hypothetical answer</strong> - Leverages model knowledge to create relevant content</li>
              </ul>
            </div>
          ),
          backgroundColor: '#4e1e7b',
          notes: ''
        },
        {
          id: 48,
          title: '11. Query2Doc - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Implementation Pattern</h3>
              <p>LLM document expansion → embed → retrieve</p>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Prompt template
"""
Write a 150-word pseudo-document that would appear in
relevant sources for the following query. Include key
terminology and technical concepts but stay factual.
Query: {query}
"""`}
              </pre>
              <pre style={{ marginTop: '20px', lineHeight: '1.5', fontSize: '1rem', backgroundColor: 'rgba(0,0,0,0.3)', padding: '15px', borderRadius: '5px' }}>
                {`# Implementation example
def query2doc(query):
    pseudo_doc = llm.generate(prompt, query=query)
    doc_embedding = embed_model.embed(pseudo_doc)
    results = vector_db.query(doc_embedding)
    return results`}
              </pre>
            </div>
          ),
          backgroundColor: '#4e1e7b',
          notes: ''
        },
        {
          id: 49,
          title: '11. Query2Doc - Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)', padding: '20px', borderRadius: '8px', fontSize: '1.2rem', marginTop: '20px' }}>
                <strong>Before:</strong> "vector DB HNSW tuning"<br />
                <strong>After (Pseudo-doc):</strong> "HNSW (Hierarchical Navigable Small World) is a graph-based indexing algorithm used in vector databases for approximate nearest neighbor search. Key tuning parameters include M (maximum connections per node), which controls graph connectivity; efConstruction (search width during build) affecting index quality; and efSearch (search width during query) balancing speed vs recall. Proper tuning requires understanding the tradeoff between index build time, search latency, and recall performance..."
              </div>
              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Token-heavy approach</li>
                <li>Risk of introducing hallucinations</li>
                <li>Latency impact from generation step</li>
                <li>Must avoid overly specific claims</li>
              </ul>
            </div>
          ),
          backgroundColor: '#4e1e7b',
          notes: ''
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
              <h3>Self-refine queries via iterative retrieve→generate cycles to improve coverage and accuracy for complex questions</h3>

              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Better coverage without over-fetching</li>
                <li>Progressive refinement of answers</li>
                <li>Handles complex multi-part questions</li>
                <li>Adapts to information gaps</li>
                <li>More comprehensive final responses</li>
              </ul>

              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Hard questions requiring comprehensive info</li>
                <li>Incomplete initial context</li>
                <li>Multi-step reasoning requirements</li>
                <li>When single retrieval pass misses key info</li>
              </ul>
            </div>
          ),
          backgroundColor: '#5d7b1e',
          notes: ''
        },
        {
          id: 51,
          title: '12. ITER-RETGEN: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Alternates between answer drafts and targeted follow-up queries</h3>

              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li>Initial response identifies knowledge gaps</li>
                <li>System generates targeted follow-up queries</li>
                <li>Retrieves additional context on specific points</li>
                <li>Refines answer with new information</li>
                <li>Repeats until complete or threshold reached</li>
              </ul>
            </div>
          ),
          backgroundColor: '#5d7b1e',
          notes: ''
        },
        {
          id: 52,
          title: '12. ITER-RETGEN: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Prompt Template</h3>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {`"""
Given the current answer draft and identified gaps below,
propose up to 3 follow-up retrieval queries that would
help complete or improve the answer.
Draft answer: {current_draft}
Return only the follow-up queries without explanations.
"""`}
              </pre>

              <h3 style={{ marginTop: '30px' }}>Implementation</h3>
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
          backgroundColor: '#5d7b1e',
          notes: ''
        },
        {
          id: 53,
          title: '12. ITER-RETGEN: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Start:</strong> Initial query: "What are effective LLM guardrails?"<br />
                <strong>Iter 1:</strong> Draft mentions input filtering. Follow-up: "prompt injection prevention techniques"<br />
                <strong>Iter 2:</strong> Draft adds RLHF. Follow-up: "sandboxing approaches for LLMs"<br />
                <strong>Final:</strong> Comprehensive answer covering filtering, RLHF, sandboxing, output checking and monitoring
              </div>

              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Weaknesses / Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Orchestration complexity</li>
                <li>Increased latency</li>
                <li>Higher token/API costs</li>
                <li>Potential for retrieval drift</li>
                <li>Needs stopping criteria</li>
              </ul>
            </div>
          ),
          backgroundColor: '#5d7b1e',
          notes: ''
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
              <h3>Standardize rewrites for recurring intents and query patterns to ensure consistency and quality</h3>

              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Consistent query quality</li>
                <li>Fast execution (low latency)</li>
                <li>Predictable behavior</li>
                <li>Enforces standardized formats</li>
              </ul>

              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                <li>Customer support & documentation QA</li>
                <li>E-commerce product search</li>
                <li>Specialized domain knowledge</li>
                <li>High-volume, predictable query patterns</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b1e41',
          notes: ''
        },
        {
          id: 55,
          title: '13. Template-Based Rewriting: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Fill predefined domain templates based on intent types</h3>

              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li>Lookup templates (product, document, person)</li>
                <li>Comparison templates (A vs B by attribute)</li>
                <li>Troubleshooting templates (error + system)</li>
                <li>How-to templates (task + constraints)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b1e41',
          notes: ''
        },
        {
          id: 56,
          title: '13. Template-Based Rewriting: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Prompt Template</h3>
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

              <h3 style={{ marginTop: '30px' }}>Implementation</h3>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {`def template_rewrite(query):
  intent = classify_intent(query)
  template = select_template(intent)
  slots = extract_slots(query, intent)
  return fill_template(template, slots)`}
              </pre>
            </div>
          ),
          backgroundColor: '#7b1e41',
          notes: ''
        },
        {
          id: 57,
          title: '13. Template-Based Rewriting: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Before:</strong> "compare s3 vs gcs pricing"<br />
                <strong>After:</strong> "Compare storage pricing: AWS S3 vs Google Cloud Storage for 1–10 TB, standard tier, 2024"
              </div>

              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Weaknesses / Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Rigid structure limits flexibility</li>
                <li>Requires template maintenance</li>
                <li>Struggles with novel queries</li>
                <li>Intent classification errors cascade</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b1e41',
          notes: ''
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
              <h3>Disambiguate and ground queries to specific entities, resolving ambiguity and improving retrieval precision for entity-focused questions</h3>

              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Significantly improves precision</li>
                <li>Enables knowledge graph integration</li>
                <li>Solves homonym/polysemy issues</li>
                <li>Can add helpful entity attributes</li>
                <li>Reduces irrelevant results</li>
              </ul>

              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Knowledge graph integration</li>
                <li>Product catalogs and search</li>
                <li>People/places/organization queries</li>
                <li>Ambiguous entity names</li>
                <li>Domain-specific entity collections</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e7b71',
          notes: ''
        },
        {
          id: 59,
          title: '14. Entity-Centric Rewriting: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Extract entities → link to knowledge base → enrich with attributes → reformulate query</h3>

              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li>Named Entity Recognition (NER) extraction</li>
                <li>Entity linking to knowledge base IDs</li>
                <li>Entity enrichment with attributes</li>
                <li>Disambiguation with entity types</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e7b71',
          notes: ''
        },
        {
          id: 60,
          title: '14. Entity-Centric Rewriting: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Prompt Template</h3>
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

              <h3 style={{ marginTop: '30px' }}>Implementation</h3>
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
          backgroundColor: '#1e7b71',
          notes: ''
        },
        {
          id: 61,
          title: '14. Entity-Centric Rewriting: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Before:</strong> "jaguar speed"<br />
                <strong>After:</strong> "Jaguar (animal:Panthera onca) top speed; exclude Jaguar (brand:automobile manufacturer)"
              </div>

              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Weaknesses / Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Requires knowledge graph/entity database</li>
                <li>Complex entity linking system needed</li>
                <li>May struggle with novel/unknown entities</li>
                <li>Risk of incorrect disambiguation</li>
                <li>Higher implementation complexity</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e7b71',
          notes: ''
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
              <h3>Make time references explicit and current, ensuring retrieval of temporally relevant information and reducing outdated results</h3>

              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Reduces stale/outdated search results</li>
                <li>Significant relevance gains for time-sensitive topics</li>
                <li>Improves specificity of versioned documentation</li>
                <li>Handles implicit temporal context automatically</li>
              </ul>

              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>News and current events</li>
                <li>Product pricing and availability queries</li>
                <li>API documentation and changelog searches</li>
                <li>Policy and regulation updates</li>
                <li>Documentation with versioning</li>
              </ul>
            </div>
          ),
          backgroundColor: '#341e7b',
          notes: ''
        },
        {
          id: 63,
          title: '15. Temporal Rewriting: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Resolves and enhances temporal aspects through time normalization + recency boost</h3>

              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li>Relative time normalization (e.g., "yesterday" → specific date)</li>
                <li>Adding explicit date ranges</li>
                <li>Boosting recency for time-sensitive topics</li>
                <li>Resolving ambiguous temporal references</li>
              </ul>
            </div>
          ),
          backgroundColor: '#341e7b',
          notes: ''
        },
        {
          id: 64,
          title: '15. Temporal Rewriting: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Prompt Template</h3>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {`"""
Normalize any relative time expressions in the query below to absolute dates.
Then add an explicit date range that is most relevant to the query.
Format: original query + "from [start date] to [end date]"
Current date: 2025-11-07
Query: {query}
"""`}
              </pre>

              <h3 style={{ marginTop: '30px' }}>Implementation</h3>
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
          backgroundColor: '#341e7b',
          notes: ''
        },
        {
          id: 65,
          title: '15. Temporal Rewriting: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Before:</strong> "latest OpenAI API quotas"<br />
                <strong>After:</strong> "OpenAI API rate limits as of 2025-11; changes in 2024–2025"
              </div>

              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Weaknesses / Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Requires fresh/updated index</li>
                <li>May miss historically relevant information</li>
                <li>Needs fine-tuning for specific domains</li>
                <li>Can over-specify time constraints</li>
              </ul>
            </div>
          ),
          backgroundColor: '#341e7b',
          notes: ''
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
              <h3>Translate lay terms to domain jargon and fields, improving retrieval precision for specialized knowledge domains</h3>

              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>High precision in specialized corpora</li>
                <li>Better matching to expert terminology</li>
                <li>Improved semantic relevance</li>
                <li>Efficient filtering via field constraints</li>
              </ul>

              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Legal research and case law</li>
                <li>Medical/healthcare information retrieval</li>
                <li>Financial/investment analysis</li>
                <li>Technical engineering documentation</li>
                <li>Scientific literature search</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b3b1e',
          notes: ''
        },
        {
          id: 67,
          title: '16. Domain-Specific Rewriting: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Maps query terms to domain-specific terminology and applies field-specific filters</h3>

              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li>Specialized domain lexicons/ontologies</li>
                <li>Field-specific constraints and filters</li>
                <li>Terminology standardization</li>
                <li>Expert-guided jargon translation</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b3b1e',
          notes: ''
        },
        {
          id: 68,
          title: '16. Domain-Specific Rewriting: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Prompt Template</h3>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                {`"""
Rewrite the following query using domain-appropriate
terminology for {domain}. Preserve the original intent
but use precise technical terms, standard classifications,
and appropriate field constraints.
Query: {query}
Domain: {domain}
"""`}
              </pre>

              <h3 style={{ marginTop: '30px' }}>Implementation</h3>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
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
          backgroundColor: '#7b3b1e',
          notes: ''
        },
        {
          id: 69,
          title: '16. Domain-Specific Rewriting: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Before:</strong> "blood thinner side effects"<br />
                <strong>After:</strong> "anticoagulant adverse effects: warfarin, DOACs (apixaban, rivaroxaban), hemorrhagic complications field:pharmacology"
              </div>

              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Weaknesses / Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Requires domain-specific knowledge/lexicons</li>
                <li>Harder to maintain across evolving domains</li>
                <li>May over-specialize simple queries</li>
                <li>Needs separate models per domain</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b3b1e',
          notes: ''
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
              <h3>Match rewriting strategy to specific task types, improving retrieval performance by applying the most appropriate transformation for each intent</h3>

              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Centralized policy control</li>
                <li>Highly scalable across domains</li>
                <li>Adapts to varied query patterns</li>
                <li>Can optimize for different metrics per intent</li>
              </ul>

              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                <li>Mixed query workloads</li>
                <li>Systems with agent-based routing</li>
                <li>Enterprise search with diverse needs</li>
                <li>Multi-domain knowledge bases</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b1e35',
          notes: ''
        },
        {
          id: 71,
          title: '17. Intent Classification: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Classify query into intent categories, then apply specific strategies</h3>

              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li>Lookup → entity-centric rewriting</li>
                <li>Compare → multi-query & structured expansion</li>
                <li>Troubleshoot → step-back & domain-specific</li>
                <li>Generate → template-based rewriting</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b1e35',
          notes: ''
        },
        {
          id: 72,
          title: '17. Intent Classification: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Prompt Template</h3>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
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

              <h3 style={{ marginTop: '30px' }}>Implementation</h3>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
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
          backgroundColor: '#7b1e35',
          notes: ''
        },
        {
          id: 73,
          title: '17. Intent Classification: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Before:</strong> "fix 500 error nginx"<br />
                <strong>After:</strong> Intent: troubleshoot → "Nginx 500 error troubleshooting steps for Ubuntu 22.04 - common causes, log file analysis, and configuration fixes"
              </div>

              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Weaknesses / Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Requires high-accuracy intent model</li>
                <li>Complex intent taxonomy needs maintenance</li>
                <li>Multi-intent queries challenging</li>
                <li>More engineering overhead</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b1e35',
          notes: ''
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
              <h3>Maximize diversity among rewrites to cover multiple facets of a query, ensuring comprehensive coverage for ambiguous topics</h3>

              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Comprehensive coverage across facets</li>
                <li>Improves recall for complex topics</li>
                <li>Better handles ambiguous queries</li>
                <li>Surfaces different perspectives</li>
              </ul>

              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Broad, ambiguous topics</li>
                <li>Exploratory search needs</li>
                <li>Multiple potential interpretations</li>
                <li>Need for high recall across facets</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e7b3e',
          notes: ''
        },
        {
          id: 75,
          title: '18. Diverse Multi-Query Rewriting: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Generate queries with explicit diversity constraints</h3>

              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li>Produce multiple rewrites covering different angles</li>
                <li>Apply diversity penalties to minimize overlap</li>
                <li>Use controlled sampling techniques</li>
                <li>Penalize n-gram overlap between queries</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e7b3e',
          notes: ''
        },
        {
          id: 76,
          title: '18. Diverse Multi-Query Rewriting: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Prompt Template</h3>
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

              <h3 style={{ marginTop: '30px' }}>Implementation</h3>
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
          backgroundColor: '#1e7b3e',
          notes: ''
        },
        {
          id: 77,
          title: '18. Diverse Multi-Query Rewriting: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Before:</strong> "data governance framework"<br />
                <strong>After:</strong>
                <ul style={{ fontSize: '1.2rem', marginTop: '10px' }}>
                  <li>1. "enterprise data governance policies and standards documentation"</li>
                  <li>2. "software tools implementing data governance controls"</li>
                  <li>3. "regulatory compliance aspects of information management"</li>
                  <li>4. "case studies on successful data stewardship programs"</li>
                  <li>5. "metrics for measuring data governance effectiveness"</li>
                  <li>6. "risk management in data governance implementation"</li>
                </ul>
              </div>

              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Weaknesses / Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Fusion/dedup cost</li>
                <li>Requires careful reranking</li>
                <li>Higher token usage</li>
                <li>More complex implementation</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e7b3e',
          notes: ''
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
              <h3>Learn from user interactions (clicks, ratings, session data) to intelligently refine queries based on what worked for similar users</h3>

              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Improves over time with usage</li>
                <li>User-aligned and personalized</li>
                <li>Adapts to changing content/trends</li>
                <li>Leverages collective intelligence</li>
              </ul>

              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Production systems with telemetry</li>
                <li>High-volume search applications</li>
                <li>Domain-specific search engines</li>
                <li>Customer-facing RAG systems</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e2b7b',
          notes: ''
        },
        {
          id: 79,
          title: '19. Feedback-Based Rewriting: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Uses feedback signals to improve queries</h3>

              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li>Promote terms/entities from clicked documents</li>
                <li>Suppress noise terms with low engagement</li>
                <li>Apply collaborative filtering techniques</li>
                <li>Incrementally update term weights/boosts</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e2b7b',
          notes: ''
        },
        {
          id: 80,
          title: '19. Feedback-Based Rewriting: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Prompt Template</h3>
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

              <h3 style={{ marginTop: '30px' }}>Implementation</h3>
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
          backgroundColor: '#1e2b7b',
          notes: ''
        },
        {
          id: 81,
          title: '19. Feedback-Based Rewriting: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Before:</strong> "vector database comparison"<br />
                <strong>After:</strong> "vector database comparison HNSW vs IVF FAISS Qdrant Milvus efSearch time-accuracy tradeoff"<br />
                <p style={{ marginTop: '10px' }}>User clicked on docs about HNSW/FAISS index types and specific DB implementations</p>
              </div>

              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Weaknesses / Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Requires data pipeline/telemetry</li>
                <li>Cold-start issues for new queries</li>
                <li>Privacy considerations for feedback</li>
                <li>Can amplify popularity biases</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e2b7b',
          notes: ''
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
              <h3>Use compact, reusable prompts to standardize query rewrites across different types of questions with minimal engineering effort</h3>

              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Fast to deploy with minimal setup</li>
                <li>Highly flexible across query types</li>
                <li>Easy to update and refine</li>
                <li>Works with any capable LLM</li>
              </ul>

              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Quick wins without complex pipelines</li>
                <li>Rapid prototyping and testing</li>
                <li>Low engineering implementation lift</li>
                <li>Minimal infrastructure changes</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e7b53',
          notes: ''
        },
        {
          id: 83,
          title: '20. Prompt-Based Rewriting: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Utilizes well-crafted system prompts and few-shot examples</h3>

              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li>Enforce consistent style and structure</li>
                <li>Include critical information fields</li>
                <li>Guide LLM to maintain specific patterns</li>
                <li>Apply guardrails against hallucination</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e7b53',
          notes: ''
        },
        {
          id: 84,
          title: '20. Prompt-Based Rewriting: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Prompt Template</h3>
              <pre style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
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

              <h3 style={{ marginTop: '30px' }}>Implementation</h3>
              <pre style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
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
          backgroundColor: '#1e7b53',
          notes: ''
        },
        {
          id: 85,
          title: '20. Prompt-Based Rewriting: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Before:</strong> "api auth"<br />
                <strong>After:</strong> "OAuth 2.0 authentication for Acme API docs 2024, guide/tutorial with implementation examples"
              </div>

              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Weaknesses / Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Prompt drift over time</li>
                <li>Quality varies by LLM capability</li>
                <li>Less structured than rule-based systems</li>
                <li>Harder to enforce constraints</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1e7b53',
          notes: ''
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
              <h3>Choose the best rewrite strategy per query context, optimizing performance across diverse query types</h3>

              <h3 style={{ color: '#2ecc71', marginTop: '40px' }}>Benefits</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px     ' }}>
                <li>Balanced quality/cost optimization</li>
                <li>Robust across diverse query types</li>
                <li>Self-improving with feedback</li>
                <li>Flexible scaling of compute resources</li>
              </ul>

              <h3 style={{ marginTop: '40px' }}>When to Use</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px ' }}>
                <li>Heterogeneous query workloads</li>
                <li>Variable cost/latency constraints</li>
                <li>Production systems with metrics</li>
                <li>Complex RAG pipelines with multiple strategies</li>
              </ul>
            </div>
          ),
          backgroundColor: '#521e7b',
          notes: ''
        },
        {
          id: 87,
          title: '21. Adaptive Query Rewriting: How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Uses a policy model or agent to select among strategies</h3>

              <ul style={{ fontSize: '1.2rem', marginTop: '30px' }}>
                <li>Query characteristics (length, ambiguity)</li>
                <li>Conversation context/history</li>
                <li>Past performance signals</li>
                <li>Cost/latency budgets</li>
              </ul>
            </div>
          ),
          backgroundColor: '#521e7b',
          notes: ''
        },
        {
          id: 88,
          title: '21. Adaptive Query Rewriting: Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Prompt Template</h3>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
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

              <h3 style={{ marginTop: '30px' }}>Implementation</h3>
              <pre style={{ fontSize: '1rem', lineHeight: '1.6' }}>
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
          backgroundColor: '#521e7b',
          notes: ''
        },
        {
          id: 89,
          title: '21. Adaptive Query Rewriting: Example & Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example</h3>
              <div style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '20px', borderRadius: '5px', fontSize: '1.2rem' }}>
                <strong>Query:</strong> "apple"<br />
                <strong>Policy:</strong> Ambiguous short query → Clarification Strategy<br />
                <strong>Result:</strong> "Did you mean: 1) Apple Inc. products/services, 2) apple fruit nutrition/recipes, or 3) Apple software/iOS?"<br /><br />
                <strong>Query:</strong> "compare MongoDB vs PostgreSQL for IoT data"<br />
                <strong>Policy:</strong> Complex multi-entity → Decomposition Strategy
              </div>

              <h3 style={{ color: '#e74c3c', marginTop: '40px' }}>Weaknesses / Considerations</h3>
              <ul style={{ fontSize: '1.2rem', marginTop: '10px   ' }}>
                <li>Requires policy training</li>
                <li>Needs evaluation feedback loop</li>
                <li>More complex orchestration</li>
                <li>Cold-start challenges</li>
              </ul>
            </div>
          ),
          backgroundColor: '#521e7b',
          notes: ''
        }
      ]
    }
  ]
};

