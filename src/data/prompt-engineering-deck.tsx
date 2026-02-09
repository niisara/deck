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
          center: true,
          title: '18 Prompt Engineering Techniques',
          content: (
            <div style={{ color: '#fff' }}>
              <h2 style={{ marginBottom: '30px' }}>A Comprehensive Guide to 18 Advanced Prompting Patterns</h2>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '50px', marginTop: '50px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <SvgIcon iconName="duo-brain" sizeName="4x" style={{ color: '#3498db' }} />
                  <p style={{ marginTop: '10px', fontSize: '1.2rem' }}>Reasoning</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <SvgIcon iconName="duo-database" sizeName="4x" style={{ color: '#2ecc71' }} />
                  <p style={{ marginTop: '10px', fontSize: '1.2rem' }}>Retrieval</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <SvgIcon iconName="duo-robot" sizeName="4x" style={{ color: '#9b59b6' }} />
                  <p style={{ marginTop: '10px', fontSize: '1.2rem' }}>Agentic</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <SvgIcon iconName="duo-layer-group" sizeName="4x" style={{ color: '#f39c12' }} />
                  <p style={{ marginTop: '10px', fontSize: '1.2rem' }}>Hybrid</p>
                </div>
              </div>
              <p style={{ marginTop: '20px', fontSize: '2rem' }}>
                For Practitioners, Data Scientists & Product Engineers
              </p>
              <p><strong>Prepared by:</strong> Nisar A</p>
              <p><strong>Date:</strong> November 7, 2025</p>
              <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
            </div>
          ),
          backgroundColor: '#1a3957',
          notes: ''
        },
        {
          id: 2,
          title: 'Table of Contents',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3498db', marginBottom: '12px' }}>
                    <SvgIcon iconName="duo-brain" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    Reasoning Techniques (1-8, 17)
                  </h4>
                  <ul style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>
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
                    <SvgIcon iconName="duo-database" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    Retrieval (9)
                  </h4>
                  <ul style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>
                    <li>9. Retrieval-Augmented Generation (RAG)</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9b59b6', marginBottom: '12px' }}>
                    <SvgIcon iconName="duo-robot" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    Agentic Techniques (10, 14-16)
                  </h4>
                  <ul style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>
                    <li>10. Automatic Reasoning & Tool-use (ART)</li>
                    <li>14. Program-Aided LMs (PAL)</li>
                    <li>15. ReAct</li>
                    <li>16. Reflexion</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f39c12', marginTop: '15px', marginBottom: '12px' }}>
                    <SvgIcon iconName="duo-layer-group" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                    Hybrid Techniques (7, 11-13, 18)
                  </h4>
                  <ul style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>
                    <li>7. Prompt Chaining</li>
                    <li>11. Automatic Prompt Engineer (APE)</li>
                    <li>12. Active-Prompt</li>
                    <li>13. Directional Stimulus Prompting</li>
                    <li>18. Graph Prompting</li>
                  </ul>
                </div>
              </div>
              <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '2rem', fontWeight: 'bold' }}>
                18 advanced prompting patterns for reliable LLM systems
              </p>
            </div>
          ),
          backgroundColor: '#1a3957',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-1',
      title: '1. Zero-shot Prompting',
      slides: [
        {
          id: 3,
          title: '1. Zero-shot Prompting - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Definition</h3>
              <p>Ask the model to perform a task with clear instructions and no examples.</p>
              <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Direct answer or formatted summary</li>
                <li>Fastest way to get baseline results</li>
                <li>Minimal token usage</li>
              </ul>
              <p style={{ marginTop: '20px' }}>Best for quick baselines, well-known tasks, and situations with low token budgets. Ideal when you need fast results without additional context.</p>
            </div>
          ),
          backgroundColor: '#103e5d',
          notes: ''
        },
        {
          id: 4,
          title: '1. Zero-shot Prompting - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How It Works</h3>
              <p>Zero-shot prompting relies on the model's pre-trained knowledge and capabilities. You provide clear, direct instructions without any demonstrations or examples. The model interprets your intent from the instruction alone and generates a response based on what it learned during training.</p>
              <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              <p><strong>Level:</strong> Simple</p>
              <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Works on most LLMs</p>
              <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              <p>Email triage — classify incoming emails into Urgent/Normal/Low priority categories with clear definitions of each level.</p>
            </div>
          ),
          backgroundColor: '#103e5d',
          notes: ''
        },
        {
          id: 5,
          title: '1. Zero-shot Prompting - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example Prompt</h3>
              <pre style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                {`"Summarize the following article 
in 3 bullets for executives:
[paste text here]"`}
              </pre>
              <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              <p>GPT-4/4o, Claude 3.5, Gemini 1.5, and most modern LLMs support zero-shot prompting out of the box. Even smaller models can handle simple zero-shot tasks effectively.</p>
            </div>
          ),
          backgroundColor: '#103e5d',
          notes: ''
        },
        {
          id: 6,
          title: '1. Zero-shot Prompting - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>May misinterpret intent without examples</li>
                <li>Brittle on novel or nuanced tasks</li>
                <li>Less control over output format</li>
                <li>Performance varies significantly by model capability</li>
              </ul>
            </div>
          ),
          backgroundColor: '#103e5d',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-2',
      title: '2. Few-shot Prompting',
      slides: [
        {
          id: 7,
          title: '2. Few-shot Prompting - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Definition</h3>
              <p>Guide the model with a few labeled examples to shape outputs.</p>
              <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Classification and structured outputs matching examples</li>
                <li>Consistent formatting and tone</li>
                <li>Better handling of domain-specific terminology</li>
              </ul>
              <p style={{ marginTop: '20px' }}>Best for tasks requiring custom formats, specific domain tone, or when you need to demonstrate edge cases. Examples guide the model to match your desired output style.</p>
            </div>
          ),
          backgroundColor: '#284d67',
          notes: ''
        },
        {
          id: 8,
          title: '2. Few-shot Prompting - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How It Works</h3>
              <p>Few-shot prompting provides 2-5 input-output examples before presenting the actual task. The model learns the pattern from these demonstrations and applies it to new inputs. This approach helps the model understand not just what to do, but how to format and style the response.</p>
              <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              <p><strong>Level:</strong> Simple–Intermediate</p>
              <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Mid-size models benefit noticeably from examples</p>
              <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              <p>Support macros generation with style-consistent examples that match company terminology and formatting guidelines.</p>
            </div>
          ),
          backgroundColor: '#284d67',
          notes: ''
        },
        {
          id: 9,
          title: '2. Few-shot Prompting - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example Prompt</h3>
              <pre style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                {`"You are a sentiment classifier.
Example: 'Loved it' -> positive
'Too slow' -> negative
Classify: 'It was okay, but pricey.'"`}
              </pre>
              <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              <p>GPT-4/4o, Claude 3.5, Gemini 1.5, and most modern LLMs support few-shot learning. Mid-size models especially benefit from the additional context provided by examples.</p>
            </div>
          ),
          backgroundColor: '#284d67',
          notes: ''
        },
        {
          id: 10,
          title: '2. Few-shot Prompting - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Example bias - model may overfit to example patterns</li>
                <li>Token overhead increases with number of examples</li>
                <li>Data leakage risk if examples contain sensitive information</li>
                <li>Example selection significantly impacts results</li>
              </ul>
            </div>
          ),
          backgroundColor: '#284d67',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-3',
      title: '3. Chain-of-Thought (CoT) Prompting',
      slides: [
        {
          id: 11,
          title: '3. Chain-of-Thought - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Definition</h3>
              <p>Ask the model to reason step-by-step before the final answer.</p>
              <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Intermediate reasoning steps plus final answer</li>
                <li>Improved accuracy on complex reasoning tasks</li>
                <li>Transparent decision-making process</li>
                <li>Better handling of multi-step problems</li>
              </ul>
              <p style={{ marginTop: '20px' }}>Best for math and logic problems, multi-hop question answering, and planning tasks. The step-by-step approach significantly improves reasoning accuracy.</p>
            </div>
          ),
          backgroundColor: '#91420e',
          notes: ''
        },
        {
          id: 12,
          title: '3. Chain-of-Thought - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How It Works</h3>
              <p>Chain-of-Thought prompting instructs the model to break down complex problems into intermediate steps. By explicitly reasoning through each step, the model can catch errors and maintain logical consistency. This mimics human problem-solving and dramatically improves performance on tasks requiring multi-step reasoning.</p>
              <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              <p><strong>Level:</strong> Intermediate</p>
              <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Smaller models may overfit or produce inconsistent reasoning</p>
              <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              <p>Price breakdown reasoning in finance approvals — showing step-by-step calculation of total costs, taxes, discounts, and ROI to justify purchase decisions.</p>
            </div>
          ),
          backgroundColor: '#91420e',
          notes: ''
        },
        {
          id: 13,
          title: '3. Chain-of-Thought - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example Prompt</h3>
              <pre style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                {`"Solve step-by-step: If a box has 12 red and 8 blue marbles and 4 reds are removed, what fraction are red now? Think step by step."`}
              </pre>
              <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              <p>GPT-4/4o, Claude 3.5, and Gemini 1.5 excel at chain-of-thought reasoning. Works best with larger, more capable models that can maintain coherent multi-step reasoning.</p>
            </div>
          ),
          backgroundColor: '#91420e',
          notes: ''
        },
        {
          id: 14,
          title: '3. Chain-of-Thought - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Longer outputs increase token costs and latency</li>
                <li>Potential for verbose hallucinations in reasoning steps</li>
                <li>May generate plausible but incorrect reasoning paths</li>
                <li>Requires careful prompt engineering to avoid shortcuts</li>
              </ul>
            </div>
          ),
          backgroundColor: '#91420e',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-4',
      title: '4. Meta Prompting',
      slides: [
        {
          id: 15,
          title: '4. Meta Prompting - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Definition</h3>
              <p>Specify abstract structure, syntax, and format rather than content-specific examples.</p>
              <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Consistent, schema-compliant outputs</li>
                <li>Improved standardization across tasks</li>
                <li>Better tool integration</li>
                <li>Comparable evaluation results</li>
              </ul>
              <p style={{ marginTop: '20px' }}>Best for standardized pipelines, tool integration, and when evaluation comparability is important. Focuses on structure over specific content examples.</p>
            </div>
          ),
          backgroundColor: '#0e9135',
          notes: ''
        },
        {
          id: 16,
          title: '4. Meta Prompting - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How It Works</h3>
              <p>Meta prompting defines the abstract structure and format requirements without providing content-specific examples. By specifying schemas, field types, and structural constraints, you guide the model to produce outputs that conform to your requirements while allowing flexibility in content generation.</p>
              <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              <p><strong>Level:</strong> Intermediate</p>
              <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Models with strong instruction-following capabilities</p>
              <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              <p>Unified incident report format across teams — creating a consistent structure for reporting issues with categorical fields that make analysis and tracking more efficient.</p>
            </div>
          ),
          backgroundColor: '#0e9135',
          notes: ''
        },
        {
          id: 17,
          title: '4. Meta Prompting - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example Prompt</h3>
              <pre style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                {`"Problem: <text>. Goal: <target>. Constraints: <list>.
Output schema: JSON with fields [steps, rationale, answer].
Populate schema only."`}
              </pre>
              <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              <p>GPT-4/4o, Claude 3.5, Gemini 1.5 work well with meta prompting. These models excel at understanding and following structural specifications.</p>
            </div>
          ),
          backgroundColor: '#0e9135',
          notes: ''
        },
        {
          id: 18,
          title: '4. Meta Prompting - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Assumes task knowledge from the model</li>
                <li>May underperform on novel domains without examples</li>
                <li>Requires clear schema definitions</li>
                <li>Less guidance on nuanced content decisions</li>
              </ul>
            </div>
          ),
          backgroundColor: '#0e9135',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-5',
      title: '5. Self-Consistency',
      slides: [
        {
          id: 19,
          title: '5. Self-Consistency - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Definition</h3>
              <p>Sample multiple CoT paths and select the majority/most consistent answer.</p>
              <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Aggregated answer with higher reliability</li>
                <li>Reduced variance in outputs</li>
                <li>Better handling of edge cases</li>
                <li>Improved accuracy through voting</li>
              </ul>
              <p style={{ marginTop: '20px' }}>Best for arithmetic, commonsense reasoning, and logic tasks where single-pass inference is unstable. Multiple reasoning paths provide more reliable answers.</p>
            </div>
          ),
          backgroundColor: '#7b0e91',
          notes: ''
        },
        {
          id: 20,
          title: '5. Self-Consistency - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How It Works</h3>
              <p>Self-consistency generates multiple independent reasoning paths for the same problem using temperature sampling. Each path produces a candidate answer. The system then aggregates these answers, typically by majority voting, to select the most consistent solution. This approach compensates for individual reasoning errors.</p>
              <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              <p><strong>Level:</strong> Intermediate–Advanced</p>
              <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Needs temperature sampling capability</p>
              <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              <p>Benchmark problem sets (GSM8K-style) with voting on multiple generated solutions to improve mathematical accuracy.</p>
            </div>
          ),
          backgroundColor: '#7b0e91',
          notes: ''
        },
        {
          id: 21,
          title: '5. Self-Consistency - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example Prompt</h3>
              <pre style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                {`"Generate 5 step-by-step solutions. Provide only the final numeric answer for each, then vote for the most frequent."`}
              </pre>
              <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              <p>GPT-4/4o, Claude 3.5, Gemini 1.5 - Requires models that support temperature sampling to generate diverse reasoning paths. Typically requires 3-10 samples.</p>
            </div>
          ),
          backgroundColor: '#7b0e91',
          notes: ''
        },
        {
          id: 22,
          title: '5. Self-Consistency - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Higher latency due to multiple inference calls</li>
                <li>Increased cost (3-10x token usage)</li>
                <li>Correlated errors if prompt is fundamentally flawed</li>
                <li>Requires aggregation logic implementation</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7b0e91',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-6',
      title: '6. Generate Knowledge Prompting',
      slides: [
        {
          id: 23,
          title: '6. Generate Knowledge - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Definition</h3>
              <p>First ask the model to generate background facts, then answer using those facts.</p>
              <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Knowledge-grounded reasoning and answer</li>
                <li>Contextual understanding before answering</li>
                <li>Better recall of relevant information</li>
                <li>Improved accuracy on knowledge-intensive tasks</li>
              </ul>
              <p style={{ marginTop: '20px' }}>Best for commonsense question answering, domain recall tasks, and exam-style questions. Generating relevant facts first improves answer quality.</p>
            </div>
          ),
          backgroundColor: '#7d6b1c',
          notes: ''
        },
        {
          id: 24,
          title: '6. Generate Knowledge - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How It Works</h3>
              <p>Generate Knowledge prompting uses a two-stage approach. First, the model generates relevant background facts or knowledge about the topic. Then, in the second stage, the model uses these self-generated facts as context to answer the actual question. This helps activate relevant knowledge and provides grounding for the answer.</p>
              <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              <p><strong>Level:</strong> Intermediate</p>
              <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Models with strong knowledge recall capabilities</p>
              <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              <p>Medical symptom triage with preliminary risk-factor listing before diagnosis suggestions.</p>
            </div>
          ),
          backgroundColor: '#7d6b1c',
          notes: ''
        },
        {
          id: 25,
          title: '6. Generate Knowledge - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example Prompt</h3>
              <pre style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                {`"Before answering, list 3 relevant facts about <topic>. Then, using those facts, answer: <question>"`}
              </pre>
              <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              <p>GPT-4/4o, Claude 3.5, Gemini 1.5 work well for knowledge generation. Best results with models that have strong factual knowledge bases.</p>
            </div>
          ),
          backgroundColor: '#7d6b1c',
          notes: ''
        },
        {
          id: 26,
          title: '6. Generate Knowledge - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Generated facts may be incorrect or hallucinated</li>
                <li>Consider verification or retrieval for critical facts</li>
                <li>Adds latency and token costs</li>
                <li>May reinforce incorrect knowledge from training</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7d6b1c',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-7',
      title: '7. Prompt Chaining',
      slides: [
        {
          id: 27,
          title: '7. Prompt Chaining - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Definition</h3>
              <p>Break a task into subtasks across multiple prompts where outputs feed subsequent prompts.</p>
              <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Multi-stage pipeline outputs (extractions → synthesis)</li>
                <li>Better decomposition of complex workflows</li>
                <li>Improved accuracy per subtask</li>
                <li>Easier debugging and optimization</li>
              </ul>
              <p style={{ marginTop: '20px' }}>Best for complex workflows, transformation pipelines, and data cleanup tasks. Breaking tasks into stages improves reliability and maintainability.</p>
            </div>
          ),
          backgroundColor: '#7d1c3c',
          notes: ''
        },
        {
          id: 28,
          title: '7. Prompt Chaining - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How It Works</h3>
              <p>Prompt chaining decomposes complex tasks into a series of simpler subtasks. Each subtask is handled by a separate prompt, with the output from one stage becoming input for the next. This sequential approach allows each stage to focus on a specific transformation or analysis step, improving overall quality and making the pipeline easier to debug and optimize.</p>
              <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              <p><strong>Level:</strong> Intermediate</p>
              <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Any LLM; long-context models help with larger intermediate outputs</p>
              <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              <p>Legal brief generation from case documents via extract→summarize→draft chain.</p>
            </div>
          ),
          backgroundColor: '#7d1c3c',
          notes: ''
        },
        {
          id: 29,
          title: '7. Prompt Chaining - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example Prompt</h3>
              <pre style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                {`"Step 1: Extract key quotes from document about <question>.
Step 2: Using quotes, answer <question> with citations."`}
              </pre>
              <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              <p>GPT-4/4o, Claude 3.5, Gemini 1.5, and any LLM that can maintain context. Long-context models (100k+ tokens) are particularly effective for handling large intermediate outputs.</p>
            </div>
          ),
          backgroundColor: '#7d1c3c',
          notes: ''
        },
        {
          id: 30,
          title: '7. Prompt Chaining - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Orchestration complexity increases with chain length</li>
                <li>Error propagation without validation checks</li>
                <li>Cumulative latency from multiple calls</li>
                <li>Requires careful stage design and testing</li>
              </ul>
            </div>
          ),
          backgroundColor: '#7d1c3c',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-8',
      title: '8. Tree of Thoughts (ToT)',
      slides: [
        {
          id: 31,
          title: '8. Tree of Thoughts - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Definition</h3>
              <p>Explore multiple reasoning branches with lookahead and backtracking (BFS/DFS/Beam).</p>
              <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Selected best reasoning path and final solution</li>
                <li>Systematic exploration of solution space</li>
                <li>Better handling of complex planning problems</li>
                <li>Ability to backtrack from dead ends</li>
              </ul>
              <p style={{ marginTop: '20px' }}>Best for search-heavy reasoning, puzzles and planning tasks, and complex decompositions. Explores multiple paths before committing to a solution.</p>
            </div>
          ),
          backgroundColor: '#1c257d',
          notes: ''
        },
        {
          id: 32,
          title: '8. Tree of Thoughts - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How It Works</h3>
              <p>Tree of Thoughts maintains a tree of reasoning paths, generating multiple candidate next steps at each node. The model evaluates each candidate (e.g., sure/maybe/impossible) and uses search algorithms (BFS, DFS, or beam search) to explore promising branches. This allows systematic exploration with the ability to backtrack from unproductive paths.</p>
              <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Requires external controller logic for search management</p>
              <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              <p>Strategic product roadmap trade-off exploration — systematically evaluating different feature prioritization paths and their downstream impacts on market adoption, engineering resources, and business outcomes.</p>
            </div>
          ),
          backgroundColor: '#1c257d',
          notes: ''
        },
        {
          id: 33,
          title: '8. Tree of Thoughts - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example Prompt</h3>
              <pre style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                {`"Propose 3 candidate next steps. Label each as sure/maybe/impossible for reaching the goal. Expand promising branches until a solution."`}
              </pre>
              <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              <p>GPT-4/4o, Claude 3.5, Gemini 1.5 - Requires sophisticated orchestration layer to manage the search process, evaluate candidates, and control exploration depth.</p>
            </div>
          ),
          backgroundColor: '#1c257d',
          notes: ''
        },
        {
          id: 34,
          title: '8. Tree of Thoughts - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Significantly higher cost and latency</li>
                <li>Requires search control and pruning strategies</li>
                <li>Complex orchestration infrastructure needed</li>
                <li>Evaluation quality critical for good search decisions</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1c257d',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-9',
      title: '9. Retrieval-Augmented Generation (RAG)',
      slides: [
        {
          id: 35,
          title: '9. RAG - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Definition</h3>
              <p>Retrieve external documents and condition the model on them to ground responses.</p>
              <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Grounded, cited answers from knowledge base</li>
                <li>Fresh information beyond training cutoff</li>
                <li>Reduced hallucinations with source grounding</li>
                <li>Verifiable responses with citations</li>
              </ul>
              <p style={{ marginTop: '20px' }}>Best for tasks requiring fresh or long-tail knowledge, compliance requirements, and when citations are needed. Grounds responses in retrieved documents.</p>
            </div>
          ),
          backgroundColor: '#1a673a',
          notes: ''
        },
        {
          id: 36,
          title: '9. RAG - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How It Works</h3>
              <p>RAG uses a two-stage process: retrieval then generation. First, relevant documents are retrieved from a knowledge base (typically using vector similarity search). Then, these retrieved documents are provided as context to the LLM, which generates an answer grounded in the retrieved information. This approach combines the LLM's language understanding with external knowledge.</p>
              <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              <p><strong>Level:</strong> Intermediate</p>
              <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Requires retriever/vector database infrastructure</p>
              <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              <p>Enterprise policy assistant with vector search over internal PDFs, enabling employees to query company guidelines with precise citations to source documents.</p>
            </div>
          ),
          backgroundColor: '#1a673a',
          notes: ''
        },
        {
          id: 37,
          title: '9. RAG - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example Prompt</h3>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                {`"Given these retrieved passages, answer the user question. Cite sources by ID.
Passages:
[1] The first COVID-19 vaccine was approved for emergency use in December 2020.
[2] mRNA vaccines use genetic material to teach cells to make a protein that triggers an immune response.
[3] Traditional vaccines use weakened or inactivated viruses.
Question: How do mRNA COVID vaccines work?"`}
              </pre>
              <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              <p>GPT-4/4o, Claude 3.5, Gemini 1.5 - Requires vector database (Pinecone, Weaviate, Chroma) and embedding model for retrieval.</p>
            </div>
          ),
          backgroundColor: '#1a673a',
          notes: ''
        },
        {
          id: 38,
          title: '9. RAG - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Garbage-in garbage-out - retrieval quality critical</li>
                <li>Retrieval quality issues impact answer accuracy</li>
                <li>Citation drift - model may not cite accurately</li>
                <li>Chunking challenges affect information retrieval</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1a673a',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-10',
      title: '10. Automatic Reasoning and Tool-use (ART)',
      slides: [
        {
          id: 39,
          title: '10. ART - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Definition</h3>
              <p>Use a frozen LLM to auto-generate multi-step reasoning and interleave tool calls with observations.</p>
              <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Tool-interleaved reasoning traces and answer</li>
                <li>Automatic tool selection and integration</li>
                <li>Extended capabilities beyond pre-training</li>
                <li>Zero-shot planning for complex tasks</li>
              </ul>
              <p style={{ marginTop: '20px' }}>Best for tasks needing external tools, search integration, code execution, and database queries. Automatically plans tool usage.</p>
            </div>
          ),
          backgroundColor: '#1a6167',
          notes: ''
        },
        {
          id: 40,
          title: '10. ART - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How It Works</h3>
              <p>ART enables models to automatically decompose tasks, select appropriate tools, and interleave reasoning with tool execution. The model generates a plan, executes tool calls, integrates observations, and continues reasoning. This creates a flexible cycle of thinking, acting, and observing without requiring explicit orchestration for each task type.</p>
              <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Requires tool APIs and orchestration runtime</p>
              <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              <p>Zero-shot research assistant that can automatically mix search engine queries with mathematical calculation tools to answer complex questions without explicit instructions for each step.</p>
            </div>
          ),
          backgroundColor: '#1a6167',
          notes: ''
        },
        {
          id: 41,
          title: '10. ART - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example Prompt</h3>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                {`"Given task <T>, plan steps. When needed, call TOOL[search/calculator] and integrate results before continuing. Provide final answer."`}
              </pre>
              <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              <p>GPT-4/4o, Claude 3.5, Gemini 1.5 - Requires tool calling capabilities and an orchestration framework to manage tool execution and observation integration.</p>
            </div>
          ),
          backgroundColor: '#1a6167',
          notes: ''
        },
        {
          id: 42,
          title: '10. ART - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Tool errors can derail entire plans</li>
                <li>Requires sandboxing and guardrails for safety</li>
                <li>Complex orchestration infrastructure needed</li>
                <li>Debugging tool interaction failures is challenging</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1a6167',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-11',
      title: '11. Automatic Prompt Engineer (APE)',
      slides: [
        {
          id: 43,
          title: '11. APE - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Definition</h3>
              <p>Automatically generate and rank candidate instructions based on I/O demonstrations.</p>
              <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Optimized instruction prompt with consistent behavior</li>
                <li>Automated prompt discovery and optimization</li>
                <li>Better performance than hand-crafted prompts</li>
                <li>Systematic exploration of prompt space</li>
              </ul>
              <p style={{ marginTop: '20px' }}>Best for scaling prompt design, tackling new tasks, and rapid optimization. Automatically discovers effective prompts from examples.</p>
            </div>
          ),
          backgroundColor: '#1a6167',
          notes: ''
        },
        {
          id: 44,
          title: '11. APE - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How It Works</h3>
              <p>APE uses the LLM itself to generate multiple candidate prompts from input-output demonstrations. Each candidate is then tested on a validation set to measure performance. The system ranks candidates by accuracy and selects the best-performing prompt. This meta-learning approach can discover prompts that outperform human-designed alternatives.</p>
              <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Requires evaluation loop and validation dataset</p>
              <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              <p>Customer service platform uses APE to automatically tune prompt templates for routing customer intent. The system uses historical customer queries and agent responses as I/O pairs, generates multiple prompt candidates, tests them on validation data, and deploys the highest-performing prompt to production.</p>
            </div>
          ),
          backgroundColor: '#1a6167',
          notes: ''
        },
        {
          id: 45,
          title: '11. APE - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example Prompt</h3>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                {`"Given these I/O pairs:
Input: 'What is the capital of France?'
Output: 'The capital of France is Paris.'

Input: 'How many planets are in our solar system?'
Output: 'There are 8 planets in our solar system: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.'

Propose 5 instruction prompts that would elicit these types of responses. Then execute each on the validation set and rank them by accuracy."
`}
              </pre>
              <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              <p>GPT-4/4o, Claude 3.5, Gemini 1.5 - Requires orchestration to manage generate-evaluate-select loop and compute resources for multiple evaluations.</p>
            </div>
          ),
          backgroundColor: '#1a6167',
          notes: ''
        },
        {
          id: 46,
          title: '11. APE - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Overfitting to validation set possible</li>
                <li>Computationally heavy evaluation process</li>
                <li>Prompt hacking risks with automated discovery</li>
                <li>Requires representative validation data</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1a6167',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-12',
      title: '12. Active-Prompt',
      slides: [
        {
          id: 47,
          title: '12. Active-Prompt - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Definition</h3>
              <p>Select uncertain examples for human CoT annotation to adapt few-shot exemplars.</p>
              <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Improved task-specific exemplars and accuracy</li>
                <li>Efficient use of human annotation resources</li>
                <li>Adaptive learning from uncertainty</li>
                <li>Better coverage of difficult cases</li>
              </ul>
              <p style={{ marginTop: '20px' }}>Best for diverse datasets where fixed exemplars underperform. Focuses human effort on the most informative examples.</p>
            </div>
          ),
          backgroundColor: '#671a2d',
          notes: ''
        },
        {
          id: 48,
          title: '12. Active-Prompt - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How It Works</h3>
              <p>Active-Prompt generates multiple CoT solutions for candidate examples and measures disagreement between them. High disagreement indicates uncertainty. The system selects the most uncertain examples for human annotation, then updates the few-shot exemplar set with these human-annotated chains of thought. This active learning approach efficiently improves prompt quality.</p>
              <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Needs active learning loop and human annotators</p>
              <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              <p>Math word-problem tutor adapting to student cohorts.</p>
            </div>
          ),
          backgroundColor: '#671a2d',
          notes: ''
        },
        {
          id: 49,
          title: '12. Active-Prompt - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example Prompt</h3>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                {`"Generate k answers with CoT for these questions. Compute disagreement. Select top-m uncertain for human CoT annotation; update exemplar set."`}
              </pre>
              <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              <p>GPT-4/4o, Claude 3.5, Gemini 1.5 - Requires infrastructure for uncertainty estimation, human annotation workflow, and exemplar management.</p>
            </div>
          ),
          backgroundColor: '#671a2d',
          notes: ''
        },
        {
          id: 50,
          title: '12. Active-Prompt - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Annotation cost for human CoT examples</li>
                <li>Feedback-loop bias in exemplar selection</li>
                <li>Orchestration complexity for active learning</li>
                <li>Requires quality control on annotations</li>
              </ul>
            </div>
          ),
          backgroundColor: '#671a2d',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-13',
      title: '13. Directional Stimulus Prompting (DSP)',
      slides: [
        {
          id: 51,
          title: '13. Directional Stimulus - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Definition</h3>
              <p>Use a small policy model to generate instance-specific hints to steer a larger LLM.</p>
              <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Guided outputs aligned to a desired perspective</li>
                <li>Instance-specific steering for better relevance</li>
                <li>Improved compliance with requirements</li>
                <li>Fine-grained control over output focus</li>
              </ul>
              <p style={{ marginTop: '20px' }}>Best for precision framing, compliance content, pedagogical guidance, and specialized summaries. Steers outputs with targeted hints.</p>
            </div>
          ),
          backgroundColor: '#501a67',
          notes: ''
        },
        {
          id: 52,
          title: '13. Directional Stimulus - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How It Works</h3>
              <p>DSP uses a tunable policy model to generate instance-specific stimulus hints based on the input. These hints guide a larger frozen LLM to focus on particular aspects or perspectives when generating outputs. This two-model architecture allows fine-grained steering without retraining the large model, combining the flexibility of a small tunable model with the capabilities of a large pre-trained one.</p>
              <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 + Policy LM (small, tunable)</p>
              <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              <p>Compliance-focused meeting summaries with required emphasis on regulatory requirements, risk factors, and action items with clear ownership.</p>
            </div>
          ),
          backgroundColor: '#501a67',
          notes: ''
        },
        {
          id: 53,
          title: '13. Directional Stimulus - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example Prompt</h3>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                {`"Stimulus: Focus on safety trade-offs and cite at least two risks.
Task: Summarize <report> for a safety board in 150 words."`}
              </pre>
              <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              <p>GPT-4/4o, Claude 3.5, Gemini 1.5 as the main LLM, plus a smaller tunable policy model (e.g., T5, small GPT) to generate stimuli. Requires training infrastructure for the policy model.</p>
            </div>
          ),
          backgroundColor: '#501a67',
          notes: ''
        },
        {
          id: 54,
          title: '13. Directional Stimulus - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Stimulus drift as policy model learns</li>
                <li>Extra infrastructure to train and host policy model</li>
                <li>Potential for bias amplification</li>
                <li>Coordination complexity between two models</li>
              </ul>
            </div>
          ),
          backgroundColor: '#501a67',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-14',
      title: '14. Program-Aided Language Models (PAL)',
      slides: [
        {
          id: 55,
          title: '14. PAL - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Definition</h3>
              <p>Model writes code as intermediate steps and delegates execution to an interpreter.</p>
              <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Correct result from executed program</li>
                <li>Exact computation for arithmetic and logic</li>
                <li>Deterministic execution reduces hallucination</li>
                <li>Reusable and testable code generation</li>
              </ul>
              <p style={{ marginTop: '20px' }}>Best for arithmetic tasks, symbolic reasoning, and algorithmic problems. Delegates computation to code execution for accuracy.</p>
            </div>
          ),
          backgroundColor: '#60671a',
          notes: ''
        },
        {
          id: 56,
          title: '14. PAL - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How It Works</h3>
              <p>PAL asks the LLM to generate code (typically Python) as an intermediate representation of the solution. This code is then executed in a sandboxed interpreter. The execution results become the final answer. This approach leverages the preciseness of code execution while using the LLM's natural language understanding to translate problems into executable programs.</p>
              <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Best Models:</strong> GPT-4o, Claude 3.5, Gemini 1.5 Pro + Python runtime with sandboxing</p>
              <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              <p>Operations optimization via dynamic programming utilities — solving inventory management allocation problems that need exact solutions with complex constraints.</p>
            </div>
          ),
          backgroundColor: '#60671a',
          notes: ''
        },
        {
          id: 57,
          title: '14. PAL - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example Prompt</h3>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                {`"Write a Python function that computes the minimum coins for amount=47 given denominations [1,4,6]. Return only the final numeric result."`}
              </pre>
              <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              <p>GPT-4o, Claude 3.5, Gemini 1.5 Pro - Models with strong code generation capabilities. Requires secure Python runtime environment with proper sandboxing to prevent malicious code execution.</p>
            </div>
          ),
          backgroundColor: '#60671a',
          notes: ''
        },
        {
          id: 58,
          title: '14. PAL - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Execution sandboxing required for security</li>
                <li>Runtime errors can fail the entire process</li>
                <li>Code injection risk if inputs are untrusted</li>
                <li>Limited to problems expressible as code</li>
              </ul>
            </div>
          ),
          backgroundColor: '#60671a',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-15',
      title: '15. ReAct',
      slides: [
        {
          id: 59,
          title: '15. ReAct - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Definition</h3>
              <p>Interleave reasoning traces with actions and observations (think→act→observe loops).</p>
              <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Transparent action-reasoning trajectory plus answer</li>
                <li>Dynamic adaptation based on observations</li>
                <li>Grounded reasoning with external information</li>
                <li>Interpretable decision-making process</li>
              </ul>
              <p style={{ marginTop: '20px' }}>Best for knowledge-intensive QA, web tasks, and interactive environments. Combines reasoning with actions in a continuous loop.</p>
            </div>
          ),
          backgroundColor: '#1a5667',
          notes: ''
        },
        {
          id: 60,
          title: '15. ReAct - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How It Works</h3>
              <p>ReAct creates a loop of Reasoning, Acting, and Observing. The model first reasons about what to do next, then takes an action (like searching or using a tool), observes the result, and incorporates that observation into its next reasoning step. This cycle continues until the task is complete. The approach provides both transparency and grounding through real observations.</p>
              <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Tool APIs or environments required</p>
              <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              <p>Shopping agent (WebShop) planning and verifying product specifications, comparing options and justifying recommendations through reasoning and external search.</p>
            </div>
          ),
          backgroundColor: '#1a5667',
          notes: ''
        },
        {
          id: 61,
          title: '15. ReAct - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example Prompt</h3>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                {`Question: <q>
Thought: <plan step>
Action: Search[<query>]
Observation: <result>
...
Repeat until enough info, then give Final Answer: <answer>`}
              </pre>
              <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              <p>GPT-4/4o, Claude 3.5, Gemini 1.5 - Requires tool calling capabilities and orchestration to manage the think-act-observe cycle. Tools can include search, calculation, database access, etc.</p>
            </div>
          ),
          backgroundColor: '#1a5667',
          notes: ''
        },
        {
          id: 62,
          title: '15. ReAct - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Tool dependency - quality depends on tool reliability</li>
                <li>Cascading errors from bad observations</li>
                <li>Can get stuck in reasoning loops</li>
                <li>Requires careful action space design</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1a5667',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-16',
      title: '16. Reflexion',
      slides: [
        {
          id: 63,
          title: '16. Reflexion - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Definition</h3>
              <p>Agents self-evaluate outcomes and write linguistic feedback to improve future attempts.</p>
              <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Iteratively improved outputs guided by self-feedback</li>
                <li>Learn from failures without model retraining</li>
                <li>Accumulate experience across episodes</li>
                <li>Self-improvement through reflection</li>
              </ul>
              <p style={{ marginTop: '20px' }}>Best for trial-and-error tasks, code development, planning scenarios, and multi-episode agents. Self-critique drives iterative improvement.</p>
            </div>
          ),
          backgroundColor: '#4c1a67',
          notes: ''
        },
        {
          id: 64,
          title: '16. Reflexion - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How It Works</h3>
              <p>Reflexion has the agent attempt a task, then evaluate its own performance. The agent writes a self-critique identifying what went wrong and how to improve. This critique is stored in memory and used to guide the next attempt. Over multiple iterations, the agent learns from its mistakes through linguistic reflection rather than parameter updates, enabling rapid adaptation to task requirements.</p>
              <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Optional memory store for critique history</p>
              <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              <p>Coding assistants iterating on failing test cases. The agent writes code, analyzes test failures, critiques its approach, then generates an improved solution based on its own feedback until all tests pass.</p>
            </div>
          ),
          backgroundColor: '#4c1a67',
          notes: ''
        },
        {
          id: 65,
          title: '16. Reflexion - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example Prompt</h3>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                {`"Attempt the task. Then write a concise self-critique with 3 improvements. Use that critique to produce a refined attempt."`}
              </pre>
              <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              <p>GPT-4/4o, Claude 3.5, Gemini 1.5 - Benefits from memory systems to store critique history across multiple episodes, enabling long-term learning from experience.</p>
            </div>
          ),
          backgroundColor: '#4c1a67',
          notes: ''
        },
        {
          id: 66,
          title: '16. Reflexion - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Feedback quality varies with model capability</li>
                <li>May entrench mistakes without external validation</li>
                <li>Can increase token usage significantly</li>
                <li>Risk of self-reinforcing incorrect assumptions</li>
              </ul>
            </div>
          ),
          backgroundColor: '#4c1a67',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-17',
      title: '17. Multimodal Chain-of-Thought (MCoT)',
      slides: [
        {
          id: 67,
          title: '17. Multimodal CoT - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Definition</h3>
              <p>Combine vision (and/or audio) with text in step-by-step reasoning.</p>
              <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Rationale grounded in image/text plus final answer</li>
                <li>Cross-modal reasoning integration</li>
                <li>Better understanding of visual information</li>
                <li>Unified reasoning across modalities</li>
              </ul>
              <p style={{ marginTop: '20px' }}>Best for charts/diagrams QA, science problems, and UI understanding. Combines visual and textual information in reasoning chains.</p>
            </div>
          ),
          backgroundColor: '#674b1a',
          notes: ''
        },
        {
          id: 68,
          title: '17. Multimodal CoT - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How It Works</h3>
              <p>Multimodal CoT extends chain-of-thought reasoning to incorporate visual and other non-text inputs. The model analyzes images, diagrams, or other media alongside text, explicitly reasoning through observations from each modality. This cross-modal reasoning allows the model to reference specific visual elements while developing its step-by-step explanation, leading to better grounded answers for multimodal problems.</p>
              <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 Pro - Multimodal LLMs only</p>
              <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              <p>ScienceQA-style diagram reasoning: "Analyze this circuit diagram, identify the components, explain how current flows through each element, and determine the output voltage."</p>
            </div>
          ),
          backgroundColor: '#674b1a',
          notes: ''
        },
        {
          id: 69,
          title: '17. Multimodal CoT - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example Prompt</h3>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                {`"Given the image [image] and question '', list visual observations, relate them to text cues, then infer the answer step-by-step."`}
              </pre>
              <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              <p>GPT-4/4o, Claude 3.5, Gemini 1.5 Pro - Requires multimodal models with strong vision capabilities. Models must be able to reason about visual content systematically.</p>
            </div>
          ),
          backgroundColor: '#674b1a',
          notes: ''
        },
        {
          id: 70,
          title: '17. Multimodal CoT - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Hallucinated visual claims without grounding</li>
                <li>Requires robust vision models with spatial reasoning</li>
                <li>Quality varies significantly by image type</li>
                <li>May struggle with fine-grained visual details</li>
              </ul>
            </div>
          ),
          backgroundColor: '#674b1a',
          notes: ''
        }
      ]
    },
    {
      id: 'technique-18',
      title: '18. Graph Prompting',
      slides: [
        {
          id: 71,
          title: '18. Graph Prompting - Overview',
          icon: { name: 'duo-circle-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Definition</h3>
              <p>Use graphs/knowledge graphs to structure context and reasoning for LLMs.</p>
              <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Graph-grounded explanation and answer</li>
                <li>Structured representation of relationships</li>
                <li>Multi-hop reasoning along graph paths</li>
                <li>Explicit entity and relationship tracking</li>
              </ul>
              <p style={{ marginTop: '20px' }}>Best for multi-document QA, multi-hop reasoning, and temporal/entity linking tasks. Structures knowledge as explicit graphs for reasoning.</p>
            </div>
          ),
          backgroundColor: '#1a6731',
          notes: ''
        },
        {
          id: 72,
          title: '18. Graph Prompting - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>How It Works</h3>
              <p>Graph Prompting extracts entities and relationships from documents to build a knowledge graph representation. The LLM then reasons over this structured graph to answer questions, following entity relationships and making multi-hop inferences. This explicit structure helps track complex relationships and provides interpretable reasoning paths through the graph, making it easier to verify and explain answers.</p>
              <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              <p><strong>Level:</strong> Advanced</p>
              <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - LLM plus graph tools/database (Neo4j, etc.)</p>
              <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              <p>Due-diligence assistant tracing ownership across filings by constructing knowledge graphs of corporate entities and their relationships, allowing for multi-hop inference on complex ownership structures.</p>
            </div>
          ),
          backgroundColor: '#1a6731',
          notes: ''
        },
        {
          id: 73,
          title: '18. Graph Prompting - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3>Example Prompt</h3>
              <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                {`"From the corpus, extract entities/relations into a mini knowledge graph. Using that graph, answer: <question>. Show the path used."`}
              </pre>
              <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              <p>GPT-4/4o, Claude 3.5, Gemini 1.5 for language understanding, plus graph database infrastructure (Neo4j, NetworkX) and entity extraction capabilities. May require NER and relation extraction models.</p>
            </div>
          ),
          backgroundColor: '#1a6731',
          notes: ''
        },
        {
          id: 74,
          title: '18. Graph Prompting - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              <ul style={{ fontSize: '1.2rem' }}>
                <li>Knowledge graph construction errors propagate</li>
                <li>Synchronization challenges with evolving data</li>
                <li>Entity resolution and disambiguation required</li>
                <li>Graph quality critical for reasoning accuracy</li>
              </ul>
            </div>
          ),
          backgroundColor: '#1a6731',
          notes: ''
        }
      ]
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 75,
          title: 'Technique Complexity Overview',
          icon: { name: 'duo-table' },
          content: (
            <div style={{ fontSize: '2rem', margin: '0 auto', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <h3 style={{ marginBottom: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <SvgIcon iconName="duo-chart-bar" sizeName="2x" darkModeInvert={true} />
                Complexity & Use Case Matrix
              </h3>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '1.2rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)' }}>
                    <th style={{ padding: '10px', border: '1px solid #555', fontSize: '2rem' }}>Complexity</th>
                    <th style={{ padding: '10px', border: '1px solid #555', fontSize: '2rem' }}>Techniques</th>
                    <th style={{ padding: '10px', border: '1px solid #555', fontSize: '2rem' }}>Best For</th>
                    <th style={{ padding: '10px', border: '1px solid #555', fontSize: '2rem' }}>Infrastructure Needs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '10px', border: '1px solid #555', color: '#2ecc71', fontWeight: 'bold' }}>Simple</td>
                    <td style={{ padding: '10px', border: '1px solid #555' }}>1. Zero-shot<br />2. Few-shot (simple)</td>
                    <td style={{ padding: '10px', border: '1px solid #555' }}>Quick baselines, well-known tasks, email triage</td>
                    <td style={{ padding: '10px', border: '1px solid #555' }}>LLM API only</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px', border: '1px solid #555', color: '#f39c12', fontWeight: 'bold' }}>Intermediate</td>
                    <td style={{ padding: '10px', border: '1px solid #555' }}>3. CoT<br />4. Meta<br />5. Self-Consistency<br />6. Generate Knowledge<br />7. Prompt Chaining<br />9. RAG</td>
                    <td style={{ padding: '10px', border: '1px solid #555' }}>Math/logic, standardized outputs, grounded answers, workflows</td>
                    <td style={{ padding: '10px', border: '1px solid #555' }}>LLM + orchestration<br />RAG needs vector DB</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '10px', border: '1px solid #555', color: '#e74c3c', fontWeight: 'bold' }}>Advanced</td>
                    <td style={{ padding: '10px', border: '1px solid #555' }}>8. Tree of Thoughts<br />10. ART<br />11-13. APE/Active/DSP<br />14-16. PAL/ReAct/Reflexion<br />17. Multimodal CoT<br />18. Graph Prompting</td>
                    <td style={{ padding: '10px', border: '1px solid #555' }}>Complex planning, tool use, code execution, optimization, multi-hop reasoning</td>
                    <td style={{ padding: '10px', border: '1px solid #555' }}>LLM + tools + search control<br />Code sandbox<br />Active learning loops<br />Graph databases</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                <div style={{ padding: '10px', backgroundColor: 'rgba(46, 204, 113, 0.15)', borderRadius: '8px', textAlign: 'center' }}>
                  <strong style={{ color: '#2ecc71' }}>🟢 Start Here</strong>
                  <p style={{ fontSize: '1.2rem', marginTop: '5px' }}>Zero-shot and few-shot for quick wins</p>
                </div>
                <div style={{ padding: '10px', backgroundColor: 'rgba(243, 156, 18, 0.15)', borderRadius: '8px', textAlign: 'center' }}>
                  <strong style={{ color: '#f39c12' }}>🟡 Production Ready</strong>
                  <p style={{ fontSize: '1.2rem', marginTop: '5px' }}>CoT, RAG, and chaining for most use cases</p>
                </div>
                <div style={{ padding: '10px', backgroundColor: 'rgba(231, 76, 60, 0.15)', borderRadius: '8px', textAlign: 'center' }}>
                  <strong style={{ color: '#e74c3c' }}>🔴 Specialized</strong>
                  <p style={{ fontSize: '1.2rem', marginTop: '5px' }}>Advanced techniques for complex problems</p>
                </div>
              </div>
            </div>
          ),
          backgroundColor: '#34495E',
          notes: ''
        },
        {
          id: 76,
          title: 'Best Practices & Recommendations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#48cb80' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px' }}>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#2ecc71', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-lightbulb" sizeName="2x" darkModeInvert={true} />
                    Getting Started
                  </h4>
                  <ul style={{ lineHeight: '1.8', fontSize: '1.2rem' }}>
                    <li><strong>Start Simple:</strong> Begin with zero-shot, move to few-shot if needed</li>
                    <li><strong>Add CoT:</strong> For reasoning tasks, add "think step-by-step"</li>
                    <li><strong>Use RAG:</strong> When you need fresh knowledge or citations</li>
                    <li><strong>Chain When Complex:</strong> Break multi-step tasks into pipelines</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#3498db', marginTop: '20px', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-shield-check" sizeName="2x" darkModeInvert={true} />
                    Production Considerations
                  </h4>
                  <ul style={{ lineHeight: '1.8', fontSize: '1.2rem' }}>
                    <li><strong>Monitor Outputs:</strong> Log prompts and responses</li>
                    <li><strong>Version Control:</strong> Track prompt templates like code</li>
                    <li><strong>Cost Management:</strong> Use simpler techniques when possible</li>
                    <li><strong>Latency Budgets:</strong> Consider multi-call overhead</li>
                  </ul>
                </div>
                <div>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f39c12', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-arrow-right" sizeName="2x" darkModeInvert={true} />
                    When to Scale Up
                  </h4>
                  <ul style={{ lineHeight: '1.8', fontSize: '1.2rem' }}>
                    <li><strong>Inconsistent Outputs:</strong> Try self-consistency or meta-prompting</li>
                    <li><strong>Tool Needs:</strong> Move to ReAct or ART for API/search</li>
                    <li><strong>Code Tasks:</strong> Use PAL for algorithmic problems</li>
                    <li><strong>Multi-hop:</strong> Consider Graph Prompting or ToT</li>
                    <li><strong>Optimization:</strong> Try APE for automatic prompt tuning</li>
                  </ul>
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#e74c3c', marginTop: '20px', marginBottom: '15px' }}>
                    <SvgIcon iconName="duo-triangle-exclamation" sizeName="2x" darkModeInvert={true} />
                    Common Pitfalls
                  </h4>
                  <ul style={{ lineHeight: '1.8', fontSize: '1.2rem' }}>
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
          notes: ''
        },
        {
          id: 77,
          title: 'Summary: The Prompt Engineering Ladder',
          icon: { name: 'duo-book-open' },
          content: (
            <div style={{ textAlign: 'left', color: '#fff' }}>
              <div style={{ marginBottom: '30px' }}></div>
              <h2 style={{ marginBottom: '30px' }}>From Simple to Advanced</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', margin: '0 auto', fontSize: '1.2rem', marginTop: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '15px', backgroundColor: 'rgba(46, 204, 113, 0.15)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '2em', minWidth: '50px', textAlign: 'center' }}>🟢</div>
                  <div style={{ textAlign: 'left' }}>
                    <strong>Level 1: Foundations</strong>
                    <p style={{ margin: '0px' }}>Zero-shot, Few-shot → Start here for 80% of tasks</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '15px', backgroundColor: 'rgba(52, 152, 219, 0.15)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '2em', minWidth: '50px', textAlign: 'center' }}>🔵</div>
                  <div style={{ textAlign: 'left' }}>
                    <strong>Level 2: Reasoning</strong>
                    <p style={{ margin: '0px' }}>CoT, Meta, Self-Consistency → Add when logic matters</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '15px', backgroundColor: 'rgba(243, 156, 18, 0.15)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '2em', minWidth: '50px', textAlign: 'center' }}>🟡</div>
                  <div style={{ textAlign: 'left' }}>
                    <strong>Level 3: Retrieval & Orchestration</strong>
                    <p style={{ margin: '0px' }}>RAG, Prompt Chaining → Production workflows</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '15px', backgroundColor: 'rgba(155, 89, 182, 0.15)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '2em', minWidth: '50px', textAlign: 'center' }}>🟣</div>
                  <div style={{ textAlign: 'left' }}>
                    <strong>Level 4: Agentic</strong>
                    <p style={{ margin: '0px' }}>ReAct, PAL, Reflexion → Tools and self-improvement</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '15px', backgroundColor: 'rgba(231, 76, 60, 0.15)', borderRadius: '10px' }}>
                  <div style={{ fontSize: '2em', minWidth: '50px', textAlign: 'center' }}>🔴</div>
                  <div style={{ textAlign: 'left' }}>
                    <strong>Level 5: Advanced</strong>
                    <p style={{ margin: '0px' }}>ToT, APE, Graph Prompting → Research & optimization</p>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '30px', padding: '20px', backgroundColor: 'rgba(52, 152, 219, 0.1)', borderRadius: '10px' }}>
                <p style={{ fontSize: '1.2rem', margin: 0 }}>
                  <strong>⚡ Key Insight:</strong> Start at Level 1, climb only as high as your task requires
                </p>
              </div>
            </div>
          ),
          backgroundColor: '#2C3E50',
          notes: ''
        }
      ]
    }
  ]
};

