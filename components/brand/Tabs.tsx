"use client";

import * as React from "react";
import { cn } from "./cn";

export type TabsItem = {
  value: string;
  label: string;
  content: React.ReactNode;
};

export type TabsProps = {
  items: TabsItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  listClassName?: string;
  panelClassName?: string;
};

export function Tabs({
  items,
  value,
  defaultValue,
  onValueChange,
  className,
  listClassName,
  panelClassName,
}: TabsProps) {
  const isControlled = value != null;
  const [uncontrolled, setUncontrolled] = React.useState<string>(
    defaultValue ?? items[0]?.value ?? "",
  );
  const current = isControlled ? (value as string) : uncontrolled;

  const setValue = (next: string) => {
    if (!isControlled) setUncontrolled(next);
    onValueChange?.(next);
  };

  const activeIndex = Math.max(
    0,
    items.findIndex((t) => t.value === current),
  );
  const active = items[activeIndex];

  return (
    <div className={cn("w-full", className)}>
      <div
        role="tablist"
        aria-label="Tabs"
        className={cn(
          "flex w-full items-center gap-2 overflow-x-auto rounded-full border border-border bg-paper p-1",
          listClassName,
        )}
        onKeyDown={(e) => {
          if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
          e.preventDefault();
          const dir = e.key === "ArrowRight" ? 1 : -1;
          const next = (activeIndex + dir + items.length) % items.length;
          setValue(items[next]!.value);
        }}
      >
        {items.map((t) => {
          const selected = t.value === current;
          return (
            <button
              key={t.value}
              type="button"
              role="tab"
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              className={cn(
                "ring-focus inline-flex h-9 items-center justify-center rounded-full px-4 text-sm font-medium transition-colors",
                selected
                  ? "bg-ink text-paper"
                  : "text-ink hover:bg-ink/[0.04]",
              )}
              onClick={() => setValue(t.value)}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        className={cn("mt-4 text-sm text-ink", panelClassName)}
      >
        {active?.content}
      </div>
    </div>
  );
}


