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
          notes: '',
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
          notes: '',
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
          notes: '',
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
          notes: '',
        },
        {
          id: 5,
          title: '1. Worker Scaling — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
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
          notes: '',
        },
        {
          id: 6,
          title: '1. Worker Scaling — Pros & Cons',
          icon: { name: 'duo-split' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
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
          notes: '',
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
          notes: '',
        },
        {
          id: 8,
          title: '2. Task Queue Routing — How It Works',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInBottom" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
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
          notes: '',
        },
        {
          id: 9,
          title: '2. Task Queue Routing — Pros & Cons',
          icon: { name: 'duo-split' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
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
          notes: '',
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
          notes: '',
        },
        {
          id: 11,
          title: '3. Versioning — Patching API Deep Dive',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
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
          notes: '',
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
          notes: '',
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
          notes: '',
        },
        {
          id: 14,
          title: '4. Observability — Key Metrics & Alerts',
          icon: { name: 'duo-bell' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <h4>Critical Metrics to Monitor</h4>
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
          notes: '',
        },
        {
          id: 15,
          title: '4. Observability — Pros & Cons',
          icon: { name: 'duo-split' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
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
          notes: '',
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
          notes: '',
        },
        {
          id: 17,
          title: '5. Multi-Cluster — How It Works',
          icon: { name: 'duo-gears' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInBottom" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
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
          notes: '',
        },
        {
          id: 18,
          title: '5. Multi-Cluster — Pros & Cons',
          icon: { name: 'duo-split' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
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
          notes: '',
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
          notes: '',
        },
        {
          id: 20,
          title: '6. Nexus — How It Works',
          icon: { name: 'duo-gear' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
              <GSAPAnimated animation="slideInTop" delay={0.1}>
                <div style={{ marginBottom: '0.7em' }}>
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
          notes: '',
        },
        {
          id: 21,
          title: '6. Nexus — Pros & Cons',
          icon: { name: 'duo-split' },
          content: (
            <div style={{ fontSize: '1.15rem', lineHeight: '1.8', textAlign: 'left' }}>
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
          notes: '',
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
          notes: '',
        },
        /* ---------- Key Takeaways ---------- */
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
          notes: '',
        },
      ],
    },
  ],
};
