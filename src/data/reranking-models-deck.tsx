import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const rerankingModelsDeck: Deck = {
  id: 'reranking-models-deck',
  name: '11 Re-Ranking Models to Improve RAG Accuracy',
  description: 'Practical patterns, trade-offs, and examples to boost precision in Retrieval-Augmented Generation',
  category: 'RAG',
  theme: 'night',
  slides: [],
  slideGroups: [
    {
      id: 'introduction',
      title: 'Introduction',
      slides: [
    {
      id: 1,
      center: true,
      title: '11 Re-Ranking Models to Improve RAG Accuracy',
      content: (
        <div>
          <p style={{ fontSize: '1em', marginTop: '10px' }}>
            Practical patterns, trade-offs, and examples to boost precision in Retrieval-Augmented Generation
          </p>
          <div style={{ marginTop: '20px', display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ padding: '20px 30px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <SvgIcon iconName="duo-magnifying-glass" sizeName="3x" darkModeInvert={true} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '2rem' }}>Retrieve</div>
              </div>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} />
            <div style={{ padding: '20px 30px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="3x" darkModeInvert={true} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '2rem' }}>Re-Rank</div>
              </div>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} />
            <div style={{ padding: '20px 30px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="3x" darkModeInvert={true} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '2rem' }}>Generate</div>
              </div>
            </div>
          </div>
          <p><strong>Prepared by:</strong> Nisar A</p>
              <p><strong>Date:</strong> November 7, 2025</p>
              <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
        </div>
      ),
      backgroundColor: '#1f3263',
      notes: ''
    },
    {
      id: 2,
      title: 'Why Re-Ranking in RAG?',
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
          <div style={{ marginBottom: '30px' }}>
          </div>
          <h2 style={{ textAlign: 'left', marginBottom: '25px', alignItems: 'center' }}>
            <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ marginRight: '10px', verticalAlign: 'middle' }} darkModeInvert={true} />
            Why Re-Ranking Matters
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginBottom: '30px', marginTop: '30px' }}>
            <div style={{ padding: '15px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '8px' }}>
              <h3 style={{ color: '#4fc3f7', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '2rem' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="2x" darkModeInvert={true} />
                Two-Stage Architecture
              </h3>
              <div style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>
                <p><strong>Stage 1 (Recall):</strong> Cast a wide net</p>
                <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
                  <li>BM25 / bi-encoder / hybrid retrieval</li>
                  <li>Optimized for speed and coverage</li>
                  <li>May include semantically similar but less relevant results</li>
                </ul>
                <p style={{ marginTop: '10px' }}><strong>Stage 2 (Precision):</strong> Filter the signal from noise</p>
                <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
                  <li>Cross-encoders, late interaction, fusion methods</li>
                  <li>Deeper semantic analysis of query-document pairs</li>
                  <li>Ensures LLM works with truly relevant context</li>
                </ul>
              </div>
            </div>
            <div style={{ padding: '15px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px' }}>
              <h3 style={{ color: '#81c784', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '2rem' }}>
                <SvgIcon iconName="duo-chart-line" sizeName="2x" darkModeInvert={true} />
                Key Benefits
              </h3>
              <ul style={{ fontSize: '1.2rem', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li><strong>Filters noisy candidates:</strong> Improves grounding and reduces hallucinations</li>
                <li><strong>Optimal flow:</strong> Retrieve 20-50 → Re-rank to top 5-10 for the LLM</li>
                <li><strong>ROI:</strong> +200-500 ms latency often yields 20-35% precision gains</li>
              </ul>
              <div style={{ marginTop: '15px', padding: '12px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '5px' }}>
                <p style={{ fontSize: '2rem' }}>
                  <strong>Quality Impact:</strong>
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '8px' }}>
                  <div>
                    <div style={{ fontSize: '1.2rem' }}>Initial Retrieval</div>
                    <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#ffb74d' }}>65-80% relevant</div>
                  </div>
                  <div style={{ fontSize: '1.5em', color: '#4fc3f7' }}>→</div>
                  <div>
                    <div style={{ fontSize: '1.2rem' }}>After Re-Ranking</div>
                    <div style={{ fontSize: '1rem', fontWeight: 'bold', color: '#81c784' }}>85-95% relevant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.15)', borderRadius: '8px', textAlign: 'left' }}>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '8px', color: '#ba68c8' }} darkModeInvert={true} />
              <p style={{ fontSize: '1rem', margin: '0px' }}>
                <strong>Without re-ranking,</strong> RAG systems often fail not because of poor embeddings or weak LLMs, 
                but because they feed <strong>irrelevant information</strong> to the generation stage.
              </p>
            </p>
          </div>
        </div>
      ),
      backgroundColor: '#1f3263',
      notes: ''
    }
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
    {
      id: 3,
      title: '1) Cross-Encoder Ranker (MS MARCO family)',
      icon: { name: 'duo-brain-circuit' },
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
          <div style={{ marginBottom: '30px' }}>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
              <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Goal / What It Solves:</span></strong></p>
              <p style={{ fontSize: '1.2rem', margin: '0px' }}>Maximizes precision through deep query-document understanding, overcoming the limitations of independent embedding comparisons.</p>
            </div>
            <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
              <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>How It Works:</span></strong></p>
              <p style={{ fontSize: '1.2rem', margin: '0px' }}>Concatenate [CLS] query [SEP] doc → transformer → single relevance score. Understands semantic relationships between queries and documents.</p>
            </div>
            <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
              <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>When to Use:</span></strong></p>
              <ul style={{ fontSize: '1.2rem', lineHeight: '1.4' }}>
                <li>Precision-critical tasks where accuracy trumps speed</li>
                <li>When working with short to medium-length passages</li>
                <li>For ambiguous or complex queries needing contextual understanding</li>
                <li>Second-stage ranking (after initial retrieval)</li>
                <li>When GPU resources are available</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
              <p style={{ margin: '0px' }}><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-code" sizeName="2x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px', fontSize: '2rem' }}>Input / Output Format:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Input: Pairs of query and document texts</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`pairs = [
  [query, document_1], 
  [query, document_2],
  ...
]`}
              </pre>
              <p style={{ marginTop: '5px', fontSize: '1.2rem' }}>Output: Relevance scores between 0 and 1 for each pair</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`scores = [0.92, 0.45, ...]  # Higher = more relevant`}
              </pre>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#0f3460',
      notes: ''
    },
    {
      id: 4,
      title: 'Example',
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
          <div style={{ marginBottom: '30px' }}>
          </div>
          <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
            <p style={{ fontSize: '2rem' }}><strong>Example: Password Reset Query</strong></p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '1.2rem' }}>
              <div>
                <p style={{ margin: '0px' }}><strong>Query:</strong> "Reset password steps?"</p>
                <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                <ul style={{ paddingLeft: '18px', lineHeight: '1.4', }}>
                  <li>A) Billing policy</li>
                  <li>B) Account reset guide</li>
                  <li>C) Login tips</li>
                </ul>
              </div>
              <div>
                <p><strong>Ranking:</strong></p>
                <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>0.95 → B) Account reset guide</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>0.62 → C) Login tips</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>0.21 → A) Billing policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#0f3460',
      notes: ''
    },
    {
      id: 5,
      title: 'Strength and Limitations',
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem' }}>
          <div style={{ marginBottom: '30px' }}>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}><SvgIcon iconName="duo-circle-check" sizeName="2x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              <p>Accuracy Contextual Robust</p>
              <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Best accuracy among classical rerankers (20-35% over bi-encoders)</li>
                <li>Understands semantic relationships beyond keyword similarity</li>
                <li>Fine-grained relevance scoring (0-1 scale)</li>
                <li>Well-studied with many pre-trained models available</li>
              </ul>
            </div>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '2rem' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="2x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              <p>Latency Scaling Resources</p>
              <ul style={{ fontSize: '1.2rem', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Higher latency: O(k·L) where k = # docs, L = sequence length</li>
                <li>Not suitable for first-stage retrieval of large corpora</li>
                <li>Typically limited to reranking top-50 documents</li>
                <li>GPU recommended for production use</li>
                <li>512 token limit in many models (can truncate documents)</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#0f3460',
      notes: ''
    }
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
    {
      id: 4,
      title: '2) BERT-based Cross Encoder (ms-marco-MiniLM-L-6-v2)',
      icon: { name: 'duo-gauge-high' },
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Goal:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Provides cross-encoder accuracy with a lighter, faster model for practical deployment:</p>
              <ul>
                <li>Balance between semantic understanding and computational efficiency</li>
                <li>Production-ready reranking without heavy GPU requirements</li>
                <li>Improved latency while maintaining competitive accuracy</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>How It Works:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Knowledge distillation from larger BERT models into compact architecture:</p>
              <ul>
                <li>Uses MiniLM/DistilBERT techniques to compress model while preserving ranking capabilities</li>
                <li>Fine-tuned specifically on MS MARCO passage ranking dataset (8.8M query-passage pairs)</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>When to Use:</span></strong></p>
              <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '0.9em', lineHeight: '1.4' }}>
                <li>When deployment efficiency and response time matter</li>
                <li>For English-centric search applications</li>
                <li>In production systems with moderate hardware</li>
                <li>When reranking 20-100 candidates efficiently</li>
                <li>As default starting point for most RAG pipelines</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-code" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>Input / Output Format:</span></strong></p>
              <p>Input: Query-document pairs (same as standard cross-encoders)</p>
              <pre style={{ marginTop: '5px', fontSize: '0.75em', background: 'rgba(0,0,0,0.3)', padding: '6px', borderRadius: '3px', overflow: 'auto' }}>
{`from sentence_transformers import CrossEncoder

model = CrossEncoder('cross-encoder/ms-marco-MiniLM-L-6-v2')
pairs = [
  ["diabetic medication", "Article about insulin..."],
  ["diabetic medication", "New glucose monitors..."]
]
`}
              </pre>
              <p>Output: Calibrated relevance scores</p>
              <pre style={{ marginTop: '5px', fontSize: '0.75em', background: 'rgba(0,0,0,0.3)', padding: '6px', borderRadius: '3px', overflow: 'auto' }}>
{`scores = model.predict(pairs)
# [0.87, 0.65]  # Higher = more relevant`}
              </pre>
            </div>
          </div>
          <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
            <p style={{ fontSize: '0.9em', marginBottom: '8px' }}><strong>Example: Medical Query</strong></p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85em' }}>
              <div>
                <p><strong>Query:</strong> "Side effects of ACE inhibitors in diabetics?"</p>
                <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                  <li>A) General diabetes treatment overview</li>
                  <li>B) ACE inhibitor adverse effects in diabetic patients</li>
                  <li>C) Hypertension medication guidelines</li>
                </ul>
              </div>
              <div>
                <p><strong>Ranking:</strong></p>
                <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>0.89 → B) ACE inhibitor adverse effects in diabetic patients</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>0.41 → A) General diabetes treatment overview</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>0.32 → C) Hypertension medication guidelines</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              <p>Efficient Practical Low Footprint</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>2-4x faster than full BERT cross-encoders</li>
                <li>Only 90MB model size (vs. 440MB+ for base BERT)</li>
                <li>Works well on CPU for moderate throughput</li>
                <li>Strong performance on standard benchmarks (87% of full model accuracy)</li>
                <li>Widely available in libraries like sentence-transformers</li>
              </ul>
            </div>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              <p>English-centric Truncation Specialized</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Primarily trained on English MS MARCO dataset</li>
                <li>512 token truncation limits long document scoring</li>
                <li>Still slower than pure bi-encoders (1-3 orders of magnitude)</li>
                <li>Less effective on domains far from web search (e.g., code, legal)</li>
                <li>Lower accuracy than full-sized cross-encoders in complex reasoning</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1a1a2e',
      notes: 'Model 2: Distilled model for practical deployment'
    }
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
    {
      id: 5,
      title: '3) MonoT5 Re-Ranker',
      icon: { name: 'duo-brain' },
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Goal:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>High-accuracy pointwise generative reranking approach that frames relevance as a text generation problem.</p>
              <ul>
                <li>Provides superior accuracy through generative assessment</li>
                <li>Offers strong zero-shot and few-shot capabilities</li>
                <li>Better handles complex semantic relationships than classification-only models</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>How It Works:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>T5 encoder-decoder predicts "true" or "false" tokens for relevance. Higher P("true") = Higher relevance score.</p>
              <p>Key mechanism: Convert relevance judgment into a text generation task, predicting "true" or "false" tokens</p>
            </div>
            <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>When to Use:</span></strong></p>
              <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '0.9em', lineHeight: '1.4' }}>
                <li>Web search and QA datasets where accuracy is paramount</li>
                <li>When higher latency is acceptable for better precision</li>
                <li>For transfer learning across domains (zero/few-shot)</li>
                <li>Complex information needs requiring strong reasoning</li>
                <li>When GPU resources are available for inference</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-code" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>Input / Output Format:</span></strong></p>
              <p>Input: Formatted text prompt combining query and document</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`prompt = f"Query: {query} Document: {document} Relevant?"`}
              </pre>
              <p>Output: Probability of generating "true" token as relevance score</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`score = model.predict(prompt)  
# Higher probability of "true" = higher relevance`}
              </pre>
            </div>
          </div>
          <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
            <p style={{ fontSize: '0.9em', marginBottom: '8px' }}><strong>Example: RAG Query</strong></p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85em' }}>
              <div>
                <p><strong>Query:</strong> "What is FiD in RAG?"</p>
                <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                  <li>A) Fusion-in-Decoder definition</li>
                  <li>B) Generic RAG overview</li>
                  <li>C) Document retrieval methods</li>
                </ul>
              </div>
              <div>
                <p><strong>Ranking:</strong></p>
                <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>0.91 → A) Fusion-in-Decoder definition</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>0.57 → B) Generic RAG overview</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>0.23 → C) Document retrieval methods</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              <p>Top Accuracy Flexible Zero-shot</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Excellent accuracy, often outperforming BERT-based rankers</li>
                <li>Strong transfer learning to new domains</li>
                <li>Flexible prompting allows adapting to different tasks</li>
                <li>T5's encoder-decoder architecture enables better understanding</li>
                <li>Works with standard huggingface/transformers library</li>
              </ul>
            </div>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              <p>Latency Resources Cost</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Higher latency due to encoder-decoder architecture</li>
                <li>Larger models (up to billions of parameters)</li>
                <li>More computationally expensive than BERT-based models</li>
                <li>Requires significant GPU memory for larger versions</li>
                <li>Higher inference cost in production environments</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16213e',
      notes: 'Model 3: T5-based generative reranking'
    }
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
    {
      id: 6,
      title: '4) MonoBERT Re-Ranker',
      icon: { name: 'duo-copy' },
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Goal:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Strong transformer-based reranking without the complexity and overhead of encoder-decoder architectures.</p>
              <ul>
                <li>Provides efficient relevance scoring for passages</li>
                <li>Offers semantic understanding beyond keyword matching</li>
                <li>Balances accuracy and computational efficiency</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>How It Works:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Uses BERT architecture with a classification head to output relevance scores:</p>
              <ul>
                <li>Single-pass pointwise scoring for query-document pairs</li>
              </ul>
              <p>Key mechanism: [CLS] query [SEP] document [SEP] → BERT → classification head → relevance score</p>
            </div>
            <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>When to Use:</span></strong></p>
              <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '0.9em', lineHeight: '1.4' }}>
                <li>Classic Information Retrieval (IR) pipelines</li>
                <li>When you have medium latency budgets</li>
                <li>Primarily for English-language corpora</li>
                <li>When you need better semantic understanding than BM25</li>
                <li>As a reranking step after initial retrieval</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-code" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>Input / Output Format:</span></strong></p>
              <p>Input: Query and document pairs as text</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`inputs = {
  "query": "TLS vs mTLS security",
  "documents": ["doc1_text", "doc2_text", ...] 
}`}
              </pre>
              <p>Output: Relevance scores or binary classifications (relevant/not relevant)</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`scores = [0.87, 0.42, ...]  # Higher = more relevant`}
              </pre>
            </div>
          </div>
          <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
            <p style={{ fontSize: '0.9em', marginBottom: '8px' }}><strong>Example:</strong></p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85em' }}>
              <div>
                <p><strong>Query:</strong> "TLS vs mTLS"</p>
                <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                  <li>A) Basic TLS overview</li>
                  <li>B) Client authentication in mTLS</li>
                  <li>C) General network security</li>
                </ul>
              </div>
              <div>
                <p><strong>Ranking:</strong></p>
                <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>0.89 → B) Client authentication in mTLS</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>0.56 → A) Basic TLS overview</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>0.32 → C) General network security</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              <p>Reliable Available Established</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Solid accuracy above traditional retrieval methods</li>
                <li>Widely available pre-trained checkpoints</li>
                <li>Well-tested in production environments</li>
                <li>Good baseline model for reranking tasks</li>
                <li>Simpler to deploy than encoder-decoder models</li>
              </ul>
            </div>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              <p>Speed Length Domain</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Slower than MiniLM and other distilled variants</li>
                <li>Limited by BERT's 512 token truncation</li>
                <li>Performance degrades with domain shift</li>
                <li>Lower accuracy than more recent models (MonoT5, ColBERT)</li>
                <li>Less effective for multi-hop or complex reasoning</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16213e',
      notes: 'Model 3: T5-based generative reranking'
    },
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
    {
      id: 7,
      title: '5) ColBERT / ColBERTv2 (Late Interaction)',
      icon: { name: 'duo-graduation-cap' },
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Goal:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Provides precise token-level matching between queries and documents while maintaining efficiency and scalability.</p>
              <ul>
                <li>Balances deep semantic understanding with computational efficiency</li>
                <li>Preserves term-specific representations instead of single-vector compression</li>
                <li>Enables fine-grained contextual matching across tokens</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>How It Works:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Employs late interaction pattern: encodes queries and documents independently, but performs fine-grained token-level matching.</p>
              <p>Key mechanism: MaxSim operation matches each query token to its most similar document token, then aggregates scores</p>
            </div>
            <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>When to Use:</span></strong></p>
              <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '0.9em', lineHeight: '1.4' }}>
                <li>When term-by-term alignment is important (technical/medical content)</li>
                <li>For long documents where specific sections may be relevant</li>
                <li>When you need balance between efficiency and deep matching</li>
                <li>Systems requiring both scalable indexing and high-precision ranking</li>
                <li>When handling complex, multi-term queries with specific terminology</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-code" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>Input / Output Format:</span></strong></p>
              <p>Input: Query tokens and document tokens (as separate embeddings)</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`query_embeddings = model.encode_query(query)  # [Q tokens × dim]
doc_embeddings = model.encode_doc(document)    # [D tokens × dim]`}
              </pre>
              <p>Output: MaxSim-based relevance score from token interactions</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`score = colbert.score(query_embeddings, doc_embeddings)  # Scalar score`}
              </pre>
            </div>
          </div>
          <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
            <p style={{ fontSize: '0.9em', marginBottom: '8px' }}><strong>Example:</strong></p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85em' }}>
              <div>
                <p><strong>Query:</strong> "Rotate S3 access keys safely"</p>
                <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                  <li>A) AWS general overview</li>
                  <li>B) S3 policy documentation</li>
                  <li>C) S3 key rotation procedure</li>
                </ul>
              </div>
              <div>
                <p><strong>Ranking:</strong></p>
                <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>0.89 → C) S3 key rotation procedure</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>0.56 → B) S3 policy documentation</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>0.32 → A) AWS general overview</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              <p>Precision Efficiency Scalable</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Token-level matching captures nuanced relevance signals</li>
                <li>Maintains efficiency of separate encoding with accuracy of cross-attention</li>
                <li>Indexes can be compressed and queried with ANN techniques</li>
                <li>Flexible scoring allows for detailed similarity analysis</li>
                <li>ColBERTv2 adds significant storage and query efficiency improvements</li>
              </ul>
            </div>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              <p>Complexity Storage Setup</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>More complex to implement than standard bi/cross encoders</li>
                <li>Higher storage requirements than single-vector models</li>
                <li>Requires specialized indexing infrastructure</li>
                <li>MaxSim operation has higher computational cost than simple dot products</li>
                <li>Not as widely supported in off-the-shelf RAG frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16213e',
      notes: 'Model 3: T5-based generative reranking'
    }
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
    {
      id: 8,
      title: '6) E5-Ranker (e.g., intfloat/e5-mistral) as Bi-Encoder Re-Rank',
      icon: { name: 'duo-brain-circuit' },
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Goal:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Enables fast and efficient rescoring of documents using strong sentence embeddings while maintaining reasonable accuracy.</p>
              <ul>
                <li>Provides efficient alternative to computationally intensive cross-encoders</li>
                <li>Balances speed and accuracy for high-throughput applications</li>
                <li>Supports multilingual reranking (depending on checkpoint)</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>How It Works:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Processes query and documents separately with same encoder, then computes similarity.</p>
              <p>Key mechanism: Encode query_emb and doc_emb independently → compute cosine similarity → rerank top-K</p>
            </div>
            <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>When to Use:</span></strong></p>
              <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '0.9em', lineHeight: '1.4' }}>
                <li>Low-latency applications where speed is critical</li>
                <li>CPU-only environments without GPU acceleration</li>
                <li>High-throughput systems requiring efficient scaling</li>
                <li>Multilingual applications (especially with e5-mistral variants)</li>
                <li>When cross-encoder latency is prohibitive</li>
                <li>For initial rescoring before applying heavier models</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-code" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>Input / Output Format:</span></strong></p>
              <p>Input: Query and document texts processed separately</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`// Encode separately
query_emb = model.encode(query)
doc_embs = [model.encode(doc) for doc in documents]

// Compute similarity
scores = [cosine_similarity(query_emb, doc_emb) 
          for doc_emb in doc_embs]`}
              </pre>
              <p>Output: Similarity scores between -1 and 1 (typically normalized to 0-1)</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`scores = [0.87, 0.65, 0.42, ...]  # Higher = more relevant`}
              </pre>
            </div>
          </div>
          <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
            <p style={{ fontSize: '0.9em', marginBottom: '8px' }}><strong>Example:</strong></p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85em' }}>
              <div>
                <p><strong>Query:</strong> "GDPR data deletion timeline"</p>
                <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                  <li>A) Generic GDPR compliance article</li>
                  <li>B) Data retention policy document</li>
                  <li>C) Article with explicit 30-day deletion window</li>
                </ul>
              </div>
              <div>
                <p><strong>Ranking:</strong></p>
                <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>0.89 → C) Article with explicit 30-day deletion window</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>0.72 → B) Data retention policy document</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>0.64 → A) Generic GDPR compliance article</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              <p>Speed Efficiency Scalable Multilingual</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Very fast compared to cross-encoders (5-20x speedup)</li>
                <li>Works well on CPUs without requiring GPU acceleration</li>
                <li>Efficient for high-volume production systems</li>
                <li>Document embeddings can be pre-computed and cached</li>
                <li>Strong multilingual performance with mistral variants</li>
              </ul>
            </div>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              <p>Precision Reasoning Context</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Lower precision than cross-encoders (10-15% accuracy gap)</li>
                <li>Limited reasoning about relationships between query and document</li>
                <li>Information loss from compressing documents into single vectors</li>
                <li>May miss nuanced relevance that requires joint processing</li>
                <li>Domain-specific performance may require fine-tuning</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16213e',
      notes: 'Model 3: T5-based generative reranking'
    }
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
    {
      id: 9,
      title: '7) LLM-as-a-Ranker (RankGPT-style)',
      icon: { name: 'duo-rocket' },
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Goal:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Leverages large language models' reasoning capabilities to perform sophisticated relevance ranking beyond traditional re-rankers.</p>
              <ul>
                <li>Handles complex, multi-criteria document evaluation</li>
                <li>Performs listwise ranking rather than just pairwise comparisons</li>
                <li>Zero-shot adaptation to new domains without retraining</li>
                <li>Combines semantic understanding with world knowledge</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>How It Works:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Uses a large language model's reasoning abilities to evaluate and rank document relevance.</p>
              <p>Key mechanism: Prompt LLM to compare documents → reason about relevance → output ordered ranking</p>
            </div>
            <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>When to Use:</span></strong></p>
              <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '0.9em', lineHeight: '1.4' }}>
                <li>High-stakes QA applications where accuracy trumps cost</li>
                <li>For ambiguous or multi-hop queries requiring reasoning</li>
                <li>When dealing with new domains without training data</li>
                <li>For complex relevance criteria (freshness, authority, specificity)</li>
                <li>When processing latency isn't a critical constraint</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-code" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>Input / Output Format:</span></strong></p>
              <p>Input: Query and numbered documents list in a prompt</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`prompt = f"""
Rank these passages based on relevance to query: 
"{query}"

[1] {document_1}
[2] {document_2}
...
Return ranking as: [3, 1, 2, ...]
"""`}
              </pre>
              <p>Output: Ordered list of document IDs based on relevance</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`[3, 1, 5, 2, 4]  # Most to least relevant`}
              </pre>
            </div>
          </div>
          <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
            <p style={{ fontSize: '0.9em', marginBottom: '8px' }}><strong>Example:</strong></p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85em' }}>
              <div>
                <p><strong>Query:</strong> "Pros/cons of eventual consistency for checkout systems?"</p>
                <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                  <li>A) General database concepts</li>
                  <li>B) E-commerce design patterns</li>
                  <li>C) System design with consistency trade-offs</li>
                </ul>
                <p style={{ marginTop: '5px' }}><strong>LLM reasoning:</strong></p>
                <p>"Doc C directly addresses consistency trade-offs in systems. Doc B covers e-commerce patterns which may include checkout. Doc A is too general."</p>
              </div>
              <div>
                <p><strong>Ranking:</strong></p>
                <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>1st → C) System design with consistency trade-offs</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>2nd → B) E-commerce design patterns</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>3rd → A) General database concepts</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              <p>Reasoning Zero-shot Adaptable Multilingual</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Superior reasoning about complex relevance criteria</li>
                <li>Excellent zero-shot performance without task-specific training</li>
                <li>Adaptable to changing ranking requirements via prompting</li>
                <li>Strong cross-lingual capabilities</li>
                <li>Can explain ranking decisions (interpretability)</li>
              </ul>
            </div>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              <p>Cost Latency Scaling</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Highest cost among re-ranking approaches (10-50x more expensive)</li>
                <li>High latency (1-5 seconds per query)</li>
                <li>Prompt engineering sensitivity and potential inconsistency</li>
                <li>API rate limits for hosted models</li>
                <li>Limited scale for high-throughput systems</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16213e',
      notes: 'Model 3: T5-based generative reranking'
    }
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
    {
      id: 10,
      title: '8) RRF (Reciprocal Rank Fusion)',
      icon: { name: 'duo-list-ol' },
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Goal:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Combines multiple ranking signals into a single, unified ranking without requiring relevance scores or training.</p>
              <ul>
                <li>Effectively merges results from diverse retrieval methods (BM25, dense, etc.)</li>
                <li>Creates robust rankings that benefit from the strengths of each underlying system</li>
                <li>Improves overall ranking quality without adding new models</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>How It Works:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Uses a simple yet effective formula to combine rankings based on document positions:</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`RRF(d) = Σ₍ᵣ∈R₎ 1 / (k + rankᵣ(d))`}
              </pre>
              <p style={{ marginTop: '5px' }}><strong>Where:</strong></p>
              <ul>
                <li>d = document being ranked</li>
                <li>R = set of ranking systems being fused</li>
                <li>k = constant (typically 60) to manage highly ranked items</li>
                <li>rankr(d) = position of document d in ranker r</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>When to Use:</span></strong></p>
              <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '0.9em', lineHeight: '1.4' }}>
                <li>When combining multiple retrieval methods (e.g., BM25 + neural)</li>
                <li>For heterogeneous document collections with varying characteristics</li>
                <li>As a simple baseline before implementing more complex re-rankers</li>
                <li>For multilingual collections where different retrievers may excel</li>
                <li>To quickly improve existing systems without new model training</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-code" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>Input / Output Format:</span></strong></p>
              <p>Input: Multiple ranked lists of documents from different systems</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`ranker_1 = ["doc_A", "doc_C", "doc_B", ...]
ranker_2 = ["doc_B", "doc_A", "doc_D", ...]
ranker_3 = ["doc_A", "doc_E", "doc_B", ...]`}
              </pre>
              <p>Output: A single, fused ranking of documents</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`rrf_ranking = ["doc_A", "doc_B", "doc_C", ...]`}
              </pre>
            </div>
          </div>
          <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
            <p style={{ fontSize: '0.9em', marginBottom: '8px' }}><strong>Example:</strong></p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85em' }}>
              <div>
                <p><strong>Query:</strong> "Cloud storage security best practices"</p>
                <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                  <li>A) Security guide</li>
                  <li>B) General cloud info</li>
                  <li>C) Implementation steps</li>
                </ul>
                <p style={{ marginTop: '5px' }}><strong>RRF Ranks:</strong></p>
                <p>DocA &gt; DocB &gt; DocC</p>
                <p>DocA ranks highest despite not being #1 in most systems (balanced signals)</p>
              </div>
              <div>
                <p><strong>Ranking:</strong></p>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <div>
                    <p style={{ marginTop: '5px' }}><strong>BM25 Rank:</strong></p>
                    <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                      <li>DocA: 2</li>
                      <li>DocB: 1</li>
                      <li>DocC: 5</li>
                    </ul>
                  </div>
                  <div>
                     <p style={{ marginTop: '5px' }}><strong>Dense Rank:</strong></p>
                  <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                    <li>DocA: 3</li>
                    <li>DocB: 4</li>
                    <li>DocC: 1</li>
                  </ul>
                  </div>

                  <div>
                    <p style={{ marginTop: '5px' }}><strong>Hybrid Rank:</strong></p>
                  <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                    <li>DocA: 1</li>
                    <li>DocB: 3</li>
                    <li>DocC: 4</li>
                  </ul>
                  </div>

                  <div>
                    <p style={{ marginTop: '5px' }}><strong>RRF Score:</strong></p>
                  <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                    <li>DocA: 0.044</li>
                    <li>DocB: 0.038</li>
                    <li>DocC: 0.037</li>
                  </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              <p>Simple Fast Robust No Training</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Requires no training data or model optimization</li>
                <li>Lightweight computation (just basic math operations)</li>
                <li>Often outperforms individual rankers and complex methods</li>
                <li>Model-agnostic: works with any retrieval system</li>
                <li>Handles outliers gracefully: one bad ranker won't ruin results</li>
              </ul>
            </div>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              <p>No semantics Parameter k Quality ceiling</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>No semantic understanding (just combines existing rankings)</li>
                <li>Parameter k may need tuning for optimal performance</li>
                <li>Final quality depends on input rankers' quality</li>
                <li>May struggle with ambiguous queries where one system is clearly better</li>
                <li>Cannot leverage relevance scores, only ranks</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16213e',
      notes: 'Model 3: T5-based generative reranking'
    }
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
    {
      id: 11,
      title: '9) Fusion-in-Decoder (FiD) as Re-Rank/Fusion',
      icon: { name: 'duo-microchip' },
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Goal:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Enables more effective multi-document evidence fusion with a specialized encoder-decoder architecture that processes many documents simultaneously.</p>
              <ul>
                <li>Combines information from multiple passages in the decoder stage</li>
                <li>Improves answers requiring evidence from multiple sources</li>
                <li>Provides implicit document ranking through attention mechanisms</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>How It Works:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Uses a specialized fusion architecture for handling multiple documents.</p>
            </div>
            <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>When to Use:</span></strong></p>
              <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '0.9em', lineHeight: '1.4' }}>
                <li>Multi-hop question answering requiring facts from multiple documents</li>
                <li>Complex queries where information synthesis is needed</li>
                <li>When implicit document ranking/scoring is desired as a side effect</li>
                <li>End-to-end RAG systems where generation and ranking are combined</li>
                <li>When working with many short, potentially complementary passages</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-code" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>Input / Output Format:</span></strong></p>
              <p>Input: Query and multiple document passages</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`inputs = {
  "query": "Who founded X and what year?",
  "passages": [
    "John Smith founded...", 
    "Company X was established in 1995...",
    ...
  ]
}`}
              </pre>
              <p>Output: Generated answer and optional document salience scores</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`output = {
  "answer": "John Smith founded X in 1995",
  "doc_scores": [0.8, 0.7, 0.2, ...] # Optional
}`}
              </pre>
            </div>
          </div>
          <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
            <p style={{ fontSize: '0.9em', marginBottom: '8px' }}><strong>Example:</strong></p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85em' }}>
              <div>
                <p><strong>Query:</strong> "Who founded X and in what year?"</p>
                <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                  <li>A) "John Smith is credited as the founder of company X."</li>
                  <li>B) "Company X was formally established in 1995 in California."</li>
                </ul>
                <p style={{ marginTop: '5px' }}><strong>FiD Output:</strong></p>
                <p>Answer: "John Smith founded company X in 1995."</p>
              </div>
              <div>
                <p><strong>Ranking:</strong></p>
                <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>0.85 → A) Founder information</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>0.82 → B) Year information</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              <p>Fusion Multi-hop End-to-end</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Superior performance on complex multi-document QA tasks</li>
                <li>Efficiently handles many input passages simultaneously</li>
                <li>Implicitly ranks document importance through attention signals</li>
                <li>Single model handles both ranking and generation</li>
                <li>Can extract cross-document relationships and resolve conflicts</li>
              </ul>
            </div>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              <p>Resource Complexity Indirect</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Higher training and inference compute requirements</li>
                <li>Maximum context length limitations (typically 2048-8192 tokens)</li>
                <li>Re-ranking capabilities are indirect (extracted from attention)</li>
                <li>More complex to implement and train than pure rerankers</li>
                <li>Document scores may be less calibrated than dedicated rerankers</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16213e',
      notes: 'Model 3: T5-based generative reranking'
    }
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
    {
      id: 12,
      title: '10) DPR Re-Ranker (Dense Passage Retrieval)',
      icon: { name: 'duo-stream' },
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Goal:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Dense Passage Retrieval (DPR) as a re-ranker provides efficient semantic matching specifically optimized for question-answering tasks.</p>
              <ul>
                <li>Overcomes lexical matching limitations of traditional retrievers</li>
                <li>Enables fast semantic similarity scoring for candidate documents</li>
                <li>Bridges the gap between simple vector search and expensive cross-encoders</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>How It Works:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Uses a dual-encoder architecture fine-tuned on question-answer pairs.</p>
              <p>Key mechanism: Independent encoding → vector similarity → score-based reranking</p>
            </div>
            <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>When to Use:</span></strong></p>
              <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '0.9em', lineHeight: '1.4' }}>
                <li>Open-domain question answering systems</li>
                <li>Low-latency reranking after initial retrieval</li>
                <li>When domain knowledge can be incorporated via fine-tuning</li>
                <li>Production environments sensitive to computational costs</li>
                <li>When working with already-embedded document collections</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-code" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>Input / Output Format:</span></strong></p>
              <p>Input: Query embedding and passage embeddings</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`query_embedding = query_encoder(query)
passage_embeddings = [passage_encoder(p) for p in passages]

# For reranking
scores = []
for emb in passage_embeddings:
    score = cosine_similarity(query_embedding, emb)
    scores.append(score)`}
              </pre>
              <p>Output: Similarity scores for reranking passages</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`ranked_passages = [p for _, p in 
                  sorted(zip(scores, passages), 
                  key=lambda x: x[0], reverse=True)]`}
              </pre>
            </div>
          </div>
          <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
            <p style={{ fontSize: '0.9em', marginBottom: '8px' }}><strong>Example:</strong></p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85em' }}>
              <div>
                <p><strong>Query:</strong> "Capital gains tax allowance UK 2024"</p>
                <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                  <li>A) Generic UK tax guide</li>
                  <li>B) 2024 tax thresholds and rates</li>
                  <li>C) Investment strategies</li>
                </ul>
              </div>
              <div>
                <p><strong>Ranking:</strong></p>
                <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>0.89 → B) 2024 tax thresholds and rates</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>0.67 → A) Generic UK tax guide</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>0.45 → C) Investment strategies</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              <p>Speed Efficiency QA-optimized</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Fast and efficient compared to cross-encoders</li>
                <li>Battle-tested in production QA systems</li>
                <li>Can be fine-tuned for specific domains/tasks</li>
                <li>Supports indexing for sub-linear retrieval time</li>
                <li>Easy to integrate with existing vector databases</li>
              </ul>
            </div>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              <p>Precision Domain Drift Complexity</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Less precise than cross-encoders (no direct query-document interaction)</li>
                <li>Performance degrades without domain-specific fine-tuning</li>
                <li>Limited to capturing high-level semantic relationships</li>
                <li>Vector dimensionality constrains representational capacity</li>
                <li>Requires careful negative sampling during training</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16213e',
      notes: 'Model 3: T5-based generative reranking'
    }
      ]
    },
    {
      id: 'the-11-models',
      title: 'The 11 Models',
      slides: [
    {
      id: 13,
      title: '11) BM25 + LLM Reranking Hybrid)',
      icon: { name: 'duo-stream' },
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>Goal:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Combines lexical precision of keyword matching with semantic reasoning capabilities to create a robust, explainable ranking system.</p>
              <ul>
                <li>Bridges the gap between traditional search and neural approaches</li>
                <li>Reduces hallucination risk through strong keyword grounding</li>
                <li>Improves relevance for keyword-heavy and technical content</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span style={{ marginTop: '4px' }}>How It Works:</span></strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Two-stage pipeline that leverages both traditional IR and advanced neural methods.</p>
              <p>Key mechanism: BM25 provides initial keyword-based retrieval → LLM analyzes semantic meaning and reranks considering both relevance and BM25 scores</p>
            </div>
            <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>When to Use:</span></strong></p>
              <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '0.9em', lineHeight: '1.4' }}>
                <li>Technical or specialized domains with domain-specific terminology</li>
                <li>When exact keyword matching is crucial (e.g., error codes, product IDs)</li>
                <li>Content with structured or semi-structured format</li>
                <li>When transparency and explainability of results matter</li>
                <li>Systems requiring resilience to out-of-distribution queries</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
              <p><strong style={{ display: 'flex', alignItems: 'center' }}><SvgIcon iconName="duo-code" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} /><span>Input / Output Format:</span></strong></p>
              <p>Input: Query, documents with BM25 scores, and optional embedding similarities</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`hybrid_inputs = {
  "query": "error E101 on firmware v2.3",
  "documents": [
    {"content": "...", "bm25_score": 0.85},
    {"content": "...", "bm25_score": 0.72},
  ]
}`}
              </pre>
              <p>Output: Reranked documents with combined relevance scores</p>
              <pre style={{ marginTop: '8px', lineHeight: '1.5' }}>
{`results = [
  {"doc_id": 3, "score": 0.89, "bm25": 0.72, "llm": 0.95},
  {"doc_id": 1, "score": 0.76, "bm25": 0.85, "llm": 0.70},
]`}
              </pre>
            </div>
          </div>
          <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
            <p style={{ fontSize: '0.9em', marginBottom: '8px' }}><strong>Example:</strong></p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85em' }}>
              <div>
                <p><strong>Query:</strong> "error E101 on firmware v2.3"</p>
                <p style={{ marginTop: '5px' }}><strong>BM25 Rank:</strong></p>
                <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                  <li>A) E101 error documentation</li>
                  <li>B) Firmware update v2.3 release notes</li>
                  <li>C) E101 troubleshooting steps</li>
                </ul>
              </div>
              <div>
                <p><strong>LLM Rerank:</strong></p>
                <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>0.94 → C) E101 troubleshooting steps</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>0.79 → A) E101 error documentation</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>0.65 → B) Firmware update v2.3 release notes</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784' }} /> <strong>Strengths:</strong></p>
              <p>Robust Explainable Adaptable</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Strong real-world performance across diverse query types</li>
                <li>Resilient to out-of-domain phrases and terminology</li>
                <li>Maintains keyword precision while adding semantic understanding</li>
                <li>Can provide transparent, explainable rankings (BM25 + LLM reasons)</li>
                <li>Adaptable to different domains and content types</li>
              </ul>
            </div>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} /> <strong>Limitations:</strong></p>
              <p>Complexity Tuning Cost</p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Pipeline complexity increases development and maintenance overhead</li>
                <li>Requires careful tuning of fusion weights between BM25 and LLM signals</li>
                <li>LLM pass adds latency (200-500ms) and API costs</li>
                <li>Multiple components create more potential failure points</li>
                <li>BM25 component may need periodic reindexing for dynamic content</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16213e',
      notes: 'Model 3: T5-based generative reranking'
    }
      ]
    },
    {
      id: 'summary-recommendations',
      title: 'Summary & Recommendations',
      slides: [
    {
      id: 14,
      title: 'Model Comparison at a Glance',
      icon: { name: 'duo-table' },
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', fontSize: '0.9em', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'rgba(79, 195, 247, 0.2)', borderBottom: '2px solid rgba(79, 195, 247, 0.5)' }}>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Model Type</th>
                  <th style={{ padding: '10px', textAlign: 'center' }}>Accuracy</th>
                  <th style={{ padding: '10px', textAlign: 'center' }}>Speed</th>
                  <th style={{ padding: '10px', textAlign: 'center' }}>Setup</th>
                  <th style={{ padding: '10px', textAlign: 'left' }}>Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: '1. Cross-Encoder (MS MARCO)', acc: 'High', speed: 'Slow', setup: 'Medium', use: 'Precision-critical, GPU available' },
                  { name: '2. BERT Cross-Encoder', acc: 'High', speed: 'Medium', setup: 'Easy', use: 'Production default, balanced' },
                  { name: '3. MonoT5 Re-Ranker', acc: 'High', speed: 'Slow', setup: 'Medium', use: 'Transfer learning, accuracy focus' },
                  { name: '4. MonoBERT Re-Ranker', acc: 'High', speed: 'Medium', setup: 'Medium', use: 'Classic IR pipelines' },
                  { name: '5. ColBERT / ColBERTv2', acc: 'High', speed: 'Medium', setup: 'Complex', use: 'Token-level matching, technical docs' },
                  { name: '6. E5-Ranker (bi-encoder)', acc: 'Medium', speed: 'Fast', setup: 'Easy', use: 'Low-latency, high-throughput, CPU' },
                  { name: '7. LLM-as-a-Ranker', acc: 'High', speed: 'Very Slow', setup: 'Medium', use: 'Zero-shot, complex reasoning' },
                  { name: '8. RRF', acc: 'Medium', speed: 'Fast', setup: 'Easy', use: 'Combining multiple retrievers' },
                  { name: '9. Fusion-in-Decoder', acc: 'High', speed: 'Slow', setup: 'Complex', use: 'Multi-hop QA, end-to-end' },
                  { name: '10. DPR Re-Ranker', acc: 'Medium', speed: 'Fast', setup: 'Easy', use: 'QA systems, cost-sensitive' },
                  { name: '11. BM25 + LLM Hybrid', acc: 'High', speed: 'Medium', setup: 'Medium', use: 'Technical domains, explainability' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', background: i % 2 === 0 ? 'rgba(0,0,0,0.1)' : 'transparent' }}>
                    <td style={{ padding: '8px' }}>{row.name}</td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>
                      <span style={{ 
                        padding: '3px 8px', 
                        borderRadius: '3px', 
                        background: row.acc === 'High' ? 'rgba(129, 199, 132, 0.3)' : 'rgba(255, 183, 77, 0.3)' 
                      }}>{row.acc}</span>
                    </td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>
                      <span style={{ 
                        padding: '3px 8px', 
                        borderRadius: '3px', 
                        background: row.speed === 'Fast' ? 'rgba(129, 199, 132, 0.3)' : row.speed === 'Medium' ? 'rgba(255, 183, 77, 0.3)' : 'rgba(239, 83, 80, 0.3)' 
                      }}>{row.speed}</span>
                    </td>
                    <td style={{ padding: '8px', textAlign: 'center' }}>{row.setup}</td>
                    <td style={{ padding: '8px', fontSize: '0.85em' }}>{row.use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ),
      backgroundColor: '#1a1a2e',
      notes: 'Comprehensive comparison table of all 11 models'
    },
    {
      id: 15,
      title: 'Quick Recommendations by Use Case',
      icon: { name: 'duo-map' },
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div style={{ padding: '15px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '8px' }}>
              <h3 style={{ color: '#4fc3f7', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-star" sizeName="1x" darkModeInvert={true} />
                Default / General Purpose
              </h3>
              <div style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                <p><strong>ms-marco-MiniLM-L-6-v2</strong></p>
                <p style={{ fontSize: '0.9em', color: '#aaa', marginTop: '5px' }}>
                  Rerank top-20→top-5 with this cross-encoder for best accuracy/speed balance
                </p>
              </div>
            </div>
            <div style={{ padding: '15px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '8px' }}>
              <h3 style={{ color: '#81c784', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-globe" sizeName="1x" darkModeInvert={true} />
                Multilingual & Non-English
              </h3>
              <div style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                <p><strong>BGE Reranker / LLM-as-Ranker</strong></p>
                <p style={{ fontSize: '0.9em', color: '#aaa', marginTop: '5px' }}>
                  BGE for efficiency, LLM-as-ranker for rare languages with complex reasoning
                </p>
              </div>
            </div>
            <div style={{ padding: '15px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '8px' }}>
              <h3 style={{ color: '#ffb74d', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="1x" darkModeInvert={true} />
                High Throughput / Low Cost
              </h3>
              <div style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                <p><strong>E5/DPR + RRF + BM25</strong></p>
                <p style={{ fontSize: '0.9em', color: '#aaa', marginTop: '5px' }}>
                  Bi-encoder cosine rerank + RRF with BM25 for robust baseline at scale
                </p>
              </div>
            </div>
            <div style={{ padding: '15px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '8px' }}>
              <h3 style={{ color: '#ba68c8', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-file-lines" sizeName="1x" darkModeInvert={true} />
                Long Documents & Term Alignment
              </h3>
              <div style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                <p><strong>ColBERT/v2</strong></p>
                <p style={{ fontSize: '0.9em', color: '#aaa', marginTop: '5px' }}>
                  Optimized for fine-grained token-level matching across passages
                </p>
              </div>
            </div>
            <div style={{ padding: '15px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '8px' }}>
              <h3 style={{ color: '#f06292', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-brain" sizeName="1x" darkModeInvert={true} />
                Complex Reasoning / Multi-Hop QA
              </h3>
              <div style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                <p><strong>LLM-as-Ranker / FiD</strong></p>
                <p style={{ fontSize: '0.9em', color: '#aaa', marginTop: '5px' }}>
                  When relationships between documents matter; consider distilling for production
                </p>
              </div>
            </div>
            <div style={{ padding: '15px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '8px' }}>
              <h3 style={{ color: '#64b5f6', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-sliders" sizeName="1x" darkModeInvert={true} />
                Hybrid Robust Baseline
              </h3>
              <div style={{ fontSize: '0.95em', lineHeight: '1.6' }}>
                <p><strong>BM25 + Dense + RRF</strong></p>
                <p style={{ fontSize: '0.9em', color: '#aaa', marginTop: '5px' }}>
                  Add cross-encoder for top-10 refinement; balances keyword precision with semantics
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16213e',
      notes: 'Quick recommendations organized by use case'
    },
    {
      id: 16,
      title: 'Operational Tips & Trade-offs',
      icon: { name: 'duo-lightbulb' },
      content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <h3 style={{ color: '#4fc3f7', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gear" sizeName="1x" darkModeInvert={true} />
                Operational Tips
              </h3>
              <ul style={{ fontSize: '0.95em', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li><strong>Batch processing:</strong> Process pairs in batches to amortize overhead; use async for parallel scoring</li>
                <li><strong>Caching:</strong> Store reranking results for frequent queries; invalidate when corpus changes</li>
                <li><strong>Truncation:</strong> Truncate strategically (middle vs end) based on content type</li>
                <li><strong>A/B testing:</strong> Test rerankers per domain; monitor latency and relevance gains</li>
                <li><strong>Incremental complexity:</strong> Start simple (RRF + light cross-encoder), scale up only if needed</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: '#81c784', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-sliders" sizeName="1x" darkModeInvert={true} />
                Trade-off Considerations
              </h3>
              <ul style={{ fontSize: '0.95em', lineHeight: '1.8', paddingLeft: '20px' }}>
                <li><strong>Latency vs. accuracy:</strong> Optimize for your specific user experience requirements</li>
                <li><strong>Re-ranking depth:</strong> More documents = higher recall but diminishing returns after ~50</li>
                <li><strong>Pre-ranking quality:</strong> Better first-stage retrieval means less re-ranking needed</li>
                <li><strong>Model size:</strong> Smaller models (MiniLM variants) often suffice for most use cases</li>
              </ul>
            </div>
          </div>
          <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '8px' }}>
            <h3 style={{ color: '#ffb74d', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <SvgIcon iconName="duo-chart-line" sizeName="1x" darkModeInvert={true} />
              Key Performance Metrics
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px', fontSize: '0.9em' }}>
              <div style={{ padding: '10px', background: 'rgba(0,0,0,0.2)', borderRadius: '5px' }}>
                <div style={{ fontSize: '0.8em', color: '#aaa' }}>Latency Impact</div>
                <div style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#4fc3f7', marginTop: '5px' }}>+200-500ms</div>
                <div style={{ fontSize: '0.75em', marginTop: '3px' }}>Per reranking pass</div>
              </div>
              <div style={{ padding: '10px', background: 'rgba(0,0,0,0.2)', borderRadius: '5px' }}>
                <div style={{ fontSize: '0.8em', color: '#aaa' }}>Accuracy Gain</div>
                <div style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#81c784', marginTop: '5px' }}>+20-35%</div>
                <div style={{ fontSize: '0.75em', marginTop: '3px' }}>Precision improvement</div>
              </div>
              <div style={{ padding: '10px', background: 'rgba(0,0,0,0.2)', borderRadius: '5px' }}>
                <div style={{ fontSize: '0.8em', color: '#aaa' }}>Optimal Depth</div>
                <div style={{ fontSize: '1.2em', fontWeight: 'bold', color: '#ffb74d', marginTop: '5px' }}>20-50 → 5-10</div>
                <div style={{ fontSize: '0.75em', marginTop: '3px' }}>Retrieve → Rerank</div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '20px', padding: '15px', background: 'rgba(186, 104, 200, 0.15)', borderRadius: '8px', textAlign: 'left' }}>
            <p style={{ fontSize: '1em', lineHeight: '1.6', display: 'flex', alignItems: 'center' }}>
              <SvgIcon iconName="duo-rocket" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '8px', color: '#ba68c8' }} darkModeInvert={true} />
              <p>
                 <strong>Pro Tip:</strong> Start with ms-marco-MiniLM-L-6-v2 as your baseline, then A/B test against more specialized models 
                <strong>based on your specific domain and performance requirements.</strong> <br/>
              </p>
            </p>
          </div>
        </div>
      ),
      backgroundColor: '#0f3460',
      notes: 'Practical operational tips and trade-off considerations'
    }
      ]
    }
  ]
};

