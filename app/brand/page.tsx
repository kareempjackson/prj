import * as React from "react";
import { Badge } from "../../components/brand/Badge";
import { Button } from "../../components/brand/Button";
import { Card } from "../../components/brand/Card";
import { Divider } from "../../components/brand/Divider";
import { Footer } from "../../components/brand/Footer";
import { IconButton } from "../../components/brand/IconButton";
import { Input } from "../../components/brand/Input";
import { NavHeader } from "../../components/brand/NavHeader";
import { Pill } from "../../components/brand/Pill";
import { Tabs } from "../../components/brand/Tabs";
import { Textarea } from "../../components/brand/Textarea";
import { cn } from "../../components/brand/cn";
import { BrandControlsDemo } from "./parts/BrandControlsDemo";

function Section({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-12", className)}>
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <div className="md:col-span-5">
          <p className="text-xs tracking-[0.16em] uppercase text-muted">
            {eyebrow}
          </p>
          <h2 className="text-display mt-3 text-3xl leading-tight">{title}</h2>
        </div>
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

function Swatch({
  name,
  hex,
  usage,
  className,
}: {
  name: string;
  hex: string;
  usage: string;
  className: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-4">
      <div className={cn("h-20 w-full rounded-xl border border-border", className)} />
      <div className="mt-4 flex items-baseline justify-between gap-4">
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="mt-1 text-xs text-muted">{usage}</p>
        </div>
        <code className="text-xs text-muted">{hex}</code>
      </div>
    </div>
  );
}

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

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" width="18" height="18" fill="none" {...props}>
      <path
        d="M9 15a6 6 0 1 1 0-12 6 6 0 0 1 0 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M13.5 13.5 17 17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function BrandPage() {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <div className="pt-6">
        <NavHeader glass={false} />
      </div>

      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="py-10">
          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <h1 className="text-display text-4xl leading-tight tracking-tight sm:text-5xl">
                Psychology for Racial Justice — Brand System
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
                Editorial, premium, and restrained. Tokens are defined in{" "}
                <code className="text-ink">app/globals.css</code> via CSS
                variables + Tailwind v4 <code className="text-ink">@theme</code>.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Badge variant="neutral">Fonts: Canela + Söhne</Badge>
                <Badge variant="accent">Accent: Indigo</Badge>
                <Badge variant="ground">Highlight: Ground</Badge>
              </div>
            </div>

            <div className="md:col-span-5">
              <Card elevation="none" className="p-6">
                <p className="text-xs tracking-[0.16em] uppercase text-muted">
                  Quick tokens
                </p>
                <div className="mt-4 grid gap-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Text</span>
                    <span className="font-medium">Ink on Paper</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Focus</span>
                    <span className="font-medium">Accent ring + paper offset</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted">Radii</span>
                    <span className="font-medium">xs → 3xl</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <Divider className="my-8" />

        <Section eyebrow="Palette" title="Color system">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Swatch
              name="Ink"
              hex="#0B0D12"
              usage="Primary text, primary buttons"
              className="bg-ink"
            />
            <Swatch
              name="Paper"
              hex="#FAF7F2"
              usage="Background, surfaces"
              className="bg-paper"
            />
            <Swatch
              name="Ground"
              hex="#5A3A2E"
              usage="Tasteful highlights"
              className="bg-ground"
            />
            <Swatch
              name="Accent"
              hex="#2E3A59"
              usage="Focus rings, key CTAs"
              className="bg-accent"
            />
          </div>

          <Card elevation="none" className="mt-6 p-6">
            <p className="text-sm font-medium">Contrast note</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              Ink on Paper is the default reading mode. Use Accent sparingly for
              interactive emphasis and focus visibility.
            </p>
          </Card>
        </Section>

        <Divider className="my-8" />

        <Section eyebrow="Type" title="Typography scale">
          <div className="grid gap-6 md:grid-cols-12">
            <Card elevation="none" className="p-6 md:col-span-7">
              <p className="text-xs tracking-[0.16em] uppercase text-muted">
                Display (Canela)
              </p>
              <div className="mt-5 grid gap-5">
                <div>
                  <p className="text-xs text-muted">H1</p>
                  <p className="text-display text-4xl leading-tight">
                    Justice, measured and clear.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted">H2</p>
                  <p className="text-display text-3xl leading-tight">
                    Editorial structure with restraint.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted">H3</p>
                  <p className="text-display text-2xl leading-tight">
                    A system for reading and action.
                  </p>
                </div>
              </div>
            </Card>

            <Card elevation="none" className="p-6 md:col-span-5">
              <p className="text-xs tracking-[0.16em] uppercase text-muted">
                UI (Söhne)
              </p>
              <div className="mt-5 grid gap-5">
                <div>
                  <p className="text-xs text-muted">Body</p>
                  <p className="text-sm leading-6">
                    Clear, compact, and readable—optimized for long-form and
                    navigation.
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted">Label</p>
                  <p className="text-sm font-medium">Field label</p>
                </div>
                <div>
                  <p className="text-xs text-muted">Caption</p>
                  <p className="text-xs text-muted">
                    Supporting metadata, timestamps, and helper text.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        <Divider className="my-8" />

        <Section eyebrow="Actions" title="Buttons">
          <div className="grid gap-6">
            <Card elevation="none" className="p-6">
              <p className="text-sm font-medium">Variants</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="primary" disabled>
                  Disabled
                </Button>
              </div>
            </Card>

            <Card elevation="none" className="p-6">
              <p className="text-sm font-medium">Sizes</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Button size="sm" variant="secondary">
                  Small
                </Button>
                <Button size="md" variant="secondary">
                  Medium
                </Button>
                <Button size="lg" variant="secondary">
                  Large
                </Button>
                <Button
                  size="md"
                  variant="secondary"
                  rightIcon={<ArrowRightIcon />}
                >
                  With icon
                </Button>
                <IconButton aria-label="Search" variant="secondary">
                  <SearchIcon />
                </IconButton>
              </div>
            </Card>
          </div>
        </Section>

        <Divider className="my-8" />

        <Section eyebrow="Forms" title="Form controls">
          <div className="grid gap-6 md:grid-cols-12">
            <Card elevation="none" className="p-6 md:col-span-7">
              <div className="grid gap-4">
                <div>
                  <label className="text-sm font-medium" htmlFor="demo-input">
                    Input
                  </label>
                  <div className="mt-2">
                    <Input id="demo-input" placeholder="Email address" />
                  </div>
                </div>

                <div>
                  <label
                    className="text-sm font-medium"
                    htmlFor="demo-textarea"
                  >
                    Textarea
                  </label>
                  <div className="mt-2">
                    <Textarea
                      id="demo-textarea"
                      placeholder="A short note with editorial tone."
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium" htmlFor="demo-select">
                    Select
                  </label>
                  <div className="mt-2">
                    <select
                      id="demo-select"
                      className="ring-focus h-10 w-full rounded-xl border border-border bg-paper px-3 text-sm text-ink"
                      defaultValue="ink"
                    >
                      <option value="ink">Ink</option>
                      <option value="accent">Accent</option>
                      <option value="ground">Ground</option>
                    </select>
                  </div>
                </div>
              </div>
            </Card>

            <BrandControlsDemo className="md:col-span-5" />
          </div>
        </Section>

        <Divider className="my-8" />

        <Section eyebrow="Chips" title="Badges, pills, tabs">
          <div className="grid gap-6">
            <Card elevation="none" className="p-6">
              <p className="text-sm font-medium">Badges + pills</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Badge>Neutral</Badge>
                <Badge variant="accent">Accent</Badge>
                <Badge variant="ground">Ground</Badge>
                <Pill>Editorial chip</Pill>
                <Pill trailing={<ArrowRightIcon className="opacity-70" />}>
                  Read more
                </Pill>
              </div>
            </Card>

            <Card elevation="none" className="p-6">
              <p className="text-sm font-medium">Tabs</p>
              <div className="mt-4">
                <Tabs
                  defaultValue="principles"
                  items={[
                    {
                      value: "principles",
                      label: "Principles",
                      content: (
                        <p className="text-sm leading-6 text-muted">
                          Restrained hierarchy, generous whitespace, and
                          disciplined color usage.
                        </p>
                      ),
                    },
                    {
                      value: "components",
                      label: "Components",
                      content: (
                        <p className="text-sm leading-6 text-muted">
                          Clean primitives with consistent focus, radii, and
                          border language.
                        </p>
                      ),
                    },
                    {
                      value: "voice",
                      label: "Voice",
                      content: (
                        <p className="text-sm leading-6 text-muted">
                          Editorial, calm, precise—never loud or decorative.
                        </p>
                      ),
                    },
                  ]}
                />
              </div>
            </Card>
          </div>
        </Section>

        <Divider className="my-8" />

        <Section eyebrow="Tokens" title="Spacing, radius, shadows">
          <div className="grid gap-6 md:grid-cols-12">
            <Card elevation="none" className="p-6 md:col-span-7">
              <p className="text-sm font-medium">Spacing steps</p>
              <p className="mt-1 text-xs text-muted">
                A compact, editorial rhythm (1–24).
              </p>
              <div className="mt-5 grid gap-3">
                {[
                  { label: "2", cls: "p-2" },
                  { label: "4", cls: "p-4" },
                  { label: "6", cls: "p-6" },
                  { label: "8", cls: "p-8" },
                  { label: "12", cls: "p-12" },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-4">
                    <code className="w-10 text-xs text-muted">p-{s.label}</code>
                    <div className="flex-1 rounded-xl border border-border bg-paper">
                      <div className={cn("rounded-lg bg-ink/[0.04]", s.cls)}>
                        <div className="h-3 w-20 rounded-md bg-ink/[0.12]" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card elevation="none" className="p-6 md:col-span-5">
              <p className="text-sm font-medium">Radius + shadows</p>
              <div className="mt-5 grid gap-4">
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "xs", cls: "rounded-xs" },
                    { label: "sm", cls: "rounded-sm" },
                    { label: "md", cls: "rounded-md" },
                    { label: "lg", cls: "rounded-lg" },
                    { label: "xl", cls: "rounded-xl" },
                    { label: "2xl", cls: "rounded-2xl" },
                    { label: "3xl", cls: "rounded-3xl" },
                  ].map((r) => (
                    <div key={r.label} className="grid gap-1">
                      <div
                        className={cn(
                          "h-12 w-full border border-border bg-paper",
                          r.cls,
                        )}
                      />
                      <p className="text-xs text-muted">{r.label}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-border bg-paper p-4">
                  <p className="text-xs text-muted">
                    Shadow tokens exist, but the brand page stays intentionally
                    flat (no raised elevation).
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Section>

        <Divider className="my-8" />

        <Section eyebrow="Composition" title="Header + footer previews">
          <div className="grid gap-6">
            <Card elevation="none" className="overflow-hidden p-6">
              <p className="text-sm font-medium">Header preview</p>
              <div className="mt-4 rounded-3xl border border-border bg-paper p-6">
                <NavHeader sticky={false} glass={false} />
              </div>
            </Card>

            <Card elevation="none" className="overflow-hidden p-0">
              <div className="p-6">
                <p className="text-sm font-medium">Footer (dark)</p>
                <p className="mt-1 text-xs text-muted">
                  Structured grid, sponsor strip, newsletter block.
                </p>
              </div>
              <Footer variant="dark" />
            </Card>

            <Card elevation="none" className="overflow-hidden p-0">
              <div className="p-6">
                <p className="text-sm font-medium">Footer (light)</p>
                <p className="mt-1 text-xs text-muted">
                  Lighter variant for content-heavy pages.
                </p>
              </div>
              <Footer variant="light" />
            </Card>
          </div>
        </Section>

        <Divider className="my-8" />

        <Section eyebrow="Guidelines" title="Component notes">
          <Card elevation="none" className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium">Do</p>
                <ul className="mt-3 grid gap-2 text-sm text-muted">
                  <li>Use Ink on Paper for reading.</li>
                  <li>Keep focus visible with Accent ring + offset.</li>
                  <li>Prefer hairlines, soft shadows, and generous padding.</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium">Don’t</p>
                <ul className="mt-3 grid gap-2 text-sm text-muted">
                  <li>Overuse Accent or Ground as a primary background.</li>
                  <li>Introduce gradients, glow, or noisy decoration.</li>
                  <li>Mix inconsistent radii or “thick” borders.</li>
                </ul>
              </div>
            </div>
          </Card>
        </Section>
      </main>
    </div>
  );
}


