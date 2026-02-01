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

// Sleek SVG Icons with accessibility support
const DocumentIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10,9 9,9 8,9" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22,4 12,14.01 9,11.01" />
  </svg>
);

const ServerIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
    <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
    <line x1="6" y1="6" x2="6.01" y2="6" />
    <line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);

const UserPlusIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="20" y1="8" x2="20" y2="14" />
    <line x1="23" y1="11" x2="17" y2="11" />
  </svg>
);

const CopyrightIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="10" />
    <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
  </svg>
);

const EditIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const CreditCardIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const AwardIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21,13.89 7,23 12,20 17,23 15.79,13.88" />
  </svg>
);

const AlertTriangleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const ScaleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <path d="M12 3v18" />
    <path d="M5 6l7-3 7 3" />
    <path d="M5 6v3c0 1.1 3.1 2 7 2s7-.9 7-2V6" />
    <path d="M5 15v3c0 1.1 3.1 2 7 2s7-.9 7-2v-3" />
  </svg>
);

export default function TermsContent() {
  const lastUpdated = "January 15, 2026";

  const sections = [
    {
      icon: CheckCircleIcon,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using the Psychologists for Racial Justice (PRJ) website and services, you accept and agree to be bound by the terms and provisions of this agreement.",
        "If you do not agree to abide by these terms, please do not use our services. We reserve the right to update or modify these terms at any time without prior notice.",
        "Your continued use of our services following any changes constitutes acceptance of those changes.",
      ],
    },
    {
      icon: ServerIcon,
      title: "Use of Services",
      content: [
        "Our website and services are provided for informational, educational, and community-building purposes related to the advancement of racial justice in psychology and mental health.",
        "You agree to use our services only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of our services.",
        "Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our services.",
      ],
    },
    {
      icon: UserPlusIcon,
      title: "Account Registration",
      content: [
        "Some features of our services may require you to register for an account. You agree to provide accurate, current, and complete information during the registration process.",
        "You are responsible for safeguarding your password and for any activities or actions under your account. You agree to notify us immediately of any unauthorized use of your account.",
        "We reserve the right to disable any user account at any time in our sole discretion for any or no reason, including if we believe that you have violated any provision of these terms.",
      ],
    },
    {
      icon: CopyrightIcon,
      title: "Intellectual Property",
      content: [
        "All content on our website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and data compilations, is the property of PRJ or its content suppliers and is protected by United States and international copyright laws.",
        "You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website without our prior written consent.",
        "The PRJ name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of PRJ. You must not use such marks without our prior written permission.",
      ],
    },
    {
      icon: EditIcon,
      title: "User Contributions",
      content: [
        "Our website may contain message boards, forums, bulletin boards, and other interactive features that allow users to post, submit, publish, display, or transmit content or materials.",
        "Any user contribution you post to our site will be considered non-confidential and non-proprietary. By providing any user contribution, you grant us the right to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material.",
        "You represent and warrant that you own or control all rights in and to your user contributions and that all your user contributions comply with these terms.",
      ],
    },
    {
      icon: CreditCardIcon,
      title: "Event Registration & Donations",
      content: [
        "When you register for events or make donations through our website, you agree to provide accurate payment information and authorize us to charge the payment method provided.",
        "Event registration fees and donations are generally non-refundable unless otherwise stated. Cancellation policies for specific events will be provided at the time of registration.",
        "We use secure third-party payment processors and do not store your complete payment information on our servers.",
      ],
    },
    {
      icon: AwardIcon,
      title: "Continuing Education Credits",
      content: [
        "PRJ may offer continuing education (CE) credits for certain programs and events. CE credits are subject to specific requirements and may only be available to eligible participants.",
        "Participants are responsible for verifying that CE credits meet the requirements of their licensing board or professional organization.",
        "We make reasonable efforts to ensure the accuracy of CE information, but we are not responsible for any issues arising from changes in CE requirements or board policies.",
      ],
    },
    {
      icon: AlertTriangleIcon,
      title: "Disclaimers & Limitations",
      content: [
        "The information provided on our website is for general informational purposes only. It is not intended to be a substitute for professional psychological advice, diagnosis, or treatment.",
        "PRJ makes no warranties about the completeness, reliability, or accuracy of this information. Any action you take based upon the information on our website is strictly at your own risk.",
        "In no event shall PRJ, its officers, directors, employees, or agents be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages arising out of or in connection with the use of our services.",
      ],
    },
    {
      icon: ExternalLinkIcon,
      title: "External Links",
      content: [
        "Our website may contain links to third-party websites or services that are not owned or controlled by PRJ.",
        "We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.",
        "We strongly advise you to read the terms and conditions and privacy policies of any third-party websites or services that you visit.",
      ],
    },
    {
      icon: ScaleIcon,
      title: "Governing Law",
      content: [
        "These terms shall be governed and construed in accordance with the laws of the Commonwealth of Massachusetts, United States, without regard to its conflict of law provisions.",
        "Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights.",
        "If any provision of these terms is held to be invalid or unenforceable by a court, the remaining provisions of these terms will remain in effect.",
      ],
    },
  ];

  return (
    <main id="main-content" className="min-h-dvh bg-paper text-ink" role="main">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <NavHeader sticky={true} />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pb-8 sm:pb-16 pt-28 sm:pt-36 lg:pt-44">
          <motion.div
            className="flex items-end justify-between gap-8"
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.1)}
          >
            <div>
              <motion.div
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium mb-6"
                style={{ color: "#c94b6d" }}
                variants={fadeInUp}
              >
                <DocumentIcon />
                <span>Legal</span>
              </motion.div>

              <motion.h1
                className="text-display text-2xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] sm:leading-[1.05] tracking-tight"
                variants={fadeInUp}
              >
                Terms of Service
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
              "linear-gradient(90deg, transparent 0%, #c94b6d 20%, #a4c639 50%, #e07a4d 80%, transparent 100%)",
          }}
        />
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.p
            className="text-lg sm:text-xl text-ink/70 leading-relaxed mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewportEarly}
            variants={fadeInUp}
          >
            Please read these terms carefully before using our services. By accessing or using our website, you agree to be bound by these terms and our Privacy Policy.
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
                      background: `linear-gradient(135deg, ${index % 3 === 0 ? "#c94b6d" : index % 3 === 1 ? "#a4c639" : "#e07a4d"}, ${index % 3 === 0 ? "#a4c639" : index % 3 === 1 ? "#e07a4d" : "#c94b6d"})`,
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
      <section className="py-10 sm:py-16 bg-surface">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportEarly}
            variants={fadeInUp}
          >
            <div>
              <h3 className="text-display text-xl text-ink mb-2">
                Have questions about these terms?
              </h3>
              <p className="text-ink/60 text-sm">
                Our legal team is here to help clarify any concerns.
              </p>
            </div>
            <a
              href="mailto:psych4rj@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-paper rounded-full transition-all hover:opacity-90 whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, #c94b6d, #a4c639)",
              }}
            >
              Contact Legal Team
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
                    <p>267 Langley Drive #1366</p>
                    <p>Lawrenceville, GA 30046-6907</p>
                  </div>
                  <div className="mt-5 space-y-1 text-sm">
                    <p>
                      <a href="tel:+14044106674" className="text-paper/70 hover:text-paper transition-colors">
                        (404) 410-6674
                      </a>
                    </p>
                    <p>
                      <a href="mailto:psych4rj@gmail.com" className="text-paper/70 hover:text-paper transition-colors">
                        psych4rj@gmail.com
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

