import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const graphRetrievalDeck: Deck = {
  id: 'graph-based-retrieval-techniques',
  name: '13 Graph-Based Retrieval Techniques',
  description: 'A practical cheat-sheet for precision, reasoning, and reliable context',
  theme: 'sky',
  slides: [
    {
      id: 1,
      title: '13 Graph-Based Retrieval Techniques',
      content: (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '2rem', color: '#3b82f6' }}>
            <SvgIcon iconName="duo-network-wired" sizeName="2xl" style={{ marginRight: '1rem' }} />
            13 Graph-Based Retrieval Techniques
          </div>
          <div style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#0ea5e9' }}>
            <SvgIcon iconName="duo-diagram-project" sizeName="xl" style={iconStyle} />
            A practical cheat-sheet for precision, reasoning, and reliable context
          </div>
          <div style={{ fontSize: '1.2rem', color: '#10b981', marginTop: '3rem', lineHeight: '2' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <SvgIcon iconName="duo-users-group" sizeName="xl" style={iconStyle} />
              <strong>Audience:</strong> RAG engineers, search engineers, data scientists
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <SvgIcon iconName="duo-list-check" sizeName="xl" style={iconStyle} />
              <strong>What you'll get:</strong> 13 techniques, when to use them, simple steps, pros/cons
            </div>
            <div>
              <SvgIcon iconName="duo-circle-info" sizeName="xl" style={iconStyle} />
              <strong>Note:</strong> Simple visuals only (no complex diagrams)
            </div>
          </div>
        </div>
      ),
      notes: 'Title slide introducing the 13 graph-based retrieval techniques'
    },
    {
      id: 2,
      title: 'Overview: 13 Techniques at a Glance',
      content: (
        <div style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
          <div style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem', color: '#3b82f6' }}>
            <SvgIcon iconName="duo-sitemap" sizeName="2xl" style={iconStyle} />
            <strong>Overview: 13 Techniques at a Glance</strong>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <div style={{ marginBottom: '0.7rem', fontSize: '0.95rem' }}>
                <SvgIcon iconName="duo-1" sizeName="lg" style={iconStyle} />
                <strong>Node-Level Retrieval</strong> — Retrieve individual concept/entity nodes
              </div>
              <div style={{ marginBottom: '0.7rem', fontSize: '0.95rem' }}>
                <SvgIcon iconName="duo-2" sizeName="lg" style={iconStyle} />
                <strong>Edge-Weighted Retrieval</strong> — Rank nodes by relationship strength
              </div>
              <div style={{ marginBottom: '0.7rem', fontSize: '0.95rem' }}>
                <SvgIcon iconName="duo-3" sizeName="lg" style={iconStyle} />
                <strong>Neighborhood Expansion</strong> — Node plus directly connected neighbors
              </div>
              <div style={{ marginBottom: '0.7rem', fontSize: '0.95rem' }}>
                <SvgIcon iconName="duo-4" sizeName="lg" style={iconStyle} />
                <strong>Path-Based Retrieval</strong> — Sequences of connected nodes (multi-hop)
              </div>
              <div style={{ marginBottom: '0.7rem', fontSize: '0.95rem' }}>
                <SvgIcon iconName="duo-5" sizeName="lg" style={iconStyle} />
                <strong>Community/Cluster Retrieval</strong> — Densely related node groups (topics)
              </div>
              <div style={{ marginBottom: '0.7rem', fontSize: '0.95rem' }}>
                <SvgIcon iconName="duo-6" sizeName="lg" style={iconStyle} />
                <strong>Hierarchical Graph Retrieval</strong> — Parent → subtopic → leaf chunks
              </div>
              <div style={{ marginBottom: '0.7rem', fontSize: '0.95rem' }}>
                <SvgIcon iconName="duo-7" sizeName="lg" style={iconStyle} />
                <strong>Graph + Dense Vector Hybrid</strong> — Combine embeddings with connectivity
              </div>
            </div>
            <div>
              <div style={{ marginBottom: '0.7rem', fontSize: '0.95rem' }}>
                <SvgIcon iconName="duo-8" sizeName="lg" style={iconStyle} />
                <strong>Graph + BM25 Hybrid</strong> — Validate with keyword BM25
              </div>
              <div style={{ marginBottom: '0.7rem', fontSize: '0.95rem' }}>
                <SvgIcon iconName="duo-9" sizeName="lg" style={iconStyle} />
                <strong>Semantic Graph Traversal</strong> — Follow edges via similarity thresholds
              </div>
              <div style={{ marginBottom: '0.7rem', fontSize: '0.95rem' }}>
                <SvgIcon iconName="duo-ranking-star" sizeName="lg" style={iconStyle} />
                <strong>Graph Walk-Based Ranking</strong> — PageRank/Personalized PageRank ranking
              </div>
              <div style={{ marginBottom: '0.7rem', fontSize: '0.95rem' }}>
                <SvgIcon iconName="duo-diagram-project" sizeName="lg" style={iconStyle} />
                <strong>Query Graph Construction</strong> — Build a mini-graph from the query
              </div>
              <div style={{ marginBottom: '0.7rem', fontSize: '0.95rem' }}>
                <SvgIcon iconName="duo-link" sizeName="lg" style={iconStyle} />
                <strong>Context Path Stitching</strong> — Stitch paths into coherent context
              </div>
              <div style={{ marginBottom: '0.7rem', fontSize: '0.95rem' }}>
                <SvgIcon iconName="duo-robot" sizeName="lg" style={iconStyle} />
                <strong>LLM-Guided Graph Expansion</strong> — Adaptive traversal via LLM
              </div>
            </div>
          </div>
        </div>
      ),
      notes: 'Overview of all 13 graph-based retrieval techniques'
    },
    {
      id: 3,
      title: '1. Node-Level Retrieval',
      content: (
        <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#3b82f6' }}>
            <SvgIcon iconName="duo-circle-dot" sizeName="2xl" style={iconStyle} />
            <strong>1. Node-Level Retrieval</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal / What It Solves</strong>
              </div>
              <div>Precise entity/topic lookup; reduces noise and hallucination.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Map query to best-matching node via titles/aliases/embeddings; return node's attached content.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>FAQs, glossaries, entity-centric KBs, short queries.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-database" sizeName="lg" style={iconStyle} />
              <strong>Data Needed</strong>
            </div>
            <div>Node metadata (title, aliases), text chunks, node embeddings, optional entity linker.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Implementation Steps</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Embed query and search node index (title+embedding)</li>
              <li>Rank by combined exact match + embedding</li>
              <li>Return top-k nodes and their attached chunks</li>
            </ul>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#10b981', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>High precision, simple, fast.</div>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ef4444', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>May miss context or relationships; brittle for long, multi-hop queries.</div>
            </div>
          </div>
        </div>
      ),
      notes: 'Node-Level Retrieval - precise entity lookup'
    },
    {
      id: 4,
      title: '2. Edge-Weighted Retrieval',
      content: (
        <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#3b82f6' }}>
            <SvgIcon iconName="duo-arrow-right-arrow-left" sizeName="2xl" style={iconStyle} />
            <strong>2. Edge-Weighted Retrieval</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal / What It Solves</strong>
              </div>
              <div>Prioritize stronger, more meaningful relationships.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Use edge weights (e.g., citations, co-occurrence, confidence) to rank candidate nodes.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Heterogeneous graphs with rich edge metadata; trust/scoring matters.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-database" sizeName="lg" style={iconStyle} />
              <strong>Data Needed</strong>
            </div>
            <div>Edge weights/types, node embeddings (optional), normalization scheme.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Implementation Steps</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Identify seed nodes from query</li>
              <li>Score neighbors by edge weight (and decay by hop)</li>
              <li>Rank and select top-k nodes</li>
            </ul>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontStyle: 'italic' }}>
              Example: A -(weight 0.9)→ B; A -(0.3)→ C ⇒ pick B.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#10b981', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Trust-aware ranking; interpretable via weights.</div>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ef4444', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Requires good edge weighting; can bias to popular nodes.</div>
            </div>
          </div>
        </div>
      ),
      notes: 'Edge-Weighted Retrieval - prioritize by relationship strength'
    },
    {
      id: 5,
      title: '3. Neighborhood Expansion',
      content: (
        <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#3b82f6' }}>
            <SvgIcon iconName="duo-circle-nodes" sizeName="2xl" style={iconStyle} />
            <strong>3. Neighborhood Expansion</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal / What It Solves</strong>
              </div>
              <div>Adds immediate context (definitions, examples, references).</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Retrieve seed node plus its 1-hop neighbors with filters.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Need local context around a concept (API, ontology, doc sections).</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-database" sizeName="lg" style={iconStyle} />
              <strong>Data Needed</strong>
            </div>
            <div>Adjacency lists, node/edge types, optional neighbor caps per type.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Implementation Steps</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Find top seed node(s)</li>
              <li>Expand 1-hop with type filters (e.g., definition, example, reference)</li>
              <li>Deduplicate and cap per type</li>
            </ul>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontStyle: 'italic' }}>
              Example: A → &#123;B, C, D&#125;
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#10b981', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Simple, contextual, low-latency.</div>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ef4444', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Can introduce noise; misses longer reasoning paths.</div>
            </div>
          </div>
        </div>
      ),
      notes: 'Neighborhood Expansion - retrieve node with immediate neighbors'
    },
    {
      id: 6,
      title: '4. Path-Based Retrieval',
      content: (
        <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#3b82f6' }}>
            <SvgIcon iconName="duo-route" sizeName="2xl" style={iconStyle} />
            <strong>4. Path-Based Retrieval</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal / What It Solves</strong>
              </div>
              <div>Multi-hop reasoning and evidence chains.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Search for high-relevance paths connecting seed(s) to target concepts.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Why/how questions, causal chains, compliance dependencies.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-database" sizeName="lg" style={iconStyle} />
              <strong>Data Needed</strong>
            </div>
            <div>Edge types, path constraints, path scoring (length, weights, semantics).</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Implementation Steps</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Seed from query (embedding/BM25/entity)</li>
              <li>Enumerate constrained paths up to L hops</li>
              <li>Score paths; return best path(s) and attached chunks</li>
            </ul>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontStyle: 'italic' }}>
              Example: A → B → C
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#10b981', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Supports reasoning; traceable evidence.</div>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ef4444', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>More expensive; path explosion without constraints.</div>
            </div>
          </div>
        </div>
      ),
      notes: 'Path-Based Retrieval - multi-hop reasoning chains'
    },
    {
      id: 7,
      title: '5. Community / Cluster Retrieval',
      content: (
        <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#3b82f6' }}>
            <SvgIcon iconName="duo-object-group" sizeName="2xl" style={iconStyle} />
            <strong>5. Community / Cluster Retrieval</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal / What It Solves</strong>
              </div>
              <div>Thematic coverage and diversity within a topic.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Detect communities (Louvain/Leiden/semantic clusters) and retrieve top nodes from a cluster.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Broad queries, topic exploration, overviews.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-database" sizeName="lg" style={iconStyle} />
              <strong>Data Needed</strong>
            </div>
            <div>Cluster labels, membership scores, intra-cluster rankings.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Implementation Steps</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Map query to best cluster(s)</li>
              <li>Select top-k nodes within cluster by centrality/similarity</li>
              <li>Aggregate chunks for summary</li>
            </ul>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontStyle: 'italic' }}>
              Example: Cluster X contains &#123;A, B, C&#125; ⇒ return all three.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#10b981', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Broad coverage; reduces narrow bias.</div>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ef4444', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Lower precision; depends on clustering quality.</div>
            </div>
          </div>
        </div>
      ),
      notes: 'Community/Cluster Retrieval - thematic groups'
    },
    {
      id: 8,
      title: '6. Hierarchical Graph Retrieval',
      content: (
        <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#3b82f6' }}>
            <SvgIcon iconName="duo-sitemap" sizeName="2xl" style={iconStyle} />
            <strong>6. Hierarchical Graph Retrieval</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal / What It Solves</strong>
              </div>
              <div>Navigates taxonomies; right granularity (parent→child).</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Traverse up/down hierarchy to match query specificity.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Docs with sections, product catalogs, ontologies.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-database" sizeName="lg" style={iconStyle} />
              <strong>Data Needed</strong>
            </div>
            <div>Parent-child edges, level metadata, leaf chunks.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Implementation Steps</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Classify query specificity (parent vs child)</li>
              <li>Select nodes at target level</li>
              <li>Expand to children or roll-up to parent as needed</li>
            </ul>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontStyle: 'italic' }}>
              Example: Parent A → Subtopic B → Leaf C.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#10b981', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Granularity control; structured summaries.</div>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ef4444', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Requires clean hierarchy; cross-links complicate.</div>
            </div>
          </div>
        </div>
      ),
      notes: 'Hierarchical Graph Retrieval - navigate taxonomies'
    },
    {
      id: 9,
      title: '7. Graph + Dense Vector Hybrid',
      content: (
        <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#3b82f6' }}>
            <SvgIcon iconName="duo-layer-group" sizeName="2xl" style={iconStyle} />
            <strong>7. Graph + Dense Vector Hybrid Retrieval</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal / What It Solves</strong>
              </div>
              <div>Combine semantic match with structural relevance.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Blend embedding similarity with graph features (degree, proximity, edge weights).</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Ambiguous queries; noisy graphs; heterogeneous data.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-database" sizeName="lg" style={iconStyle} />
              <strong>Data Needed</strong>
            </div>
            <div>Node embeddings, edge features, fusion/scoring formula.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Implementation Steps</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Retrieve by embeddings (top-k)</li>
              <li>Re-rank using graph scores (e.g., proximity to seeds)</li>
              <li>Return top results after fusion</li>
            </ul>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontStyle: 'italic' }}>
              Example: A (query) ~ B (0.83 sim); B near C ⇒ &#123;B, C&#125;
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#10b981', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Better precision/recall balance.</div>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ef4444', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Tuning fusion weights is non-trivial.</div>
            </div>
          </div>
        </div>
      ),
      notes: 'Graph + Dense Vector Hybrid - combine semantics with structure'
    },
    {
      id: 10,
      title: '8. Graph + BM25 Hybrid',
      content: (
        <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#3b82f6' }}>
            <SvgIcon iconName="duo-magnifying-glass-chart" sizeName="2xl" style={iconStyle} />
            <strong>8. Graph + BM25 Hybrid</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal / What It Solves</strong>
              </div>
              <div>Keyword grounding and lexical precision.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Cross-validate dense/graph candidates using BM25; or intersect/union strategies.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Technical terms, exact codes, sparse text.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-database" sizeName="lg" style={iconStyle} />
              <strong>Data Needed</strong>
            </div>
            <div>Inverted index, BM25 scores, graph/embedding candidates.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Implementation Steps</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Get candidates from graph/dense</li>
              <li>Score with BM25 on node/chunk text</li>
              <li>Re-rank or filter by BM25 thresholds</li>
            </ul>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontStyle: 'italic' }}>
              Example: A (dense) → &#123;B, C&#125;; BM25 keeps B.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#10b981', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Reduces semantically-close-but-wrong picks.</div>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ef4444', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Misses paraphrases; two retrieval systems to maintain.</div>
            </div>
          </div>
        </div>
      ),
      notes: 'Graph + BM25 Hybrid - keyword validation'
    },
    {
      id: 11,
      title: '9. Semantic Graph Traversal',
      content: (
        <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#3b82f6' }}>
            <SvgIcon iconName="duo-diagram-next" sizeName="2xl" style={iconStyle} />
            <strong>9. Semantic Graph Traversal</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal / What It Solves</strong>
              </div>
              <div>Adaptive follow of semantically strong links.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Move along edges only if node/edge similarity crosses a threshold.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Noisy graphs; need to avoid drift while exploring.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-database" sizeName="lg" style={iconStyle} />
              <strong>Data Needed</strong>
            </div>
            <div>Node/edge embeddings, similarity thresholds, stop criteria.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Implementation Steps</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Seed nodes from query</li>
              <li>For each neighbor, compute semantic score</li>
              <li>Expand only if score ≥ τ; stop at budget</li>
            </ul>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontStyle: 'italic' }}>
              Example: A → B (0.82) → C (0.79) ; skip D (0.45).
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#10b981', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Precision during traversal.</div>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ef4444', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Threshold tuning; may miss useful weak links.</div>
            </div>
          </div>
        </div>
      ),
      notes: 'Semantic Graph Traversal - threshold-based exploration'
    },
    {
      id: 12,
      title: '10. Graph Walk-Based Ranking',
      content: (
        <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#3b82f6' }}>
            <SvgIcon iconName="duo-ranking-star" sizeName="2xl" style={iconStyle} />
            <strong>10. Graph Walk-Based Ranking (PageRank/Personalized)</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal / What It Solves</strong>
              </div>
              <div>Identify authoritative/central nodes for a query.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Random walk with restart from seed set; rank by stationary probabilities.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Citation graphs, knowledge graphs, when centrality implies usefulness.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-database" sizeName="lg" style={iconStyle} />
              <strong>Data Needed</strong>
            </div>
            <div>Transition matrix, restart set, damping, edge weights.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Implementation Steps</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Select seed nodes from query</li>
              <li>Run PPR with damping α</li>
              <li>Return top nodes by score</li>
            </ul>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontStyle: 'italic' }}>
              Example: Restart at A; steady-state ranks B &gt; C &gt; D.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#10b981', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Global signal; robust to noise.</div>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ef4444', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Compute cost; sensitive to seed choice.</div>
            </div>
          </div>
        </div>
      ),
      notes: 'Graph Walk-Based Ranking - PageRank and PPR'
    },
    {
      id: 13,
      title: '11. Query Graph Construction',
      content: (
        <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#3b82f6' }}>
            <SvgIcon iconName="duo-diagram-project" sizeName="2xl" style={iconStyle} />
            <strong>11. Query Graph Construction</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal / What It Solves</strong>
              </div>
              <div>Structured intent capture; precise matching.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Parse query into entities/relations; build mini-graph; match against KB.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Complex relational queries, compliance, troubleshooting.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-database" sizeName="lg" style={iconStyle} />
              <strong>Data Needed</strong>
            </div>
            <div>NER/RE models, schema, subgraph matching algo.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Implementation Steps</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Extract entities/relations from query</li>
              <li>Build query graph; define constraints</li>
              <li>Run subgraph or pattern match; retrieve matched nodes/edges</li>
            </ul>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontStyle: 'italic' }}>
              Example: A relates_to B via r1, B connects_to C via r2.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#10b981', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Highly precise; explainable matches.</div>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ef4444', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Extraction errors; setup complexity.</div>
            </div>
          </div>
        </div>
      ),
      notes: 'Query Graph Construction - structured intent matching'
    },
    {
      id: 14,
      title: '12. Context Path Stitching',
      content: (
        <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#3b82f6' }}>
            <SvgIcon iconName="duo-link" sizeName="2xl" style={iconStyle} />
            <strong>12. Context Path Stitching</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal / What It Solves</strong>
              </div>
              <div>Converts disjoint paths into readable context.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>Order and merge path snippets; deduplicate; add bridging sentences.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Long-form answers; evidence synthesis.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-database" sizeName="lg" style={iconStyle} />
              <strong>Data Needed</strong>
            </div>
            <div>Path lists, node texts, summarizer/ordering heuristic.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Implementation Steps</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Select top path(s) from retrieval</li>
              <li>Merge node snippets by path order</li>
              <li>Summarize and add transitions</li>
            </ul>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontStyle: 'italic' }}>
              Example: Path A→B→C ⇒ stitched narrative: A then B therefore C.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#10b981', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Coherent context; reduces hallucinations.</div>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ef4444', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Extra latency; needs good summarization.</div>
            </div>
          </div>
        </div>
      ),
      notes: 'Context Path Stitching - merge paths into coherent narratives'
    },
    {
      id: 15,
      title: '13. LLM-Guided Graph Expansion',
      content: (
        <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#3b82f6' }}>
            <SvgIcon iconName="duo-robot" sizeName="2xl" style={iconStyle} />
            <strong>13. LLM-Guided Graph Expansion</strong>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} />
                <strong>Goal / What It Solves</strong>
              </div>
              <div>Adaptive exploration under a token/latency budget.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="lg" style={iconStyle} />
                <strong>How It Works</strong>
              </div>
              <div>LLM chooses next nodes/edges to expand based on current context and uncertainty.</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} />
              <strong>When to Use</strong>
            </div>
            <div>Open-ended queries; large graphs; interactive Q&A.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-database" sizeName="lg" style={iconStyle} />
              <strong>Data Needed</strong>
            </div>
            <div>Node summaries, expansion API, budget policy, feedback signals.</div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="lg" style={iconStyle} />
              <strong>Implementation Steps</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Retrieve initial seeds and brief summaries</li>
              <li>Ask LLM to propose expansions with rationale</li>
              <li>Expand top suggestions; iterate until budget met</li>
            </ul>
            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontStyle: 'italic' }}>
              Example: Start at A; LLM selects B and C; next expands C→D.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#10b981', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-thumbs-up" sizeName="lg" style={iconStyle} />
                <strong>Pros</strong>
              </div>
              <div>Flexible; focuses on promising areas.</div>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#ef4444', marginBottom: '0.5rem' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="lg" style={iconStyle} />
                <strong>Cons</strong>
              </div>
              <div>Costly; needs guardrails for drift.</div>
            </div>
          </div>
        </div>
      ),
      notes: 'LLM-Guided Graph Expansion - adaptive AI-driven exploration'
    },
    {
      id: 16,
      title: 'Putting It Together: Patterns',
      content: (
        <div style={{ fontSize: '0.9rem', lineHeight: '1.7' }}>
          <div style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1.5rem', color: '#3b82f6' }}>
            <SvgIcon iconName="duo-puzzle-piece" sizeName="2xl" style={iconStyle} />
            <strong>Putting It Together: Patterns</strong>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '10px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.8rem', fontSize: '1.1rem' }}>
                <SvgIcon iconName="duo-layer-group" sizeName="xl" style={iconStyle} />
                <strong>Common Combos</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <SvgIcon iconName="duo-wand-magic-sparkles" sizeName="sm" style={iconStyle} />
                  <strong>Hybrid:</strong> Dense + Graph (7) + BM25 (8)
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <SvgIcon iconName="duo-brain" sizeName="sm" style={iconStyle} />
                  <strong>Reasoning:</strong> Path (4) + Stitching (12) + PPR (10)
                </li>
                <li>
                  <SvgIcon iconName="duo-chart-network" sizeName="sm" style={iconStyle} />
                  <strong>Coverage:</strong> Cluster (5) + Hierarchical (6) + Neighborhood (3)
                </li>
              </ul>
            </div>

            <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '10px' }}>
              <div style={{ color: '#10b981', marginBottom: '0.8rem', fontSize: '1.1rem' }}>
                <SvgIcon iconName="duo-gears" sizeName="xl" style={iconStyle} />
                <strong>Operational Tips</strong>
              </div>
              <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}>
                  <SvgIcon iconName="duo-gauge-high" sizeName="sm" style={iconStyle} />
                  Cap neighbors per type; cache frequent seeds
                </li>
                <li style={{ marginBottom: '0.5rem' }}>
                  <SvgIcon iconName="duo-clipboard-list" sizeName="sm" style={iconStyle} />
                  Log edge decisions; tune thresholds offline
                </li>
                <li>
                  <SvgIcon iconName="duo-chart-line" sizeName="sm" style={iconStyle} />
                  Measure utility via answer F1 and citation hit-rate
                </li>
              </ul>
            </div>
          </div>

          <div style={{ background: 'rgba(139, 92, 246, 0.15)', padding: '1.2rem', borderRadius: '10px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.8rem', fontSize: '1.1rem' }}>
              <SvgIcon iconName="duo-rocket" sizeName="xl" style={iconStyle} />
              <strong>Next Steps</strong>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', fontSize: '0.9rem' }}>
              <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '0.8rem', borderRadius: '8px' }}>
                <SvgIcon iconName="duo-1" sizeName="lg" style={iconStyle} />
                Pick 2–3 techniques to pilot
              </div>
              <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '0.8rem', borderRadius: '8px' }}>
                <SvgIcon iconName="duo-2" sizeName="lg" style={iconStyle} />
                Establish metrics and budgets (latency, tokens)
              </div>
              <div style={{ background: 'rgba(239, 68, 68, 0.2)', padding: '0.8rem', borderRadius: '8px' }}>
                <SvgIcon iconName="duo-3" sizeName="lg" style={iconStyle} />
                Add safety rails for LLM-guided expansion
              </div>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(245, 158, 11, 0.15)', borderRadius: '10px', textAlign: 'center' }}>
            <SvgIcon iconName="duo-lightbulb" sizeName="xl" style={iconStyle} />
            <strong style={{ fontSize: '1rem' }}>Remember:</strong> Start simple, measure impact, and iterate based on your specific use case and constraints.
          </div>
        </div>
      ),
      notes: 'Summary with common patterns, operational tips, and next steps'
    }
  ]
};

