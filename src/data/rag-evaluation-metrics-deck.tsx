import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const ragEvaluationMetricsDeck: Deck = {
  id: 'rag-evaluation-metrics',
  name: '13 Underused RAG Evaluation Metrics',
  description: 'A comprehensive cheat-sheet for measuring and improving retrieval quality, answer faithfulness, and system efficiency in Retrieval-Augmented Generation systems',
  category: 'RAG',
  theme: 'sky',
  slides: [],
  slideGroups: [
    {
      id: 'introduction',
      title: 'Introduction',
      slides: [
        {
          id: 1,
          center: true,
          title: '13 Underused RAG Evaluation Metrics',
          content: (
            <div>
              <div style={{ fontSize: '1.5rem', marginBottom: '30px', color: '#0ea5e9' }}>
                <SvgIcon iconName="duo-clipboard-list" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                A comprehensive cheat-sheet for measuring and improving retrieval quality, answer faithfulness, and system efficiency in Retrieval-Augmented Generation systems
              </div>
              <div style={{ fontSize: '1.2rem', color: '#10b981', lineHeight: '2' }}>
                <div>
                  <SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                  <strong>Retrieval Metrics</strong> — Metrics 1-4
                </div>
                <div>
                  <SvgIcon iconName="duo-file-lines" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                  <strong>Context Quality</strong> — Metric 5
                </div>
                <div>
                  <SvgIcon iconName="duo-message" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                  <strong>Answer Quality</strong> — Metrics 6-10
                </div>
                <div>
                  <SvgIcon iconName="duo-gauge-high" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                  <strong>Efficiency Metrics</strong> — Metrics 11-13
                </div>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </div>
            </div>
          ),
          backgroundColor: '#231f6f',
          notes: ''
        },
        {
          id: 2,
          title: 'RAG System Overview',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.8', textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1.5rem', borderRadius: '10px' }}>
                  <div style={{ color: '#3b82f6', marginBottom: '1rem' }}>
                    <SvgIcon iconName="duo-magnifying-glass" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Retrieval Quality Metrics (1-4)</strong>
                  </div>
                  <ul style={{ marginLeft: '1.5rem', fontSize: '1.2rem' }}>
                    <li>Retrieval Recall@K: Coverage of relevant information</li>
                    <li>Retrieval Precision@K: Relevance of retrieved chunks</li>
                    <li>Hit Rate: At least one relevant document in top-K</li>
                    <li>Context Overlap Score: Answer content present in retrieval</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1.5rem', borderRadius: '10px' }}>
                  <div style={{ color: '#0ea5e9', marginBottom: '1rem' }}>
                    <SvgIcon iconName="duo-file-lines" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Context Quality Metric (5)</strong>
                  </div>
                  <ul style={{ marginLeft: '1.5rem', fontSize: '1.2rem' }}>
                    <li>Context Relevance Score: LLM-judged relevance of context to query</li>
                  </ul>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1.5rem', borderRadius: '10px' }}>
                  <div style={{ color: '#10b981', marginBottom: '1rem' }}>
                    <SvgIcon iconName="duo-message" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Answer Quality Metrics (6-10)</strong>
                  </div>
                  <ul style={{ marginLeft: '1.5rem', fontSize: '1.2rem' }}>
                    <li>Hallucination Rate: Frequency of unsupported claims</li>
                    <li>Grounded Answer Score: Correct citation of retrieved facts</li>
                    <li>Faithfulness Score: Answer follows from context</li>
                    <li>Answer Completeness: Addresses all parts of query</li>
                    <li>Answer Specificity: Avoids vague responses</li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(139, 92, 246, 0.15)', padding: '1.5rem', borderRadius: '10px' }}>
                  <div style={{ color: '#8b5cf6', marginBottom: '1rem' }}>
                    <SvgIcon iconName="duo-gauge-high" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Efficiency Metrics (11-13)</strong>
                  </div>
                  <ul style={{ marginLeft: '1.5rem', fontSize: '1.2rem' }}>
                    <li>Noise Density: Irrelevant token percentage</li>
                    <li>Context Compression Efficiency: Information density in prompt</li>
                    <li>Latency-Cost Tradeoff Score: Efficiency under constraints</li>
                  </ul>
                </div>
              </div>

              <div style={{ marginTop: '2rem', textAlign: 'left', fontStyle: 'italic', fontSize: '1.6rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                Goal: Diagnose failures precisely (missed retrieval vs. ungrounded reasoning vs. inefficient context)
              </div>
            </div>
          ),
          backgroundColor: '#231f6f',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-1',
      title: '1. Retrieval Recall@K',
      slides: [
        {
          id: 3,
          title: '1. Retrieval Recall@K — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Measures how many relevant documents were successfully retrieved in the top-K results, indicating retrieval coverage completeness.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Reduces omission-driven hallucinations where the LLM fills knowledge gaps</li>
                <li>Improves answer completeness by ensuring all relevant information is available</li>
                <li>Critical for complex queries requiring multiple evidence pieces</li>
              </ul>

              <p>When tuning embedding models and chunking strategies, to detect missing evidence causing answer omissions, when adjusting top-K parameter settings, and to identify cases where relevant documents are missed.</p>
            </div>
          ),
          backgroundColor: '#231f6f',
          notes: ''
        },
        {
          id: 4,
          title: '1. Retrieval Recall@K — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Retrieval Recall@K measures the proportion of all relevant documents that appear in the top-K results. It answers: "Of all relevant documents, how many did we retrieve?"</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`Recall@K = |Rel ∩ TopK| / |Rel|`}
              </pre>
              <p>Where |Rel ∩ TopK| is the number of relevant documents in the top-K results, and |Rel| is the total number of relevant documents in the corpus.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>≥0.80 for carefully curated question-answer sets</li>
                <li>≥0.60 for broad open-domain queries</li>
                <li>Higher values critical for comprehensive information needs</li>
              </ul>
            </div>
          ),
          backgroundColor: '#231f6f',
          notes: ''
        },
        {
          id: 5,
          title: '1. Retrieval Recall@K — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p><strong>Query:</strong> "What are the side effects of medication X?"</p>
              <p>Corpus has 4 relevant documents discussing side effects</p>
              <p>Top-5 retrieval returns 3 of those relevant documents</p>
              <p><strong>Recall@5 = 3/4 = 0.75</strong></p>

              <h3>How to Calculate</h3>
              <p>First, identify all relevant documents in your corpus for the query. Then run your retrieval system to get the top-K results. Count how many of the relevant documents appear in those top-K results. Finally, divide that count by the total number of relevant documents to get your Recall@K score.</p>
            </div>
          ),
          backgroundColor: '#231f6f',
          notes: ''
        },
        {
          id: 6,
          title: '1. Retrieval Recall@K — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Higher recall reduces omission-driven hallucinations where the LLM fills knowledge gaps</li>
                <li>Improves answer completeness by ensuring all relevant information is available</li>
                <li>Critical for complex queries requiring multiple evidence pieces</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Requires ground truth relevance labels, which can be expensive to obtain</li>
                <li>Does not account for the quality or precision of retrieved documents</li>
                <li>May incentivize retrieving too many documents, increasing noise</li>
                <li>Difficult to optimize when relevant documents are poorly embedded or chunked</li>
              </ul>
            </div>
          ),
          backgroundColor: '#231f6f',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-2',
      title: '2. Retrieval Precision@K',
      slides: [
        {
          id: 7,
          title: '2. Retrieval Precision@K — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Measures how relevant the top-K retrieved chunks are (relevance purity). Evaluates the accuracy and quality of the retrieval system's results.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Improves grounding by focusing LLM on relevant information</li>
                <li>Reduces irrelevant context that can distract the LLM</li>
                <li>Lowers hallucination risk by minimizing exposure to tangential information</li>
                <li>Particularly important for smaller models with limited context processing ability</li>
              </ul>

              <p>When working with tight context budgets (token limits), to reduce context pollution and hallucination risk, when fine-tuning reranking models, and when evaluating retrieval quality for concise responses.</p>
            </div>
          ),
          backgroundColor: '#1f616f',
          notes: ''
        },
        {
          id: 8,
          title: '2. Retrieval Precision@K — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Retrieval Precision@K measures the proportion of retrieved documents that are actually relevant. It answers: "Of the K documents we retrieved, how many are relevant?"</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`Precision@K = |Rel ∩ TopK| / K`}
              </pre>
              <p>Where |Rel ∩ TopK| is the number of relevant documents in the top-K results, and K is the total number of retrieved documents being evaluated.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>≥0.70 typical for general RAG applications</li>
                <li>≥0.85 for systems with small context windows</li>
                <li>Higher values critical when LLM context capacity is limited</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f616f',
          notes: ''
        },
        {
          id: 9,
          title: '2. Retrieval Precision@K — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p><strong>Query:</strong> "How to reset account password?"</p>
              <p>Top-5 retrieved documents: 4 relevant password reset guides, 1 irrelevant login page doc</p>
              <p><strong>Precision@5 = 4/5 = 0.80</strong></p>

              <h3>How to Calculate</h3>
              <p>Run your retrieval system to get the top-K results. For each retrieved document, label it as relevant or irrelevant to the query. Count the number of relevant documents and divide by K (the total number of documents retrieved).</p>
            </div>
          ),
          backgroundColor: '#1f616f',
          notes: ''
        },
        {
          id: 10,
          title: '2. Retrieval Precision@K — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Higher precision improves grounding by focusing LLM on relevant information</li>
                <li>Reduces irrelevant context that can distract the LLM</li>
                <li>Lowers hallucination risk by minimizing exposure to tangential information</li>
                <li>Particularly important for smaller models with limited context processing ability</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>High precision can come at the cost of lower recall (missing relevant documents)</li>
                <li>Requires ground truth relevance judgments</li>
                <li>May be too conservative for complex queries requiring diverse perspectives</li>
                <li>Doesn't account for redundancy — multiple similar documents may inflate precision</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f616f',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-3',
      title: '3. Hit Rate',
      slides: [
        {
          id: 11,
          title: '3. Hit Rate — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Fraction of queries where at least one relevant item appears in top-K results (minimum success criterion).</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Ensures the generator sees at least one relevant "anchor" for grounding</li>
                <li>Stabilizes answer quality by preventing complete retrieval failures</li>
                <li>Low hit rate signals need for synthetic data or knowledge base expansion</li>
                <li>Critical baseline before optimizing for more nuanced metrics</li>
              </ul>

              <p>As a production guardrail to ensure some support is present, when designing fallback strategies for low-relevance cases, for quick health checks of retrieval systems, and to evaluate base retrieval success before precision-focused tuning.</p>
            </div>
          ),
          backgroundColor: '#1f6f28',
          notes: ''
        },
        {
          id: 12,
          title: '3. Hit Rate — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Hit Rate measures the fraction of queries where at least one relevant document appears in the top-K results. It's a binary success metric: did we retrieve anything useful?</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`HitRate@K = (1/N) Σ 1[|Rel ∩ TopK| ≥ 1]`}
              </pre>
              <p>Where N is the total number of queries, and the indicator function returns 1 if at least one relevant document appears in top-K, 0 otherwise. Sum over all queries.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>≥0.95 for FAQs or narrow/specialized corpora</li>
                <li>≥0.80 for broad or diverse document collections</li>
                <li>Lower values indicate need for embedding model or chunking improvements</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f6f28',
          notes: ''
        },
        {
          id: 13,
          title: '3. Hit Rate — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p>Test set: 100 user queries against product documentation</p>
              <p>Result: 92 queries have at least one relevant document in top-10 results</p>
              <p><strong>Hit Rate@10 = 92/100 = 0.92</strong></p>

              <h3>How to Calculate</h3>
              <p>For each query in your test set, run retrieval to get the top-K results. Check if at least one of those K documents is relevant. If yes, count it as a hit (1), otherwise count it as a miss (0). Sum all the hits and divide by the total number of queries.</p>
            </div>
          ),
          backgroundColor: '#1f6f28',
          notes: ''
        },
        {
          id: 14,
          title: '3. Hit Rate — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Ensures the generator sees at least one relevant "anchor" for grounding</li>
                <li>Stabilizes answer quality by preventing complete retrieval failures</li>
                <li>Low hit rate signals need for synthetic data or knowledge base expansion</li>
                <li>Critical baseline before optimizing for more nuanced metrics</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Binary metric doesn't capture how many relevant documents were retrieved</li>
                <li>Can be misleadingly high if only marginally relevant documents are retrieved</li>
                <li>Doesn't account for quality or ranking position of the hit</li>
                <li>May not be sensitive enough for fine-grained optimization</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f6f28',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-4',
      title: '4. Context Overlap Score',
      slides: [
        {
          id: 15,
          title: '4. Context Overlap Score — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Measures how much of the needed answer content is present in retrieved context, indicating answer coverage and retrieval completeness.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Higher overlap boosts faithfulness and completeness by ensuring necessary evidence is retrieved</li>
                <li>Reduces need for LLM to "fill gaps" with potentially incorrect information</li>
                <li>Identifies specific content gaps in knowledge bases</li>
              </ul>

              <p>When working with reference answers, to validate retrieval sufficiency beyond Recall@K, for testing whether all required information is available, and when evaluating complex queries requiring multiple evidence pieces.</p>
            </div>
          ),
          backgroundColor: '#646f1f',
          notes: ''
        },
        {
          id: 16,
          title: '4. Context Overlap Score — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Context Overlap Score evaluates how much of the expected answer information is present in the retrieved context. It can be calculated using token overlap, fact coverage, or semantic similarity.</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`Overlap = |Answer facts in context| / |Answer facts|`}
              </pre>
              <p>Alternatively: Token/phrase F1 score between reference answer and context, or semantic similarity between expected answer elements and retrieved chunks.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>≥0.70 for general use cases</li>
                <li>≥0.85 for high-stakes applications</li>
                <li>Context window size often limits feasible target values</li>
              </ul>
            </div>
          ),
          backgroundColor: '#646f1f',
          notes: ''
        },
        {
          id: 17,
          title: '4. Context Overlap Score — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p><strong>Query:</strong> "What are the eligibility requirements for program X?"</p>
              <p>Reference answer requires 5 key facts about eligibility</p>
              <p>Retrieved context contains only 4 of these facts</p>
              <p><strong>Context Overlap Score = 4/5 = 0.80</strong></p>

              <h3>How to Calculate</h3>
              <p>Start with a reference answer for the query. Break it down into atomic facts or key information elements. Then check the retrieved context to see which of those facts are present. Count the facts found in context and divide by the total number of facts needed.</p>
            </div>
          ),
          backgroundColor: '#646f1f',
          notes: ''
        },
        {
          id: 18,
          title: '4. Context Overlap Score — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Higher overlap boosts faithfulness and completeness by ensuring necessary evidence is retrieved</li>
                <li>Reduces need for LLM to "fill gaps" with potentially incorrect information</li>
                <li>Identifies specific content gaps in knowledge bases</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Requires reference answers, which can be expensive to create at scale</li>
                <li>Sensitive to how facts are decomposed (granularity varies)</li>
                <li>Doesn't measure whether the LLM actually uses the available context</li>
                <li>May not capture semantic equivalence if using token-based matching</li>
              </ul>
            </div>
          ),
          backgroundColor: '#646f1f',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-5',
      title: '5. Context Relevance Score (LLM-Scored)',
      slides: [
        {
          id: 19,
          title: '5. Context Relevance Score — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>LLM-as-judge score of how relevant the retrieved chunks are to the query, measuring the quality of retrieval context alignment to user information needs.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Improves precision by identifying and removing irrelevant context</li>
                <li>Reduces hallucinations caused by misleading information</li>
                <li>Enables continuous monitoring without reference answers</li>
                <li>Helps identify specific queries with poor retrieval performance</li>
              </ul>

              <p>When ground truth relevance labels are unavailable, for online monitoring of production RAG systems, during A/B testing of retrieval approaches, and to evaluate quality without human annotation effort.</p>
            </div>
          ),
          backgroundColor: '#1f656f',
          notes: ''
        },
        {
          id: 20,
          title: '5. Context Relevance Score — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>An LLM judge evaluates each retrieved chunk for its relevance to the query on a 0-1 scale. The scores are then averaged across all chunks to produce an overall context relevance score.</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`Context Relevance = mean(score_i)
where score_i ∈ [0,1] for each chunk`}
              </pre>
              <p>Have an LLM judge each chunk's relevance to the query on a 0-1 scale. Optional: Weight by chunk length for more accurate representation. Compute mean across all retrieved chunks.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>≥0.70 considered good performance</li>
                <li>≥0.80 indicates strong retrieval alignment</li>
                <li>Scores &lt;0.50 often signal problematic retrieval</li>
                <li>Thresholds may vary by domain complexity</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f656f',
          notes: ''
        },
        {
          id: 21,
          title: '5. Context Relevance Score — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p><strong>Query:</strong> "How do I reset my account password?"</p>
              <p>LLM relevance scores for 3 retrieved chunks:</p>
              <ul style={{ marginTop: '14px' }}>
                <li>Chunk 1 (password reset): 0.9</li>
                <li>Chunk 2 (account security): 0.8</li>
                <li>Chunk 3 (billing info): 0.3</li>
              </ul>
              <p><strong>Context Relevance = (0.9 + 0.8 + 0.3) / 3 = 0.67</strong></p>

              <h3>How to Calculate</h3>
              <p>For each chunk in the retrieved context, prompt an LLM judge to rate its relevance to the query on a 0-1 scale. Collect all the scores and compute the average. This gives you an automated quality assessment without requiring manual labels.</p>
            </div>
          ),
          backgroundColor: '#1f656f',
          notes: ''
        },
        {
          id: 22,
          title: '5. Context Relevance Score — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Improves precision by identifying and removing irrelevant context</li>
                <li>Reduces hallucinations caused by misleading information</li>
                <li>Enables continuous monitoring without reference answers</li>
                <li>Helps identify specific queries with poor retrieval performance</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>LLM judge quality and consistency can vary across models</li>
                <li>Adds latency and cost for evaluation (requires additional LLM calls)</li>
                <li>May not align perfectly with human judgment</li>
                <li>Requires careful prompt engineering to get reliable scores</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f656f',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-6',
      title: '6. Hallucination Rate',
      slides: [
        {
          id: 23,
          title: '6. Hallucination Rate — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Measures the frequency of unsupported or invented claims in generated answers that cannot be traced back to the retrieved context.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Lower hallucination rates directly increase trust in the system</li>
                <li>Reduces misinformation risk and potential legal/reputation damage</li>
                <li>Critical for safety-sensitive domains where incorrect information can cause harm</li>
                <li>Enables reliable citation of source materials</li>
              </ul>

              <p>As a primary generation quality guardrail, during regression testing before deployment, for continuous production monitoring, and when safety and accuracy are mission-critical.</p>
            </div>
          ),
          backgroundColor: '#6f1f6d',
          notes: ''
        },
        {
          id: 24,
          title: '6. Hallucination Rate — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Hallucination Rate measures the proportion of claims in the answer that lack supporting evidence in the retrieved context. It's the inverse of faithfulness.</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`HallucinationRate = 1 - Faithfulness
= (# unsupported claims) / (# total claims)`}
              </pre>
              <p>Extract all factual claims from the answer. Check each claim against the retrieved context. Count claims without supporting evidence. Implementation options: HHEM-2.1-Open model or LLM judge.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>&lt;5% for high-stakes applications (medical, legal, financial)</li>
                <li>&lt;10-15% for general-purpose applications</li>
                <li>Zero tolerance for critical facts in regulated domains</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6f1f6d',
          notes: ''
        },
        {
          id: 25,
          title: '6. Hallucination Rate — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p>Answer contains 12 factual claims</p>
              <p>Context supports 10 claims</p>
              <p>Context doesn't support 2 claims (invented details)</p>
              <p><strong>Hallucination Rate = 2/12 = 16.7% (exceeds target)</strong></p>

              <h3>How to Calculate</h3>
              <p>Parse the generated answer into individual factual claims. For each claim, check whether it can be verified against the retrieved context. Count the number of unsupported claims and divide by the total number of claims. Use automated tools like HHEM-2.1-Open or an LLM judge for scaling.</p>
            </div>
          ),
          backgroundColor: '#6f1f6d',
          notes: ''
        },
        {
          id: 26,
          title: '6. Hallucination Rate — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Lower hallucination rates directly increase trust in the system</li>
                <li>Reduces misinformation risk and potential legal/reputation damage</li>
                <li>Critical for safety-sensitive domains where incorrect information can cause harm</li>
                <li>Enables reliable citation of source materials</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Claim extraction can be challenging and inconsistent</li>
                <li>Not all unsupported claims are harmful — some may be reasonable inferences</li>
                <li>Detection quality depends on the evaluation method used</li>
                <li>May penalize valid general knowledge not in the specific context</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6f1f6d',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-7',
      title: '7. Grounded Answer Score',
      slides: [
        {
          id: 27,
          title: '7. Grounded Answer Score — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Measures whether answer cites retrieved facts correctly (especially in citation-enabled RAG systems that provide sources for their claims).</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Encourages precise evidence use with traceable citations</li>
                <li>Improves user trust by making information verifiable</li>
                <li>Enables better debugging of hallucination sources</li>
                <li>Supports regulatory compliance with evidence requirements</li>
              </ul>

              <p>For systems that expose citations or links to sources, legal, medical, or financial applications requiring auditability, compliance-focused applications that need traceable evidence, and when building user interfaces that highlight source evidence.</p>
            </div>
          ),
          backgroundColor: '#6f1f32',
          notes: ''
        },
        {
          id: 28,
          title: '7. Grounded Answer Score — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Grounded Answer Score evaluates whether claims in the answer correctly cite the supporting evidence from retrieved context. It combines factual accuracy with citation accuracy.</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`GAS = (# claims with correct citation-supported spans) / (# total claims)`}
              </pre>
              <p>Process: Identify each claim in the generated answer. For each claim with a citation, verify the cited span supports the claim. Count correctly supported claims and divide by total claims.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>≥0.90 for general applications</li>
                <li>≥0.95 for strict domains (legal, medical, financial)</li>
                <li>Lower scores indicate inaccurate citation or attribution issues</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6f1f32',
          notes: ''
        },
        {
          id: 29,
          title: '7. Grounded Answer Score — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p><strong>Answer:</strong> "The medication has three primary side effects[1]. It may cause drowsiness[2], headaches[3], and in rare cases, dizziness[4]."</p>
              <ul style={{ marginTop: '14px' }}>
                <li>10 total claims in the answer</li>
                <li>9 claims correctly cited (1 citation doesn't support its claim)</li>
              </ul>
              <p><strong>GAS = 9/10 = 0.90</strong></p>

              <h3>How to Calculate</h3>
              <p>Extract all claims from the answer along with their citations. For each cited claim, verify that the referenced source actually supports it. Count the correctly cited claims and divide by total claims. This requires both extraction and verification steps.</p>
            </div>
          ),
          backgroundColor: '#6f1f32',
          notes: ''
        },
        {
          id: 30,
          title: '7. Grounded Answer Score — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Encourages precise evidence use with traceable citations</li>
                <li>Improves user trust by making information verifiable</li>
                <li>Enables better debugging of hallucination sources</li>
                <li>Supports regulatory compliance with evidence requirements</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Only applicable to systems that generate citations</li>
                <li>Requires more complex evaluation infrastructure</li>
                <li>Citation format and granularity can vary widely</li>
                <li>May penalize citations to partially supporting evidence</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6f1f32',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-8',
      title: '8. Faithfulness Score',
      slides: [
        {
          id: 31,
          title: '8. Faithfulness Score — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Checks whether claims in the generated answer are fully supported by the retrieved context, ensuring factual consistency between response and evidence.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Higher faithfulness directly reduces hallucinations</li>
                <li>Improves factual accuracy and system trustworthiness</li>
                <li>Essential for detecting prompt/context misalignments</li>
                <li>Foundation for implementing safety guardrails</li>
              </ul>

              <p>Core hallucination control metric for all RAG systems, pre-deployment quality assurance checks, continuous monitoring in production, and when legal or compliance risks exist from incorrect information.</p>
            </div>
          ),
          backgroundColor: '#4c1f6f',
          notes: ''
        },
        {
          id: 32,
          title: '8. Faithfulness Score — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Faithfulness Score measures what proportion of claims in the answer can be verified against the retrieved context. It's the complement of hallucination rate.</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`Faithfulness = (# supported claims) / (# total claims)`}
              </pre>
              <p>Implementation: Extract individual claims from the generated answer. Check each claim against retrieved context. Frameworks like RAGAS or HHEM-2.1-Open automate this.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>≥0.80 for general-purpose RAG applications</li>
                <li>≥0.90 for high-stakes domains (medical, legal, finance)</li>
                <li>Consider sampling confidence intervals when evaluating</li>
              </ul>
            </div>
          ),
          backgroundColor: '#4c1f6f',
          notes: ''
        },
        {
          id: 33,
          title: '8. Faithfulness Score — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p><strong>Context:</strong> "Our return policy allows returns within 30 days with receipt. Damaged items cannot be returned."</p>
              <p><strong>Answer:</strong> "You can return items within 30 days if you have the receipt. Damaged items aren't eligible. All returns receive store credit."</p>
              <p>Claims: 3 total (30-day policy, receipt required, store credit)</p>
              <p>Supported claims: 2 (last claim not supported)</p>
              <p><strong>Faithfulness = 2/3 = 0.67</strong></p>

              <h3>How to Calculate</h3>
              <p>Break the answer into atomic claims. For each claim, check if it can be verified from the retrieved context. Count supported claims and divide by total claims. Use tools like RAGAS or HHEM-2.1-Open for automation.</p>
            </div>
          ),
          backgroundColor: '#4c1f6f',
          notes: ''
        },
        {
          id: 34,
          title: '8. Faithfulness Score — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Higher faithfulness directly reduces hallucinations</li>
                <li>Improves factual accuracy and system trustworthiness</li>
                <li>Essential for detecting prompt/context misalignments</li>
                <li>Foundation for implementing safety guardrails</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Claim extraction quality varies across evaluation methods</li>
                <li>May penalize valid reasoning or inference from context</li>
                <li>Context may not contain all necessary background information</li>
                <li>Evaluation can be computationally expensive at scale</li>
              </ul>
            </div>
          ),
          backgroundColor: '#4c1f6f',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-9',
      title: '9. Answer Completeness',
      slides: [
        {
          id: 35,
          title: '9. Answer Completeness — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Measures whether the answer addresses all required parts of the query, especially for multi-part or complex questions.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Improves user satisfaction by addressing all query aspects</li>
                <li>Reduces follow-up queries and conversation turns</li>
                <li>When combined with faithfulness, ensures comprehensive and accurate responses</li>
                <li>Essential for establishing trust in expert domains</li>
              </ul>

              <p>For multi-part questions with explicit sub-questions, enterprise support where complete responses are critical, analytics answers that must address multiple aspects, and when assessing response quality beyond mere factuality.</p>
            </div>
          ),
          backgroundColor: '#1f446f',
          notes: ''
        },
        {
          id: 36,
          title: '9. Answer Completeness — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Answer Completeness assesses whether all parts of a multi-faceted query are addressed in the response. It measures coverage of required sub-answers.</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`Completeness = (# required sub-answers present) / (# required)`}
              </pre>
              <p>Where required sub-answers are the parts of the query that need addressing. Can use reference decomposition or LLM judge checklist to identify parts.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>≥0.85 typical for general applications</li>
                <li>≥0.95 for high-stakes domains (medical, legal, finance)</li>
                <li>Balance with other metrics like faithfulness and relevance</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f446f',
          notes: ''
        },
        {
          id: 37,
          title: '9. Answer Completeness — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p><strong>Query:</strong> "What's the price, warranty length, and return policy for this product?"</p>
              <p><strong>Answer:</strong> "The product costs $199 and comes with a 2-year warranty."</p>
              <p>Analysis: The answer addresses 2 of 3 required parts (missing return policy)</p>
              <p><strong>Completeness = 2/3 = 0.67</strong></p>

              <h3>How to Calculate</h3>
              <p>Parse the query to identify all sub-questions or required information elements. Check the answer to see which elements are addressed. Count the addressed elements and divide by the total required elements.</p>
            </div>
          ),
          backgroundColor: '#1f446f',
          notes: ''
        },
        {
          id: 38,
          title: '9. Answer Completeness — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Improves user satisfaction by addressing all query aspects</li>
                <li>Reduces follow-up queries and conversation turns</li>
                <li>When combined with faithfulness, ensures comprehensive and accurate responses</li>
                <li>Essential for establishing trust in expert domains</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Subjective determination of what constitutes "complete"</li>
                <li>May encourage verbose answers that include unnecessary information</li>
                <li>Difficult to apply to open-ended or exploratory queries</li>
                <li>Can conflict with brevity goals in some applications</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f446f',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-10',
      title: '10. Answer Specificity',
      slides: [
        {
          id: 39,
          title: '10. Answer Specificity — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Evaluates whether responses avoid vague or generic phrasing, instead providing concrete, actionable details that are specific to the query context.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Drives more useful, actionable outputs without sacrificing factuality</li>
                <li>Encourages models to fully utilize context details instead of generic responses</li>
                <li>Improves user satisfaction with concrete information</li>
                <li>Reduces follow-up questions seeking clarification</li>
              </ul>

              <p>For product guidance where detailed steps matter, procedural or technical FAQs, analytics and data summary use cases, and when users need actionable rather than abstract advice.</p>
            </div>
          ),
          backgroundColor: '#1f6f21',
          notes: ''
        },
        {
          id: 40,
          title: '10. Answer Specificity — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Answer Specificity measures the level of detail and concreteness in responses. It can be assessed using LLM judges or by measuring information density.</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`Option 1: LLM-judged specificity score [0-1]
Option 2: Info-density = (# named entities + numbers) / answer tokens`}
              </pre>
              <p>Approaches: LLM judge evaluates specificity based on detail level and concreteness. Info density measures content-to-token ratio (normalized to [0-1]). Entity recognition counts named objects, dates, quantities, etc.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>≥0.60 with faithfulness gate in place</li>
                <li>≥0.70 for domain-tuned systems</li>
                <li>Balance with brevity goals - overly specific responses can be verbose</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f6f21',
          notes: ''
        },
        {
          id: 41,
          title: '10. Answer Specificity — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p><strong>Query:</strong> "How do I troubleshoot connection issues?"</p>
              <p><strong>Low Specificity:</strong> "Try checking your connection settings and restart if needed."</p>
              <p><strong>High Specificity:</strong> "Open Settings &gt; Network &gt; WiFi, toggle WiFi off for 10 seconds, then reconnect to your 5GHz network. If error code E-4019 persists, update router firmware to v2.5+"</p>

              <h3>How to Calculate</h3>
              <p>Use an LLM judge to score the answer's specificity on a 0-1 scale based on concrete details, specific values, and actionable steps. Alternatively, calculate information density by counting named entities, numbers, and technical terms relative to total tokens.</p>
            </div>
          ),
          backgroundColor: '#1f6f21',
          notes: ''
        },
        {
          id: 42,
          title: '10. Answer Specificity — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Drives more useful, actionable outputs without sacrificing factuality</li>
                <li>Encourages models to fully utilize context details instead of generic responses</li>
                <li>Improves user satisfaction with concrete information</li>
                <li>Reduces follow-up questions seeking clarification</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Can conflict with brevity and conciseness goals</li>
                <li>May not be appropriate for all query types (some need general answers)</li>
                <li>High specificity can reduce answer generalizability</li>
                <li>Risks over-fitting to context details that may not be relevant</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f6f21',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-11',
      title: '11. Noise Density',
      slides: [
        {
          id: 43,
          title: '11. Noise Density — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Measures the percentage of irrelevant tokens in retrieved context (context pollution) that contribute to prompt inefficiency.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Reduces distraction for the LLM by removing irrelevant context</li>
                <li>Lowers token costs and latency by minimizing context size</li>
                <li>Improves grounding probability by focusing LLM attention on relevant information</li>
                <li>Enables more efficient use of limited context windows</li>
              </ul>

              <p>When working with long-context models, during retrieval and reranking system tuning, for optimizing cost and latency control, and when refining chunk sizes and boundaries.</p>
            </div>
          ),
          backgroundColor: '#6f4a1f',
          notes: ''
        },
        {
          id: 44,
          title: '11. Noise Density — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Noise Density quantifies the proportion of tokens in the retrieved context that don't contribute to answering the query. Lower is better.</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`NoiseDensity = (Irrelevant tokens in context) / (Total context tokens)`}
              </pre>
              <p>Approaches: Per-chunk relevance × chunk length, token-level labeling via LLM or embedding relevance, or manual evaluation of token necessity.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>&lt;30% for short context windows</li>
                <li>&lt;20% for long context systems</li>
                <li>Lower is better - aim to minimize irrelevant content</li>
                <li>High-performing systems may achieve &lt;15% for targeted domains</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6f4a1f',
          notes: ''
        },
        {
          id: 45,
          title: '11. Noise Density — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p>Retrieved context: 3,000 tokens total</p>
              <p>Irrelevant tokens: 800 tokens (tangential information)</p>
              <p><strong>Noise Density = 800/3,000 = 26.7%</strong></p>
              <p><em>This indicates moderate noise that could be improved through better retrieval or reranking.</em></p>

              <h3>How to Calculate</h3>
              <p>Evaluate each chunk or section in the retrieved context for relevance. Multiply relevance scores by chunk token counts. Sum irrelevant tokens and divide by total context tokens. Use LLM judges or embedding similarity for automated assessment.</p>
            </div>
          ),
          backgroundColor: '#6f4a1f',
          notes: ''
        },
        {
          id: 46,
          title: '11. Noise Density — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Reduces distraction for the LLM by removing irrelevant context</li>
                <li>Lowers token costs and latency by minimizing context size</li>
                <li>Improves grounding probability by focusing LLM attention on relevant information</li>
                <li>Enables more efficient use of limited context windows</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Determining "irrelevance" can be subjective or context-dependent</li>
                <li>Some context may seem irrelevant but provide useful background</li>
                <li>Fine-grained token-level evaluation is computationally expensive</li>
                <li>Over-optimization can lead to losing important nuance</li>
              </ul>
            </div>
          ),
          backgroundColor: '#6f4a1f',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-12',
      title: '12. Context Compression Efficiency',
      slides: [
        {
          id: 47,
          title: '12. Context Compression Efficiency — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>How compactly key information is expressed in the prompt while preserving coverage of essential information for answer generation.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Maintains answer accuracy while significantly lowering token usage</li>
                <li>Reduces inference latency through smaller context windows</li>
                <li>Lowers operational costs for token-priced LLM APIs</li>
                <li>Enables more complex RAG architectures within the same context budget</li>
              </ul>

              <p>When implementing context summarization/condensation, during reranker pruning optimization, for prompt engineering to reduce token usage, and when optimizing context-window usage in tight budget scenarios.</p>
            </div>
          ),
          backgroundColor: '#466f1f',
          notes: ''
        },
        {
          id: 48,
          title: '12. Context Compression Efficiency — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Context Compression Efficiency measures how well information density is optimized in the prompt. It evaluates information coverage per token used.</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`CCE = Coverage_τ / Tokens
- OR -
Compute MinimalTokens achieving Coverage ≥ τ`}
              </pre>
              <p>Where Coverage_τ is contextual recall at threshold τ, and Tokens is the token count used in context.</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Seek higher CCE vs. baseline</li>
                <li>Typically aim for ≥20–40% token reduction at same coverage level</li>
                <li>Compare different compression approaches against each other</li>
              </ul>
            </div>
          ),
          backgroundColor: '#466f1f',
          notes: ''
        },
        {
          id: 49,
          title: '12. Context Compression Efficiency — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p><strong>Baseline:</strong> 85% coverage achieved with 2,000 tokens</p>
              <p><strong>Optimized:</strong> Same 85% coverage with only 1,200 tokens</p>
              <p><strong>Result: CCE improves by ~67% (compression ratio 1.67:1)</strong></p>
              <p><strong>Impact:</strong> 40% token reduction without sacrificing information</p>

              <h3>How to Calculate</h3>
              <p>Measure the coverage metric (e.g., answer quality) with baseline context. Apply compression techniques (summarization, pruning, reranking). Measure coverage again with compressed context. Compare tokens used at equivalent coverage levels.</p>
            </div>
          ),
          backgroundColor: '#466f1f',
          notes: ''
        },
        {
          id: 50,
          title: '12. Context Compression Efficiency — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Maintains answer accuracy while significantly lowering token usage</li>
                <li>Reduces inference latency through smaller context windows</li>
                <li>Lowers operational costs for token-priced LLM APIs</li>
                <li>Enables more complex RAG architectures within the same context budget</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Compression can remove subtle but important details</li>
                <li>Requires careful validation that coverage is truly maintained</li>
                <li>Summarization/compression adds processing overhead and latency</li>
                <li>May not be beneficial for already-concise contexts</li>
              </ul>
            </div>
          ),
          backgroundColor: '#466f1f',
          notes: ''
        }
      ]
    },
    {
      id: 'metric-13',
      title: '13. Latency-Cost Tradeoff Score',
      slides: [
        {
          id: 51,
          title: '13. Latency-Cost Tradeoff Score — Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Definition</h3>
              <p>Overall efficiency of the RAG pipeline under latency and budget constraints, balancing performance with resource utilization.</p>

              <h3 style={{ color: '#2ecc71' }}>Goal & Benefits</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Balances user experience responsiveness with operational costs</li>
                <li>Enables sustainable scaling of RAG systems to more users</li>
                <li>Provides framework for data-driven infrastructure decisions</li>
                <li>Helps identify optimization opportunities in the pipeline</li>
              </ul>

              <p>When selecting LLM/embedding models or rerankers, for tuning top-K retrieval parameters, optimizing batching and caching strategies, during deployment sizing and scaling decisions, and for comparing system configurations under budget constraints.</p>
            </div>
          ),
          backgroundColor: '#1f696f',
          notes: ''
        },
        {
          id: 52,
          title: '13. Latency-Cost Tradeoff Score — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>How It Works</h3>
              <p>Latency-Cost Tradeoff Score measures how efficiently the system operates within specified latency and cost budgets, with a configurable weight parameter.</p>

              <h3>Formula</h3>
              <pre style={{ marginTop: '8px', lineHeight: '1.5', fontSize: '0.85rem' }}>
                {`LCTS = 1 − [α·(p50 latency/latency budget) + (1−α)·(token cost/cost budget)]`}
              </pre>
              <p>Where α is a weight parameter (0-1) for latency vs. cost importance, p50 latency is the median response time, and the result is clipped to range [0,1].</p>

              <h3>Target Values</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>≥0.70 is generally acceptable</li>
                <li>≥0.85 indicates strong performance</li>
                <li>Adjust thresholds based on specific application requirements</li>
                <li>Higher-priority applications may require stricter thresholds</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f696f',
          notes: ''
        },
        {
          id: 53,
          title: '13. Latency-Cost Tradeoff Score — Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3>Example</h3>
              <p><strong>Given:</strong></p>
              <ul style={{ marginTop: '14px' }}>
                <li>α = 0.6 (latency slightly more important than cost)</li>
                <li>Latency use: 70% of budget (0.7)</li>
                <li>Cost use: 50% of budget (0.5)</li>
              </ul>
              <p><strong>LCTS = 1 − [0.6·0.7 + 0.4·0.5]</strong></p>
              <p><strong>LCTS = 1 − [0.42 + 0.20] = 0.38</strong></p>
              <p><em>This indicates suboptimal performance that needs optimization.</em></p>

              <h3>How to Calculate</h3>
              <p>Measure p50 latency and token costs in production. Compare against your budget constraints. Apply the formula with your chosen α weight. Use the score to compare configurations or track optimization progress.</p>
            </div>
          ),
          backgroundColor: '#1f696f',
          notes: ''
        },
        {
          id: 54,
          title: '13. Latency-Cost Tradeoff Score — Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2' }}>
              <h3 style={{ color: '#2ecc71' }}>Impact on RAG</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Balances user experience responsiveness with operational costs</li>
                <li>Enables sustainable scaling of RAG systems to more users</li>
                <li>Provides framework for data-driven infrastructure decisions</li>
                <li>Helps identify optimization opportunities in the pipeline</li>
              </ul>

              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ marginTop: '14px' }}>
                <li>Weight parameter (α) selection can be subjective</li>
                <li>Budget constraints may change over time</li>
                <li>Doesn't directly measure answer quality</li>
                <li>May not capture all relevant cost factors (storage, compute, etc.)</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1f696f',
          notes: ''
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary & Next Steps',
      slides: [
        {
          id: 55,
          title: 'Summary & Next Steps',
          content: (
            <div style={{ fontSize: '2rem', lineHeight: '1.8', textAlign: 'left' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1.5rem', borderRadius: '10px' }}>
                  <div style={{ color: '#3b82f6', marginBottom: '1rem' }}>
                    <SvgIcon iconName="duo-chart-line" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Key Takeaways</strong>
                  </div>
                  <ul style={{ marginLeft: '1.5rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>
                      <strong>Retrieval metrics</strong> (1-4) diagnose missed evidence
                    </li>
                    <li>
                      <strong>Context quality</strong> (5) evaluates relevance alignment
                    </li>
                    <li>
                      <strong>Answer quality</strong> (6-10) measures faithfulness & completeness
                    </li>
                    <li>
                      <strong>Efficiency metrics</strong> (11-13) optimize cost & latency
                    </li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1.5rem', borderRadius: '10px' }}>
                  <div style={{ color: '#10b981', marginBottom: '1rem' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                    <strong>Best Practices</strong>
                  </div>
                  <ul style={{ marginLeft: '1.5rem', fontSize: '1.2rem', marginBottom: 0 }}>
                    <li>
                      Use multiple metrics together for full picture
                    </li>
                    <li>
                      Start with retrieval & faithfulness baselines
                    </li>
                    <li>
                      Continuously monitor in production
                    </li>
                    <li>
                      Balance quality with efficiency constraints
                    </li>
                  </ul>
                </div>
              </div>

              <div style={{ background: 'rgba(139, 92, 246, 0.15)', padding: '1.5rem', borderRadius: '10px', marginBottom: '1.5rem' }}>
                <div style={{ color: '#8b5cf6', marginBottom: '1rem' }}>
                  <SvgIcon iconName="duo-rocket" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                  <strong>Implementation Roadmap</strong>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', fontSize: '1.2rem' }}>
                  <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      Phase 1: Foundation
                    </div>
                    <div>Implement Recall@K, Precision@K, and Faithfulness Score</div>
                  </div>
                  <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      Phase 2: Quality
                    </div>
                    <div>Add Context Relevance, Answer Completeness, and Hallucination Rate</div>
                  </div>
                  <div style={{ background: 'rgba(245, 158, 11, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      Phase 3: Optimization
                    </div>
                    <div>Track Noise Density, Context Compression, and Latency-Cost Tradeoff</div>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.5rem', background: 'rgba(245, 158, 11, 0.15)', borderRadius: '10px', textAlign: 'left', fontSize: '1.2rem' }}>
                <SvgIcon iconName="duo-circle-info" sizeName="2x" style={iconStyle} darkModeInvert={true} />
                <strong>Remember:</strong> No single metric tells the full story. Use combinations to diagnose root causes: missed retrieval vs. ungrounded reasoning vs. inefficient context.
              </div>
            </div>
          ),
          backgroundColor: '#1f696f',
          notes: ''
        }
      ]
    }
  ]
};

