import type { Metadata } from "next";
import ContinuingEducationContent from "./ContinuingEducationContent";

export const metadata: Metadata = {
  title: "Continuing Education Credits",
  description:
    "Earn APA-approved continuing education credits for psychologists with Psychologists for Racial Justice. CE programs focused on racial equity, social justice, anti-racism, and BIPOC mental health.",
  keywords: [
    "continuing education credits",
    "CE credits",
    "APA approved",
    "psychologist CE",
    "continuing education psychology",
    "racial justice training",
    "anti-racism CE",
    "BIPOC mental health training",
    "professional development psychology",
    "psychologist training",
    "mental health CE",
    "racial equity education",
  ],
  openGraph: {
    title: "Continuing Education Credits | Psychologists for Racial Justice",
    description:
      "APA-approved CE credits for psychologists. Training programs focused on racial equity, social justice, and anti-racism in mental health practice.",
    url: "/continuing-education",
    type: "website",
  },
  twitter: {
    title: "CE Credits for Psychologists | Psychologists for Racial Justice",
    description:
      "Earn APA-approved CE credits with PRJ. Racial justice, anti-racism, and BIPOC mental health training for psychologists.",
  },
  alternates: {
    canonical: "/continuing-education",
  },
};

// JSON-LD for CE page
const ceJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Psychologists for Racial Justice - Continuing Education",
  description:
    "APA-approved continuing education programs for psychologists focused on racial justice, equity, and anti-racism.",
  url: "https://psychforracialjustice.org/continuing-education",
  parentOrganization: {
    "@type": "Organization",
    name: "Psychologists for Racial Justice",
    url: "https://psychforracialjustice.org",
  },
  educationalCredentialAwarded: "APA Continuing Education Credits",
  areaServed: "United States",
  teaches: [
    "Racial Justice in Psychology",
    "Anti-Racism Training",
    "BIPOC Mental Health",
    "Cultural Competence",
    "Systemic Racism Awareness",
  ],
  accreditation: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "APA Approved Provider",
    recognizedBy: {
      "@type": "Organization",
      name: "American Psychological Association",
    },
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
        name: "Continuing Education",
        item: "https://psychforracialjustice.org/continuing-education",
      },
    ],
  },
};

export default function ContinuingEducation() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ceJsonLd) }}
      />
      <ContinuingEducationContent />
    </>
  );
}
