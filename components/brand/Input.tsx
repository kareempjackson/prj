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
          "aria-[invalid=true]:border-ground/60",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";


