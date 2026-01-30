import { useRef, ReactNode } from 'react';

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
  children: ReactNode[];
  duration?: number;
  stagger?: number;
  className?: string;
  itemClassName?: string;
}

/**
 * Component for stagger animations on lists that triggers on slide change
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

  return (
    <div 
      ref={containerRef} 
      className={className}
      data-gsap-stagger={stagger}
      data-gsap-duration={duration}
    >
      {children.map((child, index) => (
        <div key={index} className={`gsap-stagger-item ${itemClassName || ''}`}>
          {child}
        </div>
      ))}
    </div>
  );
};
