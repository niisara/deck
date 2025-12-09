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
          <h2 style={{ marginBottom: '30px' }}>A Comprehensive Guide to 18 Advanced Prompting Patterns</h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '50px', marginTop: '50px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <SvgIcon iconName="duo-brain" sizeName="4x" style={{ color: '#3498db' }} />
              <p style={{ marginTop: '10px', fontSize: '0.9em' }}>Reasoning</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <SvgIcon iconName="duo-database" sizeName="4x" style={{ color: '#2ecc71' }} />
              <p style={{ marginTop: '10px', fontSize: '0.9em' }}>Retrieval</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <SvgIcon iconName="duo-robot" sizeName="4x" style={{ color: '#9b59b6' }} />
              <p style={{ marginTop: '10px', fontSize: '0.9em' }}>Agentic</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
          icon: { name: 'duo-list-check' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.72em' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3498db', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-brain" sizeName="1x" darkModeInvert={true} />
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
                <SvgIcon iconName="duo-database" sizeName="1x" darkModeInvert={true} />
                Retrieval (9)
              </h4>
              <ul style={{ lineHeight: '1.7', fontSize: '0.95em' }}>
                <li>9. Retrieval-Augmented Generation (RAG)</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9b59b6', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-robot" sizeName="1x" darkModeInvert={true} />
                Agentic Techniques (10, 14-16)
              </h4>
              <ul style={{ lineHeight: '1.7', fontSize: '0.95em' }}>
                <li>10. Automatic Reasoning & Tool-use (ART)</li>
                <li>14. Program-Aided LMs (PAL)</li>
                <li>15. ReAct</li>
                <li>16. Reflexion</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f39c12', marginTop: '15px', marginBottom: '12px' }}>
                <SvgIcon iconName="duo-layer-group" sizeName="1x" darkModeInvert={true} />
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
          icon: { name: 'duo-bolt' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em', color: '#3b9ad9' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-star-bright" sizeName="1x" darkModeInvert={true} />
                Definition / Concept
              </h4>
              <p>Ask the model to perform a task with clear instructions and no examples.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" darkModeInvert={true} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.5em', whiteSpace: 'pre-wrap' }}>
{`"Summarize the following article 
in 3 bullets for executives:
[paste text here]"`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                When to Use
              </h4>
              <ul>
                <li>Quick baselines</li>
                <li>Well-known tasks</li>
                <li>Low token budget</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                Output Type / Goal
              </h4>
              <ul>
                <li>Direct answer or formatted summary.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Complexity & Models
              </h4>
              <p><strong>Level:</strong> Simple</p>
              <p><strong>Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Works on most LLMs</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" darkModeInvert={true} />
                Limitations
              </h4>
              <ul>
                <li>May misinterpret intent</li>
                <li>Brittle on novel or nuanced tasks</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" darkModeInvert={true} />
                Real-World Example
              </h4>
              <p>Email triage — classify incoming emails into Urgent/Normal/Low priority categories with clear definitions of each level.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#103e5d',
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
          icon: { name: 'duo-list-ol' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em', color: '#6da3c9' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-star-bright" sizeName="1x" darkModeInvert={true} />
                Definition / Concept
              </h4>
              <p>Guide the model with a few labeled examples to shape outputs.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" darkModeInvert={true} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.5em', whiteSpace: 'pre-wrap' }}>
{`"You are a sentiment classifier.
Example: 'Loved it' -> positive
'Too slow' -> negative
Classify: 'It was okay, but pricey.'"`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                When to Use
              </h4>
              <ul>
                <li>Custom formats</li>
                <li>Domain tone</li>
                <li>Edge cases</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                Output Type / Goal
              </h4>
              <ul>
                <li>Classification/structured outputs matching examples.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Complexity
              </h4>
              <p><strong>Level:</strong> Simple–Intermediate</p>
              <p><strong>Models:</strong>GPT-4/4o, Claude 3.5, Gemini 1.5 - Mid-size models benefit noticeably</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" darkModeInvert={true} />
                Limitations
              </h4>
              <ul>
                <li>Example bias</li>
                <li>Token overhead</li>
                <li>Data leakage if examples are sensitive</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" darkModeInvert={true} />
                Real-World Example
              </h4>
              <p>Support macros generation with style-consistent examples that match company terminology and formatting guidelines.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#284d67',
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
          icon: { name: 'duo-brain' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em', color: '#fdb17f' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-star-bright" sizeName="1x" darkModeInvert={true} />
                Definition / Concept
              </h4>
              <p>Ask the model to reason step-by-step before the final answer.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" darkModeInvert={true} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.5em', whiteSpace: 'pre-wrap' }}>
{`"Solve step-by-step: If a box has 12 red and 8 blue marbles and 4 reds are removed, what fraction are red now? Think step by step."`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                When to Use
              </h4>
              <ul>
                <li>Math/logic problems</li>
                <li>Multi-hop QA</li>
                <li>Planning tasks</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                Output Type / Goal
              </h4>
              <ul>
                <li>Intermediate reasoning + final answer.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Complexity
              </h4>
              <p><strong>Level:</strong> Intermediate</p>
              <p><strong>Models:</strong>GPT-4/4o, Claude 3.5, Gemini 1.5 - Smaller models may overfit</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" darkModeInvert={true} />
                Limitations
              </h4>
              <ul>
                <li>Longer outputs</li>
                <li>Potential for verbose hallucinations</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" darkModeInvert={true} />
                Real-World Example
              </h4>
              <p>Price breakdown reasoning in finance approvals — showing step-by-step calculation of total costs, taxes, discounts, and ROI to justify purchase decisions.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#91420e',
      notes: 'Chain-of-Thought: Step-by-step reasoning improves accuracy on math, logic, and multi-hop problems'
        }
      ]
    },
    {
      id: 'technique-4',
      title: '4. Meta Prompting',
      slides: [
        {
          id: 6,
          title: '4. Meta Prompting',
          icon: { name: 'duo-lightbulb' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em', color: '#6dff98' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-star-bright" sizeName="1x" darkModeInvert={true} />
                Definition / Concept
              </h4>
              <p>Specify abstract structure, syntax, and format rather than content-specific examples.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" darkModeInvert={true} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.5em', whiteSpace: 'pre-wrap' }}>
{`"Problem: <text>. Goal: <target>. Constraints: <list>.
Output schema: JSON with fields [steps, rationale, answer].
Populate schema only."`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                When to Use
              </h4>
              <ul>
                <li>Standardized pipelines</li>
                <li>Tool integration</li>
                <li>Evaluation comparability</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                Output Type / Goal
              </h4>
              <ul>
                <li>Consistent, schema-compliant outputs.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Complexity
              </h4>
              <p><strong>Level:</strong> Intermediate</p>
              <p><strong>Models:</strong>GPT-4/4o, Claude 3.5, Gemini 1.5</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" darkModeInvert={true} />
                Limitations
              </h4>
              <ul>
                <li>Assumes task knowledge</li>
                <li>May underperform on novel domains without examples</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" darkModeInvert={true} />
                Real-World Example
              </h4>
              <p>Unified incident report format across teams — creating a consistent structure for reporting issues with categorical fields that make analysis and tracking more efficient.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#0e9135',
      notes: 'Chain-of-Thought: Step-by-step reasoning improves accuracy on math, logic, and multi-hop problems'
        }
      ]
    },
    {
      id: 'technique-5',
      title: '5. Self-Consistency',
      slides: [
        {
          id: 7,
          title: '5. Self-Consistency',
          icon: { name: 'duo-brain-circuit' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em', color: '#e97aff' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-star-bright" sizeName="1x" darkModeInvert={true} />
                Definition / Concept
              </h4>
              <p>Sample multiple CoT paths and select the majority/most consistent answer.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" darkModeInvert={true} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.5em', whiteSpace: 'pre-wrap' }}>
{`"Generate 5 step-by-step solutions. Provide only the final numeric answer for each, then vote for the most frequent."`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                When to Use
              </h4>
              <ul>
                <li>Arithmetic</li>
                <li>Commonsense reasoning</li>
                <li>Logic where single-pass is unstable</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                Output Type / Goal
              </h4>
              <ul>
                <li>Aggregated answer with higher reliability.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Complexity
              </h4>
              <p><strong>Level:</strong> Intermediate–Advanced</p>
              <p><strong>Models:</strong>GPT-4/4o, Claude 3.5, Gemini 1.5 - Needs temperature sampling</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" darkModeInvert={true} />
                Limitations
              </h4>
              <ul>
                <li>Higher latency/cost</li>
                <li>Correlated errors if prompt is flawed</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" darkModeInvert={true} />
                Real-World Example
              </h4>
              <p>Benchmark problem sets (GSM8K-style) with voting on multiple generated solutions to improve mathematical accuracy.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#7b0e91',
      notes: 'Chain-of-Thought: Step-by-step reasoning improves accuracy on math, logic, and multi-hop problems'
        }
      ]
    },
    {
      id: 'technique-6',
      title: '6. Generate Knowledge Prompting',
      slides: [
        {
          id: 8,
          title: '6. Generate Knowledge Prompting',
          icon: { name: 'duo-book-open' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em', color: '#ffe676' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-star-bright" sizeName="1x" darkModeInvert={true} />
                Definition / Concept
              </h4>
              <p>First ask the model to generate background facts, then answer using those facts.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" darkModeInvert={true} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.5em', whiteSpace: 'pre-wrap' }}>
{`"Before answering, list 3 relevant facts about <topic>. Then, using those facts, answer: <question>"`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                When to Use
              </h4>
              <ul>
                <li>Commonsense QA</li>
                <li>Domain recall</li>
                <li>Exam-style questions</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                Output Type / Goal
              </h4>
              <ul>
                <li>Knowledge-grounded reasoning and answer.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Complexity
              </h4>
              <p><strong>Level:</strong> Intermediate</p>
              <p><strong>Models:</strong>GPT-4/4o, Claude 3.5, Gemini 1.5</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" darkModeInvert={true} />
                Limitations
              </h4>
              <ul>
                <li>Generated facts may be wrong</li>
                <li>Consider verification or retrieval</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" darkModeInvert={true} />
                Real-World Example
              </h4>
              <p>Medical symptom triage with preliminary risk-factor listing before diagnosis suggestions.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#7d6b1c',
      notes: 'Chain-of-Thought: Step-by-step reasoning improves accuracy on math, logic, and multi-hop problems'
        }
      ]
    },
    {
      id: 'technique-7',
      title: '7. Prompt Chaining',
      slides: [
        {
          id: 9,
          title: '7. Prompt Chaining',
          icon: { name: 'duo-diagram-project' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em', color: '#ff8eb3' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-star-bright" sizeName="1x" darkModeInvert={true} />
                Definition / Concept
              </h4>
              <p>Break a task into subtasks across multiple prompts where outputs feed subsequent prompts.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" darkModeInvert={true} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.5em', whiteSpace: 'pre-wrap' }}>
{`"Step 1: Extract key quotes from document about <question>.
Step 2: Using quotes, answer <question> with citations."`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                When to Use
              </h4>
              <ul>
                <li>Complex workflows</li>
                <li>Transformation pipelines</li>
                <li>Data cleanup</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                Output Type / Goal
              </h4>
              <ul>
                <li>Multi-stage pipeline outputs (extractions → synthesis).</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Complexity
              </h4>
              <p><strong>Level:</strong> Intermediate</p>
              <p><strong>Models:</strong>GPT-4/4o, Claude 3.5, Gemini 1.5 - Any LLM; long-context models help</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" darkModeInvert={true} />
                Limitations
              </h4>
              <ul>
                <li>Orchestration complexity</li>
                <li>Error propagation without checks</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" darkModeInvert={true} />
                Real-World Example
              </h4>
              <p>Legal brief generation from case documents via extract→summarize→draft chain.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#7d1c3c',
      notes: 'Chain-of-Thought: Step-by-step reasoning improves accuracy on math, logic, and multi-hop problems'
        }
      ]
    },
    {
      id: 'technique-8',
      title: '8. Tree of Thoughts (ToT)',
      slides: [
        {
          id: 10,
          title: '8. Tree of Thoughts (ToT)',
          icon: { name: 'duo-shield-check' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em', color: '#909aff' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-star-bright" sizeName="1x" darkModeInvert={true} />
                Definition / Concept
              </h4>
              <p>Explore multiple reasoning branches with lookahead and backtracking (BFS/DFS/Beam).</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" darkModeInvert={true} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.5em', whiteSpace: 'pre-wrap' }}>
{`"Propose 3 candidate next steps. Label each as sure/maybe/impossible for reaching the goal. Expand promising branches until a solution."`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                When to Use
              </h4>
              <ul>
                <li>Search-heavy reasoning</li>
                <li>Puzzles and planning</li>
                <li>Complex decompositions</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                Output Type / Goal
              </h4>
              <ul>
                <li>Selected best reasoning path and final solution.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Complexity
              </h4>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Models:</strong>GPT-4/4o, Claude 3.5, Gemini 1.5 - Requires controller logic</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" darkModeInvert={true} />
                Limitations
              </h4>
              <ul>
                <li>Higher cost/latency</li>
                <li>Requires search control and pruning</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" darkModeInvert={true} />
                Real-World Example
              </h4>
              <p>Strategic product roadmap trade-off exploration — systematically evaluating different feature prioritization paths and their downstream impacts on market adoption, engineering resources, and business outcomes.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1c257d',
      notes: 'Chain-of-Thought: Step-by-step reasoning improves accuracy on math, logic, and multi-hop problems'
        }
      ]
    },
    {
      id: 'technique-9',
      title: '9. Retrieval-Augmented Generation (RAG)',
      slides: [
        {
          id: 11,
          title: '9. Retrieval-Augmented Generation (RAG)',
          icon: { name: 'duo-database' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em', color: '#4ed184' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-star-bright" sizeName="1x" darkModeInvert={true} />
                Definition / Concept
              </h4>
              <p>Retrieve external documents and condition the model on them to ground responses.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" darkModeInvert={true} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.5em', whiteSpace: 'pre-wrap' }}>
{`"Given these retrieved passages, answer the user question. Cite sources by ID.
Passages:
[1] The first COVID-19 vaccine was approved for emergency use in December 2020.
[2] mRNA vaccines use genetic material to teach cells to make a protein that triggers an immune response.
[3] Traditional vaccines use weakened or inactivated viruses.
Question: How do mRNA COVID vaccines work?"`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                When to Use
              </h4>
              <ul>
                <li>Fresh/long-tail knowledge</li>
                <li>Compliance requirements</li>
                <li>Citation needs</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                Output Type / Goal
              </h4>
              <ul>
                <li>Grounded, cited answers.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Complexity
              </h4>
              <p><strong>Level:</strong> Intermediate</p>
              <p><strong>Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Needs retriever/vector DB</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" darkModeInvert={true} />
                Limitations
              </h4>
              <ul>
                <li>Garbage-in garbage-out</li>
                <li>Retrieval quality issues</li>
                <li>Citation drift</li>
                <li>Chunking challenges</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" darkModeInvert={true} />
                Real-World Example
              </h4>
              <p>Enterprise policy assistant with vector search over internal PDFs, enabling employees to query company guidelines with precise citations to source documents.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1a673a',
      notes: 'RAG: Ground responses in retrieved documents for fresh knowledge with citations'
        }
      ]
    },
    {
      id: 'technique-10',
      title: '10. Automatic Reasoning and Tool-use (ART)',
      slides: [
        {
          id: 12,
          title: '10. Automatic Reasoning and Tool-use (ART)',
          icon: { name: 'duo-brain' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em', color: '#73f4ff' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-star-bright" sizeName="1x" darkModeInvert={true} />
                Definition / Concept
              </h4>
              <p>Use a frozen LLM to auto-generate multi-step reasoning and interleave tool calls with observations.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" darkModeInvert={true} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.5em', whiteSpace: 'pre-wrap' }}>
{`"Given task <T>, plan steps. When needed, call TOOL[search/calculator] and integrate results before continuing. Provide final answer."`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                When to Use
              </h4>
              <ul>
                <li>Tasks needing external tools</li>
                <li>Search integration</li>
                <li>Code execution</li>
                <li>Database queries</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                Output Type / Goal
              </h4>
              <ul>
                <li>Tool-interleaved reasoning traces and answer.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Complexity
              </h4>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Tool APIs; orchestration runtime</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" darkModeInvert={true} />
                Limitations
              </h4>
              <ul>
                <li>Tool errors derail plans</li>
                <li>Requires sandboxing and guardrails</li>
                <li>Complex orchestration</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" darkModeInvert={true} />
                Real-World Example
              </h4>
              <p>Zero-shot research assistant that can automatically mix search engine queries with mathematical calculation tools to answer complex questions without explicit instructions for each step.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1a6167',
      notes: 'RAG: Ground responses in retrieved documents for fresh knowledge with citations'
        }
      ]
    },
    {
      id: 'technique-11',
      title: '11. Automatic Prompt Engineer (APE)',
      slides: [
        {
          id: 13,
          title: '11. Automatic Prompt Engineer (APE)',
          icon: { name: 'duo-clipboard-check' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em', color: '#73f4ff' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-star-bright" sizeName="1x" darkModeInvert={true} />
                Definition / Concept
              </h4>
              <p>Automatically generate and rank candidate instructions based on I/O demonstrations.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" darkModeInvert={true} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.5em', whiteSpace: 'pre-wrap' }}>
{`"Given these I/O pairs:
Input: 'What is the capital of France?'
Output: 'The capital of France is Paris.'

Input: 'How many planets are in our solar system?'
Output: 'There are 8 planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.'

Propose 5 instruction prompts that would elicit these types of responses. Then execute each on the validation set and rank them by accuracy."
`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                When to Use
              </h4>
              <ul>
                <li>Scaling prompt design</li>
                <li>New tasks</li>
                <li>Rapid optimization</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                Output Type / Goal
              </h4>
              <ul>
                <li>Optimized instruction prompt that consistently produces desired behavior across examples.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Complexity
              </h4>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Requires evaluation loop</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" darkModeInvert={true} />
                Limitations
              </h4>
              <ul>
                <li>Overfitting to validation</li>
                <li>Compute heavy</li>
                <li>Prompt hacking risks</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" darkModeInvert={true} />
                Real-World Example
              </h4>
              <p>Customer service platform uses APE to automatically tune prompt templates for routing customer intent. The system uses historical customer queries and agent responses as I/O pairs, generates multiple prompt candidates, tests them on validation data, and deploys the highest-performing prompt to production.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1a6167',
      notes: 'RAG: Ground responses in retrieved documents for fresh knowledge with citations'
        }
      ]
    },
    {
      id: 'technique-12',
      title: '12. Active-Prompt',
      slides: [
        {
          id: 14,
          title: '12. Active-Prompt',
          icon: { name: 'duo-rocket' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em', color: '#ff7798' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-star-bright" sizeName="1x" darkModeInvert={true} />
                Definition / Concept
              </h4>
              <p>Select uncertain examples for human CoT annotation to adapt few-shot exemplars.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" darkModeInvert={true} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.5em', whiteSpace: 'pre-wrap' }}>
{`"Generate k answers with CoT for these questions. Compute disagreement. Select top-m uncertain for human CoT annotation; update exemplar set."`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                When to Use
              </h4>
              <ul>
                <li>Diverse datasets where fixed exemplars underperform</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                Output Type / Goal
              </h4>
              <ul>
                <li>Improved task-specific exemplars and accuracy.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Complexity
              </h4>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Needs active learning loop</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" darkModeInvert={true} />
                Limitations
              </h4>
              <ul>
                <li>Annotation cost</li>
                <li>Feedback-loop bias</li>
                <li>Orchestration complexity</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" darkModeInvert={true} />
                Real-World Example
              </h4>
              <p>Math word-problem tutor adapting to student cohorts.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#671a2d',
      notes: 'RAG: Ground responses in retrieved documents for fresh knowledge with citations'
        }
      ]
    },
    {
      id: 'technique-13',
      title: '13. Directional Stimulus Prompting (DSP)',
      slides: [
        {
          id: 15,
          title: '13. Directional Stimulus Prompting (DSP)',
          icon: { name: 'duo-compass' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em', color: '#d77aff' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-star-bright" sizeName="1x" darkModeInvert={true} />
                Definition / Concept
              </h4>
              <p>Use a small policy model to generate instance-specific hints to steer a larger LLM.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" darkModeInvert={true} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.5em', whiteSpace: 'pre-wrap' }}>
{`"Stimulus: Focus on safety trade-offs and cite at least two risks.
Task: Summarize <report> for a safety board in 150 words."`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                When to Use
              </h4>
              <ul>
                <li>Precision framing</li>
                <li>Compliance content</li>
                <li>Pedagogical guidance</li>
                <li>Specialized summaries</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                Output Type / Goal
              </h4>
              <ul>
                <li>Guided outputs aligned to a desired perspective.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Complexity
              </h4>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - + Policy LM (small, tunable)</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" darkModeInvert={true} />
                Limitations
              </h4>
              <ul>
                <li>Stimulus drift</li>
                <li>Extra infrastructure to train/host policy model</li>
                <li>Potential for bias amplification</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" darkModeInvert={true} />
                Real-World Example
              </h4>
              <p>Compliance-focused meeting summaries with required emphasis on regulatory requirements, risk factors, and action items with clear ownership.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#501a67',
      notes: 'RAG: Ground responses in retrieved documents for fresh knowledge with citations'
        }
      ]
    },
    {
      id: 'technique-14',
      title: '14. Program-Aided Language Models (PAL)',
      slides: [
        {
          id: 16,
          title: '14. Program-Aided Language Models (PAL)',
          icon: { name: 'duo-code' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em', color: '#f2ff71' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-star-bright" sizeName="1x" darkModeInvert={true} />
                Definition / Concept
              </h4>
              <p>Model writes code as intermediate steps and delegates execution to an interpreter.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" darkModeInvert={true} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.5em', whiteSpace: 'pre-wrap' }}>
{`"Write a Python function that computes the minimum coins for amount=47 given denominations [1,4,6]. Return only the final numeric result."`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                When to Use
              </h4>
              <ul>
                <li>Arithmetic tasks</li>
                <li>Symbolic reasoning</li>
                <li>Algorithmic problems</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                Output Type / Goal
              </h4>
              <ul>
                <li>Correct result from executed program.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Complexity
              </h4>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Models:</strong> GPT-4o, Claude 3.5, Gemini 1.5 Pro - + Python runtime</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" darkModeInvert={true} />
                Limitations
              </h4>
              <ul>
                <li>Exec sandboxing required</li>
                <li>Runtime errors</li>
                <li>Code injection risk if inputs untrusted</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" darkModeInvert={true} />
                Real-World Example
              </h4>
              <p>Operations optimization via dynamic programming utilities — solving inventory management allocation problems that need exact solutions with complex constraints.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#60671a',
      notes: 'RAG: Ground responses in retrieved documents for fresh knowledge with citations'
        }
      ]
    },
    {
      id: 'technique-15',
      title: '15. ReAct',
      slides: [
        {
          id: 17,
          title: '15. ReAct',
          icon: { name: 'duo-brain' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em', color: '#75e0ff' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-star-bright" sizeName="1x" darkModeInvert={true} />
                Definition / Concept
              </h4>
              <p>Interleave reasoning traces with actions and observations (think→act→observe loops).</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" darkModeInvert={true} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.5em', whiteSpace: 'pre-wrap' }}>
{`Question: <q>
Thought: <plan step>
Action: Search[<query>]
Observation: <result>
...
Repeat until enough info, then give Final Answer: <answer>`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                When to Use
              </h4>
              <ul>
                <li>Knowledge-intensive QA</li>
                <li>Web tasks</li>
                <li>Interactive environments</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                Output Type / Goal
              </h4>
              <ul>
                <li>Transparent action-reasoning trajectory + answer.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Complexity
              </h4>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Tool APIs or environments required</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" darkModeInvert={true} />
                Limitations
              </h4>
              <ul>
                <li>Tool dependency</li>
                <li>Cascading errors from bad observations</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" darkModeInvert={true} />
                Real-World Example
              </h4>
              <p>Shopping agent (WebShop) planning and verifying product specifications, comparing options and justifying recommendations through reasoning and external search.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1a5667',
      notes: 'RAG: Ground responses in retrieved documents for fresh knowledge with citations'
        }
      ]
    },
    {
      id: 'technique-16',
      title: '16. Reflexion',
      slides: [
        {
          id: 18,
          title: '16. Reflexion',
          icon: { name: 'duo-lightbulb' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em', color: '#d17bff' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-star-bright" sizeName="1x" darkModeInvert={true} />
                Definition / Concept
              </h4>
              <p>Agents self-evaluate outcomes and write linguistic feedback to improve future attempts.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" darkModeInvert={true} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.5em', whiteSpace: 'pre-wrap' }}>
{`"Attempt the task. Then write a concise self-critique with 3 improvements. Use that critique to produce a refined attempt."`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                When to Use
              </h4>
              <ul>
                <li>Trial-and-error tasks</li>
                <li>Code development</li>
                <li>Planning scenarios</li>
                <li>Multi-episode agents</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                Output Type / Goal
              </h4>
              <ul>
                <li>Iteratively improved outputs guided by self-feedback.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Complexity
              </h4>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Optional memory store</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" darkModeInvert={true} />
                Limitations
              </h4>
              <ul>
                <li>Feedback quality varies</li>
                <li>May entrench mistakes without checks</li>
                <li>Can increase token usage significantly</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" darkModeInvert={true} />
                Real-World Example
              </h4>
              <p>Coding assistants iterating on failing test cases. The agent writes code, analyzes test failures, critiques its approach, then generates an improved solution based on its own feedback until all tests pass.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#4c1a67',
      notes: 'RAG: Ground responses in retrieved documents for fresh knowledge with citations'
        }
      ]
    },
    {
      id: 'technique-17',
      title: '17. Multimodal Chain-of-Thought (MCoT)',
      slides: [
        {
          id: 19,
          title: '17. Multimodal Chain-of-Thought (MCoT)',
          icon: { name: 'duo-brain' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em', color: '#ffc662' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-star-bright" sizeName="1x" darkModeInvert={true} />
                Definition / Concept
              </h4>
              <p>Combine vision (and/or audio) with text in step-by-step reasoning.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" darkModeInvert={true} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.5em', whiteSpace: 'pre-wrap' }}>
{`"Given the image [image] and question '', list visual observations, relate them to text cues, then infer the answer step-by-step."`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                When to Use
              </h4>
              <ul>
                <li>Charts/diagrams QA</li>
                <li>Science problems</li>
                <li>UI understanding</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                Output Type / Goal
              </h4>
              <ul>
                <li>Rationale grounded in image/text + final answer.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Complexity
              </h4>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 Pro - Multimodal LLMs only</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" darkModeInvert={true} />
                Limitations
              </h4>
              <ul>
                <li>Hallucinated visual claims</li>
                <li>Requires robust vision models</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" darkModeInvert={true} />
                Real-World Example
              </h4>
              <p>ScienceQA-style diagram reasoning: "Analyze this circuit diagram, identify the components, explain how current flows through each element, and determine the output voltage."</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#674b1a',
      notes: 'RAG: Ground responses in retrieved documents for fresh knowledge with citations'
        }
      ]
    },
    {
      id: 'technique-18',
      title: '18. Graph Prompting',
      slides: [
        {
          id: 20,
          title: '18. Graph Prompting',
          icon: { name: 'duo-circle-nodes' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em', color: '#86ffaa' }}>
          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px' }}>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-star-bright" sizeName="1x" darkModeInvert={true} />
                Definition / Concept
              </h4>
              <p>Use graphs/knowledge graphs to structure context and reasoning for LLMs.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-code" sizeName="1x" darkModeInvert={true} />
                Example Prompt
              </h4>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '0.5em', whiteSpace: 'pre-wrap' }}>
{`"From the corpus, extract entities/relations into a mini knowledge graph. Using that graph, answer: <question>. Show the path used."`}
              </pre>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-calendar-check" sizeName="1x" darkModeInvert={true} />
                When to Use
              </h4>
              <ul>
                <li>Multi-document QA</li>
                <li>Multi-hop reasoning</li>
                <li>Temporal/entity linking tasks</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
                Output Type / Goal
              </h4>
              <ul>
                <li>Graph-grounded explanation and answer.</li>
              </ul>
            </div>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <SvgIcon iconName="duo-rocket" sizeName="1x" darkModeInvert={true} />
                Complexity
              </h4>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - LLM + graph tools/DB</p>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-circle-exclamation" sizeName="1x" darkModeInvert={true} />
                Limitations
              </h4>
              <ul>
                <li>KG construction errors</li>
                <li>Synchronization with evolving data</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '15px' }}>
                <SvgIcon iconName="duo-building" sizeName="1x" darkModeInvert={true} />
                Real-World Example
              </h4>
              <p>Due-diligence assistant tracing ownership across filings by constructing knowledge graphs of corporate entities and their relationships, allowing for multi-hop inference on complex ownership structures.</p>
            </div>
          </div>
        </div>
      ),
      backgroundColor: '#1a6731',
      notes: 'RAG: Ground responses in retrieved documents for fresh knowledge with citations'
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 21,
          title: 'Technique Complexity Overview',
          icon: { name: 'duo-table' },
          content: (
        <div style={{ fontSize: '0.65em', margin: '0 auto' }}>
          <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <SvgIcon iconName="duo-chart-bar" sizeName="2x" darkModeInvert={true} />
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
          id: 22,
          title: 'Best Practices & Recommendations',
          icon: { name: 'duo-clipboard-check' },
          content: (
        <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '0.8em', color: '#48cb80' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
            <div>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginBottom: '15px' }}>
                <SvgIcon iconName="duo-lightbulb" sizeName="1x" darkModeInvert={true} />
                Getting Started
              </h4>
              <ul style={{ lineHeight: '1.8' }}>
                <li><strong>Start Simple:</strong> Begin with zero-shot, move to few-shot if needed</li>
                <li><strong>Add CoT:</strong> For reasoning tasks, add "think step-by-step"</li>
                <li><strong>Use RAG:</strong> When you need fresh knowledge or citations</li>
                <li><strong>Chain When Complex:</strong> Break multi-step tasks into pipelines</li>
              </ul>
              <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db', marginTop: '20px', marginBottom: '15px' }}>
                <SvgIcon iconName="duo-shield-check" sizeName="1x" darkModeInvert={true} />
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
                <SvgIcon iconName="duo-wrench" sizeName="1x" darkModeInvert={true} />
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
                <SvgIcon iconName="duo-triangle-exclamation" sizeName="1x" darkModeInvert={true} />
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
      backgroundColor: '#145d33',
      notes: 'Best practices: Start simple, scale up judiciously, monitor production, avoid over-engineering'
        },
        {
          id: 23,
          title: 'Decision Framework',
          icon: { name: 'duo-compass' },
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
          id: 24,
          title: 'Summary: The Prompt Engineering Ladder',
          icon: { name: 'duo-book-open' },
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

