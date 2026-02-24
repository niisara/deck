import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const temporalProductionDeploymentDeck: Deck = {
  id: 'temporal-production-deployment-patterns',
  name: '11 Temporal Production Deployment Patterns',
  description: 'Worker scaling, task queue routing, versioning (Patching API), observability, multi-cluster replication, Nexus',
  category: 'Agent',
  theme: 'night',
  kenBurns: true,
  cardStyle: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  backgroundImages: [
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
  ],
  slides: [],
  slideGroups: [
    /* ================================================================
       GROUP 1 — Introduction
       ================================================================ */
    {
      id: 'introduction',
      title: 'Introduction',
      slides: [
        /* ---------- Slide 1: Title ---------- */
        {
          id: 1,
          center: true,
          title: '11 Temporal Production Deployment Patterns',
          content: (
            <div>
              <GSAPAnimated animation="rotateIn" duration={1.2}>
                <div style={{ fontSize: '1.5rem', color: '#0ea5e9' }}>
                  <SvgIcon iconName="duo-rocket" sizeName="3x" style={iconStyle} darkModeInvert={true} />
                  Production-Grade Temporal Deployments
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" duration={0.8} delay={0.3}>
                <div style={{ fontSize: '1.2rem', color: '#10b981', lineHeight: '2' }}>
                  <div>
                    <SvgIcon iconName="duo-users-group" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Audience:</strong> Platform engineers, SREs, DevOps, backend teams running Temporal at scale
                  </div>
                  <div>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>What you'll get:</strong> 6 production patterns — scaling, routing, versioning, observability, multi-cluster, Nexus
                  </div>
                  <div>
                    <SvgIcon iconName="duo-circle-info" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Note:</strong> Patterns apply to Temporal Cloud & self-hosted deployments
                  </div>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" duration={0.8} delay={0.6}>
                <div>
                  <p><strong>Prepared by:</strong> Nisar A</p>
                  <p><a href="https://niisar.com" target="_blank">niisar.com</a></p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 11 Temporal Production Deployment Patterns
[cheerfully] Welcome everyone! Today we're going to explore **6 critical production deployment patterns** for Temporal 👉 'TEM-puh-ruhl'.
#### 🎯 What's This About?
[conversational] Writing workflows in Temporal is actually the easy part. The real challenge begins when you take those workflows to **production**. How do you scale your workers when traffic spikes tenfold? How do you deploy new workflow code without breaking the thousands of workflows already running? How do you debug a workflow that's been stuck for three days?
[energetic] These are exactly the problems these 6 patterns solve. We'll cover **worker scaling**, **task queue routing**, **versioning** with the Patching API, **observability**, **multi-cluster replication**, and **Nexus** for cross-namespace orchestration.
#### 👥 Who Is This For?
[warmly] This talk is aimed at **platform engineers**, **SREs** 👉 'ess-are-EEZ', **DevOps** teams, and backend developers who are already using Temporal or planning to take it to production. We'll keep things beginner-friendly — you don't need deep Temporal experience to follow along.
[confidently] Everything we discuss applies to both **Temporal Cloud** and **self-hosted** deployments. Let's start with a high-level overview of all 6 patterns.`,
        },
        /* ---------- Slide 2: Overview ---------- */
        {
          id: 2,
          title: 'Overview — 6 Production Patterns at a Glance',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="Temporal Production Pattern Landscape"
                  diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
graph TB
    A["6 Temporal Production<br/>Deployment Patterns"] --> B["Scaling &<br/>Routing"]
    A --> C["Versioning &<br/>Observability"]
    A --> D["Distribution &<br/>Integration"]
    B --> B1["Worker Scaling"]
    B --> B2["Task Queue Routing"]
    C --> C1["Versioning<br/>Patching API"]
    C --> C2["Observability"]
    D --> D1["Multi-Cluster<br/>Replication"]
    D --> D2["Nexus"]
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style B1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style B2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style C1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style C2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style D1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style D2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px`}
                />
              </div>
              <h4>Pattern Categories</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '1.2rem', marginTop: '14px' }}>
                <GSAPStaggerList stagger={0.08} duration={0.6}>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>1</span>
                    <strong>Worker Scaling</strong> — Horizontal & vertical worker strategies
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>2</span>
                    <strong>Task Queue Routing</strong> — Sticky, priority & session queues
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>3</span>
                    <strong>Versioning (Patching)</strong> — Safe workflow code updates
                  </div>
                </GSAPStaggerList>
                <GSAPStaggerList stagger={0.08} duration={0.6}>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>4</span>
                    <strong>Observability</strong> — Metrics, tracing & alerting
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>5</span>
                    <strong>Multi-Cluster Replication</strong> — Cross-region failover
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>6</span>
                    <strong>Nexus</strong> — Cross-namespace service orchestration
                  </div>
                </GSAPStaggerList>
              </div>
            </div>
          ),
          notes: `### Overview — 6 Production Patterns at a Glance
[conversational] Alright, before we deep-dive into each pattern, let's get the big picture first.
#### 📋 The Three Categories
[lecture] We've organized these 6 patterns into three logical families. First, **Scaling & Routing** — that's **Worker Scaling** to handle throughput and **Task Queue Routing** to isolate and prioritize workloads. [storytelling] Think of these as the "muscle" of your deployment.
[conversational] Next, **Versioning & Observability** — the **Patching API** lets you deploy new workflow code safely without breaking in-flight executions, and **Observability** gives you the metrics, traces, and dashboards to know what's actually happening inside your system.
Finally, **Distribution & Integration** — **Multi-Cluster Replication** for disaster recovery and global deployments, and **Nexus** for cross-namespace service orchestration.
\`\`\`mermaid
graph TB
    A["6 Temporal Production Deployment Patterns"] --> B["Scaling & Routing"]
    A --> C["Versioning & Observability"]
    A --> D["Distribution & Integration"]
    B --> B1["Worker Scaling"]
    B --> B2["Task Queue Routing"]
    C --> C1["Versioning (Patching API)"]
    C --> C2["Observability"]
    D --> D1["Multi-Cluster Replication"]
    D --> D2["Nexus"]
    style A fill:#ffd700,color:#000
    style B fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#e1bee7,color:#000
\`\`\`
#### 🔍 Quick Observation
[pleased] Notice how these patterns build on each other. You start by scaling your workers, then route workloads to the right queues, version your code for safe deploys, add observability to see what's going on, and eventually grow into multi-cluster and Nexus patterns. It's a natural progression from prototype to production.
[energetic] Let's now talk about *why* these patterns matter — what goes wrong without them.`,
        },
        /* ---------- Slide 3: Why It Matters ---------- */
        {
          id: 3,
          title: 'Why Production Patterns Matter',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Production Deployment Pipeline"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["Dev<br/>Write Workflows"] --> B["CI/CD<br/>Version & Patch"]
    B --> C["Deploy<br/>Scale Workers"]
    C --> D["Operate<br/>Observe & Route"]
    D --> E["Scale<br/>Multi-Cluster"]
    E --> F["Integrate<br/>Nexus"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>The Problem</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Writing workflows is easy — <strong>running them at scale</strong> in production is the hard part</li>
                    <li>Unplanned deployments break running workflows with <strong>non-determinism errors</strong></li>
                    <li>Without observability, debugging a workflow stuck for 3 days is a nightmare</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Why These Patterns</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Worker scaling</strong> — handle 10x traffic without workflow starvation</li>
                    <li><strong>Task queue routing</strong> — isolate workloads, prioritize critical paths</li>
                    <li><strong>Versioning</strong> — deploy new code without breaking in-flight workflows</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Where It Fits</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Any team going from Temporal prototype to <strong>production-grade deployment</strong></li>
                    <li>Multi-region, multi-team, and high-throughput Temporal architectures</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Why Production Patterns Matter
[conversational] So why should you care about these patterns? Let's talk about what goes wrong without them.
#### 💥 The Problem
[storytelling] Picture this: your team builds a beautiful Temporal workflow. It works great in development. You deploy it to production, and on day one it handles 100 workflows. Then traffic grows — 1,000 workflows, 10,000 workflows. [cautiously] Suddenly your workers can't keep up, tasks are stuck in the queue, and workflows are timing out. That's a **scaling** problem.
[storytelling] Or imagine this: you need to add a new step to your workflow. You deploy the new code and — boom — [sighing] all your running workflows start throwing **non-determinism errors**. Temporal replays the event history, and the new code doesn't match what was recorded. That's a **versioning** problem.
[seriously] And without **observability**, you're flying blind. A workflow has been stuck for three days. Is it waiting on an activity? Is the worker down? Is there a bug? You have no idea because nobody set up metrics or alerting.
\`\`\`mermaid
flowchart LR
    A["Dev: Write Workflows"] --> B["CI/CD: Version & Patch"]
    B --> C["Deploy: Scale Workers"]
    C --> D["Operate: Observe & Route"]
    D --> E["Scale: Multi-Cluster"]
    E --> F["Integrate: Nexus"]
    style A fill:#4fc3f7,color:#000
    style C fill:#ffd700,color:#000
    style D fill:#e1bee7,color:#000
    style F fill:#81c784,color:#000
\`\`\`
#### ✅ How These Patterns Help
[confidently] **Worker scaling** lets you handle 10x traffic spikes without workflow starvation. **Task queue routing** isolates workloads so a batch-processing job doesn't starve your critical payment workflows. **Versioning** with the Patching API ensures you never break in-flight workflows during deployment.
#### 🎯 Who Needs This?
[warmly] Any team going from a Temporal prototype to a **production-grade deployment**. If you're building multi-region, multi-team, or high-throughput architectures, these patterns are your playbook.
[energetic] Let's dive into Pattern #1 — **Worker Scaling**.`,
        },
      ],
    },

    /* ================================================================
       GROUP 2 — Worker Scaling
       ================================================================ */
    {
      id: 'technique-1-worker-scaling',
      title: '1. Worker Scaling',
      slides: [
        {
          id: 4,
          title: '1. Worker Scaling — Overview',
          icon: { name: 'duo-chart-line' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is Worker Scaling?</h4>
                  <p style={{ fontSize: '0.95rem' }}>Adjusting the number and configuration of Temporal <strong>worker processes</strong> to match workload demand — horizontally (more instances) or vertically (more pollers/slots per instance).</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Worker Scaling Architecture"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    S["Temporal Server"] --> TQ["Task Queue"]
    TQ --> W1["Worker 1<br/>4 pollers · 100 slots"]
    TQ --> W2["Worker 2<br/>4 pollers · 100 slots"]
    TQ --> W3["Worker N<br/>4 pollers · 100 slots"]
    W1 --> A1["Activities"]
    W2 --> A2["Activities"]
    W3 --> A3["Activities"]
    style S fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style TQ fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style W1 fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style W2 fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style W3 fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style A1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style A2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style A3 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Key Concepts</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>MaxConcurrentActivityExecutionSize</strong> — slots per worker for activities</li>
                    <li><strong>MaxConcurrentWorkflowTaskPollers</strong> — concurrent workflow task pollers</li>
                    <li>Horizontal: add more worker pods/containers; Vertical: tune poller &amp; slot counts</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.55}>
                <p style={{ fontSize: '0.95rem' }}><strong>Best for:</strong> High-throughput systems, bursty workloads, resource-intensive activities</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 1. Worker Scaling — Overview
[excited] Let's start with the most fundamental production pattern: **Worker Scaling**.
#### ⚙️ What Is Worker Scaling?
[lecture] In Temporal, **workers** are the processes that actually execute your workflow and activity code. They poll a task queue, pick up tasks, and run them. Worker scaling is about adjusting the number and configuration of these workers to match your workload demand.
[storytelling] Think of it like a restaurant kitchen. If you have one chef and 100 orders come in, food is going to be slow. You can either hire more chefs — that's **horizontal scaling** — or you can give each chef better tools and faster equipment — that's **vertical scaling** or tuning.
\`\`\`mermaid
flowchart TB
    S["Temporal Server"] --> TQ["Task Queue"]
    TQ --> W1["Worker 1"]
    TQ --> W2["Worker 2"]
    TQ --> W3["Worker N"]
    style S fill:#ffd700,color:#000
    style TQ fill:#4fc3f7,color:#000
    style W1 fill:#81c784,color:#000
    style W2 fill:#81c784,color:#000
    style W3 fill:#81c784,color:#000
\`\`\`
#### 🔑 Key Concepts
[conversational] There are two important knobs you'll tune. **MaxConcurrentActivityExecutionSize** controls how many activity tasks a single worker handles at once — these are your "slots." **MaxConcurrentWorkflowTaskPollers** controls how many concurrent pollers each worker runs to fetch tasks from the queue.
[confidently] This pattern is essential for **high-throughput systems**, **bursty workloads**, and **resource-intensive activities** like ML inference or file processing.
[energetic] Now let's see exactly how horizontal and vertical scaling work in practice.`,
        },
        {
          id: 5,
          title: '1. Worker Scaling — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Worker Scaling Flow"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    HPA["HPA / Autoscaler"] -->|"scale up"| W["Worker Pods"]
    W -->|"poll"| TQ["Task Queue"]
    TQ -->|"tasks"| W
    M["schedule_to_start_latency"] -->"|> 5s"| HPA
    style HPA fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style TQ fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style W fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style M fill:#5c1a1a,color:#fca5a5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Horizontal Scaling</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Deploy workers as <strong>stateless containers</strong> (K8s Deployment / ECS Service)</li>
                    <li>Use HPA (Horizontal Pod Autoscaler) based on <strong>schedule-to-start latency</strong></li>
                    <li>Each new worker instance polls the same task queue — Temporal distributes tasks automatically</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Vertical Scaling (Tuning)</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>WorkflowTaskPollers:</strong> 2–4 for most workloads, increase for high-throughput</li>
                    <li><strong>ActivityTaskPollers:</strong> 5–10 for IO-heavy activities</li>
                    <li><strong>MaxConcurrentActivityExecutionSize:</strong> controls backpressure per worker</li>
                    <li>Monitor <code>temporal_worker_task_slots_available</code> to tune values</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div style={{ padding: '0.7rem', background: 'rgba(14,165,233,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  💡 <strong>Rule of thumb:</strong> Start with 100 activity slots, 2 workflow pollers, 5 activity pollers per worker. Scale horizontally first, then tune vertically.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 1. Worker Scaling — How It Works
[conversational] Now let's get practical. How do you actually scale Temporal workers?
#### ⬆️ Horizontal Scaling
[confidently] The easiest way to scale is to just add more worker instances. Since Temporal workers are **stateless**, you can deploy them as Kubernetes Deployments or ECS services and scale them up and down freely.
[seriously] The key metric to watch is **schedule-to-start latency** — that's the time between when Temporal schedules a task and when a worker actually picks it up. If this number is rising, it means your workers can't keep up and you need more instances.
\`\`\`mermaid
flowchart LR
    HPA["HPA / Autoscaler"] -->|"scale up"| W["Worker Pods"]
    W -->|"poll"| TQ["Task Queue"]
    TQ -->|"tasks"| W
    M["schedule_to_start_latency"] -->|"> 5s"| HPA
    style HPA fill:#4fc3f7,color:#000
    style TQ fill:#ffd700,color:#000
    style W fill:#81c784,color:#000
    style M fill:#ffcdd2,color:#000
\`\`\`
You can set up a Kubernetes **HPA** 👉 'aitch-pee-AY' — Horizontal Pod Autoscaler — to automatically scale workers based on this metric. New worker instances start polling the same task queue, and Temporal distributes tasks across them.
#### 🔧 Vertical Scaling (Tuning)
[lecture] Once you have the right number of workers, you can fine-tune each one. Start with **2 workflow pollers** and **5 activity pollers** per worker. For high-throughput I/O-heavy activities, you might bump activity pollers up to 10. Keep **100 activity slots** as your default and adjust based on the metric \`temporal_worker_task_slots_available\`.
[confidently] The rule of thumb is: **scale horizontally first**, then tune vertically. Adding more pods is simpler and less risky than tweaking poller counts.
[energetic] Let's now weigh the pros and cons of worker scaling.`,
        },
        {
          id: 6,
          title: '1. Worker Scaling — Pros & Cons',
          icon: { name: 'duo-split' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="Worker Scaling Trade-offs"
                  diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
graph TB
    A["Worker Scaling<br/>Decision"] --> B{"Latency<br/>Spike?"}
    B -->|Yes| C["Scale Out<br/>Add Pods"]
    B -->|No| D{"Resource<br/>Waste?"}
    D -->|Yes| E["Scale In<br/>Remove Pods"]
    D -->|No| F["✅ Balanced"]
    C --> G["Tune Poller<br/>Count"]
    E --> G
    G --> H{"Sticky Cache<br/>Hit Rate?"}
    H -->|Low| I["Increase Cache<br/>Size"]
    H -->|High| F
    I --> F
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style E fill:#5c1a1a,color:#fecaca,stroke:#aaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style G fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style H fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style I fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px`}
                />
              </div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Workers are <strong>stateless</strong> — add/remove without workflow impact</li>
                    <li>Fine-grained control over <strong>resource allocation</strong> per activity type</li>
                    <li>Temporal handles task distribution — no custom load balancing needed</li>
                    <li>Kubernetes HPA integrates naturally with Temporal metrics</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Over-provisioning wastes resources; under-provisioning causes <strong>schedule-to-start latency</strong></li>
                    <li>Too many pollers per worker can overwhelm the Temporal server with <strong>poll requests</strong></li>
                    <li>CPU-bound activities need careful <strong>slot sizing</strong> to avoid thread starvation</li>
                    <li>Sticky execution cache needs tuning to balance <strong>memory vs replay cost</strong></li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 1. Worker Scaling — Pros & Cons
[conversational] Let's be honest about what works well and what can bite you with worker scaling.
#### ✅ Pros
[pleased] The biggest win is that workers are **stateless**. You can add or remove worker instances at any time without affecting running workflows. There's no data to migrate, no state to synchronize. Temporal handles task distribution automatically, so you don't need to build custom load balancers.
[confidently] You also get **fine-grained control** over resource allocation. If you have some activities that are CPU-heavy and others that are I/O-heavy, you can tune the slot counts differently for each worker pool. And Kubernetes integration is very natural — the HPA works perfectly with Temporal's Prometheus metrics.
#### ❌ Cons
[cautiously] The tricky part is getting the balance right. **Over-provisioning** wastes cloud resources and money. **Under-provisioning** causes schedule-to-start latency to spike, which means your workflows are sitting idle waiting for a worker to pick them up.
[seriously] Another gotcha: too many pollers per worker can actually overwhelm the Temporal server with **poll requests**. It's counterintuitive — you'd think more pollers means more throughput, but there's a point of diminishing returns.
CPU-bound activities need careful **slot sizing** to avoid thread starvation. And the **sticky execution cache** — which lets workers skip replays for recently-run workflows — needs tuning to balance memory usage against replay cost.
[energetic] Now let's move to Pattern #2 — **Task Queue Routing**, which takes scaling to the next level by directing different types of work to different worker pools.`,
        },
      ],
    },

    /* ================================================================
       GROUP 3 — Task Queue Routing
       ================================================================ */
    {
      id: 'technique-2-task-queue-routing',
      title: '2. Task Queue Routing',
      slides: [
        {
          id: 7,
          title: '2. Task Queue Routing — Overview',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="flipCard" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is Task Queue Routing?</h4>
                  <p style={{ fontSize: '0.95rem' }}>Directing workflow and activity tasks to <strong>specific worker pools</strong> by assigning them to different task queues — enabling workload isolation, priority handling, and session-based affinity.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.4}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Task Queue Routing Patterns"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    WF["Workflow"] --> TQ1["high-priority-queue"]
    WF --> TQ2["bulk-processing-queue"]
    WF --> TQ3["gpu-activity-queue"]
    TQ1 --> W1["Priority Workers<br/>Low latency"]
    TQ2 --> W2["Bulk Workers<br/>High throughput"]
    TQ3 --> W3["GPU Workers<br/>ML inference"]
    style WF fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style TQ1 fill:#5c1a1a,color:#fca5a5,stroke:#aaa,stroke-width:1.5px
    style TQ2 fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style TQ3 fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style W1 fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style W2 fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style W3 fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Routing Strategies</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Per-activity routing:</strong> Route specific activities to specialized worker pools</li>
                    <li><strong>Priority queues:</strong> Separate queues for critical vs. batch workflows</li>
                    <li><strong>Session queues:</strong> Pin related activities to the same worker</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.65}>
                <p style={{ fontSize: '0.95rem' }}><strong>Best for:</strong> Mixed workloads, GPU/CPU isolation, multi-tenant systems, priority-based execution</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 2. Task Queue Routing — Overview
[conversational] Now that we know how to scale workers, let's talk about **routing** — sending the right work to the right workers.
#### 🔀 What Is Task Queue Routing?
[lecture] In Temporal, every workflow and activity is assigned to a **task queue**. By default, everything goes into one queue. But you can create multiple queues and assign specific tasks to specific queues — each with its own dedicated worker pool.
[storytelling] Think of it like lanes on a highway. Instead of putting all traffic in one lane, you create an express lane for high-priority vehicles, a truck lane for heavy loads, and a regular lane for everything else. That's task queue routing.
\`\`\`mermaid
flowchart TB
    WF["Workflow"] --> TQ1["high-priority-queue"]
    WF --> TQ2["bulk-processing-queue"]
    WF --> TQ3["gpu-activity-queue"]
    TQ1 --> W1["Priority Workers"]
    TQ2 --> W2["Bulk Workers"]
    TQ3 --> W3["GPU Workers"]
    style WF fill:#ffd700,color:#000
    style TQ1 fill:#ffcdd2,color:#000
    style TQ2 fill:#4fc3f7,color:#000
    style TQ3 fill:#e1bee7,color:#000
    style W1 fill:#81c784,color:#000
    style W2 fill:#81c784,color:#000
    style W3 fill:#81c784,color:#000
\`\`\`
#### 🎯 Three Routing Strategies
[confidently] There are three main approaches. **Per-activity routing** sends specific activities to specialized workers — like routing ML inference to GPU workers. **Priority queues** separate critical workflows from batch jobs so a bulk import doesn't starve your payment processing. And **session queues** pin related activities to the same worker, which is useful when activities share local state like a downloaded file or a GPU context.
This pattern is **best for** mixed workloads, GPU/CPU isolation, **multi-tenant** systems, and priority-based execution.
[energetic] Let's look at how to implement each of these strategies.`,
        },
        {
          id: 8,
          title: '2. Task Queue Routing — How It Works',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInBottom" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Activity Routing Flow"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    WF["Workflow\n(default-queue)"] --> A1["ML Activity\ngpu-queue"]
    WF --> A2["File Activity\nio-queue"]
    WF --> A3["Email Activity\ndefault-queue"]
    style WF fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style A1 fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style A2 fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style A3 fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Activity-Level Routing</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Set <code>TaskQueue</code> on <strong>ActivityOptions</strong> to route specific activities to dedicated workers</li>
                    <li>Example: ML inference activities → <code>gpu-workers</code> queue; file processing → <code>io-workers</code> queue</li>
                    <li>Workflow itself runs on its own queue — activities fan out to specialized queues</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Worker Sessions</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Enable <code>EnableSessionWorker: true</code> to pin activities to the same worker</li>
                    <li>Use for activities that share <strong>local state</strong> — file downloads, GPU context, DB connections</li>
                    <li>Session ID ties related activities together for the session lifetime</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.6}>
                <div style={{ padding: '0.7rem', background: 'rgba(16,185,129,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  🎯 <strong>Pattern:</strong> Use dynamic task queue names (e.g., <code>{`tenant-\${tenantId}`}</code>) for multi-tenant isolation — each tenant gets its own worker pool.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 2. Task Queue Routing — How It Works
[conversational] Let's get into the implementation details of task queue routing.
#### 📋 Activity-Level Routing
[lecture] The simplest form of routing is at the **activity level**. When you call an activity from your workflow, you can specify which task queue it should run on using the \`TaskQueue\` option in your activity options.
[storytelling] For example, you might have your main workflow running on a \`default-queue\`, but route ML inference activities to a \`gpu-workers\` queue and file processing to an \`io-workers\` queue. The workflow itself stays on its queue — the activities fan out to specialized queues.
\`\`\`mermaid
flowchart LR
    WF["Workflow (default-queue)"] --> A1["ML Activity \u2192 gpu-queue"]
    WF --> A2["File Activity \u2192 io-queue"]
    WF --> A3["Email Activity \u2192 default-queue"]
    style WF fill:#ffd700,color:#000
    style A1 fill:#e1bee7,color:#000
    style A2 fill:#4fc3f7,color:#000
    style A3 fill:#81c784,color:#000
\`\`\`
#### 🔗 Worker Sessions
[confidently] Sessions are a powerful feature for activities that need to share **local state**. When you enable \`EnableSessionWorker: true\` on your worker, Temporal pins related activities to the same worker instance using a **session ID**.
[playfully] This is perfect for scenarios like: download a large file, then process it, then upload the result. Without sessions, each activity might land on a different worker, and you'd need to re-download the file every time. With sessions, all three activities run on the same worker and share the local file.
#### 🏢 Multi-Tenant Isolation
[excited] Here's a powerful pattern: use **dynamic task queue names** like \`tenant-<tenantId>\`. Each tenant gets its own queue, backed by its own worker pool. This way, a noisy tenant can't starve other tenants' workflows.
[conversational] Let's now weigh the trade-offs of task queue routing.`,
        },
        {
          id: 9,
          title: '2. Task Queue Routing — Pros & Cons',
          icon: { name: 'duo-split' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="Task Queue Routing Trade-offs"
                  diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
graph TB
    A["Workload<br/>Analysis"] --> B{"Isolation<br/>Required?"}
    B -->|Yes| C["Create Dedicated<br/>Queue"]
    B -->|No| D["Use Default<br/>Queue"]
    C --> E{"GPU / CPU<br/>Split?"}
    E -->|Yes| F["GPU Worker<br/>Pool"]
    E -->|No| G["Standard<br/>Worker Pool"]
    F --> H["Auto-Provision<br/>Workers"]
    G --> H
    D --> I["✅ Simple<br/>Setup"]
    H --> J["Monitor<br/>Queue Depth"]
    J --> K{"Stale<br/>Queues?"}
    K -->|Yes| L["Cleanup Unused<br/>Queues"]
    K -->|No| I
    L --> I
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style C fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style E fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style F fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style G fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style H fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style I fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style J fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style K fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style L fill:#5c1a1a,color:#fecaca,stroke:#aaa,stroke-width:1.5px`}
                />
              </div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Complete <strong>workload isolation</strong> — noisy neighbors can't starve critical paths</li>
                    <li>Right-size workers per queue — GPU instances only where needed</li>
                    <li>Session queues eliminate <strong>redundant data transfers</strong> between activities</li>
                    <li>Dynamic queue names enable <strong>per-tenant scaling</strong></li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>More queues = more <strong>operational complexity</strong> and monitoring overhead</li>
                    <li>Misconfigured routing can cause tasks to land on <strong>unpolled queues</strong></li>
                    <li>Session workers limit parallelism — activities must wait for <strong>session availability</strong></li>
                    <li>Dynamic queues need worker <strong>auto-provisioning</strong> to avoid stale queues</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 2. Task Queue Routing — Pros & Cons
[conversational] Let's look at the good and the not-so-good of task queue routing.
#### ✅ Pros
[pleased] The biggest advantage is **complete workload isolation**. A runaway batch job on one queue can't starve your critical payment workflows on another queue. Each queue has its own worker pool that scales independently.
[confidently] You also get to **right-size your workers** per queue. GPU instances are expensive, so you only provision them for the queue that actually needs GPUs. Your CPU-only queues can run on cheaper instances.
Session queues eliminate **redundant data transfers** between activities. And dynamic queue names enable **per-tenant scaling** — each tenant gets exactly the resources they need.
#### ❌ Cons
[cautiously] More queues mean more **operational complexity**. You now have multiple worker pools to monitor, scale, and manage. That's more Kubernetes deployments, more autoscaler configs, more dashboards.
[seriously] A common mistake is **misconfigured routing** — if you route a task to a queue that no worker is polling, that task will sit there forever. Temporal won't warn you about this; the task just waits silently.
Session workers also limit **parallelism** because activities must wait for an available session slot on the worker. And if you use dynamic queues, you need some kind of **auto-provisioning** system to spin up workers for new queues and clean up stale ones.
[energetic] Now let's move to Pattern #3 — **Versioning** with the Patching API. This is arguably the most critical pattern for production deployments.`,
        },
      ],
    },

    /* ================================================================
       GROUP 4 — Versioning (Patching API)
       ================================================================ */
    {
      id: 'technique-3-versioning',
      title: '3. Versioning (Patching API)',
      slides: [
        {
          id: 10,
          title: '3. Versioning — Overview',
          icon: { name: 'duo-code-branch' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="rotateIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is Workflow Versioning?</h4>
                  <p style={{ fontSize: '0.95rem' }}>A mechanism to <strong>safely deploy new workflow code</strong> without breaking in-flight workflow executions. Temporal offers the Patching API, Worker Versioning, and Build ID-based routing.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Versioning Strategy Flow"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    D["Deploy v2 Code"] --> Q{"Existing<br/>workflows?"}
    Q -->|"Yes"| P["Use Patching API<br/>Branch old vs new"]
    Q -->|"No"| N["Deploy directly"]
    P --> R["Old executions<br/>take old path"]
    P --> S["New executions<br/>take new path"]
    R --> C["Complete & drain"]
    S --> F["Running v2"]
    C --> RM["Remove patch<br/>after drain"]
    style D fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style Q fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style P fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style N fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style R fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style S fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style C fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style RM fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Three Approaches</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Patching API</strong> — branch workflow code with <code>workflow.GetVersion</code> / <code>patched()</code></li>
                    <li><strong>Worker Versioning</strong> — route tasks to workers by Build ID</li>
                    <li><strong>Task Queue per version</strong> — separate queues for v1 and v2 workers</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.65}>
                <p style={{ fontSize: '0.95rem' }}><strong>Best for:</strong> CI/CD pipelines, zero-downtime deployments, long-running workflow updates</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 3. Versioning — Overview
[seriously] Pattern #3 is about one of the trickiest challenges in Temporal: how do you **deploy new workflow code** without breaking workflows that are already running?
#### 🔄 What Is Workflow Versioning?
[lecture] Here's the fundamental problem. Temporal workflows are **deterministic** — when a worker restarts or a workflow is replayed, Temporal re-executes the workflow code and expects it to produce the same sequence of commands as the original run. [cautiously] If you change the workflow code — say you add a new activity between two existing ones — the replay will produce different commands, and Temporal will throw a **non-determinism error**.
[confidently] Versioning is the mechanism to **safely deploy new code** so that old workflows continue running with the old logic, and new workflows pick up the new logic.
\`\`\`mermaid
flowchart TB
    D["Deploy v2 Code"] --> Q{"Existing workflows?"}
    Q -->|"Yes"| P["Use Patching API"]
    Q -->|"No"| N["Deploy directly"]
    P --> R["Old executions take old path"]
    P --> S["New executions take new path"]
    style D fill:#4fc3f7,color:#000
    style Q fill:#ffd700,color:#000
    style P fill:#81c784,color:#000
    style N fill:#81c784,color:#000
\`\`\`
#### 🛠️ Three Approaches
[conversational] Temporal offers three ways to handle this. The **Patching API** lets you branch your workflow code — old executions take the old path, new ones take the new path. **Worker Versioning** routes tasks to workers based on Build ID, so old tasks go to old-version workers. And the simplest approach — **task queue per version** — just runs v1 and v2 workers on separate queues.
[seriously] This pattern is **essential** for CI/CD 👉 'see-eye-see-dee' pipelines, zero-downtime deployments, and updating long-running workflows that might run for weeks or months.
[energetic] Let's do a deep dive into the Patching API specifically.`,
        },
        {
          id: 11,
          title: '3. Versioning — Patching API Deep Dive',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Patching API Flow"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    GV["GetVersion()"] --> DV{"DefaultVersion?"}
    DV -->|"Yes"| OLD["Old Code Path"]
    DV -->|"No (v1)"| NEW["New Code Path"]
    OLD --> DRAIN["Complete & Drain"]
    DRAIN --> RM["Remove Patch"]
    style GV fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style DV fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style OLD fill:#5c1a1a,color:#fca5a5,stroke:#aaa,stroke-width:1.5px
    style NEW fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style RM fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Go SDK — <code>workflow.GetVersion</code></h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><code>v := workflow.GetVersion(ctx, "change-id", workflow.DefaultVersion, 1)</code></li>
                    <li>If <code>v == workflow.DefaultVersion</code> → run old code path</li>
                    <li>If <code>v == 1</code> → run new code path</li>
                    <li>Temporal records the version marker in event history — deterministic on replay</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>TypeScript SDK — <code>patched()</code></h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><code>if (workflow.patched('my-change')) {'{ /* new path */ }'}</code></li>
                    <li>After all old executions drain: replace with <code>deprecatePatch('my-change')</code></li>
                    <li>Finally remove the deprecation call entirely for clean code</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div style={{ padding: '0.7rem', background: 'rgba(239,68,68,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  ⚠️ <strong>Golden rule:</strong> Never change the order or type of Commands (activities, timers, child workflows) without a patch — it causes <strong>non-determinism errors</strong>.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 3. Versioning — Patching API Deep Dive
[confidently] The Patching API is the most commonly used versioning mechanism, so let's understand exactly how it works.
#### 🔧 Go SDK — workflow.GetVersion
[lecture] In the Go SDK, you use \`workflow.GetVersion()\`. You pass it a **change ID** — a unique string for this specific change — a minimum version, and a maximum version. It returns the version number, and you branch your code based on that.
[conversational] For existing workflow executions that have never seen this patch, \`GetVersion\` returns \`DefaultVersion\` and they follow the old code path. For new executions, it returns the new version number and they take the new path. [excited] Here's the critical part: Temporal **records this version marker** in the workflow's event history, so on replay it always returns the same version — that's what keeps things deterministic.
\`\`\`mermaid
flowchart LR
    GV["GetVersion()"] --> DV{"DefaultVersion?"}
    DV -->|"Yes"| OLD["Old Code Path"]
    DV -->|"No (v1)"| NEW["New Code Path"]
    OLD --> DRAIN["Complete & Drain"]
    DRAIN --> RM["Remove Patch"]
    style GV fill:#4fc3f7,color:#000
    style DV fill:#ffd700,color:#000
    style OLD fill:#ffcdd2,color:#000
    style NEW fill:#81c784,color:#000
    style RM fill:#e1bee7,color:#000
\`\`\`
#### 📘 TypeScript SDK — patched()
[conversational] In TypeScript, it's even simpler. You use \`workflow.patched('my-change')\` which returns a boolean. If \`true\`, run the new code. Once all old executions have drained, replace \`patched()\` with \`deprecatePatch('my-change')\`. After that's deployed and those executions drain too, remove the deprecation call entirely for clean code.
#### ⚠️ The Golden Rule
[seriously] Never change the order or type of **Commands** — activities, timers, child workflows — without wrapping the change in a patch. If you do, Temporal's replay engine will see a mismatch between the recorded history and the new code, and it will throw a **non-determinism error** that stops the workflow dead.
[cautiously] This is the number one production incident with Temporal deployments. Consider it the golden rule.
[energetic] Let's look at the pros and cons of versioning next.`,
        },
        {
          id: 12,
          title: '3. Versioning — Pros & Cons',
          icon: { name: 'duo-split' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Zero-downtime deploys</strong> — old and new code coexist safely</li>
                    <li>Patch markers are recorded in history — <strong>deterministic on replay</strong></li>
                    <li>Worker Versioning (Build ID) automates routing without code-level patches</li>
                    <li>Gradual rollout — canary new version with a subset of workflows</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Patch Lifecycle"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["Add Patch<br/>Branch old/new"] --> B["Wait for<br/>old to drain"]
    B --> C["deprecatePatch"]
    C --> D["Remove patch<br/>entirely"]
    style A fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style D fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Patch branches <strong>accumulate</strong> — need discipline to clean up after drain</li>
                    <li>Long-running workflows may require <strong>multiple nested patches</strong></li>
                    <li>Worker Versioning is still <strong>pre-GA</strong> on self-hosted — check compatibility</li>
                    <li>Testing all version combinations adds to <strong>CI complexity</strong></li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 3. Versioning — Pros & Cons
[conversational] Let's weigh the trade-offs of using the Patching API and versioning strategies.
#### ✅ Pros
[pleased] The biggest win is **zero-downtime deployments**. Old and new workflow code can coexist on the same worker, running side by side without any issues. You never need to stop workflows to deploy — customers experience zero disruption.
[confidently] Patch markers are recorded in the event history, so they're **deterministic on replay**. Once a workflow records that it's on version 1 of a change, it will always take the version 1 path, even if the code is later updated to version 2.
\`\`\`mermaid
flowchart LR
    A["Add Patch"] --> B["Wait for old to drain"]
    B --> C["deprecatePatch"]
    C --> D["Remove patch entirely"]
    style A fill:#81c784,color:#000
    style B fill:#ffd700,color:#000
    style C fill:#e1bee7,color:#000
    style D fill:#4fc3f7,color:#000
\`\`\`
Worker Versioning with Build ID automates routing without code-level patches, and you can do **gradual rollouts** — canary new versions with a subset of workflows before going fully live.
#### ❌ Cons
[cautiously] Patch branches **accumulate** over time. If you're not disciplined about cleaning up deprecated patches after old workflows drain, your code becomes littered with version branches that nobody understands anymore.
[seriously] Long-running workflows that span months might need **multiple nested patches**, which gets messy. Worker Versioning is still **pre-GA** 👉 'pree-jee-AY' on self-hosted Temporal, so check compatibility before adopting it. And testing all version combinations significantly adds to your **CI complexity**.
[energetic] Now let's look at Pattern #4 — **Observability**. You can't improve what you can't measure.`,
        },
      ],
    },

    /* ================================================================
       GROUP 5 — Observability
       ================================================================ */
    {
      id: 'technique-4-observability',
      title: '4. Observability',
      slides: [
        {
          id: 13,
          title: '4. Observability — Overview',
          icon: { name: 'duo-chart-line' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is Temporal Observability?</h4>
                  <p style={{ fontSize: '0.95rem' }}>The <strong>metrics, logs, traces, and dashboards</strong> that give you visibility into workflow execution health, worker performance, and system bottlenecks.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Observability Stack"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    T["Temporal Cluster"] --> M["Metrics<br/>Prometheus"]
    T --> L["Logs<br/>Structured JSON"]
    T --> TR["Traces<br/>OpenTelemetry"]
    M --> G["Grafana<br/>Dashboards"]
    L --> ELK["ELK / Loki"]
    TR --> J["Jaeger / Tempo"]
    G --> A["Alerts<br/>PagerDuty"]
    style T fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style M fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style L fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style TR fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style G fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style ELK fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style J fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style A fill:#5c1a1a,color:#fca5a5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Three Pillars</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Metrics</strong> — Prometheus counters/histograms for latency, throughput, errors</li>
                    <li><strong>Tracing</strong> — OpenTelemetry spans across workflow → activity → external calls</li>
                    <li><strong>Logging</strong> — Structured, workflow-aware log context with run ID correlation</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.95rem' }}><strong>Best for:</strong> Production debugging, SLA monitoring, capacity planning, incident response</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 4. Observability — Overview
[excited] Pattern #4: **Observability**. This is the pattern that ties everything else together.
#### 👁️ What Is Temporal Observability?
[lecture] Observability is your ability to understand what's happening inside your Temporal deployment by looking at **metrics**, **logs**, and **traces**. [cautiously] Without it, you're flying blind — you won't know if your workers are overloaded, if workflows are failing, or if latency is creeping up until a user complains.
[pleased] Temporal is actually excellent here because it provides **rich observability out of the box**. The server emits Prometheus 👉 'pruh-MEE-thee-us' metrics, workers support OpenTelemetry 👉 'oh-pen-tuh-LEM-uh-tree' tracing, and you can add workflow-aware structured logging with automatic correlation.
\`\`\`mermaid
flowchart TB
    T["Temporal Cluster"] --> M["Metrics (Prometheus)"]
    T --> L["Logs (Structured JSON)"]
    T --> TR["Traces (OpenTelemetry)"]
    M --> G["Grafana Dashboards"]
    L --> ELK["ELK / Loki"]
    TR --> J["Jaeger / Tempo"]
    G --> A["Alerts (PagerDuty)"]
    style T fill:#ffd700,color:#000
    style M fill:#4fc3f7,color:#000
    style L fill:#81c784,color:#000
    style TR fill:#e1bee7,color:#000
    style A fill:#ffcdd2,color:#000
\`\`\`
#### 📐 Three Pillars
[confidently] **Metrics** are numerical measurements like latency, throughput, and error rates, exposed via Prometheus. **Tracing** with OpenTelemetry gives you distributed spans showing the full journey of a workflow — from the initial call through every activity and external service call. **Logging** with structured, workflow-aware context means every log line includes the workflow ID and run ID, so you can correlate logs across services.
[seriously] This is **essential** for production debugging, SLA monitoring, capacity planning, and incident response.
[energetic] Let's look at the specific metrics you should be monitoring and alerting on.`,
        },
        {
          id: 14,
          title: '4. Observability — Key Metrics & Alerts',
          icon: { name: 'duo-bell' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Alerting Pipeline"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    W["Workers"] -->|"emit"| P["Prometheus Metrics"]
    P -->|"query"| G["Grafana"]
    G -->|"trigger"| AL["Alert Rules"]
    AL -->|"notify"| PD["PagerDuty / Slack"]
    style W fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style P fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style G fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style AL fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style PD fill:#5c1a1a,color:#fca5a5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Critical Metrics to Monitor</h4>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #444' }}>
                      <th style={{ padding: '6px 8px', textAlign: 'left' }}>Metric</th>
                      <th style={{ padding: '6px 8px', textAlign: 'left' }}>What It Tells You</th>
                      <th style={{ padding: '6px 8px', textAlign: 'left' }}>Alert Threshold</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '5px 8px' }}><code>schedule_to_start_latency</code></td>
                      <td style={{ padding: '5px 8px' }}>Task queue backlog — are workers keeping up?</td>
                      <td style={{ padding: '5px 8px' }}>&gt; 5s = add workers</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '5px 8px' }}><code>workflow_task_execution_failed</code></td>
                      <td style={{ padding: '5px 8px' }}>Non-determinism or panic errors</td>
                      <td style={{ padding: '5px 8px' }}>Any &gt; 0 = investigate</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '5px 8px' }}><code>activity_execution_failed</code></td>
                      <td style={{ padding: '5px 8px' }}>Activity failures exceeding retry budget</td>
                      <td style={{ padding: '5px 8px' }}>Spike = downstream issue</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '5px 8px' }}><code>workflow_endtoend_latency</code></td>
                      <td style={{ padding: '5px 8px' }}>Total workflow completion time</td>
                      <td style={{ padding: '5px 8px' }}>p99 &gt; SLA = tune</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '5px 8px' }}><code>sticky_cache_hit</code></td>
                      <td style={{ padding: '5px 8px' }}>Workflow replay cache efficiency</td>
                      <td style={{ padding: '5px 8px' }}>&lt; 80% = increase cache</td>
                    </tr>
                  </tbody>
                </table>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div style={{ marginTop: '0.7em', padding: '0.7rem', background: 'rgba(14,165,233,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  📊 <strong>Grafana starter:</strong> Import the official Temporal dashboard (ID: 10137) for instant visibility.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 4. Observability — Key Metrics & Alerts
[conversational] Let's get specific about which metrics matter most and how to set up alerts.
#### 📊 The Five Critical Metrics
[lecture] The table on screen shows the five metrics every Temporal deployment should monitor. Let me walk through each one.
[confidently] First, **schedule_to_start_latency**. This measures the time between when Temporal schedules a task and when a worker picks it up. [seriously] If this goes above 5 seconds, it means your workers are falling behind and you need to add more. This is your **number one scaling signal**.
Second, **workflow_task_execution_failed**. This counter tracks non-determinism errors and panics in your workflow code. [cautiously] Any value above zero is an immediate red flag — it usually means someone deployed a breaking code change without using the Patching API.
[conversational] Third, **activity_execution_failed**. A spike here means something downstream is broken — maybe an API is down or a database is unavailable. This tells you where to look during incidents.
Fourth, **workflow_endtoend_latency**. This is the total time from workflow start to completion. Watch the p99 (ninety-ninth percentile) — if it exceeds your SLA, you need to tune something.
Fifth, **sticky_cache_hit**. This tells you how often workers can skip full replays by using their local cache. If it drops below 80%, increase your sticky cache size.
#### 🚀 Getting Started Fast
[excited] The fastest way to get observability up and running is to import the **official Temporal Grafana dashboard** — dashboard ID 10137. It gives you all these metrics visualized instantly, and you can add custom alert rules on top.
> 📊 Ask the audience: "Who already has Prometheus and Grafana set up?"
[energetic] Let's look at the trade-offs of investing in observability.`,
        },
        {
          id: 15,
          title: '4. Observability — Pros & Cons',
          icon: { name: 'duo-split' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="Observability Stack Trade-offs"
                  diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
graph TB
    A["Observability<br/>Setup"] --> B["Prometheus<br/>Metrics"]
    A --> C["OpenTelemetry<br/>Tracing"]
    A --> D["Structured<br/>Logging"]
    B --> E{"High<br/>Cardinality?"}
    E -->|Yes| F["⚠️ Aggregate<br/>& Filter"]
    E -->|No| G["✅ Dashboard<br/>Ready"]
    C --> H{"Async<br/>Boundaries?"}
    H -->|Yes| I["⚠️ Manual Context<br/>Propagation"]
    H -->|No| J["✅ Auto<br/>Traced"]
    D --> K["Run ID<br/>Correlation"]
    K --> G
    F --> G
    I --> J
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style C fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style D fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style E fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style F fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style G fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style H fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style I fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style J fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style K fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px`}
                />
              </div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Temporal emits <strong>rich Prometheus metrics</strong> out of the box — no custom instrumentation</li>
                    <li>OpenTelemetry interceptors provide <strong>distributed tracing</strong> across workflows and activities</li>
                    <li>Workflow-aware logging with automatic <strong>run ID / workflow ID correlation</strong></li>
                    <li>Temporal Web UI gives <strong>full event history</strong> visualization per workflow</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>High-cardinality metrics (per workflow type) can <strong>overwhelm Prometheus</strong></li>
                    <li>Trace context propagation across async boundaries requires <strong>careful setup</strong></li>
                    <li>Self-hosted Temporal lacks some <strong>cloud-only observability features</strong></li>
                    <li>Custom search attributes for advanced queries need <strong>Elasticsearch / SQL visibility</strong></li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 4. Observability — Pros & Cons
[conversational] Observability is mostly upside, but there are some gotchas to be aware of.
#### ✅ Pros
[pleased] Temporal emits **rich Prometheus metrics** out of the box with zero custom instrumentation needed. You don't need to instrument your code to get key metrics like latency, throughput, and error rates — the SDK and server handle it for you.
[confidently] OpenTelemetry interceptors provide **distributed tracing** across workflows and activities. You can see the full call chain — workflow starts, activity executes, external API call happens — all in one trace view in Jaeger 👉 'YAY-ger' or Grafana Tempo.
Workflow-aware logging automatically attaches the **workflow ID and run ID** to every log line. [excited] This is incredibly powerful during incidents — you can search for a specific workflow and see every log from every activity it ran. And the Temporal Web UI gives you a **full event history** visualization for every workflow.
#### ❌ Cons
[cautiously] The main challenge is **high-cardinality metrics**. If you have hundreds of workflow types, each emitting metrics, you can overwhelm Prometheus. You'll need to aggregate and filter carefully.
Trace context propagation across **async boundaries** requires careful setup. If your activities call external services via HTTP, you need to forward the OpenTelemetry context manually.
[seriously] Self-hosted Temporal also lacks some **cloud-only features** like built-in dashboards and advanced search. And custom search attributes for filtering workflows by arbitrary fields need **Elasticsearch** or **SQL visibility** stores.
[energetic] Up next: Pattern #5 — **Multi-Cluster Replication** for disaster recovery and global scale.`,
        },
      ],
    },

    /* ================================================================
       GROUP 6 — Multi-Cluster Replication
       ================================================================ */
    {
      id: 'technique-5-multi-cluster',
      title: '5. Multi-Cluster Replication',
      slides: [
        {
          id: 16,
          title: '5. Multi-Cluster Replication — Overview',
          icon: { name: 'duo-globe' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="flipCard" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is Multi-Cluster Replication?</h4>
                  <p style={{ fontSize: '0.95rem' }}>Running Temporal across <strong>multiple data centers or regions</strong> with workflow state replicated between clusters for disaster recovery and geo-routing.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.4}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Multi-Cluster Topology"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    C1["Cluster US-East<br/>Active"] <-->|"Replicate"| C2["Cluster US-West<br/>Standby"]
    C1 <-->|"Replicate"| C3["Cluster EU-West<br/>Standby"]
    C1 --> W1["Workers US-East"]
    C2 --> W2["Workers US-West"]
    C3 --> W3["Workers EU-West"]
    style C1 fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style C2 fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style C3 fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style W1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style W2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style W3 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Key Concepts</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Global Namespaces</strong> — namespaces that replicate across clusters</li>
                    <li><strong>Active/Standby</strong> — only the active cluster processes tasks; standby replays for failover</li>
                    <li><strong>Failover</strong> — promote standby to active (manual or automated)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.65}>
                <p style={{ fontSize: '0.95rem' }}><strong>Best for:</strong> Disaster recovery, regulatory compliance (data residency), low-latency global access</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 5. Multi-Cluster Replication — Overview
[excited] Pattern #5 takes us to the big leagues: running Temporal across multiple data centers or regions.
#### 🌍 What Is Multi-Cluster Replication?
[lecture] Multi-Cluster Replication means having your Temporal deployment span **multiple geographic regions** with workflow state automatically replicated between clusters. [confidently] If your primary cluster in US-East goes down, your standby cluster in US-West can take over without losing any workflow state.
[storytelling] Think of it like having a backup generator for your house. You hope you never need it, but when the power goes out, it kicks in automatically and keeps everything running.
\`\`\`mermaid
flowchart LR
    C1["Cluster US-East (Active)"] <-->|"Replicate"| C2["Cluster US-West (Standby)"]
    C1 <-->|"Replicate"| C3["Cluster EU-West (Standby)"]
    style C1 fill:#81c784,color:#000
    style C2 fill:#4fc3f7,color:#000
    style C3 fill:#e1bee7,color:#000
\`\`\`
#### 🔑 Key Concepts
[conversational] There are three concepts to understand. **Global Namespaces** are namespaces whose data is replicated across clusters. Regular namespaces are local to one cluster; global namespaces live everywhere.
[confidently] The **Active/Standby** model means only one cluster processes tasks at a time. The standby clusters receive replicated events and replay them, keeping their state in sync, but they don't execute any work. **Failover** is the process of promoting a standby to active — this can be done manually or automated with health checks.
This pattern is **best for** disaster recovery, regulatory compliance where data must reside in specific regions, and providing low-latency global access.
[energetic] Let's see how the replication protocol works under the hood.`,
        },
        {
          id: 17,
          title: '5. Multi-Cluster — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInBottom" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Replication Protocol"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["Active Cluster"] -->|"Write Events"| EH["Event History"]
    EH -->|"Generate"| RT["Replication Tasks"]
    RT -->|"Consume"| S1["Standby Cluster 1"]
    RT -->|"Consume"| S2["Standby Cluster 2"]
    S1 -->|"Replay"| SH1["Synced History"]
    S2 -->|"Replay"| SH2["Synced History"]
    style A fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style EH fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style RT fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style S1 fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style S2 fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Replication Protocol</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Active cluster writes events → <strong>replication tasks</strong> are generated</li>
                    <li>Standby clusters consume replication tasks and <strong>replay history</strong></li>
                    <li>On failover: standby becomes active, workers start processing immediately</li>
                    <li>Conflict resolution uses <strong>last-writer-wins</strong> with vector clocks</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Configuration</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Enable <code>global-namespace</code> in cluster config for target namespaces</li>
                    <li>Set <code>clusterMetadata</code> with cluster addresses and replication endpoints</li>
                    <li>Deploy workers in <strong>each region</strong> — they auto-activate on failover</li>
                    <li>Use <code>tctl namespace update --active_cluster</code> for manual failover</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.6}>
                <div style={{ padding: '0.7rem', background: 'rgba(239,68,68,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  ⚠️ <strong>Caveat:</strong> Activity side effects are NOT replicated — only event history is. Design activities to be <strong>idempotent</strong> for safe re-execution after failover.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 5. Multi-Cluster — How It Works
[conversational] Let's understand the replication protocol — how Temporal keeps clusters in sync.
#### 🔄 Replication Protocol
[lecture] When the active cluster processes workflow events — activities complete, timers fire, signals arrive — it generates **replication tasks**. These tasks are consumed by the standby clusters, which use them to replay the workflow history and keep their state synchronized.
[confidently] On failover, the standby cluster becomes active. Workers in that region immediately start processing tasks. [pleased] The key thing to understand is that replication lag is typically **sub-second**, meaning you lose almost no data during failover.
\`\`\`mermaid
flowchart TB
    A["Active Cluster"] -->|"Write Events"| EH["Event History"]
    EH -->|"Generate"| RT["Replication Tasks"]
    RT -->|"Consume"| S1["Standby Cluster 1"]
    RT -->|"Consume"| S2["Standby Cluster 2"]
    S1 -->|"Replay"| SH1["Synced History"]
    S2 -->|"Replay"| SH2["Synced History"]
    style A fill:#81c784,color:#000
    style EH fill:#ffd700,color:#000
    style RT fill:#4fc3f7,color:#000
    style S1 fill:#e1bee7,color:#000
    style S2 fill:#e1bee7,color:#000
\`\`\`
Conflict resolution uses **last-writer-wins** semantics with vector clocks — in most cases, this is transparent and you don't need to think about it.
#### ⚙️ Configuration
[conversational] To set this up, enable \`global-namespace\` in your cluster config, set up \`clusterMetadata\` with cluster addresses and replication endpoints, and deploy workers in **each region**. Workers auto-activate on failover — you don't need to restart them.
For manual failover, use \`tctl namespace update --active_cluster\` to switch the active cluster.
#### ⚠️ Critical Caveat
[seriously] **Activity side effects are NOT replicated** — only the event history is. If an activity charged a credit card, that side effect lives outside Temporal. [cautiously] After failover, the activity might be re-executed. This is why all your activities must be **idempotent** 👉 'eye-dem-POH-tent' — running them twice should be safe.
[conversational] Let's look at the trade-offs.`,
        },
        {
          id: 18,
          title: '5. Multi-Cluster — Pros & Cons',
          icon: { name: 'duo-split' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="Multi-Cluster Failover Flow"
                  diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
graph TB
    A["Region A<br/>Active"] -->|"Replicate"| B["Region B<br/>Standby"]
    A --> C{"Region A<br/>Failure?"}
    C -->|No| D["Continue<br/>Normal Ops"]
    C -->|Yes| E["Initiate<br/>Failover"]
    E --> F["Region B<br/>Becomes Active"]
    F --> G{"Activity<br/>In-Flight?"}
    G -->|Yes| H["⚠️ Duplicate<br/>Execution Risk"]
    G -->|No| I["✅ Clean<br/>Takeover"]
    H --> J["Idempotency<br/>Required"]
    J --> I
    D --> A
    style A fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style C fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style E fill:#5c1a1a,color:#fecaca,stroke:#aaa,stroke-width:1.5px
    style F fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style G fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style H fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style I fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style J fill:#5c1a1a,color:#fecaca,stroke:#aaa,stroke-width:1.5px`}
                />
              </div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Disaster recovery</strong> — workflows survive entire region outages</li>
                    <li><strong>Geo-routing</strong> — route workflows to the nearest cluster for lower latency</li>
                    <li>RPO near zero — replication lag is typically <strong>sub-second</strong></li>
                    <li>Temporal Cloud handles multi-region automatically with <strong>managed failover</strong></li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Self-hosted setup is complex</strong> — requires shared persistence layer or cross-DC DB replication</li>
                    <li>Failover can cause <strong>duplicate activity executions</strong> — idempotency is mandatory</li>
                    <li>Active-active (multi-write) adds <strong>conflict resolution complexity</strong></li>
                    <li>Cross-region replication adds <strong>operational cost</strong> and network bandwidth</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 5. Multi-Cluster — Pros & Cons
[conversational] Multi-cluster replication is powerful but comes with significant operational cost. Let's break it down.
#### ✅ Pros
[pleased] The headline benefit is **disaster recovery** — your workflows survive an entire region going down. If AWS US-East has an outage, your standby in US-West takes over and workflows continue running. For businesses where downtime means lost revenue, this is invaluable.
[confidently] **Geo-routing** is another big advantage — you can route workflows to the nearest cluster for lower latency. A user in Europe hits your EU-West cluster directly instead of crossing the Atlantic.
The **RPO** 👉 'are-pee-OH' (Recovery Point Objective) is near zero because replication lag is sub-second. And if you're using **Temporal Cloud**, multi-region is managed for you with automated failover.
#### ❌ Cons
[cautiously] Self-hosted setup is genuinely **complex**. You need either a shared persistence layer accessible from all regions, or cross-datacenter database replication. That's a non-trivial infrastructure project.
[seriously] **Duplicate activity executions** during failover are a real concern. If an activity was running when failover happened, it might run again in the new active cluster. Idempotency isn't optional here — it's mandatory.
Active-active mode where multiple clusters can write simultaneously adds **conflict resolution complexity** that most teams underestimate. And cross-region replication means additional **network bandwidth costs** and operational overhead.
[energetic] Let's move to our final pattern — **Nexus**, which is all about connecting workflows across team boundaries.`,
        },
      ],
    },

    /* ================================================================
       GROUP 7 — Nexus
       ================================================================ */
    {
      id: 'technique-6-nexus',
      title: '6. Nexus',
      slides: [
        {
          id: 19,
          title: '6. Nexus — Overview',
          icon: { name: 'duo-bolt' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="rotateIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is Temporal Nexus?</h4>
                  <p style={{ fontSize: '0.95rem' }}>A <strong>cross-namespace and cross-cluster RPC mechanism</strong> that lets workflows call operations exposed by other Temporal namespaces as if they were local activities — enabling service mesh-style orchestration.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.4}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Nexus Architecture"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    WF1["Caller Workflow<br/>Namespace A"] -->|"Nexus Call"| NX["Nexus<br/>Endpoint"]
    NX --> WF2["Handler Workflow<br/>Namespace B"]
    NX --> WF3["Handler Workflow<br/>Namespace C"]
    WF2 --> R1["Return Result"]
    WF3 --> R2["Return Result"]
    R1 --> WF1
    R2 --> WF1
    style WF1 fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style NX fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style WF2 fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style WF3 fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style R1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style R2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Key Concepts</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Nexus Endpoint</strong> — a named entry point exposing operations from a namespace</li>
                    <li><strong>Nexus Operation</strong> — sync or async callable unit (maps to workflow or activity)</li>
                    <li><strong>Nexus Service</strong> — a collection of related operations (like a gRPC service)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.65}>
                <p style={{ fontSize: '0.95rem' }}><strong>Best for:</strong> Multi-team platforms, cross-namespace orchestration, breaking monolith workflows</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 6. Nexus — Overview
[excited] Our final pattern is **Nexus** — one of Temporal's newest and most exciting features.
#### 🔗 What Is Temporal Nexus?
[storytelling] Imagine you have multiple teams, each with their own Temporal namespace. Team A runs payment workflows. Team B runs shipping workflows. Team C runs notification workflows. Now you want to build an order workflow that calls all three teams' services. How do you do it?
[cautiously] Without Nexus, you'd build HTTP APIs, message queues, or gRPC 👉 'jee-are-pee-SEE' bridges between namespaces. You'd handle retries, timeouts, and error propagation yourself. It's messy and fragile.
[pleased] **Nexus** solves this by providing a **cross-namespace and cross-cluster RPC mechanism**. Your workflow can call operations exposed by other namespaces as if they were local activities. Temporal handles routing, retries, timeouts, and even cancellation propagation automatically.
\`\`\`mermaid
flowchart LR
    WF1["Caller Workflow (Namespace A)"] -->|"Nexus Call"| NX["Nexus Endpoint"]
    NX --> WF2["Handler (Namespace B)"]
    NX --> WF3["Handler (Namespace C)"]
    style WF1 fill:#4fc3f7,color:#000
    style NX fill:#ffd700,color:#000
    style WF2 fill:#81c784,color:#000
    style WF3 fill:#e1bee7,color:#000
\`\`\`
#### 🔑 Key Concepts
[lecture] A **Nexus Endpoint** is a named entry point that exposes operations from a namespace. A **Nexus Operation** is the callable unit — it can be synchronous like an activity or asynchronous where it starts a workflow and you wait for it. A **Nexus Service** is a collection of related operations, similar to a gRPC service definition.
[confidently] This pattern is **best for** multi-team platforms, cross-namespace orchestration, and breaking apart monolith workflows into independently owned services.
[energetic] Let's see how to define and call Nexus operations.`,
        },
        {
          id: 20,
          title: '6. Nexus — How It Works',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Nexus Operation Flow"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    DEF["Define Operations"] --> REG["Register on Worker"]
    REG --> EP["Create Endpoint"]
    EP --> CALL["Caller Calls Operation"]
    CALL --> RES["Result Returned"]
    style DEF fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style REG fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style EP fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style CALL fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style RES fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Defining a Nexus Service</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Define <strong>operations</strong> with input/output types — similar to proto service definitions</li>
                    <li>Operations can be <strong>synchronous</strong> (like an activity) or <strong>asynchronous</strong> (starts a workflow)</li>
                    <li>Register the service on the handler worker with <code>nexus.NewService()</code></li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Calling a Nexus Operation</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Create a <strong>Nexus client</strong> in the caller workflow with the endpoint name</li>
                    <li>Call <code>ExecuteOperation()</code> — Temporal handles routing, retries, and timeouts</li>
                    <li>Async operations return a <strong>handle</strong> — poll or wait for completion</li>
                    <li>Cancellation propagates automatically from caller to handler</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div style={{ padding: '0.7rem', background: 'rgba(16,185,129,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  🔗 <strong>Key benefit:</strong> Nexus provides <strong>type-safe, durable RPC</strong> between namespaces — no HTTP clients, no message queues, no custom retry logic.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 6. Nexus — How It Works
[conversational] Let's see how Nexus operations are defined and called in practice.
#### 🛠️ Defining a Nexus Service
[lecture] On the handler side — the team exposing the service — you define **operations** with typed inputs and outputs. It's very similar to defining a gRPC or protobuf service. Each operation specifies what it accepts and what it returns.
[conversational] Operations can be **synchronous** — they execute immediately like an activity and return a result — or **asynchronous** — they start a workflow behind the scenes and the caller gets a handle to wait for the result. You register the service on your handler worker using \`nexus.NewService()\`.
\`\`\`mermaid
flowchart TB
    DEF["Define Operations"] --> REG["Register on Worker"]
    REG --> EP["Create Endpoint"]
    EP --> CALL["Caller Calls Operation"]
    CALL --> RES["Result Returned"]
    style DEF fill:#4fc3f7,color:#000
    style REG fill:#81c784,color:#000
    style EP fill:#ffd700,color:#000
    style CALL fill:#e1bee7,color:#000
    style RES fill:#81c784,color:#000
\`\`\`
#### 📞 Calling a Nexus Operation
[conversational] On the caller side, you create a **Nexus client** using the endpoint name, then call \`ExecuteOperation()\`. That's it. Temporal handles routing the call to the right namespace, retrying on transient failures, and enforcing timeouts.
[pleased] For async operations, you get back a **handle** that you can poll or wait on. And here's something really nice: if the caller workflow is cancelled, the **cancellation propagates** automatically to the handler side. No manual cleanup needed.
#### 💡 The Key Benefit
[excited] The magic of Nexus is what it eliminates. No HTTP clients to build and maintain. No message queues to operate. No custom retry logic to write and debug. You get **type-safe, durable RPC** between namespaces for free.
[conversational] Let's look at the trade-offs of adopting Nexus.`,
        },
        {
          id: 21,
          title: '6. Nexus — Pros & Cons',
          icon: { name: 'duo-split' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="Nexus Cross-Namespace Flow"
                  diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
graph TB
    A["Team A<br/>Namespace"] -->|"Nexus Call"| B["Nexus<br/>Endpoint"]
    B -->|"Route"| C["Team B<br/>Namespace"]
    C --> D["Execute<br/>Operation"]
    D -->|"Result"| B
    B -->|"Return"| A
    A --> E{"Latency<br/>Acceptable?"}
    E -->|No| F["⚠️ Batch Calls<br/>or Keep Local"]
    E -->|Yes| G["✅ Durable<br/>Cross-Team RPC"]
    C --> H{"Tracing<br/>Setup?"}
    H -->|No| I["⚠️ Hard to<br/>Debug"]
    H -->|Yes| J["✅ Correlated<br/>Traces"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style C fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style E fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style F fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style G fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style H fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style I fill:#5c1a1a,color:#fecaca,stroke:#aaa,stroke-width:1.5px
    style J fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                />
              </div>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Namespace isolation</strong> — teams own their workflows independently</li>
                    <li><strong>Durable cross-namespace calls</strong> — retries and timeouts handled by Temporal</li>
                    <li>Cancellation, signals, and errors propagate <strong>across namespace boundaries</strong></li>
                    <li>Type-safe contracts — similar to gRPC service definitions</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Nexus is a <strong>newer feature</strong> — API surface may evolve</li>
                    <li>Adds <strong>network hop</strong> between namespaces — higher latency than local activities</li>
                    <li>Requires <strong>endpoint configuration</strong> in cluster settings — operational overhead</li>
                    <li>Debugging cross-namespace calls requires <strong>correlated tracing</strong> across namespaces</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 6. Nexus — Pros & Cons
[conversational] Nexus is a powerful tool, but it's relatively new and comes with its own considerations.
#### ✅ Pros
[pleased] The biggest win is **namespace isolation** — each team owns their workflows independently, with clear boundaries and contracts. Teams can deploy, scale, and evolve their services without coordinating with every other team that depends on them.
[confidently] Nexus calls are **durable** — Temporal handles retries and timeouts just like it does for regular activities. Cancellation, signals, and errors all propagate **across namespace boundaries**, which would be incredibly difficult to build with custom HTTP or gRPC bridges.
The type-safe contracts are also a big plus — you define your operations with strong types, similar to gRPC service definitions, so breaking changes are caught at compile time rather than in production.
#### ❌ Cons
[cautiously] Nexus is a **newer feature** in the Temporal ecosystem. The API surface may still evolve, so check the documentation for your specific SDK version. Early adopters should expect some rough edges.
Each Nexus call adds a **network hop** between namespaces, so latency is higher than calling a local activity. For latency-sensitive workflows, batch Nexus calls or keep critical-path operations local.
[seriously] Setting up endpoints requires **configuration in your cluster settings**, which is additional operational overhead. And **debugging** cross-namespace calls requires correlated tracing across namespaces — you need OpenTelemetry properly set up on both sides to see the full picture.
[energetic] Now let's wrap everything up with a cheat sheet comparing all 6 patterns.`,
        },
      ],
    },

    /* ================================================================
       GROUP 8 — Summary
       ================================================================ */
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        /* ---------- Cheat Sheet ---------- */
        {
          id: 22,
          title: 'Cheat Sheet — All 6 Patterns Compared',
          icon: { name: 'duo-clipboard-list' },
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.6', textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="Pattern Adoption Decision Flow"
                  diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
graph TB
    A["Starting<br/>Production?"] --> B["1. Worker<br/>Scaling"]
    A --> C["2. Observability"]
    B --> D{"Workloads<br/>Diverse?"}
    C --> D
    D -->|Yes| E["3. Task Queue<br/>Routing"]
    D -->|No| F{"CI/CD<br/>Pipeline?"}
    E --> F
    F -->|Yes| G["4. Versioning<br/>Patching API"]
    F -->|No| H{"Multi-Region<br/>Needed?"}
    G --> H
    H -->|Yes| I["5. Multi-Cluster<br/>Replication"]
    H -->|No| J{"Cross-Team<br/>Orchestration?"}
    I --> J
    J -->|Yes| K["6. Nexus"]
    J -->|No| L["✅ Review<br/>& Iterate"]
    K --> L
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style E fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style F fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style G fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style H fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style I fill:#5c1a1a,color:#fecaca,stroke:#aaa,stroke-width:1.5px
    style J fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style K fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style L fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                />
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <h4>Decision Table</h4>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #444' }}>
                      <th style={{ padding: '6px 8px', textAlign: 'left' }}>Pattern</th>
                      <th style={{ padding: '6px 8px', textAlign: 'left' }}>Complexity</th>
                      <th style={{ padding: '6px 8px', textAlign: 'left' }}>Infra Cost</th>
                      <th style={{ padding: '6px 8px', textAlign: 'left' }}>Best Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '5px 8px' }}><strong>Worker Scaling</strong></td>
                      <td style={{ padding: '5px 8px' }}>Low</td>
                      <td style={{ padding: '5px 8px' }}>Medium</td>
                      <td style={{ padding: '5px 8px' }}>High throughput, bursty workloads</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '5px 8px' }}><strong>Task Queue Routing</strong></td>
                      <td style={{ padding: '5px 8px' }}>Medium</td>
                      <td style={{ padding: '5px 8px' }}>Medium</td>
                      <td style={{ padding: '5px 8px' }}>Workload isolation, GPU/CPU split</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '5px 8px' }}><strong>Versioning (Patching)</strong></td>
                      <td style={{ padding: '5px 8px' }}>Medium</td>
                      <td style={{ padding: '5px 8px' }}>Low</td>
                      <td style={{ padding: '5px 8px' }}>Zero-downtime deployments, CI/CD</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '5px 8px' }}><strong>Observability</strong></td>
                      <td style={{ padding: '5px 8px' }}>Low–Med</td>
                      <td style={{ padding: '5px 8px' }}>Medium</td>
                      <td style={{ padding: '5px 8px' }}>SLA monitoring, incident response</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '5px 8px' }}><strong>Multi-Cluster</strong></td>
                      <td style={{ padding: '5px 8px' }}>High</td>
                      <td style={{ padding: '5px 8px' }}>High</td>
                      <td style={{ padding: '5px 8px' }}>DR, geo-routing, regulatory compliance</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '5px 8px' }}><strong>Nexus</strong></td>
                      <td style={{ padding: '5px 8px' }}>Medium</td>
                      <td style={{ padding: '5px 8px' }}>Low</td>
                      <td style={{ padding: '5px 8px' }}>Cross-team orchestration, namespace isolation</td>
                    </tr>
                  </tbody>
                </table>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Cheat Sheet — All 6 Patterns Compared
