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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
        },
      ],
    },
  ],
};
