import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const contextPackingDeck: Deck = {
  id: 'context-packing-techniques',
  name: '13 Context Packing Techniques',
  description: 'RAG and LLM-ready strategies to maximize answer quality within token limits',
  category: 'RAG',
  theme: 'black',
  slides: [],
  slideGroups: [
    {
      id: 'introduction',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          center: true,
          title: '13 Context Packing Techniques',
          content: (
            <div>
              <div style={{ fontSize: '2rem', color: '#e5c07b', marginBottom: '1rem' }}>
                RAG and LLM-ready strategies to maximize answer quality within token limits
              </div>
              <div style={{ fontSize: '1.2rem', lineHeight: '1.8', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div>
                  <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                  When and how to pack context for retrieval-augmented generation
                </div>
                <div>
                  <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                  Practical workflows for 13 techniques with examples
                </div>
                <div>
                  <SvgIcon iconName="duo-scale-balanced" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                  Trade-offs, risks, and implementation tips
                </div>
                <div>
                  <SvgIcon iconName="duo-users-group" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                  <strong>Audience:</strong> ML engineers, data/knowledge engineers, LLM application builders
                </div>
              </div>
              <p><strong>Prepared by:</strong> Nisar A</p>
              <p><strong>Date:</strong> November 7, 2025</p>
              <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: ''
        },
        {
          id: 2,
          title: 'Overview / Table of Contents',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6', textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem 2rem' }}>
                <div>
                  <div style={{ color: '#e06c75', marginBottom: '0.8rem' }}>
                    <SvgIcon iconName="duo-scissors" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Chunking & Windowing</strong>
                  </div>
                  <div style={{ marginLeft: '1.5rem', lineHeight: '1.8', fontSize: '1.2rem' }}>
                    <div><strong>1)</strong> Semantic Chunking</div>
                    <div><strong>2)</strong> Dynamic Sliding Window</div>
                    <div><strong>3)</strong> Parent–Child Context Packing</div>
                  </div>
                </div>

                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.8rem' }}>
                    <SvgIcon iconName="duo-compress" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Summarization & Compression</strong>
                  </div>
                  <div style={{ marginLeft: '1.5rem', lineHeight: '1.8', fontSize: '1.2rem' }}>
                    <div><strong>4)</strong> Context Summarization Before Packing</div>
                    <div><strong>5)</strong> Hybrid Local + Global Summaries</div>
                    <div><strong>7)</strong> Passage Compression (LLM Shortening)</div>
                  </div>
                </div>

                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.8rem' }}>
                    <SvgIcon iconName="duo-ranking-star" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Relevance & Optimization</strong>
                  </div>
                  <div style={{ marginLeft: '1.5rem', lineHeight: '1.8', fontSize: '1.2rem' }}>
                    <div><strong>6)</strong> Relevance Weighted Packing</div>
                    <div><strong>11)</strong> Token-Budget Aware Packing</div>
                    <div><strong>12)</strong> Adaptive k Retrieval (Variable Cutoff)</div>
                  </div>
                </div>

                <div>
                  <div style={{ color: '#c678dd', marginBottom: '0.8rem' }}>
                    <SvgIcon iconName="duo-table" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                    <strong>Structure & Deduplication</strong>
                  </div>
                  <div style={{ marginLeft: '1.5rem', lineHeight: '1.8', fontSize: '1.2rem' }}>
                    <div><strong>8)</strong> Answer-conditioned Retrieval / Packing</div>
                    <div><strong>9)</strong> Table / Structured Context Packing</div>
                    <div><strong>10)</strong> Semantic Deduplication</div>
                    <div><strong>13)</strong> Chain-of-Context Packing (CoC)</div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '1.5rem', padding: '10px', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '8px', borderLeft: '4px solid #e5c07b', fontSize: '1.2rem' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                <strong>Key insight:</strong> Combine multiple techniques to balance answer quality, token efficiency, and inference speed.
              </div>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-1',
      title: '1) Semantic Chunking',
      slides: [
        {
          id: 3,
          title: '1) Semantic Chunking',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Goal / What It Solves</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Preserve meaning boundaries and reduce mid-sentence cuts and retrieval noise
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>How It Works</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Segment by semantics: headings, paragraphs, discourse markers, code blocks, lists
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Manuals, policies, code docs, FAQs with clear structure
                  </div>
                </div>
                <div>
                  <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Example (Before → After)</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <div><strong>Before:</strong> Fixed 512 tokens split mid-sentence</div>
                    <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> Chunks aligned to sections and code blocks</div>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b351d',
          notes: ''
        },
        {
          id: 4,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                  <ol style={{ fontSize: '1.2rem' }}>
                    <li>Parse document structure</li>
                    <li>Detect semantic units (headers, sections, code fences)</li>
                    <li>Enforce soft min/max token limits per chunk</li>
                    <li>Attach metadata and index</li>
                  </ol>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b351d',
          notes: ''
        },
        {
          id: 5,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Higher precision</li>
                    <li>Fewer cross-chunk dependencies</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Variable chunk sizes complicate packing and caching</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b351d',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-2',
      title: '2) Dynamic Sliding Window',
      slides: [
        {
          id: 6,
          title: '2) Dynamic Sliding Window',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Goal / What It Solves</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Maintain continuity across chunk boundaries
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>How It Works</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Attach previous/next neighbor windows around retrieved chunks
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Narratives, procedures, legal texts, research papers
                  </div>
                </div>
                <div>
                  <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Example (Before → After)</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <div><strong>Before:</strong> Step 3 lacks Step 2 context</div>
                    <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> Include Step 2 + Step 3 chunks for continuity</div>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b521d',
          notes: ''
        },
        {
          id: 7,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                  <ol style={{ fontSize: '1.2rem' }}>
                    <li>Choose window size and stride</li>
                    <li>On retrieval, include ±N neighbors</li>
                    <li>Deduplicate overlaps and respect token budget</li>
                  </ol>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b521d',
          notes: ''
        },
        {
          id: 8,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Better coreference and flow</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Token overhead; higher redundancy</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b521d',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-3',
      title: '3) Parent–Child Context Packing',
      slides: [
        {
          id: 9,
          title: '3) Parent–Child Context Packing',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Goal / What It Solves</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Disambiguate details with hierarchical context
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>How It Works</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Pack child chunk plus parent (section/chapter) summary
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Structured docs, API references, code repos
                  </div>
                </div>
                <div>
                  <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Example (Before → After)</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <div><strong>Before:</strong> API method chunk without auth context</div>
                    <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> Method chunk + parent "Authentication" summary</div>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#556b1d',
          notes: ''
        },
        {
          id: 10,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                  <ol style={{ fontSize: '1.2rem' }}>
                    <li>Build TOC tree (doc → section → paragraph)</li>
                    <li>Precompute parent summaries</li>
                    <li>On child retrieval, attach parent summary (+ optional sibling cues)</li>
                  </ol>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#556b1d',
          notes: ''
        },
        {
          id: 11,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Reduces hallucinations</li>
                    <li>Improves grounding</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Requires preprocessing</li>
                    <li>Summaries can drift stale</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#556b1d',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-4',
      title: '4) Context Summarization Before Packing',
      slides: [
        {
          id: 12,
          title: '4) Context Summarization Before Packing',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Goal / What It Solves</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Fit long sections within tight budgets
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>How It Works</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Pre-summarize verbose sources (extractive/abstractive) before packing
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Policies, reports, multi-document answers
                  </div>
                </div>
                <div>
                  <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Example (Before → After)</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <div><strong>Before:</strong> 2k-token policy chunk</div>
                    <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> 150-token summary capturing key rules/dates</div>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b1f',
          notes: ''
        },
        {
          id: 13,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                  <ol style={{ fontSize: '1.2rem' }}>
                    <li>Select long candidates</li>
                    <li>Summarize with rules/LLM; cap length</li>
                    <li>Validate and cache summaries for reuse</li>
                  </ol>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b1f',
          notes: ''
        },
        {
          id: 14,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Higher density</li>
                    <li>Faster inference</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Summarization loss or bias</li>
                    <li>Extra compute cost</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b1f',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-5',
      title: '5) Hybrid Local + Global Summaries',
      slides: [
        {
          id: 15,
          title: '5) Hybrid Local + Global Summaries',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Goal / What It Solves</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Preserve big picture while keeping crucial details
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>How It Works</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Combine a short global summary with top local snippets
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Mixed queries (overall + specific details)
                  </div>
                </div>
                <div>
                  <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Example (Before → After)</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <div><strong>Before:</strong> Only local snippets → missing context</div>
                    <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> 80-token global + 2–3 local quotes</div>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b4d',
          notes: ''
        },
        {
          id: 16,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                  <ol style={{ fontSize: '1.2rem' }}>
                    <li>Compute document-level global summary</li>
                    <li>Retrieve local passages</li>
                    <li>Pack [Global] first, then [Local extracts] with citations</li>
                  </ol>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b4d',
          notes: ''
        },
        {
          id: 17,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Balanced coverage and precision</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Prep overhead</li>
                    <li>Potential contradictions to reconcile</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b4d',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-6',
      title: '6) Relevance Weighted Packing',
      slides: [
        {
          id: 18,
          title: '6) Relevance Weighted Packing',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Goal / What It Solves</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Maximize utility by prioritizing high-relevance chunks
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>How It Works</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Rank by score; pack highest first within budget
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Tight budgets; noisy corpora
                  </div>
                </div>
                <div>
                  <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Example (Before → After)</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <div><strong>Before:</strong> Arbitrary top-k</div>
                    <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> Highest-scoring, diverse set fits budget</div>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d5d6b',
          notes: ''
        },
        {
          id: 19,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                  <ol style={{ fontSize: '1.2rem' }}>
                    <li>Score by similarity + recency + source quality</li>
                    <li>Optional MMR/diversity</li>
                    <li>Greedy pack until budget filled</li>
                  </ol>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d5d6b',
          notes: ''
        },
        {
          id: 20,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Better hit rate</li>
                    <li>Fewer irrelevant tokens</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Can exclude necessary low-scoring context</li>
                    <li>Bias risk</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d5d6b',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-7',
      title: '7) Passage Compression (LLM Shortening)',
      slides: [
        {
          id: 21,
          title: '7) Passage Compression (LLM Shortening)',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Goal / What It Solves</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Shrink verbose passages while retaining facts
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>How It Works</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    LLM rewrites chunks into concise bullets with entities/numbers preserved
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Support chats, logs, verbose prose
                  </div>
                </div>
                <div>
                  <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Example (Before → After)</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <div><strong>Before:</strong> 300-token paragraph</div>
                    <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> 80-token bullet list with key facts</div>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d366b',
          notes: ''
        },
        {
          id: 22,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                  <ol style={{ fontSize: '1.2rem' }}>
                    <li>Define compression prompt/constraints</li>
                    <li>Compress retrieved chunks; keep citations/IDs</li>
                    <li>Enforce length caps; cache results</li>
                  </ol>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d366b',
          notes: ''
        },
        {
          id: 23,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Fit more evidence</li>
                    <li>Faster inference</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Information loss</li>
                    <li>Extra LLM cost/latency</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d366b',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-8',
      title: '8) Answer-conditioned Retrieval / Packing',
      slides: [
        {
          id: 24,
          title: '8) Answer-conditioned Retrieval / Packing',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Goal / What It Solves</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Include only fields relevant to the answer type
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>How It Works</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Predict answer schema (boolean/date/code/etc.) and filter context accordingly
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Forms, finance, SLAs, code Q&A
                  </div>
                </div>
                <div>
                  <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Example (Before → After)</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <div><strong>Before:</strong> Full policy text for "refund deadline"</div>
                    <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> Only date clauses and policy table fields</div>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d206b',
          notes: ''
        },
        {
          id: 25,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                  <ol style={{ fontSize: '1.2rem' }}>
                    <li>Classify query → answer type</li>
                    <li>Map to fields/templates</li>
                    <li>Retrieve and pack only relevant fields</li>
                  </ol>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d206b',
          notes: ''
        },
        {
          id: 26,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Efficient and accurate</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Misclassification risk</li>
                    <li>Needs schema mapping</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d206b',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-9',
      title: '9) Table / Structured Context Packing',
      slides: [
        {
          id: 27,
          title: '9) Table / Structured Context Packing',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Goal / What It Solves</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Increase information density via structure
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>How It Works</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Convert passages into compact bullets, key-value rows, or mini-tables
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Specs, product catalogs, schedules, APIs
                  </div>
                </div>
                <div>
                  <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Example (Before → After)</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <div><strong>Before:</strong> Long feature paragraphs</div>
                    <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> Field-value list for features and limits</div>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#331d6b',
          notes: ''
        },
        {
          id: 28,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                  <ol style={{ fontSize: '1.2rem' }}>
                    <li>Extract entities/fields</li>
                    <li>Normalize units and names</li>
                    <li>Pack as structured rows with provenance</li>
                  </ol>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#331d6b',
          notes: ''
        },
        {
          id: 29,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>High density</li>
                    <li>Consistent formatting</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Conversion effort</li>
                    <li>Nuance may be lost</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#331d6b',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-10',
      title: '10) Semantic Deduplication',
      slides: [
        {
          id: 30,
          title: '10) Semantic Deduplication',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Goal / What It Solves</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Remove overlapping/near-duplicate chunks before packing
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>How It Works</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Cluster or similarity-threshold to drop duplicates
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Scraped web, versioned docs, mirrored content
                  </div>
                </div>
                <div>
                  <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Example (Before → After)</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <div><strong>Before:</strong> Same paragraph from 3 sources</div>
                    <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> Single representative with citations to all</div>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#691d6b',
          notes: ''
        },
        {
          id: 31,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                  <ol style={{ fontSize: '1.2rem' }}>
                    <li>Embed chunks; compute similarities</li>
                    <li>Cluster or use MinHash/Jaccard</li>
                    <li>Keep highest quality/most recent representative</li>
                  </ol>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#691d6b',
          notes: ''
        },
        {
          id: 32,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Saves tokens</li>
                    <li>Reduces noise</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Might drop subtle differences</li>
                    <li>Extra compute</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#691d6b',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-11',
      title: '11) Token-Budget Aware Packing',
      slides: [
        {
          id: 33,
          title: '11) Token-Budget Aware Packing',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Goal / What It Solves</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Guarantee fits within model context window
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>How It Works</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Track tokens and greedily pack; compress or skip when over budget
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Any limited context; multi-source retrieval
                  </div>
                </div>
                <div>
                  <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Example (Before → After)</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <div><strong>Before:</strong> Prompt truncation at runtime</div>
                    <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> 4 chunks + 2 compressed fit within 4k tokens</div>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d3b',
          notes: ''
        },
        {
          id: 34,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                  <ol style={{ fontSize: '1.2rem' }}>
                    <li>Set budget and headroom for system/prompt/answer</li>
                    <li>Iterate ranked candidates; add if fits</li>
                    <li>Fallback: compress or skip</li>
                  </ol>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d3b',
          notes: ''
        },
        {
          id: 35,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Predictable behavior</li>
                    <li>Avoids truncation</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Greedy may be suboptimal</li>
                    <li>Added logic</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d3b',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-12',
      title: '12) Adaptive k Retrieval (Variable Cutoff)',
      slides: [
        {
          id: 36,
          title: '12) Adaptive k Retrieval (Variable Cutoff)',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Goal / What It Solves</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Use fewer or more chunks depending on query complexity
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>How It Works</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Estimate complexity and adjust k; stop when marginal gain is low
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Ambiguous vs highly specific queries
                  </div>
                </div>
                <div>
                  <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Example (Before → After)</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <div><strong>Before:</strong> Fixed k=5 for all queries</div>
                    <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> k=2 for exact error; k=8 for policy overview</div>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: ''
        },
        {
          id: 37,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                  <ol style={{ fontSize: '1.2rem' }}>
                    <li>Measure entropy/score distribution</li>
                    <li>Map to k (e.g., small k for exact error strings, larger k for broad topics)</li>
                    <li>Rerank and pack</li>
                  </ol>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: ''
        },
        {
          id: 38,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Efficient</li>
                    <li>Better recall when needed</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Requires tuning</li>
                    <li>Misestimation risk</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#6b1d1d',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-13',
      title: '13) Chain-of-Context Packing (CoC)',
      slides: [
        {
          id: 39,
          title: '13) Chain-of-Context Packing (CoC)',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#d19a66', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Goal / What It Solves</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(209, 154, 102, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Order context to match reasoning flow
                  </div>
                </div>
                <div>
                  <div style={{ color: '#61dafb', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>How It Works</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(97, 218, 251, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Arrange evidence as steps: definitions → constraints → evidence → counterpoints
                  </div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-calendar-check" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>When to Use</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(152, 195, 121, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    Multi-hop QA, legal/medical reasoning, root-cause analysis
                  </div>
                </div>
                <div>
                  <div style={{ color: '#c678dd', marginBottom: '0.5rem' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Example (Before → After)</strong>
                  </div>
                  <div style={{ padding: '0.8rem', background: 'rgba(198, 120, 221, 0.1)', borderRadius: '6px', fontSize: '1.2rem' }}>
                    <div><strong>Before:</strong> Mixed, distracting context order</div>
                    <div style={{ marginTop: '0.3rem' }}><strong>After:</strong> Law → precedents → case facts → exceptions</div>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d3d6b',
          notes: ''
        },
        {
          id: 40,
          title: 'Implementation Steps',
          content: (
            <div>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ padding: '0.8rem', background: 'rgba(229, 192, 123, 0.1)', borderRadius: '6px' }}>
                  <ol style={{ fontSize: '1.2rem' }}>
                    <li>Draft reasoning steps from the query</li>
                    <li>Group retrieved chunks per step</li>
                    <li>Pack in step order with labels and citations</li>
                  </ol>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d3d6b',
          notes: ''
        },
        {
          id: 41,
          title: 'Pros & Cons',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.5' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#98c379', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-thumbs-up" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Pros</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Better chain-of-thought alignment</li>
                    <li>Clearer answers</li>
                  </ul>
                </div>
                <div style={{ background: 'rgba(224, 108, 117, 0.1)', padding: '0.8rem', borderRadius: '8px' }}>
                  <div style={{ color: '#e06c75', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    <strong>Cons</strong>
                  </div>
                  <ul style={{ marginLeft: '1.2rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>Overhead to plan</li>
                    <li>Needs accurate step mapping</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d3d6b',
          notes: ''
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary / Best Practices',
      slides: [
        {
          id: 42,
          title: 'Summary / Best Practices',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6', textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ color: '#98c379', marginBottom: '1rem' }}>
                  <SvgIcon iconName="duo-check-circle" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                  <strong>Key Takeaways</strong>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ background: 'rgba(97, 218, 251, 0.1)', padding: '0.8rem', borderRadius: '8px', borderLeft: '4px solid #61dafb' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-gears" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Combine techniques</strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>
                      Semantic chunking + dedup + relevance packing as a strong baseline
                    </div>
                  </div>
                  <div style={{ background: 'rgba(152, 195, 121, 0.1)', padding: '0.8rem', borderRadius: '8px', borderLeft: '4px solid #98c379' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-gauge-high" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Track token budget</strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>
                      Always monitor and enforce token limits; compress selectively
                    </div>
                  </div>
                  <div style={{ background: 'rgba(229, 192, 123, 0.1)', padding: '0.8rem', borderRadius: '8px', borderLeft: '4px solid #e5c07b' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-circle-nodes" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Add hierarchy</strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>
                      Parent summaries and global + local blends improve context quality
                    </div>
                  </div>
                  <div style={{ background: 'rgba(198, 120, 221, 0.1)', padding: '0.8rem', borderRadius: '8px', borderLeft: '4px solid #c678dd' }}>
                    <div style={{ marginBottom: '0.5rem' }}>
                      <SvgIcon iconName="duo-link" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                      <strong>Optimize order</strong>
                    </div>
                    <div style={{ fontSize: '1.2rem' }}>
                      Order context for reasoning flow when questions are complex
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b38',
          notes: ''
        },
        {
          id: 43,
          title: 'Implementation Tips',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.6', textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}></div>

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ color: '#e5c07b', marginBottom: '1rem' }}>
                  <SvgIcon iconName="duo-clipboard-list" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                  <strong>Implementation Tips</strong>
                </div>
                <ul style={{ marginLeft: '1.5rem', fontSize: '1.2rem', lineHeight: '1.8' }}>
                  <li>Cache summaries/compressions; log provenance per chunk</li>
                  <li>Measure with answer-grounding and citation metrics</li>
                  <li>Start simple (k, relevance) → iterate with adaptive and CoC</li>
                </ul>
              </div>

              <div>
                <div style={{ color: '#61dafb', marginBottom: '1rem' }}>
                  <SvgIcon iconName="duo-rocket" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                  <strong>Next Steps</strong>
                </div>
                <div style={{ background: 'rgba(97, 218, 251, 0.15)', padding: '1rem', borderRadius: '8px' }}>
                  <ol style={{ marginLeft: '1.5rem', fontSize: '1.2rem', marginBottom: 0, lineHeight: '1.8' }}>
                    <li>Pilot on one corpus; A/B two packing variants</li>
                    <li>Instrument latency, cost, and answer quality</li>
                  </ol>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d6b38',
          notes: ''
        }
      ]
    }
  ]
};

