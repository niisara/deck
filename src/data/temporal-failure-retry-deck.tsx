import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const temporalFailureRetryDeck: Deck = {
  id: 'temporal-failure-retry-strategies',
  name: '11 Temporal Failure & Retry Strategies',
  description: 'Retry policies, timeouts (Start-to-Close, Schedule-to-Start, Heartbeat), dead-letter patterns, compensation, idempotency',
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
    'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1920&q=80',
    'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1920&q=80',
    'https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1920&q=80',
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
          title: '11 Temporal Failure & Retry Strategies',
          content: (
            <div>
              <GSAPAnimated animation="rotateIn" duration={1.2}>
                <div style={{ fontSize: '1.5rem', color: '#f97316' }}>
                  <SvgIcon iconName="duo-rotate-exclamation" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  Failure & Retry Strategies with Temporal
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" duration={0.8} delay={0.3}>
                <div style={{ fontSize: '1.2rem', color: '#10b981', lineHeight: '2' }}>
                  <div>
                    <SvgIcon iconName="duo-users-group" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Audience:</strong> Backend engineers, platform teams, Temporal SDK users
                  </div>
                  <div>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>What you'll get:</strong> 11 strategies for resilient, self-healing workflows
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
          notes: `### 11 Temporal Failure & Retry Strategies
[happy] Welcome everyone! Today we're diving into **11 failure and retry strategies** that Temporal 👉 'TEM-puh-ruhl' gives us for building **resilient, self-healing workflows**.
#### 🎯 What's This About?
[storytelling] Imagine you're running an order pipeline — you charge a credit card, reserve inventory, and call a shipping API. What happens when the shipping API returns a 503 three times in a row? Or the database connection hangs for two minutes? [confidently] Without a strategy, you get **retry storms**, wasted compute, or worse — **silent data loss**. Temporal gives you a toolkit of 11 distinct strategies to handle every flavour of failure.
#### 👥 Who Is This For?
[warmly] This talk is aimed at **backend engineers**, **platform teams**, and anyone using the Temporal SDK. We'll keep it beginner-friendly — no prior Temporal experience needed. By the end, you'll know exactly which strategy to reach for in each failure scenario.
[energetic] We're using examples from the Go and TypeScript SDKs, but every concept applies to Java and Python too. Let's start with the big picture overview.`,
        },
        /* ---------- Slide 2: Overview ---------- */
        {
          id: 2,
          title: 'Overview — 11 Strategies at a Glance',
          icon: { name: 'duo-list-check' },
          content: (
            <div style={{ fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="Temporal Failure & Retry Strategy Landscape"
                  diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
graph TB
    A["11 Failure & Retry<br/>Strategies"] --> B["Retry & Backoff<br/>1-2"]
    A --> C["Timeouts<br/>3-5"]
    A --> D["Error Handling<br/>6-8"]
    A --> E["Recovery &<br/>Guarantees 9-11"]
    B --> B1["Retry Policies"]
    B --> B2["Backoff Tuning"]
    C --> C1["Start-to-Close"]
    C --> C2["Schedule-to-Start"]
    C --> C3["Heartbeat"]
    D --> D1["Non-Retryable Errors"]
    D --> D2["Dead-Letter Patterns"]
    D --> D3["Failure Converters"]
    E --> E1["Compensation"]
    E --> E2["Idempotency"]
    E --> E3["Cancellation Scopes"]
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style B1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style B2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style C1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style C2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style C3 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style D1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style D2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style D3 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style E1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style E2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style E3 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px`}
                />
              </div>
              <h4>Strategy Categories</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '1.2rem', marginTop: '14px' }}>
                <GSAPStaggerList stagger={0.08} duration={0.6}>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#f97316', marginRight: '0.5rem' }}>1</span>
                    <strong>Retry Policies</strong> — MaxAttempts, intervals, backoff
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#f97316', marginRight: '0.5rem' }}>2</span>
                    <strong>Backoff Tuning</strong> — Coefficients, jitter, max interval
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#f97316', marginRight: '0.5rem' }}>3</span>
                    <strong>Start-to-Close Timeout</strong> — Bound activity execution
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#f97316', marginRight: '0.5rem' }}>4</span>
                    <strong>Schedule-to-Start Timeout</strong> — Detect queue starvation
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#f97316', marginRight: '0.5rem' }}>5</span>
                    <strong>Heartbeat Timeout</strong> — Detect stalled activities
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#f97316', marginRight: '0.5rem' }}>6</span>
                    <strong>Non-Retryable Error Types</strong> — Skip known-permanent failures
                  </div>
                </GSAPStaggerList>
                <GSAPStaggerList stagger={0.08} duration={0.6}>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#f97316', marginRight: '0.5rem' }}>7</span>
                    <strong>Dead-Letter Patterns</strong> — Quarantine poison pills
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#f97316', marginRight: '0.5rem' }}>8</span>
                    <strong>Failure Converters</strong> — Error serialization
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#f97316', marginRight: '0.5rem' }}>9</span>
                    <strong>Compensation</strong> — Saga-style undo
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#f97316', marginRight: '0.5rem' }}>10</span>
                    <strong>Idempotency Keys</strong> — Exactly-once semantics
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#f97316', marginRight: '0.5rem' }}>11</span>
                    <strong>Cancellation Scopes</strong> — Graceful cleanup
                  </div>
                </GSAPStaggerList>
              </div>
            </div>
          ),
          notes: `### Overview — 11 Strategies at a Glance
[conversational] Alright, let's get the big picture before we deep-dive into each strategy one by one.
#### 📋 The Four Categories
[lecture] We've grouped these 11 strategies into four logical families. First, **Retry & Backoff** — that's strategies 1 and 2 — covering how many times and how fast you retry. Then **Timeouts** — strategies 3, 4, and 5 — the three timeout types that bound every step of an activity's lifecycle: Start-to-Close, Schedule-to-Start, and Heartbeat.
Next is **Error Handling** — strategies 6, 7, and 8 — covering Non-Retryable Errors, Dead-Letter Patterns, and Failure Converters. These control *what* you retry and *what* you skip. Finally, **Recovery & Guarantees** — strategies 9, 10, and 11 — Compensation, Idempotency Keys, and Cancellation Scopes. These ensure correctness when things go wrong.
#### 🔍 How They Fit Together
[confidently] Think of it as layers. **Retry Policies** are your first line of defence — automatic retries with backoff. **Timeouts** are your safety net — they prevent activities from running forever. **Error Handling** is your triage nurse — deciding what gets retried and what gets quarantined. And **Recovery** is your cleanup crew — rolling back, deduplicating, and gracefully shutting down.
[energetic] Let's now talk about *why* these strategies matter — what goes wrong when you don't have them.`,
        },
        /* ---------- Slide 3: Why It Matters ---------- */
        {
          id: 3,
          title: 'Why Failure & Retry Strategy Matters',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Failure Cascade Without Strategy"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["🌐 Request"] --> B["⚙️ Activity 1"]
    B --> C["⚙️ Activity 2"]
    C -->|"💥 Transient Fail"| D["🔄 Infinite Retry?"]
    D -->|"No Timeout"| E["💀 Resource<br/>Exhaustion"]
    D -->|"No Backoff"| F["🌊 Retry Storm"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style B fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style E fill:#5c1a1a,color:#fca5a5,stroke:#aaa,stroke-width:1.5px
    style F fill:#5c1a1a,color:#fca5a5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>The Problem</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Distributed systems fail <strong>constantly</strong> — transient errors, network blips, OOM</li>
                    <li>Without strategy you get <strong>retry storms</strong>, wasted compute, or silent data loss</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Temporal's Answer</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>RetryPolicy</strong> — configurable per-activity automatic retries</li>
                    <li><strong>Timeouts</strong> — Start-to-Close, Schedule-to-Start, Heartbeat bound every step</li>
                    <li><strong>Compensation &amp; DLQ</strong> — graceful degradation, not silent swallowing</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Where It Fits</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Payment processing, order fulfilment, ML pipelines, cross-service orchestration</li>
                    <li>Any system where <strong>silent failure is unacceptable</strong></li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Why Failure & Retry Strategy Matters
[conversational] So why should you care about failure strategies? Let's talk about the real pain.
#### 💥 The Problem
[storytelling] Picture this: your workflow calls an external payment API. It fails with a transient 503 error. Your code retries immediately — and so do a hundred other workflows hitting the same API. [cautiously] Now you've created a **retry storm** 👉 'reh-TRY storm' — a thundering herd that hammers the already-struggling service. Without backoff, without rate limiting, your retries *become* the outage.
Or consider the opposite problem: an activity hangs forever because of a deadlocked database connection. No timeout means no failure signal. No failure signal means no retry. Your workflow just… sits there silently. [sighing] Days could pass before anyone notices.
#### ✅ Temporal's Answer
[pleased] Temporal gives you three categories of tools. **RetryPolicy** 👉 'reh-TRY PAHL-ih-see' — configurable per-activity, with exponential backoff, maximum attempts, and interval caps. **Timeouts** — Start-to-Close bounds each attempt, Schedule-to-Start catches dead worker pools, and Heartbeat detects stalled activities. And **Compensation plus DLQ** — graceful degradation instead of silent swallowing.
[playful] Think of it like a hospital triage system. [chuckling] Timeouts are the vital-sign monitors. Retry policies are the treatment protocol. And dead-letter queues are intensive care for the patients that can't be saved automatically.
#### 🌍 Where It Fits
[confidently] Payment processing, order fulfilment, ML pipelines, cross-service orchestration — any system where **silent failure is unacceptable** needs these strategies.
[energetic] Now let's dive into Strategy #1 — **Retry Policies** — the foundation everything else builds on.`,
        },
      ],
    },

    /* ================================================================
       GROUP 2 — Retry Policies
       ================================================================ */
    {
      id: 'technique-1-retry-policies',
      title: '1. Retry Policies',
      slides: [
        {
          id: 4,
          title: '1. Retry Policies — Overview',
          icon: { name: 'duo-arrows-rotate' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is a Retry Policy?</h4>
                  <p style={{ fontSize: '0.95rem' }}>A declarative configuration attached to an <strong>Activity</strong> (or child workflow) that tells Temporal <em>how many times</em>, <em>how fast</em>, and <em>under which conditions</em> to retry on failure.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Retry Policy Decision Flow"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["Activity Fails"] --> B{"Non-Retryable<br/>Error?"}
    B -->|"Yes"| C["❌ Fail Immediately"]
    B -->|"No"| D{"Attempts <<br/>MaxAttempts?"}
    D -->|"No"| C
    D -->|"Yes"| E["⏳ Wait (backoff)"]
    E --> F["🔄 Retry Activity"]
    F --> A
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style C fill:#5c1a1a,color:#fca5a5,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Key Fields</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><code>InitialInterval</code> — first retry delay (e.g. 1s)</li>
                    <li><code>BackoffCoefficient</code> — multiplier per retry (e.g. 2.0)</li>
                    <li><code>MaximumInterval</code> — cap on delay growth (e.g. 60s)</li>
                    <li><code>MaximumAttempts</code> — total tries before permanent failure</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.55}>
                <p style={{ fontSize: '0.95rem' }}><strong>Default:</strong> Temporal retries activities <em>infinitely</em> if no policy is set — always configure one explicitly.</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 1. Retry Policies — Overview
[excited] Strategy #1 — **Retry Policies**. This is the foundation that every other strategy builds on, so pay close attention.
#### 🔄 What Is a Retry Policy?
[confidently] A Retry Policy is a **declarative configuration** you attach to an Activity. It tells Temporal *how many times* to retry, *how long* to wait between retries, and *which errors* should stop retrying immediately. You don't write any retry loops yourself — Temporal handles it all.
[storytelling] Think of it like a vending machine. You push the button, nothing comes out. [chuckling] A retry policy says: "Try again in 1 second. If it still fails, wait 2 seconds. Then 4 seconds. Give up after 5 tries." All automatic, no manual button-mashing.
#### ⚙️ Key Fields
The four fields you need to know are: **InitialInterval** — that's the delay before the first retry, usually 1 second. **BackoffCoefficient** 👉 'BAK-off koh-eh-FISH-ent' — the multiplier applied to each subsequent delay, typically 2.0 for exponential growth. **MaximumInterval** — a cap so delays never grow beyond, say, 60 seconds. And **MaximumAttempts** — the total number of tries before Temporal gives up and marks the activity as permanently failed.
#### ⚠️ The Surprise Default
[cautiously] Here's something that catches a lot of people: Temporal retries activities **infinitely** by default if you don't set a policy. That sounds helpful, but it means a permanently-broken activity will retry forever, growing your event history without bound. Always set an explicit MaximumAttempts.
[energetic] Let's look at the pros and cons of retry policies next.`,
        },
        {
          id: 5,
          title: '1. Retry Policies — Pros & Cons',
          icon: { name: 'duo-split' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Transparent — zero retry code in your activity logic</li>
                    <li>Configurable per-activity, not one-size-fits-all</li>
                    <li>Temporal tracks attempts in the event history — fully auditable</li>
                    <li>Works with all SDKs (Go, TS, Java, Python, .NET)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Retry Risk: Non-Idempotent Activity"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["⚙️ Attempt 1"] -->|"✅ Charged"| B["💳 $50"]
    B -->|"💔 Ack Lost"| C["🔄 Temporal\nRetries"]
    C --> D["⚙️ Attempt 2"]
    D -->|"✅ Charged"| E["💳 $50\nAgain! ❌"]
    style A fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style E fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Infinite default can surprise — <strong>always set MaximumAttempts</strong></li>
                    <li>Retrying non-idempotent activities can cause <strong>duplicate side effects</strong></li>
                    <li>Backoff alone won't fix a permanently broken dependency</li>
                    <li>History grows with every retry attempt — monitor event count</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div style={{ padding: '0.5rem', background: 'rgba(249,115,22,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  💡 <strong>Tip:</strong> Combine with <code>NonRetryableErrorTypes</code> to short-circuit on validation or auth errors.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 1. Retry Policies — Pros & Cons
[conversational] So we know what retry policies are — now let's weigh the good and the bad.
#### ✅ The Good Stuff
[pleased] The biggest win is **transparency**. Your activity code stays clean — zero retry logic. You just write the business logic, and the retry policy handles the rest declaratively. Each activity can have its **own** policy tailored to its needs — a fast internal gRPC 👉 'gee-ARE-pee-see' call gets quick retries, while a slow third-party API gets cautious back-off.
Another huge benefit: Temporal **tracks every attempt** in the event history. That means full auditability 👉 'aw-dit-uh-BIL-ih-tee' — you can see exactly how many times an activity retried, when, and what errors it hit. And the best part? This works identically across all SDKs — Go, TypeScript, Java, Python, .NET.
#### ❌ The Pain Points
[cautiously] The infinite-retry default is the number one gotcha. If you don't set **MaximumAttempts**, a broken activity retries forever, ballooning your event history and burning compute.
Another subtlety: retrying **non-idempotent** 👉 'non-eye-dem-POH-tent' activities can cause **duplicate side effects**. If your activity charges a credit card and it succeeds but the acknowledgement is lost, Temporal retries — and you've charged the customer twice. That's why Strategy #10, Idempotency Keys, is so important.
Also remember that backoff alone won't fix a genuinely broken dependency. If the service is down permanently, you're just delaying the inevitable.
#### 💡 Pro Tip
Combine retry policies with **NonRetryableErrorTypes** to short-circuit on validation or authentication errors. We'll cover that in Strategy #6.
[energetic] Speaking of backoff — let's look at Strategy #2: **Backoff Tuning**.`,
        },
      ],
    },

    /* ================================================================
       GROUP 3 — Backoff Tuning
       ================================================================ */
    {
      id: 'technique-2-backoff-tuning',
      title: '2. Backoff Tuning',
      slides: [
        {
          id: 6,
          title: '2. Backoff Tuning — Overview',
          icon: { name: 'duo-chart-line-up' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="flipCard" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is Backoff Tuning?</h4>
                  <p style={{ fontSize: '0.95rem' }}>Fine-tuning the <strong>BackoffCoefficient</strong>, <strong>InitialInterval</strong>, and <strong>MaximumInterval</strong> to balance <em>recovery speed</em> vs. <em>downstream pressure</em>.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Exponential Backoff Curve"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["1s"] -->|"×2"| B["2s"]
    B -->|"×2"| C["4s"]
    C -->|"×2"| D["8s"]
    D -->|"×2"| E["16s"]
    E -->|"capped"| F["⏱ MaxInterval<br/>60s"]
    style A fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style B fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style D fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style F fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Tuning Levers</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Coefficient 1.0</strong> — fixed interval, good for polling</li>
                    <li><strong>Coefficient 2.0</strong> — standard exponential, good default</li>
                    <li><strong>Coefficient 3-5</strong> — aggressive back-off, rate-limited APIs</li>
                    <li><strong>MaximumInterval</strong> — prevents unreasonable wait (cap at 60-120s)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.6}>
                <div style={{ padding: '0.5rem', background: 'rgba(16,185,129,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  🎯 <strong>Rule of thumb:</strong> Use coefficient 2.0 + MaxInterval 60s for most external service calls.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 2. Backoff Tuning — Overview
[conversational] Strategy #2 — **Backoff Tuning**. This is all about dialling in the *right* retry timing for your specific use case.
#### 🎯 What Is Backoff Tuning?
[lecture] Backoff tuning means adjusting three knobs: the **BackoffCoefficient**, the **InitialInterval**, and the **MaximumInterval** to balance two competing goals — **recovery speed** versus **downstream pressure**. Too aggressive and you create a retry storm. Too cautious and your users wait forever for recovery.
#### 📏 The Tuning Levers
[confidently] A coefficient of **1.0** gives you a fixed interval — every retry waits the same amount. That's great for **polling** scenarios where you're checking a status endpoint. A coefficient of **2.0** is the standard **exponential backoff** — 1s, 2s, 4s, 8s, 16s — doubling each time. Good default for most external calls.
For rate-limited APIs like Stripe or AWS, consider a coefficient of **3 to 5** — aggressive backoff that gives the service plenty of breathing room. And always set a **MaximumInterval** cap. Without it, your delays can grow to absurd durations — imagine waiting 17 minutes between retries.
[playful] It's like adjusting the snooze button on your alarm clock. [chuckling] Too short and you're exhausted from pressing it every 30 seconds. Too long and you sleep through lunch.
#### 📌 Rule of Thumb
Use coefficient 2.0 plus MaxInterval 60 seconds for most external service calls. Simple, effective, and well-understood.
[energetic] Let's look at some specific patterns and the pitfalls to avoid.`,
        },
        {
          id: 7,
          title: '2. Backoff Tuning — Patterns & Pitfalls',
          icon: { name: 'duo-sliders' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Common Patterns</h4>
                </div>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.1} duration={0.7}>
                <div style={{ marginBottom: '0.6rem', fontSize: '0.95rem' }}>
                  <strong>Fast-recover:</strong> InitialInterval 100ms, Coeff 1.5, Max 5s — for internal gRPC calls
                </div>
                <div style={{ marginBottom: '0.6rem', fontSize: '0.95rem' }}>
                  <strong>Cautious:</strong> InitialInterval 1s, Coeff 2.0, Max 60s — for third-party APIs with rate limits
                </div>
                <div style={{ marginBottom: '0.6rem', fontSize: '0.95rem' }}>
                  <strong>Polling:</strong> InitialInterval 5s, Coeff 1.0, Max 5s — fixed interval for status checks
                </div>
              </GSAPStaggerList>
              <GSAPAnimated animation="slideInBottom" delay={0.5}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Thundering Herd Without Jitter"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["🔴 Service Down"] --> B["500 Workflows\nFail at t=0"]
    B --> C["⏱ All Retry\nat t=1s"]
    C --> D["🌊 Thundering\nHerd"]
    D --> E["🔴 Service\nCrashes Again"]
    E -->|"cycle"| C
    style A fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style E fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>⚠️ Pitfalls</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>No jitter built-in — add it at the <strong>application level</strong> if many workflows hit the same service</li>
                    <li>Aggressive retries + high MaxAttempts = thundering herd on recovery</li>
                    <li>Long MaximumInterval delays detection of genuine outages — pair with alerting</li>
                  </ul>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 2. Backoff Tuning — Patterns & Pitfalls
[conversational] Now let's look at three concrete backoff configurations you'll use over and over, plus the traps to avoid.
#### 🛠️ Three Common Patterns
[lecture] **Pattern 1 — Fast-recover**: InitialInterval 100 milliseconds, coefficient 1.5, max 5 seconds. Use this for **internal gRPC calls** between your own services where recovery is usually instant — a brief network glitch, a pod restarting.
**Pattern 2 — Cautious**: InitialInterval 1 second, coefficient 2.0, max 60 seconds. This is your go-to for **third-party APIs** with rate limits. It gives the external service plenty of room to recover.
**Pattern 3 — Polling**: InitialInterval 5 seconds, coefficient 1.0, max 5 seconds. A perfectly **fixed interval** for status-check loops — like polling a payment gateway for settlement confirmation.
#### ⚠️ Pitfalls
[cautiously] First, Temporal doesn't have **built-in jitter** 👉 'JIT-er'. Jitter means adding a small random offset to each retry delay. Without it, if 500 workflows all hit the same service failure at the same moment, they all retry at exactly the same intervals — creating a **thundering herd**. You need to add jitter at the application level.
Second, aggressive retries combined with a high MaxAttempts creates enormous pressure on recovery. If a downstream service comes back online, it gets slammed by thousands of queued retries simultaneously.
Third, a very long MaximumInterval delays your ability to **detect genuine outages**. If retries are spaced 2 minutes apart, your alerting pipeline won't fire for a while. Pair long backoff with proactive monitoring.
[energetic] Now let's move on to the first of three timeout strategies — **Start-to-Close Timeout**.`,
        },
      ],
    },

    /* ================================================================
       GROUP 4 — Start-to-Close Timeout
       ================================================================ */
    {
      id: 'technique-3-start-to-close',
      title: '3. Start-to-Close Timeout',
      slides: [
        {
          id: 8,
          title: '3. Start-to-Close Timeout — Overview',
          icon: { name: 'duo-clock' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is Start-to-Close Timeout?</h4>
                  <p style={{ fontSize: '0.95rem' }}>The maximum time a <strong>single activity attempt</strong> may run from the moment a worker picks it up until it must return a result. If exceeded, Temporal cancels that attempt and retries (if configured).</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Start-to-Close Scope"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
sequenceDiagram
    participant W as Worker
    participant S as Temporal Server
    W->>S: PollActivityTask
    S-->>W: Task (Start clock)
    Note over W: Activity executing...
    W-->>S: RespondActivityCompleted
    Note over W,S: ⏱ Start-to-Close bounds this window`}
                    />
                  </div>
                  <h4>Key Details</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Required</strong> — you must set either this or ScheduleToClose</li>
                    <li>Bounds a <strong>single attempt</strong>, not total time across retries</li>
                    <li>Typical values: 5s–60s for API calls, 5m–30m for batch jobs</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.55}>
                <p style={{ fontSize: '0.95rem' }}><strong>Best for:</strong> Preventing zombie activities that hang due to deadlocks, slow I/O, or unresponsive dependencies.</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 3. Start-to-Close Timeout — Overview
[conversational] Strategy #3 — the **Start-to-Close Timeout**. This is the most important timeout you'll set.
#### ⏰ What Is It?
[lecture] The Start-to-Close timeout bounds the maximum time a **single activity attempt** may run. The clock starts the moment a worker picks up the task and stops when the activity returns a result. If the clock runs out, Temporal cancels that specific attempt and retries it — potentially on a different worker.
[storytelling] Think of it like a cooking timer. You put the dish in the oven and set the timer for 30 minutes. If it's not done by then, something went wrong — maybe the oven broke. You don't wait indefinitely; you take action.
#### 🔑 Key Details
[confidently] This timeout is **required** — you must set either Start-to-Close or ScheduleToClose. It bounds a **single attempt**, not the total time across all retries. So if your activity retries 3 times with a 30-second Start-to-Close, the total wall clock time could be up to 90 seconds plus backoff delays.
Typical values range from **5 to 60 seconds** for API calls and **5 to 30 minutes** for batch jobs like data processing or ML inference.
#### 🎯 Best For
Preventing **zombie activities** — those that hang due to deadlocks, slow I/O, or an unresponsive database connection. Without this timeout, a hung activity sits there forever consuming a worker slot.
[energetic] Let's look at the trade-offs next.`,
        },
        {
          id: 9,
          title: '3. Start-to-Close — Pros & Cons',
          icon: { name: 'duo-timer' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Catches hung activities early — fail fast, retry on a different worker</li>
                    <li>Per-attempt: retries aren't penalised by earlier slow attempts</li>
                    <li>Simple mental model — "how long should one try take?"</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Timeout Sizing from P99 Latency"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["📊 Measure P99\nLatency = 2s"] --> B{"Multiply\nby 2-3x"}
    B -->|"Safe"| C["✅ Timeout\n= 5-6s"]
    B -->|"Too Tight"| D["❌ 3s: Premature\nTimeouts"]
    B -->|"Too Loose"| E["⚠️ 60s: Slow\nDetection"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style E fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Too tight → premature timeouts on legitimate slow work</li>
                    <li>Doesn't account for <strong>queue wait time</strong> — use Schedule-to-Start for that</li>
                    <li>Must be paired with Heartbeat for very long activities (minutes+)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.6}>
                <div style={{ padding: '0.5rem', background: 'rgba(249,115,22,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  ⏱ <strong>Guideline:</strong> Set to 2–3× your P99 activity latency. If P99 is 2s, use 5–6s.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 3. Start-to-Close — Pros & Cons
[conversational] Now the trade-offs for Start-to-Close timeout.
#### ✅ The Good Stuff
[pleased] The biggest win is **fast detection** of hung activities. Instead of waiting for the parent workflow to time out — which could be hours — you catch hung attempts in seconds or minutes. The retry kicks in immediately, potentially landing on a healthy worker.
Because it's **per-attempt**, earlier slow attempts don't penalise later retries. If attempt 1 hit a slow node and took 25 of its 30-second window, attempt 2 still gets a full fresh 30 seconds on a different worker.
The mental model is dead simple: "How long should one try of this activity take?" That's it. Easy to reason about, easy to explain to your team.
#### ❌ The Gotchas
[cautiously] Set it **too tight** and you'll get premature timeouts on legitimate slow work. If your activity sometimes takes 8 seconds and you set the timeout to 5, you'll get spurious retries that burn attempts. The guideline is **2 to 3 times your P99 latency** 👉 'pee ninety-nine LAY-ten-see'. If your P99 is 2 seconds, set the timeout to 5 or 6 seconds.
This timeout also doesn't account for **queue wait time**. If an activity sat in the task queue for 10 seconds before a worker picked it up, that's a different problem — and that's exactly what Strategy #4, Schedule-to-Start, solves.
For very long activities — minutes or more — Start-to-Close alone isn't enough. You need **Heartbeat timeouts** to detect stalls mid-execution.
[energetic] Let's look at Schedule-to-Start next — the timeout that catches dead worker pools.`,
        },
      ],
    },

    /* ================================================================
       GROUP 5 — Schedule-to-Start Timeout
       ================================================================ */
    {
      id: 'technique-4-schedule-to-start',
      title: '4. Schedule-to-Start Timeout',
      slides: [
        {
          id: 10,
          title: '4. Schedule-to-Start Timeout — Overview',
          icon: { name: 'duo-hourglass-start' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is Schedule-to-Start Timeout?</h4>
                  <p style={{ fontSize: '0.95rem' }}>Limits how long an activity task can sit in the <strong>task queue</strong> waiting for a worker to pick it up. Fires if no worker starts execution within the window.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Schedule-to-Start Window"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
sequenceDiagram
    participant WF as Workflow
    participant S as Temporal Server
    participant W as Worker Pool
    WF->>S: ScheduleActivity (clock starts)
    Note over S: ⏳ Waiting in task queue...
    S-->>W: Worker polls & picks up
    Note over S,W: ⏱ Schedule-to-Start<br/>bounds this wait`}
                    />
                  </div>
                  <h4>Why Use It?</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Detects <strong>worker starvation</strong> — all workers down or overloaded</li>
                    <li>Surfaces <strong>task-queue misconfiguration</strong> (wrong queue name)</li>
                    <li>Triggers a retry on timeout — new attempt may land on a healthy worker</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.55}>
                <p style={{ fontSize: '0.95rem' }}><strong>Typical value:</strong> 10s–120s depending on expected queue depth and worker auto-scaling lag.</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 4. Schedule-to-Start Timeout — Overview
[conversational] Strategy #4 — **Schedule-to-Start Timeout**. This one catches a failure mode that most people forget about.
#### ⏳ What Is It?
[lecture] The Schedule-to-Start timeout limits how long an activity task can sit in the **task queue** waiting for a worker to pick it up. The clock starts when the workflow schedules the activity and stops when a worker dequeues it. If no worker starts execution within the window, Temporal marks that attempt as timed out and retries.
[storytelling] Imagine you're at a restaurant. You place your order with the waiter — that's "schedule". The order sits on the kitchen counter waiting for a chef to pick it up — that's the queue. If no chef picks up your order in 10 minutes, something is very wrong. Maybe the kitchen is closed, maybe all chefs went on break. That's exactly what Schedule-to-Start detects.
#### 🔍 Why Use It?
[confidently] It detects **worker starvation** — all workers are down, overloaded, or OOM-killed. It surfaces **task-queue misconfiguration** — maybe you deployed a new version with a typo in the queue name. And it triggers a retry, which may land on a different, healthy worker pool.
#### 📏 Typical Values
Set it to **10 to 120 seconds** depending on your expected queue depth and how fast your auto-scaler brings up new workers. If your Kubernetes HPA 👉 'eitch-pee-AY' takes 45 seconds to scale up, set the timeout to 60 seconds to give it a buffer.
[energetic] Let's look at the configuration details and common gotchas.`,
        },
        {
          id: 11,
          title: '4. Schedule-to-Start — Config & Alerts',
          icon: { name: 'duo-bell-exclamation' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Configuration Tips</h4>
                  <GSAPStaggerList stagger={0.1} duration={0.6}>
                    <div style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                      Set to <strong>auto-scaling warm-up time + buffer</strong> (e.g. 60s if scale-up takes 45s)
                    </div>
                    <div style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                      Combine with Prometheus metric <code>temporal_activity_schedule_to_start_latency</code>
                    </div>
                    <div style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                      Alert at <strong>P95 &gt; 50%</strong> of your timeout value to get ahead of issues
                    </div>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.4}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="S2S Timeout = Scale-Up + Buffer"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["📋 Task\nScheduled"] --> B["⏳ Queue Wait"]
    B -->|"45s K8s\nscale-up"| C["🚀 HPA\nSpins Up"]
    C -->|"+ 15s buffer"| D["⏱ S2S Timeout\n= 60s"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#2d1b4e,color:#e0c0ff,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>⚠️ Gotchas</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Timeout fires <strong>per attempt</strong> — each retry restarts the S2S clock</li>
                    <li>Not set by default — add it to every production activity</li>
                    <li>A retry after S2S timeout still counts toward <code>MaximumAttempts</code></li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.65}>
                <div style={{ padding: '0.5rem', background: 'rgba(239,68,68,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  🚨 <strong>Anti-pattern:</strong> Omitting Schedule-to-Start means a dead worker pool is invisible until the workflow hits its execution timeout.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 4. Schedule-to-Start — Config & Alerts
[conversational] Now let's talk about how to configure Schedule-to-Start in practice and the gotchas to watch for.
#### ⚙️ Configuration Tips
[lecture] Set the timeout to your **auto-scaling warm-up time plus a buffer**. If your Kubernetes cluster takes 45 seconds to spin up new worker pods, set the timeout to 60 seconds. That gives auto-scaling a chance to work before you start burning retry attempts.
Pair it with the Prometheus metric **temporal_activity_schedule_to_start_latency**. This metric tells you how long tasks are waiting in the queue. Set an alert at **P95 greater than 50%** of your timeout value — that way you get a warning *before* timeouts start firing.
#### ⚠️ Gotchas
[cautiously] First, the timeout fires **per attempt**. Each retry of the activity restarts the Schedule-to-Start clock independently. That means a retry after an S2S 👉 'ess-two-ess' timeout still counts toward your MaximumAttempts. If you have 3 max attempts and the first one times out in the queue, you only have 2 attempts left.
Second, this timeout is **not set by default**. If you don't configure it, a dead worker pool is completely invisible — your workflow just waits silently until it hits the much longer ScheduleToClose timeout.
#### 🚨 Anti-Pattern
[determined] The number one anti-pattern is **omitting Schedule-to-Start entirely**. Without it, you have no early warning that your workers are unreachable. Add it to every production activity alongside Start-to-Close.
[energetic] Next up — Strategy #5: the **Heartbeat Timeout**, which detects stalled activities in real time.`,
        },
      ],
    },

    /* ================================================================
       GROUP 6 — Heartbeat Timeout
       ================================================================ */
    {
      id: 'technique-5-heartbeat',
      title: '5. Heartbeat Timeout',
      slides: [
        {
          id: 12,
          title: '5. Heartbeat Timeout — Overview',
          icon: { name: 'duo-heart-pulse' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is a Heartbeat Timeout?</h4>
                  <p style={{ fontSize: '0.95rem' }}>A liveness check for <strong>long-running activities</strong>. The activity must periodically call <code>RecordHeartbeat()</code>. If no heartbeat arrives within the timeout, Temporal considers the activity stalled and retries it.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Heartbeat Mechanism"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["Activity<br/>Running"] -->|"❤️ heartbeat"| S["Temporal<br/>Server"]
    A -->|"❤️ heartbeat"| S
    A -->|"💔 no heartbeat"| T["⏱ Timeout!"]
    T --> R["🔄 Retry on<br/>New Worker"]
    style A fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style S fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style T fill:#5c1a1a,color:#fca5a5,stroke:#aaa,stroke-width:1.5px
    style R fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>How It Works</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Call <code>activity.RecordHeartbeat(ctx, progressInfo)</code> periodically</li>
                    <li>Heartbeat details are <strong>persisted</strong> — on retry, read them to resume from checkpoint</li>
                    <li>Server also returns <strong>cancellation</strong> info via the heartbeat response</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.55}>
                <p style={{ fontSize: '0.95rem' }}><strong>Use for:</strong> File processing, ML training, large data transfers — anything &gt; 30 seconds.</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 5. Heartbeat Timeout — Overview
[excited] Strategy #5 — the **Heartbeat Timeout**. This is your liveness detector for long-running activities.
#### ❤️ What Is a Heartbeat Timeout?
[lecture] A Heartbeat timeout is a liveness check. Your long-running activity periodically calls **RecordHeartbeat()** 👉 'reh-CORD HART-beet'. If no heartbeat arrives within the configured timeout, Temporal considers the activity **stalled** and retries it on a different worker.
[storytelling] Think of it like a dead man's switch on a train. The driver has to press a button every 30 seconds to prove they're awake. If they stop pressing, the system assumes they're incapacitated and applies the emergency brakes. Same idea — if your activity stops heartbeating, Temporal assumes the worker crashed.
#### ⚙️ How It Works
You call \`activity.RecordHeartbeat(ctx, progressInfo)\` periodically from inside your activity code. The *progressInfo* is key — heartbeat details are **persisted** by Temporal, so when the activity retries on a new worker, it can read the last heartbeat and **resume from that checkpoint** instead of starting over.
Bonus: the server also returns **cancellation information** via the heartbeat response. So if someone cancels the workflow, your activity learns about it during the next heartbeat call and can shut down gracefully.
#### 🎯 Use For
File processing, ML model training, large data transfers, video encoding — anything that takes **longer than 30 seconds**. If the activity is short enough for Start-to-Close to cover it, you probably don't need heartbeats.
[energetic] Let's look at the checkpointing pattern and trade-offs.`,
        },
        {
          id: 13,
          title: '5. Heartbeat — Checkpointing & Pros/Cons',
          icon: { name: 'duo-wave-pulse' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Detects worker crashes fast — don't wait for Start-to-Close to expire</li>
                    <li>Heartbeat <strong>details = checkpoint</strong> → resume from last progress, not start</li>
                    <li>Workers learn about cancellation via heartbeat — graceful shutdown</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Heartbeat Checkpoint Recovery"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["📄 Processing\n1M Rows"] --> B["❤️ Heartbeat\noffset: 452K"]
    B --> C["💀 Worker\nCrashes"]
    C --> D["🔄 New Worker\nReads Checkpoint"]
    D --> E["▶️ Resume\nRow 452,001"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style D fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Requires <strong>code changes</strong> — must instrument the activity</li>
                    <li>Over-heartbeating increases server load (keep interval ≥ 5s)</li>
                    <li>Heartbeat details have payload size limits</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div style={{ padding: '0.5rem', background: 'rgba(16,185,129,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  💡 <strong>Pattern:</strong> Set HeartbeatTimeout = 30s, call RecordHeartbeat every 10s, include <code>{`{ offset: currentRow }`}</code> to checkpoint progress.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 5. Heartbeat — Checkpointing & Pros/Cons
[conversational] Now the really powerful part of heartbeats — **checkpointing** — and the trade-offs.
#### ✅ The Good Stuff
[pleased] First, heartbeats detect worker crashes **fast**. Instead of waiting for a 30-minute Start-to-Close timeout to expire, a 30-second heartbeat timeout catches a dead worker in half a minute. That's a massive improvement in recovery time.
Second, heartbeat **details equal a checkpoint**. If your activity is processing a million-row CSV, you can heartbeat with the current row offset — \`{ offset: 452000 }\`. When the activity retries on a new worker, it reads the last heartbeat, sees offset 452,000, and picks up right there. No re-processing the first 452,000 rows.
Third, workers learn about **cancellation** via the heartbeat response. So your activity can shut down gracefully — close database connections, delete temp files, send a notification — instead of being killed abruptly.
#### ❌ The Pain Points
[cautiously] Heartbeats require **code changes**. You need to instrument your activity to call RecordHeartbeat at regular intervals. It's not zero-effort like a retry policy.
Over-heartbeating increases **server load**. If you heartbeat every 100 milliseconds, you're flooding the Temporal server with RPC calls. Keep the interval at **5 seconds minimum** for most workloads.
Heartbeat details also have **payload size limits**. Don't try to send a megabyte of state per heartbeat — keep it small, like a row count or a last-processed ID.
#### 💡 Pattern
Set HeartbeatTimeout to 30 seconds, call RecordHeartbeat every 10 seconds, and include \`{ offset: currentRow }\` as the details. Simple, effective, battle-tested.
[energetic] Now let's shift from timeouts to error handling — Strategy #6: **Non-Retryable Error Types**.`,
        },
      ],
    },

    /* ================================================================
       GROUP 7 — Workflow Execution Timeout
       ================================================================ */
    {
      id: 'technique-6-non-retryable-errors',
      title: '6. Non-Retryable Error Types',
      slides: [
        {
          id: 14,
          title: '6. Non-Retryable Error Types — Overview',
          icon: { name: 'duo-ban' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="flipCard" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Are Non-Retryable Errors?</h4>
                  <p style={{ fontSize: '0.95rem' }}>Error types you <strong>explicitly exclude</strong> from retry. When an activity throws one of these, Temporal skips all remaining retries and immediately fails the activity.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.35}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Error Classification Decision Tree"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["🔴 Error"] --> B{"Permanent?"}
    B -->|"Yes"| C["🚫 Non-Retryable"]
    B -->|"No"| D["🔄 Retryable"]
    C --> E["ValidationError\nAuthError\nNotFoundError"]
    D --> F["503 Timeout\n429 Rate-Limit\nNetwork Blip"]
    style A fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style F fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Common Non-Retryable Types</h4>
                  <GSAPStaggerList stagger={0.1} duration={0.6}>
                    <div style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                      <strong>ValidationError</strong> — bad input will never become good by retrying
                    </div>
                    <div style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                      <strong>AuthenticationError</strong> — expired/invalid credentials won't self-heal
                    </div>
                    <div style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                      <strong>NotFoundError</strong> — the resource genuinely doesn't exist
                    </div>
                    <div style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                      <strong>BusinessRuleViolation</strong> — domain-level rejection (insufficient funds, etc.)
                    </div>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.7}>
                <p style={{ fontSize: '0.95rem' }}><strong>How:</strong> Set <code>NonRetryableErrorTypes</code> in RetryPolicy or use <code>ApplicationError</code> with <code>nonRetryable: true</code>.</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 6. Non-Retryable Error Types — Overview
[conversational] Strategy #6 — **Non-Retryable Error Types**. This is about knowing when to *stop* retrying.
#### 🚫 What Are Non-Retryable Errors?
[lecture] Non-retryable errors are error types you **explicitly exclude** from retry. When an activity throws one of these, Temporal skips all remaining retry attempts and immediately fails the activity. No more waiting, no more backoff — it's done.
[storytelling] Think of it like a doctor's triage. If a patient has a broken arm, you treat it and they recover — that's a **transient** error. But if someone's presenting with an allergy to a medication, re-administering the medication won't fix it — that's a **permanent** error. You need a different treatment entirely.
#### 📚 Common Non-Retryable Types
**ValidationError** — bad input will never become good by retrying. If someone sends an invalid email address, retrying the API call a thousand times won't make it valid.
**AuthenticationError** — expired or invalid credentials won't self-heal. The token needs to be refreshed by the client, not by retrying the same request.
**NotFoundError** — the resource genuinely doesn't exist. Maybe the user was deleted between steps. Retrying won't create the user.
**BusinessRuleViolation** — domain-level rejection like insufficient funds or exceeding a rate limit. Although, be careful — **rate limiting (HTTP 429)** is usually *transient*, not permanent.
#### ⚙️ How to Set It
You have two options: set **NonRetryableErrorTypes** in the RetryPolicy declaratively, or throw an **ApplicationError** with \`nonRetryable: true\` from your activity code imperatively. You can combine both approaches.
[energetic] Let's look at the best practices for classifying errors.`,
        },
        {
          id: 15,
          title: '6. Non-Retryable Errors — Config & Best Practices',
          icon: { name: 'duo-shield-xmark' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Configuration Approaches</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Declarative:</strong> List error type names in <code>NonRetryableErrorTypes</code></li>
                    <li><strong>Imperative:</strong> Throw <code>ApplicationError(msg, type, {`{ nonRetryable: true }`})</code> from activity code</li>
                    <li>Combine both — declarative as default, imperative for edge cases</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.35}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="HTTP Status → Retry Decision"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["🌐 HTTP\nResponse"] --> B{"Status\nCode?"}
    B -->|"4xx"| C["🚫 Non-Retryable\n400 401 403 404"]
    B -->|"429"| D["⚠️ Retryable!\nRate-Limited"]
    B -->|"5xx"| E["🔄 Retryable\n500 502 503"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style D fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Best Practices</h4>
                  <GSAPStaggerList stagger={0.12} duration={0.6}>
                    <div style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                      ✅ Map HTTP 4xx → non-retryable, 5xx → retryable
                    </div>
                    <div style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                      ✅ Log non-retryable errors with full context for debugging
                    </div>
                    <div style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                      ❌ Don't mark <strong>rate-limit</strong> (429) as non-retryable — it's transient
                    </div>
                    <div style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                      ❌ Don't mark <strong>timeout</strong> errors as non-retryable — they may succeed on retry
                    </div>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 6. Non-Retryable Errors — Config & Best Practices
[conversational] Now let's talk about how to classify errors correctly and avoid common mistakes.
#### ⚙️ Configuration Approaches
[lecture] You have two approaches and the recommendation is to **combine both**. The **declarative** approach is listing error type names in the RetryPolicy's NonRetryableErrorTypes field. Good for known, stable error classes. The **imperative** approach is throwing an ApplicationError from your activity code with the \`nonRetryable: true\` flag. Good for edge cases where you decide at runtime.
#### ✅ Best Practices
[confidently] A solid rule of thumb is: map **HTTP 4xx responses to non-retryable** and **5xx responses to retryable**. A 400 Bad Request means the input is broken — retrying won't fix it. A 503 Service Unavailable is transient — retrying probably will.
Always **log non-retryable errors with full context** for debugging. When an activity gives up without retrying, you want rich information: the request payload, the error code, a correlation ID. Otherwise you're flying blind.
#### ❌ Common Mistakes
[cautiously] Don't mark **rate-limit errors (HTTP 429)** as non-retryable. They're transient — the service is telling you "slow down and try again later." That's exactly what backoff is for.
Don't mark **timeout errors** as non-retryable either. A timeout might have been caused by a momentary network partition. The next attempt might succeed instantly on a different path.
[determined] The general principle: if there's **any chance** the same request could succeed on retry, keep it retryable. Only exclude errors that are **deterministically permanent** — bad input, missing resources, auth failures.
[energetic] Next up — Strategy #7: **Dead-Letter Patterns**. What happens when retries are exhausted and we still can't recover?`,
        },
      ],
    },

    /* ================================================================
       GROUP 8 — Dead-Letter Patterns
       ================================================================ */
    {
      id: 'technique-7-dead-letter',
      title: '7. Dead-Letter Patterns',
      slides: [
        {
          id: 16,
          title: '7. Dead-Letter Patterns — Overview',
          icon: { name: 'duo-inbox' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is a Dead-Letter Pattern?</h4>
                  <p style={{ fontSize: '0.95rem' }}>When a workflow or activity <strong>permanently fails</strong> after exhausting retries, route the failed payload to a <strong>dead-letter queue (DLQ)</strong> for manual inspection, replay, or alerting — never silently drop it.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Dead-Letter Flow"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["Activity<br/>Fails"] --> B{"Retries<br/>Exhausted?"}
    B -->|"No"| C["🔄 Retry"]
    C --> A
    B -->|"Yes"| D["📥 Dead-Letter<br/>Queue"]
    D --> E["🔔 Alert<br/>Ops Team"]
    D --> F["🔍 Manual<br/>Inspection"]
    F --> G["🔄 Replay<br/>or Fix"]
    style A fill:#5c1a1a,color:#fca5a5,stroke:#aaa,stroke-width:1.5px
    style B fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style D fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style G fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Implementation in Temporal</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Catch the permanent failure in the <strong>workflow</strong> (not the activity)</li>
                    <li>Start a <strong>DLQ workflow</strong> or side-effect to persist the failed payload</li>
                    <li>Use Temporal <strong>Visibility queries</strong> to find and reprocess DLQ items</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.55}>
                <p style={{ fontSize: '0.95rem' }}><strong>Best for:</strong> Payment processing, event ingestion, any pipeline where losing data is unacceptable.</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 7. Dead-Letter Patterns — Overview
[conversational] Strategy #7 — **Dead-Letter Patterns**. This is your safety net for when everything else fails.
#### 📥 What Is a Dead-Letter Pattern?
[lecture] A Dead-Letter Queue 👉 'ded-LET-er kyoo' — or DLQ 👉 'dee-ell-KYOO' — is a holding pen for messages or workflows that have **permanently failed** after exhausting all retries. Instead of silently dropping the failed work, you route it to a separate queue for manual inspection, alerting, and eventual reprocessing.
[storytelling] Think of it like the post office's dead-letter office. When a package can't be delivered *and* can't be returned to sender, it goes to a special facility where someone opens it, figures out what went wrong, and decides what to do. Your DLQ is that facility.
#### 🛠️ Implementation in Temporal
[confidently] Temporal doesn't have a built-in DLQ feature, but the pattern is straightforward to implement. In your **workflow** code — not the activity — catch the permanent failure. Then start a **DLQ workflow** or call a side-effect activity that persists the failed payload, the error details, and any metadata to a database or message queue.
You can then use Temporal's **Visibility queries** with custom search attributes to find and filter DLQ items. Set a search attribute like \`status = 'dlq'\` and build a simple admin UI to reprocess items.
#### 🎯 Best For
**Payment processing** where losing a failed charge means lost revenue. **Event ingestion pipelines** where dropping an event means missing data. Any pipeline where losing data is simply unacceptable.
[energetic] Let's look at the pros and cons of building a DLQ.`,
        },
        {
          id: 17,
          title: '7. Dead-Letter — Pros & Cons',
          icon: { name: 'duo-box-archive' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="DLQ Lifecycle: Fail → Quarantine → Replay"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["🔴 Retries\nExhausted"] --> B["📥 DLQ\nWorkflow"]
    B --> C["🔔 Alert\nOps Team"]
    B --> D["🔍 Inspect\n& Fix Bug"]
    D --> E["🔄 Replay\nWorkflow"]
    E --> F["✅ Success"]
    style A fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style B fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e0c0ff,stroke:#aaaaaa,stroke-width:1.5px
    style E fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Zero data loss — every failed item is preserved and recoverable</li>
                    <li>Decouples failure handling from the main workflow logic</li>
                    <li>Temporal Visibility API makes DLQ items searchable by custom search attributes</li>
                    <li>Replay-friendly — fix the bug, replay the workflow with same input</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Adds infrastructure — a DLQ workflow, alerting, and a reprocessing pipeline</li>
                    <li>DLQ items can pile up without proper monitoring — <strong>alert on queue depth</strong></li>
                    <li>Replay may cause side-effects if activities aren't idempotent</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.6}>
                <div style={{ padding: '0.5rem', background: 'rgba(139,92,246,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  🏗️ <strong>Architecture:</strong> Use a dedicated <code>dlq-handler</code> task queue with its own workers and lower priority.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 7. Dead-Letter — Pros & Cons
[conversational] Let's weigh the pros and cons of the dead-letter pattern.
#### ✅ The Good Stuff
[pleased] The biggest win is **zero data loss**. Every failed item is preserved and recoverable — no silent dropping, no lost revenue, no missing events. That alone makes DLQ worth the investment for any critical pipeline.
It **decouples failure handling** from your main workflow logic. Your happy-path code stays clean; the DLQ workflow handles the messy edge cases separately. Clean separation of concerns.
Temporal's Visibility API makes DLQ items **searchable** by custom search attributes — you can query by error type, timestamp, customer ID, whatever you need. And because Temporal supports **workflow replay**, you can fix the bug that caused the failure and replay the DLQ workflow with the exact same input. Beautiful.
#### ❌ The Pain Points
[serious] DLQ adds **infrastructure overhead**. You need a DLQ workflow, an alerting pipeline, and a reprocessing mechanism. That's real engineering time.
[sighing] Without proper monitoring, DLQ items **pile up silently**. You *must* alert on queue depth — if 500 items are sitting in the DLQ and nobody notices for a week, that's a business problem.
Replay can cause **side effects** if your activities aren't idempotent. If the original activity charged a credit card and the replay charges it again, you've double-charged. That's why Strategy #10 — Idempotency Keys — is essential.
#### 🏗️ Architecture Tip
[determined] Use a dedicated \`dlq-handler\` task queue with its own workers running at lower priority. That way your main workflow workers aren't impacted by DLQ reprocessing.
[energetic] Next — Strategy #8: **Failure Converters**. How Temporal serialises errors across the wire.`,
        },
      ],
    },

    /* ================================================================
       GROUP 9 — Failure Converters
       ================================================================ */
    {
      id: 'technique-8-failure-converters',
      title: '8. Failure Converters',
      slides: [
        {
          id: 18,
          title: '8. Failure Converters — Overview',
          icon: { name: 'duo-code-branch' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Are Failure Converters?</h4>
                  <p style={{ fontSize: '0.95rem' }}>Pluggable components that control how <strong>errors are serialised</strong> between workers and the Temporal server. They determine what error information is stored in the event history and how it's reconstructed on the other side.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Failure Converter Pipeline"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["🔴 Error<br/>in Activity"] --> B["FailureConverter<br/>.errorToFailure()"]
    B --> C["📦 Serialised<br/>Failure Proto"]
    C --> D["🗄️ Event<br/>History"]
    D --> E["FailureConverter<br/>.failureToError()"]
    E --> F["🔴 Typed Error<br/>in Workflow"]
    style A fill:#5c1a1a,color:#fca5a5,stroke:#aaa,stroke-width:1.5px
    style B fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style C fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style E fill:#2d1b4e,color:#e9d5ff,stroke:#aaa,stroke-width:1.5px
    style F fill:#5c1a1a,color:#fca5a5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Use Cases</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Encrypt</strong> sensitive error details (PII, credentials in stack traces)</li>
                    <li><strong>Enrich</strong> errors with metadata (trace-id, region, deployment version)</li>
                    <li>Map <strong>cross-language</strong> error types (Go ↔ TypeScript polyglot workers)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.55}>
                <p style={{ fontSize: '0.95rem' }}><strong>SDK support:</strong> Configurable via <code>WorkerOptions.failureConverter</code> (TypeScript) or <code>worker.Options</code> (Go).</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 8. Failure Converters — Overview
[conversational] Strategy #8 — **Failure Converters**. This is an advanced but important topic for production Temporal deployments.
#### 🔄 What Are Failure Converters?
[lecture] Failure Converters are pluggable components that control how **errors are serialised** 👉 'SEER-ee-uh-lyzed' between workers and the Temporal server. When an activity throws an error, the failure converter transforms it into a protobuf 👉 'PROH-toh-buff' message that gets stored in the event history. On the other side, when the workflow reads the error, the converter reconstructs a typed error object.
[storytelling] Think of it like a translator at a diplomatic meeting. The speaker says something in French, the translator converts it to English for the listener, and vice versa. The failure converter is that translator for errors.
#### 🎯 Use Cases
[confidently] Three main use cases. First, **encryption** — prevent PII 👉 'pee-eye-EYE' or sensitive data from leaking into the event history. If an error message contains a customer's social security number in the stack trace, the failure converter can encrypt it before storage.
Second, **enrichment** — inject metadata like trace IDs, deployment version, or AWS region into every error for end-to-end observability.
Third, **cross-language mapping** — in a polyglot 👉 'PAHL-ee-glaht' system where Go workers and TypeScript workers coexist, the failure converter maps error types between languages so the workflow can handle errors uniformly.
#### ⚙️ SDK Support
Configurable via \`WorkerOptions.failureConverter\` in TypeScript or \`worker.Options\` in Go. You implement two methods: \`errorToFailure()\` and \`failureToError()\`.
[energetic] Let's look at the trade-offs.`,
        },
        {
          id: 19,
          title: '8. Failure Converters — Pros & Cons',
          icon: { name: 'duo-shield-halved' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Security — prevent PII or secrets from leaking into event history</li>
                    <li>Polyglot — smooth error handling across Go, TS, Java, Python services</li>
                    <li>Observability — inject trace-ids for end-to-end correlation</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Failure Converter Deployment Risk"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["📦 Deploy New\nConverter v2"] --> B["Worker A\n✅ v2"]
    A --> C["Worker B\n✅ v2"]
    A --> D["Worker C\n❌ v1 (stale)"]
    D --> E["💥 Deserialization\nError!"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style E fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Custom converters add complexity — must be deployed to <strong>all workers</strong></li>
                    <li>Encryption makes <strong>Temporal Web UI</strong> error details unreadable without a decryptor</li>
                    <li>Bugs in the converter itself can mask real errors</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <div style={{ padding: '0.5rem', background: 'rgba(139,92,246,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  🔐 <strong>Security tip:</strong> At minimum, strip stack traces containing file paths in production — they reveal internal architecture.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 8. Failure Converters — Pros & Cons
[conversational] Now the trade-offs for failure converters.
#### ✅ The Good Stuff
[pleased] **Security** is the number one win. In production, you never want PII, API keys, or internal file paths showing up in the Temporal event history — which is visible through the Web UI and potentially accessible to multiple teams. A failure converter strips or encrypts that sensitive data automatically.
**Polyglot support** is another big win. If you have Go workers throwing gRPC status errors and TypeScript workers expecting \`ApplicationError\` objects, the failure converter handles the mapping seamlessly. Your workflow code just sees clean, typed errors regardless of which language the activity was written in.
And **observability** — injecting trace IDs into every error means you can correlate a failed activity with the exact distributed trace in Jaeger 👉 'YAY-ger' or Datadog. End-to-end debugging becomes much easier.
#### ❌ The Pain Points
[cautiously] Custom converters add **complexity**. They must be deployed to **all workers** in your fleet — if one worker has the old converter and another has the new one, you get deserialization errors that are very hard to debug.
If you encrypt error details, the **Temporal Web UI** shows gibberish for error messages. You'd need a separate decryption tool for operators to debug issues. That's a real UX cost.
[gasping] And the scariest risk: a **bug in the converter itself** can mask real errors. If your \`errorToFailure()\` method throws an exception, the original error gets swallowed and replaced with a converter error. Always test converters thoroughly.
#### 🔐 Security Tip
[determined] At minimum, strip stack traces containing file paths in production. They reveal your internal architecture and directory structure to anyone with access to the event history.
[energetic] Now let's shift to **recovery strategies** — Strategy #9: **Compensation**.`,
        },
      ],
    },

    /* ================================================================
       GROUP 10 — Compensation
       ================================================================ */
    {
      id: 'technique-9-compensation',
      title: '9. Compensation',
      slides: [
        {
          id: 20,
          title: '9. Compensation — Overview',
          icon: { name: 'duo-rotate' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Is Compensation?</h4>
                  <p style={{ fontSize: '0.95rem' }}>A Saga-style <strong>rollback strategy</strong> where every forward action has a corresponding <strong>undo action</strong>. If step N fails, compensations for steps 1…(N-1) run in reverse order to restore consistency.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Compensation Stack"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["💳 Charge ✅"] -->|"push refund"| S["📚 Compensation Stack"]
    B["📦 Reserve ✅"] -->|"push unreserve"| S
    C["🚚 Ship ❌"] -->|"error!"| U["↩️ Unwind LIFO"]
    S --> U
    U --> U1["unreserve()"]
    U1 --> U2["refund()"]
    style A fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style B fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style C fill:#5c1a1a,color:#fca5a5,stroke:#aaa,stroke-width:1.5px
    style S fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style U fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style U1 fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style U2 fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Implementation</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Maintain a local <code>compensations[]</code> array in the workflow</li>
                    <li>After each activity success, <code>push()</code> its undo function</li>
                    <li>In the <code>catch</code>, iterate in reverse and execute each compensation</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.55}>
                <p style={{ fontSize: '0.95rem' }}><strong>Critical rule:</strong> Compensations must be <strong>idempotent</strong> — Temporal may retry them on worker failure.</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 9. Compensation — Overview
[excited] Strategy #9 — **Compensation**. This is the Saga 👉 'SAH-guh' pattern in action — your rollback safety net.
#### ↩️ What Is Compensation?
[lecture] Compensation is a Saga-style rollback strategy where every forward action has a corresponding **undo action**. If step N fails, compensations for steps 1 through N minus 1 run in **reverse order** to restore consistency. No distributed locks, no two-phase commit — each service stays autonomous.
[storytelling] Think of it like packing for a trip. You book the flight, then the hotel, then the rental car. If the rental car booking fails, you cancel the hotel, then cancel the flight — unwinding in reverse order. Each cancellation is a compensation.
#### 🛠️ Implementation
[confidently] In Temporal, you maintain a local \`compensations[]\` array inside your workflow function. After each successful activity — say, charging a credit card — you \`push()\` its undo function (refund) onto the array. In the \`catch\` block, you iterate the array in reverse and execute each compensation as an activity.

\`\`\`mermaid
flowchart TB
    A["Charge ✅"] -->|"push refund"| S["Compensation Stack"]
    B["Reserve ✅"] -->|"push unreserve"| S
    C["Ship ❌"] -->|"error!"| U["Unwind LIFO"]
    S --> U
    U --> U1["unreserve()"]
    U1 --> U2["refund()"]
\`\`\`

The diagram on screen shows this beautifully: Charge, Reserve, Ship. Ship fails, so we unwind — unreserve, then refund — in LIFO 👉 'LY-foh' order.
#### ⚠️ Critical Rule
[determined] Compensations must be **idempotent**. Temporal may retry them if the worker crashes mid-rollback. A refund compensation that isn't idempotent could issue two refunds for one charge.
[energetic] Let's look at the pros, cons, and a real-world pattern.`,
        },
        {
          id: 21,
          title: '9. Compensation — Pros & Cons',
          icon: { name: 'duo-arrows-rotate' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Saga Forward & Rollback"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["💳 Charge"] -->|"✅ push"| B["📦 Reserve"]
    B -->|"✅ push"| C{"🚚 Fulfill"}
    C -->|"❌ Fails"| D["↩️ Unreserve"]
    D --> E["↩️ Refund"]
    C -->|"✅ OK"| F["🎉 Done"]
    style A fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style E fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>No distributed locks or 2PC — each service stays <strong>autonomous</strong></li>
                    <li>Each compensation is a retryable activity with its own retry policy</li>
                    <li>Full visibility — every forward and reverse step recorded in event history</li>
                    <li>Works across languages — Go workflow compensating a Python activity</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Design overhead — every forward action needs a matching undo</li>
                    <li>Eventual consistency — system is temporarily inconsistent during rollback</li>
                    <li>Compensation failures need their own error handling (nested try/catch)</li>
                    <li>Not suitable for operations that are <strong>truly irreversible</strong> (e.g. sent emails)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div style={{ padding: '0.5rem', background: 'rgba(249,115,22,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  🏦 <strong>Finance pattern:</strong> Charge → Reserve → Fulfill. If Fulfill fails: Unreserve → Refund. Each compensation has its own 3-attempt retry.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 9. Compensation — Pros & Cons
[conversational] Now let's look at when compensation is the right choice and when it falls short.
#### ✅ The Good Stuff
[pleased] The biggest win is **no distributed locks or two-phase commit** 👉 'too-fayz kuh-MIT'. Each microservice stays autonomous. The workflow orchestrates the forward and reverse steps, but individual services don't need to know about each other.
Each compensation is a **retryable activity** with its own retry policy. So if the refund API is temporarily down, Temporal retries the refund with backoff — the compensation itself is resilient.
Full **visibility** — every forward and reverse step is recorded in the event history. When something goes wrong, you can see exactly which compensations ran and which didn't. No mystery state.
And it works **across languages** — a Go workflow can compensate a Python activity. Temporal doesn't care what language the activity is written in.
#### ❌ The Pain Points
[cautiously] Design overhead is real. Every forward action needs a **matching undo**, and some operations don't have clean inverses. What's the undo for sending an email? You can't "un-send" it. For truly irreversible operations, you need a different strategy — perhaps a confirmation step before the irreversible action.
**Eventual consistency** — during rollback, the system is in an inconsistent state. The credit card is charged but the inventory isn't reserved. That window is usually short, but it exists.
Compensation failures need their own error handling. If the refund activity fails permanently, you need a **nested try/catch** in your rollback logic. It's try/catch all the way down.
#### 🏦 Finance Pattern
[confidently] The classic pattern: Charge, Reserve, Fulfill. If Fulfill fails: Unreserve, then Refund. Each compensation gets its own 3-attempt retry policy. Battle-tested in e-commerce.
[energetic] Next — Strategy #10: **Idempotency Keys**. The key to making retries safe.`,
        },
      ],
    },

    /* ================================================================
       GROUP 11 — Idempotency Keys
       ================================================================ */
    {
      id: 'technique-10-idempotency',
      title: '10. Idempotency Keys',
      slides: [
        {
          id: 22,
          title: '10. Idempotency Keys — Overview',
          icon: { name: 'duo-key' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="flipCard" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Are Idempotency Keys?</h4>
                  <p style={{ fontSize: '0.95rem' }}>A unique token (UUID, workflow-id + attempt, etc.) passed to external services so that <strong>retries produce the same result</strong> as the first call. Essential because Temporal's at-least-once delivery means activities <em>can and will</em> run more than once.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Idempotency Key Flow"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["Activity<br/>Attempt 1"] -->|"key=abc-123"| B["💳 Payment<br/>Gateway"]
    B --> C["✅ Charged $50"]
    D["Activity<br/>Attempt 2 (retry)"] -->|"key=abc-123"| B
    B --> E["✅ Already<br/>Processed"]
    style A fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Key Strategies</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Workflow ID</strong> — use as natural idempotency key for start requests</li>
                    <li><strong>Workflow ID + Activity Type</strong> — unique per activity within a workflow</li>
                    <li><strong>Deterministic UUID</strong> — <code>uuid5(workflowId + activityName + attempt)</code></li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.55}>
                <p style={{ fontSize: '0.95rem' }}><strong>Rule:</strong> If the external system doesn't support idempotency keys, <em>you</em> must build dedup logic (e.g. check before insert).</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 10. Idempotency Keys — Overview
[excited] Strategy #10 — **Idempotency Keys** 👉 'eye-dem-POH-ten-see KEEZ'. This is what makes aggressive retries **safe**.
#### 🔑 What Are Idempotency Keys?
[lecture] An idempotency key is a unique token — like a UUID 👉 'yoo-yoo-EYE-dee' or a compound identifier — that you pass to external services so that **retrying produces the same result** as the first call. The external service sees the key, checks if it's already processed, and returns the original result instead of processing again.
[storytelling] Think of it like pressing the elevator button. You press it once, the elevator starts coming. [chuckling] You press it again — nothing changes, the elevator was already on its way. The button is idempotent. Your API calls need to behave the same way.
This is essential because Temporal's delivery guarantee is **at-least-once** 👉 'at LEEST wunce'. Activities *can and will* run more than once due to retries, worker crashes, or timeout-triggered re-execution.
#### 🛠️ Key Strategies
[confidently] Three approaches. **Workflow ID** — Temporal already deduplicates workflow *starts* by workflow ID, so it's a natural idempotency key for start requests.
**Workflow ID + Activity Type** — unique within a workflow. Something like \`order-123-charge-card\`. Guarantees that even if the charge activity retries, the payment gateway sees the same key.
**Deterministic UUID** — generate a UUID v5 from \`workflowId + activityName + attempt\`. Fully deterministic, fully unique.
#### ⚠️ Fallback
[cautiously] If the external system doesn't support idempotency keys natively, *you* must build dedup logic — for example, check-before-insert in a database. It's more work, but it's non-negotiable for financial operations.
[energetic] Let's look at the trade-offs.`,
        },
        {
          id: 23,
          title: '10. Idempotency — Pros & Cons',
          icon: { name: 'duo-fingerprint' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Idempotency Key Dedup Flow"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["🔄 Retry<br/>Attempt 2"] -->|"key=abc-123"| B{"Already<br/>Processed?"}
    B -->|"No"| C["✅ Execute &<br/>Store Key"]
    B -->|"Yes"| D["✅ Return<br/>Cached Result"]
    C --> E["💾 Save<br/>Key + TTL"]
    style A fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style E fill:#2d1b4e,color:#e0c0ff,stroke:#aaaaaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Prevents <strong>double-charging</strong>, duplicate records, repeated notifications</li>
                    <li>Makes aggressive retry policies safe — retry all you want</li>
                    <li>WorkflowId itself is a built-in dedup key for workflow starts</li>
                    <li>Compatible with most payment gateways (Stripe, Adyen, PayPal)</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Not free — external services must <strong>support</strong> idempotency keys</li>
                    <li>Key storage has TTL — stale keys may allow duplicates after expiry</li>
                    <li>Requires careful key design to avoid collisions or reuse</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div style={{ padding: '0.5rem', background: 'rgba(16,185,129,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  💰 <strong>Payment pattern:</strong> <code>{`idempotencyKey = \`\${workflowId}-charge-\${orderId}\``}</code> → same key on every retry, gateway deduplicates.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 10. Idempotency — Pros & Cons
[conversational] Now the pros and cons of idempotency keys.
#### ✅ The Good Stuff
[pleased] The primary benefit: **no double-charging**, no duplicate records, no repeated notifications. If your payment activity retries 3 times, the customer is still only charged once. That's the whole point.
It makes **aggressive retry policies safe**. You can set MaximumAttempts to 10 with fast backoff, and the worst that happens is the external service says "already processed" 9 times. No harm done.
Temporal's **WorkflowId** is a built-in dedup key for workflow starts. If you try to start a workflow with the same ID while one is already running, the server rejects it. Free idempotency at the workflow level.
And most major payment gateways — **Stripe**, **Adyen** 👉 'AH-dee-en', **PayPal** — support idempotency keys natively. You just pass the key in the API request header.
#### ❌ The Pain Points
[anxious] Not every external service supports idempotency keys. For those that don't, you need to build your own dedup logic — a database check before every write, an in-memory cache, or a Redis 👉 'RED-iss' set.
Idempotency keys have **TTL** 👉 'tee-tee-ELL' — time-to-live. Stripe, for example, expires idempotency keys after 24 hours. If a retry happens after the key expires, the request processes again. For long-running workflows, this can be a gotcha.
And careful key design matters. Keys must be **unique enough** to avoid collisions but **deterministic enough** to be the same across retries. Random UUIDs per attempt won't work — you need the same key on every attempt.
#### 💰 Payment Pattern
The formula: \`idempotencyKey = workflowId + "-charge-" + orderId\`. Same key on every retry, the gateway deduplicates.
[energetic] One more strategy to go — Strategy #11: **Cancellation Scopes**.`,
        },
      ],
    },

    /* ================================================================
       GROUP 12 — Cancellation Scopes
       ================================================================ */
    {
      id: 'technique-11-cancellation-scopes',
      title: '11. Cancellation Scopes',
      slides: [
        {
          id: 24,
          title: '11. Cancellation Scopes — Overview',
          icon: { name: 'duo-shield-check' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>What Are Cancellation Scopes?</h4>
                  <p style={{ fontSize: '0.95rem' }}>Structured regions in a workflow where <strong>cancellation is handled gracefully</strong>. When a workflow is cancelled, activities inside a cancellation scope can run cleanup logic (compensations, resource release) before termination.</p>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Cancellation Scope Structure"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["Workflow<br/>Running"] -->|"Cancel Signal"| B["CancellationScope"]
    B --> C["🧹 Cleanup<br/>Activity"]
    B --> D["💾 Save<br/>State"]
    B --> E["📧 Notify<br/>User"]
    C --> F["✅ Graceful<br/>Shutdown"]
    D --> F
    E --> F
    style A fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#fff,stroke:#aaa,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style D fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>SDK Support</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>TypeScript:</strong> <code>CancellationScope.nonCancellable()</code>, <code>CancellationScope.cancellable()</code></li>
                    <li><strong>Go:</strong> <code>workflow.NewDisconnectedCtx(ctx)</code> for cleanup activities</li>
                    <li><strong>Java:</strong> <code>CancellationScope.run()</code></li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.55}>
                <p style={{ fontSize: '0.95rem' }}><strong>Key insight:</strong> Without a cancellation scope, cleanup activities are cancelled too — defeating the purpose.</p>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 11. Cancellation Scopes — Overview
[excited] Strategy #11 — the final one — **Cancellation Scopes**. This is about shutting down gracefully instead of pulling the plug.
#### 🛡️ What Are Cancellation Scopes?
[lecture] Cancellation Scopes are structured regions in your workflow code where **cancellation is handled gracefully**. When a workflow receives a cancel signal, activities inside a cancellation scope can run cleanup logic — compensations, resource release, user notifications — before the workflow actually terminates.
[storytelling] Think of it like an airplane landing. The pilot doesn't just cut the engines mid-flight. There's a whole shutdown sequence — lower the landing gear, align with the runway, reduce speed. A cancellation scope is your workflow's landing sequence. It ensures everything is cleaned up properly before final shutdown.
#### ⚙️ SDK Support
[confidently] In **TypeScript**, you use \`CancellationScope.nonCancellable()\` to wrap cleanup activities that must complete even during cancellation. Use \`CancellationScope.cancellable()\` for activities that should stop when cancelled.
In **Go**, you use \`workflow.NewDisconnectedCtx(ctx)\` to create a context that isn't cancelled when the parent is. Any activity executed with this context runs to completion.
In **Java**, there's \`CancellationScope.run()\`.
#### 💡 Key Insight
[determined] Without a cancellation scope, cleanup activities get cancelled too — defeating the purpose. If your workflow is cancelled and you try to run a "release lock" activity, that activity gets cancelled as well. Wrapping it in a non-cancellable scope ensures it actually executes.
[energetic] Let's look at the trade-offs and a common pattern.`,
        },
        {
          id: 25,
          title: '11. Cancellation Scopes — Pros & Cons',
          icon: { name: 'duo-broom' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Nested Cancellation Scopes"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["🚫 Cancel Signal"] --> B["Cancellable<br/>Scope"]
    B --> C["❌ Activity A<br/>Cancelled"]
    B --> D["🛡️ NonCancellable<br/>Scope"]
    D --> E["✅ Cleanup<br/>Completes"]
    D --> F["✅ Lock<br/>Released"]
    style A fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style D fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>✅ Pros</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Ensures resources are <strong>always released</strong> — DB connections, temp files, locks</li>
                    <li>Users/downstream systems get <strong>notified</strong> on cancellation, not left hanging</li>
                    <li>Composition — nest cancellation scopes for fine-grained control</li>
                    <li>Works with heartbeat — activities detect cancellation via heartbeat response</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>❌ Cons</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Cleanup activities still need their own timeout — set a generous one</li>
                    <li>Complex nested scopes can be hard to reason about</li>
                    <li>Cleanup failures need separate handling — avoid infinite cleanup loops</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.6}>
                <div style={{ padding: '0.5rem', background: 'rgba(249,115,22,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  🧹 <strong>Pattern:</strong> Wrap Saga compensations in <code>CancellationScope.nonCancellable()</code> — rollback must complete even if the workflow is cancelled.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### 11. Cancellation Scopes — Pros & Cons
[conversational] Let's look at the trade-offs for cancellation scopes.
#### ✅ The Good Stuff
[pleased] First, resource **safety**. Database connections, temporary files, distributed locks — cancellation scopes ensure these are **always released**, even when the workflow is cancelled unexpectedly. No resource leaks.
Second, **user experience**. When a workflow is cancelled, downstream systems and users get **notified** instead of being left hanging. "Your order has been cancelled" is much better than silence.
Third, **composition**. You can **nest** cancellation scopes for fine-grained control. An outer scope might be cancellable, while an inner scope wrapping critical cleanup is non-cancellable. It gives you precise control over what stops and what must finish.
Fourth, cancellation scopes **integrate with heartbeats**. Long-running activities detect cancellation via the heartbeat response, giving them a chance to do partial cleanup before the scope handles the rest.
#### ❌ The Pain Points
[cautiously] Cleanup activities still need their **own timeout**. If your cleanup activity hangs, you're stuck again. Set a generous but finite timeout on cleanup activities — say 30 seconds.
Complex **nested scopes** can be hard to reason about. Three levels of nesting with different cancellation behaviours becomes confusing fast. Keep it simple — usually one non-cancellable scope for cleanup is enough.
And cleanup **failures** need separate handling. If your "release lock" cleanup activity fails, what do you do? You need a fallback, but be careful not to create an infinite cleanup loop.
#### 🧹 Pattern
[confidently] Wrap your Saga compensations in \`CancellationScope.nonCancellable()\`. Rollback must complete even if the workflow is cancelled — you can't leave the system in a half-rolled-back state.
[energetic] That's all 11 strategies! Let's look at the cheat sheet to compare them all side by side.`,
        },
      ],
    },

    /* ================================================================
       GROUP 13 — Summary
       ================================================================ */
    {
      id: 'summary',
      title: 'Summary',
      slides: [
        /* ---------- Cheat Sheet ---------- */
        {
          id: 26,
          title: 'Cheat Sheet — All 11 Strategies Compared',
          icon: { name: 'duo-table-list' },
          content: (
            <div style={{ fontSize: '1.05rem', lineHeight: '1.6', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Strategy Selection Flowchart"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["🆕 New<br/>Activity"] --> B{"External<br/>Service?"}
    B -->|"Yes"| C["🔑 Idempotency<br/>Key"]
    B -->|"No"| D["Skip"]
    A --> E{"> 30s<br/>Runtime?"}
    E -->|"Yes"| F["❤️ Heartbeat"]
    E -->|"No"| G["Skip"]
    A --> H{"Multi-Step<br/>Txn?"}
    H -->|"Yes"| I["↩️ Compensation"]
    H -->|"No"| J["Skip"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style E fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style G fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style H fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style I fill:#2d1b4e,color:#e0c0ff,stroke:#aaaaaa,stroke-width:1.5px
    style J fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Decision Table</h4>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.3}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem', lineHeight: '1.4' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid #555' }}>
                      <th style={{ padding: '5px 8px', textAlign: 'left' }}>Strategy</th>
                      <th style={{ padding: '5px 8px', textAlign: 'left' }}>Complexity</th>
                      <th style={{ padding: '5px 8px', textAlign: 'left' }}>History Cost</th>
                      <th style={{ padding: '5px 8px', textAlign: 'left' }}>Best Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}><strong>Retry Policies</strong></td>
                      <td style={{ padding: '4px 8px' }}>Low</td>
                      <td style={{ padding: '4px 8px' }}>Medium</td>
                      <td style={{ padding: '4px 8px' }}>All activities — baseline resilience</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}><strong>Backoff Tuning</strong></td>
                      <td style={{ padding: '4px 8px' }}>Low</td>
                      <td style={{ padding: '4px 8px' }}>Low</td>
                      <td style={{ padding: '4px 8px' }}>Rate-limited APIs, external services</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}><strong>Start-to-Close</strong></td>
                      <td style={{ padding: '4px 8px' }}>Low</td>
                      <td style={{ padding: '4px 8px' }}>None</td>
                      <td style={{ padding: '4px 8px' }}>Bounding every activity attempt</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}><strong>Schedule-to-Start</strong></td>
                      <td style={{ padding: '4px 8px' }}>Low</td>
                      <td style={{ padding: '4px 8px' }}>None</td>
                      <td style={{ padding: '4px 8px' }}>Detecting worker/queue starvation</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}><strong>Heartbeat</strong></td>
                      <td style={{ padding: '4px 8px' }}>Medium</td>
                      <td style={{ padding: '4px 8px' }}>Low</td>
                      <td style={{ padding: '4px 8px' }}>Long-running activities, checkpointing</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}><strong>Non-Retryable Errors</strong></td>
                      <td style={{ padding: '4px 8px' }}>Low</td>
                      <td style={{ padding: '4px 8px' }}>None</td>
                      <td style={{ padding: '4px 8px' }}>Validation, auth, permanent failures</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}><strong>Dead-Letter</strong></td>
                      <td style={{ padding: '4px 8px' }}>Medium</td>
                      <td style={{ padding: '4px 8px' }}>Low</td>
                      <td style={{ padding: '4px 8px' }}>Payment, event ingestion pipelines</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}><strong>Failure Converters</strong></td>
                      <td style={{ padding: '4px 8px' }}>Medium</td>
                      <td style={{ padding: '4px 8px' }}>None</td>
                      <td style={{ padding: '4px 8px' }}>Security, polyglot, observability</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}><strong>Compensation</strong></td>
                      <td style={{ padding: '4px 8px' }}>High</td>
                      <td style={{ padding: '4px 8px' }}>Medium</td>
                      <td style={{ padding: '4px 8px' }}>Multi-step transactions, e-commerce</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #333' }}>
                      <td style={{ padding: '4px 8px' }}><strong>Idempotency</strong></td>
                      <td style={{ padding: '4px 8px' }}>Medium</td>
                      <td style={{ padding: '4px 8px' }}>None</td>
                      <td style={{ padding: '4px 8px' }}>Payments, external API mutations</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '4px 8px' }}><strong>Cancellation Scopes</strong></td>
                      <td style={{ padding: '4px 8px' }}>Medium</td>
                      <td style={{ padding: '4px 8px' }}>Low</td>
                      <td style={{ padding: '4px 8px' }}>Resource cleanup, graceful shutdown</td>
                    </tr>
                  </tbody>
                </table>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Cheat Sheet — All 11 Strategies Compared
[conversational] Here's the cheat sheet — all 11 strategies side by side for quick reference.
#### 📊 How to Read This Table
[lecture] The table shows four dimensions for each strategy. **Complexity** tells you how much engineering effort is needed — Low means it's a configuration change, Medium requires some code, High requires significant design work. **History Cost** indicates the impact on Temporal's event history size — retries grow history, timeouts don't.
The **Best Use Case** column is the quick decision guide. Scanning down this column tells you which strategy to reach for based on your situation.
#### 🎯 Key Observations
[confidently] Notice that the first six strategies — Retry Policies through Non-Retryable Errors — are all **Low complexity**. These are your **baseline** for every production deployment. There's no excuse not to have them configured.
The Medium-complexity strategies — Heartbeat, Dead-Letter, Failure Converters, Idempotency, Cancellation Scopes — require more effort but address specific problems that the basics can't solve.
**Compensation** is the only High-complexity strategy. It requires careful design — every forward action needs an undo — but it's essential for multi-step transactions where partial completion is unacceptable.
#### 📌 Decision Framework
[warmly] Start with the Low-complexity strategies for every activity. Add Heartbeat for anything over 30 seconds. Add Dead-Letter for anything that can't lose data. Add Idempotency for any external mutation. Add Compensation for multi-step transactions. Add Cancellation Scopes for graceful shutdown.
[energetic] Let's finish with the 5 key takeaways.`,
        },
        /* ---------- Key Takeaways ---------- */
        {
          id: 27,
          title: 'Key Takeaways',
          icon: { name: 'duo-trophy' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <h4>🎯 Top 5 Actionable Takeaways</h4>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.8}>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>1.</strong> Always set <strong>explicit RetryPolicy + timeouts</strong> on every activity — never rely on infinite-retry defaults.
                </div>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>2.</strong> Use <strong>Start-to-Close</strong> at 2–3× P99 latency, add <strong>Schedule-to-Start</strong> to catch dead worker pools, and instrument <strong>Heartbeat</strong> for anything over 30 seconds.
                </div>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>3.</strong> Mark validation &amp; auth errors as <strong>Non-Retryable</strong> — retrying them wastes time and hides bugs.
                </div>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>4.</strong> Make every activity <strong>idempotent</strong> — use workflow ID + activity name as idempotency key for external calls.
                </div>
                <div style={{ marginBottom: '0.8rem', fontSize: '0.95rem' }}>
                  <strong>5.</strong> Route permanent failures to a <strong>Dead-Letter Queue</strong> with alerting — never silently drop work.
                </div>
              </GSAPStaggerList>
              <GSAPAnimated animation="bounceIn" delay={0.9}>
                <div style={{ marginTop: '1rem', padding: '0.7rem', background: 'rgba(249,115,22,0.15)', borderRadius: '8px', fontSize: '0.95rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Production Audit Checklist"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart LR
    A["🔍 Audit"] --> B["⏱ Add<br/>Timeouts"]
    B --> C["🚫 Mark Non-<br/>Retryable"]
    C --> D["🔑 Add Idem.<br/>Keys"]
    D --> E["📥 Add<br/>DLQ"]
    E --> F["✅ Production<br/>Ready"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style C fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e0c0ff,stroke:#aaaaaa,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px`}
                    />
                  </div>
                  📚 <strong>Next step:</strong> Audit your existing Temporal workflows — add explicit timeouts, non-retryable error types, and idempotency keys to every activity.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: `### Key Takeaways
[warmly] Let's wrap up with the 5 most important things to remember from today's talk.
#### 🎯 Takeaway 1: Always Be Explicit
[determined] Never rely on Temporal's infinite-retry default. Always set an **explicit RetryPolicy** with MaximumAttempts and timeouts on every activity. The default is designed for convenience during development, not for production safety.
#### ⏱️ Takeaway 2: Layer Your Timeouts
[confidently] Use **Start-to-Close** at 2 to 3 times your P99 latency to catch hung activities. Add **Schedule-to-Start** to detect dead worker pools — this one is often forgotten but catches a critical failure mode. And instrument **Heartbeat** for anything that runs longer than 30 seconds.
#### 🚫 Takeaway 3: Stop Retrying Permanent Failures
[lecture] Mark validation errors, authentication errors, and domain-level rejections as **Non-Retryable**. Retrying them wastes time, burns attempts, and hides bugs. Use the simple heuristic: 4xx is permanent, 5xx is transient.
#### 🔑 Takeaway 4: Idempotency Is Non-Negotiable
[determined] Make every activity that calls an external service **idempotent**. Use the workflow ID plus the activity name as your idempotency key. This is the single most important thing you can do to make retries safe.
#### 📥 Takeaway 5: Never Drop Work
[confidently] Route permanent failures to a **Dead-Letter Queue** with alerting. Every failed item must be preserved and recoverable. Silent data loss is the worst kind of failure because nobody knows it happened.
#### 🚀 Next Steps
[inspiringly] Your action item: audit your existing Temporal workflows this week. Add explicit timeouts, non-retryable error types, and idempotency keys to every activity. Start with the most critical workflows first — payment processing and order fulfilment. Thank you for your attention — now go build resilient systems!`,
        },
      ],
    },
  ],
};
