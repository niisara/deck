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
          center: true,
          title: '9 Embedding Models Cheat Sheet',
          content: (
            <div style={{ marginTop: '18px' }}>
              <h2>Quick-reference for RAG, semantic search, clustering, and more</h2>
              <p style={{ fontSize: '2.2rem', marginTop: '18px' }}>2025 Edition - A comprehensive guide to modern embedding models</p>
              <p><strong>Prepared by:</strong> Nisar A</p>
              <p><strong>Date:</strong> November 7, 2025</p>
              <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
            </div>
          ),
          backgroundColor: '#7b377d',
          notes: ''
        },
        {
          id: 2,
          title: 'Model Families Overview',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px', fontSize: '0.9em' }}>
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
                    <strong>BGE (BAAI)</strong>
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
                    <strong>GTE (Alibaba)</strong>
                    <div style={{ fontSize: '1.4rem' }}>Base/Large</div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '40px', fontSize: '2rem' }}>
                <p><SvgIcon iconName="duo-info-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '8px' }} darkModeInvert={true} />
                  Each model includes: Type, Best Use Case, Strengths, Weaknesses, Typical Chunk Size, and Notes</p>
              </div>
            </div>
          ),
          backgroundColor: '#7b377d',
          notes: ''
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
          icon: { name: 'duo-cloud' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#4fc3f7' }}>Model Type:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Proprietary embedding model (bi-encoder), 1536-dim vectors via API</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#81c784' }}>Best Use Case:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Cost-efficient large-scale retrieval, clustering, classification, anomaly detection</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong>
                  <span style={{ fontSize: '1.2rem' }}>400–800 tokens (can go higher; practical chunking for RAG efficiency)</span>
                </div>
                <div style={{ padding: '15px', backgroundColor: 'rgba(79, 195, 247, 0.1)', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                    <strong>Notes:</strong>
                  </div>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Successor to ada-002 with improved quality</li>
                    <li>Use cosine similarity with normalized vectors</li>
                    <li>Great for high-volume indexing where budget matters</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#365383',
          notes: ''
        },
        {
          id: 4,
          title: 'Strengths and Weaknesses',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
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
              </div>
            </div>
          ),
          backgroundColor: '#365383',
          notes: ''
        }
      ]
    },
    {
      id: 'openai',
      title: 'OpenAI Models',
      slides: [
        {
          id: 5,
          title: 'OpenAI text-embedding-3-large',
          icon: { name: 'duo-cloud' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#4fc3f7' }}>Model Type:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Proprietary embedding model (bi-encoder), 3072-dim vectors via API</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#81c784' }}>Best Use Case:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Highest-quality retrieval/semantic search, multilingual scenarios, sensitive ranking</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong>
                  <span style={{ fontSize: '1.2rem' }}>400–800 tokens (can handle larger; tune for latency/cost)</span>
                </div>
                <div style={{ padding: '15px', backgroundColor: '#954d4d', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                    <strong>Notes:</strong>
                  </div>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Choose when accuracy is paramount and budget allows</li>
                    <li>Normalize embeddings; cosine similarity recommended</li>
                    <li>Pair with reranking for best end-to-end RAG</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#833636',
          notes: ''
        },
        {
          id: 6,
          title: 'Strengths and Weaknesses',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
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
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                    <strong>Weaknesses:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Higher cost ($0.13 per 1M tokens) vs small</li>
                    <li>API dependency</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#833636',
          notes: ''
        }
      ]
    },
    {
      id: 'bge',
      title: 'BGE Models',
      slides: [
        {
          id: 7,
          title: 'BGE Base (bge-base-en-v1.5)',
          icon: { name: 'duo-code-branch' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#4fc3f7' }}>Model Type:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Open-source bi-encoder, 768-dim, max sequence length ~512 tokens</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#81c784' }}>Best Use Case:</strong>
                  <span style={{ fontSize: '1.2rem' }}>General-purpose English retrieval, semantic similarity on a budget</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong>
                  <span style={{ fontSize: '1.2rem' }}>200–400 tokens (to avoid truncation and keep latency low)</span>
                </div>
                <div style={{ padding: '15px', backgroundColor: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                    <strong>Notes:</strong>
                  </div>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>v1.5 improves similarity distribution; instructions optional for queries</li>
                    <li>Normalize embeddings for cosine similarity</li>
                    <li>For best results in RAG: retrieve top-K with BGE, rerank with bge-reranker-large</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#838036',
          notes: ''
        },
        {
          id: 8,
          title: 'Strengths and Weaknesses',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                    <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Strong MTEB scores for size</li>
                    <li>Easy to self-host</li>
                    <li>Broad community support</li>
                  </ul>
                </div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                    <strong>Weaknesses:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>512-token limit (truncation risk on long docs)</li>
                    <li>May need reranker for precision</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#838036',
          notes: ''
        }
      ]
    },
    {
      id: 'bge',
      title: 'BGE Models',
      slides: [
        {
          id: 9,
          title: 'BGE Large (bge-large-en-v1.5)',
          icon: { name: 'duo-code-branch' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#4fc3f7' }}>Model Type:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Open-source bi-encoder, 1024-dim, max sequence length ~512 tokens</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#81c784' }}>Best Use Case:</strong>
                  <span style={{ fontSize: '1.2rem' }}>High-quality open-source retrieval and semantic search without vendor lock-in</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong>
                  <span style={{ fontSize: '1.2rem' }}>200–400 tokens</span>
                </div>
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
              </div>
            </div>
          ),
          backgroundColor: '#835536',
          notes: ''
        },
        {
          id: 10,
          title: 'Strengths and Weaknesses',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                    <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>SOTA-level performance on MTEB/C-MTEB among open-source embedders</li>
                  </ul>
                </div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                    <strong>Weaknesses:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>512-token cap</li>
                    <li>Larger model requires more memory/compute than base</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#835536',
          notes: ''
        }
      ]
    },
    {
      id: 'e5',
      title: 'E5 Models',
      slides: [
        {
          id: 11,
          title: 'E5 Base',
          icon: { name: 'duo-building' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#4fc3f7' }}>Model Type:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Open-source bi-encoder, 768-dim, max sequence length ~512 tokens</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#81c784' }}>Best Use Case:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Retrieval and STS with explicit query/document formatting; multilingual (multilingual-e5-base)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong>
                  <span style={{ fontSize: '1.2rem' }}>200–400 tokens</span>
                </div>
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
              </div>
            </div>
          ),
          backgroundColor: '#36833f',
          notes: ''
        },
        {
          id: 12,
          title: 'Strengths and Weaknesses',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                    <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Strong zero-shot performance</li>
                    <li>Multilingual option supports ~100 languages</li>
                  </ul>
                </div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                    <strong>Weaknesses:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Requires prefixes ("query:", "passage:") for best results</li>
                    <li>512-token cap</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#36833f',
          notes: ''
        }
      ]
    },
    {
      id: 'e5',
      title: 'E5 Models',
      slides: [
        {
          id: 13,
          title: 'E5 Large',
          icon: { name: 'duo-building' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#4fc3f7' }}>Model Type:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Open-source bi-encoder, 1024-dim, max sequence length ~512 tokens</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#81c784' }}>Best Use Case:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Higher-accuracy retrieval with E5 formatting, multilingual available (multilingual-e5-large)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong>
                  <span style={{ fontSize: '1.2rem' }}>200–400 tokens</span>
                </div>
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
              </div>
            </div>
          ),
          backgroundColor: '#365283',
          notes: ''
        },
        {
          id: 14,
          title: 'Strengths and Weaknesses',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
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
              </div>
            </div>
          ),
          backgroundColor: '#365283',
          notes: ''
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
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#4fc3f7' }}>Model Type:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Instruction-finetuned bi-encoder, ~768-dim, max sequence length ~512 tokens</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#81c784' }}>Best Use Case:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Task/domain-specific embeddings via natural-language instructions (classification, retrieval, clustering)</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong>
                  <span style={{ fontSize: '1.2rem' }}>200–400 tokens</span>
                </div>
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
              </div>
            </div>
          ),
          backgroundColor: '#7d3683',
          notes: ''
        },
        {
          id: 16,
          title: 'Strengths and Weaknesses',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} />
                    <strong>Strengths:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Task-aware vectors without finetuning</li>
                    <li>Flexible prompts tailor embeddings to objectives</li>
                  </ul>
                </div>
                <div>
                  <p style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '2rem' }}>
                    <SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} />
                    <strong>Weaknesses:</strong></p>
                  <ul style={{ fontSize: '1.2rem' }}>
                    <li>Requires crafting consistent instructions</li>
                    <li>Heavier and slower than base models</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#7d3683',
          notes: ''
        }
      ]
    },
    {
      id: 'gte',
      title: 'GTE Models',
      slides: [
        {
          id: 17,
          title: 'GTE Base (thenlper/gte-base)',
          icon: { name: 'duo-shop' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#4fc3f7' }}>Model Type:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Open-source bi-encoder, 768-dim, max sequence length ~512 tokens</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#81c784' }}>Best Use Case:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Efficient English retrieval/STS with strong all-around performance</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong>
                  <span style={{ fontSize: '1.2rem' }}>200–400 tokens</span>
                </div>
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
              </div>
            </div>
          ),
          backgroundColor: '#367d83',
          notes: ''
        },
        {
          id: 18,
          title: 'Strengths and Weaknesses',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
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
              </div>
            </div>
          ),
          backgroundColor: '#367d83',
          notes: ''
        }
      ]
    },
    {
      id: 'gte',
      title: 'GTE Models',
      slides: [
        {
          id: 19,
          title: 'GTE Large (thenlper/gte-large)',
          icon: { name: 'duo-shop' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#4fc3f7' }}>Model Type:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Open-source bi-encoder, 1024-dim, max sequence length ~512 tokens</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#81c784' }}>Best Use Case:</strong>
                  <span style={{ fontSize: '1.2rem' }}>Higher-quality English retrieval and semantic similarity with moderate compute</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '28px' }}>
                  <strong style={{ color: '#ffb74d' }}>Typical Chunk Size:</strong>
                  <span style={{ fontSize: '1.2rem' }}>200–400 tokens</span>
                </div>
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
              </div>
            </div>
          ),
          backgroundColor: '#468336',
          notes: ''
        },
        {
          id: 20,
          title: 'Strengths and Weaknesses',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
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
              </div>
            </div>
          ),
          backgroundColor: '#468336',
          notes: ''
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
              </div>
              <div style={{ fontSize: '2rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-map-location" sizeName="2x" darkModeInvert={true} />
                  How to Choose Your Embedding Model
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
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
              </div>
            </div>
          ),
          backgroundColor: '#4c3683',
          notes: ''
        },
        {
          id: 22,
          title: 'Pro Tips',
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}>
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
          ),
          backgroundColor: '#4c3683',
          notes: ''
        }
      ]
    }
  ]
};
