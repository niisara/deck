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
          notes: `### 9 Patterns for Orchestrating AI Agents with Temporal
[excited] Welcome everyone! Today we're going to explore **9 battle-tested patterns** for orchestrating AI agents with Temporal. This isn't about toy demos or weekend projects — [confidently] this is about making AI agents **production-ready**.
#### 🎯 What We'll Cover
[conversational] If you've ever built an AI agent that calls tools, talks to LLMs, or needs human approval, you know the pain. [disappointed] The agent crashes mid-run, you lose all the context, wasted tokens, angry users. [confidently] Temporal solves this by giving us **durable execution** — your agent's state survives crashes, restarts, and even deployments.
[energetic] We're covering 9 patterns organized into four groups. First, the **core loops** — durable tool-calling, human-in-the-loop, and LLM retry with fallback. Then **scaling and state** — parallel fan-out and memory persistence. Next, **multi-agent patterns** — supervisor agents and agent handoff. And finally, two **advanced patterns** — streaming token relay and multi-model ensemble.
[inspiringly] By the end of this talk, you'll have a mental toolbox for building AI agents that don't just work in demos but actually survive production traffic. [excited] Let's dive in!`,
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
          notes: `### Overview — 9 Patterns at a Glance
[conversational] Let's start with a bird's-eye view of all 9 patterns so you know what's coming.
#### 📋 The Pattern Map
On the left column, we have patterns 1 through 5. [confidently] **Pattern 1, Durable Tool-Calling Loops**, is the foundation — it's the crash-proof version of the classic ReAct 👉 'ree-ACT' loop where an agent reasons, acts, and observes in a cycle. **Pattern 2, Human-in-the-Loop**, lets your agent pause and wait for a human to approve or reject a high-stakes action. **Pattern 3, LLM Retry with Fallback**, handles the reality that LLM APIs fail all the time with rate limits and server errors.
[energetic] **Pattern 4, Parallel Agent Fan-Out**, is about splitting a big task into independent sub-tasks and running them all at the same time. **Pattern 5, Agent Memory Persistence**, gives your agent a durable memory that survives crashes — short-term chat history and long-term vector DB storage.
On the right column, **Pattern 6, the Supervisor Agent**, is a parent workflow that orchestrates multiple specialist child agents. **Pattern 7, Agent Handoff**, is simpler — a router classifies the request and sends it to the right specialist. **Pattern 8, Streaming Token Relay**, bridges Temporal's durable execution with real-time typewriter-style LLM output. And **Pattern 9, Multi-Model Ensemble**, sends the same prompt to multiple LLMs and picks the best answer.
[warmly] These patterns aren't mutually exclusive — you'll often combine two or three of them in a single system. Now let's understand **why** orchestrating AI agents is so challenging.`,
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
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Temporal's 4 Pillars for AI Agents"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    A["🏗️ Temporal<br/>Platform"] --> B["💾 Durable<br/>Execution"]
    A --> C["🔄 Built-in<br/>Retries"]
    A --> D["📡 Signals &<br/>Queries"]
    A --> E["🧩 Child<br/>Workflows"]
    B --> F["State survives<br/>crashes & deploys"]
    C --> G["Backoff for<br/>flaky LLM APIs"]
    D --> H["Human-in-loop<br/>without polling"]
    E --> I["Composable<br/>multi-agent"]
    style A fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style C fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style D fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style E fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style G fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style H fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style I fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
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
          notes: `### Why AI Agent Orchestration Matters
[serious] Before we jump into the patterns, let's talk about **why** we need specialized orchestration for AI agents in the first place.
#### ❌ The Problem
[concerned] Here's the reality of working with LLMs in production. LLM calls are **slow** — a single GPT-4o call can take 5 to 30 seconds. They're **flaky** — you'll hit rate limits, timeouts, and random 500 errors regularly. And they're **expensive** — every failed call that you have to retry costs real money in tokens.
[frustrated] Now imagine your agent is mid-way through a complex task. It's made 6 tool calls, accumulated results, and then — [sighing] the server crashes. Without durable execution, all that work is gone. The user sees an error, and if you retry, you start from scratch. You've wasted tokens, wasted time, and delivered a terrible user experience.
[disappointed] Vanilla agent frameworks like LangChain 👉 'lang-CHAIN' or plain Python don't give you built-in retry, timeout management, or state persistence. You end up building all of that yourself, and it's surprisingly hard to get right.
#### ✅ Why Temporal Fits
[pleased] Temporal solves these problems at the infrastructure level. [confidently] **Durable execution** means your workflow state — including every tool call result — survives crashes, restarts, and even code deployments. **Built-in retries** with exponential backoff handle flaky LLM APIs without you writing retry loops. **Signals and Queries** let you build human-in-the-loop approval gates without polling hacks. And **Child Workflows** let you compose multi-agent architectures where each agent is independently managed.
[determined] The goal is simple: make every AI agent run **crash-proof, observable, and composable** — by default. Let's see how, starting with the most fundamental pattern.`,
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
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Activity Configuration Example"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["🧠 LLM Activity<br/>Timeout: 60s"] --> B["Retry: 429/503<br/>Backoff: 2s × 2x"]
    C["🔧 Tool Activity<br/>Per-tool timeout"] --> D["DB: 5s<br/>Scrape: 30s"]
    E["🛡️ Guard<br/>Max 10-20 loops"] --> F["⛔ Prevent<br/>Runaway Agent"]
    style A fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style B fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style C fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style E fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style F fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px`}
                    />
                  </div>
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
          notes: `### Pattern 1 — Durable Tool-Calling Loops
