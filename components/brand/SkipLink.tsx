"use client";

import * as React from "react";
import { cn } from "./cn";

export type SkipLinkProps = {
  href?: string;
  children?: React.ReactNode;
  className?: string;
};

/**
 * Skip Link Component
 * Provides keyboard users a way to skip repetitive navigation content
 * and jump directly to main content.
 * 
 * Based on WCAG 2.1 Level A - 2.4.1 Bypass Blocks
 * https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html
 */
export function SkipLink({
  href = "#main-content",
  children = "Skip to main content",
  className,
}: SkipLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        // Visually hidden by default
        "sr-only",
        // Show on focus with high contrast styling
        "focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999]",
        "focus:px-6 focus:py-3 focus:rounded-lg",
        "focus:bg-ink focus:text-paper",
        "focus:font-semibold focus:text-sm",
        "focus:outline-none focus:ring-2 focus:ring-paper focus:ring-offset-2 focus:ring-offset-ink",
        "focus:shadow-lg",
        "transition-all duration-200",
        className
      )}
    >
      {children}
    </a>
  );
}

