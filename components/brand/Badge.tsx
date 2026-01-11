import * as React from "react";
import { cn } from "./cn";

export type BadgeVariant = "neutral" | "accent" | "ground";

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const variantClasses: Record<BadgeVariant, string> = {
  neutral: "bg-ink/[0.04] text-ink border-border",
  accent: "bg-accent/[0.10] text-accent border-accent/[0.25]",
  ground: "bg-ground/[0.10] text-ground border-ground/[0.25]",
};

export function Badge({ className, variant = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium tracking-tight",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}


