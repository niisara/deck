import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';

export const promptEngineeringDeck: Deck = {
  id: 'prompt-engineering-deck',
  name: '18 Prompt Engineering Techniques',
  description: 'A Comprehensive Guide to Advanced Prompting Patterns',
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
          title: '18 Prompt Engineering Techniques',
          content: (
            <div style={{ textAlign: 'left' }}>
          <h2 style={{ marginBottom: '30px' }}>A Comprehensive Guide to Advanced Prompting Patterns</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '50px', marginTop: '50px' }}>
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-brain" sizeName="4x" style={{ color: '#3498db' }} />
              <p style={{ marginTop: '10px', fontSize: '0.9em' }}>Reasoning</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-database" sizeName="4x" style={{ color: '#2ecc71' }} />
              <p style={{ marginTop: '10px', fontSize: '0.9em' }}>Retrieval</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-robot" sizeName="4x" style={{ color: '#9b59b6' }} />
              <p style={{ marginTop: '10px', fontSize: '0.9em' }}>Agentic</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <SvgIcon iconName="duo-layer-group" sizeName="4x" style={{ color: '#f39c12' }} />
              <p style={{ marginTop: '10px', fontSize: '0.9em' }}>Hybrid</p>
            </div>
          </div>
          <p style={{ marginTop: '60px', fontSize: '1em' }}>
            For Practitioners, Data Scientists & Product Engineers
          </p>
          <p style={{ marginTop: '10px', fontSize: '0.8em', opacity: 0.7 }}>November 3, 2025</p>
        </div>
      ),
      backgroundColor: '#2C3E50',
      notes: 'Introduction: 18 advanced prompting patterns organized by type - Reasoning, Retrieval, Agentic, and Hybrid'
    },
    {
          id: 2,
          title: 'Table of Contents',
          icon: { name: 'duo-list-check', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.72em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3498db', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-brain" sizeName="1x" />
                Reasoning Techniques (1-8, 17)
              </h4>
              <ul style={{ lineHeight: '1.7', fontSize: '0.95em' }}>
                <li>1. Zero-shot Prompting</li>
                <li>2. Few-shot Prompting</li>
                <li>3. Chain-of-Thought (CoT)</li>
                <li>4. Meta Prompting</li>
                <li>5. Self-Consistency</li>
                <li>6. Generate Knowledge Prompting</li>
                <li>8. Tree of Thoughts (ToT)</li>
                <li>17. Multimodal Chain-of-Thought</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71', marginTop: '15px', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-database" sizeName="1x" />
                Retrieval (9)
              </h4>
              <ul style={{ lineHeight: '1.7', fontSize: '0.95em' }}>
                <li>9. Retrieval-Augmented Generation (RAG)</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9b59b6', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-robot" sizeName="1x" />
                Agentic Techniques (10, 14-16)
              </h4>
              <ul style={{ lineHeight: '1.7', fontSize: '0.95em' }}>
                <li>10. Automatic Reasoning & Tool-use (ART)</li>
                <li>14. Program-Aided LMs (PAL)</li>
                <li>15. ReAct</li>
                <li>16. Reflexion</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f39c12', marginTop: '15px', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-layer-group" sizeName="1x" />
                Hybrid Techniques (7, 11-13, 18)
              </h4>
              <ul style={{ lineHeight: '1.7', fontSize: '0.95em' }}>
                <li>7. Prompt Chaining</li>
                <li>11. Automatic Prompt Engineer (APE)</li>
                <li>12. Active-Prompt</li>
                <li>13. Directional Stimulus Prompting</li>
                <li>18. Graph Prompting</li>
              </ul>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '1.1em', fontWeight: 'bold' }}>
            18 advanced prompting patterns for reliable LLM systems
          </p>
        </div>
      ),
      backgroundColor: '#34495E',
      notes: '18 techniques organized into 4 categories: Reasoning, Retrieval, Agentic, and Hybrid approaches'
        }
      ]
    },
    {
      id: 'technique-1',
      title: '1. Zero-shot Prompting',
      slides: [
        {
          id: 3,
          title: '1. Zero-shot Prompting',
          icon: { name: 'duo-bolt', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-bolt" sizeName="2x" style={{ color: '#3498db' }} />
            <h3>Ask the model to perform a task with clear instructions and no examples</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" style={{ color: '#9b59b6' }} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.9em', whiteSpace: 'pre-wrap' }}>
{`"Summarize the following article 
in 3 bullets for executives:
[paste text here]"`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" />
                When to Use
              </h4>
              <ul>
                <li>Quick baselines</li>
                <li>Well-known tasks</li>
                <li>Low token budget</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gauge-simple" sizeName="1x" />
                Complexity & Models
              </h4>
              <p><strong>Level:</strong> Simple</p>
              <p><strong>Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Works on most LLMs</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffb74d', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} />
                Limitations
              </h4>
              <ul>
                <li>May misinterpret intent</li>
                <li>Brittle on novel or nuanced tasks</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" style={{ color: '#2ecc71' }} />
                Real-World Example
              </h4>
              <p>Email triage — classify incoming emails into Urgent/Normal/Low priority categories</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#2980B9',
      notes: 'Zero-shot: Direct instructions without examples, good for baselines and well-known tasks'
        }
      ]
    },
    {
      id: 'technique-2',
      title: '2. Few-shot Prompting',
      slides: [
        {
          id: 4,
          title: '2. Few-shot Prompting',
          icon: { name: 'duo-list-ol', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-list-check" sizeName="2x" style={{ color: '#3498db' }} />
            <h3>Guide the model with a few labeled examples to shape outputs</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" style={{ color: '#9b59b6' }} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.85em', whiteSpace: 'pre-wrap' }}>
{`"You are a sentiment classifier.
Example: 'Loved it' -> positive
'Too slow' -> negative
Classify: 'It was okay, but pricey.'"`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" />
                When to Use
              </h4>
              <ul>
                <li>Custom formats</li>
                <li>Domain tone matching</li>
                <li>Edge cases</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gauge-simple" sizeName="1x" />
                Complexity
              </h4>
              <p><strong>Level:</strong> Simple–Intermediate</p>
              <p><strong>Models:</strong> Mid-size models benefit noticeably</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffb74d', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} />
                Limitations
              </h4>
              <ul>
                <li>Example bias</li>
                <li>Token overhead</li>
                <li>Data leakage if examples are sensitive</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" style={{ color: '#2ecc71' }} />
                Real-World Example
              </h4>
              <p>Support macros generation with style-consistent examples matching company terminology</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#3498DB',
      notes: 'Few-shot: Provide labeled examples to guide format, tone, and edge case handling'
        }
      ]
    },
    {
      id: 'technique-3',
      title: '3. Chain-of-Thought (CoT) Prompting',
      slides: [
        {
          id: 5,
          title: '3. Chain-of-Thought (CoT) Prompting',
          icon: { name: 'duo-brain', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-link" sizeName="2x" style={{ color: '#e67e22' }} />
            <h3>Ask the model to reason step-by-step before the final answer</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" style={{ color: '#9b59b6' }} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.85em', whiteSpace: 'pre-wrap' }}>
{`"Solve step-by-step: If a box has 12 
red and 8 blue marbles and 4 reds are 
removed, what fraction are red now? 
Think step by step."`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" />
                When to Use
              </h4>
              <ul>
                <li>Math/logic problems</li>
                <li>Multi-hop QA</li>
                <li>Planning tasks</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gauge-simple" sizeName="1x" />
                Complexity
              </h4>
              <p><strong>Level:</strong> Intermediate</p>
              <p><strong>Output:</strong> Intermediate reasoning + final answer</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffb74d', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} />
                Limitations
              </h4>
              <ul>
                <li>Longer outputs</li>
                <li>Potential for verbose hallucinations</li>
                <li>Smaller models may overfit</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" style={{ color: '#2ecc71' }} />
                Real-World Example
              </h4>
              <p>Price breakdown reasoning in finance approvals — step-by-step calculation of costs, taxes, discounts, ROI</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#D35400',
      notes: 'Chain-of-Thought: Step-by-step reasoning improves accuracy on math, logic, and multi-hop problems'
        }
      ]
    },
    {
      id: 'techniques-4-6',
      title: 'Reasoning Techniques (4-6)',
      slides: [
        {
          id: 6,
          title: 'Reasoning Techniques (4-6)',
          icon: { name: 'duo-brain', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }}>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#9b59b6', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-diagram-project" sizeName="1x" />
                4. Meta Prompting
              </h4>
              <p><strong>Concept:</strong> Specify abstract structure, syntax, and format rather than content-specific examples</p>
              <p style={{ marginTop: '8px', fontSize: '0.9em' }}><strong>Level:</strong> Intermediate</p>
              <p><strong>When:</strong> Standardized pipelines, tool integration, evaluation comparability</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Consistent, schema-compliant outputs</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Assumes task knowledge, may underperform on novel domains</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '5px' }}>
                💼 Unified incident report format across teams
              </p>
            </div>
            <div style={{ border: '2px solid #1abc9c', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#1abc9c', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-users" sizeName="1x" />
                5. Self-Consistency
              </h4>
              <p><strong>Concept:</strong> Sample multiple CoT paths and select the majority/most consistent answer</p>
              <p style={{ marginTop: '8px', fontSize: '0.9em' }}><strong>Level:</strong> Intermediate–Advanced</p>
              <p><strong>When:</strong> Arithmetic, commonsense reasoning, logic where single-pass is unstable</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Aggregated answer with higher reliability</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Higher latency/cost, correlated errors if prompt flawed</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(26, 188, 156, 0.1)', borderRadius: '5px' }}>
                💼 Benchmark problem sets (GSM8K) with voting
              </p>
            </div>
            <div style={{ border: '2px solid #f39c12', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#f39c12', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <SvgIcon iconName="duo-book" sizeName="1x" />
                6. Generate Knowledge
              </h4>
              <p><strong>Concept:</strong> First ask the model to generate background facts, then answer using those facts</p>
              <p style={{ marginTop: '8px', fontSize: '0.9em' }}><strong>Level:</strong> Intermediate</p>
              <p><strong>When:</strong> Commonsense QA, domain recall, exam-style questions</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Knowledge-grounded reasoning and answer</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Generated facts may be wrong, consider verification</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '5px' }}>
                💼 Medical symptom triage with risk-factor listing
              </p>
            </div>
          </div>
          <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>🧠 Advanced Reasoning:</strong> Meta prompting for structure, self-consistency for reliability, knowledge generation for grounding
          </div>
        </div>
      ),
      backgroundColor: '#8E44AD',
      notes: 'Meta prompting for schemas, self-consistency for voting, generate knowledge for fact-grounded answers'
        }
      ]
    },
    {
      id: 'techniques-7-8',
      title: '7-8. Prompt Chaining & Tree of Thoughts',
      slides: [
        {
          id: 7,
          title: '7-8. Prompt Chaining & Tree of Thoughts',
          icon: { name: 'duo-diagram-project', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.75em' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginBottom: '25px' }}>
            <SvgIcon iconName="duo-arrows-turn-to-dots" sizeName="3x" style={{ color: '#f39c12' }} />
            <SvgIcon iconName="duo-sitemap" sizeName="3x" style={{ color: '#e67e22' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div style={{ border: '2px solid #f39c12', borderRadius: '10px', padding: '18px' }}>
              <h3 style={{ color: '#f39c12', marginBottom: '12px' }}>7. Prompt Chaining (Hybrid)</h3>
              <p><strong>Concept:</strong> Break a task into subtasks across multiple prompts where outputs feed subsequent prompts</p>
              <p style={{ marginTop: '10px' }}><strong>Complexity:</strong> Intermediate</p>
              <p style={{ marginTop: '10px' }}><strong>When to Use:</strong> Complex workflows, transformation pipelines, data cleanup</p>
              <div style={{ marginTop: '12px' }}>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Multi-stage pipeline outputs (extractions → synthesis)</p>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Modular, debuggable components</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Orchestration complexity</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Error propagation without checks</p>
              </div>
              <p style={{ marginTop: '12px', padding: '10px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '5px' }}>
                <strong>💼 Real Example:</strong> Legal brief generation from case documents via extract→summarize→draft chain
              </p>
            </div>
            <div style={{ border: '2px solid #e67e22', borderRadius: '10px', padding: '18px' }}>
              <h3 style={{ color: '#e67e22', marginBottom: '12px' }}>8. Tree of Thoughts (ToT)</h3>
              <p><strong>Concept:</strong> Explore multiple reasoning branches with lookahead and backtracking (BFS/DFS/Beam)</p>
              <p style={{ marginTop: '10px' }}><strong>Complexity:</strong> Advanced</p>
              <p style={{ marginTop: '10px' }}><strong>When to Use:</strong> Search-heavy reasoning, puzzles and planning, complex decompositions</p>
              <div style={{ marginTop: '12px' }}>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Selected best reasoning path and solution</p>
                <p><strong style={{ color: '#2ecc71' }}>✓</strong> Explores multiple possibilities systematically</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Higher cost/latency</p>
                <p><strong style={{ color: '#e74c3c' }}>✗</strong> Requires search control and pruning</p>
              </div>
              <p style={{ marginTop: '12px', padding: '10px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '5px' }}>
                <strong>💼 Real Example:</strong> Strategic product roadmap trade-off exploration with systematic evaluation of feature paths
              </p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#E67E22',
      notes: 'Prompt chaining for pipelines, Tree of Thoughts for exploring multiple reasoning branches'
        }
      ]
    },
    {
      id: 'technique-9',
      title: '9. Retrieval-Augmented Generation (RAG)',
      slides: [
        {
          id: 8,
          title: '9. Retrieval-Augmented Generation (RAG)',
          icon: { name: 'duo-database', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-database" sizeName="2x" style={{ color: '#2ecc71' }} />
            <h3>Retrieve external documents and condition the model on them to ground responses</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" style={{ color: '#9b59b6' }} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.8em', whiteSpace: 'pre-wrap' }}>
{`"Given these retrieved passages, 
answer the user question. Cite sources.

Passages:
[1] First COVID-19 vaccine approved 
     December 2020.
[2] mRNA vaccines use genetic material...

Question: How do mRNA COVID vaccines 
work?"`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" />
                When to Use
              </h4>
              <ul>
                <li>Fresh/long-tail knowledge</li>
                <li>Compliance requirements</li>
                <li>Citation needs</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gauge-simple" sizeName="1x" />
                Complexity
              </h4>
              <p><strong>Level:</strong> Intermediate</p>
              <p><strong>Requirements:</strong> Needs retriever/vector DB</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffb74d', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} />
                Limitations
              </h4>
              <ul>
                <li>Garbage-in garbage-out</li>
                <li>Retrieval quality issues</li>
                <li>Citation drift</li>
                <li>Chunking challenges</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" style={{ color: '#2ecc71' }} />
                Real-World Example
              </h4>
              <p>Enterprise policy assistant with vector search over internal PDFs for precise citations</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#27AE60',
      notes: 'RAG: Ground responses in retrieved documents for fresh knowledge with citations'
        }
      ]
    },
    {
      id: 'techniques-10-14-16',
      title: 'Agentic Techniques (10, 14-16)',
      slides: [
        {
          id: 9,
          title: 'Agentic Techniques (10, 14-16)',
          icon: { name: 'duo-robot', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.68em' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-robot" sizeName="3x" style={{ color: '#9b59b6' }} />
            <SvgIcon iconName="duo-code" sizeName="3x" style={{ color: '#3498db' }} />
            <SvgIcon iconName="duo-arrows-spin" sizeName="3x" style={{ color: '#e67e22' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '18px' }}>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#9b59b6', marginBottom: '8px' }}>10. Automatic Reasoning & Tool-use (ART)</h4>
              <p><strong>Concept:</strong> Use LLM to auto-generate multi-step reasoning and interleave tool calls with observations</p>
              <p style={{ marginTop: '6px' }}><strong>When:</strong> Tasks needing external tools, search integration, code execution, database queries</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Tool-interleaved reasoning traces and answer</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Tool errors derail plans, requires sandboxing and guardrails</p>
              <p style={{ marginTop: '8px', padding: '8px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '5px' }}>
                💼 Zero-shot research assistant mixing search + calculation
              </p>
            </div>
            <div style={{ border: '2px solid #3498db', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#3498db', marginBottom: '8px' }}>14. Program-Aided LMs (PAL)</h4>
              <p><strong>Concept:</strong> Model writes code as intermediate steps and delegates execution to an interpreter</p>
              <p style={{ marginTop: '6px' }}><strong>When:</strong> Arithmetic tasks, symbolic reasoning, algorithmic problems</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Correct result from executed program</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Exec sandboxing required, runtime errors, code injection risk</p>
              <p style={{ marginTop: '8px', padding: '8px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '5px' }}>
                💼 Operations optimization via dynamic programming utilities
              </p>
            </div>
            <div style={{ border: '2px solid #e67e22', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#e67e22', marginBottom: '8px' }}>15. ReAct</h4>
              <p><strong>Concept:</strong> Interleave reasoning traces with actions and observations (think→act→observe loops)</p>
              <p style={{ marginTop: '6px' }}><strong>When:</strong> Knowledge-intensive QA, web tasks, interactive environments</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Transparent action-reasoning trajectory + answer</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Tool dependency, cascading errors from bad observations</p>
              <p style={{ marginTop: '8px', padding: '8px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '5px' }}>
                💼 Shopping agent planning and verifying specifications
              </p>
            </div>
            <div style={{ border: '2px solid #1abc9c', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#1abc9c', marginBottom: '8px' }}>16. Reflexion</h4>
              <p><strong>Concept:</strong> Agents self-evaluate outcomes and write linguistic feedback to improve future attempts</p>
              <p style={{ marginTop: '6px' }}><strong>When:</strong> Trial-and-error tasks, code development, planning scenarios, multi-episode agents</p>
              <p style={{ marginTop: '6px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Iteratively improved outputs guided by self-feedback</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Feedback quality varies, may entrench mistakes, high token usage</p>
              <p style={{ marginTop: '8px', padding: '8px', backgroundColor: 'rgba(26, 188, 156, 0.1)', borderRadius: '5px' }}>
                💼 Coding assistants iterating on failing test cases
              </p>
            </div>
          </div>
          <div style={{ marginTop: '18px', padding: '12px', backgroundColor: 'rgba(155, 89, 182, 0.15)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>🤖 Agentic:</strong> Tools, code execution, action loops, and self-improvement through feedback
          </div>
        </div>
      ),
      backgroundColor: '#8E44AD',
      notes: 'Agentic techniques: ART for tool use, PAL for code execution, ReAct for action loops, Reflexion for self-improvement'
        }
      ]
    },
    {
      id: 'techniques-11-13',
      title: 'Hybrid Techniques (11-13)',
      slides: [
        {
          id: 10,
          title: 'Hybrid Techniques (11-13)',
          icon: { name: 'duo-layer-group', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.7em' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-layer-group" sizeName="3x" style={{ color: '#f39c12' }} />
            <SvgIcon iconName="duo-sliders" sizeName="3x" style={{ color: '#e74c3c' }} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px' }}>
            <div style={{ border: '2px solid #f39c12', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#f39c12', marginBottom: '10px' }}>11. Automatic Prompt Engineer (APE)</h4>
              <p><strong>Concept:</strong> Automatically generate and rank candidate instructions based on I/O demonstrations</p>
              <p style={{ marginTop: '8px' }}><strong>Level:</strong> Advanced</p>
              <p><strong>When:</strong> Scaling prompt design, new tasks, rapid optimization</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Optimized instruction prompt</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Overfitting to validation, compute heavy, prompt hacking risks</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '5px' }}>
                💼 Customer service platform auto-tunes routing prompts
              </p>
            </div>
            <div style={{ border: '2px solid #e74c3c', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#e74c3c', marginBottom: '10px' }}>12. Active-Prompt</h4>
              <p><strong>Concept:</strong> Select uncertain examples for human CoT annotation to adapt few-shot exemplars</p>
              <p style={{ marginTop: '8px' }}><strong>Level:</strong> Advanced</p>
              <p><strong>When:</strong> Diverse datasets where fixed exemplars underperform</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Improved task-specific exemplars and accuracy</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Annotation cost, feedback-loop bias, orchestration complexity</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '5px' }}>
                💼 Math word-problem tutor adapting to student cohorts
              </p>
            </div>
            <div style={{ border: '2px solid #9b59b6', borderRadius: '10px', padding: '15px' }}>
              <h4 style={{ color: '#9b59b6', marginBottom: '10px' }}>13. Directional Stimulus Prompting (DSP)</h4>
              <p><strong>Concept:</strong> Use a small policy model to generate instance-specific hints to steer a larger LLM</p>
              <p style={{ marginTop: '8px' }}><strong>Level:</strong> Advanced</p>
              <p><strong>When:</strong> Precision framing, compliance content, pedagogical guidance, specialized summaries</p>
              <p style={{ marginTop: '8px' }}><strong style={{ color: '#2ecc71' }}>✓</strong> Guided outputs aligned to desired perspective</p>
              <p><strong style={{ color: '#e74c3c' }}>✗</strong> Stimulus drift, extra infrastructure for policy model, bias amplification</p>
              <p style={{ marginTop: '8px', fontSize: '0.95em', padding: '8px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '5px' }}>
                💼 Compliance-focused meeting summaries with regulatory emphasis
              </p>
            </div>
          </div>
          <div style={{ marginTop: '20px', padding: '12px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '8px', textAlign: 'center' }}>
            <strong>🔀 Hybrid:</strong> Meta-optimization (APE), active learning (Active-Prompt), and controlled steering (DSP)
          </div>
        </div>
      ),
      backgroundColor: '#E67E22',
      notes: 'Hybrid techniques: APE for prompt optimization, Active-Prompt for adaptive examples, DSP for guided outputs'
        }
      ]
    },
    {
      id: 'technique-17',
      title: '17. Multimodal Chain-of-Thought',
      slides: [
        {
          id: 11,
          title: '17. Multimodal Chain-of-Thought',
          icon: { name: 'duo-brain', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-image" sizeName="2x" style={{ color: '#9b59b6' }} />
            <h3>Combine vision (and/or audio) with text in step-by-step reasoning</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" style={{ color: '#9b59b6' }} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(155, 89, 182, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.85em', whiteSpace: 'pre-wrap' }}>
{`"Given the image [image] and question 
'<question>', list visual observations, 
relate them to text cues, then infer 
the answer step-by-step."`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" />
                When to Use
              </h4>
              <ul>
                <li>Charts/diagrams QA</li>
                <li>Science problems</li>
                <li>UI understanding</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gauge-simple" sizeName="1x" />
                Complexity
              </h4>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Models:</strong> GPT-4o, Claude 3.5, Gemini 1.5 Pro - Multimodal LLMs only</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffb74d', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} />
                Limitations
              </h4>
              <ul>
                <li>Hallucinated visual claims</li>
                <li>Requires robust vision models</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" style={{ color: '#2ecc71' }} />
                Real-World Example
              </h4>
              <p>ScienceQA-style diagram reasoning: "Analyze this circuit diagram, identify components, explain current flow"</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#8E44AD',
      notes: 'Multimodal CoT: Combines vision/audio with text for step-by-step reasoning on images, charts, and diagrams'
        }
      ]
    },
    {
      id: 'technique-18',
      title: '18. Graph Prompting',
      slides: [
        {
          id: 12,
          title: '18. Graph Prompting',
          icon: { name: 'duo-circle-nodes', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
            <SvgIcon iconName="duo-project-diagram" sizeName="2x" style={{ color: '#1abc9c' }} />
            <h3>Use graphs/knowledge graphs to structure context and reasoning for LLMs</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" style={{ color: '#9b59b6' }} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(26, 188, 156, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.85em', whiteSpace: 'pre-wrap' }}>
{`"From the corpus, extract entities/
relations into a mini knowledge graph. 
Using that graph, answer: <question>. 
Show the path used."`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" />
                When to Use
              </h4>
              <ul>
                <li>Multi-document QA</li>
                <li>Multi-hop reasoning</li>
                <li>Temporal/entity linking tasks</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-gauge-simple" sizeName="1x" />
                Complexity
              </h4>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Requirements:</strong> LLM + graph tools/DB</p>
              <p><strong>Output:</strong> Graph-grounded explanation and answer</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffb74d', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" style={{ color: '#ffb74d' }} />
                Limitations
              </h4>
              <ul>
                <li>KG construction errors</li>
                <li>Synchronization with evolving data</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" style={{ color: '#2ecc71' }} />
                Real-World Example
              </h4>
              <p>Due-diligence assistant tracing ownership across filings by constructing knowledge graphs</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#16A085',
      notes: 'Graph Prompting: Structure context and reasoning using knowledge graphs for multi-hop and entity-linking tasks'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 13,
          title: 'Technique Complexity Overview',
          icon: { name: 'duo-table', size: '5x' },
          content: (
        <div style={{ fontSize: '0.65em', margin: '0 auto' }}>
          <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <SvgIcon iconName="duo-chart-bar" sizeName="2x" />
            Complexity & Use Case Matrix
          </h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95em' }}>
            <thead>
              <tr style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)' }}>
                <th style={{ padding: '10px', border: '1px solid #555' }}>Complexity</th>
                <th style={{ padding: '10px', border: '1px solid #555' }}>Techniques</th>
                <th style={{ padding: '10px', border: '1px solid #555' }}>Best For</th>
                <th style={{ padding: '10px', border: '1px solid #555' }}>Infrastructure Needs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #555', color: '#2ecc71', fontWeight: 'bold' }}>Simple</td>
                <td style={{ padding: '10px', border: '1px solid #555' }}>1. Zero-shot<br/>2. Few-shot (simple)</td>
                <td style={{ padding: '10px', border: '1px solid #555' }}>Quick baselines, well-known tasks, email triage</td>
                <td style={{ padding: '10px', border: '1px solid #555' }}>LLM API only</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #555', color: '#f39c12', fontWeight: 'bold' }}>Intermediate</td>
                <td style={{ padding: '10px', border: '1px solid #555' }}>3. CoT<br/>4. Meta<br/>5. Self-Consistency<br/>6. Generate Knowledge<br/>7. Prompt Chaining<br/>9. RAG</td>
                <td style={{ padding: '10px', border: '1px solid #555' }}>Math/logic, standardized outputs, grounded answers, workflows</td>
                <td style={{ padding: '10px', border: '1px solid #555' }}>LLM + orchestration<br/>RAG needs vector DB</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #555', color: '#e74c3c', fontWeight: 'bold' }}>Advanced</td>
                <td style={{ padding: '10px', border: '1px solid #555' }}>8. Tree of Thoughts<br/>10. ART<br/>11-13. APE/Active/DSP<br/>14-16. PAL/ReAct/Reflexion<br/>17. Multimodal CoT<br/>18. Graph Prompting</td>
                <td style={{ padding: '10px', border: '1px solid #555' }}>Complex planning, tool use, code execution, optimization, multi-hop reasoning</td>
                <td style={{ padding: '10px', border: '1px solid #555' }}>LLM + tools + search control<br/>Code sandbox<br/>Active learning loops<br/>Graph databases</td>
              </tr>
            </tbody>
          </table>
          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
            <div style={{ padding: '10px', backgroundColor: 'rgba(46, 204, 113, 0.15)', borderRadius: '8px', textAlign: 'center' }}>
              <strong style={{ color: '#2ecc71' }}>🟢 Start Here</strong>
              <p style={{ fontSize: '0.95em', marginTop: '5px' }}>Zero-shot and few-shot for quick wins</p>
            </div>
            <div style={{ padding: '10px', backgroundColor: 'rgba(243, 156, 18, 0.15)', borderRadius: '8px', textAlign: 'center' }}>
              <strong style={{ color: '#f39c12' }}>🟡 Production Ready</strong>
              <p style={{ fontSize: '0.95em', marginTop: '5px' }}>CoT, RAG, and chaining for most use cases</p>
            </div>
            <div style={{ padding: '10px', backgroundColor: 'rgba(231, 76, 60, 0.15)', borderRadius: '8px', textAlign: 'center' }}>
              <strong style={{ color: '#e74c3c' }}>🔴 Specialized</strong>
              <p style={{ fontSize: '0.95em', marginTop: '5px' }}>Advanced techniques for complex problems</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#34495E',
      notes: 'Complexity matrix: Simple (zero/few-shot), Intermediate (CoT/RAG), Advanced (agentic/hybrid with tools)'
        },
        {
          id: 14,
          title: 'Best Practices & Recommendations',
          icon: { name: 'duo-clipboard-check', size: '5x' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginBottom: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" />
                Getting Started
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>Start Simple:</strong> Begin with zero-shot, move to few-shot if needed</li>
                <li><strong>Add CoT:</strong> For reasoning tasks, add "think step-by-step"</li>
                <li><strong>Use RAG:</strong> When you need fresh knowledge or citations</li>
                <li><strong>Chain When Complex:</strong> Break multi-step tasks into pipelines</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db', marginTop: '20px', marginBottom: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" />
                Production Considerations
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>Monitor Outputs:</strong> Log prompts and responses</li>
                <li><strong>Version Control:</strong> Track prompt templates like code</li>
                <li><strong>Cost Management:</strong> Use simpler techniques when possible</li>
                <li><strong>Latency Budgets:</strong> Consider multi-call overhead</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12', marginBottom: '15px' }}>
                <SvgIcon iconName="duo-wrench" sizeName="1x" />
                When to Scale Up
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>Inconsistent Outputs:</strong> Try self-consistency or meta-prompting</li>
                <li><strong>Tool Needs:</strong> Move to ReAct or ART for API/search</li>
                <li><strong>Code Tasks:</strong> Use PAL for algorithmic problems</li>
                <li><strong>Multi-hop:</strong> Consider Graph Prompting or ToT</li>
                <li><strong>Optimization:</strong> Try APE for automatic prompt tuning</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e74c3c', marginTop: '20px', marginBottom: '15px' }}>
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="1x" />
                Common Pitfalls
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>Over-engineering:</strong> Don't use advanced techniques prematurely</li>
                <li><strong>Prompt Drift:</strong> Test on diverse examples regularly</li>
                <li><strong>Tool Failures:</strong> Add error handling and fallbacks</li>
                <li><strong>Token Bloat:</strong> Watch cumulative costs in multi-call patterns</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#27AE60',
      notes: 'Best practices: Start simple, scale up judiciously, monitor production, avoid over-engineering'
        },
        {
          id: 15,
          title: 'Decision Framework',
          icon: { name: 'duo-compass', size: '5x' },
          content: (
        <div style={{ margin: '0 auto', fontSize: '0.8em' }}>
          <h3 style={{ marginBottom: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
            <SvgIcon iconName="duo-route" sizeName="2x" style={{ color: '#3498db' }} />
            Which Technique Should You Use?
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px', borderLeft: '4px solid #3498db' }}>
              <strong>❓ Need a quick answer to a standard task?</strong>
              <p style={{ marginTop: '8px' }}>→ Start with <strong>Zero-shot</strong>. If format matters, add 2-3 examples (<strong>Few-shot</strong>)</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(230, 126, 34, 0.1)', borderRadius: '10px', borderLeft: '4px solid #e67e22' }}>
              <strong>🧮 Math, logic, or multi-step reasoning?</strong>
              <p style={{ marginTop: '8px' }}>→ Use <strong>Chain-of-Thought</strong>. If unstable, try <strong>Self-Consistency</strong> (voting)</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.1)', borderRadius: '10px', borderLeft: '4px solid #2ecc71' }}>
              <strong>📚 Need fresh knowledge or citations?</strong>
              <p style={{ marginTop: '8px' }}>→ Use <strong>RAG</strong> with vector search over your documents</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(155, 89, 182, 0.1)', borderRadius: '10px', borderLeft: '4px solid #9b59b6' }}>
              <strong>🤖 Need to call external tools or APIs?</strong>
              <p style={{ marginTop: '8px' }}>→ Use <strong>ReAct</strong> (transparent reasoning) or <strong>ART</strong> (auto-planning)</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(243, 156, 18, 0.1)', borderRadius: '10px', borderLeft: '4px solid #f39c12' }}>
              <strong>🔧 Need exact calculations or code?</strong>
              <p style={{ marginTop: '8px' }}>→ Use <strong>PAL</strong> (program-aided) to write and execute Python code</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(231, 76, 60, 0.1)', borderRadius: '10px', borderLeft: '4px solid #e74c3c' }}>
              <strong>🎯 Complex multi-stage workflow?</strong>
              <p style={{ marginTop: '8px' }}>→ Break it down with <strong>Prompt Chaining</strong> (extract → analyze → synthesize)</p>
            </div>
            <div style={{ padding: '15px', backgroundColor: 'rgba(149, 165, 166, 0.1)', borderRadius: '10px', borderLeft: '4px solid #95a5a6' }}>
              <strong>🔬 Research-grade optimization needed?</strong>
              <p style={{ marginTop: '8px' }}>→ Explore <strong>ToT</strong> (tree search), <strong>APE</strong> (auto prompt engineering), or <strong>Graph Prompting</strong></p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#34495E',
      notes: 'Decision framework: Quick guide for selecting the right technique based on your task requirements'
        },
        {
          id: 16,
          title: 'Summary: The Prompt Engineering Ladder',
          icon: { name: 'duo-book-open', size: '5x' },
          content: (
            <div style={{ textAlign: 'left' }}>
          <h2 style={{ marginBottom: '40px' }}>From Simple to Advanced</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px', margin: '0 auto', fontSize: '0.85em' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.15)', borderRadius: '10px' }}>
              <div style={{ fontSize: '2em', minWidth: '50px', textAlign: 'center' }}>🟢</div>
              <div style={{ textAlign: 'left' }}>
                <strong>Level 1: Foundations</strong>
                <p style={{ marginTop: '5px' }}>Zero-shot, Few-shot → Start here for 80% of tasks</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.15)', borderRadius: '10px' }}>
              <div style={{ fontSize: '2em', minWidth: '50px', textAlign: 'center' }}>🔵</div>
              <div style={{ textAlign: 'left' }}>
                <strong>Level 2: Reasoning</strong>
                <p style={{ marginTop: '5px' }}>CoT, Meta, Self-Consistency → Add when logic matters</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '15px', backgroundColor: 'rgba(243, 156, 18, 0.15)', borderRadius: '10px' }}>
              <div style={{ fontSize: '2em', minWidth: '50px', textAlign: 'center' }}>🟡</div>
              <div style={{ textAlign: 'left' }}>
                <strong>Level 3: Retrieval & Orchestration</strong>
                <p style={{ marginTop: '5px' }}>RAG, Prompt Chaining → Production workflows</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '15px', backgroundColor: 'rgba(155, 89, 182, 0.15)', borderRadius: '10px' }}>
              <div style={{ fontSize: '2em', minWidth: '50px', textAlign: 'center' }}>🟣</div>
              <div style={{ textAlign: 'left' }}>
                <strong>Level 4: Agentic</strong>
                <p style={{ marginTop: '5px' }}>ReAct, PAL, Reflexion → Tools and self-improvement</p>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '15px', backgroundColor: 'rgba(231, 76, 60, 0.15)', borderRadius: '10px' }}>
              <div style={{ fontSize: '2em', minWidth: '50px', textAlign: 'center' }}>🔴</div>
              <div style={{ textAlign: 'left' }}>
                <strong>Level 5: Advanced</strong>
                <p style={{ marginTop: '5px' }}>ToT, APE, Graph Prompting → Research & optimization</p>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '50px', padding: '20px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px' }}>
            <p style={{ fontSize: '1.1em', margin: 0 }}>
              <strong>⚡ Key Insight:</strong> Start at Level 1, climb only as high as your task requires
            </p>
          </div>
        </div>
      ),
      backgroundColor: '#2C3E50',
      notes: 'Summary: Progressive ladder from simple zero-shot to advanced research techniques - climb only as needed'
        }
      ]
    }
  ]
};

