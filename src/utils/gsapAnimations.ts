import gsap from 'gsap';

/**
 * GSAP Animation utilities for deck slides
 */

export const slideAnimations = {
  /**
   * Fade in animation
   */
  fadeIn: (element: HTMLElement, duration = 0.8, delay = 0) => {
    gsap.fromTo(
      element,
      { opacity: 0 },
      { opacity: 1, duration, delay, ease: 'power2.out' }
    );
  },

  /**
   * Slide in from left
   */
  slideInLeft: (element: HTMLElement, duration = 0.8, delay = 0) => {
    gsap.fromTo(
      element,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration, delay, ease: 'power3.out' }
    );
  },

  /**
   * Slide in from right
   */
  slideInRight: (element: HTMLElement, duration = 0.8, delay = 0) => {
    gsap.fromTo(
      element,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration, delay, ease: 'power3.out' }
    );
  },

  /**
   * Slide in from top
   */
  slideInTop: (element: HTMLElement, duration = 0.8, delay = 0) => {
    gsap.fromTo(
      element,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration, delay, ease: 'power3.out' }
    );
  },

  /**
   * Slide in from bottom
   */
  slideInBottom: (element: HTMLElement, duration = 0.8, delay = 0) => {
    gsap.fromTo(
      element,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration, delay, ease: 'power3.out' }
    );
  },

  /**
   * Scale in animation
   */
  scaleIn: (element: HTMLElement, duration = 0.6, delay = 0) => {
    gsap.fromTo(
      element,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration, delay, ease: 'back.out(1.7)' }
    );
  },

  /**
   * Bounce in animation
   */
  bounceIn: (element: HTMLElement, duration = 1, delay = 0) => {
    gsap.fromTo(
      element,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration, delay, ease: 'elastic.out(1, 0.5)' }
    );
  },

  /**
   * Rotate in animation
   */
  rotateIn: (element: HTMLElement, duration = 0.8, delay = 0) => {
    gsap.fromTo(
      element,
      { rotation: -180, scale: 0, opacity: 0 },
      { rotation: 0, scale: 1, opacity: 1, duration, delay, ease: 'back.out(1.7)' }
    );
  },

  /**
   * Stagger animation for list items
   */
  staggerList: (elements: NodeListOf<Element> | Element[], duration = 0.5, stagger = 0.1) => {
    gsap.fromTo(
      elements,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        stagger,
        ease: 'power2.out'
      }
    );
  },

  /**
   * Pulse animation (for emphasis)
   */
  pulse: (element: HTMLElement, duration = 0.5) => {
    gsap.to(element, {
      scale: 1.1,
      duration: duration / 2,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut'
    });
  },

  /**
   * Typewriter effect
   */
  typewriter: (element: HTMLElement, text: string, duration = 2) => {
    const chars = text.split('');
    element.textContent = '';
    
    chars.forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = '0';
      element.appendChild(span);
      
      gsap.to(span, {
        opacity: 1,
        duration: 0.05,
        delay: (duration / chars.length) * index
      });
    });
  },

  /**
   * Card flip animation
   */
  flipCard: (element: HTMLElement, duration = 0.8, delay = 0) => {
    gsap.fromTo(
      element,
      { rotationY: -180, opacity: 0 },
      { rotationY: 0, opacity: 1, duration, delay, ease: 'power2.out' }
    );
  },

  /**
   * Slide transition animation
   */
  slideTransition: (element: HTMLElement, direction: 'left' | 'right' | 'up' | 'down' = 'left', duration = 0.8) => {
    const props: any = { opacity: 0 };
    
    switch (direction) {
      case 'left':
        props.x = -100;
        break;
      case 'right':
        props.x = 100;
        break;
      case 'up':
        props.y = -100;
        break;
      case 'down':
        props.y = 100;
        break;
    }
    
    gsap.fromTo(
      element,
      props,
      { x: 0, y: 0, opacity: 1, duration, ease: 'power3.out' }
    );
  }
};

/**
 * React hook for GSAP animations
 */
export const useGSAPAnimation = (
  animationType: keyof typeof slideAnimations,
  dependencies: any[] = []
) => {
  return (element: HTMLElement | null) => {
    if (!element) return;
    
    const animation = slideAnimations[animationType];
    if (typeof animation === 'function') {
      animation(element);
    }
  };
};
