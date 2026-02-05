"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { NavHeader } from "../../../components/brand/NavHeader";

// Sleek SVG Icons with accessibility support
const CalendarIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    focusable="false"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
  </svg>
);

const ClockIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const VideoIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    focusable="false"
  >
    <rect x="2" y="5" width="14" height="14" rx="2" />
    <path d="M16 10l5-3v10l-5-3V10z" />
  </svg>
);

const UserIcon = () => (
  <svg
    className="w-8 h-8"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
  </svg>
);

const CheckIcon = () => (
  <svg
    className="w-4 h-4 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M5 12l5 5L20 7" />
  </svg>
);

// Optimized animation variants for smooth 60fps scrolling
const fadeInUp = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function EventContent() {
  const speakers = [
    {
      name: "Candice Hargons, PhD",
      role: "Opening Speaker",
      image: "/images/speakers/Candice - PRJ Speaker .jpeg",
    },
    {
      name: "Derek M. Griffith, PhD",
      role: "Keynote Speaker",
      image: "/images/speakers/DSC00627 closeup - Derek Griffith.jpg",
    },
    {
      name: "David McIntosh, PhD",
      role: "Panelist",
      image: "/images/speakers/McIntosh headshot - Dave McIntosh.jpg",
    },
    {
      name: "Briana Spivey, PhD",
      role: "Panelist",
      image: "/images/speakers/20250808 Spivey Briana - Briana Spivey.JPG",
    },
    {
      name: "Grace Chen, PhD",
      role: "Panelist",
      image: "/images/speakers/GraceChen.headshot - Grace Chen.jpg",
    },
    {
      name: "Alison Cerezo, PhD",
      role: "Panelist",
      image: "/images/speakers/Alison Cerezo.jpg",
    },
    {
      name: "Adiaha Spinks-Franklin, MD, MPH, FAAP",
      role: "Panelist",
      image: "/images/speakers/DSC_1850 (21) - DBPDoc PLLC.jpg",
    },
    {
      name: "Melba Vasquez, PhD",
      role: "Panelist",
      image: "/images/speakers/Melba Vasquez, PhD.jpg",
    },
  ];

  const topics = [
    {
      title: "Racism and Clinical Practice",
      description:
        "Developing skills to identify and address structural determinants of health disparities within therapy relationships and treatment planning",
    },
    {
      title: "Decolonizing Mental Health Diagnosis",
      description:
        "Examining how diagnostic frameworks, assessment tools, and therapeutic modalities may perpetuate racial bias and exploring racially conscious alternatives",
    },
    {
      title: "Mental Health Impacts of Medical Racism",
      description:
        "Addressing trauma, medical mistrust, and psychological sequelae experienced by communities of color within healthcare settings",
    },
    {
      title: "Healthcare Provider Bias",
      description:
        "Understanding research on implicit and explicit bias among medical professionals and implementing evidence-based interventions",
    },
    {
      title: "Healthcare Training & Education Reform",
      description:
        "Integrating race-conscious education, health equity curricula, and structural competency training into psychology and medical programs",
    },
    {
      title: "Community-Centered Healing Models",
      description:
        "Highlighting innovative approaches that center community wisdom, traditional healing practices, and liberation psychology frameworks",
    },
    {
      title: "Policy Advocacy for Healthcare Equity",
      description:
        "Developing strategies to influence institutional policies, healthcare regulations, and funding structures",
    },
    {
      title: "Increasing Racial Diversity",
      description:
        "Examining barriers to entry and advancement for professionals of Color and implementing structural changes",
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
            style={{
              background:
                "linear-gradient(180deg, rgba(11, 13, 18, 0.6) 0%, rgba(11, 13, 18, 0.85) 60%, rgba(11, 13, 18, 0.95) 100%)",
            }}
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
                  background: "linear-gradient(90deg, #e07a4d, #c94b6d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
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
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6"
            >
              <a
                href="https://www.eventbrite.com/e/healing-while-harmed-racism-in-mental-health-healthcare-systems-tickets-1980195056720"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-medium text-paper rounded-full transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-paper/50"
                style={{
                  background:
                    "linear-gradient(135deg, #e07a4d 0%, #c94b6d 100%)",
                }}
              >
                Register Now
                <span
                  className="group-hover:translate-x-0.5 transition-transform"
                  aria-hidden="true"
                >
                  →
                </span>
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
                style={{ color: "#c94b6d" }}
              >
                About the Conference
              </p>
              <div
                className="w-12 h-1 rounded-full"
                style={{
                  background: "linear-gradient(90deg, #e07a4d, #c94b6d)",
                }}
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
                The intersection of healthcare and racial justice has never been
                more critical. Recent research reveals that structural racism in
                healthcare systems continues to create profound disparities in
                access, quality, and outcomes for communities of color. From the
                persistent effects of medical apartheid to contemporary
                manifestations of physician bias, healthcare institutions,
                including mental health systems, remain sites where racism
                inflicts both overt and insidious harm.
              </p>

              <p className="text-lg leading-relaxed text-ink/80">
                Join us for the third annual Psychologists for Racial Justice
                Virtual Conference as we explore the complex intersections of
                racism, healthcare, and mental health. This year&apos;s
                conference will provide a critical platform for understanding
                how systemic racism operates within healthcare delivery,
                perpetuates health disparities, and undermines the therapeutic
                process itself.
              </p>

              <p className="text-lg leading-relaxed text-ink/80">
                More importantly, we will explore strategies, innovative
                interventions, and community-centered approaches that
                psychologists can employ to transform these systems from within.
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
              style={{ color: "#c94b6d" }}
            >
              Background
            </p>
            <h2 className="text-display text-3xl sm:text-4xl leading-tight tracking-tight text-center mb-12">
              Why This Conference{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #e07a4d, #c94b6d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Matters
              </span>
            </h2>

            <div className="space-y-6 text-ink/70 leading-relaxed">
              <p>
                Recent empirical evidence underscores the devastating impact of
                racism on health outcomes, with direct implications for
                psychologists and behavioral health providers. The COVID-19
                pandemic shattered the long-observed &quot;mental health
                paradox,&quot; where Communities of Color reported lower rates
                of mental health disorders despite experiencing greater
                stressors, revealing how acute systemic crises can overwhelm
                even the most resilient communities.
              </p>

              <p>
                Structural racism manifests through multiple pathways: bias
                among providers leading to differential pain management and
                treatment recommendations; race-based clinical guidelines that
                perpetuate biological determinism; exclusionary medical
                education curricula that frame race as biology rather than
                addressing racism as a social determinant; and institutional
                policies that systematically disadvantage communities of color.
              </p>

              <p
                className="text-xl font-medium border-l-4 pl-6 py-2"
                style={{ borderColor: "#c94b6d", color: "#1a1a1a" }}
              >
                Healthcare systems have the power to either perpetuate harm or
                catalyze healing. As psychologists, we possess unique expertise
                in understanding trauma, resilience, and systems change that
                positions us to lead transformation within these institutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 sm:py-24 lg:py-36 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Section header - minimal, editorial */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16 lg:mb-24"
          >
            <div className="flex items-center gap-6 mb-6">
              <div
                className="h-px flex-1 max-w-[60px]"
                style={{
                  background: "linear-gradient(90deg, #c94b6d, transparent)",
                }}
              />
              <span
                className="text-[10px] tracking-[0.35em] uppercase font-medium"
                style={{ color: "#c94b6d" }}
              >
                Curriculum
              </span>
            </div>
            <h2 className="text-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight max-w-3xl">
              Eight pillars of
              <br />
              <span className="text-ink/30">transformative</span>{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #e07a4d, #c94b6d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                learning
              </span>
            </h2>
          </motion.div>

          {/* Topics grid - editorial two-column */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 xl:gap-x-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {topics.map((topic, index) => (
              <motion.div
                key={topic.title}
                variants={staggerItem}
                className="group relative"
              >
                {/* Top border with gradient reveal on hover */}
                <div className="relative h-px w-full overflow-hidden">
                  <div className="absolute inset-0 bg-ink/[0.08]" />
                  <div
                    className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ease-out"
                    style={{
                      background: `linear-gradient(90deg, ${
                        index % 3 === 0
                          ? "#e07a4d, #c94b6d"
                          : index % 3 === 1
                            ? "#c94b6d, #a4c639"
                            : "#a4c639, #e07a4d"
                      })`,
                    }}
                  />
                </div>

                <div className="py-8 lg:py-10">
                  {/* Number + Title row */}
                  <div className="flex items-baseline gap-4 mb-3">
                    <span
                      className="text-display text-2xl sm:text-3xl font-light tabular-nums transition-all duration-300 group-hover:translate-x-1"
                      style={{
                        background: `linear-gradient(135deg, ${
                          index % 3 === 0
                            ? "#e07a4d, #c94b6d"
                            : index % 3 === 1
                              ? "#c94b6d, #a4c639"
                              : "#a4c639, #e07a4d"
                        })`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        opacity: 0.7,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-lg sm:text-xl font-medium text-ink tracking-tight leading-tight group-hover:text-ink/80 transition-colors">
                      {topic.title}
                    </h3>
                  </div>

                  {/* Description - elegant reveal */}
                  <div className="pl-12 sm:pl-14">
                    <p className="text-sm text-ink/45 leading-relaxed max-w-md group-hover:text-ink/60 transition-colors duration-300">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom accent */}
          <motion.div
            className="mt-8 lg:mt-12 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div
              className="h-px w-32"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(201, 75, 109, 0.3), transparent)",
              }}
            />
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
              style={{ color: "#e07a4d" }}
            >
              Speaker Lineup
            </p>
            <h2 className="text-display text-3xl sm:text-4xl leading-tight tracking-tight">
              Learn from{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #e07a4d, #c94b6d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
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
                      background:
                        index === 0
                          ? "linear-gradient(135deg, #e07a4d, #c94b6d)"
                          : "linear-gradient(135deg, #c94b6d, #a4c639)",
                      color: "white",
                    }}
                  >
                    {speaker.role}
                  </span>
                  <h3 className="text-xl font-semibold text-paper">
                    {speaker.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Panelists */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
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
                <h3 className="font-medium text-paper text-sm">
                  {speaker.name}
                </h3>
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
                style={{ color: "#c94b6d" }}
              >
                Who Should Attend
              </p>
              <h2 className="text-display text-3xl sm:text-4xl leading-tight tracking-tight mb-6">
                This conference is{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #e07a4d, #c94b6d)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  for you
                </span>
              </h2>
              <p className="text-ink/70 leading-relaxed">
                Whether you are a clinician working directly with patients
                affected by medical racism, a researcher investigating health
                disparities, an educator training the next generation of
                healthcare providers, or an advocate working for policy change,
                this conference will provide you with cutting-edge research,
                practical tools, and collaborative networks essential for this
                critical work.
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
                  <span style={{ color: "#a4c639" }}>
                    <CheckIcon />
                  </span>
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
          style={{
            background:
              "linear-gradient(90deg, #e07a4d 0%, #c94b6d 50%, #a4c639 100%)",
          }}
        >
          <footer className="relative bg-ink text-paper rounded-t-[3.85rem] overflow-hidden">
            {/* Subtle gradient glow */}
            <div
              className="absolute top-0 left-1/4 w-1/2 h-96 opacity-10 blur-3xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at center, #c94b6d 0%, transparent 70%)",
              }}
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
                    style={{ color: "#e07a4d" }}
                  >
                    March 13, 2026
                  </p>
                  <h2 className="text-display text-3xl sm:text-4xl leading-tight tracking-tight mb-4">
                    Ready to{" "}
                    <span
                      style={{
                        background: "linear-gradient(90deg, #e07a4d, #c94b6d)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      join us
                    </span>
                    ?
                  </h2>
                  <p className="text-paper/50 text-sm leading-relaxed">
                    Secure your spot at our third annual virtual conference on
                    dismantling racism in healthcare.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.eventbrite.com/e/healing-while-harmed-racism-in-mental-health-healthcare-systems-tickets-1980195056720"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-paper rounded-full transition-all hover:scale-[1.02]"
                    style={{
                      background:
                        "linear-gradient(135deg, #e07a4d 0%, #c94b6d 100%)",
                    }}
                  >
                    Register
                    <span className="group-hover:translate-x-0.5 transition-transform">
                      →
                    </span>
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
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(201, 75, 109, 0.3) 50%, transparent 100%)",
                }}
              />
            </div>

            {/* Main Footer Content */}
            <div className="relative mx-auto max-w-7xl px-6 py-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
                {/* Logo and Contact - Left Column */}
                <div className="lg:col-span-4">
                  <div
                    className="relative h-80 w-80 -mb-12"
                    style={{ marginLeft: "-90px" }}
                  >
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
                      style={{ background: "transparent" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          "linear-gradient(135deg, #e07a4d, #c94b6d)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="currentColor"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/psych4rj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-10 h-10 flex items-center justify-center rounded-full border border-paper/15 hover:border-transparent transition-all text-paper/60 hover:text-paper text-sm"
                      style={{ background: "transparent" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          "linear-gradient(135deg, #c94b6d, #a4c639)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="currentColor"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </a>
                    <a
                      href="https://threads.net/@psych4rj"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-10 h-10 flex items-center justify-center rounded-full border border-paper/15 hover:border-transparent transition-all text-paper/60 hover:text-paper text-sm"
                      style={{ background: "transparent" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          "linear-gradient(135deg, #a4c639, #e07a4d)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      <span className="sr-only">Threads</span>
                      <svg
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="currentColor"
                      >
                        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.783 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.182.408-2.256 1.332-3.023.88-.73 2.132-1.13 3.628-1.154 1.12-.018 2.153.086 3.097.293-.048-.596-.16-1.096-.337-1.487-.239-.527-.596-.905-1.063-1.123-.48-.224-1.084-.336-1.797-.336-.714 0-1.319.112-1.8.336-.467.218-.824.596-1.063 1.123-.345.763-.521 1.82-.521 3.14 0 .165.005.33.015.493l-2.051.078c-.017-.214-.026-.435-.026-.66 0-1.702.27-3.07.805-4.067.504-.938 1.216-1.624 2.116-2.038.815-.375 1.76-.566 2.81-.566 1.05 0 1.996.19 2.811.566.9.414 1.612 1.1 2.116 2.038.443.826.71 1.845.798 3.03.502.154.966.358 1.388.62 1.14.71 1.979 1.67 2.494 2.852.752 1.727.793 4.428-1.323 6.5-1.78 1.742-4.1 2.549-7.314 2.574z" />
                      </svg>
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
                    style={{
                      background: "linear-gradient(90deg, #e07a4d, #c94b6d)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
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
                    style={{
                      background:
                        "linear-gradient(135deg, #e07a4d 0%, #c94b6d 50%, #a4c639 100%)",
                    }}
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
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, #c94b6d 20%, #e07a4d 50%, #a4c639 80%, transparent 100%)",
                  }}
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
                    <span
                      className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all"
                      style={{
                        background: "linear-gradient(90deg, #e07a4d, #c94b6d)",
                      }}
                    />
                  </Link>
                  <Link
                    href="/terms"
                    className="text-paper/50 hover:text-paper transition-colors relative group"
                  >
                    Terms
                    <span
                      className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all"
                      style={{
                        background: "linear-gradient(90deg, #c94b6d, #a4c639)",
                      }}
                    />
                  </Link>
                  <Link
                    href="/accessibility"
                    className="text-paper/50 hover:text-paper transition-colors relative group"
                  >
                    Accessibility
                    <span
                      className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all"
                      style={{
                        background: "linear-gradient(90deg, #a4c639, #e07a4d)",
                      }}
                    />
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
