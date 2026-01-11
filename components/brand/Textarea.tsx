import * as React from "react";
import { cn } from "./cn";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows = 4, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          "ring-focus w-full resize-y rounded-xl border border-border bg-paper px-3 py-2 text-sm text-ink placeholder:text-muted",
          "aria-[invalid=true]:border-ground/60",
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";


