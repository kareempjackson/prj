import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://psychforracialjustice.org";

export const metadata: Metadata = {
  // Primary metadata
  title: {
    default: "Psychologists for Racial Justice | Advancing Equity Through Psychology",
    template: "%s | Psychologists for Racial Justice",
  },
  description:
    "Psychologists for Racial Justice (PRJ) unites mental health professionals committed to dismantling systemic racism. We advance racial equity through research, education, community engagement, and professional development for psychologists.",
  keywords: [
    "racial justice",
    "psychology",
    "mental health",
    "psychologists",
    "racial equity",
    "anti-racism",
    "BIPOC mental health",
    "continuing education",
    "CE credits",
    "APA approved",
    "systemic racism",
    "mental health equity",
    "diversity in psychology",
    "cultural competence",
    "racial trauma",
    "healing spaces",
  ],
  authors: [{ name: "Psychologists for Racial Justice" }],
  creator: "Psychologists for Racial Justice",
  publisher: "Psychologists for Racial Justice",

  // Favicon and icons
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/icon.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/icon.png",
  },

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Psychologists for Racial Justice",
    title: "Psychologists for Racial Justice | Advancing Equity Through Psychology",
    description:
      "We unite mental health professionals committed to dismantling systemic racism and fostering a more just world. Join our community advancing racial equity through psychology.",
    images: [
      {
        url: `${siteUrl}/images/logos/PRJ%20Horizontal%20Color.png`,
        width: 1200,
        height: 630,
        alt: "Psychologists for Racial Justice - Advancing equity through psychology and action",
        type: "image/png",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Psychologists for Racial Justice | Advancing Equity Through Psychology",
    description:
      "Uniting mental health professionals to dismantle systemic racism. Research, education, community engagement & CE credits for psychologists.",
    images: [`${siteUrl}/images/logos/PRJ%20Horizontal%20Color.png`],
    creator: "@Psych4RJ",
    site: "@Psych4RJ",
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Canonical URL
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },

  // Additional metadata
  category: "Psychology & Mental Health",
  classification: "Nonprofit Organization",

  // Verification (add your actual verification codes)
  verification: {
    google: "your-google-verification-code", // Replace with actual code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // App-specific
  applicationName: "Psychologists for Racial Justice",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  // Other SEO tags
  other: {
    "theme-color": "#0B0D12",
    "msapplication-TileColor": "#0B0D12",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F2" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0D12" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Psychologists for Racial Justice",
  alternateName: "PRJ",
  url: siteUrl,
  logo: `${siteUrl}/images/logos/PRJ%20Horizontal%20Color.png`,
  description:
    "Psychologists for Racial Justice is dedicated to advancing racial equity and social justice through research, education, and community engagement.",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    streetAddress: "267 Langley Drive PMB 1566",
    addressLocality: "Lawrenceville",
    addressRegion: "GA",
    postalCode: "33046-6407",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-773-425-3884",
    contactType: "general inquiries",
    email: "psych4rj@gmail.com",
  },
  sameAs: [
    "https://www.facebook.com/PsychologistsforRacialJustice",
    "https://twitter.com/Psych4RJ",
    "https://www.instagram.com/psych4rj",
    "https://www.linkedin.com/company/psychologists-for-racial-justice",
  ],
  nonprofitStatus: "Nonprofit501c3",
  areaServed: "United States",
  knowsAbout: [
    "Racial Justice",
    "Psychology",
    "Mental Health",
    "Anti-Racism",
    "Continuing Education",
    "BIPOC Mental Health",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-dvh bg-paper font-sans text-ink antialiased">
        {/* Skip Link for keyboard navigation - ADA compliance */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-6 focus:py-3 focus:rounded-lg focus:bg-ink focus:text-paper focus:font-semibold focus:text-sm focus:outline-none focus:ring-2 focus:ring-paper focus:ring-offset-2 focus:ring-offset-ink focus:shadow-lg transition-all duration-200"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
