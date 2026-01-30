# GSAP Animation Usage Guide

This guide shows you how to use GSAP animations in your deck presentations.

## Installation

GSAP has been installed in your project. You can now use animations in your deck slides.

## Basic Usage

### 1. Import the Components

```tsx
import { GSAPAnimated, GSAPStaggerList } from '../components/GSAPAnimated';
```

### 2. Wrap Content with GSAPAnimated

```tsx
<GSAPAnimated animation="fadeIn" delay={0.2}>
  <p>This content will fade in</p>
</GSAPAnimated>
```

## Available Animations

### Fade Animations
- **fadeIn**: Fades in from transparent to opaque

```tsx
<GSAPAnimated animation="fadeIn" duration={0.8} delay={0}>
  <div>Your content</div>
</GSAPAnimated>
```

### Slide Animations
- **slideInLeft**: Slides in from the left side
- **slideInRight**: Slides in from the right side
- **slideInTop**: Slides in from the top
- **slideInBottom**: Slides in from the bottom

```tsx
<GSAPAnimated animation="slideInLeft" duration={0.8} delay={0.2}>
  <h2>Slides in from left</h2>
</GSAPAnimated>
```

### Scale Animations
- **scaleIn**: Scales up from zero with a smooth easing
- **bounceIn**: Scales in with an elastic bounce effect

```tsx
<GSAPAnimated animation="scaleIn" duration={0.6} delay={0}>
  <SvgIcon iconName="duo-brain" />
</GSAPAnimated>
```

### Rotation Animations
- **rotateIn**: Rotates and scales in simultaneously
- **flipCard**: Flips like a card being turned over

```tsx
<GSAPAnimated animation="rotateIn" duration={0.8}>
  <div className="card">Card content</div>
</GSAPAnimated>
```

## Stagger Animations (for Lists)

Use `GSAPStaggerList` to animate multiple items with a stagger effect:

```tsx
<GSAPStaggerList stagger={0.15} duration={0.6}>
  <div><li>First item</li></div>
  <div><li>Second item</li></div>
  <div><li>Third item</li></div>
</GSAPStaggerList>
```

## Props Reference

### GSAPAnimated Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| animation | string | 'fadeIn' | Animation type (see list above) |
| duration | number | 0.8 | Animation duration in seconds |
| delay | number | 0 | Delay before animation starts |
| className | string | - | CSS class for the wrapper |
| style | object | - | Inline styles for the wrapper |

### GSAPStaggerList Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| duration | number | 0.5 | Duration for each item animation |
| stagger | number | 0.1 | Delay between each item (in seconds) |
| className | string | - | CSS class for the container |
| itemClassName | string | - | CSS class for each item |

## Complete Example

Here's a complete slide example with multiple animations:

```tsx
{
  id: 1,
  center: true,
  title: 'My Awesome Slide',
  content: (
    <div>
      {/* Title with scale animation */}
      <GSAPAnimated animation="scaleIn" duration={1} delay={0.2}>
        <h1>Welcome to My Presentation</h1>
      </GSAPAnimated>

      {/* Subtitle with fade */}
      <GSAPAnimated animation="fadeIn" delay={0.8}>
        <p>Learn amazing things</p>
      </GSAPAnimated>

      {/* List with stagger */}
      <GSAPStaggerList stagger={0.15} duration={0.6}>
        <div><li>Point one</li></div>
        <div><li>Point two</li></div>
        <div><li>Point three</li></div>
      </GSAPStaggerList>

      {/* Icon with rotation */}
      <GSAPAnimated animation="rotateIn" delay={1.5}>
        <SvgIcon iconName="duo-rocket" sizeName="2x" />
      </GSAPAnimated>
    </div>
  ),
  backgroundColor: '#1e3a5f',
}
```

## Advanced: Using GSAP Directly

If you need more control, you can import the animation functions directly:

```tsx
import { slideAnimations } from '../utils/gsapAnimations';
import { useEffect, useRef } from 'react';

function MyComponent() {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      // Custom animation with precise control
      slideAnimations.fadeIn(elementRef.current, 1, 0.5);
      
      // Or use gsap directly
      import('gsap').then(({ default: gsap }) => {
        gsap.to(elementRef.current, {
          x: 100,
          rotation: 360,
          duration: 2
        });
      });
    }
  }, []);

  return <div ref={elementRef}>Animated content</div>;
}
```

## Tips for Best Results

1. **Timing**: Use delays to create a sequence of animations
2. **Duration**: Keep animations between 0.5-1 second for good UX
3. **Stagger**: Use 0.1-0.2 second stagger for list items
4. **Don't Overuse**: Not every element needs animation
5. **Test**: Always preview your deck to ensure timing feels right

## Animation Timing Examples

```tsx
// Title appears first (no delay)
<GSAPAnimated animation="scaleIn" duration={1} delay={0}>
  <h1>Title</h1>
</GSAPAnimated>

// Subtitle appears after title (0.5s delay)
<GSAPAnimated animation="fadeIn" delay={0.5}>
  <p>Subtitle</p>
</GSAPAnimated>

// Content appears last (1s delay)
<GSAPAnimated animation="slideInBottom" delay={1}>
  <div>Main content</div>
</GSAPAnimated>
```

## Troubleshooting

**Animations not working?**
- Make sure you imported the components correctly
- Check that the component is rendered in the DOM
- Verify that GSAP is installed: `npm list gsap`

**Animations feel too fast/slow?**
- Adjust the `duration` prop
- Add or modify the `delay` prop

**Want smoother animations?**
- Increase duration slightly (0.8 → 1.2)
- Experiment with different animation types

## Next Steps

1. Update your existing slides with animations
2. Experiment with different animation combinations
3. Create custom animations using the `slideAnimations` utilities
4. Share your animated presentations!

Happy animating! 🎉
