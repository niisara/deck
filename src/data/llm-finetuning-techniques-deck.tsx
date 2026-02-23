import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const llmFinetuningTechniquesDeck: Deck = {
  id: 'llm-finetuning-techniques',
  name: '6 LLM Fine-Tuning Techniques',
  description: 'Full FT vs LoRA vs QLoRA vs Adapters vs Prefix Tuning vs Prompt Tuning — when, why, and how',
  category: 'Fine Tuning',
  theme: 'moon',
  cardStyle: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  slides: [],
  slideGroups: [
    // ─── GROUP 1 — Introduction ───────────────────────────────────────────
    {
      id: 'introduction',
      title: 'Introduction',
      slides: [
        // Slide 1 — Title
        {
          id: 1,
          center: true,
          title: '6 LLM Fine-Tuning Techniques',
          content: (
            <div style={{ color: '#fff' }}>
              <GSAPAnimated animation="rotateIn" duration={1.2}>
                <div style={{ fontSize: '1.5rem', color: '#ce93d8' }}>
                  <SvgIcon iconName="duo-microchip" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  Full FT · LoRA · QLoRA · Adapters · Prefix Tuning · Prompt Tuning
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" duration={0.8} delay={0.3}>
                <div style={{ fontSize: '1.2rem', color: '#b0bec5', lineHeight: '2' }}>
                  <div>
                    <SvgIcon iconName="duo-users-group" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Audience:</strong> ML engineers, NLP practitioners, AI researchers
                  </div>
                  <div>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>What you'll get:</strong> 6 techniques, trade-offs, configs &amp; quick-start hints
                  </div>
                  <div>
                    <SvgIcon iconName="duo-circle-info" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Note:</strong> Practical focus — no math-heavy derivations
                  </div>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" duration={0.8} delay={0.6}>
                <div>
                  <p><strong>Prepared by:</strong> Nisar A / <a href="https://niisar.com" target="_blank">niisar.com</a></p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          backgroundImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1920&q=80',
          notes: `### 6 LLM Fine-Tuning Techniques
[cheerfully] Welcome everyone! Today we're tackling one of the hottest topics in modern AI: **how to fine-tune large language models**. If you've ever wanted to adapt a foundation model like LLaMA 👉 'lah-mah' or Mistral to your own data, you've probably been overwhelmed by the options. Full fine-tuning? LoRA 👉 'loh-rah'? QLoRA 👉 'cue-loh-rah'? Adapters? Prefix tuning? Prompt tuning? Each sounds cool, but which one is right for **your** situation?

#### Who Is This For?
This deck is designed for **ML engineers** building production systems, **NLP practitioners** adapting models to domain-specific tasks, and **AI researchers** exploring efficient training strategies. Whether you have a cluster of A100s or a single consumer GPU, there's a technique here for you.

#### What You'll Learn
[confidently] By the end of this presentation, you'll understand six distinct fine-tuning approaches, know exactly when to pick each one, and have practical configs and tool recommendations to get started immediately. We're keeping things practical — no dense math, just clear intuitions and actionable guidance.

Let's start with an overview of the entire landscape!`
        },
        // Slide 2 — Overview
        {
          id: 2,
          title: 'Overview: 6 Techniques at a Glance',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'left', color: '#fff' }}>
              <h4>
                Technique Categories
                <MermaidPopover
                  title="Fine-Tuning Technique Landscape"
                  diagram={`graph TB
    A["6 LLM Fine-Tuning<br/>Techniques"] --> B["Weight Update<br/>Methods"]
    A --> C["Parameter-Efficient<br/>Methods (PEFT)"]
    A --> D["Input-Based<br/>Methods"]

    B --> B1["1 · Full Fine-Tuning"]

    C --> C1["2 · LoRA"]
    C --> C2["3 · QLoRA"]
    C --> C3["4 · Adapters"]

    D --> D1["5 · Prefix Tuning"]
    D --> D2["6 · Prompt Tuning"]

    style A fill:#ffd700,color:#000
    style B fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#e1bee7,color:#000`}
                />
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '14px' }}>
                <GSAPStaggerList stagger={0.1} duration={0.6}>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#4fc3f7', marginRight: '0.5rem' }}>1</span>
                    <strong>Full Fine-Tuning</strong> — Update every weight in the model
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#4fc3f7', marginRight: '0.5rem' }}>2</span>
                    <strong>LoRA</strong> — Low-rank weight deltas injected into attention
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#4fc3f7', marginRight: '0.5rem' }}>3</span>
                    <strong>QLoRA</strong> — LoRA on 4-bit quantised base weights
                  </div>
                </GSAPStaggerList>
                <GSAPStaggerList stagger={0.1} duration={0.6}>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#4fc3f7', marginRight: '0.5rem' }}>4</span>
                    <strong>Adapters</strong> — Small bottleneck layers added between blocks
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#4fc3f7', marginRight: '0.5rem' }}>5</span>
                    <strong>Prefix Tuning</strong> — Learnable virtual tokens prepended to keys/values
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#4fc3f7', marginRight: '0.5rem' }}>6</span>
                    <strong>Prompt Tuning</strong> — Learnable soft-prompt embeddings at input
                  </div>
                </GSAPStaggerList>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Overview: 6 Techniques at a Glance
[lecture] Let's map out the entire fine-tuning landscape before we dive deep. These six techniques fall into three natural families based on **what** they modify.

#### Weight Update Methods
The first family is **full weight update**. Technique 1, Full Fine-Tuning, updates every parameter in the model. [storytelling] Think of it as remodelling an entire house — everything can change. It's powerful but expensive.

#### Parameter-Efficient Methods
The second family — and the most popular today — is **PEFT** 👉 'peft'. LoRA 👉 'loh-rah' injects tiny low-rank matrices, QLoRA 👉 'cue-loh-rah' squeezes that even further with 4-bit quantisation, and Adapters drop small bottleneck layers between existing transformer blocks. [conversational] These are the techniques that let you train a 70-billion-parameter model on a single GPU.

#### Input-Based Methods
The third family modifies **neither** the model's weights nor its architecture. Prefix Tuning adds learnable vectors inside every attention layer, while Prompt Tuning adds them only at the input. [confidently] These are the lightest-weight options and are great when you need to support many tasks simultaneously.

We'll now explore each technique in depth — starting with the classic: Full Fine-Tuning.`
        },
        // Slide 3 — Why It Matters
        {
          id: 3,
          title: 'Why Fine-Tuning Matters',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'left', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" duration={0.7} delay={0.1}>
                <h4 style={{ color: '#ffd700' }}>
                  The Problem
                  <MermaidPopover
                    title="Fine-Tuning in the AI Stack"
                    diagram={`graph LR
    A["Pre-trained<br/>Foundation Model"] -->|"Fine-Tune"| B["Domain-Adapted<br/>Model"]
    B -->|"Serve"| C["Inference<br/>API"]
    C -->|"Feedback"| D["Evaluation<br/>& Iteration"]
    D -->|"More Data"| A

    style A fill:#4fc3f7,color:#000
    style B fill:#81c784,color:#000
    style C fill:#ffd700,color:#000
    style D fill:#e1bee7,color:#000`}
                  />
                </h4>
                <p>Pre-trained LLMs 👉 'el-el-ems' are jack-of-all-trades but master of none. Fine-tuning sharpens them for <strong>your</strong> domain, tone, and task — turning a generalist into a specialist.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.3}>
                <h4 style={{ color: '#81c784' }}>Pain Points Without Fine-Tuning</h4>
                <GSAPStaggerList stagger={0.08} duration={0.5}>
                  <div>❌ Generic outputs that miss domain jargon</div>
                  <div>❌ High inference cost from over-long prompts</div>
                  <div>❌ Inconsistent tone and formatting</div>
                  <div>❌ Poor performance on niche classification or extraction tasks</div>
                </GSAPStaggerList>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" duration={0.7} delay={0.5}>
                <h4 style={{ color: '#ce93d8' }}>Where Fine-Tuning Fits</h4>
                <p>After pre-training, before deployment. It bridges the gap between <em>general knowledge</em> and <em>task-specific mastery</em>, and PEFT 👉 'peft' methods make it feasible even on modest hardware.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Why Fine-Tuning Matters
[seriously] Before we jump into techniques, let's answer a fundamental question: **why bother fine-tuning at all?** Can't we just prompt-engineer our way to great results?

#### The Generalist Problem
[storytelling] Imagine hiring a brilliant university graduate who knows a lot about everything but has never seen your company's products, internal processes, or specialised vocabulary. That's a pre-trained LLM 👉 'el-el-em'. It's incredibly capable, but out of the box it doesn't speak your language. Fine-tuning is onboarding: you give it examples of the exact task you need, in the exact style you want.

#### Real Pain Points
Without fine-tuning you're stuck crafting massive system prompts to get decent outputs, and even then the model may hallucinate domain terms, mix up formatting, or simply underperform on niche tasks like medical coding or legal clause extraction. Longer prompts also mean **higher inference cost** and **higher latency**.

#### Where It Sits in the Stack
[lecture] Fine-tuning sits right after pre-training and before deployment. You take a foundation model — LLaMA 👉 'lah-mah', Mistral, GPT base — add your data, and produce a domain-adapted checkpoint. PEFT 👉 'peft' techniques make this feasible on a single A100 or even a consumer RTX 4090.

[energetic] Now let's see how each technique achieves this, starting with the most straightforward approach: Full Fine-Tuning!`
        },
      ],
    },

    // ─── GROUP 2 — Technique 1: Full Fine-Tuning ─────────────────────────
    {
      id: 'technique-1-full-fine-tuning',
      title: '1. Full Fine-Tuning',
      slides: [
        // Slide A — Overview
        {
          id: 4,
          title: '1. Full Fine-Tuning — Overview',
          icon: { name: 'duo-dumbbell' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '2', textAlign: 'left', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" duration={0.7} delay={0.1}>
                <h4 style={{ color: '#4fc3f7' }}>
                  Definition
                  <MermaidPopover
                    title="Full Fine-Tuning — Core Idea"
                    diagram={`graph LR
    A["Pre-trained<br/>Weights W"] -->|"Gradient<br/>Update"| B["Updated<br/>Weights W'"]
    B --> C["Domain-Specific<br/>Model"]

    style A fill:#4fc3f7,color:#000
    style B fill:#ffd700,color:#000
    style C fill:#81c784,color:#000`}
                  />
                </h4>
                <p>Update <strong>every parameter</strong> of the model on your task-specific dataset. The classic approach — maximum expressiveness, maximum cost.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.3}>
                <h4 style={{ color: '#81c784' }}>When to Use</h4>
                <p>You have abundant labelled data (10k+ examples), sufficient GPU budget, and need the absolute best task performance — e.g., training a domain-specific chat model or building a specialised code generator.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" duration={0.7} delay={0.5}>
                <h4 style={{ color: '#ffd700' }}>Key Intuition</h4>
                <p>Every weight is fair game. The model can learn arbitrarily complex task adaptations, but you risk <strong>catastrophic forgetting</strong> of pre-trained knowledge if you're not careful.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 1. Full Fine-Tuning — Overview
[lecture] Let's start with the granddaddy of fine-tuning: **Full Fine-Tuning**. This is the approach everyone learned first, and it's still the gold standard when resources aren't a constraint.

#### What Is It?
[conversational] Full fine-tuning means loading a pre-trained model checkpoint and running gradient descent over **every single parameter**. For a 7-billion-parameter model, that's 7 billion floating-point numbers being updated every training step. You feed it your labelled examples — input/output pairs — and the optimizer adjusts the entire weight matrix to minimise your loss.

#### When Should You Pick This?
Choose full fine-tuning when you have **lots of high-quality data** — typically 10,000 examples or more — and the GPU budget to match. Common scenarios include building a domain-specific chatbot for a large enterprise, training a specialised code generator, or creating a high-stakes medical or legal model where accuracy is non-negotiable.

#### The Key Intuition
[storytelling] Think of it like completely renovating a house. You can change the floor plan, add rooms, remove walls — total creative freedom. But the downside? It's expensive, time-consuming, and if you're not careful you might knock down a load-bearing wall. In ML terms, that load-bearing wall is called **catastrophic forgetting**: the model becomes great at your task but forgets the general abilities it learned during pre-training.

[warmly] Next, let's break down exactly how this works step by step.`
        },
        // Slide B — How It Works
        {
          id: 5,
          title: '1. Full Fine-Tuning — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '1.8', textAlign: 'left', color: '#fff' }}>
              <h4 style={{ color: '#4fc3f7' }}>
                Step-by-Step
                <MermaidPopover
                  title="Full Fine-Tuning — Gradient Flow"
                  diagram={`graph TD
    A["Task Dataset<br/>(input, target)"] --> B["Forward Pass<br/>through all layers"]
    B --> C["Compute Loss"]
    C --> D["Backprop through<br/>ALL parameters"]
    D --> E["Optimizer Step<br/>(AdamW)"]
    E --> F["Updated Model<br/>Checkpoint"]

    style A fill:#4fc3f7,color:#000
    style C fill:#ffcdd2,color:#000
    style E fill:#ffd700,color:#000
    style F fill:#81c784,color:#000`}
                />
              </h4>
              <GSAPStaggerList stagger={0.1} duration={0.6}>
                <div><strong style={{ color: '#ffd700' }}>1.</strong> Load pre-trained checkpoint into GPU memory (full precision or bf16).</div>
                <div><strong style={{ color: '#ffd700' }}>2.</strong> Prepare your task dataset as (input, target) pairs; tokenise and batch.</div>
                <div><strong style={{ color: '#ffd700' }}>3.</strong> Forward-pass each batch through the entire model.</div>
                <div><strong style={{ color: '#ffd700' }}>4.</strong> Compute task loss (cross-entropy for language modelling / classification).</div>
                <div><strong style={{ color: '#ffd700' }}>5.</strong> Back-propagate gradients through <strong>every</strong> layer.</div>
                <div><strong style={{ color: '#ffd700' }}>6.</strong> Update weights with AdamW (learning rate ~1e-5 to 5e-5).</div>
                <div><strong style={{ color: '#ffd700' }}>7.</strong> Repeat for 1–5 epochs; save best checkpoint by validation loss.</div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 1. Full Fine-Tuning — How It Works
[confidently] Let's walk through the mechanics step by step.

#### The Full Pipeline
First you load the pre-trained checkpoint. For a 7B model in bf16, that's roughly 14 GB just for the weights. Then the optimizer states (AdamW keeps two moment buffers per parameter) add another 28 GB. So before you've even processed a single example, you're looking at around 42 GB of GPU memory.

[lecture] Next you prepare your dataset. Each example is an input–output pair — for instruction tuning that's a prompt and a completion. You tokenise, pad, and batch these. Then you run a standard training loop: forward pass, loss computation, backpropagation through all layers, and optimizer step. The gradients flow through every single weight in the network.

#### Key Details
The typical learning rate is very small — 1e-5 to 5e-5 — because you don't want to destroy the pre-trained representations. Most fine-tunes run for 1 to 5 epochs on the task data. You evaluate on a held-out validation set and save the checkpoint with the lowest loss.

#### Memory Requirements
[seriously] The elephant in the room. For a 7B model you need roughly 60–80 GB of GPU memory for full fine-tuning with AdamW. That's one or two A100 80GB GPUs. For a 70B model, you're looking at a multi-node cluster. This is exactly why parameter-efficient methods like LoRA 👉 'loh-rah' were invented — which we'll cover next.

[energetic] But first, let's look at the pros and cons of this classical approach.`
        },
        // Slide C — Pros & Cons
        {
          id: 6,
          title: '1. Full Fine-Tuning — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '1.8', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.1}>
                  <div>
                    <h4 style={{ color: '#81c784' }}>✅ Pros</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div>Maximum model expressiveness — can learn complex adaptations</div>
                      <div>Well-understood training dynamics with decades of literature</div>
                      <div>Highest possible task accuracy when data is plentiful</div>
                      <div>No architectural changes required — works out of the box</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" duration={0.7} delay={0.1}>
                  <div>
                    <h4 style={{ color: '#ffcdd2' }}>❌ Cons</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div>Huge GPU memory footprint (weights + optimizer + gradients)</div>
                      <div>Risk of catastrophic forgetting of pre-trained knowledge</div>
                      <div>Requires large, high-quality labelled datasets</div>
                      <div>Produces a full-size checkpoint per task — expensive to store &amp; serve</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 1. Full Fine-Tuning — Pros & Cons
[conversational] Let's weigh the good against the bad.

#### Pros
On the plus side, full fine-tuning gives you **maximum expressiveness**. Every weight can shift to accommodate your task. The training recipe is well understood — people have been fine-tuning neural networks for decades, so there's a huge body of literature and tooling. When you have enough data, no other method will beat full FT on raw task accuracy.

#### Cons
[seriously] But the downsides are significant. The memory footprint is enormous. You need to hold the model weights, the optimizer states, and the gradient buffers all in GPU memory. For large models, that means multiple high-end GPUs. There's also the risk of **catastrophic forgetting** — your model gets great at your task but loses its general reasoning ability. And every fine-tuned model is a full-size checkpoint, so if you have 10 tasks, that's 10 copies of a 14 GB model.

[warmly] These limitations are exactly why the community developed parameter-efficient alternatives. Let's move on to LoRA 👉 'loh-rah' — the technique that changed the game.`
        },
        // Slide D — Config & Tools
        {
          id: 7,
          title: '1. Full Fine-Tuning — Config & Tools',
          icon: { name: 'duo-sliders' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '1.8', textAlign: 'left', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" duration={0.7} delay={0.1}>
                <h4 style={{ color: '#ffd700' }}>Key Hyperparameters</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
                  <thead><tr style={{ borderBottom: '1px solid #555' }}>
                    <th style={{ textAlign: 'left', padding: '6px' }}>Param</th>
                    <th style={{ textAlign: 'left', padding: '6px' }}>Default</th>
                    <th style={{ textAlign: 'left', padding: '6px' }}>Notes</th>
                  </tr></thead>
                  <tbody>
                    <tr><td style={{ padding: '6px' }}>Learning Rate</td><td style={{ padding: '6px' }}>2e-5</td><td style={{ padding: '6px' }}>Lower than pre-training</td></tr>
                    <tr><td style={{ padding: '6px' }}>Epochs</td><td style={{ padding: '6px' }}>1–3</td><td style={{ padding: '6px' }}>More risks overfitting</td></tr>
                    <tr><td style={{ padding: '6px' }}>Batch Size</td><td style={{ padding: '6px' }}>4–32</td><td style={{ padding: '6px' }}>Grad accum if GPU-limited</td></tr>
                    <tr><td style={{ padding: '6px' }}>Warmup</td><td style={{ padding: '6px' }}>5–10 %</td><td style={{ padding: '6px' }}>Cosine schedule common</td></tr>
                    <tr><td style={{ padding: '6px' }}>Weight Decay</td><td style={{ padding: '6px' }}>0.01</td><td style={{ padding: '6px' }}>Standard AdamW default</td></tr>
                  </tbody>
                </table>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" duration={0.7} delay={0.4}>
                <h4 style={{ color: '#ce93d8' }}>Popular Frameworks</h4>
                <GSAPStaggerList stagger={0.08} duration={0.5}>
                  <div><SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} darkModeInvert={true} /><strong>HuggingFace Transformers</strong> — Trainer / SFTTrainer API</div>
                  <div><SvgIcon iconName="duo-bolt" sizeName="lg" style={iconStyle} darkModeInvert={true} /><strong>DeepSpeed ZeRO</strong> — memory-efficient distributed training</div>
                  <div><SvgIcon iconName="duo-fire" sizeName="lg" style={iconStyle} darkModeInvert={true} /><strong>PyTorch FSDP</strong> — Fully Sharded Data Parallel</div>
                  <div><SvgIcon iconName="duo-terminal" sizeName="lg" style={iconStyle} darkModeInvert={true} /><strong>Axolotl / LLaMA-Factory</strong> — opinionated training wrappers</div>
                </GSAPStaggerList>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 1. Full Fine-Tuning — Config & Tools
[lecture] Here are the practical defaults you'll need when doing full fine-tuning.

#### Key Hyperparameters
The learning rate should be **much lower** than pre-training — typically 2e-5. Higher rates risk destabilising the model. Most fine-tunes run for 1–3 epochs; going beyond that usually leads to overfitting unless you have a very large dataset. Use gradient accumulation to simulate larger batch sizes when you're GPU-constrained. A cosine learning rate schedule with 5–10% warmup is the standard recipe.

#### Frameworks
[conversational] The HuggingFace Transformers library with its Trainer or SFTTrainer API is the easiest way to get started. For multi-GPU training, DeepSpeed ZeRO and PyTorch FSDP let you shard model weights across GPUs. Higher-level wrappers like Axolotl and LLaMA-Factory bundle config, data formatting, and training into simple YAML-driven pipelines.

#### Quick-Start Hint
The fastest path: install transformers and trl, load your model in bf16, wrap your data in a Dataset object, and call SFTTrainer. You can be training within 20 lines of Python.

[energetic] Now let's move to the technique that democratised fine-tuning: LoRA 👉 'loh-rah'!`
        },
      ],
    },

    // ─── GROUP 3 — Technique 2: LoRA ─────────────────────────────────────
    {
      id: 'technique-2-lora',
      title: '2. LoRA',
      slides: [
        // Slide A — Overview
        {
          id: 8,
          title: '2. LoRA — Overview',
          icon: { name: 'duo-layer-group' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '2', textAlign: 'left', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.1}>
                <h4 style={{ color: '#4fc3f7' }}>
                  Definition
                  <MermaidPopover
                    title="LoRA — Core Idea"
                    diagram={`graph LR
    A["Frozen Weights<br/>W (large)"] --- B["+ Low-Rank<br/>Delta ΔW = A·B"]
    B --> C["Effective Weight<br/>W + ΔW"]

    style A fill:#4fc3f7,color:#000
    style B fill:#ffd700,color:#000
    style C fill:#81c784,color:#000`}
                  />
                </h4>
                <p><strong>Low-Rank Adaptation</strong> — freeze the original weights and inject tiny trainable low-rank matrices (A and B) into the attention layers. Only A and B are updated during training.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" duration={0.7} delay={0.3}>
                <h4 style={{ color: '#81c784' }}>When to Use</h4>
                <p>You want near-full-FT quality with a fraction of the memory. Ideal when GPU budget is limited (single 24–48 GB GPU) or you need to store and switch between many task-specific adapters.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" duration={0.7} delay={0.5}>
                <h4 style={{ color: '#ffd700' }}>Key Intuition</h4>
                <p>Weight changes during fine-tuning are inherently <strong>low-rank</strong> — you can capture 95%+ of the adaptation in matrices that are 100–1000× smaller than the originals.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 2. LoRA — Overview
[energetic] Enter LoRA 👉 'loh-rah' — Low-Rank Adaptation — the technique that single-handedly democratised LLM 👉 'el-el-em' fine-tuning. Published by Hu et al. at Microsoft in 2021, it's now the most popular PEFT 👉 'peft' method by a wide margin.

#### What's the Big Idea?
[storytelling] Imagine you have a giant whiteboard (the pre-trained weights) that you're not allowed to erase. But you can stick small Post-it notes on top. Those Post-it notes are your low-rank matrices A and B. During training, only the Post-it notes change; the whiteboard stays frozen. At inference time, you can merge the Post-it notes into the whiteboard for zero additional latency.

#### When Should You Pick LoRA?
LoRA 👉 'loh-rah' is ideal when you have a single 24 GB or 48 GB GPU and want to fine-tune a 7B or 13B model. It's also perfect when you need many task-specific versions of the same base model — each adapter is only a few megabytes, so you can store hundreds of them.

#### The Key Insight
[confidently] The mathematical insight is elegant: the weight updates during fine-tuning don't actually need the full dimensionality of the weight matrix. They live in a much lower-dimensional subspace. LoRA exploits this by decomposing the update into two small matrices, reducing trainable parameters by 100–1000×.

Let's see the step-by-step mechanics next.`
        },
        // Slide B — How It Works
        {
          id: 9,
          title: '2. LoRA — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '1.8', textAlign: 'left', color: '#fff' }}>
              <h4 style={{ color: '#4fc3f7' }}>
                Step-by-Step
                <MermaidPopover
                  title="LoRA — Gradient Flow"
                  diagram={`graph TD
    A["Input x"] --> B["Frozen W · x"]
    A --> C["Trainable A · x"]
    C --> D["Trainable B · (A · x)"]
    B --> E["y = W·x + B·A·x"]
    D --> E
    E --> F["Loss & Backprop<br/>(only through A, B)"]

    style A fill:#4fc3f7,color:#000
    style B fill:#e1bee7,color:#000
    style C fill:#ffd700,color:#000
    style D fill:#ffd700,color:#000
    style E fill:#81c784,color:#000
    style F fill:#ffcdd2,color:#000`}
                />
              </h4>
              <GSAPStaggerList stagger={0.1} duration={0.6}>
                <div><strong style={{ color: '#ffd700' }}>1.</strong> Load pre-trained model; freeze all original weights W.</div>
                <div><strong style={{ color: '#ffd700' }}>2.</strong> For target layers (typically Q, V projections), inject two small matrices: A (d × r) and B (r × d), where r ≪ d.</div>
                <div><strong style={{ color: '#ffd700' }}>3.</strong> Forward pass: output = W·x + α · B·A·x (α is a scaling factor).</div>
                <div><strong style={{ color: '#ffd700' }}>4.</strong> Only A and B receive gradients; optimizer states are tiny.</div>
                <div><strong style={{ color: '#ffd700' }}>5.</strong> After training, merge: W′ = W + α · B·A. No extra latency at inference.</div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 2. LoRA — How It Works
[lecture] Let's unpack the mechanics of LoRA 👉 'loh-rah' step by step.

#### The Injection
You start by loading the pre-trained model and freezing every weight. Then, for each target layer — usually the query and value projections in the attention mechanism — you add two small matrices, A and B. Matrix A has dimensions d × r and B has dimensions r × d, where d is the original hidden dimension (say 4096) and r is the rank (typically 8, 16, or 64). So instead of a 4096 × 4096 update matrix with 16 million parameters, you have two matrices with a combined total of 2 × 4096 × 16 = about 130K parameters. That's a 120× reduction.

#### The Forward Pass
[conversational] During inference, the output of each target layer becomes W·x plus α times B·A·x. The scaling factor α (usually set to r or 2r) controls how much the adaptation is weighted relative to the original weights. This is a simple additive modification, so it's extremely clean.

#### Gradient Flow
Only A and B receive gradients — that's the whole point. The optimizer only needs to store momentum and variance for these tiny matrices, slashing memory requirements. For a 7B model with rank 16, you'll typically train only 0.1–1% of the total parameters.

#### The Merge Trick
[confidently] Here's the beautiful part: after training, you can mathematically merge B·A back into the original weight W to get W′ = W + α·B·A. The merged model has exactly the same architecture as the original, so there's **zero additional latency** at inference.

Now let's weigh the trade-offs.`
        },
        // Slide C — Pros & Cons
        {
          id: 10,
          title: '2. LoRA — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '1.8', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.1}>
                  <div>
                    <h4 style={{ color: '#81c784' }}>✅ Pros</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div>Reduces trainable params by 100–1000×</div>
                      <div>Zero extra latency after merging</div>
                      <div>Tiny adapter files (few MB) — easy to store and swap</div>
                      <div>Near-full-FT quality on most benchmarks</div>
                      <div>Works with any transformer architecture</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" duration={0.7} delay={0.1}>
                  <div>
                    <h4 style={{ color: '#ffcdd2' }}>❌ Cons</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div>Rank r is a hyperparameter to tune</div>
                      <div>May underperform full FT on very large datasets</div>
                      <div>Base model still needs to fit in memory (fp16/bf16)</div>
                      <div>Multiple simultaneous adapters add batching complexity</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 2. LoRA — Pros & Cons
[conversational] Let's balance the scales.

#### Pros
LoRA 👉 'loh-rah' slashes trainable parameters dramatically. A 7B model goes from 7 billion trainable params to maybe 10–50 million. That means smaller optimizer states, less memory, faster training, and smaller checkpoints. After merging, there's zero overhead at inference. And because each adapter is just a few megabytes, you can maintain a library of adapters for different tasks all sharing the same base model.

#### Cons
[seriously] It's not all sunshine. The rank r is a hyperparameter you need to tune — too low and the model can't learn complex adaptations, too high and you lose the efficiency benefit. On very large datasets, full fine-tuning may still win by a small margin. Critically, the base model still needs to fit in GPU memory in fp16 or bf16 — LoRA saves training memory but not model-loading memory. And if you want to serve multiple adapters simultaneously (multi-tenant), the batching logic gets tricky.

[warmly] That memory constraint is exactly what motivated the next technique: QLoRA 👉 'cue-loh-rah', which uses 4-bit quantisation to shrink the base model. Let's look at that.`
        },
        // Slide D — Config & Tools
        {
          id: 11,
          title: '2. LoRA — Config & Tools',
          icon: { name: 'duo-sliders' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '1.8', textAlign: 'left', color: '#fff' }}>
              <GSAPAnimated animation="fadeIn" duration={0.7} delay={0.1}>
                <h4 style={{ color: '#ffd700' }}>Key Hyperparameters</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
                  <thead><tr style={{ borderBottom: '1px solid #555' }}>
                    <th style={{ textAlign: 'left', padding: '6px' }}>Param</th>
                    <th style={{ textAlign: 'left', padding: '6px' }}>Default</th>
                    <th style={{ textAlign: 'left', padding: '6px' }}>Notes</th>
                  </tr></thead>
                  <tbody>
                    <tr><td style={{ padding: '6px' }}>Rank (r)</td><td style={{ padding: '6px' }}>16</td><td style={{ padding: '6px' }}>8-64 typical; higher = more capacity</td></tr>
                    <tr><td style={{ padding: '6px' }}>Alpha (α)</td><td style={{ padding: '6px' }}>32</td><td style={{ padding: '6px' }}>Often 2×r; scaling factor</td></tr>
                    <tr><td style={{ padding: '6px' }}>Target Modules</td><td style={{ padding: '6px' }}>q_proj, v_proj</td><td style={{ padding: '6px' }}>Add k, o, gate for more capacity</td></tr>
                    <tr><td style={{ padding: '6px' }}>Dropout</td><td style={{ padding: '6px' }}>0.05</td><td style={{ padding: '6px' }}>LoRA-specific dropout</td></tr>
                    <tr><td style={{ padding: '6px' }}>LR</td><td style={{ padding: '6px' }}>2e-4</td><td style={{ padding: '6px' }}>10× higher than full FT</td></tr>
                  </tbody>
                </table>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" duration={0.7} delay={0.4}>
                <h4 style={{ color: '#ce93d8' }}>Popular Libraries</h4>
                <GSAPStaggerList stagger={0.08} duration={0.5}>
                  <div><SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} darkModeInvert={true} /><strong>PEFT (HuggingFace)</strong> — LoraConfig + get_peft_model()</div>
                  <div><SvgIcon iconName="duo-bolt" sizeName="lg" style={iconStyle} darkModeInvert={true} /><strong>Unsloth</strong> — 2× faster LoRA with custom kernels</div>
                  <div><SvgIcon iconName="duo-fire" sizeName="lg" style={iconStyle} darkModeInvert={true} /><strong>Axolotl</strong> — YAML-driven PEFT training</div>
                </GSAPStaggerList>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 2. LoRA — Config & Tools
[lecture] Here are the practical knobs you'll turn when using LoRA 👉 'loh-rah'.

#### Key Hyperparameters
The **rank r** controls the capacity of the adaptation. Start with 16 and increase to 32 or 64 if you see underfitting. **Alpha** is a scaling factor — a common heuristic is to set it to 2× the rank. **Target modules** define which layers get the adaptation: q_proj and v_proj are the default, but adding k_proj, o_proj, and the MLP gate/up/down projections gives more capacity at a small cost. The learning rate is typically 10× higher than full FT — around 2e-4 — because you're only updating a tiny fraction of parameters.

#### Libraries
[conversational] The HuggingFace PEFT 👉 'peft' library is the standard. You create a LoraConfig, call get_peft_model, and train as usual. Unsloth is a newer library that provides custom CUDA kernels for 2× faster LoRA training. Axolotl wraps everything in a YAML config file, making it very approachable.

#### Quick-Start Hint
Five lines: LoraConfig(r=16, lora_alpha=32, target_modules=["q_proj","v_proj"]), get_peft_model(model, config), then train with SFTTrainer. Your adapter will be under 50 MB.

[energetic] Now let's push the efficiency envelope even further with QLoRA 👉 'cue-loh-rah'!`
        },
      ],
    },

    // ─── GROUP 4 — Technique 3: QLoRA ────────────────────────────────────
    {
      id: 'technique-3-qlora',
      title: '3. QLoRA',
      slides: [
        // Slide A — Overview
        {
          id: 12,
          title: '3. QLoRA — Overview',
          icon: { name: 'duo-compress' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '2', textAlign: 'left', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" duration={0.9} delay={0.1}>
                <h4 style={{ color: '#4fc3f7' }}>
                  Definition
                  <MermaidPopover
                    title="QLoRA — Core Idea"
                    diagram={`graph LR
    A["4-bit Quantised<br/>Base Weights"] --- B["+ LoRA Adapters<br/>(fp16)"]
    B --> C["Fine-Tuned<br/>Model"]

    style A fill:#e1bee7,color:#000
    style B fill:#ffd700,color:#000
    style C fill:#81c784,color:#000`}
                  />
                </h4>
                <p><strong>Quantised LoRA</strong> — load the base model in 4-bit NormalFloat (NF4) precision, then train LoRA adapters in fp16/bf16. Combines quantisation + low-rank adaptation for extreme memory savings.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.3}>
                <h4 style={{ color: '#81c784' }}>When to Use</h4>
                <p>You have a single consumer GPU (16–24 GB VRAM) and want to fine-tune a 7B–70B model. Also great for rapid experimentation where you need fast iteration loops.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" duration={0.7} delay={0.5}>
                <h4 style={{ color: '#ffd700' }}>Key Intuition</h4>
                <p>4-bit quantisation shrinks the frozen base to ¼ of its fp16 size. LoRA adapters stay in higher precision where gradients flow. Best of both worlds.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 3. QLoRA — Overview
[cheerfully] Now we get to QLoRA 👉 'cue-loh-rah' — the technique that let a single graduate student fine-tune a 65-billion-parameter model on one GPU. Published by Dettmers et al. in 2023, it combines two powerful ideas: 4-bit quantisation and LoRA 👉 'loh-rah'.

#### What Is It?
[storytelling] Remember our whiteboard analogy? QLoRA says: "What if the whiteboard was a compressed JPEG instead of a full-resolution image?" You take the base model and quantise it to 4-bit NormalFloat — a data type specifically designed to preserve the information that matters most. Then you stick your LoRA Post-it notes on top in full fp16 precision, so gradients can flow properly.

#### When Should You Pick QLoRA?
This is your go-to when you have a consumer GPU — an RTX 3090 or 4090 with 24 GB — and want to fine-tune models that would otherwise require 80 GB A100s. It's also excellent for rapid prototyping because you can iterate much faster with lower memory.

#### The Key Insight
[confidently] The frozen base weights don't need full precision because they don't receive gradients. By quantising them to 4-bit, you free up GPU memory for the things that matter: the LoRA adapter weights and their optimizer states, which stay in higher precision.

Let's break down how this works in practice.`
        },
        // Slide B — How It Works
        {
          id: 13,
          title: '3. QLoRA — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '1.8', textAlign: 'left', color: '#fff' }}>
              <h4 style={{ color: '#4fc3f7' }}>
                Step-by-Step
                <MermaidPopover
                  title="QLoRA — Data Flow"
                  diagram={`graph TD
    A["Load Model<br/>in 4-bit NF4"] --> B["Dequant to bf16<br/>on the fly"]
    B --> C["Forward: W_q·x + B·A·x"]
    C --> D["Compute Loss"]
    D --> E["Backprop through<br/>A, B only (bf16)"]
    E --> F["Paged AdamW<br/>optimizer step"]

    style A fill:#e1bee7,color:#000
    style B fill:#4fc3f7,color:#000
    style D fill:#ffcdd2,color:#000
    style F fill:#81c784,color:#000`}
                />
              </h4>
              <GSAPStaggerList stagger={0.1} duration={0.6}>
                <div><strong style={{ color: '#ffd700' }}>1.</strong> Load base model with BitsAndBytesConfig(load_in_4bit=True, bnb_4bit_quant_type="nf4").</div>
                <div><strong style={{ color: '#ffd700' }}>2.</strong> Apply double quantisation (quantise the quantisation constants) for extra savings.</div>
                <div><strong style={{ color: '#ffd700' }}>3.</strong> Inject LoRA adapters in bf16 on target attention layers.</div>
                <div><strong style={{ color: '#ffd700' }}>4.</strong> During forward pass, dequantise frozen weights on-the-fly, compute combined output.</div>
                <div><strong style={{ color: '#ffd700' }}>5.</strong> Backprop only through LoRA matrices; paged optimizer handles CPU offload if needed.</div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 3. QLoRA — How It Works
[lecture] Let's go through the mechanics of QLoRA 👉 'cue-loh-rah'.

#### Loading in 4-bit
The first step is loading the base model in 4-bit NormalFloat. NF4 is a data type engineered by the QLoRA paper authors — it distributes quantisation levels to match the statistical distribution of neural network weights, which tend to follow a normal distribution. This gives you better precision per bit than naive 4-bit integer quantisation.

#### Double Quantisation
[conversational] Here's a clever trick: the quantisation constants themselves (used to map between 4-bit and higher precision) also take up memory. Double quantisation quantises those constants too, saving an additional 0.5 GB or so for a 7B model. Small but meaningful when every megabyte counts.

#### The Forward Pass
During the forward pass, frozen 4-bit weights are dequantised to bf16 on the fly for computation. The LoRA adapters run in bf16 natively. The outputs are summed just like regular LoRA. Only the LoRA matrices receive gradients.

#### Paged Optimizer
[seriously] QLoRA also introduced a paged optimizer that offloads optimizer states to CPU RAM when GPU memory is tight. This means if you hit a memory spike during a long sequence, the system gracefully pages states to CPU rather than crashing.

This whole stack means you can fine-tune LLaMA 👉 'lah-mah' 65B on a single 48 GB A100, or LLaMA 7B on a consumer 24 GB GPU. Remarkable.`
        },
        // Slide C — Pros & Cons
        {
          id: 14,
          title: '3. QLoRA — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '1.8', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.1}>
                  <div>
                    <h4 style={{ color: '#81c784' }}>✅ Pros</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div>Fine-tune 70B on a single 48 GB GPU</div>
                      <div>Matches LoRA quality in most benchmarks</div>
                      <div>NF4 preserves model quality vs naive int4</div>
                      <div>Paged optimizer prevents OOM crashes</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" duration={0.7} delay={0.1}>
                  <div>
                    <h4 style={{ color: '#ffcdd2' }}>❌ Cons</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div>~15–20% slower than fp16 LoRA (dequantisation overhead)</div>
                      <div>Slight quality loss vs fp16 LoRA in edge cases</div>
                      <div>Depends on bitsandbytes library (CUDA-only)</div>
                      <div>Merged checkpoint still large (must re-quantise for inference)</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 3. QLoRA — Pros & Cons
[conversational] Let's weigh the trade-offs for QLoRA 👉 'cue-loh-rah'.

#### Pros
The headline benefit is **dramatic memory reduction**. Fine-tuning a 70-billion-parameter model on a single A100 was unthinkable before QLoRA. In terms of quality, QLoRA matches plain LoRA 👉 'loh-rah' on most benchmarks — the NF4 quantisation is remarkably good at preserving information. The paged optimizer is a life-saver that prevents out-of-memory crashes during training.

#### Cons
[seriously] The dequantisation step during forward pass adds computational overhead, making training about 15–20% slower compared to fp16 LoRA. In some edge cases — particularly very long sequences or highly nuanced tasks — there can be a small quality gap compared to fp16 LoRA. The bitsandbytes library currently only works on NVIDIA CUDA GPUs, so AMD and Apple Silicon users are out of luck. Finally, the merged checkpoint is full-size; you'll want to re-quantise it for efficient inference.

[warmly] Next up: Adapters — the original parameter-efficient method that predates even LoRA!`
        },
        // Slide D — Config & Tools
        {
          id: 15,
          title: '3. QLoRA — Config & Tools',
          icon: { name: 'duo-sliders' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '1.8', textAlign: 'left', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" duration={0.7} delay={0.1}>
                <h4 style={{ color: '#ffd700' }}>Key Hyperparameters</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
                  <thead><tr style={{ borderBottom: '1px solid #555' }}>
                    <th style={{ textAlign: 'left', padding: '6px' }}>Param</th>
                    <th style={{ textAlign: 'left', padding: '6px' }}>Default</th>
                    <th style={{ textAlign: 'left', padding: '6px' }}>Notes</th>
                  </tr></thead>
                  <tbody>
                    <tr><td style={{ padding: '6px' }}>Quant Type</td><td style={{ padding: '6px' }}>nf4</td><td style={{ padding: '6px' }}>NormalFloat-4; outperforms fp4</td></tr>
                    <tr><td style={{ padding: '6px' }}>Double Quant</td><td style={{ padding: '6px' }}>True</td><td style={{ padding: '6px' }}>Saves ~0.5 GB on 7B</td></tr>
                    <tr><td style={{ padding: '6px' }}>Compute Dtype</td><td style={{ padding: '6px' }}>bf16</td><td style={{ padding: '6px' }}>Dequant target; fp16 also works</td></tr>
                    <tr><td style={{ padding: '6px' }}>LoRA r</td><td style={{ padding: '6px' }}>16</td><td style={{ padding: '6px' }}>Same tuning as standard LoRA</td></tr>
                    <tr><td style={{ padding: '6px' }}>Max Seq Len</td><td style={{ padding: '6px' }}>2048</td><td style={{ padding: '6px' }}>Longer = more memory</td></tr>
                  </tbody>
                </table>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" duration={0.7} delay={0.4}>
                <h4 style={{ color: '#ce93d8' }}>Popular Libraries</h4>
                <GSAPStaggerList stagger={0.08} duration={0.5}>
                  <div><SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} darkModeInvert={true} /><strong>bitsandbytes</strong> — 4-bit quantisation backend</div>
                  <div><SvgIcon iconName="duo-bolt" sizeName="lg" style={iconStyle} darkModeInvert={true} /><strong>PEFT + BnB</strong> — seamless QLoRA via BitsAndBytesConfig</div>
                  <div><SvgIcon iconName="duo-fire" sizeName="lg" style={iconStyle} darkModeInvert={true} /><strong>Unsloth</strong> — optimised QLoRA with 60% less memory</div>
                </GSAPStaggerList>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 3. QLoRA — Config & Tools
[lecture] Let's cover the practical configuration for QLoRA 👉 'cue-loh-rah'.

#### Key Hyperparameters
The quant type should be **nf4** — NormalFloat-4 consistently outperforms fp4 and int4 in quality. Enable double quantisation to save an extra half gigabyte. Set the compute dtype to bf16 for the dequantised computation. The LoRA hyperparameters (rank, alpha, target modules) follow the same guidelines as standard LoRA. Keep an eye on max sequence length — longer sequences consume significantly more memory even with QLoRA.

#### Libraries
[conversational] The bitsandbytes library provides the 4-bit quantisation backend. Combined with HuggingFace PEFT 👉 'peft', you get QLoRA in just a few lines: create a BitsAndBytesConfig, load the model with it, then apply a LoraConfig. Unsloth takes this further with custom kernels that reduce memory by an additional 60% and speed up training.

#### Quick-Start Hint
BitsAndBytesConfig(load_in_4bit=True, bnb_4bit_quant_type="nf4", bnb_4bit_use_double_quant=True, bnb_4bit_compute_dtype=torch.bfloat16). Pass this to AutoModelForCausalLM.from_pretrained, then add LoRA on top.

[energetic] Now let's step back in time to the technique that started the PEFT revolution: Adapters!`
        },
      ],
    },

    // ─── GROUP 5 — Technique 4: Adapters ─────────────────────────────────
    {
      id: 'technique-4-adapters',
      title: '4. Adapters',
      slides: [
        // Slide A — Overview
        {
          id: 16,
          title: '4. Adapters — Overview',
          icon: { name: 'duo-puzzle-piece' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '2', textAlign: 'left', color: '#fff' }}>
              <GSAPAnimated animation="slideInTop" duration={0.7} delay={0.1}>
                <h4 style={{ color: '#4fc3f7' }}>
                  Definition
                  <MermaidPopover
                    title="Adapter — Core Idea"
                    diagram={`graph TD
    A["Input"] --> B["Frozen Transformer<br/>Layer"]
    B --> C["Adapter Bottleneck<br/>(down → nonlinear → up)"]
    C --> D["Residual Add"]
    B --> D
    D --> E["Next Layer"]

    style A fill:#4fc3f7,color:#000
    style C fill:#ffd700,color:#000
    style D fill:#81c784,color:#000
    style E fill:#e1bee7,color:#000`}
                  />
                </h4>
                <p><strong>Adapter Layers</strong> — insert small bottleneck modules (down-project → non-linearity → up-project + residual) <em>between</em> existing transformer sub-layers. Only the adapters are trained.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" duration={0.7} delay={0.3}>
                <h4 style={{ color: '#81c784' }}>When to Use</h4>
                <p>Multi-task serving: each task gets its own adapter while the backbone stays shared. Also useful in NLU benchmarks where you need modular task heads.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" duration={0.7} delay={0.5}>
                <h4 style={{ color: '#ffd700' }}>Key Intuition</h4>
                <p>Think of adapters as plug-in cartridges. Swap one cartridge for another to change the model's behaviour without touching the core.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 4. Adapters — Overview
[storytelling] Let's travel back to 2019, before LoRA 👉 'loh-rah' existed. The NLP community was facing the same problem: fine-tuning BERT for every task produced massive checkpoints. Then Houlsby et al. at Google proposed **Adapter layers** — small bottleneck modules injected between existing transformer sub-layers.

#### What Are They?
An adapter is a tiny neural network: a down-projection that compresses the hidden dimension (say, from 768 to 64), a non-linearity (ReLU or GELU), and an up-projection back to the original dimension, plus a residual connection. These modules are inserted after the attention and feed-forward blocks in each transformer layer. During training, only these adapter parameters are updated; the rest of the model stays frozen.

#### When to Use Adapters?
[conversational] Adapters shine in **multi-task scenarios**. Because each adapter is a modular plug-in, you can train separate adapters for sentiment analysis, NER, question answering, etc., and swap them at inference time. The base model is shared, so storage is efficient. They're also popular in the AdapterHub ecosystem for NLU benchmarks.

#### The Intuition
[confidently] Picture a gaming console that plays different games with cartridges. The console (base model) stays the same; you just plug in the right cartridge (adapter) for the task you want. Each cartridge is tiny compared to the console itself.

Let's see the architectural details next.`
        },
        // Slide B — How It Works
        {
          id: 17,
          title: '4. Adapters — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '1.8', textAlign: 'left', color: '#fff' }}>
              <h4 style={{ color: '#4fc3f7' }}>
                Step-by-Step
                <MermaidPopover
                  title="Adapter — Gradient Flow"
                  diagram={`graph TD
    A["Hidden State h"] --> B["Down-project<br/>W_down: d → m"]
    B --> C["Non-linearity<br/>(ReLU / GELU)"]
    C --> D["Up-project<br/>W_up: m → d"]
    D --> E["Add Residual<br/>h + adapter(h)"]
    E --> F["Output to<br/>next sub-layer"]

    style A fill:#4fc3f7,color:#000
    style B fill:#ffd700,color:#000
    style C fill:#e1bee7,color:#000
    style D fill:#ffd700,color:#000
    style E fill:#81c784,color:#000`}
                />
              </h4>
              <GSAPStaggerList stagger={0.1} duration={0.6}>
                <div><strong style={{ color: '#ffd700' }}>1.</strong> Freeze all pre-trained weights.</div>
                <div><strong style={{ color: '#ffd700' }}>2.</strong> After each attention block and FFN block, insert an adapter module.</div>
                <div><strong style={{ color: '#ffd700' }}>3.</strong> Adapter: h → W_down · h (compress to bottleneck dim m) → non-linear → W_up (back to d) → + h (residual).</div>
                <div><strong style={{ color: '#ffd700' }}>4.</strong> Bottleneck dim m controls capacity (typically 64–256 for BERT-scale, 128–512 for LLMs).</div>
                <div><strong style={{ color: '#ffd700' }}>5.</strong> Gradients flow only through adapter parameters; optimizer state is small.</div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 4. Adapters — How It Works
[lecture] Let's walk through the adapter architecture step by step.

#### The Module
Each adapter module is a two-layer bottleneck. The down-projection takes the hidden state from dimension d (the model's hidden size) down to a bottleneck dimension m. A non-linearity — ReLU or GELU — is applied. Then the up-projection maps back to dimension d. Finally, a residual connection adds the original input back. If the adapter learns nothing useful, the residual ensures the output is just h + 0 = h, so the model can't get worse than baseline.

#### Placement
[conversational] In the original paper, adapters are placed in **two positions** per transformer layer: after the multi-head attention projection and after the feed-forward network projection. Later work showed that placing them in only one position (after FFN) works almost as well with fewer parameters.

#### Bottleneck Size
The bottleneck dimension m is the key hyperparameter. For BERT-sized models, m=64 gives good results with very few parameters. For large LLMs 👉 'el-el-ems', you might use m=128 or m=256. Larger m means more capacity but also more parameters and slower inference.

#### The Gradients
Since only the adapter weights W_down and W_up are trainable, the optimizer state is tiny — similar in spirit to LoRA 👉 'loh-rah' but with a different architecture.

[warmly] Now let's compare the trade-offs.`
        },
        // Slide C — Pros & Cons
        {
          id: 18,
          title: '4. Adapters — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '1.8', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.1}>
                  <div>
                    <h4 style={{ color: '#81c784' }}>✅ Pros</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div>Modular — easy to add, remove, and compose adapters</div>
                      <div>Shared backbone reduces storage for multi-task</div>
                      <div>Residual connection ensures no degradation from bad init</div>
                      <div>Well-supported by AdapterHub ecosystem</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" duration={0.7} delay={0.1}>
                  <div>
                    <h4 style={{ color: '#ffcdd2' }}>❌ Cons</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div>Adds inference latency (extra sequential layers)</div>
                      <div>Cannot be merged into base weights like LoRA</div>
                      <div>More parameters than LoRA for similar capacity</div>
                      <div>Less popular for LLMs — LoRA dominates in practice</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 4. Adapters — Pros & Cons
[conversational] Let's weigh the trade-offs for adapter layers.

#### Pros
The biggest strength is **modularity**. Each adapter is a self-contained plug-in. You can compose adapters from different tasks (adapter fusion), add new tasks without modifying existing ones, and maintain a clean separation of concerns. The residual connection is a safety net — even with a bad initialisation, the model can't perform worse than the frozen base. The AdapterHub ecosystem provides a marketplace of pre-trained adapters you can download and use directly.

#### Cons
[seriously] The key downside is **inference latency**. Unlike LoRA 👉 'loh-rah', which can be merged into the base weights, adapters add sequential computation at every layer. For a 32-layer model, that's 32 or 64 extra bottleneck computations per forward pass. This makes them slower at inference compared to merged LoRA. They also tend to have more parameters than LoRA for equivalent capacity, and in the current LLM 👉 'el-el-em' fine-tuning landscape, LoRA has largely won the popularity contest.

[warmly] Now let's look at the configuration and tooling.`
        },
        // Slide D — Config & Tools
        {
          id: 19,
          title: '4. Adapters — Config & Tools',
          icon: { name: 'duo-sliders' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '1.8', textAlign: 'left', color: '#fff' }}>
              <GSAPAnimated animation="fadeIn" duration={0.7} delay={0.1}>
                <h4 style={{ color: '#ffd700' }}>Key Hyperparameters</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
                  <thead><tr style={{ borderBottom: '1px solid #555' }}>
                    <th style={{ textAlign: 'left', padding: '6px' }}>Param</th>
                    <th style={{ textAlign: 'left', padding: '6px' }}>Default</th>
                    <th style={{ textAlign: 'left', padding: '6px' }}>Notes</th>
                  </tr></thead>
                  <tbody>
                    <tr><td style={{ padding: '6px' }}>Bottleneck (m)</td><td style={{ padding: '6px' }}>64–256</td><td style={{ padding: '6px' }}>Higher = more capacity</td></tr>
                    <tr><td style={{ padding: '6px' }}>Placement</td><td style={{ padding: '6px' }}>after attn + FFN</td><td style={{ padding: '6px' }}>after FFN only also works</td></tr>
                    <tr><td style={{ padding: '6px' }}>Non-linearity</td><td style={{ padding: '6px' }}>ReLU</td><td style={{ padding: '6px' }}>GELU or Swish also common</td></tr>
                    <tr><td style={{ padding: '6px' }}>LR</td><td style={{ padding: '6px' }}>1e-4</td><td style={{ padding: '6px' }}>Adapters tolerate higher LR</td></tr>
                    <tr><td style={{ padding: '6px' }}>Residual</td><td style={{ padding: '6px' }}>Always on</td><td style={{ padding: '6px' }}>Skip connection is essential</td></tr>
                  </tbody>
                </table>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" duration={0.7} delay={0.4}>
                <h4 style={{ color: '#ce93d8' }}>Popular Libraries</h4>
                <GSAPStaggerList stagger={0.1} duration={0.5}>
                  <div><SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} darkModeInvert={true} /><strong>AdapterHub / adapters</strong> — dedicated adapter ecosystem for transformers</div>
                  <div><SvgIcon iconName="duo-bolt" sizeName="lg" style={iconStyle} darkModeInvert={true} /><strong>HuggingFace PEFT</strong> — supports adapters via BottleneckConfig</div>
                  <div><SvgIcon iconName="duo-fire" sizeName="lg" style={iconStyle} darkModeInvert={true} /><strong>OpenDelta</strong> — unified delta-tuning framework</div>
                </GSAPStaggerList>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 4. Adapters — Config & Tools
[lecture] Here are the practical configuration details for adapter layers.

#### Key Hyperparameters
The bottleneck dimension m is the main lever. Start with 64 for BERT-scale models and 128–256 for LLMs 👉 'el-el-ems'. For placement, the original paper uses both after attention and after FFN, but later research showed that after-FFN-only is nearly as good with fewer parameters. ReLU is the standard non-linearity, though GELU and Swish work too. The learning rate can be higher than full fine-tuning — around 1e-4 — because you're only training a small number of parameters.

#### Libraries
[conversational] AdapterHub is the gold standard for adapter-based training. It provides a drop-in replacement for HuggingFace Transformers with built-in adapter management, composition, and a hub for sharing pre-trained adapters. HuggingFace PEFT 👉 'peft' also supports adapters through its BottleneckConfig. OpenDelta is a more research-oriented framework that unifies various delta-tuning methods.

#### Quick-Start Hint
With AdapterHub: model.add_adapter("task_name", config="pfeiffer"), model.train_adapter("task_name"). Two lines and you're training.

[energetic] Now let's explore techniques that don't add any new layers at all — starting with Prefix Tuning!`
        },
      ],
    },

    // ─── GROUP 6 — Technique 5: Prefix Tuning ───────────────────────────
    {
      id: 'technique-5-prefix-tuning',
      title: '5. Prefix Tuning',
      slides: [
        // Slide A — Overview
        {
          id: 20,
          title: '5. Prefix Tuning — Overview',
          icon: { name: 'duo-wand-magic-sparkles' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '2', textAlign: 'left', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.1}>
                <h4 style={{ color: '#4fc3f7' }}>
                  Definition
                  <MermaidPopover
                    title="Prefix Tuning — Core Idea"
                    diagram={`graph LR
    A["Learnable Prefix<br/>Vectors (per layer)"] --> B["Prepend to<br/>K, V in Attention"]
    B --> C["Steer Attention<br/>Towards Task"]

    style A fill:#ffd700,color:#000
    style B fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000`}
                  />
                </h4>
                <p><strong>Prefix Tuning</strong> — prepend learnable continuous vectors (a "soft prefix") to the key and value matrices at <em>every</em> attention layer. The model weights are completely frozen; only the prefix vectors are trained.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" duration={0.7} delay={0.3}>
                <h4 style={{ color: '#81c784' }}>When to Use</h4>
                <p>Lightweight task adaptation for generation tasks (summarisation, translation). Excellent when you need many task-specific prefixes served from a single model.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" duration={0.7} delay={0.5}>
                <h4 style={{ color: '#ffd700' }}>Key Intuition</h4>
                <p>Instead of changing the model, you change what it pays attention <em>to</em>. The prefix acts as a task-specific "steering signal" that guides the frozen model's behaviour at every layer.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 5. Prefix Tuning — Overview
[storytelling] What if, instead of modifying the model's weights or adding new layers, you could simply whisper instructions to every attention layer? That's the intuition behind **Prefix Tuning**, proposed by Li and Liang in 2021.

#### What Is It?
Prefix Tuning adds a sequence of learnable continuous vectors — the "prefix" — to the beginning of the key and value matrices at every attention layer. These vectors are like virtual tokens that the model can attend to, effectively steering its behaviour. The model's actual weights are completely frozen; only these prefix vectors are trained.

#### When Should You Pick This?
[conversational] Prefix Tuning is ideal for **generation tasks** like summarisation, translation, and dialog. It's also great when you need to serve many tasks from a single model — each task gets its own set of prefix vectors (a few hundred kilobytes), and you can hot-swap them at inference time.

#### The Key Insight
[confidently] Rather than telling the model how to process information (by changing its weights), you tell it what to focus on (by changing its attention context). The prefix vectors are optimised to encode task-specific context that guides every layer of the model.

Let's see how this works mechanically.`
        },
        // Slide B — How It Works
        {
          id: 21,
          title: '5. Prefix Tuning — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '1.8', textAlign: 'left', color: '#fff' }}>
              <h4 style={{ color: '#4fc3f7' }}>
                Step-by-Step
                <MermaidPopover
                  title="Prefix Tuning — Attention Flow"
                  diagram={`graph TD
    A["Prefix Vectors<br/>(learnable)"] --> B["Prepend to K, V<br/>at every layer"]
    C["Input Tokens"] --> D["Self-Attention<br/>(Q attends to prefix + input)"]
    B --> D
    D --> E["Output<br/>(task-adapted)"]

    style A fill:#ffd700,color:#000
    style B fill:#e1bee7,color:#000
    style C fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000`}
                />
              </h4>
              <GSAPStaggerList stagger={0.1} duration={0.6}>
                <div><strong style={{ color: '#ffd700' }}>1.</strong> Initialise a prefix matrix P of shape (num_layers × prefix_len × d_model).</div>
                <div><strong style={{ color: '#ffd700' }}>2.</strong> At each layer, prepend P_l to the key and value tensors before attention.</div>
                <div><strong style={{ color: '#ffd700' }}>3.</strong> Query tokens attend over [prefix | real tokens], gaining task-relevant context.</div>
                <div><strong style={{ color: '#ffd700' }}>4.</strong> A reparametrisation MLP (during training only) helps optimise the prefix stably.</div>
                <div><strong style={{ color: '#ffd700' }}>5.</strong> After training, discard the MLP; keep only the optimised prefix vectors.</div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 5. Prefix Tuning — How It Works
[lecture] Let's break down the mechanics of Prefix Tuning.

#### The Prefix Matrix
You initialise a set of learnable vectors — one set per attention layer. If the model has 32 layers and you use a prefix length of 20, you have 32 × 20 = 640 vectors, each of dimension d_model (say 4096). That's about 10 million parameters — a tiny fraction of a 7B model.

#### Attention Modification
[conversational] At each layer, these prefix vectors are prepended to the key and value tensors. So when the query tokens compute attention scores, they attend over both the prefix vectors and the real input tokens. The prefix vectors effectively "inject" task-specific information into every layer's attention computation.

#### The Reparametrisation Trick
In practice, directly optimising high-dimensional prefix vectors can be unstable. The original paper uses a small MLP to reparametrize the prefix during training: you actually learn a smaller set of parameters and the MLP maps them to the full prefix vectors. After training, you run the MLP once, save the resulting prefix vectors, and discard the MLP.

#### Memory Profile
[seriously] Because no model weights are modified, the memory overhead is minimal — just the prefix vectors and their gradients. But note that the model still needs to fit in memory for the forward pass.

Let's compare the pros and cons.`
        },
        // Slide C — Pros & Cons
        {
          id: 22,
          title: '5. Prefix Tuning — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '1.8', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.1}>
                  <div>
                    <h4 style={{ color: '#81c784' }}>✅ Pros</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div>Extremely few trainable parameters (0.1% of model)</div>
                      <div>No architectural changes — model code stays untouched</div>
                      <div>Task-specific prefixes are tiny and easy to swap</div>
                      <div>Works well for generation tasks (summarisation, NLG)</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" duration={0.7} delay={0.1}>
                  <div>
                    <h4 style={{ color: '#ffcdd2' }}>❌ Cons</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div>Limited capacity — can underperform on complex tasks</div>
                      <div>Prefix length reduces effective context window</div>
                      <div>Training can be unstable without reparametrisation</div>
                      <div>Harder to interpret than weight-based methods</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 5. Prefix Tuning — Pros & Cons
[conversational] Let's evaluate Prefix Tuning honestly.

#### Pros
The parameter count is incredibly low — typically 0.1% of the full model. No model code needs to change; you're just modifying the inputs to the attention mechanism. Each task's prefix is tiny (hundreds of KB), making it trivial to store and swap. Prefix Tuning works particularly well for generation tasks like summarisation and translation.

#### Cons
[seriously] The limited number of parameters means Prefix Tuning has less capacity than LoRA 👉 'loh-rah' or adapters. On complex tasks that require significant behavioural changes, it may underperform. The prefix tokens also eat into your effective context window — if you use a prefix of length 20, that's 20 fewer tokens available for actual input. Training can be finicky without the reparametrisation MLP. And because the prefix vectors don't correspond to real tokens, they're harder to interpret than weight-based methods.

[warmly] Now let's look at an even simpler variant: Prompt Tuning!`
        },
        // Slide D — Config & Tools
        {
          id: 23,
          title: '5. Prefix Tuning — Config & Tools',
          icon: { name: 'duo-sliders' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '1.8', textAlign: 'left', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" duration={0.7} delay={0.1}>
                <h4 style={{ color: '#ffd700' }}>Key Hyperparameters</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
                  <thead><tr style={{ borderBottom: '1px solid #555' }}>
                    <th style={{ textAlign: 'left', padding: '6px' }}>Param</th>
                    <th style={{ textAlign: 'left', padding: '6px' }}>Default</th>
                    <th style={{ textAlign: 'left', padding: '6px' }}>Notes</th>
                  </tr></thead>
                  <tbody>
                    <tr><td style={{ padding: '6px' }}>Prefix Length</td><td style={{ padding: '6px' }}>20–30</td><td style={{ padding: '6px' }}>Longer = more capacity but less context</td></tr>
                    <tr><td style={{ padding: '6px' }}>Reparametrisation</td><td style={{ padding: '6px' }}>MLP</td><td style={{ padding: '6px' }}>Discarded after training</td></tr>
                    <tr><td style={{ padding: '6px' }}>MLP Hidden</td><td style={{ padding: '6px' }}>512</td><td style={{ padding: '6px' }}>For the reparam bottleneck</td></tr>
                    <tr><td style={{ padding: '6px' }}>LR</td><td style={{ padding: '6px' }}>3e-4</td><td style={{ padding: '6px' }}>Higher LR than full FT</td></tr>
                    <tr><td style={{ padding: '6px' }}>Layers</td><td style={{ padding: '6px' }}>All</td><td style={{ padding: '6px' }}>Prefix at every attention layer</td></tr>
                  </tbody>
                </table>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" duration={0.7} delay={0.4}>
                <h4 style={{ color: '#ce93d8' }}>Popular Libraries</h4>
                <GSAPStaggerList stagger={0.08} duration={0.5}>
                  <div><SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} darkModeInvert={true} /><strong>HuggingFace PEFT</strong> — PrefixTuningConfig with num_virtual_tokens</div>
                  <div><SvgIcon iconName="duo-bolt" sizeName="lg" style={iconStyle} darkModeInvert={true} /><strong>OpenDelta</strong> — prefix_model with flexible configuration</div>
                  <div><SvgIcon iconName="duo-fire" sizeName="lg" style={iconStyle} darkModeInvert={true} /><strong>LLM-Adapters</strong> — unified framework supporting prefix tuning</div>
                </GSAPStaggerList>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 5. Prefix Tuning — Config & Tools
[lecture] Here are the practical details for Prefix Tuning.

#### Key Hyperparameters
The **prefix length** is the main knob. Start with 20 virtual tokens; increase to 30 or more for complex tasks, but be mindful of the context window trade-off. The reparametrisation MLP during training typically uses a hidden size of 512. The learning rate can be higher than full FT — around 3e-4 — because the parameter space is small and well-conditioned.

#### Libraries
[conversational] HuggingFace PEFT 👉 'peft' supports Prefix Tuning via PrefixTuningConfig. You set num_virtual_tokens, the encoder hidden size, and you're done. OpenDelta and LLM-Adapters offer alternative implementations with more flexibility.

#### Quick-Start Hint
PrefixTuningConfig(task_type="CAUSAL_LM", num_virtual_tokens=20). Apply it with get_peft_model and train normally. The saved adapter will be a few hundred KB.

[energetic] Last but not least — let's cover Prompt Tuning, the simplest PEFT method of them all!`
        },
      ],
    },

    // ─── GROUP 7 — Technique 6: Prompt Tuning ───────────────────────────
    {
      id: 'technique-6-prompt-tuning',
      title: '6. Prompt Tuning',
      slides: [
        // Slide A — Overview
        {
          id: 24,
          title: '6. Prompt Tuning — Overview',
          icon: { name: 'duo-message' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '2', textAlign: 'left', color: '#fff' }}>
              <GSAPAnimated animation="bounceIn" duration={0.9} delay={0.1}>
                <h4 style={{ color: '#4fc3f7' }}>
                  Definition
                  <MermaidPopover
                    title="Prompt Tuning — Core Idea"
                    diagram={`graph LR
    A["Learnable Soft<br/>Prompt Embeddings"] --> B["Prepend to<br/>Input Embeddings"]
    B --> C["Frozen Model<br/>Forward Pass"]
    C --> D["Task Output"]

    style A fill:#ffd700,color:#000
    style B fill:#4fc3f7,color:#000
    style C fill:#e1bee7,color:#000
    style D fill:#81c784,color:#000`}
                  />
                </h4>
                <p><strong>Prompt Tuning</strong> — prepend a small set of learnable embedding vectors to the model input. Unlike Prefix Tuning, these soft tokens are only added at the <em>input layer</em>, not at every attention layer.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.3}>
                <h4 style={{ color: '#81c784' }}>When to Use</h4>
                <p>Maximum simplicity and minimal overhead. Works best with very large models (100B+) where a few soft tokens can steer the model effectively. Also ideal for multi-task inference at scale.</p>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" duration={0.7} delay={0.5}>
                <h4 style={{ color: '#ffd700' }}>Key Intuition</h4>
                <p>Like prompt engineering, but instead of searching for the right words, you let gradient descent <strong>learn</strong> the perfect continuous prompt. No model weights change at all.</p>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 6. Prompt Tuning — Overview
[cheerfully] We've arrived at the simplest PEFT 👉 'peft' method: **Prompt Tuning**, proposed by Lester, Al-Rfou, and Constant at Google in 2021.

#### What Is It?
[storytelling] Imagine you're trying to get a colleague to write a report in a specific style. Instead of retraining them (full FT), sending them to a workshop (adapters), or hiring a coach to guide their every thought (prefix tuning), you just hand them a perfectly crafted prompt. Prompt Tuning does exactly this, but instead of human-readable text, the "prompt" is a set of continuous embeddings that gradient descent optimises for you.

#### The Simplicity
These learnable embeddings are prepended to the input embedding layer only — the model is completely frozen. It's the most minimal modification you can make to a model's behaviour. Each prompt adds maybe 10,000–100,000 parameters total.

#### When Should You Pick This?
[conversational] Prompt Tuning works best with very large models — the original paper showed that at 10B+ parameters, prompt tuning matches full fine-tuning quality. For smaller models, it tends to underperform. It's also great for multi-task serving at scale: each task's soft prompt is just a few kilobytes.

Let's see how it works in detail.`
        },
        // Slide B — How It Works
        {
          id: 25,
          title: '6. Prompt Tuning — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '1.8', textAlign: 'left', color: '#fff' }}>
              <h4 style={{ color: '#4fc3f7' }}>
                Step-by-Step
                <MermaidPopover
                  title="Prompt Tuning — Data Flow"
                  diagram={`graph TD
    A["Learnable Embeddings<br/>(n virtual tokens)"] --> B["Concat with<br/>Input Embeddings"]
    B --> C["Frozen Transformer<br/>Layers 1..L"]
    C --> D["Output Logits"]
    D --> E["Loss & Backprop<br/>(only through soft prompt)"]

    style A fill:#ffd700,color:#000
    style B fill:#4fc3f7,color:#000
    style C fill:#e1bee7,color:#000
    style E fill:#ffcdd2,color:#000`}
                />
              </h4>
              <GSAPStaggerList stagger={0.12} duration={0.6}>
                <div><strong style={{ color: '#ffd700' }}>1.</strong> Initialise n learnable vectors of dimension d_model (randomly or from vocab embeddings).</div>
                <div><strong style={{ color: '#ffd700' }}>2.</strong> At input, concatenate: [soft_prompt | input_tokens] → embedding layer.</div>
                <div><strong style={{ color: '#ffd700' }}>3.</strong> Run the frozen model forward over the concatenated sequence.</div>
                <div><strong style={{ color: '#ffd700' }}>4.</strong> Compute task loss; backpropagate gradients only to the soft prompt vectors.</div>
                <div><strong style={{ color: '#ffd700' }}>5.</strong> Save the trained soft prompt (~40 KB for 20 tokens). Done!</div>
              </GSAPStaggerList>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 6. Prompt Tuning — How It Works
[lecture] Prompt Tuning is elegantly simple. Let me walk you through it.

#### Initialisation
You create a small set of learnable embedding vectors — typically 20 to 100 — each with the same dimension as the model's token embeddings. You can initialise them randomly, but a better strategy is to initialise from existing vocabulary embeddings (using class labels or task-related words as seeds). This gives the optimiser a better starting point.

#### The Forward Pass
[conversational] At each training step, your soft prompt embeddings are concatenated before the input token embeddings. The combined sequence flows through the frozen transformer as if the soft tokens were just ordinary input tokens. The model doesn't know the difference — it just sees a slightly longer sequence.

#### Gradient Flow
Only the soft prompt vectors receive gradients. The entire model is frozen. This means your optimizer state is minuscule — just n × d_model parameters. For a model with d_model=4096 and n=20 tokens, that's 80K parameters — about 160 KB of floats.

#### The Result
[confidently] After training, you save just the soft prompt vectors. Each task adapter is literally a few kilobytes. At inference, you prepend them to the input and do a normal forward pass.

Let's look at the trade-offs.`
        },
        // Slide C — Pros & Cons
        {
          id: 26,
          title: '6. Prompt Tuning — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '1.8', color: '#fff' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <GSAPAnimated animation="slideInLeft" duration={0.7} delay={0.1}>
                  <div>
                    <h4 style={{ color: '#81c784' }}>✅ Pros</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div>Smallest possible parameter overhead (~10K–100K params)</div>
                      <div>No model architecture changes whatsoever</div>
                      <div>Task adapters are kilobytes — trivial to store and transfer</div>
                      <div>Matches full FT at very large model scales (100B+)</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" duration={0.7} delay={0.1}>
                  <div>
                    <h4 style={{ color: '#ffcdd2' }}>❌ Cons</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div>Under-performs on smaller models (&lt;10B parameters)</div>
                      <div>Limited expressiveness — single input-layer modification</div>
                      <div>Sensitive to prompt length and initialisation strategy</div>
                      <div>May struggle with tasks requiring deep architectural adaptation</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 6. Prompt Tuning — Pros & Cons
[conversational] Time for the final pros and cons.

#### Pros
Prompt Tuning has the smallest parameter footprint of any method we've discussed. Each task adapter is just a few kilobytes of learned embeddings. There are zero architectural changes — if your model runs, prompt tuning works. And at very large scales (100B+ parameters), the original paper showed it matches full fine-tuning quality.

#### Cons
[seriously] The elephant in the room: Prompt Tuning under-performs on smaller models. With a 7B model, you'll typically see a noticeable gap compared to LoRA 👉 'loh-rah' or full FT. The method has limited expressiveness because it only modifies the input layer — all the "steering" must propagate through dozens of frozen layers. And it can be sensitive to prompt length and how you initialise the vectors.

[warmly] Now let's bring everything together in our summary and comparison!`
        },
        // Slide D — Config & Tools
        {
          id: 27,
          title: '6. Prompt Tuning — Config & Tools',
          icon: { name: 'duo-sliders' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '1.8', textAlign: 'left', color: '#fff' }}>
              <GSAPAnimated animation="fadeIn" duration={0.7} delay={0.1}>
                <h4 style={{ color: '#ffd700' }}>Key Hyperparameters</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
                  <thead><tr style={{ borderBottom: '1px solid #555' }}>
                    <th style={{ textAlign: 'left', padding: '6px' }}>Param</th>
                    <th style={{ textAlign: 'left', padding: '6px' }}>Default</th>
                    <th style={{ textAlign: 'left', padding: '6px' }}>Notes</th>
                  </tr></thead>
                  <tbody>
                    <tr><td style={{ padding: '6px' }}>Num Tokens</td><td style={{ padding: '6px' }}>20–100</td><td style={{ padding: '6px' }}>More tokens = more capacity</td></tr>
                    <tr><td style={{ padding: '6px' }}>Init Strategy</td><td style={{ padding: '6px' }}>TEXT</td><td style={{ padding: '6px' }}>Init from vocab embeddings of class labels</td></tr>
                    <tr><td style={{ padding: '6px' }}>LR</td><td style={{ padding: '6px' }}>3e-1</td><td style={{ padding: '6px' }}>Much higher — small param space</td></tr>
                    <tr><td style={{ padding: '6px' }}>Epochs</td><td style={{ padding: '6px' }}>3–10</td><td style={{ padding: '6px' }}>Needs more epochs than LoRA</td></tr>
                    <tr><td style={{ padding: '6px' }}>Model Scale</td><td style={{ padding: '6px' }}>&gt; 10B</td><td style={{ padding: '6px' }}>Matches full FT only at scale</td></tr>
                  </tbody>
                </table>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" duration={0.7} delay={0.4}>
                <h4 style={{ color: '#ce93d8' }}>Popular Libraries</h4>
                <GSAPStaggerList stagger={0.1} duration={0.5}>
                  <div><SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} darkModeInvert={true} /><strong>HuggingFace PEFT</strong> — PromptTuningConfig with TEXT init</div>
                  <div><SvgIcon iconName="duo-bolt" sizeName="lg" style={iconStyle} darkModeInvert={true} /><strong>OpenPrompt</strong> — research framework for prompt-based learning</div>
                  <div><SvgIcon iconName="duo-fire" sizeName="lg" style={iconStyle} darkModeInvert={true} /><strong>OpenDelta</strong> — unified delta-tuning with soft prompt support</div>
                </GSAPStaggerList>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### 6. Prompt Tuning — Config & Tools
