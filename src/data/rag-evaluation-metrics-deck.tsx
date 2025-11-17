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
          title: '13 Underused RAG Evaluation Metrics',
          content: (
            <div style={{ textAlign: 'left', padding: '2rem' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#0ea5e9' }}>
            <SvgIcon iconName="duo-clipboard-list" sizeName="xl" style={iconStyle} darkModeInvert={true} />
            A comprehensive cheat-sheet for measuring and improving retrieval quality, answer faithfulness, and system efficiency
          </div>
          <div style={{ fontSize: '1.2rem', color: '#10b981', marginTop: '3rem', lineHeight: '2' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <SvgIcon iconName="duo-magnifying-glass" sizeName="xl" style={iconStyle} darkModeInvert={true} />
              <strong>Retrieval Metrics</strong> — Metrics 1-4
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <SvgIcon iconName="duo-file-lines" sizeName="xl" style={iconStyle} darkModeInvert={true} />
              <strong>Context Quality</strong> — Metric 5
            </div>
            <div style={{ marginBottom: '1.5rem' }}>
              <SvgIcon iconName="duo-message" sizeName="xl" style={iconStyle} darkModeInvert={true} />
              <strong>Answer Quality</strong> — Metrics 6-10
            </div>
            <div>
              <SvgIcon iconName="duo-gauge-high" sizeName="xl" style={iconStyle} darkModeInvert={true} />
              <strong>Efficiency Metrics</strong> — Metrics 11-13
            </div>
          </div>
        </div>
      ),
      notes: 'Title slide introducing the 13 RAG evaluation metrics'
    },
    {
      id: 2,
      title: 'RAG System Overview',
      icon: { name: 'duo-diagram-project' },
      content: (
        <div style={{ fontSize: '1rem', lineHeight: '1.8', textAlign: 'left' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1.5rem', borderRadius: '10px' }}>
              <div style={{ fontSize: '1.3rem', color: '#3b82f6', marginBottom: '1rem' }}>
                <SvgIcon iconName="duo-magnifying-glass" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                <strong>Retrieval Quality Metrics (1-4)</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.95rem' }}>
                <li>Retrieval Recall@K: Coverage of relevant information</li>
                <li>Retrieval Precision@K: Relevance of retrieved chunks</li>
                <li>Hit Rate: At least one relevant document in top-K</li>
                <li>Context Overlap: Answer content present in retrieval</li>
              </ul>
            </div>

            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1.5rem', borderRadius: '10px' }}>
              <div style={{ fontSize: '1.3rem', color: '#0ea5e9', marginBottom: '1rem' }}>
                <SvgIcon iconName="duo-file-lines" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                <strong>Context Quality Metric (5)</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.95rem' }}>
                <li>Context Relevance Score: LLM-judged relevance of context to query</li>
              </ul>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1.5rem', borderRadius: '10px' }}>
              <div style={{ fontSize: '1.3rem', color: '#10b981', marginBottom: '1rem' }}>
                <SvgIcon iconName="duo-message" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                <strong>Answer Quality Metrics (6-10)</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.95rem' }}>
                <li>Hallucination Rate: Frequency of unsupported claims</li>
                <li>Grounded Answer Score: Correct citation of retrieved facts</li>
                <li>Faithfulness Score: Answer follows from context</li>
                <li>Answer Completeness: Addresses all parts of query</li>
                <li>Answer Specificity: Avoids vague responses</li>
              </ul>
            </div>

            <div style={{ background: 'rgba(139, 92, 246, 0.15)', padding: '1.5rem', borderRadius: '10px' }}>
              <div style={{ fontSize: '1.3rem', color: '#8b5cf6', marginBottom: '1rem' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                <strong>Efficiency Metrics (11-13)</strong>
              </div>
              <ul style={{ marginLeft: '1.5rem', fontSize: '0.95rem' }}>
                <li>Noise Density: Irrelevant token percentage</li>
                <li>Context Compression: Information density in prompt</li>
                <li>Latency-Cost Tradeoff: Efficiency under constraints</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: '2rem', textAlign: 'left', fontSize: '1.1rem', fontStyle: 'italic', color: '#6b7280' }}>
            <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} darkModeInvert={true} />
            Goal: Diagnose failures precisely (missed retrieval vs. ungrounded reasoning vs. inefficient context)
          </div>
        </div>
      ),
      notes: 'Overview of the RAG system and all metric categories'
        }
      ]
    },
    {
      id: 'metric-1',
      title: '1. Retrieval Recall@K',
      slides: [
        {
          id: 3,
          title: '1. Retrieval Recall@K',
          icon: { name: 'duo-magnifying-glass' },
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                    <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                    <strong>Goal / What It Measures</strong>
                  </div>
                  <div>Measures how many relevant documents were successfully retrieved in the top-K results, indicating retrieval coverage completeness.</div>
                </div>
                <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
                  <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                    <SvgIcon iconName="duo-calculator" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                    <strong>How to Calculate</strong>
                  </div>
                  <div style={{ fontFamily: 'monospace', fontSize: '0.95rem' }}>
                    Recall@K = |Rel ∩ TopK| / |Rel|
                    <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontFamily: 'inherit' }}>
                      Where |Rel ∩ TopK| = relevant docs in top-K, |Rel| = total relevant docs
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                  <strong>When to Use</strong>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                  <li>When tuning embedding models and chunking strategies</li>
                  <li>To detect missing evidence causing answer omissions</li>
                  <li>When adjusting top-K parameter settings</li>
                  <li>To identify cases where relevant documents are missed</li>
                </ul>
              </div>

              <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  <SvgIcon iconName="duo-chart-bar" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                  <strong>Target / Good Value Benchmark</strong>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div>• ≥0.80 for carefully curated question-answer sets</div>
                  <div>• ≥0.60 for broad open-domain queries</div>
                </div>
              </div>

              <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                  <strong>Example</strong>
                </div>
                <div style={{ fontSize: '0.9rem' }}>
                  <strong>Query:</strong> "What are the side effects of medication X?"<br/>
                  Corpus has 4 relevant documents discussing side effects<br/>
                  Top-5 retrieval returns 3 of those relevant documents<br/>
                  <strong style={{ color: '#8b5cf6' }}>Recall@5 = 3/4 = 0.75</strong>
                </div>
              </div>

              <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
                <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
                  <SvgIcon iconName="duo-arrow-trend-up" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                  <strong>Impact on RAG</strong>
                </div>
                <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
                  <li>Higher recall reduces omission-driven hallucinations where the LLM fills knowledge gaps</li>
                  <li>Improves answer completeness by ensuring all relevant information is available</li>
                  <li>Critical for complex queries requiring multiple evidence pieces</li>
                </ul>
              </div>
            </div>
      ),
      notes: 'Retrieval Recall@K - coverage of relevant documents'
        }
      ]
    },
    {
      id: 'metric-2',
      title: '2. Retrieval Precision@K',
      slides: [
        {
          id: 4,
          title: '2. Retrieval Precision@K',
          icon: { name: 'duo-bullseye' },
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Goal / What It Measures</strong>
              </div>
              <div>Measures how relevant the top-K retrieved chunks are (relevance purity). Evaluates the accuracy and quality of the retrieval system's results.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-calculator" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>How to Calculate</strong>
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: '0.95rem' }}>
                Precision@K = |Rel ∩ TopK| / K
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontFamily: 'inherit' }}>
                  Where |Rel ∩ TopK| = relevant docs in top-K, K = total retrieved docs
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>When working with tight context budgets (token limits)</li>
              <li>To reduce context pollution and hallucination risk</li>
              <li>When fine-tuning reranking models</li>
              <li>When evaluating retrieval quality for concise responses</li>
            </ul>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-chart-bar" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Target / Good Value Benchmark</strong>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div>• ≥0.70 typical for general RAG applications</div>
              <div>• ≥0.85 for systems with small context windows</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Example</strong>
            </div>
            <div style={{ fontSize: '0.9rem' }}>
              <strong>Query:</strong> "How to reset account password?"<br/>
              Top-5 retrieved documents: 4 relevant password reset guides, 1 irrelevant login page doc<br/>
              <strong style={{ color: '#8b5cf6' }}>Precision@5 = 4/5 = 0.80</strong>
            </div>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-arrow-trend-up" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Impact on RAG</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Higher precision improves grounding by focusing LLM on relevant information</li>
              <li>Reduces irrelevant context that can distract the LLM</li>
              <li>Lowers hallucination risk by minimizing exposure to tangential information</li>
              <li>Particularly important for smaller models with limited context processing ability</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'Retrieval Precision@K - relevance purity of retrieved results'
        }
      ]
    },
    {
      id: 'metric-3',
      title: '3. Hit Rate',
      slides: [
        {
          id: 5,
          title: '3. Hit Rate',
          icon: { name: 'duo-check-circle' },
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Goal / What It Measures</strong>
              </div>
              <div>Fraction of queries where at least one relevant item appears in top-K results (minimum success criterion).</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-calculator" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>How to Calculate</strong>
              </div>
              <div style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>
                HitRate@K = (1/N) Σ 1[|Rel ∩ TopK| ≥ 1]
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', fontFamily: 'inherit' }}>
                  N = total queries, indicator = 1 if ≥1 relevant doc in top-K
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>As a production guardrail to ensure some support is present</li>
              <li>When designing fallback strategies for low-relevance cases</li>
              <li>For quick health checks of retrieval systems</li>
              <li>To evaluate base retrieval success before precision-focused tuning</li>
            </ul>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-chart-bar" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Target / Good Value Benchmark</strong>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div>• ≥0.95 for FAQs or narrow/specialized corpora</div>
              <div>• ≥0.80 for broad or diverse document collections</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Example</strong>
            </div>
            <div style={{ fontSize: '0.9rem' }}>
              Test set: 100 user queries against product documentation<br/>
              Result: 92 queries have at least one relevant document in top-10 results<br/>
              <strong style={{ color: '#8b5cf6' }}>Hit Rate@10 = 92/100 = 0.92</strong>
            </div>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-arrow-trend-up" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Impact on RAG</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Ensures the generator sees at least one relevant "anchor" for grounding</li>
              <li>Stabilizes answer quality by preventing complete retrieval failures</li>
              <li>Low hit rate signals need for synthetic data or knowledge base expansion</li>
              <li>Critical baseline before optimizing for more nuanced metrics</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'Hit Rate - minimum success criterion for retrieval'
        }
      ]
    },
    {
      id: 'metric-4',
      title: '4. Context Overlap Score',
      slides: [
        {
          id: 6,
          title: '4. Context Overlap Score',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Goal / What It Measures</strong>
              </div>
              <div>Measures how much of the needed answer content is present in retrieved context, indicating answer coverage and retrieval completeness.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-calculator" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>How to Calculate</strong>
              </div>
              <div style={{ fontSize: '0.9rem' }}>
                Overlap = |Answer facts in context| / |Answer facts|
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  Or: Token/phrase F1 score between reference answer and context
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>When working with reference answers</li>
              <li>To validate retrieval sufficiency beyond Recall@K</li>
              <li>For testing whether all required information is available</li>
              <li>When evaluating complex queries requiring multiple evidence pieces</li>
            </ul>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-chart-bar" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Target / Good Value Benchmark</strong>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div>• ≥0.70 for general use cases</div>
              <div>• ≥0.85 for high-stakes applications</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Example</strong>
            </div>
            <div style={{ fontSize: '0.9rem' }}>
              <strong>Query:</strong> "What are the eligibility requirements for program X?"<br/>
              Reference answer requires 5 key facts about eligibility<br/>
              Retrieved context contains only 4 of these facts<br/>
              <strong style={{ color: '#8b5cf6' }}>Context Overlap Score = 4/5 = 0.80</strong>
            </div>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-arrow-trend-up" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Impact on RAG</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Higher overlap boosts faithfulness and completeness by ensuring necessary evidence is retrieved</li>
              <li>Reduces need for LLM to "fill gaps" with potentially incorrect information</li>
              <li>Identifies specific content gaps in knowledge bases</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'Context Overlap Score - answer coverage in retrieved context'
        }
      ]
    },
    {
      id: 'metric-5',
      title: '5. Context Relevance Score (LLM-Scored)',
      slides: [
        {
          id: 7,
          title: '5. Context Relevance Score (LLM-Scored)',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Goal / What It Measures</strong>
              </div>
              <div>LLM-as-judge score of how relevant the retrieved chunks are to the query, measuring the quality of retrieval context alignment to user information needs.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-calculator" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>How to Calculate</strong>
              </div>
              <div style={{ fontSize: '0.9rem' }}>
                Context Relevance = mean(score_i)
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  • LLM judges each chunk's relevance on 0-1 scale<br/>
                  • Optional: Weight by chunk length<br/>
                  • Compute mean across all retrieved chunks
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>When ground truth relevance labels are unavailable</li>
              <li>For online monitoring of production RAG systems</li>
              <li>During A/B testing of retrieval approaches</li>
              <li>To evaluate quality without human annotation effort</li>
            </ul>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-chart-bar" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Target / Good Value Benchmark</strong>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div>• ≥0.70 considered good performance</div>
              <div>• ≥0.80 indicates strong retrieval alignment</div>
              <div>• &lt;0.50 often signals problematic retrieval</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Example</strong>
            </div>
            <div style={{ fontSize: '0.9rem' }}>
              <strong>Query:</strong> "How do I reset my account password?"<br/>
              LLM relevance scores for 3 retrieved chunks:<br/>
              • Chunk 1 (password reset): 0.9<br/>
              • Chunk 2 (account security): 0.8<br/>
              • Chunk 3 (billing info): 0.3<br/>
              <strong style={{ color: '#8b5cf6' }}>Context Relevance = (0.9 + 0.8 + 0.3) / 3 = 0.67</strong>
            </div>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-arrow-trend-up" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Impact on RAG</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Improves precision by identifying and removing irrelevant context</li>
              <li>Reduces hallucinations caused by misleading information</li>
              <li>Enables continuous monitoring without reference answers</li>
              <li>Helps identify specific queries with poor retrieval performance</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'Context Relevance Score - LLM-judged quality of retrieved context'
        }
      ]
    },
    {
      id: 'metric-6',
      title: '6. Hallucination Rate',
      slides: [
        {
          id: 8,
          title: '6. Hallucination Rate',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Goal / What It Measures</strong>
              </div>
              <div>Measures the frequency of unsupported or invented claims in generated answers that cannot be traced back to the retrieved context.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-calculator" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>How to Calculate</strong>
              </div>
              <div style={{ fontSize: '0.9rem' }}>
                HallucinationRate = 1 - Faithfulness<br/>
                = (# unsupported claims) / (# total claims)
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  • Extract all factual claims from answer<br/>
                  • Check each against retrieved context<br/>
                  • Count unsupported claims
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>As a primary generation quality guardrail</li>
              <li>During regression testing before deployment</li>
              <li>For continuous production monitoring</li>
              <li>When safety and accuracy are mission-critical</li>
            </ul>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-chart-bar" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Target / Good Value Benchmark</strong>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div>• &lt;5% for high-stakes applications (medical, legal, financial)</div>
              <div>• &lt;10-15% for general-purpose applications</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Example</strong>
            </div>
            <div style={{ fontSize: '0.9rem' }}>
              Answer contains 12 factual claims<br/>
              Context supports 10 claims<br/>
              Context doesn't support 2 claims (invented details)<br/>
              <strong style={{ color: '#ef4444' }}>Hallucination Rate = 2/12 = 16.7% (exceeds target)</strong>
            </div>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-arrow-trend-up" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Impact on RAG</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Lower hallucination rates directly increase trust in the system</li>
              <li>Reduces misinformation risk and potential legal/reputation damage</li>
              <li>Critical for safety-sensitive domains where incorrect information can cause harm</li>
              <li>Enables reliable citation of source materials</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'Hallucination Rate - frequency of unsupported claims'
        }
      ]
    },
    {
      id: 'metric-7',
      title: '7. Grounded Answer Score',
      slides: [
        {
          id: 9,
          title: '7. Grounded Answer Score',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Goal / What It Measures</strong>
              </div>
              <div>Measures whether answer cites retrieved facts correctly (especially in citation-enabled RAG systems that provide sources for their claims).</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-calculator" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>How to Calculate</strong>
              </div>
              <div style={{ fontSize: '0.9rem' }}>
                GAS = (# claims with correct citation) / (# total claims)
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  • Identify each claim in the answer<br/>
                  • For each claim with citation, verify cited span supports it<br/>
                  • Count correctly supported claims
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Systems that expose citations or links to sources</li>
              <li>Legal, medical, or financial applications requiring auditability</li>
              <li>Compliance-focused applications that need traceable evidence</li>
              <li>When building user interfaces that highlight source evidence</li>
            </ul>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-chart-bar" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Target / Good Value Benchmark</strong>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div>• ≥0.90 for general applications</div>
              <div>• ≥0.95 for strict domains (legal, medical, financial)</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Example</strong>
            </div>
            <div style={{ fontSize: '0.9rem' }}>
              <strong>Answer:</strong> "The medication has three primary side effects[1]. It may cause drowsiness[2], headaches[3], and in rare cases, dizziness[4]."<br/>
              • 10 total claims in the answer<br/>
              • 9 claims correctly cited (1 citation doesn't support its claim)<br/>
              <strong style={{ color: '#8b5cf6' }}>GAS = 9/10 = 0.90</strong>
            </div>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-arrow-trend-up" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Impact on RAG</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Encourages precise evidence use with traceable citations</li>
              <li>Improves user trust by making information verifiable</li>
              <li>Enables better debugging of hallucination sources</li>
              <li>Supports regulatory compliance with evidence requirements</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'Grounded Answer Score - correct citation of retrieved facts'
        }
      ]
    },
    {
      id: 'metric-8',
      title: '8. Faithfulness Score',
      slides: [
        {
          id: 10,
          title: '8. Faithfulness Score',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Goal / What It Measures</strong>
              </div>
              <div>Checks whether claims in the generated answer are fully supported by the retrieved context, ensuring factual consistency between response and evidence.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-calculator" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>How to Calculate</strong>
              </div>
              <div style={{ fontSize: '0.9rem' }}>
                Faithfulness = (# supported claims) / (# total claims)
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  • Extract individual claims from answer<br/>
                  • Check each claim against retrieved context<br/>
                  • Use RAGAS or HHEM-2.1-Open frameworks
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Core hallucination control metric for all RAG systems</li>
              <li>Pre-deployment quality assurance checks</li>
              <li>Continuous monitoring in production</li>
              <li>When legal or compliance risks exist from incorrect information</li>
            </ul>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-chart-bar" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Target / Good Value Benchmark</strong>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div>• ≥0.80 for general-purpose RAG applications</div>
              <div>• ≥0.90 for high-stakes domains (medical, legal, finance)</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Example</strong>
            </div>
            <div style={{ fontSize: '0.9rem' }}>
              <strong>Context:</strong> "Our return policy allows returns within 30 days with receipt. Damaged items cannot be returned."<br/>
              <strong>Answer:</strong> "You can return items within 30 days if you have the receipt. Damaged items aren't eligible. All returns receive store credit."<br/>
              Claims: 3 total (30-day policy, receipt required, store credit)<br/>
              Supported claims: 2 (last claim not supported)<br/>
              <strong style={{ color: '#8b5cf6' }}>Faithfulness = 2/3 = 0.67</strong>
            </div>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-arrow-trend-up" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Impact on RAG</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Higher faithfulness directly reduces hallucinations</li>
              <li>Improves factual accuracy and system trustworthiness</li>
              <li>Essential for detecting prompt/context misalignments</li>
              <li>Foundation for implementing safety guardrails</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'Faithfulness Score - answer supported by retrieved context'
        }
      ]
    },
    {
      id: 'metric-9',
      title: '9. Answer Completeness',
      slides: [
        {
          id: 11,
          title: '9. Answer Completeness',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Goal / What It Measures</strong>
              </div>
              <div>Measures whether the answer addresses all required parts of the query, especially for multi-part or complex questions.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-calculator" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>How to Calculate</strong>
              </div>
              <div style={{ fontSize: '0.9rem' }}>
                Completeness = (# required sub-answers present) / (# required)
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  • Can use reference decomposition or LLM judge checklist to identify parts
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>For multi-part questions with explicit sub-questions</li>
              <li>Enterprise support where complete responses are critical</li>
              <li>Analytics answers that must address multiple aspects</li>
              <li>When assessing response quality beyond mere factuality</li>
            </ul>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-chart-bar" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Target / Good Value Benchmark</strong>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div>• ≥0.85 typical for general applications</div>
              <div>• ≥0.95 for high-stakes domains (medical, legal, finance)</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Example</strong>
            </div>
            <div style={{ fontSize: '0.9rem' }}>
              <strong>Query:</strong> "What's the price, warranty length, and return policy for this product?"<br/>
              <strong>Answer:</strong> "The product costs $199 and comes with a 2-year warranty."<br/>
              Analysis: The answer addresses 2 of 3 required parts (missing return policy)<br/>
              <strong style={{ color: '#8b5cf6' }}>Completeness = 2/3 = 0.67</strong>
            </div>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-arrow-trend-up" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Impact on RAG</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Improves user satisfaction by addressing all query aspects</li>
              <li>Reduces follow-up queries and conversation turns</li>
              <li>When combined with faithfulness, ensures comprehensive and accurate responses</li>
              <li>Essential for establishing trust in expert domains</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'Answer Completeness - addresses all parts of query'
        }
      ]
    },
    {
      id: 'metric-10',
      title: '10. Answer Specificity',
      slides: [
        {
          id: 12,
          title: '10. Answer Specificity',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Goal / What It Measures</strong>
              </div>
              <div>Evaluates whether responses avoid vague or generic phrasing, instead providing concrete, actionable details that are specific to the query context.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-calculator" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>How to Calculate</strong>
              </div>
              <div style={{ fontSize: '0.9rem' }}>
                <strong>Option 1:</strong> LLM-judged specificity score [0-1]<br/>
                <strong>Option 2:</strong> Info-density = (# named entities + numbers) / answer tokens
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Product guidance where detailed steps matter</li>
              <li>Procedural or technical FAQs</li>
              <li>Analytics and data summary use cases</li>
              <li>When users need actionable rather than abstract advice</li>
            </ul>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-chart-bar" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Target / Good Value Benchmark</strong>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div>• ≥0.60 with faithfulness gate in place</div>
              <div>• ≥0.70 for domain-tuned systems</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Example</strong>
            </div>
            <div style={{ fontSize: '0.9rem' }}>
              <strong>Query:</strong> "How do I troubleshoot connection issues?"<br/>
              <strong style={{ color: '#ef4444' }}>Low Specificity:</strong> "Try checking your connection settings and restart if needed."<br/>
              <strong style={{ color: '#10b981' }}>High Specificity:</strong> "Open Settings &gt; Network &gt; WiFi, toggle WiFi off for 10 seconds, then reconnect to your 5GHz network. If error code E-4019 persists, update router firmware to v2.5+"
            </div>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-arrow-trend-up" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Impact on RAG</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Drives more useful, actionable outputs without sacrificing factuality</li>
              <li>Encourages models to fully utilize context details instead of generic responses</li>
              <li>Improves user satisfaction with concrete information</li>
              <li>Reduces follow-up questions seeking clarification</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'Answer Specificity - concrete vs vague responses'
        }
      ]
    },
    {
      id: 'metric-11',
      title: '11. Noise Density',
      slides: [
        {
          id: 13,
          title: '11. Noise Density',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Goal / What It Measures</strong>
              </div>
              <div>Measures the percentage of irrelevant tokens in retrieved context (context pollution) that contribute to prompt inefficiency.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-calculator" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>How to Calculate</strong>
              </div>
              <div style={{ fontSize: '0.9rem' }}>
                NoiseDensity = (Irrelevant tokens) / (Total context tokens)
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  • Per-chunk relevance × chunk length<br/>
                  • Token-level labeling via LLM or embedding
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>When working with long-context models</li>
              <li>During retrieval and reranking system tuning</li>
              <li>For optimizing cost and latency control</li>
              <li>When refining chunk sizes and boundaries</li>
            </ul>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-chart-bar" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Target / Good Value Benchmark</strong>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div>• &lt;20% for long context systems</div>
              <div>• &lt;30% for short context windows</div>
              <div>• &lt;15% for high-performing targeted domains</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Example</strong>
            </div>
            <div style={{ fontSize: '0.9rem' }}>
              Retrieved context: 3,000 tokens total<br/>
              Irrelevant tokens: 800 tokens (tangential information)<br/>
              <strong style={{ color: '#8b5cf6' }}>Noise Density = 800/3,000 = 26.7%</strong><br/>
              <em>This indicates moderate noise that could be improved through better retrieval or reranking.</em>
            </div>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-arrow-trend-up" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Impact on RAG</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Reduces distraction for the LLM by removing irrelevant context</li>
              <li>Lowers token costs and latency by minimizing context size</li>
              <li>Improves grounding probability by focusing LLM attention on relevant information</li>
              <li>Enables more efficient use of limited context windows</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'Noise Density - irrelevant token percentage'
        }
      ]
    },
    {
      id: 'metric-12',
      title: '12. Context Compression Efficiency',
      slides: [
        {
          id: 14,
          title: '12. Context Compression Efficiency',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Goal / What It Measures</strong>
              </div>
              <div>How compactly key information is expressed in the prompt while preserving coverage of essential information for answer generation.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-calculator" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>How to Calculate</strong>
              </div>
              <div style={{ fontSize: '0.9rem' }}>
                CCE = Coverage_τ / Tokens<br/>
                <strong>OR</strong><br/>
                Compute MinimalTokens achieving Coverage ≥ τ
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>When implementing context summarization/condensation</li>
              <li>During reranker pruning optimization</li>
              <li>For prompt engineering to reduce token usage</li>
              <li>When optimizing context-window usage in tight budget scenarios</li>
            </ul>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-chart-bar" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Target / Good Value Benchmark</strong>
            </div>
            <div>
              • Seek higher CCE vs. baseline<br/>
              • Typically aim for ≥20–40% token reduction at same coverage level<br/>
              • Compare different compression approaches against each other
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Example</strong>
            </div>
            <div style={{ fontSize: '0.9rem' }}>
              <strong>Baseline:</strong> 85% coverage achieved with 2,000 tokens<br/>
              <strong>Optimized:</strong> Same 85% coverage with only 1,200 tokens<br/>
              <strong style={{ color: '#8b5cf6' }}>Result: CCE improves by ~67% (compression ratio 1.67:1)</strong><br/>
              <strong>Impact:</strong> 40% token reduction without sacrificing information
            </div>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-arrow-trend-up" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Impact on RAG</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Maintains answer accuracy while significantly lowering token usage</li>
              <li>Reduces inference latency through smaller context windows</li>
              <li>Lowers operational costs for token-priced LLM APIs</li>
              <li>Enables more complex RAG architectures within the same context budget</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'Context Compression Efficiency - information density optimization'
        }
      ]
    },
    {
      id: 'metric-13',
      title: '13. Latency-Cost Tradeoff Score',
      slides: [
        {
          id: 15,
          title: '13. Latency-Cost Tradeoff Score',
          content: (
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
            <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#3b82f6', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-bullseye" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>Goal / What It Measures</strong>
              </div>
              <div>Overall efficiency of the RAG pipeline under latency and budget constraints, balancing performance with resource utilization.</div>
            </div>
            <div style={{ background: 'rgba(14, 165, 233, 0.15)', padding: '1rem', borderRadius: '8px' }}>
              <div style={{ color: '#0ea5e9', marginBottom: '0.5rem', fontSize: '1rem' }}>
                <SvgIcon iconName="duo-calculator" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                <strong>How to Calculate</strong>
              </div>
              <div style={{ fontSize: '0.85rem' }}>
                LCTS = 1 − [α·(p50 latency/latency budget) + (1−α)·(token cost/cost budget)]
                <div style={{ marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  α = weight parameter (0-1) for latency vs. cost importance
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>When to Use</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>When selecting LLM/embedding models or rerankers</li>
              <li>For tuning top-K retrieval parameters</li>
              <li>Optimizing batching, caching strategies</li>
              <li>During deployment sizing and scaling decisions</li>
              <li>For comparing system configurations under budget constraints</li>
            </ul>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(245, 158, 11, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#f59e0b', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-chart-bar" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Target / Good Value Benchmark</strong>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <div>• ≥0.70 is generally acceptable</div>
              <div>• ≥0.85 indicates strong performance</div>
            </div>
          </div>

          <div style={{ marginBottom: '1rem', background: 'rgba(139, 92, 246, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#8b5cf6', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Example</strong>
            </div>
            <div style={{ fontSize: '0.9rem' }}>
              <strong>Given:</strong><br/>
              • α = 0.6 (latency slightly more important than cost)<br/>
              • Latency use: 70% of budget (0.7)<br/>
              • Cost use: 50% of budget (0.5)<br/>
              <strong style={{ color: '#8b5cf6' }}>LCTS = 1 − [0.6·0.7 + 0.4·0.5] = 1 − [0.42 + 0.20] = 0.38</strong><br/>
              <em style={{ color: '#ef4444' }}>This indicates suboptimal performance that needs optimization.</em>
            </div>
          </div>

          <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1rem', borderRadius: '8px' }}>
            <div style={{ color: '#10b981', marginBottom: '0.5rem', fontSize: '1rem' }}>
              <SvgIcon iconName="duo-arrow-trend-up" sizeName="lg" style={iconStyle} darkModeInvert={true} />
              <strong>Impact on RAG</strong>
            </div>
            <ul style={{ marginLeft: '1.2rem', fontSize: '0.9rem', marginBottom: 0 }}>
              <li>Balances user experience responsiveness with operational costs</li>
              <li>Enables sustainable scaling of RAG systems to more users</li>
              <li>Provides framework for data-driven infrastructure decisions</li>
              <li>Helps identify optimization opportunities in the pipeline</li>
            </ul>
          </div>
        </div>
      ),
      notes: 'Latency-Cost Tradeoff Score - overall efficiency under constraints'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary & Next Steps',
      slides: [
        {
          id: 16,
          title: 'Summary & Next Steps',
          content: (
            <div style={{ fontSize: '0.95rem', lineHeight: '1.8', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.15)', padding: '1.5rem', borderRadius: '10px' }}>
                  <div style={{ color: '#3b82f6', marginBottom: '1rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-chart-line" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Key Takeaways</strong>
                  </div>
                  <ul style={{ marginLeft: '1.5rem', fontSize: '0.95rem', marginBottom: 0 }}>
                    <li style={{ marginBottom: '0.8rem' }}>
                      <SvgIcon iconName="duo-magnifying-glass" sizeName="sm" style={iconStyle} darkModeInvert={true} />
                      <strong>Retrieval metrics</strong> (1-4) diagnose missed evidence
                    </li>
                    <li style={{ marginBottom: '0.8rem' }}>
                      <SvgIcon iconName="duo-file-lines" sizeName="sm" style={iconStyle} darkModeInvert={true} />
                      <strong>Context quality</strong> (5) evaluates relevance alignment
                    </li>
                    <li style={{ marginBottom: '0.8rem' }}>
                      <SvgIcon iconName="duo-message" sizeName="sm" style={iconStyle} darkModeInvert={true} />
                      <strong>Answer quality</strong> (6-10) measures faithfulness & completeness
                    </li>
                    <li>
                      <SvgIcon iconName="duo-gauge-high" sizeName="sm" style={iconStyle} darkModeInvert={true} />
                      <strong>Efficiency metrics</strong> (11-13) optimize cost & latency
                    </li>
                  </ul>
                </div>

                <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '1.5rem', borderRadius: '10px' }}>
                  <div style={{ color: '#10b981', marginBottom: '1rem', fontSize: '1.2rem' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Best Practices</strong>
                  </div>
                  <ul style={{ marginLeft: '1.5rem', fontSize: '0.95rem', marginBottom: 0 }}>
                    <li style={{ marginBottom: '0.8rem' }}>
                      <SvgIcon iconName="duo-layer-group" sizeName="sm" style={iconStyle} darkModeInvert={true} />
                      Use multiple metrics together for full picture
                    </li>
                    <li style={{ marginBottom: '0.8rem' }}>
                      <SvgIcon iconName="duo-chart-bar" sizeName="sm" style={iconStyle} darkModeInvert={true} />
                      Start with retrieval & faithfulness baselines
                    </li>
                    <li style={{ marginBottom: '0.8rem' }}>
                      <SvgIcon iconName="duo-arrows-rotate" sizeName="sm" style={iconStyle} darkModeInvert={true} />
                      Continuously monitor in production
                    </li>
                    <li>
                      <SvgIcon iconName="duo-bullseye" sizeName="sm" style={iconStyle} darkModeInvert={true} />
                      Balance quality with efficiency constraints
                    </li>
                  </ul>
                </div>
              </div>

              <div style={{ background: 'rgba(139, 92, 246, 0.15)', padding: '1.5rem', borderRadius: '10px', marginBottom: '1.5rem' }}>
                <div style={{ color: '#8b5cf6', marginBottom: '1rem', fontSize: '1.2rem' }}>
                  <SvgIcon iconName="duo-rocket" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  <strong>Implementation Roadmap</strong>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem', fontSize: '0.95rem' }}>
                  <div style={{ background: 'rgba(59, 130, 246, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      <SvgIcon iconName="duo-1" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      Phase 1: Foundation
                    </div>
                    <div>Implement Recall@K, Precision@K, and Faithfulness Score</div>
                  </div>
                  <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      <SvgIcon iconName="duo-2" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      Phase 2: Quality
                    </div>
                    <div>Add Context Relevance, Answer Completeness, and Hallucination Rate</div>
                  </div>
                  <div style={{ background: 'rgba(245, 158, 11, 0.2)', padding: '1rem', borderRadius: '8px' }}>
                    <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      <SvgIcon iconName="duo-3" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      Phase 3: Optimization
                    </div>
                    <div>Track Noise Density, Context Compression, and Latency-Cost Tradeoff</div>
                  </div>
                </div>
              </div>

              <div style={{ padding: '1.5rem', background: 'rgba(245, 158, 11, 0.15)', borderRadius: '10px', textAlign: 'left' }}>
                <SvgIcon iconName="duo-circle-info" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                <strong style={{ fontSize: '1.1rem' }}>Remember:</strong> No single metric tells the full story. Use combinations to diagnose root causes: missed retrieval vs. ungrounded reasoning vs. inefficient context.
              </div>
            </div>
      ),
      notes: 'Summary slide with key takeaways, best practices, and implementation roadmap'
        }
      ]
    }
  ]
};

