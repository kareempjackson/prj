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
    <svg viewBox="0 0 20 20" width="16" height="16" fill="none" aria-hidden="true" focusable="false" {...props}>
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

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  );
}

function ThreadsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" focusable="false" {...props}>
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.132-1.13 3.628-1.154 1.12-.018 2.153.086 3.097.293-.048-.596-.16-1.096-.337-1.487-.239-.527-.596-.905-1.063-1.123-.48-.224-1.084-.336-1.797-.336-.714 0-1.319.112-1.8.336-.467.218-.824.596-1.063 1.123-.345.763-.521 1.82-.521 3.14 0 .165.005.33.015.493l-2.051.078c-.017-.214-.026-.435-.026-.66 0-1.702.27-3.07.805-4.067.504-.938 1.216-1.624 2.116-2.038.815-.375 1.76-.566 2.81-.566 1.05 0 1.996.19 2.811.566.9.414 1.612 1.1 2.116 2.038.443.826.71 1.845.798 3.03.502.154.966.358 1.388.62 1.14.71 1.979 1.67 2.494 2.852.752 1.727.793 4.428-1.323 6.5-1.78 1.742-4.1 2.549-7.314 2.574zM9.89 14.908c-.686.04-1.235.23-1.59.55-.385.344-.571.756-.538 1.192.032.422.265.788.674 1.058.487.322 1.16.492 1.949.45 1.065-.057 1.872-.447 2.399-1.16.404-.547.673-1.293.8-2.223-.69-.143-1.452-.21-2.283-.21-.463 0-.935.026-1.411.098v.245z"/>
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
                <div className="mt-4 grid gap-3 text-sm">
                  <div className={cn(dark ? "text-paper/90" : "text-ink")}>
                    <p>267 Langley Drive #1366</p>
                    <p>Lawrenceville, GA 30046-6907</p>
                  </div>
                  <a 
                    href="tel:+14044106674"
                    className={cn(
                      "ring-focus rounded-lg transition-colors",
                      dark ? "text-paper/90 hover:text-paper" : "text-ink hover:text-ink/80",
                    )}
                  >
                    (404) 410-6674
                  </a>
                  <div className="flex items-center gap-3 mt-2">
                    <a
                      href="https://linkedin.com/in/psych4rj"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                      className={cn(
                        "ring-focus rounded-lg p-1 transition-colors",
                        dark ? "text-paper/70 hover:text-paper hover:bg-paper/8" : "text-muted hover:text-ink hover:bg-ink/[0.04]",
                      )}
                    >
                      <LinkedInIcon />
                    </a>
                    <a
                      href="https://instagram.com/psych4rj"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className={cn(
                        "ring-focus rounded-lg p-1 transition-colors",
                        dark ? "text-paper/70 hover:text-paper hover:bg-paper/8" : "text-muted hover:text-ink hover:bg-ink/[0.04]",
                      )}
                    >
                      <InstagramIcon />
                    </a>
                    <a
                      href="https://threads.net/@psych4rj"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Threads"
                      className={cn(
                        "ring-focus rounded-lg p-1 transition-colors",
                        dark ? "text-paper/70 hover:text-paper hover:bg-paper/8" : "text-muted hover:text-ink hover:bg-ink/[0.04]",
                      )}
                    >
                      <ThreadsIcon />
                    </a>
                  </div>
                </div>
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



