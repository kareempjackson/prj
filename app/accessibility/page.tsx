import type { Metadata } from "next";
import AccessibilityContent from "./AccessibilityContent";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "Psychologists for Racial Justice is committed to digital accessibility for people with disabilities. Learn about our WCAG 2.1 AA compliance, ADA accessibility, and Section 508 standards.",
  keywords: [
    "accessibility",
    "WCAG 2.1",
    "ADA compliance",
    "Section 508",
    "screen reader",
    "keyboard navigation",
    "web accessibility",
    "assistive technology",
    "disability access",
    "inclusive design",
  ],
  openGraph: {
    title: "Accessibility Statement | Psychologists for Racial Justice",
    description:
      "Our commitment to digital accessibility. WCAG 2.1 AA compliant, ADA accessible, and designed for all users.",
    url: "/accessibility",
    type: "website",
  },
  twitter: {
    title: "Accessibility Statement | Psychologists for Racial Justice",
    description:
      "Our commitment to digital accessibility for all users, including those with disabilities.",
  },
  alternates: {
    canonical: "/accessibility",
  },
};

// JSON-LD for accessibility page
const accessibilityJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Accessibility Statement",
  description:
    "Psychologists for Racial Justice accessibility statement and commitment to digital inclusion.",
  url: "https://psychforracialjustice.org/accessibility",
  isPartOf: {
    "@type": "WebSite",
    name: "Psychologists for Racial Justice",
    url: "https://psychforracialjustice.org",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://psychforracialjustice.org",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Accessibility",
        item: "https://psychforracialjustice.org/accessibility",
      },
    ],
  },
};

export default function AccessibilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(accessibilityJsonLd) }}
      />
      <AccessibilityContent />
    </>
  );
}
