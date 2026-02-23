Infer the deck topic, category, and techniques from the filename provided. 

## Purpose
Add interactive MermaidPopover diagrams as inline clickable badges to slides, making technical concepts more engaging and visual during presentations without adding vertical space or requiring scrolling.
## When to Use This Pattern
Add MermaidPopover diagrams when slides contain:
- Example walkthroughs or calculations
- Step-by-step explanations
- Comparative scenarios
- Formula applications with concrete numbers
- Confusion matrices or tables
- Multi-step processes

## Implementation Pattern

### 1. Identify Target Locations
Look for sections with:
- A "When to Use" section with bullet points
- A "Formula" section with equations and/or bullet points
- A "How It Works" section with explanatory content
- Any informational section with bullet points
- Concrete numerical examples in the speaker notes
- Scenarios comparing different outcomes
- Text in notes that walks through specific cases

### 2. Add Inline Badge with MermaidPopover

**General Structure:**
```tsx
<GSAPAnimated animation="fadeIn" delay={0.6}>
  <div style={{ marginBottom: '0em', position: 'relative' }}>
    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
      <MermaidPopover
        title="Descriptive Diagram Title"
        diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
graph TB
    // Your mermaid diagram code here
        `}
      />
    </div>
    <h4>When to Use</h4>
    <ul style={{ fontSize: '0.5em' }}>
      <li>Your existing bullet points here</li>
    </ul>
  </div>
</GSAPAnimated>
```

**Note:** Replace "When to Use" with appropriate heading: "Formula", "How It Works", etc.

### 3. Placement Guidelines
- Add to an existing section (typically "When to Use", "Formula", or "How It Works")
- Make the parent div `position: 'relative'`
- Place MermaidPopover in absolutely positioned div: `top: '-5px', right: 0`
- DO NOT create a separate GSAPAnimated section
- DO NOT add h4 wrapper around the MermaidPopover
- DO NOT add helper text (p tag) below the badge
- The MermaidPopover component itself is clickable and will show a tooltip on hover

### 4. Key Changes from Previous Pattern
❌ **OLD (Don't do this):**
```tsx
<GSAPAnimated animation="fadeIn" delay={0.9}>
  <div>
    <h4>
      Example Calculation
      <MermaidPopover ... />
    </h4>
    <p>Click to see...</p>
  </div>
</GSAPAnimated>
```

OR

```tsx
<GSAPAnimated animation="fadeIn" delay={0.3}>
  <div>
    <h4>
      Formula
      <MermaidPopover ... />
    </h4>
    <ul>...</ul>
  </div>
</GSAPAnimated>
```

✅ **NEW (Do this):**
```tsx
<GSAPAnimated animation="fadeIn" delay={0.6}>
  <div style={{ position: 'relative' }}>
    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
      <MermaidPopover ... />
    </div>
    <h4>When to Use</h4>
    <ul>...</ul>
  </div>
</GSAPAnimated>
```

## Example Templates

### Template 1: Calculation Example
```tsx
<GSAPAnimated animation="fadeIn" delay={0.6}>
  <div style={{ marginBottom: '0em', position: 'relative' }}>
    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
      <MermaidPopover
        title="Step-by-Step Calculation Example"
        diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'14px'}}}%%
graph TB
    Input["📊 Input Data"] --> Step1["Step 1: Calculate X"]
    Step1 --> Step2["Step 2: Calculate Y"]
    Step2 --> Result["✅ Result = Z"]
    
    style Input fill:#e3f2fd,color:#000
    style Result fill:#c8e6c9,color:#000
        `}
      />
    </div>
    <h4>When to Use</h4>
    <ul style={{ fontSize: '0.5em' }}>
      <li>Your use case here</li>
    </ul>
  </div>
</GSAPAnimated>
```

### Template 2: Multiple Scenarios
```tsx
<GSAPAnimated animation="slideInRight" delay={0.6}>
  <div style={{ marginBottom: '0em', position: 'relative' }}>
    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
      <MermaidPopover
        title="Scenario Comparison Examples"
        diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
graph TB
    subgraph Case1["✅ Success Case"]
        C1["Input → Process → Output ✅"]
    end
    
    subgraph Case2["❌ Failure Case"]
        C2["Input → Error → Failed ❌"]
    end
    
    style Case1 fill:#c8e6c9,stroke:#4caf50,stroke-width:2px,color:#000
    style Case2 fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:#000
        `}
      />
    </div>
    <h4>When to Use</h4>
    <ul style={{ fontSize: '0.5em' }}>
      <li>Your use cases</li>
    </ul>
  </div>
