import type { Deck } from './types';
import SvgIcon from '../lib/icons/SvgIcon';
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
import { MermaidPopover } from '../components/MermaidPopover';

const iconStyle = { marginRight: '0.5rem', verticalAlign: 'middle' };

export const aiAgentOrchestrationDeck: Deck = {
  id: 'ai-agent-orchestration-temporal',
  name: '9 Patterns for Orchestrating AI Agents with Temporal',
  description:
    'Durable tool-calling loops, human-in-the-loop, LLM retry with fallback, parallel agent fan-out, agent memory persistence',
  category: 'Agent',
  theme: 'night',
  kenBurns: true,
  cardStyle: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  backgroundImages: [
    'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1920&q=80',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80',
    'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1920&q=80',
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
          title: '9 Patterns for Orchestrating AI Agents with Temporal',
          content: (
            <div>
              <GSAPAnimated animation="rotateIn" duration={1.2}>
                <div style={{ fontSize: '1.5rem', color: '#0ea5e9' }}>
                  <SvgIcon iconName="duo-robot" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                  Durable AI Agent Orchestration with Temporal
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" duration={0.8} delay={0.3}>
                <div style={{ fontSize: '1.2rem', color: '#10b981', lineHeight: '2', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Deck Roadmap — 9 Patterns"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["🤖 AI Agent<br/>Orchestration"] --> B["Tool Loops"]
    A --> C["Human-in-Loop"]
    A --> D["Retry/Fallback"]
    A --> E["Fan-Out"]
    A --> F["Memory"]
    A --> G["Supervisor"]
    A --> H["Handoff"]
    A --> I["Streaming"]
    A --> J["Ensemble"]
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#5c1a1a,color:#fecaca,stroke:#aaa,stroke-width:1.5px
    style E fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style F fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style G fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style H fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style I fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style J fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <div>
                    <SvgIcon iconName="duo-users" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Audience:</strong> AI/ML engineers, platform teams, backend developers building agentic systems
                  </div>
                  <div>
                    <SvgIcon iconName="duo-list-check" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>What you'll get:</strong> 9 durable orchestration patterns — architecture, trade-offs, when to use each
                  </div>
                  <div>
                    <SvgIcon iconName="duo-circle-info" sizeName="xl" style={iconStyle} darkModeInvert={true} />
                    <strong>Note:</strong> Focus on production reliability, not toy demos
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
            <div style={{ fontSize: '1.2rem', lineHeight: '1.8', textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="AI Agent Orchestration Landscape"
                  diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
graph TB
    A["9 AI Agent<br/>Orchestration Patterns"] --> B["Core Loops<br/>1-3"]
    A --> C["Scaling &<br/>State 4-5"]
    A --> D["Multi-Agent<br/>6-7"]
    A --> E["Advanced<br/>8-9"]
    B --> B1["Durable<br/>Tool-Calling"]
    B --> B2["Human-in-<br/>the-Loop"]
    B --> B3["LLM Retry<br/>+ Fallback"]
    C --> C1["Parallel<br/>Fan-Out"]
    C --> C2["Memory<br/>Persistence"]
    D --> D1["Supervisor<br/>Agent"]
    D --> D2["Agent<br/>Handoff"]
    E --> E1["Streaming<br/>Token Relay"]
    E --> E2["Multi-Model<br/>Ensemble"]
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style B1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style B2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style B3 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style C1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style C2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style D1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style D2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style E1 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style E2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px`}
                />
              </div>
              <h4>Pattern Categories</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '1.1rem', marginTop: '14px' }}>
                <GSAPStaggerList stagger={0.08} duration={0.6}>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>1</span>
                    <strong>Durable Tool-Calling Loops</strong> — crash-proof ReAct cycles
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>2</span>
                    <strong>Human-in-the-Loop</strong> — pause for approval via Signals
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>3</span>
                    <strong>LLM Retry with Fallback</strong> — graceful model degradation
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>4</span>
                    <strong>Parallel Agent Fan-Out</strong> — concurrent sub-task execution
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>5</span>
                    <strong>Agent Memory Persistence</strong> — durable conversation state
                  </div>
                </GSAPStaggerList>
                <GSAPStaggerList stagger={0.08} duration={0.6}>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>6</span>
                    <strong>Supervisor Agent</strong> — top-level orchestrator pattern
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>7</span>
                    <strong>Agent Handoff / Routing</strong> — intent-based delegation
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>8</span>
                    <strong>Streaming Token Relay</strong> — real-time LLM output
                  </div>
                  <div style={{ marginBottom: '0.7rem' }}>
                    <span style={{ fontWeight: 'bold', color: '#42a5f5', marginRight: '0.5rem' }}>9</span>
                    <strong>Multi-Model Ensemble</strong> — aggregate multiple LLMs
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
          title: 'Why AI Agent Orchestration Matters',
          icon: { name: 'duo-lightbulb' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Agent Reliability Challenge"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["🤖 AI Agent<br/>Request"] --> B{"Crash<br/>Mid-Run?"}
    B -->|"No Temporal"| C["❌ Lost State<br/>Retry From Scratch"]
    B -->|"With Temporal"| D["✅ Resume<br/>Exactly Where<br/>It Left Off"]
    D --> E["🏆 Durable<br/>Completion"]
    style A fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>The Problem</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>LLM calls are <strong>slow, flaky, and expensive</strong> — a single agent run can take 30+ seconds with 5–10 tool calls</li>
                    <li>Server crash mid-run = <strong>lost context, wasted tokens, broken user experience</strong></li>
                    <li>No built-in retry, timeout, or state management in vanilla agent frameworks</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.3}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Why Temporal Fits</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li><strong>Durable execution</strong> — workflow state survives crashes, restarts, deployments</li>
                    <li><strong>Built-in retries</strong> — exponential backoff for flaky LLM APIs</li>
                    <li><strong>Signals &amp; Queries</strong> — human-in-the-loop without polling hacks</li>
                    <li><strong>Child Workflows</strong> — composable multi-agent architectures</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.55}>
                <div style={{ padding: '0.5rem', background: 'rgba(14,165,233,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  🎯 <strong>Goal:</strong> Make every AI agent run <strong>crash-proof, observable, and composable</strong> — by default.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: '',
        },
      ],
    },

    /* ================================================================
       GROUP 2 — Pattern 1: Durable Tool-Calling Loops
       ================================================================ */
    {
      id: 'technique-1-durable-tool-calling',
      title: '1 · Durable Tool-Calling Loops',
      slides: [
        /* ---------- Slide 4: Overview ---------- */
        {
          id: 4,
          title: 'Pattern 1 — Durable Tool-Calling Loops',
          icon: { name: 'duo-arrows-repeat' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Durable Tool-Calling Loop"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    A["📥 User Prompt"] --> B["🧠 LLM Call<br/>(Activity)"]
    B --> C{"Tool Call<br/>Requested?"}
    C -->|"Yes"| D["🔧 Execute Tool<br/>(Activity)"]
    D --> E["Append Result<br/>to History"]
    E --> B
    C -->|"No"| F["✅ Final<br/>Answer"]
    style A fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style B fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style D fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Core Concept</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>The classic <strong>ReAct loop</strong> (Reason → Act → Observe) — but <strong>crash-proof</strong></li>
                    <li>Each LLM call and tool execution is a <strong>Temporal Activity</strong> with its own retry policy</li>
                    <li>If the worker dies mid-loop, Temporal <strong>replays</strong> the workflow and resumes at the exact iteration</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.3}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Key Implementation Details</h4>
                  <GSAPStaggerList stagger={0.1} duration={0.5}>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-gear" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>LLM Activity:</strong> StartToClose timeout ~60s, retry on 429/503 with backoff
                    </div>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-wrench" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Tool Activity:</strong> Per-tool timeout (DB lookup 5s, web scrape 30s)
                    </div>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-shield-check" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Max iterations guard:</strong> Cap at 10–20 loops to prevent runaway agents
                    </div>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <div style={{ padding: '0.5rem', background: 'rgba(16,185,129,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  💡 <strong>Sweet spot:</strong> Any agent that calls tools iteratively — code assistants, research agents, data extractors.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: '',
        },
        /* ---------- Slide 5: Pros & Cons ---------- */
        {
          id: 5,
          title: 'Durable Tool-Calling — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="Retry Flow Detail"
                        diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    A["LLM Call"] --> B{"Success?"}
    B -->|"429/503"| C["Backoff<br/>Retry"]
    C --> A
    B -->|"OK"| D["Parse<br/>Tool Calls"]
    D --> E["Execute<br/>Each Tool"]
    E --> F{"All Tools<br/>Done?"}
    F -->|"Yes"| G["Next LLM<br/>Iteration"]
    style A fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style E fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style F fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style G fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                      />
                    </div>
                    <h4 style={{ color: '#4ade80' }}>✅ Pros</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🛡️ Survives worker crashes — no lost tool-call results</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🔄 Per-activity retry policies — different timeouts per tool</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>📊 Full observability — every LLM call &amp; tool result in Temporal UI</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>⏱️ Built-in heartbeating for long-running tools</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ color: '#f87171' }}>⚠️ Cons</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>📈 Event history grows — use Continue-As-New for long conversations</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>💰 Re-plays LLM activities on replay — ensure idempotent tool calls</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🧩 Requires careful serialization of tool inputs/outputs</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="bounceIn" delay={0.6}>
                <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(251,191,36,0.12)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  ⚡ <strong>Tip:</strong> Use <code>workflow.GetInfo().GetCurrentHistoryLength()</code> to trigger Continue-As-New before history exceeds 10K events.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: '',
        },
      ],
    },

    /* ================================================================
       GROUP 3 — Pattern 2: Human-in-the-Loop
       ================================================================ */
    {
      id: 'technique-2-human-in-the-loop',
      title: '2 · Human-in-the-Loop',
      slides: [
        /* ---------- Slide 6: Overview ---------- */
        {
          id: 6,
          title: 'Pattern 2 — Human-in-the-Loop',
          icon: { name: 'duo-user-check' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Human-in-the-Loop Flow"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    A["🤖 Agent<br/>Plans Action"] --> B["📋 Propose<br/>to Human"]
    B --> C["⏸️ Workflow.Sleep<br/>or Signal.Wait"]
    C --> D{"Human<br/>Decision"}
    D -->|"Approve"| E["✅ Execute<br/>Action"]
    D -->|"Reject"| F["🔄 Re-Plan<br/>or Abort"]
    D -->|"Modify"| G["✏️ Execute<br/>Modified Action"]
    style A fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style D fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style F fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style G fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Core Concept</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Agent proposes a <strong>high-stakes action</strong> (delete data, send email, charge card) and <strong>pauses</strong></li>
                    <li>Workflow waits for a <strong>Temporal Signal</strong> — no polling, no timeout hacks</li>
                    <li>Human approves, rejects, or modifies via API / Slack / dashboard</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Implementation Sketch</h4>
                  <GSAPStaggerList stagger={0.1} duration={0.5}>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Signal definition:</strong> <code>ApprovalSignal(approved bool, modifications string)</code>
                    </div>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-clock" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Timeout:</strong> <code>workflow.AwaitWithTimeout(24h)</code> — auto-reject if no response
                    </div>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-bolt" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Notification:</strong> Side-effect activity sends Slack/email when waiting
                    </div>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.65}>
                <div style={{ padding: '0.5rem', background: 'rgba(14,165,233,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  💡 <strong>Sweet spot:</strong> Financial workflows, content moderation, deployment approvals — anything where AI shouldn't act alone.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: '',
        },
        /* ---------- Slide 7: Pros & Cons ---------- */
        {
          id: 7,
          title: 'Human-in-the-Loop — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="Signal-Based Wait"
                        diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["Workflow<br/>Waiting"] --> B["Signal<br/>Received"]
    B --> C["Resume<br/>Execution"]
    A --> D["Timeout<br/>24h"]
    D --> E["Auto<br/>Reject"]
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style C fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style D fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style E fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px`}
                      />
                    </div>
                    <h4 style={{ color: '#4ade80' }}>✅ Pros</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🔒 Safety gate — prevents autonomous catastrophic actions</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>⏸️ Zero-cost wait — workflow consumes <strong>no resources</strong> while paused</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🔔 Can wait hours/days — no WebSocket or long-poll plumbing</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>📝 Audit log built in — every approval is an event in history</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ color: '#f87171' }}>⚠️ Cons</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🐌 Adds latency — human response time is the bottleneck</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>📱 Requires notification plumbing — Slack/email integration</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🎛️ Approval fatigue — too many gates = users rubber-stamp</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.6}>
                <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(16,185,129,0.12)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  ⚡ <strong>Best practice:</strong> Use <strong>risk-based gating</strong> — only pause for actions above a cost/impact threshold. Low-risk tool calls execute automatically.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: '',
        },
      ],
    },

    /* ================================================================
       GROUP 4 — Pattern 3: LLM Retry with Fallback
       ================================================================ */
    {
      id: 'technique-3-llm-retry-fallback',
      title: '3 · LLM Retry with Fallback',
      slides: [
        /* ---------- Slide 8: Overview ---------- */
        {
          id: 8,
          title: 'Pattern 3 — LLM Retry with Fallback',
          icon: { name: 'duo-rotate-right' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Retry with Fallback Chain"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    A["📥 Prompt"] --> B["GPT-4o<br/>(Primary)"]
    B --> C{"Success?"}
    C -->|"Yes"| D["✅ Return<br/>Response"]
    C -->|"429/500"| E["Retry 3x<br/>Backoff"]
    E --> F{"Still<br/>Failing?"}
    F -->|"Yes"| G["Claude 3.5<br/>(Fallback 1)"]
    G --> H{"Success?"}
    H -->|"Yes"| D
    H -->|"No"| I["Gemini<br/>(Fallback 2)"]
    I --> D
    style A fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style B fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style E fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style F fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style G fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style H fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style I fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Core Concept</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>LLM APIs fail with <strong>rate limits (429)</strong>, <strong>timeouts</strong>, and <strong>server errors (500/503)</strong></li>
                    <li>Temporal's <strong>retry policy</strong> handles transient errors; a <strong>fallback chain</strong> handles persistent ones</li>
                    <li>Activity tries primary model → retries → falls back to cheaper/faster model</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Configuration</h4>
                  <GSAPStaggerList stagger={0.1} duration={0.5}>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-gear" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Primary:</strong> GPT-4o — max 3 retries, 2s initial backoff, 2x multiplier
                    </div>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-arrows-rotate" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Fallback 1:</strong> Claude 3.5 Sonnet — different provider, lower rate limit risk
                    </div>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-bolt" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Fallback 2:</strong> GPT-4o-mini or Gemini Flash — fast &amp; cheap
                    </div>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.65}>
                <div style={{ padding: '0.5rem', background: 'rgba(251,191,36,0.12)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  💡 <strong>Key insight:</strong> Separate <strong>transient retry</strong> (same model, backoff) from <strong>fallback</strong> (different model). Temporal handles both elegantly.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: '',
        },
        /* ---------- Slide 9: Pros & Cons ---------- */
        {
          id: 9,
          title: 'LLM Retry with Fallback — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="Retry Policy Config"
                        diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["RetryPolicy"] --> B["MaxAttempts: 3"]
    A --> C["InitialInterval: 2s"]
    A --> D["BackoffCoeff: 2.0"]
    A --> E["MaxInterval: 30s"]
    A --> F["NonRetryable:<br/>400, 401"]
    style A fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style F fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px`}
                      />
                    </div>
                    <h4 style={{ color: '#4ade80' }}>✅ Pros</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🔄 Automatic retry — zero custom code for backoff logic</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🛡️ Multi-provider resilience — survives single-provider outages</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>💰 Cost control — cheaper fallback prevents expensive retries</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>📊 Observable — see which model served each request in Temporal UI</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ color: '#f87171' }}>⚠️ Cons</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🎯 Quality variance — fallback model may produce worse output</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🧪 Prompt compatibility — prompts tuned for GPT-4 may not work on Claude</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>⏱️ Total latency ceiling — 3 retries × 3 models = up to ~2min</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="rotateIn" delay={0.55}>
                <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(14,165,233,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  ⚡ <strong>Tip:</strong> Mark <code>400 Bad Request</code> and <code>401 Unauthorized</code> as <strong>NonRetryableErrors</strong> — retrying won't help.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: '',
        },
      ],
    },

    /* ================================================================
       GROUP 5 — Pattern 4: Parallel Agent Fan-Out
       ================================================================ */
    {
      id: 'technique-4-parallel-fan-out',
      title: '4 · Parallel Agent Fan-Out',
      slides: [
        /* ---------- Slide 10: Overview ---------- */
        {
          id: 10,
          title: 'Pattern 4 — Parallel Agent Fan-Out',
          icon: { name: 'duo-arrows-split-up-and-left' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="flipCard" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Parallel Fan-Out Architecture"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    A["📥 Complex Task"] --> B["🧠 Planner<br/>LLM"]
    B --> C["Sub-task 1"]
    B --> D["Sub-task 2"]
    B --> E["Sub-task 3"]
    B --> F["Sub-task N"]
    C --> G["🔗 Aggregator<br/>Merge Results"]
    D --> G
    E --> G
    F --> G
    G --> H["✅ Final<br/>Answer"]
    style A fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style B fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style C fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style D fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style F fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style G fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style H fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Core Concept</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Break a complex task into <strong>independent sub-tasks</strong> and run them <strong>concurrently</strong></li>
                    <li>Each sub-task is a <strong>Child Workflow</strong> or parallel Activity — Temporal manages all of them</li>
                    <li>Results are <strong>aggregated</strong> once all (or enough) children complete</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.4}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Use Cases</h4>
                  <GSAPStaggerList stagger={0.1} duration={0.5}>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-magnifying-glass-chart" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Research agent:</strong> Query 5 sources simultaneously, merge findings
                    </div>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-code" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Code review:</strong> Analyze security, style, performance in parallel
                    </div>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-brain" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Multi-perspective:</strong> Same question to different model personas, then synthesize
                    </div>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.7}>
                <div style={{ padding: '0.5rem', background: 'rgba(16,185,129,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  💡 <strong>Sweet spot:</strong> Tasks where sub-problems are <strong>independent</strong> and a planner can decompose them automatically.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: '',
        },
        /* ---------- Slide 11: Pros & Cons ---------- */
        {
          id: 11,
          title: 'Parallel Fan-Out — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="Fan-Out Strategies"
                        diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["Fan-Out<br/>Strategy"] --> B["All-of-N<br/>Wait for all"]
    A --> C["First-of-N<br/>Race"]
    A --> D["K-of-N<br/>Quorum"]
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style C fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px`}
                      />
                    </div>
                    <h4 style={{ color: '#4ade80' }}>✅ Pros</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>⚡ Massive speedup — N tasks in ~1x latency instead of Nx</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🛡️ Partial failure isolation — one child failing doesn't kill others</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>📊 Independent scaling — each child on its own worker pool</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🔄 Flexible aggregation — all-of-N, first-of-N, or K-of-N quorum</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ color: '#f87171' }}>⚠️ Cons</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>💰 Token cost multiplied — N × full prompt cost</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🧩 Aggregation quality — merging N outputs is its own challenge</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>📈 Rate limits — N concurrent LLM calls hit provider quotas fast</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="bounceIn" delay={0.55}>
                <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(251,191,36,0.12)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  ⚡ <strong>Tip:</strong> Use Temporal's <strong>Child Workflow</strong> for complex sub-tasks (own retries), or parallel <strong>Activities</strong> for simple tool calls.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: '',
        },
      ],
    },

    /* ================================================================
       GROUP 6 — Pattern 5: Agent Memory Persistence
       ================================================================ */
    {
      id: 'technique-5-agent-memory',
      title: '5 · Agent Memory Persistence',
      slides: [
        /* ---------- Slide 12: Overview ---------- */
        {
          id: 12,
          title: 'Pattern 5 — Agent Memory Persistence',
          icon: { name: 'duo-memory' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Memory Architecture"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    A["🧠 Workflow<br/>State"] --> B["Short-Term<br/>Chat History"]
    A --> C["Working<br/>Memory"]
    A --> D["Long-Term<br/>via Activity"]
    B --> E["Local Variable<br/>in Workflow"]
    C --> E
    D --> F["Vector DB /<br/>Postgres"]
    E --> G["Survives<br/>Crashes"]
    F --> G
    style A fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style D fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style F fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style G fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Core Concept</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Workflow local variables <strong>are the memory</strong> — Temporal replays them on crash recovery</li>
                    <li><strong>Short-term:</strong> conversation history as a workflow-local list</li>
                    <li><strong>Long-term:</strong> Activity writes summaries to a vector DB for cross-session retrieval</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="scaleIn" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Memory Tiers</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.8rem' }}>
                    <div style={{ padding: '0.5rem', background: 'rgba(59,130,246,0.12)', borderRadius: '8px', fontSize: '0.85rem', textAlign: 'center' }}>
                      <strong style={{ color: '#93c5fd' }}>Short-Term</strong><br />
                      Chat turns in workflow variable<br />
                      <em>Survives crashes</em>
                    </div>
                    <div style={{ padding: '0.5rem', background: 'rgba(251,191,36,0.12)', borderRadius: '8px', fontSize: '0.85rem', textAlign: 'center' }}>
                      <strong style={{ color: '#fde68a' }}>Working</strong><br />
                      Scratchpad, plan steps<br />
                      <em>Queryable via Query</em>
                    </div>
                    <div style={{ padding: '0.5rem', background: 'rgba(249,115,22,0.12)', borderRadius: '8px', fontSize: '0.85rem', textAlign: 'center' }}>
                      <strong style={{ color: '#fed7aa' }}>Long-Term</strong><br />
                      Summaries → Vector DB<br />
                      <em>Cross-session</em>
                    </div>
                  </div>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.6}>
                <div style={{ padding: '0.5rem', background: 'rgba(16,185,129,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  💡 <strong>Sweet spot:</strong> Chatbots, personal assistants, agents that need context across turns or sessions.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: '',
        },
        /* ---------- Slide 13: Pros & Cons ---------- */
        {
          id: 13,
          title: 'Agent Memory — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="Memory Lifecycle"
                        diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["New Turn"] --> B["Append<br/>to History"]
    B --> C{"History<br/>> 50 turns?"}
    C -->|"Yes"| D["Summarize<br/>+ Persist"]
    D --> E["Continue<br/>As New"]
    C -->|"No"| F["Keep in<br/>Workflow"]
    style A fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                      />
                    </div>
                    <h4 style={{ color: '#4ade80' }}>✅ Pros</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>💾 Zero-effort persistence — workflow state = durable memory</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🔍 Queryable — use Temporal Queries to inspect agent memory live</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🔄 Graceful compaction — Continue-As-New with summarized context</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🌐 Cross-session — long-term memory survives workflow completion</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ color: '#f87171' }}>⚠️ Cons</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>📈 History growth — long conversations bloat event history</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🧠 Summarization quality — LLM-based summaries can lose detail</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🗄️ External DB required — long-term memory needs vector DB infra</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.55}>
                <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(14,165,233,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  ⚡ <strong>Best practice:</strong> Use <strong>Continue-As-New</strong> every ~50 turns. Summarize old turns via an Activity before resetting.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: '',
        },
      ],
    },

    /* ================================================================
       GROUP 7 — Pattern 6: Supervisor Agent
       ================================================================ */
    {
      id: 'technique-6-supervisor-agent',
      title: '6 · Supervisor Agent',
      slides: [
        /* ---------- Slide 14: Overview ---------- */
        {
          id: 14,
          title: 'Pattern 6 — Supervisor Agent',
          icon: { name: 'duo-sitemap' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInRight" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Supervisor Agent Architecture"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    A["📥 User<br/>Request"] --> B["🧠 Supervisor<br/>(Parent Workflow)"]
    B --> C["📊 Analyst<br/>(Child WF)"]
    B --> D["✍️ Writer<br/>(Child WF)"]
    B --> E["🔍 Reviewer<br/>(Child WF)"]
    C --> F["Results"]
    D --> F
    E --> F
    F --> B
    B --> G["✅ Final<br/>Output"]
    style A fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style F fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style G fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Core Concept</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>A <strong>parent "supervisor" workflow</strong> orchestrates multiple specialized <strong>child agent workflows</strong></li>
                    <li>Supervisor decides <strong>which agent to call next</strong> based on the task and accumulated results</li>
                    <li>Each child agent is a <strong>full Temporal workflow</strong> with its own tool-calling loop, retries, and state</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Why Child Workflows?</h4>
                  <GSAPStaggerList stagger={0.1} duration={0.5}>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-shield-check" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Blast radius:</strong> Child failure doesn't crash the parent — catch &amp; retry or skip
                    </div>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-layer-group" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Composability:</strong> Same agent workflow reused across different supervisors
                    </div>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-chart-line" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Scalability:</strong> Each child can run on a different task queue / worker pool
                    </div>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.65}>
                <div style={{ padding: '0.5rem', background: 'rgba(14,165,233,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  💡 <strong>Sweet spot:</strong> Complex multi-step tasks — report generation, code review pipelines, multi-stage research.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: '',
        },
        /* ---------- Slide 15: Pros & Cons ---------- */
        {
          id: 15,
          title: 'Supervisor Agent — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="Supervisor Decision Loop"
                        diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    A["Supervisor<br/>LLM Call"] --> B{"Next<br/>Agent?"}
    B -->|"Analyst"| C["Run Analyst<br/>Child WF"]
    B -->|"Writer"| D["Run Writer<br/>Child WF"]
    B -->|"Done"| E["Return<br/>Final"]
    C --> A
    D --> A
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                      />
                    </div>
                    <h4 style={{ color: '#4ade80' }}>✅ Pros</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🏗️ Modular — add/remove agent roles without touching supervisor logic</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🔄 Dynamic routing — LLM picks the next agent, adapting to context</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🛡️ Fault isolation — one agent crashing doesn't kill the pipeline</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>📊 Full trace — parent → child hierarchy visible in Temporal UI</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ color: '#f87171' }}>⚠️ Cons</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🧠 Supervisor LLM overhead — extra LLM call per routing decision</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🕸️ Complexity — deep nesting makes debugging harder</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>⏱️ Latency stacks — serial child workflows add up</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="rotateIn" delay={0.55}>
                <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(16,185,129,0.12)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  ⚡ <strong>Tip:</strong> Limit nesting to <strong>2 levels max</strong> (supervisor → agent). Deeper nesting is a sign you need a better task decomposition.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: '',
        },
      ],
    },

    /* ================================================================
       GROUP 8 — Pattern 7: Agent Handoff / Routing
       ================================================================ */
    {
      id: 'technique-7-agent-handoff',
      title: '7 · Agent Handoff / Routing',
      slides: [
        /* ---------- Slide 16: Overview ---------- */
        {
          id: 16,
          title: 'Pattern 7 — Agent Handoff / Routing',
          icon: { name: 'duo-shuffle' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Intent-Based Agent Routing"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    A["📥 User<br/>Message"] --> B["🧠 Router<br/>(Classifier LLM)"]
    B -->|"billing"| C["💳 Billing<br/>Agent"]
    B -->|"technical"| D["🔧 Support<br/>Agent"]
    B -->|"sales"| E["📈 Sales<br/>Agent"]
    B -->|"escalate"| F["👤 Human<br/>Agent"]
    C --> G["📤 Response"]
    D --> G
    E --> G
    F --> G
    style A fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style D fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style F fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style G fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Core Concept</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>A <strong>router</strong> classifies the user request and <strong>hands off</strong> to a specialized agent</li>
                    <li>Unlike the Supervisor, the router does <strong>one-shot classification</strong> — no iterative loop</li>
                    <li>Each specialist agent has its own <strong>tools, system prompt, and model config</strong></li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInLeft" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Temporal Implementation</h4>
                  <GSAPStaggerList stagger={0.1} duration={0.5}>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-diagram-project" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Router Activity:</strong> Small, fast LLM call returns an intent enum
                    </div>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-code-fork" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Switch/Match:</strong> Workflow code dispatches to the right Child Workflow by intent
                    </div>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-arrows-rotate" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Re-route:</strong> Agent can Signal parent to re-classify if conversation shifts topic
                    </div>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.65}>
                <div style={{ padding: '0.5rem', background: 'rgba(251,191,36,0.12)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  💡 <strong>Sweet spot:</strong> Customer support bots, multi-department assistants, any system with <strong>distinct agent specialties</strong>.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: '',
        },
        /* ---------- Slide 17: Pros & Cons ---------- */
        {
          id: 17,
          title: 'Agent Handoff — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="Handoff vs Supervisor"
                        diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["Routing<br/>Pattern"] --> B["Handoff<br/>One-shot"]
    A --> C["Supervisor<br/>Iterative"]
    B --> D["Fast, simple<br/>single dispatch"]
    C --> E["Multi-step<br/>dynamic plan"]
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style C fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style E fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px`}
                      />
                    </div>
                    <h4 style={{ color: '#4ade80' }}>✅ Pros</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>⚡ Low latency — one classification call then direct to specialist</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🎯 Specialized prompts — each agent fine-tuned for its domain</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>📏 Simple to reason about — no complex multi-step planning</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🔄 Re-route support — Signal-based topic switching mid-conversation</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ color: '#f87171' }}>⚠️ Cons</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🎯 Classification errors — wrong route = wrong agent = bad answer</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🧩 Doesn't compose well — multi-step tasks need Supervisor instead</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>📊 N agents = N system prompts to maintain</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="bounceIn" delay={0.55}>
                <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(14,165,233,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  ⚡ <strong>Tip:</strong> Use a <strong>small, fast model</strong> (GPT-4o-mini) for routing classification. Save the big model for the specialist agent.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: '',
        },
      ],
    },

    /* ================================================================
       GROUP 9 — Pattern 8: Streaming Token Relay
       ================================================================ */
    {
      id: 'technique-8-streaming-token-relay',
      title: '8 · Streaming Token Relay',
      slides: [
        /* ---------- Slide 18: Overview ---------- */
        {
          id: 18,
          title: 'Pattern 8 — Streaming Token Relay',
          icon: { name: 'duo-bolt-lightning' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="scaleIn" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Streaming Architecture"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["🧠 LLM<br/>Streaming"] --> B["Activity<br/>Heartbeat<br/>+ Details"]
    B --> C["Temporal<br/>Server"]
    C --> D["Query<br/>Handler"]
    D --> E["🖥️ Client<br/>UI"]
    style A fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style D fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Core Concept</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>LLM streaming produces tokens one-by-one — users expect <strong>real-time output</strong></li>
                    <li>Activity <strong>heartbeats with details</strong> carry partial token batches to the Temporal server</li>
                    <li>Client polls via <strong>Query</strong> or <strong>Update</strong> to receive streamed tokens</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Implementation Approaches</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                    <div style={{ padding: '0.5rem', background: 'rgba(59,130,246,0.12)', borderRadius: '8px', fontSize: '0.85rem' }}>
                      <strong style={{ color: '#93c5fd' }}>Heartbeat + Query</strong><br />
                      Activity heartbeats token batches every 100ms.<br />
                      Client polls Query handler.<br />
                      <em>Simple, some latency</em>
                    </div>
                    <div style={{ padding: '0.5rem', background: 'rgba(168,85,247,0.12)', borderRadius: '8px', fontSize: '0.85rem' }}>
                      <strong style={{ color: '#e0c0ff' }}>Update Handler</strong><br />
                      Client calls Update, workflow forwards tokens.<br />
                      Server-push semantics.<br />
                      <em>Lower latency, newer API</em>
                    </div>
                  </div>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="fadeIn" delay={0.65}>
                <div style={{ padding: '0.5rem', background: 'rgba(16,185,129,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  💡 <strong>Sweet spot:</strong> Chat UIs, live dashboards, any front-end expecting typewriter-style LLM output from a durable backend.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: '',
        },
        /* ---------- Slide 19: Pros & Cons ---------- */
        {
          id: 19,
          title: 'Streaming Token Relay — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="Streaming vs Batch"
                        diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["Batch<br/>Response"] --> B["Wait 10-30s<br/>for complete"]
    A --> C["Show all<br/>at once"]
    D["Streaming<br/>Relay"] --> E["First token<br/>in 200ms"]
    D --> F["Typewriter<br/>UX"]
    style A fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style B fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style C fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                      />
                    </div>
                    <h4 style={{ color: '#4ade80' }}>✅ Pros</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>⚡ Low perceived latency — first token visible in &lt;1s</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🛡️ Durable streaming — if worker crashes, replay resumes from last heartbeat</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>📊 No WebSocket infra — Temporal handles the transport</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ color: '#f87171' }}>⚠️ Cons</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>📈 Heartbeat overhead — frequent heartbeats add server load</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>⏱️ Polling latency — Query-based approach adds 100–500ms jitter</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🧩 Complexity — managing partial token state is non-trivial</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🆕 Update API is still evolving — check SDK version compatibility</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="scaleIn" delay={0.55}>
                <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(251,191,36,0.12)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  ⚡ <strong>Tip:</strong> Batch tokens into chunks of 5–10 per heartbeat to reduce overhead while keeping UX smooth.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: '',
        },
      ],
    },

    /* ================================================================
       GROUP 10 — Pattern 9: Multi-Model Ensemble
       ================================================================ */
    {
      id: 'technique-9-multi-model-ensemble',
      title: '9 · Multi-Model Ensemble',
      slides: [
        /* ---------- Slide 20: Overview ---------- */
        {
          id: 20,
          title: 'Pattern 9 — Multi-Model Ensemble',
          icon: { name: 'duo-cubes' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInLeft" delay={0.1}>
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Multi-Model Ensemble Flow"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    A["📥 Same Prompt"] --> B["GPT-4o"]
    A --> C["Claude 3.5"]
    A --> D["Gemini Pro"]
    B --> E["🔗 Judge LLM<br/>or Voting"]
    C --> E
    D --> E
    E --> F["✅ Best / Merged<br/>Answer"]
    style A fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style B fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style C fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
                  <h4>Core Concept</h4>
                  <ul style={{ fontSize: '0.95rem' }}>
                    <li>Send the <strong>same prompt</strong> to multiple LLMs <strong>in parallel</strong> (fan-out Activities)</li>
                    <li>A <strong>judge/aggregator</strong> picks the best answer or merges them</li>
                    <li>Combines <strong>Pattern 4 (Fan-Out)</strong> + <strong>Pattern 3 (Fallback)</strong> for max quality</li>
                  </ul>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInRight" delay={0.35}>
                <div style={{ marginBottom: '0.7em' }}>
                  <h4>Aggregation Strategies</h4>
                  <GSAPStaggerList stagger={0.1} duration={0.5}>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-trophy" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Judge model:</strong> A separate LLM scores/ranks the N responses
                    </div>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-check-double" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Majority vote:</strong> For classification tasks — pick the most common answer
                    </div>
                    <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                      <SvgIcon iconName="duo-code-merge" sizeName="lg" style={iconStyle} darkModeInvert={true} />
                      <strong>Merge/synthesis:</strong> Combine unique insights from each model's output
                    </div>
                  </GSAPStaggerList>
                </div>
              </GSAPAnimated>
              <GSAPAnimated animation="bounceIn" delay={0.65}>
                <div style={{ padding: '0.5rem', background: 'rgba(14,165,233,0.15)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  💡 <strong>Sweet spot:</strong> High-stakes decisions — medical triage, legal analysis, security assessments — where one model's blind spots are covered by another.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: '',
        },
        /* ---------- Slide 21: Pros & Cons ---------- */
        {
          id: 21,
          title: 'Multi-Model Ensemble — Pros & Cons',
          icon: { name: 'duo-scale-balanced' },
          content: (
            <div style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'left' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <GSAPAnimated animation="slideInLeft" delay={0.1}>
                  <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                      <MermaidPopover
                        title="Ensemble Cost vs Quality"
                        diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["1 Model"] --> B["Low Cost<br/>Baseline Quality"]
    C["3 Models<br/>+ Judge"] --> D["3x Cost<br/>Higher Quality"]
    E["3 Models<br/>+ Vote"] --> F["3x Cost<br/>Consistent"]
    style A fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style E fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style F fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px`}
                      />
                    </div>
                    <h4 style={{ color: '#4ade80' }}>✅ Pros</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🎯 Higher accuracy — models cover each other's weaknesses</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🛡️ Resilience — if one provider is down, others still produce answers</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>📊 Confidence signal — agreement across models = high confidence</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>⚡ Same latency as single model — parallel execution via Temporal</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
                <GSAPAnimated animation="slideInRight" delay={0.3}>
                  <div>
                    <h4 style={{ color: '#f87171' }}>⚠️ Cons</h4>
                    <GSAPStaggerList stagger={0.08} duration={0.5}>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>💰 N× token cost — every model sees the full prompt</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🧠 Judge model adds latency + cost — serial step after fan-out</div>
                      <div style={{ fontSize: '0.95rem', marginBottom: '0.4rem' }}>🧩 Prompt portability — same prompt may produce different formats</div>
                    </GSAPStaggerList>
                  </div>
                </GSAPAnimated>
              </div>
              <GSAPAnimated animation="rotateIn" delay={0.55}>
                <div style={{ marginTop: '1rem', padding: '0.5rem', background: 'rgba(16,185,129,0.12)', borderRadius: '8px', fontSize: '0.95rem' }}>
                  ⚡ <strong>Tip:</strong> Use ensembles <strong>selectively</strong> — only for high-value decisions. Route routine tasks to a single fast model.
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
        /* ---------- Slide 22: Cheat Sheet ---------- */
        {
          id: 22,
          title: 'Cheat Sheet — 9 Patterns Compared',
          icon: { name: 'duo-table' },
          content: (
            <div style={{ fontSize: '0.85rem', lineHeight: '1.6', textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="Decision Flow"
                  diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    A["Need to call<br/>tools iteratively?"] -->|"Yes"| B["#1 Durable<br/>Tool Loop"]
    A -->|"No"| C["Need human<br/>approval?"]
    C -->|"Yes"| D["#2 Human-in-<br/>the-Loop"]
    C -->|"No"| E["LLM might<br/>fail?"]
    E -->|"Yes"| F["#3 Retry +<br/>Fallback"]
    E -->|"No"| G["Parallel<br/>sub-tasks?"]
    G -->|"Yes"| H["#4 Fan-Out"]
    G -->|"No"| I["Multi-turn<br/>memory?"]
    I -->|"Yes"| J["#5 Memory<br/>Persistence"]
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style F fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style G fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style H fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style I fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style J fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px`}
                />
              </div>
              <GSAPAnimated animation="fadeIn" delay={0.1}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8rem' }}>
                  <thead>
                    <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.3)' }}>
                      <th style={{ padding: '6px 8px', textAlign: 'left' }}>Pattern</th>
                      <th style={{ padding: '6px 8px', textAlign: 'center' }}>Complexity</th>
                      <th style={{ padding: '6px 8px', textAlign: 'center' }}>Token Cost</th>
                      <th style={{ padding: '6px 8px', textAlign: 'center' }}>Latency</th>
                      <th style={{ padding: '6px 8px', textAlign: 'left' }}>Best Use Case</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td style={{ padding: '5px 8px' }}>1. Durable Tool Loop</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟢 Low</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟡 Med</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟡 Med</td>
                      <td style={{ padding: '5px 8px' }}>Any iterative agent</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td style={{ padding: '5px 8px' }}>2. Human-in-the-Loop</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟢 Low</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟢 Low</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🔴 High*</td>
                      <td style={{ padding: '5px 8px' }}>Approvals, compliance</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td style={{ padding: '5px 8px' }}>3. LLM Retry + Fallback</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟢 Low</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟡 Med</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟡 Med</td>
                      <td style={{ padding: '5px 8px' }}>Flaky API resilience</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td style={{ padding: '5px 8px' }}>4. Parallel Fan-Out</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟡 Med</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🔴 High</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟢 Low</td>
                      <td style={{ padding: '5px 8px' }}>Research, multi-source</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td style={{ padding: '5px 8px' }}>5. Memory Persistence</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟡 Med</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟡 Med</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟢 Low</td>
                      <td style={{ padding: '5px 8px' }}>Chatbots, assistants</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td style={{ padding: '5px 8px' }}>6. Supervisor Agent</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🔴 High</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🔴 High</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🔴 High</td>
                      <td style={{ padding: '5px 8px' }}>Multi-step pipelines</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td style={{ padding: '5px 8px' }}>7. Agent Handoff</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟡 Med</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟡 Med</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟢 Low</td>
                      <td style={{ padding: '5px 8px' }}>Support bots, routing</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <td style={{ padding: '5px 8px' }}>8. Streaming Relay</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟡 Med</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟢 Low</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟢 Low</td>
                      <td style={{ padding: '5px 8px' }}>Chat UIs, live output</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '5px 8px' }}>9. Multi-Model Ensemble</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🔴 High</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🔴 High</td>
                      <td style={{ padding: '5px 8px', textAlign: 'center' }}>🟡 Med</td>
                      <td style={{ padding: '5px 8px' }}>High-stakes decisions</td>
                    </tr>
                  </tbody>
                </table>
              </GSAPAnimated>
              <GSAPAnimated animation="slideInBottom" delay={0.4}>
                <div style={{ marginTop: '0.7rem', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                  * Human-in-the-Loop latency depends on human response time, not compute.
                </div>
              </GSAPAnimated>
            </div>
          ),
          notes: '',
        },
        /* ---------- Slide 23: Key Takeaways ---------- */
        {
          id: 23,
          title: 'Key Takeaways',
          icon: { name: 'duo-star' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                <MermaidPopover
                  title="Pattern Composition"
                  diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    A["Start Simple<br/>#1 Tool Loop"] --> B["Add Safety<br/>#2 Human Gate"]
    B --> C["Add Resilience<br/>#3 Retry"]
    C --> D["Scale Out<br/>#4 Fan-Out"]
    D --> E["Add Memory<br/>#5 Persistence"]
    E --> F["Compose<br/>#6 Supervisor"]
    style A fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style C fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style F fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px`}
                />
              </div>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <h4>Top 5 Actionable Takeaways</h4>
              </GSAPAnimated>
              <GSAPStaggerList stagger={0.12} duration={0.7}>
                <div style={{ marginBottom: '0.6rem', fontSize: '1rem' }}>
                  <span style={{ fontWeight: 'bold', color: '#4ade80', marginRight: '0.5rem' }}>1</span>
                  <strong>Start with Pattern #1</strong> — every AI agent needs a durable tool-calling loop as its foundation
                </div>
                <div style={{ marginBottom: '0.6rem', fontSize: '1rem' }}>
                  <span style={{ fontWeight: 'bold', color: '#4ade80', marginRight: '0.5rem' }}>2</span>
                  <strong>Layer patterns incrementally</strong> — add human gates, retries, and memory as requirements grow
                </div>
                <div style={{ marginBottom: '0.6rem', fontSize: '1rem' }}>
                  <span style={{ fontWeight: 'bold', color: '#4ade80', marginRight: '0.5rem' }}>3</span>
                  <strong>Use Continue-As-New</strong> — prevent unbounded event history in long-running agent sessions
                </div>
                <div style={{ marginBottom: '0.6rem', fontSize: '1rem' }}>
                  <span style={{ fontWeight: 'bold', color: '#4ade80', marginRight: '0.5rem' }}>4</span>
                  <strong>Make every Activity idempotent</strong> — Temporal replays mean your tools may execute more than once
                </div>
                <div style={{ marginBottom: '0.6rem', fontSize: '1rem' }}>
                  <span style={{ fontWeight: 'bold', color: '#4ade80', marginRight: '0.5rem' }}>5</span>
                  <strong>Compose, don't monolith</strong> — Supervisor + Child Workflows beats a 1000-line mega-workflow every time
                </div>
              </GSAPStaggerList>
              <GSAPAnimated animation="bounceIn" delay={0.8}>
                <div style={{ marginTop: '1rem', padding: '0.7rem', background: 'rgba(14,165,233,0.15)', borderRadius: '8px', fontSize: '1rem', textAlign: 'center' }}>
                  🚀 <strong>Temporal turns fragile AI agents into production-grade, crash-proof systems.</strong>
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
