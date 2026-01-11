import * as React from "react";
import { cn } from "./cn";

type PillCommonProps = {
  children: React.ReactNode;
  className?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
};

type PillButtonProps = PillCommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" };

type PillAnchorProps = PillCommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a" };

export type PillProps = PillButtonProps | PillAnchorProps;

export function Pill(props: PillProps) {
  const { className, children, leading, trailing, ...rest } = props as PillProps;
  const as = (props as PillProps).as ?? "button";
  const Comp: any = as === "a" ? "a" : "button";

  const shared = cn(
    "ring-focus inline-flex select-none items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium transition-colors",
    "border-border bg-paper text-ink hover:bg-surface",
    "disabled:pointer-events-none disabled:opacity-50",
    className,
  );

  return (
    <Comp
      className={shared}
      {...(as === "button" ? { type: (rest as any).type ?? "button" } : null)}
      {...(rest as any)}
    >
      {leading ? (
        <span aria-hidden className="inline-flex items-center">
          {leading}
        </span>
      ) : null}
      <span>{children}</span>
      {trailing ? (
        <span aria-hidden className="inline-flex items-center text-muted">
          {trailing}
        </span>
      ) : null}
    </Comp>
  );
}


