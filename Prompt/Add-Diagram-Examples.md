# Adding Interactive Diagram Examples to Slides

## Purpose
This prompt helps you add interactive MermaidPopover diagrams to example sections in slide decks, making technical concepts more engaging and visual during presentations.
    
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
- Headings like "Example Walkthrough", "Example Calculation", "Model Comparison"
- Concrete numerical examples in the notes
- Scenarios comparing different outcomes
- Text that walks through specific cases

### 2. Add GSAPAnimated Component with MermaidPopover

**General Structure:**
```tsx
<GSAPAnimated animation="fadeIn" delay={0.9}>
  <div style={{ marginBottom: '0.7em' }}>
    <h4>
      Example Title
      <MermaidPopover
        title="Descriptive Diagram Title"
        diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'13px'}}}%%
graph TB
    // Your mermaid diagram code here
        `}
      />
    </h4>
    <p style={{ fontSize: '0.65em', fontStyle: 'italic' }}>Click to see [description]</p>
  </div>
</GSAPAnimated>
```

### 3. Placement Guidelines
- Add AFTER "When to Use" section
- Use delays like 0.9, 1.0 to appear last
- Don't replace existing text in notes
- Place before the closing `</div>` of content section

## Example Templates

### Template 1: Calculation Example
```tsx
<GSAPAnimated animation="fadeIn" delay={0.9}>
  <div style={{ marginBottom: '0.7em' }}>
    <h4>
      Example Calculation
      <MermaidPopover
        title="Step-by-Step Calculation"
        diagram={`%%{init: {'theme':'base', 'themeVariables': { 'fontSize':'14px'}}}%%
graph TB
    Input["📊 Input Data"] --> Step1["Step 1: Calculate X"]
    Step1 --> Step2["Step 2: Calculate Y"]
    Step2 --> Result["✅ Result = Z"]
    
    style Input fill:#e3f2fd,color:#000
    style Result fill:#c8e6c9,color:#000
        `}
      />
    </h4>
    <p style={{ fontSize: '0.65em', fontStyle: 'italic' }}>Click to see calculation steps</p>
  </div>
</GSAPAnimated>
```

### Template 2: Multiple Scenarios
```tsx
<GSAPAnimated animation="fadeIn" delay={1.0}>
  <div style={{ marginBottom: '0.7em' }}>
    <h4>
      Scenario Comparison
      <MermaidPopover
        title="Comparing Different Cases"
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
    </h4>
    <p style={{ fontSize: '0.65em', fontStyle: 'italic' }}>Click to see scenarios</p>
  </div>
</GSAPAnimated>
```

### Template 3: Confusion Matrix / Table
```tsx
<GSAPAnimated animation="fadeIn" delay={1.0}>
  <div style={{ marginBottom: '0.7em' }}>
    <h4>
      Example Matrix
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
    </h4>
    <p style={{ fontSize: '0.65em', fontStyle: 'italic' }}>Click to see confusion patterns</p>
  </div>
</GSAPAnimated>
```

### Template 4: Multi-Step Process
```tsx
<GSAPAnimated animation="fadeIn" delay={0.95}>
  <div style={{ marginBottom: '0.7em' }}>
    <h4>
      Process Example
      <MermaidPopover
        title="Multi-Step Workflow"
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
    </h4>
    <p style={{ fontSize: '0.65em', fontStyle: 'italic' }}>Click to see process flow</p>
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
4. **Helper text** - Always add "Click to see..." description

## Search and Replace Pattern

### Step 1: Find Example Sections
Search for patterns like:
```
Example Walkthrough
Example Calculation  
Model Comparison
Scenario Analysis
```

### Step 2: Locate Insertion Point
Find the last `</GSAPAnimated>` before `</div>\n          ),`

### Step 3: Insert New GSAPAnimated Block
Add between the last animation and the closing tag

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
- [ ] Helper text explains what clicking shows
- [ ] Delay timing doesn't conflict with other animations
- [ ] Code is properly indented
- [ ] No syntax errors in Mermaid code
- [ ] Emojis render correctly
- [ ] Diagram viewable without scrolling

## Example: Complete Implementation

From NER Metrics Deck - Exact Match Score:

```tsx
<GSAPAnimated animation="fadeIn" delay={1.0}>
  <div style={{ marginBottom: '0.7em' }}>
    <h4>
      Example Walkthrough
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
    </h4>
    <p style={{ fontSize: '0.65em', fontStyle: 'italic' }}>Click diagram to see 4 prediction scenarios</p>
  </div>
</GSAPAnimated>
```

## Quick Reference Commands

### Search in VS Code
```
Search: "Example Walkthrough|Example Calculation|Model Comparison"
Use regex enabled
```

### Multi-Replace Pattern
Use `multi_replace_string_in_file` for multiple edits:
- Identify all example sections
- Create replacement array
- Execute all changes at once

## Notes
- Keep diagrams focused on ONE concept per diagram
- Test in browser to ensure proper rendering
- Verify mobile responsiveness if needed
- Consider accessibility (color contrast)
