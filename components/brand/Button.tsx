import * as React from "react";
import { cn } from "./cn";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "link";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
};

const base =
  "ring-focus inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-ink text-paper hover:bg-ink/92 active:bg-ink/96 border border-transparent",
  secondary:
    "bg-paper text-ink border border-border hover:bg-surface active:bg-paper",
  ghost:
    "bg-transparent text-ink hover:bg-ink/[0.04] active:bg-ink/[0.06] border border-transparent",
  link: "bg-transparent text-ink hover:underline underline-offset-4 border border-transparent px-0",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-base",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      leftIcon,
      rightIcon,
      type,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type ?? "button"}
        className={cn(base, variantClasses[variant], sizeClasses[size], className)}
        {...props}
      >
        {leftIcon ? (
          <span aria-hidden className="inline-flex items-center">
            {leftIcon}
          </span>
        ) : null}
        <span>{children}</span>
        {rightIcon ? (
          <span aria-hidden className="inline-flex items-center">
            {rightIcon}
          </span>
        ) : null}
      </button>
    );
  },
);

Button.displayName = "Button";


