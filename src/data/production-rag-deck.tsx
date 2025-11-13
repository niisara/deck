import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const productionRagDeck: Deck = {
  id: 'production-rag-deck',
  name: '11 Production RAG Architecture Patterns',
  description: 'Proven designs for reliable, scalable Retrieval-Augmented Generation',
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
          title: '11 Production RAG Architecture Patterns',
          content: (
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ marginBottom: '20px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="2x" style={{ marginRight: '15px', verticalAlign: 'middle' }} darkModeInvert={true} />
                11 Production RAG Architecture Patterns
              </h2>
              <h3 style={{ fontSize: '1.2em', marginTop: '30px', color: '#4fc3f7' }}>
                Proven designs for reliable, scalable Retrieval-Augmented Generation
              </h3>
              <div style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', maxWidth: '800px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px 20px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-magnifying-glass" sizeName="2x" darkModeInvert={true} />
                  <span>Retrieval accuracy</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px 20px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-book-open" sizeName="2x" darkModeInvert={true} />
                  <span>Context handling</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px 20px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-shield-check" sizeName="2x" darkModeInvert={true} />
                  <span>Answer quality</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px 20px', background: 'rgba(186, 104, 200, 0.2)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-gauge-high" sizeName="2x" darkModeInvert={true} />
                  <span>Scalability</span>
                </div>
              </div>
              <p style={{ fontSize: '0.8em', marginTop: '50px', color: '#aaa' }}>
                Enterprise AI Architecture Team • November 7, 2025
              </p>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Title slide introducing 11 production RAG architecture patterns'
        },
        {
          id: 2,
          title: 'Agenda & Patterns Overview',
          content: (
            <div style={{ textAlign: 'left', maxWidth: '1000px', fontSize: '0.8em' }}>
              <h2 style={{ marginBottom: '20px' }}>
                <SvgIcon iconName="duo-clipboard-list" sizeName="2x" style={{ marginRight: '10px', verticalAlign: 'middle' }} darkModeInvert={true} />
                Exploring 11 production-ready RAG architecture patterns
              </h2>
              <p style={{ marginBottom: '25px', fontSize: '0.95em' }}>
                As RAG systems move from prototypes to production deployments, teams need proven architectural patterns that address common challenges
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <h3 style={{ color: '#4fc3f7', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-star" sizeName="1x" darkModeInvert={true} />
                    Foundation Patterns
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9em' }}>
                    <div style={{ padding: '8px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>1. Basic RAG (Single Retrieve → Generate)</div>
                    <div style={{ padding: '8px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>2. RAG with Re-Ranking</div>
                  </div>
                </div>
                <div>
                  <h3 style={{ color: '#81c784', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-magnifying-glass" sizeName="1x" darkModeInvert={true} />
                    Query Optimization Patterns
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9em' }}>
                    <div style={{ padding: '8px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>3. RAG with Query Rewriting</div>
                    <div style={{ padding: '8px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>4. RAG with Multi-Query Retrieval</div>
                    <div style={{ padding: '8px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>5. RAG with HyDE</div>
                  </div>
                </div>
                <div>
                  <h3 style={{ color: '#ffb74d', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-brain" sizeName="1x" darkModeInvert={true} />
                    Advanced Retrieval Patterns
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9em' }}>
                    <div style={{ padding: '8px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>6. RAG with Parent–Child Retrieval</div>
                    <div style={{ padding: '8px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>7. RAG with Graph-Based Retrieval</div>
                    <div style={{ padding: '8px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>8. RAG with External Tools / Agents</div>
                  </div>
                </div>
                <div>
                  <h3 style={{ color: '#ba68c8', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-sliders" sizeName="1x" darkModeInvert={true} />
                    Hybrid & Optimization Patterns
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9em' }}>
                    <div style={{ padding: '8px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>9. RAG + Fine-Tuned Model Hybrid</div>
                    <div style={{ padding: '8px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>10. RAG with Multi-Step Retrieval Loops</div>
                    <div style={{ padding: '8px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>11. RAG with Context Compression</div>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Overview of all 11 patterns organized by category'
        }
      ]
    },
    {
      id: 'pattern-1',
      title: 'Basic RAG',
      slides: [
        {
          id: 3,
          title: '1) Basic RAG (Single Retrieve → Generate)',
          icon: { name: 'duo-arrow-right' },
          content: (
            <div style={{ textAlign: 'left', maxWidth: '1000px', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Components:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>LLM (text generation)</li>
                    <li>Embedding model (text → vectors)</li>
                    <li>Chunker/splitter (document processing)</li>
                    <li>Vector database (similarity search)</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Retrieval Strategy:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Encode query as vector embedding</li>
                    <li>Find closest K chunks by similarity</li>
                    <li>Optional BM25/keyword boost</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Context Packing:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Fixed K (typically 3-5 chunks)</li>
                    <li>Simple concatenation of K chunks</li>
                    <li>Static context ordering (most → least similar)</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Fit Use Cases:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Internal knowledge bases / FAQs</li>
                    <li>Small to medium document collections</li>
                    <li>Proof of concept implementations</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Easiest to implement and understand</li>
                    <li>Low latency (single retrieval step)</li>
                    <li>Minimal operational complexity</li>
                    <li>Fast to prototype and iterate</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Rigid recall/precision tradeoffs</li>
                    <li>Brittle on vague/ambiguous queries</li>
                    <li>Struggles with multi-hop reasoning</li>
                    <li>Higher hallucination risk if evidence is thin</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: 'Pattern 1: Basic RAG - simplest foundation pattern'
        }
      ]
    },
    {
      id: 'pattern-2',
      title: 'RAG with Re-Ranking',
      slides: [
        {
          id: 4,
          title: '2) RAG with Re-Ranking',
          icon: { name: 'duo-list-ol' },
          content: (
            <div style={{ textAlign: 'left', maxWidth: '1000px', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Components:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Base retriever (vector DB + embeddings)</li>
                    <li>Reranker (e.g., Cohere/Voyage/bge-reranker)</li>
                    <li>Rank fusion mechanism</li>
                    <li>Score threshold filters</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Retrieval Strategy:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Retrieve broad initial set (N=100–300)</li>
                    <li>Rerank with cross-encoder model for precision</li>
                    <li>Select top M highest-scored chunks</li>
                    <li>Optional diversity optimization</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Context Packing:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Pack top-M highest scoring passages</li>
                    <li>Ordered by reranker score</li>
                    <li>Include confidence metrics</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Fit Use Cases:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Enterprise QA with large knowledge bases</li>
                    <li>Support search requiring high precision</li>
                    <li>Cases where hallucination reduction is critical</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Significant precision boost over basic RAG</li>
                    <li>Effectively filters noise in large corpora</li>
                    <li>Better handling of nuanced queries</li>
                    <li>Can mitigate hallucinations</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Extra cost/latency from reranking step</li>
                    <li>Needs quality reranker matched to domain</li>
                    <li>Increased complexity in debugging and monitoring</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Pattern 2: Adding re-ranking for precision boost'
        }
      ]
    },
    {
      id: 'pattern-3',
      title: 'RAG with Query Rewriting',
      slides: [
        {
          id: 5,
          title: '3) RAG with Query Rewriting',
          icon: { name: 'duo-pencil' },
          content: (
            <div style={{ textAlign: 'left', maxWidth: '1000px', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Components:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Rewriter LLM (canonicalize/expand/clarify)</li>
                    <li>Query router/taxonomy classifier</li>
                    <li>Domain-specific dictionaries/synonyms</li>
                    <li>Logging system for evaluation</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Retrieval Strategy:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Transform user query before retrieval</li>
                    <li>Normalize entities, expand synonyms</li>
                    <li>"Step-back" for broad queries</li>
                    <li>Can combine with other retrieval methods</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Context Packing:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Include original + rewritten query in prompt</li>
                    <li>Provide transparency for transformations</li>
                    <li>May include transformation reasoning</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Fit Use Cases:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Customer support/portal applications</li>
                    <li>Systems with domain-specific terminology</li>
                    <li>Multi-lingual front-ends</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Handles ambiguity and vague questions</li>
                    <li>Improves hit rate on messy user queries</li>
                    <li>Normalizes variations in terminology</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Possible over-constraint or intent drift</li>
                    <li>Additional latency from rewriting step</li>
                    <li>Can amplify biases in original query</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Pattern 3: Query rewriting for handling ambiguous queries'
        }
      ]
    },
    {
      id: 'pattern-4',
      title: 'RAG with Multi-Query Retrieval',
      slides: [
        {
          id: 6,
          title: '4) RAG with Multi-Query Retrieval',
          icon: { name: 'duo-copy' },
          content: (
            <div style={{ textAlign: 'left', maxWidth: '1000px', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Components:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>LLM for query variation generation</li>
                    <li>Hybrid retrievers (embedding + keyword)</li>
                    <li>Reciprocal rank fusion algorithm</li>
                    <li>Deduplication pipeline</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Retrieval Strategy:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Generate diverse query variations (3-5)</li>
                    <li>Parallel retrieval for each variant</li>
                    <li>Fusion of results using RRF algorithm</li>
                    <li>Deduplicate similar chunks</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Context Packing:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Deduplicate overlapping chunks</li>
                    <li>Diversify by source when possible</li>
                    <li>Track which query variant retrieved each chunk</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Fit Use Cases:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Research-oriented queries</li>
                    <li>Multi-faceted or complex questions</li>
                    <li>When recall matters more than latency</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Strong recall across diverse content</li>
                    <li>Robust to query phrasing variations</li>
                    <li>Better coverage of multi-faceted topics</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Increased API calls and token usage</li>
                    <li>Higher latency (multiple retrieval steps)</li>
                    <li>Difficult to explain result rankings</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: 'Pattern 4: Multi-query approach for better recall'
        }
      ]
    },
    {
      id: 'pattern-5',
      title: 'RAG with HyDE',
      slides: [
        {
          id: 7,
          title: '5) RAG with HyDE (Hypothetical Document Embeddings)',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left', maxWidth: '1000px', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Components:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Hypothetical document generator (LLM)</li>
                    <li>Embedding model for hypo-docs</li>
                    <li>Vector database for real documents</li>
                    <li>Answer generation LLM</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Retrieval Strategy:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Generate hypothetical answer/document from query</li>
                    <li>Embed hypothetical content (not the query)</li>
                    <li>Retrieve real documents with similar embeddings</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Context Packing:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Use retrieved real documents for final context</li>
                    <li>Exclude hypothetical content from prompt</li>
                    <li>Order by similarity to hypothetical document</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Fit Use Cases:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Sparse-label domains with little training</li>
                    <li>Cold-start document collections</li>
                    <li>Technical content with jargon</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Zero-shot retrieval performance gains</li>
                    <li>Better handling of ambiguous/short queries</li>
                    <li>Bridges vocabulary mismatch gap</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Can mislead if LLM is out-of-domain</li>
                    <li>Extra latency from LLM generation step</li>
                    <li>Increased API costs</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Pattern 5: HyDE for zero-shot performance improvement'
        }
      ]
    },
    {
      id: 'pattern-6',
      title: 'RAG with Parent–Child Retrieval',
      slides: [
        {
          id: 8,
          title: '6) RAG with Parent–Child Retrieval',
          icon: { name: 'duo-circle-nodes' },
          content: (
            <div style={{ textAlign: 'left', maxWidth: '1000px', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Components:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Two-level chunking system (child/parent)</li>
                    <li>Hierarchical document processor</li>
                    <li>Child chunk embedding pipeline</li>
                    <li>Parent document retriever/store</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Retrieval Strategy:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Index small child chunks for precise matching</li>
                    <li>Search for matching child chunks</li>
                    <li>Retrieve corresponding parent documents</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Context Packing:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Pack full parent spans for broader context</li>
                    <li>Include document structure metadata</li>
                    <li>Metadata-enhanced citations</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Fit Use Cases:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Technical documentation and manuals</li>
                    <li>Legal and regulatory documents</li>
                    <li>Academic papers and research</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Balances precise matching with rich context</li>
                    <li>Reduces hallucinations with fuller context</li>
                    <li>Preserves document structure/hierarchy</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>More complex ingestion pipeline</li>
                    <li>Higher token consumption</li>
                    <li>Additional storage requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Pattern 6: Parent-child for better context and coherence'
        }
      ]
    },
    {
      id: 'pattern-7',
      title: 'RAG with Graph-Based Retrieval',
      slides: [
        {
          id: 9,
          title: '7) RAG with Graph-Based Retrieval (GraphRAG)',
          icon: { name: 'duo-circle-nodes' },
          content: (
            <div style={{ textAlign: 'left', maxWidth: '1000px', fontSize: '0.7em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Components:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Knowledge graph (e.g., Neo4j)</li>
                    <li>Entity/relationship extraction</li>
                    <li>Graph query engine</li>
                    <li>Community detection/summarization</li>
                  </ul>
                </div>
                <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Retrieval Strategy:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Graph-enhanced vector search</li>
                    <li>Multi-hop traversal with depth control</li>
                    <li>Global/local community detection</li>
                    <li>Salient path extraction</li>
                  </ul>
                </div>
                <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Context Packing:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Include path structure and relationships</li>
                    <li>Entity-focused contextual assembly</li>
                    <li>Incorporate community summaries</li>
                  </ul>
                </div>
                <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Fit Use Cases:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Enterprise knowledge management</li>
                    <li>Healthcare/biomedical knowledge</li>
                    <li>Multi-document summarization</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
                <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                    <li>Explicit relationship understanding</li>
                    <li>Multi-hop reasoning capabilities</li>
                    <li>Explainable retrieval paths</li>
                    <li>Better handling of complex questions</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                    <li>Heavy ingestion/ontology requirements</li>
                    <li>Higher complexity in maintenance</li>
                    <li>Entity extraction quality dependencies</li>
                    <li>Higher operational expertise needed</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: 'Pattern 7: Graph-based approach for complex relationships'
        }
      ]
    },
    {
      id: 'pattern-8',
      title: 'RAG with External Tools / Agents',
      slides: [
        {
          id: 10,
          title: '8) RAG with External Tools / Agents',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ textAlign: 'left', maxWidth: '1000px', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Components:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Agent planner (ReAct, Plan-Execute)</li>
                    <li>Toolset (SQL, APIs, search engines, code)</li>
                    <li>Working memory/state management</li>
                    <li>Verification module/guardrails</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Retrieval Strategy:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Tool-augmented retrieval (SQL, API calls)</li>
                    <li>Iterative planning with decomposition</li>
                    <li>Multi-tool orchestration</li>
                    <li>Verification of information accuracy</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Context Packing:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Scratchpad traces for tool executions</li>
                    <li>State tracking across reasoning steps</li>
                    <li>Memory of prior interactions/steps</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Fit Use Cases:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Business intelligence assistants</li>
                    <li>Operations/SRE copilots</li>
                    <li>Complex workflow automation</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Handles complex, multi-step tasks</li>
                    <li>Accesses live/external data sources</li>
                    <li>Autonomous problem-solving</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Increased latency (multiple tool calls)</li>
                    <li>Higher cost per interaction</li>
                    <li>Requires robust guardrails</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Pattern 8: Agents with external tools for complex tasks'
        }
      ]
    },
    {
      id: 'pattern-9',
      title: 'RAG + Fine-Tuned Model Hybrid',
      slides: [
        {
          id: 11,
          title: '9) RAG + Fine-Tuned Model Hybrid',
          icon: { name: 'duo-brain-circuit' },
          content: (
            <div style={{ textAlign: 'left', maxWidth: '1000px', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Components:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Fine-tuned domain-specific LLM</li>
                    <li>Base/general LLM for retrieval</li>
                    <li>Retriever (vector store + embedding model)</li>
                    <li>Schema validators</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Retrieval Strategy:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Standard advanced retrieval approaches</li>
                    <li>Domain-optimized retrieval parameters</li>
                    <li>Tighter similarity thresholds (domain focus)</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Context Packing:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Leaner prompts (less instruction overhead)</li>
                    <li>Schema-aware formatting instructions</li>
                    <li>Potentially lower context requirements</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Fit Use Cases:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>High-volume domain QA systems</li>
                    <li>Regulated industries with format requirements</li>
                    <li>Financial/legal/healthcare applications</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Higher quality responses in specialized domains</li>
                    <li>Better formatting/style adherence</li>
                    <li>Cost efficiency at volume</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Higher development and MLOps burden</li>
                    <li>Version drift between model and retrieval</li>
                    <li>Less adaptable to new domains</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Pattern 9: Fine-tuned model hybrid for domain specialization'
        }
      ]
    },
    {
      id: 'pattern-10',
      title: 'RAG with Multi-Step Retrieval Loops',
      slides: [
        {
          id: 12,
          title: '10) RAG with Multi-Step Retrieval Loops',
          icon: { name: 'duo-arrows-rotate' },
          content: (
            <div style={{ textAlign: 'left', maxWidth: '1000px', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Components:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Iterative retriever (multi-hop)</li>
                    <li>Hypothesis generator (CoT reasoning)</li>
                    <li>Question decomposition module</li>
                    <li>Verifier (fact-checking)</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Retrieval Strategy:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Self-ask/multi-hop retrieval loops</li>
                    <li>Chain-of-thought reasoning to formulate subqueries</li>
                    <li>Progressive evidence gathering</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Context Packing:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Maintain working context set across turns</li>
                    <li>Track evidence chains/provenance</li>
                    <li>Include subquestion/answer history</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Fit Use Cases:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Legal reasoning and case research</li>
                    <li>Academic/scientific literature review</li>
                    <li>Complex financial/strategic analysis</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Solves compositional/multi-hop questions</li>
                    <li>Handles complex reasoning chains</li>
                    <li>More comprehensive answers with evidence trails</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Higher latency/cost (multiple LLM calls)</li>
                    <li>Risk of reasoning drift/hallucination chains</li>
                    <li>State management complexity</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: 'Pattern 10: Multi-step loops for complex reasoning'
        }
      ]
    },
    {
      id: 'pattern-11',
      title: 'RAG with Context Compression',
      slides: [
        {
          id: 13,
          title: '11) RAG with Context Compression / Summarization',
          icon: { name: 'duo-broom' },
          content: (
            <div style={{ textAlign: 'left', maxWidth: '1000px', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Components:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Contextual retrieval (contextualized embeddings)</li>
                    <li>Context compressors (extractive/abstractive)</li>
                    <li>Reranker (prioritize relevance)</li>
                    <li>LLM for compression/summarization</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Retrieval Strategy:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Add context to chunks before embedding</li>
                    <li>Hybrid recall with contextual embeddings + BM25</li>
                    <li>Compress retrieved content to salient spans</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Context Packing:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Include snippets with source lines/citations</li>
                    <li>Provide concise summaries with context</li>
                    <li>Optimize token density with compressed information</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Fit Use Cases:</strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Long document analysis (academic papers, legal docs)</li>
                    <li>Latency or cost-sensitive applications</li>
                    <li>Systems needing efficient token management</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Improved retrieval accuracy (up to 67% reduction in failure)</li>
                    <li>Higher signal density in context window</li>
                    <li>Lower token usage (cost efficiency)</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Higher preprocessing complexity and cost</li>
                    <li>Potential loss of nuance in compression</li>
                    <li>More complex deployment architecture</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Pattern 11: Context compression for efficiency'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 14,
          title: 'Pattern Selection Guide & Tradeoffs',
          content: (
            <div style={{ textAlign: 'left', maxWidth: '1100px', fontSize: '0.7em' }}>
              <h2 style={{ marginBottom: '20px' }}>
                <SvgIcon iconName="duo-map" sizeName="2x" style={{ marginRight: '10px', verticalAlign: 'middle' }} darkModeInvert={true} />
                Pattern Selection Guide & Tradeoffs
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <h3 style={{ color: '#4fc3f7', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="1x" darkModeInvert={true} />
                    Quick Pattern Selection Guide
                  </h3>
                  <ul style={{ fontSize: '0.95em', lineHeight: '1.7', listStyle: 'none', paddingLeft: 0 }}>
                    <li><strong>Start with:</strong> Basic RAG → add Re-Ranking as corpus grows</li>
                    <li><strong>Ambiguous queries:</strong> Query Rewriting + Multi-Query</li>
                    <li><strong>Zero-shot domains:</strong> HyDE (Hypothetical Document Embeddings)</li>
                    <li><strong>Long documents:</strong> Parent-Child + Context Compression</li>
                    <li><strong>Complex relations:</strong> Graph-Based (GraphRAG)</li>
                    <li><strong>Live data needs:</strong> External Tools/Agents</li>
                    <li><strong>High volume/format:</strong> RAG + Fine-Tuned Hybrid</li>
                    <li><strong>Deep reasoning:</strong> Multi-Step Retrieval Loops</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ color: '#81c784', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <SvgIcon iconName="duo-table" sizeName="1x" darkModeInvert={true} />
                    RAG Pattern Comparison Matrix
                  </h3>
                  <div style={{ fontSize: '0.85em' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '5px', marginBottom: '8px', fontWeight: 'bold', borderBottom: '2px solid rgba(79, 195, 247, 0.5)', paddingBottom: '5px' }}>
                      <div>Pattern</div>
                      <div style={{ textAlign: 'left' }}>Accuracy</div>
                      <div style={{ textAlign: 'left' }}>Latency</div>
                      <div style={{ textAlign: 'left' }}>Dev</div>
                      <div style={{ textAlign: 'left' }}>Ops</div>
                    </div>
                    {[
                      { name: 'Basic RAG', acc: '★★☆', lat: '★★★', dev: '★☆☆', ops: '★☆☆' },
                      { name: 'Re-Ranking', acc: '★★★', lat: '★★☆', dev: '★★☆', ops: '★★☆' },
                      { name: 'Query Rewriting', acc: '★★★', lat: '★★☆', dev: '★★☆', ops: '★★☆' },
                      { name: 'Multi-Query', acc: '★★★', lat: '★☆☆', dev: '★★☆', ops: '★★☆' },
                      { name: 'Parent-Child', acc: '★★★', lat: '★★☆', dev: '★★☆', ops: '★★☆' },
                      { name: 'Graph-Based', acc: '★★★', lat: '★☆☆', dev: '★★★', ops: '★★★' },
                    ].map((row, i) => (
                      <div key={i} style={{ display: 'contents' }}>
                        <div style={{ padding: '3px 0' }}>{row.name}</div>
                        <div style={{ textAlign: 'left', padding: '3px 0' }}>{row.acc}</div>
                        <div style={{ textAlign: 'left', padding: '3px 0' }}>{row.lat}</div>
                        <div style={{ textAlign: 'left', padding: '3px 0' }}>{row.dev}</div>
                        <div style={{ textAlign: 'left', padding: '3px 0' }}>{row.ops}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '8px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px', color: '#ffb74d' }}>
                  <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                  Next Steps for RAG Implementation
                </h3>
                <ul style={{ fontSize: '0.9em', lineHeight: '1.6', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <li>Instrument evaluation metrics (relevance, hallucination rate, latency)</li>
                  <li>A/B test retrieval parameters (K, fusion methods, reranker configs)</li>
                  <li>Implement feedback loops for continuous improvement</li>
                  <li>Consider pattern hybridization for complex use cases</li>
                  <li>Monitor data and LLM model drift</li>
                  <li>Scale gradually with observability best practices</li>
                </ul>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Summary with pattern selection guide, comparison matrix, and implementation next steps'
        }
      ]
    }
  ]
};
