'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function ScrollFadeIn({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  className = '',
}) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const initialVariants = {
    up: { opacity: 0, y: 40 },
    down: { opacity: 0, y: -40 },
    left: { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
  };

  const animateVariants = {
    opacity: 1,
    y: 0,
    x: 0,
  };

  return (
    <motion.div
      ref={ref}
      initial={initialVariants[direction]}
      animate={inView ? animateVariants : initialVariants[direction]}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({ children, delay = 0 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({ children }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
