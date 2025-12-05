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
                      <th style={{ padding: '10px' }}>Memory Use</th>
                      <th style={{ padding: '10px' }}>Recall</th>
                      <th style={{ padding: '10px' }}>Updates</th>
                      <th style={{ padding: '10px' }}>Scale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: 'rgba(255, 107, 53, 0.1)' }}>
                      <td style={{ padding: '8px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-database" sizeName="1x" style={{ marginRight: '5px', verticalAlign: 'middle' }} darkModeInvert={true} />Flat (Brute Force)</td>
                      <td style={{ padding: '8px' }}>Slow exact (O(N))</td>
                      <td style={{ padding: '8px' }}>High</td>
                      <td style={{ padding: '8px' }}>100%</td>
                      <td style={{ padding: '8px' }}>Excellent</td>
                      <td style={{ padding: '8px' }}>Small→Mid</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(0, 212, 255, 0.1)' }}>
                      <td style={{ padding: '8px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-layer-group" sizeName="1x" style={{ marginRight: '5px' }} darkModeInvert={true} />HNSW</td>
                      <td style={{ padding: '8px' }}>Fast</td>
                      <td style={{ padding: '8px' }}>High</td>
                      <td style={{ padding: '8px' }}>High</td>
                      <td style={{ padding: '8px' }}>Limited</td>
                      <td style={{ padding: '8px' }}>Mid→100M</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(78, 205, 196, 0.1)' }}>
                      <td style={{ padding: '8px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-folder-tree" sizeName="1x" style={{ marginRight: '5px' }} darkModeInvert={true} />IVF</td>
                      <td style={{ padding: '8px' }}>Fast (nprobe-driven)</td>
                      <td style={{ padding: '8px' }}>Moderate</td>
                      <td style={{ padding: '8px' }}>High-Approx</td>
                      <td style={{ padding: '8px' }}>Good</td>
                      <td style={{ padding: '8px' }}>Large</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(255, 195, 0, 0.1)' }}>
                      <td style={{ padding: '8px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-compress" sizeName="1x" style={{ marginRight: '5px' }} darkModeInvert={true} />IVF+PQ</td>
                      <td style={{ padding: '8px' }}>Very fast</td>
                      <td style={{ padding: '8px' }}>Low</td>
                      <td style={{ padding: '8px' }}>Med→High (with re-rank)</td>
                      <td style={{ padding: '8px' }}>OK</td>
                      <td style={{ padding: '8px' }}>100M→B+</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(155, 89, 182, 0.1)' }}>
                      <td style={{ padding: '8px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-expand" sizeName="1x" style={{ marginRight: '5px' }} darkModeInvert={true} />Annoy</td>
                      <td style={{ padding: '8px' }}>Good</td>
                      <td style={{ padding: '8px' }}>Moderate</td>
                      <td style={{ padding: '8px' }}>Approx</td>
                      <td style={{ padding: '8px' }}>Poor (read-only)</td>
                      <td style={{ padding: '8px' }}>Small→Mid</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)' }}>
                      <td style={{ padding: '8px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-pen-to-square" sizeName="1x" style={{ marginRight: '5px' }}darkModeInvert={true} />ScaNN</td>
                      <td style={{ padding: '8px' }}>Very fast</td>
                      <td style={{ padding: '8px' }}>Low→Mod</td>
                      <td style={{ padding: '8px' }}>High</td>
                      <td style={{ padding: '8px' }}>Limited</td>
                      <td style={{ padding: '8px' }}>Large</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(231, 76, 60, 0.1)' }}>
                      <td style={{ padding: '8px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-hashtag" sizeName="1x" style={{ marginRight: '5px' }}darkModeInvert={true} />LSH</td>
                      <td style={{ padding: '8px' }}>Fast (for supported metrics)</td>
                      <td style={{ padding: '8px' }}>High (many tables)</td>
                      <td style={{ padding: '8px' }}>Approx</td>
                      <td style={{ padding: '8px' }}>Good</td>
                      <td style={{ padding: '8px' }}>Large</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)' }}>
                      <td style={{ padding: '8px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ marginRight: '5px' }}darkModeInvert={true} />Graph-based ANN</td>
                      <td style={{ padding: '8px' }}>Very fast</td>
                      <td style={{ padding: '8px' }}>Low→High (variant)</td>
                      <td style={{ padding: '8px' }}>High</td>
                      <td style={{ padding: '8px' }}>Hard</td>
                      <td style={{ padding: '8px' }}>100M→B (DiskANN)</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(241, 196, 15, 0.1)' }}>
                      <td style={{ padding: '8px', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-floppy-disk" sizeName="1x" style={{ marginRight: '5px' }}darkModeInvert={true} />Multi-Index Hashing</td>
                      <td style={{ padding: '8px' }}>Fast for Hamming</td>
                      <td style={{ padding: '8px' }}>Mod→High</td>
                      <td style={{ padding: '8px' }}>Exact (Hamming)</td>
                      <td style={{ padding: '8px' }}>Good</td>
                      <td style={{ padding: '8px' }}>Large (binary)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ),
          backgroundColor: '#1a0f0a',
          notes: 'Comparison table showing all 9 indexing schemes across key performance dimensions'
        },
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
              <div style={{ fontSize: '0.8em' }}>
                <h3 style={{ color: '#ff6b35', marginBottom: '15px' }}>The simplest vector index with exact search guarantees</h3>
                
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '5px', lineHeight: '1.5' }}>No index; raw vectors stored contiguously in memory. Each query computes distance against all vectors in the collection. Often accelerated with SIMD instructions or GPU computation for performance.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(255, 107, 53, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ffb74d' }}><SvgIcon iconName="duo-gauge" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Slow O(N·d) per query, where N is collection size and d is vector dimension. Returns exact top-k results. Good throughput possible with batching and GPU acceleration. Predictable latency independent of data distribution.</p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(255, 107, 53, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ffb74d' }}><SvgIcon iconName="duo-brain" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>High - Stores full vectors in memory with minimal overhead. Memory usage scales linearly with dataset size and dimension. Typically requires 4·N·d bytes for 32-bit float vectors.</p>
                  </div>
                </div>
                
                <div style={{ marginBottom: '15px', padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ color: '#4ecdc4' }}><SvgIcon iconName="duo-check-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Use Case:</strong>
                  <p style={{ marginTop: '5px' }}>Exact search • Small-to-mid datasets • High update rates • Streaming • Datasets under ~1-10M vectors</p>
                  <ul>
                    <li>Exact search</li>
                    <li>Small-to-mid datasets</li>
                    <li>High update rates</li>
                    <li>Streaming</li>
                    <li>Ideal for applications requiring perfect accuracy, supporting heavy write workloads, or serving as a baseline for evaluating approximate algorithms</li>
                    <li>Works well for datasets under ~1-10M vectors depending on hardware</li>
                  </ul>
                </div>
                
                <div style={{ fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Key Notes:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Easiest to implement and maintain</li>
                    <li>Supports any distance metric (L2, cosine, IP, custom functions)</li>
                    <li>Trivially sharded/partitioned across multiple machines</li>
                    <li>Often available as GPU implementation (FAISS, Qdrant, Weaviate)</li>
                    <li>Used as refine step after approximate search in hybrid retrieval</li>
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
              <div style={{ fontSize: '0.8em' }}>
                <h3 style={{ color: '#00d4ff', marginBottom: '15px' }}>Hierarchical Navigable Small World - High-recall approximate nearest neighbor search</h3>
                
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '5px', lineHeight: '1.5' }}>Hierarchical navigable small-world graph with multi-layer proximity graph structure. Key parameters include M (max connections per node), efConstruction (search width during build), and efSearch (search width during query).</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#4fc3f7' }}><SvgIcon iconName="duo-gauge-high" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Very Fast sub-linear time complexity. Millisecond-level queries at million-scale. Recall rate precisely controlled by efSearch parameter.</p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#4fc3f7' }}><SvgIcon iconName="duo-brain" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>High memory footprint due to graph edges storage (typically 2-3× the raw vector memory). Higher temporary memory during index construction.</p>
                  </div>
                </div>

                <div style={{ marginBottom: '15px', fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-check-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Use Case:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Ideal for applications requiring low-latency</li>
                    <li>high-recall approximate nearest neighbor search with datasets up to ~100M vectors</li>
                    <li>Best suited for read-heavy or semi-static datasets where query performance is critical</li>
                  </ul>
                </div>
                
                <div style={{ fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(255, 195, 0, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-triangle-exclamation" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Important Notes:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Costly builds: Index construction is computationally expensive</li>
                    <li>Updates/deletes: Expensive operations that may require partial rebuilds</li>
                    <li>Distance metrics: Supports L2, cosine similarity, and inner product</li>
                    <li>Parameter tuning: Tune M and ef* for recall/performance trade-offs</li>
                    <li>Wide availability: Implemented in FAISS, nmslib, Milvus, Qdrant, and other vector databases</li>
                    <li>Performance tip: Higher M improves recall but increases memory usage</li>
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
              <div style={{ fontSize: '0.8em' }}>
                <h3 style={{ color: '#4ecdc4', marginBottom: '15px' }}>A coarse quantization-based approach for efficient vector indexing and retrieval</h3>
                
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '5px', lineHeight: '1.5' }}>Coarse quantizer (k-means) with nlist clusters; vectors assigned to inverted lists; probe nprobe lists during search; typically performs exhaustive search within retrieved lists (often using Flat search).</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#81c784' }}><SvgIcon iconName="duo-gauge" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Fast with proper nprobe configuration; sub-linear time complexity; controllable recall/latency trade-off by adjusting the number of clusters probed.</p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#81c784' }}><SvgIcon iconName="duo-brain" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Moderate - Stores full vectors plus centroids and list metadata; memory usage scales with vector dimensionality and number of clusters.</p>
                  </div>
                </div>

                <div style={{ marginBottom: '15px', fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-check-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Use Case:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Large datasets needing high throughput and tunable recall</li>
                    <li>Environments where online insertions are required</li>
                    <li>Systems with moderate memory constraints but high recall requirements</li>
                  </ul>
                </div>
                
                <div style={{ fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(255, 195, 0, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Configuration Notes:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Requires training phase to generate cluster centroids</li>
                    <li>Performance heavily depends on tuning nlist (number of clusters) and nprobe (clusters examined)</li>
                    <li>Sensitive to data distribution - unbalanced clusters may impact performance</li>
                    <li>Often combined with re-ranking strategies for higher recall</li>
                    <li>Widely implemented in libraries like FAISS, Hnswlib, and Milvus</li>
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
              <div style={{ fontSize: '0.75em' }}>
                <h3 style={{ color: '#ffc300', marginBottom: '15px' }}>Inverted File Index combined with Product Quantization for efficient vector compression</h3>
                
                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '3px', lineHeight: '1.4' }}>IVF coarse quantizer (k-means clustering) plus PQ codes for residuals. Stores compact codes instead of raw vectors. Uses lookup tables (LUT) and Asymmetric Distance Computation (ADC) for efficient scoring. Optional refine step can leverage raw vectors for higher precision.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(255, 195, 0, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ffb74d' }}><SvgIcon iconName="duo-gauge-high" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '3px' }}>Very fast due to table lookups and cache-friendly operations. Achieves high QPS (queries per second) even on standard CPU hardware. Search complexity depends on nprobe (number of clusters searched) and k (number of results).</p>
                  </div>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(255, 195, 0, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ffb74d' }}><SvgIcon iconName="duo-brain" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '3px' }}>Low memory footprint compared to exact methods. Typically compresses vectors to 8–16 bytes per vector (from original 100s-1000s of bytes). This compression enables billion-scale vector search within standard RAM limits.</p>
                  </div>
                </div>

                <div style={{ marginBottom: '15px', fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-check-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Use Case:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Ideal for memory-constrained large-scale approximate nearest neighbor search (100M-B+ vectors)</li>
                    <li>Well-suited for read-heavy workloads where some approximation in recall is acceptable</li>
                    <li>Particularly effective when paired with a refinement step for critical results</li>
                  </ul>
                </div>

                <div style={{ fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(255, 195, 0, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Notes:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Requires training on representative data sample</li>
                    <li>Consider OPQ (Optimized Product Quantization) rotation for better accuracy</li>
                    <li>Critical parameters include m (number of subquantizers), code size, and nprobe (clusters to search)</li>
                    <li>Adding a refine stage significantly boosts recall at the cost of extra latency</li>
                  </ul>
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
                <SvgIcon iconName="duo-expand" sizeName="3x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-star" sizeName="2x" style={{ color: '#1db954' }} darkModeInvert={true} />
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <h3 style={{ color: '#9b59b6', marginBottom: '15px' }}>Approximate Nearest Neighbors Oh Yeah - Simple and Efficient Vector Search</h3>
                
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '5px', lineHeight: '1.5' }}>Forest of random projection trees where each tree partitions vectors based on random hyperplanes. Index can be saved to disk and memory-mapped for efficient loading. Primarily supports angular (cosine) and Euclidean distance metrics.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ba68c8' }}><SvgIcon iconName="duo-gauge" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Good performance with sufficient trees. Query time scales with O(log n) per tree. Performance depends on n_trees and search_k parameters. Generally slower than HNSW when very high recall is required, but offers good speed-recall tradeoff.</p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ba68c8' }}><SvgIcon iconName="duo-brain" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Moderate memory requirements. Memory usage scales with number of trees. Can operate with minimal RAM footprint when using memory-mapped files. More trees increase both disk and memory usage but improve recall. Typically uses around 50-100 bytes per vector per tree.</p>
                  </div>
                </div>

                <div style={{ marginBottom: '15px', fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-check-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Use Case:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Simple deployment</li>
                    <li>Read-only applications</li>
                    <li>Quick startup/cold start</li>
                    <li>Small-to-mid datasets</li>
                    <li>Production services with fixed indexes</li>
                    <li>Particularly well-suited for recommendation systems, content-based search, and embedding lookup in applications with infrequent index updates</li>
                  </ul>
                </div>
                
                <div style={{ fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(29, 185, 84, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-star" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Notes:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>No dynamic deletes and limited update capabilities (effectively read-only after build)</li>
                    <li>Index build process is deterministic with a fixed random seed</li>
                    <li>Key tuning parameters: n_trees (more trees = higher recall but more memory) and search_k (more candidates = higher recall but slower)</li>
                    <li>Implemented in multiple languages with Python bindings being most popular</li>
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
                <SvgIcon iconName="duo-chart-line" sizeName="3x" style={{ color: '#4285f4' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-brain" sizeName="2x" style={{ color: '#ea4335' }} darkModeInvert={true} />
              </div>
              <div style={{ fontSize: '0.75em' }}>
                <h3 style={{ color: '#4285f4', marginBottom: '15px' }}>Scalable Nearest Neighbors - Google's Vector Search Architecture</h3>
                
                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '3px', lineHeight: '1.4' }}>Hybrid partitioning (k-means/tree) + asymmetric hashing/quantization + reordering; optimized for dot/cosine distance metrics. ScaNN uses a multi-stage architecture:</p>
                  <ul>
                    <li>Partitioning</li>
                    <li>Quantization</li>
                    <li>Re-ranking</li>
                  </ul>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ba68c8' }}><SvgIcon iconName="duo-gauge" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Very fast on CPU/TPU; near-SOTA recall-latency trade-offs. Especially optimized for high-throughput vector search scenarios with excellent parallelization.</p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ba68c8' }}><SvgIcon iconName="duo-brain" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Low→Moderate with quantization; extra structures for partitions and re-ranking. Memory usage can be tuned based on performance requirements.</p>
                  </div>
                </div>

                <div style={{ marginBottom: '15px', fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-check-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Use Case:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Large-scale semantic search with inner product/cosine distance metrics</li>
                    <li>TensorFlow/TF-Serving pipelines</li>
                    <li>Production deployments with high QPS requirements</li>
                    <li>Semantic Search</li>
                    <li>High QPS Systems</li>
                    <li>Ecosystem</li>
                  </ul>
                </div>

                <div style={{ fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(29, 185, 84, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-star" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Notes:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Requires training and careful configuration</li>
                    <li>Updates less friendly</li>
                    <li>Open-source by Google</li>
                    <li>Complex but performant</li>
                    <li>Excellent integration with TensorFlow serving and Google Cloud AI infrastructure</li>
                  </ul>
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
              <div style={{ fontSize: '0.75em' }}>
                <h3 style={{ color: '#e74c3c', marginBottom: '15px' }}>Probabilistic algorithm for approximate nearest neighbor search using hash collisions</h3>
                
                <div style={{ marginBottom: '12px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '3px', lineHeight: '1.4' }}>Multiple hash tables using LSH families (e.g., SimHash for cosine similarity, p-stable distributions for L2 distance). Query candidates are collected from matching buckets across tables. Each table uses a different hash function to increase collision probability for similar items.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ff6b6b' }}><SvgIcon iconName="duo-gauge" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '3px' }}>Sub-linear for supported metrics. Performance depends on number of tables (L) and hash functions per table (k). Query only touches a small subset of buckets, providing significant speedup over brute force for large datasets. Collision quality directly impacts search accuracy.</p>
                  </div>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ff6b6b' }}><SvgIcon iconName="duo-brain" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '3px' }}>High due to many tables and duplicated vector entries. Each vector is stored multiple times (once per table it hashes to). Memory usage scales with O(nL) where n is dataset size and L is number of hash tables. Trades memory for query speed and recall.</p>
                  </div>
                </div>

                <div style={{ marginBottom: '15px', fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-check-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Use Case:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Sparse or high-dimensional data where traditional methods struggle</li>
                    <li>Streaming scenarios requiring fast updates</li>
                    <li>Applications where theoretical guarantees for specific distance metrics are needed</li>
                    <li>Particularly effective for specialized metrics with good LSH families</li>
                  </ul>
                </div>

                <div style={{ fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(29, 185, 84, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-star" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Notes:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Only works for metrics with valid LSH families (cosine, Hamming, L1/L2, Jaccard)</li>
                    <li>Critical parameters to tune are L (tables) and k (hashes per table)</li>
                    <li>Insertions and deletions are straightforward</li>
                    <li>Recall degrades without careful tuning</li>
                    <li>Better theoretical understanding compared to graph-based methods</li>
                  </ul>
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
                <SvgIcon iconName="duo-shield-check" sizeName="3x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-check-double" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
              </div>
              <div style={{ fontSize: '0.75em' }}>
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

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ff6b6b' }}><SvgIcon iconName="duo-gauge" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '3px' }}>Very fast with excellent memory-latency trade-offs. DiskANN enables sub-millisecond latency even when vectors are stored on SSDs. Search begins from entry points and greedily traverses to nearest neighbors using beam search.</p>
                  </div>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ff6b6b' }}><SvgIcon iconName="duo-brain" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '3px' }}>Low→Moderate for NSG/Vamana (sparse graphs with controlled degree); DiskANN offloads vectors to SSD with small RAM graph core, enabling billion-scale indices with modest RAM footprint.</p>
                  </div>
                </div>

                <div style={{ marginBottom: '15px', fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-check-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Use Case:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Web-scale search under RAM constraints</li>
                    <li>Production environments with strict latency SLOs</li>
                    <li>Read-heavy workloads with billions of vectors</li>
                    <li>DiskANN specifically addresses the RAM bottleneck for very large indices</li>
                  </ul>
                </div>
                
                <div style={{ fontSize: '0.85em', padding: '10px', backgroundColor: 'rgba(255, 195, 0, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Implementation Notes:</strong>
                  <ul style={{ marginTop: '3px', lineHeight: '1.5', marginLeft: '15px' }}>
                    <li>Complex build processes with careful pruning strategies</li>
                    <li>Difficult to update (mostly batch builds)</li>
                    <li>Tune graph degree and beam search width for optimal performance</li>
                    <li>Achieves strong recall with careful construction</li>
                    <li>DiskANN provides excellent disk-based performance but requires SSD storage</li>
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
                <SvgIcon iconName="duo-brackets-square" sizeName="3x" style={{ color: '#f1c40f' }} darkModeInvert={true} />
                <SvgIcon iconName="duo-microchip" sizeName="2x" style={{ color: '#e67e22' }} darkModeInvert={true} />
              </div>
              <div style={{ fontSize: '0.8em' }}>
                <h3 style={{ color: '#f1c40f', marginBottom: '15px' }}>Efficient exact search in Hamming space for binary and quantized representations</h3>
                
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '5px', lineHeight: '1.5' }}>Split binary code into m substrings; build m hash tables; intersect buckets for candidates; used for Hamming/PQ code search. Each substring is used as a key to index into its corresponding hash table.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(241, 196, 15, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#f39c12' }}><SvgIcon iconName="duo-gauge" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Fast exact/radius search in Hamming space; sub-linear for small radii. Complexity depends on radius and distribution of codes. Particularly efficient for exact queries with small Hamming distances.</p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(241, 196, 15, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#f39c12' }}><SvgIcon iconName="duo-memory" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Moderate→High (multiple indices); depends on code length and m. Creates m separate hash tables, each with pointers to original vectors. Memory overhead increases with higher values of m.</p>
                  </div>
                </div>

                <div style={{ marginBottom: '15px', fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-check-circle" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Best Use Case:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Binary embeddings or PQ code matching</li>
                    <li>Refine stage for IVF-PQ</li>
                    <li>When exact Hamming kNN is needed</li>
                    <li>Ideal for applications requiring precise matching in binary space such as image fingerprinting, duplicate detection, and compact binary feature matching</li>
                  </ul>
                </div>
                
                <div style={{ fontSize: '0.85em', padding: '12px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '8px' }}>
                  <strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Key Characteristics:</strong>
                  <ul style={{ marginTop: '5px', lineHeight: '1.6', marginLeft: '20px' }}>
                    <li>Limited to Hamming/binary codes</li>
                    <li>parameter m critical</li>
                    <li>GPU-friendly; common in large-scale code search pipelines</li>
                    <li>Optimal m typically depends on code length and query radius</li>
                    <li>Well-suited for hardware acceleration with bitwise operations</li>
                    <li>Efficient for binary hashes from techniques like LSH</li>
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
              <div style={{ fontSize: '0.7em' }}>
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
                    → IVF+PQ (with refine on top-k)
                  </div>
                  
                  <div style={{ padding: '8px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-expand" sizeName="1x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                    <span>Simple, read-only, easy deploy?</span>
                  </div>
                  <div style={{ padding: '8px', backgroundColor: 'rgba(155, 89, 182, 0.15)', borderRadius: '6px', fontWeight: 'bold' }}>
                    → Annoy
                  </div>
                  
                  <div style={{ padding: '8px', backgroundColor: 'rgba(66, 133, 244, 0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-shield-check" sizeName="1x" style={{ color: '#4285f4' }} darkModeInvert={true} />
                    <span>Inner-product/cosine at high throughput?</span>
                  </div>
                  <div style={{ padding: '8px', backgroundColor: 'rgba(66, 133, 244, 0.15)', borderRadius: '6px', fontWeight: 'bold' }}>
                    → ScaNN
                  </div>

                  <div style={{ padding: '8px', backgroundColor: 'rgba(66, 133, 244, 0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-hashtag" sizeName="1x" style={{ color: '#4285f4' }} darkModeInvert={true} />
                    <span>Streaming with metric-specific LSH family?</span>
                  </div>
                  <div style={{ padding: '8px', backgroundColor: 'rgba(66, 133, 244, 0.15)', borderRadius: '6px', fontWeight: 'bold' }}>
                    → LSH (cosine/L2/Jaccard)
                  </div>
                  
                  <div style={{ padding: '8px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-check-double" sizeName="1x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                    <span>SSD-backed web scale, tight RAM?</span>
                  </div>
                  <div style={{ padding: '8px', backgroundColor: 'rgba(46, 204, 113, 0.15)', borderRadius: '6px', fontWeight: 'bold' }}>
                    → DiskANN
                  </div>
                  
                  <div style={{ padding: '8px', backgroundColor: 'rgba(241, 196, 15, 0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-brackets-square" sizeName="1x" style={{ color: '#f1c40f' }} darkModeInvert={true} />
                    <span>Binary/Hamming or PQ-code exact search?</span>
                  </div>
                  <div style={{ padding: '8px', backgroundColor: 'rgba(241, 196, 15, 0.15)', borderRadius: '6px', fontWeight: 'bold' }}>
                    → MIH
                  </div>

                  <div style={{ padding: '8px', backgroundColor: 'rgba(241, 196, 15, 0.1)', borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-microchip" sizeName="1x" style={{ color: '#f1c40f' }} darkModeInvert={true} />
                    <span>Hardware acceleration important?</span>
                  </div>
                  <div style={{ padding: '8px', backgroundColor: 'rgba(241, 196, 15, 0.15)', borderRadius: '6px', fontWeight: 'bold' }}>
                    → FAISS GPU (Flat, IVF, IVFPQ)
                  </div>
                </div>

                <div style={{ padding: '12px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px', marginTop: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ color: '#ffd54f' }} darkModeInvert={true} />
                    <strong style={{ fontSize: '1.1em' }}>Tuning & Optimization Tips</strong>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.95em' }}>
                    <ul>
                      <li>Always measure recall@k vs latency tradeoff for your specific data</li>
                      <li>Batch queries together for better throughput</li>
                      <li>Normalize vectors for cosine similarity before indexing</li>
                      <li>Explore hybrid strategies (e.g., ScaNN+refine) for better results</li>
                      <li>Use re-ranking when using heavy compression (IVF+PQ, ScaNN)</li>
                      <li>Shard large indices by coarse partitions for parallelism</li>
                      <li>Consider dimensionality reduction (PCA) before indexing</li>
                      <li>For production, test with realistic data distributions and queries</li>
                    </ul>
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