[confidently] This is the **foundation pattern** — if you only learn one pattern today, make it this one.
#### 🔄 Core Concept
[conversational] You've probably heard of the **ReAct** 👉 'ree-ACT' loop — Reason, Act, Observe. The LLM reasons about what to do, calls a tool, observes the result, and loops back. [storytelling] Think of a code assistant that reads a file, edits it, runs tests, and iterates until the tests pass.
[concerned] The problem is that this loop can run for minutes with 5, 10, even 20 iterations. If your server crashes on iteration 7, you lose everything. [pleased] With Temporal, each LLM call and each tool execution is a **Temporal Activity** with its own retry policy. If the worker dies mid-loop, Temporal **replays** the workflow and resumes at the exact iteration where it left off. No lost work, no wasted tokens.
#### ⚙️ Key Implementation Details
[lecture] For the **LLM Activity**, you'd set a StartToClose timeout of about 60 seconds and retry on HTTP 429 and 503 errors with exponential backoff. For **Tool Activities**, each tool gets its own timeout — a database lookup might need 5 seconds, while a web scrape might need 30 seconds.
[seriously] Critically, you need a **max iterations guard**. Cap your agent at 10 to 20 loops to prevent runaway agents that burn through your entire API budget. Think of it as a circuit breaker for your agent.
[warmly] This pattern is the sweet spot for any agent that calls tools iteratively — code assistants, research agents, data extractors. Let's look at the trade-offs.`,
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
          notes: `### Durable Tool-Calling — Pros & Cons
[conversational] Let's be honest about what works well and what can bite you with this pattern.
#### ✅ Pros
[pleased] The biggest win is **crash resilience**. Your agent survives worker crashes without losing any tool-call results. Every completed Activity result is durably stored — if the worker restarts, Temporal replays the workflow and those results are already there, no re-execution needed.
[confidently] You also get **per-activity retry policies**. Different tools have different failure modes. Your LLM call might need a 2-second exponential backoff for rate limits, while your database tool might need a simple 500ms retry. Temporal lets you configure each one independently.
[enthusiastically] **Full observability** is another huge advantage. Every LLM call, every tool result, every iteration — it's all visible in the Temporal UI as events. When something goes wrong at 3am, you can see exactly what the agent did, what it received, and where it failed. And for long-running tools like web scraping, Temporal's **heartbeating** mechanism lets you report progress and detect worker failures early.
#### ⚠️ Cons
[cautiously] The main challenge is **event history growth**. Every Activity execution adds events to the workflow history. A long conversation with 50+ iterations can blow past the 50,000 event limit. The solution is **Continue-As-New** — essentially resetting the workflow with carried-over state.
[seriously] Another subtlety: Temporal **replays** Activities during recovery. Your tool calls need to be **idempotent** — calling them twice should produce the same result. If a tool sends an email, you need a deduplication mechanism. And all tool inputs and outputs must be **serializable** as JSON.
A practical tip: use \`workflow.GetInfo().GetCurrentHistoryLength()\` to check your history size and trigger Continue-As-New before you hit 10K events. [energetic] Now let's move to Pattern 2 — adding a human safety gate.`,
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
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Signal-Based Approval Flow"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    A["📋 Define Signal<br/>ApprovalSignal"] --> B["⏳ AwaitWithTimeout<br/>24 hours"]
    B --> C["🔔 Fire Notification<br/>Slack / Email"]
    C --> D{"Signal<br/>Received?"}
    D -->|"Yes"| E["✅ Resume<br/>Workflow"]
    D -->|"Timeout"| F["❌ Auto-Reject"]
    style A fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style D fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style F fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px`}
                    />
                  </div>
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
          notes: `### Pattern 2 — Human-in-the-Loop
