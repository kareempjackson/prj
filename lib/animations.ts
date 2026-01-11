/**
 * Animation Utilities for Framer Motion
 * Reusable animation variants and transitions
 */

import { Variants, Transition } from "framer-motion";

// ========================================
// TRANSITIONS
// ========================================

export const transitions = {
  fast: { duration: 0.25, ease: [0.33, 1, 0.68, 1] },
  normal: { duration: 0.4, ease: [0.33, 1, 0.68, 1] },
  slow: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
  slower: { duration: 0.8, ease: [0.33, 1, 0.68, 1] },
  slowest: { duration: 1.2, ease: [0.33, 1, 0.68, 1] },
  spring: { type: "spring" as const, stiffness: 100, damping: 15 },
  springBouncy: { type: "spring" as const, stiffness: 200, damping: 10 },
} satisfies Record<string, Transition>;

// ========================================
// FADE VARIANTS
// ========================================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.normal },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: transitions.slow },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: transitions.slow },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: transitions.slower },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: transitions.slower },
};

// ========================================
// SCALE VARIANTS
// ========================================

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: transitions.slow },
};

export const scaleInBounce: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: transitions.springBouncy },
};

// ========================================
// STAGGER CONTAINERS
// ========================================

export const staggerContainer = (staggerDelay: number = 0.1): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.2,
    },
  },
});

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// ========================================
// STAGGER ITEMS
// ========================================

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: transitions.normal },
};

export const staggerItemFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.fast },
};

// ========================================
// SPECIAL EFFECTS
// ========================================

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: transitions.slower },
};

export const heroImage: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: { opacity: 1, scale: 1, transition: transitions.slowest },
};

export const revealText: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
    }
  },
};

export const revealTextStagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// ========================================
// SCROLL REVEAL
// ========================================

export const scrollReveal = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.33, 1, 0.68, 1],
    },
  },
});

// ========================================
// VIEWPORT CONFIG
// ========================================

export const viewport = {
  once: true,
  amount: 0.2,
  margin: "0px 0px -100px 0px",
};

export const viewportEarly = {
  once: true,
  amount: 0.1,
  margin: "0px 0px -50px 0px",
};

export const viewportLate = {
  once: true,
  amount: 0.3,
  margin: "0px 0px -150px 0px",
};

// ========================================
// HOVER VARIANTS
// ========================================

export const hoverScale = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: transitions.fast },
  tap: { scale: 0.98, transition: { duration: 0.1 } },
};

export const hoverLift = {
  rest: { y: 0, boxShadow: "0 1px 3px rgba(0,0,0,0.12)" },
  hover: { 
    y: -4, 
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)", 
    transition: transitions.normal 
  },
};

// ========================================
// WORD REVEAL (for text animations)
// ========================================

export const wordRevealContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

export const wordRevealItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.33, 1, 0.68, 1],
    }
  },
};

// ========================================
// CARD ANIMATIONS
// ========================================

export const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.05, 
    y: -8,
    transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
  },
};

export const imageZoom: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.08, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } },
};

