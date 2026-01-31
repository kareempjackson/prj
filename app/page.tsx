import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Psychologists for Racial Justice | Advancing Equity Through Psychology & Action",
  description:
    "Psychologists for Racial Justice (PRJ) unites mental health professionals to dismantle systemic racism. Join our community advancing racial equity through research, education, healing spaces, events, and advocacy. APA-approved CE credits available.",
  keywords: [
    "racial justice psychology",
    "mental health professionals",
    "anti-racism training",
    "BIPOC mental health",
    "systemic racism",
    "psychology conferences",
    "racial equity",
    "healing spaces",
    "mental health advocacy",
    "psychologists for racial justice",
  ],
  openGraph: {
    title: "Psychologists for Racial Justice | Advancing Equity Through Psychology",
    description:
      "We unite mental health professionals committed to dismantling systemic racism. Join our community advancing racial equity through psychology and action.",
    url: "/",
    type: "website",
  },
  twitter: {
    title: "Psychologists for Racial Justice | Advancing Equity Through Psychology",
    description:
      "Mental health professionals dismantling systemic racism. Research, education, healing spaces & advocacy for racial equity.",
  },
  alternates: {
    canonical: "/",
  },
};

// JSON-LD for homepage
const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Psychologists for Racial Justice",
  description:
    "Psychologists for Racial Justice unites mental health professionals committed to dismantling systemic racism and fostering a more just world.",
  url: "https://psychforracialjustice.org",
  mainEntity: {
    "@type": "Organization",
    name: "Psychologists for Racial Justice",
    alternateName: "PRJ",
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
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <HomeContent />
    </>
  );
}