[conversational] Now let's add a **safety gate** to our agent. This pattern is essential for any AI system that takes real-world actions.
#### 🛡️ Core Concept
[storytelling] Imagine your AI agent is about to delete a customer's data, send a payment, or deploy code to production. Do you really want it to do that autonomously? [cautiously] Probably not. With the Human-in-the-Loop pattern, the agent proposes a **high-stakes action** and then **pauses** — it literally stops and waits.
[pleased] The workflow waits for a **Temporal Signal** — this is a first-class primitive in Temporal. No polling loops, no WebSocket connections, no database flags to check. The workflow is simply paused, consuming **zero compute resources** while it waits. A human can then approve, reject, or modify the proposed action via an API call, a Slack button, or a dashboard.
#### 🔧 Implementation Sketch
[lecture] The signal definition is simple — something like \`ApprovalSignal(approved bool, modifications string)\`. You set a **timeout** using \`workflow.AwaitWithTimeout(24h)\` so the request auto-rejects if nobody responds within 24 hours. And you fire a **notification activity** as a side effect to send a Slack message or email so the human knows there's something waiting for them.
[warmly] This is the sweet spot for financial workflows, content moderation, deployment approvals — anything where AI shouldn't act alone. Now let's weigh the trade-offs.`,
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
          notes: `### Human-in-the-Loop — Pros & Cons
[conversational] Let's look at the good and the not-so-good of adding human gates to your agent.
#### ✅ Pros
[confidently] The most important benefit is **safety**. This pattern prevents your agent from taking catastrophic autonomous actions. [playfully] Think of it as seatbelts for your AI — you hope you never need them, but when you do, they save you.
[pleased] The **zero-cost wait** is really elegant. When the workflow is waiting for a human signal, it consumes absolutely no compute resources. No worker threads, no memory, nothing. The workflow is just a row in the database saying "I'm waiting." It can wait for hours, days, even weeks — and when the signal arrives, it resumes exactly where it left off.
Every approval decision is automatically recorded as an **event in the workflow history**. That gives you a complete audit trail — who approved what, when, and with what modifications. For compliance-heavy industries like finance or healthcare, this is invaluable.
#### ⚠️ Cons
[cautiously] The obvious downside is **latency**. Your agent is now gated on human response time, which could be minutes or hours. That's fine for high-stakes actions, but you don't want approval gates on every single tool call.
You need **notification plumbing** — somebody needs to build the Slack integration or email integration to notify the human that something is waiting. [seriously] And watch out for **approval fatigue** — if you put too many gates, humans start rubber-stamping everything without actually reviewing, which defeats the entire purpose.
[confidently] The best practice is **risk-based gating**. Only pause for actions above a cost or impact threshold. Low-risk tool calls like database reads or API lookups should execute automatically. Reserve the human gate for deletes, payments, and deployments. [energetic] Up next: Pattern 3 — what happens when the LLM itself fails.`,
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
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Retry Timing Example"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart LR
    A["GPT-4o<br/>Primary"] -->|"2s"| B["Retry 1"]
    B -->|"4s"| C["Retry 2"]
    C -->|"8s"| D["Retry 3"]
    D -->|"Fail"| E["Claude 3.5<br/>Fallback 1"]
    E -->|"Fail"| F["GPT-4o-mini<br/>Fallback 2"]
    F --> G["✅ Response"]
    style A fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style B fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style C fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style D fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style E fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style F fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style G fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
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
          notes: `### Pattern 3 — LLM Retry with Fallback
[seriously] This pattern handles the uncomfortable truth that **LLM APIs fail all the time**.
#### 💥 The Reality of LLM APIs
[frustrated] If you're calling OpenAI, Anthropic, or Google's APIs in production, you've seen HTTP 429 rate limits, 500 internal server errors, and 503 service unavailable responses. These aren't rare — during peak hours, they can happen on 5 to 10 percent of your calls. And when your agent is mid-task, a failed LLM call can derail the entire run.
#### 🔄 Two-Level Defense
[confidently] The key insight is separating **transient retry** from **fallback**. Transient retry means trying the **same model** again with exponential backoff — maybe the rate limit will clear in 2 seconds. Fallback means switching to a **completely different model** when the primary is persistently down.
[lecture] In practice, you'd configure your primary model — say GPT-4o — with 3 retry attempts, a 2-second initial backoff, and a 2x multiplier. If all 3 retries fail, you fall to **Fallback 1** — maybe Claude 3.5 Sonnet, which is a different provider entirely and unlikely to be down at the same time. If that fails too, you go to **Fallback 2** — something cheap and fast like GPT-4o-mini or Gemini Flash.
[pleased] Temporal handles both levels elegantly. The retry policy is a first-class config on your Activity options. The fallback chain is just workflow logic — try Activity A, catch error, try Activity B. Simple, readable, and fully observable in the Temporal UI.
[seriously] The key insight here is to separate what's retryable from what isn't. A 429 rate limit is transient — retry it. A 400 Bad Request is permanent — retrying won't help. Let's look at the trade-offs.`,
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
          notes: `### LLM Retry with Fallback — Pros & Cons
[conversational] Let's weigh what you gain and what to watch out for with this pattern.
#### ✅ Pros
[pleased] The most obvious win is **zero custom retry code**. Temporal's retry policy is declarative — you set MaxAttempts, InitialInterval, BackoffCoefficient, and MaxInterval, and Temporal handles the rest. No \`while\` loops, no \`sleep()\` calls, no manual exponential backoff math.
[excited] **Multi-provider resilience** is a game-changer. If OpenAI has an outage — and they have outages — your agent automatically falls back to Anthropic or Google. Your users might get a slightly different quality of response, but they get a response instead of an error page.
There's also a nice **cost control** angle. Instead of endlessly retrying an expensive GPT-4o call, you can fall back to a cheaper model after a few attempts. This prevents a single stuck request from racking up a huge bill.
And since each Activity is recorded in the Temporal workflow history, you can see **exactly which model served each request**. That's incredibly useful for debugging quality issues.
#### ⚠️ Cons
[cautiously] The biggest concern is **quality variance**. Your fallback model might produce worse output. If your prompts are tuned for GPT-4o's specific strengths, they might not work as well on Claude or Gemini. You need to test your prompts across all models in your fallback chain.
There's also a **total latency ceiling** to consider. If you do 3 retries on the primary, then 3 retries on Fallback 1, then 3 retries on Fallback 2, that's potentially 9 attempts with increasing backoff — which could add up to 2 minutes of total wait time.
[seriously] Pro tip: always mark \`400 Bad Request\` and \`401 Unauthorized\` as **NonRetryableErrors**. Retrying a bad prompt or an expired API key will never succeed. [energetic] Now let's shift gears to Pattern 4 — running multiple agents in parallel.`,
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
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Fan-Out Use Case: Research Agent"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    subgraph Research["🔍 Research Agent"]
        R1["Wikipedia"]
        R2["PubMed"]
        R3["arxiv"]
        R4["Stack Overflow"]
        R5["Custom KB"]
    end
    subgraph Review["🔎 Code Review"]
        C1["Security"]
        C2["Style"]
        C3["Performance"]
    end
    Research --> M["🔗 Merge<br/>Findings"]
    Review --> R["📋 Review<br/>Report"]
    style Research fill:#0d1f33,stroke:#4da6ff,stroke-width:2px,color:#e0e0e0
    style Review fill:#0d1f33,stroke:#f5a623,stroke-width:2px,color:#e0e0e0
    style R1 fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style R2 fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style R3 fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style R4 fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style R5 fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style C1 fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style C2 fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style C3 fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style M fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style R fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
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
          notes: `### Pattern 4 — Parallel Agent Fan-Out
[excited] Now we're getting into the **scaling** patterns. What do you do when a single agent loop isn't fast enough?
#### 🔀 Core Concept
[confidently] The idea is simple but powerful. You have a complex task, you break it into **independent sub-tasks**, and you run them all **at the same time**. A planner LLM decomposes the problem, Temporal launches multiple Child Workflows or parallel Activities, and an aggregator merges all the results when they're done.
[storytelling] Think of it like a research team. Instead of one person reading 5 papers one after another, you give each paper to a different person and they all read simultaneously. The total time drops from 5x to roughly 1x.
#### 🎯 Use Cases
[energetic] **Research agents** are a perfect fit — query 5 different sources like Wikipedia, PubMed, arxiv, Stack Overflow, and a custom knowledge base all at the same time, then merge the findings. **Code review** is another great example — analyze security, style, performance, and test coverage in parallel instead of sequentially. And **multi-perspective analysis** — send the same question to different model personas (optimist, pessimist, domain expert) and synthesize their viewpoints.
[conversational] The sweet spot is tasks where the sub-problems are truly **independent** — meaning the result of one doesn't depend on the result of another. If they're dependent, you need the Supervisor pattern instead. Let's see what you win and what you pay for.`,
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
          notes: `### Parallel Fan-Out — Pros & Cons
[conversational] Let's break down what you gain and what you trade off with parallel execution.
#### ✅ Pros
[excited] The most dramatic benefit is **speedup**. If you have N independent sub-tasks, they all run in roughly the same time as a single task. A research query that would take 30 seconds sequentially across 5 sources can complete in about 6 seconds with fan-out.
[pleased] **Partial failure isolation** is a big deal too. If one of your 5 child workflows fails — say the Wikipedia API is down — the other 4 still complete successfully. You can decide whether to retry the failed one, skip it, or return partial results.
Each child can run on its own **worker pool**. If one sub-task is GPU-heavy and another is I/O-heavy, Temporal lets you route them to different task queues with appropriately sized workers. And you get **flexible aggregation strategies** — wait for all N results, take the first result that comes back (race), or use a K-of-N quorum where you proceed once you have enough results.
#### ⚠️ Cons
[cautiously] The biggest concern is **token cost**. If you fan out to N parallel LLM calls, you're paying N times the prompt cost. That adds up fast, especially with large prompts and expensive models.
**Aggregation quality** is its own challenge. Merging N different outputs into a coherent final answer is harder than it sounds. The LLM-based aggregator needs to reconcile potentially contradictory information and synthesize cleanly.
[seriously] And watch out for **rate limits**. If you launch 10 concurrent LLM calls against the same provider, you'll hit their rate limit quota much faster than with sequential calls. Stagger your fan-out or use multiple API keys.
[warmly] Practical tip: use Temporal's **Child Workflow** for complex sub-tasks that need their own retries, or simple parallel **Activities** for lightweight tool calls. Now let's talk about giving our agent a memory.`,
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
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Memory Tier Lifecycle"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    A["💬 User Message"] --> B["📝 Append to<br/>Short-Term"]
    B --> C["🧠 Agent Reasons<br/>on Working Memory"]
    C --> D["📤 Generate<br/>Response"]
    D --> E{"Session<br/>Ending?"}
    E -->|"Yes"| F["📊 Summarize →<br/>Long-Term DB"]
    E -->|"No"| B
    F --> G["🗄️ Vector DB<br/>Cross-Session"]
    style A fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style B fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style C fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style D fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style F fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style G fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
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
          notes: `### Pattern 5 — Agent Memory Persistence
[warmly] Every useful AI agent needs **memory** — the ability to remember what happened earlier in the conversation and across sessions. Let's see how Temporal makes this surprisingly elegant.
#### 🧠 Core Concept
[enthusiastically] Here's the beautiful thing about Temporal workflows: **local variables are durable**. If you declare a list variable called \`chatHistory\` inside your workflow, Temporal automatically preserves it across crashes. No Redis, no database writes — the workflow state itself is your short-term memory.
#### 🏗️ Memory Tiers
[lecture] We think about agent memory in three tiers. **Short-term memory** is the conversation history — the last 10 to 50 chat turns stored as a simple list variable in the workflow. It survives crashes for free because Temporal replays the workflow to reconstruct those variables.
**Working memory** is the agent's scratchpad — its current plan, intermediate reasoning steps, tool results it's accumulated. This is also a workflow variable, and you can expose it via a Temporal **Query** so external systems can inspect what the agent is thinking in real-time.
[conversational] **Long-term memory** lives outside the workflow. An Activity writes summarized conversation history or learned facts to a **vector database** like Pinecone 👉 'pine-CONE' or Pgvector 👉 'pee-gee-VECTOR'. This memory persists across workflow completions, so when a user comes back tomorrow, the agent can retrieve relevant context from previous sessions.
[warmly] This is the sweet spot for chatbots, personal assistants, and any agent that needs context across turns or sessions. Let's look at the trade-offs.`,
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
          notes: `### Agent Memory — Pros & Cons
[conversational] Let's talk about what works beautifully and what requires careful thought with memory persistence.
#### ✅ Pros
[pleased] The standout advantage is **zero-effort persistence**. You don't need to set up a database for short-term memory. Just use a workflow variable — Temporal handles the durability automatically. This is a massive simplification compared to building your own Redis-backed session store.
[enthusiastically] Your agent's memory is also **queryable in real-time**. Using Temporal Queries, you can inspect what the agent remembers right now — what's in its chat history, what's in its working scratchpad. This is incredibly useful for debugging and monitoring.
[confidently] **Graceful compaction** via Continue-As-New solves the history growth problem. When your conversation gets long, you summarize the old turns via an LLM Activity, carry the summary forward, and reset the workflow. The user doesn't notice anything — the agent keeps working smoothly with compressed context.
And for **cross-session memory**, pushing summaries to a vector DB means the agent remembers the user even after the workflow completes. Next time the user shows up, the new workflow queries the vector DB and loads relevant context.
#### ⚠️ Cons
[cautiously] **History growth** is the main technical challenge. Every new chat turn adds events to the workflow. A long conversation with hundreds of turns will bloat your event history and slow down replays. That's why Continue-As-New every 50 or so turns is essential.
[concerned] **Summarization quality** is a real concern. When you compress 50 turns into a summary using an LLM, you inevitably lose detail. The agent might forget something important from earlier in the conversation. You need to test your summarization prompts carefully.
And if you want cross-session memory, you'll need **external database infrastructure** — a vector DB like Pinecone, Weaviate 👉 'WEE-vee-ate', or Pgvector. That's additional infra to deploy and manage.
[confidently] Best practice: trigger Continue-As-New every ~50 turns. Summarize old turns via an Activity before resetting. [energetic] On to the multi-agent patterns — starting with the Supervisor.`,
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
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Child Workflow Blast Radius"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    A["🔧 Child WF<br/>Crashes"] --> B{"Parent<br/>Catches Error"}
    B -->|"Retry"| C["🔄 Restart<br/>Same Agent"]
    B -->|"Skip"| D["⏭️ Continue<br/>Without"]
    B -->|"Alternative"| E["🔀 Try Different<br/>Agent"]
    F["Other Children<br/>✅ Unaffected"] -.-> G["Same Agent<br/>Reusable Across<br/>Supervisors"]
    style A fill:#5c1a1a,color:#fecaca,stroke:#bbb,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style D fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style E fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style F fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style G fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
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
          notes: `### Pattern 6 — Supervisor Agent
[excited] Now we're entering multi-agent territory. This pattern is how you build **teams of AI agents** that work together.
#### 🏗️ Core Concept
[storytelling] Think of a manager delegating work to specialists. You have a **parent "supervisor" workflow** that receives a complex request from the user. The supervisor LLM decides which specialist agent to call first, fires it as a **Child Workflow**, gets the results back, and decides what to do next. Maybe it sends the output to a reviewer agent, or asks the writer agent to revise based on feedback.
[confidently] Each child agent is a **full Temporal workflow** — it has its own tool-calling loop (Pattern 1), its own retry policy, and its own state. The supervisor doesn't care about the internals of each agent. It just calls them and collects results.
#### 🧩 Why Child Workflows?
[pleased] The biggest advantage is **blast radius containment**. If one child agent crashes or produces garbage, the supervisor can catch the error and decide what to do — retry that agent, skip it, or try a different agent. The other children aren't affected.
**Composability** is another win. You can reuse the same analyst agent workflow in different supervisor pipelines. One supervisor might use it for financial reports, another for market research. Same code, different context.
[conversational] And because each child can run on a **different task queue**, you can put your GPU-heavy agent on GPU workers and your text-processing agent on cheaper CPU-only workers. Temporal handles the routing.
[warmly] This pattern shines for complex multi-step tasks — report generation, code review pipelines, multi-stage research projects. Let's see the trade-offs.`,
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
          notes: `### Supervisor Agent — Pros & Cons
[conversational] The Supervisor pattern is powerful but comes with complexity. Let's break it down.
#### ✅ Pros
[pleased] **Modularity** is the headline benefit. Adding a new agent role — say a "fact-checker" — means creating a new Child Workflow and adding one case to the supervisor's routing logic. You don't touch any existing agent code.
[enthusiastically] **Dynamic routing** is where the LLM intelligence shines. The supervisor doesn't use a fixed pipeline. It calls the LLM to decide **which agent to invoke next** based on the current context and accumulated results. This means the agent team can adapt to unexpected inputs — if the analysis reveals a data quality issue, the supervisor might loop in a data-cleaning agent that wasn't in the original plan.
[confidently] **Fault isolation** means one agent crashing doesn't kill the entire pipeline. The supervisor catches the error from the failed Child Workflow and can retry it, skip it, or substitute an alternative. And you get a **beautiful trace** in the Temporal UI — the parent-child hierarchy is visible as a tree, so you can drill into exactly what each agent did.
#### ⚠️ Cons
[cautiously] Every routing decision requires an **extra LLM call** to the supervisor. If your pipeline has 5 steps, that's 5 additional LLM calls just for routing. With expensive models like GPT-4o, this overhead adds up.
[concerned] **Deep nesting** makes debugging harder. If you have a supervisor calling an agent that calls a sub-agent, you're three levels deep and tracing failures across those levels requires careful attention.
And **latency stacks** when children run serially. If the supervisor calls Agent A, waits for it, then calls Agent B, the total time is the sum of all agent execution times. Consider whether some children can run in parallel using Pattern 4.
[seriously] A good rule of thumb: limit nesting to **2 levels max** — supervisor and agent. If you're going deeper, it's a sign you need a better task decomposition. [energetic] Next up: a simpler alternative — Agent Handoff.`,
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
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Dynamic Re-Routing via Signal"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    A["💬 User asks<br/>billing question"] --> B["🧠 Router →<br/>Billing Agent"]
    B --> C["💳 Billing Agent<br/>handles turns"]
    C --> D["💬 User shifts to<br/>tech question"]
    D --> E["📡 Signal Parent:<br/>Re-classify"]
    E --> F["🧠 Router →<br/>Support Agent"]
    F --> G["🔧 Support Agent<br/>takes over"]
    style A fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style D fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style F fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style G fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
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
          notes: `### Pattern 7 — Agent Handoff / Routing
[conversational] This is the **simpler cousin** of the Supervisor pattern. Instead of an iterative orchestrator, you have a one-shot router.
#### 🎯 Core Concept
[storytelling] Picture a customer support system. A user sends a message, and a **router** — which is just a small, fast LLM call — classifies the intent. Is this a billing question? Route to the Billing Agent. Technical issue? Route to the Support Agent. Sales inquiry? Route to the Sales Agent. Can't handle it? Escalate to a human.
[confidently] The key difference from the Supervisor pattern is that the router does **one-shot classification** — it doesn't loop. It classifies once, hands off to the right specialist, and that specialist handles the conversation from there.
#### 🔧 Temporal Implementation
[lecture] The **Router Activity** is a small, cheap LLM call — you'd use something like GPT-4o-mini here because all it needs to do is return an intent enum. The workflow code then does a simple switch statement to dispatch to the right **Child Workflow** based on the returned intent.
[pleased] Here's a nice Temporal-specific feature: if the conversation **shifts topic** mid-way — say the user starts asking about billing but then switches to a technical question — the specialist agent can **Signal the parent** to re-classify and hand off to a different agent. This gives you dynamic re-routing without the complexity of a full supervisor loop.
[warmly] This pattern is perfect for customer support bots, multi-department assistants, and any system with **distinct agent specialties**. Let's compare the trade-offs.`,
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
          notes: `### Agent Handoff — Pros & Cons
[conversational] Let's compare what makes Handoff great and where it falls short.
#### ✅ Pros
[pleased] **Low latency** is the top advantage. You make one quick classification call, then you're directly in the specialist agent. Compare that to the Supervisor which makes an LLM call at every step to decide what to do next. For a customer service bot where response time matters, this speed difference is significant.
[confidently] Each specialist agent has **domain-specific prompts** fine-tuned for its area. The billing agent knows about invoices and payment methods. The technical agent knows about error codes and configurations. This specialization produces much better answers than a single generalist agent trying to handle everything.
The pattern is **simple to reason about**. There's no complex multi-step planning — just classify and dispatch. New developers on your team can understand it immediately.
[pleased] And Temporal's Signal mechanism enables **re-routing** if the conversation changes direction. The specialist can signal the parent, saying "this is actually a billing question, not a technical one," and the parent can hand off to a different agent seamlessly.
#### ⚠️ Cons
[cautiously] **Classification errors** are the Achilles' heel. If the router sends a billing question to the technical agent, the user gets a bad answer. You need to test and tune your classification prompt carefully, especially for ambiguous requests.
[concerned] This pattern **doesn't compose well** for multi-step tasks. If the user's request requires analysis, then writing, then review — you need the Supervisor pattern instead. Handoff is designed for "route to the right expert," not "orchestrate a pipeline."
And maintaining **N separate system prompts** — one for each specialist — is an ongoing maintenance burden. Every time your product changes, you might need to update multiple prompts.
[confidently] Pro tip: use a **small, fast model** like GPT-4o-mini for the routing classification. Save the big, expensive model for the specialist agent that actually does the work. [energetic] Now let's move to Pattern 8 — real-time streaming.`,
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
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Heartbeat vs Update Approach"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    subgraph HBQ["Heartbeat + Query"]
        H1["Activity heartbeats<br/>every 100ms"]
        H2["WF stores in<br/>local variable"]
        H3["Client polls<br/>Query handler"]
    end
    subgraph UPD["Update Handler"]
        U1["Client calls<br/>Update"]
        U2["WF forwards<br/>tokens back"]
        U3["Server-push<br/>semantics"]
    end
    H1 --> H2 --> H3
    U1 --> U2 --> U3
    style HBQ fill:#0d1f33,stroke:#4da6ff,stroke-width:2px,color:#e0e0e0
    style UPD fill:#0d1f33,stroke:#f5a623,stroke-width:2px,color:#e0e0e0
    style H1 fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style H2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style H3 fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style U1 fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style U2 fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style U3 fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px`}
                    />
                  </div>
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
          notes: `### Pattern 8 — Streaming Token Relay
