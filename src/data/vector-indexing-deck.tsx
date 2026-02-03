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
          center: true,
          title: 'Vector Indexing Schemes Cheat Sheet',
          content: (
            <div style={{ marginTop: '30px' }}>
              <h2>9 Indexing Schemes for Efficient Vector Retrieval</h2>
              <p style={{ fontSize: '0.9em', marginTop: '40px' }}>Technical Reference Guide • 2025</p>
              <p><strong>Prepared by:</strong> Nisar A</p>
              <p><strong>Date:</strong> November 7, 2025</p>
              <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
            </div>
          ),
          backgroundColor: '#1a0f0a',
          notes: ''
        },
        {
          id: 2,
          title: 'Overview & Quick Comparison',
          icon: { name: 'duo-table' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <h3 style={{ fontSize: '2rem' }}>Comparing 9 Vector Indexing Schemes across Key Dimensions</h3>
              <div style={{ fontSize: '2rem', marginTop: '20px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #00d4ff' }}>
                      <th style={{ padding: '8px' }}>Scheme</th>
                      <th style={{ padding: '8px' }}>Speed</th>
                      <th style={{ padding: '8px' }}>Memory Use</th>
                      <th style={{ padding: '8px' }}>Recall</th>
                      <th style={{ padding: '8px' }}>Updates</th>
                      <th style={{ padding: '8px' }}>Scale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ backgroundColor: 'rgba(255, 107, 53, 0.1)', fontSize: '1.2rem' }}>
                      <td style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-database" sizeName="1x" style={{ marginRight: '5px', verticalAlign: 'middle' }} darkModeInvert={true} />Flat (Brute Force)</td>
                      <td>Slow exact (O(N))</td>
                      <td>High</td>
                      <td>100%</td>
                      <td>Excellent</td>
                      <td>Small→Mid</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(0, 212, 255, 0.1)', fontSize: '1.2rem' }}>
                      <td style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-layer-group" sizeName="1x" style={{ marginRight: '5px' }} darkModeInvert={true} />HNSW</td>
                      <td>Fast</td>
                      <td>High</td>
                      <td>High</td>
                      <td>Limited</td>
                      <td>Mid→100M</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(78, 205, 196, 0.1)', fontSize: '1.2rem' }}>
                      <td style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-folder-tree" sizeName="1x" style={{ marginRight: '5px' }} darkModeInvert={true} />IVF</td>
                      <td>Fast (nprobe-driven)</td>
                      <td>Moderate</td>
                      <td>High-Approx</td>
                      <td>Good</td>
                      <td>Large</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(255, 195, 0, 0.1)', fontSize: '1.2rem' }}>
                      <td style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-compress" sizeName="1x" style={{ marginRight: '5px' }} darkModeInvert={true} />IVF+PQ</td>
                      <td>Very fast</td>
                      <td>Low</td>
                      <td>Med→High (with re-rank)</td>
                      <td>OK</td>
                      <td>100M→B+</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(155, 89, 182, 0.1)', fontSize: '1.2rem' }}>
                      <td style={{  display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-expand" sizeName="1x" style={{ marginRight: '5px' }} darkModeInvert={true} />Annoy</td>
                      <td>Good</td>
                      <td>Moderate</td>
                      <td>Approx</td>
                      <td>Poor (read-only)</td>
                      <td>Small→Mid</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', fontSize: '1.2rem' }}>
                      <td style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-pen-to-square" sizeName="1x" style={{ marginRight: '5px' }}darkModeInvert={true} />ScaNN</td>
                      <td>Very fast</td>
                      <td>Low→Mod</td>
                      <td>High</td>
                      <td>Limited</td>
                      <td>Large</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(231, 76, 60, 0.1)', fontSize: '1.2rem' }}>
                      <td style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-hashtag" sizeName="1x" style={{ marginRight: '5px' }}darkModeInvert={true} />LSH</td>
                      <td>Fast (for supported metrics)</td>
                      <td>High (many tables)</td>
                      <td>Approx</td>
                      <td>Good</td>
                      <td>Large</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', fontSize: '1.2rem' }}>
                      <td style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ marginRight: '5px' }}darkModeInvert={true} />Graph-based ANN</td>
                      <td>Very fast</td>
                      <td>Low→High (variant)</td>
                      <td>High</td>
                      <td>Hard</td>
                      <td>100M→B (DiskANN)</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(241, 196, 15, 0.1)', fontSize: '1.2rem' }}>
                      <td style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-floppy-disk" sizeName="1x" style={{ marginRight: '5px' }}darkModeInvert={true} />Multi-Index Hashing</td>
                      <td>Fast for Hamming</td>
                      <td>Mod→High</td>
                      <td>Exact (Hamming)</td>
                      <td>Good</td>
                      <td>Large (binary)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ),
          backgroundColor: '#1a0f0a',
          notes: ''
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
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <h3 style={{ color: '#ff6b35', marginBottom: '15px' }}>The simplest vector index with exact search guarantees</h3>
                
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '5px' }}>No index; raw vectors stored contiguously in memory. Each query computes distance against all vectors in the collection. Often accelerated with SIMD instructions or GPU computation for performance.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(255, 107, 53, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ffb74d' }}><SvgIcon iconName="duo-gauge" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '1.2rem', marginTop: '5px' }}>Slow O(N·d) per query, where N is collection size and d is vector dimension. Returns exact top-k results. Good throughput possible with batching and GPU acceleration. Predictable latency independent of data distribution.</p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(255, 107, 53, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ffb74d' }}><SvgIcon iconName="duo-brain" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '1.2rem', marginTop: '5px' }}>High - Stores full vectors in memory with minimal overhead. Memory usage scales linearly with dataset size and dimension. Typically requires 4·N·d bytes for 32-bit float vectors.</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#35102d',
          notes: ''
        },
        {
          id: 4,
          title: 'Best Use Case',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <ul>
                    <li>Exact search</li>
                    <li>Small-to-mid datasets</li>
                    <li>High update rates</li>
                    <li>Streaming</li>
                    <li>Ideal for applications requiring perfect accuracy, supporting heavy write workloads, or serving as a baseline for evaluating approximate algorithms</li>
                    <li>Works well for datasets under ~1-10M vectors depending on hardware</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#35102d',
          notes: ''
        },
        {
          id: 5,
          title: 'Key Notes',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ padding: '12px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
                  <ul>
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
          backgroundColor: '#35102d',
          notes: ''
        }
      ]
    },
    {
      id: 'hnsw',
      title: 'HNSW',
      slides: [
        {
          id: 6,
          title: 'HNSW',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <h3 style={{ color: '#00d4ff' }}>Hierarchical Navigable Small World - High-recall approximate nearest neighbor search</h3>
                
                <div style={{ marginBottom: '15px', marginTop: '15px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '5px' }}>Hierarchical navigable small-world graph with multi-layer proximity graph structure. Key parameters include M (max connections per node), efConstruction (search width during build), and efSearch (search width during query).</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#4fc3f7', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gauge-high" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '1.2rem', marginTop: '5px' }}>Very Fast sub-linear time complexity. Millisecond-level queries at million-scale. Recall rate precisely controlled by efSearch parameter.</p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#4fc3f7', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-brain" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '1.2rem', marginTop: '5px' }}>High memory footprint due to graph edges storage (typically 2-3× the raw vector memory). Higher temporary memory during index construction.</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#552b18',
          notes: ''
        },
        {
          id: 7,
          title: 'Best Use Case',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <ul>
                  <li>Ideal for applications requiring low-latency</li>
                    <li>high-recall approximate nearest neighbor search with datasets up to ~100M vectors</li>
                    <li>Best suited for read-heavy or semi-static datasets where query performance is critical</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#552b18',
          notes: ''
        },
        {
          id: 8,
          title: 'Important Notes',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ padding: '12px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
                  <ul>
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
          backgroundColor: '#552b18',
          notes: ''
        }
      ]
    },
    {
      id: 'ivf',
      title: 'IVF (Inverted File Index)',
      slides: [
        {
          id: 9,
          title: 'IVF (Inverted File Index)',
          icon: { name: 'duo-folder-tree' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <h3 style={{ color: '#4ecdc4', marginBottom: '15px' }}>A coarse quantization-based approach for efficient vector indexing and retrieval</h3>
                
                <div style={{ marginBottom: '15px', marginTop: '15px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '5px' }}>Coarse quantizer (k-means) with nlist clusters; vectors assigned to inverted lists; probe nprobe lists during search; typically performs exhaustive search within retrieved lists (often using Flat search).</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#81c784' }}><SvgIcon iconName="duo-gauge" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '1.2rem', marginTop: '5px' }}>Fast with proper nprobe configuration; sub-linear time complexity; controllable recall/latency trade-off by adjusting the number of clusters probed.</p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#81c784' }}><SvgIcon iconName="duo-brain" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '1.2rem', marginTop: '5px' }}>Moderate - Stores full vectors plus centroids and list metadata; memory usage scales with vector dimensionality and number of clusters.</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0a1a1a',
          notes: ''
        },
        {
          id: 10,
          title: 'Best Use Case',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <ul>
                  <li>Large datasets needing high throughput and tunable recall</li>
                    <li>Environments where online insertions are required</li>
                    <li>Systems with moderate memory constraints but high recall requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0a1a1a',
          notes: ''
        },
        {
          id: 11,
          title: 'Configuration Notes',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ padding: '12px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
                  <ul>
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
          notes: ''
        }
      ]
    },
    {
      id: 'ivf-pq',
      title: 'IVF + PQ (Product Quantization)',
      slides: [
        {
          id: 12,
          title: 'IVF + PQ (Product Quantization)',
          icon: { name: 'duo-compress' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <h3 style={{ color: '#ffc300', marginBottom: '15px' }}>Inverted File Index combined with Product Quantization for efficient vector compression</h3>
                
                <div style={{ marginBottom: '12px', marginTop: '15px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '3px' }}>IVF coarse quantizer (k-means clustering) plus PQ codes for residuals. Stores compact codes instead of raw vectors. Uses lookup tables (LUT) and Asymmetric Distance Computation (ADC) for efficient scoring. Optional refine step can leverage raw vectors for higher precision.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(255, 195, 0, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ffb74d', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gauge-high" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '1.2rem', marginTop: '3px' }}>Very fast due to table lookups and cache-friendly operations. Achieves high QPS (queries per second) even on standard CPU hardware. Search complexity depends on nprobe (number of clusters searched) and k (number of results).</p>
                  </div>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(255, 195, 0, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ffb74d', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-brain" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '1.2rem', marginTop: '3px' }}>Low memory footprint compared to exact methods. Typically compresses vectors to 8–16 bytes per vector (from original 100s-1000s of bytes). This compression enables billion-scale vector search within standard RAM limits.</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#133939',
          notes: ''
        },
        {
          id: 13,
          title: 'Best Use Case',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                  <ul>
                  <li>Ideal for memory-constrained large-scale approximate nearest neighbor search (100M-B+ vectors)</li>
                    <li>Well-suited for read-heavy workloads where some approximation in recall is acceptable</li>
                    <li>Particularly effective when paired with a refinement step for critical results</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#133939',
          notes: ''
        },
        {
          id: 14,
          title: 'Notes',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ padding: '12px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
                  <ul>
                  <li>Requires training on representative data sample</li>
                    <li>Consider OPQ (Optimized Product Quantization) rotation for better accuracy</li>
                    <li>Critical parameters include m (number of subquantizers), code size, and nprobe (clusters to search)</li>
                    <li>Adding a refine stage significantly boosts recall at the cost of extra latency</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#133939',
          notes: ''
        }
      ]
    },
    {
      id: 'annoy',
      title: 'Annoy',
      slides: [
        {
          id: 15,
          title: 'Annoy',
          icon: { name: 'duo-expand' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <h3 style={{ color: '#9b59b6', marginBottom: '15px' }}>Approximate Nearest Neighbors Oh Yeah - Simple and Efficient Vector Search</h3>
                
                <div style={{ marginBottom: '15px', marginTop: '15px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '5px' }}>Forest of random projection trees where each tree partitions vectors based on random hyperplanes. Index can be saved to disk and memory-mapped for efficient loading. Primarily supports angular (cosine) and Euclidean distance metrics.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ba68c8', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gauge" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '1.2rem', marginTop: '5px' }}>Good performance with sufficient trees. Query time scales with O(log n) per tree. Performance depends on n_trees and search_k parameters. Generally slower than HNSW when very high recall is required, but offers good speed-recall tradeoff.</p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ba68c8', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-brain" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '1.2rem', marginTop: '5px' }}>Moderate memory requirements. Memory usage scales with number of trees. Can operate with minimal RAM footprint when using memory-mapped files. More trees increase both disk and memory usage but improve recall. Typically uses around 50-100 bytes per vector per tree.</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#150a1a',
          notes: ''
        },
        {
          id: 16,
          title: 'Best Use Case',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px' }}>
                  <ul>
                  <li>Simple deployment</li>
                    <li>Read-only applications</li>
                    <li>Quick startup/cold start</li>
                    <li>Small-to-mid datasets</li>
                    <li>Production services with fixed indexes</li>
                    <li>Particularly well-suited for recommendation systems, content-based search, and embedding lookup in applications with infrequent index updates</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#150a1a',
          notes: ''
        },
        {
          id: 17,
          title: 'Notes',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px' }}>
                  <ul>
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
          notes: ''
        }
      ]
    },
    {
      id: 'scann',
      title: 'ScaNN',
      slides: [
        {
          id: 18,
          title: 'ScaNN',
          icon: { name: 'duo-chart-line' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <h3 style={{ color: '#4285f4', marginBottom: '15px' }}>Scalable Nearest Neighbors - Google's Vector Search Architecture</h3>
                
                <div style={{ marginBottom: '12px', marginTop: '15px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '3px', lineHeight: '1.4' }}>Hybrid partitioning (k-means/tree) + asymmetric hashing/quantization + reordering; optimized for dot/cosine distance metrics. ScaNN uses a multi-stage architecture:</p>
                  <ul>
                    <li>Partitioning</li>
                    <li>Quantization</li>
                    <li>Re-ranking</li>
                  </ul>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: '#34655d', borderRadius: '8px' }}>
                    <strong style={{ color: '#ba68c8', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gauge" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '1.2rem', marginTop: '5px' }}>Very fast on CPU/TPU; near-SOTA recall-latency trade-offs. Especially optimized for high-throughput vector search scenarios with excellent parallelization.</p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: '#34655d', borderRadius: '8px' }}>
                    <strong style={{ color: '#ba68c8', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-brain" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '1.2rem', marginTop: '5px' }}>Low→Moderate with quantization; extra structures for partitions and re-ranking. Memory usage can be tuned based on performance requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d534b',
          notes: ''
        },
        {
          id: 19,
          title: 'Best Use Case',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ padding: '12px', backgroundColor: '#34655d', borderRadius: '8px' }}>
                  <ul>
                  <li>Large-scale semantic search with inner product/cosine distance metrics</li>
                    <li>TensorFlow/TF-Serving pipelines</li>
                    <li>Production deployments with high QPS requirements</li>
                    <li>Semantic Search</li>
                    <li>High QPS Systems</li>
                    <li>Ecosystem</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1d534b',
          notes: ''
        },
        {
          id: 20,
          title: 'Notes',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ padding: '12px', backgroundColor: '#34655d', borderRadius: '8px' }}>
                  <ul>
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
          backgroundColor: '#1d534b',
          notes: ''
        }
      ]
    },
    {
      id: 'lsh',
      title: 'LSH (Locality Sensitive Hashing)',
      slides: [
        {
          id: 21,
          title: 'LSH (Locality Sensitive Hashing)',
          icon: { name: 'duo-hashtag' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <h3 style={{ color: '#e74c3c', marginBottom: '15px' }}>Probabilistic algorithm for approximate nearest neighbor search using hash collisions</h3>
                
                <div style={{ marginBottom: '12px', marginTop: '15px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '3px', lineHeight: '1.4' }}>Multiple hash tables using LSH families (e.g., SimHash for cosine similarity, p-stable distributions for L2 distance). Query candidates are collected from matching buckets across tables. Each table uses a different hash function to increase collision probability for similar items.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ff6b6b', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gauge" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '1.2rem', marginTop: '3px' }}>Sub-linear for supported metrics. Performance depends on number of tables (L) and hash functions per table (k). Query only touches a small subset of buckets, providing significant speedup over brute force for large datasets. Collision quality directly impacts search accuracy.</p>
                  </div>
                  <div style={{ padding: '10px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px' }}>
                    <strong style={{ color: '#ff6b6b', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-brain" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '1.2rem', marginTop: '3px' }}>High due to many tables and duplicated vector entries. Each vector is stored multiple times (once per table it hashes to). Memory usage scales with O(nL) where n is dataset size and L is number of hash tables. Trades memory for query speed and recall.</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a0a0a',
          notes: ''
        },
        {
          id: 22,
          title: 'Best Use Case',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ padding: '12px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px' }}>
                  <ul>
                  <li>Sparse or high-dimensional data where traditional methods struggle</li>
                    <li>Streaming scenarios requiring fast updates</li>
                    <li>Applications where theoretical guarantees for specific distance metrics are needed</li>
                    <li>Particularly effective for specialized metrics with good LSH families</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1a0a0a',
          notes: ''
        },
        {
          id: 23,
          title: 'Notes',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ padding: '12px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px' }}>
                  <ul>
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
          notes: ''
        }
      ]
    },
    {
      id: 'graph-ann',
      title: 'Graph-Based ANN',
      slides: [
        {
          id: 24,
          title: 'Graph-Based ANN (NSG, Vamana, DiskANN)',
          icon: { name: 'duo-shield-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <h3 style={{ color: '#2ecc71', marginBottom: '15px' }}>Navigable proximity graphs with controlled out-degree for efficient ANN search</h3>
                
                <div style={{ display: 'flex', gap: '20px', marginBottom: '12px', fontSize: '1.2rem' }}>
                  <div style={{ padding: '8px 15px', backgroundColor: 'rgba(46, 204, 113, 0.2)', borderRadius: '8px', fontWeight: 'bold' }}>NSG</div>
                  <div style={{ padding: '8px 15px', backgroundColor: 'rgba(52, 152, 219, 0.2)', borderRadius: '8px', fontWeight: 'bold' }}>Vamana</div>
                  <div style={{ padding: '8px 15px', backgroundColor: 'rgba(155, 89, 182, 0.2)', borderRadius: '8px', fontWeight: 'bold' }}>DiskANN</div>
                </div>
                
                <div style={{ marginBottom: '12px', marginTop: '15px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '3px', lineHeight: '1.4' }}>Proximity graphs with controlled out-degree (NSG/Vamana) or SSD-aware layouts (DiskANN). Single-layer navigable graphs where each node connects to its approximate nearest neighbors while maintaining graph navigability properties.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                  <div style={{ padding: '10px', backgroundColor: '#233127', borderRadius: '8px' }}>
                    <strong style={{ color: '#ff6b6b', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gauge" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '1.2rem', marginTop: '3px' }}>Very fast with excellent memory-latency trade-offs. DiskANN enables sub-millisecond latency even when vectors are stored on SSDs. Search begins from entry points and greedily traverses to nearest neighbors using beam search.</p>
                  </div>
                  <div style={{ padding: '10px', backgroundColor: '#233127', borderRadius: '8px' }}>
                    <strong style={{ color: '#ff6b6b', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-brain" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '1.2rem', marginTop: '3px' }}>Low→Moderate for NSG/Vamana (sparse graphs with controlled degree); DiskANN offloads vectors to SSD with small RAM graph core, enabling billion-scale indices with modest RAM footprint.</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0a1a0f',
          notes: ''
        },
        {
          id: 25,
          title: 'Best Use Case',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ padding: '12px', backgroundColor: '#233127', borderRadius: '8px' }}>
                  <ul>
                  <li>Web-scale search under RAM constraints</li>
                    <li>Production environments with strict latency SLOs</li>
                    <li>Read-heavy workloads with billions of vectors</li>
                    <li>DiskANN specifically addresses the RAM bottleneck for very large indices</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#0a1a0f',
          notes: ''
        },
        {
          id: 26,
          title: 'Implementation Notes',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ padding: '12px', backgroundColor: '#233127', borderRadius: '8px' }}>
                  <ul>
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
          notes: ''
        }
      ]
    },
    {
      id: 'mih',
      title: 'Multi-Index Hashing (MIH)',
      slides: [
        {
          id: 27,
          title: 'Multi-Index Hashing (MIH)',
          icon: { name: 'duo-brackets-square' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '2rem' }}>
                <h3 style={{ color: '#f1c40f', marginBottom: '15px' }}>Efficient exact search in Hamming space for binary and quantized representations</h3>
                
                <div style={{ marginBottom: '15px', marginTop: '15px' }}>
                  <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                  <p style={{ marginTop: '5px', lineHeight: '1.5' }}>Split binary code into m substrings; build m hash tables; intersect buckets for candidates; used for Hamming/PQ code search. Each substring is used as a key to index into its corresponding hash table.</p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginBottom: '15px' }}>
                  <div style={{ padding: '12px', backgroundColor: '#334166', borderRadius: '8px' }}>
                    <strong style={{ color: '#f39c12', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gauge" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Search Speed:</strong>
                    <p style={{ fontSize: '1.2rem', marginTop: '5px' }}>Fast exact/radius search in Hamming space; sub-linear for small radii. Complexity depends on radius and distribution of codes. Particularly efficient for exact queries with small Hamming distances.</p>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: '#334166', borderRadius: '8px' }}>
                    <strong style={{ color: '#f39c12', display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-brain" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Memory Use:</strong>
                    <p style={{ fontSize: '1.2rem', marginTop: '5px' }}>Moderate→High (multiple indices); depends on code length and m. Creates m separate hash tables, each with pointers to original vectors. Memory overhead increases with higher values of m.</p>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1c2b55',
          notes: ''
        },
        {
          id: 28,
          title: 'Best Use Case',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ padding: '12px', backgroundColor: '#334166', borderRadius: '8px' }}>
                  <ul>
                  <li>Binary embeddings or PQ code matching</li>
                    <li>Refine stage for IVF-PQ</li>
                    <li>When exact Hamming kNN is needed</li>
                    <li>Ideal for applications requiring precise matching in binary space such as image fingerprinting, duplicate detection, and compact binary feature matching</li>
                  </ul>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#1c2b55',
          notes: ''
        },
        {
          id: 29,
          title: 'Key Characteristics',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ padding: '12px', backgroundColor: '#334166', borderRadius: '8px' }}>
                  <ul>
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
          backgroundColor: '#1c2b55',
          notes: ''
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 30,
          title: 'Summary & Decision Guide',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div style={{ fontSize: '1.8rem' }}>
                <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <SvgIcon iconName="duo-map-location-dot" sizeName="2x" darkModeInvert={true} />
                  How to choose the right vector indexing scheme for your use case
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px', marginBottom: '15px', marginTop: '15px' }}>
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
              </div>
            </div>
          ),
          backgroundColor: '#55551c',
          notes: ''
        },
        {
          id: 31,
          title: 'Tuning & Optimization Tips',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <div>
                <div style={{ padding: '12px', backgroundColor: '#663', borderRadius: '8px' }}>
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
          ),
          backgroundColor: '#55551c',
          notes: ''
        }
      ]
    }
  ]
};
