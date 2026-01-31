"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { NavHeader } from "../../components/brand/NavHeader";
import {
  fadeInUp,
  staggerContainer,
  viewportEarly,
} from "../../lib/animations";

// Sleek SVG Icons
const ShieldIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const LockIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ShareIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
  </svg>
);

const CookieIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <circle cx="8" cy="9" r="1" fill="currentColor" />
    <circle cx="15" cy="8" r="1" fill="currentColor" />
    <circle cx="10" cy="14" r="1" fill="currentColor" />
    <circle cx="16" cy="14" r="1" fill="currentColor" />
  </svg>
);

const ChildIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="8" r="4" />
    <path d="M12 12v4" />
    <path d="M8 20l4-4 4 4" />
  </svg>
);

const RefreshIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M23 4v6h-6" />
    <path d="M1 20v-6h6" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

export default function PrivacyPage() {
  const lastUpdated = "January 15, 2026";

  const sections = [
    {
      icon: DatabaseIcon,
      title: "Information We Collect",
      content: [
        "We collect information you provide directly to us, such as when you create an account, register for events, make a donation, subscribe to our newsletter, or contact us for support.",
        "This may include your name, email address, postal address, phone number, payment information, and any other information you choose to provide.",
        "We also automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our site.",
      ],
    },
    {
      icon: UserIcon,
      title: "How We Use Your Information",
      content: [
        "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.",
        "We may also use your information to send you newsletters, updates about our programs, and promotional communications. You may opt out of these communications at any time.",
        "Your data helps us understand how our community engages with our mission, allowing us to better serve psychologists and mental health professionals committed to racial justice.",
      ],
    },
    {
      icon: ShareIcon,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this policy.",
        "We may share your information with trusted third-party service providers who assist us in operating our website, conducting our programs, or servicing you, as long as they agree to keep this information confidential.",
        "We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect our or others' rights, property, or safety.",
      ],
    },
    {
      icon: LockIcon,
      title: "Data Security",
      content: [
        "We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights.",
        "All sensitive information you supply is encrypted via Secure Socket Layer (SSL) technology. All payment transactions are processed through a gateway provider and are not stored or processed on our servers.",
        "While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.",
      ],
    },
    {
      icon: ShieldIcon,
      title: "Your Rights & Choices",
      content: [
        "You have the right to access, correct, or delete your personal information at any time. You may also object to or restrict certain processing of your data.",
        "You can update your account information by logging into your account settings. To request deletion of your data or exercise other rights, please contact us at privacy@psychforracialjustice.org.",
        "If you have subscribed to our newsletter, you can unsubscribe at any time by clicking the unsubscribe link in any email we send.",
      ],
    },
    {
      icon: CookieIcon,
      title: "Cookies & Tracking",
      content: [
        "We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.",
        "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our site.",
        "We use analytics services to help us understand how our visitors use the site. These services may use cookies to collect information about your use of our website.",
      ],
    },
    {
      icon: ChildIcon,
      title: "Children's Privacy",
      content: [
        "Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.",
        "If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we can take necessary actions.",
      ],
    },
    {
      icon: RefreshIcon,
      title: "Changes to This Policy",
      content: [
        "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the 'Last Updated' date.",
        "You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.",
      ],
    },
  ];

  return (
    <main className="min-h-dvh bg-paper text-ink">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <NavHeader sticky={true} />

        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-44">
          <motion.div
            className="flex items-end justify-between gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.1)}
          >
            <div>
              <motion.div
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium mb-6"
                style={{ color: "#e07a4d" }}
                variants={fadeInUp}
              >
                <ShieldIcon />
                <span>Legal</span>
              </motion.div>

              <motion.h1
                className="text-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
                variants={fadeInUp}
              >
                Privacy Policy
              </motion.h1>
            </div>

            <motion.p
              className="hidden md:block text-sm text-paper/40 text-right"
              variants={fadeInUp}
            >
              Last updated<br />{lastUpdated}
            </motion.p>
          </motion.div>
        </div>

        {/* Gradient border bottom */}
        <div
          className="h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #e07a4d 20%, #c94b6d 50%, #a4c639 80%, transparent 100%)",
          }}
        />
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <motion.p
            className="text-lg sm:text-xl text-ink/70 leading-relaxed mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportEarly}
            variants={fadeInUp}
          >
            Your privacy matters to us. This policy outlines how Psychologists for Racial Justice collects, uses, and protects your information when you engage with our services and community.
          </motion.p>

          <motion.div
            className="space-y-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportEarly}
            variants={staggerContainer(0.08)}
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                className="relative"
                variants={fadeInUp}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-paper"
                    style={{
                      background: `linear-gradient(135deg, ${index % 3 === 0 ? "#e07a4d" : index % 3 === 1 ? "#c94b6d" : "#a4c639"}, ${index % 3 === 0 ? "#c94b6d" : index % 3 === 1 ? "#a4c639" : "#e07a4d"})`,
                    }}
                  >
                    <section.icon />
                  </div>
                  <h2 className="text-display text-2xl font-medium text-ink pt-1.5">
                    {section.title}
                  </h2>
                </div>

                <div className="pl-14 space-y-4">
                  {section.content.map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-ink/65 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportEarly}
            variants={fadeInUp}
          >
            <div>
              <h3 className="text-display text-xl text-ink mb-2">
                Questions about privacy?
              </h3>
              <p className="text-ink/60 text-sm">
                Contact our privacy team for any concerns or data requests.
              </p>
            </div>
            <a
              href="mailto:privacy@psychforracialjustice.org"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-paper rounded-full transition-all hover:opacity-90 whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, #e07a4d, #c94b6d)",
              }}
            >
              Contact Privacy Team
              <span>→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-paper pt-20">
        <div 
          className="rounded-t-[4rem] p-[3px]"
          style={{ background: 'linear-gradient(90deg, #e07a4d 0%, #c94b6d 50%, #a4c639 100%)' }}
        >
          <footer className="relative bg-ink text-paper rounded-t-[3.85rem] overflow-hidden">
            <div 
              className="absolute top-0 left-1/4 w-1/2 h-96 opacity-10 blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, #c94b6d 0%, transparent 70%)' }}
            />

            <div className="relative mx-auto max-w-7xl px-6 py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
                <div className="lg:col-span-4">
                  <div className="relative h-80 w-80 -mb-12" style={{ marginLeft: '-90px' }}>
                    <Image
                      src="/images/logos/PRJ_White_Transparent-Vertical.png"
                      alt="Psychologists for Racial Justice"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                  <div className="space-y-1 text-sm text-paper/50 tracking-wide">
                    <p>123 Justice Avenue, Suite 200</p>
                    <p>Cambridge, MA 02138</p>
                  </div>
                  <div className="mt-5 space-y-1 text-sm">
                    <p>
                      <a href="tel:617-555-0123" className="text-paper/70 hover:text-paper transition-colors">
                        617-555-0123
                      </a>
                    </p>
                    <p>
                      <a href="mailto:contact@psychforracialjustice.org" className="text-paper/70 hover:text-paper transition-colors">
                        contact@psychforracialjustice.org
                      </a>
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xs font-semibold text-paper/50 uppercase tracking-wider mb-4">About</h3>
                    <nav className="space-y-3">
                      <a href="/#about" className="block text-sm text-paper/70 hover:text-paper transition-colors">Our Mission</a>
                      <a href="/#team" className="block text-sm text-paper/70 hover:text-paper transition-colors">Team</a>
                    </nav>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-paper/50 uppercase tracking-wider mb-4">Programs</h3>
                    <nav className="space-y-3">
                      <a href="/continuing-education" className="block text-sm text-paper/70 hover:text-paper transition-colors">Continuing Education Credits</a>
                      <a href="/#events" className="block text-sm text-paper/70 hover:text-paper transition-colors">Events</a>
                    </nav>
                  </div>
                  </div>

                <div className="lg:col-span-3">
                  <h3 
                    className="text-xs font-semibold uppercase tracking-wider mb-4"
                    style={{ background: 'linear-gradient(90deg, #e07a4d, #c94b6d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                  >
                    Stay Connected
                  </h3>
                  <p className="text-sm text-paper/70 mb-6 leading-relaxed">
                    Join our newsletter for updates on racial justice in mental health.
                  </p>
                  <a
                    href="http://eepurl.com/iK2PlE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-6 rounded-full text-sm font-medium text-paper text-center transition-all hover:opacity-90 hover:scale-[1.02]"
                    style={{ background: 'linear-gradient(135deg, #e07a4d 0%, #c94b6d 50%, #a4c639 100%)' }}
                  >
                    Subscribe
                  </a>
                </div>
              </div>

              <div className="mt-20 pt-8 relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div 
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent 0%, #c94b6d 20%, #e07a4d 50%, #a4c639 80%, transparent 100%)' }}
                />
                <div className="text-xs text-paper/40">
                  © 2026 Psychologists for Racial Justice. All rights reserved.
                </div>
                <div className="flex gap-8 text-xs">
                  <Link href="/privacy" className="text-paper/50 hover:text-paper transition-colors relative group">
                    Privacy
                    <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all" style={{ background: 'linear-gradient(90deg, #e07a4d, #c94b6d)' }} />
                  </Link>
                  <Link href="/terms" className="text-paper/50 hover:text-paper transition-colors relative group">
                    Terms
                    <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all" style={{ background: 'linear-gradient(90deg, #c94b6d, #a4c639)' }} />
                  </Link>
                  <Link href="/accessibility" className="text-paper/50 hover:text-paper transition-colors relative group">
                    Accessibility
                    <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all" style={{ background: 'linear-gradient(90deg, #a4c639, #e07a4d)' }} />
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
