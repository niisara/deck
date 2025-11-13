import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const vectorIndexingDeck: Deck = {
  id: 'vector-indexing-deck',
  name: 'Vector Indexing Schemes',
  description: '9 Indexing Schemes for Efficient Vector Retrieval',
  category: 'RAG',
  theme: 'black',
  slides: [],
  slideGroups: [
    {
      id: 'intro',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          title: 'Vector Indexing Schemes Cheat Sheet',
          content: (
            <div style={{ textAlign: 'left' }}>
              <h2>9 Indexing Schemes for Efficient Vector Retrieval</h2>
              <div style={{ display: 'flex', gap: '30px', marginTop: '50px' }}>
                <SvgIcon iconName="duo-diagram-project" sizeName="4x" style={{ color: '#00d4ff' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-bolt" sizeName="4x" style={{ color: '#ff6b35' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-microchip" sizeName="4x" style={{ color: '#4ecdc4' }} darkModeInvert={true} />
              </div>
              <p style={{ fontSize: '0.9em', marginTop: '40px', color: '#888' }}>Technical Reference Guide • 2025</p>
            </div>
          ),
          backgroundColor: '#0a0a0a',
          notes: 'Title slide for Vector Indexing Schemes covering 9 different approaches to efficient vector retrieval'
        },
        {
          id: 2,
          title: 'Overview & Quick Comparison',
          icon: { name: 'duo-table' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <h3>Comparing 9 Vector Indexing Schemes across Key Dimensions</h3>
              <div style={{ fontSize: '0.65em', marginTop: '20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #00d4ff' }}>
                      <th style={{ padding: '10px' }}>Scheme</th>
                      <th style={{ padding: '10px' }}>Speed</th>
                      <th style={{ padding: '10px' }}>Memory</th>
                      <th style={{ padding: '10px' }}>Recall</th>
                      <th style={{ padding: '10px' }}>Scale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: 'rgba(255, 107, 53, 0.1)' }}>
                      <td style={{ padding: '8px' }}><SvgIcon iconName="duo-database" sizeName="1x" style={{ marginRight: '5px' }} darkModeInvert={true} />Flat (Brute Force)</td>
                      <td style={{ padding: '8px' }}>Slow O(N)</td>
                      <td style={{ padding: '8px' }}>High</td>
                      <td style={{ padding: '8px' }}>100%</td>
                      <td style={{ padding: '8px' }}>Small→Mid</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(0, 212, 255, 0.1)' }}>
                      <td style={{ padding: '8px' }}><SvgIcon iconName="duo-layer-group" sizeName="1x" style={{ marginRight: '5px' }} darkModeInvert={true} />HNSW</td>
                      <td style={{ padding: '8px' }}>Very fast</td>
                      <td style={{ padding: '8px' }}>High</td>
                      <td style={{ padding: '8px' }}>Excellent</td>
                      <td style={{ padding: '8px' }}>Mid→100M</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(78, 205, 196, 0.1)' }}>
                      <td style={{ padding: '8px' }}><SvgIcon iconName="duo-folder-tree" sizeName="1x" style={{ marginRight: '5px' }} darkModeInvert={true} />IVF</td>
                      <td style={{ padding: '8px' }}>Fast</td>
                      <td style={{ padding: '8px' }}>Moderate</td>
                      <td style={{ padding: '8px' }}>Good</td>
                      <td style={{ padding: '8px' }}>Large</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(255, 195, 0, 0.1)' }}>
                      <td style={{ padding: '8px' }}><SvgIcon iconName="duo-compress" sizeName="1x" style={{ marginRight: '5px' }} darkModeInvert={true} />IVF+PQ</td>
                      <td style={{ padding: '8px' }}>Very fast</td>
                      <td style={{ padding: '8px' }}>Low</td>
                      <td style={{ padding: '8px' }}>Med→High</td>
                      <td style={{ padding: '8px' }}>100M→B+</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(155, 89, 182, 0.1)' }}>
                      <td style={{ padding: '8px' }}><SvgIcon iconName="duo-tree" sizeName="1x" style={{ marginRight: '5px' }} darkModeInvert={true} />Annoy</td>
                      <td style={{ padding: '8px' }}>Good</td>
                      <td style={{ padding: '8px' }}>Moderate</td>
                      <td style={{ padding: '8px' }}>Good</td>
                      <td style={{ padding: '8px' }}>Small→Mid</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)' }}>
                      <td style={{ padding: '8px' }}><SvgIcon iconName="duo-brands-google" sizeName="1x" style={{ marginRight: '5px' }}darkModeInvert={true} />ScaNN</td>
                      <td style={{ padding: '8px' }}>Very fast</td>
                      <td style={{ padding: '8px' }}>Low→Mod</td>
                      <td style={{ padding: '8px' }}>High</td>
                      <td style={{ padding: '8px' }}>Large</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(231, 76, 60, 0.1)' }}>
                      <td style={{ padding: '8px' }}><SvgIcon iconName="duo-hashtag" sizeName="1x" style={{ marginRight: '5px' }}darkModeInvert={true} />LSH</td>
                      <td style={{ padding: '8px' }}>Fast</td>
                      <td style={{ padding: '8px' }}>High</td>
                      <td style={{ padding: '8px' }}>Approx</td>
                      <td style={{ padding: '8px' }}>Large</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)' }}>
                      <td style={{ padding: '8px' }}><SvgIcon iconName="duo-project-diagram" sizeName="1x" style={{ marginRight: '5px' }}darkModeInvert={true} />Graph-based ANN</td>
                      <td style={{ padding: '8px' }}>Very fast</td>
                      <td style={{ padding: '8px' }}>Low→Mod</td>
                      <td style={{ padding: '8px' }}>Excellent</td>
                      <td style={{ padding: '8px' }}>100M→B+</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(241, 196, 15, 0.1)' }}>
                      <td style={{ padding: '8px' }}><SvgIcon iconName="duo-binary" sizeName="1x" style={{ marginRight: '5px' }}darkModeInvert={true} />Multi-Index Hashing</td>
                      <td style={{ padding: '8px' }}>Fast Hamming</td>
                      <td style={{ padding: '8px' }}>Mod→High</td>
                      <td style={{ padding: '8px' }}>Exact (Hamming)</td>
                      <td style={{ padding: '8px' }}>Large (binary)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ),
          backgroundColor: '#111',
          notes: 'Comparison table showing all 9 indexing schemes across key performance dimensions'
        }
      ]
    },
    {
      id: 'flat',
      title: 'Flat (Brute Force)',
      slides: [
        {
          id: 3,
          title: 'Flat (Brute Force)',
          icon: { name: 'duo-list' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-database" sizeName="3x" style={{ color: '#ff6b35' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-bullseye" sizeName="2x" style={{ color: '#00ff00' }} darkModeInvert={true} />
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <h3 style={{ color: '#ff6b35', marginBottom: '15px' }}>The simplest vector index with exact search guarantees</h3>
                
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '5px', lineHeight: '1.5' }}>No index; raw vectors stored contiguously in memory. Each query computes distance against all vectors in the collection. Often accelerated with SIMD instructions or GPU computation for performance.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(255, 107, 53, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ffb74d' }}><SvgIcon iconName="duo-gauge" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Slow O(N·d) per query. Returns exact top-k results. Good throughput with batching and GPU.</p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(255, 107, 53, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ffb74d' }}><SvgIcon iconName="duo-memory" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>High - Stores full vectors. Memory scales linearly. Requires 4·N·d bytes for 32-bit floats.</p>
                  </div>
                </div>
                
                <div style={{ marginBottom: '15px', padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ color: '#4ecdc4' }}><SvgIcon iconName="duo-check-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Use Case:</strong>
                  <p style={{ marginTop: '5px' }}>Exact search • Small-to-mid datasets • High update rates • Streaming • Datasets under ~1-10M vectors</p>
                </div>
                
                <div style={{ fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
                  <strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Key Notes:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Easiest to implement and maintain</li>
                    <li>Supports any distance metric (L2, cosine, IP, custom)</li>
                    <li>Trivially sharded across multiple machines</li>
                    <li>GPU implementations available (FAISS, Qdrant, Weaviate)</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a0f0a',
          notes: 'Flat/Brute Force: Simplest approach with exact results but O(N) complexity'
        }
      ]
    },
    {
      id: 'hnsw',
      title: 'HNSW',
      slides: [
        {
          id: 4,
          title: 'HNSW',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-layer-group" sizeName="3x" style={{ color: '#00d4ff' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-rocket" sizeName="2x" style={{ color: '#ff6b35' }} darkModeInvert={true} />
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <h3 style={{ color: '#00d4ff', marginBottom: '15px' }}>Hierarchical Navigable Small World - High-recall approximate nearest neighbor search</h3>
                
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '5px', lineHeight: '1.5' }}>Hierarchical navigable small-world graph with multi-layer proximity graph structure. Key parameters include M (max connections per node), efConstruction (search width during build), and efSearch (search width during query).</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#4fc3f7' }}><SvgIcon iconName="duo-gauge-high" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Very Fast sub-linear time. Millisecond-level queries at million-scale. Recall controlled by efSearch.</p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#4fc3f7' }}><SvgIcon iconName="duo-memory" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>High due to graph edges (2-3× raw vector memory). Higher temp memory during construction.</p>
                  </div>
                </div>
                
                <div style={{ marginBottom: '15px', padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ color: '#4ecdc4' }}><SvgIcon iconName="duo-check-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Use Case:</strong>
                  <p style={{ marginTop: '5px' }}>Low-latency, high-recall ANN search • Datasets up to ~100M vectors • Read-heavy workloads • Semi-static datasets where query performance is critical</p>
                </div>
                
                <div style={{ fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(255, 195, 0, 0.1)', borderRadius: '8px' }}>
                  <strong><SvgIcon iconName="duo-triangle-exclamation" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Important Notes:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Costly builds: Computationally expensive index construction</li>
                    <li>Updates/deletes: Expensive operations, may need partial rebuilds</li>
                    <li>Parameter tuning: Tune M and ef* for recall/performance trade-offs</li>
                    <li>Wide availability: FAISS, nmslib, Milvus, Qdrant, and more</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0a1520',
          notes: 'HNSW: High-performance graph-based approach with excellent recall and fast queries'
        }
      ]
    },
    {
      id: 'ivf',
      title: 'IVF (Inverted File Index)',
      slides: [
        {
          id: 5,
          title: 'IVF (Inverted File Index)',
          icon: { name: 'duo-folder-tree' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-folder-tree" sizeName="3x" style={{ color: '#4ecdc4' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={{ color: '#00d4ff' }} darkModeInvert={true} />
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <h3 style={{ color: '#4ecdc4', marginBottom: '15px' }}>A coarse quantization-based approach for efficient vector indexing and retrieval</h3>
                
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '5px', lineHeight: '1.5' }}>Coarse quantizer (k-means) with nlist clusters; vectors assigned to inverted lists; probe nprobe lists during search; typically performs exhaustive search within retrieved lists (often using Flat search).</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#81c784' }}><SvgIcon iconName="duo-gauge" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Fast with proper nprobe. Sub-linear time. Controllable recall/latency trade-off.</p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#81c784' }}><SvgIcon iconName="duo-memory" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Moderate - Stores full vectors plus centroids and list metadata.</p>
                  </div>
                </div>
                
                <div style={{ marginBottom: '15px', padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ color: '#ba68c8' }}><SvgIcon iconName="duo-check-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Use Case:</strong>
                  <p style={{ marginTop: '5px' }}>Large datasets needing high throughput and tunable recall • Online insertions required • Moderate memory constraints but high recall requirements</p>
                </div>
                
                <div style={{ fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(255, 195, 0, 0.1)', borderRadius: '8px' }}>
                  <strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Configuration Notes:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Requires training phase to generate cluster centroids</li>
                    <li>Performance depends on tuning nlist and nprobe</li>
                    <li>Sensitive to data distribution - unbalanced clusters impact performance</li>
                    <li>Often combined with re-ranking for higher recall</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0a1a1a',
          notes: 'IVF: Cluster-based approach offering tunable speed-recall tradeoffs'
        }
      ]
    },
    {
      id: 'ivf-pq',
      title: 'IVF + PQ (Product Quantization)',
      slides: [
        {
          id: 6,
          title: 'IVF + PQ (Product Quantization)',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-compress" sizeName="3x" style={{ color: '#ffc300' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-bolt" sizeName="2x" style={{ color: '#ff6b35' }} darkModeInvert={true} />
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.75em' }}>
                <h3 style={{ color: '#ffc300', marginBottom: '15px' }}>Inverted File Index combined with Product Quantization for efficient vector compression</h3>
                
                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '3px', lineHeight: '1.4' }}>IVF coarse quantizer (k-means clustering) plus PQ codes for residuals. Stores compact codes instead of raw vectors. Uses lookup tables (LUT) and Asymmetric Distance Computation (ADC) for efficient scoring.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(255, 195, 0, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ffb74d' }}><SvgIcon iconName="duo-gauge-high" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Speed:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '3px' }}>Very fast via table lookups. High QPS even on CPU.</p>
                  </div>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(255, 195, 0, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ffb74d' }}><SvgIcon iconName="duo-compress-arrows-alt" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '3px' }}>8-16 bytes/vector. Billion-scale in RAM.</p>
                  </div>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(255, 195, 0, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ffb74d' }}><SvgIcon iconName="duo-star" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Recall:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '3px' }}>Med-High. Boost with re-ranking.</p>
                  </div>
                </div>
                
                <div style={{ marginBottom: '12px', padding: '10px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ color: '#4ecdc4' }}><SvgIcon iconName="duo-check-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Use Case:</strong>
                  <p style={{ marginTop: '3px' }}>Memory-constrained large-scale ANN search (100M-B+ vectors) • Read-heavy workloads • Acceptable approximation in recall</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div style={{ fontSize: '0.85em', padding: '10px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
                    <strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Optimization:</strong>
                    <ul style={{ marginTop: '3px', lineHeight: '1.5', marginLeft: '15px' }}>
                      <li>OPQ rotation improves accuracy</li>
                      <li>Tune m (subquantizers) and nprobe</li>
                      <li>Re-ranking boosts recall</li>
                    </ul>
                  </div>
                  <div style={{ fontSize: '0.85em', padding: '10px', backgroundColor: 'rgba(255, 107, 53, 0.1)', borderRadius: '8px' }}>
                    <strong><SvgIcon iconName="duo-wrench" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Requirements:</strong>
                    <ul style={{ marginTop: '3px', lineHeight: '1.5', marginLeft: '15px' }}>
                      <li>Training on representative data</li>
                      <li>Available in FAISS, Milvus, Qdrant</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1500',
          notes: 'IVF+PQ: Combines clustering with vector compression for billion-scale search in RAM'
        }
      ]
    },
    {
      id: 'annoy',
      title: 'Annoy',
      slides: [
        {
          id: 7,
          title: 'Annoy',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-tree" sizeName="3x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-brands-spotify" sizeName="2x" style={{ color: '#1db954' }} darkModeInvert={true} />
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <h3 style={{ color: '#9b59b6', marginBottom: '15px' }}>Approximate Nearest Neighbors Oh Yeah - Simple and Efficient Vector Search</h3>
                
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '5px', lineHeight: '1.5' }}>Forest of random projection trees where each tree partitions vectors based on random hyperplanes. Index can be saved to disk and memory-mapped for efficient loading. Supports angular (cosine) and Euclidean distance metrics.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ba68c8' }}><SvgIcon iconName="duo-gauge" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Good performance with O(log n) per tree. Depends on n_trees and search_k parameters.</p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ba68c8' }}><SvgIcon iconName="duo-memory" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Moderate. Memory-mapped files support minimal RAM footprint. ~50-100 bytes per vector per tree.</p>
                  </div>
                </div>
                
                <div style={{ marginBottom: '15px', padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ color: '#4ecdc4' }}><SvgIcon iconName="duo-check-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Use Case:</strong>
                  <p style={{ marginTop: '5px' }}>Simple deployment • Read-only applications • Quick startup/cold start • Small-to-mid datasets • Production services with fixed indexes • Recommendation systems</p>
                </div>
                
                <div style={{ fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(29, 185, 84, 0.1)', borderRadius: '8px' }}>
                  <strong><SvgIcon iconName="duo-star" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Key Features:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Multiple language implementations with Python bindings</li>
                    <li>Deterministic build with fixed random seed</li>
                    <li>Tuning: n_trees (recall/memory) and search_k (recall/speed)</li>
                    <li>No dynamic deletes (effectively read-only after build)</li>
                    <li>Used extensively at Spotify for music recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#150a1a',
          notes: 'Annoy: Simple tree-based approach perfect for read-only deployments like Spotify recommendations'
        }
      ]
    },
    {
      id: 'scann',
      title: 'ScaNN',
      slides: [
        {
          id: 8,
          title: 'ScaNN',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-brands-google" sizeName="3x" style={{ color: '#4285f4' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-bolt-lightning" sizeName="2x" style={{ color: '#ea4335' }} darkModeInvert={true} />
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.75em' }}>
                <h3 style={{ color: '#4285f4', marginBottom: '15px' }}>Scalable Nearest Neighbors - Google's Vector Search Architecture</h3>
                
                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '3px', lineHeight: '1.4' }}>Hybrid partitioning (k-means/tree) + asymmetric hashing/quantization + reordering; optimized for dot/cosine distance metrics. Multi-stage architecture with partitioning → quantization → re-ranking.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(66, 133, 244, 0.1)', borderRadius: '8px', textAlign: 'left' }}>
                    <SvgIcon iconName="duo-gauge-high" sizeName="2x" style={{ color: '#4285f4' }} darkModeInvert={true} />
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}><strong>Very Fast</strong><br/>CPU/TPU Efficient</p>
                  </div>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(52, 168, 83, 0.1)', borderRadius: '8px', textAlign: 'left' }}>
                    <SvgIcon iconName="duo-memory" sizeName="2x" style={{ color: '#34a853' }} darkModeInvert={true} />
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}><strong>Low→Moderate</strong><br/>With Quantization</p>
                  </div>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(251, 188, 5, 0.1)', borderRadius: '8px', textAlign: 'left' }}>
                    <SvgIcon iconName="duo-star" sizeName="2x" style={{ color: '#fbbc05' }} darkModeInvert={true} />
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}><strong>High Recall</strong><br/>Near-SOTA</p>
                  </div>
                </div>
                
                <div style={{ marginBottom: '12px', padding: '10px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ color: '#4ecdc4' }}><SvgIcon iconName="duo-check-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Use Case:</strong>
                  <p style={{ marginTop: '3px' }}>Large-scale semantic search with inner product/cosine • TensorFlow/TF-Serving pipelines • Production deployments with high QPS requirements • Large-scale systems</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div style={{ fontSize: '0.85em', padding: '10px', backgroundColor: 'rgba(66, 133, 244, 0.1)', borderRadius: '8px' }}>
                    <strong><SvgIcon iconName="duo-thumbs-up" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Advantages:</strong>
                    <ul style={{ marginTop: '3px', lineHeight: '1.5', marginLeft: '15px' }}>
                      <li>Excellent TensorFlow integration</li>
                      <li>Google Cloud AI infrastructure</li>
                      <li>Near-SOTA recall-latency tradeoffs</li>
                    </ul>
                  </div>
                  <div style={{ fontSize: '0.85em', padding: '10px', backgroundColor: 'rgba(234, 67, 53, 0.1)', borderRadius: '8px' }}>
                    <strong><SvgIcon iconName="duo-triangle-exclamation" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Considerations:</strong>
                    <ul style={{ marginTop: '3px', lineHeight: '1.5', marginLeft: '15px' }}>
                      <li>Complex configuration required</li>
                      <li>Training and tuning needed</li>
                      <li>Updates less friendly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0a0f1a',
          notes: 'ScaNN: Google\'s production-grade system optimized for high throughput and TensorFlow ecosystems'
        }
      ]
    },
    {
      id: 'lsh',
      title: 'LSH (Locality Sensitive Hashing)',
      slides: [
        {
          id: 9,
          title: 'LSH (Locality Sensitive Hashing)',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-hashtag" sizeName="3x" style={{ color: '#e74c3c' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-table-cells" sizeName="2x" style={{ color: '#00d4ff' }} darkModeInvert={true} />
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.75em' }}>
                <h3 style={{ color: '#e74c3c', marginBottom: '15px' }}>Probabilistic algorithm for approximate nearest neighbor search using hash collisions</h3>
                
                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '3px', lineHeight: '1.4' }}>Multiple hash tables using LSH families (e.g., SimHash for cosine similarity, p-stable distributions for L2 distance). Query candidates are collected from matching buckets across tables. Each table uses a different hash function to increase collision probability for similar items.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ff6b6b' }}><SvgIcon iconName="duo-gauge" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '3px' }}>Sub-linear for supported metrics. Depends on L (tables) and k (hashes). Query touches small subset of buckets.</p>
                  </div>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ff6b6b' }}><SvgIcon iconName="duo-memory" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '3px' }}>High due to many tables. Each vector stored multiple times. Scales O(nL).</p>
                  </div>
                </div>
                
                <div style={{ marginBottom: '12px', padding: '10px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ color: '#4ecdc4' }}><SvgIcon iconName="duo-check-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Use Case:</strong>
                  <p style={{ marginTop: '3px' }}>Sparse or high-dimensional data • Streaming scenarios requiring fast updates • Applications needing theoretical guarantees • Specialized metrics with good LSH families</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div style={{ fontSize: '0.85em', padding: '10px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
                    <strong><SvgIcon iconName="duo-book" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />LSH Families:</strong>
                    <ul style={{ marginTop: '3px', lineHeight: '1.5', marginLeft: '15px' }}>
                      <li><strong>SimHash:</strong> Cosine similarity</li>
                      <li><strong>MinHash:</strong> Jaccard similarity</li>
                      <li><strong>p-stable:</strong> Euclidean (L2)</li>
                    </ul>
                  </div>
                  <div style={{ fontSize: '0.85em', padding: '10px', backgroundColor: 'rgba(255, 195, 0, 0.1)', borderRadius: '8px' }}>
                    <strong><SvgIcon iconName="duo-sliders" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Key Parameters:</strong>
                    <ul style={{ marginTop: '3px', lineHeight: '1.5', marginLeft: '15px' }}>
                      <li><strong>L:</strong> Number of hash tables</li>
                      <li><strong>k:</strong> Hashes per table</li>
                      <li>Insertions/deletions: straightforward</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a0a0a',
          notes: 'LSH: Probabilistic hashing approach with theoretical guarantees for specific distance metrics'
        }
      ]
    },
    {
      id: 'graph-ann',
      title: 'Graph-Based ANN',
      slides: [
        {
          id: 10,
          title: 'Graph-Based ANN (NSG, Vamana, DiskANN)',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-project-diagram" sizeName="3x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-hard-drive" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.75em' }}>
                <h3 style={{ color: '#2ecc71', marginBottom: '15px' }}>Navigable proximity graphs with controlled out-degree for efficient ANN search</h3>
                
                <div style={{ display: 'flex', gap: '20px', marginBottom: '12px' }}>
                  <div style={{ padding: '8px 15px', backgroundColor: 'rgba(46, 204, 113, 0.2)', borderRadius: '8px', fontWeight: 'bold' }}>NSG</div>
                  <div style={{ padding: '8px 15px', backgroundColor: 'rgba(52, 152, 219, 0.2)', borderRadius: '8px', fontWeight: 'bold' }}>Vamana</div>
                  <div style={{ padding: '8px 15px', backgroundColor: 'rgba(155, 89, 182, 0.2)', borderRadius: '8px', fontWeight: 'bold' }}>DiskANN</div>
                </div>
                
                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '3px', lineHeight: '1.4' }}>Proximity graphs with controlled out-degree (NSG/Vamana) or SSD-aware layouts (DiskANN). Single-layer navigable graphs where each node connects to its approximate nearest neighbors while maintaining graph navigability properties.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', textAlign: 'left' }}>
                    <SvgIcon iconName="duo-gauge-high" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}><strong>Very Fast</strong><br/>Sub-ms latency</p>
                  </div>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px', textAlign: 'left' }}>
                    <SvgIcon iconName="duo-memory" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}><strong>Low→Moderate</strong><br/>Sparse graphs</p>
                  </div>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', textAlign: 'left' }}>
                    <SvgIcon iconName="duo-hard-drive" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}><strong>DiskANN</strong><br/>SSD-offloaded</p>
                  </div>
                </div>
                
                <div style={{ marginBottom: '12px', padding: '10px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ color: '#4ecdc4' }}><SvgIcon iconName="duo-check-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Use Case:</strong>
                  <p style={{ marginTop: '3px' }}>Web-scale search under RAM constraints • Production environments with strict latency SLOs • Read-heavy workloads with billions of vectors • DiskANN for billion-scale with modest RAM</p>
                </div>
                
                <div style={{ fontSize: '0.85em', padding: '10px', backgroundColor: 'rgba(255, 195, 0, 0.1)', borderRadius: '8px' }}>
                  <strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Notes:</strong>
                  <ul style={{ marginTop: '3px', lineHeight: '1.5', marginLeft: '15px' }}>
                    <li>Complex build processes with careful pruning strategies</li>
                    <li>Difficult to update (mostly batch builds)</li>
                    <li>Tune graph degree and beam search width for optimal performance</li>
                    <li>DiskANN enables sub-millisecond latency even on SSDs</li>
                    <li>Achieves strong recall with careful construction</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0a1a0f',
          notes: 'Graph-based ANN: Advanced graph approaches including DiskANN for billion-scale search with SSD storage'
        }
      ]
    },
    {
      id: 'mih',
      title: 'Multi-Index Hashing (MIH)',
      slides: [
        {
          id: 11,
          title: 'Multi-Index Hashing (MIH)',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
                <SvgIcon iconName="duo-binary" sizeName="3x" style={{ color: '#f1c40f' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-microchip" sizeName="2x" style={{ color: '#e67e22' }} darkModeInvert={true} />
              </div>
              <div style={{ maxWidth: '900px', fontSize: '0.8em' }}>
                <h3 style={{ color: '#f1c40f', marginBottom: '15px' }}>Efficient exact search in Hamming space for binary and quantized representations</h3>
                
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '5px', lineHeight: '1.5' }}>Split binary code into m substrings; build m hash tables; intersect buckets for candidates; used for Hamming/PQ code search. Each substring is used as a key to index into its corresponding hash table.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(241, 196, 15, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#f39c12' }}><SvgIcon iconName="duo-gauge" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Fast exact/radius search in Hamming space; sub-linear for small radii. Efficient for exact queries with small Hamming distances.</p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(241, 196, 15, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#f39c12' }}><SvgIcon iconName="duo-memory" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Moderate→High (multiple indices). Creates m separate hash tables with pointers.</p>
                  </div>
                </div>
                
                <div style={{ marginBottom: '15px', padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ color: '#4ecdc4' }}><SvgIcon iconName="duo-check-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Use Case:</strong>
                  <p style={{ marginTop: '5px' }}>Binary embeddings or PQ code matching • Refine stage for IVF-PQ • Exact Hamming kNN needed • Image fingerprinting • Duplicate detection • Compact binary feature matching</p>
                </div>
                
                <div style={{ fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '8px' }}>
                  <strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Key Characteristics:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Limited to Hamming/binary codes</li>
                    <li>Parameter m critical (depends on code length and query radius)</li>
                    <li>GPU-friendly with bitwise operations</li>
                    <li>Common in large-scale code search pipelines</li>
                    <li>Well-suited for hardware acceleration</li>
                    <li>Efficient for binary hashes from LSH techniques</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a1500',
          notes: 'Multi-Index Hashing: Specialized approach for exact search in binary/Hamming space'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 12,
          title: 'Summary & Decision Guide',
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ maxWidth: '950px', fontSize: '0.7em' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <SvgIcon iconName="duo-map-location-dot" sizeName="2x" darkModeInvert={true} />
                  How to choose the right vector indexing scheme for your use case
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px', marginBottom: '15px' }}>
                  <div style={{ padding: '8px', backgroundColor: 'rgba(255, 107, 53, 0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="1x" style={{ color: '#ff6b35' }} darkModeInvert={true} />
                    <span>Need exact results or heavy updates?</span>
                  </div>
                  <div style={{ padding: '8px', backgroundColor: 'rgba(255, 107, 53, 0.15)', borderRadius: '6px', fontWeight: 'bold' }}>
                    → Flat (GPU for speed)
                  </div>
                  
                  <div style={{ padding: '8px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-rocket" sizeName="1x" style={{ color: '#00d4ff' }} darkModeInvert={true} />
                    <span>Low-latency high-recall, semi-static data?</span>
                  </div>
                  <div style={{ padding: '8px', backgroundColor: 'rgba(0, 212, 255, 0.15)', borderRadius: '6px', fontWeight: 'bold' }}>
                    → HNSW or NSG/Vamana
                  </div>
                  
                  <div style={{ padding: '8px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-sliders" sizeName="1x" style={{ color: '#4ecdc4' }} darkModeInvert={true} />
                    <span>Tunable speed/recall for large data?</span>
                  </div>
                  <div style={{ padding: '8px', backgroundColor: 'rgba(78, 205, 196, 0.15)', borderRadius: '6px', fontWeight: 'bold' }}>
                    → IVF (with refine)
                  </div>
                  
                  <div style={{ padding: '8px', backgroundColor: 'rgba(255, 195, 0, 0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-compress" sizeName="1x" style={{ color: '#ffc300' }} darkModeInvert={true} />
                    <span>RAM-constrained billion-scale?</span>
                  </div>
                  <div style={{ padding: '8px', backgroundColor: 'rgba(255, 195, 0, 0.15)', borderRadius: '6px', fontWeight: 'bold' }}>
                    → IVF+PQ (with refine)
                  </div>
                  
                  <div style={{ padding: '8px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-feather" sizeName="1x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                    <span>Simple, read-only, easy deploy?</span>
                  </div>
                  <div style={{ padding: '8px', backgroundColor: 'rgba(155, 89, 182, 0.15)', borderRadius: '6px', fontWeight: 'bold' }}>
                    → Annoy
                  </div>
                  
                  <div style={{ padding: '8px', backgroundColor: 'rgba(66, 133, 244, 0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-brands-google" sizeName="1x" style={{ color: '#4285f4' }} darkModeInvert={true} />
                    <span>Inner-product/cosine at high throughput?</span>
                  </div>
                  <div style={{ padding: '8px', backgroundColor: 'rgba(66, 133, 244, 0.15)', borderRadius: '6px', fontWeight: 'bold' }}>
                    → ScaNN
                  </div>
                  
                  <div style={{ padding: '8px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-hard-drive" sizeName="1x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                    <span>SSD-backed web scale, tight RAM?</span>
                  </div>
                  <div style={{ padding: '8px', backgroundColor: 'rgba(46, 204, 113, 0.15)', borderRadius: '6px', fontWeight: 'bold' }}>
                    → DiskANN
                  </div>
                  
                  <div style={{ padding: '8px', backgroundColor: 'rgba(241, 196, 15, 0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-binary" sizeName="1x" style={{ color: '#f1c40f' }} darkModeInvert={true} />
                    <span>Binary/Hamming or PQ-code exact search?</span>
                  </div>
                  <div style={{ padding: '8px', backgroundColor: 'rgba(241, 196, 15, 0.15)', borderRadius: '6px', fontWeight: 'bold' }}>
                    → MIH
                  </div>
                </div>

                <div style={{ padding: '12px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px', marginTop: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#ffd54f' }} darkModeInvert={true} />
                    <strong style={{ fontSize: '1.1em' }}>Tuning & Optimization Tips</strong>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.95em' }}>
                    <div>• Always measure recall@k vs latency tradeoff</div>
                    <div>• Use re-ranking with heavy compression (IVF+PQ, ScaNN)</div>
                    <div>• Batch queries together for better throughput</div>
                    <div>• Shard large indices for parallelism</div>
                    <div>• Normalize vectors for cosine similarity</div>
                    <div>• Consider dimensionality reduction (PCA)</div>
                    <div>• Explore hybrid strategies (ScaNN+refine)</div>
                    <div>• Test with realistic data distributions</div>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0a0a0a',
          notes: 'Summary slide with decision guide and optimization tips for choosing the right indexing scheme'
        }
      ]
    }
  ]
};
