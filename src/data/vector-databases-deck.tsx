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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <SvgIcon iconName="duo-database" sizeName="4x" style={{ color: '#3498db' }} darkModeInvert={true} />
              <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Vector Storage</p>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} darkModeInvert={true} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <SvgIcon iconName="duo-magnifying-glass" sizeName="4x" style={{ color: '#f39c12' }} darkModeInvert={true} />
              <p style={{ marginTop: '15px', fontSize: '0.9em' }}>Similarity Search</p>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} darkModeInvert={true} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
      icon: { name: 'duo-list-check' },
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <h3 style={{ marginBottom: '30px', textAlign: 'center' }}>11 Vector Databases Covered</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-1" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
                <strong>Pinecone</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-2" sizeName="2x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                <strong>Weaviate</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-3" sizeName="2x" style={{ color: '#9b59b6' }} darkModeInvert={true} />
                <strong>Qdrant</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-4" sizeName="2x" style={{ color: '#f39c12' }} darkModeInvert={true} />
                <strong>Milvus</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-5" sizeName="2x" style={{ color: '#e74c3c' }} darkModeInvert={true} />
                <strong>Chroma</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(26, 188, 156, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-6" sizeName="2x" style={{ color: '#1abc9c' }} darkModeInvert={true} />
                <strong>Redis Vector Store</strong>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-7" sizeName="2x" style={{ color: '#3498db' }} darkModeInvert={true} />
                <strong>Elasticsearch Vector</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-8" sizeName="2x" style={{ color: '#e67e22' }} darkModeInvert={true} />
                <strong>Vespa</strong>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(136, 255, 0, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-circle-9" sizeName="2x" style={{ color: '#56c128' }} darkModeInvert={true} />
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
          title: 'Pinecone - Index Type',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#69addb', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Proprietary ANN algorithms with specialized index families (p1, p2, s1). Uses graph-based approaches for performance indexes and different structures for storage optimization. Supports various quantization options based on tier selection.
              </p>
            </div>
          ),
          backgroundColor: '#1a4e71',
          notes: 'Pinecone uses proprietary ANN algorithms with specialized index families for optimized performance'
        },
        {
          id: 4,
          title: 'Pinecone - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#69addb', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                <strong>Vertical scaling:</strong> Increase pod size (x1→x2→x4→x8) with zero downtime.<br/><br/>
                <strong>Horizontal scaling:</strong> Add replicas to increase throughput (QPS) or create new indexes from collections to expand capacity or change pod types.
              </p>
            </div>
          ),
          backgroundColor: '#1a4e71',
          notes: 'Pinecone offers both vertical and horizontal scaling with zero downtime'
        },
        {
          id: 5,
          title: 'Pinecone - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#69addb', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Delivers consistently low latency (sub-50ms queries typical) even at scale. p2 indexes offer highest performance. QPS scales linearly with replica count. Optimized for production workloads with consistent latency under load.
              </p>
            </div>
          ),
          backgroundColor: '#1a4e71',
          notes: 'Consistently low latency (sub-50ms) with linear QPS scaling'
        },
        {
          id: 6,
          title: 'Pinecone - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#69addb', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Fully managed service starting at $70/month for s1.x1 pod. Serverless option with usage-based pricing available. Pay for capacity and throughput based on pod size and replica count. Replicas multiply cost but increase QPS linearly.
              </p>
            </div>
          ),
          backgroundColor: '#1a4e71',
          notes: 'Managed service starting at $70/month with serverless options available'
        },
        {
          id: 7,
          title: 'Pinecone - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#69addb', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Production-grade vector search applications requiring <strong>easy operations, SLA guarantees, and predictable latency</strong>. Ideal for scenarios needing rapid scale-out capabilities and managed infrastructure. Well-suited for high QPS requirements with enterprise support needs.
              </p>
            </div>
          ),
          backgroundColor: '#1a4e71',
          notes: 'Best for production-grade applications requiring easy operations and SLA guarantees'
        },
        {
          id: 8,
          title: 'Pinecone - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#69addb', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                <li>Vertical scaling occurs with no downtime for upserts or queries</li>
                <li>Collections enable index reconfiguration for horizontal scaling</li>
                <li>Supports selective metadata indexing for optimized filtered search</li>
                <li>Serverless option auto-scales for variable workloads</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1a4e71',
          notes: 'Additional notes: zero-downtime scaling, collections, metadata indexing, serverless auto-scaling'
        }
      ]
    },
    {
      id: 'weaviate',
      title: 'Weaviate',
      slides: [
        {
          id: 9,
          title: 'Weaviate - Index Type',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#24b15f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Primary vector indices: <strong>HNSW</strong> (Hierarchical Navigable Small World) for approximate nearest neighbors and <strong>Flat</strong> for exact search. Also uses inverted index for fast filtering on text and structured data properties. Combination enables efficient hybrid search.
              </p>
            </div>
          ),
          backgroundColor: '#104928',
          notes: 'Weaviate uses HNSW and Flat indices with inverted index for hybrid search'
        },
        {
          id: 10,
          title: 'Weaviate - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#24b15f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Horizontal scaling through sharding and replication across nodes. Vertical scaling via instance sizing selection. Does not require all vectors to reside in RAM, allowing for efficient memory usage. Supports cloud-native deployments with high availability.
              </p>
            </div>
          ),
          backgroundColor: '#104928',
          notes: 'Horizontal and vertical scaling with efficient memory usage'
        },
        {
          id: 11,
          title: 'Weaviate - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#24b15f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Fast HNSW search delivering sub-50ms 20-NN queries even on large datasets. Particularly efficient for <strong>hybrid search</strong> combining vector similarity with filtering. Optimized for performance when using combined vector + where filters in a single query.
              </p>
            </div>
          ),
          backgroundColor: '#104928',
          notes: 'Fast hybrid search with sub-50ms queries on large datasets'
        },
        {
          id: 12,
          title: 'Weaviate - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#24b15f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Open source with managed cloud starting at $25/month for standard performance-optimized instance. Serverless option available. Quantization techniques reduce memory requirements and lower costs. Cost-performance optimization guides available for tuning workloads.
              </p>
            </div>
          ),
          backgroundColor: '#104928',
          notes: 'Open source with managed cloud starting at $25/month'
        },
        {
          id: 13,
          title: 'Weaviate - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#24b15f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Ideal for <strong>hybrid semantic + structured filtering</strong> workloads combining vectors with complex property-based queries. Excellent for multi-modal data (text, images, etc.) with rich metadata. Well-suited for applications requiring feature-rich developer APIs and GraphQL integration.
              </p>
            </div>
          ),
          backgroundColor: '#104928',
          notes: 'Best for hybrid semantic + structured filtering with multi-modal data'
        },
        {
          id: 14,
          title: 'Weaviate - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#24b15f', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                <li>Offers GraphQL and REST APIs for flexible integration</li>
                <li>Supports reference links for graph-like connections between objects</li>
                <li>Extensive documentation on hybrid retrieval and cost/performance optimization</li>
                <li>Strong community and comprehensive language clients</li>
              </ul>
            </div>
          ),
          backgroundColor: '#104928',
          notes: 'Additional notes: GraphQL/REST APIs, reference links, extensive documentation'
        }
      ]
    },
    {
      id: 'qdrant',
      title: 'Qdrant',
      slides: [
        {
          id: 15,
          title: 'Qdrant - Index Type',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#9434bd', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Optimized HNSW algorithm with payload-aware filtering for efficient vector search. Supports multiple quantization methods including <strong>scalar, product, and binary quantization</strong> for memory efficiency and improved search performance.
              </p>
            </div>
          ),
          backgroundColor: '#3a1b47',
          notes: 'Qdrant uses optimized HNSW with multiple quantization methods'
        },
        {
          id: 16,
          title: 'Qdrant - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#9434bd', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Distributed clustering with configurable replication and sharding capabilities. Works on both on-premises and cloud environments. Features multitenancy support for segmenting collections and efficient resource utilization.
              </p>
            </div>
          ),
          backgroundColor: '#3a1b47',
          notes: 'Distributed clustering with multitenancy support'
        },
        {
          id: 17,
          title: 'Qdrant - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#9434bd', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Delivers <strong>up to 4x higher RPS</strong> compared to competitors with minimal latency. Features fast indexing capabilities and particularly strong filtered search performance. On-disk optimizations (mmap, io_uring) improve efficiency for large-scale deployments.
              </p>
            </div>
          ),
          backgroundColor: '#3a1b47',
          notes: 'Up to 4x higher RPS with strong filtered search performance'
        },
        {
          id: 18,
          title: 'Qdrant - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#9434bd', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Available as open source with self-hosting options. Qdrant Cloud offers managed plans for various workloads. Efficient memory usage through quantization techniques significantly reduces infrastructure costs for large vector collections.
              </p>
            </div>
          ),
          backgroundColor: '#3a1b47',
          notes: 'Open source with managed cloud options, efficient memory usage'
        },
        {
          id: 19,
          title: 'Qdrant - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#9434bd', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Ideal for <strong>high-throughput, real-time applications</strong> that require complex filtering capabilities alongside vector search. Well-suited for scenarios demanding cost-efficient scaling and precise retrieval with payload filtering requirements.
              </p>
            </div>
          ),
          backgroundColor: '#3a1b47',
          notes: 'Best for high-throughput, real-time applications with complex filtering'
        },
        {
          id: 20,
          title: 'Qdrant - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#9434bd', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                <li>Features rich payload filters (geo, ranges, text), sparse vectors support, and OpenAPI v3 client generation</li>
                <li>Written in Rust for performance</li>
                <li>Binary quantization provides up to 40x faster search while reducing memory footprint</li>
                <li>Hybrid and private cloud deployment options available</li>
              </ul>
            </div>
          ),
          backgroundColor: '#3a1b47',
          notes: 'Additional notes: Rust-based, rich filters, 40x faster search with binary quantization'
        }
      ]
    },
    {
      id: 'milvus',
      title: 'Milvus',
      slides: [
        {
          id: 21,
          title: 'Milvus - Index Type',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#df8739', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Multiple specialized options: <strong>FLAT, IVF_FLAT, IVF_SQ8, IVF_PQ, IVF_RABITQ, HNSW, DISKANN, and GPU variants</strong>. Also supports scalar indexes (INVERTED, BITMAP, etc.) for structured data filtering and hybrid searches.
              </p>
            </div>
          ),
          backgroundColor: '#754011',
          notes: 'Milvus offers multiple specialized index types including FLAT, IVF, HNSW, DiskANN, and GPU variants'
        },
        {
          id: 22,
          title: 'Milvus - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#df8739', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Cloud-native distributed cluster with storage/compute separation. Uses mmap and DiskANN techniques for out-of-RAM data access. Horizontal scaling through sharding and flexible deployment across clusters.
              </p>
            </div>
          ),
          backgroundColor: '#754011',
          notes: 'Cloud-native distributed cluster with storage/compute separation'
        },
        {
          id: 23,
          title: 'Milvus - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#df8739', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                <strong>Billion-scale vector search</strong> support with highly tunable performance characteristics. Performance varies by index: graph indices deliver highest QPS for small topK, while IVF variants excel at large topK retrievals. Optimize based on filter ratio/recall needs.
              </p>
            </div>
          ),
          backgroundColor: '#754011',
          notes: 'Billion-scale vector search with highly tunable performance'
        },
        {
          id: 24,
          title: 'Milvus - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#df8739', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Open source with managed options available (e.g., Zilliz Cloud). Quantization techniques and DiskANN significantly reduce RAM requirements and associated infrastructure costs. Flexible deployment options for cost optimization.
              </p>
            </div>
          ),
          backgroundColor: '#754011',
          notes: 'Open source with managed options, cost-efficient with quantization'
        },
        {
          id: 25,
          title: 'Milvus - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#df8739', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                <strong>Large-scale deployments</strong> requiring flexible index strategies across RAM and disk. Ideal for organizations needing performance tuning options and diverse workload patterns. Well-suited for applications that benefit from specialized index types for different query patterns.
              </p>
            </div>
          ),
          backgroundColor: '#754011',
          notes: 'Best for large-scale deployments with flexible index strategies'
        },
        {
          id: 26,
          title: 'Milvus - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#df8739', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                <li>Decision rules: high filter ratio → FLAT; large topK → IVF</li>
                <li>Extreme recall → FLAT+GPU</li>
                <li>DiskANN for SSD-bound workloads with stable latency</li>
                <li>GPU support enhances performance for compute-intensive operations</li>
              </ul>
            </div>
          ),
          backgroundColor: '#754011',
          notes: 'Additional notes: Decision rules for index selection, GPU support, DiskANN for SSD workloads'
        }
      ]
    },
    {
      id: 'chroma',
      title: 'Chroma',
      slides: [
        {
          id: 27,
          title: 'Chroma - Index Type',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ed311f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                HNSW-based vector indexing optimized for single-node deployment. Focused on <strong>simplicity and ease of use</strong> rather than complex indexing configurations. Supports both vector embeddings and associated metadata for retrieval.
              </p>
            </div>
          ),
          backgroundColor: '#651d16',
          notes: 'Chroma uses HNSW-based indexing optimized for simplicity'
        },
        {
          id: 28,
          title: 'Chroma - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ed311f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Primarily single-node open source implementation with simple local persistence. Chroma Cloud offers managed deployment for teams requiring more robust infrastructure without operational overhead.
              </p>
            </div>
          ),
          backgroundColor: '#651d16',
          notes: 'Single-node implementation with managed Cloud option'
        },
        {
          id: 29,
          title: 'Chroma - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ed311f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Optimized for <strong>small-to-mid datasets</strong> (up to several million vectors). Prioritizes developer experience with fast iteration cycles and simple API. Best suited for rapid prototyping and development environments rather than massive production workloads.
              </p>
            </div>
          ),
          backgroundColor: '#651d16',
          notes: 'Optimized for small-to-mid datasets with developer-friendly API'
        },
        {
          id: 30,
          title: 'Chroma - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ed311f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Open source and free for self-hosting. Managed Chroma Cloud offers usage-based pricing. Minimal operational overhead for prototyping and development workloads. No enterprise licensing fees makes it cost-effective for startups and research.
              </p>
            </div>
          ),
          backgroundColor: '#651d16',
          notes: 'Free open source with managed Cloud option'
        },
        {
          id: 31,
          title: 'Chroma - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ed311f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Ideal for <strong>local-first RAG applications, prototyping vector search functionality, Jupyter notebooks</strong>, and lightweight embedding-based applications. Perfect starting point for AI developers exploring vector search without complex infrastructure requirements.
              </p>
            </div>
          ),
          backgroundColor: '#651d16',
          notes: 'Best for local-first RAG applications and prototyping'
        },
        {
          id: 32,
          title: 'Chroma - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#ed311f', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                <li>Python-friendly API with extensive integrations</li>
                <li>Works seamlessly with LangChain and LlamaIndex</li>
                <li>Straightforward persistence model and metadata handling</li>
                <li>Emphasizes developer productivity over enterprise-grade features</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651d16',
          notes: 'Additional notes: Python-friendly, LangChain/LlamaIndex integration, developer productivity focus'
        }
      ]
    },
    {
      id: 'redis',
      title: 'Redis Vector Store',
      slides: [
        {
          id: 33,
          title: 'Redis Vector Store - Index Type',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#0bc7a2', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Implements <strong>HNSW and Flat indexes</strong> via the RediSearch module. Uniquely combines efficient vector search with Redis's native data structures. Supports hybrid search combining both text and vector similarity in the same query for more precise results.
              </p>
            </div>
          ),
          backgroundColor: '#0b5748',
          notes: 'Redis uses HNSW and Flat indexes via RediSearch module'
        },
        {
          id: 34,
          title: 'Redis Vector Store - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#0bc7a2', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Utilizes Redis Cluster architecture with sharding and replication. Primarily <strong>in-memory for performance</strong> with configurable persistence options (RDB snapshots, AOF logs). Horizontal scaling through cluster nodes and vertical scaling through instance sizing.
              </p>
            </div>
          ),
          backgroundColor: '#0b5748',
          notes: 'Redis Cluster architecture with in-memory performance'
        },
        {
          id: 35,
          title: 'Redis Vector Store - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#0bc7a2', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Delivers <strong>extremely low latency</strong> due to in-memory architecture. Benchmarks show Redis outperforms dedicated vector databases at recall ≥0.98. Ideal for real-time applications requiring <strong>sub-millisecond response times</strong>. Consistent performance even under high loads.
              </p>
            </div>
          ),
          backgroundColor: '#0b5748',
          notes: 'Extremely low latency with sub-millisecond response times'
        },
        {
          id: 36,
          title: 'Redis Vector Store - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#0bc7a2', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Memory-intensive nature drives infrastructure costs higher than disk-based alternatives. Redis Enterprise and Redis Cloud options available with various pricing tiers. Consider using data expiration/TTL strategies to manage memory usage and costs for time-sensitive data.
              </p>
            </div>
          ),
          backgroundColor: '#0b5748',
          notes: 'Higher infrastructure costs due to in-memory architecture'
        },
        {
          id: 37,
          title: 'Redis Vector Store - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#0bc7a2', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Excels in <strong>real-time personalization, recommendation systems</strong> requiring immediate responses, and session-based retrieval workloads. Ideal for organizations with existing Redis deployments seeking to add vector search capabilities. Perfect for low-latency, high-throughput vector search applications.
              </p>
            </div>
          ),
          backgroundColor: '#0b5748',
          notes: 'Best for real-time personalization and recommendation systems'
        },
        {
          id: 38,
          title: 'Redis Vector Store - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#0bc7a2', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                <li>Uniquely combines caching and search capabilities in a single system</li>
                <li>Delivers strong throughput with minimal operational complexity for teams already familiar with Redis</li>
                <li>Benefits from extensive Redis ecosystem and tooling</li>
                <li>Requires careful memory management strategies for large vector datasets</li>
              </ul>
            </div>
          ),
          backgroundColor: '#0b5748',
          notes: 'Additional notes: Combines caching and search, extensive ecosystem, memory management required'
        }
      ]
    },
    {
      id: 'elasticsearch',
      title: 'Elasticsearch Vector',
      slides: [
        {
          id: 39,
          title: 'Elasticsearch Vector - Index Type',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#1888d1', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
               Built on Lucene HNSW implementation with additional compression and quantization options. Features DiskBBQ for memory-efficient vector storage and ACORN-1 algorithm specifically optimized for filtered vector search performance.
              </p>
            </div>
          ),
          backgroundColor: '#133b55',
          notes: 'Elasticsearch uses Lucene HNSW with DiskBBQ and ACORN-1 for filtered search'
        },
        {
          id: 40,
          title: 'Elasticsearch Vector - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#1888d1', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Horizontal scaling via Elasticsearch's native sharding and replication capabilities. Elastic Cloud provides managed auto-scaling options. Distributes vector search workloads across multiple nodes for balanced resource utilization and high availability.
              </p>
            </div>
          ),
          backgroundColor: '#133b55',
          notes: 'Horizontal scaling with native sharding and replication'
        },
        {
          id: 41,
          title: 'Elasticsearch Vector - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#1888d1', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Excels in <strong>hybrid search combining traditional BM25 text relevance with vector similarity</strong>. New ACORN-1 algorithm delivers <strong>5x faster filtered vector search</strong> performance. Ongoing improvements focus on memory efficiency and query optimization for large-scale deployments.
              </p>
            </div>
          ),
          backgroundColor: '#133b55',
          notes: 'Hybrid BM25 + vector search with 5x faster filtered search'
        },
        {
          id: 42,
          title: 'Elasticsearch Vector - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#1888d1', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Cost scales with cluster size and shard configuration. Significant economic advantages for organizations already running Elasticsearch deployments. Binary vector quantization reduces storage costs while maintaining search quality. Elastic Cloud offers various pricing tiers.
              </p>
            </div>
          ),
          backgroundColor: '#133b55',
          notes: 'Cost scales with cluster size, quantization reduces storage costs'
        },
        {
          id: 43,
          title: 'Elasticsearch Vector - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#1888d1', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Ideal for <strong>unified keyword + semantic search applications</strong> where both traditional text matching and semantic relevance are needed. Strong fit for enterprise search, logs/observability with semantic enrichment, and content discovery systems requiring complex filtering.
              </p>
            </div>
          ),
          backgroundColor: '#133b55',
          notes: 'Best for unified keyword + semantic search applications'
        },
        {
          id: 44,
          title: 'Elasticsearch Vector - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#1888d1', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                <li>Benefits from ecosystem maturity and extensive tooling</li>
                <li>Recent features significantly improve filtered vector latency</li>
                <li>Default BBQ compression provides optimal balance</li>
                <li>Reduces memory requirements for large corpora</li>
              </ul>
            </div>
          ),
          backgroundColor: '#133b55',
          notes: 'Additional notes: Ecosystem maturity, BBQ compression, reduced memory requirements'
        }
      ]
    },
    {
      id: 'vespa',
      title: 'Vespa',
      slides: [
        {
          id: 45,
          title: 'Vespa - Index Type',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#d96518', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                HNSW with <strong>tensor operations</strong> for advanced vector search. Uniquely supports vectors, text, and structured data in a single unified engine. Uses tensor compute framework allowing complex operations beyond simple vector search.
              </p>
            </div>
          ),
          backgroundColor: '#552200',
          notes: 'Vespa uses HNSW with tensor operations for advanced vector search'
        },
        {
          id: 46,
          title: 'Vespa - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#d96518', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Distributed elastic architecture with horizontal scaling. Supports <strong>real-time indexing and online serving</strong> with auto-scaling patterns. Multiple content clusters can be deployed for different workloads with independent scaling.
              </p>
            </div>
          ),
          backgroundColor: '#552200',
          notes: 'Distributed elastic architecture with real-time indexing'
        },
        {
          id: 47,
          title: 'Vespa - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#d96518', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Engineered for <strong>high-throughput, low-latency at billion-scale</strong> operations. Supports on-the-fly ranking and inference during query execution. Scales to handle large-scale data with predictable performance characteristics.
              </p>
            </div>
          ),
          backgroundColor: '#552200',
          notes: 'High-throughput, low-latency at billion-scale operations'
        },
        {
          id: 48,
          title: 'Vespa - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#d96518', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Open source with self-managed deployment options. Infrastructure costs tied primarily to throughput requirements and online inference/ranking needs. Cloud offering available for managed operations.
              </p>
            </div>
          ),
          backgroundColor: '#552200',
          notes: 'Open source with self-managed or cloud options'
        },
        {
          id: 49,
          title: 'Vespa - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#d96518', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                <strong>Large-scale recommendation systems</strong> and search applications requiring complex ranking logic. Ideal for <strong>multimodal/tensor pipelines</strong> where search, ranking, and inference must happen in real-time within a single platform.
              </p>
            </div>
          ),
          backgroundColor: '#552200',
          notes: 'Best for large-scale recommendation systems and multimodal pipelines'
        },
        {
          id: 50,
          title: 'Vespa - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#d96518', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                <li>Rich schema with tensors and integrates ranking functions</li>
                <li>ML models at serving time for on-the-fly inference</li>
                <li>Custom query and document processors for advanced transformation</li>
                <li>Offers both real-time and batch processing capabilities</li>
              </ul>
            </div>
          ),
          backgroundColor: '#552200',
          notes: 'Additional notes: Rich schema, ML models, custom processors, real-time and batch processing'
        }
      ]
    },
    {
      id: 'postgresql',
      title: 'PostgreSQL + pgvector',
      slides: [
        {
          id: 51,
          title: 'PostgreSQL + pgvector - Index Type',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Vector indices: <strong>HNSW and IVFFlat</strong> via pgvector extension. Standard PostgreSQL B-tree, GiST, GIN indices for scalar filtering and metadata. Both approximate and exact vector search supported with different performance trade-offs.
              </p>
            </div>
          ),
          backgroundColor: '#34495E',
          notes: 'PostgreSQL + pgvector uses HNSW and IVFFlat indices'
        },
        {
          id: 52,
          title: 'PostgreSQL + pgvector - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Uses PostgreSQL's native replication and partitioning mechanisms. Extensions like Citus and pg_shard enable horizontal scale-out with distributed tables. Vertical scaling through instance sizing based on workload requirements.
              </p>
            </div>
          ),
          backgroundColor: '#34495E',
          notes: 'Native PostgreSQL replication and partitioning'
        },
        {
          id: 53,
          title: 'PostgreSQL + pgvector - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Recent pgvector 0.8.0 delivers <strong>150x improvement</strong> in query performance. Significantly faster index builds and query latency. Well-suited for moderate-scale vector workloads (millions of vectors) with balanced query and update performance.
              </p>
            </div>
          ),
          backgroundColor: '#34495E',
          notes: '150x improvement in query performance with pgvector 0.8.0'
        },
        {
          id: 54,
          title: 'PostgreSQL + pgvector - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Open-source extension for PostgreSQL – pay only for infrastructure costs. Simpler operational model where PostgreSQL is already deployed. Can run on commodity hardware for development or cloud-managed PostgreSQL services for production.
              </p>
            </div>
          ),
          backgroundColor: '#34495E',
          notes: 'Open-source extension with infrastructure-only costs'
        },
        {
          id: 55,
          title: 'PostgreSQL + pgvector - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                Applications requiring <strong>ACID compliance with vector search</strong> capabilities. Ideal for systems with modest vector volumes that benefit from SQL interface and transactional guarantees. Perfect for developers who want to integrate vectors into existing relational data models.
              </p>
            </div>
          ),
          backgroundColor: '#34495E',
          notes: 'Best for ACID compliance with vector search capabilities'
        },
        {
          id: 56,
          title: 'PostgreSQL + pgvector - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '1.1em' }}>
                <li>Tune HNSW/IVF parameters for workload optimization</li>
                <li>Consider pgvectorscale for enhanced performance</li>
                <li>Leverages PostgreSQL strengths: SQL, transactions, joins, rich data types</li>
                <li>Combines vector search with traditional database features in a single system</li>
              </ul>
            </div>
          ),
          backgroundColor: '#34495E',
          notes: 'Additional notes: Tune parameters, pgvectorscale, SQL interface, transaction support'
        }
      ]
    },
    {
      id: 'mongodb',
      title: 'MongoDB Vector Search',
      slides: [
        {
          id: 57,
          title: 'MongoDB Vector Search - Index Type',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#17b35a', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em', color: '#3498db' }}>
                HNSW-based vector indexes within MongoDB Atlas with <strong>native integration into document data model</strong>. Supports hybrid relevance scoring combining vector similarity with traditional document data. Vector search built on top of Atlas' proven indexing infrastructure.
              </p>
            </div>
          ),
          backgroundColor: '#135b32',
          notes: 'MongoDB Vector Search: HNSW indexes with native document model integration'
        },
        {
          id: 58,
          title: 'MongoDB Vector Search - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#17b35a', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em', color: '#2ecc71' }}>
                Atlas managed scaling with automatic sharding and replication. Scale up/down with minimal operational overhead. Clear guidance provided for sizing RAM relative to index footprint. Leverages MongoDB's mature distributed systems architecture.
              </p>
            </div>
          ),
          backgroundColor: '#135b32',
          notes: 'MongoDB Vector Search: Atlas managed scaling with automatic sharding'
        },
        {
          id: 59,
          title: 'MongoDB Vector Search - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#17b35a', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em', color: '#f39c12' }}>
                Optimized for <strong>combined operational + vector workloads</strong>. Efficient hybrid queries leveraging both vector similarity and document field filtering. Pre-filtering capabilities reduce search space for improved performance on large collections.
              </p>
            </div>
          ),
          backgroundColor: '#135b32',
          notes: 'MongoDB Vector Search: Optimized for combined operational and vector workloads'
        },
        {
          id: 60,
          title: 'MongoDB Vector Search - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#17b35a', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em', color: '#e74c3c' }}>
                Cost driven by Atlas cluster sizing. Follow sizing best practices with sufficient RAM headroom for indexes. Benefit from unified pricing model that includes both operational and vector workloads. Pay-as-you-go options available for all Atlas tiers.
              </p>
            </div>
          ),
          backgroundColor: '#135b32',
          notes: 'MongoDB Vector Search: Cost driven by Atlas cluster sizing with unified pricing'
        },
        {
          id: 61,
          title: 'MongoDB Vector Search - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#17b35a', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em', color: '#9b59b6' }}>
                Applications needing to <strong>unify operational JSON data and embeddings</strong> in a single platform. Ideal for teams already using MongoDB seeking to add vector capabilities without additional infrastructure. Perfect for app development requiring both structured data and semantic search.
              </p>
            </div>
          ),
          backgroundColor: '#135b32',
          notes: 'MongoDB Vector Search: Ideal for unifying operational JSON data and embeddings'
        },
        {
          id: 62,
          title: 'MongoDB Vector Search - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#17b35a', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '1.1em', color: '#1abc9c' }}>
                <li>Extensive tooling and SDKs across multiple languages</li>
                <li>Comprehensive benchmarks and deployment guides in documentation</li>
                <li>Integrates well with Atlas Search for unified text + vector queries</li>
                <li>MongoDB Compass provides visual tools for vector index management</li>
              </ul>
            </div>
          ),
          backgroundColor: '#135b32',
          notes: 'MongoDB Vector Search: Extensive tooling and integration capabilities'
        }
      ]
    },
    {
      id: 'lancedb',
      title: 'LanceDB',
      slides: [
        {
          id: 63,
          title: 'LanceDB - Index Type',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#8a9395', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em', color: '#3498db' }}>
                Uses <strong>IVF-PQ and disk-optimized ANN algorithms</strong> over the Lance columnar format. Supports hybrid search combining vector and traditional search methods. Provides robust metadata filters for refined search results alongside vector similarity.
              </p>
            </div>
          ),
          backgroundColor: '#383e3f',
          notes: 'LanceDB: IVF-PQ with disk-optimized algorithms on Lance columnar format'
        },
        {
          id: 64,
          title: 'LanceDB - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#8a9395', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em', color: '#2ecc71' }}>
                Flexible deployment as <strong>embedded database or serverless/cloud service</strong>. Specifically optimized for object storage solutions like S3 and high-performance local NVMe drives. Designed to scale with data volume rather than query complexity.
              </p>
            </div>
          ),
          backgroundColor: '#383e3f',
          notes: 'LanceDB: Flexible deployment with S3 and NVMe optimization'
        },
        {
          id: 65,
          title: 'LanceDB - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#8a9395', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em', color: '#f39c12' }}>
                Achieves <strong>&lt;25ms latency</strong> for typical query workloads. Exceptional disk-based performance compared to memory-dependent alternatives. Particularly strong with large datasets stored on cost-effective storage solutions, maintaining performance at scale.
              </p>
            </div>
          ),
          backgroundColor: '#383e3f',
          notes: 'LanceDB: <25ms latency with exceptional disk-based performance'
        },
        {
          id: 66,
          title: 'LanceDB - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#8a9395', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em', color: '#e74c3c' }}>
                <strong>Storage-centric economics</strong> leveraging inexpensive S3/local disk to reduce RAM requirements and infrastructure costs. Serverless pricing options available, allowing pay-for-use models that scale efficiently with actual workloads. Optimized for low TCO at scale.
              </p>
            </div>
          ),
          backgroundColor: '#383e3f',
          notes: 'LanceDB: Storage-centric economics with low TCO at scale'
        },
        {
          id: 67,
          title: 'LanceDB - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#8a9395', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '1.1em', color: '#9b59b6' }}>
                Ideal for <strong>cost-efficient large-scale RAG over data lakes</strong>, where vectors are stored alongside source data. Well-suited for multimodal datasets combining text, images, and other data types. Effective for edge/embedded scenarios with storage constraints.
              </p>
            </div>
          ),
          backgroundColor: '#383e3f',
          notes: 'LanceDB: Ideal for cost-efficient large-scale RAG over data lakes'
        },
        {
          id: 68,
          title: 'LanceDB - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '1em', color: '#8a9395', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '1.1em', color: '#1abc9c' }}>
                <li>Built on the columnar Lance format for efficient storage and retrieval</li>
                <li>Provides excellent I/O locality for disk-based operations</li>
                <li>Integrates seamlessly with Python/Apache Arrow ecosystem</li>
                <li>Perfect for data science and analytics workflows</li>
              </ul>
            </div>
          ),
          backgroundColor: '#383e3f',
          notes: 'LanceDB: Built on Lance format with Python/Apache Arrow integration'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 69,
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
          id: 70,
          title: 'How to Choose the Right Vector Database',
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', border: '2px solid #3498db' }}>
              <h4 style={{ color: '#3498db', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Production-Grade & Managed
              </h4>
              <ul style={{ lineHeight: '1.8', color: '#3498db' }}>
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
              <ul style={{ lineHeight: '1.8', color: '#f39c12' }}>
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
              <ul style={{ lineHeight: '1.8', color: '#2ecc71' }}>
                <li><strong>Chroma:</strong> Simple, local-first, LangChain/LlamaIndex integration</li>
                <li><strong>LanceDB:</strong> Embedded, cost-efficient for data lakes</li>
              </ul>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '10px', border: '2px solid #9b59b6' }}>
              <h4 style={{ color: '#9b59b6', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="1x" darkModeInvert={true} />
                Real-Time & Low-Latency
              </h4>
              <ul style={{ lineHeight: '1.8', color: '#9b59b6' }}>
                <li><strong>Redis Vector:</strong> Sub-millisecond, in-memory speed</li>
                <li><strong>Qdrant:</strong> High throughput with minimal latency</li>
              </ul>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(255, 235, 25, 0.1)', borderRadius: '10px', border: '2px solid #afc336' }}>
              <h4 style={{ color: '#afc336', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" darkModeInvert={true} />
                Existing Database Integration
              </h4>
              <ul style={{ lineHeight: '1.8', color: '#afc336' }}>
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
              <ul style={{ lineHeight: '1.8', color: '#e74c3c' }}>
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

