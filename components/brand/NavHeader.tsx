import * as React from "react";
import Link from "next/link";
import { Button } from "./Button";
import { IconButton } from "./IconButton";
import { Pill } from "./Pill";
import { cn } from "./cn";

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none" {...props}>
      <path
        d="M4 6.25h12M4 10h12M4 13.75h12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export type NavHeaderProps = {
  className?: string;
  sticky?: boolean;
  glass?: boolean;
  tone?: "light" | "dark";
};

export function NavHeader({
  className,
  sticky = true,
  glass = true,
  tone = "light",
}: NavHeaderProps) {
  const nav = [
    { label: "About", href: "#about" },
    { label: "What We Do", href: "#what-we-do" },
    { label: "Events", href: "#events" },
    { label: "Members", href: "#team" },
    { label: "Conferences", href: "#conference" },
    // { label: "Contact", href: "#" },
  ] as const;

  const dark = tone === "dark";

  return (
    <header
      className={cn(sticky ? "sticky top-4 z-50" : "relative", className)}
    >
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={cn(
            "rounded-full px-3 py-2",
            dark
              ? glass
                ? "bg-ink/55 backdrop-blur-md text-paper"
                : "bg-ink text-paper"
              : glass
              ? "bg-paper/70 backdrop-blur-md"
              : "bg-paper"
          )}
        >
          <div className="flex items-center justify-between gap-3">
            <Link
              href="/"
              className="ring-focus inline-flex items-baseline gap-2 rounded-full px-3 py-2"
              aria-label="Home"
            >
              <span className="text-display text-[0.98rem] leading-none">
                Psychology
              </span>
              <span
                className={cn(
                  "hidden text-xs sm:inline",
                  dark ? "text-paper/70" : "text-muted"
                )}
              >
                for Racial Justice
              </span>
            </Link>

            <nav
              className="hidden items-center gap-1 md:flex"
              aria-label="Main"
            >
              {nav.map((item) => (
                <Pill
                  key={item.label}
                  as="a"
                  href={item.href}
                  className={cn(
                    "border-transparent bg-transparent transition-colors",
                    dark
                      ? "text-paper hover:bg-ground hover:text-ink"
                      : "hover:bg-ground hover:text-ink"
                  )}
                >
                  {item.label}
                </Pill>
              ))}
            </nav>

            <div className="flex items-center gap-1.5">
              <div className="hidden sm:block">
                <Button
                  variant="secondary"
                  size="sm"
                  className={cn(
                    dark
                      ? "bg-paper text-ink border-paper/30 hover:bg-paper/95"
                      : "bg-paper/60"
                  )}
                >
                  Make a donation
                </Button>
              </div>

              <div className="md:hidden">
                <IconButton
                  aria-label="Open menu"
                  variant="secondary"
                  className={cn(
                    dark
                      ? "bg-paper/10 text-paper border-paper/15 hover:bg-paper/12 active:bg-paper/14"
                      : null
                  )}
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
