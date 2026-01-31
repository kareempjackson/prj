"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { NavHeader } from "../../../components/brand/NavHeader";

// Sleek SVG Icons with accessibility support
const CalendarIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const VideoIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <rect x="2" y="5" width="14" height="14" rx="2" />
    <path d="M16 10l5-3v10l-5-3V10z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" focusable="false">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true" focusable="false">
    <path d="M5 12l5 5L20 7" />
  </svg>
);

// Optimized animation variants for smooth 60fps scrolling
const fadeInUp = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.08 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function EventContent() {
  const speakers = [
    { name: "Candice Hargons, PhD", role: "Opening Speaker", image: "/images/speakers/Candice - PRJ Speaker .jpeg" },
    { name: "Derek M. Griffith, PhD", role: "Keynote Speaker", image: "/images/speakers/DSC00627 closeup - Derek Griffith.jpg" },
    { name: "David McIntosh, PhD", role: "Panelist", image: "/images/speakers/McIntosh headshot - Dave McIntosh.jpg" },
    { name: "Briana Spivey, PhD", role: "Panelist", image: "/images/speakers/20250808 Spivey Briana - Briana Spivey.JPG" },
    { name: "Grace Chen, PhD", role: "Panelist", image: "/images/speakers/GraceChen.headshot - Grace Chen.jpg" },
    { name: "Alison Cerezo, PhD", role: "Panelist", image: "/images/speakers/Alison Cerezo.jpg" },
    { name: "Adiaha Spinks-Franklin, MD, MPH, FAAP", role: "Panelist", image: "/images/speakers/DSC_1850 (21) - DBPDoc PLLC.jpg" },
  ];

  const topics = [
    {
      title: "Racism and Clinical Practice",
      description: "Developing skills to identify and address structural determinants of health disparities within therapy relationships and treatment planning",
    },
    {
      title: "Decolonizing Mental Health Diagnosis",
      description: "Examining how diagnostic frameworks, assessment tools, and therapeutic modalities may perpetuate racial bias and exploring racially conscious alternatives",
    },
    {
      title: "Mental Health Impacts of Medical Racism",
      description: "Addressing trauma, medical mistrust, and psychological sequelae experienced by communities of color within healthcare settings",
    },
    {
      title: "Healthcare Provider Bias",
      description: "Understanding research on implicit and explicit bias among medical professionals and implementing evidence-based interventions",
    },
    {
      title: "Healthcare Training & Education Reform",
      description: "Integrating race-conscious education, health equity curricula, and structural competency training into psychology and medical programs",
    },
    {
      title: "Community-Centered Healing Models",
      description: "Highlighting innovative approaches that center community wisdom, traditional healing practices, and liberation psychology frameworks",
    },
    {
      title: "Policy Advocacy for Healthcare Equity",
      description: "Developing strategies to influence institutional policies, healthcare regulations, and funding structures",
    },
    {
      title: "Increasing Racial Diversity",
      description: "Examining barriers to entry and advancement for professionals of Color and implementing structural changes",
    },
  ];

  const attendees = [
    "Licensed psychologists and mental health clinicians",
    "Psychology trainees, graduate students, and interns",
    "Medical professionals and healthcare providers",
    "Public health researchers and practitioners",
    "Medical and psychology educators",
    "Healthcare administrators and policy makers",
    "Community health advocates and organizers",
    "Interdisciplinary teams working in healthcare settings",
  ];

  return (
    <main id="main-content" className="min-h-dvh bg-paper text-ink" role="main">
      <NavHeader />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/faith-esele-V190dZavyL4-unsplash.jpg"
            alt="Racism is a Public Health Crisis"
            fill
            className="object-cover"
            priority
          />
          <div 
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(11, 13, 18, 0.6) 0%, rgba(11, 13, 18, 0.85) 60%, rgba(11, 13, 18, 0.95) 100%)' }}
          />
        </div>

        <div className="relative w-full mx-auto max-w-7xl px-4 sm:px-6 pb-8 sm:pb-16 lg:pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            {/* Minimal badge */}
            <motion.div variants={staggerItem} className="mb-4 sm:mb-8">
              <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-paper/40 font-medium">
                3rd Annual Virtual Conference
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={staggerItem}
              className="text-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] sm:leading-[1.05] tracking-tight text-paper mb-4 sm:mb-6"
            >
              Healing While{" "}
              <span 
                style={{ 
                  background: 'linear-gradient(90deg, #e07a4d, #c94b6d)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Harmed
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={staggerItem}
              className="text-sm sm:text-lg lg:text-xl text-paper/60 font-light max-w-xl mb-6 sm:mb-10"
            >
              Dismantling racism in mental health systems and healthcare
            </motion.p>

            {/* Event meta - minimal inline */}
            <motion.div 
              variants={staggerItem} 
              className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-paper/40 mb-6 sm:mb-12"
            >
              <span>March 13, 2026</span>
              <span className="w-1 h-1 rounded-full bg-paper/20 hidden sm:block" />
              <span className="sm:hidden">•</span>
              <span>10 AM – 4 PM EDT</span>
              <span className="w-1 h-1 rounded-full bg-paper/20 hidden sm:block" />
              <span className="sm:hidden">•</span>
              <span>Virtual</span>
            </motion.div>

            {/* CTA */}
            <motion.div variants={staggerItem} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6">
              <a
                href="https://www.eventbrite.com/e/healing-while-harmed-racism-in-mental-health-healthcare-systems-tickets-1980195056720"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-medium text-paper rounded-full transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-paper/50"
                style={{ background: 'linear-gradient(135deg, #e07a4d 0%, #c94b6d 100%)' }}
              >
                Register Now
                <span className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true">→</span>
              </a>
              <a
                href="http://eepurl.com/iK2PlE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-paper/50 hover:text-paper transition-colors text-center sm:text-left focus:outline-none focus:ring-2 focus:ring-paper/50 rounded py-2"
              >
                Join mailing list
              </a>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* About Section */}
      <section className="py-12 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <motion.div 
              className="lg:col-span-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p 
                className="text-xs tracking-[0.25em] uppercase font-medium mb-2"
                style={{ color: '#c94b6d' }}
              >
                About the Conference
              </p>
              <div 
                className="w-12 h-1 rounded-full"
                style={{ background: 'linear-gradient(90deg, #e07a4d, #c94b6d)' }}
              />
            </motion.div>

            <motion.div 
              className="lg:col-span-8 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="text-lg leading-relaxed text-ink/80">
                The intersection of healthcare and racial justice has never been more critical. 
                Recent research reveals that structural racism in healthcare systems continues 
                to create profound disparities in access, quality, and outcomes for communities 
                of color. From the persistent effects of medical apartheid to contemporary 
                manifestations of physician bias, healthcare institutions, including mental 
                health systems, remain sites where racism inflicts both overt and insidious harm.
              </p>

              <p className="text-lg leading-relaxed text-ink/80">
                Join us for the third annual Psychologists for Racial Justice Virtual Conference 
                as we explore the complex intersections of racism, healthcare, and mental health. 
                This year&apos;s conference will provide a critical platform for understanding how 
                systemic racism operates within healthcare delivery, perpetuates health disparities, 
                and undermines the therapeutic process itself.
              </p>

              <p className="text-lg leading-relaxed text-ink/80">
                More importantly, we will explore strategies, innovative interventions, and 
                community-centered approaches that psychologists can employ to transform these 
                systems from within.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="py-12 sm:py-20 lg:py-32 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <p 
              className="text-xs tracking-[0.25em] uppercase font-medium mb-4 text-center"
              style={{ color: '#c94b6d' }}
            >
              Background
            </p>
            <h2 className="text-display text-3xl sm:text-4xl leading-tight tracking-tight text-center mb-12">
              Why This Conference{" "}
              <span 
                style={{ 
                  background: 'linear-gradient(90deg, #e07a4d, #c94b6d)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Matters
              </span>
            </h2>

            <div className="space-y-6 text-ink/70 leading-relaxed">
              <p>
                Recent empirical evidence underscores the devastating impact of racism on health 
                outcomes, with direct implications for psychologists and behavioral health providers. 
                The COVID-19 pandemic shattered the long-observed &quot;mental health paradox,&quot; where 
                Communities of Color reported lower rates of mental health disorders despite 
                experiencing greater stressors, revealing how acute systemic crises can overwhelm 
                even the most resilient communities.
              </p>

              <p>
                Structural racism manifests through multiple pathways: bias among providers leading 
                to differential pain management and treatment recommendations; race-based clinical 
                guidelines that perpetuate biological determinism; exclusionary medical education 
                curricula that frame race as biology rather than addressing racism as a social 
                determinant; and institutional policies that systematically disadvantage communities 
                of color.
              </p>

              <p 
                className="text-xl font-medium border-l-4 pl-6 py-2"
                style={{ borderColor: '#c94b6d', color: '#1a1a1a' }}
              >
                Healthcare systems have the power to either perpetuate harm or catalyze healing. 
                As psychologists, we possess unique expertise in understanding trauma, resilience, 
                and systems change that positions us to lead transformation within these institutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-12 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p 
              className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
              style={{ color: '#c94b6d' }}
            >
              Key Topics
            </p>
            <h2 className="text-display text-3xl sm:text-4xl leading-tight tracking-tight">
              What You&apos;ll{" "}
              <span 
                style={{ 
                  background: 'linear-gradient(90deg, #e07a4d, #c94b6d, #a4c639)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Learn
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                variants={staggerItem}
                className="p-6 rounded-2xl bg-surface border border-ink/5"
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-paper text-sm font-semibold mb-4"
                  style={{ background: `linear-gradient(135deg, ${index % 2 === 0 ? '#e07a4d, #c94b6d' : '#c94b6d, #a4c639'})` }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold mb-2">{topic.title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{topic.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-16 sm:py-24 lg:py-36 bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <p 
              className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
              style={{ color: '#e07a4d' }}
            >
              Speaker Lineup
            </p>
            <h2 className="text-display text-3xl sm:text-4xl leading-tight tracking-tight">
              Learn from{" "}
              <span 
                style={{ 
                  background: 'linear-gradient(90deg, #e07a4d, #c94b6d)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                leading experts
              </span>
            </h2>
          </motion.div>

          {/* Featured Speakers - Keynote & Opening */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {speakers.slice(0, 2).map((speaker, index) => (
              <motion.div
                key={speaker.name}
                variants={staggerItem}
                className="group relative rounded-2xl overflow-hidden"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                    style={{ 
                      background: index === 0 ? 'linear-gradient(135deg, #e07a4d, #c94b6d)' : 'linear-gradient(135deg, #c94b6d, #a4c639)',
                      color: 'white'
                    }}
                  >
                    {speaker.role}
                  </span>
                  <h3 className="text-xl font-semibold text-paper">{speaker.name}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Panelists */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {speakers.slice(2).map((speaker) => (
              <motion.div
                key={speaker.name}
                variants={staggerItem}
                className="group"
              >
                <div className="relative aspect-square rounded-xl overflow-hidden mb-4">
                  <Image
                    src={speaker.image}
                    alt={speaker.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-medium text-paper text-sm">{speaker.name}</h3>
                <p className="text-xs text-paper/50">{speaker.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Who Should Attend */}
      <section className="py-12 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p 
                className="text-xs tracking-[0.25em] uppercase font-medium mb-4"
                style={{ color: '#c94b6d' }}
              >
                Who Should Attend
              </p>
              <h2 className="text-display text-3xl sm:text-4xl leading-tight tracking-tight mb-6">
                This conference is{" "}
                <span 
                  style={{ 
                    background: 'linear-gradient(90deg, #e07a4d, #c94b6d)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  for you
                </span>
              </h2>
              <p className="text-ink/70 leading-relaxed">
                Whether you are a clinician working directly with patients affected by medical 
                racism, a researcher investigating health disparities, an educator training 
                the next generation of healthcare providers, or an advocate working for policy 
                change, this conference will provide you with cutting-edge research, practical 
                tools, and collaborative networks essential for this critical work.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {attendees.map((attendee) => (
                <motion.div
                  key={attendee}
                  variants={staggerItem}
                  className="flex items-start gap-3 p-4 rounded-xl bg-surface"
                >
                  <span style={{ color: '#a4c639' }}><CheckIcon /></span>
                  <span className="text-sm text-ink/80">{attendee}</span>
                </motion.div>
              ))}
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
          <footer className="relative bg-ink text-paper rounded-t-[3.85rem] overflow-hidden">
            
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
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="max-w-xl">
                  <p 
                    className="text-xs tracking-[0.25em] uppercase font-medium mb-3"
                    style={{ color: '#e07a4d' }}
                  >
                    March 13, 2026
                  </p>
                  <h2 className="text-display text-3xl sm:text-4xl leading-tight tracking-tight mb-4">
                    Ready to{" "}
                    <span 
                      style={{ 
                        background: 'linear-gradient(90deg, #e07a4d, #c94b6d)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      join us
                    </span>?
                  </h2>
                  <p className="text-paper/50 text-sm leading-relaxed">
                    Secure your spot at our third annual virtual conference on dismantling racism in healthcare.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.eventbrite.com/e/healing-while-harmed-racism-in-mental-health-healthcare-systems-tickets-1980195056720"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-paper rounded-full transition-all hover:scale-[1.02]"
                    style={{ background: 'linear-gradient(135deg, #e07a4d 0%, #c94b6d 100%)' }}
                  >
                    Register
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </a>
                  <a
                    href="https://www.gofundme.com/f/donate-to-psychologists-for-racial-justice?utm_campaign=p_lico+share-sheet-first-launch&utm_medium=copy_link&utm_source="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-paper/50 hover:text-paper transition-colors"
                  >
                    Support PRJ
                  </a>
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
            <div className="relative mx-auto max-w-7xl px-6 py-20">
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
                    <p>123 Justice Avenue, Suite 200</p>
                    <p>Cambridge, MA 02138</p>
                  </div>
                  <div className="mt-5 space-y-1 text-sm">
                    <p>
                      <a
                        href="tel:617-555-0123"
                        className="text-paper/70 hover:text-paper transition-colors"
                      >
                        617-555-0123
                      </a>
                    </p>
                    <p>
                      <a
                        href="mailto:contact@psychforracialjustice.org"
                        className="text-paper/70 hover:text-paper transition-colors"
                      >
                        contact@psychforracialjustice.org
                      </a>
                    </p>
                  </div>
                  {/* Social Icons */}
                  <div className="flex gap-3 mt-6">
                    <a
                      href="#"
                      className="group w-10 h-10 flex items-center justify-center rounded-full border border-paper/15 hover:border-transparent transition-all text-paper/60 hover:text-paper text-sm"
                      style={{ background: 'transparent' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #e07a4d, #c94b6d)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <span className="sr-only">Facebook</span>f
                    </a>
                    <a
                      href="#"
                      className="group w-10 h-10 flex items-center justify-center rounded-full border border-paper/15 hover:border-transparent transition-all text-paper/60 hover:text-paper text-sm"
                      style={{ background: 'transparent' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #c94b6d, #a4c639)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <span className="sr-only">X</span>
                      𝕏
                    </a>
                    <a
                      href="#"
                      className="group w-10 h-10 flex items-center justify-center rounded-full border border-paper/15 hover:border-transparent transition-all text-paper/60 hover:text-paper text-sm"
                      style={{ background: 'transparent' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #a4c639, #e07a4d)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <span className="sr-only">Instagram</span>
                      IG
                    </a>
                    <a
                      href="#"
                      className="group w-10 h-10 flex items-center justify-center rounded-full border border-paper/15 hover:border-transparent transition-all text-paper/60 hover:text-paper text-sm"
                      style={{ background: 'transparent' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(135deg, #e07a4d, #a4c639)'}
                      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                      <span className="sr-only">LinkedIn</span>
                      in
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
                        Continuing Education Credits
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
          </footer>
        </div>
      </section>
    </main>
  );
}

