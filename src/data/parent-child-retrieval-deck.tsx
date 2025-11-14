import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const parentChildRetrievalDeck: Deck = {
  id: 'parent-child-retrieval-deck',
  name: '11 Parent–Child Retrieval Design Patterns',
  description: 'A concise, comparable cheat-sheet of 11 retrieval patterns that attach parent context to child chunks to reduce hallucination and improve answer correctness',
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
          title: 'Parent–Child Retrieval Designs for RAG',
          content: (
            <div style={{ textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.1em', marginTop: '30px', color: '#4fc3f7' }}>
                For Reliable Grounded Generation
              </h3>
              <p style={{ fontSize: '1em', marginTop: '30px' }}>
                A concise, comparable cheat-sheet of 11 retrieval patterns that attach parent context to child chunks to reduce hallucination and improve answer correctness
              </p>
              <div style={{ marginTop: '50px', display: 'flex', gap: '30px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px 25px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-shield-check" sizeName="2x" darkModeInvert={true} />
                  <span>Reduces Hallucination</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px 25px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-check-double" sizeName="2x" darkModeInvert={true} />
                  <span>Improves Correctness</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px 25px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '8px' }}>
                  <SvgIcon iconName="duo-book-open" sizeName="2x" darkModeInvert={true} />
                  <span>Better Context</span>
                </div>
              </div>
              <p style={{ fontSize: '0.8em', marginTop: '50px', color: '#aaa' }}>
                For ML engineers, data engineers, applied researchers • 2025-11-07
              </p>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Title slide introducing parent-child retrieval patterns for RAG'
        },
        {
          id: 2,
          title: 'Table of Contents',
          content: (
            <div style={{ textAlign: 'left', fontSize: '0.85em' }}>
              <h2 style={{ marginBottom: '30px' }}>
                <SvgIcon iconName="duo-clipboard-list" sizeName="2x" style={{ marginRight: '10px', verticalAlign: 'middle' }} darkModeInvert={true} />
                Parent-Child Retrieval Design Patterns
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#4fc3f7', minWidth: '30px' }}>1</span>
                  <span>Parent-Child Chunking (Hierarchical Retrieval)</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#81c784', minWidth: '30px' }}>2</span>
                  <span>Section-Header Anchored Retrieval</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#ffb74d', minWidth: '30px' }}>3</span>
                  <span>Outline-Based Tree Retrieval</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#ba68c8', minWidth: '30px' }}>4</span>
                  <span>Top-k Parent Expansion</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#f06292', minWidth: '30px' }}>5</span>
                  <span>Sibling-Aware Retrieval</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#64b5f6', minWidth: '30px' }}>6</span>
                  <span>Windowed Retrieval (Sliding Context Windows)</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#aed581', minWidth: '30px' }}>7</span>
                  <span>Semantic Hierarchy Retrieval</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#ffa726', minWidth: '30px' }}>8</span>
                  <span>Dynamic Context Folding</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#ef5350', minWidth: '30px' }}>9</span>
                  <span>Hybrid Parent-Child + BM25 Verification</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#9575cd', minWidth: '30px' }}>10</span>
                  <span>Parent Re-Ranking using Cross-Encoder</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#66bb6a', minWidth: '30px' }}>11</span>
                  <span>Graph / Knowledge-Node Parent Retrieval</span>
                </div>
                <div style={{ padding: '12px', background: 'rgba(79, 195, 247, 0.15)', borderRadius: '5px', display: 'flex', alignItems: 'center', gap: '10px', gridColumn: 'span 2' }}>
                  <SvgIcon iconName="duo-trophy" sizeName="1x" style={{ color: '#ffd700' }} darkModeInvert={true} />
                  <span style={{ fontWeight: 'bold' }}>Summary & Selection Guide</span>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Table of contents showing all 11 parent-child retrieval patterns'
        }
      ]
    },
    {
      id: 'pattern-1',
      title: 'Parent–Child Chunking',
      slides: [
        {
          id: 3,
          title: '1) Parent–Child Chunking (Hierarchical Retrieval)',
          icon: { name: 'duo-circle-nodes', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal / What It Solves:</strong></p>
                  <p style={{ marginTop: '5px' }}>Reduces hallucination by always pairing fine-grained evidence (child) with its governing section (parent)</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong></p>
                  <p style={{ marginTop: '5px' }}>Index children for recall; upon retrieval, attach their parent section using parent_id metadata</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />When to Use:</strong> Policies, legal docs, SOPs, manuals where section context defines constraints</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-table" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Data Structure Needed:</strong></p>
                  <p style={{ marginTop: '5px' }}>Child chunks with embeddings; parent sections</p>
                  <p style={{ marginTop: '5px', fontSize: '0.9em', fontStyle: 'italic' }}>Fields: child_id, parent_id, parent_title, level, order</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-list-ol" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Workflow:</strong></p>
                  <ol style={{ marginTop: '5px', paddingLeft: '20px', lineHeight: '1.6' }}>
                    <li>Parse document into a tree; chunk children (200–400 tokens) and parents (800–1500)</li>
                    <li>Embed children; store parent metadata and text</li>
                    <li>Query → retrieve top-k children → attach parents → deduplicate parents</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Strong grounding with minimal complexity</li>
                      <li>Easy to implement; good correctness</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Larger context windows</li>
                      <li>Risk of attaching a loosely relevant parent if parsing is noisy</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: 'Pattern 1: Basic parent-child chunking with hierarchical retrieval'
        }
      ]
    },
    {
      id: 'pattern-2',
      title: 'Section-Header Anchored Retrieval',
      slides: [
        {
          id: 4,
          title: '2) Section-Header Anchored Retrieval',
          icon: { name: 'duo-heading', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal / What It Solves:</strong></p>
                  <p style={{ marginTop: '5px' }}>Reduces misinterpretation by anchoring chunks to their nearest header and breadcrumb path</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong></p>
                  <p style={{ marginTop: '5px' }}>Always include header/title + short abstract with the retrieved chunk</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />When to Use:</strong> Docs with clear headings: wikis, product guides, knowledge bases</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-table" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Data Structure Needed:</strong></p>
                  <p style={{ marginTop: '5px', fontSize: '0.9em' }}>header_text, header_path (e.g., H1 &gt; H2 &gt; H3), header_offset, optional header summary</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-list-ol" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Workflow:</strong></p>
                  <ol style={{ marginTop: '5px', paddingLeft: '20px', lineHeight: '1.6' }}>
                    <li>During parsing, capture nearest header and path for each chunk</li>
                    <li>Retrieval attaches header + path + optional 1–2 sentence abstract</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Very low overhead</li>
                      <li>Boosts grounding and interpretability</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Weak when headings are sparse or misleading</li>
                      <li>Limited for highly unstructured text</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Pattern 2: Anchoring chunks to section headers for better context'
        }
      ]
    },
    {
      id: 'pattern-3',
      title: 'Outline-Based Tree Retrieval',
      slides: [
        {
          id: 5,
          title: '3) Outline-Based Tree Retrieval',
          icon: { name: 'duo-list-check', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal / What It Solves:</strong></p>
                  <p style={{ marginTop: '5px' }}>Preserves narrative hierarchy by retrieving the path from root → ... → leaf</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong></p>
                  <p style={{ marginTop: '5px' }}>Maintain explicit outline tree; child retrieval triggers inclusion of ancestors (path context)</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />When to Use:</strong> Long PDFs, textbooks, design docs, standards with deep nesting</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-table" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Data Structure Needed:</strong></p>
                  <p style={{ marginTop: '5px', fontSize: '0.9em' }}>Node tree (node_id, parent_id, level, order); embeddings at child and optionally at each node</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-list-ol" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Workflow:</strong></p>
                  <ol style={{ marginTop: '5px', paddingLeft: '20px', lineHeight: '1.6' }}>
                    <li>Build outline; embed leaves (and optionally internal nodes)</li>
                    <li>Query → retrieve leaves → include ancestors to root; budget tokens; deduplicate</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Excellent structural grounding; coherent multi-level context</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Token overhead from path; heavier preprocessing to build/maintain tree</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Pattern 3: Tree-based retrieval with full ancestor path'
        }
      ]
    },
    {
      id: 'pattern-4',
      title: 'Top-k Parent Expansion',
      slides: [
        {
          id: 6,
          title: '4) Top-k Parent Expansion',
          icon: { name: 'duo-arrow-up-circle', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal / What It Solves:</strong></p>
                  <p style={{ marginTop: '5px' }}>Mitigates ambiguity by attaching multiple plausible parents (immediate + higher levels)</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong></p>
                  <p style={{ marginTop: '5px' }}>For each retrieved child, climb levels and add up to k parents (e.g., section, chapter)</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />When to Use:</strong> Deeply nested docs; content where constraints appear at multiple levels</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-table" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Data Structure Needed:</strong></p>
                  <p style={{ marginTop: '5px', fontSize: '0.9em' }}>parent_id chain with level_depth; per-level score weighting</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-list-ol" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Workflow:</strong></p>
                  <ol style={{ marginTop: '5px', paddingLeft: '20px', lineHeight: '1.6' }}>
                    <li>Retrieve children → for each, add parents up to k levels using a token budget heuristic</li>
                    <li>Score-combine child relevance with parent-level priors; deduplicate</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>High recall of governing context; robust to mis-leveling</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>More tokens; can introduce noise; needs careful budget control</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: 'Pattern 4: Expanding to multiple parent levels for context'
        }
      ]
    },
    {
      id: 'pattern-5',
      title: 'Sibling-Aware Retrieval',
      slides: [
        {
          id: 7,
          title: '5) Sibling-Aware Retrieval',
          icon: { name: 'duo-arrows-rotate', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal / What It Solves:</strong></p>
                  <p style={{ marginTop: '5px' }}>Maintains coherence across adjacent steps/paragraphs. Reduces out-of-context answers</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong></p>
                  <p style={{ marginTop: '5px' }}>Retrieve neighboring siblings (prev/next within same parent) around the hit chunk</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />When to Use:</strong> Procedures, checklists, code blocks, numbered lists</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-table" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Data Structure Needed:</strong></p>
                  <p style={{ marginTop: '5px', fontSize: '0.9em' }}>prev_id, next_id, sibling_order, section_boundary markers</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-list-ol" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Workflow:</strong></p>
                  <ol style={{ marginTop: '5px', paddingLeft: '20px', lineHeight: '1.6' }}>
                    <li>On child hit, add N siblings before/after up to boundary or token limit</li>
                    <li>Merge and deduplicate overlapping spans</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Better continuity</li>
                      <li>Improves answers requiring sequence context</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>May pull irrelevant neighbors</li>
                      <li>Increases latency and context size</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Pattern 5: Including sibling chunks for sequential context'
        }
      ]
    },
    {
      id: 'pattern-6',
      title: 'Windowed Retrieval',
      slides: [
        {
          id: 8,
          title: '6) Windowed Retrieval (Sliding Context Windows)',
          icon: { name: 'duo-arrows-spin', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal / What It Solves:</strong></p>
                  <p style={{ marginTop: '5px' }}>Captures local context beyond chunk edges without full parent overhead</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong></p>
                  <p style={{ marginTop: '5px' }}>Expand the retrieved chunk by a fixed token/character window before and after</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />When to Use:</strong> Linear prose, transcripts, articles with weak headings</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-table" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Data Structure Needed:</strong></p>
                  <p style={{ marginTop: '5px', fontSize: '0.9em' }}>Character/token offsets per chunk; document-wide text offsets</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-list-ol" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Workflow:</strong></p>
                  <p style={{ marginTop: '5px' }}>Chunk with offsets; on retrieval, compute window [start−W, end+W]; fetch and merge</p>
                </div>
                <div style={{ display: 'flex', gap: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Simple; effective for linear text; low structural requirements</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Overlap duplication; no awareness of section boundaries</li>
                      <li>Potential truncation issues</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Pattern 6: Sliding window approach for local context'
        }
      ]
    },
    {
      id: 'pattern-7',
      title: 'Semantic Hierarchy Retrieval',
      slides: [
        {
          id: 9,
          title: '7) Semantic Hierarchy Retrieval',
          icon: { name: 'duo-map', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal / What It Solves:</strong></p>
                  <p style={{ marginTop: '5px' }}>Reduces hallucination by grouping evidence under topic-level parents (taxonomy/clusters)</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong></p>
                  <p style={{ marginTop: '5px' }}>Map chunks to taxonomy nodes or clusters; retrieve topic parent summary plus child hits</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />When to Use:</strong> Knowledge bases, FAQs, multi-product docs; content with synonym-rich topics</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-table" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Data Structure Needed:</strong></p>
                  <p style={{ marginTop: '5px', fontSize: '0.9em' }}>topic_id, parent_topic_id; cluster centroids; topic summaries; group embeddings</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-list-ol" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Workflow:</strong></p>
                  <ol style={{ marginTop: '5px', paddingLeft: '20px', lineHeight: '1.6' }}>
                    <li>Build/align taxonomy or perform clustering; compute group embeddings and summaries</li>
                    <li>Query → retrieve children and their topic parents; include top exemplars</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Strong semantic grounding; resilient to phrasing variance</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Taxonomy drift/maintenance; clustering errors propagate to retrieval</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: 'Pattern 7: Topic-based semantic hierarchy for grouping'
        }
      ]
    },
    {
      id: 'pattern-8',
      title: 'Dynamic Context Folding',
      slides: [
        {
          id: 10,
          title: '8) Dynamic Context Folding',
          icon: { name: 'duo-broom', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal / What It Solves:</strong></p>
                  <p style={{ marginTop: '5px' }}>Fits long parents into tight budgets while keeping detailed child evidence</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong></p>
                  <p style={{ marginTop: '5px' }}>Attach compressed/summarized parents + full child; adapt compression by budget</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />When to Use:</strong> Long sections, limited context windows, cost-sensitive deployments</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-table" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Data Structure Needed:</strong></p>
                  <p style={{ marginTop: '5px', fontSize: '0.9em' }}>Parent summaries at multiple compression ratios; keyphrases; salience scores</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-list-ol" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Workflow:</strong></p>
                  <ol style={{ marginTop: '5px', paddingLeft: '20px', lineHeight: '1.6' }}>
                    <li>Precompute 30–70% parent compressions; store pointers</li>
                    <li>Retrieval picks compression level by token budget; attach full child + compressed parent</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Balanced precision/recall; efficient use of tokens</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Summarization risk; preprocessing overhead</li>
                      <li>Needs QA of summary quality</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Pattern 8: Compressing parents to fit token budgets'
        }
      ]
    },
    {
      id: 'pattern-9',
      title: 'Hybrid Parent-Child + BM25 Verification',
      slides: [
        {
          id: 11,
          title: '9) Hybrid Parent-Child + BM25 Verification',
          icon: { name: 'duo-shield-check', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal / What It Solves:</strong></p>
                  <p style={{ marginTop: '5px' }}>Increases precision by lexically verifying semantic hits to reduce hallucinations</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong></p>
                  <p style={{ marginTop: '5px' }}>Dense retrieve child; attach parent; re-score/verify parent with BM25/keyword constraints</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />When to Use:</strong> Compliance, legal, specs where exact terms/numbers matter</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-table" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Data Structure Needed:</strong></p>
                  <p style={{ marginTop: '5px', fontSize: '0.9em' }}>Dense index for children; sparse (BM25) index for parents; term dictionaries</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-list-ol" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Workflow:</strong></p>
                  <ol style={{ marginTop: '5px', paddingLeft: '20px', lineHeight: '1.6' }}>
                    <li>Step1: Dense child retrieval</li>
                    <li>Step2: Attach parent</li>
                    <li>Step3: BM25 score against parent; threshold/gate; optional hybrid union/intersection</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Strong precision on entities/dates/numbers</li>
                      <li>Robust to embedding misses</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Added latency and infra</li>
                      <li>Threshold tuning; Dual-index maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Pattern 9: Hybrid approach with BM25 verification for precision'
        }
      ]
    },
    {
      id: 'pattern-10',
      title: 'Parent Re-Ranking using Cross-Encoder',
      slides: [
        {
          id: 12,
          title: '10) Parent Re-Ranking using Cross-Encoder',
          icon: { name: 'duo-check-double', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal / What It Solves:</strong></p>
                  <p style={{ marginTop: '5px' }}>Selects the most relevant section root to ground the answer</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong></p>
                  <p style={{ marginTop: '5px' }}>Map retrieved children to candidate parents; cross-encode (query, parent) pairs; keep top-m parents</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />When to Use:</strong> Very long documents with multiple plausible parent sections</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-table" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Data Structure Needed:</strong></p>
                  <p style={{ marginTop: '5px', fontSize: '0.9em' }}>Parent passages, child→parent mapping, Cross-encoder model/artifacts</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-list-ol" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Workflow:</strong></p>
                  <ol style={{ marginTop: '5px', paddingLeft: '20px', lineHeight: '1.6' }}>
                    <li>Dense retrieve children → collect unique parents</li>
                    <li>Cross-encoder re-rank parents → select top-m → attach top parents + their best children</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>High-quality grounding</li>
                      <li>Reduces irrelevant parents</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Compute-heavy</li>
                      <li>Model updates/serving complexity</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0f3460',
          notes: 'Pattern 10: Cross-encoder re-ranking for quality grounding'
        }
      ]
    },
    {
      id: 'pattern-11',
      title: 'Graph / Knowledge-Node Parent Retrieval',
      slides: [
        {
          id: 13,
          title: '11) Graph / Knowledge-Node Parent Retrieval',
          icon: { name: 'duo-circle-nodes', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.8em' }}>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal / What It Solves:</strong></p>
                  <p style={{ marginTop: '5px' }}>Disambiguates context via explicit relations and multi-hop traversal</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong></p>
                  <p style={{ marginTop: '5px' }}>Convert sections/entities to nodes; retrieve nodes; traverse edges to parent/related nodes</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />When to Use:</strong> SOP dependencies, API interlinks, scientific corpora, cross-doc references</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-table" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Data Structure Needed:</strong></p>
                  <p style={{ marginTop: '5px', fontSize: '0.9em' }}>Graph DB (e.g., Neo4j); nodes: section, entity; edges: parent_of, cites, prerequisite_of. Node/edge embeddings for semantic retrieval</p>
                </div>
                <div style={{ marginBottom: '15px', padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
                  <p><strong><SvgIcon iconName="duo-list-ol" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Workflow:</strong></p>
                  <ol style={{ marginTop: '5px', paddingLeft: '20px', lineHeight: '1.6' }}>
                    <li>Build graph from structure and links; index nodes/edges</li>
                    <li>Query → retrieve nodes (dense/sparse) → k-hop expand to parents/anchors → compile context</li>
                  </ol>
                </div>
                <div style={{ display: 'flex', gap: '20px', fontSize: '0.85em' }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} darkModeInvert={true} /> <strong>Pros:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Interpretable grounding; supports multi-hop reasoning</li>
                      <li>Enables cross-document context integration</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} darkModeInvert={true} /> <strong>Cons:</strong></p>
                    <ul style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
                      <li>Higher complexity; graph maintenance overhead</li>
                      <li>Query planning costs and traversal latency</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: 'Pattern 11: Graph-based approach for complex relationships'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 14,
          title: 'Summary & Conclusion',
          content: (
            <div style={{ textAlign: 'left', fontSize: '0.75em' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#4fc3f7', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                    Key Takeaways
                  </h3>
                  <ul style={{ fontSize: '0.95em', lineHeight: '1.8' }}>
                    <li>Parent–child retrieval patterns reduce hallucination by restoring governing context around fine-grained evidence</li>
                    <li>Choose patterns based on structure depth, token budget, and precision needs</li>
                    <li>All methods balance the trade-off between context completeness and token efficiency</li>
                    <li>Consider combining multiple patterns for complex document structures</li>
                  </ul>
                </div>
                <div>
                  <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#81c784', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-map" sizeName="2x" darkModeInvert={true} />
                    Selection Guide
                  </h3>
                  <ul style={{ fontSize: '0.95em', lineHeight: '1.8', listStyle: 'none', paddingLeft: 0 }}>
                    <li><strong>Strong structure + long sections:</strong> Parent–Child Chunking, Outline-Based Tree</li>
                    <li><strong>Tight budget:</strong> Dynamic Context Folding</li>
                    <li><strong>Need precision on terms:</strong> Hybrid with BM25; Cross-Encoder re-ranking</li>
                    <li><strong>Sequential content:</strong> Sibling-Aware or Windowed</li>
                    <li><strong>Topic-heavy KBs:</strong> Semantic Hierarchy</li>
                    <li><strong>Complex interlinks:</strong> Graph/KG approach</li>
                  </ul>
                </div>
              </div>
              <div style={{ marginTop: '25px' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffb74d', marginBottom: '15px' }}>
                  <SvgIcon iconName="duo-rocket" sizeName="2x" darkModeInvert={true} />
                  Implementation Tips
                </h3>
                <ul style={{ fontSize: '0.95em', lineHeight: '1.8', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <li>Store explicit parent_id, path, and offsets</li>
                  <li>Deduplicate parents to avoid redundancy</li>
                  <li>Enforce token budgets based on LLM context limits</li>
                  <li>Log which pattern fired for observability</li>
                  <li>Consider progressive loading: essential context first, expanded context on demand</li>
                  <li>Test retrieval quality with diverse query types</li>
                </ul>
              </div>
              <div style={{ marginTop: '25px', padding: '15px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '8px', textAlign: 'left' }}>
                <p style={{ fontSize: '1.1em', margin: 0 }}>
                  <SvgIcon iconName="duo-shield-check" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '10px' }} darkModeInvert={true} />
                  <strong>Remember:</strong> Parent-child patterns are essential for reducing hallucination and improving answer correctness in RAG systems. 
                  Choose wisely based on your document structure and requirements.
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#16213e',
          notes: 'Summary with key takeaways, selection guide, and implementation tips'
        }
      ]
    }
  ]
};