[conversational] This pattern bridges the gap between Temporal's durable execution and the **real-time user experience** that modern chat UIs demand.
#### ⚡ The Problem
[concerned] Users expect to see LLM output appearing character by character — the typewriter effect you see in ChatGPT. But if your LLM call is wrapped in a Temporal Activity, the client normally has to wait until the entire Activity completes before seeing any output. [disappointed] For a 30-second generation, that's 30 seconds of staring at a blank screen. Not great.
#### 🏗️ How It Works
[confidently] The trick is to use Temporal's **Activity heartbeating** mechanism for a purpose it wasn't originally designed for. [lecture] When your LLM Activity receives streaming tokens, it batches them up — say every 5 to 10 tokens or every 100 milliseconds — and sends them as **heartbeat details** to the Temporal server. The workflow stores these tokens in a local variable.
The client then uses a **Temporal Query** to read the latest tokens. Because Queries are synchronous and fast, the client can poll every 100 to 200 milliseconds and display tokens as they arrive. [cautiously] It's not quite as smooth as a direct WebSocket connection, but it's close enough for most use cases.
[pleased] There's also a newer approach using Temporal's **Update Handler**. The client calls an Update, and the workflow pushes tokens back through the Update response. This gives you server-push semantics with lower latency, though the API is still evolving.
[warmly] This is perfect for chat UIs, live dashboards, and any front-end that expects typewriter-style output from a durable backend. Let's look at the trade-offs.`,
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
          notes: `### Streaming Token Relay — Pros & Cons
[conversational] Streaming through Temporal is a clever hack, but it comes with real trade-offs.
#### ✅ Pros
[pleased] The most important win is **perceived latency**. The first token can be visible to the user in under a second, even though the full generation might take 20 to 30 seconds. This dramatically improves the user experience — users feel like the system is responding immediately.
[confidently] You get **durable streaming**. If the worker crashes mid-generation, Temporal replays the workflow and the Activity heartbeat details show where it left off. The client can resume from the last batch of tokens instead of starting over from scratch.
[pleased] And you don't need to build any **WebSocket infrastructure**. Temporal handles the transport layer — the heartbeat-to-Query pipeline works with Temporal's existing gRPC 👉 'gee-RPC' connections. No additional load balancers, no WebSocket servers, no sticky sessions.
#### ⚠️ Cons
[cautiously] Frequent **heartbeats add server load**. If you heartbeat every 100 milliseconds for a 30-second generation, that's 300 heartbeat calls. The Temporal server can handle this, but at scale with thousands of concurrent generations, it's something to monitor.
[concerned] The **polling approach adds jitter**. If the client polls every 200 milliseconds, there's inherently a 0 to 200 millisecond delay between when a token is heartbeated and when the client sees it. Users won't notice on individual tokens, but it's not as smooth as a direct stream.
[seriously] Managing **partial token state** is non-trivial in your code. You need to track which tokens the client has already seen, handle out-of-order deliveries, and clean up after the generation completes.
[cautiously] And the **Update API** is still evolving — check your SDK version for compatibility before relying on it in production.
[confidently] Practical tip: batch tokens into chunks of 5 to 10 per heartbeat. This reduces overhead while keeping the UX smooth enough. [energetic] Now let's look at our final pattern — Multi-Model Ensemble.`,
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
                <div style={{ marginBottom: '0.7em', position: 'relative' }}>
                  <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
                    <MermaidPopover
                      title="Aggregation Strategy Decision"
                      diagram={`%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
flowchart TD
    A["3 Model<br/>Responses"] --> B{"Task Type?"}
    B -->|"Open-ended"| C["🏆 Judge Model<br/>Ranks & picks best"]
    B -->|"Classification"| D["✅ Majority Vote<br/>Most common answer"]
    B -->|"Research"| E["🔗 Merge & Synthesize<br/>Combine insights"]
    C --> F["Flexible but<br/>+1 LLM call"]
    D --> G["No extra cost<br/>Simple counting"]
    E --> H["Richest output<br/>Needs judge step"]
    style A fill:#1a3a5c,color:#93c5fd,stroke:#aaa,stroke-width:1.5px
    style B fill:#3d2e00,color:#fde68a,stroke:#aaa,stroke-width:1.5px
    style C fill:#2d1b4e,color:#e0c0ff,stroke:#aaa,stroke-width:1.5px
    style D fill:#1b4332,color:#d1fae5,stroke:#aaa,stroke-width:1.5px
    style E fill:#3d1f00,color:#fed7aa,stroke:#aaa,stroke-width:1.5px
    style F fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style G fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px
    style H fill:#2a2a3a,color:#e0e0e0,stroke:#888,stroke-width:1.5px`}
                    />
                  </div>
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
          notes: `### Pattern 9 — Multi-Model Ensemble Overview
[excited] Our ninth and final pattern is the Multi-Model Ensemble. This one is all about using **multiple LLMs** to get better answers than any single model can provide.
#### Core Concept
[confidently] The idea is simple but powerful. You take the same prompt and send it to **two or three different LLMs in parallel** — GPT-4o, Claude 3.5, Gemini Pro, whatever combination you like. Each model generates its own response. Then a separate **aggregation step** picks or merges the best answer.
[lecture] In Temporal terms, this is a natural extension of Pattern 4 — Fan-Out. Each model call is a separate Activity running in parallel. The aggregation step is just another Activity that runs after all the model calls complete.
#### Three Aggregation Strategies
You have three main options for combining the results.
[storytelling] First, a **judge model**. You send all N responses to a separate LLM — often a more powerful or cheaper one — and ask it to rank them or pick the best. This is the most flexible approach but adds one more serial LLM call after the fan-out.
Second, **majority voting**. For classification tasks — spam or not spam, positive or negative sentiment — you simply count which answer appears most. If two out of three models say "positive", that's your answer. No extra LLM call needed.
Third, **merge and synthesis**. For open-ended tasks like research summaries, you combine the unique insights from each model's output into a single richer answer. This requires a judge-style step but produces the highest-quality output.
#### Why Temporal Fits
[pleased] This pattern combines **Fan-Out** for parallel execution with **Fallback** for resilience. If one provider is down, the remaining models still produce answers. You get graceful degradation built in.
[warmly] The sweet spot is high-stakes decisions — medical triage, legal analysis, security assessments — where one model's blind spots are covered by another. Now let's look at the trade-offs.`,
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
          notes: `### Multi-Model Ensemble — Pros & Cons
[conversational] Let's weigh the trade-offs for ensembles.
#### ✅ Pros
[pleased] The biggest win is **higher accuracy**. Different models have different strengths — GPT-4o might be better at code, Claude at nuanced reasoning, Gemini at factual recall. When you combine them, each model covers the other's blind spots. [confidently] Studies consistently show ensemble approaches outperform single models by 5 to 15 percent on accuracy benchmarks.
You get built-in **resilience**. If one LLM provider has an outage — and they all do — the other models still produce answers. Your system degrades gracefully instead of failing completely.
[pleased] Ensembles give you a **confidence signal**. When all three models agree on an answer, you can have high confidence it's correct. When they disagree, you know the question is ambiguous or difficult — you can flag it for human review.
[confidently] And because Temporal runs the Activities in parallel, the **wall-clock latency** is the same as calling a single model. You're paying more in tokens, but not in time.
#### ⚠️ Cons
[cautiously] The most obvious cost is **N times the token usage**. If you call three models, you pay three times the token cost. For a 10,000-token prompt, that's 30,000 tokens per request. At scale, this adds up quickly.
[concerned] If you use a **judge model** for aggregation, that's an additional serial step after the fan-out completes. This adds both latency and cost — the judge needs to read all N responses before producing a verdict.
[seriously] **Prompt portability** is trickier than it sounds. The same prompt might produce structured JSON from one model and free-form text from another. You need output format normalization before the aggregation step can compare apples to apples.
[confidently] The practical tip here is to use ensembles **selectively**. Route routine, low-stakes tasks to a single fast model. Reserve the ensemble for high-value decisions where accuracy really matters — fraud detection, medical classification, legal analysis.
[energetic] That covers all nine patterns! Let's wrap up with a summary cheat sheet.`,
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
          notes: `### Cheat Sheet — 9 Patterns Compared
[conversational] Here's a quick-reference table that compares all nine patterns across three dimensions: **complexity**, **token cost**, and **latency**. Let's walk through this column by column.
#### Complexity
[lecture] The simplest patterns are numbers 1 through 3 — Durable Tool Loop, Human-in-the-Loop, and LLM Retry. These are all **green, low complexity**. You can implement any of them in under 100 lines of Temporal workflow code.
Patterns 4, 5, 7, and 8 — Fan-Out, Memory, Handoff, and Streaming — are **medium complexity**. They add one extra dimension like parallelism or state management.
[seriously] Patterns 6 and 9 — Supervisor and Multi-Model Ensemble — are the most complex. These are **red, high complexity** because they involve multiple coordinated workflows or multiple LLM providers.
#### Token Cost
[conversational] Human-in-the-Loop and Streaming Relay have the lowest token costs — they don't add extra LLM calls. [cautiously] The Supervisor and Ensemble patterns have the highest costs because they either add orchestration LLM calls or multiply the base prompt across multiple models.
#### Latency
[confidently] Fan-Out, Memory, Handoff, and Streaming all achieve **low latency** — either through parallelism or by avoiding extra serial steps. [concerned] The Supervisor pattern has the highest latency because every routing decision requires an LLM round-trip.
Note the asterisk on Human-in-the-Loop — its latency depends on the human, not the compute. A workflow might wait 30 seconds or 3 days for an approval.
#### Adoption Path
[warmly] My recommended adoption path: start with Pattern 1 as your foundation, add Pattern 3 for resilience — that costs you almost nothing — then layer on patterns 2 and 5 as your requirements evolve. [confidently] Save patterns 6 and 9 for when you genuinely need multi-agent coordination or ensemble quality.
[pleased] Check the MermaidPopover for a decision flowchart that walks you through choosing the right pattern based on your use case. [energetic] Now let's close with five actionable takeaways.`,
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
          notes: `### Key Takeaways
[inspiringly] Let's wrap up with five actionable takeaways you can apply right away.
#### Takeaway 1 — Start with Pattern Number 1
[confidently] Every AI agent needs a **durable tool-calling loop** as its foundation. This is the ReAct pattern — reason, act, observe — running inside a Temporal Workflow. It gives you crash recovery, automatic retries, and a complete audit trail from day one. If you build nothing else, build this.
#### Takeaway 2 — Layer Patterns Incrementally
[warmly] Don't try to implement all nine patterns at once. Add them as your requirements grow. Start with the tool loop. Add a **human gate** when you have high-stakes actions. Add **retry and fallback** when you need multi-provider resilience. Add **memory persistence** when you need multi-turn conversations. Each pattern is designed to compose cleanly with the others.
#### Takeaway 3 — Use Continue-As-New
[seriously] This is the most commonly missed best practice. Temporal Workflows build up an event history over time. For long-running agent sessions — think thousands of tool calls — this history can grow to gigabytes. [confidently] The solution is **Continue-As-New** 👉 'continue as new': snapshot your state, close the current workflow, and start a fresh one. This keeps your history bounded and your performance predictable.
#### Takeaway 4 — Make Every Activity Idempotent
[cautiously] Temporal's replay mechanism means your Activities **may execute more than once**. If your agent calls a payment API and the worker crashes, Temporal will retry that Activity. [concerned] If the API call already succeeded, you'll get a double charge unless the Activity is idempotent 👉 'eye-dem-POH-tent'. [confidently] Use idempotency keys, check-before-write patterns, and conditional updates.
#### Takeaway 5 — Compose, Don't Monolith
[pleased] Instead of building a single massive workflow with 1000 lines of orchestration logic, use the **Supervisor pattern**. Break your agent into focused child workflows — one for research, one for code generation, one for review. The parent coordinates. Each child can be tested, versioned, and scaled independently.
#### Final Thought
[inspiringly] The closing message says it all: Temporal turns fragile AI agents into **production-grade, crash-proof systems**. The patterns we've covered today give you a proven architectural playbook. [warmly] Start simple, layer incrementally, and build with confidence.
[excited] Thank you for watching — and check the MermaidPopover for a pattern composition roadmap showing the recommended adoption sequence. Happy building!`,
        },
      ],
    },
  ],
};
