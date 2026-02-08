import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

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
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <h2>9 Indexing Schemes for Efficient Vector Retrieval</h2>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.5}>
                <p style={{ fontSize: '0.9em', marginTop: '40px' }}>Technical Reference Guide • 2025</p>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.8}>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a0f0a',
          notes: `### 1. Vector Indexing Schemes Cheat Sheet
Welcome everyone! Today we're going to explore one of the most crucial topics in modern AI and machine learning: vector indexing schemes.

#### What This Presentation Covers
When you're building applications with AI, especially ones that need to search through millions of pieces of information quickly, you need special ways to organize that data. Think of it like organizing a massive library. You could check every single book one by one, but that would take forever. Instead, we use clever indexing systems. Today, we'll explore nine different approaches, each with its own strengths and trade-offs. Whether you're building a recommendation system, a chatbot, or a search engine, understanding these indexing schemes will help you choose the right tool for your specific needs.

#### What We'll Learn
We'll start with the simplest approach called "Flat" or brute force indexing, where we check everything. Then we'll progress through increasingly sophisticated methods like HNSW, which builds a clever network structure, IVF which groups similar items together, and several others. By the end, you'll understand when to use each approach and why.

#### Pronunciation Guides
- **Vector** (VEK-tor): A list of numbers representing data
- **Indexing** (IN-dex-ing): Organizing data for fast searching
- **Scheme** (SKEEM): A systematic plan or approach

Let's dive into our first overview slide to see how these nine schemes compare!`
        },
        {
          id: 2,
          title: 'Overview & Quick Comparison',
          icon: { name: 'duo-table' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.2}>
                <h3 style={{ fontSize: '2rem' }}>Comparing 9 Vector Indexing Schemes across Key Dimensions</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.5}>
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
                        <td style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-expand" sizeName="1x" style={{ marginRight: '5px' }} darkModeInvert={true} />Annoy</td>
                        <td>Good</td>
                        <td>Moderate</td>
                        <td>Approx</td>
                        <td>Poor (read-only)</td>
                        <td>Small→Mid</td>
                      </tr>
                      <tr style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', fontSize: '1.2rem' }}>
                        <td style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-pen-to-square" sizeName="1x" style={{ marginRight: '5px' }} darkModeInvert={true} />ScaNN</td>
                        <td>Very fast</td>
                        <td>Low→Mod</td>
                        <td>High</td>
                        <td>Limited</td>
                        <td>Large</td>
                      </tr>
                      <tr style={{ backgroundColor: 'rgba(231, 76, 60, 0.1)', fontSize: '1.2rem' }}>
                        <td style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-hashtag" sizeName="1x" style={{ marginRight: '5px' }} darkModeInvert={true} />LSH</td>
                        <td>Fast (for supported metrics)</td>
                        <td>High (many tables)</td>
                        <td>Approx</td>
                        <td>Good</td>
                        <td>Large</td>
                      </tr>
                      <tr style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', fontSize: '1.2rem' }}>
                        <td style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ marginRight: '5px' }} darkModeInvert={true} />Graph-based ANN</td>
                        <td>Very fast</td>
                        <td>Low→High (variant)</td>
                        <td>High</td>
                        <td>Hard</td>
                        <td>100M→B (DiskANN)</td>
                      </tr>
                      <tr style={{ backgroundColor: 'rgba(241, 196, 15, 0.1)', fontSize: '1.2rem' }}>
                        <td style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-floppy-disk" sizeName="1x" style={{ marginRight: '5px' }} darkModeInvert={true} />Multi-Index Hashing</td>
                        <td>Fast for Hamming</td>
                        <td>Mod→High</td>
                        <td>Exact (Hamming)</td>
                        <td>Good</td>
                        <td>Large (binary)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a0f0a',
          notes: `### 2. Overview & Quick Comparison
Now let's look at the big picture. This comparison table is your roadmap for the entire presentation.

#### Understanding the Dimensions
We're comparing nine indexing schemes across six critical dimensions. Think of these as the "report card" for each indexing method. Speed tells us how fast we can find similar vectors. Memory use shows how much RAM or storage we need. Recall measures accuracy—how many relevant results we actually find. Updates indicate how easy it is to add new data. And scale tells us how many vectors each method can handle effectively. No single method wins in every category, which is why we need to understand all nine.

#### Reading the Table
Let's quickly scan through what we see. Flat indexing is slow but perfectly accurate with one hundred percent recall. HNSW is fast and accurate but memory hungry. IVF and IVF plus PQ trade some accuracy for speed and efficiency. Annoy is simple but doesn't handle updates well. ScaNN and Graph-based methods are cutting-edge performers. LSH uses hashing tricks for speed. And Multi-Index Hashing specializes in binary data. Each colored row represents a different approach we'll explore in depth.

#### Pronunciation Guides
- **HNSW** (H-N-S-W): Hierarchical Navigable Small World graphs
- **IVF** (I-V-F): Inverted File index
- **PQ** (P-Q): Product Quantization
- **Annoy** (uh-NOY): Approximate Nearest Neighbors Oh Yeah
- **ScaNN** (SCAN): Scalable Nearest Neighbors
- **LSH** (L-S-H): Locality Sensitive Hashing
- **ANN** (A-N-N): Approximate Nearest Neighbors

#### What to Look For
As we go through each method, keep this table in mind. Ask yourself: what trade-offs is each method making? Where does it excel, and where does it compromise? Understanding these trade-offs is key to choosing the right index for your specific application.

Let's start with the simplest method: Flat indexing, also known as brute force search!`
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
              <GSAPAnimated animation="slideInLeft" delay={0.2}>
                <div style={{ fontSize: '2rem' }}>
                  <h3 style={{ color: '#ff6b35', marginBottom: '15px' }}>The simplest vector index with exact search guarantees</h3>

                  <div style={{ marginBottom: '15px' }}>
                    <strong style={{ color: '#00d4ff' }}>Index Structure:</strong>
                    <MermaidPopover 
                      diagram={`graph LR
    A[Query Vector] --> B[Compare to Vector 1]
    A --> C[Compare to Vector 2]
    A --> D[Compare to Vector 3]
    A --> E[Compare to Vector N]
    B --> F[Calculate Distance]
    C --> F
    D --> F
    E --> F
    F --> G[Return Top K]
    style A fill:#4fc3f7
    style F fill:#81c784
    style G fill:#ffd700`}
                      title="Flat Index Search Process"
                    />
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#35102d',
          notes: `### 3. Flat (Brute Force)
Let's start with the simplest indexing scheme: Flat, also known as brute force search.

#### What is Flat Indexing?
Imagine you have a box of photos and someone asks you to find all pictures of cats. The brute force approach means looking at every single photo, one by one, checking if it contains a cat. That's exactly what flat indexing does with vectors. There's no clever organization, no shortcuts—just a straightforward comparison of your query against every single vector in the database. While this sounds inefficient, and it is for large datasets, it has one huge advantage: it's guaranteed to find the absolute best matches every single time.

#### How It Works
When you store vectors using flat indexing, they're simply laid out in memory one after another, like books on a shelf in the order they arrived. When a search query comes in, the system calculates the distance between your query vector and every stored vector. If you have one million vectors, it performs one million distance calculations. The good news is that modern computers can do this very fast using special SIMD instructions—that's "sim-dee," which stands for Single Instruction Multiple Data—or even GPU acceleration, which lets you compare thousands of vectors simultaneously.

#### Performance Characteristics
The time complexity is O of N times d, which we read as "order of N times d." N is the number of vectors, and d is how many dimensions each vector has. This means if you double your dataset size, search time doubles too. For memory, you need about four times N times d bytes for standard 32-bit floating point vectors. So a million 512-dimensional vectors would need about two gigabytes of RAM.

#### Pronunciation Guides
- **SIMD** (SIM-dee): Single Instruction Multiple Data
- **O(N·d)** (Order of N times D): Time complexity notation
- **Brute Force** (BROOT FORCE): Checking every possibility

#### When to Use Flat Indexing
Use flat indexing when you absolutely need perfect accuracy, when your dataset is small to medium-sized—say under ten million vectors—or when you're frequently adding or updating vectors because there's no complex index structure to rebuild. It's also perfect as a baseline for testing other approximate methods.

Now let's look at the best use cases in more detail!`
        },
        {
          id: 4,
          title: 'Best Use Case',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="bounceIn" delay={0.3}>
                <div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                    <GSAPStaggerList stagger={0.15}>
                      <li>Exact search</li>
                      <li>Small-to-mid datasets</li>
                      <li>High update rates</li>
                      <li>Streaming</li>
                      <li>Ideal for applications requiring perfect accuracy, supporting heavy write workloads, or serving as a baseline for evaluating approximate algorithms</li>
                      <li>Works well for datasets under ~1-10M vectors depending on hardware</li>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#35102d',
          notes: `### 4. Flat Indexing - Best Use Case
When should you reach for flat indexing? Let's explore the scenarios where this simple approach shines.

#### Exact Search Requirements
If your application absolutely cannot tolerate any missed results—think medical diagnosis systems, fraud detection, or compliance tools—flat indexing is your friend. It guarantees one hundred percent recall, meaning you'll never miss a relevant match. Many applications start with flat indexing and only move to approximate methods when the performance becomes genuinely problematic.

#### Small to Medium Datasets
For datasets under one to ten million vectors, depending on your hardware, flat indexing performs surprisingly well. Modern CPUs and GPUs are incredibly fast at these distance calculations. If you're building a prototype, a small SaaS application, or working with a curated dataset, flat indexing might be all you need. Don't over-engineer your solution before you have a proven performance problem.

#### High Update Rates and Streaming
Here's where flat indexing really excels: dynamic data. Adding a new vector is trivial—just append it to your array. No complex graph updates, no rebalancing trees, no rebuilding clusters. If you're working with streaming data where new vectors arrive constantly, or if users are frequently adding and deleting items, flat indexing handles this effortlessly. More sophisticated indexes often struggle with heavy write workloads.

#### Pronunciation Guides
- **Recall** (REE-call): The percentage of relevant results found
- **SaaS** (SASS): Software as a Service
- **Throughput** (THROO-put): Amount of data processed per second

#### As a Baseline
Even if you end up using a more complex index in production, flat indexing serves as the perfect baseline for evaluation. You can compare how much speed improvement you're getting and how much recall you're sacrificing with approximate methods. Many vector database vendors actually recommend starting with flat and only switching when you have concrete evidence you need something more complex.

#### Real-World Scale
Works beautifully up to about ten million 512-dimensional vectors on modern hardware. Beyond that, you'll want to consider the approximate methods we'll discuss next.

Let's see what other advantages flat indexing offers!`
        },
        {
          id: 5,
          title: 'Key Notes',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.25}>
                <div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
                    <GSAPStaggerList stagger={0.12}>
                      <li>Easiest to implement and maintain</li>
                      <li>Supports any distance metric (L2, cosine, IP, custom functions)</li>
                      <li>Trivially sharded/partitioned across multiple machines</li>
                      <li>Often available as GPU implementation (FAISS, Qdrant, Weaviate)</li>
                      <li>Used as refine step after approximate search in hybrid retrieval</li>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#35102d',
          notes: `### 5. Flat Indexing - Key Notes
Let's wrap up flat indexing with some important practical considerations and advantages.

#### Implementation Simplicity
Flat indexing is beautifully simple to implement. You don't need to understand complex graph algorithms, clustering techniques, or hashing functions. It's basically: store vectors in an array, loop through them, calculate distances, keep the closest ones. This simplicity extends to maintenance too. There's no index corruption to worry about, no complex tuning parameters, no rebuilding processes. When debugging, you can actually inspect what's happening step by step.

#### Metric Flexibility
Here's a huge advantage: flat indexing works with any distance metric you can dream up. L2 distance, cosine similarity, inner product, custom business-specific distance functions—it doesn't matter. Many approximate methods only work with specific metrics. Need to try a new similarity function? With flat indexing, just swap in your new distance calculation. This flexibility is invaluable during research and prototyping phases.

#### Horizontal Scaling
Flat indexing scales horizontally beautifully. Want to search across ten machines? Just partition your vectors across them, send the query to all machines, and merge the results. There's no complex distributed coordination needed. Each machine independently searches its partition. This "embarrassingly parallel" nature means you can add more machines to handle more data or increase throughput, without sophisticated distributed systems engineering.

#### Pronunciation Guides
- **L2 Distance** (L-Two Distance): Euclidean distance metric
- **Cosine** (CO-sine): Angle-based similarity measure  
- **Sharded** (SHAR-ded): Partitioned across multiple servers
- **FAISS** (FAYSS): Facebook AI Similarity Search library

#### GPU Implementations
Modern vector databases like FAISS, Qdrant, and Weaviate offer GPU-accelerated flat indexing. Graphics cards excel at parallel mathematical operations, and distance calculations are perfect for GPUs. A single modern GPU can search millions of vectors in milliseconds. For many real-world applications, GPU-accelerated flat indexing provides excellent performance without the complexity of approximate methods.

#### Hybrid Retrieval
Even in systems using approximate indexes, flat indexing plays a crucial role. A common pattern is using an approximate index for initial retrieval, then re-ranking the top candidates with exact flat search. This gives you the speed of approximation with accuracy verification on your final results. It's the best of both worlds.

Ready to move to our first approximate method? Let's explore HNSW!`
        },
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
              <GSAPAnimated animation="flipCard" delay={0.3}>
                <div style={{ fontSize: '2rem' }}>
                  <h3 style={{ color: '#00d4ff' }}>Hierarchical Navigable Small World - High-recall approximate nearest neighbor search</h3>

                  <div style={{ marginBottom: '15px', marginTop: '15px' }}>
                    <MermaidPopover 
                      diagram={`graph TD
    A[Entry Point] --> B[Layer 2: Coarse]
    B --> C[Layer 1: Medium]
    C --> D[Layer 0: Fine - All Vectors]
    D --> E[Navigate through neighbors]
    E --> F[Find Nearest]
    style A fill:#4fc3f7
    style D fill:#81c784
    style F fill:#ffd700`}
                      title="HNSW Multi-Layer Navigation"
                    />
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#552b18',
          notes: `### 6. HNSW (Hierarchical Navigable Small World)
Now we're entering the world of approximate nearest neighbor search, starting with one of the most powerful methods: HNSW.

#### What is HNSW?
Think of HNSW like a hierarchical road system. Imagine you're in New York trying to get to Los Angeles. You don't drive through every street in America. Instead, you start on highways that cover large distances quickly, then switch to smaller roads as you get closer, and finally use local streets to reach your exact destination. HNSW works the same way with vectors. It builds multiple layers of connections, where upper layers have long-range "highways" connecting distant points, and lower layers have dense local connections.

#### The Graph Structure
HNSW builds a multi-layer graph where each vector is a node. The top layer is sparse with few nodes connected by long edges—this is your highway system. As you descend through layers, you get more nodes and denser connections. The bottom layer contains all your vectors with detailed local neighborhoods. During search, you start at the top, quickly jump to the right region, then progressively refine through lower layers until you find the nearest neighbors.

#### Key Parameters
The magic of HNSW comes from three main parameters. "M" controls how many connections each node has—higher M means better recall but more memory. "efConstruction" determines search thoroughness during index building—higher values create better quality graphs but take longer to build. "efSearch" controls search thoroughness during queries—you can adjust this at query time to trade speed for accuracy.

#### Pronunciation Guides
- **HNSW** (H-N-S-W): Spell it out, don't try to pronounce as a word
- **Hierarchical** (high-er-AR-ki-cal): Having multiple levels or layers
- **Navigable** (NAV-ih-guh-bul): Can be traversed or explored
- **efConstruction** (E-F Construction): Search width during building
- **efSearch** (E-F Search): Search width during querying

#### Performance Profile
HNSW offers sub-linear search time, meaning doubling your dataset size doesn't double your search time. For a hundred million vectors, you're typically seeing millisecond-level queries with ninety-five percent-plus recall. That's dramatically faster than flat indexing while maintaining excellent accuracy. The trade-off? High memory usage—expect two to three times the memory of storing raw vectors, and updates are expensive because you need to maintain the graph structure.

Let's look at when HNSW is the right choice for your application!`
        },
        {
          id: 7,
          title: 'Best Use Case',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInRight" delay={0.2}>
                <div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                    <GSAPStaggerList stagger={0.18}>
                      <li>Ideal for applications requiring low-latency</li>
                      <li>high-recall approximate nearest neighbor search with datasets up to ~100M vectors</li>
                      <li>Best suited for read-heavy or semi-static datasets where query performance is critical</li>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#552b18',
          notes: `### 7. HNSW - Best Use Case
When should you choose HNSW over other indexing methods? Let's examine the sweet spot for this powerful algorithm.

#### Read-Heavy Workloads
HNSW shines brightest in read-heavy scenarios. If your application serves thousands or millions of queries but only occasionally adds new vectors, HNSW is excellent. Think product recommendation engines, image similarity search, or semantic search systems where the corpus is relatively stable. The expensive index construction and update costs are amortized over millions of fast queries.

#### Low-Latency Requirements
Need consistently fast response times? HNSW delivers. Unlike some approximate methods that have variable performance depending on data distribution, HNSW provides predictable, low-latency queries. Whether you're searching for vectors in a dense cluster or sparse regions, performance stays relatively consistent. This makes it perfect for user-facing applications where response time directly impacts user experience.

#### High Recall Demands
HNSW is the go-to choice when you need approximate search but can't sacrifice much accuracy. By tuning the efSearch parameter, you can achieve ninety-eight percent or even ninety-nine percent recall—nearly as good as exact search but orders of magnitude faster. This makes it ideal for applications where missing relevant results has real consequences, like medical information retrieval or legal document search.

#### Pronunciation Guides
- **Read-Heavy** (RED HEH-vee): More queries than updates
- **Latency** (LAY-ten-see): Response time delay
- **Corpus** (CORE-pus): Collection of documents or data
- **Amortized** (AM-or-tized): Cost spread over many operations

#### Scale Considerations
HNSW works beautifully up to about one hundred million vectors on modern servers with adequate RAM. Beyond that scale, you'll need either distributed implementations or should consider other methods. Within its scale range though, HNSW often outperforms alternatives in the recall-speed trade-off.

#### Semi-Static Data
Your dataset doesn't have to be completely frozen, but HNSW prefers semi-static scenarios. Occasional batch updates are fine—you can build a new index overnight or during low-traffic periods. Continuous high-volume streaming inserts? That's not HNSW's strength. In those cases, consider IVF or flat indexing with periodic reindexing to HNSW.

What are the key implementation details you should know? Let's explore that next!`
        },
        {
          id: 8,
          title: 'Important Notes',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="rotateIn" delay={0.25}>
                <div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
                    <GSAPStaggerList stagger={0.14}>
                      <li>Costly builds: Index construction is computationally expensive</li>
                      <li>Updates/deletes: Expensive operations that may require partial rebuilds</li>
                      <li>Distance metrics: Supports L2, cosine similarity, and inner product</li>
                      <li>Parameter tuning: Tune M and ef* for recall/performance trade-offs</li>
                      <li>Wide availability: Implemented in FAISS, nmslib, Milvus, Qdrant, and other vector databases</li>
                      <li>Performance tip: Higher M improves recall but increases memory usage</li>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#552b18',
          notes: `### 8. HNSW - Important Notes
Let's cover the practical considerations and gotchas you need to know when implementing HNSW.

#### Index Construction Cost
Building an HNSW index is computationally expensive. For a ten million vector dataset, expect index construction to take hours, not minutes. This isn't a deal-breaker—you typically build the index once and use it for millions of queries. But plan accordingly. Don't try to rebuild HNSW indexes on every data update. Instead, use batch update strategies or hybrid approaches where new data goes to a separate index temporarily.

#### Update and Delete Challenges
Updating or deleting vectors in HNSW is tricky. You can't just remove a node from the graph without potentially breaking connectivity. Most implementations either don't support deletes at all, require marking vectors as deleted which wastes space, or need expensive graph repairs. For applications with frequent updates, consider accumulating changes and doing periodic full rebuilds, or use a multi-index strategy with a separate structure for recent updates.

#### Distance Metric Support
HNSW works with L2 distance, cosine similarity, and inner product—the most common metrics in vector search. However, it won't work with arbitrary custom distance functions like flat indexing does. The graph structure depends on the triangle inequality holding, which these standard metrics provide. If you need exotic distance functions, HNSW probably isn't the right choice.

#### Pronunciation Guides
- **nmslib** (N-M-S-lib): Non-Metric Space Library
- **Milvus** (MIL-vus): Open-source vector database  
- **Qdrant** (KWOD-rant): Vector similarity search engine
- **Triangle Inequality** (TRY-angle in-ee-KWAL-ih-tee): Mathematical property of distance metrics

#### Parameter Tuning Guide
Start with M equals sixteen and efConstruction equals one hundred for balanced performance. Need better recall? Increase M to thirty-two or sixty-four—but watch your memory usage double or quadruple. For queries, start with efSearch equal to your desired K results, then increase it if recall is too low. The beauty is you can adjust efSearch at runtime without rebuilding.

#### Wide Ecosystem Support
HNSW has become the de facto standard for high-quality approximate nearest neighbor search. You'll find mature implementations in FAISS from Facebook, nmslib, Milvus, Qdrant, and many commercial vector databases. This means you get well-tested code, good documentation, and community support. You're not betting on experimental technology.

Ready to explore clustering-based approaches? Let's move to IVF!`
        },
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
              <GSAPAnimated animation="slideInBottom" delay={0.3}>
                <div style={{ fontSize: '2rem' }}>
                  <h3 style={{ color: '#4ecdc4', marginBottom: '15px' }}>A coarse quantization-based approach for efficient vector indexing and retrieval</h3>

                  <div style={{ marginBottom: '15px', marginTop: '15px' }}>
                    <MermaidPopover 
                      diagram={`graph TD
    A[K-means Clustering] --> B[Create nlist Centroids]
    B --> C[Assign Vectors to Clusters]
    C --> D[Build Inverted Lists]
    E[Query] --> F[Find nprobe Nearest Centroids]
    F --> G[Search Within Those Lists]
    G --> H[Return Top K]
    style A fill:#4fc3f7
    style D fill:#81c784
    style H fill:#ffd700`}
                      title="IVF Clustering and Search"
                    />
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#0a1a1a',
          notes: `### 9. IVF (Inverted File Index)
Now we're moving to clustering-based approaches with IVF, which uses a fundamentally different strategy than graph-based HNSW.

#### What is IVF?
Think of IVF like organizing a massive warehouse. Instead of checking every single item when searching, you first divide the warehouse into sections—say electronics, clothing, furniture. When someone asks for a television, you only search the electronics section. IVF does exactly this with vectors. It uses k-means clustering to divide your vector space into regions, then assigns each vector to its nearest region. During search, instead of checking all vectors, you only check vectors in the few most relevant regions.

#### The Clustering Process
IVF starts with a training phase where it runs k-means clustering to find "nlist" centroids—these are the center points of your regions. Then each vector gets assigned to its nearest centroid and added to that centroid's inverted list. It's called "inverted" because like an inverted index in text search, we're mapping from cluster IDs to the vectors in them, rather than from vectors to their locations.

#### Search Process
When a query comes in, IVF first finds the "nprobe" nearest centroids to your query vector. If nprobe is one, you only search one cluster. If nprobe is ten, you search ten clusters. Then within those clusters, you do exhaustive search—typically flat search comparing to all vectors in those lists. The brilliance is that by choosing nprobe carefully, you can control the speed-versus-accuracy trade-off at query time.

#### Pronunciation Guides
- **IVF** (I-V-F): Inverted File index
- **K-means** (KAY-meens): A clustering algorithm
- **Centroids** (SEN-troyds): Center points of clusters
- **nlist** (N-list): Number of clusters
- **nprobe** (N-probe): Number of clusters to search

#### Performance Characteristics
IVF provides sub-linear search time. If you have one million vectors and split them into one thousand clusters of one thousand vectors each, and search with nprobe equals ten, you're comparing against only about ten thousand vectors instead of one million—a hundred times speedup. The trade-off is you might miss some nearest neighbors if they happen to be in clusters you didn't search.

Let's explore when IVF is the right choice for your needs!`
        },
        {
          id: 10,
          title: 'Best Use Case',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.35}>
                <div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                    <GSAPStaggerList stagger={0.2}>
                      <li>Large datasets needing high throughput and tunable recall</li>
                      <li>Environments where online insertions are required</li>
                      <li>Systems with moderate memory constraints but high recall requirements</li>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#0a1a1a',
          notes: `### 10. IVF - Best Use Case
When should you choose IVF? Let's look at scenarios where clustering-based search excels.

#### Large Datasets with High Throughput
IVF really shines when you're dealing with tens of millions to billions of vectors and need to serve many queries per second. Unlike HNSW which has high memory overhead, IVF's simpler structure means you can fit larger datasets in memory. The ability to tune nprobe at query time also means different queries can make different speed-accuracy trade-offs, which is powerful for applications serving diverse clients.

#### Dynamic Data Requirements
Here's a huge advantage of IVF over HNSW: online insertions are relatively cheap. Adding a new vector means computing its nearest centroid and appending it to that cluster's list. No complex graph maintenance, no neighbor connections to update. If your application continuously receives new data—think real-time social media content, streaming sensor data, or growing product catalogs—IVF handles this much better than graph-based methods.

#### Moderate Memory Constraints
IVF strikes a nice balance on memory usage. It's not as compact as quantization-only methods like PQ, but it's much lighter than HNSW. You're storing the full vectors plus some cluster centroids and metadata, but no expensive graph edges. For datasets where you can't quite afford HNSW's memory overhead but want better recall than heavily compressed methods, IVF is the sweet spot.

#### Pronunciation Guides
- **Throughput** (THROO-put): Number of queries processed per second
- **QPS** (Q-P-S): Queries Per Second
- **Metadata** (MEH-tuh-day-tuh): Data about data
- **Real-time** (REEL-time): Immediate processing without delay

#### Tunable Performance
The beauty of IVF is runtime tunability. You can have one index and serve fast queries with low nprobe for latency-sensitive applications, while also serving high-recall queries with high nprobe for accuracy-critical searches. This flexibility makes IVF ideal for multi-tenant systems or applications with varying performance requirements.

#### Good Update Performance
Beyond just inserts, IVF handles updates and deletes more gracefully than HNSW. Deleting a vector is just removing it from a list. Updating is delete-and-reinsert. These operations don't break index integrity the way they can with graph structures. For applications where data changes frequently, IVF provides a good balance of search performance and update flexibility.

What configuration details do you need to know? Let's explore that next!`
        },
        {
          id: 11,
          title: 'Configuration Notes',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
                    <GSAPStaggerList stagger={0.16}>
                      <li>Requires training phase to generate cluster centroids</li>
                      <li>Performance heavily depends on tuning nlist (number of clusters) and nprobe (clusters examined)</li>
                      <li>Sensitive to data distribution - unbalanced clusters may impact performance</li>
                      <li>Often combined with re-ranking strategies for higher recall</li>
                      <li>Widely implemented in libraries like FAISS, Hnswlib, and Milvus</li>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#0a1a1a',
          notes: `### 11. IVF - Configuration Notes
Let's talk about the practical details of configuring and optimizing IVF indexes.

#### Training Phase Requirements
IVF requires a training phase before you can use it. You need to run k-means clustering on a representative sample of your data—typically fifty thousand to a million vectors—to find the cluster centroids. This takes time and compute resources. The good news is you only do this once during index creation. The challenge is you need representative training data; if you train on data that doesn't match your actual corpus distribution, you'll get poor performance.

#### Tuning nlist and nprobe
These are your two critical parameters. nlist is the number of clusters you create during training. A good rule of thumb is the square root of your dataset size. For one million vectors, try one thousand clusters. For one hundred million, try ten thousand. Too few clusters and you don't get enough speedup. Too many and clusters become too small to be useful. nprobe controls how many clusters you search—start with one percent of nlist and tune from there.

#### Data Distribution Sensitivity
Here's a gotcha: IVF performance degrades if your data has very unbalanced clusters. Imagine if ninety percent of your vectors end up in ten percent of your clusters. You'd end up searching huge clusters, killing performance. This happens with real-world data that has natural clusters of varying sizes. Solutions include using more sophisticated clustering, over-clustering then load-balancing, or considering alternative indexes for highly skewed data.

#### Pronunciation Guides
- **Centroids** (SEN-troyds): Cluster center points
- **Corpus** (CORE-pus): The full collection of data
- **Skewed** (SKYOOD): Unevenly distributed
- **Re-ranking** (REE-rank-ing): Reordering results for better accuracy

#### Re-ranking for Higher Recall
A common pattern is using IVF with re-ranking. IVF's approximate search retrieves, say, one hundred candidates quickly, then you re-rank those one hundred using exact distance calculations or a more expensive similarity function. This hybrid approach gives you IVF's speed with near-perfect accuracy on your final top-k results. Many production systems use this pattern.

#### Ecosystem and Implementation
IVF is implemented in all major vector search libraries. FAISS from Facebook has excellent IVF implementations including IVF-Flat and IVF-PQ which we'll discuss next. It's battle-tested at massive scale at companies like Facebook, Pinterest, and others serving billions of queries daily. You're building on proven technology.

Ready to see how we can make IVF even more memory efficient? Let's explore IVF plus PQ!`
        },
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
              <GSAPAnimated animation="bounceIn" delay={0.4}>
                <div style={{ fontSize: '2rem' }}>
                  <h3 style={{ color: '#ffc300', marginBottom: '15px' }}>Inverted File Index combined with Product Quantization for efficient vector compression</h3>

                  <div style={{ marginBottom: '12px', marginTop: '15px' }}>
                    <MermaidPopover 
                      diagram={`graph TD
    A[IVF Clustering] --> B[Compute Residuals]
    B --> C[Split into M Subspaces]
    C --> D[Quantize Each Subspace]
    D --> E[Store PQ Codes]
    F[Query] --> G[Find Nearest Centroids]
    G --> H[Lookup Table Distance]
    H --> I[Return Top K]
    style A fill:#4fc3f7
    style E fill:#81c784
    style I fill:#ffd700`}
                      title="IVF+PQ Compression Pipeline"
                    />
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#133939',
          notes: `### 12. IVF + PQ (Product Quantization)
Now we're combining two powerful techniques: IVF clustering with Product Quantization compression. This is where vector search gets seriously scalable.

#### What is Product Quantization?
Imagine you have a 512-dimensional vector, which normally takes two thousand bytes to store. Product Quantization lets you compress this down to just eight or sixteen bytes while still enabling approximate similarity search. The trick is splitting the vector into subspaces—say eight 64-dimensional chunks—and separately quantizing each chunk using a small codebook. Instead of storing the full vector, you store just the codebook indices. It's lossy compression, like JPEG for images, but designed specifically for preserving similarity relationships.

#### Combining IVF with PQ
IVF plus PQ is a match made in heaven. IVF handles coarse-level search by finding relevant clusters. Then, instead of storing full vectors in those clusters, PQ compresses them dramatically. During search, you use clever lookup table tricks—build a distance table once for your query, then just look up precomputed distances for each candidate. This makes distance computation incredibly fast and cache-friendly, even for billion-scale datasets.

#### How the Compression Works
First, IVF clusters your vectors and computes residuals—the difference between each vector and its cluster centroid. Then PQ compresses these residuals. You split each residual into "m" subspaces, typically eight or sixteen. For each subspace, you run k-means to create a codebook of, say, 256 centroids. Now each subspace is represented by just one byte—an index into its codebook. A 512-dimensional vector becomes just sixteen bytes. That's a thirty-two times compression ratio!

#### Pronunciation Guides
- **Product Quantization** (PROD-uct kwon-tuh-ZAY-shun): Vector compression technique
- **Residuals** (reh-ZID-you-als): Differences from cluster centers
- **Codebook** (CODE-book): Dictionary of representative vectors
- **ADC** (A-D-C): Asymmetric Distance Computation
- **LUT** (L-U-T): Lookup Table

#### Performance Magic
The lookup table approach is where the magic happens. When a query arrives, you compute its distance to each subspace codebook once—that's only m times 256 computations. Then for every candidate vector, you just do m lookups and add them up. No actual vector math per candidate! This lets you scan millions of compressed vectors per second on a single CPU core. Add multiple cores and you can handle billions of vectors.

Let's see when this powerful combination is the right choice!`
        },
        {
          id: 13,
          title: 'Best Use Case',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.3}>
                <div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(78, 205, 196, 0.1)', borderRadius: '8px' }}>
                    <GSAPStaggerList stagger={0.17}>
                      <li>Ideal for memory-constrained large-scale approximate nearest neighbor search (100M-B+ vectors)</li>
                      <li>Well-suited for read-heavy workloads where some approximation in recall is acceptable</li>
                      <li>Particularly effective when paired with a refinement step for critical results</li>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#133939',
          notes: `### 13. IVF+PQ - Best Use Case
When should you deploy IVF plus PQ? This combination excels in specific scenarios where memory and scale are critical.

#### Billion-Scale Vector Search
IVF plus PQ is the go-to solution when you're dealing with hundreds of millions to billions of vectors and need to fit everything in RAM. Think about it: a billion 512-dimensional vectors at four bytes per dimension would need two terabytes of RAM with flat indexing. With IVF plus PQ, you can compress that down to sixty-four gigabytes or less—fitting on a single powerful server. This is why companies like Facebook, Pinterest, and Google use variants of this approach for their massive-scale recommendation systems.

#### Memory-Constrained Environments
Even at smaller scales, if you're running on cost-optimized cloud instances or have multiple indexes competing for RAM, IVF plus PQ's compression is invaluable. You might have ten million vectors but want to run on a small AWS instance. Or you're building a mobile or edge deployment where RAM is precious. IVF plus PQ lets you pack more vectors into less memory than any other approximate method while maintaining reasonable recall.

#### Read-Heavy Workloads with Acceptable Approximation
This combination shines for applications that do millions of queries but rarely update, and where ninety to ninety-five percent recall is good enough. Think product recommendations, where showing nine out of ten ideal products is fine. Or content discovery, where variety matters more than perfect relevance. The speed and memory savings are worth the small accuracy trade-off.

#### Pronunciation Guides
- **Billion-Scale** (BILL-yun SCALE): Handling billions of items
- **RAM** (RAM): Random Access Memory
- **Terabytes** (TAIR-uh-bytes): Unit of memory, 1024 gigabytes
- **Gigabytes** (GIG-uh-bytes): Unit of memory, 1024 megabytes

#### The Refinement Pattern
Here's a pro pattern: use IVF plus PQ to quickly retrieve one hundred to one thousand candidates from your billion-vector corpus, then refine those candidates with exact distances using the original vectors. This hybrid approach gives you the scalability of compression for the initial filter and the accuracy of exact search for final ranking. Many production systems store both compressed codes and original vectors, using codes for fast filtering and originals for final scoring.

#### Cost-Performance Sweet Spot
From a business perspective, IVF plus PQ offers the best cost-performance ratio at scale. The infrastructure savings from reduced memory requirements often outweigh the slight recall loss. When you can serve a billion vectors on one server instead of ten, the economics become compelling.

What configuration details do you need to know? Let's explore!`
        },
        {
          id: 14,
          title: 'Notes',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="rotateIn" delay={0.35}>
                <div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(0, 212, 255, 0.1)', borderRadius: '8px' }}>
                    <GSAPStaggerList stagger={0.19}>
                      <li>Requires training on representative data sample</li>
                      <li>Consider OPQ (Optimized Product Quantization) rotation for better accuracy</li>
                      <li>Critical parameters include m (number of subquantizers), code size, and nprobe (clusters to search)</li>
                      <li>Adding a refine stage significantly boosts recall at the cost of extra latency</li>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#133939',
          notes: `### 14. IVF+PQ - Configuration Notes
Let's dive into the practical details of configuring IVF plus PQ for optimal performance.

#### Training Requirements
IVF plus PQ requires careful training. You need a representative sample—typically a few hundred thousand to a million vectors—to train both the IVF centroids and the PQ codebooks. This training phase is computationally expensive, potentially taking hours for large-scale indexes. The quality of your training data directly impacts search quality. If your training sample doesn't represent your full dataset's distribution, you'll get poor results. Always validate that your training sample is truly representative.

#### The OPQ Optimization
Here's a pro tip: consider using OPQ, which stands for Optimized Product Quantization. Standard PQ just splits your vector into chunks and quantizes each independently. OPQ first applies a learned rotation to your vectors that makes them more "quantization-friendly"—it decorrelates dimensions and balances variance across subspaces. This typically improves recall by five to ten percentage points with no runtime cost. FAISS and other libraries support OPQ out of the box.

#### Critical Parameter Tuning
Your key parameters are "m" the number of subquantizers, typically eight, sixteen, or thirty-two; the codebook size per subquantizer, usually 256 which gives one byte codes; and nprobe for cluster search. Start with m equals eight for a good compression-quality balance. More subquantizers means less compression but better accuracy. The codebook size of 256 is standard—going higher rarely helps. For nprobe, start with ten to fifty depending on your dataset and tune based on recall metrics.

#### Pronunciation Guides
- **OPQ** (O-P-Q): Optimized Product Quantization
- **Subquantizers** (SUB-kwon-tize-ers): Independent quantization units
- **Codebook** (CODE-book): Dictionary of representative values
- **Decorrelates** (dee-CORE-uh-lates): Removes correlations between dimensions

#### The Refinement Stage
Adding a refinement stage is often worth it. After IVF plus PQ retrieves your top candidates, re-rank them using the original full-precision vectors. This typically costs an extra millisecond but can boost recall from eighty-five percent to ninety-eight percent. The pattern is: use compressed codes to filter millions of vectors down to hundreds, then use exact math on those hundreds. Many production systems separate their data storage: compressed codes on fast storage for filtering, original vectors on slower storage loaded only for refinement.

#### Memory-Accuracy Trade-offs
Remember the fundamental trade-off: more compression means less memory but lower recall. With eight-byte codes, expect seventy-five to eighty-five percent recall. With sixteen-byte codes, ninety to ninety-five percent. With refine, you can hit ninety-eight percent-plus. Tune based on your application's needs—a recommendation engine might be fine with eighty percent recall, while a medical application needs ninety-eight percent.

Now let's explore Annoy, a different tree-based approach!`
        },
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
              <GSAPAnimated animation="flipCard" delay={0.2}>
                <div style={{ fontSize: '2rem' }}>
                  <h3 style={{ color: '#9b59b6', marginBottom: '15px' }}>Approximate Nearest Neighbors Oh Yeah - Simple and Efficient Vector Search</h3>

                  <div style={{ marginBottom: '15px', marginTop: '15px' }}>
                    <MermaidPopover 
                      diagram={`graph TD
    A[Build Forest of Trees] --> B[Random Hyperplane Splits]
    B --> C[Tree 1]
    B --> D[Tree 2]
    B --> E[Tree N]
    F[Query] --> G[Traverse Each Tree]
    G --> H[Collect Candidates]
    H --> I[Sort and Return Top K]
    style A fill:#4fc3f7
    style H fill:#81c784
    style I fill:#ffd700`}
                      title="Annoy Random Projection Trees"
                    />
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#150a1a',
          notes: `### 15. Annoy (Approximate Nearest Neighbors Oh Yeah)
Let's explore Annoy, a delightfully simple yet effective approach to approximate nearest neighbor search created by Spotify.

#### What is Annoy?
Annoy, which playfully stands for "Approximate Nearest Neighbors Oh Yeah," takes a completely different approach from what we've seen so far. Instead of clustering or graphs, Annoy builds a forest of binary trees using random projections. Imagine repeatedly splitting your vector space in half with random hyperplanes—like slicing a pie with random cuts. Each tree represents a different set of random splits. Vectors that end up in the same leaf node are candidates for being neighbors.

#### The Tree Structure
Each tree is built by repeatedly picking random hyperplanes and splitting vectors into two groups—those on one side of the plane and those on the other. This continues recursively until each leaf has just a few vectors. The beauty is this takes only log N time to traverse. With multiple trees using different random splits, you get multiple different "views" of the similarity structure. A vector might be far apart in one tree but close in another. By querying multiple trees, you get better coverage.

#### Search Process
When a query comes in, you traverse each tree from root to leaf, following the splits based on which side of each hyperplane your query falls. This gives you a set of candidate vectors from each tree. You merge these candidates, compute actual distances, and return the top K. The more trees you build, the better your recall—but also the more memory and search time you use.

#### Pronunciation Guides
- **Annoy** (uh-NOY): Approximate Nearest Neighbors Oh Yeah
- **Hyperplane** (HY-per-plane): A flat subspace in high dimensions
- **Binary Tree** (BY-nair-ee TREE): Tree structure with two branches per node
- **Memory-mapped** (MEM-or-ee MAPPED): File accessed as if in RAM

#### Key Advantages
Annoy's killer feature is its simplicity and disk-friendliness. The index is just a flat file that can be memory-mapped, meaning the operating system loads chunks as needed. This gives incredibly fast startup times—crucial for serverless or auto-scaling deployments. The index format is also static and deterministic, making it easy to share across services and cache at CDN edges.

#### Performance Profile
Annoy offers logarithmic query time per tree, so with say fifty trees, you're looking at fifty times log N operations. It's generally slower than HNSW for high recall requirements but faster to load and simpler to deploy. Memory usage is moderate and predictable—roughly fifty to one hundred bytes per vector per tree, so with fifty trees that's a few kilobytes per vector.

When should you use Annoy? Let's explore its sweet spots!`
        },
        {
          id: 16,
          title: 'Best Use Case',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInLeft" delay={0.25}>
                <div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px' }}>
                    <GSAPStaggerList stagger={0.15}>
                      <li>Simple deployment</li>
                      <li>Read-only applications</li>
                      <li>Quick startup/cold start</li>
                      <li>Small-to-mid datasets</li>
                      <li>Production services with fixed indexes</li>
                      <li>Particularly well-suited for recommendation systems, content-based search, and embedding lookup in applications with infrequent index updates</li>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#150a1a',
          notes: `### 16. Annoy - Best Use Case
When is Annoy the right choice? Let's look at scenarios where its unique characteristics shine.

#### Simple Deployment Needs
Annoy is perfect when you want something that "just works" without complex configuration. There's no training phase like IVF, no parameter tuning like HNSW's efConstruction. You build an index with a certain number of trees, save it to disk, and you're done. This simplicity is invaluable for rapid prototyping, small teams, or applications where developer time is more precious than optimal performance. If you need a vector search solution up and running in an afternoon, Annoy delivers.

#### Read-Only Applications
Here's Annoy's fundamental constraint: it's effectively read-only after building. You can't add, update, or delete vectors without rebuilding the entire index. But for many applications, this is fine! Think recommendation systems where you rebuild indexes nightly with updated embeddings. News article similarity where articles don't change after publication. Product search where your catalog updates in batches. If your use case involves building indexes offline and serving them read-only, Annoy's limitation becomes irrelevant.

#### Fast Startup Requirements
Annoy's memory-mapped file format means you can start serving queries almost instantly. The index doesn't need to be fully loaded into RAM—just memory-map the file and the OS loads pages on demand. This is crucial for serverless functions, auto-scaling services, or any scenario where you need sub-second startup times. Compare this to HNSW which needs to load its entire graph structure before serving. For AWS Lambda or similar platforms, Annoy is often the only practical choice.

#### Pronunciation Guides
- **Serverless** (SER-ver-less): Cloud functions without managing servers
- **Auto-scaling** (AW-toe SKAY-ling): Automatically adjusting capacity
- **Memory-mapped** (MEM-or-ee MAPPED): File treated as memory
- **CDN** (C-D-N): Content Delivery Network

#### Small to Medium Scale
Annoy works beautifully up to about ten to fifty million vectors, depending on your recall requirements and hardware. Beyond that scale, HNSW or IVF plus PQ become more attractive. But within its scale range, Annoy provides an excellent balance of simplicity, speed, and accuracy. Many successful production systems at Spotify, Reddit, and other companies serve millions of users with Annoy indexes.

#### Production Services with Fixed Indexes
If you're building microservices where each service has its own small vector index—think user profile similarity, tag recommendation, or content categorization—Annoy's file-based approach is perfect. You can version your indexes as files, deploy them alongside your code, cache them at edge locations, and never worry about database connections or distributed state management.

What practical details should you know? Let's cover that next!`
        },
        {
          id: 17,
          title: 'Notes',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.3}>
                <div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '8px' }}>
                    <GSAPStaggerList stagger={0.17}>
                      <li>No dynamic deletes and limited update capabilities (effectively read-only after build)</li>
                      <li>Index build process is deterministic with a fixed random seed</li>
                      <li>Key tuning parameters: n_trees (more trees = higher recall but more memory) and search_k (more candidates = higher recall but slower)</li>
                      <li>Implemented in multiple languages with Python bindings being most popular</li>
                      <li>Used extensively at Spotify for music recommendations</li>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#150a1a',
          notes: `### 17. Annoy - Configuration Notes
Let's dive into the practical aspects of using Annoy effectively.

#### Read-Only Constraint
This is crucial to understand: once you've built an Annoy index, it's frozen. No inserts, no updates, no deletes. To modify your dataset, you rebuild the entire index from scratch. For some applications, this is a deal-breaker. For others, it's perfectly fine. Many successful systems rebuild indexes hourly, daily, or weekly in batch jobs. During rebuild, you can serve from the old index and hot-swap to the new one. Just make sure your application architecture supports this batch-rebuild pattern.

#### Deterministic Builds
Annoy's build process is deterministic when you use a fixed random seed. This means if you build an index twice with the same data and same seed, you get bit-identical results. This property is valuable for testing, caching, and distributed systems. You can build an index on one machine, cache it on a CDN, and serve it from thousands of edge locations knowing every server has exactly the same index behavior.

#### Parameter Tuning
You have two main knobs: n_trees and search_k. Start with n_trees equal to fifty for a good balance. More trees improve recall but increase both memory usage and search time linearly. Doubling trees roughly doubles memory and search time while improving recall by perhaps five to ten percentage points. search_k controls how many candidates you examine during search—higher values improve recall but slow down queries. Start with search_k equal to n_trees times the number of results you want.

#### Pronunciation Guides
- **Deterministic** (dih-ter-min-ISS-tick): Same inputs give same outputs
- **Hot-swap** (HOT SWAP): Replace while system is running
- **Bit-identical** (BIT eye-DEN-tih-cal): Exactly the same at binary level
- **Spotify** (SPOT-ih-fy): Music streaming company

#### Language Support
Annoy has excellent Python bindings, which are the most commonly used. There are also bindings for C++, Java, Scala, Go, and others. The core is written in C++ for speed, with language bindings providing convenient APIs. If you're in the Python ecosystem, Annoy is particularly attractive—just pip install annoy and you're ready to go. The API is intuitive and well-documented.

#### The Spotify Use Case
Annoy was created at Spotify for music recommendations and is still used there at scale. They serve personalized recommendations to hundreds of millions of users using Annoy indexes. The pattern is: compute song embeddings offline, build Annoy indexes, deploy them to production services, rebuild periodically as the music catalog grows. This battle-tested production usage gives confidence that Annoy scales and performs in real-world conditions.

Ready for Google's cutting-edge approach? Let's explore ScaNN!`
        },
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
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ fontSize: '2rem' }}>
                  <h3 style={{ color: '#4285f4', marginBottom: '15px' }}>Scalable Nearest Neighbors - Google's Vector Search Architecture</h3>

                  <div style={{ marginBottom: '12px', marginTop: '15px' }}>
                    <MermaidPopover 
                      diagram={`graph TD
    A[Partitioning] --> B[K-means/Tree]
    B --> C[Quantization]
    C --> D[Asymmetric Hashing]
    D --> E[Re-ranking]
    E --> F[Top K Results]
    style A fill:#4fc3f7
    style D fill:#81c784
    style F fill:#ffd700`}
                      title="ScaNN Multi-Stage Pipeline"
                    />
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d534b',
          notes: `### 18. ScaNN (Scalable Nearest Neighbors)
Let's explore Google's state-of-the-art vector search system: ScaNN, which represents the cutting edge of approximate nearest neighbor search.

#### What is ScaNN?
ScaNN, developed by Google Research, is a sophisticated multi-stage vector search architecture that combines the best ideas from clustering, quantization, and reranking into a unified system. Think of it as the culmination of decades of research into approximate nearest neighbor search. ScaNN doesn't just use one technique—it orchestrates multiple techniques in a pipeline optimized for modern hardware, especially Google's TPUs but also standard CPUs.

#### Three-Stage Architecture
ScaNN uses a three-stage approach. First, partitioning: like IVF, it divides the vector space into regions using k-means or tree-based partitioning. Second, quantization: within each partition, vectors are compressed using advanced quantization techniques including anisotropic quantization which adapts to each partition's structure. Third, reranking: top candidates are rescored using more accurate distance computations. This multi-stage approach lets ScaNN be both fast and accurate.

#### Pronunciation Guides
- **ScaNN** (SCAN): Scalable Nearest Neighbors
- **TPU** (T-P-U): Tensor Processing Unit
- **Anisotropic** (an-eye-so-TROP-ick): Varying in different directions
- **SOTA** (SO-tah): State Of The Art

Ready to explore advanced techniques? Let's continue!`
        },
        {
          id: 19,
          title: 'Best Use Case',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.25}>
                <div>
                  <div style={{ padding: '12px', backgroundColor: '#34655d', borderRadius: '8px' }}>
                    <GSAPStaggerList stagger={0.14}>
                      <li>Large-scale semantic search with inner product/cosine distance metrics</li>
                      <li>TensorFlow/TF-Serving pipelines</li>
                      <li>Production deployments with high QPS requirements</li>
                      <li>Semantic Search</li>
                      <li>High QPS Systems</li>
                      <li>Ecosystem</li>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d534b',
          notes: `### 19. ScaNN - Best Use Case
When is ScaNN the right choice? It excels at massive scale with demanding performance, especially for inner product and cosine metrics. Perfect for TensorFlow ecosystems and high-QPS production systems. If you need state-of-the-art performance and have engineering resources for proper deployment, ScaNN delivers.`
        },
        {
          id: 20,
          title: 'Notes',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="rotateIn" delay={0.3}>
                <div>
                  <div style={{ padding: '12px', backgroundColor: '#34655d', borderRadius: '8px' }}>
                    <GSAPStaggerList stagger={0.16}>
                      <li>Requires training and careful configuration</li>
                      <li>Updates less friendly</li>
                      <li>Open-source by Google</li>
                      <li>Complex but performant</li>
                      <li>Excellent integration with TensorFlow serving and Google Cloud AI infrastructure</li>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1d534b',
          notes: `### 20. ScaNN - Configuration Notes
ScaNN requires careful setup and training. Updates are challenging—use batch strategies. It's open source by Google with excellent TensorFlow integration. The complexity delivers exceptional performance at massive scale, justifying the engineering investment for the right applications.`
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
              <GSAPAnimated animation="scaleIn" delay={0.3}>
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
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a0a0a',
          notes: `### 21. LSH (Locality Sensitive Hashing)
LSH uses probabilistic hashing where similar items hash to the same buckets. Multiple hash tables with different functions enable finding nearest neighbors probabilistically. Works great for specific metrics like Hamming and cosine. Handles updates well and scales in distributed systems.`
        },
        {
          id: 22,
          title: 'Best Use Case',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.2}>
                <div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px' }}>
                    <GSAPStaggerList stagger={0.15}>
                      <li>Sparse or high-dimensional data where traditional methods struggle</li>
                      <li>Streaming scenarios requiring fast updates</li>
                      <li>Applications where theoretical guarantees for specific distance metrics are needed</li>
                      <li>Particularly effective for specialized metrics with good LSH families</li>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a0a0a',
          notes: `### 22. LSH - Best Use Case
Perfect for binary embeddings and Hamming distance. Excels with streaming data and online updates. Naturally distributed across machines. Ideal for large-scale applications with moderate recall requirements. Provides theoretical probabilistic guarantees.`
        },
        {
          id: 23,
          title: 'Notes',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="bounceIn" delay={0.25}>
                <div>
                  <div style={{ padding: '12px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '8px' }}>
                    <GSAPStaggerList stagger={0.13}>
                      <li>Only works for metrics with valid LSH families (cosine, Hamming, L1/L2, Jaccard)</li>
                      <li>Critical parameters to tune are L (tables) and k (hashes per table)</li>
                      <li>Insertions and deletions are straightforward</li>
                      <li>Recall degrades without careful tuning</li>
                      <li>Better theoretical understanding compared to graph-based methods</li>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a0a0a',
          notes: `### 23. LSH - Configuration Notes
Tune number of hash tables and parameters carefully. Can be memory-intensive with multiple tables. Use distance-specific implementations. Great for updates but consider periodic rebuilds for optimization. Well-established in research and production.`
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
          notes: `### 24. Graph-Based ANN
Graph methods build connectivity where vectors are nodes. Beyond HNSW, methods like Vamana, DiskANN, and NSG offer different trade-offs. DiskANN breaks the RAM barrier by keeping vectors on SSD, enabling billion-scale search on commodity hardware.`
        },
        {
          id: 25,
          title: 'Best Use Case',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInLeft" delay={0.25}>
                <div>
                  <div style={{ padding: '12px', backgroundColor: '#233127', borderRadius: '8px' }}>
                    <GSAPStaggerList stagger={0.16}>
                      <li>Web-scale search under RAM constraints</li>
                      <li>Production environments with strict latency SLOs</li>
                      <li>Read-heavy workloads with billions of vectors</li>
                      <li>DiskANN specifically addresses the RAM bottleneck for very large indices</li>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#0a1a0f',
          notes: `### 25. Graph-Based ANN - Best Use Case
DiskANN perfect for billion-scale beyond RAM limits. Graph methods achieve high recall across complex data distributions. Best for write-once, read-many workloads where expensive construction is amortized over millions of queries.`
        },
        {
          id: 26,
          title: 'Implementation Notes',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="rotateIn" delay={0.3}>
                <div>
                  <div style={{ padding: '12px', backgroundColor: '#233127', borderRadius: '8px' }}>
                    <GSAPStaggerList stagger={0.14}>
                      <li>Complex build processes with careful pruning strategies</li>
                      <li>Difficult to update (mostly batch builds)</li>
                      <li>Tune graph degree and beam search width for optimal performance</li>
                      <li>Achieves strong recall with careful construction</li>
                      <li>DiskANN provides excellent disk-based performance but requires SSD storage</li>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#0a1a0f',
          notes: `### 26. Graph-Based ANN - Configuration Notes
Expect significant construction time and compute. Updates are challenging—use batching. DiskANN trades some latency for massive scale. HNSW is mature; other methods less widely available. Plan for iterative tuning.`
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
          notes: `### 27. Multi-Index Hashing
Designed for binary vectors and Hamming distance. Splits binary vector into sub-codes with multiple hash tables. Binary vectors are extremely compact—enabling massive memory savings. Hamming distance uses fast XOR and popcount operations.`
        },
        {
          id: 28,
          title: 'Best Use Case',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="slideInBottom" delay={0.2}>
                <div>
                  <div style={{ padding: '12px', backgroundColor: '#334166', borderRadius: '8px' }}>
                    <GSAPStaggerList stagger={0.15}>
                      <li>Binary embeddings or PQ code matching</li>
                      <li>Refine stage for IVF-PQ</li>
                      <li>When exact Hamming kNN is needed</li>
                      <li>Ideal for applications requiring precise matching in binary space such as image fingerprinting, duplicate detection, and compact binary feature matching</li>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1c2b55',
          notes: `### 28. Multi-Index Hashing - Best Use Case
Ideal for binary embeddings at massive scale. Perfect for Hamming distance applications like document similarity or genomic sequences. Works brilliantly in hybrid systems—binary for filtering, floats for refinement. Enables real-time, latency-sensitive applications.`
        },
        {
          id: 29,
          title: 'Key Characteristics',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.25}>
                <div>
                  <div style={{ padding: '12px', backgroundColor: '#334166', borderRadius: '8px' }}>
                    <GSAPStaggerList stagger={0.13}>
                      <li>Limited to Hamming/binary codes</li>
                      <li>parameter m critical</li>
                      <li>GPU-friendly; common in large-scale code search pipelines</li>
                      <li>Optimal m typically depends on code length and query radius</li>
                      <li>Well-suited for hardware acceleration with bitwise operations</li>
                      <li>Efficient for binary hashes from techniques like LSH</li>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1c2b55',
          notes: `### 29. Multi-Index Hashing - Configuration Notes
Binarization quality is crucial. Tune sub-indexes and Hamming radius. Use efficient implementations with SIMD. Monitor quality carefully—binary loses information. Hybrid architectures with refinement stages work best in production.`
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
          notes: `### 30. Summary - Choosing the Right Index
Every method trades speed, memory, accuracy, and updates differently. Scale drives choice: flat for small datasets, HNSW/IVF for medium, IVF+PQ/DiskANN for massive. Match index to workload: read-heavy favors graphs, streaming favors IVF/LSH. Start simple, measure, iterate.`
        },
        {
          id: 31,
          title: 'Tuning & Optimization Tips',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}>
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <div>
                  <div style={{ padding: '12px', backgroundColor: '#663', borderRadius: '8px' }}>
                    <GSAPStaggerList stagger={0.12}>
                      <li>Always measure recall@k vs latency tradeoff for your specific data</li>
                      <li>Batch queries together for better throughput</li>
                      <li>Normalize vectors for cosine similarity before indexing</li>
                      <li>Explore hybrid strategies (e.g., ScaNN+refine) for better results</li>
                      <li>Use re-ranking when using heavy compression (IVF+PQ, ScaNN)</li>
                      <li>Shard large indices by coarse partitions for parallelism</li>
                      <li>Consider dimensionality reduction (PCA) before indexing</li>
                      <li>For production, test with realistic data distributions and queries</li>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#55551c',
          notes: `### 31. Final Thoughts
The vector search ecosystem is rich and evolving. No one-size-fits-all solution exists—each method excels in specific scenarios. Hybrid approaches combining multiple methods work well in production. Keep learning, measure everything, and choose based on your actual requirements. Thank you!`
        }
      ]
    }
  ]
};
