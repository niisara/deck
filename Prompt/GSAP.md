# GSAP Animation Application Prompt

Use this prompt to apply creative GSAP animations to any deck in the project:

---

## Prompt Template

I need you to apply GSAP animations to my current deck file: `[DECK_FILE_PATH]`

**Requirements:**

1. **Be Creative & Varied**: Don't use the same animation patterns for every slide. Mix and match different animation types to keep the presentation visually engaging and dynamic.

2. **Animation Variety**: Use a diverse mix of these animations:
   - `fadeIn` - Simple fade for subtle entries
   - `slideInLeft`, `slideInRight` - Horizontal movements
   - `slideInTop`, `slideInBottom` - Vertical movements
   - `scaleIn` - Pop-in effects for emphasis
   - `bounceIn` - Playful, elastic entries
   - `rotateIn` - Spinning entries for wow factor
   - `flipCard` - 3D flip effects for dramatic reveals

3. **Strategic Delays**: Vary delay timings to create interesting sequences:
   - Quick succession: delays of 0.1-0.2s between elements
   - Paced reveals: delays of 0.3-0.5s for emphasis
   - Dramatic pauses: delays of 0.6-1.0s for impact

4. **Creative Patterns for Different Slide Types**:

   **Title Slides**: Use bold, attention-grabbing animations
   ```tsx
   // Example: Combine rotateIn for icon, scaleIn for title, fadeIn for subtitle
   <GSAPAnimated animation="rotateIn" duration={1} delay={0}>
     <SvgIcon ... />
   </GSAPAnimated>
   <GSAPAnimated animation="scaleIn" delay={0.3}>
     <h1>Title</h1>
   </GSAPAnimated>
   <GSAPAnimated animation="fadeIn" delay={0.6}>
     <p>Subtitle</p>
   </GSAPAnimated>
   ```

   **Content Slides**: Mix directional slides for visual flow
   ```tsx
   // Alternate directions for visual interest
   <GSAPAnimated animation="slideInLeft" delay={0.1}>
     <div>First section</div>
   </GSAPAnimated>
   <GSAPAnimated animation="slideInRight" delay={0.3}>
     <div>Second section</div>
   </GSAPAnimated>
   <GSAPAnimated animation="slideInBottom" delay={0.5}>
     <div>Third section</div>
   </GSAPAnimated>
   ```

   **Lists**: Use staggered animations with varying stagger times
   ```tsx
   // Fast stagger for short lists, slower for longer ones
   <GSAPStaggerList stagger={0.12} duration={0.7}>
     {items}
   </GSAPStaggerList>
   ```

   **Key Points/Highlights**: Use bounceIn or scaleIn for emphasis
   ```tsx
   <GSAPAnimated animation="bounceIn" duration={1} delay={0.2}>
     <div className="key-point">Important concept!</div>
   </GSAPAnimated>
   ```

   **Comparisons (Pros/Cons)**: Use opposing directions
   ```tsx
   <GSAPAnimated animation="slideInLeft" delay={0.1}>
     <div>Pros section</div>
   </GSAPAnimated>
   <GSAPAnimated animation="slideInRight" delay={0.3}>
     <div>Cons section</div>
   </GSAPAnimated>
   ```

   **Statistics/Numbers**: Use scaleIn or rotateIn for impact
   ```tsx
   <GSAPAnimated animation="scaleIn" duration={0.8} delay={0.2}>
     <h2>85%</h2>
   </GSAPAnimated>
   ```

5. **Randomization Suggestions**:
   - Don't use the same animation type twice in a row on consecutive slides
   - Vary between quick (0.5-0.7s) and slow (0.9-1.2s) durations
   - Mix subtle animations (fadeIn) with dramatic ones (bounceIn, rotateIn)
   - Use different stagger values (0.08, 0.12, 0.15, 0.2) for variety
   - Combine multiple animation types within complex slides

6. **Make It Attractive**:
   - Use `rotateIn` or `flipCard` for icons and visual elements
   - Apply `bounceIn` to call-to-action elements or key takeaways
   - Combine `scaleIn` with opacity changes for hero elements
   - Create cascading effects with carefully timed delays
   - Use `slideInBottom` for footer content or conclusions
   - Apply `slideInTop` for headers or titles

7. **Guidelines**:
   - Every slide should have at least one animated element
   - Complex slides should have 3-5 animated sections with varied timings
   - Icons and visual elements should use more dramatic animations (rotate, bounce, scale)
   - Text content can use subtler animations (fade, slide)
   - Lists always benefit from stagger animations
   - Maintain readability - don't make animations too fast or too distracting

8. **Duration Recommendations**:
   - Quick animations (text, small elements): 0.5-0.7s
   - Standard animations (content blocks): 0.7-0.9s
   - Dramatic animations (titles, highlights): 0.9-1.2s
   - Stagger durations: 0.5-0.8s

**Output**: Apply creative, varied GSAP animations to ALL slides in the deck, making each slide unique and visually engaging while maintaining professional presentation standards.

---

## Technical Reference

### Available Components

```tsx
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
```

### GSAPAnimated Props
- `animation`: 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'slideInTop' | 'slideInBottom' | 'scaleIn' | 'bounceIn' | 'rotateIn' | 'flipCard'
- `duration`: number (in seconds, default: 0.8)
- `delay`: number (in seconds, default: 0)
- `className`: string (optional)
- `style`: CSSProperties (optional)

