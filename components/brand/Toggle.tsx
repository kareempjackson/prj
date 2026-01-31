import * as React from "react";
import { cn } from "./cn";

export type ToggleProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "aria-pressed"
> & {
  pressed: boolean;
  onPressedChange?: (pressed: boolean) => void;
};

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, pressed, onPressedChange, onClick, type, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type ?? "button"}
        aria-pressed={pressed}
        className={cn(
          "ring-focus inline-flex h-10 items-center justify-center rounded-full border px-4 text-sm font-medium transition-colors",
          pressed
            ? "border-border-strong bg-ink text-paper"
            : "border-border bg-paper text-ink hover:bg-surface",
          "disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        onClick={(e) => {
          onClick?.(e);
          if (e.defaultPrevented) return;
          onPressedChange?.(!pressed);
        }}
        {...props}
      />
    );
  },
);

Toggle.displayName = "Toggle";



