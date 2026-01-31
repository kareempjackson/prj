import type { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Psychologists for Racial Justice. Learn about account registration, intellectual property, event registration, CE credits, and acceptable use of our services.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "user agreement",
    "acceptable use",
    "intellectual property",
    "event registration",
    "continuing education",
    "nonprofit terms",
    "legal terms",
    "service agreement",
  ],
  openGraph: {
    title: "Terms of Service | Psychologists for Racial Justice",
    description:
      "Terms and conditions for using Psychologists for Racial Justice services and website.",
    url: "/terms",
    type: "website",
  },
  twitter: {
    title: "Terms of Service | Psychologists for Racial Justice",
    description:
      "Terms and conditions for PRJ services, events, and continuing education.",
  },
  alternates: {
    canonical: "/terms",
  },
};

// JSON-LD for terms page
const termsJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Terms of Service",
  description:
    "Terms of service for Psychologists for Racial Justice website and services.",
  url: "https://psychforracialjustice.org/terms",
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
        name: "Terms of Service",
        item: "https://psychforracialjustice.org/terms",
      },
    ],
  },
};

export default function TermsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsJsonLd) }}
      />
      <TermsContent />
    </>
  );
}
