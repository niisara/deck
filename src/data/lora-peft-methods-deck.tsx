import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const loraPeftMethodsDeck: Deck = {
  id: 'lora-peft-methods',
  name: '5 LoRA & PEFT Methods',
  description: 'A deep dive into LoRA, QLoRA, IA³, DoRA, and LoftQ for efficient fine-tuning',
  category: 'Fine Tuning',
  theme: 'moon',
  cardClassName: 'glass-morphism',
  cardStyle: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80)',
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
          title: '5 LoRA & PEFT Methods',
          backgroundImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
          content: (
            <div style={{ color: '#fff' }}>
              <GSAPAnimated animation="rotateIn" duration={1.2}>
                <div style={{ fontSize: '1.5rem', color: '#4fc3f7' }}>
                  <SvgIcon iconName="duo-microchip" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  LoRA, QLoRA, IA³, DoRA &amp; LoftQ — Efficient Fine-Tuning Deep Dive
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" duration={0.8} delay={0.3}>
                <div style={{ fontSize: '1.2rem', color: '#81c784', lineHeight: '2' }}>
                  <div>
                    <SvgIcon iconName="duo-users-group" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Audience:</strong> ML engineers, researchers, fine-tuning practitioners
                  </div>
                  <div>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>What you&apos;ll get:</strong> 5 PEFT 👉 &apos;peft&apos; methods, when to use them, config tips, pros/cons
                  </div>
                  <div>
                    <SvgIcon iconName="duo-circle-info" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Note:</strong> Practical and visual — no heavy math
                  </div>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" duration={0.8} delay={0.6}>
                <div>
                  <p><strong>Prepared by:</strong> Nisar A</p>
                  <p><a href="https://niisar.com" target="_blank" rel="noreferrer">niisar.com</a></p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 5 LoRA & PEFT Methods
[cheerfully] Welcome everyone! Today we are diving into one of the most practical and exciting areas of modern machine learning: parameter-efficient fine-tuning, or PEFT 👉 'peft'.

#### What Is PEFT?
Training a large language model — LLM 👉 'el-el-em' — from scratch costs millions of dollars. But what if you could adapt a pretrained model to your specific task by training only a tiny fraction of its weights? That is exactly what PEFT methods do. Think of it like adding a small sticky note to a textbook instead of rewriting the whole book.

#### Who Is This For?
This deck is for ML engineers who want to fine-tune large models on limited hardware, researchers exploring efficient adaptation, and practitioners shipping production models on consumer GPUs.

#### What You Will Learn
We cover five techniques: LoRA 👉 'loh-rah', QLoRA 👉 'cue-loh-rah', IA³, DoRA, and LoftQ. For each we look at the core idea, how it works step by step, the tradeoffs, and practical configuration.

[energetic] Let us get started with an overview of all five techniques!`,
        },
        {
          id: 2,
          title: 'Overview: 5 PEFT Techniques',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'left', color: '#fff' }}>
              <h4>
                Technique Categories
                <MermaidPopover
                  title="PEFT Technique Landscape"
                  diagram={`graph TB
    A[5 PEFT Techniques] --> B[Low-Rank Adapters]
    A --> C[Scale-Based]
    A --> D[Quantization-Aware]
    B --> B1[LoRA]
    B --> B2[DoRA]
    C --> C1[IA3]
    D --> D1[QLoRA]
    D --> D2[LoftQ]
    style A fill:#ffd700,color:#000
    style B fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#e1bee7,color:#000`}
                />
              </h4>
              <GSAPStaggerList stagger={0.1} duration={0.7}>
                <div><span style={{ fontWeight: 'bold', color: '#4fc3f7', marginRight: '0.5rem' }}>1</span><strong>LoRA</strong> — Low-Rank Adaptation: inject trainable rank-r matrices alongside frozen weights</div>
                <div><span style={{ fontWeight: 'bold', color: '#4fc3f7', marginRight: '0.5rem' }}>2</span><strong>QLoRA</strong> — Quantized LoRA: run LoRA on a 4-bit quantized base model to fit on consumer GPUs</div>
                <div><span style={{ fontWeight: 'bold', color: '#4fc3f7', marginRight: '0.5rem' }}>3</span><strong>IA³</strong> — Infused Adapter: learn tiny scale vectors that multiply key, value, and FFN activations</div>
                <div><span style={{ fontWeight: 'bold', color: '#4fc3f7', marginRight: '0.5rem' }}>4</span><strong>DoRA</strong> — Weight-Decomposed LoRA: split weights into magnitude + direction, apply LoRA to direction only</div>
                <div><span style={{ fontWeight: 'bold', color: '#4fc3f7', marginRight: '0.5rem' }}>5</span><strong>LoftQ</strong> — LoRA-Fine-Tuning-aware Quantization: initialize LoRA via SVD on quantization residual</div>
              </GSAPStaggerList>
            </div>
          ),
          notes: `### Overview: 5 PEFT Techniques
[lecture] Before we dive into each method, let us map out the landscape.

#### The Three Families
Low-rank adapters like LoRA and DoRA inject small trainable matrices. Scale-based methods like IA³ learn only a handful of scaling vectors. Quantization-aware methods like QLoRA and LoftQ combine quantization with LoRA to maximize memory savings.

#### Why Five Methods?
Each method occupies a different point on the tradeoff curve between parameter count, memory, training speed, and final quality. Knowing all five gives you the right tool for every scenario.

Next we look at why PEFT matters in the first place.`,
        },
        {
          id: 3,
          title: 'Why PEFT Matters',
          icon: { name: 'duo-circle-info' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fff' }}>
              <h4>
                PEFT in the ML Stack
                <MermaidPopover
                  title="Full Fine-Tune vs PEFT"
                  diagram={`graph LR
    A[Pretrained LLM] --> B[Full Fine-Tune]
    A --> C[PEFT Methods]
    B --> B1[140GB+ VRAM needed]
    C --> C1[LoRA / QLoRA]
    C --> C2[IA3 / DoRA / LoftQ]
    C1 --> D[Task Adapter]
    C2 --> D
    style A fill:#4fc3f7,color:#000
    style B fill:#ffcdd2,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffd700,color:#000`}
                />
              </h4>
              <GSAPStaggerList stagger={0.1} duration={0.7}>
                <div>🔴 Full fine-tuning a 7B model requires ~140 GB VRAM — unaffordable for most teams</div>
                <div>🔴 Storing one fine-tuned copy per task multiplies storage costs linearly</div>
                <div>🔴 Catastrophic forgetting overwrites general knowledge when training on narrow data</div>
                <div>✅ PEFT trains only 0.01–1% of parameters, cutting memory by 10–100×</div>
                <div>✅ Adapters are swappable — one base model, many tasks</div>
                <div>✅ Regularization effect of small adapters reduces forgetting</div>
              </GSAPStaggerList>
            </div>
          ),
          notes: `### Why PEFT Matters
[storytelling] Imagine you have a brilliant chef — a 70-billion-parameter LLM 👉 'el-el-em'. You want them to specialise in French cuisine. Full fine-tuning says: retrain every skill they ever learned. PEFT says: just give them a small French recipe card.

#### The Real Pain Points
A 7B model in full precision needs roughly 28 GB of VRAM just to load, and 140 GB when you include optimizer states during training. Most teams simply cannot afford that per task.

#### Where PEFT Fits
PEFT sits between the pretrained model and your downstream task. It adds a thin adapter layer so you keep all the general intelligence of the base model while specialising cheaply.

[confidently] Now that we understand why PEFT matters, let us meet the first technique: LoRA 👉 'loh-rah'.`,
        },
      ],
    },
    {
      id: 'technique-1-lora',
      title: 'LoRA',
      slides: [
        {
          id: 4,
          title: 'LoRA — Overview',
          icon: { name: 'duo-layer-group' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fff' }}>
              <GSAPAnimated animation="fadeIn" duration={0.8}>
                <p><strong style={{ color: '#4fc3f7' }}>Definition:</strong> LoRA 👉 &apos;loh-rah&apos; freezes all pretrained weights and injects two small trainable matrices A and B into each target layer. The weight update is ΔW = B × A where rank r ≪ d.</p>
              </GSAPAnimated>
              <h4>
                Core Concept
                <MermaidPopover
                  title="LoRA Architecture"
                  diagram={`graph LR
    W[Original Weight W frozen] --> Out[Output]
    X[Input x] --> W
    X --> A[Matrix A r x d trainable]
    A --> B[Matrix B d x r trainable]
    B --> Scale[Scale by alpha/r]
    Scale --> Out
    style W fill:#e1bee7,color:#000
    style A fill:#ffd700,color:#000
    style B fill:#ffd700,color:#000
    style Out fill:#81c784,color:#000`}
                />
              </h4>
              <GSAPStaggerList stagger={0.1} duration={0.6}>
                <div><strong>When to use:</strong> General fine-tuning on task-specific data with moderate GPU resources</div>
                <div><strong>Key intuition:</strong> Weight updates live in a low-rank subspace — most of the useful signal can be captured with rank 8–64</div>
                <div><strong>Typical savings:</strong> 10–100× fewer trainable parameters vs full fine-tuning</div>
              </GSAPStaggerList>
            </div>
          ),
          notes: `### LoRA — Overview
[conversational] LoRA 👉 'loh-rah' is the technique that started the PEFT revolution. The insight is elegant: when you fine-tune a large model, the change in weights ΔW has a very low intrinsic rank. So instead of computing the full high-dimensional update, you approximate it with two small matrices.

#### The Core Idea
Think of it like a shortcut path in a neural network. The original highway is frozen and carries all the pretrained knowledge. LoRA adds a small dirt road alongside it — cheap to build, easy to remove, and surprisingly effective.

#### When to Use This?
Use LoRA when you have task-specific supervised data, a GPU with at least 16 GB VRAM, and you want a proven, widely-supported method.

Next we look at exactly how LoRA trains step by step.`,
        },
        {
          id: 5,
          title: 'LoRA — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fff' }}>
              <h4>
                Gradient Flow
                <MermaidPopover
                  title="LoRA Training Flow"
                  diagram={`graph TD
    Input[Input x] --> Frozen[Frozen W forward]
    Input --> A[Matrix A trainable]
    A --> B[Matrix B trainable]
    B --> Scaled[Scale by alpha/r]
    Frozen --> Add[Add outputs]
    Scaled --> Add
    Add --> Output[Layer Output]
    Output --> Loss[Loss]
    Loss --> GradAB[Gradients to A and B only]
    style Input fill:#4fc3f7,color:#000
    style Frozen fill:#e1bee7,color:#000
    style A fill:#ffd700,color:#000
    style B fill:#ffd700,color:#000
    style Output fill:#81c784,color:#000
    style GradAB fill:#ffcdd2,color:#000`}
                />
              </h4>
              <GSAPStaggerList stagger={0.1} duration={0.7}>
                <div><span style={{ color: '#ffd700' }}>Step 1:</span> Freeze all original model weights</div>
                <div><span style={{ color: '#ffd700' }}>Step 2:</span> Insert low-rank matrices A (r × d) and B (d × r) into target layers (usually Q, V projections)</div>
                <div><span style={{ color: '#ffd700' }}>Step 3:</span> Initialize A with random Gaussian, B with zeros — so ΔW starts at zero</div>
                <div><span style={{ color: '#ffd700' }}>Step 4:</span> During forward pass: output = Wx + (α/r) × BAx</div>
                <div><span style={{ color: '#ffd700' }}>Step 5:</span> Backprop only updates A and B; base weights never change</div>
                <div><span style={{ color: '#ffd700' }}>Step 6:</span> At inference, merge: W&apos; = W + (α/r) × BA — zero extra latency</div>
              </GSAPStaggerList>
            </div>
          ),
          notes: `### LoRA — How It Works
[lecture] Let us walk through LoRA 👉 'loh-rah' training step by step.

#### Initialization Trick
B is initialized to all zeros. This means at the start of training, the LoRA branch contributes nothing — the model starts exactly as the pretrained model. This is a critical stability trick.

#### The Rank Parameter
Rank r controls the expressiveness of the update. r=8 is a good default. Higher rank means more capacity but more parameters. The scaling factor alpha divided by r normalizes the contribution regardless of rank choice.

#### Merge at Inference
One beautiful property of LoRA is that A and B can be multiplied and added back to W after training. The merged model is identical in architecture to the base model — no adapter overhead at serving time.

Next: the pros and cons of LoRA.`,
        },
        {
          id: 6,
          title: 'LoRA — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" duration={0.8}>
                <div>
                  <h4 style={{ color: '#81c784' }}>✅ Pros</h4>
                  <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                    <li>10–100× fewer trainable parameters</li>
                    <li>Adapters are plug-in / plug-out</li>
                    <li>One base model serves many tasks</li>
                    <li>Mergeable — zero inference overhead</li>
                    <li>Massive community and tooling support</li>
                    <li>Works well on attention and FFN layers</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" duration={0.8}>
                <div>
                  <h4 style={{ color: '#ffcdd2' }}>❌ Cons</h4>
                  <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                    <li>Rank r must be tuned manually</li>
                    <li>Still needs full model in VRAM</li>
                    <li>Not all layers benefit equally</li>
                    <li>Quality gap vs full fine-tuning on complex tasks</li>
                    <li>Alpha/rank interaction needs care</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### LoRA — Pros & Cons
[confidently] LoRA 👉 'loh-rah' strikes an excellent balance between simplicity and effectiveness. The pros are significant: you can fine-tune a 7B model on a single 24 GB GPU and swap adapters at will. The main cons are that you still need the full model loaded, and rank selection requires some experimentation.

#### Practical Advice
For most tasks, start with r=8 and alpha=16. If the model is underfitting, double the rank. If you are memory-constrained, consider QLoRA instead.

Next: the key configuration parameters and popular libraries for LoRA.`,
        },
        {
          id: 7,
          title: 'LoRA — Config & Tools',
          icon: { name: 'duo-sliders' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" duration={0.7}>
                <h4 style={{ color: '#ffd700' }}>Key Hyperparameters</h4>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.09} duration={0.6}>
                <div><code>r</code> — rank of adapter matrices, default 8 (try 4–64)</div>
                <div><code>lora_alpha</code> — scaling factor, typically 2× rank (e.g. 16)</div>
                <div><code>target_modules</code> — which layers to adapt: <code>[&quot;q_proj&quot;, &quot;v_proj&quot;]</code> is a safe start</div>
                <div><code>lora_dropout</code> — regularization, 0.05–0.1</div>
                <div><code>bias</code> — usually <code>&quot;none&quot;</code></div>
              </GSAPStaggerList>
              <GSAPAnimated animation="fadeIn" duration={0.8} delay={0.5}>
                <h4 style={{ color: '#4fc3f7' }}>Popular Libraries</h4>
                <p>🤗 <strong>PEFT</strong> (Hugging Face) — <code>LoraConfig + get_peft_model()</code></p>
                <p>⚡ <strong>Unsloth</strong> — 2× faster LoRA training with memory optimizations</p>
                <p>🔥 <strong>LLaMA-Factory</strong> — GUI + CLI for LoRA fine-tuning</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### LoRA — Config & Tools
[energetic] Let us talk practical configuration. The PEFT 👉 'peft' library from Hugging Face makes LoRA 👉 'loh-rah' a three-line change to your existing training loop.

#### Quick-Start Hint
from peft import LoraConfig, get_peft_model. Create a LoraConfig with r=8, lora_alpha=16, target_modules for your model, then wrap your model with get_peft_model. Done — only the LoRA parameters will be in the optimizer.

#### Choosing target_modules
For transformer models, start with query and value projections. If quality is lacking, add key, output, and feed-forward layers.

Up next: QLoRA 👉 'cue-loh-rah' — LoRA on a quantized model for extreme memory savings.`,
        },
      ],
    },
    {
      id: 'technique-2-qlora',
      title: 'QLoRA',
      slides: [
        {
          id: 8,
          title: 'QLoRA — Overview',
          icon: { name: 'duo-layer-group' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fff' }}>
              <GSAPAnimated animation="fadeIn" duration={0.8}>
                <p><strong style={{ color: '#4fc3f7' }}>Definition:</strong> QLoRA 👉 &apos;cue-loh-rah&apos; quantizes the base model to 4-bit NF4 format, freezes it, then applies LoRA adapters in BF16. You get LoRA quality at a fraction of the memory cost.</p>
              </GSAPAnimated>
              <h4>
                QLoRA Architecture
                <MermaidPopover
                  title="QLoRA Architecture"
                  diagram={`graph LR
    LLM[Large LLM 70B params] --> Q[4-bit NF4 Quantize]
    Q --> Frozen[Frozen 4-bit Base]
    Frozen --> LoRA[LoRA Adapters BF16]
    LoRA --> Out[Fine-tuned Model]
    style LLM fill:#4fc3f7,color:#000
    style Q fill:#ffcdd2,color:#000
    style Frozen fill:#e1bee7,color:#000
    style LoRA fill:#ffd700,color:#000
    style Out fill:#81c784,color:#000`}
                />
              </h4>
              <GSAPStaggerList stagger={0.1} duration={0.6}>
                <div><strong>When to use:</strong> Fine-tuning 13B–70B models on a single consumer GPU (24–48 GB)</div>
                <div><strong>Key intuition:</strong> Quantization drastically shrinks the frozen model; LoRA adapters stay in full precision</div>
                <div><strong>Typical savings:</strong> A 65B model fits on a 48 GB GPU (vs 130+ GB in BF16)</div>
              </GSAPStaggerList>
            </div>
          ),
          notes: `### QLoRA — Overview
[storytelling] QLoRA 👉 'cue-loh-rah' was introduced by Tim Dettmers in 2023 and immediately made headlines. For the first time, researchers could fine-tune a 65-billion-parameter model on a single 48 GB GPU. The trick: store the base model in 4-bit, but run the LoRA adapters in full precision BF16.

#### The Core Innovation
Normal LoRA still requires the base model in 16-bit floating point. QLoRA compresses it to 4-bit NF4 (Normal Float 4), a new data type optimized for normally distributed weights. The adapters remain in BF16 so gradients stay accurate.

#### When to Use This?
Use QLoRA when you want to fine-tune a model too large for standard LoRA on your hardware, or when memory cost is the primary constraint.

Next: the step-by-step mechanics of QLoRA training.`,
        },
        {
          id: 9,
          title: 'QLoRA — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fff' }}>
              <h4>
                Memory Flow
                <MermaidPopover
                  title="QLoRA Memory Flow"
                  diagram={`graph TD
    Model[Full Precision Model] --> NF4[Quantize to NF4 4-bit]
    NF4 --> CPU[Paged CPU Offload]
    CPU --> GPU[Dequantize to BF16 on GPU]
    GPU --> Compute[Forward and Backward Pass]
    Compute --> LoRA[Update LoRA Adapters only]
    style Model fill:#4fc3f7,color:#000
    style NF4 fill:#ffcdd2,color:#000
    style CPU fill:#e1bee7,color:#000
    style GPU fill:#ffd700,color:#000
    style LoRA fill:#81c784,color:#000`}
                />
              </h4>
              <GSAPStaggerList stagger={0.09} duration={0.7}>
                <div><span style={{ color: '#ffd700' }}>Step 1:</span> Load model weights and quantize to 4-bit NF4 (Normal Float 4)</div>
                <div><span style={{ color: '#ffd700' }}>Step 2:</span> Enable paged attention with <code>max_memory</code> to prevent GPU OOM crashes</div>
                <div><span style={{ color: '#ffd700' }}>Step 3:</span> Dequantize weights on-the-fly to BF16 for each forward/backward pass</div>
                <div><span style={{ color: '#ffd700' }}>Step 4:</span> Attach LoRA adapters in BF16 on top of the frozen 4-bit base</div>
                <div><span style={{ color: '#ffd700' }}>Step 5:</span> Only LoRA A and B matrices receive gradient updates</div>
              </GSAPStaggerList>
            </div>
          ),
          notes: `### QLoRA — How It Works
[lecture] The key innovation in QLoRA 👉 'cue-loh-rah' is the combination of two ideas: 4-bit NF4 quantization and paged memory management.

#### NF4 Quantization
NF4 is a data type designed specifically for weights that follow a normal distribution. It assigns more quantization levels near zero (where most weights cluster) and fewer at the extremes. This gives better fidelity than plain INT4.

#### Paged Attention
When GPU memory fills up during training, paged attention offloads memory pages to CPU RAM automatically — similar to how an operating system handles virtual memory. This prevents out-of-memory crashes on long sequences.

Next: the tradeoffs of QLoRA.`,
        },
        {
          id: 10,
          title: 'QLoRA — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" duration={0.8}>
                <div>
                  <h4 style={{ color: '#81c784' }}>✅ Pros</h4>
                  <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                    <li>Fine-tune 65B models on 48 GB GPU</li>
                    <li>Minimal quality loss vs full LoRA</li>
                    <li>Paged attention prevents OOM crashes</li>
                    <li>Excellent open-source ecosystem</li>
                    <li>Works with most HF-compatible models</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" duration={0.8}>
                <div>
                  <h4 style={{ color: '#ffcdd2' }}>❌ Cons</h4>
                  <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                    <li>Slower training than standard LoRA (~30%)</li>
                    <li>More complex setup (bitsandbytes)</li>
                    <li>Quantization can introduce subtle errors</li>
                    <li>Dequantize overhead on every layer</li>
                    <li>Less hardware support (needs CUDA)</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### QLoRA — Pros & Cons
[conversational] QLoRA 👉 'cue-loh-rah' is remarkable value for money — or rather, for VRAM. You trade a small amount of training speed for a huge reduction in memory requirements. The quality loss compared to full BF16 LoRA is usually negligible on benchmarks.

#### When Cons Matter
The 30% slower training is real but acceptable for most workloads. The bigger concern is subtle quantization errors that accumulate over many fine-tuning steps. For very quality-sensitive applications, consider LoftQ which we cover later.

Next: QLoRA configuration and tools.`,
        },
        {
          id: 11,
          title: 'QLoRA — Config & Tools',
          icon: { name: 'duo-sliders' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" duration={0.7}>
                <h4 style={{ color: '#ffd700' }}>Key BitsAndBytes Config</h4>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.09} duration={0.6}>
                <div><code>load_in_4bit=True</code> — enable 4-bit loading</div>
                <div><code>bnb_4bit_compute_dtype=torch.bfloat16</code> — compute in BF16</div>
                <div><code>bnb_4bit_quant_type=&quot;nf4&quot;</code> — use NF4 format</div>
                <div><code>bnb_4bit_use_double_quant=True</code> — nested quantization for extra savings</div>
              </GSAPStaggerList>
              <GSAPAnimated animation="fadeIn" duration={0.8} delay={0.5}>
                <h4 style={{ color: '#4fc3f7' }}>Popular Libraries</h4>
                <p>🔢 <strong>bitsandbytes</strong> — the quantization backend</p>
                <p>🤗 <strong>PEFT + TRL</strong> — adapter management and SFT training loop</p>
                <p>🦙 <strong>Axolotl</strong> — config-file driven QLoRA fine-tuning</p>
                <p>⚡ <strong>Unsloth</strong> — optimized QLoRA kernels, up to 2× faster</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### QLoRA — Config & Tools
[energetic] Setting up QLoRA 👉 'cue-loh-rah' is a bit more involved than plain LoRA 👉 'loh-rah' but the PEFT 👉 'peft' and bitsandbytes libraries make it manageable.

#### Quick-Start Pattern
Create a BitsAndBytesConfig with the settings above. Pass it as quantization_config when loading your model with AutoModelForCausalLM.from_pretrained. Then wrap with get_peft_model using a standard LoraConfig. The model will automatically handle 4-bit storage and BF16 compute.

#### Axolotl Tip
For production QLoRA runs, Axolotl lets you specify the full configuration in a YAML file and handles all the boilerplate. It is battle-tested on thousands of fine-tuning runs.

Next up: IA³ — the ultra-lightweight PEFT 👉 'peft' approach.`,
        },
      ],
    },
    {
      id: 'technique-3-ia3',
      title: 'IA³',
      slides: [
        {
          id: 12,
          title: 'IA³ — Overview',
          icon: { name: 'duo-layer-group' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fff' }}>
              <GSAPAnimated animation="fadeIn" duration={0.8}>
                <p><strong style={{ color: '#4fc3f7' }}>Definition:</strong> IA³ (Infused Adapter by Inhibiting and Amplifying Inner Activations) learns tiny element-wise scale vectors that rescale keys, values, and feed-forward activations. No new matrix multiplications — just multiplication by a learned scalar vector.</p>
              </GSAPAnimated>
              <h4>
                IA³ Core Concept
                <MermaidPopover
                  title="IA³ Activation Scaling"
                  diagram={`graph LR
    X[Input Activation] --> ScaleK[Multiply by lk keys]
    X --> ScaleV[Multiply by lv values]
    X --> FF[Feed-Forward]
    FF --> ScaleFF[Multiply by lff]
    ScaleK --> Out[Attention Out]
    ScaleV --> Out
    ScaleFF --> FFOut[FFN Out]
    style X fill:#4fc3f7,color:#000
    style ScaleK fill:#ffd700,color:#000
    style ScaleV fill:#ffd700,color:#000
    style ScaleFF fill:#ffd700,color:#000
    style Out fill:#81c784,color:#000`}
                />
              </h4>
              <GSAPStaggerList stagger={0.1} duration={0.6}>
                <div><strong>When to use:</strong> Extremely limited compute budget, few-shot or continual learning scenarios</div>
                <div><strong>Key intuition:</strong> Scaling activations up or down lets the model specialise without changing any weights</div>
                <div><strong>Typical savings:</strong> ~0.01% of parameters — the fewest of any PEFT method</div>
              </GSAPStaggerList>
            </div>
          ),
          notes: `### IA³ — Overview
[conversational] IA³ takes minimalism to the extreme. While LoRA 👉 'loh-rah' adds small matrices, IA³ adds only vectors — one per layer per target activation. It is like adjusting the volume knobs on specific parts of the network rather than rewriting any circuits.

#### The Scaling Intuition
Each scale vector lk, lv, and lff is initialized to all ones — meaning no change at the start. During training, these vectors learn to amplify or suppress specific activation channels, effectively steering the model toward the target task.

#### When to Use This?
IA³ shines in few-shot settings where you have very little labeled data and want to avoid overfitting. It also works well for continual learning where you want minimal interference with previous tasks.

Next: how IA³ trains step by step.`,
        },
        {
          id: 13,
          title: 'IA³ — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fff' }}>
              <h4>
                IA³ Training Flow
                <MermaidPopover
                  title="IA³ Training Flow"
                  diagram={`graph TD
    Attn[Self-Attention Layer] --> K[Key Projection]
    Attn --> V[Value Projection]
    K --> ScaleK[Element-wise x lk]
    V --> ScaleV[Element-wise x lv]
    ScaleK --> AttnOut[Attention Output]
    ScaleV --> AttnOut
    FFN[Feed-Forward Layer] --> ScaleFF[Element-wise x lff]
    ScaleFF --> FFOut[FFN Output]
    AttnOut --> Loss[Loss]
    FFOut --> Loss
    Loss --> UpdateVectors[Update lk lv lff only]
    style ScaleK fill:#ffd700,color:#000
    style ScaleV fill:#ffd700,color:#000
    style ScaleFF fill:#ffd700,color:#000
    style UpdateVectors fill:#ffcdd2,color:#000`}
                />
              </h4>
              <GSAPStaggerList stagger={0.09} duration={0.7}>
                <div><span style={{ color: '#ffd700' }}>Step 1:</span> Freeze all model weights completely</div>
                <div><span style={{ color: '#ffd700' }}>Step 2:</span> For each transformer layer, create scale vectors lk (keys), lv (values), lff (FFN hidden states)</div>
                <div><span style={{ color: '#ffd700' }}>Step 3:</span> Initialize all scale vectors to ones — no change to outputs at start</div>
                <div><span style={{ color: '#ffd700' }}>Step 4:</span> Forward pass: multiply each activation by its scale vector element-wise</div>
                <div><span style={{ color: '#ffd700' }}>Step 5:</span> Backprop updates only the scale vectors; all other gradients are discarded</div>
              </GSAPStaggerList>
            </div>
          ),
          notes: `### IA³ — How It Works
[lecture] The mechanics of IA³ are beautifully simple. Three sets of learned vectors — lk for key projections, lv for value projections, and lff for feed-forward hidden states — are multiplied element-wise into the activations during the forward pass.

#### Parameter Count
For a typical 7B transformer with 32 layers, IA³ adds roughly 32 × 3 × hidden_dim parameters. For hidden_dim of 4096, that is about 400K parameters — less than 0.01% of the 7 billion base parameters.

#### Initialization to Ones
The ones initialization is critical. At the start of training the model behaves exactly as the base model, giving training stability. The scale vectors then gradually specialize.

Next: the pros and cons of IA³.`,
        },
        {
          id: 14,
          title: 'IA³ — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" duration={0.8}>
                <div>
                  <h4 style={{ color: '#81c784' }}>✅ Pros</h4>
                  <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                    <li>Fewest trainable params of any PEFT method</li>
                    <li>Lightning-fast training — minimal compute</li>
                    <li>Great for few-shot adaptation</li>
                    <li>Low risk of overfitting on small datasets</li>
                    <li>Easy to stack multiple IA³ adapters</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" duration={0.8}>
                <div>
                  <h4 style={{ color: '#ffcdd2' }}>❌ Cons</h4>
                  <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                    <li>Less expressive than LoRA for complex tasks</li>
                    <li>Smaller community and less documentation</li>
                    <li>May underfit on large, diverse datasets</li>
                    <li>Fewer tutorials and example configs available</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### IA³ — Pros & Cons
[confidently] IA³ is the right tool for a narrow but important set of problems: few-shot adaptation and ultra-low-budget fine-tuning. When you have only hundreds or low thousands of labeled examples, IA³ often matches or beats LoRA 👉 'loh-rah' because it is so much harder to overfit.

#### When Cons Matter
For large, diverse instruction-tuning datasets, IA³ may hit a ceiling. The scale vectors simply do not have enough capacity to represent complex task shifts. In those cases LoRA or DoRA are better choices.

Next: IA³ configuration and tools.`,
        },
        {
          id: 15,
          title: 'IA³ — Config & Tools',
          icon: { name: 'duo-sliders' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" duration={0.7}>
                <h4 style={{ color: '#ffd700' }}>Key Configuration</h4>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.09} duration={0.6}>
                <div><code>IA3Config(target_modules=[...])</code> — specify which modules to scale</div>
                <div><code>feedforward_modules=[...]</code> — list the FFN modules explicitly</div>
                <div><code>task_type=TaskType.CAUSAL_LM</code> — or SEQ_CLS, SEQ_2_SEQ_LM</div>
                <div>Use <code>get_peft_model(model, ia3_config)</code> just like LoRA</div>
              </GSAPStaggerList>
              <GSAPAnimated animation="fadeIn" duration={0.8} delay={0.5}>
                <h4 style={{ color: '#4fc3f7' }}>Libraries &amp; Resources</h4>
                <p>🤗 <strong>PEFT</strong> — IA3Config is built in to the PEFT library</p>
                <p>📄 <strong>Original paper:</strong> &quot;Few-Shot Parameter-Efficient Fine-Tuning is Better and Cheaper than In-Context Learning&quot; (Liu et al. 2022)</p>
                <p>💡 <strong>Tip:</strong> Combine IA³ with prompt tuning for even fewer parameters</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### IA³ — Config & Tools
[energetic] IA³ is implemented in the Hugging Face PEFT 👉 'peft' library via the IA3Config class. The setup is identical to LoRA — create a config, wrap your model, train.

#### Target Modules
The tricky part with IA³ is correctly specifying both target_modules (all attention and FFN layers) and feedforward_modules (only the FFN layers that need the lff vector). Check the PEFT docs for model-specific examples.

Next: DoRA — weight-decomposed LoRA that bridges the quality gap between LoRA and full fine-tuning.`,
        },
      ],
    },
    {
      id: 'technique-4-dora',
      title: 'DoRA',
      slides: [
        {
          id: 16,
          title: 'DoRA — Overview',
          icon: { name: 'duo-layer-group' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fff' }}>
              <GSAPAnimated animation="fadeIn" duration={0.8}>
                <p><strong style={{ color: '#4fc3f7' }}>Definition:</strong> DoRA (Weight-Decomposed Low-Rank Adaptation) decomposes each pretrained weight into a magnitude component m and a direction component V, then applies LoRA only to the direction while learning magnitude separately.</p>
              </GSAPAnimated>
              <h4>
                DoRA Decomposition
                <MermaidPopover
                  title="DoRA Weight Decomposition"
                  diagram={`graph LR
    W[Pretrained Weight W] --> Mag[Magnitude m]
    W --> Dir[Direction V]
    Dir --> LoRA[LoRA delta BA]
    Mag --> Scale[Scale x]
    LoRA --> Norm[Normalize V plus delta]
    Norm --> Scale
    Scale --> Out[Output]
    style W fill:#4fc3f7,color:#000
    style Mag fill:#ffd700,color:#000
    style Dir fill:#e1bee7,color:#000
    style LoRA fill:#ffcdd2,color:#000
    style Out fill:#81c784,color:#000`}
                />
              </h4>
              <GSAPStaggerList stagger={0.1} duration={0.6}>
                <div><strong>When to use:</strong> Tasks requiring quality closer to full fine-tuning; code generation, complex reasoning</div>
                <div><strong>Key intuition:</strong> Separating magnitude from direction gives finer control over how weights evolve during training</div>
                <div><strong>Typical savings:</strong> Similar param count to LoRA but noticeably better quality on hard tasks</div>
              </GSAPStaggerList>
            </div>
          ),
          notes: `### DoRA — Overview
[storytelling] DoRA was introduced in 2024 and answered a nagging question: why does LoRA 👉 'loh-rah' still fall short of full fine-tuning on complex tasks? The answer turned out to be that LoRA updates magnitude and direction together in a coupled way that differs from how full fine-tuning updates weights.

#### The Insight
When you decompose a weight matrix into its magnitude (how large each column is) and its direction (which way each column points), you can update them independently. DoRA applies LoRA to the direction and learns a separate scalar for the magnitude, giving it the flexibility of full fine-tuning with the efficiency of LoRA.

#### When to Use This?
Use DoRA when LoRA quality is not good enough for your task — especially on instruction following, code generation, and complex reasoning benchmarks.

Next: how DoRA trains step by step.`,
        },
        {
          id: 17,
          title: 'DoRA — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fff' }}>
              <h4>
                DoRA Training Steps
                <MermaidPopover
                  title="DoRA Training Flow"
                  diagram={`graph TD
    W[Pretrained W] --> ColNorm[Column Norm gives m]
    W --> DirV[Normalize gives V]
    DirV --> LoRADelta[LoRA delta = BA]
    LoRADelta --> VPlusDelta[V plus delta]
    VPlusDelta --> NormDir[Normalize direction]
    ColNorm --> ScaleMag[Scale by m trainable]
    NormDir --> ScaleMag
    ScaleMag --> Output[Output]
    style W fill:#4fc3f7,color:#000
    style ColNorm fill:#ffd700,color:#000
    style LoRADelta fill:#ffcdd2,color:#000
    style Output fill:#81c784,color:#000`}
                />
              </h4>
              <GSAPStaggerList stagger={0.09} duration={0.7}>
                <div><span style={{ color: '#ffd700' }}>Step 1:</span> Decompose pretrained W — compute column norms as magnitude m and normalize columns as direction V</div>
                <div><span style={{ color: '#ffd700' }}>Step 2:</span> Freeze V and add LoRA matrices A and B to represent updates ΔV = BA</div>
                <div><span style={{ color: '#ffd700' }}>Step 3:</span> Keep m as a trainable scalar vector (one value per column of W)</div>
                <div><span style={{ color: '#ffd700' }}>Step 4:</span> Forward pass: output = m × normalize(V + ΔV) × input</div>
                <div><span style={{ color: '#ffd700' }}>Step 5:</span> Backprop updates both the LoRA matrices (A, B) and the magnitude vector m</div>
              </GSAPStaggerList>
            </div>
          ),
          notes: `### DoRA — How It Works
[lecture] DoRA adds one extra step compared to LoRA 👉 'loh-rah': the weight decomposition. In practice this is done once during initialization and adds minimal overhead.

#### Why Separate Magnitude and Direction?
Full fine-tuning freely adjusts both the length and orientation of each weight column. LoRA couples them because the low-rank update changes both together. DoRA decouples them: LoRA handles the directional change, and m handles the scale. This matches the behavior of full fine-tuning more closely.

#### QDoRA
DoRA is fully compatible with QLoRA. Loading the base in 4-bit and applying DoRA on top gives QDoRA — nearly full fine-tuning quality at consumer GPU memory costs.

Next: DoRA pros and cons.`,
        },
        {
          id: 18,
          title: 'DoRA — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" duration={0.8}>
                <div>
                  <h4 style={{ color: '#81c784' }}>✅ Pros</h4>
                  <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                    <li>Better quality than LoRA on complex tasks</li>
                    <li>Closes the gap to full fine-tuning</li>
                    <li>Compatible with QLoRA (QDoRA)</li>
                    <li>Drop-in replacement — just add use_dora=True</li>
                    <li>More stable training dynamics</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" duration={0.8}>
                <div>
                  <h4 style={{ color: '#ffcdd2' }}>❌ Cons</h4>
                  <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                    <li>Slightly more compute than standard LoRA</li>
                    <li>Newer — less battle-tested in production</li>
                    <li>Small extra memory for magnitude vectors</li>
                    <li>May need rank tuning more carefully</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### DoRA — Pros & Cons
[conversational] DoRA is essentially a strict improvement over LoRA 👉 'loh-rah' for quality-sensitive tasks, at a very small extra cost. The main reason not to use it is if you are already happy with LoRA quality or need to keep things simple.

#### Production Readiness
DoRA was introduced in early 2024 and has been integrated into the PEFT 👉 'peft' library. It is gaining adoption quickly but does not yet have the years of production battle-testing that LoRA has.

Next: DoRA configuration and tools.`,
        },
        {
          id: 19,
          title: 'DoRA — Config & Tools',
          icon: { name: 'duo-sliders' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" duration={0.7}>
                <h4 style={{ color: '#ffd700' }}>Enabling DoRA</h4>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.09} duration={0.6}>
                <div>Set <code>use_dora=True</code> in your existing <code>LoraConfig</code></div>
                <div>All other LoRA hyperparameters (r, alpha, target_modules) apply unchanged</div>
                <div>For QDoRA: combine with <code>BitsAndBytesConfig</code> as in QLoRA setup</div>
                <div>Requires PEFT ≥ 0.9.0 for stable DoRA support</div>
              </GSAPStaggerList>
              <GSAPAnimated animation="fadeIn" duration={0.8} delay={0.5}>
                <h4 style={{ color: '#4fc3f7' }}>Libraries &amp; Resources</h4>
                <p>🤗 <strong>PEFT</strong> — use_dora flag in LoraConfig</p>
                <p>⚡ <strong>Unsloth</strong> — optimized DoRA kernels available</p>
                <p>📄 <strong>Paper:</strong> &quot;DoRA: Weight-Decomposed Low-Rank Adaptation&quot; (Liu et al. 2024)</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### DoRA — Config & Tools
[energetic] The best part about DoRA is that it requires a single line change to your existing LoRA 👉 'loh-rah' setup. Add use_dora=True to LoraConfig and you are done. The PEFT 👉 'peft' library handles all the weight decomposition and magnitude tracking automatically.

#### Migration Path
If you have existing LoRA checkpoints, you cannot directly convert them to DoRA — the magnitude vectors are separate. You need to retrain from scratch with use_dora=True. But the training time difference is minimal.

Next: LoftQ — the final technique, which takes a fundamentally different approach to initialization.`,
        },
      ],
    },
    {
      id: 'technique-5-loftq',
      title: 'LoftQ',
      slides: [
        {
          id: 20,
          title: 'LoftQ — Overview',
          icon: { name: 'duo-layer-group' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fff' }}>
              <GSAPAnimated animation="fadeIn" duration={0.8}>
                <p><strong style={{ color: '#4fc3f7' }}>Definition:</strong> LoftQ (LoRA-Fine-Tuning-aware Quantization) jointly optimizes the quantization and the LoRA initialization. Instead of random LoRA init, it uses SVD on the quantization residual to give LoRA a head start that compensates for quantization error.</p>
              </GSAPAnimated>
              <h4>
                LoftQ Initialization
                <MermaidPopover
                  title="LoftQ Initialization Flow"
                  diagram={`graph LR
    W[Full Precision W] --> Q[Quantize to N-bit Q]
    W --> Res[Residual W minus dequant Q]
    Q --> Res
    Res --> SVD[SVD Decomposition]
    SVD --> A[Init Matrix A]
    SVD --> B[Init Matrix B]
    Q --> Model[Quantized Model plus LoRA init]
    A --> Model
    B --> Model
    style W fill:#4fc3f7,color:#000
    style Q fill:#ffcdd2,color:#000
    style Res fill:#ffd700,color:#000
    style Model fill:#81c784,color:#000`}
                />
              </h4>
              <GSAPStaggerList stagger={0.1} duration={0.6}>
                <div><strong>When to use:</strong> When quantization error is a concern and you want the best possible quality from a quantized model</div>
                <div><strong>Key intuition:</strong> Initialize LoRA to immediately undo most of the quantization error before training even begins</div>
                <div><strong>Benefit:</strong> Faster convergence and better final quality than QLoRA on sensitive tasks</div>
              </GSAPStaggerList>
            </div>
          ),
          notes: `### LoftQ — Overview
[conversational] LoftQ asks a smart question: if we know what quantization error we are introducing, why not initialize the LoRA adapters to compensate for it immediately? That is exactly what it does.

#### The Insight
When you quantize a weight matrix from full precision to 4-bit, you introduce a residual error: W minus dequant(Q). LoftQ applies SVD (Singular Value Decomposition) to this residual and uses the result to initialize the LoRA A and B matrices. The model starts training with much less quantization damage to recover from.

#### When to Use This?
Use LoftQ when you need the absolute best quality from a quantized model — for example in production deployments where both memory and accuracy matter, or when benchmarking quantized models against full-precision baselines.

Next: how LoftQ works step by step.`,
        },
        {
          id: 21,
          title: 'LoftQ — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fff' }}>
              <h4>
                LoftQ Alternating Optimization
                <MermaidPopover
                  title="LoftQ Alternating Steps"
                  diagram={`graph TD
    FP[Full Precision W] --> Quant[Quantize to N-bit Q]
    FP --> Sub[W minus dequant Q equals residual]
    Quant --> Sub
    Sub --> SVD[SVD: AB approximates residual]
    SVD --> InitA[Initialize LoRA A]
    SVD --> InitB[Initialize LoRA B]
    InitA --> Loop[Alternating Optimization loop]
    InitB --> Loop
    Quant --> Loop
    Loop --> Train[LoRA Fine-tuning from good init]
    style FP fill:#4fc3f7,color:#000
    style Quant fill:#ffcdd2,color:#000
    style SVD fill:#ffd700,color:#000
    style Train fill:#81c784,color:#000`}
                />
              </h4>
              <GSAPStaggerList stagger={0.09} duration={0.7}>
                <div><span style={{ color: '#ffd700' }}>Step 1:</span> Load pretrained weights in full precision</div>
                <div><span style={{ color: '#ffd700' }}>Step 2:</span> Quantize to N-bit (typically 4-bit) — this introduces error</div>
                <div><span style={{ color: '#ffd700' }}>Step 3:</span> Compute residual = W (original) − dequant(Q)</div>
                <div><span style={{ color: '#ffd700' }}>Step 4:</span> Apply SVD to residual → get top-r singular vectors for A and B init</div>
                <div><span style={{ color: '#ffd700' }}>Step 5:</span> Optionally repeat steps 2–4 for T alternating iterations to refine Q and AB jointly</div>
                <div><span style={{ color: '#ffd700' }}>Step 6:</span> Fine-tune with standard LoRA training from this improved initialization</div>
              </GSAPStaggerList>
            </div>
          ),
          notes: `### LoftQ — How It Works
[lecture] The key algorithmic contribution of LoftQ is the alternating optimization loop. In each iteration, you re-quantize W minus the current LoRA approximation AB. This makes the quantized model and the LoRA init mutually compatible — they converge to a jointly optimal solution.

#### SVD for Initialization
SVD on the residual gives the best rank-r approximation of the quantization error. This is not just a random starting point — it is mathematically the closest rank-r matrix to what you need to recover.

#### Number of Iterations
Even T=1 (no alternating, just one SVD pass) substantially outperforms random LoRA initialization on quantized models. T=5 gives further improvement at modest overhead.

Next: the tradeoffs of LoftQ.`,
        },
        {
          id: 22,
          title: 'LoftQ — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', color: '#fff' }}>
              <GSAPAnimated animation="slideInLeft" duration={0.8}>
                <div>
                  <h4 style={{ color: '#81c784' }}>✅ Pros</h4>
                  <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                    <li>Better starting point — reduces quantization error from day one</li>
                    <li>Outperforms QLoRA on several benchmarks</li>
                    <li>Compatible with standard LoRA training after init</li>
                    <li>Works with 2-bit, 4-bit, and 8-bit quantization</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" duration={0.8}>
                <div>
                  <h4 style={{ color: '#ffcdd2' }}>❌ Cons</h4>
                  <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                    <li>Initialization overhead (SVD per layer)</li>
                    <li>Less mainstream — smaller community</li>
                    <li>Adds complexity to the pipeline</li>
                    <li>Benefits are most visible on aggressive (2–3 bit) quantization</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### LoftQ — Pros & Cons
