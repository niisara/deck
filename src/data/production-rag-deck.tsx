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
              <h3 style={{ fontSize: '1.2em', marginTop: '30px', color: '#4fc3f7' }}>
                Proven designs for reliable, scalable Retrieval-Augmented Generation
              </h3>
              <div style={{ marginTop: '50px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
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
            <div style={{ textAlign: 'left', fontSize: '0.8em' }}>
              <h2 style={{ marginBottom: '20px', alignItems: 'center' }}>
                <SvgIcon iconName="duo-clipboard-list" sizeName="2x" style={{ marginRight: '10px', verticalAlign: 'middle' }} darkModeInvert={true} />
                Exploring 11 production-ready RAG architecture patterns
              </h2>
              <p style={{ marginBottom: '25px', fontSize: '0.95em' }}>
                As RAG systems move from prototypes to production deployments, teams need proven architectural patterns that address common challenges:
              </p>
              <ul>
                <li>Retrieval accuracy and precision</li>
                <li>Context handling and efficiency</li>
                <li>Answer quality and hallucination mitigation</li>
                <li>Scalability and operational reliability</li>
              </ul>
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
                    <div style={{ padding: '8px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>5. RAG with HyDE (Hypothetical Document Embeddings)</div>
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
                    <div style={{ padding: '8px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>11. RAG with Context Compression / Summarization</div>
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '0.8em', marginTop: '50px', color: '#aaa' }}>Today we'll explore 11 production-tested patterns with detailed implementation cheat sheets and selection guidance.</p>
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
            <div style={{ textAlign: 'left', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Components:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>LLM (text generation)</li>
                    <li>Embedding model (text → vectors)</li>
                    <li>Chunker/splitter (document processing)</li>
                    <li>Vector database (similarity search)</li>
                    <li>Retriever (fetch relevant chunks)</li>
                    <li>Prompt template (format instructions)</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Retrieval Strategy:</span></strong></p>
                  <p style={{ marginTop: '5px' }}>Semantic Top-K with optional hybrid lexical search:</p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Encode query as vector embedding</li>
                    <li>Find closest K chunks by similarity</li>
                    <li>Optional BM25/keyword boost</li>
                    <li>Fixed K (typically 3-5 chunks)</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Context Packing Approach:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Simple concatenation of K chunks</li>
                    <li>Basic prompt instructions</li>
                    <li>Optional citation formatting</li>
                    <li>Static context ordering (most → least similar)</li>
                    <li>Manual token count management</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Best Fit Use Cases:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Internal knowledge bases / FAQs</li>
                    <li>Small to medium document collections</li>
                    <li>Proof of concept implementations</li>
                    <li>Narrow domain-specific assistants</li>
                    <li>Applications needing simple explanations</li>
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
                    <li>Works well for straightforward queries</li>
                    <li>Fast to prototype and iterate</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Rigid recall/precision tradeoffs</li>
                    <li>Brittle on vague/ambiguous queries</li>
                    <li>Limited by chunk quality/boundaries</li>
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
            <div style={{ textAlign: 'left', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Components:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Base retriever (vector DB + embeddings)</li>
                    <li>Reranker (e.g., Cohere/Voyage/bge-reranker)</li>
                    <li>Rank fusion mechanism</li>
                    <li>Citation system with source metadata</li>
                    <li>Score threshold filters</li>
                    <li>Hybrid search options (lexical + semantic)</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Retrieval Strategy:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Retrieve broad initial set (N=100–300)</li>
                    <li>Rerank with cross-encoder model for precision</li>
                    <li>Select top M highest-scored chunks</li>
                    <li>Optional filtering by relevance threshold</li>
                    <li>Optional diversity optimization</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Context Packing Approach:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Pack top-M highest scoring passages</li>
                    <li>Include source metadata and relevance scores</li>
                    <li>Ordered by reranker score (not original retrieval)</li>
                    <li>Optionally include confidence metrics</li>
                    <li>Weighted citation based on relevance scores</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Best Fit Use Cases:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Enterprise QA with large knowledge bases</li>
                    <li>Support search requiring high precision</li>
                    <li>Applications prioritizing answer quality over latency</li>
                    <li>Technical documentation search</li>
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
                    <li>Improves answer quality with better context</li>
                    <li>Can mitigate hallucinations with higher quality retrieval</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Extra cost/latency from reranking step</li>
                    <li>Needs quality reranker matched to domain</li>
                    <li>May require more engineering/tuning</li>
                    <li>Initial broad recall still affects ceiling performance</li>
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
            <div style={{ textAlign: 'left', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Components:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Rewriter LLM (canonicalize/expand/clarify)</li>
                    <li>Query router/taxonomy classifier</li>
                    <li>Domain-specific dictionaries/synonyms</li>
                    <li>Logging system for evaluation</li>
                    <li>Standard retrieval & generation components</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Retrieval Strategy:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Transform user query before retrieval</li>
                    <li>Normalize entities, expand synonyms</li>
                    <li>"Step-back" for broad queries</li>
                    <li>Optional hybrid retrieval with lexical search</li>
                    <li>Can combine with other retrieval methods</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Context Packing Approach:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Include original + rewritten query in prompt</li>
                    <li>Provide transparency for transformations</li>
                    <li>Similar to basic RAG otherwise</li>
                    <li>May include transformation reasoning</li>
                    <li>Optional metadata filters from query analysis</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Best Fit Use Cases:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Customer support/portal applications</li>
                    <li>Systems with domain-specific terminology</li>
                    <li>Public-facing interfaces with varied phrasing</li>
                    <li>Multi-lingual front-ends</li>
                    <li>Applications needing query normalization</li>
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
                    <li>Enables domain-specific transformations</li>
                    <li>Robust to different user phrasing styles</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Possible over-constraint or intent drift</li>
                    <li>Additional latency from rewriting step</li>
                    <li>Needs careful auditing and evaluation</li>
                    <li>Can amplify biases in original query</li>
                    <li>Requires tuning rewriting strategies</li>
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
            <div style={{ textAlign: 'left', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Components:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>LLM for query variation generation</li>
                    <li>Hybrid retrievers (embedding + keyword)</li>
                    <li>Reciprocal rank fusion algorithm</li>
                    <li>Deduplication pipeline</li>
                    <li>Multi-retrieval orchestrator</li>
                    <li>Citation/source tracking system</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Retrieval Strategy:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Generate diverse query variations (3-5)</li>
                    <li>Create facet/intent variants</li>
                    <li>Parallel retrieval for each variant</li>
                    <li>Fusion of results using RRF algorithm</li>
                    <li>Deduplicate similar chunks</li>
                    <li>Optionally weight by source credibility</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Context Packing Approach:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Deduplicate overlapping chunks</li>
                    <li>Diversify by source when possible</li>
                    <li>Include brief per-chunk rationale</li>
                    <li>Balance breadth vs. depth of coverage</li>
                    <li>Optional metadata for each source</li>
                    <li>Track which query variant retrieved each chunk</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Best Fit Use Cases:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Research-oriented queries</li>
                    <li>Multi-faceted or complex questions</li>
                    <li>Broad knowledge bases with diverse content</li>
                    <li>Educational applications</li>
                    <li>Natural language search interfaces</li>
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
                    <li>Reduces dependency on perfect chunking</li>
                    <li>Mitigates vocabulary mismatch issues</li>
                    <li>Handles ambiguous queries effectively</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Increased API calls and token usage</li>
                    <li>Higher latency (multiple retrieval steps)</li>
                    <li>Potential for duplicated information</li>
                    <li>More complex fusion tuning required</li>
                    <li>Difficult to explain result rankings</li>
                    <li>Deduplication can lose important nuance</li>
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
            <div style={{ textAlign: 'left', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Components:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Hypothetical document generator (LLM)</li>
                    <li>Embedding model for hypo-docs</li>
                    <li>Vector database for real documents</li>
                    <li>Answer generation LLM</li>
                    <li>Optional blend with standard search</li>
                    <li>Hypo-doc quality evaluator (optional)</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Retrieval Strategy:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Generate hypothetical answer/document from query</li>
                    <li>Embed hypothetical content (not the query)</li>
                    <li>Search by intent/answer similarity</li>
                    <li>Retrieve real documents with similar embeddings</li>
                    <li>Optional fusion with direct query search</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Context Packing Approach:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Use retrieved real documents for final context</li>
                    <li>Usually exclude hypothetical content from prompt</li>
                    <li>Include original query for transparency</li>
                    <li>Order by similarity to hypothetical document</li>
                    <li>Citation links to original sources</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Best Fit Use Cases:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Sparse-label domains with little training</li>
                    <li>Cold-start document collections</li>
                    <li>Web/FAQ search with varied phrasing</li>
                    <li>Technical content with jargon</li>
                    <li>Multi-lingual document retrieval</li>
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
                    <li>Works with any existing vector DB</li>
                    <li>More natural search by predicted answer</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Can mislead if LLM is out-of-domain</li>
                    <li>Extra latency from LLM generation step</li>
                    <li>Quality depends on hypo-doc generation</li>
                    <li>Increased API costs (additional LLM call)</li>
                    <li>May introduce bias from LLM priors</li>
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
            <div style={{ textAlign: 'left', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Components:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Two-level chunking system (child/parent)</li>
                    <li>Hierarchical document processor</li>
                    <li>Child chunk embedding pipeline</li>
                    <li>Parent document retriever/store</li>
                    <li>Optional sibling chunk fetcher</li>
                    <li>Windowing mechanism</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Retrieval Strategy:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Index small child chunks for precise matching</li>
                    <li>Search for matching child chunks</li>
                    <li>Retrieve corresponding parent documents</li>
                    <li>Optional sibling retrieval for related context</li>
                    <li>Return parent content (not child chunks)</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Context Packing Approach:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Pack full parent spans for broader context</li>
                    <li>Optional sliding window for overlapping context</li>
                    <li>Include document structure metadata</li>
                    <li>Manage length via document windowing</li>
                    <li>Metadata-enhanced citations</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Best Fit Use Cases:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Technical documentation and manuals</li>
                    <li>Legal and regulatory documents</li>
                    <li>Academic papers and research</li>
                    <li>Codebases and technical specs</li>
                    <li>Long-form structured content</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Balances precise matching with rich context</li>
                    <li>Improves answer coherence and accuracy</li>
                    <li>Reduces hallucinations with fuller context</li>
                    <li>Preserves document structure/hierarchy</li>
                    <li>Works well for nested/complex documents</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>More complex ingestion pipeline</li>
                    <li>Higher token consumption (larger contexts)</li>
                    <li>Additional storage requirements</li>
                    <li>Potential for context dilution</li>
                    <li>Requires careful parent size tuning</li>
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
            <div style={{ textAlign: 'left', fontSize: '0.7em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Components:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Knowledge graph (e.g., Neo4j)</li>
                    <li>Entity/relationship extraction</li>
                    <li>Vector database (semantic search)</li>
                    <li>Graph query engine (e.g., Cypher)</li>
                    <li>Text2Cypher or Cypher templates</li>
                    <li>Community detection/summarization</li>
                    <li>Path processors and result mergers</li>
                  </ul>
                </div>
                <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Retrieval Strategy:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Graph-enhanced vector search</li>
                    <li>Entity linking to relevant nodes</li>
                    <li>Multi-hop traversal with depth control</li>
                    <li>Graph + vector hybrid ranking</li>
                    <li>Global/local community detection</li>
                    <li>Cypher query generation from natural language</li>
                    <li>Salient path extraction and reasoning</li>
                  </ul>
                </div>
                <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Context Packing Approach:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Include path structure and relationships</li>
                    <li>Entity-focused contextual assembly</li>
                    <li>Incorporate community summaries</li>
                    <li>Add schema/ontology context</li>
                    <li>Include graph visualization references</li>
                    <li>Structured knowledge triples with source citation</li>
                    <li>Hierarchical context from graph structure</li>
                  </ul>
                </div>
                <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Best Fit Use Cases:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Compliance and regulatory applications</li>
                    <li>Enterprise knowledge management</li>
                    <li>Complex research analysis</li>
                    <li>Healthcare/biomedical knowledge</li>
                    <li>Financial relationship analysis</li>
                    <li>Multi-document summarization</li>
                    <li>Legal reasoning applications</li>
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
                    <li>Global context accessibility</li>
                    <li>Entity-centric knowledge integration</li>
                    <li>Structured knowledge representation</li>
                    <li>Better handling of complex questions</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                    <li>Heavy ingestion/ontology requirements</li>
                    <li>Higher complexity in maintenance</li>
                    <li>Entity extraction quality dependencies</li>
                    <li>Graph schema design challenges</li>
                    <li>Computational overhead for traversals</li>
                    <li>Text2Cypher reliability issues</li>
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
            <div style={{ textAlign: 'left', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Components:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Agent planner (ReAct, Plan-Execute)</li>
                    <li>Toolset (SQL, APIs, search engines, code)</li>
                    <li>External knowledge sources (databases, APIs)</li>
                    <li>Working memory/state management</li>
                    <li>Verification module/guardrails</li>
                    <li>Tool-use capable LLM</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Retrieval Strategy:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Tool-augmented retrieval (SQL, API calls)</li>
                    <li>Iterative planning with decomposition</li>
                    <li>Multi-tool orchestration</li>
                    <li>Verification of information accuracy</li>
                    <li>Feedback loops and self-correction</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Context Packing Approach:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Scratchpad traces for tool executions</li>
                    <li>Selective tool outputs (summarized)</li>
                    <li>Citation of retrieved information</li>
                    <li>State tracking across reasoning steps</li>
                    <li>Memory of prior interactions/steps</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Best Fit Use Cases:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Business intelligence assistants</li>
                    <li>Operations/SRE copilots</li>
                    <li>Research analysis agents</li>
                    <li>Data exploration interfaces</li>
                    <li>Complex workflow automation</li>
                    <li>System integration assistants</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Handles complex, multi-step tasks</li>
                    <li>Accesses live/external data sources</li>
                    <li>Flexible orchestration capabilities</li>
                    <li>Autonomous problem-solving</li>
                    <li>Adaptability to changing requirements</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Increased latency (multiple tool calls)</li>
                    <li>Higher cost per interaction</li>
                    <li>Monitoring/debugging complexity</li>
                    <li>Error propagation risks</li>
                    <li>Requires robust guardrails</li>
                    <li>Tool integration maintenance</li>
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
            <div style={{ textAlign: 'left', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Components:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Fine-tuned domain-specific LLM</li>
                    <li>Base/general LLM for retrieval</li>
                    <li>Retriever (vector store + embedding model)</li>
                    <li>Evaluator for quality control</li>
                    <li>Schema validators</li>
                    <li>Rollout controls/deployment framework</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Retrieval Strategy:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Standard advanced retrieval approaches</li>
                    <li>Domain-optimized retrieval parameters</li>
                    <li>Tighter similarity thresholds (domain focus)</li>
                    <li>May utilize domain-specific embeddings</li>
                    <li>Can leverage domain knowledge in fine-tuning</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Context Packing Approach:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Leaner prompts (less instruction overhead)</li>
                    <li>Schema-aware formatting instructions</li>
                    <li>Domain-specific templates</li>
                    <li>Few-shot patterns for complex structures</li>
                    <li>Potentially lower context requirements</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Best Fit Use Cases:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>High-volume domain QA systems</li>
                    <li>Structured output generation</li>
                    <li>Regulated industries with format requirements</li>
                    <li>Domain-specific copilots</li>
                    <li>Knowledge-intensive professional services</li>
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
                    <li>Lower prompt overhead at scale</li>
                    <li>Improved domain-specific reasoning</li>
                    <li>Reduced hallucinations on familiar patterns</li>
                    <li>Cost efficiency at volume (less context needed)</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Higher development and MLOps burden</li>
                    <li>Version drift between model and retrieval</li>
                    <li>More complex governance and evaluation</li>
                    <li>Ongoing training data collection needed</li>
                    <li>Less adaptable to new domains without retraining</li>
                    <li>More rigid response patterns</li>
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
            <div style={{ textAlign: 'left', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Components:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Iterative retriever (multi-hop)</li>
                    <li>Hypothesis generator (CoT reasoning)</li>
                    <li>Question decomposition module</li>
                    <li>Verifier (fact-checking)</li>
                    <li>Stopping criteria logic</li>
                    <li>Working memory/workspace</li>
                    <li>Evidence tracker</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Retrieval Strategy:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Self-ask/multi-hop retrieval loops</li>
                    <li>Plan-execute-refine sequences</li>
                    <li>Breadth-then-depth exploration</li>
                    <li>Chain-of-thought reasoning to formulate subqueries</li>
                    <li>Dynamic stopping based on completeness</li>
                    <li>Progressive evidence gathering</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Context Packing Approach:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Maintain working context set across turns</li>
                    <li>Prune redundant/irrelevant information</li>
                    <li>Merge complementary evidence</li>
                    <li>Track evidence chains/provenance</li>
                    <li>Keep intermediate reasoning steps</li>
                    <li>Include subquestion/answer history</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Best Fit Use Cases:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Legal reasoning and case research</li>
                    <li>Academic/scientific literature review</li>
                    <li>Investigative analysis</li>
                    <li>Multi-step troubleshooting</li>
                    <li>Complex financial/strategic analysis</li>
                    <li>Intelligence gathering/synthesis tasks</li>
                  </ul>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Solves compositional/multi-hop questions</li>
                    <li>Handles complex reasoning chains</li>
                    <li>Can discover unexpected relationships</li>
                    <li>Combines evidence from multiple sources</li>
                    <li>Higher accuracy on complex queries</li>
                    <li>More comprehensive answers with evidence trails</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Higher latency/cost (multiple LLM calls)</li>
                    <li>Risk of reasoning drift/hallucination chains</li>
                    <li>More complex implementation and debugging</li>
                    <li>Needs guardrails/stop conditions</li>
                    <li>Harder to evaluate intermediate steps</li>
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
            <div style={{ textAlign: 'left', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Components:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Contextual retrieval (contextualized embeddings)</li>
                    <li>Contextual BM25 (contextual lexical matching)</li>
                    <li>Context compressors (extractive/abstractive)</li>
                    <li>Reranker (prioritize relevance)</li>
                    <li>Chunking system with context-awareness</li>
                    <li>LLM for compression/summarization</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-magnifying-glass" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Retrieval Strategy:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Add context to chunks before embedding</li>
                    <li>Hybrid recall with contextual embeddings + BM25</li>
                    <li>Compress retrieved content to salient spans</li>
                    <li>Rerank passages by relevance to query</li>
                    <li>Pack 10-20 high-relevance passages</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-book-open" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Context Packing Approach:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Include snippets with source lines/citations</li>
                    <li>Provide concise summaries with context</li>
                    <li>Use reference markers for traceability</li>
                    <li>Prioritize high signal-to-noise ratio</li>
                    <li>Optimize token density with compressed information</li>
                  </ul>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Best Fit Use Cases:</span></strong></p>
                  <ul style={{ fontSize: '0.9em', lineHeight: '1.5', marginTop: '5px', paddingLeft: '20px' }}>
                    <li>Enterprise systems with huge document collections</li>
                    <li>Long document analysis (academic papers, legal docs)</li>
                    <li>Latency or cost-sensitive applications</li>
                    <li>Cases requiring high-accuracy with evidence</li>
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
                    <li>Better handling of long documents</li>
                    <li>More reliable answers with richer context</li>
                  </ul>
                </div>
                <div style={{ flex: 1, padding: '12px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
                  <ul style={{ fontSize: '0.85em', lineHeight: '1.4', marginTop: '5px', paddingLeft: '18px' }}>
                    <li>Higher preprocessing complexity and cost</li>
                    <li>Potential loss of nuance in compression</li>
                    <li>Additional latency during retrieval step</li>
                    <li>Contextual embedding generation overhead</li>
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
            <div style={{ textAlign: 'left', fontSize: '0.7em' }}>
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
                  <table style={{ fontSize: '0.85em', width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid rgba(79, 195, 247, 0.5)' }}>
                        <th style={{ textAlign: 'left', fontWeight: 'bold', padding: '5px 0', paddingRight: '10px' }}>Pattern</th>
                        <th style={{ textAlign: 'left', fontWeight: 'bold', padding: '5px 0', paddingRight: '10px' }}>Accuracy</th>
                        <th style={{ textAlign: 'left', fontWeight: 'bold', padding: '5px 0', paddingRight: '10px' }}>Latency</th>
                        <th style={{ textAlign: 'left', fontWeight: 'bold', padding: '5px 0', paddingRight: '10px' }}>Dev</th>
                        <th style={{ textAlign: 'left', fontWeight: 'bold', padding: '5px 0' }}>Ops</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Basic RAG', acc: '★★☆', lat: '★★★', dev: '★☆☆', ops: '★☆☆' },
                        { name: 'Re-Ranking', acc: '★★★', lat: '★★☆', dev: '★★☆', ops: '★★☆' },
                        { name: 'Query Rewriting', acc: '★★★', lat: '★★☆', dev: '★★☆', ops: '★★☆' },
                        { name: 'Multi-Query', acc: '★★★', lat: '★☆☆', dev: '★★☆', ops: '★★☆' },
                        { name: 'Parent-Child', acc: '★★★', lat: '★★☆', dev: '★★☆', ops: '★★☆' },
                        { name: 'Graph-Based', acc: '★★★', lat: '★☆☆', dev: '★★★', ops: '★★★' },
                      ].map((row, i) => (
                        <tr key={i}>
                          <td style={{ padding: '3px 0', paddingRight: '10px' }}>{row.name}</td>
                          <td style={{ textAlign: 'left', padding: '3px 0', paddingRight: '10px' }}>{row.acc}</td>
                          <td style={{ textAlign: 'left', padding: '3px 0', paddingRight: '10px' }}>{row.lat}</td>
                          <td style={{ textAlign: 'left', padding: '3px 0', paddingRight: '10px' }}>{row.dev}</td>
                          <td style={{ textAlign: 'left', padding: '3px 0' }}>{row.ops}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
