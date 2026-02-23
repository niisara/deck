import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const temporalWorkflowDeck: Deck = {
  id: 'temporal-workflow-patterns',
  name: '9 Temporal Workflow Patterns for Durable Execution',
  description: 'Saga, State Machine, Long-Running, Cron, Child Workflows, Signals, Queries, Continue-As-New, Update',
  category: 'Agent',
  theme: 'night',
  kenBurns: true,
  backgroundImages: [
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&q=80',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80',
    'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1920&q=80',
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
          title: '9 Temporal Workflow Patterns for Durable Execution',
          content: (
            <div>
              <GSAPAnimated animation="rotateIn" duration={1.2}>
                <div style={{ fontSize: '1.5rem', color: '#0ea5e9' }}>
                  <SvgIcon iconName="duo-diagram-project" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  Durable Execution Patterns with Temporal
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" duration={0.8} delay={0.3}>
                <div style={{ fontSize: '1.2rem', color: '#10b981', lineHeight: '2' }}>
                  <div>
                    <SvgIcon iconName="duo-users-group" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Audience:</strong> Backend engineers, platform teams, distributed-systems beginners
                  </div>
                  <div>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>What you'll get:</strong> 9 patterns, when to use them, code-level guidance, pros/cons
                  </div>
                  <div>
                    <SvgIcon iconName="duo-circle-info" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Note:</strong> Examples use Temporal SDK patterns (Go / TypeScript)
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
          notes: `### 1 — 9 Temporal Workflow Patterns for Durable Execution
[cheerfully] Welcome everyone! Today we're going to explore **9 powerful workflow patterns** that Temporal 👉 'TEM-puh-ruhl' gives us for building **durable execution** systems.
#### 🎯 What's This About?
[storytelling] Imagine you're building a system where a process absolutely *must* complete — like charging a credit card, reserving inventory, and shipping an order. What happens if your server crashes halfway through? [confidently] That's exactly the problem **durable execution** solves. Temporal makes your workflow code **survive crashes, restarts, and even deployments** without you writing any retry or state-tracking logic yourself.
#### 👥 Who Is This For?
[warmly] This talk is aimed at **backend engineers**, **platform teams**, and anyone who's curious about distributed systems. We'll keep things beginner-friendly — no prior Temporal experience needed. By the end, you'll know 9 distinct patterns, when to reach for each one, and the trade-offs involved.
[energetic] We'll be using examples from the Temporal Go and TypeScript SDKs, but the concepts apply to any Temporal SDK. Let's dive into the overview first and see all 9 patterns at a glance.`,
        },
        /* ---------- Slide 2: Overview ---------- */
        {
          id: 2,
          title: 'Overview — 9 Patterns at a Glance',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'left' }}>
              <h4>
                Technique Categories
                <MermaidPopover
                  title="Temporal Workflow Pattern Landscape"
                  diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
graph TB
    A["9 Temporal Workflow<br/>Patterns"] --> B["Orchestration<br/>1-3"]
    A --> C["Scheduling &<br/>Hierarchy 4-5"]
    A --> D["Communication<br/>6-8"]
    A --> E["Lifecycle<br/>9"]
    B --> B1["Saga"]
    B --> B2["State Machine"]
    B --> B3["Long-Running"]
    C --> C1["Cron"]
    C --> C2["Child Workflows"]
    D --> D1["Signals"]
    D --> D2["Queries"]
    D --> D3["Update"]
    E --> E1["Continue-As-New"]
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style B1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style B2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style B3 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style C1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style C2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style D1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style D2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style D3 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style E1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px`}
                />
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '1.2rem', marginTop: '14px' }}>
                <GSAPStaggerList stagger={0.08} duration={0.6}>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>1</span>
                    <strong>Saga</strong> — Distributed transactions with compensations
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>2</span>
                    <strong>State Machine</strong> — Explicit states &amp; transitions
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>3</span>
                    <strong>Long-Running</strong> — Workflows that span days or months
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>4</span>
                    <strong>Cron</strong> — Recurring scheduled workflows
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>5</span>
                    <strong>Child Workflows</strong> — Hierarchical decomposition
                  </div>
                </GSAPStaggerList>
                <GSAPStaggerList stagger={0.08} duration={0.6}>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>6</span>
                    <strong>Signals</strong> — Async external events pushed in
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>7</span>
                    <strong>Queries</strong> — Synchronous state inspection
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>8</span>
                    <strong>Continue-As-New</strong> — Unbounded history management
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>9</span>
                    <strong>Update</strong> — Validated sync mutations
                  </div>
                </GSAPStaggerList>
              </div>
            </div>
          ),
          notes: `### 2 — Overview — 9 Patterns at a Glance
[conversational] Alright, let's get the big picture first before we deep-dive into each pattern individually.
#### 📋 The Four Categories
[lecture] We've organized these 9 patterns into four logical families. First, we have the **Orchestration** patterns — that's **Saga**, **State Machine**, and **Long-Running Workflows**. These are about *how* your workflow coordinates multiple steps.
Then we have **Scheduling & Hierarchy** — **Cron** for recurring jobs, and **Child Workflows** for breaking big workflows into smaller, manageable pieces.
Next up is **Communication** — **Signals** for pushing async events into a workflow, **Queries** for reading workflow state without changing it, and **Update** for validated, synchronous mutations.
Finally, **Lifecycle Management** with **Continue-As-New**, which solves the problem of workflows that run so long their event history gets dangerously large.
#### 🔍 Quick Summary
[confidently] Notice how every pattern solves a different problem. **Saga** handles distributed transactions with rollback. **State Machine** gives you explicit states and transitions — think order processing. **Signals** let external systems poke a running workflow with new data. And **Continue-As-New** prevents your workflow's event history from blowing up.
[energetic] Let's now talk about *why* durable execution matters in the first place — what problem are we actually solving?`,
        },
        /* ---------- Slide 3: Why It Matters ---------- */
        {
          id: 3,
          title: 'Why Durable Execution Matters',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>
                    The Problem
                    <MermaidPopover
                      title="Failure Without Durable Execution"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["🌐 API Call"] --> B["💳 Charge Card"]
    B --> C["📦 Reserve Stock"]
    C -->|"💥 Crash"| D["❌ Inconsistent State"]
    B -->|"💥 Crash"| D
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#5c1a1a,color:#fca5a5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Distributed services fail mid-flight — <strong>network partitions</strong>, process crashes, timeouts</li>
                    <li>Manual retry / state-tracking code is fragile and hard to test</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Temporal's Answer</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Durable execution</strong> — workflow state survives crashes automatically</li>
                    <li>Deterministic replay rebuilds state from an <strong>event history</strong></li>
                    <li>Activities run at-least-once with <strong>built-in retries</strong></li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Where It Fits</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Order fulfillment, payment pipelines, ML training jobs, human-in-the-loop approvals</li>
                    <li>Any multi-step process that must <strong>complete reliably</strong></li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 3 — Why Durable Execution Matters
[conversational] So why should you care about durable execution? Let's talk about the real pain points.
#### 💥 The Problem
[storytelling] Picture this: your API receives an order. It charges the credit card — success. Then it tries to reserve stock — but the server crashes right there. [cautiously] Now you've charged the customer but never reserved the item. That's an **inconsistent state**, and it's a nightmare to debug and fix manually.
[sighing] In traditional systems, you'd write retry logic, state-tracking code, database flags, maybe even a saga orchestrator from scratch. It's **fragile**, hard to test, and even harder to get right under every failure scenario — network partitions, timeouts, process crashes.
#### ✅ Temporal's Answer
[pleased] Temporal solves this with **durable execution**. Your workflow code looks like normal, sequential code — no callbacks, no state machines you build by hand. If the worker crashes mid-execution, Temporal **replays** the workflow from its event history and picks up exactly where it left off. Activities — the side-effect-producing steps like charging a card — are retried automatically with configurable **retry policies**.
[playfully] Think of it like a video game save point. No matter how many times you die, you restart from the last checkpoint, not from the beginning.
#### 🌍 Where It Fits
[confidently] This pattern shows up everywhere: **order fulfillment**, **payment pipelines**, **ML training jobs** that take hours, **human-in-the-loop** approval flows. Basically, any multi-step process that absolutely *must* complete reliably is a candidate.
[energetic] Now that we understand the "why", let's jump into Pattern #1 — the **Saga Pattern**.`,
        },
      ],
    },

    /* ================================================================
       GROUP 2 — Saga Pattern
       ================================================================ */
    {
      id: 'technique-1-saga',
      title: '1. Saga Pattern',
      slides: [
        {
          id: 4,
          title: '1. Saga — Overview',
          icon: { name: 'duo-arrows-rotate' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is a Saga?</h4>
                  <p style={{ fontSize: '0.95rem' }}>A sequence of activities where each step has a <strong>compensating action</strong>. If step N fails, all previous steps are rolled back in reverse order.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>
                    How It Works
                    <MermaidPopover
                      title="Saga — Forward & Compensation"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["💳 Charge"] --> B["📦 Reserve"]
    B --> C["🚚 Ship"]
    C -->|"fail"| D["↩️ Undo Ship"]
    D --> E["↩️ Unreserve"]
    E --> F["↩️ Refund"]
    style A fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style B fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style C fill:#5c1a1a,color:#fca5a5,stroke:#aaa,stroke-width:1.5px
    style D fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style F fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Each activity registers its <strong>compensation</strong> on a stack</li>
                    <li>On failure, the stack unwinds calling compensations in <strong>LIFO</strong> order</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.55}>
                <p style={{ fontSize: '0.95rem' }}><strong>Best for:</strong> E-commerce checkout, travel booking, payment flows</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 4 — Saga — Overview
[excited] Alright, Pattern #1 — the **Saga** pattern. This one is *essential* for anyone building microservices.
#### 🔄 What Is a Saga?
[confidently] A Saga is a sequence of steps where each step has a **compensating action** — basically an "undo" button. If step 3 fails, you don't just give up. You roll back step 2, then step 1, in reverse order. Think of it like a stack — last in, first out.
[storytelling] Here's a real-world analogy: you're booking a trip. You book the flight, then the hotel, then the car rental. If the car rental fails, you cancel the hotel, then cancel the flight. Each cancellation is a **compensation**.
#### ⚙️ How It Works
[lecture] In Temporal, you maintain a list of compensations as you go. After each successful activity — say, charging a credit card — you push its undo function (refund the card) onto a stack. If anything fails later, you catch the error and iterate through that stack in reverse, calling each compensation.
The Mermaid diagram on screen shows this beautifully: Charge → Reserve → Ship. If Ship fails, we undo Ship, then Unreserve, then Refund — all in LIFO 👉 'LY-foh' order.
#### 🎯 Best For
[confidently] This pattern shines in **e-commerce checkout**, **travel booking**, and **payment flows** — anywhere you have multiple services that all need to succeed or all roll back together.
[energetic] Let's see how to actually implement this in Temporal code.`,
        },
        {
          id: 5,
          title: '1. Saga — Implementation',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Temporal Implementation</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Maintain a <strong>compensations[]</strong> array locally in the workflow</li>
                    <li>After each successful activity, <code>push()</code> its undo function</li>
                    <li>In the <code>catch</code> block, iterate compensations in reverse and execute each</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Key Config</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>RetryPolicy</strong> on activities: <code>MaximumAttempts</code>, <code>BackoffCoefficient</code></li>
                    <li><strong>StartToCloseTimeout</strong> per activity — keep it tight</li>
                    <li>Compensations should be <strong>idempotent</strong></li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Tools &amp; SDKs</h4>
                  <p style={{ fontSize: '0.95rem' }}>Temporal Go SDK (<code>workflow.Go</code>), TypeScript SDK (<code>proxyActivities</code>), Java SDK</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 5 — Saga — Implementation
[conversational] Now let's get into the nuts and bolts of implementing a Saga in Temporal.
#### 🛠️ How to Build It
[pleased] The implementation is surprisingly clean. Inside your workflow function, you keep a local **compensations array**. Every time an activity succeeds, you push its compensating activity onto this array. Then you wrap everything in a try-catch — if anything throws, you loop through the compensations in reverse and execute each one.
Here's the beauty of Temporal: each compensation is itself an **activity** with its own retry policy. So even your rollback logic is durable and retried automatically.
#### ⚙️ Key Configuration
[lecture] You'll want to set a **RetryPolicy** on each activity — things like **MaximumAttempts** and **BackoffCoefficient** 👉 'BAK-awf koh-uh-FISH-unt'. Keep the **StartToCloseTimeout** tight on each step so you fail fast if something is stuck.
[seriously] The most important rule: your compensations must be **idempotent** 👉 'eye-dem-POH-tent'. That means running them twice should produce the same result as running them once. Why? Because Temporal might retry a compensation if the worker crashes during rollback.
#### 🔧 SDKs
[conversational] All major Temporal SDKs support this pattern. In Go you'd use **workflow.Go** for concurrent compensations. In TypeScript, you'd use **proxyActivities** to define your activities and their compensations.
Now let's weigh the pros and cons of the Saga pattern.`,
        },
        {
          id: 6,
          title: '1. Saga — Pros & Cons',
          icon: { name: 'duo-split' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>No distributed locks or two-phase commit needed</li>
                    <li>Each service stays autonomous — <strong>loose coupling</strong></li>
                    <li>Temporal handles retry &amp; timeout per step automatically</li>
                    <li>Easy to audit — full event history available</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Compensation logic can be <strong>complex</strong> (e.g., partial refunds)</li>
                    <li>Eventual consistency — intermediate states are visible briefly</li>
                    <li>Debugging long compensation chains needs good observability</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 6 — Saga — Pros & Cons
[conversational] Let's be honest about what's great and what's tricky with the Saga pattern.
#### ✅ Pros
[excited] The big win: **no distributed locks**, no two-phase commit. Each service stays completely autonomous — that's **loose coupling** at its finest. You don't need some central transaction coordinator holding locks across databases.
[pleased] Temporal handles retry and timeout for every step automatically, so you don't write boilerplate error-handling code. And because everything is recorded in the event history, you have a **full audit trail** — you can see exactly what happened, in what order, and whether compensations ran.
#### ❌ Cons
[cautiously] The downside? Compensation logic can get **complex**. What if you need a partial refund instead of a full one? What if stock was already sold to someone else? These edge cases add up.
Also, Sagas give you **eventual consistency**, not instant consistency. [seriously] There's a brief window where the system is in an intermediate state — the card is charged but stock isn't reserved yet. For most use cases that's fine, but if you need strict isolation, Sagas aren't the right tool.
Finally, debugging long compensation chains requires good **observability**. The Temporal Web UI helps a lot here, but you still need to instrument your activities properly.
[energetic] Alright, let's move on to Pattern #2 — the **State Machine** workflow.`,
        },
      ],
    },

    /* ================================================================
       GROUP 3 — State Machine
       ================================================================ */
    {
      id: 'technique-2-state-machine',
      title: '2. State Machine',
      slides: [
        {
          id: 7,
          title: '2. State Machine — Overview',
          icon: { name: 'duo-sitemap' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="flipCard" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is a State Machine Workflow?</h4>
                  <p style={{ fontSize: '0.95rem' }}>Model your workflow as a finite set of <strong>states</strong> with explicit <strong>transitions</strong>. The workflow waits in each state until an event (signal) moves it to the next.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>
                    State Diagram
                    <MermaidPopover
                      title="Order State Machine"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
stateDiagram-v2
    [*] --> Pending
    Pending --> Approved : approve signal
    Pending --> Rejected : reject signal
    Approved --> Shipped : ship signal
    Shipped --> Delivered : deliver signal
    Rejected --> [*]
    Delivered --> [*]`}
                    />
                  </h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Each state is a <code>select</code> / <code>condition</code> block waiting for the right signal</li>
                    <li>Transitions trigger activities and update workflow-local state</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.65}>
                <p style={{ fontSize: '0.95rem' }}><strong>Best for:</strong> Order processing, approval chains, document lifecycles</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 7 — State Machine — Overview
[excited] Pattern #2 — the **State Machine** workflow. If you've ever drawn a flowchart of a business process, you've essentially designed a state machine.
#### 📊 What Is It?
[confidently] A state machine workflow models your process as a finite set of **states** with explicit **transitions** between them. The workflow sits in one state, waits for an external event — usually a signal — and then moves to the next state based on that event.
[storytelling] Think of an order lifecycle: it starts as **Pending**, gets **Approved** or **Rejected**, if approved it moves to **Shipped**, and finally **Delivered**. Each of those is a state, and the arrows between them are transitions triggered by events.
#### ⚙️ How It Works
[lecture] In Temporal, you implement this with a loop. Inside the loop, each iteration uses a **signal channel** to wait for the next event. A switch statement checks the current state plus the incoming event and decides which state to move to and which activities to run. The loop exits when you reach a **terminal state** like Delivered or Rejected.
The state diagram on screen shows the classic order flow. Notice how some states — like Rejected — go straight to the end, while others continue through the pipeline.
#### 🎯 Best For
[confidently] **Order processing**, **approval chains**, **document lifecycles** — anywhere you can draw a clear state diagram of your business process.
Let's see how this is implemented in Temporal.`,
        },
        {
          id: 8,
          title: '2. State Machine — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInBottom" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Temporal Implementation</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Use a <code>while(true)</code> loop with a <strong>state variable</strong></li>
                    <li>Each iteration: <code>workflow.GetSignalChannel</code> receives the next event</li>
                    <li>A <code>switch</code> on the current state + event decides the transition and activities to run</li>
                    <li>Loop exits when the workflow reaches a <strong>terminal state</strong></li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Key Config</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>WorkflowExecutionTimeout</strong> — upper bound on total lifecycle</li>
                    <li>Use <strong>Queries</strong> to expose current state to external callers</li>
                    <li>Guard invalid transitions explicitly to avoid silent bugs</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 8 — State Machine — How It Works
[conversational] Let's dig into the implementation details.
#### 🛠️ Temporal Implementation
[lecture] The core pattern is a **while-true loop** with a state variable. Each iteration calls **workflow.GetSignalChannel** to receive the next event from the outside world. Then a **switch** statement evaluates the current state combined with the incoming event to decide what to do — run activities, update the state, or exit.
[pleased] Here's the key insight: Temporal **persists your state variable** automatically through its event history. If the worker crashes mid-loop, Temporal replays all past events and your state variable ends up exactly where it was. You don't need a database or Redis to track the current state.
#### ⚙️ Key Configuration
[confidently] Set a **WorkflowExecutionTimeout** as your upper bound — how long is this entity allowed to live at most? For an order, maybe 30 days. For a subscription, maybe a year.
Expose the current state to external callers using **Queries** — that way your dashboard can show "Order #1234 is in the Shipped state" without any external database.
[seriously] One important tip: **guard invalid transitions explicitly**. If someone sends an "approve" signal when the order is already shipped, throw an error or log a warning. Silent bugs from unguarded transitions are hard to find later.
Now let's look at the trade-offs.`,
        },
        {
          id: 9,
          title: '2. State Machine — Pros & Cons',
          icon: { name: 'duo-split' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Very <strong>readable</strong> — maps directly to business process diagrams</li>
                    <li>Easy to add new states or transitions without rewriting the whole flow</li>
                    <li>Temporal persists state — <strong>survives restarts &amp; deploys</strong></li>
                    <li>Queries let dashboards show live workflow state</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Complex state graphs can become <strong>hard to test exhaustively</strong></li>
                    <li>History grows with many transitions — may need <strong>Continue-As-New</strong></li>
                    <li>Race conditions between concurrent signals need careful handling</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 9 — State Machine — Pros & Cons
[conversational] Let's weigh the good and the bad.
#### ✅ Pros
[pleased] First, state machines are incredibly **readable**. They map directly to those business process diagrams your product manager draws on the whiteboard. When a stakeholder asks "what happens when we approve an order?", you can point to the code and they'll understand it.
Adding new states or transitions is straightforward — you don't have to rewrite the whole workflow. Just add a new case to your switch. [confidently] Temporal **persists the state across restarts and deploys**, so you never lose track of where a workflow is. And because you can pair state machines with **Queries**, building a real-time dashboard that shows all orders and their current states is trivial.
#### ❌ Cons
[cautiously] Complex state graphs with many states and transitions can become **hard to test exhaustively**. You need to test every valid path *and* make sure invalid transitions are properly rejected.
If your workflow has many transitions over time, the event history grows. For long-lived entities that process hundreds of events, you'll eventually need to pair this with **Continue-As-New** — we'll cover that in Pattern #8.
[seriously] Also, be careful with **concurrent signals**. If two signals arrive at nearly the same time, which one gets processed first? Temporal processes them sequentially per workflow, but you need to design your transitions to handle any ordering.
[energetic] Let's move on to Pattern #3 — **Long-Running Workflows**.`,
        },
      ],
    },

    /* ================================================================
       GROUP 4 — Long-Running Workflows
       ================================================================ */
    {
      id: 'technique-3-long-running',
      title: '3. Long-Running Workflows',
      slides: [
        {
          id: 10,
          title: '3. Long-Running — Overview',
          icon: { name: 'duo-timer' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Are Long-Running Workflows?</h4>
                  <p style={{ fontSize: '0.95rem' }}>Workflows that stay open for <strong>days, weeks, or months</strong> — waiting for external events, human approvals, or scheduled deadlines.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>
                    Timeline
                    <MermaidPopover
                      title="Long-Running Workflow Timeline"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["📝 Start"] --> B["⏳ Wait<br/>Days"]
    B --> C["👤 Human<br/>Approval"]
    C --> D["⏳ Wait<br/>Weeks"]
    D --> E["✅ Complete"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style D fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Temporal <code>workflow.Sleep</code> is <strong>durable</strong> — the worker can restart, the timer still fires</li>
                    <li>Combine timers with Signals for human-in-the-loop flows</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <p style={{ fontSize: '0.95rem' }}><strong>Best for:</strong> Onboarding, subscription renewals, compliance workflows, loan processing</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 10 — Long-Running — Overview
[excited] Pattern #3 — **Long-Running Workflows**. This is one of Temporal's superpowers that really sets it apart from regular task queues.
#### ⏳ What Are They?
[confidently] These are workflows that stay open for **days, weeks, or even months**. They're not constantly running — they're mostly *waiting*. Waiting for a human to approve something, waiting for a deadline to pass, waiting for an external webhook.
[storytelling] Here's a great example: **employee onboarding**. Day 1, you create the user account. Day 3, you send a welcome email. Day 7, you check if they've completed their training. Day 30, you verify their first project is set up. That's a workflow spanning a whole month, mostly sleeping between steps.
#### ⚙️ How It Works
[pleased] In Temporal, **workflow.Sleep** is **durable**. Unlike a regular sleep in your code, this timer survives worker restarts, server reboots, even full cluster migrations. The worker can go down and come back up, and the timer still fires exactly when it should.
You can also combine timers with **Signals** for human-in-the-loop flows. [conversational] For example: "Wait 7 days for the manager to approve, but if they send an approval signal earlier, continue immediately." You do this with a **Selector** that races the timer against the signal channel.
#### 🎯 Best For
[confidently] **Onboarding flows**, **subscription renewals**, **compliance workflows**, **loan processing** — anything where the process spans a long calendar period with waiting built in.
Let's see the implementation details.`,
        },
        {
          id: 11,
          title: '3. Long-Running — Implementation',
          icon: { name: 'duo-clock' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Temporal Implementation</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Use <code>workflow.Sleep(ctx, 30*24*time.Hour)</code> for durable timers</li>
                    <li>Use <code>selector.AddReceive</code> to race a <strong>timer vs. signal</strong> — whichever fires first wins</li>
                    <li>Set <strong>WorkflowExecutionTimeout</strong> to the maximum expected lifetime</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Key Config</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>WorkflowRunTimeout</strong> — max single run before Continue-As-New needed</li>
                    <li>Heartbeats on long activities to detect worker failures</li>
                    <li>Use <strong>Search Attributes</strong> for filtering active long-running workflows</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.6}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>⚠️ Watch Out</h4>
                  <p style={{ fontSize: '0.95rem' }}>History size grows — if the workflow will exceed <strong>50K events</strong>, pair with <strong>Continue-As-New</strong>.</p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 11 — Long-Running — Implementation
[conversational] Let's get into the code-level details.
#### 🛠️ Temporal Implementation
[lecture] The core API is simple: **workflow.Sleep(ctx, 30*24*time.Hour)** sleeps for 30 days. But the real magic is combining this with signals. You use **selector.AddReceive** to set up a race between a timer and a signal channel — whichever fires first wins, and the other is discarded.
[storytelling] For example, you might say: "Sleep for 7 days OR until the 'approve' signal arrives." If the signal comes on day 3, you proceed immediately. If nobody approves by day 7, you escalate or time out.
Set **WorkflowExecutionTimeout** to the maximum expected lifetime of the workflow. For an onboarding flow, maybe 90 days.
#### ⚙️ Key Configuration
[confidently] **WorkflowRunTimeout** is different from ExecutionTimeout — it's the max for a single run before you need Continue-As-New. For a 1-year subscription workflow, you might set RunTimeout to 3 months and use Continue-As-New to roll over.
Use **heartbeats** on long activities to detect worker failures early. And add **Search Attributes** to your workflows so you can filter and find active long-running workflows in the Temporal UI — "show me all onboarding workflows that started this month."
#### ⚠️ Watch Out
[cautiously] Here's the gotcha: **history size**. Every event — timer started, timer fired, signal received — adds to the history. If your workflow accumulates more than about **50K events**, performance degrades. That's where **Continue-As-New** comes in, which we'll cover in Pattern #8.
Let's look at the pros and cons.`,
        },
        {
          id: 12,
          title: '3. Long-Running — Pros & Cons',
          icon: { name: 'duo-split' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>No external scheduler or cron daemon needed — <strong>all-in-one</strong></li>
                    <li>Durable timers survive restarts, deploys, and failures</li>
                    <li>Entire workflow state is available for <strong>debugging any time</strong></li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Event history can balloon — plan for <strong>Continue-As-New</strong></li>
                    <li>Versioning: schema changes mid-flight require <code>workflow.GetVersion</code></li>
                    <li>Testing workflows that sleep for months needs <strong>time-skipping</strong> test env</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 12 — Long-Running — Pros & Cons
[conversational] Time for the honest assessment.
#### ✅ Pros
[pleased] The biggest advantage: **no external scheduler** needed. You don't need a separate cron daemon, a database with timer tables, or a Redis-based delayed job queue. Temporal is your all-in-one solution for durable waits.
[confidently] Durable timers **survive restarts, deploys, and failures**. Your 30-day timer keeps ticking even if every worker in your cluster goes down and comes back up. And the entire workflow state — every variable, every decision — is available for **debugging at any time** through the Temporal UI or API.
#### ❌ Cons
[cautiously] The event history can **balloon** over time. If your workflow processes many signals over months, you'll hit the history limit. Plan for **Continue-As-New** from the start — don't wait until it's a problem.
[seriously] **Versioning** is tricky too. If you change your workflow code while a long-running workflow is mid-flight, you need to use **workflow.GetVersion** to handle the migration gracefully. Otherwise, the replay will break because the old history doesn't match the new code.
Testing is another challenge. How do you test a workflow that sleeps for 3 months? [conversational] Temporal provides a **time-skipping test environment** that lets you fast-forward through sleeps, but you need to set it up properly.
[energetic] Next up is Pattern #4 — **Cron Workflows** for recurring scheduled tasks.`,
        },
      ],
    },

    /* ================================================================
       GROUP 5 — Cron Workflows
       ================================================================ */
    {
      id: 'technique-4-cron',
      title: '4. Cron Workflows',
      slides: [
        {
          id: 13,
          title: '4. Cron — Overview',
          icon: { name: 'duo-calendar-check' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="rotateIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is a Cron Workflow?</h4>
                  <p style={{ fontSize: '0.95rem' }}>A workflow that <strong>re-runs on a schedule</strong> — like Unix cron but durable, observable, and without a crontab server.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>
                    Execution Pattern
                    <MermaidPopover
                      title="Cron Execution Cycle"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["⏰ Schedule<br/>0 9 * * *"] --> B["▶️ Run 1"]
    B --> C["✅ Done"]
    C --> D["⏰ Wait<br/>next tick"]
    D --> E["▶️ Run 2"]
    E --> F["✅ Done"]
    F --> G["⏰ ..."]
    style A fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style B fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style G fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Temporal natively supports <code>CronSchedule</code> on <code>StartWorkflowOptions</code></li>
                    <li>Or use the newer <strong>Schedules API</strong> for richer control</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.65}>
                <p style={{ fontSize: '0.95rem' }}><strong>Best for:</strong> Batch ETL, report generation, periodic sync, data cleanup</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 13 — Cron — Overview
[excited] Pattern #4 — **Cron Workflows**. If you've ever set up a crontab on a Linux server, you'll feel right at home.
#### ⏰ What Is a Cron Workflow?
[confidently] It's a workflow that **re-runs on a schedule**. Think Unix cron, but with superpowers: it's durable, observable, retryable, and you don't need a dedicated crontab server that becomes a single point of failure.
[storytelling] Here's the everyday example: every morning at 9 AM, generate a sales report, email it to the team, and archive it. That's a cron workflow.
#### ⚙️ Execution Pattern
[lecture] The diagram shows the cycle: Schedule fires → Run 1 executes → Done → Wait for next tick → Run 2 executes → Done → and so on, forever. Each run is a **separate workflow execution** with its own clean event history.
[conversational] Temporal natively supports this with the **CronSchedule** field on your start options — just pass a cron string like **"0 9 * * *"** for "every day at 9 AM". Or use the newer **Schedules API** which gives you much richer control: backfill missed runs, pause and resume, and set overlap policies.
#### 🎯 Best For
[confidently] **Batch ETL** 👉 'ee-tee-ELL' jobs, **report generation**, **periodic data sync**, **cleanup tasks** — any recurring job that needs to run reliably on a schedule.
Let's look at implementation and configuration options.`,
        },
        {
          id: 14,
          title: '4. Cron — Implementation & Config',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Two Approaches</h4>
                  <GSAPStaggerList stagger={0.1} duration={0.7}>
                    <div style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                      <strong>1. CronSchedule string</strong> — <code>&#123;CronSchedule: &quot;0 9 * * *&quot;&#125;</code> on start options. Simple but limited.
                    </div>
                    <div style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                      <strong>2. Schedules API</strong> — <code>client.ScheduleClient.Create()</code>. Supports backfill, pause/resume, overlap policies.
                    </div>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Key Config</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Overlap Policy</strong> — Skip / Buffer / Cancel / Terminate if previous run is still going</li>
                    <li><strong>Jitter</strong> — Randomize start to avoid thundering herd</li>
                    <li><strong>WorkflowExecutionTimeout</strong> per run — must finish before next tick</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.65}>
                <div>
                  <h4>✅ Pros &amp; ❌ Cons</h4>
                  <p style={{ fontSize: '0.95rem' }}>
                    <strong>Pros:</strong> No crontab server, built-in observability, auto-retry.{' '}
                    <strong>Cons:</strong> Each run is a new workflow execution — sharing state between runs needs external storage or memo fields.
                  </p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 14 — Cron — Implementation & Config
[conversational] Let's dig into the two approaches and key settings.
#### 🛠️ Two Approaches
[lecture] **Approach 1: CronSchedule string.** The simplest way — you just set a cron expression on your workflow start options. Something like **CronSchedule: "0 9 * * *"** for daily at 9 AM. It's easy but limited — no backfill, no pause/resume.
[pleased] **Approach 2: Schedules API.** This is the modern, recommended approach. You create a schedule using **client.ScheduleClient.Create()** and configure it with much more granularity: backfill missed runs, set overlap policies, add jitter, and pause/resume programmatically. If you're starting fresh, go with this.
#### ⚙️ Key Configuration
[seriously] **Overlap Policy** is crucial — what happens if the previous run is still going when the next tick fires? Your options are: **Skip** it, **Buffer** it for later, **Cancel** the old one, or **Terminate** it. Choose based on your use case — for a report you might Skip, for a critical sync you might Buffer.
[conversational] **Jitter** 👉 'JIH-tur' adds a random delay to the start time. This prevents the **thundering herd** problem where 100 cron workflows all fire at exactly 9:00:00 AM and overwhelm your system.
Set **WorkflowExecutionTimeout** per run to ensure each execution finishes before the next tick arrives.
#### ⚖️ Trade-offs
[pleased] **Pros:** No crontab server to manage, built-in observability and auto-retry. [cautiously] **Cons:** Each run is a new execution, so sharing state between runs needs external storage or Temporal memo fields. You can't just carry a variable from Run 1 to Run 2 inside the workflow itself.
[energetic] Let's move to Pattern #5 — **Child Workflows**.`,
        },
      ],
    },

    /* ================================================================
       GROUP 6 — Child Workflows
       ================================================================ */
    {
      id: 'technique-5-child-workflows',
      title: '5. Child Workflows',
      slides: [
        {
          id: 15,
          title: '5. Child Workflows — Overview',
          icon: { name: 'duo-diagram-nested' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Are Child Workflows?</h4>
                  <p style={{ fontSize: '0.95rem' }}>A workflow that <strong>spawns other workflows</strong> as children. The parent can wait for results, fire-and-forget, or cancel children on its own termination.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>
                    Parent–Child Tree
                    <MermaidPopover
                      title="Child Workflow Hierarchy"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    P["🏗️ Parent<br/>Workflow"] --> C1["📋 Child 1<br/>Process Order"]
    P --> C2["📋 Child 2<br/>Send Email"]
    P --> C3["📋 Child 3<br/>Update Inventory"]
    C1 --> G1["✅ Result"]
    C2 --> G2["✅ Result"]
    C3 --> G3["✅ Result"]
    style P fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style C1 fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style C2 fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style C3 fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style G1 fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style G2 fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style G3 fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Children run on their <strong>own task queue</strong> — different workers can handle them</li>
                    <li><strong>ParentClosePolicy</strong> controls what happens when the parent finishes</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <p style={{ fontSize: '0.95rem' }}><strong>Best for:</strong> Fan-out / fan-in, batch processing, partitioned pipelines, modular sub-processes</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 15 — Child Workflows — Overview
[excited] Pattern #5 — **Child Workflows**. Think of this as the "divide and conquer" pattern of Temporal.
#### 🏗️ What Are They?
[confidently] A child workflow is simply a workflow that's **spawned by another workflow** — the parent. The parent can wait for results, fire-and-forget, or cancel all children when it finishes. It's like a tree structure: one parent at the top, branching out to multiple children.
[storytelling] Real-world example: you're processing a large batch of 10,000 records. Instead of handling all of them in one giant workflow, the parent spawns 100 child workflows, each handling 100 records. Each child runs independently, possibly on different workers.
#### ⚙️ How It Works
[lecture] The diagram shows the tree: a **Parent Workflow** spawns Child 1 (Process Order), Child 2 (Send Email), and Child 3 (Update Inventory). Each child runs independently and produces a result. The parent collects all results when they're done.
Children can run on their **own task queue** — meaning different worker fleets can handle them. That's great for scaling. The **ParentClosePolicy** controls what happens to children when the parent finishes: should they be terminated, abandoned to continue on their own, or sent a cancellation request?
#### 🎯 Best For
[confidently] **Fan-out / fan-in** patterns, **batch processing**, **partitioned pipelines**, and any time you want to break a complex workflow into **modular, reusable sub-processes**.
Let's see the implementation.`,
        },
        {
          id: 16,
          title: '5. Child Workflows — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInBottom" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Temporal Implementation</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Call <code>workflow.ExecuteChildWorkflow(ctx, childFn, args)</code></li>
                    <li>Returns a <strong>Future</strong> — <code>.Get()</code> to block, or collect and await many in parallel</li>
                    <li>Use <code>ChildWorkflowOptions</code> to set task queue, retry, timeout</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Key Config</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>ParentClosePolicy</strong> — <code>TERMINATE</code> | <code>ABANDON</code> | <code>REQUEST_CANCEL</code></li>
                    <li><strong>WorkflowIDReusePolicy</strong> — prevent duplicate child runs</li>
                    <li>Children have <strong>independent retry and timeout</strong> policies</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.65}>
                <div>
                  <h4>✅ Pros &amp; ❌ Cons</h4>
                  <p style={{ fontSize: '0.95rem' }}>
                    <strong>Pros:</strong> Independent scaling, separate failure domains, keeps parent history small.{' '}
                    <strong>Cons:</strong> Additional complexity, cross-workflow observability needs tooling, latency for child start-up.
                  </p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 16 — Child Workflows — How It Works
[conversational] Let's get into the implementation details and trade-offs.
#### 🛠️ Temporal Implementation
[lecture] Starting a child is straightforward: call **workflow.ExecuteChildWorkflow(ctx, childFunction, args)**. This returns a **Future** — you can call **.Get()** on it to block until the child finishes, or you can fire off multiple children and collect their futures to await them all in parallel.
You configure each child with **ChildWorkflowOptions** — setting the task queue, retry policy, and timeouts independently from the parent.
#### ⚙️ Key Configuration
[seriously] **ParentClosePolicy** is the most important setting here. **TERMINATE** kills children when the parent ends. **ABANDON** lets children continue running independently. **REQUEST_CANCEL** sends a cancellation signal so children can clean up gracefully.
[confidently] **WorkflowIDReusePolicy** prevents duplicate children — if you try to start a child with an ID that's already running, Temporal can reject it instead of creating a duplicate.
Each child has **independent retry and timeout** policies, so a flaky child doesn't block or crash the parent.
#### ⚖️ Trade-offs
[pleased] **Pros:** Children scale independently, have separate failure domains, and keep the parent's history small. The parent just records "started child" and "child completed" events.
[cautiously] **Cons:** Cross-workflow observability requires tooling — you need to navigate between parent and child in the Temporal UI. There's also a small **latency overhead** for starting each child. And the added complexity of managing a tree of workflows instead of a single flat one.
[energetic] On to Pattern #6 — **Signals**.`,
        },
      ],
    },

    /* ================================================================
       GROUP 7 — Signals
       ================================================================ */
    {
      id: 'technique-6-signals',
      title: '6. Signals',
      slides: [
        {
          id: 17,
          title: '6. Signals — Overview',
          icon: { name: 'duo-bolt' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Are Signals?</h4>
                  <p style={{ fontSize: '0.95rem' }}>Asynchronous, <strong>fire-and-forget messages</strong> sent to a running workflow from outside. The workflow receives them through a named channel and reacts accordingly.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>
                    Signal Flow
                    <MermaidPopover
                      title="Signal Communication"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    E["🌐 External<br/>Service"] -->|"signal"| W["⚙️ Workflow"]
    U["👤 User<br/>Action"] -->|"signal"| W
    W --> A["▶️ React &<br/>Continue"]
    style E fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style U fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style W fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style A fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Signals are <strong>durable</strong> — buffered if the workflow is currently replaying</li>
                    <li>Carry a payload — any serialisable data</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.95rem' }}><strong>Best for:</strong> User approvals, webhook callbacks, real-time notifications, event-driven steps</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 17 — Signals — Overview
[excited] Pattern #6 — **Signals**. This is how the outside world talks to a running workflow.
#### ⚡ What Are Signals?
[confidently] Signals are **asynchronous, fire-and-forget messages** sent to a running workflow from the outside. An external service, a user action, a webhook callback — any of these can send a signal to a workflow, and the workflow receives it through a named channel and reacts.
[storytelling] Think of it like knocking on someone's door. You knock (send the signal), and whenever they're ready, they open the door (receive it). You don't wait for a response — it's a one-way communication.
#### ⚙️ How It Works
[lecture] The diagram shows the pattern: an external service and a user action both send signals to the workflow. The workflow receives them and continues processing. Signals carry a **payload** — any serializable data you want to send.
[pleased] The crucial thing about signals: they're **durable**. If the workflow is currently replaying when the signal arrives, it gets buffered and delivered as soon as replay catches up. You'll never lose a signal because of a crash.
#### 🎯 Best For
[conversational] **User approvals** — "the manager approved this expense report." **Webhook callbacks** — "the payment provider confirmed the charge." **Real-time notifications** — "new data is available for processing." Any time you need to inject external events into a running workflow.
Let's see how to implement this.`,
        },
        {
          id: 18,
          title: '6. Signals — Implementation',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Temporal Implementation</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Define a channel: <code>ch := workflow.GetSignalChannel(ctx, &quot;approve&quot;)</code></li>
                    <li>Block with <code>ch.Receive(ctx, &amp;payload)</code> or use a <strong>Selector</strong> for multiple channels</li>
                    <li>Sender uses <code>client.SignalWorkflow(ctx, workflowID, runID, &quot;approve&quot;, data)</code></li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Key Config &amp; Tips</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Combine signal + timer via <strong>Selector</strong> for deadline-based approvals</li>
                    <li>Use <strong>SignalWithStartWorkflow</strong> for idempotent starts + signals in one call</li>
                    <li>Buffer multiple signals with a <strong>slice/queue</strong> to process in order</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.65}>
                <div>
                  <h4>✅ Pros &amp; ❌ Cons</h4>
                  <p style={{ fontSize: '0.95rem' }}>
                    <strong>Pros:</strong> Decouples external events, durable delivery, no polling needed.{' '}
                    <strong>Cons:</strong> Fire-and-forget — sender gets no return value (use Update for that). Unhandled signals can pile up.
                  </p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 18 — Signals — Implementation
[conversational] Let's look at the code-level details and best practices.
#### 🛠️ Temporal Implementation
[lecture] First, you define a channel inside your workflow: **ch := workflow.GetSignalChannel(ctx, "approve")**. Then you block on it with **ch.Receive(ctx, &payload)** — the workflow pauses until a signal named "approve" arrives.
If you need to listen on **multiple channels** simultaneously — say an "approve" channel and a "cancel" channel — use a **Selector**. The Selector races both channels and whichever fires first wins.
On the sender side, it's a simple API call: **client.SignalWorkflow(ctx, workflowID, runID, "approve", data)**. This can come from your API server, a webhook handler, or even another workflow.
#### ⚙️ Tips
[pleased] A powerful pattern is combining a signal with a timer via a **Selector** for deadline-based approvals. [storytelling] "Wait up to 48 hours for approval. If no signal arrives, auto-reject." That's a Selector racing a timer and a signal channel.
[confidently] **SignalWithStartWorkflow** is another useful trick — it starts a workflow *and* sends it a signal in one atomic call. Perfect for idempotent workflows that might already be running.
If you expect bursts of signals, buffer them with a **slice or queue** inside the workflow and process them in order.
#### ⚖️ Trade-offs
[pleased] **Pros:** Decouples external events from workflow logic, durable delivery, no polling needed. [cautiously] **Cons:** Fire-and-forget means the sender gets **no return value**. If you need a response, use **Update** instead — that's Pattern #9. Also, unhandled signals can pile up in the queue if your workflow doesn't drain them.
[energetic] Next up is Pattern #7 — **Queries**.`,
        },
      ],
    },

    /* ================================================================
       GROUP 8 — Queries
       ================================================================ */
    {
      id: 'technique-7-queries',
      title: '7. Queries',
      slides: [
        {
          id: 19,
          title: '7. Queries — Overview',
          icon: { name: 'duo-search' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="flipCard" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Are Queries?</h4>
                  <p style={{ fontSize: '0.95rem' }}>A <strong>synchronous, read-only</strong> inspection of a running workflow's state. The caller sends a query and receives an immediate response.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>
                    Query Pattern
                    <MermaidPopover
                      title="Query Read-Only Inspection"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
sequenceDiagram
    participant C as Client / API
    participant W as Workflow
    C->>W: QueryWorkflow("getStatus")
    W-->>C: { status: "processing", progress: 72 }
    Note over W: State unchanged`}
                    />
                  </h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Queries <strong>never mutate</strong> workflow state</li>
                    <li>Handled in the workflow code via a registered query handler</li>
                    <li>Works on both <strong>running and completed</strong> workflows</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.65}>
                <p style={{ fontSize: '0.95rem' }}><strong>Best for:</strong> Status dashboards, progress bars, health-checks, debugging</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 19 — Queries — Overview
[excited] Pattern #7 — **Queries**. If Signals are about *sending* data into a workflow, Queries are about *reading* data out.
#### 🔍 What Are Queries?
[confidently] A Query is a **synchronous, read-only** inspection of a running workflow's internal state. The caller sends a query and gets an immediate response — like calling a getter function on an object.
[conversational] The key difference from Signals: Queries **never mutate** workflow state. They're completely side-effect-free. Think of it like checking your bank balance — you're reading the number, not changing it.
#### ⚙️ How It Works
[lecture] The sequence diagram shows the pattern beautifully. The client sends a **QueryWorkflow("getStatus")** call. The workflow's registered query handler runs, reads the current state from local variables, and returns **{ status: "processing", progress: 72 }**. The workflow state remains completely unchanged.
[pleased] Queries work on **both running and completed** workflows. So you can check the final state of a workflow that finished yesterday, which is great for debugging.
#### 🎯 Best For
[conversational] **Status dashboards** — show live progress of all active workflows. **Progress bars** — "your export is 72% complete." **Health checks** — "is this subscription workflow still healthy?" And **debugging** — inspect any workflow's internal state without touching it.
Let's see how to implement this.`,
        },
        {
          id: 20,
          title: '7. Queries — Implementation',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Temporal Implementation</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Register: <code>workflow.SetQueryHandler(ctx, &quot;getStatus&quot;, func() (Status, error) &#123; return currentStatus, nil &#125;)</code></li>
                    <li>Call: <code>client.QueryWorkflow(ctx, wfID, runID, &quot;getStatus&quot;)</code></li>
                    <li>Handler must be <strong>pure</strong> — no side effects, no activity calls</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Key Config &amp; Tips</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Multiple query types on one workflow — register different names</li>
                    <li>Use <strong>Search Attributes</strong> for bulk queries across many workflows</li>
                    <li>Query handlers must return <strong>quickly</strong> — no blocking calls</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.65}>
                <div>
                  <h4>✅ Pros &amp; ❌ Cons</h4>
                  <p style={{ fontSize: '0.95rem' }}>
                    <strong>Pros:</strong> Zero side-effects, instant state visibility, works on completed workflows.{' '}
                    <strong>Cons:</strong> Read-only (can't mutate — use Update for that). Needs a live worker to handle the query.
                  </p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 20 — Queries — Implementation
[conversational] Let's look at how to set up and use queries.
#### 🛠️ Temporal Implementation
[lecture] You register a query handler inside your workflow: **workflow.SetQueryHandler(ctx, "getStatus", func() (Status, error) { return currentStatus, nil })**. That's it — now any external caller can query this workflow's status.
On the caller side: **client.QueryWorkflow(ctx, wfID, runID, "getStatus")**. The response is returned synchronously, just like a regular function call.
[seriously] The critical rule: query handlers must be **pure functions** — no side effects, no activity calls, no timers. They just read local variables and return data. If your handler does anything non-deterministic, Temporal's replay will break.
#### ⚙️ Tips
[pleased] You can register **multiple query types** on a single workflow. For example, "getStatus", "getProgress", "getErrors" — each returning different slices of the workflow's state.
[confidently] For **bulk queries** across many workflows — like "how many orders are in the Shipped state right now?" — use **Search Attributes** instead. Search Attributes are indexed fields you set on your workflow that Temporal can query across all executions efficiently.
[cautiously] Query handlers must return **quickly**. No blocking calls, no waiting. If the handler takes too long, the query times out.
#### ⚖️ Trade-offs
[pleased] **Pros:** Zero side-effects, instant state visibility, works on completed workflows too. [cautiously] **Cons:** Read-only only — if you need to *change* workflow state, you need **Update** (our next pattern). Also, a live worker must be available to handle the query — if all workers are down, queries will fail.
[energetic] Let's move to Pattern #8 — **Continue-As-New**.`,
        },
      ],
    },

    /* ================================================================
       GROUP 9 — Continue-As-New
       ================================================================ */
    {
      id: 'technique-8-continue-as-new',
      title: '8. Continue-As-New',
      slides: [
        {
          id: 21,
          title: '8. Continue-As-New — Overview',
          icon: { name: 'duo-arrows-spin' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is Continue-As-New?</h4>
                  <p style={{ fontSize: '0.95rem' }}>A mechanism to <strong>close the current workflow execution</strong> and immediately start a new one with the same Workflow ID — carrying over state but resetting event history to zero.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>
                    History Reset
                    <MermaidPopover
                      title="Continue-As-New History Reset"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["Run 1<br/>Events: 48K"] -->|"ContinueAsNew"| B["Run 2<br/>Events: 0"]
    B -->|"grows..."| C["Run 2<br/>Events: 45K"]
    C -->|"ContinueAsNew"| D["Run 3<br/>Events: 0"]
    style A fill:#5c1a1a,color:#fca5a5,stroke:#aaa,stroke-width:1.5px
    style B fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Prevents <strong>event history from growing unbounded</strong> (50K+ events = trouble)</li>
                    <li>The new run gets a fresh history but keeps the same Workflow ID</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <p style={{ fontSize: '0.95rem' }}><strong>Best for:</strong> Polling loops, long-running entity workflows, high-iteration cron-like patterns</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 21 — Continue-As-New — Overview
[excited] Pattern #8 — **Continue-As-New**. This is Temporal's answer to the "my workflow ran too long and the history got huge" problem.
#### 🔄 What Is It?
[confidently] Continue-As-New is a mechanism that **closes the current workflow execution** and immediately starts a fresh one with the same Workflow ID. The key: the new execution starts with a **clean, empty event history**, but you can carry over whatever state you need as the input argument.
[storytelling] Think of it like closing one notebook that's full and opening a fresh one — same project, same context, but a clean page count.
#### ⚙️ Why You Need It
[seriously] Temporal stores every event that happens in a workflow: timers started, activities scheduled, signals received. For a workflow that processes thousands of iterations — say a polling loop that checks every 5 minutes — the history can grow to **50,000+ events**. At that point, replay becomes slow and expensive.
[lecture] The diagram shows the concept: Run 1 has 48K events and is getting dangerously large. It calls Continue-As-New, and Run 2 starts fresh at 0 events. When Run 2 reaches 45K events, it does the same thing, creating Run 3 with 0 events again.
[pleased] The Workflow ID stays the same throughout, so external callers don't even notice the rollover.
#### 🎯 Best For
[confidently] **Polling loops**, **long-lived entity workflows** like a user session, and **high-iteration cron-like patterns** where you process events indefinitely.
Let's see how to implement this.`,
        },
        {
          id: 22,
          title: '8. Continue-As-New — Implementation',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Temporal Implementation</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Return <code>workflow.NewContinueAsNewError(ctx, workflowFn, nextArgs)</code></li>
                    <li>Temporal recognises this special error and starts a new run automatically</li>
                    <li>Pass <strong>accumulated state</strong> as the input argument to carry it forward</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Key Config &amp; Tips</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Trigger after a <strong>fixed iteration count</strong> or event count threshold (e.g., every 10K events)</li>
                    <li>Drain pending signals <strong>before</strong> continuing — they don't carry over</li>
                    <li>Memos &amp; Search Attributes carry over automatically</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div>
                  <h4>✅ Pros &amp; ❌ Cons</h4>
                  <p style={{ fontSize: '0.95rem' }}>
                    <strong>Pros:</strong> Prevents history blow-up, same Workflow ID preserved, seamless for callers.{' '}
                    <strong>Cons:</strong> Pending signals/timers are lost — must drain first. Adds state-serialisation logic.
                  </p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 22 — Continue-As-New — Implementation
[conversational] Let's look at the implementation details and gotchas.
#### 🛠️ Temporal Implementation
[pleased] The API is elegant. Instead of returning normally, you return **workflow.NewContinueAsNewError(ctx, workflowFn, nextArgs)**. Temporal recognizes this special error type and automatically starts a new execution of the same workflow with the arguments you provided. The current run is marked as "Continued As New" in the UI.
The trick is to pass your **accumulated state** as the input argument. For a polling workflow, that might be the last processed timestamp. For an entity workflow, it might be the current entity state.
#### ⚙️ Key Tips
[lecture] Trigger Continue-As-New after a **fixed threshold** — either a certain number of iterations (e.g., every 1,000 loops) or when the event count approaches a limit (e.g., every 10K events). Temporal provides **workflow.GetInfo(ctx).GetCurrentHistoryLength()** to check the current event count.
[seriously] Here's the most common gotcha: **pending signals and timers don't carry over**. Before calling Continue-As-New, you must **drain all pending signals** from your channels. Otherwise, those signals are lost forever. Same for active timers — they're cancelled when the execution closes.
[pleased] The good news: **Memos and Search Attributes** carry over automatically. So your indexed fields and metadata are preserved.
#### ⚖️ Trade-offs
[confidently] **Pros:** Prevents history blow-up, keeps the same Workflow ID, seamless for external callers. [cautiously] **Cons:** You need to manually serialize and deserialize state between runs. Pending signals and timers must be drained first, adding complexity to your workflow logic.
[energetic] Alright, last but not least — Pattern #9: **Update**.`,
        },
      ],
    },

    /* ================================================================
       GROUP 10 — Update
       ================================================================ */
    {
      id: 'technique-9-update',
      title: '9. Update',
      slides: [
        {
          id: 23,
          title: '9. Update — Overview',
          icon: { name: 'duo-pen-to-square' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="rotateIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is an Update?</h4>
                  <p style={{ fontSize: '0.95rem' }}>A <strong>synchronous, validated mutation</strong> sent to a running workflow. Unlike Signals, the caller gets a response — including validation errors — before the call returns.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>
                    Update vs Signal
                    <MermaidPopover
                      title="Update: Validate → Mutate → Respond"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
sequenceDiagram
    participant C as Client
    participant W as Workflow
    C->>W: UpdateWorkflow("addItem", item)
    W->>W: validate(item)
    alt valid
        W->>W: mutate state
        W-->>C: { ok: true, total: 5 }
    else invalid
        W-->>C: { error: "out of stock" }
    end`}
                    />
                  </h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Validate</strong> phase — reject bad input before mutating</li>
                    <li><strong>Execute</strong> phase — mutate workflow state and return result</li>
                    <li>Caller awaits the result synchronously</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.65}>
                <p style={{ fontSize: '0.95rem' }}><strong>Best for:</strong> Shopping cart add/remove, bidding, reservation changes, any RPC-like interaction</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 23 — Update — Overview
[excited] And here's Pattern #9 — **Update**. This is one of Temporal's newest and most powerful primitives.
#### ✏️ What Is an Update?
[confidently] An Update is a **synchronous, validated mutation** sent to a running workflow. Unlike Signals, which are fire-and-forget, the caller **gets a response back** — including any validation errors — before the call returns. It's like an RPC 👉 'ahr-pee-SEE' call directly into your workflow.
[storytelling] Think of it like a cashier at a store. You hand them an item to add to your cart (the Update). They check if it's in stock (validation). If yes, they add it and tell you the new total (response). If not, they tell you it's out of stock (validation error). You get an answer immediately.
#### ⚙️ How It Works — Update vs Signal
[lecture] The sequence diagram shows the two-phase process. Phase 1 is **Validate** — the workflow checks if the input is valid without changing any state. If it's invalid, the caller gets an error immediately. Phase 2 is **Execute** — the workflow mutates its state and returns the result to the caller.
[pleased] This is a game-changer compared to Signals. With Signals, you send data in and hope for the best. With Updates, you know *immediately* whether the operation succeeded and what the new state is.
#### 🎯 Best For
[confidently] **Shopping cart add/remove**, **auction bidding**, **reservation changes**, and any interaction where the caller needs a response. Essentially, any time you want **RPC-like semantics** with a running workflow.
Let's see the implementation.`,
        },
        {
          id: 24,
          title: '9. Update — Implementation',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInBottom" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Temporal Implementation</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Register: <code>workflow.SetUpdateHandlerWithOptions(ctx, &quot;addItem&quot;, handler, opts)</code></li>
                    <li><strong>Validator</strong>: runs in the validate phase — return error to reject</li>
                    <li><strong>Handler</strong>: runs in the execute phase — mutate state, return result</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Key Config &amp; Tips</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Validator must be <strong>deterministic &amp; fast</strong> — no activities, no side effects</li>
                    <li>Handler <strong>can</strong> call activities, child workflows, timers</li>
                    <li>Use <strong>Update-with-Start</strong> to atomically start a workflow and send the first update</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.65}>
                <div>
                  <h4>✅ Pros &amp; ❌ Cons</h4>
                  <p style={{ fontSize: '0.95rem' }}>
                    <strong>Pros:</strong> Caller gets a response, input validation before mutation, atomic operation.{' '}
                    <strong>Cons:</strong> Newer API — not all SDKs fully stable. Adds complexity over simple signals.
                  </p>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 24 — Update — Implementation
[conversational] Let's look at the implementation details.
#### 🛠️ Temporal Implementation
[lecture] You register an update handler with: **workflow.SetUpdateHandlerWithOptions(ctx, "addItem", handler, opts)**. The options include a **Validator** function that runs in the validate phase — return an error to reject the update. The **Handler** function runs in the execute phase — mutate your state here and return the result.
[seriously] Important distinction: the Validator must be **deterministic and fast** — no activities, no side effects, no timers. It's essentially a pure check. But the Handler **can** call activities, start child workflows, or sleep — it has full access to the Temporal API. This is because the Validator runs during admission, while the Handler runs as part of the workflow's main execution.
#### ⚙️ Key Tips
[pleased] A powerful pattern is **Update-with-Start** — it atomically starts a workflow *and* sends the first update in one call. Perfect for initializing a shopping cart workflow and adding the first item simultaneously.
[confidently] Think about your validation carefully. The Validator is your guard at the door — checking inventory levels, verifying permissions, validating input format. Anything that would cause a bad mutation should be caught here, before the state changes.
#### ⚖️ Trade-offs
[pleased] **Pros:** Caller gets a synchronous response, input validation before mutation, atomic operation. No more fire-and-forget uncertainty. [cautiously] **Cons:** It's a newer API, so not all SDKs have fully stable support yet. It also adds complexity compared to simple Signals — you're writing a validator, a handler, and dealing with the two-phase lifecycle.
[energetic] Alright, we've covered all 9 patterns! Let's wrap things up with a cheat sheet and key takeaways.`,
        },
      ],
    },

    /* ================================================================
       GROUP 11 — Summary
       ================================================================ */
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        /* ---------- Cheat Sheet ---------- */
        {
          id: 25,
          title: 'Cheat Sheet — All 9 Patterns Compared',
          icon: { name: 'duo-clipboard-list' },
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.6', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <h4>Decision Table</h4>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.75rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #444' }}>
                      <th style={{ padding: '6px 8px', textAlign: 'left' }}>Pattern</th>
                      <th style={{ padding: '6px 8px', textAlign: 'left' }}>Complexity</th>
                      <th style={{ padding: '6px 8px', textAlign: 'left' }}>History Cost</th>
                      <th style={{ padding: '6px 8px', textAlign: 'left' }}>Best Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '5px 8px' }}><strong>Saga</strong></td>
                      <td style={{ padding: '5px 8px' }}>Medium</td>
                      <td style={{ padding: '5px 8px' }}>Medium</td>
                      <td style={{ padding: '5px 8px' }}>Distributed transactions with rollback</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '5px 8px' }}><strong>State Machine</strong></td>
                      <td style={{ padding: '5px 8px' }}>Medium</td>
                      <td style={{ padding: '5px 8px' }}>Medium–High</td>
                      <td style={{ padding: '5px 8px' }}>Approval chains, order lifecycles</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '5px 8px' }}><strong>Long-Running</strong></td>
                      <td style={{ padding: '5px 8px' }}>Low–Med</td>
                      <td style={{ padding: '5px 8px' }}>High</td>
                      <td style={{ padding: '5px 8px' }}>Human-in-the-loop, onboarding</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '5px 8px' }}><strong>Cron</strong></td>
                      <td style={{ padding: '5px 8px' }}>Low</td>
                      <td style={{ padding: '5px 8px' }}>Low</td>
                      <td style={{ padding: '5px 8px' }}>Scheduled batch jobs, ETL</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '5px 8px' }}><strong>Child Workflows</strong></td>
                      <td style={{ padding: '5px 8px' }}>Medium</td>
                      <td style={{ padding: '5px 8px' }}>Low (split)</td>
                      <td style={{ padding: '5px 8px' }}>Fan-out / fan-in, modular sub-tasks</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '5px 8px' }}><strong>Signals</strong></td>
                      <td style={{ padding: '5px 8px' }}>Low</td>
                      <td style={{ padding: '5px 8px' }}>Low</td>
                      <td style={{ padding: '5px 8px' }}>Async external events, approvals</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '5px 8px' }}><strong>Queries</strong></td>
                      <td style={{ padding: '5px 8px' }}>Low</td>
                      <td style={{ padding: '5px 8px' }}>None</td>
                      <td style={{ padding: '5px 8px' }}>Read-only state inspection, dashboards</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '5px 8px' }}><strong>Continue-As-New</strong></td>
                      <td style={{ padding: '5px 8px' }}>Low–Med</td>
                      <td style={{ padding: '5px 8px' }}>Resets</td>
                      <td style={{ padding: '5px 8px' }}>Infinite loops, entity workflows</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '5px 8px' }}><strong>Update</strong></td>
                      <td style={{ padding: '5px 8px' }}>Medium</td>
                      <td style={{ padding: '5px 8px' }}>Low</td>
                      <td style={{ padding: '5px 8px' }}>Validated sync mutations, carts</td>
                    </tr>
                  </tbody>
                </table>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 25 — Cheat Sheet — All 9 Patterns Compared
[cheerfully] Here's your quick reference card — all 9 patterns side by side.
#### 📋 The Decision Table
[lecture] Let me walk you through the key columns. **Complexity** tells you how much code you'll write. **History Cost** tells you how the event history grows. **Best Use Case** helps you pick the right pattern for your problem.
[confidently] **Saga** is medium complexity with medium history cost — use it for distributed transactions with rollback. **State Machine** is similar complexity but history can grow higher because of all the state transitions.
[conversational] **Long-Running** is low to medium complexity but **high** history cost — those durable timers and signals add events over weeks and months. That's why you pair it with **Continue-As-New**, which *resets* the history.
**Cron** is the simplest — low complexity, low history cost because each run is a fresh execution. **Child Workflows** have low history cost *per workflow* because the work is split across multiple executions.
**Signals** and **Queries** are both low complexity, low cost — they're communication primitives, not full patterns. **Update** is medium complexity because of the two-phase validate-execute lifecycle.
[storytelling] Here's a mental shortcut: if you need **rollback**, pick Saga. If you need **state tracking**, pick State Machine. If you need to **talk to a workflow**, use Signals, Queries, or Update depending on whether you need fire-and-forget, read-only, or read-write.
[energetic] Let's close with the key takeaways.`,
        },
        /* ---------- Key Takeaways ---------- */
        {
          id: 26,
          title: 'Key Takeaways',
          icon: { name: 'duo-trophy' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <h4>🎯 Top 5 Actionable Takeaways</h4>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.8}>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>1.</strong> Start with <strong>Saga</strong> for any multi-service transaction — it eliminates the need for distributed locks.
                </div>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>2.</strong> Use <strong>Signals + Selectors</strong> for human-in-the-loop approvals — combine with timers for SLA deadlines.
                </div>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>3.</strong> Always plan for <strong>Continue-As-New</strong> in long-running or high-event workflows to prevent history blow-up.
                </div>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>4.</strong> Prefer <strong>Update</strong> over Signal when the caller needs a response or you need <strong>input validation</strong>.
                </div>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>5.</strong> Decompose large workflows into <strong>Child Workflows</strong> — keeps history small and enables independent scaling.
                </div>
              </GSAPStaggerList>
              <GSAPAnimated animation="bounceIn" delay={0.9}>
                <div style={{ marginTop: '1rem', padding: '0.7rem', background: 'rgba(14,165,233,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  📚 <strong>Next step:</strong> Pick one pattern, prototype it with the Temporal TypeScript or Go SDK, and observe the event history in the Temporal Web UI.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 26 — Key Takeaways
[warmly] Let's wrap up with the five things I want you to remember from this talk.
#### 🎯 The Big Five
[confidently] **Number 1:** Start with **Saga** for any multi-service transaction. It eliminates distributed locks and two-phase commit. If you're building anything that involves charging money and then doing other steps, Saga is your first tool.
**Number 2:** Use **Signals + Selectors** for human-in-the-loop approvals. Combine a signal channel with a timer so you can set SLA deadlines. [storytelling] "Approve within 48 hours or auto-reject." Simple, durable, elegant.
[seriously] **Number 3:** Always plan for **Continue-As-New** in long-running workflows. Don't wait until your history hits 50K events to think about it. Build it in from day one.
[confidently] **Number 4:** Prefer **Update** over Signal when the caller needs a response or you need input validation. Updates give you synchronous, validated mutations — much safer than fire-and-forget signals for critical operations.
**Number 5:** Decompose large workflows into **Child Workflows**. It keeps history small, enables independent scaling, and makes your codebase more modular and testable.
#### 🚀 Your Next Step
[inspiringly] Here's your homework: pick **one pattern** from today's talk — the one most relevant to a problem you're solving right now. Prototype it with the Temporal TypeScript or Go SDK. Start a workflow, send it some signals or updates, and observe the event history in the **Temporal Web UI**. [excited] Seeing the event history light up as your workflow executes is incredibly satisfying and helps these patterns click in a way that slides alone never can.
[warmly] Thank you for joining me today! If you found this helpful, check out **niisar.com** for more talks and resources.`,
        },
      ],
    },
  ],
};