[confidently] LoftQ is a niche but powerful tool. If you are running 4-bit quantized inference and the accuracy drop is hurting you, LoftQ initialization can claw back a significant portion of that loss during fine-tuning.

#### When Cons Matter
The initialization cost — running SVD on every layer — adds a preprocessing step that can take minutes for large models. For 4-bit quantization where QLoRA already performs well, the marginal gain may not justify the extra complexity. LoftQ shines most at 2-bit and 3-bit where QLoRA struggles.

Next: LoftQ configuration and tools.`,
        },
        {
          id: 23,
          title: 'LoftQ — Config & Tools',
          icon: { name: 'duo-sliders' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" duration={0.7}>
                <h4 style={{ color: '#ffd700' }}>Key Configuration</h4>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.09} duration={0.6}>
                <div><code>LoftQConfig(num_bits=4, num_iter=1)</code> — num_iter controls alternating optimization rounds</div>
                <div>Pass <code>loftq_config=LoftQConfig(...)</code> inside your <code>LoraConfig</code></div>
                <div>Set <code>init_lora_weights=&quot;loftq&quot;</code> to activate LoftQ initialization</div>
                <div>The quantized model is automatically prepared — no separate bitsandbytes setup needed</div>
              </GSAPStaggerList>
              <GSAPAnimated animation="fadeIn" duration={0.8} delay={0.5}>
                <h4 style={{ color: '#4fc3f7' }}>Libraries &amp; Resources</h4>
                <p>🤗 <strong>PEFT</strong> — LoftQConfig built in since PEFT 0.7.0</p>
                <p>📄 <strong>Paper:</strong> &quot;LoftQ: LoRA-Fine-Tuning-Aware Quantization for Large Language Models&quot; (2023)</p>
                <p>💡 <strong>Tip:</strong> Use num_iter=5 for best quality, num_iter=1 for fast initialization</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### LoftQ — Config & Tools
[energetic] LoftQ is supported in the Hugging Face PEFT 👉 'peft' library via the LoftQConfig class. The integration is clean — you simply add loftq_config to your existing LoraConfig and set init_lora_weights to loftq.

#### Quick-Start Pattern
Create a LoftQConfig with num_bits=4 and num_iter=1. Add it to LoraConfig as loftq_config. Call get_peft_model. PEFT will automatically run the SVD initialization on all target modules before training begins.

#### Choosing num_iter
For most 4-bit scenarios, num_iter=1 gives 80% of the benefit at minimal cost. Set num_iter=5 when you need maximum quality and can afford a few extra minutes of initialization time.

We have now covered all five techniques. Let us wrap up with a cheat sheet comparison.`,
        },
      ],
    },
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        {
          id: 24,
          title: 'PEFT Methods Cheat Sheet',
          icon: { name: 'duo-table-list' },
          content: (
            <div style={{ fontSize: '1rem', color: '#fff' }}>
              <GSAPAnimated animation="scaleIn" duration={0.8}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: '#4fc3f7', color: '#000' }}>
                      <th style={{ padding: '0.5rem', border: '1px solid #555' }}>Method</th>
                      <th style={{ padding: '0.5rem', border: '1px solid #555' }}>Trainable Params</th>
                      <th style={{ padding: '0.5rem', border: '1px solid #555' }}>Memory Cost</th>
                      <th style={{ padding: '0.5rem', border: '1px solid #555' }}>Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '0.5rem', border: '1px solid #555', color: '#ffd700', fontWeight: 'bold' }}>LoRA</td>
                      <td style={{ padding: '0.5rem', border: '1px solid #555' }}>0.1–1%</td>
                      <td style={{ padding: '0.5rem', border: '1px solid #555' }}>Medium (FP16 base)</td>
                      <td style={{ padding: '0.5rem', border: '1px solid #555' }}>General fine-tuning, proven baseline</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '0.5rem', border: '1px solid #555', color: '#ffd700', fontWeight: 'bold' }}>QLoRA</td>
                      <td style={{ padding: '0.5rem', border: '1px solid #555' }}>~0.1%</td>
                      <td style={{ padding: '0.5rem', border: '1px solid #555' }}>Very Low (4-bit base)</td>
                      <td style={{ padding: '0.5rem', border: '1px solid #555' }}>Consumer GPU fine-tuning of 13B–70B models</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.5rem', border: '1px solid #555', color: '#ffd700', fontWeight: 'bold' }}>IA³</td>
                      <td style={{ padding: '0.5rem', border: '1px solid #555' }}>~0.01%</td>
                      <td style={{ padding: '0.5rem', border: '1px solid #555' }}>Very Low</td>
                      <td style={{ padding: '0.5rem', border: '1px solid #555' }}>Few-shot adaptation, minimal compute budget</td>
                    </tr>
                    <tr style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                      <td style={{ padding: '0.5rem', border: '1px solid #555', color: '#ffd700', fontWeight: 'bold' }}>DoRA</td>
                      <td style={{ padding: '0.5rem', border: '1px solid #555' }}>0.1–1%</td>
                      <td style={{ padding: '0.5rem', border: '1px solid #555' }}>Medium</td>
                      <td style={{ padding: '0.5rem', border: '1px solid #555' }}>Quality-critical tasks, closing gap to full FT</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.5rem', border: '1px solid #555', color: '#ffd700', fontWeight: 'bold' }}>LoftQ</td>
                      <td style={{ padding: '0.5rem', border: '1px solid #555' }}>~0.1%</td>
                      <td style={{ padding: '0.5rem', border: '1px solid #555' }}>Low (4-bit base)</td>
                      <td style={{ padding: '0.5rem', border: '1px solid #555' }}>Quantization-robust training, aggressive quantization</td>
                    </tr>
                  </tbody>
                </table>
              </GSAPAnimated>
            </div>
          ),
          notes: `### PEFT Methods Cheat Sheet
[warmly] Let us bring everything together. This table is your decision guide whenever you need to choose a PEFT 👉 'peft' method.

#### How to Choose
Start with LoRA 👉 'loh-rah' if you have a standard GPU setup and want a battle-tested method. Move to QLoRA 👉 'cue-loh-rah' if the model is too large for your GPU. Use IA³ if you have very little labeled data. Choose DoRA if LoRA quality is not meeting your bar. Pick LoftQ if you need the best quality from a quantized model.

#### The 80% Rule
For 80% of fine-tuning tasks, LoRA with r=8 and alpha=16 will be your best first choice. It is fast, well-supported, and delivers excellent results. Only reach for the other methods when LoRA leaves something on the table.

One final slide: the key takeaways.`,
        },
        {
          id: 25,
          center: true,
          title: 'Key Takeaways',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ color: '#fff' }}>
              <GSAPStaggerList stagger={0.12} duration={0.8}>
                <div style={{ fontSize: '1.15rem', marginBottom: '0.8rem' }}>
                  <span style={{ color: '#ffd700', fontWeight: 'bold', marginRight: '0.5rem' }}>1.</span>
                  PEFT 👉 &apos;peft&apos; lets you fine-tune LLM 👉 &apos;el-el-em&apos; models on consumer hardware with minimal quality loss
                </div>
                <div style={{ fontSize: '1.15rem', marginBottom: '0.8rem' }}>
                  <span style={{ color: '#ffd700', fontWeight: 'bold', marginRight: '0.5rem' }}>2.</span>
                  Start with <strong>LoRA</strong> (r=8–16) for most tasks — it is the proven, well-supported baseline
                </div>
                <div style={{ fontSize: '1.15rem', marginBottom: '0.8rem' }}>
                  <span style={{ color: '#ffd700', fontWeight: 'bold', marginRight: '0.5rem' }}>3.</span>
                  Use <strong>QLoRA</strong> when GPU memory is your bottleneck — fine-tune 65B on 48 GB
                </div>
                <div style={{ fontSize: '1.15rem', marginBottom: '0.8rem' }}>
                  <span style={{ color: '#ffd700', fontWeight: 'bold', marginRight: '0.5rem' }}>4.</span>
                  <strong>DoRA</strong> bridges the quality gap; <strong>IA³</strong> wins on ultra-low budgets
                </div>
                <div style={{ fontSize: '1.15rem', marginBottom: '0.8rem' }}>
                  <span style={{ color: '#ffd700', fontWeight: 'bold', marginRight: '0.5rem' }}>5.</span>
                  <strong>LoftQ</strong> is your best bet when quantization accuracy matters most
                </div>
              </GSAPStaggerList>
              <GSAPAnimated animation="bounceIn" duration={0.9} delay={0.8}>
                <div style={{ marginTop: '1.5rem', padding: '1rem', backgroundColor: 'rgba(79,195,247,0.15)', borderRadius: '8px', fontSize: '1.3rem', color: '#4fc3f7', fontWeight: 'bold' }}>
                  Start with PEFT. Ship faster. Fine-tune smarter. 🚀
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Key Takeaways
[energetic] We have covered a lot of ground today. Let me leave you with five actionable takeaways you can apply starting tomorrow.

#### The Decision Framework
When you face a fine-tuning task: check your GPU memory first. If the model fits in FP16, start with LoRA 👉 'loh-rah'. If not, go to QLoRA 👉 'cue-loh-rah'. If your dataset is tiny (under 1000 examples), try IA³. If your LoRA results are not good enough, upgrade to DoRA. If quantization is hurting accuracy, add LoftQ initialization.

#### Final Thought
[warmly] The era of needing a data center to fine-tune a state-of-the-art language model is over. These five PEFT 👉 'peft' methods democratize fine-tuning for every team, every researcher, and every developer with a GPU and a use case.

Thank you for your attention! Find me at niisar.com and let us keep the conversation going.`,
        },
      ],
    },
  ],
};
