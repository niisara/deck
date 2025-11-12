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
      title: '11 Re-Ranking Models to Improve RAG Accuracy',
      content: (
        <div style={{ textAlign: 'left' }}>
          <h2 style={{ marginBottom: '20px' }}>
            <SvgIcon iconName="duo-list-ol" sizeName="2x" style={{ marginRight: '15px', verticalAlign: 'middle' }} darkModeInvert={true} />
            11 Re-Ranking Models
          </h2>
          <h3 style={{ fontSize: '1.1em', marginTop: '30px', color: '#4fc3f7' }}>
            To Improve RAG Accuracy
          </h3>
          <p style={{ fontSize: '1em', marginTop: '30px', maxWidth: '900px' }}>
            Practical patterns, trade-offs, and examples to boost precision in Retrieval-Augmented Generation
          </p>
          <div style={{ marginTop: '50px', display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div style={{ padding: '20px 30px', background: 'rgba(79, 195, 247, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <SvgIcon iconName="duo-magnifying-glass" sizeName="3x" darkModeInvert={true} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.9em', color: '#aaa' }}>Retrieve</div>
              </div>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} />
            <div style={{ padding: '20px 30px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <SvgIcon iconName="duo-list-ol" sizeName="3x" darkModeInvert={true} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.9em', color: '#aaa' }}>Re-Rank</div>
              </div>
            </div>
            <SvgIcon iconName="duo-arrow-right" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} />
            <div style={{ padding: '20px 30px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '15px' }}>
              <SvgIcon iconName="duo-lightbulb" sizeName="3x" darkModeInvert={true} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.9em', color: '#aaa' }}>Generate</div>
              </div>
            </div>
          </div>
          <p style={{ fontSize: '0.8em', marginTop: '50px', color: '#aaa' }}>
            Advanced RAG Systems • November 2023
          </p>
        </div>
      ),
      backgroundColor: '#1a1a2e',
      notes: 'Title slide introducing 11 re-ranking models for RAG'
    },
    {
      id: 2,
      title: 'Why Re-Ranking in RAG?',
      content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.8em' }}>
          <h2 style={{ textAlign: 'left', marginBottom: '25px' }}>
            <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ marginRight: '10px', verticalAlign: 'middle' }} darkModeInvert={true} />
            Why Re-Ranking Matters
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px', marginBottom: '25px' }}>
            <div style={{ padding: '15px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '8px' }}>
              <h3 style={{ color: '#4fc3f7', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                Two-Stage Architecture
              </h3>
              <div style={{ fontSize: '0.9em', lineHeight: '1.6' }}>
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
              <h3 style={{ color: '#81c784', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-chart-line" sizeName="1x" darkModeInvert={true} />
                Key Benefits
              </h3>
              <ul style={{ fontSize: '0.9em', lineHeight: '1.6', paddingLeft: '20px' }}>
                <li><strong>Filters noisy candidates:</strong> Improves grounding and reduces hallucinations</li>
                <li><strong>Optimal flow:</strong> Retrieve 20-50 → Re-rank to top 5-10 for the LLM</li>
                <li><strong>ROI:</strong> +200-500 ms latency often yields 20-35% precision gains</li>
              </ul>
              <div style={{ marginTop: '15px', padding: '12px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '5px' }}>
                <p style={{ fontSize: '0.85em' }}>
                  <strong>Quality Impact:</strong>
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                  <div>
                    <div style={{ fontSize: '0.85em', color: '#aaa' }}>Initial Retrieval</div>
                    <div style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#ffb74d' }}>65-80% relevant</div>
                  </div>
                  <div style={{ fontSize: '1.5em', color: '#4fc3f7' }}>→</div>
                  <div>
                    <div style={{ fontSize: '0.85em', color: '#aaa' }}>After Re-Ranking</div>
                    <div style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#81c784' }}>85-95% relevant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ padding: '15px', background: 'rgba(186, 104, 200, 0.15)', borderRadius: '8px', textAlign: 'left' }}>
            <p style={{ fontSize: '0.95em', lineHeight: '1.5' }}>
              <SvgIcon iconName="duo-triangle-exclamation" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '8px', color: '#ba68c8' }} darkModeInvert={true} />
              <strong>Without re-ranking,</strong> RAG systems often fail not because of poor embeddings or weak LLMs, 
              but because they feed irrelevant information to the generation stage.
            </p>
          </div>
          <div style={{ marginTop: '20px', fontSize: '0.85em' }}>
            <h4 style={{ color: '#4fc3f7', marginBottom: '8px' }}>Key Decision Axes:</h4>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Query complexity', 'Language support', 'Latency budget', 'Cost constraints', 'Infrastructure (CPU/GPU)'].map((item, i) => (
                <span key={i} style={{ padding: '5px 12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '4px' }}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16213e',
      notes: 'Overview of why re-ranking is critical for RAG accuracy'
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
      content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.75em' }}>
          <h2 style={{ textAlign: 'left', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.3em' }}>
            <SvgIcon iconName="duo-brain-circuit" sizeName="2x" style={{ color: '#4fc3f7' }} darkModeInvert={true} />
            Cross-Encoder Ranker (MS MARCO)
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
              <p><strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal / What It Solves:</strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Maximizes precision through deep query-document understanding, overcoming the limitations of independent embedding comparisons.</p>
            </div>
            <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
              <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Concatenate [CLS] query [SEP] doc → transformer → single relevance score. Understands semantic relationships between queries and documents.</p>
            </div>
            <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
              <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />When to Use:</strong></p>
              <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '0.9em', lineHeight: '1.4' }}>
                <li>Precision-critical tasks where accuracy trumps speed</li>
                <li>Second-stage ranking (after initial retrieval)</li>
                <li>When GPU resources are available</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
              <p><strong><SvgIcon iconName="duo-code" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Input / Output:</strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.85em', fontFamily: 'monospace' }}>
                pairs = [[query, doc_1], [query, doc_2]]<br/>
                scores = [0.92, 0.45, ...]  # 0-1 scale
              </p>
            </div>
          </div>
          <div style={{ marginTop: '12px', padding: '10px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '5px' }}>
            <p style={{ fontSize: '0.9em', marginBottom: '8px' }}><strong>Example: Password Reset Query</strong></p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.85em' }}>
              <div>
                <p><strong>Query:</strong> "Reset password steps?"</p>
                <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
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
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
              <p><strong><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784', verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Strengths:</strong></p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Best accuracy (20-35% over bi-encoders)</li>
                <li>Fine-grained relevance scoring</li>
                <li>Well-studied with many pre-trained models</li>
              </ul>
            </div>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
              <p><strong><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d', verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Limitations:</strong></p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Higher latency: O(k·L)</li>
                <li>GPU recommended</li>
                <li>512 token limit (can truncate documents)</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#0f3460',
      notes: 'Model 1: Cross-Encoder for maximum precision'
    },
    {
      id: 4,
      title: '2) BERT-based Cross Encoder (ms-marco-MiniLM)',
      content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.75em' }}>
          <h2 style={{ textAlign: 'left', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2em' }}>
            <SvgIcon iconName="duo-gauge-high" sizeName="2x" style={{ color: '#81c784' }} darkModeInvert={true} />
            BERT-based Cross Encoder (MiniLM)
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
              <p><strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal:</strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Provides cross-encoder accuracy with a lighter, faster model for practical deployment. Production-ready reranking without heavy GPU requirements.</p>
            </div>
            <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
              <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>Knowledge distillation from larger BERT models. Fine-tuned on MS MARCO (8.8M query-passage pairs). Balance between semantic understanding and efficiency.</p>
            </div>
            <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
              <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />When to Use:</strong></p>
              <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '0.9em', lineHeight: '1.4' }}>
                <li>Production systems with moderate hardware</li>
                <li>English-centric search applications</li>
                <li>As default starting point for most RAG pipelines</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
              <p><strong><SvgIcon iconName="duo-code" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Code Example:</strong></p>
              <pre style={{ marginTop: '5px', fontSize: '0.75em', background: 'rgba(0,0,0,0.3)', padding: '6px', borderRadius: '3px', overflow: 'auto' }}>
{`model = CrossEncoder('ms-marco-MiniLM-L-6-v2')
pairs = [["query", "doc1"], ["query", "doc2"]]
scores = model.predict(pairs)  # [0.87, 0.65]`}
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
                  <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>0.89 → B) ACE inhibitor adverse effects</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>0.41 → A) General diabetes treatment</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>0.32 → C) Hypertension guidelines</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '12px' }}>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(129, 199, 132, 0.15)', borderRadius: '5px' }}>
              <p><strong><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784', verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Strengths:</strong></p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>2-4x faster than full BERT</li>
                <li>Only 90MB model size (vs. 440MB+)</li>
                <li>Works well on CPU</li>
              </ul>
            </div>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
              <p><strong><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d', verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Limitations:</strong></p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>English-centric (MS MARCO dataset)</li>
                <li>512 token truncation</li>
                <li>Less effective on non-web domains</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1a1a2e',
      notes: 'Model 2: Distilled model for practical deployment'
    },
    {
      id: 5,
      title: '3) MonoT5 Re-Ranker',
      content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.75em' }}>
          <h2 style={{ textAlign: 'left', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.3em' }}>
            <SvgIcon iconName="duo-brain" sizeName="2x" style={{ color: '#ffb74d' }} darkModeInvert={true} />
            MonoT5 Re-Ranker
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <div style={{ padding: '10px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '5px' }}>
              <p><strong><SvgIcon iconName="duo-lightbulb" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Goal:</strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>High-accuracy pointwise generative reranking that frames relevance as a text generation problem. Superior accuracy through generative assessment.</p>
            </div>
            <div style={{ padding: '10px', background: 'rgba(129, 199, 132, 0.1)', borderRadius: '5px' }}>
              <p><strong><SvgIcon iconName="duo-gear" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />How It Works:</strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.95em' }}>T5 encoder-decoder predicts "true" or "false" tokens for relevance. Higher P("true") = Higher relevance score.</p>
            </div>
            <div style={{ padding: '10px', background: 'rgba(255, 183, 77, 0.1)', borderRadius: '5px' }}>
              <p><strong><SvgIcon iconName="duo-trophy" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />When to Use:</strong></p>
              <ul style={{ marginTop: '5px', paddingLeft: '18px', fontSize: '0.9em', lineHeight: '1.4' }}>
                <li>Web search and QA where accuracy is paramount</li>
                <li>Transfer learning across domains (zero/few-shot)</li>
                <li>When GPU resources are available</li>
              </ul>
            </div>
            <div style={{ padding: '10px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '5px' }}>
              <p><strong><SvgIcon iconName="duo-code" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Prompt Format:</strong></p>
              <p style={{ marginTop: '5px', fontSize: '0.85em', fontFamily: 'monospace' }}>
                "Query: &#123;query&#125; Document: &#123;document&#125; Relevant?"<br/>
                → P("true") = 0.85, P("false") = 0.15
              </p>
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
              <p><strong><SvgIcon iconName="duo-circle-check" sizeName="1x" style={{ color: '#81c784', verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Strengths:</strong></p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Excellent accuracy, often outperforming BERT</li>
                <li>Strong transfer learning to new domains</li>
                <li>Flexible prompting</li>
              </ul>
            </div>
            <div style={{ flex: 1, padding: '10px', background: 'rgba(255, 183, 77, 0.15)', borderRadius: '5px' }}>
              <p><strong><SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d', verticalAlign: 'middle', marginRight: '5px' }} darkModeInvert={true} />Limitations:</strong></p>
              <ul style={{ fontSize: '0.85em', lineHeight: '1.3', marginTop: '5px', paddingLeft: '16px' }}>
                <li>Higher latency (encoder-decoder)</li>
                <li>Larger models (up to billions of parameters)</li>
                <li>Higher inference cost</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16213e',
      notes: 'Model 3: T5-based generative reranking'
    },
    {
      id: 6,
      title: '4-5) MonoBERT & ColBERT',
      content: (
        <div style={{ textAlign: 'left', maxWidth: '1050px', margin: '0 auto', fontSize: '0.7em' }}>
          <h2 style={{ textAlign: 'left', marginBottom: '15px', fontSize: '1.3em' }}>
            <SvgIcon iconName="duo-copy" sizeName="2x" style={{ marginRight: '10px', verticalAlign: 'middle' }} darkModeInvert={true} />
            MonoBERT & ColBERT Approaches
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div style={{ padding: '12px', background: 'rgba(186, 104, 200, 0.1)', borderRadius: '8px' }}>
              <h3 style={{ color: '#ba68c8', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-brain-circuit" sizeName="1x" darkModeInvert={true} />
                4) MonoBERT Re-Ranker
              </h3>
              <div style={{ fontSize: '0.9em' }}>
                <p><strong>Goal:</strong> Strong transformer-based reranking without encoder-decoder complexity.</p>
                <p style={{ marginTop: '8px' }}><strong>How:</strong> [CLS] query [SEP] document [SEP] → BERT → classification head → score</p>
                <p style={{ marginTop: '8px' }}><strong>When:</strong> Classic IR pipelines, medium latency budgets, English-language corpora</p>
                <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
                  <div style={{ flex: 1, padding: '8px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.85em' }}><strong>✓ Pros:</strong></p>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '16px', lineHeight: '1.3' }}>
                      <li>Solid accuracy</li>
                      <li>Widely available</li>
                      <li>Well-tested</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1, padding: '8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.85em' }}><strong>✗ Cons:</strong></p>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '16px', lineHeight: '1.3' }}>
                      <li>Slower than MiniLM</li>
                      <li>512 token limit</li>
                      <li>Domain shift issues</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ padding: '12px', background: 'rgba(240, 98, 146, 0.1)', borderRadius: '8px' }}>
              <h3 style={{ color: '#f06292', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-arrows-rotate" sizeName="1x" darkModeInvert={true} />
                5) ColBERT / ColBERTv2
              </h3>
              <div style={{ fontSize: '0.9em' }}>
                <p><strong>Goal:</strong> Precise token-level matching while maintaining efficiency. Late interaction pattern.</p>
                <p style={{ marginTop: '8px' }}><strong>How:</strong> MaxSim operation matches each query token to its most similar document token, then aggregates scores</p>
                <p style={{ marginTop: '8px' }}><strong>When:</strong> Term-by-term alignment important (technical/medical), long documents, balance between efficiency and deep matching</p>
                <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
                  <div style={{ flex: 1, padding: '8px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.85em' }}><strong>✓ Pros:</strong></p>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '16px', lineHeight: '1.3' }}>
                      <li>Token-level matching</li>
                      <li>Maintains efficiency</li>
                      <li>ColBERTv2 improvements</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1, padding: '8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.85em' }}><strong>✗ Cons:</strong></p>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '16px', lineHeight: '1.3' }}>
                      <li>Complex implementation</li>
                      <li>Higher storage requirements</li>
                      <li>Specialized infrastructure</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '15px', padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '8px', color: '#4fc3f7' }}>Example: ColBERT Token Matching</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.85em' }}>
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
                <p><strong>ColBERT Ranking (token-level):</strong></p>
                <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>0.89 → C) S3 key rotation procedure</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>0.56 → B) S3 policy documentation</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>0.31 → A) AWS general overview</div>
                </div>
                <p style={{ marginTop: '8px', fontSize: '0.8em', fontStyle: 'italic', color: '#aaa' }}>
                  ColBERT finds best token alignments: "rotate" ↔ "rotation", "keys" ↔ "key", "S3" ↔ "S3"
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#0f3460',
      notes: 'Models 4-5: MonoBERT and ColBERT approaches'
    },
    {
      id: 7,
      title: '6-7) E5-Ranker & LLM-as-a-Ranker',
      content: (
        <div style={{ textAlign: 'left', maxWidth: '1050px', margin: '0 auto', fontSize: '0.7em' }}>
          <h2 style={{ textAlign: 'left', marginBottom: '15px', fontSize: '1.3em' }}>
            <SvgIcon iconName="duo-rocket" sizeName="2x" style={{ marginRight: '10px', verticalAlign: 'middle' }} darkModeInvert={true} />
            E5-Ranker & LLM-as-a-Ranker
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div style={{ padding: '12px', background: 'rgba(100, 181, 246, 0.1)', borderRadius: '8px' }}>
              <h3 style={{ color: '#64b5f6', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gauge-high" sizeName="1x" darkModeInvert={true} />
                6) E5-Ranker (Bi-Encoder)
              </h3>
              <div style={{ fontSize: '0.9em' }}>
                <p><strong>Goal:</strong> Fast and efficient rescoring using sentence embeddings while maintaining reasonable accuracy.</p>
                <p style={{ marginTop: '8px' }}><strong>How:</strong> Encode query and docs separately → compute cosine similarity → rerank</p>
                <p style={{ marginTop: '8px' }}><strong>When:</strong> Low-latency applications, CPU-only environments, high-throughput systems, multilingual applications</p>
                <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
                  <div style={{ flex: 1, padding: '8px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.85em' }}><strong>✓ Pros:</strong></p>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '16px', lineHeight: '1.3' }}>
                      <li>Very fast (5-20x speedup)</li>
                      <li>Works on CPUs</li>
                      <li>Pre-computed embeddings</li>
                      <li>Multilingual</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1, padding: '8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.85em' }}><strong>✗ Cons:</strong></p>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '16px', lineHeight: '1.3' }}>
                      <li>Lower precision (10-15% gap)</li>
                      <li>Limited reasoning</li>
                      <li>Information loss from single vector</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ padding: '12px', background: 'rgba(174, 213, 129, 0.1)', borderRadius: '8px' }}>
              <h3 style={{ color: '#aed581', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-brain" sizeName="1x" darkModeInvert={true} />
                7) LLM-as-a-Ranker (RankGPT)
              </h3>
              <div style={{ fontSize: '0.9em' }}>
                <p><strong>Goal:</strong> Leverages LLMs' reasoning capabilities for sophisticated relevance ranking beyond traditional re-rankers.</p>
                <p style={{ marginTop: '8px' }}><strong>How:</strong> Prompt LLM to compare documents → reason about relevance → output ordered ranking</p>
                <p style={{ marginTop: '8px' }}><strong>When:</strong> High-stakes QA, ambiguous queries, new domains without training data, complex relevance criteria</p>
                <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
                  <div style={{ flex: 1, padding: '8px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.85em' }}><strong>✓ Pros:</strong></p>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '16px', lineHeight: '1.3' }}>
                      <li>Superior reasoning</li>
                      <li>Zero-shot performance</li>
                      <li>Adaptable via prompting</li>
                      <li>Explainable</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1, padding: '8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.85em' }}><strong>✗ Cons:</strong></p>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '16px', lineHeight: '1.3' }}>
                      <li>Highest cost (10-50x more)</li>
                      <li>High latency (1-5 seconds)</li>
                      <li>API rate limits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '15px', padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '8px', color: '#ffa726' }}>Example: LLM Reasoning</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.85em' }}>
              <div>
                <p><strong>Query:</strong> "Pros/cons of eventual consistency for checkout systems?"</p>
                <p style={{ marginTop: '5px' }}><strong>Docs:</strong></p>
                <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                  <li>A) General database concepts</li>
                  <li>B) E-commerce design patterns</li>
                  <li>C) System design with consistency trade-offs</li>
                </ul>
              </div>
              <div>
                <p><strong>LLM Reasoning:</strong></p>
                <p style={{ fontSize: '0.85em', marginTop: '5px', fontStyle: 'italic', background: 'rgba(0,0,0,0.2)', padding: '8px', borderRadius: '4px' }}>
                  "Doc C directly addresses consistency trade-offs in systems. Doc B covers e-commerce patterns which may include checkout. Doc A is too general."
                </p>
                <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>1st → C) System design</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>2nd → B) E-commerce patterns</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>3rd → A) Database concepts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1a1a2e',
      notes: 'Models 6-7: Fast bi-encoder and LLM-based reasoning'
    },
    {
      id: 8,
      title: '8-9) RRF & Fusion-in-Decoder',
      content: (
        <div style={{ textAlign: 'left', maxWidth: '1050px', margin: '0 auto', fontSize: '0.7em' }}>
          <h2 style={{ textAlign: 'left', marginBottom: '15px', fontSize: '1.3em' }}>
            <SvgIcon iconName="duo-arrows-spin" sizeName="2x" style={{ marginRight: '10px', verticalAlign: 'middle' }} darkModeInvert={true} />
            RRF & Fusion-in-Decoder
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div style={{ padding: '12px', background: 'rgba(255, 167, 38, 0.1)', borderRadius: '8px' }}>
              <h3 style={{ color: '#ffa726', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-arrows-rotate" sizeName="1x" darkModeInvert={true} />
                8) RRF (Reciprocal Rank Fusion)
              </h3>
              <div style={{ fontSize: '0.9em' }}>
                <p><strong>Goal:</strong> Combines multiple ranking signals into a single ranking without requiring relevance scores or training.</p>
                <p style={{ marginTop: '8px' }}><strong>Formula:</strong> RRF(d) = Σ 1/(k + rank<sub>r</sub>(d)) where k typically = 60</p>
                <p style={{ marginTop: '8px' }}><strong>When:</strong> Combining multiple retrievers (BM25 + neural), heterogeneous collections, simple baseline</p>
                <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
                  <div style={{ flex: 1, padding: '8px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.85em' }}><strong>✓ Pros:</strong></p>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '16px', lineHeight: '1.3' }}>
                      <li>No training needed</li>
                      <li>Lightweight computation</li>
                      <li>Often outperforms individuals</li>
                      <li>Handles outliers gracefully</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1, padding: '8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.85em' }}><strong>✗ Cons:</strong></p>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '16px', lineHeight: '1.3' }}>
                      <li>No semantic understanding</li>
                      <li>Parameter k may need tuning</li>
                      <li>Depends on input quality</li>
                    </ul>
                  </div>
                </div>
                <div style={{ marginTop: '8px', padding: '8px', background: 'rgba(0,0,0,0.2)', borderRadius: '4px', fontSize: '0.8em' }}>
                  <p><strong>Example:</strong> DocA ranks #2, #3, #1 → RRF = 1/62 + 1/63 + 1/61 = 0.044</p>
                </div>
              </div>
            </div>
            <div style={{ padding: '12px', background: 'rgba(239, 83, 80, 0.1)', borderRadius: '8px' }}>
              <h3 style={{ color: '#ef5350', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-circle-nodes" sizeName="1x" darkModeInvert={true} />
                9) Fusion-in-Decoder (FiD)
              </h3>
              <div style={{ fontSize: '0.9em' }}>
                <p><strong>Goal:</strong> Enables effective multi-document evidence fusion with specialized encoder-decoder architecture.</p>
                <p style={{ marginTop: '8px' }}><strong>How:</strong> Encode each doc separately with shared encoder → decoder attends across all encodings → output answer + doc scores</p>
                <p style={{ marginTop: '8px' }}><strong>When:</strong> Multi-hop QA, complex queries needing synthesis, end-to-end RAG with combined ranking + generation</p>
                <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
                  <div style={{ flex: 1, padding: '8px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.85em' }}><strong>✓ Pros:</strong></p>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '16px', lineHeight: '1.3' }}>
                      <li>Superior multi-doc QA</li>
                      <li>Handles many passages</li>
                      <li>Single model for rank + gen</li>
                      <li>Cross-document relationships</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1, padding: '8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.85em' }}><strong>✗ Cons:</strong></p>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '16px', lineHeight: '1.3' }}>
                      <li>Higher compute requirements</li>
                      <li>Context length limitations</li>
                      <li>Indirect ranking (from attention)</li>
                      <li>Complex to implement</li>
                    </ul>
                  </div>
                </div>
                <div style={{ marginTop: '8px', padding: '8px', background: 'rgba(0,0,0,0.2)', borderRadius: '4px', fontSize: '0.8em' }}>
                  <p><strong>Example:</strong> Query: "Who founded X and when?" → Answer: "John Smith founded X in 1995" + Doc scores: [0.85, 0.82]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16213e',
      notes: 'Models 8-9: Fusion approaches for combining signals'
    },
    {
      id: 9,
      title: '10-11) DPR & BM25 + LLM Hybrid',
      content: (
        <div style={{ textAlign: 'left', maxWidth: '1050px', margin: '0 auto', fontSize: '0.7em' }}>
          <h2 style={{ textAlign: 'left', marginBottom: '15px', fontSize: '1.3em' }}>
            <SvgIcon iconName="duo-sliders" sizeName="2x" style={{ marginRight: '10px', verticalAlign: 'middle' }} darkModeInvert={true} />
            DPR & BM25 + LLM Hybrid
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <div style={{ padding: '12px', background: 'rgba(149, 117, 205, 0.1)', borderRadius: '8px' }}>
              <h3 style={{ color: '#9575cd', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-magnifying-glass" sizeName="1x" darkModeInvert={true} />
                10) DPR Re-Ranker
              </h3>
              <div style={{ fontSize: '0.9em' }}>
                <p><strong>Goal:</strong> Dense Passage Retrieval provides efficient semantic matching specifically optimized for QA tasks.</p>
                <p style={{ marginTop: '8px' }}><strong>How:</strong> Dual-encoder fine-tuned on QA pairs → independent encoding → vector similarity → score-based reranking</p>
                <p style={{ marginTop: '8px' }}><strong>When:</strong> Open-domain QA systems, low-latency reranking, domain fine-tuning possible, cost-sensitive production</p>
                <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
                  <div style={{ flex: 1, padding: '8px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.85em' }}><strong>✓ Pros:</strong></p>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '16px', lineHeight: '1.3' }}>
                      <li>Fast and efficient</li>
                      <li>Battle-tested in production</li>
                      <li>Domain fine-tunable</li>
                      <li>Easy vector DB integration</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1, padding: '8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.85em' }}><strong>✗ Cons:</strong></p>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '16px', lineHeight: '1.3' }}>
                      <li>Less precise than cross-encoders</li>
                      <li>Needs domain fine-tuning</li>
                      <li>Limited to high-level semantics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ padding: '12px', background: 'rgba(102, 187, 106, 0.1)', borderRadius: '8px' }}>
              <h3 style={{ color: '#66bb6a', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-arrows-rotate" sizeName="1x" darkModeInvert={true} />
                11) BM25 + LLM Reranking
              </h3>
              <div style={{ fontSize: '0.9em' }}>
                <p><strong>Goal:</strong> Combines lexical precision of keyword matching with semantic reasoning for robust, explainable ranking.</p>
                <p style={{ marginTop: '8px' }}><strong>How:</strong> BM25 keyword-based retrieval → LLM analyzes semantic meaning → reranks considering both relevance and BM25 scores</p>
                <p style={{ marginTop: '8px' }}><strong>When:</strong> Technical domains with specific terminology, exact keyword matching crucial, transparency matters</p>
                <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
                  <div style={{ flex: 1, padding: '8px', background: 'rgba(129, 199, 132, 0.2)', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.85em' }}><strong>✓ Pros:</strong></p>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '16px', lineHeight: '1.3' }}>
                      <li>Strong real-world performance</li>
                      <li>Resilient to out-of-domain</li>
                      <li>Keyword + semantic power</li>
                      <li>Explainable rankings</li>
                    </ul>
                  </div>
                  <div style={{ flex: 1, padding: '8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.85em' }}><strong>✗ Cons:</strong></p>
                    <ul style={{ fontSize: '0.85em', paddingLeft: '16px', lineHeight: '1.3' }}>
                      <li>Pipeline complexity</li>
                      <li>Fusion weight tuning needed</li>
                      <li>LLM latency + cost</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '15px', padding: '12px', background: 'rgba(79, 195, 247, 0.1)', borderRadius: '8px' }}>
            <h4 style={{ marginBottom: '8px', color: '#4fc3f7' }}>Example: BM25 + LLM Hybrid</h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '0.85em' }}>
              <div>
                <p><strong>Query:</strong> "error E101 on firmware v2.3"</p>
                <p style={{ marginTop: '5px' }}><strong>BM25 Initial Rank:</strong></p>
                <ul style={{ paddingLeft: '18px', lineHeight: '1.4' }}>
                  <li>A) E101 error documentation (0.85)</li>
                  <li>B) Firmware update v2.3 notes (0.72)</li>
                  <li>C) E101 troubleshooting steps (0.63)</li>
                </ul>
              </div>
              <div>
                <p><strong>After LLM Rerank (Hybrid):</strong></p>
                <div style={{ marginTop: '5px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
                  <div style={{ padding: '4px 8px', background: 'rgba(129, 199, 132, 0.3)', borderRadius: '3px' }}>0.94 → C) Troubleshooting steps</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(255, 183, 77, 0.2)', borderRadius: '3px' }}>0.79 → A) Error documentation</div>
                  <div style={{ padding: '4px 8px', background: 'rgba(239, 83, 80, 0.2)', borderRadius: '3px' }}>0.65 → B) Firmware notes</div>
                </div>
                <p style={{ marginTop: '8px', fontSize: '0.8em', fontStyle: 'italic', color: '#aaa' }}>
                  LLM understands "troubleshooting" is most relevant for error context
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#0f3460',
      notes: 'Models 10-11: DPR and hybrid BM25+LLM approaches'
    }
      ]
    },
    {
      id: 'summary-recommendations',
      title: 'Summary & Recommendations',
      slides: [
    {
      id: 10,
      title: 'Model Comparison at a Glance',
      content: (
        <div style={{ textAlign: 'left', maxWidth: '1100px', margin: '0 auto', fontSize: '0.7em' }}>
          <h2 style={{ textAlign: 'left', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-table" sizeName="2x" style={{ marginRight: '10px', verticalAlign: 'middle' }} darkModeInvert={true} />
            Model Comparison at a Glance
          </h2>
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
      id: 11,
      title: 'Quick Recommendations by Use Case',
      content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.75em' }}>
          <h2 style={{ textAlign: 'left', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-map" sizeName="2x" style={{ marginRight: '10px', verticalAlign: 'middle' }} darkModeInvert={true} />
            Quick Recommendations by Use Case
          </h2>
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
      id: 12,
      title: 'Operational Tips & Trade-offs',
      content: (
        <div style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto', fontSize: '0.75em' }}>
          <h2 style={{ textAlign: 'left', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-lightbulb" sizeName="2x" style={{ marginRight: '10px', verticalAlign: 'middle' }} darkModeInvert={true} />
            Operational Tips & Trade-offs
          </h2>
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
            <p style={{ fontSize: '1em', lineHeight: '1.6' }}>
              <SvgIcon iconName="duo-rocket" sizeName="1x" style={{ verticalAlign: 'middle', marginRight: '8px', color: '#ba68c8' }} darkModeInvert={true} />
              <strong>Pro Tip:</strong> Start with ms-marco-MiniLM-L-6-v2 as your baseline, then A/B test against more specialized models 
              based on your specific domain and performance requirements.
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

