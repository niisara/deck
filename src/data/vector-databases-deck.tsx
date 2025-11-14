import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const vectorDatabasesDeck: Deck = {
  id: 'vector-databases-deck',
  name: 'Vector Databases Cheat Sheet',
  description: 'A comprehensive guide to 11 leading vector databases for similarity search and AI applications',
  category: 'RAG',
  theme: 'moon',
  slides: [],
  slideGroups: [
    {
      id: 'introduction',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          title: 'Vector Databases Cheat Sheet',
          content: (
            <div style={{ textAlign: 'left' }}>
          <h2 style={{ marginBottom: '40px' }}>A comprehensive guide to 11 leading vector databases</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', marginTop: '50px' }}>
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-database" sizeName="4x" style={{ color: '#3498db' }} darkModeInvert={true} />
              <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Vector Storage</p>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} darkModeInvert={true} />
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-magnifying-glass" sizeName="4x" style={{ color: '#f39c12' }} darkModeInvert={true} />
              <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Similarity Search</p>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} darkModeInvert={true} />
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-robot" sizeName="4x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
              <p style={{ marginTop: '15px', fontSize: '0.9em' }}>AI Applications</p>
            </div>
          </div>
          <p style={{ marginTop: '60px', fontSize: '0.9em', opacity: 0.8 }}>
            For similarity search, retrieval augmented generation, and AI applications • 2025
          </p>
        </div>
      ),
      backgroundColor: '#2C3E50',
      notes: 'Introduction to 11 leading vector databases for similarity search and RAG applications'
    },
    {
      id: 2,
      title: 'Table of Contents',
      icon: { name: 'duo-list-check', size: '5x' },
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <h3 style={{ marginBottom: '30px', textAlign: 'center' }}>11 Vector Databases Covered</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-1" sizeName="1x" style={{ color: '#3498db' }} darkModeInvert={true} />
                <strong>Pinecone</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-2" sizeName="1x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                <strong>Weaviate</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-3" sizeName="1x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                <strong>Qdrant</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-4" sizeName="1x" style={{ color: '#f39c12' }} darkModeInvert={true} />
                <strong>Milvus</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-5" sizeName="1x" style={{ color: '#e74c3c' }} darkModeInvert={true} />
                <strong>Chroma</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(26, 188, 156, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-6" sizeName="1x" style={{ color: '#1abc9c' }} darkModeInvert={true} />
                <strong>Redis Vector Store</strong>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-7" sizeName="1x" style={{ color: '#3498db' }} darkModeInvert={true} />
                <strong>Elasticsearch Vector</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-8" sizeName="1x" style={{ color: '#e67e22' }} darkModeInvert={true} />
                <strong>Vespa</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(52, 73, 94, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-9" sizeName="1x" style={{ color: '#34495e' }} darkModeInvert={true} />
                <strong>PostgreSQL + pgvector</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(39, 174, 96, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#27ae60' }}>10</span>
                <strong>MongoDB Vector Search</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(189, 195, 199, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <span style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#95a5a6' }}>11</span>
                <strong>LanceDB</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(41, 128, 185, 0.1)', borderRadius: '8px', marginBottom: '10px', border: '2px solid #2980b9' }}>
                <SvgIcon iconName="duo-table" sizeName="1x" style={{ color: '#2980b9' }} />
                <strong>Quick Comparison Summary</strong>
              </div>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#34495E',
      notes: 'Overview of all 11 vector databases and comparison summary included in this deck'
        }
      ]
    },
    {
      id: 'pinecone',
      title: 'Pinecone',
      slides: [
        {
          id: 3,
          title: 'Pinecone',
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-diagram-project" sizeName="1x" darkModeInvert={true} />
                Index Type
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Proprietary ANN algorithms with specialized index families (p1, p2, s1). Uses graph-based approaches for performance indexes and different structures for storage optimization. Supports various quantization options based on tier selection.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-arrows-maximize" sizeName="1x" darkModeInvert={true} />
                Scaling Model
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                <strong>Vertical scaling:</strong> Increase pod size (x1→x2→x4→x8) with zero downtime.<br/>
                <strong>Horizontal scaling:</strong> Add replicas to increase throughput (QPS) or create new indexes from collections to expand capacity.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="1x" darkModeInvert={true} />
                Performance Profile
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Delivers consistently low latency (sub-50ms queries typical) even at scale. p2 indexes offer highest performance. QPS scales linearly with replica count. Optimized for production workloads with consistent latency under load.
              </p>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e74c3c', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-dollar-sign" sizeName="1x" darkModeInvert={true} />
                Cost Consideration
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Fully managed service starting at $70/month for s1.x1 pod. Serverless option with usage-based pricing available. Pay for capacity and throughput based on pod size and replica count. Replicas multiply cost but increase QPS linearly.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9b59b6', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', marginBottom: '12px' }}>
                <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                  Production-grade vector search applications requiring <strong>easy operations, SLA guarantees, and predictable latency</strong>. Ideal for scenarios needing rapid scale-out capabilities and managed infrastructure. Well-suited for high QPS requirements with enterprise support needs.
                </p>
              </div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1abc9c', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-note-sticky" sizeName="1x" darkModeInvert={true} />
                Notes
              </h4>
              <ul style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                <li>Vertical scaling occurs with no downtime for upserts or queries</li>
                <li>Collections enable index reconfiguration for horizontal scaling</li>
                <li>Supports selective metadata indexing for optimized filtered search</li>
                <li>Serverless option auto-scales for variable workloads</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#3498DB',
      notes: 'Pinecone: Fully managed, production-grade vector database with predictable latency and easy operations'
        }
      ]
    },
    {
      id: 'weaviate',
      title: 'Weaviate',
      slides: [
        {
          id: 4,
          title: 'Weaviate',
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-diagram-project" sizeName="1x" darkModeInvert={true} />
                Index Type
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Primary vector indices: <strong>HNSW</strong> (Hierarchical Navigable Small World) for approximate nearest neighbors and <strong>Flat</strong> for exact search. Also uses inverted index for fast filtering on text and structured data properties. Combination enables efficient hybrid search.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-arrows-maximize" sizeName="1x" darkModeInvert={true} />
                Scaling Model
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Horizontal scaling through sharding and replication across nodes. Vertical scaling via instance sizing selection. Does not require all vectors to reside in RAM, allowing for efficient memory usage. Supports cloud-native deployments with high availability.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="1x" darkModeInvert={true} />
                Performance Profile
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Fast HNSW search delivering sub-50ms 20-NN queries even on large datasets. Particularly efficient for <strong>hybrid search</strong> combining vector similarity with filtering. Optimized for performance when using combined vector + where filters in a single query.
              </p>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e74c3c', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-dollar-sign" sizeName="1x" darkModeInvert={true} />
                Cost Consideration
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Open source with managed cloud starting at $25/month for standard performance-optimized instance. Serverless option available. Quantization techniques reduce memory requirements and lower costs. Cost-performance optimization guides available for tuning workloads.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9b59b6', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', marginBottom: '12px' }}>
                <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                  Ideal for <strong>hybrid semantic + structured filtering</strong> workloads combining vectors with complex property-based queries. Excellent for multi-modal data (text, images, etc.) with rich metadata. Well-suited for applications requiring feature-rich developer APIs and GraphQL integration.
                </p>
              </div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1abc9c', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-note-sticky" sizeName="1x" darkModeInvert={true} />
                Notes
              </h4>
              <ul style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                <li>Offers GraphQL and REST APIs for flexible integration</li>
                <li>Supports reference links for graph-like connections between objects</li>
                <li>Extensive documentation on hybrid retrieval and cost/performance optimization</li>
                <li>Strong community and comprehensive language clients</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#27AE60',
      notes: 'Weaviate: Open source with excellent hybrid search capabilities, GraphQL API, and multi-modal support'
        }
      ]
    },
    {
      id: 'qdrant',
      title: 'Qdrant',
      slides: [
        {
          id: 5,
          title: 'Qdrant',
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-diagram-project" sizeName="1x" darkModeInvert={true} />
                Index Type
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Optimized HNSW algorithm with payload-aware filtering for efficient vector search. Supports multiple quantization methods including <strong>scalar, product, and binary quantization</strong> for memory efficiency and improved search performance.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-arrows-maximize" sizeName="1x" darkModeInvert={true} />
                Scaling Model
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Distributed clustering with configurable replication and sharding capabilities. Works on both on-premises and cloud environments. Features multitenancy support for segmenting collections and efficient resource utilization.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="1x" darkModeInvert={true} />
                Performance Profile
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Delivers <strong>up to 4x higher RPS</strong> compared to competitors with minimal latency. Features fast indexing capabilities and particularly strong filtered search performance. On-disk optimizations (mmap, io_uring) improve efficiency for large-scale deployments.
              </p>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e74c3c', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-dollar-sign" sizeName="1x" darkModeInvert={true} />
                Cost Consideration
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Available as open source with self-hosting options. Qdrant Cloud offers managed plans for various workloads. Efficient memory usage through quantization techniques significantly reduces infrastructure costs for large vector collections.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9b59b6', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', marginBottom: '12px' }}>
                <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                  Ideal for <strong>high-throughput, real-time applications</strong> that require complex filtering capabilities alongside vector search. Well-suited for scenarios demanding cost-efficient scaling and precise retrieval with payload filtering requirements.
                </p>
              </div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1abc9c', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-note-sticky" sizeName="1x" darkModeInvert={true} />
                Notes
              </h4>
              <ul style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                <li>Rich payload filters (geo, ranges, text), sparse vectors support</li>
                <li>Written in Rust for performance</li>
                <li>Binary quantization provides up to 40x faster search while reducing memory</li>
                <li>Hybrid and private cloud deployment options available</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#8E44AD',
      notes: 'Qdrant: High-performance with 4x higher RPS, advanced filtering, and efficient quantization (Rust-based)'
        }
      ]
    },
    {
      id: 'milvus',
      title: 'Milvus',
      slides: [
        {
          id: 6,
          title: 'Milvus',
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-diagram-project" sizeName="1x" darkModeInvert={true} />
                Index Type
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Multiple specialized options: <strong>FLAT, IVF_FLAT, IVF_SQ8, IVF_PQ, IVF_RABITQ, HNSW, DISKANN, and GPU variants</strong>. Also supports scalar indexes (INVERTED, BITMAP, etc.) for structured data filtering and hybrid searches.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-arrows-maximize" sizeName="1x" darkModeInvert={true} />
                Scaling Model
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Cloud-native distributed cluster with storage/compute separation. Uses mmap and DiskANN techniques for out-of-RAM data access. Horizontal scaling through sharding and flexible deployment across clusters.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="1x" darkModeInvert={true} />
                Performance Profile
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                <strong>Billion-scale vector search</strong> support with highly tunable performance characteristics. Performance varies by index: graph indices deliver highest QPS for small topK, while IVF variants excel at large topK retrievals. Optimize based on filter ratio/recall needs.
              </p>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e74c3c', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-dollar-sign" sizeName="1x" darkModeInvert={true} />
                Cost Consideration
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Open source with managed options available (e.g., Zilliz Cloud). Quantization techniques and DiskANN significantly reduce RAM requirements and associated infrastructure costs. Flexible deployment options for cost optimization.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9b59b6', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', marginBottom: '12px' }}>
                <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                  <strong>Large-scale deployments</strong> requiring flexible index strategies across RAM and disk. Ideal for organizations needing performance tuning options and diverse workload patterns. Well-suited for applications that benefit from specialized index types for different query patterns.
                </p>
              </div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1abc9c', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-note-sticky" sizeName="1x" darkModeInvert={true} />
                Notes
              </h4>
              <ul style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                <li>Decision rules: high filter ratio → FLAT; large topK → IVF</li>
                <li>Extreme recall → FLAT+GPU</li>
                <li>DiskANN for SSD-bound workloads with stable latency</li>
                <li>GPU support enhances performance for compute-intensive operations</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#E67E22',
      notes: 'Milvus: Billion-scale with flexible index strategies (FLAT, IVF, HNSW, DiskANN, GPU variants)'
        }
      ]
    },
    {
      id: 'chroma',
      title: 'Chroma',
      slides: [
        {
          id: 7,
          title: 'Chroma',
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-diagram-project" sizeName="1x" darkModeInvert={true} />
                Index Type
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                HNSW-based vector indexing optimized for single-node deployment. Focused on <strong>simplicity and ease of use</strong> rather than complex indexing configurations. Supports both vector embeddings and associated metadata for retrieval.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-arrows-maximize" sizeName="1x" darkModeInvert={true} />
                Scaling Model
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Primarily single-node open source implementation with simple local persistence. Chroma Cloud offers managed deployment for teams requiring more robust infrastructure without operational overhead.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="1x" darkModeInvert={true} />
                Performance Profile
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Optimized for <strong>small-to-mid datasets</strong> (up to several million vectors). Prioritizes developer experience with fast iteration cycles and simple API. Best suited for rapid prototyping and development environments rather than massive production workloads.
              </p>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e74c3c', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-dollar-sign" sizeName="1x" darkModeInvert={true} />
                Cost Consideration
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Open source and free for self-hosting. Managed Chroma Cloud offers usage-based pricing. Minimal operational overhead for prototyping and development workloads. No enterprise licensing fees makes it cost-effective for startups and research.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9b59b6', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', marginBottom: '12px' }}>
                <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                  Ideal for <strong>local-first RAG applications, prototyping vector search functionality, Jupyter notebooks</strong>, and lightweight embedding-based applications. Perfect starting point for AI developers exploring vector search without complex infrastructure requirements.
                </p>
              </div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1abc9c', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-note-sticky" sizeName="1x" darkModeInvert={true} />
                Notes
              </h4>
              <ul style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                <li>Python-friendly API with extensive integrations</li>
                <li>Works seamlessly with LangChain and LlamaIndex</li>
                <li>Straightforward persistence model and metadata handling</li>
                <li>Emphasizes developer productivity over enterprise-grade features</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#C0392B',
      notes: 'Chroma: Simple, developer-friendly, perfect for prototyping and local RAG applications'
        }
      ]
    },
    {
      id: 'redis',
      title: 'Redis Vector Store',
      slides: [
        {
          id: 8,
          title: 'Redis Vector Store',
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-diagram-project" sizeName="1x" darkModeInvert={true} />
                Index Type
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Implements <strong>HNSW and Flat indexes</strong> via the RediSearch module. Uniquely combines efficient vector search with Redis's native data structures. Supports hybrid search combining both text and vector similarity in the same query for more precise results.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-arrows-maximize" sizeName="1x" darkModeInvert={true} />
                Scaling Model
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Utilizes Redis Cluster architecture with sharding and replication. Primarily <strong>in-memory for performance</strong> with configurable persistence options (RDB snapshots, AOF logs). Horizontal scaling through cluster nodes and vertical scaling through instance sizing.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="1x" darkModeInvert={true} />
                Performance Profile
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Delivers <strong>extremely low latency</strong> due to in-memory architecture. Benchmarks show Redis outperforms dedicated vector databases at recall ≥0.98. Ideal for real-time applications requiring <strong>sub-millisecond response times</strong>. Consistent performance even under high loads.
              </p>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e74c3c', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-dollar-sign" sizeName="1x" darkModeInvert={true} />
                Cost Consideration
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Memory-intensive nature drives infrastructure costs higher than disk-based alternatives. Redis Enterprise and Redis Cloud options available with various pricing tiers. Consider using data expiration/TTL strategies to manage memory usage and costs for time-sensitive data.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9b59b6', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', marginBottom: '12px' }}>
                <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                  Excels in <strong>real-time personalization, recommendation systems</strong> requiring immediate responses, and session-based retrieval workloads. Ideal for organizations with existing Redis deployments seeking to add vector search capabilities. Perfect for low-latency, high-throughput applications.
                </p>
              </div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1abc9c', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-note-sticky" sizeName="1x" darkModeInvert={true} />
                Notes
              </h4>
              <ul style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                <li>Uniquely combines caching and search in a single system</li>
                <li>Strong throughput with minimal operational complexity</li>
                <li>Benefits from extensive Redis ecosystem and tooling</li>
                <li>Requires careful memory management for large vector datasets</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16A085',
      notes: 'Redis Vector Store: Ultra-low latency with in-memory architecture, perfect for real-time applications'
        }
      ]
    },
    {
      id: 'elasticsearch',
      title: 'Elasticsearch Vector',
      slides: [
        {
          id: 9,
          title: 'Elasticsearch Vector',
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-diagram-project" sizeName="1x" darkModeInvert={true} />
                Index Type
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Built on Lucene HNSW implementation with additional compression and quantization options. Features <strong>DiskBBQ</strong> for memory-efficient vector storage and <strong>ACORN-1 algorithm</strong> specifically optimized for filtered vector search performance.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-arrows-maximize" sizeName="1x" darkModeInvert={true} />
                Scaling Model
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Horizontal scaling via Elasticsearch's native sharding and replication capabilities. Elastic Cloud provides managed auto-scaling options. Distributes vector search workloads across multiple nodes for balanced resource utilization and high availability.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="1x" darkModeInvert={true} />
                Performance Profile
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Excels in <strong>hybrid search combining traditional BM25 text relevance with vector similarity</strong>. New ACORN-1 algorithm delivers <strong>5x faster filtered vector search</strong> performance. Ongoing improvements focus on memory efficiency and query optimization for large-scale deployments.
              </p>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e74c3c', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-dollar-sign" sizeName="1x" darkModeInvert={true} />
                Cost Consideration
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Cost scales with cluster size and shard configuration. Significant economic advantages for organizations already running Elasticsearch deployments. Binary vector quantization reduces storage costs while maintaining search quality. Elastic Cloud offers various pricing tiers.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9b59b6', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', marginBottom: '12px' }}>
                <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                  Ideal for <strong>unified keyword + semantic search applications</strong> where both traditional text matching and semantic relevance are needed. Strong fit for enterprise search, logs/observability with semantic enrichment, and content discovery systems requiring complex filtering.
                </p>
              </div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1abc9c', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-note-sticky" sizeName="1x" darkModeInvert={true} />
                Notes
              </h4>
              <ul style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                <li>Benefits from ecosystem maturity and extensive tooling</li>
                <li>Recent features significantly improve filtered vector latency</li>
                <li>Default BBQ compression provides optimal balance</li>
                <li>Reduces memory requirements for large corpora</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#2980B9',
      notes: 'Elasticsearch Vector: Hybrid BM25 + vector search, 5x faster filtered search with ACORN-1'
        }
      ]
    },
    {
      id: 'vespa',
      title: 'Vespa',
      slides: [
        {
          id: 10,
          title: 'Vespa',
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-diagram-project" sizeName="1x" darkModeInvert={true} />
                Index Type
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                HNSW with <strong>tensor operations</strong> for advanced vector search. Uniquely supports vectors, text, and structured data in a single unified engine. Uses tensor compute framework allowing complex operations beyond simple vector search.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-arrows-maximize" sizeName="1x" darkModeInvert={true} />
                Scaling Model
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Distributed elastic architecture with horizontal scaling. Supports <strong>real-time indexing and online serving</strong> with auto-scaling patterns. Multiple content clusters can be deployed for different workloads with independent scaling.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="1x" darkModeInvert={true} />
                Performance Profile
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Engineered for <strong>high-throughput, low-latency at billion-scale</strong> operations. Supports on-the-fly ranking and inference during query execution. Scales to handle large-scale data with predictable performance characteristics.
              </p>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e74c3c', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-dollar-sign" sizeName="1x" darkModeInvert={true} />
                Cost Consideration
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Open source with self-managed deployment options. Infrastructure costs tied primarily to throughput requirements and online inference/ranking needs. Cloud offering available for managed operations.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9b59b6', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', marginBottom: '12px' }}>
                <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                  <strong>Large-scale recommendation systems</strong> and search applications requiring complex ranking logic. Ideal for <strong>multimodal/tensor pipelines</strong> where search, ranking, and inference must happen in real-time within a single platform.
                </p>
              </div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1abc9c', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-note-sticky" sizeName="1x" darkModeInvert={true} />
                Notes
              </h4>
              <ul style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                <li>Rich schema with tensors and integrates ranking functions</li>
                <li>ML models at serving time for on-the-fly inference</li>
                <li>Custom query and document processors for advanced transformation</li>
                <li>Offers both real-time and batch processing capabilities</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#D35400',
      notes: 'Vespa: Unified engine for vectors, text, and structured data with real-time ranking and inference'
        }
      ]
    },
    {
      id: 'postgresql',
      title: 'PostgreSQL + pgvector',
      slides: [
        {
          id: 11,
          title: 'PostgreSQL + pgvector',
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-diagram-project" sizeName="1x" darkModeInvert={true} />
                Index Type
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Vector indices: <strong>HNSW and IVFFlat</strong> via pgvector extension. Standard PostgreSQL B-tree, GiST, GIN indices for scalar filtering and metadata. Both approximate and exact vector search supported with different performance trade-offs.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-arrows-maximize" sizeName="1x" darkModeInvert={true} />
                Scaling Model
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Uses PostgreSQL's native replication and partitioning mechanisms. Extensions like Citus and pg_shard enable horizontal scale-out with distributed tables. Vertical scaling through instance sizing based on workload requirements.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="1x" darkModeInvert={true} />
                Performance Profile
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Recent pgvector 0.8.0 delivers <strong>150x improvement</strong> in query performance. Significantly faster index builds and query latency. Well-suited for moderate-scale vector workloads (millions of vectors) with balanced query and update performance.
              </p>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e74c3c', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-dollar-sign" sizeName="1x" darkModeInvert={true} />
                Cost Consideration
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Open-source extension for PostgreSQL – pay only for infrastructure costs. Simpler operational model where PostgreSQL is already deployed. Can run on commodity hardware for development or cloud-managed PostgreSQL services for production.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9b59b6', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', marginBottom: '12px' }}>
                <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                  Applications requiring <strong>ACID compliance with vector search</strong> capabilities. Ideal for systems with modest vector volumes that benefit from SQL interface and transactional guarantees. Perfect for developers who want to integrate vectors into existing relational data models.
                </p>
              </div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1abc9c', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-note-sticky" sizeName="1x" darkModeInvert={true} />
                Notes
              </h4>
              <ul style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                <li>Tune HNSW/IVF parameters for workload optimization</li>
                <li>Consider pgvectorscale for enhanced performance</li>
                <li>Leverages PostgreSQL strengths: SQL, transactions, joins, rich data types</li>
                <li>Combines vector search with traditional database features</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#34495E',
      notes: 'PostgreSQL + pgvector: ACID compliance with 150x performance improvement, SQL interface, relational integration'
        }
      ]
    },
    {
      id: 'mongodb',
      title: 'MongoDB Vector Search',
      slides: [
        {
          id: 12,
          title: 'MongoDB Vector Search',
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-diagram-project" sizeName="1x" darkModeInvert={true} />
                Index Type
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                HNSW-based vector indexes within MongoDB Atlas with <strong>native integration into document data model</strong>. Supports hybrid relevance scoring combining vector similarity with traditional document data. Vector search built on top of Atlas' proven indexing infrastructure.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-arrows-maximize" sizeName="1x" darkModeInvert={true} />
                Scaling Model
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Atlas managed scaling with automatic sharding and replication. Scale up/down with minimal operational overhead. Clear guidance provided for sizing RAM relative to index footprint. Leverages MongoDB's mature distributed systems architecture.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="1x" darkModeInvert={true} />
                Performance Profile
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Optimized for <strong>combined operational + vector workloads</strong>. Efficient hybrid queries leveraging both vector similarity and document field filtering. Pre-filtering capabilities reduce search space for improved performance on large collections.
              </p>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e74c3c', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-dollar-sign" sizeName="1x" darkModeInvert={true} />
                Cost Consideration
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Cost driven by Atlas cluster sizing. Follow sizing best practices with sufficient RAM headroom for indexes. Benefit from unified pricing model that includes both operational and vector workloads. Pay-as-you-go options available for all Atlas tiers.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9b59b6', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', marginBottom: '12px' }}>
                <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                  Applications needing to <strong>unify operational JSON data and embeddings</strong> in a single platform. Ideal for teams already using MongoDB seeking to add vector capabilities without additional infrastructure. Perfect for app development requiring both structured data and semantic search.
                </p>
              </div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1abc9c', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-note-sticky" sizeName="1x" darkModeInvert={true} />
                Notes
              </h4>
              <ul style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                <li>Extensive tooling and SDKs across multiple languages</li>
                <li>Comprehensive benchmarks and deployment guides</li>
                <li>Integrates well with Atlas Search for unified text + vector queries</li>
                <li>MongoDB Compass provides visual tools for vector index management</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#27AE60',
      notes: 'MongoDB Vector Search: Unified JSON + vector data with native integration into document model'
        }
      ]
    },
    {
      id: 'lancedb',
      title: 'LanceDB',
      slides: [
        {
          id: 13,
          title: 'LanceDB',
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-diagram-project" sizeName="1x" darkModeInvert={true} />
                Index Type
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Uses <strong>IVF-PQ and disk-optimized ANN algorithms</strong> over the Lance columnar format. Supports hybrid search combining vector and traditional search methods. Provides robust metadata filters for refined search results alongside vector similarity.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-arrows-maximize" sizeName="1x" darkModeInvert={true} />
                Scaling Model
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Flexible deployment as <strong>embedded database or serverless/cloud service</strong>. Specifically optimized for object storage solutions like S3 and high-performance local NVMe drives. Designed to scale with data volume rather than query complexity.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="1x" darkModeInvert={true} />
                Performance Profile
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                Achieves <strong>&lt;25ms latency</strong> for typical query workloads. Exceptional disk-based performance compared to memory-dependent alternatives. Particularly strong with large datasets stored on cost-effective storage solutions, maintaining performance at scale.
              </p>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e74c3c', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-dollar-sign" sizeName="1x" darkModeInvert={true} />
                Cost Consideration
              </h4>
              <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                <strong>Storage-centric economics</strong> leveraging inexpensive S3/local disk to reduce RAM requirements and infrastructure costs. Serverless pricing options available, allowing pay-for-use models that scale efficiently with actual workloads. Optimized for low TCO at scale.
              </p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#9b59b6', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="1x" darkModeInvert={true} />
                Best Use Case
              </h4>
              <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', marginBottom: '12px' }}>
                <p style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                  Ideal for <strong>cost-efficient large-scale RAG over data lakes</strong>, where vectors are stored alongside source data. Well-suited for multimodal datasets combining text, images, and other data types. Effective for edge/embedded scenarios with storage constraints.
                </p>
              </div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1abc9c', marginTop: '15px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-note-sticky" sizeName="1x" darkModeInvert={true} />
                Notes
              </h4>
              <ul style={{ lineHeight: '1.6', fontSize: '0.95em' }}>
                <li>Built on the columnar Lance format for efficient storage</li>
                <li>Provides excellent I/O locality for disk-based operations</li>
                <li>Integrates seamlessly with Python/Apache Arrow ecosystem</li>
                <li>Perfect for data science and analytics workflows</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#95A5A6',
      notes: 'LanceDB: Cost-efficient disk-based storage with <25ms latency, perfect for large-scale RAG over data lakes'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 14,
          title: 'Quick Comparison Summary',
          content: (
        <div style={{ margin: '0 auto', fontSize: '0.55em' }}>
          <h3 style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <SvgIcon iconName="duo-table" sizeName="2x" darkModeInvert={true} />
            At-a-glance comparison of all 11 vector databases
          </h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)' }}>
                <th style={{ padding: '8px', border: '1px solid #555', fontSize: '1.05em' }}>Database</th>
                <th style={{ padding: '8px', border: '1px solid #555', fontSize: '1.05em' }}>Index Type</th>
                <th style={{ padding: '8px', border: '1px solid #555', fontSize: '1.05em' }}>Scaling Model</th>
                <th style={{ padding: '8px', border: '1px solid #555', fontSize: '1.05em' }}>Performance</th>
                <th style={{ padding: '8px', border: '1px solid #555', fontSize: '1.05em' }}>Cost</th>
                <th style={{ padding: '8px', border: '1px solid #555', fontSize: '1.05em' }}>Best Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '6px', border: '1px solid #555' }}><strong>Pinecone</strong></td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Proprietary ANN (p1, p2, s1)</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Vertical pods + replicas/collections</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Sub-50ms, consistent at scale</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Managed/serverless ($70/mo+)</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Production-grade, easy ops</td>
              </tr>
              <tr>
                <td style={{ padding: '6px', border: '1px solid #555' }}><strong>Weaviate</strong></td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>HNSW, Flat + inverted</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Horizontal sharding/replication</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Fast hybrid queries</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>OSS + managed ($25/mo+)</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Complex vector+filters</td>
              </tr>
              <tr>
                <td style={{ padding: '6px', border: '1px solid #555' }}><strong>Qdrant</strong></td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>HNSW + quantization</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Cluster with replication/sharding</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>High RPS, low latency</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>OSS + cloud options</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>High-throughput + filters</td>
              </tr>
              <tr>
                <td style={{ padding: '6px', border: '1px solid #555' }}><strong>Milvus</strong></td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>IVF/HNSW/DiskANN/GPU</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Distributed cluster architecture</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Billion-scale, tunable</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>OSS + managed (Zilliz)</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Large-scale, flexible index</td>
              </tr>
              <tr>
                <td style={{ padding: '6px', border: '1px solid #555' }}><strong>Chroma</strong></td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>HNSW (single-node focus)</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Single-node/Cloud options</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Good for small-mid datasets</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>OSS (free) + cloud</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Rapid RAG prototyping</td>
              </tr>
              <tr>
                <td style={{ padding: '6px', border: '1px solid #555' }}><strong>Redis Vector</strong></td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>HNSW/Flat (RediSearch)</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Redis Cluster architecture</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Real-time, in-memory speed</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Redis infrastructure cost</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Low-latency applications</td>
              </tr>
              <tr>
                <td style={{ padding: '6px', border: '1px solid #555' }}><strong>Elasticsearch</strong></td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>HNSW, DiskBBQ (Lucene)</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Horizontal sharding/replication</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Hybrid text+vector search</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Elastic Cloud cost model</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Enterprise search + vector</td>
              </tr>
              <tr>
                <td style={{ padding: '6px', border: '1px solid #555' }}><strong>Vespa</strong></td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>HNSW + tensor operations</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Distributed auto-scaling</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Real-time indexing at scale</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>OSS + cloud options</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Real-time ranking/inference</td>
              </tr>
              <tr>
                <td style={{ padding: '6px', border: '1px solid #555' }}><strong>pgvector</strong></td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>HNSW, IVFFlat extension</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>PostgreSQL replication</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Good for moderate scale</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>PG infrastructure only</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>ACID + vector operations</td>
              </tr>
              <tr>
                <td style={{ padding: '6px', border: '1px solid #555' }}><strong>MongoDB</strong></td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>HNSW-based (Atlas)</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Atlas managed auto-scaling</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Operational + vector data</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Atlas cluster-based</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Unified JSON + vectors</td>
              </tr>
              <tr>
                <td style={{ padding: '6px', border: '1px solid #555' }}><strong>LanceDB</strong></td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>IVF-PQ, disk-optimized</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Embedded/Serverless model</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Efficient disk-based search</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Storage-focused pricing</td>
                <td style={{ padding: '6px', border: '1px solid #555' }}>Cost-efficient RAG/lakes</td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
      backgroundColor: '#2C3E50',
      notes: 'Complete comparison table showing index types, scaling, performance, costs, and best use cases for all 11 databases'
        },
        {
          id: 15,
          title: 'Selection Guide',
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em' }}>
          <h3 style={{ marginBottom: '25px', textAlign: 'center' }}>How to Choose the Right Vector Database</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', border: '2px solid #3498db' }}>
              <h4 style={{ color: '#3498db', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Production-Grade & Managed
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>Pinecone:</strong> Easy ops, SLA guarantees, predictable latency</li>
                <li><strong>Weaviate:</strong> Hybrid search, multi-modal, GraphQL API</li>
                <li><strong>Qdrant:</strong> High RPS (4x faster), advanced filtering</li>
              </ul>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '10px', border: '2px solid #f39c12' }}>
              <h4 style={{ color: '#f39c12', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-chart-line" sizeName="1x" darkModeInvert={true} />
                Large-Scale & Enterprise
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>Milvus:</strong> Billion-scale, flexible index strategies</li>
                <li><strong>Elasticsearch:</strong> Unified keyword + semantic search</li>
                <li><strong>Vespa:</strong> Real-time ranking with ML inference</li>
              </ul>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '10px', border: '2px solid #2ecc71' }}>
              <h4 style={{ color: '#2ecc71', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" darkModeInvert={true} />
                Prototyping & Development
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>Chroma:</strong> Simple, local-first, LangChain/LlamaIndex integration</li>
                <li><strong>LanceDB:</strong> Embedded, cost-efficient for data lakes</li>
              </ul>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '10px', border: '2px solid #9b59b6' }}>
              <h4 style={{ color: '#9b59b6', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="1x" darkModeInvert={true} />
                Real-Time & Low-Latency
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>Redis Vector:</strong> Sub-millisecond, in-memory speed</li>
                <li><strong>Qdrant:</strong> High throughput with minimal latency</li>
              </ul>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(52, 73, 94, 0.1)', borderRadius: '10px', border: '2px solid #34495e' }}>
              <h4 style={{ color: '#34495e', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" darkModeInvert={true} />
                Existing Database Integration
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>pgvector:</strong> ACID compliance, SQL interface, 150x improvement</li>
                <li><strong>MongoDB:</strong> Unified JSON + vectors in single platform</li>
                <li><strong>Redis/Elasticsearch:</strong> Add vectors to existing infrastructure</li>
              </ul>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '10px', border: '2px solid #e74c3c' }}>
              <h4 style={{ color: '#e74c3c', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-dollar-sign" sizeName="1x" darkModeInvert={true} />
                Cost-Efficiency Focus
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>LanceDB:</strong> Storage-centric, low TCO at scale</li>
                <li><strong>Chroma:</strong> Free open source for development</li>
                <li><strong>Weaviate:</strong> Starting at $25/mo managed</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#34495E',
      notes: 'Selection guide organized by use case: production, large-scale, prototyping, real-time, database integration, and cost-efficiency'
        }
      ]
    }
  ]
};

