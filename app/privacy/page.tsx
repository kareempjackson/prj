import type { Metadata } from "next";
import PrivacyContent from "./PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Psychologists for Racial Justice collects, uses, and protects your personal information. Our privacy policy covers data collection, security, cookies, and your rights.",
  keywords: [
    "privacy policy",
    "data protection",
    "personal information",
    "cookies policy",
    "data security",
    "GDPR",
    "user rights",
    "data collection",
    "privacy rights",
    "nonprofit privacy",
  ],
  openGraph: {
    title: "Privacy Policy | Psychologists for Racial Justice",
    description:
      "How we collect, use, and protect your personal information. Your privacy matters to us.",
    url: "/privacy",
    type: "website",
  },
  twitter: {
    title: "Privacy Policy | Psychologists for Racial Justice",
    description:
      "Learn how PRJ protects your privacy and personal information.",
  },
  alternates: {
    canonical: "/privacy",
  },
};

// JSON-LD for privacy page
const privacyJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Privacy Policy",
  description:
    "Psychologists for Racial Justice privacy policy - how we collect, use, and protect your information.",
  url: "https://psychforracialjustice.org/privacy",
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
        name: "Privacy Policy",
        item: "https://psychforracialjustice.org/privacy",
      },
    ],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd) }}
      />
      <PrivacyContent />
    </>
  );
}
