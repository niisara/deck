import { useEffect, useRef, ReactNode } from 'react';
import { slideAnimations } from '../utils/gsapAnimations';

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
 * Wrapper component for GSAP animations
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

  useEffect(() => {
    if (elementRef.current) {
      const animationFn = slideAnimations[animation];
      if (animationFn) {
        animationFn(elementRef.current, duration, delay);
      }
    }
  }, [animation, duration, delay]);

  return (
    <div ref={elementRef} className={className} style={style}>
      {children}
    </div>
  );
};

interface GSAPStaggerListProps {
  children: ReactNode[];
  duration?: number;
  stagger?: number;
  className?: string;
  itemClassName?: string;
}

/**
 * Component for stagger animations on lists
 * Usage: <GSAPStaggerList stagger={0.15}>{items}</GSAPStaggerList>
 */
export const GSAPStaggerList: React.FC<GSAPStaggerListProps> = ({
  children,
  duration = 0.5,
  stagger = 0.1,
  className,
  itemClassName
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const items = containerRef.current.querySelectorAll('.gsap-stagger-item');
      if (items.length > 0) {
        slideAnimations.staggerList(items, duration, stagger);
      }
    }
  }, [duration, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {children.map((child, index) => (
        <div key={index} className={`gsap-stagger-item ${itemClassName || ''}`}>
          {child}
        </div>
      ))}
    </div>
  );
};
