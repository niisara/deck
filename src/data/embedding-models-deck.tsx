import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const embeddingModelsDeck: Deck = {
  id: 'embedding-models-deck',
  name: '9 Embedding Models Cheat Sheet',
  description: 'Quick-reference for RAG, semantic search, clustering, and more',
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
          title: '9 Embedding Models Cheat Sheet',
          content: (
            <div style={{ textAlign: 'left' }}>
              <h2>Quick-reference for RAG, semantic search, clustering, and more</h2>
              <div style={{ display: 'flex', gap: '30px', marginTop: '50px' }}>
                <SvgIcon iconName="duo-brain" sizeName="4x" style={{ color: '#4fc3f7' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-network-wired" sizeName="4x" style={{ color: '#81c784' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-database" sizeName="4x" style={{ color: '#ffb74d' }} darkModeInvert={true} />
              </div>
              <p style={{ fontSize: '0.9em', marginTop: '40px', color: '#aaa' }}>2025 Edition - A comprehensive guide to modern embedding models</p>
            </div>
          ),
          backgroundColor: '#0d1117',
          notes: 'Title slide for the 9 Embedding Models cheat sheet covering OpenAI, BGE, E5, Instructor, and GTE models'
        },
        {
          id: 2,
          title: 'Model Families Overview',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px', fontSize: '0.9em', maxWidth: '900px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', backgroundColor: 'rgba(79, 195, 247, 0.1)', borderRadius: '10px' }}>
                  <SvgIcon iconName="duo-cloud" sizeName="2x" style={{ color: '#4fc3f7' }} darkModeInvert={true} />
                  <div>
                    <strong>OpenAI</strong>
                    <div style={{ fontSize: '0.85em', color: '#aaa' }}>text-embedding-3-small/large</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '10px' }}>
                  <SvgIcon iconName="duo-code-branch" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} />
                  <div>
                    <strong>BGE (BAAI)</strong>
                    <div style={{ fontSize: '0.85em', color: '#aaa' }}>Base/Large EN v1.5</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', backgroundColor: 'rgba(255, 183, 77, 0.1)', borderRadius: '10px' }}>
                  <SvgIcon iconName="duo-building" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} />
                  <div>
                    <strong>E5 (Microsoft)</strong>
                    <div style={{ fontSize: '0.85em', color: '#aaa' }}>Base/Large</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', backgroundColor: 'rgba(186, 104, 200, 0.1)', borderRadius: '10px' }}>
                  <SvgIcon iconName="duo-graduation-cap" sizeName="2x" style={{ color: '#ba68c8' }} darkModeInvert={true} />
                  <div>
                    <strong>Instructor (HKU NLP)</strong>
                    <div style={{ fontSize: '0.85em', color: '#aaa' }}>Instructor-XL</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '15px', backgroundColor: 'rgba(240, 98, 146, 0.1)', borderRadius: '10px', gridColumn: '1 / -1', maxWidth: '400px' }}>
                  <SvgIcon iconName="duo-shop" sizeName="2x" style={{ color: '#f06292' }} darkModeInvert={true} />
                  <div>
                    <strong>GTE (Alibaba)</strong>
                    <div style={{ fontSize: '0.85em', color: '#aaa' }}>Base/Large</div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '40px', fontSize: '0.85em', color: '#ccc' }}>
                <p><SvgIcon iconName="duo-info-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '8px' }} darkModeInvert={true} />
                Each model includes: Type, Best Use Case, Strengths, Weaknesses, Typical Chunk Size, and Notes</p>
              </div>
            </div>
          ),
          backgroundColor: '#161b22',
          notes: 'Overview of the 5 main model families covered in this cheat sheet'
        }
      ]
    },
    {
      id: 'openai',
      title: 'OpenAI Models',
      slides: [
        {
          id: 3,
          title: 'OpenAI text-embedding-3-small',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-cloud" sizeName="3x" style={{ color: '#4fc3f7' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-coins" sizeName="2x" style={{ color: '#ffd54f' }} darkModeInvert={true} />
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#4fc3f7' }}>Model Type:</strong> Proprietary embedding model (bi-encoder), 1536-dim vectors via API
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#81c784' }}>Best Use Case:</strong> Cost-efficient large-scale retrieval, clustering, classification, anomaly detection
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#aed581' }}>Strengths:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.5' }}>
                    <li>Very low cost ($0.02 per 1M tokens)</li>
                    <li>Good quality vs price</li>
                    <li>Stable API & tooling</li>
                  </ul>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#ff6b6b' }}>Weaknesses:</strong> Vendor lock-in, data residency/compliance considerations, requires API access
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong> 400–800 tokens (can go higher; practical chunking for RAG efficiency)
                </div>
                <div style={{ fontSize: '0.85em', padding: '15px', backgroundColor: 'rgba(79, 195, 247, 0.1)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '8px' }} darkModeInvert={true} />
                  <strong>Notes:</strong> Successor to ada-002 with improved quality. Use cosine similarity with normalized vectors. Great for high-volume indexing where budget matters.
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a2332',
          notes: 'OpenAI text-embedding-3-small: Cost-efficient model perfect for large-scale retrieval'
        },
        {
          id: 4,
          title: 'OpenAI text-embedding-3-large',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-cloud" sizeName="3x" style={{ color: '#4fc3f7' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-star" sizeName="2x" style={{ color: '#ffd54f' }} darkModeInvert={true} />
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#4fc3f7' }}>Model Type:</strong> Proprietary embedding model (bi-encoder), 3072-dim vectors via API
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#81c784' }}>Best Use Case:</strong> Highest-quality retrieval/semantic search, multilingual scenarios, sensitive ranking
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#aed581' }}>Strengths:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.5' }}>
                    <li>Top-tier accuracy across many tasks</li>
                    <li>Robust multilingual support</li>
                    <li>Strong ecosystem</li>
                  </ul>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#ff6b6b' }}>Weaknesses:</strong> Higher cost ($0.13 per 1M tokens) vs small; API dependency
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong> 400–800 tokens (can handle larger; tune for latency/cost)
                </div>
                <div style={{ fontSize: '0.85em', padding: '15px', backgroundColor: 'rgba(79, 195, 247, 0.1)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '8px' }} darkModeInvert={true} />
                  <strong>Notes:</strong> Choose when accuracy is paramount and budget allows. Normalize embeddings; cosine similarity recommended. Pair with reranking for best end-to-end RAG.
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a2f3f',
          notes: 'OpenAI text-embedding-3-large: Premium quality model for accuracy-critical applications'
        }
      ]
    },
    {
      id: 'bge',
      title: 'BGE Models',
      slides: [
        {
          id: 5,
          title: 'BGE Base (bge-base-en-v1.5)',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-code-branch" sizeName="3x" style={{ color: '#81c784' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-unlock" sizeName="2x" style={{ color: '#aed581' }} darkModeInvert={true} />
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#4fc3f7' }}>Model Type:</strong> Open-source bi-encoder, 768-dim, max sequence length ~512 tokens
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#81c784' }}>Best Use Case:</strong> General-purpose English retrieval, semantic similarity on a budget
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#aed581' }}>Strengths:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.5' }}>
                    <li>Strong MTEB scores for size</li>
                    <li>Easy to self-host</li>
                    <li>Broad community support</li>
                  </ul>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#ff6b6b' }}>Weaknesses:</strong> 512-token limit (truncation risk on long docs); may need reranker for precision
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong> 200–400 tokens (to avoid truncation and keep latency low)
                </div>
                <div style={{ fontSize: '0.85em', padding: '15px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '8px' }} darkModeInvert={true} />
                  <strong>Notes:</strong> v1.5 improves similarity distribution; instructions optional for queries. Normalize embeddings for cosine similarity. For best results in RAG: retrieve top-K with BGE, rerank with bge-reranker-large.
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a2e1f',
          notes: 'BGE Base: Strong open-source model for general-purpose English retrieval'
        },
        {
          id: 6,
          title: 'BGE Large (bge-large-en-v1.5)',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-code-branch" sizeName="3x" style={{ color: '#81c784' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-trophy" sizeName="2x" style={{ color: '#ffd54f' }} darkModeInvert={true} />
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#4fc3f7' }}>Model Type:</strong> Open-source bi-encoder, 1024-dim, max sequence length ~512 tokens
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#81c784' }}>Best Use Case:</strong> High-quality open-source retrieval and semantic search without vendor lock-in
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#aed581' }}>Strengths:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.5' }}>
                    <li>SOTA-level performance on MTEB/C-MTEB among open-source embedders</li>
                  </ul>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#ff6b6b' }}>Weaknesses:</strong> 512-token cap; larger model requires more memory/compute than base
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong> 200–400 tokens
                </div>
                <div style={{ fontSize: '0.85em', padding: '15px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '8px' }} darkModeInvert={true} />
                  <strong>Notes:</strong> Use normalize_embeddings=True for cosine. Add query instruction only if it empirically helps (v1.5 often fine without). Combine with bge-reranker for accuracy-critical ranking.
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1e3a25',
          notes: 'BGE Large: Top-performing open-source model with SOTA-level MTEB performance'
        }
      ]
    },
    {
      id: 'e5',
      title: 'E5 Models',
      slides: [
        {
          id: 7,
          title: 'E5 Base',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-building" sizeName="3x" style={{ color: '#ffb74d' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-globe" sizeName="2x" style={{ color: '#64b5f6' }} darkModeInvert={true} />
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#4fc3f7' }}>Model Type:</strong> Open-source bi-encoder, 768-dim, max sequence length ~512 tokens
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#81c784' }}>Best Use Case:</strong> Retrieval and STS with explicit query/document formatting; multilingual (multilingual-e5-base)
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#aed581' }}>Strengths:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.5' }}>
                    <li>Strong zero-shot performance</li>
                    <li>Multilingual option supports ~100 languages</li>
                  </ul>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#ff6b6b' }}>Weaknesses:</strong> Requires prefixes ("query:", "passage:") for best results; 512-token cap
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong> 200–400 tokens
                </div>
                <div style={{ fontSize: '0.85em', padding: '15px', backgroundColor: 'rgba(255, 183, 77, 0.1)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '8px' }} darkModeInvert={true} />
                  <strong>Notes:</strong> Variants: e5-base-v2 (English), multilingual-e5-base (multilingual). Train/finetune uses low temperature; expect high cosine values; rely on relative ranking. Always prepend the proper prefix to avoid performance drops.
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#2e2416',
          notes: 'E5 Base: Microsoft model with strong zero-shot performance and multilingual support'
        },
        {
          id: 8,
          title: 'E5 Large',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-building" sizeName="3x" style={{ color: '#ffb74d' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-chart-line" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} />
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#4fc3f7' }}>Model Type:</strong> Open-source bi-encoder, 1024-dim, max sequence length ~512 tokens
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#81c784' }}>Best Use Case:</strong> Higher-accuracy retrieval with E5 formatting, multilingual available (multilingual-e5-large)
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#aed581' }}>Strengths:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.5' }}>
                    <li>Improved performance over base</li>
                    <li>Strong BEIR/MTEB results</li>
                    <li>Multilingual variants</li>
                  </ul>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#ff6b6b' }}>Weaknesses:</strong> Heavier than base; strict prefixing; 512-token cap
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong> 200–400 tokens
                </div>
                <div style={{ fontSize: '0.85em', padding: '15px', backgroundColor: 'rgba(255, 183, 77, 0.1)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '8px' }} darkModeInvert={true} />
                  <strong>Notes:</strong> Use "query:" and "passage:" consistently (even for non-English). Normalize embeddings; use cosine similarity. Consider reranking for mission-critical relevance.
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#3a2e1a',
          notes: 'E5 Large: Higher-accuracy E5 model with strong BEIR/MTEB results'
        }
      ]
    },
    {
      id: 'instructor',
      title: 'Instructor',
      slides: [
        {
          id: 9,
          title: 'Instructor XL (hkunlp/instructor-xl)',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-graduation-cap" sizeName="3x" style={{ color: '#ba68c8' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-comments" sizeName="2x" style={{ color: '#64b5f6' }} darkModeInvert={true} />
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#4fc3f7' }}>Model Type:</strong> Instruction-finetuned bi-encoder, ~768-dim, max sequence length ~512 tokens
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#81c784' }}>Best Use Case:</strong> Task/domain-specific embeddings via natural-language instructions (classification, retrieval, clustering)
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#aed581' }}>Strengths:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.5' }}>
                    <li>Task-aware vectors without finetuning</li>
                    <li>Flexible prompts tailor embeddings to objectives</li>
                  </ul>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#ff6b6b' }}>Weaknesses:</strong> Requires crafting consistent instructions; heavier and slower than base models
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong> 200–400 tokens
                </div>
                <div style={{ fontSize: '0.85em', padding: '15px', backgroundColor: 'rgba(186, 104, 200, 0.1)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '8px' }} darkModeInvert={true} />
                  <strong>Notes:</strong> Input format: [[instruction, text]]; keep instructions stable across corpora. Normalize embeddings; cosine similarity. Great for specialized domains when generic embedders underperform.
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#2a1e33',
          notes: 'Instructor XL: Unique instruction-based model for task-specific embeddings'
        }
      ]
    },
    {
      id: 'gte',
      title: 'GTE Models',
      slides: [
        {
          id: 10,
          title: 'GTE Base (thenlper/gte-base)',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-shop" sizeName="3x" style={{ color: '#f06292' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-gauge" sizeName="2x" style={{ color: '#4fc3f7' }} darkModeInvert={true} />
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#4fc3f7' }}>Model Type:</strong> Open-source bi-encoder, 768-dim, max sequence length ~512 tokens
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#81c784' }}>Best Use Case:</strong> Efficient English retrieval/STS with strong all-around performance
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#aed581' }}>Strengths:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.5' }}>
                    <li>Competitive MTEB performance</li>
                    <li>Lightweight and fast</li>
                    <li>Easy to deploy</li>
                  </ul>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#ff6b6b' }}>Weaknesses:</strong> English-focused; 512-token cap; may trail BGE-large on some retrieval tasks
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong> 200–400 tokens
                </div>
                <div style={{ fontSize: '0.85em', padding: '15px', backgroundColor: 'rgba(240, 98, 146, 0.1)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '8px' }} darkModeInvert={true} />
                  <strong>Notes:</strong> Normalize for cosine similarity. Good default for self-hosted RAG when resources are limited. Use reranking for tighter precision on top-K.
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#331a29',
          notes: 'GTE Base: Lightweight and efficient model for resource-constrained deployments'
        },
        {
          id: 11,
          title: 'GTE Large (thenlper/gte-large)',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-shop" sizeName="3x" style={{ color: '#f06292' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-rocket" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} />
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#4fc3f7' }}>Model Type:</strong> Open-source bi-encoder, 1024-dim, max sequence length ~512 tokens
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#81c784' }}>Best Use Case:</strong> Higher-quality English retrieval and semantic similarity with moderate compute
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#aed581' }}>Strengths:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.5' }}>
                    <li>Strong MTEB scores</li>
                    <li>Efficient for its quality</li>
                    <li>Widely supported in vector DBs</li>
                  </ul>
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#ff6b6b' }}>Weaknesses:</strong> English-only; 512-token cap; may need reranker for best precision
                </div>
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong> 200–400 tokens
                </div>
                <div style={{ fontSize: '0.85em', padding: '15px', backgroundColor: 'rgba(240, 98, 146, 0.1)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '8px' }} darkModeInvert={true} />
                  <strong>Notes:</strong> Normalize embeddings; cosine similarity. Solid open-source alternative when you want quality close to BGE-large without vendor ties.
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#3d1e2e',
          notes: 'GTE Large: High-quality open-source alternative to BGE-large'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 12,
          title: 'Model Selection Guide',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ maxWidth: '900px', fontSize: '0.75em' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <SvgIcon iconName="duo-map-location" sizeName="2x" darkModeInvert={true} />
                  How to Choose Your Embedding Model
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                  <div style={{ padding: '15px', backgroundColor: 'rgba(79, 195, 247, 0.1)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-coins" sizeName="2x" style={{ color: '#ffd54f' }} darkModeInvert={true} />
                      <strong>Budget-Conscious?</strong>
                    </div>
                    <p>→ OpenAI text-embedding-3-small or BGE Base</p>
                  </div>
                  
                  <div style={{ padding: '15px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-trophy" sizeName="2x" style={{ color: '#ffd54f' }} darkModeInvert={true} />
                      <strong>Need Top Accuracy?</strong>
                    </div>
                    <p>→ OpenAI text-embedding-3-large or BGE Large</p>
                  </div>
                  
                  <div style={{ padding: '15px', backgroundColor: 'rgba(255, 183, 77, 0.1)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-globe" sizeName="2x" style={{ color: '#64b5f6' }} darkModeInvert={true} />
                      <strong>Multilingual Support?</strong>
                    </div>
                    <p>→ E5 multilingual variants or OpenAI 3-large</p>
                  </div>
                  
                  <div style={{ padding: '15px', backgroundColor: 'rgba(186, 104, 200, 0.1)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-server" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} />
                      <strong>Self-Hosted Required?</strong>
                    </div>
                    <p>→ BGE, E5, or GTE models</p>
                  </div>
                  
                  <div style={{ padding: '15px', backgroundColor: 'rgba(240, 98, 146, 0.1)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-graduation-cap" sizeName="2x" style={{ color: '#ba68c8' }} darkModeInvert={true} />
                      <strong>Specialized Domain?</strong>
                    </div>
                    <p>→ Instructor XL with custom instructions</p>
                  </div>
                  
                  <div style={{ padding: '15px', backgroundColor: 'rgba(100, 181, 246, 0.1)', borderRadius: '8px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <SvgIcon iconName="duo-gauge" sizeName="2x" style={{ color: '#4fc3f7' }} darkModeInvert={true} />
                      <strong>Limited Resources?</strong>
                    </div>
                    <p>→ GTE Base or BGE Base</p>
                  </div>
                </div>

                <div style={{ padding: '20px', backgroundColor: 'rgba(129, 199, 132, 0.15)', borderRadius: '8px', marginTop: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <SvgIcon iconName="duo-circle-info" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} />
                    <strong style={{ fontSize: '1.1em' }}>Pro Tips</strong>
                  </div>
                  <ul style={{ lineHeight: '1.8', marginLeft: '20px' }}>
                    <li>Always normalize embeddings and use cosine similarity</li>
                    <li>For best RAG results: combine retrieval with reranking</li>
                    <li>Most open-source models have 512-token limit → chunk at 200–400 tokens</li>
                    <li>Test with your specific use case and data distribution</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f1419',
          notes: 'Summary slide with guidance on selecting the right embedding model for different use cases'
        }
      ]
    }
  ]
};