[lecture] Here's the practical setup for Prompt Tuning.

#### Key Hyperparameters
The number of soft tokens is the main lever — start with 20 and scale up to 100 for harder tasks. Initialisation strategy matters: initialising from real vocabulary embeddings (TEXT mode) consistently outperforms random init. The learning rate is surprisingly high — around 0.3 — because the parameter space is so small that you need large steps to make progress. You'll also need more training epochs than LoRA 👉 'loh-rah' (3–10) because each step changes so few parameters.

#### Libraries
[conversational] HuggingFace PEFT 👉 'peft' supports Prompt Tuning via PromptTuningConfig. Set prompt_tuning_init to "TEXT" and provide your init text. OpenPrompt from Tsinghua is a research-oriented framework with more flexibility for prompt-based learning experiments.

#### Quick-Start Hint
PromptTuningConfig(task_type="CAUSAL_LM", num_virtual_tokens=20, prompt_tuning_init="TEXT", prompt_tuning_init_text="Classify the sentiment"). Three lines and you're training.

[energetic] Now let's bring it all together with a comprehensive comparison cheat sheet!`
        },
      ],
    },

    // ─── GROUP 8 — Summary ──────────────────────────────────────────────
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        // Slide 1 — Cheat Sheet
        {
          id: 28,
          title: 'Cheat Sheet — Technique Comparison',
          icon: { name: 'duo-table' },
          content: (
            <div style={{ fontSize: '1rem', padding: '20px', lineHeight: '1.6', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" duration={0.9} delay={0.1}>
                <h4 style={{ color: '#ffd700' }}>
                  Decision Table
                  <MermaidPopover
                    title="Decision Flow"
                    diagram={`graph TD
    A["Need to fine-tune<br/>an LLM?"] -->|"Unlimited budget"| B["Full Fine-Tuning"]
    A -->|"Single GPU"| C{"Have 24GB+?"}
    C -->|"Yes"| D["LoRA"]
    C -->|"Only 16GB"| E["QLoRA"]
    A -->|"Multi-task<br/>serving"| F{"Model scale?"}
    F -->|"< 10B"| G["Adapters"]
    F -->|"> 10B"| H["Prefix / Prompt<br/>Tuning"]

    style A fill:#ffd700,color:#000
    style B fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#e1bee7,color:#000
    style G fill:#ffcdd2,color:#000
    style H fill:#81c784,color:#000`}
                  />
                </h4>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" duration={0.7} delay={0.3}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #555', color: '#ffd700' }}>
                      <th style={{ textAlign: 'left', padding: '8px' }}>Technique</th>
                      <th style={{ textAlign: 'center', padding: '8px' }}>Memory</th>
                      <th style={{ textAlign: 'center', padding: '8px' }}>Compute</th>
                      <th style={{ textAlign: 'center', padding: '8px' }}>Data Needed</th>
                      <th style={{ textAlign: 'left', padding: '8px' }}>Best Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '8px' }}>Full FT</td>
                      <td style={{ textAlign: 'center', padding: '8px', color: '#ffcdd2' }}>Very High</td>
                      <td style={{ textAlign: 'center', padding: '8px', color: '#ffcdd2' }}>Very High</td>
                      <td style={{ textAlign: 'center', padding: '8px', color: '#ffcdd2' }}>10k+</td>
                      <td style={{ padding: '8px' }}>Max quality, enough budget</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '8px' }}>LoRA</td>
                      <td style={{ textAlign: 'center', padding: '8px', color: '#81c784' }}>Moderate</td>
                      <td style={{ textAlign: 'center', padding: '8px', color: '#81c784' }}>Moderate</td>
                      <td style={{ textAlign: 'center', padding: '8px', color: '#ffd700' }}>1k–10k</td>
                      <td style={{ padding: '8px' }}>Best overall trade-off</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '8px' }}>QLoRA</td>
                      <td style={{ textAlign: 'center', padding: '8px', color: '#81c784' }}>Low</td>
                      <td style={{ textAlign: 'center', padding: '8px', color: '#ffd700' }}>Moderate+</td>
                      <td style={{ textAlign: 'center', padding: '8px', color: '#ffd700' }}>1k–10k</td>
                      <td style={{ padding: '8px' }}>Consumer GPU fine-tuning</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '8px' }}>Adapters</td>
                      <td style={{ textAlign: 'center', padding: '8px', color: '#81c784' }}>Moderate</td>
                      <td style={{ textAlign: 'center', padding: '8px', color: '#81c784' }}>Moderate</td>
                      <td style={{ textAlign: 'center', padding: '8px', color: '#ffd700' }}>1k–10k</td>
                      <td style={{ padding: '8px' }}>Multi-task modularity</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '8px' }}>Prefix Tuning</td>
                      <td style={{ textAlign: 'center', padding: '8px', color: '#81c784' }}>Low</td>
                      <td style={{ textAlign: 'center', padding: '8px', color: '#81c784' }}>Low</td>
                      <td style={{ textAlign: 'center', padding: '8px', color: '#81c784' }}>500+</td>
                      <td style={{ padding: '8px' }}>Generation tasks (NLG)</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '8px' }}>Prompt Tuning</td>
                      <td style={{ textAlign: 'center', padding: '8px', color: '#81c784' }}>Very Low</td>
                      <td style={{ textAlign: 'center', padding: '8px', color: '#81c784' }}>Very Low</td>
                      <td style={{ textAlign: 'center', padding: '8px', color: '#81c784' }}>500+</td>
                      <td style={{ padding: '8px' }}>Large-scale multi-task</td>
                    </tr>
                  </tbody>
                </table>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Cheat Sheet — Technique Comparison