</GSAPAnimated>
```

### Template 3: Confusion Matrix / Table
```tsx
<GSAPAnimated animation="slideInBottom" delay={0.7}>
  <div style={{ marginBottom: '0em', position: 'relative' }}>
    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
      <MermaidPopover
        title="Confusion Matrix Example"
        diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
graph TB
    subgraph Matrix["Matrix (Actual vs Predicted)"]
        Header["     | A | B | C |"]
        Row1["A    | 90| 5 | 2 |"]
        Row2["B    | 8 | 85| 3 |"]
        Row3["C    | 1 | 2 | 92|"]
    end
    
    subgraph Insight["Key Insights"]
        I1["✅ A: 93% accuracy"]
        I2["✅ C: 97% accuracy"]
        I3["⚠️ Main confusion: A ↔️ B"]
    end
    
    Matrix --> Insight
    
    style Matrix fill:#e3f2fd,stroke:#1976d2,stroke-width:2px,color:#000
    style Insight fill:#fff9c4,stroke:#f57c00,stroke-width:2px,color:#000
        `}
      />
    </div>
    <h4>When to Use</h4>
    <ul style={{ fontSize: '0.5em' }}>
      <li>Diagnosing patterns and issues</li>
    </ul>
  </div>
</GSAPAnimated>
```

### Template 4: Multi-Step Process
```tsx
<GSAPAnimated animation="fadeIn" delay={0.6}>
  <div style={{ marginBottom: '0em', position: 'relative' }}>
    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
      <MermaidPopover
        title="Multi-Step Workflow Example"
        diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'14px'}}}%%
flowchart LR
    A["Input"] --> B["Process 1"]
    B --> C["Process 2"]
    C --> D["Process 3"]
    D --> E["Output"]
    
    style A fill:#4fc3f7,color:#000
    style E fill:#81c784,color:#000
    style B fill:#fff,color:#000
    style C fill:#fff,color:#000
    style D fill:#fff,color:#000
        `}
      />
    </div>
    <h4>When to Use</h4>
    <ul style={{ fontSize: '0.5em' }}>
      <li>Your use cases</li>
    </ul>
  </div>
</GSAPAnimated>
```

### Template 5: Formula Section
```tsx
<GSAPAnimated animation="slideInLeft" delay={0.3}>
  <div style={{ marginBottom: '0em', position: 'relative' }}>
    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
      <MermaidPopover
        title="Calculation Process Visualization"
        diagram={`flowchart TB
    A["🤖 Input"] --> B{"Decision?"}
    B -->|Yes| C["✅ Case A"]
    B -->|No| D["❌ Case B"]
    C --> E["📊 Result = X"]
    D --> E
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffcdd2,color:#000
    style E fill:#ffd700,color:#000`}
      />
    </div>
    <h4>Formula</h4>
    <ul style={{ fontSize: '0.5em' }}>
      <li><strong>Variable:</strong> description</li>
      <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{Formula} = \\frac{A}{B}\\]' }} />
    </ul>
  </div>
</GSAPAnimated>
```

### Template 6: How It Works Section
```tsx
<GSAPAnimated animation="scaleIn" delay={0.4}>
  <div style={{ marginBottom: '0em', position: 'relative' }}>
    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
      <MermaidPopover
        title="Process Flow Example"
        diagram={`flowchart LR
    A["📋 Input"] --> B["🔀 Process"]
    B --> C{"Check?"}
    C -->|"✅"| D["Success"]
    C -->|"❌"| E["Fail"]
    style A fill:#4fc3f7,color:#000
    style D fill:#81c784,color:#000
    style E fill:#ffcdd2,color:#000`}
      />
    </div>
    <h4>How It Works</h4>
    <ul style={{ fontSize: '0.5em' }}>
      <li>Step-by-step explanation</li>
      <li>Key concepts</li>
    </ul>
  </div>
