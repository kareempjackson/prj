"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { NavHeader } from "../../components/brand/NavHeader";
import {
  fadeInUp,
  fadeInLeft,
  staggerContainer,
  staggerItem,
  revealText,
  viewport,
  viewportEarly,
} from "../../lib/animations";

// Optimized animation for smooth scrolling
const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function ContinuingEducationContent() {
  return (
    <main id="main-content" className="min-h-dvh bg-paper text-ink" role="main">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/ninthgrid-bD3DiLuuOPM-unsplash.jpg"
            alt="Professional education session"
            fill
            priority
            className="object-cover" style={{ objectPosition: 'center 30%' }}
            sizes="100vw"
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(11, 13, 18, 0.5) 0%, rgba(11, 13, 18, 0.7) 50%, rgba(11, 13, 18, 0.9) 100%)' }}
          />
        </div>

        <NavHeader sticky={true} />

        <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 pb-8 sm:pb-16 lg:pb-24">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer(0.12)}
          >
            <motion.p
              className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-paper/50 font-medium"
              variants={fadeInUp}
            >
              Professional Development
            </motion.p>

            <motion.h1
              className="text-display mt-4 sm:mt-6 text-2xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.15] sm:leading-[1.1] tracking-tight text-paper"
              variants={fadeInUp}
            >
              Continuing{" "}
              <span 
                style={{ 
                  background: 'linear-gradient(90deg, #e07a4d, #c94b6d)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Education
              </span>{" "}
              Credits
            </motion.h1>

            <motion.p
              className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-paper/60 max-w-xl leading-relaxed"
              variants={fadeInUp}
            >
              APA-approved continuing education for psychologists committed to racial justice.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* APA Approval Section */}
      <section className="py-12 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div 
              className="lg:col-span-4"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeInLeft}
            >
              <p 
                className="text-xs tracking-[0.25em] uppercase font-medium mb-2"
                style={{ color: '#c94b6d' }}
              >
                APA Approved
              </p>
              <div 
                className="w-12 h-1 rounded-full"
                style={{ background: 'linear-gradient(90deg, #e07a4d, #c94b6d)' }}
              />
            </motion.div>

            <motion.div 
              className="lg:col-span-8"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={revealText}
            >
              <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-ink/80 font-light">
                Psychologists for Racial Justice (PRJ) is approved by the American
                Psychological Association to sponsor continuing education for
                psychologists. PRJ maintains responsibility for this program and
                its content.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instructions Section */}
      <section className="py-12 sm:py-20 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            className="max-w-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer(0.12)}
          >
            <motion.p 
              className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
              style={{ color: '#c94b6d' }}
              variants={fadeInUp}
            >
              How It Works
            </motion.p>
            <motion.h2
              className="text-display text-3xl sm:text-4xl leading-tight tracking-tight mb-12"
              variants={fadeInUp}
            >
              Obtaining{" "}
              <span 
                style={{ 
                  background: 'linear-gradient(90deg, #e07a4d, #c94b6d)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                CE Credits
              </span>
            </motion.h2>

            <motion.div
              className="space-y-8"
              variants={staggerContainer(0.1)}
            >
              <motion.div
                className="grid grid-cols-[3rem_1fr] gap-6"
                variants={staggerItem}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-paper text-sm font-semibold"
                  style={{ background: 'linear-gradient(135deg, #e07a4d, #c94b6d)' }}
                >
                  01
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-semibold mb-2">Register & Access</h3>
                  <p className="text-ink/60 leading-relaxed">
                    Register for the conference and obtain your Zoom link to join the live session.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-[3rem_1fr] gap-6"
                variants={staggerItem}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-paper text-sm font-semibold"
                  style={{ background: 'linear-gradient(135deg, #c94b6d, #a4c639)' }}
                >
                  02
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-semibold mb-2">Full Attendance Required</h3>
                  <p className="text-ink/60 leading-relaxed">
                    You must attend the entire program to earn CE credits.{" "}
                    <span className="font-medium text-ink">Partial credit is not authorized.</span>
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="grid grid-cols-[3rem_1fr] gap-6"
                variants={staggerItem}
              >
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-paper text-sm font-semibold"
                  style={{ background: 'linear-gradient(135deg, #a4c639, #e07a4d)' }}
                >
                  03
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-semibold mb-2">Complete Post-Test</h3>
                  <p className="text-ink/60 leading-relaxed">
                    Score 70% or higher on the post-test to receive your certificate.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Program Goals Section */}
      <section className="py-16 sm:py-24 lg:py-36 bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
          >
            <p 
              className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
              style={{ color: '#e07a4d' }}
            >
              Program Goals
            </p>
            <h2 className="text-display text-3xl sm:text-4xl leading-tight tracking-tight">
              What Our Programs{" "}
              <span 
                style={{ 
                  background: 'linear-gradient(90deg, #e07a4d, #c94b6d, #a4c639)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Achieve
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={viewportEarly}
            variants={staggerContainer(0.1)}
          >
            <motion.div
              className="p-8 rounded-2xl border border-paper/10"
              variants={staggerItem}
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-paper text-sm font-semibold mb-6"
                style={{ background: 'linear-gradient(135deg, #e07a4d, #c94b6d)' }}
              >
                01
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Race, Racial Equity & Social Justice
              </h3>
              <p className="text-paper/60 leading-relaxed">
                Trainings for doctoral-level psychologists focused on race, racial equity, 
                and social justice—spanning practice, education, and research. Building 
                upon graduate competencies to improve public services.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl border border-paper/10"
              variants={staggerItem}
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-paper text-sm font-semibold mb-6"
                style={{ background: 'linear-gradient(135deg, #c94b6d, #a4c639)' }}
              >
                02
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Awareness of Racism & Its Consequences
              </h3>
              <p className="text-paper/60 leading-relaxed">
                Workshops promoting awareness of racism and its consequences, focused on 
                practice, education, and research. Advancing competencies to improve 
                services and professional contributions.
              </p>
            </motion.div>

            <motion.div
              className="p-8 rounded-2xl border border-paper/10"
              variants={staggerItem}
            >
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-paper text-sm font-semibold mb-6"
                style={{ background: 'linear-gradient(135deg, #a4c639, #e07a4d)' }}
              >
                03
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Empowering Underrepresented Groups
              </h3>
              <p className="text-paper/60 leading-relaxed">
                Trainings to empower underrepresented groups to resist and heal from 
                racism, with emphasis on practice and intervention strategies.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Grievance Procedure Section */}
      <section className="py-12 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div 
              className="lg:col-span-4"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeInLeft}
            >
              <p 
                className="text-xs tracking-[0.25em] uppercase font-medium mb-2"
                style={{ color: '#c94b6d' }}
              >
                Policies
              </p>
              <h2 className="text-display text-3xl sm:text-4xl leading-tight tracking-tight">
                Grievance{" "}
                <span 
                  style={{ 
                    background: 'linear-gradient(90deg, #e07a4d, #c94b6d)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Procedure
                </span>
              </h2>
            </motion.div>

            <motion.div 
              className="lg:col-span-8"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={staggerContainer(0.1)}
            >
              <motion.div className="space-y-6 mb-12" variants={fadeIn}>
                <p className="text-ink/70 leading-relaxed">
                  PRJ is fully committed to conducting all activities in strict conformance 
                  with the APA&apos;s Ethical Principles of Psychologists. We comply with all 
                  legal and ethical responsibilities to be non-discriminatory in promotional 
                  activities, program content, and treatment of participants.
                </p>

                <p className="text-ink/70 leading-relaxed">
                  Compliance monitoring is the responsibility of the Education Chair in 
                  consultation with the CE committee, PRJ Ethics Chairperson, and 
                  Convention Chairperson.
                </p>
              </motion.div>

              {/* Divider */}
              <div 
                className="h-px mb-12"
                style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(201, 75, 109, 0.3) 50%, transparent 100%)' }}
              />

              <motion.div className="space-y-10" variants={staggerContainer(0.08)}>
                <motion.div variants={staggerItem}>
                  <h4 className="text-lg font-semibold mb-3">Speaker Grievances</h4>
                  <p className="text-ink/60 leading-relaxed">
                    Concerns about speakers, content, or presentation style should be 
                    submitted in writing. The CE Chair will pass comments to the speaker 
                    while maintaining the complainant&apos;s confidentiality.
                  </p>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <h4 className="text-lg font-semibold mb-3">Workshop Grievances</h4>
                  <p className="text-ink/60 leading-relaxed mb-4">
                    For concerns about workshop offerings, content, or facilities, the 
                    convention chair will mediate as final arbitrator. Available remedies:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 text-sm rounded-full bg-surface text-ink/70">
                      Transfer to another workshop
                    </span>
                    <span className="px-4 py-2 text-sm rounded-full bg-surface text-ink/70">
                      Credit for a future workshop
                    </span>
                    <span className="px-4 py-2 text-sm rounded-full bg-surface text-ink/70">
                      Partial or full refund
                    </span>
                  </div>
                  <p className="text-sm text-ink/40 mt-4">
                    *Credit and refund options require written documentation.
                  </p>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <h4 className="text-lg font-semibold mb-3">CE Program Grievances</h4>
                  <p className="text-ink/60 leading-relaxed">
                    For specific concerns regarding the PRJ CE program, the CE Chair will 
                    attempt to arbitrate and find a resolution.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 sm:py-20 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeInUp}
          >
            <p 
              className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
              style={{ color: '#c94b6d' }}
            >
              Get In Touch
            </p>
            <h2 className="text-display text-3xl sm:text-4xl leading-tight tracking-tight">
              Contact{" "}
              <span 
                style={{ 
                  background: 'linear-gradient(90deg, #e07a4d, #c94b6d)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Information
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerContainer(0.1)}
          >
            {/* Primary Contact */}
            <motion.div 
              className="p-8 rounded-2xl bg-paper"
              variants={staggerItem}
            >
              <p 
                className="text-xs font-medium uppercase tracking-wider mb-4"
                style={{ color: '#c94b6d' }}
              >
                Primary Contact
              </p>
              <h3 className="text-xl font-semibold mb-4">Anmol Satiani, Ph.D.</h3>
              <div className="space-y-2 text-ink/60">
                <p>
                  <a
                    href="mailto:psych4rj@gmail.com"
                    className="hover:text-ink transition-colors"
                  >
                    psych4rj@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:773-425-3884"
                    className="hover:text-ink transition-colors"
                  >
                    773-425-3884
                  </a>
                </p>
                <p className="pt-2 text-sm text-ink/40">
                  267 Langley Drive PMB 1566<br />
                  Lawrenceville, GA 33046-6407
                </p>
              </div>
            </motion.div>

            {/* Alternative Contact */}
            <motion.div 
              className="p-8 rounded-2xl bg-paper"
              variants={staggerItem}
            >
              <p 
                className="text-xs font-medium uppercase tracking-wider mb-4"
                style={{ color: '#c94b6d' }}
              >
                Alternative Contact
              </p>
              <h3 className="text-xl font-semibold mb-1">Kevin Henze, Ph.D.</h3>
              <p className="text-sm text-ink/40 mb-4">
                If grievance involves Dr. Satiani
              </p>
              <div className="space-y-2 text-ink/60">
                <p>
                  <a
                    href="mailto:psych4rj.DrH@gmail.com"
                    className="hover:text-ink transition-colors"
                  >
                    psych4rj.DrH@gmail.com
                  </a>
                </p>
                <p>
                  <a
                    href="tel:781-768-8048"
                    className="hover:text-ink transition-colors"
                  >
                    781-768-8048
                  </a>
                </p>
                <p className="pt-2 text-sm text-ink/40">
                  267 Langley Drive PMB 1566<br />
                  Lawrenceville, GA 33046-6407
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Conflicts of Interest Section */}
      <section className="py-12 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div 
              className="lg:col-span-4"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeInLeft}
            >
              <p 
                className="text-xs tracking-[0.25em] uppercase font-medium mb-2"
                style={{ color: '#c94b6d' }}
              >
                Disclosure
              </p>
              <div 
                className="w-12 h-1 rounded-full"
                style={{ background: 'linear-gradient(90deg, #e07a4d, #c94b6d)' }}
              />
            </motion.div>

            <motion.div 
              className="lg:col-span-8"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={fadeIn}
            >
              <h2 className="text-display text-2xl sm:text-3xl leading-tight tracking-tight mb-6">
                Conflicts of Interest
              </h2>
              <p className="text-ink/60 leading-relaxed max-w-2xl">
                All presenters have been asked to disclose any conflicts of interest, 
                including commercial support, sponsorships, or other relationships. 
                They have denied any current conflicts and will disclose any that arise 
                at the start of their presentations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer with integrated CTA */}
      <section className="bg-paper pt-20">
        {/* Gradient border wrapper */}
        <div 
          className="rounded-t-[4rem] p-[3px]"
          style={{ background: 'linear-gradient(90deg, #e07a4d 0%, #c94b6d 50%, #a4c639 100%)' }}
        >
        <motion.footer
          className="relative bg-ink text-paper rounded-t-[3.85rem] overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={viewportEarly}
          variants={fadeInUp}
        >
          
          {/* Subtle gradient glow */}
          <div 
            className="absolute top-0 left-1/4 w-1/2 h-96 opacity-10 blur-3xl pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, #c94b6d 0%, transparent 70%)' }}
          />

          {/* CTA Section */}
          <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16">
            <motion.div
              className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={viewportEarly}
              variants={fadeInUp}
            >
              <div className="max-w-xl">
                <p 
                  className="text-xs tracking-[0.25em] uppercase font-medium mb-3"
                  style={{ color: '#e07a4d' }}
                >
                  Get Started
                </p>
                <h2 className="text-display text-3xl sm:text-4xl leading-tight tracking-tight mb-4">
                  Ready to earn your{" "}
                  <span 
                    style={{ 
                      background: 'linear-gradient(90deg, #e07a4d, #c94b6d)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    CE credits
                  </span>?
                </h2>
                <p className="text-paper/50 text-sm leading-relaxed">
                  Join our upcoming conference and advance your professional development while contributing to racial justice in mental health.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Link
                  href="/event/healing-while-harmed-2026"
                  className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-paper rounded-full transition-all hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(135deg, #e07a4d 0%, #c94b6d 100%)' }}
                >
                  View Conference
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="mx-auto max-w-7xl px-6">
            <div 
              className="h-px"
              style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(201, 75, 109, 0.3) 50%, transparent 100%)' }}
            />
          </div>
          
          {/* Main Footer Content */}
          <div className="relative mx-auto max-w-7xl px-6 py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Logo and Contact - Left Column */}
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
                    <a
                      href="tel:+14044106674"
                      className="text-paper/70 hover:text-paper transition-colors"
                    >
                      (404) 410-6674
                    </a>
                  </p>
                  <p>
                    <a
                      href="mailto:psych4rj@gmail.com"
                      className="text-paper/70 hover:text-paper transition-colors"
                    >
                      psych4rj@gmail.com
                    </a>
                  </p>
                </div>
                {/* Social Icons */}
                <div className="flex gap-3 mt-6">
                  <a
                    href="https://linkedin.com/in/psych4rj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 flex items-center justify-center rounded-full border border-paper/15 hover:border-transparent transition-all text-paper/60 hover:text-paper text-sm"
                    style={{ background: 'transparent' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #e07a4d, #c94b6d)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </a>
                  <a
                    href="https://instagram.com/psych4rj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 flex items-center justify-center rounded-full border border-paper/15 hover:border-transparent transition-all text-paper/60 hover:text-paper text-sm"
                    style={{ background: 'transparent' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #c94b6d, #a4c639)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <span className="sr-only">Instagram</span>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </a>
                  <a
                    href="https://threads.net/@psych4rj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 flex items-center justify-center rounded-full border border-paper/15 hover:border-transparent transition-all text-paper/60 hover:text-paper text-sm"
                    style={{ background: 'transparent' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #a4c639, #e07a4d)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <span className="sr-only">Threads</span>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.132-1.13 3.628-1.154 1.12-.018 2.153.086 3.097.293-.048-.596-.16-1.096-.337-1.487-.239-.527-.596-.905-1.063-1.123-.48-.224-1.084-.336-1.797-.336-.714 0-1.319.112-1.8.336-.467.218-.824.596-1.063 1.123-.345.763-.521 1.82-.521 3.14 0 .165.005.33.015.493l-2.051.078c-.017-.214-.026-.435-.026-.66 0-1.702.27-3.07.805-4.067.504-.938 1.216-1.624 2.116-2.038.815-.375 1.76-.566 2.81-.566 1.05 0 1.996.19 2.811.566.9.414 1.612 1.1 2.116 2.038.443.826.71 1.845.798 3.03.502.154.966.358 1.388.62 1.14.71 1.979 1.67 2.494 2.852.752 1.727.793 4.428-1.323 6.5-1.78 1.742-4.1 2.549-7.314 2.574z"/></svg>
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xs font-semibold text-paper/50 uppercase tracking-wider mb-4">
                    About
                  </h3>
                  <nav className="space-y-3">
                    <a
                      href="/#about"
                      className="block text-sm text-paper/70 hover:text-paper transition-colors"
                    >
                      Our Mission
                    </a>
                    <a
                      href="/#team"
                      className="block text-sm text-paper/70 hover:text-paper transition-colors"
                    >
                      Team
                    </a>
                  </nav>
                </div>

                <div>
                  <h3 className="text-xs font-semibold text-paper/50 uppercase tracking-wider mb-4">
                    Programs
                  </h3>
                  <nav className="space-y-3">
                    <a
                      href="/continuing-education"
                      className="block text-sm text-paper/70 hover:text-paper transition-colors"
                    >
                      CE Credits
                    </a>
                    <a
                      href="/#events"
                      className="block text-sm text-paper/70 hover:text-paper transition-colors"
                    >
                      Events
                    </a>
                  </nav>
                </div>

                </div>

              {/* Newsletter - Right Column */}
              <div className="lg:col-span-3">
                <h3 
                  className="text-xs font-semibold uppercase tracking-wider mb-4"
                  style={{ background: 'linear-gradient(90deg, #e07a4d, #c94b6d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  Stay Connected
                </h3>
                <p className="text-sm text-paper/70 mb-6 leading-relaxed">
                  Join our newsletter for updates on racial justice in mental
                  health.
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

            {/* Footer Bottom */}
            <div className="mt-20 pt-8 relative flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              {/* Gradient divider line */}
              <div 
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: 'linear-gradient(90deg, transparent 0%, #c94b6d 20%, #e07a4d 50%, #a4c639 80%, transparent 100%)' }}
              />
              <div className="text-xs text-paper/40">
                © 2026 Psychologists for Racial Justice. All rights reserved.
              </div>
              <div className="flex gap-8 text-xs">
                <Link
                  href="/privacy"
                  className="text-paper/50 hover:text-paper transition-colors relative group"
                >
                  Privacy
                  <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all" style={{ background: 'linear-gradient(90deg, #e07a4d, #c94b6d)' }} />
                </Link>
                <Link
                  href="/terms"
                  className="text-paper/50 hover:text-paper transition-colors relative group"
                >
                  Terms
                  <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all" style={{ background: 'linear-gradient(90deg, #c94b6d, #a4c639)' }} />
                </Link>
                <Link
                  href="/accessibility"
                  className="text-paper/50 hover:text-paper transition-colors relative group"
                >
                  Accessibility
                  <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all" style={{ background: 'linear-gradient(90deg, #a4c639, #e07a4d)' }} />
                </Link>
              </div>
            </div>
          </div>
        </motion.footer>
        </div>
      </section>
    </main>
  );
}