[confidently] Here's your at-a-glance decision table. Bookmark this slide — it's the one you'll come back to most.

#### Reading the Table
The table compares all six techniques across four dimensions. **Memory cost** is how much GPU memory you need during training. **Compute cost** is the training time and FLOPs. **Data needed** is the minimum dataset size for good results. And **best use case** tells you when to reach for each technique.

#### The Quick Decision
[conversational] If you have unlimited budget and lots of data, Full Fine-Tuning gives the best raw quality. For most practical scenarios, **LoRA** 👉 'loh-rah' is the sweet spot — moderate memory, good quality, tiny adapters. If you're on a consumer GPU, **QLoRA** 👉 'cue-loh-rah' lets you punch above your weight class. **Adapters** are the choice when you need modular, composable task heads. **Prefix Tuning** and **Prompt Tuning** are the lightweight options for when you need extreme efficiency or are working with very large models.

#### Rule of Thumb
[seriously] Start with LoRA. Only move to full FT if you have strong evidence that LoRA's capacity is insufficient for your task. Move to QLoRA if memory is the bottleneck. Consider Prefix or Prompt Tuning only at very large model scales or when you need hundreds of task-specific variants.

[warmly] Let's wrap up with the key takeaways.`
        },
        // Slide 2 — Key Takeaways
        {
          id: 29,
          title: 'Key Takeaways',
          icon: { name: 'duo-trophy' },
          content: (
            <div style={{ fontSize: '1.2rem', padding: '30px', lineHeight: '2', textAlign: 'left', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" duration={0.9} delay={0.1}>
                <h4 style={{ color: '#ffd700' }}>Top 5 Actionable Takeaways</h4>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
                <div style={{ marginBottom: '0.8rem' }}>
                  <SvgIcon iconName="duo-circle-1" sizeName="lg" style={{ ...iconStyle, color: '#4fc3f7' }} darkModeInvert={true} />
                  <strong>Default to LoRA</strong> — it's the best trade-off for 90% of fine-tuning tasks. Rank 16, alpha 32, q+v projections.
                </div>
                <div style={{ marginBottom: '0.8rem' }}>
                  <SvgIcon iconName="duo-circle-2" sizeName="lg" style={{ ...iconStyle, color: '#81c784' }} darkModeInvert={true} />
                  <strong>Use QLoRA on consumer GPUs</strong> — NF4 + LoRA lets you train 7B on 16 GB and 70B on 48 GB.
                </div>
                <div style={{ marginBottom: '0.8rem' }}>
                  <SvgIcon iconName="duo-circle-3" sizeName="lg" style={{ ...iconStyle, color: '#ce93d8' }} darkModeInvert={true} />
                  <strong>Reserve Full FT for high-stakes scenarios</strong> — when you have both abundant data and compute budget.
                </div>
                <div style={{ marginBottom: '0.8rem' }}>
                  <SvgIcon iconName="duo-circle-4" sizeName="lg" style={{ ...iconStyle, color: '#ffd700' }} darkModeInvert={true} />
                  <strong>Consider Prefix / Prompt Tuning at scale</strong> — they shine at 10B+ params and multi-task serving.
                </div>
                <div style={{ marginBottom: '0.8rem' }}>
                  <SvgIcon iconName="duo-circle-5" sizeName="lg" style={{ ...iconStyle, color: '#ffcdd2' }} darkModeInvert={true} />
                  <strong>Always evaluate on held-out data</strong> — no technique matters if you can't measure quality.
                </div>
              </GSAPStaggerList>
              <GSAPAnimated animation="fadeIn" duration={0.7} delay={1.0}>
                <div style={{ marginTop: '1rem', textAlign: 'center', color: '#b0bec5' }}>
                  <p>Questions? Reach out at <a href="https://niisar.com" target="_blank" style={{ color: '#4fc3f7' }}>niisar.com</a></p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          backgroundColor: '#1a1a2e',
          notes: `### Key Takeaways
[warmly] Let's wrap up with five actionable takeaways you can apply immediately.

#### Takeaway 1: Default to LoRA
[confidently] Unless you have a specific reason not to, start with LoRA 👉 'loh-rah'. It's the best balance of quality, efficiency, and simplicity. Use rank 16, alpha 32, target the query and value projections, and you'll get excellent results on most tasks. If quality isn't where you need it, increase the rank or add more target modules before jumping to full FT.

#### Takeaway 2: QLoRA for Consumer GPUs
QLoRA 👉 'cue-loh-rah' is a game-changer for accessibility. With NF4 quantisation, you can fine-tune a 7B model on a 16 GB GPU or a 70B model on a single 48 GB A100. The quality gap versus fp16 LoRA is minimal.

#### Takeaway 3: Reserve Full FT for High Stakes
Full fine-tuning is still the king of quality, but it's overkill for most scenarios. Save it for production models where you have abundant data, compute budget, and the stakes justify the cost.

#### Takeaway 4: Prefix and Prompt Tuning at Scale
[lecture] These lighter methods become increasingly competitive as model size grows. If you're working with 10B+ parameter models and need to serve hundreds of task variants, they're worth evaluating.

#### Takeaway 5: Always Evaluate
[seriously] No fine-tuning technique matters if you can't measure the results. Always hold out evaluation data, track metrics throughout training, and compare against your baseline.

[cheerfully] Thank you for joining this deep dive into LLM fine-tuning techniques! Go build something amazing.`
        },
      ],
    },
  ],
};