### GSAPStaggerList Props
- `stagger`: number (delay between items in seconds, default: 0.1)
- `duration`: number (animation duration in seconds, default: 0.5)
- `className`: string (optional)
- `itemClassName`: string (optional)

### Environment Configuration
- Base animation delay: `VITE_GSAP_ANIMATION_DELAY` in `.env` file (default: 1000ms)
- Change this value to adjust the global delay before animations start after a slide change

---

## Example Creative Combinations

**Example 1: Dynamic Title Slide**
```tsx
<GSAPAnimated animation="flipCard" duration={1.2} delay={0}>
  <SvgIcon iconName="duo-rocket" sizeName="3x" />
</GSAPAnimated>
<GSAPAnimated animation="bounceIn" duration={1} delay={0.4}>
  <h1>Exciting New Feature</h1>
</GSAPAnimated>
<GSAPAnimated animation="fadeIn" delay={0.8}>
  <p>Transform your workflow today</p>
</GSAPAnimated>
```

**Example 2: Cascading Content**
```tsx
<GSAPAnimated animation="slideInTop" delay={0.1}>
  <div>Introduction</div>
</GSAPAnimated>
<GSAPAnimated animation="scaleIn" delay={0.3}>
  <div>Key Concept</div>
</GSAPAnimated>
<GSAPAnimated animation="rotateIn" delay={0.5}>
  <SvgIcon iconName="duo-lightbulb" />
</GSAPAnimated>
<GSAPAnimated animation="slideInBottom" delay={0.7}>
  <div>Conclusion</div>
</GSAPAnimated>
```

**Example 3: Interactive List with Highlights**
```tsx
<GSAPAnimated animation="fadeIn" delay={0.1}>
  <h3>Key Benefits:</h3>
</GSAPAnimated>
<GSAPStaggerList stagger={0.18} duration={0.7}>
  <div>Benefit 1</div>
  <div>Benefit 2</div>
  <div>Benefit 3</div>
</GSAPStaggerList>
<GSAPAnimated animation="bounceIn" duration={1.2} delay={0.8}>
  <div className="highlight">Most Important Takeaway</div>
</GSAPAnimated>
```

**Example 4: Dramatic Reveal**
```tsx
<GSAPAnimated animation="rotateIn" duration={1.5} delay={0}>
  <h1 style={{ fontSize: '4em' }}>3X</h1>
</GSAPAnimated>
<GSAPAnimated animation="scaleIn" delay={0.5}>
  <p>Faster Performance</p>
</GSAPAnimated>
<GSAPStaggerList stagger={0.2} duration={0.6}>
  <div>✓ Optimized algorithms</div>
  <div>✓ Reduced latency</div>
  <div>✓ Improved caching</div>
</GSAPStaggerList>
```

**Example 5: Multi-directional Flow**
```tsx
<GSAPAnimated animation="slideInTop" delay={0}>
  <div>Header Section</div>
</GSAPAnimated>
<GSAPAnimated animation="slideInLeft" delay={0.2}>
  <div>Left Content</div>
</GSAPAnimated>
<GSAPAnimated animation="slideInRight" delay={0.2}>
  <div>Right Content</div>
</GSAPAnimated>
<GSAPAnimated animation="slideInBottom" delay={0.4}>
  <div>Footer/CTA</div>
</GSAPAnimated>
```

---

## Quick Start

**To apply animations to a new deck:**

1. Copy the prompt template above
2. Replace `[DECK_FILE_PATH]` with your deck file path
3. Paste into your AI assistant conversation
4. Review and approve the suggested animations

**To adjust global timing:**

Edit `.env` file:
```env
VITE_GSAP_ANIMATION_DELAY=1000  # Change to 500, 1500, etc.
```

**Best Practices:**
- Start with subtle animations, then add dramatic ones for emphasis
- Test on actual presentation hardware to ensure smooth performance
- Use consistent animation families within slide groups
- Vary animation types between slide groups for distinction
- Remember: Less is often more - prioritize readability over flash

---

## Animation Type Guide

| Animation | Best For | Impact Level | Speed |
|-----------|----------|--------------|-------|
| `fadeIn` | Text, backgrounds | Subtle | Any |
| `slideInLeft/Right` | Content blocks, comparisons | Medium | Fast-Medium |
| `slideInTop/Bottom` | Headers, footers, sequential content | Medium | Medium |
| `scaleIn` | Numbers, icons, emphasis | High | Medium-Slow |
| `bounceIn` | CTAs, highlights, fun elements | High | Slow |
| `rotateIn` | Icons, logos, attention-grabbers | Very High | Medium-Slow |
| `flipCard` | Reveals, transitions, dramatic effect | Very High | Slow |

---

## Troubleshooting

**Animations not appearing?**
- Check that the import statement is at the top of your deck file
- Verify the deck file is in `src/data/` directory
- Ensure dev server is running and reloaded after changes

**Animations too fast/slow?**
- Adjust `duration` prop on individual elements
- Modify `VITE_GSAP_ANIMATION_DELAY` in `.env` for global timing
- Fine-tune `delay` values for better sequencing

**Too many animations overwhelming?**
- Use `fadeIn` for less important elements
- Reduce stagger values for lists
- Apply animations only to key content sections
- Increase base delay in `.env` to give viewers more time

---

*For more details, see: `GSAP_USAGE.md` in the project root*
