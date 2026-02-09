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
          center: true,
          title: 'Vector Databases Cheat Sheet',
          content: (
            <div style={{ color: '#fff' }}>
              <h2 style={{ marginBottom: '40px' }}>A comprehensive guide to 11 leading vector databases</h2>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', marginTop: '20px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <SvgIcon iconName="duo-database" sizeName="4x" style={{ color: '#3498db' }} darkModeInvert={true} />
                  <p style={{ marginTop: '15px', fontSize: '2rem' }}>Vector Storage</p>
                </div>
                <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} darkModeInvert={true} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <SvgIcon iconName="duo-magnifying-glass" sizeName="4x" style={{ color: '#f39c12' }} darkModeInvert={true} />
                  <p style={{ marginTop: '15px', fontSize: '2rem' }}>Similarity Search</p>
                </div>
                <SvgIcon iconName="duo-arrow-right" sizeName="3x" style={{ color: '#95a5a6' }} darkModeInvert={true} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <SvgIcon iconName="duo-robot" sizeName="4x" style={{ color: '#2ecc71' }} darkModeInvert={true} />
                  <p style={{ marginTop: '15px', fontSize: '2rem' }}>AI Applications</p>
                </div>
              </div>
              <p style={{ marginTop: '0px', fontSize: '1.4rem' }}>
                For similarity search, retrieval augmented generation, and AI applications • 2025
              </p>
              <p><strong>Prepared by:</strong> Nisar A</p>
              <p><strong>Date:</strong> November 7, 2025</p>
              <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
            </div>
          ),
          backgroundColor: '#2a217b',
          notes: ''
        },
        {
          id: 2,
          title: 'Table of Contents',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <h3 style={{ paddingBottom: '30px', textAlign: 'center' }}>11 Vector Databases Covered</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                    <span style={{ fontWeight: 'bold' }}>1</span>
                    <SvgIcon iconName="duo-minus" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Pinecone</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                    <span style={{ fontWeight: 'bold' }}>2</span>
                    <SvgIcon iconName="duo-minus" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Weaviate</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                    <span style={{ fontWeight: 'bold' }}>3</span>
                    <SvgIcon iconName="duo-minus" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Qdrant</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                    <span style={{ fontWeight: 'bold' }}>4</span>
                    <SvgIcon iconName="duo-minus" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Milvus</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                    <span style={{ fontWeight: 'bold' }}>5</span>
                    <SvgIcon iconName="duo-minus" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Chroma</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(26, 188, 156, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                    <span style={{ fontWeight: 'bold' }}>6</span>
                    <SvgIcon iconName="duo-minus" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Redis Vector Store</strong>
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                    <span style={{ fontWeight: 'bold' }}>7</span>
                    <SvgIcon iconName="duo-minus" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Elasticsearch Vector</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                    <span style={{ fontWeight: 'bold' }}>8</span>
                    <SvgIcon iconName="duo-minus" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>Vespa</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(136, 255, 0, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                    <span style={{ fontWeight: 'bold' }}>9</span>
                    <SvgIcon iconName="duo-minus" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>PostgreSQL + pgvector</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(39, 174, 96, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                    <span style={{ fontWeight: 'bold' }}>10</span>
                    <SvgIcon iconName="duo-minus" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>MongoDB Vector Search</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(189, 195, 199, 0.1)', borderRadius: '8px', marginBottom: '10px' }}>
                    <span style={{ fontWeight: 'bold' }}>11</span>
                    <SvgIcon iconName="duo-minus" sizeName="2x" style={{ margin: '0px' }} darkModeInvert={true} />
                    <strong>LanceDB</strong>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', padding: '12px', backgroundColor: 'rgba(41, 128, 185, 0.1)', borderRadius: '8px', marginBottom: '10px', border: '2px solid #2980b9' }}>
                    <SvgIcon iconName="duo-table" sizeName="2x" style={{ color: '#2980b9' }} />
                    <strong>Quick Comparison Summary</strong>
                  </div>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#2a217b',
          notes: ''
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
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#69addb', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Proprietary ANN algorithms with specialized index families (p1, p2, s1). Uses graph-based approaches for performance indexes and different structures for storage optimization. Supports various quantization options based on tier selection.
              </p>
            </div>
          ),
          backgroundColor: '#1a4e71',
          notes: ''
        },
        {
          id: 4,
          title: 'Pinecone - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#69addb', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                <strong>Vertical scaling:</strong> Increase pod size (x1→x2→x4→x8) with zero downtime.<br /><br />
                <strong>Horizontal scaling:</strong> Add replicas to increase throughput (QPS) or create new indexes from collections to expand capacity or change pod types.
              </p>
            </div>
          ),
          backgroundColor: '#1a4e71',
          notes: ''
        },
        {
          id: 5,
          title: 'Pinecone - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#69addb', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Delivers consistently low latency (sub-50ms queries typical) even at scale. p2 indexes offer highest performance. QPS scales linearly with replica count. Optimized for production workloads with consistent latency under load.
              </p>
            </div>
          ),
          backgroundColor: '#1a4e71',
          notes: ''
        },
        {
          id: 6,
          title: 'Pinecone - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#69addb', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Fully managed service starting at $70/month for s1.x1 pod. Serverless option with usage-based pricing available. Pay for capacity and throughput based on pod size and replica count. Replicas multiply cost but increase QPS linearly.
              </p>
            </div>
          ),
          backgroundColor: '#1a4e71',
          notes: ''
        },
        {
          id: 7,
          title: 'Pinecone - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#69addb', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Production-grade vector search applications requiring <strong>easy operations, SLA guarantees, and predictable latency</strong>. Ideal for scenarios needing rapid scale-out capabilities and managed infrastructure. Well-suited for high QPS requirements with enterprise support needs.
              </p>
            </div>
          ),
          backgroundColor: '#1a4e71',
          notes: ''
        },
        {
          id: 8,
          title: 'Pinecone - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#69addb', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                <li>Vertical scaling occurs with no downtime for upserts or queries</li>
                <li>Collections enable index reconfiguration for horizontal scaling</li>
                <li>Supports selective metadata indexing for optimized filtered search</li>
                <li>Serverless option auto-scales for variable workloads</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1a4e71',
          notes: ''
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
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#24b15f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Primary vector indices: <strong>HNSW</strong> (Hierarchical Navigable Small World) for approximate nearest neighbors and <strong>Flat</strong> for exact search. Also uses inverted index for fast filtering on text and structured data properties. Combination enables efficient hybrid search.
              </p>
            </div>
          ),
          backgroundColor: '#104928',
          notes: ''
        },
        {
          id: 10,
          title: 'Weaviate - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#24b15f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Horizontal scaling through sharding and replication across nodes. Vertical scaling via instance sizing selection. Does not require all vectors to reside in RAM, allowing for efficient memory usage. Supports cloud-native deployments with high availability.
              </p>
            </div>
          ),
          backgroundColor: '#104928',
          notes: ''
        },
        {
          id: 11,
          title: 'Weaviate - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#24b15f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Fast HNSW search delivering sub-50ms 20-NN queries even on large datasets. Particularly efficient for <strong>hybrid search</strong> combining vector similarity with filtering. Optimized for performance when using combined vector + where filters in a single query.
              </p>
            </div>
          ),
          backgroundColor: '#104928',
          notes: ''
        },
        {
          id: 12,
          title: 'Weaviate - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#24b15f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Open source with managed cloud starting at $25/month for standard performance-optimized instance. Serverless option available. Quantization techniques reduce memory requirements and lower costs. Cost-performance optimization guides available for tuning workloads.
              </p>
            </div>
          ),
          backgroundColor: '#104928',
          notes: ''
        },
        {
          id: 13,
          title: 'Weaviate - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#24b15f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Ideal for <strong>hybrid semantic + structured filtering</strong> workloads combining vectors with complex property-based queries. Excellent for multi-modal data (text, images, etc.) with rich metadata. Well-suited for applications requiring feature-rich developer APIs and GraphQL integration.
              </p>
            </div>
          ),
          backgroundColor: '#104928',
          notes: ''
        },
        {
          id: 14,
          title: 'Weaviate - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#24b15f', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                <li>Offers GraphQL and REST APIs for flexible integration</li>
                <li>Supports reference links for graph-like connections between objects</li>
                <li>Extensive documentation on hybrid retrieval and cost/performance optimization</li>
                <li>Strong community and comprehensive language clients</li>
              </ul>
            </div>
          ),
          backgroundColor: '#104928',
          notes: ''
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
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#9434bd', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Optimized HNSW algorithm with payload-aware filtering for efficient vector search. Supports multiple quantization methods including <strong>scalar, product, and binary quantization</strong> for memory efficiency and improved search performance.
              </p>
            </div>
          ),
          backgroundColor: '#3a1b47',
          notes: ''
        },
        {
          id: 16,
          title: 'Qdrant - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#9434bd', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Distributed clustering with configurable replication and sharding capabilities. Works on both on-premises and cloud environments. Features multitenancy support for segmenting collections and efficient resource utilization.
              </p>
            </div>
          ),
          backgroundColor: '#3a1b47',
          notes: ''
        },
        {
          id: 17,
          title: 'Qdrant - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#9434bd', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Delivers <strong>up to 4x higher RPS</strong> compared to competitors with minimal latency. Features fast indexing capabilities and particularly strong filtered search performance. On-disk optimizations (mmap, io_uring) improve efficiency for large-scale deployments.
              </p>
            </div>
          ),
          backgroundColor: '#3a1b47',
          notes: ''
        },
        {
          id: 18,
          title: 'Qdrant - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#9434bd', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Available as open source with self-hosting options. Qdrant Cloud offers managed plans for various workloads. Efficient memory usage through quantization techniques significantly reduces infrastructure costs for large vector collections.
              </p>
            </div>
          ),
          backgroundColor: '#3a1b47',
          notes: ''
        },
        {
          id: 19,
          title: 'Qdrant - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#9434bd', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Ideal for <strong>high-throughput, real-time applications</strong> that require complex filtering capabilities alongside vector search. Well-suited for scenarios demanding cost-efficient scaling and precise retrieval with payload filtering requirements.
              </p>
            </div>
          ),
          backgroundColor: '#3a1b47',
          notes: ''
        },
        {
          id: 20,
          title: 'Qdrant - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#9434bd', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                <li>Features rich payload filters (geo, ranges, text), sparse vectors support, and OpenAPI v3 client generation</li>
                <li>Written in Rust for performance</li>
                <li>Binary quantization provides up to 40x faster search while reducing memory footprint</li>
                <li>Hybrid and private cloud deployment options available</li>
              </ul>
            </div>
          ),
          backgroundColor: '#3a1b47',
          notes: ''
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
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#df8739', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Multiple specialized options: <strong>FLAT, IVF_FLAT, IVF_SQ8, IVF_PQ, IVF_RABITQ, HNSW, DISKANN, and GPU variants</strong>. Also supports scalar indexes (INVERTED, BITMAP, etc.) for structured data filtering and hybrid searches.
              </p>
            </div>
          ),
          backgroundColor: '#754011',
          notes: ''
        },
        {
          id: 22,
          title: 'Milvus - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#df8739', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Cloud-native distributed cluster with storage/compute separation. Uses mmap and DiskANN techniques for out-of-RAM data access. Horizontal scaling through sharding and flexible deployment across clusters.
              </p>
            </div>
          ),
          backgroundColor: '#754011',
          notes: ''
        },
        {
          id: 23,
          title: 'Milvus - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#df8739', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                <strong>Billion-scale vector search</strong> support with highly tunable performance characteristics. Performance varies by index: graph indices deliver highest QPS for small topK, while IVF variants excel at large topK retrievals. Optimize based on filter ratio/recall needs.
              </p>
            </div>
          ),
          backgroundColor: '#754011',
          notes: ''
        },
        {
          id: 24,
          title: 'Milvus - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#df8739', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Open source with managed options available (e.g., Zilliz Cloud). Quantization techniques and DiskANN significantly reduce RAM requirements and associated infrastructure costs. Flexible deployment options for cost optimization.
              </p>
            </div>
          ),
          backgroundColor: '#754011',
          notes: ''
        },
        {
          id: 25,
          title: 'Milvus - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#df8739', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                <strong>Large-scale deployments</strong> requiring flexible index strategies across RAM and disk. Ideal for organizations needing performance tuning options and diverse workload patterns. Well-suited for applications that benefit from specialized index types for different query patterns.
              </p>
            </div>
          ),
          backgroundColor: '#754011',
          notes: ''
        },
        {
          id: 26,
          title: 'Milvus - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#df8739', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                <li>Decision rules: high filter ratio → FLAT; large topK → IVF</li>
                <li>Extreme recall → FLAT+GPU</li>
                <li>DiskANN for SSD-bound workloads with stable latency</li>
                <li>GPU support enhances performance for compute-intensive operations</li>
              </ul>
            </div>
          ),
          backgroundColor: '#754011',
          notes: ''
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
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#ed311f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                HNSW-based vector indexing optimized for single-node deployment. Focused on <strong>simplicity and ease of use</strong> rather than complex indexing configurations. Supports both vector embeddings and associated metadata for retrieval.
              </p>
            </div>
          ),
          backgroundColor: '#651d16',
          notes: ''
        },
        {
          id: 28,
          title: 'Chroma - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#ed311f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Primarily single-node open source implementation with simple local persistence. Chroma Cloud offers managed deployment for teams requiring more robust infrastructure without operational overhead.
              </p>
            </div>
          ),
          backgroundColor: '#651d16',
          notes: ''
        },
        {
          id: 29,
          title: 'Chroma - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#ed311f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Optimized for <strong>small-to-mid datasets</strong> (up to several million vectors). Prioritizes developer experience with fast iteration cycles and simple API. Best suited for rapid prototyping and development environments rather than massive production workloads.
              </p>
            </div>
          ),
          backgroundColor: '#651d16',
          notes: ''
        },
        {
          id: 30,
          title: 'Chroma - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#ed311f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Open source and free for self-hosting. Managed Chroma Cloud offers usage-based pricing. Minimal operational overhead for prototyping and development workloads. No enterprise licensing fees makes it cost-effective for startups and research.
              </p>
            </div>
          ),
          backgroundColor: '#651d16',
          notes: ''
        },
        {
          id: 31,
          title: 'Chroma - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#ed311f', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Ideal for <strong>local-first RAG applications, prototyping vector search functionality, Jupyter notebooks</strong>, and lightweight embedding-based applications. Perfect starting point for AI developers exploring vector search without complex infrastructure requirements.
              </p>
            </div>
          ),
          backgroundColor: '#651d16',
          notes: ''
        },
        {
          id: 32,
          title: 'Chroma - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#ed311f', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                <li>Python-friendly API with extensive integrations</li>
                <li>Works seamlessly with LangChain and LlamaIndex</li>
                <li>Straightforward persistence model and metadata handling</li>
                <li>Emphasizes developer productivity over enterprise-grade features</li>
              </ul>
            </div>
          ),
          backgroundColor: '#651d16',
          notes: ''
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
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#0bc7a2', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Implements <strong>HNSW and Flat indexes</strong> via the RediSearch module. Uniquely combines efficient vector search with Redis's native data structures. Supports hybrid search combining both text and vector similarity in the same query for more precise results.
              </p>
            </div>
          ),
          backgroundColor: '#0b5748',
          notes: ''
        },
        {
          id: 34,
          title: 'Redis Vector Store - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#0bc7a2', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Utilizes Redis Cluster architecture with sharding and replication. Primarily <strong>in-memory for performance</strong> with configurable persistence options (RDB snapshots, AOF logs). Horizontal scaling through cluster nodes and vertical scaling through instance sizing.
              </p>
            </div>
          ),
          backgroundColor: '#0b5748',
          notes: ''
        },
        {
          id: 35,
          title: 'Redis Vector Store - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#0bc7a2', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Delivers <strong>extremely low latency</strong> due to in-memory architecture. Benchmarks show Redis outperforms dedicated vector databases at recall ≥0.98. Ideal for real-time applications requiring <strong>sub-millisecond response times</strong>. Consistent performance even under high loads.
              </p>
            </div>
          ),
          backgroundColor: '#0b5748',
          notes: ''
        },
        {
          id: 36,
          title: 'Redis Vector Store - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#0bc7a2', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Memory-intensive nature drives infrastructure costs higher than disk-based alternatives. Redis Enterprise and Redis Cloud options available with various pricing tiers. Consider using data expiration/TTL strategies to manage memory usage and costs for time-sensitive data.
              </p>
            </div>
          ),
          backgroundColor: '#0b5748',
          notes: ''
        },
        {
          id: 37,
          title: 'Redis Vector Store - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#0bc7a2', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Excels in <strong>real-time personalization, recommendation systems</strong> requiring immediate responses, and session-based retrieval workloads. Ideal for organizations with existing Redis deployments seeking to add vector search capabilities. Perfect for low-latency, high-throughput vector search applications.
              </p>
            </div>
          ),
          backgroundColor: '#0b5748',
          notes: ''
        },
        {
          id: 38,
          title: 'Redis Vector Store - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#0bc7a2', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                <li>Uniquely combines caching and search capabilities in a single system</li>
                <li>Delivers strong throughput with minimal operational complexity for teams already familiar with Redis</li>
                <li>Benefits from extensive Redis ecosystem and tooling</li>
                <li>Requires careful memory management strategies for large vector datasets</li>
              </ul>
            </div>
          ),
          backgroundColor: '#0b5748',
          notes: ''
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
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#1888d1', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Built on Lucene HNSW implementation with additional compression and quantization options. Features DiskBBQ for memory-efficient vector storage and ACORN-1 algorithm specifically optimized for filtered vector search performance.
              </p>
            </div>
          ),
          backgroundColor: '#133b55',
          notes: ''
        },
        {
          id: 40,
          title: 'Elasticsearch Vector - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#1888d1', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Horizontal scaling via Elasticsearch's native sharding and replication capabilities. Elastic Cloud provides managed auto-scaling options. Distributes vector search workloads across multiple nodes for balanced resource utilization and high availability.
              </p>
            </div>
          ),
          backgroundColor: '#133b55',
          notes: ''
        },
        {
          id: 41,
          title: 'Elasticsearch Vector - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#1888d1', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Excels in <strong>hybrid search combining traditional BM25 text relevance with vector similarity</strong>. New ACORN-1 algorithm delivers <strong>5x faster filtered vector search</strong> performance. Ongoing improvements focus on memory efficiency and query optimization for large-scale deployments.
              </p>
            </div>
          ),
          backgroundColor: '#133b55',
          notes: ''
        },
        {
          id: 42,
          title: 'Elasticsearch Vector - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#1888d1', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Cost scales with cluster size and shard configuration. Significant economic advantages for organizations already running Elasticsearch deployments. Binary vector quantization reduces storage costs while maintaining search quality. Elastic Cloud offers various pricing tiers.
              </p>
            </div>
          ),
          backgroundColor: '#133b55',
          notes: ''
        },
        {
          id: 43,
          title: 'Elasticsearch Vector - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#1888d1', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Ideal for <strong>unified keyword + semantic search applications</strong> where both traditional text matching and semantic relevance are needed. Strong fit for enterprise search, logs/observability with semantic enrichment, and content discovery systems requiring complex filtering.
              </p>
            </div>
          ),
          backgroundColor: '#133b55',
          notes: ''
        },
        {
          id: 44,
          title: 'Elasticsearch Vector - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#1888d1', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                <li>Benefits from ecosystem maturity and extensive tooling</li>
                <li>Recent features significantly improve filtered vector latency</li>
                <li>Default BBQ compression provides optimal balance</li>
                <li>Reduces memory requirements for large corpora</li>
              </ul>
            </div>
          ),
          backgroundColor: '#133b55',
          notes: ''
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
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#d96518', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                HNSW with <strong>tensor operations</strong> for advanced vector search. Uniquely supports vectors, text, and structured data in a single unified engine. Uses tensor compute framework allowing complex operations beyond simple vector search.
              </p>
            </div>
          ),
          backgroundColor: '#552200',
          notes: ''
        },
        {
          id: 46,
          title: 'Vespa - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#d96518', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Distributed elastic architecture with horizontal scaling. Supports <strong>real-time indexing and online serving</strong> with auto-scaling patterns. Multiple content clusters can be deployed for different workloads with independent scaling.
              </p>
            </div>
          ),
          backgroundColor: '#552200',
          notes: ''
        },
        {
          id: 47,
          title: 'Vespa - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#d96518', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Engineered for <strong>high-throughput, low-latency at billion-scale</strong> operations. Supports on-the-fly ranking and inference during query execution. Scales to handle large-scale data with predictable performance characteristics.
              </p>
            </div>
          ),
          backgroundColor: '#552200',
          notes: ''
        },
        {
          id: 48,
          title: 'Vespa - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#d96518', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Open source with self-managed deployment options. Infrastructure costs tied primarily to throughput requirements and online inference/ranking needs. Cloud offering available for managed operations.
              </p>
            </div>
          ),
          backgroundColor: '#552200',
          notes: ''
        },
        {
          id: 49,
          title: 'Vespa - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#d96518', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                <strong>Large-scale recommendation systems</strong> and search applications requiring complex ranking logic. Ideal for <strong>multimodal/tensor pipelines</strong> where search, ranking, and inference must happen in real-time within a single platform.
              </p>
            </div>
          ),
          backgroundColor: '#552200',
          notes: ''
        },
        {
          id: 50,
          title: 'Vespa - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#d96518', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                <li>Rich schema with tensors and integrates ranking functions</li>
                <li>ML models at serving time for on-the-fly inference</li>
                <li>Custom query and document processors for advanced transformation</li>
                <li>Offers both real-time and batch processing capabilities</li>
              </ul>
            </div>
          ),
          backgroundColor: '#552200',
          notes: ''
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
            <div style={{ textAlign: 'left', margin: '0 auto', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Vector indices: <strong>HNSW and IVFFlat</strong> via pgvector extension. Standard PostgreSQL B-tree, GiST, GIN indices for scalar filtering and metadata. Both approximate and exact vector search supported with different performance trade-offs.
              </p>
            </div>
          ),
          backgroundColor: '#34495E',
          notes: ''
        },
        {
          id: 52,
          title: 'PostgreSQL + pgvector - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Uses PostgreSQL's native replication and partitioning mechanisms. Extensions like Citus and pg_shard enable horizontal scale-out with distributed tables. Vertical scaling through instance sizing based on workload requirements.
              </p>
            </div>
          ),
          backgroundColor: '#34495E',
          notes: ''
        },
        {
          id: 53,
          title: 'PostgreSQL + pgvector - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Recent pgvector 0.8.0 delivers <strong>150x improvement</strong> in query performance. Significantly faster index builds and query latency. Well-suited for moderate-scale vector workloads (millions of vectors) with balanced query and update performance.
              </p>
            </div>
          ),
          backgroundColor: '#34495E',
          notes: ''
        },
        {
          id: 54,
          title: 'PostgreSQL + pgvector - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Open-source extension for PostgreSQL – pay only for infrastructure costs. Simpler operational model where PostgreSQL is already deployed. Can run on commodity hardware for development or cloud-managed PostgreSQL services for production.
              </p>
            </div>
          ),
          backgroundColor: '#34495E',
          notes: ''
        },
        {
          id: 55,
          title: 'PostgreSQL + pgvector - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Applications requiring <strong>ACID compliance with vector search</strong> capabilities. Ideal for systems with modest vector volumes that benefit from SQL interface and transactional guarantees. Perfect for developers who want to integrate vectors into existing relational data models.
              </p>
            </div>
          ),
          backgroundColor: '#34495E',
          notes: ''
        },
        {
          id: 56,
          title: 'PostgreSQL + pgvector - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                <li>Tune HNSW/IVF parameters for workload optimization</li>
                <li>Consider pgvectorscale for enhanced performance</li>
                <li>Leverages PostgreSQL strengths: SQL, transactions, joins, rich data types</li>
                <li>Combines vector search with traditional database features in a single system</li>
              </ul>
            </div>
          ),
          backgroundColor: '#34495E',
          notes: ''
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
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#17b35a', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                HNSW-based vector indexes within MongoDB Atlas with <strong>native integration into document data model</strong>. Supports hybrid relevance scoring combining vector similarity with traditional document data. Vector search built on top of Atlas' proven indexing infrastructure.
              </p>
            </div>
          ),
          backgroundColor: '#135b32',
          notes: ''
        },
        {
          id: 58,
          title: 'MongoDB Vector Search - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#17b35a', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Atlas managed scaling with automatic sharding and replication. Scale up/down with minimal operational overhead. Clear guidance provided for sizing RAM relative to index footprint. Leverages MongoDB's mature distributed systems architecture.
              </p>
            </div>
          ),
          backgroundColor: '#135b32',
          notes: ''
        },
        {
          id: 59,
          title: 'MongoDB Vector Search - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#17b35a', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Optimized for <strong>combined operational + vector workloads</strong>. Efficient hybrid queries leveraging both vector similarity and document field filtering. Pre-filtering capabilities reduce search space for improved performance on large collections.
              </p>
            </div>
          ),
          backgroundColor: '#135b32',
          notes: ''
        },
        {
          id: 60,
          title: 'MongoDB Vector Search - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#17b35a', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Cost driven by Atlas cluster sizing. Follow sizing best practices with sufficient RAM headroom for indexes. Benefit from unified pricing model that includes both operational and vector workloads. Pay-as-you-go options available for all Atlas tiers.
              </p>
            </div>
          ),
          backgroundColor: '#135b32',
          notes: ''
        },
        {
          id: 61,
          title: 'MongoDB Vector Search - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#17b35a', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Applications needing to <strong>unify operational JSON data and embeddings</strong> in a single platform. Ideal for teams already using MongoDB seeking to add vector capabilities without additional infrastructure. Perfect for app development requiring both structured data and semantic search.
              </p>
            </div>
          ),
          backgroundColor: '#135b32',
          notes: ''
        },
        {
          id: 62,
          title: 'MongoDB Vector Search - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#17b35a', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                <li>Extensive tooling and SDKs across multiple languages</li>
                <li>Comprehensive benchmarks and deployment guides in documentation</li>
                <li>Integrates well with Atlas Search for unified text + vector queries</li>
                <li>MongoDB Compass provides visual tools for vector index management</li>
              </ul>
            </div>
          ),
          backgroundColor: '#135b32',
          notes: ''
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
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#8a9395', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Uses <strong>IVF-PQ and disk-optimized ANN algorithms</strong> over the Lance columnar format. Supports hybrid search combining vector and traditional search methods. Provides robust metadata filters for refined search results alongside vector similarity.
              </p>
            </div>
          ),
          backgroundColor: '#383e3f',
          notes: ''
        },
        {
          id: 64,
          title: 'LanceDB - Scaling Model',
          icon: { name: 'duo-arrows-maximize' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#8a9395', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Flexible deployment as <strong>embedded database or serverless/cloud service</strong>. Specifically optimized for object storage solutions like S3 and high-performance local NVMe drives. Designed to scale with data volume rather than query complexity.
              </p>
            </div>
          ),
          backgroundColor: '#383e3f',
          notes: ''
        },
        {
          id: 65,
          title: 'LanceDB - Performance Profile',
          icon: { name: 'duo-gauge-high' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#8a9395', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Achieves <strong>&lt;25ms latency</strong> for typical query workloads. Exceptional disk-based performance compared to memory-dependent alternatives. Particularly strong with large datasets stored on cost-effective storage solutions, maintaining performance at scale.
              </p>
            </div>
          ),
          backgroundColor: '#383e3f',
          notes: ''
        },
        {
          id: 66,
          title: 'LanceDB - Cost Consideration',
          icon: { name: 'duo-dollar-sign' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#8a9395', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                <strong>Storage-centric economics</strong> leveraging inexpensive S3/local disk to reduce RAM requirements and infrastructure costs. Serverless pricing options available, allowing pay-for-use models that scale efficiently with actual workloads. Optimized for low TCO at scale.
              </p>
            </div>
          ),
          backgroundColor: '#383e3f',
          notes: ''
        },
        {
          id: 67,
          title: 'LanceDB - Best Use Case',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#8a9395', padding: '20px' }}>
              <p style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                Ideal for <strong>cost-efficient large-scale RAG over data lakes</strong>, where vectors are stored alongside source data. Well-suited for multimodal datasets combining text, images, and other data types. Effective for edge/embedded scenarios with storage constraints.
              </p>
            </div>
          ),
          backgroundColor: '#383e3f',
          notes: ''
        },
        {
          id: 68,
          title: 'LanceDB - Notes',
          icon: { name: 'duo-note-sticky' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', color: '#8a9395', padding: '20px' }}>
              <ul style={{ lineHeight: '1.8', fontSize: '2rem' }}>
                <li>Built on the columnar Lance format for efficient storage and retrieval</li>
                <li>Provides excellent I/O locality for disk-based operations</li>
                <li>Integrates seamlessly with Python/Apache Arrow ecosystem</li>
                <li>Perfect for data science and analytics workflows</li>
              </ul>
            </div>
          ),
          backgroundColor: '#383e3f',
          notes: ''
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
            <div style={{ margin: '0 auto', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <h3 style={{ paddingBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-table" sizeName="2x" darkModeInvert={true} />
                At-a-glance comparison of all 11 vector databases
              </h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)' }}>
                    <th style={{ padding: '8px', border: '1px solid #555', fontSize: '2rem' }}>Database</th>
                    <th style={{ padding: '8px', border: '1px solid #555', fontSize: '2rem' }}>Index Type</th>
                    <th style={{ padding: '8px', border: '1px solid #555', fontSize: '2rem' }}>Scaling Model</th>
                    <th style={{ padding: '8px', border: '1px solid #555', fontSize: '2rem' }}>Performance</th>
                    <th style={{ padding: '8px', border: '1px solid #555', fontSize: '2rem' }}>Cost</th>
                    <th style={{ padding: '8px', border: '1px solid #555', fontSize: '2rem' }}>Best Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}><strong>Pinecone</strong></td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Proprietary ANN (p1, p2, s1)</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Vertical pods + replicas/collections</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Sub-50ms, consistent at scale</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Managed/serverless ($70/mo+)</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Production-grade, easy ops</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}><strong>Weaviate</strong></td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>HNSW, Flat + inverted</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Horizontal sharding/replication</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Fast hybrid queries</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>OSS + managed ($25/mo+)</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Complex vector+filters</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}><strong>Qdrant</strong></td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>HNSW + quantization</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Cluster with replication/sharding</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>High RPS, low latency</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>OSS + cloud options</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>High-throughput + filters</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}><strong>Milvus</strong></td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>IVF/HNSW/DiskANN/GPU</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Distributed cluster architecture</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Billion-scale, tunable</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>OSS + managed (Zilliz)</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Large-scale, flexible index</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}><strong>Chroma</strong></td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>HNSW (single-node focus)</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Single-node/Cloud options</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Good for small-mid datasets</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>OSS (free) + cloud</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Rapid RAG prototyping</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}><strong>Redis Vector</strong></td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>HNSW/Flat (RediSearch)</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Redis Cluster architecture</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Real-time, in-memory speed</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Redis infrastructure cost</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Low-latency applications</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}><strong>Elasticsearch</strong></td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>HNSW, DiskBBQ (Lucene)</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Horizontal sharding/replication</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Hybrid text+vector search</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Elastic Cloud cost model</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Enterprise search + vector</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}><strong>Vespa</strong></td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>HNSW + tensor operations</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Distributed auto-scaling</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Real-time indexing at scale</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>OSS + cloud options</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Real-time ranking/inference</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}><strong>pgvector</strong></td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>HNSW, IVFFlat extension</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>PostgreSQL replication</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Good for moderate scale</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>PG infrastructure only</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>ACID + vector operations</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}><strong>MongoDB</strong></td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>HNSW-based (Atlas)</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Atlas managed auto-scaling</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Operational + vector data</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Atlas cluster-based</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Unified JSON + vectors</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}><strong>LanceDB</strong></td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>IVF-PQ, disk-optimized</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Embedded/Serverless model</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Efficient disk-based search</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Storage-focused pricing</td>
                    <td style={{ padding: '6px', border: '1px solid #555', fontSize: '1.2rem' }}>Cost-efficient RAG/lakes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
          backgroundColor: '#1e4d7d',
          notes: ''
        },
        {
          id: 70,
          title: 'How to Choose the Right Vector Database',
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div style={{ padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', border: '2px solid #3498db' }}>
                  <h4 style={{ color: '#3498db', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-rocket" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
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
                    <SvgIcon iconName="duo-chart-line" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
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
                    <SvgIcon iconName="duo-code" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    Prototyping & Development
                  </h4>
                  <ul style={{ lineHeight: '1.8', color: '#2ecc71' }}>
                    <li><strong>Chroma:</strong> Simple, local-first, LangChain/LlamaIndex integration</li>
                    <li><strong>LanceDB:</strong> Embedded, cost-efficient for data lakes</li>
                  </ul>
                </div>
                <div style={{ padding: '15px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '10px', border: '2px solid #9b59b6' }}>
                  <h4 style={{ color: '#9b59b6', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-gauge-high" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    Real-Time & Low-Latency
                  </h4>
                  <ul style={{ lineHeight: '1.8', color: '#9b59b6' }}>
                    <li><strong>Redis Vector:</strong> Sub-millisecond, in-memory speed</li>
                    <li><strong>Qdrant:</strong> High throughput with minimal latency</li>
                  </ul>
                </div>
                <div style={{ padding: '15px', backgroundColor: 'rgba(255, 235, 25, 0.1)', borderRadius: '10px', border: '2px solid #afc336' }}>
                  <h4 style={{ color: '#afc336', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <SvgIcon iconName="duo-database" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
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
                    <SvgIcon iconName="duo-dollar-sign" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
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
          backgroundColor: '#1e4d7d',
          notes: ''
        }
      ]
    }
  ]
};

