import * as React from "react";
import { cn } from "./cn";

export type SwitchProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "role" | "aria-checked"
> & {
  checked: boolean;
  onCheckedChange?: (checked: boolean) => void;
};

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked, onCheckedChange, onClick, type, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type ?? "button"}
        role="switch"
        aria-checked={checked}
        className={cn(
          "ring-focus inline-flex h-7 w-12 items-center rounded-full border transition-colors",
          checked
            ? "border-accent/40 bg-accent/90"
            : "border-border bg-ink/[0.06]",
          "disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        onClick={(e) => {
          onClick?.(e);
          if (e.defaultPrevented) return;
          onCheckedChange?.(!checked);
        }}
        {...props}
      >
        <span
          aria-hidden
          className={cn(
            "block h-5 w-5 rounded-full bg-paper transition-transform",
            checked ? "translate-x-[1.45rem]" : "translate-x-1",
          )}
        />
      </button>
    );
  },
);

Switch.displayName = "Switch";