</GSAPAnimated>
```

## Color Scheme Guidelines

### Standard Colors (copy these for consistency)
```
Success/Correct: fill:#c8e6c9,color:#000, stroke:#4caf50
Error/Wrong: fill:#ffcdd2,color:#000, stroke:#c62828
Warning/Caution: fill:#fff9c4,color:#000, stroke:#f57c00
Info/Neutral: fill:#e3f2fd,color:#000, stroke:#1976d2
Input/Data: fill:#4fc3f7,color:#000
Output/Result: fill:#81c784,color:#000
Process: fill:#e1bee7,color:#000
Highlight: fill:#ffd700,color:#000
Background (subgraph): fill:#f5f5f5,color:#000
```

### Color Usage Tips
- ✅ Green tones: correct answers, success cases
- ❌ Red tones: errors, failures, wrong predictions
- 🔵 Blue tones: general information, inputs
- 🟡 Yellow/Gold: results, key metrics, highlights
- 🟠 Orange: warnings, important notes
- 🟣 Purple: processes, transformations

## Best Practices

### Diagram Design
1. **Keep it simple** - Max 5-7 nodes per diagram
2. **Use emojis** - Makes diagrams more engaging (📊 📈 ✅ ❌ ⚠️ 🔧)
3. **Label clearly** - Use descriptive text in nodes
4. **Show flow** - Use arrows to indicate relationships
5. **Subgraphs for grouping** - Group related elements

### Code Organization
1. **Font size**: Use 13-14px for readability
2. **Escape special chars**: Use `\u` codes for emojis in diagram string
3. **Use backticks**: Template literal with backticks for multi-line
4. **Proper styling**: Add colors to all important nodes

### Integration
1. **Don't remove notes** - Keep existing speaker notes intact
2. **Placement timing** - Add after main content, before closing tag
3. **Delay sequencing** - Use appropriate delays (0.9, 1.0) for last items
## Best Practices

### Diagram Design
1. **Keep it simple** - Max 5-7 nodes per diagram
2. **Use emojis** - Makes diagrams more engaging (📊 📈 ✅ ❌ ⚠️ 🔧)
3. **Label clearly** - Use descriptive text in nodes
4. **Show flow** - Use arrows to indicate relationships
5. **Subgraphs for grouping** - Group related elements

### Code Organization
1. **Font size**: Use 13-14px for readability
2. **Positioning**: Use `position: 'absolute', top: '-5px', right: 0` for badge placement
3. **Parent container**: Set `position: 'relative'` on parent div
4. **No extra wrappers**: Place MermaidPopover directly without h4 or p tags

## Implementation Steps

### Step 1: Identify Target Section
Look for an existing section in the slide that could host the badge, typically:
- "When to Use" section
- Any informational section with bullet points
- The last GSAPAnimated section before closing

### Step 2: Modify Existing Section
1. Add `position: 'relative'` to the section's div style
2. Add absolutely positioned div at the start with MermaidPopover
3. Keep all existing content below the badge div

### Step 3: Create Diagram
1. Review speaker notes for concrete examples
2. Design a clear, simple Mermaid diagram
3. Use appropriate colors and styling
4. Test that the diagram is readable

### Step 4: Verify
1. Check that badge appears in top-right corner
2. Verify hover tooltip works
3. Ensure click opens diagram popover
4. Confirm no scrolling is needed on the slide

## Common Mermaid Diagram Types

### Flowchart (TB = Top to Bottom)
```
flowchart TB
    A --> B
    B --> C
```

### Flowchart (LR = Left to Right)
```
flowchart LR
    A --> B --> C
```

### Graph with Subgraphs
```
graph TB
    subgraph Section1["Title"]
        A["Content"]
    end
    subgraph Section2["Title"]
        B["Content"]
    end
    Section1 --> Section2
```

### Decision Flow
```
flowchart TB
    A["Input"] --> B{"Decision?"}
    B -->|"Yes"| C["Path 1"]
    B -->|"No"| D["Path 2"]
```

## Checklist Before Committing

- [ ] Diagram is relevant to the example in notes
- [ ] Colors are consistent with guidelines
- [ ] Font size is 13-14px
- [ ] Title is descriptive and clear
- [ ] Badge is positioned absolutely in top-right corner
- [ ] Parent div has `position: 'relative'`
- [ ] No h4 wrapper around MermaidPopover
- [ ] No helper p tag below the badge
- [ ] Code is properly indented
- [ ] No syntax errors in Mermaid code
- [ ] Emojis render correctly
- [ ] Diagram viewable without scrolling
- [ ] Badge doesn't add vertical space to slide

## Example: Complete Implementation

### Example 1: "When to Use" Section
From NER Metrics Deck - Exact Match Score:

**Before (Old Pattern - Don't Use):**
```tsx
<GSAPAnimated animation="fadeIn" delay={0.7}>
  <div style={{ marginBottom: '0em' }}>
    <h4>When to Use</h4>
    <ul style={{ fontSize: '0.5em' }}>
      <li>End-to-end reliability</li>
    </ul>
  </div>
</GSAPAnimated>

<GSAPAnimated animation="fadeIn" delay={1.0}>
  <div style={{ marginBottom: '0em' }}>
    <h4>
      Example Walkthrough
      <MermaidPopover title="..." diagram={`...`} />
    </h4>
    <p style={{ fontSize: '0.65em', fontStyle: 'italic' }}>Click to see...</p>
  </div>
