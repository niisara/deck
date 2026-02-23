
## Task

Find all `MermaidPopover` components in this file. For each one, update the inline Mermaid `diagram` string to be visually clear on a dark background. Do not change anything outside the `diagram` prop strings.

---

## Rules to Apply to Every Diagram

### 1. Replace the `%%{init: ...}%%` block

Use this on every diagram:

```
%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','secondaryColor':'#1e1e2e','tertiaryColor':'#252535','edgeLabelBackground':'rgba(0,0,0,0.6)','clusterBkg':'rgba(30,30,50,0.7)','clusterBorder':'rgba(255,255,255,0.25)'}}}%%
```

Key effects:
- `lineColor` → connectors and arrows become white/visible
- `primaryBorderColor` → default node borders become visible
- `edgeLabelBackground` → edge label text readable on dark bg

---

### 2. Every node must have an explicit `style` line

If a node has no `style` line, add one using the default dark-neutral style:

```
style <NODE_ID> fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
```

> ⚠️ **Do NOT use `rgba()` in `style` lines.** Mermaid's diagram parser does not support parentheses in style values and will throw a parse error. Use flat hex colors for all stroke values. `rgba()` is only valid inside the `%%{init}%%` JSON block (theme variables).

---

### 3. Remap light/pastel fills to dark equivalents

| Original fill | Replace with | Text color |
|---|---|---|
| `#e3f2fd` (light blue) | `#1a3a5c` | `#fff` |
| `#c8e6c9` (light green) | `#1b4332` | `#d1fae5` |
| `#fff9c4` (light yellow) | `#3d2e00` | `#fde68a` |
| `#ffcdd2` (light red) | `#5c1a1a` | `#fecaca` |
| `#1a1a1a` (near-black) | `#0f0f1a` | `#fff` |
| `#c62828` (dark red) | keep | `#fff` |
| any other light/pastel | nearest dark semantic equivalent | light tint |

---

### 4. Stroke on every node

Every `style` line must include `stroke-width:1.5px` and a flat hex stroke color. Use the following mappings:

| Node type | Stroke hex |
|---|---|
| Colored/accent fill (blue, amber, red) | `stroke:#aaaaaa` |
| Dark/neutral fill (`#2a2a3a`, `#0f0f1a`) | `stroke:#888888` |
| High-danger fill (`#5c1a1a`, `#c62828`) | `stroke:#bbbbbb` |

> ⚠️ Never use `rgba()` in `style` lines — Mermaid's parser cannot handle parentheses there.

---

### 5. Subgraph containers

If the diagram uses `subgraph` blocks, apply dark fill and colored border:

```
style <SUBGRAPH_ID> fill:#0d1f33,stroke:#777777,stroke-width:2px,color:#e0e0e0
```

Use a colored stroke accent (e.g. `#4da6ff`, `#f5a623`, `#e53935`) if the subgraph carries a semantic meaning (info/warn/danger). Flat hex is required — no `rgba()` in style lines.

---

### 6. Contrast rule (always)

- Never use `color:#000` on any node — it will be invisible on dark backgrounds
- Light/colored fill → `color:#fff` or a light tint matching the fill hue
- Dark fill → `color:#fff`

---

## Visual Tone

These diagrams render inside a dark glassmorphism popover. They should feel like dimly-lit documents — not bright clinical charts:

- Node backgrounds: deep navy, charcoal, dark red, dark amber
- Borders: faint white glow
- Text: off-white (`#e0e0e0`, `#f0f0f0`, or light tints)
- Connectors: soft white (`rgba(255,255,255,0.7)`)
- No bright pastels anywhere

---

## Example — Before and After

**Before:**
```
%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
flowchart TB
    A["💭 Thought is crystal clear"] --> B["🗣️ Mouth won't cooperate"]
    B --> C["Others jump in, finish your sentences"]
    C --> D{"Do they get it right?"}
    D -->|"Yes"| E["Partial relief — but it wasn't yours"]
    D -->|"No"| F["You are corrected about your own intentions"]
    F --> G["🤐 You nod — correcting them is too tiring"]
    style A fill:#e3f2fd,color:#000
    style G fill:#ffcdd2,color:#000
    style F fill:#fff9c4,color:#000
    style E fill:#c8e6c9,color:#000
```

**After:**
```
%%{init: {'theme':'base','themeVariables':{'fontSize':'13px','primaryColor':'#2a2a3a','primaryTextColor':'#f0f0f0','primaryBorderColor':'rgba(255,255,255,0.4)','lineColor':'rgba(255,255,255,0.7)','edgeLabelBackground':'rgba(0,0,0,0.6)'}}}%%
flowchart TB
    A["💭 Thought is crystal clear"] --> B["🗣️ Mouth won't cooperate"]
    B --> C["Others jump in, finish your sentences"]
    C --> D{"Do they get it right?"}
    D -->|"Yes"| E["Partial relief — but it wasn't yours"]
    D -->|"No"| F["You are corrected about your own intentions"]
    F --> G["🤐 You nod — correcting them is too tiring"]
    style A fill:#1a3a5c,color:#fff,stroke:#aaaaaa,stroke-width:1.5px
    style B fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style C fill:#2a2a3a,color:#e0e0e0,stroke:#888888,stroke-width:1.5px
    style D fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style E fill:#1b4332,color:#d1fae5,stroke:#aaaaaa,stroke-width:1.5px
    style F fill:#3d2e00,color:#fde68a,stroke:#aaaaaa,stroke-width:1.5px
    style G fill:#5c1a1a,color:#fecaca,stroke:#bbbbbb,stroke-width:1.5px
```
