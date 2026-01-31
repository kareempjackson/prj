/**
 * Animation Utilities for Framer Motion
 * Reusable animation variants and transitions
 * Optimized for smooth 60fps scrolling
 */

import { Variants, Transition } from "framer-motion";

// ========================================
// TRANSITIONS (Optimized for smoothness)
// ========================================

export const transitions = {
  fast: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const },
  normal: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
  slow: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  slower: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  slowest: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const },
  spring: { type: "spring" as const, stiffness: 120, damping: 20 },
  springBouncy: { type: "spring" as const, stiffness: 180, damping: 15 },
} satisfies Record<string, Transition>;

// ========================================
// FADE VARIANTS (Reduced offsets for smoother animations)
// ========================================

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.normal },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: transitions.normal },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: transitions.normal },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: transitions.slow },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: transitions.slow },
};

// ========================================
// SCALE VARIANTS
// ========================================

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: transitions.normal },
};

export const scaleInBounce: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: transitions.spring },
};

// ========================================
// STAGGER CONTAINERS (Faster stagger for smoother feel)
// ========================================

export const staggerContainer = (staggerDelay: number = 0.06): Variants => ({
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.1,
    },
  },
});

export const staggerContainerFast: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerSlow: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

// ========================================
// STAGGER ITEMS
// ========================================

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: transitions.fast },
};

export const staggerItemFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transitions.fast },
};

// ========================================
// SPECIAL EFFECTS (Optimized for smoothness)
// ========================================

export const slideInFromBottom: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: transitions.slow },
};

export const heroImage: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export const revealText: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    }
  },
};

export const revealTextStagger: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

// ========================================
// SCROLL REVEAL
// ========================================

export const scrollReveal = (delay: number = 0): Variants => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
});

// ========================================
// VIEWPORT CONFIG (Optimized trigger points)
// ========================================

export const viewport = {
  once: true,
  amount: 0.15,
  margin: "0px 0px -60px 0px",
};

export const viewportEarly = {
  once: true,
  amount: 0.08,
  margin: "0px 0px -30px 0px",
};

export const viewportLate = {
  once: true,
  amount: 0.25,
  margin: "0px 0px -80px 0px",
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
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.05,
    },
  },
};

export const wordRevealItem: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    }
  },
};

// ========================================
// CARD ANIMATIONS
// ========================================

export const cardHover: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { 
    scale: 1.02, 
    y: -4,
    transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
};

export const imageZoom: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

