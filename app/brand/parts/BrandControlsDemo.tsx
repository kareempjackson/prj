"use client";

import * as React from "react";
import { Card } from "../../../components/brand/Card";
import { Switch } from "../../../components/brand/Switch";
import { Toggle } from "../../../components/brand/Toggle";
import { cn } from "../../../components/brand/cn";

export function BrandControlsDemo({ className }: { className?: string }) {
  const [toggle, setToggle] = React.useState(false);
  const [sw, setSw] = React.useState(true);

  return (
    <Card elevation="none" className={cn("p-6", className)}>
      <p className="text-sm font-medium">Toggles</p>
      <div className="mt-4 grid gap-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium">Minimal toggle</p>
            <p className="text-xs text-muted">
              Use for on/off emphasis inside panels.
            </p>
          </div>
          <Toggle pressed={toggle} onPressedChange={setToggle}>
            {toggle ? "On" : "Off"}
          </Toggle>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium">Switch</p>
            <p className="text-xs text-muted">
              Use for settings and preferences.
            </p>
          </div>
          <Switch checked={sw} onCheckedChange={setSw} />
        </div>
      </div>
    </Card>
  );
}


