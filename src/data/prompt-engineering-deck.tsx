import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const promptEngineeringDeck: Deck = {
  id: 'prompt-engineering-deck',
  name: '18 Prompt Engineering Techniques',
  description: 'A Comprehensive Guide to Advanced Prompting Patterns',
  category: 'RAG',
  theme: 'moon',
  cardClassName: 'glass-morphism',
  cardStyle: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
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
              <GSAPAnimated animation="rotateIn" delay={0}>
                <h2 style={{ marginBottom: '30px', fontSize: '2.5rem', color: '#e5c07b' }}>A Comprehensive Guide to 18 Advanced Prompting Patterns</h2>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
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
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.6}>
                <p style={{ marginTop: '20px', fontSize: '2rem' }}>
                  For Practitioners, Data Scientists & Product Engineers
                </p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.8}>
                <p><strong>Prepared by:</strong> Nisar A</p>
                <p><strong>Date:</strong> November 7, 2025</p>
                <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a3957',
          notes: `### 18 Prompt Engineering Techniques
Welcome to this comprehensive deep-dive into **18 Prompt Engineering Techniques** — the essential patterns and strategies you need to build *reliable*, *accurate*, and *production-ready* **LLM** 👉 'L-L-M' (Large Language Model) applications.

#### Why This Matters
Prompt engineering is the *art and science* of communicating with AI models. Think of it like learning to speak a new language — except this language unlocks superhuman capabilities in reasoning, retrieval, and task automation. Whether you're building chatbots, RAG systems, or agentic workflows, mastering these 18 techniques will dramatically improve your results.

#### What You'll Learn Today
We've organized these techniques into **four categories**: Reasoning techniques help models think step-by-step, Retrieval techniques ground responses in external knowledge, Agentic techniques enable models to use tools and self-correct, and Hybrid techniques combine multiple approaches for complex workflows. Each technique includes clear definitions, practical examples, and real-world use cases.

> By the end of this deck, you'll know *exactly* when to use each technique and how to implement it effectively. Let's dive in!`
        },
        {
          id: 2,
          title: 'Table of Contents',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ textAlign: 'left', margin: '0 auto', fontSize: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="fadeIn" delay={0}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                  <div>
                    <GSAPAnimated animation="slideInLeft" delay={0.2}>
                      <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#3498db', marginBottom: '12px' }}>
                        <SvgIcon iconName="duo-brain" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                        Reasoning Techniques (1-8, 17)
                      </h4>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.1} delay={0.4}>
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
                    </GSAPStaggerList>
                    <GSAPAnimated animation="slideInLeft" delay={0.9}>
                      <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#2ecc71', marginTop: '15px', marginBottom: '12px' }}>
                        <SvgIcon iconName="duo-database" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                        Retrieval (9)
                      </h4>
                    </GSAPAnimated>
                    <GSAPAnimated animation="fadeIn" delay={1.0}>
                      <ul style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>
                        <li>9. Retrieval-Augmented Generation (RAG)</li>
                      </ul>
                    </GSAPAnimated>
                  </div>
                  <div>
                    <GSAPAnimated animation="slideInRight" delay={0.2}>
                      <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9b59b6', marginBottom: '12px' }}>
                        <SvgIcon iconName="duo-robot" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                        Agentic Techniques (10, 14-16)
                      </h4>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.1} delay={0.4}>
                      <ul style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>
                        <li>10. Automatic Reasoning & Tool-use (ART)</li>
                        <li>14. Program-Aided LMs (PAL)</li>
                        <li>15. ReAct</li>
                        <li>16. Reflexion</li>
                      </ul>
                    </GSAPStaggerList>
                    <GSAPAnimated animation="slideInRight" delay={0.9}>
                      <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f39c12', marginTop: '15px', marginBottom: '12px' }}>
                        <SvgIcon iconName="duo-layer-group" sizeName="2x" style={{ marginTop: '14px' }} darkModeInvert={true} />
                        Hybrid Techniques (7, 11-13, 18)
                      </h4>
                    </GSAPAnimated>
                    <GSAPStaggerList stagger={0.1} delay={1.0}>
                      <ul style={{ lineHeight: '1.7', fontSize: '1.2rem' }}>
                        <li>7. Prompt Chaining</li>
                        <li>11. Automatic Prompt Engineer (APE)</li>
                        <li>12. Active-Prompt</li>
                        <li>13. Directional Stimulus Prompting</li>
                        <li>18. Graph Prompting</li>
                      </ul>
                    </GSAPStaggerList>
                  </div>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={1.3}>
                <p style={{ textAlign: 'center', marginTop: '20px', fontSize: '2rem', fontWeight: 'bold' }}>
                  18 advanced prompting patterns for reliable LLM systems
                </p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a3957',
          notes: `### Table of Contents
Here's your roadmap for today's journey through 18 powerful prompt engineering techniques! We've organized these into **four logical categories** to make it easier to understand when and how to use each one.

#### The Four Categories
First, we have **Reasoning Techniques** — these are your foundational patterns like Zero-shot, Few-shot, and Chain-of-Thought. They teach models *how to think* through problems step by step. Second is **Retrieval** with RAG 👉 'rag', which grounds your model's responses in external knowledge bases and documents. Third, we have **Agentic Techniques** like ReAct and Reflexion, where models learn to use tools, execute code, and self-correct their mistakes. Finally, **Hybrid Techniques** combine multiple approaches to tackle complex, multi-step workflows.

#### How to Use This Deck
Each technique gets multiple slides covering the definition, how it works, when to use it, and real-world examples. Feel free to jump to specific techniques you're curious about, but I recommend going through them in order to build a strong mental model of the progression from simple to advanced patterns.

> Pro tip: Keep your specific use case in mind as we go through each technique — you'll quickly identify which ones are perfect for your needs!`
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
              <GSAPAnimated animation="scaleIn" delay={0}>
                <h3>Definition</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p>Ask the model to perform a task with clear instructions and no examples.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.4}>
                <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.1} delay={0.5}>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Direct answer or formatted summary</li>
                  <li>Fastest way to get baseline results</li>
                  <li>Minimal token usage</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="slideInBottom" delay={0.9}>
                <p style={{ marginTop: '20px' }}>Best for quick baselines, well-known tasks, and situations with low token budgets. Ideal when you need fast results without additional context.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#103e5d',
          notes: `### Zero-shot Prompting - Overview
Let's start our journey with the simplest and most fundamental technique — **Zero-shot Prompting**. Think of this as the "just ask" approach to working with language models.

#### What Makes Zero-shot Special
Zero-shot means you're asking the model to do something *without giving it any examples first*. It's like asking a knowledgeable friend for help — you state your request clearly and trust they'll understand what you need. The model relies entirely on what it learned during training to interpret your instruction and generate a response. This is your **baseline technique** that you'll use more often than any other.

#### When to Reach for Zero-shot
Use zero-shot when you need *quick results* for well-known tasks like summarization, translation, or basic classification. It's perfect when you're working with tight token budgets or need a fast baseline to iterate from. For example, asking "Summarize this customer feedback in 3 bullets" is a classic zero-shot task that most models handle beautifully.

> Remember: Zero-shot is your starting point. If results aren't good enough, you can always upgrade to few-shot or more advanced techniques!`
        },
        {
          id: 4,
          title: '1. Zero-shot Prompting - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="rotateIn" delay={0}>
                <h3>How It Works</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <p>Zero-shot prompting relies on the model's pre-trained knowledge and capabilities. You provide clear, direct instructions without any demonstrations or examples. The model interprets your intent from the instruction alone and generates a response based on what it learned during training.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.5}>
                <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.6}>
                <p><strong>Level:</strong> Simple</p>
                <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Works on most LLMs</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.8}>
                <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={1.0}>
                <p>Email triage — classify incoming emails into Urgent/Normal/Low priority categories with clear definitions of each level.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#103e5d',
          notes: `### Zero-shot Prompting - How It Works
Now let's understand the mechanics behind zero-shot prompting and why it's so powerful despite its simplicity.

#### The Magic of Pre-training
Here's the key insight: modern language models like **GPT-4** 👉 'G-P-T four', **Claude 3.5** 👉 'Claude three point five', and **Gemini 1.5** 👉 'Gemini one point five' have been trained on *massive* amounts of text data. During that training, they learned patterns for thousands of tasks — summarization, classification, translation, question-answering, and more. When you use zero-shot prompting, you're essentially activating this *pre-learned knowledge* with your instruction.

#### Complexity and Model Selection
Zero-shot is our **simplest technique** — it requires no special setup, no examples, and works across virtually all modern LLMs. Even smaller models can handle straightforward zero-shot tasks, though larger, more capable models will give you better accuracy and consistency. The beauty is that you can start with zero-shot on any model and immediately get results.

#### Real-World Application: Email Triage
Imagine you're building an email management system. You can use zero-shot to classify emails as Urgent, Normal, or Low priority by simply providing clear definitions: "Urgent emails require action within 24 hours, Normal within a week, Low are informational only." The model will apply this logic without seeing any example emails first!

> Pro tip: The quality of your instruction directly impacts results. Be specific about what you want, but don't overthink it — clear and concise wins!`
        },
        {
          id: 5,
          title: '1. Zero-shot Prompting - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0}>
                <h3>Example Prompt</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <pre style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                  {`"Summarize the following article 
in 3 bullets for executives:
[paste text here]"`}
                </pre>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.6}>
                <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.8}>
                <p>GPT-4/4o, Claude 3.5, Gemini 1.5, and most modern LLMs support zero-shot prompting out of the box. Even smaller models can handle simple zero-shot tasks effectively.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#103e5d',
          notes: `### Zero-shot Prompting - Implementation
Let's look at a concrete example to see zero-shot prompting in action and understand which models work best for it.

#### Anatomy of a Good Zero-shot Prompt
The example prompt here is beautifully simple: "Summarize the following article in 3 bullets for executives." Notice how it's *clear* about what to do (summarize), *specific* about format (3 bullets), and *targeted* to audience (executives). This level of clarity helps the model understand exactly what you need without requiring any examples. The key is being **direct and unambiguous** in your instruction.

#### Model Compatibility
The great news about zero-shot prompting is that it's **universally supported**. Every modern LLM from GPT-4, Claude 3.5, and Gemini 1.5 down to smaller open-source models can handle zero-shot tasks. The difference is in *quality* and *consistency* — larger, more capable models will give you better results, but even smaller models can handle straightforward tasks like classification or basic summarization.

#### Practical Tips for Implementation
When writing your zero-shot prompts, think about *what*, *how*, and *for whom*. What task needs to be done? How should the output be formatted? For whom or what purpose is this being created? Answering these three questions in your prompt will dramatically improve your results. For example, "Summarize for executives" produces different output than "Summarize for technical teams" — same task, different audience, different results.

> Remember: Start simple. If the model doesn't understand, add more detail to your instruction before jumping to few-shot examples.`
        },
        {
          id: 6,
          title: '1. Zero-shot Prompting - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0}>
                <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} delay={0.3}>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>May misinterpret intent without examples</li>
                  <li>Brittle on novel or nuanced tasks</li>
                  <li>Less control over output format</li>
                  <li>Performance varies significantly by model capability</li>
                </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#103e5d',
          notes: `### Zero-shot Prompting - Considerations
While zero-shot prompting is incredibly useful, it's important to understand its limitations so you know when to reach for more advanced techniques.

#### When Zero-shot Struggles
The biggest challenge with zero-shot prompting is **ambiguity**. Without examples, the model might misinterpret what you want, especially for nuanced tasks or domain-specific requirements. For instance, asking to "extract key information" from a medical report might work, but the model might miss critical details that a healthcare professional would recognize. Novel tasks that the model hasn't seen during training are particularly challenging — if it's truly new territory, zero-shot might give you inconsistent or incorrect results.

#### Format and Consistency Issues
Another limitation is *control over output format*. You can request JSON or specific structures, but without examples showing exactly what you want, the model might deviate from your expectations. This becomes especially problematic in production systems where you need **reliable, consistent formatting** for downstream processing. If you find yourself repeatedly reformatting outputs, that's a sign you need few-shot examples or more structured approaches.

#### Model Capability Matters
Finally, remember that **model capability significantly impacts zero-shot performance**. GPT-4 might nail a task on the first try, while a smaller model might struggle. This isn't a flaw in zero-shot prompting itself — it's just reality. If you're using smaller models for cost or latency reasons, you'll often need to supplement zero-shot with few-shot examples or other techniques to get comparable results.

> Pro tip: Start with zero-shot, measure performance, then upgrade to few-shot or other techniques only if needed. Don't over-engineer from the start!`
        },
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
              <GSAPAnimated animation="scaleIn" delay={0}>
                <h3>Definition</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p>Guide the model with a few labeled examples to shape outputs.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.1} delay={0.5}>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Classification and structured outputs matching examples</li>
                  <li>Consistent formatting and tone</li>
                  <li>Better handling of domain-specific terminology</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="bounceIn" delay={0.9}>
                <p style={{ marginTop: '20px' }}>Best for tasks requiring custom formats, specific domain tone, or when you need to demonstrate edge cases. Examples guide the model to match your desired output style.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#284d67',
          notes: `### Few-shot Prompting - Overview
Now we're leveling up from zero-shot to **Few-shot Prompting** — one of the most practical and widely-used techniques in production systems. Think of this as "teaching by example."

#### The Power of Examples
Few-shot prompting means providing the model with *2 to 5 labeled examples* before asking it to perform the actual task. These examples demonstrate exactly what you want — the input format, the output format, the style, the tone, and even how to handle edge cases. It's like showing someone how to fill out a form correctly before handing them a blank one. The model learns the pattern from your examples and applies it to new inputs.

#### When Few-shot Shines
Use few-shot when you need **consistent formatting and tone**, especially for domain-specific tasks. For example, if you're building a customer support system that needs to respond in your company's specific voice with certain terminology, showing 3-5 examples of good responses will dramatically improve consistency. Few-shot is also excellent for classification tasks where categories might be ambiguous without concrete examples.

#### The Sweet Spot
Few-shot sits in a perfect middle ground — it's more powerful than zero-shot but simpler than complex reasoning techniques. You're essentially showing the model "this is what good looks like" without needing to engineer elaborate prompts or chains of reasoning. This makes it **practical, effective, and easy to implement** in real applications.

> Pro tip: Quality matters more than quantity with few-shot. Three excellent examples beat ten mediocre ones!`
        },
        {
          id: 8,
          title: '2. Few-shot Prompting - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="rotateIn" delay={0}>
                <h3>How It Works</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <p>Few-shot prompting provides 2-5 input-output examples before presenting the actual task. The model learns the pattern from these demonstrations and applies it to new inputs. This approach helps the model understand not just what to do, but how to format and style the response.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.5}>
                <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.6}>
                <p><strong>Level:</strong> Simple–Intermediate</p>
                <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Mid-size models benefit noticeably from examples</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.8}>
                <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={1.0}>
                <p>Support macros generation with style-consistent examples that match company terminology and formatting guidelines.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#284d67',
          notes: `### Few-shot Prompting - How It Works
Let's dive into the mechanics of few-shot prompting and understand why those examples are so powerful.

#### The Pattern Recognition Engine
Here's what happens behind the scenes: When you provide examples, the model's attention mechanism *analyzes the patterns* across your input-output pairs. It notices structural similarities, stylistic choices, terminology usage, and formatting conventions. Then when you present the new task, it applies those learned patterns to generate a response that matches your examples. Think of it like the model saying, "Oh, I see the pattern — when you give me X, you want Y formatted like this."

#### Optimal Complexity Level
Few-shot is classified as **Simple to Intermediate** complexity because it doesn't require complex chains of reasoning or special model capabilities. However, it does require some thought in *selecting good examples*. You want examples that are representative of the task, cover common cases and maybe an edge case or two, and demonstrate the exact format you need. The beauty is that even mid-size models show **significant improvement** with just a few examples.

#### Real-World Application: Support Macros
Imagine you're building automated support responses for a SaaS company. You need responses that use company-specific terminology (like your product names), maintain a friendly but professional tone, and follow certain formatting (like always ending with a link to docs). By showing 3-5 examples of perfect support responses, the model will generate new responses that *feel like they came from your team*, not a generic AI.

> Pro tip: Include at least one edge case example (like handling a frustrated customer) to teach the model how to handle tricky situations!`
        },
        {
          id: 9,
          title: '2. Few-shot Prompting - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0}>
                <h3>Example Prompt</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <pre style={{ backgroundColor: 'rgba(52, 152, 219, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                  {`"You are a sentiment classifier.
Example: 'Loved it' -> positive
'Too slow' -> negative
Classify: 'It was okay, but pricey.'"`}
                </pre>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.6}>
                <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.8}>
                <p>GPT-4/4o, Claude 3.5, Gemini 1.5, and most modern LLMs support few-shot learning. Mid-size models especially benefit from the additional context provided by examples.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#284d67',
          notes: `### Few-shot Prompting - Implementation
Let's look at a concrete implementation of few-shot prompting to see how examples transform model behavior.

#### Anatomy of the Example
Look at this sentiment classification example carefully. Notice the structure: first, we set context ("You are a sentiment classifier"), then provide two examples showing the input-output pattern, and finally present the actual task. The examples are *crisp and clear* — "Loved it" is obviously positive, "Too slow" is clearly negative. This gives the model strong signal about what positive and negative mean in your domain. When it sees "It was okay, but pricey," it can confidently classify it as negative because "pricey" has negative sentiment similar to "too slow."

#### The Example Selection Process
Choosing good examples is an **art and science**. You want diversity that covers your input space — in sentiment analysis, that might mean examples with different lengths, styles, and intensity levels. You also want clarity — ambiguous examples confuse the model. And you want representation of all your categories — if you're doing multi-class classification, show at least one example of each class. For this sentiment task, you might add a neutral example like "It works as expected" -> neutral to teach the model about the middle ground.

#### Universal Model Support
The good news is that few-shot learning is **universally supported** across modern LLMs. Every major model from GPT-4 to smaller open-source alternatives can learn from examples. The difference is in how many examples different models need — larger models might nail it with 2-3 examples, while smaller models might need 5-7 for the same performance.

> Pro tip: Test your examples! Run the prompt with different inputs to verify the pattern is clear and the model generalizes correctly.`
        },
        {
          id: 10,
          title: '2. Few-shot Prompting - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0}>
                <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} delay={0.3}>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Example bias - model may overfit to example patterns</li>
                  <li>Token overhead increases with number of examples</li>
                  <li>Data leakage risk if examples contain sensitive information</li>
                  <li>Example selection significantly impacts results</li>
                </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#284d67',
          notes: `### Few-shot Prompting - Considerations
While few-shot prompting is incredibly powerful, it comes with important tradeoffs and considerations you need to understand.

#### The Example Bias Problem
The biggest gotcha with few-shot is **example bias** — the model might overfit to the specific patterns in your examples rather than learning the general task. For instance, if all your sentiment examples use adjectives, the model might rely too heavily on adjectives and miss sentiment expressed through verbs or context. This is why *example diversity* is critical. You want examples that demonstrate the task from different angles, not just variations of the same pattern.

#### Token Economics
Every example you add increases your token count, which means **higher costs and increased latency**. If you're using 5 examples of 100 tokens each, that's 500 tokens per request before you even get to the actual task! At scale, this adds up fast. You need to find the sweet spot — enough examples to get good performance, but not so many that costs become prohibitive. Often, 3-5 carefully chosen examples hit that sweet spot.

#### Security and Privacy Considerations
Here's something many people overlook: if your examples contain actual customer data, medical information, or proprietary details, you're potentially creating **data leakage risks**. Those examples go to the model provider in every single request. Always use synthetic or anonymized examples, especially in production systems. This protects your users' privacy and keeps your sensitive information secure.

#### Example Selection is Critical
Finally, remember that **bad examples teach bad patterns**. If your examples have errors, inconsistencies, or don't actually represent what you want, the model will learn those flaws. Take time to curate high-quality examples, test them thoroughly, and update them as you learn what works. Think of your examples as training data — quality matters immensely.

> Pro tip: Start with 3 examples, measure performance, then add more only if needed. More isn't always better!`
        },
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
              <GSAPAnimated animation="flipCard" delay={0}>
                <h3>Definition</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p>Ask the model to reason step-by-step before the final answer.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.4}>
                <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.1} delay={0.5}>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Intermediate reasoning steps plus final answer</li>
                  <li>Improved accuracy on complex reasoning tasks</li>
                  <li>Transparent decision-making process</li>
                  <li>Better handling of multi-step problems</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="bounceIn" delay={0.9}>
                <p style={{ marginTop: '20px' }}>Best for math and logic problems, multi-hop question answering, and planning tasks. The step-by-step approach significantly improves reasoning accuracy.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#91420e',
          notes: `### Chain-of-Thought - Overview
Welcome to **Chain-of-Thought** or **CoT** 👉 'cot' — one of the most transformative techniques in modern prompt engineering. This is where we teach models to *think* before they answer.

#### The Revolutionary Insight
Here's the breakthrough: when you ask a model to show its reasoning step-by-step before giving the final answer, accuracy on complex tasks can improve by **30-50%** or more! It's like the difference between a student who writes down their work versus one who just guesses the answer. The act of explicitly reasoning through intermediate steps helps the model catch errors, maintain logical consistency, and arrive at better conclusions. This simple insight has revolutionized how we use LLMs for complex reasoning.

#### When Chain-of-Thought Shines
CoT is your go-to technique for **math problems, logic puzzles, multi-hop question answering**, and any task that requires connecting multiple pieces of information. For example, answering "How many years passed between the founding of Apple and the first iPhone?" requires finding two dates, then calculating the difference. CoT makes these multi-step problems dramatically more reliable.

#### The Transparency Advantage
Beyond accuracy, CoT gives you **transparency**. You can see *how* the model arrived at its answer, which is crucial for debugging, building trust, and meeting explainability requirements. If the answer is wrong, you can look at the reasoning steps to see where it went off track. This makes CoT invaluable in production systems where you need to understand and validate model behavior.

> Pro tip: CoT transforms LLMs from pattern matchers into reasoning engines. It's the technique that makes complex applications possible!`
        },
        {
          id: 12,
          title: '3. Chain-of-Thought - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="rotateIn" delay={0}>
                <h3>How It Works</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <p>Chain-of-Thought prompting instructs the model to break down complex problems into intermediate steps. By explicitly reasoning through each step, the model can catch errors and maintain logical consistency. This mimics human problem-solving and dramatically improves performance on tasks requiring multi-step reasoning.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.5}>
                <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.6}>
                <p><strong>Level:</strong> Intermediate</p>
                <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Smaller models may overfit or produce inconsistent reasoning</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.8}>
                <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={1.0}>
                <p>Price breakdown reasoning in finance approvals — showing step-by-step calculation of total costs, taxes, discounts, and ROI to justify purchase decisions.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#91420e',
          notes: `### Chain-of-Thought - How It Works
Let's understand the mechanics of Chain-of-Thought and why it's such a powerful reasoning amplifier.

#### The Step-by-Step Mechanism
Here's what CoT does: instead of jumping directly to an answer, it forces the model to **generate intermediate reasoning steps**. For a math problem like "If Sarah has 15 apples and gives away 40% to friends, then buys 8 more, how many does she have?" — CoT makes the model show: "Step 1: Calculate 40% of 15 = 6 apples. Step 2: 15 - 6 = 9 apples remaining. Step 3: 9 + 8 = 17 apples total." Each step is a checkpoint where the model must maintain correctness, dramatically reducing compound errors.

#### Why It Works So Well
The magic is in how language models generate text. They predict one token at a time, and *earlier tokens influence later ones*. By generating reasoning steps first, those steps become part of the context for generating the final answer. It's like building a scaffold — each reasoning step supports the next, leading to a much more solid final answer. This is why CoT works even though we're not actually changing the model itself!

#### Model Requirements
CoT is classified as **Intermediate** complexity because it requires models with strong reasoning capabilities. GPT-4, Claude 3.5, and Gemini 1.5 excel at maintaining coherent multi-step reasoning. Smaller models can struggle — they might generate plausible-sounding reasoning that's actually incorrect, or they might shortcut the reasoning and jump to an answer. This is one technique where **model capability really matters**.

#### Real-World Application: Finance Approvals
Imagine a system that reviews purchase requests. Using CoT, it can show: "Base cost: $10,000. Tax (8%): $800. Volume discount (15%): -$1,500. Net cost: $9,300. Expected annual savings: $15,000. ROI: 161% in year one. Recommendation: Approve." This transparency builds trust and makes auditing easy!

> Pro tip: CoT turns abstract reasoning into visible, debuggable steps. It's like having X-ray vision into the model's thinking!`
        },
        {
          id: 13,
          title: '3. Chain-of-Thought - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0}>
                <h3>Example Prompt</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <pre style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                  {`"Solve step-by-step: If a box has 12 red and 8 blue marbles and 4 reds are removed, what fraction are red now? Think step by step."`}
                </pre>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.6}>
                <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.8}>
                <p>GPT-4/4o, Claude 3.5, and Gemini 1.5 excel at chain-of-thought reasoning. Works best with larger, more capable models that can maintain coherent multi-step reasoning.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#91420e',
          notes: `### Chain-of-Thought - Implementation
Let's examine a concrete CoT prompt to understand how to craft effective step-by-step reasoning instructions.

#### Anatomy of a CoT Prompt
Look at this marble problem carefully. The key phrase is **"Think step by step"** at the end — this is the trigger that activates chain-of-thought reasoning. Without it, the model might jump to an answer. With it, the model knows to show its work. The problem itself is multi-step: first count total marbles (12 + 8 = 20), then remove 4 reds (12 - 4 = 8 reds remaining), then calculate the new total (8 + 8 = 16), finally compute the fraction (8/16 = 1/2). CoT ensures the model works through each step explicitly.

#### Variations That Work
You can trigger CoT with different phrases: "Think step by step", "Let's solve this systematically", "Show your work", or "Explain your reasoning before answering". Some practitioners combine CoT with few-shot by showing one example with reasoning steps, then asking the model to apply the same approach. The key is **signaling that you want intermediate steps**, not just the final answer.

#### Model Capabilities Matter
GPT-4, Claude 3.5, and Gemini 1.5 are the **gold standard** for CoT. They can maintain logical coherence across multiple reasoning steps, catch their own errors, and generate reasoning that actually makes sense. Smaller models can attempt CoT, but they often produce reasoning that *looks* plausible but contains logical errors. If you're using CoT in production, invest in the best models you can afford — the reasoning quality directly impacts your results.

> Pro tip: Combine CoT with output formatting instructions like "Provide your reasoning in numbered steps, then give the final answer after 'Answer:'" to make parsing easier!`
        },
        {
          id: 14,
          title: '3. Chain-of-Thought - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0}>
                <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} delay={0.3}>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Longer outputs increase token costs and latency</li>
                  <li>Potential for verbose hallucinations in reasoning steps</li>
                  <li>May generate plausible but incorrect reasoning paths</li>
                  <li>Requires careful prompt engineering to avoid shortcuts</li>
                </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#91420e',
          notes: `### Chain-of-Thought - Considerations
While CoT is powerful, it comes with important tradeoffs that you need to understand and manage.

#### The Token Cost Reality
CoT generates **significantly more tokens** than direct answers. Where a direct answer might be 10-20 tokens, CoT reasoning could be 100-200 tokens or more. At scale, this means higher API costs and increased latency. You need to decide: is the accuracy improvement worth the extra cost? For critical reasoning tasks where correctness matters more than speed or cost, absolutely yes. For simple tasks where basic accuracy is fine, maybe not. Always **measure the cost-benefit tradeoff** for your specific use case.

#### The Hallucination Risk
Here's a subtle danger: CoT can produce **confident-sounding but incorrect reasoning**. The model might generate plausible-looking steps that contain errors, and because it looks logical, you might trust it. For example, it might say "Step 1: Calculate 40% of 50 = 25" (wrong!) and then build subsequent steps on that error. The reasoning *reads* convincingly, but it's wrong from the start. This is why you need validation — check the reasoning steps, not just the final answer, especially in high-stakes applications.

#### Shortcut Behavior
Models can be clever in ways you don't want. Sometimes they'll "fake" reasoning by jumping to the answer and then backfilling plausible-sounding steps. To prevent this, you need **careful prompt engineering** — be explicit that you want genuine step-by-step reasoning, perhaps by using few-shot examples that show real work, or by using techniques like "show uncertainty at each step" to force genuine thinking.

#### When NOT to Use CoT
Don't use CoT for simple tasks where direct answers work fine — you're just wasting tokens. Don't use it when you need ultra-fast responses and can tolerate some error. And be cautious with smaller models that might generate nonsense reasoning. CoT is a **power tool** — use it when you need the power, but don't overuse it everywhere.

> Pro tip: For production systems, implement validation of reasoning steps, not just final answers. Catch errors early in the chain!`
        },
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
              <GSAPAnimated animation="scaleIn" delay={0}>
                <h3>Definition</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p>Specify abstract structure, syntax, and format rather than content-specific examples.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.1} delay={0.5}>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Consistent, schema-compliant outputs</li>
                  <li>Improved standardization across tasks</li>
                  <li>Better tool integration</li>
                  <li>Comparable evaluation results</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="slideInBottom" delay={0.9}>
                <p style={{ marginTop: '20px' }}>Best for standardized pipelines, tool integration, and when evaluation comparability is important. Focuses on structure over specific content examples.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#0e9135',
          notes: `### Meta Prompting - Overview
Let's explore **Meta Prompting** — a technique that shifts focus from *what* to *how*, defining the structure and format of outputs rather than providing content examples.

#### Structure Over Content
Here's the key distinction: while few-shot shows *specific examples*, meta prompting defines *abstract structure*. Instead of showing "Input: X, Output: Y", you specify "Output must be JSON with fields [name, description, status]". Instead of demonstrating tone through examples, you say "Use professional language, avoid jargon, keep sentences under 20 words". You're defining the **blueprint** rather than showing finished products. This makes meta prompting incredibly powerful for standardization.

#### When Meta Prompting Excels
Use meta prompting when you need **consistent, machine-readable outputs** across many tasks. It's perfect for building standardized pipelines where downstream systems expect specific schemas. For example, if you're extracting structured data from documents to feed into a database, meta prompting ensures every extraction follows the same schema, making integration seamless. It's also excellent when you need comparable results across different models or prompts — the schema acts as a contract.

#### The Abstraction Advantage
Meta prompting works because modern LLMs have learned countless schemas, formats, and structures during training. By specifying structural requirements, you're tapping into this learned knowledge without needing to provide examples. This saves tokens, reduces maintenance (no example library to curate), and often generalizes better than specific examples. Think of it as **programming by specification** rather than programming by example.

> Pro tip: Meta prompting is your secret weapon for building reliable, maintainable production systems that need consistent outputs!`
        },
        {
          id: 16,
          title: '4. Meta Prompting - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="rotateIn" delay={0}>
                <h3>How It Works</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <p>Meta prompting defines the abstract structure and format requirements without providing content-specific examples. By specifying schemas, field types, and structural constraints, you guide the model to produce outputs that conform to your requirements while allowing flexibility in content generation.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.5}>
                <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.6}>
                <p><strong>Level:</strong> Intermediate</p>
                <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Models with strong instruction-following capabilities</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.8}>
                <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={1.0}>
                <p>Unified incident report format across teams — creating a consistent structure for reporting issues with categorical fields that make analysis and tracking more efficient.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#0e9135',
          notes: `### Meta Prompting - How It Works
Let's understand the mechanics of meta prompting and why schema-based specifications are so powerful.

#### The Schema-Based Approach
Meta prompting works by leveraging the model's **deep understanding of formats and structures**. During training, models saw countless JSON objects, XML documents, data schemas, and structured formats. When you specify "Output as JSON with fields [id: integer, name: string, tags: array]", the model knows exactly what that means and how to generate it. You're activating pre-learned structural knowledge rather than teaching through examples. This makes meta prompting incredibly efficient — you get structured outputs with minimal prompt overhead.

#### Flexibility Within Structure
Here's the beauty: meta prompting gives you **control over structure while allowing content flexibility**. If you're extracting key points from various documents, specifying a schema ensures consistent output format, but the model still applies intelligence to determine what content fits each field. It's like providing a template — the structure is fixed, but the model fills it intelligently based on context. This balance between constraint and flexibility is perfect for production systems.

#### Model Requirements
Meta prompting works best with **instruction-following champions** like GPT-4, Claude 3.5, and Gemini 1.5. These models excel at understanding and adhering to structural specifications. They can parse complex schema definitions, understand type constraints, and maintain consistency across long outputs. Smaller models might struggle with complex schemas or deviate from specifications, so invest in capable models if meta prompting is core to your system.

#### Real-World Application: Incident Reports
Imagine a large organization where different teams report incidents differently, making analysis impossible. With meta prompting, you define a schema: "JSON with fields: {timestamp: ISO8601, severity: enum[low, medium, high, critical], category: string, description: string, affected_systems: array, resolution_steps: array}". Now every team's reports, processed through the LLM, come out in this standard format, making aggregation and analysis trivial!

> Pro tip: Start with simple schemas and add complexity gradually. Test that the model reliably follows your structure before deploying!`
        },
        {
          id: 17,
          title: '4. Meta Prompting - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0}>
                <h3>Example Prompt</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <pre style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                  {`"Problem: <text>. Goal: <target>. Constraints: <list>.
Output schema: JSON with fields [steps, rationale, answer].
Populate schema only."`}
                </pre>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.6}>
                <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.8}>
                <p>GPT-4/4o, Claude 3.5, Gemini 1.5 work well with meta prompting. These models excel at understanding and following structural specifications.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#0e9135',
          notes: `### Meta Prompting - Implementation
Let's examine a concrete meta prompting example to understand how to craft effective structural specifications.

#### Anatomy of the Meta Prompt
Look at this example structure: it starts with **input placeholders** (Problem, Goal, Constraints), then specifies the **output schema** (JSON with specific fields), and ends with a clear directive ("Populate schema only"). Notice how it doesn't show any concrete examples — it's purely structural. The model understands that it needs to take the problem, goal, and constraints, then generate a JSON object with "steps" (likely an array), "rationale" (probably a string), and "answer" (could be any type). This abstraction is powerful!

#### Best Practices for Schema Definition
When crafting meta prompts, be **explicit about data types and structures**. Instead of just "output JSON", specify field names, types (string, integer, array, object), and any constraints (enums, ranges, formats). For example: "status must be one of [pending, approved, rejected]" or "timestamp in ISO8601 format". The more specific your schema, the more reliable the output. Think like you're writing an API contract — because essentially, you are!

#### The "Populate Schema Only" Directive
That final instruction — "Populate schema only" — is crucial. It tells the model **don't add explanation, don't add preamble, just give me the structured data**. This makes parsing much easier in code. You can be even more explicit: "Return only valid JSON, no markdown formatting, no explanation text". This ensures you get machine-readable output that won't break your parser.

> Pro tip: Validate outputs programmatically! Use JSON schema validators or pydantic models to catch when the model deviates from your specification!`
        },
        {
          id: 18,
          title: '4. Meta Prompting - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0}>
                <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} delay={0.3}>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Assumes task knowledge from the model</li>
                  <li>May underperform on novel domains without examples</li>
                  <li>Requires clear schema definitions</li>
                  <li>Less guidance on nuanced content decisions</li>
                </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#0e9135',
          notes: `### Meta Prompting - Considerations
While meta prompting is powerful for structuring outputs, it has important limitations you need to understand.

#### The Knowledge Assumption
Meta prompting **assumes the model already knows how to do the task** — you're just telling it how to format the output. If the task is novel, domain-specific, or requires nuanced understanding that the model doesn't have, meta prompting alone won't help. For example, specifying a JSON schema for legal document analysis doesn't help if the model doesn't understand legal terminology. In these cases, you need to combine meta prompting with few-shot examples or detailed task instructions. The schema handles the "how to format", but you still need to teach the "what to extract".

#### Novel Domain Challenges
When working in specialized domains — medical diagnosis, legal analysis, scientific research — meta prompting might give you well-structured but **incorrect content**. The schema ensures format consistency, but not content accuracy. You might get perfect JSON with completely wrong diagnoses! This is where hybrid approaches shine: use few-shot to teach domain knowledge, then meta prompting to standardize the output format.

#### Schema Complexity Matters
Overly complex schemas can confuse even the best models. If your schema has deeply nested objects, circular references, or ambiguous field descriptions, the model might generate **malformed or inconsistent outputs**. Keep schemas as simple as possible while meeting your needs. Test iteratively — start simple, add complexity gradually, validate at each step.

#### Content vs. Structure Tradeoff
Meta prompting gives great **structural control but less content guidance**. You're not showing examples of good vs. bad content, just specifying the container. This means the model might make nuanced content decisions differently than you'd prefer. If specific content quality matters as much as structure, consider combining meta prompting with few-shot examples or detailed content guidelines.

> Pro tip: Combine techniques! Use few-shot for content quality, meta prompting for output structure. Best of both worlds!`
        },
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
              <GSAPAnimated animation="scaleIn" delay={0}>
                <h3>Definition</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p>Sample multiple CoT paths and select the majority/most consistent answer.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.4}>
                <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.1} delay={0.5}>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Aggregated answer with higher reliability</li>
                  <li>Reduced variance in outputs</li>
                  <li>Better handling of edge cases</li>
                  <li>Improved accuracy through voting</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="bounceIn" delay={0.9}>
                <p style={{ marginTop: '20px' }}>Best for arithmetic, commonsense reasoning, and logic tasks where single-pass inference is unstable. Multiple reasoning paths provide more reliable answers.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#7b0e91',
          notes: `### Self-Consistency - Overview
Let's explore **Self-Consistency**, a powerful technique that leverages the wisdom of crowds — except the crowd is the same AI model thinking multiple times!

#### The Ensemble Approach
Here's the brilliant insight: instead of asking the model once and hoping for the right answer, we ask it **multiple times** with different reasoning paths, then vote on the most common answer. Think of it like getting multiple expert opinions — if 8 out of 10 doctors agree on a diagnosis, you can be more confident than if you only asked one. Self-consistency brings this ensemble thinking to LLMs by generating diverse reasoning paths and aggregating the results.

#### When Self-Consistency Shines
Use self-consistency for **high-stakes reasoning tasks** where accuracy matters more than speed or cost. It's particularly powerful for math problems, logic puzzles, and commonsense reasoning where a single model run might make a calculation error or logical slip. For example, if you're building a financial calculator that needs to be highly accurate, running 5-10 reasoning paths and voting on the answer dramatically reduces errors. The technique works because **errors are often random** — different runs make different mistakes, but the correct answer appears most frequently.

#### The Reliability Advantage
Self-consistency gives you two major benefits: **higher accuracy** through error cancellation, and **reduced variance** making outputs more predictable. Instead of getting different answers each time you run the same prompt, self-consistency converges on the most consistent solution. This makes your system more reliable and trustworthy, which is crucial for production applications where users expect consistent behavior.

> Pro tip: Self-consistency is your "insurance policy" for critical reasoning tasks where getting it right matters more than speed!`
        },
        {
          id: 20,
          title: '5. Self-Consistency - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="rotateIn" delay={0}>
                <h3>How It Works</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <p>Self-consistency generates multiple independent reasoning paths for the same problem using temperature sampling. Each path produces a candidate answer. The system then aggregates these answers, typically by majority voting, to select the most consistent solution. This approach compensates for individual reasoning errors.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.5}>
                <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.6}>
                <p><strong>Level:</strong> Intermediate–Advanced</p>
                <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Needs temperature sampling capability</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.8}>
                <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={1.0}>
                <p>Benchmark problem sets (GSM8K-style) with voting on multiple generated solutions to improve mathematical accuracy.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#7b0e91',
          notes: `### Self-Consistency - How It Works
Let's dive into the mechanics of self-consistency and understand how this ensemble approach dramatically improves reliability.

#### The Multi-Path Generation Process
Self-consistency works through **temperature sampling** — you set a non-zero temperature (typically 0.7-1.0) to get diverse outputs, then run the same Chain-of-Thought prompt multiple times (typically 5-10 times). Each run generates a different reasoning path because of the randomness introduced by temperature. For example, solving "12 × 15" might use different approaches: "12 × 10 = 120, 12 × 5 = 60, total 180" in one path, versus "15 × 10 = 150, 15 × 2 = 30, total 180" in another. Different paths, same answer!

#### The Voting Mechanism
After generating multiple answers, you implement **majority voting** to select the final answer. If 7 out of 10 runs say "180", 2 say "175", and 1 says "185", you choose "180" as the most consistent answer. The beauty is that random errors (like "175" or "185") get outvoted by the correct answer that appears most frequently. You can also weight votes by confidence scores or use more sophisticated aggregation like selecting the median for numeric answers.

#### Complexity and Model Requirements
Self-consistency is **Intermediate to Advanced** because it requires orchestration code to run multiple inferences and aggregate results. You need models that support temperature sampling (all major LLMs do) and enough API throughput to handle parallel requests. The technique works best with capable models like GPT-4, Claude 3.5, and Gemini 1.5 that can generate genuinely different reasoning paths rather than identical outputs.

#### Real-World Application: Math Benchmarks
Self-consistency shines on math benchmarks like **GSM8K** 👉 'G-S-M eight-K', a dataset of grade school math problems. Single-pass accuracy might be 85%, but with self-consistency using 10 samples, accuracy can jump to 92-95%! This improvement comes from catching calculation errors, logic mistakes, and edge cases that individual runs miss.

> Pro tip: Start with 5 samples, measure improvement, then increase to 10 only if the accuracy gain justifies the cost!`
        },
        {
          id: 21,
          title: '5. Self-Consistency - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0}>
                <h3>Example Prompt</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <pre style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                  {`"Generate 5 step-by-step solutions. Provide only the final numeric answer for each, then vote for the most frequent."`}
                </pre>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.6}>
                <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.8}>
                <p>GPT-4/4o, Claude 3.5, Gemini 1.5 - Requires models that support temperature sampling to generate diverse reasoning paths. Typically requires 3-10 samples.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#7b0e91',
          notes: `### Self-Consistency - Implementation
Let's look at how to implement self-consistency in practice, including both the prompting strategy and the aggregation logic.

#### Two Implementation Approaches
You can implement self-consistency in two ways. **Approach 1: Single prompt, multiple runs** — run the same CoT prompt multiple times with temperature > 0, collect all answers, then implement voting in your code. **Approach 2: Meta-prompt** — like the example here, ask the model to generate multiple solutions within one call, then vote. Approach 1 gives you more control and truly independent samples. Approach 2 is simpler but the "solutions" might be less diverse since they're generated sequentially in one context.

#### The Voting Implementation
For numeric answers, majority voting is straightforward — count occurrences and pick the most common. For text answers, you might need fuzzy matching or semantic similarity. Some advanced implementations use **weighted voting** where you assign confidence scores to each answer based on the reasoning quality, or use the model itself to judge which answer is best. The key is having robust aggregation logic that handles ties, outliers, and edge cases.

#### Practical Configuration
Start with **5-7 samples** and temperature around **0.7-0.8**. Higher temperature (>0.9) gives more diversity but might produce more errors. Lower temperature (<0.5) gives less diversity, reducing the benefit of self-consistency. For critical applications, use 10 samples. Monitor the answer distribution — if all 10 runs agree, you have high confidence. If votes are split 6-4, you might need more samples or manual review.

> Pro tip: Log the full distribution of answers, not just the winner. It gives you confidence estimates and helps debug when things go wrong!`
        },
        {
          id: 22,
          title: '5. Self-Consistency - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0}>
                <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} delay={0.3}>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Higher latency due to multiple inference calls</li>
                  <li>Increased cost (3-10x token usage)</li>
                  <li>Correlated errors if prompt is fundamentally flawed</li>
                  <li>Requires aggregation logic implementation</li>
                </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#7b0e91',
          notes: `### Self-Consistency - Considerations
While self-consistency improves accuracy, it comes with significant costs and important limitations to consider.

#### The Cost-Latency Tradeoff
The most obvious limitation is **cost and latency multiplication**. If you run 5 samples, you're paying 5x the API cost and potentially waiting 5x longer (unless you parallelize). For a single prompt that costs $0.10, self-consistency at 10 samples costs $1.00. At scale, this adds up fast! You need to carefully evaluate: does the accuracy improvement justify the cost? For critical decisions with high stakes, absolutely. For routine tasks, probably not. This is where **selective application** matters — use self-consistency only where accuracy is truly critical.

#### The Systematic Error Problem
Here's a subtle but important limitation: self-consistency helps with **random errors** but not **systematic errors**. If your prompt is fundamentally flawed or the model lacks knowledge for the task, all reasoning paths will be wrong in the same way. Voting won't help if everyone's voting for the wrong answer! For example, if you ask a math question with a trick that the model consistently misses, all 10 runs might give the same wrong answer. This looks like high confidence, but it's confidently wrong!

#### Implementation Complexity
Self-consistency requires **orchestration code** to manage multiple API calls, collect responses, and implement voting logic. You need error handling for failed calls, timeout management, and decision logic for handling ties or ambiguous votes. This adds complexity to your system and more points of failure. Make sure the accuracy benefit justifies this additional engineering effort.

> Pro tip: Use self-consistency as a "dial" — run 3 samples for normal tasks, 5-7 for important ones, 10+ only for critical high-stakes decisions!`
        },
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
              <GSAPAnimated animation="flipCard" delay={0}>
                <h3>Definition</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p>First ask the model to generate background facts, then answer using those facts.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.1} delay={0.5}>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Knowledge-grounded reasoning and answer</li>
                  <li>Contextual understanding before answering</li>
                  <li>Better recall of relevant information</li>
                  <li>Improved accuracy on knowledge-intensive tasks</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="slideInBottom" delay={0.9}>
                <p style={{ marginTop: '20px' }}>Best for commonsense question answering, domain recall tasks, and exam-style questions. Generating relevant facts first improves answer quality.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#7d6b1c',
          notes: `### Generate Knowledge - Overview
Welcome to **Generate Knowledge Prompting**, a technique that primes the model's memory before asking it to answer questions. Think of it as warming up before a race!

#### The Knowledge Activation Strategy
Here's the core idea: before asking the model to answer a question, you first ask it to **generate relevant background facts and knowledge** about the topic. This two-stage approach activates the model's relevant knowledge, bringing important facts to the forefront of its "attention" before it needs to use them. It's like asking a student to review their notes before taking a test — the act of retrieving and stating relevant facts makes them more likely to use that knowledge correctly in their answer.

#### When Generate Knowledge Excels
Use this technique for **knowledge-intensive tasks** where the answer depends on recalling and applying domain facts. It's perfect for commonsense reasoning ("Why do plants need sunlight?"), exam-style questions, trivia, and any task where the model needs to combine multiple facts. For example, answering "Why did the Roman Empire fall?" benefits from first generating facts about economic factors, military challenges, and political instability, then synthesizing those facts into a coherent answer.

#### The Grounding Benefit
Generate Knowledge provides **explicit grounding** for the answer. Instead of the model pulling facts from its implicit knowledge in opaque ways, it explicitly states the facts it's using, then builds the answer from those stated facts. This makes the reasoning more transparent and debuggable — if the answer is wrong, you can see whether the facts themselves were wrong or whether the reasoning from facts to answer was flawed.

> Pro tip: Generate Knowledge is like giving the model a notepad to jot down relevant facts before solving a problem. It improves both accuracy and explainability!`
        },
        {
          id: 24,
          title: '6. Generate Knowledge - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="rotateIn" delay={0}>
                <h3>How It Works</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <p>Generate Knowledge prompting uses a two-stage approach. First, the model generates relevant background facts or knowledge about the topic. Then, in the second stage, the model uses these self-generated facts as context to answer the actual question. This helps activate relevant knowledge and provides grounding for the answer.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.5}>
                <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.6}>
                <p><strong>Level:</strong> Intermediate</p>
                <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Models with strong knowledge recall capabilities</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.8}>
                <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={1.0}>
                <p>Medical symptom triage with preliminary risk-factor listing before diagnosis suggestions.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#7d6b1c',
          notes: `### Generate Knowledge - How It Works
Let's understand the two-stage mechanism that makes Generate Knowledge prompting so effective for knowledge-intensive tasks.

#### The Two-Stage Process
Generate Knowledge works through **explicit knowledge retrieval followed by application**. Stage 1: You ask "What are relevant facts about X?" and the model generates a list of pertinent information from its training. Stage 2: You ask "Given these facts, answer Y" and the model uses the just-generated facts as context. This separation is powerful because it forces the model to commit to specific facts before reasoning, reducing the chance of contradictory or inconsistent reasoning. It's like requiring someone to show their sources before making an argument!

#### Why Separation Matters
The magic is in the **separation of retrieval and reasoning**. When you ask the model to answer directly, it interleaves knowledge recall and reasoning in opaque ways. With Generate Knowledge, you make knowledge recall explicit and observable. This has two benefits: first, you can verify the facts are correct before using them. Second, the model's attention is primed with relevant information, improving the quality of subsequent reasoning. Think of it as organizing your thoughts before writing — the act of organization improves the final output.

#### Model Requirements and Capabilities
This technique requires models with **strong factual knowledge** like GPT-4, Claude 3.5, and Gemini 1.5. These models have broad, deep knowledge bases from training and can retrieve relevant facts effectively. The technique is Intermediate complexity because you need to orchestrate the two stages — either in a single prompt with clear sections or across separate API calls.

#### Real-World Application: Medical Triage
Imagine a symptom checker app. Instead of directly diagnosing "headache, fever, stiff neck", you first prompt: "List risk factors and relevant medical facts about these symptoms." The model might generate: "Fever + stiff neck + headache can indicate meningitis. Meningitis risk factors include: recent illness, college dorms, immunocompromised status." Then you ask: "Given these facts, what should the patient do?" This produces more grounded, reliable medical advice!

> Pro tip: Verify generated facts against trusted sources for critical applications. Don't blindly trust model-generated knowledge!`
        },
{
          id: 25,
          title: '6. Generate Knowledge - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0}>
                <h3>Example Prompt</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <pre style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                  {`"Before answering, list 3 relevant facts about <topic>. Then, using those facts, answer: <question>"`}
                </pre>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.6}>
                <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.8}>
                <p>GPT-4/4o, Claude 3.5, Gemini 1.5 work well for knowledge generation. Best results with models that have strong factual knowledge bases.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#7d6b1c',
          notes: `### Generate Knowledge - Implementation
Let's examine how to structure Generate Knowledge prompts for maximum effectiveness in practice.

#### Prompt Structure Best Practices
The example shows the classic structure: **"Before answering, list facts about X. Then, using those facts, answer Y."** This explicit structure with "before" and "then" creates clear stages. You can enhance this with specificity: instead of "list facts", try "list 3-5 relevant facts including risks, benefits, and considerations" to guide what kind of knowledge to retrieve. The more specific you are about what facts you need, the better the model can retrieve relevant information.

#### Single vs. Multi-Call Approaches
You can implement this as **one prompt with two sections** (as shown) or as **two separate API calls**. Single-prompt is simpler and faster but gives you less control. Multi-call lets you inspect and filter the facts before proceeding to the answer stage, which is valuable for critical applications. For example, you might validate facts against a knowledge base, filter out hallucinations, or supplement with retrieved documents before the answering stage.

#### Fact Quantity and Quality
How many facts to generate? **3-5 is the sweet spot** for most tasks. Too few and you might miss important context. Too many and you dilute attention with irrelevant information. For complex topics, you might go higher (7-10 facts), but test whether more facts actually improve answers — sometimes less is more. Focus on fact *relevance* over quantity.

> Pro tip: For production systems, implement fact verification! Cross-check generated facts against trusted knowledge bases or use retrieval-augmented generation to ground facts in real documents!`
        },
{
          id: 26,
          title: '6. Generate Knowledge - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0}>
                <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} delay={0.3}>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Generated facts may be incorrect or hallucinated</li>
                  <li>Consider verification or retrieval for critical facts</li>
                  <li>Adds latency and token costs</li>
                  <li>May reinforce incorrect knowledge from training</li>
                </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#7d6b1c',
          notes: `### Generate Knowledge - Considerations
While Generate Knowledge is powerful, it has critical limitations around factual accuracy that you must understand.

#### The Hallucination Risk
The biggest danger with Generate Knowledge is **hallucinated facts**. The model might confidently generate plausible-sounding but completely incorrect facts. Since these become the foundation for the answer, hallucinated facts lead to confidently wrong conclusions. This is especially dangerous because the explicit facts look trustworthy — "The model listed its sources, so it must be right!" Wrong! For critical applications in medicine, law, finance, or any domain where errors have serious consequences, **never trust generated facts without verification**.

#### Verification Strategies
For production systems, implement **fact verification** through multiple strategies. Cross-check facts against trusted knowledge bases or APIs. Use retrieval-augmented generation (RAG) to ground facts in actual documents rather than model memory. Implement confidence scoring where the model indicates certainty for each fact. For high-stakes decisions, require human review of generated facts before proceeding to the answer stage. Think of generated knowledge as a hypothesis that needs validation, not as ground truth.

#### Cost and Latency Considerations
Generate Knowledge adds **overhead** — you're generating a list of facts before the actual answer, increasing both token costs and latency. The facts themselves might be 50-200 tokens, then the answer is built on top of that. At scale, this adds up. Evaluate whether the quality improvement justifies the cost. For routine tasks, simpler techniques might suffice. For knowledge-intensive tasks where accuracy matters, the cost is worthwhile.

#### The Training Data Problem
Finally, remember that generated knowledge comes from the model's **training data**, which has a cutoff date and may contain biases or errors. If the training data encoded incorrect information, Generate Knowledge will surface and reinforce those errors. For rapidly changing domains or topics where accuracy is critical, combine this technique with retrieval from up-to-date, verified sources rather than relying solely on model memory.

> Pro tip: Treat Generate Knowledge as a retrieval stage, then verify before using. Never skip verification for critical applications!`
        },
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
              <GSAPAnimated animation="scaleIn" delay={0}>
                <h3>Definition</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p>Break a task into subtasks across multiple prompts where outputs feed subsequent prompts.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.4}>
                <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.1} delay={0.5}>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Multi-stage pipeline outputs (extractions → synthesis)</li>
                  <li>Better decomposition of complex workflows</li>
                  <li>Improved accuracy per subtask</li>
                  <li>Easier debugging and optimization</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="bounceIn" delay={0.9}>
                <p style={{ marginTop: '20px' }}>Best for complex workflows, transformation pipelines, and data cleanup tasks. Breaking tasks into stages improves reliability and maintainability.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#7d1c3c',
          notes: `### Prompt Chaining - Overview
Welcome to **Prompt Chaining**, a fundamental technique for building complex AI workflows by breaking them into manageable, sequential stages.

#### The Decomposition Strategy
Prompt chaining is based on a simple but powerful idea: **complex tasks are easier when broken into simpler subtasks**. Instead of asking the model to do everything in one shot (extract data, transform it, analyze it, and format results), you create a chain where each step does one thing well. Step 1: Extract raw data. Step 2: Clean and normalize. Step 3: Analyze. Step 4: Format for output. Each stage is simpler, more reliable, and easier to optimize than trying to do everything at once.

#### When Prompt Chaining Shines
Use prompt chaining for **multi-stage workflows** like document processing pipelines, data transformation tasks, or content generation workflows. It's perfect when your task has natural stages that depend on each other. For example: reading a resume → extracting key info → matching to job requirements → generating interview questions. Each stage builds on the previous, but they're independent enough to test and optimize separately. This modularity is incredibly valuable for production systems.

#### The Production Advantage
Prompt chaining makes systems **maintainable and debuggable**. When something goes wrong, you can pinpoint which stage failed. You can improve individual stages without touching others. You can A/B test different prompts for specific stages. You can even mix techniques — use zero-shot for stage 1, few-shot for stage 2, CoT for stage 3. This flexibility and control make prompt chaining essential for real-world applications.

> Pro tip: Prompt chaining is like an assembly line — each station does one job well, and the product improves at each stage!`
        },
        {
          id: 28,
          title: '7. Prompt Chaining - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="rotateIn" delay={0}>
                <h3>How It Works</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <p>Prompt chaining decomposes complex tasks into a series of simpler subtasks. Each subtask is handled by a separate prompt, with the output from one stage becoming input for the next. This sequential approach allows each stage to focus on a specific transformation or analysis step, improving overall quality and making the pipeline easier to debug and optimize.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.5}>
                <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.6}>
                <p><strong>Level:</strong> Intermediate</p>
                <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Any LLM; long-context models help with larger intermediate outputs</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.8}>
                <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={1.0}>
                <p>Legal brief generation from case documents via extract→summarize→draft chain.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#7d1c3c',
          notes: `### Prompt Chaining - How It Works
Let's understand the mechanics of prompt chaining and how to design effective multi-stage pipelines.

#### The Sequential Pipeline Architecture
Prompt chaining works through **sequential transformation**. You start with input, apply Prompt 1 to get Output 1, then use Output 1 as input to Prompt 2 to get Output 2, and so on. Each prompt is specialized for its stage. For example: Prompt 1 might be "Extract all dates and amounts from this contract", Prompt 2 might be "Classify each transaction as revenue or expense", Prompt 3 might be "Calculate total revenue and flag unusual patterns". Each stage is focused and testable.

#### Designing Effective Chains
Good chain design requires **clear stage boundaries**. Each stage should have a single clear responsibility. Outputs should be clean and well-formatted because they become inputs to the next stage — messy outputs cause cascading problems. Use structured formats (JSON, markdown) for intermediate outputs to make parsing easier. For example, instead of free-form text between stages, use JSON with defined fields so the next stage knows exactly what to expect.

#### Context Management with Long-Context Models
One challenge is **context accumulation** — as you chain prompts, context grows (original input + Output 1 + Output 2...). Modern long-context models like GPT-4 (128k tokens), Claude 3.5 (200k tokens), and Gemini 1.5 (2M tokens) handle this well, letting you carry full context through multiple stages. Alternatively, you can use selective context where each stage only receives what it needs, reducing token costs.

#### Real-World Application: Legal Brief Generation
Imagine generating legal briefs from case documents. **Stage 1**: Extract relevant case law, statutes, and facts (extraction prompt). **Stage 2**: Summarize each case's relevance to current matter (summarization prompt). **Stage 3**: Draft argument structure with cited cases (planning prompt). **Stage 4**: Generate polished legal writing (drafting prompt). Each stage is simpler than trying to do everything at once, and you can optimize each independently!

> Pro tip: Add validation stages between main stages to catch errors before they propagate downstream!`
        },
        {
          id: 29,
          title: '7. Prompt Chaining - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0}>
                <h3>Example Prompt</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <pre style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                  {`"Step 1: Extract key quotes from document about <question>.
Step 2: Using quotes, answer <question> with citations."`}
                </pre>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.6}>
                <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.8}>
                <p>GPT-4/4o, Claude 3.5, Gemini 1.5, and any LLM that can maintain context. Long-context models (100k+ tokens) are particularly effective for handling large intermediate outputs.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#7d1c3c',
          notes: `### Prompt Chaining - Implementation
Let's examine practical implementation strategies for prompt chaining, from simple to sophisticated approaches.

#### Single-Prompt vs. Multi-Call Implementation
The example shows a **single-prompt approach** where stages are defined within one call ("Step 1... Step 2..."). This is simpler but less flexible. The **multi-call approach** uses separate API calls for each stage, giving you full control to inspect, validate, and transform intermediate outputs. Multi-call also lets you use different models for different stages — maybe GPT-4 for complex reasoning stages and a faster/cheaper model for simple transformation stages. Choose based on your needs for control, cost, and complexity.

#### Intermediate Output Formatting
Design your stages to produce **clean, parseable outputs**. Instead of "Extract quotes and explain them", split it: Stage 1 outputs JSON with {quote, page, context} for each quote. Stage 2 receives this structured data and generates analysis. Structured intermediate formats make your pipeline robust to variations in model output and make debugging much easier — you can log and inspect exactly what each stage produced.

#### Error Handling and Fallbacks
Prod uction chains need **error handling at each stage**. What if Stage 2 receives malformed output from Stage 1? Implement validation, retry logic, and fallbacks. For example, if extraction fails, try a simplified extraction prompt. If that fails, use default values or flag for human review. Never let errors propagate silently through your chain — catch and handle them explicitly at each stage.

> Pro tip: Build your chain incrementally! Start with 2 stages, validate thoroughly, then add more. Don't build a 5-stage chain all at once!`
        },
        {
          id: 30,
          title: '7. Prompt Chaining - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0}>
                <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} delay={0.3}>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Orchestration complexity increases with chain length</li>
                  <li>Error propagation without validation checks</li>
                  <li>Cumulative latency from multiple calls</li>
                  <li>Requires careful stage design and testing</li>
                </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#7d1c3c',
          notes: `### Prompt Chaining - Considerations
While prompt chaining is incredibly useful, it introduces complexity and challenges that you need to manage carefully.

#### The Orchestration Challenge
As chains grow longer, **orchestration complexity explodes**. A 2-stage chain is simple. A 5-stage chain with conditional branching, error handling, and validation at each stage becomes a substantial engineering effort. You need infrastructure to manage the pipeline, handle failures, track state, and coordinate multiple API calls. This isn't insurmountable, but it's real work. Start simple and add complexity only when needed. Don't over-engineer from the start.

#### Error Propagation Is Your Enemy
The biggest danger is **cascading errors**. Stage 1 produces slightly wrong output. Stage 2 builds on it and makes it worse. Stage 3 compounds the errors further. By the end, your result is completely wrong, but each stage seemed to work! This is why validation between stages is critical. Check that Stage 1's output meets expectations before feeding it to Stage 2. Implement schema validation, sanity checks, and confidence thresholds. Fail fast rather than propagating bad data.

#### Latency and Cost Accumulation
Each stage adds **latency and cost**. A 5-stage chain where each stage takes 2 seconds means 10 seconds total latency (unless you can parallelize some stages). Each stage incurs API costs. For high-volume applications, this adds up. You need to evaluate: is the quality improvement worth the extra time and cost? Sometimes a single well-crafted prompt performs almost as well as a chain, with much lower latency and cost.

#### Design and Testing Overhead
Prompt chaining requires **careful stage design**. You need to define clear responsibilities, design clean interfaces between stages, and test each stage independently plus the whole chain end-to-end. This is more work than writing a single prompt. But for complex tasks, this investment pays off in reliability, maintainability, and performance. Think of it as software engineering — more upfront work, but better long-term outcomes.

> Pro tip: Monitor each stage independently in production. Know where failures happen and which stages need optimization!`
        },
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
              <GSAPAnimated animation="flipCard" delay={0.1}>
                <h3>Definition</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <p>Explore multiple reasoning branches with lookahead and backtracking (BFS/DFS/Beam).</p>
              </GSAPAnimated>
              <GSAPAnimated animation="rotateIn" delay={0.5}>
                <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} delay={0.6}>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Selected best reasoning path and final solution</li>
                  <li>Systematic exploration of solution space</li>
                  <li>Better handling of complex planning problems</li>
                  <li>Ability to backtrack from dead ends</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="slideInBottom" delay={0.9}>
                <p style={{ marginTop: '20px' }}>Best for search-heavy reasoning, puzzles and planning tasks, and complex decompositions. Explores multiple paths before committing to a solution.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1c257d',
          notes: `### Tree of Thoughts - Overview
Welcome to Tree of Thoughts, or ToT 👉 pronounced "tot" like the word for a small child. Think of it as the AI's way of being thorough before making a decision.

#### What Makes ToT Different
Unlike techniques that follow a single line of reasoning, Tree of Thoughts creates an actual *tree structure* of possible reasoning paths. Imagine you're planning a road trip and instead of just picking one route, you sketch out three different options, evaluate each one's pros and cons, and then systematically explore the most promising path while keeping the others as backup options. That's exactly what ToT does with problem-solving.

#### The Power of Exploration
The magic here is in the **exploration strategy**. ToT uses classic search algorithms like breadth-first search (BFS), depth-first search (DFS), or beam search to navigate this tree of possibilities. At each decision point, the model generates multiple candidate next steps, evaluates each one (labeling them as "sure", "maybe", or "impossible"), and then intelligently decides which branches to explore further. If a path turns out to be a dead end, no problem—it simply backtracks and tries a different branch.

#### When to Use This Powerhouse
This technique shines in **complex planning scenarios**, like designing a multi-phase product strategy, solving intricate puzzles, or decomposing a complicated technical problem into optimal sub-tasks. It's overkill for simple questions, but when you need systematic exploration of a solution space with the ability to course-correct, ToT is your go-to technique.

> Pro tip: ToT is computationally expensive because it explores multiple paths. Use it when the quality of the solution justifies the extra cost and latency.`
        },
        {
          id: 32,
          title: '8. Tree of Thoughts - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <h3>How It Works</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.4}>
                <p>Tree of Thoughts maintains a tree of reasoning paths, generating multiple candidate next steps at each node. The model evaluates each candidate (e.g., sure/maybe/impossible) and uses search algorithms (BFS, DFS, or beam search) to explore promising branches. This allows systematic exploration with the ability to backtrack from unproductive paths.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.5}>
                <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p><strong>Level:</strong> Advanced</p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.7}>
                <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Requires external controller logic for search management</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.75}>
                <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.9}>
                <p>Strategic product roadmap trade-off exploration — systematically evaluating different feature prioritization paths and their downstream impacts on market adoption, engineering resources, and business outcomes.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1c257d',
          notes: `### Tree of Thoughts - How It Works
Now let's peek under the hood and see how Tree of Thoughts actually operates. This is where the technique gets really interesting.

#### The Mechanics of Tree Building
Picture a chess grandmaster considering their next move. They don't just think one move ahead—they explore multiple possible moves, then for each move they imagine several opponent responses, and so on, creating a branching tree of possibilities. Tree of Thoughts works similarly. At each node in the reasoning tree, the model generates *multiple candidate next steps* rather than just one. For example, if solving a complex planning problem, it might generate three different approaches: Option A, Option B, and Option C.

#### The Evaluation Phase
Here's where it gets clever. The model doesn't just generate options blindly—it **evaluates each candidate** before proceeding. Think of it as a quality checkpoint. The evaluation can be as simple as labeling each option as "sure" (very promising), "maybe" (worth exploring), or "impossible" (dead end). This evaluation step is crucial because it guides the search algorithm on where to focus its attention.

#### Search Algorithms in Action
ToT leverages classic computer science search algorithms. **Breadth-first search** explores all options at each level before going deeper. **Depth-first search** follows one path all the way down before trying alternatives. **Beam search** keeps only the top K most promising paths at each level. The beauty is that if a path hits a dead end, the algorithm simply backtracks to a previous node and explores a different branch—something traditional chain-of-thought can't do.

#### Orchestration Complexity
This is an *advanced* technique that requires sophisticated infrastructure. You need an external controller—essentially a program that manages the search process, calls the LLM multiple times to generate and evaluate candidates, maintains the tree structure, and decides when to explore versus when to backtrack. Models like GPT-4, Claude 3.5, and Gemini 1.5 have the reasoning capability, but you're building the orchestration layer yourself.

#### Real-World Application
The example shown—strategic product roadmap planning—is perfect for ToT. Imagine you're deciding whether to build Feature X first or Feature Y. With ToT, you can systematically explore both paths: "If we build X first, that leads to outcomes A, B, C... If we build Y first, that leads to D, E, F..." You're essentially simulating different futures and evaluating their downstream impacts before committing resources.

> Pro tip: The quality of your evaluation function is critical. If your evaluation incorrectly labels promising paths as "impossible," the search will miss good solutions. Invest time in crafting good evaluation prompts.`
        },
        {
          id: 33,
          title: '8. Tree of Thoughts - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <h3>Example Prompt</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.4}>
                <pre style={{ backgroundColor: 'rgba(230, 126, 34, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                  {`"Propose 3 candidate next steps. Label each as sure/maybe/impossible for reaching the goal. Expand promising branches until a solution."`}
                </pre>
              </GSAPAnimated>
              <GSAPAnimated animation="rotateIn" delay={0.6}>
                <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.8}>
                <p>GPT-4/4o, Claude 3.5, Gemini 1.5 - Requires sophisticated orchestration layer to manage the search process, evaluate candidates, and control exploration depth.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1c257d',
          notes: `### Tree of Thoughts - Implementation
Let's talk about actually implementing Tree of Thoughts in your applications. This is where theory meets practice.

#### Crafting the Core Prompt
The example prompt shown is beautifully simple yet powerful: *"Propose 3 candidate next steps. Label each as sure/maybe/impossible for reaching the goal. Expand promising branches until a solution."* Notice the three key elements here. First, you're asking for **multiple candidates** (not just one next step). Second, you're requesting an **evaluation** (sure/maybe/impossible labels). Third, you're instructing the model to **continue exploration** of promising branches. This single prompt encapsulates the entire ToT philosophy.

#### Prompt Engineering Tips
In practice, you'll often want to be more specific. For example: "Given the current state of our software architecture, propose 3 different refactoring approaches. For each approach, evaluate: (1) implementation complexity (low/medium/high), (2) risk of introducing bugs (low/medium/high), (3) expected performance improvement (low/medium/high). Then explore the most promising approach in detail." The more structure you provide in your evaluation criteria, the better the model can guide the search.

#### The Orchestration Challenge
Here's the reality check: ToT requires **significant engineering effort**. You're not just sending one prompt and getting one response. You're building a system that: (1) sends an initial prompt to generate candidates, (2) parses the response to extract the candidates and their evaluations, (3) implements a search algorithm to decide which candidate to explore next, (4) sends follow-up prompts to expand chosen branches, (5) maintains the tree structure in memory, (6) decides when to backtrack versus when to continue, and (7) determines when a solution is found.

#### Model Selection
You need the most capable models for ToT—specifically GPT-4/4o, Claude 3.5 Sonnet, or Gemini 1.5 Pro. Why? Because you're asking the model to both generate creative next steps *and* evaluate their quality. This requires strong reasoning abilities. Smaller or less capable models will struggle with the evaluation phase, leading to poor search decisions.

#### Cost and Latency Considerations
Be prepared for **multiple LLM calls per problem**. If your tree has 3 branches per node and you explore 3 levels deep, that's potentially 3 + 9 + 27 = 39 nodes to evaluate. At $0.03 per 1K tokens for GPT-4, even modest trees can add up. Use beam search to limit the number of active branches and set maximum depth limits to control costs.

#### When to Actually Use ToT
Don't reach for Tree of Thoughts for simple problems where chain-of-thought would suffice. Use it when: (1) the solution space is large and complex, (2) there are multiple viable approaches to explore, (3) early decisions significantly impact downstream outcomes, (4) backtracking capability is valuable, and (5) solution quality justifies the extra cost and engineering complexity.

> Pro tip: Start with a breadth limit (beam width) of 2-3 branches and a depth limit of 3-4 levels. This prevents exponential explosion while still getting the benefits of exploration. You can always expand the search space if initial results are promising.`
        },
        {
          id: 34,
          title: '8. Tree of Thoughts - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="flipCard" delay={0.15}>
                <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} delay={0.4}>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Significantly higher cost and latency</li>
                  <li>Requires search control and pruning strategies</li>
                  <li>Complex orchestration infrastructure needed</li>
                  <li>Evaluation quality critical for good search decisions</li>
                </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1c257d',
          notes: `### Tree of Thoughts - Considerations
Before you rush to implement Tree of Thoughts everywhere, let's have an honest conversation about its limitations and considerations. This technique is powerful but comes with significant tradeoffs.

#### The Cost Factor
Let's be blunt: ToT is **expensive**. While a single chain-of-thought prompt might cost you one API call, Tree of Thoughts can easily require 10, 20, or even 50+ calls for complex problems. At each node, you're generating multiple candidates (that's multiple calls) and then evaluating them (more calls). If you're exploring a tree with a branching factor of 3 and depth of 4, you could be looking at dozens of API requests for a single problem. With GPT-4 pricing, this adds up fast. Budget accordingly and reserve ToT for high-value problems where the improved solution quality justifies the expense.

#### Latency Concerns
Cost isn't the only multiplier—so is **latency**. Instead of waiting 2-3 seconds for a response, you might be waiting 30-60 seconds or more as the system explores multiple branches sequentially. Some of this can be parallelized (evaluating multiple candidates at the same level can happen simultaneously), but the depth-wise exploration is inherently sequential. For user-facing applications, this latency may be unacceptable unless you're clever about progress indicators and async processing.

#### The Pruning Challenge
Here's a critical engineering decision: *how do you decide which branches to explore and which to prune?* If you explore everything, you'll hit exponential explosion—a tree with branching factor 3 and depth 5 has 243 leaf nodes. That's not feasible. So you need **pruning strategies**: beam search (keep only top-K paths), confidence thresholds (abandon branches below certain evaluation scores), depth limits, or even dynamic pruning based on remaining compute budget. Getting these strategies right requires experimentation and domain knowledge.

#### Orchestration Infrastructure
Unlike simpler techniques that are just clever prompts, ToT requires you to build actual **infrastructure**. You need: state management (storing the tree), search algorithm implementation (BFS/DFS/beam search), prompt generation logic (turning tree nodes into queries), response parsing (extracting candidates and evaluations), decision logic (explore vs. backtrack), and termination conditions (when to stop searching). This is a non-trivial engineering project. Don't underestimate the complexity.

#### The Evaluation Quality Problem
This is perhaps the most subtle but important consideration: ToT's success depends entirely on the *quality of its evaluations*. If your evaluation prompt consistently mislabels good paths as "impossible" or rates poor paths as "sure," the search algorithm will make bad decisions and explore suboptimal branches. You need to invest significant effort in **evaluation prompt engineering** and potentially run experiments to validate that your evaluation criteria actually correlate with solution quality. Bad evaluations can make ToT perform worse than simpler approaches.

#### When ToT Isn't Worth It
Be honest about when simpler techniques would suffice. For straightforward question-answering, use zero-shot or few-shot prompting. For step-by-step reasoning, chain-of-thought is plenty. For problems that benefit from verification, self-consistency is simpler. Reserve Tree of Thoughts for genuinely complex problems with large solution spaces, multiple valid approaches, and scenarios where exploring alternatives before committing adds significant value.

#### Making It Work in Production
If you do implement ToT in production, here are success patterns: (1) start with small trees (branching factor 2-3, depth 3-4), (2) use aggressive pruning to control costs, (3) implement caching so similar subtrees don't get re-explored, (4) provide progress indicators since users will wait longer, (5) A/B test against simpler baselines to ensure the complexity is justified, and (6) monitor costs vigilantly—it's easy for them to spiral.

> Pro tip: Consider a hybrid approach: use ToT for the initial exploration phase to identify the most promising approach, then switch to cheaper techniques like chain-of-thought for execution. This gives you ToT's exploration benefits at a fraction of the cost.`
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
              <GSAPAnimated animation="scaleIn" delay={0}>
                <h3>Definition</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.2}>
                <p>Retrieve external documents and condition the model on them to ground responses.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.4}>
                <h3 style={{ color: '#2ecc71', marginTop: '30px' }}>Goal & Benefits</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} delay={0.6}>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Grounded, cited answers from knowledge base</li>
                  <li>Fresh information beyond training cutoff</li>
                  <li>Reduced hallucinations with source grounding</li>
                  <li>Verifiable responses with citations</li>
                </ul>
              </GSAPStaggerList>
              <GSAPAnimated animation="bounceIn" delay={1.0}>
                <p style={{ marginTop: '20px' }}>Best for tasks requiring fresh or long-tail knowledge, compliance requirements, and when citations are needed. Grounds responses in retrieved documents.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a673a',
          notes: `### 9. RAG - Overview (Pronunciation: "rag" 👉 like a cleaning rag)

#### What is RAG?
**RAG** stands for **Retrieval-Augmented Generation** — think of it as giving your AI a *library card* and a *search engine* before asking it to write an essay. Instead of relying solely on what the model memorized during training, RAG retrieves relevant documents from an external knowledge base and uses them as context for generating responses.

#### The Two-Stage Process
RAG works in two distinct stages: First, **retrieval** — when you ask a question, the system searches a knowledge base (like internal documents, PDFs, or databases) and finds the most relevant passages. Second, **generation** — the LLM receives these retrieved passages as context and generates a response grounded in that specific information.

#### Why This Matters
Here's the magic: RAG solves three critical problems with vanilla LLMs. First, **hallucinations** — by grounding responses in retrieved documents, you dramatically reduce made-up facts. Second, **freshness** — the model can access information published *after* its training cutoff. Third, **verifiability** — you can cite sources and trace answers back to original documents.

#### Real-World Examples
Imagine an **enterprise policy assistant** where employees ask "What's our remote work policy?" The system retrieves the relevant HR document sections and generates an answer with citations like "[Source: Employee Handbook Section 4.2]." Or a **customer support chatbot** that searches your product documentation to answer technical questions with exact references.

#### When to Use RAG
RAG shines when you need **fresh knowledge** (news, updates), **long-tail information** (niche topics), **compliance requirements** (legal, medical), or **citations** for trust and auditability. If your use case needs grounded, verifiable answers from specific sources, RAG is your go-to pattern.`
        },
        {
          id: 36,
          title: '9. RAG - How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="rotateIn" delay={0}>
                <h3>How It Works</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.2}>
                <p>RAG uses a two-stage process: retrieval then generation. First, relevant documents are retrieved from a knowledge base (typically using vector similarity search). Then, these retrieved documents are provided as context to the LLM, which generates an answer grounded in the retrieved information. This approach combines the LLM's language understanding with external knowledge.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.5}>
                <h3 style={{ marginTop: '30px' }}>Complexity</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.7}>
                <p><strong>Level:</strong> Intermediate</p>
                <p><strong>Best Models:</strong> GPT-4/4o, Claude 3.5, Gemini 1.5 - Requires retriever/vector database infrastructure</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.9}>
                <h3 style={{ marginTop: '30px' }}>Real-World Example</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={1.0}>
                <p>Enterprise policy assistant with vector search over internal PDFs, enabling employees to query company guidelines with precise citations to source documents.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a673a',
          notes: `### 9. RAG - How It Works (The Technical Deep-Dive)

#### The Two-Stage Architecture
Let's break down how RAG actually works under the hood. Stage one is **retrieval** — when a user asks a question, you first convert that question into a vector embedding (a mathematical representation of meaning). Then, you search a vector database to find the most semantically similar document chunks. Think of it like Google search, but instead of keyword matching, you're matching *meaning* and *concepts*.

#### Vector Databases & Embeddings
Here's where it gets interesting: **Vector databases** like Pinecone, Weaviate, or Chroma store your documents as high-dimensional vectors (typically 768 to 1536 dimensions). An **embedding model** (like OpenAI's text-embedding-ada-002 or open-source alternatives) converts both your documents and queries into these vectors. The database then performs **semantic search** — finding documents that are conceptually similar even if they use different words.

#### Generation with Context
Stage two is **generation** — once you've retrieved the top 3-10 most relevant passages, you inject them into the LLM prompt along with the original question. The LLM now has *grounded context* to work with. It's like the difference between asking someone to recall from memory versus giving them reference materials to consult. The model generates an answer based on the retrieved documents, often including citations.

#### Why This Reduces Hallucinations
RAG dramatically reduces hallucinations because the model isn't just generating from parametric memory — it's reading from actual source documents *right now*. If the retrieved documents contain the answer, the model can quote them directly. If they don't, a well-prompted model will say "I don't have enough information" rather than making something up.

#### Infrastructure Requirements
To implement RAG, you need three components: **1)** An embedding model to vectorize documents and queries, **2)** A vector database to store and search embeddings, and **3)** An LLM with a long context window to consume retrieved passages. The complexity is intermediate because you're orchestrating multiple systems, but frameworks like LangChain and LlamaIndex make this easier.

#### Real-World Example Unpacked
That enterprise policy assistant we mentioned? Here's how it works: An employee asks "What's our parental leave policy?" The system embeds this question, searches a vector database of HR documents, retrieves the relevant policy sections, and prompts the LLM with: "Given these retrieved passages, answer the question and cite sources." The LLM responds: "Our parental leave policy offers 16 weeks paid leave [Source: Employee Handbook Section 7.3]." The employee gets a verified, cited answer in seconds.`
        },
        {
          id: 37,
          title: '9. RAG - Implementation',
          icon: { name: 'duo-code' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="flipCard" delay={0}>
                <h3>Example Prompt</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <pre style={{ backgroundColor: 'rgba(46, 204, 113, 0.1)', padding: '12px', borderRadius: '8px', fontSize: '1.2rem', whiteSpace: 'pre-wrap' }}>
                  {`"Given these retrieved passages, answer the user question. Cite sources by ID.
Passages:
[1] The first COVID-19 vaccine was approved for emergency use in December 2020.
[2] mRNA vaccines use genetic material to teach cells to make a protein that triggers an immune response.
[3] Traditional vaccines use weakened or inactivated viruses.
Question: How do mRNA COVID vaccines work?"`}
                </pre>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.6}>
                <h3 style={{ marginTop: '30px' }}>Supported Models</h3>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.8}>
                <p>GPT-4/4o, Claude 3.5, Gemini 1.5 - Requires vector database (Pinecone, Weaviate, Chroma) and embedding model for retrieval.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a673a',
          notes: `### 9. RAG - Implementation (Let's Build It)

#### Anatomy of a RAG Prompt
Look at this example prompt structure — it's surprisingly simple but incredibly powerful. You start with clear instructions: "Given these retrieved passages, answer the question and cite sources." Then you provide the **retrieved passages** with IDs (like [1], [2], [3]) so the model can reference them. Finally, you include the **user's question**. This structure gives the model everything it needs: context, citations, and a clear task.

#### Why This Example Works
In this COVID vaccine example, we've retrieved three passages: passage [1] gives timeline context, passage [2] explains mRNA mechanism, and passage [3] provides contrast with traditional vaccines. When the model generates an answer, it can say: "mRNA COVID vaccines work by using genetic material to teach cells to make a protein that triggers an immune response [Source: 2]." The answer is grounded, cited, and verifiable.

#### The Retrieval Pipeline
Behind this prompt, there's a whole pipeline: **Step 1** — The user asks "How do mRNA COVID vaccines work?" **Step 2** — You embed this question using an embedding model. **Step 3** — You search your vector database for similar content. **Step 4** — The database returns these three most relevant passages. **Step 5** — You construct this prompt with passages and question. **Step 6** — The LLM generates a grounded answer with citations.

#### Infrastructure Requirements
To run RAG in production, you need several components: **1) Vector Database** — Pinecone, Weaviate, Chroma, or FAISS for storing and searching embeddings. **2) Embedding Model** — OpenAI's text-embedding-ada-002, Cohere's embed-v3, or open-source models like sentence-transformers. **3) LLM** — GPT-4, Claude 3.5, or Gemini 1.5 with long context windows (typically 8k-200k tokens). **4) Orchestration** — LangChain, LlamaIndex, or custom code to coordinate retrieval and generation.

#### Best Practices for Prompts
Here are some pro tips: **1) Always include citation instructions** — tell the model *how* to cite (by ID, by title, etc.). **2) Number your passages** — makes citations easier and more reliable. **3) Keep passages concise** — chunk documents into 200-500 word segments for optimal retrieval. **4) Add instructions for "no answer" scenarios** — tell the model to say "I don't have enough information" if the passages don't contain the answer. **5) Use structured output** — ask for JSON or markdown to make parsing citations easier.

#### Scaling Considerations
When you move from prototype to production, consider: **Indexing strategy** — how often do you update your vector database? **Chunk size** — larger chunks give more context but reduce precision, smaller chunks are more precise but lose context. **Retrieval count** — typically 3-10 passages work best, balancing context richness with token costs. **Hybrid search** — combine semantic (vector) search with keyword (BM25) search for better results.`
        },
        {
          id: 38,
          title: '9. RAG - Considerations',
          icon: { name: 'duo-clipboard-check' },
          content: (
            <div style={{ fontSize: '2rem', padding: '30px', lineHeight: '2', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" delay={0}>
                <h3 style={{ color: '#e74c3c' }}>Limitations & Considerations</h3>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.15} delay={0.3}>
                <ul style={{ fontSize: '1.2rem' }}>
                  <li>Garbage-in garbage-out - retrieval quality critical</li>
                  <li>Retrieval quality issues impact answer accuracy</li>
                  <li>Citation drift - model may not cite accurately</li>
                  <li>Chunking challenges affect information retrieval</li>
                </ul>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1a673a',
          notes: `### 9. RAG - Considerations (The Gotchas)

#### Garbage In, Garbage Out
Here's the brutal truth about RAG: **retrieval quality is everything**. If your retrieval system returns irrelevant or poor-quality documents, the LLM will generate irrelevant or incorrect answers. It's like asking someone to write a book report but handing them the wrong book — even a genius can't give you the right answer with the wrong source material. This is the single biggest failure mode in RAG systems.

#### The Retrieval Quality Problem
Retrieval can fail in several ways: **1) Semantic mismatch** — the user asks "How do I reset my password?" but your docs use the phrase "credential recovery," so the search misses it. **2) Recency bias** — vector search might prioritize frequently-accessed documents over actually relevant ones. **3) Chunking boundaries** — important context gets split across chunks, so neither chunk ranks highly. **4) Query ambiguity** — user asks "What's the policy on remote work?" but doesn't specify location, and different regions have different policies.

#### Citation Drift
Here's a sneaky problem: **citation drift** — sometimes the model generates an answer that's *loosely* based on retrieved passages but doesn't cite them accurately. Or worse, it cites passages that don't actually support the claim. This happens because LLMs are generative models, not database queries — they can drift from the source material. To mitigate this, explicitly instruct the model: "Only cite passages that directly support your answer. If you're making an inference, say so."

#### Chunking Is Hard
**Chunking strategy** — how you split documents into searchable chunks — dramatically impacts RAG quality. Too small (50 words), and you lose context. Too large (1000 words), and retrieval becomes imprecise. The sweet spot is usually 200-500 words, but it depends on your domain. Also consider **overlap** — overlapping chunks by 20-50 words helps preserve context across boundaries. And **metadata** — adding titles, dates, and categories to chunks improves retrieval.

#### Context Window Limitations
Even with long context windows (100k-200k tokens), you can't just dump *everything* into the prompt. **1) Cost** — more tokens = higher cost. **2) Latency** — larger contexts take longer to process. **3) Lost-in-the-middle** — research shows LLMs struggle to use information in the middle of very long contexts. They're better at using information at the beginning and end. So even with RAG, you need to be strategic about what you retrieve and how you present it.

#### When RAG Isn't Enough
Sometimes RAG isn't the right solution: **1) Real-time data** — if you need *right now* information (stock prices, weather), RAG with a batch-updated database won't work. Use API calls instead. **2) Complex reasoning** — if the answer requires synthesizing information across many documents with multi-hop reasoning, RAG alone might not be enough. Consider combining with Chain-of-Thought or multi-agent systems. **3) Adversarial queries** — if users try to "jailbreak" by asking for information you don't want to provide, RAG won't help if that information is in your database.

#### Practical Tips to Overcome These Issues
Here's how to improve RAG systems: **1) Hybrid search** — combine vector search with keyword search (BM25) for better retrieval. **2) Re-ranking** — retrieve 20 candidates, then use a cross-encoder to re-rank the top 5 for the LLM. **3) Query expansion** — rewrite the user query in multiple ways to improve recall. **4) Verification loops** — ask the model to quote passages verbatim to verify citations. **5) Metadata filtering** — let users filter by date, category, or source before semantic search. **6) Human-in-the-loop** — for high-stakes applications, have humans verify retrieved passages before generation.`
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

