import { motion } from 'framer-motion';
import type { CSSProperties } from 'react';

export type AnimationType =
  | 'bounce'
  | 'float'
  | 'pulse'
  | 'spin'
  | 'swing'
  | 'tada'
  | 'heartbeat'
  | 'wiggle'
  | 'shake'
  | 'fade-in'
  | 'scale-in'
  | 'slide-in'
  | 'rotate-in'
  | 'none';

interface AnimatedEmojiProps {
  emoji: string;
  animation?: AnimationType;
  size?: string;
  delay?: number;
  duration?: number;
  repeat?: boolean | number;
  style?: CSSProperties;
}

type VariantDefinition = {
  initial?: any;
  animate?: any;
};

const animationVariants: Record<AnimationType, VariantDefinition> = {
  bounce: {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },
  float: {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },
  pulse: {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },
  spin: {
    animate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  },
  swing: {
    animate: {
      rotate: [0, 15, -15, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },
  tada: {
    animate: {
      scale: [1, 1.1, 1.1, 1.1, 1],
      rotate: [0, -3, 3, -3, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  },
  heartbeat: {
    animate: {
      scale: [1, 1.3, 1, 1.3, 1],
      transition: {
        duration: 1.3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  },
  wiggle: {
    animate: {
      rotate: [0, 5, -5, 5, -5, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  },
  shake: {
    animate: {
      x: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatDelay: 2,
      },
    },
  },
  'fade-in': {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  },
  'scale-in': {
    initial: { scale: 0 },
    animate: {
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'backOut',
      },
    },
  },
  'slide-in': {
    initial: { x: -50, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  },
  'rotate-in': {
    initial: { rotate: -180, scale: 0 },
    animate: {
      rotate: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'backOut',
      },
    },
  },
  none: {},
};

export const AnimatedEmoji: React.FC<AnimatedEmojiProps> = ({
  emoji,
  animation = 'bounce',
  size = '1.5em',
  delay = 0,
  duration,
  repeat,
  style,
}) => {
  const variants = animationVariants[animation];
  
  // Create custom transition if duration or repeat is specified
  const customTransition = duration !== undefined || repeat !== undefined
    ? {
        ...variants.animate?.transition,
        duration: duration ?? variants.animate?.transition?.duration,
        repeat: repeat !== undefined ? repeat : variants.animate?.transition?.repeat,
      }
    : variants.animate?.transition;

  return (
    <motion.span
      initial={variants.initial}
      animate={variants.animate}
      transition={{
        ...customTransition,
        delay,
      }}
      style={{
        display: 'inline-block',
        fontSize: size,
        lineHeight: 1,
        ...style,
      }}
    >
      {emoji}
    </motion.span>
  );
};
