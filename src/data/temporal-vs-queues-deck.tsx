import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const temporalVsQueuesDeck: Deck = {
  id: 'temporal-vs-queues',
  name: '7 Temporal vs. Traditional Queue Architectures',
  description:
    'Temporal vs Kafka vs SQS vs Celery vs Airflow vs Step Functions vs BullMQ — when to pick which',
  category: 'Agent',
  theme: 'night',
  kenBurns: true,
  cardStyle: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80)',
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
          title: 'Temporal vs. Traditional Queue Architectures',
          content: (
            <div>
              <GSAPAnimated animation="rotateIn" duration={1.2}>
                <div style={{ fontSize: '1.5rem', color: '#0ea5e9' }}>
                  <SvgIcon iconName="duo-scale-balanced" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  Temporal vs Kafka vs SQS vs Celery vs Airflow vs Step Functions vs BullMQ
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" duration={0.8} delay={0.3}>
                <div style={{ fontSize: '1.2rem', color: '#10b981', lineHeight: '2', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Deck Roadmap — 7 Architectures"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["🎯 This Deck"] --> B["Temporal"]
    A --> C["Kafka"]
    A --> D["SQS"]
    A --> E["Celery"]
    A --> F["Airflow"]
    A --> G["Step Functions"]
    A --> H["BullMQ"]
    B --> I["✅ Pros & Cons"]
    C --> I
    D --> I
    E --> I
    F --> I
    G --> I
    H --> I
    I --> J["🏆 Decision<br/>Matrix"]
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#5c1a1a,color:#fecaca,stroke:#aaa,stroke-width:1.5px
    style F fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style G fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style H fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style I fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style J fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <div>
                    <SvgIcon iconName="duo-users" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Audience:</strong> Backend engineers, platform teams, architects choosing between orchestration approaches
                  </div>
                  <div>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>What you'll get:</strong> 7 architectures compared head-to-head — strengths, weaknesses, sweet spots
                  </div>
                  <div>
                    <SvgIcon iconName="duo-circle-info" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Note:</strong> Focus on production trade-offs, not hello-world demos
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
          notes: `### Temporal vs. Traditional Queue Architectures
[cheerfully] Welcome everyone! Today we're going to tackle one of the most important architectural decisions backend engineers face — choosing the right **queue or orchestration tool** for your system. [excited] We're comparing **seven** different architectures head-to-head: Temporal, Apache Kafka, Amazon SQS 👉 'ess-queue-ess', Celery, Apache Airflow, AWS Step Functions, and BullMQ 👉 'bull-em-queue'.
#### 🎯 What You'll Learn
[confidently] This isn't a "hello world" overview. We're focusing on **production trade-offs** — the stuff that bites you six months after you pick a tool. By the end, you'll have a clear mental model for when to reach for each architecture, and more importantly, when *not* to.
[seriously] Whether you're building event-driven microservices, scheduling data pipelines, or orchestrating complex business workflows, picking the wrong tool creates **accidental complexity** that's painful to undo. [energetic] So let's make sure you pick wisely from the start.
Let's begin with a bird's-eye view of all seven architectures.`,
        },
        /* ---------- Slide 2: Overview ---------- */
        {
          id: 2,
          title: 'Overview — 7 Architectures at a Glance',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="Architecture Landscape"
                  diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
graph TB
    A["7 Queue &<br/>Orchestration<br/>Architectures"] --> B["Workflow<br/>Orchestration"]
    A --> C["Message<br/>Brokers"]
    A --> D["Task<br/>Queues"]
    A --> E["DAG<br/>Schedulers"]
    B --> B1["Temporal"]
    B --> B2["AWS Step Functions"]
    C --> C1["Apache Kafka"]
    C --> C2["Amazon SQS"]
    D --> D1["Celery"]
    D --> D2["BullMQ"]
    E --> E1["Apache Airflow"]
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style B1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style B2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style C1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style C2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style D1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style D2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style E1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px`}
                />
              </div>
              <h4>Architecture Categories</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '1.2rem', marginTop: '14px' }}>
                <GSAPStaggerList stagger={0.08} duration={0.6}>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>1</span>
                    <strong>Temporal</strong> — Durable execution, workflow-as-code
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>2</span>
                    <strong>Apache Kafka</strong> — Event streaming &amp; log-based broker
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>3</span>
                    <strong>Amazon SQS</strong> — Managed message queue
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>4</span>
                    <strong>Celery</strong> — Python distributed task queue
                  </div>
                </GSAPStaggerList>
                <GSAPStaggerList stagger={0.08} duration={0.6}>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>5</span>
                    <strong>Apache Airflow</strong> — DAG-based workflow scheduler
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>6</span>
                    <strong>AWS Step Functions</strong> — Serverless state machines
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>7</span>
                    <strong>BullMQ</strong> — Redis-backed Node.js job queue
                  </div>
                </GSAPStaggerList>
              </div>
            </div>
          ),
          notes: `### Overview — 7 Architectures at a Glance
[conversational] Alright, here's the landscape at a glance. We've grouped all seven architectures into **four categories** based on what they fundamentally do.
#### 🗂️ The Four Categories
[confidently] First up, **Workflow Orchestration** — this is where Temporal and AWS Step Functions live. These tools let you define multi-step processes where a central controller manages the flow. [storytelling] Think of it like a conductor leading an orchestra — one entity decides what happens next.
[conversational] Next, **Message Brokers** — Apache Kafka and Amazon SQS. These are the pipes that move data between services. Kafka is a high-throughput event streaming platform, while SQS is a simple managed queue.
Then we have **Task Queues** — Celery and BullMQ. These are worker-based systems where you push jobs onto a queue and background workers pick them up and execute them. Celery is the Python standard, BullMQ is the Node.js equivalent.
[lecture] Finally, **DAG Schedulers** — Apache Airflow. DAG 👉 'dag' stands for Directed Acyclic Graph. Airflow defines tasks and their dependencies as a graph, then runs them on a schedule.
\`\`\`mermaid
graph TB
    A["7 Architectures"] --> B["Workflow Orchestration"]
    A --> C["Message Brokers"]
    A --> D["Task Queues"]
    A --> E["DAG Schedulers"]
    style A fill:#ffd700,color:#000
    style B fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#e1bee7,color:#000
    style E fill:#ffcdd2,color:#000
\`\`\`
[seriously] The key insight here is that these categories solve **fundamentally different problems**. A message broker is not an orchestrator. A task queue is not a streaming platform. Mixing them up is where teams get into trouble.
[energetic] Now let's explore *why* this distinction matters so much in practice.`,
        },
        /* ---------- Slide 3: Why It Matters ---------- */
        {
          id: 3,
          title: 'Why Architecture Choice Matters',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Wrong Tool = Accidental Complexity"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["📋 Business<br/>Requirement"] --> B{"Right<br/>Tool?"}
    B -->|"Yes"| C["✅ Clean<br/>Architecture"]
    B -->|"No"| D["🔥 Accidental<br/>Complexity"]
    D --> E["Retry Spaghetti<br/>DLQ Debt<br/>State Tracking"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style E fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>The Problem</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Teams default to the tool they know — <strong>Kafka for everything</strong>, SQS as a crutch</li>
                    <li>Wrong tool → retry spaghetti, DLQ debt, manual state tracking</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Key Dimensions</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Durability</strong> — does the system survive crashes without data loss?</li>
                    <li><strong>Orchestration vs Choreography</strong> — central controller or event-driven reactions?</li>
                    <li><strong>State management</strong> — who tracks workflow progress?</li>
                    <li><strong>Latency profile</strong> — real-time streaming or batch scheduling?</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.55}>
                <div style={{ padding: '0.5rem', background: 'rgba(14,165,233,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  🎯 <strong>Goal:</strong> Match the tool to the problem — not the other way around.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Why Architecture Choice Matters
[seriously] So why does picking the right architecture matter so much? Let me paint a picture you might recognise.
#### ⚠️ The Problem
[storytelling] Teams almost always default to the tool they already know. If you're a Kafka shop, suddenly *everything* becomes an event stream — even things that are really multi-step business transactions. [concerned] If you only have SQS, you start duct-taping retries and DLQs 👉 'dee-el-queues' together to simulate orchestration. The result? **Retry spaghetti**, mountains of dead-letter queue debt, and manual state tracking spreadsheets. Nobody wants that.
\`\`\`mermaid
flowchart LR
    A["📋 Requirement"] --> B{"Right Tool?"}
    B -->|"Yes"| C["✅ Clean Architecture"]
    B -->|"No"| D["🔥 Accidental Complexity"]
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffcdd2,color:#000
\`\`\`
#### 📐 Key Dimensions
[lecture] When evaluating any of these seven tools, focus on four dimensions. **Durability** — does the system survive crashes without losing data or state? **Orchestration vs choreography** — do you want a central controller directing the flow, or do services react to events independently? **State management** — who is responsible for tracking where a workflow is in its lifecycle? And finally, **latency profile** — are you building real-time streaming or scheduled batch processing?
[confidently] These four dimensions will guide every decision we make in this deck. Our goal is simple: match the tool to the problem, not the other way around.
[energetic] With that framework in mind, let's dive into our first architecture — Temporal.`,
        },
      ],
    },

    /* ================================================================
       GROUP 2 — Temporal
       ================================================================ */
    {
      id: 'technique-1-temporal',
      title: '1. Temporal',
      slides: [
        /* ---------- Slide 4: Temporal Overview ---------- */
        {
          id: 4,
          title: '1. Temporal — Overview',
          icon: { name: 'duo-diagram-project' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="flipCard" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is Temporal?</h4>
                  <p style={{ fontSize: '0.95rem' }}>A <strong>durable execution platform</strong> that persists workflow state automatically. You write normal code (Go, TypeScript, Java, Python) — Temporal handles retries, timeouts, crash recovery, and state persistence. Workflows can run for <strong>seconds to years</strong>.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Temporal Architecture"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["Client"] -->|"Start"| B["Temporal<br/>Server"]
    B -->|"Task Queue"| C["Worker"]
    C -->|"Execute<br/>Activity"| D["External<br/>Service"]
    C -->|"Heartbeat"| B
    B -->|"Event History<br/>Persisted"| E["Database"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Core Architecture</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Server</strong> — manages task queues, event history, timers</li>
                    <li><strong>Workers</strong> — execute workflow &amp; activity code, stateless &amp; scalable</li>
                    <li><strong>Event History</strong> — every step persisted, enables replay after crash</li>
                    <li><strong>SDKs</strong> — Go, TypeScript, Java, Python, .NET</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.55}>
                <p style={{ fontSize: '0.95rem' }}><strong>Key insight:</strong> Your workflow code <em>is</em> the state machine — no YAML, no JSON configs.</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 1. Temporal — Overview
[excited] Let's kick things off with **Temporal** — arguably the most powerful tool on our list for complex workflows.
#### 🔧 What Is Temporal?
[lecture] Temporal is a **durable execution platform**. That's a fancy way of saying your code runs reliably even when things go wrong. [confidently] You write normal functions in Go, TypeScript, Java, or Python, and Temporal automatically handles retries, timeouts, crash recovery, and persisting your workflow's state. The magic is that your workflow can run for **seconds or even years** and Temporal keeps track of exactly where it is.
[storytelling] Think of it like a video game with auto-save. If your character dies — or in our case, if a server crashes — you don't start over from the beginning. You resume right where you left off.
#### 🏗️ Core Architecture
\`\`\`mermaid
flowchart LR
    A["Client"] -->|"Start"| B["Temporal Server"]
    B -->|"Task Queue"| C["Worker"]
    C -->|"Execute"| D["External Service"]
    style A fill:#4fc3f7,color:#000
    style B fill:#ffd700,color:#000
    style C fill:#81c784,color:#000
    style D fill:#e1bee7,color:#000
\`\`\`
The architecture has four main pieces. The **Server** manages task queues, event history, and timers. **Workers** are stateless processes that execute your workflow and activity code — you can scale them horizontally like any microservice. The **Event History** is the secret sauce — every single step is persisted, which enables replay after a crash. And you interact with all of this through **SDKs** available in Go, TypeScript, Java, Python, and .NET.
[seriously] Here's the key insight that makes Temporal different from everything else: your workflow code *is* the state machine. No YAML files, no JSON configs, no drag-and-drop builders. Just normal code with special guarantees.
[energetic] Let's see how this actually works under the hood.`,
        },
        /* ---------- Slide 5: Temporal How It Works ---------- */
        {
          id: 5,
          title: '1. Temporal — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Temporal Replay Mechanism"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["Workflow<br/>Start"] --> B["Activity 1<br/>✅ Completed"]
    B --> C["Activity 2<br/>✅ Completed"]
    C --> D["💥 Worker<br/>Crash"]
    D --> E["New Worker<br/>Picks Up"]
    E --> F["Replay:<br/>Skip 1 & 2"]
    F --> G["Activity 3<br/>▶️ Execute"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style E fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style F fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style G fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Event Sourcing &amp; Deterministic Replay</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Every activity result, timer, and signal is stored as an <strong>event</strong></li>
                    <li>On crash, a new worker <strong>replays</strong> events — skips completed work, resumes from where it stopped</li>
                    <li>Workflow code must be <strong>deterministic</strong> — no random(), no Date.now() inside workflow</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Unique Capabilities</h4>
                  <GSAPStaggerList stagger={0.1} duration={0.6}>
                    <div style={{ marginBottom: '0.4rem', fontSize: '0.95rem' }}>⏱️ <strong>Durable Timers</strong> — sleep for days/months without holding a thread</div>
                    <div style={{ marginBottom: '0.4rem', fontSize: '0.95rem' }}>📡 <strong>Signals &amp; Queries</strong> — interact with running workflows in real-time</div>
                    <div style={{ marginBottom: '0.4rem', fontSize: '0.95rem' }}>👶 <strong>Child Workflows</strong> — compose complex logic hierarchically</div>
                    <div style={{ marginBottom: '0.4rem', fontSize: '0.95rem' }}>🔄 <strong>Continue-As-New</strong> — unbounded execution without history bloat</div>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 1. Temporal — How It Works
[conversational] Now let's look under the hood. How does Temporal actually deliver on its promise of durable execution?
#### 📼 Event Sourcing & Deterministic Replay
[lecture] Every single thing that happens in a Temporal workflow — every activity result, every timer that fires, every signal received — gets stored as an **event** in the event history. This is classic event sourcing.
[excited] Here's the really clever part. If a worker crashes mid-workflow, a new worker picks up the workflow and **replays** the event history. It skips over any completed activities — since their results are already recorded — and resumes execution from exactly where things left off. No duplicate work, no lost state.
\`\`\`mermaid
flowchart TB
    A["Workflow Start"] --> B["Activity 1 ✅"]
    B --> C["Activity 2 ✅"]
    C --> D["💥 Crash"]
    D --> E["New Worker Replays"]
    E --> F["Skip 1 & 2, Execute 3"]
    style A fill:#4fc3f7,color:#000
    style D fill:#ffcdd2,color:#000
    style E fill:#ffd700,color:#000
    style F fill:#81c784,color:#000
\`\`\`
[cautiously] There's one important rule though: workflow code must be **deterministic**. That means no \`Math.random()\`, no \`Date.now()\` inside your workflow function. Why? Because during replay, the code runs again, and it needs to produce the same decisions as the first time. Non-deterministic calls would cause the replay to diverge.
#### ✨ Unique Capabilities
[pleased] Temporal has a few superpowers that no other tool on this list offers. **Durable Timers** let you sleep for days or months without holding a thread — try that with a regular \`setTimeout\`! **Signals and Queries** let you interact with a running workflow in real-time. **Child Workflows** enable composing complex logic hierarchically. And **Continue-As-New** handles unbounded execution without the event history growing forever.
[conversational] Now let's weigh the trade-offs — what are the pros and cons?`,
        },
        /* ---------- Slide 6: Temporal Pros & Cons ---------- */
        {
          id: 6,
          title: '1. Temporal — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Temporal Trade-off Radar"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["✅ Strengths"] --> B["Crash Recovery<br/>Built-in"]
    A --> C["Multi-language<br/>SDKs"]
    A --> D["Long-Running<br/>Workflows"]
    E["❌ Weaknesses"] --> F["Operational<br/>Overhead"]
    E --> G["Determinism<br/>Constraint"]
    E --> H["Not for Pure<br/>Event Streaming"]
    style A fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style B fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style E fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style F fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style G fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style H fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Automatic crash recovery</strong> — no manual state checkpointing</li>
                    <li>Write <strong>normal code</strong> — no YAML/JSON state machine definitions</li>
                    <li><strong>Multi-language</strong> — Go, TypeScript, Java, Python, .NET workers in one cluster</li>
                    <li>Built-in <strong>retry policies</strong>, timeouts, heartbeats, cancellation scopes</li>
                    <li>Workflows can run for <strong>years</strong> with durable timers</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Operational overhead</strong> — self-hosted requires Cassandra/PostgreSQL + Elasticsearch</li>
                    <li><strong>Determinism constraint</strong> — workflow code cannot use non-deterministic APIs</li>
                    <li>Not a <strong>message broker</strong> — not designed for event streaming or pub/sub fan-out</li>
                    <li>Learning curve — replay semantics and versioning require practice</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div style={{ padding: '0.5rem', background: 'rgba(14,165,233,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  🏆 <strong>Sweet spot:</strong> Multi-step business transactions, long-running processes, Saga orchestration, anything that needs crash-proof state.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 1. Temporal — Pros & Cons
[conversational] Let's be honest about Temporal's trade-offs. It's a powerful tool, but it's not the right choice for everything.
#### ✅ Pros
[pleased] The biggest win is **automatic crash recovery**. You don't need to write checkpointing code or worry about where to save state — Temporal does it for you. [confidently] You write **normal code** in your favourite language, not YAML or JSON state machine definitions. It supports **multiple languages** — you can even have Go workers and TypeScript workers in the same Temporal cluster, communicating through shared workflows. Retry policies, timeouts, heartbeats, and cancellation scopes are all **built-in**, not bolted on. [storytelling] And workflows can run for **years** with durable timers — imagine scheduling a subscription renewal twelve months from now and knowing it will fire reliably.
\`\`\`mermaid
flowchart LR
    A["✅ Strengths"] --> B["Crash Recovery"]
    A --> C["Multi-Language"]
    A --> D["Long-Running"]
    E["❌ Weaknesses"] --> F["Ops Overhead"]
    E --> G["Determinism Rule"]
    style A fill:#81c784,color:#000
    style E fill:#ffcdd2,color:#000
\`\`\`
#### ❌ Cons
[cautiously] On the flip side, there's **operational overhead**. Self-hosting Temporal requires running Cassandra or PostgreSQL plus Elasticsearch. That's a non-trivial infrastructure commitment. Temporal Cloud solves this, but it's a paid service. [concerned] The **determinism constraint** can trip up developers who are used to calling APIs or generating random numbers freely in their code. Temporal is also **not a message broker** — don't try to use it for event streaming or pub/sub fan-out, because that's simply not what it's designed for. And there's a **learning curve** around replay semantics and workflow versioning that takes practice to master.
#### 🏆 Sweet Spot
[confidently] Multi-step business transactions, long-running processes, Saga 👉 'SAH-gah' orchestration, and anything that absolutely needs crash-proof state. Think payment flows, order fulfilment, subscription management.
[energetic] Now let's look at the polar opposite — Apache Kafka, the king of event streaming.`,
        },
      ],
    },

    /* ================================================================
       GROUP 3 — Apache Kafka
       ================================================================ */
    {
      id: 'technique-2-kafka',
      title: '2. Apache Kafka',
      slides: [
        /* ---------- Slide 7: Kafka Overview ---------- */
        {
          id: 7,
          title: '2. Apache Kafka — Overview',
          icon: { name: 'duo-arrow-right-arrow-left' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is Kafka?</h4>
                  <p style={{ fontSize: '0.95rem' }}>A <strong>distributed event streaming platform</strong> built around an append-only, partitioned log. Producers write events, consumers read at their own pace. Originally built at LinkedIn for high-throughput data pipelines, now the backbone of most event-driven architectures.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Kafka Architecture"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    P1["Producer A"] --> T["Topic<br/>Partitioned Log"]
    P2["Producer B"] --> T
    T --> C1["Consumer<br/>Group 1"]
    T --> C2["Consumer<br/>Group 2"]
    T --> C3["Consumer<br/>Group 3"]
    style P1 fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style P2 fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style T fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C1 fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style C2 fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style C3 fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Core Concepts</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Topics &amp; Partitions</strong> — data split across partitions for parallelism</li>
                    <li><strong>Consumer Groups</strong> — multiple independent subscribers per topic</li>
                    <li><strong>Retention</strong> — messages persist for days/weeks, enabling replay</li>
                    <li><strong>Exactly-once semantics</strong> (EOS) — with idempotent producers + transactions</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.55}>
                <p style={{ fontSize: '0.95rem' }}><strong>Throughput:</strong> Millions of events/sec. <strong>Latency:</strong> Single-digit ms end-to-end.</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 2. Apache Kafka — Overview
[energetic] Now let's pivot to something completely different. [storytelling] If Temporal is the orchestra conductor, **Kafka** is the highway system — built for moving massive amounts of data at incredible speed.
#### 📨 What Is Kafka?
[lecture] Kafka is a **distributed event streaming platform** built around an append-only, partitioned log. Producers write events to topics, and consumers read those events at their own pace. [confidently] It was originally built at LinkedIn to handle their firehose of data, and it's now the backbone of most event-driven architectures in the industry.
[storytelling] Here's a simple analogy: imagine a newspaper that never throws away old editions. Anyone can go back and re-read last Tuesday's paper. That's what Kafka's retention-based log gives you — consumers can replay past events whenever they need to.
#### 🔧 Core Concepts
\`\`\`mermaid
flowchart LR
    P1["Producer A"] --> T["Topic (Partitioned Log)"]
    P2["Producer B"] --> T
    T --> C1["Consumer Group 1"]
    T --> C2["Consumer Group 2"]
    style T fill:#ffd700,color:#000
    style C1 fill:#81c784,color:#000
    style C2 fill:#81c784,color:#000
\`\`\`
[lecture] **Topics and Partitions** split data across partitions for parallelism — more partitions means more throughput. **Consumer Groups** allow multiple independent subscribers to the same topic without interfering with each other. **Retention** means messages persist for days or weeks, enabling replay. And with **exactly-once semantics** (EOS 👉 'ee-oh-ess'), combining idempotent producers with transactions, you can guarantee no duplicates.
[excited] The numbers are staggering — **millions of events per second** with **single-digit millisecond latency** end-to-end. [cautiously] But as we'll see, that raw power comes with trade-offs.`,
        },
        /* ---------- Slide 8: Kafka Pros & Cons ---------- */
        {
          id: 8,
          title: '2. Apache Kafka — Pros & Cons',
          icon: { name: 'duo-scale-unbalanced' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Kafka: Streaming vs Orchestration"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["Kafka"] --> B{"Use Case?"}
    B -->|"Event streaming"| C["✅ Perfect Fit"]
    B -->|"Workflow<br/>orchestration"| D["⚠️ You'll Build<br/>a State Machine"]
    D --> E["DLQ + Retry Topic<br/>+ Status DB<br/>= Mini Temporal"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style E fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Extreme throughput</strong> — millions of events per second at low latency</li>
                    <li><strong>Replay-friendly</strong> — retention-based log means consumers can re-read history</li>
                    <li><strong>Fan-out</strong> — multiple consumer groups independently subscribe to the same topic</li>
                    <li><strong>Ecosystem</strong> — Kafka Streams, Connect, Schema Registry, ksqlDB</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>No built-in orchestration</strong> — you hand-roll state machines with DLQ + retry topics</li>
                    <li><strong>Operational complexity</strong> — ZooKeeper (legacy) / KRaft, broker rebalancing, partition management</li>
                    <li><strong>At-least-once by default</strong> — exactly-once requires careful config</li>
                    <li>Not designed for <strong>long-running stateful workflows</strong> — you must build that layer</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.6}>
                <div style={{ padding: '0.5rem', background: 'rgba(16,185,129,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  🏆 <strong>Sweet spot:</strong> Event streaming, real-time analytics, CDC pipelines, decoupling microservices via events.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 2. Apache Kafka — Pros & Cons
[conversational] Now that you understand what Kafka is, let's honestly evaluate when it shines and when it falls short.
#### ✅ Pros
[pleased] Kafka's **extreme throughput** is unmatched — millions of events per second at very low latency. It's **replay-friendly** because the retention-based log means consumers can re-read historical data anytime, which is incredibly valuable for debugging and reprocessing. [confidently] **Fan-out** is elegant — multiple consumer groups can independently subscribe to the same topic without affecting each other. And the **ecosystem** is massive: Kafka Streams for stream processing, Connect for data integration, Schema Registry for type safety, and ksqlDB 👉 'kay-sequel-dee-bee' for SQL-like stream queries.
\`\`\`mermaid
flowchart TB
    A["Kafka"] --> B{"Use Case?"}
    B -->|"Streaming"| C["✅ Perfect"]
    B -->|"Orchestration"| D["⚠️ You'll reinvent Temporal"]
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffcdd2,color:#000
\`\`\`
#### ❌ Cons
[concerned] Here's the critical one: Kafka has **no built-in orchestration**. If you need multi-step workflows, you'll end up hand-rolling state machines with DLQs 👉 'dee-el-queues', retry topics, and status databases — essentially building a worse version of Temporal on top of Kafka. [cautiously] **Operational complexity** is high — you need to manage ZooKeeper (legacy) or KRaft 👉 'kraft' mode, handle broker rebalancing, and tune partition management. Kafka is **at-least-once by default** — achieving exactly-once requires careful configuration. And it's simply not designed for **long-running stateful workflows** — you have to build that entire layer yourself.
#### 🏆 Sweet Spot
[confidently] Event streaming, real-time analytics, CDC 👉 'see-dee-see' (change data capture) pipelines, and decoupling microservices via events. If data is flowing and reactions are independent, Kafka is king.
[energetic] Next up — Amazon SQS, the simplest option on the list.`,
        },
      ],
    },

    /* ================================================================
       GROUP 4 — Amazon SQS
       ================================================================ */
    {
      id: 'technique-3-sqs',
      title: '3. Amazon SQS',
      slides: [
        /* ---------- Slide 9: SQS Overview ---------- */
        {
          id: 9,
          title: '3. Amazon SQS — Overview',
          icon: { name: 'duo-cloud' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="flipCard" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is SQS?</h4>
                  <p style={{ fontSize: '0.95rem' }}>Amazon&apos;s <strong>fully managed message queue service</strong>. Two flavours: <strong>Standard</strong> (best-effort ordering, at-least-once, nearly unlimited throughput) and <strong>FIFO</strong> (exactly-once processing, strict ordering, 3 000 msg/s with batching). Zero infrastructure to manage.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="SQS Message Flow"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["Producer"] -->|"SendMessage"| B["SQS Queue"]
    B -->|"ReceiveMessage"| C["Consumer"]
    C -->|"DeleteMessage"| B
    B -->|"Visibility Timeout<br/>Expired"| D["♻️ Redelivery"]
    B -->|"MaxReceives<br/>Exceeded"| E["📥 DLQ"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Visibility timeout</strong> — message hidden from other consumers while being processed</li>
                    <li><strong>DLQ integration</strong> — failed messages routed after N attempts</li>
                    <li><strong>Long polling</strong> — reduces empty receives, lowers cost</li>
                    <li><strong>Lambda triggers</strong> — serverless processing with automatic scaling</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.55}>
                <p style={{ fontSize: '0.95rem' }}><strong>Pricing model:</strong> Pay per request — $0.40/million messages (Standard). No idle cost.</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 3. Amazon SQS — Overview
[conversational] Let's look at the simplest tool on our list — **Amazon SQS**. [storytelling] If Kafka is a highway system, SQS is more like a post office. You drop off a message, someone picks it up, done.
#### ☁️ What Is SQS?
[lecture] SQS stands for **Simple Queue Service**, and it really lives up to the “simple” part. It's Amazon's **fully managed message queue** — zero infrastructure to manage, it auto-scales, and you pay only for what you use. [confidently] It comes in two flavours: **Standard** gives you best-effort ordering and at-least-once delivery with nearly unlimited throughput. **FIFO** 👉 'FY-foh' gives you exactly-once processing and strict ordering, but caps at 3,000 messages per second with batching.
#### ⚙️ How It Works
\`\`\`mermaid
flowchart LR
    A["Producer"] -->|"Send"| B["SQS Queue"]
    B -->|"Receive"| C["Consumer"]
    B -->|"Timeout"| D["♻️ Redelivery"]
    B -->|"Max Retries"| E["📥 DLQ"]
    style B fill:#ffd700,color:#000
    style C fill:#81c784,color:#000
    style E fill:#ffcdd2,color:#000
\`\`\`
[conversational] The flow is straightforward. A producer sends a message, a consumer receives it, processes it, then deletes it from the queue. [lecture] The **visibility timeout** is an important concept — once a consumer picks up a message, it becomes invisible to other consumers for a set period. If the consumer crashes and doesn't delete the message in time, SQS makes it visible again for another consumer to pick up. After a configurable number of failed attempts, the message gets routed to a **Dead Letter Queue**. And with **Lambda triggers**, you can process messages in a fully serverless fashion with automatic scaling.
[pleased] The pricing is incredibly simple: **$0.40 per million messages** for Standard queues. No idle cost at all — if nothing flows through, you pay nothing.
Let's weigh the pros and cons.`,
        },
        /* ---------- Slide 10: SQS Pros & Cons ---------- */
        {
          id: 10,
          title: '3. Amazon SQS — Pros & Cons',
          icon: { name: 'duo-cloud-check' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="SQS Decision: Standard vs FIFO"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["SQS"] --> B{"Need<br/>Ordering?"}
    B -->|"No"| C["Standard Queue<br/>∞ Throughput"]
    B -->|"Yes"| D["FIFO Queue<br/>3K msg/s"]
    C --> E["At-Least-Once<br/>Delivery"]
    D --> F["Exactly-Once<br/>Processing"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style F fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Zero ops</strong> — fully managed, auto-scales, no brokers to maintain</li>
                    <li><strong>Dirt cheap</strong> at moderate scale — pennies per million messages</li>
                    <li>Native <strong>Lambda integration</strong> — event-driven serverless processing</li>
                    <li><strong>DLQ built-in</strong> — automatic failure routing after maxReceiveCount</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>No replay</strong> — consumed messages are deleted, no retention-based re-read</li>
                    <li><strong>FIFO throughput ceiling</strong> — 3 000 msg/s with batching (300 without)</li>
                    <li><strong>No orchestration</strong> — SQS is point-to-point, no workflow state tracking</li>
                    <li><strong>AWS lock-in</strong> — tightly coupled to the AWS ecosystem</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div style={{ padding: '0.5rem', background: 'rgba(249,115,22,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  🏆 <strong>Sweet spot:</strong> Decoupling services, work distribution, Lambda-triggered processing, simple fan-out with SNS.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 3. Amazon SQS — Pros & Cons
[conversational] Let's evaluate SQS honestly — it's a brilliantly simple tool, but that simplicity comes with real limitations.
#### ✅ Pros
[pleased] The number one selling point is **zero ops**. Fully managed, auto-scales, no brokers to maintain, no clusters to monitor. It's **dirt cheap** at moderate scale — pennies per million messages means you can use it freely without worrying about costs. [confidently] The native **Lambda integration** is seamless — SQS can trigger Lambda functions automatically, giving you event-driven serverless processing with zero plumbing. And **DLQ is built-in** — just set a \`maxReceiveCount\` and failed messages get routed automatically.
\`\`\`mermaid
flowchart TB
    A["SQS"] --> B{"Need Ordering?"}
    B -->|"No"| C["Standard: ∞ Throughput"]
    B -->|"Yes"| D["FIFO: 3K msg/s"]
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#81c784,color:#000
\`\`\`
#### ❌ Cons
[concerned] The biggest limitation is **no replay**. Once a consumer processes and deletes a message, it's gone forever — there's no retention-based re-read like Kafka offers. If you need to reprocess old data, tough luck. [cautiously] **FIFO throughput has a ceiling** at 3,000 messages per second with batching, or just 300 without. For high-volume ordered processing, that can be a bottleneck. There's **no orchestration** — SQS is strictly point-to-point with no workflow state tracking. And of course, there's **AWS lock-in** — migrating away from SQS means rewriting your messaging layer.
#### 🏆 Sweet Spot
[confidently] Decoupling services, distributing work, Lambda-triggered processing, and simple fan-out patterns with SNS 👉 'ess-en-ess'. If your use case is "send a message, process it somewhere else," SQS is often the right answer.
[energetic] Let's move on to the task queue world — starting with Celery, the Python developer's go-to.`,
        },
      ],
    },

    /* ================================================================
       GROUP 5 — Celery
       ================================================================ */
    {
      id: 'technique-4-celery',
      title: '4. Celery',
      slides: [
        /* ---------- Slide 11: Celery Overview ---------- */
        {
          id: 11,
          title: '4. Celery — Overview',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is Celery?</h4>
                  <p style={{ fontSize: '0.95rem' }}>A <strong>Python distributed task queue</strong> backed by a message broker (Redis or RabbitMQ). Define tasks as decorated Python functions, push them to a queue, workers execute them asynchronously. The de-facto standard for Python background job processing.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Celery Architecture"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["Django/Flask<br/>App"] -->|"task.delay()"| B["Broker<br/>Redis/RabbitMQ"]
    B --> C["Worker 1"]
    B --> D["Worker 2"]
    C --> E["Result<br/>Backend"]
    D --> E
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style E fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Architecture</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Broker</strong> — Redis or RabbitMQ transports task messages</li>
                    <li><strong>Workers</strong> — prefork or eventlet pools consume and execute tasks</li>
                    <li><strong>Result backend</strong> — Redis, database, or S3 stores return values</li>
                    <li><strong>Canvas</strong> — chain(), group(), chord() for composing workflows</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.55}>
                <p style={{ fontSize: '0.95rem' }}><strong>Maturity:</strong> 15+ years, huge community, Django &amp; Flask integration built-in.</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 4. Celery — Overview
[warmly] If you've ever built a Python web app, chances are you've used or at least heard of **Celery**. It's the **de-facto standard** for background job processing in the Python ecosystem.
#### 🐍 What Is Celery?
[lecture] Celery is a **distributed task queue** backed by a message broker — typically Redis or RabbitMQ 👉 'rabbit-em-queue'. The idea is dead simple: you decorate a Python function with \`@task\`, call \`task.delay()\` to push it onto a queue, and a pool of background workers picks it up and executes it asynchronously. Your web request returns instantly while the heavy work happens in the background.
[storytelling] Think of it like a restaurant kitchen. The waiter (your web app) takes the order and passes it to the kitchen (the worker). The kitchen does the cooking independently, and the food is ready when it's ready.
#### 🏗️ Architecture
\`\`\`mermaid
flowchart LR
    A["Django/Flask App"] -->|"task.delay()"| B["Broker (Redis)"]
    B --> C["Worker 1"]
    B --> D["Worker 2"]
    C --> E["Result Backend"]
    D --> E
    style A fill:#4fc3f7,color:#000
    style B fill:#ffd700,color:#000
    style C fill:#81c784,color:#000
    style D fill:#81c784,color:#000
\`\`\`
[confidently] The **Broker** (Redis or RabbitMQ) transports task messages between your app and the workers. **Workers** run as separate processes using prefork or eventlet 👉 'ee-vent-let' pools to consume and execute tasks. A **Result backend** (Redis, a database, or even S3) stores the return values so you can check on them later. And the **Canvas** primitives — \`chain()\`, \`group()\`, \`chord()\` — let you compose tasks into simple workflows.
[pleased] Celery has been around for **15+ years** with a huge community and first-class Django and Flask integration. It's battle-tested in production at thousands of companies.
Let's look at the trade-offs.`,
        },
        /* ---------- Slide 12: Celery Pros & Cons ---------- */
        {
          id: 12,
          title: '4. Celery — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Celery Canvas Composition"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["chain()"] --> B["Task A"]
    B --> C["Task B"]
    C --> D["Task C"]
    E["group()"] --> F["Task X"]
    E --> G["Task Y"]
    E --> H["Task Z"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style E fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style F fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style G fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style H fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Dead simple</strong> for Python devs — <code>@task</code> decorator, <code>task.delay()</code></li>
                    <li><strong>Canvas primitives</strong> — chain, group, chord for composing complex workflows</li>
                    <li><strong>Mature ecosystem</strong> — 15+ years, first-class Django/Flask support</li>
                    <li><strong>Flexible broker</strong> — switch between Redis &amp; RabbitMQ without code changes</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Python only</strong> — workers must be Python processes</li>
                    <li><strong>No durable state</strong> — tasks lost if broker crashes before acknowledgement</li>
                    <li><strong>Canvas limitations</strong> — complex workflows become hard to debug and monitor</li>
                    <li><strong>No built-in long-running support</strong> — tasks that take hours need custom timeouts</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.6}>
                <div style={{ padding: '0.5rem', background: 'rgba(16,185,129,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  🏆 <strong>Sweet spot:</strong> Python web app background jobs — email sending, image processing, report generation, periodic tasks (Celery Beat).
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 4. Celery — Pros & Cons
[conversational] Celery has been the Python background job workhorse for over a decade. Let's see where it excels and where it stumbles.
#### ✅ Pros
[pleased] It's **dead simple** for Python developers — just add a \`@task\` decorator and call \`.delay()\`. That's it. You're running background jobs. [confidently] The **Canvas primitives** are nifty — \`chain()\` runs tasks sequentially, \`group()\` runs them in parallel, and \`chord()\` runs parallel tasks then gathers results into a callback. It's a **mature ecosystem** with 15+ years of battle-testing and first-class Django/Flask support. And the **broker flexibility** is nice — you can switch between Redis and RabbitMQ without changing your task code.
\`\`\`mermaid
flowchart LR
    A["chain()"] --> B["A → B → C"]
    D["group()"] --> E["X | Y | Z"]
    style A fill:#4fc3f7,color:#000
    style D fill:#ffd700,color:#000
    style B fill:#81c784,color:#000
    style E fill:#81c784,color:#000
\`\`\`
#### ❌ Cons
[concerned] The big one: Celery is **Python only**. If your team is writing Go or Node.js services, you can't use Celery workers. [cautiously] There's **no durable state** — if the broker crashes before a task is acknowledged, that task can be lost. Canvas workflows get **hard to debug** when they become complex — error handling in chained tasks can behave in surprising ways. And there's **no built-in support for long-running tasks** — if a task takes hours, you need to carefully configure timeouts and heartbeats yourself.
#### 🏆 Sweet Spot
[confidently] Python web app background jobs — sending emails, processing images, generating reports, and running periodic tasks with **Celery Beat**. If your world is Django or Flask and you need reliable background processing, Celery is the proven choice.
[energetic] Now let's look at the scheduling heavyweight — Apache Airflow.`,
        },
      ],
    },

    /* ================================================================
       GROUP 6 — Apache Airflow
       ================================================================ */
    {
      id: 'technique-5-airflow',
      title: '5. Apache Airflow',
      slides: [
        /* ---------- Slide 13: Airflow Overview ---------- */
        {
          id: 13,
          title: '5. Apache Airflow — Overview',
          icon: { name: 'duo-diagram-next' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="flipCard" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is Airflow?</h4>
                  <p style={{ fontSize: '0.95rem' }}>An open-source <strong>workflow orchestration platform</strong> built around <strong>DAGs</strong> (Directed Acyclic Graphs). You define task dependencies in Python, and the scheduler runs them on a schedule or trigger. Born at Airbnb, now the standard for data &amp; ML pipeline orchestration.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Airflow DAG Execution"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["Scheduler"] -->|"Trigger"| B["DAG Run"]
    B --> C["Extract<br/>Task"]
    C --> D["Transform<br/>Task"]
    C --> E["Validate<br/>Task"]
    D --> F["Load<br/>Task"]
    E --> F
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style F fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Core Concepts</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>DAG</strong> — Python file defining tasks and their dependencies</li>
                    <li><strong>Operators</strong> — PythonOperator, BashOperator, SparkSubmitOperator, etc.</li>
                    <li><strong>Scheduler</strong> — triggers DAG runs based on cron or external events</li>
                    <li><strong>Executors</strong> — Local, Celery, Kubernetes — scale out task execution</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.55}>
                <p style={{ fontSize: '0.95rem' }}><strong>Managed options:</strong> MWAA (AWS), Cloud Composer (GCP), Astronomer.</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 5. Apache Airflow — Overview
[energetic] Now we enter the world of **batch orchestration** with Apache Airflow — the go-to tool for data engineers everywhere.
#### 🌊 What Is Airflow?
[lecture] Airflow is an open-source **workflow orchestration platform** built around **DAGs** 👉 'dags' — Directed Acyclic Graphs. [conversational] In simple terms, you define your tasks and how they depend on each other using Python code, and Airflow's scheduler runs them on a schedule or trigger. [confidently] It was born at Airbnb to manage their data pipelines, and it quickly became the industry standard for data and ML pipeline orchestration.
[storytelling] Think of Airflow like a smart calendar for your data jobs. You tell it "run this ETL 👉 'ee-tee-el' pipeline every night at 2 AM, but only start the Transform step after Extract finishes." Airflow handles the scheduling, dependency management, and retries.
#### 🔧 Core Concepts
\`\`\`mermaid
flowchart TB
    A["Scheduler"] -->|"Trigger"| B["DAG Run"]
    B --> C["Extract"]
    C --> D["Transform"]
    C --> E["Validate"]
    D --> F["Load"]
    E --> F
    style A fill:#4fc3f7,color:#000
    style B fill:#ffd700,color:#000
    style F fill:#81c784,color:#000
\`\`\`
[lecture] A **DAG** is a Python file that defines tasks and their dependencies — which task runs after which. **Operators** are the building blocks — PythonOperator, BashOperator, SparkSubmitOperator, and over a hundred more. The **Scheduler** triggers DAG runs based on cron expressions or external events. And **Executors** control how tasks actually run — locally for development, on Celery workers for medium scale, or on Kubernetes for massive scale.
[conversational] You don't have to self-host either. There are managed options like MWAA 👉 'em-double-you-ay-ay' from AWS, Cloud Composer from GCP, and Astronomer.
Let's weigh the pros and cons.`,
        },
        /* ---------- Slide 14: Airflow Pros & Cons ---------- */
        {
          id: 14,
          title: '5. Apache Airflow — Pros & Cons',
          icon: { name: 'duo-chart-gantt' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Airflow: Batch vs Real-Time"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["Airflow"] --> B{"Workload?"}
    B -->|"Batch ETL<br/>Scheduled"| C["✅ Perfect"]
    B -->|"Real-time<br/>Low latency"| D["❌ Wrong Tool"]
    B -->|"Long-running<br/>Stateful"| E["⚠️ Use Temporal"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style E fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Visual DAG UI</strong> — Gantt charts, tree view, task logs in the browser</li>
                    <li><strong>Rich operator library</strong> — 100+ built-in operators for AWS, GCP, databases, Spark</li>
                    <li><strong>Backfill &amp; catchup</strong> — re-run historical DAG runs for data reprocessing</li>
                    <li><strong>Huge community</strong> — thousands of contributors, managed cloud offerings</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Batch-oriented</strong> — minimum scheduling interval ~1 min, not for real-time</li>
                    <li><strong>Not event-driven</strong> — best for scheduled pipelines, not reactive workflows</li>
                    <li><strong>Heavy infrastructure</strong> — web server + scheduler + metadata DB + executor</li>
                    <li><strong>DAG parsing overhead</strong> — 1000+ DAGs can slow the scheduler significantly</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div style={{ padding: '0.5rem', background: 'rgba(249,115,22,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  🏆 <strong>Sweet spot:</strong> Batch ETL, data pipelines, ML training orchestration, scheduled report generation.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 5. Apache Airflow — Pros & Cons
[conversational] Airflow is incredibly popular in the data engineering world, but it's important to understand where it fits and where it doesn't.
#### ✅ Pros
[pleased] The **Visual DAG UI** is fantastic — Gantt charts, tree views, and task logs all available in the browser. [storytelling] When something fails at 3 AM, you can see exactly which task broke and why. [confidently] Airflow has a **rich operator library** with 100+ built-in operators for AWS, GCP, databases, Spark, and more — so connecting to external systems is usually just a few lines of configuration. **Backfill and catchup** let you re-run historical DAG runs for data reprocessing, which is essential for data engineering. And the **community is huge** — thousands of contributors, multiple managed cloud offerings, and extensive documentation.
\`\`\`mermaid
flowchart TB
    A["Airflow"] --> B{"Workload?"}
    B -->|"Batch ETL"| C["✅ Perfect"]
    B -->|"Real-time"| D["❌ Wrong Tool"]
    B -->|"Stateful Workflows"| E["⚠️ Use Temporal"]
    style C fill:#81c784,color:#000
    style D fill:#ffcdd2,color:#000
    style E fill:#ffd700,color:#000
\`\`\`
#### ❌ Cons
[seriously] The critical limitation: Airflow is **batch-oriented**. The minimum scheduling interval is roughly one minute, so it's simply not designed for real-time or low-latency use cases. [concerned] It's **not event-driven** — it works best for scheduled pipelines, not reactive workflows that need to respond to events instantly. [cautiously] The **infrastructure footprint is heavy** — you need a web server, scheduler, metadata database, and executor all running together. And if you push past 1,000+ DAGs, **parsing overhead** can slow down the scheduler significantly.
#### 🏆 Sweet Spot
[confidently] Batch ETL 👉 'ee-tee-el' pipelines, data warehouse loading, ML training orchestration, and scheduled report generation. If your job runs on a cron and processes batches of data, Airflow is probably your best friend.
[energetic] Now let's look at AWS's serverless answer to workflow orchestration — Step Functions.`,
        },
      ],
    },

    /* ================================================================
       GROUP 7 — AWS Step Functions
       ================================================================ */
    {
      id: 'technique-6-step-functions',
      title: '6. AWS Step Functions',
      slides: [
        /* ---------- Slide 15: Step Functions Overview ---------- */
        {
          id: 15,
          title: '6. AWS Step Functions — Overview',
          icon: { name: 'duo-sitemap' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Are Step Functions?</h4>
                  <p style={{ fontSize: '0.95rem' }}>AWS&apos;s <strong>serverless state machine service</strong>. You define workflows in <strong>Amazon States Language (ASL)</strong> — a JSON-based DSL. Steps can invoke Lambda, ECS, SNS, SQS, DynamoDB, and 200+ AWS services directly. <strong>Standard</strong> (durable, up to 1 year) and <strong>Express</strong> (high-volume, up to 5 min) modes.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Step Functions Execution"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["Start"] --> B{"Choice<br/>State"}
    B -->|"Order"| C["Lambda:<br/>Process"]
    B -->|"Refund"| D["Lambda:<br/>Refund"]
    C --> E["Wait<br/>30s"]
    E --> F["Lambda:<br/>Notify"]
    D --> F
    F --> G["End"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style G fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>State Types</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Task</strong> — invoke a Lambda, ECS task, or AWS SDK call</li>
                    <li><strong>Choice</strong> — conditional branching based on input data</li>
                    <li><strong>Parallel &amp; Map</strong> — concurrent &amp; iterative execution</li>
                    <li><strong>Wait</strong> — durable delay (seconds or timestamp)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.55}>
                <p style={{ fontSize: '0.95rem' }}><strong>Pricing:</strong> Standard — $0.025/1K state transitions. Express — $1/million + duration.</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 6. AWS Step Functions — Overview
[conversational] Time for the serverless entry on our list — **AWS Step Functions**. If you live and breathe AWS, this one is for you.
#### 🔗 What Are Step Functions?
[lecture] Step Functions is AWS's **serverless state machine service**. You define workflows in **ASL** 👉 'ay-ess-el' — Amazon States Language — which is a JSON-based DSL 👉 'dee-ess-el' (domain-specific language). [confidently] Each step can invoke Lambda functions, ECS tasks, SNS, SQS, DynamoDB, and over 200 AWS services directly.
There are two modes: **Standard** workflows are durable and can run for up to one year — they persist state and support at-most-once execution. **Express** workflows are designed for high-volume, short-lived tasks up to 5 minutes — they're cheaper but don't persist state the same way.
#### 🧩 State Types
\`\`\`mermaid
flowchart TB
    A["Start"] --> B{"Choice State"}
    B -->|"Order"| C["Lambda: Process"]
    B -->|"Refund"| D["Lambda: Refund"]
    C --> E["Wait 30s"]
    E --> F["Lambda: Notify"]
    D --> F
    F --> G["End"]
    style B fill:#ffd700,color:#000
    style C fill:#81c784,color:#000
    style D fill:#e1bee7,color:#000
\`\`\`
[lecture] Step Functions uses different **state types** to model your workflow. **Task** states invoke a Lambda, ECS task, or AWS SDK call. **Choice** states handle conditional branching based on input data — like an if/else for your workflow. **Parallel** and **Map** states handle concurrent and iterative execution. And **Wait** states provide durable delays — you can pause for seconds or until a specific timestamp.
[conversational] The pricing model is straightforward: Standard workflows cost **$0.025 per 1,000 state transitions**. Express workflows cost **$1 per million executions** plus duration.
Let's evaluate the trade-offs.`,
        },
        /* ---------- Slide 16: Step Functions Pros & Cons ---------- */
        {
          id: 16,
          title: '6. AWS Step Functions — Pros & Cons',
          icon: { name: 'duo-cloud-check' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Step Functions vs Temporal"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["Step<br/>Functions"] --> B["JSON DSL<br/>ASL"]
    B --> C["200+ AWS<br/>Integrations"]
    D["Temporal"] --> E["Code-First<br/>Any Language"]
    E --> F["Any Service<br/>Any Cloud"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Zero infrastructure</strong> — fully serverless, no clusters to manage</li>
                    <li><strong>Visual Workflow Studio</strong> — drag-and-drop workflow builder</li>
                    <li><strong>200+ AWS SDK integrations</strong> — call DynamoDB, S3, SQS directly without Lambda</li>
                    <li><strong>Built-in error handling</strong> — retry, catch, and fallback at each state</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>JSON DSL (ASL)</strong> — not real code, limited expressiveness, hard to test</li>
                    <li><strong>256 KB payload limit</strong> — large data must go through S3</li>
                    <li><strong>AWS lock-in</strong> — cannot run on other clouds or self-host</li>
                    <li><strong>Cold start overhead</strong> — Standard Workflows add ~50–100ms per transition</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.6}>
                <div style={{ padding: '0.5rem', background: 'rgba(14,165,233,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  🏆 <strong>Sweet spot:</strong> AWS-native serverless workflows, Lambda orchestration, simple branching/parallel logic within the AWS ecosystem.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 6. AWS Step Functions — Pros & Cons
[conversational] Step Functions is a compelling option if you're already invested in the AWS ecosystem. But there are important caveats to consider.
#### ✅ Pros
[pleased] **Zero infrastructure** — it's fully serverless, so there are no clusters to manage, no servers to patch, no capacity planning. The **Visual Workflow Studio** lets you drag and drop workflow steps in a browser — great for prototyping and for non-developers to understand the flow. [confidently] With **200+ AWS SDK integrations**, you can call DynamoDB, S3, or SQS directly from a state without writing a Lambda function. And **error handling is built-in** at each state level — you can configure retry policies, catch blocks, and fallback states declaratively in the JSON.
\`\`\`mermaid
flowchart LR
    A["Step Functions"] --> B["JSON DSL (ASL)"]
    B --> C["200+ AWS Integrations"]
    D["Temporal"] --> E["Code-First"]
    E --> F["Any Cloud"]
    style A fill:#4fc3f7,color:#000
    style D fill:#e1bee7,color:#000
    style C fill:#81c784,color:#000
    style F fill:#81c784,color:#000
\`\`\`
#### ❌ Cons
[concerned] The biggest pain point is the **JSON DSL**. ASL is not real programming — you can't write conditional logic, loops, or transformations the way you would in actual code. [cautiously] Testing is awkward — you need Step Functions Local or deploy-and-pray. There's a **256 KB payload limit** per state, so processing large data means shuttling things through S3. You're locked into **AWS** — there's no way to run Step Functions on another cloud or self-host it. And there's **cold start overhead** — Standard workflows add roughly 50 to 100 milliseconds per state transition.
#### 🏆 Sweet Spot
[confidently] AWS-native serverless workflows, Lambda orchestration, and simple branching or parallel logic. If your entire stack is on AWS and your workflows are relatively straightforward, Step Functions is a solid choice. [seriously] But if you need complex logic, testability, or multi-cloud support, look at Temporal instead.
[energetic] Let's round out our seven architectures with BullMQ — the Node.js job queue.`,
        },
      ],
    },

    /* ================================================================
       GROUP 8 — BullMQ
       ================================================================ */
    {
      id: 'technique-7-bullmq',
      title: '7. BullMQ',
      slides: [
        /* ---------- Slide 17: BullMQ Overview ---------- */
        {
          id: 17,
          title: '7. BullMQ — Overview',
          icon: { name: 'duo-bolt' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="flipCard" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is BullMQ?</h4>
                  <p style={{ fontSize: '0.95rem' }}>A <strong>Redis-backed job queue for Node.js/TypeScript</strong>. The successor to Bull, with first-class TypeScript support, job flows (parent-child), rate limiting, and repeatable jobs. Lightweight, fast, and designed for the Node.js ecosystem.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="BullMQ Architecture"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["Node.js<br/>App"] -->|"queue.add()"| B["Redis"]
    B --> C["Worker 1"]
    B --> D["Worker 2"]
    C -->|"Completed"| E["Events"]
    D -->|"Failed"| F["Retry /<br/>DLQ"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style E fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style F fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Key Features</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Job Flows</strong> — parent-child job dependencies, like a mini DAG</li>
                    <li><strong>Rate Limiting</strong> — built-in per-queue or global rate limits</li>
                    <li><strong>Repeatable Jobs</strong> — cron-like scheduling with persistence</li>
                    <li><strong>Sandboxed Processing</strong> — run processors in separate processes for isolation</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.55}>
                <p style={{ fontSize: '0.95rem' }}><strong>Dashboard:</strong> Bull Board provides real-time job monitoring UI out of the box.</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 7. BullMQ — Overview
[energetic] Last but not least, let's talk about **BullMQ** — the go-to job queue for the Node.js ecosystem.
#### ⚡ What Is BullMQ?
[lecture] BullMQ is a **Redis-backed job queue for Node.js and TypeScript**. It's the successor to the original Bull library, rebuilt from scratch with first-class TypeScript support, better architecture, and modern features. [storytelling] If Celery is Pythonistas' favourite tool, BullMQ is the equivalent for Node.js developers. [conversational] You create a queue, add jobs to it, and workers process them. Simple, fast, and lightweight.
#### 🔧 Key Features
\`\`\`mermaid
flowchart LR
    A["Node.js App"] -->|"queue.add()"| B["Redis"]
    B --> C["Worker 1"]
    B --> D["Worker 2"]
    C -->|"Completed"| E["Events"]
    D -->|"Failed"| F["Retry / DLQ"]
    style B fill:#ffd700,color:#000
    style C fill:#81c784,color:#000
    style D fill:#81c784,color:#000
    style F fill:#ffcdd2,color:#000
\`\`\`
[confidently] **Job Flows** let you define parent-child job dependencies — like a mini DAG 👉 'dag'. A parent job waits for all its children to complete before running. **Rate Limiting** is built right into the queue — no need for external rate limiters. **Repeatable Jobs** give you cron-like scheduling with persistence — the schedule survives Redis restarts. And **Sandboxed Processing** can run job processors in separate OS processes for isolation, so one crashing job doesn't take down the entire worker.
[pleased] For monitoring, **Bull Board** provides a real-time job monitoring UI out of the box, showing you job states, progress, and errors.
Let's see how the trade-offs stack up.`,
        },
        /* ---------- Slide 18: BullMQ Pros & Cons ---------- */
        {
          id: 18,
          title: '7. BullMQ — Pros & Cons',
          icon: { name: 'duo-bolt-lightning' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="BullMQ Job Lifecycle"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["Waiting"] --> B["Active"]
    B -->|"Success"| C["Completed"]
    B -->|"Error"| D{"Retries<br/>Left?"}
    D -->|"Yes"| E["Delayed"]
    E --> A
    D -->|"No"| F["Failed"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style E fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style F fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Fast setup</strong> — just Redis + <code>npm i bullmq</code>, production-ready in minutes</li>
                    <li><strong>TypeScript-first</strong> — full type safety, excellent DX</li>
                    <li><strong>Job flows</strong> — parent-child relationships enable DAG-like workflows</li>
                    <li><strong>Battle-tested</strong> — used by Automattic, Auth0, Mozilla, and more</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Node.js only</strong> — workers must be JavaScript/TypeScript</li>
                    <li><strong>Redis single point of failure</strong> — Redis Sentinel/Cluster needed for HA</li>
                    <li><strong>No durable replay</strong> — if Redis loses data, jobs are gone</li>
                    <li><strong>Simple orchestration</strong> — flows are basic compared to Temporal/Airflow</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div style={{ padding: '0.5rem', background: 'rgba(16,185,129,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  🏆 <strong>Sweet spot:</strong> Node.js background jobs — email queues, webhook processing, PDF generation, API rate-limiting queues.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 7. BullMQ — Pros & Cons
[conversational] BullMQ is lean, fast, and developer-friendly. Let's see where it excels and where it hits its limits.
#### ✅ Pros
[pleased] The **setup speed** is incredible — just Redis plus \`npm i bullmq\`, and you're production-ready in minutes. No complex configuration, no multi-node clusters to manage. [confidently] It's **TypeScript-first** with full type safety and excellent developer experience — your IDE catches job data type mismatches at compile time. **Job flows** give you parent-child relationships that enable DAG-like workflows within a simple queue system. And it's **battle-tested** — used by companies like Automattic (the folks behind WordPress), Auth0, and Mozilla.
\`\`\`mermaid
flowchart LR
    A["Waiting"] --> B["Active"]
    B -->|"Success"| C["Completed ✅"]
    B -->|"Error"| D{"Retries Left?"}
    D -->|"Yes"| E["Delayed"]
    E --> A
    D -->|"No"| F["Failed ❌"]
    style C fill:#81c784,color:#000
    style F fill:#ffcdd2,color:#000
    style B fill:#ffd700,color:#000
\`\`\`
#### ❌ Cons
[concerned] Like Celery for Python, BullMQ is **language-locked** — workers must be JavaScript or TypeScript. [cautiously] **Redis is a single point of failure** unless you set up Redis Sentinel or Redis Cluster for high availability, which adds operational complexity. There's **no durable replay** — if Redis loses data (which shouldn't happen with proper persistence, but can), your jobs are gone. And the **orchestration capabilities are basic** — flows are simple compared to what Temporal or Airflow offer.
#### 🏆 Sweet Spot
[confidently] Node.js background jobs — email queues, webhook processing, PDF generation, and API rate-limiting queues. If your backend is Node.js and you need reliable background job processing, BullMQ is the right pick.
[excited] Now that we've covered all seven architectures individually, let's pit them against each other head-to-head!`,
        },
      ],
    },

    /* ================================================================
       GROUP 9 — Head-to-Head Comparison
       ================================================================ */
    {
      id: 'head-to-head',
      title: 'Head-to-Head',
      slides: [
        /* ---------- Slide 19: Temporal vs Kafka ---------- */
        {
          id: 19,
          title: 'Temporal vs Kafka — Orchestration vs Streaming',
          icon: { name: 'duo-right-left' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Temporal vs Kafka: When to Pick"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A{"What Are You<br/>Building?"} -->|"Multi-step<br/>transaction"| B["✅ Temporal"]
    A -->|"Event stream<br/>pipeline"| C["✅ Kafka"]
    A -->|"Event-triggered<br/>stateful process"| D["Both!<br/>Kafka → Temporal"]
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Temporal</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Centralized <strong>orchestration</strong> — workflow code controls the flow</li>
                    <li>Built for <strong>stateful</strong> multi-step business processes</li>
                    <li>State persisted in event history, <strong>crash-proof</strong></li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Kafka</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Decentralized <strong>choreography</strong> — services react to events independently</li>
                    <li>Built for <strong>data streaming</strong> at massive throughput</li>
                    <li>No workflow state — you build it yourself (retry topics + DLQ + status DB)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div style={{ padding: '0.5rem', background: 'rgba(14,165,233,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  🤝 <strong>Best together:</strong> Kafka delivers events → Temporal orchestrates the resulting business process. Common pattern in fintech &amp; e-commerce.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Temporal vs Kafka — Orchestration vs Streaming
[confidently] This is probably the most common comparison teams make, so let's break it down clearly. Temporal and Kafka are **not competitors** — they solve fundamentally different problems.
#### 🎭 Temporal: The Orchestrator
[lecture] Temporal is about **centralized orchestration**. Your workflow code controls the flow — "do step A, then step B, then if B fails, compensate A." The workflow function is the single source of truth for what should happen. State is persisted in event history, making it **crash-proof**. [conversational] Temporal is built for multi-step business processes where order and correctness matter more than raw throughput.
#### 📡 Kafka: The Stream
[energetic] Kafka is about **decentralized choreography**. Services react to events independently — "when I see an OrderCreated event, I'll process payment; when I see PaymentProcessed, I'll ship." There's no central controller. Each service owns its reaction. [confidently] Kafka is built for **data streaming** at massive throughput — millions of events per second.
\`\`\`mermaid
flowchart TB
    A{"What Are You Building?"} -->|"Multi-step transaction"| B["✅ Temporal"]
    A -->|"Event stream"| C["✅ Kafka"]
    A -->|"Event-triggered stateful process"| D["Both!"]
    style B fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#e1bee7,color:#000
\`\`\`
#### 🤝 Best Together
[excited] Here's the punchline: they work **beautifully together**. [storytelling] A common pattern in fintech and e-commerce is to use Kafka for event delivery and Temporal for orchestrating the business process that an event triggers. Kafka says "here's an order event," and Temporal runs the 10-step fulfilment workflow durably.
> [seriously] Ask yourself: "Am I moving data, or orchestrating a process?" That's your answer.
[energetic] Next up, let's compare Temporal with its AWS-native competitor — Step Functions.`,
        },
        /* ---------- Slide 20: Temporal vs Step Functions ---------- */
        {
          id: 20,
          title: 'Temporal vs Step Functions — Code vs DSL',
          icon: { name: 'duo-code-compare' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Code-First vs DSL-First"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["Temporal<br/>Code-First"] --> B["Unit Tests<br/>✅"]
    A --> C["Version Control<br/>✅"]
    A --> D["Complex Logic<br/>✅"]
    E["Step Functions<br/>DSL-First"] --> F["Visual Builder<br/>✅"]
    E --> G["AWS Native<br/>✅"]
    E --> H["Complex Logic<br/>⚠️ JSON DSL"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style E fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style G fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style H fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Key Differences</h4>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem', lineHeight: '1.4' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #555' }}>
                      <th style={{ padding: '5px 8px', textAlign: 'left' }}>Dimension</th>
                      <th style={{ padding: '5px 8px', textAlign: 'left' }}>Temporal</th>
                      <th style={{ padding: '5px 8px', textAlign: 'left' }}>Step Functions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}>Definition</td>
                      <td style={{ padding: '4px 8px' }}>Real code (Go/TS/Java/Python)</td>
                      <td style={{ padding: '4px 8px' }}>JSON ASL</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}>Testing</td>
                      <td style={{ padding: '4px 8px' }}>Unit tests, replay tests</td>
                      <td style={{ padding: '4px 8px' }}>Step Functions Local</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}>Cloud lock-in</td>
                      <td style={{ padding: '4px 8px' }}>None (self-host or Temporal Cloud)</td>
                      <td style={{ padding: '4px 8px' }}>AWS only</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}>Max duration</td>
                      <td style={{ padding: '4px 8px' }}>Unbounded</td>
                      <td style={{ padding: '4px 8px' }}>1 year (Standard)</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '4px 8px' }}>Operations</td>
                      <td style={{ padding: '4px 8px' }}>Self-managed or Temporal Cloud</td>
                      <td style={{ padding: '4px 8px' }}>Fully managed</td>
                    </tr>
                  </tbody>
                </table>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.55}>
                <div style={{ marginTop: '0.7em', padding: '0.5rem', background: 'rgba(249,115,22,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  💡 <strong>Rule of thumb:</strong> Step Functions for simple AWS-native flows. Temporal for complex, testable, multi-cloud workflows.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Temporal vs Step Functions — Code vs DSL
[confidently] This comparison comes down to a fundamental philosophy question: **code-first or DSL-first**?
#### 📊 The Key Differences
[lecture] Let me walk you through the comparison table on screen. For **workflow definition**, Temporal uses real code in Go, TypeScript, Java, or Python. Step Functions uses ASL 👉 'ay-ess-el' — Amazon States Language — which is really just a big JSON blob. [conversational] For **testing**, Temporal workflows can be unit tested like any other function, and you can write replay tests to verify behaviour. Step Functions testing relies on Step Functions Local, which is a partial emulator.
[seriously] **Cloud lock-in** is a big one. Temporal has none — you can self-host it or use Temporal Cloud, and your code runs anywhere. Step Functions is AWS only — period. [confidently] For **maximum workflow duration**, Temporal is unbounded thanks to Continue-As-New, while Standard Step Functions max out at one year. [conversational] On the **operations** side, Step Functions wins — it's fully managed with zero infrastructure. Temporal requires either managing your own cluster or paying for Temporal Cloud.
\`\`\`mermaid
flowchart LR
    A["Temporal: Code-First"] --> B["Unit Tests ✅"]
    A --> C["Any Cloud ✅"]
    D["Step Functions: DSL-First"] --> E["Visual Builder ✅"]
    D --> F["AWS Only ⚠️"]
    style A fill:#4fc3f7,color:#000
    style D fill:#e1bee7,color:#000
    style B fill:#81c784,color:#000
    style E fill:#81c784,color:#000
    style F fill:#ffd700,color:#000
\`\`\`
#### 💡 Rule of Thumb
[conversational] Here's a simple decision rule. If your workflow is relatively simple — a few Lambda calls with some branching — and your entire stack is on AWS, **Step Functions** is quick to set up and easy to maintain. [confidently] But the moment your workflow gets complex enough that you wish you could write an if/else in real code, or you need to run tests in CI, or you might move to another cloud someday, **Temporal** is the better long-term investment.
[energetic] Now let's compare the three task queues — Celery, BullMQ, and SQS.`,
        },
        /* ---------- Slide 21: Task Queues Compared ---------- */
        {
          id: 21,
          title: 'Celery vs BullMQ vs SQS — Task Queues Compared',
          icon: { name: 'duo-arrows-rotate' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Task Queue Decision Tree"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A{"Language?"} -->|"Python"| B["🐍 Celery"]
    A -->|"Node.js"| C["⚡ BullMQ"]
    A -->|"Any / Serverless"| D["☁️ SQS"]
    B --> E{"Need<br/>DAGs?"}
    E -->|"Yes"| F["Consider<br/>Airflow"]
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style C fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style F fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Side-by-Side</h4>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.25}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', lineHeight: '1.4' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #555' }}>
                      <th style={{ padding: '5px 8px', textAlign: 'left' }}>Feature</th>
                      <th style={{ padding: '5px 8px', textAlign: 'left' }}>Celery</th>
                      <th style={{ padding: '5px 8px', textAlign: 'left' }}>BullMQ</th>
                      <th style={{ padding: '5px 8px', textAlign: 'left' }}>SQS</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}>Language</td>
                      <td style={{ padding: '4px 8px' }}>Python</td>
                      <td style={{ padding: '4px 8px' }}>Node.js / TS</td>
                      <td style={{ padding: '4px 8px' }}>Any</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}>Broker</td>
                      <td style={{ padding: '4px 8px' }}>Redis / RabbitMQ</td>
                      <td style={{ padding: '4px 8px' }}>Redis</td>
                      <td style={{ padding: '4px 8px' }}>AWS Managed</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}>Workflows</td>
                      <td style={{ padding: '4px 8px' }}>Canvas (chain/chord)</td>
                      <td style={{ padding: '4px 8px' }}>Job Flows</td>
                      <td style={{ padding: '4px 8px' }}>None</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}>Rate Limit</td>
                      <td style={{ padding: '4px 8px' }}>Via custom</td>
                      <td style={{ padding: '4px 8px' }}>Built-in</td>
                      <td style={{ padding: '4px 8px' }}>Visibility timeout</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '4px 8px' }}>Ops</td>
                      <td style={{ padding: '4px 8px' }}>Self-managed</td>
                      <td style={{ padding: '4px 8px' }}>Self-managed</td>
                      <td style={{ padding: '4px 8px' }}>Fully managed</td>
                    </tr>
                  </tbody>
                </table>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.5}>
                <div style={{ marginTop: '0.7em', padding: '0.5rem', background: 'rgba(16,185,129,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  🎯 <strong>Quick pick:</strong> Python → Celery. Node.js → BullMQ. Serverless / any language → SQS.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Celery vs BullMQ vs SQS — Task Queues Compared
[conversational] Let's put the three task queues side by side. These tools solve the same core problem — "put a job on a queue, process it in the background" — but they take very different approaches.
#### 📊 Side-by-Side
[lecture] The comparison table on screen covers the essential dimensions. **Language**: Celery is Python, BullMQ is Node.js/TypeScript, and SQS works with any language. **Broker**: Celery can use Redis or RabbitMQ, BullMQ uses Redis, and SQS is a fully AWS-managed service. [confidently] **Workflow support**: Celery has Canvas primitives like \`chain()\` and \`chord()\`, BullMQ has job flows with parent-child dependencies, and SQS has none — it's purely point-to-point. **Rate limiting**: Celery requires custom implementation, BullMQ has it built-in, and SQS relies on visibility timeouts. **Operations**: Celery and BullMQ are self-managed, while SQS is fully managed.
\`\`\`mermaid
flowchart TB
    A{"Language?"} -->|"Python"| B["🐍 Celery"]
    A -->|"Node.js"| C["⚡ BullMQ"]
    A -->|"Any / Serverless"| D["☁️ SQS"]
    style B fill:#81c784,color:#000
    style C fill:#4fc3f7,color:#000
    style D fill:#e1bee7,color:#000
\`\`\`
#### 🎯 The Quick Pick
[conversational] Your decision is actually pretty simple. [confidently] **Python backend?** Use Celery — it's the proven, mature choice with great Django and Flask integration. **Node.js backend?** Use BullMQ — it's TypeScript-first with built-in rate limiting and a great dashboard. **Multi-language, serverless, or you just want zero ops?** Use SQS — it's cheap, reliable, and works with everything.
[seriously] If you find yourself needing complex workflows on top of any of these, that's a signal to consider upgrading to Temporal or Airflow instead.
[excited] Alright, let's bring it all together with the final cheat sheet!`,
        },
      ],
    },

    /* ================================================================
       GROUP 10 — Summary
       ================================================================ */
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        /* ---------- Slide 22: Cheat Sheet ---------- */
        {
          id: 22,
          title: 'Cheat Sheet — All 7 Architectures Compared',
          icon: { name: 'duo-table-list' },
          content: (
            <div style={{ fontSize: '1.05rem', lineHeight: '1.6', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Architecture Decision Flowchart"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A{"Need Durable<br/>Workflows?"} -->|"Yes"| B{"Multi-Cloud?"}
    B -->|"Yes"| C["Temporal"]
    B -->|"AWS Only"| D["Step Functions"]
    A -->|"No"| E{"Use Case?"}
    E -->|"Event Streaming"| F["Kafka"]
    E -->|"Task Queue"| G{"Language?"}
    E -->|"Batch ETL"| H["Airflow"]
    G -->|"Python"| I["Celery"]
    G -->|"Node.js"| J["BullMQ"]
    G -->|"Any"| K["SQS"]
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style G fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style H fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style I fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style J fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style K fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Decision Table</h4>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem', lineHeight: '1.4' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #555' }}>
                      <th style={{ padding: '5px 8px', textAlign: 'left' }}>Architecture</th>
                      <th style={{ padding: '5px 8px', textAlign: 'left' }}>Type</th>
                      <th style={{ padding: '5px 8px', textAlign: 'left' }}>Ops Cost</th>
                      <th style={{ padding: '5px 8px', textAlign: 'left' }}>Best Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}><strong>Temporal</strong></td>
                      <td style={{ padding: '4px 8px' }}>Orchestrator</td>
                      <td style={{ padding: '4px 8px' }}>Medium–High</td>
                      <td style={{ padding: '4px 8px' }}>Durable workflows, Sagas, long-running processes</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}><strong>Kafka</strong></td>
                      <td style={{ padding: '4px 8px' }}>Streaming</td>
                      <td style={{ padding: '4px 8px' }}>High</td>
                      <td style={{ padding: '4px 8px' }}>Event pipelines, CDC, real-time analytics</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}><strong>SQS</strong></td>
                      <td style={{ padding: '4px 8px' }}>Message Queue</td>
                      <td style={{ padding: '4px 8px' }}>None</td>
                      <td style={{ padding: '4px 8px' }}>Decoupling, serverless triggers, fan-out</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}><strong>Celery</strong></td>
                      <td style={{ padding: '4px 8px' }}>Task Queue</td>
                      <td style={{ padding: '4px 8px' }}>Low–Medium</td>
                      <td style={{ padding: '4px 8px' }}>Python background jobs, periodic tasks</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}><strong>Airflow</strong></td>
                      <td style={{ padding: '4px 8px' }}>DAG Scheduler</td>
                      <td style={{ padding: '4px 8px' }}>Medium</td>
                      <td style={{ padding: '4px 8px' }}>Batch ETL, ML pipelines, scheduled reports</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}><strong>Step Functions</strong></td>
                      <td style={{ padding: '4px 8px' }}>State Machine</td>
                      <td style={{ padding: '4px 8px' }}>None</td>
                      <td style={{ padding: '4px 8px' }}>AWS-native serverless orchestration</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '4px 8px' }}><strong>BullMQ</strong></td>
                      <td style={{ padding: '4px 8px' }}>Job Queue</td>
                      <td style={{ padding: '4px 8px' }}>Low</td>
                      <td style={{ padding: '4px 8px' }}>Node.js jobs, rate limiting, email queues</td>
                    </tr>
                  </tbody>
                </table>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Cheat Sheet — All 7 Architectures Compared
[excited] Here it is — the ultimate cheat sheet. This single slide is worth bookmarking.
#### 📊 The Decision Table
[lecture] Let me walk you through the table. **Temporal** is a workflow orchestrator with medium-to-high ops cost, best for durable workflows, Sagas, and long-running processes. **Kafka** is a streaming platform with high ops cost, best for event pipelines, CDC 👉 'see-dee-see', and real-time analytics. **SQS** is a managed message queue with zero ops cost, best for decoupling services and serverless triggers. [conversational] **Celery** is a task queue with low-to-medium ops, best for Python background jobs and periodic tasks. **Airflow** is a DAG scheduler with medium ops, best for batch ETL and ML pipelines. **Step Functions** is a serverless state machine with zero ops, best for AWS-native orchestration. And **BullMQ** is a job queue with low ops, best for Node.js background jobs and rate limiting.
#### 🌳 The Decision Flowchart
\`\`\`mermaid
flowchart TB
    A{"Need Durable Workflows?"} -->|"Yes"| B{"Multi-Cloud?"}
    B -->|"Yes"| C["Temporal"]
    B -->|"AWS Only"| D["Step Functions"]
    A -->|"No"| E{"Use Case?"}
    E -->|"Streaming"| F["Kafka"]
    E -->|"Task Queue"| G{"Language?"}
    E -->|"Batch ETL"| H["Airflow"]
    G -->|"Python"| I["Celery"]
    G -->|"Node.js"| J["BullMQ"]
    G -->|"Any"| K["SQS"]
    style C fill:#4fc3f7,color:#000
    style F fill:#81c784,color:#000
    style I fill:#81c784,color:#000
\`\`\`
The diagram on screen shows the decision flowchart. Start by asking: "Do I need durable workflows?" If yes, do you need multi-cloud support? That decides between Temporal and Step Functions. If you don't need durable workflows, what's your use case? [conversational] Event streaming goes to Kafka, batch ETL goes to Airflow, and task queues split by language — Python gets Celery, Node.js gets BullMQ, and everything else gets SQS.
[pleased] Keep this flowchart handy — it covers ninety percent of real-world decisions. [energetic] Now let's wrap up with the key takeaways.`,
        },
        /* ---------- Slide 23: Key Takeaways ---------- */
        {
          id: 23,
          title: 'Key Takeaways',
          icon: { name: 'duo-trophy' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <h4>🎯 Top 5 Actionable Takeaways</h4>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.8}>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>1.</strong> Need <strong>durable stateful workflows</strong>? → Temporal. No other tool gives you crash-proof code-first orchestration across languages.
                </div>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>2.</strong> Need <strong>high-throughput event streaming</strong>? → Kafka. Don&apos;t force orchestration into a streaming platform — use both.
                </div>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>3.</strong> Need a <strong>simple serverless queue</strong> with zero ops? → SQS (AWS) or BullMQ (Node.js + Redis).
                </div>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>4.</strong> Need <strong>batch ETL / ML pipeline scheduling</strong>? → Airflow. It&apos;s not real-time, but nothing beats its operator ecosystem for data work.
                </div>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>5.</strong> <strong>Combine tools</strong> — Kafka for events + Temporal for orchestration + SQS for decoupling = production-grade distributed system.
                </div>
              </GSAPStaggerList>
              <GSAPAnimated animation="bounceIn" delay={0.9}>
                <div style={{ marginTop: '1rem', padding: '0.7rem', background: 'rgba(249,115,22,0.15)', borderRadius: '8px', fontSize: '0.95rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Architecture Audit Checklist"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["🔍 Audit"] --> B["List All<br/>Async Flows"]
    B --> C["Classify:<br/>Stream vs Job<br/>vs Workflow"]
    C --> D["Match to<br/>Right Tool"]
    D --> E["✅ Migrate<br/>Incrementally"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style D fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  📚 <strong>Next step:</strong> Audit your async architecture — classify every background process as stream, task, or workflow and match it to the right tool.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Key Takeaways
[warmly] Let's land this with the five things I want you to walk away remembering.
#### 🎯 Top 5 Takeaways
[confidently] **Number one**: if you need **durable stateful workflows**, reach for Temporal. No other tool on this list gives you crash-proof, code-first orchestration across multiple languages. It's in a category of its own.
[seriously] **Number two**: if you need **high-throughput event streaming**, Kafka is your tool. [cautiously] But don't try to force workflow orchestration into Kafka — that's how you end up building a buggy version of Temporal on top of a streaming platform. Use both tools together instead.
[conversational] **Number three**: if you need a **simple queue** with zero operational overhead, SQS is the managed answer for any language, and BullMQ is the perfect fit if you're already in the Node.js ecosystem with Redis.
[confidently] **Number four**: if you need **batch ETL or ML pipeline scheduling**, Airflow is still the king. It's not for real-time use cases, but nothing beats its operator ecosystem and DAG-based scheduling for data engineering work.
[excited] **Number five** — and this is the meta-lesson: **combine tools**. The best production systems use Kafka for events, Temporal for orchestration, and SQS for decoupling. Each tool in its sweet spot, working together.
\`\`\`mermaid
flowchart LR
    A["🔍 Audit"] --> B["List All Async Flows"]
    B --> C["Classify: Stream vs Job vs Workflow"]
    C --> D["Match to Right Tool"]
    D --> E["✅ Migrate Incrementally"]
    style A fill:#4fc3f7,color:#000
    style C fill:#ffd700,color:#000
    style E fill:#81c784,color:#000
\`\`\`
#### 📚 Your Next Step
[warmly] Here's what I want you to do after this presentation. **Audit your async architecture**. List every background process, every queue consumer, every scheduled job in your system. Classify each one as a *stream*, a *task*, or a *workflow*. Then check if each one is using the right tool. [storytelling] Chances are, you'll find at least one that's in the wrong bucket — and now you know exactly which tool to migrate it to.
[cheerfully] Thank you for your time! I hope this helps you build better, more resilient distributed systems.`,
        },
      ],
    },
  ],
};
