import { useRef } from 'react';
import type { ReactNode } from 'react';

interface GSAPAnimatedProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideInLeft' | 'slideInRight' | 'slideInTop' | 'slideInBottom' | 
              'scaleIn' | 'bounceIn' | 'rotateIn' | 'flipCard';
  duration?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Wrapper component for GSAP animations that triggers on slide change
 * Usage: <GSAPAnimated animation="fadeIn" delay={0.2}>Your content</GSAPAnimated>
 */
export const GSAPAnimated: React.FC<GSAPAnimatedProps> = ({
  children,
  animation = 'fadeIn',
  duration = 0.8,
  delay = 0,
  className,
  style
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      ref={elementRef} 
      className={className} 
      style={style}
      data-gsap-animation={animation}
      data-gsap-duration={duration}
      data-gsap-delay={delay}
    >
      {children}
    </div>
  );
};

interface GSAPStaggerListProps {
  children: ReactNode[] | ReactNode;
  duration?: number;
  stagger?: number;
  delay?: number;
  className?: string;
  itemClassName?: string;
}

/**
 * Component for stagger animations on lists that triggers on slide change
 * 
 * @example
 * // Option 1: Pass a single ReactNode (e.g., <ul> with children)
 * <GSAPStaggerList stagger={0.15}>
 *   <ul>
 *     <li>Item 1</li>
 *     <li>Item 2</li>
 *   </ul>
 * </GSAPStaggerList>
 * 
 * // Option 2: Pass an array of ReactNodes
 * <GSAPStaggerList stagger={0.15}>
 *   {items.map(item => <div key={item.id}>{item.text}</div>)}
 * </GSAPStaggerList>
 * 
 * @param children - Single ReactNode or array of ReactNodes to animate with stagger effect
 * @param stagger - Delay between each child animation (default: 0.1)
 * @param duration - Duration of each animation (default: 0.5)
 * @param delay - Initial delay before stagger sequence starts (default: 0)
 */
export const GSAPStaggerList: React.FC<GSAPStaggerListProps> = ({
  children,
  duration = 0.5,
  stagger = 0.1,
  delay = 0,
  className,
  itemClassName
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Handle both array and single ReactNode
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div 
      ref={containerRef} 
      className={className}
      data-gsap-stagger={stagger}
      data-gsap-duration={duration}
      data-gsap-delay={delay}
    >
      {childArray.map((child, index) => (
        <div key={index} className={`gsap-stagger-item ${itemClassName || ''}`}>
          {child}
        </div>
      ))}
    </div>
  );
};
