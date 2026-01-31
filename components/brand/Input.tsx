import * as React from "react";
import { cn } from "./cn";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          "ring-focus h-10 w-full rounded-xl border border-border bg-paper px-3 text-sm text-ink placeholder:text-muted",
          "aria-[invalid=true]:border-ground/60 aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-ground/30",
          "focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";


