import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";
import { cn } from "./cn";

export type FooterVariant = "dark" | "light";

export type FooterProps = {
  variant?: FooterVariant;
  className?: string;
};

function ArrowRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" {...props}>
      <path
        d="M7 5l6 5-6 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SponsorStrip({ tone }: { tone: FooterVariant }) {
  const items = ["North Star Fund", "Civic Studio", "Community Lab", "Partners"];
  const border = tone === "dark" ? "border-paper/12" : "border-border";
  const bg = tone === "dark" ? "bg-paper/5" : "bg-surface";
  const text = tone === "dark" ? "text-paper/80" : "text-muted";

  return (
    <div className={cn("rounded-3xl border px-6 py-5", border, bg)}>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className={cn("text-xs tracking-[0.16em] uppercase", text)}>
          Sponsored by
        </p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {items.map((t) => (
            <span
              key={t}
              className={cn(
                "text-sm font-medium",
                tone === "dark" ? "text-paper/90" : "text-ink",
              )}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Newsletter({ tone }: { tone: FooterVariant }) {
  const panel =
    tone === "dark"
      ? "border-paper/12 bg-paper/5 text-paper"
      : "border-border bg-surface text-ink";
  const muted = tone === "dark" ? "text-paper/70" : "text-muted";

  return (
    <div className={cn("rounded-3xl border p-8", panel)}>
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <h3 className="text-display text-2xl leading-tight">
            Stay connected with the work.
          </h3>
          <p className={cn("mt-2 text-sm leading-6", muted)}>
            A measured newsletter: new research, community stories, and ways to
            support racial justice.
          </p>
        </div>
        <div className="md:col-span-5">
          <a
            href="http://eepurl.com/iK2PlE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant={tone === "dark" ? "secondary" : "primary"}
              className={cn(
                "h-11 w-full",
                tone === "dark" ? "bg-paper text-ink hover:bg-paper/95" : null,
              )}
              rightIcon={<ArrowRightIcon />}
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </Button>
          </a>
          <p className={cn("mt-2 text-xs", muted)}>
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
}

export function Footer({ variant = "dark", className }: FooterProps) {
  const dark = variant === "dark";

  const wrapper = cn(
    dark ? "bg-ink text-paper" : "bg-paper text-ink",
    className,
  );

  const hairline = cn("h-px w-full", dark ? "bg-paper/12" : "bg-border");

  return (
    <footer className={wrapper}>
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10">
          <SponsorStrip tone={variant} />

          <div className={hairline} />

          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <Image
                src="/images/logos/PRJ White Horizontal.png"
                alt="Psychology for Racial Justice"
                width={240}
                height={60}
                className="h-12 w-auto"
              />
              <p
                className={cn(
                  "mt-3 max-w-md text-sm leading-6",
                  dark ? "text-paper/70" : "text-muted",
                )}
              >
                A premium, editorial system for research, engagement, and
                community action—designed with restraint and clarity.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 md:col-span-7 md:grid-cols-3">
              <div>
                <p
                  className={cn(
                    "text-xs tracking-[0.16em] uppercase",
                    dark ? "text-paper/70" : "text-muted",
                  )}
                >
                  Organization
                </p>
                <ul className="mt-4 grid gap-2 text-sm">
                  {["About", "Engage", "Support", "News"].map((t) => (
                    <li key={t}>
                      <Link
                        href="#"
                        className={cn(
                          "ring-focus rounded-lg px-1 py-1 transition-colors",
                          dark ? "hover:bg-paper/8" : "hover:bg-ink/[0.04]",
                        )}
                      >
                        {t}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p
                  className={cn(
                    "text-xs tracking-[0.16em] uppercase",
                    dark ? "text-paper/70" : "text-muted",
                  )}
                >
                  Resources
                </p>
                <ul className="mt-4 grid gap-2 text-sm">
                  {["Research", "Reports", "Media Kit", "Press"].map((t) => (
                    <li key={t}>
                      <Link
                        href="#"
                        className={cn(
                          "ring-focus rounded-lg px-1 py-1 transition-colors",
                          dark ? "hover:bg-paper/8" : "hover:bg-ink/[0.04]",
                        )}
                      >
                        {t}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p
                  className={cn(
                    "text-xs tracking-[0.16em] uppercase",
                    dark ? "text-paper/70" : "text-muted",
                  )}
                >
                  Contact
                </p>
                <ul className="mt-4 grid gap-2 text-sm">
                  {["Partnerships", "Newsletter", "Careers", "Contact"].map(
                    (t) => (
                      <li key={t}>
                        <Link
                          href="#"
                          className={cn(
                            "ring-focus rounded-lg px-1 py-1 transition-colors",
                            dark ? "hover:bg-paper/8" : "hover:bg-ink/[0.04]",
                          )}
                        >
                          {t}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>

          <Newsletter tone={variant} />

          <div className={hairline} />

          <div className="flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p className={cn(dark ? "text-paper/70" : "text-muted")}>
              © {new Date().getFullYear()} Psychology for Racial Justice. All
              rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {[
                { label: "Privacy", href: "/privacy" },
                { label: "Terms", href: "/terms" },
                { label: "Accessibility", href: "/accessibility" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "ring-focus rounded-lg px-1 py-1 transition-colors",
                    dark ? "text-paper/70 hover:bg-paper/8" : "text-muted hover:bg-ink/[0.04]",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