</GSAPAnimated>
```

**After (New Pattern - Use This):**
```tsx
<GSAPAnimated animation="fadeIn" delay={0.7}>
  <div style={{ marginBottom: '0em', position: 'relative' }}>
    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
      <MermaidPopover
        title="Exact Match Example: 4 Predictions"
        diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'14px'}}}%%
graph TB
    subgraph Truth["🎯 Ground Truth"]
        GT["Apple=ORG | Tim Cook=PERSON | Tesla=ORG"]
    end
    
    subgraph P1["Prediction 1: ✅ EM = 1"]
        P1E["Apple=ORG | Tim Cook=PERSON | Tesla=ORG"]
        P1R["✅ Perfect Match!"]
    end
    
    subgraph P2["Prediction 2: ❌ EM = 0"]
        P2E["Apple=ORG | Tim Cook=PERSON | Tesla=LOC"]
        P2R["❌ Wrong Label"]
    end
    
    Truth --> P1
    Truth --> P2
    
    style Truth fill:#e3f2fd,stroke:#1976d2,stroke-width:3px,color:#000
    style P1 fill:#c8e6c9,stroke:#388e3c,stroke-width:2px,color:#000
    style P2 fill:#ffcdd2,stroke:#c62828,stroke-width:2px,color:#000`}
      />
    </div>
    <h4>When to Use</h4>
    <ul style={{ fontSize: '0.5em' }}>
      <li>End-to-end reliability</li>
    </ul>
  </div>
</GSAPAnimated>
```

### Example 2: "Formula" Section
From NER Metrics Deck - Precision:

**Before (Old Pattern - Don't Use):**
```tsx
<GSAPAnimated animation="slideInLeft" delay={0.3}>
  <div style={{ marginBottom: '0em' }}>
    <h4>
      Formula
      <MermaidPopover
        title="Precision Calculation"
        diagram={`...`}
      />
    </h4>
    <ul style={{ fontSize: '0.5em' }}>
      <li><strong>TP:</strong> true positives</li>
      <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{Precision} = \\frac{TP}{TP + FP}\\]' }} />
    </ul>
  </div>
</GSAPAnimated>
```

**After (New Pattern - Use This):**
```tsx
<GSAPAnimated animation="slideInLeft" delay={0.3}>
  <div style={{ marginBottom: '0em', position: 'relative' }}>
    <div style={{ position: 'absolute', top: '-5px', right: 0 }}>
      <MermaidPopover
        title="Precision Calculation"
        diagram={`flowchart TB
    A["🤖 Model Predictions"] --> B{"Correct?"}
    B -->|Yes| C["✅ TP = 8"]
    B -->|No| D["❌ FP = 2"]
    C --> E["📊 Precision = 8/10 = 80%"]
    D --> E
    style A fill:#4fc3f7,color:#000
    style C fill:#81c784,color:#000
    style D fill:#ffcdd2,color:#000
    style E fill:#ffd700,color:#000`}
      />
    </div>
    <h4>Formula</h4>
    <ul style={{ fontSize: '0.5em' }}>
      <li><strong>TP:</strong> true positives</li>
      <p className="formula-left" dangerouslySetInnerHTML={{ __html: '\\[\\text{Precision} = \\frac{TP}{TP + FP}\\]' }} />
    </ul>
  </div>
</GSAPAnimated>
```

**Key Differences:**
1. ✅ Single GSAPAnimated section (not two)
2. ✅ Parent div has `position: 'relative'`
3. ✅ Badge div has `position: 'absolute', top: '-5px', right: 0`
4. ✅ MermaidPopover has no h4 wrapper
5. ✅ No helper p tag
6. ✅ Badge appears in top-right corner of existing content
7. ✅ Works for any section type: "When to Use", "Formula", "How It Works", etc.

## Quick Reference Commands

### Common Section Types to Target
All MermaidPopover diagrams should be right-aligned in the following sections:
- **"When to Use"** - Use cases and application scenarios
- **"Formula"** - Mathematical formulas with visual explanations
- **"How It Works"** - Process flows and mechanisms
- **Any section with examples** - Example calculations, walkthroughs, comparisons

### Search in VS Code
Search for sections that need conversion:
```
Search: "<h4>\n                    (Formula|How It Works|Example)"
Use regex enabled
```

Or search for old pattern:
```
Search: "Formula\n                    <MermaidPopover"
Use regex disabled
```

### Multi-Replace Pattern
Use `multi_replace_string_in_file` for multiple edits:
- Identify all sections with MermaidPopover in h4 wrappers
- Create replacement array
- Execute all changes at once

## Notes
- Keep diagrams focused on ONE concept per diagram
- Test in browser to ensure proper rendering
- Verify mobile responsiveness if needed
- Consider accessibility (color contrast)
