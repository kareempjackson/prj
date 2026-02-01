import * as React from "react";
import { cn } from "./cn";

export type IconButtonVariant = "ghost" | "secondary";
export type IconButtonSize = "sm" | "md" | "lg";

export type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
};

const base =
  "ring-focus inline-flex items-center justify-center rounded-full border transition-colors disabled:pointer-events-none disabled:opacity-50";

const variantClasses: Record<IconButtonVariant, string> = {
  ghost:
    "border-transparent bg-transparent text-ink hover:bg-ink/[0.04] active:bg-ink/[0.06]",
  secondary: "border-border bg-paper text-ink hover:bg-surface active:bg-paper",
};

const sizeClasses: Record<IconButtonSize, string> = {
  sm: "h-9 w-9",
  md: "h-10 w-10",
  lg: "h-11 w-11",
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = "ghost", size = "md", type, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type ?? "button"}
        className={cn(base, variantClasses[variant], sizeClasses[size], className)}
        {...props}
      />
    );
  },
);

IconButton.displayName = "IconButton";





