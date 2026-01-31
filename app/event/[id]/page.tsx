import type { Metadata } from "next";
import EventContent from "./EventContent";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  
  // In a real app, you'd fetch event data from a database
  // For now, we'll handle the known event
  if (id === "healing-while-harmed-2026") {
    return {
      title: "Healing While Harmed 2026 | Virtual Conference on Racism in Healthcare",
      description:
        "Join the 3rd Annual PRJ Virtual Conference on March 13, 2026. Explore racism in mental health systems and healthcare, featuring keynote speakers, panels, and APA-approved CE credits for psychologists.",
      keywords: [
        "Healing While Harmed",
        "racism in healthcare",
        "mental health conference",
        "psychologist conference",
        "racial justice conference",
        "healthcare disparities",
        "medical racism",
        "CE credits",
        "APA approved",
        "virtual conference 2026",
        "BIPOC mental health",
        "systemic racism healthcare",
      ],
      openGraph: {
        title: "Healing While Harmed 2026 | PRJ Virtual Conference",
        description:
          "3rd Annual Virtual Conference: Dismantling racism in mental health systems and healthcare. March 13, 2026. Register now for CE credits.",
        url: `/event/${id}`,
        type: "website",
        images: [
          {
            url: "/images/faith-esele-V190dZavyL4-unsplash.jpg",
            width: 1200,
            height: 630,
            alt: "Healing While Harmed 2026 - Racism in Mental Health Systems Conference",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: "Healing While Harmed 2026 | PRJ Virtual Conference",
        description:
          "Join us March 13, 2026 for the 3rd annual conference on dismantling racism in healthcare. APA-approved CE credits available.",
        images: ["/images/faith-esele-V190dZavyL4-unsplash.jpg"],
      },
      alternates: {
        canonical: `/event/${id}`,
      },
    };
  }

  // Default metadata for unknown events
  return {
    title: "Event",
    description: "Psychologists for Racial Justice event.",
  };
}

// JSON-LD for the event page
const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Healing While Harmed: Racism in Mental Health Systems and Healthcare",
  description:
    "Join the 3rd Annual Psychologists for Racial Justice Virtual Conference exploring racism in mental health systems and healthcare. Features keynote speakers, panel discussions, and APA-approved CE credits.",
  startDate: "2026-03-13T10:00:00-04:00",
  endDate: "2026-03-13T16:00:00-04:00",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
  location: {
    "@type": "VirtualLocation",
    url: "https://zoom.us",
    name: "Zoom Webinar",
  },
  image: "https://psychforracialjustice.org/images/faith-esele-V190dZavyL4-unsplash.jpg",
  organizer: {
    "@type": "Organization",
    name: "Psychologists for Racial Justice",
    url: "https://psychforracialjustice.org",
  },
  performer: [
    {
      "@type": "Person",
      name: "Candice Hargons, PhD",
      jobTitle: "Opening Speaker",
    },
    {
      "@type": "Person",
      name: "Derek M. Griffith, PhD",
      jobTitle: "Keynote Speaker",
    },
  ],
  offers: {
    "@type": "Offer",
    url: "https://www.eventbrite.com/e/healing-while-harmed-racism-in-mental-health-healthcare-systems-tickets-1980195056720",
    availability: "https://schema.org/InStock",
    validFrom: "2025-01-01",
  },
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "psychologist",
  },
  typicalAgeRange: "18+",
  inLanguage: "en",
  isAccessibleForFree: false,
  keywords: [
    "racism in healthcare",
    "mental health conference",
    "racial justice",
    "CE credits",
    "psychologist training",
  ],
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
        name: "Events",
        item: "https://psychforracialjustice.org/#events",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Healing While Harmed 2026",
        item: "https://psychforracialjustice.org/event/healing-while-harmed-2026",
      },
    ],
  },
};

export default function EventPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
      />
      <EventContent />
    </>
  );
}
