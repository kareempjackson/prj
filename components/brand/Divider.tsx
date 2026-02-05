import * as React from "react";
import { cn } from "./cn";

export type DividerProps = React.HTMLAttributes<HTMLDivElement>;

export function Divider({ className, ...props }: DividerProps) {
  return <div className={cn("hairline w-full", className)} {...props} />;
}







