import * as React from "react";
import { cn } from "./cn";

export type CardElevation = "none" | "soft" | "medium" | "float";

export type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  elevation?: CardElevation;
};

const elevationClasses: Record<CardElevation, string> = {
  none: "shadow-none",
  soft: "shadow-soft",
  medium: "shadow-medium",
  float: "shadow-float",
};

export function Card({
  className,
  elevation = "soft",
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface text-ink rounded-2xl border border-border",
        elevationClasses[elevation],
        className,
      )}
      {...props}
    />
  );
}