[conversational] Here's your decision table — a quick reference to help you pick the right pattern for your situation.
#### 📊 How to Read This Table
[lecture] The table shows each pattern with its **complexity**, **infrastructure cost**, and **best use case**. Let's do a quick walkthrough.
[confidently] **Worker Scaling** is low complexity and medium cost — you're just adding more pods. Start here. **Task Queue Routing** is medium complexity because you need to manage multiple queues and worker pools. **Versioning** is medium complexity in code but low infrastructure cost since it's purely a code-level change.
[conversational] **Observability** ranges from low to medium complexity depending on how deep you go. A basic Prometheus plus Grafana setup is quick, but distributed tracing and custom search attributes take more effort.
[cautiously] **Multi-Cluster** is the most complex and expensive — it's a significant infrastructure investment. Only use it when you truly need disaster recovery or geo-routing.
[pleased] And **Nexus** is medium complexity with low infrastructure cost because Temporal handles the cross-namespace plumbing for you.
#### 🎯 The Adoption Path
[confidently] Most teams should adopt these patterns roughly in order. Start with **Worker Scaling** and **Observability** — these give you the biggest bang for your effort. Then add **Task Queue Routing** as your workloads diversify. Use **Versioning** from day one if you have CI/CD pipelines deploying workflow code. **Multi-Cluster** and **Nexus** come later as your scale and team structure demand them.
[energetic] Let's close out with the top 5 actionable takeaways.`,
        },
        /* ---------- Key Takeaways ---------- */
        {
          id: 23,
          title: 'Key Takeaways',
          icon: { name: 'duo-trophy' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="Adoption Roadmap"
                  diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
graph LR
    A["Day 1"] --> B["Scale &<br/>Observe"]
    B --> C["Week 2"]
    C --> D["Route &<br/>Version"]
    D --> E["Month 2"]
    E --> F["Multi-Cluster<br/>& Nexus"]
    F --> G["✅ Production<br/>Ready"]
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style F fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style G fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                />
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <h4>🎯 Top 5 Actionable Takeaways</h4>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.8}>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>1.</strong> Scale workers <strong>horizontally first</strong> — add pods, tune pollers second. Monitor <code>schedule_to_start_latency</code> as your scaling signal.
                </div>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>2.</strong> Use <strong>task queue routing</strong> to isolate workloads — separate critical-path from bulk-processing and GPU from CPU workers.
                </div>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>3.</strong> Always use the <strong>Patching API</strong> when deploying workflow code changes — never modify the command sequence of in-flight workflows without a version guard.
                </div>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>4.</strong> Set up <strong>Prometheus + Grafana</strong> from day one — alert on <code>schedule_to_start_latency</code>, <code>workflow_task_execution_failed</code>, and <code>sticky_cache_hit</code> rate.
                </div>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>5.</strong> Use <strong>Nexus</strong> for cross-team orchestration instead of building custom HTTP/gRPC bridges between namespaces — get durable, type-safe RPC for free.
                </div>
              </GSAPStaggerList>
              <GSAPAnimated animation="bounceIn" delay={0.9}>
                <div style={{ marginTop: '1rem', padding: '0.7rem', background: 'rgba(14,165,233,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  📚 <strong>Next step:</strong> Audit your current Temporal deployment against these 6 patterns. Start with observability — you can't improve what you can't measure.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Key Takeaways
[confidently] Let's close out with the five most important things to remember from today's talk.
#### 🎯 Top 5 Actionable Takeaways
[seriously] **Number one:** Scale workers **horizontally first**. Add more pods before tuning poller counts. Monitor \`schedule_to_start_latency\` as your primary scaling signal — if it's above 5 seconds, add workers immediately.
[confidently] **Number two:** Use **task queue routing** to isolate workloads. Separate your critical payment workflows from your bulk-processing jobs. Put GPU-intensive activities on dedicated GPU worker queues. Don't let a noisy neighbor bring down your critical path.
[seriously] **Number three:** Always use the **Patching API** when deploying workflow code changes. Never modify the command sequence of in-flight workflows without a version guard. [cautiously] This is the number one cause of production incidents in Temporal deployments, and it's completely preventable.
[energetic] **Number four:** Set up **Prometheus plus Grafana** from day one. Even before you go to production. Alert on \`schedule_to_start_latency\`, \`workflow_task_execution_failed\`, and \`sticky_cache_hit\` rate. Import dashboard ID 10137 and you'll have instant visibility.
[excited] **Number five:** Use **Nexus** for cross-team orchestration instead of building custom HTTP or gRPC bridges between namespaces. You get durable, type-safe RPC with automatic retries, timeouts, and cancellation propagation — for free.
#### 📚 Your Next Step
[inspiringly] Audit your current Temporal deployment against these 6 patterns. My recommendation? Start with **observability** — you can't improve what you can't measure. Once you can see your metrics, the right scaling and routing decisions will become obvious.
[warmly] Thank you for your time! Questions?`,
        },
      ],
    },
  ],
};
