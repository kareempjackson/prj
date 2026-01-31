"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { NavHeader } from "../../components/brand/NavHeader";
import {
  fadeInUp,
  staggerContainer,
  viewportEarly,
  slideInFromBottom,
  staggerContainerFast,
} from "../../lib/animations";

// Sleek SVG Icons with accessibility support
const AccessibilityIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <circle cx="12" cy="4" r="2" />
    <path d="M12 6v6" />
    <path d="M8 10l4 2 4-2" />
    <path d="M8 22l4-10 4 10" />
  </svg>
);

const EyeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const KeyboardIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
    <path d="M6 8h.001" />
    <path d="M10 8h.001" />
    <path d="M14 8h.001" />
    <path d="M18 8h.001" />
    <path d="M8 12h.001" />
    <path d="M12 12h.001" />
    <path d="M16 12h.001" />
    <path d="M7 16h10" />
  </svg>
);

const VolumeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <polygon points="11,5 6,9 2,9 2,15 6,15 11,19 11,5" />
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
  </svg>
);

const SmartphoneIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false">
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9,12 11,14 15,10" />
  </svg>
);

const FileTextIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14,2 14,8 20,8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export default function AccessibilityContent() {
  const lastUpdated = "January 15, 2026";

  const commitments = [
    {
      icon: EyeIcon,
      title: "Visual Accessibility",
      description:
        "High contrast colors, scalable fonts, and alternative text for all meaningful images. Our color palette meets WCAG AA contrast requirements.",
    },
    {
      icon: KeyboardIcon,
      title: "Keyboard Navigation",
      description:
        "Full keyboard accessibility throughout the site. All interactive elements are reachable and operable using keyboard-only navigation.",
    },
    {
      icon: VolumeIcon,
      title: "Screen Reader Support",
      description:
        "Semantic HTML structure, ARIA labels, and proper heading hierarchy ensure compatibility with assistive technologies.",
    },
    {
      icon: SmartphoneIcon,
      title: "Responsive Design",
      description:
        "Our website adapts seamlessly to all screen sizes and devices, ensuring a consistent experience across all platforms.",
    },
  ];

  const standards = [
    {
      icon: ShieldCheckIcon,
      title: "WCAG 2.1 Level AA",
      description:
        "We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA, covering a wide range of recommendations for making web content more accessible.",
    },
    {
      icon: FileTextIcon,
      title: "Americans with Disabilities Act",
      description:
        "Our digital properties are designed to comply with the accessibility requirements of the ADA, ensuring equal access to our services for people with disabilities.",
    },
    {
      icon: SettingsIcon,
      title: "Section 508 Compliance",
      description:
        "We work to meet Section 508 standards, ensuring our website is accessible to federal employees and members of the public with disabilities.",
    },
  ];

  const features = [
    "Skip navigation links for quick access to main content",
    "Consistent navigation structure across all pages",
    "Descriptive link text that makes sense out of context",
    "Form labels and error messages clearly associated",
    "Sufficient color contrast for text and elements",
    "Resizable text up to 200% without loss of function",
    "No content that flashes more than three times per second",
    "Captions and transcripts for video and audio content",
    "Clear and simple language throughout the website",
    "Logical reading order and tab sequence",
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
                style={{ color: "#a4c639" }}
                variants={fadeInUp}
              >
                <AccessibilityIcon />
                <span>Commitment</span>
              </motion.div>

              <motion.h1
                className="text-display text-2xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] sm:leading-[1.05] tracking-tight"
                variants={fadeInUp}
              >
                Accessibility Statement
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
              "linear-gradient(90deg, transparent 0%, #a4c639 20%, #e07a4d 50%, #c94b6d 80%, transparent 100%)",
          }}
        />
      </section>


      {/* Commitments Grid */}
      <section className="py-12 sm:py-20 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.p
            className="text-lg sm:text-xl text-ink/70 leading-relaxed mb-12 max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={viewportEarly}
            variants={fadeInUp}
          >
            Psychologists for Racial Justice is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportEarly}
            variants={staggerContainerFast}
          >
            {commitments.map((item, index) => (
              <motion.div
                key={item.title}
                className="p-6 rounded-2xl bg-paper border border-border"
                variants={slideInFromBottom}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-paper"
                    style={{
                      background: `linear-gradient(135deg, ${index % 2 === 0 ? "#a4c639" : "#e07a4d"}, ${index % 2 === 0 ? "#e07a4d" : "#c94b6d"})`,
                    }}
                  >
                    <item.icon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink mb-2">
                      {item.title}
                    </h3>
                    <p className="text-ink/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-12 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportEarly}
            variants={fadeInUp}
          >
            <p
              className="text-xs tracking-[0.2em] uppercase font-medium mb-3"
              style={{ color: "#e07a4d" }}
            >
              Compliance
            </p>
            <h2 className="text-display text-2xl sm:text-3xl leading-tight tracking-tight">
              Standards we follow
            </h2>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportEarly}
            variants={staggerContainer(0.1)}
          >
            {standards.map((standard, index) => (
              <motion.div
                key={standard.title}
                className="flex items-start gap-4"
                variants={fadeInUp}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-paper"
                  style={{
                    background: `linear-gradient(135deg, ${index === 0 ? "#a4c639" : index === 1 ? "#e07a4d" : "#c94b6d"}, ${index === 0 ? "#e07a4d" : index === 1 ? "#c94b6d" : "#a4c639"})`,
                  }}
                >
                  <standard.icon />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink mb-2">
                    {standard.title}
                  </h3>
                  <p className="text-ink/60 leading-relaxed">
                    {standard.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Checklist */}
      <section className="py-12 sm:py-20 bg-ink text-paper">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div
            className="mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={viewportEarly}
            variants={fadeInUp}
          >
            <p
              className="text-xs tracking-[0.2em] uppercase font-medium mb-3"
              style={{ color: "#a4c639" }}
            >
              Features
            </p>
            <h2 className="text-display text-2xl sm:text-3xl leading-tight tracking-tight">
              Accessibility features we implement
            </h2>
          </motion.div>

          <motion.ul
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportEarly}
            variants={staggerContainerFast}
          >
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3"
                variants={slideInFromBottom}
              >
                <span
                  className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${index % 3 === 0 ? "#a4c639" : index % 3 === 1 ? "#e07a4d" : "#c94b6d"}, ${index % 3 === 0 ? "#e07a4d" : index % 3 === 1 ? "#c94b6d" : "#a4c639"})`,
                  }}
                >
                  <CheckIcon />
                </span>
                <span className="text-paper/80 leading-relaxed">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Feedback CTA */}
      <section className="py-10 sm:py-16 bg-surface" aria-labelledby="feedback-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.div
            className="p-8 rounded-2xl bg-paper border border-border"
            initial="hidden"
            whileInView="visible"
            viewport={viewportEarly}
            variants={fadeInUp}
          >
            <h3 id="feedback-heading" className="text-display text-xl text-ink mb-3">
              Report Accessibility Issues
            </h3>
            <p className="text-ink/60 text-sm leading-relaxed mb-6">
              We strive to ensure our website is accessible to everyone. If you encounter any 
              accessibility barriers or have suggestions for improvement, please contact us. 
              Your feedback helps us improve the user experience for all visitors.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center text-paper text-xs" style={{ background: 'linear-gradient(135deg, #a4c639, #e07a4d)' }}>
                  <CheckIcon />
                </span>
                <p className="text-ink/70 text-sm">
                  <strong className="text-ink">Email:</strong>{" "}
                  <a 
                    href="mailto:accessibility@psychforracialjustice.org" 
                    className="underline hover:text-ink transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
                    style={{ color: '#e07a4d' }}
                  >
                    accessibility@psychforracialjustice.org
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center text-paper text-xs" style={{ background: 'linear-gradient(135deg, #e07a4d, #c94b6d)' }}>
                  <CheckIcon />
                </span>
                <p className="text-ink/70 text-sm">
                  <strong className="text-ink">Phone:</strong>{" "}
                  <a 
                    href="tel:617-555-0123" 
                    className="underline hover:text-ink transition-colors focus:outline-none focus:ring-2 focus:ring-accent rounded"
                    style={{ color: '#e07a4d' }}
                  >
                    617-555-0123
                  </a>
                </p>
              </div>
            </div>
            <p className="text-ink/50 text-xs">
              Please include the URL of the page, a description of the issue, and any assistive technology you are using.
            </p>
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

