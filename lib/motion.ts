import type { Transition, Variants } from "framer-motion";

export const defaultTransition: Transition = {
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1],
};

export const viewport = {
  once: true,
  margin: "-60px",
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export const fadeUpScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const reducedMotionVariants: Variants = {
  hidden: { opacity: 1, y: 0, scale: 1 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export function getVariants(reducedMotion: boolean): Variants {
  return reducedMotion ? reducedMotionVariants : fadeUp;
}

export function getScaleVariants(reducedMotion: boolean): Variants {
  return reducedMotion ? reducedMotionVariants : fadeUpScale;
}
